"use client";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/about", label: "About" },
  { href: "/donate", label: "Donate" },
  { href: "/contributing", label: "Contribute" }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Unmute" className="h-7 w-7" />
          <span className="font-bold tracking-tight">Unmute</span>
        </Link>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-3 py-1 rounded-lg hover:bg-white/10 transition ${pathname === l.href ? "bg-white/10" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
