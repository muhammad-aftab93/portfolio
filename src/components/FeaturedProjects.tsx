import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Layers,
  Cpu,
  Workflow,
  ArrowRight,
  Activity,
  CheckCircle2,
  X,
  Sparkles,
  Network,
} from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';

interface FeaturedProjectsProps {
  projects: ProjectItem[];
  isDarkMode: boolean;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterTabs: ProjectCategory[] = [
    'All',
    'Cloud/Backend',
    'Frontend architectures',
    'Open Source',
  ];

  const filteredProjects = projects.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Production Architectures</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Featured Engineering Projects
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base max-w-2xl ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Real-world systems highlighting scalable micro-frontend monorepos, high-throughput streaming pipelines, and type-safe reactive primitives.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 rounded-xl border border-slate-700/60 bg-slate-800/40">
            {filterTabs.map((tab) => {
              const isSelected = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-white font-semibold shadow-sm'
                      : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:border-cyan-500/50 group ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:shadow-cyan-500/5'
                  : 'bg-white border-slate-200 hover:shadow-slate-300/60'
              }`}
            >
              {/* Card Header Visual / Architecture Diagram Thumbnail */}
              <div
                className={`relative h-52 p-6 flex flex-col justify-between bg-gradient-to-br ${project.thumbnailGradient} border-b border-slate-800/80 overflow-hidden`}
              >
                {/* Visual schematic elements */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-900/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured Architecture</span>
                    </span>
                  )}
                </div>

                {/* Conceptual Architecture Graphic */}
                <div className="relative z-10 my-auto">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-200">
                    <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="truncate max-w-[280px] sm:max-w-none">{project.tagline}</span>
                  </div>
                </div>

                {/* Metrics Pill Row */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {project.metrics.slice(0, 3).map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/50 text-slate-200 border border-white/10"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {project.summary}
                  </p>

                  {/* Architecture Highlight Box */}
                  <div
                    className={`p-3.5 rounded-xl border mb-5 text-xs ${
                      isDarkMode
                        ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5 font-mono font-semibold text-cyan-400 mb-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span className="uppercase text-[10px] tracking-wider">
                        Architecture Blueprint
                      </span>
                    </div>
                    <p className="line-clamp-3 leading-relaxed text-[12px]">
                      {project.architectureOverview}
                    </p>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="mt-2 text-[11px] font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                    >
                      <span>Deep Dive Architecture & Decisions</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                          isDarkMode
                            ? 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
                            : 'bg-slate-100 text-slate-800 border border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions: GitHub & Live Demo */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-1.5 text-xs font-mono font-medium transition-colors ${
                        isDarkMode
                          ? 'text-slate-300 hover:text-cyan-400'
                          : 'text-slate-700 hover:text-cyan-600'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-1.5 text-xs font-mono font-medium transition-colors ${
                        isDarkMode
                          ? 'text-slate-300 hover:text-cyan-400'
                          : 'text-slate-700 hover:text-cyan-600'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live System</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Architecture Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                    System Architecture Overview
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {activeModalProject.architectureOverview}
                  </p>
                </div>

                {/* Key Architectural Decisions */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                    Key Architectural Decisions & Trade-Offs
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.keyArchitecturalDecisions.map((dec, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Telemetry Metrics */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                    Validated Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {activeModalProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-800">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-mono font-medium border border-slate-700 hover:bg-slate-800 text-slate-200 inline-flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-white hover:bg-cyan-600"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
