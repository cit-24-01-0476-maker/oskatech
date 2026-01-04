import { ShoppingCart, Clock, ShieldCheck } from "lucide-react"

export default function ProductCard({ product, onOrder }) {
  return (
    <div className="glass rounded-3xl p-5 transition hover:shadow-glow hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="badge w-fit">{product.category}</div>
          <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{product.description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-300">Price</div>
          <div className="mt-1 text-lg font-semibold bg-gradient-to-r from-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
            {product.price}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(product.badges || []).map((b) => (
          <span key={b} className="badge">{b}</span>
        ))}
      </div>

      <div className="mt-5 grid gap-2 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-cyan-200" />
          Delivery: <span className="text-slate-100">{product.delivery}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-200" />
          {product.disclaimer}
        </div>
      </div>

      <button
        className="btn-primary mt-5 w-full"
        onClick={() => onOrder(product)}
      >
        <ShoppingCart className="h-4 w-4" />
        Order Now
      </button>
    </div>
  )
}
