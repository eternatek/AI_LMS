from crewai import Crew, Process
from .agents import MCQCraftingAgents
from .tasks import MCQCraftingTasks
from .vector_store import find_similar_questions, add_question_to_vector_store
from .models import MCQ
import json
import logging

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


def generate_unique_mcqs(subject: str, topic: str, num_questions: int, difficulty: str) -> list[MCQ]:
    agents = MCQCraftingAgents()
    tasks = MCQCraftingTasks()

    mcq_writer = agents.mcq_writer_agent()
    
    generated_mcqs = []
    generated_question_texts_this_batch = [] # To avoid immediate repetition within the same request
    max_retries_per_question = 3 # Max retries if a question is not unique or parsing fails

    while len(generated_mcqs) < num_questions:
        current_retry = 0
        question_generated_successfully = False

        while not question_generated_successfully and current_retry < max_retries_per_question:
            single_mcq_task = tasks.generate_single_mcq_task(
                mcq_writer, subject, topic, difficulty, generated_question_texts_this_batch
            )
            
            # Setup and kickoff the crew for a single question
            crew = Crew(
                agents=[mcq_writer],
                tasks=[single_mcq_task],
                process=Process.sequential,
                verbose=1 # 0 for no logs, 1 for some, 2 for detailed
            )
            
            logger.info(f"Attempting to generate question #{len(generated_mcqs) + 1} (Retry {current_retry + 1})")
            result_json_str = crew.kickoff()
            print("🧪 Raw LLM response:\n", result_json_str)

            try:
                # The LLM might sometimes add markdown ```json ... ```, try to strip it
                if result_json_str.strip().startswith("```json"):
                    result_json_str = result_json_str.strip()[7:-3].strip()
                elif result_json_str.strip().startswith("```"):
                     result_json_str = result_json_str.strip()[3:-3].strip()


                mcq_data = json.loads(result_json_str)
                
                # Validate structure somewhat (Pydantic will do more)
                if not all(k in mcq_data for k in ["question", "options", "correct_answer"]):
                    raise ValueError("MCQ JSON missing required fields.")
                if not isinstance(mcq_data["options"], dict) or len(mcq_data["options"]) != 4:
                     raise ValueError("MCQ options are not a dict of 4 items.")


                candidate_mcq = MCQ(**mcq_data)
                
                # Check for uniqueness in ChromaDB
                # We use a lower threshold here because we are also asking the LLM to make it different.
                # If we were only relying on Chroma, we'd use a higher threshold.
                similar = find_similar_questions(candidate_mcq.question, subject, topic, n_results=1, threshold=0.95) 
                
                if not similar:
                    add_question_to_vector_store(
                        candidate_mcq.question, subject, topic, difficulty
                    )
                    generated_mcqs.append(candidate_mcq)
                    generated_question_texts_this_batch.append(candidate_mcq.question)
                    question_generated_successfully = True
                    logger.info(f"Successfully generated and stored unique question: {candidate_mcq.question[:50]}...")
                else:
                    logger.warning(f"Generated question too similar to existing: {candidate_mcq.question[:50]}... Retrying.")
                    # The task prompt already includes a note to make it different on retry by passing existing_question_texts
                    # No need to pass `similar[0]['document']` directly to prompt, as the LLM is asked to generate one for the topic.
                    current_retry += 1

            except json.JSONDecodeError as e:
                logger.error(f"Failed to parse LLM output as JSON: {e}. Output: '{result_json_str}'")
                current_retry += 1
            except ValueError as e:
                logger.error(f"Validation error for generated MCQ: {e}. Output: '{result_json_str}'")
                current_retry += 1
            except Exception as e:
                logger.error(f"An unexpected error occurred during MCQ processing: {e}")
                current_retry += 1

        if not question_generated_successfully:
            logger.error(f"Failed to generate a unique question after {max_retries_per_question} retries. Moving on or stopping.")
            # Decide: stop here, or continue trying for fewer questions than requested?
            # For now, we'll just generate fewer if we can't get enough unique ones.
            # You might want to raise an exception if num_questions cannot be met.
            if len(generated_mcqs) < num_questions / 2 : # Arbitrary: if less than half, maybe it's an issue
                 logger.warning("Significantly fewer questions generated than requested. Check topic specificity or LLM.")
                 break # Stop if we can't generate enough

    return generated_mcqs