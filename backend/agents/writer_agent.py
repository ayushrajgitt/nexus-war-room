from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_campaign_content(idea: str):
    prompt = f"""
You are a marketing copywriter.

Based on this campaign idea:
{idea}

IMPORTANT RULES:
- Do NOT create or invent any brand name.
- Refer to the product as "the product".
- Keep the content generic and adaptable.
- Do NOT mention company names.

Generate:
1. A short marketing tagline (max 6 words)
2. A detailed blog paragraph
3. A professional influencer outreach email
4. A visual description prompt for ad image generation

Return ONLY in this JSON format:

{{
"tagline": "...",
"blog": "...",
"email": "...",
"image_prompt": "..."
}}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text
