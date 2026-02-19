from PIL import Image, ImageDraw, ImageFont

def create_poster(image_path: str):

    image = Image.open(image_path)
    draw = ImageDraw.Draw(image)

    width, height = image.size

    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()

    tagline = "Fuel Your Code"
    cta = "Buy Now"

    draw.text((50, height - 180), tagline, fill=(255,255,255), font=font)
    draw.text((50, height - 100), cta, fill=(255,0,0), font=font)

    output_path = "final_poster.png"
    image.save(output_path)

    return output_path
