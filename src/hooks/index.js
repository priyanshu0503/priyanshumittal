// ── hooks/index.js ──
import { useState, useEffect, useRef } from 'react'

/** Returns true once window.scrollY exceeds `threshold` */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

/** Returns [ref, isVisible] — fires once when element enters viewport */
export function useInView(threshold = 0.2) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/** Smooth scroll to a section by id */
export function useScrollTo() {
  return (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
