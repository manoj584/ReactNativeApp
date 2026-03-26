#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create screenshots directory
os.makedirs('assets/screenshots', exist_ok=True)

# Common phone resolution: 1080x1920 (9:16 aspect ratio)
width, height = 1080, 1920

# Load fonts
try:
    font_title = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 80)
    font_header = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 60)
    font_item = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 45)
    font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 35)
except:
    font_title = ImageFont.load_default()
    font_header = ImageFont.load_default()
    font_item = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Screenshot 1: Home Screen
def create_home_screen():
    img = Image.new('RGB', (width, height), color='#ffffff')
    draw = ImageDraw.Draw(img)
    
    # Header bar
    draw.rectangle([(0, 0), (width, 200)], fill='#61dafb')
    draw.text((540, 100), 'Learn React Native', fill='#20232a', font=font_title, anchor='mm')
    
    # Menu items
    y = 300
    items = [
        'JSX Fundamentals',
        'Components',
        'State Management',
        'Props',
        'Lifecycle Methods',
        'React Hooks',
        'Interview Questions'
    ]
    
    for item in items:
        draw.rectangle([(60, y), (1020, y+120)], outline='#61dafb', width=3)
        draw.text((540, y+60), item, fill='#20232a', font=font_item, anchor='mm')
        y += 160
    
    img.save('assets/screenshots/screenshot1.png')
    print('✓ Screenshot 1: Home Screen')

# Screenshot 2: JSX Tutorial
def create_jsx_screen():
    img = Image.new('RGB', (width, height), color='#ffffff')
    draw = ImageDraw.Draw(img)
    
    # Header
    draw.rectangle([(0, 0), (width, 200)], fill='#61dafb')
    draw.text((540, 100), 'JSX Fundamentals', fill='#20232a', font=font_header, anchor='mm')
    
    # Content
    y = 280
    draw.text((80, y), 'What is JSX?', fill='#20232a', font=font_header)
    y += 100
    
    content = [
        'JSX is a syntax extension for JavaScript.',
        'It allows you to write HTML-like code',
        'in your JavaScript files.',
        '',
        'Example:',
        'const element = <h1>Hello!</h1>;'
    ]
    
    for line in content:
        draw.text((80, y), line, fill='#333333', font=font_small)
        y += 70
    
    img.save('assets/screenshots/screenshot2.png')
    print('✓ Screenshot 2: JSX Tutorial')

# Screenshot 3: Components
def create_components_screen():
    img = Image.new('RGB', (width, height), color='#ffffff')
    draw = ImageDraw.Draw(img)
    
    # Header
    draw.rectangle([(0, 0), (width, 200)], fill='#61dafb')
    draw.text((540, 100), 'Components', fill='#20232a', font=font_header, anchor='mm')
    
    # Content
    y = 280
    topics = [
        'Functional Components',
        'Class Components',
        'Component Props',
        'Component State',
        'Lifecycle Methods',
        'Component Composition'
    ]
    
    for topic in topics:
        draw.rectangle([(80, y), (1000, y+100)], fill='#f0f0f0')
        draw.text((100, y+50), topic, fill='#20232a', font=font_item, anchor='lm')
        y += 140
    
    img.save('assets/screenshots/screenshot3.png')
    print('✓ Screenshot 3: Components')

# Screenshot 4: Interview Questions
def create_interview_screen():
    img = Image.new('RGB', (width, height), color='#ffffff')
    draw = ImageDraw.Draw(img)
    
    # Header
    draw.rectangle([(0, 0), (width, 200)], fill='#61dafb')
    draw.text((540, 100), 'Interview Questions', fill='#20232a', font=font_header, anchor='mm')
    
    # Content
    y = 280
    draw.text((80, y), 'Question 1:', fill='#61dafb', font=font_header)
    y += 100
    draw.text((80, y), 'What is React Native?', fill='#20232a', font=font_item)
    y += 100
    
    answer_lines = [
        'React Native is a framework for building',
        'native mobile applications using React.',
        'It allows developers to use JavaScript',
        'to create iOS and Android apps.'
    ]
    
    for line in answer_lines:
        draw.text((80, y), line, fill='#666666', font=font_small)
        y += 65
    
    y += 60
    draw.rectangle([(60, y), (1020, y+2)], fill='#e0e0e0')
    
    y += 80
    draw.text((80, y), 'Question 2:', fill='#61dafb', font=font_header)
    y += 100
    draw.text((80, y), 'Difference between Props and State?', fill='#20232a', font=font_item)
    
    img.save('assets/screenshots/screenshot4.png')
    print('✓ Screenshot 4: Interview Questions')

# Create all screenshots
create_home_screen()
create_jsx_screen()
create_components_screen()
create_interview_screen()

print('\n✅ All screenshots created in assets/screenshots/')
print('Files: screenshot1.png, screenshot2.png, screenshot3.png, screenshot4.png')
print('Size: 1080x1920 (9:16 aspect ratio)')
