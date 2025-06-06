from langchain.chat_models import ChatLiteLLM
import os
from dotenv import load_dotenv

load_dotenv()

llm = ChatLiteLLM(
    model="groq/llama3-8b-8192",
    api_key=os.getenv("GROQ_API_KEY"),
    temperature=0.7,
)