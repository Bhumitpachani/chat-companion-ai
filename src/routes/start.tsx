import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pickUniqueCompanion, pickUniqueCompanionMale } from "@/lib/companions";
const logoAsset = { url: "/logo.png" };

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start Chat Free — ChatMingle | Chat with Girls Online Now" },
      { name: "description", content: "Start chatting with girls for free right now. No signup needed. Get matched with a friendly Indian companion in seconds on ChatMingle." },
      { name: "keywords", content: "start chat with girl free, chat with girls now, free girl chat no signup, talk to girls online free, instant chat with girls, free dating chat start" },
      { property: "og:title", content: "Start Chat Free — ChatMingle | Chat with Girls Online Now" },
      { property: "og:description", content: "Start chatting free. No signup. Get matched instantly on ChatMingle." },
      { property: "og:url", content: "https://www.chatmingle.online/start" },
    ],
  }),
  component: StartPage,
});

type Stage = "gender" | "name" | "matching" | "found";
type Gender = "male" | "female";

function StartPage() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage>("gender");
  const [gender, setGender] = useState<Gender | null>(null);
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [companion, setCompanion] = useState<string>("");

  useEffect(() => {
    try {
      const storedName = localStorage.getItem("cm_user_name");
      const storedGender = localStorage.getItem("cm_user_gender") as Gender | null;
      if (storedName) setName(storedName);
      if (storedGender) {
        setGender(storedGender);
        setStage("name"); // skip gender step if already set
      }
    } catch {}
  }, []);

  const handleGenderSelect = (g: Gender) => {
    setGender(g);
    try { localStorage.setItem("cm_user_gender", g); } catch {}
    setStage("name");
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2 || !gender) return;
    try { localStorage.setItem("cm_user_name", trimmed); } catch {}
    setStage("matching");
    setProgress(0);
  };

  useEffect(() => {
    if (stage !== "matching") return;
    let p = 0;
    const interval = setInterval(() => {
      const jump = Math.random() * 14 + 4;
      p = Math.min(100, p + jump);
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        const picked = gender === "female" ? pickUniqueCompanionMale() : pickUniqueCompanion();
        setCompanion(picked);
        try { localStorage.setItem("cm_companion", picked); } catch {}
        setTimeout(() => setStage("found"), 400);
      }
    }, 350);
    return () => clearInterval(interval);
  }, [stage, gender]);

  const matchingSteps = [
    { p: 0,  t: "Looking for someone friendly…" },
    { p: 25, t: "Checking who's online…" },
    { p: 55, t: "Finding a great match…" },
    { p: 80, t: "Almost ready…" },
    { p: 100, t: "Match found! 🎉" },
  ];
  const currentStep = matchingSteps.filter((s) => progress >= s.p).pop() ?? matchingSteps[0];

  const companionWord = gender === "female" ? "He's" : "She's";

  return (
    <div className="min-h-screen">
      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-16">

        {/* ── Gender selection ── */}
        {stage === "gender" && (
          <div className="w-full rounded-3xl glass p-8 shadow-brand text-center">
            <img src={logoAsset.url} alt="ChatMingle" className="mx-auto h-14 w-auto" />
            <h1 className="mt-6 text-3xl font-extrabold">I am a…</h1>
            <p className="mt-2 text-muted-foreground text-sm">So we can match you with the right companion.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={() => handleGenderSelect("male")}
                className="flex flex-col items-center gap-3 rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-md active:scale-95"
              >
                <span className="text-5xl">👦</span>
                <span className="text-base font-bold text-gray-900">Guy</span>
                <span className="text-xs text-gray-400">Chat with girls</span>
              </button>
              <button
                onClick={() => handleGenderSelect("female")}
                className="flex flex-col items-center gap-3 rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm transition-all hover:border-pink-400 hover:shadow-md active:scale-95"
              >
                <span className="text-5xl">👧</span>
                <span className="text-base font-bold text-gray-900">Girl</span>
                <span className="text-xs text-gray-400">Chat with guys</span>
              </button>
            </div>
          </div>
        )}

        {/* ── Name entry ── */}
        {stage === "name" && (
          <form onSubmit={handleStart} className="w-full rounded-3xl glass p-8 shadow-brand">
            <img src={logoAsset.url} alt="ChatMingle" className="mx-auto h-14 w-auto" />
            <h1 className="mt-6 text-center text-3xl font-extrabold">What's your name?</h1>
            <p className="mt-2 text-center text-muted-foreground">We'll use it to introduce you to your chat partner.</p>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={30}
              className="mt-6 w-full rounded-2xl border border-border bg-card px-5 py-4 text-lg font-medium outline-none ring-ring focus:ring-2"
            />
            {/* AI Disclosure + consent */}
            <label className="mt-5 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-pink-500"
              />
              <span className="text-xs leading-relaxed text-muted-foreground">
                I understand that all companions on ChatMingle are AI.
                This is an entertainment platform. I am 18+ and I agree to the{" "}
                <Link to="/terms" className="text-pink-500 underline hover:text-pink-700">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-pink-500 underline hover:text-pink-700">Privacy Policy</Link>.
              </span>
            </label>
            <button
              type="submit"
              disabled={name.trim().length < 2 || !agreed}
              className="mt-4 w-full rounded-full bg-gradient-brand py-3.5 text-base font-bold text-white shadow-brand transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              Find me a chat →
            </button>
            <button
              type="button"
              onClick={() => setStage("gender")}
              className="mt-3 w-full text-xs text-muted-foreground hover:text-gray-700 transition-colors"
            >
              ← Change my choice
            </button>
          </form>
        )}

        {/* ── Matching ── */}
        {stage === "matching" && (
          <div className="w-full rounded-3xl glass p-8 text-center shadow-brand">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-brand pulse-ring float-anim flex items-center justify-center text-4xl">💬</div>
            <h2 className="mt-6 text-2xl font-bold">{currentStep.t}</h2>
            <p className="mt-1 text-sm text-muted-foreground">Hang tight, {name}</p>
            <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-gradient-brand transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-2 text-sm font-semibold text-muted-foreground">{Math.round(progress)}%</div>
          </div>
        )}

        {/* ── Found ── */}
        {stage === "found" && companion && (
          <div className="w-full rounded-3xl glass p-8 text-center shadow-brand">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-brand text-5xl font-extrabold text-white shadow-brand">
              {companion[0]}
            </div>
            <h2 className="mt-6 text-3xl font-extrabold">Meet <span className="text-gradient-brand">{companion}</span> 💖</h2>
            <p className="mt-4 text-sm">{companionWord} online right now — go say hi!</p>
            <button
              onClick={() => navigate({ to: "/chat" })}
              className="mt-7 w-full rounded-full bg-gradient-brand py-3.5 text-base font-bold text-white shadow-brand transition-transform hover:scale-[1.02] active:scale-95"
            >
              Start chatting with {companion} →
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
