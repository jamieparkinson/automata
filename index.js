!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);s.length;)s.shift()()}var n={},r={1:0};var o={};var i={2:function(){return{"./index.js":{__wbg_new_59cb74e423758ede:function(){return n[1].exports.__wbg_new_59cb74e423758ede()},__wbg_stack_558ba5917b466edd:function(e,t){return n[1].exports.__wbg_stack_558ba5917b466edd(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return n[1].exports.__wbg_error_4bb6c2a97407129a(e,t)},__wbindgen_object_drop_ref:function(e){return n[1].exports.__wbindgen_object_drop_ref(e)},__wbg_self_1801c027cb0e6124:function(){return n[1].exports.__wbg_self_1801c027cb0e6124()},__wbg_require_e89d842e759f0a4c:function(e,t){return n[1].exports.__wbg_require_e89d842e759f0a4c(e,t)},__wbg_crypto_3e91f24788b1203d:function(e){return n[1].exports.__wbg_crypto_3e91f24788b1203d(e)},__wbindgen_is_undefined:function(e){return n[1].exports.__wbindgen_is_undefined(e)},__wbg_getRandomValues_7ecea3ecacbb2f9e:function(e){return n[1].exports.__wbg_getRandomValues_7ecea3ecacbb2f9e(e)},__wbg_randomFillSync_eae3007264ffc138:function(e,t,r){return n[1].exports.__wbg_randomFillSync_eae3007264ffc138(e,t,r)},__wbg_getRandomValues_f724b5822126eff7:function(e,t,r){return n[1].exports.__wbg_getRandomValues_f724b5822126eff7(e,t,r)},__wbindgen_throw:function(e,t){return n[1].exports.__wbindgen_throw(e,t)}}}}};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+""+({}[e]||e)+".js"}(e);var l=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return({0:[2]}[e]||[]).forEach((function(e){var n=o[e];if(n)t.push(n);else{var r,c=i[e](),s=fetch(a.p+""+{2:"2d707ab46c706646921d"}[e]+".module.wasm");if(c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,c);else{r=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)}))}t.push(o[e]=r.then((function(t){return a.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e},a.w={};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a(a.s=0)}([function(e,t,n){"use strict";n.r(t);const r=e=>new Uint8Array(4*e.length).map((t,n)=>n%4==3?255:255*e[Math.floor(n/4)]),o=(e,t,n)=>{let r=-1;const o=e=>Math.floor(e/t),i=e=>{const t=o(e.pageX);t!==r&&(n(t),r=t)},a=t=>{r=o(t.pageX),n(r),e.addEventListener("mousemove",i)},c=()=>{e.removeEventListener("mousemove",i),r=-1};return e.addEventListener("mousedown",a),e.addEventListener("mouseup",c),()=>{e.removeEventListener("mousedown",a),e.removeEventListener("mouseup",c)}},i=e=>e.toString(2).padStart(8,"0"),a=e=>parseInt(e,2),c={0:0,4:1,2:2,6:3,1:4,5:5,3:6,7:7},s=e=>{const t=e.split("");return t.slice().map((e,n)=>t[c[n]]).join("")},u=e=>{const t=a(e);let n=0;return Array.from({length:8}).forEach((e,r)=>{n|=(1&t>>(7^r)^1)<<r}),i(n)};var l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};const f=2,d=[110,30,106,45,126,22,105,142],_=document.getElementById("universe"),m=document.getElementById("rule_select"),p=document.getElementById("speed_range"),b=document.getElementById("randomize_btn"),g=(e=>{const{innerWidth:t,innerHeight:n}=window;return{size:Math.ceil(t/e),iterations:Math.floor(n/e)}})(f),w=((e,t)=>{const n=e.getContext("2d");e.width=t.size,e.height=t.iterations,n.imageSmoothingEnabled=!1;let o=new Uint8ClampedArray(t.size*t.iterations*4).fill(255);const i=()=>{const e=new ImageData(o,t.size,t.iterations);n.putImageData(e,0,0)};return{addGeneration:e=>{(e=>{o.set(e,t.size*(t.iterations-1)*4),o.copyWithin(0,4*t.size)})(r(e)),i()},fillViewport:e=>{o=new Uint8ClampedArray(r(e)),i()}}})(_,g),h=(e=>{let t=Object.assign({},e);return{update:e=>{t=Object.assign(Object.assign({},t),e(t))},get:()=>Object.freeze(Object.assign({},t))}})({tickPeriod:25,rule:d[Math.floor(Math.random()*d.length)]});var v,y,x;v=m,y=h.get().rule,x=d,(()=>{const e=Array.from({length:256}).map((e,t)=>i(t)),t=e.map(s),n=e.map(u),r=t.map(u);return[...new Set(e.map((o,i)=>Math.min(...[e[i],t[i],n[i],r[i]].map(a))))]})().forEach(e=>{const t=document.createElement("option");t.value=e.toString(10),t.text=e.toString(10),-1!==x.indexOf(e)&&(t.text=`*${t.text}*`),v.appendChild(t)}),v.value=y.toString(10),p.min="0",p.max="60",p.value="35";const E=((e,t)=>n=>t.min+n*(t.max-t.min)/(e.max-e.min))({min:0,max:60},{min:60,max:0});p.addEventListener("change",e=>{const t=E(parseInt(e.currentTarget.value,10));h.update(()=>({tickPeriod:t}))});const j=(e,t)=>{const n=new Uint8Array(g.iterations*g.size);for(let r=1;r<g.iterations;r++){e.tick();const o=new Uint8Array(t,e.cells_ptr(),g.size);n.set(o,r*g.size)}w.fillViewport(n)};!function(){l(this,void 0,void 0,(function*(){const{AutomataUniverse:e}=yield n.e(0).then(n.bind(null,1)),{memory:t}=yield n.e(0).then(n.bind(null,2)),r=new e(g.size,h.get().rule);j(r,t.buffer),o(_,f,r.perturb_cell.bind(r)),m.addEventListener("change",e=>{const t=parseInt(e.currentTarget.value,10);r.change_rule(t)}),b.addEventListener("click",()=>{r.randomize()});const i=()=>{const e=new Uint8Array(t.buffer,r.cells_ptr(),g.size);w.addGeneration(e),r.tick(),setTimeout(i,h.get().tickPeriod)};i()}))}()}]);