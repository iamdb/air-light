(()=>{"use strict";var e={4251:e=>{var t=function(){var e={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function t(e,t,n,r){return e/=r,-n*(--e*e*e*e-1)+t}function n(e,t){var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function r(e){return e instanceof HTMLElement?e.scrollTop:e.pageYOffset}function o(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(e,r),this.easeFunctions=n({easeOutQuart:t},o)}return o.prototype.registerTrigger=function(e,t){var r=this;if(e){var o=e.getAttribute("href")||e.getAttribute("data-target"),i=o&&"#"!==o?document.getElementById(o.substring(1)):document.body,a=n(this.options,function(e,t){var n={};return Object.keys(t).forEach((function(t){var r=e.getAttribute("data-mt-".concat(t.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()}))));r&&(n[t]=isNaN(r)?r:parseInt(r,10))})),n}(e,this.options));"function"==typeof t&&(a.callback=t);var s=function(e){e.preventDefault(),r.move(i,a)};return e.addEventListener("click",s,!1),function(){return e.removeEventListener("click",s,!1)}}},o.prototype.move=function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){o=n(this.options,o);var i,a="number"==typeof e?e:e.getBoundingClientRect().top,s=r(o.container),c=null;a-=o.tolerance;var l=function n(l){var u=r(t.options.container);c||(c=l-1);var d=l-c;if(i&&(a>0&&i>u||a<0&&i<u))return o.callback(e);i=u;var v=t.easeFunctions[o.easing](d,s,a,o.duration);o.container.scroll(0,v),d<o.duration?window.requestAnimationFrame(n):(o.container.scroll(0,a+s),o.callback(e))};window.requestAnimationFrame(l)}},o.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},o}();e.exports=t}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return void 0===window.air_light_screenReaderText||void 0===window.air_light_screenReaderText[e]?(console.error("Missing translation for ".concat(e)),""):window.air_light_screenReaderText[e]}function o(e){var n=t(e.children);if(0===n.length)return"";var r=n.filter((function(e){return"img"===e.tagName.toLowerCase()}));if(n.length!==r.length)return"";var o=r.filter((function(e){return e.alt&&""!==e.alt})).map((function(e){return e.alt}));return o.length?o.join(", "):""}function i(){var e=[window.location.host];void 0!==window.air_light_externalLinkDomains&&(e=e.concat(window.air_light_externalLinkDomains));var n=t(document.querySelectorAll("a")).filter((function(t){return function(e,t){if(!e.length)return!1;var n;if(["#","tel:","mailto:","/"].some((function(t){return new RegExp("^".concat(t),"g").test(e)})))return!1;try{n=new URL(e)}catch(t){return console.log("Invalid URL: ".concat(e)),!1}return!t.some((function(e){return n.host===e}))}(t.href,e)}));n.forEach((function(e){if(1===e.childElementCount&&"img"===e.children[0].tagName.toLowerCase())return!1;if(!e.classList.contains("no-external-link-label")){var t=e.textContent.trim().length?e.textContent.trim():o(e),n="_blank"===e.target?"".concat(t,": ").concat(r("external_link"),", ").concat(r("target_blank")):"".concat(t,": ").concat(r("external_link"));e.setAttribute("aria-label",n)}["no-external-link-indicator","global-link","button"].some((function(t){return e.classList.contains(t)}))||e.insertAdjacentHTML("beforeend",'<svg class="external-link-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9"><path d="M4.499 1.497h4v4m0-4l-7 7" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>')}))}var a=n(4251),s=n.n(a);const c=function(){for(var e=new(s())({ease:"easeInQuad"},{easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t}}),t=document.getElementsByClassName("js-trigger"),n=0;n<t.length;n++)e.registerTrigger(t[n])};const l=function(){var e=new(s())({duration:300,easing:"easeOutQuart"}),t=document.getElementById("top"),n=document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');t&&(t.addEventListener("click",(function(t){t.preventDefault(),e.move(n[0])})),t.addEventListener("keydown",(function(){n[0].focus()}))),window.addEventListener("scroll",(function(){var e=window.pageYOffset,n=document.documentElement.clientHeight;e>n&&t.classList.add("is-visible"),e<n&&t.classList.remove("is-visible")}))};const u=function(){var e=document.querySelectorAll("h1, h2, h3, h4, h5, h6")[0],t=document.querySelectorAll(".skip-link")[0],n=new(s());t&&t.addEventListener("click",(function(){e.setAttribute("tabindex","-1"),e.focus(),n.move(e)}))};function d(e){e.forEach((function(e){var t=e.querySelectorAll(".sub-menu");t.forEach((function(e){var n,r;void 0!==t&&((n=e.getBoundingClientRect(),(r={}).top=n.top<0,r.left=n.left<0,r.bottom=n.bottom>(window.innerHeight||document.documentElement.clientHeight),r.right=n.right>(window.innerWidth||document.documentElement.clientWidth),r.any=r.top||r.left||r.bottom||r.right,r).right&&e.classList.add("is-out-of-viewport"))}))}))}const v=function(){var e=getComputedStyle(document.documentElement).getPropertyValue("--width-max-mobile");if(!window.matchMedia("(max-width: ".concat(e,")")).matches){var t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".menu-item a, .dropdown button");t.forEach((function(e){if(e.querySelector(".dropdown")){var t=e.querySelector(".dropdown-toggle"),n=e.querySelector(".dropdown").innerText;t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(n))}})),function(e){e.forEach((function(e){e.addEventListener("mouseover",(function(){var t=this;e.classList.contains("removing-hover")||(this.classList.add("hover-intent"),this.classList.add("hovering"),this.parentNode.classList.add("hover-intent"),this.parentNode.classList.add("hovering"),setTimeout((function(){t.classList.remove("hovering"),t.parentNode.classList.remove("hovering")}),500),document.addEventListener("keydown",(function(n){!t.classList.contains("removing-hover")&&t.classList.contains("hovering")&&t.parentNode.classList.contains("hovering")&&"Escape"===n.key&&(e.classList.remove("hover-intent"),e.parentNode.classList.remove("hover-intent"),e.parentNode.parentNode.classList.remove("hover-intent"),e.classList.add("removing-hover"),e.parentNode.classList.add("removing-hover"),setTimeout((function(){t.classList.remove("removing-hover"),t.parentNode.classList.remove("removing-hover")}),500))})),setTimeout((function(){t.classList.remove("removing-hover"),t.parentNode.classList.remove("removing-hover")}),500))})),e.addEventListener("mouseleave",(function(){var e=this;setTimeout((function(){e.classList.remove("hover-intent"),e.parentNode.classList.remove("hover-intent")}),0),setTimeout((function(){e.classList.remove("removing-hover"),e.parentNode.classList.remove("removing-hover")}),500)}))}))}(t),n.forEach((function(e){e.addEventListener("keydown",(function(e){var t=e.target,n=t.parentNode,r=t.parentNode.parentNode.parentNode.querySelector(".sub-menu"),o=t.parentNode.parentNode.querySelector(".sub-menu"),i=t.parentNode.parentNode.parentNode.querySelector(".dropdown-toggle");if(t.classList.remove("removing-hover"),n.parentNode.classList.remove("removing-hover"),"Enter"===e.key&&(n.classList.add("hover-intent"),o.classList.add("toggled-on"),t.classList.contains("dropdown-toggle"))){t.setAttribute("aria-expanded","true");var a=t.parentNode.querySelector(".dropdown-item").innerText;t.setAttribute("aria-label","".concat(air_light_screenReaderText.collapse_for," ").concat(a))}if("Escape"===e.key){if(r.classList.remove("toggled-on"),n.classList.remove("hover-intent"),i.setAttribute("aria-expanded","false"),t.classList.contains("dropdown-toggle")){t.setAttribute("aria-expanded","false");var s=t.parentNode.querySelector(".dropdown-item").innerText;t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(s))}i.focus()}}))})),d(t)}};document.body.classList.remove("no-js"),document.body.classList.add("js"),document.addEventListener("DOMContentLoaded",(function(){c(),l(),i(),t(document.querySelectorAll("a")).forEach((function(e){if(""===e.textContent.trim()&&!e.ariaLabel){var t=o(e);""!==t&&(e.ariaLabel=t)}})),u(),v(),function(e,t){var n,r,o="string"==typeof e?document.querySelectorAll(e):e,i=t||"js-reframe";"length"in o||(o=[o]);for(var a=0;a<o.length;a+=1){var s=o[a];if(-1!==s.className.split(" ").indexOf(i)||s.style.width.indexOf("%")>-1)return;var c=s.getAttribute("height")||s.offsetHeight,l=s.getAttribute("width")||s.offsetWidth,u=("string"==typeof c?parseInt(c):c)/("string"==typeof l?parseInt(l):l)*100,d=document.createElement("div");d.className=i;var v=d.style;v.position="relative",v.width="100%",v.paddingTop="".concat(u,"%");var f=s.style;f.position="absolute",f.width="100%",f.height="100%",f.left="0",f.top="0",null===(n=s.parentNode)||void 0===n||n.insertBefore(d,s),null===(r=s.parentNode)||void 0===r||r.removeChild(s),d.appendChild(s)}}(".wp-has-aspect-ratio iframe")}))})()})();