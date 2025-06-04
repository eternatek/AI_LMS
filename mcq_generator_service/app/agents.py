from crewai import Agent
from .llm import llm
import json

class MCQCraftingAgents:
    def mcq_writer_agent(self):
        return Agent(
            role='Expert MCQ Writer',
            goal="""Generate a unique, high-quality Multiple Choice Question (MCQ)
            based on the provided subject, topic, and difficulty level.
            The MCQ must be in a specific JSON format.
            If a previous attempt was too similar to existing questions, ensure the new question is distinct.""",
            backstory="""An experienced educator and test constructor, skilled in creating
            challenging yet fair questions that accurately assess understanding of a specific topic.
            You are meticulous about question uniqueness and clarity.""",
            verbose=True,
            llm=llm,
            allow_delegation=False,
            memory=False # Each question generation is distinct
        )