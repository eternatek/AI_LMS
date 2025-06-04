import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="../../.env") # Adjust path if necessary

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
CHROMA_PERSIST_DIRECTORY = os.getenv("CHROMA_PERSIST_DIRECTORY", "./chroma_db_store_generator")
CHROMA_COLLECTION_NAME = os.getenv("CHROMA_COLLECTION_NAME", "mcq_collection")

# Create directory if it doesn't exist
if not os.path.exists(CHROMA_PERSIST_DIRECTORY):
    os.makedirs(CHROMA_PERSIST_DIRECTORY)

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY not found in environment variables.")