import React, { useState } from 'react';
import { 
  Radio, 
  Tv, 
  Cpu, 
  Library, 
  Check, 
  Volume2, 
  Sparkles, 
  Play, 
  Pause, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/universityData';

const FACILITY_ICONS = {
  'radio-station': Radio,
  'tv-studio': Tv,
  'multimedia-lab': Cpu,
  'library-facility': Library
};

export default function CampusHighlights({ lang }) {
  const [activeTab, setActiveTab] = useState('radio-station');
  const [isPlayingRadio, setIsPlayingRadio] = useState(false);

  const currentFacility = CAMPUS_FACILITIES.find(f => f.id === activeTab) || CAMPUS_FACILITIES[0];
  const IconComponent = FACILITY_ICONS[currentFacility.id] || Radio;

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 border border-purple-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'hi' ? 'परिसर सुविधाएं एवं स्टूडियो' : 'Infrastructure & Studio Highlights'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-serif">
            {lang === 'hi' ? 'विश्वस्तरीय स्टूडियो एवं प्रायोगिक प्रशिक्षण' : 'Broadcast Studios & Campus Facilities'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'विद्यार्थियों को वास्तविक मीडिया उद्योग का अनुभव प्रदान करने हेतु समर्पित अत्याधुनिक उपकरण एवं स्टूडियो।'
              : 'Empowering future journalists with television multi-camera studios, community radio transmission, and multimedia newsrooms.'}
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Facility Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {CAMPUS_FACILITIES.map((facility) => {
            const Icon = FACILITY_ICONS[facility.id] || Radio;
            const isActive = activeTab === facility.id;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-950 via-purple-900 to-[#4a154b] border-amber-400 shadow-xl shadow-purple-950/50 scale-[1.02]'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-700/80 text-purple-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {facility.id === 'radio-station' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-600 text-white uppercase animate-pulse">
                      On Air
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400/80 block">
                    {lang === 'hi' ? facility.tagHi : facility.tagEn}
                  </span>
                  <div className="text-xs sm:text-sm font-bold font-serif text-white mt-0.5">
                    {lang === 'hi' ? facility.titleHi : facility.titleEn}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Facility Feature Showcase (Two Columns) */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Detailed Info */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <IconComponent className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? currentFacility.tagHi : currentFacility.tagEn}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-serif text-white leading-tight">
                {lang === 'hi' ? currentFacility.titleHi : currentFacility.titleEn}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                {lang === 'hi' ? currentFacility.descHi : currentFacility.descEn}
              </p>

              {/* Key Studio Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentFacility.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-purple-700 flex items-center justify-center text-white shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Radio Player Mock (If Radio Pratidhwani is active) */}
              {currentFacility.id === 'radio-station' && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 border border-purple-800/80 shadow-inner mt-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlayingRadio(!isPlayingRadio)}
                        className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform hover:scale-105 shrink-0"
                        title={isPlayingRadio ? "Pause Stream" : "Tune in to Radio Pratidhwani"}
                      >
                        {isPlayingRadio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <div>
                        <div className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          Radio Pratidhwani 90.8 FM
                        </div>
                        <p className="text-[11px] text-slate-300">
                          {isPlayingRadio ? "Streaming: 'Yuva Chaupal' - Student Podcast (Live)" : "Click play to listen to live campus broadcast"}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1">
                      <div className={`w-1 bg-amber-400 rounded ${isPlayingRadio ? 'h-6 animate-pulse' : 'h-2'}`} />
                      <div className={`w-1 bg-amber-400 rounded ${isPlayingRadio ? 'h-8 animate-pulse delay-75' : 'h-3'}`} />
                      <div className={`w-1 bg-amber-400 rounded ${isPlayingRadio ? 'h-4 animate-pulse delay-150' : 'h-1'}`} />
                      <div className={`w-1 bg-amber-400 rounded ${isPlayingRadio ? 'h-7 animate-pulse delay-100' : 'h-2'}`} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Immersive Image with Zoom & Badge */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group">
                <img
                  src={currentFacility.image}
                  alt={currentFacility.titleEn}
                  className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-amber-300 font-bold">
                    KTUJM Kathadih Facility
                  </span>
                  <span className="text-slate-300 font-medium">
                    Hands-on Practical Training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
