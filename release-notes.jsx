// Release Notes page, reuses SwiftLogo / BrandLogo from swift-parts.jsx
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
          <a href={MAIN} style={{ display: 'inline-flex' }}><BrandLogo size={40} /></a>
        </div>
        <div className="nav-links">
          <a href={MAIN}>Home</a>
          <a href="latest.html">Latest</a>
          <a href="about.html">About</a>
          <a href="support.html">Technical Support</a>
          <a href={MAIN + '#faq'}>FAQ</a>
          <a href="privacy.html">Privacy</a>
          <a href="release-notes.html" aria-current="page">Release Notes</a>
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
        <h1>What's new in Slick Click.</h1>
        <p className="lede">
          Every update, big and small. Here's what landed in the latest release.
        </p>
      </div>
    </header>
  );
}

const RELEASES = [
  {
    version: '4.4.0', date: 'November 2026',
    entries: [
      { tag: 'new', tagLabel: 'New', title: 'New menu theme', body: (
        <p>“Mitosis”, a new animated menu theme for the floating menu.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Copy link to text', body: (
        <p>Highlight text, hold the Copy button and choose “Copy link to text” to get a link. Opening the link will take you to the exact words that were highlighted on the page.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Translate added to the menu', body: (
        <p>Translate any highlighted text into your language of choice, straight from the Slick AI menu.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Convert suggestive pill expanded', body: (
        <p>It now turns percentages into decimals and fractions, and back again: highlight 75% or 3/4 and get the answer instantly.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Find in page improved', body: (
        <p>It now shows you every place that matches what you describe, in page order, with the best match starred.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Slick Guide is more accurate and efficient', body: (
        <p>It understands your questions better, reads the whole page and finds more buttons.</p>) },
    ],
  },
  {
    version: '4.3.0', date: 'November 2026',
    entries: [
      { tag: 'changed', tagLabel: 'Changed', title: 'Swift Search is now Slick Click', body: (
        <p>A new name, a new logo and a fresh look. Same one-click searching.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Back up your data', body: (
        <p>A new section in Settings lets you export your Library, noted words, highlights, websites, groups and settings to one file on your computer, and import it again later.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Greater keyboard optimization', body: (
        <p>You can now move around the Slick Click floating menu with the keyboard alone, including the Slick AI menus, the model picker and the multi-search button. Good news for the keyboard lovers out there.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Tidier search suggestions', body: (
        <p>Search suggestions are tidier: five lines at most, arrow keys to move through them, and they step aside when you pause typing so your site icons are never hidden.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Smoother multi-search', body: (
        <p>Multi-search is smoother: tabs open in the order you pick, a bit faster, too.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'New banner in Settings', body: (
        <p>A swish new banner at the top of the Settings page now keeps you informed with the latest updates and developments.</p>) },
    ],
  },
  {
    version: '4.2.0', date: 'October 2026',
    entries: [
      { tag: 'new', tagLabel: 'New', title: 'Tell Slick AI how to think', body: (
        <p>Shape the way Slick AI answers by writing instructions in the Settings page.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Examples and Origin in Define', body: (
        <p>Highlight a word and choose <strong>Examples</strong> to see it used in sentences, or <strong>Origin</strong> to see where it comes from.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'A word of the day', body: (
        <p>A new word every day in your Library, with its meaning and an example, ready to save to your noted words.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Custom prompts', body: (
        <p>Write your own AI instructions and run them on any highlighted text, from the Slick AI menu. Each can be up to 2,000 words, you can keep up to 10, and they follow you between your computers.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Your menu follows you', body: (
        <p>Switch the lock on and the floating menu now stays open when you click through to another page, in the same spot you left it.</p>) },
    ],
  },
  {
    version: '4.1.0', date: 'October 2026',
    entries: [
      { tag: 'new', tagLabel: 'New', title: 'Two new menu styles', body: (
        <p>Two new free menu styles, <strong>Inkblot</strong> and <strong>Hologram</strong>. More ways to make Slick Click yours.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Slick Guide: Slick AI shows you where things are', body: (
        <p>Can't find a button or setting? Just ask Slick AI <em>"where do I cancel my subscription?"</em>, and it points right at it on the page.</p>) },
      { tag: 'changed', tagLabel: 'Changed', title: 'One box for chat and Find in page', body: (
        <p>When you open Slick AI chat or Find in page, the main box in the floating menu is the one you type into, so the panels no longer carry their own text boxes.</p>) },
      { tag: 'improved', tagLabel: 'Improved', title: 'Define is now faster', body: (
        <p>Define now looks words up on Wiktionary and answers instantly, with Slick AI as the backup if a word can't be found.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'New suggestions', body: (
        <ul>
          <li><strong>"What does this stand for?"</strong> Highlight an acronym such as NASA, FBI or "lol" and a pill explains what it means.</li>
          <li><strong>"How long ago?"</strong> now works on numeric dates such as 2019-03-14 or 14/03/2019.</li>
          <li><strong>"Define this?"</strong> catches more rare words and appears less often on ordinary words and names.</li>
          <li><strong>"Convert this?"</strong> understands British spellings such as "280 kilometres" and more units, including litres, pounds, stone, yards and gallons.</li>
        </ul>) },
      { tag: 'changed', tagLabel: 'Changed', title: 'Sign in with Google, and nothing more', body: (
        <p>Slick Click no longer receives or stores your email address or name. Signing in simply confirms with Google that it is you. Email-and-password accounts have been removed.</p>) },
    ],
  },
  {
    version: '4.0.0', date: 'September 2026',
    entries: [
      { tag: 'changed', tagLabel: 'Changed', title: 'Slick AI runs in the cloud', body: (
        <p>Slick AI runs in the cloud now, and needs a free account. The on-device model has been replaced by three real ones: <strong>Gemini</strong>, <strong>Grok</strong> and <strong>GLM</strong>, which you choose between. The results are in a different league, but they run on a server, so AI features ask you to sign in once. Everything else works without an account, as it always has.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Everything is unlocked', body: (
        <p>There's no paid tier. Multi-search takes six sites, every rewrite tone and summary depth is available, your Library is unlimited, and all six menu themes are yours. The AI runs on a free monthly credit allowance that resets at the start of each month.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Find the button', body: (
        <p>Ask where something is in plain words (<em>"where do I cancel my subscription"</em>) and Slick Click reads every control on the page, scrolls to the right one and rings it in blue. It shows the whole route, says when a control is hidden inside a menu, and admits when it doesn't know. It never clicks for you.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Find in page, by meaning', body: (
        <p>Describe the passage instead of guessing its words. Type <em>the bit about how they handle refunds</em> and it finds that section even if the page never uses the word. Short queries still run as an instant word-for-word search at no cost.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Page context', body: (
        <p>A button in the AI panel hands the whole page to the AI as background, so you can ask about a long article rather than just the part you highlighted.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Research', body: (
        <p>Highlight a quote and ask where it came from, or build a Harvard or APA citation for the page you're on. Anything it couldn't read from the page is marked editable, so you can see what was found and what was guessed.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Reply to email', body: (
        <p>Highlight any message and ask for a reply. It drafts one, then you click wherever you want it pasted and it drops in. Escape cancels.</p>) },
      { tag: 'new', tagLabel: 'New', title: 'Voice search', body: (
        <p>Hold the microphone in the toolbar or the floating menu, or hold <strong>Ctrl</strong>, and talk. Your words appear as you speak.</p>) },
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
        <p>Slick Click works inside PDF files. Open any PDF in Chrome and the full floating menu is available: select text, search, highlight, summarize and use Find in page just as you would on a webpage.</p>) },
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
              <span className="rn-version"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 10.5L10.5 3.5M5 3.5h5.5V9" /></svg>Version {r.version}</span>
              <div className="rn-date">{r.date}</div>
              {r.intro && <p className="rn-intro">{r.intro}</p>}
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
              <li><span style={{ color: 'var(--ink-3)', cursor: 'default' }} aria-disabled="true">Tutorials <em style={{ fontSize: 11, fontStyle: 'normal', letterSpacing: '.06em', textTransform: 'uppercase', marginLeft: 6, padding: '2px 7px', border: '1px solid var(--line)', borderRadius: 999 }}>Coming soon</em></span></li>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="terms.html">Terms of service</a></li>
              <li><a href="support.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Slick Click. All rights reserved.</span>
          <span className="sinope-credit-plain" title="Sinope, Publisher" aria-label="Developed by Sinope" style={{ cursor: 'default' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, fontWeight: 500 }}>Developed by</span>
            <img src="sinope-lockup-gray.png" alt="Sinope" style={{ height: 46, width: 'auto' }} />
          </span>
          <span>v.4.3.0. Last updated November 2026</span>
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
