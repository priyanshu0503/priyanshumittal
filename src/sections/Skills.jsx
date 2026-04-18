// ── sections/Skills.jsx ──
import { useState } from 'react'
import { SKILLS } from '../data'
import { useInView } from '../hooks'
import DepthDivider from '../components/DepthDivider'
import styles from './Skills.module.css'

function SkillCard({ name, level }) {
  const [ref, visible] = useInView(0.3)

  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.cardName}>{name}</div>
      <div className={styles.bar}>
        <div
          className={styles.barFill}
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = Object.keys(SKILLS)
  const [active, setActive] = useState(categories[0])

  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <DepthDivider depth="200m" label="Fishing Gear" />

      <p className="section-eyebrow">Tools of the trade</p>
      <h2 className="section-title">The Gear</h2>
      <p className="section-desc">Every deep-sea expedition demands the right equipment.</p>

      <div className={styles.tabs}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {SKILLS[active].map(([name, level]) => (
          <SkillCard key={name} name={name} level={level} />
        ))}
      </div>
    </section>
  )
}
