import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — ChatMingle" },
      { name: "description", content: "Real stories, in-depth reads and community highlights from ChatMingle." },
      { property: "og:title", content: "ChatMingle Stories" },
      { property: "og:description", content: "Real stories, in-depth reads and community highlights." },
    ],
  }),
  component: StoriesPage,
});

const FEATURED = {
  tag: "Featured",
  emoji: "🌸",
  t: "The quiet power of a good conversation",
  d: "How a five-minute chat can change the shape of your whole day — and why we built ChatMingle around it.",
  read: "6 min read",
};

const STORIES = [
  { emoji: "🌙", tag: "Wellbeing", t: "Late-night chats and what they teach us", d: "There's a softness to conversations after midnight. Here's what we've learned from them.", read: "4 min" },
  { emoji: "🎶", tag: "Culture", t: "Bollywood, beats and the soundtrack of a chat", d: "A playful look at the music that keeps showing up in our most loved conversations.", read: "5 min" },
  { emoji: "☕", tag: "Lifestyle", t: "Coffee, journals and a tiny daily ritual", d: "Pairing a warm drink with a warm chat is more than a vibe — it's a habit worth keeping.", read: "3 min" },
  { emoji: "✨", tag: "Community", t: "Tiny moments that made our week", d: "A roundup of the kindest, funniest, sweetest interactions our community shared.", read: "4 min" },
  { emoji: "🧘", tag: "Wellbeing", t: "Breathing room: chats as a soft pause", d: "Why short, low-stakes conversations might be one of the best stress relievers around.", read: "5 min" },
  { emoji: "📚", tag: "Ideas", t: "What books teach us about better dialogue", d: "Five lessons from our favourite authors that quietly improved every chat we have.", read: "7 min" },
];

const TIMELINE = [
  { date: "Jun 2026", t: "ChatMingle 2.0 launches", d: "Faster matching, richer companion profiles, smoother conversations." },
  { date: "May 2026", t: "Hinglish goes live", d: "Companions now chat in a natural mix of Hindi and English." },
  { date: "Mar 2026", t: "10k daily conversations", d: "A milestone we never imagined when we started." },
  { date: "Jan 2026", t: "Privacy-first refresh", d: "Reworked our chat storage to be ephemeral by default." },
];

function StoriesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <header className="text-center">
          <span className="inline-block rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground">In-depth reads & community</span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <span className="text-gradient-brand">Stories</span> from the chat
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Longer reads, real moments, and behind-the-scenes peeks into how people use ChatMingle.
          </p>
        </header>

        {/* Featured */}
        <article className="card-3d mt-10 overflow-hidden rounded-3xl glass shadow-brand md:mt-14">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="flex h-48 items-center justify-center bg-gradient-brand text-7xl md:h-full md:text-8xl">
              {FEATURED.emoji}
            </div>
            <div className="p-6 sm:p-10">
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{FEATURED.tag}</span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">{FEATURED.t}</h2>
              <p className="mt-3 text-muted-foreground">{FEATURED.d}</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" /> {FEATURED.read}
              </div>
              <button className="mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-brand">Read story →</button>
            </div>
          </div>
        </article>

        {/* Story grid */}
        <section className="mt-14">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Latest reads</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((s) => (
              <article key={s.t} className="card-3d rounded-2xl glass p-5 shadow-soft">
                <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-brand text-5xl">{s.emoji}</div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">{s.tag}</span>
                  <span className="text-muted-foreground">{s.read}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                <button className="mt-3 text-sm font-semibold text-gradient-brand">Continue →</button>
              </article>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">A quick look back</h2>
          <p className="mt-2 text-muted-foreground">Milestones from the ChatMingle journey.</p>
          <ol className="relative mt-8 space-y-6 border-l-2 border-border pl-6">
            {TIMELINE.map((m) => (
              <li key={m.t} className="relative">
                <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-gradient-brand shadow-brand" />
                <div className="rounded-2xl glass p-5 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{m.date}</div>
                  <div className="mt-1 text-lg font-bold">{m.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-brand p-8 text-center text-white shadow-brand sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Want to be part of the next story?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">Start a chat now — your conversation could be the highlight of someone's day.</p>
          <a href="/start" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-foreground shadow-soft">Start chatting →</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
