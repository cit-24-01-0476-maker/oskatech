import Container from "./Container.jsx"
import { SITE } from "../config.js"
import { Shield, ExternalLink } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyan-200" />
              <div className="font-semibold tracking-wide">{SITE.name}</div>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              {SITE.tagline}. Fast delivery via WhatsApp/Telegram.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              {SITE.legalNote}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <NavLink className="rounded-lg px-2 py-1 hover:bg-white/5" to="/policies">Policies</NavLink>
            <NavLink className="rounded-lg px-2 py-1 hover:bg-white/5" to="/faq">FAQ</NavLink>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5" href={`https://wa.me/${(SITE.whatsappNumber || "").replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
              WhatsApp <ExternalLink className="inline h-3 w-3" />
            </a>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5" href={`https://t.me/${SITE.telegramUsername}`} target="_blank" rel="noreferrer">
              Telegram <ExternalLink className="inline h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
