import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import { OFFERS } from "../data/offers.js"
import { SITE } from "../config.js"

export default function Offers() {
  const openWhatsApp = (text) => {
    const num = (SITE.whatsappNumber || "").replace(/\D/g, "")
    const url = `https://wa.me/${num}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Container className="py-10">
      <SectionTitle
        eyebrow="Deals"
        title="Current Offers"
        desc="Limited-time promos & bundles."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {OFFERS.map((o) => (
          <div key={o.id} className="glass rounded-3xl overflow-hidden">
            <div className="relative">
              <img
                src={o.image}
                alt={o.title}
                className="w-full h-[240px] object-cover"
                loading="lazy"
              />
              <div className="absolute left-4 top-4 badge">{o.badge}</div>
            </div>

            <div className="p-5">
              <div className="text-xl font-semibold">{o.title}</div>
              <div className="mt-2 text-slate-300">{o.desc}</div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="text-lg font-semibold text-white">{o.price}</div>

                <button
                  className="btn-wa"
                  onClick={() => openWhatsApp(o.whatsappMessage)}
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
