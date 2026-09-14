// Release Notes page — reuses SwiftLogo / LogoUploader from swift-parts.jsx
const MAIN = 'index.html';
const PRIVACY = 'privacy.html';

const ChromeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 12L2.474 6.5A11 11 0 0 1 21.526 6.5Z" fill="#EA4335"/>
    <path d="M12 12L21.526 6.5A11 11 0 0 1 12 23Z" fill="#FBBC05"/>
    <path d="M12 12L12 23A11 11 0 0 1 2.474 6.5Z" fill="#34A853"/>
    <circle cx="12" cy="12" r="5" fill="#fff"/>
    <circle cx="12" cy="12" r="4" fill="#4285F4"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="brand" data-screen-label="Brand">
          <a href={MAIN} style={{ display: 'inline-flex' }}><LogoUploader size={40} /></a>
        </div>
        <div className="nav-links">
          <a href={MAIN}>Home</a>
          <a href="about.html">About</a>
          <a href="support.html">Technical Support</a>
          <a href={MAIN + '#faq'}>FAQ</a>
          <a href="privacy.html">Privacy</a>
          <a href="release-notes.html" style={{ color: '#fff' }}>Release Notes</a>
        </div>
        <a href={MAIN + '#install'} className="nav-cta">
          <ChromeIcon /> Add to Chrome
        </a>
      </div>
    </nav>
  );
}

function ReleaseHero() {
  return (
    <header className="about-hero" data-screen-label="Release / Hero">
      <div className="wrap">
        <div className="kicker">Release Notes</div>
        <h1>What's new in Swift Search.</h1>
        <p className="lede">
          Every update, big and small. Here's what landed in the latest release.
        </p>
      </div>
    </header>
  );
}

const RELEASES = [
  {
    version: '4.0.0', date: 'September 2026',
    entries: [
      { tag: 'changed', tagLabel: 'Changed', title: 'Swift AI runs in the cloud', body: (
        <p>Swift AI runs in the cloud now, and needs a free account. The on-device model has been replaced by three real ones — <strong>Gemini</strong>, <strong>Grok</strong> and <strong>GLM</strong> — which you choose between. The results are in a different league, but they run on a server, so AI features ask you to sign in once. Everything else works without an account, as it always has.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Everything is unlocked', body: (
        <p>There's no paid tier. Multi-search takes six sites, every rewrite tone and summary depth is available, your Library is unlimited, and all six menu themes are yours. The AI runs on a free monthly credit allowance that resets at the start of each month.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Find the button', body: (
        <p>Ask where something is in plain words — <em>"where do I cancel my subscription"</em> — and Swift Search reads every control on the page, scrolls to the right one and rings it in blue. It shows the whole route, says when a control is hidden inside a menu, and admits when it doesn't know. It never clicks for you.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Find in page, by meaning', body: (
        <p>Describe the passage instead of guessing its words. Type <em>the bit about how they handle refunds</em> and it finds that section even if the page never uses the word. Short queries still run as an instant word-for-word search at no cost.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Page context', body: (
        <p>A button in the AI panel hands the whole page to the AI as background, so you can ask about a long article rather than just the part you highlighted.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Research', body: (
        <p>Highlight a quote and ask where it came from, or build a Harvard or APA citation for the page you're on. Anything it couldn't read from the page is marked editable, so you can see what was found and what was guessed.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Reply to email', body: (
        <p>Highlight any message and ask for a reply. It drafts one, then you click wherever you want it pasted and it drops in. Escape cancels.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Voice search', body: (
        <p>Hold the microphone in the toolbar or the floating menu — or hold <strong>Ctrl</strong> — and talk. Your words appear as you speak.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Search another site', body: (
        <p>A tile at the end of your list searches anywhere without giving it a permanent slot. Type two letters and pick, with suggestions drawn from your saved sites, your open tabs and a built-in list of 121 common ones.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Six menu themes', body: (
        <p>Default, Angular, Terminal, Nexus, Obsidian and Monolith, each with its own typeface and character. <strong>Settings → Preferences → Display &amp; Interface</strong>.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Multi-search and keyboard', body: (
        <p>All selected sites open at once instead of queueing behind each other. Press <strong>Tab</strong> from the search box to move into the site icons, then a number to search that site. Find in page gained arrows for stepping through matches, and keeps your current match highlighted.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Choose where results open', body: (
        <p>A button in both menus cycles between this tab, a new tab and a new window, and resets each time so your default never changes by accident.</p>) },
      { tag: 'fixed', tagLabel: 'Fixed', title: 'Saved highlights reappear on reload', body: (
        <p>They were never lost; they just weren't drawn until you opened the menu, which made it look as though they hadn't saved.</p>) },
    ],
  },
  {
    version: '3.0.0', date: '9 June 2026',
    entries: [
      { tag: 'new', tagLabel: 'New', title: 'AI Summary', body: (
        <p>Summarize text on any webpage in one click. The model runs entirely on your device, so nothing you highlight leaves your browser.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'PDF support', body: (
        <p>Swift Search works inside PDF files. Open any PDF in Chrome and the full floating menu is available — select text, search, highlight, summarize and use Find in page just as you would on a webpage.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Find in page', body: (
        <p>Search for any word across the whole page. Every instance is highlighted and you can click straight to each one. Toggle <strong>Exact match</strong> to find only whole words.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Locked highlights', body: (
        <p>Lock any word as a permanent highlight with the padlock icon. It stands out in color every time you return to that page. Organize highlights into named groups with custom colors, and control exactly where they appear, from the settings page.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Add to queue', body: (
        <p>Wanted to look something up but not right now? Add as many words and phrases as you like as you read, and find them waiting in your saved list whenever you're ready to search them.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Search suggestions and history', body: (
        <p>Optionally switch on Google search suggestions and search history, in the toolbar menu, the floating menu, or both. Suggestions appear as you type; history shows your recent searches when you focus the search box.</p>) },
    ],
    note: 'The on-device AI described here was replaced by three cloud models in 4.0.0.',
  },
];

function ReleaseBody() {
  return (
    <div className="wrap">
      <div className="about-body">
        {RELEASES.map((r, ri) => (
          <div className="rn-release" key={r.version}>
            <div style={{ paddingTop: ri === 0 ? 12 : 0, paddingBottom: 8 }}>
              <span className="rn-version">▲ Version {r.version}</span>
              <div className="rn-date">{r.date}</div>
            </div>
            {r.entries.map((e, i) => (
              <section className="rn-entry" key={i} data-screen-label={'Release / ' + e.title}>
                <div className="rn-entry-head">
                  <span className={'rn-tag ' + e.tag}>{e.tagLabel}</span>
                  <h3>{e.title}</h3>
                </div>
                {e.body}
              </section>
            ))}
            {r.note && <p className="rn-note">{r.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand foot-brand" href={MAIN} style={{ display: 'inline-flex', marginBottom: 18 }}>
              <SwiftLogo size={40}/>
            </a>
            <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 320 }}>The fastest way to search the web. Highlight any text. Search anywhere, all in one click.</p>
          </div>
          <div>
            <h6>Product</h6>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href={MAIN + '#features'}>Features</a></li>
              <li><a href={MAIN + '#faq'}>FAQ</a></li>
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
          <a href="https://sinope.online" className="sinope-credit-plain" title="Sinope — Publisher" aria-label="Developed by Sinope">
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, fontWeight: 500 }}>Developed by</span>
            <img src="uploads/sinope_lockup_gray_diamond_gray_text_cutout.png" alt="Sinope" style={{ height: 56, width: 'auto' }} />
          </a>
          <span>v4.0.0 · Last updated 13 September 2026</span>
        </div>
      </div>
    </footer>
  );
}

function ReleaseApp() {
  return (
    <>
      <Nav/>
      <ReleaseHero/>
      <ReleaseBody/>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ReleaseApp/>);
