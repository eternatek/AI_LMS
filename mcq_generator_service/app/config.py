import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env") 
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL not found in environment variables.")

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
CHROMA_PERSIST_DIRECTORY = os.getenv("CHROMA_PERSIST_DIRECTORY", "./chroma_db_store_generator")
CHROMA_COLLECTION_NAME = os.getenv("CHROMA_COLLECTION_NAME", "mcq_collection")

if not os.path.exists(CHROMA_PERSIST_DIRECTORY):
    os.makedirs(CHROMA_PERSIST_DIRECTORY)

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY not found in environment variables.")