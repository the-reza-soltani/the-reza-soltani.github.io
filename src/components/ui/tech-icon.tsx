import { getTechFallback, getTechIcon } from '#/lib/tech-icons'
import { cn } from '#/lib/utils'

type TechIconProps = {
  name: string
  size?: number
  className?: string
}

export function TechIcon({ name, size = 16, className }: TechIconProps) {
  const brand = getTechIcon(name)

  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn('shrink-0', className)}
        aria-label={brand.title}
      >
        <path d={brand.path} fill={`#${brand.hex}`} />
      </svg>
    )
  }

  const fallback = getTechFallback(name)
  const Icon = fallback.icon

  return (
    <Icon
      size={size}
      className={cn('shrink-0', className)}
      style={{ color: fallback.color }}
      aria-hidden
    />
  )
}
