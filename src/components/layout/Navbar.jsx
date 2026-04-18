import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
      style={{
        padding:    scrolled ? '14px 60px' : '20px 60px',
        background: scrolled
          ? 'rgba(1,10,18,0.92)'
          : 'linear-gradient(180deg, rgba(1,10,18,0.9) 0%, transparent 100%)',
        backdropFilter: 'blur(4px)',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.15)' : 'none',
      }}
    >
      <button
        onClick={() => scrollTo('hero')}
        className="font-syne font-extrabold text-xl tracking-tight text-glow flex items-center gap-2.5 bg-transparent border-none"
      >
        <span>⚓</span> PM
      </button>

      <ul className="hidden md:flex gap-9 list-none">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-glow transition-colors duration-200 bg-transparent border-none relative group"
            >
              {link.label}
              <span
                className="absolute bottom-[-4px] left-0 h-px bg-glow transition-all duration-300 w-0 group-hover:w-full"
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
