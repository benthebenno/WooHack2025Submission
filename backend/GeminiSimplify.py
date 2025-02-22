from google import genai
from dotenv import load_dotenv
import os

#load API key from environment file
load_dotenv()

api_key = os.getenv("API_KEY")

client = genai.Client(api_key=api_key)
response = client.models.generate_content(
        model="gemini-2.0-flash",contents="Can you translate this jargon into vernacular that is understandable to the average person?"
        )


