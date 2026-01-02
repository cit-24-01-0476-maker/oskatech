import Hero from "../components/Hero.jsx"
import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import StatStrip from "../components/StatStrip.jsx"
import { PRODUCTS } from "../data/products.js"
import ProductCard from "../components/ProductCard.jsx"
import { useState } from "react"
import OrderModal from "../components/OrderModal.jsx"
import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <Hero />
      <StatStrip />

      <Container className="py-10">
        <SectionTitle
          eyebrow="Featured"
          title="Popular services"
          desc="Edit your product list inside src/data/products.js — add prices, durations, badges and delivery times."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {PRODUCTS.slice(0, 2).map((p) => (
            <ProductCard key={p.id} product={p} onOrder={setSelected} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <NavLink to="/store" className="btn-ghost">
            View full store <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      </Container>

      <Container className="pb-14">
        <div className="glass rounded-3xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="badge w-fit">Pro tip</div>
              <h3 className="mt-3 text-2xl font-semibold">Make it “next level”</h3>
              <p className="mt-2 text-sm text-slate-300">
                Add your payment link (Stripe / PayHere / other), upload a logo, and create a simple delivery workflow:
                Order → Confirm → Payment → Setup → Done.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
              <div className="font-medium">Suggested workflow</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Customer clicks <span className="text-slate-100">Order Now</span></li>
                <li>Message lands in WhatsApp/Telegram with details</li>
                <li>You confirm price + send payment link</li>
                <li>After payment: activate official subscription / do setup</li>
                <li>Send proof + quick guide video</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <OrderModal open={!!selected} product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
