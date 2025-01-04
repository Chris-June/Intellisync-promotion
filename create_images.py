from PIL import Image, ImageDraw, ImageFont
import os

# Ensure the public directory exists
public_dir = '/Users/chrisjune/Desktop/Current working folder/Promotions/Intellisync-promotion/public'
os.makedirs(public_dir, exist_ok=True)

# Create favicon (32x32)
favicon = Image.new('RGB', (32, 32), color='navy')
favicon_draw = ImageDraw.Draw(favicon)
favicon_draw.text((5, 5), 'IS', fill='white')
favicon.save(os.path.join(public_dir, 'favicon.ico'))

# Create logo (192x192)
logo = Image.new('RGB', (192, 192), color='skyblue')
logo_draw = ImageDraw.Draw(logo)
logo_draw.text((50, 70), 'IntelliSync', fill='white')
logo.save(os.path.join(public_dir, 'logo192.png'))

# Create logo for 512x512
logo_large = Image.new('RGB', (512, 512), color='royalblue')
logo_large_draw = ImageDraw.Draw(logo_large)
logo_large_draw.text((100, 200), 'IntelliSync', fill='white')
logo_large.save(os.path.join(public_dir, 'logo512.png'))

# Create social media images
og_image = Image.new('RGB', (1200, 630), color='darkblue')
og_draw = ImageDraw.Draw(og_image)
og_draw.text((300, 250), 'IntelliSync', fill='white')
og_image.save(os.path.join(public_dir, 'og-image.png'))

twitter_image = Image.new('RGB', (800, 418), color='midnightblue')
twitter_draw = ImageDraw.Draw(twitter_image)
twitter_draw.text((200, 180), 'IntelliSync', fill='white')
twitter_image.save(os.path.join(public_dir, 'twitter-image.png'))

print("Images created successfully!")
