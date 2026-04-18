// ── sections/Projects.jsx ──
import { PROJECTS } from '../data'
import { PROJECT_ICONS, TrophyIcon, BubbleIcon } from '../icons'
import DepthDivider from '../components/DepthDivider'
import styles from './Projects.module.css'

function ProjectCard({ project }) {
  const ProjectIcon = PROJECT_ICONS[project.num]

  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <span className={styles.catchNum}>Catch #{project.num}</span>
        <div className={styles.iconWrap}><ProjectIcon /></div>
      </header>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>

        {project.finalist && (
          <div className={styles.finalistBadge}>
            <TrophyIcon size={13} />
            Falling Walls Lab Manitoba 2025 — Top 10
          </div>
        )}

        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.impact}>
          <BubbleIcon size={7} opacity={0.7} />
          {project.impact}
        </div>

        <div className={styles.stack}>
          {project.stack.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <DepthDivider depth="600m" label="The Big Catches" />

      <p className="section-eyebrow">Major achievements</p>
      <h2 className="section-title">Catches</h2>
      <p className="section-desc">Three specimens hauled from the deep. Each one a challenge worth chasing.</p>

      <div className={styles.grid}>
        {PROJECTS.map(p => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  )
}
