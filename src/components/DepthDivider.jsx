// ── components/DepthDivider.jsx ──
import styles from './DepthDivider.module.css'

export default function DepthDivider({ depth, label }) {
  return (
    <div className={styles.divider}>
      <span className={styles.meter}>— {depth}</span>
      <div  className={styles.line} />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
