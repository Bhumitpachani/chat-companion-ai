import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/free-chat-app")({
  head: () => ({
    meta: [
      { title: "Free Chat App — Chat with Girls Online Free | ChatMingle" },
      { name: "description", content: "Looking for a free chat app? ChatMingle lets you chat with girls online for free. No signup, no payment, instant match. Start your free chat now!" },
      { name: "keywords", content: "free chat app, free chat app online, best free chat app India, chat app free, free chat with girls, free chatting app, online chat free, chat app no signup" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Free Chat App — Chat with Girls Online Free | ChatMingle" },
      { property: "og:description", content: "ChatMingle is the best free chat app to talk with girls online. No signup, instant match, 100% free." },
      { property: "og:url", content: "https://chatmingle.app/free-chat-app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free Chat App — ChatMingle" },
      { name: "twitter:description", content: "Best free chat app to talk with girls. No signup needed." },
    ],
    links: [
      { rel: "canonical", href: "https://chatmingle.app/free-chat-app" },
    ],
  }),
  component: FreeChatAppPage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chatmingle.app/" },
    { "@type": "ListItem", "position": 2, "name": "Free Chat App", "item": "https://chatmingle.app/free-chat-app" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is ChatMingle really a free chat app?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ChatMingle is 100% free. No credit card, no signup, no payment ever. Just enter your name and start chatting instantly." } },
    { "@type": "Question", "name": "How do I start chatting on a free chat app?", "acceptedAnswer": { "@type": "Answer", "text": "Just visit ChatMingle, enter your first name, and you'll be matched with a friendly companion in seconds. No account needed." } },
    { "@type": "Question", "name": "Which is the best free chat app in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is one of the best free chat apps for Indians. It supports Hinglish and English, feels natural, and matches you instantly — no signup needed." } },
    { "@type": "Question", "name": "Can I chat with girls for free on ChatMingle?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ChatMingle is specifically designed so you can chat with girls for free online, anytime, with no restrictions or payments." } },
  ],
});

const FAQS = [
  { q: "Is ChatMingle really a free chat app?", a: "Yes, ChatMingle is 100% free. No credit card, no signup, no payment ever. Just enter your name and start chatting instantly." },
  { q: "How do I start chatting on a free chat app?", a: "Just visit ChatMingle, enter your first name, and you'll be matched with a friendly companion in seconds. No account needed." },
  { q: "Which is the best free chat app in India?", a: "ChatMingle is one of the best free chat apps for Indians. It supports Hinglish and English, feels natural, and matches you instantly — no signup needed." },
  { q: "Can I chat with girls for free on ChatMingle?", a: "Yes! ChatMingle is specifically designed so you can chat with girls for free online, anytime, with no restrictions or payments." },
];

function FreeChatAppPage() {
  const navigate = useNavigate();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: BREADCRUMB_SCHEMA }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Free Chat App</span>
          </nav>

          {/* H1 */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            The Best <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Free Chat App</span> to Talk with Girls Online
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            ChatMingle is India's most popular <strong>free chat app</strong> where you can talk with girls online instantly — no signup, no payment, no restrictions. Just open the app, enter your name, and start a warm, real conversation in seconds.
          </p>

          <button
            onClick={() => navigate({ to: "/start" })}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Start Free Chat Now →
          </button>

          {/* Section 1 */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">Why ChatMingle Is the #1 Free Chat App in India</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Most chat apps claim to be free but hide features behind paywalls or require lengthy signups. ChatMingle is different. It is a truly <strong>free chat app</strong> — every feature, every conversation, every match is completely free. There are no premium tiers, no credits to buy, and no ads asking you to upgrade.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you want to chat during your lunch break, wind down after a long day, or simply talk to someone friendly — ChatMingle is ready whenever you are. Our AI companions are available <strong>24 hours a day, 7 days a week</strong>, so you never have to wait for someone to reply.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">How Our Free Chat App Works</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { n: "01", t: "Enter your name", d: "Just type a first name — no email, no phone, no signup form." },
                { n: "02", t: "Get matched instantly", d: "ChatMingle finds a friendly companion for you in under 5 seconds." },
                { n: "03", t: "Start chatting free", d: "Talk about anything — music, your day, life — naturally and casually." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-3xl font-extrabold text-pink-400">{s.n}</div>
                  <div className="mt-2 font-bold text-gray-900">{s.t}</div>
                  <p className="mt-1 text-sm text-gray-500">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Free Chat App Features That Make ChatMingle Special</h2>
            <ul className="mt-4 space-y-3">
              {[
                ["💬", "Natural Hinglish & English conversations — just like texting a real friend"],
                ["⚡", "Instant match in under 5 seconds — no waiting, no queue"],
                ["🔒", "Private chats — your conversations are never stored or shared"],
                ["📱", "Works on all devices — mobile, tablet, desktop, no app download needed"],
                ["🌙", "Available 24/7 — chat at 2am or 2pm, always someone ready"],
                ["🆓", "100% free forever — no hidden fees, no premium plans"],
              ].map(([e, t]) => (
                <li key={String(t)} className="flex items-start gap-3 text-gray-600">
                  <span className="text-xl">{e}</span>
                  <span className="text-sm leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Free Chat App vs Paid Chat Apps — Why Free Wins</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Paid chat apps charge monthly fees, lock features behind subscriptions, and bombard you with upgrade prompts. A truly <strong>free chat app</strong> like ChatMingle removes all those barriers. You get the full experience — smart conversations, warm companions, instant matching — without spending a single rupee.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our AI technology powers natural, flowing conversations that feel authentic. Your companion remembers context within the chat, asks thoughtful follow-up questions, and responds in a warm, casual style that mirrors how real people text in India — mixing Hinglish phrases naturally, using emojis appropriately, and keeping things light and fun.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Who Uses ChatMingle's Free Chat App?</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              ChatMingle is loved by students, working professionals, and anyone who wants friendly conversation without the awkwardness of real dating apps. If you're feeling lonely, bored, or just want someone to talk to after work — our <strong>free chat app</strong> is the perfect companion. Over 50,000 chats have been started on ChatMingle, with users rating it 4.8 out of 5 stars.
            </p>
          </section>

          {/* FAQ */}
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

          {/* Internal links */}
          <section className="mt-12 rounded-2xl bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-800">Explore More on ChatMingle</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/free-dating-app" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Dating App →</Link>
              <Link to="/chat-online" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Chat Online Free →</Link>
              <Link to="/chat-rooms" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Chat Rooms →</Link>
              <Link to="/meet-new-people" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Meet New People →</Link>
              <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India →</Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold">Ready to Try India's Best Free Chat App?</h2>
            <p className="mt-2 text-white/85">No signup. No payment. Just open, chat, and enjoy.</p>
            <button
              onClick={() => navigate({ to: "/start" })}
              className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:scale-105"
            >
              Start Free Chat Now
            </button>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
