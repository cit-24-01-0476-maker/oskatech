import Container from "../components/Container.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import { DOWNLOADS } from "../data/downloads.js"
import { ExternalLink, DownloadCloud, ShieldCheck } from "lucide-react"

export default function Downloads() {
  return (
    <Container className="py-10">
      <SectionTitle
        eyebrow="Downloads"
        title="Verified download links"
        desc="We only list official sources here (stores, publishers). This keeps your business safe and trustworthy."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {DOWNLOADS.map((d) => (
          <div key={d.id} className="glass rounded-3xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="badge w-fit">{d.kind}</div>
                <h3 className="mt-3 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{d.note}</p>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <DownloadCloud className="h-4 w-4 text-cyan-200" />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-200" />
              No cracked/illegal links — official only.
            </div>

            <a
              className="btn-primary mt-5 w-full"
              href={d.link}
              target="_blank"
              rel="noreferrer"
            >
              Open official link <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xs text-slate-500">
        Need a custom “Downloads” list (apps, drivers, tools)? Edit <span className="text-slate-200">src/data/downloads.js</span>.
      </div>
    </Container>
  )
}
