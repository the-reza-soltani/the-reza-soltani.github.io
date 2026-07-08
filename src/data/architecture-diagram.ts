import type { LucideIcon } from 'lucide-react'
import {
  Bell,
  CreditCard,
  Server,
  Shield,
  User,
  Users,
  Zap,
} from 'lucide-react'

export type DiagramNode = {
  id: string
  label: string
  icon?: LucideIcon
  techName?: string
  accent: string
  accentBg: string
  glow?: boolean
}

export const architectureDiagram = {
  top: {
    id: 'users',
    label: 'Users',
    icon: Users,
    accent: '#3b82f6',
    accentBg: 'rgba(59, 130, 246, 0.15)',
  } satisfies DiagramNode,
  gateway: {
    id: 'gateway',
    label: 'API Gateway',
    icon: Server,
    accent: '#8b5cf6',
    accentBg: 'rgba(139, 92, 246, 0.15)',
    glow: true,
  } satisfies DiagramNode,
  services: [
    {
      id: 'auth',
      label: 'Auth Service',
      icon: Shield,
      accent: '#10b981',
      accentBg: 'rgba(16, 185, 129, 0.15)',
    },
    {
      id: 'user',
      label: 'User Service',
      icon: User,
      accent: '#3b82f6',
      accentBg: 'rgba(59, 130, 246, 0.15)',
    },
    {
      id: 'billing',
      label: 'Billing Service',
      icon: CreditCard,
      accent: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.15)',
    },
    {
      id: 'notification',
      label: 'Notification Service',
      icon: Bell,
      accent: '#a855f7',
      accentBg: 'rgba(168, 85, 247, 0.15)',
    },
  ] satisfies DiagramNode[],
  eventBus: {
    id: 'kafka',
    label: 'Event Bus (Kafka)',
    icon: Zap,
    techName: 'Kafka',
    accent: '#f59e0b',
    accentBg: 'rgba(245, 158, 11, 0.15)',
    glow: true,
  } satisfies DiagramNode,
  dataStores: [
    {
      id: 'redis',
      label: 'Redis Cache',
      techName: 'Redis',
      accent: '#ef4444',
      accentBg: 'rgba(239, 68, 68, 0.15)',
    },
    {
      id: 'postgres',
      label: 'PostgreSQL Database',
      techName: 'PostgreSQL',
      accent: '#3b82f6',
      accentBg: 'rgba(59, 130, 246, 0.15)',
    },
    {
      id: 'storage',
      label: 'Object Storage (MinIO / S3)',
      techName: 'Object Storage',
      accent: '#10b981',
      accentBg: 'rgba(16, 185, 129, 0.15)',
    },
  ] satisfies DiagramNode[],
}
