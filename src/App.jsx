import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import NoticeTicker from './components/NoticeTicker';
import Hero from './components/Hero';
import LeadershipSection from './components/LeadershipSection';
import QuickAccess from './components/QuickAccess';
import AboutSection from './components/AboutSection';
import NoticesAnnouncements from './components/NoticesAnnouncements';
import DepartmentsSection from './components/DepartmentsSection';
import CampusHighlights from './components/CampusHighlights';
import NewsEventsSection from './components/NewsEventsSection';
import CampusGallery from './components/CampusGallery';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { 
  SearchModal, 
  ProgramDetailsModal, 
  NoticeModal, 
  AdmissionInquiryModal, 
  ImageLightboxModal,
  VideoWalkthroughModal 
} from './components/Modals';

export default function App() {
  // Global State
  const [lang, setLang] = useState('hi'); // Default Hindi / English toggle
  const [fontSize, setFontSize] = useState(16); // Accessibility text scaler

  // Modal States
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryCourse, setInquiryCourse] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Keyboard shortcut for search (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleApplyCourse = (course) => {
    setInquiryCourse(course);
    setInquiryOpen(true);
  };

  const handleSearchResult = (result) => {
    if (result.type === 'program') {
      setSelectedProgram(result.data);
    } else if (result.type === 'notice') {
      setSelectedNotice(result.data);
    }
  };

  const handleQuickAccessAction = (item) => {
    if (item.id === 'admissions') {
      setInquiryOpen(true);
    } else if (item.id === 'radio') {
      const el = document.getElementById('facilities');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.id === 'calendar' || item.id === 'exams' || item.id === 'results') {
      const el = document.getElementById('notices');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedNotice({
        title: item.titleEn,
        titleHi: item.titleHi,
        date: "Current Session",
        fileSize: "Online Portal Link"
      });
    }
  };

  return (
    <div 
      id="top" 
      style={{ fontSize: `${fontSize}px` }} 
      className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-purple-900 selection:text-amber-300"
    >
      {/* 1. Top Information Bar */}
      <TopBar 
        lang={lang} 
        setLang={setLang} 
        fontSize={fontSize} 
        setFontSize={setFontSize} 
      />

      {/* 2. Main Header with Logo & Navigation */}
      <Header 
        lang={lang} 
        onOpenSearch={() => setSearchOpen(true)}
        onOpenInquiry={() => {
          setInquiryCourse(null);
          setInquiryOpen(true);
        }}
      />

      {/* Urgent Announcement Ticker */}
      <NoticeTicker 
        lang={lang} 
        onSelectNotice={(n) => setSelectedNotice(n)} 
      />

      {/* 3. Hero Section with dynamic slider & stats */}
      <Hero 
        lang={lang} 
        onOpenInquiry={() => {
          setInquiryCourse(null);
          setInquiryOpen(true);
        }}
      />

      {/* Leadership Showcase (Chancellor & Vice Chancellor) */}
      <LeadershipSection lang={lang} />

      {/* 4. Quick Access Service Hub */}
      <QuickAccess 
        lang={lang} 
        onSelectAction={handleQuickAccessAction} 
      />

      {/* 5. About the University (Two Columns + Key Pillars) */}
      <AboutSection 
        lang={lang} 
        onOpenVideoModal={() => setVideoModalOpen(true)} 
      />

      {/* 6. Notices & Announcements Board */}
      <NoticesAnnouncements 
        lang={lang} 
        onSelectNotice={(n) => setSelectedNotice(n)} 
      />

      {/* 7. Academic Programs & Departments Explorer */}
      <DepartmentsSection 
        lang={lang} 
        onSelectProgram={(p) => setSelectedProgram(p)} 
        onOpenInquiry={() => {
          setInquiryCourse(null);
          setInquiryOpen(true);
        }}
      />

      {/* 8. Campus & Studio Infrastructure Highlights */}
      <CampusHighlights lang={lang} />

      {/* 9. News, Events & Seminars */}
      <NewsEventsSection 
        lang={lang} 
        onSelectEvent={(e) => setSelectedNotice({
          title: e.titleEn,
          titleHi: e.titleHi,
          date: e.date,
          fileSize: e.venue
        })} 
      />

      {/* 10. Photo Gallery */}
      <CampusGallery 
        lang={lang} 
        onSelectImage={(img) => setLightboxImage(img)} 
      />

      {/* 11. Call to Action Banner */}
      <CTASection 
        lang={lang} 
        onOpenInquiry={() => {
          setInquiryCourse(null);
          setInquiryOpen(true);
        }}
      />

      {/* 12. University Footer */}
      <Footer lang={lang} />

      {/* Interactive Modals */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        lang={lang} 
        onSelectResult={handleSearchResult} 
      />

      <ProgramDetailsModal 
        program={selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
        lang={lang} 
        onApply={handleApplyCourse} 
      />

      <NoticeModal 
        notice={selectedNotice} 
        onClose={() => setSelectedNotice(null)} 
        lang={lang} 
      />

      <AdmissionInquiryModal 
        isOpen={inquiryOpen} 
        onClose={() => setInquiryOpen(false)} 
        lang={lang} 
        selectedCourse={inquiryCourse} 
      />

      <ImageLightboxModal 
        item={lightboxImage} 
        onClose={() => setLightboxImage(null)} 
      />

      <VideoWalkthroughModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
    </div>
  );
}
