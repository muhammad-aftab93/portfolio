import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Sparkles,
  MessageSquare,
  Shield,
  Loader2,
  Phone,
} from 'lucide-react';
import { ContactFormData, FormFieldErrors, ProfileMetadata } from '../types';
import { profileService } from '../services/profileDataService';

interface ContactSectionProps {
  profile: ProfileMetadata;
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, isDarkMode }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Full-Stack Web & Enterprise Application Development',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  // Validate form in real-time
  const validate = (data: ContactFormData): FormFieldErrors => {
    const errs: FormFieldErrors = {};

    if (!data.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      errs.email = 'Work email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email.trim())) {
        errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
      }
    }

    if (!data.message.trim()) {
      errs.message = 'Please provide a message or architectural query.';
    } else if (data.message.trim().length < 15) {
      errs.message = 'Message must contain at least 15 characters to provide context.';
    }

    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Validate on change if field has already been touched
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await profileService.submitContactForm(formData);
      setSubmitResult({
        success: true,
        message: response.message,
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: 'Staff / Principal Advisory or Engineering Role',
        message: '',
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      setSubmitResult({
        success: false,
        message: err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Identity & Social Links Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Let's Build Together</span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Contact & Identity
              </h2>
              <p
                className={`mt-3 text-sm sm:text-base leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Whether you're exploring Staff / Principal leadership roles, architecting a high-scale micro-frontend migration, or evaluating cloud telemetry pipelines, I welcome the conversation.
              </p>
            </div>

            {/* Availability Spec Card */}
            <div
              className={`p-5 rounded-2xl border space-y-3.5 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-3 text-xs font-mono">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Availability</span>
                  <span className="font-semibold text-cyan-300">Immediate / 2-4 Week Notice</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs font-mono">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Location Base</span>
                  <span className="font-semibold text-slate-200">{profile.location}</span>
                </div>
              </div>

              {profile.phone && (
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Phone</span>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-cyan-300 hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 text-xs font-mono">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Advisory Engagement</span>
                  <span className="font-semibold text-slate-200">Architecture Audits & Fractional Tech Lead</span>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Engineering Profiles & Direct Reach
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-mono transition-all hover:border-cyan-500/50 ${
                    isDarkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-mono transition-all hover:border-cyan-500/50 ${
                    isDarkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Connect</span>
                </a>

                <a
                  href={profile.socialLinks.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-mono transition-all hover:border-cyan-500/50 ${
                    isDarkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Dev.to / Medium</span>
                </a>

                <a
                  href={`mailto:${profile.socialLinks.email}`}
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs font-mono transition-all hover:border-cyan-500/50 ${
                    isDarkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Reactive Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 shadow-xl'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/60">
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Direct Message / Consultation Inquiry
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Reactive validation • 256-bit encrypted simulated pipeline
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ONLINE
                </span>
              </div>

              {submitResult && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs flex items-start space-x-3 border ${
                    submitResult.success
                      ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                      : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
                  }`}
                >
                  {submitResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <p className="leading-relaxed">{submitResult.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`block text-xs font-mono font-semibold mb-1.5 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Elena Ramos, Engineering Director"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      touched.name && errors.name
                        ? 'border-rose-500 bg-rose-500/5 text-rose-200'
                        : isDarkMode
                        ? 'bg-slate-950/80 border-slate-700 text-slate-100 placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className={`block text-xs font-mono font-semibold mb-1.5 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Work Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="elena@enterprise.io"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      touched.email && errors.email
                        ? 'border-rose-500 bg-rose-500/5 text-rose-200'
                        : isDarkMode
                        ? 'bg-slate-950/80 border-slate-700 text-slate-100 placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject selection */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className={`block text-xs font-mono font-semibold mb-1.5 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Engagement Topic
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      isDarkMode
                        ? 'bg-slate-950/80 border-slate-700 text-slate-100'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Full-Stack Web & Enterprise Application Development">
                      Full-Stack Web & Enterprise Application Development
                    </option>
                    <option value="Modern Angular (v18/19+) Architecture & Frontend Consulting">
                      Modern Angular (v18/19+) Architecture & Frontend Consulting
                    </option>
                    <option value="Industrial IoT Telemetry & Real-Time Monitoring Systems">
                      Industrial IoT Telemetry & Real-Time Monitoring Systems
                    </option>
                    <option value="Database Architecture & High-Concurrency Performance Optimization">
                      Database Architecture & High-Concurrency Performance Optimization
                    </option>
                    <option value="Custom Software Development & Cloud Integrations">
                      Custom Software Development & Cloud Integrations
                    </option>
                    <option value="Senior Engineering or Architectural Advisory">
                      Senior Engineering or Architectural Advisory
                    </option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="contact-message"
                      className={`block text-xs font-mono font-semibold ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Project Context & Technical Requirements <span className="text-cyan-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} characters (min 15)
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Provide a brief summary of your tech stack, organizational scale, timeline, and architectural challenges..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      touched.message && errors.message
                        ? 'border-rose-500 bg-rose-500/5 text-rose-200'
                        : isDarkMode
                        ? 'bg-slate-950/80 border-slate-700 text-slate-100 placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
