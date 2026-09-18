import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsInventory } from './components/SkillsInventory';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AngularCodeInspector } from './components/AngularCodeInspector';
import { ResumeModal } from './components/ResumeModal';
import { profileService } from './services/profileDataService';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [codeInspectorOpen, setCodeInspectorOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sticky Navigation */}
      <Navbar
        profile={profileService.profile}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenCodeInspector={() => setCodeInspectorOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          profile={profileService.profile}
          isDarkMode={isDarkMode}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenCodeInspector={() => setCodeInspectorOpen(true)}
        />

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`h-px w-full ${
              isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
            }`}
          />
        </div>

        {/* Professional Experience Interactive Timeline */}
        <ExperienceTimeline
          milestones={profileService.experienceMilestones}
          education={profileService.profile.education}
          isDarkMode={isDarkMode}
        />

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`h-px w-full ${
              isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
            }`}
          />
        </div>

        {/* Technical Skills Inventory */}
        <SkillsInventory
          skills={profileService.skills}
          isDarkMode={isDarkMode}
        />

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`h-px w-full ${
              isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
            }`}
          />
        </div>

        {/* Featured Projects Grid */}
        <FeaturedProjects
          projects={profileService.projects}
          isDarkMode={isDarkMode}
        />

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`h-px w-full ${
              isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
            }`}
          />
        </div>

        {/* Recommendations & Social Proof */}
        <Testimonials
          testimonials={profileService.testimonials}
          isDarkMode={isDarkMode}
        />

        {/* Section Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`h-px w-full ${
              isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
            }`}
          />
        </div>

        {/* Contact & Identity Section */}
        <ContactSection
          profile={profileService.profile}
          isDarkMode={isDarkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profileService.profile}
        isDarkMode={isDarkMode}
        onOpenCodeInspector={() => setCodeInspectorOpen(true)}
      />

      {/* Interactive Angular 18/19 Standalone Code & Architecture Inspector Modal */}
      <AngularCodeInspector
        isOpen={codeInspectorOpen}
        onClose={() => setCodeInspectorOpen(false)}
        isDarkMode={isDarkMode}
      />

      {/* Interactive Full Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        profile={profileService.profile}
        milestones={profileService.experienceMilestones}
        skills={profileService.skills}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
