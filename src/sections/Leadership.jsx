// ── sections/Leadership.jsx ──
import { LEADERSHIP } from '../data'
import { LEADERSHIP_ICONS } from '../icons'
import DepthDivider from '../components/DepthDivider'
import styles from './Leadership.module.css'

function LeadershipCard({ item, Icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}><Icon /></div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.org}>{item.org}</p>
      <p className={styles.period}>{item.period}</p>
      <p className={styles.desc}>{item.desc}</p>
    </article>
  )
}

export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <DepthDivider depth="2600m" label="Command Deck" />

      <p className="section-eyebrow">Leadership & recognition</p>
      <h2 className="section-title">Beyond Code</h2>
      <p className="section-desc">The ocean rewards those who show up for their crew.</p>

      <div className={styles.grid}>
        {LEADERSHIP.map((item, i) => (
          <LeadershipCard key={i} item={item} Icon={LEADERSHIP_ICONS[i]} />
        ))}
      </div>
    </section>
  )
}
