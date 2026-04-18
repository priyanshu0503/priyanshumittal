// ── components/Footer.jsx ──
import { AnchorIcon } from '../icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        Priyanshu Mittal — <span>Winnipeg, MB</span> — Grad Oct 2026
      </p>
      <AnchorIcon />
      <p className={styles.status}>
        <span>All systems nominal</span>
      </p>
    </footer>
  )
}
