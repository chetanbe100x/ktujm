import React from 'react';
import { Phone, Mail, Globe, Lock, CreditCard, Accessibility, ExternalLink } from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';

export default function TopBar({ lang, setLang, fontSize, setFontSize }) {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 lg:px-12 border-b border-purple-900/50">
      <div className="max-w-[1700px] mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Contact Info & Accreditations */}
        <div className="flex items-center gap-4 flex-wrap">
          <a 
            href={`tel:${UNIVERSITY_INFO.phone.split(',')[0]}`} 
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            title="University Phone Helpline"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">{UNIVERSITY_INFO.phone}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a 
            href={`mailto:${UNIVERSITY_INFO.email}`} 
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            title="Official Registrar Email"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{UNIVERSITY_INFO.email}</span>
          </a>
          <span className="text-slate-600 hidden lg:inline">|</span>
          <span className="text-amber-300/90 font-medium hidden lg:inline">
            {lang === 'hi' ? 'छ.ग. शासन अधिनियम 24/2004 द्वारा स्थापित' : 'Govt. of C.G. Act 24 of 2004'}
          </span>
        </div>

        {/* Right: Portals, Quick Tools & Language */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Online Fee Payment */}
          <a
            href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-900 font-semibold transition-all border border-amber-500/30"
          >
            <CreditCard className="w-3 h-3" />
            <span>{lang === 'hi' ? 'शुल्क भुगतान (SBI)' : 'Pay Fee Online'}</span>
          </a>

          {/* Webmail */}
          <a
            href="https://ktujm.ac.in/webmail"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors hidden sm:flex items-center gap-1"
          >
            <Mail className="w-3 h-3 text-purple-400" />
            <span>{lang === 'hi' ? 'वेबमेल' : 'Webmail'}</span>
          </a>

          {/* ERP Portal */}
          <a
            href="https://ktujm.opencompas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <Lock className="w-3 h-3 text-purple-400" />
            <span>{lang === 'hi' ? 'ईआरपी लॉगिन' : 'ERP Login'}</span>
          </a>

          <span className="text-slate-600">|</span>

          {/* Font Resizer */}
          <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
            <button 
              onClick={() => setFontSize(prev => Math.max(prev - 1, 14))}
              className={`px-1 hover:text-amber-400 transition-colors ${fontSize === 14 ? 'opacity-40 cursor-not-allowed' : ''}`}
              title="Decrease Font Size"
            >
              A-
            </button>
            <button 
              onClick={() => setFontSize(16)}
              className="px-1 hover:text-amber-400 font-bold text-amber-400 transition-colors"
              title="Reset Font Size"
            >
              A
            </button>
            <button 
              onClick={() => setFontSize(prev => Math.min(prev + 1, 19))}
              className={`px-1 hover:text-amber-400 transition-colors ${fontSize === 19 ? 'opacity-40 cursor-not-allowed' : ''}`}
              title="Increase Font Size"
            >
              A+
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-600/40 transition-colors font-semibold"
            title="Switch Language"
          >
            <Globe className="w-3 h-3 text-amber-400" />
            <span>{lang === 'hi' ? 'English' : 'हिंदी'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
