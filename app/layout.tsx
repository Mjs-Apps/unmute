import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterSW from "@/components/RegisterSW";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unmute.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Unmute — Inclusive AI Communication",
  description: "AI-powered, expressive communication that adapts to autistic and nonverbal individuals.",
  openGraph: { title: "Unmute", images: ["/og.png"] },
  manifest: "/manifest.json",
  icons: { icon: "/unmute_favicon.ico", apple: "/unmute_icon_180x180.png" }
};

export const viewport: Viewport = {
  themeColor: "#00C8FF"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RegisterSW />
      </body>
    </html>
  );
}
