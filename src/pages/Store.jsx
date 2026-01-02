import { useMemo, useState } from "react"
import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import ProductCard from "../components/ProductCard.jsx"
import OrderModal from "../components/OrderModal.jsx"
import { PRODUCTS } from "../data/products.js"
import { Search } from "lucide-react"

export default function Store() {
  const [selected, setSelected] = useState(null)
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("All")

  const categories = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => p.category))
    return ["All", ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const inCat = cat === "All" || p.category === cat
      const inQ = !q || (p.title + " " + p.description).toLowerCase().includes(q.toLowerCase())
      return inCat && inQ
    })
  }, [q, cat])

  return (
    <Container className="py-10">
      <SectionTitle
        eyebrow="Store"
        title="Products & services"
        desc="This template is built for legal sales: official subscriptions, setup services, and your own digital services."
      />

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3 md:col-span-2">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            placeholder="Search products..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <select
          className="glass rounded-2xl px-4 py-3 text-sm outline-none"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onOrder={setSelected} />
        ))}
      </div>

      <OrderModal open={!!selected} product={selected} onClose={() => setSelected(null)} />
    </Container>
  )
}
