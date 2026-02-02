import os
from PIL import Image

# Map of image filename to target size (width, height)
resize_map = {
    'verified-badge.webp': (40, 40),
    'yale-it-logo.png': (180, 60),
    # Add more mappings as needed
}

def optimize_image(path, target_size=None):
    try:
        img = Image.open(path)
        # Skip images that are too large (e.g., width or height > 5000px)
        if img.width > 5000 or img.height > 5000:
            print(f"Skipped (too large): {path} ({img.width}x{img.height})")
            return
        if target_size:
            img = img.resize(target_size, Image.LANCZOS)
        out_path = os.path.splitext(path)[0] + '.webp'
        img.save(out_path, 'WEBP', quality=80)
        print(f'Optimized: {out_path}')
    except Exception as e:
        print(f"Error processing {path}: {e}")

def walk_and_optimize(root):
    for dirpath, _, filenames in os.walk(root):
        for fname in filenames:
            if fname.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                fpath = os.path.join(dirpath, fname)
                target_size = resize_map.get(fname)
                optimize_image(fpath, target_size)

if __name__ == '__main__':
    walk_and_optimize('frontend/public/static/media')