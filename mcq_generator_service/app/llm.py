from langchain_groq import ChatGroq
from .config import GROQ_API_KEY

def get_llm():
    """Initializes and returns the Groq LLM."""
    return ChatGroq(
        temperature=0.7,  # Adjust for creativity vs. factualness
        groq_api_key=GROQ_API_KEY,
        model_name="llama3-8b-8192" # Or "mixtral-8x7b-32768" or "llama3-70b-8192"
    )

# Initialize once
llm = get_llm()