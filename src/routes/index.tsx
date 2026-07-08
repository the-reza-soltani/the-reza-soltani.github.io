import { createFileRoute } from '@tanstack/react-router'

import { PortfolioPage } from '#/components/site/portfolio-page'

export const Route = createFileRoute('/')({ component: PortfolioPage })
