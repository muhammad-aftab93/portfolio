import React, { useState, useEffect } from 'react';
import {
  Code2,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Terminal,
  ExternalLink,
  Cpu,
} from 'lucide-react';
import { ProfileMetadata } from '../types';

interface NavbarProps {
  profile?: ProfileMetadata;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenCodeInspector: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDarkMode,
  onToggleTheme,
  onOpenCodeInspector,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'experience', 'skills', 'projects', 'testimonials', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Overview', href: '#hero' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'testimonials', label: 'Endorsements', href: '#testimonials' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'bg-[#0b0f19]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <a
            href="#hero"
            id="nav-logo-link"
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
              <img
                src={profile?.avatarUrl || '/avatar.jpg'}
                alt={profile?.name || 'Muhammad Aftab Hameed'}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              <span className="font-mono font-bold text-white text-xs hidden [div:has(img[style*='none'])]:inline">
                AH
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-900"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className={`font-bold tracking-tight text-sm sm:text-base ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  M. Aftab Hameed
                </span>
                <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  SR SOFTWARE ENGINEER
                </span>
              </div>
              <p
                className={`text-[11px] hidden sm:block ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {profile?.level || 'Senior Software Engineer @ Glaston Corporation'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? isDarkMode
                        ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                        : 'text-cyan-700 bg-cyan-50 font-semibold'
                      : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Angular Code Inspector, Resume, Theme Toggle */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
            {/* Angular 18/19 Architecture Badge button */}
            <button
              id="btn-angular-inspector"
              onClick={onOpenCodeInspector}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                isDarkMode
                  ? 'bg-gradient-to-r from-red-950/40 to-slate-900 border-red-500/30 text-red-300 hover:border-red-400/60 hover:bg-red-950/60'
                  : 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100'
              }`}
              title="Inspect Angular 18/19 Standalone Signals Architecture"
            >
              <Cpu className="w-3.5 h-3.5 text-red-400" />
              <span>Angular 18+ Spec</span>
            </button>

            {/* Resume button */}
            <button
              id="btn-nav-resume"
              onClick={onOpenResume}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:border-slate-600 hover:bg-slate-800'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="btn-nav-theme-toggle"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 bg-slate-800/60 text-slate-300 hover:text-amber-300 hover:border-slate-700'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-indigo-600 hover:border-slate-300'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              id="btn-mobile-theme-toggle"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border ${
                isDarkMode
                  ? 'border-slate-800 text-slate-300'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDarkMode
                  ? 'border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className={`sm:hidden border-b px-4 pt-3 pb-6 space-y-3 transition-all ${
            isDarkMode
              ? 'bg-[#0b0f19]/95 border-slate-800 text-white'
              : 'bg-white/95 border-slate-200 text-slate-900'
          }`}
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? isDarkMode
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-cyan-700 bg-cyan-50'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeInspector();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-mono font-medium bg-red-950/40 border border-red-500/30 text-red-300"
            >
              <Cpu className="w-4 h-4 text-red-400" />
              <span>Angular 18+ Architecture Spec</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-medium border border-slate-700 text-slate-200"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download / View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
