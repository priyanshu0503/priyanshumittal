// ── components/Nav.jsx ──
import { useScrolled, useScrollTo } from '../hooks'
import { NAV_LINKS } from '../data'
import styles from './Nav.module.css'

export default function Nav() {
  const scrolled = useScrolled()
  const scrollTo = useScrollTo()

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>PM<span>.</span></div>
      <ul className={styles.links}>
        {NAV_LINKS.map(id => (
          <li key={id}>
            <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
