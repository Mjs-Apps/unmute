const requirements = [
  "Meets Baseline’s accessibility-first mandate with WCAG 2.2 AA visuals and focus states.",
  "Keeps user data transparent and opt-in, aligning with responsible GPT-OSS usage.",
  "Delivers a demo-ready PWA with offline fallbacks so judges can test without network hiccups."
];

const stats = [
  { label: "Track", value: "Baseline — Inclusive AI" },
  { label: "Team", value: "3 builders + autistic advisors" },
  { label: "Status", value: "MVP ready for judging" },
  { label: "Stack", value: "GPT-OSS · NVIDIA Speech · Next.js" }
];

const focusAreas = [
  "Assistive communication",
  "Neurodiversity advocacy",
  "Responsible AI",
  "Community co-design"
];

export default function PromoFlex() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="glass p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-400">Baseline Hackathon</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Promo ready for the Baseline judges.</h2>
            <p className="mt-4 text-white/80 md:text-lg">
              We distilled Unmute’s impact story so it slots directly into the Baseline hackathon brief.
              The promo highlights the inclusive mission, the responsible tech stack, and the readiness of the build.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-400" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 lg:max-w-sm">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-white/60">{stat.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide text-white/50">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://github.com/Mjs-Apps/unmute"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold transition hover:bg-brand-600"
            >
              Review the Baseline submission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
