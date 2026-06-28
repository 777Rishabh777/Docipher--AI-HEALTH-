"""
Test script for the enhanced Docipher AI chatbot
"""

# Mock profile for testing
class MockProfile:
    def __init__(self):
        from datetime import date
        self.date_of_birth = date(1990, 5, 15)
        self.gender = "Male"
        self.blood_group = "O+"
        self.weight = 70.0
        self.height = 175
        self.allergies = "Penicillin"
        self.chronic_conditions = "None"
        self.current_medications = "None"
        self.smoking_status = "Never"
        self.alcohol_consumption = "Socially"

# Test the chatbot
from summarizer.ai_engine import get_chatbot_response, is_medical_query

print("=" * 60)
print("TESTING DOCIPHER AI CHATBOT")
print("=" * 60)

# Test 1: Medical query detection
print("\n[TEST 1] Medical Query Detection")
print("-" * 60)
test_queries = [
    "I have a fever",
    "What is the capital of France?",
    "My head hurts",
    "Tell me a joke",
    "I need medicine for cold"
]

for query in test_queries:
    is_medical = is_medical_query(query)
    print(f"'{query}' -> Medical: {is_medical}")

# Test 2: Non-medical query response
print("\n[TEST 2] Non-Medical Query Response")
print("-" * 60)
response = get_chatbot_response("What is 2+2?", profile=None)
print(response[:200] + "...")

# Test 3: Medical query without profile
print("\n[TEST 3] Medical Query (No Profile)")
print("-" * 60)
response = get_chatbot_response("I am feeling fever today", profile=None)
print("\nResponse:")
print(response)

# Test 4: Medical query with profile
print("\n[TEST 4] Medical Query (With Profile)")
print("-" * 60)
profile = MockProfile()
response = get_chatbot_response("What medicine should I take for fever?", profile=profile)
print("\nResponse:")
print(response)

print("\n" + "=" * 60)
print("TESTING COMPLETED")
print("=" * 60)
