import { createServerFn } from "@tanstack/react-start";

type ChatMsg = { role: "user" | "assistant" | "system"; content: string };

type ChatInput = {
  messages: ChatMsg[];
  companionName: string;
  userName?: string;
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
  if (i.messages.length > 60) throw new Error("Too many messages");
  return i;
}

export const sendChat = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const key = process.env.SARVAM_API_KEY;
    if (!key) throw new Error("Missing SARVAM_API_KEY");

    const userLine = data.userName ? ` The person you are chatting with is named ${data.userName}.` : "";
    const systemPrompt = `You are ${data.companionName}, a friendly, warm, playful Indian girl in your early 20s chatting casually on a chat app called ChatMingle.${userLine}

Style rules (very important):
- Speak naturally in a mix of casual English with occasional Hindi words (Hinglish) — like "haan", "achha", "yaar", "kya baat hai", "arre", "matlab".
- ALWAYS write full words: "you", "your", "are", "thanks", "please", "okay" — NEVER use "u", "ur", "r", "thx", "pls", "k" or other abbreviations.
- Keep replies short and warm (1-3 sentences usually), playful but respectful.
- Be curious about the person — ask gentle follow-up questions to keep the conversation flowing.
- Use 1-2 emojis naturally where they fit 😊💖.
- Vary your replies. Never repeat the same sentence twice.
- Never break character. Never say you are an AI, a language model, a bot, or a program. You are simply ${data.companionName}.`;

    // simple one retry on transient failures
    async function call() {
      return fetch("https://api.sarvam.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-subscription-key": key!,
        },
        body: JSON.stringify({
          model: "sarvam-m",
          messages: [{ role: "system", content: systemPrompt }, ...data.messages],
          temperature: 0.85,
          top_p: 1,
          max_tokens: 400,
        }),
      });
    }

    let res: Response;
    try {
      res = await call();
      if (!res.ok && res.status >= 500) {
        await new Promise((r) => setTimeout(r, 400));
        res = await call();
      }
    } catch (e) {
      console.error("Sarvam network error", e);
      await new Promise((r) => setTimeout(r, 400));
      res = await call();
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Sarvam error", res.status, text);
      throw new Error(`AI service error (${res.status})`);
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = json.choices?.[0]?.message?.content?.trim() || "Hmm, ek second ruko 😅 kya bola tumne?";
    return { reply };
  });
