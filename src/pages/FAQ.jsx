import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"

const FAQS = [
  {
    q: "Do you sell shared accounts or cracked software?",
    a: "No. This site template is for legal sales only — official subscriptions, setup services, and your own digital services.",
  },
  {
    q: "How do customers place an order?",
    a: "They click “Order Now”, choose duration, and the message opens in WhatsApp/Telegram with all details.",
  },
  {
    q: "Can I add PayHere/Stripe payment links?",
    a: "Yes. Best option with GitHub Pages is to use a hosted payment link and paste it into your messages or product descriptions.",
  },
  {
    q: "How do I change prices/products?",
    a: "Edit src/data/products.js. It’s a simple list of objects (title, category, price, durations, etc.).",
  },
]

export default function FAQ() {
  return (
    <Container className="py-10">
      <SectionTitle
        eyebrow="Help"
        title="FAQ"
        desc="Quick answers customers usually ask."
      />

      <div className="grid gap-4">
        {FAQS.map((f) => (
          <div key={f.q} className="glass rounded-3xl p-5">
            <div className="text-base font-medium">{f.q}</div>
            <div className="mt-2 text-sm text-slate-300">{f.a}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
