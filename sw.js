if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>s(e,r),f={module:{uri:r},exports:t,require:c};i[r]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-8366b1fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/Style.css",revision:"11ed7f469e916ea543d5d097c9ef831e"},{url:"icono.png",revision:"1c0fb6e2b22a965d40b8b6dafc790ead"},{url:"img/fondo.jpg",revision:"f1efcfb50cc7362742e1805813f6cd99"},{url:"index.html",revision:"d056a7e14a0870aa40a469a041cead34"},{url:"manifest.json",revision:"90245fea70ae156e5e84d817fe27cbd9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
