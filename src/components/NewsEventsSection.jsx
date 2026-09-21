import React from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles, Newspaper, ExternalLink } from 'lucide-react';
import { NEWS_EVENTS } from '../data/universityData';

export default function NewsEventsSection({ lang, onSelectEvent }) {
  return (
    <section id="events" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5 text-purple-700" />
              <span>{lang === 'hi' ? 'परिसर गतिविधियाँ एवं समाचार' : 'Campus Happenings & Events'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif">
              {lang === 'hi' ? 'ताज़ा समाचार एवं विशेष आयोजन' : 'News, Seminars & Conclaves'}
            </h2>
          </div>

          <a
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              onSelectEvent(NEWS_EVENTS[0]);
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-900 hover:text-amber-600 transition-colors"
          >
            <span>{lang === 'hi' ? 'समस्त समाचार एवं कार्यक्रम देखें' : 'View All Media Events'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-purple-300"
            >
              <div>
                {/* Image & Date Pill */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-purple-900/90 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur border border-purple-700">
                    {lang === 'hi' ? event.categoryHi : event.categoryEn}
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white font-bold bg-black/60 backdrop-blur px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-900 transition-colors font-serif leading-snug line-clamp-2">
                    {lang === 'hi' ? event.titleHi : event.titleEn}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {lang === 'hi' ? event.descHi : event.descEn}
                  </p>

                  {/* Venue Pill */}
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectEvent(event)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-purple-900 text-slate-700 hover:text-amber-300 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>{lang === 'hi' ? 'विस्तृत जानकारी' : 'Read Full Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
