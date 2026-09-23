/**
 * KTUJM Dynamic Content Coordinator
 * Handles dynamic content for Latest Updates Ticker, Quick Forms & Downloads, and Kulgeet.
 * Synchronizes with localStorage and /data/ktujm-data.json.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'ktujm_custom_data';

  var DEFAULT_DATA = {
    tickerUpdates: [
      {
        id: 1,
        titleHi: "प्रवेश सत्र 2026-27: स्नातक, स्नातकोत्तर एवं पी.जी. डिप्लोमा पाठ्यक्रमों में ऑनलाइन आवेदन आमंत्रित",
        titleEn: "Admission Session 2026-27: Online Applications Invited for UG, PG & PG Diploma Programs",
        isNew: true,
        link: "#admissions",
        active: true,
        order: 1
      },
      {
        id: 2,
        titleHi: "सत्र 2025-26 सम-सैमेस्टर सत्रांत परीक्षा (जून 2026) की समय सारिणी (Time Table) जारी",
        titleEn: "Session 2025-26 Even-Semester End-Term Examination (June 2026) Time Table Released",
        isNew: true,
        link: "#quick-access",
        active: true,
        order: 2
      },
      {
        id: 3,
        titleHi: "राष्ट्रीय मीडिया कॉन्क्लेव 2026: 'भारतीय पत्रकारिता एवं कृत्रिम बुद्धिमत्ता (AI)' विषय पर दो दिवसीय सेमिनार",
        titleEn: "National Media Conclave 2026: Two-Day National Seminar on 'Indian Journalism & AI'",
        isNew: false,
        link: "#events",
        active: true,
        order: 3
      },
      {
        id: 4,
        titleHi: "सप्तम दीक्षांत समारोह (7th Convocation) हेतु उपाधि प्राप्तकर्ताओं के पंजीकरण की अंतिम तिथि विस्तारित",
        titleEn: "Last Date Extended for Degree Recipients Registration for 7th Convocation",
        isNew: true,
        link: "#notices",
        active: true,
        order: 4
      }
    ],
    quickForms: [
      {
        id: 1,
        titleEn: "UG/PG Admission Application Form 2026-27",
        titleHi: "प्रवेश आवेदन प्रपत्र 2026-27",
        size: "650 KB",
        type: "PDF",
        fileUrl: "assets/docs/admission-application-form-2026.pdf",
        active: true,
        order: 1
      },
      {
        id: 2,
        titleEn: "Degree & Migration Certificate Application",
        titleHi: "उपाधि एवं प्रव्रजन प्रमाण-पत्र प्रपत्र",
        size: "420 KB",
        type: "PDF",
        fileUrl: "assets/docs/degree-migration-form.pdf",
        active: true,
        order: 2
      },
      {
        id: 3,
        titleEn: "End-Semester Examination Form (Regular & ATKT)",
        titleHi: "सत्रांत परीक्षा आवेदन प्रपत्र (नियमित एवं एटीकेटी)",
        size: "580 KB",
        type: "PDF",
        fileUrl: "assets/docs/exam-form.pdf",
        active: true,
        order: 3
      },
      {
        id: 4,
        titleEn: "Ph.D. Entrance Examination (KTU-PET) Guidelines",
        titleHi: "पीएच.डी. प्रवेश परीक्षा (KTU-PET) मार्गदर्शिका",
        size: "1.2 MB",
        type: "PDF",
        fileUrl: "assets/docs/pet-guidelines.pdf",
        active: true,
        order: 4
      },
      {
        id: 5,
        titleEn: "University Ordinance & Academic Regulations",
        titleHi: "विश्वविद्यालय अध्यादेश एवं शैक्षणिक विनियम",
        size: "3.4 MB",
        type: "PDF",
        fileUrl: "assets/docs/ordinance-regulations.pdf",
        active: true,
        order: 5
      }
    ],
    kulgeet: {
      titleEn: "University Kulgeet",
      titleHi: "विश्वविद्यालय कुलगीत",
      descEn: "Download the official KTUJM anthem & lyrics",
      descHi: "विश्वविद्यालय का आधिकारिक कुलगीत (PDF/Audio)",
      fileUrl: "assets/docs/kulgeet.pdf"
    }
  };

  // 1. Initialize data synchronously
  function loadStoredData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && (parsed.tickerUpdates || parsed.quickForms)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[KTUJM Dynamic] Error reading localStorage', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  window.__KTUJM_DATA__ = loadStoredData();

  // Expose Global Helper API for Admin and scripts
  window.ktujmGetData = function () {
    return loadStoredData();
  };

  window.ktujmSaveData = function (data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.__KTUJM_DATA__ = data;
      applyDynamicDOMUpdates();
      window.dispatchEvent(new CustomEvent('ktujm:dataUpdated', { detail: data }));
      return true;
    } catch (e) {
      console.error('[KTUJM Dynamic] Save error:', e);
      return false;
    }
  };

  window.ktujmResetData = function () {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.__KTUJM_DATA__ = JSON.parse(JSON.stringify(DEFAULT_DATA));
      applyDynamicDOMUpdates();
      window.dispatchEvent(new CustomEvent('ktujm:dataUpdated', { detail: window.__KTUJM_DATA__ }));
      return true;
    } catch (e) {
      console.error('[KTUJM Dynamic] Reset error:', e);
      return false;
    }
  };

  // 2. Fetch seed json if localStorage empty, to ensure latest defaults from file
  if (!localStorage.getItem(STORAGE_KEY)) {
    fetch('/data/ktujm-data.json')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data && (data.tickerUpdates || data.quickForms)) {
          window.__KTUJM_DATA__ = data;
          applyDynamicDOMUpdates();
        }
      })
      .catch(function () {
        // Fallback already loaded
      });
  }

  // 3. Dynamic DOM Updater - ensures both pre-rendered HTML and hydrated DOM reflect latest data
  function applyDynamicDOMUpdates() {
    var data = window.__KTUJM_DATA__;
    if (!data) return;

    var isHindi = document.documentElement.lang === 'hi' ||
      window.location.pathname.includes('hindi') ||
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('index.html');

    // A. Update Ticker / Marquee
    var tickerContainer = document.querySelector('.animate-ticker');
    if (tickerContainer && data.tickerUpdates && data.tickerUpdates.length > 0) {
      var activeUpdates = data.tickerUpdates.filter(function (item) {
        return item.active !== false;
      }).sort(function (a, b) {
        return (a.order || 0) - (b.order || 0);
      });

      if (activeUpdates.length > 0) {
        // Duplicate array for seamless infinite marquee loop
        var loopedUpdates = activeUpdates.concat(activeUpdates);
        var tickerHtml = loopedUpdates.map(function (item) {
          var title = (isHindi ? (item.titleHi || item.titleEn) : (item.titleEn || item.titleHi)) || item.title || '';
          var newBadge = item.isNew
            ? '<span class="text-[10px] bg-red-600 text-white font-extrabold px-1.5 py-0.2 rounded uppercase animate-bounce">NEW</span>'
            : '';
          var link = item.link || '#';
          return '<a href="' + link + '" class="inline-flex items-center gap-2 hover:text-purple-900 transition-colors focus:outline-none text-slate-950 no-underline cursor-pointer">' +
            newBadge +
            '<span class="hover:underline underline-offset-4">' + title + '</span>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-900 opacity-60 inline"><path d="m9 18 6-6-6-6"/></svg>' +
            '</a>';
        }).join('');

        tickerContainer.innerHTML = tickerHtml;
      }
    }

    // B. Update Quick Forms & Downloads
    var formsContainer = document.querySelector('.space-y-3');
    // Verify it is inside the Quick Forms card (by checking parent or sibling header)
    var formsCard = formsContainer ? formsContainer.closest('.bg-white.rounded-2xl') : null;
    if (formsCard && data.quickForms && data.quickForms.length > 0) {
      var activeForms = data.quickForms.filter(function (form) {
        return form.active !== false;
      }).sort(function (a, b) {
        return (a.order || 0) - (b.order || 0);
      });

      if (activeForms.length > 0) {
        var formsHtml = activeForms.map(function (form) {
          var title = isHindi ? (form.titleHi || form.titleEn) : (form.titleEn || form.titleHi);
          var type = form.type || 'PDF';
          var size = form.size || '500 KB';
          var url = form.fileUrl || '#';

          return '<a href="' + url + '" ' + (url !== '#' ? 'download' : '') + ' class="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-100 hover:border-amber-300 transition-all flex items-center justify-between gap-3 group text-decoration-none text-slate-800">' +
            '<div class="flex items-start gap-2.5">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-700 group-hover:text-amber-600 mt-0.5 shrink-0"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>' +
            '<div>' +
            '<div class="text-xs font-bold text-slate-800 group-hover:text-purple-900 leading-tight">' + title + '</div>' +
            '<span class="text-[10px] text-slate-400 font-semibold mt-0.5 block">' + type + ' • ' + size + '</span>' +
            '</div>' +
            '</div>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400 group-hover:text-amber-600 shrink-0"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>' +
            '</a>';
        }).join('');

        formsContainer.innerHTML = formsHtml;
      }

      // C. Update Kulgeet in the card bottom if customized
      if (data.kulgeet) {
        var kulgeetBox = formsCard.querySelector('.bg-gradient-to-r.from-purple-900');
        if (kulgeetBox) {
          var kTitle = isHindi ? (data.kulgeet.titleHi || data.kulgeet.titleEn) : (data.kulgeet.titleEn || data.kulgeet.titleHi);
          var kDesc = isHindi ? (data.kulgeet.descHi || data.kulgeet.descEn) : (data.kulgeet.descEn || data.kulgeet.descHi);
          var kUrl = data.kulgeet.fileUrl || '#';

          kulgeetBox.innerHTML =
            '<a href="' + kUrl + '" ' + (kUrl !== '#' ? 'target="_blank"' : '') + ' class="text-white text-decoration-none block">' +
            '<div class="flex items-center gap-2 font-bold text-amber-300 mb-1">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"></path><path d="m18 2 4 4-4 4"></path><path d="M2 6h1.9c1.5 0 3 .9 3.7 2.2l1.4 2.4"></path><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"></path><path d="m18 14 4 4-4 4"></path></svg>' +
            '<span>' + kTitle + '</span>' +
            '</div>' +
            '<p class="text-[11px] text-slate-200 mb-0">' + kDesc + '</p>' +
            '</a>';
        }
      }
    }
  }

  // 4. Attach lifecycle listeners
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyDynamicDOMUpdates);
  } else {
    applyDynamicDOMUpdates();
  }

  // Re-run after window load and hydration attempts
  window.addEventListener('load', function () {
    setTimeout(applyDynamicDOMUpdates, 100);
    setTimeout(applyDynamicDOMUpdates, 600);
  });
})();
