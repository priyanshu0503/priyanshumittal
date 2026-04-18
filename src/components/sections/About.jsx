import Reveal from '../ui/Reveal'
import { ABOUT } from '../../data'

function Portrait() {
  return (
    <div className="relative max-w-[380px] w-full">
      <div
        className="w-full aspect-[3/4] rounded relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #062340, #0a3a5c)',
          border: '1px solid rgba(0,212,255,0.15)',
        }}
      >
        {/* Scanner line */}
        <div
          className="absolute left-0 right-0 h-[3px] opacity-60 z-10"
          style={{
            background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
            animation: 'scan 3s ease-in-out infinite',
          }}
        />

        {/* Corner brackets */}
        {[
          { pos: 'top-2 left-2',    border: '1px 0 0 1px' },
          { pos: 'top-2 right-2',   border: '1px 1px 0 0' },
          { pos: 'bottom-2 left-2', border: '0 0 1px 1px' },
          { pos: 'bottom-2 right-2',border: '0 1px 1px 0' },
        ].map((c, i) => (
          <div
            key={i}
            className={`absolute w-5 h-5 opacity-50 ${c.pos}`}
            style={{ borderColor: '#00d4ff', borderStyle: 'solid', borderWidth: c.border }}
          />
        ))}

        {/* Inner frame */}
        <div
          className="absolute inset-5 flex flex-col items-center justify-center gap-4"
          style={{ border: '1px solid rgba(0,212,255,0.1)' }}
        >
          <div
            className="text-[80px]"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.4))' }}
          >
            🧑‍💻
          </div>
          <div className="font-syne font-bold text-[18px] text-foam text-center">Priyanshu Mittal</div>
          <div className="text-[11px] text-glow tracking-[0.2em] uppercase text-center opacity-80">
            AI · Full Stack · Systems
          </div>
          <div className="text-[11px] text-muted text-center">📍 Winnipeg, Canada</div>
        </div>

        {/* Coords */}
        <div
          className="absolute bottom-4 left-4 text-[10px] tracking-[0.1em] font-mono"
          style={{ color: 'rgba(0,212,255,0.3)' }}
        >
          {ABOUT.coords}
        </div>
      </div>

      <style>{`
        @keyframes scan { 0%{top:0} 100%{top:100%} }
      `}</style>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative"
      style={{ background: 'linear-gradient(180deg, #010a12 0%, #020f1e 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15 py-[120px]">
        <div className="section-tag">01 — The Captain</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal><Portrait /></Reveal>

          <Reveal delay={150}>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-none mb-8"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Navigating the<br />
              <em
                className="not-italic glow-text"
                style={{ fontFamily: 'inherit' }}
              >
                unknown depths.
              </em>
            </h2>

            {ABOUT.body.map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.9] mb-5"
                style={{ color: 'rgba(168,230,240,0.7)' }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}

            <blockquote
              className="font-serif italic text-[22px] leading-[1.5] text-foam my-8 pl-6"
              style={{ borderLeft: '2px solid #00d4ff' }}
            >
              {ABOUT.quote}
            </blockquote>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {ABOUT.badges.map(badge => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-full text-[11px] text-glow tracking-[0.1em] hoverable transition-all duration-200"
                  style={{
                    border: '1px solid rgba(0,212,255,0.15)',
                    background: 'rgba(6,35,64,0.6)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
