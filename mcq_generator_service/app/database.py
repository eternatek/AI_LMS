from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .db_models import Base
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv(dotenv_path="../../.env")  # adjust if needed

# Read database URL from .env
DATABASE_URL = os.getenv("DATABASE_URL")

# Create the engine
engine = create_engine(DATABASE_URL)

# Create a configured session class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create all tables (only needed once, or use Alembic for migrations)
def create_db_tables():
    Base.metadata.create_all(bind=engine)