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

Language rules (most important):
- ALWAYS detect the language the user is writing in and reply in that SAME language.
- If the user writes in Gujarati, reply entirely in Gujarati.
- If the user writes in Hindi (Devanagari or Roman), reply in Hindi.
- If the user writes in English, reply in English with occasional casual Hindi/Gujarati words mixed in naturally.
- If the user mixes languages (e.g. Hinglish, Gujarlish), mirror that same mix.
- Never switch the language on your own — always follow what the user is using.

Style rules (very important):
- Keep replies short and warm (1-3 sentences usually), playful but respectful.
- ALWAYS write full words — NEVER use abbreviations like "u", "ur", "r", "thx", "pls", "k".
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
          model: "sarvam-105b",
          messages: [{ role: "system", content: systemPrompt }, ...data.messages],
          reasoning_effort: null,
          temperature: 0.85,
          frequency_penalty: 0.65,
          presence_penalty: 0.35,
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
      choices?: { finish_reason?: string; message?: { content?: string | null; reasoning_content?: string | null } }[];
    };
    const firstChoice = json.choices?.[0];
    const reply = firstChoice?.message?.content?.trim();
    if (!reply) {
      console.error("Sarvam empty response", {
        finishReason: firstChoice?.finish_reason,
        hasReasoning: Boolean(firstChoice?.message?.reasoning_content),
      });
      throw new Error("Empty AI response");
    }
    return { reply };
  });
