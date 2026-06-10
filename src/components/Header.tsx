import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <img src="/logo.png" alt="ChatMingle" className="h-8 w-auto sm:h-9" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-50" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate({ to: "/start" })}
            className="rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md active:scale-95"
          >
            Start Chat
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                activeProps={{ className: "rounded-xl px-4 py-3 text-sm font-semibold bg-gray-50 text-gray-900" }}
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
    <footer className="mt-16 border-t border-gray-100 bg-white py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <img src="/logo.png" alt="ChatMingle" className="h-8 w-auto" />
          <p className="mt-3 text-sm text-gray-400">
            Warm, friendly chats that brighten your day — anytime, anywhere.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
            <li><Link to="/start" className="hover:text-gray-900 transition-colors">Start Chat</Link></li>
            <li><Link to="/about" className="hover:text-gray-900 transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-gray-900 transition-colors">Blog</Link></li>
            <li><Link to="/stories" className="hover:text-gray-900 transition-colors">Stories</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">Free Chat</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><Link to="/free-chat-app" className="hover:text-gray-900 transition-colors">Free Chat App</Link></li>
            <li><Link to="/chat-online" className="hover:text-gray-900 transition-colors">Chat Online Free</Link></li>
            <li><Link to="/chat-rooms" className="hover:text-gray-900 transition-colors">Free Chat Rooms</Link></li>
            <li><Link to="/meet-new-people" className="hover:text-gray-900 transition-colors">Meet New People</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">Dating</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li><Link to="/free-dating-app" className="hover:text-gray-900 transition-colors">Free Dating App</Link></li>
            <li><Link to="/dating-in-india" className="hover:text-gray-900 transition-colors">Dating in India</Link></li>
            <li><Link to="/omegle-alternative" className="hover:text-gray-900 transition-colors">Omegle Alternative</Link></li>
            <li><span className="text-gray-400">50,000+ happy chats</span></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-100 px-4 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ChatMingle. Made with 💖 for meaningful conversations.
      </div>
    </footer>
  );
}
