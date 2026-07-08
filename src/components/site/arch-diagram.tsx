export function ArchDiagram() {
  const nodeClass =
    'fill-[var(--surface-elevated)] stroke-[var(--border-strong)]'
  const textClass = 'fill-[var(--text-muted)] text-[9px]'
  const labelClass = 'fill-[var(--text-primary)] text-[10px] font-medium'
  const lineClass = 'stroke-[rgba(139,92,246,0.35)]'
  const accentLine = 'stroke-[rgba(59,130,246,0.4)]'

  return (
    <div className="site-card w-full overflow-hidden p-4">
      <svg
        viewBox="0 0 480 360"
        className="h-auto w-full"
        aria-label="Distributed system architecture diagram"
        role="img"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Users */}
        <rect x="190" y="12" width="100" height="36" rx="8" className={nodeClass} />
        <text x="240" y="34" textAnchor="middle" className={labelClass}>
          Users
        </text>

        <line x1="240" y1="48" x2="240" y2="72" className={lineClass} strokeWidth="1.5" />

        {/* API Gateway */}
        <rect x="165" y="72" width="150" height="40" rx="8" className={nodeClass} filter="url(#glow)" />
        <text x="240" y="97" textAnchor="middle" className={labelClass}>
          API Gateway
        </text>

        <line x1="240" y1="112" x2="240" y2="132" className={lineClass} strokeWidth="1.5" />

        {/* Microservices row */}
        {[
          { x: 30, label: 'Auth' },
          { x: 130, label: 'User' },
          { x: 230, label: 'Billing' },
          { x: 330, label: 'Notification' },
        ].map(({ x, label }) => (
          <g key={label}>
            <line x1="240" y1="132" x2={x + 40} y2="148" className={lineClass} strokeWidth="1" />
            <rect x={x} y="148" width="80" height="32" rx="6" className={nodeClass} />
            <text x={x + 40} y="168" textAnchor="middle" className={textClass}>
              {label}
            </text>
            <line x1={x + 40} y1="180" x2="240" y2="210" className={accentLine} strokeWidth="1" strokeDasharray="3 2" />
          </g>
        ))}

        {/* Event Bus */}
        <rect x="140" y="210" width="200" height="36" rx="8" className={nodeClass} filter="url(#glow)" />
        <text x="240" y="232" textAnchor="middle" className={labelClass}>
          Event Bus (Kafka)
        </text>

        {/* Data stores */}
        {[
          { x: 50, label: 'Redis Cache' },
          { x: 190, label: 'PostgreSQL' },
          { x: 330, label: 'Object Storage' },
        ].map(({ x, label }) => (
          <g key={label}>
            <line x1="240" y1="246" x2={x + 50} y2="268" className={accentLine} strokeWidth="1" />
            <rect x={x} y="268" width="100" height="32" rx="6" className={nodeClass} />
            <text x={x + 50} y="288" textAnchor="middle" className={textClass}>
              {label}
            </text>
          </g>
        ))}

        {/* Decorative dots */}
        <circle cx="460" cy="30" r="3" fill="rgba(139,92,246,0.5)" />
        <circle cx="20" cy="300" r="2" fill="rgba(59,130,246,0.4)" />
        <circle cx="450" cy="320" r="2" fill="rgba(139,92,246,0.3)" />
      </svg>
    </div>
  )
}
