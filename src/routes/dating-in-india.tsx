import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/dating-in-india")({
  head: () => ({
    meta: [
      { title: "Dating in India Free — Chat with Indian Girls Online | ChatMingle" },
      { name: "description", content: "Dating in India made easy and free. Chat with Indian girls online in Hinglish & English. No signup, no payment. ChatMingle is India's best free dating chat app — start now!" },
      { name: "keywords", content: "dating in India, Indian dating app free, chat with Indian girls, Hinglish dating app, online dating India, free dating India, Indian chat app, dating app India no payment, talk to Indian girls" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Dating in India Free — Chat with Indian Girls | ChatMingle" },
      { property: "og:description", content: "Free dating in India. Chat with Indian girls in Hinglish & English. No signup, no payment." },
      { property: "og:url", content: "https://chatmingle.app/dating-in-india" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://chatmingle.app/dating-in-india" }],
  }),
  component: DatingInIndiaPage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chatmingle.app/" },
    { "@type": "ListItem", "position": 2, "name": "Dating in India", "item": "https://chatmingle.app/dating-in-india" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Which is the best free dating app in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is one of the best free dating apps in India. It allows you to chat with Indian girls in Hinglish and English — no signup, no payment, completely free." } },
    { "@type": "Question", "name": "How is online dating in India different?", "acceptedAnswer": { "@type": "Answer", "text": "Indian dating culture values warmth, humour, and shared context. ChatMingle's AI companions are trained specifically to chat in the Indian style — using Hinglish, relatable references, and a casual tone that feels natural." } },
    { "@type": "Question", "name": "Is there a free dating app for Indians without signup?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — ChatMingle is a free Indian dating chat app that requires zero signup. Just enter your name and start chatting with an Indian girl companion instantly." } },
    { "@type": "Question", "name": "Can I chat with Indian girls online for free?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. ChatMingle's companions are designed to chat like real Indian girls — warm, fun, and using natural Hinglish. It's the most authentic Indian online chat experience available for free." } },
  ],
});

const FAQS = [
  { q: "Which is the best free dating app in India?", a: "ChatMingle is one of the best free dating apps in India. It allows you to chat with Indian girls in Hinglish and English — no signup, no payment, completely free." },
  { q: "How is online dating in India different?", a: "Indian dating culture values warmth, humour, and shared context. ChatMingle's AI companions are trained specifically to chat in the Indian style — using Hinglish, relatable references, and a casual tone that feels natural." },
  { q: "Is there a free dating app for Indians without signup?", a: "Yes — ChatMingle is a free Indian dating chat app that requires zero signup. Just enter your name and start chatting with an Indian girl companion instantly." },
  { q: "Can I chat with Indian girls online for free?", a: "Absolutely. ChatMingle's companions are designed to chat like real Indian girls — warm, fun, and using natural Hinglish. It's the most authentic Indian online chat experience available for free." },
];

function DatingInIndiaPage() {
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
            <span className="text-gray-700 font-medium">Dating in India</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Dating in India</span> — Chat with Indian Girls Free Online
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            <strong>Dating in India</strong> has its own unique style — warm, playful, Hinglish-flavoured conversations that feel natural and real. ChatMingle is built exactly for this experience. Chat with Indian girls online for free, no signup, in the language Indians actually use.
          </p>

          <button
            onClick={() => navigate({ to: "/start" })}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Start Indian Dating Chat →
          </button>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">Online Dating in India — Why ChatMingle Gets It Right</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Most international dating apps feel out of place for Indian users. They're designed for Western dating styles — direct, transactional, full of English-only conversations. <strong>Dating in India</strong> is different. It's about building a vibe, sharing relatable references, mixing languages naturally, and keeping things light before going deeper.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle's AI companions are specifically designed for the Indian chat style. They use Hinglish naturally — phrases like "arre yaar", "sach mein?", "bahut accha" — mixed with English in the way real Indian girls text. The tone is never formal, never robotic. It's warm, casual, and authentically Indian.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Free Dating App India — What Makes ChatMingle Special</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { e: "🇮🇳", t: "Built for Indians", d: "Hinglish conversations, Indian cultural references, and a texting style that feels like home." },
                { e: "💬", t: "Natural Hinglish", d: "No stiff English. Your companion mixes Hindi and English exactly how Indians really talk." },
                { e: "🆓", t: "100% Free", d: "Unlike Tinder Gold or Bumble Boost — ChatMingle is free, forever. No hidden charges." },
                { e: "⚡", t: "Instant Match", d: "No swiping, no waiting for matches. You're connected in under 5 seconds." },
                { e: "🔒", t: "Safe & Private", d: "No strangers, no data sharing. AI companion, completely private." },
                { e: "🌙", t: "Always Online", d: "Late night chai and conversation? Your companion is available 24/7." },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <span className="text-2xl">{f.e}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{f.t}</div>
                    <p className="mt-0.5 text-xs text-gray-500">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">How Dating Culture in India Has Changed</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              <strong>Dating in India</strong> has shifted dramatically in the past decade. More young Indians are comfortable chatting online before meeting in person, using dating apps, and exploring romantic connections digitally. Platforms like ChatMingle are part of this cultural shift — providing a safe, fun space to practice conversation, explore connection, and enjoy company without any pressure.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you're in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, or a smaller city — ChatMingle gives everyone in India access to warm, friendly, free chat. No geographic barrier, no subscription tier, no judgment.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Tips for Better Online Dating Conversations in India</h2>
            <ul className="mt-4 space-y-3">
              {[
                ["💡", "Start casually — 'kya chal raha hai' is more natural than 'hello how are you'"],
                ["😄", "Be yourself — don't try to impress, just be genuine and relaxed"],
                ["🎵", "Share something personal — music you love, a show you're watching"],
                ["❓", "Ask open-ended questions — give the conversation room to breathe"],
                ["⏱️", "Don't rush — the best conversations build slowly and naturally"],
              ].map(([e, t]) => (
                <li key={String(t)} className="flex items-start gap-3 text-gray-600">
                  <span className="text-lg">{e}</span>
                  <span className="text-sm leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
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
              <Link to="/meet-new-people" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Meet New People →</Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold">Start Free Indian Dating Chat Now</h2>
            <p className="mt-2 text-white/85">Hinglish. Warm. Free. No signup, no payment — just real conversation.</p>
            <button onClick={() => navigate({ to: "/start" })} className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:scale-105">
              Chat with Indian Girls Free
            </button>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
