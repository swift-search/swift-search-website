// Main Swift Search marketing site

const { useState, useEffect, useRef, useCallback, useLayoutEffect } = React;

const STORE_URL = 'https://chromewebstore.google.com/detail/swift-search/lididcfmfpaiaeapmjpddgicifbjelja?hl=en-US&utm_source=ext_sidebar';

/* ---------- Icons ---------- */
const Icon = {
  chrome: () =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 12L2.474 6.5A11 11 0 0 1 21.526 6.5Z" fill="#EA4335" />
      <path d="M12 12L21.526 6.5A11 11 0 0 1 12 23Z" fill="#FBBC05" />
      <path d="M12 12L12 23A11 11 0 0 1 2.474 6.5Z" fill="#34A853" />
      <circle cx="12" cy="12" r="5" fill="#F4F2EE" />
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
          <a href="index.html" style={{ display: 'inline-flex' }}><BrandLogo size={40} /></a>
        </div>
        <div className="nav-links">
          <a href="index.html" aria-current="page">Home</a>
          <a href="latest.html">Latest</a>
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
  const gridRef = React.useRef(null);
  React.useEffect(() => {
    const g = gridRef.current;
    if (!g || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mk = g.querySelector(".hero-mark"), tx = g.querySelector(".hero-text");
    mk.style.willChange = "transform"; tx.style.willChange = "transform,opacity"; const fx0 = g.querySelector(".hero-fx"); fx0.style.willChange = "transform"; fx0.firstChild.style.willChange = "transform"; [...fx0.firstChild.children].forEach((p) => { p.style.willChange = "transform"; });
    Object.assign(fx0.style, { display: "block", visibility: "hidden", width: Math.min(620, g.getBoundingClientRect().width * 0.86) + "px", height: Math.min(620, g.getBoundingClientRect().width * 0.86) + "px" }); const pv = fx0.querySelector("video"); pv.load();
    const ts = [];
    ts.push(setTimeout(() => {
      const ex = tx.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateX(12%)" }], { duration: 350, easing: "ease-in", fill: "forwards" });
      ts.push(setTimeout(() => {
        const a = mk.getBoundingClientRect();
        g.classList.add("stack");
        { const S0 = mk.getBoundingClientRect().width, W0 = Math.min(620, g.getBoundingClientRect().width * 0.86); mk.style.margin = Math.max(0, (W0 - S0) / 2) + "px 0"; }
        const b = mk.getBoundingClientRect();
        const dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2), s = a.width / b.width;
        let W = Math.min(620, g.getBoundingClientRect().width * 0.86), H = W;
        const sx = W / b.width, sy = H / b.width;
        const KF=[[0,0,0,0,0],[.15,0,-300,0,0],[.35,0,-620,0,0],[.5,0,-848,0,0],[.6,0,-1000,0,0],[.82,-8,-1300,0,0],[1,-14,-1440,0,0]];
        const cw = document.createElement("div"), gr0 = g.getBoundingClientRect(), bw = b.width;
        cw.className = "cube-spin";
        Object.assign(cw.style, { position: "absolute", left: b.left - gr0.left + "px", top: b.top - gr0.top + "px", width: bw + "px", height: bw + "px", transformStyle: "preserve-3d", zIndex: 4, pointerEvents: "none", willChange: "transform" });
        for (let i = 0; i < 4; i++) {
          const f = document.createElement("div");
          Object.assign(f.style, { position: "absolute", inset: 0, background: "#151518", backfaceVisibility: "hidden", transform: "rotateY(" + i * 90 + "deg) translateZ(" + bw / 2 + "px)" });
          const cl = mk.cloneNode(true);
          cl.removeAttribute("class"); cl.setAttribute("class", "hero-mark");
          Object.assign(cl.style, { width: "100%", height: "100%", maxWidth: "none", margin: 0, display: "block", visibility: "visible" });
          cl.querySelectorAll(".m-a,.m-bot").forEach((p) => { p.style.animation = "none"; p.style.transform = p.classList.contains("m-a") ? "translateY(9px)" : "translateY(-9px)"; });
          cl.animate([{ transform: 'scaleY(1)' }, { transform: 'scaleY(1.1029)', offset: .5 }, { transform: 'scaleY(1.1029)' }], { duration: 3200, easing: 'cubic-bezier(.45,0,.2,1)', fill: 'forwards' });
          f.appendChild(cl); cw.appendChild(f);
        }
        g.appendChild(cw); mk.style.visibility = "hidden";
        const spin = cw.animate(KF.map(([o,rx,ry,rz,lift]) => ({ offset: o, transform: `translate(${dx * (1 - o)}px,${dy * (1 - o) - lift}px) scale3d(${s + (sx - s) * Math.min(1, o / .5)},${s + (sy - s) * Math.min(1, o / .5)},${s + (sx - s) * Math.min(1, o / .5)}) perspective(${1000 / (s + (sx - s) * Math.min(1, o / .5))}px) translateY(${bw / 2 * Math.sin(rx * Math.PI / 180)}px) translateZ(${bw / 2 * (1 - Math.cos(rx * Math.PI / 180)) - bw / 2}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)` })), { duration: 3200, easing: "cubic-bezier(.45,0,.2,1)" });
        let dead = false;
        ts.push({ stop: () => { dead = true; } });
        const place = () => {
          const fx = g.querySelector(".hero-fx"), gr = g.getBoundingClientRect(), r = mk.getBoundingClientRect();
          const cx = r.left - gr.left + r.width / 2, cy = r.top - gr.top + r.height / 2;
          Object.assign(fx.style, { left: cx - W / 2 + "px", top: cy - H / 2 + "px", width: W + "px", height: H + "px" });
        };
        spin.finished.then(() => {
          cw.remove(); window.__cubeSpun = true; window.dispatchEvent(new Event("cube-spun"));
          const fx = g.querySelector(".hero-fx"), sc = fx.firstChild, ps = [...sc.children], vids = ps.map((p) => p.querySelector("video")); vids.forEach((v) => { if (!v) return; v.muted = true; v.defaultMuted = true; v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("webkit-playsinline", ""); v.playsInline = true; v.load(); });
          const r0 = mk.getBoundingClientRect(), S = r0.width;
          
          place();
          fx.style.visibility = "visible";
          mk.style.visibility = "hidden";
          window.addEventListener("resize", place);
          const R = W * 0.62, mv = "cubic-bezier(.65,0,.35,1)", T = (a) => "translateZ(" + -R + "px) rotateX(-14deg) rotateY(" + a + "deg) scale3d(1,1,1)";
          const CY = "translateY(" + R * Math.sin(-14 * Math.PI / 180) + "px) translateZ(" + (R * (1 - Math.cos(-14 * Math.PI / 180)) - R) + "px) ", TA = (a) => CY + "rotateX(-14deg) rotateY(" + a + "deg) scale3d(1,1,1)";
          const A = CY + "rotateX(-14deg) rotateY(0deg) scale3d(1,1,1)", D = 1050, e1 = { duration: 800, delay: D, easing: "cubic-bezier(.5,0,.2,1)", fill: "both" };
          sc.animate([{ transform: "rotateX(-14deg) rotateY(0deg) scale3d(1,1,1)" }, { transform: A }], e1);
          ps.forEach((p, i) => { p.animate([{ transform: "rotateY(" + i * 90 + "deg) translateZ(0px)" }, { transform: "rotateY(" + i * 90 + "deg) translateZ(" + R + "px)" }], e1); if (i) p.animate([{ opacity: 0 }, { opacity: 0, offset: .4 }, { opacity: 1 }], e1); });
          const cap0 = ps[0].querySelector(".cube-cap"); let capTok = 0, capI = -1;
          const fadeTo = (to, ms) => { const from = getComputedStyle(cap0).opacity; cap0.getAnimations().forEach((a) => { if (a.id !== "drift") a.cancel(); }); cap0.style.transition = "none"; cap0.style.opacity = to; return cap0.animate([{ opacity: from }, { opacity: to }], { duration: ms, easing: "ease-in-out" }).finished.catch(() => {}); };
          const CAPS = [[1, "Highlight <b>any text</b>"], [4.5, "Select <b>any website</b>"], [9.3, "Your results appear <b>instantly</b>"]];
          const setCap = async (n) => { const my = ++capTok; if (n < 0) { fadeTo(0, 350); return; } if (parseFloat(getComputedStyle(cap0).opacity) > 0.02) { await fadeTo(0, 450); if (my !== capTok) return; } cap0.innerHTML = "<span>" + CAPS[n][1] + "</span>"; cap0.getAnimations().forEach((a) => a.cancel()); cap0.style.transition = "none"; cap0.style.opacity = 1; if (!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) cap0.animate([{ opacity: 1, transform: "translateX(-6.45cqw)" }, { opacity: 1, transform: "translateX(0)" }], { duration: 900, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); (cap0.animate([{ translate: "0 0" }, { translate: "48px 0" }], { duration: 9000, delay: 900, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }).id = "drift"); };
          const hideCap = () => { capTok++; fadeTo(0, 300); };
          if (cap0 && vids[0]) { const sync = () => { const t = vids[0].currentTime; let n = -1; CAPS.forEach((c, q) => { if (t >= c[0]) n = q; }); if (n === capI) return; capI = n; setCap(n); }; vids[0].addEventListener("timeupdate", sync); vids[0].addEventListener("seeked", sync); }
          if (vids[0] && vids[0].requestVideoFrameCallback) { const cv = document.createElement("canvas"); cv.width = 32; cv.height = 32; const cx = cv.getContext("2d", { willReadFrequently: true }); const chk = () => { try { cx.drawImage(vids[0], 0, 0, 32, 32); const d = cx.getImageData(0, 29, 32, 3).data; let sum = 0; for (let q = 0; q < d.length; q += 4) sum += d[q] + d[q + 1] + d[q + 2]; vids[0].style.clipPath = sum / (d.length / 4) / 3 < 25 ? "inset(0 0 12.5% 0)" : ""; } catch (er) {} vids[0].requestVideoFrameCallback(chk); }; vids[0].requestVideoFrameCallback(chk); }
          const face0 = ps[0], panel = document.createElement("div"); panel.className = "cube-stats"; face0.appendChild(panel);
          const sroot = ReactDOM.createRoot(panel); let sn = 0;
          const showStats = () => { if (cap0) hideCap(); sroot.render(<CubeStats key={++sn} />); face0.classList.add("dark"); requestAnimationFrame(() => panel.classList.add("on")); };
          const hideStats = () => { panel.classList.remove("on"); face0.classList.remove("dark"); };
          let nudge = null, dir = 1, pend = 0;
          const arm = (res, t) => { nudge = () => { nudge = null; clearTimeout(t); res(); }; };
          const wait = (ms) => new Promise((res) => { const t = setTimeout(() => { nudge = null; res(); }, ms); arm(res, t); });
          const drift = (el) => { try { const w = el.closest(".cap-clip"), wr = w.getBoundingClientRect(), k = wr.width / w.offsetWidth || 1, rg = document.createRange(); rg.selectNodeContents(el); const rs = [...rg.getClientRects()]; const right = Math.max(...rs.map((r) => r.right)); return Math.max(0, Math.min(48, (wr.right - right) / k - 2)) + "px"; } catch (e) { return "0px"; } };
          const playVideo = (vid) => new Promise((res) => { vid.currentTime = 0; vid.playbackRate = vid === vids[3] ? 1.15 : 1; vid._done = false; const fin = () => { if (vid._done) return; vid._done = true; vid.pause(); vid.removeEventListener("timeupdate", cut); nudge = null; res(); }; const cut = () => { if (vid === vids[0] && vid.currentTime >= 15.7) fin(); }; vid.addEventListener("timeupdate", cut); vid.onended = fin; arm(() => { vid._done = false; vid.pause(); vid.removeEventListener("timeupdate", cut); res(); }); const go = () => vid.play(); go().catch(() => { const retry = () => { document.removeEventListener("touchstart", retry); document.removeEventListener("click", retry); if (!vid._done) go().catch(res); }; document.addEventListener("touchstart", retry, { once: true }); document.addEventListener("click", retry, { once: true }); }); });
          fx.addEventListener("click", (e) => { const nx = e.target.closest(".cube-next"), bk = e.target.closest(".cube-back"); if (!nx && !bk) return; if (!nudge) { pend = nx ? 1 : -1; return; } if (nx) nudge(); else { dir = -1; nudge(); } });
          (async () => {
            setTimeout(() => { if (dead) return; sc.getAnimations().forEach((an) => an.cancel()); sc.style.transform = TA(0); }, 800 + D + 700);
            await new Promise((r) => setTimeout(r, D + 250));
            vids.forEach((v) => { if (v) v.style.opacity = 1; });
            for (let k = 0; !dead;) {
              const fi = ((k % 4) + 4) % 4;
              const skip = pend; pend = 0; dir = skip || 1;
              vids.forEach((v, n) => { if (v && n !== fi) v.pause(); });
              if (fi === 0) { hideStats(); const nb = ps[0].querySelector(".cube-next"); nb.classList.remove("show"); clearTimeout(nb._t); if (window.__cubeLooped) nb.classList.add("show"); else nb._t = setTimeout(() => nb.classList.add("show"), 2000); }
              if (fi === 3) window.__cubeLooped = true;
              { const c1 = ps[1].querySelector(".cube-cap"); if (c1) { c1.getAnimations().forEach((x) => x.cancel()); c1.querySelectorAll(".l1,.l2,.l3,.l4,.ph").forEach((x) => x.getAnimations().forEach((y) => y.cancel())); if (fi === 1) c1.querySelector(".l1").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 7800, easing: "ease", fill: "forwards" }); if (fi === 1) { c1.querySelector(".l2").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 19000, easing: "ease", fill: "forwards" }); c1.querySelector(".l3").animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay: 19600, fill: "both" }); c1.querySelector(".l3").animate([{ transform: "translateX(-6.45cqw)" }, { transform: "translateX(0)" }], { duration: 900, delay: 19600, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); } if (fi === 1) c1.querySelectorAll(".ph").forEach((x, j) => x.animate([{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 900, delay: 8400 + j * 1900, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fill: "both" })); if (fi === 1) { c1.querySelector(".l1").animate([{ translate: "0 0" }, { translate: drift(c1.querySelector(".l1")) + " 0" }], { duration: 6500, delay: 3400, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c1.querySelector(".l3").animate([{ translate: "0 0" }, { translate: drift(c1.querySelector(".l3")) + " 0" }], { duration: 9000, delay: 19600, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c1.querySelector(".l3").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 23500, easing: "ease", fill: "forwards" }); c1.querySelector(".l4").animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay: 24100, fill: "both" }); c1.querySelector(".l4").animate([{ transform: "translateX(-6.45cqw)" }, { transform: "translateX(0)" }], { duration: 900, delay: 24100, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); { const vd = vids[1].duration; const fo = () => { const fd = Math.max(25500, (vd || 30) * 1000 - 2200); c1.querySelector(".l4").animate([{ translate: "0 0" }, { translate: drift(c1.querySelector(".l4")) + " 0" }], { duration: fd + 700 - 24100, delay: 24100, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c1.querySelector(".l4").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: fd, easing: "ease", fill: "forwards" }); }; if (vd) fo(); else vids[1].addEventListener("loadedmetadata", fo, { once: true }); } } if (fi === 1) { c1.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay: 3400, fill: "both" }); c1.querySelector(".l1").animate([{ transform: "translateX(-6.45cqw)" }, { transform: "translateX(0)" }], { duration: 900, delay: 3400, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); } } }
              { const c2 = ps[2].querySelector(".cube-cap"); if (c2) { c2.getAnimations().forEach((x) => x.cancel()); c2.style.opacity = 0; if (fi === 2) c2.animate([{ opacity: 1, transform: "translateX(-6.45cqw)" }, { opacity: 1, transform: "translateX(0)" }], { duration: 900, delay: 0, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); if (fi === 2) { c2.querySelectorAll(".l1,.l2,.l3").forEach((x) => x.getAnimations().forEach((y) => y.cancel())); c2.querySelector(".l1").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 5800, easing: "ease", fill: "forwards" }); c2.querySelector(".l1").animate([{ translate: "0 0" }, { translate: drift(c2.querySelector(".l1")) + " 0" }], { duration: 7500, delay: 0, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c2.querySelector(".l2").animate([{ translate: "0 0" }, { translate: drift(c2.querySelector(".l2")) + " 0" }], { duration: 10000, delay: 6400, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c2.querySelector(".l2").animate([{ opacity: 0, transform: "translateX(-6.45cqw)", offset: 0 }, { opacity: 1, transform: "translateX(-6.45cqw)", offset: 0.001 }, { opacity: 1, transform: "translateX(0)" }], { duration: 900, delay: 6400, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); c2.querySelector(".l2").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 12000, easing: "ease", fill: "forwards" }); c2.querySelector(".l3").animate([{ opacity: 0, transform: "translateX(-6.45cqw)", offset: 0 }, { opacity: 1, transform: "translateX(-6.45cqw)", offset: 0.001 }, { opacity: 1, transform: "translateX(0)" }], { duration: 900, delay: 12600, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); c2.querySelector(".l3").animate([{ translate: "0 0" }, { translate: drift(c2.querySelector(".l3")) + " 0" }], { duration: 8000, delay: 12600, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); { const vd2 = vids[2].duration; const fo2 = () => c2.querySelector(".l3").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: Math.max(13500, (vd2 || 20) * 1000 - 1600), easing: "ease", fill: "forwards" }); if (vd2) fo2(); else vids[2].addEventListener("loadedmetadata", fo2, { once: true }); } } } }
              { const c3 = ps[3].querySelector(".cube-cap"); if (c3) { c3.getAnimations({ subtree: true }).forEach((x) => x.cancel()); c3.style.opacity = 0; if (fi === 3) { c3.animate([{ opacity: 1, transform: "translateX(-6.45cqw)" }, { opacity: 1, transform: "translateX(0)" }], { duration: 900, delay: 0, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); c3.querySelector(".l1").animate([{ translate: "0 0" }, { translate: drift(c3.querySelector(".l1")) + " 0" }], { duration: 6500, delay: 900, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c3.querySelector(".l1").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 6400, easing: "ease", fill: "forwards" }); c3.querySelector(".l2").animate([{ opacity: 0, transform: "translateX(-6.45cqw)", offset: 0 }, { opacity: 1, transform: "translateX(-6.45cqw)", offset: 0.001 }, { opacity: 1, transform: "translateX(0)" }], { duration: 900, delay: 6400, easing: "cubic-bezier(0.16, 0.9, 0.25, 1)", fill: "both" }); c3.querySelector(".l2").animate([{ translate: "0 0" }, { translate: drift(c3.querySelector(".l2")) + " 0" }], { duration: 7700, delay: 7300, easing: "cubic-bezier(0.2, 0.5, 0.3, 1)", fill: "both" }); c3.querySelector(".l2").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 14400, easing: "ease", fill: "forwards" }); } } }
              if (fi === 2) { vids[2].currentTime = 0; if (!skip) await wait(3000); if (dead) return; }
              if (skip) { if (vids[fi]) vids[fi].pause(); } else if (vids[fi]) await playVideo(vids[fi]); else await wait(2200);
              if (!skip && fi === 0 && vids[0]._done && !dead) { showStats(); await wait(8500); }
              if (dead) return;
              if ((((k + dir) % 4) + 4) % 4 === 0 && vids[0]) { panel.style.transition = "none"; hideStats(); if (cap0) { cap0.getAnimations().forEach((x) => x.cancel()); cap0.style.transition = "none"; cap0.style.opacity = 0; } vids[0].pause(); vids[0].currentTime = 0; void panel.offsetWidth; requestAnimationFrame(() => { panel.style.transition = ""; }); }
              { const nf = (((k + dir) % 4) + 4) % 4; if (nf !== 0 && vids[nf]) { vids[nf].pause(); vids[nf].currentTime = 0; } if (nf === 1) { const c1 = ps[1].querySelector(".cube-cap"); if (c1) { c1.getAnimations().forEach((x) => x.cancel()); c1.querySelectorAll(".l1,.l2,.l3,.l4,.ph").forEach((x) => x.getAnimations().forEach((y) => y.cancel())); c1.style.opacity = 0; } } }
              const an = sc.animate([{ transform: TA(-90 * k) }, { transform: TA(-90 * (k + dir)) }], { duration: 1000, easing: mv, fill: "forwards" });
              await an.finished;
              k += dir;
              if (k >= 4) sc.classList.add("rot");
              sc.style.transform = TA(-90 * k); an.cancel();
            }
          })();
        });
        ex.cancel();
        const sp = { duration: 1300, easing: "cubic-bezier(.55,0,.15,1)", fill: "forwards" };
        const cs = { duration: 450, easing: "ease-out", fill: "forwards" };
        mk.querySelectorAll(".m-a,.m-b").forEach((p) => p.animate([{ fill: "#839cff", stroke: "#839cff" }, { fill: "#F4F2EE", stroke: "#F4F2EE" }], cs));
        mk.querySelector(".m-c").animate([{ opacity: 1 }, { opacity: 0 }], cs);
        cw.querySelectorAll(".m-a,.m-b").forEach((p) => p.animate([{ fill: "#839cff", stroke: "#839cff" }, { fill: "#F4F2EE", stroke: "#F4F2EE" }], cs));
        cw.querySelectorAll(".m-c").forEach((p) => p.animate([{ opacity: 1 }, { opacity: 0 }], cs));
        tx.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay: 4100, fill: "both" });
        const E = "inset(-10% -2% -10% 0)", Z = "inset(-10% 100% -10% 0)";
        tx.querySelector(".l1").animate([{ clipPath: Z, opacity: 0.2 }, { clipPath: E, opacity: 1 }], { duration: 1200, delay: 4100, easing: "cubic-bezier(.4,0,.2,1)", fill: "both" });
        tx.querySelector(".l2").animate([{ opacity: 0, transform: "translateX(0.6em) skewX(14deg)", clipPath: "inset(-10% 0% -10% 100%)" }, { opacity: 1, transform: "none", clipPath: E }], { duration: 380, delay: 5250, easing: "cubic-bezier(.12,.9,.2,1)", fill: "both" });
        tx.querySelector("p.lead").animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 500, delay: 5700, easing: "ease-out", fill: "both" });
      }, 350));
    }, 5350));
    return () => ts.forEach((t) => (t.stop ? t.stop() : clearTimeout(t)));
  }, []);
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap hero-grid" ref={gridRef}>
        <svg className="hero-mark" viewBox="9 9 193 193" role="img" aria-label="Slick Click"><path className="m-a" d="M9 9H202V96.5H105.5V105.5H9Z" /><g className="m-bot"><path className="m-b" d="M9 114.5H105.5V105.5H202V202H9Z" /><path className="m-c" d="M114.5 114.5H193V150.75H140V156.75H193V193H114.5Z" /></g></svg>
        <div className="hero-fx" aria-hidden="true"><div className="fx-scene"><i><div className="cube-cap"></div><video src="cube-face1-v2.mp4" muted playsInline preload="auto"></video><button className="cube-back" aria-label="Back"><svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2L4 7l5 5"/></svg>back</button><button className="cube-next" aria-label="Next">next<svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2l5 5-5 5"/></svg></button></i><i><div className="cap-clip"><div className="cube-cap two" dangerouslySetInnerHTML={{__html:"<span class=\"l1\">Do more with your <b>highlighted text</b></span><span class=\"l2\"><span class=\"ph\">Summarize it,</span> <span class=\"ph\">rewrite it,</span> <span class=\"ph\">fact-check it,</span> <span class=\"ph\">simplify it,</span> <span class=\"ph\">all in <b>one click</b></span></span><span class=\"l3\">Or ask <b>your own question</b></span><span class=\"l4\">Built-in AI means you never leave the page to check something. The answers <b>come to you</b>.</span>"}}></div></div><video src="uploads/slick-click-onboarding-actions-chat-loop-v7.mp4" muted playsInline preload="auto"></video><button className="cube-back" aria-label="Back"><svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2L4 7l5 5"/></svg>back</button><button className="cube-next" aria-label="Next">next<svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2l5 5-5 5"/></svg></button></i><i><div className="cap-clip"><div className="cube-cap two" dangerouslySetInnerHTML={{__html:"<span class=\"l1\">Looking for something on the page you're on? <b>Ask Slick Click.</b></span><span class=\"l2\">Ctrl+F only works if you know the exact words you're looking for.</span><span class=\"l3\">Describe what you're looking for on the page and <b>Slick Click finds what you mean.</b></span>"}}></div></div><video src="uploads/slick-click-find-terms-loop-v2.mp4" muted playsInline preload="auto"></video><button className="cube-back" aria-label="Back"><svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2L4 7l5 5"/></svg>back</button><button className="cube-next" aria-label="Next">next<svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2l5 5-5 5"/></svg></button></i><i><div className="cap-clip"><div className="cube-cap two" dangerouslySetInnerHTML={{__html:"<span class=\"l1\">Unsubscribe button hiding somewhere? <b>Slick Click knows where.</b></span><span class=\"l2\">Ask where to find something on a website and Slick Guide will highlight <b>the exact spot.</b></span>"}}></div></div><video src="uploads/slick-click-slick-guide-loop-v3.mp4" muted playsInline preload="auto"></video><button className="cube-back" aria-label="Back"><svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2L4 7l5 5"/></svg>back</button><button className="cube-next" aria-label="Next">next<svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2l5 5-5 5"/></svg></button></i></div></div>
        <div className="hero-text">
        <h1>
          <span className="l1">Make your every click</span><br />
          <span className="l2 blue">a slick click.</span>
        </h1>
        <p className="lead">Highlight any text on any page and do more with it. Search it across your favorite sites, ask AI about it or save it for later. All without ever leaving the page.</p>
        </div>
      </div>
    </section>);

}

/* ---------- LIVE DEMO ---------- */
const DEMO_ARTICLE = {
  title: 'The little-known history of the typewriter',
  byline: 'The Atlantic Monthly · 8 min read · by Eleanor Hayes',
  paragraphs: [
  'When Christopher Latham Sholes filed the first commercially viable typewriter patent in 1868, almost no one believed it would change anything. Writing, after all, had been a deeply personal craft for centuries: the slow flow of ink, the slight pressure of the nib, the smell of the paper. The idea that mechanical keys could replace this seemed ridiculous, even rude.',
  'But within three decades, the machine had transformed offices, journalism, and literature. Mark Twain became one of the first novelists to submit a typewritten manuscript. Newsrooms re-engineered their floors around the clatter of keys. Whole new professions emerged, most famously the typist, a role that quietly opened white-collar work to a generation of women.',
  'Today the QWERTY layout still sits beneath nearly every digital keyboard, a small monument to a 19th-century compromise between speed and mechanical reliability. Try selecting any phrase in this paragraph (your favorite word, an unfamiliar name, a date) to see how Slick Click would surface it across the web.']

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
        title="Slick Click Logo Sting"
        allowFullScreen
      />
      <video
        ref={videoRef}
        src="assets/demo-intro.mp4"
        style={{ ...fill, objectFit: 'cover', background: '#1d1d21', opacity: showSting ? 0 : 1 }}
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
            border: 'none', cursor: 'pointer', background: 'rgba(21,21,24,.45)',
            backdropFilter: 'blur(2px)', padding: 0,
          }}
        >
          <span style={{
            width: 72, height: 72, borderRadius: '50%', display: 'grid', placeItems: 'center',
            background: 'rgba(244,242,238,.14)', border: '1px solid rgba(131,156,255,.55)',
            boxShadow: '0 8px 32px rgba(0,0,0,.35)',
          }}>
            <span style={{
              width: 0, height: 0, marginLeft: 6,
              borderTop: '13px solid transparent', borderBottom: '13px solid transparent',
              borderLeft: '21px solid #F4F2EE',
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
          background: engine.color, color: '#F4F2EE', fontWeight: 800, fontSize: 12
        }}>{engine.initial}</div>
        <div>
          <div style={{ color: '#F4F2EE', fontWeight: 700, fontSize: 14 }}>
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
  const shellRef = React.useRef(null);
  React.useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh, end = vh / 2 - r.height / 2;
      const span = start - end;
      const p = Math.min(1, Math.max(0, r.top >= end ? (start - r.top) / span : 1 - (end - r.top) / span));
      el.style.setProperty('--grow', (1 - Math.pow(1 - p, 3)).toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="section" id="demo" data-screen-label="02 Demo">
      <div className="wrap">
        <div className="section-head">
          <h2>Highlight. Pick. Done.</h2>
          <p>Select any text on the page and Slick Click pops up with your favorite websites. One click goes straight there. See it in action below.</p>
        </div>
        <div className="demo-shell" ref={shellRef}>
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
  { icon: 'layers', title: 'Search across sites', body: 'Send the same query to up to six sites at once, and compare what each one gives you.' },
  { icon: 'sparkles', title: 'Slick AI', body: 'Summarize, translate, rewrite or ask about anything you highlight. Choose Gemini, Grok or GLM. We never store what you send.' },
  { icon: 'findInPage', title: 'Find in page', body: "Search the page you're on. Exact matches, or describe what you're after and let Slick AI find it." },
  { icon: 'globe', title: 'Add any website', body: 'If a site has a search box, Slick Click can use it. It works out the search address for you.' },
  { icon: 'book', title: 'Definitions, instantly', body: 'Want to look up a word? Use the Define feature without losing your place on the page.' }] },
{ label: 'Keep what matters', items: [
  { icon: 'queue', title: 'Queue it up', body: "Reading and spot three things to look up? Add them to a queue as you go, search them when you're done." },
  { icon: 'bookmark', title: 'Highlight and keep', body: 'Mark passages that are still there when you come back. Save quotes to your Library with a link straight to the source.' }] },
{ label: 'Under your control', items: [
  { icon: 'pdf', title: 'Works in PDFs too', body: 'The same tools inside a document. Highlight, annotate and save exactly as you would on a webpage.' },
  { icon: 'shield', title: 'Privacy first', body: 'Your sites, settings, highlights and saved passages never leave your machine. No account needed for anything but AI features, and we never sell your data.' },
  { icon: 'palette', title: 'Make it yours', body: 'Customize the Slick Click menu with different themes, add or remove websites, rearrange their order or put them into groups.' }] }];

const BP_NOTES = [
  { t: 'Queue it up', side: 'top', x: 684, y: 192 },
  { t: 'Find in page', side: 'top', x: 763, y: 310 },
  { t: 'Search across sites', side: 'left', x: 551, y: 641, lane: 662 },
  { t: 'Highlight and keep', side: 'right', x: 1099, y: 350 },
  { t: 'Slick AI', side: 'right', x: 1051, y: 476 },
  { t: 'Definitions, instantly', side: 'right', x: 868, y: 541, lane: 556 },
  { t: 'Add any website', side: 'bottom', x: 708, y: 1276 }];
const fgToggle = (e) => {
  const me = e.currentTarget, was = me.classList.contains('open');
  const all = [...document.querySelectorAll('#features .feature')];
  all.forEach((c) => { c.style.transition = 'none'; if (c.classList.contains('fg-card')) { c.classList.remove('open'); c.setAttribute('aria-expanded', 'false'); } });
  if (!was) {
    const r = me.getBoundingClientRect(), others = all.filter((c) => c !== me).map((c) => c.getBoundingClientRect());
    let s = 1.35;
    for (; s > 1.02; s -= 0.025) {
      const w = r.width * (s - 1) / 2 + 10, h = r.height * (s - 1) / 2 + 10;
      if (!others.some((o) => o.left < r.right + w && o.right > r.left - w && o.top < r.bottom + h && o.bottom > r.top - h)) break;
    }
    me.style.setProperty('--s', Math.max(s, 1.02));
    me.classList.add('open'); me.setAttribute('aria-expanded', 'true');
  }
  void me.offsetWidth; all.forEach((c) => { c.style.transition = ''; });
};
const BP_ITEMS = BP_NOTES.map((n) => FEATURE_GROUPS.flatMap((g) => g.items).find((f) => f.title === n.t));
function BlueprintFeatures() {
  const boxRef = React.useRef(null), imgRef = React.useRef(null), cardRefs = React.useRef([]);
  const [paths, setPaths] = React.useState({ d: [], dots: [] });
  const pathsRef = React.useRef([]);
  React.useEffect(() => {
    const calc = () => {
      const box = boxRef.current, img = imgRef.current;
      if (box && window.innerWidth <= 1100) box.style.marginBottom = '';
      if (!box || !img || window.innerWidth <= 1100 || !img.naturalWidth) { setPaths({ d: [], dots: [] }); return; }
      { box.style.marginBottom = ''; const bt = box.getBoundingClientRect().top; const cb = Math.max(...[...box.querySelectorAll('.feature')].filter((c) => !c.classList.contains('open')).map((c) => c.getBoundingClientRect().bottom - bt)); box.style.marginBottom = Math.max(40, cb - box.offsetHeight + 40) + 'px'; }
      const b = box.getBoundingClientRect(), r = img.getBoundingClientRect(), sc = r.width / 1166;
      const L = r.left - b.left, T = r.top - b.top, R = L + r.width;
      const rights = BP_NOTES.map((n, i) => i).filter((i) => BP_NOTES[i].side === 'right');
      const d = [], dots = [];
      BP_NOTES.forEach((nt, k) => {
        const c = cardRefs.current[k]; if (!c) return;
        const cr = c.getBoundingClientRect();
        const cx = cr.left - b.left + cr.width / 2, cy = cr.top - b.top + cr.height / 2;
        const tx = nt.side === 'bottom' ? cx : L + nt.x * sc, ty = T + nt.y * sc;
        let p;
        if (nt.side === 'top') { const sy = cr.bottom - b.top, jy = sy + 34; p = 'M' + cx + ' ' + sy + ' V' + jy + ' H' + tx + ' V' + ty; }
        else if (nt.side === 'bottom') { const sy = cr.top - b.top; p = 'M' + cx + ' ' + sy + ' V' + ty; }
        else if (nt.side === 'left') { const sx = cr.right - b.left, gx = L - 36, ly = T + nt.lane * sc; p = nt.lane ? 'M' + sx + ' ' + cy + ' H' + gx + ' V' + ly + ' H' + tx + ' V' + ty : 'M' + sx + ' ' + cy + ' H' + gx + ' V' + ty + ' H' + tx; }
        else {
          const sx = cr.left - b.left, idx = rights.indexOf(k), gx = R + 24 + (rights.length - 1 - idx) * 14;
          p = 'M' + sx + ' ' + cy + ' H' + gx;
          if (nt.lane) p += ' V' + (T + nt.lane * sc) + ' H' + tx + ' V' + ty; else p += ' V' + ty + ' H' + tx;
        }
        d.push(p); dots.push([tx, ty]);
      });
      pathsRef.current = d; setPaths({ d, dots });
    };
    calc();
    const img = imgRef.current; if (img) img.addEventListener('load', calc);
    window.addEventListener('resize', calc);
    const t = setTimeout(calc, 700);
    return () => { window.removeEventListener('resize', calc); if (img) img.removeEventListener('load', calc); clearTimeout(t); };
  }, []);
  const [open, setOpen] = React.useState({});
  const tog = (k) => {
    const cs = cardRefs.current.filter(Boolean);
    const was = !!open[k];
    let s = 1;
    if (!was) {
      cs.forEach((c) => { c.style.transition = 'none'; c.classList.remove('open'); c.style.removeProperty('--s'); });
      const me = cardRefs.current[k], r = me.getBoundingClientRect(), others = cs.filter((c) => c !== me).map((c) => c.getBoundingClientRect());
      const bx = boxRef.current.getBoundingClientRect(), segs = [];
      pathsRef.current.forEach((d, pi) => {
        if (pi === k) return;
        const tk = d.split(/\s+/); let x = 0, y = 0, cmd = '';
        tk.forEach((q) => { if (/^[MHV]/.test(q)) { cmd = q[0]; q = q.slice(1); } if (q === '') return; const v = parseFloat(q); let nx = x, ny = y;
          if (cmd === 'M') { if (nx === x && !tk._m) { x = v; tk._m = 1; return; } y = v; tk._m = 0; return; }
          if (cmd === 'H') nx = v; else if (cmd === 'V') ny = v;
          segs.push([x + bx.left, y + bx.top, nx + bx.left, ny + bx.top]); x = nx; y = ny; });
      });
      for (s = 1.35; s > 1.02; s -= 0.025) {
        const w = r.width * (s - 1) / 2 + 10, h = r.height * (s - 1) / 2 + 10;
        const L = r.left - w, R = r.right + w, T = r.top - h, B = r.bottom + h;
        if (!others.some((o) => o.left < R && o.right > L && o.top < B && o.bottom > T) && !segs.some(([x1, y1, x2, y2]) => Math.max(x1, x2) > L && Math.min(x1, x2) < R && Math.max(y1, y2) > T && Math.min(y1, y2) < B)) break;
      }
      cs.forEach((c) => { c.style.transition = ''; });
      me.style.setProperty('--s', Math.max(s, 1.02));
    }
    setOpen(was ? {} : { [k]: true });
    [0, 120, 300, 450].forEach((ms) => setTimeout(() => window.dispatchEvent(new Event('resize')), ms));
  };
  const card = (k) => {
    const f = BP_ITEMS[k], on = !!open[k];
    return (
      <div className={"feature reveal bp-card" + (on ? " open" : "")} style={{ '--i': k }} key={k} ref={(el) => (cardRefs.current[k] = el)}>
        <h4>{f.title}</h4>
        <p>{f.body}</p>
      </div>);
  };
  const side = (name) => BP_NOTES.map((n, k) => n.side === name ? card(k) : null);
  return (
    <div className="bp" ref={boxRef}>
      <div className="bp-top">{side('top')}</div>
      <div className="bp-left">{side('left')}<div className="bp-ctrl"><div className="group-label">Built around you</div>{FEATURE_GROUPS.find((g) => g.label === 'Under your control').items.map((f, i) => <div className="bp-ci" key={f.title}><div className="feature reveal fg-card" style={{ '--i': i }}><h4>{f.title}</h4><p>{f.body}</p></div></div>)}</div></div>
      <div className="bp-mid"><img ref={imgRef} className="bp-img" src="assets/blueprint-brand.png" alt="The Slick Click search menu: a search box, action buttons, and a grid of favorite sites" /><div className="bp-bot">{side('bottom')}</div></div>
      <div className="bp-right">{side('right')}</div>
      <svg className="bp-lines" aria-hidden="true">
        {paths.d.map((p, i) => <path key={i} d={p} />)}
        {paths.dots.map((q, i) => <circle key={i} cx={q[0]} cy={q[1]} r="3.5" />)}
      </svg>
    </div>);
}

function Features() {
  const cols = 4;
  React.useEffect(() => {
    const els = document.querySelectorAll('#features .feature.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting || en.boundingClientRect.top < 0) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return (
    <section className="section" id="features" data-screen-label="03 Features">
      <div className="wrap">
        <div className="section-head">
          <h2>The fastest way to look things up.</h2>
          <p>Highlight text and the Slick Click menu appears. There when you need it, gone when you're done. Discreet by design. Never in the way. Always on hand.</p>
        </div>
        <BlueprintFeatures />
        <div className="feature-groups">
          {FEATURE_GROUPS.filter((g0) => g0.label !== 'Under your control').map((g0) => {
            const g = { ...g0, items: g0.items.filter((f) => !BP_NOTES.some((n) => n.t === f.title)) };
            if (!g.items.length) return null;
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
                      style={{ left: 'calc((100% - 54px) * ' + ci + ' / 4 + ' + ci * 18 + 'px + (100% - 54px) / 8)' }} />
                    )}
                  </div>
                  <div className="features">
                    {row.map((f, i) => {
                      return (
                        <div className="feature reveal fg-card" style={{ '--i': i }} key={i}>
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
        <div className="feature-stats"><Stats /></div>
      </div>
    </section>);

}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const stepsRef = React.useRef(null);
  React.useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
    const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section className="section" id="how-it-works" data-screen-label="04 How it works">
      <div className="wrap">
        <div className="section-head">
          <h2>Three steps. Two seconds.</h2>
        </div>
        <div className="steps" ref={stepsRef}>
          <div className="step">
            <div className="num">01 / SELECT</div>
            <h4>Highlight anything.</h4>
            <p><span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--ink-2)', backgroundColor: 'rgba(244,242,238,0)' }}>Cross-reference a fact, check a source, find a definition, look up a quote, all without losing your place or your train of thought.</span></p>
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

function StatCard({ value, suffix, label, icon, color, delay = 0, started, tip }) {
  const count = useCountUp(value, 1400 + delay, started);
  const [tipOpen, setTipOpen] = useState(false); const tipRef = useRef(null);
  useEffect(() => { if (!tipOpen) return; const f = (e) => { if (!tipRef.current || !tipRef.current.contains(e.target)) setTipOpen(false); }; document.addEventListener("click", f); return () => document.removeEventListener("click", f); }, [tipOpen]);
  return (
    <div className="stat">
      <div className="stat-number" style={{ color: '#F4F2EE' }}>
        <span className="n" style={{ fontVariantNumeric: 'tabular-nums' }}><span className="flip-card"><span className="flip-digit" key={count}>{count}</span></span><span className="suf">{suffix}</span></span>
      </div>
      <div className="l">{label}</div>
      {tip && <span className="stat-tipwrap" ref={tipRef}><button type="button" className="stat-q" aria-label={"About: " + label} aria-expanded={tipOpen} onClick={() => setTipOpen((o) => !o)}>?</button>{tipOpen && <span className="stat-tip" role="tooltip">{tip}</span>}</span>}
    </div>
  );
}

function CubeStats() {
  const r = useRef(null);
  useLayoutEffect(() => {
    const q = (s) => r.current.querySelector(s), t = document.timeline.currentTime, all = [];
    const go = (el, kf, o) => { const a = el.animate(kf, { fill: "both", ...o }); a.startTime = t; all.push(a); };
    const soft = [{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }], rise = [{ opacity: 0, transform: "translateY(7px)" }, { opacity: 1, transform: "none" }], wipe = [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }];
    go(q(".sq1"), soft, { duration: 1800, delay: 0, easing: "ease-in-out" });
    go(q(".sq2"), soft, { duration: 1800, delay: 2000, easing: "ease-in-out" });
    go(q(".sq3"), rise, { duration: 700, delay: 5000, easing: "cubic-bezier(.25,.46,.45,.94)" });
    go(q(".sq1 .sq-k"), wipe, { duration: 1000, delay: 2550, easing: "cubic-bezier(.15,.55,.35,1)" });
    const w1 = q(".sq1 .sq-t").offsetWidth || 1, w2 = q(".sq2 .sq-t").offsetWidth || w1;
    go(q(".sq2 .sq-k"), wipe, { duration: Math.round(1000 * w2 / w1), delay: 5300, easing: "cubic-bezier(.15,.55,.35,1)" });
    return () => all.forEach((a) => a.cancel());
  }, []);
  return (
    <div className="stats-block cube-stats-in sq-wrap" ref={r}>
      <p className="sq sq-no sq1"><span className="sq-t">No more copying<i className="sq-k"></i></span></p>
      <p className="sq sq-no sq2"><span className="sq-t">No more opening new tabs and pasting<i className="sq-k"></i></span></p>
      <p className="sq sq-one sq3">With Slick Click,<br />it's just <b className="sq-b">one click.</b></p>
    </div>
  );
}

window.__CubeStats = CubeStats;
function Stats({ gate }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [counting, setCounting] = useState(false);
  useEffect(() => { if (!started) return; const t = setTimeout(() => setCounting(true), gate ? 700 : 0); return () => clearTimeout(t); }, [started]);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let spun = !gate || !!window.__cubeSpun, seen = false;
    const fire = () => { if (spun && seen) { setStarted(true); cleanup(); } };
    const f = () => { spun = true; fire(); };
    if (gate && !spun) window.addEventListener(gate, f);
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { seen = true; fire(); } }, { threshold: 0.6 });
    obs.observe(el);
    function cleanup() { obs.disconnect(); window.removeEventListener(gate, f); }
    return cleanup;
  }, []);

  const StatIcon = {
    clock: () => Icon.clock(),
    cursor: () => Icon.cursor(),
    key: () => Icon.keyboard(),
  };

  return (
    <div className={"stats-block" + (gate && !started ? " pre" : "")} ref={ref}>
      <p className="stats-lead">Each search will save you, on average:</p>
      <div className="stats">
        <StatCard value={6} suffix="" label="secs saved" tip="Based on estimated average time to manually copy text, navigate to a website, and perform a search." icon={<StatIcon.clock/>} color="var(--blue)" delay={0} started={counting}/>
        <StatCard value={7} suffix="" label="clicks avoided" tip="Based on the minimum clicks to perform the same search manually: Right-clicking to copy, opening the address bar, navigating to the site, clicking the search bar, right-clicking to paste, and clicking Search. That's 7 clicks versus 1 with Slick Click." icon={<StatIcon.cursor/>} color="var(--blue)" delay={200} started={counting}/>
        <StatCard value={9} suffix="" label="keystrokes skipped" tip="Based on the minimum keystrokes to perform the same search manually: Ctrl+C to copy, Ctrl+L to focus the address bar, one key to bring up the site, Enter to navigate, Ctrl+V to paste, and Enter to search. That's 9 keystrokes versus 1 click with Slick Click." icon={<StatIcon.key/>} color="var(--blue)" delay={400} started={counting}/>
      </div>
    </div>
  );
}

/* ---------- FAQ ---------- */const FAQS = [
{ q: 'Is Slick Click free?', a: 'Yes. No ads, no in-app purchases, nothing to buy. The AI features run on a monthly allowance of credits, which is free too. Everything else is unlimited.' },
{ q: 'Do I need an account?', a: 'Only for the AI features, because those run on a server and the allowance has to be counted against someone. Searching, highlighting, saving, find-in-page and everything else works without signing in.' },
{ q: 'Does it track my searches?', a: "Your highlighted text stays on your device until you ask for something. Click a site and it goes straight to that site, not through us. Two things do leave: Define looks the word up with a dictionary service, and Slick AI sends your selection to your chosen model, through our server. We never store either. We also collect anonymous usage counts (how often features are used, never what you searched) to see what's worth improving." },
{ q: 'Is my data used to train AI models?', a: "No, and we don't keep your requests or the answers. They exist in memory for as long as the request takes and are never written to our database. Once a request reaches Google, xAI or Z.ai it's governed by their terms, so treat Slick AI like any other AI tool: don't put anything in it you wouldn't send to a third party." },
{ q: 'What happens when I run out of AI credits?', a: "Your allowance resets at the start of each month. Everything that isn't AI keeps working as normal in the meantime." },
{ q: "Can I add a site that isn't in the list?", a: "Yes. Open Settings, type the site's address (youtube.com is enough) and Slick Click works out how to search it. There's also a list of popular sites you can add with one click." },
{ q: 'Does it work on Firefox, Safari or Edge?', a: "Not yet. Slick Click is built for Chrome. Other Chromium browsers like Edge and Brave will run it, though Google sign-in, and so the AI features, may not work there. We hope to get Slick Click up and running on Firefox and Safari before the end of the year, so stay tuned for updates." },
{ q: 'Does it work in PDFs?', a: 'Yes, Slick Click is 100% compatible with PDFs.' },
{ q: 'Will it slow my browsing down?', a: "Slick Click is less than 7MiB and has been optimized to work as smoothly as possible on your system." },
{ q: "Something's broken. How do I get help?", a: "Email support@slickclick.app. We aim to respond within a couple of days." },
{ q: 'How do I uninstall?', a: 'Right-click the icon and choose "Remove from Chrome". That clears everything stored on your machine. If you made an account for the AI features, delete it separately first: Settings, then Membership, then Delete account.' }];


function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" id="faq" data-screen-label="08 FAQ">
      <div className="wrap">
        <div className="section-head">
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
          <h3>The ultimate web browsing tool is here</h3>
          <p>Install Slick Click free. Highlight your first piece of text. You'll never copy-paste into Google again.</p>
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
              <SwiftLogo size={32} />
            </a>
            <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 320 }}>The fastest way to search the web. Highlight any text. Search anywhere. All in one click.

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
              <li><span style={{ color: 'var(--ink-3)', cursor: 'default' }} aria-disabled="true">Tutorials <em style={{ fontSize: 11, fontStyle: 'normal', letterSpacing: '.06em', textTransform: 'uppercase', marginLeft: 6, padding: '2px 7px', border: '1px solid var(--line)', borderRadius: 999 }}>Coming soon</em></span></li>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="terms.html">Terms of service</a></li>
              <li><a href="support.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Slick Click. All rights reserved.</span>
          <a
            href="https://sinope.online"
            className="sinope-credit-plain"
            title="Sinope, Publisher"
            aria-label="Developed by Sinope">
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, fontWeight: 500 }}>Developed by</span>
            <img src="sinope-lockup-gray.png" alt="Sinope" style={{ height: 46, width: 'auto' }} />
          </a>
          <span>v.4.3.0. Last updated November 2026</span>
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


const COMPAT_ALL = [...COMPAT_ROW1, ...COMPAT_ROW2];
const COMPAT_PAGES = (() => { const per = 10, n = Math.ceil(COMPAT_ALL.length / per), out = []; for (let p = 0; p < n; p++) { const pg = []; for (let i = 0; i < per; i++) pg.push(COMPAT_ALL[(p * per + i) % COMPAT_ALL.length]); out.push(pg); } return out; })();

function CompatChip({ s, k, n, first }) {
  const [shown, setShown] = React.useState(s);
  const [anim, setAnim] = React.useState(null);
  const init = React.useRef(true);
  React.useEffect(() => {
    if (init.current) { init.current = false; return; }
    if (shown.domain === s.domain) return;
    const t1 = setTimeout(() => setAnim('pillFlipOut .15s ease-in both'), n * 110);
    const t2 = setTimeout(() => { setShown(s); setAnim('pillFlip .15s ease-out both'); }, n * 110 + 150);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [s.domain]);
  return (
    <div className="compat-chip" style={{ '--k': n, ...(anim ? { animation: anim } : {}) }}>
      <img src={`https://www.google.com/s2/favicons?domain=${shown.domain}&sz=64`} alt={shown.name} width="28" height="28" style={{ borderRadius: 6 }} />
      <span>{shown.name}</span>
    </div>);
}

function CompatRow({ items, phase, base }) {
  return (
    <div className={'compat-track compat-' + phase}>
      {items.map((s, i) => <CompatChip key={i} s={s} k={i} n={base + i} />)}
    </div>);
}

function CompatibilityStrip() {
  const [page, setPage] = React.useState(0);
  const [phase, setPhase] = React.useState('idle');
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let done = false;
    const go = () => { if (done) return; done = true; setPhase((p) => p === 'idle' ? 'in' : p); cleanup(); };
    const check = () => { const r = el.getBoundingClientRect(); if (r.top < window.innerHeight * 0.85 && r.bottom > 0) go(); };
    let io = null;
    if ('IntersectionObserver' in window) { io = new IntersectionObserver(([en]) => { if (en.isIntersecting) go(); }, { threshold: 0.3 }); io.observe(el); }
    window.addEventListener('scroll', check, { passive: true }); window.addEventListener('resize', check);
    const fb = setTimeout(go, 6000);
    function cleanup() { if (io) io.disconnect(); window.removeEventListener('scroll', check); window.removeEventListener('resize', check); clearTimeout(fb); }
    check();
    return cleanup;
  }, []);
  React.useEffect(() => {
    let t;
    if (phase === 'in') t = setTimeout(() => setPhase('hold'), 1200);
    else if (phase === 'hold') t = setTimeout(() => { setPage((p) => (p + 1) % COMPAT_PAGES.length); setPhase('out'); }, 5000);
    else if (phase === 'out') t = setTimeout(() => setPhase('hold'), 1500);
    return () => clearTimeout(t);
  }, [phase]);
  const pg = COMPAT_PAGES[page];
  return (
    <section className="compat-section">
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2>Works everywhere you search.</h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: 520, margin: '12px auto 0' }}>Tried and tested to work with 100s of the most popular websites on the web.</p>

      </div>
      <div className="compat-split">
        <div className="feature compat-card">
          <h4>Add Google, Reddit, YouTube, Amazon, TikTok or any site you choose.</h4>
          <p>If it has a search bar, Slick Click can figure out how to search it automatically.</p>
        </div>
        <div className="compat-link" aria-hidden="true"></div>
        <div className="compat-stage" ref={stageRef}>
          <CompatRow items={pg.slice(0, 5)} phase={phase} base={0} />
          <CompatRow items={pg.slice(5, 10)} phase={phase} base={5} />
        </div>
      </div>
    </section>);
}

const KB_CARDS = [
{ side: 'left', k: 'esc', top: true, t: 'Close the menu', b: 'Esc closes the floating menu.' },
{ side: 'left', k: 'tab', t: 'Focus the site icons', b: 'Tab moves into the icons. Press again to cycle through them.' },
{ side: 'bottom', k: 'alt', t: 'Open from anywhere', b: 'Alt+S opens Slick Click on the current page. Alt+A opens the AI Box.' },
{ side: 'right', k: 'n9', top: true, t: 'Search instantly', b: 'Once an icon is focused, press 1 to 9 to search that numbered site.' },
{ side: 'right', k: 'enter', t: 'Search the focused site', b: 'Or your default site if none is focused.' },
{ side: 'bottom', k: 'arr', t: 'Move around', b: 'Arrow keys move focus between site icons, across and up or down a row.' }];
const KB_ROWS = [
[['Esc', 4, 'esc'], ...'123456789'.split('').map((c) => [c, 4, c === '9' ? 'n9' : '', 1]), ['0', 4], ['⌫', 8]],
[['Tab', 6, 'tab'], ...'QWERTYUIOP'.split('').map((c) => [c, 4]), ['\\', 6]],
[['Caps', 7], ['A', 4, 'a', 1], ['S', 4, 's', 1], ...'DFGHJKL'.split('').map((c) => [c, 4]), ['Enter', 9, 'enter']],
[['Alt', 6, 'alt'], ['', 28], ['Alt', 6], ['←', 4, '', 0], ['ud', 4, 'arr', 0], ['→', 4]]];
const KB_ON = ['Esc', 'Tab', 'Enter', 'Alt', '←', '→', 'ud'];
function KeyboardBlueprint() {
  const boxRef = React.useRef(null), kbRef = React.useRef(null), cardRefs = React.useRef([]);
  const [paths, setPaths] = React.useState({ d: [], dots: [] });
  React.useEffect(() => {
    const calc = () => {
      const box = boxRef.current, kb = kbRef.current;
      if (!box || window.innerWidth <= 1100) { setPaths({ d: [], dots: [] }); return; }
      const b = box.getBoundingClientRect(), kr = kb.getBoundingClientRect();
      const d = [], dots = [];
      KB_CARDS.forEach((c, i) => {
        const el = cardRefs.current[i], key = kb.querySelector('[data-k="' + c.k + '"]'); if (!el || !key) return;
        const cr = el.getBoundingClientRect(), r = key.getBoundingClientRect();
        const cy = cr.top - b.top + cr.height / 2, kx = r.left - b.left, ky = r.top - b.top + r.height / 2;
        const kcx = r.left - b.left + r.width / 2, kt = r.top - b.top;
        const left = c.side === 'left', sx = left ? cr.right - b.left : cr.left - b.left;
        let p, tx, ty;
        if (c.side === 'bottom') { const kb2 = r.bottom - b.top; tx = kcx; ty = kb2; p = 'M' + tx + ' ' + (cr.top - b.top) + ' V' + ty; }
        else if (c.top) { tx = kcx; ty = kt; p = 'M' + sx + ' ' + cy + ' H' + tx + ' V' + ty; }
        else {
          const ex = left ? kx : r.right - b.left, gx = left ? kr.left - b.left - 28 : kr.right - b.left + 28;
          tx = ex; ty = ky; p = 'M' + sx + ' ' + cy + ' H' + gx + ' V' + ty + ' H' + tx;
        }
        d.push(p); dots.push([tx, ty]);
      });
      const q = (k) => { const e = kb.querySelector('[data-k="' + k + '"]'); return e && e.getBoundingClientRect(); };
      const al = q('alt'), ka = q('a'), ks = q('s');
      if (al && ka && ks) {
        const gy = ka.bottom - b.top + (al.top - ka.bottom) / 2, ax = al.left - b.left + al.width / 2, kax = ka.left - b.left + ka.width / 2, ksx = ks.left - b.left + ks.width / 2, kyb = ka.bottom - b.top;
        const my = al.top - b.top + al.height / 2; d.push('M' + (al.right - b.left) + ' ' + my + ' H' + ksx + ' V' + kyb); d.push('M' + kax + ' ' + my + ' V' + kyb);
        dots.push([kax, kyb], [ksx, kyb]);
      }
      setPaths({ d, dots });
    };
    calc(); window.addEventListener('resize', calc);
    const t = setTimeout(calc, 600);
    return () => { window.removeEventListener('resize', calc); clearTimeout(t); };
  }, []);
  const col = (side) => KB_CARDS.map((c, i) => c.side === side ?
  <div className="feature" key={i} ref={(el) => (cardRefs.current[i] = el)}><h4>{c.t}</h4><p>{c.b}</p></div> : null);
  return (
    <div className="kbp" ref={boxRef}>
      <div className="kbp-l">{col('left')}</div>
      <div className="kbp-kb" ref={kbRef} role="img" aria-label="Keyboard with the Slick Click shortcut keys highlighted">
        {KB_ROWS.map((row, ri) =>
        <div className="kbp-row" key={ri}>
          {row.map(([l, u, id, hl], ki) => {
            if (l === '' ) return <i className="kbp-key kbp-space" key={ki} style={{ gridColumn: 'span ' + u }}></i>;
            if (l === 'ud') return <span className="kbp-ud" key={ki} data-k={id || undefined} style={{ gridColumn: 'span ' + u }}><i className="kbp-key on">↑</i><i className="kbp-key on">↓</i></span>;
            const on = hl === 1 ? true : KB_ON.includes(l) && !(l === 'Enter' && false);
            return (
              <i key={ki} className={'kbp-key' + (on || hl === 1 ? ' on' : '') + (l === '←' || l === '→' ? ' kbp-half' : '')} data-k={id || undefined} style={{ gridColumn: 'span ' + u }}>
                {l === 'Tab' ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Tab"><path d="M3 6h14M13 2l4 4-4 4M20 2v8M19 16H5M9 12l-4 4 4 4M2 12v8"/></svg> : l}
              </i>);
          })}
        </div>)}
      </div>
      <div className="kbp-r">{col('right')}</div>
      <div className="kbp-b">{col('bottom')}</div>
      <svg className="bp-lines" aria-hidden="true">
        {paths.d.map((p, i) => <path key={i} d={p} />)}
        {paths.dots.map((q, i) => <circle key={i} cx={q[0]} cy={q[1]} r="3.5" />)}
      </svg>
    </div>);
}

function KeyboardShortcuts() {
  return (
    <section className="section kb-section" id="shortcuts">
      <div className="wrap">
        <div className="section-head">
          <h2>Built with speed in mind</h2>
          <p>Slick Click has been optimized for keyboard users so you never have to break your flow.</p>
        </div>
        <KeyboardBlueprint />
      </div>
    </section>);
}

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
            <Features />
      <CompatibilityStrip />
      <KeyboardShortcuts />
      <FAQ />
      <CTA />
      <Footer />
    </>);

}

if (!window.__SQ_ONLY) ReactDOM.createRoot(document.getElementById('root')).render(<App />);