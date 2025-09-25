import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text, voice, encoding } = await req.json();
    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Missing 'text' (string)" }, { status: 400 });
    }
    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server missing NVIDIA_API_KEY" }, { status: 500 });
    }
    const endpoint = process.env.NVIDIA_API_BASE || "https://api.nvidia.com/v1/speech/tts"; // replace with your real endpoint
    const resp = await fetch(endpoint, {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        voice: voice || "English-US.Female-1",
        encoding: encoding || "mp3"
      }),
    });
    if (!resp.ok) {
      const err = await resp.text();
      return NextResponse.json({ error: `NVIDIA API ${resp.status}: ${err}` }, { status: 502 });
    }
    const contentType = resp.headers.get("content-type") || "audio/mpeg";
    const audioBuffer = Buffer.from(await resp.arrayBuffer());
    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType.includes("audio/") ? contentType : "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400"
    }
  });
}
