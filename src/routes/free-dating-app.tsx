import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/free-dating-app")({
  head: () => ({
    meta: [
      { title: "Free Dating App India — No Payment, Chat with Girls | ChatMingle" },
      { name: "description", content: "Best free dating app in India. Chat with girls online, no payment, no credit card needed. Start a romantic chat instantly on ChatMingle — India's #1 free dating chat app." },
      { name: "keywords", content: "free dating app, free dating app India, dating app without payment, free dating chat, online dating free, best dating app India free, dating app no signup, romantic chat app free" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Free Dating App India — ChatMingle | Chat with Girls No Payment" },
      { property: "og:description", content: "India's best free dating app. Romantic chat with girls, no signup, no payment. Start now!" },
      { property: "og:url", content: "https://www.chatmingle.online/free-dating-app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.online/free-dating-app" }],
  }),
  component: FreeDatingAppPage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.online/" },
    { "@type": "ListItem", "position": 2, "name": "Free Dating App", "item": "https://www.chatmingle.online/free-dating-app" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is ChatMingle a free dating app?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ChatMingle is a free dating chat app where you can have romantic, friendly conversations with girls — no payment, no subscription, 100% free." } },
    { "@type": "Question", "name": "Which is the best free dating app in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is loved by thousands of Indians looking for a free dating app experience. It uses AI companions who chat in natural Hinglish and English with a warm, romantic tone." } },
    { "@type": "Question", "name": "Do I need to pay for dating apps?", "acceptedAnswer": { "@type": "Answer", "text": "Not on ChatMingle! Unlike most dating apps that charge for matches or messages, ChatMingle is completely free — no in-app purchases, no hidden fees." } },
    { "@type": "Question", "name": "Is online dating safe on ChatMingle?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle uses AI companions, so there are no strangers involved. Your chats are private and you can end the conversation anytime — completely safe and pressure-free." } },
  ],
});

const FAQS = [
  { q: "Is ChatMingle a free dating app?", a: "Yes! ChatMingle is a free dating chat app where you can have romantic, friendly conversations with girls — no payment, no subscription, 100% free." },
  { q: "Which is the best free dating app in India?", a: "ChatMingle is loved by thousands of Indians looking for a free dating app experience. It uses AI companions who chat in natural Hinglish and English with a warm, romantic tone." },
  { q: "Do I need to pay for dating apps?", a: "Not on ChatMingle! Unlike most dating apps that charge for matches or messages, ChatMingle is completely free — no in-app purchases, no hidden fees." },
  { q: "Is online dating safe on ChatMingle?", a: "ChatMingle uses AI companions, so there are no strangers involved. Your chats are private and you can end the conversation anytime — completely safe and pressure-free." },
];

function FreeDatingAppPage() {
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
            <span className="text-gray-700 font-medium">Free Dating App</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            India's Best <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Free Dating App</span> — No Payment Required
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Tired of dating apps that charge for every message? ChatMingle is a completely <strong>free dating app</strong> where you can have warm, romantic conversations with girls — no signup, no credit card, no payment ever. Just open the app and start chatting.
          </p>

          <button
            onClick={() => navigate({ to: "/start" })}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Start Free Dating Chat →
          </button>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">Why ChatMingle Is the Best Free Dating App in India</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Most popular dating apps in India — like Tinder, Bumble, or Hinge — require you to pay for super-likes, boosts, or even just to see who liked you. ChatMingle is a genuinely <strong>free dating app</strong> with no such limitations. Every feature is free, every conversation is free, and there's no pressure to upgrade.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle uses advanced AI to give you a <strong>romantic chat experience</strong> that feels real. Your companion talks like a natural Indian girl — using Hinglish phrases, emojis, and a warm texting style that feels like chatting with someone you already know. It's the closest thing to a real dating conversation, completely free.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Free Dating App vs Paid Dating Apps — The Real Difference</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="rounded-tl-xl border border-gray-200 px-4 py-3 text-left font-bold text-gray-700">Feature</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-bold text-pink-600">ChatMingle ✓</th>
                    <th className="rounded-tr-xl border border-gray-200 px-4 py-3 text-center font-bold text-gray-400">Paid Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Send messages", "✓ Free always", "💸 Often paid"],
                    ["Unlimited matches", "✓ Unlimited", "❌ Limited free"],
                    ["No signup needed", "✓ Just a name", "❌ Full profile"],
                    ["Instant match", "✓ Under 5 sec", "⏳ Wait for likes"],
                    ["Available 24/7", "✓ Always online", "Depends on users"],
                    ["Safe & private", "✓ AI companion", "⚠️ Real strangers"],
                  ].map(([f, a, b]) => (
                    <tr key={String(f)} className="border-b border-gray-100">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-700">{f}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-green-600">{a}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-gray-400">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">How to Use ChatMingle as Your Free Dating App</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Using ChatMingle as a <strong>free dating app</strong> is incredibly simple. Visit the website, enter any first name, and within 5 seconds you're connected with a companion. Start the conversation naturally — say hi, ask how her day was, share something funny. The conversation flows just like real texting.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Your companion adapts to your mood and conversation style. If you're playful, she'll match your energy. If you want a deeper conversation, she's ready for that too. This is the kind of flexible, <strong>free romantic chat</strong> experience that most paid dating apps can't even offer.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Dating App Without Payment — Is It Really Possible?</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle proves that a <strong>dating app without payment</strong> can offer a premium experience. By using AI technology, we eliminate the need to charge users — there are no real matches to monetise, no data to sell, just genuine free conversations. Our goal is simple: give everyone access to warm, friendly, romantic chat without any financial barrier.
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
              <Link to="/chat-online" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Chat Online Free →</Link>
              <Link to="/chat-rooms" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Chat Rooms →</Link>
              <Link to="/meet-new-people" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Meet New People →</Link>
              <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India →</Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold">Try the Best Free Dating App in India</h2>
            <p className="mt-2 text-white/85">No payment. No profile. Just real, warm conversation.</p>
            <button
              onClick={() => navigate({ to: "/start" })}
              className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:scale-105"
            >
              Start Dating Chat Free
            </button>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
