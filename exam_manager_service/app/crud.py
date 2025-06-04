from sqlalchemy.orm import Session
from typing import Optional, List
from . import database as db_models
from .models import MCQGeneratorMCQ # Import the Pydantic model for type hinting
import logging

logger = logging.getLogger(__name__)

def create_exam_record(
    db: Session,
    subject: str,
    topic: str,
    num_questions_requested: int,
    num_questions_generated: int,
    difficulty: str,
    generated_mcqs: List[MCQGeneratorMCQ] # Correct type hint
) -> db_models.Exam:
    db_exam = db_models.Exam(
        subject=subject,
        topic=topic,
        num_questions_requested=num_questions_requested,
        num_questions_generated=num_questions_generated,
        difficulty=difficulty
    )
    db.add(db_exam)
    db.flush()

    for mcq_pydantic_obj in generated_mcqs: # Iterate over Pydantic objects
        db_question = db_models.ExamQuestion(
            exam_id=db_exam.id,
            question_text=mcq_pydantic_obj.question,
            options=mcq_pydantic_obj.options,
            correct_answer=mcq_pydantic_obj.correct_answer,
            explanation=mcq_pydantic_obj.explanation
        )
        db.add(db_question)
    
    db.commit()
    db.refresh(db_exam)
    logger.info(f"Exam record created with ID: {db_exam.id} and {len(db_exam.questions)} questions.")
    return db_exam

# ... rest of crud.py ...
def get_exam_by_id(db: Session, exam_id: int) -> Optional[db_models.Exam]:
    return db.query(db_models.Exam).filter(db_models.Exam.id == exam_id).first()

def get_exams_history(db: Session, skip: int = 0, limit: int = 100) -> List[db_models.Exam]:
    return db.query(db_models.Exam).order_by(db_models.Exam.created_at.desc()).offset(skip).limit(limit).all()