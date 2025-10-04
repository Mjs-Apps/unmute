const features = [
  { title: "Adaptive AI", body: "Predicts intent and suggests phrases that match the user’s voice, not generic templates." },
  { title: "Expressive Speech", body: "Natural, emotive output designed to convey tone — not just words." },
  { title: "Learns Safely", body: "Opt-in personal growth engine that respects privacy and control." },
  { title: "Offline Mode", body: "Reliable when connectivity is spotty, with a local agent fallback." },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div key={f.title} className="glass p-5">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/80">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
