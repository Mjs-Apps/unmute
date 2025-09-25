"use client";
import { useState } from "react";

export default function NvidiaTestPage() {
  const [prompt, setPrompt] = useState("Say hello from Unmute.");
  const [out, setOut] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  async function run() {
    setLoading(true);
    setError("");
    setOut("");
    try {
      const resp = await fetch("/api/nvidia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await resp.json();
      if (!resp.ok) setError(data?.error || `HTTP ${resp.status}`);
      else setOut(data.output || "");
    } catch (e: any) {
      setError(e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">NVIDIA API Test</h1>
      <p className="mt-2 text-white/80">Enter a prompt and call the server route. Your API key stays on the server.</p>
      <div className="mt-6 glass p-4">
        <textarea className="w-full rounded-lg bg-black/30 p-3 outline-none" rows={4} value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={run} disabled={loading} className="mt-3 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60">
          {loading ? "Calling NVIDIA..." : "Run"}
        </button>
      </div>
      {error && <p className="mt-4 text-red-300">Error: {error}</p>}
      {out && <div className="mt-6 glass p-4"><h2 className="font-semibold">Output</h2><pre className="mt-2 whitespace-pre-wrap text-sm">{out}</pre></div>}
    </div>
  );
}
