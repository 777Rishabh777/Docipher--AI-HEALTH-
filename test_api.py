ximport os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
api_key = os.getenv('GOOGLE_API_KEY')
print(f"API Key loaded: {api_key[:20]}...")

genai.configure(api_key=api_key)

# Test the API
print("\nTesting Gemini API...")
try:
    model = genai.GenerativeModel('gemini-2.0-flash-exp')
    response = model.generate_content('What causes fever? Answer in 2 sentences.')
    print(f"✓ API WORKS!")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"✗ API FAILED: {e}")
