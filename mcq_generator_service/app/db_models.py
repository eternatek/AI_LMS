from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class MCQDB(Base):
    __tablename__ = "mcqs"

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, index=True)
    topic = Column(String, index=True)
    difficulty = Column(String, index=True)
    question = Column(String)
    option_a = Column(String)
    option_b = Column(String)
    option_c = Column(String)
    option_d = Column(String)
    correct_answer = Column(String)
    explanation = Column(String)