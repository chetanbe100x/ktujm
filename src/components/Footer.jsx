import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  Share2
} from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';


export default function Footer({ lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 text-xs border-t-4 border-amber-500">
      {/* Top Footer: Institutional Info & Grid */}
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: University Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-950 p-1 ring-2 ring-amber-400 shrink-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-[#4a154b] text-[10px]">
                  KTU
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-sm leading-tight">
                  {UNIVERSITY_INFO.nameHi}
                </div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">
                  {UNIVERSITY_INFO.shortNameEn}
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-justify">
              {lang === 'hi'
                ? 'कुशाभाऊ ठाकरे पत्रकारिता एवं जनसंचार विश्वविद्यालय, छत्तीसगढ़ शासन के अधिनियम 24/2004 द्वारा स्थापित राज्य का प्रथम विशिष्ट मीडिया विश्वविद्यालय है।'
                : 'Kushabhau Thakre Patrakarita Avam Jansanchar Vishwavidyalaya is a premier State University established under Govt. of Chhattisgarh Act 24 of 2004, dedicated to media education and research.'}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] space-y-1">
              <div className="text-amber-400 font-bold">UGC Recognition & Affiliation</div>
              <div className="text-slate-400">Recognized under Section 2(f) & 12(B) of UGC Act 1956 | Member AIU</div>
            </div>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-2">
              <a href={UNIVERSITY_INFO.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href={UNIVERSITY_INFO.socials.twitter} target="_blank" rel="noreferrer" aria-label="X Twitter" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-purple-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={UNIVERSITY_INFO.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href={UNIVERSITY_INFO.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Regulatory & Statutory Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif pb-2 border-b border-slate-800">
              {lang === 'hi' ? 'महत्वपूर्ण सरकारी लिंक' : 'Regulatory & Govt. Portals'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://rajbhavan.cg.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                  <span>राजभवन, छत्तीसगढ़ (Raj Bhavan CG)</span>
                </a>
              </li>
              <li>
                <a href="https://highereducation.cg.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                  <span>उच्च शिक्षा विभाग, छत्तीसगढ़ शासन</span>
                </a>
              </li>
              <li>
                <a href="https://ugc.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                  <span>विश्वविद्यालय अनुदान आयोग (UGC)</span>
                </a>
              </li>
              <li>
                <a href="http://dprcg.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                  <span>जनसंपर्क विभाग, छत्तीसगढ़ (DIPR)</span>
                </a>
              </li>
              <li>
                <a href="https://presscouncil.nic.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                  <span>भारतीय प्रेस परिषद् (Press Council of India)</span>
                </a>
              </li>
              <li>
                <a href="https://editorsguild.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                  <span>एडिटर्स गिल्ड ऑफ इंडिया (Editors Guild)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Portals & Student Care (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif pb-2 border-b border-slate-800">
              {lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'विश्वविद्यालय अध्यादेश' : 'University Ordinances'}
                </a>
              </li>
              <li>
                <a href="#quick-access" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'अकादमिक कैलेंडर' : 'Academic Calendar'}
                </a>
              </li>
              <li>
                <a href="#quick-access" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'परीक्षा समय सारिणी' : 'Exam Schedule'}
                </a>
              </li>
              <li>
                <a href="#quick-access" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'एंटी-रैगिंग प्रकोष्ठ' : 'Anti-Ragging Cell'}
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'सूचना का अधिकार (RTI)' : 'RTI Act 2005'}
                </a>
              </li>
              <li>
                <a href="https://ktujm.opencompas.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                  {lang === 'hi' ? 'ई.आर.पी. लॉगिन' : 'Student ERP Portal'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Coordinates (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif pb-2 border-b border-slate-800">
              {lang === 'hi' ? 'संपर्क सूत्र' : 'Contact Coordinates'}
            </h3>
            
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{UNIVERSITY_INFO.campus}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${UNIVERSITY_INFO.phone.split(',')[0]}`} className="hover:text-amber-400">
                  {UNIVERSITY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${UNIVERSITY_INFO.email}`} className="hover:text-amber-400">
                  {UNIVERSITY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${UNIVERSITY_INFO.vcEmail}`} className="hover:text-amber-400">
                  {UNIVERSITY_INFO.vcEmail} (VC Office)
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-900 text-slate-300 hover:text-amber-300 transition-colors font-semibold"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-slate-900 py-4 px-4 border-t border-slate-800 text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px]">
          <div>
            © {new Date().getFullYear()} {UNIVERSITY_INFO.nameEn}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Use</span>
            <span>•</span>
            <span>Website Redesign Prototype (2026 Proposal)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
