parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||t(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(r){if("string"==typeof r)return i(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(r,e):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return i(r)}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var c=document.querySelector("table"),a=c.querySelectorAll("th"),l=c.querySelector("tbody");function u(e){var t,n=[];n=3===e?Array.from(l.rows).sort(function(r,t){return f(r.cells[e].innerHTML)-f(t.cells[e].innerHTML)}):Array.from(l.rows).sort(function(r,t){return r.cells[e].innerHTML.localeCompare(t.cells[e].innerHTML)}),(t=c.tBodies[0]).append.apply(t,r(n))}function f(r){return+r.slice(1).replace(/,/g,"")}a.forEach(function(r,e){r.addEventListener("click",function(){u(e)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.679c8257.js.map