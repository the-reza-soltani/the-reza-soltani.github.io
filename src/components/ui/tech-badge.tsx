import { TechIcon } from '#/components/ui/tech-icon'
import { cn } from '#/lib/utils'

type TechBadgeProps = {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1 text-xs text-[var(--text-muted)]',
        className,
      )}
    >
      <TechIcon name={name} size={14} />
      {name}
    </span>
  )
}
