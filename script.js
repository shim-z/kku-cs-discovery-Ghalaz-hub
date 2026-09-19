(function () {
  const body = document.body;
  const menuButton = document.querySelector('.menu-button');
  const panel = document.querySelector('.menu-panel');
  const closeButton = document.querySelector('.menu-close');
  const overlay = document.querySelector('[data-menu-overlay]');
  const openMenuButtons = document.querySelectorAll('[data-open-menu]');

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
    data.savedAt = new Date().toISOString();
    latestText = buildText(data);
    try {
      const existing = JSON.parse(localStorage.getItem('kku-cs-feedback') || '[]');
      existing.push(data);
      localStorage.setItem('kku-cs-feedback', JSON.stringify(existing));
    } catch (_) {}
    summary.textContent = latestText;
    status.hidden = false;
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  copyButton && copyButton.addEventListener('click', async () => {
    if (!latestText) return;
    try {
      await navigator.clipboard.writeText(latestText);
      copyButton.textContent = 'Copied';
      setTimeout(() => { copyButton.textContent = 'Copy Response'; }, 1400);
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
      try { await navigator.share({ title: 'KKU Website Feedback', text: latestText }); return; } catch (_) {}
    }
    try { await navigator.clipboard.writeText(latestText); shareButton.textContent = 'Copied to share'; setTimeout(() => { shareButton.textContent = 'Share Response'; }, 1600); } catch (_) {}
  });
})();
