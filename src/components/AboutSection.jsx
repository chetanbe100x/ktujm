import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Award, Sparkles, FileText, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';

export default function AboutSection({ lang, onOpenVideoModal }) {
  const [expanded, setExpanded] = useState(false);

  const pillars = [
    {
      titleEn: "Statutory State University",
      titleHi: "वैधानिक राज्य विश्वविद्यालय",
      descEn: "Established by Govt. of Chhattisgarh Act 24 of 2004; UGC 2(f) & 12(B) recognized and member of Association of Indian Universities (AIU).",
      descHi: "छत्तीसगढ़ शासन अधिनियम 24/2004 द्वारा स्थापित, यूजीसी 2(एफ) एवं 12(बी) मान्यता प्राप्त।"
    },
    {
      titleEn: "100% Broadcast Studio Training",
      titleHi: "100% व्यावहारिक स्टूडियो प्रशिक्षण",
      descEn: "Full access to high-definition multi-camera television studio, chroma virtual floor, sound mixing, and professional newsroom editing suites.",
      descHi: "मल्टी-कैमरा टीवी स्टूडियो, वर्चुअल क्रोमा फ्लोर, ऑडियो कंसोल और अत्याधुनिक न्यूजरूम।"
    },
    {
      titleEn: "Radio Pratidhwani 90.8 FM",
      titleHi: "कम्युनिटी रेडियो प्रतिध्वनि 90.8 FM",
      descEn: "Live on-air community FM station empowering students in radio jockeying, documentary audio programming, and community outreach.",
      descHi: "परिसर से संचालित सजीव कम्युनिटी रेडियो स्टेशन, जहाँ छात्र दैनिक लाइव प्रसारण करते हैं।"
    },
    {
      titleEn: "Distinguished Alumni Footprint",
      titleHi: "गौरवशाली पूर्व छात्र परंपरा",
      descEn: "Over 5,000 alumni serving as editors, anchors, bureau chiefs, PR managers, and media entrepreneurs across India and abroad.",
      descHi: "देश के शीर्ष प्रिंट, इलेक्ट्रॉनिक एवं डिजिटल मीडिया संस्थानों में 5,000 से अधिक सफल पूर्व छात्र।"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>{lang === 'hi' ? 'विश्वविद्यालय: एक परिचय' : 'About KTUJM'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-serif leading-tight">
              {lang === 'hi' ? (
                <>
                  मध्य भारत का प्रथम <span className="text-purple-900 underline decoration-amber-400">मीडिया गुरुकुल</span>
                </>
              ) : (
                <>
                  The First Dedicated <span className="text-purple-900 underline decoration-amber-400">Media Gurukul</span> of Central India
                </>
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              {lang === 'hi'
                ? 'मीडिया और जनसंचार के लगातार बढ़ते आकार, विविधता और तकनीकी नवाचार के दौर में छत्तीसगढ़ सरकार द्वारा कुशाभाऊ ठाकरे पत्रकारिता एवं जनसंचार विश्वविद्यालय (के.टी.यू.जे.एम.) की स्थापना एक ऐतिहासिक कदम रही है। राज्य विधानमंडल के अधिनियम संख्या 24, वर्ष 2004 के अंतर्गत गठित यह विश्वविद्यालय पत्रकारिता, इलेक्ट्रॉनिक मीडिया, विज्ञापन, जनसंपर्क, न्यू मीडिया और समाज कार्य के क्षेत्र में उच्च कोटि के मूल्यपरक शिक्षण, शोध और प्रायोगिक प्रशिक्षण हेतु प्रतिबद्ध है।'
                : 'In an era defined by rapid media convergence, technological disruptions, and evolving public discourse, Kushabhau Thakre Patrakarita Avam Jansanchar Vishwavidyalaya (KTUJM), Raipur, was established by the Government of Chhattisgarh under Act No. 24 of 2004 as Central India’s premier state university dedicated exclusively to journalism, television broadcasting, advertising, digital media, and communication research.'}
            </p>

            {expanded && (
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify animate-fadeIn">
                {lang === 'hi'
                  ? 'विश्वविद्यालय का सुंदर कथाडीह परिसर 50 एकड़ के शांत प्राकृतिक वातावरण में विकसित है, जहां विद्यार्थियों को सैद्धांतिक ज्ञान के साथ-साथ रेडियो प्रतिध्वनि 90.8 एफएम, हाई-डेफिनिशन टेलीविजन स्टूडियो, डिजिटल संपादन लैब और 25,000 से अधिक संदर्भ ग्रंथों से समृद्ध पुस्तकालय की अत्याधुनिक सुविधाएं उपलब्ध कराई जाती हैं। यहां से प्रशिक्षित छात्र आज देश के अग्रणी मीडिया घरानों, राष्ट्रीय समाचार पत्रों और प्रतिष्ठित कॉर्पोरेट संस्थानों में अपनी पहचान बना रहे हैं।'
                  : 'Spanning across a scenic 50-acre green campus at Kathadih, Raipur, KTUJM synthesizes academic rigor with immersive studio production. With specialized departments offering NEP-aligned undergraduate, postgraduate, and doctoral degrees, KTUJM equips future media leaders with critical investigative ability, ethical integrity, and mastery over modern multimedia toolsets.'}
              </p>
            )}

            {/* 4 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-serif">
                      {lang === 'hi' ? pillar.titleHi : pillar.titleEn}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">
                      {lang === 'hi' ? pillar.descHi : pillar.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4a154b] hover:bg-[#3f1040] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>{expanded ? (lang === 'hi' ? 'कम पढ़ें' : 'Show Less') : (lang === 'hi' ? 'विस्तार से पढ़ें' : 'Read More About KTUJM')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#academics"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-700 hover:text-purple-900 font-semibold text-xs sm:text-sm border border-slate-300 hover:border-purple-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>{lang === 'hi' ? 'कुलगीत व अधिनियम' : 'University Act & Insignia'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Campus Imagery & Video Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Main Campus Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=900"
                alt="KTUJM Campus Kathadih"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Play Video Button Overlay */}
              <button
                onClick={onOpenVideoModal}
                className="absolute inset-0 flex items-center justify-center group/btn"
                title="Watch Campus Walkthrough"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform ring-8 ring-white/20">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
                </div>
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-black/40 px-2 py-0.5 rounded backdrop-blur">
                  Campus Walkthrough
                </span>
                <p className="text-sm font-bold mt-1">
                  {lang === 'hi' ? 'के.टी.यू.जे.एम. सुंदर कथाडीह परिसर, रायपुर' : 'KTUJM 50-Acre Campus & Studios, Raipur'}
                </p>
              </div>
            </div>

            {/* Floating Decorative Card */}
            <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-purple-800" />
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900 font-serif">20+ Years</div>
                  <div className="text-[11px] text-slate-500 font-medium">Of Media Heritage (2004-2026)</div>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900 text-amber-300 rounded-2xl p-3 shadow-xl border border-purple-800/80 hidden sm:flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold tracking-wide">
                {lang === 'hi' ? 'प्रथम मीडिया गुरुकुल' : 'First Media Gurukul'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
