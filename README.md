# Unmute

**Because everyone deserves to be heard.**

Unmute is an **AI-powered communication assistant** designed for autistic and nonverbal individuals. Unlike traditional AAC tools, Unmute adapts dynamically—predicting user intent, providing natural voice synthesis, and learning user-specific expression patterns.

---

## ✨ Features
- **Adaptive AI Communication** – Uses GPT-OSS to predict intent and anticipate relevant phrases that fit the user’s style.
- **Expressive Speech** – NVIDIA-powered synthesis delivers emotional, natural-sounding voice output.
- **Personal Growth Engine** – Learns evolving vocabulary and a user’s communication style over time.
- **Offline-Ready PWA** – Service worker, manifest, and offline fallback keep the experience responsive even with limited connectivity.
- **Open Source** – Apache-2.0 licensed and community-driven.

---

## 🧭 Project Structure
This repository contains the Next.js 14 PWA in the root directory:

```
app/                # App Router pages, routes, and metadata
components/         # Reusable UI building blocks
lib/                # Shared utilities and NVIDIA API helpers
public/             # Static assets, manifest, service worker, offline page
next.config.mjs     # Next.js configuration
postcss.config.mjs  # Tailwind/PostCSS configuration
tailwind.config.ts  # Tailwind design system
```

The `.github/workflows/` directory now only hosts GitHub Actions workflow definitions.

---

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

---

## 📦 Build & Start
```bash
npm run build
npm start
```

---

## 🛠 Development Scripts
- `npm run lint` – Lint the project with ESLint.
- `npm run test` – Run automated tests (if available).
- `npm run build` – Build the production bundle.
- `npm start` – Start the production server.

---

## 🧱 Tech Stack
- Next.js 14 + React 18 + Tailwind CSS
- GPT-OSS for context-aware phrase suggestions
- NVIDIA Speech AI / Riva for expressive voice synthesis
- dotenv for secure secret management

---

## 🛡️ Security
See [SECURITY.md](SECURITY.md) for responsible disclosure guidelines.

---

## 🤝 Contributing
We welcome contributions! Please review the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

---

## 📽️ Demo Video
▶ [3-Minute Video Demo (coming soon)](#)

---

## 🏆 Competition Categories
Submitted for:
- **Best Overall** – Innovative, high-impact use of GPT-OSS.
- **For Humanity** – Empowers marginalized voices.
- **Most Useful Fine-Tune** (future) – Fine-tuning on autism-specific AAC data.

---

## 🧭 Additional Docs
- [GPT-OSS Agent Setup](docs/gpt-oss-agent-setup.md)

---

## 🛡️ License
Licensed under the Apache License 2.0. See [LICENSE](LICENSE).
