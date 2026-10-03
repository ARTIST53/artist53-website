# ARTIST53 source color audit — October 3, 2026

Source: ARTIST53/artist53-website, baseline commit ae334353fe376f8ed9ad0535624c94e5f40d7876. The production homepage exactly matched the repository homepage at audit start. Cloudflare Pages is configured in README.md to publish main from the repository root.

Scanned all 75 HTML, 9 CSS, 11 JavaScript, 22 SVG files and the web manifest, including public/ legacy copies. Found 122 distinct hex/RGB spellings and 987 occurrences (short/long forms and alpha variants counted separately). This inventories explicit code colors, not pixels inside photographs, PNG/JPEG/WebP assets, video, or base64-embedded imagery. Presence in the repository does not imply a color is rendered on the current page.

## Official palette

| Role | Color | RGB |
|---|---|---|
| Black | `#000000` | 0, 0, 0 |
| White | `#FFFFFF` | 255, 255, 255 |
| Yellow | `#FDD71A` | 253, 215, 26 |
| Gold | `#FAC926` | 250, 201, 38 |
| Cream | `#FDDEA7` | 253, 222, 167 |
| Hot pink | `#EF4255` | 239, 66, 85 |
| Dark blue | `#0090CD` | 0, 144, 205 |
| Bright blue | `#00ADEF` | 0, 173, 239 |
| Pale blue | `#E1F3FD` | 225, 243, 253 |

Core colors are Black, White, Yellow, and Gold. Supporting swatches were confirmed from IMG_9399.jpeg. Gold is a core color, independently defined as --gold.

## Scope and decisions

- Corrected main brand tokens, hardcoded UI yellow/black/white, JavaScript-injected fallback styles, translucent colors, and the web manifest. Updated resource version queries in all pages to avoid stale browser caches.
- Gold: corrected the marquee border to --gold and the standalone artist53-footer-gold.svg to #FAC926. The currently rendered footer uses artist53-footer-pencil.png, which was preserved; no claim is made that its raster pixels were recolored.
- Replaced brown numbering on light/yellow sections with official black for readability. Yellow and gold remain separate tokens.
- Preserved functional gray UI values as Black/White neutrals. They are explicitly mapped below and are not promoted into the official palette.
- Preserved every client/illustration SVG and all raster/video files. Left Side of the Lion, Trinity Telecom, CLIK CLIK BANG, Shooters Circle, and artwork-specific backdrops remain unchanged. Legacy lesson SVGs, including their original template and example colors, remain intact as illustration assets.
- Yellow texture image pixels in Learning are unchanged. The CSS background fallback is corrected, but an opaque image can cover that fallback. This is a source-code palette correction, not a pixel recoloring of artwork.
- Complete per-occurrence file, line, original value, mapping, and action are in color-audit-occurrences.csv.

## Complete original color mapping

| Original spelling | Occurrences | Mapping and disposition |
|---|---:|---|
| `#000` | 66 | Black #000000 — Already matches; preserved |
| `#000000` | 1 | Black #000000 — Already matches; preserved |
| `#000e` | 11 | Black #000000 + alpha — Already matches; preserved |
| `#00aeef` | 1 | Exempt client palette/presentation — Preserved client colors |
| `#00b2bd` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#050505` | 41 | #000000 (Black) — Corrected site black<br>#FAC926 (Gold) — Corrected ARTIST53 SVG; currently unreferenced by live footer<br>Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#070707` | 3 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#080808` | 17 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples<br>Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#090909` | 6 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#0a0907` | 1 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#0a0a0a` | 3 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#0b0b0b` | 16 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#0c0c0c` | 4 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#0d0d0d` | 6 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#0f0f0f` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#101010` | 16 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#111` | 104 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples<br>Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#151515` | 4 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#152f27` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#153c2d` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#171717` | 4 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#181818` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#191919` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#1b1b1b` | 12 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#1c1c1c` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#1d5e3b` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#202020` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#242424` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#262626` | 8 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#292929` | 4 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#2a2a2a` | 13 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#2b2b2b` | 3 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#2c2c2c` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#2d2d2d` | 25 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#2e2e2e` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#302612` | 2 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#303030` | 5 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#323232` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#333` | 45 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples<br>Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#342241` | 1 | Exempt client palette/presentation — Preserved client colors |
| `#342a14` | 1 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#343434` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#34704d` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#3a3a3a` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#444` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#4f4f4f` | 12 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#555` | 24 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples<br>Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#594235` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#5c32da` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#666` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#7153a5` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#777` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#7a5b0f` | 3 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#7e2828` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#888` | 17 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#8f8f8f` | 3 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#9a6c00` | 4 | #000000 (Black) — Replaced off-palette brown text with readable black on light/yellow surfaces |
| `#9b7410` | 8 | #000000 (Black) — Replaced off-palette brown text with readable black on light/yellow surfaces<br>Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#a7a7aa` | 1 | Exempt client palette/presentation — Preserved client colors |
| `#aaa` | 8 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#b10f16` | 1 | Exempt client palette/presentation — Preserved client colors |
| `#b8b8b8` | 9 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#b9aa92` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#bbb` | 7 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#bdbdbd` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#c0c0c0` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#c79b28` | 3 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#c86f3d` | 8 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#c9c9c9` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#ccc` | 4 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#cfcfcf` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#d2a400` | 1 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#d2d2d2` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#d5d5d5` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#d7d7d7` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#d8d8d8` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#d9d9d9` | 2 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#ddd` | 9 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#dfccb3` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#e2aa00` | 2 | #FAC926 (Gold) — Corrected marquee border |
| `#e9e4dc` | 1 | Exempt client palette/presentation — Preserved client colors |
| `#eee8dc` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#ef1f26` | 2 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#f03a7d` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#f1f1f1` | 4 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#f4f1e8` | 1 | Exempt example-artwork surround — Preserved image presentation background |
| `#f4f4f4` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#f51d25` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#f5f2e9` | 4 | #FFFFFF (White) — Corrected site white<br>Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `#f5f5f5` | 1 | Functional neutral derived from Black/White — Preserved text hierarchy, panel separation, or borders; not an official brand swatch |
| `#f6f0e2` | 6 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#f7f7f7` | 1 | Exempt client palette/presentation — Preserved client colors |
| `#ff4e9c` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#ff9b21` | 1 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#ffc31c` | 105 | #FAC926 (Gold) — Corrected ARTIST53 SVG; currently unreferenced by live footer<br>#FDD71A (Yellow) — Corrected site styling and JS fallbacks<br>Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples |
| `#ffd51a` | 1 | Exempt artwork surround — Preserved title-card background matched to artwork |
| `#ffd51c` | 2 | #FDD71A (Yellow) — Corrected site styling and JS fallbacks |
| `#fff` | 185 | Exempt artwork/lesson illustration — Preserved vector colors, embedded images, and illustrative examples<br>White #FFFFFF — Already matches; preserved |
| `#ffffff` | 1 | White #FFFFFF — Already matches; preserved |
| `rgba(0,0,0,.08)` | 1 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.14)` | 1 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.15)` | 1 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.35)` | 3 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.38)` | 1 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.45)` | 3 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.5)` | 1 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.72)` | 1 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.8)` | 2 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.96)` | 8 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(0,0,0,.97)` | 2 | Black #000000 + alpha — Preserved palette-based shadow/overlay |
| `rgba(199,155,40,.13)` | 1 | Exempt client palette/presentation — Preserved Left Side of the Lion treatment |
| `rgba(255,195,28,.06)` | 2 | rgba(253,215,26,.06) — Corrected Yellow RGB; retained alpha |
| `rgba(255,195,28,.25)` | 2 | rgba(253,215,26,.25) — Corrected Yellow RGB; retained alpha |
| `rgba(255,255,255,.035)` | 1 | White #FFFFFF + alpha — Preserved palette-based border/overlay |
| `rgba(255,255,255,.1)` | 1 | White #FFFFFF + alpha — Preserved palette-based border/overlay |
| `rgba(255,255,255,.12)` | 1 | White #FFFFFF + alpha — Preserved palette-based border/overlay |
| `rgba(255,255,255,.14)` | 2 | White #FFFFFF + alpha — Preserved palette-based border/overlay |
| `rgba(255,255,255,.85)` | 2 | White #FFFFFF + alpha — Preserved palette-based border/overlay |
| `rgba(5,5,5,.5)` | 2 | rgba(0,0,0,.5) — Corrected Black RGB; retained alpha |
| `rgba(5,5,5,.88)` | 1 | rgba(0,0,0,.88) — Corrected Black RGB; retained alpha |
| `rgba(5,5,5,.94)` | 2 | rgba(0,0,0,.94) — Corrected Black RGB; retained alpha |
| `rgba(8,8,8,.98)` | 2 | rgba(0,0,0,.98) — Corrected Black RGB; retained alpha |

## Verification

All changed JavaScript passes node --check. All image/video assets and non-ARTIST53 SVG assets remain byte-identical to the baseline. Client-specific CSS color declarations were checked against their original values. Changes were constrained to color values, palette variables, and resource cache versions. No browser visual QA was available in this session.
