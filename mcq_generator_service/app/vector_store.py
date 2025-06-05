import chromadb
from chromadb.utils import embedding_functions
from .config import CHROMA_PERSIST_DIRECTORY, CHROMA_COLLECTION_NAME
import uuid

# Using a sentence transformer model for embeddings.
# Make sure to install: pip install sentence-transformers
# Using an all-MiniLM model for speed and decent quality.
# You can choose other models from huggingface.
sentence_transformer_ef = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"
)

client = chromadb.PersistentClient(path=CHROMA_PERSIST_DIRECTORY)

collection = client.get_or_create_collection(
    name=CHROMA_COLLECTION_NAME,
    embedding_function=sentence_transformer_ef,
    metadata={"hnsw:space": "cosine"} # Using cosine similarity
)

def add_question_to_vector_store(question_text: str, subject: str, topic: str, difficulty: str):
    """Adds a question to ChromaDB."""
    doc_id = str(uuid.uuid4())
    collection.add(
        documents=[question_text],
        metadatas=[{"subject": subject, "topic": topic, "difficulty": difficulty, "source": "generated_mcq"}],
        ids=[doc_id]
    )
    return doc_id

def find_similar_questions(question_text: str, subject: str, topic: str, n_results: int = 1, threshold: float = 0.90):
    """
    Finds similar questions in ChromaDB for a given subject and topic.
    Returns a list of similar documents if their similarity score is above the threshold.
    """
    results = collection.query(
        query_texts=[question_text],
        n_results=n_results,
        where={"$and": [ # Filter by subject and topic for more relevant uniqueness
            {"subject": {"$eq": subject}},
            {"topic": {"$eq": topic}}
        ]}
        # where_document={"$contains": ""} # Optional: further filter document content
    )
    
    similar_docs = []
    if results and results.get('documents') and results.get('distances'):
        for i, doc in enumerate(results['documents'][0]):
            distance = results['distances'][0][i]
            similarity = 1 - distance # For cosine distance, similarity = 1 - distance
            if similarity >= threshold:
                similar_docs.append({"document": doc, "similarity": similarity, "id": results['ids'][0][i]})
    return similar_docs