// ── sections/Hero.jsx ──
import { useScrollTo } from '../hooks'
import { HERO } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <div className={`${styles.tag} fade-up`} style={{ animationDelay: '.3s' }}>
          <span className={styles.tagDot} />
          {HERO.tag}
        </div>

        <h1 className={`${styles.name} fade-up`} style={{ animationDelay: '.5s' }}>
          <span className={styles.nameSolid}>{HERO.name[0]}</span>
          <span className={styles.nameOutline}>
            {HERO.name[1].slice(0, -3)}
            <span className={styles.nameAccent}>{HERO.name[1].slice(-3)}</span>
          </span>
        </h1>

        <div className={`${styles.pills} fade-up`} style={{ animationDelay: '.7s' }}>
          {HERO.pills.map(p => (
            <span key={p} className={styles.pill}>{p}</span>
          ))}
        </div>

        <p className={`${styles.bio} fade-up`} style={{ animationDelay: '.9s' }}>
          {HERO.bio}
        </p>

        <div className={`${styles.actions} fade-up`} style={{ animationDelay: '1.1s' }}>
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View Catches
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
            Send Signal
          </button>
        </div>
      </div>

      <div className={styles.depthLabel}>
        <span>0m</span>
        DESCENDING
      </div>

      <div className={`${styles.scrollHint} fade-up`} style={{ animationDelay: '2s' }}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Dive deeper</span>
      </div>
    </section>
  )
}
