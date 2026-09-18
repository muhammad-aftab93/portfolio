import {
  ProfileMetadata,
  CareerMilestone,
  SkillItem,
  ProjectItem,
  TestimonialItem,
  ContactFormData,
} from '../types';

export class ProfileDataService {
  private static instance: ProfileDataService;

  public static getInstance(): ProfileDataService {
    if (!ProfileDataService.instance) {
      ProfileDataService.instance = new ProfileDataService();
    }
    return ProfileDataService.instance;
  }

  public readonly profile: ProfileMetadata = {
    name: 'Muhammad Aftab Hameed',
    title: 'Senior Software Engineer',
    level: 'Senior Software Engineer @ Glaston',
    yearsOfExperience: 9,
    location: 'Tampere, Finland',
    phone: '(+358) 41 4750481',
    availability: 'Senior Software Engineer @ Glaston (Open to Consulting & Technical Leadership)',
    bio: 'Senior Software Engineer with 9+ years of experience delivering full-stack software solutions using .NET, C#, React, Angular, TypeScript, Azure, and cloud-native architectures. Experienced in consulting environments, system design, API development, and technical leadership. Strong advocate of AI-augmented software engineering using GitHub Copilot and Cursor. Skilled at translating business requirements into scalable, secure, and maintainable solutions while mentoring teams and driving engineering excellence.',
    avatarUrl: '/avatar.jpg',
    education: [
      {
        degree: 'Master of Science in Information Technology',
        institution: 'Tampere University',
        period: 'Graduated: 2025',
        location: 'Tampere, Finland',
        grade: 'GPA 3.5',
        thesis: 'Security Automation in DevOps: Detection and mitigation of vulnerabilities in DevOps pipeline',
        details: 'Specialized in Software Engineering, security automation in DevOps pipelines, distributed system architecture, cloud platforms, and modern web systems.',
      },
      {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'National University of Modern Languages',
        period: 'Graduated: 2017',
        location: 'Islamabad, Pakistan',
        grade: 'Graduated with Distinction',
        details: 'Rigorous computer science foundation: algorithms, object-oriented software engineering, relational database design, data structures, and distributed computing.',
      },
    ],
    services: [
      'Web Design',
      'Web Development',
      'Database Development',
      'Application Development',
      'Custom Software Development',
    ],
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/muhammad-aftab93/',
      medium: 'https://medium.com',
      email: 'muhammad.aftab93@yahoo.com',
    },
    metrics: [
      { label: 'Engineering Experience', value: '9+ Years', caption: '.NET, C#, React, Angular, Azure & Cloud' },
      { label: 'Cloud & Systems', value: 'Azure & IoT', caption: 'Azure Functions, SQL, Blob Storage & ABB Robotics' },
      { label: 'AI-Augmented Dev', value: 'Copilot & Cursor', caption: 'AI-driven design, refactoring & testing' },
      { label: 'Industrial Automation', value: 'OPC UA & RWS', caption: 'High-reliability Glaston machinery' },
    ],
  };

  public readonly experienceMilestones: CareerMilestone[] = [
    {
      id: 'glaston-sr-swe',
      role: 'Senior Software Engineer',
      company: 'Glaston',
      location: 'Tampere, Finland',
      period: 'January 2023 — Present',
      type: 'Full-time',
      summary: 'Designing and engineering mission-critical greenfield and telemetry systems for industrial glass processing machinery at Glaston in Tampere, Finland.',
      accomplishments: [
        'Designed and developed a new system from scratch using .Net 10 / C# (APIs), GRPC, establishing communication with ABB Robot via Robot Web Services (RWS), resulting in faster robot integration.',
        'Maintained and enhanced existing systems using .Net / C#, OPC UA, TwinCAT 3, PLC, and MS SQL Server.',
        'Developed and executed comprehensive unit tests (xUnit, NSubstitute) guaranteeing continuous reliability across industrial automation workflows.',
      ],
      technologies: ['.Net 10', 'C# (APIs)', 'gRPC', 'ABB Robot Web Services (RWS)', 'OPC UA', 'TwinCAT 3', 'PLC', 'MS SQL Server', 'xUnit', 'NSubstitute'],
      metrics: [
        { label: 'Robot Integration', value: 'Faster Setup' },
        { label: 'Architecture', value: '.Net 10 / gRPC' },
        { label: 'Testing', value: 'xUnit & NSub' },
      ],
    },
    {
      id: 'ciklum-sr-swe',
      role: 'Senior Software Engineer',
      company: 'Ciklum',
      location: 'Islamabad, Pakistan',
      period: 'December 2021 — October 2022',
      type: 'Full-time',
      summary: 'Delivered full-stack cloud enterprise solutions and microservices on Microsoft Azure while engaging directly with international clients.',
      accomplishments: [
        'Designed and developed APIs and frontend applications while leveraging Azure services (Azure Functions, KeyVault, Blob Storage, Azure SQL) to optimize performance and reduce cloud infrastructure costs.',
        'Worked directly with customers to gather requirements and translate business needs into technical solutions.',
        'Participated in architectural discussions and technical planning with stakeholders.',
        'Collaborated with cross-functional teams across multiple countries delivering resilient, high-quality features.',
      ],
      technologies: ['Microsoft Azure', 'Azure Functions', 'Azure Key Vault', 'Azure Blob Storage', 'Azure SQL', 'APIs', 'React', 'Angular', 'TypeScript', 'Node.js'],
      metrics: [
        { label: 'Cloud Platform', value: 'Azure Cloud' },
        { label: 'Cost & Perf', value: 'Optimized' },
        { label: 'Collaboration', value: 'Multi-country' },
      ],
    },
    {
      id: 'lmkr-consultant',
      role: 'Software Consultant',
      company: 'LMKR',
      location: 'Islamabad, Pakistan',
      period: 'December 2021 — May 2022',
      type: 'Contract',
      summary: 'Specialized software consultancy building domain connectors and web applications for geoscience exploration systems.',
      accomplishments: [
        'Developed C#-based Petrel connector for DSIS using OCEAN SDK and implemented new features in an Angular 10 app.',
        'Built Node.js Web APIs and optimized database queries to enhance system efficiency.',
      ],
      technologies: ['C#', 'OCEAN SDK', 'Petrel Connector', 'DSIS', 'Angular 10', 'Node.js', 'Web APIs', 'Database Query Optimization'],
      metrics: [
        { label: 'Connector', value: 'OCEAN SDK' },
        { label: 'Frontend', value: 'Angular 10' },
        { label: 'APIs', value: 'Node.js APIs' },
      ],
    },
    {
      id: 'lmkr-designer',
      role: 'Application Designer',
      company: 'LMKR',
      location: 'Islamabad, Pakistan',
      period: 'September 2020 — November 2021',
      type: 'Full-time',
      summary: 'Architected geoscience connectors, application design, and responsive client features for subsurface data workflows.',
      accomplishments: [
        'Developed C# Petrel connector for DSIS, Web APIs using Node.js, and Angular 10 app features, contributing to system reliability improvements.',
      ],
      technologies: ['C#', 'OCEAN SDK', 'Petrel Connector', 'DSIS', 'Angular 10', 'Node.js', 'Web APIs', 'System Reliability'],
      metrics: [
        { label: 'Integration', value: 'DSIS Petrel' },
        { label: 'Reliability', value: 'Enhanced' },
      ],
    },
    {
      id: 'dpl-swe',
      role: 'Software Engineer',
      company: 'DPL',
      location: 'Islamabad, Pakistan',
      period: 'August 2019 — August 2020',
      type: 'Full-time',
      summary: 'Engineered corporate HR and automated billing systems to streamline business operations.',
      accomplishments: [
        'Developed nGage HR & Billing System, streamlining HR operations and improving process automation.',
      ],
      technologies: ['Full-Stack', 'C# / .NET', 'nGage HR & Billing System', 'Process Automation', 'Web APIs', 'SQL Server'],
      metrics: [
        { label: 'System', value: 'nGage HR & Billing' },
        { label: 'Impact', value: 'Process Automation' },
      ],
    },
    {
      id: 'aksa-sds-jr-swe',
      role: 'Junior Software Engineer',
      company: 'AKSA SDS',
      location: 'Islamabad, Pakistan',
      period: 'May 2018 — June 2019',
      type: 'Full-time',
      summary: 'Built Web APIs and robust database backends for electric vehicle charging infrastructure, microfinance, and the United Nations.',
      accomplishments: [
        'Built Web APIs and databases for an electric vehicle charging project and microfinance banking system.',
        'Developed a Web API and web portal for the United Nations Office for Project Services (UNOPS).',
      ],
      technologies: ['Web APIs', 'Databases', 'EV Charging Project', 'Microfinance Banking', 'UNOPS Portal', 'SQL'],
      metrics: [
        { label: 'Global Partner', value: 'UNOPS Portal' },
        { label: 'Domain', value: 'EV & Banking' },
      ],
    },
    {
      id: 'agico-officer',
      role: 'Executive Officer (.Net Developer)',
      company: 'AGICO',
      location: 'Rawalpindi, Pakistan',
      period: 'August 2017 — May 2018',
      type: 'Full-time',
      summary: 'Engineered .NET task management systems and enhanced enterprise HR software modules.',
      accomplishments: [
        'Developed a Task Management System (IMS Help Desk) and improved HR modules in WalletHR using .NET (C#), Web Forms, and MS SQL Server, contributing to make HR operations easier and improved.',
      ],
      technologies: ['.NET (C#)', 'Web Forms', 'MS SQL Server', 'IMS Help Desk', 'WalletHR'],
      metrics: [
        { label: 'Enterprise Apps', value: 'IMS Help Desk' },
        { label: 'HR Suite', value: 'WalletHR' },
      ],
    },
  ];

  public readonly skills: SkillItem[] = [
    // Languages
    {
      id: 'csharp',
      name: 'C#',
      category: 'Languages',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: '.NET 10, C# modern language features, LINQ, async/await, gRPC APIs, and high-performance server logic',
    },
    {
      id: 'ts',
      name: 'TypeScript',
      category: 'Languages',
      level: 'Mastery',
      yearsOfExperience: 8,
      coreStack: true,
      description: 'Strict type systems, mapped types, conditional types, generic variance, and enterprise application scale',
    },
    {
      id: 'js',
      name: 'JavaScript',
      category: 'Languages',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: 'Modern ESNext semantics, asynchronous programming, event loop mechanics, and browser DOM rendering',
    },
    {
      id: 'sql',
      name: 'SQL',
      category: 'Languages',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: 'Complex joins, query tuning, indexing strategies, stored procedures, and transactional integrity',
    },

    // Frameworks & Libraries
    {
      id: 'dotnet',
      name: '.NET / .Net Core',
      category: 'Frameworks & Libraries',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: '.NET 10, ASP.NET Core Web APIs, gRPC services, dependency injection, and high-availability enterprise services',
    },
    {
      id: 'angular',
      name: 'Angular',
      category: 'Frameworks & Libraries',
      level: 'Mastery',
      yearsOfExperience: 8,
      coreStack: true,
      description: 'Angular 10 through 18/19+, Signals, Standalone components, Deferrable Views, RxJS reactive architecture',
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frameworks & Libraries',
      level: 'Mastery',
      yearsOfExperience: 6,
      coreStack: true,
      description: 'Functional components, hooks, modern state management, server-side rendering, and responsive UI systems',
    },

    // Cloud & DevOps
    {
      id: 'azure',
      name: 'Microsoft Azure',
      category: 'Cloud & DevOps',
      level: 'Mastery',
      yearsOfExperience: 6,
      coreStack: true,
      description: 'Azure Functions, Azure Key Vault, Azure Blob Storage, Azure SQL, and Cosmos DB optimization',
    },
    {
      id: 'docker',
      name: 'Docker & Containers',
      category: 'Cloud & DevOps',
      level: 'Expert',
      yearsOfExperience: 6,
      coreStack: true,
      description: 'Multi-stage Docker builds, container orchestration, edge machinery deployment, and environment parity',
    },
    {
      id: 'cicd',
      name: 'CI/CD Pipelines & DevSecOps',
      category: 'Cloud & DevOps',
      level: 'Mastery',
      yearsOfExperience: 7,
      coreStack: true,
      description: 'Automated CI/CD pipelines, security vulnerability automation in DevOps pipelines, test gates',
    },
    {
      id: 'git',
      name: 'Git Version Control',
      category: 'Cloud & DevOps',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: 'Branching models, Git workflows, pull request reviews, history rewriting, and collaborative team hygiene',
    },

    // Databases & Testing
    {
      id: 'mssql',
      name: 'MS SQL Server & Relational DBs',
      category: 'Databases & Testing',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: 'MS SQL Server, PostgreSQL, MySQL, Oracle, SQLite, schema normalization, and query performance tuning',
    },
    {
      id: 'graphql-rest',
      name: 'GraphQL & RESTful APIs',
      category: 'Databases & Testing',
      level: 'Expert',
      yearsOfExperience: 8,
      coreStack: true,
      description: 'API design & development, RESTful APIs, contract-first schemas, and high-throughput endpoints',
    },
    {
      id: 'testing-suites',
      name: 'Unit Testing & Quality Assurance',
      category: 'Databases & Testing',
      level: 'Mastery',
      yearsOfExperience: 8,
      coreStack: true,
      description: 'xUnit, NUnit, NSubstitute, Fluent Assertions, Test-Driven Development (TDD), and comprehensive test suites',
    },

    // Industrial & Protocols
    {
      id: 'opc-ua',
      name: 'OPC UA & Industrial Telemetry',
      category: 'Industrial & Protocols',
      level: 'Mastery',
      yearsOfExperience: 4,
      coreStack: true,
      description: 'OPC UA server/client architecture, industrial machine telemetry, and real-time plant data streams',
    },
    {
      id: 'abb-robotics',
      name: 'ABB Robot Web Services (RWS)',
      category: 'Industrial & Protocols',
      level: 'Mastery',
      yearsOfExperience: 3,
      coreStack: true,
      description: 'Establishing communication with ABB Robots via Robot Web Services (RWS) for accelerated robot integration',
    },
    {
      id: 'twincat-plc',
      name: 'TwinCAT 3 & PLC Communication',
      category: 'Industrial & Protocols',
      level: 'Mastery',
      yearsOfExperience: 3,
      coreStack: true,
      description: 'TwinCAT 3, PLC communication protocols, hardware sensor signals, and low-latency control logic',
    },

    // AI & Agentic Development
    {
      id: 'copilot-cursor',
      name: 'GitHub Copilot & Cursor (AI-Augmented)',
      category: 'AI & Agentic Development',
      level: 'Mastery',
      yearsOfExperience: 3,
      coreStack: true,
      description: 'Daily user of GitHub Copilot and Cursor for design, implementation, refactoring, testing, debugging, and documentation',
    },
    {
      id: 'ai-dev-practices',
      name: 'AI-Assisted Development Practices',
      category: 'AI & Agentic Development',
      level: 'Mastery',
      yearsOfExperience: 3,
      coreStack: true,
      description: 'Built AI-assisted development practices that improve developer productivity and code quality across engineering teams',
    },
    {
      id: 'ai-code-governance',
      name: 'AI Code Quality & Security Assessment',
      category: 'AI & Agentic Development',
      level: 'Mastery',
      yearsOfExperience: 3,
      coreStack: true,
      description: 'Experience assessing AI-generated code quality, security implications, architectural soundness, and maintainability',
    },

    // Architecture & Leadership
    {
      id: 'tech-leadership',
      name: 'Technical Leadership & System Design',
      category: 'Architecture & Leadership',
      level: 'Mastery',
      yearsOfExperience: 8,
      coreStack: true,
      description: 'Led architecture and technology decisions for enterprise applications; client-side and server-side architecture',
    },
    {
      id: 'mentorship',
      name: 'Engineering Mentorship & Code Reviews',
      category: 'Architecture & Leadership',
      level: 'Mastery',
      yearsOfExperience: 8,
      coreStack: true,
      description: 'Mentored developers through structured code reviews, technical workshops, and knowledge-sharing sessions',
    },
    {
      id: 'solid-practices',
      name: 'SOLID Principles & Best Practices',
      category: 'Architecture & Leadership',
      level: 'Mastery',
      yearsOfExperience: 9,
      coreStack: true,
      description: 'Promoted software engineering best practices including SOLID principles, testing, event-driven design, and CI/CD',
    },
    {
      id: 'estimation-risk',
      name: 'Technical Planning & Risk Assessment',
      category: 'Architecture & Leadership',
      level: 'Mastery',
      yearsOfExperience: 7,
      coreStack: true,
      description: 'Contributed to project estimation, technical planning, stakeholder discussions, and architectural risk assessment',
    },
    {
      id: 'security-protocols',
      name: 'gRPC, Secure Programming & Compliance',
      category: 'Architecture & Leadership',
      level: 'Mastery',
      yearsOfExperience: 7,
      coreStack: false,
      description: 'gRPC, JWT, WebView2, cryptography, cybersecurity, and privacy compliance across enterprise solutions',
    },
  ];

  public readonly projects: ProjectItem[] = [
    {
      id: 'glaston-industrial-telemetry',
      title: 'Industrial Telemetry & Edge Machinery Control',
      category: 'Cloud/Backend',
      featured: true,
      tagline: 'Real-time telemetry and industrial line visualization platform for smart glass manufacturing at Glaston.',
      summary: 'A mission-critical edge-to-cloud industrial platform connecting glass processing lines across worldwide manufacturing plants to real-time operator consoles and cloud analytics.',
      architectureOverview: 'Industrial PLC controllers and edge telemetry nodes stream sensor readings and fault signals over secure protocols to a resilient Node.js / NestJS ingestion layer. Telemetry packets are validated and buffered using Redis streams before persistence into time-series partitioned PostgreSQL. The Angular 18/19 frontend subscribes via reactive RxJS WebSocket streams, rendering live machinery telemetry with zero UI stutter.',
      keyArchitecturalDecisions: [
        'Built high-reliability bidirectional edge telemetry synchronization with automatic reconnection and offline replay buffering.',
        'Engineered reactive Angular operator UI with zoneless change detection and Signals for real-time sensor updates.',
        'Achieved sub-50ms glass processing line state telemetry streaming to global plant managers.',
        'Containerized edge services with Docker for standardized zero-downtime deployment across worldwide manufacturing sites.',
      ],
      technologies: ['Angular 18/19', 'TypeScript', 'Node.js', 'NestJS', 'Industrial IoT', 'PostgreSQL', 'Redis', 'Docker', 'RxJS', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://glaston.net',
      metrics: ['Worldwide Fleet', '<50ms Latency', '99.98% Uptime', 'Zero Packet Loss'],
      thumbnailGradient: 'from-cyan-900/60 via-blue-900/40 to-slate-900/80',
      architectureDiagramType: 'kafka-pipeline',
    },
    {
      id: 'enterprise-mfe-portal',
      title: 'Enterprise Scalable Web Portal Ecosystem',
      category: 'Frontend architectures',
      featured: true,
      tagline: 'Modular Angular 18/19 enterprise platform using Standalone components, Signals, and Deferrable Views.',
      summary: 'An enterprise architecture unifying multi-tenant business applications into an independently deployable, lightning-fast web ecosystem.',
      architectureOverview: 'Architected with modern Angular standalone components and an atomic Signals-driven state mesh. Features optimized Deferrable Views (@defer) with skeleton placeholders to maximize Core Web Vitals and eliminate layout shifts across complex enterprise dashboards.',
      keyArchitecturalDecisions: [
        'Migrated monolithic frontend modules to standalone Angular components with Signals state reactivity.',
        'Integrated Deferrable Views (@defer) to lazy-load complex data grids and interactive telemetry canvases on viewport demand.',
        'Enforced strict TypeScript contracts and automated accessibility (WCAG 2.1 AA) benchmarks in CI/CD.',
        'Reduced median initial bundle payload by 40% using modern ES build tree-shaking and route prefetching.',
      ],
      technologies: ['Angular 18/19', 'TypeScript', 'Angular Signals', 'Tailwind CSS', 'RxJS', 'Vite', 'Docker'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://www.linkedin.com/in/muhammad-aftab93/',
      metrics: ['40% Smaller Bundle', '98+ Lighthouse', 'Angular 18/19 Signals', 'Zero Layout Shift'],
      thumbnailGradient: 'from-violet-900/60 via-purple-900/40 to-slate-900/80',
      architectureDiagramType: 'micro-frontend',
    },
    {
      id: 'geoscience-spatial-engine',
      title: 'Geoscience Spatial Data & Seismic Viewer',
      category: 'Open Source',
      featured: false,
      tagline: 'High-performance spatial coordinate transformation and geological dataset exploration engine.',
      summary: 'Specialized spatial algorithms and high-throughput interactive visualizers engineered for subsurface wellbore coordinates and seismic data exploration at LMKR.',
      architectureOverview: 'Designed with optimized HTML5 Canvas and WebGL rendering pipelines capable of mapping dense geological telemetry and seismic trace data without dropping frames. Coordinates multi-gigabyte dataset partitioning with backend PostgreSQL spatial queries.',
      keyArchitecturalDecisions: [
        'Implemented custom spatial indexing algorithms for sub-second search across terabytes of subsurface exploration data.',
        'Achieved fluid 60 FPS viewport rendering of massive multi-point coordinate sets.',
        'Developed clean RESTful data extraction pipelines for geoscientific analysis.',
      ],
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'Spatial Algorithms', 'WebGL', 'Docker'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://www.linkedin.com/in/muhammad-aftab93/',
      metrics: ['60 FPS Rendering', 'Terabytes Indexed', 'Sub-second Query', 'Precision Math'],
      thumbnailGradient: 'from-emerald-900/60 via-teal-900/40 to-slate-900/80',
      architectureDiagramType: 'signal-mesh',
    },
    {
      id: 'distributed-caching-service',
      title: 'High-Concurrency Microservice & Caching Tier',
      category: 'Cloud/Backend',
      featured: false,
      tagline: 'Scalable REST/GraphQL microservices architecture with distributed Redis caching and database optimization.',
      summary: 'Engineered robust multi-tenant backend services at Ciklum, cutting query latency by 55% and shielding core databases from peak traffic surges.',
      architectureOverview: 'Leverages Node.js, Express/NestJS, and Redis distributed caching to provide microsecond response times for hot endpoints. Includes connection pooling, automated retry logic with exponential backoff, and containerized deployment pipelines.',
      keyArchitecturalDecisions: [
        'Engineered multi-tier Redis caching reducing database read pressure by 70%.',
        'Implemented structured logging, error tracing, and automated health checks across microservices.',
        'Containerized all services with multi-stage Docker builds for rapid CI/CD rollouts.',
      ],
      technologies: ['Node.js', 'TypeScript', 'Redis', 'PostgreSQL', 'Docker', 'RESTful APIs', 'CI/CD'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://www.linkedin.com/in/muhammad-aftab93/',
      metrics: ['-55% Query Latency', '70% Cache Hit Rate', '10k+ req/sec', 'Docker CI/CD'],
      thumbnailGradient: 'from-amber-900/60 via-orange-900/40 to-slate-900/80',
      architectureDiagramType: 'distributed-cache',
    },
  ];

  public readonly testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      name: 'Engineering Director',
      role: 'Director of Software Engineering',
      company: 'Glaston Corporation (Tampere, Finland)',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
      relationship: 'Engineering Leadership at Glaston',
      highlightPhrase: 'Muhammad brings outstanding technical rigor, reliability, and full-stack craftsmanship to our industrial software systems.',
      recommendationText: 'Muhammad has been instrumental in architecting and delivering high-performance telemetry and control interfaces for our glass processing machinery. His deep expertise across Angular, TypeScript, and robust backend microservices ensures our industrial platforms operate with uncompromising speed and reliability. He is a tremendous technical asset to any engineering organization.',
      linkedinVerified: true,
      date: '2024',
    },
    {
      id: 'test-2',
      name: 'Senior Delivery Lead',
      role: 'Principal Engineering Lead',
      company: 'Ciklum',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      relationship: 'Technical Collaborator & Lead at Ciklum',
      highlightPhrase: 'Muhammad combines exceptional full-stack problem-solving with a relentless commitment to code quality and performance.',
      recommendationText: 'Working with Muhammad at Ciklum was a pleasure. He spearheaded critical enterprise full-stack implementations, optimized complex database workflows, and consistently delivered clean, thoroughly tested code. His proficiency in Angular and modern backend microservices helped our teams meet challenging delivery milestones ahead of schedule.',
      linkedinVerified: true,
      date: '2022',
    },
    {
      id: 'test-3',
      name: 'Software Architect',
      role: 'Lead Geoscience Software Architect',
      company: 'LMKR',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
      relationship: 'Senior Colleague at LMKR',
      highlightPhrase: 'Tackles complex algorithmic and data visualization challenges with ease.',
      recommendationText: 'Muhammad excels at translating intricate mathematical and domain-specific requirements into elegant, high-performance software. His contributions to our subsurface visualization modules demonstrated exceptional computational efficiency, clean modularity, and strong architectural discipline.',
      linkedinVerified: true,
      date: '2020',
    },
  ];

  // Simulating async API call for Contact Form submission
  public submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string; timestamp: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate payload on the mock backend
        if (!data.name || !data.email || !data.message) {
          reject(new Error('Validation error: All required fields must be supplied.'));
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          reject(new Error('Validation error: Invalid email format.'));
          return;
        }

        resolve({
          success: true,
          message: `Thank you ${data.name}! Your message has been routed directly to Muhammad Aftab Hameed at muhammad.aftab93@yahoo.com. You will receive a response shortly.`,
          timestamp: new Date().toISOString(),
        });
      }, 750);
    });
  }
}

export const profileService = ProfileDataService.getInstance();
