Okay, here's the complete project structure and a streamlined step-by-step setup guide.

## Final Project Structure

```
ai_mcq_project/
├── .env                        # Environment variables (YOU CREATE THIS)
├── .gitignore                  # Specifies intentionally untracked files
├── docker-compose.yml          # Docker Compose configuration
├── README.md                   # Project documentation
│
├── mcq_generator_service/
│   ├── app/
│   │   ├── __init__.py         # Makes 'app' a Python package
│   │   ├── main.py             # FastAPI app, API endpoints
│   │   ├── agents.py           # CrewAI Agent definitions
│   │   ├── tasks.py            # CrewAI Task definitions
│   │   ├── crew.py             # CrewAI Crew setup and execution logic
│   │   ├── llm.py              # LLM (Groq) initialization
│   │   ├── vector_store.py     # ChromaDB interaction logic
│   │   ├── models.py           # Pydantic models for request/response
│   │   └── config.py           # Configuration loading (API keys, paths)
│   ├── Dockerfile                # Instructions to build the Docker image
│   └── requirements.txt          # Python dependencies
│
└── exam_manager_service/
    ├── app/
    │   ├── __init__.py         # Makes 'app' a Python package
    │   ├── main.py             # FastAPI app, API endpoints
    │   ├── database.py         # PostgreSQL setup, SQLAlchemy models, table creation
    │   ├── crud.py             # Database Create, Read, Update, Delete operations
    │   ├── models.py           # Pydantic models for API and DB interaction
    │   ├── client.py           # HTTP client to call mcq_generator_service
    │   └── config.py           # Configuration loading (DB URL, service URLs)
    ├── Dockerfile                # Instructions to build the Docker image
    └── requirements.txt          # Python dependencies
```

## Step-by-Step Setup

**Prerequisites:**

*   **Docker Desktop** (or Docker Engine + Docker Compose CLI) installed and running.
*   A **Groq API Key**.

**Step 1: Create Project Directory**

Open your terminal or command prompt and create the main project folder:

```bash
mkdir ai_mcq_project
cd ai_mcq_project
```

**Step 2: Create `.env` File**

Inside `ai_mcq_project/`, create a file named `.env` and add the following, replacing `"your_groq_api_key_here"` with your actual Groq API key:

```env
# ai_mcq_project/.env

GROQ_API_KEY="your_groq_api_key_here"

# For Docker Compose networking and volumes
DATABASE_URL="postgresql://postgres:password@postgres_db:port/database_name"
MCQ_GENERATOR_SERVICE_URL="http://mcq_generator_service:8001"
CHROMA_PERSIST_DIRECTORY="/app/chroma_db_store_generator_volume"
CHROMA_COLLECTION_NAME="mcq_collection"
```

**Step 3: Create `.gitignore` File**

Inside `ai_mcq_project/`, create a file named `.gitignore`:

```gitignore
# ai_mcq_project/.gitignore

# Environment variables
.env
*.env.*

# Python
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
env/
venv/
ENV/
pip-log.txt
pip-delete-this-directory.txt
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.log

# Docker specific
.dockerignore
docker-compose.override.yml

# IDE / Editor specific
.idea/
.vscode/
*.swp
*~

# Local ChromaDB store (if created outside Docker volume for local dev)
chroma_db_store/
chroma_db_store_generator/
```

**Step 4: Create `docker-compose.yml` File**

Inside `ai_mcq_project/`, create `docker-compose.yml`:

```yaml
# ai_mcq_project/docker-compose.yml
version: '3.8'

services:
  postgres_db:
    image: postgres:15
    container_name: mcq_postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: Techmo
      POSTGRES_DB: testmcq
    ports:
      - "5433:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d testmcq"]
      interval: 10s
      timeout: 5s
      retries: 5

  mcq_generator_service:
    build:
      context: .
      dockerfile: mcq_generator_service/Dockerfile
    container_name: mcq_generator_api
    env_file:
      - .env # Loads GROQ_API_KEY, CHROMA_* vars
    # CHROMA_PERSIST_DIRECTORY is set from .env via env_file
    volumes:
      - ./mcq_generator_service/app:/app/app # For dev: live code reload
      # - ./.env:/app/.env # .env is already available via env_file, no need to mount unless app directly reads /app/.env
      - chroma_data_generator:/app/chroma_db_store_generator_volume # Persistent ChromaDB data
    ports:
      - "8001:8001"
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:8001/health || exit 1"]
      interval: 15s
      timeout: 5s
      retries: 5
      start_period: 45s # Increased for LLM model loading
    command: uvicorn app.main:app --host 0.0.0.0 --port 8001 --reload

  exam_manager_service:
    build:
      context: .
      dockerfile: exam_manager_service/Dockerfile
    container_name: exam_manager_api
    env_file:
      - .env # Loads DATABASE_URL, MCQ_GENERATOR_SERVICE_URL
    volumes:
      - ./exam_manager_service/app:/app/app # For dev
      # - ./.env:/app/.env
    ports:
      - "8000:8000"
    depends_on:
      postgres_db:
        condition: service_healthy
      mcq_generator_service:
        condition: service_healthy
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

volumes:
  postgres_data: {}
  chroma_data_generator: {}
```

**Step 5: Create `mcq_generator_service`**

1.  Create the directory: `mkdir mcq_generator_service`
2.  Create `mcq_generator_service/Dockerfile`:
    ```dockerfile
    # mcq_generator_service/Dockerfile
    FROM python:3.10-slim

    RUN apt-get update && apt-get install -y curl --no-install-recommends && rm -rf /var/lib/apt/lists/*

    WORKDIR /app

    RUN addgroup --system app && adduser --system --group app

    ENV PYTHONDONTWRITEBYTECODE 1
    ENV PYTHONUNBUFFERED 1

    COPY ./mcq_generator_service/requirements.txt /app/requirements.txt
    RUN pip install --no-cache-dir -r requirements.txt

    COPY ./mcq_generator_service/app /app/app
    # .env is handled by env_file in docker-compose, not copied directly into image usually

    USER app
    EXPOSE 8001
    CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8001"]
    ```
3.  Create `mcq_generator_service/requirements.txt`:
    ```txt
    # mcq_generator_service/requirements.txt
    fastapi>=0.109.0,<0.112.0
    uvicorn[standard]>=0.23.0,<0.28.0
    python-dotenv>=1.0.0,<2.0.0
    crewai>=0.30.0,<0.36.0
    langchain-groq>=0.1.2,<0.2.0
    chromadb>=0.4.22,<0.5.0
    sentence-transformers>=2.2.2,<3.0.0
    httpx>=0.25.0,<0.28.0
    ```
4.  Create the `mcq_generator_service/app/` directory: `mkdir mcq_generator_service/app`
5.  Inside `mcq_generator_service/app/`, create the following Python files with the content provided in previous responses:
    *   `__init__.py` (can be empty)
    *   `config.py`
    *   `llm.py`
    *   `vector_store.py`
    *   `models.py`
    *   `agents.py`
    *   `tasks.py`
    *   `crew.py`
    *   `main.py` (ensure it includes the `/health` endpoint)

    *(Self-correction: In `mcq_generator_service/app/config.py`, ensure `load_dotenv()` doesn't specify a path that breaks in Docker if `.env` is not copied directly. `python-dotenv` will search for `.env` in current and parent dirs, or rely on Docker Compose `env_file` to inject them directly as environment variables, which is cleaner. For `config.py`, access them with `os.getenv()`.)*

    **Revised `mcq_generator_service/app/config.py`:**
    ```python
    # mcq_generator_service/app/config.py
    import os
    from dotenv import load_dotenv

    # Load .env file if present (useful for local dev outside Docker when .env is in project root)
    # For Docker, env vars are typically injected by docker-compose env_file.
    # This attempts to load from project root if running app/main.py locally.
    dotenv_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
    if os.path.exists(dotenv_path):
        load_dotenv(dotenv_path=dotenv_path)
    else: # If not found, try loading if .env is in current workdir (e.g. if running from project root)
        load_dotenv()


    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    # Use the value from .env (via docker-compose env_file) for Docker.
    # Fallback for local non-docker execution if needed.
    CHROMA_PERSIST_DIRECTORY = os.getenv("CHROMA_PERSIST_DIRECTORY", "./local_chroma_db_store_generator")
    CHROMA_COLLECTION_NAME = os.getenv("CHROMA_COLLECTION_NAME", "mcq_collection")

    # Create directory if it doesn't exist (important for ChromaDB)
    # This path will be inside the container, e.g., /app/chroma_db_store_generator_volume
    if not os.path.exists(CHROMA_PERSIST_DIRECTORY) and CHROMA_PERSIST_DIRECTORY.startswith("/app/"): # only for docker path
        try:
            os.makedirs(CHROMA_PERSIST_DIRECTORY, exist_ok=True)
            print(f"Created ChromaDB directory: {CHROMA_PERSIST_DIRECTORY}")
        except Exception as e:
            print(f"Error creating ChromaDB directory {CHROMA_PERSIST_DIRECTORY}: {e}")


    if not GROQ_API_KEY:
        raise ValueError("GROQ_API_KEY not found in environment variables.")
    ```

**Step 6: Create `exam_manager_service`**

1.  Create the directory: `mkdir exam_manager_service`
2.  Create `exam_manager_service/Dockerfile`:
    ```dockerfile
    # exam_manager_service/Dockerfile
    FROM python:3.10-slim

    WORKDIR /app

    RUN addgroup --system app && adduser --system --group app

    ENV PYTHONDONTWRITEBYTECODE 1
    ENV PYTHONUNBUFFERED 1

    COPY ./exam_manager_service/requirements.txt /app/requirements.txt
    RUN pip install --no-cache-dir -r requirements.txt

    COPY ./exam_manager_service/app /app/app

    USER app
    EXPOSE 8000
    CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
    ```
3.  Create `exam_manager_service/requirements.txt`:
    ```txt
    # exam_manager_service/requirements.txt
    fastapi>=0.109.0,<0.112.0
    uvicorn[standard]>=0.23.0,<0.28.0
    python-dotenv>=1.0.0,<2.0.0
    sqlalchemy>=2.0.20,<2.1.0
    psycopg2-binary>=2.9.5,<2.10.0
    httpx>=0.25.0,<0.28.0
    ```
4.  Create the `exam_manager_service/app/` directory: `mkdir exam_manager_service/app`
5.  Inside `exam_manager_service/app/`, create the following Python files with the content provided in previous responses:
    *   `__init__.py` (can be empty)
    *   `config.py` (adjust `load_dotenv` path similarly to the MCQ service's `config.py` if needed for local non-docker execution)
    *   `database.py`
    *   `models.py`
    *   `crud.py`
    *   `client.py`
    *   `main.py` (ensure it has the `lifespan` manager for DB table creation)

    **Revised `exam_manager_service/app/config.py`:**
    ```python
    # exam_manager_service/app/config.py
    import os
    from dotenv import load_dotenv

    dotenv_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
    if os.path.exists(dotenv_path):
        load_dotenv(dotenv_path=dotenv_path)
    else:
        load_dotenv()

    DATABASE_URL = os.getenv("DATABASE_URL")
    MCQ_GENERATOR_SERVICE_URL = os.getenv("MCQ_GENERATOR_SERVICE_URL", "http://localhost:8001")

    if not DATABASE_URL:
        raise ValueError("DATABASE_URL not found in environment variables.")
    if not MCQ_GENERATOR_SERVICE_URL:
        raise ValueError("MCQ_GENERATOR_SERVICE_URL not found.")
    ```

**Step 7: Create `README.md`**

Inside `ai_mcq_project/`, create `README.md` with the content provided in the previous response ("give me readme file").

**Step 8: Build and Run the Application**

Navigate back to the project root directory (`ai_mcq_project/`) in your terminal if you aren't already there. Then run:

```bash
docker-compose up --build
```
*   The `--build` flag ensures images are rebuilt if any code or Dockerfile changes.
*   Wait for all services to start. You'll see logs from PostgreSQL, `mcq-generator-service`, and `exam-manager-service`.
*   The `mcq-generator-service` might take a bit longer for the first healthcheck due to model loading.

**Step 9: Access Services**

*   **Exam Manager API (Main User API):** `http://localhost:8000/docs`
*   **MCQ Generator API (Internal):** `http://localhost:8001/docs`
*   **PostgreSQL:** Connect via a DB client to `localhost:5433` (User: `postgres`, Pass: `Techmo`, DB: `testmcq`).

You can now use the Exam Manager API (e.g., via its `/docs` page) to generate MCQs.

This step-by-step guide provides the necessary files and commands to get your project running. Ensure you copy the Python code for each file from our previous detailed discussion.
