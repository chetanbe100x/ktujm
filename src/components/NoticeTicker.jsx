import React, { useState } from 'react';
import { Bell, Volume2, Pause, Play, ChevronRight, ExternalLink } from 'lucide-react';
import { TICKER_NOTICES } from '../data/universityData';

export default function NoticeTicker({ lang, onSelectNotice }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-2 px-4 sm:px-8 lg:px-12 shadow-sm border-b border-amber-600/30 overflow-hidden">
      <div className="max-w-[1700px] mx-auto flex items-center gap-4">
        {/* Urgent Badge */}
        <div className="flex items-center gap-1.5 bg-slate-950 text-amber-300 text-xs font-black uppercase px-2.5 py-1 rounded shadow-sm shrink-0 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <Bell className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'ताज़ा सूचना' : 'Latest Updates'}</span>
        </div>

        {/* Ticker Content */}
        <div 
          className="flex-1 overflow-hidden relative cursor-pointer group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`animate-ticker flex items-center gap-10 whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-950 ${isPaused ? 'style-paused' : ''}`}
               style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            {TICKER_NOTICES.concat(TICKER_NOTICES).map((notice, idx) => (
              <button
                key={idx}
                onClick={() => onSelectNotice(notice)}
                className="inline-flex items-center gap-2 hover:text-purple-900 transition-colors focus:outline-none"
              >
                {notice.isNew && (
                  <span className="text-[10px] bg-red-600 text-white font-extrabold px-1.5 py-0.2 rounded uppercase animate-bounce">
                    NEW
                  </span>
                )}
                <span className="hover:underline underline-offset-4">{notice.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-purple-900 opacity-60 inline" />
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="hidden sm:flex items-center gap-1 shrink-0 text-slate-800">
          <button 
            onClick={() => setIsPaused(!isPaused)} 
            className="p-1 hover:bg-black/10 rounded transition-colors"
            title={isPaused ? "Resume Ticker" : "Pause Ticker"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
