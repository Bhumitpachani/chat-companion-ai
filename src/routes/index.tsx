import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";
const logoAsset = { url: "/logo.png" };

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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-16 sm:pt-16 md:pt-24 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent pulse-ring" />
                New companions online now
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                Chat. <span className="text-gradient-brand">Mingle.</span><br />Make your day better.
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground sm:text-lg md:mx-0">
                A warm, friendly chatroom where you can unwind, share your day, and have fun conversations — anytime, anywhere.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <button
                  onClick={() => navigate({ to: "/start" })}
                  className="rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-white shadow-brand transition-transform hover:scale-105 active:scale-95"
                >
                  Start Chat →
                </button>
                <button
                  onClick={() => navigate({ to: "/about" })}
                  className="rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold shadow-soft hover:bg-muted"
                >
                  Learn more
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:justify-start">
                <div><div className="text-2xl font-bold text-foreground">50k+</div><div>Happy chats</div></div>
                <div className="hidden h-8 w-px bg-border sm:block" />
                <div><div className="text-2xl font-bold text-foreground">24/7</div><div>Available</div></div>
                <div className="hidden h-8 w-px bg-border sm:block" />
                <div><div className="text-2xl font-bold text-foreground">100%</div><div>Free</div></div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
              <div className="float-anim relative rounded-3xl glass p-5 shadow-brand sm:p-6">
                <img src={logoAsset.url} alt="ChatMingle" className="mx-auto h-20 w-auto sm:h-24" />
                <div className="mt-5 space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Hey! Kaise ho? 😊</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-brand px-4 py-2.5 text-sm text-white">Hi! Just chilling, you?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Same yaar 🎶 What music are you into?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-brand px-4 py-2.5 text-sm text-white">Mostly indie & a bit of Arijit ✨</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Why people love <span className="text-gradient-brand">ChatMingle</span></h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Designed to feel warm, easy, and genuinely fun — every single chat.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.t} className="card-3d rounded-2xl glass p-6 shadow-soft">
                <div className="text-3xl">{f.e}</div>
                <h3 className="mt-3 text-lg font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">How it works</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Three tiny steps and you're chatting.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="card-3d relative overflow-hidden rounded-2xl glass p-6 shadow-soft">
                <div className="text-5xl font-extrabold text-gradient-brand opacity-80">{s.n}</div>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Showcase / 3D mock */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
              <div className="card-3d rounded-3xl glass p-5 shadow-brand sm:p-6">
                <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand font-bold text-white">P</div>
                  <div>
                    <div className="text-sm font-bold">Priya</div>
                    <div className="text-[11px] text-muted-foreground">online · friendly chat</div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-start"><div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Achha tell me, what's making you smile today? 😊</div></div>
                  <div className="flex justify-end"><div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-brand px-4 py-2.5 text-sm text-white">Honestly, this chat 😄</div></div>
                  <div className="flex justify-start"><div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Awww that's so sweet yaar 💖</div></div>
                </div>
              </div>
            </div>
            <div className="order-1 text-center md:order-2 md:text-left">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Conversations that feel real</h2>
              <p className="mt-4 text-muted-foreground">From quick check-ins to long late-night talks — ChatMingle adapts to the moment. Casual, kind, never robotic.</p>
              <ul className="mx-auto mt-6 max-w-md space-y-3 text-sm md:mx-0">
                <li className="flex items-start gap-3"><span>💖</span><span>Warm tone with playful Hinglish flavour.</span></li>
                <li className="flex items-start gap-3"><span>✨</span><span>Companions ask follow-ups to keep things flowing.</span></li>
                <li className="flex items-start gap-3"><span>🛡️</span><span>End the chat anytime — no awkwardness.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Loved by chatters everywhere</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">A few words from people who made ChatMingle part of their day.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <figure key={t.n} className="card-3d rounded-2xl glass p-5 shadow-soft">
                <div className="text-3xl">{t.e}</div>
                <blockquote className="mt-3 text-sm leading-relaxed">"{t.c}"</blockquote>
                <figcaption className="mt-4 text-sm font-bold">— {t.n}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Stats banner */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-4 rounded-3xl glass p-6 text-center shadow-soft sm:grid-cols-4 sm:p-8">
            {[
              { k: "50k+", v: "Chats started" },
              { k: "120+", v: "Unique companions" },
              { k: "4.8★", v: "Average rating" },
              { k: "24/7", v: "Always online" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-extrabold text-gradient-brand sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Frequently asked</h2>
            <p className="mt-3 text-muted-foreground">Quick answers to the things people usually wonder about.</p>
          </div>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl glass p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-base font-bold flex items-center justify-between gap-3">
                  <span>{f.q}</span>
                  <span className="text-xl text-gradient-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-8 text-center text-white shadow-brand sm:p-12 md:p-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Your next great conversation is one click away</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">Pick a name, get matched, and start chatting in under 10 seconds.</p>
            <button
              onClick={() => navigate({ to: "/start" })}
              className="mt-7 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-bold text-foreground shadow-soft transition-transform hover:scale-105 active:scale-95"
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
