# Outfit artwork from Zelda Wiki

Source: https://zeldawiki.wiki/wiki/Costume (downloaded 2026-10-16).

174 optimized WebPs are saved at `public/outfits/<character-id>/<outfit-id>.webp`.
`outfit-images.json` retains each character/outfit identity, original Wiki file page,
download URL, original dimensions and original SHA-256 checksum. Each `optimized`
entry records the shipped file, dimensions, size and SHA-256 checksum separately.
The application derives asset paths from IDs and needs no imagePath registry.

Gallery images fit within 640 × 800 pixels without upscaling, using Lanczos
resampling and WebP quality 85 (method 6). Aspect ratio and transparency are
preserved; there is no cropping or recoloring. The converter checks every original
checksum before starting and verifies decoded output dimensions and the exact
resized alpha channel for every image. Small source images keep their dimensions.
A single gallery size keeps the asset set simple while supporting high density
screens at typical card sizes.

Matching used the character, costume name and map/recolor variant. The Wiki’s
“Master Wind Waker” / “PH&ST” variants correspond to the existing “Wind Waker” /
“Grand Travels” outfit IDs. Existing spelling aliases and IDs are preserved.
Only outfits already represented by project map rewards were imported.

Exceptions:
- Fi / standard-outfit-boss: the user supplied and confirmed the image after the
  original import. The source filename contains Master Quest; this assignment is
  explicitly documented in the manifest. The Fandom URL returned 403, so the
  same named original file was obtained from the Zelda Wiki CDN.
- Cia / masked-unmasked-hatless-boss: the existing reward combines three variants;
  the Masked original is used as its representative preview. This is also recorded
  on the image’s manifest entry.

The original PNGs totaled approximately 151 MiB and were deleted after successful
conversion and verification, as agreed with the user. Only WebPs are deployed.
The manifest retains the sources and their original checksums for recovery.

To regenerate, download each manifest `downloadUrl` into a temporary directory as
`<character-id>/<outfit-id>.png`. URLs describe the source at import time; if a CDN
URL changes, use its recorded `sourcePage` to locate the original. Install Python 3
and Pillow with WebP support, then run from the repository root:

```sh
npm run generate:outfits -- --source /path/to/originals
```

The default source is `public/outfits`, for use during an initial PNG import.
The converter always reads original PNGs and never recompresses existing WebPs.
It records its Pillow version and encoding settings in the manifest. It does not
delete originals automatically; temporary downloads may be removed after success.
