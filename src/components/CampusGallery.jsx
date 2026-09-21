import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/universityData';

const TABS = [
  { id: 'all', labelEn: 'All Photos', labelHi: 'समस्त छायाचित्र' },
  { id: 'studios', labelEn: 'Studios & Production', labelHi: 'स्टूडियो एवं संपादन' },
  { id: 'academics', labelEn: 'Academics & Library', labelHi: 'पुस्तकालय एवं शोध' },
  { id: 'events', labelEn: 'Conclaves & Cultural', labelHi: 'सम्मेलन एवं कार्यक्रम' },
  { id: 'campus', labelEn: 'Campus Greens', labelHi: 'हरित परिसर' }
];

export default function CampusGallery({ lang, onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeFilter === 'all' || img.category === activeFilter
  );

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-purple-700" />
            <span>{lang === 'hi' ? 'परिसर चित्र-वीथी' : 'Campus Visual Archive'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-serif">
            {lang === 'hi' ? 'चित्र-वीथी: जीवन एवं सुविधाएं' : 'Photo Gallery: Life at KTUJM'}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-purple-900 text-amber-300 shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {lang === 'hi' ? tab.labelHi : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer h-64 border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.titleEn}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-purple-950/70 px-2 py-0.5 rounded backdrop-blur border border-purple-800">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold font-serif mt-1 group-hover:text-amber-300 transition-colors">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
