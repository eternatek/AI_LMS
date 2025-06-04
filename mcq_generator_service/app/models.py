from pydantic import BaseModel, Field
from typing import List, Dict, Union

class MCQ(BaseModel):
    question: str
    options: Dict[str, str]  # e.g., {"A": "Option A", "B": "Option B", ...}
    correct_answer: str      # e.g., "A"
    explanation: str = Field(default="") # Optional explanation

class MCQGenerationRequest(BaseModel):
    subject: str
    topic: str
    num_questions: int = Field(..., ge=1, le=100) # Example: allow 1 to 100 questions
    difficulty: str # e.g., "Easy", "Medium", "Hard"

class MCQGenerationResponse(BaseModel):
    questions: List[MCQ]
    message: str = "MCQs generated successfully"