from PIL import Image, ImageDraw, ImageFont

def create_poster(image_path: str, tagline: str):

    image = Image.open(image_path)
    draw = ImageDraw.Draw(image)

    width, height = image.size

    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()

    draw.text((50, height - 150), tagline, fill=(255,255,255), font=font)

    output_path = "final_poster.png"
    image.save(output_path)

    return output_path

