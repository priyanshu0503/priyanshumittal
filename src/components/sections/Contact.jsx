import { useState } from 'react'
import Reveal from '../ui/Reveal'
import { CONTACT_LINKS } from '../../data'

function ContactLink({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hoverable flex items-center gap-3.5 px-5 py-4 rounded-md no-underline text-foam transition-all duration-200"
      style={{
        background: 'rgba(6,35,64,0.6)',
        border: '1px solid rgba(0,212,255,0.15)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
        e.currentTarget.style.background = 'rgba(0,212,255,0.06)'
        e.currentTarget.style.transform = 'translateX(4px)'
        e.currentTarget.style.color = '#00d4ff'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.background = ''
        e.currentTarget.style.transform = ''
        e.currentTarget.style.color = ''
      }}
    >
      <span className="text-[18px]">{icon}</span>
      <div>
        <div className="text-[10px] tracking-[0.2em] uppercase text-muted">{label}</div>
        <div className="text-[13px] inherit">{value}</div>
      </div>
    </a>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    if (!fields.name || !fields.email || !fields.message) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFields({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(0,212,255,0.12)',
    borderRadius: '4px',
    color: '#e8f6fa',
    fontFamily: 'DM Mono, monospace',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    resize: 'none',
  }

  const focusStyle = {
    borderColor: '#00d4ff',
    background: 'rgba(0,212,255,0.03)',
  }

  return (
    <div
      className="rounded-lg p-10"
      style={{
        background: 'rgba(6,35,64,0.6)',
        border: '1px solid rgba(0,212,255,0.15)',
      }}
    >
      <p className="font-syne font-bold text-[18px] text-glow mb-7">// Compose your message</p>

      {[
        { label: 'Identifier (Name)',       key: 'name',    type: 'text',  placeholder: 'Your name',         rows: null },
        { label: 'Signal Address (Email)',  key: 'email',   type: 'email', placeholder: 'your@email.com',    rows: null },
        { label: 'Transmission (Message)', key: 'message', type: null,    placeholder: 'What are you building?', rows: 5 },
      ].map(field => (
        <div key={field.key} className="mb-5">
          <label
            className="block text-[10px] tracking-[0.2em] uppercase text-muted mb-2"
          >
            {field.label}
          </label>
          {field.rows ? (
            <textarea
              rows={field.rows}
              placeholder={field.placeholder}
              value={fields[field.key]}
              onChange={e => setFields(f => ({ ...f, [field.key]: e.target.value }))}
              style={inputStyle}
              onFocus={e  => Object.assign(e.target.style, focusStyle)}
              onBlur={e   => { e.target.style.borderColor = ''; e.target.style.background = '' }}
            />
          ) : (
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={fields[field.key]}
              onChange={e => setFields(f => ({ ...f, [field.key]: e.target.value }))}
              style={inputStyle}
              onFocus={e  => Object.assign(e.target.style, focusStyle)}
              onBlur={e   => { e.target.style.borderColor = ''; e.target.style.background = '' }}
            />
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="hoverable w-full py-4 font-syne font-bold text-[13px] tracking-[0.15em] uppercase text-abyss rounded transition-all duration-200"
        style={{
          background: sent
            ? 'linear-gradient(135deg, #00ffcc, #00d4ff)'
            : 'linear-gradient(135deg, #00d4ff, #00ffcc)',
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
      >
        {sent ? 'Signal Sent ✓' : 'Transmit →'}
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: 'linear-gradient(180deg, #041628 0%, #010a12 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15 py-[120px]">
        <div className="section-tag">06 — Signal</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Send a<br />
              <span className="font-serif italic glow-text" style={{ fontFamily: 'Instrument Serif, serif' }}>
                transmission.
              </span>
            </h2>

            <p
              className="text-[14px] leading-[1.8] mb-10"
              style={{ color: 'rgba(168,230,240,0.6)' }}
            >
              Whether you're building something ambitious, hiring for a mission-critical role,
              or just want to talk about ocean-scale ML systems — I'm listening on all frequencies.
            </p>

            <div className="flex flex-col gap-3.5">
              {CONTACT_LINKS.map(link => (
                <ContactLink key={link.label} {...link} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
