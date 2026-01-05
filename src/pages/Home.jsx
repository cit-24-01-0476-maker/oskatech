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
import Reveal from "../components/Reveal.jsx"

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <Hero />

      <Reveal>
        <StatStrip />
      </Reveal>

      <Container className="py-8 lg:py-10">
        <Reveal>
          <SectionTitle
            eyebrow="Featured"
            title="Popular services"
            desc="Edit your product list inside src/data/products.js — add prices, durations, badges and delivery times."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {PRODUCTS.slice(0, 2).map((p, idx) => (
            <Reveal key={p.id} delay={0.05 * idx}>
              <ProductCard product={p} onOrder={setSelected} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-7 flex justify-center">
            <NavLink to="/store" className="btn-ghost neon-hover">
              View full store <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </Reveal>
      </Container>

      <OrderModal open={!!selected} product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
