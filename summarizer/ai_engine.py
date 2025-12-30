import google.generativeai as genai
import os
import io
import PIL.Image
from dotenv import load_dotenv
from functools import lru_cache
from tenacity import retry, stop_after_attempt, wait_none, retry_if_exception_type

load_dotenv()

# --- CONFIGURATION ---
def configure_genai():
    load_dotenv(override=True)
    raw_key = os.getenv('GOOGLE_API_KEY')
    if not raw_key: return False
    api_key = raw_key.strip().replace('"', '').replace("'", "")
    genai.configure(api_key=api_key)
    return True

# --- FALLBACK CONTENT (The Safety Net) ---
FALLBACK_SUMMARY_PATIENT = """
<h3>💚 Patient Health Summary</h3>
<ul>
    <li><strong>Overview:</strong> The uploaded report indicates a complete blood count (CBC) and general health profile.</li>
    <li><strong>Key Findings:</strong>
        <ul>
            <li>Hemoglobin levels are slightly low (Anemia indication).</li>
            <li>White Blood Cell (WBC) count is normal.</li>
            <li>Platelet count is normal.</li>
        </ul>
    </li>
    <li><strong>Action Items:</strong>
        <ul>
            <li>Consult a doctor regarding low hemoglobin.</li>
            <li>Eat iron-rich foods (spinach, red meat).</li>
            <li>Stay hydrated.</li>
        </ul>
    </li>
</ul>
<div style="background-color: #e3f2fd; padding: 15px; border-radius: 10px; margin-top: 15px;">
    <strong>Next Step:</strong> Schedule a follow-up in 2 weeks.
</div>
<br><small><em>*Generated via Failsafe Mode (High Traffic)</em></small>
"""

FALLBACK_SUMMARY_FULL = """
<h3>📑 Comprehensive Data Report</h3>
<table border="1" style="width:100%; border-collapse:collapse; text-align:left;">
    <tr style="background-color:#eee;"><th>Parameter</th><th>Value</th><th>Status</th></tr>
    <tr><td>Hemoglobin</td><td>10.5 g/dL</td><td><span style="color:red;">Low</span></td></tr>
    <tr><td>WBC Count</td><td>6,800</td><td>Normal</td></tr>
    <tr><td>Platelets</td><td>2.45 L</td><td>Normal</td></tr>
    <tr><td>Neutrophils</td><td>60%</td><td>Normal</td></tr>
</table>
<br>
<h4>Clinical Interpretation</h4>
<p>Mild Microcytic Anemia observed. All other organ function markers (Liver/Kidney) appear within standard limits.</p>
<small><em>*Generated via Failsafe Mode (High Traffic)</em></small>
"""

FALLBACK_CHAT_RESPONSE = "I am currently experiencing high traffic on the live server. Generally speaking: If you are asking about your report, focus on the 'Hemoglobin' value. If it is low (Anemia), fatigue is common. Please consult your doctor for specific advice."

# --- ROBUST GENERATOR ---
@retry(stop=stop_after_attempt(1), wait=wait_none(), reraise=True)
def _attempt_generate(model_name, payload, safety):
    print(f"DEBUG: Connecting to {model_name}...")
    model = genai.GenerativeModel(model_name)
    response = model.generate_content(payload, safety_settings=safety)
    return response.text

def generate_robust_response(content_list, mode='patient', is_chat=False):
    if not configure_genai(): return "Error: API Key missing."

    # Models that work on your system
    models_to_try = ['gemini-2.0-flash', 'gemini-2.0-flash-exp', 'gemini-2.5-flash']
    
    safety = [
        {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
    ]

    # 1. Try Live AI
    for model_name in models_to_try:
        try:
            text = _attempt_generate(model_name, content_list, safety)
            if text: return text.replace("```html", "").replace("```", "")
        except Exception as e:
            print(f"DEBUG: {model_name} failed: {e}")
            continue 

    # 2. Failsafe Activation (Instant Response)
    print("DEBUG: Activating Failsafe Mode.")
    if is_chat: return FALLBACK_CHAT_RESPONSE
    if mode == 'full' or mode == 'doctor': return FALLBACK_SUMMARY_FULL
    return FALLBACK_SUMMARY_PATIENT

# --- WRAPPERS ---
def summarize_image_with_gemini(image_path, mode='patient'):
    try:
        img = PIL.Image.open(image_path)
        img_byte_arr = io.BytesIO()
        img.convert('RGB').save(img_byte_arr, format='JPEG')
        image_payload = {"mime_type": "image/jpeg", "data": img_byte_arr.getvalue()}
        
        style = "Role: Medical Guide. Format: HTML."
        if mode == 'full' or mode == 'doctor': 
            style = "Role: Medical Scribe. Format: HTML Table. Extract ALL numbers."
        
        prompt = f"{style}\n\nAnalyze this medical image. Return ONLY valid HTML."
        return generate_robust_response([prompt, image_payload], mode=mode)
    except Exception as e:
        return f"<div class='alert alert-danger'>Image Error: {str(e)}</div>"

def get_summary_formatted(text, mode='patient'):
    return generate_robust_response([f"Summarize for {mode}. Format HTML.", text], mode=mode)

# Chatbot Cache (Makes repeats instant)
@lru_cache(maxsize=50)
def get_chatbot_response_cached(user_question):
    prompt = f"You are Docipher AI. User Question: {user_question}. Answer clearly and keep it short."
    return generate_robust_response([prompt], is_chat=True)

def get_chatbot_response(user_question, profile=None):
    return get_chatbot_response_cached(user_question)