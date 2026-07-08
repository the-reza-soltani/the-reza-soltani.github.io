const NODES = [
  { cx: 12, cy: 18 },
  { cx: 28, cy: 32 },
  { cx: 45, cy: 14 },
  { cx: 62, cy: 28 },
  { cx: 78, cy: 16 },
  { cx: 88, cy: 38 },
  { cx: 18, cy: 52 },
  { cx: 35, cy: 68 },
  { cx: 55, cy: 58 },
  { cx: 72, cy: 72 },
  { cx: 90, cy: 55 },
  { cx: 8, cy: 82 },
  { cx: 42, cy: 88 },
  { cx: 68, cy: 90 },
]

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 6],
  [1, 6],
  [2, 3],
  [3, 8],
  [4, 8],
  [5, 10],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [7, 11],
  [8, 12],
  [9, 13],
  [11, 12],
  [12, 13],
]

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  drift: number
  variant: 'cyan' | 'purple' | 'blue'
  stream?: boolean
}

function createParticles(count: number): Particle[] {
  let seed = 92821

  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  const variants: Particle['variant'][] = ['cyan', 'purple', 'blue']

  return Array.from({ length: count }, (_, id) => {
    const stream = rand() > 0.82
    return {
      id,
      x: rand() * 100,
      y: rand() * 100,
      size: stream ? 1 + rand() * 1.2 : 1.5 + rand() * 2.8,
      duration: 14 + rand() * 24,
      delay: rand() * -28,
      opacity: 0.12 + rand() * 0.45,
      drift: -30 + rand() * 60,
      variant: variants[Math.floor(rand() * variants.length)],
      stream,
    }
  })
}

const PARTICLES = createParticles(56)

function AiParticles() {
  return (
    <div className="ai-particles">
      {PARTICLES.map((particle) => (
        <span
          key={particle.id}
          className={`ai-particle ai-particle--${particle.variant}${particle.stream ? ' ai-particle--stream' : ''}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.stream ? `${particle.size * 5}px` : `${particle.size}px`,
            height: particle.stream ? `${particle.size}px` : `${particle.size}px`,
            ['--particle-duration' as string]: `${particle.duration}s`,
            ['--particle-delay' as string]: `${particle.delay}s`,
            ['--particle-opacity' as string]: String(particle.opacity),
            ['--particle-drift' as string]: `${particle.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

export function AiBackground() {
  return (
    <div className="ai-bg" aria-hidden>
      <div className="ai-mesh" />
      <div className="ai-glow-orb ai-glow-orb--purple" />
      <div className="ai-glow-orb ai-glow-orb--cyan" />
      <AiParticles />
      <svg
        className="ai-network"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ai-flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.35)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.25)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" />
          </linearGradient>
        </defs>

        {EDGES.map(([from, to], i) => {
          const a = NODES[from]
          const b = NODES[to]
          return (
            <line
              key={`edge-${i}`}
              className="ai-network-edge"
              x1={a.cx}
              y1={a.cy}
              x2={b.cx}
              y2={b.cy}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          )
        })}

        {NODES.map((node, i) => (
          <circle
            key={`node-${i}`}
            className="ai-network-node"
            cx={node.cx}
            cy={node.cy}
            r="0.55"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </svg>
    </div>
  )
}
