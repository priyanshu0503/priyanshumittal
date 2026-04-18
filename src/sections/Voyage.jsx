// ── sections/Voyage.jsx ──
import { EXPERIENCE } from '../data'
import { useInView } from '../hooks'
import DepthDivider from '../components/DepthDivider'
import styles from './Voyage.module.css'

function TimelineItem({ item, delay }) {
  const [ref, visible] = useInView(0.15)

  return (
    <li
      ref={ref}
      className={`${styles.item} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.dot} />

      <p className={styles.period}>{item.period}</p>
      <h3 className={styles.role}>{item.role}</h3>
      <p className={styles.org}>{item.org}</p>

      <ul className={styles.bullets}>
        {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      <div className={styles.tags}>
        {item.tags.map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </li>
  )
}

export default function Voyage() {
  return (
    <section className="section" id="voyage">
      <DepthDivider depth="1200m" label="Voyage Log" />

      <p className="section-eyebrow">Work experience</p>
      <h2 className="section-title">The Voyage</h2>
      <p className="section-desc">Every port of call has left its mark.</p>

      <ol className={styles.timeline}>
        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={i} item={item} delay={i * 0.1} />
        ))}
      </ol>
    </section>
  )
}
