import requests
import os
from dotenv import load_dotenv

load_dotenv()

HF_TOKEN = os.getenv("HF_TOKEN")

API_URL = "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0"


headers = {
    "Authorization": f"Bearer {HF_TOKEN}"
}

def generate_image(prompt: str):

    response = requests.post(
        API_URL,
        headers=headers,
        json={"inputs": prompt}
    )

    if response.status_code != 200:
        print("Error:", response.text)
        return None

    image_bytes = response.content

    with open("generated_ad.png", "wb") as f:
        f.write(image_bytes)

    return "generated_ad.png"
