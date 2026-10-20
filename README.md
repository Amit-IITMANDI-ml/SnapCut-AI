# SnapCut AI — Phase 1

A responsive React + Vite + TypeScript frontend prototype for an AI background-removal workflow. It uses Tailwind CSS v4 and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local address Vite displays (normally `http://localhost:5173`). To make a production build:

```bash
npm run build
```

## Implemented

- Branded landing page, mobile navigation, feature, workflow, pricing-preview, and footer sections.
- `/app` workspace with drag-and-drop and file-picker selection.
- Local client-side validation for JPG/PNG/WEBP type, 10 MB size limit, unreadable files, and 5000 × 5000 px maximum dimensions.
- Actual browser-local preview, metadata, choosing another image, and reset actions.
- Object URL cleanup on replacement, reset, and component unmount.
- Clear local-only privacy note and specific validation feedback.
- A reusable before/after result area with a transparent checkerboard and disabled download control until a genuine result exists.

## Not included in Phase 1

No image is sent to an API, background removal is not simulated, and no transparent result or download is fabricated. Authentication, usage limits, payments, and AI/background-removal service integration are intentionally deferred to later phases.

## Brand asset

The supplied official artwork is stored at `public/snapcut-logo-branding.png`. The interface uses an undistorted CSS display crop of that source for compact brand display.
