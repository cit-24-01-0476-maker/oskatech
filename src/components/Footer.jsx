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
    <section
      className="
        cyber-grid relative overflow-hidden flex items-start
        pt-10 lg:pt-12
        lg:min-h-[78vh] xl:min-h-[82vh] 2xl:min-h-[84vh]
      "
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute -top-28 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-red-500/25 blur-3xl" />
        <div className="absolute top-10 right-[-320px] h-[820px] w-[820px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <Container className="relative w-full py-5 sm:py-7 lg:py-8">
        <div className="grid items-center gap-10 xl:gap-16 xl:grid-cols-[1.25fr_0.75fr]">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          >
            <motion.div variants={fadeUp} className="badge w-fit">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-white" />
              {SITE.tagline}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Cyber-styled storefront for{" "}
              <span className="bg-gradient-to-r from-white via-white/80 to-red-300 bg-clip-text text-transparent">
                official tools & digital services
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl"
            >
              Sell authorized subscriptions, setup services, and verified download links.
              Orders go straight to your WhatsApp/Telegram in one click.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <NavLink to="/store" className="btn-primary">
                Browse Store <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink to="/downloads" className="btn-ghost">
                Verified Downloads <ArrowRight className="h-4 w-4" />
              </NavLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-4 sm:grid-cols-3 xl:gap-5"
            >
              <Feature
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Secure"
                text="No password sharing. Official billing only."
              />
              <Feature
                icon={<Cpu className="h-4 w-4" />}
                title="Fast"
                text="Quick delivery via chat."
              />
              <Feature
                icon={<Sparkles className="h-4 w-4" />}
                title="Premium"
                text="Clean premium UI with animations."
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-6 xl:p-10 shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-300">Live Order Preview</div>
              <div className="badge">OSKATECH</div>
            </div>

            <div className="mt-5 space-y-3 text-sm xl:text-base">
              <CardLine label="Product" value="AI Subscription Setup (Official)" />
              <CardLine label="Duration" value="1 Month" />
              <CardLine label="Delivery" value="10–60 minutes" />
              <CardLine label="Payment" value="Bank transfer / Card link" />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-400">Message sent to WhatsApp:</div>
              <div className="mt-2 font-mono text-xs xl:text-sm leading-relaxed text-slate-200">
                {`Hi OSKATECH 👋\nI want: AI Subscription Setup (Official)\nDuration: 1 Month\nMy email: ____\nPayment: ____\nThanks!`}
              </div>
            </div>

            <div className="mt-7 text-xs text-slate-400">
              Tip: Update products/prices in{" "}
              <span className="text-slate-200">src/data/products.js</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function Feature({ icon, title, text }) {
  // brand colors per card
  let cardClass = "feature-card-premium"
  let iconClass = "bg-red-500/15 text-red-300"

  if (title === "Secure") {
    cardClass = "feature-card-secure"
    iconClass = "bg-green-500/15 text-green-300"
  }
  if (title === "Fast") {
    cardClass = "feature-card-fast"
    iconClass = "bg-sky-500/15 text-sky-300"
  }

  return (
    <div className={`feature-card ${cardClass} p-4 lg:p-3.5`}>
      <div className="flex items-center gap-2">
        <div className={`grid h-8 w-8 place-items-center rounded-xl ${iconClass}`}>
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <div className="mt-2 text-xs text-slate-300 leading-relaxed">
        {text}
      </div>
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