!function(e){function n(n){for(var t,o,i=n[0],a=n[1],u=0,c=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(f&&f(n);c.length;)c.shift()()}var t={},r={1:0};var o={};var i={2:function(){return{"./index.js":{__wbg_new_59cb74e423758ede:function(){return t[1].exports.__wbg_new_59cb74e423758ede()},__wbg_stack_558ba5917b466edd:function(e,n){return t[1].exports.__wbg_stack_558ba5917b466edd(e,n)},__wbg_error_4bb6c2a97407129a:function(e,n){return t[1].exports.__wbg_error_4bb6c2a97407129a(e,n)},__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__wbg_self_1801c027cb0e6124:function(){return t[1].exports.__wbg_self_1801c027cb0e6124()},__wbg_require_e89d842e759f0a4c:function(e,n){return t[1].exports.__wbg_require_e89d842e759f0a4c(e,n)},__wbg_crypto_3e91f24788b1203d:function(e){return t[1].exports.__wbg_crypto_3e91f24788b1203d(e)},__wbindgen_is_undefined:function(e){return t[1].exports.__wbindgen_is_undefined(e)},__wbg_getRandomValues_7ecea3ecacbb2f9e:function(e){return t[1].exports.__wbg_getRandomValues_7ecea3ecacbb2f9e(e)},__wbg_randomFillSync_eae3007264ffc138:function(e,n,r){return t[1].exports.__wbg_randomFillSync_eae3007264ffc138(e,n,r)},__wbg_getRandomValues_f724b5822126eff7:function(e,n,r){return t[1].exports.__wbg_getRandomValues_f724b5822126eff7(e,n,r)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)}}}}};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+""+({}[e]||e)+".js"}(e);var f=new Error;c=function(n){s.onerror=s.onload=null,clearTimeout(_);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,t[1](f)}r[e]=void 0}};var _=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return({0:[2]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,u=i[e](),c=fetch(a.p+""+{2:"d9aad8e12be7d514679a"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(c),u]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(c,u);else{r=c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,u)}))}n.push(o[e]=r.then((function(n){return a.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e},a.w={};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var f=c;a(a.s=0)}([function(e,n,t){"use strict";t.r(n);const r=()=>{const{innerWidth:e,innerHeight:n}=window;return{size:Math.ceil(e/2),iterations:Math.floor(n/2)}},o=e=>{const n=document.getElementById("universe"),t=n.getContext("2d");n.width=e.size,n.height=e.iterations;let r=0,o=new Uint8ClampedArray(e.size*e.iterations*4).fill(255);const i=n=>{o.set((e=>new Uint8Array(4*e.length).map((n,t)=>t%4==3?255:255*e[Math.floor(t/4)]))(n),e.size*r*4),r===e.iterations-1&&o.copyWithin(0,4*e.size)};return{render:n=>{i(n);const a=new ImageData(o,e.size,e.iterations);t.putImageData(a,0,0),r<e.iterations-1&&r++}}};var i=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}))};const a=25;!function(){i(this,void 0,void 0,(function*(){const{AutomataUniverse:e}=yield t.e(0).then(t.bind(null,1)),{memory:n}=yield t.e(0).then(t.bind(null,2)),i=r(),u=new e(i.size,30),c=o(i),s=()=>{const e=new Uint8Array(n.buffer,u.cells_ptr(),i.size);c.render(e),u.tick(),setTimeout(s,a)};s()}))}()}]);