import { useEffect, useRef } from 'react'

export function useOceanCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H, scrollY = 0, animId

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', () => { scrollY = window.scrollY })

    // Particles
    const particles = Array.from({ length: 120 }, () => ({
      x:       Math.random() * 2000,
      y:       Math.random() * 3000,
      r:       Math.random() * 1.8 + 0.3,
      speed:   Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.5 + 0.05,
      drift:   (Math.random() - 0.5) * 0.2,
      hue:     Math.random() > 0.7 ? '180, 255, 204' : '0, 212, 255',
    }))

    // Light rays
    const rays = Array.from({ length: 8 }, () => ({
      x:       Math.random() * 1800,
      angle:   -Math.PI / 2 + (Math.random() - 0.5) * 0.6,
      width:   Math.random() * 60 + 20,
      opacity: Math.random() * 0.04 + 0.01,
      speed:   Math.random() * 0.0003 + 0.0001,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Depth gradient overlay
      const grad = ctx.createLinearGradient(0, 0, 0, H)
      grad.addColorStop(0,   'rgba(1,10,18,0)')
      grad.addColorStop(0.5, 'rgba(2,15,30,0.15)')
      grad.addColorStop(1,   'rgba(4,22,40,0.3)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      const parallax = scrollY * 0.15
      const now = Date.now()

      // Rays
      rays.forEach(ray => {
        ray.x += Math.sin(now * ray.speed) * 0.3
        const grd = ctx.createLinearGradient(
          ray.x, -parallax * 0.3,
          ray.x + Math.sin(ray.angle) * H,
          H - parallax * 0.3
        )
        grd.addColorStop(0, `rgba(0,212,255,${ray.opacity})`)
        grd.addColorStop(1, 'rgba(0,212,255,0)')
        const hw = ray.width / 2
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(ray.x - hw, 0)
        ctx.lineTo(ray.x + hw, 0)
        ctx.lineTo(ray.x + hw + Math.sin(ray.angle) * H, H)
        ctx.lineTo(ray.x - hw + Math.sin(ray.angle) * H, H)
        ctx.closePath()
        ctx.fillStyle = grd
        ctx.fill()
        ctx.restore()
      })

      // Particles
      particles.forEach(p => {
        p.y -= p.speed
        p.x += p.drift + Math.sin(now * 0.001 + p.y * 0.01) * 0.1
        if (p.y < -parallax)   p.y = H + 100 - parallax
        if (p.x < 0)  p.x = W
        if (p.x > W)  p.x = 0

        const sy = p.y + parallax * 0.2
        if (sy < -10 || sy > H + 10) return

        ctx.beginPath()
        ctx.arc(p.x % W, sy, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.hue},${p.opacity})`
        ctx.fill()

        if (p.r > 1.2) {
          ctx.beginPath()
          ctx.arc(p.x % W, sy, p.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.hue},${p.opacity * 0.2})`
          ctx.fill()
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return canvasRef
}
