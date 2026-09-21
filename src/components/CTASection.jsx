import React from 'react';
import { Sparkles, ArrowRight, Download, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function CTASection({ lang, onOpenInquiry }) {
  return (
    <section id="admissions" className="py-16 sm:py-20 bg-gradient-to-br from-[#2d0b2e] via-[#4a154b] to-[#1e1022] text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full border border-purple-600/20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full border border-amber-500/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-widest mb-6 shadow-lg">
          <GraduationCap className="w-4 h-4 text-slate-950" />
          <span>{lang === 'hi' ? 'प्रवेश सत्र 2026-27 प्रारंभ' : 'Admissions Open 2026-27'}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif leading-tight text-white max-w-3xl mx-auto">
          {lang === 'hi' ? (
            <>
              के.टी.यू.जे.एम. के साथ करें अपने <span className="text-amber-400">मीडिया कॅरियर</span> की शुरुआत
            </>
          ) : (
            <>
              Begin Your Journey with <span className="text-amber-400">Central India’s Premier Media Gurukul</span>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-purple-200 max-w-2xl mx-auto leading-relaxed">
          {lang === 'hi'
            ? 'पत्रकारिता, टेलीविजन प्रसारण, विज्ञापन, न्यू मीडिया और मीडिया प्रबंधन में अपना भविष्य संवारें। उद्योग उन्मुख पाठ्यक्रम और 100% व्यावहारिक स्टूडियो प्रशिक्षण।'
            : 'Join a vibrant community of truth-seekers, broadcasters, and storytellers. Applications invited for undergraduate, postgraduate, diploma, and Ph.D. programs.'}
        </p>

        {/* 4 Benefits Quick Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-200">
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>NEP 2020 Aligned Curricula</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Radio 90.8 FM & TV Studios</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>State Scholarship Support</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>National Placement Network</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-2xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            <span>{lang === 'hi' ? 'ऑनलाइन आवेदन पत्र भरें' : 'Apply Online for 2026-27'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#academics"
            className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur border border-white/20 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>{lang === 'hi' ? 'प्रवेश विवरणिका (Prospectus)' : 'Download Prospectus'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
