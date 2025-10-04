export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <div className="glass p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Join the build.</h2>
        <p className="mt-3 text-white/80">
          We’re creating inclusive AI — open source, community-led, nonprofit-driven.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="https://github.com/Mjs-Apps/unmute" className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Star the repo
          </a>
          <a href="/contributing" className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 transition">
            Contribute
          </a>
        </div>
      </div>
    </section>
  );
}
