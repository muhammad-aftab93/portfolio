import React, { useEffect, useRef } from 'react';
import {
  ArrowDown,
  FileDown,
  Terminal,
  Server,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { ProfileMetadata } from '../types';

interface HeroProps {
  profile: ProfileMetadata;
  isDarkMode: boolean;
  onOpenResume: () => void;
  onOpenCodeInspector: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  isDarkMode,
  onOpenResume,
  onOpenCodeInspector,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle interactive background particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid points and subtle floating particles
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural node lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        ctx.fillStyle = isDarkMode
          ? `rgba(56, 189, 248, ${p1.alpha})`
          : `rgba(2, 132, 199, ${p1.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = isDarkMode
              ? `rgba(56, 189, 248, ${0.12 * (1 - dist / 110)})`
              : `rgba(2, 132, 199, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background canvas for interactive particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        aria-hidden="true"
      />

      {/* Modern Developer Subtle Grid Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none z-0 ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]'
            : 'bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]'
        }`}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar & Identity */}
        {profile.avatarUrl && (
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-500/50 p-1 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-xl shadow-cyan-500/20 transition-transform group-hover:scale-105">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://media.licdn.com/dms/image/v2/D4D03AQHuChKUFoJKZQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690372346825?e=1791417600&v=beta&t=MSRZXpkOiRiEgjtoU5MSgMgcbj51l8EcsW0uH9I9eWs';
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
              </span>
            </div>
          </div>
        )}

        {/* Availability & Telemetry Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-8 text-xs font-mono backdrop-blur-md shadow-sm transition-all hover:scale-105">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span
            className={
              isDarkMode
                ? 'text-slate-300 border-slate-700 bg-slate-900/60'
                : 'text-slate-700 border-slate-200 bg-white/70'
            }
          >
            {profile.availability}
          </span>
          <span className="text-cyan-400 font-semibold">•</span>
          <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
            {profile.yearsOfExperience}+ Yrs Prod Experience
          </span>
        </div>

        {/* High-Impact Headline */}
        <h1
          id="hero-headline"
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}
        >
          Building Scalable{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Distributed Systems
          </span>{' '}
          & High-Performance{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Frontend Architectures.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          id="hero-subheadline"
          className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-6 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Senior Software Engineer with <strong className="font-semibold text-cyan-400">9+ years of experience</strong> delivering full-stack software solutions using <strong className="font-semibold text-cyan-400">.NET, C#</strong>, <strong className="font-semibold text-cyan-400">React, Angular, TypeScript</strong>, <strong className="font-semibold text-cyan-400">Azure</strong>, and cloud-native architectures. Strong advocate of <strong className="font-semibold text-cyan-400">AI-augmented software engineering</strong> using GitHub Copilot and Cursor.
        </p>

        {/* LinkedIn Services & Location Badge Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{profile.location}</span>
          </span>
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <span>{profile.phone}</span>
            </a>
          )}
          {profile.services?.map((service) => (
            <span
              key={service}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-white/80 border-slate-200 text-slate-700 shadow-xs'
              }`}
            >
              {service}
            </span>
          ))}
        </div>

        {/* Distinct CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            id="cta-view-work"
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          >
            <span>View Architecture & Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <button
            id="cta-download-resume"
            onClick={onOpenResume}
            className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 ${
              isDarkMode
                ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-600 hover:bg-slate-800'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm'
            }`}
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume (PDF)</span>
          </button>

          <button
            id="cta-angular-spec"
            onClick={onOpenCodeInspector}
            className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-mono text-xs border transition-all ${
              isDarkMode
                ? 'border-red-500/30 bg-red-950/20 text-red-300 hover:bg-red-950/40 hover:border-red-400/50'
                : 'border-red-200 bg-red-50/80 text-red-800 hover:bg-red-100'
            }`}
          >
            <Cpu className="w-4 h-4 text-red-400" />
            <span>Angular 18+ Spec</span>
          </button>
        </div>

        {/* Telemetry Metrics Grid */}
        <div
          id="hero-metrics-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-left transition-all hover:border-cyan-500/40 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-md'
                  : 'bg-white/80 border-slate-200/80 backdrop-blur-md shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {metric.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <p
                className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {metric.value}
              </p>
              <p
                className={`text-[11px] mt-1 line-clamp-1 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {metric.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
