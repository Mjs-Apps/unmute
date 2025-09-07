🎤 Unmute

Because everyone deserves to be heard.

Unmute is an AI-powered communication assistant designed for autistic and nonverbal individuals. Unlike traditional AAC (augmentative and alternative communication) tools, Unmute adapts dynamically to each user — predicting intent, providing natural voice synthesis, and learning how the user expresses themselves over time.

🚀 Features

Adaptive AI Communication → Uses gpt-oss models to predict intent and suggest relevant words/phrases.

Expressive Speech → NVIDIA speech synthesis provides natural, emotional voices (not robotic).

Personal Growth Engine → Learns evolving vocabulary, preferences, and style.

Offline Mode → A local agent runs without internet access for accessibility anywhere.

Open Source → Community-driven, extensible, and transparent.

🏆 Competition Categories

This project is submitted for the following categories:

Best Overall – Innovative AI accessibility application.

For Humanity – Empowers autistic and nonverbal individuals to communicate.

Most Useful Fine-Tune (future work) – Fine-tuning GPT models on AAC datasets for specialized performance.

📽 Demonstration Video

▶️ Link to 3-minute demo video

(coming soon)

🛠 Tech Stack

gpt-oss → Context prediction, adaptive communication suggestions.

NVIDIA Riva / Speech AI → Natural speech synthesis.

Node.js / React (planned) → Cross-platform app + UI.

dotenv → Secure environment variable management.

📦 Installation
# Clone repo
git clone https://github.com/creative-mjsapps/unmute.git
cd unmute

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Fill in your API keys in .env

# Run app
npm start

🔑 Environment Variables

Create a .env file in the root of your project:

NVIDIA_API_KEY=your_api_key_here
GPT_API_KEY=your_openai_key_here


(never commit real keys – .gitignore is set to protect you)

🧪 Example Usage
npm start


Output:

Unmute app starting...
NVIDIA key loaded: true
GPT key loaded: true


(In the demo app, text input is converted to natural AI-driven voice output)

🔬 gpt-oss Use

Intent Prediction → The gpt-oss model suggests likely phrases given limited user input.

Adaptive Learning → Tracks user history and adapts vocabulary suggestions.

Fine-Tuning (planned) → Specialized training on autism-focused AAC datasets.

🤝 Contributing

Pull requests welcome! Please see CONTRIBUTING.md for guidelines.

📜 License

MIT License (or Apache 2.0 — your choice)
