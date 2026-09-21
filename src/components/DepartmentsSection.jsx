import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/universityData';

const TABS = [
  { id: 'postgraduate', labelEn: 'Postgraduate Programs (PG)', labelHi: 'स्नातकोत्तर पाठ्यक्रम (PG)' },
  { id: 'undergraduate', labelEn: 'Undergraduate Programs (UG)', labelHi: 'स्नातक पाठ्यक्रम (UG)' },
  { id: 'diploma', labelEn: 'P.G. Diplomas & Certificates', labelHi: 'पीजी डिप्लोमा एवं सर्टिफिकेट' },
  { id: 'research', labelEn: 'Doctoral Research (Ph.D.)', labelHi: 'शोध (पीएच-डी)' }
];

export default function DepartmentsSection({ lang, onSelectProgram, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('postgraduate');

  const currentPrograms = ACADEMIC_PROGRAMS[activeTab] || [];

  return (
    <section id="academics" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-purple-700" />
            <span>{lang === 'hi' ? 'शिक्षण एवं अध्ययन योजना' : 'Academic Excellence & Curricula'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif">
            {lang === 'hi' ? 'विश्वविद्यालय के शैक्षणिक विभाग एवं पाठ्यक्रम' : 'Academic Departments & Degree Programs'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'राष्ट्रीय शिक्षा नीति (NEP 2020) के अनुरूप निर्मित समकालीन मीडिया, संचार, प्रसारण एवं प्रबंधन पाठ्यक्रम।'
              : 'Industry-aligned degree curricula integrating theoretical depth with broadcast studio mastery, digital newsrooms, and investigative rigor.'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#4a154b] text-amber-300 shadow-lg shadow-purple-900/20 scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? tab.labelHi : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {currentPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-purple-300"
            >
              <div>
                {/* Image Header with Department Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Department Tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-purple-800">
                    {lang === 'hi' ? program.deptHi : program.dept}
                  </div>

                  {/* Program Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base sm:text-lg font-black font-serif leading-tight">
                      {lang === 'hi' ? program.titleHi : program.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4">
                  {/* Meta Specs (Duration & Seats) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-purple-900 font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                      <Users className="w-3.5 h-3.5 text-purple-700" />
                      <span>{program.seats}</span>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {lang === 'hi' ? 'प्रवेश पात्रता' : 'Eligibility'}
                    </span>
                    <p className="text-xs text-slate-700 font-medium mt-0.5 line-clamp-2">
                      {program.eligibility}
                    </p>
                  </div>

                  {/* Highlights Pills */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      {lang === 'hi' ? 'प्रमुख अध्ययन क्षेत्र' : 'Core Focus Areas'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {program.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold bg-purple-50 text-purple-900 px-2 py-0.5 rounded-md border border-purple-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 mt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectProgram(program)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-900 text-purple-900 hover:text-amber-300 text-xs font-bold transition-all text-center border border-purple-200 hover:border-purple-900"
                >
                  {lang === 'hi' ? 'पाठ्यक्रम विवरण' : 'View Curriculum'}
                </button>
                <button
                  onClick={onOpenInquiry}
                  className="py-2.5 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-sm"
                  title="Apply for this course"
                >
                  {lang === 'hi' ? 'आवेदन करें' : 'Apply'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-[#4a154b] to-purple-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              National Education Policy (NEP 2020)
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-serif">
              {lang === 'hi'
                ? 'लचीला क्रेडिट ढांचा, बहु-प्रवेश व बहु-निकास प्रणाली'
                : 'Flexible Choice Based Credit System (CBCS) & Dual-Specialization Options'}
            </h3>
            <p className="text-xs text-purple-200 mt-1">
              {lang === 'hi'
                ? 'समस्त स्नातक व स्नातकोत्तर पाठ्यक्रम यूजीसी के नवीनतम दिशानिर्देशों के अनुरूप अद्यतित हैं।'
                : 'All KTUJM curricula are periodically updated in consultation with prominent editors and broadcasters.'}
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md"
          >
            {lang === 'hi' ? 'प्रवेश विवरणिका 2026 डाउनलोड करें' : 'Download Prospectus 2026'}
          </button>
        </div>
      </div>
    </section>
  );
}
