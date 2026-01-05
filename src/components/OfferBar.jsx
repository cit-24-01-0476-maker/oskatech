// src/components/OfferBar.jsx
import { offers } from "../data/offers"
import { Link } from "react-router-dom"

export default function OfferBar() {
  const featured = offers.find((o) => o.featured)

  if (!featured) return null

  return (
    <div className="w-full bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-2">
        <Link
          to="/offers"
          className="flex items-center justify-between gap-3 text-sm text-white hover:opacity-90"
        >
          <span>
            🔥 <b>{featured.title}</b> — {featured.subtitle} •{" "}
            <b>{featured.price}</b>
          </span>
          <span className="text-xs opacity-70">View offer →</span>
        </Link>
      </div>
    </div>
  )
}
