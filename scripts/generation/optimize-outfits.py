"""Create gallery WebPs from original PNGs (requires Pillow with WebP support)."""

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image, features

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "scripts/migration/sources/outfit-images.json"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source", type=Path, default=ROOT / "public/outfits",
        help="Directory containing original <character-id>/<outfit-id>.png files",
    )
    args = parser.parse_args()
    if not features.check("webp"):
        raise RuntimeError("Pillow must be built with WebP support")
    manifest = json.loads(MANIFEST.read_text())
    for entry in manifest["images"]:
        source = args.source / entry["characterId"] / (entry["outfitId"] + ".png")
        if hashlib.sha256(source.read_bytes()).hexdigest() != entry["sha256"]:
            raise ValueError(f"Original checksum mismatch: {source}")
    total = 0
    for entry in manifest["images"]:
        relative = Path(entry["characterId"]) / (entry["outfitId"] + ".webp")
        source = args.source / relative.with_suffix(".png")
        target = ROOT / "public/outfits" / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(source) as original:
            image = original.convert("RGBA")
            image.thumbnail((640, 800), Image.Resampling.LANCZOS)
            image.save(target, format="WEBP", quality=85, method=6, exact=True)
            with Image.open(target) as result:
                result.load()
                if result.size != image.size:
                    raise ValueError(f"Unexpected output dimensions: {target}")
                if result.convert("RGBA").getchannel("A").tobytes() != image.getchannel("A").tobytes():
                    raise ValueError(f"Transparency changed: {target}")
            data = target.read_bytes()
            entry["optimized"] = {
                "file": "outfits/" + relative.as_posix(),
                "width": image.width,
                "height": image.height,
                "bytes": len(data),
                "sha256": hashlib.sha256(data).hexdigest(),
            }
            total += len(data)
    manifest["optimization"] = {
        "format": "WebP", "maxWidth": 640, "maxHeight": 800,
        "quality": 85, "method": 6, "resampling": "Lanczos",
        "upscale": False, "pillowVersion": Image.__version__,
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(f"Verified {len(manifest['images'])} WebPs: {total:,} bytes. Originals unchanged.")


if __name__ == "__main__":
    main()
