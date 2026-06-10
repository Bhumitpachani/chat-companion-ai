import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const logoAsset = { url: "/logo.png" };

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "pt-3 pb-1 px-4" : ""}`}>
      {/* Capsule wrapper — grows to full-width at top, shrinks to floating pill on scroll */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          scrolled
            ? "mx-auto max-w-3xl rounded-full border border-white/50 shadow-xl backdrop-blur-2xl bg-white/75"
            : "w-full border-b border-white/30 backdrop-blur-xl bg-white/60"
        }`}
      >
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 transition-all duration-300 ${
            scrolled ? "px-4 py-2" : "mx-auto max-w-6xl px-4 py-3"
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
            <img
              src={logoAsset.url}
              alt="ChatMingle"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-7" : "h-8 sm:h-9"}`}
            />
          </Link>

          <nav className="hidden justify-center gap-5 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                activeProps={{ className: "text-gray-900 font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() => navigate({ to: "/start" })}
              className={`rounded-full bg-gradient-to-r from-blue-500 to-pink-500 font-semibold text-white shadow-md transition-all hover:scale-105 active:scale-95 hover:shadow-pink-200 ${
                scrolled ? "px-4 py-1.5 text-xs" : "px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
              }`}
            >
              Start Chat
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/80 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile nav — only show when not scrolled-capsule */}
        {open && !scrolled && (
          <div className="border-t border-white/30 md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-gray-600 hover:bg-white/60"
                  activeProps={{ className: "bg-white/60 font-semibold text-gray-900" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <img src={logoAsset.url} alt="ChatMingle" className="h-8 w-auto" />
          <p className="mt-3 text-sm text-gray-500">
            Warm, friendly chats that brighten your day — anytime, anywhere.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/start" className="hover:text-gray-900">Start Chat</Link></li>
            <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">Resources</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><Link to="/blog" className="hover:text-gray-900">Blog</Link></li>
            <li><Link to="/news" className="hover:text-gray-900">News</Link></li>
            <li><Link to="/stories" className="hover:text-gray-900">Stories</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">Community</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li>50,000+ happy chats</li>
            <li>Available 24/7</li>
            <li>Free to use</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-100 px-4 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ChatMingle. Made with 💖 for meaningful conversations.
      </div>
    </footer>
  );
}
