from PIL import Image, ImageDraw, ImageFont
import os

# Ensure the public directory exists
public_dir = '/Users/chrisjune/Desktop/Current working folder/Promotions/Intellisync-promotion/public'
os.makedirs(public_dir, exist_ok=True)

# Create logo (192x192) with more detail
logo = Image.new('RGBA', (192, 192), color=(0, 0, 0, 0))  # Transparent background
logo_draw = ImageDraw.Draw(logo)

# Draw a blue background with gradient
for y in range(192):
    r = int(50 + (y/192) * 100)
    g = int(100 + (y/192) * 100)
    b = int(200 - (y/192) * 50)
    logo_draw.line([(0, y), (191, y)], fill=(r, g, b))

# Draw the 'IS' logo
logo_draw.polygon([(50, 50), (142, 50), (142, 142), (50, 142)], fill=(255, 255, 255, 200))
logo_draw.text((70, 70), 'IS', fill=(0, 0, 0), font=ImageFont.truetype("/Library/Fonts/Arial.ttf", 60))

# Save the logo
logo.save(os.path.join(public_dir, 'logo192.png'), format='PNG')
logo.save(os.path.join(public_dir, 'logo512.png'), format='PNG')

print("Logos created successfully!")
