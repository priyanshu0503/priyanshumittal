export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between px-15 py-10 bg-abyss gap-2"
      style={{ borderTop: '1px solid rgba(0,212,255,0.15)' }}
    >
      <p className="text-[11px] tracking-[0.1em]" style={{ color: 'rgba(168,230,240,0.3)' }}>
        © {new Date().getFullYear()} Priyanshu Mittal · Engineered in the deep
      </p>
      <p className="text-[11px] tracking-[0.2em]" style={{ color: 'rgba(0,212,255,0.3)' }}>
        Depth: 3,820m · Signal: strong
      </p>
    </footer>
  )
}
