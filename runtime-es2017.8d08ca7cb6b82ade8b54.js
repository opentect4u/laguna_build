!function(){"use strict";var e,t={},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}r.m=t,e=[],r.O=function(t,n,o,u){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],u=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&u||i>=u)&&Object.keys(r.O).every(function(e){return r.O[e](n[c])})?n.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[n,o,u]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o||"object"==typeof n&&n&&(4&o&&n.__esModule||16&o&&"function"==typeof n.then))return n;var u=Object.create(null);r.r(u);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){i[e]=function(){return n[e]}});return i.default=function(){return n},r.d(u,i),u}}(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce(function(t,n){return r.f[n](e,t),t},[]))},r.u=function(e){return e+"-es2017."+{233:"42a8f91513b7e1a2ef13",358:"bf77b580f828afa71295",487:"139418c895c9d2c2949c",977:"db9b71042e812825e1dc",997:"2d2a9406a333075eb864"}[e]+".js"},r.miniCssF=function(e){return{179:"main",532:"styles"}[e]+"."+{179:"78f219e7fb905338e309",532:"d73d741c249df0baab79"}[e]+".css"},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="laguna:";r.l=function(n,o,u,i){if(e[n])e[n].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+u){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+u),a.src=r.tu(n)),e[n]=[o];var s=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(function(e){return e(r)}),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;r.tu=function(t){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(t)}}(),r.p="",function(){var e={666:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(666!=t){var u=new Promise(function(n,r){o=e[t]=[n,r]});n.push(o[2]=u);var i=r.p+r.u(t),a=new Error;r.l(i,function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}},"chunk-"+t,t)}else e[t]=0},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,i=n[0],a=n[1],c=n[2],f=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r);for(t&&t(n);f<i.length;f++)r.o(e,u=i[f])&&e[u]&&e[u][0](),e[i[f]]=0;return r.O(l)},n=self.webpackChunklaguna=self.webpackChunklaguna||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();