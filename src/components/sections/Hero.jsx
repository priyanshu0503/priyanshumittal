import { HERO } from '../../data'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-15 overflow-hidden">
      {/* Depth grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(0,212,255,0.03) 120px, rgba(0,212,255,0.03) 121px),
            repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(0,212,255,0.02) 80px, rgba(0,212,255,0.02) 81px)
          `,
        }}
      />

      {/* Main content */}
      <div className="max-w-[900px] relative">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-[0.2em] uppercase text-glow mb-8"
          style={{
            border: '1px solid rgba(0,212,255,0.15)',
            background: 'rgba(6,35,64,0.6)',
            animation: 'fadeUp 0.8s ease 0.2s forwards',
            opacity: 0,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-biolume"
            style={{ animation: 'blink 2s ease infinite' }}
          />
          {HERO.tag}
        </div>

        {/* Name */}
        <h1
          className="font-syne font-extrabold leading-[0.92] tracking-[-0.04em] mb-6"
          style={{
            fontSize: 'clamp(56px, 8vw, 110px)',
            animation: 'fadeUp 0.8s ease 0.4s forwards',
            opacity: 0,
          }}
        >
          <span className="block text-sea-light">{HERO.name[0]}</span>
          <span className="block glow-text">{HERO.name[1]}</span>
        </h1>

        {/* Title */}
        <p
          className="font-serif italic text-muted mb-7"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            animation: 'fadeUp 0.8s ease 0.6s forwards',
            opacity: 0,
          }}
        >
          {HERO.title}
        </p>

        {/* Description */}
        <p
          className="text-[13px] leading-[1.8] max-w-[540px] mb-11"
          style={{
            color: 'rgba(168,230,240,0.6)',
            animation: 'fadeUp 0.8s ease 0.8s forwards',
            opacity: 0,
          }}
        >
          {HERO.desc}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fadeUp 0.8s ease 1s forwards', opacity: 0 }}
        >
          <button onClick={() => scrollTo('projects')} className="btn-primary hoverable">
            Explore My Work →
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-outline hoverable">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div
        className="hidden lg:flex flex-col gap-8 absolute right-15 top-1/2 -translate-y-1/2"
        style={{ animation: 'fadeUp 0.8s ease 1.2s forwards', opacity: 0 }}
      >
        {HERO.stats.map((stat) => (
          <div key={stat.label} className="text-right">
            <div className="font-syne font-extrabold text-[36px] leading-none glow-text">{stat.num}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 right-15 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted"
        style={{ animation: 'fadeUp 1s ease 1.4s forwards', opacity: 0 }}
      >
        <div
          className="w-px h-[60px]"
          style={{
            background: 'linear-gradient(180deg, #00d4ff, transparent)',
            animation: 'scrollDrop 2s ease-in-out infinite',
          }}
        />
        <span>Dive</span>
      </div>

      <style>{`
        @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes scrollDrop{ 0%,100%{transform:scaleY(1);transform-origin:top} 50%{transform:scaleY(0.5);transform-origin:bottom} }
      `}</style>
    </section>
  )
}
