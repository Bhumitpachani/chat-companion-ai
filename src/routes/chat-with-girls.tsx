import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/chat-with-girls")({
  head: () => ({
    meta: [
      { title: "Chat with Girls Online Free India — Instant Girl Chat No Signup | ChatMingle" },
      { name: "description", content: "Chat with girls online free in India — no signup, no payment. ChatMingle connects you instantly with a friendly Indian girl who chats in Hinglish & English. Start girl chat now!" },
      { name: "keywords", content: "chat with girls online free, chat with girls free, chat with indian girls online free, talk to girls online free, free girl chat india, online chat with girls india, chat with girls no signup, chat with random girls india, girl chat online free, indian girls chat online, free chat with girls, talk with girls online, chat girls free india, girl chat free no registration, online girl chat india" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Chat with Girls Online Free India — Instant, No Signup | ChatMingle" },
      { property: "og:description", content: "Chat with Indian girls free online. Hinglish & English conversations, no signup, instant start. India's best free girl chat app." },
      { property: "og:url", content: "https://www.chatmingle.online/chat-with-girls" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chat with Girls Online Free India — ChatMingle" },
      { name: "twitter:description", content: "Chat with Indian girls free. Hinglish conversations, no signup, instant. Start now!" },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.online/chat-with-girls" }],
  }),
  component: ChatWithGirlsPage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.online/" },
    { "@type": "ListItem", "position": 2, "name": "Chat with Girls Online Free", "item": "https://www.chatmingle.online/chat-with-girls" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How can I chat with girls online for free in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is the easiest way to chat with girls online free in India. Just go to ChatMingle, enter your name, and you're instantly connected with a friendly Indian girl companion. No signup, no payment, no app download needed." } },
    { "@type": "Question", "name": "Is there a free girl chat app in India without registration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ChatMingle lets you chat with girls without registration. No phone number, no email, no profile photo — just enter a first name and start chatting instantly. It's 100% free." } },
    { "@type": "Question", "name": "Can I chat with Indian girls in Hinglish?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. ChatMingle companions speak natural Hinglish — the casual Hindi-English mix that most Indian girls use every day. No formal or robotic replies. Real, warm, fun conversations." } },
    { "@type": "Question", "name": "Is ChatMingle safe for chatting with girls?", "acceptedAnswer": { "@type": "Answer", "text": "Very safe. ChatMingle uses AI companions — so there are no real strangers. Your conversation is private, no personal info is required, and you can end the chat anytime with no consequences." } },
    { "@type": "Question", "name": "What is the best app to talk to girls online free in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is rated the best app to talk to girls online free in India. It features AI companions who chat in natural Hinglish, are available 24/7, and require zero payment or registration." } },
  ],
});

const FAQS = [
  { q: "How can I chat with girls online for free in India?", a: "ChatMingle is the easiest way to chat with girls online free in India. Just go to ChatMingle, enter your name, and you're instantly connected with a friendly Indian girl companion. No signup, no payment, no app download needed." },
  { q: "Is there a free girl chat app in India without registration?", a: "Yes! ChatMingle lets you chat with girls without registration. No phone number, no email, no profile photo — just enter a first name and start chatting instantly. It's 100% free." },
  { q: "Can I chat with Indian girls in Hinglish?", a: "Absolutely. ChatMingle companions speak natural Hinglish — the casual Hindi-English mix that most Indian girls use every day. No formal or robotic replies. Real, warm, fun conversations." },
  { q: "Is ChatMingle safe for chatting with girls?", a: "Very safe. ChatMingle uses AI companions — so there are no real strangers. Your conversation is private, no personal info is required, and you can end the chat anytime with no consequences." },
  { q: "What is the best app to talk to girls online free in India?", a: "ChatMingle is rated the best app to talk to girls online free in India. It features AI companions who chat in natural Hinglish, are available 24/7, and require zero payment or registration." },
];

function ChatWithGirlsPage() {
  const navigate = useNavigate();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_SCHEMA }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>

          {/* Breadcrumb */}
          <div className="border-b border-gray-100 bg-gray-50 py-2 text-xs text-gray-400">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <Link to="/" className="hover:text-pink-500">Home</Link>
              <span className="mx-1">/</span>
              <span className="text-gray-600">Chat with Girls Online Free</span>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-br from-slate-50 via-white to-pink-50 py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                Free · Instant · No Signup
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-gradient-brand">Chat with Girls</span>
                {" "}Online Free in India
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
                ChatMingle connects you instantly with a friendly Indian girl who chats in natural Hinglish and English. No registration, no payment, no waiting. Just real, warm conversations — any time of day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate({ to: "/start" })}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Chat with a Girl Now →
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">No account · No payment · Starts instantly</p>
            </div>
          </section>

          {/* How it works */}
          <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 md:py-20">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How to Chat with Girls Free on ChatMingle
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { n: "01", t: "Enter your name", d: "Just a first name. No email, no phone, no profile photo. Takes 2 seconds." },
                { n: "02", t: "Get matched instantly", d: "You're connected with a friendly Indian girl companion in under 5 seconds." },
                { n: "03", t: "Start chatting free", d: "Talk about anything — your day, music, life. She replies in natural Hinglish." },
              ].map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-5xl font-extrabold text-gradient-brand opacity-70">{s.n}</div>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why section */}
          <section className="bg-gray-50 py-14 md:py-20">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why ChatMingle Is the Best Girl Chat App in India
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  { e: "🇮🇳", t: "Real Hinglish Conversations", d: "Your companion speaks the way Indian girls actually text — yaar, haan, nahi, arre. Not formal English. Not robotic." },
                  { e: "⚡", t: "Instant Connection", d: "No waiting for matches. No swiping. The moment you enter your name, a girl is ready to chat." },
                  { e: "💸", t: "100% Free Girl Chat", d: "Other apps charge for messaging or premium features. ChatMingle is free — every feature, every chat, forever." },
                  { e: "🔒", t: "No Registration Needed", d: "No phone number. No email. No social media login. Just a name and you're chatting." },
                  { e: "🌙", t: "Available Any Time", d: "2 AM or 2 PM — your companion is always online. No 'seen' without a reply. Always responsive." },
                  { e: "💬", t: "Natural, Human-like Chat", d: "She has moods, opinions, and her own personality. Conversations feel real — not scripted." },
                ].map((item) => (
                  <div key={item.t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="text-2xl">{item.e}</div>
                    <h3 className="mt-3 text-sm font-bold text-gray-900">{item.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 md:py-20">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Chat with Girls Free — FAQ
            </h2>
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

          {/* CTA */}
          <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white shadow-xl sm:p-12">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Start chatting with girls free — right now</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">India's best free girl chat. No account. No payment. Instant start.</p>
              <button
                onClick={() => navigate({ to: "/start" })}
                className="mt-7 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-bold text-gray-900 shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Chat with a Girl Free →
              </button>
            </div>
          </section>

          {/* Internal links */}
          <section className="border-t border-gray-100 bg-gray-50 py-8">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Explore More</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link to="/tinder-alternative" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Tinder Alternative India</Link>
                <Link to="/ai-girlfriend" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">AI Girlfriend India</Link>
                <Link to="/free-dating-app" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Dating App</Link>
                <Link to="/chat-online" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Chat Online Free</Link>
                <Link to="/omegle-alternative" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Omegle Alternative</Link>
              </div>
            </div>
          </section>

          {/* SEO text */}
          <section className="border-t border-gray-100 py-8">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <h2 className="text-base font-bold text-gray-700">Chat with Girls Online Free India — ChatMingle</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                ChatMingle is India's #1 app to <strong>chat with girls online free</strong>. Whether you want to <strong>talk to girls online free</strong>, find a <strong>free girl chat no registration</strong> platform, or simply <strong>chat with Indian girls</strong> in natural Hinglish — ChatMingle is the answer. Completely free, instant start, no account required. The best <strong>online chat with girls India</strong> platform available in 2026.
              </p>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
