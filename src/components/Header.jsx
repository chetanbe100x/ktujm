import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, Sparkles, BookOpen, GraduationCap, Phone, Mail, Award, Landmark } from 'lucide-react';
import { UNIVERSITY_INFO, NAV_LINKS } from '../data/universityData';

export default function Header({ lang, onOpenSearch, onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-200">
      {/* Main Brand Section - Spacious, Dignified & Fully Responsive */}
      <div className="max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-12 py-3.5 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-10">
          
          {/* Left: Emblem + Bilingual University Title */}
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 flex-1 min-w-0">
            {/* University Crest / Emblem */}
            <div className="relative group shrink-0">
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 xl:w-28 lg:h-24 xl:h-28 rounded-full bg-gradient-to-br from-[#4a154b] via-[#6d4aa0] to-[#2d0b2e] p-1 sm:p-1.5 shadow-md sm:shadow-xl ring-2 sm:ring-4 ring-amber-400/70 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-1 sm:p-1.5 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-50/60 to-amber-50/50 pointer-events-none" />
                  
                  {/* Stylized Emblem: Pen Nib, Broadcast Waves, Flame, Knowledge Book */}
                  <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 xl:w-20 text-[#4a154b]" fill="currentColor">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#4a154b" strokeWidth="2.5" strokeDasharray="3 2" />
                    <circle cx="50" cy="50" r="41" fill="none" stroke="#d97706" strokeWidth="1.5" />
                    <path d="M50 14 L50 20 M75 25 L71 30 M86 50 L80 50 M75 75 L71 70 M50 86 L50 80 M25 75 L29 70 M14 50 L20 50 M25 25 L29 30" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                    <path d="M50 22 L62 46 L54 74 L50 68 L46 74 L38 46 Z" fill="#4a154b" />
                    <circle cx="50" cy="46" r="3" fill="#ffffff" />
                    <line x1="50" y1="49" x2="50" y2="68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    <path d="M28 42 A 26 26 0 0 1 72 42" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M34 48 A 18 18 0 0 1 66 48" fill="none" stroke="#4a154b" strokeWidth="2" strokeLinecap="round" />
                    <path d="M30 76 Q50 72 50 78 Q50 72 70 76 L68 84 Q50 80 50 84 Q50 80 32 84 Z" fill="#d97706" />
                  </svg>
                  <span className="text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase text-[#4a154b] tracking-wider leading-none mt-0.5">
                    KTUJM
                  </span>
                </div>
              </div>
            </div>

            {/* University Titles & Institutional Hierarchy */}
            <div className="flex flex-col justify-center min-w-0">
              {/* Top Tagline Badges */}
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] sm:text-xs font-black text-amber-800 uppercase tracking-widest bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-300/80 shadow-xs whitespace-nowrap">
                  {lang === 'hi' ? 'छत्तीसगढ़ का प्रथम मीडिया गुरुकुल' : 'The First Media Gurukul of Central India'}
                </span>
                <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-500 font-semibold whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Estd. 2004 • UGC 2(f) & 12(B) Recognized
                </span>
              </div>

              {/* Hindi Title (Strictly Single Line on Desktop/Laptop) */}
              <h1 className="text-base sm:text-xl md:text-2xl lg:text-[22px] xl:text-[26px] 2xl:text-[28px] font-black text-[#3f1040] leading-snug font-serif tracking-tight lg:whitespace-nowrap">
                {UNIVERSITY_INFO.nameHi}
              </h1>

              {/* English Title */}
              <p className="text-[11px] sm:text-xs md:text-sm lg:text-[15px] font-bold text-slate-700 mt-0.5 leading-snug lg:whitespace-nowrap">
                {UNIVERSITY_INFO.nameEn}
              </p>

              {/* Location & Statutory Act Line */}
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-slate-600">
                  {lang === 'hi' ? 'रायपुर (छत्तीसगढ़), भारत' : 'Raipur (Chhattisgarh), India'}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="hidden sm:inline text-purple-950 font-semibold">
                  {lang === 'hi'
                    ? 'राज्य शासन अधिनियम क्रमांक 24, 2004 द्वारा स्थापित'
                    : 'Established by Govt. of Chhattisgarh Act 24 of 2004'}
                </span>
              </p>
            </div>
          </div>

          {/* Right: Search & Actions Responsive for all viewports */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
            
            {/* Commemorative Excellence Badge (Ultrawide Desktop only) */}
            <div className="hidden 2xl:flex items-center gap-2.5 pr-3 border-r border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-purple-800" />
              </div>
              <div className="text-left">
                <div className="text-xs font-black text-[#3f1040] font-serif uppercase tracking-wide">
                  20+ Years
                </div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight">
                  Media Heritage
                </div>
              </div>
            </div>

            {/* Search Bar Button (Icon on mobile, input field on tablet/desktop) */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-600 border border-slate-200/90 transition-all text-xs sm:text-sm font-medium shadow-xs group sm:w-40 lg:w-48 justify-between"
              title="Search university portal (Ctrl+K)"
            >
              <div className="flex items-center gap-1.5">
                <Search className="w-4 h-4 text-purple-700 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-slate-500 font-normal truncate hidden sm:inline">
                  {lang === 'hi' ? 'खोजें...' : 'Search...'}
                </span>
              </div>
              <kbd className="hidden md:inline-block text-[10px] bg-white px-1.5 py-0.5 rounded border text-slate-400 font-mono shadow-xs">
                ⌘K
              </kbd>
            </button>

            {/* Admissions 2026 CTA Button */}
            <button
              onClick={onOpenInquiry}
              className="relative inline-flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="hidden xs:inline sm:inline">{lang === 'hi' ? 'प्रवेश 2026-27' : 'Admissions 2026'}</span>
              <span className="xs:hidden sm:hidden">प्रवेश</span>
            </button>

            {/* Mobile / Tablet Menu Button (Visible on < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Desktop Navigation Bar - Wide, Clear & Beautifully Spaced */}
      <nav className="bg-gradient-to-r from-[#3f1040] via-[#5c275c] to-[#4a154b] text-white border-t border-purple-800 shadow-inner hidden lg:block">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
          <ul className="flex items-center justify-between text-sm font-medium">
            {NAV_LINKS.map((item, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 py-3.5 px-4 hover:text-amber-300 hover:bg-white/10 transition-all font-semibold ${
                    item.badge ? 'text-amber-300' : 'text-slate-100'
                  }`}
                >
                  <span>{lang === 'hi' ? item.labelHi : item.labelEn}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === idx && (
                  <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md rounded-b-xl shadow-2xl border-t-2 border-amber-400 border-x border-b border-purple-900 py-2 z-50 animate-fadeIn">
                    {item.submenu.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:text-amber-300 hover:bg-purple-900/40 transition-colors border-l-2 border-transparent hover:border-amber-400 font-medium"
                      >
                        {lang === 'hi' ? sub.labelHi : sub.labelEn}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-purple-800 px-5 py-5 max-h-[80vh] overflow-y-auto">
          <div className="space-y-3">
            {NAV_LINKS.map((item, idx) => (
              <div key={idx} className="border-b border-slate-800 pb-2.5">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-bold text-slate-100 hover:text-amber-400"
                >
                  <span>{lang === 'hi' ? item.labelHi : item.labelEn}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-2 mt-1.5 border-l-2 border-purple-700/50">
                    {item.submenu.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-slate-300 hover:text-amber-300 py-1"
                      >
                        {lang === 'hi' ? sub.labelHi : sub.labelEn}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Quick Links inside Mobile Drawer */}
            <div className="pt-3 grid grid-cols-2 gap-2 text-xs">
              <a
                href="https://ktujm.opencompas.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-purple-950 text-center font-bold border border-purple-800 text-amber-300"
              >
                ERP Login
              </a>
              <a
                href="https://ktujm.ac.in/webmail"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-purple-950 text-center font-bold border border-purple-800 text-amber-300"
              >
                Webmail
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
