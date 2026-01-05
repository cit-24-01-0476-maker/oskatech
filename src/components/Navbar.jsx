import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Send, MessageCircle } from "lucide-react";
import OfferBar from "./OfferBar.jsx";

const FACEBOOK_URL = "https://www.facebook.com/share/1K2BAXP7xf/";
const TELEGRAM_URL = "https://t.me/oskatecsl";
const WHATSAPP_URL = "https://wa.me/94754565755";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const items = [
    { to: "/", label: "Home" },
    { to: "/store", label: "Store" },
    { to: "/downloads", label: "Downloads" },
    { to: "/offers", label: "Offers" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition ${
      isActive
        ? "bg-white/10 text-white"
        : "text-white/70 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <>
      <header className="site-navbar">
        {/* FULL WIDTH HEADER */}
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="relative flex h-16 items-center">
            {/* LEFT: Lightning logo (NO JPG/PNG) */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 select-none">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14h8l-1 8 11-14h-8l0-6z"
                      fill="url(#boltGrad)"
                    />
                    <defs>
                      <linearGradient
                        id="boltGrad"
                        x1="3"
                        y1="2"
                        x2="21"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#22d3ee" />
                        <stop offset="0.55" stopColor="#60a5fa" />
                        <stop offset="1" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                <div className="leading-tight">
                  <div className="font-semibold text-white">OSKATECH</div>
                  <div className="text-xs text-slate-400">premium store</div>
                </div>
              </Link>
            </div>

            {/* CENTER: Tabs (Desktop) */}
            <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-1">
              {items.map((it) => (
                <NavLink key={it.to} to={it.to} className={navClass}>
                  {it.label}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT: Social buttons */}
            <div className="ml-auto flex items-center gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-fb px-3 py-2 neon-hover"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-tg hidden sm:flex px-3 py-2 neon-hover"
                title="Telegram"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-wa hidden sm:flex px-3 py-2 neon-hover"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden btn-ghost px-3 py-2"
                onClick={() => setOpen((s) => !s)}
                aria-label="Menu"
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden mt-2 rounded-2xl border border-white/10 bg-white/5 p-2">
              <div className="grid gap-1">
                {items.map((it) => (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    {it.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-3 grid gap-2">
                <a
                  className="btn-fb neon-hover w-full justify-center"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a
                  className="btn-tg neon-hover w-full justify-center"
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Send className="h-4 w-4" /> Telegram
                </a>
                <a
                  className="btn-wa neon-hover w-full justify-center"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Offer bar under navbar */}
      <OfferBar />
    </>
  );
}
