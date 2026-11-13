(function(){
function build(){
var nav=document.querySelector('.nav-inner');
if(!nav||nav.querySelector('.nav-burger'))return;
var links=nav.querySelector('.nav-links'),cta=nav.querySelector('.nav-cta');
if(!links)return;
var host=nav.closest('.nav')||nav.parentNode;
var b=document.createElement('button');b.className='nav-burger';b.setAttribute('aria-label','Menu');b.setAttribute('aria-expanded','false');b.innerHTML='<span></span>';
var m=document.createElement('div');m.className='nav-menu';
links.querySelectorAll('a').forEach(function(a){var c=a.cloneNode(true);c.removeAttribute('style');m.appendChild(c)});
if(cta){var c2=cta.cloneNode(true);m.appendChild(c2)}
nav.appendChild(b);host.style.position=host.style.position||'sticky';host.appendChild(m);
function set(o){host.classList.toggle('nav-open',o);b.setAttribute('aria-expanded',o)}
b.addEventListener('click',function(){set(!host.classList.contains('nav-open'))});
m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
window.addEventListener('resize',function(){if(innerWidth>1020)set(false)});
}
function init(){build();new MutationObserver(build).observe(document.body,{childList:true,subtree:true})}
if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);
})();
