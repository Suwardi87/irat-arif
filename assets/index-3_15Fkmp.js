const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InvitationView-CX_EAmDx.js","assets/InvitationView-DopnIiUh.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pt={},br=[],Gn=()=>{},rd=()=>!1,Uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fo=t=>t.startsWith("onUpdate:"),At=Object.assign,uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Np=Object.prototype.hasOwnProperty,ot=(t,e)=>Np.call(t,e),Ge=Array.isArray,Tr=t=>ys(t)==="[object Map]",sd=t=>ys(t)==="[object Set]",iu=t=>ys(t)==="[object Date]",We=t=>typeof t=="function",_t=t=>typeof t=="string",Mn=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",od=t=>(at(t)||We(t))&&We(t.then)&&We(t.catch),ad=Object.prototype.toString,ys=t=>ad.call(t),Up=t=>ys(t).slice(8,-1),ld=t=>ys(t)==="[object Object]",fc=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ss=cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Fp=/-\w/g,vn=Oo(t=>t.replace(Fp,e=>e.slice(1).toUpperCase())),Op=/\B([A-Z])/g,ir=Oo(t=>t.replace(Op,"-$1").toLowerCase()),cd=Oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ia=Oo(t=>t?`on${cd(t)}`:""),On=(t,e)=>!Object.is(t,e),oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ud=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Bp=t=>{const e=_t(t)?Number(t):NaN;return isNaN(e)?t:e};let ru;const Bo=()=>ru||(ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hc(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=_t(i)?Hp(i):hc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(t)||at(t))return t}const Vp=/;(?![^(]*\))/g,Gp=/:([^]+)/,zp=/\/\*[^]*?\*\//g;function Hp(t){const e={};return t.replace(zp,"").split(Vp).forEach(n=>{if(n){const i=n.split(Gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pc(t){let e="";if(_t(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=pc(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wp=cc(kp);function fd(t){return!!t||t===""}function Xp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ds(t[i],e[i]);return n}function ds(t,e){if(t===e)return!0;let n=iu(t),i=iu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Mn(t),i=Mn(e),n||i)return t===e;if(n=Ge(t),i=Ge(e),n||i)return n&&i?Xp(t,e):!1;if(n=at(t),i=at(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ds(t[o],e[o]))return!1}}return String(t)===String(e)}const dd=t=>!!(t&&t.__v_isRef===!0),qp=t=>_t(t)?t:t==null?"":Ge(t)||at(t)&&(t.toString===ad||!We(t.toString))?dd(t)?qp(t.value):JSON.stringify(t,hd,2):String(t),hd=(t,e)=>dd(e)?hd(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[ra(i,s)+" =>"]=r,n),{})}:sd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ra(n))}:Mn(e)?ra(e):at(e)&&!Ge(e)&&!ld(e)?String(e):e,ra=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class Yp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Lt&&(Lt.active?(this.parent=Lt,this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){if(this._on>0&&--this._on===0){if(Lt===this)Lt=this.prevScope;else{let e=Lt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Kp(){return Lt}let gt;const sa=new WeakSet;class pd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&(Lt.active?Lt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sa.has(this)&&(sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),_d(this);const e=gt,n=xn;gt=this,xn=!0;try{return this.fn()}finally{vd(this),gt=e,xn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_c(e);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Za(this)&&this.run()}get dirty(){return Za(this)}}let md=0,os,as;function gd(t,e=!1){if(t.flags|=8,e){t.next=as,as=t;return}t.next=os,os=t}function mc(){md++}function gc(){if(--md>0)return;if(as){let e=as;for(as=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;os;){let e=os;for(os=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function _d(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),_c(i),jp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Za(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===hs)||(t.globalVersion=hs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Za(t))))return;t.flags|=2;const e=t.dep,n=gt,i=xn;gt=t,xn=!0;try{_d(t);const r=t.fn(t._value);(e.version===0||On(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=n,xn=i,vd(t),t.flags&=-3}}function _c(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)_c(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let xn=!0;const Sd=[];function li(){Sd.push(xn),xn=!1}function ci(){const t=Sd.pop();xn=t===void 0?!0:t}function su(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=gt;gt=void 0;try{e()}finally{gt=n}}}let hs=0;class $p{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!xn||gt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==gt)n=this.activeLink=new $p(gt,this),gt.deps?(n.prevDep=gt.depsTail,gt.depsTail.nextDep=n,gt.depsTail=n):gt.deps=gt.depsTail=n,Md(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=gt.depsTail,n.nextDep=void 0,gt.depsTail.nextDep=n,gt.depsTail=n,gt.deps===n&&(gt.deps=i)}return n}trigger(e){this.version++,hs++,this.notify(e)}notify(e){mc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gc()}}}function Md(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Md(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ja=new WeakMap,$i=Symbol(""),Qa=Symbol(""),ps=Symbol("");function Ot(t,e,n){if(xn&&gt){let i=Ja.get(t);i||Ja.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new vc),r.map=i,r.key=n),r.track()}}function ti(t,e,n,i,r,s){const o=Ja.get(t);if(!o){hs++;return}const a=l=>{l&&l.trigger()};if(mc(),e==="clear")o.forEach(a);else{const l=Ge(t),c=l&&fc(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===ps||!Mn(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ps)),e){case"add":l?c&&a(o.get("length")):(a(o.get($i)),Tr(t)&&a(o.get(Qa)));break;case"delete":l||(a(o.get($i)),Tr(t)&&a(o.get(Qa)));break;case"set":Tr(t)&&a(o.get($i));break}}gc()}function ar(t){const e=it(t);return e===t?e:(Ot(e,"iterate",ps),un(t)?e:e.map(En))}function Vo(t){return Ot(t=it(t),"iterate",ps),t}function Nn(t,e){return ui(t)?Lr(Zi(t)?En(e):e):En(e)}const Zp={__proto__:null,[Symbol.iterator](){return oa(this,Symbol.iterator,t=>Nn(this,t))},concat(...t){return ar(this).concat(...t.map(e=>Ge(e)?ar(e):e))},entries(){return oa(this,"entries",t=>(t[1]=Nn(this,t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(i=>Nn(this,i)),arguments)},find(t,e){return qn(this,"find",t,e,n=>Nn(this,n),arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,n=>Nn(this,n),arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return aa(this,"includes",t)},indexOf(...t){return aa(this,"indexOf",t)},join(t){return ar(this).join(t)},lastIndexOf(...t){return aa(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return kr(this,"pop")},push(...t){return kr(this,"push",t)},reduce(t,...e){return ou(this,"reduce",t,e)},reduceRight(t,...e){return ou(this,"reduceRight",t,e)},shift(){return kr(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return kr(this,"splice",t)},toReversed(){return ar(this).toReversed()},toSorted(t){return ar(this).toSorted(t)},toSpliced(...t){return ar(this).toSpliced(...t)},unshift(...t){return kr(this,"unshift",t)},values(){return oa(this,"values",t=>Nn(this,t))}};function oa(t,e,n){const i=Vo(t),r=i[e]();return i!==t&&!un(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Jp=Array.prototype;function qn(t,e,n,i,r,s){const o=Vo(t),a=o!==t&&!un(t),l=o[e];if(l!==Jp[e]){const d=l.apply(t,s);return a?En(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Nn(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function ou(t,e,n,i){const r=Vo(t),s=r!==t&&!un(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Nn(t,c)),n.call(this,c,Nn(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=r[e](o,...i);return a?Nn(t,l):l}function aa(t,e,n){const i=it(t);Ot(i,"iterate",ps);const r=i[e](...n);return(r===-1||r===!1)&&Mc(n[0])?(n[0]=it(n[0]),i[e](...n)):r}function kr(t,e,n=[]){li(),mc();const i=it(t)[e].apply(t,n);return gc(),ci(),i}const Qp=cc("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function em(t){Mn(t)||(t=String(t));const e=it(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class yd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?um:Rd:s?Ad:Td).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!r){let l;if(o&&(l=Zp[n]))return l;if(n==="hasOwnProperty")return em}const a=Reflect.get(e,n,zt(e)?e:i);if((Mn(n)?Ed.has(n):Qp(n))||(r||Ot(e,"get",n),s))return a;if(zt(a)){const l=o&&fc(n)?a:a.value;return r&&at(l)?tl(l):l}return at(a)?r?tl(a):Go(a):a}}class bd extends yd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ge(e)&&fc(n);if(!this._isShallow){const c=ui(s);if(!un(i)&&!ui(i)&&(s=it(s),i=it(i)),!o&&zt(s)&&!zt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:ot(e,n),l=Reflect.set(e,n,i,zt(e)?e:r);return e===it(r)&&(a?On(i,s)&&ti(e,"set",n,i):ti(e,"add",n,i)),l}deleteProperty(e,n){const i=ot(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ti(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Mn(n)||!Ed.has(n))&&Ot(e,"has",n),i}ownKeys(e){return Ot(e,"iterate",Ge(e)?"length":$i),Reflect.ownKeys(e)}}class tm extends yd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nm=new bd,im=new tm,rm=new bd(!0);const el=t=>t,Ls=t=>Reflect.getPrototypeOf(t);function sm(t,e,n){return function(...i){const r=this.__v_raw,s=it(r),o=Tr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?el:e?Lr:En;return!e&&Ot(s,"iterate",l?Qa:$i),At(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Is(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function om(t,e){const n={get(r){const s=this.__v_raw,o=it(s),a=it(r);t||(On(r,a)&&Ot(o,"get",r),Ot(o,"get",a));const{has:l}=Ls(o),c=e?el:t?Lr:En;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ot(it(r),"iterate",$i),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return t||(On(r,a)&&Ot(o,"has",r),Ot(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?el:t?Lr:En;return!t&&Ot(l,"iterate",$i),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return At(n,t?{add:Is("add"),set:Is("set"),delete:Is("delete"),clear:Is("clear")}:{add(r){const s=it(this),o=Ls(s),a=it(r),l=!e&&!un(r)&&!ui(r)?a:r;return o.has.call(s,l)||On(r,l)&&o.has.call(s,r)||On(a,l)&&o.has.call(s,a)||(s.add(l),ti(s,"add",l,l)),this},set(r,s){!e&&!un(s)&&!ui(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Ls(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?On(s,u)&&ti(o,"set",r,s):ti(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Ls(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ti(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&ti(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=sm(r,t,e)}),n}function xc(t,e){const n=om(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ot(n,r)&&r in i?n:i,r,s)}const am={get:xc(!1,!1)},lm={get:xc(!1,!0)},cm={get:xc(!0,!1)};const Td=new WeakMap,Ad=new WeakMap,Rd=new WeakMap,um=new WeakMap;function fm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dm(t){return t.__v_skip||!Object.isExtensible(t)?0:fm(Up(t))}function Go(t){return ui(t)?t:Sc(t,!1,nm,am,Td)}function Cd(t){return Sc(t,!1,rm,lm,Ad)}function tl(t){return Sc(t,!0,im,cm,Rd)}function Sc(t,e,n,i,r){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=dm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Zi(t){return ui(t)?Zi(t.__v_raw):!!(t&&t.__v_isReactive)}function ui(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function Mc(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function hm(t){return!ot(t,"__v_skip")&&Object.isExtensible(t)&&ud(t,"__v_skip",!0),t}const En=t=>at(t)?Go(t):t,Lr=t=>at(t)?tl(t):t;function zt(t){return t?t.__v_isRef===!0:!1}function nl(t){return wd(t,!1)}function pm(t){return wd(t,!0)}function wd(t,e){return zt(t)?t:new mm(t,e)}class mm{constructor(e,n){this.dep=new vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:En(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||un(e)||ui(e);e=i?e:it(e),On(e,n)&&(this._rawValue=e,this._value=i?e:En(e),this.dep.trigger())}}function Ji(t){return zt(t)?t.value:t}const gm={get:(t,e,n)=>e==="__v_raw"?t:Ji(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return zt(r)&&!zt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Pd(t){return Zi(t)?t:new Proxy(t,gm)}class _m{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return gd(this,!0),!0}get value(){const e=this.dep.track();return xd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vm(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new _m(i,r,n)}const Ns={},vo=new WeakMap;let zi;function xm(t,e=!1,n=zi){if(n){let i=vo.get(n);i||vo.set(n,i=[]),i.push(t)}}function Sm(t,e,n=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:un(y)||r===!1||r===0?ni(y,1):ni(y);let u,d,f,h,_=!1,M=!1;if(zt(t)?(d=()=>t.value,_=un(t)):Zi(t)?(d=()=>c(t),_=!0):Ge(t)?(M=!0,_=t.some(y=>Zi(y)||un(y)),d=()=>t.map(y=>{if(zt(y))return y.value;if(Zi(y))return c(y);if(We(y))return l?l(y,2):y()})):We(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){li();try{f()}finally{ci()}}const y=zi;zi=u;try{return l?l(t,3,[h]):t(h)}finally{zi=y}}:d=Gn,e&&r){const y=d,D=r===!0?1/0:r;d=()=>ni(y(),D)}const m=Kp(),p=()=>{u.stop(),m&&m.active&&uc(m.effects,u)};if(s&&e){const y=e;e=(...D)=>{y(...D),p()}}let x=M?new Array(t.length).fill(Ns):Ns;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const D=u.run();if(r||_||(M?D.some((A,I)=>On(A,x[I])):On(D,x))){f&&f();const A=zi;zi=u;try{const I=[D,x===Ns?void 0:M&&x[0]===Ns?[]:x,h];x=D,l?l(e,3,I):e(...I)}finally{zi=A}}}else u.run()};return a&&a(b),u=new pd(d),u.scheduler=o?()=>o(b,!1):b,h=y=>xm(y,!1,u),f=u.onStop=()=>{const y=vo.get(u);if(y){if(l)l(y,4);else for(const D of y)D();vo.delete(u)}},e?i?b(!0):x=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ni(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,zt(t))ni(t.value,e,n);else if(Ge(t))for(let i=0;i<t.length;i++)ni(t[i],e,n);else if(sd(t)||Tr(t))t.forEach(i=>{ni(i,e,n)});else if(ld(t)){for(const i in t)ni(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ni(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bs(t,e,n,i){try{return i?t(...i):t()}catch(r){zo(r,e,n)}}function yn(t,e,n,i){if(We(t)){const r=bs(t,e,n,i);return r&&od(r)&&r.catch(s=>{zo(s,e,n)}),r}if(Ge(t)){const r=[];for(let s=0;s<t.length;s++)r.push(yn(t[s],e,n,i));return r}}function zo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(s){li(),bs(s,null,10,[t,l,c]),ci();return}}Mm(t,n,r,i,o)}function Mm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Xt=[];let Ln=-1;const Ar=[];let Ri=null,Er=0;const Dd=Promise.resolve();let xo=null;function Ld(t){const e=xo||Dd;return t?e.then(this?t.bind(this):t):e}function Em(t){let e=Ln+1,n=Xt.length;for(;e<n;){const i=e+n>>>1,r=Xt[i],s=ms(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Ec(t){if(!(t.flags&1)){const e=ms(t),n=Xt[Xt.length-1];!n||!(t.flags&2)&&e>=ms(n)?Xt.push(t):Xt.splice(Em(e),0,t),t.flags|=1,Id()}}function Id(){xo||(xo=Dd.then(Ud))}function ym(t){Ge(t)?Ar.push(...t):Ri&&t.id===-1?Ri.splice(Er+1,0,t):t.flags&1||(Ar.push(t),t.flags|=1),Id()}function au(t,e,n=Ln+1){for(;n<Xt.length;n++){const i=Xt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Xt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Nd(t){if(Ar.length){const e=[...new Set(Ar)].sort((n,i)=>ms(n)-ms(i));if(Ar.length=0,Ri){Ri.push(...e);return}for(Ri=e,Er=0;Er<Ri.length;Er++){const n=Ri[Er];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ri=null,Er=0}}const ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ud(t){try{for(Ln=0;Ln<Xt.length;Ln++){const e=Xt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<Xt.length;Ln++){const e=Xt[Ln];e&&(e.flags&=-2)}Ln=-1,Xt.length=0,Nd(),xo=null,(Xt.length||Ar.length)&&Ud()}}let Vt=null,Fd=null;function So(t){const e=Vt;return Vt=t,Fd=t&&t.type.__scopeId||null,e}function bm(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&yo(-1);const s=So(e);let o;try{o=t(...r)}finally{So(s),i._d&&yo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Oy(t,e){if(Vt===null)return t;const n=Yo(Vt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=pt]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&ni(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ni(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(li(),yn(l,n,8,[t.el,a,t,e]),ci())}}function ao(t,e){if(Yt){let n=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===n&&(n=Yt.provides=Object.create(i)),n[t]=e}}function Sn(t,e,n=!1){const i=Pc();if(i||Cr){let r=Cr?Cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}const Tm=Symbol.for("v-scx"),Am=()=>Sn(Tm);function By(t,e){return yc(t,null,e)}function lo(t,e,n){return yc(t,e,n)}function yc(t,e,n=pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=At({},n),l=e&&i||!e&&s!=="post";let c;if(xs){if(s==="sync"){const h=Am();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Gn,h.resume=Gn,h.pause=Gn,h}}const u=Yt;a.call=(h,_,M)=>yn(h,u,_,M);let d=!1;s==="post"?a.scheduler=h=>{$t(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():Ec(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Sm(t,e,a);return xs&&(c?c.push(f):l&&f()),f}function Rm(t,e,n){const i=this.proxy,r=_t(t)?t.includes(".")?Od(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const o=Ts(this),a=yc(r,s.bind(i),n);return o(),a}function Od(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Cm=Symbol("_vte"),Bd=t=>t.__isTeleport,In=Symbol("_leaveCb"),Wr=Symbol("_enterCb");function Vd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tc(()=>{t.isMounted=!0}),Yd(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Gd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},zd=t=>{const e=t.subTree;return e.component?zd(e.component):e},wm={name:"BaseTransition",props:Gd,setup(t,{slots:e}){const n=Pc(),i=Vd();return()=>{const r=e.default&&bc(e.default(),!0),s=r&&r.length?Hd(r):n.subTree?mh():void 0;if(!s)return;const o=it(t),{mode:a}=o;if(i.isLeaving)return la(s);const l=lu(s);if(!l)return la(s);let c=gs(l,o,i,n,d=>c=d);l.type!==Bt&&Qi(l,c);let u=n.subTree&&lu(n.subTree);if(u&&u.type!==Bt&&!ki(u,l)&&zd(n).type!==Bt){let d=gs(u,o,i,n);if(Qi(u,d),a==="out-in"&&l.type!==Bt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},la(s);a==="in-out"&&l.type!==Bt?d.delayLeave=(f,h,_)=>{const M=kd(i,u);M[String(u.key)]=u,f[In]=()=>{h(),f[In]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Hd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const Pm=wm;function kd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function gs(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:_,onLeaveCancelled:M,onBeforeAppear:m,onAppear:p,onAfterAppear:x,onAppearCancelled:b}=e,y=String(t.key),D=kd(n,t),A=(R,N)=>{R&&yn(R,i,9,N)},I=(R,N)=>{const P=N[1];A(R,N),Ge(R)?R.every(L=>L.length<=1)&&P():R.length<=1&&P()},v={mode:o,persisted:a,beforeEnter(R){let N=l;if(!n.isMounted)if(s)N=m||l;else return;R[In]&&R[In](!0);const P=D[y];P&&ki(t,P)&&P.el[In]&&P.el[In](),A(N,[R])},enter(R){if(D[y]===t)return;let N=c,P=u,L=d;if(!n.isMounted)if(s)N=p||c,P=x||u,L=b||d;else return;let X=!1;R[Wr]=V=>{X||(X=!0,V?A(L,[R]):A(P,[R]),v.delayedLeave&&v.delayedLeave(),R[Wr]=void 0)};const Z=R[Wr].bind(null,!1);N?I(N,[R,Z]):Z()},leave(R,N){const P=String(t.key);if(R[Wr]&&R[Wr](!0),n.isUnmounting)return N();A(f,[R]);let L=!1;R[In]=Z=>{L||(L=!0,N(),Z?A(M,[R]):A(_,[R]),R[In]=void 0,D[P]===t&&delete D[P])};const X=R[In].bind(null,!1);D[P]=t,h?I(h,[R,X]):X()},clone(R){const N=gs(R,e,n,i,r);return r&&r(N),N}};return v}function la(t){if(ko(t))return t=Di(t),t.children=null,t}function lu(t){if(!ko(t))return Bd(t.type)&&t.children?Hd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function Qi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bc(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===qt?(o.patchFlag&128&&r++,i=i.concat(bc(o.children,e,a))):(e||o.type!==Bt)&&i.push(a!=null?Di(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Ho(t,e){return We(t)?At({name:t.name},e,{setup:t}):t}function Wd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function cu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Mo=new WeakMap;function ls(t,e,n,i,r=!1){if(Ge(t)){t.forEach((M,m)=>ls(M,e&&(Ge(e)?e[m]:e),n,i,r));return}if(Rr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ls(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Yo(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,d=a.setupState,f=it(d),h=d===pt?rd:M=>cu(u,M)?!1:ot(f,M),_=(M,m)=>!(m&&cu(u,m));if(c!=null&&c!==l){if(uu(e),_t(c))u[c]=null,h(c)&&(d[c]=null);else if(zt(c)){const M=e;_(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(We(l))bs(l,a,12,[o,u]);else{const M=_t(l),m=zt(l);if(M||m){const p=()=>{if(t.f){const x=M?h(l)?d[l]:u[l]:_()||!t.k?l.value:u[t.k];if(r)Ge(x)&&uc(x,s);else if(Ge(x))x.includes(s)||x.push(s);else if(M)u[l]=[s],h(l)&&(d[l]=u[l]);else{const b=[s];_(l,t.k)&&(l.value=b),t.k&&(u[t.k]=b)}}else M?(u[l]=o,h(l)&&(d[l]=o)):m&&(_(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{p(),Mo.delete(t)};x.id=-1,Mo.set(t,x),$t(x,n)}else uu(t),p()}}}function uu(t){const e=Mo.get(t);e&&(e.flags|=8,Mo.delete(t))}Bo().requestIdleCallback;Bo().cancelIdleCallback;const Rr=t=>!!t.type.__asyncLoader,ko=t=>t.type.__isKeepAlive;function Dm(t,e){Xd(t,"a",e)}function Lm(t,e){Xd(t,"da",e)}function Xd(t,e,n=Yt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ko(r.parent.vnode)&&Im(i,e,n,r),r=r.parent}}function Im(t,e,n,i){const r=Wo(e,t,i,!0);Ac(()=>{uc(i[e],r)},n)}function Wo(t,e,n=Yt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{li();const a=Ts(n),l=yn(e,n,t,o);return a(),ci(),l});return i?r.unshift(s):r.push(s),s}}const pi=t=>(e,n=Yt)=>{(!xs||t==="sp")&&Wo(t,(...i)=>e(...i),n)},Nm=pi("bm"),Tc=pi("m"),Um=pi("bu"),qd=pi("u"),Yd=pi("bum"),Ac=pi("um"),Fm=pi("sp"),Om=pi("rtg"),Bm=pi("rtc");function Vm(t,e=Yt){Wo("ec",t,e)}const Gm=Symbol.for("v-ndc");function Vy(t,e,n,i){let r;const s=n,o=Ge(t);if(o||_t(t)){const a=o&&Zi(t);let l=!1,c=!1;a&&(l=!un(t),c=ui(t),t=Vo(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?Lr(En(t[u])):En(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(at(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Gy(t,e,n={},i,r){if(Vt.ce||Vt.parent&&Rr(Vt.parent)&&Vt.parent.ce){const c=Object.keys(n).length>0;return Ir(),ll(qt,null,[Dt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),Ir();const o=s&&Kd(s(n)),a=n.key||o&&o.key,l=ll(qt,{key:(a&&!Mn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Kd(t){return t.some(e=>vs(e)?!(e.type===Bt||e.type===qt&&!Kd(e.children)):!0)?t:null}const il=t=>t?gh(t)?Yo(t):il(t.parent):null,cs=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>t.f||(t.f=()=>{Ec(t.update)}),$nextTick:t=>t.n||(t.n=Ld.bind(t.proxy)),$watch:t=>Rm.bind(t)}),ca=(t,e)=>t!==pt&&!t.__isScriptSetup&&ot(t,e),zm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ca(i,e))return o[e]=1,i[e];if(r!==pt&&ot(r,e))return o[e]=2,r[e];if(ot(s,e))return o[e]=3,s[e];if(n!==pt&&ot(n,e))return o[e]=4,n[e];rl&&(o[e]=0)}}const c=cs[e];let u,d;if(c)return e==="$attrs"&&Ot(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==pt&&ot(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ca(r,e)?(r[e]=n,!0):i!==pt&&ot(i,e)?(i[e]=n,!0):ot(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==pt&&a[0]!=="$"&&ot(t,a)||ca(e,a)||ot(s,a)||ot(i,a)||ot(cs,a)||ot(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ot(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fu(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rl=!0;function Hm(t){const e=$d(t),n=t.proxy,i=t.ctx;rl=!1,e.beforeCreate&&du(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:b,unmounted:y,render:D,renderTracked:A,renderTriggered:I,errorCaptured:v,serverPrefetch:R,expose:N,inheritAttrs:P,components:L,directives:X,filters:Z}=e;if(c&&km(c,i,null),o)for(const z in o){const ne=o[z];We(ne)&&(i[z]=ne.bind(n))}if(r){const z=r.call(n,n);at(z)&&(t.data=Go(z))}if(rl=!0,s)for(const z in s){const ne=s[z],ue=We(ne)?ne.bind(n,n):We(ne.get)?ne.get.bind(n,n):Gn,Ee=!We(ne)&&We(ne.set)?ne.set.bind(n):Gn,we=mn({get:ue,set:Ee});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>we.value,set:Pe=>we.value=Pe})}if(a)for(const z in a)jd(a[z],i,n,z);if(l){const z=We(l)?l.call(n):l;Reflect.ownKeys(z).forEach(ne=>{ao(ne,z[ne])})}u&&du(u,t,"c");function H(z,ne){Ge(ne)?ne.forEach(ue=>z(ue.bind(n))):ne&&z(ne.bind(n))}if(H(Nm,d),H(Tc,f),H(Um,h),H(qd,_),H(Dm,M),H(Lm,m),H(Vm,v),H(Bm,A),H(Om,I),H(Yd,x),H(Ac,y),H(Fm,R),Ge(N))if(N.length){const z=t.exposed||(t.exposed={});N.forEach(ne=>{Object.defineProperty(z,ne,{get:()=>n[ne],set:ue=>n[ne]=ue,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Gn&&(t.render=D),P!=null&&(t.inheritAttrs=P),L&&(t.components=L),X&&(t.directives=X),R&&Wd(t)}function km(t,e,n=Gn){Ge(t)&&(t=sl(t));for(const i in t){const r=t[i];let s;at(r)?"default"in r?s=Sn(r.from||i,r.default,!0):s=Sn(r.from||i):s=Sn(r),zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function du(t,e,n){yn(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function jd(t,e,n,i){let r=i.includes(".")?Od(n,i):()=>n[i];if(_t(t)){const s=e[t];We(s)&&lo(r,s)}else if(We(t))lo(r,t.bind(n));else if(at(t))if(Ge(t))t.forEach(s=>jd(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&lo(r,s,t)}}function $d(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Eo(l,c,o,!0)),Eo(l,e,o)),at(e)&&s.set(e,l),l}function Eo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Eo(t,s,n,!0),r&&r.forEach(o=>Eo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wm={data:hu,props:pu,emits:pu,methods:ts,computed:ts,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:ts,directives:ts,watch:qm,provide:hu,inject:Xm};function hu(t,e){return e?t?function(){return At(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function Xm(t,e){return ts(sl(t),sl(e))}function sl(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?At(Object.create(null),t,e):e}function pu(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:At(Object.create(null),fu(t),fu(e??{})):e}function qm(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const i in e)n[i]=Ht(t[i],e[i]);return n}function Zd(){return{app:null,config:{isNativeTag:rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ym=0;function Km(t,e){return function(i,r=null){We(i)||(i=At({},i)),r!=null&&!at(r)&&(r=null);const s=Zd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Ym++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ag,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(c,...d)):We(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Dt(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Yo(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=Cr;Cr=c;try{return u()}finally{Cr=d}}};return c}}let Cr=null;const jm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vn(e)}Modifiers`]||t[`${ir(e)}Modifiers`];function $m(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||pt;let r=n;const s=e.startsWith("update:"),o=s&&jm(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>_t(u)?u.trim():u)),o.number&&(r=n.map(dc)));let a,l=i[a=ia(e)]||i[a=ia(vn(e))];!l&&s&&(l=i[a=ia(ir(e))]),l&&yn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(c,t,6,r)}}const Zm=new WeakMap;function Jd(t,e,n=!1){const i=n?Zm:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!We(t)){const l=c=>{const u=Jd(c,e,!0);u&&(a=!0,At(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(at(t)&&i.set(t,null),null):(Ge(s)?s.forEach(l=>o[l]=null):At(o,s),at(t)&&i.set(t,o),o)}function Xo(t,e){return!t||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,ir(e))||ot(t,e))}function mu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:M}=t,m=So(t);let p,x;try{if(n.shapeFlag&4){const y=r||i,D=y;p=Un(c.call(D,y,u,d,h,f,_)),x=a}else{const y=e;p=Un(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),x=e.props?a:Jm(a)}}catch(y){us.length=0,zo(y,t,1),p=Dt(Bt)}let b=p;if(x&&M!==!1){const y=Object.keys(x),{shapeFlag:D}=b;y.length&&D&7&&(s&&y.some(Fo)&&(x=Qm(x,s)),b=Di(b,x,!1,!0))}return n.dirs&&(b=Di(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Qi(b,n.transition),p=b,So(m),p}const Jm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Uo(n))&&((e||(e={}))[n]=t[n]);return e},Qm=(t,e)=>{const n={};for(const i in t)(!Fo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function eg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?gu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Qd(o,i,f)&&!Xo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gu(i,o,c):!0:!!o;return!1}function gu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Qd(e,t,s)&&!Xo(n,s))return!0}return!1}function Qd(t,e,n){const i=t[n],r=e[n];return n==="style"&&at(i)&&at(r)?!ds(i,r):i!==r}function tg({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const eh={},th=()=>Object.create(eh),nh=t=>Object.getPrototypeOf(t)===eh;function ng(t,e,n,i=!1){const r={},s=th();t.propsDefaults=Object.create(null),ih(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Cd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function ig(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=it(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Xo(t.emitsOptions,f))continue;const h=e[f];if(l)if(ot(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const _=vn(f);r[_]=ol(l,a,_,h,t,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{ih(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ot(e,d)&&((u=ir(d))===d||!ot(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ol(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ot(e,d))&&(delete s[d],c=!0)}c&&ti(t.attrs,"set","")}function ih(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ss(l))continue;const c=e[l];let u;r&&ot(r,u=vn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Xo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(n),c=a||pt;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ol(r,l,d,c[d],t,!ot(c,d))}}return o}function ol(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ts(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ir(n))&&(i=!0))}return i}const rg=new WeakMap;function rh(t,e,n=!1){const i=n?rg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!We(t)){const u=d=>{l=!0;const[f,h]=rh(d,e,!0);At(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return at(t)&&i.set(t,br),br;if(Ge(s))for(let u=0;u<s.length;u++){const d=vn(s[u]);_u(d)&&(o[d]=pt)}else if(s)for(const u in s){const d=vn(u);if(_u(d)){const f=s[u],h=o[d]=Ge(f)||We(f)?{type:f}:At({},f),_=h.type;let M=!1,m=!0;if(Ge(_))for(let p=0;p<_.length;++p){const x=_[p],b=We(x)&&x.name;if(b==="Boolean"){M=!0;break}else b==="String"&&(m=!1)}else M=We(_)&&_.name==="Boolean";h[0]=M,h[1]=m,(M||ot(h,"default"))&&a.push(d)}}const c=[o,a];return at(t)&&i.set(t,c),c}function _u(t){return t[0]!=="$"&&!ss(t)}const Rc=t=>t==="_"||t==="_ctx"||t==="$stable",Cc=t=>Ge(t)?t.map(Un):[Un(t)],sg=(t,e,n)=>{if(e._n)return e;const i=bm((...r)=>Cc(e(...r)),n);return i._c=!1,i},sh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Rc(r))continue;const s=t[r];if(We(s))e[r]=sg(r,s,i);else if(s!=null){const o=Cc(s);e[r]=()=>o}}},oh=(t,e)=>{const n=Cc(e);t.slots.default=()=>n},ah=(t,e,n)=>{for(const i in e)(n||!Rc(i))&&(t[i]=e[i])},og=(t,e,n)=>{const i=t.slots=th();if(t.vnode.shapeFlag&32){const r=e._;r?(ah(i,e,n),n&&ud(i,"_",r,!0)):sh(e,i)}else e&&oh(t,e)},ag=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:ah(r,e,n):(s=!e.$stable,sh(e,r)),o=e}else e&&(oh(t,e),o={default:1});if(s)for(const a in r)!Rc(a)&&o[a]==null&&delete r[a]},$t=dg;function lg(t){return cg(t)}function cg(t,e){const n=Bo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Gn,insertStaticContent:_}=t,M=(T,w,F,$=null,j=null,Q=null,de=void 0,ge=null,C=!!w.dynamicChildren)=>{if(T===w)return;T&&!ki(T,w)&&($=B(T),Pe(T,j,Q,!0),T=null),w.patchFlag===-2&&(C=!1,w.dynamicChildren=null);const{type:oe,ref:ve,shapeFlag:he}=w;switch(oe){case qo:m(T,w,F,$);break;case Bt:p(T,w,F,$);break;case co:T==null&&x(w,F,$,de);break;case qt:L(T,w,F,$,j,Q,de,ge,C);break;default:he&1?D(T,w,F,$,j,Q,de,ge,C):he&6?X(T,w,F,$,j,Q,de,ge,C):(he&64||he&128)&&oe.process(T,w,F,$,j,Q,de,ge,C,fe)}ve!=null&&j?ls(ve,T&&T.ref,Q,w||T,!w):ve==null&&T&&T.ref!=null&&ls(T.ref,null,Q,T,!0)},m=(T,w,F,$)=>{if(T==null)i(w.el=a(w.children),F,$);else{const j=w.el=T.el;w.children!==T.children&&c(j,w.children)}},p=(T,w,F,$)=>{T==null?i(w.el=l(w.children||""),F,$):w.el=T.el},x=(T,w,F,$)=>{[T.el,T.anchor]=_(T.children,w,F,$,T.el,T.anchor)},b=({el:T,anchor:w},F,$)=>{let j;for(;T&&T!==w;)j=f(T),i(T,F,$),T=j;i(w,F,$)},y=({el:T,anchor:w})=>{let F;for(;T&&T!==w;)F=f(T),r(T),T=F;r(w)},D=(T,w,F,$,j,Q,de,ge,C)=>{if(w.type==="svg"?de="svg":w.type==="math"&&(de="mathml"),T==null)A(w,F,$,j,Q,de,ge,C);else{const oe=T.el&&T.el._isVueCE?T.el:null;try{oe&&oe._beginPatch(),R(T,w,j,Q,de,ge,C)}finally{oe&&oe._endPatch()}}},A=(T,w,F,$,j,Q,de,ge)=>{let C,oe;const{props:ve,shapeFlag:he,transition:te,dirs:De}=T;if(C=T.el=o(T.type,Q,ve&&ve.is,ve),he&8?u(C,T.children):he&16&&v(T.children,C,null,$,j,ua(T,Q),de,ge),De&&Ni(T,null,$,"created"),I(C,T,T.scopeId,de,$),ve){for(const g in ve)g!=="value"&&!ss(g)&&s(C,g,null,ve[g],Q,$);"value"in ve&&s(C,"value",null,ve.value,Q),(oe=ve.onVnodeBeforeMount)&&Cn(oe,$,T)}De&&Ni(T,null,$,"beforeMount");const E=ug(j,te);E&&te.beforeEnter(C),i(C,w,F),((oe=ve&&ve.onVnodeMounted)||E||De)&&$t(()=>{try{oe&&Cn(oe,$,T),E&&te.enter(C),De&&Ni(T,null,$,"mounted")}finally{}},j)},I=(T,w,F,$,j)=>{if(F&&h(T,F),$)for(let Q=0;Q<$.length;Q++)h(T,$[Q]);if(j){let Q=j.subTree;if(w===Q||fh(Q.type)&&(Q.ssContent===w||Q.ssFallback===w)){const de=j.vnode;I(T,de,de.scopeId,de.slotScopeIds,j.parent)}}},v=(T,w,F,$,j,Q,de,ge,C=0)=>{for(let oe=C;oe<T.length;oe++){const ve=T[oe]=ge?ei(T[oe]):Un(T[oe]);M(null,ve,w,F,$,j,Q,de,ge)}},R=(T,w,F,$,j,Q,de)=>{const ge=w.el=T.el;let{patchFlag:C,dynamicChildren:oe,dirs:ve}=w;C|=T.patchFlag&16;const he=T.props||pt,te=w.props||pt;let De;if(F&&Ui(F,!1),(De=te.onVnodeBeforeUpdate)&&Cn(De,F,w,T),ve&&Ni(w,T,F,"beforeUpdate"),F&&Ui(F,!0),(he.innerHTML&&te.innerHTML==null||he.textContent&&te.textContent==null)&&u(ge,""),oe?N(T.dynamicChildren,oe,ge,F,$,ua(w,j),Q):de||ne(T,w,ge,null,F,$,ua(w,j),Q,!1),C>0){if(C&16)P(ge,he,te,F,j);else if(C&2&&he.class!==te.class&&s(ge,"class",null,te.class,j),C&4&&s(ge,"style",he.style,te.style,j),C&8){const E=w.dynamicProps;for(let g=0;g<E.length;g++){const O=E[g],J=he[O],ae=te[O];(ae!==J||O==="value")&&s(ge,O,J,ae,j,F)}}C&1&&T.children!==w.children&&u(ge,w.children)}else!de&&oe==null&&P(ge,he,te,F,j);((De=te.onVnodeUpdated)||ve)&&$t(()=>{De&&Cn(De,F,w,T),ve&&Ni(w,T,F,"updated")},$)},N=(T,w,F,$,j,Q,de)=>{for(let ge=0;ge<w.length;ge++){const C=T[ge],oe=w[ge],ve=C.el&&(C.type===qt||!ki(C,oe)||C.shapeFlag&198)?d(C.el):F;M(C,oe,ve,null,$,j,Q,de,!0)}},P=(T,w,F,$,j)=>{if(w!==F){if(w!==pt)for(const Q in w)!ss(Q)&&!(Q in F)&&s(T,Q,w[Q],null,j,$);for(const Q in F){if(ss(Q))continue;const de=F[Q],ge=w[Q];de!==ge&&Q!=="value"&&s(T,Q,ge,de,j,$)}"value"in F&&s(T,"value",w.value,F.value,j)}},L=(T,w,F,$,j,Q,de,ge,C)=>{const oe=w.el=T?T.el:a(""),ve=w.anchor=T?T.anchor:a("");let{patchFlag:he,dynamicChildren:te,slotScopeIds:De}=w;De&&(ge=ge?ge.concat(De):De),T==null?(i(oe,F,$),i(ve,F,$),v(w.children||[],F,ve,j,Q,de,ge,C)):he>0&&he&64&&te&&T.dynamicChildren&&T.dynamicChildren.length===te.length?(N(T.dynamicChildren,te,F,j,Q,de,ge),(w.key!=null||j&&w===j.subTree)&&lh(T,w,!0)):ne(T,w,F,ve,j,Q,de,ge,C)},X=(T,w,F,$,j,Q,de,ge,C)=>{w.slotScopeIds=ge,T==null?w.shapeFlag&512?j.ctx.activate(w,F,$,de,C):Z(w,F,$,j,Q,de,C):V(T,w,C)},Z=(T,w,F,$,j,Q,de)=>{const ge=T.component=Sg(T,$,j);if(ko(T)&&(ge.ctx.renderer=fe),Mg(ge,!1,de),ge.asyncDep){if(j&&j.registerDep(ge,H,de),!T.el){const C=ge.subTree=Dt(Bt);p(null,C,w,F),T.placeholder=C.el}}else H(ge,T,w,F,j,Q,de)},V=(T,w,F)=>{const $=w.component=T.component;if(eg(T,w,F))if($.asyncDep&&!$.asyncResolved){z($,w,F);return}else $.next=w,$.update();else w.el=T.el,$.vnode=w},H=(T,w,F,$,j,Q,de)=>{const ge=()=>{if(T.isMounted){let{next:he,bu:te,u:De,parent:E,vnode:g}=T;{const me=ch(T);if(me){he&&(he.el=g.el,z(T,he,de)),me.asyncDep.then(()=>{$t(()=>{T.isUnmounted||oe()},j)});return}}let O=he,J;Ui(T,!1),he?(he.el=g.el,z(T,he,de)):he=g,te&&oo(te),(J=he.props&&he.props.onVnodeBeforeUpdate)&&Cn(J,E,he,g),Ui(T,!0);const ae=mu(T),pe=T.subTree;T.subTree=ae,M(pe,ae,d(pe.el),B(pe),T,j,Q),he.el=ae.el,O===null&&tg(T,ae.el),De&&$t(De,j),(J=he.props&&he.props.onVnodeUpdated)&&$t(()=>Cn(J,E,he,g),j)}else{let he;const{el:te,props:De}=w,{bm:E,m:g,parent:O,root:J,type:ae}=T,pe=Rr(w);Ui(T,!1),E&&oo(E),!pe&&(he=De&&De.onVnodeBeforeMount)&&Cn(he,O,w),Ui(T,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(ae,T.parent?T.parent.type:void 0);const me=T.subTree=mu(T);M(null,me,F,$,T,j,Q),w.el=me.el}if(g&&$t(g,j),!pe&&(he=De&&De.onVnodeMounted)){const me=w;$t(()=>Cn(he,O,me),j)}(w.shapeFlag&256||O&&Rr(O.vnode)&&O.vnode.shapeFlag&256)&&T.a&&$t(T.a,j),T.isMounted=!0,w=F=$=null}};T.scope.on();const C=T.effect=new pd(ge);T.scope.off();const oe=T.update=C.run.bind(C),ve=T.job=C.runIfDirty.bind(C);ve.i=T,ve.id=T.uid,C.scheduler=()=>Ec(ve),Ui(T,!0),oe()},z=(T,w,F)=>{w.component=T;const $=T.vnode.props;T.vnode=w,T.next=null,ig(T,w.props,$,F),ag(T,w.children,F),li(),au(T),ci()},ne=(T,w,F,$,j,Q,de,ge,C=!1)=>{const oe=T&&T.children,ve=T?T.shapeFlag:0,he=w.children,{patchFlag:te,shapeFlag:De}=w;if(te>0){if(te&128){Ee(oe,he,F,$,j,Q,de,ge,C);return}else if(te&256){ue(oe,he,F,$,j,Q,de,ge,C);return}}De&8?(ve&16&&ie(oe,j,Q),he!==oe&&u(F,he)):ve&16?De&16?Ee(oe,he,F,$,j,Q,de,ge,C):ie(oe,j,Q,!0):(ve&8&&u(F,""),De&16&&v(he,F,$,j,Q,de,ge,C))},ue=(T,w,F,$,j,Q,de,ge,C)=>{T=T||br,w=w||br;const oe=T.length,ve=w.length,he=Math.min(oe,ve);let te;for(te=0;te<he;te++){const De=w[te]=C?ei(w[te]):Un(w[te]);M(T[te],De,F,null,j,Q,de,ge,C)}oe>ve?ie(T,j,Q,!0,!1,he):v(w,F,$,j,Q,de,ge,C,he)},Ee=(T,w,F,$,j,Q,de,ge,C)=>{let oe=0;const ve=w.length;let he=T.length-1,te=ve-1;for(;oe<=he&&oe<=te;){const De=T[oe],E=w[oe]=C?ei(w[oe]):Un(w[oe]);if(ki(De,E))M(De,E,F,null,j,Q,de,ge,C);else break;oe++}for(;oe<=he&&oe<=te;){const De=T[he],E=w[te]=C?ei(w[te]):Un(w[te]);if(ki(De,E))M(De,E,F,null,j,Q,de,ge,C);else break;he--,te--}if(oe>he){if(oe<=te){const De=te+1,E=De<ve?w[De].el:$;for(;oe<=te;)M(null,w[oe]=C?ei(w[oe]):Un(w[oe]),F,E,j,Q,de,ge,C),oe++}}else if(oe>te)for(;oe<=he;)Pe(T[oe],j,Q,!0),oe++;else{const De=oe,E=oe,g=new Map;for(oe=E;oe<=te;oe++){const xe=w[oe]=C?ei(w[oe]):Un(w[oe]);xe.key!=null&&g.set(xe.key,oe)}let O,J=0;const ae=te-E+1;let pe=!1,me=0;const ee=new Array(ae);for(oe=0;oe<ae;oe++)ee[oe]=0;for(oe=De;oe<=he;oe++){const xe=T[oe];if(J>=ae){Pe(xe,j,Q,!0);continue}let Te;if(xe.key!=null)Te=g.get(xe.key);else for(O=E;O<=te;O++)if(ee[O-E]===0&&ki(xe,w[O])){Te=O;break}Te===void 0?Pe(xe,j,Q,!0):(ee[Te-E]=oe+1,Te>=me?me=Te:pe=!0,M(xe,w[Te],F,null,j,Q,de,ge,C),J++)}const le=pe?fg(ee):br;for(O=le.length-1,oe=ae-1;oe>=0;oe--){const xe=E+oe,Te=w[xe],Se=w[xe+1],_e=xe+1<ve?Se.el||uh(Se):$;ee[oe]===0?M(null,Te,F,_e,j,Q,de,ge,C):pe&&(O<0||oe!==le[O]?we(Te,F,_e,2):O--)}}},we=(T,w,F,$,j=null)=>{const{el:Q,type:de,transition:ge,children:C,shapeFlag:oe}=T;if(oe&6){we(T.component.subTree,w,F,$);return}if(oe&128){T.suspense.move(w,F,$);return}if(oe&64){de.move(T,w,F,fe);return}if(de===qt){i(Q,w,F);for(let he=0;he<C.length;he++)we(C[he],w,F,$);i(T.anchor,w,F);return}if(de===co){b(T,w,F);return}if($!==2&&oe&1&&ge)if($===0)ge.beforeEnter(Q),i(Q,w,F),$t(()=>ge.enter(Q),j);else{const{leave:he,delayLeave:te,afterLeave:De}=ge,E=()=>{T.ctx.isUnmounted?r(Q):i(Q,w,F)},g=()=>{Q._isLeaving&&Q[In](!0),he(Q,()=>{E(),De&&De()})};te?te(Q,E,g):g()}else i(Q,w,F)},Pe=(T,w,F,$=!1,j=!1)=>{const{type:Q,props:de,ref:ge,children:C,dynamicChildren:oe,shapeFlag:ve,patchFlag:he,dirs:te,cacheIndex:De,memo:E}=T;if(he===-2&&(j=!1),ge!=null&&(li(),ls(ge,null,F,T,!0),ci()),De!=null&&(w.renderCache[De]=void 0),ve&256){w.ctx.deactivate(T);return}const g=ve&1&&te,O=!Rr(T);let J;if(O&&(J=de&&de.onVnodeBeforeUnmount)&&Cn(J,w,T),ve&6)Ve(T.component,F,$);else{if(ve&128){T.suspense.unmount(F,$);return}g&&Ni(T,null,w,"beforeUnmount"),ve&64?T.type.remove(T,w,F,fe,$):oe&&!oe.hasOnce&&(Q!==qt||he>0&&he&64)?ie(oe,w,F,!1,!0):(Q===qt&&he&384||!j&&ve&16)&&ie(C,w,F),$&&Ke(T)}const ae=E!=null&&De==null;(O&&(J=de&&de.onVnodeUnmounted)||g||ae)&&$t(()=>{J&&Cn(J,w,T),g&&Ni(T,null,w,"unmounted"),ae&&(T.el=null)},F)},Ke=T=>{const{type:w,el:F,anchor:$,transition:j}=T;if(w===qt){Ze(F,$);return}if(w===co){y(T);return}const Q=()=>{r(F),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:de,delayLeave:ge}=j,C=()=>de(F,Q);ge?ge(T.el,Q,C):C()}else Q()},Ze=(T,w)=>{let F;for(;T!==w;)F=f(T),r(T),T=F;r(w)},Ve=(T,w,F)=>{const{bum:$,scope:j,job:Q,subTree:de,um:ge,m:C,a:oe}=T;vu(C),vu(oe),$&&oo($),j.stop(),Q&&(Q.flags|=8,Pe(de,T,w,F)),ge&&$t(ge,w),$t(()=>{T.isUnmounted=!0},w)},ie=(T,w,F,$=!1,j=!1,Q=0)=>{for(let de=Q;de<T.length;de++)Pe(T[de],w,F,$,j)},B=T=>{if(T.shapeFlag&6)return B(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=f(T.anchor||T.el),F=w&&w[Cm];return F?f(F):w};let Y=!1;const re=(T,w,F)=>{let $;T==null?w._vnode&&(Pe(w._vnode,null,null,!0),$=w._vnode.component):M(w._vnode||null,T,w,null,null,null,F),w._vnode=T,Y||(Y=!0,au($),Nd(),Y=!1)},fe={p:M,um:Pe,m:we,r:Ke,mt:Z,mc:v,pc:ne,pbc:N,n:B,o:t};return{render:re,hydrate:void 0,createApp:Km(re)}}function ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ui({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lh(t,e,n=!1){const i=t.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ei(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&lh(o,a)),a.type===qo&&(a.patchFlag===-1&&(a=r[s]=ei(a)),a.el=o.el),a.type===Bt&&!a.el&&(a.el=o.el)}}function fg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function ch(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ch(e)}function vu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function uh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?uh(e.subTree):null}const fh=t=>t.__isSuspense;function dg(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):ym(t)}const qt=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),co=Symbol.for("v-stc"),us=[];let nn=null;function Ir(t=!1){us.push(nn=t?null:[])}function hg(){us.pop(),nn=us[us.length-1]||null}let _s=1;function yo(t,e=!1){_s+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function dh(t){return t.dynamicChildren=_s>0?nn||br:null,hg(),_s>0&&nn&&nn.push(t),t}function al(t,e,n,i,r,s){return dh(ph(t,e,n,i,r,s,!0))}function ll(t,e,n,i,r){return dh(Dt(t,e,n,i,r,!0))}function vs(t){return t?t.__v_isVNode===!0:!1}function ki(t,e){return t.type===e.type&&t.key===e.key}const hh=({key:t})=>t??null,uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||zt(t)||We(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function ph(t,e=null,n=null,i=0,r=null,s=t===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hh(e),ref:e&&uo(e),scopeId:Fd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(wc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),_s>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const Dt=pg;function pg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Gm)&&(t=Bt),vs(t)){const a=Di(t,e,!0);return n&&wc(a,n),_s>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(t)]=a:nn.push(a)),a.patchFlag=-2,a}if(Tg(t)&&(t=t.__vccOpts),e){e=mg(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=pc(a)),at(l)&&(Mc(l)&&!Ge(l)&&(l=At({},l)),e.style=hc(l))}const o=_t(t)?1:fh(t)?128:Bd(t)?64:at(t)?4:We(t)?2:0;return ph(t,e,n,i,r,o,s,!0)}function mg(t){return t?Mc(t)||nh(t)?At({},t):t:null}function Di(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?_g(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&hh(c),ref:e&&e.ref?n&&s?Ge(s)?s.concat(uo(e)):[s,uo(e)]:uo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Di(t.ssContent),ssFallback:t.ssFallback&&Di(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Qi(u,l.clone(u)),u}function gg(t=" ",e=0){return Dt(qo,null,t,e)}function zy(t,e){const n=Dt(co,null,t);return n.staticCount=e,n}function mh(t="",e=!1){return e?(Ir(),ll(Bt,null,t)):Dt(Bt,null,t)}function Un(t){return t==null||typeof t=="boolean"?Dt(Bt):Ge(t)?Dt(qt,null,t.slice()):vs(t)?ei(t):Dt(qo,null,String(t))}function ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Di(t)}function wc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!nh(e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[gg(e)]):n=8);t.children=e,t.shapeFlag|=n}function _g(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pc([e.class,i.class]));else if(r==="style")e.style=hc([e.style,i.style]);else if(Uo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ge(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Fo(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Cn(t,e,n,i=null){yn(t,e,7,[n,i])}const vg=Zd();let xg=0;function Sg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||vg,s={uid:xg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rh(i,r),emitsOptions:Jd(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$m.bind(null,s),t.ce&&t.ce(s),s}let Yt=null;const Pc=()=>Yt||Vt;let bo,cl;{const t=Bo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};bo=e("__VUE_INSTANCE_SETTERS__",n=>Yt=n),cl=e("__VUE_SSR_SETTERS__",n=>xs=n)}const Ts=t=>{const e=Yt;return bo(t),t.scope.on(),()=>{t.scope.off(),bo(e)}},xu=()=>{Yt&&Yt.scope.off(),bo(null)};function gh(t){return t.vnode.shapeFlag&4}let xs=!1;function Mg(t,e=!1,n=!1){e&&cl(e);const{props:i,children:r}=t.vnode,s=gh(t);ng(t,i,s,e),og(t,r,n||e);const o=s?Eg(t,e):void 0;return e&&cl(!1),o}function Eg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zm);const{setup:i}=n;if(i){li();const r=t.setupContext=i.length>1?bg(t):null,s=Ts(t),o=bs(i,t,0,[t.props,r]),a=od(o);if(ci(),s(),(a||t.sp)&&!Rr(t)&&Wd(t),a){if(o.then(xu,xu),e)return o.then(l=>{Su(t,l)}).catch(l=>{zo(l,t,0)});t.asyncDep=o}else Su(t,o)}else _h(t)}function Su(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Pd(e)),_h(t)}function _h(t,e,n){const i=t.type;t.render||(t.render=i.render||Gn);{const r=Ts(t);li();try{Hm(t)}finally{ci(),r()}}}const yg={get(t,e){return Ot(t,"get",""),t[e]}};function bg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yg),slots:t.slots,emit:t.emit,expose:e}}function Yo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pd(hm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cs)return cs[n](t)},has(e,n){return n in e||n in cs}})):t.proxy}function Tg(t){return We(t)&&"__vccOpts"in t}const mn=(t,e)=>vm(t,e,xs);function Dc(t,e,n){try{yo(-1);const i=arguments.length;return i===2?at(e)&&!Ge(e)?vs(e)?Dt(t,null,[e]):Dt(t,e):Dt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vs(n)&&(n=[n]),Dt(t,e,n))}finally{yo(1)}}const Ag="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{ul=Mu.createPolicy("vue",{createHTML:t=>t})}catch{}const vh=ul?t=>ul.createHTML(t):t=>t,Rg="http://www.w3.org/2000/svg",Cg="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Eu=Qn&&Qn.createElement("template"),wg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Qn.createElementNS(Rg,t):e==="mathml"?Qn.createElementNS(Cg,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Eu.innerHTML=vh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Eu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vi="transition",Xr="animation",Nr=Symbol("_vtc"),xh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sh=At({},Gd,xh),Pg=t=>(t.displayName="Transition",t.props=Sh,t),Hy=Pg((t,{slots:e})=>Dc(Pm,Mh(t),e)),Fi=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},yu=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function Mh(t){const e={};for(const L in t)L in xh||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,_=Dg(r),M=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:b,onLeave:y,onLeaveCancelled:D,onBeforeAppear:A=p,onAppear:I=x,onAppearCancelled:v=b}=e,R=(L,X,Z,V)=>{L._enterCancelled=V,Ai(L,X?u:a),Ai(L,X?c:o),Z&&Z()},N=(L,X)=>{L._isLeaving=!1,Ai(L,d),Ai(L,h),Ai(L,f),X&&X()},P=L=>(X,Z)=>{const V=L?I:x,H=()=>R(X,L,Z);Fi(V,[X,H]),bu(()=>{Ai(X,L?l:s),Dn(X,L?u:a),yu(V)||Tu(X,i,M,H)})};return At(e,{onBeforeEnter(L){Fi(p,[L]),Dn(L,s),Dn(L,o)},onBeforeAppear(L){Fi(A,[L]),Dn(L,l),Dn(L,c)},onEnter:P(!1),onAppear:P(!0),onLeave(L,X){L._isLeaving=!0;const Z=()=>N(L,X);Dn(L,d),L._enterCancelled?(Dn(L,f),fl(L)):(fl(L),Dn(L,f)),bu(()=>{L._isLeaving&&(Ai(L,d),Dn(L,h),yu(y)||Tu(L,i,m,Z))}),Fi(y,[L,Z])},onEnterCancelled(L){R(L,!1,void 0,!0),Fi(b,[L])},onAppearCancelled(L){R(L,!0,void 0,!0),Fi(v,[L])},onLeaveCancelled(L){N(L),Fi(D,[L])}})}function Dg(t){if(t==null)return null;if(at(t))return[fa(t.enter),fa(t.leave)];{const e=fa(t);return[e,e]}}function fa(t){return Bp(t)}function Dn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Nr]||(t[Nr]=new Set)).add(e)}function Ai(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Nr];n&&(n.delete(e),n.size||(t[Nr]=void 0))}function bu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Lg=0;function Tu(t,e,n,i){const r=t._endId=++Lg,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Eh(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),s()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function Eh(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${vi}Delay`),s=i(`${vi}Duration`),o=Au(r,s),a=i(`${Xr}Delay`),l=i(`${Xr}Duration`),c=Au(a,l);let u=null,d=0,f=0;e===vi?o>0&&(u=vi,d=o,f=s.length):e===Xr?c>0&&(u=Xr,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?vi:Xr:null,f=u?u===vi?s.length:l.length:0);const h=u===vi&&/\b(?:transform|all)(?:,|$)/.test(i(`${vi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Au(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ru(n)+Ru(t[i])))}function Ru(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function fl(t){return(t?t.ownerDocument:document).body.offsetHeight}function Ig(t,e,n){const i=t[Nr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const To=Symbol("_vod"),yh=Symbol("_vsh"),ky={name:"show",beforeMount(t,{value:e},{transition:n}){t[To]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):qr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),qr(t,!0),i.enter(t)):i.leave(t,()=>{qr(t,!1)}):qr(t,e))},beforeUnmount(t,{value:e}){qr(t,e)}};function qr(t,e){t.style.display=e?t[To]:"none",t[yh]=!e}const Ng=Symbol(""),Ug=/(?:^|;)\s*display\s*:/;function Fg(t,e,n){const i=t.style,r=_t(n);let s=!1;if(n&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ns(i,a,"")}else for(const o in e)n[o]==null&&ns(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?Bg(t,o,!_t(e)&&e?e[o]:void 0,a)||ns(i,o,a):ns(i,o,"")}}else if(r){if(e!==n){const o=i[Ng];o&&(n+=";"+o),i.cssText=n,s=Ug.test(n)}}else e&&t.removeAttribute("style");To in t&&(t[To]=s?i.display:"",t[yh]&&(i.display="none"))}const Cu=/\s*!important$/;function ns(t,e,n){if(Ge(n))n.forEach(i=>ns(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Og(t,e);Cu.test(n)?t.setProperty(ir(i),n.replace(Cu,""),"important"):t[i]=n}}const wu=["Webkit","Moz","ms"],da={};function Og(t,e){const n=da[e];if(n)return n;let i=vn(e);if(i!=="filter"&&i in t)return da[e]=i;i=cd(i);for(let r=0;r<wu.length;r++){const s=wu[r]+i;if(s in t)return da[e]=s}return e}function Bg(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&_t(i)&&n===i}const Pu="http://www.w3.org/1999/xlink";function Du(t,e,n,i,r,s=Wp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Pu,e.slice(6,e.length)):t.setAttributeNS(Pu,e,n):n==null||s&&!fd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Mn(n)?String(n):n)}function Lu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=fd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Wi(t,e,n,i){t.addEventListener(e,n,i)}function Vg(t,e,n,i){t.removeEventListener(e,n,i)}const Iu=Symbol("_vei");function Gg(t,e,n,i,r=null){const s=t[Iu]||(t[Iu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=zg(e);if(i){const c=s[e]=Wg(i,r);Wi(t,a,c,l)}else o&&(Vg(t,a,o,l),s[e]=void 0)}}const Nu=/(?:Once|Passive|Capture)$/;function zg(t){let e;if(Nu.test(t)){e={};let i;for(;i=t.match(Nu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ir(t.slice(2)),e]}let ha=0;const Hg=Promise.resolve(),kg=()=>ha||(Hg.then(()=>ha=0),ha=Date.now());function Wg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;yn(Xg(i,n.value),e,5,[i])};return n.value=t,n.attached=kg(),n}function Xg(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Uu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Ig(t,i,o):e==="style"?Fg(t,n,i):Uo(e)?Fo(e)||Gg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yg(t,e,i,o))?(Lu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Du(t,e,i,o,s,e!=="value")):t._isVueCE&&(Kg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!_t(i)))?Lu(t,vn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Du(t,e,i,o))};function Yg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Uu(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Uu(e)&&_t(n)?!1:e in t}function Kg(t,e){const n=t._def.props;if(!n)return!1;const i=vn(e);return Array.isArray(n)?n.some(r=>vn(r)===i):Object.keys(n).some(r=>vn(r)===i)}const bh=new WeakMap,Th=new WeakMap,Ao=Symbol("_moveCb"),Fu=Symbol("_enterCb"),jg=t=>(delete t.props.mode,t),$g=jg({name:"TransitionGroup",props:At({},Sh,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Pc(),i=Vd();let r,s;return qd(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!e_(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(Zg),r.forEach(Jg);const a=r.filter(Qg);fl(n.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;Dn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[Ao]=f=>{f&&f.target!==c||(!f||f.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",d),c[Ao]=null,Ai(c,o))};c.addEventListener("transitionend",d)}),r=[]}),()=>{const o=it(t),a=Mh(o);let l=o.tag||qt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Qi(u,gs(u,a,i,n)),bh.set(u,Ah(u.el)))}s=e.default?bc(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Qi(u,gs(u,a,i,n))}return Dt(l,null,s)}}}),Wy=$g;function Zg(t){const e=t.el;e[Ao]&&e[Ao](),e[Fu]&&e[Fu]()}function Jg(t){Th.set(t,Ah(t.el))}function Qg(t){const e=bh.get(t),n=Th.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el,o=s.style,a=s.getBoundingClientRect();let l=1,c=1;return s.offsetWidth&&(l=a.width/s.offsetWidth),s.offsetHeight&&(c=a.height/s.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${r/c}px)`,o.transitionDuration="0s",t}}function Ah(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function e_(t,e,n){const i=t.cloneNode(),r=t[Nr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Eh(i);return s.removeChild(i),o}const Ro=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ge(e)?n=>oo(e,n):e};function t_(t){t.target.composing=!0}function Ou(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wr=Symbol("_assign");function Bu(t,e,n){return e&&(t=t.trim()),n&&(t=dc(t)),t}const Xy={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[wr]=Ro(r);const s=i||r.props&&r.props.type==="number";Wi(t,e?"change":"input",o=>{o.target.composing||t[wr](Bu(t.value,n,s))}),(n||s)&&Wi(t,"change",()=>{t.value=Bu(t.value,n,s)}),e||(Wi(t,"compositionstart",t_),Wi(t,"compositionend",Ou),Wi(t,"change",Ou))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[wr]=Ro(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?dc(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l)}},qy={created(t,{value:e},n){t.checked=ds(e,n.props.value),t[wr]=Ro(n),Wi(t,"change",()=>{t[wr](n_(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[wr]=Ro(i),e!==n&&(t.checked=ds(e,i.props.value))}};function n_(t){return"_value"in t?t._value:t.value}const i_=["ctrl","shift","alt","meta"],r_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>i_.some(n=>t[`${n}Key`]&&!e.includes(n))},Yy=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=r_[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},s_=At({patchProp:qg},wg);let Vu;function o_(){return Vu||(Vu=lg(s_))}const a_=((...t)=>{const e=o_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=c_(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,l_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function l_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function c_(t){return _t(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yr=typeof document<"u";function Rh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function u_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Rh(t.default)}const st=Object.assign;function pa(t,e){const n={};for(const i in e){const r=e[i];n[i]=bn(r)?r.map(t):t(r)}return n}const fs=()=>{},bn=Array.isArray;function Gu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Ch=/#/g,f_=/&/g,d_=/\//g,h_=/=/g,p_=/\?/g,wh=/\+/g,m_=/%5B/g,g_=/%5D/g,Ph=/%5E/g,__=/%60/g,Dh=/%7B/g,v_=/%7C/g,Lh=/%7D/g,x_=/%20/g;function Lc(t){return t==null?"":encodeURI(""+t).replace(v_,"|").replace(m_,"[").replace(g_,"]")}function S_(t){return Lc(t).replace(Dh,"{").replace(Lh,"}").replace(Ph,"^")}function dl(t){return Lc(t).replace(wh,"%2B").replace(x_,"+").replace(Ch,"%23").replace(f_,"%26").replace(__,"`").replace(Dh,"{").replace(Lh,"}").replace(Ph,"^")}function M_(t){return dl(t).replace(h_,"%3D")}function E_(t){return Lc(t).replace(Ch,"%23").replace(p_,"%3F")}function y_(t){return E_(t).replace(d_,"%2F")}function Ss(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const b_=/\/$/,T_=t=>t.replace(b_,"");function ma(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=w_(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Ss(o)}}function A_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function R_(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ur(e.matched[i],n.matched[r])&&Ih(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ih(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!C_(t[n],e[n]))return!1;return!0}function C_(t,e){return bn(t)?Hu(t,e):bn(e)?Hu(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Hu(t,e){return bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function w_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let hl=(function(t){return t.pop="pop",t.push="push",t})({}),ga=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function P_(t){if(!t)if(yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),T_(t)}const D_=/^[^#]+#/;function L_(t,e){return t.replace(D_,"#")+e}function I_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ko=()=>({left:window.scrollX,top:window.scrollY});function N_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=I_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ku(t,e){return(history.state?history.state.position-e:-1)+t}const pl=new Map;function U_(t,e){pl.set(t,e)}function F_(t){const e=pl.get(t);return pl.delete(t),e}function O_(t){return typeof t=="string"||t&&typeof t=="object"}function Nh(t){return typeof t=="string"||typeof t=="symbol"}let xt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Uh=Symbol("");xt.MATCHER_NOT_FOUND+"",xt.NAVIGATION_GUARD_REDIRECT+"",xt.NAVIGATION_ABORTED+"",xt.NAVIGATION_CANCELLED+"",xt.NAVIGATION_DUPLICATED+"";function Fr(t,e){return st(new Error,{type:t,[Uh]:!0},e)}function Yn(t,e){return t instanceof Error&&Uh in t&&(e==null||!!(t.type&e))}const B_=["params","query","hash"];function V_(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of B_)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function G_(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(wh," "),s=r.indexOf("="),o=Ss(s<0?r:r.slice(0,s)),a=s<0?null:Ss(r.slice(s+1));if(o in e){let l=e[o];bn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Wu(t){let e="";for(let n in t){const i=t[n];if(n=M_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(i)?i.map(r=>r&&dl(r)):[i&&dl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function z_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const H_=Symbol(""),Xu=Symbol(""),jo=Symbol(""),Ic=Symbol(""),ml=Symbol("");function Yr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ci(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Fr(xt.NAVIGATION_ABORTED,{from:n,to:e})):f instanceof Error?l(f):O_(f)?l(Fr(xt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function _a(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Rh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ci(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=u_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Ci(f,n,i,o,a,r)()}))}}return s}function k_(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ur(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ur(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let W_=()=>location.protocol+"//"+location.host;function Fh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),zu(a,"")}return zu(n,t)+i+r}function X_(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const h=Fh(t,location),_=n.value,M=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===_){o=null;return}m=M?f.position-M.position:0}else i(h);r.forEach(p=>{p(n.value,_,{delta:m,type:hl.pop,direction:m?m>0?ga.forward:ga.back:ga.unknown})})};function l(){o=n.value}function c(f){r.push(f);const h=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(st({},f.state,{scroll:Ko()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function qu(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ko():null}}function q_(t){const{history:e,location:n}=window,i={value:Fh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:W_()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){s(l,st({},e.state,qu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:Ko()});s(u.current,u,!0),s(l,st({},qu(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Y_(t){t=P_(t);const e=q_(t),n=X_(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=st({location:"",base:t,go:i,createHref:L_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Yi=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Rt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Rt||{});const K_={type:Yi.Static,value:""},j_=/[a-zA-Z0-9_]/;function $_(t){if(!t)return[[]];if(t==="/")return[[K_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Rt.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(n===Rt.Static?s.push({type:Yi.Static,value:c}):n===Rt.Param||n===Rt.ParamRegExp||n===Rt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Yi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Rt.ParamRegExp){i=n,n=Rt.EscapeNext;continue}switch(n){case Rt.Static:l==="/"?(c&&d(),o()):l===":"?(d(),n=Rt.Param):f();break;case Rt.EscapeNext:f(),n=i;break;case Rt.Param:l==="("?n=Rt.ParamRegExp:j_.test(l)?f():(d(),n=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Rt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Rt.ParamRegExpEnd:u+=l;break;case Rt.ParamRegExpEnd:d(),n=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const Yu="[^/]+?",Z_={sensitive:!1,strict:!1,start:!0,end:!0};var Wt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Wt||{});const J_=/[.+*?^${}()[\]/\\]/g;function Q_(t,e){const n=st({},Z_,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Wt.Root];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Wt.Segment+(n.sensitive?Wt.BonusCaseSensitive:0);if(f.type===Yi.Static)d||(r+="/"),r+=f.value.replace(J_,"\\$&"),h+=Wt.Static;else if(f.type===Yi.Param){const{value:_,repeatable:M,optional:m,regexp:p}=f;s.push({name:_,repeatable:M,optional:m});const x=p||Yu;if(x!==Yu){h+=Wt.BonusCustomRegExp;try{`${x}`}catch(y){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+y.message)}}let b=M?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,h+=Wt.Dynamic,m&&(h+=Wt.BonusOptional),M&&(h+=Wt.BonusRepeatable),x===".*"&&(h+=Wt.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Wt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",_=s[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===Yi.Static)u+=h.value;else if(h.type===Yi.Param){const{value:_,repeatable:M,optional:m}=h,p=_ in c?c[_]:"";if(bn(p)&&!M)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=bn(p)?p.join("/"):p;if(!x)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function e0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Wt.Static+Wt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Wt.Static+Wt.Segment?1:-1:0}function Oh(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=e0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Ku(i))return 1;if(Ku(r))return-1}return r.length-i.length}function Ku(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const t0={strict:!1,end:!0,sensitive:!1};function n0(t,e,n){const i=Q_($_(t.path),n),r=st(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function i0(t,e){const n=[],i=new Map;e=Gu(t0,e);function r(d){return i.get(d)}function s(d,f,h){const _=!h,M=$u(d);M.aliasOf=h&&h.record;const m=Gu(e,d),p=[M];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of y)p.push($u(st({},M,{components:h?h.record.components:M.components,path:D,aliasOf:h?h.record:M})))}let x,b;for(const y of p){const{path:D}=y;if(f&&D[0]!=="/"){const A=f.record.path,I=A[A.length-1]==="/"?"":"/";y.path=f.record.path+(D&&I+D)}if(x=n0(y,f,m),h?h.alias.push(x):(b=b||x,b!==x&&b.alias.push(x),_&&d.name&&!Zu(x)&&o(d.name)),Bh(x)&&l(x),M.children){const A=M.children;for(let I=0;I<A.length;I++)s(A[I],x,h&&h.children[I])}h=h||x}return b?()=>{o(b)}:fs}function o(d){if(Nh(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=o0(d,n);n.splice(f,0,d),d.record.name&&!Zu(d)&&i.set(d.record.name,d)}function c(d,f){let h,_={},M,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Fr(xt.MATCHER_NOT_FOUND,{location:d});m=h.record.name,_=st(ju(f.params,h.keys.filter(b=>!b.optional).concat(h.parent?h.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&ju(d.params,h.keys.map(b=>b.name))),M=h.stringify(_)}else if(d.path!=null)M=d.path,h=n.find(b=>b.re.test(M)),h&&(_=h.parse(M),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(b=>b.re.test(f.path)),!h)throw Fr(xt.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,_=st({},f.params,d.params),M=h.stringify(_)}const p=[];let x=h;for(;x;)p.unshift(x.record),x=x.parent;return{name:m,path:M,params:_,matched:p,meta:s0(p)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ju(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function $u(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:r0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function r0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Zu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function s0(t){return t.reduce((e,n)=>st(e,n.meta),{})}function o0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Oh(t,e[s])<0?i=s:n=s+1}const r=a0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function a0(t){let e=t;for(;e=e.parent;)if(Bh(e)&&Oh(t,e)===0)return e}function Bh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ju(t){const e=Sn(jo),n=Sn(Ic),i=mn(()=>{const l=Ji(t.to);return e.resolve(l)}),r=mn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ur.bind(null,u));if(f>-1)return f;const h=Qu(l[c-2]);return c>1&&Qu(u)===h&&d[d.length-1].path!==h?d.findIndex(Ur.bind(null,l[c-2])):f}),s=mn(()=>r.value>-1&&d0(n.params,i.value.params)),o=mn(()=>r.value>-1&&r.value===n.matched.length-1&&Ih(n.params,i.value.params));function a(l={}){if(f0(l)){const c=e[Ji(t.replace)?"replace":"push"](Ji(t.to)).catch(fs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:mn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function l0(t){return t.length===1?t[0]:t}const c0=Ho({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ju,setup(t,{slots:e}){const n=Go(Ju(t)),{options:i}=Sn(jo),r=mn(()=>({[ef(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ef(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&l0(e.default(n));return t.custom?s:Dc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),u0=c0;function f0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function d0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!bn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function Qu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ef=(t,e,n)=>t??e??n,h0=Ho({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Sn(ml),r=mn(()=>t.route||i.value),s=Sn(Xu,0),o=mn(()=>{let c=Ji(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=mn(()=>r.value.matched[o.value]);ao(Xu,mn(()=>o.value+1)),ao(H_,a),ao(ml,r);const l=nl();return lo(()=>[l.value,a.value,t.name],([c,u,d],[f,h,_])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ur(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(M=>M(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return tf(n.default,{Component:f,route:c});const h=d.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Dc(f,st({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return tf(n.default,{Component:m,route:c})||m}}});function tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vh=h0;function p0(t){const e=i0(t.routes,t),n=t.parseQuery||G_,i=t.stringifyQuery||Wu,r=t.history,s=Yr(),o=Yr(),a=Yr(),l=pm(xi);let c=xi;yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,B=>""+B),d=pa.bind(null,y_),f=pa.bind(null,Ss);function h(B,Y){let re,fe;return Nh(B)?(re=e.getRecordMatcher(B),fe=Y):fe=B,e.addRoute(fe,re)}function _(B){const Y=e.getRecordMatcher(B);Y&&e.removeRoute(Y)}function M(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,Y){if(Y=st({},Y||l.value),typeof B=="string"){const F=ma(n,B,Y.path),$=e.resolve({path:F.path},Y),j=r.createHref(F.fullPath);return st(F,$,{params:f($.params),hash:Ss(F.hash),redirectedFrom:void 0,href:j})}let re;if(B.path!=null)re=st({},B,{path:ma(n,B.path,Y.path).path});else{const F=st({},B.params);for(const $ in F)F[$]==null&&delete F[$];re=st({},B,{params:d(F)}),Y.params=d(Y.params)}const fe=e.resolve(re,Y),ye=B.hash||"";fe.params=u(f(fe.params));const T=A_(i,st({},B,{hash:S_(ye),path:fe.path})),w=r.createHref(T);return st({fullPath:T,hash:ye,query:i===Wu?z_(B.query):B.query||{}},fe,{redirectedFrom:void 0,href:w})}function x(B){return typeof B=="string"?ma(n,B,l.value.path):st({},B)}function b(B,Y){if(c!==B)return Fr(xt.NAVIGATION_CANCELLED,{from:Y,to:B})}function y(B){return I(B)}function D(B){return y(st(x(B),{replace:!0}))}function A(B,Y){const re=B.matched[B.matched.length-1];if(re&&re.redirect){const{redirect:fe}=re;let ye=typeof fe=="function"?fe(B,Y):fe;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=x(ye):{path:ye},ye.params={}),st({query:B.query,hash:B.hash,params:ye.path!=null?{}:B.params},ye)}}function I(B,Y){const re=c=p(B),fe=l.value,ye=B.state,T=B.force,w=B.replace===!0,F=A(re,fe);if(F)return I(st(x(F),{state:typeof F=="object"?st({},ye,F.state):ye,force:T,replace:w}),Y||re);const $=re;$.redirectedFrom=Y;let j;return!T&&R_(i,fe,re)&&(j=Fr(xt.NAVIGATION_DUPLICATED,{to:$,from:fe}),we(fe,fe,!0,!1)),(j?Promise.resolve(j):N($,fe)).catch(Q=>Yn(Q)?Yn(Q,xt.NAVIGATION_GUARD_REDIRECT)?Q:Ee(Q):ne(Q,$,fe)).then(Q=>{if(Q){if(Yn(Q,xt.NAVIGATION_GUARD_REDIRECT))return I(st({replace:w},x(Q.to),{state:typeof Q.to=="object"?st({},ye,Q.to.state):ye,force:T}),Y||$)}else Q=L($,fe,!0,w,ye);return P($,fe,Q),Q})}function v(B,Y){const re=b(B,Y);return re?Promise.reject(re):Promise.resolve()}function R(B){const Y=Ze.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(B):B()}function N(B,Y){let re;const[fe,ye,T]=k_(B,Y);re=_a(fe.reverse(),"beforeRouteLeave",B,Y);for(const F of fe)F.leaveGuards.forEach($=>{re.push(Ci($,B,Y))});const w=v.bind(null,B,Y);return re.push(w),ie(re).then(()=>{re=[];for(const F of s.list())re.push(Ci(F,B,Y));return re.push(w),ie(re)}).then(()=>{re=_a(ye,"beforeRouteUpdate",B,Y);for(const F of ye)F.updateGuards.forEach($=>{re.push(Ci($,B,Y))});return re.push(w),ie(re)}).then(()=>{re=[];for(const F of T)if(F.beforeEnter)if(bn(F.beforeEnter))for(const $ of F.beforeEnter)re.push(Ci($,B,Y));else re.push(Ci(F.beforeEnter,B,Y));return re.push(w),ie(re)}).then(()=>(B.matched.forEach(F=>F.enterCallbacks={}),re=_a(T,"beforeRouteEnter",B,Y,R),re.push(w),ie(re))).then(()=>{re=[];for(const F of o.list())re.push(Ci(F,B,Y));return re.push(w),ie(re)}).catch(F=>Yn(F,xt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function P(B,Y,re){a.list().forEach(fe=>R(()=>fe(B,Y,re)))}function L(B,Y,re,fe,ye){const T=b(B,Y);if(T)return T;const w=Y===xi,F=yr?history.state:{};re&&(fe||w?r.replace(B.fullPath,st({scroll:w&&F&&F.scroll},ye)):r.push(B.fullPath,ye)),l.value=B,we(B,Y,re,w),Ee()}let X;function Z(){X||(X=r.listen((B,Y,re)=>{if(!Ve.listening)return;const fe=p(B),ye=A(fe,Ve.currentRoute.value);if(ye){I(st(ye,{replace:!0,force:!0}),fe).catch(fs);return}c=fe;const T=l.value;yr&&U_(ku(T.fullPath,re.delta),Ko()),N(fe,T).catch(w=>Yn(w,xt.NAVIGATION_ABORTED|xt.NAVIGATION_CANCELLED)?w:Yn(w,xt.NAVIGATION_GUARD_REDIRECT)?(I(st(x(w.to),{force:!0}),fe).then(F=>{Yn(F,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===hl.pop&&r.go(-1,!1)}).catch(fs),Promise.reject()):(re.delta&&r.go(-re.delta,!1),ne(w,fe,T))).then(w=>{w=w||L(fe,T,!1),w&&(re.delta&&!Yn(w,xt.NAVIGATION_CANCELLED)?r.go(-re.delta,!1):re.type===hl.pop&&Yn(w,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),P(fe,T,w)}).catch(fs)}))}let V=Yr(),H=Yr(),z;function ne(B,Y,re){Ee(B);const fe=H.list();return fe.length?fe.forEach(ye=>ye(B,Y,re)):console.error(B),Promise.reject(B)}function ue(){return z&&l.value!==xi?Promise.resolve():new Promise((B,Y)=>{V.add([B,Y])})}function Ee(B){return z||(z=!B,Z(),V.list().forEach(([Y,re])=>B?re(B):Y()),V.reset()),B}function we(B,Y,re,fe){const{scrollBehavior:ye}=t;if(!yr||!ye)return Promise.resolve();const T=!re&&F_(ku(B.fullPath,0))||(fe||!re)&&history.state&&history.state.scroll||null;return Ld().then(()=>ye(B,Y,T)).then(w=>w&&N_(w)).catch(w=>ne(w,B,Y))}const Pe=B=>r.go(B);let Ke;const Ze=new Set,Ve={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:M,resolve:p,options:t,push:y,replace:D,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:ue,install(B){B.component("RouterLink",u0),B.component("RouterView",Vh),B.config.globalProperties.$router=Ve,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ji(l)}),yr&&!Ke&&l.value===xi&&(Ke=!0,y(r.location).catch(fe=>{}));const Y={};for(const fe in xi)Object.defineProperty(Y,fe,{get:()=>l.value[fe],enumerable:!0});B.provide(jo,Ve),B.provide(Ic,Cd(Y)),B.provide(ml,l);const re=B.unmount;Ze.add(B),B.unmount=function(){Ze.delete(B),Ze.size<1&&(c=xi,X&&X(),X=null,l.value=xi,Ke=!1,z=!1),re()}}};function ie(B){return B.reduce((Y,re)=>Y.then(()=>R(re)),Promise.resolve())}return Ve}function Ky(){return Sn(jo)}function jy(t){return Sn(Ic)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="184",m0=0,nf=1,g0=2,fo=1,_0=2,is=3,Li=0,Zt=1,ii=2,si=0,Pr=1,gl=2,rf=3,sf=4,v0=5,Xi=100,x0=101,S0=102,M0=103,E0=104,y0=200,b0=201,T0=202,A0=203,_l=204,vl=205,R0=206,C0=207,w0=208,P0=209,D0=210,L0=211,I0=212,N0=213,U0=214,xl=0,Sl=1,Ml=2,Or=3,El=4,yl=5,bl=6,Tl=7,Gh=0,F0=1,O0=2,zn=0,zh=1,Hh=2,kh=3,Wh=4,Xh=5,qh=6,Yh=7,Kh=300,er=301,Br=302,va=303,xa=304,$o=306,Al=1e3,ri=1001,Rl=1002,It=1003,B0=1004,Us=1005,Gt=1006,Sa=1007,Ki=1008,cn=1009,jh=1010,$h=1011,Ms=1012,Uc=1013,kn=1014,Bn=1015,fi=1016,Fc=1017,Oc=1018,Es=1020,Zh=35902,Jh=35899,Qh=1021,ep=1022,_n=1023,di=1026,ji=1027,tp=1028,Bc=1029,tr=1030,Vc=1031,Gc=1033,ho=33776,po=33777,mo=33778,go=33779,Cl=35840,wl=35841,Pl=35842,Dl=35843,Ll=36196,Il=37492,Nl=37496,Ul=37488,Fl=37489,Co=37490,Ol=37491,Bl=37808,Vl=37809,Gl=37810,zl=37811,Hl=37812,kl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Kl=37818,jl=37819,$l=37820,Zl=37821,Jl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,wo=36285,ic=36286,V0=3200,of=0,G0=1,wi="",an="srgb",Po="srgb-linear",Do="linear",lt="srgb",lr=7680,af=519,z0=512,H0=513,k0=514,zc=515,W0=516,X0=517,Hc=518,q0=519,lf=35044,cf="300 es",Vn=2e3,Lo=2001;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K0(){const t=Io("canvas");return t.style.display="block",t}const uf={};function ff(...t){const e="THREE."+t.shift();console.log(e,...t)}function np(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=np(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=np(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function rc(...t){const e=t.join(" ");e in uf||(uf[e]=!0,ze(...t))}function j0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const $0={[xl]:Sl,[Ml]:bl,[El]:Tl,[Or]:yl,[Sl]:xl,[bl]:Ml,[Tl]:El,[yl]:Or};class rr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,sc=180/Math.PI;function As(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Z0(t,e){return(t%e+e)%e}function Ea(t,e,n){return(1-n)*t+n*e}function Kr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Wc=class Wc{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wc.prototype.isVector2=!0;let ft=Wc;class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],_=s[o+2],M=s[o+3];if(d!==M||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*M;m<0&&(f=-f,h=-h,_=-_,M=-M,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),b=Math.sin(x);p=Math.sin(p*x)/b,a=Math.sin(a*x)/b,l=l*p+f*a,c=c*p+h*a,u=u*p+_*a,d=d*p+M*a}else{l=l*p+f*a,c=c*p+h*a,u=u*p+_*a,d=d*p+M*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*h-c*f,e[n+1]=l*_+u*f+c*d-a*h,e[n+2]=c*_+u*h+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xc=class Xc{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(df.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xc.prototype.isVector3=!0;let q=Xc;const ya=new q,df=new zr,qc=class qc{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],M=r[0],m=r[3],p=r[6],x=r[1],b=r[4],y=r[7],D=r[2],A=r[5],I=r[8];return s[0]=o*M+a*x+l*D,s[3]=o*m+a*b+l*A,s[6]=o*p+a*y+l*I,s[1]=c*M+u*x+d*D,s[4]=c*m+u*b+d*A,s[7]=c*p+u*y+d*I,s[2]=f*M+h*x+_*D,s[5]=f*m+h*b+_*A,s[8]=f*p+h*y+_*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,_=n*d+i*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=h*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ba.makeScale(e,n)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,n){return this.premultiply(ba.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qc.prototype.isMatrix3=!0;let ke=qc;const ba=new ke,hf=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){const t={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Dr(r.r),r.g=Dr(r.g),r.b=Dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Do:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Po]:{primaries:e,whitePoint:i,transfer:Do,toXYZ:hf,fromXYZ:pf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:hf,fromXYZ:pf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),t}const Je=J0();function oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cr;class Q0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cr===void 0&&(cr=Io("canvas")),cr.width=e.width,cr.height=e.height;const r=cr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(oi(n[i]/255)*255):n[i]=oi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ev=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ta(r[o].image)):s.push(Ta(r[o]))}else s=Ta(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ta(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Q0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let tv=0;const Aa=new q;class Kt extends rr{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=ri,r=ri,s=Gt,o=Ki,a=_n,l=cn,c=Kt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=As(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Kh;Kt.DEFAULT_ANISOTROPY=1;const Yc=class Yc{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,y=(h+1)/2,D=(p+1)/2,A=(u+f)/4,I=(d+M)/4,v=(_+m)/4;return b>y&&b>D?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=I/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=v/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=I/s,r=v/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-M)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yc.prototype.isVector4=!0;let yt=Yc;class nv extends rr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Kt(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new kc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends nv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ip extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iv extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const No=class No{constructor(e,n,i,r,s,o,a,l,c,u,d,f,h,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,h,_,M,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,h,_,M,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new No().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+_*c,n[5]=f-M*c,n[9]=-a*l,n[2]=M-f*c,n[6]=_+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,M=c*d;n[0]=f+M*a,n[4]=_*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-_,n[6]=M+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,M=c*d;n[0]=f-M*a,n[4]=-o*d,n[8]=_+h*a,n[1]=h+_*a,n[5]=o*u,n[9]=M-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=_*c-h,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=h*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-f*d,n[8]=_*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+_,n[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,h=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+M,n[5]=o*u,n[9]=h*d-_,n[2]=_*d-h,n[6]=a*u,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,n,i){const r=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),Si.crossVectors(i,en),Si.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Si.crossVectors(i,en)),Si.normalize(),Fs.crossVectors(en,Si),r[0]=Si.x,r[4]=Fs.x,r[8]=en.x,r[1]=Si.y,r[5]=Fs.y,r[9]=en.y,r[2]=Si.z,r[6]=Fs.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],M=i[6],m=i[10],p=i[14],x=i[3],b=i[7],y=i[11],D=i[15],A=r[0],I=r[4],v=r[8],R=r[12],N=r[1],P=r[5],L=r[9],X=r[13],Z=r[2],V=r[6],H=r[10],z=r[14],ne=r[3],ue=r[7],Ee=r[11],we=r[15];return s[0]=o*A+a*N+l*Z+c*ne,s[4]=o*I+a*P+l*V+c*ue,s[8]=o*v+a*L+l*H+c*Ee,s[12]=o*R+a*X+l*z+c*we,s[1]=u*A+d*N+f*Z+h*ne,s[5]=u*I+d*P+f*V+h*ue,s[9]=u*v+d*L+f*H+h*Ee,s[13]=u*R+d*X+f*z+h*we,s[2]=_*A+M*N+m*Z+p*ne,s[6]=_*I+M*P+m*V+p*ue,s[10]=_*v+M*L+m*H+p*Ee,s[14]=_*R+M*X+m*z+p*we,s[3]=x*A+b*N+y*Z+D*ne,s[7]=x*I+b*P+y*V+D*ue,s[11]=x*v+b*L+y*H+D*Ee,s[15]=x*R+b*X+y*z+D*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],M=e[7],m=e[11],p=e[15],x=l*h-c*f,b=a*h-c*d,y=a*f-l*d,D=o*h-c*u,A=o*f-l*u,I=o*d-a*u;return n*(M*x-m*b+p*y)-i*(_*x-m*D+p*A)+r*(_*b-M*D+p*I)-s*(_*y-M*A+m*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],M=e[13],m=e[14],p=e[15],x=n*a-i*o,b=n*l-r*o,y=n*c-s*o,D=i*l-r*a,A=i*c-s*a,I=r*c-s*l,v=u*M-d*_,R=u*m-f*_,N=u*p-h*_,P=d*m-f*M,L=d*p-h*M,X=f*p-h*m,Z=x*X-b*L+y*P+D*N-A*R+I*v;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Z;return e[0]=(a*X-l*L+c*P)*V,e[1]=(r*L-i*X-s*P)*V,e[2]=(M*I-m*A+p*D)*V,e[3]=(f*A-d*I-h*D)*V,e[4]=(l*N-o*X-c*R)*V,e[5]=(n*X-r*N+s*R)*V,e[6]=(m*y-_*I-p*b)*V,e[7]=(u*I-f*y+h*b)*V,e[8]=(o*L-a*N+c*v)*V,e[9]=(i*N-n*L-s*v)*V,e[10]=(_*A-M*y+p*x)*V,e[11]=(d*y-u*A-h*x)*V,e[12]=(a*R-o*P-l*v)*V,e[13]=(n*P-i*R+r*v)*V,e[14]=(M*b-_*D-m*x)*V,e[15]=(u*D-d*b+f*x)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,_=s*d,M=o*u,m=o*d,p=a*d,x=l*c,b=l*u,y=l*d,D=i.x,A=i.y,I=i.z;return r[0]=(1-(M+p))*D,r[1]=(h+y)*D,r[2]=(_-b)*D,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(f+p))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(_+b)*I,r[9]=(m-x)*I,r[10]=(1-(f+M))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ur.set(r[0],r[1],r[2]).length();const a=ur.set(r[4],r[5],r[6]).length(),l=ur.set(r[8],r[9],r[10]).length();s<0&&(o=-o),dn.copy(this);const c=1/o,u=1/a,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,n.setFromRotationMatrix(dn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Vn,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let _,M;if(l)_=s/(o-s),M=o*s/(o-s);else if(a===Vn)_=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Lo)_=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vn,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let _,M;if(l)_=1/(o-s),M=o/(o-s);else if(a===Vn)_=-2/(o-s),M=-(o+s)/(o-s);else if(a===Lo)_=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};No.prototype.isMatrix4=!0;let Tt=No;const ur=new q,dn=new Tt,rv=new q(0,0,0),sv=new q(1,1,1),Si=new q,Fs=new q,en=new q,mf=new Tt,gf=new zr;class nr{constructor(e=0,n=0,i=0,r=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const _f=new q,fr=new zr,Kn=new Tt,Os=new q,jr=new q,av=new q,lv=new zr,vf=new q(1,0,0),xf=new q(0,1,0),Sf=new q(0,0,1),Mf={type:"added"},cv={type:"removed"},dr={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Jt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new q,n=new nr,i=new zr,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fr.setFromAxisAngle(e,n),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,n){return fr.setFromAxisAngle(e,n),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,n){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Os.copy(e):Os.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(jr,Os,this.up):Kn.lookAt(Os,jr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(Kn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),dr.child=e,this.dispatchEvent(dr),dr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cv),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new q(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bs extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function wa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Z0(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wa(o,s,e+1/3),this.g=wa(o,s,e),this.b=wa(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=an){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=an){const i=sp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Je.workingToColorSpace(Ft.copy(this),e),Math.round(Qe(Ft.r*255,0,255))*65536+Math.round(Qe(Ft.g*255,0,255))*256+Math.round(Qe(Ft.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=an){Je.workingToColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==an?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(Vs);const i=Ea(Mi.h,Vs.h,n),r=Ea(Mi.s,Vs.s,n),s=Ea(Mi.l,Vs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new rt;rt.NAMES=sp;class fv extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const hn=new q,jn=new q,Pa=new q,$n=new q,hr=new q,pr=new q,Ef=new q,Da=new q,La=new q,Ia=new q,Na=new yt,Ua=new yt,Fa=new yt;class gn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),hn.subVectors(e,n),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){hn.subVectors(r,n),jn.subVectors(i,n),Pa.subVectors(e,n);const o=hn.dot(hn),a=hn.dot(jn),l=hn.dot(Pa),c=jn.dot(jn),u=jn.dot(Pa),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Na.setScalar(0),Ua.setScalar(0),Fa.setScalar(0),Na.fromBufferAttribute(e,n),Ua.fromBufferAttribute(e,i),Fa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Na,s.x),o.addScaledVector(Ua,s.y),o.addScaledVector(Fa,s.z),o}static isFrontFacing(e,n,i,r){return hn.subVectors(i,n),jn.subVectors(e,n),hn.cross(jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),hn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,i),pr.subVectors(s,i),Da.subVectors(e,i);const l=hr.dot(Da),c=pr.dot(Da);if(l<=0&&c<=0)return n.copy(i);La.subVectors(e,r);const u=hr.dot(La),d=pr.dot(La);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(hr,o);Ia.subVectors(e,s);const h=hr.dot(Ia),_=pr.dot(Ia);if(_>=0&&h<=_)return n.copy(s);const M=h*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(pr,a);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Ef.subVectors(s,r),a=(d-u)/(d-u+(h-_)),n.copy(r).addScaledVector(Ef,a);const p=1/(m+M+f);return o=M*p,a=f*p,n.copy(i).addScaledVector(hr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Rs{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),zs.subVectors(this.max,$r),mr.subVectors(e.a,$r),gr.subVectors(e.b,$r),_r.subVectors(e.c,$r),Ei.subVectors(gr,mr),yi.subVectors(_r,gr),Oi.subVectors(mr,_r);let n=[0,-Ei.z,Ei.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,Ei.z,0,-Ei.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-Ei.y,Ei.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!Oa(n,mr,gr,_r,zs)||(n=[1,0,0,0,1,0,0,0,1],!Oa(n,mr,gr,_r,zs))?!1:(Hs.crossVectors(Ei,yi),n=[Hs.x,Hs.y,Hs.z],Oa(n,mr,gr,_r,zs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new q,new q,new q,new q,new q,new q,new q,new q],pn=new q,Gs=new Rs,mr=new q,gr=new q,_r=new q,Ei=new q,yi=new q,Oi=new q,$r=new q,zs=new q,Hs=new q,Bi=new q;function Oa(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Bi.fromArray(t,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),c=n.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bt=new q,ks=new ft;let dv=0;class fn extends rr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lf,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ks.fromBufferAttribute(this,n),ks.applyMatrix3(e),this.setXY(n,ks.x,ks.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kr(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kr(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kr(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class op extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ap extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hv=new Rs,Zr=new q,Ba=new q;class Zo{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const n=Zr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Ba)),this.expandByPoint(Zr.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pv=0;const on=new Tt,Va=new Jt,vr=new q,tn=new Rs,Jr=new Rs,Pt=new q;class Tn extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?ap:op)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,n,i){return on.makeTranslation(e,n,i),this.applyMatrix4(on),this}scale(e,n,i){return on.makeScale(e,n,i),this.applyMatrix4(on),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(tn.min,Jr.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,Jr.max),tn.expandByPoint(Pt)):(tn.expandByPoint(Jr.min),tn.expandByPoint(Jr.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),Pt.add(vr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new q,l[v]=new q;const c=new q,u=new q,d=new q,f=new ft,h=new ft,_=new ft,M=new q,m=new q;function p(v,R,N){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,R),_.fromBufferAttribute(s,N),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const P=1/(h.x*_.y-_.x*h.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(P),a[v].add(M),a[R].add(M),a[N].add(M),l[v].add(m),l[R].add(m),l[N].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,R=x.length;v<R;++v){const N=x[v],P=N.start,L=N.count;for(let X=P,Z=P+L;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new q,y=new q,D=new q,A=new q;function I(v){D.fromBufferAttribute(r,v),A.copy(D);const R=a[v];b.copy(R),b.sub(D.multiplyScalar(D.dot(R))).normalize(),y.crossVectors(A,R);const P=y.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,P)}for(let v=0,R=x.length;v<R;++v){const N=x[v],P=N.start,L=N.count;for(let X=P,Z=P+L;X<Z;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?h=l[M]*a.data.stride+a.offset:h=l[M]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new fn(f,u,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mv=0;class Cs extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Pr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=vl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==vl&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==af&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new q,Ga=new q,Ws=new q,bi=new q,za=new q,Xs=new q,Ha=new q;class lp{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ga.copy(e).add(n).multiplyScalar(.5),Ws.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Ga);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ws),a=bi.dot(this.direction),l=-bi.dot(Ws),c=bi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ga).addScaledVector(Ws,f),h}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){za.subVectors(n,e),Xs.subVectors(i,e),Ha.crossVectors(za,Xs);let o=this.direction.dot(Ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Xs.crossVectors(bi,Xs));if(l<0)return null;const c=a*this.direction.dot(za.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(Ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cp extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yf=new Tt,Vi=new lp,qs=new Zo,bf=new q,Ys=new q,Ks=new q,js=new q,ka=new q,$s=new q,Tf=new q,Zs=new q;class hi extends Jt{constructor(e=new Tn,n=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ka.fromBufferAttribute(d,e),o?$s.addScaledVector(ka,u):$s.addScaledVector(ka.sub(n),u))}n.add($s)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(qs.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(qs,bf)===null||Vi.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(yf.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(yf),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,D=b;y<D;y+=3){const A=a.getX(y),I=a.getX(y+1),v=a.getX(y+2);r=Js(this,p,e,i,c,u,d,A,I,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let m=_,p=M;m<p;m+=3){const x=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);r=Js(this,o,e,i,c,u,d,x,b,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,D=b;y<D;y+=3){const A=y,I=y+1,v=y+2;r=Js(this,p,e,i,c,u,d,A,I,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=_,p=M;m<p;m+=3){const x=m,b=m+1,y=m+2;r=Js(this,o,e,i,c,u,d,x,b,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function gv(t,e,n,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Zs);return c<n.near||c>n.far?null:{distance:c,point:Zs.clone(),object:t}}function Js(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ys),t.getVertexPosition(l,Ks),t.getVertexPosition(c,js);const u=gv(t,e,n,i,Ys,Ks,js,Tf);if(u){const d=new q;gn.getBarycoord(Tf,Ys,Ks,js,d),r&&(u.uv=gn.getInterpolatedAttribute(r,a,l,c,d,new ft)),s&&(u.uv1=gn.getInterpolatedAttribute(s,a,l,c,d,new ft)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};gn.getNormal(Ys,Ks,js,f.normal),u.face=f,u.barycoord=d}return u}class _v extends Kt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=It,u=It,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wa=new q,vv=new q,xv=new ke;class Hi{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wa.subVectors(i,n).cross(vv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Wa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xv.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Zo,Sv=new ft(.5,.5),Qs=new q;class up{constructor(e=new Hi,n=new Hi,i=new Hi,r=new Hi,s=new Hi,o=new Hi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],M=s[9],m=s[10],p=s[11],x=s[12],b=s[13],y=s[14],D=s[15];if(r[0].setComponents(c-o,h-u,p-_,D-x).normalize(),r[1].setComponents(c+o,h+u,p+_,D+x).normalize(),r[2].setComponents(c+a,h+d,p+M,D+b).normalize(),r[3].setComponents(c-a,h-d,p-M,D-b).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,h-f,p-m,D-y).normalize();else if(r[4].setComponents(c-l,h-f,p-m,D-y).normalize(),n===Vn)r[5].setComponents(c+l,h+f,p+m,D+y).normalize();else if(n===Lo)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const n=Sv.distanceTo(e.center);return Gi.radius=.7071067811865476+n,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fp extends Cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Af=new Tt,oc=new lp,eo=new Zo,to=new q;class Mv extends Jt{constructor(e=new Tn,n=new fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Af.copy(r).invert(),oc.copy(e.ray).applyMatrix4(Af);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=f,M=h;_<M;_++){const m=c.getX(_);to.fromBufferAttribute(d,m),Rf(to,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let _=f,M=h;_<M;_++)to.fromBufferAttribute(d,_),Rf(to,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rf(t,e,n,i,r,s,o){const a=oc.distanceSqToPoint(t);if(a<n){const l=new q;oc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dp extends Kt{constructor(e=[],n=er,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vr extends Kt{constructor(e,n,i=kn,r,s,o,a=It,l=It,c,u=di,d=1){if(u!==di&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ev extends Vr{constructor(e,n=kn,i=er,r,s,o=It,a=It,l,c=di){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hp extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ws extends Tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(d,2));function _(M,m,p,x,b,y,D,A,I,v,R){const N=y/I,P=D/v,L=y/2,X=D/2,Z=A/2,V=I+1,H=v+1;let z=0,ne=0;const ue=new q;for(let Ee=0;Ee<H;Ee++){const we=Ee*P-X;for(let Pe=0;Pe<V;Pe++){const Ke=Pe*N-L;ue[M]=Ke*x,ue[m]=we*b,ue[p]=Z,c.push(ue.x,ue.y,ue.z),ue[M]=0,ue[m]=0,ue[p]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(Pe/I),d.push(1-Ee/v),z+=1}}for(let Ee=0;Ee<v;Ee++)for(let we=0;we<I;we++){const Pe=f+we+V*Ee,Ke=f+we+V*(Ee+1),Ze=f+(we+1)+V*(Ee+1),Ve=f+(we+1)+V*Ee;l.push(Pe,Ke,Ve),l.push(Ke,Ze,Ve),ne+=6}a.addGroup(h,ne,R),h+=ne,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jo extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,h=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let b=0;b<c;b++){const y=b*d-s;_.push(y,-x,0),M.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const b=x+c*p,y=x+c*(p+1),D=x+1+c*(p+1),A=x+1+c*p;h.push(b,y,A),h.push(y,D,A)}this.setIndex(h),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(M,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Gr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Cf(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Cf(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=Gr(t[n]);for(const r in i)e[r]=i[r]}return e}function Cf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function yv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const bv={clone:Gr,merge:kt};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rv extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cv extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const no=new q,io=new zr,wn=new q;class mp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,wn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(no,io,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new q,wf=new ft,Pf=new ft;class ln extends mp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,wf,Pf),n.subVectors(Pf,wf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class gp extends mp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xr=-90,Sr=1;class Pv extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(xr,Sr,e,n);r.layers=this.layers,this.add(r);const s=new ln(xr,Sr,e,n);s.layers=this.layers,this.add(s);const o=new ln(xr,Sr,e,n);o.layers=this.layers,this.add(o);const a=new ln(xr,Sr,e,n);a.layers=this.layers,this.add(a);const l=new ln(xr,Sr,e,n);l.layers=this.layers,this.add(l);const c=new ln(xr,Sr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Dv extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kc=class Kc{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Kc.prototype.isMatrix2=!0;let Df=Kc;function Lf(t,e,n,i){const r=Lv(i);switch(n){case Qh:return t*e;case tp:return t*e/r.components*r.byteLength;case Bc:return t*e/r.components*r.byteLength;case tr:return t*e*2/r.components*r.byteLength;case Vc:return t*e*2/r.components*r.byteLength;case ep:return t*e*3/r.components*r.byteLength;case _n:return t*e*4/r.components*r.byteLength;case Gc:return t*e*4/r.components*r.byteLength;case ho:case po:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wl:case Dl:return Math.max(t,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(t,8)*Math.max(e,8)/2;case Ll:case Il:case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Co:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Ql:case ec:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wo:case ic:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Lv(t){switch(t){case cn:case jh:return{byteLength:1,components:1};case Ms:case $h:case fi:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case kn:case Uc:case Bn:return{byteLength:4,components:1};case Zh:case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _p(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Iv(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],M=d[h];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const M=d[h];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
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
#endif`,Fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gv=`#ifdef USE_AOMAP
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
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Kv=`#ifdef USE_BUMPMAP
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
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
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
#endif`,Lx=`uniform sampler2D dfgLUT;
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
}`,Ix=`
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
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
#endif`,rS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
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
}`,zS=`#if DEPTH_PACKING == 3200
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
}`,HS=`#define DISTANCE
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
}`,kS=`#define DISTANCE
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
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
}`,YS=`uniform vec3 diffuse;
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
}`,KS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
}`,$S=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
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
}`,JS=`#define MATCAP
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
}`,QS=`#define MATCAP
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
}`,eM=`#define NORMAL
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
}`,tM=`#define NORMAL
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
}`,nM=`#define PHONG
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
}`,iM=`#define PHONG
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
}`,rM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
}`,oM=`#define TOON
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
}`,aM=`#define TOON
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
}`,lM=`uniform float size;
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#include <common>
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
}`,fM=`uniform vec3 color;
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
}`,dM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Nv,alphahash_pars_fragment:Uv,alphamap_fragment:Fv,alphamap_pars_fragment:Ov,alphatest_fragment:Bv,alphatest_pars_fragment:Vv,aomap_fragment:Gv,aomap_pars_fragment:zv,batching_pars_vertex:Hv,batching_vertex:kv,begin_vertex:Wv,beginnormal_vertex:Xv,bsdfs:qv,iridescence_fragment:Yv,bumpmap_pars_fragment:Kv,clipping_planes_fragment:jv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:Zv,clipping_planes_vertex:Jv,color_fragment:Qv,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:rx,defaultnormal_vertex:sx,displacementmap_pars_vertex:ox,displacementmap_vertex:ax,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:ux,colorspace_pars_fragment:fx,envmap_fragment:dx,envmap_common_pars_fragment:hx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Ax,envmap_vertex:gx,fog_vertex:_x,fog_pars_vertex:vx,fog_fragment:xx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:Ex,lights_lambert_fragment:yx,lights_lambert_pars_fragment:bx,lights_pars_begin:Tx,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:wx,lights_phong_pars_fragment:Px,lights_physical_fragment:Dx,lights_physical_pars_fragment:Lx,lights_fragment_begin:Ix,lights_fragment_maps:Nx,lights_fragment_end:Ux,lightprobes_pars_fragment:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Gx,map_fragment:zx,map_pars_fragment:Hx,map_particle_fragment:kx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:Kx,morphnormal_vertex:jx,morphtarget_pars_vertex:$x,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:rS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:oS,iridescence_pars_fragment:aS,opaque_fragment:lS,packing:cS,premultiplied_alpha_fragment:uS,project_vertex:fS,dithering_fragment:dS,dithering_pars_fragment:hS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:_S,shadowmap_vertex:vS,shadowmask_pars_fragment:xS,skinbase_vertex:SS,skinning_pars_vertex:MS,skinning_vertex:ES,skinnormal_vertex:yS,specularmap_fragment:bS,specularmap_pars_fragment:TS,tonemapping_fragment:AS,tonemapping_pars_fragment:RS,transmission_fragment:CS,transmission_pars_fragment:wS,uv_pars_fragment:PS,uv_pars_vertex:DS,uv_vertex:LS,worldpos_vertex:IS,background_vert:NS,background_frag:US,backgroundCube_vert:FS,backgroundCube_frag:OS,cube_vert:BS,cube_frag:VS,depth_vert:GS,depth_frag:zS,distance_vert:HS,distance_frag:kS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:qS,linedashed_frag:YS,meshbasic_vert:KS,meshbasic_frag:jS,meshlambert_vert:$S,meshlambert_frag:ZS,meshmatcap_vert:JS,meshmatcap_frag:QS,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:rM,meshphysical_frag:sM,meshtoon_vert:oM,meshtoon_frag:aM,points_vert:lM,points_frag:cM,shadow_vert:uM,shadow_frag:fM,sprite_vert:dM,sprite_frag:hM},Ae={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Fn={basic:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([Ae.points,Ae.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([Ae.common,Ae.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([Ae.sprite,Ae.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:kt([Ae.common,Ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:kt([Ae.lights,Ae.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Fn.physical={uniforms:kt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ro={r:0,b:0,g:0},pM=new Tt,vp=new ke;vp.set(-1,0,0,0,1,0,0,0,1);function mM(t,e,n,i,r,s){const o=new rt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function _(x){let b=!1;const y=h(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,b){const y=h(b);y&&(y.isCubeTexture||y.mapping===$o)?(c===void 0&&(c=new hi(new ws(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Gr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vp),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==lt,(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hi(new Jo(2,2),new Wn({name:"BackgroundMaterial",uniforms:Gr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(ro,pp(t)),n.buffers.color.setClear(ro.r,ro.g,ro.b,b,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:_,addToRenderList:M,dispose:p}}function gM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,L,X,Z,V){let H=!1;const z=d(P,Z,X,L);s!==z&&(s=z,c(s.object)),H=h(P,Z,X,V),H&&_(P,Z,X,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(P,L,X,Z),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function d(P,L,X,Z){const V=Z.wireframe===!0;let H=i[L.id];H===void 0&&(H={},i[L.id]=H);const z=P.isInstancedMesh===!0?P.id:0;let ne=H[z];ne===void 0&&(ne={},H[z]=ne);let ue=ne[X.id];ue===void 0&&(ue={},ne[X.id]=ue);let Ee=ue[V];return Ee===void 0&&(Ee=f(l()),ue[V]=Ee),Ee}function f(P){const L=[],X=[],Z=[];for(let V=0;V<n;V++)L[V]=0,X[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:Z,object:P,attributes:{},index:null}}function h(P,L,X,Z){const V=s.attributes,H=L.attributes;let z=0;const ne=X.getAttributes();for(const ue in ne)if(ne[ue].location>=0){const we=V[ue];let Pe=H[ue];if(Pe===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(Pe=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(Pe=P.instanceColor)),we===void 0||we.attribute!==Pe||Pe&&we.data!==Pe.data)return!0;z++}return s.attributesNum!==z||s.index!==Z}function _(P,L,X,Z){const V={},H=L.attributes;let z=0;const ne=X.getAttributes();for(const ue in ne)if(ne[ue].location>=0){let we=H[ue];we===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(we=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(we=P.instanceColor));const Pe={};Pe.attribute=we,we&&we.data&&(Pe.data=we.data),V[ue]=Pe,z++}s.attributes=V,s.attributesNum=z,s.index=Z}function M(){const P=s.newAttributes;for(let L=0,X=P.length;L<X;L++)P[L]=0}function m(P){p(P,0)}function p(P,L){const X=s.newAttributes,Z=s.enabledAttributes,V=s.attributeDivisors;X[P]=1,Z[P]===0&&(t.enableVertexAttribArray(P),Z[P]=1),V[P]!==L&&(t.vertexAttribDivisor(P,L),V[P]=L)}function x(){const P=s.newAttributes,L=s.enabledAttributes;for(let X=0,Z=L.length;X<Z;X++)L[X]!==P[X]&&(t.disableVertexAttribArray(X),L[X]=0)}function b(P,L,X,Z,V,H,z){z===!0?t.vertexAttribIPointer(P,L,X,V,H):t.vertexAttribPointer(P,L,X,Z,V,H)}function y(P,L,X,Z){M();const V=Z.attributes,H=X.getAttributes(),z=L.defaultAttributeValues;for(const ne in H){const ue=H[ne];if(ue.location>=0){let Ee=V[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),Ee!==void 0){const we=Ee.normalized,Pe=Ee.itemSize,Ke=e.get(Ee);if(Ke===void 0)continue;const Ze=Ke.buffer,Ve=Ke.type,ie=Ke.bytesPerElement,B=Ve===t.INT||Ve===t.UNSIGNED_INT||Ee.gpuType===Uc;if(Ee.isInterleavedBufferAttribute){const Y=Ee.data,re=Y.stride,fe=Ee.offset;if(Y.isInstancedInterleavedBuffer){for(let ye=0;ye<ue.locationSize;ye++)p(ue.location+ye,Y.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ye=0;ye<ue.locationSize;ye++)m(ue.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let ye=0;ye<ue.locationSize;ye++)b(ue.location+ye,Pe/ue.locationSize,Ve,we,re*ie,(fe+Pe/ue.locationSize*ye)*ie,B)}else{if(Ee.isInstancedBufferAttribute){for(let Y=0;Y<ue.locationSize;Y++)p(ue.location+Y,Ee.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Y=0;Y<ue.locationSize;Y++)m(ue.location+Y);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Y=0;Y<ue.locationSize;Y++)b(ue.location+Y,Pe/ue.locationSize,Ve,we,Pe*ie,Pe/ue.locationSize*Y*ie,B)}}else if(z!==void 0){const we=z[ne];if(we!==void 0)switch(we.length){case 2:t.vertexAttrib2fv(ue.location,we);break;case 3:t.vertexAttrib3fv(ue.location,we);break;case 4:t.vertexAttrib4fv(ue.location,we);break;default:t.vertexAttrib1fv(ue.location,we)}}}}x()}function D(){R();for(const P in i){const L=i[P];for(const X in L){const Z=L[X];for(const V in Z){const H=Z[V];for(const z in H)u(H[z].object),delete H[z];delete Z[V]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const L=i[P.id];for(const X in L){const Z=L[X];for(const V in Z){const H=Z[V];for(const z in H)u(H[z].object),delete H[z];delete Z[V]}}delete i[P.id]}function I(P){for(const L in i){const X=i[L];for(const Z in X){const V=X[Z];if(V[P.id]===void 0)continue;const H=V[P.id];for(const z in H)u(H[z].object),delete H[z];delete V[P.id]}}}function v(P){for(const L in i){const X=i[L],Z=P.isInstancedMesh===!0?P.id:0,V=X[Z];if(V!==void 0){for(const H in V){const z=V[H];for(const ne in z)u(z[ne].object),delete z[ne];delete V[H]}delete X[Z],Object.keys(X).length===0&&delete i[L]}}}function R(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function _M(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function vM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==_n&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const v=I===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==cn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bn&&!v)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:D,samples:A}}function xM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,b=x*4;let y=p.clippingState||null;l.value=y,y=u(_,f,b,h);for(let D=0;D!==b;++D)y[D]=n[D];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=h+M*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=h;b!==M;++b,y+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Pi=4,If=[.125,.215,.35,.446,.526,.582],qi=20,SM=256,Qr=new gp,Nf=new rt;let Xa=null,qa=0,Ya=0,Ka=!1;const MM=new q;class Uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=MM}=s;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=Ka,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===er||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:fi,format:_n,colorSpace:Po,depthBuffer:!1},r=Ff(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EM(s)),this._blurMaterial=bM(s,e,n),this._ggxMaterial=yM(s,e,n)}return r}_compileMaterial(e){const n=new hi(new Tn,e);this._renderer.compile(n,Qr)}_sceneToCubeUV(e,n,i,r,s){const l=new ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Nf),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new ws,new cp({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(Nf),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const D=this._cubeSize;Mr(r,y*D,b>2?D:0,D,D),d.setRenderTarget(r),p&&d.render(M,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===er||e.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Mr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-Pi?i-_+Pi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-n,Mr(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(a,Qr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Mr(e,m,p,3*M,2*M),r.setRenderTarget(e),r.render(a,Qr)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*qi-1),M=s/_,m=isFinite(s)?1+Math.floor(u*M):qi;m>qi&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let x=0;for(let I=0;I<qi;++I){const v=I/M,R=Math.exp(-v*v/2);p.push(R),I===0?x+=R:I<m&&(x+=2*R)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const y=this._sizeLods[r],D=3*y*(r>b-Pi?r-b+Pi:0),A=4*(this._cubeSize-y);Mr(n,D,A,3*y,2*y),l.setRenderTarget(n),l.render(d,Qr)}}function EM(t){const e=[],n=[],i=[];let r=t;const s=t-Pi+1+If.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Pi?l=If[o-t+Pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,M=3,m=2,p=1,x=new Float32Array(M*_*h),b=new Float32Array(m*_*h),y=new Float32Array(p*_*h);for(let A=0;A<h;A++){const I=A%3*2/3-1,v=A>2?0:-1,R=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];x.set(R,M*_*A),b.set(f,m*_*A);const N=[A,A,A,A,A,A];y.set(N,p*_*A)}const D=new Tn;D.setAttribute("position",new fn(x,M)),D.setAttribute("uv",new fn(b,m)),D.setAttribute("faceIndex",new fn(y,p)),i.push(new hi(D,null)),r>Pi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ff(t,e,n){const i=new Hn(t,e,n);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yM(t,e,n){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function bM(t,e,n){const i=new Float32Array(qi),r=new q(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Of(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Bf(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}class xp extends Hn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:si});s.uniforms.tEquirect.value=n;const o=new hi(r,s),a=n.minFilter;return n.minFilter===Ki&&(n.minFilter=Gt),new Pv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function TM(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===va||h===xa)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new xp(_.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,_=h===va||h===xa,M=h===er||h===Br;if(_||M){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Uf(t)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return _&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new Uf(t)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===va?f.mapping=er:h===xa&&(f.mapping=Br),f}function l(f){let h=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function AM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&rc("WebGLRenderer: "+i+" extension not supported."),r}}}function RM(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(h!==null){const x=h.array;M=h.version;for(let b=0,y=x.length;b<y;b+=3){const D=x[b+0],A=x[b+1],I=x[b+2];f.push(D,A,A,I,I,D)}}else{const x=_.array;M=_.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const D=b+0,A=b+1,I=b+2;f.push(D,A,A,I,I,D)}}const m=new(_.count>=65535?ap:op)(f,1);m.version=M;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function CM(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*o,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let M=0;for(let m=0;m<h;m++)M+=f[m];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PM(t,e,n){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let R=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let b=0;h===!0&&(b=1),_===!0&&(b=2),M===!0&&(b=3);let y=a.attributes.position.count*b,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*D*4*d),I=new ip(A,y,D,d);I.type=Bn,I.needsUpdate=!0;const v=b*4;for(let N=0;N<d;N++){const P=m[N],L=p[N],X=x[N],Z=y*D*4*N;for(let V=0;V<P.count;V++){const H=V*v;h===!0&&(r.fromBufferAttribute(P,V),A[Z+H+0]=r.x,A[Z+H+1]=r.y,A[Z+H+2]=r.z,A[Z+H+3]=0),_===!0&&(r.fromBufferAttribute(L,V),A[Z+H+4]=r.x,A[Z+H+5]=r.y,A[Z+H+6]=r.z,A[Z+H+7]=0),M===!0&&(r.fromBufferAttribute(X,V),A[Z+H+8]=r.x,A[Z+H+9]=r.y,A[Z+H+10]=r.z,A[Z+H+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new ft(y,D)},i.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let M=0;M<c.length;M++)h+=c[M];const _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function DM(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const LM={[zh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[Wh]:"ACES_FILMIC_TONE_MAPPING",[qh]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function IM(t,e,n,i,r){const s=new Hn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Vr(e,n):void 0}),o=new Hn(e,n,{type:fi,depthBuffer:!1,stencilBuffer:!1}),a=new Tn;a.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ai([0,2,0,0,2,0],2));const l=new Rv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new hi(a,l),u=new gp(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,M=null,m=[],p=!1;this.setSize=function(x,b){s.setSize(x,b),o.setSize(x,b);for(let y=0;y<m.length;y++){const D=m[y];D.setSize&&D.setSize(x,b)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,y=s.height;for(let D=0;D<m.length;D++){const A=m[D];A.setSize&&A.setSize(b,y)}},this.begin=function(x,b){if(h||x.toneMapping===zn&&m.length===0)return!1;if(M=b,b!==null){const y=b.width,D=b.height;(s.width!==y||s.height!==D)&&this.setSize(y,D)}return p===!1&&x.setRenderTarget(s),_=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return p},this.end=function(x,b){x.toneMapping=_,h=!0;let y=s,D=o;for(let A=0;A<m.length;A++){const I=m[A];if(I.enabled!==!1&&(I.render(x,D,y,b),I.needsSwap!==!1)){const v=y;y=D,D=v}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,l.defines={},Je.getTransfer(d)===lt&&(l.defines.SRGB_TRANSFER="");const A=LM[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(M),x.render(c,u),M=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Sp=new Kt,ac=new Vr(1,1),Mp=new ip,Ep=new iv,yp=new dp,Vf=[],Gf=[],zf=new Float32Array(16),Hf=new Float32Array(9),kf=new Float32Array(4);function Hr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vf[r];if(s===void 0&&(s=new Float32Array(r),Vf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ea(t,e){let n=Gf[e];n===void 0&&(n=new Int32Array(e),Gf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function FM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function OM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function BM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Ct(n,i))return;kf.set(i),t.uniformMatrix2fv(this.addr,!1,kf),wt(n,i)}}function VM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Ct(n,i))return;Hf.set(i),t.uniformMatrix3fv(this.addr,!1,Hf),wt(n,i)}}function GM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Ct(n,i))return;zf.set(i),t.uniformMatrix4fv(this.addr,!1,zf),wt(n,i)}}function zM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function XM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function YM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function KM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function jM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ac.compareFunction=n.isReversedDepthBuffer()?Hc:zc,s=ac):s=Sp,n.setTexture2D(e||s,r)}function $M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ep,r)}function ZM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yp,r)}function JM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mp,r)}function QM(t){switch(t){case 5126:return NM;case 35664:return UM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return VM;case 35676:return GM;case 5124:case 35670:return zM;case 35667:case 35671:return HM;case 35668:case 35672:return kM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function eE(t,e){t.uniform1fv(this.addr,e)}function tE(t,e){const n=Hr(e,this.size,2);t.uniform2fv(this.addr,n)}function nE(t,e){const n=Hr(e,this.size,3);t.uniform3fv(this.addr,n)}function iE(t,e){const n=Hr(e,this.size,4);t.uniform4fv(this.addr,n)}function rE(t,e){const n=Hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sE(t,e){const n=Hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oE(t,e){const n=Hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aE(t,e){t.uniform1iv(this.addr,e)}function lE(t,e){t.uniform2iv(this.addr,e)}function cE(t,e){t.uniform3iv(this.addr,e)}function uE(t,e){t.uniform4iv(this.addr,e)}function fE(t,e){t.uniform1uiv(this.addr,e)}function dE(t,e){t.uniform2uiv(this.addr,e)}function hE(t,e){t.uniform3uiv(this.addr,e)}function pE(t,e){t.uniform4uiv(this.addr,e)}function mE(t,e,n){const i=this.cache,r=e.length,s=ea(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=ac:o=Sp;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function gE(t,e,n){const i=this.cache,r=e.length,s=ea(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ep,s[o])}function _E(t,e,n){const i=this.cache,r=e.length,s=ea(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||yp,s[o])}function vE(t,e,n){const i=this.cache,r=e.length,s=ea(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Mp,s[o])}function xE(t){switch(t){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return fE;case 36294:return dE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class SE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QM(n.type)}}class ME{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xE(n.type)}}class EE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Wf(t,e){t.seq.push(e),t.map[e.id]=e}function yE(t,e,n){const i=t.name,r=i.length;for(ja.lastIndex=0;;){const s=ja.exec(i),o=ja.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wf(n,c===void 0?new SE(a,t,e):new ME(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new EE(a),Wf(n,d)),n=d}}}class _o{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);yE(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bE=37297;let TE=0;function AE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const qf=new ke;function RE(t){Je._getMatrix(qf,Je.workingColorSpace,t);const e=`mat3( ${qf.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Do:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+AE(t.getShaderSource(e),a)}else return s}function CE(t,e){const n=RE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const wE={[zh]:"Linear",[Hh]:"Reinhard",[kh]:"Cineon",[Wh]:"ACESFilmic",[qh]:"AgX",[Yh]:"Neutral",[Xh]:"Custom"};function PE(t,e){const n=wE[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const so=new q;function DE(){Je.getLuminanceCoefficients(so);const t=so.x.toFixed(4),e=so.y.toFixed(4),n=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function IE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function rs(t){return t!==""}function Kf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(t){return t.replace(UE,OE)}const FE=new Map;function OE(t,e){let n=je[e];if(n===void 0){const i=FE.get(e);if(i!==void 0)n=je[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(n)}const BE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(t){return t.replace(BE,VE)}function VE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const GE={[fo]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function zE(t){return GE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HE={[er]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function kE(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":HE[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const WE={[Br]:"ENVMAP_MODE_REFRACTION"};function XE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":WE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qE={[Gh]:"ENVMAP_BLENDING_MULTIPLY",[F0]:"ENVMAP_BLENDING_MIX",[O0]:"ENVMAP_BLENDING_ADD"};function YE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qE[t.combine]||"ENVMAP_BLENDING_NONE"}function KE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function jE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zE(n),c=kE(n),u=XE(n),d=YE(n),f=KE(n),h=LE(n),_=IE(s),M=r.createProgram();let m,p,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Zf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[Zf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zn?"#define TONE_MAPPING":"",n.toneMapping!==zn?je.tonemapping_pars_fragment:"",n.toneMapping!==zn?PE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,CE("linearToOutputTexel",n.outputColorSpace),DE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),o=lc(o),o=Kf(o,n),o=jf(o,n),a=lc(a),a=Kf(a,n),a=jf(a,n),o=$f(o),a=$f(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+m+o,y=x+p+a,D=Xf(r,r.VERTEX_SHADER,b),A=Xf(r,r.FRAGMENT_SHADER,y);r.attachShader(M,D),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(P){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(D)||"",Z=r.getShaderInfoLog(A)||"",V=L.trim(),H=X.trim(),z=Z.trim();let ne=!0,ue=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,D,A);else{const Ee=Yf(r,D,"vertex"),we=Yf(r,A,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Ee+`
`+we)}else V!==""?ze("WebGLProgram: Program Info Log:",V):(H===""||z==="")&&(ue=!1);ue&&(P.diagnostics={runnable:ne,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(D),r.deleteShader(A),v=new _o(r,M),R=NE(r,M)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(M,bE)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=A,this}let $E=0;class ZE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JE(e),n.set(e,i)),i}}class JE{constructor(e){this.id=$E++,this.code=e,this.usedTimes=0}}function QE(t){return t===tr||t===Co||t===wo}function ey(t,e,n,i,r,s){const o=new rp,a=new ZE,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,R,N,P,L,X){const Z=P.fog,V=L.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||H,z),ue=ne&&ne.mapping===$o?ne.image.height:null,Ee=h[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const we=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pe=we!==void 0?we.length:0;let Ke=0;V.morphAttributes.position!==void 0&&(Ke=1),V.morphAttributes.normal!==void 0&&(Ke=2),V.morphAttributes.color!==void 0&&(Ke=3);let Ze,Ve,ie,B;if(Ee){const Xe=Fn[Ee];Ze=Xe.vertexShader,Ve=Xe.fragmentShader}else Ze=v.vertexShader,Ve=v.fragmentShader,a.update(v),ie=a.getVertexShaderID(v),B=a.getFragmentShaderID(v);const Y=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),fe=L.isInstancedMesh===!0,ye=L.isBatchedMesh===!0,T=!!v.map,w=!!v.matcap,F=!!ne,$=!!v.aoMap,j=!!v.lightMap,Q=!!v.bumpMap,de=!!v.normalMap,ge=!!v.displacementMap,C=!!v.emissiveMap,oe=!!v.metalnessMap,ve=!!v.roughnessMap,he=v.anisotropy>0,te=v.clearcoat>0,De=v.dispersion>0,E=v.iridescence>0,g=v.sheen>0,O=v.transmission>0,J=he&&!!v.anisotropyMap,ae=te&&!!v.clearcoatMap,pe=te&&!!v.clearcoatNormalMap,me=te&&!!v.clearcoatRoughnessMap,ee=E&&!!v.iridescenceMap,le=E&&!!v.iridescenceThicknessMap,xe=g&&!!v.sheenColorMap,Te=g&&!!v.sheenRoughnessMap,Se=!!v.specularMap,_e=!!v.specularColorMap,He=!!v.specularIntensityMap,Ye=O&&!!v.transmissionMap,nt=O&&!!v.thicknessMap,U=!!v.gradientMap,Me=!!v.alphaMap,se=v.alphaTest>0,Le=!!v.alphaHash,be=!!v.extensions;let ce=zn;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ce=t.toneMapping);const Fe={shaderID:Ee,shaderType:v.type,shaderName:v.name,vertexShader:Ze,fragmentShader:Ve,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ye,batchingColor:ye&&L._colorsTexture!==null,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:T,matcap:w,envMap:F,envMapMode:F&&ne.mapping,envMapCubeUVHeight:ue,aoMap:$,lightMap:j,bumpMap:Q,normalMap:de,displacementMap:ge,emissiveMap:C,normalMapObjectSpace:de&&v.normalMapType===G0,normalMapTangentSpace:de&&v.normalMapType===of,packedNormalMap:de&&v.normalMapType===of&&QE(v.normalMap.format),metalnessMap:oe,roughnessMap:ve,anisotropy:he,anisotropyMap:J,clearcoat:te,clearcoatMap:ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,dispersion:De,iridescence:E,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:g,sheenColorMap:xe,sheenRoughnessMap:Te,specularMap:Se,specularColorMap:_e,specularIntensityMap:He,transmission:O,transmissionMap:Ye,thicknessMap:nt,gradientMap:U,opaque:v.transparent===!1&&v.blending===Pr&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:se,alphaHash:Le,combine:v.combine,mapUv:T&&_(v.map.channel),aoMapUv:$&&_(v.aoMap.channel),lightMapUv:j&&_(v.lightMap.channel),bumpMapUv:Q&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:ge&&_(v.displacementMap.channel),emissiveMapUv:C&&_(v.emissiveMap.channel),metalnessMapUv:oe&&_(v.metalnessMap.channel),roughnessMapUv:ve&&_(v.roughnessMap.channel),anisotropyMapUv:J&&_(v.anisotropyMap.channel),clearcoatMapUv:ae&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(v.sheenRoughnessMap.channel),specularMapUv:Se&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:He&&_(v.specularIntensityMap.channel),transmissionMapUv:Ye&&_(v.transmissionMap.channel),thicknessMapUv:nt&&_(v.thicknessMap.channel),alphaMapUv:Me&&_(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(de||he),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(T||Me),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ce,decodeVideoTexture:T&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:C&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===Zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)R.push(N),R.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(p(R,v),x(R,v),R.push(t.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function p(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function x(v,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function b(v){const R=h[v.type];let N;if(R){const P=Fn[R];N=bv.clone(P.uniforms)}else N=v.uniforms;return N}function y(v,R){let N=u.get(R);return N!==void 0?++N.usedTimes:(N=new jE(t,R,v,r),c.push(N),u.set(R,N)),N}function D(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function I(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:D,releaseShaderCache:A,programs:c,dispose:I}}function ty(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ny(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,_,M,m,p){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:_,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=_,x.materialVariant=o(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function l(f,h,_,M,m,p){const x=a(f,h,_,M,m,p);_.transmission>0?i.push(x):_.transparent===!0?r.push(x):n.push(x)}function c(f,h,_,M,m,p){const x=a(f,h,_,M,m,p);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):n.unshift(x)}function u(f,h){n.length>1&&n.sort(f||ny),i.length>1&&i.sort(h||Jf),r.length>1&&r.sort(h||Jf)}function d(){for(let f=e,h=t.length;f<h;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function iy(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qf,t.set(i,[o])):r>=s.length?(o=new Qf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ry(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new rt};break;case"SpotLight":n={position:new q,direction:new q,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function sy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oy=0;function ay(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ly(t){const e=new ry,n=sy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Tt,o=new Tt;function a(c){let u=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,_=0,M=0,m=0,p=0,x=0,b=0,y=0,D=0,A=0,I=0;c.sort(ay);for(let R=0,N=c.length;R<N;R++){const P=c[R],L=P.color,X=P.intensity,Z=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===tr?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*X,d+=L.g*X,f+=L.b*X;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],X);I++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,ne=n.get(P);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,i.directionalShadow[h]=ne,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=P.shadow.matrix,x++}i.directional[h]=H,h++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(X),H.distance=Z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[M]=H;const z=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,z.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[M]=z.matrix,P.castShadow){const ne=n.get(P);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,i.spotShadow[M]=ne,i.spotShadowMap[M]=V,y++}M++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(L).multiplyScalar(X),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const z=P.shadow,ne=n.get(P);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,ne.shadowCameraNear=z.camera.near,ne.shadowCameraFar=z.camera.far,i.pointShadow[_]=ne,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,b++}i.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(X),H.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[p]=H,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==h||v.pointLength!==_||v.spotLength!==M||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==b||v.numSpotShadows!==y||v.numSpotMaps!==D||v.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,v.directionalLength=h,v.pointLength=_,v.spotLength=M,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=b,v.numSpotShadows=y,v.numSpotMaps=D,v.numLightProbes=I,i.version=oy++)}function l(c,u){let d=0,f=0,h=0,_=0,M=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const b=c[p];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function ed(t){const e=new ly(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function cy(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ed(t),e.set(r,[a])):s>=o.length?(a=new ed(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
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
}`,dy=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],hy=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],td=new Tt,es=new q,$a=new q;function py(t,e,n){let i=new up;const r=new ft,s=new ft,o=new yt,a=new Cv,l=new wv,c={},u=n.maxTextureSize,d={[Li]:Zt,[Zt]:Li,[ii]:ii},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:uy,fragmentShader:fy}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new hi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let p=this.type;this.render=function(A,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===_0&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fo);const R=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),L=t.state;L.setBlending(si),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const X=p!==this.type;X&&I.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(V=>V.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,V=A.length;Z<V;Z++){const H=A[Z],z=H.shadow;if(z===void 0){ze("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ne=z.getFrameExtents();r.multiply(ne),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,z.mapSize.y=s.y));const ue=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ue,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===is){if(H.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Hn(r.x,r.y,{format:tr,type:fi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Vr(r.x,r.y,Bn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=di,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=It,z.map.depthTexture.magFilter=It}else H.isPointLight?(z.map=new xp(r.x),z.map.depthTexture=new Ev(r.x,kn)):(z.map=new Hn(r.x,r.y),z.map.depthTexture=new Vr(r.x,r.y,kn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=di,this.type===fo?(z.map.depthTexture.compareFunction=ue?Hc:zc,z.map.depthTexture.minFilter=Gt,z.map.depthTexture.magFilter=Gt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=It,z.map.depthTexture.magFilter=It);z.camera.updateProjectionMatrix()}const Ee=z.map.isWebGLCubeRenderTarget?6:1;for(let we=0;we<Ee;we++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,we),t.clear();else{we===0&&(t.setRenderTarget(z.map),t.clear());const Pe=z.getViewport(we);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),L.viewport(o)}if(H.isPointLight){const Pe=z.camera,Ke=z.matrix,Ze=H.distance||Pe.far;Ze!==Pe.far&&(Pe.far=Ze,Pe.updateProjectionMatrix()),es.setFromMatrixPosition(H.matrixWorld),Pe.position.copy(es),$a.copy(Pe.position),$a.add(dy[we]),Pe.up.copy(hy[we]),Pe.lookAt($a),Pe.updateMatrixWorld(),Ke.makeTranslation(-es.x,-es.y,-es.z),td.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(td,Pe.coordinateSystem,Pe.reversedDepth)}else z.updateMatrices(H);i=z.getFrustum(),y(I,v,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===is&&x(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(R,N,P)};function x(A,I){const v=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(r.x,r.y,{format:tr,type:fi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(I,null,v,f,M,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(I,null,v,h,M,null)}function b(A,I,v,R){let N=null;const P=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)N=P;else if(N=v.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const L=N.uuid,X=I.uuid;let Z=c[L];Z===void 0&&(Z={},c[L]=Z);let V=Z[X];V===void 0&&(V=N.clone(),Z[X]=V,I.addEventListener("dispose",D)),N=V}if(N.visible=I.visible,N.wireframe=I.wireframe,R===is?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:d[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=t.properties.get(N);L.light=v}return N}function y(A,I,v,R,N){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===is)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const X=e.update(A),Z=A.material;if(Array.isArray(Z)){const V=X.groups;for(let H=0,z=V.length;H<z;H++){const ne=V[H],ue=Z[ne.materialIndex];if(ue&&ue.visible){const Ee=b(A,ue,R,N);A.onBeforeShadow(t,A,I,v,X,Ee,ne),t.renderBufferDirect(v,null,X,Ee,A,ne),A.onAfterShadow(t,A,I,v,X,Ee,ne)}}}else if(Z.visible){const V=b(A,Z,R,N);A.onBeforeShadow(t,A,I,v,X,V,null),t.renderBufferDirect(v,null,X,V,A,null),A.onAfterShadow(t,A,I,v,X,V,null)}}const L=A.children;for(let X=0,Z=L.length;X<Z;X++)y(L[X],I,v,R,N)}function D(A){A.target.removeEventListener("dispose",D);for(const v in c){const R=c[v],N=A.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function my(t,e){function n(){let U=!1;const Me=new yt;let se=null;const Le=new yt(0,0,0,0);return{setMask:function(be){se!==be&&!U&&(t.colorMask(be,be,be,be),se=be)},setLocked:function(be){U=be},setClear:function(be,ce,Fe,Xe,St){St===!0&&(be*=Xe,ce*=Xe,Fe*=Xe),Me.set(be,ce,Fe,Xe),Le.equals(Me)===!1&&(t.clearColor(be,ce,Fe,Xe),Le.copy(Me))},reset:function(){U=!1,se=null,Le.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,se=null,Le=null,be=null;return{setReversed:function(ce){if(Me!==ce){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Me=ce;const Xe=be;be=null,this.setClear(Xe)}},getReversed:function(){return Me},setTest:function(ce){ce?Y(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ce){se!==ce&&!U&&(t.depthMask(ce),se=ce)},setFunc:function(ce){if(Me&&(ce=$0[ce]),Le!==ce){switch(ce){case xl:t.depthFunc(t.NEVER);break;case Sl:t.depthFunc(t.ALWAYS);break;case Ml:t.depthFunc(t.LESS);break;case Or:t.depthFunc(t.LEQUAL);break;case El:t.depthFunc(t.EQUAL);break;case yl:t.depthFunc(t.GEQUAL);break;case bl:t.depthFunc(t.GREATER);break;case Tl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=ce}},setLocked:function(ce){U=ce},setClear:function(ce){be!==ce&&(be=ce,Me&&(ce=1-ce),t.clearDepth(ce))},reset:function(){U=!1,se=null,Le=null,be=null,Me=!1}}}function r(){let U=!1,Me=null,se=null,Le=null,be=null,ce=null,Fe=null,Xe=null,St=null;return{setTest:function(ct){U||(ct?Y(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ct){Me!==ct&&!U&&(t.stencilMask(ct),Me=ct)},setFunc:function(ct,Xn,An){(se!==ct||Le!==Xn||be!==An)&&(t.stencilFunc(ct,Xn,An),se=ct,Le=Xn,be=An)},setOp:function(ct,Xn,An){(ce!==ct||Fe!==Xn||Xe!==An)&&(t.stencilOp(ct,Xn,An),ce=ct,Fe=Xn,Xe=An)},setLocked:function(ct){U=ct},setClear:function(ct){St!==ct&&(t.clearStencil(ct),St=ct)},reset:function(){U=!1,Me=null,se=null,Le=null,be=null,ce=null,Fe=null,Xe=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],M=null,m=!1,p=null,x=null,b=null,y=null,D=null,A=null,I=null,v=new rt(0,0,0),R=0,N=!1,P=null,L=null,X=null,Z=null,V=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const ue=t.getParameter(t.VERSION);ue.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ue)[1]),z=ne>=1):ue.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),z=ne>=2);let Ee=null,we={};const Pe=t.getParameter(t.SCISSOR_BOX),Ke=t.getParameter(t.VIEWPORT),Ze=new yt().fromArray(Pe),Ve=new yt().fromArray(Ke);function ie(U,Me,se,Le){const be=new Uint8Array(4),ce=t.createTexture();t.bindTexture(U,ce),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<se;Fe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Me+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return ce}const B={};B[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(t.DEPTH_TEST),o.setFunc(Or),Q(!1),de(nf),Y(t.CULL_FACE),$(si);function Y(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function re(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function fe(U,Me){return f[U]!==Me?(t.bindFramebuffer(U,Me),f[U]=Me,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Me),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function ye(U,Me){let se=_,Le=!1;if(U){se=h.get(Me),se===void 0&&(se=[],h.set(Me,se));const be=U.textures;if(se.length!==be.length||se[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Fe=be.length;ce<Fe;ce++)se[ce]=t.COLOR_ATTACHMENT0+ce;se.length=be.length,Le=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,Le=!0);Le&&t.drawBuffers(se)}function T(U){return M!==U?(t.useProgram(U),M=U,!0):!1}const w={[Xi]:t.FUNC_ADD,[x0]:t.FUNC_SUBTRACT,[S0]:t.FUNC_REVERSE_SUBTRACT};w[M0]=t.MIN,w[E0]=t.MAX;const F={[y0]:t.ZERO,[b0]:t.ONE,[T0]:t.SRC_COLOR,[_l]:t.SRC_ALPHA,[D0]:t.SRC_ALPHA_SATURATE,[w0]:t.DST_COLOR,[R0]:t.DST_ALPHA,[A0]:t.ONE_MINUS_SRC_COLOR,[vl]:t.ONE_MINUS_SRC_ALPHA,[P0]:t.ONE_MINUS_DST_COLOR,[C0]:t.ONE_MINUS_DST_ALPHA,[L0]:t.CONSTANT_COLOR,[I0]:t.ONE_MINUS_CONSTANT_COLOR,[N0]:t.CONSTANT_ALPHA,[U0]:t.ONE_MINUS_CONSTANT_ALPHA};function $(U,Me,se,Le,be,ce,Fe,Xe,St,ct){if(U===si){m===!0&&(re(t.BLEND),m=!1);return}if(m===!1&&(Y(t.BLEND),m=!0),U!==v0){if(U!==p||ct!==N){if((x!==Xi||D!==Xi)&&(t.blendEquation(t.FUNC_ADD),x=Xi,D=Xi),ct)switch(U){case Pr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gl:t.blendFunc(t.ONE,t.ONE);break;case rf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case Pr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rf:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sf:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}b=null,y=null,A=null,I=null,v.set(0,0,0),R=0,p=U,N=ct}return}be=be||Me,ce=ce||se,Fe=Fe||Le,(Me!==x||be!==D)&&(t.blendEquationSeparate(w[Me],w[be]),x=Me,D=be),(se!==b||Le!==y||ce!==A||Fe!==I)&&(t.blendFuncSeparate(F[se],F[Le],F[ce],F[Fe]),b=se,y=Le,A=ce,I=Fe),(Xe.equals(v)===!1||St!==R)&&(t.blendColor(Xe.r,Xe.g,Xe.b,St),v.copy(Xe),R=St),p=U,N=!1}function j(U,Me){U.side===ii?re(t.CULL_FACE):Y(t.CULL_FACE);let se=U.side===Zt;Me&&(se=!se),Q(se),U.blending===Pr&&U.transparent===!1?$(si):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Le=U.stencilWrite;a.setTest(Le),Le&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){P!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),P=U)}function de(U){U!==m0?(Y(t.CULL_FACE),U!==L&&(U===nf?t.cullFace(t.BACK):U===g0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),L=U}function ge(U){U!==X&&(z&&t.lineWidth(U),X=U)}function C(U,Me,se){U?(Y(t.POLYGON_OFFSET_FILL),(Z!==Me||V!==se)&&(Z=Me,V=se,o.getReversed()&&(Me=-Me),t.polygonOffset(Me,se))):re(t.POLYGON_OFFSET_FILL)}function oe(U){U?Y(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function ve(U){U===void 0&&(U=t.TEXTURE0+H-1),Ee!==U&&(t.activeTexture(U),Ee=U)}function he(U,Me,se){se===void 0&&(Ee===null?se=t.TEXTURE0+H-1:se=Ee);let Le=we[se];Le===void 0&&(Le={type:void 0,texture:void 0},we[se]=Le),(Le.type!==U||Le.texture!==Me)&&(Ee!==se&&(t.activeTexture(se),Ee=se),t.bindTexture(U,Me||B[U]),Le.type=U,Le.texture=Me)}function te(){const U=we[Ee];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function De(){try{t.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function g(){try{t.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function O(){try{t.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function ae(){try{t.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function pe(){try{t.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function me(){try{t.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function ee(){try{t.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function le(){try{t.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function xe(U){return d[U]!==void 0?d[U]:t.getParameter(U)}function Te(U,Me){d[U]!==Me&&(t.pixelStorei(U,Me),d[U]=Me)}function Se(U){Ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function _e(U){Ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function He(U,Me){let se=c.get(Me);se===void 0&&(se=new WeakMap,c.set(Me,se));let Le=se.get(U);Le===void 0&&(Le=t.getUniformBlockIndex(Me,U.name),se.set(U,Le))}function Ye(U,Me){const Le=c.get(Me).get(U);l.get(Me)!==Le&&(t.uniformBlockBinding(Me,Le,U.__bindingPointIndex),l.set(Me,Le))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},Ee=null,we={},f={},h=new WeakMap,_=[],M=null,m=!1,p=null,x=null,b=null,y=null,D=null,A=null,I=null,v=new rt(0,0,0),R=0,N=!1,P=null,L=null,X=null,Z=null,V=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:re,bindFramebuffer:fe,drawBuffers:ye,useProgram:T,setBlending:$,setMaterial:j,setFlipSided:Q,setCullFace:de,setLineWidth:ge,setPolygonOffset:C,setScissorTest:oe,activeTexture:ve,bindTexture:he,unbindTexture:te,compressedTexImage2D:De,compressedTexImage3D:E,texImage2D:ee,texImage3D:le,pixelStorei:Te,getParameter:xe,updateUBOMapping:He,uniformBlockBinding:Ye,texStorage2D:pe,texStorage3D:me,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:J,compressedTexSubImage3D:ae,scissor:Se,viewport:_e,reset:nt}}function gy(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return _?new OffscreenCanvas(E,g):Io("canvas")}function m(E,g,O){let J=1;const ae=De(E);if((ae.width>O||ae.height>O)&&(J=O/Math.max(ae.width,ae.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const pe=Math.floor(J*ae.width),me=Math.floor(J*ae.height);f===void 0&&(f=M(pe,me));const ee=g?M(pe,me):f;return ee.width=pe,ee.height=me,ee.getContext("2d").drawImage(E,0,0,pe,me),ze("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+pe+"x"+me+")."),ee}else return"data"in E&&ze("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function p(E){return E.generateMipmaps}function x(E){t.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,g,O,J,ae,pe=!1){if(E!==null){if(t[E]!==void 0)return t[E];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me;J&&(me=e.get("EXT_texture_norm16"),me||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=g;if(g===t.RED&&(O===t.FLOAT&&(ee=t.R32F),O===t.HALF_FLOAT&&(ee=t.R16F),O===t.UNSIGNED_BYTE&&(ee=t.R8),O===t.UNSIGNED_SHORT&&me&&(ee=me.R16_EXT),O===t.SHORT&&me&&(ee=me.R16_SNORM_EXT)),g===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(ee=t.R8UI),O===t.UNSIGNED_SHORT&&(ee=t.R16UI),O===t.UNSIGNED_INT&&(ee=t.R32UI),O===t.BYTE&&(ee=t.R8I),O===t.SHORT&&(ee=t.R16I),O===t.INT&&(ee=t.R32I)),g===t.RG&&(O===t.FLOAT&&(ee=t.RG32F),O===t.HALF_FLOAT&&(ee=t.RG16F),O===t.UNSIGNED_BYTE&&(ee=t.RG8),O===t.UNSIGNED_SHORT&&me&&(ee=me.RG16_EXT),O===t.SHORT&&me&&(ee=me.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(ee=t.RG8UI),O===t.UNSIGNED_SHORT&&(ee=t.RG16UI),O===t.UNSIGNED_INT&&(ee=t.RG32UI),O===t.BYTE&&(ee=t.RG8I),O===t.SHORT&&(ee=t.RG16I),O===t.INT&&(ee=t.RG32I)),g===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),O===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),O===t.UNSIGNED_INT&&(ee=t.RGB32UI),O===t.BYTE&&(ee=t.RGB8I),O===t.SHORT&&(ee=t.RGB16I),O===t.INT&&(ee=t.RGB32I)),g===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),O===t.UNSIGNED_INT&&(ee=t.RGBA32UI),O===t.BYTE&&(ee=t.RGBA8I),O===t.SHORT&&(ee=t.RGBA16I),O===t.INT&&(ee=t.RGBA32I)),g===t.RGB&&(O===t.UNSIGNED_SHORT&&me&&(ee=me.RGB16_EXT),O===t.SHORT&&me&&(ee=me.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),g===t.RGBA){const le=pe?Do:Je.getTransfer(ae);O===t.FLOAT&&(ee=t.RGBA32F),O===t.HALF_FLOAT&&(ee=t.RGBA16F),O===t.UNSIGNED_BYTE&&(ee=le===lt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&me&&(ee=me.RGBA16_EXT),O===t.SHORT&&me&&(ee=me.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function D(E,g){let O;return E?g===null||g===kn||g===Es?O=t.DEPTH24_STENCIL8:g===Bn?O=t.DEPTH32F_STENCIL8:g===Ms&&(O=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===kn||g===Es?O=t.DEPTH_COMPONENT24:g===Bn?O=t.DEPTH_COMPONENT32F:g===Ms&&(O=t.DEPTH_COMPONENT16),O}function A(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==It&&E.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function I(E){const g=E.target;g.removeEventListener("dispose",I),R(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function v(E){const g=E.target;g.removeEventListener("dispose",v),P(g)}function R(E){const g=i.get(E);if(g.__webglInit===void 0)return;const O=E.source,J=h.get(O);if(J){const ae=J[g.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(E),Object.keys(J).length===0&&h.delete(O)}i.remove(E)}function N(E){const g=i.get(E);t.deleteTexture(g.__webglTexture);const O=E.source,J=h.get(O);delete J[g.__cacheKey],o.memory.textures--}function P(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let ae=0;ae<g.__webglFramebuffer[J].length;ae++)t.deleteFramebuffer(g.__webglFramebuffer[J][ae]);else t.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)t.deleteFramebuffer(g.__webglFramebuffer[J]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=E.textures;for(let J=0,ae=O.length;J<ae;J++){const pe=i.get(O[J]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(E)}let L=0;function X(){L=0}function Z(){return L}function V(E){L=E}function H(){const E=L;return E>=r.maxTextures&&ze("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function z(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ne(E,g){const O=i.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const J=E.image;if(J===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{re(O,E,g);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+g)}function ue(E,g){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){re(O,E,g);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+g)}function Ee(E,g){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){re(O,E,g);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+g)}function we(E,g){const O=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){fe(O,E,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+g)}const Pe={[Al]:t.REPEAT,[ri]:t.CLAMP_TO_EDGE,[Rl]:t.MIRRORED_REPEAT},Ke={[It]:t.NEAREST,[B0]:t.NEAREST_MIPMAP_NEAREST,[Us]:t.NEAREST_MIPMAP_LINEAR,[Gt]:t.LINEAR,[Sa]:t.LINEAR_MIPMAP_NEAREST,[Ki]:t.LINEAR_MIPMAP_LINEAR},Ze={[z0]:t.NEVER,[q0]:t.ALWAYS,[H0]:t.LESS,[zc]:t.LEQUAL,[k0]:t.EQUAL,[Hc]:t.GEQUAL,[W0]:t.GREATER,[X0]:t.NOTEQUAL};function Ve(E,g){if(g.type===Bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===Sa||g.magFilter===Us||g.magFilter===Ki||g.minFilter===Gt||g.minFilter===Sa||g.minFilter===Us||g.minFilter===Ki)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,Pe[g.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,Pe[g.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,Pe[g.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,Ke[g.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,Ke[g.minFilter]),g.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Ze[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===It||g.minFilter!==Us&&g.minFilter!==Ki||g.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ie(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",I));const J=g.source;let ae=h.get(J);ae===void 0&&(ae={},h.set(J,ae));const pe=z(g);if(pe!==E.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ae[pe].usedTimes++;const me=ae[E.__cacheKey];me!==void 0&&(ae[E.__cacheKey].usedTimes--,me.usedTimes===0&&N(g)),E.__cacheKey=pe,E.__webglTexture=ae[pe].texture}return O}function B(E,g,O){return Math.floor(Math.floor(E/O)/g)}function Y(E,g,O,J){const pe=E.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,O,J,g.data);else{pe.sort((Te,Se)=>Te.start-Se.start);let me=0;for(let Te=1;Te<pe.length;Te++){const Se=pe[me],_e=pe[Te],He=Se.start+Se.count,Ye=B(_e.start,g.width,4),nt=B(Se.start,g.width,4);_e.start<=He+1&&Ye===nt&&B(_e.start+_e.count-1,g.width,4)===Ye?Se.count=Math.max(Se.count,_e.start+_e.count-Se.start):(++me,pe[me]=_e)}pe.length=me+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),le=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Te=0,Se=pe.length;Te<Se;Te++){const _e=pe[Te],He=Math.floor(_e.start/4),Ye=Math.ceil(_e.count/4),nt=He%g.width,U=Math.floor(He/g.width),Me=Ye,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,nt,U,Me,se,O,J,g.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function re(E,g,O){let J=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=t.TEXTURE_3D);const ae=ie(E,g),pe=g.source;n.bindTexture(J,E.__webglTexture,t.TEXTURE0+O);const me=i.get(pe);if(pe.version!==me.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const se=Je.getPrimaries(Je.workingColorSpace),Le=g.colorSpace===wi?null:Je.getPrimaries(g.colorSpace),be=g.colorSpace===wi||se===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let le=m(g.image,!1,r.maxTextureSize);le=te(g,le);const xe=s.convert(g.format,g.colorSpace),Te=s.convert(g.type);let Se=y(g.internalFormat,xe,Te,g.normalized,g.colorSpace,g.isVideoTexture);Ve(J,g);let _e;const He=g.mipmaps,Ye=g.isVideoTexture!==!0,nt=me.__version===void 0||ae===!0,U=pe.dataReady,Me=A(g,le);if(g.isDepthTexture)Se=D(g.format===ji,g.type),nt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Se,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Se,le.width,le.height,0,xe,Te,null));else if(g.isDataTexture)if(He.length>0){Ye&&nt&&n.texStorage2D(t.TEXTURE_2D,Me,Se,He[0].width,He[0].height);for(let se=0,Le=He.length;se<Le;se++)_e=He[se],Ye?U&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,_e.width,_e.height,xe,Te,_e.data):n.texImage2D(t.TEXTURE_2D,se,Se,_e.width,_e.height,0,xe,Te,_e.data);g.generateMipmaps=!1}else Ye?(nt&&n.texStorage2D(t.TEXTURE_2D,Me,Se,le.width,le.height),U&&Y(g,le,xe,Te)):n.texImage2D(t.TEXTURE_2D,0,Se,le.width,le.height,0,xe,Te,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ye&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Se,He[0].width,He[0].height,le.depth);for(let se=0,Le=He.length;se<Le;se++)if(_e=He[se],g.format!==_n)if(xe!==null)if(Ye){if(U)if(g.layerUpdates.size>0){const be=Lf(_e.width,_e.height,g.format,g.type);for(const ce of g.layerUpdates){const Fe=_e.data.subarray(ce*be/_e.data.BYTES_PER_ELEMENT,(ce+1)*be/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,ce,_e.width,_e.height,1,xe,Fe)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,le.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Se,_e.width,_e.height,le.depth,0,_e.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,le.depth,xe,Te,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Se,_e.width,_e.height,le.depth,0,xe,Te,_e.data)}else{Ye&&nt&&n.texStorage2D(t.TEXTURE_2D,Me,Se,He[0].width,He[0].height);for(let se=0,Le=He.length;se<Le;se++)_e=He[se],g.format!==_n?xe!==null?Ye?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Se,_e.width,_e.height,0,_e.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?U&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,_e.width,_e.height,xe,Te,_e.data):n.texImage2D(t.TEXTURE_2D,se,Se,_e.width,_e.height,0,xe,Te,_e.data)}else if(g.isDataArrayTexture)if(Ye){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Se,le.width,le.height,le.depth),U)if(g.layerUpdates.size>0){const se=Lf(le.width,le.height,g.format,g.type);for(const Le of g.layerUpdates){const be=le.data.subarray(Le*se/le.data.BYTES_PER_ELEMENT,(Le+1)*se/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,le.width,le.height,1,xe,Te,be)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Te,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,xe,Te,le.data);else if(g.isData3DTexture)Ye?(nt&&n.texStorage3D(t.TEXTURE_3D,Me,Se,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Te,le.data)):n.texImage3D(t.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,xe,Te,le.data);else if(g.isFramebufferTexture){if(nt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Me,Se,le.width,le.height);else{let se=le.width,Le=le.height;for(let be=0;be<Me;be++)n.texImage2D(t.TEXTURE_2D,be,Se,se,Le,0,xe,Te,null),se>>=1,Le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),le.parentNode!==se){se.appendChild(le),d.add(g),se.onpaint=Xe=>{const St=Xe.changedElements;for(const ct of d)St.includes(ct.image)&&(ct.needsUpdate=!0)},se.requestPaint();return}const Le=0,be=t.RGBA,ce=t.RGBA,Fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Le,be,ce,Fe,le),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(He.length>0){if(Ye&&nt){const se=De(He[0]);n.texStorage2D(t.TEXTURE_2D,Me,Se,se.width,se.height)}for(let se=0,Le=He.length;se<Le;se++)_e=He[se],Ye?U&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,xe,Te,_e):n.texImage2D(t.TEXTURE_2D,se,Se,xe,Te,_e);g.generateMipmaps=!1}else if(Ye){if(nt){const se=De(le);n.texStorage2D(t.TEXTURE_2D,Me,Se,se.width,se.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Te,le)}else n.texImage2D(t.TEXTURE_2D,0,Se,xe,Te,le);p(g)&&x(J),me.__version=pe.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function fe(E,g,O){if(g.image.length!==6)return;const J=ie(E,g),ae=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+O);const pe=i.get(ae);if(ae.version!==pe.__version||J===!0){n.activeTexture(t.TEXTURE0+O);const me=Je.getPrimaries(Je.workingColorSpace),ee=g.colorSpace===wi?null:Je.getPrimaries(g.colorSpace),le=g.colorSpace===wi||me===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let ce=0;ce<6;ce++)!xe&&!Te?Se[ce]=m(g.image[ce],!0,r.maxCubemapSize):Se[ce]=Te?g.image[ce].image:g.image[ce],Se[ce]=te(g,Se[ce]);const _e=Se[0],He=s.convert(g.format,g.colorSpace),Ye=s.convert(g.type),nt=y(g.internalFormat,He,Ye,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,Me=pe.__version===void 0||J===!0,se=ae.dataReady;let Le=A(g,_e);Ve(t.TEXTURE_CUBE_MAP,g);let be;if(xe){U&&Me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,nt,_e.width,_e.height);for(let ce=0;ce<6;ce++){be=Se[ce].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const Xe=be[Fe];g.format!==_n?He!==null?U?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Xe.width,Xe.height,He,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,nt,Xe.width,Xe.height,0,Xe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Xe.width,Xe.height,He,Ye,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,nt,Xe.width,Xe.height,0,He,Ye,Xe.data)}}}else{if(be=g.mipmaps,U&&Me){be.length>0&&Le++;const ce=De(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,nt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Te){U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Se[ce].width,Se[ce].height,He,Ye,Se[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Se[ce].width,Se[ce].height,0,He,Ye,Se[ce].data);for(let Fe=0;Fe<be.length;Fe++){const St=be[Fe].image[ce].image;U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,St.width,St.height,He,Ye,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,nt,St.width,St.height,0,He,Ye,St.data)}}else{U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,He,Ye,Se[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,He,Ye,Se[ce]);for(let Fe=0;Fe<be.length;Fe++){const Xe=be[Fe];U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,He,Ye,Xe.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,nt,He,Ye,Xe.image[ce])}}}p(g)&&x(t.TEXTURE_CUBE_MAP),pe.__version=ae.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ye(E,g,O,J,ae,pe){const me=s.convert(O.format,O.colorSpace),ee=s.convert(O.type),le=y(O.internalFormat,me,ee,O.normalized,O.colorSpace),xe=i.get(g),Te=i.get(O);if(Te.__renderTarget=g,!xe.__hasExternalTextures){const Se=Math.max(1,g.width>>pe),_e=Math.max(1,g.height>>pe);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,pe,le,Se,_e,g.depth,0,me,ee,null):n.texImage2D(ae,pe,le,Se,_e,0,me,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),ve(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ae,Te.__webglTexture,0,oe(g)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ae,Te.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function T(E,g,O){if(t.bindRenderbuffer(t.RENDERBUFFER,E),g.depthBuffer){const J=g.depthTexture,ae=J&&J.isDepthTexture?J.type:null,pe=D(g.stencilBuffer,ae),me=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(g),pe,g.width,g.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(g),pe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,pe,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,E)}else{const J=g.textures;for(let ae=0;ae<J.length;ae++){const pe=J[ae],me=s.convert(pe.format,pe.colorSpace),ee=s.convert(pe.type),le=y(pe.internalFormat,me,ee,pe.normalized,pe.colorSpace);ve(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(g),le,g.width,g.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(g),le,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,le,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function w(E,g,O){const J=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(g.depthTexture);if(ae.__renderTarget=g,(!ae.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),ae.__webglTexture===void 0){ae.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,g.depthTexture);const xe=s.convert(g.depthTexture.format),Te=s.convert(g.depthTexture.type);let Se;g.depthTexture.format===di?Se=t.DEPTH_COMPONENT24:g.depthTexture.format===ji&&(Se=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Se,g.width,g.height,0,xe,Te,null)}}else ne(g.depthTexture,0);const pe=ae.__webglTexture,me=oe(g),ee=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,le=g.depthTexture.format===ji?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===di)ve(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ee,pe,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,le,ee,pe,0);else if(g.depthTexture.format===ji)ve(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ee,pe,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,le,ee,pe,0);else throw new Error("Unknown depthTexture format")}function F(E){const g=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const ae=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",ae)};J.addEventListener("dispose",ae),g.__depthDisposeCallback=ae}g.__boundDepthTexture=J}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)w(g.__webglFramebuffer[J],E,J);else{const J=E.texture.mipmaps;J&&J.length>0?w(g.__webglFramebuffer[0],E,0):w(g.__webglFramebuffer,E,0)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=t.createRenderbuffer(),T(g.__webglDepthbuffer[J],E,!1);else{const ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,pe)}}else{const J=E.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),T(g.__webglDepthbuffer,E,!1);else{const ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,pe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(E,g,O){const J=i.get(E);g!==void 0&&ye(J.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&F(E)}function j(E){const g=E.texture,O=i.get(E),J=i.get(g);E.addEventListener("dispose",v);const ae=E.textures,pe=E.isWebGLCubeRenderTarget===!0,me=ae.length>1;if(me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=g.version,o.memory.textures++),pe){O.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[ee]=[];for(let le=0;le<g.mipmaps.length;le++)O.__webglFramebuffer[ee][le]=t.createFramebuffer()}else O.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let ee=0;ee<g.mipmaps.length;ee++)O.__webglFramebuffer[ee]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(me)for(let ee=0,le=ae.length;ee<le;ee++){const xe=i.get(ae[ee]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&ve(E)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ee=0;ee<ae.length;ee++){const le=ae[ee];O.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);const xe=s.convert(le.format,le.colorSpace),Te=s.convert(le.type),Se=y(le.internalFormat,xe,Te,le.normalized,le.colorSpace,E.isXRRenderTarget===!0),_e=oe(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Se,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,O.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),T(O.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,g);for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)ye(O.__webglFramebuffer[ee][le],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le);else ye(O.__webglFramebuffer[ee],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(g)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let ee=0,le=ae.length;ee<le;ee++){const xe=ae[ee],Te=i.get(xe);let Se=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,Te.__webglTexture),Ve(Se,xe),ye(O.__webglFramebuffer,E,xe,t.COLOR_ATTACHMENT0+ee,Se,0),p(xe)&&x(Se)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,J.__webglTexture),Ve(ee,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)ye(O.__webglFramebuffer[le],E,g,t.COLOR_ATTACHMENT0,ee,le);else ye(O.__webglFramebuffer,E,g,t.COLOR_ATTACHMENT0,ee,0);p(g)&&x(ee),n.unbindTexture()}E.depthBuffer&&F(E)}function Q(E){const g=E.textures;for(let O=0,J=g.length;O<J;O++){const ae=g[O];if(p(ae)){const pe=b(E),me=i.get(ae).__webglTexture;n.bindTexture(pe,me),x(pe),n.unbindTexture()}}}const de=[],ge=[];function C(E){if(E.samples>0){if(ve(E)===!1){const g=E.textures,O=E.width,J=E.height;let ae=t.COLOR_BUFFER_BIT;const pe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(E),ee=g.length>1;if(ee)for(let xe=0;xe<g.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const le=E.texture.mipmaps;le&&le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const Te=i.get(g[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,O,J,0,0,O,J,ae,t.NEAREST),l===!0&&(de.length=0,ge.length=0,de.push(t.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(de.push(pe),ge.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let xe=0;xe<g.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const Te=i.get(g[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function oe(E){return Math.min(r.maxSamples,E.samples)}function ve(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function he(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function te(E,g){const O=E.colorSpace,J=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Po&&O!==wi&&(Je.getTransfer(O)===lt?(J!==_n||ae!==cn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",O)),g}function De(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=V,this.setTexture2D=ne,this.setTexture2DArray=ue,this.setTexture3D=Ee,this.setTextureCube=we,this.rebindTextures=$,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _y(t,e){function n(i,r=wi){let s;const o=Je.getTransfer(r);if(i===cn)return t.UNSIGNED_BYTE;if(i===Fc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===jh)return t.BYTE;if(i===$h)return t.SHORT;if(i===Ms)return t.UNSIGNED_SHORT;if(i===Uc)return t.INT;if(i===kn)return t.UNSIGNED_INT;if(i===Bn)return t.FLOAT;if(i===fi)return t.HALF_FLOAT;if(i===Qh)return t.ALPHA;if(i===ep)return t.RGB;if(i===_n)return t.RGBA;if(i===di)return t.DEPTH_COMPONENT;if(i===ji)return t.DEPTH_STENCIL;if(i===tp)return t.RED;if(i===Bc)return t.RED_INTEGER;if(i===tr)return t.RG;if(i===Vc)return t.RG_INTEGER;if(i===Gc)return t.RGBA_INTEGER;if(i===ho||i===po||i===mo||i===go)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===wl||i===Pl||i===Dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Il||i===Nl||i===Ul||i===Fl||i===Co||i===Ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ll||i===Il)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return s.COMPRESSED_R11_EAC;if(i===Fl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Co)return s.COMPRESSED_RG11_EAC;if(i===Ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bl||i===Vl||i===Gl||i===zl||i===Hl||i===kl||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===jl||i===$l||i===Zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===Ql||i===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jl)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===nc||i===wo||i===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`;class Sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new hp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wn({vertexShader:vy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hi(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class My extends rr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Sy,p={},x=n.getContextAttributes();let b=null,y=null;const D=[],A=[],I=new ft;let v=null;const R=new ln;R.viewport=new yt;const N=new ln;N.viewport=new yt;const P=[R,N],L=new Dv;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let B=D[ie];return B===void 0&&(B=new Ca,D[ie]=B),B.getTargetRaySpace()},this.getControllerGrip=function(ie){let B=D[ie];return B===void 0&&(B=new Ca,D[ie]=B),B.getGripSpace()},this.getHand=function(ie){let B=D[ie];return B===void 0&&(B=new Ca,D[ie]=B),B.getHandSpace()};function V(ie){const B=A.indexOf(ie.inputSource);if(B===-1)return;const Y=D[B];Y!==void 0&&(Y.update(ie.inputSource,ie.frame,c||o),Y.dispatchEvent({type:ie.type,data:ie.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let ie=0;ie<D.length;ie++){const B=A[ie];B!==null&&(A[ie]=null,D[ie].disconnect(B))}X=null,Z=null,m.reset();for(const ie in p)delete p[ie];e.setRenderTarget(b),h=null,f=null,d=null,r=null,y=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,re=null,fe=null;x.depth&&(fe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=x.stencil?ji:di,re=x.stencil?Es:kn);const ye={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Hn(f.textureWidth,f.textureHeight,{format:_n,type:cn,depthTexture:new Vr(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Y={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Hn(h.framebufferWidth,h.framebufferHeight,{format:_n,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(ie){for(let B=0;B<ie.removed.length;B++){const Y=ie.removed[B],re=A.indexOf(Y);re>=0&&(A[re]=null,D[re].disconnect(Y))}for(let B=0;B<ie.added.length;B++){const Y=ie.added[B];let re=A.indexOf(Y);if(re===-1){for(let ye=0;ye<D.length;ye++)if(ye>=A.length){A.push(Y),re=ye;break}else if(A[ye]===null){A[ye]=Y,re=ye;break}if(re===-1)break}const fe=D[re];fe&&fe.connect(Y)}}const ne=new q,ue=new q;function Ee(ie,B,Y){ne.setFromMatrixPosition(B.matrixWorld),ue.setFromMatrixPosition(Y.matrixWorld);const re=ne.distanceTo(ue),fe=B.projectionMatrix.elements,ye=Y.projectionMatrix.elements,T=fe[14]/(fe[10]-1),w=fe[14]/(fe[10]+1),F=(fe[9]+1)/fe[5],$=(fe[9]-1)/fe[5],j=(fe[8]-1)/fe[0],Q=(ye[8]+1)/ye[0],de=T*j,ge=T*Q,C=re/(-j+Q),oe=C*-j;if(B.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(oe),ie.translateZ(C),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),fe[10]===-1)ie.projectionMatrix.copy(B.projectionMatrix),ie.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const ve=T+C,he=w+C,te=de-oe,De=ge+(re-oe),E=F*w/he*ve,g=$*w/he*ve;ie.projectionMatrix.makePerspective(te,De,E,g,ve,he),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function we(ie,B){B===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(B.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let B=ie.near,Y=ie.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),L.near=N.near=R.near=B,L.far=N.far=R.far=Y,(X!==L.near||Z!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),X=L.near,Z=L.far),L.layers.mask=ie.layers.mask|6,R.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const re=ie.parent,fe=L.cameras;we(L,re);for(let ye=0;ye<fe.length;ye++)we(fe[ye],re);fe.length===2?Ee(L,R,N):L.projectionMatrix.copy(R.projectionMatrix),Pe(ie,L,re)};function Pe(ie,B,Y){Y===null?ie.matrix.copy(B.matrixWorld):(ie.matrix.copy(Y.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(B.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(B.projectionMatrix),ie.projectionMatrixInverse.copy(B.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=sc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(ie){return p[ie]};let Ke=null;function Ze(ie,B){if(u=B.getViewerPose(c||o),_=B,u!==null){const Y=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let re=!1;Y.length!==L.cameras.length&&(L.cameras.length=0,re=!0);for(let w=0;w<Y.length;w++){const F=Y[w];let $=null;if(h!==null)$=h.getViewport(F);else{const Q=d.getViewSubImage(f,F);$=Q.viewport,w===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let j=P[w];j===void 0&&(j=new ln,j.layers.enable(w),j.viewport=new yt,P[w]=j),j.matrix.fromArray(F.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(F.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set($.x,$.y,$.width,$.height),w===0&&(L.matrix.copy(j.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),re===!0&&L.cameras.push(j)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const w=d.getDepthInformation(Y[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(fe&&fe.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let w=0;w<Y.length;w++){const F=Y[w].camera;if(F){let $=p[F];$||($=new hp,p[F]=$);const j=d.getCameraImage(F);$.sourceTexture=j}}}}for(let Y=0;Y<D.length;Y++){const re=A[Y],fe=D[Y];re!==null&&fe!==void 0&&fe.update(re,B,c||o)}Ke&&Ke(ie,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),_=null}const Ve=new _p;Ve.setAnimationLoop(Ze),this.setAnimationLoop=function(ie){Ke=ie},this.dispose=function(){}}}const Ey=new Tt,bp=new ke;bp.set(-1,0,0,0,1,0,0,0,1);function yy(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,y=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function by(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const y=b.program;i.uniformBlockBinding(x,y)}function c(x,b){let y=r[x.id];y===void 0&&(_(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(x,D);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const b=d();x.__bindingPointIndex=b;const y=t.createBuffer(),D=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,D,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const b=r[x.id],y=x.uniforms,D=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let A=0,I=y.length;A<I;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let R=0,N=v.length;R<N;R++){const P=v[R];if(h(P,A,R,D)===!0){const L=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let V=0;V<X.length;V++){const H=X[V],z=M(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,L+Z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):ArrayBuffer.isView(H)?P.__data.set(new H.constructor(H.buffer,H.byteOffset,P.__data.length)):(H.toArray(P.__data,Z),Z+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,b,y,D){const A=x.value,I=b+"_"+y;if(D[I]===void 0)return typeof A=="number"||typeof A=="boolean"?D[I]=A:ArrayBuffer.isView(A)?D[I]=A.slice():D[I]=A.clone(),!0;{const v=D[I];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return D[I]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function _(x){const b=x.uniforms;let y=0;const D=16;for(let I=0,v=b.length;I<v;I++){const R=Array.isArray(b[I])?b[I]:[b[I]];for(let N=0,P=R.length;N<P;N++){const L=R[N],X=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,V=X.length;Z<V;Z++){const H=X[Z],z=M(H),ne=y%D,ue=ne%z.boundary,Ee=ne+ue;y+=ue,Ee!==0&&D-Ee<z.storage&&(y+=D-Ee),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=z.storage}}}const A=y%D;return A>0&&(y+=D-A),x.__size=y,x.__cache={},this}function M(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const Ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function Ay(){return Pn===null&&(Pn=new _v(Ty,16,16,tr,fi),Pn.name="DFG_LUT",Pn.minFilter=Gt,Pn.magFilter=Gt,Pn.wrapS=ri,Pn.wrapT=ri,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Ry{constructor(e={}){const{canvas:n=K0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const M=h,m=new Set([Gc,Vc,Bc]),p=new Set([cn,kn,Ms,Es,Fc,Oc]),x=new Uint32Array(4),b=new Int32Array(4),y=new q;let D=null,A=null;const I=[],v=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,L=null;this._outputColorSpace=an;let X=0,Z=0,V=null,H=-1,z=null;const ne=new yt,ue=new yt;let Ee=null;const we=new rt(0);let Pe=0,Ke=n.width,Ze=n.height,Ve=1,ie=null,B=null;const Y=new yt(0,0,Ke,Ze),re=new yt(0,0,Ke,Ze);let fe=!1;const ye=new up;let T=!1,w=!1;const F=new Tt,$=new q,j=new yt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function ge(){return V===null?Ve:1}let C=i;function oe(S,G){return n.getContext(S,G)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nc}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),C===null){const G="webgl2";if(C=oe(G,S),C===null)throw oe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw tt("WebGLRenderer: "+S.message),S}let ve,he,te,De,E,g,O,J,ae,pe,me,ee,le,xe,Te,Se,_e,He,Ye,nt,U,Me,se;function Le(){ve=new AM(C),ve.init(),U=new _y(C,ve),he=new vM(C,ve,e,U),te=new my(C,ve),he.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),De=new wM(C),E=new ty,g=new gy(C,ve,te,E,he,U,De),O=new TM(N),J=new Iv(C),Me=new gM(C,J),ae=new RM(C,J,De,Me),pe=new DM(C,ae,J,Me,De),He=new PM(C,he,g),Te=new xM(E),me=new ey(N,O,ve,he,Me,Te),ee=new yy(N,E),le=new iy,xe=new cy(ve),_e=new mM(N,O,te,pe,_,l),Se=new py(N,pe,he),se=new by(C,De,he,te),Ye=new _M(C,ve,De),nt=new CM(C,ve,De),De.programs=me.programs,N.capabilities=he,N.extensions=ve,N.properties=E,N.renderLists=le,N.shadowMap=Se,N.state=te,N.info=De}Le(),M!==cn&&(R=new IM(M,n.width,n.height,r,s));const be=new My(N,C);this.xr=be,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(S){S!==void 0&&(Ve=S,this.setSize(Ke,Ze,!1))},this.getSize=function(S){return S.set(Ke,Ze)},this.setSize=function(S,G,K=!0){if(be.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=S,Ze=G,n.width=Math.floor(S*Ve),n.height=Math.floor(G*Ve),K===!0&&(n.style.width=S+"px",n.style.height=G+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(Ke*Ve,Ze*Ve).floor()},this.setDrawingBufferSize=function(S,G,K){Ke=S,Ze=G,Ve=K,n.width=Math.floor(S*K),n.height=Math.floor(G*K),this.setViewport(0,0,S,G)},this.setEffects=function(S){if(M===cn){tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let G=0;G<S.length;G++)if(S[G].isOutputPass===!0){ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,G,K,k){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,G,K,k),te.viewport(ne.copy(Y).multiplyScalar(Ve).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,G,K,k){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,G,K,k),te.scissor(ue.copy(re).multiplyScalar(Ve).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(S){te.setScissorTest(fe=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){B=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(S=!0,G=!0,K=!0){let k=0;if(S){let W=!1;if(V!==null){const Ce=V.texture.format;W=m.has(Ce)}if(W){const Ce=V.texture.type,Ne=p.has(Ce),Re=_e.getClearColor(),Ue=_e.getClearAlpha(),Oe=Re.r,qe=Re.g,$e=Re.b;Ne?(x[0]=Oe,x[1]=qe,x[2]=$e,x[3]=Ue,C.clearBufferuiv(C.COLOR,0,x)):(b[0]=Oe,b[1]=qe,b[2]=$e,b[3]=Ue,C.clearBufferiv(C.COLOR,0,b))}else k|=C.COLOR_BUFFER_BIT}G&&(k|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),_e.dispose(),le.dispose(),xe.dispose(),E.dispose(),O.dispose(),pe.dispose(),Me.dispose(),se.dispose(),me.dispose(),be.dispose(),be.removeEventListener("sessionstart",jc),be.removeEventListener("sessionend",$c),Ii.stop()};function ce(S){S.preventDefault(),ff("WebGLRenderer: Context Lost."),P=!0}function Fe(){ff("WebGLRenderer: Context Restored."),P=!1;const S=De.autoReset,G=Se.enabled,K=Se.autoUpdate,k=Se.needsUpdate,W=Se.type;Le(),De.autoReset=S,Se.enabled=G,Se.autoUpdate=K,Se.needsUpdate=k,Se.type=W}function Xe(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function St(S){const G=S.target;G.removeEventListener("dispose",St),ct(G)}function ct(S){Xn(S),E.remove(S)}function Xn(S){const G=E.get(S).programs;G!==void 0&&(G.forEach(function(K){me.releaseProgram(K)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,K,k,W,Ce){G===null&&(G=Q);const Ne=W.isMesh&&W.matrixWorld.determinant()<0,Re=Cp(S,G,K,k,W);te.setMaterial(k,Ne);let Ue=K.index,Oe=1;if(k.wireframe===!0){if(Ue=ae.getWireframeAttribute(K),Ue===void 0)return;Oe=2}const qe=K.drawRange,$e=K.attributes.position;let Be=qe.start*Oe,ut=(qe.start+qe.count)*Oe;Ce!==null&&(Be=Math.max(Be,Ce.start*Oe),ut=Math.min(ut,(Ce.start+Ce.count)*Oe)),Ue!==null?(Be=Math.max(Be,0),ut=Math.min(ut,Ue.count)):$e!=null&&(Be=Math.max(Be,0),ut=Math.min(ut,$e.count));const Mt=ut-Be;if(Mt<0||Mt===1/0)return;Me.setup(W,k,Re,K,Ue);let vt,dt=Ye;if(Ue!==null&&(vt=J.get(Ue),dt=nt,dt.setIndex(vt)),W.isMesh)k.wireframe===!0?(te.setLineWidth(k.wireframeLinewidth*ge()),dt.setMode(C.LINES)):dt.setMode(C.TRIANGLES);else if(W.isLine){let Nt=k.linewidth;Nt===void 0&&(Nt=1),te.setLineWidth(Nt*ge()),W.isLineSegments?dt.setMode(C.LINES):W.isLineLoop?dt.setMode(C.LINE_LOOP):dt.setMode(C.LINE_STRIP)}else W.isPoints?dt.setMode(C.POINTS):W.isSprite&&dt.setMode(C.TRIANGLES);if(W.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Nt=W._multiDrawStarts,Ie=W._multiDrawCounts,Qt=W._multiDrawCount,et=Ue?J.get(Ue).bytesPerElement:1,rn=E.get(k).currentProgram.getUniforms();for(let Rn=0;Rn<Qt;Rn++)rn.setValue(C,"_gl_DrawID",Rn),dt.render(Nt[Rn]/et,Ie[Rn])}else if(W.isInstancedMesh)dt.renderInstances(Be,Mt,W.count);else if(K.isInstancedBufferGeometry){const Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ie=Math.min(K.instanceCount,Nt);dt.renderInstances(Be,Mt,Ie)}else dt.render(Be,Mt)};function An(S,G,K){S.transparent===!0&&S.side===ii&&S.forceSinglePass===!1?(S.side=Zt,S.needsUpdate=!0,Ds(S,G,K),S.side=Li,S.needsUpdate=!0,Ds(S,G,K),S.side=ii):Ds(S,G,K)}this.compile=function(S,G,K=null){K===null&&(K=S),A=xe.get(K),A.init(G),v.push(A),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),S!==K&&S.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const k=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ce=W.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const Re=Ce[Ne];An(Re,K,W),k.add(Re)}else An(Ce,K,W),k.add(Ce)}),A=v.pop(),k},this.compileAsync=function(S,G,K=null){const k=this.compile(S,G,K);return new Promise(W=>{function Ce(){if(k.forEach(function(Ne){E.get(Ne).currentProgram.isReady()&&k.delete(Ne)}),k.size===0){W(S);return}setTimeout(Ce,10)}ve.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ta=null;function Ap(S){ta&&ta(S)}function jc(){Ii.stop()}function $c(){Ii.start()}const Ii=new _p;Ii.setAnimationLoop(Ap),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(S){ta=S,be.setAnimationLoop(S),S===null?Ii.stop():Ii.start()},be.addEventListener("sessionstart",jc),be.addEventListener("sessionend",$c),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(S,G);const K=be.enabled===!0&&be.isPresenting===!0,k=R!==null&&(V===null||K)&&R.begin(N,V);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(G),G=be.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,G,V),A=xe.get(S,v.length),A.init(G),A.state.textureUnits=g.getTextureUnits(),v.push(A),F.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ye.setFromProjectionMatrix(F,Vn,G.reversedDepth),w=this.localClippingEnabled,T=Te.init(this.clippingPlanes,w),D=le.get(S,I.length),D.init(),I.push(D),be.enabled===!0&&be.isPresenting===!0){const Ne=N.xr.getDepthSensingMesh();Ne!==null&&na(Ne,G,-1/0,N.sortObjects)}na(S,G,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(ie,B),de=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,de&&_e.addToRenderList(D,S),this.info.render.frame++,T===!0&&Te.beginShadows();const W=A.state.shadowsArray;if(Se.render(W,S,G),T===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&R.hasRenderPass())===!1){const Ne=D.opaque,Re=D.transmissive;if(A.setupLights(),G.isArrayCamera){const Ue=G.cameras;if(Re.length>0)for(let Oe=0,qe=Ue.length;Oe<qe;Oe++){const $e=Ue[Oe];Jc(Ne,Re,S,$e)}de&&_e.render(S);for(let Oe=0,qe=Ue.length;Oe<qe;Oe++){const $e=Ue[Oe];Zc(D,S,$e,$e.viewport)}}else Re.length>0&&Jc(Ne,Re,S,G),de&&_e.render(S),Zc(D,S,G)}V!==null&&Z===0&&(g.updateMultisampleRenderTarget(V),g.updateRenderTargetMipmap(V)),k&&R.end(N),S.isScene===!0&&S.onAfterRender(N,S,G),Me.resetDefaultState(),H=-1,z=null,v.pop(),v.length>0?(A=v[v.length-1],g.setTextureUnits(A.state.textureUnits),T===!0&&Te.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?D=I[I.length-1]:D=null,L!==null&&L.renderEnd()};function na(S,G,K,k){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ye.intersectsSprite(S)){k&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(F);const Ne=pe.update(S),Re=S.material;Re.visible&&D.push(S,Ne,Re,K,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ye.intersectsObject(S))){const Ne=pe.update(S),Re=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),j.copy(S.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),j.copy(Ne.boundingSphere.center)),j.applyMatrix4(S.matrixWorld).applyMatrix4(F)),Array.isArray(Re)){const Ue=Ne.groups;for(let Oe=0,qe=Ue.length;Oe<qe;Oe++){const $e=Ue[Oe],Be=Re[$e.materialIndex];Be&&Be.visible&&D.push(S,Ne,Be,K,j.z,$e)}}else Re.visible&&D.push(S,Ne,Re,K,j.z,null)}}const Ce=S.children;for(let Ne=0,Re=Ce.length;Ne<Re;Ne++)na(Ce[Ne],G,K,k)}function Zc(S,G,K,k){const{opaque:W,transmissive:Ce,transparent:Ne}=S;A.setupLightsView(K),T===!0&&Te.setGlobalState(N.clippingPlanes,K),k&&te.viewport(ne.copy(k)),W.length>0&&Ps(W,G,K),Ce.length>0&&Ps(Ce,G,K),Ne.length>0&&Ps(Ne,G,K),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Jc(S,G,K,k){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Be=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Hn(1,1,{generateMipmaps:!0,type:Be?fi:cn,minFilter:Ki,samples:Math.max(4,he.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Ce=A.state.transmissionRenderTarget[k.id],Ne=k.viewport||ne;Ce.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const Re=N.getRenderTarget(),Ue=N.getActiveCubeFace(),Oe=N.getActiveMipmapLevel();N.setRenderTarget(Ce),N.getClearColor(we),Pe=N.getClearAlpha(),Pe<1&&N.setClearColor(16777215,.5),N.clear(),de&&_e.render(K);const qe=N.toneMapping;N.toneMapping=zn;const $e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),T===!0&&Te.setGlobalState(N.clippingPlanes,k),Ps(S,K,k),g.updateMultisampleRenderTarget(Ce),g.updateRenderTargetMipmap(Ce),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let ut=0,Mt=G.length;ut<Mt;ut++){const vt=G[ut],{object:dt,geometry:Nt,material:Ie,group:Qt}=vt;if(Ie.side===ii&&dt.layers.test(k.layers)){const et=Ie.side;Ie.side=Zt,Ie.needsUpdate=!0,Qc(dt,K,k,Nt,Ie,Qt),Ie.side=et,Ie.needsUpdate=!0,Be=!0}}Be===!0&&(g.updateMultisampleRenderTarget(Ce),g.updateRenderTargetMipmap(Ce))}N.setRenderTarget(Re,Ue,Oe),N.setClearColor(we,Pe),$e!==void 0&&(k.viewport=$e),N.toneMapping=qe}function Ps(S,G,K){const k=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ce=S.length;W<Ce;W++){const Ne=S[W],{object:Re,geometry:Ue,group:Oe}=Ne;let qe=Ne.material;qe.allowOverride===!0&&k!==null&&(qe=k),Re.layers.test(K.layers)&&Qc(Re,G,K,Ue,qe,Oe)}}function Qc(S,G,K,k,W,Ce){S.onBeforeRender(N,G,K,k,W,Ce),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(N,G,K,k,S,Ce),W.transparent===!0&&W.side===ii&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,N.renderBufferDirect(K,G,k,W,S,Ce),W.side=Li,W.needsUpdate=!0,N.renderBufferDirect(K,G,k,W,S,Ce),W.side=ii):N.renderBufferDirect(K,G,k,W,S,Ce),S.onAfterRender(N,G,K,k,W,Ce)}function Ds(S,G,K){G.isScene!==!0&&(G=Q);const k=E.get(S),W=A.state.lights,Ce=A.state.shadowsArray,Ne=W.state.version,Re=me.getParameters(S,W.state,Ce,G,K,A.state.lightProbeGridArray),Ue=me.getProgramCacheKey(Re);let Oe=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,k.fog=G.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=O.get(S.envMap||k.environment,qe),k.envMapRotation=k.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",St),Oe=new Map,k.programs=Oe);let $e=Oe.get(Ue);if($e!==void 0){if(k.currentProgram===$e&&k.lightsStateVersion===Ne)return tu(S,Re),$e}else Re.uniforms=me.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,K,Re),S.onBeforeCompile(Re,N),$e=me.acquireProgram(Re,Ue),Oe.set(Ue,$e),k.uniforms=Re.uniforms;const Be=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=Te.uniform),tu(S,Re),k.needsLights=Pp(S),k.lightsStateVersion=Ne,k.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=$e,k.uniformsList=null,$e}function eu(S){if(S.uniformsList===null){const G=S.currentProgram.getUniforms();S.uniformsList=_o.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function tu(S,G){const K=E.get(S);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Rp(S,G){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let K=0,k=S.length;K<k;K++){const W=S[K];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Cp(S,G,K,k,W){G.isScene!==!0&&(G=Q),g.resetTextureUnits();const Ce=G.fog,Ne=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?G.environment:null,Re=V===null?N.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Ue=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Oe=O.get(k.envMap||Ne,Ue),qe=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!K.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Be=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,Mt=!!K.morphAttributes.color;let vt=zn;k.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(vt=N.toneMapping);const dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Nt=dt!==void 0?dt.length:0,Ie=E.get(k),Qt=A.state.lights;if(T===!0&&(w===!0||S!==z)){const mt=S===z&&k.id===H;Te.setState(k,S,mt)}let et=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Qt.state.version||Ie.outputColorSpace!==Re||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==Oe||k.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Te.numPlanes||Ie.numIntersection!==Te.numIntersection)||Ie.vertexAlphas!==qe||Ie.vertexTangents!==$e||Ie.morphTargets!==Be||Ie.morphNormals!==ut||Ie.morphColors!==Mt||Ie.toneMapping!==vt||Ie.morphTargetsCount!==Nt||!!Ie.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Ie.__version=k.version);let rn=Ie.currentProgram;et===!0&&(rn=Ds(k,G,W),L&&k.isNodeMaterial&&L.onUpdateProgram(k,rn,Ie));let Rn=!1,mi=!1,sr=!1;const ht=rn.getUniforms(),Et=Ie.uniforms;if(te.useProgram(rn.program)&&(Rn=!0,mi=!0,sr=!0),k.id!==H&&(H=k.id,mi=!0),Ie.needsLights){const mt=Rp(A.state.lightProbeGridArray,W);Ie.lightProbeGrid!==mt&&(Ie.lightProbeGrid=mt,mi=!0)}if(Rn||z!==S){te.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(C,"projectionMatrix",S.projectionMatrix),ht.setValue(C,"viewMatrix",S.matrixWorldInverse);const _i=ht.map.cameraPosition;_i!==void 0&&_i.setValue(C,$.setFromMatrixPosition(S.matrixWorld)),he.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,mi=!0,sr=!0)}if(Ie.needsLights&&(Qt.state.directionalShadowMap.length>0&&ht.setValue(C,"directionalShadowMap",Qt.state.directionalShadowMap,g),Qt.state.spotShadowMap.length>0&&ht.setValue(C,"spotShadowMap",Qt.state.spotShadowMap,g),Qt.state.pointShadowMap.length>0&&ht.setValue(C,"pointShadowMap",Qt.state.pointShadowMap,g)),W.isSkinnedMesh){ht.setOptional(C,W,"bindMatrix"),ht.setOptional(C,W,"bindMatrixInverse");const mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(C,"boneTexture",mt.boneTexture,g))}W.isBatchedMesh&&(ht.setOptional(C,W,"batchingTexture"),ht.setValue(C,"batchingTexture",W._matricesTexture,g),ht.setOptional(C,W,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",W._indirectTexture,g),ht.setOptional(C,W,"batchingColorTexture"),W._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",W._colorsTexture,g));const gi=K.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&He.update(W,K,rn),(mi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,ht.setValue(C,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&G.environment!==null&&(Et.envMapIntensity.value=G.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Ay()),mi){if(ht.setValue(C,"toneMappingExposure",N.toneMappingExposure),Ie.needsLights&&wp(Et,sr),Ce&&k.fog===!0&&ee.refreshFogUniforms(Et,Ce),ee.refreshMaterialUniforms(Et,k,Ve,Ze,A.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.lightProbeGrid){const mt=Ie.lightProbeGrid;Et.probesSH.value=mt.texture,Et.probesMin.value.copy(mt.boundingBox.min),Et.probesMax.value.copy(mt.boundingBox.max),Et.probesResolution.value.copy(mt.resolution)}_o.upload(C,eu(Ie),Et,g)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_o.upload(C,eu(Ie),Et,g),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(C,"center",W.center),ht.setValue(C,"modelViewMatrix",W.modelViewMatrix),ht.setValue(C,"normalMatrix",W.normalMatrix),ht.setValue(C,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){const mt=k.uniformsGroups;for(let _i=0,or=mt.length;_i<or;_i++){const nu=mt[_i];se.update(nu,rn),se.bind(nu,rn)}}return rn}function wp(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Pp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(S,G,K){const k=E.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),E.get(S.texture).__webglTexture=G,E.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:K,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,G){const K=E.get(S);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const Dp=C.createFramebuffer();this.setRenderTarget=function(S,G=0,K=0){V=S,X=G,Z=K;let k=null,W=!1,Ce=!1;if(S){const Re=E.get(S);if(Re.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(C.FRAMEBUFFER,Re.__webglFramebuffer),ne.copy(S.viewport),ue.copy(S.scissor),Ee=S.scissorTest,te.viewport(ne),te.scissor(ue),te.setScissorTest(Ee),H=-1;return}else if(Re.__webglFramebuffer===void 0)g.setupRenderTarget(S);else if(Re.__hasExternalTextures)g.rebindTextures(S,E.get(S.texture).__webglTexture,E.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(Re.__boundDepthTexture!==qe){if(qe!==null&&E.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ce=!0);const Oe=E.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[G])?k=Oe[G][K]:k=Oe[G],W=!0):S.samples>0&&g.useMultisampledRTT(S)===!1?k=E.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[K]:k=Oe,ne.copy(S.viewport),ue.copy(S.scissor),Ee=S.scissorTest}else ne.copy(Y).multiplyScalar(Ve).floor(),ue.copy(re).multiplyScalar(Ve).floor(),Ee=fe;if(K!==0&&(k=Dp),te.bindFramebuffer(C.FRAMEBUFFER,k)&&te.drawBuffers(S,k),te.viewport(ne),te.scissor(ue),te.setScissorTest(Ee),W){const Re=E.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,K)}else if(Ce){const Re=G;for(let Ue=0;Ue<S.textures.length;Ue++){const Oe=E.get(S.textures[Ue]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,K,Re)}}else if(S!==null&&K!==0){const Re=E.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,K)}H=-1},this.readRenderTargetPixels=function(S,G,K,k,W,Ce,Ne,Re=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){te.bindFramebuffer(C.FRAMEBUFFER,Ue);try{const Oe=S.textures[Re],qe=Oe.format,$e=Oe.type;if(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),!he.textureFormatReadable(qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable($e)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-k&&K>=0&&K<=S.height-W&&C.readPixels(G,K,k,W,U.convert(qe),U.convert($e),Ce)}finally{const Oe=V!==null?E.get(V).__webglFramebuffer:null;te.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,G,K,k,W,Ce,Ne,Re=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue)if(G>=0&&G<=S.width-k&&K>=0&&K<=S.height-W){te.bindFramebuffer(C.FRAMEBUFFER,Ue);const Oe=S.textures[Re],qe=Oe.format,$e=Oe.type;if(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),!he.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Be),C.bufferData(C.PIXEL_PACK_BUFFER,Ce.byteLength,C.STREAM_READ),C.readPixels(G,K,k,W,U.convert(qe),U.convert($e),0);const ut=V!==null?E.get(V).__webglFramebuffer:null;te.bindFramebuffer(C.FRAMEBUFFER,ut);const Mt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await j0(C,Mt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Be),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ce),C.deleteBuffer(Be),C.deleteSync(Mt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,G=null,K=0){const k=Math.pow(2,-K),W=Math.floor(S.image.width*k),Ce=Math.floor(S.image.height*k),Ne=G!==null?G.x:0,Re=G!==null?G.y:0;g.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,K,0,0,Ne,Re,W,Ce),te.unbindTexture()};const Lp=C.createFramebuffer(),Ip=C.createFramebuffer();this.copyTextureToTexture=function(S,G,K=null,k=null,W=0,Ce=0){let Ne,Re,Ue,Oe,qe,$e,Be,ut,Mt;const vt=S.isCompressedTexture?S.mipmaps[Ce]:S.image;if(K!==null)Ne=K.max.x-K.min.x,Re=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,qe=K.min.y,$e=K.isBox3?K.min.z:0;else{const Et=Math.pow(2,-W);Ne=Math.floor(vt.width*Et),Re=Math.floor(vt.height*Et),S.isDataArrayTexture?Ue=vt.depth:S.isData3DTexture?Ue=Math.floor(vt.depth*Et):Ue=1,Oe=0,qe=0,$e=0}k!==null?(Be=k.x,ut=k.y,Mt=k.z):(Be=0,ut=0,Mt=0);const dt=U.convert(G.format),Nt=U.convert(G.type);let Ie;G.isData3DTexture?(g.setTexture3D(G,0),Ie=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(g.setTexture2DArray(G,0),Ie=C.TEXTURE_2D_ARRAY):(g.setTexture2D(G,0),Ie=C.TEXTURE_2D),te.activeTexture(C.TEXTURE0),te.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),te.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),te.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const Qt=te.getParameter(C.UNPACK_ROW_LENGTH),et=te.getParameter(C.UNPACK_IMAGE_HEIGHT),rn=te.getParameter(C.UNPACK_SKIP_PIXELS),Rn=te.getParameter(C.UNPACK_SKIP_ROWS),mi=te.getParameter(C.UNPACK_SKIP_IMAGES);te.pixelStorei(C.UNPACK_ROW_LENGTH,vt.width),te.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt.height),te.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),te.pixelStorei(C.UNPACK_SKIP_ROWS,qe),te.pixelStorei(C.UNPACK_SKIP_IMAGES,$e);const sr=S.isDataArrayTexture||S.isData3DTexture,ht=G.isDataArrayTexture||G.isData3DTexture;if(S.isDepthTexture){const Et=E.get(S),gi=E.get(G),mt=E.get(Et.__renderTarget),_i=E.get(gi.__renderTarget);te.bindFramebuffer(C.READ_FRAMEBUFFER,mt.__webglFramebuffer),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let or=0;or<Ue;or++)sr&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,E.get(S).__webglTexture,W,$e+or),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,E.get(G).__webglTexture,Ce,Mt+or)),C.blitFramebuffer(Oe,qe,Ne,Re,Be,ut,Ne,Re,C.DEPTH_BUFFER_BIT,C.NEAREST);te.bindFramebuffer(C.READ_FRAMEBUFFER,null),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||E.has(S)){const Et=E.get(S),gi=E.get(G);te.bindFramebuffer(C.READ_FRAMEBUFFER,Lp),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ip);for(let mt=0;mt<Ue;mt++)sr?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,W,$e+mt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,W),ht?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gi.__webglTexture,Ce,Mt+mt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gi.__webglTexture,Ce),W!==0?C.blitFramebuffer(Oe,qe,Ne,Re,Be,ut,Ne,Re,C.COLOR_BUFFER_BIT,C.NEAREST):ht?C.copyTexSubImage3D(Ie,Ce,Be,ut,Mt+mt,Oe,qe,Ne,Re):C.copyTexSubImage2D(Ie,Ce,Be,ut,Oe,qe,Ne,Re);te.bindFramebuffer(C.READ_FRAMEBUFFER,null),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Ie,Ce,Be,ut,Mt,Ne,Re,Ue,dt,Nt,vt.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(Ie,Ce,Be,ut,Mt,Ne,Re,Ue,dt,vt.data):C.texSubImage3D(Ie,Ce,Be,ut,Mt,Ne,Re,Ue,dt,Nt,vt):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ce,Be,ut,Ne,Re,dt,Nt,vt.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ce,Be,ut,vt.width,vt.height,dt,vt.data):C.texSubImage2D(C.TEXTURE_2D,Ce,Be,ut,Ne,Re,dt,Nt,vt);te.pixelStorei(C.UNPACK_ROW_LENGTH,Qt),te.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et),te.pixelStorei(C.UNPACK_SKIP_PIXELS,rn),te.pixelStorei(C.UNPACK_SKIP_ROWS,Rn),te.pixelStorei(C.UNPACK_SKIP_IMAGES,mi),Ce===0&&G.generateMipmaps&&C.generateMipmap(Ie),te.unbindTexture()},this.initRenderTarget=function(S){E.get(S).__webglFramebuffer===void 0&&g.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?g.setTextureCube(S,0):S.isData3DTexture?g.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?g.setTexture2DArray(S,0):g.setTexture2D(S,0),te.unbindTexture()},this.resetState=function(){X=0,Z=0,V=null,te.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const Cy={class:"wedding-3d-bg fixed inset-0 -z-10 pointer-events-none",role:"presentation","aria-hidden":"true"},wy=Ho({__name:"Wedding3DScene",setup(t){const e=nl(null),n=nl(!0);let i=null,r=null,s=null,o=null,a=0,l=null,c=!0;function u(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function d(){try{const x=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(x.getContext("webgl")||x.getContext("experimental-webgl")))}catch{return!1}}function f(x){return getComputedStyle(document.documentElement).getPropertyValue(x).trim()}function h(){if(e.value){if(u()){n.value=!1;return}if(!d()){n.value=!1;return}i=new fv,r=new ln(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=50,s=new Ry({antialias:!0,alpha:!0}),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(s.domElement),_(),M()}}function _(){const b=window.innerWidth<768?600:1500,y=new Tn,D=new Float32Array(b*3),A=new Float32Array(b*3),I=new rt(f("--emas")),v=new rt(f("--emas-light"));for(let N=0;N<b;N++){D[N*3]=(Math.random()-.5)*150,D[N*3+1]=(Math.random()-.5)*150,D[N*3+2]=(Math.random()-.5)*100;const P=Math.random()>.5?I:v;A[N*3]=P.r,A[N*3+1]=P.g,A[N*3+2]=P.b}y.setAttribute("position",new fn(D,3)),y.setAttribute("color",new fn(A,3));const R=new fp({size:1.5,vertexColors:!0,transparent:!0,opacity:.6,blending:gl,sizeAttenuation:!0});l=new Mv(y,R),i==null||i.add(l)}function M(){if(!c){o=requestAnimationFrame(M);return}if(o=requestAnimationFrame(M),a+=.001,l){l.rotation.y=a*.1,l.rotation.x=a*.05;const x=l.geometry.attributes.position.array;for(let b=0;b<x.length;b+=3)x[b+1]+=Math.sin(a+x[b]*.1)*.02;l.geometry.attributes.position.needsUpdate=!0}s==null||s.render(i,r)}function m(){!r||!s||(r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight))}function p(){c=!document.hidden}return Tc(()=>{setTimeout(()=>{h()},100),window.addEventListener("resize",m),document.addEventListener("visibilitychange",p)}),Ac(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("resize",m),document.removeEventListener("visibilitychange",p),s&&(s.dispose(),l&&(l.geometry.dispose(),l.material.dispose()))}),(x,b)=>(Ir(),al("div",Cy,[n.value?(Ir(),al("div",{key:0,ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512)):mh("",!0)]))}}),Py=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Dy=Py(wy,[["__scopeId","data-v-339c33db"]]),Ly=Ho({__name:"App",setup(t){return(e,n)=>(Ir(),al(qt,null,[Dt(Dy),Dt(Ji(Vh))],64))}}),Iy="modulepreload",Ny=function(t){return"/"+t},nd={},id=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(n.map(c=>{if(c=Ny(c),c in nd)return;nd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Iy,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,_)=>{f.addEventListener("load",h),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Uy="asratul-fitri",Fy=[{path:"/",redirect:`/${Uy}`},{path:"/:slug",name:"invitation",component:()=>id(()=>import("./InvitationView-CX_EAmDx.js"),__vite__mapDeps([0,1])),meta:{title:"The Wedding of Asratul Fitri & Arif",description:"Undangan Pernikahan Asratul Fitri & Arif Hidayatulah"},props:!0},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>id(()=>import("./NotFoundView-Do1ybBTs.js"),[]),meta:{title:"404 - Not Found"}}],Tp=p0({history:Y_("/"),routes:Fy,scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}}});Tp.beforeEach((t,e,n)=>{t.meta.title&&(document.title=t.meta.title);const i=t.meta.description;if(i){let r=document.querySelector('meta[name="description"]');r||(r=document.createElement("meta"),r.setAttribute("name","description"),document.head.appendChild(r)),r.setAttribute("content",i)}n()});a_(Ly).use(Tp).mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});export{By as A,bm as B,Oy as C,Yy as D,qt as F,Hy as T,Dy as W,Py as _,Wy as a,ph as b,mn as c,ll as d,mh as e,al as f,zy as g,gg as h,Dt as i,Ho as j,hc as k,Ac as l,Ir as m,pc as n,Tc as o,Vy as p,Gy as q,nl as r,jy as s,qp as t,Ji as u,Ky as v,qy as w,Xy as x,ky as y,lo as z};
