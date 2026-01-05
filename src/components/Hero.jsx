import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="animated-bg relative">
      {/* ✅ Christmas snow overlay (needs .snow CSS in styles.css) */}
      <div className="snow" />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
              🎁 Holiday Deals • Premium Tools • Instant Delivery
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              OSKATECH{" "}
              <span className="text-red-200">Premium Store</span>
            </h1>

            <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
              Buy premium subscriptions, VPN configs, and verified downloads.
              Order goes directly to WhatsApp / Telegram in one click.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/store" className="btn-primary neon-hover">
                Browse Store <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/offers" className="btn-ghost neon-hover">
                View Offers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* ✅ 3 colourful 3D boxes */}
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <div className="feature-3d secure glass rounded-2xl p-4 border border-white/10">
                <div className="font-semibold text-white">Secure</div>
                <div className="mt-1 text-xs text-white/60 leading-relaxed">
                  Trusted delivery + clear instructions.
                </div>
              </div>

              <div className="feature-3d fast glass rounded-2xl p-4 border border-white/10">
                <div className="font-semibold text-white">Fast</div>
                <div className="mt-1 text-xs text-white/60 leading-relaxed">
                  Quick response via WhatsApp / Telegram.
                </div>
              </div>

              <div className="feature-3d premium glass rounded-2xl p-4 border border-white/10">
                <div className="font-semibold text-white">Premium</div>
                <div className="mt-1 text-xs text-white/60 leading-relaxed">
                  Clean UI + premium tools & offers.
                </div>
              </div>
            </div>
          </div>

          {/* Right (simple preview card) */}
          <div className="lg:justify-self-end">
            <div className="glass rounded-3xl border border-white/10 p-5 shadow-[0_0_40px_rgba(239,68,68,.12)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">
                  Live Preview
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  OSKATECH
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 flex justify-between">
                  <span>Popular</span>
                  <span className="text-white/90">ChatGPT Plus</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 flex justify-between">
                  <span>Offer</span>
                  <span className="text-white/90">Perplexity Pro 12M</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 flex justify-between">
                  <span>Delivery</span>
                  <span className="text-white/90">10–60 min</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70 leading-relaxed">
                  <div className="mb-2 text-white/60">
                    One-click order message:
                  </div>
                  Hi OSKATECH 👋 I want: <b>Perplexity Pro (12 Months)</b> <br />
                  Price: <b>Rs 4,000</b> <br />
                  Please send payment details.
                </div>

                <div className="pt-1 text-[11px] text-white/50">
                  Tip: Offers edit කරන්න <span className="text-white/70">src/data/offers.js</span> එකේ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}