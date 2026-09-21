import React, { useState } from 'react';
import { 
  Bell, 
  FileText, 
  Download, 
  Search, 
  Calendar, 
  ArrowRight, 
  ExternalLink, 
  Filter, 
  CheckCircle,
  FileCheck,
  FolderDown
} from 'lucide-react';
import { NOTICES_DATA } from '../data/universityData';

const TABS = [
  { id: 'all', labelEn: 'All Notices', labelHi: 'सभी सूचनाएँ' },
  { id: 'admissions', labelEn: 'Admissions', labelHi: 'प्रवेश' },
  { id: 'examinations', labelEn: 'Examinations', labelHi: 'परीक्षा' },
  { id: 'academic', labelEn: 'Academic', labelHi: 'अकादमिक' },
  { id: 'recruitment', labelEn: 'Recruitment & Tenders', labelHi: 'भर्ती व निविदा' }
];

const QUICK_DOWNLOADS = [
  { titleEn: "UG/PG Admission Application Form 2026-27", titleHi: "प्रवेश आवेदन प्रपत्र 2026-27", size: "650 KB", type: "PDF" },
  { titleEn: "Degree & Migration Certificate Application", titleHi: "उपाधि एवं प्रव्रजन प्रमाण-पत्र प्रपत्र", size: "420 KB", type: "PDF" },
  { titleEn: "End-Semester Examination Form (Regular & ATKT)", titleHi: "सत्रांत परीक्षा आवेदन प्रपत्र", size: "580 KB", type: "PDF" },
  { titleEn: "Ph.D. Entrance Examination (KTU-PET) Guidelines", titleHi: "पीएच.डी. प्रवेश परीक्षा मार्गदर्शिका", size: "1.2 MB", type: "PDF" },
  { titleEn: "University Ordinance & Academic Regulations", titleHi: "विश्वविद्यालय अध्यादेश एवं विनियम", size: "3.4 MB", type: "PDF" }
];

export default function NoticesAnnouncements({ lang, onSelectNotice }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = NOTICES_DATA.filter((notice) => {
    const matchesTab = activeTab === 'all' || notice.category === activeTab;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.titleHi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="notices" className="py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5 text-purple-700" />
              <span>{lang === 'hi' ? 'महत्वपूर्ण सूचनाएं एवं परिपत्र' : 'Official Circulars & Notices'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif">
              {lang === 'hi' ? 'विश्वविद्यालय सूचना पटल' : 'Notice & Announcement Board'}
            </h2>
          </div>

          {/* Inline Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'hi' ? 'सूचनाएं खोजें...' : 'Filter notices...'}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Main 2-Column Grid (Notices + Quick Downloads) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tabbed Notices List */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-200/80">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-100 scrollbar-none">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-900 text-amber-300 shadow-sm ring-1 ring-purple-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {lang === 'hi' ? tab.labelHi : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Notice Items */}
            <div className="space-y-3.5">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => onSelectNotice(notice)}
                    className="p-4 rounded-xl bg-slate-50/70 hover:bg-purple-50/50 border border-slate-200/70 hover:border-purple-300 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
                  >
                    {/* Date Badge */}
                    <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-0 bg-white sm:bg-slate-100/80 px-3 py-1.5 sm:py-2 rounded-lg border border-slate-200 text-center shrink-0 min-w-[72px]">
                      <Calendar className="w-3.5 h-3.5 text-purple-700 sm:hidden" />
                      <span className="text-xs font-black text-slate-900 font-serif leading-none">
                        {notice.date.split(' ')[0]} {notice.date.split(' ')[1]}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">
                        {notice.date.split(' ')[2]}
                      </span>
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-900">
                          {lang === 'hi' ? notice.categoryNameHi : notice.categoryNameEn}
                        </span>
                        {notice.isNew && (
                          <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-red-600 text-white animate-pulse">
                            NEW
                          </span>
                        )}
                        {notice.important && (
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                            Urgent
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-purple-900 transition-colors leading-snug">
                        {lang === 'hi' ? notice.titleHi : notice.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-3">
                        <span>PDF Document ({notice.fileSize})</span>
                        <span>•</span>
                        <span>Authorized by Registrar</span>
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="shrink-0 flex items-center gap-2 w-full sm:w-auto justify-end">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-800 group-hover:text-amber-600 transition-colors">
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Download</span>
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-400 text-sm">
                  {lang === 'hi' ? 'कोई सूचना नहीं मिली।' : 'No notices match your criteria.'}
                </div>
              )}
            </div>

            {/* Bottom Archive Link */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">
                {lang === 'hi' ? 'कुल प्रदर्शित सूचनाएं: ' : 'Total active notices: '} {filteredNotices.length}
              </span>
              <button 
                onClick={() => onSelectNotice(filteredNotices[0] || { title: "Archive Notice" })}
                className="text-purple-900 hover:text-amber-600 transition-colors inline-flex items-center gap-1 font-bold"
              >
                <span>{lang === 'hi' ? 'समस्त पुरानी सूचनाएं देखें' : 'View Notice Archive'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Quick Downloads & Student Forms */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <FolderDown className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                  {lang === 'hi' ? 'महत्वपूर्ण प्रपत्र एवं डाउनलोड' : 'Quick Forms & Downloads'}
                </h3>
              </div>

              <div className="space-y-3">
                {QUICK_DOWNLOADS.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectNotice({ title: item.titleEn, fileSize: item.size });
                    }}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-100 hover:border-amber-300 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <FileCheck className="w-4 h-4 text-purple-700 group-hover:text-amber-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-purple-900 leading-tight">
                          {lang === 'hi' ? item.titleHi : item.titleEn}
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">
                          {item.type} • {item.size}
                        </span>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                  </a>
                ))}
              </div>

              {/* Kulgeet Download Special Feature */}
              <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-purple-900 to-purple-800 text-white text-xs">
                <div className="flex items-center gap-2 font-bold text-amber-300 mb-1">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'विश्वविद्यालय कुलगीत' : 'University Kulgeet'}</span>
                </div>
                <p className="text-[11px] text-slate-200">
                  {lang === 'hi' ? 'विश्वविद्यालय का आधिकारिक कुलगीत (PDF/Audio)' : 'Download the official KTUJM anthem & lyrics'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
