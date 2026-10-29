/* Page bits: reveals, nav, flip card, reviews arrows, tab bar. No libraries. */
(function(){
var $=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var rv=$('[data-reveal]');
if(rm||!('IntersectionObserver' in window)){rv.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});rv.forEach(function(e){io.observe(e)})}
var nav=document.querySelector('.nav');function ns(){nav.classList.toggle('solid',window.scrollY>30)}ns();window.addEventListener('scroll',ns,{passive:true});
$('.flip').forEach(function(f){f.addEventListener('click',function(){var on=f.classList.toggle('on');f.setAttribute('aria-pressed',on)})});
var tr=document.querySelector('.rtrack');
$('.rbtn').forEach(function(b){b.addEventListener('click',function(){if(!tr)return;var c=tr.querySelector('.rcard');var w=c?c.getBoundingClientRect().width+14:300;var d=+b.dataset.dir*(document.documentElement.dir==='rtl'?-1:1);tr.scrollBy({left:d*w,behavior:rm?'auto':'smooth'})})});
var tabs=$('.tabbar a'),ids=tabs.map(function(a){return a.getAttribute('href').slice(1)});
if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=ids.indexOf(e.target.id);tabs.forEach(function(a,j){a.classList.toggle('on',j===i)})}})},{rootMargin:'-45% 0px -50% 0px'});ids.forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s)})}
})();
