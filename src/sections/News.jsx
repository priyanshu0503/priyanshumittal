// ── sections/News.jsx ──
import { NEWS } from '../data'
import { NEWS_ICONS } from '../icons'
import DepthDivider from '../components/DepthDivider'
import styles from './News.module.css'

function NewsCard({ item, Icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.type}>
        <span className={styles.typeDot} />
        {item.type}
      </div>

      <div className={styles.iconWrap}><Icon /></div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.org}>{item.org}</p>
      <p className={styles.desc}>{item.desc}</p>

      <span className={styles.year}>{item.year}</span>
    </article>
  )
}

export default function News() {
  return (
    <section className="section" id="news">
      <DepthDivider depth="2000m" label="Dispatch" />

      <p className="section-eyebrow">Recent highlights</p>
      <h2 className="section-title">News</h2>
      <p className="section-desc">Signals from the surface — competitions, research, and recognition.</p>

      <div className={styles.grid}>
        {NEWS.map((item, i) => (
          <NewsCard key={i} item={item} Icon={NEWS_ICONS[i]} />
        ))}
      </div>
    </section>
  )
}
