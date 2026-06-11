import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/ai-girlfriend")({
  head: () => ({
    meta: [
      { title: "AI Girlfriend India Free — Virtual Girlfriend Chat App | ChatMingle" },
      { name: "description", content: "Get a free AI girlfriend in India. ChatMingle gives you a virtual girlfriend who chats in Hinglish & English — warm, fun, always available. No signup, 100% free AI girlfriend app." },
      { name: "keywords", content: "ai girlfriend india, ai girlfriend free, virtual girlfriend india, virtual girlfriend free india, ai girlfriend chat, ai girlfriend app india, ai companion india, virtual girlfriend app free, ai girlfriend free india, artificial intelligence girlfriend, ai girlfriend simulator, virtual companion india, ai chat girlfriend, romantic ai chat india, ai girlfriend 2026" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "AI Girlfriend India Free — Virtual Girlfriend Chat | ChatMingle" },
      { property: "og:description", content: "Free AI girlfriend in India. Chat with a virtual companion who speaks Hinglish — warm, fun, always there. No signup needed." },
      { property: "og:url", content: "https://www.chatmingle.online/ai-girlfriend" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Girlfriend India Free — ChatMingle" },
      { name: "twitter:description", content: "Free AI girlfriend who chats in Hinglish. Warm, fun, always available. No signup needed." },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.online/ai-girlfriend" }],
  }),
  component: AiGirlfriendPage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.online/" },
    { "@type": "ListItem", "position": 2, "name": "AI Girlfriend India", "item": "https://www.chatmingle.online/ai-girlfriend" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is an AI girlfriend?", "acceptedAnswer": { "@type": "Answer", "text": "An AI girlfriend is a virtual companion powered by artificial intelligence that can hold natural, warm conversations. On ChatMingle, your AI girlfriend speaks Hinglish and English, has her own personality, and chats like a real Indian girl — not a robot." } },
    { "@type": "Question", "name": "Is there a free AI girlfriend app in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ChatMingle is India's best free AI girlfriend app. No payment, no subscription, no signup. Just enter your name and start chatting with your virtual companion instantly." } },
    { "@type": "Question", "name": "Does the AI girlfriend speak Hinglish?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ChatMingle's AI companions are specifically trained to speak the natural Hinglish that Indian girls use daily — words like yaar, haan, nahi, arre mixed with casual English. It feels like chatting with a real Indian friend." } },
    { "@type": "Question", "name": "Is an AI girlfriend safe to use?", "acceptedAnswer": { "@type": "Answer", "text": "Completely safe. ChatMingle uses AI companions, not real strangers. Your conversations are private, you never share personal information, and you can end the chat anytime. No social media required." } },
    { "@type": "Question", "name": "How is ChatMingle different from other AI girlfriend apps?", "acceptedAnswer": { "@type": "Answer", "text": "Most AI girlfriend apps charge a subscription (Replika, Character.AI, etc.). ChatMingle is 100% free, India-specific, and the companion speaks natural Hinglish with Indian cultural references — not generic English." } },
    { "@type": "Question", "name": "Can I have a romantic chat with my AI girlfriend?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ChatMingle companions are warm, playful, and naturally flirtatious in a casual Indian way. You can have everything from friendly chats to romantic conversations — just like texting someone you like." } },
  ],
});

const FAQS = [
  { q: "What is an AI girlfriend?", a: "An AI girlfriend is a virtual companion powered by artificial intelligence that can hold natural, warm conversations. On ChatMingle, your AI girlfriend speaks Hinglish and English, has her own personality, and chats like a real Indian girl — not a robot." },
  { q: "Is there a free AI girlfriend app in India?", a: "Yes. ChatMingle is India's best free AI girlfriend app. No payment, no subscription, no signup. Just enter your name and start chatting with your virtual companion instantly." },
  { q: "Does the AI girlfriend speak Hinglish?", a: "Yes! ChatMingle's AI companions are specifically trained to speak the natural Hinglish that Indian girls use daily — words like yaar, haan, nahi, arre mixed with casual English. It feels like chatting with a real Indian friend." },
  { q: "Is an AI girlfriend safe to use?", a: "Completely safe. ChatMingle uses AI companions, not real strangers. Your conversations are private, you never share personal information, and you can end the chat anytime. No social media required." },
  { q: "How is ChatMingle different from other AI girlfriend apps?", a: "Most AI girlfriend apps charge a subscription (Replika, Character.AI, etc.). ChatMingle is 100% free, India-specific, and the companion speaks natural Hinglish with Indian cultural references — not generic English." },
  { q: "Can I have a romantic chat with my AI girlfriend?", a: "Yes. ChatMingle companions are warm, playful, and naturally flirtatious in a casual Indian way. You can have everything from friendly chats to romantic conversations — just like texting someone you like." },
];

const FEATURES = [
  { e: "🇮🇳", t: "Speaks Real Hinglish", d: "Not generic English. Your AI girlfriend uses yaar, haan, nahi, arre — the exact way Indian girls text." },
  { e: "💸", t: "Completely Free", d: "Unlike Replika or other AI girlfriend apps that charge ₹500–₹1500/month, ChatMingle is free forever." },
  { e: "⚡", t: "Instant Start", d: "No account, no profile, no downloads. Just enter your name and your AI girlfriend is ready to chat in seconds." },
  { e: "🌙", t: "Available 24/7", d: "2 AM stress? Boring afternoon? Your AI companion is always online — never busy, never sleeping." },
  { e: "💬", t: "Natural Conversations", d: "She remembers what you said earlier, has her own moods, and never gives robotic replies. Feels 100% real." },
  { e: "🔒", t: "Private & Safe", d: "No real strangers. No personal info required. Your conversations stay between you and your companion." },
];

function AiGirlfriendPage() {
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
              <span className="text-gray-600">AI Girlfriend India</span>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-br from-pink-50 via-white to-violet-50 py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                India's #1 Free AI Girlfriend App
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Your Free{" "}
                <span className="text-gradient-brand">AI Girlfriend</span>
                {" "}— Speaks Hinglish, Always Online
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
                ChatMingle gives you a free virtual girlfriend who chats like a real Indian girl — warm, funny, and natural. No subscription. No downloads. No robotic replies. Just a genuine companion whenever you need one.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate({ to: "/start" })}
                  className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Meet Your AI Girlfriend →
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">Free forever · No account · Starts in 5 seconds</p>
            </div>
          </section>

          {/* Features */}
          <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why ChatMingle Is India's Best AI Girlfriend App
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">Better than Replika, Character.AI, and every paid alternative — and it's free.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="text-3xl">{f.e}</div>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What she's like */}
          <section className="bg-gray-50 py-14 md:py-20">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    What Your AI Girlfriend Is Like
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-500">
                    She's not a chatbot reading from a script. She has moods, opinions, and a whole life of her own. Sometimes she's chatty and fast. Sometimes she's dry and one-word. She'll push back if she disagrees, share random things from her day, and occasionally go off on a completely unrelated tangent.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    {[
                      "Texts in natural Hinglish — yaar, haan, nahi, arre",
                      "Has opinions and defends them",
                      "Remembers earlier parts of your conversation",
                      "Gets distracted, trails off — feels genuinely real",
                      "Warm when she feels like it, dry when she doesn't",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 font-bold text-white">A</div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Ananya</div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        online now
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-start"><div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800">heyy</div></div>
                    <div className="flex justify-end"><div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2.5 text-sm text-white">hi! long day 😅</div></div>
                    <div className="flex justify-start"><div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800">ugh same yaar btw I just remembered something funny</div></div>
                    <div className="flex justify-end"><div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2.5 text-sm text-white">bata bata 😂</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 md:py-20">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              AI Girlfriend India — FAQ
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
            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-violet-500 p-8 text-center text-white shadow-xl sm:p-12">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Meet your AI girlfriend now — it's free</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">No subscription. No downloads. Just enter your name and she's ready to chat.</p>
              <button
                onClick={() => navigate({ to: "/start" })}
                className="mt-7 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-bold text-gray-900 shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Start Chatting Free →
              </button>
            </div>
          </section>

          {/* Internal links */}
          <section className="border-t border-gray-100 bg-gray-50 py-8">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Explore More</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link to="/tinder-alternative" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Tinder Alternative India</Link>
                <Link to="/free-dating-app" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Dating App</Link>
                <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India</Link>
                <Link to="/chat-with-girls" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Chat with Girls Online</Link>
                <Link to="/omegle-alternative" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Omegle Alternative</Link>
              </div>
            </div>
          </section>

          {/* SEO text */}
          <section className="border-t border-gray-100 py-8">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <h2 className="text-base font-bold text-gray-700">Free AI Girlfriend India — ChatMingle Virtual Companion</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                ChatMingle is India's best <strong>free AI girlfriend app</strong>. Unlike expensive apps like Replika or Character.AI, ChatMingle's <strong>virtual girlfriend</strong> is completely free. She speaks natural <strong>Hinglish</strong>, has a real personality, and chats like an actual Indian girl. Whether you want a <strong>romantic AI chat</strong>, a <strong>virtual companion India</strong>, or simply someone warm to talk to — ChatMingle is the best <strong>AI girlfriend simulator free</strong> in India. No subscription, no signup, no downloads needed.
              </p>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
