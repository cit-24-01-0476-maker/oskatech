import { Zap } from "lucide-react"

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-400/10 shadow-glow">
        <Zap className="h-4 w-4 text-cyan-200" />
      </div>
      <div className="leading-tight">
        <div className="font-semibold tracking-wide">OSKATECH</div>
        <div className="text-[11px] text-slate-300">digital lab</div>
      </div>
    </div>
  )
}
