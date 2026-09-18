import React, { useState } from 'react';
import {
  Quote,
  ShieldCheck,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
} from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  isDarkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            <Users className="w-4 h-4" />
            <span>Social Proof & Peer Endorsements</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Recommendations & Leadership Endorsements
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Testimonials from Engineering Directors, Principal Architects, and Product leaders who have partnered on high-stakes product rollouts.
          </p>
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {t.linkedinVerified && (
                    <div className="inline-flex items-center space-x-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      <Linkedin className="w-3 h-3" />
                      <span>Verified Reference</span>
                    </div>
                  )}
                </div>

                <p
                  className={`text-xs sm:text-sm font-medium italic mb-4 leading-snug ${
                    isDarkMode ? 'text-cyan-300' : 'text-cyan-800'
                  }`}
                >
                  "{t.highlightPhrase}"
                </p>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {t.recommendationText}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center space-x-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                  loading="lazy"
                  width="40"
                  height="40"
                />
                <div>
                  <h4
                    className={`font-bold text-sm leading-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-[11px] ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {t.role} • <span className="text-cyan-400 font-semibold">{t.company}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    {t.relationship}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
