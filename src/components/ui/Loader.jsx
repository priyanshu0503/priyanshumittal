import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2800)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-abyss transition-opacity duration-700"
    >
      {/* Spinning rings */}
      <div className="relative w-[120px] h-[120px] mb-8">
        {[
          { inset: '0px',  color: '#00d4ff', dur: '1.4s',  dir: 'normal' },
          { inset: '12px', color: '#00ffcc', dur: '1s',    dir: 'reverse' },
          { inset: '24px', color: '#a8e6f0', dur: '1.8s',  dir: 'normal' },
        ].map((ring, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              inset:       ring.inset,
              border:      '2px solid transparent',
              borderTopColor: ring.color,
              animation:   `spin ${ring.dur} linear infinite ${ring.dir === 'reverse' ? 'reverse' : ''}`,
            }}
          />
        ))}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28px]"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        >
          🐋
        </div>
      </div>

      <p
        className="font-syne text-[13px] tracking-[0.3em] uppercase text-muted"
        style={{ animation: 'fadeText 2s ease-in-out infinite' }}
      >
        Diving into the Deep
      </p>
      <p className="mt-2 text-[11px] tracking-[0.2em]" style={{ color: 'rgba(0,212,255,0.4)' }}>
        Depth: 0m → 3,820m
      </p>

      {/* Progress bar */}
      <div className="mt-6 w-[200px] h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(0,212,255,0.1)' }}>
        <div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #00d4ff, #00ffcc)',
            animation:  'loadFill 2.5s ease forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes pulse     { 0%,100%{opacity:0.6;transform:translate(-50%,-50%) scale(0.9)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)} }
        @keyframes fadeText  { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes loadFill  { from{width:0} to{width:100%} }
      `}</style>
    </div>
  )
}
