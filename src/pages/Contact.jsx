import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import { SITE } from "../config.js"
import { MessageCircle, Send, Mail, Users } from "lucide-react"

export default function Contact() {
  const wa = `https://wa.me/${(SITE.whatsappNumber || "").replace(/\D/g, "")}`
  const tg = `https://t.me/${SITE.telegramUsername}`

  return (
    <Container className="py-10">
      <SectionTitle
        eyebrow="Contact"
        title="Talk to OSKATECH"
        desc="Fast response via WhatsApp/Telegram."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Card
          icon={<MessageCircle className="h-4 w-4 text-cyan-200" />}
          title="WhatsApp"
          desc={`Chat with us: ${SITE.whatsappNumber}`}
          href={wa}
          cta="Open WhatsApp"
          primary
        />
        <Card
          icon={<Send className="h-4 w-4 text-cyan-200" />}
          title="Telegram"
          desc={`DM: @${SITE.telegramUsername}`}
          href={tg}
          cta="Open Telegram"
        />
        <Card
          icon={<Mail className="h-4 w-4 text-cyan-200" />}
          title="Email"
          desc={SITE.email}
          href={`mailto:${SITE.email}`}
          cta="Send Email"
        />
        <Card
          icon={<Users className="h-4 w-4 text-cyan-200" />}
          title="Groups"
          desc="Join for updates, offers, tutorials."
          href={SITE.telegramGroupLink || SITE.whatsappGroupLink || tg}
          cta="Open Group"
        />
      </div>

      <div className="mt-8 text-xs text-slate-400">
        Edit contact settings in <span className="text-slate-200">src/config.js</span>.
      </div>
    </Container>
  )
}

function Card({ icon, title, desc, href, cta, primary }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <div className="mt-2 text-sm text-slate-300">{desc}</div>
      <a
        className={`${primary ? "btn-primary" : "btn-ghost"} mt-5 w-full`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {cta}
      </a>
    </div>
  )
}
