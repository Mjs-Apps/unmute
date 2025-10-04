export type NvidiaTextRequest = { prompt: string };
export type NvidiaTextResponse = { output?: string; error?: string };

export async function callNvidia(req: NvidiaTextRequest): Promise<NvidiaTextResponse> {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) return { error: "Server missing NVIDIA_API_KEY" };

  const base = process.env.NVIDIA_API_BASE || "https://api.nvidia.com"; // placeholder
  const endpoint = `${base}/v1/ai-inference/text`; // placeholder path — replace with the real one you use

  try {
    const resp = await fetch(endpoint, {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ input: req.prompt }),
      cache: "no-store"
    });
    if (!resp.ok) {
      const text = await resp.text();
      return { error: `NVIDIA API ${resp.status}: ${text}` };
    }
    const data = await resp.json();
    const output = (data && (data.output ?? data.text)) ?? JSON.stringify(data);
    return { output };
  } catch (e: any) {
    return { error: e?.message || "Unknown error calling NVIDIA" };
  }
}
