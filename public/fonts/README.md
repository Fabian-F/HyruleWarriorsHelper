# Font licenses

Inter, JetBrains Mono and Space Grotesk are distributed under the SIL Open Font
License 1.1. The corresponding license files are included in this directory.

The variable WOFF2 files in `src/fonts` were downloaded from the Google Fonts CSS
API on 2026-11-03, preserving its Unicode subsets and the existing weight ranges:

- Inter v20: normal, 400-800.
- JetBrains Mono v24: normal and italic, 100-800.
- Space Grotesk v22: normal, 300-700.

`src/_fonts.scss` contains the local declarations with `font-display: swap`.
Angular bundles the referenced files and fingerprints their production filenames.
No Google Fonts connection is needed at build time or runtime.

License sources:

- https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt
- https://github.com/google/fonts/blob/main/ofl/jetbrainsmono/OFL.txt
- https://github.com/google/fonts/blob/main/ofl/spacegrotesk/OFL.txt
