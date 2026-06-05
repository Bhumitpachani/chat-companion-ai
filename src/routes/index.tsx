import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";
import logoAsset from "@/assets/chatmingle-logo.png.asset.json";

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

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent pulse-ring" />
                New companions online now
              </span>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] md:text-6xl">
                Chat. <span className="text-gradient-brand">Mingle.</span><br />Make your day better.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                A warm, friendly chatroom where you can unwind, share your day, and have fun conversations — anytime, anywhere.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div><span className="text-2xl font-bold text-foreground">50k+</span><div>Happy chats</div></div>
                <div className="h-8 w-px bg-border" />
                <div><span className="text-2xl font-bold text-foreground">24/7</span><div>Available</div></div>
                <div className="h-8 w-px bg-border" />
                <div><span className="text-2xl font-bold text-foreground">100%</span><div>Free</div></div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
              <div className="float-anim relative rounded-3xl glass p-6 shadow-brand">
                <img src={logoAsset.url} alt="ChatMingle" className="mx-auto h-24 w-auto" />
                <div className="mt-6 space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Hey! Kaise ho? 😊</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-gradient-brand px-4 py-2.5 text-sm text-white">Hi! Just chilling, you?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Same yaar 🎶 What music are you into?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Instant matching", d: "Get connected with a friendly companion in seconds — no signup required.", e: "⚡" },
              { t: "Warm & playful", d: "Light-hearted conversations that brighten your day, in your style.", e: "💬" },
              { t: "Private & safe", d: "Your chats stay between you and your companion. End anytime.", e: "🔒" },
            ].map((f) => (
              <div key={f.t} className="card-3d rounded-2xl glass p-6 shadow-soft">
                <div className="text-3xl">{f.e}</div>
                <h3 className="mt-3 text-lg font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-24">
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-white shadow-brand md:p-14">
            <h2 className="text-3xl font-extrabold md:text-4xl">Your next great conversation is one click away</h2>
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
