import React from 'react';
import { Quote, ExternalLink, Award, UserCheck, ShieldCheck } from 'lucide-react';
import { LEADERSHIP } from '../data/universityData';

export default function LeadershipSection({ lang }) {
  return (
    <section id="leadership" className="py-12 sm:py-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>{lang === 'hi' ? 'विश्वविद्यालय नेतृत्व एवं मार्गदर्शन' : 'Institutional Leadership & Vision'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif">
            {lang === 'hi' ? 'मार्गदर्शक एवं संरक्षक' : 'Leadership Messages'}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Leadership Cards (Chancellor & Vice-Chancellor) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {LEADERSHIP.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-slate-200/80 transition-all duration-300 relative overflow-hidden group hover:border-purple-300"
            >
              {/* Subtle decorative background glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-100/50 rounded-full blur-2xl group-hover:bg-purple-200/50 transition-colors pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Portrait with decorative ring */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md ring-4 ring-purple-100 group-hover:ring-amber-400/50 transition-all">
                    <img
                      src={leader.image}
                      alt={leader.nameEn}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-900 to-purple-800 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow whitespace-nowrap">
                    {leader.badge}
                  </div>
                </div>

                {/* Profile Details & Quote */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    {lang === 'hi' ? leader.roleHi : leader.roleEn}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-serif">
                    {lang === 'hi' ? leader.nameHi : leader.nameEn}
                  </h3>

                  <p className="text-xs text-purple-900 font-semibold mb-3">
                    {lang === 'hi' ? leader.designationHi : leader.designationEn}
                  </p>

                  {/* Quote with quote icon */}
                  <div className="relative bg-slate-50 rounded-xl p-4 border border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    <Quote className="w-5 h-5 text-purple-300 absolute -top-2.5 -left-2 fill-purple-100" />
                    <p className="relative z-10 pl-2">
                      "{lang === 'hi' ? leader.quoteHi : leader.quoteEn}"
                    </p>
                  </div>

                  {/* Profile CTA */}
                  <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                    <a
                      href="#about"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-800 hover:text-amber-600 transition-colors group/link"
                    >
                      <span>{lang === 'hi' ? 'विस्तृत परिचय' : 'Read Full Profile'}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
