(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Ms=[],Gn=()=>{},yf=()=>!1,Ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ea=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wd=Object.prototype.hasOwnProperty,ot=(n,e)=>wd.call(n,e),Ge=Array.isArray,Es=n=>_r(n)==="[object Map]",bf=n=>_r(n)==="[object Set]",Nc=n=>_r(n)==="[object Date]",je=n=>typeof n=="function",vt=n=>typeof n=="string",Wn=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",Tf=n=>(lt(n)||je(n))&&je(n.then)&&je(n.catch),Af=Object.prototype.toString,_r=n=>Af.call(n),Rd=n=>_r(n).slice(8,-1),wf=n=>_r(n)==="[object Object]",kl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Cd=/-\w/g,vn=ya(n=>n.replace(Cd,e=>e.slice(1).toUpperCase())),Pd=/\B([A-Z])/g,ts=ya(n=>n.replace(Pd,"-$1").toLowerCase()),Rf=ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),za=ya(n=>n?`on${Rf(n)}`:""),Fn=(n,e)=>!Object.is(n,e),Ha=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Dd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ld=n=>{const e=vt(n)?Number(n):NaN;return isNaN(e)?n:e};let Fc;const ba=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wl(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=vt(i)?Fd(i):Wl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(vt(n)||lt(n))return n}const Id=/;(?![^(]*\))/g,Ud=/:([^]+)/,Nd=/\/\*[^]*?\*\//g;function Fd(n){const e={};return n.replace(Nd,"").split(Id).forEach(t=>{if(t){const i=t.split(Ud);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ji(n){let e="";if(vt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=Ji(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bd=Gl(Od);function Pf(n){return!!n||n===""}function zd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Xl(n[i],e[i]);return t}function Xl(n,e){if(n===e)return!0;let t=Nc(n),i=Nc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Wn(n),i=Wn(e),t||i)return n===e;if(t=Ge(n),i=Ge(e),t||i)return t&&i?zd(n,e):!1;if(t=lt(n),i=lt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Xl(n[a],e[a]))return!1}}return String(n)===String(e)}const Df=n=>!!(n&&n.__v_isRef===!0),xt=n=>vt(n)?n:n==null?"":Ge(n)||lt(n)&&(n.toString===Af||!je(n.toString))?Df(n)?xt(n.value):JSON.stringify(n,Lf,2):String(n),Lf=(n,e)=>Df(e)?Lf(n,e.value):Es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ga(i,r)+" =>"]=s,t),{})}:bf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ga(t))}:Wn(e)?Ga(e):lt(e)&&!Ge(e)&&!wf(e)?String(e):e,Ga=(n,e="")=>{var t;return Wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Hd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&It&&(It.active?(this.parent=It,this.index=(It.scopes||(It.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){if(this._on>0&&--this._on===0){if(It===this)It=this.prevScope;else{let e=It;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gd(){return It}let _t;const Va=new WeakSet;class If{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&(It.active?It.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oc(this),Ff(this);const e=_t,t=Sn;_t=this,Sn=!0;try{return this.fn()}finally{Of(this),_t=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jl(e);this.deps=this.depsTail=void 0,Oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uo(this)&&this.run()}get dirty(){return Uo(this)}}let Uf=0,Qs,er;function Nf(n,e=!1){if(n.flags|=8,e){n.next=er,er=n;return}n.next=Qs,Qs=n}function ql(){Uf++}function Yl(){if(--Uf>0)return;if(er){let e=er;for(er=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qs;){let e=Qs;for(Qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ff(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Of(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),jl(i),Vd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Uo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ar)||(n.globalVersion=ar,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Uo(n))))return;n.flags|=2;const e=n.dep,t=_t,i=Sn;_t=n,Sn=!0;try{Ff(n);const s=n.fn(n._value);(e.version===0||Fn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{_t=t,Sn=i,Of(n),n.flags&=-3}}function jl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)jl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Vd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const zf=[];function li(){zf.push(Sn),Sn=!1}function ci(){const n=zf.pop();Sn=n===void 0?!0:n}function Oc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let ar=0;class kd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!Sn||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new kd(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,Hf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=i)}return t}trigger(e){this.version++,ar++,this.notify(e)}notify(e){ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yl()}}}function Hf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const No=new WeakMap,$i=Symbol(""),Fo=Symbol(""),or=Symbol("");function Bt(n,e,t){if(Sn&&_t){let i=No.get(n);i||No.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Kl),s.map=i,s.key=t),s.track()}}function ni(n,e,t,i,s,r){const a=No.get(n);if(!a){ar++;return}const o=l=>{l&&l.trigger()};if(ql(),e==="clear")a.forEach(o);else{const l=Ge(n),c=l&&kl(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===or||!Wn(f)&&f>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(or)),e){case"add":l?c&&o(a.get("length")):(o(a.get($i)),Es(n)&&o(a.get(Fo)));break;case"delete":l||(o(a.get($i)),Es(n)&&o(a.get(Fo)));break;case"set":Es(n)&&o(a.get($i));break}}Yl()}function ss(n){const e=rt(n);return e===n?e:(Bt(e,"iterate",or),hn(n)?e:e.map(Mn))}function Ta(n){return Bt(n=rt(n),"iterate",or),n}function In(n,e){return ui(n)?Cs(Zi(n)?Mn(e):e):Mn(e)}const Wd={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,n=>In(this,n))},concat(...n){return ss(this).concat(...n.map(e=>Ge(e)?ss(e):e))},entries(){return ka(this,"entries",n=>(n[1]=In(this,n[1]),n))},every(n,e){return Yn(this,"every",n,e,void 0,arguments)},filter(n,e){return Yn(this,"filter",n,e,t=>t.map(i=>In(this,i)),arguments)},find(n,e){return Yn(this,"find",n,e,t=>In(this,t),arguments)},findIndex(n,e){return Yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yn(this,"findLast",n,e,t=>In(this,t),arguments)},findLastIndex(n,e){return Yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return ss(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,e){return Yn(this,"map",n,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...n){return Os(this,"push",n)},reduce(n,...e){return Bc(this,"reduce",n,e)},reduceRight(n,...e){return Bc(this,"reduceRight",n,e)},shift(){return Os(this,"shift")},some(n,e){return Yn(this,"some",n,e,void 0,arguments)},splice(...n){return Os(this,"splice",n)},toReversed(){return ss(this).toReversed()},toSorted(n){return ss(this).toSorted(n)},toSpliced(...n){return ss(this).toSpliced(...n)},unshift(...n){return Os(this,"unshift",n)},values(){return ka(this,"values",n=>In(this,n))}};function ka(n,e,t){const i=Ta(n),s=i[e]();return i!==n&&!hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Xd=Array.prototype;function Yn(n,e,t,i,s,r){const a=Ta(n),o=a!==n&&!hn(n),l=a[e];if(l!==Xd[e]){const h=l.apply(n,r);return o?Mn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,In(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Bc(n,e,t,i){const s=Ta(n),r=s!==n&&!hn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=In(n,c)),t.call(this,c,In(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?In(n,l):l}function Wa(n,e,t){const i=rt(n);Bt(i,"iterate",or);const s=i[e](...t);return(s===-1||s===!1)&&Ql(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function Os(n,e,t=[]){li(),ql();const i=rt(n)[e].apply(n,t);return Yl(),ci(),i}const qd=Gl("__proto__,__v_isRef,__isVue"),Gf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Yd(n){Wn(n)||(n=String(n));const e=rt(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?ip:qf:r?Xf:Wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ge(e);if(!s){let l;if(a&&(l=Wd[t]))return l;if(t==="hasOwnProperty")return Yd}const o=Reflect.get(e,t,Ht(e)?e:i);if((Wn(t)?Gf.has(t):qd(t))||(s||Bt(e,"get",t),r))return o;if(Ht(o)){const l=a&&kl(t)?o:o.value;return s&&lt(l)?Bo(l):l}return lt(o)?s?Bo(o):Zl(o):o}}class kf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Ge(e)&&kl(t);if(!this._isShallow){const c=ui(r);if(!hn(i)&&!ui(i)&&(r=rt(r),i=rt(i)),!a&&Ht(r)&&!Ht(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ot(e,t),l=Reflect.set(e,t,i,Ht(e)?e:s);return e===rt(s)&&(o?Fn(i,r)&&ni(e,"set",t,i):ni(e,"add",t,i)),l}deleteProperty(e,t){const i=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ni(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Wn(t)||!Gf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",Ge(e)?"length":$i),Reflect.ownKeys(e)}}class jd extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Kd=new kf,$d=new jd,Zd=new kf(!0);const Oo=n=>n,br=n=>Reflect.getPrototypeOf(n);function Jd(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),a=Es(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Oo:e?Cs:Mn;return!e&&Bt(r,"iterate",l?Fo:$i),Ct(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Tr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Qd(n,e){const t={get(s){const r=this.__v_raw,a=rt(r),o=rt(s);n||(Fn(s,o)&&Bt(a,"get",s),Bt(a,"get",o));const{has:l}=br(a),c=e?Oo:n?Cs:Mn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Bt(rt(s),"iterate",$i),s.size},has(s){const r=this.__v_raw,a=rt(r),o=rt(s);return n||(Fn(s,o)&&Bt(a,"has",s),Bt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=rt(o),c=e?Oo:n?Cs:Mn;return!n&&Bt(l,"iterate",$i),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Ct(t,n?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){const r=rt(this),a=br(r),o=rt(s),l=!e&&!hn(s)&&!ui(s)?o:s;return a.has.call(r,l)||Fn(s,l)&&a.has.call(r,s)||Fn(o,l)&&a.has.call(r,o)||(r.add(l),ni(r,"add",l,l)),this},set(s,r){!e&&!hn(r)&&!ui(r)&&(r=rt(r));const a=rt(this),{has:o,get:l}=br(a);let c=o.call(a,s);c||(s=rt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Fn(r,u)&&ni(a,"set",s,r):ni(a,"add",s,r),this},delete(s){const r=rt(this),{has:a,get:o}=br(r);let l=a.call(r,s);l||(s=rt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ni(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,a=s.clear();return r&&ni(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Jd(s,n,e)}),t}function $l(n,e){const t=Qd(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ot(t,s)&&s in i?t:i,s,r)}const ep={get:$l(!1,!1)},tp={get:$l(!1,!0)},np={get:$l(!0,!1)};const Wf=new WeakMap,Xf=new WeakMap,qf=new WeakMap,ip=new WeakMap;function sp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rp(n){return n.__v_skip||!Object.isExtensible(n)?0:sp(Rd(n))}function Zl(n){return ui(n)?n:Jl(n,!1,Kd,ep,Wf)}function ap(n){return Jl(n,!1,Zd,tp,Xf)}function Bo(n){return Jl(n,!0,$d,np,qf)}function Jl(n,e,t,i,s){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=rp(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function Zi(n){return ui(n)?Zi(n.__v_raw):!!(n&&n.__v_isReactive)}function ui(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function Ql(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function op(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&Cf(n,"__v_skip",!0),n}const Mn=n=>lt(n)?Zl(n):n,Cs=n=>lt(n)?Bo(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function bi(n){return lp(n,!1)}function lp(n,e){return Ht(n)?n:new cp(n,e)}class cp{constructor(e,t){this.dep=new Kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:Mn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||ui(e);e=i?e:rt(e),Fn(e,t)&&(this._rawValue=e,this._value=i?e:Mn(e),this.dep.trigger())}}function up(n){return Ht(n)?n.value:n}const fp={get:(n,e,t)=>e==="__v_raw"?n:up(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ht(s)&&!Ht(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Yf(n){return Zi(n)?n:new Proxy(n,fp)}class hp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dp(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new hp(i,s,t)}const Ar={},oa=new WeakMap;let Wi;function pp(n,e=!1,t=Wi){if(t){let i=oa.get(t);i||oa.set(t,i=[]),i.push(n)}}function mp(n,e,t=gt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=y=>s?y:hn(y)||s===!1||s===0?wi(y,1):wi(y);let u,h,f,d,x=!1,E=!1;if(Ht(n)?(h=()=>n.value,x=hn(n)):Zi(n)?(h=()=>c(n),x=!0):Ge(n)?(E=!0,x=n.some(y=>Zi(y)||hn(y)),h=()=>n.map(y=>{if(Ht(y))return y.value;if(Zi(y))return c(y);if(je(y))return l?l(y,2):y()})):je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){li();try{f()}finally{ci()}}const y=Wi;Wi=u;try{return l?l(n,3,[d]):n(d)}finally{Wi=y}}:h=Gn,e&&s){const y=h,I=s===!0?1/0:s;h=()=>wi(y(),I)}const m=Gd(),p=()=>{u.stop(),m&&m.active&&Vl(m.effects,u)};if(r&&e){const y=e;e=(...I)=>{y(...I),p()}}let M=E?new Array(n.length).fill(Ar):Ar;const w=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const I=u.run();if(s||x||(E?I.some((A,P)=>Fn(A,M[P])):Fn(I,M))){f&&f();const A=Wi;Wi=u;try{const P=[I,M===Ar?void 0:E&&M[0]===Ar?[]:M,d];M=I,l?l(e,3,P):e(...P)}finally{Wi=A}}}else u.run()};return o&&o(w),u=new If(h),u.scheduler=a?()=>a(w,!1):w,d=y=>pp(y,!1,u),f=u.onStop=()=>{const y=oa.get(u);if(y){if(l)l(y,4);else for(const I of y)I();oa.delete(u)}},e?i?w(!0):M=u.run():a?a(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ht(n))wi(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(bf(n)||Es(n))n.forEach(i=>{wi(i,e,t)});else if(wf(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gr(n,e,t,i){try{return i?n(...i):n()}catch(s){Aa(s,e,t)}}function En(n,e,t,i){if(je(n)){const s=gr(n,e,t,i);return s&&Tf(s)&&s.catch(r=>{Aa(r,e,t)}),s}if(Ge(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],e,t,i));return s}}function Aa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){li(),gr(r,null,10,[n,l,c]),ci();return}}_p(n,t,s,i,a)}function _p(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Wt=[];let Dn=-1;const ys=[];let Ti=null,vs=0;const jf=Promise.resolve();let la=null;function gp(n){const e=la||jf;return n?e.then(this?n.bind(this):n):e}function xp(n){let e=Dn+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,s=Wt[i],r=lr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ec(n){if(!(n.flags&1)){const e=lr(n),t=Wt[Wt.length-1];!t||!(n.flags&2)&&e>=lr(t)?Wt.push(n):Wt.splice(xp(e),0,n),n.flags|=1,Kf()}}function Kf(){la||(la=jf.then(Zf))}function vp(n){Ge(n)?ys.push(...n):Ti&&n.id===-1?Ti.splice(vs+1,0,n):n.flags&1||(ys.push(n),n.flags|=1),Kf()}function zc(n,e,t=Dn+1){for(;t<Wt.length;t++){const i=Wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $f(n){if(ys.length){const e=[...new Set(ys)].sort((t,i)=>lr(t)-lr(i));if(ys.length=0,Ti){Ti.push(...e);return}for(Ti=e,vs=0;vs<Ti.length;vs++){const t=Ti[vs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,vs=0}}const lr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zf(n){try{for(Dn=0;Dn<Wt.length;Dn++){const e=Wt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<Wt.length;Dn++){const e=Wt[Dn];e&&(e.flags&=-2)}Dn=-1,Wt.length=0,$f(),la=null,(Wt.length||ys.length)&&Zf()}}let Bn=null,Jf=null;function ca(n){const e=Bn;return Bn=n,Jf=n&&n.type.__scopeId||null,e}function bs(n,e=Bn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ha(-1);const r=ca(e);let a;try{a=n(...s)}finally{ca(r),i._d&&ha(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Fi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(li(),En(l,t,8,[n.el,o,n,e]),ci())}}function Sp(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function Jr(n,e,t=!1){const i=Ph();if(i||Ts){let s=Ts?Ts._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Mp=Symbol.for("v-scx"),Ep=()=>Jr(Mp);function Xa(n,e,t){return Qf(n,e,t)}function Qf(n,e,t=gt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Ct({},t),l=e&&i||!e&&r!=="post";let c;if(fr){if(r==="sync"){const d=Ep();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Gn,d.resume=Gn,d.pause=Gn,d}}const u=Yt;o.call=(d,x,E)=>En(d,u,x,E);let h=!1;r==="post"?o.scheduler=d=>{Zt(d,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(d,x)=>{x?d():ec(d)}),o.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=mp(n,e,o);return fr&&(c?c.push(f):l&&f()),f}function yp(n,e,t){const i=this.proxy,s=vt(n)?n.includes(".")?eh(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const a=xr(this),o=Qf(s,r.bind(i),t);return a(),o}function eh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const bp=Symbol("_vte"),th=n=>n.__isTeleport,Ln=Symbol("_leaveCb"),Bs=Symbol("_enterCb");function Tp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pa(()=>{n.isMounted=!0}),ch(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],nh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},ih=n=>{const e=n.subTree;return e.component?ih(e.component):e},Ap={name:"BaseTransition",props:nh,setup(n,{slots:e}){const t=Ph(),i=Tp();return()=>{const s=e.default&&ah(e.default(),!0),r=s&&s.length?sh(s):t.subTree?ii():void 0;if(!r)return;const a=rt(n),{mode:o}=a;if(i.isLeaving)return qa(r);const l=Hc(r);if(!l)return qa(r);let c=zo(l,a,i,t,h=>c=h);l.type!==Xt&&cr(l,c);let u=t.subTree&&Hc(t.subTree);if(u&&u.type!==Xt&&!Xi(u,l)&&ih(t).type!==Xt){let h=zo(u,a,i,t);if(cr(u,h),o==="out-in"&&l.type!==Xt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},qa(r);o==="in-out"&&l.type!==Xt?h.delayLeave=(f,d,x)=>{const E=rh(i,u);E[String(u.key)]=u,f[Ln]=()=>{d(),f[Ln]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function sh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Xt){e=t;break}}return e}const wp=Ap;function rh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function zo(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:x,onLeaveCancelled:E,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:w}=e,y=String(n.key),I=rh(t,n),A=(b,N)=>{b&&En(b,i,9,N)},P=(b,N)=>{const C=N[1];A(b,N),Ge(b)?b.every(L=>L.length<=1)&&C():b.length<=1&&C()},g={mode:a,persisted:o,beforeEnter(b){let N=l;if(!t.isMounted)if(r)N=m||l;else return;b[Ln]&&b[Ln](!0);const C=I[y];C&&Xi(n,C)&&C.el[Ln]&&C.el[Ln](),A(N,[b])},enter(b){if(I[y]===n)return;let N=c,C=u,L=h;if(!t.isMounted)if(r)N=p||c,C=M||u,L=w||h;else return;let X=!1;b[Bs]=O=>{X||(X=!0,O?A(L,[b]):A(C,[b]),g.delayedLeave&&g.delayedLeave(),b[Bs]=void 0)};const Z=b[Bs].bind(null,!1);N?P(N,[b,Z]):Z()},leave(b,N){const C=String(n.key);if(b[Bs]&&b[Bs](!0),t.isUnmounting)return N();A(f,[b]);let L=!1;b[Ln]=Z=>{L||(L=!0,N(),Z?A(E,[b]):A(x,[b]),b[Ln]=void 0,I[C]===n&&delete I[C])};const X=b[Ln].bind(null,!1);I[C]=n,d?P(d,[b,X]):X()},clone(b){const N=zo(b,e,t,i,s);return s&&s(N),N}};return g}function qa(n){if(Ra(n))return n=Pi(n),n.children=null,n}function Hc(n){if(!Ra(n))return th(n.type)&&n.children?sh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function cr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ah(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===nn?(a.patchFlag&128&&s++,i=i.concat(ah(a.children,e,o))):(e||a.type!==Xt)&&i.push(o!=null?Pi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function wa(n,e){return je(n)?Ct({name:n.name},e,{setup:n}):n}function oh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ua=new WeakMap;function tr(n,e,t,i,s=!1){if(Ge(n)){n.forEach((E,m)=>tr(E,e&&(Ge(e)?e[m]:e),t,i,s));return}if(nr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&tr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ac(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,h=o.setupState,f=rt(h),d=h===gt?yf:E=>Gc(u,E)?!1:ot(f,E),x=(E,m)=>!(m&&Gc(u,m));if(c!=null&&c!==l){if(Vc(e),vt(c))u[c]=null,d(c)&&(h[c]=null);else if(Ht(c)){const E=e;x(c,E.k)&&(c.value=null),E.k&&(u[E.k]=null)}}if(je(l))gr(l,o,12,[a,u]);else{const E=vt(l),m=Ht(l);if(E||m){const p=()=>{if(n.f){const M=E?d(l)?h[l]:u[l]:x()||!n.k?l.value:u[n.k];if(s)Ge(M)&&Vl(M,r);else if(Ge(M))M.includes(r)||M.push(r);else if(E)u[l]=[r],d(l)&&(h[l]=u[l]);else{const w=[r];x(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else E?(u[l]=a,d(l)&&(h[l]=a)):m&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),ua.delete(n)};M.id=-1,ua.set(n,M),Zt(M,t)}else Vc(n),p()}}}function Vc(n){const e=ua.get(n);e&&(e.flags|=8,ua.delete(n))}ba().requestIdleCallback;ba().cancelIdleCallback;const nr=n=>!!n.type.__asyncLoader,Ra=n=>n.type.__isKeepAlive;function Rp(n,e){lh(n,"a",e)}function Cp(n,e){lh(n,"da",e)}function lh(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ca(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ra(s.parent.vnode)&&Pp(i,e,t,s),s=s.parent}}function Pp(n,e,t,i){const s=Ca(e,n,i,!0);tc(()=>{Vl(i[e],s)},t)}function Ca(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{li();const o=xr(t),l=En(e,t,n,a);return o(),ci(),l});return i?s.unshift(r):s.push(r),r}}const di=n=>(e,t=Yt)=>{(!fr||n==="sp")&&Ca(n,(...i)=>e(...i),t)},Dp=di("bm"),Pa=di("m"),Lp=di("bu"),Ip=di("u"),ch=di("bum"),tc=di("um"),Up=di("sp"),Np=di("rtg"),Fp=di("rtc");function Op(n,e=Yt){Ca("ec",n,e)}const Bp=Symbol.for("v-ndc");function uh(n,e,t,i){let s;const r=t,a=Ge(n);if(a||vt(n)){const o=a&&Zi(n);let l=!1,c=!1;o&&(l=!hn(n),c=ui(n),n=Ta(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Cs(Mn(n[u])):Mn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(lt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Ho=n=>n?Dh(n)?ac(n):Ho(n.parent):null,ir=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ho(n.parent),$root:n=>Ho(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hh(n),$forceUpdate:n=>n.f||(n.f=()=>{ec(n.update)}),$nextTick:n=>n.n||(n.n=gp.bind(n.proxy)),$watch:n=>yp.bind(n)}),Ya=(n,e)=>n!==gt&&!n.__isScriptSetup&&ot(n,e),zp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ya(i,e))return a[e]=1,i[e];if(s!==gt&&ot(s,e))return a[e]=2,s[e];if(ot(r,e))return a[e]=3,r[e];if(t!==gt&&ot(t,e))return a[e]=4,t[e];Go&&(a[e]=0)}}const c=ir[e];let u,h;if(c)return e==="$attrs"&&Bt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==gt&&ot(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ot(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ya(s,e)?(s[e]=t,!0):i!==gt&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==gt&&o[0]!=="$"&&ot(n,o)||Ya(e,o)||ot(r,o)||ot(i,o)||ot(ir,o)||ot(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kc(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Go=!0;function Hp(n){const e=hh(n),t=n.proxy,i=n.ctx;Go=!1,e.beforeCreate&&Wc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:x,activated:E,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:w,unmounted:y,render:I,renderTracked:A,renderTriggered:P,errorCaptured:g,serverPrefetch:b,expose:N,inheritAttrs:C,components:L,directives:X,filters:Z}=e;if(c&&Gp(c,i,null),a)for(const z in a){const Q=a[z];je(Q)&&(i[z]=Q.bind(t))}if(s){const z=s.call(t,t);lt(z)&&(n.data=Zl(z))}if(Go=!0,r)for(const z in r){const Q=r[z],le=je(Q)?Q.bind(t,t):je(Q.get)?Q.get.bind(t,t):Gn,Me=!je(Q)&&je(Q.set)?Q.set.bind(t):Gn,we=ym({get:le,set:Me});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>we.value,set:Pe=>we.value=Pe})}if(o)for(const z in o)fh(o[z],i,t,z);if(l){const z=je(l)?l.call(t):l;Reflect.ownKeys(z).forEach(Q=>{Sp(Q,z[Q])})}u&&Wc(u,n,"c");function G(z,Q){Ge(Q)?Q.forEach(le=>z(le.bind(t))):Q&&z(Q.bind(t))}if(G(Dp,h),G(Pa,f),G(Lp,d),G(Ip,x),G(Rp,E),G(Cp,m),G(Op,g),G(Fp,A),G(Np,P),G(ch,M),G(tc,y),G(Up,b),Ge(N))if(N.length){const z=n.exposed||(n.exposed={});N.forEach(Q=>{Object.defineProperty(z,Q,{get:()=>t[Q],set:le=>t[Q]=le,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Gn&&(n.render=I),C!=null&&(n.inheritAttrs=C),L&&(n.components=L),X&&(n.directives=X),b&&oh(n)}function Gp(n,e,t=Gn){Ge(n)&&(n=Vo(n));for(const i in n){const s=n[i];let r;lt(s)?"default"in s?r=Jr(s.from||i,s.default,!0):r=Jr(s.from||i):r=Jr(s),Ht(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Wc(n,e,t){En(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fh(n,e,t,i){let s=i.includes(".")?eh(t,i):()=>t[i];if(vt(n)){const r=e[n];je(r)&&Xa(s,r)}else if(je(n))Xa(s,n.bind(t));else if(lt(n))if(Ge(n))n.forEach(r=>fh(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&Xa(s,r,n)}}function hh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>fa(l,c,a,!0)),fa(l,e,a)),lt(e)&&r.set(e,l),l}function fa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&fa(n,r,t,!0),s&&s.forEach(a=>fa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Vp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Vp={data:Xc,props:qc,emits:qc,methods:Ys,computed:Ys,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Ys,directives:Ys,watch:Wp,provide:Xc,inject:kp};function Xc(n,e){return e?n?function(){return Ct(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function kp(n,e){return Ys(Vo(n),Vo(e))}function Vo(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ys(n,e){return n?Ct(Object.create(null),n,e):e}function qc(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Ct(Object.create(null),kc(n),kc(e??{})):e}function Wp(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function dh(){return{app:null,config:{isNativeTag:yf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xp=0;function qp(n,e){return function(i,s=null){je(i)||(i=Ct({},i)),s!=null&&!lt(s)&&(s=null);const r=dh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Xp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Tm,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...h)):je(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Rt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,ac(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ts;Ts=c;try{return u()}finally{Ts=h}}};return c}}let Ts=null;const Yp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vn(e)}Modifiers`]||n[`${ts(e)}Modifiers`];function jp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),a=r&&Yp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>vt(u)?u.trim():u)),a.number&&(s=t.map(Dd)));let o,l=i[o=za(e)]||i[o=za(vn(e))];!l&&r&&(l=i[o=za(ts(e))]),l&&En(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(c,n,6,s)}}const Kp=new WeakMap;function ph(n,e,t=!1){const i=t?Kp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=ph(c,e,!0);u&&(o=!0,Ct(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(lt(n)&&i.set(n,null),null):(Ge(r)?r.forEach(l=>a[l]=null):Ct(a,r),lt(n)&&i.set(n,a),a)}function Da(n,e){return!n||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,ts(e))||ot(n,e))}function Yc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:x,inheritAttrs:E}=n,m=ca(n);let p,M;try{if(t.shapeFlag&4){const y=s||i,I=y;p=Un(c.call(I,y,u,h,d,f,x)),M=o}else{const y=e;p=Un(y.length>1?y(h,{attrs:o,slots:a,emit:l}):y(h,null)),M=e.props?o:$p(o)}}catch(y){sr.length=0,Aa(y,n,1),p=Rt(Xt)}let w=p;if(M&&E!==!1){const y=Object.keys(M),{shapeFlag:I}=w;y.length&&I&7&&(r&&y.some(Ea)&&(M=Zp(M,r)),w=Pi(w,M,!1,!0))}return t.dirs&&(w=Pi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&cr(w,t.transition),p=w,ca(m),p}const $p=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ma(t))&&((e||(e={}))[t]=n[t]);return e},Zp=(n,e)=>{const t={};for(const i in n)(!Ea(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Jp(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?jc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(mh(a,i,f)&&!Da(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?jc(i,a,c):!0:!!a;return!1}function jc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(mh(e,n,r)&&!Da(t,r))return!0}return!1}function mh(n,e,t){const i=n[t],s=e[t];return t==="style"&&lt(i)&&lt(s)?!Xl(i,s):i!==s}function Qp({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const _h={},gh=()=>Object.create(_h),xh=n=>Object.getPrototypeOf(n)===_h;function em(n,e,t,i=!1){const s={},r=gh();n.propsDefaults=Object.create(null),vh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:ap(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function tm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=rt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Da(n.emitsOptions,f))continue;const d=e[f];if(l)if(ot(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const x=vn(f);s[x]=ko(l,o,x,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{vh(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!ot(e,h)&&((u=ts(h))===h||!ot(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ko(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!ot(e,h))&&(delete r[h],c=!0)}c&&ni(n.attrs,"set","")}function vh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;s&&ot(s,u=vn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=rt(t),c=o||gt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ko(s,l,h,c[h],n,!ot(c,h))}}return a}function ko(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ot(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=xr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ts(t))&&(i=!0))}return i}const nm=new WeakMap;function Sh(n,e,t=!1){const i=t?nm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!je(n)){const u=h=>{l=!0;const[f,d]=Sh(h,e,!0);Ct(a,f),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return lt(n)&&i.set(n,Ms),Ms;if(Ge(r))for(let u=0;u<r.length;u++){const h=vn(r[u]);Kc(h)&&(a[h]=gt)}else if(r)for(const u in r){const h=vn(u);if(Kc(h)){const f=r[u],d=a[h]=Ge(f)||je(f)?{type:f}:Ct({},f),x=d.type;let E=!1,m=!0;if(Ge(x))for(let p=0;p<x.length;++p){const M=x[p],w=je(M)&&M.name;if(w==="Boolean"){E=!0;break}else w==="String"&&(m=!1)}else E=je(x)&&x.name==="Boolean";d[0]=E,d[1]=m,(E||ot(d,"default"))&&o.push(h)}}const c=[a,o];return lt(n)&&i.set(n,c),c}function Kc(n){return n[0]!=="$"&&!Js(n)}const nc=n=>n==="_"||n==="_ctx"||n==="$stable",ic=n=>Ge(n)?n.map(Un):[Un(n)],im=(n,e,t)=>{if(e._n)return e;const i=bs((...s)=>ic(e(...s)),t);return i._c=!1,i},Mh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(nc(s))continue;const r=n[s];if(je(r))e[s]=im(s,r,i);else if(r!=null){const a=ic(r);e[s]=()=>a}}},Eh=(n,e)=>{const t=ic(e);n.slots.default=()=>t},yh=(n,e,t)=>{for(const i in e)(t||!nc(i))&&(n[i]=e[i])},sm=(n,e,t)=>{const i=n.slots=gh();if(n.vnode.shapeFlag&32){const s=e._;s?(yh(i,e,t),t&&Cf(i,"_",s,!0)):Mh(e,i)}else e&&Eh(n,e)},rm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:yh(s,e,t):(r=!e.$stable,Mh(e,s)),a=e}else e&&(Eh(n,e),a={default:1});if(r)for(const o in s)!nc(o)&&a[o]==null&&delete s[o]},Zt=um;function am(n){return om(n)}function om(n,e){const t=ba();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Gn,insertStaticContent:x}=n,E=(R,D,k,ee=null,Y=null,ne=null,ce=void 0,de=null,T=!!D.dynamicChildren)=>{if(R===D)return;R&&!Xi(R,D)&&(ee=Ee(R),Pe(R,Y,ne,!0),R=null),D.patchFlag===-2&&(T=!1,D.dynamicChildren=null);const{type:ie,ref:me,shapeFlag:ue}=D;switch(ie){case La:m(R,D,k,ee);break;case Xt:p(R,D,k,ee);break;case Ka:R==null&&M(D,k,ee,ce);break;case nn:L(R,D,k,ee,Y,ne,ce,de,T);break;default:ue&1?I(R,D,k,ee,Y,ne,ce,de,T):ue&6?X(R,D,k,ee,Y,ne,ce,de,T):(ue&64||ue&128)&&ie.process(R,D,k,ee,Y,ne,ce,de,T,Be)}me!=null&&Y?tr(me,R&&R.ref,ne,D||R,!D):me==null&&R&&R.ref!=null&&tr(R.ref,null,ne,R,!0)},m=(R,D,k,ee)=>{if(R==null)i(D.el=o(D.children),k,ee);else{const Y=D.el=R.el;D.children!==R.children&&c(Y,D.children)}},p=(R,D,k,ee)=>{R==null?i(D.el=l(D.children||""),k,ee):D.el=R.el},M=(R,D,k,ee)=>{[R.el,R.anchor]=x(R.children,D,k,ee,R.el,R.anchor)},w=({el:R,anchor:D},k,ee)=>{let Y;for(;R&&R!==D;)Y=f(R),i(R,k,ee),R=Y;i(D,k,ee)},y=({el:R,anchor:D})=>{let k;for(;R&&R!==D;)k=f(R),s(R),R=k;s(D)},I=(R,D,k,ee,Y,ne,ce,de,T)=>{if(D.type==="svg"?ce="svg":D.type==="math"&&(ce="mathml"),R==null)A(D,k,ee,Y,ne,ce,de,T);else{const ie=R.el&&R.el._isVueCE?R.el:null;try{ie&&ie._beginPatch(),b(R,D,Y,ne,ce,de,T)}finally{ie&&ie._endPatch()}}},A=(R,D,k,ee,Y,ne,ce,de)=>{let T,ie;const{props:me,shapeFlag:ue,transition:J,dirs:Re}=R;if(T=R.el=a(R.type,ne,me&&me.is,me),ue&8?u(T,R.children):ue&16&&g(R.children,T,null,ee,Y,ja(R,ne),ce,de),Re&&Fi(R,null,ee,"created"),P(T,R,R.scopeId,ce,ee),me){for(const _ in me)_!=="value"&&!Js(_)&&r(T,_,null,me[_],ne,ee);"value"in me&&r(T,"value",null,me.value,ne),(ie=me.onVnodeBeforeMount)&&Rn(ie,ee,R)}Re&&Fi(R,null,ee,"beforeMount");const S=lm(Y,J);S&&J.beforeEnter(T),i(T,D,k),((ie=me&&me.onVnodeMounted)||S||Re)&&Zt(()=>{try{ie&&Rn(ie,ee,R),S&&J.enter(T),Re&&Fi(R,null,ee,"mounted")}finally{}},Y)},P=(R,D,k,ee,Y)=>{if(k&&d(R,k),ee)for(let ne=0;ne<ee.length;ne++)d(R,ee[ne]);if(Y){let ne=Y.subTree;if(D===ne||wh(ne.type)&&(ne.ssContent===D||ne.ssFallback===D)){const ce=Y.vnode;P(R,ce,ce.scopeId,ce.slotScopeIds,Y.parent)}}},g=(R,D,k,ee,Y,ne,ce,de,T=0)=>{for(let ie=T;ie<R.length;ie++){const me=R[ie]=de?ti(R[ie]):Un(R[ie]);E(null,me,D,k,ee,Y,ne,ce,de)}},b=(R,D,k,ee,Y,ne,ce)=>{const de=D.el=R.el;let{patchFlag:T,dynamicChildren:ie,dirs:me}=D;T|=R.patchFlag&16;const ue=R.props||gt,J=D.props||gt;let Re;if(k&&Oi(k,!1),(Re=J.onVnodeBeforeUpdate)&&Rn(Re,k,D,R),me&&Fi(D,R,k,"beforeUpdate"),k&&Oi(k,!0),(ue.innerHTML&&J.innerHTML==null||ue.textContent&&J.textContent==null)&&u(de,""),ie?N(R.dynamicChildren,ie,de,k,ee,ja(D,Y),ne):ce||Q(R,D,de,null,k,ee,ja(D,Y),ne,!1),T>0){if(T&16)C(de,ue,J,k,Y);else if(T&2&&ue.class!==J.class&&r(de,"class",null,J.class,Y),T&4&&r(de,"style",ue.style,J.style,Y),T&8){const S=D.dynamicProps;for(let _=0;_<S.length;_++){const F=S[_],j=ue[F],se=J[F];(se!==j||F==="value")&&r(de,F,j,se,Y,k)}}T&1&&R.children!==D.children&&u(de,D.children)}else!ce&&ie==null&&C(de,ue,J,k,Y);((Re=J.onVnodeUpdated)||me)&&Zt(()=>{Re&&Rn(Re,k,D,R),me&&Fi(D,R,k,"updated")},ee)},N=(R,D,k,ee,Y,ne,ce)=>{for(let de=0;de<D.length;de++){const T=R[de],ie=D[de],me=T.el&&(T.type===nn||!Xi(T,ie)||T.shapeFlag&198)?h(T.el):k;E(T,ie,me,null,ee,Y,ne,ce,!0)}},C=(R,D,k,ee,Y)=>{if(D!==k){if(D!==gt)for(const ne in D)!Js(ne)&&!(ne in k)&&r(R,ne,D[ne],null,Y,ee);for(const ne in k){if(Js(ne))continue;const ce=k[ne],de=D[ne];ce!==de&&ne!=="value"&&r(R,ne,de,ce,Y,ee)}"value"in k&&r(R,"value",D.value,k.value,Y)}},L=(R,D,k,ee,Y,ne,ce,de,T)=>{const ie=D.el=R?R.el:o(""),me=D.anchor=R?R.anchor:o("");let{patchFlag:ue,dynamicChildren:J,slotScopeIds:Re}=D;Re&&(de=de?de.concat(Re):Re),R==null?(i(ie,k,ee),i(me,k,ee),g(D.children||[],k,me,Y,ne,ce,de,T)):ue>0&&ue&64&&J&&R.dynamicChildren&&R.dynamicChildren.length===J.length?(N(R.dynamicChildren,J,k,Y,ne,ce,de),(D.key!=null||Y&&D===Y.subTree)&&bh(R,D,!0)):Q(R,D,k,me,Y,ne,ce,de,T)},X=(R,D,k,ee,Y,ne,ce,de,T)=>{D.slotScopeIds=de,R==null?D.shapeFlag&512?Y.ctx.activate(D,k,ee,ce,T):Z(D,k,ee,Y,ne,ce,T):O(R,D,T)},Z=(R,D,k,ee,Y,ne,ce)=>{const de=R.component=gm(R,ee,Y);if(Ra(R)&&(de.ctx.renderer=Be),xm(de,!1,ce),de.asyncDep){if(Y&&Y.registerDep(de,G,ce),!R.el){const T=de.subTree=Rt(Xt);p(null,T,D,k),R.placeholder=T.el}}else G(de,R,D,k,Y,ne,ce)},O=(R,D,k)=>{const ee=D.component=R.component;if(Jp(R,D,k))if(ee.asyncDep&&!ee.asyncResolved){z(ee,D,k);return}else ee.next=D,ee.update();else D.el=R.el,ee.vnode=D},G=(R,D,k,ee,Y,ne,ce)=>{const de=()=>{if(R.isMounted){let{next:ue,bu:J,u:Re,parent:S,vnode:_}=R;{const he=Th(R);if(he){ue&&(ue.el=_.el,z(R,ue,ce)),he.asyncDep.then(()=>{Zt(()=>{R.isUnmounted||ie()},Y)});return}}let F=ue,j;Oi(R,!1),ue?(ue.el=_.el,z(R,ue,ce)):ue=_,J&&Ha(J),(j=ue.props&&ue.props.onVnodeBeforeUpdate)&&Rn(j,S,ue,_),Oi(R,!0);const se=Yc(R),fe=R.subTree;R.subTree=se,E(fe,se,h(fe.el),Ee(fe),R,Y,ne),ue.el=se.el,F===null&&Qp(R,se.el),Re&&Zt(Re,Y),(j=ue.props&&ue.props.onVnodeUpdated)&&Zt(()=>Rn(j,S,ue,_),Y)}else{let ue;const{el:J,props:Re}=D,{bm:S,m:_,parent:F,root:j,type:se}=R,fe=nr(D);Oi(R,!1),S&&Ha(S),!fe&&(ue=Re&&Re.onVnodeBeforeMount)&&Rn(ue,F,D),Oi(R,!0);{j.ce&&j.ce._hasShadowRoot()&&j.ce._injectChildStyle(se,R.parent?R.parent.type:void 0);const he=R.subTree=Yc(R);E(null,he,k,ee,R,Y,ne),D.el=he.el}if(_&&Zt(_,Y),!fe&&(ue=Re&&Re.onVnodeMounted)){const he=D;Zt(()=>Rn(ue,F,he),Y)}(D.shapeFlag&256||F&&nr(F.vnode)&&F.vnode.shapeFlag&256)&&R.a&&Zt(R.a,Y),R.isMounted=!0,D=k=ee=null}};R.scope.on();const T=R.effect=new If(de);R.scope.off();const ie=R.update=T.run.bind(T),me=R.job=T.runIfDirty.bind(T);me.i=R,me.id=R.uid,T.scheduler=()=>ec(me),Oi(R,!0),ie()},z=(R,D,k)=>{D.component=R;const ee=R.vnode.props;R.vnode=D,R.next=null,tm(R,D.props,ee,k),rm(R,D.children,k),li(),zc(R),ci()},Q=(R,D,k,ee,Y,ne,ce,de,T=!1)=>{const ie=R&&R.children,me=R?R.shapeFlag:0,ue=D.children,{patchFlag:J,shapeFlag:Re}=D;if(J>0){if(J&128){Me(ie,ue,k,ee,Y,ne,ce,de,T);return}else if(J&256){le(ie,ue,k,ee,Y,ne,ce,de,T);return}}Re&8?(me&16&&ae(ie,Y,ne),ue!==ie&&u(k,ue)):me&16?Re&16?Me(ie,ue,k,ee,Y,ne,ce,de,T):ae(ie,Y,ne,!0):(me&8&&u(k,""),Re&16&&g(ue,k,ee,Y,ne,ce,de,T))},le=(R,D,k,ee,Y,ne,ce,de,T)=>{R=R||Ms,D=D||Ms;const ie=R.length,me=D.length,ue=Math.min(ie,me);let J;for(J=0;J<ue;J++){const Re=D[J]=T?ti(D[J]):Un(D[J]);E(R[J],Re,k,null,Y,ne,ce,de,T)}ie>me?ae(R,Y,ne,!0,!1,ue):g(D,k,ee,Y,ne,ce,de,T,ue)},Me=(R,D,k,ee,Y,ne,ce,de,T)=>{let ie=0;const me=D.length;let ue=R.length-1,J=me-1;for(;ie<=ue&&ie<=J;){const Re=R[ie],S=D[ie]=T?ti(D[ie]):Un(D[ie]);if(Xi(Re,S))E(Re,S,k,null,Y,ne,ce,de,T);else break;ie++}for(;ie<=ue&&ie<=J;){const Re=R[ue],S=D[J]=T?ti(D[J]):Un(D[J]);if(Xi(Re,S))E(Re,S,k,null,Y,ne,ce,de,T);else break;ue--,J--}if(ie>ue){if(ie<=J){const Re=J+1,S=Re<me?D[Re].el:ee;for(;ie<=J;)E(null,D[ie]=T?ti(D[ie]):Un(D[ie]),k,S,Y,ne,ce,de,T),ie++}}else if(ie>J)for(;ie<=ue;)Pe(R[ie],Y,ne,!0),ie++;else{const Re=ie,S=ie,_=new Map;for(ie=S;ie<=J;ie++){const ge=D[ie]=T?ti(D[ie]):Un(D[ie]);ge.key!=null&&_.set(ge.key,ie)}let F,j=0;const se=J-S+1;let fe=!1,he=0;const $=new Array(se);for(ie=0;ie<se;ie++)$[ie]=0;for(ie=Re;ie<=ue;ie++){const ge=R[ie];if(j>=se){Pe(ge,Y,ne,!0);continue}let ye;if(ge.key!=null)ye=_.get(ge.key);else for(F=S;F<=J;F++)if($[F-S]===0&&Xi(ge,D[F])){ye=F;break}ye===void 0?Pe(ge,Y,ne,!0):($[ye-S]=ie+1,ye>=he?he=ye:fe=!0,E(ge,D[ye],k,null,Y,ne,ce,de,T),j++)}const re=fe?cm($):Ms;for(F=re.length-1,ie=se-1;ie>=0;ie--){const ge=S+ie,ye=D[ge],xe=D[ge+1],pe=ge+1<me?xe.el||Ah(xe):ee;$[ie]===0?E(null,ye,k,pe,Y,ne,ce,de,T):fe&&(F<0||ie!==re[F]?we(ye,k,pe,2):F--)}}},we=(R,D,k,ee,Y=null)=>{const{el:ne,type:ce,transition:de,children:T,shapeFlag:ie}=R;if(ie&6){we(R.component.subTree,D,k,ee);return}if(ie&128){R.suspense.move(D,k,ee);return}if(ie&64){ce.move(R,D,k,Be);return}if(ce===nn){i(ne,D,k);for(let ue=0;ue<T.length;ue++)we(T[ue],D,k,ee);i(R.anchor,D,k);return}if(ce===Ka){w(R,D,k);return}if(ee!==2&&ie&1&&de)if(ee===0)de.beforeEnter(ne),i(ne,D,k),Zt(()=>de.enter(ne),Y);else{const{leave:ue,delayLeave:J,afterLeave:Re}=de,S=()=>{R.ctx.isUnmounted?s(ne):i(ne,D,k)},_=()=>{ne._isLeaving&&ne[Ln](!0),ue(ne,()=>{S(),Re&&Re()})};J?J(ne,S,_):_()}else i(ne,D,k)},Pe=(R,D,k,ee=!1,Y=!1)=>{const{type:ne,props:ce,ref:de,children:T,dynamicChildren:ie,shapeFlag:me,patchFlag:ue,dirs:J,cacheIndex:Re,memo:S}=R;if(ue===-2&&(Y=!1),de!=null&&(li(),tr(de,null,k,R,!0),ci()),Re!=null&&(D.renderCache[Re]=void 0),me&256){D.ctx.deactivate(R);return}const _=me&1&&J,F=!nr(R);let j;if(F&&(j=ce&&ce.onVnodeBeforeUnmount)&&Rn(j,D,R),me&6)We(R.component,k,ee);else{if(me&128){R.suspense.unmount(k,ee);return}_&&Fi(R,null,D,"beforeUnmount"),me&64?R.type.remove(R,D,k,Be,ee):ie&&!ie.hasOnce&&(ne!==nn||ue>0&&ue&64)?ae(ie,D,k,!1,!0):(ne===nn&&ue&384||!Y&&me&16)&&ae(T,D,k),ee&&Qe(R)}const se=S!=null&&Re==null;(F&&(j=ce&&ce.onVnodeUnmounted)||_||se)&&Zt(()=>{j&&Rn(j,D,R),_&&Fi(R,null,D,"unmounted"),se&&(R.el=null)},k)},Qe=R=>{const{type:D,el:k,anchor:ee,transition:Y}=R;if(D===nn){at(k,ee);return}if(D===Ka){y(R);return}const ne=()=>{s(k),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(R.shapeFlag&1&&Y&&!Y.persisted){const{leave:ce,delayLeave:de}=Y,T=()=>ce(k,ne);de?de(R.el,ne,T):T()}else ne()},at=(R,D)=>{let k;for(;R!==D;)k=f(R),s(R),R=k;s(D)},We=(R,D,k)=>{const{bum:ee,scope:Y,job:ne,subTree:ce,um:de,m:T,a:ie}=R;$c(T),$c(ie),ee&&Ha(ee),Y.stop(),ne&&(ne.flags|=8,Pe(ce,R,D,k)),de&&Zt(de,D),Zt(()=>{R.isUnmounted=!0},D)},ae=(R,D,k,ee=!1,Y=!1,ne=0)=>{for(let ce=ne;ce<R.length;ce++)Pe(R[ce],D,k,ee,Y)},Ee=R=>{if(R.shapeFlag&6)return Ee(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const D=f(R.anchor||R.el),k=D&&D[bp];return k?f(k):D};let _e=!1;const Oe=(R,D,k)=>{let ee;R==null?D._vnode&&(Pe(D._vnode,null,null,!0),ee=D._vnode.component):E(D._vnode||null,R,D,null,null,null,k),D._vnode=R,_e||(_e=!0,zc(ee),$f(),_e=!1)},Be={p:E,um:Pe,m:we,r:Qe,mt:Z,mc:g,pc:Q,pbc:N,n:Ee,o:n};return{render:Oe,hydrate:void 0,createApp:qp(Oe)}}function ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function lm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bh(n,e,t=!1){const i=n.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ti(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&bh(a,o)),o.type===La&&(o.patchFlag===-1&&(o=s[r]=ti(o)),o.el=a.el),o.type===Xt&&!o.el&&(o.el=a.el)}}function cm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Th(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Th(e)}function $c(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ah(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ah(e.subTree):null}const wh=n=>n.__isSuspense;function um(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):vp(n)}const nn=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Ka=Symbol.for("v-stc"),sr=[];let an=null;function qt(n=!1){sr.push(an=n?null:[])}function fm(){sr.pop(),an=sr[sr.length-1]||null}let ur=1;function ha(n,e=!1){ur+=n,n<0&&an&&e&&(an.hasOnce=!0)}function Rh(n){return n.dynamicChildren=ur>0?an||Ms:null,fm(),ur>0&&an&&an.push(n),n}function fn(n,e,t,i,s,r){return Rh(K(n,e,t,i,s,r,!0))}function sc(n,e,t,i,s){return Rh(Rt(n,e,t,i,s,!0))}function da(n){return n?n.__v_isVNode===!0:!1}function Xi(n,e){return n.type===e.type&&n.key===e.key}const Ch=({key:n})=>n??null,Qr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Ht(n)||je(n)?{i:Bn,r:n,k:e,f:!!t}:n:null);function K(n,e=null,t=null,i=0,s=null,r=n===nn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ch(e),ref:e&&Qr(e),scopeId:Jf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bn};return o?(rc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),ur>0&&!a&&an&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&an.push(l),l}const Rt=hm;function hm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bp)&&(n=Xt),da(n)){const o=Pi(n,e,!0);return t&&rc(o,t),ur>0&&!r&&an&&(o.shapeFlag&6?an[an.indexOf(n)]=o:an.push(o)),o.patchFlag=-2,o}if(Em(n)&&(n=n.__vccOpts),e){e=dm(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=Ji(o)),lt(l)&&(Ql(l)&&!Ge(l)&&(l=Ct({},l)),e.style=Wl(l))}const a=vt(n)?1:wh(n)?128:th(n)?64:lt(n)?4:je(n)?2:0;return K(n,e,t,i,s,a,r,!0)}function dm(n){return n?Ql(n)||xh(n)?Ct({},n):n:null}function Pi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?pm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ch(c),ref:e&&e.ref?t&&r?Ge(r)?r.concat(Qr(e)):[r,Qr(e)]:Qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==nn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pi(n.ssContent),ssFallback:n.ssFallback&&Pi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cr(u,l.clone(u)),u}function Wo(n=" ",e=0){return Rt(La,null,n,e)}function ii(n="",e=!1){return e?(qt(),sc(Xt,null,n)):Rt(Xt,null,n)}function Un(n){return n==null||typeof n=="boolean"?Rt(Xt):Ge(n)?Rt(nn,null,n.slice()):da(n)?ti(n):Rt(La,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pi(n)}function rc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),rc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!xh(e)?e._ctx=Bn:s===3&&Bn&&(Bn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Bn},t=32):(e=String(e),i&64?(t=16,e=[Wo(e)]):t=8);n.children=e,n.shapeFlag|=t}function pm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ji([e.class,i.class]));else if(s==="style")e.style=Wl([e.style,i.style]);else if(Ma(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ge(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Ea(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Rn(n,e,t,i=null){En(n,e,7,[t,i])}const mm=dh();let _m=0;function gm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||mm,r={uid:_m++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sh(i,s),emitsOptions:ph(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=jp.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const Ph=()=>Yt||Bn;let pa,Xo;{const n=ba(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};pa=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),Xo=e("__VUE_SSR_SETTERS__",t=>fr=t)}const xr=n=>{const e=Yt;return pa(n),n.scope.on(),()=>{n.scope.off(),pa(e)}},Zc=()=>{Yt&&Yt.scope.off(),pa(null)};function Dh(n){return n.vnode.shapeFlag&4}let fr=!1;function xm(n,e=!1,t=!1){e&&Xo(e);const{props:i,children:s}=n.vnode,r=Dh(n);em(n,i,r,e),sm(n,s,t||e);const a=r?vm(n,e):void 0;return e&&Xo(!1),a}function vm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zp);const{setup:i}=t;if(i){li();const s=n.setupContext=i.length>1?Mm(n):null,r=xr(n),a=gr(i,n,0,[n.props,s]),o=Tf(a);if(ci(),r(),(o||n.sp)&&!nr(n)&&oh(n),o){if(a.then(Zc,Zc),e)return a.then(l=>{Jc(n,l)}).catch(l=>{Aa(l,n,0)});n.asyncDep=a}else Jc(n,a)}else Lh(n)}function Jc(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=Yf(e)),Lh(n)}function Lh(n,e,t){const i=n.type;n.render||(n.render=i.render||Gn);{const s=xr(n);li();try{Hp(n)}finally{ci(),s()}}}const Sm={get(n,e){return Bt(n,"get",""),n[e]}};function Mm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Sm),slots:n.slots,emit:n.emit,expose:e}}function ac(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yf(op(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ir)return ir[t](n)},has(e,t){return t in e||t in ir}})):n.proxy}function Em(n){return je(n)&&"__vccOpts"in n}const ym=(n,e)=>dp(n,e,fr);function bm(n,e,t){try{ha(-1);const i=arguments.length;return i===2?lt(e)&&!Ge(e)?da(e)?Rt(n,null,[e]):Rt(n,e):Rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&da(t)&&(t=[t]),Rt(n,e,t))}finally{ha(1)}}const Tm="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qo;const Qc=typeof window<"u"&&window.trustedTypes;if(Qc)try{qo=Qc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ih=qo?n=>qo.createHTML(n):n=>n,Am="http://www.w3.org/2000/svg",wm="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,eu=ei&&ei.createElement("template"),Rm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ei.createElementNS(Am,n):e==="mathml"?ei.createElementNS(wm,n):t?ei.createElement(n,{is:t}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{eu.innerHTML=Ih(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=eu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gi="transition",zs="animation",hr=Symbol("_vtc"),Uh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cm=Ct({},nh,Uh),Pm=n=>(n.displayName="Transition",n.props=Cm,n),rr=Pm((n,{slots:e})=>bm(wp,Dm(n),e)),Bi=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},tu=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function Dm(n){const e={};for(const L in n)L in Uh||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,x=Lm(s),E=x&&x[0],m=x&&x[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:w,onLeave:y,onLeaveCancelled:I,onBeforeAppear:A=p,onAppear:P=M,onAppearCancelled:g=w}=e,b=(L,X,Z,O)=>{L._enterCancelled=O,zi(L,X?u:o),zi(L,X?c:a),Z&&Z()},N=(L,X)=>{L._isLeaving=!1,zi(L,h),zi(L,d),zi(L,f),X&&X()},C=L=>(X,Z)=>{const O=L?P:M,G=()=>b(X,L,Z);Bi(O,[X,G]),nu(()=>{zi(X,L?l:r),jn(X,L?u:o),tu(O)||iu(X,i,E,G)})};return Ct(e,{onBeforeEnter(L){Bi(p,[L]),jn(L,r),jn(L,a)},onBeforeAppear(L){Bi(A,[L]),jn(L,l),jn(L,c)},onEnter:C(!1),onAppear:C(!0),onLeave(L,X){L._isLeaving=!0;const Z=()=>N(L,X);jn(L,h),L._enterCancelled?(jn(L,f),au(L)):(au(L),jn(L,f)),nu(()=>{L._isLeaving&&(zi(L,h),jn(L,d),tu(y)||iu(L,i,m,Z))}),Bi(y,[L,Z])},onEnterCancelled(L){b(L,!1,void 0,!0),Bi(w,[L])},onAppearCancelled(L){b(L,!0,void 0,!0),Bi(g,[L])},onLeaveCancelled(L){N(L),Bi(I,[L])}})}function Lm(n){if(n==null)return null;if(lt(n))return[$a(n.enter),$a(n.leave)];{const e=$a(n);return[e,e]}}function $a(n){return Ld(n)}function jn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[hr]||(n[hr]=new Set)).add(e)}function zi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[hr];t&&(t.delete(e),t.size||(n[hr]=void 0))}function nu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Im=0;function iu(n,e,t,i){const s=n._endId=++Im,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Um(n,e);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,f)}function Um(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),s=i(`${gi}Delay`),r=i(`${gi}Duration`),a=su(s,r),o=i(`${zs}Delay`),l=i(`${zs}Duration`),c=su(o,l);let u=null,h=0,f=0;e===gi?a>0&&(u=gi,h=a,f=r.length):e===zs?c>0&&(u=zs,h=c,f=l.length):(h=Math.max(a,c),u=h>0?a>c?gi:zs:null,f=u?u===gi?r.length:l.length:0);const d=u===gi&&/\b(?:transform|all)(?:,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function su(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ru(t)+ru(n[i])))}function ru(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function au(n){return(n?n.ownerDocument:document).body.offsetHeight}function Nm(n,e,t){const i=n[hr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ou=Symbol("_vod"),Fm=Symbol("_vsh"),Om=Symbol(""),Bm=/(?:^|;)\s*display\s*:/;function zm(n,e,t){const i=n.style,s=vt(t);let r=!1;if(t&&!s){if(e)if(vt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&js(i,o,"")}else for(const a in e)t[a]==null&&js(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Gm(n,a,!vt(e)&&e?e[a]:void 0,o)||js(i,a,o):js(i,a,"")}}else if(s){if(e!==t){const a=i[Om];a&&(t+=";"+a),i.cssText=t,r=Bm.test(t)}}else e&&n.removeAttribute("style");ou in n&&(n[ou]=r?i.display:"",n[Fm]&&(i.display="none"))}const lu=/\s*!important$/;function js(n,e,t){if(Ge(t))t.forEach(i=>js(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Hm(n,e);lu.test(t)?n.setProperty(ts(i),t.replace(lu,""),"important"):n[i]=t}}const cu=["Webkit","Moz","ms"],Za={};function Hm(n,e){const t=Za[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return Za[e]=i;i=Rf(i);for(let s=0;s<cu.length;s++){const r=cu[s]+i;if(r in n)return Za[e]=r}return e}function Gm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&vt(i)&&t===i}const uu="http://www.w3.org/1999/xlink";function fu(n,e,t,i,s,r=Bd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(uu,e.slice(6,e.length)):n.setAttributeNS(uu,e,t):t==null||r&&!Pf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Wn(t)?String(t):t)}function hu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ih(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Pf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Vm(n,e,t,i){n.addEventListener(e,t,i)}function km(n,e,t,i){n.removeEventListener(e,t,i)}const du=Symbol("_vei");function Wm(n,e,t,i,s=null){const r=n[du]||(n[du]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Xm(e);if(i){const c=r[e]=jm(i,s);Vm(n,o,c,l)}else a&&(km(n,o,a,l),r[e]=void 0)}}const pu=/(?:Once|Passive|Capture)$/;function Xm(n){let e;if(pu.test(n)){e={};let i;for(;i=n.match(pu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ts(n.slice(2)),e]}let Ja=0;const qm=Promise.resolve(),Ym=()=>Ja||(qm.then(()=>Ja=0),Ja=Date.now());function jm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Km(i,t.value),e,5,[i])};return t.value=n,t.attached=Ym(),t}function Km(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const mu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$m=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Nm(n,i,a):e==="style"?zm(n,t,i):Ma(e)?Ea(e)||Wm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zm(n,e,i,a))?(hu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fu(n,e,i,a,r,e!=="value")):n._isVueCE&&(Jm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(i)))?hu(n,vn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),fu(n,e,i,a))};function Zm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&mu(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mu(e)&&vt(t)?!1:e in n}function Jm(n,e){const t=n._def.props;if(!t)return!1;const i=vn(e);return Array.isArray(t)?t.some(s=>vn(s)===i):Object.keys(t).some(s=>vn(s)===i)}const Qm=["ctrl","shift","alt","meta"],e_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Qm.some(t=>n[`${t}Key`]&&!e.includes(t))},t_=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=e_[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},n_=Ct({patchProp:$m},Rm);let _u;function i_(){return _u||(_u=am(n_))}const s_=((...n)=>{const e=i_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=a_(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,r_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function r_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function a_(n){return vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="184",As={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o_=0,gu=1,l_=2,ea=1,c_=2,Ks=3,Di=0,Jt=1,On=2,ri=0,ws=1,Yo=2,xu=3,vu=4,u_=5,qi=100,f_=101,h_=102,d_=103,p_=104,m_=200,__=201,g_=202,x_=203,jo=204,Ko=205,v_=206,S_=207,M_=208,E_=209,y_=210,b_=211,T_=212,A_=213,w_=214,$o=0,Zo=1,Jo=2,Ps=3,Qo=4,el=5,tl=6,nl=7,Nh=0,R_=1,C_=2,Vn=0,Fh=1,Oh=2,Bh=3,zh=4,Hh=5,Gh=6,Vh=7,kh=300,Qi=301,Ds=302,Qa=303,eo=304,Ia=306,il=1e3,si=1001,sl=1002,Ut=1003,P_=1004,wr=1005,zt=1006,to=1007,ji=1008,rn=1009,Wh=1010,Xh=1011,dr=1012,lc=1013,Xn=1014,zn=1015,fi=1016,cc=1017,uc=1018,pr=1020,qh=35902,Yh=35899,jh=1021,Kh=1022,xn=1023,hi=1026,Ki=1027,$h=1028,fc=1029,es=1030,hc=1031,dc=1033,ta=33776,na=33777,ia=33778,sa=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,ul=37492,fl=37496,hl=37488,dl=37489,ma=37490,pl=37491,ml=37808,_l=37809,gl=37810,xl=37811,vl=37812,Sl=37813,Ml=37814,El=37815,yl=37816,bl=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,Cl=36492,Pl=36494,Dl=36495,Ll=36283,Il=36284,_a=36285,Ul=36286,D_=3200,Nl=0,L_=1,Ri="",un="srgb",ga="srgb-linear",xa="linear",ct="srgb",rs=7680,Su=519,I_=512,U_=513,N_=514,pc=515,F_=516,O_=517,mc=518,B_=519,Mu=35044,Eu="300 es",Hn=2e3,mr=2001;function z_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function H_(){const n=va("canvas");return n.style.display="block",n}const yu={};function bu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Zh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Zh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=Zh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fl(...n){const e=n.join(" ");e in yu||(yu[e]=!0,He(...n))}function G_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const V_={[$o]:Zo,[Jo]:tl,[Qo]:nl,[Ps]:el,[Zo]:$o,[tl]:Jo,[nl]:Qo,[el]:Ps};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,Ol=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function k_(n,e){return(n%e+e)%e}function no(n,e,t){return(1-t)*n+t*e}function Hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const W_={DEG2RAD:ra},Ec=class Ec{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ec.prototype.isVector2=!0;let ke=Ec;class Li{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],x=r[a+2],E=r[a+3];if(h!==E||l!==f||c!==d||u!==x){let m=l*f+c*d+u*x+h*E;m<0&&(f=-f,d=-d,x=-x,E=-E,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+f*o,c=c*p+d*o,u=u*p+x*o,h=h*p+E*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+x*o,h=h*p+E*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+u*h+l*d-c*f,e[t+1]=l*x+u*f+c*h-o*d,e[t+2]=c*x+u*d+o*f-l*h,e[t+3]=u*x-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*x,this._y=c*d*h-f*u*x,this._z=c*u*x+f*d*h,this._w=c*u*h-f*d*x;break;case"YXZ":this._x=f*u*h+c*d*x,this._y=c*d*h-f*u*x,this._z=c*u*x-f*d*h,this._w=c*u*h+f*d*x;break;case"ZXY":this._x=f*u*h-c*d*x,this._y=c*d*h+f*u*x,this._z=c*u*x+f*d*h,this._w=c*u*h-f*d*x;break;case"ZYX":this._x=f*u*h-c*d*x,this._y=c*d*h+f*u*x,this._z=c*u*x-f*d*h,this._w=c*u*h+f*d*x;break;case"YZX":this._x=f*u*h+c*d*x,this._y=c*d*h+f*u*x,this._z=c*u*x-f*d*h,this._w=c*u*h-f*d*x;break;case"XZY":this._x=f*u*h-c*d*x,this._y=c*d*h-f*u*x,this._z=c*u*x+f*d*h,this._w=c*u*h+f*d*x;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yc=class yc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;let H=yc;const io=new H,Tu=new Li,bc=class bc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],x=i[8],E=s[0],m=s[3],p=s[6],M=s[1],w=s[4],y=s[7],I=s[2],A=s[5],P=s[8];return r[0]=a*E+o*M+l*I,r[3]=a*m+o*w+l*A,r[6]=a*p+o*y+l*P,r[1]=c*E+u*M+h*I,r[4]=c*m+u*w+h*A,r[7]=c*p+u*y+h*P,r[2]=f*E+d*M+x*I,r[5]=f*m+d*w+x*A,r[8]=f*p+d*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,x=t*h+i*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=h*E,e[1]=(s*c-u*i)*E,e[2]=(o*i-s*a)*E,e[3]=f*E,e[4]=(u*t-s*l)*E,e[5]=(s*r-o*t)*E,e[6]=d*E,e[7]=(i*l-c*t)*E,e[8]=(a*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bc.prototype.isMatrix3=!0;let Xe=bc;const so=new Xe,Au=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X_(){const n={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ga]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:Au,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Au,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const tt=X_();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let as;class q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=va("canvas")),as.width=e.width,as.height=e.height;const s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y_=0;class _c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ro(s[a].image)):r.push(ro(s[a]))}else r=ro(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let j_=0;const ao=new H;class Gt extends Ui{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=si,s=si,r=zt,a=ji,o=xn,l=rn,c=Gt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=vr(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case il:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case il:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=kh;Gt.DEFAULT_ANISOTROPY=1;const Tc=class Tc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],x=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-E)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+E)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(d+1)/2,I=(p+1)/2,A=(u+f)/4,P=(h+E)/4,g=(x+m)/4;return w>y&&w>I?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=P/i):y>I?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=g/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=g/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(h-E)*(h-E)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(h-E)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tc.prototype.isVector4=!0;let Mt=Tc;class K_ extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Gt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new _c(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends K_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sa=class Sa{constructor(e,t,i,s,r,a,o,l,c,u,h,f,d,x,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,d,x,E,m)}set(e,t,i,s,r,a,o,l,c,u,h,f,d,x,E,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=x,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,x=o*u,E=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+x*c,t[5]=f-E*c,t[9]=-o*l,t[2]=E-f*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,x=c*u,E=c*h;t[0]=f+E*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-x,t[6]=E+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,x=c*u,E=c*h;t[0]=f-E*o,t[4]=-a*h,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*u,t[9]=E-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,x=o*u,E=o*h;t[0]=l*u,t[4]=x*c-d,t[8]=f*c+E,t[1]=l*h,t[5]=E*c+f,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,x=o*l,E=o*c;t[0]=l*u,t[4]=E-f*h,t[8]=x*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+x,t[10]=f-E*h}else if(e.order==="XZY"){const f=a*l,d=a*c,x=o*l,E=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+E,t[5]=a*u,t[9]=d*h-x,t[2]=x*h-d,t[6]=o*u,t[10]=E*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,J_)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),xi.crossVectors(i,en),xi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),xi.crossVectors(i,en)),xi.normalize(),Rr.crossVectors(en,xi),s[0]=xi.x,s[4]=Rr.x,s[8]=en.x,s[1]=xi.y,s[5]=Rr.y,s[9]=en.y,s[2]=xi.z,s[6]=Rr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],x=i[2],E=i[6],m=i[10],p=i[14],M=i[3],w=i[7],y=i[11],I=i[15],A=s[0],P=s[4],g=s[8],b=s[12],N=s[1],C=s[5],L=s[9],X=s[13],Z=s[2],O=s[6],G=s[10],z=s[14],Q=s[3],le=s[7],Me=s[11],we=s[15];return r[0]=a*A+o*N+l*Z+c*Q,r[4]=a*P+o*C+l*O+c*le,r[8]=a*g+o*L+l*G+c*Me,r[12]=a*b+o*X+l*z+c*we,r[1]=u*A+h*N+f*Z+d*Q,r[5]=u*P+h*C+f*O+d*le,r[9]=u*g+h*L+f*G+d*Me,r[13]=u*b+h*X+f*z+d*we,r[2]=x*A+E*N+m*Z+p*Q,r[6]=x*P+E*C+m*O+p*le,r[10]=x*g+E*L+m*G+p*Me,r[14]=x*b+E*X+m*z+p*we,r[3]=M*A+w*N+y*Z+I*Q,r[7]=M*P+w*C+y*O+I*le,r[11]=M*g+w*L+y*G+I*Me,r[15]=M*b+w*X+y*z+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],x=e[3],E=e[7],m=e[11],p=e[15],M=l*d-c*f,w=o*d-c*h,y=o*f-l*h,I=a*d-c*u,A=a*f-l*u,P=a*h-o*u;return t*(E*M-m*w+p*y)-i*(x*M-m*I+p*A)+s*(x*w-E*I+p*P)-r*(x*y-E*A+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],x=e[12],E=e[13],m=e[14],p=e[15],M=t*o-i*a,w=t*l-s*a,y=t*c-r*a,I=i*l-s*o,A=i*c-r*o,P=s*c-r*l,g=u*E-h*x,b=u*m-f*x,N=u*p-d*x,C=h*m-f*E,L=h*p-d*E,X=f*p-d*m,Z=M*X-w*L+y*C+I*N-A*b+P*g;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Z;return e[0]=(o*X-l*L+c*C)*O,e[1]=(s*L-i*X-r*C)*O,e[2]=(E*P-m*A+p*I)*O,e[3]=(f*A-h*P-d*I)*O,e[4]=(l*N-a*X-c*b)*O,e[5]=(t*X-s*N+r*b)*O,e[6]=(m*y-x*P-p*w)*O,e[7]=(u*P-f*y+d*w)*O,e[8]=(a*L-o*N+c*g)*O,e[9]=(i*N-t*L-r*g)*O,e[10]=(x*A-E*y+p*M)*O,e[11]=(h*y-u*A-d*M)*O,e[12]=(o*b-a*C-l*g)*O,e[13]=(t*C-i*b+s*g)*O,e[14]=(E*w-x*I-m*M)*O,e[15]=(u*I-h*w+f*M)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,x=r*h,E=a*u,m=a*h,p=o*h,M=l*c,w=l*u,y=l*h,I=i.x,A=i.y,P=i.z;return s[0]=(1-(E+p))*I,s[1]=(d+y)*I,s[2]=(x-w)*I,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(x+w)*P,s[9]=(m-M)*P,s[10]=(1-(f+E))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,u=1/o,h=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Hn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let x,E;if(l)x=r/(a-r),E=a*r/(a-r);else if(o===Hn)x=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===mr)x=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Hn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let x,E;if(l)x=1/(a-r),E=a/(a-r);else if(o===Hn)x=-2/(a-r),E=-(a+r)/(a-r);else if(o===mr)x=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sa.prototype.isMatrix4=!0;let Et=Sa;const os=new H,pn=new Et,Z_=new H(0,0,0),J_=new H(1,1,1),xi=new H,Rr=new H,en=new H,Ru=new Et,Cu=new Li;class Ii{constructor(e=0,t=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const Pu=new H,ls=new Li,Kn=new Et,Cr=new H,Gs=new H,eg=new H,tg=new Li,Du=new H(1,0,0),Lu=new H(0,1,0),Iu=new H(0,0,1),Uu={type:"added"},ng={type:"removed"},cs={type:"childadded",child:null},oo={type:"childremoved",child:null};class jt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new H,t=new Ii,i=new Li,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Xe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Gs,Cr,this.up):Kn.lookAt(Cr,Gs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Kn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uu),cs.child=e,this.dispatchEvent(cs),cs.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new H(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $s extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=k_(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=co(a,r,e+1/3),this.g=co(a,r,e),this.b=co(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return tt.workingToColorSpace(Ot.copy(this),e),Math.round(Je(Ot.r*255,0,255))*65536+Math.round(Je(Ot.g*255,0,255))*256+Math.round(Je(Ot.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=un){tt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Pr);const i=no(vi.h,Pr.h,t),s=no(vi.s,Pr.s,t),r=no(vi.l,Pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new et;et.NAMES=ed;class gc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new gc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sg extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new H,$n=new H,uo=new H,Zn=new H,us=new H,fs=new H,Nu=new H,fo=new H,ho=new H,po=new H,mo=new Mt,_o=new Mt,go=new Mt;class gn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),$n.subVectors(i,t),uo.subVectors(e,t);const a=mn.dot(mn),o=mn.dot($n),l=mn.dot(uo),c=$n.dot($n),u=$n.dot(uo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,x=(a*u-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return mo.setScalar(0),_o.setScalar(0),go.setScalar(0),mo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,i),go.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),$n.subVectors(e,t),mn.cross($n).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),mn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;us.subVectors(s,i),fs.subVectors(r,i),fo.subVectors(e,i);const l=us.dot(fo),c=fs.dot(fo);if(l<=0&&c<=0)return t.copy(i);ho.subVectors(e,s);const u=us.dot(ho),h=fs.dot(ho);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(us,a);po.subVectors(e,r);const d=us.dot(po),x=fs.dot(po);if(x>=0&&d<=x)return t.copy(r);const E=d*c-l*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(fs,o);const m=u*x-d*h;if(m<=0&&h-u>=0&&d-x>=0)return Nu.subVectors(r,s),o=(h-u)/(h-u+(d-x)),t.copy(s).addScaledVector(Nu,o);const p=1/(m+E+f);return a=E*p,o=f*p,t.copy(i).addScaledVector(us,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Lr.subVectors(this.max,Vs),hs.subVectors(e.a,Vs),ds.subVectors(e.b,Vs),ps.subVectors(e.c,Vs),Si.subVectors(ds,hs),Mi.subVectors(ps,ds),Hi.subVectors(hs,ps);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Hi.z,Hi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Hi.z,0,-Hi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Hi.y,Hi.x,0];return!xo(t,hs,ds,ps,Lr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,hs,ds,ps,Lr))?!1:(Ir.crossVectors(Si,Mi),t=[Ir.x,Ir.y,Ir.z],xo(t,hs,ds,ps,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new H,new H,new H,new H,new H,new H,new H,new H],_n=new H,Dr=new Sr,hs=new H,ds=new H,ps=new H,Si=new H,Mi=new H,Hi=new H,Vs=new H,Lr=new H,Ir=new H,Gi=new H;function xo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gi.fromArray(n,r);const o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const At=new H,Ur=new ke;let rg=0;class dn extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class td extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nd extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ag=new Sr,ks=new H,vo=new H;class Ua{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ag.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(vo)),this.expandByPoint(ks.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let og=0;const cn=new Et,So=new jt,ms=new H,tn=new Sr,Ws=new Sr,Lt=new H;class Tn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z_(e)?nd:td)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(tn.min,Ws.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,Ws.max),tn.expandByPoint(Lt)):(tn.expandByPoint(Ws.min),tn.expandByPoint(Ws.max))}tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(e,c),Lt.add(ms)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new H,l[g]=new H;const c=new H,u=new H,h=new H,f=new ke,d=new ke,x=new ke,E=new H,m=new H;function p(g,b,N){c.fromBufferAttribute(i,g),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,N),f.fromBufferAttribute(r,g),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,N),u.sub(c),h.sub(c),d.sub(f),x.sub(f);const C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(E.copy(u).multiplyScalar(x.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(C),o[g].add(E),o[b].add(E),o[N].add(E),l[g].add(m),l[b].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let g=0,b=M.length;g<b;++g){const N=M[g],C=N.start,L=N.count;for(let X=C,Z=C+L;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new H,y=new H,I=new H,A=new H;function P(g){I.fromBufferAttribute(s,g),A.copy(I);const b=o[g];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),y.crossVectors(A,b);const C=y.dot(l[g])<0?-1:1;a.setXYZW(g,w.x,w.y,w.z,C)}for(let g=0,b=M.length;g<b;++g){const N=M[g],C=N.start,L=N.count;for(let X=C,Z=C+L;X<Z;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const x=e.getX(f+0),E=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,x=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?d=l[E]*o.data.stride+o.offset:d=l[E]*u;for(let p=0;p<u;p++)f[x++]=c[d++]}return new dn(f,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let lg=0;class Us extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ws,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Ko,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ko&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qn=new H,Mo=new H,Nr=new H,Ei=new H,Eo=new H,Fr=new H,yo=new H;class xc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mo.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Mo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Ei.dot(this.direction),l=-Ei.dot(Nr),c=Ei.lengthSq(),u=Math.abs(1-a*a);let h,f,d,x;if(u>0)if(h=a*l-o,f=a*o-l,x=r*u,h>=0)if(f>=-x)if(f<=x){const E=1/u;h*=E,f*=E,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mo).addScaledVector(Nr,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){Eo.subVectors(t,e),Fr.subVectors(i,e),yo.crossVectors(Eo,Fr);let a=this.direction.dot(yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(Fr.crossVectors(Ei,Fr));if(l<0)return null;const c=o*this.direction.dot(Eo.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(yo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class id extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fu=new Et,Vi=new xc,Or=new Ua,Ou=new H,Br=new H,zr=new H,Hr=new H,bo=new H,Gr=new H,Bu=new H,Vr=new H;class yn extends jt{constructor(e=new Tn,t=new id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(bo.fromBufferAttribute(h,e),a?Gr.addScaledVector(bo,u):Gr.addScaledVector(bo.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Or.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Or,Ou)===null||Vi.origin.distanceToSquared(Ou)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=f.length;x<E;x++){const m=f[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,I=w;y<I;y+=3){const A=o.getX(y),P=o.getX(y+1),g=o.getX(y+2);s=kr(this,p,e,i,c,u,h,A,P,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let m=x,p=E;m<p;m+=3){const M=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=kr(this,a,e,i,c,u,h,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=f.length;x<E;x++){const m=f[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,I=w;y<I;y+=3){const A=y,P=y+1,g=y+2;s=kr(this,p,e,i,c,u,h,A,P,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let m=x,p=E;m<p;m+=3){const M=m,w=m+1,y=m+2;s=kr(this,a,e,i,c,u,h,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function cg(n,e,t,i,s,r,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Di,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:n}}function kr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Br),n.getVertexPosition(l,zr),n.getVertexPosition(c,Hr);const u=cg(n,e,t,i,Br,zr,Hr,Bu);if(u){const h=new H;gn.getBarycoord(Bu,Br,zr,Hr,h),s&&(u.uv=gn.getInterpolatedAttribute(s,o,l,c,h,new ke)),r&&(u.uv1=gn.getInterpolatedAttribute(r,o,l,c,h,new ke)),a&&(u.normal=gn.getInterpolatedAttribute(a,o,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};gn.getNormal(Br,zr,Hr,f.normal),u.face=f,u.barycoord=h}return u}class ug extends Gt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ut,u=Ut,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const To=new H,fg=new H,hg=new Xe;class Ai{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=To.subVectors(i,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(To),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hg.getNormalMatrix(e),s=this.coplanarPoint(To).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Ua,dg=new ke(.5,.5),Wr=new H;class vc{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],x=r[8],E=r[9],m=r[10],p=r[11],M=r[12],w=r[13],y=r[14],I=r[15];if(s[0].setComponents(c-a,d-u,p-x,I-M).normalize(),s[1].setComponents(c+a,d+u,p+x,I+M).normalize(),s[2].setComponents(c+o,d+h,p+E,I+w).normalize(),s[3].setComponents(c-o,d-h,p-E,I-w).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,p-m,I-y).normalize();else if(s[4].setComponents(c-l,d-f,p-m,I-y).normalize(),t===Hn)s[5].setComponents(c+l,d+f,p+m,I+y).normalize();else if(t===mr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=dg.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pg extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zu=new Et,Bl=new xc,Xr=new Ua,qr=new H;class mg extends jt{constructor(e=new Tn,t=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;zu.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,E=d;x<E;x++){const m=c.getX(x);qr.fromBufferAttribute(h,m),Hu(qr,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=f,E=d;x<E;x++)qr.fromBufferAttribute(h,x),Hu(qr,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hu(n,e,t,i,s,r,a){const o=Bl.distanceSqToPoint(n);if(o<t){const l=new H;Bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sd extends Gt{constructor(e=[],t=Qi,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _g extends Gt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends Gt{constructor(e,t,i=Xn,s,r,a,o=Ut,l=Ut,c,u=hi,h=1){if(u!==hi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gg extends Ls{constructor(e,t=Xn,i=Qi,s,r,a=Ut,o=Ut,l,c=hi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rd extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ns extends Tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(h,2));function x(E,m,p,M,w,y,I,A,P,g,b){const N=y/P,C=I/g,L=y/2,X=I/2,Z=A/2,O=P+1,G=g+1;let z=0,Q=0;const le=new H;for(let Me=0;Me<G;Me++){const we=Me*C-X;for(let Pe=0;Pe<O;Pe++){const Qe=Pe*N-L;le[E]=Qe*M,le[m]=we*w,le[p]=Z,c.push(le.x,le.y,le.z),le[E]=0,le[m]=0,le[p]=A>0?1:-1,u.push(le.x,le.y,le.z),h.push(Pe/P),h.push(1-Me/g),z+=1}}for(let Me=0;Me<g;Me++)for(let we=0;we<P;we++){const Pe=f+we+O*Me,Qe=f+we+O*(Me+1),at=f+(we+1)+O*(Me+1),We=f+(we+1)+O*Me;l.push(Pe,Qe,We),l.push(Qe,at,We),Q+=6}o.addGroup(d,Q,b),d+=Q,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mr extends Tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],x=[],E=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let w=0;w<c;w++){const y=w*h-r;x.push(y,-M,0),E.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const w=M+c*p,y=M+c*(p+1),I=M+1+c*(p+1),A=M+1+c*p;d.push(w,y,A),d.push(y,I,A)}this.setIndex(d),this.setAttribute("position",new oi(x,3)),this.setAttribute("normal",new oi(E,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Gu(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Gu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Is(n[t]);for(const s in i)e[s]=i[s]}return e}function Gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function xg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ad(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const vg={clone:Is,merge:kt};var Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eg extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vu extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yg extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bg extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class od extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ao=new Et,ku=new H,Wu=new H;class Tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===mr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yr=new H,jr=new Li,Cn=new H;class ld extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,jr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,jr,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yr,jr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,jr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new H,Xu=new ke,qu=new ke;class sn extends ld{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,qu),t.subVectors(qu,Xu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ag extends Tg{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Yu extends od{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class cd extends ld{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wg extends od{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _s=-90,gs=1;class Rg extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(_s,gs,e,t);s.layers=this.layers,this.add(s);const r=new sn(_s,gs,e,t);r.layers=this.layers,this.add(r);const a=new sn(_s,gs,e,t);a.layers=this.layers,this.add(a);const o=new sn(_s,gs,e,t);o.layers=this.layers,this.add(o);const l=new sn(_s,gs,e,t);l.layers=this.layers,this.add(l);const c=new sn(_s,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Cg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ju{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ac=class Ac{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Ac.prototype.isMatrix2=!0;let Ku=Ac;class Pg extends Ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $u(n,e,t,i){const s=Dg(i);switch(t){case jh:return n*e;case $h:return n*e/s.components*s.byteLength;case fc:return n*e/s.components*s.byteLength;case es:return n*e*2/s.components*s.byteLength;case hc:return n*e*2/s.components*s.byteLength;case Kh:return n*e*3/s.components*s.byteLength;case xn:return n*e*4/s.components*s.byteLength;case dc:return n*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case ll:return Math.max(n,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(n,8)*Math.max(e,8)/2;case cl:case ul:case hl:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:case ma:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ll:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _a:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(n){switch(n){case rn:case Wh:return{byteLength:1,components:1};case dr:case Xh:case fi:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case Xn:case lc:case zn:return{byteLength:4,components:1};case qh:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ud(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Lg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<h.length;d++){const x=h[f],E=h[d];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++f,h[f]=E)}h.length=f+1;for(let d=0,x=h.length;d<x;d++){const E=h[d];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,T0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Ig,alphahash_pars_fragment:Ug,alphamap_fragment:Ng,alphamap_pars_fragment:Fg,alphatest_fragment:Og,alphatest_pars_fragment:Bg,aomap_fragment:zg,aomap_pars_fragment:Hg,batching_pars_vertex:Gg,batching_vertex:Vg,begin_vertex:kg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:qg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:Zg,color_fragment:Jg,color_pars_fragment:Qg,color_pars_vertex:e0,color_vertex:t0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:a0,emissivemap_fragment:o0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:h0,envmap_pars_fragment:d0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:T0,envmap_vertex:m0,fog_vertex:_0,fog_pars_vertex:g0,fog_fragment:x0,fog_pars_fragment:v0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:M0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:y0,lights_pars_begin:b0,lights_toon_fragment:A0,lights_toon_pars_fragment:w0,lights_phong_fragment:R0,lights_phong_pars_fragment:C0,lights_physical_fragment:P0,lights_physical_pars_fragment:D0,lights_fragment_begin:L0,lights_fragment_maps:I0,lights_fragment_end:U0,lightprobes_pars_fragment:N0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:k0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:j0,morphtarget_pars_vertex:K0,morphtarget_vertex:$0,normal_fragment_begin:Z0,normal_fragment_maps:J0,normal_pars_fragment:Q0,normal_pars_vertex:ex,normal_vertex:tx,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:rx,iridescence_pars_fragment:ax,opaque_fragment:ox,packing:lx,premultiplied_alpha_fragment:cx,project_vertex:ux,dithering_fragment:fx,dithering_pars_fragment:hx,roughnessmap_fragment:dx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:_x,shadowmap_vertex:gx,shadowmask_pars_fragment:xx,skinbase_vertex:vx,skinning_pars_vertex:Sx,skinning_vertex:Mx,skinnormal_vertex:Ex,specularmap_fragment:yx,specularmap_pars_fragment:bx,tonemapping_fragment:Tx,tonemapping_pars_fragment:Ax,transmission_fragment:wx,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Px,uv_vertex:Dx,worldpos_vertex:Lx,background_vert:Ix,background_frag:Ux,backgroundCube_vert:Nx,backgroundCube_frag:Fx,cube_vert:Ox,cube_frag:Bx,depth_vert:zx,depth_frag:Hx,distance_vert:Gx,distance_frag:Vx,equirect_vert:kx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:Yx,meshbasic_frag:jx,meshlambert_vert:Kx,meshlambert_frag:$x,meshmatcap_vert:Zx,meshmatcap_frag:Jx,meshnormal_vert:Qx,meshnormal_frag:ev,meshphong_vert:tv,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:sv,meshtoon_vert:rv,meshtoon_frag:av,points_vert:ov,points_frag:lv,shadow_vert:cv,shadow_frag:uv,sprite_vert:fv,sprite_frag:hv},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Nn={basic:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:kt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:kt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:kt([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:kt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:kt([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:kt([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:kt([be.common,be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:kt([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Nn.physical={uniforms:kt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Kr={r:0,b:0,g:0},dv=new Et,fd=new Xe;fd.set(-1,0,0,0,1,0,0,0,1);function pv(n,e,t,i,s,r){const a=new et(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function x(M){let w=!1;const y=d(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(M,w){const y=d(w);y&&(y.isCubeTexture||y.mapping===Ia)?(c===void 0&&(c=new yn(new Ns(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Is(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fd),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ct,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yn(new Mr(2,2),new bn({name:"BackgroundMaterial",uniforms:Is(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Kr,ad(n)),t.buffers.color.setClear(Kr.r,Kr.g,Kr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:E,dispose:p}}function mv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(C,L,X,Z,O){let G=!1;const z=h(C,Z,X,L);r!==z&&(r=z,c(r.object)),G=d(C,Z,X,O),G&&x(C,Z,X,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(C,L,X,Z),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,L,X,Z){const O=Z.wireframe===!0;let G=i[L.id];G===void 0&&(G={},i[L.id]=G);const z=C.isInstancedMesh===!0?C.id:0;let Q=G[z];Q===void 0&&(Q={},G[z]=Q);let le=Q[X.id];le===void 0&&(le={},Q[X.id]=le);let Me=le[O];return Me===void 0&&(Me=f(l()),le[O]=Me),Me}function f(C){const L=[],X=[],Z=[];for(let O=0;O<t;O++)L[O]=0,X[O]=0,Z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:Z,object:C,attributes:{},index:null}}function d(C,L,X,Z){const O=r.attributes,G=L.attributes;let z=0;const Q=X.getAttributes();for(const le in Q)if(Q[le].location>=0){const we=O[le];let Pe=G[le];if(Pe===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(Pe=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(Pe=C.instanceColor)),we===void 0||we.attribute!==Pe||Pe&&we.data!==Pe.data)return!0;z++}return r.attributesNum!==z||r.index!==Z}function x(C,L,X,Z){const O={},G=L.attributes;let z=0;const Q=X.getAttributes();for(const le in Q)if(Q[le].location>=0){let we=G[le];we===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(we=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(we=C.instanceColor));const Pe={};Pe.attribute=we,we&&we.data&&(Pe.data=we.data),O[le]=Pe,z++}r.attributes=O,r.attributesNum=z,r.index=Z}function E(){const C=r.newAttributes;for(let L=0,X=C.length;L<X;L++)C[L]=0}function m(C){p(C,0)}function p(C,L){const X=r.newAttributes,Z=r.enabledAttributes,O=r.attributeDivisors;X[C]=1,Z[C]===0&&(n.enableVertexAttribArray(C),Z[C]=1),O[C]!==L&&(n.vertexAttribDivisor(C,L),O[C]=L)}function M(){const C=r.newAttributes,L=r.enabledAttributes;for(let X=0,Z=L.length;X<Z;X++)L[X]!==C[X]&&(n.disableVertexAttribArray(X),L[X]=0)}function w(C,L,X,Z,O,G,z){z===!0?n.vertexAttribIPointer(C,L,X,O,G):n.vertexAttribPointer(C,L,X,Z,O,G)}function y(C,L,X,Z){E();const O=Z.attributes,G=X.getAttributes(),z=L.defaultAttributeValues;for(const Q in G){const le=G[Q];if(le.location>=0){let Me=O[Q];if(Me===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const we=Me.normalized,Pe=Me.itemSize,Qe=e.get(Me);if(Qe===void 0)continue;const at=Qe.buffer,We=Qe.type,ae=Qe.bytesPerElement,Ee=We===n.INT||We===n.UNSIGNED_INT||Me.gpuType===lc;if(Me.isInterleavedBufferAttribute){const _e=Me.data,Oe=_e.stride,Be=Me.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<le.locationSize;ze++)p(le.location+ze,_e.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<le.locationSize;ze++)m(le.location+ze);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ze=0;ze<le.locationSize;ze++)w(le.location+ze,Pe/le.locationSize,We,we,Oe*ae,(Be+Pe/le.locationSize*ze)*ae,Ee)}else{if(Me.isInstancedBufferAttribute){for(let _e=0;_e<le.locationSize;_e++)p(le.location+_e,Me.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let _e=0;_e<le.locationSize;_e++)m(le.location+_e);n.bindBuffer(n.ARRAY_BUFFER,at);for(let _e=0;_e<le.locationSize;_e++)w(le.location+_e,Pe/le.locationSize,We,we,Pe*ae,Pe/le.locationSize*_e*ae,Ee)}}else if(z!==void 0){const we=z[Q];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(le.location,we);break;case 3:n.vertexAttrib3fv(le.location,we);break;case 4:n.vertexAttrib4fv(le.location,we);break;default:n.vertexAttrib1fv(le.location,we)}}}}M()}function I(){b();for(const C in i){const L=i[C];for(const X in L){const Z=L[X];for(const O in Z){const G=Z[O];for(const z in G)u(G[z].object),delete G[z];delete Z[O]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;const L=i[C.id];for(const X in L){const Z=L[X];for(const O in Z){const G=Z[O];for(const z in G)u(G[z].object),delete G[z];delete Z[O]}}delete i[C.id]}function P(C){for(const L in i){const X=i[L];for(const Z in X){const O=X[Z];if(O[C.id]===void 0)continue;const G=O[C.id];for(const z in G)u(G[z].object),delete G[z];delete O[C.id]}}}function g(C){for(const L in i){const X=i[L],Z=C.isInstancedMesh===!0?C.id:0,O=X[Z];if(O!==void 0){for(const G in O){const z=O[G];for(const Q in z)u(z[Q].object),delete z[Q];delete O[G]}delete X[Z],Object.keys(X).length===0&&delete i[L]}}}function b(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function _v(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==xn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const g=P===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!g)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:I,samples:A}}function xv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ai,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const x=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,w=M*4;let y=p.clippingState||null;l.value=y,y=u(x,f,w,d);for(let I=0;I!==w;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,x){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=l.value,x!==!0||m===null){const p=d+E*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=d;w!==E;++w,y+=4)a.copy(h[w]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const Ci=4,Zu=[.125,.215,.35,.446,.526,.582],Yi=20,vv=256,Xs=new cd,Ju=new et;let wo=null,Ro=0,Co=0,Po=!1;const Sv=new H;class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Sv}=r;wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ro,Co),this._renderer.xr.enabled=Po,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:fi,format:xn,colorSpace:ga,depthBuffer:!1},s=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mv(r)),this._blurMaterial=yv(r,e,t),this._ggxMaterial=Ev(r,e,t)}return s}_compileMaterial(e){const t=new yn(new Tn,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,i,s,r){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ju),h.toneMapping=Vn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Ns,new id({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Ju),p=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const I=this._cubeSize;xs(s,y*I,w>2?I:0,I,I),h.setRenderTarget(s),p&&h.render(E,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qi||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Xs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:x}=this,E=this._sizeLods[i],m=3*E*(i>x-Ci?i-x+Ci:0),p=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,xs(r,m,p,3*E,2*E),s.setRenderTarget(r),s.render(o,Xs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,xs(e,m,p,3*E,2*E),s.setRenderTarget(e),s.render(o,Xs)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),E=r/x,m=isFinite(r)?1+Math.floor(u*E):Yi;m>Yi&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let M=0;for(let P=0;P<Yi;++P){const g=P/E,b=Math.exp(-g*g/2);p.push(b),P===0?M+=b:P<m&&(M+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-i;const y=this._sizeLods[s],I=3*y*(s>w-Ci?s-w+Ci:0),A=4*(this._cubeSize-y);xs(t,I,A,3*y,2*y),l.setRenderTarget(t),l.render(h,Xs)}}function Mv(n){const e=[],t=[],i=[];let s=n;const r=n-Ci+1+Zu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ci?l=Zu[a-n+Ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,x=6,E=3,m=2,p=1,M=new Float32Array(E*x*d),w=new Float32Array(m*x*d),y=new Float32Array(p*x*d);for(let A=0;A<d;A++){const P=A%3*2/3-1,g=A>2?0:-1,b=[P,g,0,P+2/3,g,0,P+2/3,g+1,0,P,g,0,P+2/3,g+1,0,P,g+1,0];M.set(b,E*x*A),w.set(f,m*x*A);const N=[A,A,A,A,A,A];y.set(N,p*x*A)}const I=new Tn;I.setAttribute("position",new dn(M,E)),I.setAttribute("uv",new dn(w,m)),I.setAttribute("faceIndex",new dn(y,p)),i.push(new yn(I,null)),s>Ci&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ef(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ev(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function yv(n,e,t){const i=new Float32Array(Yi),s=new H(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function tf(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nf(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hd extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ns(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:ri});r.uniforms.tEquirect.value=t;const a=new yn(s,r),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=zt),new Rg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function bv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qa||d===eo)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const E=new hd(x.height);return E.fromEquirectangularTexture(n,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,x=d===Qa||d===eo,E=d===Qi||d===Ds;if(x||E){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Qu(n)),m=x?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return x&&M&&M.height>0||E&&M&&l(M)?(i===null&&(i=new Qu(n)),m=x?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===Qa?f.mapping=Qi:d===eo&&(f.mapping=Ds),f}function l(f){let d=0;const x=6;for(let E=0;E<x;E++)f[E]!==void 0&&d++;return d===x}function c(f){const d=f.target;d.removeEventListener("dispose",c);const x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Tv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fl("WebGLRenderer: "+i+" extension not supported."),s}}}function Av(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,x=h.attributes.position;let E=0;if(x===void 0)return;if(d!==null){const M=d.array;E=d.version;for(let w=0,y=M.length;w<y;w+=3){const I=M[w+0],A=M[w+1],P=M[w+2];f.push(I,A,A,P,P,I)}}else{const M=x.array;E=x.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const I=w+0,A=w+1,P=w+2;f.push(I,A,A,P,P,I)}}const m=new(x.count>=65535?nd:td)(f,1);m.version=E;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function wv(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*a,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let E=0;for(let m=0;m<d;m++)E+=f[m];t.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Cv(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let N=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var d=N;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),E===!0&&(y=2),m===!0&&(y=3);let I=o.attributes.position.count*y,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*A*4*h),g=new Jh(P,I,A,h);g.type=zn,g.needsUpdate=!0;const b=y*4;for(let C=0;C<h;C++){const L=p[C],X=M[C],Z=w[C],O=I*A*4*C;for(let G=0;G<L.count;G++){const z=G*b;x===!0&&(s.fromBufferAttribute(L,G),P[O+z+0]=s.x,P[O+z+1]=s.y,P[O+z+2]=s.z,P[O+z+3]=0),E===!0&&(s.fromBufferAttribute(X,G),P[O+z+4]=s.x,P[O+z+5]=s.y,P[O+z+6]=s.z,P[O+z+7]=0),m===!0&&(s.fromBufferAttribute(Z,G),P[O+z+8]=s.x,P[O+z+9]=s.y,P[O+z+10]=s.z,P[O+z+11]=Z.itemSize===4?s.w:1)}}f={count:h,texture:g,size:new ke(I,A)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const E=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",E),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Pv(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Dv={[Fh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[zh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};function Lv(n,e,t,i,s){const r=new kn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ls(e,t):void 0}),a=new kn(e,t,{type:fi,depthBuffer:!1,stencilBuffer:!1}),o=new Tn;o.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new oi([0,2,0,0,2,0],2));const l=new Eg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new yn(o,l),u=new cd(-1,1,1,-1,0,1);let h=null,f=null,d=!1,x,E=null,m=[],p=!1;this.setSize=function(M,w){r.setSize(M,w),a.setSize(M,w);for(let y=0;y<m.length;y++){const I=m[y];I.setSize&&I.setSize(M,w)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const w=r.width,y=r.height;for(let I=0;I<m.length;I++){const A=m[I];A.setSize&&A.setSize(w,y)}},this.begin=function(M,w){if(d||M.toneMapping===Vn&&m.length===0)return!1;if(E=w,w!==null){const y=w.width,I=w.height;(r.width!==y||r.height!==I)&&this.setSize(y,I)}return p===!1&&M.setRenderTarget(r),x=M.toneMapping,M.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(M,w){M.toneMapping=x,d=!0;let y=r,I=a;for(let A=0;A<m.length;A++){const P=m[A];if(P.enabled!==!1&&(P.render(M,I,y,w),P.needsSwap!==!1)){const g=y;y=I,I=g}}if(h!==M.outputColorSpace||f!==M.toneMapping){h=M.outputColorSpace,f=M.toneMapping,l.defines={},tt.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const A=Dv[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(E),M.render(c,u),E=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const dd=new Gt,zl=new Ls(1,1),pd=new Jh,md=new $_,_d=new sd,sf=[],rf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Fs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fa(n,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),Dt(t,i)}}function Bv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;of.set(i),n.uniformMatrix3fv(this.addr,!1,of),Dt(t,i)}}function zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Dt(t,i)}}function Hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Wv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?mc:pc,r=zl):r=dd,t.setTexture2D(e||r,s)}function Kv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||md,s)}function $v(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_d,s)}function Zv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pd,s)}function Jv(n){switch(n){case 5126:return Iv;case 35664:return Uv;case 35665:return Nv;case 35666:return Fv;case 35674:return Ov;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return kv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Zv}}function Qv(n,e){n.uniform1fv(this.addr,e)}function eS(n,e){const t=Fs(e,this.size,2);n.uniform2fv(this.addr,t)}function tS(n,e){const t=Fs(e,this.size,3);n.uniform3fv(this.addr,t)}function nS(n,e){const t=Fs(e,this.size,4);n.uniform4fv(this.addr,t)}function iS(n,e){const t=Fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sS(n,e){const t=Fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rS(n,e){const t=Fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aS(n,e){n.uniform1iv(this.addr,e)}function oS(n,e){n.uniform2iv(this.addr,e)}function lS(n,e){n.uniform3iv(this.addr,e)}function cS(n,e){n.uniform4iv(this.addr,e)}function uS(n,e){n.uniform1uiv(this.addr,e)}function fS(n,e){n.uniform2uiv(this.addr,e)}function hS(n,e){n.uniform3uiv(this.addr,e)}function dS(n,e){n.uniform4uiv(this.addr,e)}function pS(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zl:a=dd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function mS(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||md,r[a])}function _S(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_d,r[a])}function gS(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pd,r[a])}function xS(n){switch(n){case 5126:return Qv;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return sS;case 35676:return rS;case 5124:case 35670:return aS;case 35667:case 35671:return oS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return fS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return gS}}class vS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}}class SS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xS(t.type)}}class MS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function cf(n,e){n.seq.push(e),n.map[e.id]=e}function ES(n,e,t){const i=n.name,s=i.length;for(Do.lastIndex=0;;){const r=Do.exec(i),a=Do.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cf(t,c===void 0?new vS(o,n,e):new SS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new MS(o),cf(t,h)),t=h}}}class aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ES(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function uf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yS=37297;let bS=0;function TS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ff=new Xe;function AS(n){tt._getMatrix(ff,tt.workingColorSpace,n);const e=`mat3( ${ff.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+TS(n.getShaderSource(e),o)}else return r}function wS(n,e){const t=AS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const RS={[Fh]:"Linear",[Oh]:"Reinhard",[Bh]:"Cineon",[zh]:"ACESFilmic",[Gh]:"AgX",[Vh]:"Neutral",[Hh]:"Custom"};function CS(n,e){const t=RS[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new H;function PS(){tt.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function LS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zs(n){return n!==""}function df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const US=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(US,FS)}const NS=new Map;function FS(n,e){let t=$e[e];if(t===void 0){const i=NS.get(e);if(i!==void 0)t=$e[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hl(t)}const OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(n){return n.replace(OS,BS)}function BS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zS={[ea]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function HS(n){return zS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GS={[Qi]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function VS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":GS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const kS={[Ds]:"ENVMAP_MODE_REFRACTION"};function WS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XS={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[R_]:"ENVMAP_BLENDING_MIX",[C_]:"ENVMAP_BLENDING_ADD"};function qS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":XS[n.combine]||"ENVMAP_BLENDING_NONE"}function YS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=HS(t),c=VS(t),u=WS(t),h=qS(t),f=YS(t),d=DS(t),x=LS(r),E=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Vn?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,wS("linearToOutputTexel",t.outputColorSpace),PS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Hl(a),a=df(a,t),a=pf(a,t),o=Hl(o),o=df(o,t),o=pf(o,t),a=mf(a),o=mf(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+a,y=M+p+o,I=uf(s,s.VERTEX_SHADER,w),A=uf(s,s.FRAGMENT_SHADER,y);s.attachShader(E,I),s.attachShader(E,A),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(C){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(I)||"",Z=s.getShaderInfoLog(A)||"",O=L.trim(),G=X.trim(),z=Z.trim();let Q=!0,le=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,I,A);else{const Me=hf(s,I,"vertex"),we=hf(s,A,"fragment");it("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+Me+`
`+we)}else O!==""?He("WebGLProgram: Program Info Log:",O):(G===""||z==="")&&(le=!1);le&&(C.diagnostics={runnable:Q,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(A),g=new aa(s,E),b=IS(s,E)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(E,yS)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bS++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=A,this}let KS=0;class $S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZS(e),t.set(e,i)),i}}class ZS{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}}function JS(n){return n===es||n===ma||n===_a}function QS(n,e,t,i,s,r){const a=new Qh,o=new $S,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function E(g,b,N,C,L,X){const Z=C.fog,O=L.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Q=e.get(g.envMap||G,z),le=Q&&Q.mapping===Ia?Q.image.height:null,Me=d[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&He("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const we=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Pe=we!==void 0?we.length:0;let Qe=0;O.morphAttributes.position!==void 0&&(Qe=1),O.morphAttributes.normal!==void 0&&(Qe=2),O.morphAttributes.color!==void 0&&(Qe=3);let at,We,ae,Ee;if(Me){const qe=Nn[Me];at=qe.vertexShader,We=qe.fragmentShader}else at=g.vertexShader,We=g.fragmentShader,o.update(g),ae=o.getVertexShaderID(g),Ee=o.getFragmentShaderID(g);const _e=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,ze=L.isBatchedMesh===!0,R=!!g.map,D=!!g.matcap,k=!!Q,ee=!!g.aoMap,Y=!!g.lightMap,ne=!!g.bumpMap,ce=!!g.normalMap,de=!!g.displacementMap,T=!!g.emissiveMap,ie=!!g.metalnessMap,me=!!g.roughnessMap,ue=g.anisotropy>0,J=g.clearcoat>0,Re=g.dispersion>0,S=g.iridescence>0,_=g.sheen>0,F=g.transmission>0,j=ue&&!!g.anisotropyMap,se=J&&!!g.clearcoatMap,fe=J&&!!g.clearcoatNormalMap,he=J&&!!g.clearcoatRoughnessMap,$=S&&!!g.iridescenceMap,re=S&&!!g.iridescenceThicknessMap,ge=_&&!!g.sheenColorMap,ye=_&&!!g.sheenRoughnessMap,xe=!!g.specularMap,pe=!!g.specularColorMap,Ve=!!g.specularIntensityMap,Ke=F&&!!g.transmissionMap,st=F&&!!g.thicknessMap,U=!!g.gradientMap,ve=!!g.alphaMap,te=g.alphaTest>0,Ce=!!g.alphaHash,Se=!!g.extensions;let oe=Vn;g.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(oe=n.toneMapping);const Ue={shaderID:Me,shaderType:g.type,shaderName:g.name,vertexShader:at,fragmentShader:We,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:ze,batchingColor:ze&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:R,matcap:D,envMap:k,envMapMode:k&&Q.mapping,envMapCubeUVHeight:le,aoMap:ee,lightMap:Y,bumpMap:ne,normalMap:ce,displacementMap:de,emissiveMap:T,normalMapObjectSpace:ce&&g.normalMapType===L_,normalMapTangentSpace:ce&&g.normalMapType===Nl,packedNormalMap:ce&&g.normalMapType===Nl&&JS(g.normalMap.format),metalnessMap:ie,roughnessMap:me,anisotropy:ue,anisotropyMap:j,clearcoat:J,clearcoatMap:se,clearcoatNormalMap:fe,clearcoatRoughnessMap:he,dispersion:Re,iridescence:S,iridescenceMap:$,iridescenceThicknessMap:re,sheen:_,sheenColorMap:ge,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ve,transmission:F,transmissionMap:Ke,thicknessMap:st,gradientMap:U,opaque:g.transparent===!1&&g.blending===ws&&g.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:Ce,combine:g.combine,mapUv:R&&x(g.map.channel),aoMapUv:ee&&x(g.aoMap.channel),lightMapUv:Y&&x(g.lightMap.channel),bumpMapUv:ne&&x(g.bumpMap.channel),normalMapUv:ce&&x(g.normalMap.channel),displacementMapUv:de&&x(g.displacementMap.channel),emissiveMapUv:T&&x(g.emissiveMap.channel),metalnessMapUv:ie&&x(g.metalnessMap.channel),roughnessMapUv:me&&x(g.roughnessMap.channel),anisotropyMapUv:j&&x(g.anisotropyMap.channel),clearcoatMapUv:se&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(g.sheenRoughnessMap.channel),specularMapUv:xe&&x(g.specularMap.channel),specularColorMapUv:pe&&x(g.specularColorMap.channel),specularIntensityMapUv:Ve&&x(g.specularIntensityMap.channel),transmissionMapUv:Ke&&x(g.transmissionMap.channel),thicknessMapUv:st&&x(g.thicknessMap.channel),alphaMapUv:ve&&x(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||ue),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(R||ve),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&ce===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Oe,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:R&&g.map.isVideoTexture===!0&&tt.getTransfer(g.map.colorSpace)===ct,decodeVideoTextureEmissive:T&&g.emissiveMap.isVideoTexture===!0&&tt.getTransfer(g.emissiveMap.colorSpace)===ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===On,flipSided:g.side===Jt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Se&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&g.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)b.push(N),b.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(p(b,g),M(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),g.push(a.mask)}function w(g){const b=d[g.type];let N;if(b){const C=Nn[b];N=vg.clone(C.uniforms)}else N=g.uniforms;return N}function y(g,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new jS(n,b,g,s),c.push(N),u.set(b,N)),N}function I(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function P(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:P}}function eM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,x,E,m,p){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:x,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:m,group:p},n[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=x,M.materialVariant=a(f),M.groupOrder=E,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function l(f,d,x,E,m,p){const M=o(f,d,x,E,m,p);x.transmission>0?i.push(M):x.transparent===!0?s.push(M):t.push(M)}function c(f,d,x,E,m,p){const M=o(f,d,x,E,m,p);x.transmission>0?i.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function u(f,d){t.length>1&&t.sort(f||tM),i.length>1&&i.sort(d||gf),s.length>1&&s.sort(d||gf)}function h(){for(let f=e,d=n.length;f<d;f++){const x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function nM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new xf,n.set(i,[a])):s>=r.length?(a=new xf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function iM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rM=0;function aM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n){const e=new iM,t=sM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new Et,a=new Et;function o(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,x=0,E=0,m=0,p=0,M=0,w=0,y=0,I=0,A=0,P=0;c.sort(aM);for(let b=0,N=c.length;b<N;b++){const C=c[b],L=C.color,X=C.intensity,Z=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===es?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*X,h+=L.g*X,f+=L.b*X;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],X);P++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,Q=t.get(C);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=G,d++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(L).multiplyScalar(X),G.distance=Z,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[E]=G;const z=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,z.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[E]=z.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,i.spotShadow[E]=Q,i.spotShadowMap[E]=O,y++}E++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(L).multiplyScalar(X),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const z=C.shadow,Q=t.get(C);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,i.pointShadow[x]=Q,i.pointShadowMap[x]=O,i.pointShadowMatrix[x]=C.shadow.matrix,w++}i.point[x]=G,x++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(X),G.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==d||g.pointLength!==x||g.spotLength!==E||g.rectAreaLength!==m||g.hemiLength!==p||g.numDirectionalShadows!==M||g.numPointShadows!==w||g.numSpotShadows!==y||g.numSpotMaps!==I||g.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=E,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,g.directionalLength=d,g.pointLength=x,g.spotLength=E,g.rectAreaLength=m,g.hemiLength=p,g.numDirectionalShadows=M,g.numPointShadows=w,g.numSpotShadows=y,g.numSpotMaps=I,g.numLightProbes=P,i.version=rM++)}function l(c,u){let h=0,f=0,d=0,x=0,E=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const w=c[p];if(w.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(w.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:i}}function vf(n){const e=new oM(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vf(n),e.set(s,[o])):r>=a.length?(o=new vf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fM=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],hM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sf=new Et,qs=new H,Lo=new H;function dM(n,e,t){let i=new vc;const s=new ke,r=new ke,a=new Mt,o=new yg,l=new bg,c={},u=t.maxTextureSize,h={[Di]:Jt,[Jt]:Di,[On]:On},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:cM,fragmentShader:uM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Tn;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new yn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let p=this.type;this.render=function(A,P,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===c_&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ea);const b=n.getRenderTarget(),N=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const X=p!==this.type;X&&P.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(O=>O.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,O=A.length;Z<O;Z++){const G=A[Z],z=G.shadow;if(z===void 0){He("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Q=z.getFrameExtents();s.multiply(Q),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,z.mapSize.y=r.y));const le=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=le,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ks){if(G.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new kn(s.x,s.y,{format:es,type:fi,minFilter:zt,magFilter:zt,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Ls(s.x,s.y,zn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=hi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut}else G.isPointLight?(z.map=new hd(s.x),z.map.depthTexture=new gg(s.x,Xn)):(z.map=new kn(s.x,s.y),z.map.depthTexture=new Ls(s.x,s.y,Xn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=hi,this.type===ea?(z.map.depthTexture.compareFunction=le?mc:pc,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut);z.camera.updateProjectionMatrix()}const Me=z.map.isWebGLCubeRenderTarget?6:1;for(let we=0;we<Me;we++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,we),n.clear();else{we===0&&(n.setRenderTarget(z.map),n.clear());const Pe=z.getViewport(we);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),L.viewport(a)}if(G.isPointLight){const Pe=z.camera,Qe=z.matrix,at=G.distance||Pe.far;at!==Pe.far&&(Pe.far=at,Pe.updateProjectionMatrix()),qs.setFromMatrixPosition(G.matrixWorld),Pe.position.copy(qs),Lo.copy(Pe.position),Lo.add(fM[we]),Pe.up.copy(hM[we]),Pe.lookAt(Lo),Pe.updateMatrixWorld(),Qe.makeTranslation(-qs.x,-qs.y,-qs.z),Sf.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Sf,Pe.coordinateSystem,Pe.reversedDepth)}else z.updateMatrices(G);i=z.getFrustum(),y(P,g,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ks&&M(z,g),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,N,C)};function M(A,P){const g=e.update(E);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(s.x,s.y,{format:es,type:fi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,g,f,E,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,g,d,E,null)}function w(A,P,g,b){let N=null;const C=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)N=C;else if(N=g.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=N.uuid,X=P.uuid;let Z=c[L];Z===void 0&&(Z={},c[L]=Z);let O=Z[X];O===void 0&&(O=N.clone(),Z[X]=O,P.addEventListener("dispose",I)),N=O}if(N.visible=P.visible,N.wireframe=P.wireframe,b===Ks?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:h[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,g.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=n.properties.get(N);L.light=g}return N}function y(A,P,g,b,N){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Ks)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const X=e.update(A),Z=A.material;if(Array.isArray(Z)){const O=X.groups;for(let G=0,z=O.length;G<z;G++){const Q=O[G],le=Z[Q.materialIndex];if(le&&le.visible){const Me=w(A,le,b,N);A.onBeforeShadow(n,A,P,g,X,Me,Q),n.renderBufferDirect(g,null,X,Me,A,Q),A.onAfterShadow(n,A,P,g,X,Me,Q)}}}else if(Z.visible){const O=w(A,Z,b,N);A.onBeforeShadow(n,A,P,g,X,O,null),n.renderBufferDirect(g,null,X,O,A,null),A.onAfterShadow(n,A,P,g,X,O,null)}}const L=A.children;for(let X=0,Z=L.length;X<Z;X++)y(L[X],P,g,b,N)}function I(A){A.target.removeEventListener("dispose",I);for(const g in c){const b=c[g],N=A.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function pM(n,e){function t(){let U=!1;const ve=new Mt;let te=null;const Ce=new Mt(0,0,0,0);return{setMask:function(Se){te!==Se&&!U&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){U=Se},setClear:function(Se,oe,Ue,qe,yt){yt===!0&&(Se*=qe,oe*=qe,Ue*=qe),ve.set(Se,oe,Ue,qe),Ce.equals(ve)===!1&&(n.clearColor(Se,oe,Ue,qe),Ce.copy(ve))},reset:function(){U=!1,te=null,Ce.set(-1,0,0,0)}}}function i(){let U=!1,ve=!1,te=null,Ce=null,Se=null;return{setReversed:function(oe){if(ve!==oe){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ve=oe;const qe=Se;Se=null,this.setClear(qe)}},getReversed:function(){return ve},setTest:function(oe){oe?_e(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(oe){te!==oe&&!U&&(n.depthMask(oe),te=oe)},setFunc:function(oe){if(ve&&(oe=V_[oe]),Ce!==oe){switch(oe){case $o:n.depthFunc(n.NEVER);break;case Zo:n.depthFunc(n.ALWAYS);break;case Jo:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case Qo:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Se!==oe&&(Se=oe,ve&&(oe=1-oe),n.clearDepth(oe))},reset:function(){U=!1,te=null,Ce=null,Se=null,ve=!1}}}function s(){let U=!1,ve=null,te=null,Ce=null,Se=null,oe=null,Ue=null,qe=null,yt=null;return{setTest:function(ut){U||(ut?_e(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(ut){ve!==ut&&!U&&(n.stencilMask(ut),ve=ut)},setFunc:function(ut,qn,An){(te!==ut||Ce!==qn||Se!==An)&&(n.stencilFunc(ut,qn,An),te=ut,Ce=qn,Se=An)},setOp:function(ut,qn,An){(oe!==ut||Ue!==qn||qe!==An)&&(n.stencilOp(ut,qn,An),oe=ut,Ue=qn,qe=An)},setLocked:function(ut){U=ut},setClear:function(ut){yt!==ut&&(n.clearStencil(ut),yt=ut)},reset:function(){U=!1,ve=null,te=null,Ce=null,Se=null,oe=null,Ue=null,qe=null,yt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,x=[],E=null,m=!1,p=null,M=null,w=null,y=null,I=null,A=null,P=null,g=new et(0,0,0),b=0,N=!1,C=null,L=null,X=null,Z=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(le)[1]),z=Q>=1):le.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),z=Q>=2);let Me=null,we={};const Pe=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),at=new Mt().fromArray(Pe),We=new Mt().fromArray(Qe);function ae(U,ve,te,Ce){const Se=new Uint8Array(4),oe=n.createTexture();n.bindTexture(U,oe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<te;Ue++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ve+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return oe}const Ee={};Ee[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(Ps),ne(!1),ce(gu),_e(n.CULL_FACE),ee(ri);function _e(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Oe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Be(U,ve){return f[U]!==ve?(n.bindFramebuffer(U,ve),f[U]=ve,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function ze(U,ve){let te=x,Ce=!1;if(U){te=d.get(ve),te===void 0&&(te=[],d.set(ve,te));const Se=U.textures;if(te.length!==Se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ue=Se.length;oe<Ue;oe++)te[oe]=n.COLOR_ATTACHMENT0+oe;te.length=Se.length,Ce=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(te)}function R(U){return E!==U?(n.useProgram(U),E=U,!0):!1}const D={[qi]:n.FUNC_ADD,[f_]:n.FUNC_SUBTRACT,[h_]:n.FUNC_REVERSE_SUBTRACT};D[d_]=n.MIN,D[p_]=n.MAX;const k={[m_]:n.ZERO,[__]:n.ONE,[g_]:n.SRC_COLOR,[jo]:n.SRC_ALPHA,[y_]:n.SRC_ALPHA_SATURATE,[M_]:n.DST_COLOR,[v_]:n.DST_ALPHA,[x_]:n.ONE_MINUS_SRC_COLOR,[Ko]:n.ONE_MINUS_SRC_ALPHA,[E_]:n.ONE_MINUS_DST_COLOR,[S_]:n.ONE_MINUS_DST_ALPHA,[b_]:n.CONSTANT_COLOR,[T_]:n.ONE_MINUS_CONSTANT_COLOR,[A_]:n.CONSTANT_ALPHA,[w_]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(U,ve,te,Ce,Se,oe,Ue,qe,yt,ut){if(U===ri){m===!0&&(Oe(n.BLEND),m=!1);return}if(m===!1&&(_e(n.BLEND),m=!0),U!==u_){if(U!==p||ut!==N){if((M!==qi||I!==qi)&&(n.blendEquation(n.FUNC_ADD),M=qi,I=qi),ut)switch(U){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yo:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",U);break}else switch(U){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xu:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",U);break}w=null,y=null,A=null,P=null,g.set(0,0,0),b=0,p=U,N=ut}return}Se=Se||ve,oe=oe||te,Ue=Ue||Ce,(ve!==M||Se!==I)&&(n.blendEquationSeparate(D[ve],D[Se]),M=ve,I=Se),(te!==w||Ce!==y||oe!==A||Ue!==P)&&(n.blendFuncSeparate(k[te],k[Ce],k[oe],k[Ue]),w=te,y=Ce,A=oe,P=Ue),(qe.equals(g)===!1||yt!==b)&&(n.blendColor(qe.r,qe.g,qe.b,yt),g.copy(qe),b=yt),p=U,N=!1}function Y(U,ve){U.side===On?Oe(n.CULL_FACE):_e(n.CULL_FACE);let te=U.side===Jt;ve&&(te=!te),ne(te),U.blending===ws&&U.transparent===!1?ee(ri):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ce=U.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),T(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){C!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),C=U)}function ce(U){U!==o_?(_e(n.CULL_FACE),U!==L&&(U===gu?n.cullFace(n.BACK):U===l_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),L=U}function de(U){U!==X&&(z&&n.lineWidth(U),X=U)}function T(U,ve,te){U?(_e(n.POLYGON_OFFSET_FILL),(Z!==ve||O!==te)&&(Z=ve,O=te,a.getReversed()&&(ve=-ve),n.polygonOffset(ve,te))):Oe(n.POLYGON_OFFSET_FILL)}function ie(U){U?_e(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function me(U){U===void 0&&(U=n.TEXTURE0+G-1),Me!==U&&(n.activeTexture(U),Me=U)}function ue(U,ve,te){te===void 0&&(Me===null?te=n.TEXTURE0+G-1:te=Me);let Ce=we[te];Ce===void 0&&(Ce={type:void 0,texture:void 0},we[te]=Ce),(Ce.type!==U||Ce.texture!==ve)&&(Me!==te&&(n.activeTexture(te),Me=te),n.bindTexture(U,ve||Ee[U]),Ce.type=U,Ce.texture=ve)}function J(){const U=we[Me];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Re(){try{n.compressedTexImage2D(...arguments)}catch(U){it("WebGLState:",U)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(U){it("WebGLState:",U)}}function _(){try{n.texSubImage2D(...arguments)}catch(U){it("WebGLState:",U)}}function F(){try{n.texSubImage3D(...arguments)}catch(U){it("WebGLState:",U)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(U){it("WebGLState:",U)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(U){it("WebGLState:",U)}}function fe(){try{n.texStorage2D(...arguments)}catch(U){it("WebGLState:",U)}}function he(){try{n.texStorage3D(...arguments)}catch(U){it("WebGLState:",U)}}function $(){try{n.texImage2D(...arguments)}catch(U){it("WebGLState:",U)}}function re(){try{n.texImage3D(...arguments)}catch(U){it("WebGLState:",U)}}function ge(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function ye(U,ve){h[U]!==ve&&(n.pixelStorei(U,ve),h[U]=ve)}function xe(U){at.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function pe(U){We.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function Ve(U,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let Ce=te.get(U);Ce===void 0&&(Ce=n.getUniformBlockIndex(ve,U.name),te.set(U,Ce))}function Ke(U,ve){const Ce=c.get(ve).get(U);l.get(ve)!==Ce&&(n.uniformBlockBinding(ve,Ce,U.__bindingPointIndex),l.set(ve,Ce))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Me=null,we={},f={},d=new WeakMap,x=[],E=null,m=!1,p=null,M=null,w=null,y=null,I=null,A=null,P=null,g=new et(0,0,0),b=0,N=!1,C=null,L=null,X=null,Z=null,O=null,at.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Oe,bindFramebuffer:Be,drawBuffers:ze,useProgram:R,setBlending:ee,setMaterial:Y,setFlipSided:ne,setCullFace:ce,setLineWidth:de,setPolygonOffset:T,setScissorTest:ie,activeTexture:me,bindTexture:ue,unbindTexture:J,compressedTexImage2D:Re,compressedTexImage3D:S,texImage2D:$,texImage3D:re,pixelStorei:ye,getParameter:ge,updateUBOMapping:Ve,uniformBlockBinding:Ke,texStorage2D:fe,texStorage3D:he,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:j,compressedTexSubImage3D:se,scissor:xe,viewport:pe,reset:st}}function mM(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,_){return x?new OffscreenCanvas(S,_):va("canvas")}function m(S,_,F){let j=1;const se=Re(S);if((se.width>F||se.height>F)&&(j=F/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const fe=Math.floor(j*se.width),he=Math.floor(j*se.height);f===void 0&&(f=E(fe,he));const $=_?E(fe,he):f;return $.width=fe,$.height=he,$.getContext("2d").drawImage(S,0,0,fe,he),He("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+fe+"x"+he+")."),$}else return"data"in S&&He("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),S;return S}function p(S){return S.generateMipmaps}function M(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,_,F,j,se,fe=!1){if(S!==null){if(n[S]!==void 0)return n[S];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he;j&&(he=e.get("EXT_texture_norm16"),he||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8),F===n.UNSIGNED_SHORT&&he&&($=he.R16_EXT),F===n.SHORT&&he&&($=he.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),_===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8),F===n.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),F===n.SHORT&&he&&($=he.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),F===n.SHORT&&he&&($=he.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){const re=fe?xa:tt.getTransfer(se);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=re===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),F===n.SHORT&&he&&($=he.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function I(S,_){let F;return S?_===null||_===Xn||_===pr?F=n.DEPTH24_STENCIL8:_===zn?F=n.DEPTH32F_STENCIL8:_===dr&&(F=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xn||_===pr?F=n.DEPTH_COMPONENT24:_===zn?F=n.DEPTH_COMPONENT32F:_===dr&&(F=n.DEPTH_COMPONENT16),F}function A(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ut&&S.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function P(S){const _=S.target;_.removeEventListener("dispose",P),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function g(S){const _=S.target;_.removeEventListener("dispose",g),C(_)}function b(S){const _=i.get(S);if(_.__webglInit===void 0)return;const F=S.source,j=d.get(F);if(j){const se=j[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(S),Object.keys(j).length===0&&d.delete(F)}i.remove(S)}function N(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const F=S.source,j=d.get(F);delete j[_.__cacheKey],a.memory.textures--}function C(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let se=0;se<_.__webglFramebuffer[j].length;se++)n.deleteFramebuffer(_.__webglFramebuffer[j][se]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=S.textures;for(let j=0,se=F.length;j<se;j++){const fe=i.get(F[j]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(F[j])}i.remove(S)}let L=0;function X(){L=0}function Z(){return L}function O(S){L=S}function G(){const S=L;return S>=s.maxTextures&&He("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),L+=1,S}function z(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Q(S,_){const F=i.get(S);if(S.isVideoTexture&&ue(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const j=S.image;if(j===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(F,S,_);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function le(S,_){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){Oe(F,S,_);return}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function Me(S,_){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){Oe(F,S,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function we(S,_){const F=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&F.__version!==S.version){Be(F,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const Pe={[il]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[sl]:n.MIRRORED_REPEAT},Qe={[Ut]:n.NEAREST,[P_]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[to]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},at={[I_]:n.NEVER,[B_]:n.ALWAYS,[U_]:n.LESS,[pc]:n.LEQUAL,[N_]:n.EQUAL,[mc]:n.GEQUAL,[F_]:n.GREATER,[O_]:n.NOTEQUAL};function We(S,_){if(_.type===zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===to||_.magFilter===wr||_.magFilter===ji||_.minFilter===zt||_.minFilter===to||_.minFilter===wr||_.minFilter===ji)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Pe[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Pe[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Pe[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Qe[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Qe[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,at[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==wr&&_.minFilter!==ji||_.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ae(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",P));const j=_.source;let se=d.get(j);se===void 0&&(se={},d.set(j,se));const fe=z(_);if(fe!==S.__cacheKey){se[fe]===void 0&&(se[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[fe].usedTimes++;const he=se[S.__cacheKey];he!==void 0&&(se[S.__cacheKey].usedTimes--,he.usedTimes===0&&N(_)),S.__cacheKey=fe,S.__webglTexture=se[fe].texture}return F}function Ee(S,_,F){return Math.floor(Math.floor(S/F)/_)}function _e(S,_,F,j){const fe=S.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,j,_.data);else{fe.sort((ye,xe)=>ye.start-xe.start);let he=0;for(let ye=1;ye<fe.length;ye++){const xe=fe[he],pe=fe[ye],Ve=xe.start+xe.count,Ke=Ee(pe.start,_.width,4),st=Ee(xe.start,_.width,4);pe.start<=Ve+1&&Ke===st&&Ee(pe.start+pe.count-1,_.width,4)===Ke?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++he,fe[he]=pe)}fe.length=he+1;const $=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ye=0,xe=fe.length;ye<xe;ye++){const pe=fe[ye],Ve=Math.floor(pe.start/4),Ke=Math.ceil(pe.count/4),st=Ve%_.width,U=Math.floor(Ve/_.width),ve=Ke,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,st,U,ve,te,F,j,_.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function Oe(S,_,F){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const se=ae(S,_),fe=_.source;t.bindTexture(j,S.__webglTexture,n.TEXTURE0+F);const he=i.get(fe);if(fe.version!==he.__version||se===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const te=tt.getPrimaries(tt.workingColorSpace),Ce=_.colorSpace===Ri?null:tt.getPrimaries(_.colorSpace),Se=_.colorSpace===Ri||te===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let re=m(_.image,!1,s.maxTextureSize);re=J(_,re);const ge=r.convert(_.format,_.colorSpace),ye=r.convert(_.type);let xe=y(_.internalFormat,ge,ye,_.normalized,_.colorSpace,_.isVideoTexture);We(j,_);let pe;const Ve=_.mipmaps,Ke=_.isVideoTexture!==!0,st=he.__version===void 0||se===!0,U=fe.dataReady,ve=A(_,re);if(_.isDepthTexture)xe=I(_.format===Ki,_.type),st&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,ge,ye,null));else if(_.isDataTexture)if(Ve.length>0){Ke&&st&&t.texStorage2D(n.TEXTURE_2D,ve,xe,Ve[0].width,Ve[0].height);for(let te=0,Ce=Ve.length;te<Ce;te++)pe=Ve[te],Ke?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,ye,pe.data):t.texImage2D(n.TEXTURE_2D,te,xe,pe.width,pe.height,0,ge,ye,pe.data);_.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(n.TEXTURE_2D,ve,xe,re.width,re.height),U&&_e(_,re,ge,ye)):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,ge,ye,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ke&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,xe,Ve[0].width,Ve[0].height,re.depth);for(let te=0,Ce=Ve.length;te<Ce;te++)if(pe=Ve[te],_.format!==xn)if(ge!==null)if(Ke){if(U)if(_.layerUpdates.size>0){const Se=$u(pe.width,pe.height,_.format,_.type);for(const oe of _.layerUpdates){const Ue=pe.data.subarray(oe*Se/pe.data.BYTES_PER_ELEMENT,(oe+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,oe,pe.width,pe.height,1,ge,Ue)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,re.depth,ge,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,xe,pe.width,pe.height,re.depth,0,pe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,re.depth,ge,ye,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,xe,pe.width,pe.height,re.depth,0,ge,ye,pe.data)}else{Ke&&st&&t.texStorage2D(n.TEXTURE_2D,ve,xe,Ve[0].width,Ve[0].height);for(let te=0,Ce=Ve.length;te<Ce;te++)pe=Ve[te],_.format!==xn?ge!==null?Ke?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,xe,pe.width,pe.height,0,pe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,ye,pe.data):t.texImage2D(n.TEXTURE_2D,te,xe,pe.width,pe.height,0,ge,ye,pe.data)}else if(_.isDataArrayTexture)if(Ke){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,xe,re.width,re.height,re.depth),U)if(_.layerUpdates.size>0){const te=$u(re.width,re.height,_.format,_.type);for(const Ce of _.layerUpdates){const Se=re.data.subarray(Ce*te/re.data.BYTES_PER_ELEMENT,(Ce+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,re.width,re.height,1,ge,ye,Se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,ye,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,ge,ye,re.data);else if(_.isData3DTexture)Ke?(st&&t.texStorage3D(n.TEXTURE_3D,ve,xe,re.width,re.height,re.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,ye,re.data)):t.texImage3D(n.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,ge,ye,re.data);else if(_.isFramebufferTexture){if(st)if(Ke)t.texStorage2D(n.TEXTURE_2D,ve,xe,re.width,re.height);else{let te=re.width,Ce=re.height;for(let Se=0;Se<ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,xe,te,Ce,0,ge,ye,null),te>>=1,Ce>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),re.parentNode!==te){te.appendChild(re),h.add(_),te.onpaint=qe=>{const yt=qe.changedElements;for(const ut of h)yt.includes(ut.image)&&(ut.needsUpdate=!0)},te.requestPaint();return}const Ce=0,Se=n.RGBA,oe=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ce,Se,oe,Ue,re),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ke&&st){const te=Re(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ve,xe,te.width,te.height)}for(let te=0,Ce=Ve.length;te<Ce;te++)pe=Ve[te],Ke?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,ye,pe):t.texImage2D(n.TEXTURE_2D,te,xe,ge,ye,pe);_.generateMipmaps=!1}else if(Ke){if(st){const te=Re(re);t.texStorage2D(n.TEXTURE_2D,ve,xe,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ye,re)}else t.texImage2D(n.TEXTURE_2D,0,xe,ge,ye,re);p(_)&&M(j),he.__version=fe.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Be(S,_,F){if(_.image.length!==6)return;const j=ae(S,_),se=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);const fe=i.get(se);if(se.version!==fe.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const he=tt.getPrimaries(tt.workingColorSpace),$=_.colorSpace===Ri?null:tt.getPrimaries(_.colorSpace),re=_.colorSpace===Ri||he===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,ye=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!ge&&!ye?xe[oe]=m(_.image[oe],!0,s.maxCubemapSize):xe[oe]=ye?_.image[oe].image:_.image[oe],xe[oe]=J(_,xe[oe]);const pe=xe[0],Ve=r.convert(_.format,_.colorSpace),Ke=r.convert(_.type),st=y(_.internalFormat,Ve,Ke,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ve=fe.__version===void 0||j===!0,te=se.dataReady;let Ce=A(_,pe);We(n.TEXTURE_CUBE_MAP,_);let Se;if(ge){U&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,st,pe.width,pe.height);for(let oe=0;oe<6;oe++){Se=xe[oe].mipmaps;for(let Ue=0;Ue<Se.length;Ue++){const qe=Se[Ue];_.format!==xn?Ve!==null?U?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,qe.width,qe.height,Ve,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,st,qe.width,qe.height,0,qe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,qe.width,qe.height,Ve,Ke,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,st,qe.width,qe.height,0,Ve,Ke,qe.data)}}}else{if(Se=_.mipmaps,U&&ve){Se.length>0&&Ce++;const oe=Re(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,st,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ye){U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ve,Ke,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,st,xe[oe].width,xe[oe].height,0,Ve,Ke,xe[oe].data);for(let Ue=0;Ue<Se.length;Ue++){const yt=Se[Ue].image[oe].image;U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,yt.width,yt.height,Ve,Ke,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,st,yt.width,yt.height,0,Ve,Ke,yt.data)}}else{U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ve,Ke,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,st,Ve,Ke,xe[oe]);for(let Ue=0;Ue<Se.length;Ue++){const qe=Se[Ue];U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,Ve,Ke,qe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,st,Ve,Ke,qe.image[oe])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),fe.__version=se.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ze(S,_,F,j,se,fe){const he=r.convert(F.format,F.colorSpace),$=r.convert(F.type),re=y(F.internalFormat,he,$,F.normalized,F.colorSpace),ge=i.get(_),ye=i.get(F);if(ye.__renderTarget=_,!ge.__hasExternalTextures){const xe=Math.max(1,_.width>>fe),pe=Math.max(1,_.height>>fe);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,fe,re,xe,pe,_.depth,0,he,$,null):t.texImage2D(se,fe,re,xe,pe,0,he,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,se,ye.__webglTexture,0,ie(_)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,se,ye.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(S,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const j=_.depthTexture,se=j&&j.isDepthTexture?j.type:null,fe=I(_.stencilBuffer,se),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(_),fe,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(_),fe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,fe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,S)}else{const j=_.textures;for(let se=0;se<j.length;se++){const fe=j[se],he=r.convert(fe.format,fe.colorSpace),$=r.convert(fe.type),re=y(fe.internalFormat,he,$,fe.normalized,fe.colorSpace);me(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(_),re,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(_),re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(S,_,F){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(_.depthTexture);if(se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(se.__webglInit===void 0&&(se.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),We(n.TEXTURE_CUBE_MAP,_.depthTexture);const ge=r.convert(_.depthTexture.format),ye=r.convert(_.depthTexture.type);let xe;_.depthTexture.format===hi?xe=n.DEPTH_COMPONENT24:_.depthTexture.format===Ki&&(xe=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,_.width,_.height,0,ge,ye,null)}}else Q(_.depthTexture,0);const fe=se.__webglTexture,he=ie(_),$=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,re=_.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===hi)me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,$,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,re,$,fe,0);else if(_.depthTexture.format===Ki)me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,$,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,re,$,fe,0);else throw new Error("Unknown depthTexture format")}function k(S){const _=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const j=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=j}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let j=0;j<6;j++)D(_.__webglFramebuffer[j],S,j);else{const j=S.texture.mipmaps;j&&j.length>0?D(_.__webglFramebuffer[0],S,0):D(_.__webglFramebuffer,S,0)}else if(F){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),R(_.__webglDepthbuffer[j],S,!1);else{const se=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,fe)}}else{const j=S.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),R(_.__webglDepthbuffer,S,!1);else{const se=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(S,_,F){const j=i.get(S);_!==void 0&&ze(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&k(S)}function Y(S){const _=S.texture,F=i.get(S),j=i.get(_);S.addEventListener("dispose",g);const se=S.textures,fe=S.isWebGLCubeRenderTarget===!0,he=se.length>1;if(he||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++),fe){F.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[$]=[];for(let re=0;re<_.mipmaps.length;re++)F.__webglFramebuffer[$][re]=n.createFramebuffer()}else F.__webglFramebuffer[$]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[$]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(he)for(let $=0,re=se.length;$<re;$++){const ge=i.get(se[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&me(S)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let $=0;$<se.length;$++){const re=se[$];F.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[$]);const ge=r.convert(re.format,re.colorSpace),ye=r.convert(re.type),xe=y(re.internalFormat,ge,ye,re.normalized,re.colorSpace,S.isXRRenderTarget===!0),pe=ie(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,F.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),R(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),We(n.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)ze(F.__webglFramebuffer[$][re],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re);else ze(F.__webglFramebuffer[$],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let $=0,re=se.length;$<re;$++){const ge=se[$],ye=i.get(ge);let xe=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(xe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ye.__webglTexture),We(xe,ge),ze(F.__webglFramebuffer,S,ge,n.COLOR_ATTACHMENT0+$,xe,0),p(ge)&&M(xe)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&($=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,j.__webglTexture),We($,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)ze(F.__webglFramebuffer[re],S,_,n.COLOR_ATTACHMENT0,$,re);else ze(F.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,$,0);p(_)&&M($),t.unbindTexture()}S.depthBuffer&&k(S)}function ne(S){const _=S.textures;for(let F=0,j=_.length;F<j;F++){const se=_[F];if(p(se)){const fe=w(S),he=i.get(se).__webglTexture;t.bindTexture(fe,he),M(fe),t.unbindTexture()}}}const ce=[],de=[];function T(S){if(S.samples>0){if(me(S)===!1){const _=S.textures,F=S.width,j=S.height;let se=n.COLOR_BUFFER_BIT;const fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),$=_.length>1;if($)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const re=S.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const ye=i.get(_[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,se,n.NEAREST),l===!0&&(ce.length=0,de.length=0,ce.push(n.COLOR_ATTACHMENT0+ge),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ce.push(fe),de.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const ye=i.get(_[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ie(S){return Math.min(s.maxSamples,S.samples)}function me(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ue(S){const _=a.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function J(S,_){const F=S.colorSpace,j=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==ga&&F!==Ri&&(tt.getTransfer(F)===ct?(j!==xn||se!==rn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",F)),_}function Re(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=le,this.setTexture3D=Me,this.setTextureCube=we,this.rebindTextures=ee,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _M(n,e){function t(i,s=Ri){let r;const a=tt.getTransfer(s);if(i===rn)return n.UNSIGNED_BYTE;if(i===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===jh)return n.ALPHA;if(i===Kh)return n.RGB;if(i===xn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===$h)return n.RED;if(i===fc)return n.RED_INTEGER;if(i===es)return n.RG;if(i===hc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===sa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===al||i===ol||i===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ul||i===fl||i===hl||i===dl||i===ma||i===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===ul)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return r.COMPRESSED_R11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ma)return r.COMPRESSED_RG11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ml||i===_l||i===gl||i===xl||i===vl||i===Sl||i===Ml||i===El||i===yl||i===bl||i===Tl||i===Al||i===wl||i===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===Pl||i===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Il||i===_a||i===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:gM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SM extends Ui{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,x=null;const E=typeof XRWebGLBinding<"u",m=new vM,p={},M=t.getContextAttributes();let w=null,y=null;const I=[],A=[],P=new ke;let g=null;const b=new sn;b.viewport=new Mt;const N=new sn;N.viewport=new Mt;const C=[b,N],L=new Cg;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Ee=I[ae];return Ee===void 0&&(Ee=new lo,I[ae]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ae){let Ee=I[ae];return Ee===void 0&&(Ee=new lo,I[ae]=Ee),Ee.getGripSpace()},this.getHand=function(ae){let Ee=I[ae];return Ee===void 0&&(Ee=new lo,I[ae]=Ee),Ee.getHandSpace()};function O(ae){const Ee=A.indexOf(ae.inputSource);if(Ee===-1)return;const _e=I[Ee];_e!==void 0&&(_e.update(ae.inputSource,ae.frame,c||a),_e.dispatchEvent({type:ae.type,data:ae.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let ae=0;ae<I.length;ae++){const Ee=A[ae];Ee!==null&&(A[ae]=null,I[ae].disconnect(Ee))}X=null,Z=null,m.reset();for(const ae in p)delete p[ae];e.setRenderTarget(w),d=null,f=null,h=null,s=null,y=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Be=null;M.depth&&(Be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?Ki:hi,Oe=M.stencil?pr:Xn);const ze={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new kn(f.textureWidth,f.textureHeight,{format:xn,type:rn,depthTexture:new Ls(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new kn(d.framebufferWidth,d.framebufferHeight,{format:xn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(ae){for(let Ee=0;Ee<ae.removed.length;Ee++){const _e=ae.removed[Ee],Oe=A.indexOf(_e);Oe>=0&&(A[Oe]=null,I[Oe].disconnect(_e))}for(let Ee=0;Ee<ae.added.length;Ee++){const _e=ae.added[Ee];let Oe=A.indexOf(_e);if(Oe===-1){for(let ze=0;ze<I.length;ze++)if(ze>=A.length){A.push(_e),Oe=ze;break}else if(A[ze]===null){A[ze]=_e,Oe=ze;break}if(Oe===-1)break}const Be=I[Oe];Be&&Be.connect(_e)}}const Q=new H,le=new H;function Me(ae,Ee,_e){Q.setFromMatrixPosition(Ee.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const Oe=Q.distanceTo(le),Be=Ee.projectionMatrix.elements,ze=_e.projectionMatrix.elements,R=Be[14]/(Be[10]-1),D=Be[14]/(Be[10]+1),k=(Be[9]+1)/Be[5],ee=(Be[9]-1)/Be[5],Y=(Be[8]-1)/Be[0],ne=(ze[8]+1)/ze[0],ce=R*Y,de=R*ne,T=Oe/(-Y+ne),ie=T*-Y;if(Ee.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ie),ae.translateZ(T),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Be[10]===-1)ae.projectionMatrix.copy(Ee.projectionMatrix),ae.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const me=R+T,ue=D+T,J=ce-ie,Re=de+(Oe-ie),S=k*D/ue*me,_=ee*D/ue*me;ae.projectionMatrix.makePerspective(J,Re,S,_,me,ue),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function we(ae,Ee){Ee===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Ee.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let Ee=ae.near,_e=ae.far;m.texture!==null&&(m.depthNear>0&&(Ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),L.near=N.near=b.near=Ee,L.far=N.far=b.far=_e,(X!==L.near||Z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),X=L.near,Z=L.far),L.layers.mask=ae.layers.mask|6,b.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Oe=ae.parent,Be=L.cameras;we(L,Oe);for(let ze=0;ze<Be.length;ze++)we(Be[ze],Oe);Be.length===2?Me(L,b,N):L.projectionMatrix.copy(b.projectionMatrix),Pe(ae,L,Oe)};function Pe(ae,Ee,_e){_e===null?ae.matrix.copy(Ee.matrixWorld):(ae.matrix.copy(_e.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Ee.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Ee.projectionMatrix),ae.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ol*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ae){l=ae,f!==null&&(f.fixedFoveation=ae),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(ae){return p[ae]};let Qe=null;function at(ae,Ee){if(u=Ee.getViewerPose(c||a),x=Ee,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,Oe=!0);for(let D=0;D<_e.length;D++){const k=_e[D];let ee=null;if(d!==null)ee=d.getViewport(k);else{const ne=h.getViewSubImage(f,k);ee=ne.viewport,D===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let Y=C[D];Y===void 0&&(Y=new sn,Y.layers.enable(D),Y.viewport=new Mt,C[D]=Y),Y.matrix.fromArray(k.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(k.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ee.x,ee.y,ee.width,ee.height),D===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Oe===!0&&L.cameras.push(Y)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const D=h.getDepthInformation(_e[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Be&&Be.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<_e.length;D++){const k=_e[D].camera;if(k){let ee=p[k];ee||(ee=new rd,p[k]=ee);const Y=h.getCameraImage(k);ee.sourceTexture=Y}}}}for(let _e=0;_e<I.length;_e++){const Oe=A[_e],Be=I[_e];Oe!==null&&Be!==void 0&&Be.update(Oe,Ee,c||a)}Qe&&Qe(ae,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),x=null}const We=new ud;We.setAnimationLoop(at),this.setAnimationLoop=function(ae){Qe=ae},this.dispose=function(){}}}const MM=new Et,gd=new Xe;gd.set(-1,0,0,0,1,0,0,0,1);function EM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ad(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const y=w.program;i.uniformBlockBinding(M,y)}function c(M,w){let y=s[M.id];y===void 0&&(x(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));const I=w.program;i.updateUBOMapping(M,I);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const w=h();M.__bindingPointIndex=w;const y=n.createBuffer(),I=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const w=s[M.id],y=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,P=y.length;A<P;A++){const g=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,N=g.length;b<N;b++){const C=g[b];if(d(C,A,b,I)===!0){const L=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let Z=0;for(let O=0;O<X.length;O++){const G=X[O],z=E(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,L+Z,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):ArrayBuffer.isView(G)?C.__data.set(new G.constructor(G.buffer,G.byteOffset,C.__data.length)):(G.toArray(C.__data,Z),Z+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,y,I){const A=M.value,P=w+"_"+y;if(I[P]===void 0)return typeof A=="number"||typeof A=="boolean"?I[P]=A:ArrayBuffer.isView(A)?I[P]=A.slice():I[P]=A.clone(),!0;{const g=I[P];if(typeof A=="number"||typeof A=="boolean"){if(g!==A)return I[P]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(g.equals(A)===!1)return g.copy(A),!0}}return!1}function x(M){const w=M.uniforms;let y=0;const I=16;for(let P=0,g=w.length;P<g;P++){const b=Array.isArray(w[P])?w[P]:[w[P]];for(let N=0,C=b.length;N<C;N++){const L=b[N],X=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,O=X.length;Z<O;Z++){const G=X[Z],z=E(G),Q=y%I,le=Q%z.boundary,Me=Q+le;y+=le,Me!==0&&I-Me<z.storage&&(y+=I-Me),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=z.storage}}}const A=y%I;return A>0&&(y+=I-A),M.__size=y,M.__cache={},this}function E(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):He("WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const bM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function TM(){return Pn===null&&(Pn=new ug(bM,16,16,es,fi),Pn.name="DFG_LUT",Pn.minFilter=zt,Pn.magFilter=zt,Pn.wrapS=si,Pn.wrapT=si,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class AM{constructor(e={}){const{canvas:t=H_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=rn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=d,m=new Set([dc,hc,fc]),p=new Set([rn,Xn,dr,pr,cc,uc]),M=new Uint32Array(4),w=new Int32Array(4),y=new H;let I=null,A=null;const P=[],g=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let C=!1,L=null;this._outputColorSpace=un;let X=0,Z=0,O=null,G=-1,z=null;const Q=new Mt,le=new Mt;let Me=null;const we=new et(0);let Pe=0,Qe=t.width,at=t.height,We=1,ae=null,Ee=null;const _e=new Mt(0,0,Qe,at),Oe=new Mt(0,0,Qe,at);let Be=!1;const ze=new vc;let R=!1,D=!1;const k=new Et,ee=new H,Y=new Mt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function de(){return O===null?We:1}let T=i;function ie(v,B){return t.getContext(v,B)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",qe,!1),T===null){const B="webgl2";if(T=ie(B,v),T===null)throw ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw it("WebGLRenderer: "+v.message),v}let me,ue,J,Re,S,_,F,j,se,fe,he,$,re,ge,ye,xe,pe,Ve,Ke,st,U,ve,te;function Ce(){me=new Tv(T),me.init(),U=new _M(T,me),ue=new gv(T,me,e,U),J=new pM(T,me),ue.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),Re=new Rv(T),S=new eM,_=new mM(T,me,J,S,ue,U,Re),F=new bv(N),j=new Lg(T),ve=new mv(T,j),se=new Av(T,j,Re,ve),fe=new Pv(T,se,j,ve,Re),Ve=new Cv(T,ue,_),ye=new xv(S),he=new QS(N,F,me,ue,ve,ye),$=new EM(N,S),re=new nM,ge=new lM(me),pe=new pv(N,F,J,fe,x,l),xe=new dM(N,fe,ue),te=new yM(T,Re,ue,J),Ke=new _v(T,me,Re),st=new wv(T,me,Re),Re.programs=he.programs,N.capabilities=ue,N.extensions=me,N.properties=S,N.renderLists=re,N.shadowMap=xe,N.state=J,N.info=Re}Ce(),E!==rn&&(b=new Lv(E,t.width,t.height,s,r));const Se=new SM(N,T);this.xr=Se,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(v){v!==void 0&&(We=v,this.setSize(Qe,at,!1))},this.getSize=function(v){return v.set(Qe,at)},this.setSize=function(v,B,q=!0){if(Se.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=v,at=B,t.width=Math.floor(v*We),t.height=Math.floor(B*We),q===!0&&(t.style.width=v+"px",t.style.height=B+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(Qe*We,at*We).floor()},this.setDrawingBufferSize=function(v,B,q){Qe=v,at=B,We=q,t.width=Math.floor(v*q),t.height=Math.floor(B*q),this.setViewport(0,0,v,B)},this.setEffects=function(v){if(E===rn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let B=0;B<v.length;B++)if(v[B].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,B,q,V){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,B,q,V),J.viewport(Q.copy(_e).multiplyScalar(We).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,B,q,V){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,B,q,V),J.scissor(le.copy(Oe).multiplyScalar(We).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(v){J.setScissorTest(Be=v)},this.setOpaqueSort=function(v){ae=v},this.setTransparentSort=function(v){Ee=v},this.getClearColor=function(v){return v.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(v=!0,B=!0,q=!0){let V=0;if(v){let W=!1;if(O!==null){const Ae=O.texture.format;W=m.has(Ae)}if(W){const Ae=O.texture.type,Le=p.has(Ae),Te=pe.getClearColor(),Ie=pe.getClearAlpha(),Ne=Te.r,Ye=Te.g,Ze=Te.b;Le?(M[0]=Ne,M[1]=Ye,M[2]=Ze,M[3]=Ie,T.clearBufferuiv(T.COLOR,0,M)):(w[0]=Ne,w[1]=Ye,w[2]=Ze,w[3]=Ie,T.clearBufferiv(T.COLOR,0,w))}else V|=T.COLOR_BUFFER_BIT}B&&(V|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),L=v},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),pe.dispose(),re.dispose(),ge.dispose(),S.dispose(),F.dispose(),fe.dispose(),ve.dispose(),te.dispose(),he.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",wc),Se.removeEventListener("sessionend",Rc),Ni.stop()};function oe(v){v.preventDefault(),bu("WebGLRenderer: Context Lost."),C=!0}function Ue(){bu("WebGLRenderer: Context Restored."),C=!1;const v=Re.autoReset,B=xe.enabled,q=xe.autoUpdate,V=xe.needsUpdate,W=xe.type;Ce(),Re.autoReset=v,xe.enabled=B,xe.autoUpdate=q,xe.needsUpdate=V,xe.type=W}function qe(v){it("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function yt(v){const B=v.target;B.removeEventListener("dispose",yt),ut(B)}function ut(v){qn(v),S.remove(v)}function qn(v){const B=S.get(v).programs;B!==void 0&&(B.forEach(function(q){he.releaseProgram(q)}),v.isShaderMaterial&&he.releaseShaderCache(v))}this.renderBufferDirect=function(v,B,q,V,W,Ae){B===null&&(B=ne);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Te=Md(v,B,q,V,W);J.setMaterial(V,Le);let Ie=q.index,Ne=1;if(V.wireframe===!0){if(Ie=se.getWireframeAttribute(q),Ie===void 0)return;Ne=2}const Ye=q.drawRange,Ze=q.attributes.position;let Fe=Ye.start*Ne,ft=(Ye.start+Ye.count)*Ne;Ae!==null&&(Fe=Math.max(Fe,Ae.start*Ne),ft=Math.min(ft,(Ae.start+Ae.count)*Ne)),Ie!==null?(Fe=Math.max(Fe,0),ft=Math.min(ft,Ie.count)):Ze!=null&&(Fe=Math.max(Fe,0),ft=Math.min(ft,Ze.count));const bt=ft-Fe;if(bt<0||bt===1/0)return;ve.setup(W,V,Te,q,Ie);let St,dt=Ke;if(Ie!==null&&(St=j.get(Ie),dt=st,dt.setIndex(St)),W.isMesh)V.wireframe===!0?(J.setLineWidth(V.wireframeLinewidth*de()),dt.setMode(T.LINES)):dt.setMode(T.TRIANGLES);else if(W.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),J.setLineWidth(Nt*de()),W.isLineSegments?dt.setMode(T.LINES):W.isLineLoop?dt.setMode(T.LINE_LOOP):dt.setMode(T.LINE_STRIP)}else W.isPoints?dt.setMode(T.POINTS):W.isSprite&&dt.setMode(T.TRIANGLES);if(W.isBatchedMesh)if(me.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Nt=W._multiDrawStarts,De=W._multiDrawCounts,Qt=W._multiDrawCount,nt=Ie?j.get(Ie).bytesPerElement:1,on=S.get(V).currentProgram.getUniforms();for(let wn=0;wn<Qt;wn++)on.setValue(T,"_gl_DrawID",wn),dt.render(Nt[wn]/nt,De[wn])}else if(W.isInstancedMesh)dt.renderInstances(Fe,bt,W.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,De=Math.min(q.instanceCount,Nt);dt.renderInstances(Fe,bt,De)}else dt.render(Fe,bt)};function An(v,B,q){v.transparent===!0&&v.side===On&&v.forceSinglePass===!1?(v.side=Jt,v.needsUpdate=!0,yr(v,B,q),v.side=Di,v.needsUpdate=!0,yr(v,B,q),v.side=On):yr(v,B,q)}this.compile=function(v,B,q=null){q===null&&(q=v),A=ge.get(q),A.init(B),g.push(A),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),v!==q&&v.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const V=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const Te=Ae[Le];An(Te,q,W),V.add(Te)}else An(Ae,q,W),V.add(Ae)}),A=g.pop(),V},this.compileAsync=function(v,B,q=null){const V=this.compile(v,B,q);return new Promise(W=>{function Ae(){if(V.forEach(function(Le){S.get(Le).currentProgram.isReady()&&V.delete(Le)}),V.size===0){W(v);return}setTimeout(Ae,10)}me.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Oa=null;function vd(v){Oa&&Oa(v)}function wc(){Ni.stop()}function Rc(){Ni.start()}const Ni=new ud;Ni.setAnimationLoop(vd),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(v){Oa=v,Se.setAnimationLoop(v),v===null?Ni.stop():Ni.start()},Se.addEventListener("sessionstart",wc),Se.addEventListener("sessionend",Rc),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(v,B);const q=Se.enabled===!0&&Se.isPresenting===!0,V=b!==null&&(O===null||q)&&b.begin(N,O);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(B),B=Se.getCamera()),v.isScene===!0&&v.onBeforeRender(N,v,B,O),A=ge.get(v,g.length),A.init(B),A.state.textureUnits=_.getTextureUnits(),g.push(A),k.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ze.setFromProjectionMatrix(k,Hn,B.reversedDepth),D=this.localClippingEnabled,R=ye.init(this.clippingPlanes,D),I=re.get(v,P.length),I.init(),P.push(I),Se.enabled===!0&&Se.isPresenting===!0){const Le=N.xr.getDepthSensingMesh();Le!==null&&Ba(Le,B,-1/0,N.sortObjects)}Ba(v,B,0,N.sortObjects),I.finish(),N.sortObjects===!0&&I.sort(ae,Ee),ce=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ce&&pe.addToRenderList(I,v),this.info.render.frame++,R===!0&&ye.beginShadows();const W=A.state.shadowsArray;if(xe.render(W,v,B),R===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&b.hasRenderPass())===!1){const Le=I.opaque,Te=I.transmissive;if(A.setupLights(),B.isArrayCamera){const Ie=B.cameras;if(Te.length>0)for(let Ne=0,Ye=Ie.length;Ne<Ye;Ne++){const Ze=Ie[Ne];Pc(Le,Te,v,Ze)}ce&&pe.render(v);for(let Ne=0,Ye=Ie.length;Ne<Ye;Ne++){const Ze=Ie[Ne];Cc(I,v,Ze,Ze.viewport)}}else Te.length>0&&Pc(Le,Te,v,B),ce&&pe.render(v),Cc(I,v,B)}O!==null&&Z===0&&(_.updateMultisampleRenderTarget(O),_.updateRenderTargetMipmap(O)),V&&b.end(N),v.isScene===!0&&v.onAfterRender(N,v,B),ve.resetDefaultState(),G=-1,z=null,g.pop(),g.length>0?(A=g[g.length-1],_.setTextureUnits(A.state.textureUnits),R===!0&&ye.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?I=P[P.length-1]:I=null,L!==null&&L.renderEnd()};function Ba(v,B,q,V){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(B);else if(v.isLightProbeGrid)A.pushLightProbeGrid(v);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ze.intersectsSprite(v)){V&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(k);const Le=fe.update(v),Te=v.material;Te.visible&&I.push(v,Le,Te,q,Y.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ze.intersectsObject(v))){const Le=fe.update(v),Te=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Y.copy(v.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Y.copy(Le.boundingSphere.center)),Y.applyMatrix4(v.matrixWorld).applyMatrix4(k)),Array.isArray(Te)){const Ie=Le.groups;for(let Ne=0,Ye=Ie.length;Ne<Ye;Ne++){const Ze=Ie[Ne],Fe=Te[Ze.materialIndex];Fe&&Fe.visible&&I.push(v,Le,Fe,q,Y.z,Ze)}}else Te.visible&&I.push(v,Le,Te,q,Y.z,null)}}const Ae=v.children;for(let Le=0,Te=Ae.length;Le<Te;Le++)Ba(Ae[Le],B,q,V)}function Cc(v,B,q,V){const{opaque:W,transmissive:Ae,transparent:Le}=v;A.setupLightsView(q),R===!0&&ye.setGlobalState(N.clippingPlanes,q),V&&J.viewport(Q.copy(V)),W.length>0&&Er(W,B,q),Ae.length>0&&Er(Ae,B,q),Le.length>0&&Er(Le,B,q),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Pc(v,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const Fe=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new kn(1,1,{generateMipmaps:!0,type:Fe?fi:rn,minFilter:ji,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Ae=A.state.transmissionRenderTarget[V.id],Le=V.viewport||Q;Ae.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const Te=N.getRenderTarget(),Ie=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(we),Pe=N.getClearAlpha(),Pe<1&&N.setClearColor(16777215,.5),N.clear(),ce&&pe.render(q);const Ye=N.toneMapping;N.toneMapping=Vn;const Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),R===!0&&ye.setGlobalState(N.clippingPlanes,V),Er(v,q,V),_.updateMultisampleRenderTarget(Ae),_.updateRenderTargetMipmap(Ae),me.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ft=0,bt=B.length;ft<bt;ft++){const St=B[ft],{object:dt,geometry:Nt,material:De,group:Qt}=St;if(De.side===On&&dt.layers.test(V.layers)){const nt=De.side;De.side=Jt,De.needsUpdate=!0,Dc(dt,q,V,Nt,De,Qt),De.side=nt,De.needsUpdate=!0,Fe=!0}}Fe===!0&&(_.updateMultisampleRenderTarget(Ae),_.updateRenderTargetMipmap(Ae))}N.setRenderTarget(Te,Ie,Ne),N.setClearColor(we,Pe),Ze!==void 0&&(V.viewport=Ze),N.toneMapping=Ye}function Er(v,B,q){const V=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Ae=v.length;W<Ae;W++){const Le=v[W],{object:Te,geometry:Ie,group:Ne}=Le;let Ye=Le.material;Ye.allowOverride===!0&&V!==null&&(Ye=V),Te.layers.test(q.layers)&&Dc(Te,B,q,Ie,Ye,Ne)}}function Dc(v,B,q,V,W,Ae){v.onBeforeRender(N,B,q,V,W,Ae),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(N,B,q,V,v,Ae),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=Jt,W.needsUpdate=!0,N.renderBufferDirect(q,B,V,W,v,Ae),W.side=Di,W.needsUpdate=!0,N.renderBufferDirect(q,B,V,W,v,Ae),W.side=On):N.renderBufferDirect(q,B,V,W,v,Ae),v.onAfterRender(N,B,q,V,W,Ae)}function yr(v,B,q){B.isScene!==!0&&(B=ne);const V=S.get(v),W=A.state.lights,Ae=A.state.shadowsArray,Le=W.state.version,Te=he.getParameters(v,W.state,Ae,B,q,A.state.lightProbeGridArray),Ie=he.getProgramCacheKey(Te);let Ne=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=F.get(v.envMap||V.environment,Ye),V.envMapRotation=V.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",yt),Ne=new Map,V.programs=Ne);let Ze=Ne.get(Ie);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===Le)return Ic(v,Te),Ze}else Te.uniforms=he.getUniforms(v),L!==null&&v.isNodeMaterial&&L.build(v,q,Te),v.onBeforeCompile(Te,N),Ze=he.acquireProgram(Te,Ie),Ne.set(Ie,Ze),V.uniforms=Te.uniforms;const Fe=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),Ic(v,Te),V.needsLights=yd(v),V.lightsStateVersion=Le,V.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=A.state.lightProbeGridArray.length>0,V.currentProgram=Ze,V.uniformsList=null,Ze}function Lc(v){if(v.uniformsList===null){const B=v.currentProgram.getUniforms();v.uniformsList=aa.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function Ic(v,B){const q=S.get(v);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Sd(v,B){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let q=0,V=v.length;q<V;q++){const W=v[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Md(v,B,q,V,W){B.isScene!==!0&&(B=ne),_.resetTextureUnits();const Ae=B.fog,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,Te=O===null?N.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:tt.workingColorSpace,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=F.get(V.envMap||Le,Ie),Ye=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let St=Vn;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(St=N.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nt=dt!==void 0?dt.length:0,De=S.get(V),Qt=A.state.lights;if(R===!0&&(D===!0||v!==z)){const mt=v===z&&V.id===G;ye.setState(V,v,mt)}let nt=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Qt.state.version||De.outputColorSpace!==Te||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==Ne||V.fog===!0&&De.fog!==Ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ye.numPlanes||De.numIntersection!==ye.numIntersection)||De.vertexAlphas!==Ye||De.vertexTangents!==Ze||De.morphTargets!==Fe||De.morphNormals!==ft||De.morphColors!==bt||De.toneMapping!==St||De.morphTargetsCount!==Nt||!!De.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,De.__version=V.version);let on=De.currentProgram;nt===!0&&(on=yr(V,B,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,on,De));let wn=!1,pi=!1,ns=!1;const pt=on.getUniforms(),Tt=De.uniforms;if(J.useProgram(on.program)&&(wn=!0,pi=!0,ns=!0),V.id!==G&&(G=V.id,pi=!0),De.needsLights){const mt=Sd(A.state.lightProbeGridArray,W);De.lightProbeGrid!==mt&&(De.lightProbeGrid=mt,pi=!0)}if(wn||z!==v){J.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(T,"projectionMatrix",v.projectionMatrix),pt.setValue(T,"viewMatrix",v.matrixWorldInverse);const _i=pt.map.cameraPosition;_i!==void 0&&_i.setValue(T,ee.setFromMatrixPosition(v.matrixWorld)),ue.logarithmicDepthBuffer&&pt.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,pi=!0,ns=!0)}if(De.needsLights&&(Qt.state.directionalShadowMap.length>0&&pt.setValue(T,"directionalShadowMap",Qt.state.directionalShadowMap,_),Qt.state.spotShadowMap.length>0&&pt.setValue(T,"spotShadowMap",Qt.state.spotShadowMap,_),Qt.state.pointShadowMap.length>0&&pt.setValue(T,"pointShadowMap",Qt.state.pointShadowMap,_)),W.isSkinnedMesh){pt.setOptional(T,W,"bindMatrix"),pt.setOptional(T,W,"bindMatrixInverse");const mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),pt.setValue(T,"boneTexture",mt.boneTexture,_))}W.isBatchedMesh&&(pt.setOptional(T,W,"batchingTexture"),pt.setValue(T,"batchingTexture",W._matricesTexture,_),pt.setOptional(T,W,"batchingIdTexture"),pt.setValue(T,"batchingIdTexture",W._indirectTexture,_),pt.setOptional(T,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(T,"batchingColorTexture",W._colorsTexture,_));const mi=q.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Ve.update(W,q,on),(pi||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,pt.setValue(T,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(Tt.envMapIntensity.value=B.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=TM()),pi){if(pt.setValue(T,"toneMappingExposure",N.toneMappingExposure),De.needsLights&&Ed(Tt,ns),Ae&&V.fog===!0&&$.refreshFogUniforms(Tt,Ae),$.refreshMaterialUniforms(Tt,V,We,at,A.state.transmissionRenderTarget[v.id]),De.needsLights&&De.lightProbeGrid){const mt=De.lightProbeGrid;Tt.probesSH.value=mt.texture,Tt.probesMin.value.copy(mt.boundingBox.min),Tt.probesMax.value.copy(mt.boundingBox.max),Tt.probesResolution.value.copy(mt.resolution)}aa.upload(T,Lc(De),Tt,_)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(aa.upload(T,Lc(De),Tt,_),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(T,"center",W.center),pt.setValue(T,"modelViewMatrix",W.modelViewMatrix),pt.setValue(T,"normalMatrix",W.normalMatrix),pt.setValue(T,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const mt=V.uniformsGroups;for(let _i=0,is=mt.length;_i<is;_i++){const Uc=mt[_i];te.update(Uc,on),te.bind(Uc,on)}}return on}function Ed(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function yd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,B,q){const V=S.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),S.get(v.texture).__webglTexture=B,S.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,B){const q=S.get(v);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const bd=T.createFramebuffer();this.setRenderTarget=function(v,B=0,q=0){O=v,X=B,Z=q;let V=null,W=!1,Ae=!1;if(v){const Te=S.get(v);if(Te.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(T.FRAMEBUFFER,Te.__webglFramebuffer),Q.copy(v.viewport),le.copy(v.scissor),Me=v.scissorTest,J.viewport(Q),J.scissor(le),J.setScissorTest(Me),G=-1;return}else if(Te.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(Te.__hasExternalTextures)_.rebindTextures(v,S.get(v.texture).__webglTexture,S.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ye=v.depthTexture;if(Te.__boundDepthTexture!==Ye){if(Ye!==null&&S.has(Ye)&&(v.width!==Ye.image.width||v.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ae=!0);const Ne=S.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?V=Ne[B][q]:V=Ne[B],W=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?V=S.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[q]:V=Ne,Q.copy(v.viewport),le.copy(v.scissor),Me=v.scissorTest}else Q.copy(_e).multiplyScalar(We).floor(),le.copy(Oe).multiplyScalar(We).floor(),Me=Be;if(q!==0&&(V=bd),J.bindFramebuffer(T.FRAMEBUFFER,V)&&J.drawBuffers(v,V),J.viewport(Q),J.scissor(le),J.setScissorTest(Me),W){const Te=S.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,q)}else if(Ae){const Te=B;for(let Ie=0;Ie<v.textures.length;Ie++){const Ne=S.get(v.textures[Ie]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,q,Te)}}else if(v!==null&&q!==0){const Te=S.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Te.__webglTexture,q)}G=-1},this.readRenderTargetPixels=function(v,B,q,V,W,Ae,Le,Te=0){if(!(v&&v.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){J.bindFramebuffer(T.FRAMEBUFFER,Ie);try{const Ne=v.textures[Te],Ye=Ne.format,Ze=Ne.type;if(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),!ue.textureFormatReadable(Ye)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ze)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=v.width-V&&q>=0&&q<=v.height-W&&T.readPixels(B,q,V,W,U.convert(Ye),U.convert(Ze),Ae)}finally{const Ne=O!==null?S.get(O).__webglFramebuffer:null;J.bindFramebuffer(T.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,B,q,V,W,Ae,Le,Te=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie)if(B>=0&&B<=v.width-V&&q>=0&&q<=v.height-W){J.bindFramebuffer(T.FRAMEBUFFER,Ie);const Ne=v.textures[Te],Ye=Ne.format,Ze=Ne.type;if(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),!ue.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.bufferData(T.PIXEL_PACK_BUFFER,Ae.byteLength,T.STREAM_READ),T.readPixels(B,q,V,W,U.convert(Ye),U.convert(Ze),0);const ft=O!==null?S.get(O).__webglFramebuffer:null;J.bindFramebuffer(T.FRAMEBUFFER,ft);const bt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await G_(T,bt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ae),T.deleteBuffer(Fe),T.deleteSync(bt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,B=null,q=0){const V=Math.pow(2,-q),W=Math.floor(v.image.width*V),Ae=Math.floor(v.image.height*V),Le=B!==null?B.x:0,Te=B!==null?B.y:0;_.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,Le,Te,W,Ae),J.unbindTexture()};const Td=T.createFramebuffer(),Ad=T.createFramebuffer();this.copyTextureToTexture=function(v,B,q=null,V=null,W=0,Ae=0){let Le,Te,Ie,Ne,Ye,Ze,Fe,ft,bt;const St=v.isCompressedTexture?v.mipmaps[Ae]:v.image;if(q!==null)Le=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Ye=q.min.y,Ze=q.isBox3?q.min.z:0;else{const Tt=Math.pow(2,-W);Le=Math.floor(St.width*Tt),Te=Math.floor(St.height*Tt),v.isDataArrayTexture?Ie=St.depth:v.isData3DTexture?Ie=Math.floor(St.depth*Tt):Ie=1,Ne=0,Ye=0,Ze=0}V!==null?(Fe=V.x,ft=V.y,bt=V.z):(Fe=0,ft=0,bt=0);const dt=U.convert(B.format),Nt=U.convert(B.type);let De;B.isData3DTexture?(_.setTexture3D(B,0),De=T.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(_.setTexture2DArray(B,0),De=T.TEXTURE_2D_ARRAY):(_.setTexture2D(B,0),De=T.TEXTURE_2D),J.activeTexture(T.TEXTURE0),J.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,B.flipY),J.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),J.pixelStorei(T.UNPACK_ALIGNMENT,B.unpackAlignment);const Qt=J.getParameter(T.UNPACK_ROW_LENGTH),nt=J.getParameter(T.UNPACK_IMAGE_HEIGHT),on=J.getParameter(T.UNPACK_SKIP_PIXELS),wn=J.getParameter(T.UNPACK_SKIP_ROWS),pi=J.getParameter(T.UNPACK_SKIP_IMAGES);J.pixelStorei(T.UNPACK_ROW_LENGTH,St.width),J.pixelStorei(T.UNPACK_IMAGE_HEIGHT,St.height),J.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),J.pixelStorei(T.UNPACK_SKIP_ROWS,Ye),J.pixelStorei(T.UNPACK_SKIP_IMAGES,Ze);const ns=v.isDataArrayTexture||v.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){const Tt=S.get(v),mi=S.get(B),mt=S.get(Tt.__renderTarget),_i=S.get(mi.__renderTarget);J.bindFramebuffer(T.READ_FRAMEBUFFER,mt.__webglFramebuffer),J.bindFramebuffer(T.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let is=0;is<Ie;is++)ns&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(v).__webglTexture,W,Ze+is),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(B).__webglTexture,Ae,bt+is)),T.blitFramebuffer(Ne,Ye,Le,Te,Fe,ft,Le,Te,T.DEPTH_BUFFER_BIT,T.NEAREST);J.bindFramebuffer(T.READ_FRAMEBUFFER,null),J.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||S.has(v)){const Tt=S.get(v),mi=S.get(B);J.bindFramebuffer(T.READ_FRAMEBUFFER,Td),J.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ad);for(let mt=0;mt<Ie;mt++)ns?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Tt.__webglTexture,W,Ze+mt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Tt.__webglTexture,W),pt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,mi.__webglTexture,Ae,bt+mt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,mi.__webglTexture,Ae),W!==0?T.blitFramebuffer(Ne,Ye,Le,Te,Fe,ft,Le,Te,T.COLOR_BUFFER_BIT,T.NEAREST):pt?T.copyTexSubImage3D(De,Ae,Fe,ft,bt+mt,Ne,Ye,Le,Te):T.copyTexSubImage2D(De,Ae,Fe,ft,Ne,Ye,Le,Te);J.bindFramebuffer(T.READ_FRAMEBUFFER,null),J.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else pt?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(De,Ae,Fe,ft,bt,Le,Te,Ie,dt,Nt,St.data):B.isCompressedArrayTexture?T.compressedTexSubImage3D(De,Ae,Fe,ft,bt,Le,Te,Ie,dt,St.data):T.texSubImage3D(De,Ae,Fe,ft,bt,Le,Te,Ie,dt,Nt,St):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ae,Fe,ft,Le,Te,dt,Nt,St.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ae,Fe,ft,St.width,St.height,dt,St.data):T.texSubImage2D(T.TEXTURE_2D,Ae,Fe,ft,Le,Te,dt,Nt,St);J.pixelStorei(T.UNPACK_ROW_LENGTH,Qt),J.pixelStorei(T.UNPACK_IMAGE_HEIGHT,nt),J.pixelStorei(T.UNPACK_SKIP_PIXELS,on),J.pixelStorei(T.UNPACK_SKIP_ROWS,wn),J.pixelStorei(T.UNPACK_SKIP_IMAGES,pi),Ae===0&&B.generateMipmaps&&T.generateMipmap(De),J.unbindTexture()},this.initRenderTarget=function(v){S.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),J.unbindTexture()},this.resetState=function(){X=0,Z=0,O=null,J.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Mf={type:"change"},Sc={type:"start"},xd={type:"end"},Zr=new xc,Ef=new Ai,wM=Math.cos(70*W_.DEG2RAD),wt=new H,$t=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Io=1e-6;class RM extends Pg{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Li,this._lastTargetPosition=new H,this._quat=new Li().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ju,this._sphericalDelta=new ju,this._scale=1,this._panOffset=new H,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new H,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PM.bind(this),this._onPointerDown=CM.bind(this),this._onPointerUp=DM.bind(this),this._onContextMenu=BM.bind(this),this._onMouseWheel=UM.bind(this),this._onKeyDown=NM.bind(this),this._onTouchStart=FM.bind(this),this._onTouchMove=OM.bind(this),this._onMouseDown=LM.bind(this),this._onMouseMove=IM.bind(this),this._interceptControlDown=zM.bind(this),this._interceptControlUp=HM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mf),this.update(),this.state=ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<wM?this.object.lookAt(this.target):(Ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Ef,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Io||this._lastTargetPosition.distanceToSquared(this.target)>Io?(this.dispatchEvent(Mf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function PM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function DM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xd),this.state=ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function LM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case As.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case As.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Sc)}function IM(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function UM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(Sc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xd))}function NM(n){this.enabled!==!1&&this._handleKeyDown(n)}function FM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Sc)}function OM(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function BM(n){this.enabled!==!1&&n.preventDefault()}function zM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const GM={class:"wedding-3d-scene fixed inset-0 -z-10 overflow-hidden"},VM=wa({__name:"Wedding3DScene",props:{theme:{default:"gold"},intensity:{default:.8},enableZoom:{type:Boolean,default:!1},autoRotate:{type:Boolean,default:!0},autoRotateSpeed:{default:.5},enableControls:{type:Boolean,default:!0}},setup(n){const e=n,t=bi(null);let i=null,s=null,r=null,a=null,o=null,l=0;const c=new ke(0,0),u=new ke(0,0);let h=null,f=null,d=null;const E={gold:{primary:new et(16364314),secondary:new et(14389264),ambient:new et(16766720),bg:662031}}.gold;function m(){f=new $s;const A=new Mr(12,18,64,64),P=document.createElement("canvas");P.width=1024,P.height=1024*(18/12);const g=P.getContext("2d");if(g){const O=g.createLinearGradient(0,0,0,P.height);O.addColorStop(0,"#1a4d2e"),O.addColorStop(.5,"#133a22"),O.addColorStop(1,"#0c2616"),g.fillStyle=O,g.fillRect(0,0,P.width,P.height),g.globalAlpha=.05,g.strokeStyle="#ffffff",g.lineWidth=1;for(let G=0;G<P.width;G+=40)g.beginPath(),g.moveTo(G,0),g.lineTo(G,P.height),g.stroke();g.globalAlpha=1,g.strokeStyle="#c9a962",g.lineWidth=15,g.strokeRect(50,50,P.width-100,P.height-100),g.lineWidth=2,g.strokeRect(70,70,P.width-140,P.height-140),g.fillStyle="#c9a962",g.textAlign="center",g.font="60px serif",g.fillText("بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",P.width/2,200),g.font="bold 30px sans-serif",g.letterSpacing="10px",g.fillText("UNDANGAN PERNIKAHAN",P.width/2,300),g.font='italic 150px "Great Vibes", cursive',g.shadowBlur=20,g.shadowColor="rgba(201, 169, 98, 0.5)",g.fillText("Putri & Putra",P.width/2,P.height/2+50),g.shadowBlur=0,g.font="40px serif",g.fillText("JUMAT, 05 JUNI 2026",P.width/2,P.height-250)}const b=new _g(P);b.anisotropy=16;const N=new Vu({map:b,metalness:.6,roughness:.2,side:On,transparent:!0,opacity:.95}),C=new yn(A,N);f.add(C);const L=new Ns(12.4,18.4,.2),X=new Vu({color:13216098,metalness:.9,roughness:.1}),Z=new yn(L,X);Z.position.z=-.15,f.add(Z),i==null||i.add(f)}function p(){const A=2e3*e.intensity,P=new Tn,g=new Float32Array(A*3),b=new Float32Array(A);for(let C=0;C<A;C++)g[C*3]=(Math.random()-.5)*100,g[C*3+1]=(Math.random()-.5)*100,g[C*3+2]=(Math.random()-.5)*80,b[C]=Math.random()*2+.5;P.setAttribute("position",new dn(g,3)),P.setAttribute("size",new dn(b,1));const N=new bn({uniforms:{time:{value:0},color:{value:E.primary}},vertexShader:`
      attribute float size;
      varying float vOpacity;
      uniform float time;
      void main() {
        vec3 pos = position;
        pos.y += sin(time * 0.2 + position.x * 0.1) * 2.0;
        pos.x += cos(time * 0.1 + position.z * 0.1) * 2.0;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (400.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        vOpacity = 1.0 - (abs(pos.z) / 50.0);
      }
    `,fragmentShader:`
      uniform vec3 color;
      varying float vOpacity;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float strength = (1.0 - d * 2.0) * vOpacity;
        gl_FragColor = vec4(color, strength * 0.6);
      }
    `,transparent:!0,blending:Yo,depthWrite:!1});h=new mg(P,N),i==null||i.add(h)}function M(){if(!t.value)return;i=new sg,i.fog=new gc(E.bg,.01),s=new sn(60,window.innerWidth/window.innerHeight,.1,1e3),s.position.set(0,0,45),r=new AM({antialias:!0,alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(E.bg,1),t.value.appendChild(r.domElement),a=new RM(s,r.domElement),a.enableDamping=!0,a.enableZoom=e.enableZoom,a.enablePan=!1,a.autoRotate=e.autoRotate,a.autoRotateSpeed=e.autoRotateSpeed,a.maxDistance=80,a.minDistance=20,a.enabled=e.enableControls;const A=new wg(16777215,.4);i.add(A),d=new Yu(16766720,2,100),d.position.set(10,10,20),i.add(d);const P=new Yu(16777215,1,50);P.position.set(-20,-10,10),i.add(P),m(),p(),w()}function w(){o=requestAnimationFrame(w),l+=.01,a==null||a.update(),u.lerp(c,.05),f&&(f.position.y=Math.sin(l*.5)*.5,f.rotation.y=u.x*.2,f.rotation.x=-u.y*.1,d&&(d.position.x=u.x*20,d.position.y=u.y*20)),h&&(h.material.uniforms.time.value=l),r==null||r.render(i,s)}function y(A){c.x=A.clientX/window.innerWidth*2-1,c.y=A.clientY/window.innerHeight*2-1}Pa(()=>{M(),window.addEventListener("mousemove",y),window.addEventListener("resize",I)}),tc(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("mousemove",y),window.removeEventListener("resize",I),r==null||r.dispose()});function I(){!s||!r||(s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight))}return(A,P)=>(qt(),fn("div",GM,[K("div",{ref_key:"canvasContainer",ref:t,class:"canvas-3d"},null,512)]))}}),Mc=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},kM=Mc(VM,[["__scopeId","data-v-f327ab74"]]),WM={key:0,class:"digital-card-overlay"},XM={class:"digital-card-container"},qM={class:"paper-card"},YM={class:"card-nav"},jM={key:0,class:"page-content"},KM={class:"card-content"},$M={class:"couple-details"},ZM={class:"person"},JM={class:"full-name"},QM={class:"parents"},eE={class:"person"},tE={class:"full-name"},nE={class:"parents"},iE={key:1,class:"page-content denah-page"},sE={class:"card-content"},rE={class:"qr-section"},aE={class:"qr-box-container"},oE={class:"qr-box"},lE=wa({__name:"DigitalCard",props:{show:{type:Boolean},coupleData:{}},emits:["close"],setup(n,{emit:e}){const t=e,i=bi(1);function s(){t("close")}return(r,a)=>(qt(),sc(rr,{name:"slide-up"},{default:bs(()=>[n.show?(qt(),fn("div",WM,[K("div",XM,[K("button",{onClick:s,class:"close-card-btn"},[...a[2]||(a[2]=[K("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[K("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])]),K("div",qM,[K("div",YM,[K("button",{onClick:a[0]||(a[0]=o=>i.value=1),class:Ji({active:i.value===1})},"Halaman 1",2),K("button",{onClick:a[1]||(a[1]=o=>i.value=2),class:Ji({active:i.value===2})},"Denah Lokasi",2)]),i.value===1?(qt(),fn("div",jM,[a[8]||(a[8]=K("div",{class:"floral-top-left"},null,-1)),a[9]||(a[9]=K("div",{class:"floral-top-right"},null,-1)),K("div",KM,[a[4]||(a[4]=K("div",{class:"names-header"},[K("h1",{class:"script-font"},"Irat & Arif")],-1)),a[5]||(a[5]=K("div",{class:"greeting-section"},[K("p",{class:"bismillah-text"},"Assalamu'alaikum Warahmatullahi Wabarakatuh"),K("p",{class:"opening-text"}," Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara putra-putri kami: ")],-1)),K("div",$M,[K("div",ZM,[K("h2",JM,xt(n.coupleData.bride.fullName),1),K("p",QM,"Putri dari Bapak "+xt(n.coupleData.bride.father)+" dan Ibu "+xt(n.coupleData.bride.mother),1)]),a[3]||(a[3]=K("div",{class:"rings-icon"},[K("span",{class:"emoji-rings"},"💍")],-1)),K("div",eE,[K("h2",tE,xt(n.coupleData.groom.fullName),1),K("p",nE,"Putra dari Bapak "+xt(n.coupleData.groom.father)+" dan Ibu "+xt(n.coupleData.groom.mother),1)])]),a[6]||(a[6]=K("div",{class:"event-details-paper"},[K("div",{class:"event-card akad"},[K("div",{class:"date-badge"},[K("span",{class:"day"},"JUM'AT"),K("span",{class:"date"},"05"),K("span",{class:"month"},"JUNI 2026")]),K("div",{class:"info"},[K("h3",null,"Akad Nikah"),K("p",null,"Pukul: 14.00 WIB s/d Selesai"),K("p",null,"Tempat: Masjid Al-Wustha Hilir Balai")])]),K("div",{class:"event-card resepsi"},[K("div",{class:"date-badge"},[K("span",{class:"day"},"MINGGU"),K("span",{class:"date"},"07"),K("span",{class:"month"},"JUNI 2026")]),K("div",{class:"info"},[K("h3",null,"RESEPSI"),K("p",null,"Pukul: 10.00 WIB s/d Selesai"),K("p",null,"Tempat: Anak Kayu, Jorong Tabu Baraie")])])],-1)),a[7]||(a[7]=K("p",{class:"closing-greeting"},"Wassalamu'alaikum Warahmatullahi Wabarakatuh",-1))]),a[10]||(a[10]=K("div",{class:"floral-bottom-right"},null,-1))])):ii("",!0),i.value===2?(qt(),fn("div",iE,[a[15]||(a[15]=K("div",{class:"floral-top-left"},null,-1)),K("div",sE,[a[12]||(a[12]=K("div",{class:"denah-header"},[K("div",{class:"denah-icon"},"📍"),K("h2",null,"Denah Lokasi")],-1)),a[13]||(a[13]=K("div",{class:"map-illustration"},[K("div",{class:"map-box"},[K("div",{class:"road-main"}),K("div",{class:"road-branch"}),K("div",{class:"marker-location pulse"},[K("div",{class:"label-pesta"},"LOKASI PESTA")]),K("div",{class:"road-label bukittinggi"},"DARI BUKITTINGGI"),K("div",{class:"road-label padangpanjang"},"SIMP. 8 PADANG PANJANG")])],-1)),K("div",rE,[K("div",aE,[K("div",oE,[(qt(),fn(nn,null,uh(16,o=>K("div",{class:"qr-pixel",key:o})),64))])]),a[11]||(a[11]=K("p",null,"SCAN LOCATION",-1))]),a[14]||(a[14]=K("div",{class:"recipient-box"},[K("p",null,"Kepada Yth. Bapak/Ibu/Saudara/i:"),K("div",{class:"recipient-line"},[K("span",null,"Nama Tamu Undangan")])],-1))])])):ii("",!0)])])])):ii("",!0)]),_:1}))}}),cE=Mc(lE,[["__scopeId","data-v-7d6f342e"]]),uE={class:"gallery-container"},fE={class:"gallery-grid"},hE=["src"],dE=wa({__name:"GalleryModal",props:{show:{type:Boolean}},emits:["close"],setup(n,{emit:e}){const t=e,i=["/public/images/contoh-1.jpeg","/public/images/contoh-2.jpeg","https://images.unsplash.com/photo-1519741497674-611481863552?w=800","https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"];function s(){t("close")}return(r,a)=>(qt(),sc(rr,{name:"fade"},{default:bs(()=>[n.show?(qt(),fn("div",{key:0,class:"gallery-overlay",onClick:t_(s,["self"])},[K("div",uE,[K("button",{onClick:s,class:"close-gallery-btn"},"×"),a[0]||(a[0]=K("h2",{class:"gallery-title"},"Gallery Foto",-1)),K("div",fE,[(qt(),fn(nn,null,uh(i,(o,l)=>K("div",{key:l,class:"gallery-item"},[K("img",{src:o,alt:"Wedding Photo",loading:"lazy"},null,8,hE)])),64))])])])):ii("",!0)]),_:1}))}}),pE=Mc(dE,[["__scopeId","data-v-5fce6bf6"]]),mE={key:0,class:"loader"},_E={class:"music-icon"},gE={class:"hero-paper"},xE={class:"paper-surface"},vE={class:"hero-main-content"},SE={class:"hero-actions"},ME={id:"details",class:"details-section"},EE={class:"paper-surface container"},yE={class:"paper-inner"},bE={class:"names-details"},TE={class:"name"},AE={class:"parents"},wE={class:"name"},RE={class:"parents"},CE={class:"event-grid-paper"},PE={class:"event-card"},DE={class:"date-badge-paper"},LE={class:"day"},IE={class:"num"},UE={class:"month"},NE={class:"event-info-paper"},FE={class:"event-card"},OE={class:"date-badge-paper"},BE={class:"day"},zE={class:"num"},HE={class:"month"},GE={class:"event-info-paper"},VE=wa({__name:"App",setup(n){const e={bride:{fullName:"Asratul Fitri, A.Md",nickname:"Irat",title:"Putri Muslim",father:"Suhaimi",mother:"Asmi"},groom:{fullName:"Arif Hidayatulah",nickname:"Arif",title:"Putra Muslim",father:"Amrizal",mother:"Ratna Juita"},events:[{type:"akad",title:"Akad Nikah",day:"JUM'AT",date:"05",month:"JUNI 2026",time:"14.00 WIB s/d Selesai",venue:"Masjid Al-Wustha Hilir Balai",address:"Nagari Paninjauan, Kec. X Koto, Tanah Datar"},{type:"resepsi",title:"RESEPSI",day:"MINGGU",date:"07",month:"JUNI 2026",time:"10.00 WIB s/d Selesai",venue:"Anak Kayu, Jorong Tabu Baraie",address:"Nagari Paninjauan, Kec. X Koto, Tanah Datar"}]},t=bi(!0),i=bi(!1),s=bi(!1),r=bi(!1),a=bi(null),o=bi(!1);Pa(()=>{setTimeout(()=>{t.value=!1},2e3),window.addEventListener("scroll",()=>{o.value=window.scrollY>400})});function l(){a.value||(a.value=new Audio("/music/wedding.mp3"),a.value.loop=!0),r.value?a.value.pause():a.value.play(),r.value=!r.value}function c(h){var f;(f=document.getElementById(h))==null||f.scrollIntoView({behavior:"smooth"})}function u(){window.scrollTo({top:0,behavior:"smooth"})}return(h,f)=>(qt(),fn(nn,null,[Rt(kM),Rt(rr,{name:"fade"},{default:bs(()=>[t.value?(qt(),fn("div",mE,[...f[6]||(f[6]=[K("div",{class:"loader-content"},[K("div",{class:"loader-bismillah"},"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم"),K("div",{class:"loader-ring"}),K("p",{class:"loader-text"},"MEMUAT UNDANGAN...")],-1)])])):ii("",!0)]),_:1}),Rt(cE,{show:i.value,"couple-data":e,onClose:f[0]||(f[0]=d=>i.value=!1)},null,8,["show"]),Rt(pE,{show:s.value,onClose:f[1]||(f[1]=d=>s.value=!1)},null,8,["show"]),t.value?ii("",!0):(qt(),fn("button",{key:0,onClick:l,class:Ji(["music-btn",{playing:r.value}])},[K("span",_E,xt(r.value?"♪":"♫"),1)],2)),Rt(rr,{name:"bounce-up"},{default:bs(()=>[t.value?ii("",!0):(qt(),fn("button",{key:0,onClick:f[2]||(f[2]=d=>i.value=!0),class:"fab-open"},[...f[7]||(f[7]=[K("span",{class:"fab-icon"},"💌",-1),K("span",{class:"fab-text"},"Buka Undangan",-1)])]))]),_:1}),Rt(rr,{name:"fade"},{default:bs(()=>[o.value?(qt(),fn("button",{key:0,onClick:u,class:"back-to-top"},[...f[8]||(f[8]=[K("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[K("path",{d:"M12 19V5M5 12l7-7 7 7"})],-1)])])):ii("",!0)]),_:1}),K("div",{class:Ji(["invitation-wrapper",{"blur-bg":i.value||s.value}])},[K("section",gE,[K("div",xE,[f[14]||(f[14]=K("div",{class:"floral-top-left"},null,-1)),f[15]||(f[15]=K("div",{class:"floral-top-right"},null,-1)),K("div",vE,[f[12]||(f[12]=K("div",{class:"bismillah-gold"},"Assalamu'alaikum Warahmatullahi Wabarakatuh",-1)),f[13]||(f[13]=K("div",{class:"couple-names-large"},[K("h1",{class:"irat-arif"},[Wo("Irat "),K("span",{class:"ampersand"},"&"),Wo(" Arif")])],-1)),K("div",SE,[K("button",{onClick:f[3]||(f[3]=d=>i.value=!0),class:"btn-card"},[...f[9]||(f[9]=[K("span",null,"BUKA UNDANGAN",-1)])]),K("button",{onClick:f[4]||(f[4]=d=>s.value=!0),class:"btn-gallery"},[...f[10]||(f[10]=[K("span",null,"GALLERY FOTO",-1)])])]),K("button",{onClick:f[5]||(f[5]=d=>c("details")),class:"scroll-down"},[...f[11]||(f[11]=[K("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[K("path",{d:"M7 13l5 5 5-5M7 6l5 5 5-5"})],-1)])])]),f[16]||(f[16]=K("div",{class:"floral-bottom-right"},null,-1))])]),K("section",ME,[K("div",EE,[K("div",yE,[f[20]||(f[20]=K("p",{class:"opening-text"}," Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara putra-putri kami: ",-1)),K("div",bE,[K("h2",TE,xt(e.bride.fullName),1),K("p",AE,"Putri dari Bapak "+xt(e.bride.father)+" dan Ibu "+xt(e.bride.mother),1),f[17]||(f[17]=K("div",{class:"rings-gold"},"💍",-1)),K("h2",wE,xt(e.groom.fullName),1),K("p",RE,"Putra dari Bapak "+xt(e.groom.father)+" dan Ibu "+xt(e.groom.mother),1)]),K("div",CE,[K("div",PE,[K("div",DE,[K("span",LE,xt(e.events[0].day),1),K("span",IE,xt(e.events[0].date),1),K("span",UE,xt(e.events[0].month),1)]),K("div",NE,[f[18]||(f[18]=K("h3",null,"AKAD NIKAH",-1)),K("p",null,xt(e.events[0].time),1),K("p",null,xt(e.events[0].venue),1)])]),K("div",FE,[K("div",OE,[K("span",BE,xt(e.events[1].day),1),K("span",zE,xt(e.events[1].date),1),K("span",HE,xt(e.events[1].month),1)]),K("div",GE,[f[19]||(f[19]=K("h3",null,"RESEPSI",-1)),K("p",null,xt(e.events[1].time),1),K("p",null,xt(e.events[1].venue),1)])])])])])])],2)],64))}});s_(VE).mount("#app");
