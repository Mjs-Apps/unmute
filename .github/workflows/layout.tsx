import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterSW from "@/components/RegisterSW";

export const metadata: Metadata = {
  title: "Unmute — Inclusive AI Communication",
  description: "AI-powered, expressive communication that adapts to autistic and nonverbal individuals.",
  openGraph: { title: "Unmute", images: ["/og.png"] },
  manifest: "/manifest.json",
  themeColor: "#00C8FF",
  icons: { icon: "/unmute_favicon.ico", apple: "/unmute_icon_180x180.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
