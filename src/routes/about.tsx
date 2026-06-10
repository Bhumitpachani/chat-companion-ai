import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ChatMingle — Free Chat with Girls App | AI Girlfriend Dating Chat India" },
      { name: "description", content: "Learn about ChatMingle — India's free chat app to talk with girls online. AI girlfriend experience, dating chat, romantic companion in Hinglish & English. Built for Indian users." },
      { name: "keywords", content: "about ChatMingle, free chat app India, chat with girls app, AI girlfriend India, dating chat app about, Indian chat app" },
      { property: "og:title", content: "About ChatMingle — Free Chat with Girls App" },
      { property: "og:description", content: "India's free chat app to talk with girls. AI girlfriend, dating chat in Hinglish. Learn more about ChatMingle." },
      { property: "og:url", content: "https://chatmingle.app/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-5xl font-extrabold">About <span className="text-gradient-brand">ChatMingle</span></h1>
        <p className="mt-5 text-lg text-muted-foreground">
          ChatMingle was built around one simple idea: everyone deserves a friendly chat at the end of a long day.
        </p>
        <div className="mt-10 space-y-6 text-foreground/90">
          <p>We connect you with warm, playful companions for casual conversations — about your day, your favourite music, food, dreams, or just random thoughts. No judgement, no pressure.</p>
          <p>Our mission is to make conversation feel effortless, joyful, and a little bit magical. Whether you have five minutes or an hour, ChatMingle is here whenever you want to mingle.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card-3d rounded-2xl glass p-6 shadow-soft">
            <div className="text-3xl">🎯</div>
            <h3 className="mt-3 text-lg font-bold">Our mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">Make every conversation feel warm, welcome, and a little bit special.</p>
          </div>
          <div className="card-3d rounded-2xl glass p-6 shadow-soft">
            <div className="text-3xl">💎</div>
            <h3 className="mt-3 text-lg font-bold">Our values</h3>
            <p className="mt-2 text-sm text-muted-foreground">Kindness, privacy, and respect — in every single chat.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
