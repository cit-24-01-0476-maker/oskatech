import { NavLink } from "react-router-dom"
import Container from "./Container.jsx"
import Logo from "./Logo.jsx"
import { MessageCircle, Send, Menu, X } from "lucide-react"
import { useMemo, useState } from "react"
import { SITE } from "../config.js"

const linkBase =
  "rounded-xl px-3 py-2 text-sm transition border border-transparent hover:border-white/10 hover:bg-white/5"

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

        <div className="hidden items-center gap-2 md:flex">
          <a
            className="btn-ghost"
            href={`https://t.me/${SITE.telegramUsername}`}
            target="_blank"
            rel="noreferrer"
            title="Telegram"
          >
            <Send className="h-4 w-4" />
            Telegram
          </a>
          <a
            className="btn-primary"
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
              <div className="mt-2 flex gap-2">
                <a
                  className="btn-ghost flex-1"
                  href={`https://t.me/${SITE.telegramUsername}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>
                <a
                  className="btn-primary flex-1"
                  href={`https://wa.me/${(SITE.whatsappNumber || "").replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}
