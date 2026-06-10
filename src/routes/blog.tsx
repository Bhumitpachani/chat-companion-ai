import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — ChatMingle | Tips to Chat with Girls Online Free" },
      { name: "description", content: "Read the ChatMingle blog for tips on how to chat with girls online, start conversations, use Hinglish, and make every free chat on ChatMingle better." },
      { name: "keywords", content: "how to chat with girls online, chat tips India, Hinglish conversation tips, free chat app tips, dating chat tips, talk to girls online guide" },
      { property: "og:title", content: "ChatMingle Blog — Chat with Girls Tips & Stories" },
      { property: "og:description", content: "Tips on chatting with girls free online. Hinglish phrases, conversation starters, dating chat guides." },
      { property: "og:url", content: "https://www.chatmingle.app/blog" },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { t: "5 ways to start a great conversation", d: "Stuck on the first message? Try these openers that always work.", tag: "Conversation", emoji: "💬" },
  { t: "Why small talk matters", d: "The science behind why even short chats can lift your mood.", tag: "Wellbeing", emoji: "🌸" },
  { t: "Hinglish 101: common phrases", d: "Pick up the casual Indian-English mix that makes chats fun.", tag: "Culture", emoji: "🇮🇳" },
  { t: "Chatting after a long day", d: "Wind-down rituals that include a friendly conversation.", tag: "Lifestyle", emoji: "🌙" },
  { t: "What makes a chat feel warm?", d: "Tone, pacing, emojis — small choices that change everything.", tag: "Conversation", emoji: "💖" },
  { t: "Conversation starters for shy people", d: "Low-pressure prompts to ease into any new chat.", tag: "Tips", emoji: "✨" },
];

function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-5xl font-extrabold">The <span className="text-gradient-brand">ChatMingle</span> Blog</h1>
        <p className="mt-3 text-lg text-muted-foreground">Stories, tips and ideas to make every chat better.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.t} className="card-3d rounded-2xl glass p-6 shadow-soft">
              <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-brand text-5xl">
                {p.emoji}
              </div>
              <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{p.tag}</span>
              <h2 className="mt-3 text-xl font-bold leading-tight">{p.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <button className="mt-4 text-sm font-semibold text-gradient-brand">Read more →</button>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
