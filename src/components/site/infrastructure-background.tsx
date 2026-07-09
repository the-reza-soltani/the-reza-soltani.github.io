import type { CSSProperties } from 'react'

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

const PCB_TRACES = [
  'M 5 10 H 35 V 25 H 60',
  'M 70 5 H 95 V 30 H 80',
  'M 10 70 H 45 V 55 H 25',
  'M 55 65 H 90 V 85 H 70',
  'M 30 40 H 50 V 60 H 40',
  'M 65 45 H 85 V 65',
]

function PcbLayer() {
  return (
    <svg className="infra-pcb" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {PCB_TRACES.map((d, i) => (
        <path key={d} d={d} className={i % 2 === 0 ? 'pcb-accent' : undefined} />
      ))}
      {[
        [35, 25],
        [60, 25],
        [45, 55],
        [70, 85],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.8" fill="#1a1a1a" />
      ))}
    </svg>
  )
}

function PacketPulse({
  from,
  to,
  index,
}: {
  from: { cx: number; cy: number }
  to: { cx: number; cy: number }
  index: number
}) {
  const pathId = `packet-path-${index}`
  const d = `M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`

  return (
    <g>
      <path id={pathId} d={d} fill="none" stroke="none" />
      <circle
        className="infra-packet infra-packet--active"
        r="0.35"
        style={
          {
            offsetPath: `path('${d}')`,
            '--packet-duration': `${3.5 + (index % 4)}s`,
            '--packet-delay': `${index * 0.6}s`,
          } as CSSProperties
        }
      />
    </g>
  )
}

function NetworkLayer() {
  return (
    <svg
      className="infra-network"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      {EDGES.map(([from, to], i) => {
        const a = NODES[from]
        const b = NODES[to]
        return (
          <line
            key={`edge-${i}`}
            className="infra-network-edge"
            x1={a.cx}
            y1={a.cy}
            x2={b.cx}
            y2={b.cy}
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        )
      })}

      {EDGES.slice(0, 8).map(([from, to], i) => (
        <PacketPulse key={`packet-${i}`} from={NODES[from]} to={NODES[to]} index={i} />
      ))}

      {NODES.map((node, i) => (
        <circle
          key={`node-${i}`}
          className="infra-network-node"
          cx={node.cx}
          cy={node.cy}
          r="0.55"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </svg>
  )
}

export function InfrastructureBackground() {
  return (
    <div className="infra-bg" aria-hidden>
      <div className="infra-noise" />
      <div className="infra-mesh" />
      <PcbLayer />
      <NetworkLayer />
    </div>
  )
}
