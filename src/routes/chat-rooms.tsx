import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/chat-rooms")({
  head: () => ({
    meta: [
      { title: "Free Chat Rooms India — Chat with Girls Online | ChatMingle" },
      { name: "description", content: "Join free chat rooms on ChatMingle. Chat with girls online in private, cozy chat rooms. No signup needed. India's best free online chat room experience — start now!" },
      { name: "keywords", content: "free chat rooms, chat rooms online free, free chat rooms India, online chat rooms, private chat room, chat room with girls, free chatting room, Indian chat rooms" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Free Chat Rooms India — ChatMingle" },
      { property: "og:description", content: "Free online chat rooms to talk with girls. No signup, private & cozy. Start now!" },
      { property: "og:url", content: "https://www.chatmingle.app/chat-rooms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.app/chat-rooms" }],
  }),
  component: ChatRoomsPage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.app/" },
    { "@type": "ListItem", "position": 2, "name": "Free Chat Rooms", "item": "https://www.chatmingle.app/chat-rooms" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Are there free chat rooms on ChatMingle?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Every chat on ChatMingle is a private, free chat room between you and your companion. No group chats, no noise — just one-on-one conversation." } },
    { "@type": "Question", "name": "How do free chat rooms work on ChatMingle?", "acceptedAnswer": { "@type": "Answer", "text": "Enter your name, get matched, and a private chat room opens instantly. You can talk freely, end the chat anytime, and start a fresh room whenever you want." } },
    { "@type": "Question", "name": "Are the chat rooms private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely private. Your chat room is only between you and your companion — no one else can see or join your conversation." } },
  ],
});

const FAQS = [
  { q: "Are there free chat rooms on ChatMingle?", a: "Yes! Every chat on ChatMingle is a private, free chat room between you and your companion. No group chats, no noise — just one-on-one conversation." },
  { q: "How do free chat rooms work on ChatMingle?", a: "Enter your name, get matched, and a private chat room opens instantly. You can talk freely, end the chat anytime, and start a fresh room whenever you want." },
  { q: "Are the chat rooms private?", a: "Yes, completely private. Your chat room is only between you and your companion — no one else can see or join your conversation." },
];

function ChatRoomsPage() {
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
            <span className="text-gray-700 font-medium">Free Chat Rooms</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Free Chat Rooms</span> in India — Private, Instant, No Signup
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Looking for <strong>free chat rooms</strong> where you can talk with girls privately? ChatMingle gives you a personal, cozy chat room every time — no group noise, no strangers lurking, just a warm one-on-one conversation that feels safe and real.
          </p>

          <button
            onClick={() => navigate({ to: "/start" })}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Enter Free Chat Room →
          </button>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">What Makes ChatMingle's Chat Rooms Different</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Traditional <strong>free chat rooms</strong> are chaotic — dozens of people talking at once, strangers sending inappropriate messages, spam bots everywhere. ChatMingle reimagines the chat room concept: every room is a private, one-on-one space shared only between you and your companion.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              When you enter a ChatMingle chat room, you get a dedicated space that feels intimate and focused. Your companion's full attention is on you. The conversation is warm, personal, and completely free from distractions. This is what a <strong>free chat room</strong> should feel like.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Free Chat Rooms for Every Mood</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { e: "😊", t: "Friendly Chat", d: "Just want to talk? Your companion is always warm, funny, and ready to listen." },
                { e: "💕", t: "Romantic Chat", d: "Feeling romantic? Chat in a cozy room with a flirty, playful companion." },
                { e: "🌙", t: "Late Night Chat", d: "Can't sleep? Your chat room is open 24/7 — someone's always there." },
                { e: "😤", t: "Vent & Share", d: "Had a rough day? Talk it out. Your companion listens without judgement." },
              ].map((m) => (
                <div key={m.t} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-3xl">{m.e}</div>
                  <div className="mt-2 font-bold text-gray-900">{m.t}</div>
                  <p className="mt-1 text-sm text-gray-500">{m.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Indian Chat Rooms — Hinglish Conversations That Feel Real</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle's <strong>Indian chat rooms</strong> are unique because conversations happen in natural Hinglish — the way real Indians text every day. Forget stiff English chatbots or awkward formal replies. Your companion uses everyday Hinglish expressions, responds with appropriate emojis, and keeps the energy casual and fun.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you're from Mumbai, Delhi, Bangalore, or anywhere in India — our chat rooms adapt to your conversational style. It's like texting with someone from your own city who just gets you.
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
              <Link to="/meet-new-people" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Meet New People →</Link>
              <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India →</Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold">Enter Your Free Chat Room Now</h2>
            <p className="mt-2 text-white/85">Private, instant, no signup. Your companion is waiting.</p>
            <button onClick={() => navigate({ to: "/start" })} className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:scale-105">
              Open Free Chat Room
            </button>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
