const __vite__fileDeps=["index-zQNbSg7s.js","strapi-Cdgn8T7P.js","strapi-COJtagOC.css","index-CkV6IEfc.js","index-DIuoptCK.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as l,h3 as m,h4 as N,b0 as W}from"./strapi-Cdgn8T7P.js";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function U(){const t={resolve:null,promise:null};return t.promise=new Promise(e=>{t.resolve=e}),t}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function z(t,{timeOutAfter:e=500,retryAfter:r=100}={}){return new Promise((n,o)=>{const a=Date.now();let s=null;const i=setTimeout(()=>{o(s??new Error("Timeout"))},e),c=async()=>{try{const f=await t();clearTimeout(i),n(f)}catch(f){s=f,Date.now()-a>e?o(f):setTimeout(c,r)}};c()})}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const p=new Map;function R(t,{attributes:e}={}){if(p.has(t))return p.get(t);const r=document.querySelector(`script[src="${t}"]`);r&&(console.warn(`Script with "${t}" src is already present in DOM!`),r.remove());const n=new Promise((o,a)=>{const s=document.createElement("script");s.onerror=a,s.onload=()=>{o()};for(const[c,f]of Object.entries(e||{}))s.setAttribute(c,f);s.setAttribute("data-injected-by","ckeditor-integration"),s.type="text/javascript",s.async=!0,s.src=t,document.head.appendChild(s);const i=new MutationObserver(c=>{c.flatMap(h=>Array.from(h.removedNodes)).includes(s)&&(p.delete(t),i.disconnect())});i.observe(document.head,{childList:!0,subtree:!0})});return p.set(t,n),n}async function I(t,e){await Promise.all(t.map(r=>R(r,e)))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const g=new Map;function F({href:t,placementInHead:e="start",attributes:r={}}){if(g.has(t))return g.get(t);const n=document.querySelector(`link[href="${t}"][rel="stylesheet"]`);n&&(console.warn(`Stylesheet with "${t}" href is already present in DOM!`),n.remove());const o=s=>{const i=Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));switch(e){case"start":i.length?i.slice(-1)[0].after(s):document.head.insertBefore(s,document.head.firstChild);break;case"end":document.head.appendChild(s);break}},a=new Promise((s,i)=>{const c=document.createElement("link");for(const[h,v]of Object.entries(r||{}))c.setAttribute(h,v);c.setAttribute("data-injected-by","ckeditor-integration"),c.rel="stylesheet",c.href=t,c.onerror=i,c.onload=()=>{s()},o(c);const f=new MutationObserver(h=>{h.flatMap(B=>Array.from(B.removedNodes)).includes(c)&&(g.delete(t),f.disconnect())});f.observe(document.head,{childList:!0,subtree:!0})});return g.set(t,a),a}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function H(){return typeof window>"u"}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function q(t){let e=null;return(...r)=>(e||(e={current:t(...r)}),e.current)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function J(t,{attributes:e}={}){if(document.head.querySelector(`link[href="${t}"][rel="preload"]`))return;const r=document.createElement("link");for(const[n,o]of Object.entries(e||{}))r.setAttribute(n,o);r.setAttribute("data-injected-by","ckeditor-integration"),r.rel="preload",r.as=G(t),r.href=t,document.head.insertBefore(r,document.head.firstChild)}function G(t){switch(!0){case/\.css$/.test(t):return"style";case/\.js$/.test(t):return"script";default:return"fetch"}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Y(t,e){if(t===e)return!0;if(!t||!e)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const u=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2));function P(){const[t,e,r,n]=crypto.getRandomValues(new Uint32Array(4));return"e"+u[t>>0&255]+u[t>>8&255]+u[t>>16&255]+u[t>>24&255]+u[e>>0&255]+u[e>>8&255]+u[e>>16&255]+u[e>>24&255]+u[r>>0&255]+u[r>>8&255]+u[r>>16&255]+u[r>>24&255]+u[n>>0&255]+u[n>>8&255]+u[n>>16&255]+u[n>>24&255]}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function C(t){return Array.from(new Set(t))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */async function y(t,e){const r=()=>t.map(n=>window[n]).filter(Boolean)[0];return z(()=>{const n=r();if(!n)throw new Error(`Window entry "${t.join(",")}" not found.`);return n},e)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function X(t,e){const r=Object.entries(t).filter(([n,o])=>e(o,n));return Object.fromEntries(r)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Q(t){return X(t,e=>e!=null)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function K(t,e){const r=Object.entries(t).map(([n,o])=>[n,e(o,n)]);return Object.fromEntries(r)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function b(t,e){return e.filter(r=>!t.includes(r))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Z(t,e){const r=t.extraPlugins||[];return{...t,extraPlugins:[...r,...e.filter(n=>!r.includes(n))]}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function w(t){return!!t&&/^\d+\.\d+\.\d+/.test(t)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function E(t){return t?["nightly","alpha","internal","nightly-","staging"].some(e=>t.includes(e)):!1}function ee(t){return w(t)||E(t)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function D(t){if(!w(t))throw new Error(`Invalid semantic version: ${t||"<blank>"}.`);const[e,r,n]=t.split(".");return{major:Number.parseInt(e,10),minor:Number.parseInt(r,10),patch:Number.parseInt(n,10)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function x(t){if(E(t))return 3;const{major:e}=D(t);switch(!0){case e>=44:return 3;case e>=38:return 2;default:return 1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function j(){const{CKEDITOR_VERSION:t,CKEDITOR:e}=window;return ee(t)?{source:e?"cdn":"npm",version:t}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function te(){const t=j();return t?x(t.version):null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function O(t,e){switch(e||=te()||void 0,e){case 1:case 2:return t===void 0;case 3:return t==="GPL";default:return!1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function re(t,e){return function(n){O(n.config.get("licenseKey"))||n.on("collectUsageData",(o,{setUsageData:a})=>{a(`integration.${t}`,e)})}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ne="https://cdn.ckeditor.com";function T(t,e,r){return`${ne}/${t}/${r}/${e}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const oe="https://cdn.ckbox.io";function se(t,e,r){return`${oe}/${t}/${r}/${e}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ie="https://ckeditor.com/docs/ckeditor5";function ae(t,e="latest"){return`${ie}/${e}/${t}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ce({version:t,translations:e,createCustomCdnUrl:r=T}){const n={scripts:[r("ckeditor5","ckeditor5.umd.js",t),...b(["en"],e||[]).map(o=>r("ckeditor5",`translations/${o}.umd.js`,t))],stylesheets:[r("ckeditor5","ckeditor5.css",t)]};return{preload:[...n.stylesheets,...n.scripts],scripts:[async o=>I(n.scripts,o)],stylesheets:n.stylesheets,checkPluginLoaded:async()=>y(["CKEDITOR"]),beforeInject:()=>{const o=j();switch(o?.source){case"npm":throw new Error("CKEditor 5 is already loaded from npm. Check the migration guide for more details: "+ae("updating/migration-to-cdn/vanilla-js.html"));case"cdn":if(o.version!==t)throw new Error(`CKEditor 5 is already loaded from CDN in version ${o.version}. Remove the old <script> and <link> tags loading CKEditor 5 to allow loading the ${t} version.`);break}}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ue({version:t,translations:e,createCustomCdnUrl:r=T}){const n={scripts:[r("ckeditor5-premium-features","ckeditor5-premium-features.umd.js",t),...b(["en"],e||[]).map(o=>r("ckeditor5-premium-features",`translations/${o}.umd.js`,t))],stylesheets:[r("ckeditor5-premium-features","ckeditor5-premium-features.css",t)]};return{preload:[...n.stylesheets,...n.scripts],scripts:[async o=>I(n.scripts,o)],stylesheets:n.stylesheets,checkPluginLoaded:async()=>y(["CKEDITOR_PREMIUM_FEATURES"])}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */async function le(t){let{htmlAttributes:e={},scripts:r=[],stylesheets:n=[],preload:o,beforeInject:a,checkPluginLoaded:s}=k(t);a?.(),o||(o=C([...n.filter(i=>typeof i=="string"),...r.filter(i=>typeof i=="string")]));for(const i of o)J(i,{attributes:e});await Promise.all(C(n).map(i=>F({href:i,attributes:e,placementInHead:"start"})));for(const i of C(r)){const c={attributes:e};typeof i=="string"?await R(i,c):await i(c)}return s?.()}function k(t){return Array.isArray(t)?{scripts:t.filter(e=>typeof e=="function"||e.endsWith(".js")),stylesheets:t.filter(e=>e.endsWith(".css"))}:typeof t=="function"?{checkPluginLoaded:t}:t}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function L(t){const e=K(Q(t),k);return{...Object.values(e).reduce((a,s)=>(a.scripts.push(...s.scripts??[]),a.stylesheets.push(...s.stylesheets??[]),a.preload.push(...s.preload??[]),a),{preload:[],scripts:[],stylesheets:[]}),beforeInject:()=>{for(const a of Object.values(e))a.beforeInject?.()},checkPluginLoaded:async()=>{const a=Object.create(null);for(const[s,i]of Object.entries(e))a[s]=await i?.checkPluginLoaded?.();return a}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function de(){const t=window.CKBox?.version;return w(t)?{source:"cdn",version:t}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function fe({version:t,theme:e="lark",translations:r,createCustomCdnUrl:n=se}){return{scripts:[n("ckbox","ckbox.js",t),...b(["en"],r||[]).map(o=>n("ckbox",`translations/${o}.js`,t))],...e&&{stylesheets:[n("ckbox",`styles/themes/${e}.css`,t)]},checkPluginLoaded:async()=>y(["CKBox"]),beforeInject:()=>{const o=de();if(o&&o.version!==t)throw new Error(`CKBox is already loaded from CDN in version ${o.version}. Remove the old <script> and <link> tags loading CKBox to allow loading the ${t} version.`)}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function he(t){if(E(t))return!0;const{major:e}=D(t);switch(x(t)){case 3:return!0;default:return e===43}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function me(t){const e=K(t,(r,n)=>{if(!r)return;const o=k(r);return{checkPluginLoaded:async()=>y([n]),...o}});return L(e)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function pe(t){const{version:e,translations:r,plugins:n,premium:o,ckbox:a,createCustomCdnUrl:s,injectedHtmlElementsAttributes:i={crossorigin:"anonymous"}}=t;ge(e);const c=L({CKEditor:ce({version:e,translations:r,createCustomCdnUrl:s}),...o&&{CKEditorPremiumFeatures:ue({version:e,translations:r,createCustomCdnUrl:s})},...a&&{CKBox:fe(a)},loadedPlugins:me(n??{})});return le({...c,htmlAttributes:i})}function ge(t){if(E(t)&&console.warn("You are using a testing version of CKEditor 5. Please remember that it is not suitable for production environments."),!he(t))throw new Error(`The CKEditor 5 CDN can't be used with the given editor version: ${t}. Please make sure you are using at least the CKEditor 5 version 44.`)}var ye=Object.defineProperty,Ee=(t,e,r)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e,r)=>Ee(t,typeof e!="symbol"?e+"":e,r);/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const A=class ${constructor(e,r){d(this,"_lifecycle"),d(this,"_element"),d(this,"_releaseLock",null),d(this,"_value",null),d(this,"_afterMountCallbacks",[]),d(this,"_state",{destroyedBeforeInitialization:!1,mountingInProgress:null}),d(this,"release",q(()=>{const{_releaseLock:n,_state:o,_element:a,_lifecycle:s}=this;o.mountingInProgress?o.mountingInProgress.then(()=>s.unmount({element:a,mountResult:this.value})).catch(i=>{console.error("Semaphore unmounting error:",i)}).then(n.resolve).then(()=>{this._value=null}):(o.destroyedBeforeInitialization=!0,n.resolve())})),this._element=e,this._lifecycle=r,this._lock()}get value(){return this._value}unsafeSetValue(e){this._value=e,this._afterMountCallbacks.forEach(r=>r(e)),this._afterMountCallbacks=[]}runAfterMount(e){const{_value:r,_afterMountCallbacks:n}=this;r?e(r):n.push(e)}_lock(){const{_semaphores:e}=$,{_state:r,_element:n,_lifecycle:o}=this,a=e.get(n)||Promise.resolve(null),s=U();this._releaseLock=s;const i=a.then(()=>r.destroyedBeforeInitialization?Promise.resolve(void 0):(r.mountingInProgress=o.mount().then(c=>(c&&this.unsafeSetValue(c),c)),r.mountingInProgress)).then(async c=>{c&&o.afterMount&&await o.afterMount({element:n,mountResult:c})}).then(()=>s.promise).catch(c=>{console.error("Semaphore mounting error:",c)}).then(()=>{e.get(n)===i&&e.delete(n)});e.set(n,i)}};d(A,"_semaphores",new Map);let Ce=A;/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const _e="$__CKEditorReactContextMetadata";function be(t,e){return{...e,[_e]:t}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const we=t=>{const e=l.useRef();return e.current=t,l.useCallback((...r)=>e.current(...r),[])};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ke=m.createContext(null),ve=t=>!!t&&typeof t=="object"&&"status"in t&&["initializing","initialized","error"].includes(t.status),M=t=>e=>ve(e)&&e.status===t,S=M("initializing"),Se=t=>M("initialized")(t)&&t.watchdog.state==="ready";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Re=re("react",{version:"9.5.0",frameworkVersion:m.version});/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Ie(t){return O(t.licenseKey)?t:Z(t,[Re])}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const _="Lock from React integration (@ckeditor/ckeditor5-react)";class Pe extends m.Component{constructor(e){super(e),d(this,"domContainer",m.createRef()),d(this,"editorSemaphore",null),this._checkVersion()}_checkVersion(){const{CKEDITOR_VERSION:e}=window;if(!e)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[r]=e.split(".").map(Number);r>=42||e.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}get _semaphoreValue(){const{editorSemaphore:e}=this;return e?e.value:null}get watchdog(){const{_semaphoreValue:e}=this;return e?e.watchdog:null}get editor(){const{_semaphoreValue:e}=this;return e?e.instance:null}shouldComponentUpdate(e){const{props:r,editorSemaphore:n}=this;return e.id!==r.id||e.disableWatchdog!==r.disableWatchdog?!0:(n&&(n.runAfterMount(({instance:o})=>{this._shouldUpdateEditorData(r,e,o)&&o.data.set(e.data)}),"disabled"in e&&n.runAfterMount(({instance:o})=>{e.disabled?o.enableReadOnlyMode(_):o.disableReadOnlyMode(_)})),!1)}componentDidMount(){S(this.context)||this._initLifeCycleSemaphore()}componentDidUpdate(){S(this.context)||this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new Ce(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:e})=>{const{onReady:r}=this.props;r&&this.domContainer.current!==null&&r(e.instance)},unmount:async({element:e,mountResult:r})=>{const{onAfterDestroy:n}=this.props;try{await this._destroyEditor(r),e.innerHTML=""}finally{n&&n(r.instance)}}})}render(){return m.createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const e=Se(this.context)?new Ke(this.context.watchdog):new this.props.editor.EditorWatchdog(this.props.editor,this.props.watchdogConfig),r={current:0};return e.setCreator(async(n,o)=>{var a;const{editorSemaphore:s}=this,{onAfterDestroy:i}=this.props;r.current>0&&i&&((a=s?.value)!=null&&a.instance)&&i(s.value.instance);const c=await this._createEditor(n,o);return s&&r.current>0&&(s.unsafeSetValue({instance:c,watchdog:e}),setTimeout(()=>{this.props.onReady&&this.props.onReady(e.editor)})),r.current++,c}),e.on("error",(n,{error:o,causesRestart:a})=>{(this.props.onError||console.error)(o,{phase:"runtime",willEditorRestart:a})}),await e.create(this.domContainer.current,this._getConfig()).catch(n=>{(this.props.onError||console.error)(n,{phase:"initialization",willEditorRestart:!1})}),{watchdog:e,instance:e.editor}}_createEditor(e,r){const{contextItemMetadata:n}=this.props;return n&&(r=be(n,r)),this.props.editor.create(e,Ie(r)).then(o=>{if("disabled"in this.props){/* istanbul ignore else -- @preserve */this.props.disabled&&o.enableReadOnlyMode(_)}const a=o.model.document,s=o.editing.view.document;return a.on("change:data",i=>{/* istanbul ignore else -- @preserve */this.props.onChange&&this.props.onChange(i,o)}),s.on("focus",i=>{/* istanbul ignore else -- @preserve */this.props.onFocus&&this.props.onFocus(i,o)}),s.on("blur",i=>{/* istanbul ignore else -- @preserve */this.props.onBlur&&this.props.onBlur(i,o)}),o})}async _destroyEditor(e){const{watchdog:r,instance:n}=e;return new Promise((o,a)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(r)return await r.destroy(),o();if(n)return await n.destroy(),o();o()}catch(s){console.error(s),a(s)}})})}_shouldUpdateEditorData(e,r,n){return!(e.data===r.data||n.data.get()===r.data)}_getConfig(){const e=this.props.config||{};return this.props.data&&e.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...e,initialData:e.initialData||this.props.data||""}}}d(Pe,"contextType",ke);class Ke{constructor(e){d(this,"_contextWatchdog"),d(this,"_id"),d(this,"_creator"),this._contextWatchdog=e,this._id=P()}setCreator(e){this._creator=e}create(e,r){return this._contextWatchdog.add({sourceElementOrData:e,config:r,creator:this._creator,id:this._id,type:"editor"})}on(e,r){this._contextWatchdog.on("itemError",(n,{itemId:o,error:a})=>{o===this._id&&r(null,{error:a,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function V(...t){return e=>{t.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const De=(t,e)=>{const[r,n]=l.useState(null);Y(r,e)||(t(),n([...e]))},xe=l.memo(l.forwardRef(({id:t,semaphore:e,rootName:r},n)=>{const o=l.useRef(null);return l.useEffect(()=>{let a,s;return e.runAfterMount(({instance:i})=>{if(!o.current)return;s=i;const{ui:c,model:f}=s,h=f.document.getRoot(r);h&&s.ui.getEditableElement(r)&&s.detachEditable(h),a=c.view.createEditable(r,o.current),c.addEditable(a),i.editing.view.forceRender()}),()=>{if(s&&s.state!=="destroyed"&&o.current){const i=s.model.document.getRoot(r);/* istanbul ignore else -- @preserve */i&&s.detachEditable(i)}}},[e.revision]),m.createElement("div",{key:e.revision,id:t,ref:V(n,o)})}));xe.displayName="EditorEditable";const je=l.forwardRef(({editor:t},e)=>{const r=l.useRef(null);return l.useEffect(()=>{const n=r.current;if(!t||!n)return;const o=t.ui.view.toolbar.element;return n.appendChild(o),()=>{n.contains(o)&&n.removeChild(o)}},[t&&t.id]),m.createElement("div",{ref:V(r,e)})});je.displayName="EditorToolbarWrapper";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Oe=()=>{const t=l.useRef(!1);return l.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]),t};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Te=t=>{const[e,r]=l.useState({status:"idle"}),n=Oe(),o=l.useRef(null);return[we(async(...s)=>{if(n.current||H())return null;const i=P();o.current=i;try{e.status!=="loading"&&r({status:"loading"});const c=await t(...s);return!n.current&&o.current===i&&r({status:"success",data:c}),c}catch(c){console.error(c),!n.current&&o.current===i&&r({status:"error",error:c})}return null}),e]};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Le=(t,e)=>{const[r,n]=Te(t);return De(r,e),n.status==="idle"?{status:"loading"}:n};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Ae(t){const e=JSON.stringify(t),r=Le(async()=>pe(t),[e]);return r.status==="success"?{...r.data,status:"success"}:r}const $e=({attribute:t,name:e,disabled:r=!1,labelAction:n=null,required:o=!1,description:a=null,error:s=null,intlLabel:i})=>{l.useEffect(()=>()=>{document.querySelectorAll('[data-injected-by="ckeditor-integration"]').forEach(h=>h.remove()),window.CKEDITOR_VERSION=null},[]);const c=Ae({version:"44.0.0",plugins:{CKEditorInput:async()=>(await W(()=>import("./index-zQNbSg7s.js"),__vite__mapDeps([0,1,2,3,4]))).CKEditorInput}});return c.status!=="success"?null:N.jsxDEV(c.loadedPlugins.CKEditorInput,{attribute:t,name:e,disabled:r,labelAction:n,required:o,description:a,error:s,intlLabel:i},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorProvider/index.jsx",lineNumber:37,columnNumber:5},void 0)},Me=l.memo($e),Be=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));export{Pe as C,re as c,Be as i};
