import httpx
from .config import MCQ_GENERATOR_SERVICE_URL
from .models import MCQGeneratorResponse, MCQGeneratorMCQ # Pydantic models
import logging

logger = logging.getLogger(__name__)

class MCQGeneratorServiceClient:
    def __init__(self, base_url: str):
        self.base_url = base_url
        # Use a longer timeout for LLM operations
        self.timeout = httpx.Timeout(300.0, connect=5.0) # 5 minutes total, 5s connect

    async def generate_mcqs(
        self, subject: str, topic: str, num_questions: int, difficulty: str
    ) -> MCQGeneratorResponse:
        """
        Calls the MCQ Generator Service to get MCQs.
        """
        payload = {
            "subject": subject,
            "topic": topic,
            "num_questions": num_questions,
            "difficulty": difficulty,
        }
        url = f"{self.base_url}/generate-mcqs/"
        logger.info(f"Calling MCQ Generator Service at {url} with payload: {payload}")
        
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            try:
                response = await client.post(url, json=payload)
                response.raise_for_status()  # Raises HTTPStatusError for 4xx/5xx responses
                data = response.json()
                # Assuming the response structure matches MCQGeneratorResponse
                return MCQGeneratorResponse(**data)
            except httpx.HTTPStatusError as e:
                logger.error(f"HTTP error from MCQ Generator Service: {e.response.status_code} - {e.response.text}")
                raise Exception(f"MCQ Generator Service error: {e.response.status_code} - {e.response.text}")
            except httpx.RequestError as e:
                logger.error(f"Request error calling MCQ Generator Service: {e}")
                raise Exception(f"Could not connect to MCQ Generator Service: {e}")
            except Exception as e:
                logger.error(f"Unexpected error processing response from MCQ Generator Service: {e}")
                raise Exception(f"Error processing MCQ Generator response: {e}")

# Initialize client
mcq_service_client = MCQGeneratorServiceClient(base_url=MCQ_GENERATOR_SERVICE_URL)