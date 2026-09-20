(function () {
  'use strict';

  const ar = {
    skip:'الانتقال إلى المحتوى الرئيسي', university:'جامعة الملك خالد', college:'كلية علوم الحاسب', department:'قسم علوم الحاسب',
    menu:'القائمة', navigation:'التنقل', home:'الرئيسية', about:'عن القسم', contact:'التواصل', feedback:'التقييم',
    location:'الموقع', locationText:'المملكة العربية السعودية · عسير · أبها\nص.ب 960 · الرمز البريدي 61421', footerLine:'قسم علوم الحاسب · كلية علوم الحاسب', closeMenu:'إغلاق القائمة',
    homeKicker:'كلية علوم الحاسب', homeTitle1:'قسم', homeTitle2:'علوم الحاسب',
    homeLead:'بوابة أكاديمية واضحة للتعرّف على القسم وبرامجه ومساراته ومعلومات التواصل في جامعة الملك خالد.',
    homeAboutBtn:'عن القسم', homeContactBtn:'معلومات التواصل', factsTitle:'لمحة عن القسم', factEstablished:'تأسيس القسم', factDuration:'مدة برنامج البكالوريوس', factCredits:'ساعات برنامج البكالوريوس',
    programsKicker:'البرامج الأكاديمية', programsTitle:'الدراسة والتطور في علوم الحاسب', programsIntro:'يقدم القسم برامج في مرحلة البكالوريوس والدراسات العليا لدعم التطور الأكاديمي والمهني في مجالات الحوسبة.',
    undergraduate:'بكالوريوس', postgraduate:'دراسات عليا', bachelorTitle:'بكالوريوس علوم الحاسب', bachelorText:'برنامج مدته أربع سنوات يركز على المعارف الأساسية والمهارات التطبيقية في مجالات علوم الحاسب.',
    mscTitle:'ماجستير علوم الحاسب', mscText:'دراسة متقدمة للطلاب الراغبين في تعميق المعرفة والبحث في موضوعات علوم الحاسب.', aiTitle:'ماجستير الذكاء الاصطناعي', aiText:'برنامج دراسات عليا يركز على المعرفة الحديثة وتطبيقات الذكاء الاصطناعي.',
    pathwaysKicker:'المسارات الأكاديمية', pathwaysTitle:'مجالات تركيز داخل البرنامج', pathwaysText:'يتضمن برنامج بكالوريوس علوم الحاسب مسارات تساعد الطالب على التعمق في مجالات تطبيقية محددة.',
    track1:'الذكاء الاصطناعي', track2:'هندسة البرمجيات', track3:'الأمن السيبراني', infoKicker:'معلومات القسم', infoTitle:'الوصول إلى المعلومات بسهولة', infoText:'استخدم القائمة للانتقال إلى نبذة القسم ومعلومات التواصل ونموذج التقييم.', openMenu:'فتح القائمة الرئيسية',
    aboutKicker:'عن القسم', aboutTitle:'قسم علوم الحاسب', aboutLead:'أساس أكاديمي منظم وبرامج دراسية تهيئ الطلبة للعمل والتطور في مجالات الحوسبة.', overviewKicker:'نبذة عن القسم', overviewTitle:'علوم الحاسب في جامعة الملك خالد',
    overviewP1:'تأسس قسم علوم الحاسب في العام الأكاديمي 2000/2001 ضمن كلية علوم الحاسب بجامعة الملك خالد.', overviewP2:'يقدم القسم برنامج بكالوريوس علوم الحاسب لمدة أربع سنوات وبواقع 138 ساعة معتمدة، إضافة إلى برامج دراسات عليا. ويشمل برنامج البكالوريوس مسارات في الذكاء الاصطناعي وهندسة البرمجيات والأمن السيبراني.',
    progressionKicker:'التدرج الدراسي', progressionTitle:'من الأساسيات إلى التخصص', progressionIntro:'يربط البرنامج بين أساسيات الحوسبة والمقررات المتقدمة والمجالات التطبيقية، بما يساعد الطالب على بناء معرفة مترابطة.',
    foundationTitle:'الأساسيات', foundationText:'البرمجة وحل المشكلات وهياكل البيانات والمفاهيم الأساسية في الحوسبة.', systemsTitle:'المعارف الأساسية', systemsText:'الخوارزميات وقواعد البيانات والشبكات وأنظمة التشغيل وتطوير البرمجيات.',
    specializationTitle:'التخصص', specializationText:'مسارات تركيز في الذكاء الاصطناعي وهندسة البرمجيات والأمن السيبراني.', advancedTitle:'الدراسات المتقدمة', advancedText:'برامج دراسات عليا توسع المعرفة من خلال مقررات متقدمة وبحث علمي.',
    opportunitiesKicker:'البرامج', opportunitiesTitle:'الفرص الأكاديمية', opportunitiesIntro:'تشمل البرامج المنشورة من الكلية برامج بكالوريوس ودراسات عليا مرتبطة بقسم علوم الحاسب.', undergradProgram:'برنامج بكالوريوس', postgradProgram:'برنامج دراسات عليا',
    contactKicker:'التواصل', contactTitle:'التواصل مع القسم', contactLead:'معلومات الاتصال والموقع الرسمي للقسم في مكان واحد.', deptContact:'تواصل القسم', email:'البريد الإلكتروني', universityLabel:'الجامعة', sendEmail:'إرسال بريد إلكتروني', postal:'العنوان البريدي',
    contactNoteKicker:'قناة التواصل', contactNoteTitle:'استفسارات القسم', contactNoteText:'يمكن استخدام البريد الإلكتروني المنشور للاستفسارات الأكاديمية والإدارية المتعلقة بقسم علوم الحاسب.',
    feedbackKicker:'تقييم الموقع', feedbackTitle:'شاركنا رأيك', feedbackLead:'يساعد هذا النموذج في تقييم وضوح المحتوى والتنقل والتصميم وتجربة الاستخدام على الأجهزة المختلفة.', feedbackIntroTitle:'تقييم مختصر', feedbackIntroText:'اختر درجة من 1 إلى 5 لكل جانب، ثم اكتب ملاحظة قصيرة.',
    participantCode:'رمز المشارك', ease:'سهولة الاستخدام', navigationClarity:'وضوح التنقل', contentClarity:'وضوح المحتوى', visualDesign:'التصميم المرئي', mobileUsability:'الاستخدام على الهاتف/الجهاز', rate:'اختر 1–5',
    workedWell:'ما الذي أعجبك في الموقع؟', improvement:'ما الذي تقترح تحسينه؟', shortPoint:'اكتب ملاحظة قصيرة...', shortSuggestion:'اكتب اقتراحًا قصيرًا...', submitFeedback:'إرسال التقييم', thanks:'شكرًا. أصبح التقييم جاهزًا للمشاركة.', copyResponse:'نسخ الرد', shareResponse:'مشاركة الرد', copied:'تم النسخ', copiedShare:'تم النسخ للمشاركة'
  };

  const html=document.documentElement, body=document.body;
  const menuButton=document.querySelector('.menu-button'), panel=document.querySelector('.menu-panel'), closeButton=document.querySelector('.menu-close'), overlay=document.querySelector('[data-menu-overlay]');
  const languageButtons=[...document.querySelectorAll('[data-language-toggle]')];
  const get=(k,d)=>{try{return localStorage.getItem(k)||d}catch(_){return d}}, set=(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}};

  document.querySelectorAll('[data-i18n]').forEach(el=>{if(!el.dataset.en)el.dataset.en=el.textContent.trim()});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{if(!el.dataset.enPlaceholder)el.dataset.enPlaceholder=el.getAttribute('placeholder')||''});

  function openMenu(){if(!panel||!menuButton||!overlay)return;panel.classList.add('open');panel.setAttribute('aria-hidden','false');menuButton.setAttribute('aria-expanded','true');overlay.hidden=false;body.classList.add('menu-open')}
  function closeMenu(focus){if(!panel||!menuButton||!overlay)return;panel.classList.remove('open');panel.setAttribute('aria-hidden','true');menuButton.setAttribute('aria-expanded','false');overlay.hidden=true;body.classList.remove('menu-open');if(focus)menuButton.focus()}
  if(menuButton)menuButton.addEventListener('click',openMenu); if(closeButton)closeButton.addEventListener('click',()=>closeMenu(true)); if(overlay)overlay.addEventListener('click',()=>closeMenu(false));
  document.querySelectorAll('[data-open-menu]').forEach(b=>b.addEventListener('click',openMenu)); document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel&&panel.classList.contains('open'))closeMenu(true)});
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase(); document.querySelectorAll('[data-nav]').forEach(a=>{if((a.getAttribute('href')||'').toLowerCase()===current)a.setAttribute('aria-current','page')});

  function applyLanguage(lang,closeAfter){
    const isAr=lang==='ar'; html.lang=isAr?'ar':'en'; html.dir=isAr?'rtl':'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;el.textContent=isAr&&ar[k]?ar[k]:el.dataset.en});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;el.setAttribute('placeholder',isAr&&ar[k]?ar[k]:el.dataset.enPlaceholder)});
    languageButtons.forEach(btn=>{btn.textContent=isAr?'English':'العربية';btn.setAttribute('aria-pressed',isAr?'true':'false');btn.setAttribute('aria-label',isAr?'Switch to English':'التبديل إلى العربية')});
    if(closeButton)closeButton.setAttribute('aria-label',isAr?ar.closeMenu:'Close menu'); set('kku-site-language',isAr?'ar':'en'); if(closeAfter&&panel&&panel.classList.contains('open'))closeMenu(false)
  }
  applyLanguage(get('kku-site-language','en'),false); languageButtons.forEach(btn=>btn.addEventListener('click',()=>applyLanguage(html.lang==='ar'?'en':'ar',true)));

  const form=document.querySelector('#feedbackForm'); if(!form)return;
  const status=document.querySelector('#feedbackStatus'), summary=document.querySelector('#feedbackSummary'), copyButton=document.querySelector('#copyFeedback'), shareButton=document.querySelector('#shareFeedback'); let latest='';
  const text=d=>['KKU Website Feedback',`Participant: ${d.tester}`,`Ease of use: ${d.usability}/5`,`Navigation: ${d.navigation}/5`,`Content clarity: ${d.content}/5`,`Visual design: ${d.visual}/5`,`Mobile/device usability: ${d.mobile}/5`,`Worked well: ${d.liked}`,`Suggested improvement: ${d.improvement}`].join('\n');
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}latest=text(Object.fromEntries(new FormData(form).entries()));if(summary)summary.textContent=latest;if(status){status.hidden=false;status.scrollIntoView({behavior:'smooth',block:'nearest'})}});
  if(copyButton)copyButton.addEventListener('click',async()=>{if(!latest)return;try{await navigator.clipboard.writeText(latest);copyButton.textContent=html.lang==='ar'?ar.copied:'Copied'}catch(_){const x=document.createElement('textarea');x.value=latest;document.body.appendChild(x);x.select();document.execCommand('copy');x.remove()}setTimeout(()=>copyButton.textContent=html.lang==='ar'?ar.copyResponse:'Copy Response',1200)});
  if(shareButton)shareButton.addEventListener('click',async()=>{if(!latest)return;if(navigator.share){try{await navigator.share({title:'KKU Website Feedback',text:latest});return}catch(_){}}try{await navigator.clipboard.writeText(latest);shareButton.textContent=html.lang==='ar'?ar.copiedShare:'Copied to share'}catch(_){}setTimeout(()=>shareButton.textContent=html.lang==='ar'?ar.shareResponse:'Share Response',1400)});
})();