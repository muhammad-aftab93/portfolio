import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileDataService } from './services/profile-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class.dark]="isDarkMode()" class="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors">
      <!-- Sticky Navigation Header -->
      <header class="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#0b0f19]/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-md">
              AH
            </div>
            <span class="font-mono font-bold">aftab.hameed()</span>
          </div>

          <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#hero" class="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <button
            (click)="toggleTheme()"
            class="p-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-mono"
          >
            @if (isDarkMode()) { ☀️ Light } @else { 🌙 Dark }
          </button>
        </div>
      </header>

      <main class="pt-20">
        <!-- Hero Section -->
        <section id="hero" class="py-24 text-center max-w-5xl mx-auto px-4">
          @if (profileService.profile().avatarUrl) {
            <div class="flex justify-center mb-6">
              <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-500/50 p-1 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-xl shadow-cyan-500/20">
                <img
                  [src]="profileService.profile().avatarUrl!"
                  [alt]="profileService.profile().name"
                  class="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          }

          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs mb-6">
            <span>● {{ profileService.profile().availability }}</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Building Scalable <span class="text-cyan-400">Distributed Systems</span> & High-Performance <span class="text-blue-500">Frontend Architectures.</span>
          </h1>

          <p class="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
            {{ profileService.profile().bio }}
          </p>

          <div class="flex items-center justify-center gap-4">
            <a href="#projects" class="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold">View Work</a>
            <a href="#contact" class="px-6 py-3 rounded-xl border border-slate-700 font-semibold">Get in Touch</a>
          </div>
        </section>

        <!-- Deferrable View: Interactive Project Showcase -->
        @defer (on viewport; prefetch on idle) {
          <section id="projects" class="py-20 max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">Featured Engineering Architectures</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              @for (proj of profileService.filteredProjects(); track proj.id) {
                <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
                  <h3 class="text-xl font-bold text-white mb-2">{{ proj.title }}</h3>
                  <p class="text-sm text-slate-300 mb-4">{{ proj.summary }}</p>
                  <div class="p-3 rounded-xl bg-slate-950 text-xs font-mono text-cyan-400 mb-4">
                    {{ proj.architectureOverview }}
                  </div>
                </div>
              }
            </div>
          </section>
        } @placeholder (minimum 300ms) {
          <div class="py-16 text-center text-slate-500 font-mono text-xs">
            Loading federated micro-architectures...
          </div>
        }
      </main>
    </div>
  `
})
export class AppComponent {
  public readonly profileService = inject(ProfileDataService);
  public readonly isDarkMode = signal<boolean>(true);

  public toggleTheme(): void {
    this.isDarkMode.update((dark) => !dark);
  }
}
