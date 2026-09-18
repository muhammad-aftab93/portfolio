import React, { useState, useMemo } from 'react';
import {
  Code,
  Server,
  Cloud,
  Database,
  Filter,
  Check,
  Star,
  Search,
  Sparkles,
  Layers,
  Cpu,
  Bot,
  Users,
} from 'lucide-react';
import { SkillItem, SkillCategory, ExpertiseLevel } from '../types';

interface SkillsInventoryProps {
  skills: SkillItem[];
  isDarkMode: boolean;
}

export const SkillsInventory: React.FC<SkillsInventoryProps> = ({ skills, isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [filterMode, setFilterMode] = useState<'All' | 'CoreStack' | 'Mastery'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: SkillCategory | 'All'; icon: React.ReactNode }[] = [
    { label: 'All Disciplines', value: 'All', icon: <Layers className="w-4 h-4" /> },
    { label: 'Languages', value: 'Languages', icon: <Code className="w-4 h-4" /> },
    { label: 'Frameworks & Libraries', value: 'Frameworks & Libraries', icon: <Layers className="w-4 h-4" /> },
    { label: 'Cloud & DevOps', value: 'Cloud & DevOps', icon: <Cloud className="w-4 h-4" /> },
    { label: 'Databases & Testing', value: 'Databases & Testing', icon: <Database className="w-4 h-4" /> },
    { label: 'Industrial & Protocols', value: 'Industrial & Protocols', icon: <Cpu className="w-4 h-4" /> },
    { label: 'AI & Agentic Dev', value: 'AI & Agentic Development', icon: <Bot className="w-4 h-4" /> },
    { label: 'Architecture & Leadership', value: 'Architecture & Leadership', icon: <Users className="w-4 h-4" /> },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      // Category filter
      if (selectedCategory !== 'All' && skill.category !== selectedCategory) {
        return false;
      }

      // Filter Mode (All, Core Stack, Mastery only)
      if (filterMode === 'CoreStack' && !skill.coreStack) {
        return false;
      }
      if (filterMode === 'Mastery' && skill.level !== 'Mastery') {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = skill.name.toLowerCase().includes(query);
        const matchesDesc = skill.description.toLowerCase().includes(query);
        return matchesName || matchesDesc;
      }

      return true;
    });
  }, [skills, selectedCategory, filterMode, searchQuery]);

  // Group by category when 'All' is selected
  const groupedSkills = useMemo(() => {
    const map = new Map<SkillCategory, SkillItem[]>();
    filteredSkills.forEach((skill) => {
      if (!map.has(skill.category)) {
        map.set(skill.category, []);
      }
      map.get(skill.category)!.push(skill);
    });
    return map;
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Skills Inventory
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Deep architectural breadth across modern frontend systems, distributed microservices, infrastructure orchestration, and strict automated quality.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div
          className={`p-4 rounded-2xl border mb-8 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md ${
            isDarkMode
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-white/80 border-slate-200 shadow-sm'
          }`}
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/30'
                      : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Filter Controls: Core Stack toggle, Mastery, and Search */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
            <div className="flex items-center space-x-1 border rounded-lg p-0.5 text-xs font-mono border-slate-700 bg-slate-800/40">
              <button
                onClick={() => setFilterMode('All')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filterMode === 'All'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterMode('CoreStack')}
                className={`px-2.5 py-1 rounded transition-colors flex items-center space-x-1 ${
                  filterMode === 'CoreStack'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Core Stack</span>
              </button>
              <button
                onClick={() => setFilterMode('Mastery')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filterMode === 'Mastery'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Mastery (Staff)
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-44">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter skills..."
                className={`w-full pl-8 pr-3 py-1.5 rounded-lg text-xs font-mono border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                  isDarkMode
                    ? 'bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {Array.from(groupedSkills.entries()).map(([catName, catSkills]) => (
            <div key={catName} className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <h3
                  className={`text-sm font-mono font-bold uppercase tracking-wider ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {catName}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  ({catSkills.length} competencies)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {catSkills.map((skill) => {
                  const isMastery = skill.level === 'Mastery';
                  return (
                    <div
                      key={skill.id}
                      className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                        isDarkMode
                          ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-1.5">
                          {skill.coreStack && (
                            <span title="Core Primary Stack" className="inline-flex">
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                            </span>
                          )}
                          <h4
                            className={`font-semibold text-sm ${
                              isDarkMode ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {skill.name}
                          </h4>
                        </div>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                            isMastery
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <p
                        className={`text-xs leading-relaxed line-clamp-2 ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {skill.description}
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>Experience</span>
                        <span className="text-cyan-400 font-semibold">{skill.yearsOfExperience}+ Years</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredSkills.length === 0 && (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl">
              <p className="text-sm font-mono text-slate-400">
                No competencies found matching your filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setFilterMode('All');
                  setSearchQuery('');
                }}
                className="mt-3 px-3 py-1.5 text-xs font-mono text-cyan-400 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
