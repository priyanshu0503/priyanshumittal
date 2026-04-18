// ── sections/Contact.jsx ──
import { useState } from 'react'
import { CONTACT_LINKS } from '../data'
import { CONTACT_ICONS } from '../icons'
import DepthDivider from '../components/DepthDivider'
import styles from './Contact.module.css'

function ContactLinks() {
  return (
    <div className={styles.links}>
      {CONTACT_LINKS.map((link, i) => {
        const Icon = CONTACT_ICONS[i]
        return (
          <a key={i} href={link.href} className={styles.link}>
            <div className={styles.linkIcon}><Icon /></div>
            <div>
              <div className={styles.linkMain}>{link.label}</div>
              <div className={styles.linkSub}>{link.sub}</div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()}>
      <div className={styles.field}>
        <label>Your name</label>
        <input value={form.name} onChange={set('name')} placeholder="Captain Ahab" />
      </div>
      <div className={styles.field}>
        <label>Email</label>
        <input value={form.email} onChange={set('email')} placeholder="you@ocean.dev" />
      </div>
      <div className={styles.field}>
        <label>Message</label>
        <textarea value={form.message} onChange={set('message')} rows={6} placeholder="What brings you to these depths…" />
      </div>
      <button type="submit" className="btn btn-primary">Transmit Signal</button>
    </form>
  )
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <DepthDivider depth="3800m" label="Surface Signal" />

      <div className={styles.grid}>
        <div>
          <p className="section-eyebrow">Get in touch</p>
          <h2 className={styles.heading}>
            Send a <span>signal</span> up.
          </h2>
          <p className={styles.intro}>
            Whether it's a co-op opportunity, research collaboration, or a conversation
            about computer vision — my sonar is always on. Graduating October 2026.
          </p>
          <ContactLinks />
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
