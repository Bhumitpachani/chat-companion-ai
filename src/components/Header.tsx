import { Link, useNavigate } from "@tanstack/react-router";
import logoAsset from "@/assets/chatmingle-logo.png.asset.json";

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="ChatMingle" className="h-9 w-auto" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>Home</Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>About</Link>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>Blog</Link>
          <Link to="/news" className="text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>News</Link>
        </nav>
        <button
          onClick={() => navigate({ to: "/start" })}
          className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-105 active:scale-95"
        >
          Start Chat
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ChatMingle. Made with 💖 for meaningful conversations.
      </div>
    </footer>
  );
}
