import { NextRequest, NextResponse } from "next/server";
import { callNvidia } from "@/lib/nvidia";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing 'prompt' (string)" }, { status: 400 });
    }
    const result = await callNvidia({ prompt });
    if (result.error) return NextResponse.json({ error: result.error }, { status: 502 });
    return NextResponse.json({ output: result.output });
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
