(()=>{"use strict";var e={622:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(81),n=i.n(r),o=i(645),s=i.n(o)()(n());s.push([e.id,"body {\n  overflow: hidden;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n#container {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  background-color: #000;\n  overflow: hidden;\n}\n",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",r=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),r&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),r&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,r,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var f=this[a][0];null!=f&&(s[f]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},669:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var r=i(379),n=i.n(r),o=i(795),s=i.n(o),a=i(569),f=i.n(a),l=i(565),c=i.n(l),u=i(216),h=i.n(u),d=i(589),p=i.n(d),w=i(622),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=f().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=h(),n()(w.Z,v);const m=w.Z&&w.Z.locals?w.Z.locals:void 0},379:e=>{var t=[];function i(e){for(var i=-1,r=0;r<t.length;r++)if(t[r].identifier===e){i=r;break}return i}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var f=e[a],l=r.base?f[0]+r.base:f[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var h=i(u),d={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(-1!==h)t[h].references++,t[h].updater(d);else{var p=n(d,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function n(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,n){var o=r(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=i(o[s]);t[a].references--}for(var f=r(e,n),l=0;l<o.length;l++){var c=i(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=f}}},569:e=>{var t={};e.exports=function(e,i){var r=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var r="";i.supports&&(r+="@supports (".concat(i.supports,") {")),i.media&&(r+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(r+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),r+=i.css,n&&(r+="}"),i.media&&(r+="}"),i.supports&&(r+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},17:function(e,t,i){var r,n,o,s,a=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},f=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=l(i(396));class u extends c.default{constructor(){super(""),r.set(this,0),n.set(this,0),o.set(this,!1),s.set(this,5)}setDelta(e,t){a(this,r,e,"f"),a(this,n,t,"f"),1===e?this.element.textContent="→":-1===e?this.element.textContent="←":1===t?this.element.textContent="↓":-1===t&&(this.element.textContent="↑")}remove(){a(this,o,!0,"f"),this.element.remove()}move(){this.setPosition(this.x+f(this,r,"f")*f(this,s,"f"),this.y+f(this,n,"f")*f(this,s,"f"))}reflectX(){this.setDelta(-f(this,r,"f"),f(this,n,"f"))}reflectY(){this.setDelta(f(this,r,"f"),-f(this,n,"f"))}get removed(){return f(this,o,"f")}get dy(){return f(this,n,"f")}get dx(){return f(this,r,"f")}}r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakMap,t.default=u},924:function(e,t){var i,r,n,o=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},s=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});class a{constructor(e=""){i.set(this,void 0),r.set(this,0),n.set(this,0);const t=document.createElement("div");o(this,i,t,"f"),s(this,i,"f").style.position="absolute",s(this,i,"f").style.width=`${a.size}px`,s(this,i,"f").style.height=`${a.size}px`,s(this,i,"f").style.display="flex",s(this,i,"f").style.alignItems="center",s(this,i,"f").style.justifyContent="center",s(this,i,"f").style.fontSize=.9*a.size+"px",s(this,i,"f").style.color="#fff",s(this,i,"f").textContent=e}setPosition(e,t){o(this,r,e,"f"),o(this,n,t,"f"),s(this,i,"f").style.left=e-a.size/2+"px",s(this,i,"f").style.top=t-a.size/2+"px"}get element(){return s(this,i,"f")}get x(){return s(this,r,"f")}get y(){return s(this,n,"f")}set text(e){s(this,i,"f").textContent=e}}i=new WeakMap,r=new WeakMap,n=new WeakMap,a.size=30,t.default=a},373:function(e,t,i){var r,n=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},o=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(i(924));class f{constructor(e){r.set(this,void 0),n(this,r,e,"f")}static initHeroAndBulletCollisionJudger(){return new f(this.heroAndBulletCollisionRatio)}static initReactorAndBulletCollisionJudger(){return new f(this.reactorAndBulletCollisionRatio)}check(e,t){return(t.x-e.x)**2+(t.y-e.y)**2<(a.default.size*o(this,r,"f"))**2}}r=new WeakMap,f.heroAndBulletCollisionRatio=.3,f.reactorAndBulletCollisionRatio=.9,t.default=f},92:function(e,t,i){var r,n,o,s=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},a=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=f(i(924)),c=f(i(677));class u{static init(e,t){document.onpointerdown=t=>{s(this,r,e.x,"f",n),s(this,r,t.pageX,"f",o)},document.onpointermove=i=>{if(-1===a(this,r,"f",o))return;const s=i.pageX-a(this,r,"f",o),f=Math.max(Math.min(a(this,r,"f",n)+s,c.default.height-l.default.size/2),l.default.size/2);e.setPosition(f,e.y),t.setPosition(f,e.y-l.default.size)},document.onpointerup=e=>{s(this,r,-1,"f",o)}}}r=u,n={value:0},o={value:-1},t.default=u},141:function(e,t,i){var r,n,o=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},s=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const f=a(i(924));class l extends f.default{constructor(e=""){super(e),r.set(this,0),n.set(this,0)}tick(){s(this,r,o(this,r,"f")-(Date.now()-o(this,n,"f")),"f"),s(this,n,Date.now(),"f"),this.text=Math.ceil(o(this,r,"f")/1e3).toString(),o(this,r,"f")<=0&&(s(this,r,0,"f"),this.text="")}set time(e){s(this,n,Date.now(),"f"),s(this,r,e,"f"),this.text=Math.ceil(o(this,r,"f")/1e3).toString()}get countDown(){return Math.ceil(o(this,r,"f")/1e3)}}r=new WeakMap,n=new WeakMap,t.default=l},396:function(e,t,i){var r,n,o=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},s=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const f=a(i(924));class l extends f.default{constructor(e=""){super(e),r.set(this,!1),n.set(this,10)}remove(){o(this,r,!0,"f"),this.element.remove()}tick(){var e;s(this,n,"f")>0&&o(this,n,(e=s(this,n,"f"),--e),"f")}get isInvincible(){return s(this,n,"f")>0}get removed(){return s(this,r,"f")}}r=new WeakMap,n=new WeakMap,t.default=l},677:function(e,t){var i,r,n,o,s,a,f=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},l=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});class c{static init(){f(this,i,[],"f",o),f(this,i,[],"f",s),f(this,i,document.getElementById("container"),"f",a)}static append(e){l(this,i,"f",a).append(e.element)}static get width(){return l(this,i,"f",r)}static get height(){return l(this,i,"f",n)}}i=c,r={value:300},n={value:300},o={value:[]},s={value:[]},a={value:void 0},t.default=c},885:function(e,t,i){var r,n,o,s,a,f,l,c,u=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))((function(n,o){function s(e){try{f(r.next(e))}catch(e){o(e)}}function a(e){try{f(r.throw(e))}catch(e){o(e)}}function f(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}f((r=r.apply(e,t||[])).next())}))},h=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},d=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},p=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const w=p(i(17)),v=p(i(924)),m=p(i(373)),y=p(i(92)),_=p(i(141)),b=p(i(677)),P=p(i(522)),g=p(i(799)),M=p(i(186));r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakMap,a=new WeakMap,f=new WeakMap,l=new WeakMap,c=new WeakMap,t.default=class{constructor(){r.set(this,void 0),n.set(this,void 0),o.set(this,[]),s.set(this,[]),a.set(this,!1),f.set(this,.005),l.set(this,void 0),c.set(this,void 0),M.default.init(),b.default.init(),h(this,r,new P.default("🐶"),"f"),d(this,r,"f").setPosition(b.default.width/2,b.default.height-v.default.size),b.default.append(d(this,r,"f")),h(this,n,new _.default,"f"),d(this,n,"f").setPosition(d(this,r,"f").x,d(this,r,"f").y-v.default.size),b.default.append(d(this,n,"f")),y.default.init(d(this,r,"f"),d(this,n,"f")),h(this,l,m.default.initHeroAndBulletCollisionJudger(),"f"),h(this,c,m.default.initReactorAndBulletCollisionJudger(),"f")}createReactor(){const e=Math.random()*b.default.width*.99,t=Math.random()*b.default.height*.7,i=new g.default("🔥");i.setPosition(e+b.default.width*(1-.99)/2,t),b.default.append(i),d(this,s,"f").push(i)}createBullet(e,t,i,r){const n=new w.default;n.setPosition(e,t-v.default.size),n.setDelta(i,r),b.default.append(n),d(this,o,"f").push(n)}step(){d(this,n,"f").countDown?(d(this,n,"f").tick(),d(this,n,"f").countDown||this.createBullet(d(this,r,"f").x,d(this,r,"f").y-v.default.size,0,-1)):0===d(this,o,"f").length&&(d(this,n,"f").time=3e3);for(const e of d(this,o,"f"))if(e.move(),(e.x<v.default.size/2||e.x>b.default.width)&&e.reflectX(),e.y<v.default.size/2&&(e.setPosition(e.x,v.default.size/2),e.reflectY()),e.y>b.default.height&&e.remove(),!e.removed&&!e.isInvincible)for(const t of d(this,s,"f"))t.removed||t.isInvincible||(d(this,c,"f").check(e,t)&&(e.remove(),t.remove(),M.default.addScore(),0!==e.dy?(this.createBullet(e.x,e.y,1,0),this.createBullet(e.x,e.y,-1,0)):(this.createBullet(e.x,e.y,0,1),this.createBullet(e.x,e.y,0,-1))),d(this,l,"f").check(d(this,r,"f"),e)&&h(this,a,!0,"f"));Math.random()<d(this,f,"f")&&this.createReactor(),h(this,f,1.001*d(this,f,"f"),"f"),h(this,o,d(this,o,"f").filter((e=>!e.removed)),"f"),h(this,s,d(this,s,"f").filter((e=>!e.removed)),"f"),d(this,o,"f").forEach((e=>e.tick())),d(this,s,"f").forEach((e=>e.tick()))}start(){return u(this,void 0,void 0,(function*(){for(console.log("start");!d(this,a,"f");)yield new Promise((e=>setTimeout(e,10))),this.step()}))}}},522:function(e,t,i){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(i(924));class o extends n.default{constructor(e=""){super(e)}}t.default=o},294:function(e,t,i){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),i(669);const n=r(i(885));new class{constructor(){(new n.default).start()}}},799:function(e,t,i){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(i(396)),o=r(i(677));class s extends n.default{constructor(e=""){super(e)}static create(){const e=Math.random()*o.default.width,t=Math.random()*o.default.height*.7,i=new s("🔥");return i.setPosition(e,t),o.default.append(i),new s}}t.default=s},186:function(e,t){var i,r,n,o=this&&this.__classPrivateFieldSet||function(e,t,i,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},s=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});class a{static init(){o(this,i,0,"f",r),o(this,i,document.getElementById("score"),"f",n),s(this,i,"f",n).innerHTML=s(this,i,"f",r).toString()}static addScore(){var e;o(this,i,(e=s(this,i,"f",r),++e),"f",r),s(this,i,"f",n).innerHTML=s(this,i,"f",r).toString()}}i=a,r={value:0},n={value:void 0},t.default=a}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0,i(294)})();