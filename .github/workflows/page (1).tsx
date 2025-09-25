export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">How it works</h1>
      <p className="mt-4 text-white/80">
        Unmute blends an intent predictor with expressive speech synthesis.
        Users tap or type; the model anticipates phrasing and tone, and speaks naturally.
        Privacy-first: personal learning is opt-in and transparent.
      </p>
      <ul className="mt-6 list-disc pl-6 text-white/80">
        <li>Intent prediction for faster composition</li>
        <li>Emotion-aware prosody for output voice</li>
        <li>Local/offline agent for reliability</li>
        <li>Clear data controls and export</li>
      </ul>
    </div>
  );
}
