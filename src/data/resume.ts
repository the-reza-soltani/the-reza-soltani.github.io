export type ResumeExperience = {
  slug: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export type ResumeOssProject = {
  name: string
  description: string
  url?: string
}

export type ResumeEducation = {
  school: string
  degree: string
}

export type AiInterestStatus = 'Learning' | 'Building' | 'Experimenting' | 'Exploring'

export type AiInterestTopic = {
  id: string
  title: string
  description: string
  status: AiInterestStatus
}

export type ResumeNavItem = {
  id: string
  label: string
}

export type FeaturedProject = {
  id: string
  title: string
  description: string
  technologies: string[]
  experienceAnchor: string
  icon: 'layers' | 'chart' | 'shield'
}

export type SiteStat = {
  value: string
  label: string
  icon?: 'calendar' | 'building' | 'globe' | 'code'
}

export const resume = {
  name: 'Reza Soltani',
  title: 'Software Engineer | Backend Specialist | Node.js & Distributed Systems',
  contact: {
    email: 'soltanireza65@gmail.com',
    linkedin: 'https://linkedin.com/in/reza-soltani',
    github: 'https://github.com/soltanireza65',
  },
  hero: {
    label: 'Backend Engineer',
    headline: 'Building scalable',
    headlineAccent: 'distributed systems',
    description:
      'I build scalable backend systems and distributed architectures with Node.js, TypeScript, and event-driven microservices — and I am passionate about modern AI and intelligent software systems.',
    techTags: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'Kafka',
      'Docker',
      'Kubernetes',
    ],
    aiTechTags: ['Python', 'LLM APIs', 'LangChain', 'OpenAI API', 'Vector DBs'],
  },
  about: {
    title: 'I build backend systems that scale.',
    description:
      'Senior Software Engineer with 8+ years of experience designing distributed systems, microservices, and high-traffic APIs. Passionate about clean architecture, performance optimization, and mentoring teams.',
    educationNote:
      "Master's Degree in Intelligent Simulator Design — University of Tabriz",
  },
  stats: [
    { value: '8+', label: 'Years Experience', icon: 'calendar' },
    { value: '5+', label: 'Companies', icon: 'building' },
    { value: '100%', label: 'Remote', icon: 'globe' },
    { value: 'Backend', label: 'Specialist', icon: 'code' },
  ] satisfies SiteStat[],
  featuredProjects: [
    {
      id: 'saas-platform',
      title: 'Multi-tenant SaaS Platform',
      description:
        'Designed a multi-tenant SaaS backend using DDD and Hexagonal Architecture, with CQRS and event-driven patterns for high-concurrency workloads.',
      technologies: ['NestJS', 'PostgreSQL', 'Kafka', 'Redis'],
      experienceAnchor: 'daal',
      icon: 'layers',
    },
    {
      id: 'oms-trading',
      title: 'Trading Platform (OMS)',
      description:
        'Built core features for an OMS trading platform and admin dashboard with clean domain boundaries, containerized deployments, and real-time data flows.',
      technologies: ['Node.js', 'Kubernetes', 'PostgreSQL'],
      experienceAnchor: 'xaniis',
      icon: 'chart',
    },
    {
      id: 'identity-service',
      title: 'Identity Service',
      description:
        'Integrated LDAP, OIDC, and Keycloak for scalable authentication across multiple ownCloud instances with SCIM REST API endpoints.',
      technologies: ['Keycloak', 'OIDC', 'TypeScript'],
      experienceAnchor: 'ponder-source',
      icon: 'shield',
    },
  ] satisfies FeaturedProject[],
  aiSection: {
    label: 'AI & Intelligent Systems',
    title: 'Expanding into AI — from a backend engineer\'s perspective',
    description:
      'My core expertise is backend and distributed systems. I am actively learning and building with modern AI tooling — applying the same engineering discipline I use for microservices to LLM applications, retrieval pipelines, and intelligent APIs.',
    topics: [
      {
        id: 'llm-apps',
        title: 'LLM Applications',
        description:
          'Designing production-minded apps that integrate large language models with reliable APIs, guardrails, and observability.',
        status: 'Building',
      },
      {
        id: 'agents',
        title: 'AI Agents',
        description:
          'Exploring agent workflows, tool use, and orchestration patterns for automating complex backend tasks.',
        status: 'Experimenting',
      },
      {
        id: 'rag',
        title: 'RAG',
        description:
          'Retrieval-augmented generation pipelines that connect domain knowledge to LLMs with clean data boundaries.',
        status: 'Learning',
      },
      {
        id: 'mcp',
        title: 'MCP (Model Context Protocol)',
        description:
          'Investigating how MCP enables structured tool and context sharing between AI models and backend services.',
        status: 'Exploring',
      },
      {
        id: 'vector-db',
        title: 'Vector Databases',
        description:
          'Embedding storage, similarity search, and indexing strategies for semantic retrieval at scale.',
        status: 'Learning',
      },
      {
        id: 'semantic-search',
        title: 'Semantic Search',
        description:
          'Building search experiences powered by embeddings rather than keyword matching alone.',
        status: 'Building',
      },
      {
        id: 'ai-apis',
        title: 'AI APIs',
        description:
          'Integrating OpenAI and other model providers into backend services with retries, caching, and cost control.',
        status: 'Building',
      },
      {
        id: 'prompt-eng',
        title: 'Prompt Engineering',
        description:
          'Crafting reliable prompts, system instructions, and structured outputs for consistent model behavior.',
        status: 'Learning',
      },
      {
        id: 'ai-eval',
        title: 'AI Evaluation',
        description:
          'Measuring output quality, latency, and regression risk as AI features evolve in production.',
        status: 'Exploring',
      },
      {
        id: 'ai-infra',
        title: 'AI Infrastructure',
        description:
          'Connecting AI workloads to the same infra I already work with — containers, queues, caches, and CI/CD.',
        status: 'Building',
      },
    ] satisfies AiInterestTopic[],
  },
  summary:
    'Highly skilled Senior Software Engineer, specializing in backend development and system architecture. Expertise in designing and implementing scalable, maintainable, and high-performance solutions using modern software engineering practices such as Domain-Driven Design (DDD), Hexagonal Architecture, and Microservices.',
  skills: {
    languages: ['TypeScript', 'JavaScript', 'Golang', 'Bash'],
    backend: ['Node.js', 'NestJS', 'Express.js', 'WebSockets'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    messaging: ['RabbitMQ', 'Kafka'],
    devops: [
      'Docker',
      'Kubernetes',
      'Nginx',
      'GitLab CI/CD',
      'GitHub Actions',
    ],
    architecture: [
      'DDD',
      'CQRS',
      'Hexagonal',
      'Microservices',
      'Event-Driven',
    ],
    others: ['Linux', 'Git', 'Unit Testing', 'E2E Testing', 'OAuth', 'Keycloak'],
  },
  experience: [
    {
      slug: 'daal',
      company: 'Daal',
      role: 'Backend Developer',
      period: 'Feb 2024 – Present',
      location: 'Remote',
      summary:
        'Refactored high-traffic backend to Hexagonal Architecture and designed multi-tenant SaaS with CQRS and event-driven patterns.',
      highlights: [
        'Refactored a high-traffic backend codebase to Hexagonal Architecture, improving maintainability and scalability by 50%.',
        'Designed a multi-tenant SaaS backend using Domain-Driven Design for modular business logic.',
        'Designed optimized PostgreSQL schemas, reducing query times by 50%.',
        'Implemented CQRS & event-driven patterns to handle high-concurrency workloads efficiently.',
        'Optimized API performance using Redis caching and load balancing techniques.',
        'Automated CI/CD pipelines with GitLab, reducing deployment efforts by 90%.',
        'Eliminated distributed locks across services to reduce race conditions and improve consistency.',
      ],
      technologies: [
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'Prisma ORM',
        'RabbitMQ',
        'Kafka',
        'Docker',
        'GitLab CI/CD',
        'Redis',
      ],
    },
    {
      slug: 'ponder-source',
      company: 'Stichting Ponder Source',
      role: 'Software Engineer',
      period: 'Jan 2023 – Feb 2024',
      location: 'Remote',
      summary:
        'Built identity integrations with Keycloak/OIDC and contributed to Solid Data Modules for interoperable RDF data.',
      highlights: [
        'Contributed to the Solid Data Modules project — modular JS/TS libraries for reading and writing Solid Pod data, enabling interoperability between RDF data formats.',
        'Integrated LDAP, OIDC, and Keycloak for scalable authentication across multiple ownCloud instances.',
        'Developed SCIM REST API endpoints with 100% unit test coverage, improving maintainability.',
        'Introduced a monorepo setup with Turborepo, reducing build times by 40%.',
        'Automated API documentation processes for improved developer experience.',
        'Automated TLS and reverse proxy setups, cutting deployment time by 80%.',
      ],
      technologies: ['Node.js', 'TypeScript', 'Nginx', 'Docker', 'Keycloak'],
    },
    {
      slug: 'xaniis',
      company: 'Xaniis',
      role: 'Software Engineer',
      period: 'Feb 2021 – Feb 2023',
      location: 'Remote',
      summary:
        'Built OMS trading platform features with Hexagonal Architecture, Docker/Kubernetes deployments, and team mentorship.',
      highlights: [
        'Introduced and applied Hexagonal Architecture principles to establish clean boundaries between domains, resulting in more maintainable and testable services.',
        'Containerized applications and standardized deployment processes using Docker and Kubernetes, reducing release friction and improving operational consistency.',
        'Provided mentorship through code reviews and architectural guidance, helping elevate code quality and technical decision-making within the team.',
        'Built core features for both the OMS trading platform and internal Admin Dashboard, focusing on performance, usability, and long-term maintainability.',
        'Developed modular and reusable frontend components using React, Next.js, TypeScript, and enforced consistent state management patterns using TanStack Query and Recoil.',
      ],
      technologies: [
        'Node.js',
        'Kubernetes',
        'Docker',
        'Nginx',
        'PostgreSQL',
        'RabbitMQ',
        'Redis',
      ],
    },
    {
      slug: 'tarnamagostar',
      company: 'Tarnamagostar',
      role: 'Backend Developer',
      period: 'Jun 2020 – Jan 2021',
      location: 'Remote',
      summary:
        'Architected NestJS microservices with RabbitMQ messaging, Redis caching, and GitLab CI/CD pipelines.',
      highlights: [
        'Architected scalable microservices with NestJS, supporting high-concurrency operations.',
        'Optimized inter-service communication using RabbitMQ, reducing latency by 30%.',
        'Deployed CI/CD pipelines on GitLab, automating builds, tests, and deployments.',
        'Integrated Redis caching for real-time data processing, improving responsiveness by 50%.',
        'Enhanced observability with logging & monitoring solutions (Winston, ELK Stack).',
      ],
      technologies: [
        'Node.js',
        'NestJS',
        'RabbitMQ',
        'Docker',
        'CI/CD',
        'TypeScript',
        'ELK Stack',
      ],
    },
    {
      slug: 'citek',
      company: 'CITEK',
      role: 'Backend Developer',
      period: 'Jan 2019 – May 2020',
      location: 'Remote',
      summary:
        'Built RESTful APIs for 5+ applications with RBAC, MongoDB optimization, and Docker containerization.',
      highlights: [
        'Built and deployed scalable RESTful APIs with Node.js & Express.js for 5+ applications.',
        'Improved backend performance by 40% through database indexing in MongoDB.',
        'Designed a role-based access control (RBAC) system for secure user management.',
        'Containerized applications using Docker, ensuring consistency across environments.',
        'Delivered backend features in Agile sprints, ensuring on-time releases.',
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Docker',
        'Nginx',
        'Redis',
        'OAuth',
      ],
    },
    {
      slug: 'freelance',
      company: 'Freelance',
      role: 'Software Developer',
      period: 'Jan 2017 – Dec 2018',
      location: 'Remote',
      summary:
        'Delivered backend features for e-commerce platforms, custom APIs, and full-stack client solutions.',
      highlights: [
        'Developed and maintained backend features for multiple e-commerce platforms, including custom APIs, payment integrations, and order processing workflows.',
        'Built custom WordPress plugins and optimized existing ones to improve performance, security, and maintainability.',
        'Designed reusable backend modules in Node.js and PHP, establishing early patterns in modular and layered architecture.',
        'Collaborated with clients to deliver full-stack solutions, including dashboards, admin panels, and automation tools.',
        'Gained practical experience in system design, API development, Git workflows, and production deployments.',
      ],
      technologies: [
        'Node.js',
        'PHP',
        'WordPress',
        'MySQL',
        'JavaScript',
        'Git',
        'Linux',
      ],
    },
  ] satisfies ResumeExperience[],
  oss: [
    {
      name: 'Nestified',
      description:
        'A collection of high-quality NestJS utilities, modules, and tooling — crafted to make building backend applications faster, cleaner, and more maintainable.',
      url: 'https://github.com/soltanireza65',
    },
    {
      name: 'Solid Data Modules',
      description:
        'Developed modular JavaScript code for reading and writing specific data types in Solid Pods, ensuring interoperability with diverse data formats.',
      url: 'https://github.com/soltanireza65',
    },
  ] satisfies ResumeOssProject[],
  education: [
    {
      school: 'University of Tabriz',
      degree: "Master's Degree in Intelligent Simulator Design",
    },
  ] satisfies ResumeEducation[],
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai', label: 'AI' },
    { id: 'oss', label: 'OSS' },
    { id: 'contact', label: 'Contact' },
  ] satisfies ResumeNavItem[],
}
