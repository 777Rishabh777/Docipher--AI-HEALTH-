import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('GOOGLE_API_KEY')
if api_key:
    api_key = api_key.strip().replace('"', '').replace("'", "")
    genai.configure(api_key=api_key)

    print("--- SEARCHING FOR AVAILABLE MODELS ---")
    try:
        found_vision = False
        for m in genai.list_models():
            print(f"Found Model: {m.name}")
            if 'generateContent' in m.supported_generation_methods:
                print(f"  - Supports Content Generation: YES")
            else:
                print(f"  - Supports Content Generation: NO")
            
            if 'vision' in m.name or '1.5' in m.name:
                found_vision = True
                print("  *** THIS IS A VISION MODEL ***")
        
        if not found_vision:
            print("\nWARNING: No specific 'vision' or '1.5' models found in your list.")
            
    except Exception as e:
        print(f"Error listing models: {e}")
else:
    print("Error: Could not find GOOGLE_API_KEY in .env file")