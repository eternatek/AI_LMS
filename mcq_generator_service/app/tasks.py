from crewai import Task
from .agents import MCQCraftingAgents
import json

class MCQCraftingTasks:
    def generate_single_mcq_task(self, agent: MCQCraftingAgents, subject: str, topic: str, difficulty: str, existing_question_texts: list[str]):
        """
        Task to generate a single MCQ.
        Includes context of existing questions for the current batch to avoid self-repetition within the batch.
        """
        existing_questions_context = ""
        if existing_question_texts:
            existing_questions_context = f"""
            IMPORTANT: Avoid generating questions that are very similar to these already generated in this batch:
            {existing_question_texts}
            """

        return Task(
            description=f"""
            Generate ONE Multiple Choice Question (MCQ) for the subject '{subject}' and topic '{topic}'.
            The difficulty level should be '{difficulty}'.

            The MCQ must include:
            1. A clear question statement.
            2. Four distinct options, labeled A, B, C, D.
            3. Indication of the correct answer (e.g., "A").
            4. A brief explanation for the correct answer (optional but preferred).

            {existing_questions_context}

            Output MUST be a single JSON object matching this exact structure:
            {{
                "question": "The question text?",
                "options": {{
                    "A": "Option A text",
                    "B": "Option B text",
                    "C": "Option C text",
                    "D": "Option D text"
                }},
                "correct_answer": "A",
                "explanation": "Brief explanation why A is correct."
            }}
            Ensure the output is ONLY the JSON object and nothing else.
            """,
            agent=agent,
            expected_output="A single JSON object representing the MCQ, as specified in the description."
        )