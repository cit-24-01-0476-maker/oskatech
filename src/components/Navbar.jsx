import { NavLink } from "react-router-dom"
import Container from "./Container.jsx"
import Logo from "./Logo.jsx"
import { MessageCircle, Send, Menu, X } from "lucide-react"
import { useMemo, useState } from "react"
import { SITE } from "../config.js"

const linkBase =
  "rounded-xl px-3 py-2 text-sm transition border border-transparent hover:border-white/10 hover:bg-white/5"

function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/store", label: "Store" },
      { to: "/downloads", label: "Downloads" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
    []
  )

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <NavLink to="/" className="focus:outline-none">
          <Logo />
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-white/5 border-white/10" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop socials */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            className="btn-fb"
            href={SITE.facebookPage}
            target="_blank"
            rel="noreferrer"
            title="Facebook Page"
          >
            <FacebookIcon className="h-4 w-4" />
            Facebook
          </a>

          <a
            className="btn-tg"
            href={`https://t.me/${SITE.telegramUsername}`}
            target="_blank"
            rel="noreferrer"
            title="Telegram"
          >
            <Send className="h-4 w-4" />
            Telegram
          </a>

          <a
            className="btn-wa"
            href={`https://wa.me/${(SITE.whatsappNumber || "").replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden btn-ghost"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <Container className="py-3">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? "bg-white/5 border-white/10" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              <div className="mt-2 grid grid-cols-3 gap-2">
                <a
                  className="btn-fb"
                  href={SITE.facebookPage}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <FacebookIcon className="h-4 w-4" />
                  FB
                </a>

                <a
                  className="btn-tg"
                  href={`https://t.me/${SITE.telegramUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Send className="h-4 w-4" />
                  TG
                </a>

                <a
                  className="btn-wa"
                  href={`https://wa.me/${(SITE.whatsappNumber || "").replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  WA
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}
