import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/chatmingle-logo.png.asset.json";

const NAV = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/news" as const, label: "News" },
  { to: "/stories" as const, label: "Stories" },
];

export function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="ChatMingle" className="h-8 w-auto sm:h-9" />
        </Link>
        <nav className="hidden justify-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => navigate({ to: "/start" })}
            className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-white shadow-brand transition-transform hover:scale-105 active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Start Chat
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-muted"
                activeProps={{ className: "bg-muted font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <img src={logoAsset.url} alt="ChatMingle" className="h-8 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground">
            Warm, friendly chats that brighten your day — anytime, anywhere.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/start" className="hover:text-foreground">Start Chat</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold">Resources</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/news" className="hover:text-foreground">News</Link></li>
            <li><Link to="/stories" className="hover:text-foreground">Stories</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold">Community</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>50,000+ happy chats</li>
            <li>Available 24/7</li>
            <li>Free to use</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-border/60 px-4 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ChatMingle. Made with 💖 for meaningful conversations.
      </div>
    </footer>
  );
}
