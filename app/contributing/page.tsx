export default function ContributingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 space-y-4">
      <h1 className="text-3xl font-bold">Contribute to Unmute</h1>
      <p className="text-white/80">
        Unmute thrives on open collaboration. Read the CONTRIBUTING.md guide on GitHub for setup steps,
        and join the discussion via issues or the community chat. Whether you improve accessibility,
        connect assistive hardware, or help with docs, we welcome you.
      </p>
      <p className="text-white/80">
        Want to help? Start by picking an issue tagged <span className="font-semibold">good first issue</span>,
        or reach out with ideas at <a className="underline" href="mailto:hello@unmute.app">hello@unmute.app</a>.
      </p>
    </div>
  );
}
