(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Restore the visitor's preference, otherwise follow their operating system.
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) root.dataset.theme = 'dark';

  const syncThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    themeToggle?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  syncThemeLabel();

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    syncThemeLabel();
  });

  const setNav = (open) => {
    nav?.classList.toggle('open', open);
    navToggle?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
    const label = navToggle?.querySelector('.sr-only');
    if (label) label.textContent = `${open ? 'Close' : 'Open'} navigation`;
  };

  navToggle?.addEventListener('click', () => setNav(!nav?.classList.contains('open')));
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNav(false);
  });

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal content only when it approaches the viewport.
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    reveals.forEach((element) => revealObserver.observe(element));
  }

  // Keep the current section represented in the primary navigation.
  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const current = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', current);
          if (current) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55%', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
