import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendChat } from "@/lib/chat.functions";
import { randomTrait } from "@/lib/companions";
import logoAsset from "@/assets/chatmingle-logo.png.asset.json";

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
  const inputRef = useRef<HTMLInputElement>(null);

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
    // greeting
    setMessages([{
      id: "greet",
      role: "assistant",
      content: `Hi ${u}! 💖 I'm ${c}. So nice to meet you yaar! How's your day going?`,
      time: nowTime(),
    }]);
  }, [navigate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => { inputRef.current?.focus(); }, [companion, sending]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: text, time: nowTime() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);
    setTyping(true);

    try {
      const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));
      const { reply } = await send({ data: { messages: history, companionName: companion } });
      // small natural delay
      await new Promise((r) => setTimeout(r, 400));
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "assistant", content: reply, time: nowTime() }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Arre, network thoda slow hai 😅 ek baar phir bhejo?",
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
    <div className="flex h-screen flex-col">
      {/* Chat header */}
      <header className="glass border-b border-border/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="ChatMingle" className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-lg font-bold text-white shadow-brand">
                {companion ? companion[0] : "?"}
              </div>
              <span className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="leading-tight">
              <div className="font-bold">{companion}</div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="rounded-full bg-secondary px-1.5 py-0.5 font-semibold text-secondary-foreground">AI companion</span>
                <span>· online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setConfirmEnd(true)}
            className="rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/20"
          >
            End chat
          </button>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6">
          {companion && (
            <div className="mx-auto mb-6 max-w-md rounded-2xl glass p-4 text-center text-sm shadow-soft">
              <div className="font-semibold">You're now chatting with {companion}</div>
              <div className="mt-1 text-xs text-muted-foreground">{randomTrait(companion)} · Be kind and have fun 💖</div>
            </div>
          )}
          <div className="space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`group max-w-[78%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                  <div className={
                    m.role === "user"
                      ? "rounded-2xl rounded-br-md bg-gradient-brand px-4 py-2.5 text-white shadow-soft"
                      : "rounded-2xl rounded-bl-md bg-card px-4 py-2.5 text-foreground shadow-soft border border-border/60"
                  }>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</div>
                  </div>
                  <div className="mt-1 px-2 text-[10px] text-muted-foreground">{m.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-border/60 bg-card px-4 py-3 shadow-soft">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="border-t border-border/60 glass">
        <form onSubmit={handleSend} className="mx-auto flex max-w-3xl gap-2 px-4 py-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${companion}…`}
            maxLength={2000}
            disabled={sending}
            className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm outline-none ring-ring focus:ring-2 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || sending}
            className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-brand transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            Send
          </button>
        </form>
      </div>

      {/* End-chat confirm */}
      {confirmEnd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-card p-6 shadow-brand">
            <h3 className="text-xl font-extrabold">End this chat?</h3>
            <p className="mt-2 text-sm text-muted-foreground">You'll be returned to the home page. You can always start a new chat with someone else.</p>
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setConfirmEnd(false)}
                className="flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted"
              >
                Keep chatting
              </button>
              <button
                onClick={endChat}
                className="flex-1 rounded-full bg-destructive px-4 py-2.5 text-sm font-semibold text-destructive-foreground hover:opacity-90"
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
