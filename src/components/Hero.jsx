import Container from "./Container.jsx"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Sparkles, Cpu } from "lucide-react"
import { NavLink } from "react-router-dom"
import { SITE } from "../config.js"

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  return (
    <div className="cyber-grid relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-24 right-[-120px] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <Container className="relative py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="badge w-fit">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-cyan-200" />
              {SITE.tagline}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold leading-tight md:text-5xl"
            >
              Cyber-styled storefront for{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-100 to-fuchsia-200 bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
                official tools & digital services
              </span>
              .
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base text-slate-300">
              Sell <span className="text-slate-100">authorized subscriptions</span>, setup services, and verified download links.
              Orders go straight to your WhatsApp/Telegram in one click.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <NavLink to="/store" className="btn-primary">
                Browse Store <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink to="/downloads" className="btn-ghost">
                Verified Downloads <ArrowRight className="h-4 w-4" />
              </NavLink>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-3">
              <Feature icon={<ShieldCheck className="h-4 w-4 text-cyan-200" />} title="Secure" text="No password sharing. Official billing only." />
              <Feature icon={<Cpu className="h-4 w-4 text-cyan-200" />} title="Fast" text="Quick delivery via chat." />
              <Feature icon={<Sparkles className="h-4 w-4 text-cyan-200" />} title="Premium" text="Clean cyber UI with animations." />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-6 shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-300">Live Order Preview</div>
              <div className="badge">OSKATECH</div>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <CardLine label="Product" value="AI Subscription Setup (Official)" />
              <CardLine label="Duration" value="1 Month" />
              <CardLine label="Delivery" value="10–60 minutes" />
              <CardLine label="Payment" value="Bank transfer / Card link" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-400">Message sent to WhatsApp:</div>
              <div className="mt-2 font-mono text-xs leading-relaxed text-slate-200">
                {`Hi OSKATECH 👋\nI want: AI Subscription Setup (Official)\nDuration: 1 Month\nMy email: ____\nPayment: ____\nThanks!`}
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Tip: Update products/prices in <span className="text-slate-200">src/data/products.js</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5">
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <div className="mt-2 text-xs text-slate-300">{text}</div>
    </div>
  )
}

function CardLine({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-slate-400">{label}</div>
      <div className="text-slate-200">{value}</div>
    </div>
  )
}
