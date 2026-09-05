# JetPhotos Photo Checker

A browser-based pre-screening assistant for aviation photographers. Built for SkyShotConner.

## What it does

Upload a JPEG, PNG or WebP aviation photo and inspect:

- Image dimensions and resolution
- Aspect ratio
- Global exposure / brightness
- Highlight and shadow clipping
- Sharpness/detail estimate using a Laplacian-variance style measurement
- Basic noise/tonal-variation indicator
- Histogram
- A combined technical pre-screen score
- A manual final checklist for aircraft sharpness, dust spots, halos, registration visibility and composition

## Privacy

Images are processed locally in the browser with the Canvas API. The current version does not upload the selected photo to a backend.

## Important limitation

This is **not an official JetPhotos screening tool** and the score is not an acceptance prediction. JetPhotos screeners make the final decision. The tool is intended to catch obvious technical problems before submission and help photographers inspect their work.

## Roadmap

- 100% crop / detail loupe
- Better aircraft-subject detection
- Horizon/rotation detection
- Dust-spot assistance
- Editing recommendations
- Optional photo history and submission tracker
- Optional AI-assisted aircraft detection
