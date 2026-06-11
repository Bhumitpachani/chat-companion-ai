import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/tinder-alternative")({
  head: () => ({
    meta: [
      { title: "Tinder Alternative India Free — No Subscription, Chat Girls Instantly | ChatMingle" },
      { name: "description", content: "Best free Tinder alternative in India. No subscription, no matches to buy — just instant chat with girls. ChatMingle beats Tinder on price (free), speed (instant), and simplicity (no profile needed)." },
      { name: "keywords", content: "tinder alternative india, free tinder alternative, apps like tinder india free, tinder alternative no subscription, tinder like app free india, bumble alternative india, hinge alternative india, dating app without subscription india, tinder replacement india, best tinder alternative 2026, tinder free alternative, alternatives to tinder india, apps like tinder free, tinder substitute india, free dating app like tinder" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Free Tinder Alternative India — Instant Chat with Girls | ChatMingle" },
      { property: "og:description", content: "Skip the Tinder paywall. ChatMingle is India's free alternative — instant matches, no subscription, no profile photo needed. Chat with girls now." },
      { property: "og:url", content: "https://www.chatmingle.online/tinder-alternative" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free Tinder Alternative India — ChatMingle" },
      { name: "twitter:description", content: "No subscription. No swiping. Just instant chat with girls. India's best free Tinder alternative." },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.online/tinder-alternative" }],
  }),
  component: TinderAlternativePage,
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.chatmingle.online/" },
    { "@type": "ListItem", "position": 2, "name": "Tinder Alternative", "item": "https://www.chatmingle.online/tinder-alternative" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best free Tinder alternative in India?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is India's top free Tinder alternative. Unlike Tinder which requires a subscription for unlimited likes and premium features, ChatMingle is 100% free — instant chat, no profile photo, no subscription, no swipes." } },
    { "@type": "Question", "name": "Is there a Tinder alternative without subscription in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ChatMingle requires zero subscription or payment. Chat with girls instantly without buying gold, platinum, or any Tinder-style upgrade. Completely free forever." } },
    { "@type": "Question", "name": "Which apps are similar to Tinder but free?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle is the most popular free Tinder-like app in India. Other options include OkCupid and TrulyMadly, but ChatMingle stands out because it requires no signup, no profile, and chat starts in seconds." } },
    { "@type": "Question", "name": "Why is Tinder so expensive in India?", "acceptedAnswer": { "@type": "Answer", "text": "Tinder charges for Tinder Gold and Tinder Platinum features like unlimited likes, seeing who liked you, and Boosts. ChatMingle offers a completely free alternative where you can chat with girls instantly without any hidden charges." } },
    { "@type": "Question", "name": "Is ChatMingle safe compared to Tinder?", "acceptedAnswer": { "@type": "Answer", "text": "ChatMingle uses AI companions, so there are no strangers involved — making it safer than Tinder where you meet real unknown people. Your privacy is protected and you can end any chat anytime." } },
    { "@type": "Question", "name": "Can I use ChatMingle without creating an account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Unlike Tinder which requires phone number verification and profile setup, ChatMingle needs only a first name to start. No email, no phone, no profile photo. Literally chat in 5 seconds." } },
  ],
});

const FAQS = [
  { q: "What is the best free Tinder alternative in India?", a: "ChatMingle is India's top free Tinder alternative. Unlike Tinder which requires a subscription for unlimited likes and premium features, ChatMingle is 100% free — instant chat, no profile photo, no subscription, no swipes." },
  { q: "Is there a Tinder alternative without subscription in India?", a: "Yes. ChatMingle requires zero subscription or payment. Chat with girls instantly without buying gold, platinum, or any Tinder-style upgrade. Completely free forever." },
  { q: "Which apps are similar to Tinder but free?", a: "ChatMingle is the most popular free Tinder-like app in India. Other options include OkCupid and TrulyMadly, but ChatMingle stands out because it requires no signup, no profile, and chat starts in seconds." },
  { q: "Why is Tinder so expensive in India?", a: "Tinder charges for Tinder Gold and Tinder Platinum features like unlimited likes, seeing who liked you, and Boosts. ChatMingle offers a completely free alternative where you can chat with girls instantly without any hidden charges." },
  { q: "Is ChatMingle safe compared to Tinder?", a: "ChatMingle uses AI companions, so there are no strangers involved — making it safer than Tinder where you meet real unknown people. Your privacy is protected and you can end any chat anytime." },
  { q: "Can I use ChatMingle without creating an account?", a: "Yes! Unlike Tinder which requires phone number verification and profile setup, ChatMingle needs only a first name to start. No email, no phone, no profile photo. Literally chat in 5 seconds." },
];

const COMPARE = [
  { feature: "Price", tinder: "₹999–₹3,299/month", chatmingle: "100% Free" },
  { feature: "Signup required", tinder: "Yes (phone + photos)", chatmingle: "Just a name" },
  { feature: "Unlimited chat", tinder: "Paid plan only", chatmingle: "Always free" },
  { feature: "Profile photo needed", tinder: "Required", chatmingle: "Not needed" },
  { feature: "Instant start", tinder: "Setup takes 10+ min", chatmingle: "Ready in 5 seconds" },
  { feature: "Chat in Hinglish", tinder: "Depends on match", chatmingle: "Always Hinglish" },
  { feature: "Available 24/7", tinder: "Depends on matches", chatmingle: "Always online" },
  { feature: "No strangers risk", tinder: "Meeting real strangers", chatmingle: "AI companion, safe" },
];

function TinderAlternativePage() {
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
              <span className="text-gray-600">Tinder Alternative India</span>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-br from-slate-50 via-white to-pink-50 py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                No subscription. No swipes. 100% Free.
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                The Best{" "}
                <span className="text-gradient-brand">Free Tinder Alternative</span>
                {" "}in India
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
                Tired of Tinder's paywalls? ChatMingle lets you chat with girls instantly — no subscription, no profile photos, no swiping. Just enter your name and start chatting in 5 seconds.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate({ to: "/start" })}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Start Free Chat →
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">No account needed · No credit card · Instant start</p>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 md:py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                ChatMingle vs Tinder — Which Is Better?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-500">
                See why thousands of Indians switched from Tinder to ChatMingle.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-5 py-3 text-left font-bold text-gray-700">Feature</th>
                    <th className="px-5 py-3 text-center font-bold text-gray-500">Tinder</th>
                    <th className="px-5 py-3 text-center font-bold text-pink-600">ChatMingle ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-5 py-3 font-medium text-gray-700">{row.feature}</td>
                      <td className="px-5 py-3 text-center text-gray-400">{row.tinder}</td>
                      <td className="px-5 py-3 text-center font-semibold text-green-600">{row.chatmingle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why section */}
          <section className="bg-gray-50 py-14 md:py-20">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Indians Are Leaving Tinder for ChatMingle
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  { e: "💸", t: "Tinder charges ₹999–₹3,299/month", d: "ChatMingle is completely free. No hidden charges, no subscriptions, no \"boosted\" profiles." },
                  { e: "⚡", t: "Tinder makes you wait for matches", d: "ChatMingle connects you instantly. No swiping, no waiting days for a reply. Chat starts in seconds." },
                  { e: "📸", t: "Tinder requires profile photos", d: "ChatMingle needs only a name. No profile setup, no judging by appearance. Just real conversation." },
                  { e: "🔒", t: "Tinder exposes your real identity", d: "ChatMingle is completely anonymous. No phone number, no Facebook, no real photo needed." },
                  { e: "🇮🇳", t: "Tinder conversations can feel awkward", d: "ChatMingle companions speak natural Hinglish — the exact way Indian girls actually text their friends." },
                  { e: "🌙", t: "Tinder depends on who's online", d: "ChatMingle is available 24/7. Your companion is always online — 2 PM or 2 AM, she's there." },
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
              Tinder Alternative — FAQ
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
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Done with Tinder subscriptions?</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">Chat with girls for free on ChatMingle — no subscription, no swiping, instant start.</p>
              <button
                onClick={() => navigate({ to: "/start" })}
                className="mt-7 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-bold text-gray-900 shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Start Free Chat Now
              </button>
              <p className="mt-3 text-xs text-white/60">Just enter a name · No account · 100% free</p>
            </div>
          </section>

          {/* Internal links */}
          <section className="border-t border-gray-100 bg-gray-50 py-8">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Explore More</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link to="/free-dating-app" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Free Dating App India</Link>
                <Link to="/ai-girlfriend" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">AI Girlfriend India</Link>
                <Link to="/dating-in-india" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Dating in India</Link>
                <Link to="/chat-with-girls" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Chat with Girls Online</Link>
                <Link to="/omegle-alternative" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors">Omegle Alternative</Link>
              </div>
            </div>
          </section>

          {/* SEO text */}
          <section className="border-t border-gray-100 py-8">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <h2 className="text-base font-bold text-gray-700">Free Tinder Alternative India — ChatMingle</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                ChatMingle is the best <strong>free Tinder alternative in India</strong>. If you're looking for <strong>apps like Tinder without subscription</strong>, ChatMingle is your answer. Chat with girls instantly — no Tinder Gold, no Tinder Platinum, no credit card needed. Whether you're searching for a <strong>Bumble alternative</strong>, <strong>Hinge alternative</strong>, or simply a <strong>free dating app India</strong> that actually works, ChatMingle delivers warm, natural Hinglish conversations 24/7. No profile setup. No swiping. No judgment. Just chat.
              </p>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
