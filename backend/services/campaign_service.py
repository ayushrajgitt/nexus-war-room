import json
from agents.writer_agent import generate_campaign_content
from agents.artist_agent import generate_image
from agents.poster_agent import create_poster


def run_campaign_pipeline(idea: str):
    """
    Main campaign execution pipeline.
    Takes user idea and returns structured campaign output.
    """

    # -------------------------
    # Step 1: Writer Agent
    # -------------------------
    content = generate_campaign_content(idea)

    cleaned = content.strip()

# Remove ```json and ``` if present
    if cleaned.startswith("```"):
        cleaned = cleaned.replace("```json", "").replace("```", "").strip()

    data = json.loads(cleaned)
    tagline = data["tagline"]
    blog = data["blog"]
    email = data["email"]
    image_prompt = data["image_prompt"]

    # -------------------------
    # Step 2: Artist Agent
    # -------------------------
    image_path = generate_image(image_prompt)

    # -------------------------
    # Step 3: Poster Agent
    # -------------------------
    poster_path = create_poster(image_path, tagline)

    # -------------------------
    # Final Structured Output
    # -------------------------
    return {
        "poster_path": poster_path,
        "tagline": tagline,
        "blog": blog,
        "email": email
    }