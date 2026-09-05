# JetPhotos Photo Checker

A browser-based pre-screening assistant for aviation photographers. Built for SkyShotConner.

## Version 3

V3 focuses on making the actual workflow more reliable and useful:

- Cleaner responsive aviation-themed interface
- 100% / 150% / 200% / 300% image inspection using zoom controls
- Aircraft-area selection for backlight analysis
- Backlight detection compares the selected aircraft region with nearby background brightness
- Resolution, exposure, clipping, sharpness and noise indicators
- Histogram
- Local image resizer with locked/unlocked aspect ratio
- JPEG quality control
- Local JPEG generation/download
- Original photo remains untouched

## Backlight checker

The V3 detector asks the photographer to select the aircraft. This is more useful than simply declaring that a bright sky means a photo is backlit. It compares average brightness inside the selected aircraft region against a surrounding ring of pixels and flags strong differences for manual review.

It is still a heuristic, not a replacement for human judgement.

## Privacy

Images are processed locally in the browser. The site does not require a photo-upload backend.

## Important limitation

This is **not an official JetPhotos screening tool** and the score is not an acceptance prediction. JetPhotos screeners make the final decision.

## Roadmap

- Automatic aircraft detection
- Dust-spot assistance
- Horizon/rotation detection
- Halo/oversharpening detection
- Editing recommendations
- EXIF metadata panel
- Optional saved reports/history
