import { TechIcon } from '#/components/ui/tech-icon'
import {
  architectureDiagram,
  type DiagramNode,
} from '#/data/architecture-diagram'

function DiagramNodeCard({ node, compact = false }: { node: DiagramNode; compact?: boolean }) {
  const Icon = node.icon

  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${node.glow ? 'shadow-[0_0_20px_rgba(139,92,246,0.15)]' : ''}`}
      style={{
        borderColor: `${node.accent}55`,
        backgroundColor: node.accentBg,
      }}
    >
      <div
        className="flex size-7 shrink-0 items-center justify-center rounded-md"
        style={{ backgroundColor: `${node.accent}22` }}
      >
        {node.techName ? (
          <TechIcon name={node.techName} size={compact ? 14 : 16} />
        ) : Icon ? (
          <Icon size={compact ? 14 : 16} style={{ color: node.accent }} />
        ) : null}
      </div>
      <span
        className={`font-medium text-[var(--text-primary)] ${compact ? 'text-[10px]' : 'text-xs'}`}
      >
        {node.label}
      </span>
    </div>
  )
}

function Connector({ className }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-6 w-px bg-gradient-to-b from-[rgba(139,92,246,0.5)] to-[rgba(59,130,246,0.3)] ${className ?? ''}`}
    />
  )
}

export function ArchDiagram() {
  const { top, gateway, services, eventBus, dataStores } = architectureDiagram

  return (
    <div className="site-card w-full p-5 md:p-6">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[140px]">
          <DiagramNodeCard node={top} />
        </div>

        <Connector />

        <div className="w-full max-w-[180px]">
          <DiagramNodeCard node={gateway} />
        </div>

        <Connector />

        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
          {services.map((node) => (
            <DiagramNodeCard key={node.id} node={node} compact />
          ))}
        </div>

        <div className="relative my-1 flex h-8 w-full items-center justify-center">
          <div className="absolute inset-x-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(139,92,246,0.35)] to-transparent" />
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 h-6 w-px -translate-y-1/2 bg-gradient-to-b from-[rgba(139,92,246,0.4)] to-[rgba(59,130,246,0.2)]"
              style={{ left: `${22 + i * 18}%` }}
            />
          ))}
        </div>

        <div className="w-full max-w-[220px]">
          <DiagramNodeCard node={eventBus} />
        </div>

        <Connector />

        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
          {dataStores.map((node) => (
            <DiagramNodeCard key={node.id} node={node} compact />
          ))}
        </div>
      </div>
    </div>
  )
}
