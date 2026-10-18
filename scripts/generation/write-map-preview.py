"""Compose existing map tiles into one preview (requires Pillow with WebP support)."""
import json
import sys
from pathlib import Path
from PIL import Image


def main():
    layout = json.load(sys.stdin)
    source = Path("public/map-tiles") / layout["id"]
    with Image.open(source / (layout["tiles"][0]["id"] + ".webp")) as first:
        tile_width, tile_height = first.size
    image = Image.new("RGBA", (layout["columns"] * tile_width, layout["rows"] * tile_height))
    for tile in layout["tiles"]:
        with Image.open(source / (tile["id"] + ".webp")) as part:
            if part.size != (tile_width, tile_height):
                raise ValueError(f"Inconsistent tile dimensions: {layout['id']}/{tile['id']}")
            image.paste(part.convert("RGBA"), (tile["column"] * tile_width, tile["row"] * tile_height))
    image.thumbnail((1280, 880), Image.Resampling.LANCZOS)
    target = Path("public/map-previews") / (layout["id"] + ".webp")
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, "WEBP", quality=85, method=6)
    with Image.open(target) as result:
        result.load()
        if result.size != image.size:
            raise ValueError(f"Unexpected preview dimensions: {target}")
    print(json.dumps({"src": f"map-previews/{target.name}", "width": image.width, "height": image.height}))


if __name__ == "__main__":
    main()
