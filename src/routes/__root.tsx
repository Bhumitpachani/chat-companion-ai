import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ConsentGate } from "@/components/ConsentGate";

const SITE_URL = "https://www.chatmingle.online";
const OG_IMAGE = `${SITE_URL}/logo.png`;

const SCHEMA_ORG = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "ChatMingle",
      "description": "Free online chat app to talk with girls. Chat with Indian girls in Hinglish, English. Free dating chat, AI girlfriend, romantic chat companion — anytime.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_URL}/start`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      "name": "ChatMingle",
      "url": SITE_URL,
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "description": "Chat with girls free online. Free dating chat app for Indians. Talk to girls in Hinglish and English. AI girlfriend, romantic companion chat — no signup needed.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "50000",
        "bestRating": "5"
      }
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      "name": "ChatMingle",
      "url": SITE_URL,
      "logo": OG_IMAGE,
      "sameAs": []
    }
  ]
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again in a moment.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { title: "ChatMingle — Chat with Girls Free Online | Free Dating Chat App" },
      { name: "description", content: "ChatMingle is a free online chat app to talk with girls. Chat with Indian girls in Hinglish & English. Free dating chat, AI girlfriend companion, romantic chat — no signup needed. Start now!" },
      { name: "keywords", content: "chat with girl free, chat with girls online free, free chat app, dating chat app, chat with Indian girls, online chat with girls, AI girlfriend, virtual girlfriend, romantic chat app, free dating app India, talk to girls online free, girl chat online, flirt chat app, chat companion, Hinglish chat, Indian dating app, meet girls online, chat with random girls, free girl chat, online dating India, chat app India, girlfriend simulator, romantic AI chat, Omegle alternative, Omegle alternative India, best Omegle alternative 2026, sites like Omegle, Omegle replacement, Omegle India, random chat like Omegle, what happened to Omegle, Omegle shut down, Omegle closed, Omegle not working, Omegle alternative no signup, Omegle girls chat, Chatroulette alternative India, OmeTV alternative India, Omegle substitute India" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: "ChatMingle" },
      { name: "theme-color", content: "#ec4899" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "ChatMingle" },

      { property: "og:site_name", content: "ChatMingle" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "ChatMingle — Chat with Girls Free Online | Free Dating Chat App" },
      { property: "og:description", content: "Free online chat app to talk with girls. Chat with Indian girls in Hinglish & English. AI girlfriend, romantic companion, dating chat — no signup, 100% free." },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ChatMingle - Free Chat with Girls Online" },
      { property: "og:locale", content: "en_IN" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ChatMingle" },
      { name: "twitter:title", content: "ChatMingle — Chat with Girls Free Online" },
      { name: "twitter:description", content: "Free online chat app to talk with girls. AI girlfriend, dating chat, romantic companion in Hinglish & English. No signup needed." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: SCHEMA_ORG }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ConsentGate>
        <Outlet />
      </ConsentGate>
    </QueryClientProvider>
  );
}
