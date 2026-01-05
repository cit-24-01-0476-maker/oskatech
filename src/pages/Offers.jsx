// src/pages/Offers.jsx
import { offers } from "../data/offers"

const WHATSAPP = "94754565755"

export default function Offers() {
  return (
    <main className="animated-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-2">Special Offers</h1>
        <p className="text-white/60 mb-8">
          Limited-time deals & premium subscriptions
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.id}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition"
            >
              <img
                src={o.image}
                alt={o.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {o.title}
                </h3>
                <p className="text-sm text-white/70">{o.subtitle}</p>

                <div className="mt-3 text-white font-bold">{o.price}</div>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    o.whatsapp
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa w-full mt-4 justify-center"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
