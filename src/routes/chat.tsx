import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send } from "lucide-react";
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
  "arre yaar network slow ho gaya 😅 ek baar phir bhejo?",
  "oops kuch gadbad hui, retry karo na 🙈",
  "hmm message nahi pahuncha 😬 thoda wait karke try karo",
  "sorry ek second ke liye hang ho gaya — repeat please? 💕",
];

function pickFallback(used: Set<string>): string {
  const pool = FALLBACKS.filter((f) => !used.has(f));
  const choice = (pool.length ? pool : FALLBACKS)[Math.floor(Math.random() * (pool.length || FALLBACKS.length))];
  used.add(choice);
  if (used.size >= FALLBACKS.length) used.clear();
  return choice;
}

function typingDelay(text: string): number {
  const ms = text.length * 38 + Math.random() * 700;
  return Math.min(Math.max(ms, 1200), 4000);
}

function ChatPage() {
  const navigate = useNavigate();
  const send = useServerFn(sendChat);
  const [userName, setUserName] = useState("");
  const [companion, setCompanion] = useState("");
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
    if (!u || !c) { navigate({ to: "/start" }); return; }
    setUserName(u);
    setCompanion(c);
  }, [navigate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => { inputRef.current?.focus(); }, [companion, sending]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void submitMessage(); }
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
      await new Promise((r) => setTimeout(r, typingDelay(reply)));
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: reply, time: nowTime() }]);
    } catch (err) {
      console.error(err);
      const fallback = pickFallback(fallbackUsed.current);
      await new Promise((r) => setTimeout(r, typingDelay(fallback)));
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: fallback, time: nowTime() }]);
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
    <div className="flex h-[100dvh] flex-col bg-gray-100">

      {/* Header */}
      <header className="shrink-0 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="relative shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white"
              style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
              {companion ? companion[0] : "?"}
            </div>
            <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-gray-900 truncate">{companion}</div>
            <div className="text-xs text-gray-400">
              online now{companion ? ` · ${randomTrait(companion)}` : ""}
            </div>
          </div>
          <button
            onClick={() => setConfirmEnd(true)}
            className="shrink-0 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-100 transition-colors"
          >
            End
          </button>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        <div className="px-3 py-4 sm:px-6">

          {messages.length === 0 && companion && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full text-4xl font-extrabold text-white shadow-xl mb-5"
                style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
                {companion[0]}
              </div>
              <div className="text-xl font-bold text-gray-800">{companion}</div>
              <div className="mt-1 text-sm text-gray-400">{randomTrait(companion)}</div>
            </div>
          )}

          <div className="space-y-0.5">
            {messages.map((m, i) => {
              const isUser = m.role === "user";
              const prevSame = i > 0 && messages[i - 1].role === m.role;
              const nextSame = i < messages.length - 1 && messages[i + 1].role === m.role;
              return (
                <div key={m.id} className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"} ${prevSame ? "mt-0.5" : "mt-4"}`}>
                  {!isUser && (
                    <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${nextSame ? "invisible" : ""}`}
                      style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
                      {companion ? companion[0] : "A"}
                    </div>
                  )}
                  <div className={`flex max-w-[75%] sm:max-w-[65%] flex-col ${isUser ? "items-end" : "items-start"}`}>
                    <div className="px-4 py-2.5 text-sm leading-relaxed"
                      style={isUser ? {
                        background: "linear-gradient(135deg, #6366f1, #ec4899)",
                        borderRadius: prevSame ? "18px 4px 4px 18px" : nextSame ? "18px 18px 4px 18px" : "18px 4px 18px 18px",
                        color: "white",
                      } : {
                        background: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: prevSame ? "4px 18px 18px 4px" : nextSame ? "18px 18px 18px 4px" : "4px 18px 18px 18px",
                        color: "#111827",
                      }}>
                      <span className="whitespace-pre-wrap">{m.content}</span>
                    </div>
                    {!nextSame && (
                      <div className="mt-1 px-1 text-[10px] text-gray-400">{m.time}</div>
                    )}
                  </div>
                  {isUser && (
                    <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${nextSame ? "invisible" : ""}`}
                      style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}>
                      {userName ? userName[0].toUpperCase() : "Y"}
                    </div>
                  )}
                </div>
              );
            })}

            {typing && (
              <div className="flex items-end gap-2 mt-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
                  {companion ? companion[0] : "A"}
                </div>
                <div className="rounded-[4px_18px_18px_18px] bg-white border border-gray-200 px-5 py-3 shadow-sm">
                  <div className="flex gap-1.5 items-center h-4">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="h-2 w-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="shrink-0 bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-end gap-3 px-3 py-3 sm:px-6">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${companion || ""}…`}
            maxLength={2000}
            rows={1}
            disabled={sending}
            className="flex-1 resize-none overflow-hidden rounded-full border border-gray-300 bg-gray-50 px-5 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 disabled:opacity-60 transition-colors"
            style={{ maxHeight: "128px", scrollbarWidth: "none" }}
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
            className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-30"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* End confirm */}
      {confirmEnd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-gray-100">
            <h3 className="text-lg font-extrabold text-gray-900">End this chat?</h3>
            <p className="mt-2 text-sm text-gray-500">You will go back home. You can always start a new chat anytime.</p>
            <div className="mt-5 flex gap-3">
              <button onClick={() => setConfirmEnd(false)}
                className="flex-1 rounded-full border border-gray-200 bg-gray-50 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                Keep chatting
              </button>
              <button onClick={endChat}
                className="flex-1 rounded-full bg-red-500 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors">
                End chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
