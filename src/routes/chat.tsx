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
  "Oops, connection ma thodi problem aayi. Phir moko? 🙈",
  "Hmm, message pohncho nathi laagtun 😬 thoda wait karine try karo?",
  "Sorry, ek second ke liye sab freeze thay gayu. Repeat please? 💕",
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
      await new Promise((r) => setTimeout(r, 300));
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: reply, time: nowTime() }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: pickFallback(fallbackUsed.current), time: nowTime() }]);
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
    <div className="flex h-[100dvh] flex-col" style={{ background: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 40%, #1a1a4e 100%)" }}>

      {/* ── Header ── */}
      <header className="shrink-0" style={{ background: "rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)" }}>
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <button
            onClick={() => setConfirmEnd(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            aria-label="Back"
          >
            <ArrowLeft className="h-4 w-4 text-white/80" />
          </button>

          <div className="flex flex-1 min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #f43f8e, #a855f7)" }}>
                {companion ? companion[0] : "?"}
              </div>
              <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-[#1a0533] bg-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold text-white">{companion}</div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>online now</span>
                {companion && <span className="hidden sm:inline">· {randomTrait(companion)}</span>}
              </div>
            </div>
          </div>

          <button
            onClick={() => setConfirmEnd(true)}
            className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all"
            style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5" }}
          >
            End
          </button>
        </div>
      </header>

      {/* ── Messages ── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        <div className="mx-auto max-w-3xl px-4 py-6 space-y-1">

          {/* Empty state */}
          {messages.length === 0 && companion && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full text-4xl font-extrabold text-white shadow-2xl mb-5"
                style={{ background: "linear-gradient(135deg, #f43f8e, #a855f7)", boxShadow: "0 0 40px rgba(244,63,142,0.4)" }}
              >
                {companion[0]}
              </div>
              <div className="text-xl font-bold text-white">{companion}</div>
              <div className="mt-1 text-sm text-white/50">{randomTrait(companion)}</div>
              <div
                className="mt-5 rounded-2xl px-5 py-3 text-sm text-white/80"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                👋 Say hi first! {companion} is waiting for you…
              </div>
            </div>
          )}

          {messages.map((m, i) => {
            const isUser = m.role === "user";
            const prevSame = i > 0 && messages[i - 1].role === m.role;
            const nextSame = i < messages.length - 1 && messages[i + 1].role === m.role;
            return (
              <div key={m.id} className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"} ${prevSame ? "mt-0.5" : "mt-3"}`}>

                {/* AI avatar — only on last consecutive */}
                {!isUser && (
                  <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${nextSame ? "invisible" : ""}`}
                    style={{ background: "linear-gradient(135deg, #f43f8e, #a855f7)" }}>
                    {companion ? companion[0] : "A"}
                  </div>
                )}

                <div className={`flex max-w-[72%] flex-col ${isUser ? "items-end" : "items-start"}`}>
                  <div
                    className="px-4 py-2.5 text-sm leading-relaxed"
                    style={isUser ? {
                      background: "linear-gradient(135deg, #6366f1, #ec4899)",
                      borderRadius: prevSame ? "18px 4px 4px 18px" : nextSame ? "18px 18px 4px 18px" : "18px 4px 18px 18px",
                      color: "white",
                      boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
                    } : {
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: prevSame ? "4px 18px 18px 4px" : nextSame ? "18px 18px 18px 4px" : "4px 18px 18px 18px",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    <span className="whitespace-pre-wrap">{m.content}</span>
                  </div>
                  {/* Timestamp only on last in a group */}
                  {!nextSame && (
                    <div className="mt-1 px-1 text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>{m.time}</div>
                  )}
                </div>

                {/* User avatar — only on last consecutive */}
                {isUser && (
                  <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${nextSame ? "invisible" : ""}`}
                    style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}>
                    {userName ? userName[0].toUpperCase() : "Y"}
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing indicator */}
          {typing && (
            <div className="flex items-end gap-2 mt-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #f43f8e, #a855f7)" }}>
                {companion ? companion[0] : "A"}
              </div>
              <div
                className="px-5 py-3 rounded-[4px_18px_18px_18px]"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div className="flex gap-1.5 items-center h-4">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="h-2 w-2 rounded-full animate-bounce"
                      style={{ background: "rgba(244,63,142,0.8)", animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Composer ── */}
      <div
        className="shrink-0 pb-[env(safe-area-inset-bottom)]"
        style={{ background: "rgba(255,255,255,0.05)", borderTop: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}
      >
        <div className="mx-auto flex max-w-3xl items-end gap-3 px-4 py-3">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${companion || ""}…`}
            maxLength={2000}
            rows={1}
            disabled={sending}
            className="flex-1 resize-none overflow-hidden text-sm outline-none disabled:opacity-60"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "20px",
              padding: "12px 20px",
              color: "white",
              maxHeight: "128px",
              scrollbarWidth: "none",
            }}
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
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", boxShadow: "0 4px 15px rgba(236,72,153,0.4)" }}
          >
            <Send className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* ── End chat confirm ── */}
      {confirmEnd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
          <div className="w-full max-w-sm rounded-3xl p-6" style={{ background: "#1e0940", border: "1px solid rgba(255,255,255,0.15)" }}>
            <h3 className="text-lg font-extrabold text-white">End this chat?</h3>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>You will go back home. You can always start a new chat anytime.</p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setConfirmEnd(false)}
                className="flex-1 rounded-full py-2.5 text-sm font-semibold text-white/70 transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Keep chatting
              </button>
              <button
                onClick={endChat}
                className="flex-1 rounded-full py-2.5 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #ef4444, #dc2626)" }}
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
