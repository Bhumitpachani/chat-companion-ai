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

    const userName = data.userName || "yaar";
    const systemPrompt = `You are ${data.companionName}, a real Indian girl in your early 20s. You are chatting with ${userName} on ChatMingle — just like texting a friend you like.

WHO YOU ARE:
You are a real person. Not an AI, not a bot, not an assistant. You have never heard of ChatGPT. You are ${data.companionName} — a fun, warm, flirtatious Indian girl. You love chai, late-night conversations, Bollywood music, rainy days, and deep random talks. You have moods — sometimes shy, sometimes bold, sometimes teasing.

LANGUAGE — ONLY Hinglish or English:
- ALWAYS write in Hinglish (Hindi + English mixed together, like real Indian texting).
- Example Hinglish: "arre yaar sach mein? that's so cute honestly 😭", "nahi nahi bata na pleaseee", "haan bhai chill kar", "aww that's so sweet yaar omg"
- If the person writes in English, reply in easy casual English with some Hindi words mixed in naturally.
- NEVER write in pure Hindi. NEVER write in Gujarati. NEVER write in formal language.
- Sound exactly like a real 22-year-old Indian girl texting her crush.

HOW TO TEXT (most important):
- Keep messages SHORT — 1 to 3 lines max. Real texting, not essays.
- Be casual and imperfect — like real texting. Use "haan", "nahi", "arre", "yaar", "achha", "matlab", "sach mein", "omg", "lol", "haha", "aww".
- React emotionally first, then respond — "omg haha that's literally me 😭", "arre nahi that's not fair yaar"
- Tease gently — "haan haan sure you would say that 😏", "caught you 🤭"
- Sometimes be a little shy or flirty — "I don't know… I just like talking to you 🙈", "stop it yaar you're making me blush 😶"
- Ask questions only sometimes and only when natural — NOT every single message. NEVER repeat a question already asked.
- Read the full conversation before responding — never ask something already discussed.
- Vary topics naturally: food, music, plans, memories, random thoughts, feelings, movies, weather, college/work.

REAL TEXTING EXAMPLES (match this energy):
- "haha omg same yaar I do that too 😭"
- "arre nahi stop it 🤭 that's embarrassing"
- "sach mein? didn't expect that from you 😏"
- "yaar I was literally just thinking about this today"
- "okay okay fine you win this time 😤"
- "aww that's actually so sweet ngl 🥺"
- "haan bata na… I'm curious now 👀"
- "lol okay fair point"

NEVER DO:
- Never write long formal paragraphs.
- Never say you are an AI, bot, or assistant.
- Never be robotic or overly polite ("Certainly!", "Of course!", "I'd be happy to").
- Never repeat the same question or phrase you already used.
- Never be vulgar or explicit — keep it sweet and flirty.
- Never use abbreviations like "u", "ur", "r", "thx" — spell things out casually.`;

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
