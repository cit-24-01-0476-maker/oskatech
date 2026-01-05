import { useEffect, useRef } from "react"

export default function Particles({ density = 45, maxSpeed = 0.22 }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const SPEED = prefersReduced ? 0 : maxSpeed
    const COUNT = prefersReduced ? Math.max(16, Math.floor(density / 3)) : density

    let w = 0
    let h = 0
    let dpr = Math.min(2, window.devicePixelRatio || 1)

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      dpr = Math.min(2, window.devicePixelRatio || 1)

      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const rand = (min, max) => Math.random() * (max - min) + min

    const dots = Array.from({ length: COUNT }).map(() => ({
      x: rand(0, 1),
      y: rand(0, 1),
      vx: rand(-SPEED, SPEED),
      vy: rand(-SPEED, SPEED),
      r: rand(0.7, 1.9),
      a: rand(0.18, 0.5),
    }))

    function step() {
      ctx.clearRect(0, 0, w, h)

      // subtle fog
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.35, 40, w * 0.5, h * 0.35, Math.max(w, h))
      grad.addColorStop(0, "rgba(255,255,255,0.02)")
      grad.addColorStop(0.4, "rgba(239,68,68,0.02)")
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // dots
      for (const p of dots) {
        p.x += p.vx / 110
        p.y += p.vy / 110

        if (p.x < -0.05) p.x = 1.05
        if (p.x > 1.05) p.x = -0.05
        if (p.y < -0.05) p.y = 1.05
        if (p.y > 1.05) p.y = -0.05

        const x = p.x * w
        const y = p.y * h

        ctx.beginPath()
        ctx.arc(x, y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.a})`
        ctx.fill()
      }

      // thin lines (lite)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dx = (a.x - b.x) * w
          const dy = (a.y - b.y) * h
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 130
          if (dist < maxDist) {
            const t = 1 - dist / maxDist
            ctx.strokeStyle = `rgba(239,68,68,${0.07 * t})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x * w, a.y * h)
            ctx.lineTo(b.x * w, b.y * h)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    resize()
    step()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [density, maxSpeed])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-35"
      aria-hidden="true"
    />
  )
}