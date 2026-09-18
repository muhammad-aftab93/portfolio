import React, { useState } from 'react';
import {
  X,
  Code2,
  Copy,
  Check,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  FileCode,
} from 'lucide-react';

interface AngularCodeInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

interface CodeFileItem {
  filename: string;
  path: string;
  category: 'Service' | 'Component' | 'Model' | 'Config';
  description: string;
  code: string;
}

export const AngularCodeInspector: React.FC<AngularCodeInspectorProps> = ({
  isOpen,
  onClose,
  isDarkMode,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  if (!isOpen) return null;

  const codeFiles: CodeFileItem[] = [
    {
      filename: 'profile-data.service.ts',
      path: 'src/app/services/profile-data.service.ts',
      category: 'Service',
      description: 'Angular 18/19 Reactive Service utilizing Angular Signals (signal, computed) and RxJS Observables for CMS data streaming.',
      code: `import { Injectable, signal, computed } from '@angular/core';
import { Observable, of, delay, BehaviorSubject } from 'rxjs';
import { 
  ProfileMetadata, 
  CareerMilestone, 
  SkillItem, 
  ProjectItem, 
  TestimonialItem, 
  ContactFormData,
  ProjectCategory
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  // Angular 18/19 Writable Signals
  private readonly _profile = signal<ProfileMetadata>(/* ...profile mock... */);
  private readonly _activeFilter = signal<ProjectCategory>('All');
  private readonly _projects = signal<ProjectItem[]>([
    {
      id: 'event-driven-telemetry',
      title: 'Enterprise Event-Driven Architecture',
      category: 'Cloud/Backend',
      featured: true,
      tagline: 'High-throughput telemetry ingestion platform built with NestJS, Kafka, and Redis.',
      summary: 'Collects and normalizes high-frequency telemetry metrics across 5,000+ edge nodes.',
      architectureOverview: 'Edge nodes publish over mutual TLS to horizontally scaled NestJS gateways...',
      keyArchitecturalDecisions: [
        'Decoupled ingestion from processing using Apache Kafka 3.x cluster',
        'Implemented token-bucket distributed rate limiters in Redis'
      ],
      technologies: ['NestJS', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/example-engineer/event-driven-telemetry-core',
      demoUrl: 'https://demo.telemetry-pipeline.internal',
      metrics: ['80,000 events/sec', 'sub-20ms P99 Latency']
    },
    {
      id: 'monorepo-microfrontend',
      title: 'Monorepo Micro-Frontend Platform',
      category: 'Frontend architectures',
      featured: true,
      tagline: 'Enterprise Angular monorepo managing 12+ federated applications using Nx tools.',
      summary: 'Cohesive, independently deployable micro-frontend ecosystem without sacrificing velocity.',
      architectureOverview: 'Leverages Nx Monorepo with Module Federation to dynamically load micro-apps...',
      keyArchitecturalDecisions: [
        'Standalone Angular components with Zoneless change detection and Signals',
        'Federated 12 distinct business domain applications with remote entry fallbacks'
      ],
      technologies: ['Angular 18/19', 'Nx Monorepo', 'Module Federation', 'Signals', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example-engineer/enterprise-nx-mfe-platform',
      demoUrl: 'https://demo.mfe-platform.internal',
      metrics: ['12 Federated Apps', '-42% Bundle Size']
    }
  ]);

  // Readonly Public Signals
  public readonly profile = this._profile.asReadonly();
  public readonly activeFilter = this._activeFilter.asReadonly();

  // Computed Signal: automatically recalculates when _activeFilter or _projects changes
  public readonly filteredProjects = computed(() => {
    const filter = this._activeFilter();
    const all = this._projects();
    if (filter === 'All') return all;
    return all.filter((p) => p.category === filter);
  });

  public setFilter(category: ProjectCategory): void {
    this._activeFilter.set(category);
  }

  // Reactive submission stream mimicking real API
  public submitContact(data: ContactFormData): Observable<{ success: boolean; message: string }> {
    return of({
      success: true,
      message: \`Inquiry from \${data.name} successfully encrypted and dispatched.\`
    }).pipe(delay(750));
  }
}`,
    },
    {
      filename: 'app.component.ts',
      path: 'src/app/app.component.ts',
      category: 'Component',
      description: 'Root Standalone Component utilizing @defer, @if, @for Control Flow, and Angular Signals.',
      code: `import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileDataService } from './services/profile-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <div [class.dark]="isDarkMode()" class="min-h-screen transition-colors duration-300">
      <app-navbar 
        [isDarkMode]="isDarkMode()" 
        (toggleTheme)="toggleTheme()" 
      />

      <main>
        <!-- Critical Hero: Loaded Eagerly -->
        <app-hero />

        <!-- Experience Timeline -->
        <app-experience />

        <!-- Skills Inventory -->
        <app-skills />

        <!-- Deferrable View: Interactive Projects Showcase (lazy loaded on viewport trigger) -->
        @defer (on viewport; prefetch on idle) {
          <app-projects />
        } @placeholder (minimum 300ms) {
          <div class="py-20 text-center text-slate-500 font-mono text-xs">
            <span class="animate-pulse">Loading federated project architectures...</span>
          </div>
        } @loading (after 100ms; minimum 200ms) {
          <div class="h-64 flex items-center justify-center">
            <div class="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }

        <!-- Recommendations Section -->
        <app-testimonials />

        <!-- Deferrable View: Heavy Reactive Contact Form & Canvas -->
        @defer (on viewport) {
          <app-contact />
        } @placeholder {
          <div class="py-16 text-center text-slate-500 font-mono text-xs">
            <span>Scroll into viewport to initialize reactive form validation mesh</span>
          </div>
        }
      </main>

      <app-footer />
    </div>
  \`
})
export class AppComponent {
  private readonly profileService = inject(ProfileDataService);

  // Angular Signal for dark/light mode state
  public readonly isDarkMode = signal<boolean>(true);

  public toggleTheme(): void {
    this.isDarkMode.update(dark => !dark);
  }
}`,
    },
    {
      filename: 'contact.component.ts',
      path: 'src/app/components/contact/contact.component.ts',
      category: 'Component',
      description: 'Angular Reactive Forms with real-time field validators and Signals-based submission states.',
      code: `import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileDataService } from '../../services/profile-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <section id="contact" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <!-- New Angular Control Flow @if -->
        @if (submissionState().success) {
          <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500 text-emerald-200">
            <p>{{ submissionState().message }}</p>
          </div>
        }

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label class="block text-xs font-mono mb-1">Your Name *</label>
            <input 
              formControlName="name" 
              class="w-full px-4 py-2.5 rounded-xl border bg-slate-950 text-white" 
              placeholder="Elena Ramos"
            />
            @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
              <p class="text-xs text-rose-400 font-mono mt-1">
                Name is required (min 2 chars).
              </p>
            }
          </div>

          <div>
            <label class="block text-xs font-mono mb-1">Work Email *</label>
            <input 
              formControlName="email" 
              type="email"
              class="w-full px-4 py-2.5 rounded-xl border bg-slate-950 text-white" 
              placeholder="elena@enterprise.io"
            />
            @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
              <p class="text-xs text-rose-400 font-mono mt-1">
                A valid corporate email is required.
              </p>
            }
          </div>

          <div>
            <label class="block text-xs font-mono mb-1">Architecture Message *</label>
            <textarea 
              formControlName="message" 
              rows="4" 
              class="w-full px-4 py-2.5 rounded-xl border bg-slate-950 text-white"
            ></textarea>
            @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
              <p class="text-xs text-rose-400 font-mono mt-1">
                Message must be at least 15 characters.
              </p>
            }
          </div>

          <button 
            type="submit" 
            [disabled]="contactForm.invalid || isSubmitting()"
            class="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold disabled:opacity-50"
          >
            @if (isSubmitting()) { Transmitting... } @else { Send Architecture Message }
          </button>
        </form>
      </div>
    </section>
  \`
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly profileService = inject(ProfileDataService);

  public readonly isSubmitting = signal<boolean>(false);
  public readonly submissionState = signal<{ success: boolean; message: string }>({ success: false, message: '' });

  public readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(15)]]
  });

  public onSubmit(): void {
    if (this.contactForm.invalid) return;
    this.isSubmitting.set(true);

    this.profileService.submitContact(this.contactForm.value).subscribe({
      next: (res) => {
        this.submissionState.set(res);
        this.contactForm.reset();
        this.isSubmitting.set(false);
      },
      error: () => {
        this.isSubmitting.set(false);
      }
    });
  }
}`,
    },
    {
      filename: 'portfolio.model.ts',
      path: 'src/app/models/portfolio.model.ts',
      category: 'Model',
      description: 'Strict TypeScript interfaces and types following Angular Style Guide best practices.',
      code: `export type ExpertiseLevel = 'Mastery' | 'Expert' | 'Advanced';
export type SkillCategory = 'Frontend' | 'Backend & Architecture' | 'DevOps & Cloud' | 'Databases & Testing';
export type ProjectCategory = 'All' | 'Cloud/Backend' | 'Frontend architectures' | 'Open Source';

export interface SkillItem {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
  readonly level: ExpertiseLevel;
  readonly yearsOfExperience: number;
  readonly coreStack: boolean;
  readonly description: string;
}

export interface CareerMilestone {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly summary: string;
  readonly accomplishments: readonly string[];
  readonly technologies: readonly string[];
  readonly metrics: readonly { label: string; value: string }[];
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly category: 'Cloud/Backend' | 'Frontend architectures' | 'Open Source';
  readonly featured: boolean;
  readonly tagline: string;
  readonly summary: string;
  readonly architectureOverview: string;
  readonly keyArchitecturalDecisions: readonly string[];
  readonly technologies: readonly string[];
  readonly githubUrl: string;
  readonly demoUrl: string;
  readonly metrics: readonly string[];
}

export interface TestimonialItem {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly avatarUrl: string;
  readonly relationship: string;
  readonly recommendationText: string;
  readonly linkedinVerified: boolean;
  readonly highlightPhrase: string;
  readonly date: string;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

export interface ProfileMetadata {
  readonly name: string;
  readonly title: string;
  readonly level: string;
  readonly yearsOfExperience: number;
  readonly location: string;
  readonly availability: string;
  readonly bio: string;
  readonly socialLinks: {
    readonly github: string;
    readonly linkedin: string;
    readonly medium: string;
    readonly email: string;
  };
  readonly metrics: readonly { label: string; value: string; caption: string }[];
}`,
    },
    {
      filename: 'app.config.ts',
      path: 'src/app/app.config.ts',
      category: 'Config',
      description: 'Angular Application Config with zoneless change detection and optimized image loader.',
      code: `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([], withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withFetch()),
  ]
};`,
    },
  ];

  const currentFile = codeFiles[activeFileIndex];

  const copyCode = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${
          isDarkMode ? 'bg-[#0a0e17] border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-red-950/50 border border-red-500/40 text-red-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-mono font-bold text-sm sm:text-base text-white">
                  Angular 18/19+ Architecture Blueprint
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-300 border border-red-500/30">
                  STANDALONE & SIGNALS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Live inspect the standalone components, @defer blocks, new control flow syntax (@if, @for), and reactive ProfileDataService.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copyCode}
              className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-mono inline-flex items-center space-x-1.5 transition-colors"
              title="Copy active file code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content with File Explorer Sidebar and Code Display */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* File selector sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/40 p-3 space-y-1 overflow-y-auto">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 block mb-2 font-semibold">
              Project Explorer
            </span>
            {codeFiles.map((file, idx) => {
              const isSelected = activeFileIndex === idx;
              return (
                <button
                  key={file.filename}
                  onClick={() => {
                    setActiveFileIndex(idx);
                    setCopied(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <FileCode className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span className="truncate">{file.filename}</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {file.category}
                  </span>
                </button>
              );
            })}

            <div className="mt-4 p-3 rounded-lg border border-slate-800 bg-slate-900/40 text-[11px] font-mono text-slate-400 space-y-1">
              <span className="text-cyan-400 font-bold block">Framework Paradigm:</span>
              <p>• Angular 18/19 Standalone</p>
              <p>• Control Flow: @if, @for</p>
              <p>• Deferrable Views: @defer</p>
              <p>• Reactivity: Signals</p>
              <p>• Optimization: NgOptimizedImage</p>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#060910]">
            {/* Active file metadata bar */}
            <div className="p-3 px-4 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-slate-400">{currentFile.path}</span>
              </div>
              <span className="text-[11px] text-slate-400 truncate max-w-md hidden sm:inline">
                {currentFile.description}
              </span>
            </div>

            {/* Code Body with line numbers */}
            <div className="flex-1 overflow-auto p-4 font-mono text-xs text-slate-200 leading-relaxed select-text">
              <pre className="overflow-x-auto whitespace-pre font-mono">
                <code>{currentFile.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
