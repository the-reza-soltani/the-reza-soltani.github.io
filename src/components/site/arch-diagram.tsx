import { TechIcon } from '#/components/ui/tech-icon'
import {
  architectureDiagram,
  type DiagramNode,
} from '#/data/architecture-diagram'

const GRID_4 = 'grid w-full grid-cols-4 gap-2'
const GRID_3 = 'grid w-full grid-cols-3 gap-2'

function nodeGlassStyle(node: DiagramNode) {
  const glowLayers = node.glow
    ? [
        `0 0 20px ${node.accent}40`,
        `0 0 40px ${node.accent}18`,
        `inset 0 0 16px ${node.accent}12`,
      ]
    : []

  return {
    borderColor: `${node.accent}66`,
    backgroundColor: 'rgba(12, 18, 32, 0.42)',
    boxShadow: [
      ...glowLayers,
      'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
    ]
      .filter(Boolean)
      .join(', '),
  }
}

function DiagramNodeCard({
  node,
  compact = false,
  className = '',
}: {
  node: DiagramNode
  compact?: boolean
  className?: string
}) {
  const Icon = node.icon

  return (
    <div
      className={`diagram-node ${node.glow ? 'diagram-node-glow' : ''} flex items-center gap-2 rounded-lg border px-3 py-2 ${className}`}
      style={nodeGlassStyle(node)}
    >
      <span aria-hidden className="diagram-node-shine" />
      {node.glow ? <span aria-hidden className="diagram-node-glow-ring" style={{ borderColor: `${node.accent}55` }} /> : null}
      <div
        className="diagram-icon-glass relative z-[1] flex size-7 shrink-0 items-center justify-center rounded-md"
        style={{
          backgroundColor: `${node.accent}20`,
          borderColor: `${node.accent}45`,
          boxShadow: node.glow ? `0 0 12px ${node.accent}30` : undefined,
        }}
      >
        {node.techName ? (
          <TechIcon name={node.techName} size={compact ? 14 : 16} />
        ) : Icon ? (
          <Icon size={compact ? 14 : 16} style={{ color: node.accent }} />
        ) : null}
      </div>
      <span
        className={`relative z-[1] font-medium text-[var(--text-primary)] ${compact ? 'text-[10px] leading-tight' : 'text-xs'}`}
      >
        {node.label}
      </span>
    </div>
  )
}

function ArrowHead({ x, y, size = 3.5 }: { x: number; y: number; size?: number }) {
  return (
    <polygon
      className="diagram-wire-fill"
      points={`${x},${y} ${x - size},${y - size * 1.4} ${x + size},${y - size * 1.4}`}
    />
  )
}

function CenterStem({ height = 10 }: { height?: number }) {
  return (
    <svg width="12" height={height} className="diagram-wire-glow mx-auto block shrink-0" aria-hidden>
      <line className="diagram-wire" x1="6" y1="0" x2="6" y2={height} />
    </svg>
  )
}

function DownArrow({ height = 22 }: { height?: number }) {
  const lineEnd = height - 8

  return (
    <svg width="12" height={height} className="diagram-wire-glow block shrink-0" aria-hidden>
      <line className="diagram-wire" x1="6" y1="0" x2="6" y2={lineEnd} />
      <ArrowHead x={6} y={height - 2} />
    </svg>
  )
}

function RailSegment({ index, total }: { index: number; total: number }) {
  const x1 = index === 0 ? '50%' : '0%'
  const x2 = index === total - 1 ? '50%' : '100%'

  return (
    <svg width="100%" height="10" className="diagram-wire-glow block overflow-visible" aria-hidden>
      <line className="diagram-wire" x1={x1} y1="10" x2={x2} y2="10" />
    </svg>
  )
}

function VerticalArrow({ height = 28 }: { height?: number }) {
  return (
    <div className="flex justify-center">
      <DownArrow height={height} />
    </div>
  )
}

function GatewayFork() {
  return (
    <div className="w-full">
      <CenterStem />
      <div className={GRID_4}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <RailSegment index={i} total={4} />
            <DownArrow />
          </div>
        ))}
      </div>
    </div>
  )
}

function ServicesMerge() {
  return (
    <div className="w-full">
      <div className={GRID_4}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <svg width="12" height="14" className="diagram-wire-glow block shrink-0" aria-hidden>
              <line className="diagram-wire" x1="6" y1="0" x2="6" y2="14" />
            </svg>
            <RailSegment index={i} total={4} />
          </div>
        ))}
      </div>
      <VerticalArrow height={24} />
    </div>
  )
}

function DataStoreFork() {
  return (
    <div className="w-full">
      <CenterStem />
      <div className={GRID_3}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <RailSegment index={i} total={3} />
            <DownArrow />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ArchDiagram() {
  const { aiServices, top, gateway, services, eventBus, dataStores } = architectureDiagram

  return (
    <div className="diagram-shell w-full">
      <div className="diagram-ambient-glow" aria-hidden />
      <div className="diagram-dot-grid" aria-hidden />
      <div className="diagram-canvas relative px-4 py-6 md:px-5 md:py-7">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[170px]">
            <DiagramNodeCard node={aiServices} />
          </div>

          <VerticalArrow height={20} />

          <div className="w-full max-w-[140px]">
            <DiagramNodeCard node={top} />
          </div>

          <VerticalArrow />

          <div className="w-full max-w-[180px]">
            <DiagramNodeCard node={gateway} />
          </div>

          <GatewayFork />

          <div className={GRID_4}>
            {services.map((node) => (
              <DiagramNodeCard key={node.id} node={node} compact />
            ))}
          </div>

          <ServicesMerge />

          <div className="w-full max-w-[220px]">
            <DiagramNodeCard node={eventBus} />
          </div>

          <VerticalArrow />

          <DataStoreFork />

          <div className={GRID_3}>
            {dataStores.map((node) => (
              <DiagramNodeCard key={node.id} node={node} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
