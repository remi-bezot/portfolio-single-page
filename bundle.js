(()=>{"use strict";var n={208:(n,e,r)=>{r.d(e,{A:()=>c});var t=r(601),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Arial', sans-serif;\n    background-color: #f4f4f4;\n}\n\nul {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: rgb(255, 255, 255); /* Couleur blanche pour le texte des liens */\n}\n\n#container {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    width: 100vw;\n    height: 100vh;\n}\n\n#header {\n    background-color: rgba(21, 86, 139, 0.9);\n    padding: 20px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\nh1 {\n    color: rgb(182, 118, 22);\n    text-align: center;\n    margin-bottom: 10px;\n}\n\nh2{\n    padding-bottom: 20px;\n    color: rgb(22, 22, 201);\n}\n\nh3 {\n    color: rgb(255, 100, 0);\n    background-color: rgba(255, 255, 0, 0.5);\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n#header-menu ul {\n    display: flex;\n    justify-content: center;\n}\n\n#header-menu li {\n    border: 1px solid rgba(255, 255, 255, 0.5); /* Couleur des bordures en blanc translucide */\n    border-radius: 30%;\n    background-color: rgb(171, 128, 212);\n    padding: 10px 20px;\n    margin: 0 10px;\n    transition: background-color 0.3s;\n}\n\n#header-menu li:hover {\n    background-color: rgba(220, 111, 33, 0.7);\n}\n\n#section {\n    grid-row: 2;\n    grid-column: 1 / -1;\n    text-align: center;\n    background-color: rgba(107, 143, 240, 0.6);\n    padding: 20px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n#footer {\n    text-align: center;\n    background-color: bisque;\n    padding: 10px;\n    grid-row: 3;\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=r(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),u=0;u<a.length;u++){var d=r(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var t=r(72),o=r.n(t),a=r(825),i=r.n(a),c=r(659),s=r.n(c),u=r(56),d=r.n(u),l=r(540),p=r.n(l),f=r(113),g=r.n(f),b=r(208),v={};v.styleTagTransform=g(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(b.A,v),b.A&&b.A.locals&&b.A.locals})();