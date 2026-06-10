import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, Send } from "lucide-react";
import { sendChat } from "@/lib/chat.functions";
import { randomTrait } from "@/lib/companions";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chatroom — ChatMingle" },
      { name: "description", content: "Your private ChatMingle chatroom." },
    ],
  }),
  component: ChatPage,
});

type Msg = { id: string; role: "user" | "assistant"; content: string; time: string };

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const FALLBACKS = [
  "Arre yaar, network thoda slow lag raha hai 😅 ek baar phir try karo?",
  "Oops, lagta hai connection thoda hiccup hua. Phir se bhejogi?",
  "Hmm, message reach nahi hua properly 😬 thoda sa wait karke try karo?",
  "Sorry yaar, ek second ke liye sab freeze ho gaya. Repeat please? 🙈",
  "Arre, kuch toh gadbad hui — ek baar resend karo na? 🤭",
];

function pickFallback(used: Set<string>): string {
  const pool = FALLBACKS.filter((f) => !used.has(f));
  const choice = (pool.length ? pool : FALLBACKS)[Math.floor(Math.random() * (pool.length || FALLBACKS.length))];
  used.add(choice);
  if (used.size >= FALLBACKS.length) used.clear();
  return choice;
}

function ChatPage() {
  const navigate = useNavigate();
  const send = useServerFn(sendChat);
  const [userName, setUserName] = useState<string>("");
  const [companion, setCompanion] = useState<string>("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fallbackUsed = useRef<Set<string>>(new Set());

  useEffect(() => {
    let u = "", c = "";
    try {
      u = localStorage.getItem("cm_user_name") || "";
      c = localStorage.getItem("cm_companion") || "";
    } catch {}
    if (!u || !c) {
      navigate({ to: "/start" });
      return;
    }
    setUserName(u);
    setCompanion(c);
  }, [navigate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => { inputRef.current?.focus(); }, [companion, sending]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void submitMessage();
    }
  };

  const submitMessage = async () => {
    const text = input.trim();
    if (!text || sending) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: text, time: nowTime() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);
    setTyping(true);

    try {
      const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));
      const { reply } = await send({ data: { messages: history, companionName: companion, userName } });
      await new Promise((r) => setTimeout(r, 350));
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: reply, time: nowTime() }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, {
        id: crypto.randomUUID(),
        role: "assistant",
        content: pickFallback(fallbackUsed.current),
        time: nowTime(),
      }]);
    } finally {
      setTyping(false);
      setSending(false);
    }
  };

  const endChat = () => {
    try { localStorage.removeItem("cm_companion"); } catch {}
    navigate({ to: "/" });
  };

  return (
    <div className="flex h-[100dvh] flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

      {/* Chat header — glass with gradient accent */}
      <header className="shrink-0 border-b border-white/40 backdrop-blur-xl bg-white/60 shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
          <button
            onClick={() => setConfirmEnd(true)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-sm hover:bg-white transition-all"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>

          <div className="flex flex-1 min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 text-lg font-bold text-white shadow-lg">
                {companion ? companion[0] : "?"}
              </div>
              <span className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400 shadow" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-base font-bold text-gray-900">{companion}</div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="rounded-full bg-pink-100 px-2 py-0.5 text-[10px] font-semibold text-pink-600">AI companion</span>
                <span>· online</span>
              </div>
            </div>
          </div>

          {companion && (
            <div className="hidden sm:block text-xs text-gray-400 italic">
              {randomTrait(companion)}
            </div>
          )}

          <button
            onClick={() => setConfirmEnd(true)}
            className="shrink-0 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-500 hover:bg-red-100 transition-all"
          >
            End
          </button>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8">

          {/* Empty state — shown when no messages yet */}
          {messages.length === 0 && companion && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 text-3xl font-bold text-white shadow-xl mb-4">
                {companion[0]}
              </div>
              <div className="text-lg font-bold text-gray-800">{companion}</div>
              <div className="mt-1 text-sm text-gray-500">{randomTrait(companion)}</div>
              <div className="mt-4 rounded-2xl bg-white/70 backdrop-blur px-5 py-3 text-sm text-gray-600 shadow-sm border border-white/60">
                Say hi first! 👋 {companion} is waiting for you.
              </div>
            </div>
          )}

          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex items-end gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>

                {/* AI avatar */}
                {m.role === "assistant" && (
                  <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 text-xs font-bold text-white shadow mb-5">
                    {companion ? companion[0] : "A"}
                  </div>
                )}

                <div className={`flex max-w-[70%] flex-col sm:max-w-[60%] ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div className={
                    m.role === "user"
                      ? "rounded-3xl rounded-br-md bg-gradient-to-br from-blue-500 to-pink-500 px-5 py-3 text-white shadow-md"
                      : "rounded-3xl rounded-bl-md bg-white/80 backdrop-blur px-5 py-3 text-gray-800 shadow-md border border-white/60"
                  }>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</div>
                  </div>
                  <div className="mt-1.5 px-2 text-[10px] text-gray-400">{m.time}</div>
                </div>

                {/* User avatar */}
                {m.role === "user" && (
                  <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-pink-500 text-xs font-bold text-white shadow mb-5">
                    {userName ? userName[0].toUpperCase() : "Y"}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex items-end gap-3 justify-start">
                <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 text-xs font-bold text-white shadow">
                  {companion ? companion[0] : "A"}
                </div>
                <div className="rounded-3xl rounded-bl-md bg-white/80 backdrop-blur px-5 py-3 shadow-md border border-white/60">
                  <div className="flex gap-1.5 items-center h-4">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="shrink-0 border-t border-white/40 backdrop-blur-xl bg-white/60 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-5xl items-end gap-3 px-4 py-3 sm:px-8 sm:py-4">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${companion || ""}… (Enter to send)`}
            maxLength={2000}
            rows={1}
            disabled={sending}
            className="flex-1 resize-none overflow-hidden rounded-2xl border border-white/60 bg-white/80 backdrop-blur px-5 py-3 text-sm shadow-sm outline-none ring-pink-300 focus:ring-2 disabled:opacity-60 max-h-32"
            style={{ height: "auto" }}
            onInput={(e) => {
              const t = e.currentTarget;
              t.style.height = "auto";
              t.style.height = Math.min(t.scrollHeight, 128) + "px";
            }}
          />
          <button
            type="button"
            onClick={() => void submitMessage()}
            disabled={!input.trim() || sending}
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-pink-500 text-white shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* End-chat confirm */}
      {confirmEnd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
            <h3 className="text-xl font-extrabold text-gray-900">End this chat?</h3>
            <p className="mt-2 text-sm text-gray-500">You will be returned to the home page. You can always start a new chat with someone else.</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setConfirmEnd(false)}
                className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
              >
                Keep chatting
              </button>
              <button
                onClick={endChat}
                className="flex-1 rounded-full bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
              >
                End chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
