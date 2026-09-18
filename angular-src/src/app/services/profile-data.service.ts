import { Injectable, signal, computed } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  ProfileMetadata,
  CareerMilestone,
  SkillItem,
  ProjectItem,
  TestimonialItem,
  ContactFormData,
  ProjectCategory,
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  // Angular 18/19 Writable Signals
  private readonly _profile = signal<ProfileMetadata>({
    name: 'Muhammad Aftab Hameed',
    title: 'Senior Full-Stack Engineer',
    level: 'Senior Software Engineer @ Glaston Corporation',
    yearsOfExperience: 9,
    location: 'Tampere, Pirkanmaa, Finland',
    availability: 'Senior Software Engineer @ Glaston (Open to Consulting & Architecture Advisory)',
    bio: 'Senior Full-Stack Engineer with 9+ years of experience designing and deploying scalable web applications, enterprise platforms, and industrial IoT solutions. Based in Tampere, Finland, currently engineering cutting-edge digital software systems on the Technology and Innovation Team at Glaston Corporation. Specializing in high-performance Angular architectures, enterprise TypeScript/Node.js microservices, distributed data systems, and cloud infrastructure.',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/muhammad-aftab93/',
      medium: 'https://medium.com',
      email: 'aftab.slamslogic@gmail.com',
    },
    metrics: [
      { label: 'Engineering Experience', value: '9+ Years', caption: 'Designing & deploying scalable software' },
      { label: 'LinkedIn Network', value: '2,500+', caption: 'Followers & 500+ global industry peers' },
      { label: 'Industrial Telemetry', value: 'Global Fleet', caption: 'Smart glass machinery at Glaston' },
      { label: 'System Reliability', value: '99.98%', caption: 'Production enterprise software uptime' },
    ],
  });

  private readonly _milestones = signal<CareerMilestone[]>([
    {
      id: 'glaston-eng',
      role: 'Senior Software Engineer / Full-Stack Architect',
      company: 'Glaston Corporation',
      location: 'Tampere, Finland',
      period: '2022 — Present',
      type: 'Full-time',
      summary: 'Engineering advanced software systems and industrial cloud platforms in Glaston’s Technology and Innovation Team, powering next-generation automated glass processing technologies worldwide.',
      accomplishments: [
        'Architected and implemented high-performance real-time telemetry dashboards and operator consoles for Glaston glass processing lines, delivering instantaneous status updates across worldwide industrial facilities.',
        'Engineered responsive, highly accessible Angular frontend architectures utilizing standalone components, Angular Signals, and RxJS streams to handle low-latency production metrics with zero UI stutter.',
        'Developed resilient edge-to-cloud data ingestion and processing microservices in Node.js and TypeScript, synchronizing industrial IoT telemetry with cloud datastores.',
        'Established automated CI/CD pipelines, containerization standards with Docker, and strict code quality benchmarks across the Technology and Innovation software engineering group.',
      ],
      technologies: ['Angular 18/19', 'TypeScript', 'Node.js', 'NestJS', 'Industrial IoT', 'PostgreSQL', 'Docker', 'RxJS', 'Tailwind CSS'],
      metrics: [
        { label: 'Uptime', value: '99.98%' },
        { label: 'Latency', value: '<50ms' },
      ],
    },
    {
      id: 'ciklum-eng',
      role: 'Senior Full-Stack Engineer',
      company: 'Ciklum',
      location: 'Islamabad, Pakistan / Remote',
      period: '2020 — 2022',
      type: 'Full-time',
      summary: 'Delivered mission-critical enterprise software solutions, cloud architectures, and full-stack web applications for global enterprise clients at Ciklum.',
      accomplishments: [
        'Spearheaded full-stack engineering of multi-tenant cloud applications using Angular, TypeScript, Node.js, and distributed microservices architectures.',
        'Designed database query optimization strategies and implemented Redis caching layers, achieving a 55% reduction in median database latency under heavy concurrent loads.',
        'Led sprint planning, technical design reviews, and automated testing implementations with Cypress and Jest, bringing test coverage to over 88%.',
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'RESTful APIs', 'Jest'],
      metrics: [
        { label: 'Latency Cut', value: '-55%' },
        { label: 'Delivery Rate', value: '1.7x' },
      ],
    },
    {
      id: 'lmkr-eng',
      role: 'Software Engineer (Full Stack & Systems)',
      company: 'LMKR',
      location: 'Islamabad, Pakistan',
      period: '2018 — 2020',
      type: 'Full-time',
      summary: 'Developed specialized geoscience exploration software and spatial data management platforms for the international energy and geoscientific domain.',
      accomplishments: [
        'Engineered high-throughput spatial data visualization modules and seismic analysis tools processing multi-gigabyte subsurface datasets.',
        'Optimized PostgreSQL queries, geometric data indexing, and spatial coordinate transformation algorithms for rapid exploratory search.',
      ],
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Angular', 'PostgreSQL', 'Spatial Algorithms', 'Docker'],
      metrics: [
        { label: 'Dataset Scale', value: 'Terabytes' },
        { label: 'FPS Rate', value: '60 FPS' },
      ],
    },
  ]);

  private readonly _projects = signal<ProjectItem[]>([
    {
      id: 'event-driven-telemetry',
      title: 'Enterprise Event-Driven Architecture',
      category: 'Cloud/Backend',
      featured: true,
      tagline: 'High-throughput telemetry ingestion platform built with NestJS, Kafka, and Redis.',
      summary: 'A mission-critical ingestion pipeline engineered to collect, buffer, and normalize high-frequency telemetry metrics across 5,000+ edge nodes with zero packet drop.',
      architectureOverview: 'Edge nodes publish metrics payloads over mutual TLS to a cluster of horizontally scaled NestJS ingest gateways. Payloads are validated using zero-allocation binary schemas and queued into an Apache Kafka topic partitioned by cluster region. Consumer microservices stream processed time-series aggregates into partitioned PostgreSQL with a 2-tier Redis hot cache, backing real-time dashboards with sub-20ms P99 query latency.',
      keyArchitecturalDecisions: [
        'Decoupled synchronous ingestion from processing using Apache Kafka 3.x cluster with 3-way replication.',
        'Implemented token-bucket distributed rate limiters in Redis to protect database nodes from catastrophic thundering herds.',
        'Achieved sub-20ms P99 latency under 80,000 events/sec sustained synthetic stress tests.',
        'Integrated OpenTelemetry distributed tracing across all microservices for end-to-end request visibility.',
      ],
      technologies: ['NestJS', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'OpenTelemetry', 'TypeScript'],
      githubUrl: 'https://github.com/example-engineer/event-driven-telemetry-core',
      demoUrl: 'https://demo.telemetry-pipeline.internal',
      metrics: ['80,000 events/sec', 'sub-20ms P99 Latency', '99.999% Durability', 'Zero Message Loss'],
      thumbnailGradient: 'from-cyan-900/60 via-blue-900/40 to-slate-900/80',
    },
    {
      id: 'monorepo-microfrontend',
      title: 'Monorepo Micro-Frontend Platform',
      category: 'Frontend architectures',
      featured: true,
      tagline: 'Enterprise Angular monorepo managing 12+ federated applications using Nx and Module Federation.',
      summary: 'An enterprise architecture unifying disparate product lines into a cohesive, independently deployable micro-frontend ecosystem without sacrificing developer velocity.',
      architectureOverview: 'Leverages Nx Monorepo workspace with Module Federation to dynamically load micro-apps at runtime into an Angular shell container. Features shared design system tokens, unified authentication state through a single-source-of-truth Signal mesh, and smart affected build graph orchestration to speed up CI/CD pipelines by 3.2x.',
      keyArchitecturalDecisions: [
        'Built with standalone Angular components, Zoneless change detection, and modern Signals state architecture.',
        'Federated 12 distinct business domain applications with dynamic runtime route resolution and remote entry fallbacks.',
        'Integrated Deferrable Views (@defer) with skeleton placeholders to maximize First Contentful Paint (FCP) and eliminate layout shifts.',
        'Strict dependency boundaries enforced via Nx ESLint Module Boundary rules, preventing cross-domain code pollution.',
      ],
      technologies: ['Angular 18/19', 'Nx Monorepo', 'Module Federation', 'TypeScript', 'Angular Signals', 'Tailwind CSS', 'RxJS'],
      githubUrl: 'https://github.com/example-engineer/enterprise-nx-mfe-platform',
      demoUrl: 'https://demo.mfe-platform.internal',
      metrics: ['12 Federated Apps', '-42% Bundle Size', '3.2x CI/CD Speed', '99+ Lighthouse Score'],
      thumbnailGradient: 'from-violet-900/60 via-purple-900/40 to-slate-900/80',
    },
  ]);

  private readonly _activeFilter = signal<ProjectCategory>('All');

  // Readonly Signals
  public readonly profile = this._profile.asReadonly();
  public readonly milestones = this._milestones.asReadonly();
  public readonly activeFilter = this._activeFilter.asReadonly();

  // Computed Signal: automatically recalculates whenever dependencies change
  public readonly filteredProjects = computed(() => {
    const filter = this._activeFilter();
    const projs = this._projects();
    if (filter === 'All') return projs;
    return projs.filter((p) => p.category === filter);
  });

  public setFilter(category: ProjectCategory): void {
    this._activeFilter.set(category);
  }

  // Observable simulation for CMS integration
  public submitContact(data: ContactFormData): Observable<{ success: boolean; message: string }> {
    return of({
      success: true,
      message: `Thank you ${data.name}. Your message has been encrypted and routed directly to Alex's inbox. Expect a response within 24 hours.`,
    }).pipe(delay(750));
  }
}
