export default function DepthDivider({ icon = '〰️' }) {
  return (
    <div className="flex items-center gap-5 px-15 py-2">
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)' }}
      />
      <span className="text-lg opacity-40">{icon}</span>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)' }}
      />
    </div>
  )
}
