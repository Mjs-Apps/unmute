# Unmute — Inclusive AI Communication (PWA)

Because everyone deserves to be heard.

Unmute is an AI-powered communication assistant designed for autistic and nonverbal individuals. Unlike traditional AAC tools, Unmute adapts dynamically—predicting user intent, suggesting phrasing, and rendering expressive speech that carries emotion.

## ✨ Features
- **Adaptive AI** – intent prediction and phrase suggestions that fit the user’s own style.
- **Expressive Speech** – natural prosody to convey tone, not just words.
- **Offline Mode (PWA)** – service worker, manifest, and offline fallback.
- **NVIDIA Integrations** – secure server routes for text & TTS.
- **Open Source** – Apache-2.0, community-driven.

## 🚀 Quick start
```bash
git clone https://github.com/Mjs-Apps/unmute.git
cd unmute
npm install
cp .env.example .env
# Add your secrets in .env:
# NVIDIA_API_KEY=nvapi-xxxxxxxx
# NVIDIA_API_BASE=https://integrate.api.nvidia.com/v1/tts   # or your Riva/NIM endpoint
npm run dev
```
Visit http://localhost:3000

### Test the integrations
- Text proxy: `POST /api/nvidia` (UI: `/nvidia-test`)
- TTS proxy:  `POST /api/nvidia-tts` (UI: `/nvidia-tts-test`)

## 📦 Build & Start
```bash
npm run build
npm start
```

## 🔱 PWA
- `public/manifest.json`
- `public/sw.js` (network-first pages, SWR assets)
- `public/offline.html`

## 🧱 Tech
Next.js 14 + React 18 + Tailwind CSS.

## 🛡️ License
Apache-2.0

## 🤝 Contributing
See CONTRIBUTING.md and CODE_OF_CONDUCT.md.
