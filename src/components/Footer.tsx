import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Cpu, Terminal, Heart } from 'lucide-react';
import { ProfileMetadata } from '../types';

interface FooterProps {
  profile: ProfileMetadata;
  isDarkMode: boolean;
  onOpenCodeInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, isDarkMode, onOpenCodeInspector }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className={`border-t transition-colors ${
        isDarkMode
          ? 'bg-[#080c14] border-slate-800 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Identity */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/15 shrink-0 flex items-center justify-center">
              <img
                src={profile.avatarUrl || '/avatar.jpg'}
                alt={profile.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              <span className="font-mono font-bold text-white text-xs hidden [div:has(img[style*='none'])]:inline">
                AH
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className={`font-mono font-bold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {profile.name}
                </span>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  // {profile.title}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Delivering full-stack software solutions using .NET, C#, React, Angular, TypeScript & Azure.
              </p>
            </div>
          </div>

          {/* Center: Angular 18/19 Architecture Spec badge */}
          <button
            onClick={onOpenCodeInspector}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono border border-red-500/30 bg-red-950/20 text-red-300 hover:bg-red-950/40 transition-colors"
          >
            <Cpu className="w-3.5 h-3.5 text-red-400" />
            <span>Inspect Angular 18/19 Standalone Signals Source</span>
          </button>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.socialLinks.email}`}
              className="p-2 rounded-lg hover:text-cyan-400 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-300 hover:bg-white text-slate-700'
              }`}
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} {profile.name}.</span>
            <span>•</span>
            <span>Production Portfolio & Architecture Spec</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-slate-800/40 border border-slate-700/60 text-slate-400 text-[10px]">
              Angular 18/19 Standalone
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800/40 border border-slate-700/60 text-slate-400 text-[10px]">
              Signals State
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800/40 border border-slate-700/60 text-slate-400 text-[10px]">
              Deferrable Views (@defer)
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800/40 border border-slate-700/60 text-slate-400 text-[10px]">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
