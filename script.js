/**
 * YUKIE KIYOSHI — HIGHLY INTERACTIVE RETRO POP ENGINE
 * Features:
 * 1. Web Audio API Soundboard & Sound Effects
 * 2. Interactive Voice Over Soundboard (Commercial, Animation, 8-Bit, Chill Beat)
 * 3. Interactive Floating Sticker Palette & Stamp Mode (Click to stamp emojis + Clear)
 * 4. Simulated Retro Phone Call Modal & Camera Shutter Flash
 * 5. Interactive Fortune & Quote Dispenser Widget
 * 6. All 30 Certificates Manager: Live Real-Time Search, Category Filters, Grid & Carousel Views
 * 7. Sparkle Cursor Trail Effect
 * 8. Fullscreen Resume Modal & High-Res Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initAudioSFX();
  initClock();
  initPhoneSimulator();
  initCameraFilters();
  initFortuneBox();
  initCertificatesManager();
  initExperienceTabs();
  initConsoleSearch();
  initLightbox();
  initResumeModal();
  initStatsCounter();
  initSparkleCursor();
  initProjectsFilter();
  init3DTilt();
  initSkillBoost();
  initKeyboardShortcuts();
  initScrollEffects();
  initTypewriter();
  initStickerInteractions();
  initBrandMelody();
});

/* ==========================================================================
   1. WEB AUDIO API SOUND SYNTHESIZER
   ========================================================================== */
let audioCtx = null;
let sfxEnabled = true;

function getAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.12) {
  if (!sfxEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(gainVal, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function sfxClick() {
  playTone(540, 'sine', 0.08, 0.09);
}

function sfxPop() {
  playTone(880, 'triangle', 0.08, 0.13);
  setTimeout(() => playTone(1320, 'sine', 0.09, 0.1), 45);
}

function sfxChime() {
  [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
    setTimeout(() => playTone(f, 'sine', 0.18, 0.1), i * 65);
  });
}

function sfxShutter() {
  playTone(180, 'square', 0.04, 0.15);
  setTimeout(() => playTone(120, 'triangle', 0.08, 0.12), 40);
}

function sfxPhoneRing() {
  [800, 600, 800, 600, 900].forEach((f, i) => {
    setTimeout(() => playTone(f, 'square', 0.12, 0.09), i * 120);
  });
}

function sfxSweep() {
  [1200, 900, 700, 500, 350].forEach((f, i) => {
    setTimeout(() => playTone(f, 'sine', 0.08, 0.08), i * 40);
  });
}

function initAudioSFX() {
  const toggleBtn = document.getElementById('sfxToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sfxEnabled = !sfxEnabled;
      toggleBtn.innerHTML = sfxEnabled ? '🔊 SFX: ON' : '🔇 SFX: OFF';
      if (sfxEnabled) sfxPop();
    });
  }

  // Click sound on all interactive buttons
  document.querySelectorAll('button, .jelly-btn, .nav-link-btn, .exp-tab-btn, .app-icon-item, .manila-folder-card').forEach(el => {
    el.addEventListener('click', () => {
      sfxClick();
    });
  });
}

/* ==========================================================================
   2. LIVE SYSTEM CLOCK
   ========================================================================== */
function initClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    clockEl.textContent = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. CYBER GADGET PHONE SIMULATOR, CAMERA FLASH & INCOMING CALL
   ========================================================================== */
function initPhoneSimulator() {
  const slides = document.querySelectorAll('.phone-slide-img');
  const bubble = document.getElementById('phoneStatusBubble');
  const screen = document.querySelector('.phone-screen');
  const flash = document.getElementById('cameraFlashLayer');
  const prevBtn = document.getElementById('phonePrevBtn');
  const nextBtn = document.getElementById('phoneNextBtn');
  const loveBtn = document.getElementById('phoneLoveBtn');
  const callBtn = document.getElementById('phoneCallBtn');
  const snapBtn = document.getElementById('phoneSnapBtn');

  const callModal = document.getElementById('phoneCallModal');
  const callCloseBtn = document.getElementById('callCardCloseBtn');
  const callHangupBtn = document.getElementById('callCardHangupBtn');

  if (slides.length === 0) return;

  let currentIdx = 0;
  const messages = [
    'S1 Informatika • Telkom University 🎓',
    'AI Engineer & Creative Technologist ✦',
    'Professional Voice Talent & Narrator 🎙️',
    'Machine Learning & Software Systems 💻',
    'Scholar & Student of the Year 2024–2025 🌟',
    'Articulating Digital Innovation ✦'
  ];

  // Ensure all looping videos autoplay muted smoothly
  document.querySelectorAll('video[autoplay]').forEach(v => {
    v.muted = true;
    const p = v.play();
    if (p !== undefined) p.catch(() => {});
  });

  function triggerShutter() {
    sfxShutter();
    if (flash) {
      flash.classList.add('flashing');
      setTimeout(() => {
        flash.classList.remove('flashing');
        if (bubble) bubble.textContent = 'Snapshot captured! 📸 ✦';
      }, 120);
    }
  }

  function show(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    if (bubble) {
      bubble.textContent = messages[idx % messages.length];
    }
    currentIdx = idx;
  }

  function next() {
    show((currentIdx + 1) % slides.length);
    sfxPop();
  }

  function prev() {
    show((currentIdx - 1 + slides.length) % slides.length);
    sfxPop();
  }

  // Camera shutter flash when clicking phone screen or Snap button
  if (screen && flash) {
    screen.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      triggerShutter();
      const rect = screen.getBoundingClientRect();
      spawnConfetti(e.clientX || (rect.left + rect.width / 2), e.clientY || (rect.top + rect.height / 2), 16, ['📸', '✨', '✦', '⭐']);
    });
  }

  if (snapBtn) {
    snapBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerShutter();
      const rect = snapBtn.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width / 2, rect.top, 22, ['📸', '✨', '✦', '⭐', '🎉']);
    });
  }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  if (loveBtn) {
    loveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfxChime();
      if (bubble) bubble.textContent = 'Thank you for your appreciation & support ✦';
      spawnFloatingHeart();
      const rect = loveBtn.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width / 2, rect.top, 24, ['💖', '✨', '🌸', '💫', '✦']);
    });
  }

  if (callBtn && callModal) {
    callBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfxPhoneRing();
      callModal.classList.add('active');
    });
  }

  function closeCall() {
    if (callModal) callModal.classList.remove('active');
    sfxClick();
  }

  if (callCloseBtn) callCloseBtn.addEventListener('click', closeCall);
  if (callHangupBtn) callHangupBtn.addEventListener('click', closeCall);
  if (callModal) {
    callModal.addEventListener('click', (e) => {
      if (e.target === callModal) closeCall();
    });
  }

  // Cycle status messages smoothly
  let messageIdx = 0;
  setInterval(() => {
    messageIdx = (messageIdx + 1) % messages.length;
    if (bubble) {
      bubble.style.transition = 'opacity 0.25s ease';
      bubble.style.opacity = '0';
      setTimeout(() => {
        bubble.textContent = messages[messageIdx];
        bubble.style.opacity = '1';
      }, 250);
    }
  }, 4200);
}

/* ==========================================================================
   4. INTERACTIVE PHONE CAMERA FILTERS
   ========================================================================== */
function initCameraFilters() {
  const filterBtn = document.getElementById('phoneFilterBtn');
  const screenBody = document.getElementById('phoneScreenBody');
  const badge = document.getElementById('phoneFilterBadge');

  if (!filterBtn || !screenBody) return;

  const filters = [
    { id: 'normal', name: 'STANDARD LENS' },
    { id: 'vintage', name: '90s VINTAGE LENS' },
    { id: 'pastel', name: 'DREAMY PASTEL' },
    { id: 'vivid', name: 'VIVID POP' },
    { id: 'noir', name: 'CLASSIC NOIR' }
  ];

  let currentFilterIdx = 0;
  let badgeTimeout = null;

  function setFilter(index) {
    currentFilterIdx = (index + filters.length) % filters.length;
    const active = filters[currentFilterIdx];

    filters.forEach(f => {
      screenBody.classList.remove(`filter-${f.id}`);
    });

    if (active.id !== 'normal') {
      screenBody.classList.add(`filter-${active.id}`);
    }

    if (badge) {
      badge.textContent = active.name;
      badge.classList.add('active');
      clearTimeout(badgeTimeout);
      badgeTimeout = setTimeout(() => {
        badge.classList.remove('active');
      }, 1800);
    }
    sfxClick();
  }

  filterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setFilter(currentFilterIdx + 1);
  });

  // Expose globally for keyboard shortcut 'F'
  window.cyclePhoneFilter = () => setFilter(currentFilterIdx + 1);
}

/* ==========================================================================
   5. STARBURST CELEBRATION & FLOATING CONFETTI ENGINE
   ========================================================================== */
function spawnConfetti(originX, originY, count = 22, emojis = ['✦', '⭐', '✨', '💖', '🎉']) {
  const x = originX !== undefined ? originX : window.innerWidth / 2;
  const y = originY !== undefined ? originY : window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.position = 'fixed';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.fontSize = `${Math.random() * 1.1 + 0.85}rem`;
    p.style.pointerEvents = 'none';
    p.style.zIndex = '10002';
    p.style.userSelect = 'none';
    p.style.transition = 'transform 0.95s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.95s ease';
    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const distance = Math.random() * 130 + 50;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance - (Math.random() * 30);
    const rot = (Math.random() - 0.5) * 600;

    requestAnimationFrame(() => {
      p.style.transform = `translate(${destX}px, ${destY}px) rotate(${rot}deg) scale(${Math.random() * 0.4 + 0.8})`;
      p.style.opacity = '0';
    });

    setTimeout(() => p.remove(), 1000);
  }
}

function spawnFloatingHeart() {
  const el = document.createElement('div');
  el.textContent = '💖';
  el.style.position = 'fixed';
  el.style.bottom = '40%';
  el.style.left = '50%';
  el.style.transform = 'translate(-50%, -50%)';
  el.style.fontSize = '3.5rem';
  el.style.pointerEvents = 'none';
  el.style.zIndex = '9999';
  el.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
  document.body.appendChild(el);

  setTimeout(() => {
    el.style.transform = 'translate(-50%, -180px) scale(1.6)';
    el.style.opacity = '0';
  }, 30);

  setTimeout(() => el.remove(), 1300);
}

/* ==========================================================================
   6. INTERACTIVE FORTUNE & QUOTE DISPENSER
   ========================================================================== */
function initFortuneBox() {
  const btn = document.getElementById('spinFortuneBtn');
  const text = document.getElementById('fortuneText');

  const quotes = [
    '"Your voice is your superpower — dare to build, speak, and inspire with soul! ✦"',
    '"Great code solves problems, but great storytelling connects hearts 💖"',
    '"Continuous learning is the highest form of creative empowerment 🚀"',
    '"Turning coffee into clean algorithms and expressive audio reels ☕"',
    '"Informatics by day, voice actor by night — why choose when you can excel at both! 🎙️"',
    '"Believe in your creative journey. The next big milestone is already loading... ✨"',
    '"Kindness in communication is as impactful as precision in code 🌟"'
  ];

  if (btn && text) {
    btn.addEventListener('click', () => {
      sfxChime();
      btn.textContent = '🎲 Rolling...';
      btn.disabled = true;

      let rolls = 0;
      const interval = setInterval(() => {
        text.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        rolls++;
        if (rolls > 6) {
          clearInterval(interval);
          const finalQuote = quotes[Math.floor(Math.random() * quotes.length)];
          text.textContent = finalQuote;
          btn.textContent = '🎲 Spin New Quote!';
          btn.disabled = false;
          const rect = btn.getBoundingClientRect();
          spawnConfetti(rect.left + rect.width / 2, rect.top, 22, ['✨', '🎲', '💖', '🌟', '✦']);
        }
      }, 70);
    });
  }
}

/* ==========================================================================
   7. ALL 30 CERTIFICATES MANAGER (SEARCH, CATEGORY FILTERS & VIEW MODES)
   ========================================================================== */
function initCertificatesManager() {
  const track = document.getElementById('certScrollTrack');
  const searchInput = document.getElementById('certSearchInput');
  const counterEl = document.getElementById('certCounter');
  const filterPills = document.querySelectorAll('.cert-filter-pill');
  const gridBtn = document.getElementById('certGridViewBtn');
  const carouselBtn = document.getElementById('certCarouselViewBtn');
  const prevBtn = document.getElementById('certScrollPrev');
  const nextBtn = document.getElementById('certScrollNext');
  const certCards = document.querySelectorAll('.cert-item-card');

  if (!track || certCards.length === 0) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    certCards.forEach(card => {
      const cat = card.getAttribute('data-category') || '';
      const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const cap = (card.getAttribute('data-zoom-cap') || '').toLowerCase();
      const text = card.textContent.toLowerCase();

      const matchesCat = (currentCategory === 'all' || cat === currentCategory);
      const matchesSearch = !searchQuery || keywords.includes(searchQuery) || cap.includes(searchQuery) || text.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterEl) {
      counterEl.textContent = `Showing ${visibleCount} of ${certCards.length}`;
    }
  }

  // Live search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Category filter pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-filter') || 'all';
      sfxPop();
      applyFilters();
    });
  });

  // View Mode: Grid (All 30 visible at once) vs Carousel Slider
  if (gridBtn && carouselBtn) {
    gridBtn.addEventListener('click', () => {
      gridBtn.classList.add('active');
      carouselBtn.classList.remove('active');
      track.classList.remove('carousel-mode');
      track.classList.add('grid-mode');
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      sfxPop();
    });

    carouselBtn.addEventListener('click', () => {
      carouselBtn.classList.add('active');
      gridBtn.classList.remove('active');
      track.classList.remove('grid-mode');
      track.classList.add('carousel-mode');
      if (prevBtn) prevBtn.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'flex';
      sfxPop();
    });
  }

  // Carousel navigation step buttons
  const scrollStep = 320;
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollStep, behavior: 'smooth' });
      sfxClick();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      sfxClick();
    });
  }

  // Smooth mouse drag for carousel mode
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    if (!track.classList.contains('carousel-mode')) return;
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => { isDown = false; });
  track.addEventListener('mouseup', () => { isDown = false; });

  track.addEventListener('mousemove', (e) => {
    if (!isDown || !track.classList.contains('carousel-mode')) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  applyFilters();
}

/* ==========================================================================
   8. CONSOLE SEARCH / CHAT BAR
   ========================================================================== */
function initConsoleSearch() {
  const input = document.getElementById('consoleSearchInput');
  const sendBtn = document.getElementById('consoleSendBtn');
  const bubble = document.getElementById('phoneStatusBubble');

  if (!input || !sendBtn) return;

  function handleSend() {
    const val = input.value.trim().toLowerCase();
    sfxPop();

    let reply = "Yukie is currently in Bandung building AI & recording voice overs! ✦";
    if (val.includes('voice') || val.includes('audio') || val.includes('dub')) {
      reply = "Yukie has voiced 16+ commercial brands & animation projects! 🎙️";
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    } else if (val.includes('code') || val.includes('project') || val.includes('ai') || val.includes('ml')) {
      reply = "Check out all 15 academic machine learning & software projects! 💻";
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (val.includes('cv') || val.includes('resume')) {
      reply = "Opening Complete Resume Modal for you! 📄";
      const resumeModal = document.getElementById('resumeModalBackdrop');
      if (resumeModal) resumeModal.classList.add('active');
      spawnConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 26, ['📄', '✨', '🎓', '⭐']);
    } else if (val.includes('cert') || val.includes('sertif')) {
      reply = "All 30 verified certifications are listed below in credentials! ⚙️";
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
    } else if (val.includes('about') || val.includes('yuki') || val.includes('bio')) {
      reply = "Discovering Yukie's creative & tech journey in About! ✦";
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (val.includes('edu') || val.includes('telkom') || val.includes('kuliah')) {
      reply = "S1 Informatika • Telkom University Academic Timeline! 🎓";
      document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
    } else if (val.includes('award') || val.includes('moty') || val.includes('juara') || val.includes('prestasi')) {
      reply = "Mahasiswa '23 of The Year official honours & trophies! 🏆";
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      spawnConfetti(window.innerWidth / 2, window.innerHeight * 0.5, 24, ['🏆', '✨', '⭐', '🎓']);
    } else if (val.includes('call') || val.includes('telp')) {
      reply = "Simulating live call connected card! 📞";
      document.getElementById('phoneCallBtn')?.click();
    } else if (val.includes('filter') || val.includes('lensa') || val.includes('camera')) {
      reply = "Cycling phone retro camera filter! 📷";
      if (window.cyclePhoneFilter) window.cyclePhoneFilter();
    } else if (val.includes('contact') || val.includes('wa') || val.includes('email') || val.includes('chat')) {
      reply = "Opening direct contact cards for collaboration! 💬";
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (val.includes('help') || val.includes('shortcut')) {
      reply = "Opening Quick Keyboard Shortcuts guide! ⌨️";
      document.getElementById('shortcutsPillBtn')?.click();
    }

    if (bubble) bubble.textContent = reply;
    input.value = '';
    input.placeholder = reply;
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // 4-Colored Console Buttons (A, B, X, Y)
  const btnA = document.getElementById('btnConsoleGreen');
  const btnB = document.getElementById('btnConsoleRed');
  const btnX = document.getElementById('btnConsoleBlue');
  const btnY = document.getElementById('btnConsoleYellow');
  const btnSelect = document.getElementById('consoleSelectBtn');
  const btnStart = document.getElementById('consoleStartBtn');

  if (btnA) {
    btnA.addEventListener('click', () => {
      sfxPop();
      input.value = 'ai';
      handleSend();
    });
  }

  if (btnB) {
    btnB.addEventListener('click', () => {
      sfxClick();
      input.value = '';
      input.placeholder = "Search cleared! Type 'voice', 'project', 'resume'...";
      input.focus();
    });
  }

  if (btnX) {
    btnX.addEventListener('click', () => {
      sfxChime();
      const queries = ['voice', 'ai', 'resume', 'cert', 'about', 'award', 'call', 'filter'];
      input.value = queries[Math.floor(Math.random() * queries.length)];
      handleSend();
    });
  }

  if (btnY) {
    btnY.addEventListener('click', () => {
      sfxChime();
      const rect = btnY.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width / 2, rect.top, 24, ['⭐', '✨', '💖', '🎉', '✦']);
      if (bubble) bubble.textContent = "✦ BONUS STAGE ACTIVATED! 🎮";
    });
  }

  if (btnSelect) {
    btnSelect.addEventListener('click', () => {
      sfxClick();
      input.value = '';
      input.placeholder = "Type 'about', 'cert', 'code'...";
      input.focus();
    });
  }

  if (btnStart) {
    btnStart.addEventListener('click', handleSend);
  }

  // D-Pad Sound & Scroll Interaction
  ['dpadUp', 'dpadDown', 'dpadLeft', 'dpadRight'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        sfxClick();
        if (id === 'dpadUp') window.scrollBy({ top: -220, behavior: 'smooth' });
        if (id === 'dpadDown') window.scrollBy({ top: 220, behavior: 'smooth' });
      });
    }
  });
}

/* ==========================================================================
   9. EXPERIENCE TABS
   ========================================================================== */
function initExperienceTabs() {
  const tabBtns = document.querySelectorAll('.exp-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
      });

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.style.display = 'block';
        targetPane.classList.add('active');
      }
      sfxPop();
    });
  });
}

/* ==========================================================================
   10. LIGHTBOX ZOOM MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const viewImg = document.getElementById('lightboxViewImg');
  const viewCap = document.getElementById('lightboxViewCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (!modal) return;

  const triggerElements = document.querySelectorAll('[data-zoom-src]');

  triggerElements.forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-zoom-src');
      const cap = el.getAttribute('data-zoom-cap') || '';
      viewImg.src = src;
      viewCap.textContent = cap;
      modal.classList.add('active');
      sfxPop();
    });
  });

  function close() {
    modal.classList.remove('active');
    sfxClick();
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });
}

/* ==========================================================================
   11. FULLSCREEN COMPLETE RESUME MODAL
   ========================================================================== */
function initResumeModal() {
  const modal = document.getElementById('resumeModalBackdrop');
  const openBtns = document.querySelectorAll('.open-resume-btn');
  const closeBtn = document.getElementById('resumeModalClose');

  if (!modal) return;

  function open() {
    modal.classList.add('active');
    sfxChime();
    spawnConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 26, ['📄', '✨', '🎓', '⭐', '✦']);
  }

  function close() {
    modal.classList.remove('active');
    sfxClick();
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      open();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });
}

/* ==========================================================================
   12. STATS NUMBER COUNTUP ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statNums = document.querySelectorAll('.stat-count-num');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNums.forEach(el => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 20));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = `${current}+`;
          }, 45);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-counter-grid');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   13. SPARKLE CURSOR TRAIL
   ========================================================================== */
function initSparkleCursor() {
  const sparkles = ['✨', '✦', '⭐', '💖'];
  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 75) return; // Throttle sparkle creation

    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist < 20) return;

    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail-dot';
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.left = `${e.clientX + (Math.random() * 16 - 8)}px`;
    sparkle.style.top = `${e.clientY + (Math.random() * 16 - 8)}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 650);
  });
}

/* ==========================================================================
   14. INTERACTIVE PROJECTS CATEGORY FILTER
   ========================================================================== */
function initProjectsFilter() {
  const filterBar = document.getElementById('projectsFilterBar');
  const cards = document.querySelectorAll('.proj-folder-card');

  if (!filterBar || cards.length === 0) return;

  const pills = filterBar.querySelectorAll('.proj-filter-pill');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      sfxPop();

      cards.forEach(card => {
        const cat = card.getAttribute('data-proj-cat');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   15. TACTILE 3D PARALLAX TILT ON HOVER
   ========================================================================== */
function init3DTilt() {
  const tiltElements = document.querySelectorAll('.polaroid-card, .proj-folder-card, .hero-nav-pill-btn, .award-box-card, .contact-jelly-card');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // Attach click audio effect to contact cards
  document.querySelectorAll('.contact-jelly-card').forEach(card => {
    card.addEventListener('click', () => {
      sfxPop();
    });
  });

  // Attach celebratory starburst to award plaques
  document.querySelectorAll('.award-box-card, .award-trophy-badge').forEach(award => {
    award.addEventListener('click', (e) => {
      sfxChime();
      const rect = award.getBoundingClientRect();
      spawnConfetti(e.clientX || (rect.left + rect.width / 2), e.clientY || (rect.top + rect.height / 2), 24, ['🏆', '✨', '⭐', '🎓', '✦']);
    });
  });
}

/* ==========================================================================
   16. INTERACTIVE SKILL XP BOOST
   ========================================================================== */
function initSkillBoost() {
  const rows = document.querySelectorAll('.skill-meter-row');
  rows.forEach(row => {
    row.addEventListener('click', (e) => {
      sfxChime();
      const rect = row.getBoundingClientRect();
      const badge = document.createElement('div');
      badge.textContent = '+100 XP ✦';
      badge.style.position = 'fixed';
      badge.style.left = `${e.clientX || rect.right - 50}px`;
      badge.style.top = `${e.clientY || rect.top}px`;
      badge.style.fontFamily = 'var(--font-pixel)';
      badge.style.fontSize = '0.8rem';
      badge.style.fontWeight = 'bold';
      badge.style.color = '#15803d';
      badge.style.background = '#dcfce7';
      badge.style.border = '1.5px solid #15803d';
      badge.style.borderRadius = '999px';
      badge.style.padding = '2px 8px';
      badge.style.pointerEvents = 'none';
      badge.style.zIndex = '10001';
      badge.style.boxShadow = '2px 2px 0px #000';
      badge.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      document.body.appendChild(badge);

      requestAnimationFrame(() => {
        badge.style.transform = 'translateY(-28px)';
        badge.style.opacity = '0';
      });

      setTimeout(() => badge.remove(), 850);
    });
  });
}

/* ==========================================================================
   17. KEYBOARD SHORTCUTS & FLOATING MODAL
   ========================================================================== */
function initKeyboardShortcuts() {
  const pillBtn = document.getElementById('shortcutsPillBtn');
  const modal = document.getElementById('shortcutsModal');
  const closeBtn = document.getElementById('shortcutsCloseBtn');
  const dismissBtn = document.getElementById('shortcutsDismissBtn');

  function openShortcuts() {
    if (modal) {
      modal.classList.add('active');
      sfxPop();
    }
  }

  function closeShortcuts() {
    if (modal) {
      modal.classList.remove('active');
      sfxClick();
    }
  }

  if (pillBtn) pillBtn.addEventListener('click', openShortcuts);
  if (closeBtn) closeBtn.addEventListener('click', closeShortcuts);
  if (dismissBtn) dismissBtn.addEventListener('click', closeShortcuts);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeShortcuts();
    });
  }

  document.addEventListener('keydown', (e) => {
    // Avoid capturing key events when typing in inputs
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      if (modal && modal.classList.contains('active')) closeShortcuts();
      else openShortcuts();
      return;
    }

    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('active')) closeShortcuts();
      return;
    }

    // Number navigation
    const sectionMap = {
      '1': 'hero',
      '2': 'about',
      '3': 'experience',
      '4': 'projects',
      '5': 'certifications',
      '6': 'contact'
    };

    if (sectionMap[e.key]) {
      const target = document.getElementById(sectionMap[e.key]);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        sfxClick();
      }
      return;
    }

    // Key 'f' or 'F': Cycle phone filter
    if (e.key === 'f' || e.key === 'F') {
      if (window.cyclePhoneFilter) window.cyclePhoneFilter();
      return;
    }

    // Key 's' or 'S': Trigger camera snap
    if (e.key === 's' || e.key === 'S') {
      const snapBtn = document.getElementById('phoneSnapBtn');
      if (snapBtn) snapBtn.click();
      return;
    }

    // Key 'c' or 'C': Open call modal
    if (e.key === 'c' || e.key === 'C') {
      const callBtn = document.getElementById('phoneCallBtn');
      if (callBtn) callBtn.click();
      return;
    }

    // Key 'r' or 'R': Toggle resume modal
    if (e.key === 'r' || e.key === 'R') {
      const resumeModal = document.getElementById('resumeModalBackdrop');
      if (resumeModal) {
        if (resumeModal.classList.contains('active')) {
          resumeModal.classList.remove('active');
          sfxClick();
        } else {
          resumeModal.classList.add('active');
          sfxChime();
        }
      }
      return;
    }
  });
}

/* ==========================================================================
   18. SCROLL EFFECTS: PROGRESS BAR, SCROLL-SPY & BACK-TO-TOP BUTTON
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scrollProgressBar');
  const bttBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = ['hero', 'about', 'education', 'experience', 'projects', 'gallery', 'certificates', 'portfolio', 'skills', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function onScroll() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    // 1. Reading Progress Bar
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }

    // 2. Back to Top Button visibility
    if (bttBtn) {
      if (winScroll > 320) {
        bttBtn.classList.add('visible');
      } else {
        bttBtn.classList.remove('visible');
      }
    }

    // 3. Scroll-Spy Active Nav Item
    let currentActiveId = '';
    const scrollPosition = winScroll + 180;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.offsetTop <= scrollPosition) {
        currentActiveId = sec.id;
        break;
      }
    }

    if (currentActiveId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === `#${currentActiveId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (bttBtn) {
    bttBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sfxSweep();
      const rect = bttBtn.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width / 2, rect.top, 18, ['🚀', '✨', '⭐', '✦']);
    });
  }
}

/* ==========================================================================
   19. HERO DYNAMIC TYPEWRITER SUBTITLE
   ========================================================================== */
function initTypewriter() {
  const textEl = document.getElementById('typewriterText');
  const tagEl = document.getElementById('typewriterTag');
  if (!textEl) return;

  const roles = [
    'AI & Machine Learning Engineer ✦',
    'Professional Voice Talent & Narrator 🎙️',
    'Student of The Year (2024 & 2025) 🌟',
    'Creative Technologist & Builder 💻',
    'S1 Informatika • Telkom University 🎓'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let timer = null;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      textEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      textEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIdx === current.length) {
      speed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 350; // Pause before next word
    }

    timer = setTimeout(type, speed);
  }

  type();

  // Clicking the badge immediately skips to next role
  if (tagEl) {
    tagEl.addEventListener('click', () => {
      clearTimeout(timer);
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      charIdx = roles[roleIdx].length;
      textEl.textContent = roles[roleIdx];
      sfxPop();
      timer = setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
    });
  }
}

/* ==========================================================================
   20. CLICKABLE INTERACTIVE FLOATING STICKERS
   ========================================================================== */
function initStickerInteractions() {
  const stickers = document.querySelectorAll('.y2k-sticker');
  const retroEmojis = ['🦄', '🎮', '👾', '🎧', '🧁', '🚀', '✨', '⭐', '💖', '🌸', '🦋', '🎵', '🎶'];

  stickers.forEach(sticker => {
    sticker.addEventListener('click', (e) => {
      sfxChime();
      sticker.classList.remove('bounce-spin');
      void sticker.offsetWidth; // Trigger reflow
      sticker.classList.add('bounce-spin');

      const nextEmoji = retroEmojis[Math.floor(Math.random() * retroEmojis.length)];
      setTimeout(() => {
        sticker.textContent = nextEmoji;
      }, 250);

      const rect = sticker.getBoundingClientRect();
      spawnConfetti(e.clientX || (rect.left + rect.width / 2), e.clientY || (rect.top + rect.height / 2), 16, ['✨', '✦', '⭐', '💖']);
    });
  });
}

/* ==========================================================================
   21. INTERACTIVE NAVBAR BRAND LOGO MELODY
   ========================================================================== */
function initBrandMelody() {
  const brandBubble = document.querySelector('.nav-brand-bubble');
  if (!brandBubble) return;

  brandBubble.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });

    // Play 5-note retro victory chime
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
      setTimeout(() => playTone(freq, 'triangle', 0.16, 0.12), i * 75);
    });

    brandBubble.style.transform = 'scale(1.25) rotate(-8deg)';
    setTimeout(() => {
      brandBubble.style.transform = '';
    }, 350);

    const rect = brandBubble.getBoundingClientRect();
    spawnConfetti(rect.left + rect.width / 2, rect.bottom + 10, 20, ['✦', '⭐', '✨', '💖']);
  });
}

