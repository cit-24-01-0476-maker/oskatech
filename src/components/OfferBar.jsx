import { NavLink } from "react-router-dom"
import { OFFERS } from "../data/offers.js"

export default function OfferBar() {
  const offer = OFFERS?.[0]
  if (!offer) return null

  return (
    <div className="border-b border-white/10 bg-white/5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-200">
          <span className="badge mr-2">{offer.badge}</span>
          <span className="font-medium">{offer.title}</span>
          <span className="text-slate-300"> — {offer.price}</span>
        </div>

        <NavLink to="/offers" className="btn-ghost w-fit">
          View Offer
        </NavLink>
      </div>
    </div>
  )
}
