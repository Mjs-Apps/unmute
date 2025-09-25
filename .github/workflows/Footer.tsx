export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-white/60">
        <p>© {new Date().getFullYear()} Unmute — Inclusive AI for those too often left out.</p>
        <p className="mt-2">Licensed under Apache-2.0. Built open for community impact.</p>
      </div>
    </footer>
  );
}
