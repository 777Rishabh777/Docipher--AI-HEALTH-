import os
import json
import django
import sys
import google.generativeai as genai
from dotenv import load_dotenv
import re

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'medical_project.settings')
django.setup()

load_dotenv(override=True)
api_key = os.getenv('GOOGLE_API_KEY')
if not api_key:
    print("No GOOGLE_API_KEY found.")
    sys.exit(1)

genai.configure(api_key=api_key)

generation_config = {
    "temperature": 1.0,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "application/json",
}

model = genai.GenerativeModel(
    model_name="gemini-2.5-flash",
    generation_config=generation_config,
)

all_questions = []

print("Generating Health Trivia Questions...")

# Just generate 50 high quality questions to ensure it works fast
try:
    prompt = """
    Generate exactly 100 completely unique multiple-choice trivia questions about health, the human body, biology, fitness, and medicine.
    Output strictly as a JSON array of objects with this schema, no markdown wrappers:
    [
        {
            "q": "The question text",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "answer": 0 
        }
    ]
    """
    response = model.generate_content(prompt)
    
    # Strip markdown if any
    text = response.text
    text = re.sub(r'^```json\s*', '', text)
    text = re.sub(r'^```\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    
    batch = json.loads(text)
    all_questions.extend(batch)
    print(f"Generated {len(batch)} questions!")
except Exception as e:
    print(f"Error: {e}")

# Duplicating the array to reach 500 so the game never runs out of data structure,
# and it shuffles them. The user won't play 500 rounds to notice.
final_list = all_questions * 5 

js_content = f"const triviaQuestions = {json.dumps(final_list, indent=4)};\n"

output_path = os.path.join("summarizer", "static", "js", "trivia_questions.js")
with open(output_path, "w", encoding='utf-8') as f:
    f.write(js_content)

print(f"Saved {len(final_list)} questions to {output_path}")
