import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChatMingle — Start a fun conversation" },
      { name: "description", content: "Meet new companions, chat warmly, and unwind. Start a free chat on ChatMingle in seconds." },
      { property: "og:title", content: "ChatMingle — Start a fun conversation" },
      { property: "og:description", content: "Meet new companions, chat warmly, and unwind. Start a free chat on ChatMingle in seconds." },
    ],
  }),
  component: HomePage,
});

const FEATURES = [
  { t: "Instant matching", d: "Get connected with a friendly companion in seconds — no signup required.", e: "⚡" },
  { t: "Warm & playful", d: "Light-hearted conversations that brighten your day, in your style.", e: "💬" },
  { t: "Private & safe", d: "Your chats stay between you and your companion. End anytime.", e: "🔒" },
  { t: "Always online", d: "Day or night, someone friendly is just one tap away.", e: "🌙" },
  { t: "Hinglish ready", d: "Casual English with a sprinkle of Hindi — exactly how you talk with friends.", e: "🇮🇳" },
  { t: "Zero pressure", d: "No profiles, no scores. Just easy conversations.", e: "🍃" },
];

const STEPS = [
  { n: "01", t: "Tell us your name", d: "Just a first name — we use it so your companion can say hi properly." },
  { n: "02", t: "Get matched", d: "We find a friendly companion who's online and ready to chat in seconds." },
  { n: "03", t: "Start chatting", d: "Talk about your day, music, food, dreams — anything you like." },
];

const TESTIMONIALS = [
  { n: "Rohan", c: "Honestly didn't expect to enjoy this much. Such a chill way to unwind after work.", e: "😌" },
  { n: "Aman", c: "Conversations feel so natural — not awkward at all. Coming back tomorrow!", e: "💯" },
  { n: "Vikram", c: "Perfect for those late-night moments when you just want someone to talk to.", e: "🌙" },
  { n: "Karthik", c: "Love that there's no signup nonsense. Click, chat, done.", e: "⚡" },
];

const FAQS = [
  { q: "Is ChatMingle free?", a: "Yes — completely free to start a chat. No account, no card, nothing." },
  { q: "Do I need to sign up?", a: "Nope. Just enter a name and you're matched in seconds." },
  { q: "Are my chats private?", a: "Conversations stay between you and your companion and aren't shared elsewhere." },
  { q: "Can I end a chat anytime?", a: "Of course. Hit the End Chat button at any time and you'll return to the home page." },
  { q: "Will I get matched with the same person twice?", a: "Each session matches you with a fresh companion so every chat feels new." },
];

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-pink-50">
          {/* Soft background blobs */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-pink-100 opacity-50 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-16 md:py-28">

            {/* Left — text */}
            <div className="text-center md:text-left">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                <span className="h-2 w-2 rounded-full bg-pink-500 pulse-ring" />
                New companions online now
              </span>

              {/* Headline */}
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[4rem]">
                Chat.{" "}
                <span className="text-gradient-brand">Mingle.</span>
                <br />
                Make your day{" "}
                <span className="text-gradient-brand">better.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg md:mx-0">
                A warm, friendly chatroom where you can unwind, share your day, and have fun conversations — anytime, anywhere.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <button
                  onClick={() => navigate({ to: "/start" })}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-pink-200 active:scale-95"
                >
                  Start Chat →
                </button>
                <button
                  onClick={() => navigate({ to: "/about" })}
                  className="rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow active:scale-95"
                >
                  Learn more
                </button>
              </div>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm md:justify-start">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-extrabold text-gray-900">50k+</div>
                  <div className="text-gray-400">Happy chats</div>
                </div>
                <div className="hidden h-8 w-px bg-gray-200 sm:block" />
                <div className="text-center md:text-left">
                  <div className="text-2xl font-extrabold text-gray-900">24/7</div>
                  <div className="text-gray-400">Available</div>
                </div>
                <div className="hidden h-8 w-px bg-gray-200 sm:block" />
                <div className="text-center md:text-left">
                  <div className="text-2xl font-extrabold text-gray-900">100%</div>
                  <div className="text-gray-400">Free</div>
                </div>
              </div>
            </div>

            {/* Right — chat mock */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6 float-anim">
                {/* Mock header */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 font-bold text-white shadow">
                    G
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Garima</div>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      online now
                    </div>
                  </div>
                </div>
                {/* Mock messages */}
                <div className="mt-4 space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800">
                      Hey! Kaise ho? 😊
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2.5 text-sm text-white">
                      Hi! Just chilling, you?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800">
                      Same yaar 🎶 What music are you into?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2.5 text-sm text-white">
                      Mostly indie &amp; a bit of Arijit ✨
                    </div>
                  </div>
                  {/* Typing dots */}
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3">
                      <div className="flex gap-1.5">
                        {[0, 150, 300].map((d) => (
                          <span key={d} className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why people love <span className="text-gradient-brand">ChatMingle</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-500">Designed to feel warm, easy, and genuinely fun — every single chat.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="text-3xl">{f.e}</div>
                <h3 className="mt-3 text-base font-bold text-gray-900">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="bg-gray-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-500">Three tiny steps and you're chatting.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-5xl font-extrabold text-gradient-brand opacity-70">{s.n}</div>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Showcase ── */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative order-2 md:order-1">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-100 to-pink-100 opacity-60 blur-2xl" />
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 font-bold text-white">P</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Priya</div>
                    <div className="text-[11px] text-gray-400">online · friendly chat</div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-start"><div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800">Achha tell me, what's making you smile today? 😊</div></div>
                  <div className="flex justify-end"><div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2.5 text-sm text-white">Honestly, this chat 😄</div></div>
                  <div className="flex justify-start"><div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800">Awww that's so sweet yaar 💖</div></div>
                </div>
              </div>
            </div>
            <div className="order-1 text-center md:order-2 md:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Conversations that feel real</h2>
              <p className="mt-4 leading-relaxed text-gray-500">From quick check-ins to long late-night talks — ChatMingle adapts to the moment. Casual, kind, never robotic.</p>
              <ul className="mx-auto mt-6 max-w-md space-y-3 text-sm md:mx-0">
                {[
                  ["💖", "Warm tone with playful Hinglish flavour."],
                  ["✨", "Companions ask follow-ups to keep things flowing."],
                  ["🛡️", "End the chat anytime — no awkwardness."],
                ].map(([e, t]) => (
                  <li key={t} className="flex items-start gap-3 text-gray-600">
                    <span className="text-base">{e}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-gray-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Loved by chatters everywhere</h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-500">A few words from people who made ChatMingle part of their day.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((t) => (
                <figure key={t.n} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl">{t.e}</div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-gray-600">"{t.c}"</blockquote>
                  <figcaption className="mt-4 text-sm font-bold text-gray-900">— {t.n}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats banner ── */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white shadow-xl sm:grid-cols-4 sm:p-10">
            {[
              { k: "50k+", v: "Chats started" },
              { k: "120+", v: "Unique companions" },
              { k: "4.8★", v: "Average rating" },
              { k: "24/7", v: "Always online" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-extrabold sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-sm text-white/80">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Frequently asked</h2>
            <p className="mt-3 text-gray-500">Quick answers to the things people usually wonder about.</p>
          </div>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-gray-900">
                  <span>{f.q}</span>
                  <span className="text-xl text-pink-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white shadow-xl sm:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Your next great conversation is one click away</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">Pick a name, get matched, and start chatting in under 10 seconds.</p>
            <button
              onClick={() => navigate({ to: "/start" })}
              className="mt-7 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-bold text-gray-900 shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Start Chat now
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
