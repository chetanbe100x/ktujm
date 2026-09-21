import React from 'react';
import { 
  GraduationCap, 
  FileText, 
  Award, 
  Calendar, 
  UserCheck, 
  BookOpen, 
  Radio, 
  ShieldAlert, 
  ArrowUpRight 
} from 'lucide-react';
import { QUICK_ACCESS } from '../data/universityData';

const ICONS = {
  GraduationCap,
  FileText,
  Award,
  Calendar,
  UserCheck,
  BookOpen,
  Radio,
  ShieldAlert
};

export default function QuickAccess({ lang, onSelectAction }) {
  return (
    <section id="quick-access" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
              {lang === 'hi' ? 'त्वरित छात्र एवं शैक्षणिक सेवाएं' : 'Student & Academic Services'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
              {lang === 'hi' ? 'त्वरित संपर्क एवं पोर्टल' : 'Quick Access Hub'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            {lang === 'hi'
              ? 'विद्यार्थियों, शोधार्थियों एवं प्राध्यापकों हेतु प्रमुख डिजिटल द्वार एवं आवश्यक सेवाएं।'
              : 'Direct gateways to student lifecycle services, digital examinations, library resources, and administrative portals.'}
          </p>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {QUICK_ACCESS.map((item) => {
            const IconComponent = ICONS[item.icon] || FileText;
            return (
              <div
                key={item.id}
                onClick={() => onSelectAction(item)}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-purple-300 cursor-pointer flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
              >
                {/* Top Accent Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-900 text-purple-900 group-hover:text-amber-300 flex items-center justify-center transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-amber-100 text-slate-600 group-hover:text-amber-800 transition-colors">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-900 transition-colors font-serif">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-900 group-hover:text-amber-600 transition-colors">
                  <span>{lang === 'hi' ? 'पोर्टल खोलें' : 'Access Service'}</span>
                  <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-purple-900 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
