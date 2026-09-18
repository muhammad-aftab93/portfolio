import React from 'react';
import {
  X,
  Download,
  Printer,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
  FileText,
} from 'lucide-react';
import { ProfileMetadata, CareerMilestone, SkillItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileMetadata;
  milestones: CareerMilestone[];
  skills: SkillItem[];
  isDarkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  milestones,
  skills,
  isDarkMode,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadDocx = () => {
    const link = document.createElement('a');
    link.href = '/resume.docx';
    link.download = 'Muhammad_Aftab_Hameed_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    // Generate clean text resume blob for direct download
    const textContent = `
${profile.name} — ${profile.title}
Location: ${profile.location} | Phone: ${profile.phone || '(+358) 41 4750481'}
Email: ${profile.socialLinks.email}
LinkedIn: ${profile.socialLinks.linkedin}

SUMMARY
${profile.bio}

CORE METRICS & IMPACT
${profile.metrics.map((m) => `• ${m.label}: ${m.value} (${m.caption})`).join('\n')}

PROFESSIONAL EXPERIENCE
${milestones
  .map(
    (m) => `
${m.role} | ${m.company} (${m.period}) - ${m.location}
Summary: ${m.summary}
Key Accomplishments:
${m.accomplishments.map((a) => `  - ${a}`).join('\n')}
Technologies: ${m.technologies.join(', ')}
`
  )
  .join('\n')}

TECHNICAL SKILLS & COMPETENCIES
${skills
  .map((s) => `• [${s.category}] ${s.name} (${s.level}): ${s.description}`)
  .join('\n')}

EDUCATION
${profile.education?.map((e) => `• ${e.degree} — ${e.institution} (${e.period})${e.grade ? ` [${e.grade}]` : ''}\n  ${e.thesis ? `Thesis: "${e.thesis}"\n  ` : ''}${e.details}`).join('\n\n')}
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_Senior_Software_Engineer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${
          isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center space-x-2 font-mono text-xs">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-slate-200">
              Muhammad_Aftab_Hameed_Resume.docx
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownloadDocx}
              className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs inline-flex items-center space-x-1.5 shadow-sm transition-colors"
              title="Download Original Word Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download DOCX</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-mono inline-flex items-center space-x-1"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-2.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs inline-flex items-center space-x-1.5 shadow-sm transition-colors"
              title="Download Text Format"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Text</span>
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

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b pb-6 border-slate-700/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                {profile.avatarUrl && (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-cyan-500/40 shadow-md"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://media.licdn.com/dms/image/v2/D4D03AQHuChKUFoJKZQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690372346825?e=1791417600&v=beta&t=MSRZXpkOiRiEgjtoU5MSgMgcbj51l8EcsW0uH9I9eWs';
                    }}
                  />
                )}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {profile.name}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-0.5">
                    {profile.title} • {profile.level}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                <p>{profile.location}</p>
                {profile.phone && <p className="text-slate-300 font-semibold">{profile.phone}</p>}
                <p>{profile.socialLinks.email}</p>
                <div className="flex sm:justify-end space-x-3 text-cyan-400">
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/muhammad-aftab93
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
              {profile.bio}
            </p>
          </div>

          {/* Highlights & Metrics */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center space-x-1.5">
              <Award className="w-4 h-4" />
              <span>Architectural Impact & Scale Highlights</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {profile.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-lg font-mono font-bold text-white">{metric.value}</div>
                  <div className="text-[11px] text-cyan-300 font-medium">{metric.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{metric.caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 flex items-center space-x-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{m.role}</h3>
                      <p className="text-xs text-cyan-400 font-medium">
                        {m.company} • <span className="text-slate-400">{m.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">
                      {m.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 italic">{m.summary}</p>

                  <ul className="space-y-1.5">
                    {m.accomplishments.map((acc, aIdx) => (
                      <li key={aIdx} className="flex items-start text-xs text-slate-300">
                        <span className="text-cyan-400 mr-2 font-bold">•</span>
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    <strong className="text-slate-300">Tech Stack:</strong> {m.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies from resume.docx */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Technical Skills & Competencies (From Resume)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-cyan-400 block mb-1">Languages:</span>
                <p className="text-slate-300 text-[11px]">C#, TypeScript, JavaScript, SQL</p>

                <span className="font-bold text-cyan-400 block mt-2 mb-1">Framework / Libraries:</span>
                <p className="text-slate-300 text-[11px]">.NET / .Net Core, Angular, React</p>

                <span className="font-bold text-cyan-400 block mt-2 mb-1">Databases:</span>
                <p className="text-slate-300 text-[11px]">MS SQL Server, MySQL, Oracle, PostgreSQL, SQLite, GraphQL</p>

                <span className="font-bold text-cyan-400 block mt-2 mb-1">Testing:</span>
                <p className="text-slate-300 text-[11px]">xUnit, NUnit, NSubstitute, Fluent Assertions</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-cyan-400 block mb-1">Cloud & DevOps:</span>
                <p className="text-slate-300 text-[11px]">Microsoft Azure, Azure Functions, Azure SQL, Azure Blob Storage, Azure Key Vault, Cosmos DB, Docker, CI/CD Pipelines, Git</p>

                <span className="font-bold text-cyan-400 block mt-2 mb-1">Industrial & Protocols:</span>
                <p className="text-slate-300 text-[11px]">OPC UA, ABB Robot Web Services (RWS), TwinCAT, PLC Communication</p>

                <span className="font-bold text-cyan-400 block mt-2 mb-1">AI & Agentic Development:</span>
                <p className="text-slate-300 text-[11px]">Daily user of GitHub Copilot and Cursor for design, implementation, refactoring, testing, debugging, and documentation; AI-assisted development practices; AI code quality & security assessment</p>

                <span className="font-bold text-cyan-400 block mt-2 mb-1">Technical Leadership & Architecture:</span>
                <p className="text-slate-300 text-[11px]">Led architecture and technology decisions; Mentored developers; SOLID principles; TDD; Project estimation; Event-Driven Architecture; gRPC; Security & compliance</p>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="border-t pt-4 border-slate-800 space-y-3 text-xs">
            <span className="font-bold text-white block">Education:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-cyan-400 block">Master of Science in Information Technology</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Graduated: 2025</span>
                </div>
                <span className="text-slate-300 font-medium block">Tampere University, Tampere, Finland</span>
                <p className="text-slate-400 text-[11px] mt-1 italic">GPA 3.5 | Thesis: "Security Automation in DevOps: Detection and mitigation of vulnerabilities in DevOps pipeline"</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-cyan-400 block">Bachelor of Science in Software Engineering</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Graduated: 2017</span>
                </div>
                <span className="text-slate-300 font-medium block">National University of Modern Languages, Islamabad, Pakistan</span>
                <p className="text-slate-400 text-[11px] mt-1">Graduated with Distinction | Core computer science foundation, distributed architectures, software engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
