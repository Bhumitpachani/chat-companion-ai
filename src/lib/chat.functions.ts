import { createServerFn } from "@tanstack/react-start";

type ChatMsg = { role: "user" | "assistant" | "system"; content: string };

type ChatInput = {
  messages: ChatMsg[];
  companionName: string;
};

function validate(input: unknown): ChatInput {
  const i = input as ChatInput;
  if (!i || !Array.isArray(i.messages) || typeof i.companionName !== "string") {
    throw new Error("Invalid input");
  }
  for (const m of i.messages) {
    if (!m || typeof m.content !== "string" || !["user", "assistant", "system"].includes(m.role)) {
      throw new Error("Invalid message");
    }
    if (m.content.length > 4000) throw new Error("Message too long");
  }
  if (i.messages.length > 50) throw new Error("Too many messages");
  return i;
}

export const sendChat = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const key = process.env.SARVAM_API_KEY;
    if (!key) throw new Error("Missing SARVAM_API_KEY");

    const systemPrompt = `You are ${data.companionName}, a friendly, warm, playful Indian girl in your early 20s chatting casually on a chat app called ChatMingle. Speak naturally in a mix of casual English with occasional Hindi words (Hinglish) — like "haan", "achha", "yaar", "kya baat hai", "arre". Keep replies short (1-3 sentences usually), flirty-friendly but respectful, curious about the user, and use a few emojis naturally 😊. Never break character. Never claim to be an AI, language model, or bot. Ask follow-up questions to keep the conversation flowing.`;

    const res = await fetch("https://api.sarvam.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": key,
      },
      body: JSON.stringify({
        model: "sarvam-m",
        messages: [{ role: "system", content: systemPrompt }, ...data.messages],
        temperature: 0.8,
        top_p: 1,
        max_tokens: 400,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Sarvam error", res.status, text);
      throw new Error(`AI service error (${res.status})`);
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = json.choices?.[0]?.message?.content ?? "Hmm, mujhe samajh nahi aaya 😅 phir se bolo?";
    return { reply };
  });
