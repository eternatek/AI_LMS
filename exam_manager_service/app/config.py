import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="../../.env") # Adjust path if necessary

DATABASE_URL = os.getenv("DATABASE_URL")
MCQ_GENERATOR_SERVICE_URL = os.getenv("MCQ_GENERATOR_SERVICE_URL", "http://localhost:8001") # Default for local run

if not DATABASE_URL:
    raise ValueError("DATABASE_URL not found in environment variables.")