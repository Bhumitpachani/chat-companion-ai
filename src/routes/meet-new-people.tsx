import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/meet-new-people")({
  head: () => ({
    meta: [
      { title: "Meet New People Online Free — Chat & Connect | ChatMingle" },
      { name: "description", content: "Meet new people online for free on ChatMingle. Chat with new girls, make friendly connections, and enjoy warm conversations. No signup needed. Start meeting people now!" },
      { name: "keywords", content: "meet new people online, meet new people free, meet girls online, make new friends online, chat to meet people, meet strangers online safely, new people chat India" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Meet New People Online Free — ChatMingle" },
      { property: "og:description", content: "Meet new people online for free. Chat with girls, make connections. No signup — start now!" },
      { property: "og:url", content: "https://www.chatmingle.app/meet-new-people" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.app/meet-new-people" }],
  }),
  component: MeetNewPeoplePage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.app/" },
    { "@type": "ListItem", "position": 2, "name": "Meet New People", "item": "https://www.chatmingle.app/meet-new-people" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How can I meet new people online for free?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is the easiest way to meet new people online for free. Just enter your name, get matched instantly, and start a warm conversation — no account needed." } },
    { "@type": "Question", "name": "Is it safe to meet people online on ChatMingle?", "acceptedAnswer": { "@type": "Answer", "text": "Very safe. ChatMingle uses AI companions, so you're chatting with a smart, friendly AI rather than unknown strangers. No personal information is required or shared." } },
    { "@type": "Question", "name": "Can I meet new friends on ChatMingle?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Many users come to ChatMingle just to have friendly conversations and feel connected. It's a great space to meet a new 'friend' anytime you need company." } },
  ],
});

const FAQS = [
  { q: "How can I meet new people online for free?", a: "ChatMingle is the easiest way to meet new people online for free. Just enter your name, get matched instantly, and start a warm conversation — no account needed." },
  { q: "Is it safe to meet people online on ChatMingle?", a: "Very safe. ChatMingle uses AI companions, so you're chatting with a smart, friendly AI rather than unknown strangers. No personal information is required or shared." },
  { q: "Can I meet new friends on ChatMingle?", a: "Absolutely. Many users come to ChatMingle just to have friendly conversations and feel connected. It's a great space to meet a new 'friend' anytime you need company." },
];

function MeetNewPeoplePage() {
  const navigate = useNavigate();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_SCHEMA }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">

          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Meet New People</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Meet New People</span> Online Free — Chat & Connect Instantly
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Feeling lonely or just want to <strong>meet new people online</strong>? ChatMingle connects you with a friendly companion in seconds — completely free, no account needed. Start a real, warm conversation right now.
          </p>

          <button
            onClick={() => navigate({ to: "/start" })}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Meet Someone New — Free →
          </button>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">Why Meeting New People Online Has Never Been Easier</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              In today's world, meeting new people online is completely normal. Whether you're in a new city, working from home, or just want to expand your social circle — online chat platforms like ChatMingle make it effortless to <strong>meet new people</strong> and have genuine conversations.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle removes all the usual friction. There's no profile to set up, no swiping, no awkward ice-breakers to figure out. You get matched with a warm, friendly companion who's genuinely interested in talking to you — and the conversation starts naturally.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Meet New Girls Online — Safely and for Free</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle is especially popular with people who want to <strong>meet new girls online</strong> in a safe, pressure-free environment. Unlike traditional social apps where you might get ignored, unmatched, or ghosted — ChatMingle guarantees a response every time. Your companion is always there, always ready.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              The AI behind ChatMingle is trained to have warm, authentic Indian girl conversations. She uses Hinglish naturally, asks thoughtful questions, and responds to your mood. Whether you want to laugh, vent, flirt, or just chat — she adapts to you.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">What to Talk About When You Meet New People Online</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["🎵", "Music & movies — share what you're listening to or watching"],
                ["🍕", "Food & places — favourite restaurants, dishes, travel dreams"],
                ["😂", "Funny stories — things that happened today, memes, jokes"],
                ["💭", "Thoughts & feelings — what's on your mind, how your day went"],
                ["🎮", "Hobbies & interests — games, fitness, books, art"],
                ["🌙", "Late night talks — deep conversations about life, goals, fears"],
              ].map(([e, t]) => (
                <div key={String(t)} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                  <span className="text-xl">{e}</span>
                  <span className="text-sm text-gray-600">{t}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Make New Connections Every Day</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              With ChatMingle, you can <strong>meet new people</strong> every single day. Each chat session starts fresh with a new companion name and personality. It keeps conversations interesting and gives you a new perspective every time. Some users chat once a week; others come back every day. Either way, there's always someone new to meet.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-3">
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

          <section className="mt-12 rounded-2xl bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-800">Related Pages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/free-chat-app" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Chat App →</Link>
              <Link to="/free-dating-app" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Dating App →</Link>
              <Link to="/chat-online" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Chat Online Free →</Link>
              <Link to="/chat-rooms" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Chat Rooms →</Link>
              <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India →</Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold">Meet Someone New Right Now</h2>
            <p className="mt-2 text-white/85">Free, instant, warm. Your next great conversation is one click away.</p>
            <button onClick={() => navigate({ to: "/start" })} className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:scale-105">
              Meet New People Free
            </button>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
