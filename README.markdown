# AI MCQ Quiz Generator

## Overview

The AI MCQ Quiz Generator is a web application designed to create and administer multiple-choice question (MCQ) quizzes for educational purposes. It features a Streamlit-based frontend for user interaction and a FastAPI backend for generating and managing quizzes. The application leverages the Groq API for generating MCQs, stores data in a PostgreSQL database, and supports user registration, quiz creation, and history tracking.

## Features

- **User Registration**: Users can register with a unique username to access the quiz system.
- **Quiz Generation**: Generate MCQs based on subject, topic, number of questions, and difficulty level (Easy, Medium, Difficult, Premium).
- **Supported Subjects and Topics**:
  - Python: Data Types, Control Flow, Functions, OOP, Modules
  - Mathematics: Algebra, Calculus, Geometry, Statistics
  - Physics: Mechanics, Thermodynamics, Electromagnetism, Optics
  - Chemistry: Organic, Inorganic, Physical, Biochemistry
- **Quiz Taking**: Users can answer MCQs, submit quizzes, and view results with explanations.
- **Quiz History**: View past quizzes with details like subject, topic, difficulty, and answers.
- **Backend Integration**: Uses FastAPI for API endpoints and PostgreSQL for data persistence.
- **AI-Powered**: MCQs are generated using the Groq API (llama3-8b-8192 model).

## Project Structure

```
├── app/
│   ├── __init__.py
│   ├── mcq_generator.py      # Logic for generating MCQs using Groq API
│   └── database.py           # Database models and configuration
├── frontend.py               # Streamlit frontend for user interaction
├── requirements.txt          # Python dependencies
└── .env                     # Environment variables
```

## Prerequisites

- Python 3.8+
- PostgreSQL database
- Groq API key (sign up at https://console.groq.com/ to obtain one)
- Git (for cloning the repository)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd ai-mcq-quiz-generator
   ```

2. **Set Up a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables**:
   - Copy the `.env` example file and update it with your credentials:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` to include your Groq API key and PostgreSQL database URL:
     ```
     GROQ_API_KEY="your_groq_api_key"
     DATABASE_URL_P="postgresql://username:password@localhost:5432/mcq_db"
     ```

5. **Set Up the PostgreSQL Database**:
   - Create a database named `mcq_db`:
     ```bash
     createdb mcq_db
     ```
   - Initialize the database tables by running:
     ```bash
     python -c "from app.database import init_db; init_db()"
     ```

6. **Run the FastAPI Backend**:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8001
   ```
   The backend will be available at `http://localhost:8001`.

7. **Run the Streamlit Frontend**:
   In a separate terminal, with the virtual environment activated:
   ```bash
   streamlit run frontend.py
   ```
   The frontend will be available at `http://localhost:8501`.

## Usage

1. **Access the Application**:
   - Open your browser and navigate to `http://localhost:8501`.
   - Register with a unique username.

2. **Generate a Quiz**:
   - Select "Generate Quiz" from the navigation menu.
   - Choose a subject, topic, number of questions (25, 50, 75, or 100), and difficulty level.
   - Click "Generate Quiz" to create the MCQs.

3. **Take the Quiz**:
   - Answer the generated questions by selecting one of the four options for each.
   - Submit the quiz to see your score and detailed results, including explanations for each question.

4. **View Quiz History**:
   - Select "View History" to see a list of previously taken quizzes.
   - Expand each quiz to view questions, your answers, correct answers, and explanations.

## Dependencies

The project uses the following Python packages (listed in `requirements.txt`):
- `fastapi==0.115.12`: Backend API framework
- `uvicorn==0.30.6`: ASGI server for FastAPI
- `pydantic==2.11.3`: Data validation
- `sqlalchemy==2.0.40`: ORM for database interactions
- `psycopg2-binary==2.9.10` and `psycopg2==2.9.10`: PostgreSQL adapter
- `llama-index==0.11.17`: Integration with AI models
- `crewai==0.10.0`: AI orchestration (if used)
- `chromadb==0.4.15`: Vector database (if used)
- `sentence-transformers==3.1.1`: Text embeddings (if used)
- `groq==0.23.1`: Groq API client
- `python-dotenv==1.1.0`: Environment variable management
- `streamlit==1.44.1`: Frontend framework

## Environment Variables

- `GROQ_API_KEY`: Your Groq API key for generating MCQs.
- `DATABASE_URL_P`: PostgreSQL database connection string (e.g., `postgresql://postgres:Admin@localhost:5432/mcq_db`).

## Notes

- Ensure the FastAPI backend is running before starting the Streamlit frontend, as the frontend communicates with the backend at `http://localhost:8001`.
- The application assumes a local PostgreSQL database. Update the `DATABASE_URL_P` in `.env` if your database is hosted elsewhere.
- The Groq API is used for MCQ generation. Ensure your API key is valid and has sufficient quota.
- The application logs errors and info to the console for debugging purposes.

## Troubleshooting

- **Backend Connection Errors**: Verify that the FastAPI server is running and accessible at `http://localhost:8001`. Check your firewall settings if necessary.
- **Database Errors**: Ensure PostgreSQL is running and the `mcq_db` database exists. Verify the `DATABASE_URL_P` in `.env`.
- **Groq API Errors**: Check that your `GROQ_API_KEY` is correct and that you have not exceeded your API quota.
- **Dependency Issues**: Ensure all dependencies are installed correctly using the specified versions in `requirements.txt`.

## Future Improvements

- Add user authentication with passwords.
- Support more subjects and topics.
- Implement real-time quiz progress saving.
- Add export functionality for quiz results (e.g., PDF or CSV).
- Enhance error handling for network issues.

## License

This project is licensed under the MIT License.