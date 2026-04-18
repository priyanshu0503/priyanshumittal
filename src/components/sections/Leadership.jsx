import Reveal from '../ui/Reveal'
import { LEADERSHIP } from '../../data'

function LeadershipCard({ icon, title, org, desc, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        className="glass-card p-8 text-center h-full transition-all duration-300 hoverable"
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.borderColor = ''
        }}
      >
        <div className="text-[36px] mb-4">{icon}</div>
        <h3 className="font-syne font-bold text-[16px] text-foam mb-2">{title}</h3>
        <p className="text-[12px] text-glow mb-3">{org}</p>
        <p className="text-[12px] leading-[1.7]" style={{ color: 'rgba(168,230,240,0.55)' }}>{desc}</p>
      </div>
    </Reveal>
  )
}

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{ background: 'linear-gradient(180deg, #020f1e 0%, #041628 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15 py-[120px]">
        <div className="section-tag">05 — The Crew</div>

        <Reveal>
          <h2
            className="font-syne font-extrabold tracking-[-0.03em] leading-none mb-16"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Leading<br />
            <span className="glow-text">the fleet.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEADERSHIP.map((item, i) => (
            <LeadershipCard key={item.title} {...item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
