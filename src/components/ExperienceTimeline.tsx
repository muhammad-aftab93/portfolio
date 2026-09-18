import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  TrendingUp,
  Award,
  Sparkles,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { CareerMilestone, ProfileMetadata } from '../types';

interface ExperienceTimelineProps {
  milestones: CareerMilestone[];
  education?: ProfileMetadata['education'];
  isDarkMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  milestones,
  education,
  isDarkMode,
}) => {
  // Keep the first entry expanded by default
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (milestones.length > 0) initial[milestones[0].id] = true;
    if (milestones.length > 1) initial[milestones[1].id] = true;
    return initial;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded = milestones.reduce((acc, m) => {
      acc[m.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Career Progression & Leadership</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Professional Experience
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base max-w-2xl ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              A track record of engineering leadership, system reliability, and large-scale frontend and distributed system transformations.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <button
              onClick={expandAll}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                isDarkMode
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                isDarkMode
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l-2 border-slate-700/60 ml-4 md:ml-32 space-y-10">
          {milestones.map((item, index) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <div
                key={item.id}
                id={`milestone-${item.id}`}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    index === 0
                      ? 'bg-cyan-500 border-cyan-300 text-white shadow-lg shadow-cyan-500/40'
                      : isDarkMode
                      ? 'bg-slate-900 border-slate-600 text-cyan-400'
                      : 'bg-white border-slate-300 text-cyan-600 shadow-sm'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Period Badge for Desktop left column */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className="font-mono text-xs font-semibold text-cyan-400 block">
                    {item.period}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {item.type}
                  </span>
                </div>

                {/* Card Container */}
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isDarkMode
                      ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Card Header (Clickable to toggle) */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-5 sm:p-6 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-transparent transition-colors hover:bg-slate-500/5"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3
                          className={`text-lg sm:text-xl font-bold tracking-tight ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {item.role}
                        </h3>
                        <span className="md:hidden inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
                        <span className="text-cyan-400 font-semibold">{item.company}</span>
                        <span className="text-slate-500">•</span>
                        <span
                          className={`flex items-center space-x-1 ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 self-end sm:self-center">
                      {/* Metric preview badges */}
                      <div className="hidden lg:flex items-center space-x-2">
                        {item.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                              isDarkMode
                                ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                                : 'bg-slate-100 border-slate-200 text-slate-800'
                            }`}
                          >
                            <span className="text-cyan-400 font-bold mr-1">{m.value}</span>
                            <span>{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        className={`p-1.5 rounded-lg border text-slate-400 hover:text-white transition-colors ${
                          isDarkMode ? 'border-slate-800' : 'border-slate-200'
                        }`}
                        aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="px-5 sm:px-6 pt-2 pb-4">
                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.summary}
                    </p>
                  </div>

                  {/* Expandable High-Impact Accomplishments */}
                  {isExpanded && (
                    <div
                      className={`px-5 sm:px-6 pb-6 pt-2 border-t transition-all ${
                        isDarkMode ? 'border-slate-800/80 bg-slate-950/30' : 'border-slate-100 bg-slate-50/50'
                      }`}
                    >
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Key Accomplishments & Measurable Impact</span>
                      </h4>

                      <ul className="space-y-2.5 mb-5">
                        {item.accomplishments.map((acc, accIdx) => (
                          <li
                            key={accIdx}
                            className={`flex items-start text-xs sm:text-sm leading-relaxed ${
                              isDarkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 mr-2.5" />
                            <span>{acc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                          Ecosystem & Technologies
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-0.5 rounded-full text-xs font-mono transition-colors ${
                                isDarkMode
                                  ? 'bg-slate-800 text-slate-300 border border-slate-700/60'
                                  : 'bg-slate-200/80 text-slate-800 border border-slate-300/80'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Credentials & Degrees Section */}
        {education && education.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-800/80">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Degrees & Research</span>
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Education & Credentials
              </h3>
              <p
                className={`mt-1 text-sm ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Rigorous computer science foundation paired with specialized advanced research in distributed systems and DevSecOps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all hover:border-cyan-500/40 flex flex-col justify-between ${
                    isDarkMode
                      ? 'bg-slate-900/60 border-slate-800/80'
                      : 'bg-white border-slate-200/90 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4
                        className={`text-base sm:text-lg font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {edu.degree}
                      </h4>
                      {edu.grade && (
                        <span className="shrink-0 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-cyan-400 mb-4">
                      <span className="font-semibold">{edu.institution}</span>
                      <span>•</span>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
                        {edu.period}
                      </span>
                      {edu.location && (
                        <>
                          <span>•</span>
                          <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>

                    {edu.thesis && (
                      <div
                        className={`p-3.5 rounded-xl border mb-4 text-xs font-mono ${
                          isDarkMode
                            ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold mb-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Master's Thesis (Diplomityö):</span>
                        </div>
                        <p className="italic leading-relaxed">"{edu.thesis}"</p>
                      </div>
                    )}

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
