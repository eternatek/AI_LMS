from pydantic import BaseModel, Field
from typing import List, Dict, Optional
from datetime import datetime

# --- Models for MCQ Generator Service Client ---
class MCQGeneratorMCQ(BaseModel): # Mirroring the one from generator service
    question: str
    options: Dict[str, str]
    correct_answer: str
    explanation: Optional[str] = None

class MCQGeneratorResponse(BaseModel): # Mirroring the one from generator service
    questions: List[MCQGeneratorMCQ]
    message: str

# --- Models for Exam Manager API ---
class ExamCreationRequest(BaseModel):
    subject: str
    topic: str
    num_questions: int = Field(..., ge=1, le=100, examples=[25, 50])
    difficulty: str = Field(..., examples=["Easy", "Medium", "Hard"])

class ExamQuestionResponse(BaseModel):
    id: int
    question_text: str
    options: Dict[str, str]
    correct_answer: str # For now, we return it. In a real exam, this would be hidden.
    explanation: Optional[str] = None

    class Config:
        from_attributes = True # for SQLAlchemy model conversion

class ExamDetailResponse(BaseModel):
    id: int
    subject: str
    topic: str
    num_questions_requested: int
    num_questions_generated: int
    difficulty: str
    created_at: datetime
    questions: List[ExamQuestionResponse]

    class Config:
        from_attributes = True

class ExamHistoryItem(BaseModel):
    id: int
    subject: str
    topic: str
    num_questions_requested: int
    num_questions_generated: int
    difficulty: str
    created_at: datetime

    class Config:
        from_attributes = True