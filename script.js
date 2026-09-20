(function () {
  const translations = {
    ar: {
      skip: 'الانتقال إلى المحتوى الرئيسي',
      university: 'جامعة الملك خالد',
      college: 'كلية علوم الحاسب',
      department: 'قسم علوم الحاسب',
      menu: 'القائمة',
      navigation: 'التنقل',
      home: 'الرئيسية',
      about: 'عن القسم',
      contact: 'التواصل',
      feedback: 'التقييم',
      location: 'الموقع',
      locationText: 'المملكة العربية السعودية · عسير · أبها\nص.ب 960 · الرمز البريدي 61421',
      footerLine: 'قسم علوم الحاسب · كلية علوم الحاسب',
      languageButton: 'English',
      closeMenu: 'إغلاق القائمة',

      homeKicker: 'كلية علوم الحاسب',
      homeTitle1: 'قسم',
      homeTitle2: 'علوم الحاسب',
      homeLead: 'بوابة أكاديمية واضحة للتعرّف على القسم وبرامجه ومساراته ومعلومات التواصل في جامعة الملك خالد.',
      homeAboutBtn: 'عن القسم',
      homeContactBtn: 'معلومات التواصل',
      factsTitle: 'لمحة عن القسم',
      factEstablished: 'تأسيس القسم',
      factDuration: 'مدة برنامج البكالوريوس',
      factCredits: 'ساعات برنامج البكالوريوس',
      programsKicker: 'البرامج الأكاديمية',
      programsTitle: 'مسارات دراسية في علوم الحاسب',
      programsIntro: 'يقدم القسم برامج في مرحلة البكالوريوس والدراسات العليا لدعم التطور الأكاديمي والمهني في مجالات الحوسبة.',
      undergraduate: 'بكالوريوس',
      postgraduate: 'دراسات عليا',
      bachelorTitle: 'بكالوريوس علوم الحاسب',
      bachelorText: 'برنامج مدته أربع سنوات يركز على المعارف الأساسية والمهارات التطبيقية في مجالات علوم الحاسب.',
      mscTitle: 'ماجستير علوم الحاسب',
      mscText: 'دراسة متقدمة للطلاب الراغبين في تعميق المعرفة والبحث في موضوعات علوم الحاسب.',
      aiTitle: 'ماجستير الذكاء الاصطناعي',
      aiText: 'برنامج دراسات عليا يركز على المعرفة الحديثة وتطبيقات الذكاء الاصطناعي.',
      pathwaysKicker: 'المسارات الأكاديمية',
      pathwaysTitle: 'مجالات تركيز داخل البرنامج',
      pathwaysText: 'يتضمن برنامج بكالوريوس علوم الحاسب مسارات تساعد الطالب على التعمق في مجالات تطبيقية محددة.',
      track1: 'الذكاء الاصطناعي',
      track2: 'هندسة البرمجيات',
      track3: 'الأمن السيبراني',
      infoKicker: 'معلومات القسم',
      infoTitle: 'الوصول إلى المعلومات بسهولة',
      infoText: 'يمكن استخدام القائمة للوصول إلى نبذة القسم والبرامج ومعلومات التواصل ونموذج التقييم.',
      openMenu: 'فتح القائمة الرئيسية',

      aboutKicker: 'عن القسم',
      aboutTitle: 'قسم علوم الحاسب',
      aboutLead: 'أساس أكاديمي منظم وبرامج دراسية تهيئ الطلبة للعمل والتطور في مجالات الحوسبة.',
      overviewKicker: 'نبذة عن القسم',
      overviewTitle: 'علوم الحاسب في جامعة الملك خالد',
      overviewP1: 'تأسس قسم علوم الحاسب في العام الأكاديمي 2000/2001 ضمن كلية علوم الحاسب بجامعة الملك خالد.',
      overviewP2: 'يقدم القسم برنامج بكالوريوس علوم الحاسب لمدة أربع سنوات وبواقع 138 ساعة معتمدة، إضافة إلى برامج دراسات عليا. ويشمل برنامج البكالوريوس مسارات في الذكاء الاصطناعي وهندسة البرمجيات والأمن السيبراني.',
      progressionKicker: 'التدرج الدراسي',
      progressionTitle: 'من الأساسيات إلى التخصص',
      progressionIntro: 'يربط البرنامج بين أساسيات الحوسبة والمقررات المتقدمة والمجالات التطبيقية، بما يساعد الطالب على بناء معرفة مترابطة.',
      foundationTitle: 'الأساسيات',
      foundationText: 'البرمجة وحل المشكلات وهياكل البيانات والمفاهيم الأساسية في الحوسبة.',
      systemsTitle: 'المعارف الأساسية',
      systemsText: 'الخوارزميات وقواعد البيانات والشبكات وأنظمة التشغيل وتطوير البرمجيات.',
      specializationTitle: 'التخصص',
      specializationText: 'مسارات تركيز في الذكاء الاصطناعي وهندسة البرمجيات والأمن السيبراني.',
      advancedTitle: 'الدراسات المتقدمة',
      advancedText: 'برامج دراسات عليا توسع المعرفة من خلال مقررات متقدمة وبحث علمي.',
      opportunitiesKicker: 'البرامج',
      opportunitiesTitle: 'الفرص الأكاديمية',
      opportunitiesIntro: 'تشمل البرامج المنشورة من الكلية برامج بكالوريوس ودراسات عليا مرتبطة بقسم علوم الحاسب.',
      undergradProgram: 'برنامج بكالوريوس',
      postgradProgram: 'برنامج دراسات عليا',

      contactKicker: 'التواصل',
      contactTitle: 'التواصل مع القسم',
      contactLead: 'معلومات الاتصال والموقع الرسمي للقسم في مكان واحد.',
      deptContact: 'تواصل القسم',
      email: 'البريد الإلكتروني',
      universityLabel: 'الجامعة',
      sendEmail: 'إرسال بريد إلكتروني',
      postal: 'العنوان البريدي',
      contactNoteKicker: 'قناة التواصل',
      contactNoteTitle: 'استفسارات القسم',
      contactNoteText: 'يمكن استخدام البريد الإلكتروني المنشور للاستفسارات الأكاديمية والإدارية المتعلقة بقسم علوم الحاسب.',

      feedbackKicker: 'تقييم الموقع',
      feedbackTitle: 'شاركنا رأيك',
      feedbackLead: 'يساعد هذا النموذج في تقييم وضوح المحتوى والتنقل والتصميم وتجربة الاستخدام على الأجهزة المختلفة.',
      feedbackIntroTitle: 'تقييم مختصر',
      feedbackIntroText: 'اختر درجة من 1 إلى 5 لكل جانب، ثم اكتب ملاحظة قصيرة إن رغبت.',
      participantCode: 'رمز المشارك',
      ease: 'سهولة الاستخدام',
      navigationClarity: 'وضوح التنقل',
      contentClarity: 'وضوح المحتوى',
      visualDesign: 'التصميم المرئي',
      mobileUsability: 'الاستخدام على الهاتف/الجهاز',
      rate: 'اختر 1–5',
      workedWell: 'ما الذي أعجبك في الموقع؟',
      improvement: 'ما الذي تقترح تحسينه؟',
      shortPoint: 'اكتب ملاحظة قصيرة...',
      shortSuggestion: 'اكتب اقتراحًا قصيرًا...',
      submitFeedback: 'إرسال التقييم',
      thanks: 'شكرًا. أصبح التقييم جاهزًا للمشاركة.',
      copyResponse: 'نسخ الرد',
      shareResponse: 'مشاركة الرد',
      copied: 'تم النسخ',
      copiedShare: 'تم النسخ للمشاركة'
    }
  };

  const body = document.body;
  const html = document.documentElement;
  const menuButton = document.querySelector('.menu-button');
  const panel = document.querySelector('.menu-panel');
  const closeButton = document.querySelector('.menu-close');
  const overlay = document.querySelector('[data-menu-overlay]');
  const openMenuButtons = document.querySelectorAll('[data-open-menu]');
  const languageToggle = document.querySelector('[data-language-toggle]');

  function storageGet(key, fallback = null) {
    try { return localStorage.getItem(key) ?? fallback; } catch (_) { return fallback; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(link => {
    if ((link.getAttribute('href') || '').toLowerCase() === current) {
      link.setAttribute('aria-current', 'page');
    }
  });

  function openMenu() {
    if (!panel || !menuButton || !overlay) return;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
    overlay.hidden = false;
    body.classList.add('menu-open');
    setTimeout(() => closeButton && closeButton.focus(), 30);
  }

  function closeMenu(returnFocus = true) {
    if (!panel || !menuButton || !overlay) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
    overlay.hidden = true;
    body.classList.remove('menu-open');
    if (returnFocus) menuButton.focus();
  }

  menuButton && menuButton.addEventListener('click', openMenu);
  closeButton && closeButton.addEventListener('click', () => closeMenu());
  overlay && overlay.addEventListener('click', () => closeMenu());
  openMenuButtons.forEach(btn => btn.addEventListener('click', openMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel && panel.classList.contains('open')) closeMenu();
  });

  function applyLanguage(lang) {
    const isArabic = lang === 'ar';
    html.lang = isArabic ? 'ar' : 'en';
    html.dir = isArabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!el.dataset.en) el.dataset.en = el.textContent.trim();
      const key = el.dataset.i18n;
      el.textContent = isArabic && translations.ar[key] ? translations.ar[key] : el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      if (!el.dataset.enPlaceholder) el.dataset.enPlaceholder = el.getAttribute('placeholder') || '';
      const key = el.dataset.i18nPlaceholder;
      el.setAttribute('placeholder', isArabic && translations.ar[key] ? translations.ar[key] : el.dataset.enPlaceholder);
    });
    if (languageToggle) languageToggle.textContent = isArabic ? translations.ar.languageButton : 'العربية';
    if (closeButton) closeButton.setAttribute('aria-label', isArabic ? translations.ar.closeMenu : 'Close menu');
    storageSet('kku-site-language', isArabic ? 'ar' : 'en');
  }

  const savedLanguage = storageGet('kku-site-language', 'en');
  applyLanguage(savedLanguage);
  languageToggle && languageToggle.addEventListener('click', () => applyLanguage(html.lang === 'ar' ? 'en' : 'ar'));

  const form = document.querySelector('#feedbackForm');
  if (!form) return;
  const status = document.querySelector('#feedbackStatus');
  const summary = document.querySelector('#feedbackSummary');
  const copyButton = document.querySelector('#copyFeedback');
  const shareButton = document.querySelector('#shareFeedback');
  let latestText = '';

  function buildText(data) {
    return [
      'KKU Website Feedback',
      `Participant: ${data.tester}`,
      `Ease of use: ${data.usability}/5`,
      `Navigation: ${data.navigation}/5`,
      `Content clarity: ${data.content}/5`,
      `Visual design: ${data.visual}/5`,
      `Mobile/device usability: ${data.mobile}/5`,
      `Worked well: ${data.liked}`,
      `Suggested improvement: ${data.improvement}`
    ].join('\n');
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    latestText = buildText(data);
    try {
      const existing = JSON.parse(storageGet('kku-cs-feedback', '[]'));
      existing.push({ ...data, savedAt: new Date().toISOString() });
      storageSet('kku-cs-feedback', JSON.stringify(existing));
    } catch (_) {}
    summary.textContent = latestText;
    status.hidden = false;
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  copyButton && copyButton.addEventListener('click', async () => {
    if (!latestText) return;
    try {
      await navigator.clipboard.writeText(latestText);
      copyButton.textContent = html.lang === 'ar' ? translations.ar.copied : 'Copied';
      setTimeout(() => { copyButton.textContent = html.lang === 'ar' ? translations.ar.copyResponse : 'Copy Response'; }, 1400);
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = latestText;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  });

  shareButton && shareButton.addEventListener('click', async () => {
    if (!latestText) return;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'KKU Website Feedback', text: latestText });
        return;
      } catch (_) {}
    }
    try {
      await navigator.clipboard.writeText(latestText);
      shareButton.textContent = html.lang === 'ar' ? translations.ar.copiedShare : 'Copied to share';
      setTimeout(() => { shareButton.textContent = html.lang === 'ar' ? translations.ar.shareResponse : 'Share Response'; }, 1600);
    } catch (_) {}
  });
})();
