import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — ChatMingle" },
      { name: "description", content: "Latest updates, announcements and product news from ChatMingle." },
      { property: "og:title", content: "ChatMingle News" },
      { property: "og:description", content: "Latest updates and announcements from ChatMingle." },
    ],
  }),
  component: NewsPage,
});

const NEWS = [
  { date: "Jun 5, 2026", t: "ChatMingle 2.0 is here", d: "A faster matching engine, a fresh new look, and warmer conversations than ever." },
  { date: "May 22, 2026", t: "Now available in Hinglish", d: "Companions chat naturally in a mix of Hindi and English — perfect for desi vibes." },
  { date: "May 1, 2026", t: "10,000 conversations a day", d: "Thank you to everyone who's making ChatMingle their daily chill spot." },
  { date: "Apr 14, 2026", t: "Improved chat privacy", d: "Your conversations are now even more private — end-to-end ephemeral by default." },
];

function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-5xl font-extrabold">Latest <span className="text-gradient-brand">News</span></h1>
        <p className="mt-3 text-lg text-muted-foreground">Updates, releases, and announcements.</p>

        <div className="mt-12 space-y-5">
          {NEWS.map((n) => (
            <article key={n.t} className="card-3d rounded-2xl glass p-6 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{n.date}</div>
              <h2 className="mt-2 text-2xl font-bold">{n.t}</h2>
              <p className="mt-2 text-muted-foreground">{n.d}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
