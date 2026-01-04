import { useEffect, useMemo, useState } from "react"
import { X, MessageCircle, Send } from "lucide-react"
import { SITE } from "../config.js"
import { waLink, tgLink } from "../lib/whatsapp.js"

export default function OrderModal({ open, product, onClose }) {
  const [duration, setDuration] = useState("")
  const [plan, setPlan] = useState("") // ✅ GB plan (VPN only)
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [payment, setPayment] = useState("Bank transfer")

  useEffect(() => {
    if (product) {
      setDuration(product.duration?.[0] || "")
      setPlan(product.plans?.[0] || "") // ✅ default GB plan
      setEmail("")
      setNotes("")
      setPayment("Bank transfer")
    }
  }, [product])

  const message = useMemo(() => {
    if (!product) return ""
    return [
      `Hi ${SITE.name} 👋`,
      `I want: ${product.title}`,
      duration ? `Package: ${duration}` : null,
      product.id === "vpn-config-support" && plan ? `Plan: ${plan}` : null,
      email ? `Email: ${email}` : null,
      payment ? `Payment: ${payment}` : null,
      notes ? `Notes: ${notes}` : null,
      "",
      "Please confirm availability & total price. Thanks!",
    ]
      .filter(Boolean)
      .join("\n")
  }, [product, duration, plan, email, notes, payment])

  if (!open || !product) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="glass w-full max-w-2xl rounded-3xl p-6 shadow-glow">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="badge w-fit">{product.category}</div>
            <div className="mt-2 text-xl font-semibold">
              Order: {product.title}
            </div>
            <div className="mt-1 text-sm text-slate-300">
              {product.disclaimer}
            </div>
          </div>
          <button className="btn-ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {/* Package type */}
          <Field label="Package Type">
            <select
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-cyan-200/40"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              {(product.duration || []).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </Field>

          {/* VPN GB Plan (ONLY for VPN) */}
          {product.id === "vpn-config-support" && product.plans?.length ? (
            <Field label="GB Plan">
              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-cyan-200/40"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              >
                {product.plans.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
          ) : null}

          {/* Payment */}
          <Field label="Payment method">
            <select
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-cyan-200/40"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option>Bank transfer</option>
              <option>Card (Payment link)</option>
              <option>Cash deposit</option>
            </select>
          </Field>

          {/* Email */}
          <Field label="Your email (optional)">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-cyan-200/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </Field>

          {/* Notes */}
          <Field label="Notes (optional)">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-cyan-200/40"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Android / iOS / Router"
            />
          </Field>
        </div>

        {/* Message preview */}
        <div className="mt-5">
          <div className="text-sm text-slate-300">Preview message</div>
          <pre className="mt-2 whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200">
            {message}
          </pre>
        </div>

        {/* Actions */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <a
            className="btn-primary"
            href={waLink(SITE.whatsappNumber, message)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Send via WhatsApp
          </a>
          <a
            className="btn-ghost"
            href={tgLink(SITE.telegramUsername, message)}
            target="_blank"
            rel="noreferrer"
          >
            <Send className="h-4 w-4" />
            Send via Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-slate-300">{label}</div>
      {children}
    </label>
  )
}
