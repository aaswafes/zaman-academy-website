/* Zaman Akademiyasi — main interactivity bundle.
 * Hard-required globals expected from index.html load order:
 *   js/data.js  → window.TEACHERS, GALLERY, CERTIFICATES, RESULTS, FAQ, LOCATION
 *   js/i18n.js  → window.STRINGS
 * This file safely no-ops when a feature's hook elements aren't on the page,
 * so it ships once and is included on every page. */

(function () {
  'use strict';

  /* ============================================================
     0. Tokens & feature flags (owner swaps these before launch)
     ============================================================ */
  const TODO_FORMSPREE_ID = 'TODO_FORMSPREE_ID';
  const TODO_GA_ID = 'TODO_GA_ID';
  const FORMSPREE_URL = `https://formspree.io/f/${TODO_FORMSPREE_ID}`;

  const PREFERS_REDUCED_MOTION =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* GA4 wrapper — no-ops when TODO_GA_ID hasn't been swapped. */
  const gaEvent = (name, params = {}) => {
    if (typeof window.gtag === 'function' && TODO_GA_ID !== 'TODO_GA_ID') {
      try { window.gtag('event', name, params); } catch (_) { /* ignore */ }
    }
  };

  /* ============================================================
     1. i18n switcher
     ============================================================ */
  const SUPPORTED_LANGS = ['uz', 'en', 'ru'];

  /* Safe localStorage wrappers — Safari private mode, opaque origins, and
   * locked-down browsers can throw on any access. Falling back to in-memory
   * keeps the lang switcher functional even when storage is unavailable. */
  let _memLang = 'uz';
  const safeLocalGet = (k) => {
    try { return localStorage.getItem(k); } catch (_) { return k === 'zaman_lang' ? _memLang : null; }
  };
  const safeLocalSet = (k, v) => {
    try { localStorage.setItem(k, v); } catch (_) { if (k === 'zaman_lang') _memLang = v; }
  };

  const detectLang = () => {
    const stored = (safeLocalGet('zaman_lang') || '').toLowerCase();
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    const navLang = ((typeof navigator !== 'undefined' && navigator.language) || 'uz').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(navLang) ? navLang : 'uz';
  };

  const getStr = (lang, key) => {
    if (!window.STRINGS || !window.STRINGS[lang]) return null;
    return key.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), window.STRINGS[lang]);
  };

  /* Pick a multilang field from a data object.
   * Returns obj[field+'_'+lang] when present, else obj[field] (uz default). */
  const tField = (obj, field, lang) => {
    if (!obj) return '';
    if (lang && lang !== 'uz') {
      const v = obj[field + '_' + lang];
      if (v != null && v !== '') return v;
    }
    return obj[field] != null ? obj[field] : '';
  };

  /* Re-render hooks for data-driven blocks that depend on the active language.
   * Each renderer reads detectLang() at render time, so calling them after
   * localStorage is updated re-localizes any inline labels they bake in. */
  const langRerenderers = [];
  const registerLangRerender = (fn) => { if (typeof fn === 'function') langRerenderers.push(fn); };

  const setLang = (lang) => {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'uz';
    safeLocalSet('zaman_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', 'ltr'); // all three scripts run LTR
    /* Plain text nodes. */
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const v = getStr(lang, key);
      if (v != null) el.textContent = v;
    });
    /* Rich markup (italic spans, <br>, <strong>, etc.) — string value is HTML. */
    $$('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const v = getStr(lang, key);
      if (v != null) el.innerHTML = v;
    });
    $$('[data-i18n-attr]').forEach((el) => {
      const pair = el.getAttribute('data-i18n-attr') || '';
      pair.split(',').forEach((entry) => {
        const [attr, key] = entry.split(':').map((s) => s.trim());
        if (!attr || !key) return;
        const v = getStr(lang, key);
        if (v != null) el.setAttribute(attr, v);
      });
    });
    /* Re-render data-driven blocks so their inline labels pick up the new lang. */
    langRerenderers.forEach((fn) => { try { fn(); } catch (_) {} });
    /* Reflect active state in any lang-switcher buttons. */
    $$('[data-lang-btn]').forEach((b) => {
      const active = b.getAttribute('data-lang-btn') === lang;
      b.setAttribute('aria-current', active ? 'true' : 'false');
      b.classList.toggle('is-active', active);
    });
    /* Visible label of the dropdown trigger. */
    $$('[data-lang-current]').forEach((el) => { el.textContent = lang.toUpperCase(); });
    gaEvent('lang_switch', { lang });
  };

  const initLangSwitcher = () => {
    setLang(detectLang());
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lang-toggle]');
      if (trigger) {
        const menu = trigger.nextElementSibling;
        if (menu && menu.hasAttribute('data-lang-menu')) {
          const open = menu.classList.toggle('hidden') === false;
          trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        return;
      }
      const btn = e.target.closest('[data-lang-btn]');
      if (btn) {
        setLang(btn.getAttribute('data-lang-btn'));
        $$('[data-lang-menu]').forEach((m) => m.classList.add('hidden'));
        $$('[data-lang-toggle]').forEach((t) => t.setAttribute('aria-expanded', 'false'));
        return;
      }
      /* Click-outside closes any open menu. */
      $$('[data-lang-menu]').forEach((m) => {
        if (!m.classList.contains('hidden')) m.classList.add('hidden');
      });
      $$('[data-lang-toggle]').forEach((t) => t.setAttribute('aria-expanded', 'false'));
    });
  };

  /* ============================================================
     2. Reveal-on-scroll + count-up counters
     ============================================================ */
  const initReveal = () => {
    if (PREFERS_REDUCED_MOTION) {
      $$('.reveal').forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    $$('.reveal').forEach((el) => io.observe(el));
  };

  const initCounters = () => {
    const nodes = $$('[data-counter]');
    if (!nodes.length) return;
    if (PREFERS_REDUCED_MOTION) {
      nodes.forEach((n) => { n.textContent = n.getAttribute('data-counter') + (n.getAttribute('data-suffix') || ''); });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        const target = parseFloat(el.getAttribute('data-counter')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = target % 1 === 0
            ? Math.round(target * eased).toLocaleString()
            : (target * eased).toFixed(1);
          el.textContent = value + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    }, { threshold: 0.4 });
    nodes.forEach((n) => io.observe(n));
  };

  /* ============================================================
     3. Header behavior: scroll shrink + hide-on-scroll-down
     ============================================================ */
  const initHeader = () => {
    const header = $('header[data-header]') || $('header');
    if (!header) return;
    let lastY = window.scrollY;
    let ticking = false;
    const handle = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 10);
      if (y > 100 && y > lastY) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(handle); ticking = true; }
    }, { passive: true });
    handle();
  };

  /* ============================================================
     4. Mobile drawer
     ============================================================ */
  const initMobileDrawer = () => {
    const toggle = $('[data-drawer-toggle]');
    const drawer = $('[data-drawer]');
    if (!toggle || !drawer) return;
    const close = () => {
      drawer.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    };
    const open = () => {
      drawer.classList.remove('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
    };
    toggle.addEventListener('click', () => {
      drawer.classList.contains('hidden') ? open() : close();
    });
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer || e.target.closest('a[href]') || e.target.closest('[data-drawer-close]')) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  };

  /* ============================================================
     5. Smooth in-page scroll for #anchors
     ============================================================ */
  const initSmoothScroll = () => {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth',
        block: 'start'
      });
      history.replaceState(null, '', `#${id}`);
    });
  };

  /* ============================================================
     6. Accordion (native <details>) — keyboard parity already free
     ============================================================ */
  const initAccordion = () => {
    /* Native <details> handles open/close & keyboard. We only enrich the
     * +/× icon rotation via CSS (already present). No JS required. */
  };

  /* ============================================================
     7. Lightbox for image groups
     ============================================================ */
  const Lightbox = (() => {
    let overlay, imgEl, captionEl, prevBtn, nextBtn, closeBtn;
    let group = [];
    let index = 0;
    let lastFocus = null;

    const ensureDOM = () => {
      if (overlay) return;
      overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-[100] hidden items-center justify-center bg-black/85 backdrop-blur-sm';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Image viewer');
      overlay.innerHTML = `
        <button data-lb-close aria-label="Close"
                class="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6l-12 12"/></svg>
        </button>
        <button data-lb-prev aria-label="Previous"
                class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>
        </button>
        <button data-lb-next aria-label="Next"
                class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <figure class="max-w-[92vw] max-h-[86vh] flex flex-col items-center gap-3">
          <img data-lb-img class="max-w-[92vw] max-h-[78vh] object-contain rounded-xl shadow-2xl" alt="" />
          <figcaption data-lb-caption class="text-sm text-zinc-300 text-center max-w-2xl"></figcaption>
        </figure>`;
      document.body.appendChild(overlay);
      imgEl = overlay.querySelector('[data-lb-img]');
      captionEl = overlay.querySelector('[data-lb-caption]');
      prevBtn = overlay.querySelector('[data-lb-prev]');
      nextBtn = overlay.querySelector('[data-lb-next]');
      closeBtn = overlay.querySelector('[data-lb-close]');
      closeBtn.addEventListener('click', close);
      prevBtn.addEventListener('click', () => step(-1));
      nextBtn.addEventListener('click', () => step(1));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
      document.addEventListener('keydown', (e) => {
        if (overlay.classList.contains('hidden')) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') step(-1);
        else if (e.key === 'ArrowRight') step(1);
      });
    };

    const render = () => {
      const item = group[index];
      if (!item) return;
      imgEl.src = item.src;
      imgEl.alt = item.alt || item.caption || '';
      captionEl.textContent = item.caption || '';
      const multi = group.length > 1;
      prevBtn.style.display = multi ? '' : 'none';
      nextBtn.style.display = multi ? '' : 'none';
    };

    const open = (items, startIndex = 0, trigger = null) => {
      ensureDOM();
      group = items;
      index = startIndex;
      lastFocus = trigger || document.activeElement;
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      document.body.classList.add('overflow-hidden');
      render();
      closeBtn.focus();
    };

    const close = () => {
      if (!overlay) return;
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    };

    const step = (delta) => {
      if (!group.length) return;
      index = (index + delta + group.length) % group.length;
      render();
    };

    return { open, close };
  })();

  const initLightboxes = () => {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox]');
      if (!trigger) return;
      e.preventDefault();
      const groupName = trigger.getAttribute('data-lightbox');
      const triggers = $$(`[data-lightbox="${groupName}"]`);
      const items = triggers.map((t) => ({
        src: t.getAttribute('data-src') || t.querySelector('img')?.src || t.href,
        alt: t.getAttribute('data-alt') || t.querySelector('img')?.alt || '',
        caption: t.getAttribute('data-caption') || ''
      }));
      const idx = triggers.indexOf(trigger);
      Lightbox.open(items, Math.max(0, idx), trigger);
    });
  };

  /* ============================================================
     8. Lead modal (global) + rate limit + focus trap
     ============================================================ */
  const RATE_KEY = 'zaman_lead_attempts';
  const RATE_MAX = 2;
  const RATE_WINDOW_MS = 30 * 60 * 1000;

  const rateAllowed = () => {
    const now = Date.now();
    let arr = [];
    try { arr = JSON.parse(localStorage.getItem(RATE_KEY) || '[]'); } catch (_) {}
    arr = arr.filter((t) => now - t < RATE_WINDOW_MS);
    if (arr.length >= RATE_MAX) {
      localStorage.setItem(RATE_KEY, JSON.stringify(arr));
      return false;
    }
    arr.push(now);
    localStorage.setItem(RATE_KEY, JSON.stringify(arr));
    return true;
  };

  const focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const trapFocus = (root) => {
    const nodes = $$(focusableSelector, root).filter((el) => !el.hasAttribute('hidden'));
    if (!nodes.length) return () => {};
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const handler = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    root.addEventListener('keydown', handler);
    return () => root.removeEventListener('keydown', handler);
  };

  const initLeadModal = () => {
    const modal = $('[data-lead-modal]');
    if (!modal) return;
    const form = $('form', modal);
    const successPanel = $('[data-lead-success]', modal);
    const errorPanel = $('[data-lead-error]', modal);
    let lastTrigger = null;
    let releaseTrap = () => {};

    const open = (trigger) => {
      lastTrigger = trigger || null;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
      releaseTrap = trapFocus(modal);
      setTimeout(() => $('input[name="name"]', modal)?.focus(), 30);
    };

    const close = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
      releaseTrap();
      if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
      /* Reset to form view after close. */
      setTimeout(() => {
        form?.classList.remove('hidden');
        successPanel?.classList.add('hidden');
        errorPanel?.classList.add('hidden');
        form?.reset();
      }, 250);
    };

    document.addEventListener('click', (e) => {
      const opener = e.target.closest('[data-cta="lead"]');
      if (opener) {
        e.preventDefault();
        open(opener);
        return;
      }
      if (e.target === modal) close();
      if (e.target.closest('[data-lead-close]')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) close();
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!rateAllowed()) {
        errorPanel.textContent = getStr(detectLang(), 'LEAD.ERROR_RATE') || 'Iltimos 30 daqiqadan keyin qayta urinib ko’ring.';
        errorPanel.classList.remove('hidden');
        return;
      }
      const submitBtn = form.querySelector('button[type="submit"]');
      const origLabel = submitBtn?.textContent;
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '…'; }
      try {
        if (TODO_FORMSPREE_ID !== 'TODO_FORMSPREE_ID') {
          const fd = new FormData(form);
          fd.append('_subject', 'Zaman: yangi sinov darsi murojaati');
          const res = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: fd
          });
          if (!res.ok) throw new Error('formspree-' + res.status);
        }
        gaEvent('form_submit', { form_id: 'lead-modal', value: 1 });
        form.classList.add('hidden');
        successPanel.classList.remove('hidden');
      } catch (err) {
        errorPanel.textContent = getStr(detectLang(), 'LEAD.ERROR_GENERIC') || 'Xatolik. Iltimos qayta urinib ko’ring.';
        errorPanel.classList.remove('hidden');
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = origLabel || 'Yuborish'; }
      }
    });
  };

  /* ============================================================
     9. Inline lead form (homepage) — same submit handler shape
     ============================================================ */
  const initInlineForm = () => {
    const form = $('#lead-form');
    if (!form) return;
    const successEl = $('#form-success');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!rateAllowed()) {
        toast(getStr(detectLang(), 'LEAD.ERROR_RATE') || 'Iltimos 30 daqiqadan keyin qayta urinib ko’ring.', 'error');
        return;
      }
      const submitBtn = form.querySelector('button[type="submit"]');
      const origLabel = submitBtn?.textContent;
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '…'; }
      try {
        if (TODO_FORMSPREE_ID !== 'TODO_FORMSPREE_ID') {
          const fd = new FormData(form);
          const res = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: fd
          });
          if (!res.ok) throw new Error('formspree-' + res.status);
        }
        gaEvent('form_submit', { form_id: 'lead-inline', value: 1 });
        /* Replace form body with success state instead of just toggling text. */
        const successHTML = `
          <div class="text-center py-8">
            <div class="mx-auto w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 5 5L20 7"/></svg>
            </div>
            <h3 class="mt-5 font-display text-3xl leading-none">${getStr(detectLang(), 'LEAD.SUCCESS_TITLE') || 'Rahmat!'}</h3>
            <p class="mt-3 text-zinc-600 max-w-sm mx-auto">${getStr(detectLang(), 'LEAD.SUCCESS_BODY') || 'Murojaatingiz qabul qilindi. Tez orada bog’lanamiz.'}</p>
            <div class="mt-6 flex justify-center gap-2 flex-wrap">
              <a href="https://t.me/arabtili_admin" class="btn btn-ghost text-sm">Telegram</a>
              <a href="https://instagram.com/zamanakademiya" class="btn btn-ghost text-sm">Instagram</a>
              <a href="tel:+998900410042" class="btn btn-ghost text-sm">+998 90 041 00 42</a>
            </div>
          </div>`;
        form.innerHTML = successHTML;
      } catch (err) {
        if (successEl) {
          successEl.classList.remove('hidden');
          successEl.classList.remove('text-emerald-600');
          successEl.classList.add('text-rose-600');
          successEl.textContent = getStr(detectLang(), 'LEAD.ERROR_GENERIC') || 'Xatolik.';
        } else {
          toast(getStr(detectLang(), 'LEAD.ERROR_GENERIC') || 'Xatolik.', 'error');
        }
      } finally {
        if (submitBtn && form.contains(submitBtn)) {
          submitBtn.disabled = false;
          submitBtn.textContent = origLabel || 'Yuborish';
        }
      }
    });
  };

  /* ============================================================
     10. Newsletter form (footer)
     ============================================================ */
  const initNewsletter = () => {
    const form = $('[data-newsletter]');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn?.textContent;
      if (btn) { btn.disabled = true; btn.textContent = '…'; }
      try {
        if (TODO_FORMSPREE_ID !== 'TODO_FORMSPREE_ID') {
          const fd = new FormData(form);
          fd.append('_subject', 'Zaman: newsletter signup');
          await fetch(FORMSPREE_URL, { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd });
        }
        gaEvent('newsletter_signup');
        toast((getStr(detectLang(), 'LEAD.SUCCESS_TITLE') || 'Rahmat!') + ' ✓', 'success');
        form.reset();
      } catch (_) {
        toast('Xatolik.', 'error');
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = orig || 'Subscribe'; }
      }
    });
  };

  /* ============================================================
     11. Certificate lookup stub (certificate.html)
     ============================================================ */
  const initCertLookup = () => {
    const form = $('[data-cert-lookup]');
    if (!form) return;
    const out = $('[data-cert-result]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      /* No real backend — always show not-found. The copy makes that explicit
       * and points to the official sertifikat.uzbmb.uz lookup + a phone line. */
      if (out) {
        out.classList.remove('hidden');
        out.classList.remove('border-emerald-200', 'bg-emerald-50/40');
        out.classList.add('border-rose-200', 'bg-rose-50/40');
      }
      gaEvent('cert_lookup', { result: 'not_found' });
    });
  };

  /* ============================================================
     12. Phone mask: +998 ## ### ## ##
     ============================================================ */
  const maskPhone = (raw) => {
    const digits = raw.replace(/\D/g, '').replace(/^998/, '');
    const d = digits.slice(0, 9);
    const parts = ['+998'];
    if (d.length > 0) parts.push(' ' + d.slice(0, 2));
    if (d.length > 2) parts.push(' ' + d.slice(2, 5));
    if (d.length > 5) parts.push(' ' + d.slice(5, 7));
    if (d.length > 7) parts.push(' ' + d.slice(7, 9));
    return parts.join('').trim();
  };

  const initPhoneMask = () => {
    document.addEventListener('input', (e) => {
      const t = e.target;
      if (!t || t.type !== 'tel') return;
      const masked = maskPhone(t.value);
      if (t.value !== masked) t.value = masked;
    });
  };

  /* ============================================================
     13. Toast
     ============================================================ */
  let toastContainer;
  const toast = (msg, type = 'info') => {
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'fixed top-4 right-4 z-[200] flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(toastContainer);
    }
    const node = document.createElement('div');
    const palette =
      type === 'success' ? 'bg-emerald-600 text-white' :
      type === 'error' ? 'bg-rose-600 text-white' :
      'bg-zinc-900 text-white';
    node.className = `pointer-events-auto rounded-xl ${palette} px-4 py-3 text-sm shadow-lg transform translate-x-4 opacity-0 transition`;
    node.textContent = msg;
    toastContainer.appendChild(node);
    requestAnimationFrame(() => {
      node.classList.remove('translate-x-4', 'opacity-0');
    });
    setTimeout(() => {
      node.classList.add('opacity-0');
      setTimeout(() => node.remove(), 350);
    }, 4000);
  };
  window.zamanToast = toast;

  /* ============================================================
     14. Teachers grid renderer + teacher modal
     ============================================================ */
  const renderTeachers = () => {
    const grid = $('[data-teachers-grid]');
    if (!grid || !window.TEACHERS) return;
    const limit = parseInt(grid.getAttribute('data-limit') || '0', 10);
    const list = limit > 0 ? window.TEACHERS.slice(0, limit) : window.TEACHERS;
    const lang = detectLang();
    const yearsLabel = getStr(lang, 'TEACHERS.YEARS_SUFFIX') || 'yil tajriba';
    const moreLabel = getStr(lang, 'TEACHERS.MORE') || 'Batafsil →';
    grid.innerHTML = list.map((t) => `
      <article class="reveal card p-6 sm:p-7 flex flex-col cursor-pointer" data-teacher-id="${t.id}" role="button" tabindex="0">
        <div class="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100">
          <img src="${t.photo}" alt="${tField(t,'name',lang)}" loading="lazy" decoding="async" class="w-full h-full object-cover">
        </div>
        <div class="mt-5 flex items-center gap-2">
          <span class="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">${t.badge}</span>
          <span class="text-xs text-zinc-500">${t.years} ${yearsLabel}</span>
        </div>
        <h3 class="font-display text-2xl sm:text-3xl mt-3 leading-none">${tField(t,'name',lang)}</h3>
        <p class="mt-3 text-zinc-600 leading-relaxed text-sm">${tField(t,'bioShort',lang)}</p>
        <div class="mt-5 text-sm text-zinc-900 link-underline self-start">${moreLabel}</div>
      </article>
    `).join('');
    grid.addEventListener('click', (e) => openTeacherCard(e));
    grid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openTeacherCard(e);
    });
  };

  const openTeacherCard = (e) => {
    const card = e.target.closest('[data-teacher-id]');
    if (!card) return;
    e.preventDefault();
    const t = window.TEACHERS.find((x) => x.id === card.getAttribute('data-teacher-id'));
    if (!t) return;
    const lang = detectLang();
    const eduLabel = getStr(lang, 'TEACHERS.MODAL_EDUCATION') || 'Ta’lim';
    const certsLabel = getStr(lang, 'TEACHERS.MODAL_CERTS') || 'Sertifikatlar';
    const contactLabel = getStr(lang, 'TEACHERS.MODAL_CONTACT') || 'Telegram orqali bog’lanish';
    const yearsLabel = getStr(lang, 'TEACHERS.YEARS_SUFFIX') || 'yil tajriba';
    const tName = tField(t, 'name', lang);
    const tBioLong = tField(t, 'bioLong', lang);
    const tEducation = (t['education_' + lang] || t.education || []);
    const tCerts = (t['certs_' + lang] || t.certs || []);
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = `
      <div class="bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[88vh] overflow-y-auto relative">
        <button data-tm-close aria-label="Close"
                class="absolute top-3 right-3 w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 transition flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6l-12 12"/></svg>
        </button>
        <div class="p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row gap-6">
            <div class="w-full sm:w-44 shrink-0 aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100">
              <img src="${t.photo}" alt="${tName}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">${t.badge}</span>
                <span class="text-xs text-zinc-500">${t.years} ${yearsLabel}</span>
              </div>
              <h3 class="font-display text-3xl sm:text-4xl mt-2 leading-none">${tName}</h3>
              <p class="mt-4 text-zinc-700 leading-relaxed">${tBioLong}</p>
            </div>
          </div>
          <div class="mt-6 grid sm:grid-cols-2 gap-6">
            <div>
              <div class="text-xs uppercase tracking-widest text-zinc-500">${eduLabel}</div>
              <ul class="mt-2 text-sm text-zinc-800 space-y-1">${tEducation.map((x) => `<li>— ${x}</li>`).join('')}</ul>
            </div>
            <div>
              <div class="text-xs uppercase tracking-widest text-zinc-500">${certsLabel}</div>
              <ul class="mt-2 text-sm text-zinc-800 space-y-1">${tCerts.map((x) => `<li>— ${x}</li>`).join('')}</ul>
            </div>
          </div>
          <a href="${t.telegram}" target="_blank" rel="noopener" class="btn btn-primary mt-6">
            ${contactLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 17.94 9.6 21.1c.46 0 .66-.2.9-.43l2.16-2.06 4.48 3.27c.82.45 1.4.21 1.62-.76l2.93-13.72c.27-1.21-.44-1.68-1.24-1.38L2.43 9.41c-1.19.46-1.17 1.12-.2 1.42l4.7 1.46 10.92-6.88c.51-.34.98-.15.6.19"/></svg>
          </a>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    document.body.classList.add('overflow-hidden');
    const close = () => {
      overlay.remove();
      document.body.classList.remove('overflow-hidden');
    };
    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay || ev.target.closest('[data-tm-close]')) close();
    });
    document.addEventListener('keydown', function esc(ev) {
      if (ev.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
  };

  /* ============================================================
     15. Gallery grid renderer (academy gallery)
     ============================================================ */
  const renderGallery = () => {
    const grid = $('[data-gallery-grid]');
    if (!grid || !window.GALLERY) return;
    const limit = parseInt(grid.getAttribute('data-limit') || '0', 10);
    const items = limit > 0 ? window.GALLERY.slice(0, limit) : window.GALLERY;
    const lang = detectLang();
    grid.innerHTML = items.map((g) => {
      const cap = tField(g, 'caption', lang);
      return `
      <a href="${g.src}" data-lightbox="academy" data-caption="${cap}" data-alt="${cap}"
         class="reveal block aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 group">
        <img src="${g.src}" alt="${cap}" loading="lazy" decoding="async"
             class="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700">
      </a>`;
    }).join('');
  };

  /* ============================================================
     16. Results renderer (case studies)
     ============================================================ */
  const renderResults = () => {
    const grid = $('[data-results-grid]');
    if (!grid || !window.RESULTS) return;
    const lang = detectLang();
    const lFrom = getStr(lang, 'RESULTS.LABEL_FROM') || 'Boshlanish';
    const lTo = getStr(lang, 'RESULTS.LABEL_TO') || 'Natija';
    const lCert = getStr(lang, 'RESULTS.LABEL_CERT') || 'Sertifikat';
    grid.innerHTML = window.RESULTS.map((r) => {
      const name = tField(r, 'name', lang);
      const role = tField(r, 'role', lang);
      const dur = tField(r, 'duration', lang);
      const quote = tField(r, 'quote', lang);
      return `
      <figure class="reveal card p-7 flex flex-col">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center font-medium text-zinc-700">${name.charAt(0)}</div>
          <div>
            <div class="text-sm font-medium">${name}</div>
            <div class="text-xs text-zinc-500">${role}</div>
          </div>
        </div>
        <div class="mt-6 grid grid-cols-3 gap-3 text-center">
          <div>
            <div class="text-[10px] uppercase tracking-widest text-zinc-500">${lFrom}</div>
            <div class="font-display text-3xl mt-1">${r.before}</div>
          </div>
          <div class="flex items-center justify-center text-zinc-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </div>
          <div>
            <div class="text-[10px] uppercase tracking-widest text-zinc-500">${lTo}</div>
            <div class="font-display text-3xl mt-1 text-rose-500">${r.after}</div>
          </div>
        </div>
        <div class="mt-3 text-xs text-zinc-500 text-center">${dur} • ${lCert}: <span class="text-zinc-800">${r.cert}</span></div>
        <blockquote class="mt-5 italic text-zinc-700 leading-relaxed">“${quote}”</blockquote>
        ${r.youtubeId ? `
          <div class="mt-5 aspect-video rounded-xl overflow-hidden bg-zinc-900">
            <iframe src="https://www.youtube-nocookie.com/embed/${r.youtubeId}" title="${name}" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen class="w-full h-full"></iframe>
          </div>` : ''}
      </figure>`;
    }).join('');
  };

  /* ============================================================
     17. Init all
     ============================================================ */
  const init = () => {
    /* Render data-driven blocks BEFORE i18n so newly created [data-i18n] nodes
     * (if any) get translated too. */
    renderTeachers();
    renderGallery();
    renderResults();

    /* Re-run these whenever the user switches language so their inline labels
     * and data-derived text reflect the new locale. */
    registerLangRerender(renderTeachers);
    registerLangRerender(renderGallery);
    registerLangRerender(renderResults);

    initLangSwitcher();
    initReveal();
    initCounters();
    initHeader();
    initMobileDrawer();
    initSmoothScroll();
    initAccordion();
    initLightboxes();
    initLeadModal();
    initInlineForm();
    initNewsletter();
    initCertLookup();
    initPhoneMask();

    /* Year in footer (works only if span#year exists). */
    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
