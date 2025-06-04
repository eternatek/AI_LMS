from fastapi import FastAPI, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager
import logging
from typing import List # <--- IMPORT List HERE

from . import crud, models as pydantic_models, database as db_module # pydantic_models is imported here
from .client import mcq_service_client

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Application startup: Creating database tables...")
    db_module.create_db_and_tables()
    logger.info("Database tables checked/created.")
    yield
    logger.info("Application shutdown.")


app = FastAPI(
    title="Exam Manager Service",
    description="Manages exams, interacts with MCQ Generator, and stores history in PostgreSQL.",
    version="0.1.0",
    lifespan=lifespan
)

@app.post("/exams/generate/", response_model=pydantic_models.ExamDetailResponse)
async def generate_exam(
    request: pydantic_models.ExamCreationRequest = Body(...),
    db: Session = Depends(db_module.get_db)
):
    logger.info(f"Received request to generate exam: {request.model_dump()}")
    try:
        mcq_response = await mcq_service_client.generate_mcqs(
            subject=request.subject,
            topic=request.topic,
            num_questions=request.num_questions,
            difficulty=request.difficulty
        )

        if not mcq_response.questions:
            logger.warning("MCQ Generator Service returned no questions.")
            raise HTTPException(status_code=404, detail="No questions could be generated for the given criteria.")

        # Pass the list of Pydantic models (MCQGeneratorMCQ) from mcq_response directly
        db_exam = crud.create_exam_record(
            db=db,
            subject=request.subject,
            topic=request.topic,
            num_questions_requested=request.num_questions,
            num_questions_generated=len(mcq_response.questions),
            difficulty=request.difficulty,
            generated_mcqs=mcq_response.questions # Pass the Pydantic models
        )
        
        return pydantic_models.ExamDetailResponse.model_validate(db_exam)

    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Error generating exam: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"An internal server error occurred: {str(e)}")


@app.get("/exams/history/", response_model=List[pydantic_models.ExamHistoryItem]) # Now List is defined
async def get_exam_history(
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(db_module.get_db)
):
    exams = crud.get_exams_history(db, skip=skip, limit=limit)
    return [pydantic_models.ExamHistoryItem.model_validate(exam) for exam in exams]


@app.get("/exams/{exam_id}/", response_model=pydantic_models.ExamDetailResponse)
async def get_exam_details(
    exam_id: int,
    db: Session = Depends(db_module.get_db)
):
    db_exam = crud.get_exam_by_id(db, exam_id=exam_id)
    if db_exam is None:
        raise HTTPException(status_code=404, detail="Exam not found")
    return pydantic_models.ExamDetailResponse.model_validate(db_exam)


# Removed if __name__ == "__main__": block as uvicorn is run by CMD in Dockerfile


if __name__ == "__main__":
    import uvicorn
    # This is for running the service directly
    uvicorn.run(app, host="0.0.0.0", port=8000)