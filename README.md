# JetPhotos Photo Checker

A browser-based pre-screening assistant for aviation photographers. Built for SkyShotConner.

## Version 2 features

Upload a JPEG, PNG or WebP aviation photo and inspect:

- Image dimensions and resolution
- Aspect ratio
- Global exposure / brightness
- Highlight and shadow clipping
- Sharpness/detail estimate using a Laplacian-variance style measurement
- Basic noise/tonal-variation indicator
- Histogram
- **Backlight / light-source risk checker** using spatial brightness analysis
- A combined technical pre-screen score
- A manual final checklist for aircraft sharpness, dust spots, halos, registration visibility and composition
- **Local image resizer** with custom width/height, aspect-ratio locking and JPEG quality control
- Resized images can be saved directly from the browser

## Privacy

Images are processed locally in the browser with the Canvas API. The current version does not upload the selected photo to a backend. Resizing is also performed locally.

## Important limitation

This is **not an official JetPhotos screening tool** and the score is not an acceptance prediction. JetPhotos screeners make the final decision. The backlight checker is a heuristic: it looks for strong bright/dark spatial separation and cannot determine the exact physical position of the sun or identify the aircraft independently.

## Roadmap

- 100% / 200% crop and detail loupe
- Better aircraft-subject detection
- Horizon/rotation detection
- Dust-spot assistance
- Editing recommendations
- Optional photo history and submission tracker
- Optional AI-assisted aircraft detection
