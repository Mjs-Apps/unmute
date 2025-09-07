README.md
#  Unmute  
**Because everyone deserves to be heard.**

Unmute is an **AI-powered communication assistant** designed for autistic and nonverbal individuals. Unlike traditional AAC tools, Unmute adapts dynamically—predicting user intent, providing natural voice synthesis, and learning user-specific expression patterns.

---

##  Features
- **Adaptive AI Communication** – Uses `gpt-oss` to predict intent and anticipate relevant phrases.
- **Expressive Speech** – NVIDIA-powered synthesis delivers emotional, natural-sounding voice output.
- **Personal Growth Engine** – Learns evolving vocabulary and user's communication style over time.
- **Offline Mode** – Supports applications without stable internet via a local agent.
- **Open Source** – Transparent, extensible, and invites community involvement.

---

##  Competition Categories
Submitted for:
- **Best Overall** – Innovative, high-impact use of GPT-OSS.
- **For Humanity** – Empowers marginalized voices.
- **Most Useful Fine-Tune** (future) – Fine-tuning on autism-specific AAC data.

---

##  Demo Video
▶ [3-Minute Video Demo (coming soon)](#)

---

##  Tech Stack
- `gpt-oss` – Context-aware phrase suggestion.
- NVIDIA Riva / Speech AI – High-quality voice synthesis.
- Node.js / React Native – Cross-platform client.
- `dotenv` – Secure secret management.

---

##  Installation

```bash
git clone https://github.com/Mjs-Apps/unmute.git
cd unmute
npm install
cp .env.example .env
# Add your API keys
npm start
