import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/chat-online")({
  head: () => ({
    meta: [
      { title: "Chat Online Free — Talk to Girls Online Instantly | ChatMingle" },
      { name: "description", content: "Chat online free with girls instantly on ChatMingle. No signup needed. Talk to girls online in Hinglish & English. Free online chat, start now!" },
      { name: "keywords", content: "chat online free, chat online with girls, talk to girls online free, online chat no signup, free online chat India, chat with strangers online, random chat online, chat online instantly" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Chat Online Free — Talk to Girls Online | ChatMingle" },
      { property: "og:description", content: "Free online chat with girls. No signup, instant match. Talk online now!" },
      { property: "og:url", content: "https://www.chatmingle.online/chat-online" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.online/chat-online" }],
  }),
  component: ChatOnlinePage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.online/" },
    { "@type": "ListItem", "position": 2, "name": "Chat Online Free", "item": "https://www.chatmingle.online/chat-online" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I chat online for free without signing up?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ChatMingle lets you chat online for free with zero signup. Just enter a name and start chatting instantly with a friendly companion." } },
    { "@type": "Question", "name": "How do I talk to girls online for free?", "acceptedAnswer": { "@type": "Answer", "text": "Visit ChatMingle, type your name, and you're matched with a girl companion in seconds. Talk about anything — no awkward openers needed." } },
    { "@type": "Question", "name": "Is online chatting on ChatMingle safe?", "acceptedAnswer": { "@type": "Answer", "text": "Completely safe. ChatMingle uses AI companions — no real strangers, no personal data shared, and you can end the chat anytime with one click." } },
    { "@type": "Question", "name": "Which is the best site to chat online free in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is one of the best sites to chat online free in India, supporting Hinglish conversations, instant matching, and no signup required." } },
  ],
});

const FAQS = [
  { q: "Can I chat online for free without signing up?", a: "Yes! ChatMingle lets you chat online for free with zero signup. Just enter a name and start chatting instantly with a friendly companion." },
  { q: "How do I talk to girls online for free?", a: "Visit ChatMingle, type your name, and you're matched with a girl companion in seconds. Talk about anything — no awkward openers needed." },
  { q: "Is online chatting on ChatMingle safe?", a: "Completely safe. ChatMingle uses AI companions — no real strangers, no personal data shared, and you can end the chat anytime with one click." },
  { q: "Which is the best site to chat online free in India?", a: "ChatMingle is one of the best sites to chat online free in India, supporting Hinglish conversations, instant matching, and no signup required." },
];

function ChatOnlinePage() {
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
            <span className="text-gray-700 font-medium">Chat Online Free</span>
          </nav>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Chat Online Free</span> — Talk to Girls Online Instantly
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Want to <strong>chat online free</strong> with a friendly girl? ChatMingle makes it instant, easy, and completely free. No signup form, no email, no app download — just open the website, enter a name, and start talking.
          </p>

          <button
            onClick={() => navigate({ to: "/start" })}
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Chat Online Now — Free →
          </button>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">Chat Online Free — No Signup, No Waiting</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Most platforms that claim to offer <strong>free online chat</strong> either bombard you with ads, require lengthy registration, or reveal hidden charges after a few messages. ChatMingle is designed from the ground up to be genuinely free — from the first chat to the hundredth.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              When you want to <strong>talk to girls online free</strong>, you shouldn't have to spend 10 minutes filling out a profile. ChatMingle respects your time — enter a first name and you're matched in under 5 seconds. The conversation starts immediately in a warm, natural tone.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Why Millions Prefer Online Chat Over Social Media</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Social media is noisy, performative, and full of people you already know. <strong>Online chat</strong> is different — it's a dedicated one-on-one space where you can be yourself, talk freely, and have real conversations without judgement. ChatMingle creates exactly this kind of space.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you want to talk about your day, vent about work, discuss music or movies, or just pass time with friendly conversation — chatting online on ChatMingle gives you a comfortable, private space to do it all.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Chat Online in Hinglish — The Way Indians Really Talk</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              One thing that makes ChatMingle unique among <strong>free online chat</strong> sites is the language. Most chat apps default to formal English, which feels robotic and stiff for Indian users. ChatMingle's companions speak Hinglish — the natural mix of Hindi and English that Indians use in everyday texting.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Phrases like "kya ho raha hai", "yaar seriously", "acha bata", come naturally. The tone is warm, the replies are short and punchy, and the whole experience feels like chatting with a real friend rather than a bot.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Is Chatting Online Safe on ChatMingle?</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Safety is a top concern for anyone looking to <strong>chat online</strong> with strangers. ChatMingle solves this differently — your companion is an AI, not a random stranger. This means there's no risk of being scammed, catfished, or harassed. Your conversations are private, never stored permanently, and you can end the chat with a single click.
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
              <Link to="/chat-rooms" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Chat Rooms →</Link>
              <Link to="/meet-new-people" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Meet New People →</Link>
              <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India →</Link>
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-gradient-to-r from-blue-500 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold">Start Free Online Chat Now</h2>
            <p className="mt-2 text-white/85">No signup. No waiting. Talk to a girl online in seconds.</p>
            <button onClick={() => navigate({ to: "/start" })} className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg transition-all hover:scale-105">
              Chat Online Free
            </button>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
