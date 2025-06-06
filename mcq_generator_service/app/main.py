# mcq_generator_service/app/main.py

from fastapi import FastAPI, HTTPException, Body, status
from .models import MCQGenerationRequest, MCQGenerationResponse
from .crew import generate_unique_mcqs
from .database import SessionLocal
from .db_models import MCQDB
import logging

app = FastAPI(
    title="MCQ Generator Service",
    description="Generates unique MCQs using CrewAI and ChromaDB for uniqueness.",
    version="0.1.0"
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.get("/health", status_code=status.HTTP_200_OK)
async def health_check():
    """Simple health check endpoint."""
    return {"status": "healthy"}

@app.post("/generate-mcqs/", response_model=MCQGenerationResponse)
async def create_mcqs(request: MCQGenerationRequest = Body(...)):
    logger.info(f"Received request to generate MCQs: {request.model_dump()}")
    try:
        allowed_difficulties = ["Easy", "Medium", "Hard", "Difficult"]
        if request.difficulty not in allowed_difficulties:
            raise HTTPException(status_code=400, detail=f"Invalid difficulty. Allowed: {', '.join(allowed_difficulties)}")

        mcqs = generate_unique_mcqs(
            subject=request.subject,
            topic=request.topic,
            num_questions=request.num_questions,
            difficulty=request.difficulty
        )
        
        if not mcqs:
            raise HTTPException(status_code=500, detail="Failed to generate any MCQs. The topic might be too niche or an LLM issue occurred.")

        # Save generated MCQs to the database
        db = SessionLocal()
        try:
            for mcq in mcqs:
                db_mcq = MCQDB(
                    subject=request.subject,
                    topic=request.topic,
                    difficulty=request.difficulty,
                    question=mcq.question,
                    option_a=mcq.options["A"],
                    option_b=mcq.options["B"],
                    option_c=mcq.options["C"],
                    option_d=mcq.options["D"],
                    correct_answer=mcq.correct_answer,
                    explanation=mcq.explanation
                )
                db.add(db_mcq)
            db.commit()
        finally:
            db.close()

        if len(mcqs) < request.num_questions:
            message = f"Successfully generated and saved {len(mcqs)} MCQs, which is less than the requested {request.num_questions} due to uniqueness constraints or generation limits."
        else:
            message = "MCQs generated and saved successfully."

        return MCQGenerationResponse(questions=mcqs, message=message)

    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Error generating MCQs: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"An internal error occurred: {str(e)}")

# Optional: Run the app directly for local testing
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)