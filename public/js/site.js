/* ==========================================================================
   KTUJM Web Portal - JavaScript (HJU Pattern & Modern Controls)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Anchor scroll down behavior matching HJU anchor-down
  const anchorDown = document.getElementById('anchor-down');
  if (anchorDown) {
    anchorDown.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector('#leadership') || document.querySelector('#about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // 2. Language switching logic matching HJU dropdown
  document.querySelectorAll('[data-valuetype="language"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-value');
      const currentPath = window.location.pathname;

      if (lang === 'english') {
        // If on ASP.NET Core MVC route or static
        if (currentPath.includes('.html')) {
          window.location.href = 'index_en.html';
        } else {
          window.location.href = '/en';
        }
      } else if (lang === 'hindi') {
        if (currentPath.includes('.html')) {
          window.location.href = 'index.html';
        } else {
          window.location.href = '/hindi';
        }
      }
    });
  });

  // 3. Tab switching for Programmes (PG Diploma, Graduation, Post Graduation, Research)
  const tabButtons = document.querySelectorAll('#myTab [data-bs-toggle="tab"]');
  tabButtons.forEach(function (tabBtn) {
    tabBtn.addEventListener('click', function (e) {
      e.preventDefault();
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      const targetSelector = this.getAttribute('data-bs-target') || this.getAttribute('href');
      const targetPane = document.querySelector(targetSelector);
      if (targetPane) {
        document.querySelectorAll('#myTabContent .tab-pane').forEach(pane => {
          pane.classList.remove('show', 'active');
        });
        targetPane.classList.add('show', 'active');
      }
    });
  });

  // 4. Quick Admission Inquiry Form Handler
  const inquiryForm = document.getElementById('admissionInquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('inquiryName')?.value || 'Student';
      const course = document.getElementById('inquiryCourse')?.value || 'Mass Communication';
      const feedback = document.getElementById('inquiryFeedback');
      
      if (feedback) {
        feedback.className = 'alert alert-success mt-3';
        feedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your admission interest in <em>${course}</em> has been registered. The Academic Cell will contact you shortly.`;
        feedback.classList.remove('d-none');
      }

      inquiryForm.reset();
      setTimeout(function () {
        const modalEl = document.getElementById('admissionModal');
        if (modalEl && window.bootstrap) {
          const modal = bootstrap.Modal.getInstance(modalEl);
          if (modal) modal.hide();
        }
      }, 3500);
    });
  }

  // 5. Pre-select course in modal when clicking "Inquire / Apply" on any course card
  document.querySelectorAll('[data-inquire-course]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const courseName = this.getAttribute('data-inquire-course');
      const courseSelect = document.getElementById('inquiryCourse');
      if (courseSelect && courseName) {
        courseSelect.value = courseName;
      }
    });
  });

  // 6. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
