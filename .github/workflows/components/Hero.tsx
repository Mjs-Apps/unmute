export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
      <div className="glass p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Because everyone deserves to be heard.
        </h1>
        <p className="mt-4 text-white/80 md:text-lg">
          Unmute is an AI-powered communication assistant that adapts to each person’s
          style, intent, and emotion — designed with and for autistic and nonverbal individuals.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/how-it-works" className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 transition">
            See how it works
          </a>
          <a href="/donate" className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Support the nonprofit
          </a>
        </div>
      </div>
    </section>
  );
}
