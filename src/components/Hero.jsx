import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Compass, ShieldCheck, Award, ChevronLeft, ChevronRight, Video, Radio, BookOpen } from 'lucide-react';
import { STATS } from '../data/universityData';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&q=80&w=1920",
    badgeEn: "State-of-the-Art Broadcast Studio",
    badgeHi: "अत्याधुनिक ब्रॉडकास्ट एवं टीवी स्टूडियो",
    titleEn: "Shaping Ethical Media Leaders. Inspiring Democratic Futures.",
    titleHi: "लोकतंत्र का चौथा स्तंभ: मूल्यपरक पत्रकारिता एवं सशक्त जनसंचार",
    descEn: "Equipping aspiring journalists, broadcasters, and media strategists with real-time multi-camera television production, virtual chroma studios, and investigative rigor.",
    descHi: "मल्टी-कैमरा टीवी स्टूडियो, लाइव डिजिटल न्यूजरूम और मूल्यपरक पत्रकारिता के साथ नए भारत के मीडिया नेतृत्व का निर्माण।"
  },
  {
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1920",
    badgeEn: "First Media Gurukul of Central India",
    badgeHi: "मध्य भारत का प्रथम मीडिया विश्वविद्यालय",
    titleEn: "Where Tradition Meets Tomorrow's Digital Storytelling.",
    titleHi: "परम्परा और आधुनिक डिजिटल संचार का अप्रतिम संगम",
    descEn: "Comprehensive undergraduate, postgraduate, and doctoral programs aligned with National Education Policy (NEP 2020) and international media standards.",
    descHi: "राष्ट्रीय शिक्षा नीति (NEP 2020) के अनुरूप 9 विशेषज्ञ विभागों में स्नातक, स्नातकोत्तर एवं विद्या वाचस्पति (Ph.D.) पाठ्यक्रम।"
  },
  {
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920",
    badgeEn: "Kathadih Campus, Raipur",
    badgeHi: "कथाडीह हरित परिसर, रायपुर",
    titleEn: "A 50-Acre Vibrant Hub of Media Innovation & Research.",
    titleHi: "ज्ञान, शोध और रचनात्मकता का 50 एकड़ में विस्तृत आधुनिक परिसर",
    descEn: "Home to Radio Pratidhwani 90.8 FM, national media conclaves, 25,000+ volume knowledge archives, and vibrant student-driven newsrooms.",
    descHi: "रेडियो प्रतिध्वनि 90.8 FM, समृद्ध केंद्रीय ग्रंथालय, आधुनिक संपादन केंद्र और बहुआयामी प्रतिभा विकास।"
  }
];

export default function Hero({ lang, onOpenInquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);

  return (
    <div className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
      {/* Background Image Slideshow with Smooth Crossfade */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-[7000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.titleEn}
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent lg:w-4/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
          <div className="absolute inset-0 bg-[#3f1040]/30 mix-blend-multiply" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 lg:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/70 border border-purple-500/40 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider mb-5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {lang === 'hi' ? SLIDES[currentSlide].badgeHi : SLIDES[currentSlide].badgeEn}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight font-serif tracking-tight drop-shadow-md">
            {lang === 'hi' ? SLIDES[currentSlide].titleHi : SLIDES[currentSlide].titleEn}
          </h2>

          {/* Subtitle Description */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl text-shadow">
            {lang === 'hi' ? SLIDES[currentSlide].descHi : SLIDES[currentSlide].descEn}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary CTA: Admissions 2026 */}
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all group"
            >
              <span>{lang === 'hi' ? 'प्रवेश आवेदन 2026-27' : 'Apply for Admissions 2026-27'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA: Explore Courses */}
            <a
              href="#academics"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all hover:scale-[1.02]"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? 'पाठ्यक्रम खोजें' : 'Explore Programs'}</span>
            </a>

            {/* Tertiary Action: Virtual Tour */}
            <a
              href="#facilities"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white font-medium text-sm transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600/60 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <Play className="w-3.5 h-3.5 text-white ml-0.5" />
              </div>
              <span className="underline-offset-4 group-hover:underline">
                {lang === 'hi' ? 'स्टूडियो व परिसर दर्शन' : 'Campus & Studio Tour'}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex items-center justify-between pb-4">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg bg-black/40 hover:bg-purple-900/60 text-white/80 hover:text-white backdrop-blur border border-white/10 transition-colors"
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-lg bg-black/40 hover:bg-purple-900/60 text-white/80 hover:text-white backdrop-blur border border-white/10 transition-colors"
            title="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Stats Bar */}
      <div className="relative z-10 bg-slate-900/90 backdrop-blur-xl border-t border-purple-900/50 py-3.5 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-x divide-slate-800">
          {STATS.map((item, idx) => (
            <div key={idx} className="px-2 first:border-0">
              <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight font-serif">
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium truncate mt-0.5">
                {lang === 'hi' ? item.labelHi : item.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
