// Shared bits: Logo, Icons, engine catalog, fake results

// Aspect ratio of the full Swift Search lockup (mark + wordmark).
const LOGO_ASPECT = 1235 / 299;

// Display-only logo. Renders the Swift Search lockup at the requested height
// (width auto-computed from aspect ratio). Reads from CSS variable
// --swift-logo, falling back to swift-logo-lockup.png.
const SwiftLogo = ({ size = 28, style = {} }) => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      height: size,
      width: size * LOGO_ASPECT,
      flexShrink: 0,
      backgroundImage: 'var(--swift-logo, url(swift-logo-lockup.png))',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      ...style,
    }}
  />
);

function BrandLogo({ size = 36 }) {
  return <SwiftLogo size={size} />;
}

// Engine catalog
const ENGINES_INIT = [
  { id: 'google',    name: 'Google',     url: 'google.com/search?q=',                 color: '#4285F4', initial: 'G' },
  { id: 'youtube',   name: 'YouTube',    url: 'youtube.com/results?search_query=',    color: '#FF0000', initial: 'Y' },
  { id: 'wikipedia', name: 'Wikipedia',  url: 'wikipedia.org/wiki/',                  color: '#636466', initial: 'W' },
  { id: 'github',    name: 'GitHub',     url: 'github.com/search?q=',                 color: '#1f2937', initial: 'G' },
  { id: 'stackoverflow', name: 'Stack Overflow', url: 'stackoverflow.com/search?q=',  color: '#F48024', initial: 'S' },
  { id: 'amazon',    name: 'Amazon',     url: 'amazon.com/s?k=',                      color: '#FF9900', initial: 'A' },
  { id: 'reddit',    name: 'Reddit',     url: 'reddit.com/search/?q=',                color: '#FF4500', initial: 'R' },
  { id: 'spotify',   name: 'Spotify',    url: 'open.spotify.com/search/',             color: '#1DB954', initial: 'S' },
  { id: 'maps',      name: 'Google Maps',url: 'google.com/maps/search/',              color: '#34A853', initial: 'M' },
  { id: 'ddg',      name: 'DuckDuckGo',  url: 'duckduckgo.com/?q=',                   color: '#DE5833', initial: 'D' },
];

// Fake search results per engine (just for the prototype overlay)
function buildResults(engineId, query) {
  const q = query || 'photosynthesis';
  const map = {
    google: [
      { url: `en.wikipedia.org › wiki › ${q}`, title: `${q} - Wikipedia`, snippet: `${q} is a process by which plants and other organisms convert light energy into chemical energy that can later be released to fuel the organism's activities…` },
      { url: `khanacademy.org › science › ${q}`, title: `Intro to ${q} (article)`, snippet: `Learn how ${q} works, why it matters, and how chloroplasts capture sunlight to build sugars.` },
      { url: `nationalgeographic.com › encyclopedia`, title: `${q}, explained`, snippet: `An in-depth look at one of nature's most important chemical reactions and its impact on life on Earth.` },
    ],
    youtube: [
      { url: `youtube.com › watch?v=…`, title: `${q} — explained in 5 minutes`, snippet: `2.1M views · A clear, animated breakdown of the topic for visual learners.` },
      { url: `youtube.com › watch?v=…`, title: `Why ${q} is crazier than you thought`, snippet: `850K views · Veritasium-style deep dive with surprising facts.` },
      { url: `youtube.com › watch?v=…`, title: `Crash Course: ${q}`, snippet: `1.4M views · Hank Green walks through the basics, fast and friendly.` },
    ],
    wikipedia: [
      { url: `en.wikipedia.org › wiki › ${q}`, title: `${q}`, snippet: `From Wikipedia, the free encyclopedia. ${q} is a topic covered across history, biology, and culture with many notable contributions.` },
      { url: `en.wikipedia.org › wiki › History_of_${q}`, title: `History of ${q}`, snippet: `Origins, key figures, and turning points that shaped the modern understanding.` },
    ],
    github: [
      { url: `github.com › openai › ${q}`, title: `${q} — open-source repo (12.3k ⭐)`, snippet: `A community-maintained library for working with ${q}. MIT license. Last commit 2 days ago.` },
      { url: `github.com › topics › ${q}`, title: `Topic: ${q}`, snippet: `Browse 3,420 public repositories tagged with ${q}. Popular: starter kits, CLIs, examples.` },
    ],
    stackoverflow: [
      { url: `stackoverflow.com › questions › ${q}`, title: `How do I work with ${q}? [closed]`, snippet: `Asked 4 years ago · Modified yesterday · 248 upvotes. Top answer breaks it down with code samples.` },
      { url: `stackoverflow.com › questions › why-${q}`, title: `Why does ${q} return undefined?`, snippet: `A surprisingly common gotcha; the accepted answer covers async timing pitfalls.` },
    ],
    amazon: [
      { url: `amazon.com › s?k=${q}`, title: `${q} — Books`, snippet: `Over 1,200 titles. Bestseller · 4.6 ★ · Prime delivery available.` },
      { url: `amazon.com › s?k=${q}+kit`, title: `${q} starter kit`, snippet: `$34.99 · 18,402 ratings · Frequently bought with notebooks.` },
    ],
    reddit: [
      { url: `reddit.com › r/explainlikeimfive › ${q}`, title: `ELI5: ${q}`, snippet: `1.2k upvotes · "I always thought it worked differently — this comment changed my whole understanding."` },
      { url: `reddit.com › r/todayilearned`, title: `TIL about ${q}`, snippet: `Wholesome discussion with 340 comments, including some surprising tangents.` },
    ],
    spotify: [
      { url: `open.spotify.com › search › ${q}`, title: `Top results for "${q}"`, snippet: `Playlists, albums, podcasts. 1.4M monthly listeners across related artists.` },
    ],
    maps: [
      { url: `google.com › maps › ${q}`, title: `${q} — nearby`, snippet: `Showing locations within 5 miles. Top result: 4.7 ★ · Open now · Reviews: 1,892.` },
    ],
    ddg: [
      { url: `duckduckgo.com › ${q}`, title: `${q} — DuckDuckGo`, snippet: `Private search, no tracking. Showing 10 organic results.` },
    ],
  };
  return map[engineId] || map.google;
}

window.SwiftLogo = SwiftLogo;
window.BrandLogo = BrandLogo;
window.ENGINES_INIT = ENGINES_INIT;
window.buildResults = buildResults;
