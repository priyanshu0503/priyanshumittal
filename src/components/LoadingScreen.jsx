// ── components/LoadingScreen.jsx ──
import { useState, useEffect } from 'react'
import { FishIcon } from '../icons'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen({ done }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPct(40),  300)
    const t2 = setTimeout(() => setPct(75),  700)
    const t3 = setTimeout(() => setPct(100), 1100)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])

  return (
    <div className={`${styles.screen} ${done ? styles.hidden : ''}`}>
      <div className={styles.sonar}>
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.ring} />
        <FishIcon />
      </div>
      <p className={styles.label}>Diving into the deep…</p>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
