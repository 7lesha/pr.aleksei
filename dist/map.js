!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=145)}({145:function(e,n,r){"use strict";r.r(n);var t=r(32),o=r.n(t),i=r(82),a={insert:"head",singleton:!1};o()(i.a,a),i.a.locals;window.initMap=function(){new google.maps.Map(document.querySelector(".map"),{center:{lat:53.9,lng:27.5},zoom:12})};var c=document.createElement("script");c.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyFSLlg94-paC238gd7OQKlE_LTv0SK3M&callback=initMap&v=weekly",document.body.appendChild(c)},32:function(e,n,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),a=[];function c(e){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===e){n=r;break}return n}function u(e,n){for(var r={},t=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],l=r[u]||0,s="".concat(u," ").concat(l);r[u]=l+1;var d=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:h(f,n),references:1}),t.push(s)}return t}function l(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function f(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var v=null,m=0;function h(e,n){var r,t,o;if(n.singleton){var i=m++;r=v||(v=l(n)),t=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=l(n),t=p.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var r=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=u(e,n),l=0;l<r.length;l++){var s=c(r[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}r=i}}}},33:function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),n.push(u))}},n}},82:function(e,n,r){"use strict";var t=r(33),o=r.n(t)()((function(e){return e[1]}));o.push([e.i,".menu {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #dcdcdc;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  z-index: 1;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n}\r\n\r\n.a {\r\n  text-decoration: initial;\r\n  color: #000000;\r\n  margin: 0 20px;\r\n}\r\n\r\n.but {\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border: none;\r\n}\r\n\r\n.a:hover,\r\n.but:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.map {\r\n  height: 100%;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n",""]),n.a=o}});