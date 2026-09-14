// Main Swift Search marketing site

const { useState, useEffect, useRef, useCallback } = React;

const STORE_URL = 'https://chromewebstore.google.com/detail/swift-search/lididcfmfpaiaeapmjpddgicifbjelja?hl=en-US&utm_source=ext_sidebar';

/* ---------- Icons ---------- */
const Icon = {
  chrome: () =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 12L2.474 6.5A11 11 0 0 1 21.526 6.5Z" fill="#EA4335" />
      <path d="M12 12L21.526 6.5A11 11 0 0 1 12 23Z" fill="#FBBC05" />
      <path d="M12 12L12 23A11 11 0 0 1 2.474 6.5Z" fill="#34A853" />
      <circle cx="12" cy="12" r="5" fill="#fff" />
      <circle cx="12" cy="12" r="4" fill="#4285F4" />
    </svg>,

  bolt: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>,

  layers: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>,

  keyboard: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,

  clock: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  cursor: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 2 L5 18 L8.5 14.5 L11.5 20.5 L13.5 19.5 L10.5 13.5 L16 13.5 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round" />
    </svg>,

  shield: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  sliders: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h11M4 12h7M4 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>,

  sparkles: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>,

  grab: () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="9" cy="6" r="1.5" /><circle cx="15" cy="6" r="1.5" />
      <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
      <circle cx="9" cy="18" r="1.5" /><circle cx="15" cy="18" r="1.5" />
    </svg>,

  plus: () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>,

  highlighter: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 20h6l8.5-8.5a2.1 2.1 0 0 0 0-3l-1-1a2.1 2.1 0 0 0-3 0L6 16v4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 6.5l4.5 4.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 22h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,

  queue: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h11M4 12h11M4 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 14v6M15 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,

  bookmark: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>,

  findInPage: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M19 9.5V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 18l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,

  globe: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.6 2.4 2.6 15.6 0 18M12 3c-2.6 2.4-2.6 15.6 0 18" stroke="currentColor" strokeWidth="1.4" />
    </svg>,

  pdf: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 16.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,

  book: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19 18v3H6.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 7.5h7M8 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,

  palette: () =>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a9 9 0 0 0 0 18c1.4 0 2-.9 2-1.9 0-1.6-1.4-2-1.4-3.1 0-.8.7-1.5 1.6-1.5H16a5 5 0 0 0 5-5c0-3.6-4-6.5-9-6.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8" cy="10" r="1.2" fill="currentColor" />
      <circle cx="11.5" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="15.5" cy="9" r="1.2" fill="currentColor" />
    </svg>,

  star: () => '★',
  arrowRight: () =>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>

};

/* ---------- NAV ---------- */
const jumpTo = (id) => (e) => {  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo(0, top);
  history.replaceState(null, '', '#' + id);
};

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="brand" data-screen-label="Brand">
          <a href="index.html" style={{ display: 'inline-flex' }}><LogoUploader size={40} /></a>
        </div>
        <div className="nav-links">
          <a href="about.html">About</a>
          <a href="support.html">Technical Support</a>
          <a href="#faq" onClick={jumpTo('faq')}>FAQ</a>
          <a href="privacy.html">Privacy</a>
          <a href="release-notes.html">Release Notes</a>
        </div>
        <a href={STORE_URL} target="_blank" rel="noopener" className="nav-cta">
          <Icon.chrome /> Add to Chrome
        </a>
      </div>
    </nav>);

}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap">
        <span className="eyebrow"><span className="dot"></span> Welcome to Swift Search</span>
        <h1>
          <span className="zoom-in-left">Search anything,</span><br />
          <span className="blue zoom-in-right">from anywhere.</span>
        </h1>
        <p className="lead">Highlight any text on any page and instantly search it across your favorite sites — no copying, no pasting, no annoying tab-switching. Browsing the web just got that much easier.


        </p>
        <div className="hero-ctas">
          <a href={STORE_URL} target="_blank" rel="noopener" className="btn btn-primary">
            <Icon.chrome /> Add to Chrome — it's free
          </a>
        </div>
        <div className="meta-row">
          <span>100% free</span>
          <span>·</span>
          <span>No ads</span>
          <span>·</span>
          <span>No account required</span>
        </div>
      </div>
    </section>);

}

/* ---------- LIVE DEMO ---------- */
const DEMO_ARTICLE = {
  title: 'The little-known history of the typewriter',
  byline: 'The Atlantic Monthly · 8 min read · by Eleanor Hayes',
  paragraphs: [
  'When Christopher Latham Sholes filed the first commercially viable typewriter patent in 1868, almost no one believed it would change anything. Writing, after all, had been a deeply personal craft for centuries — the slow flow of ink, the slight pressure of the nib, the smell of the paper. The idea that mechanical keys could replace this seemed ridiculous, even rude.',
  'But within three decades, the machine had transformed offices, journalism, and literature. Mark Twain became one of the first novelists to submit a typewritten manuscript. Newsrooms re-engineered their floors around the clatter of keys. Whole new professions emerged — most famously the typist, a role that quietly opened white-collar work to a generation of women.',
  'Today the QWERTY layout still sits beneath nearly every digital keyboard, a small monument to a 19th-century compromise between speed and mechanical reliability. Try selecting any phrase in this paragraph — your favorite word, an unfamiliar name, a date — to see how Swift Search would surface it across the web.']

};

function DemoVideo() {
  const [phase, setPhase] = React.useState('intro');
  const [needsTap, setNeedsTap] = React.useState(false);
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const frameRef = React.useRef(null);
  const seenRef = React.useRef(false);

  const playIntro = React.useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setPhase('intro');
    const p = v.play();
    if (p && p.catch) p.catch(() => setNeedsTap(true));
  }, []);

  // start the cycle when the panel first scrolls into view
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { seenRef.current = true; playIntro(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !seenRef.current) { seenRef.current = true; playIntro(); io.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [playIntro]);

  const toSting = React.useCallback(() => {
    const f = frameRef.current;
    if (f && f.contentWindow) f.contentWindow.postMessage({ type: 'sting:play' }, '*');
    setPhase('sting');
  }, []);

  // the sting reports when it has finished; then the recording runs again
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || e.data.type !== 'sting:done') return;
      const f = frameRef.current;
      if (f && f.contentWindow) f.contentWindow.postMessage({ type: 'sting:reset' }, '*');
      playIntro();
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [playIntro]);

  const fill = { width: '100%', height: '100%', border: 'none', display: 'block', position: 'absolute', inset: 0 };
  const showSting = phase === 'sting';
  return (
    <div className="demo-video" ref={wrapRef} style={{ position: 'relative', background: '#000' }}>
      <iframe
        ref={frameRef}
        src="Logo Sting Embed.html?wait=1"
        style={{
          ...fill,
          // the stage reserves 44px of its own height for the (hidden) transport bar,
          // so the iframe runs 44px taller than the frame and is pulled up half that —
          // the composition then scales to exactly fill the visible 16:9 area
          inset: 'auto',
          left: 0,
          right: 0,
          top: -22,
          height: 'calc(100% + 44px)',
          opacity: showSting ? 1 : 0,
        }}
        title="Swift Search Logo Sting"
        allowFullScreen
      />
      <video
        ref={videoRef}
        src="assets/demo-intro.mp4"
        style={{ ...fill, objectFit: 'cover', background: '#0c1538', opacity: showSting ? 0 : 1 }}
        muted
        playsInline
        preload="auto"
        onPlaying={() => setNeedsTap(false)}
        onEnded={toSting}
        onError={toSting}
      />
      {needsTap && !showSting && (
        <button
          type="button"
          onClick={playIntro}
          aria-label="Play demo"
          style={{
            position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
            border: 'none', cursor: 'pointer', background: 'rgba(6,12,35,.45)',
            backdropFilter: 'blur(2px)', padding: 0,
          }}
        >
          <span style={{
            width: 72, height: 72, borderRadius: '50%', display: 'grid', placeItems: 'center',
            background: 'rgba(255,255,255,.14)', border: '1px solid rgba(147,197,253,.55)',
            boxShadow: '0 8px 32px rgba(0,0,0,.35)',
          }}>
            <span style={{
              width: 0, height: 0, marginLeft: 6,
              borderTop: '13px solid transparent', borderBottom: '13px solid transparent',
              borderLeft: '21px solid #dbeafe',
            }} />
          </span>
        </button>
      )}
    </div>
  );
}

function Popup({ data, engines, onPick, onClose }) {
  if (!data) return null;
  const visible = engines.filter((e) => e.on).slice(0, 6);
  return (
    <div
      className="swift-popup"
      style={{ left: Math.min(data.x, 460), top: data.y }}
      onMouseDown={(e) => e.stopPropagation()}>
      
      <div className="pop-head">
        <SwiftLogo size={16} />
        <span>SEARCH</span>
        <span className="q">"{data.text.length > 28 ? data.text.slice(0, 28) + '…' : data.text}"</span>
      </div>
      <div className="engines">
        {visible.map((e) =>
        <button key={e.id} className="engine" onClick={() => onPick(e)}>
            <div className="ico" style={{ background: e.color }}>{e.initial}</div>
            <div className="name">{e.name}</div>
          </button>
        )}
      </div>
      <div className="pop-foot">
        <span>Press <span className="kbd">Esc</span> to close</span>
        <button onClick={onClose} style={{ color: 'var(--ink-2)', fontSize: 12 }}>Dismiss</button>
      </div>
    </div>);

}

function ResultOverlay({ engine, query, onClose }) {
  if (!engine) return null;
  const results = buildResults(engine.id, query);
  return (
    <div className="result-overlay">
      <div className="result-head">
        <div className="ico" style={{
          width: 26, height: 26, borderRadius: 7, display: 'grid', placeItems: 'center',
          background: engine.color, color: '#fff', fontWeight: 800, fontSize: 12
        }}>{engine.initial}</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>
            {engine.name} · "{query}"
          </div>
          <div style={{ color: 'var(--ink-3)', fontSize: 12, fontFamily: 'var(--mono)' }}>
            {engine.url}{encodeURIComponent(query)}
          </div>
        </div>
        <button className="close" onClick={onClose}>← Back to demo</button>
      </div>
      <div className="result-body">
        {results.map((r, i) =>
        <div key={i} className="result-tile">
            <div className="rt-url">{r.url}</div>
            <div className="rt-title">{r.title}</div>
            <div className="rt-snippet">{r.snippet}</div>
          </div>
        )}
      </div>
    </div>);

}

function Demo({ engines }) {
  return (
    <section className="section" id="demo" data-screen-label="02 Demo">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">WHAT IT DOES</div>
          <h2>Highlight. Pick. Done.</h2>
          <p>Select any text on the page and Swift Search pops up with your favorite websites — one click goes straight there. See it in action below.</p>
        </div>
        <div className="demo-shell">
          <div style={{ position: 'relative' }}>
            <DemoVideo />
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- FEATURES ---------- */
const FEATURE_GROUPS = [
{ label: 'Search anything, from anywhere', items: [
  { icon: 'highlighter', title: "Highlight, don't copy", body: 'No copy, no paste, no new tab. Select text and the menu appears right where your cursor is.' },
  { icon: 'layers', title: 'Search across sites', body: 'Send the same query to up to six sites at once, and compare what each one gives you.' },
  { icon: 'sparkles', title: 'Swift AI', body: 'Summarize, translate, rewrite or ask about anything you highlight. Choose Gemini, Grok or GLM. We never store what you send.' },
  { icon: 'findInPage', title: 'Find in page', body: "Search the page you're on. Exact matches, or describe what you're after and let Swift AI find it." },
  { icon: 'globe', title: 'Add any website', body: 'If a site has a search box, Swift Search can use it — it works out the search address for you.' },
  { icon: 'book', title: 'Definitions, instantly', body: 'Want to look up a word? Use the Define feature without losing your place on the page.' }] },
{ label: 'Keep what matters', items: [
  { icon: 'queue', title: 'Queue it up', body: "Reading and spot three things to look up? Add them to a queue as you go, search them when you're done." },
  { icon: 'bookmark', title: 'Highlight and keep', body: 'Mark passages that are still there when you come back. Save quotes to your Library with a link straight to the source.' },
  { icon: 'pdf', title: 'Works in PDFs too', body: 'The same tools inside a document. Highlight, annotate and save exactly as you would on a webpage.' }] },
{ label: 'Under your control', items: [
  { icon: 'keyboard', title: 'Faster than a new tab', body: "Alt+S opens the menu anywhere, no selection needed. Press a number and you're on that site already." },
  { icon: 'shield', title: 'Privacy first', body: 'Your sites, settings, highlights and saved passages never leave your machine. No account needed for anything but AI features, and we never sell your data.' },
  { icon: 'palette', title: 'Make it yours', body: 'Customize the Swift Search menu with different themes, add or remove websites, rearrange their order or put them into groups.' }] }];

function Features() {
  const cols = 3;
  return (
    <section className="section" id="features" data-screen-label="03 Features">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Built for speed</div>
          <h2>The fastest way to look things up.</h2>
          <p>Swift Search lives in the margins of your browser. It only appears when you need it.</p>
        </div>
        <div className="feature-groups">
          {FEATURE_GROUPS.map((g) => {
            const rows = [];
            for (let i = 0; i < g.items.length; i += cols) rows.push(g.items.slice(i, i + cols));
            return (
              <div className="feature-group" key={g.label}>
                <div className="group-label">{g.label}</div>
                {rows.map((row, ri) =>
                <React.Fragment key={ri}>
                  <div className="node-bus" aria-hidden="true">
                    {row.map((_, ci) =>
                    <span
                      key={ci}
                      className="node-drop"
                      style={{ left: 'calc((100% - 36px) * ' + ci + ' / 3 + ' + ci * 18 + 'px + (100% - 36px) / 6)' }} />
                    )}
                  </div>
                  <div className="features">
                    {row.map((f, i) => {
                      const I = Icon[f.icon];
                      return (
                        <div className="feature" key={i}>
                          <div className="ico"><I /></div>
                          <h4>{f.title}</h4>
                          <p>{f.body}</p>
                        </div>);

                    })}
                  </div>
                </React.Fragment>
                )}
              </div>);

          })}
        </div>
      </div>
    </section>);

}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  return (
    <section className="section" id="how-it-works" data-screen-label="04 How it works">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">How it works</div>
          <h2>Three steps. Two seconds.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">01 / SELECT</div>
            <h4>Highlight anything.</h4>
            <p><span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--ink-2)', backgroundColor: 'rgba(255,255,255,0)' }}>Cross-reference a fact, check a source, find a definition, look up a quote — all without losing your place or your train of thought.</span></p>
          </div>
          <div className="step">
            <div className="num">02 / PICK A WEBSITE</div>
            <h4>The menu appears.</h4>
            <p>A compact popup menu appears next to the highlighted text with your favorite engines.</p>
          </div>
          <div className="step">
            <div className="num">03 / GO</div>
            <h4>One click. Done.</h4>
            <p>Click your website of choice and your highlighted text will be searched instantly on that site. </p>
          </div>
        </div>
        <Stats />
      </div>
    </section>);

}

/* ---------- STATS ---------- */
function useCountUp(target, duration = 1400, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(target); return; }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return val;
}

function StatCard({ value, suffix, label, icon, color, delay = 0, started }) {
  const count = useCountUp(value, 1400 + delay, started);
  return (
    <div className="stat">
      <div className="stat-number" style={{ color: '#fff' }}>
        <span className="n" style={{ fontVariantNumeric: 'tabular-nums' }}>{count}<span className="suf">{suffix}</span></span>
      </div>
      <div className="l">{label}</div>
    </div>
  );
}

function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const StatIcon = {
    clock: () => Icon.clock(),
    cursor: () => Icon.cursor(),
    key: () => Icon.keyboard(),
  };

  return (
    <div className="stats-block" ref={ref}>
      <p className="stats-lead">What one search saves you:</p>
      <div className="stats">
        <StatCard value={6} suffix="" label="secs saved" icon={<StatIcon.clock/>} color="var(--blue)" delay={0} started={started}/>
        <StatCard value={7} suffix="" label="clicks avoided" icon={<StatIcon.cursor/>} color="var(--blue)" delay={200} started={started}/>
        <StatCard value={9} suffix="" label="keystrokes skipped" icon={<StatIcon.key/>} color="var(--blue)" delay={400} started={started}/>
      </div>
    </div>
  );
}

/* ---------- FAQ ---------- */const FAQS = [
{ q: 'Is Swift Search free?', a: 'Yes. No ads, no in-app purchases, nothing to buy. The AI features run on a monthly allowance of credits, which is free too — everything else is unlimited. We build it because we use it.' },
{ q: 'Do I need an account?', a: 'Only for the AI features, because those run on a server and the allowance has to be counted against someone. Searching, highlighting, saving, find-in-page and everything else works without signing in.' },
{ q: 'Why does it need access to every website?', a: "So the menu can appear on whatever page you're reading. Swift Search doesn't read pages in the background — it looks at your selection when you highlight something and ask it to do something. Chrome has to show you the scariest version of that permission, but that's what it's for." },
{ q: 'Does it track my searches?', a: "Your highlighted text stays on your device until you ask for something. Click a site and it goes straight to that site, not through us. Two things do leave: Define looks the word up with a dictionary service, and Swift AI sends your selection to your chosen model, through our server. We never store either. We also collect anonymous usage counts — how often features are used, never what you searched — to see what's worth improving." },
{ q: 'Is my data used to train AI models?', a: "Not by us. We don't keep your requests or the answers — they exist in memory for as long as the request takes and are never written to our database. Once a request reaches Google, xAI or Z.ai it's governed by their terms, so treat Swift AI like any other AI tool: don't put anything in it you wouldn't send to a third party." },
{ q: 'What happens when I run out of AI credits?', a: "Your allowance resets at the start of each month. Everything that isn't AI keeps working as normal in the meantime — search, highlights, Library, find-in-page and Define don't use credits at all." },
{ q: "Can I add a site that isn't in the list?", a: "Yes. Open Settings, type the site's address — youtube.com is enough — and Swift Search works out how to search it. There's also a list of popular sites you can add with one click." },
{ q: 'Does it work on Firefox, Safari or Edge?', a: "Not yet. Swift Search is built for Chrome. Other Chromium browsers like Edge and Brave will run it, though Google sign-in — and so the AI features — may not work there. Firefox and Safari need different builds, which we haven't done yet." },
{ q: 'Does it work in PDFs?', a: 'Yes. Highlight, annotate and save passages inside a PDF exactly as you would on a webpage.' },
{ q: 'Will it slow my browsing down?', a: "The menu only draws itself when you highlight something, and nothing is sent anywhere until you pick an action. There's no background activity while you read." },
{ q: "Something's broken. How do I get help?", a: "Email swiftsearch@outlook.com. It's one person reading them, so you'll get a real answer." },
{ q: 'How do I uninstall?', a: 'Right-click the icon and choose "Remove from Chrome". That clears everything stored on your machine. If you made an account for the AI features, delete it separately first — Settings, then Membership, then Delete account — which removes your record from our database for good.' }];


function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" id="faq" data-screen-label="08 FAQ">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Questions</div>
          <h2>Common questions.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) =>
          <div key={i} className={'faq-item' + (openIdx === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="chev">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- CTA + FOOTER ---------- */
function CTA() {
  return (
    <section className="section" id="install" data-screen-label="09 CTA">
      <div className="wrap">
        <div className="cta-banner">
          <h3>Your browser's missing search feature is finally here.</h3>
          <p>Install Swift Search free. Highlight your first piece of text. You'll never copy-paste into Google again.</p>
          <a href={STORE_URL} target="_blank" rel="noopener" className="btn btn-primary">
            <Icon.chrome /> Get Started
          </a>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand foot-brand" href="index.html" style={{ display: 'inline-flex', marginBottom: 18 }}>
              <SwiftLogo size={40} />
            </a>
            <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 320 }}>The fastest way to search the web. Highlight any text. Search anywhere, all in one click.

            </p>
          </div>
          <div>
            <h6>Product</h6>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="#features" onClick={jumpTo('features')}>Features</a></li>
              <li><a href="#faq" onClick={jumpTo('faq')}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="terms.html">Terms of service</a></li>
              <li><a href="support.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Swift Search. All rights reserved.</span>
          <a
            href="https://sinope.online"
            className="sinope-credit-plain"
            title="Sinope — Publisher"
            aria-label="Developed by Sinope">
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, fontWeight: 500 }}>Developed by</span>
            <img src="uploads/sinope_lockup_gray_diamond_gray_text_cutout.png" alt="Sinope" style={{ height: 56, width: 'auto' }} />
          </a>
          <span>v4.0.0 · Last updated 13 September 2026</span>
        </div>
      </div>
    </footer>);

}

/* ---------- COMPATIBILITY STRIP ---------- */
const COMPAT_ROW1 = [
{ domain: 'google.com', name: 'Google' },
{ domain: 'youtube.com', name: 'YouTube' },
{ domain: 'reddit.com', name: 'Reddit' },
{ domain: 'instagram.com', name: 'Instagram' },
{ domain: 'tiktok.com', name: 'TikTok' },
{ domain: 'amazon.com', name: 'Amazon' },
{ domain: 'chatgpt.com', name: 'ChatGPT' },
{ domain: 'x.com', name: 'X' },
{ domain: 'wikipedia.org', name: 'Wikipedia' },
{ domain: 'netflix.com', name: 'Netflix' }];

const COMPAT_ROW2 = [
{ domain: 'spotify.com', name: 'Spotify' },
{ domain: 'linkedin.com', name: 'LinkedIn' },
{ domain: 'github.com', name: 'GitHub' },
{ domain: 'stackoverflow.com', name: 'Stack Overflow' },
{ domain: 'imdb.com', name: 'IMDb' },
{ domain: 'maps.google.com', name: 'Google Maps' },
{ domain: 'twitch.tv', name: 'Twitch' },
{ domain: 'pinterest.com', name: 'Pinterest' },
{ domain: 'ebay.com', name: 'eBay' },
{ domain: 'tripadvisor.com', name: 'Tripadvisor' }];


function CompatRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className={'compat-track' + (reverse ? ' compat-track--rev' : '')}>
      {doubled.map((s, i) =>
      <div className="compat-chip" key={i}>
        <img
          src={`https://www.google.com/s2/favicons?domain=${s.domain}&sz=64`}
          alt={s.name}
          width="28" height="28"
          style={{ borderRadius: 6 }} />
        <span>{s.name}</span>
      </div>
      )}
    </div>);
}

function CompatibilityStrip() {
  return (
    <section className="compat-section">
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2>Works everywhere you search.</h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: 520, margin: '12px auto 0' }}>Tried and tested to work with over 100 of the most popular websites on the web. 

Add Google, Reddit, YouTube, Amazon, TikTok or any site you choose. Swift Search figures out how to search it automatically.  </p>
      </div>
      <div className="compat-stage">
        <CompatRow items={COMPAT_ROW1} reverse={false} />
        <CompatRow items={COMPAT_ROW2} reverse={true} />
      </div>
    </section>);}

function App() {
  const [engines, setEngines] = useState(
    ENGINES_INIT.map((e, i) => ({ ...e, on: i < 6 }))
  );

  useEffect(() => {
    const id = (location.hash || '').slice(1);
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 80);
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Demo engines={engines} />
      <HowItWorks />
      <Features />
      <CompatibilityStrip />
      <FAQ />
      <CTA />
      <Footer />
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);