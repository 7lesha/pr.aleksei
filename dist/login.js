!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=128)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(46))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(0),o=e(25),i=e(3),u=e(26),c=e(27),a=e(53),l=o("wks"),s=r.Symbol,f=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(l,t)||(c&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,n,e){var r=e(7),o=e(10),i=e(17);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(7),o=e(24),i=e(6),u=e(16),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(31),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(13),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(7),o=e(47),i=e(17),u=e(11),c=e(16),a=e(3),l=e(24),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),l)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=e(5),i=e(3),u=e(13),c=e(21),a=e(38),l=a.get,s=a.enforce,f=String(String).split("String");(t.exports=function(t,n,e,c){var a,l=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=f.join("string"==typeof n?n:""))),t!==r?(l?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(0),o=e(15).f,i=e(5),u=e(18),c=e(13),a=e(49),l=e(35);t.exports=function(t,n){var e,s,f,p,d,v=t.target,x=t.global,h=t.stat;if(e=x?r:h?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],f=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!l(x?s:v+(h?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(14),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n){t.exports={}},function(t,n,e){var r=e(51),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(7),o=e(1),i=e(32);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(33),o=e(14);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),u=[];function c(t){for(var n=-1,e=0;e<u.length;e++)if(u[e].identifier===t){n=e;break}return n}function a(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],l=e[a]||0,s="".concat(a," ").concat(l);e[a]=l+1;var f=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(u[f].references++,u[f].updater(p)):u.push({identifier:s,updater:h(p,n),references:1}),r.push(s)}return r}function l(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var u=i(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(n)}return n}var s,f=(s=[],function(t,n){return s[t]=n,s.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}function d(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,x=0;function h(t,n){var e,r,o;if(n.singleton){var i=x++;e=v||(v=l(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(n),r=d.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=a(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=c(e[r]);u[o].references--}for(var i=a(t,n),l=0;l<e.length;l++){var s=c(e[l]);0===u[s].references&&(u[s].updater(),u.splice(s,1))}e=i}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),n.push(a))}},n}},function(t,n,e){var r=e(1),o=e(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(2),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==l||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r,o,i=e(68),u=e(69),c=RegExp.prototype.exec,a=String.prototype.replace,l=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=u.UNSUPPORTED_Y||u.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||f)&&(l=function(t){var n,e,r,o,u=this,l=f&&u.sticky,d=i.call(u),v=u.source,x=0,h=t;return l&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),h=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,x++),e=new RegExp("^(?:"+v+")",d)),p&&(e=new RegExp("^"+v+"$(?!\\s)",d)),s&&(n=u.lastIndex),r=c.call(l?e:u,h),l?r?(r.input=r.input.slice(x),r[0]=r[0].slice(x),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:s&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,n,e){var r=e(8);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r,o,i,u=e(48),c=e(0),a=e(2),l=e(5),s=e(3),f=e(14),p=e(39),d=e(22),v=c.WeakMap;if(u){var x=f.state||(f.state=new v),h=x.get,g=x.has,y=x.set;r=function(t,n){return n.facade=t,y.call(x,t,n),n},o=function(t){return h.call(x,t)||{}},i=function(t){return g.call(x,t)}}else{var m=p("state");d[m]=!0,r=function(t,n){return n.facade=t,l(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(25),o=e(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(41),o=e(34).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(11),i=e(42).indexOf,u=e(22);t.exports=function(t,n){var e,c=o(t),a=0,l=[];for(e in c)!r(u,e)&&r(c,e)&&l.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(l,e)||l.push(e));return l}},function(t,n,e){var r=e(11),o=e(12),i=e(43),u=function(t){return function(n,e,u){var c,a=r(n),l=o(a.length),s=i(u,l);if(t&&e!=e){for(;l>s;)if((c=a[s++])!=c)return!0}else for(;l>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(19),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(21),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(3),o=e(50),i=e(15),u=e(10);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,l=0;l<e.length;l++){var s=e[l];r(t,s)||c(t,s,a(n,s))}}},function(t,n,e){var r=e(23),o=e(40),i=e(52),u=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(27);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(28);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(2),o=e(37),i=e(4)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));var r={time3000:3e3,time5000:5e3},o={number8:8,number20:20}},function(t,n,e){var r=e(6),o=e(28),i=e(4)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r=e(0),o=e(59),i=e(60),u=e(5);for(var c in o){var a=r[c],l=a&&a.prototype;if(l&&l.forEach!==i)try{u(l,"forEach",i)}catch(t){l.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(61).forEach,o=e(45)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(54),o=e(31),i=e(44),u=e(12),c=e(55),a=[].push,l=function(t){var n=1==t,e=2==t,l=3==t,s=4==t,f=6==t,p=7==t,d=5==t||f;return function(v,x,h,g){for(var y,m,b=i(v),S=o(b),E=r(x,h,3),w=u(S.length),L=0,O=g||c,T=n?O(v,w):e||p?O(v,0):void 0;w>L;L++)if((d||L in S)&&(m=E(y=S[L],L,b),t))if(n)T[L]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return L;case 2:a.call(T,y)}else switch(t){case 4:return!1;case 7:a.call(T,y)}return f?-1:l||s?s:T}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},,,function(t,n,e){var r=e(2),o=e(8),i=e(4)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){"use strict";var r=e(66),o=e(64),i=e(6),u=e(9),c=e(57),a=e(70),l=e(12),s=e(72),f=e(36),p=e(1),d=[].push,v=Math.min,x=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(u(this)),i=void 0===e?4294967295:e>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return n.call(r,t,i);for(var c,a,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,x=new RegExp(t.source,p+"g");(c=f.call(x,r))&&!((a=x.lastIndex)>v&&(s.push(r.slice(v,c.index)),c.length>1&&c.index<r.length&&d.apply(s,c.slice(1)),l=c[0].length,v=a,s.length>=i));)x.lastIndex===c.index&&x.lastIndex++;return v===r.length?!l&&x.test("")||s.push(""):s.push(r.slice(v)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var u=e(r,t,this,o,r!==n);if(u.done)return u.value;var f=i(t),p=String(this),d=c(f,RegExp),h=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(x?"y":"g"),y=new d(x?f:"^(?:"+f.source+")",g),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===s(y,p)?[p]:[];for(var b=0,S=0,E=[];S<p.length;){y.lastIndex=x?S:0;var w,L=s(y,x?p:p.slice(S));if(null===L||(w=v(l(y.lastIndex+(x?0:S)),p.length))===b)S=a(p,S,h);else{if(E.push(p.slice(b,S)),E.length===m)return E;for(var O=1;O<=L.length-1;O++)if(E.push(L[O]),E.length===m)return E;S=b=w}}return E.push(p.slice(b)),E}]}),!x)},function(t,n,e){"use strict";e(67);var r=e(18),o=e(1),i=e(4),u=e(36),c=e(5),a=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var v=i(t),x=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),h=x&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!x||!h||"replace"===t&&(!l||!s||p)||"split"===t&&!d){var g=/./[v],y=e(v,""[t],(function(t,n,e,r,o){return n.exec===u?x&&!o?{done:!0,value:g.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=y[0],b=y[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},function(t,n,e){"use strict";var r=e(20),o=e(36);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(6);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){"use strict";var r=e(71).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(19),o=e(9),i=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),l=c.length;return a<0||a>=l?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===l||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(8),o=e(36);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},,,,,,,,function(t,n,e){"use strict";var r=e(30),o=e.n(r)()((function(t){return t[1]}));o.push([t.i,".container {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border: #000000 1px solid;\r\n    padding: 40px 30px;\r\n    width: 500px;\r\n    text-align: center;\r\n}\r\n\r\n.p {\r\n    font-size: 16px;\r\n}\r\n\r\n.title {\r\n    color: #010502;\r\n    margin: 0 0 50px;\r\n}\r\n\r\n.email {\r\n    margin: 10px auto 40px;\r\n    width: 220px;\r\n    display: block;\r\n    padding: 5px;\r\n}\r\n\r\n.but1 {\r\n    cursor: pointer;\r\n    padding: 8px 20px;\r\n}\r\n\r\n.but2 {\r\n    padding: 8px 20px;\r\n}\r\n\r\n.buttons {\r\n    margin-top: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.messerror {\r\n    display: none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border: #000000 1px solid;\r\n    padding: 20px 30px;\r\n    width: 300px;\r\n    background-color: #ffffff;\r\n    text-align: center;\r\n}\r\n\r\n.close {\r\n    cursor: pointer;\r\n    border: 0;\r\n    background-color: rgb(255, 255, 255, 0);\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 10px;\r\n}\r\n\r\n.err {\r\n    position: absolute;\r\n    bottom: -20px;\r\n    right: 0;\r\n    left: 0;\r\n    margin: 0 auto;\r\n    color: #ff0000;\r\n    display: none;\r\n    font-size: 14px;\r\n    max-width: 300px;\r\n}\r\n\r\n.diverror {\r\n    position: relative;\r\n}\r\n\r\n.butpas {\r\n    padding: 0px;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 35px;\r\n    right: 140px;\r\n    background-color: rgb(255, 255, 255, 0);\r\n    cursor: pointer;\r\n    border: 0;\r\n}\r\n\r\n.pas {\r\n    margin: 10px auto 40px;\r\n    width: 195px;\r\n    display: block;\r\n    padding: 5px 30px 5px 5px;\r\n}\r\n",""]),n.a=o},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(58),e(65);var r=e(29),o=e.n(r),i=e(80),u={insert:"head",singleton:!1},c=(o()(i.a,u),i.a.locals,e(56)),a=[!1,!1,!1],l=document.querySelector(".form"),s=l.querySelector(".but1"),f=l.querySelector(".but2"),p=l.querySelector(".divnone"),d=document.querySelector(".title"),v=document.querySelector(".messerror"),x=v.querySelector(".error"),h=document.querySelector(".close"),g=document.querySelectorAll(".err"),y=document.querySelectorAll(".input"),m=document.querySelectorAll(".butpas"),b=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,S=/[A-Z,А-Я]/,E=/[a-z,а-я]/,w=/[0-9]/,L=/[~`!@#$%^&*+=\-[\]\\';()/{}|\\":<>?]/;function O(){return"none"===p.style.display}function T(){v.style.display="none"}function j(t){v.style.display="block",x.textContent=t,setTimeout(T,c.b.time5000)}function I(t,n){y[n].type=t?"text":"password",m[n-1].innerHTML="<img src=./src/img/eye"+(t?"1":"")+".png>"}function C(){var t=O();p.style.display=t?"block":"none",s.textContent=t?"Войти":"Зарегистрироваться",d.textContent=t?"Создание аккаунта":"Войти",f.textContent=t?"Зарегистрироваться":"Войти",f.disabled=!0,g.forEach((function(t,n){g[n].style.display="none"})),a=[!1,!1,!1],I(!1,1),I(!1,a.length-1),l.reset()}function M(t,n,e){g[t].textContent=e,g[t].style.marginBottom="0px",g[t].style.display=n?"none":"block";var r=a[0]&&a[1];r=r&&(!!O()||a[a.length-1]),f.disabled=!r,f.style.cursor=r?"pointer":"context-menu"}l.addEventListener("submit",(function(t){t.preventDefault();var n=["false"];if(n.push(y[0].value),n.push(y[1].value),O())if(localStorage.getItem("user")){var e=localStorage.getItem("user").split(",");e[1]===n[1]&&e[e.length-1]===n[n.length-1]?(e[0]="true",localStorage.setItem("user",e),window.location.href="./home.html"):j("Проверьте логин и пароль!")}else j("Зарегистрируйтесь. Нет ни одного пользователя!"),C();else localStorage.getItem("user")?(j("Ошибка. Вы уже зарегисрированы!"),C()):n[n.length-1]===y[n.length-1].value?(localStorage.setItem("user",n),j("Регистрация прошла успешно. Теперь войдите"),C()):j("Пароли не совпадают!")})),s.addEventListener("click",C),h.addEventListener("click",T),window.addEventListener("load",(function(){localStorage.getItem("user")&&("true"===localStorage.getItem("user").split(",")[0]&&(window.location.href="home.html"))})),y.forEach((function(t,n){0===n?t.addEventListener("input",(function(){0===t.value.length?M(n,!1,"Поле не заполнено!"):(a[n]=b.test(t.value),M(n,a[n],"Пожалуйста, введите корректный email-адрес"))})):(t.addEventListener("input",(function(){a[n]=!1;var e=S.test(t.value)&&E.test(t.value);e=e&&w.test(t.value)&&L.test(t.value),0===t.value.length?(console.log(11),M(n,a[n],"Поле не заполнено!")):t.value.length<c.a.number8||t.value.length>c.a.number20?M(n,a[n],"Длина пароля должна быть от 8 до 20 символов"):e?(a[n]=!0,M(n,a[n])):(M(n,a[n],"Пароль должен состоять минимум из 1 цифры, 1 буквы, 1 заглавной буквы и 1 спецсимвола"),g[n].style.marginBottom="-16px")})),t.addEventListener("keydown",(function(t){","!==t.key&&"."!==t.key&&" "!==t.key||t.preventDefault()})))})),m.forEach((function(t,n){t.addEventListener("click",(function(){I("password"===y[n+1].type,n+1)}))}))}]);