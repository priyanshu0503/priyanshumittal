import { useState, useEffect } from 'react'
import { useCursor } from '../../hooks/useCursor'

export default function Cursor() {
  const { dotRef, ringRef } = useCursor()
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const interactives = document.querySelectorAll(
      'a, button, .hoverable, .project-card-hover, .skill-cat-hover'
    )
    const on  = () => setHovered(true)
    const off = () => setHovered(false)
    interactives.forEach(el => {
      el.addEventListener('mouseenter', on)
      el.addEventListener('mouseleave', off)
    })
    return () => {
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', on)
        el.removeEventListener('mouseleave', off)
      })
    }
  }, [])

  // Ripple on click
  useEffect(() => {
    const onClick = (e) => {
      const r = document.createElement('div')
      r.style.cssText = `
        position:fixed; border-radius:50%; pointer-events:none; z-index:9998;
        border:1px solid rgba(0,212,255,0.3);
        left:${e.clientX}px; top:${e.clientY}px;
        animation: rippleOut 0.8s ease forwards;
      `
      document.body.appendChild(r)
      setTimeout(() => r.remove(), 800)
    }

    // inject keyframe once
    if (!document.getElementById('ripple-style')) {
      const s = document.createElement('style')
      s.id = 'ripple-style'
      s.textContent = `@keyframes rippleOut {
        from { width:0;height:0;opacity:0.6;transform:translate(-50%,-50%); }
        to   { width:100px;height:100px;opacity:0;transform:translate(-50%,-50%); }
      }`
      document.head.appendChild(s)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{ mixBlendMode: 'screen' }}
      >
        <div
          className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:  '#00d4ff',
            boxShadow:   '0 0 12px #00d4ff, 0 0 24px #00d4ff',
            transition:  'opacity 0.2s',
          }}
        />
      </div>
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{ mixBlendMode: 'screen' }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
          style={{
            width:       hovered ? '56px' : '36px',
            height:      hovered ? '56px' : '36px',
            border:      `1.5px solid ${hovered ? '#00ffcc' : 'rgba(0,212,255,0.5)'}`,
            transition:  'width 0.2s, height 0.2s, border-color 0.2s',
          }}
        />
      </div>
    </>
  )
}
