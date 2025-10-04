"use client";
import { useState } from "react";

export default function NvidiaTtsTestPage() {
  const [text, setText] = useState("Because everyone deserves to be heard.");
  const [voice, setVoice] = useState("English-US.Female-1");
  const [encoding, setEncoding] = useState("mp3");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function run() {
    setLoading(true);
    setError("");
    setAudioUrl(null);
    try {
      const resp = await fetch("/api/nvidia-tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice, encoding }),
      });
      if (!resp.ok) {
        const err = await resp.json();
        setError(err?.error || `HTTP ${resp.status}`);
        return;
      }
      const blob = await resp.blob();
      setAudioUrl(URL.createObjectURL(blob));
    } catch (e: any) {
      setError(e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">NVIDIA TTS Test</h1>
      <p className="mt-2 text-white/80">Enter text and get speech back from NVIDIA.</p>
      <div className="mt-6 glass p-4 space-y-3">
        <textarea className="w-full rounded-lg bg-black/30 p-3 outline-none" rows={3} value={text} onChange={(e) => setText(e.target.value)} />
        <input className="w-full rounded-lg bg-black/30 p-2 outline-none" value={voice} onChange={(e) => setVoice(e.target.value)} placeholder="Voice (e.g. English-US.Female-1)" />
        <select className="w-full rounded-lg bg-black/30 p-2 outline-none" value={encoding} onChange={(e) => setEncoding(e.target.value)}>
          <option value="mp3">mp3</option>
          <option value="wav">wav</option>
          <option value="ogg">ogg</option>
        </select>
        <button onClick={run} disabled={loading} className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60">
          {loading ? "Generating..." : "Speak"}
        </button>
      </div>
      {error && <p className="mt-4 text-red-300">Error: {error}</p>}
      {audioUrl && <div className="mt-6"><audio controls src={audioUrl} className="w-full" /></div>}
    </div>
  );
}
