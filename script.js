(() => {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const languageToggle = document.querySelector('[data-language]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const ar = {
    skip: 'انتقل إلى المحتوى',
    brandRole: 'مطور أوراكل APEX',
    navExpertise: 'الخبرات', navWork: 'أعمال مختارة', navExperience: 'المسيرة', navCredentials: 'الشهادات', navContact: 'تواصل',
    resume: 'السيرة الذاتية', menuOpen: 'فتح قائمة التنقل', menuClose: 'إغلاق قائمة التنقل',
    availability: 'متاح لفرص Oracle APEX · مصر وأوروبا والعمل عن بُعد',
    heroKicker: 'مطور Oracle APEX · مهندس برمجيات',
    heroTitle: 'أطوّر <em>تطبيقات مؤسسية</em> تدفع العمل إلى الأمام.',
    heroSummary: 'أحوّل عمليات الأعمال المعقدة إلى أنظمة Oracle APEX واضحة وموثوقة، مدعومة بخبرة قوية في قواعد البيانات وتطوير الويب والأتمتة.',
    exploreWork: 'استكشف أعمالي المختارة', talk: 'لنتحدث',
    proofSince: 'أبني أنظمة فعلية منذ', proofCert: 'شهادتان احترافيتان من Oracle', proofAutomation: 'تسريع سير العمل عبر الأتمتة',
    portraitLabel: 'أعمل حاليًا لدى', scroll: 'مرر لاستكشاف المزيد',
    expertiseLabel: 'القيمة التي أقدمها', expertiseTitle: 'أبني في المساحة بين <em>البيانات</em> و<em>القرارات.</em>',
    expertiseLead: 'أجمع بين تطوير تطبيقات Oracle وهندسة البرمجيات العملية لإنشاء أنظمة يعتمد عليها المستخدمون كل يوم.',
    expertiseBody: 'في EPC، أعمل على متطلبات الأعمال ومنطق قواعد البيانات وواجهات التطبيقات والبنية التحتية والأتمتة. أهتم بالوضوح للمستخدمين، وسهولة الصيانة للفرق، والنتائج القابلة للقياس للمؤسسة.',
    cap1Title: 'تطبيقات APEX المؤسسية', cap1Body: 'وحدات HR وCRM، ومسارات عمل آمنة، وصفحات متجاوبة، ونماذج مخصصة، وتقارير تشغيلية مبنية على متطلبات فعلية.',
    cap2Title: 'قواعد البيانات والبنية التحتية', cap2Body: 'خبرة عملية مع Oracle Linux وبيئات Oracle 19c، لربط بنية تحتية موثوقة بعملية تطوير التطبيقات.',
    cap3Title: 'الويب والأتمتة', cap3Body: 'تطبيقات Laravel بلوحات تحكم قائمة على الصلاحيات، وأدوات PowerShell تزيل الخطوات المتكررة من سير العمل.',
    workLabel: 'أعمال مختارة', workTitle: 'أنظمة مصممة حول <em>طريقة سير العمل الفعلية.</em>', workIntro: 'ثلاثة نماذج من خبرتي في تطبيقات المؤسسات والويب وهندسة الأنظمة.',
    inProduction: 'يعمل في بيئة الإنتاج', case1Title: 'تطبيقات أعمال باستخدام Oracle APEX',
    case1Body: 'تطبيقات HR وCRM تحوّل المتطلبات التشغيلية إلى مسارات عمل منظمة ونماذج مخصصة وتقارير مفيدة.',
    challenge: 'التحدي', case1Challenge: 'تحتاج العمليات والبيانات المعقدة إلى مسار واضح يخدم مستخدمين بصلاحيات مختلفة.',
    contribution: 'مساهمتي', case1Contribution: 'مسارات التطبيق والنماذج المخصصة والتقارير وأعمال قواعد البيانات ودعم بنية Oracle التحتية.',
    liveWebsite: 'موقع يعمل فعليًا', case2Title: 'منصة EPC الرقمية',
    case2Body: 'موقع إنتاجي مبني بـLaravel طوره فريق من شخصين، مع لوحة تحكم منظمة تدعم صلاحيات Super Admin وAdmin وUser.',
    responsibility: 'المسؤولية', case2Responsibility: 'خصائص الخلفية ومسارات لوحة التحكم وتجارب مبنية على الصلاحيات وتحسينات مستمرة في بيئة الإنتاج.',
    outcome: 'النتيجة', case2Outcome: 'منصة مؤسسية حية تواصل دعم الحضور الرقمي لشركة EPC.', visitLive: 'زيارة الموقع الفعلي',
    publicRepo: 'مستودع عام', case3Title: 'تطبيقات عملية في Embedded Linux',
    case3Body: 'تطبيقات عملية باستخدام C وLinux طورتها خلال دبلومة الأنظمة المضمنة، لتوسيع خبرتي الهندسية تحت مستوى التطبيقات.',
    focus: 'التركيز', case3Focus: 'أساسيات Linux وبرمجة C ومفاهيم الأنظمة والتمارين العملية.',
    whyMatters: 'لماذا يهم', case3Why: 'فهم أعمق للأنظمة التي تعمل عليها البرمجيات في النهاية.', viewCode: 'عرض المستودع',
    experienceLabel: 'الخبرة المهنية', experienceTitle: 'دور واحد.<br><em>وتأثير يتوسع.</em>',
    experienceIntro: 'بدأت خبرتي المهنية في EPC في نوفمبر 2023، وتوسع نطاق عملي ليشمل تطبيقات Oracle وتطوير الويب والبنية التحتية والأتمتة.',
    downloadApexCV: 'تحميل سيرة Oracle APEX', present: 'نوفمبر 2023 — حتى الآن', currentRole: 'المنصب الحالي',
    roleTitle: 'مطور Oracle APEX ومهندس برمجيات', company: 'الشركة المصرية للبتروكيماويات · الإسكندرية، مصر',
    role1: 'تطوير خصائص HR وCRM باستخدام Oracle APEX وSQL وPL/SQL.',
    role2: 'إنشاء نماذج وتقارير مخصصة وفق متطلبات الأعمال والمستخدمين.',
    role3: 'العمل مع بيئات Oracle Linux وقواعد بيانات Oracle 19c.',
    role4: 'المشاركة في بناء منصة EPC الإنتاجية بـLaravel والاستمرار في تحسينها.',
    role5: 'إنشاء أتمتة بـPowerShell سرّعت سير العمل المستهدف بنحو 80%.',
    impactLabel: 'تأثير قابل للقياس', impactText: 'تنفيذ أسرع لسير العمل المؤتمت، عبر تحويل الخطوات المتكررة إلى عملية PowerShell موثوقة.',
    principlesLabel: 'أسلوبي في العمل', principle1Title: 'فهم العملية', principle1Body: 'البرمجيات الجيدة تبدأ من سير العمل الحقيقي، لا من الافتراضات.',
    principle2Title: 'البناء للمستخدم', principle2Body: 'يجب أن تجعل الواجهات العمل المعقد مباشرًا ويمكن توقعه.',
    principle3Title: 'التحسين المستمر', principle3Body: 'تتطور أنظمة الإنتاج من خلال الملاحظات والقياس والتكرار.',
    stackLabel: 'النطاق التقني', stackTitle: 'تخصص عميق في Oracle.<br><em>ومرونة في هندسة البرمجيات.</em>',
    stackIntro: 'تساعدني خلفيتي الواسعة على ربط تطبيقات المؤسسات بالويب والأتمتة والأنظمة التي تعمل تحتها.',
    credentialsLabel: 'الشهادات', credentialsTitle: 'معتمد لما هو <em>قادم.</em>', credentialsIntro: 'شهادات Oracle احترافية تدعمها خبرة عملية في تطبيقات المؤسسات.',
    cert1: 'محترف معتمد في تطوير Oracle APEX Cloud', cert2: 'محترف معتمد في Oracle AI Vector Search', verify: 'عرض الشهادة',
    education: 'التعليم', degree: 'بكالوريوس هندسة الحاسبات', university: 'جامعة فاروس بالإسكندرية · 2018—2023',
    award: 'جائزة التميز الوطني في البرمجة<br><span>المركز الأول في الكويت · 2014</span>',
    contactLabel: 'لنعمل معًا', contactTitle: 'هل أنتم مستعدون لبناء النظام الذي <em>يحتاجه فريقكم؟</em>',
    contactIntro: 'أنا متاح لفرص Oracle APEX في مصر وأوروبا والفرق التي تعمل عن بُعد. لنتحدث عن القيمة التي يمكن أن تصنعها الخبرة المؤسسية والهندسة العملية.',
    available: 'متاح لفرص عمل', phone: 'الهاتف', messageMe: 'راسلني مباشرة', connectLinkedIn: 'تواصل معي مهنيًا', exploreCode: 'استكشف الكود',
    apexResume: 'سيرة Oracle APEX', softwareResume: 'سيرة هندسة البرمجيات',
    footerRole: 'مطور Oracle APEX ومهندس برمجيات', footerBuilt: 'صُمم وطُوّر بعناية.', backTop: 'العودة للأعلى'
  };

  const originalText = new Map();
  document.querySelectorAll('[data-i18n]').forEach((element) => originalText.set(element, element.textContent));
  document.querySelectorAll('[data-i18n-html]').forEach((element) => originalText.set(element, element.innerHTML));

  function setLanguage(language) {
    const isArabic = language === 'ar';
    root.lang = isArabic ? 'ar' : 'en';
    root.dir = isArabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = isArabic && ar[key] ? ar[key] : originalText.get(element);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.dataset.i18nHtml;
      element.innerHTML = isArabic && ar[key] ? ar[key] : originalText.get(element);
    });
    const languageLabel = languageToggle?.querySelector('.language-current');
    if (languageLabel) languageLabel.textContent = isArabic ? 'EN' : 'AR';
    languageToggle?.setAttribute('aria-label', isArabic ? 'Switch to English' : 'التبديل إلى العربية');
    localStorage.setItem('portfolio-language', language);
  }

  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  const preferredLanguage = ['ar', 'en'].includes(requestedLanguage)
    ? requestedLanguage
    : localStorage.getItem('portfolio-language') || (navigator.language.startsWith('ar') ? 'ar' : 'en');
  setLanguage(preferredLanguage);
  languageToggle?.addEventListener('click', () => setLanguage(root.lang === 'ar' ? 'en' : 'ar'));

  function setNavigation(open) {
    nav?.classList.toggle('open', open);
    navToggle?.setAttribute('aria-expanded', String(open));
    body.classList.toggle('nav-open', open);
    const label = navToggle?.querySelector('.sr-only');
    if (label) label.textContent = root.lang === 'ar' ? ar[open ? 'menuClose' : 'menuOpen'] : `${open ? 'Close' : 'Open'} navigation`;
  }
  navToggle?.addEventListener('click', () => setNavigation(!nav?.classList.contains('open')));
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setNavigation(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setNavigation(false); });

  const progress = document.querySelector('[data-progress]');
  function updateScroll() {
    header?.classList.toggle('scrolled', window.scrollY > 12);
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  const counterElements = document.querySelectorAll('[data-counter]');
  function runCounter(element) {
    if (element.dataset.counted) return;
    element.dataset.counted = 'true';
    const target = Number(element.dataset.counter);
    if (reduceMotion) { element.textContent = target; return; }
    const start = performance.now();
    const duration = 1300;
    const frame = (now) => {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      element.textContent = Math.round(target * eased);
      if (progressValue < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('visible'));
    counterElements.forEach(runCounter);
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        entry.target.querySelectorAll?.('[data-counter]').forEach(runCounter);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px' });
    reveals.forEach((element) => revealObserver.observe(element));

    const heroCounterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { runCounter(entry.target); observer.unobserve(entry.target); } });
    }, { threshold: 0.5 });
    counterElements.forEach((element) => heroCounterObserver.observe(element));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-38% 0px -55%', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  if (!reduceMotion && finePointer) {
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        element.style.transform = `perspective(1200px) rotateX(${-y * 2.2}deg) rotateY(${x * 2.2}deg)`;
      });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });
    document.querySelectorAll('.magnetic').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const bounds = element.getBoundingClientRect();
        element.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * 0.06}px, ${(event.clientY - bounds.top - bounds.height / 2) * 0.08}px)`;
      });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
