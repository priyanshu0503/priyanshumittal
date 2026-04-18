import Reveal from '../ui/Reveal'
import { PROJECTS } from '../../data'

function ProjectCard({ id, icon, title, desc, impact, stack, github, demo, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        className="project-card-hover glass-card p-9 h-full flex flex-col relative overflow-hidden transition-all duration-300"
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
          e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4), 0 0 60px rgba(0,212,255,0.08)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.borderColor = ''
          e.currentTarget.style.boxShadow = ''
        }}
      >
        {/* Subtle hover overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.05), transparent 60%)' }}
        />

        <div
          className="text-[11px] tracking-[0.3em] mb-5"
          style={{ color: 'rgba(0,212,255,0.3)' }}
        >
          CATCH {id}
        </div>

        <span
          className="text-[40px] mb-5 block"
          style={{ filter: 'drop-shadow(0 0 12px rgba(0,212,255,0.3))' }}
        >
          {icon}
        </span>

        <h3 className="font-syne font-bold text-[22px] tracking-[-0.02em] text-foam mb-3">
          {title}
        </h3>

        <p className="text-[13px] leading-[1.8] mb-5 flex-1" style={{ color: 'rgba(168,230,240,0.6)' }}>
          {desc}
        </p>

        <div
          className="flex items-center gap-2 text-[12px] text-biolume mb-5 px-3.5 py-2.5 rounded"
          style={{
            background: 'rgba(0,255,204,0.05)',
            border: '1px solid rgba(0,255,204,0.1)',
          }}
        >
          {impact}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-7">
          {stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={github}
            className="hoverable px-5 py-2.5 font-syne font-semibold text-[11px] tracking-[0.15em] uppercase rounded-sm no-underline transition-all duration-200 text-muted"
            style={{ border: '1px solid rgba(0,212,255,0.15)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#00d4ff'
              e.currentTarget.style.color = '#00d4ff'
              e.currentTarget.style.background = 'rgba(0,212,255,0.05)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = ''
              e.currentTarget.style.color = ''
              e.currentTarget.style.background = ''
            }}
          >
            ⌥ GitHub
          </a>
          <a
            href={demo}
            className="hoverable px-5 py-2.5 font-syne font-bold text-[11px] tracking-[0.15em] uppercase rounded-sm no-underline text-abyss transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #00ffcc)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '' }}
          >
            → Live Demo
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: 'linear-gradient(180deg, #041628 0%, #062340 30%, #041628 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15 py-[120px]">
        <div className="section-tag">03 — The Big Catches</div>

        <Reveal>
          <h2
            className="font-syne font-extrabold tracking-[-0.03em] leading-none mb-16"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            What I've<br />
            <span className="glow-text">hauled up.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} {...project} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
