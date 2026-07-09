import type { LucideIcon } from 'lucide-react'
import {
  siCaddy,
  siDocker,
  siElasticsearch,
  siExpress,
  siGit,
  siGithubactions,
  siGitlab,
  siGo,
  siGnubash,
  siJavascript,
  siApachekafka,
  siKeycloak,
  siKubernetes,
  siLinux,
  siMinio,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siOpenid,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siLangchain,
  siRabbitmq,
  siReact,
  siRedis,
  siSolid,
  siTailwindcss,
  siTypescript,
  siVitest,
  siWordpress,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import {
  Blocks,
  Box,
  Brain,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Network,
  Radio,
  Search,
  Server,
  Shield,
  Sparkles,
  TestTube,
  Workflow,
  Zap,
} from 'lucide-react'

export type TechIconData = {
  path: string
  hex: string
  title: string
}

export type TechFallback = {
  type: 'lucide'
  icon: LucideIcon
  color: string
}

const SIMPLE_ICON_MAP: Record<string, SimpleIcon> = {
  'Node.js': siNodedotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  NestJS: siNestjs,
  'Express.js': siExpress,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Kafka: siApachekafka,
  RabbitMQ: siRabbitmq,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Nginx: siNginx,
  Caddy: siCaddy,
  'GitLab CI/CD': siGitlab,
  'Github Actions': siGithubactions,
  Golang: siGo,
  Bash: siGnubash,
  Linux: siLinux,
  Git: siGit,
  Keycloak: siKeycloak,
  OAuth: siOpenid,
  OIDC: siOpenid,
  'Prisma ORM': siPrisma,
  PHP: siPhp,
  WordPress: siWordpress,
  MySQL: siMysql,
  'Next.js': siNextdotjs,
  'React.js': siReact,
  Tanstack: siReact,
  'Tailwind CSS': siTailwindcss,
  'ELK Stack': siElasticsearch,
  'Solid Data Modules': siSolid,
  'Object Storage': siMinio,
  'Amazon S3': siMinio,
  Vitest: siVitest,
  Python: siPython,
  LangChain: siLangchain,
}

const FALLBACK_MAP: Record<string, TechFallback> = {
  'REST APIs': { type: 'lucide', icon: Globe, color: '#3b82f6' },
  WebSockets: { type: 'lucide', icon: Radio, color: '#8b5cf6' },
  DDD: { type: 'lucide', icon: Layers, color: '#8b5cf6' },
  CQRS: { type: 'lucide', icon: Workflow, color: '#f59e0b' },
  Hexagonal: { type: 'lucide', icon: Box, color: '#10b981' },
  Microservices: { type: 'lucide', icon: Blocks, color: '#3b82f6' },
  'Distributed Systems': { type: 'lucide', icon: Network, color: '#22c55e' },
  'Event-Driven': { type: 'lucide', icon: Zap, color: '#f59e0b' },
  'CI/CD': { type: 'lucide', icon: GitBranch, color: '#f97316' },
  'Unit Testing': { type: 'lucide', icon: TestTube, color: '#22c55e' },
  'E2E Testing': { type: 'lucide', icon: TestTube, color: '#14b8a6' },
  'API Security': { type: 'lucide', icon: Shield, color: '#ef4444' },
  Caching: { type: 'lucide', icon: Database, color: '#ef4444' },
  'Load Balancing': { type: 'lucide', icon: Network, color: '#06b6d4' },
  'Reverse Proxy': { type: 'lucide', icon: Server, color: '#0ea5e9' },
  Profiling: { type: 'lucide', icon: Code2, color: '#a855f7' },
  Users: { type: 'lucide', icon: Network, color: '#3b82f6' },
  'API Gateway': { type: 'lucide', icon: Server, color: '#8b5cf6' },
  'Auth Service': { type: 'lucide', icon: Shield, color: '#10b981' },
  'User Service': { type: 'lucide', icon: Network, color: '#3b82f6' },
  'Billing Service': { type: 'lucide', icon: Boxes, color: '#f59e0b' },
  'Notification Service': { type: 'lucide', icon: Zap, color: '#a855f7' },
  'Event Bus (Kafka)': { type: 'lucide', icon: Zap, color: '#f59e0b' },
  'Redis Cache': { type: 'lucide', icon: Database, color: '#ef4444' },
  'PostgreSQL Database': { type: 'lucide', icon: Database, color: '#3b82f6' },
  'Object Storage (MinIO / S3)': { type: 'lucide', icon: Cloud, color: '#10b981' },
  LDAP: { type: 'lucide', icon: Lock, color: '#6366f1' },
  SCIM: { type: 'lucide', icon: Shield, color: '#8b5cf6' },
  Turborepo: { type: 'lucide', icon: Workflow, color: '#ef4444' },
  Winston: { type: 'lucide', icon: Code2, color: '#64748b' },
  Recoil: { type: 'lucide', icon: Boxes, color: '#61dafb' },
  RBAC: { type: 'lucide', icon: Lock, color: '#f59e0b' },
  'LLM APIs': { type: 'lucide', icon: Sparkles, color: '#22d3ee' },
  'OpenAI API': { type: 'lucide', icon: Sparkles, color: '#10b981' },
  'Vector DBs': { type: 'lucide', icon: Database, color: '#f59e0b' },
  'AI / ML Services': { type: 'lucide', icon: Brain, color: '#22d3ee' },
  RAG: { type: 'lucide', icon: Search, color: '#8b5cf6' },
  MCP: { type: 'lucide', icon: Network, color: '#a855f7' },
}

export function getTechIcon(name: string): TechIconData | null {
  const icon = SIMPLE_ICON_MAP[name]
  if (!icon) return null
  return { path: icon.path, hex: icon.hex, title: icon.title }
}

export function getTechFallback(name: string): TechFallback {
  return (
    FALLBACK_MAP[name] ?? {
      type: 'lucide',
      icon: Code2,
      color: '#94a3b8',
    }
  )
}

export function hasBrandIcon(name: string): boolean {
  return name in SIMPLE_ICON_MAP
}
