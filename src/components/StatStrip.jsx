import Container from "./Container.jsx"
import { ShieldCheck, Bolt, Headphones } from "lucide-react"

export default function StatStrip() {
  const stats = [
    { icon: <Bolt className="h-4 w-4 text-red-300" />, title: "Fast delivery", text: "Orders handled via chat — quick turnaround." },
    { icon: <ShieldCheck className="h-4 w-4 text-red-300" />, title: "Legal + secure", text: "Official subscriptions & your own services only." },
    { icon: <Headphones className="h-4 w-4 text-red-300" />, title: "Support", text: "Friendly help for setup & troubleshooting." },
  ]

  return (
    // ✅ PC වල top gap අඩු (hero එකට ලඟ කරලා)
    <Container className="py-8 lg:py-6 lg:-mt-10">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.title} className="glass rounded-3xl p-5">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                {s.icon}
              </div>
              <div className="font-medium">{s.title}</div>
            </div>
            <div className="mt-2 text-sm text-slate-300">{s.text}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
