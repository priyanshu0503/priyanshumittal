// ── components/OceanCanvas.jsx ──
import { useEffect, useRef } from 'react'

export default function OceanCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let raf, t   = 0

    const particles = Array.from({ length: 60 }, () => ({
      x:       Math.random() * window.innerWidth,
      y:       Math.random() * window.innerHeight,
      r:       Math.random() * 2 + 0.5,
      speed:   Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.4 + 0.1,
      drift:   (Math.random() - 0.5) * 0.3,
    }))

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    function drawBackground() {
      const g = ctx.createLinearGradient(0, 0, 0, canvas.height)
      g.addColorStop(0,   '#020d1a')
      g.addColorStop(0.4, '#041225')
      g.addColorStop(0.8, '#061830')
      g.addColorStop(1,   '#020a14')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    function drawRays() {
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 5) * i + Math.sin(t * 0.0003 + i) * 40
        const g = ctx.createLinearGradient(x, 0, x + 80, canvas.height * 0.7)
        g.addColorStop(0, 'rgba(34,211,238,0.04)')
        g.addColorStop(1, 'transparent')
        ctx.save()
        ctx.translate(x, 0)
        ctx.rotate(Math.sin(t * 0.0002 + i * 0.5) * 0.08)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(100, canvas.height * 0.7)
        ctx.lineTo(-100, canvas.height * 0.7)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }
    }

    function drawWaves() {
      for (let w = 0; w < 4; w++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(34,211,238,${0.035 - w * 0.007})`
        ctx.lineWidth   = 1
        for (let x = 0; x <= canvas.width; x += 4) {
          const y = canvas.height * (0.2 + w * 0.15)
            + Math.sin(x * 0.005 + t * 0.001 + w) * (20 + w * 8)
            + Math.sin(x * 0.008 + t * 0.0007 + w * 2) * 10
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
    }

    function drawParticles() {
      particles.forEach(p => {
        p.y -= p.speed
        p.x += p.drift + Math.sin(t * 0.0005 + p.x) * 0.2
        if (p.y < -10)           { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        g.addColorStop(0, `rgba(103,232,249,${p.opacity})`)
        g.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })
    }

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawBackground()
      drawRays()
      drawWaves()
      drawParticles()
      t++
      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    frame()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} id="bg-canvas" />
}
