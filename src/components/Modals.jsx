import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Download, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Users, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Play, 
  ExternalLink 
} from 'lucide-react';
import { ACADEMIC_PROGRAMS, NOTICES_DATA } from '../data/universityData';

export function SearchModal({ isOpen, onClose, lang, onSelectResult }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Flatten searchable items
  const allPrograms = [
    ...ACADEMIC_PROGRAMS.postgraduate,
    ...ACADEMIC_PROGRAMS.undergraduate,
    ...ACADEMIC_PROGRAMS.diploma,
    ...ACADEMIC_PROGRAMS.research
  ];

  const filteredPrograms = query
    ? allPrograms.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.dept.toLowerCase().includes(query.toLowerCase()))
    : allPrograms.slice(0, 4);

  const filteredNotices = query
    ? NOTICES_DATA.filter(n => n.title.toLowerCase().includes(query.toLowerCase()))
    : NOTICES_DATA.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-purple-700 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'hi' ? 'पाठ्यक्रम, सूचनाएं, विभाग या सेवाएं खोजें...' : 'Search programs, notices, departments, or portals...'}
            autoFocus
            className="w-full text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 font-semibold shrink-0">Suggestions:</span>
          {['Mass Comm', 'Television Studio', 'Admissions 2026', 'Time Table', 'Radio 90.8', 'Ph.D.'].map((tag, i) => (
            <button
              key={i}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-purple-400 hover:text-purple-800 whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-5">
          {/* Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Academic Programs ({filteredPrograms.length})
            </h4>
            <div className="space-y-2">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => {
                    onClose();
                    onSelectResult({ type: 'program', data: prog });
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-100 hover:border-purple-200 cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-purple-700" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-purple-900">
                        {lang === 'hi' ? prog.titleHi : prog.title}
                      </div>
                      <div className="text-[11px] text-slate-500">{prog.dept}</div>
                    </div>
                  </div>
                  <span className="text-xs text-purple-900 font-semibold group-hover:underline">View</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notices */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Official Notices ({filteredNotices.length})
            </h4>
            <div className="space-y-2">
              {filteredNotices.map((n) => (
                <div
                  key={n.id}
                  onClick={() => {
                    onClose();
                    onSelectResult({ type: 'notice', data: n });
                  }}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-amber-900 line-clamp-1">
                        {lang === 'hi' ? n.titleHi : n.title}
                      </div>
                      <div className="text-[10px] text-slate-400">{n.date} • {n.categoryNameEn}</div>
                    </div>
                  </div>
                  <span className="text-xs text-amber-800 font-semibold group-hover:underline">Download</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProgramDetailsModal({ program, onClose, lang, onApply }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-bold text-amber-400 bg-black/40 px-2.5 py-0.5 rounded backdrop-blur">
              {program.dept}
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-serif mt-1">
              {lang === 'hi' ? program.titleHi : program.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block font-semibold">Duration:</span>
              <span className="font-bold text-slate-800">{program.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Seats / Intake:</span>
              <span className="font-bold text-slate-800">{program.seats}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Affiliation:</span>
              <span className="font-bold text-purple-900">UGC / NEP 2020</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Eligibility Criteria
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-100">
              {program.eligibility}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Key Curricular Modules & Studio Practicals
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(program);
            }}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all"
          >
            Apply for This Program
          </button>
        </div>
      </div>
    </div>
  );
}

export function NoticeModal({ notice, onClose, lang }) {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-5 bg-gradient-to-r from-purple-950 to-purple-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider">University Notification</span>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Issue Date: {notice.date || 'Current Session 2026'}</span>
            <span className="bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded">
              Ref: KTUJM/NOT/2026
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif leading-snug">
            {lang === 'hi' ? (notice.titleHi || notice.title) : notice.title}
          </h3>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <p>
              This is an official administrative release issued under the authority of the Registrar, Kushabhau Thakre University of Journalism and Mass Communication, Raipur.
            </p>
            <p className="font-medium text-purple-900">
              Document format: PDF ({notice.fileSize || '750 KB'}) • Digital Signature Verified
            </p>
          </div>
        </div>

        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900">
            Cancel
          </button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("In the live website, this will download the official PDF gazette.");
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-amber-300 font-bold text-xs shadow transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function AdmissionInquiryModal({ isOpen, onClose, lang, selectedCourse }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse?.title || 'M.A. in Mass Communication',
    qualification: 'Graduation Appeared / Passed'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate response
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black font-serif text-base">
            <GraduationCap className="w-5 h-5 text-slate-950" />
            <span>{lang === 'hi' ? 'प्रवेश परामर्श 2026-27' : 'Admission Inquiry 2026-27'}</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-black/10 text-slate-950">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black font-serif text-slate-900">
              {lang === 'hi' ? 'आवेदन परामर्श दर्ज हुआ!' : 'Inquiry Submitted Successfully!'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. The KTUJM Admission Counseling Cell will contact you at <span className="font-bold text-slate-800">{formData.phone}</span> with the admission brochure and entrance details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-purple-900 text-white font-bold text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <p className="text-xs text-slate-500">
              Fill in your contact details below to receive the 2026-27 academic prospectus, fee structure, and online application instructions.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Verma"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="M.A. in Mass Communication">M.A. in Mass Communication (2 Yrs)</option>
                <option value="M.A. in Electronic Media">M.A. in Electronic Media (2 Yrs)</option>
                <option value="Master of Journalism (MJ)">Master of Journalism (MJ - 2 Yrs)</option>
                <option value="MBA in Media Management">MBA in Media Management (2 Yrs)</option>
                <option value="B.A. in Mass Communication">B.A. in Mass Communication (3/4 Yrs)</option>
                <option value="B.A. in Electronic Media">B.A. in Electronic Media (3 Yrs)</option>
                <option value="P.G. Diploma in Broadcast Journalism">P.G. Diploma in Broadcast Journalism (1 Yr)</option>
                <option value="Ph.D. in Journalism & Mass Comm">Ph.D. in Journalism & Mass Communication</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-950 hover:to-purple-900 text-amber-300 font-black text-xs sm:text-sm shadow-md transition-all"
              >
                Submit Admission Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function ImageLightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col items-center">
        <img src={item.image} alt={item.titleEn} className="w-full h-auto max-h-[75vh] object-contain rounded-xl" />
        <div className="text-center mt-3 text-white">
          <h3 className="text-base sm:text-lg font-bold font-serif">{item.titleEn}</h3>
          <p className="text-xs text-amber-400 font-semibold">{item.titleHi}</p>
        </div>
      </div>
    </div>
  );
}

export function VideoWalkthroughModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider">KTUJM Virtual Campus & Studio Walkthrough</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center">
          {/* Simulated Campus Player with Preview Video Graphic */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80">
            <img
              src="https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&q=80&w=1200"
              alt="Studio Tour"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl mx-auto ring-4 ring-white/20">
              <Play className="w-7 h-7 fill-slate-950 ml-1" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">
              Kathadih Campus, Television Studios & Radio Pratidhwani 90.8 FM
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Experience the 50-acre educational infrastructure, multi-camera broadcast floors, and digital newsrooms of Central India's First Media Gurukul.
            </p>
          </div>
        </div>
        <div className="p-4 bg-slate-950 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
          >
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
}
