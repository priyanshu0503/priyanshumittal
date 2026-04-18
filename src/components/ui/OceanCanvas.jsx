import { useOceanCanvas } from '../../hooks/useOceanCanvas'

export default function OceanCanvas() {
  const canvasRef = useOceanCanvas()

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
