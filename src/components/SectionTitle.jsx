export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-6">
      {eyebrow && <div className="badge w-fit">{eyebrow}</div>}
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      {desc && <p className="mt-2 text-sm text-slate-300">{desc}</p>}
    </div>
  )
}
