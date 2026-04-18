import Reveal from '../ui/Reveal'
import { SKILLS } from '../../data'

function SkillCard({ icon, title, tags, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        className="skill-cat-hover glass-card p-7 h-full transition-all duration-300 group"
        style={{ '--hover-shadow': '0 20px 60px rgba(0,212,255,0.1)' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,212,255,0.1)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.borderColor = ''
          e.currentTarget.style.boxShadow = ''
        }}
      >
        <div className="text-[28px] mb-4">{icon}</div>
        <div className="font-syne font-bold text-[14px] tracking-[0.1em] uppercase text-glow mb-4">
          {title}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020f1e 0%, #041628 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15 py-[120px]">
        <div className="section-tag">02 — The Gear</div>

        <Reveal>
          <h2
            className="font-syne font-extrabold tracking-[-0.03em] leading-none mb-16"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Tools of the<br />
            <span className="glow-text">deep voyage.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
