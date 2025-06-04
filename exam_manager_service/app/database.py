from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, ForeignKey, JSON
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from sqlalchemy.sql import func
from .config import DATABASE_URL
import logging

logger = logging.getLogger(__name__)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    subject = Column(String, index=True)
    topic = Column(String, index=True)
    num_questions_requested = Column(Integer)
    num_questions_generated = Column(Integer) # Actual number generated
    difficulty = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    questions = relationship("ExamQuestion", back_populates="exam")

class ExamQuestion(Base):
    __tablename__ = "exam_questions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    exam_id = Column(Integer, ForeignKey("exams.id"))
    question_text = Column(Text)
    options = Column(JSON) # Store options as JSON: {"A": "Opt A", "B": "Opt B", ...}
    correct_answer = Column(String) # e.g., "A"
    explanation = Column(Text, nullable=True)
    # chroma_doc_id = Column(String, nullable=True) # If you want to link back to ChromaDB doc

    exam = relationship("Exam", back_populates="questions")

def create_db_and_tables():
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables created successfully (if they didn't exist).")
    except Exception as e:
        logger.error(f"Error creating database tables: {e}")
        # Depending on policy, you might want to exit or retry
        raise

# Call this at application startup
# create_db_and_tables() # Moved to main.py startup event

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()