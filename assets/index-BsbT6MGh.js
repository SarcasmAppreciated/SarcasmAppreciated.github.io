(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function j0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fg={exports:{}},gc={},kg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),J0=Symbol.for("react.forward_ref"),ex=Symbol.for("react.suspense"),tx=Symbol.for("react.memo"),nx=Symbol.for("react.lazy"),Th=Symbol.iterator;function ix(n){return n===null||typeof n!="object"?null:(n=Th&&n[Th]||n["@@iterator"],typeof n=="function"?n:null)}var Bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,Hg={};function ho(n,e,t){this.props=n,this.context=e,this.refs=Hg,this.updater=t||Bg}ho.prototype.isReactComponent={};ho.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ho.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Gg(){}Gg.prototype=ho.prototype;function lf(n,e,t){this.props=n,this.context=e,this.refs=Hg,this.updater=t||Bg}var cf=lf.prototype=new Gg;cf.constructor=lf;zg(cf,ho.prototype);cf.isPureReactComponent=!0;var wh=Array.isArray,Vg=Object.prototype.hasOwnProperty,uf={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function Xg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vg.call(e,i)&&!Wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:n,key:s,ref:o,props:r,_owner:uf.current}}function rx(n,e){return{$$typeof:Ea,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function df(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ea}function sx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ah=/\/+/g;function zc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sx(""+n.key):e.toString(36)}function Tl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ea:case Y0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+zc(o,0):i,wh(r)?(t="",n!=null&&(t=n.replace(Ah,"$&/")+"/"),Tl(r,e,t,"",function(c){return c})):r!=null&&(df(r)&&(r=rx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ah,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+zc(s,a);o+=Tl(s,e,t,l,r)}else if(l=ix(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+zc(s,a++),o+=Tl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(n,e,t){if(n==null)return n;var i=[],r=0;return Tl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function ox(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var an={current:null},wl={transition:null},ax={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:wl,ReactCurrentOwner:uf};Ke.Children={map:Ia,forEach:function(n,e,t){Ia(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ia(n,function(){e++}),e},toArray:function(n){return Ia(n,function(e){return e})||[]},only:function(n){if(!df(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=ho;Ke.Fragment=q0;Ke.Profiler=$0;Ke.PureComponent=lf;Ke.StrictMode=K0;Ke.Suspense=ex;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=zg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Vg.call(e,l)&&!Wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ea,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:Q0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Z0,_context:n},n.Consumer=n};Ke.createElement=Xg;Ke.createFactory=function(n){var e=Xg.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:J0,render:n}};Ke.isValidElement=df;Ke.lazy=function(n){return{$$typeof:nx,_payload:{_status:-1,_result:n},_init:ox}};Ke.memo=function(n,e){return{$$typeof:tx,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=wl.transition;wl.transition={};try{n()}finally{wl.transition=e}};Ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ke.useCallback=function(n,e){return an.current.useCallback(n,e)};Ke.useContext=function(n){return an.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return an.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return an.current.useEffect(n,e)};Ke.useId=function(){return an.current.useId()};Ke.useImperativeHandle=function(n,e,t){return an.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return an.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return an.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return an.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return an.current.useReducer(n,e,t)};Ke.useRef=function(n){return an.current.useRef(n)};Ke.useState=function(n){return an.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return an.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return an.current.useTransition()};Ke.version="18.2.0";kg.exports=Ke;var Ks=kg.exports;const lx=j0(Ks);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=Ks,ux=Symbol.for("react.element"),dx=Symbol.for("react.fragment"),fx=Object.prototype.hasOwnProperty,hx=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,px={key:!0,ref:!0,__self:!0,__source:!0};function jg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fx.call(e,i)&&!px.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ux,type:n,key:s,ref:o,props:r,_owner:hx.current}}gc.Fragment=dx;gc.jsx=jg;gc.jsxs=jg;Fg.exports=gc;var ve=Fg.exports,Ju={},Yg={exports:{}},Mn={},qg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,F){var G=I.length;I.push(F);e:for(;0<G;){var Z=G-1>>>1,ae=I[Z];if(0<r(ae,F))I[Z]=F,I[G]=ae,G=Z;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var F=I[0],G=I.pop();if(G!==F){I[0]=G;e:for(var Z=0,ae=I.length,be=ae>>>1;Z<be;){var z=2*(Z+1)-1,ee=I[z],ue=z+1,we=I[ue];if(0>r(ee,G))ue<ae&&0>r(we,ee)?(I[Z]=we,I[ue]=G,Z=ue):(I[Z]=ee,I[z]=G,Z=z);else if(ue<ae&&0>r(we,G))I[Z]=we,I[ue]=G,Z=ue;else break e}}return F}function r(I,F){var G=I.sortIndex-F.sortIndex;return G!==0?G:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var F=t(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=I)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(c)}}function y(I){if(x=!1,_(I),!g)if(t(l)!==null)g=!0,W(A);else{var F=t(c);F!==null&&$(y,F.startTime-I)}}function A(I,F){g=!1,x&&(x=!1,f(P),P=-1),p=!0;var G=h;try{for(_(F),d=t(l);d!==null&&(!(d.expirationTime>F)||I&&!b());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var ae=Z(d.expirationTime<=F);F=n.unstable_now(),typeof ae=="function"?d.callback=ae:d===t(l)&&i(l),_(F)}else i(l);d=t(l)}if(d!==null)var be=!0;else{var z=t(c);z!==null&&$(y,z.startTime-F),be=!1}return be}finally{d=null,h=G,p=!1}}var w=!1,E=null,P=-1,j=5,S=-1;function b(){return!(n.unstable_now()-S<j)}function te(){if(E!==null){var I=n.unstable_now();S=I;var F=!0;try{F=E(!0,I)}finally{F?Q():(w=!1,E=null)}}else w=!1}var Q;if(typeof v=="function")Q=function(){v(te)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Y=D.port2;D.port1.onmessage=te,Q=function(){Y.postMessage(null)}}else Q=function(){m(te,0)};function W(I){E=I,w||(w=!0,Q())}function $(I,F){P=m(function(){I(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,W(A))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var G=h;h=F;try{return I()}finally{h=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=h;h=I;try{return F()}finally{h=G}},n.unstable_scheduleCallback=function(I,F,G){var Z=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,I){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=G+ae,I={id:u++,callback:F,priorityLevel:I,startTime:G,expirationTime:ae,sortIndex:-1},G>Z?(I.sortIndex=G,e(c,I),t(l)===null&&I===t(c)&&(x?(f(P),P=-1):x=!0,$(y,G-Z))):(I.sortIndex=ae,e(l,I),g||p||(g=!0,W(A))),I},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(I){var F=h;return function(){var G=h;h=F;try{return I.apply(this,arguments)}finally{h=G}}}})(Kg);qg.exports=Kg;var mx=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g=Ks,Sn=mx;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,na={};function Jr(n,e){$s(n,e),$s(n+"Capture",e)}function $s(n,e){for(na[n]=e,n=0;n<e.length;n++)Zg.add(e[n])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},bh={};function _x(n){return ed.call(bh,n)?!0:ed.call(Rh,n)?!1:gx.test(n)?bh[n]=!0:(Rh[n]=!0,!1)}function vx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xx(n,e,t,i){if(e===null||typeof e>"u"||vx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zt[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zt[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zt[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zt[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zt[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zt[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zt[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zt[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zt[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var ff=/[\-:]([a-z])/g;function hf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ff,hf);zt[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ff,hf);zt[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ff,hf);zt[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zt[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});zt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zt[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function pf(n,e,t,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xx(e,t,r,i)&&(t=null),i||r===null?_x(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Di=$g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),id=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),e_=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Mo(n){return n===null||typeof n!="object"?null:(n=Ch&&n[Ch]||n["@@iterator"],typeof n=="function"?n:null)}var vt=Object.assign,Hc;function ko(n){if(Hc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+n}var Gc=!1;function Vc(n,e){if(!n||Gc)return"";Gc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ko(n):""}function yx(n){switch(n.tag){case 5:return ko(n.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return n=Vc(n.type,!1),n;case 11:return n=Vc(n.type.render,!1),n;case 1:return n=Vc(n.type,!0),n;default:return""}}function rd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ws:return"Fragment";case Ts:return"Portal";case td:return"Profiler";case mf:return"StrictMode";case nd:return"Suspense";case id:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Jg:return(n.displayName||"Context")+".Consumer";case Qg:return(n._context.displayName||"Context")+".Provider";case gf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _f:return e=n.displayName||null,e!==null?e:rd(n.type)||"Memo";case Xi:e=n._payload,n=n._init;try{return rd(n(e))}catch{}}return null}function Sx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rd(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function t_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mx(n){var e=t_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ua(n){n._valueTracker||(n._valueTracker=Mx(n))}function n_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=t_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Bl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function sd(n,e){var t=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Lh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=mr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i_(n,e){e=e.checked,e!=null&&pf(n,"checked",e,!1)}function od(n,e){i_(n,e);var t=mr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ad(n,e.type,t):e.hasOwnProperty("defaultValue")&&ad(n,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ph(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ad(n,e,t){(e!=="number"||Bl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Bo=Array.isArray;function Bs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+mr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ld(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Bo(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:mr(t)}}function r_(n,e){var t=mr(e.value),i=mr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ih(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function s_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?s_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Oa,o_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ia(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ex=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(n){Ex.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vo[e]=Vo[n]})});function a_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Vo.hasOwnProperty(n)&&Vo[n]?(""+e).trim():e+"px"}function l_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=a_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Tx=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(n,e){if(e){if(Tx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function dd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function vf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hd=null,zs=null,Hs=null;function Dh(n){if(n=Aa(n)){if(typeof hd!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Sc(e),hd(n.stateNode,n.type,e))}}function c_(n){zs?Hs?Hs.push(n):Hs=[n]:zs=n}function u_(){if(zs){var n=zs,e=Hs;if(Hs=zs=null,Dh(n),e)for(n=0;n<e.length;n++)Dh(e[n])}}function d_(n,e){return n(e)}function f_(){}var Wc=!1;function h_(n,e,t){if(Wc)return n(e,t);Wc=!0;try{return d_(n,e,t)}finally{Wc=!1,(zs!==null||Hs!==null)&&(f_(),u_())}}function ra(n,e){var t=n.stateNode;if(t===null)return null;var i=Sc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var pd=!1;if(Ci)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){pd=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{pd=!1}function wx(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Wo=!1,zl=null,Hl=!1,md=null,Ax={onError:function(n){Wo=!0,zl=n}};function Rx(n,e,t,i,r,s,o,a,l){Wo=!1,zl=null,wx.apply(Ax,arguments)}function bx(n,e,t,i,r,s,o,a,l){if(Rx.apply(this,arguments),Wo){if(Wo){var c=zl;Wo=!1,zl=null}else throw Error(ie(198));Hl||(Hl=!0,md=c)}}function es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function p_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Uh(n){if(es(n)!==n)throw Error(ie(188))}function Cx(n){var e=n.alternate;if(!e){if(e=es(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Uh(r),n;if(s===i)return Uh(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function m_(n){return n=Cx(n),n!==null?g_(n):null}function g_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=g_(n);if(e!==null)return e;n=n.sibling}return null}var __=Sn.unstable_scheduleCallback,Oh=Sn.unstable_cancelCallback,Lx=Sn.unstable_shouldYield,Px=Sn.unstable_requestPaint,Et=Sn.unstable_now,Nx=Sn.unstable_getCurrentPriorityLevel,xf=Sn.unstable_ImmediatePriority,v_=Sn.unstable_UserBlockingPriority,Gl=Sn.unstable_NormalPriority,Ix=Sn.unstable_LowPriority,x_=Sn.unstable_IdlePriority,_c=null,ii=null;function Dx(n){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(_c,n,void 0,(n.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Fx,Ux=Math.log,Ox=Math.LN2;function Fx(n){return n>>>=0,n===0?32:31-(Ux(n)/Ox|0)|0}var Fa=64,ka=4194304;function zo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=t&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-jn(e),r=1<<t,i|=n[t],e&=~r;return i}function kx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=kx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function gd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function y_(){var n=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),n}function Xc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ta(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-jn(e),n[e]=t}function zx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function yf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function S_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var M_,Sf,E_,T_,w_,_d=!1,Ba=[],ir=null,rr=null,sr=null,sa=new Map,oa=new Map,$i=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(n,e){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function To(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&Sf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Gx(n,e,t,i,r){switch(e){case"focusin":return ir=To(ir,n,e,t,i,r),!0;case"dragenter":return rr=To(rr,n,e,t,i,r),!0;case"mouseover":return sr=To(sr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,To(sa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oa.set(s,To(oa.get(s)||null,n,e,t,i,r)),!0}return!1}function A_(n){var e=Fr(n.target);if(e!==null){var t=es(e);if(t!==null){if(e=t.tag,e===13){if(e=p_(t),e!==null){n.blockedOn=e,w_(n.priority,function(){E_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Al(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fd=i,t.target.dispatchEvent(i),fd=null}else return e=Aa(t),e!==null&&Sf(e),n.blockedOn=t,!1;e.shift()}return!0}function kh(n,e,t){Al(n)&&t.delete(e)}function Vx(){_d=!1,ir!==null&&Al(ir)&&(ir=null),rr!==null&&Al(rr)&&(rr=null),sr!==null&&Al(sr)&&(sr=null),sa.forEach(kh),oa.forEach(kh)}function wo(n,e){n.blockedOn===e&&(n.blockedOn=null,_d||(_d=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Vx)))}function aa(n){function e(r){return wo(r,n)}if(0<Ba.length){wo(Ba[0],n);for(var t=1;t<Ba.length;t++){var i=Ba[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ir!==null&&wo(ir,n),rr!==null&&wo(rr,n),sr!==null&&wo(sr,n),sa.forEach(e),oa.forEach(e),t=0;t<$i.length;t++)i=$i[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<$i.length&&(t=$i[0],t.blockedOn===null);)A_(t),t.blockedOn===null&&$i.shift()}var Gs=Di.ReactCurrentBatchConfig,Wl=!0;function Wx(n,e,t,i){var r=it,s=Gs.transition;Gs.transition=null;try{it=1,Mf(n,e,t,i)}finally{it=r,Gs.transition=s}}function Xx(n,e,t,i){var r=it,s=Gs.transition;Gs.transition=null;try{it=4,Mf(n,e,t,i)}finally{it=r,Gs.transition=s}}function Mf(n,e,t,i){if(Wl){var r=vd(n,e,t,i);if(r===null)tu(n,e,i,Xl,t),Fh(n,i);else if(Gx(r,n,e,t,i))i.stopPropagation();else if(Fh(n,i),e&4&&-1<Hx.indexOf(n)){for(;r!==null;){var s=Aa(r);if(s!==null&&M_(s),s=vd(n,e,t,i),s===null&&tu(n,e,i,Xl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(n,e,i,null,t)}}var Xl=null;function vd(n,e,t,i){if(Xl=null,n=vf(i),n=Fr(n),n!==null)if(e=es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=p_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xl=n,null}function R_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nx()){case xf:return 1;case v_:return 4;case Gl:case Ix:return 16;case x_:return 536870912;default:return 16}default:return 16}}var Ji=null,Ef=null,Rl=null;function b_(){if(Rl)return Rl;var n,e=Ef,t=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Rl=r.slice(n,1<i?1-i:void 0)}function bl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function za(){return!0}function Bh(){return!1}function En(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:Bh,this.isPropagationStopped=Bh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=En(po),wa=vt({},po,{view:0,detail:0}),jx=En(wa),jc,Yc,Ao,vc=vt({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(jc=n.screenX-Ao.screenX,Yc=n.screenY-Ao.screenY):Yc=jc=0,Ao=n),jc)},movementY:function(n){return"movementY"in n?n.movementY:Yc}}),zh=En(vc),Yx=vt({},vc,{dataTransfer:0}),qx=En(Yx),Kx=vt({},wa,{relatedTarget:0}),qc=En(Kx),$x=vt({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=En($x),Qx=vt({},po,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Jx=En(Qx),ey=vt({},po,{data:0}),Hh=En(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=iy[n])?!!e[n]:!1}function wf(){return ry}var sy=vt({},wa,{key:function(n){if(n.key){var e=ty[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ny[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(n){return n.type==="keypress"?bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),oy=En(sy),ay=vt({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=En(ay),ly=vt({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),cy=En(ly),uy=vt({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=En(uy),fy=vt({},vc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=En(fy),py=[9,13,27,32],Af=Ci&&"CompositionEvent"in window,Xo=null;Ci&&"documentMode"in document&&(Xo=document.documentMode);var my=Ci&&"TextEvent"in window&&!Xo,C_=Ci&&(!Af||Xo&&8<Xo&&11>=Xo),Vh=" ",Wh=!1;function L_(n,e){switch(n){case"keyup":return py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function gy(n,e){switch(n){case"compositionend":return P_(e);case"keypress":return e.which!==32?null:(Wh=!0,Vh);case"textInput":return n=e.data,n===Vh&&Wh?null:n;default:return null}}function _y(n,e){if(As)return n==="compositionend"||!Af&&L_(n,e)?(n=b_(),Rl=Ef=Ji=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vy[n.type]:e==="textarea"}function N_(n,e,t,i){c_(i),e=jl(e,"onChange"),0<e.length&&(t=new Tf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jo=null,la=null;function xy(n){V_(n,0)}function xc(n){var e=Cs(n);if(n_(e))return n}function yy(n,e){if(n==="change")return e}var I_=!1;if(Ci){var Kc;if(Ci){var $c="oninput"in document;if(!$c){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),$c=typeof jh.oninput=="function"}Kc=$c}else Kc=!1;I_=Kc&&(!document.documentMode||9<document.documentMode)}function Yh(){jo&&(jo.detachEvent("onpropertychange",D_),la=jo=null)}function D_(n){if(n.propertyName==="value"&&xc(la)){var e=[];N_(e,la,n,vf(n)),h_(xy,e)}}function Sy(n,e,t){n==="focusin"?(Yh(),jo=e,la=t,jo.attachEvent("onpropertychange",D_)):n==="focusout"&&Yh()}function My(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xc(la)}function Ey(n,e){if(n==="click")return xc(e)}function Ty(n,e){if(n==="input"||n==="change")return xc(e)}function wy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Kn=typeof Object.is=="function"?Object.is:wy;function ca(n,e){if(Kn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ed.call(e,r)||!Kn(n[r],e[r]))return!1}return!0}function qh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kh(n,e){var t=qh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=qh(t)}}function U_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?U_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var n=window,e=Bl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Bl(n.document)}return e}function Rf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ay(n){var e=O_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&U_(t.ownerDocument.documentElement,t)){if(i!==null&&Rf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Kh(t,s);var o=Kh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ry=Ci&&"documentMode"in document&&11>=document.documentMode,Rs=null,xd=null,Yo=null,yd=!1;function $h(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yd||Rs==null||Rs!==Bl(i)||(i=Rs,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&ca(Yo,i)||(Yo=i,i=jl(xd,"onSelect"),0<i.length&&(e=new Tf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Rs)))}function Ha(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var bs={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Zc={},F_={};Ci&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function yc(n){if(Zc[n])return Zc[n];if(!bs[n])return n;var e=bs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in F_)return Zc[n]=e[t];return n}var k_=yc("animationend"),B_=yc("animationiteration"),z_=yc("animationstart"),H_=yc("transitionend"),G_=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,e){G_.set(n,e),Jr(e,[n])}for(var Qc=0;Qc<Zh.length;Qc++){var Jc=Zh[Qc],by=Jc.toLowerCase(),Cy=Jc[0].toUpperCase()+Jc.slice(1);vr(by,"on"+Cy)}vr(k_,"onAnimationEnd");vr(B_,"onAnimationIteration");vr(z_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(H_,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Qh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,bx(i,e,void 0,n),n.currentTarget=null}function V_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,a,c),s=l}}}if(Hl)throw n=md,Hl=!1,md=null,n}function ct(n,e){var t=e[wd];t===void 0&&(t=e[wd]=new Set);var i=n+"__bubble";t.has(i)||(W_(e,n,2,!1),t.add(i))}function eu(n,e,t){var i=0;e&&(i|=4),W_(t,n,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[Ga]){n[Ga]=!0,Zg.forEach(function(t){t!=="selectionchange"&&(Ly.has(t)||eu(t,!1,n),eu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,eu("selectionchange",!1,e))}}function W_(n,e,t,i){switch(R_(e)){case 1:var r=Wx;break;case 4:r=Xx;break;default:r=Mf}t=r.bind(null,e,t,n),r=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function tu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}h_(function(){var c=s,u=vf(t),d=[];e:{var h=G_.get(n);if(h!==void 0){var p=Tf,g=n;switch(n){case"keypress":if(bl(t)===0)break e;case"keydown":case"keyup":p=oy;break;case"focusin":g="focus",p=qc;break;case"focusout":g="blur",p=qc;break;case"beforeblur":case"afterblur":p=qc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cy;break;case k_:case B_:case z_:p=Zx;break;case H_:p=dy;break;case"scroll":p=jx;break;case"wheel":p=hy;break;case"copy":case"cut":case"paste":p=Jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gh}var x=(e&4)!==0,m=!x&&n==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=ra(v,f),y!=null&&x.push(da(v,y,_)))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,t,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==fd&&(g=t.relatedTarget||t.fromElement)&&(Fr(g)||g[Li]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Fr(g):null,g!==null&&(m=es(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=zh,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(x=Gh,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:Cs(p),_=g==null?h:Cs(g),h=new x(y,v+"leave",p,t,u),h.target=m,h.relatedTarget=_,y=null,Fr(u)===c&&(x=new x(f,v+"enter",g,t,u),x.target=_,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,f=g,v=0,_=x;_;_=ns(_))v++;for(_=0,y=f;y;y=ns(y))_++;for(;0<v-_;)x=ns(x),v--;for(;0<_-v;)f=ns(f),_--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=ns(x),f=ns(f)}x=null}else x=null;p!==null&&Jh(d,h,p,x,!1),g!==null&&m!==null&&Jh(d,m,g,x,!0)}}e:{if(h=c?Cs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=yy;else if(Xh(h))if(I_)A=Ty;else{A=My;var w=Sy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Ey);if(A&&(A=A(n,c))){N_(d,A,t,u);break e}w&&w(n,h,c),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&ad(h,"number",h.value)}switch(w=c?Cs(c):window,n){case"focusin":(Xh(w)||w.contentEditable==="true")&&(Rs=w,xd=c,Yo=null);break;case"focusout":Yo=xd=Rs=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,$h(d,t,u);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":$h(d,t,u)}var E;if(Af)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else As?L_(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(C_&&t.locale!=="ko"&&(As||P!=="onCompositionStart"?P==="onCompositionEnd"&&As&&(E=b_()):(Ji=u,Ef="value"in Ji?Ji.value:Ji.textContent,As=!0)),w=jl(c,P),0<w.length&&(P=new Hh(P,n,null,t,u),d.push({event:P,listeners:w}),E?P.data=E:(E=P_(t),E!==null&&(P.data=E)))),(E=my?gy(n,t):_y(n,t))&&(c=jl(c,"onBeforeInput"),0<c.length&&(u=new Hh("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=E))}V_(d,e)})}function da(n,e,t){return{instance:n,listener:e,currentTarget:t}}function jl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(n,t),s!=null&&i.unshift(da(n,s,r)),s=ra(n,e),s!=null&&i.push(da(n,s,r))),n=n.return}return i}function ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ra(t,s),l!=null&&o.unshift(da(t,l,a))):r||(l=ra(t,s),l!=null&&o.push(da(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Py=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function ep(n){return(typeof n=="string"?n:""+n).replace(Py,`
`).replace(Ny,"")}function Va(n,e,t){if(e=ep(e),ep(n)!==e&&t)throw Error(ie(425))}function Yl(){}var Sd=null,Md=null;function Ed(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(n){return tp.resolve(null).then(n).catch(Uy)}:Td;function Uy(n){setTimeout(function(){throw n})}function nu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),aa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);aa(e)}function or(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function np(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var mo=Math.random().toString(36).slice(2),ei="__reactFiber$"+mo,fa="__reactProps$"+mo,Li="__reactContainer$"+mo,wd="__reactEvents$"+mo,Oy="__reactListeners$"+mo,Fy="__reactHandles$"+mo;function Fr(n){var e=n[ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Li]||t[ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=np(n);n!==null;){if(t=n[ei])return t;n=np(n)}return e}n=t,t=n.parentNode}return null}function Aa(n){return n=n[ei]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Sc(n){return n[fa]||null}var Ad=[],Ls=-1;function xr(n){return{current:n}}function dt(n){0>Ls||(n.current=Ad[Ls],Ad[Ls]=null,Ls--)}function ot(n,e){Ls++,Ad[Ls]=n.current,n.current=e}var gr={},$t=xr(gr),dn=xr(!1),jr=gr;function Zs(n,e){var t=n.type.contextTypes;if(!t)return gr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function fn(n){return n=n.childContextTypes,n!=null}function ql(){dt(dn),dt($t)}function ip(n,e,t){if($t.current!==gr)throw Error(ie(168));ot($t,e),ot(dn,t)}function X_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Sx(n)||"Unknown",r));return vt({},t,i)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,jr=$t.current,ot($t,n),ot(dn,dn.current),!0}function rp(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=X_(n,e,jr),i.__reactInternalMemoizedMergedChildContext=n,dt(dn),dt($t),ot($t,n)):dt(dn),ot(dn,t)}var Mi=null,Mc=!1,iu=!1;function j_(n){Mi===null?Mi=[n]:Mi.push(n)}function ky(n){Mc=!0,j_(n)}function yr(){if(!iu&&Mi!==null){iu=!0;var n=0,e=it;try{var t=Mi;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Mi=null,Mc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(n+1)),__(xf,yr),r}finally{it=e,iu=!1}}return null}var Ps=[],Ns=0,$l=null,Zl=0,Rn=[],bn=0,Yr=null,Ei=1,Ti="";function Pr(n,e){Ps[Ns++]=Zl,Ps[Ns++]=$l,$l=n,Zl=e}function Y_(n,e,t){Rn[bn++]=Ei,Rn[bn++]=Ti,Rn[bn++]=Yr,Yr=n;var i=Ei;n=Ti;var r=32-jn(i)-1;i&=~(1<<r),t+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-jn(e)+r|t<<r|i,Ti=s+n}else Ei=1<<s|t<<r|i,Ti=n}function bf(n){n.return!==null&&(Pr(n,1),Y_(n,1,0))}function Cf(n){for(;n===$l;)$l=Ps[--Ns],Ps[Ns]=null,Zl=Ps[--Ns],Ps[Ns]=null;for(;n===Yr;)Yr=Rn[--bn],Rn[bn]=null,Ti=Rn[--bn],Rn[bn]=null,Ei=Rn[--bn],Rn[bn]=null}var yn=null,xn=null,ht=!1,Gn=null;function q_(n,e){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function sp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yn=n,xn=or(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yn=n,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Yr!==null?{id:Ei,overflow:Ti}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yn=n,xn=null,!0):!1;default:return!1}}function Rd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bd(n){if(ht){var e=xn;if(e){var t=e;if(!sp(n,e)){if(Rd(n))throw Error(ie(418));e=or(t.nextSibling);var i=yn;e&&sp(n,e)?q_(i,t):(n.flags=n.flags&-4097|2,ht=!1,yn=n)}}else{if(Rd(n))throw Error(ie(418));n.flags=n.flags&-4097|2,ht=!1,yn=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function Wa(n){if(n!==yn)return!1;if(!ht)return op(n),ht=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ed(n.type,n.memoizedProps)),e&&(e=xn)){if(Rd(n))throw K_(),Error(ie(418));for(;e;)q_(n,e),e=or(e.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){xn=or(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}xn=null}}else xn=yn?or(n.stateNode.nextSibling):null;return!0}function K_(){for(var n=xn;n;)n=or(n.nextSibling)}function Qs(){xn=yn=null,ht=!1}function Lf(n){Gn===null?Gn=[n]:Gn.push(n)}var By=Di.ReactCurrentBatchConfig;function zn(n,e){if(n&&n.defaultProps){e=vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ql=xr(null),Jl=null,Is=null,Pf=null;function Nf(){Pf=Is=Jl=null}function If(n){var e=Ql.current;dt(Ql),n._currentValue=e}function Cd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Vs(n,e){Jl=n,Pf=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function Dn(n){var e=n._currentValue;if(Pf!==n)if(n={context:n,memoizedValue:e,next:null},Is===null){if(Jl===null)throw Error(ie(308));Is=n,Jl.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return e}var kr=null;function Df(n){kr===null?kr=[n]:kr.push(n)}function $_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Df(e)):(t.next=r.next,r.next=t),e.interleaved=t,Pi(n,i)}function Pi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ji=!1;function Uf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(n,t)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(n,t)}function Cl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,yf(n,t)}}function ap(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ec(n,e,t,i){var r=n.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,x=a;switch(h=e,p=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=vt({},d,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=o,n.lanes=o,n.memoizedState=d}}function lp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Q_=new $g.Component().refs;function Ld(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ec={isMounted:function(n){return(n=n._reactInternals)?es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=cr(n),s=bi(i,r);s.payload=e,t!=null&&(s.callback=t),e=ar(n,s,r),e!==null&&(Yn(e,n,r,i),Cl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=cr(n),s=bi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ar(n,s,r),e!==null&&(Yn(e,n,r,i),Cl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=cr(n),r=bi(t,i);r.tag=2,e!=null&&(r.callback=e),e=ar(n,r,i),e!==null&&(Yn(e,n,i,t),Cl(e,n,i))}};function cp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(t,i)||!ca(r,s):!0}function J_(n,e,t){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=fn(e)?jr:$t.current,i=e.contextTypes,s=(i=i!=null)?Zs(n,r):gr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function up(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ec.enqueueReplaceState(e,e.state,null)}function Pd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Q_,Uf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=fn(e)?jr:$t.current,r.context=Zs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),ec(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ro(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Q_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Xa(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function dp(n){var e=n._init;return e(n._payload)}function ev(n){function e(f,v){if(n){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=ur(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,n?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,y){return v===null||v.tag!==6?(v=uu(_,f.mode,y),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,y){var A=_.type;return A===ws?u(f,v,_.props.children,y,_.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&dp(A)===v.type)?(y=r(v,_.props),y.ref=Ro(f,v,_),y.return=f,y):(y=Ul(_.type,_.key,_.props,null,f.mode,y),y.ref=Ro(f,v,_),y.return=f,y)}function c(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=du(_,f.mode,y),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function u(f,v,_,y,A){return v===null||v.tag!==7?(v=Gr(_,f.mode,y,A),v.return=f,v):(v=r(v,_),v.return=f,v)}function d(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=uu(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return _=Ul(v.type,v.key,v.props,null,f.mode,_),_.ref=Ro(f,null,v),_.return=f,_;case Ts:return v=du(v,f.mode,_),v.return=f,v;case Xi:var y=v._init;return d(f,y(v._payload),_)}if(Bo(v)||Mo(v))return v=Gr(v,f.mode,_,null),v.return=f,v;Xa(f,v)}return null}function h(f,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return _.key===A?l(f,v,_,y):null;case Ts:return _.key===A?c(f,v,_,y):null;case Xi:return A=_._init,h(f,v,A(_._payload),y)}if(Bo(_)||Mo(_))return A!==null?null:u(f,v,_,y,null);Xa(f,_)}return null}function p(f,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(v,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,A);case Ts:return f=f.get(y.key===null?_:y.key)||null,c(v,f,y,A);case Xi:var w=y._init;return p(f,v,_,w(y._payload),A)}if(Bo(y)||Mo(y))return f=f.get(_)||null,u(v,f,y,A,null);Xa(v,y)}return null}function g(f,v,_,y){for(var A=null,w=null,E=v,P=v=0,j=null;E!==null&&P<_.length;P++){E.index>P?(j=E,E=null):j=E.sibling;var S=h(f,E,_[P],y);if(S===null){E===null&&(E=j);break}n&&E&&S.alternate===null&&e(f,E),v=s(S,v,P),w===null?A=S:w.sibling=S,w=S,E=j}if(P===_.length)return t(f,E),ht&&Pr(f,P),A;if(E===null){for(;P<_.length;P++)E=d(f,_[P],y),E!==null&&(v=s(E,v,P),w===null?A=E:w.sibling=E,w=E);return ht&&Pr(f,P),A}for(E=i(f,E);P<_.length;P++)j=p(E,f,P,_[P],y),j!==null&&(n&&j.alternate!==null&&E.delete(j.key===null?P:j.key),v=s(j,v,P),w===null?A=j:w.sibling=j,w=j);return n&&E.forEach(function(b){return e(f,b)}),ht&&Pr(f,P),A}function x(f,v,_,y){var A=Mo(_);if(typeof A!="function")throw Error(ie(150));if(_=A.call(_),_==null)throw Error(ie(151));for(var w=A=null,E=v,P=v=0,j=null,S=_.next();E!==null&&!S.done;P++,S=_.next()){E.index>P?(j=E,E=null):j=E.sibling;var b=h(f,E,S.value,y);if(b===null){E===null&&(E=j);break}n&&E&&b.alternate===null&&e(f,E),v=s(b,v,P),w===null?A=b:w.sibling=b,w=b,E=j}if(S.done)return t(f,E),ht&&Pr(f,P),A;if(E===null){for(;!S.done;P++,S=_.next())S=d(f,S.value,y),S!==null&&(v=s(S,v,P),w===null?A=S:w.sibling=S,w=S);return ht&&Pr(f,P),A}for(E=i(f,E);!S.done;P++,S=_.next())S=p(E,f,P,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?A=S:w.sibling=S,w=S);return n&&E.forEach(function(te){return e(f,te)}),ht&&Pr(f,P),A}function m(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===ws&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:e:{for(var A=_.key,w=v;w!==null;){if(w.key===A){if(A=_.type,A===ws){if(w.tag===7){t(f,w.sibling),v=r(w,_.props.children),v.return=f,f=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&dp(A)===w.type){t(f,w.sibling),v=r(w,_.props),v.ref=Ro(f,w,_),v.return=f,f=v;break e}t(f,w);break}else e(f,w);w=w.sibling}_.type===ws?(v=Gr(_.props.children,f.mode,y,_.key),v.return=f,f=v):(y=Ul(_.type,_.key,_.props,null,f.mode,y),y.ref=Ro(f,v,_),y.return=f,f=y)}return o(f);case Ts:e:{for(w=_.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=du(_,f.mode,y),v.return=f,f=v}return o(f);case Xi:return w=_._init,m(f,v,w(_._payload),y)}if(Bo(_))return g(f,v,_,y);if(Mo(_))return x(f,v,_,y);Xa(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,_),v.return=f,f=v):(t(f,v),v=uu(_,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return m}var Js=ev(!0),tv=ev(!1),Ra={},ri=xr(Ra),ha=xr(Ra),pa=xr(Ra);function Br(n){if(n===Ra)throw Error(ie(174));return n}function Of(n,e){switch(ot(pa,e),ot(ha,n),ot(ri,Ra),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=cd(e,n)}dt(ri),ot(ri,e)}function eo(){dt(ri),dt(ha),dt(pa)}function nv(n){Br(pa.current);var e=Br(ri.current),t=cd(e,n.type);e!==t&&(ot(ha,n),ot(ri,t))}function Ff(n){ha.current===n&&(dt(ri),dt(ha))}var gt=xr(0);function tc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function kf(){for(var n=0;n<ru.length;n++)ru[n]._workInProgressVersionPrimary=null;ru.length=0}var Ll=Di.ReactCurrentDispatcher,su=Di.ReactCurrentBatchConfig,qr=0,_t=null,Rt=null,It=null,nc=!1,qo=!1,ma=0,zy=0;function Wt(){throw Error(ie(321))}function Bf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Kn(n[t],e[t]))return!1;return!0}function zf(n,e,t,i,r,s){if(qr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=n===null||n.memoizedState===null?Wy:Xy,n=t(i,r),qo){s=0;do{if(qo=!1,ma=0,25<=s)throw Error(ie(301));s+=1,It=Rt=null,e.updateQueue=null,Ll.current=jy,n=t(i,r)}while(qo)}if(Ll.current=ic,e=Rt!==null&&Rt.next!==null,qr=0,It=Rt=_t=null,nc=!1,e)throw Error(ie(300));return n}function Hf(){var n=ma!==0;return ma=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?_t.memoizedState=It=n:It=It.next=n,It}function Un(){if(Rt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=It===null?_t.memoizedState:It.next;if(e!==null)It=e,Rt=n;else{if(n===null)throw Error(ie(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},It===null?_t.memoizedState=It=n:It=It.next=n}return It}function ga(n,e){return typeof e=="function"?e(n):e}function ou(n){var e=Un(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=u,Kr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,Kr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function au(n){var e=Un(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function iv(){}function rv(n,e){var t=_t,i=Un(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Gf(av.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,_a(9,ov.bind(null,t,i,r,e),void 0,null),Ut===null)throw Error(ie(349));qr&30||sv(t,e,r)}return r}function sv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ov(n,e,t,i){e.value=t,e.getSnapshot=i,lv(e)&&cv(n)}function av(n,e,t){return t(function(){lv(e)&&cv(n)})}function lv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Kn(n,t)}catch{return!0}}function cv(n){var e=Pi(n,1);e!==null&&Yn(e,n,1,-1)}function fp(n){var e=Qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},e.queue=n,n=n.dispatch=Vy.bind(null,_t,n),[e.memoizedState,n]}function _a(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function uv(){return Un().memoizedState}function Pl(n,e,t,i){var r=Qn();_t.flags|=n,r.memoizedState=_a(1|e,t,void 0,i===void 0?null:i)}function Tc(n,e,t,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Bf(i,o.deps)){r.memoizedState=_a(e,t,s,i);return}}_t.flags|=n,r.memoizedState=_a(1|e,t,s,i)}function hp(n,e){return Pl(8390656,8,n,e)}function Gf(n,e){return Tc(2048,8,n,e)}function dv(n,e){return Tc(4,2,n,e)}function fv(n,e){return Tc(4,4,n,e)}function hv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function pv(n,e,t){return t=t!=null?t.concat([n]):null,Tc(4,4,hv.bind(null,e,n),t)}function Vf(){}function mv(n,e){var t=Un();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function gv(n,e){var t=Un();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function _v(n,e,t){return qr&21?(Kn(t,e)||(t=y_(),_t.lanes|=t,Kr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function Hy(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=su.transition;su.transition={};try{n(!1),e()}finally{it=t,su.transition=i}}function vv(){return Un().memoizedState}function Gy(n,e,t){var i=cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},xv(n))yv(e,t);else if(t=$_(n,e,t,i),t!==null){var r=sn();Yn(t,n,i,r),Sv(t,e,i)}}function Vy(n,e,t){var i=cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(xv(n))yv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=$_(n,e,r,i),t!==null&&(r=sn(),Yn(t,n,i,r),Sv(t,e,i))}}function xv(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function yv(n,e){qo=nc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Sv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,yf(n,t)}}var ic={readContext:Dn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Wy={readContext:Dn,useCallback:function(n,e){return Qn().memoizedState=[n,e===void 0?null:e],n},useContext:Dn,useEffect:hp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Pl(4194308,4,hv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Pl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Pl(4,2,n,e)},useMemo:function(n,e){var t=Qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Qn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Gy.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=Qn();return n={current:n},e.memoizedState=n},useState:fp,useDebugValue:Vf,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=fp(!1),e=n[0];return n=Hy.bind(null,n[1]),Qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=Qn();if(ht){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),Ut===null)throw Error(ie(349));qr&30||sv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,hp(av.bind(null,i,s,n),[n]),i.flags|=2048,_a(9,ov.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Qn(),e=Ut.identifierPrefix;if(ht){var t=Ti,i=Ei;t=(i&~(1<<32-jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ma++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=zy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Xy={readContext:Dn,useCallback:mv,useContext:Dn,useEffect:Gf,useImperativeHandle:pv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:gv,useReducer:ou,useRef:uv,useState:function(){return ou(ga)},useDebugValue:Vf,useDeferredValue:function(n){var e=Un();return _v(e,Rt.memoizedState,n)},useTransition:function(){var n=ou(ga)[0],e=Un().memoizedState;return[n,e]},useMutableSource:iv,useSyncExternalStore:rv,useId:vv,unstable_isNewReconciler:!1},jy={readContext:Dn,useCallback:mv,useContext:Dn,useEffect:Gf,useImperativeHandle:pv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:gv,useReducer:au,useRef:uv,useState:function(){return au(ga)},useDebugValue:Vf,useDeferredValue:function(n){var e=Un();return Rt===null?e.memoizedState=n:_v(e,Rt.memoizedState,n)},useTransition:function(){var n=au(ga)[0],e=Un().memoizedState;return[n,e]},useMutableSource:iv,useSyncExternalStore:rv,useId:vv,unstable_isNewReconciler:!1};function to(n,e){try{var t="",i=e;do t+=yx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Nd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function Mv(n,e,t){t=bi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sc||(sc=!0,Gd=i),Nd(n,e)},t}function Ev(n,e,t){t=bi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Nd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Nd(n,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function pp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Yy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=aS.bind(null,n,e,t),e.then(n,n))}function mp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function gp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=bi(-1,1),e.tag=2,ar(t,e,1))),t.lanes|=1),n)}var qy=Di.ReactCurrentOwner,un=!1;function en(n,e,t,i){e.child=n===null?tv(e,null,t,i):Js(e,n.child,t,i)}function _p(n,e,t,i,r){t=t.render;var s=e.ref;return Vs(e,r),i=zf(n,e,t,i,s,r),t=Hf(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ni(n,e,r)):(ht&&t&&bf(e),e.flags|=1,en(n,e,i,r),e.child)}function vp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Zf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Tv(n,e,s,i,r)):(n=Ul(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ca,t(o,i)&&n.ref===e.ref)return Ni(n,e,r)}return e.flags|=1,n=ur(s,i),n.ref=e.ref,n.return=e,e.child=n}function Tv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ca(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Ni(n,e,r)}return Id(n,e,t,i,r)}function wv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Us,vn),vn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ot(Us,vn),vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ot(Us,vn),vn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ot(Us,vn),vn|=i;return en(n,e,r,t),e.child}function Av(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Id(n,e,t,i,r){var s=fn(t)?jr:$t.current;return s=Zs(e,s),Vs(e,r),t=zf(n,e,t,i,s,r),i=Hf(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ni(n,e,r)):(ht&&i&&bf(e),e.flags|=1,en(n,e,t,r),e.child)}function xp(n,e,t,i,r){if(fn(t)){var s=!0;Kl(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Nl(n,e),J_(e,t,i),Pd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=fn(t)?jr:$t.current,c=Zs(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&up(e,o,i,c),ji=!1;var h=e.memoizedState;o.state=h,ec(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||ji?(typeof u=="function"&&(Ld(e,t,u,i),l=e.memoizedState),(a=ji||cp(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Z_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=fn(t)?jr:$t.current,l=Zs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&up(e,o,i,l),ji=!1,h=e.memoizedState,o.state=h,ec(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||dn.current||ji?(typeof p=="function"&&(Ld(e,t,p,i),g=e.memoizedState),(c=ji||cp(e,t,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Dd(n,e,t,i,s,r)}function Dd(n,e,t,i,r,s){Av(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rp(e,t,!1),Ni(n,e,s);i=e.stateNode,qy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Js(e,n.child,null,s),e.child=Js(e,null,a,s)):en(n,e,a,s),e.memoizedState=i.state,r&&rp(e,t,!0),e.child}function Rv(n){var e=n.stateNode;e.pendingContext?ip(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ip(n,e.context,!1),Of(n,e.containerInfo)}function yp(n,e,t,i,r){return Qs(),Lf(r),e.flags|=256,en(n,e,t,i),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Od(n){return{baseLanes:n,cachePool:null,transitions:null}}function bv(n,e,t){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ot(gt,r&1),n===null)return bd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,i,0,null),n=Gr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Od(t),e.memoizedState=Ud,n):Wf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ky(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Gr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Od(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ud,i}return s=n.child,n=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Wf(n,e){return e=Rc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ja(n,e,t,i){return i!==null&&Lf(i),Js(e,n.child,null,t),n=Wf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ky(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lu(Error(ie(422))),ja(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,n.child,null,o),e.child.memoizedState=Od(o),e.memoizedState=Ud,s);if(!(e.mode&1))return ja(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=lu(s,i,void 0),ja(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(n,r),Yn(i,n,r,-1))}return $f(),i=lu(Error(ie(421))),ja(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=lS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,xn=or(r.nextSibling),yn=e,ht=!0,Gn=null,n!==null&&(Rn[bn++]=Ei,Rn[bn++]=Ti,Rn[bn++]=Yr,Ei=n.id,Ti=n.overflow,Yr=e),e=Wf(e,i.children),e.flags|=4096,e)}function Sp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cd(n.return,e,t)}function cu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Cv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(n,e,i.children,t),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sp(n,t,e);else if(n.tag===19)Sp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ot(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&tc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),cu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&tc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}cu(e,!0,t,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ni(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Kr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=ur(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ur(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function $y(n,e,t){switch(e.tag){case 3:Rv(e),Qs();break;case 5:nv(e);break;case 1:fn(e.type)&&Kl(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(gt,gt.current&1),e.flags|=128,null):t&e.child.childLanes?bv(n,e,t):(ot(gt,gt.current&1),n=Ni(n,e,t),n!==null?n.sibling:null);ot(gt,gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Cv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,wv(n,e,t)}return Ni(n,e,t)}var Lv,Fd,Pv,Nv;Lv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fd=function(){};Pv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Br(ri.current);var s=null;switch(t){case"input":r=sd(n,r),i=sd(n,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=ld(n,r),i=ld(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yl)}ud(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(na.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Nv=function(n,e,t,i){t!==i&&(e.flags|=4)};function bo(n,e){if(!ht)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Xt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Zy(n,e,t){var i=e.pendingProps;switch(Cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&ql(),Xt(e),null;case 3:return i=e.stateNode,eo(),dt(dn),dt($t),kf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Wa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Xd(Gn),Gn=null))),Fd(n,e),Xt(e),null;case 5:Ff(e);var r=Br(pa.current);if(t=e.type,n!==null&&e.stateNode!=null)Pv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Xt(e),null}if(n=Br(ri.current),Wa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[fa]=s,n=(e.mode&1)!==0,t){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)ct(Ho[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Lh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Nh(i,s),ct("invalid",i)}ud(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,a,n),r=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(t){case"input":Ua(i),Ph(i,s,!0);break;case"textarea":Ua(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=s_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ei]=e,n[fa]=i,Lv(n,e,!1,!1),e.stateNode=n;e:{switch(o=dd(t,i),t){case"dialog":ct("cancel",n),ct("close",n),r=i;break;case"iframe":case"object":case"embed":ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)ct(Ho[r],n);r=i;break;case"source":ct("error",n),r=i;break;case"img":case"image":case"link":ct("error",n),ct("load",n),r=i;break;case"details":ct("toggle",n),r=i;break;case"input":Lh(n,i),r=sd(n,i),ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ct("invalid",n);break;case"textarea":Nh(n,i),r=ld(n,i),ct("invalid",n);break;default:r=i}ud(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?l_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ia(n,l):typeof l=="number"&&ia(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",n):l!=null&&pf(n,s,l,o))}switch(t){case"input":Ua(n),Ph(n,i,!1);break;case"textarea":Ua(n),Ih(n);break;case"option":i.value!=null&&n.setAttribute("value",""+mr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Bs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(n&&e.stateNode!=null)Nv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Br(pa.current),Br(ri.current),Wa(e)){if(i=e.stateNode,t=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==t)&&(n=yn,n!==null))switch(n.tag){case 3:Va(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Xt(e),null;case 13:if(dt(gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ht&&xn!==null&&e.mode&1&&!(e.flags&128))K_(),Qs(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ei]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Gn!==null&&(Xd(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||gt.current&1?bt===0&&(bt=3):$f())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return eo(),Fd(n,e),n===null&&ua(e.stateNode.containerInfo),Xt(e),null;case 10:return If(e.type._context),Xt(e),null;case 17:return fn(e.type)&&ql(),Xt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=tc(n),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ot(gt,gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>no&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(n=tc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Xt(e),null}else 2*Et()-s.renderingStartTime>no&&t!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=gt.current,ot(gt,i?t&1|2:t&1),e):(Xt(e),null);case 22:case 23:return Kf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Qy(n,e){switch(Cf(e),e.tag){case 1:return fn(e.type)&&ql(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return eo(),dt(dn),dt($t),kf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ff(e),null;case 13:if(dt(gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Qs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(gt),null;case 4:return eo(),null;case 10:return If(e.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Ya=!1,Kt=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ds(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function kd(n,e,t){try{t()}catch(i){St(n,e,i)}}var Mp=!1;function eS(n,e){if(Sd=Wl,n=O_(),Rf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Md={focusedElem:n,selectionRange:t},Wl=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){St(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=Mp,Mp=!1,g}function Ko(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&kd(e,t,s)}r=r.next}while(r!==i)}}function wc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Iv(n){var e=n.alternate;e!==null&&(n.alternate=null,Iv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ei],delete e[fa],delete e[wd],delete e[Oy],delete e[Fy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Dv(n){return n.tag===5||n.tag===3||n.tag===4}function Ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Dv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(n=n.child,n!==null))for(zd(n,e,t),n=n.sibling;n!==null;)zd(n,e,t),n=n.sibling}function Hd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hd(n,e,t),n=n.sibling;n!==null;)Hd(n,e,t),n=n.sibling}var Ft=null,Hn=!1;function Oi(n,e,t){for(t=t.child;t!==null;)Uv(n,e,t),t=t.sibling}function Uv(n,e,t){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(_c,t)}catch{}switch(t.tag){case 5:Kt||Ds(t,e);case 6:var i=Ft,r=Hn;Ft=null,Oi(n,e,t),Ft=i,Hn=r,Ft!==null&&(Hn?(n=Ft,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ft.removeChild(t.stateNode));break;case 18:Ft!==null&&(Hn?(n=Ft,t=t.stateNode,n.nodeType===8?nu(n.parentNode,t):n.nodeType===1&&nu(n,t),aa(n)):nu(Ft,t.stateNode));break;case 4:i=Ft,r=Hn,Ft=t.stateNode.containerInfo,Hn=!0,Oi(n,e,t),Ft=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kd(t,e,o),r=r.next}while(r!==i)}Oi(n,e,t);break;case 1:if(!Kt&&(Ds(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){St(t,e,a)}Oi(n,e,t);break;case 21:Oi(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,Oi(n,e,t),Kt=i):Oi(n,e,t);break;default:Oi(n,e,t)}}function Tp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Jy),e.forEach(function(i){var r=cS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function On(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Hn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ft===null)throw Error(ie(160));Uv(s,o,r),Ft=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,n),e=e.sibling}function Ov(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(e,n),Zn(n),i&4){try{Ko(3,n,n.return),wc(3,n)}catch(x){St(n,n.return,x)}try{Ko(5,n,n.return)}catch(x){St(n,n.return,x)}}break;case 1:On(e,n),Zn(n),i&512&&t!==null&&Ds(t,t.return);break;case 5:if(On(e,n),Zn(n),i&512&&t!==null&&Ds(t,t.return),n.flags&32){var r=n.stateNode;try{ia(r,"")}catch(x){St(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&i_(r,s),dd(a,o);var c=dd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?l_(r,d):u==="dangerouslySetInnerHTML"?o_(r,d):u==="children"?ia(r,d):pf(r,u,d,c)}switch(a){case"input":od(r,s);break;case"textarea":r_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[fa]=s}catch(x){St(n,n.return,x)}}break;case 6:if(On(e,n),Zn(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){St(n,n.return,x)}}break;case 3:if(On(e,n),Zn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(x){St(n,n.return,x)}break;case 4:On(e,n),Zn(n);break;case 13:On(e,n),Zn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yf=Et())),i&4&&Tp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(c=Kt)||u,On(e,n),Kt=c):On(e,n),Zn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(pe=n,u=n.child;u!==null;){for(d=pe=u;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ko(4,h,h.return);break;case 1:Ds(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){St(i,t,x)}}break;case 5:Ds(h,h.return);break;case 22:if(h.memoizedState!==null){Ap(d);continue}}p!==null?(p.return=h,pe=p):Ap(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a_("display",o))}catch(x){St(n,n.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){St(n,n.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,n),Zn(n),i&4&&Tp(n);break;case 21:break;default:On(e,n),Zn(n)}}function Zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Dv(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=Ep(n);Hd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ep(n);zd(n,a,o);break;default:throw Error(ie(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function tS(n,e,t){pe=n,Fv(n)}function Fv(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ya;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Ya;var c=Kt;if(Ya=o,(Kt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Rp(r):l!==null?(l.return=o,pe=l):Rp(r);for(;s!==null;)pe=s,Fv(s),s=s.sibling;pe=r,Ya=a,Kt=c}wp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):wp(n)}}function wp(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:zn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}lp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Kt||e.flags&512&&Bd(e)}catch(h){St(e,e.return,h)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Ap(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Rp(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{wc(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Bd(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Bd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var nS=Math.ceil,rc=Di.ReactCurrentDispatcher,Xf=Di.ReactCurrentOwner,Nn=Di.ReactCurrentBatchConfig,$e=0,Ut=null,wt=null,Bt=0,vn=0,Us=xr(0),bt=0,va=null,Kr=0,Ac=0,jf=0,$o=null,cn=null,Yf=0,no=1/0,yi=null,sc=!1,Gd=null,lr=null,qa=!1,er=null,oc=0,Zo=0,Vd=null,Il=-1,Dl=0;function sn(){return $e&6?Et():Il!==-1?Il:Il=Et()}function cr(n){return n.mode&1?$e&2&&Bt!==0?Bt&-Bt:By.transition!==null?(Dl===0&&(Dl=y_()),Dl):(n=it,n!==0||(n=window.event,n=n===void 0?16:R_(n.type)),n):1}function Yn(n,e,t,i){if(50<Zo)throw Zo=0,Vd=null,Error(ie(185));Ta(n,t,i),(!($e&2)||n!==Ut)&&(n===Ut&&(!($e&2)&&(Ac|=t),bt===4&&Zi(n,Bt)),hn(n,i),t===1&&$e===0&&!(e.mode&1)&&(no=Et()+500,Mc&&yr()))}function hn(n,e){var t=n.callbackNode;Bx(n,e);var i=Vl(n,n===Ut?Bt:0);if(i===0)t!==null&&Oh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Oh(t),e===1)n.tag===0?ky(bp.bind(null,n)):j_(bp.bind(null,n)),Dy(function(){!($e&6)&&yr()}),t=null;else{switch(S_(i)){case 1:t=xf;break;case 4:t=v_;break;case 16:t=Gl;break;case 536870912:t=x_;break;default:t=Gl}t=Xv(t,kv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function kv(n,e){if(Il=-1,Dl=0,$e&6)throw Error(ie(327));var t=n.callbackNode;if(Ws()&&n.callbackNode!==t)return null;var i=Vl(n,n===Ut?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ac(n,i);else{e=i;var r=$e;$e|=2;var s=zv();(Ut!==n||Bt!==e)&&(yi=null,no=Et()+500,Hr(n,e));do try{sS();break}catch(a){Bv(n,a)}while(!0);Nf(),rc.current=s,$e=r,wt!==null?e=0:(Ut=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=gd(n),r!==0&&(i=r,e=Wd(n,r))),e===1)throw t=va,Hr(n,0),Zi(n,i),hn(n,Et()),t;if(e===6)Zi(n,i);else{if(r=n.current.alternate,!(i&30)&&!iS(r)&&(e=ac(n,i),e===2&&(s=gd(n),s!==0&&(i=s,e=Wd(n,s))),e===1))throw t=va,Hr(n,0),Zi(n,i),hn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Nr(n,cn,yi);break;case 3:if(Zi(n,i),(i&130023424)===i&&(e=Yf+500-Et(),10<e)){if(Vl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Td(Nr.bind(null,n,cn,yi),e);break}Nr(n,cn,yi);break;case 4:if(Zi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){n.timeoutHandle=Td(Nr.bind(null,n,cn,yi),i);break}Nr(n,cn,yi);break;case 5:Nr(n,cn,yi);break;default:throw Error(ie(329))}}}return hn(n,Et()),n.callbackNode===t?kv.bind(null,n):null}function Wd(n,e){var t=$o;return n.current.memoizedState.isDehydrated&&(Hr(n,e).flags|=256),n=ac(n,e),n!==2&&(e=cn,cn=t,e!==null&&Xd(e)),n}function Xd(n){cn===null?cn=n:cn.push.apply(cn,n)}function iS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(n,e){for(e&=~jf,e&=~Ac,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-jn(e),i=1<<t;n[t]=-1,e&=~i}}function bp(n){if($e&6)throw Error(ie(327));Ws();var e=Vl(n,0);if(!(e&1))return hn(n,Et()),null;var t=ac(n,e);if(n.tag!==0&&t===2){var i=gd(n);i!==0&&(e=i,t=Wd(n,i))}if(t===1)throw t=va,Hr(n,0),Zi(n,e),hn(n,Et()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Nr(n,cn,yi),hn(n,Et()),null}function qf(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(no=Et()+500,Mc&&yr())}}function $r(n){er!==null&&er.tag===0&&!($e&6)&&Ws();var e=$e;$e|=1;var t=Nn.transition,i=it;try{if(Nn.transition=null,it=1,n)return n()}finally{it=i,Nn.transition=t,$e=e,!($e&6)&&yr()}}function Kf(){vn=Us.current,dt(Us)}function Hr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Iy(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(Cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:eo(),dt(dn),dt($t),kf();break;case 5:Ff(i);break;case 4:eo();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:If(i.type._context);break;case 22:case 23:Kf()}t=t.return}if(Ut=n,wt=n=ur(n.current,null),Bt=vn=e,bt=0,va=null,jf=Ac=Kr=0,cn=$o=null,kr!==null){for(e=0;e<kr.length;e++)if(t=kr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}kr=null}return n}function Bv(n,e){do{var t=wt;try{if(Nf(),Ll.current=ic,nc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(qr=0,It=Rt=_t=null,qo=!1,ma=0,Xf.current=null,t===null||t.return===null){bt=1,va=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=mp(o);if(p!==null){p.flags&=-257,gp(p,o,a,s,e),p.mode&1&&pp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){pp(s,c,e),$f();break e}l=Error(ie(426))}}else if(ht&&a.mode&1){var m=mp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gp(m,o,a,s,e),Lf(to(l,a));break e}}s=l=to(l,a),bt!==4&&(bt=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Mv(s,l,e);ap(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(lr===null||!lr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ev(s,a,e);ap(s,y);break e}}s=s.return}while(s!==null)}Gv(t)}catch(A){e=A,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function zv(){var n=rc.current;return rc.current=ic,n===null?ic:n}function $f(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(Kr&268435455)&&!(Ac&268435455)||Zi(Ut,Bt)}function ac(n,e){var t=$e;$e|=2;var i=zv();(Ut!==n||Bt!==e)&&(yi=null,Hr(n,e));do try{rS();break}catch(r){Bv(n,r)}while(!0);if(Nf(),$e=t,rc.current=i,wt!==null)throw Error(ie(261));return Ut=null,Bt=0,bt}function rS(){for(;wt!==null;)Hv(wt)}function sS(){for(;wt!==null&&!Lx();)Hv(wt)}function Hv(n){var e=Wv(n.alternate,n,vn);n.memoizedProps=n.pendingProps,e===null?Gv(n):wt=e,Xf.current=null}function Gv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Qy(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}else if(t=Zy(t,e,vn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function Nr(n,e,t){var i=it,r=Nn.transition;try{Nn.transition=null,it=1,oS(n,e,t,i)}finally{Nn.transition=r,it=i}return null}function oS(n,e,t,i){do Ws();while(er!==null);if($e&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(zx(n,s),n===Ut&&(wt=Ut=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||qa||(qa=!0,Xv(Gl,function(){return Ws(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=it;it=1;var a=$e;$e|=4,Xf.current=null,eS(n,t),Ov(t,n),Ay(Md),Wl=!!Sd,Md=Sd=null,n.current=t,tS(t),Px(),$e=a,it=o,Nn.transition=s}else n.current=t;if(qa&&(qa=!1,er=n,oc=r),s=n.pendingLanes,s===0&&(lr=null),Dx(t.stateNode),hn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,n=Gd,Gd=null,n;return oc&1&&n.tag!==0&&Ws(),s=n.pendingLanes,s&1?n===Vd?Zo++:(Zo=0,Vd=n):Zo=0,yr(),null}function Ws(){if(er!==null){var n=S_(oc),e=Nn.transition,t=it;try{if(Nn.transition=null,it=16>n?16:n,er===null)var i=!1;else{if(n=er,er=null,oc=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Ko(8,u,s)}var d=u.child;if(d!==null)d.return=u,pe=d;else for(;pe!==null;){u=pe;var h=u.sibling,p=u.return;if(Iv(u),u===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,pe=f;break e}pe=s.return}}var v=n.current;for(pe=v;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(A){St(a,a.return,A)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if($e=r,yr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(_c,n)}catch{}i=!0}return i}finally{it=t,Nn.transition=e}}return!1}function Cp(n,e,t){e=to(t,e),e=Mv(n,e,1),n=ar(n,e,1),e=sn(),n!==null&&(Ta(n,1,e),hn(n,e))}function St(n,e,t){if(n.tag===3)Cp(n,n,t);else for(;e!==null;){if(e.tag===3){Cp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){n=to(t,n),n=Ev(e,n,1),e=ar(e,n,1),n=sn(),e!==null&&(Ta(e,1,n),hn(e,n));break}}e=e.return}}function aS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,Ut===n&&(Bt&t)===t&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>Et()-Yf?Hr(n,0):jf|=t),hn(n,e)}function Vv(n,e){e===0&&(n.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var t=sn();n=Pi(n,e),n!==null&&(Ta(n,e,t),hn(n,t))}function lS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Vv(n,t)}function cS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Vv(n,t)}var Wv;Wv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,$y(n,e,t);un=!!(n.flags&131072)}else un=!1,ht&&e.flags&1048576&&Y_(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(n,e),n=e.pendingProps;var r=Zs(e,$t.current);Vs(e,t),r=zf(null,e,i,n,r,t);var s=Hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,Pd(e,i,n,t),e=Dd(null,e,i,!0,s,t)):(e.tag=0,ht&&s&&bf(e),en(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dS(i),n=zn(i,n),r){case 0:e=Id(null,e,i,n,t);break e;case 1:e=xp(null,e,i,n,t);break e;case 11:e=_p(null,e,i,n,t);break e;case 14:e=vp(null,e,i,zn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Id(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),xp(n,e,i,r,t);case 3:e:{if(Rv(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Z_(n,e),ec(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(ie(423)),e),e=yp(n,e,i,t,r);break e}else if(i!==r){r=to(Error(ie(424)),e),e=yp(n,e,i,t,r);break e}else for(xn=or(e.stateNode.containerInfo.firstChild),yn=e,ht=!0,Gn=null,t=tv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qs(),i===r){e=Ni(n,e,t);break e}en(n,e,i,t)}e=e.child}return e;case 5:return nv(e),n===null&&bd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ed(i,r)?o=null:s!==null&&Ed(i,s)&&(e.flags|=32),Av(n,e),en(n,e,o,t),e.child;case 6:return n===null&&bd(e),null;case 13:return bv(n,e,t);case 4:return Of(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Js(e,null,i,t):en(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),_p(n,e,i,r,t);case 7:return en(n,e,e.pendingProps,t),e.child;case 8:return en(n,e,e.pendingProps.children,t),e.child;case 12:return en(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Ql,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ni(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,t),r=Dn(r),i=i(r),e.flags|=1,en(n,e,i,t),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),vp(n,e,i,r,t);case 15:return Tv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Nl(n,e),e.tag=1,fn(i)?(n=!0,Kl(e)):n=!1,Vs(e,t),J_(e,i,r),Pd(e,i,r,t),Dd(null,e,i,!0,n,t);case 19:return Cv(n,e,t);case 22:return wv(n,e,t)}throw Error(ie(156,e.tag))};function Xv(n,e){return __(n,e)}function uS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,t,i){return new uS(n,e,t,i)}function Zf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dS(n){if(typeof n=="function")return Zf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===gf)return 11;if(n===_f)return 14}return 2}function ur(n,e){var t=n.alternate;return t===null?(t=Pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ul(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Zf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ws:return Gr(t.children,r,s,e);case mf:o=8,r|=8;break;case td:return n=Pn(12,t,e,r|2),n.elementType=td,n.lanes=s,n;case nd:return n=Pn(13,t,e,r),n.elementType=nd,n.lanes=s,n;case id:return n=Pn(19,t,e,r),n.elementType=id,n.lanes=s,n;case e_:return Rc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Qg:o=10;break e;case Jg:o=9;break e;case gf:o=11;break e;case _f:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=Pn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Gr(n,e,t,i){return n=Pn(7,n,i,e),n.lanes=t,n}function Rc(n,e,t,i){return n=Pn(22,n,i,e),n.elementType=e_,n.lanes=t,n.stateNode={isHidden:!1},n}function uu(n,e,t){return n=Pn(6,n,null,e),n.lanes=t,n}function du(n,e,t){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function fS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qf(n,e,t,i,r,s,o,a,l){return n=new fS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),n}function hS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jv(n){if(!n)return gr;n=n._reactInternals;e:{if(es(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(fn(t))return X_(n,t,e)}return e}function Yv(n,e,t,i,r,s,o,a,l){return n=Qf(t,i,!0,n,r,s,o,a,l),n.context=jv(null),t=n.current,i=sn(),r=cr(t),s=bi(i,r),s.callback=e??null,ar(t,s,r),n.current.lanes=r,Ta(n,r,i),hn(n,i),n}function bc(n,e,t,i){var r=e.current,s=sn(),o=cr(r);return t=jv(t),e.context===null?e.context=t:e.pendingContext=t,e=bi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ar(r,e,o),n!==null&&(Yn(n,r,o,s),Cl(n,r,o)),o}function lc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Jf(n,e){Lp(n,e),(n=n.alternate)&&Lp(n,e)}function pS(){return null}var qv=typeof reportError=="function"?reportError:function(n){console.error(n)};function eh(n){this._internalRoot=n}Cc.prototype.render=eh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));bc(n,e,null,null)};Cc.prototype.unmount=eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;$r(function(){bc(null,n,null,null)}),e[Li]=null}};function Cc(n){this._internalRoot=n}Cc.prototype.unstable_scheduleHydration=function(n){if(n){var e=T_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<$i.length&&e!==0&&e<$i[t].priority;t++);$i.splice(t,0,n),t===0&&A_(n)}};function th(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function mS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lc(o);s.call(c)}}var o=Yv(e,i,n,0,null,!1,!1,"",Pp);return n._reactRootContainer=o,n[Li]=o.current,ua(n.nodeType===8?n.parentNode:n),$r(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lc(l);a.call(c)}}var l=Qf(n,0,!1,null,null,!1,!1,"",Pp);return n._reactRootContainer=l,n[Li]=l.current,ua(n.nodeType===8?n.parentNode:n),$r(function(){bc(e,l,t,i)}),l}function Pc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}bc(e,o,n,r)}else o=mS(t,e,n,r,i);return lc(o)}M_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zo(e.pendingLanes);t!==0&&(yf(e,t|1),hn(e,Et()),!($e&6)&&(no=Et()+500,yr()))}break;case 13:$r(function(){var i=Pi(n,1);if(i!==null){var r=sn();Yn(i,n,1,r)}}),Jf(n,1)}};Sf=function(n){if(n.tag===13){var e=Pi(n,134217728);if(e!==null){var t=sn();Yn(e,n,134217728,t)}Jf(n,134217728)}};E_=function(n){if(n.tag===13){var e=cr(n),t=Pi(n,e);if(t!==null){var i=sn();Yn(t,n,e,i)}Jf(n,e)}};T_=function(){return it};w_=function(n,e){var t=it;try{return it=n,e()}finally{it=t}};hd=function(n,e,t){switch(e){case"input":if(od(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sc(i);if(!r)throw Error(ie(90));n_(i),od(i,r)}}}break;case"textarea":r_(n,t);break;case"select":e=t.value,e!=null&&Bs(n,!!t.multiple,e,!1)}};d_=qf;f_=$r;var gS={usingClientEntryPoint:!1,Events:[Aa,Cs,Sc,c_,u_,qf]},Co={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_S={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=m_(n),n===null?null:n.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{_c=Ka.inject(_S),ii=Ka}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Mn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(ie(200));return hS(n,e,null,t)};Mn.createRoot=function(n,e){if(!th(n))throw Error(ie(299));var t=!1,i="",r=qv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qf(n,1,!1,null,null,t,!1,i,r),n[Li]=e.current,ua(n.nodeType===8?n.parentNode:n),new eh(e)};Mn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=m_(e),n=n===null?null:n.stateNode,n};Mn.flushSync=function(n){return $r(n)};Mn.hydrate=function(n,e,t){if(!Lc(e))throw Error(ie(200));return Pc(null,n,e,!0,t)};Mn.hydrateRoot=function(n,e,t){if(!th(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=qv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Yv(e,null,n,1,t??null,r,!1,s,o),n[Li]=e.current,ua(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cc(e)};Mn.render=function(n,e,t){if(!Lc(e))throw Error(ie(200));return Pc(null,n,e,!1,t)};Mn.unmountComponentAtNode=function(n){if(!Lc(n))throw Error(ie(40));return n._reactRootContainer?($r(function(){Pc(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1};Mn.unstable_batchedUpdates=qf;Mn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Lc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Pc(n,e,t,!1,i)};Mn.version="18.2.0-next-9e3b772b8-20220608";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(n){console.error(n)}}Kv(),Yg.exports=Mn;var vS=Yg.exports,Np=vS;Ju.createRoot=Np.createRoot,Ju.hydrateRoot=Np.hydrateRoot;function xS({legacy:n,callback:e}){return ve.jsxs("header",{style:{position:n?"inherit":"fixed"},children:[ve.jsx("h1",{children:"Benson Li"}),ve.jsxs("ul",{id:"social_media",children:[ve.jsx("a",{href:"https://github.com/SarcasmAppreciated",target:"_blank",children:ve.jsx("li",{children:"Github"})}),ve.jsx("a",{href:"https://www.linkedin.com/in/bli08/",target:"_blank",children:ve.jsx("li",{children:"LinkedIn"})}),ve.jsx("a",{href:"https://www.behance.net/SarcasmAppreciated",target:"_blank",children:ve.jsx("li",{children:"Behance"})})]}),ve.jsx("button",{id:"old-experience",onClick:()=>e(),children:"Legacy View"})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="162",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yS=0,Ip=1,SS=2,$v=1,Zv=2,xi=3,Ii=0,pn=1,ti=2,dr=0,Xs=1,Dp=2,Up=3,Op=4,MS=5,Ur=100,ES=101,TS=102,Fp=103,kp=104,wS=200,AS=201,RS=202,bS=203,jd=204,Yd=205,CS=206,LS=207,PS=208,NS=209,IS=210,DS=211,US=212,OS=213,FS=214,kS=0,BS=1,zS=2,cc=3,HS=4,GS=5,VS=6,WS=7,Qv=0,XS=1,jS=2,fr=0,YS=1,qS=2,KS=3,$S=4,ZS=5,QS=6,JS=7,Bp="attached",eM="detached",Jv=300,io=301,ro=302,qd=303,Kd=304,Nc=306,so=1e3,Cn=1001,uc=1002,Dt=1003,$d=1004,Es=1005,qt=1006,Ol=1007,wi=1008,hr=1009,tM=1010,nM=1011,ih=1012,e0=1013,tr=1014,Vn=1015,xa=1016,t0=1017,n0=1018,Vr=1020,iM=1021,Ln=1023,rM=1024,sM=1025,Wr=1026,oo=1027,i0=1028,r0=1029,oM=1030,s0=1031,o0=1033,fu=33776,hu=33777,pu=33778,mu=33779,zp=35840,Hp=35841,Gp=35842,Vp=35843,a0=36196,Wp=37492,Xp=37496,jp=37808,Yp=37809,qp=37810,Kp=37811,$p=37812,Zp=37813,Qp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,gu=36492,om=36494,am=36495,aM=36283,lm=36284,cm=36285,um=36286,ya=2300,ao=2301,_u=2302,dm=2400,fm=2401,hm=2402,lM=2500,cM=0,l0=1,Zd=2,uM=3200,dM=3201,c0=0,fM=1,Qi="",tn="srgb",Ht="srgb-linear",rh="display-p3",Ic="display-p3-linear",dc="linear",ut="srgb",fc="rec709",hc="p3",ss=7680,pm=519,hM=512,pM=513,mM=514,u0=515,gM=516,_M=517,vM=518,xM=519,Qd=35044,mm="300 es",Jd=1035,Ai=2e3,pc=2001;class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gm=1234567;const Qo=Math.PI/180,lo=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function sh(n,e){return(n%e+e)%e}function yM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function SM(n,e,t){return n!==e?(t-n)/(e-n):0}function Jo(n,e,t){return(1-t)*n+t*e}function MM(n,e,t,i){return Jo(n,e,1-Math.exp(-t*i))}function EM(n,e=1){return e-Math.abs(sh(n,e*2)-e)}function TM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function AM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function RM(n,e){return n+Math.random()*(e-n)}function bM(n){return n*(.5-Math.random())}function CM(n){n!==void 0&&(gm=n);let e=gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LM(n){return n*Qo}function PM(n){return n*lo}function ef(n){return(n&n-1)===0&&n!==0}function NM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function IM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const d0={DEG2RAD:Qo,RAD2DEG:lo,generateUUID:qn,clamp:kt,euclideanModulo:sh,mapLinear:yM,inverseLerp:SM,lerp:Jo,damp:MM,pingpong:EM,smoothstep:TM,smootherstep:wM,randInt:AM,randFloat:RM,randFloatSpread:bM,seededRandom:CM,degToRad:LM,radToDeg:PM,isPowerOfTwo:ef,ceilPowerOfTwo:NM,floorPowerOfTwo:mc,setQuaternionFromProperEuler:IM,normalize:tt,denormalize:Wn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],v=r[1],_=r[4],y=r[7],A=r[2],w=r[5],E=r[8];return s[0]=o*x+a*v+l*A,s[3]=o*m+a*_+l*w,s[6]=o*f+a*y+l*E,s[1]=c*x+u*v+d*A,s[4]=c*m+u*_+d*w,s[7]=c*f+u*y+d*E,s[2]=h*x+p*v+g*A,s[5]=h*m+p*_+g*w,s[8]=h*f+p*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vu.makeScale(e,t)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,t){return this.premultiply(vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new Ve;function f0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DM(){const n=Sa("canvas");return n.style.display="block",n}const _m={};function h0(n){n in _m||(_m[n]=!0,console.warn(n))}const vm=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xm=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[Ht]:{transfer:dc,primaries:fc,toReference:n=>n,fromReference:n=>n},[tn]:{transfer:ut,primaries:fc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ic]:{transfer:dc,primaries:hc,toReference:n=>n.applyMatrix3(xm),fromReference:n=>n.applyMatrix3(vm)},[rh]:{transfer:ut,primaries:hc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xm),fromReference:n=>n.applyMatrix3(vm).convertLinearToSRGB()}},UM=new Set([Ht,Ic]),Je={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!UM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$a[e].toReference,r=$a[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $a[n].primaries},getTransfer:function(n){return n===Qi?dc:$a[n].transfer}};function js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class p0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Sa("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(js(t[i]/255)*255):t[i]=js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yu(r[o].image)):s.push(yu(r[o]))}else s=yu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FM=0;class Ot extends ts{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Cn,r=Cn,s=qt,o=wi,a=Ln,l=hr,c=Ot.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=qn(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Jv;Ot.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(p+1)/2,A=(f+1)/2,w=(u+h)/4,E=(d+x)/4,P=(g+m)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=E/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends kM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class g0 extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BM extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),w=Math.atan2(A,f*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const y=a*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,d=d*m+x*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new N,ym=new oi;class li{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Qa.subVectors(this.max,Lo),as.subVectors(e.a,Lo),ls.subVectors(e.b,Lo),cs.subVectors(e.c,Lo),Fi.subVectors(ls,as),ki.subVectors(cs,ls),Tr.subVectors(as,cs);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-Tr.z,Tr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,Tr.z,0,-Tr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-Tr.y,Tr.x,0];return!Mu(t,as,ls,cs,Qa)||(t=[1,0,0,0,1,0,0,0,1],!Mu(t,as,ls,cs,Qa))?!1:(Ja.crossVectors(Fi,ki),t=[Ja.x,Ja.y,Ja.z],Mu(t,as,ls,cs,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new N,new N,new N,new N,new N,new N,new N,new N],Fn=new N,Za=new li,as=new N,ls=new N,cs=new N,Fi=new N,ki=new N,Tr=new N,Lo=new N,Qa=new N,Ja=new N,wr=new N;function Mu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wr.fromArray(n,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zM=new li,Po=new N,Eu=new N;class ci{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Eu)),this.expandByPoint(Po.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new N,Tu=new N,el=new N,Bi=new N,wu=new N,tl=new N,Au=new N;class go{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tu.copy(e).add(t).multiplyScalar(.5),el.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Tu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(el),a=Bi.dot(this.direction),l=-Bi.dot(el),c=Bi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tu).addScaledVector(el,h),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){wu.subVectors(t,e),tl.subVectors(i,e),Au.crossVectors(wu,tl);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(tl.crossVectors(Bi,tl));if(l<0)return null;const c=a*this.direction.dot(wu.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,g,x,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,x=c*d;t[0]=h+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,GM)}lookAt(e,t,i){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),zi.crossVectors(i,gn),zi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),zi.crossVectors(i,gn)),zi.normalize(),nl.crossVectors(gn,zi),r[0]=zi.x,r[4]=nl.x,r[8]=gn.x,r[1]=zi.y,r[5]=nl.y,r[9]=gn.y,r[2]=zi.z,r[6]=nl.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],A=i[15],w=r[0],E=r[4],P=r[8],j=r[12],S=r[1],b=r[5],te=r[9],Q=r[13],D=r[2],Y=r[6],W=r[10],$=r[14],I=r[3],F=r[7],G=r[11],Z=r[15];return s[0]=o*w+a*S+l*D+c*I,s[4]=o*E+a*b+l*Y+c*F,s[8]=o*P+a*te+l*W+c*G,s[12]=o*j+a*Q+l*$+c*Z,s[1]=u*w+d*S+h*D+p*I,s[5]=u*E+d*b+h*Y+p*F,s[9]=u*P+d*te+h*W+p*G,s[13]=u*j+d*Q+h*$+p*Z,s[2]=g*w+x*S+m*D+f*I,s[6]=g*E+x*b+m*Y+f*F,s[10]=g*P+x*te+m*W+f*G,s[14]=g*j+x*Q+m*$+f*Z,s[3]=v*w+_*S+y*D+A*I,s[7]=v*E+_*b+y*Y+A*F,s[11]=v*P+_*te+y*W+A*G,s[15]=v*j+_*Q+y*$+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],v=d*m*c-x*h*c+x*l*p-a*m*p-d*l*f+a*h*f,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,y=u*x*c-g*d*c+g*a*p-o*x*p-u*a*f+o*d*f,A=g*d*l-u*x*l-g*a*h+o*x*h+u*a*m-o*d*m,w=t*v+i*_+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*E,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*E,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*E,e[4]=_*E,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*E,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*E,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(g*d*s-u*x*s-g*i*p+t*x*p+u*i*f-t*d*f)*E,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*f+t*a*f)*E,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*E,e[12]=A*E,e[13]=(u*x*r-g*d*r+g*i*h-t*x*h-u*i*m+t*d*m)*E,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,x=o*u,m=o*d,f=a*d,v=l*c,_=l*u,y=l*d,A=i.x,w=i.y,E=i.z;return r[0]=(1-(x+f))*A,r[1]=(p+y)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+_)*E,r[9]=(m-v)*E,r[10]=(1-(h+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Ai)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===pc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ai){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,x;if(a===Ai)g=(o+s)*d,x=-2*d;else if(a===pc)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const us=new N,kn=new Ue,HM=new N(0,0,0),GM=new N(1,1,1),zi=new N,nl=new N,gn=new N,Sm=new Ue,Mm=new oi;class ai{constructor(e=0,t=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const Em=new N,ds=new oi,pi=new Ue,il=new N,No=new N,WM=new N,XM=new oi,Tm=new N(1,0,0),wm=new N(0,1,0),Am=new N(0,0,1),jM={type:"added"},YM={type:"removed"},Ru={type:"childadded",child:null},bu={type:"childremoved",child:null};class pt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new N,t=new ai,i=new oi,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ve}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?il.copy(e):il.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(No,il,this.up):pi.lookAt(il,No,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(pi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jM),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YM),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new N,mi=new N,Cu=new N,gi=new N,fs=new N,hs=new N,Rm=new N,Lu=new N,Pu=new N,Nu=new N;class ni{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),mi.subVectors(i,t),Cu.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(mi),l=Bn.dot(Cu),c=mi.dot(mi),u=mi.dot(Cu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),mi.subVectors(e,t),Bn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),hs.subVectors(s,i),Lu.subVectors(e,i);const l=fs.dot(Lu),c=hs.dot(Lu);if(l<=0&&c<=0)return t.copy(i);Pu.subVectors(e,r);const u=fs.dot(Pu),d=hs.dot(Pu);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fs,o);Nu.subVectors(e,s);const p=fs.dot(Nu),g=hs.dot(Nu);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(hs,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Rm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Rm,a);const f=1/(m+x+h);return o=x*f,a=h*f,t.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Iu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class De{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=sh(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Iu(o,s,e+1/3),this.g=Iu(o,s,e),this.b=Iu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round(kt(Yt.r*255,0,255))*65536+Math.round(kt(Yt.g*255,0,255))*256+Math.round(kt(Yt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=tn){Je.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(rl);const i=Jo(Hi.h,rl.h,t),r=Jo(Hi.s,rl.s,t),s=Jo(Hi.l,rl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new De;De.NAMES=_0;let qM=0;class si extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Xs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Yd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ri extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new N,sl=new Te;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return h0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class v0 extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class x0 extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class In extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let KM=0;const wn=new Ue,Du=new pt,ps=new N,_n=new li,Io=new li,Nt=new N;class $n extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?x0:v0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new In(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(_n.min,Io.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,Io.max),_n.expandByPoint(Nt)):(_n.expandByPoint(Io.min),_n.expandByPoint(Io.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Nt.add(ps)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,u=new N,d=new N,h=new Te,p=new Te,g=new Te,x=new N,m=new N;function f(P,j,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,j),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(b),a[P].add(x),a[j].add(x),a[S].add(x),l[P].add(m),l[j].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,j=v.length;P<j;++P){const S=v[P],b=S.start,te=S.count;for(let Q=b,D=b+te;Q<D;Q+=3)f(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const _=new N,y=new N,A=new N,w=new N;function E(P){A.fromBufferAttribute(r,P),w.copy(A);const j=a[P];_.copy(j),_.sub(A.multiplyScalar(A.dot(j))).normalize(),y.crossVectors(w,j);const b=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,b)}for(let P=0,j=v.length;P<j;++P){const S=v[P],b=S.start,te=S.count;for(let Q=b,D=b+te;Q<D;Q+=3)E(e.getX(Q+0)),E(e.getX(Q+1)),E(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new on(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new Ue,Ar=new go,ol=new ci,Cm=new N,ms=new N,gs=new N,_s=new N,Uu=new N,al=new N,ll=new Te,cl=new Te,ul=new Te,Lm=new N,Pm=new N,Nm=new N,dl=new N,fl=new N;class rn extends pt{constructor(e=new $n,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Uu.fromBufferAttribute(d,e),o?al.addScaledVector(Uu,u):al.addScaledVector(Uu.sub(t),u))}t.add(al)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(ol.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ol,Cm)===null||Ar.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(bm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){const w=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);r=hl(this,f,e,i,c,u,d,w,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=hl(this,o,e,i,c,u,d,v,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){const w=y,E=y+1,P=y+2;r=hl(this,f,e,i,c,u,d,w,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,_=m+1,y=m+2;r=hl(this,o,e,i,c,u,d,v,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function $M(n,e,t,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;fl.copy(a),fl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fl);return c<t.near||c>t.far?null:{distance:c,point:fl.clone(),object:n}}function hl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ms),n.getVertexPosition(l,gs),n.getVertexPosition(c,_s);const u=$M(n,e,t,i,ms,gs,_s,dl);if(u){r&&(ll.fromBufferAttribute(r,a),cl.fromBufferAttribute(r,l),ul.fromBufferAttribute(r,c),u.uv=ni.getInterpolation(dl,ms,gs,_s,ll,cl,ul,new Te)),s&&(ll.fromBufferAttribute(s,a),cl.fromBufferAttribute(s,l),ul.fromBufferAttribute(s,c),u.uv1=ni.getInterpolation(dl,ms,gs,_s,ll,cl,ul,new Te)),o&&(Lm.fromBufferAttribute(o,a),Pm.fromBufferAttribute(o,l),Nm.fromBufferAttribute(o,c),u.normal=ni.getInterpolation(dl,ms,gs,_s,Lm,Pm,Nm,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};ni.getNormal(ms,gs,_s,d.normal),u.face=d}return u}class ba extends $n{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(d,2));function g(x,m,f,v,_,y,A,w,E,P,j){const S=y/E,b=A/P,te=y/2,Q=A/2,D=w/2,Y=E+1,W=P+1;let $=0,I=0;const F=new N;for(let G=0;G<W;G++){const Z=G*b-Q;for(let ae=0;ae<Y;ae++){const be=ae*S-te;F[x]=be*v,F[m]=Z*_,F[f]=D,c.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[f]=w>0?1:-1,u.push(F.x,F.y,F.z),d.push(ae/E),d.push(1-G/P),$+=1}}for(let G=0;G<P;G++)for(let Z=0;Z<E;Z++){const ae=h+Z+Y*G,be=h+Z+Y*(G+1),z=h+(Z+1)+Y*(G+1),ee=h+(Z+1)+Y*G;l.push(ae,be,ee),l.push(be,z,ee),I+=6}a.addGroup(p,I,j),p+=I,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=co(n[t]);for(const r in i)e[r]=i[r]}return e}function ZM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function y0(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const QM={clone:co,merge:Qt};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class S0 extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new N,Im=new Te,Dm=new Te;class nn extends S0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Im,Dm),t.subVectors(Dm,Im)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class tE extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(vs,xs,e,t);r.layers=this.layers,this.add(r);const s=new nn(vs,xs,e,t);s.layers=this.layers,this.add(s);const o=new nn(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new nn(vs,xs,e,t);a.layers=this.layers,this.add(a);const l=new nn(vs,xs,e,t);l.layers=this.layers,this.add(l);const c=new nn(vs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class M0 extends Ot{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:io,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nE extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ba(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:dr});s.uniforms.tEquirect.value=t;const o=new rn(r,s),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=qt),new tE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ou=new N,iE=new N,rE=new Ve;class Yi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ou.subVectors(i,t).cross(iE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ou),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rE.getNormalMatrix(e),r=this.coplanarPoint(Ou).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new ci,pl=new N;class ah{constructor(e=new Yi,t=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-f).normalize(),i[1].setComponents(l+s,h+c,m+p,y+f).normalize(),i[2].setComponents(l+o,h+u,m+g,y+v).normalize(),i[3].setComponents(l-o,h-u,m-g,y-v).normalize(),i[4].setComponents(l-a,h-d,m-x,y-_).normalize(),t===Ai)i[5].setComponents(l+a,h+d,m+x,y+_).normalize();else if(t===pc)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let x=0,m=g.length;x<m;x++){const f=g[x];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Dc extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const v=f*h-o;for(let _=0;_<c;_++){const y=_*d-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),w=v+1+c*f;p.push(_,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
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
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xE=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CE=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,LE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,JE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,eT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,sT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ET=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,TT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,XT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YT=`#ifdef USE_SKINNING
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
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ew=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pw=`#define DISTANCE
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
}`,mw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Mw=`#define LAMBERT
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
}`,Ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Tw=`#define MATCAP
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
}`,ww=`#define MATCAP
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
}`,Aw=`#define NORMAL
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
}`,Rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bw=`#define PHONG
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
}`,Cw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Lw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Nw=`#define TOON
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
}`,Iw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dw=`uniform float size;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,Fw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,kw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:oE,alphahash_pars_fragment:aE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:dE,aomap_fragment:fE,aomap_pars_fragment:hE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:_E,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:yE,clipping_planes_fragment:SE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:TE,color_fragment:wE,color_pars_fragment:AE,color_pars_vertex:RE,color_vertex:bE,common:CE,cube_uv_reflection_fragment:LE,defaultnormal_vertex:PE,displacementmap_pars_vertex:NE,displacementmap_vertex:IE,emissivemap_fragment:DE,emissivemap_pars_fragment:UE,colorspace_fragment:OE,colorspace_pars_fragment:FE,envmap_fragment:kE,envmap_common_pars_fragment:BE,envmap_pars_fragment:zE,envmap_pars_vertex:HE,envmap_physical_pars_fragment:JE,envmap_vertex:GE,fog_vertex:VE,fog_pars_vertex:WE,fog_fragment:XE,fog_pars_fragment:jE,gradientmap_pars_fragment:YE,lightmap_fragment:qE,lightmap_pars_fragment:KE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:ZE,lights_pars_begin:QE,lights_toon_fragment:eT,lights_toon_pars_fragment:tT,lights_phong_fragment:nT,lights_phong_pars_fragment:iT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:aT,lights_fragment_end:lT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:dT,logdepthbuf_vertex:fT,map_fragment:hT,map_pars_fragment:pT,map_particle_fragment:mT,map_particle_pars_fragment:gT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:yT,morphnormal_vertex:ST,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:TT,normal_fragment_maps:wT,normal_pars_fragment:AT,normal_pars_vertex:RT,normal_vertex:bT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:IT,opaque_fragment:DT,packing:UT,premultiplied_alpha_fragment:OT,project_vertex:FT,dithering_fragment:kT,dithering_pars_fragment:BT,roughnessmap_fragment:zT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:VT,shadowmap_vertex:WT,shadowmask_pars_fragment:XT,skinbase_vertex:jT,skinning_pars_vertex:YT,skinning_vertex:qT,skinnormal_vertex:KT,specularmap_fragment:$T,specularmap_pars_fragment:ZT,tonemapping_fragment:QT,tonemapping_pars_fragment:JT,transmission_fragment:ew,transmission_pars_fragment:tw,uv_pars_fragment:nw,uv_pars_vertex:iw,uv_vertex:rw,worldpos_vertex:sw,background_vert:ow,background_frag:aw,backgroundCube_vert:lw,backgroundCube_frag:cw,cube_vert:uw,cube_frag:dw,depth_vert:fw,depth_frag:hw,distanceRGBA_vert:pw,distanceRGBA_frag:mw,equirect_vert:gw,equirect_frag:_w,linedashed_vert:vw,linedashed_frag:xw,meshbasic_vert:yw,meshbasic_frag:Sw,meshlambert_vert:Mw,meshlambert_frag:Ew,meshmatcap_vert:Tw,meshmatcap_frag:ww,meshnormal_vert:Aw,meshnormal_frag:Rw,meshphong_vert:bw,meshphong_frag:Cw,meshphysical_vert:Lw,meshphysical_frag:Pw,meshtoon_vert:Nw,meshtoon_frag:Iw,points_vert:Dw,points_frag:Uw,shadow_vert:Ow,shadow_frag:Fw,sprite_vert:kw,sprite_frag:Bw},ce={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Jn={basic:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new De(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Qt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Qt([ce.lights,ce.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Jn.physical={uniforms:Qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ml={r:0,b:0,g:0},br=new ai,zw=new Ue;function Hw(n,e,t,i,r,s,o){const a=new De(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(m,f){let v=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Nc)?(u===void 0&&(u=new rn(new ba(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:co(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(f.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zw.makeRotationFromEuler(br)),u.material.toneMapped=Je.getTransfer(_.colorSpace)!==ut,(d!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new rn(new Dc(2,2),new _r({name:"BackgroundMaterial",uniforms:co(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(ml,y0(n)),i.buffers.color.setClear(ml.r,ml.g,ml.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function Gw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(D,Y,W,$,I){let F=!1;if(o){const G=x($,W,Y);c!==G&&(c=G,p(c.object)),F=f(D,$,W,I),F&&v(D,$,W,I)}else{const G=Y.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==G)&&(c.geometry=$.id,c.program=W.id,c.wireframe=G,F=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,P(D,Y,W,$),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,Y,W){const $=W.wireframe===!0;let I=a[D.id];I===void 0&&(I={},a[D.id]=I);let F=I[Y.id];F===void 0&&(F={},I[Y.id]=F);let G=F[$];return G===void 0&&(G=m(h()),F[$]=G),G}function m(D){const Y=[],W=[],$=[];for(let I=0;I<r;I++)Y[I]=0,W[I]=0,$[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:W,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,Y,W,$){const I=c.attributes,F=Y.attributes;let G=0;const Z=W.getAttributes();for(const ae in Z)if(Z[ae].location>=0){const z=I[ae];let ee=F[ae];if(ee===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),z===void 0||z.attribute!==ee||ee&&z.data!==ee.data)return!0;G++}return c.attributesNum!==G||c.index!==$}function v(D,Y,W,$){const I={},F=Y.attributes;let G=0;const Z=W.getAttributes();for(const ae in Z)if(Z[ae].location>=0){let z=F[ae];z===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(z=D.instanceColor));const ee={};ee.attribute=z,z&&z.data&&(ee.data=z.data),I[ae]=ee,G++}c.attributes=I,c.attributesNum=G,c.index=$}function _(){const D=c.newAttributes;for(let Y=0,W=D.length;Y<W;Y++)D[Y]=0}function y(D){A(D,0)}function A(D,Y){const W=c.newAttributes,$=c.enabledAttributes,I=c.attributeDivisors;W[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),I[D]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,Y),I[D]=Y)}function w(){const D=c.newAttributes,Y=c.enabledAttributes;for(let W=0,$=Y.length;W<$;W++)Y[W]!==D[W]&&(n.disableVertexAttribArray(W),Y[W]=0)}function E(D,Y,W,$,I,F,G){G===!0?n.vertexAttribIPointer(D,Y,W,I,F):n.vertexAttribPointer(D,Y,W,$,I,F)}function P(D,Y,W,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=$.attributes,F=W.getAttributes(),G=Y.defaultAttributeValues;for(const Z in F){const ae=F[Z];if(ae.location>=0){let be=I[Z];if(be===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),be!==void 0){const z=be.normalized,ee=be.itemSize,ue=t.get(be);if(ue===void 0)continue;const we=ue.buffer,Se=ue.type,me=ue.bytesPerElement,Ze=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||be.gpuType===e0);if(be.isInterleavedBufferAttribute){const Le=be.data,O=Le.stride,At=be.offset;if(Le.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ae.locationSize;Ee++)A(ae.location+Ee,Le.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)y(ae.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ee=0;Ee<ae.locationSize;Ee++)E(ae.location+Ee,ee/ae.locationSize,Se,z,O*me,(At+ee/ae.locationSize*Ee)*me,Ze)}else{if(be.isInstancedBufferAttribute){for(let Le=0;Le<ae.locationSize;Le++)A(ae.location+Le,be.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Le=0;Le<ae.locationSize;Le++)y(ae.location+Le);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Le=0;Le<ae.locationSize;Le++)E(ae.location+Le,ee/ae.locationSize,Se,z,ee*me,ee/ae.locationSize*Le*me,Ze)}}else if(G!==void 0){const z=G[Z];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(ae.location,z);break;case 3:n.vertexAttrib3fv(ae.location,z);break;case 4:n.vertexAttrib4fv(ae.location,z);break;default:n.vertexAttrib1fv(ae.location,z)}}}}w()}function j(){te();for(const D in a){const Y=a[D];for(const W in Y){const $=Y[W];for(const I in $)g($[I].object),delete $[I];delete Y[W]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;const Y=a[D.id];for(const W in Y){const $=Y[W];for(const I in $)g($[I].object),delete $[I];delete Y[W]}delete a[D.id]}function b(D){for(const Y in a){const W=a[Y];if(W[D.id]===void 0)continue;const $=W[D.id];for(const I in $)g($[I].object),delete $[I];delete W[D.id]}}function te(){Q(),u=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:Q,dispose:j,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function Vw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,d,h),t.update(d,s,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ww(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),A=_&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:w}}function Xw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let y=f.clippingState||null;l.value=y,y=u(g,h,_,p);for(let A=0;A!==_;++A)y[A]=t[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jw(n){let e=new WeakMap;function t(o,a){return a===qd?o.mapping=io:a===Kd&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qd||a===Kd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lh extends S0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,Um=[.125,.215,.35,.446,.526,.582],Or=20,Fu=new lh,Om=new De;let ku=null,Bu=0,zu=0;const Ir=(1+Math.sqrt(5))/2,ys=1/Ir,Fm=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ir,ys),new N(0,Ir,-ys),new N(ys,0,Ir),new N(-ys,0,Ir),new N(Ir,ys,0),new N(-Ir,ys,0)];class km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,Bu,zu),e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:xa,format:Ln,colorSpace:Ht,depthBuffer:!1},r=Bm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=qw(s,e,t)}return r}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Fu)}_sceneToCubeUV(e,t,i,r){const a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Om),u.toneMapping=fr,u.autoClear=!1;const p=new Ri({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new rn(new ba,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Om),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;gl(r,v*_,f>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fm[(r-1)%Fm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new rn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const f=[];let v=0;for(let E=0;E<Or;++E){const P=E/x,j=Math.exp(-P*P/2);f.push(j),E===0?v+=j:E<m&&(v+=2*j)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-Os?r-_+Os:0),w=4*(this._cubeSize-y);gl(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Fu)}}function Yw(n){const e=[],t=[],i=[];let r=n;const s=n-Os+1+Um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Os?l=Um[o-n+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,P=w>2?0:-1,j=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(j,x*g*w),_.set(h,m*g*w);const S=[w,w,w,w,w,w];y.set(S,f*g*w)}const A=new $n;A.setAttribute("position",new on(v,x)),A.setAttribute("uv",new on(_,m)),A.setAttribute("faceIndex",new on(y,f)),e.push(A),r>Os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bm(n,e,t){const i=new Zr(n,e,t);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qw(n,e,t){const i=new Float32Array(Or),r=new N(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function zm(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Hm(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function Kw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qd||l===Kd,u=l===io||l===ro;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new km(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new km(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $w(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zw(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){const A=v[_+0],w=v[_+1],E=v[_+2];h.push(A,w,w,E,E,A)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const A=_+0,w=_+1,E=_+2;h.push(A,w,w,E,E,A)}}else return;const m=new(f0(h)?x0:v0)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Qw(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function d(p,g,x){if(x===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,x),t.update(g,s,x)}function h(p,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Jw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function eA(n,e){return n[0]-e[0]}function tA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function nA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==x){let Q=function(){b.dispose(),s.delete(u),u.removeEventListener("dispose",Q)};var p=Q;m!==void 0&&m.texture.dispose();const f=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let E=0;f===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let P=u.attributes.position.count*E,j=1;P>e.maxTextureSize&&(j=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const S=new Float32Array(P*j*4*x),b=new g0(S,P,j,x);b.type=Vn,b.needsUpdate=!0;const te=E*4;for(let D=0;D<x;D++){const Y=y[D],W=A[D],$=w[D],I=P*j*4*D;for(let F=0;F<Y.count;F++){const G=F*te;f===!0&&(o.fromBufferAttribute(Y,F),S[I+G+0]=o.x,S[I+G+1]=o.y,S[I+G+2]=o.z,S[I+G+3]=0),v===!0&&(o.fromBufferAttribute(W,F),S[I+G+4]=o.x,S[I+G+5]=o.y,S[I+G+6]=o.z,S[I+G+7]=0),_===!0&&(o.fromBufferAttribute($,F),S[I+G+8]=o.x,S[I+G+9]=o.y,S[I+G+10]=o.z,S[I+G+11]=$.itemSize===4?o.w:1)}}m={count:x,texture:b,size:new Te(P,j)},s.set(u,m),u.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];const v=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<g;y++){const A=x[y];A[0]=y,A[1]=h[y]}x.sort(tA);for(let y=0;y<8;y++)y<g&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(eA);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const A=a[y],w=A[0],E=A[1];w!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+y)!==m[w]&&u.setAttribute("morphTarget"+y,m[w]),f&&u.getAttribute("morphNormal"+y)!==f[w]&&u.setAttribute("morphNormal"+y,f[w]),r[y]=E,v+=E):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function iA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class T0 extends Ot{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Wr,u!==Wr&&u!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wr&&(i=tr),i===void 0&&u===oo&&(i=Vr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const w0=new Ot,A0=new T0(1,1);A0.compareFunction=u0;const R0=new g0,b0=new BM,C0=new M0,Gm=[],Vm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),jm=new Float32Array(4);function _o(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gm[r];if(s===void 0&&(s=new Float32Array(r),Gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uc(n,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function oA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function aA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function lA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;jm.set(i),n.uniformMatrix2fv(this.addr,!1,jm),Lt(t,i)}}function cA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;Xm.set(i),n.uniformMatrix3fv(this.addr,!1,Xm),Lt(t,i)}}function uA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;Wm.set(i),n.uniformMatrix4fv(this.addr,!1,Wm),Lt(t,i)}}function dA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function hA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function mA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function xA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?A0:w0;t.setTexture2D(e||s,r)}function yA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||b0,r)}function SA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||C0,r)}function MA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||R0,r)}function EA(n){switch(n){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return aA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return dA;case 35667:case 35671:return fA;case 35668:case 35672:return hA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}function TA(n,e){n.uniform1fv(this.addr,e)}function wA(n,e){const t=_o(e,this.size,2);n.uniform2fv(this.addr,t)}function AA(n,e){const t=_o(e,this.size,3);n.uniform3fv(this.addr,t)}function RA(n,e){const t=_o(e,this.size,4);n.uniform4fv(this.addr,t)}function bA(n,e){const t=_o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CA(n,e){const t=_o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LA(n,e){const t=_o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PA(n,e){n.uniform1iv(this.addr,e)}function NA(n,e){n.uniform2iv(this.addr,e)}function IA(n,e){n.uniform3iv(this.addr,e)}function DA(n,e){n.uniform4iv(this.addr,e)}function UA(n,e){n.uniform1uiv(this.addr,e)}function OA(n,e){n.uniform2uiv(this.addr,e)}function FA(n,e){n.uniform3uiv(this.addr,e)}function kA(n,e){n.uniform4uiv(this.addr,e)}function BA(n,e,t){const i=this.cache,r=e.length,s=Uc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||w0,s[o])}function zA(n,e,t){const i=this.cache,r=e.length,s=Uc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||b0,s[o])}function HA(n,e,t){const i=this.cache,r=e.length,s=Uc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||C0,s[o])}function GA(n,e,t){const i=this.cache,r=e.length,s=Uc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||R0,s[o])}function VA(n){switch(n){case 5126:return TA;case 35664:return wA;case 35665:return AA;case 35666:return RA;case 35674:return bA;case 35675:return CA;case 35676:return LA;case 5124:case 35670:return PA;case 35667:case 35671:return NA;case 35668:case 35672:return IA;case 35669:case 35673:return DA;case 5125:return UA;case 36294:return OA;case 36295:return FA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}class WA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=EA(t.type)}}class XA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VA(t.type)}}class jA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function Ym(n,e){n.seq.push(e),n.map[e.id]=e}function YA(n,e,t){const i=n.name,r=i.length;for(Hu.lastIndex=0;;){const s=Hu.exec(i),o=Hu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ym(t,c===void 0?new WA(a,n,e):new XA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jA(a),Ym(t,d)),t=d}}}class Fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);YA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qA=37297;let KA=0;function $A(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ZA(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===hc&&t===fc?i="LinearDisplayP3ToLinearSRGB":e===fc&&t===hc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ht:case Ic:return[i,"LinearTransferOETF"];case tn:case rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Km(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$A(n.getShaderSource(e),o)}else return r}function QA(n,e){const t=ZA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function JA(n,e){let t;switch(e){case YS:t="Linear";break;case qS:t="Reinhard";break;case KS:t="OptimizedCineon";break;case $S:t="ACESFilmic";break;case QS:t="AgX";break;case JS:t="Neutral";break;case ZS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function e1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function t1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function n1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fs(n){return n!==""}function $m(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(n){return n.replace(r1,o1)}const s1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o1(n,e){let t=Ge[e];if(t===void 0){const i=s1.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(t)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(n){return n.replace(a1,l1)}function l1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
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
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function u1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function f1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qv:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case jS:e="ENVMAP_BLENDING_ADD";break}return e}function h1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function p1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=c1(t),c=u1(t),u=d1(t),d=f1(t),h=h1(t),p=t.isWebGL2?"":e1(t),g=t1(t),x=n1(s),m=r.createProgram();let f,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fs).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fs).join(`
`),v.length>0&&(v+=`
`)):(f=[Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),v=[p,Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?Ge.tonemapping_pars_fragment:"",t.toneMapping!==fr?JA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,QA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=tf(o),o=$m(o,t),o=Zm(o,t),a=tf(a),a=$m(a,t),a=Zm(a,t),o=Qm(o),a=Qm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+f+o,A=_+v+a,w=qm(r,r.VERTEX_SHADER,y),E=qm(r,r.FRAGMENT_SHADER,A);r.attachShader(m,w),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(te){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(w).trim(),Y=r.getShaderInfoLog(E).trim();let W=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,E);else{const I=Km(r,w,"vertex"),F=Km(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+Q+`
`+I+`
`+F)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||Y==="")&&($=!1);$&&(te.diagnostics={runnable:W,programLog:Q,vertexShader:{log:D,prefix:f},fragmentShader:{log:Y,prefix:v}})}r.deleteShader(w),r.deleteShader(E),j=new Fl(r,m),S=i1(r,m)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(m,qA)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=E,this}let m1=0;class g1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _1(e),t.set(e,i)),i}}class _1{constructor(e){this.id=m1++,this.code=e,this.usedTimes=0}}function v1(n,e,t,i,r,s,o){const a=new oh,l=new g1,c=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,b,te,Q,D){const Y=Q.fog,W=D.geometry,$=S.isMeshStandardMaterial?Q.environment:null,I=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),F=I&&I.mapping===Nc?I.image.height:null,G=x[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=Z!==void 0?Z.length:0;let be=0;W.morphAttributes.position!==void 0&&(be=1),W.morphAttributes.normal!==void 0&&(be=2),W.morphAttributes.color!==void 0&&(be=3);let z,ee,ue,we;if(G){const et=Jn[G];z=et.vertexShader,ee=et.fragmentShader}else z=S.vertexShader,ee=S.fragmentShader,l.update(S),ue=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const Se=n.getRenderTarget(),me=D.isInstancedMesh===!0,Ze=D.isBatchedMesh===!0,Le=!!S.map,O=!!S.matcap,At=!!I,Ee=!!S.aoMap,Fe=!!S.lightMap,Ae=!!S.bumpMap,Ye=!!S.normalMap,ke=!!S.displacementMap,ze=!!S.emissiveMap,at=!!S.metalnessMap,R=!!S.roughnessMap,M=S.anisotropy>0,X=S.clearcoat>0,q=S.iridescence>0,re=S.sheen>0,J=S.transmission>0,Ne=M&&!!S.anisotropyMap,Re=X&&!!S.clearcoatMap,le=X&&!!S.clearcoatNormalMap,de=X&&!!S.clearcoatRoughnessMap,Ie=q&&!!S.iridescenceMap,oe=q&&!!S.iridescenceThicknessMap,xt=re&&!!S.sheenColorMap,We=re&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ge=!!S.specularColorMap,xe=!!S.specularIntensityMap,C=J&&!!S.transmissionMap,K=J&&!!S.thicknessMap,_e=!!S.gradientMap,L=!!S.alphaMap,se=S.alphaTest>0,k=!!S.alphaHash,ne=!!S.extensions;let fe=fr;S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(fe=n.toneMapping);const je={isWebGL2:d,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:ee,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ze,instancing:me,instancingColor:me&&D.instanceColor!==null,instancingMorph:me&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ht,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:O,envMap:At,envMapMode:At&&I.mapping,envMapCubeUVHeight:F,aoMap:Ee,lightMap:Fe,bumpMap:Ae,normalMap:Ye,displacementMap:p&&ke,emissiveMap:ze,normalMapObjectSpace:Ye&&S.normalMapType===fM,normalMapTangentSpace:Ye&&S.normalMapType===c0,metalnessMap:at,roughnessMap:R,anisotropy:M,anisotropyMap:Ne,clearcoat:X,clearcoatMap:Re,clearcoatNormalMap:le,clearcoatRoughnessMap:de,iridescence:q,iridescenceMap:Ie,iridescenceThicknessMap:oe,sheen:re,sheenColorMap:xt,sheenRoughnessMap:We,specularMap:Me,specularColorMap:ge,specularIntensityMap:xe,transmission:J,transmissionMap:C,thicknessMap:K,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:L,alphaTest:se,alphaHash:k,combine:S.combine,mapUv:Le&&m(S.map.channel),aoMapUv:Ee&&m(S.aoMap.channel),lightMapUv:Fe&&m(S.lightMap.channel),bumpMapUv:Ae&&m(S.bumpMap.channel),normalMapUv:Ye&&m(S.normalMap.channel),displacementMapUv:ke&&m(S.displacementMap.channel),emissiveMapUv:ze&&m(S.emissiveMap.channel),metalnessMapUv:at&&m(S.metalnessMap.channel),roughnessMapUv:R&&m(S.roughnessMap.channel),anisotropyMapUv:Ne&&m(S.anisotropyMap.channel),clearcoatMapUv:Re&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(S.sheenRoughnessMap.channel),specularMapUv:Me&&m(S.specularMap.channel),specularColorMapUv:ge&&m(S.specularColorMap.channel),specularIntensityMapUv:xe&&m(S.specularIntensityMap.channel),transmissionMapUv:C&&m(S.transmissionMap.channel),thicknessMapUv:K&&m(S.thicknessMap.channel),alphaMapUv:L&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ye||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Le||L),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function v(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const te in S.defines)b.push(te),b.push(S.defines[te]);return S.isRawShaderMaterial===!1&&(_(b,S),y(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.instancingMorph&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.normalMapObjectSpace&&a.enable(7),b.normalMapTangentSpace&&a.enable(8),b.clearcoat&&a.enable(9),b.iridescence&&a.enable(10),b.alphaTest&&a.enable(11),b.vertexColors&&a.enable(12),b.vertexAlphas&&a.enable(13),b.vertexUv1s&&a.enable(14),b.vertexUv2s&&a.enable(15),b.vertexUv3s&&a.enable(16),b.vertexTangents&&a.enable(17),b.anisotropy&&a.enable(18),b.alphaHash&&a.enable(19),b.batching&&a.enable(20),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const b=x[S.type];let te;if(b){const Q=Jn[b];te=QM.clone(Q.uniforms)}else te=S.uniforms;return te}function w(S,b){let te;for(let Q=0,D=u.length;Q<D;Q++){const Y=u[Q];if(Y.cacheKey===b){te=Y,++te.usedTimes;break}}return te===void 0&&(te=new p1(n,b,S,s),u.push(te)),te}function E(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:P,programs:u,dispose:j}}function x1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function y1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,x,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||y1),i.length>1&&i.sort(h||eg),r.length>1&&r.sort(h||eg)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function S1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new tg,n.set(i,[o])):r>=s.length?(o=new tg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function M1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new De};break;case"SpotLight":t={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function E1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let T1=0;function w1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function A1(n,e){const t=new M1,i=E1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,o=new Ue,a=new Ue;function l(u,d){let h=0,p=0,g=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let x=0,m=0,f=0,v=0,_=0,y=0,A=0,w=0,E=0,P=0,j=0;u.sort(w1);const S=d===!0?Math.PI:1;for(let te=0,Q=u.length;te<Q;te++){const D=u[te],Y=D.color,W=D.intensity,$=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*W*S,p+=Y.g*W*S,g+=Y.b*W*S;else if(D.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(D.sh.coefficients[F],W);j++}else if(D.isDirectionalLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const G=D.shadow,Z=i.get(D);Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=F,x++}else if(D.isSpotLight){const F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(Y).multiplyScalar(W*S),F.distance=$,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,r.spot[f]=F;const G=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,G.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[f]=G.matrix,D.castShadow){const Z=i.get(D);Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=I,w++}f++}else if(D.isRectAreaLight){const F=t.get(D);F.color.copy(Y).multiplyScalar(W),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=F,v++}else if(D.isPointLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*S),F.distance=D.distance,F.decay=D.decay,D.castShadow){const G=D.shadow,Z=i.get(D);Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=D.shadow.matrix,A++}r.point[m]=F,m++}else if(D.isHemisphereLight){const F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(W*S),F.groundColor.copy(D.groundColor).multiplyScalar(W*S),r.hemi[_]=F,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==x||b.pointLength!==m||b.spotLength!==f||b.rectAreaLength!==v||b.hemiLength!==_||b.numDirectionalShadows!==y||b.numPointShadows!==A||b.numSpotShadows!==w||b.numSpotMaps!==E||b.numLightProbes!==j)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=j,b.directionalLength=x,b.pointLength=m,b.spotLength=f,b.rectAreaLength=v,b.hemiLength=_,b.numDirectionalShadows=y,b.numPointShadows=A,b.numSpotShadows=w,b.numSpotMaps=E,b.numLightProbes=j,r.version=T1++)}function c(u,d){let h=0,p=0,g=0,x=0,m=0;const f=d.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const y=u[v];if(y.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(y.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function ng(n,e){const t=new A1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function R1(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ng(n,e),t.set(s,[l])):o>=a.length?(l=new ng(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class b1 extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C1 extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N1(n,e,t){let i=new ah;const r=new Te,s=new Te,o=new st,a=new b1({depthPacking:dM}),l=new C1,c={},u=t.maxTextureSize,d={[Ii]:pn,[pn]:Ii,[ti]:ti},h=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:L1,fragmentShader:P1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$v;let f=this.type;this.render=function(w,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const j=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),te=n.state;te.setBlending(dr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Q=f!==xi&&this.type===xi,D=f===xi&&this.type!==xi;for(let Y=0,W=w.length;Y<W;Y++){const $=w[Y],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const F=I.getFrameExtents();if(r.multiply(F),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,I.mapSize.y=s.y)),I.map===null||Q===!0||D===!0){const Z=this.type!==xi?{minFilter:Dt,magFilter:Dt}:{};I.map!==null&&I.map.dispose(),I.map=new Zr(r.x,r.y,Z),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const G=I.getViewportCount();for(let Z=0;Z<G;Z++){const ae=I.getViewport(Z);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),te.viewport(o),I.updateMatrices($,Z),i=I.getFrustum(),y(E,P,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===xi&&v(I,P),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(j,S,b)};function v(w,E){const P=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,P,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,P,p,x,null)}function _(w,E,P,j){let S=null;const b=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)S=b;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const te=S.uuid,Q=E.uuid;let D=c[te];D===void 0&&(D={},c[te]=D);let Y=D[Q];Y===void 0&&(Y=S.clone(),D[Q]=Y,E.addEventListener("dispose",A)),S=Y}if(S.visible=E.visible,S.wireframe=E.wireframe,j===xi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const te=n.properties.get(S);te.light=P}return S}function y(w,E,P,j,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===xi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),D=w.material;if(Array.isArray(D)){const Y=Q.groups;for(let W=0,$=Y.length;W<$;W++){const I=Y[W],F=D[I.materialIndex];if(F&&F.visible){const G=_(w,F,j,S);w.onBeforeShadow(n,w,E,P,Q,G,I),n.renderBufferDirect(P,null,Q,G,w,I),w.onAfterShadow(n,w,E,P,Q,G,I)}}}else if(D.visible){const Y=_(w,D,j,S);w.onBeforeShadow(n,w,E,P,Q,Y,null),n.renderBufferDirect(P,null,Q,Y,w,null),w.onAfterShadow(n,w,E,P,Q,Y,null)}}const te=w.children;for(let Q=0,D=te.length;Q<D;Q++)y(te[Q],E,P,j,S)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const j=c[P],S=w.target.uuid;S in j&&(j[S].dispose(),delete j[S])}}}function I1(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const se=new st;let k=null;const ne=new st(0,0,0,0);return{setMask:function(fe){k!==fe&&!L&&(n.colorMask(fe,fe,fe,fe),k=fe)},setLocked:function(fe){L=fe},setClear:function(fe,je,et,rt,yt){yt===!0&&(fe*=rt,je*=rt,et*=rt),se.set(fe,je,et,rt),ne.equals(se)===!1&&(n.clearColor(fe,je,et,rt),ne.copy(se))},reset:function(){L=!1,k=null,ne.set(-1,0,0,0)}}}function s(){let L=!1,se=null,k=null,ne=null;return{setTest:function(fe){fe?me(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(fe){se!==fe&&!L&&(n.depthMask(fe),se=fe)},setFunc:function(fe){if(k!==fe){switch(fe){case kS:n.depthFunc(n.NEVER);break;case BS:n.depthFunc(n.ALWAYS);break;case zS:n.depthFunc(n.LESS);break;case cc:n.depthFunc(n.LEQUAL);break;case HS:n.depthFunc(n.EQUAL);break;case GS:n.depthFunc(n.GEQUAL);break;case VS:n.depthFunc(n.GREATER);break;case WS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ne!==fe&&(n.clearDepth(fe),ne=fe)},reset:function(){L=!1,se=null,k=null,ne=null}}}function o(){let L=!1,se=null,k=null,ne=null,fe=null,je=null,et=null,rt=null,yt=null;return{setTest:function(Qe){L||(Qe?me(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!L&&(n.stencilMask(Qe),se=Qe)},setFunc:function(Qe,lt,Gt){(k!==Qe||ne!==lt||fe!==Gt)&&(n.stencilFunc(Qe,lt,Gt),k=Qe,ne=lt,fe=Gt)},setOp:function(Qe,lt,Gt){(je!==Qe||et!==lt||rt!==Gt)&&(n.stencilOp(Qe,lt,Gt),je=Qe,et=lt,rt=Gt)},setLocked:function(Qe){L=Qe},setClear:function(Qe){yt!==Qe&&(n.clearStencil(Qe),yt=Qe)},reset:function(){L=!1,se=null,k=null,ne=null,fe=null,je=null,et=null,rt=null,yt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,y=null,A=null,w=null,E=null,P=null,j=new De(0,0,0),S=0,b=!1,te=null,Q=null,D=null,Y=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=F>=2);let Z=null,ae={};const be=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),ee=new st().fromArray(be),ue=new st().fromArray(z);function we(L,se,k,ne){const fe=new Uint8Array(4),je=n.createTexture();n.bindTexture(L,je),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<k;et++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(se+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return je}const Se={};Se[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(n.DEPTH_TEST),l.setFunc(cc),ke(!1),ze(Ip),me(n.CULL_FACE),Ae(dr);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ze(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Le(L,se){return p[L]!==se?(n.bindFramebuffer(L,se),p[L]=se,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function O(L,se){let k=x,ne=!1;if(L){k=g.get(se),k===void 0&&(k=[],g.set(se,k));const fe=L.textures;if(k.length!==fe.length||k[0]!==n.COLOR_ATTACHMENT0){for(let je=0,et=fe.length;je<et;je++)k[je]=n.COLOR_ATTACHMENT0+je;k.length=fe.length,ne=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,ne=!0);if(ne)if(t.isWebGL2)n.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function At(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Ee={[Ur]:n.FUNC_ADD,[ES]:n.FUNC_SUBTRACT,[TS]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Fp]=n.MIN,Ee[kp]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Fp]=L.MIN_EXT,Ee[kp]=L.MAX_EXT)}const Fe={[wS]:n.ZERO,[AS]:n.ONE,[RS]:n.SRC_COLOR,[jd]:n.SRC_ALPHA,[IS]:n.SRC_ALPHA_SATURATE,[PS]:n.DST_COLOR,[CS]:n.DST_ALPHA,[bS]:n.ONE_MINUS_SRC_COLOR,[Yd]:n.ONE_MINUS_SRC_ALPHA,[NS]:n.ONE_MINUS_DST_COLOR,[LS]:n.ONE_MINUS_DST_ALPHA,[DS]:n.CONSTANT_COLOR,[US]:n.ONE_MINUS_CONSTANT_COLOR,[OS]:n.CONSTANT_ALPHA,[FS]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(L,se,k,ne,fe,je,et,rt,yt,Qe){if(L===dr){f===!0&&(Ze(n.BLEND),f=!1);return}if(f===!1&&(me(n.BLEND),f=!0),L!==MS){if(L!==v||Qe!==b){if((_!==Ur||w!==Ur)&&(n.blendEquation(n.FUNC_ADD),_=Ur,w=Ur),Qe)switch(L){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dp:n.blendFunc(n.ONE,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Op:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Op:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,A=null,E=null,P=null,j.set(0,0,0),S=0,v=L,b=Qe}return}fe=fe||se,je=je||k,et=et||ne,(se!==_||fe!==w)&&(n.blendEquationSeparate(Ee[se],Ee[fe]),_=se,w=fe),(k!==y||ne!==A||je!==E||et!==P)&&(n.blendFuncSeparate(Fe[k],Fe[ne],Fe[je],Fe[et]),y=k,A=ne,E=je,P=et),(rt.equals(j)===!1||yt!==S)&&(n.blendColor(rt.r,rt.g,rt.b,yt),j.copy(rt),S=yt),v=L,b=!1}function Ye(L,se){L.side===ti?Ze(n.CULL_FACE):me(n.CULL_FACE);let k=L.side===pn;se&&(k=!k),ke(k),L.blending===Xs&&L.transparent===!1?Ae(dr):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ne=L.stencilWrite;c.setTest(ne),ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),R(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){te!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),te=L)}function ze(L){L!==yS?(me(n.CULL_FACE),L!==Q&&(L===Ip?n.cullFace(n.BACK):L===SS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),Q=L}function at(L){L!==D&&(I&&n.lineWidth(L),D=L)}function R(L,se,k){L?(me(n.POLYGON_OFFSET_FILL),(Y!==se||W!==k)&&(n.polygonOffset(se,k),Y=se,W=k)):Ze(n.POLYGON_OFFSET_FILL)}function M(L){L?me(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function X(L){L===void 0&&(L=n.TEXTURE0+$-1),Z!==L&&(n.activeTexture(L),Z=L)}function q(L,se,k){k===void 0&&(Z===null?k=n.TEXTURE0+$-1:k=Z);let ne=ae[k];ne===void 0&&(ne={type:void 0,texture:void 0},ae[k]=ne),(ne.type!==L||ne.texture!==se)&&(Z!==k&&(n.activeTexture(k),Z=k),n.bindTexture(L,se||Se[L]),ne.type=L,ne.texture=se)}function re(){const L=ae[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){ee.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function xe(L){ue.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function C(L,se){let k=d.get(se);k===void 0&&(k=new WeakMap,d.set(se,k));let ne=k.get(L);ne===void 0&&(ne=n.getUniformBlockIndex(se,L.name),k.set(L,ne))}function K(L,se){const ne=d.get(se).get(L);u.get(se)!==ne&&(n.uniformBlockBinding(se,ne,L.__bindingPointIndex),u.set(se,ne))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,ae={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,y=null,A=null,w=null,E=null,P=null,j=new De(0,0,0),S=0,b=!1,te=null,Q=null,D=null,Y=null,W=null,ee.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:Ze,bindFramebuffer:Le,drawBuffers:O,useProgram:At,setBlending:Ae,setMaterial:Ye,setFlipSided:ke,setCullFace:ze,setLineWidth:at,setPolygonOffset:R,setScissorTest:M,activeTexture:X,bindTexture:q,unbindTexture:re,compressedTexImage2D:J,compressedTexImage3D:Ne,texImage2D:We,texImage3D:Me,updateUBOMapping:C,uniformBlockBinding:K,texStorage2D:oe,texStorage3D:xt,texSubImage2D:Re,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:Ie,scissor:ge,viewport:xe,reset:_e}}function D1(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Te,d=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return g?new OffscreenCanvas(R,M):Sa("canvas")}function m(R,M,X,q){let re=1;const J=at(R);if((J.width>q||J.height>q)&&(re=q/Math.max(J.width,J.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ne=M?mc:Math.floor,Re=Ne(re*J.width),le=Ne(re*J.height);h===void 0&&(h=x(Re,le));const de=X?x(Re,le):h;return de.width=Re,de.height=le,de.getContext("2d").drawImage(R,0,0,Re,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Re+"x"+le+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function f(R){const M=at(R);return ef(M.width)&&ef(M.height)}function v(R){return a?!1:R.wrapS!==Cn||R.wrapT!==Cn||R.minFilter!==Dt&&R.minFilter!==qt}function _(R,M){return R.generateMipmaps&&M&&R.minFilter!==Dt&&R.minFilter!==qt}function y(R){n.generateMipmap(R)}function A(R,M,X,q,re=!1){if(a===!1)return M;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===n.RED&&(X===n.FLOAT&&(J=n.R32F),X===n.HALF_FLOAT&&(J=n.R16F),X===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.R8UI),X===n.UNSIGNED_SHORT&&(J=n.R16UI),X===n.UNSIGNED_INT&&(J=n.R32UI),X===n.BYTE&&(J=n.R8I),X===n.SHORT&&(J=n.R16I),X===n.INT&&(J=n.R32I)),M===n.RG&&(X===n.FLOAT&&(J=n.RG32F),X===n.HALF_FLOAT&&(J=n.RG16F),X===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RG8UI),X===n.UNSIGNED_SHORT&&(J=n.RG16UI),X===n.UNSIGNED_INT&&(J=n.RG32UI),X===n.BYTE&&(J=n.RG8I),X===n.SHORT&&(J=n.RG16I),X===n.INT&&(J=n.RG32I)),M===n.RGBA){const Ne=re?dc:Je.getTransfer(q);X===n.FLOAT&&(J=n.RGBA32F),X===n.HALF_FLOAT&&(J=n.RGBA16F),X===n.UNSIGNED_BYTE&&(J=Ne===ut?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(R,M,X){return _(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Dt&&R.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){return R===Dt||R===$d||R===Es?n.NEAREST:n.LINEAR}function P(R){const M=R.target;M.removeEventListener("dispose",P),S(M),M.isVideoTexture&&d.delete(M)}function j(R){const M=R.target;M.removeEventListener("dispose",j),te(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const X=R.source,q=p.get(X);if(q){const re=q[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(R),Object.keys(q).length===0&&p.delete(X)}i.remove(R)}function b(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const X=R.source,q=p.get(X);delete q[M.__cacheKey],o.memory.textures--}function te(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let re=0;re<M.__webglFramebuffer[q].length;re++)n.deleteFramebuffer(M.__webglFramebuffer[q][re]);else n.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)n.deleteFramebuffer(M.__webglFramebuffer[q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=R.textures;for(let q=0,re=X.length;q<re;q++){const J=i.get(X[q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(X[q])}i.remove(R)}let Q=0;function D(){Q=0}function Y(){const R=Q;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Q+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const X=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(X,R,M);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+M)}function I(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ue(X,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+M)}function F(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ue(X,R,M);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+M)}function G(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){we(X,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+M)}const Z={[so]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},ae={[Dt]:n.NEAREST,[$d]:n.NEAREST_MIPMAP_NEAREST,[Es]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Ol]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},be={[hM]:n.NEVER,[xM]:n.ALWAYS,[pM]:n.LESS,[u0]:n.LEQUAL,[mM]:n.EQUAL,[vM]:n.GEQUAL,[gM]:n.GREATER,[_M]:n.NOTEQUAL};function z(R,M,X){if(M.type===Vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===Ol||M.magFilter===Es||M.magFilter===wi||M.minFilter===qt||M.minFilter===Ol||M.minFilter===Es||M.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(n.texParameteri(R,n.TEXTURE_WRAP_S,Z[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ae[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ae[M.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Cn||M.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,E(M.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Dt&&M.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dt||M.minFilter!==Es&&M.minFilter!==wi||M.type===Vn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===xa&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ee(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const q=M.source;let re=p.get(q);re===void 0&&(re={},p.set(q,re));const J=W(M);if(J!==R.__cacheKey){re[J]===void 0&&(re[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[J].usedTimes++;const Ne=re[R.__cacheKey];Ne!==void 0&&(re[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&b(M)),R.__cacheKey=J,R.__webglTexture=re[J].texture}return X}function ue(R,M,X){let q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=n.TEXTURE_3D);const re=ee(R,M),J=M.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+X);const Ne=i.get(J);if(J.version!==Ne.__version||re===!0){t.activeTexture(n.TEXTURE0+X);const Re=Je.getPrimaries(Je.workingColorSpace),le=M.colorSpace===Qi?null:Je.getPrimaries(M.colorSpace),de=M.colorSpace===Qi||Re===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ie=v(M)&&f(M.image)===!1;let oe=m(M.image,Ie,!1,r.maxTextureSize);oe=ze(M,oe);const xt=f(oe)||a,We=s.convert(M.format,M.colorSpace);let Me=s.convert(M.type),ge=A(M.internalFormat,We,Me,M.colorSpace,M.isVideoTexture);z(q,M,xt);let xe;const C=M.mipmaps,K=a&&M.isVideoTexture!==!0&&ge!==a0,_e=Ne.__version===void 0||re===!0,L=J.dataReady,se=w(M,oe,xt);if(M.isDepthTexture)ge=n.DEPTH_COMPONENT,a?M.type===Vn?ge=n.DEPTH_COMPONENT32F:M.type===tr?ge=n.DEPTH_COMPONENT24:M.type===Vr?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:M.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Wr&&ge===n.DEPTH_COMPONENT&&M.type!==ih&&M.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=tr,Me=s.convert(M.type)),M.format===oo&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,M.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vr,Me=s.convert(M.type))),_e&&(K?t.texStorage2D(n.TEXTURE_2D,1,ge,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ge,oe.width,oe.height,0,We,Me,null));else if(M.isDataTexture)if(C.length>0&&xt){K&&_e&&t.texStorage2D(n.TEXTURE_2D,se,ge,C[0].width,C[0].height);for(let k=0,ne=C.length;k<ne;k++)xe=C[k],K?L&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,xe.width,xe.height,We,Me,xe.data):t.texImage2D(n.TEXTURE_2D,k,ge,xe.width,xe.height,0,We,Me,xe.data);M.generateMipmaps=!1}else K?(_e&&t.texStorage2D(n.TEXTURE_2D,se,ge,oe.width,oe.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,We,Me,oe.data)):t.texImage2D(n.TEXTURE_2D,0,ge,oe.width,oe.height,0,We,Me,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){K&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,ge,C[0].width,C[0].height,oe.depth);for(let k=0,ne=C.length;k<ne;k++)xe=C[k],M.format!==Ln?We!==null?K?L&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,xe.width,xe.height,oe.depth,We,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,ge,xe.width,xe.height,oe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,xe.width,xe.height,oe.depth,We,Me,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,ge,xe.width,xe.height,oe.depth,0,We,Me,xe.data)}else{K&&_e&&t.texStorage2D(n.TEXTURE_2D,se,ge,C[0].width,C[0].height);for(let k=0,ne=C.length;k<ne;k++)xe=C[k],M.format!==Ln?We!==null?K?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,xe.width,xe.height,We,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,k,ge,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?L&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,xe.width,xe.height,We,Me,xe.data):t.texImage2D(n.TEXTURE_2D,k,ge,xe.width,xe.height,0,We,Me,xe.data)}else if(M.isDataArrayTexture)K?(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,ge,oe.width,oe.height,oe.depth),L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,We,Me,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,oe.width,oe.height,oe.depth,0,We,Me,oe.data);else if(M.isData3DTexture)K?(_e&&t.texStorage3D(n.TEXTURE_3D,se,ge,oe.width,oe.height,oe.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,We,Me,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ge,oe.width,oe.height,oe.depth,0,We,Me,oe.data);else if(M.isFramebufferTexture){if(_e)if(K)t.texStorage2D(n.TEXTURE_2D,se,ge,oe.width,oe.height);else{let k=oe.width,ne=oe.height;for(let fe=0;fe<se;fe++)t.texImage2D(n.TEXTURE_2D,fe,ge,k,ne,0,We,Me,null),k>>=1,ne>>=1}}else if(C.length>0&&xt){if(K&&_e){const k=at(C[0]);t.texStorage2D(n.TEXTURE_2D,se,ge,k.width,k.height)}for(let k=0,ne=C.length;k<ne;k++)xe=C[k],K?L&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,We,Me,xe):t.texImage2D(n.TEXTURE_2D,k,ge,We,Me,xe);M.generateMipmaps=!1}else if(K){if(_e){const k=at(oe);t.texStorage2D(n.TEXTURE_2D,se,ge,k.width,k.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,Me,oe)}else t.texImage2D(n.TEXTURE_2D,0,ge,We,Me,oe);_(M,xt)&&y(q),Ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function we(R,M,X){if(M.image.length!==6)return;const q=ee(R,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const J=i.get(re);if(re.version!==J.__version||q===!0){t.activeTexture(n.TEXTURE0+X);const Ne=Je.getPrimaries(Je.workingColorSpace),Re=M.colorSpace===Qi?null:Je.getPrimaries(M.colorSpace),le=M.colorSpace===Qi||Ne===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Ie=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!de&&!Ie?oe[k]=m(M.image[k],!1,!0,r.maxCubemapSize):oe[k]=Ie?M.image[k].image:M.image[k],oe[k]=ze(M,oe[k]);const xt=oe[0],We=f(xt)||a,Me=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),xe=A(M.internalFormat,Me,ge,M.colorSpace),C=a&&M.isVideoTexture!==!0,K=J.__version===void 0||q===!0,_e=re.dataReady;let L=w(M,xt,We);z(n.TEXTURE_CUBE_MAP,M,We);let se;if(de){C&&K&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,xe,xt.width,xt.height);for(let k=0;k<6;k++){se=oe[k].mipmaps;for(let ne=0;ne<se.length;ne++){const fe=se[ne];M.format!==Ln?Me!==null?C?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,fe.width,fe.height,Me,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,fe.width,fe.height,Me,ge,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,xe,fe.width,fe.height,0,Me,ge,fe.data)}}}else{if(se=M.mipmaps,C&&K){se.length>0&&L++;const k=at(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,L,xe,k.width,k.height)}for(let k=0;k<6;k++)if(Ie){C?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,Me,ge,oe[k].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,xe,oe[k].width,oe[k].height,0,Me,ge,oe[k].data);for(let ne=0;ne<se.length;ne++){const je=se[ne].image[k].image;C?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,je.width,je.height,Me,ge,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,xe,je.width,je.height,0,Me,ge,je.data)}}else{C?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Me,ge,oe[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,xe,Me,ge,oe[k]);for(let ne=0;ne<se.length;ne++){const fe=se[ne];C?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,Me,ge,fe.image[k]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,xe,Me,ge,fe.image[k])}}}_(M,We)&&y(n.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Se(R,M,X,q,re,J){const Ne=s.convert(X.format,X.colorSpace),Re=s.convert(X.type),le=A(X.internalFormat,Ne,Re,X.colorSpace);if(!i.get(M).__hasExternalTextures){const Ie=Math.max(1,M.width>>J),oe=Math.max(1,M.height>>J);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,J,le,Ie,oe,M.depth,0,Ne,Re,null):t.texImage2D(re,J,le,Ie,oe,0,Ne,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ye(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,re,i.get(X).__webglTexture,0,Ae(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,re,i.get(X).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(R,M,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||Ye(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===Vn?q=n.DEPTH_COMPONENT32F:re.type===tr&&(q=n.DEPTH_COMPONENT24));const J=Ae(M);Ye(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,q,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,q,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const q=Ae(M);X&&Ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,M.width,M.height):Ye(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const q=M.textures;for(let re=0;re<q.length;re++){const J=q[re],Ne=s.convert(J.format,J.colorSpace),Re=s.convert(J.type),le=A(J.internalFormat,Ne,Re,J.colorSpace),de=Ae(M);X&&Ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,le,M.width,M.height):Ye(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,le,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,le,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const q=i.get(M.depthTexture).__webglTexture,re=Ae(M);if(M.depthTexture.format===Wr)Ye(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(M.depthTexture.format===oo)Ye(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Le(R){const M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ze(M.__webglFramebuffer,R)}else if(X){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]=n.createRenderbuffer(),me(M.__webglDepthbuffer[q],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),me(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(R,M,X){const q=i.get(R);M!==void 0&&Se(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Le(R)}function At(R){const M=R.texture,X=i.get(R),q=i.get(M);R.addEventListener("dispose",j);const re=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ne=re.length>1,Re=f(R)||a;if(Ne||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=M.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[le]=[];for(let de=0;de<M.mipmaps.length;de++)X.__webglFramebuffer[le][de]=n.createFramebuffer()}else X.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)X.__webglFramebuffer[le]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ne)if(r.drawBuffers)for(let le=0,de=re.length;le<de;le++){const Ie=i.get(re[le]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ye(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const de=re[le];X.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[le]);const Ie=s.convert(de.format,de.colorSpace),oe=s.convert(de.type),xt=A(de.internalFormat,Ie,oe,de.colorSpace,R.isXRRenderTarget===!0),We=Ae(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,xt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,X.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),me(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),z(n.TEXTURE_CUBE_MAP,M,Re);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Se(X.__webglFramebuffer[le][de],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else Se(X.__webglFramebuffer[le],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(M,Re)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let le=0,de=re.length;le<de;le++){const Ie=re[le],oe=i.get(Ie);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),z(n.TEXTURE_2D,Ie,Re),Se(X.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),_(Ie,Re)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,q.__webglTexture),z(le,M,Re),a&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Se(X.__webglFramebuffer[de],R,M,n.COLOR_ATTACHMENT0,le,de);else Se(X.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,le,0);_(M,Re)&&y(le),t.unbindTexture()}R.depthBuffer&&Le(R)}function Ee(R){const M=f(R)||a,X=R.textures;for(let q=0,re=X.length;q<re;q++){const J=X[q];if(_(J,M)){const Ne=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(J).__webglTexture;t.bindTexture(Ne,Re),y(Ne),t.unbindTexture()}}}function Fe(R){if(a&&R.samples>0&&Ye(R)===!1){const M=R.textures,X=R.width,q=R.height;let re=n.COLOR_BUFFER_BIT;const J=[],Ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(R),le=M.length>1;if(le)for(let de=0;de<M.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let de=0;de<M.length;de++){J.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&J.push(Ne);const Ie=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Ie===!1&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[de]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),le){const oe=i.get(M[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,X,q,0,0,X,q,re,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<M.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Re.__webglColorRenderbuffer[de]);const Ie=i.get(M[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Ae(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ze(R,M){const X=R.colorSpace,q=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Jd||X!==Ht&&X!==Qi&&(Je.getTransfer(X)===ut?a===!1?e.has("EXT_sRGB")===!0&&q===Ln?(R.format=Jd,R.minFilter=qt,R.generateMipmaps=!1):M=p0.sRGBToLinear(M):(q!==Ln||re!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=G,this.rebindTextures=O,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ye}function U1(n,e,t){const i=t.isWebGL2;function r(s,o=Qi){let a;const l=Je.getTransfer(o);if(s===hr)return n.UNSIGNED_BYTE;if(s===t0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===n0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===tM)return n.BYTE;if(s===nM)return n.SHORT;if(s===ih)return n.UNSIGNED_SHORT;if(s===e0)return n.INT;if(s===tr)return n.UNSIGNED_INT;if(s===Vn)return n.FLOAT;if(s===xa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===iM)return n.ALPHA;if(s===Ln)return n.RGBA;if(s===rM)return n.LUMINANCE;if(s===sM)return n.LUMINANCE_ALPHA;if(s===Wr)return n.DEPTH_COMPONENT;if(s===oo)return n.DEPTH_STENCIL;if(s===Jd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===i0)return n.RED;if(s===r0)return n.RED_INTEGER;if(s===oM)return n.RG;if(s===s0)return n.RG_INTEGER;if(s===o0)return n.RGBA_INTEGER;if(s===fu||s===hu||s===pu||s===mu)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zp||s===Hp||s===Gp||s===Vp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===a0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wp||s===Xp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wp)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jp||s===Yp||s===qp||s===Kp||s===$p||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im||s===rm||s===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gu||s===om||s===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gu)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===aM||s===lm||s===cm||s===um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class O1 extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zr extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new _r({extensions:{fragDepth:!0},vertexShader:k1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rn(new Dc(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class H1 extends ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const x=new z1,m=t.getContextAttributes();let f=null,v=null;const _=[],y=[],A=new Te;let w=null;const E=new nn;E.layers.enable(1),E.viewport=new st;const P=new nn;P.layers.enable(2),P.viewport=new st;const j=[E,P],S=new O1;S.layers.enable(1),S.layers.enable(2);let b=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ee=_[z];return ee===void 0&&(ee=new Gu,_[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=_[z];return ee===void 0&&(ee=new Gu,_[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=_[z];return ee===void 0&&(ee=new Gu,_[z]=ee),ee.getHandSpace()};function Q(z){const ee=y.indexOf(z.inputSource);if(ee===-1)return;const ue=_[ee];ue!==void 0&&(ue.update(z.inputSource,z.frame,c||o),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function D(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",Y);for(let z=0;z<_.length;z++){const ee=y[z];ee!==null&&(y[z]=null,_[z].disconnect(ee))}b=null,te=null,x.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,v=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",D),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Zr(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ue=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?oo:Wr,ue=m.stencil?Vr:tr);const Se={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zr(h.textureWidth,h.textureHeight,{format:Ln,type:hr,depthTexture:new T0(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const me=e.properties.get(v);me.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(z){for(let ee=0;ee<z.removed.length;ee++){const ue=z.removed[ee],we=y.indexOf(ue);we>=0&&(y[we]=null,_[we].disconnect(ue))}for(let ee=0;ee<z.added.length;ee++){const ue=z.added[ee];let we=y.indexOf(ue);if(we===-1){for(let me=0;me<_.length;me++)if(me>=y.length){y.push(ue),we=me;break}else if(y[me]===null){y[me]=ue,we=me;break}if(we===-1)break}const Se=_[we];Se&&Se.connect(ue)}}const W=new N,$=new N;function I(z,ee,ue){W.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const we=W.distanceTo($),Se=ee.projectionMatrix.elements,me=ue.projectionMatrix.elements,Ze=Se[14]/(Se[10]-1),Le=Se[14]/(Se[10]+1),O=(Se[9]+1)/Se[5],At=(Se[9]-1)/Se[5],Ee=(Se[8]-1)/Se[0],Fe=(me[8]+1)/me[0],Ae=Ze*Ee,Ye=Ze*Fe,ke=we/(-Ee+Fe),ze=ke*-Ee;ee.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ze),z.translateZ(ke),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const at=Ze+ke,R=Le+ke,M=Ae-ze,X=Ye+(we-ze),q=O*Le/R*at,re=At*Le/R*at;z.projectionMatrix.makePerspective(M,X,q,re,at,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function F(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;x.texture!==null&&(z.near=x.depthNear,z.far=x.depthFar),S.near=P.near=E.near=z.near,S.far=P.far=E.far=z.far,(b!==S.near||te!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,te=S.far,E.near=b,E.far=te,P.near=b,P.far=te,E.updateProjectionMatrix(),P.updateProjectionMatrix(),z.updateProjectionMatrix());const ee=z.parent,ue=S.cameras;F(S,ee);for(let we=0;we<ue.length;we++)F(ue[we],ee);ue.length===2?I(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),G(z,S,ee)};function G(z,ee,ue){ue===null?z.matrix.copy(ee.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(ee.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=lo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null};let Z=null;function ae(z,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let we=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,we=!0);for(let me=0;me<ue.length;me++){const Ze=ue[me];let Le=null;if(p!==null)Le=p.getViewport(Ze);else{const At=d.getViewSubImage(h,Ze);Le=At.viewport,me===0&&(e.setRenderTargetTextures(v,At.colorTexture,h.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(v))}let O=j[me];O===void 0&&(O=new nn,O.layers.enable(me),O.viewport=new st,j[me]=O),O.matrix.fromArray(Ze.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Ze.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Le.x,Le.y,Le.width,Le.height),me===0&&(S.matrix.copy(O.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),we===!0&&S.cameras.push(O)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const me=d.getDepthInformation(ue[0]);me&&me.isValid&&me.texture&&x.init(e,me,r.renderState)}}for(let ue=0;ue<_.length;ue++){const we=y[ue],Se=_[ue];we!==null&&Se!==void 0&&Se.update(we,ee,c||o)}x.render(e,S),Z&&Z(z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const be=new E0;be.setAnimationLoop(ae),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}const Cr=new ai,G1=new Ue;function V1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,y0(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,y=v.envMapRotation;if(_&&(m.envMap.value=_,Cr.copy(y),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Cr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*A,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function u(v){const _=d();v.__bindingPointIndex=_;const y=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,E=y.length;w<E;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let j=0,S=P.length;j<S;j++){const b=P[j];if(p(b,w,j,A)===!0){const te=b.__offset,Q=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let Y=0;Y<Q.length;Y++){const W=Q[Y],$=x(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,te+D,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,A){const w=v.value,E=_+"_"+y;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const P=A[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const _=v.uniforms;let y=0;const A=16;for(let E=0,P=_.length;E<P;E++){const j=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,b=j.length;S<b;S++){const te=j[S],Q=Array.isArray(te.value)?te.value:[te.value];for(let D=0,Y=Q.length;D<Y;D++){const W=Q[D],$=x(W),I=y%A;I!==0&&A-I<$.boundary&&(y+=A-I),te.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=y,y+=$.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class L0{constructor(e={}){const{canvas:t=DM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const _=this;let y=!1,A=0,w=0,E=null,P=-1,j=null;const S=new st,b=new st;let te=null;const Q=new De(0);let D=0,Y=t.width,W=t.height,$=1,I=null,F=null;const G=new st(0,0,Y,W),Z=new st(0,0,Y,W);let ae=!1;const be=new ah;let z=!1,ee=!1,ue=null;const we=new Ue,Se=new Te,me=new N,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return E===null?$:1}let O=i;function At(T,U){for(let H=0;H<T.length;H++){const V=T[H],B=t.getContext(V,U);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),O=At(U,T),O===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Fe,Ae,Ye,ke,ze,at,R,M,X,q,re,J,Ne,Re,le,de,Ie,oe,xt,We,Me,ge,xe;function C(){Ee=new $w(O),Fe=new Ww(O,Ee,e),Ee.init(Fe),Me=new U1(O,Ee,Fe),Ae=new I1(O,Ee,Fe),Ye=new Jw(O),ke=new x1,ze=new D1(O,Ee,Ae,ke,Fe,Me,Ye),at=new jw(_),R=new Kw(_),M=new sE(O,Fe),ge=new Gw(O,Ee,M,Fe),X=new Zw(O,M,Ye,ge),q=new iA(O,X,M,Ye),oe=new nA(O,Fe,ze),le=new Xw(ke),re=new v1(_,at,R,Ee,Fe,ge,le),J=new V1(_,ke),Ne=new S1,Re=new R1(Ee,Fe),Ie=new Hw(_,at,R,Ae,q,h,l),de=new N1(_,q,Fe),xe=new W1(O,Ye,Fe,Ae),xt=new Vw(O,Ee,Ye,Fe),We=new Qw(O,Ee,Ye,Fe),Ye.programs=re.programs,_.capabilities=Fe,_.extensions=Ee,_.properties=ke,_.renderLists=Ne,_.shadowMap=de,_.state=Ae,_.info=Ye}C();const K=new H1(_,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(Y,W,!1))},this.getSize=function(T){return T.set(Y,W)},this.setSize=function(T,U,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,W=U,t.width=Math.floor(T*$),t.height=Math.floor(U*$),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Y*$,W*$).floor()},this.setDrawingBufferSize=function(T,U,H){Y=T,W=U,$=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,U,H,V){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,U,H,V),Ae.viewport(S.copy(G).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,U,H,V){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,U,H,V),Ae.scissor(b.copy(Z).multiplyScalar($).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Ae.setScissorTest(ae=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,U=!0,H=!0){let V=0;if(T){let B=!1;if(E!==null){const he=E.texture.format;B=he===o0||he===s0||he===r0}if(B){const he=E.texture.type,ye=he===hr||he===tr||he===ih||he===Vr||he===t0||he===n0,Ce=Ie.getClearColor(),Pe=Ie.getClearAlpha(),Xe=Ce.r,Oe=Ce.g,Be=Ce.b;ye?(p[0]=Xe,p[1]=Oe,p[2]=Be,p[3]=Pe,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Xe,g[1]=Oe,g[2]=Be,g[3]=Pe,O.clearBufferiv(O.COLOR,0,g))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ne.dispose(),Re.dispose(),ke.dispose(),at.dispose(),R.dispose(),q.dispose(),ge.dispose(),xe.dispose(),re.dispose(),K.dispose(),K.removeEventListener("sessionstart",yt),K.removeEventListener("sessionend",Qe),ue&&(ue.dispose(),ue=null),lt.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Ye.autoReset,U=de.enabled,H=de.autoUpdate,V=de.needsUpdate,B=de.type;C(),Ye.autoReset=T,de.enabled=U,de.autoUpdate=H,de.needsUpdate=V,de.type=B}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function k(T){const U=T.target;U.removeEventListener("dispose",k),ne(U)}function ne(T){fe(T),ke.remove(T)}function fe(T){const U=ke.get(T).programs;U!==void 0&&(U.forEach(function(H){re.releaseProgram(H)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,V,B,he){U===null&&(U=Ze);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Ce=G0(T,U,H,V,B);Ae.setMaterial(V,ye);let Pe=H.index,Xe=1;if(V.wireframe===!0){if(Pe=X.getWireframeAttribute(H),Pe===void 0)return;Xe=2}const Oe=H.drawRange,Be=H.attributes.position;let Mt=Oe.start*Xe,mn=(Oe.start+Oe.count)*Xe;he!==null&&(Mt=Math.max(Mt,he.start*Xe),mn=Math.min(mn,(he.start+he.count)*Xe)),Pe!==null?(Mt=Math.max(Mt,0),mn=Math.min(mn,Pe.count)):Be!=null&&(Mt=Math.max(Mt,0),mn=Math.min(mn,Be.count));const Pt=mn-Mt;if(Pt<0||Pt===1/0)return;ge.setup(B,V,Ce,H,Pe);let di,mt=xt;if(Pe!==null&&(di=M.get(Pe),mt=We,mt.setIndex(di)),B.isMesh)V.wireframe===!0?(Ae.setLineWidth(V.wireframeLinewidth*Le()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(B.isLine){let He=V.linewidth;He===void 0&&(He=1),Ae.setLineWidth(He*Le()),B.isLineSegments?mt.setMode(O.LINES):B.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else B.isPoints?mt.setMode(O.POINTS):B.isSprite&&mt.setMode(O.TRIANGLES);if(B.isBatchedMesh)mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)mt.renderInstances(Mt,Pt,B.count);else if(H.isInstancedBufferGeometry){const He=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Oc=Math.min(H.instanceCount,He);mt.renderInstances(Mt,Pt,Oc)}else mt.render(Mt,Pt)};function je(T,U,H){T.transparent===!0&&T.side===ti&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Na(T,U,H),T.side=Ii,T.needsUpdate=!0,Na(T,U,H),T.side=ti):Na(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),m=Re.get(H),m.init(),v.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==H&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(_._useLegacyLights);const V=new Set;return T.traverse(function(B){const he=B.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const Ce=he[ye];je(Ce,H,B),V.add(Ce)}else je(he,H,B),V.add(he)}),v.pop(),m=null,V},this.compileAsync=function(T,U,H=null){const V=this.compile(T,U,H);return new Promise(B=>{function he(){if(V.forEach(function(ye){ke.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){B(T);return}setTimeout(he,10)}Ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let et=null;function rt(T){et&&et(T)}function yt(){lt.stop()}function Qe(){lt.start()}const lt=new E0;lt.setAnimationLoop(rt),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(T){et=T,K.setAnimationLoop(T),T===null?lt.stop():lt.start()},K.addEventListener("sessionstart",yt),K.addEventListener("sessionend",Qe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,E),m=Re.get(T,v.length),m.init(),v.push(m),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),be.setFromProjectionMatrix(we),ee=this.localClippingEnabled,z=le.init(this.clippingPlanes,ee),x=Ne.get(T,f.length),x.init(),f.push(x),Gt(T,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(I,F),this.info.render.frame++,z===!0&&le.beginShadows();const H=m.state.shadowsArray;if(de.render(H,T,U),z===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1)&&Ie.render(x,T),m.setupLights(_._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let B=0,he=V.length;B<he;B++){const ye=V[B];Sr(x,T,ye,ye.viewport)}}else Sr(x,T,U);E!==null&&(ze.updateMultisampleRenderTarget(E),ze.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(_,T,U),ge.resetDefaultState(),P=-1,j=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Gt(T,U,H,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||be.intersectsSprite(T)){V&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const ye=q.update(T),Ce=T.material;Ce.visible&&x.push(T,ye,Ce,H,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||be.intersectsObject(T))){const ye=q.update(T),Ce=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),me.copy(ye.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Ce)){const Pe=ye.groups;for(let Xe=0,Oe=Pe.length;Xe<Oe;Xe++){const Be=Pe[Xe],Mt=Ce[Be.materialIndex];Mt&&Mt.visible&&x.push(T,ye,Mt,H,me.z,Be)}}else Ce.visible&&x.push(T,ye,Ce,H,me.z,null)}}const he=T.children;for(let ye=0,Ce=he.length;ye<Ce;ye++)Gt(he[ye],U,H,V)}function Sr(T,U,H,V){const B=T.opaque,he=T.transmissive,ye=T.transparent;m.setupLightsView(H),z===!0&&le.setGlobalState(_.clippingPlanes,H),he.length>0&&La(B,he,U,H),V&&Ae.viewport(S.copy(V)),B.length>0&&Pa(B,U,H),he.length>0&&Pa(he,U,H),ye.length>0&&Pa(ye,U,H),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function La(T,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const he=Fe.isWebGL2;ue===null&&(ue=new Zr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?xa:hr,minFilter:wi,samples:he?4:0})),_.getDrawingBufferSize(Se),he?ue.setSize(Se.x,Se.y):ue.setSize(mc(Se.x),mc(Se.y));const ye=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(Q),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Ce=_.toneMapping;_.toneMapping=fr,Pa(T,H,V),ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue);let Pe=!1;for(let Xe=0,Oe=U.length;Xe<Oe;Xe++){const Be=U[Xe],Mt=Be.object,mn=Be.geometry,Pt=Be.material,di=Be.group;if(Pt.side===ti&&Mt.layers.test(V.layers)){const mt=Pt.side;Pt.side=pn,Pt.needsUpdate=!0,xh(Mt,H,V,mn,Pt,di),Pt.side=mt,Pt.needsUpdate=!0,Pe=!0}}Pe===!0&&(ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue)),_.setRenderTarget(ye),_.setClearColor(Q,D),_.toneMapping=Ce}function Pa(T,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,he=T.length;B<he;B++){const ye=T[B],Ce=ye.object,Pe=ye.geometry,Xe=V===null?ye.material:V,Oe=ye.group;Ce.layers.test(H.layers)&&xh(Ce,U,H,Pe,Xe,Oe)}}function xh(T,U,H,V,B,he){T.onBeforeRender(_,U,H,V,B,he),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,U,H,V,T,he),B.transparent===!0&&B.side===ti&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,_.renderBufferDirect(H,U,V,B,T,he),B.side=Ii,B.needsUpdate=!0,_.renderBufferDirect(H,U,V,B,T,he),B.side=ti):_.renderBufferDirect(H,U,V,B,T,he),T.onAfterRender(_,U,H,V,B,he)}function Na(T,U,H){U.isScene!==!0&&(U=Ze);const V=ke.get(T),B=m.state.lights,he=m.state.shadowsArray,ye=B.state.version,Ce=re.getParameters(T,B.state,he,U,H),Pe=re.getProgramCacheKey(Ce);let Xe=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?R:at).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",k),Xe=new Map,V.programs=Xe);let Oe=Xe.get(Pe);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===ye)return Sh(T,Ce),Oe}else Ce.uniforms=re.getUniforms(T),T.onBuild(H,Ce,_),T.onBeforeCompile(Ce,_),Oe=re.acquireProgram(Ce,Pe),Xe.set(Pe,Oe),V.uniforms=Ce.uniforms;const Be=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=le.uniform),Sh(T,Ce),V.needsLights=W0(T),V.lightsStateVersion=ye,V.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function yh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Fl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Sh(T,U){const H=ke.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function G0(T,U,H,V,B){U.isScene!==!0&&(U=Ze),ze.resetTextureUnits();const he=U.fog,ye=V.isMeshStandardMaterial?U.environment:null,Ce=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ht,Pe=(V.isMeshStandardMaterial?R:at).get(V.envMap||ye),Xe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!H.morphAttributes.position,Mt=!!H.morphAttributes.normal,mn=!!H.morphAttributes.color;let Pt=fr;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const di=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=di!==void 0?di.length:0,He=ke.get(V),Oc=m.state.lights;if(z===!0&&(ee===!0||T!==j)){const Tn=T===j&&V.id===P;le.setState(V,T,Tn)}let ft=!1;V.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Oc.state.version||He.outputColorSpace!==Ce||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==Pe||V.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==le.numPlanes||He.numIntersection!==le.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==Oe||He.morphTargets!==Be||He.morphNormals!==Mt||He.morphColors!==mn||He.toneMapping!==Pt||Fe.isWebGL2===!0&&He.morphTargetsCount!==mt)&&(ft=!0):(ft=!0,He.__version=V.version);let Mr=He.currentProgram;ft===!0&&(Mr=Na(V,U,B));let Mh=!1,So=!1,Fc=!1;const Vt=Mr.getUniforms(),Er=He.uniforms;if(Ae.useProgram(Mr.program)&&(Mh=!0,So=!0,Fc=!0),V.id!==P&&(P=V.id,So=!0),Mh||j!==T){Vt.setValue(O,"projectionMatrix",T.projectionMatrix),Vt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Tn=Vt.map.cameraPosition;Tn!==void 0&&Tn.setValue(O,me.setFromMatrixPosition(T.matrixWorld)),Fe.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,So=!0,Fc=!0)}if(B.isSkinnedMesh){Vt.setOptional(O,B,"bindMatrix"),Vt.setOptional(O,B,"bindMatrixInverse");const Tn=B.skeleton;Tn&&(Fe.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Vt.setValue(O,"boneTexture",Tn.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Vt.setOptional(O,B,"batchingTexture"),Vt.setValue(O,"batchingTexture",B._matricesTexture,ze));const kc=H.morphAttributes;if((kc.position!==void 0||kc.normal!==void 0||kc.color!==void 0&&Fe.isWebGL2===!0)&&oe.update(B,H,Mr),(So||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Vt.setValue(O,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Er.envMap.value=Pe,Er.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),So&&(Vt.setValue(O,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&V0(Er,Fc),he&&V.fog===!0&&J.refreshFogUniforms(Er,he),J.refreshMaterialUniforms(Er,V,$,W,ue),Fl.upload(O,yh(He),Er,ze)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fl.upload(O,yh(He),Er,ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Vt.setValue(O,"center",B.center),Vt.setValue(O,"modelViewMatrix",B.modelViewMatrix),Vt.setValue(O,"normalMatrix",B.normalMatrix),Vt.setValue(O,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Tn=V.uniformsGroups;for(let Bc=0,X0=Tn.length;Bc<X0;Bc++)if(Fe.isWebGL2){const Eh=Tn[Bc];xe.update(Eh,Mr),xe.bind(Eh,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function V0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function W0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,H){ke.get(T.texture).__webglTexture=U,ke.get(T.depthTexture).__webglTexture=H;const V=ke.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=ke.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){E=T,A=U,w=H;let V=!0,B=null,he=!1,ye=!1;if(T){const Pe=ke.get(T);Pe.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):Pe.__webglFramebuffer===void 0?ze.setupRenderTarget(T):Pe.__hasExternalTextures&&ze.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ye=!0);const Oe=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?B=Oe[U][H]:B=Oe[U],he=!0):Fe.isWebGL2&&T.samples>0&&ze.useMultisampledRTT(T)===!1?B=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[H]:B=Oe,S.copy(T.viewport),b.copy(T.scissor),te=T.scissorTest}else S.copy(G).multiplyScalar($).floor(),b.copy(Z).multiplyScalar($).floor(),te=ae;if(Ae.bindFramebuffer(O.FRAMEBUFFER,B)&&Fe.drawBuffers&&V&&Ae.drawBuffers(T,B),Ae.viewport(S),Ae.scissor(b),Ae.setScissorTest(te),he){const Pe=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,H)}else if(ye){const Pe=ke.get(T.texture),Xe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,H||0,Xe)}P=-1},this.readRenderTargetPixels=function(T,U,H,V,B,he,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){Ae.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Pe=T.texture,Xe=Pe.format,Oe=Pe.type;if(Xe!==Ln&&Me.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===xa&&(Ee.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Oe!==hr&&Me.convert(Oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Vn&&(Fe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&H>=0&&H<=T.height-B&&O.readPixels(U,H,V,B,Me.convert(Xe),Me.convert(Oe),he)}finally{const Pe=E!==null?ke.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,U,H=0){const V=Math.pow(2,-H),B=Math.floor(U.image.width*V),he=Math.floor(U.image.height*V);ze.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,T.x,T.y,B,he),Ae.unbindTexture()},this.copyTextureToTexture=function(T,U,H,V=0){const B=U.image.width,he=U.image.height,ye=Me.convert(H.format),Ce=Me.convert(H.type);ze.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,T.x,T.y,B,he,ye,Ce,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,T.x,T.y,ye,Ce,U.image),V===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,V,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(T.max.x-T.min.x),ye=Math.round(T.max.y-T.min.y),Ce=T.max.z-T.min.z+1,Pe=Me.convert(V.format),Xe=Me.convert(V.type);let Oe;if(V.isData3DTexture)ze.setTexture3D(V,0),Oe=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)ze.setTexture2DArray(V,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Be=O.getParameter(O.UNPACK_ROW_LENGTH),Mt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),mn=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),di=O.getParameter(O.UNPACK_SKIP_IMAGES),mt=H.isCompressedTexture?H.mipmaps[B]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Oe,B,U.x,U.y,U.z,he,ye,Ce,Pe,Xe,mt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,B,U.x,U.y,U.z,he,ye,Ce,Pe,mt.data):O.texSubImage3D(Oe,B,U.x,U.y,U.z,he,ye,Ce,Pe,Xe,mt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,mn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,di),B===0&&V.generateMipmaps&&O.generateMipmap(Oe),Ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,Ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rh?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ic?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class X1 extends L0{}X1.prototype.isWebGL1Renderer=!0;class j1 extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return h0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new N;class uh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ig=new N,rg=new st,sg=new st,q1=new N,og=new Ue,_l=new N,Vu=new ci,ag=new Ue,Wu=new go;class K1 extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bp,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_l),this.boundingBox.expandByPoint(_l)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_l),this.boundingSphere.expandByPoint(_l)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vu.copy(this.boundingSphere),Vu.applyMatrix4(r),e.ray.intersectsSphere(Vu)!==!1&&(ag.copy(r).invert(),Wu.copy(e.ray).applyMatrix4(ag),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;rg.fromBufferAttribute(r.attributes.skinIndex,e),sg.fromBufferAttribute(r.attributes.skinWeight,e),ig.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=sg.getComponent(s);if(o!==0){const a=rg.getComponent(s);og.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(q1.copy(ig).applyMatrix4(og),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class P0 extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class N0 extends Ot{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Dt,u=Dt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lg=new Ue,$1=new Ue;class dh{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:$1;lg.multiplyMatrices(a,t[s]),lg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new N0(t,e,e,Ln,Vn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new P0),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class nf extends on{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new Ue,cg=new Ue,vl=[],ug=new li,Z1=new Ue,Do=new rn,Uo=new ci;class Q1 extends rn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Z1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),ug.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(ug)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),Uo.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),cg.multiplyMatrices(i,Ss),Do.matrixWorld=cg,Do.raycast(e,vl);for(let o=0,a=vl.length;o<a;o++){const l=vl[o];l.instanceId=s,l.object=this,t.push(l)}vl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new N0(new Float32Array(r*this.count),r,this.count,i0,Vn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class I0 extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dg=new N,fg=new N,hg=new Ue,Xu=new go,xl=new ci;class fh extends pt{constructor(e=new $n,t=new I0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)dg.fromBufferAttribute(t,r-1),fg.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=dg.distanceTo(fg);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),xl.radius+=s,e.ray.intersectsSphere(xl)===!1)return;hg.copy(r).invert(),Xu.copy(e.ray).applyMatrix4(hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,d=new N,h=new N,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=f,y=v-1;_<y;_+=p){const A=g.getX(_),w=g.getX(_+1);if(c.fromBufferAttribute(m,A),u.fromBufferAttribute(m,w),Xu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=f,y=v-1;_<y;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Xu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const pg=new N,mg=new N;class J1 extends fh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)pg.fromBufferAttribute(t,r),mg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+pg.distanceTo(mg);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eR extends fh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class D0 extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gg=new Ue,rf=new go,yl=new ci,Sl=new N;class tR extends pt{constructor(e=new $n,t=new D0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;gg.copy(r).invert(),rf.copy(e.ray).applyMatrix4(gg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);Sl.fromBufferAttribute(d,m),_g(Sl,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,x=p;g<x;g++)Sl.fromBufferAttribute(d,g),_g(Sl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _g(n,e,t,i,r,s,o){const a=rf.distanceSqToPoint(n);if(a<t){const l=new N;rf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class hh extends $n{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new N,h=new N,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const v=[],_=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+y,1-_),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const _=u[f][v+1],y=u[f][v],A=u[f+1][v],w=u[f+1][v+1];(f!==0||o>0)&&p.push(_,y,w),(f!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ph extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c0,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends ph{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ml(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function iR(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function vg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function U0(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Ca{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rR extends Ca{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dm,endingEnd:dm}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fm:s=e,a=2*t-i;break;case hm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fm:o=e,l=2*i-t;break;case hm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,f=-h*m+2*h*x-h*g,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==a;++A)s[A]=f*o[u+A]+v*o[c+A]+_*o[l+A]+y*o[d+A];return s}}class sR extends Ca{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class oR extends Ca{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ml(t,this.TimeBufferType),this.values=Ml(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ml(e.times,Array),values:Ml(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new oR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case _u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return _u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&nR(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===_u,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){const x=t[d+g];if(x!==t[h+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=ao;class vo extends ui{}vo.prototype.ValueTypeName="bool";vo.prototype.ValueBufferType=Array;vo.prototype.DefaultInterpolation=ya;vo.prototype.InterpolantFactoryMethodLinear=void 0;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class O0 extends ui{}O0.prototype.ValueTypeName="color";class uo extends ui{}uo.prototype.ValueTypeName="number";class aR extends Ca{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)oi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Qr extends ui{InterpolantFactoryMethodLinear(e){return new aR(this.times,this.values,this.getValueSize(),e)}}Qr.prototype.ValueTypeName="quaternion";Qr.prototype.DefaultInterpolation=ao;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends ui{}xo.prototype.ValueTypeName="string";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=ya;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends ui{}fo.prototype.ValueTypeName="vector";class lR{constructor(e,t=-1,i,r=lM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(uR(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ui.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=iR(l);l=vg(l,1,u),c=vg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new uo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,p,g,x){if(p.length!==0){const m=[],f=[];U0(p,m,f,g),m.length!==0&&x.push(new d(h,m,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let x=0;x<h[g].morphTargets.length;x++)p[h[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let v=0;v!==h[g].morphTargets.length;++v){const _=h[g];m.push(_.time),f.push(_.morphTarget===x?1:0)}r.push(new uo(".morphTargetInfluence["+x+"]",m,f))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(fo,p+".position",h,"pos",r),i(Qr,p+".quaternion",h,"rot",r),i(fo,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uo;case"vector":case"vector2":case"vector3":case"vector4":return fo;case"color":return O0;case"quaternion":return Qr;case"bool":case"boolean":return vo;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cR(n.type);if(n.times===void 0){const t=[],i=[];U0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const nr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const fR=new dR;class yo{constructor(e){this.manager=e!==void 0?e:fR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yo.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class hR extends Error{constructor(e,t){super(e),this.response=t}}class F0 extends yo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:i,onError:r});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){v();function v(){d.read().then(({done:_,value:y})=>{if(_)f.close();else{x+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let w=0,E=u.length;w<E;w++){const P=u[w];P.onProgress&&P.onProgress(A)}f.enqueue(y),v()}})}}});return new Response(m)}else throw new hR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{nr.add(e,c);const u=_i[e];delete _i[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pR extends yo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Sa("img");function l(){u(),nr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mR extends yo{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,o=new pR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class mh extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ju=new Ue,xg=new N,yg=new N;class gh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(xg),yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yg),t.updateMatrixWorld(),ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gR extends gh{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=lo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _R extends mh{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sg=new Ue,Oo=new N,Yu=new N;class vR extends gh{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oo),Yu.copy(i.position),Yu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yu),i.updateMatrixWorld(),r.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Sg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sg)}}class xR extends mh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yR extends gh{constructor(){super(new lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SR extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new yR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ea{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class MR extends yo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return nr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),nr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});nr.add(e,l),s.manager.itemStart(e)}}const _h="\\[\\]\\.:\\/",ER=new RegExp("["+_h+"]","g"),vh="[^"+_h+"]",TR="[^"+_h.replace("\\.","")+"]",wR=/((?:WC+[\/:])*)/.source.replace("WC",vh),AR=/(WCOD+)?/.source.replace("WCOD",TR),RR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),bR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),CR=new RegExp("^"+wR+AR+RR+bR+"$"),LR=["material","materials","bones","map"];class PR{constructor(e,t,i){const r=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class nt{constructor(e,t,i){this.path=t,this.parsedPath=i||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,i):new nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ER,"")}static parseTrackName(e){const t=CR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);LR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=PR;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Mg=new Ue;class NR{constructor(e,t,i=0,r=1/0){this.ray=new go(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mg),this}intersectObject(e,t=!0,i=[]){return sf(e,this,i,t),i.sort(Eg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sf(e[r],this,i,t);return i.sort(Eg),i}}function Eg(n,e){return n.distance-e.distance}function sf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)sf(r[s],e,t,!0)}}class Tg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);class qu extends pt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Te(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ms=new N,wg=new Ue,Ag=new Ue,Rg=new N,bg=new N;class IR{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),wg.copy(g.matrixWorldInverse),Ag.multiplyMatrices(g.projectionMatrix,wg),c(p,p,g),h(p)},this.setSize=function(p,g){i=p,r=g,s=i/2,o=r/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p,g,x){if(p.isCSS2DObject){Ms.setFromMatrixPosition(p.matrixWorld),Ms.applyMatrix4(Ag);const m=p.visible===!0&&Ms.z>=-1&&Ms.z<=1&&p.layers.test(x.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,g,x);const v=p.element;v.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Ms.x*s+s)+"px,"+(-Ms.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),p.onAfterRender(t,g,x)}const f={distanceToCameraSquared:u(x,p)};a.objects.set(p,f)}for(let m=0,f=p.children.length;m<f;m++)c(p.children[m],g,x)}function u(p,g){return Rg.setFromMatrixPosition(p.matrixWorld),bg.setFromMatrixPosition(g.matrixWorld),Rg.distanceToSquared(bg)}function d(p){const g=[];return p.traverse(function(x){x.isCSS2DObject&&g.push(x)}),g}function h(p){const g=d(p).sort(function(m,f){if(m.renderOrder!==f.renderOrder)return f.renderOrder-m.renderOrder;const v=a.objects.get(m).distanceToCameraSquared,_=a.objects.get(f).distanceToCameraSquared;return v-_}),x=g.length;for(let m=0,f=g.length;m<f;m++)g[m].element.style.zIndex=x-m}}}const Cg={type:"change"},Ku={type:"start"},Lg={type:"end"},El=new go,Pg=new Yi,DR=Math.cos(70*d0.DEG2RAD);class UR extends ts{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Re),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Cg),i.update(),s=r.NONE},this.update=function(){const C=new N,K=new oi().setFromUnitVectors(e.up,new N(0,1,0)),_e=K.clone().invert(),L=new N,se=new oi,k=new N,ne=2*Math.PI;return function(je=null){const et=i.object.position;C.copy(et).sub(i.target),C.applyQuaternion(K),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&te(S(je)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let rt=i.minAzimuthAngle,yt=i.maxAzimuthAngle;isFinite(rt)&&isFinite(yt)&&(rt<-Math.PI?rt+=ne:rt>Math.PI&&(rt-=ne),yt<-Math.PI?yt+=ne:yt>Math.PI&&(yt-=ne),rt<=yt?a.theta=Math.max(rt,Math.min(yt,a.theta)):a.theta=a.theta>(rt+yt)/2?Math.max(rt,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Qe=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)a.radius=G(a.radius);else{const lt=a.radius;a.radius=G(a.radius*c),Qe=lt!=a.radius}if(C.setFromSpherical(a),C.applyQuaternion(_e),et.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&w){let lt=null;if(i.object.isPerspectiveCamera){const Gt=C.length();lt=G(Gt*c);const Sr=Gt-lt;i.object.position.addScaledVector(y,Sr),i.object.updateMatrixWorld(),Qe=!!Sr}else if(i.object.isOrthographicCamera){const Gt=new N(A.x,A.y,0);Gt.unproject(i.object);const Sr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Qe=Sr!==i.object.zoom;const La=new N(A.x,A.y,0);La.unproject(i.object),i.object.position.sub(La).add(Gt),i.object.updateMatrixWorld(),lt=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):(El.origin.copy(i.object.position),El.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(El.direction))<DR?e.lookAt(i.target):(Pg.setFromNormalAndCoplanarPoint(i.object.up,i.target),El.intersectPlane(Pg,i.target))))}else if(i.object.isOrthographicCamera){const lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Qe=!0)}return c=1,w=!1,Qe||L.distanceToSquared(i.object.position)>o||8*(1-se.dot(i.object.quaternion))>o||k.distanceToSquared(i.target)>o?(i.dispatchEvent(Cg),L.copy(i.object.position),se.copy(i.object.quaternion),k.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ie),i.domElement.removeEventListener("pointerdown",ze),i.domElement.removeEventListener("pointercancel",R),i.domElement.removeEventListener("wheel",q),i.domElement.removeEventListener("pointermove",at),i.domElement.removeEventListener("pointerup",R),i.domElement.getRootNode().removeEventListener("keydown",J,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Re),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Tg,l=new Tg;let c=1;const u=new N,d=new Te,h=new Te,p=new Te,g=new Te,x=new Te,m=new Te,f=new Te,v=new Te,_=new Te,y=new N,A=new Te;let w=!1;const E=[],P={};let j=!1;function S(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function b(C){const K=Math.abs(C*.01);return Math.pow(.95,i.zoomSpeed*K)}function te(C){l.theta-=C}function Q(C){l.phi-=C}const D=function(){const C=new N;return function(_e,L){C.setFromMatrixColumn(L,0),C.multiplyScalar(-_e),u.add(C)}}(),Y=function(){const C=new N;return function(_e,L){i.screenSpacePanning===!0?C.setFromMatrixColumn(L,1):(C.setFromMatrixColumn(L,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(_e),u.add(C)}}(),W=function(){const C=new N;return function(_e,L){const se=i.domElement;if(i.object.isPerspectiveCamera){const k=i.object.position;C.copy(k).sub(i.target);let ne=C.length();ne*=Math.tan(i.object.fov/2*Math.PI/180),D(2*_e*ne/se.clientHeight,i.object.matrix),Y(2*L*ne/se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(_e*(i.object.right-i.object.left)/i.object.zoom/se.clientWidth,i.object.matrix),Y(L*(i.object.top-i.object.bottom)/i.object.zoom/se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(C,K){if(!i.zoomToCursor)return;w=!0;const _e=i.domElement.getBoundingClientRect(),L=C-_e.left,se=K-_e.top,k=_e.width,ne=_e.height;A.x=L/k*2-1,A.y=-(se/ne)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function G(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function Z(C){d.set(C.clientX,C.clientY)}function ae(C){F(C.clientX,C.clientX),f.set(C.clientX,C.clientY)}function be(C){g.set(C.clientX,C.clientY)}function z(C){h.set(C.clientX,C.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const K=i.domElement;te(2*Math.PI*p.x/K.clientHeight),Q(2*Math.PI*p.y/K.clientHeight),d.copy(h),i.update()}function ee(C){v.set(C.clientX,C.clientY),_.subVectors(v,f),_.y>0?$(b(_.y)):_.y<0&&I(b(_.y)),f.copy(v),i.update()}function ue(C){x.set(C.clientX,C.clientY),m.subVectors(x,g).multiplyScalar(i.panSpeed),W(m.x,m.y),g.copy(x),i.update()}function we(C){F(C.clientX,C.clientY),C.deltaY<0?I(b(C.deltaY)):C.deltaY>0&&$(b(C.deltaY)),i.update()}function Se(C){let K=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?te(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?te(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),K=!0;break}K&&(C.preventDefault(),i.update())}function me(C){if(E.length===1)d.set(C.pageX,C.pageY);else{const K=ge(C),_e=.5*(C.pageX+K.x),L=.5*(C.pageY+K.y);d.set(_e,L)}}function Ze(C){if(E.length===1)g.set(C.pageX,C.pageY);else{const K=ge(C),_e=.5*(C.pageX+K.x),L=.5*(C.pageY+K.y);g.set(_e,L)}}function Le(C){const K=ge(C),_e=C.pageX-K.x,L=C.pageY-K.y,se=Math.sqrt(_e*_e+L*L);f.set(0,se)}function O(C){i.enableZoom&&Le(C),i.enablePan&&Ze(C)}function At(C){i.enableZoom&&Le(C),i.enableRotate&&me(C)}function Ee(C){if(E.length==1)h.set(C.pageX,C.pageY);else{const _e=ge(C),L=.5*(C.pageX+_e.x),se=.5*(C.pageY+_e.y);h.set(L,se)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const K=i.domElement;te(2*Math.PI*p.x/K.clientHeight),Q(2*Math.PI*p.y/K.clientHeight),d.copy(h)}function Fe(C){if(E.length===1)x.set(C.pageX,C.pageY);else{const K=ge(C),_e=.5*(C.pageX+K.x),L=.5*(C.pageY+K.y);x.set(_e,L)}m.subVectors(x,g).multiplyScalar(i.panSpeed),W(m.x,m.y),g.copy(x)}function Ae(C){const K=ge(C),_e=C.pageX-K.x,L=C.pageY-K.y,se=Math.sqrt(_e*_e+L*L);v.set(0,se),_.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),$(_.y),f.copy(v);const k=(C.pageX+K.x)*.5,ne=(C.pageY+K.y)*.5;F(k,ne)}function Ye(C){i.enableZoom&&Ae(C),i.enablePan&&Fe(C)}function ke(C){i.enableZoom&&Ae(C),i.enableRotate&&Ee(C)}function ze(C){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",at),i.domElement.addEventListener("pointerup",R)),!We(C)&&(oe(C),C.pointerType==="touch"?le(C):M(C)))}function at(C){i.enabled!==!1&&(C.pointerType==="touch"?de(C):X(C))}function R(C){switch(xt(C),E.length){case 0:i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",at),i.domElement.removeEventListener("pointerup",R),i.dispatchEvent(Lg),s=r.NONE;break;case 1:const K=E[0],_e=P[K];le({pointerId:K,pageX:_e.x,pageY:_e.y});break}}function M(C){let K;switch(C.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case is.DOLLY:if(i.enableZoom===!1)return;ae(C),s=r.DOLLY;break;case is.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;be(C),s=r.PAN}else{if(i.enableRotate===!1)return;Z(C),s=r.ROTATE}break;case is.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Z(C),s=r.ROTATE}else{if(i.enablePan===!1)return;be(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ku)}function X(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;z(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ee(C);break;case r.PAN:if(i.enablePan===!1)return;ue(C);break}}function q(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ku),we(re(C)),i.dispatchEvent(Lg))}function re(C){const K=C.deltaMode,_e={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(K){case 1:_e.deltaY*=16;break;case 2:_e.deltaY*=100;break}return C.ctrlKey&&!j&&(_e.deltaY*=10),_e}function J(C){C.key==="Control"&&(j=!0,i.domElement.getRootNode().addEventListener("keyup",Ne,{passive:!0,capture:!0}))}function Ne(C){C.key==="Control"&&(j=!1,i.domElement.getRootNode().removeEventListener("keyup",Ne,{passive:!0,capture:!0}))}function Re(C){i.enabled===!1||i.enablePan===!1||Se(C)}function le(C){switch(Me(C),E.length){case 1:switch(i.touches.ONE){case rs.ROTATE:if(i.enableRotate===!1)return;me(C),s=r.TOUCH_ROTATE;break;case rs.PAN:if(i.enablePan===!1)return;Ze(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(C),s=r.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ku)}function de(C){switch(Me(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Fe(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(C),i.update();break;default:s=r.NONE}}function Ie(C){i.enabled!==!1&&C.preventDefault()}function oe(C){E.push(C.pointerId)}function xt(C){delete P[C.pointerId];for(let K=0;K<E.length;K++)if(E[K]==C.pointerId){E.splice(K,1);return}}function We(C){for(let K=0;K<E.length;K++)if(E[K]==C.pointerId)return!0;return!1}function Me(C){let K=P[C.pointerId];K===void 0&&(K=new Te,P[C.pointerId]=K),K.set(C.pageX,C.pageY)}function ge(C){const K=C.pointerId===E[0]?E[1]:E[0];return P[K]}i.domElement.addEventListener("contextmenu",Ie),i.domElement.addEventListener("pointerdown",ze),i.domElement.addEventListener("pointercancel",R),i.domElement.addEventListener("wheel",q,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",J,{passive:!0,capture:!0}),this.update()}}function Ng(n,e){if(e===cM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Zd||e===l0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Zd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class OR extends yo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new HR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new QR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new qR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new eb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ea.extractUrlBase(e);o=ea.resolveURL(c,this.path)}else o=ea.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new F0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===k0){try{o[qe.KHR_BINARY_GLTF]=new tb(e)}catch(d){r&&r(d);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new pb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case qe.KHR_MATERIALS_UNLIT:o[d]=new BR;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new nb(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[d]=new ib;break;case qe.KHR_MESH_QUANTIZATION:o[d]=new rb;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function FR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kR{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new SR(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xR(u),c.distance=d;break;case"spot":c=new _R(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class BR{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ri}extendParams(e,t,i){const r=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,tn))}return Promise.all(r)}}class zR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}}class GR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class VR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class WR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class XR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],Ht),Promise.all(s)}}class jR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class YR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,tn)),Promise.all(s)}}class qR{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class KR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $R{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class ZR{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class QR{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JR{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,h,r.mode,r.filter),p})})}else return null}}class eb{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of d){const x=new Ue,m=new N,f=new oi,v=new N(1,1,1),_=new Q1(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,f,v));for(const y in l)if(y==="_COLOR_0"){const A=l[y];_.instanceColor=new nf(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);pt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const k0="glTF",Fo=12,Ig={JSON:1313821514,BIN:5130562};class tb{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==k0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Fo,s=new DataView(e,Fo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ig.JSON){const c=new Uint8Array(e,Fo+o,a);this.content=i.decode(c)}else if(l===Ig.BIN){const c=Fo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=of[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=of[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=Ys[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}d(p)},a,c,Ht,h)})})}}class ib{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rb{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class B0 extends Ca{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,h=d*d,p=h*d,g=e*c,x=g-c,m=-2*p+3*h,f=p-h,v=1-m,_=f-h+d;for(let y=0;y!==a;y++){const A=o[x+y+a],w=o[x+y+l]*u,E=o[g+y+a],P=o[g+y]*u;s[y]=v*A+_*w+m*E+f*P}return s}}const sb=new oi;class ob extends B0{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return sb.fromArray(s).normalize().toArray(s),s}}const An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dg={9728:Dt,9729:qt,9984:$d,9985:Ol,9986:Es,9987:wi},Ug={33071:Cn,33648:uc,10497:so},$u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},of={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ab={CUBICSPLINE:void 0,LINEAR:ao,STEP:ya},Zu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ph({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),n.DefaultMaterial}function Lr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function ub(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function db(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qu(t.attributes):e=n.indices+":"+Qu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Qu(n.targets[i]);return e}function Qu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function af(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hb=new Ue;class pb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new mR(this.options.manager):this.textureLoader=new MR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new F0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Lr(s,a,r),qi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ea.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=$u[r.type],a=Ys[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new on(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=$u[r.type],c=Ys[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,m;if(p&&p!==d){const f=Math.floor(h/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let _=t.cache.get(v);_||(x=new c(a,f*p,r.count*p/u),_=new Y1(x,p/u),t.cache.add(v,_)),m=new uh(_,l,h%p/u,g)}else a===null?x=new c(r.count*l):x=new c(a,h,r.count*l),m=new on(x,l,g);if(r.sparse!==void 0){const f=$u.SCALAR,v=Ys[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,A=new v(o[1],_,r.sparse.count*f),w=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new on(m.array.slice(),m.itemSize,m.normalized));for(let E=0,P=A.length;E<P;E++){const j=A[E];if(m.setX(j,w[E*l]),l>=2&&m.setY(j,w[E*l+1]),l>=3&&m.setZ(j,w[E*l+2]),l>=4&&m.setW(j,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Dg[h.magFilter]||qt,u.minFilter=Dg[h.minFilter]||wi,u.wrapS=Ug[h.wrapS]||so,u.wrapT=Ug[h.wrapT]||so,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ot(x);m.needsUpdate=!0,h(m)}),t.load(ea.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||fb(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new D0,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new I0,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ph}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const d=r[qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ht),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,tn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ti);const u=s.alphaMode||Zu.OPAQUE;if(u===Zu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Zu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ri&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Ri&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ri){const d=s.emissiveFactor;a.emissive=new De().setRGB(d[0],d[1],d[2],Ht)}return s.emissiveTexture!==void 0&&o!==Ri&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,tn)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),qi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Lr(r,d,s),d})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Og(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=db(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Og(new $n,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?lb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const x=u[p],m=o[p];let f;const v=c[p];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new K1(x,v):new rn(x,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?f.geometry=Ng(f.geometry,l0):m.mode===An.TRIANGLE_FAN&&(f.geometry=Ng(f.geometry,Zd));else if(m.mode===An.LINES)f=new J1(x,v);else if(m.mode===An.LINE_STRIP)f=new fh(x,v);else if(m.mode===An.LINE_LOOP)f=new eR(x,v);else if(m.mode===An.POINTS)f=new tR(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ub(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),qi(f,s),m.extensions&&Lr(r,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Lr(r,d[0],s),d[0];const h=new zr;s.extensions&&Lr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new nn(d0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new lh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Ue;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dh(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const p=r.channels[d],g=r.samplers[p.sampler],x=p.target,m=x.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],g=d[2],x=d[3],m=d[4],f=[];for(let v=0,_=h.length;v<_;v++){const y=h[v],A=p[v],w=g[v],E=x[v],P=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const j=i._createAnimationTracks(y,A,w,E,P);if(j)for(let S=0;S<j.length;S++)f.push(j[S])}return new lR(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,hb)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new P0:c.length>1?u=new zr:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),qi(u,s),s.extensions&&Lr(i,u,s),s.matrix!==void 0){const d=new Ue;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new zr;i.name&&(s.name=r.createUniqueName(i.name)),qi(s,i),i.extensions&&Lr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,p]of r.associations)(h instanceof si||h instanceof Ot)&&d.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&d.set(h,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Vi[s.path]===Vi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Vi[s.path]){case Vi.weights:c=uo;break;case Vi.rotation:c=Qr;break;case Vi.position:case Vi.scale:c=fo;break;default:switch(i.itemSize){case 1:c=uo;break;case 2:case 3:default:c=fo;break}break}const u=r.interpolation!==void 0?ab[r.interpolation]:ao,d=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+Vi[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=af(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Qr?ob:B0;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mb(n,e,t){const i=e.attributes,r=new li;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=af(Ys[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const x=af(Ys[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new ci;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Og(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=of[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Je.workingColorSpace!==Ht&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),qi(n,e),mb(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?cb(n,e.targets,t):n})}const Dr=[{title:"Travis Gafford Industries",subtitle:"- Circa. 2018 to Present -",text:"Graphic design, brand and web development for League of Legends' predominant media company; check out Hotline League!",clickThrough:"https://www.behance.net/gallery/56894655/Overlays-and-Branding",clickText:"Behance Page"},{title:"Amazon: Software Engineer",subtitle:"- June 2017 to June 2023 -",text:"Amazon Display Ad Products: architected and developed products generating millions of revenue.",clickThrough:"https://amazonfiretv.blog/immerse-yourself-in-middle-earth-with-the-lord-of-the-rings-the-rings-of-power-bb76cc29a9ff",clickText:"Case Study"},{title:"Pokimane Podcast",subtitle:"- Completed March 2018 -",text:"Dynamic start and intermission screens",clickThrough:"https://archive.org/details/twitch-vod-v282019111",clickText:"Podcast"},{title:"Ample Food Icons",subtitle:"- Completed January 2017 -",text:"Web icons and infographic",clickThrough:"https://www.behance.net/gallery/49921415/AmpleMealcom",clickText:"Behance Page"},{title:"HipHopHeads Polls",subtitle:"- Circa March 2016 -",text:"Polled music player",clickThrough:"https://benson.li/HipHopHeadsDesignStudy/",clickText:"Case Study"},{title:"Gamespot",subtitle:"- March 2014 - February 2016 -",text:"Graphic design for onGamers and G | League",clickThrough:"https://www.behance.net/SarcasmAppreciated",clickText:"Behance Page"}];let z0,pr,Go,Si,Xn,Ki,Xr,Ma,ta,ks,qs,vi,Jt,Wi;function kl(){return!!/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function gb(){const n=document.getElementById("sky");pr=new nn(10,window.innerWidth/window.innerHeight,.03,1e4),pr.position.z=500,Si=new j1;const e=new hh(.5,32,16);Ma=new NR,Xr=new Te,ta=[];let t=[.85,11,-11],i=[2,10.6,-10.5];const r=[Dr[0].title,Dr[1].title,Dr[4].title],s=[Dr[2].title,Dr[3].title,Dr[5].title];for(let f=0;f<3;f++){const v=new Ri({color:16777215,transparent:!0,opacity:0}),_=new Ri({color:16777215,transparent:!0,opacity:0}),y=new rn(e,v),A=new rn(e,_);y.name=r[f],A.name=s[f],y.position.set(t[0],t[1],t[2]),A.position.set(i[0],i[1],i[2]),Si.add(y),Si.add(A),ta.push(y),ta.push(A),t[0]-=.55,i[0]-=.55,t[1]-=.5,i[1]-=.5,t[2]+=.8,i[2]+=.8}Ki=new IR,Ki.setSize(window.innerWidth,window.innerHeight),Ki.domElement.style.position="absolute",Ki.domElement.style.top="0px",Ki.domElement.style.pointerEvents="none",n.appendChild(Ki.domElement),ks=document.createElement("div"),ks.className="label",ks.style.marginTop="-1em",qs=new qu(ks),qs.visible=!1,Si.add(qs),Jt=document.createElement("div"),Jt.id="main-blurb",Jt.className="blurb",Jt.style.marginTop="-1em";const o=document.createElement("p");o.className="blurb-close-text",o.textContent="X";const a=document.createElement("div");a.id="blurb-close",a.style.pointerEvents="auto",a.addEventListener("click",function(f){f.preventDefault(),Wi.visible=!1}),a.append(o);const l=document.createElement("h2");l.className="blurb-title";const c=document.createElement("p");c.className="blurb-paragraph";const u=document.createElement("p");u.className="blurb-paragraph";const d=document.createElement("button");d.id="blurb-button",d.style.pointerEvents="auto",d.addEventListener("pointerdown",function(f){f.preventDefault(),window.open(f.target.attributes.clickthrough.value)}),Jt.append(a),Jt.append(l),Jt.append(c),Jt.append(u),Jt.append(d),Wi=new qu(Jt),kl()?Wi.position.set(0,-10,0):Wi.position.set(20,0,0),Wi.visible=!1,Si.add(Wi),l.addEventListener("click",function(f){f.preventDefault(),Wi.visible=!1});const h=document.createElement("div");h.className="blurb",h.style.marginTop="-1em",h.style.pointerEvents="auto";const p=document.createElement("p");p.className="blurb-paragraph",p.textContent="Click on one of the pokeballs on the healing machine!";const g=document.createElement("p");g.className="blurb-paragraph",g.textContent="Feel free to pan and zoom in/out around :)",h.append(p),h.append(g);const x=new qu(h);kl()?x.position.set(-9,8,0):x.position.set(-12,5,0),Si.add(x),h.addEventListener("click",function(f){f.preventDefault(),kl()&&(x.visible=!1)}),Xn=new L0,Xn.setSize(window.innerWidth,window.innerHeight),Xn.shadowMap.enabled=!0,Xn.shadowMap.type=Zv,n.appendChild(Xn.domElement),n.addEventListener("resize",vb),n.addEventListener("mousemove",yb),n.addEventListener("click",xb),document.getElementById("old-experience").addEventListener("click",Sb),new OR().load("pkmn_centre.glb",function(f){const v=f.scene;v.scale.set(30,30,30),v.rotation.x+=.6,v.rotation.y+=-.5,v.position.set(-2.5,0,0),Si.add(f.scene)},void 0,function(f){console.error(f)}),_b(pr)}function _b(n){Go=new UR(n,Xn.domElement),Go.rotateSpeed=.75,Go.zoomSpeed=1.2,Go.panSpeed=1}function vb(){let n=window.innerWidth,e=window.innerHeight;pr.aspect=n/e,pr.updateProjectionMatrix(),Xn.setSize(n,e),Ki.setSize(n,e)}function xb(n){n.preventDefault();const{innerWidth:e,innerHeight:t}=window;Xr.x=n.clientX/e*2-1,Xr.y=-(n.clientY/t)*2+1,Ma.setFromCamera(Xr,pr);const[i]=Ma.intersectObjects(ta);if(i){Xn.domElement.className="hovered",Wi.visible=!0;const r=Dr.filter(s=>s.title===i.object.name)[0];Jt.children[1].textContent=r.title,Jt.children[2].textContent=r.subtitle,Jt.children[3].textContent=r.text,Jt.children[4].textContent=r.clickText,Jt.children[4].setAttribute("clickThrough",r.clickThrough)}}function yb(n){n.preventDefault();const{innerWidth:e,innerHeight:t}=window;Xr.x=n.clientX/e*2-1,Xr.y=-(n.clientY/t)*2+1,Ma.setFromCamera(Xr,pr);const[i]=Ma.intersectObjects(ta);if(i){if(vi?vi&&i!==vi&&(vi.object.material.opacity=0,vi=i):vi=i,!kl()){Xn.domElement.className="hovered",qs.visible=!0,ks.textContent=i.object.name;const r=new N;new li().setFromObject(i.object).getSize(r),qs.position.set(i.object.position.x,i.object.position.y+2,i.object.position.z),i.object.material.opacity=1}}else Xn.domElement.className="",qs.visible=!1,ks.textContent="",vi&&(vi.object.material.opacity=0,vi=null)}function Sb(){cancelAnimationFrame(z0)}function H0(){z0=requestAnimationFrame(H0),Go.update(),Mb()}function Mb(){const n=pr;Xn.render(Si,n),Ki.render(Si,n)}function Eb(){const n=Ks.useRef(!1);return Ks.useEffect(()=>{n.current||(n.current=!0,gb(),H0())},[]),ve.jsx("div",{id:"sky",children:ve.jsxs("div",{className:"blurb static",children:[ve.jsx("p",{className:"blurb-paragraph",children:"Hi, I'm Benson - I'm a software engineer and graphics designer; I like making cool things - beautiful and immersive experiences."}),ve.jsx("p",{className:"blurb-paragraph",children:"I'm from Vancouver, BC based in Seattle, WA. My past work includes everything from brand creation, AAA software development, and World of Warcraft addons."}),ve.jsx("p",{className:"blurb-paragraph",children:"I've had the pleasure working with and for: Amazon, Travis Gafford, ATEYO, Pokimane, GameSpot (formerly onGamers), LGD Gaming, and the University of Waterloo - creating art and design for their respective needs."})]})})}function Tb({legacy:n}){const e="Benson Li 2015 - "+new Date().getFullYear()+" ©";return ve.jsxs("footer",{style:{position:n?"inherit":"fixed"},children:[ve.jsx("p",{style:{marginTop:"30px"},children:'"Pokemon RSE - Pokemon Center" (https://skfb.ly/6uUzL) by Wesai is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).'}),ve.jsx("p",{id:"copyright",children:e})]})}function wb({element:n}){return ve.jsx("a",{href:n.clickThrough,children:ve.jsx("div",{className:`circle ${n.name}`})})}function Ab({element:n}){return ve.jsxs("div",{className:"stage-item",id:n.background,children:[ve.jsx("div",{className:"stage-item-image",id:`${n.background}-bg`}),ve.jsxs("div",{className:"stage-item-text",children:[ve.jsx("h2",{children:n.title}),ve.jsx("p",{className:"stage-subtext",children:n.text}),n.clickThrough?ve.jsx("a",{href:`${n.clickThrough}`,children:ve.jsx("button",{class:"stage-button",children:n.clickText})}):ve.jsx("div",{children:ve.jsx("button",{class:"stage-button",children:n.clickText})})]})]})}function Rb({element:n}){return ve.jsx("div",{className:"skill",style:{backgroundSize:`${n.size}% 100%`},children:n.text})}function bb(){const n=[{size:"80",text:"// Java"},{size:"40",text:"// C#"},{size:"60",text:"// Android"},{size:"100",text:"<!-- HTML -->"},{size:"100",text:"{ CSS }"},{size:"90",text:".javascript"},{size:"70",text:"react()"},{size:"80",text:"$.jQuery"},{size:"60",text:"-- LUA"},{size:"60",text:"UI/UX"}],e=[{background:"hll",title:"Hotline League and Travis Gafford",text:"- Circa. 2018 to Present -",clickThrough:"https://www.behance.net/gallery/56894655/Overlays-and-Branding",clickText:"Behance Page"},{background:"amazon",title:"Amazon: Software Engineer",text:"- June 2017 to June 2023 -<br>Amazon Display Ad Products<br>Architected and developed products<br>generating millions of revenue",clickThrough:"https://amazonfiretv.blog/immerse-yourself-in-middle-earth-with-the-lord-of-the-rings-the-rings-of-power-bb76cc29a9ff",clickText:"Case Study"},{background:"poki",title:"Pokimane Podcast",text:"- Completed March 2018 -<br>Dynamic start and intermission screens",clickThrough:"https://archive.org/details/twitch-vod-v282019111",clickText:"Podcast"},{background:"ample",title:"Ample Food Icons",text:"- Completed January 2017 -<br>Icons and Infographic",clickThrough:"https://www.behance.net/gallery/49921415/AmpleMealcom",clickText:"Behance Page"},{background:"hhhp",title:"HipHopHeads Polls",text:"- Circa March 2016 -<br>Polled Music Player",clickThrough:"https://benson.li/HipHopHeadsDesignStudy/",clickText:"Case Study"},{background:"gamespot",title:"Gamespot",text:"- March 2014 - February 2016 -<br>Graphic design for onGamers and G | League",clickThrough:"https://www.behance.net/SarcasmAppreciated",clickText:"Behance Page"},{background:"fiist",title:"Fiist: Waitlist Management",text:"- Circa. 2012 -<br>Project page for Fiist (startup); designed by Brian Leung",clickThrough:"https://benson.li/Fiist-Site/",clickText:"Github Page"}],t=[{clickThrough:"https://twitter.com/pokimanelol",name:"pokimane"},{clickThrough:"https://ateyo.com/",name:"ateyo"},{clickThrough:"https://www.amplemeal.com/",name:"ample"},{clickThrough:"https://twitter.com/LGDgaming",name:"lgd"},{clickThrough:"https://uwaterloo.ca/conrad-business-entrepreneurship-technology/",name:"uw"}];return ve.jsx("div",{id:"main",children:ve.jsxs("div",{className:"stage",id:"first",children:[e.map((i,r)=>ve.jsx(Ab,{element:i},r)),ve.jsx("div",{id:"about",className:"stage-item large about",children:ve.jsxs("div",{className:"stage-item-text",children:[ve.jsx("h2",{style:{marginBottom:"15px"},children:"About"}),ve.jsx("p",{children:"Hi, I'm Benson - I'm a software engineer and graphics designer; I like making cool things - beautiful and immersive experiences."}),ve.jsx("p",{children:"I'm from Vancouver, BC based in Seattle, WA. My past work includes everything from brand creation, AAA software development, and World of Warcraft addons."}),ve.jsx("h2",{style:{marginBottom:"15px"},children:"Clients"}),ve.jsx("p",{children:"Here are some of the lovely people I've had the pleasure working with. I've worked as a graphics artist or dev for: Travis Gafford, ATEYO, Pokimane, GameSpot (formerly onGamers), LGD Gaming, and the University of Waterloo - creating art and design for their respective needs."}),ve.jsx("div",{className:"circle-container",id:"clients",children:t.map((i,r)=>ve.jsx(wb,{element:i},r))})]})}),ve.jsx("div",{className:"stage-item about",children:ve.jsxs("div",{className:"stage-item-text",children:[ve.jsx("h2",{style:{marginBottom:"15px"},children:"Skills"}),ve.jsx("p",{children:"I work best with Object Oriented Languages but am fluent in Typescript/Javascript and React."}),ve.jsx("div",{id:"skills",style:{width:"100%",display:"inline-block",marginTop:"10px"},children:n.map((i,r)=>ve.jsx(Rb,{element:i},r))}),ve.jsx("div",{className:"skill icon",id:"PS"}),ve.jsx("div",{className:"skill icon",id:"AI"}),ve.jsx("div",{className:"skill icon",id:"FL"}),ve.jsx("div",{className:"skill icon",id:"AE"})]})})]})})}function Cb(){function n(){t(!e)}const[e,t]=Ks.useState(!1);return ve.jsxs(ve.Fragment,{children:[ve.jsx(xS,{legacy:e,callback:n}),e?ve.jsx(bb,{}):ve.jsx(Eb,{}),ve.jsx(Tb,{legacy:e})]})}Ju.createRoot(document.getElementById("root")).render(ve.jsx(lx.StrictMode,{children:ve.jsx(Cb,{})}));
