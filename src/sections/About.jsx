// ── sections/About.jsx ──
import { ABOUT } from '../data'
import { GradIcon } from '../icons'
import DepthDivider from '../components/DepthDivider'
import styles from './About.module.css'

function AboutFrame() {
  const ascii = `~≈~≈~≈~≈~≈~≈~≈~≈~≈~≈~\n≈~≈~≈~≈~≈~≈~≈~≈~≈~≈~≈\n~≈~≈~≈~≈~≈~≈~≈~≈~≈~≈~\n   °      °       °   \n  °  °  °   °  °  °  \n °    °       °    ° \n      °   °        ° \n °        °    °     \n~≈~≈~≈~≈~≈~≈~≈~≈~≈~≈~\n≈~≈~≈~≈~≈~≈~≈~≈~≈~≈~≈`

  return (
    <div className={styles.frameWrap}>
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={styles.frame}>
        <pre className={styles.ascii}>{ascii}</pre>
        <div className={styles.frameFooter}>
          <div className={styles.frameName}>Priyanshu Mittal</div>
          <div className={styles.frameRole}>ACM President · AI Researcher</div>
        </div>
      </div>
      <div className={`${styles.corner} ${styles.cornerBR}`} />
    </div>
  )
}

function StatCard({ num, label }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNum}>{num}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <DepthDivider depth="50m" label="The Captain" />

      <div className={styles.grid}>
        <AboutFrame />

        <div className={styles.text}>
          <p className="section-eyebrow">Who I am</p>
          <h2 className={styles.heading}>
            The captain charts <span>uncharted</span> waters.
          </h2>

          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}

          <div className={styles.awardStrip}>
            {ABOUT.awards.map(a => (
              <div key={a} className={styles.awardBadge}>
                <GradIcon size={13} />
                {a}
              </div>
            ))}
          </div>

          <div className={styles.statGrid}>
            {ABOUT.stats.map(s => (
              <StatCard key={s.label} num={s.num} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
