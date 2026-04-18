import { useScrollReveal } from '../../hooks/useScrollReveal'
import { EXPERIENCE } from '../../data'

function TimelineEntry({ period, type, title, org, desc, stack, active, index }) {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className="relative pl-12 py-9 transition-all duration-700"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${index * 80}ms`,
        borderBottom: '1px solid rgba(0,212,255,0.05)',
      }}
    >
      {/* Dot */}
      <div
        className="absolute left-[-5px] top-[42px] w-2.5 h-2.5 rounded-full"
        style={{
          background:  active ? '#00ffcc' : '#00d4ff',
          boxShadow:   active
            ? '0 0 0 3px rgba(0,255,204,0.2), 0 0 20px #00ffcc'
            : '0 0 0 3px rgba(0,212,255,0.15), 0 0 16px #00d4ff',
          animation:   active ? 'glowPulse 2s ease infinite' : 'none',
        }}
      />

      {/* Meta row */}
      <div className="flex items-center gap-4 flex-wrap mb-3">
        <span className="timeline-pill">{period}</span>
        <span className="text-[10px] tracking-[0.15em] uppercase text-muted">{type}</span>
      </div>

      <h3 className="font-syne font-bold text-[20px] text-foam mb-1.5">{title}</h3>
      <p className="text-[13px] text-glow mb-3.5">{org}</p>
      <p className="text-[13px] leading-[1.8]" style={{ color: 'rgba(168,230,240,0.6)' }}>{desc}</p>

      {stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
        </div>
      )}

      <style>{`
        @keyframes glowPulse {
          0%,100%{box-shadow:0 0 0 3px rgba(0,255,204,0.2),0 0 20px #00ffcc}
          50%{box-shadow:0 0 0 6px rgba(0,255,204,0.1),0 0 35px #00ffcc}
        }
      `}</style>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: 'linear-gradient(180deg, #041628 0%, #020f1e 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15 py-[120px]">
        <div className="section-tag">04 — Voyage Log</div>

        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-none mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', opacity: 1 }}
        >
          The route<br />
          <span className="glow-text">charted.</span>
        </h2>

        {/* Timeline */}
        <div
          className="relative pl-10"
          style={{
            borderLeft: 'none',
          }}
        >
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, transparent, #00d4ff 10%, rgba(0,212,255,0.3) 90%, transparent)',
            }}
          />

          {EXPERIENCE.map((entry, i) => (
            <TimelineEntry key={i} {...entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
