import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const GEMINI_API_BASE =
  "https://generativelanguage.googleapis.com/v1beta/models";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

type GeminiPayload = {
  messages?: ChatMessage[];
  systemPrompt?: string;
};

export async function POST(req: Request) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY on the server." },
      { status: 500 }
    );
  }

  let payload: GeminiPayload = {};
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (messages.length === 0) {
    return NextResponse.json(
      { error: "No messages provided." },
      { status: 400 }
    );
  }

  const injectedPrompt =
    (typeof payload.systemPrompt === "string" ? payload.systemPrompt.trim() : "") ||
    (process.env.GEMINI_SYSTEM_PROMPT || "").trim();

  const trimmed = messages.slice(-12).map((msg) => ({
    role: msg.role,
    parts: [{ text: msg.text }],
  }));

  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:generateContent`;

  const requestBody: Record<string, unknown> = {
    contents: trimmed,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 512,
    },
  };

  if (injectedPrompt) {
    requestBody.systemInstruction = { parts: [{ text: injectedPrompt }] };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.error?.message || "Gemini API request failed.";
    return NextResponse.json({ error: message }, { status: response.status });
  }

  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text || "")
      .join("") || "";

  if (!text.trim()) {
    return NextResponse.json(
      { error: "No text returned by Gemini." },
      { status: 502 }
    );
  }

  return NextResponse.json({ text });
}
