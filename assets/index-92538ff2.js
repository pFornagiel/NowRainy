(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var xm={exports:{}},Ml={},ym={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),W1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),q1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),K1=Symbol.for("react.forward_ref"),Z1=Symbol.for("react.suspense"),Q1=Symbol.for("react.memo"),J1=Symbol.for("react.lazy"),Ud=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,Mm={};function bs(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||Sm}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wm(){}wm.prototype=bs.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||Sm}var _f=gf.prototype=new wm;_f.constructor=gf;Em(_f,bs.prototype);_f.isPureReactComponent=!0;var Nd=Array.isArray,Tm=Object.prototype.hasOwnProperty,vf={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!Cm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Uo,type:t,key:s,ref:o,props:r,_owner:vf.current}}function t_(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Id=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function Na(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case W1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Jl(o,0):i,Nd(r)?(n="",t!=null&&(n=t.replace(Id,"$&/")+"/"),Na(r,e,n,"",function(u){return u})):r!=null&&(xf(r)&&(r=t_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Id,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Nd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Jl(s,a);o+=Na(s,e,n,l,r)}else if(l=e_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Jl(s,a++),o+=Na(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var i=[],r=0;return Na(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Ia={transition:null},r_={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:vf};He.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=bs;He.Fragment=X1;He.Profiler=q1;He.PureComponent=gf;He.StrictMode=j1;He.Suspense=Z1;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Em({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!Cm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Uo,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:Y1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$1,_context:t},t.Consumer=t};He.createElement=Am;He.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:K1,render:t}};He.isValidElement=xf;He.lazy=function(t){return{$$typeof:J1,_payload:{_status:-1,_result:t},_init:i_}};He.memo=function(t,e){return{$$typeof:Q1,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};He.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};He.useCallback=function(t,e){return Xt.current.useCallback(t,e)};He.useContext=function(t){return Xt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Xt.current.useEffect(t,e)};He.useId=function(){return Xt.current.useId()};He.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Xt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};He.useRef=function(t){return Xt.current.useRef(t)};He.useState=function(t){return Xt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Xt.current.useTransition()};He.version="18.2.0";ym.exports=He;var re=ym.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_=re,o_=Symbol.for("react.element"),a_=Symbol.for("react.fragment"),l_=Object.prototype.hasOwnProperty,u_=s_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c_={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)l_.call(e,i)&&!c_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o_,type:t,key:s,ref:o,props:r,_owner:u_.current}}Ml.Fragment=a_;Ml.jsx=Rm;Ml.jsxs=Rm;xm.exports=Ml;var me=xm.exports,Lm={exports:{}},fn={},bm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var k=P.length;P.push(B);e:for(;0<k;){var ie=k-1>>>1,D=P[ie];if(0<r(D,B))P[ie]=B,P[k]=D,k=ie;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var B=P[0],k=P.pop();if(k!==B){P[0]=k;e:for(var ie=0,D=P.length,J=D>>>1;ie<J;){var K=2*(ie+1)-1,de=P[K],fe=K+1,ve=P[fe];if(0>r(de,k))fe<D&&0>r(ve,de)?(P[ie]=ve,P[fe]=k,ie=fe):(P[ie]=de,P[K]=k,ie=K);else if(fe<D&&0>r(ve,k))P[ie]=ve,P[fe]=k,ie=fe;else break e}}return B}function r(P,B){var k=P.sortIndex-B.sortIndex;return k!==0?k:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,g=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=P)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function y(P){if(v=!1,m(P),!x)if(n(l)!==null)x=!0,Q(M);else{var B=n(u);B!==null&&X(y,B.startTime-P)}}function M(P,B){x=!1,v&&(v=!1,c(b),b=-1),g=!0;var k=h;try{for(m(B),d=n(l);d!==null&&(!(d.expirationTime>B)||P&&!q());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var D=ie(d.expirationTime<=B);B=t.unstable_now(),typeof D=="function"?d.callback=D:d===n(l)&&i(l),m(B)}else i(l);d=n(l)}if(d!==null)var J=!0;else{var K=n(u);K!==null&&X(y,K.startTime-B),J=!1}return J}finally{d=null,h=k,g=!1}}var C=!1,R=null,b=-1,S=5,T=-1;function q(){return!(t.unstable_now()-T<S)}function Z(){if(R!==null){var P=t.unstable_now();T=P;var B=!0;try{B=R(!0,P)}finally{B?F():(C=!1,R=null)}}else C=!1}var F;if(typeof _=="function")F=function(){_(Z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,G=H.port2;H.port1.onmessage=Z,F=function(){G.postMessage(null)}}else F=function(){p(Z,0)};function Q(P){R=P,C||(C=!0,F())}function X(P,B){b=p(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,Q(M))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var k=h;h=B;try{return P()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=h;h=P;try{return B()}finally{h=k}},t.unstable_scheduleCallback=function(P,B,k){var ie=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ie+k:ie):k=ie,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=k+D,P={id:f++,callback:B,priorityLevel:P,startTime:k,expirationTime:D,sortIndex:-1},k>ie?(P.sortIndex=k,e(u,P),n(l)===null&&P===n(u)&&(v?(c(b),b=-1):v=!0,X(y,k-ie))):(P.sortIndex=D,e(l,P),x||g||(x=!0,Q(M))),P},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(P){var B=h;return function(){var k=h;h=B;try{return P.apply(this,arguments)}finally{h=k}}}})(Pm);bm.exports=Pm;var f_=bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=re,cn=f_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,ho={};function Rr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(ho[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=Object.prototype.hasOwnProperty,d_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fd={},Od={};function h_(t){return ac.call(Od,t)?!0:ac.call(Fd,t)?!1:d_.test(t)?Od[t]=!0:(Fd[t]=!0,!1)}function p_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m_(t,e,n,i){if(e===null||typeof e>"u"||p_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,Sf);Pt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,Sf);Pt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,Sf);Pt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m_(e,n,r,i)&&(n=null),i||r===null?h_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Kr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),kd=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,eu;function Ks(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+t}var tu=!1;function nu(t,e){if(!t||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function g_(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=nu(t.type,!1),t;case 11:return t=nu(t.type.render,!1),t;case 1:return t=nu(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Kr:return"Portal";case lc:return"Profiler";case Mf:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function __(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v_(t){var e=Om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=v_(t))}function km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function hc(t,e){zm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&pc(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pc(t,e,n){(e!=="number"||Ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Zs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function Bm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,Gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x_=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){x_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function Vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Wm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var y_=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yc=null,fs=null,ds=null;function Vd(t){if(t=Fo(t)){if(typeof yc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Rl(e),yc(t.stateNode,t.type,e))}}function Xm(t){fs?ds?ds.push(t):ds=[t]:fs=t}function jm(){if(fs){var t=fs,e=ds;if(ds=fs=null,Vd(t),e)for(t=0;t<e.length;t++)Vd(e[t])}}function qm(t,e){return t(e)}function $m(){}var iu=!1;function Ym(t,e,n){if(iu)return t(e,n);iu=!0;try{return qm(t,e,n)}finally{iu=!1,(fs!==null||ds!==null)&&($m(),jm())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var i=Rl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Sc=!1;if(gi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Sc=!1}function S_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var io=!1,Za=null,Qa=!1,Ec=null,E_={onError:function(t){io=!0,Za=t}};function M_(t,e,n,i,r,s,o,a,l){io=!1,Za=null,S_.apply(E_,arguments)}function w_(t,e,n,i,r,s,o,a,l){if(M_.apply(this,arguments),io){if(io){var u=Za;io=!1,Za=null}else throw Error(ee(198));Qa||(Qa=!0,Ec=u)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wd(t){if(Lr(t)!==t)throw Error(ee(188))}function T_(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wd(r),t;if(s===i)return Wd(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Zm(t){return t=T_(t),t!==null?Qm(t):null}function Qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=cn.unstable_scheduleCallback,Xd=cn.unstable_cancelCallback,C_=cn.unstable_shouldYield,A_=cn.unstable_requestPaint,ct=cn.unstable_now,R_=cn.unstable_getCurrentPriorityLevel,Af=cn.unstable_ImmediatePriority,e0=cn.unstable_UserBlockingPriority,Ja=cn.unstable_NormalPriority,L_=cn.unstable_LowPriority,t0=cn.unstable_IdlePriority,wl=null,Xn=null;function b_(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:U_,P_=Math.log,D_=Math.LN2;function U_(t){return t>>>=0,t===0?32:31-(P_(t)/D_|0)|0}var Qo=64,Jo=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qs(a):(s&=o,s!==0&&(i=Qs(s)))}else o=n&~r,o!==0?i=Qs(o):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function N_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=N_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function F_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function i0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r0,Lf,s0,o0,a0,wc=!1,ea=[],Fi=null,Oi=null,ki=null,go=new Map,_o=new Map,bi=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fo(e),e!==null&&Lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k_(t,e,n,i,r){switch(e){case"focusin":return Fi=zs(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=zs(Oi,t,e,n,i,r),!0;case"mouseover":return ki=zs(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return go.set(s,zs(go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_o.set(s,zs(_o.get(s)||null,t,e,n,i,r)),!0}return!1}function l0(t){var e=dr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,a0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xc=i,n.target.dispatchEvent(i),xc=null}else return e=Fo(n),e!==null&&Lf(e),t.blockedOn=n,!1;e.shift()}return!0}function qd(t,e,n){Fa(t)&&n.delete(e)}function z_(){wc=!1,Fi!==null&&Fa(Fi)&&(Fi=null),Oi!==null&&Fa(Oi)&&(Oi=null),ki!==null&&Fa(ki)&&(ki=null),go.forEach(qd),_o.forEach(qd)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,z_)))}function vo(t){function e(r){return Bs(r,t)}if(0<ea.length){Bs(ea[0],t);for(var n=1;n<ea.length;n++){var i=ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Bs(Fi,t),Oi!==null&&Bs(Oi,t),ki!==null&&Bs(ki,t),go.forEach(e),_o.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&bi.shift()}var hs=yi.ReactCurrentBatchConfig,tl=!0;function B_(t,e,n,i){var r=qe,s=hs.transition;hs.transition=null;try{qe=1,bf(t,e,n,i)}finally{qe=r,hs.transition=s}}function H_(t,e,n,i){var r=qe,s=hs.transition;hs.transition=null;try{qe=4,bf(t,e,n,i)}finally{qe=r,hs.transition=s}}function bf(t,e,n,i){if(tl){var r=Tc(t,e,n,i);if(r===null)pu(t,e,i,nl,n),jd(t,i);else if(k_(r,t,e,n,i))i.stopPropagation();else if(jd(t,i),e&4&&-1<O_.indexOf(t)){for(;r!==null;){var s=Fo(r);if(s!==null&&r0(s),s=Tc(t,e,n,i),s===null&&pu(t,e,i,nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(t,e,i,null,n)}}var nl=null;function Tc(t,e,n,i){if(nl=null,t=Cf(i),t=dr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R_()){case Af:return 1;case e0:return 4;case Ja:case L_:return 16;case t0:return 536870912;default:return 16}default:return 16}}var Di=null,Pf=null,Oa=null;function c0(){if(Oa)return Oa;var t,e=Pf,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Oa=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function $d(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:$d,this.isPropagationStopped=$d,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=dn(Ps),Io=st({},Ps,{view:0,detail:0}),G_=dn(Io),su,ou,Hs,Tl=st({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(su=t.screenX-Hs.screenX,ou=t.screenY-Hs.screenY):ou=su=0,Hs=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),Yd=dn(Tl),V_=st({},Tl,{dataTransfer:0}),W_=dn(V_),X_=st({},Io,{relatedTarget:0}),au=dn(X_),j_=st({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),q_=dn(j_),$_=st({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y_=dn($_),K_=st({},Ps,{data:0}),Kd=dn(K_),Z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J_[t])?!!e[t]:!1}function Uf(){return ev}var tv=st({},Io,{key:function(t){if(t.key){var e=Z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nv=dn(tv),iv=st({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=dn(iv),rv=st({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),sv=dn(rv),ov=st({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=dn(ov),lv=st({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uv=dn(lv),cv=[9,13,27,32],Nf=gi&&"CompositionEvent"in window,ro=null;gi&&"documentMode"in document&&(ro=document.documentMode);var fv=gi&&"TextEvent"in window&&!ro,f0=gi&&(!Nf||ro&&8<ro&&11>=ro),Qd=String.fromCharCode(32),Jd=!1;function d0(t,e){switch(t){case"keyup":return cv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function dv(t,e){switch(t){case"compositionend":return h0(e);case"keypress":return e.which!==32?null:(Jd=!0,Qd);case"textInput":return t=e.data,t===Qd&&Jd?null:t;default:return null}}function hv(t,e){if(Qr)return t==="compositionend"||!Nf&&d0(t,e)?(t=c0(),Oa=Pf=Di=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f0&&e.locale!=="ko"?null:e.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pv[t.type]:e==="textarea"}function p0(t,e,n,i){Xm(i),e=il(e,"onChange"),0<e.length&&(n=new Df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,xo=null;function mv(t){T0(t,0)}function Cl(t){var e=ts(t);if(km(e))return t}function gv(t,e){if(t==="change")return e}var m0=!1;if(gi){var lu;if(gi){var uu="oninput"in document;if(!uu){var th=document.createElement("div");th.setAttribute("oninput","return;"),uu=typeof th.oninput=="function"}lu=uu}else lu=!1;m0=lu&&(!document.documentMode||9<document.documentMode)}function nh(){so&&(so.detachEvent("onpropertychange",g0),xo=so=null)}function g0(t){if(t.propertyName==="value"&&Cl(xo)){var e=[];p0(e,xo,t,Cf(t)),Ym(mv,e)}}function _v(t,e,n){t==="focusin"?(nh(),so=e,xo=n,so.attachEvent("onpropertychange",g0)):t==="focusout"&&nh()}function vv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(xo)}function xv(t,e){if(t==="click")return Cl(e)}function yv(t,e){if(t==="input"||t==="change")return Cl(e)}function Sv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:Sv;function yo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ac.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rh(t,e){var n=ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ih(n)}}function _0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=Ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ka(t.document)}return e}function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ev(t){var e=v0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(i!==null&&If(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rh(n,s);var o=rh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mv=gi&&"documentMode"in document&&11>=document.documentMode,Jr=null,Cc=null,oo=null,Ac=!1;function sh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||Jr==null||Jr!==Ka(i)||(i=Jr,"selectionStart"in i&&If(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&yo(oo,i)||(oo=i,i=il(Cc,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},cu={},x0={};gi&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Al(t){if(cu[t])return cu[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return cu[t]=e[n];return t}var y0=Al("animationend"),S0=Al("animationiteration"),E0=Al("animationstart"),M0=Al("transitionend"),w0=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){w0.set(t,e),Rr(e,[t])}for(var fu=0;fu<oh.length;fu++){var du=oh[fu],wv=du.toLowerCase(),Tv=du[0].toUpperCase()+du.slice(1);Zi(wv,"on"+Tv)}Zi(y0,"onAnimationEnd");Zi(S0,"onAnimationIteration");Zi(E0,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(M0,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function ah(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,w_(i,e,void 0,t),t.currentTarget=null}function T0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ah(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ah(r,a,u),s=l}}}if(Qa)throw t=Ec,Qa=!1,Ec=null,t}function et(t,e){var n=e[Dc];n===void 0&&(n=e[Dc]=new Set);var i=t+"__bubble";n.has(i)||(C0(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),C0(n,t,i,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[ia]){t[ia]=!0,Um.forEach(function(n){n!=="selectionchange"&&(Cv.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,hu("selectionchange",!1,e))}}function C0(t,e,n,i){switch(u0(e)){case 1:var r=B_;break;case 4:r=H_;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!Sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ym(function(){var u=s,f=Cf(n),d=[];e:{var h=w0.get(t);if(h!==void 0){var g=Df,x=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":g=nv;break;case"focusin":x="focus",g=au;break;case"focusout":x="blur",g=au;break;case"beforeblur":case"afterblur":g=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=sv;break;case y0:case S0:case E0:g=q_;break;case M0:g=av;break;case"scroll":g=G_;break;case"wheel":g=uv;break;case"copy":case"cut":case"paste":g=Y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Zd}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,m;_!==null;){m=_;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,c!==null&&(y=mo(_,c),y!=null&&v.push(Eo(_,y,m)))),p)break;_=_.return}0<v.length&&(h=new g(h,x,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==xc&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[_i]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?dr(x):null,x!==null&&(p=Lr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(v=Yd,y="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zd,y="onPointerLeave",c="onPointerEnter",_="pointer"),p=g==null?h:ts(g),m=x==null?h:ts(x),h=new v(y,_+"leave",g,n,f),h.target=p,h.relatedTarget=m,y=null,dr(f)===u&&(v=new v(c,_+"enter",x,n,f),v.target=m,v.relatedTarget=p,y=v),p=y,g&&x)t:{for(v=g,c=x,_=0,m=v;m;m=Dr(m))_++;for(m=0,y=c;y;y=Dr(y))m++;for(;0<_-m;)v=Dr(v),_--;for(;0<m-_;)c=Dr(c),m--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=Dr(v),c=Dr(c)}v=null}else v=null;g!==null&&lh(d,h,g,v,!1),x!==null&&p!==null&&lh(d,p,x,v,!0)}}e:{if(h=u?ts(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var M=gv;else if(eh(h))if(m0)M=yv;else{M=vv;var C=_v}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=xv);if(M&&(M=M(t,u))){p0(d,M,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&pc(h,"number",h.value)}switch(C=u?ts(u):window,t){case"focusin":(eh(C)||C.contentEditable==="true")&&(Jr=C,Cc=u,oo=null);break;case"focusout":oo=Cc=Jr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,sh(d,n,f);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":sh(d,n,f)}var R;if(Nf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qr?d0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(f0&&n.locale!=="ko"&&(Qr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qr&&(R=c0()):(Di=f,Pf="value"in Di?Di.value:Di.textContent,Qr=!0)),C=il(u,b),0<C.length&&(b=new Kd(b,t,null,n,f),d.push({event:b,listeners:C}),R?b.data=R:(R=h0(n),R!==null&&(b.data=R)))),(R=fv?dv(t,n):hv(t,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(f=new Kd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=R))}T0(d,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=mo(t,n),s!=null&&i.unshift(Eo(t,s,r)),s=mo(t,e),s!=null&&i.push(Eo(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=mo(n,s),l!=null&&o.unshift(Eo(n,l,a))):r||(l=mo(n,s),l!=null&&o.push(Eo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Av=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(Av,`
`).replace(Rv,"")}function ra(t,e,n){if(e=uh(e),uh(t)!==e&&n)throw Error(ee(425))}function rl(){}var Rc=null,Lc=null;function bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(Pv)}:Pc;function Pv(t){setTimeout(function(){throw t})}function mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);vo(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ds,Mo="__reactProps$"+Ds,_i="__reactContainer$"+Ds,Dc="__reactEvents$"+Ds,Dv="__reactListeners$"+Ds,Uv="__reactHandles$"+Ds;function dr(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fh(t);t!==null;){if(n=t[Vn])return n;t=fh(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Vn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Rl(t){return t[Mo]||null}var Uc=[],ns=-1;function Qi(t){return{current:t}}function tt(t){0>ns||(t.current=Uc[ns],Uc[ns]=null,ns--)}function Ze(t,e){ns++,Uc[ns]=t.current,t.current=e}var qi={},kt=Qi(qi),Kt=Qi(!1),Er=qi;function xs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function sl(){tt(Kt),tt(kt)}function dh(t,e,n){if(kt.current!==qi)throw Error(ee(168));Ze(kt,e),Ze(Kt,n)}function A0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,__(t)||"Unknown",r));return st({},n,i)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,Er=kt.current,Ze(kt,t),Ze(Kt,Kt.current),!0}function hh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=A0(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,tt(Kt),tt(kt),Ze(kt,t)):tt(Kt),Ze(Kt,n)}var ai=null,Ll=!1,gu=!1;function R0(t){ai===null?ai=[t]:ai.push(t)}function Nv(t){Ll=!0,R0(t)}function Ji(){if(!gu&&ai!==null){gu=!0;var t=0,e=qe;try{var n=ai;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Ll=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Jm(Af,Ji),r}finally{qe=e,gu=!1}}return null}var is=[],rs=0,al=null,ll=0,mn=[],gn=0,Mr=null,ui=1,ci="";function lr(t,e){is[rs++]=ll,is[rs++]=al,al=t,ll=e}function L0(t,e,n){mn[gn++]=ui,mn[gn++]=ci,mn[gn++]=Mr,Mr=t;var i=ui;t=ci;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-Fn(e)+r|n<<r|i,ci=s+t}else ui=1<<s|n<<r|i,ci=t}function Ff(t){t.return!==null&&(lr(t,1),L0(t,1,0))}function Of(t){for(;t===al;)al=is[--rs],is[rs]=null,ll=is[--rs],is[rs]=null;for(;t===Mr;)Mr=mn[--gn],mn[gn]=null,ci=mn[--gn],mn[gn]=null,ui=mn[--gn],mn[gn]=null}var an=null,on=null,nt=!1,Dn=null;function b0(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,on=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ui,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,on=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ic(t){if(nt){var e=on;if(e){var n=e;if(!ph(t,e)){if(Nc(t))throw Error(ee(418));e=zi(n.nextSibling);var i=an;e&&ph(t,e)?b0(i,n):(t.flags=t.flags&-4097|2,nt=!1,an=t)}}else{if(Nc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,nt=!1,an=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function sa(t){if(t!==an)return!1;if(!nt)return mh(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bc(t.type,t.memoizedProps)),e&&(e=on)){if(Nc(t))throw P0(),Error(ee(418));for(;e;)b0(t,e),e=zi(e.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=an?zi(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=on;t;)t=zi(t.nextSibling)}function ys(){on=an=null,nt=!1}function kf(t){Dn===null?Dn=[t]:Dn.push(t)}var Iv=yi.ReactCurrentBatchConfig;function bn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ul=Qi(null),cl=null,ss=null,zf=null;function Bf(){zf=ss=cl=null}function Hf(t){var e=ul.current;tt(ul),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){cl=t,zf=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(zf!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(cl===null)throw Error(ee(308));ss=t,cl.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var hr=null;function Gf(t){hr===null?hr=[t]:hr.push(t)}function D0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}function gh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(h=e,g=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(g,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(g,d,h):x,h==null)break e;d=st({},d,h);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=d}}function _h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var N0=new Dm.Component().refs;function Oc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Gi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(On(e,t,r,i),za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Gi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(On(e,t,r,i),za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Gi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(On(e,t,i,n),za(e,t,i))}};function vh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,i)||!yo(r,s):!0}function I0(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Zt(e)?Er:kt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bl.enqueueReplaceState(e,e.state,null)}function kc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=N0,Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Zt(e)?Er:kt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bl.enqueueReplaceState(r,r.state,null),fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===N0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yh(t){var e=t._init;return e(t._payload)}function F0(t){function e(c,_){if(t){var m=c.deletions;m===null?(c.deletions=[_],c.flags|=16):m.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Vi(c,_),c.index=0,c.sibling=null,c}function s(c,_,m){return c.index=m,t?(m=c.alternate,m!==null?(m=m.index,m<_?(c.flags|=2,_):m):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,m,y){return _===null||_.tag!==6?(_=Mu(m,c.mode,y),_.return=c,_):(_=r(_,m),_.return=c,_)}function l(c,_,m,y){var M=m.type;return M===Zr?f(c,_,m.props.children,y,m.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ai&&yh(M)===_.type)?(y=r(_,m.props),y.ref=Gs(c,_,m),y.return=c,y):(y=Xa(m.type,m.key,m.props,null,c.mode,y),y.ref=Gs(c,_,m),y.return=c,y)}function u(c,_,m,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=wu(m,c.mode,y),_.return=c,_):(_=r(_,m.children||[]),_.return=c,_)}function f(c,_,m,y,M){return _===null||_.tag!==7?(_=gr(m,c.mode,y,M),_.return=c,_):(_=r(_,m),_.return=c,_)}function d(c,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Mu(""+_,c.mode,m),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return m=Xa(_.type,_.key,_.props,null,c.mode,m),m.ref=Gs(c,null,_),m.return=c,m;case Kr:return _=wu(_,c.mode,m),_.return=c,_;case Ai:var y=_._init;return d(c,y(_._payload),m)}if(Zs(_)||Os(_))return _=gr(_,c.mode,m,null),_.return=c,_;oa(c,_)}return null}function h(c,_,m,y){var M=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return M!==null?null:a(c,_,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yo:return m.key===M?l(c,_,m,y):null;case Kr:return m.key===M?u(c,_,m,y):null;case Ai:return M=m._init,h(c,_,M(m._payload),y)}if(Zs(m)||Os(m))return M!==null?null:f(c,_,m,y,null);oa(c,m)}return null}function g(c,_,m,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(m)||null,a(_,c,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yo:return c=c.get(y.key===null?m:y.key)||null,l(_,c,y,M);case Kr:return c=c.get(y.key===null?m:y.key)||null,u(_,c,y,M);case Ai:var C=y._init;return g(c,_,m,C(y._payload),M)}if(Zs(y)||Os(y))return c=c.get(m)||null,f(_,c,y,M,null);oa(_,y)}return null}function x(c,_,m,y){for(var M=null,C=null,R=_,b=_=0,S=null;R!==null&&b<m.length;b++){R.index>b?(S=R,R=null):S=R.sibling;var T=h(c,R,m[b],y);if(T===null){R===null&&(R=S);break}t&&R&&T.alternate===null&&e(c,R),_=s(T,_,b),C===null?M=T:C.sibling=T,C=T,R=S}if(b===m.length)return n(c,R),nt&&lr(c,b),M;if(R===null){for(;b<m.length;b++)R=d(c,m[b],y),R!==null&&(_=s(R,_,b),C===null?M=R:C.sibling=R,C=R);return nt&&lr(c,b),M}for(R=i(c,R);b<m.length;b++)S=g(R,c,b,m[b],y),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?b:S.key),_=s(S,_,b),C===null?M=S:C.sibling=S,C=S);return t&&R.forEach(function(q){return e(c,q)}),nt&&lr(c,b),M}function v(c,_,m,y){var M=Os(m);if(typeof M!="function")throw Error(ee(150));if(m=M.call(m),m==null)throw Error(ee(151));for(var C=M=null,R=_,b=_=0,S=null,T=m.next();R!==null&&!T.done;b++,T=m.next()){R.index>b?(S=R,R=null):S=R.sibling;var q=h(c,R,T.value,y);if(q===null){R===null&&(R=S);break}t&&R&&q.alternate===null&&e(c,R),_=s(q,_,b),C===null?M=q:C.sibling=q,C=q,R=S}if(T.done)return n(c,R),nt&&lr(c,b),M;if(R===null){for(;!T.done;b++,T=m.next())T=d(c,T.value,y),T!==null&&(_=s(T,_,b),C===null?M=T:C.sibling=T,C=T);return nt&&lr(c,b),M}for(R=i(c,R);!T.done;b++,T=m.next())T=g(R,c,b,T.value,y),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?b:T.key),_=s(T,_,b),C===null?M=T:C.sibling=T,C=T);return t&&R.forEach(function(Z){return e(c,Z)}),nt&&lr(c,b),M}function p(c,_,m,y){if(typeof m=="object"&&m!==null&&m.type===Zr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yo:e:{for(var M=m.key,C=_;C!==null;){if(C.key===M){if(M=m.type,M===Zr){if(C.tag===7){n(c,C.sibling),_=r(C,m.props.children),_.return=c,c=_;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ai&&yh(M)===C.type){n(c,C.sibling),_=r(C,m.props),_.ref=Gs(c,C,m),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}m.type===Zr?(_=gr(m.props.children,c.mode,y,m.key),_.return=c,c=_):(y=Xa(m.type,m.key,m.props,null,c.mode,y),y.ref=Gs(c,_,m),y.return=c,c=y)}return o(c);case Kr:e:{for(C=m.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(c,_.sibling),_=r(_,m.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=wu(m,c.mode,y),_.return=c,c=_}return o(c);case Ai:return C=m._init,p(c,_,C(m._payload),y)}if(Zs(m))return x(c,_,m,y);if(Os(m))return v(c,_,m,y);oa(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,m),_.return=c,c=_):(n(c,_),_=Mu(m,c.mode,y),_.return=c,c=_),o(c)):n(c,_)}return p}var Ss=F0(!0),O0=F0(!1),Oo={},jn=Qi(Oo),wo=Qi(Oo),To=Qi(Oo);function pr(t){if(t===Oo)throw Error(ee(174));return t}function Wf(t,e){switch(Ze(To,e),Ze(wo,t),Ze(jn,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}tt(jn),Ze(jn,e)}function Es(){tt(jn),tt(wo),tt(To)}function k0(t){pr(To.current);var e=pr(jn.current),n=gc(e,t.type);e!==n&&(Ze(wo,t),Ze(jn,n))}function Xf(t){wo.current===t&&(tt(jn),tt(wo))}var it=Qi(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function jf(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Ba=yi.ReactCurrentDispatcher,vu=yi.ReactCurrentBatchConfig,wr=0,rt=null,gt=null,Mt=null,hl=!1,ao=!1,Co=0,Fv=0;function Ut(){throw Error(ee(321))}function qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(wr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?Bv:Hv,t=n(i,r),ao){s=0;do{if(ao=!1,Co=0,25<=s)throw Error(ee(301));s+=1,Mt=gt=null,e.updateQueue=null,Ba.current=Gv,t=n(i,r)}while(ao)}if(Ba.current=pl,e=gt!==null&&gt.next!==null,wr=0,Mt=gt=rt=null,hl=!1,e)throw Error(ee(300));return t}function Yf(){var t=Co!==0;return Co=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?rt.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Mn(){if(gt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Mt===null?rt.memoizedState:Mt.next;if(e!==null)Mt=e,gt=t;else{if(t===null)throw Error(ee(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Mt===null?rt.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Ao(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((wr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,rt.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function z0(){}function B0(t,e){var n=rt,i=Mn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,Kf(V0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,G0.bind(null,n,i,r,e),void 0,null),wt===null)throw Error(ee(349));wr&30||H0(n,e,r)}return r}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,i){e.value=n,e.getSnapshot=i,W0(e)&&X0(t)}function V0(t,e,n){return n(function(){W0(e)&&X0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function X0(t){var e=vi(t,1);e!==null&&On(e,t,1,-1)}function Sh(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=zv.bind(null,rt,t),[e.memoizedState,t]}function Ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function j0(){return Mn().memoizedState}function Ha(t,e,n,i){var r=Hn();rt.flags|=t,r.memoizedState=Ro(1|e,n,void 0,i===void 0?null:i)}function Pl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&qf(i,o.deps)){r.memoizedState=Ro(e,n,s,i);return}}rt.flags|=t,r.memoizedState=Ro(1|e,n,s,i)}function Eh(t,e){return Ha(8390656,8,t,e)}function Kf(t,e){return Pl(2048,8,t,e)}function q0(t,e){return Pl(4,2,t,e)}function $0(t,e){return Pl(4,4,t,e)}function Y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Y0.bind(null,e,t),n)}function Zf(){}function Z0(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Q0(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&qf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return wr&21?(kn(n,e)||(n=n0(),rt.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function Ov(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=vu.transition;vu.transition={};try{t(!1),e()}finally{qe=n,vu.transition=i}}function eg(){return Mn().memoizedState}function kv(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},tg(t))ng(e,n);else if(n=D0(t,e,n,i),n!==null){var r=Wt();On(n,t,i,r),ig(n,e,i)}}function zv(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(tg(t))ng(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=D0(t,e,r,i),n!==null&&(r=Wt(),On(n,t,i,r),ig(n,e,i))}}function tg(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function ng(t,e){ao=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ig(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}var pl={readContext:En,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Bv={readContext:En,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Eh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,Y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kv.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Sh,useDebugValue:Zf,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Sh(!1),e=t[0];return t=Ov.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=Hn();if(nt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),wt===null)throw Error(ee(349));wr&30||H0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Eh(V0.bind(null,i,s,t),[t]),i.flags|=2048,Ro(9,G0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=wt.identifierPrefix;if(nt){var n=ci,i=ui;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hv={readContext:En,useCallback:Z0,useContext:En,useEffect:Kf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:$0,useMemo:Q0,useReducer:xu,useRef:j0,useState:function(){return xu(Ao)},useDebugValue:Zf,useDeferredValue:function(t){var e=Mn();return J0(e,gt.memoizedState,t)},useTransition:function(){var t=xu(Ao)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:B0,useId:eg,unstable_isNewReconciler:!1},Gv={readContext:En,useCallback:Z0,useContext:En,useEffect:Kf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:$0,useMemo:Q0,useReducer:yu,useRef:j0,useState:function(){return yu(Ao)},useDebugValue:Zf,useDeferredValue:function(t){var e=Mn();return gt===null?e.memoizedState=t:J0(e,gt.memoizedState,t)},useTransition:function(){var t=yu(Ao)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:B0,useId:eg,unstable_isNewReconciler:!1};function Ms(t,e){try{var n="",i=e;do n+=g_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function rg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gl||(gl=!0,Yc=i),zc(t,e)},n}function sg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zc(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Vv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=i2.bind(null,t,e,n),e.then(t,t))}function wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Th(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var Wv=yi.ReactCurrentOwner,Yt=!1;function Gt(t,e,n,i){e.child=t===null?O0(e,null,n,i):Ss(e,t.child,n,i)}function Ch(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=$f(t,e,n,i,s,r),n=Yf(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(nt&&n&&Ff(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Ah(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,og(t,e,s,i,r)):(t=Xa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function og(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(yo(s,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,xi(t,e,r)}return Bc(t,e,n,i,r)}function ag(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(as,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(as,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ze(as,sn),sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ze(as,sn),sn|=i;return Gt(t,e,r,n),e.child}function lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,i,r){var s=Zt(n)?Er:kt.current;return s=xs(e,s),ps(e,r),n=$f(t,e,n,i,s,r),i=Yf(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(nt&&i&&Ff(e),e.flags|=1,Gt(t,e,n,r),e.child)}function Rh(t,e,n,i,r){if(Zt(n)){var s=!0;ol(e)}else s=!1;if(ps(e,r),e.stateNode===null)Ga(t,e),I0(e,n,i),kc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=Zt(n)?Er:kt.current,u=xs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&xh(e,o,i,u),Ri=!1;var h=e.memoizedState;o.state=h,fl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Kt.current||Ri?(typeof f=="function"&&(Oc(e,n,f,i),l=e.memoizedState),(a=Ri||vh(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,U0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:bn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Zt(n)?Er:kt.current,l=xs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xh(e,o,i,l),Ri=!1,h=e.memoizedState,o.state=h,fl(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Kt.current||Ri?(typeof g=="function"&&(Oc(e,n,g,i),x=e.memoizedState),(u=Ri||vh(e,n,u,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hc(t,e,n,i,s,r)}function Hc(t,e,n,i,r,s){lg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hh(e,n,!1),xi(t,e,s);i=e.stateNode,Wv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&hh(e,n,!0),e.child}function ug(t){var e=t.stateNode;e.pendingContext?dh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dh(t,e.context,!1),Wf(t,e.containerInfo)}function Lh(t,e,n,i,r){return ys(),kf(r),e.flags|=256,Gt(t,e,n,i),e.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cg(t,e,n){var i=e.pendingProps,r=it.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ze(it,r&1),t===null)return Ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vc(n),e.memoizedState=Gc,t):Qf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Xv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Vc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gc,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qf(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,i){return i!==null&&kf(i),Ss(e,t.child,null,n),t=Qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Su(Error(ee(422))),aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nl({mode:"visible",children:i.children},r,0,null),s=gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Vc(o),e.memoizedState=Gc,s);if(!(e.mode&1))return aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Su(s,i,void 0),aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Yt||a){if(i=wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),On(i,t,r,-1))}return rd(),i=Su(Error(ee(421))),aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=r2.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,on=zi(r.nextSibling),an=e,nt=!0,Dn=null,t!==null&&(mn[gn++]=ui,mn[gn++]=ci,mn[gn++]=Mr,ui=t.id,ci=t.overflow,Mr=e),e=Qf(e,i.children),e.flags|=4096,e)}function bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fc(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=it.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bh(t,n,e);else if(t.tag===19)bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ze(it,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jv(t,e,n){switch(e.tag){case 3:ug(e),ys();break;case 5:k0(e);break;case 1:Zt(e.type)&&ol(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?cg(t,e,n):(Ze(it,it.current&1),t=xi(t,e,n),t!==null?t.sibling:null);Ze(it,it.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,ag(t,e,n)}return xi(t,e,n)}var dg,Wc,hg,pg;dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};hg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(jn.current);var s=null;switch(n){case"input":r=dc(t,r),i=dc(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=mc(t,r),i=mc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rl)}_c(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ho.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ho.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qv(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Zt(e.type)&&sl(),Nt(e),null;case 3:return i=e.stateNode,Es(),tt(Kt),tt(kt),jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Qc(Dn),Dn=null))),Wc(t,e),Nt(e),null;case 5:Xf(e);var r=pr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)hg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Nt(e),null}if(t=pr(jn.current),sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Vn]=e,i[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)et(Js[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":zd(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Hd(i,s),et("invalid",i)}_c(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",""+a]):ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&et("scroll",i)}switch(n){case"input":Ko(i),Bd(i,s,!0);break;case"textarea":Ko(i),Gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Vn]=e,t[Mo]=i,dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=vc(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)et(Js[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":zd(t,i),r=dc(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),et("invalid",t);break;case"textarea":Hd(t,i),r=mc(t,i),et("invalid",t);break;default:r=i}_c(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&po(t,l):typeof l=="number"&&po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&Ef(t,s,l,o))}switch(n){case"input":Ko(t),Bd(t,i,!1);break;case"textarea":Ko(t),Gd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)pg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=pr(To.current),pr(jn.current),sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Vn]=e,(s=i.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Vn]=e,e.stateNode=i}return Nt(e),null;case 13:if(tt(it),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&on!==null&&e.mode&1&&!(e.flags&128))P0(),ys(),e.flags|=98560,s=!1;else if(s=sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Vn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Dn!==null&&(Qc(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?_t===0&&(_t=3):rd())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return Es(),Wc(t,e),t===null&&So(e.stateNode.containerInfo),Nt(e),null;case 10:return Hf(e.type._context),Nt(e),null;case 17:return Zt(e.type)&&sl(),Nt(e),null;case 19:if(tt(it),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vs(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,Vs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ze(it,it.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>ws&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=dl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Nt(e),null}else 2*ct()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=it.current,Ze(it,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?sn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function $v(t,e){switch(Of(e),e.tag){case 1:return Zt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),tt(Kt),tt(kt),jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(tt(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(it),null;case 4:return Es(),null;case 10:return Hf(e.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var la=!1,Ot=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,he=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){lt(t,e,i)}else n.current=null}function Xc(t,e,n){try{n()}catch(i){lt(t,e,i)}}var Ph=!1;function Kv(t,e){if(Rc=tl,t=v0(),If(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lc={focusedElem:t,selectionRange:n},tl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:bn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){lt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return x=Ph,Ph=!1,x}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xc(e,n,s)}r=r.next}while(r!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mg(t){var e=t.alternate;e!==null&&(t.alternate=null,mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[Mo],delete e[Dc],delete e[Dv],delete e[Uv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gg(t){return t.tag===5||t.tag===3||t.tag===4}function Dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(i!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}function $c(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($c(t,e,n),t=t.sibling;t!==null;)$c(t,e,n),t=t.sibling}var At=null,Pn=!1;function Si(t,e,n){for(n=n.child;n!==null;)_g(t,e,n),n=n.sibling}function _g(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Ot||os(n,e);case 6:var i=At,r=Pn;At=null,Si(t,e,n),At=i,Pn=r,At!==null&&(Pn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Pn?(t=At,n=n.stateNode,t.nodeType===8?mu(t.parentNode,n):t.nodeType===1&&mu(t,n),vo(t)):mu(At,n.stateNode));break;case 4:i=At,r=Pn,At=n.stateNode.containerInfo,Pn=!0,Si(t,e,n),At=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xc(n,e,o),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Ot&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){lt(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,Si(t,e,n),Ot=i):Si(t,e,n);break;default:Si(t,e,n)}}function Uh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yv),e.forEach(function(i){var r=s2.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Pn=!1;break e;case 3:At=a.stateNode.containerInfo,Pn=!0;break e;case 4:At=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(At===null)throw Error(ee(160));_g(s,o,r),At=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vg(e,t),e=e.sibling}function vg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Bn(t),i&4){try{lo(3,t,t.return),Dl(3,t)}catch(v){lt(t,t.return,v)}try{lo(5,t,t.return)}catch(v){lt(t,t.return,v)}}break;case 1:Tn(e,t),Bn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(Tn(e,t),Bn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{po(r,"")}catch(v){lt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),vc(a,o);var u=vc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Wm(r,d):f==="dangerouslySetInnerHTML"?Gm(r,d):f==="children"?po(r,d):Ef(r,f,d,u)}switch(a){case"input":hc(r,s);break;case"textarea":Bm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?cs(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(v){lt(t,t.return,v)}}break;case 6:if(Tn(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){lt(t,t.return,v)}}break;case 3:if(Tn(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(v){lt(t,t.return,v)}break;case 4:Tn(e,t),Bn(t);break;case 13:Tn(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(td=ct())),i&4&&Uh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||f,Tn(e,t),Ot=u):Tn(e,t),Bn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(d=he=f;he!==null;){switch(h=he,g=h.child,h.tag){case 0:case 11:case 14:case 15:lo(4,h,h.return);break;case 1:os(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){lt(i,n,v)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){Ih(d);continue}}g!==null?(g.return=h,he=g):Ih(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vm("display",o))}catch(v){lt(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){lt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tn(e,t),Bn(t),i&4&&Uh(t);break;case 21:break;default:Tn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(po(r,""),i.flags&=-33);var s=Dh(t);$c(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dh(t);qc(t,a,o);break;default:throw Error(ee(161))}}catch(l){lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zv(t,e,n){he=t,xg(t)}function xg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||la;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=la;var u=Ot;if(la=o,(Ot=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Fh(r):l!==null?(l.return=o,he=l):Fh(r);for(;s!==null;)he=s,xg(s),s=s.sibling;he=r,la=a,Ot=u}Nh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Nh(t)}}function Nh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_h(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_h(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ot||e.flags&512&&jc(e)}catch(h){lt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Ih(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Fh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var s=e.return;try{jc(e)}catch(l){lt(e,s,l)}break;case 5:var o=e.return;try{jc(e)}catch(l){lt(e,o,l)}}}catch(l){lt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Qv=Math.ceil,ml=yi.ReactCurrentDispatcher,Jf=yi.ReactCurrentOwner,yn=yi.ReactCurrentBatchConfig,Xe=0,wt=null,pt=null,Lt=0,sn=0,as=Qi(0),_t=0,Lo=null,Tr=0,Ul=0,ed=0,uo=null,qt=null,td=0,ws=1/0,oi=null,gl=!1,Yc=null,Hi=null,ua=!1,Ui=null,_l=0,co=0,Kc=null,Va=-1,Wa=0;function Wt(){return Xe&6?ct():Va!==-1?Va:Va=ct()}function Gi(t){return t.mode&1?Xe&2&&Lt!==0?Lt&-Lt:Iv.transition!==null?(Wa===0&&(Wa=n0()),Wa):(t=qe,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function On(t,e,n,i){if(50<co)throw co=0,Kc=null,Error(ee(185));No(t,n,i),(!(Xe&2)||t!==wt)&&(t===wt&&(!(Xe&2)&&(Ul|=n),_t===4&&Pi(t,Lt)),Qt(t,i),n===1&&Xe===0&&!(e.mode&1)&&(ws=ct()+500,Ll&&Ji()))}function Qt(t,e){var n=t.callbackNode;I_(t,e);var i=el(t,t===wt?Lt:0);if(i===0)n!==null&&Xd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xd(n),e===1)t.tag===0?Nv(Oh.bind(null,t)):R0(Oh.bind(null,t)),bv(function(){!(Xe&6)&&Ji()}),n=null;else{switch(i0(i)){case 1:n=Af;break;case 4:n=e0;break;case 16:n=Ja;break;case 536870912:n=t0;break;default:n=Ja}n=Ag(n,yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yg(t,e){if(Va=-1,Wa=0,Xe&6)throw Error(ee(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=el(t,t===wt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vl(t,i);else{e=i;var r=Xe;Xe|=2;var s=Eg();(wt!==t||Lt!==e)&&(oi=null,ws=ct()+500,mr(t,e));do try{t2();break}catch(a){Sg(t,a)}while(1);Bf(),ml.current=s,Xe=r,pt!==null?e=0:(wt=null,Lt=0,e=_t)}if(e!==0){if(e===2&&(r=Mc(t),r!==0&&(i=r,e=Zc(t,r))),e===1)throw n=Lo,mr(t,0),Pi(t,i),Qt(t,ct()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Jv(r)&&(e=vl(t,i),e===2&&(s=Mc(t),s!==0&&(i=s,e=Zc(t,s))),e===1))throw n=Lo,mr(t,0),Pi(t,i),Qt(t,ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ur(t,qt,oi);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=td+500-ct(),10<e)){if(el(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pc(ur.bind(null,t,qt,oi),e);break}ur(t,qt,oi);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qv(i/1960))-i,10<i){t.timeoutHandle=Pc(ur.bind(null,t,qt,oi),i);break}ur(t,qt,oi);break;case 5:ur(t,qt,oi);break;default:throw Error(ee(329))}}}return Qt(t,ct()),t.callbackNode===n?yg.bind(null,t):null}function Zc(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=qt,qt=n,e!==null&&Qc(e)),t}function Qc(t){qt===null?qt=t:qt.push.apply(qt,t)}function Jv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~ed,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function Oh(t){if(Xe&6)throw Error(ee(327));ms();var e=el(t,0);if(!(e&1))return Qt(t,ct()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var i=Mc(t);i!==0&&(e=i,n=Zc(t,i))}if(n===1)throw n=Lo,mr(t,0),Pi(t,e),Qt(t,ct()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,qt,oi),Qt(t,ct()),null}function nd(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(ws=ct()+500,Ll&&Ji())}}function Cr(t){Ui!==null&&Ui.tag===0&&!(Xe&6)&&ms();var e=Xe;Xe|=1;var n=yn.transition,i=qe;try{if(yn.transition=null,qe=1,t)return t()}finally{qe=i,yn.transition=n,Xe=e,!(Xe&6)&&Ji()}}function id(){sn=as.current,tt(as)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lv(n)),pt!==null)for(n=pt.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sl();break;case 3:Es(),tt(Kt),tt(kt),jf();break;case 5:Xf(i);break;case 4:Es();break;case 13:tt(it);break;case 19:tt(it);break;case 10:Hf(i.type._context);break;case 22:case 23:id()}n=n.return}if(wt=t,pt=t=Vi(t.current,null),Lt=sn=e,_t=0,Lo=null,ed=Ul=Tr=0,qt=uo=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function Sg(t,e){do{var n=pt;try{if(Bf(),Ba.current=pl,hl){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hl=!1}if(wr=0,Mt=gt=rt=null,ao=!1,Co=0,Jf.current=null,n===null||n.return===null){_t=1,Lo=e,pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=wh(o);if(g!==null){g.flags&=-257,Th(g,o,a,s,e),g.mode&1&&Mh(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Mh(s,u,e),rd();break e}l=Error(ee(426))}}else if(nt&&a.mode&1){var p=wh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Th(p,o,a,s,e),kf(Ms(l,a));break e}}s=l=Ms(l,a),_t!==4&&(_t=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=rg(s,l,e);gh(s,c);break e;case 1:a=l;var _=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hi===null||!Hi.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=sg(s,a,e);gh(s,y);break e}}s=s.return}while(s!==null)}wg(n)}catch(M){e=M,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(1)}function Eg(){var t=ml.current;return ml.current=pl,t===null?pl:t}function rd(){(_t===0||_t===3||_t===2)&&(_t=4),wt===null||!(Tr&268435455)&&!(Ul&268435455)||Pi(wt,Lt)}function vl(t,e){var n=Xe;Xe|=2;var i=Eg();(wt!==t||Lt!==e)&&(oi=null,mr(t,e));do try{e2();break}catch(r){Sg(t,r)}while(1);if(Bf(),Xe=n,ml.current=i,pt!==null)throw Error(ee(261));return wt=null,Lt=0,_t}function e2(){for(;pt!==null;)Mg(pt)}function t2(){for(;pt!==null&&!C_();)Mg(pt)}function Mg(t){var e=Cg(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?wg(t):pt=e,Jf.current=null}function wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$v(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,pt=null;return}}else if(n=qv(n,e,sn),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);_t===0&&(_t=5)}function ur(t,e,n){var i=qe,r=yn.transition;try{yn.transition=null,qe=1,n2(t,e,n,i)}finally{yn.transition=r,qe=i}return null}function n2(t,e,n,i){do ms();while(Ui!==null);if(Xe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F_(t,s),t===wt&&(pt=wt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,Ag(Ja,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=qe;qe=1;var a=Xe;Xe|=4,Jf.current=null,Kv(t,n),vg(n,t),Ev(Lc),tl=!!Rc,Lc=Rc=null,t.current=n,Zv(n),A_(),Xe=a,qe=o,yn.transition=s}else t.current=n;if(ua&&(ua=!1,Ui=t,_l=r),s=t.pendingLanes,s===0&&(Hi=null),b_(n.stateNode),Qt(t,ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gl)throw gl=!1,t=Yc,Yc=null,t;return _l&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===Kc?co++:(co=0,Kc=t):co=0,Ji(),null}function ms(){if(Ui!==null){var t=i0(_l),e=yn.transition,n=qe;try{if(yn.transition=null,qe=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,_l=0,Xe&6)throw Error(ee(331));var r=Xe;for(Xe|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var d=f.child;if(d!==null)d.return=f,he=d;else for(;he!==null;){f=he;var h=f.sibling,g=f.return;if(mg(f),f===u){he=null;break}if(h!==null){h.return=g,he=h;break}he=g}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,he=c;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,he=m;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(M){lt(a,a.return,M)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(Xe=r,Ji(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(wl,t)}catch{}i=!0}return i}finally{qe=n,yn.transition=e}}return!1}function kh(t,e,n){e=Ms(n,e),e=rg(t,e,1),t=Bi(t,e,1),e=Wt(),t!==null&&(No(t,1,e),Qt(t,e))}function lt(t,e,n){if(t.tag===3)kh(t,t,n);else for(;e!==null;){if(e.tag===3){kh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Ms(n,t),t=sg(e,t,1),e=Bi(e,t,1),t=Wt(),e!==null&&(No(e,1,t),Qt(e,t));break}}e=e.return}}function i2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(Lt&n)===n&&(_t===4||_t===3&&(Lt&130023424)===Lt&&500>ct()-td?mr(t,0):ed|=n),Qt(t,e)}function Tg(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=Wt();t=vi(t,e),t!==null&&(No(t,e,n),Qt(t,n))}function r2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tg(t,n)}function s2(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Tg(t,n)}var Cg;Cg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,jv(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,nt&&e.flags&1048576&&L0(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ga(t,e),t=e.pendingProps;var r=xs(e,kt.current);ps(e,n),r=$f(null,e,i,t,r,n);var s=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=bl,e.stateNode=r,r._reactInternals=e,kc(e,i,t,n),e=Hc(null,e,i,!0,s,n)):(e.tag=0,nt&&s&&Ff(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=a2(i),t=bn(i,t),r){case 0:e=Bc(null,e,i,t,n);break e;case 1:e=Rh(null,e,i,t,n);break e;case 11:e=Ch(null,e,i,t,n);break e;case 14:e=Ah(null,e,i,bn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Bc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Rh(t,e,i,r,n);case 3:e:{if(ug(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,U0(t,e),fl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(ee(423)),e),e=Lh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(ee(424)),e),e=Lh(t,e,i,n,r);break e}else for(on=zi(e.stateNode.containerInfo.firstChild),an=e,nt=!0,Dn=null,n=O0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=xi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return k0(e),t===null&&Ic(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,bc(i,r)?o=null:s!==null&&bc(i,s)&&(e.flags|=32),lg(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&Ic(e),null;case 13:return cg(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ch(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ze(ul,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Kt.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=En(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),Ah(t,e,i,r,n);case 15:return og(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ga(t,e),e.tag=1,Zt(i)?(t=!0,ol(e)):t=!1,ps(e,n),I0(e,i,r),kc(e,i,r,n),Hc(null,e,i,!0,t,n);case 19:return fg(t,e,n);case 22:return ag(t,e,n)}throw Error(ee(156,e.tag))};function Ag(t,e){return Jm(t,e)}function o2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new o2(t,e,n,i)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function a2(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===Tf)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zr:return gr(n.children,r,s,e);case Mf:o=8,r|=8;break;case lc:return t=xn(12,n,e,r|2),t.elementType=lc,t.lanes=s,t;case uc:return t=xn(13,n,e,r),t.elementType=uc,t.lanes=s,t;case cc:return t=xn(19,n,e,r),t.elementType=cc,t.lanes=s,t;case Fm:return Nl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:o=10;break e;case Im:o=9;break e;case wf:o=11;break e;case Tf:o=14;break e;case Ai:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function Nl(t,e,n,i){return t=xn(22,t,i,e),t.elementType=Fm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function l2(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function od(t,e,n,i,r,s,o,a,l){return t=new l2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function u2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Rg(t){if(!t)return qi;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Zt(n))return A0(t,n,e)}return e}function Lg(t,e,n,i,r,s,o,a,l){return t=od(n,i,!0,t,r,s,o,a,l),t.context=Rg(null),n=t.current,i=Wt(),r=Gi(n),s=hi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,No(t,r,i),Qt(t,i),t}function Il(t,e,n,i){var r=e.current,s=Wt(),o=Gi(r);return n=Rg(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,o),t!==null&&(On(t,r,o,s),za(t,r,o)),o}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ad(t,e){zh(t,e),(t=t.alternate)&&zh(t,e)}function c2(){return null}var bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}Fl.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Il(t,e,null,null)};Fl.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Il(null,t,null,null)}),e[_i]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&l0(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bh(){}function f2(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xl(o);s.call(u)}}var o=Lg(e,i,t,0,null,!1,!1,"",Bh);return t._reactRootContainer=o,t[_i]=o.current,So(t.nodeType===8?t.parentNode:t),Cr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xl(l);a.call(u)}}var l=od(t,0,!1,null,null,!1,!1,"",Bh);return t._reactRootContainer=l,t[_i]=l.current,So(t.nodeType===8?t.parentNode:t),Cr(function(){Il(e,l,n,i)}),l}function kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xl(o);a.call(l)}}Il(e,o,t,r)}else o=f2(n,e,t,r,i);return xl(o)}r0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Rf(e,n|1),Qt(e,ct()),!(Xe&6)&&(ws=ct()+500,Ji()))}break;case 13:Cr(function(){var i=vi(t,1);if(i!==null){var r=Wt();On(i,t,1,r)}}),ad(t,1)}};Lf=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Wt();On(e,t,134217728,n)}ad(t,134217728)}};s0=function(t){if(t.tag===13){var e=Gi(t),n=vi(t,e);if(n!==null){var i=Wt();On(n,t,e,i)}ad(t,e)}};o0=function(){return qe};a0=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};yc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rl(i);if(!r)throw Error(ee(90));km(i),hc(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};qm=nd;$m=Cr;var d2={usingClientEntryPoint:!1,Events:[Fo,ts,Rl,Xm,jm,nd]},Ws={findFiberByHostInstance:dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},h2={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||c2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{wl=ca.inject(h2),Xn=ca}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d2;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(ee(200));return u2(t,e,null,n)};fn.createRoot=function(t,e){if(!ud(t))throw Error(ee(299));var n=!1,i="",r=bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,So(t.nodeType===8?t.parentNode:t),new ld(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Zm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Cr(t)};fn.hydrate=function(t,e,n){if(!Ol(e))throw Error(ee(200));return kl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=bg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lg(e,null,t,1,n??null,r,!1,s,o),t[_i]=e.current,So(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fl(e)};fn.render=function(t,e,n){if(!Ol(e))throw Error(ee(200));return kl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(ee(40));return t._reactRootContainer?(Cr(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};fn.unstable_batchedUpdates=nd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ol(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return kl(t,e,n,!1,i)};fn.version="18.2.0-next-9e3b772b8-20220608";function Pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pg)}catch(t){console.error(t)}}Pg(),Lm.exports=fn;var p2=Lm.exports,Dg,Hh=p2;Dg=Hh.createRoot,Hh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="153",m2=0,Gh=1,g2=2,Ug=1,_2=2,si=3,$i=0,Jt=1,li=2,Wi=0,gs=1,Vh=2,Wh=3,Xh=4,v2=5,Yr=100,x2=101,y2=102,jh=103,qh=104,S2=200,E2=201,M2=202,w2=203,Ng=204,Ig=205,T2=206,C2=207,A2=208,R2=209,L2=210,b2=0,P2=1,D2=2,Jc=3,U2=4,N2=5,I2=6,F2=7,Fg=0,O2=1,k2=2,pi=0,z2=1,B2=2,H2=3,G2=4,V2=5,Og=300,Ts=301,Cs=302,ef=303,tf=304,zl=306,nf=1e3,Nn=1001,rf=1002,Vt=1003,$h=1004,Tu=1005,_n=1006,W2=1007,bo=1008,Xi=1009,X2=1010,j2=1011,fd=1012,kg=1013,Ni=1014,Ii=1015,Po=1016,zg=1017,Bg=1018,_r=1020,q2=1021,In=1023,$2=1024,Y2=1025,vr=1026,As=1027,K2=1028,Hg=1029,Z2=1030,Gg=1031,Vg=1033,Cu=33776,Au=33777,Ru=33778,Lu=33779,Yh=35840,Kh=35841,Zh=35842,Qh=35843,Q2=36196,Jh=37492,ep=37496,tp=37808,np=37809,ip=37810,rp=37811,sp=37812,op=37813,ap=37814,lp=37815,up=37816,cp=37817,fp=37818,dp=37819,hp=37820,pp=37821,bu=36492,J2=36283,mp=36284,gp=36285,_p=36286,Wg=3e3,xr=3001,ex=3200,tx=3201,nx=0,ix=1,yr="",Ue="srgb",Yn="srgb-linear",Xg="display-p3",Pu=7680,rx=519,sx=512,ox=513,ax=514,lx=515,ux=516,cx=517,fx=518,dx=519,vp=35044,xp="300 es",sf=1035,fi=2e3,yl=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=Math.PI/180,of=180/Math.PI;function ko(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function hx(t,e){return(t%e+e)%e}function Uu(t,e,n){return(1-n)*t+n*e}function yp(t){return(t&t-1)===0&&t!==0}function af(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],g=i[5],x=i[8],v=r[0],p=r[3],c=r[6],_=r[1],m=r[4],y=r[7],M=r[2],C=r[5],R=r[8];return s[0]=o*v+a*_+l*M,s[3]=o*p+a*m+l*C,s[6]=o*c+a*y+l*R,s[1]=u*v+f*_+d*M,s[4]=u*p+f*m+d*C,s[7]=u*c+f*y+d*R,s[2]=h*v+g*_+x*M,s[5]=h*p+g*m+x*C,s[8]=h*c+g*y+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,g=u*s-o*l,x=n*d+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=g*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new Ie;function jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Sp={};function fo(t){t in Sp||(Sp[t]=!0,console.warn(t))}function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const px=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mx=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gx(t){return t.convertSRGBToLinear().applyMatrix3(mx)}function _x(t){return t.applyMatrix3(px).convertLinearToSRGB()}const vx={[Yn]:t=>t,[Ue]:t=>t.convertSRGBToLinear(),[Xg]:gx},xx={[Yn]:t=>t,[Ue]:t=>t.convertLinearToSRGB(),[Xg]:_x},Cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Yn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=vx[e],r=xx[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ur;class qg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Sl("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class $g{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=ko(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fu(r[o].image)):s.push(Fu(r[o]))}else s=Fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sx=0;class ln extends Us{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Nn,r=Nn,s=_n,o=bo,a=In,l=Xi,u=ln.DEFAULT_ANISOTROPY,f=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ko(),this.name="",this.source=new $g(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===xr?Ue:yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?xr:Wg}set encoding(e){fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?Ue:yr}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Og;ln.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],g=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+g+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,y=(g+1)/2,M=(c+1)/2,C=(f+h)/4,R=(d+v)/4,b=(x+p)/4;return m>y&&m>M?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=C/i,s=R/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=R/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-v)/_,this.z=(h-f)/_,this.w=Math.acos((u+g+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ar extends Us{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?Ue:yr),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $g(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yg extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ex extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=v;return}if(d!==v||l!==h||u!==g||f!==x){let p=1-a;const c=l*h+u*g+f*x+d*v,_=c>=0?1:-1,m=1-c*c;if(m>Number.EPSILON){const M=Math.sqrt(m),C=Math.atan2(M,c*_);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const y=a*_;if(l=l*p+h*y,u=u*p+g*y,f=f*p+x*y,d=d*p+v*y,p===1-a){const M=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=M,u*=M,f*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*g-u*h,e[n+1]=l*x+f*h+u*d-a*g,e[n+2]=u*x+f*g+a*h-l*d,e[n+3]=f*x-a*d-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*g*x,this._y=u*g*d-h*f*x,this._z=u*f*x+h*g*d,this._w=u*f*d-h*g*x;break;case"YXZ":this._x=h*f*d+u*g*x,this._y=u*g*d-h*f*x,this._z=u*f*x-h*g*d,this._w=u*f*d+h*g*x;break;case"ZXY":this._x=h*f*d-u*g*x,this._y=u*g*d+h*f*x,this._z=u*f*x+h*g*d,this._w=u*f*d-h*g*x;break;case"ZYX":this._x=h*f*d-u*g*x,this._y=u*g*d+h*f*x,this._z=u*f*x-h*g*d,this._w=u*f*d+h*g*x;break;case"YZX":this._x=h*f*d+u*g*x,this._y=u*g*d+h*f*x,this._z=u*f*x-h*g*d,this._w=u*f*d-h*g*x;break;case"XZY":this._x=h*f*d-u*g*x,this._y=u*g*d-h*f*x,this._z=u*f*x+h*g*d,this._w=u*f*d+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,f=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=u*l+h*-s+f*-a-d*-o,this.y=f*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new O,Ep=new zo;class Bo{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ei.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else r.boundingBox===null&&r.computeBoundingBox(),Nr.copy(r.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),da.subVectors(this.max,Xs),Ir.subVectors(e.a,Xs),Fr.subVectors(e.b,Xs),Or.subVectors(e.c,Xs),Ei.subVectors(Fr,Ir),Mi.subVectors(Or,Fr),rr.subVectors(Ir,Or);let n=[0,-Ei.z,Ei.y,0,-Mi.z,Mi.y,0,-rr.z,rr.y,Ei.z,0,-Ei.x,Mi.z,0,-Mi.x,rr.z,0,-rr.x,-Ei.y,Ei.x,0,-Mi.y,Mi.x,0,-rr.y,rr.x,0];return!ku(n,Ir,Fr,Or,da)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,Ir,Fr,Or,da))?!1:(ha.crossVectors(Ei,Mi),n=[ha.x,ha.y,ha.z],ku(n,Ir,Fr,Or,da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,Nr=new Bo,Ir=new O,Fr=new O,Or=new O,Ei=new O,Mi=new O,rr=new O,Xs=new O,da=new O,ha=new O,sr=new O;function ku(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){sr.fromArray(t,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=n.dot(sr),f=i.dot(sr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Mx=new Bo,js=new O,zu=new O;class dd{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(zu)),this.expandByPoint(js.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new O,Bu=new O,pa=new O,wi=new O,Hu=new O,ma=new O,Gu=new O;class Kg{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bu.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Bu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=wi.dot(this.direction),l=-wi.dot(pa),u=wi.lengthSq(),f=Math.abs(1-o*o);let d,h,g,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const v=1/f;d*=v,h*=v,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bu).addScaledVector(pa,h),g}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Hu.subVectors(n,e),ma.subVectors(i,e),Gu.crossVectors(Hu,ma);let o=this.direction.dot(Gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(wi,ma));if(l<0)return null;const u=a*this.direction.dot(Hu.cross(wi));if(u<0||l+u>o)return null;const f=-a*wi.dot(Gu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,g,x,v,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,g,x,v,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,g,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=g,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,x=a*f,v=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=g+x*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,x=u*f,v=u*d;n[0]=h+v*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-x,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,x=u*f,v=u*d;n[0]=h-v*a,n[4]=-o*d,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*f,n[9]=v-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,x=a*f,v=a*d;n[0]=l*f,n[4]=x*u-g,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-h*d,n[8]=x*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=g*d+x,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,g=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+v,n[5]=o*f,n[9]=g*d-x,n[2]=x*d-g,n[6]=a*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Tx)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Ti.crossVectors(i,nn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Ti.crossVectors(i,nn)),Ti.normalize(),ga.crossVectors(nn,Ti),r[0]=Ti.x,r[4]=ga.x,r[8]=nn.x,r[1]=Ti.y,r[5]=ga.y,r[9]=nn.y,r[2]=Ti.z,r[6]=ga.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],g=i[13],x=i[2],v=i[6],p=i[10],c=i[14],_=i[3],m=i[7],y=i[11],M=i[15],C=r[0],R=r[4],b=r[8],S=r[12],T=r[1],q=r[5],Z=r[9],F=r[13],H=r[2],G=r[6],Q=r[10],X=r[14],P=r[3],B=r[7],k=r[11],ie=r[15];return s[0]=o*C+a*T+l*H+u*P,s[4]=o*R+a*q+l*G+u*B,s[8]=o*b+a*Z+l*Q+u*k,s[12]=o*S+a*F+l*X+u*ie,s[1]=f*C+d*T+h*H+g*P,s[5]=f*R+d*q+h*G+g*B,s[9]=f*b+d*Z+h*Q+g*k,s[13]=f*S+d*F+h*X+g*ie,s[2]=x*C+v*T+p*H+c*P,s[6]=x*R+v*q+p*G+c*B,s[10]=x*b+v*Z+p*Q+c*k,s[14]=x*S+v*F+p*X+c*ie,s[3]=_*C+m*T+y*H+M*P,s[7]=_*R+m*q+y*G+M*B,s[11]=_*b+m*Z+y*Q+M*k,s[15]=_*S+m*F+y*X+M*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],g=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*g-i*l*g)+v*(+n*l*g-n*u*h+s*o*h-r*o*g+r*u*f-s*l*f)+p*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],g=e[11],x=e[12],v=e[13],p=e[14],c=e[15],_=d*p*u-v*h*u+v*l*g-a*p*g-d*l*c+a*h*c,m=x*h*u-f*p*u-x*l*g+o*p*g+f*l*c-o*h*c,y=f*v*u-x*d*u+x*a*g-o*v*g-f*a*c+o*d*c,M=x*d*l-f*v*l-x*a*h+o*v*h+f*a*p-o*d*p,C=n*_+i*m+r*y+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=_*R,e[1]=(v*h*s-d*p*s-v*r*g+i*p*g+d*r*c-i*h*c)*R,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*R,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*g-i*l*g)*R,e[4]=m*R,e[5]=(f*p*s-x*h*s+x*r*g-n*p*g-f*r*c+n*h*c)*R,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*R,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*g+n*l*g)*R,e[8]=y*R,e[9]=(x*d*s-f*v*s-x*i*g+n*v*g+f*i*c-n*d*c)*R,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*R,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*g-n*a*g)*R,e[12]=M*R,e[13]=(f*v*r-x*d*r+x*i*h-n*v*h-f*i*p+n*d*p)*R,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*R,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,g=s*f,x=s*d,v=o*f,p=o*d,c=a*d,_=l*u,m=l*f,y=l*d,M=i.x,C=i.y,R=i.z;return r[0]=(1-(v+c))*M,r[1]=(g+y)*M,r[2]=(x-m)*M,r[3]=0,r[4]=(g-y)*C,r[5]=(1-(h+c))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(x+m)*R,r[9]=(p-_)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),a=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,f=1/o,d=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(a===fi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===yl)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,g=(i+r)*f;let x,v;if(a===fi)x=(o+s)*d,v=-2*d;else if(a===yl)x=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new O,An=new bt,wx=new O(0,0,0),Tx=new O(1,1,1),Ti=new O,ga=new O,nn=new O,Mp=new bt,wp=new zo;class Bl{constructor(e=0,n=0,i=0,r=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const Tp=new O,zr=new zo,ni=new bt,_a=new O,qs=new O,Ax=new O,Rx=new zo,Cp=new O(1,0,0),Ap=new O(0,1,0),Rp=new O(0,0,1),Lx={type:"added"},Lp={type:"removed"};class un extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new O,n=new Bl,i=new zo,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ie}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(qs,_a,this.up):ni.lookAt(_a,qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Lp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new O(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new O,ii=new O,Vu=new O,ri=new O,Br=new O,Hr=new O,bp=new O,Wu=new O,Xu=new O,ju=new O;let va=!1;class Un{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),ii.subVectors(i,n),Vu.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(ii),l=Rn.dot(Vu),u=ii.dot(ii),f=ii.dot(Vu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,g=(u*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,n,i,r,s,o,a,l){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri),l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ii.subVectors(e,n),Rn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),Hr.subVectors(s,i),Wu.subVectors(e,i);const l=Br.dot(Wu),u=Hr.dot(Wu);if(l<=0&&u<=0)return n.copy(i);Xu.subVectors(e,r);const f=Br.dot(Xu),d=Hr.dot(Xu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Br,o);ju.subVectors(e,s);const g=Br.dot(ju),x=Hr.dot(ju);if(x>=0&&g<=x)return n.copy(s);const v=g*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Hr,a);const p=f*x-g*d;if(p<=0&&d-f>=0&&g-x>=0)return bp.subVectors(s,r),a=(d-f)/(d-f+(g-x)),n.copy(r).addScaledVector(bp,a);const c=1/(p+v+h);return o=v*c,a=h*c,n.copy(i).addScaledVector(Br,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bx=0;class Hl extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=gs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ng,this.blendDst=Ig,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pu,this.stencilZFail=Pu,this.stencilZPass=Pu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},xa={h:0,s:0,l:0};function qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Cn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Cn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Cn.workingColorSpace){if(e=hx(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qu(o,s,e+1/3),this.g=qu(o,s,e),this.b=qu(o,s,e-1/3)}return Cn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ue){const i=Zg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Iu(e.r),this.g=Iu(e.g),this.b=Iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Cn.fromWorkingColorSpace(Ft.copy(this),e),Math.round($t(Ft.r*255,0,255))*65536+Math.round($t(Ft.g*255,0,255))*256+Math.round($t(Ft.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Cn.workingColorSpace){Cn.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Cn.workingColorSpace){return Cn.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ue){Cn.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Ue?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ln),Ln.h+=e,Ln.s+=n,Ln.l+=i,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ln),e.getHSL(xa);const i=Uu(Ln.h,xa.h,n),r=Uu(Ln.s,xa.s,n),s=Uu(Ln.l,xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new ye;ye.NAMES=Zg;class Qg extends Hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new O,ya=new $e;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this.updateRange={offset:0,count:-1},this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Jg extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e1 extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $n extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Px=0;const hn=new bt,$u=new un,Gr=new O,rn=new Bo,$s=new Bo,Et=new O;class er extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?e1:Jg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(rn.min,$s.min),rn.expandByPoint(Et),Et.addVectors(rn.max,$s.max),rn.expandByPoint(Et)):(rn.expandByPoint($s.min),rn.expandByPoint($s.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Et.fromBufferAttribute(a,u),l&&(Gr.fromBufferAttribute(e,u),Et.add(Gr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new O,f[T]=new O;const d=new O,h=new O,g=new O,x=new $e,v=new $e,p=new $e,c=new O,_=new O;function m(T,q,Z){d.fromArray(r,T*3),h.fromArray(r,q*3),g.fromArray(r,Z*3),x.fromArray(o,T*2),v.fromArray(o,q*2),p.fromArray(o,Z*2),h.sub(d),g.sub(d),v.sub(x),p.sub(x);const F=1/(v.x*p.y-p.x*v.y);isFinite(F)&&(c.copy(h).multiplyScalar(p.y).addScaledVector(g,-v.y).multiplyScalar(F),_.copy(g).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(F),u[T].add(c),u[q].add(c),u[Z].add(c),f[T].add(_),f[q].add(_),f[Z].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,q=y.length;T<q;++T){const Z=y[T],F=Z.start,H=Z.count;for(let G=F,Q=F+H;G<Q;G+=3)m(i[G+0],i[G+1],i[G+2])}const M=new O,C=new O,R=new O,b=new O;function S(T){R.fromArray(s,T*3),b.copy(R);const q=u[T];M.copy(q),M.sub(R.multiplyScalar(R.dot(q))).normalize(),C.crossVectors(b,q);const F=C.dot(f[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=F}for(let T=0,q=y.length;T<q;++T){const Z=y[T],F=Z.start,H=Z.count;for(let G=F,Q=F+H;G<Q;G+=3)S(i[G+0]),S(i[G+1]),S(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,f=new O,d=new O;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let g=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*f;for(let c=0;c<f;c++)h[x++]=u[g++]}return new qn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const g=u[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new bt,or=new Kg,Sa=new dd,Dp=new O,Vr=new O,Wr=new O,Xr=new O,Yu=new O,Ea=new O,Ma=new $e,wa=new $e,Ta=new $e,Up=new O,Np=new O,Ip=new O,Ca=new O,Aa=new O;class di extends un{constructor(e=new er,n=new Qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Yu.fromBufferAttribute(d,e),o?Ea.addScaledVector(Yu,f):Ea.addScaledVector(Yu.sub(n),f))}n.add(Ea)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Sa.containsPoint(or.origin)===!1&&(or.intersectSphere(Sa,Dp)===null||or.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Pp.copy(s).invert(),or.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const p=h[x],c=o[p.materialIndex],_=Math.max(p.start,g.start),m=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=_,M=m;y<M;y+=3){const C=a.getX(y),R=a.getX(y+1),b=a.getX(y+2);r=Ra(this,c,e,i,u,f,d,C,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=x,c=v;p<c;p+=3){const _=a.getX(p),m=a.getX(p+1),y=a.getX(p+2);r=Ra(this,o,e,i,u,f,d,_,m,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const p=h[x],c=o[p.materialIndex],_=Math.max(p.start,g.start),m=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=_,M=m;y<M;y+=3){const C=y,R=y+1,b=y+2;r=Ra(this,c,e,i,u,f,d,C,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=x,c=v;p<c;p+=3){const _=p,m=p+1,y=p+2;r=Ra(this,o,e,i,u,f,d,_,m,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Dx(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Aa);return u<n.near||u>n.far?null:{distance:u,point:Aa.clone(),object:t}}function Ra(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Vr),t.getVertexPosition(l,Wr),t.getVertexPosition(u,Xr);const f=Dx(t,e,n,i,Vr,Wr,Xr,Ca);if(f){r&&(Ma.fromBufferAttribute(r,a),wa.fromBufferAttribute(r,l),Ta.fromBufferAttribute(r,u),f.uv=Un.getInterpolation(Ca,Vr,Wr,Xr,Ma,wa,Ta,new $e)),s&&(Ma.fromBufferAttribute(s,a),wa.fromBufferAttribute(s,l),Ta.fromBufferAttribute(s,u),f.uv1=Un.getInterpolation(Ca,Vr,Wr,Xr,Ma,wa,Ta,new $e),f.uv2=f.uv1),o&&(Up.fromBufferAttribute(o,a),Np.fromBufferAttribute(o,l),Ip.fromBufferAttribute(o,u),f.normal=Un.getInterpolation(Ca,Vr,Wr,Xr,Up,Np,Ip,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};Un.getNormal(Vr,Wr,Xr,d.normal),f.face=d}return f}class Ho extends er{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(u,3)),this.setAttribute("normal",new $n(f,3)),this.setAttribute("uv",new $n(d,2));function x(v,p,c,_,m,y,M,C,R,b,S){const T=y/R,q=M/b,Z=y/2,F=M/2,H=C/2,G=R+1,Q=b+1;let X=0,P=0;const B=new O;for(let k=0;k<Q;k++){const ie=k*q-F;for(let D=0;D<G;D++){const J=D*T-Z;B[v]=J*_,B[p]=ie*m,B[c]=H,u.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[c]=C>0?1:-1,f.push(B.x,B.y,B.z),d.push(D/R),d.push(1-k/b),X+=1}}for(let k=0;k<b;k++)for(let ie=0;ie<R;ie++){const D=h+ie+G*k,J=h+ie+G*(k+1),K=h+(ie+1)+G*(k+1),de=h+(ie+1)+G*k;l.push(D,J,de),l.push(J,K,de),P+=6}a.addGroup(g,P,S),g+=P,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function Ux(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t1(t){return t.getRenderTarget()===null?t.outputColorSpace:Yn}const Nx={clone:Rs,merge:Ht};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n1 extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends n1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Du*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,qr=1;class Ox extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new vn(jr,qr,e,n);r.layers=this.layers,this.add(r);const s=new vn(jr,qr,e,n);s.layers=this.layers,this.add(s);const o=new vn(jr,qr,e,n);o.layers=this.layers,this.add(o);const a=new vn(jr,qr,e,n);a.layers=this.layers,this.add(a);const l=new vn(jr,qr,e,n);l.layers=this.layers,this.add(l);const u=new vn(jr,qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=pi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class i1 extends ln{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kx extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?Ue:yr),this.texture=new i1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ho(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Wi});s.uniforms.tEquirect.value=n;const o=new di(r,s),a=n.minFilter;return n.minFilter===bo&&(n.minFilter=_n),new Ox(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ku=new O,zx=new O,Bx=new Ie;class Li{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ku.subVectors(i,n).cross(zx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bx.getNormalMatrix(e),r=this.coplanarPoint(Ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new dd,La=new O;class r1{constructor(e=new Li,n=new Li,i=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],x=r[9],v=r[10],p=r[11],c=r[12],_=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,p-g,y-c).normalize(),i[1].setComponents(l+s,h+u,p+g,y+c).normalize(),i[2].setComponents(l+o,h+f,p+x,y+_).normalize(),i[3].setComponents(l-o,h-f,p-x,y-_).normalize(),i[4].setComponents(l-a,h-d,p-v,y-m).normalize(),n===fi)i[5].setComponents(l+a,h+d,p+v,y+m).normalize();else if(n===yl)i[5].setComponents(a,d,v,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(La.x=r.normal.x>0?e.max.x:e.min.x,La.y=r.normal.y>0?e.max.y:e.min.y,La.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function s1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,d){const h=f.array,g=f.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,f)):d.version<u.version&&(s(d.buffer,u,f),d.version=u.version)}return{get:o,remove:a,update:l}}class pd extends er{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,g=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*h-o;for(let m=0;m<u;m++){const y=m*d-s;x.push(y,-_,0),v.push(0,0,1),p.push(m/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const m=_+u*c,y=_+u*(c+1),M=_+1+u*(c+1),C=_+1+u*c;g.push(m,y,C),g.push(y,M,C)}this.setIndex(g),this.setAttribute("position",new $n(x,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x="vec3 transformed = vec3( position );",Yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zx=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,e3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a3=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,l3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,u3=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p3="gl_FragColor = linearToOutputTexel( gl_FragColor );",m3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g3=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,_3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v3=`#ifdef USE_ENVMAP
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
#endif`,x3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y3=`#ifdef USE_ENVMAP
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
#endif`,S3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T3=`#ifdef USE_GRADIENTMAP
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
}`,C3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,P3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,D3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,O3=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,k3=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,H3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,W3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,X3=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,j3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$3=`#if defined( USE_POINTS_UV )
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
#endif`,Y3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q3=`#ifdef USE_MORPHNORMALS
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
#endif`,J3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
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
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ey=`float getShadowMask() {
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
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#ifdef USE_UV
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
#endif`,Ny=`#ifdef USE_UV
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
#endif`,Iy=`#ifdef USE_UV
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
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Wy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,jy=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Qy=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,eS=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,nS=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rS=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,oS=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lS=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,cS=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`uniform float size;
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
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,pS=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,mS=`uniform float rotation;
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
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Gx,alphamap_pars_fragment:Vx,alphatest_fragment:Wx,alphatest_pars_fragment:Xx,aomap_fragment:jx,aomap_pars_fragment:qx,begin_vertex:$x,beginnormal_vertex:Yx,bsdfs:Kx,iridescence_fragment:Zx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:e3,clipping_planes_pars_vertex:t3,clipping_planes_vertex:n3,color_fragment:i3,color_pars_fragment:r3,color_pars_vertex:s3,color_vertex:o3,common:a3,cube_uv_reflection_fragment:l3,defaultnormal_vertex:u3,displacementmap_pars_vertex:c3,displacementmap_vertex:f3,emissivemap_fragment:d3,emissivemap_pars_fragment:h3,encodings_fragment:p3,encodings_pars_fragment:m3,envmap_fragment:g3,envmap_common_pars_fragment:_3,envmap_pars_fragment:v3,envmap_pars_vertex:x3,envmap_physical_pars_fragment:P3,envmap_vertex:y3,fog_vertex:S3,fog_pars_vertex:E3,fog_fragment:M3,fog_pars_fragment:w3,gradientmap_pars_fragment:T3,lightmap_fragment:C3,lightmap_pars_fragment:A3,lights_lambert_fragment:R3,lights_lambert_pars_fragment:L3,lights_pars_begin:b3,lights_toon_fragment:D3,lights_toon_pars_fragment:U3,lights_phong_fragment:N3,lights_phong_pars_fragment:I3,lights_physical_fragment:F3,lights_physical_pars_fragment:O3,lights_fragment_begin:k3,lights_fragment_maps:z3,lights_fragment_end:B3,logdepthbuf_fragment:H3,logdepthbuf_pars_fragment:G3,logdepthbuf_pars_vertex:V3,logdepthbuf_vertex:W3,map_fragment:X3,map_pars_fragment:j3,map_particle_fragment:q3,map_particle_pars_fragment:$3,metalnessmap_fragment:Y3,metalnessmap_pars_fragment:K3,morphcolor_vertex:Z3,morphnormal_vertex:Q3,morphtarget_pars_vertex:J3,morphtarget_vertex:ey,normal_fragment_begin:ty,normal_fragment_maps:ny,normal_pars_fragment:iy,normal_pars_vertex:ry,normal_vertex:sy,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:uy,iridescence_pars_fragment:cy,output_fragment:fy,packing:dy,premultiplied_alpha_fragment:hy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:gy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:vy,shadowmap_pars_fragment:xy,shadowmap_pars_vertex:yy,shadowmap_vertex:Sy,shadowmask_pars_fragment:Ey,skinbase_vertex:My,skinning_pars_vertex:wy,skinning_vertex:Ty,skinnormal_vertex:Cy,specularmap_fragment:Ay,specularmap_pars_fragment:Ry,tonemapping_fragment:Ly,tonemapping_pars_fragment:by,transmission_fragment:Py,transmission_pars_fragment:Dy,uv_pars_fragment:Uy,uv_pars_vertex:Ny,uv_vertex:Iy,worldpos_vertex:Fy,background_vert:Oy,background_frag:ky,backgroundCube_vert:zy,backgroundCube_frag:By,cube_vert:Hy,cube_frag:Gy,depth_vert:Vy,depth_frag:Wy,distanceRGBA_vert:Xy,distanceRGBA_frag:jy,equirect_vert:qy,equirect_frag:$y,linedashed_vert:Yy,linedashed_frag:Ky,meshbasic_vert:Zy,meshbasic_frag:Qy,meshlambert_vert:Jy,meshlambert_frag:eS,meshmatcap_vert:tS,meshmatcap_frag:nS,meshnormal_vert:iS,meshnormal_frag:rS,meshphong_vert:sS,meshphong_frag:oS,meshphysical_vert:aS,meshphysical_frag:lS,meshtoon_vert:uS,meshtoon_frag:cS,points_vert:fS,points_frag:dS,shadow_vert:hS,shadow_frag:pS,sprite_vert:mS,sprite_frag:gS},oe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Gn={basic:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ht([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ht([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ht([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ht([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ht([oe.lights,oe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Gn.physical={uniforms:Ht([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ba={r:0,b:0,g:0};function _S(t,e,n,i,r,s,o){const a=new ye(0);let l=s===!0?0:1,u,f,d=null,h=0,g=null;function x(p,c){let _=!1,m=c.isScene===!0?c.background:null;switch(m&&m.isTexture&&(m=(c.backgroundBlurriness>0?n:e).get(m)),m===null?v(a,l):m&&m.isColor&&(v(m,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===zl)?(f===void 0&&(f=new di(new Ho(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Rs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=m,f.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=m.colorSpace!==Ue,(d!==m||h!==m.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=m,h=m.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new di(new pd(2,2),new Yi({name:"BackgroundMaterial",uniforms:Rs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=m.colorSpace!==Ue,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||h!==m.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=m,h=m.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(ba,t1(t)),i.buffers.color.setClear(ba.r,ba.g,ba.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function vS(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function d(H,G,Q,X,P){let B=!1;if(o){const k=v(X,Q,G);u!==k&&(u=k,g(u.object)),B=c(H,X,Q,P),B&&_(H,X,Q,P)}else{const k=G.wireframe===!0;(u.geometry!==X.id||u.program!==Q.id||u.wireframe!==k)&&(u.geometry=X.id,u.program=Q.id,u.wireframe=k,B=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,b(H,G,Q,X),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function x(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function v(H,G,Q){const X=Q.wireframe===!0;let P=a[H.id];P===void 0&&(P={},a[H.id]=P);let B=P[G.id];B===void 0&&(B={},P[G.id]=B);let k=B[X];return k===void 0&&(k=p(h()),B[X]=k),k}function p(H){const G=[],Q=[],X=[];for(let P=0;P<r;P++)G[P]=0,Q[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:X,object:H,attributes:{},index:null}}function c(H,G,Q,X){const P=u.attributes,B=G.attributes;let k=0;const ie=Q.getAttributes();for(const D in ie)if(ie[D].location>=0){const K=P[D];let de=B[D];if(de===void 0&&(D==="instanceMatrix"&&H.instanceMatrix&&(de=H.instanceMatrix),D==="instanceColor"&&H.instanceColor&&(de=H.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;k++}return u.attributesNum!==k||u.index!==X}function _(H,G,Q,X){const P={},B=G.attributes;let k=0;const ie=Q.getAttributes();for(const D in ie)if(ie[D].location>=0){let K=B[D];K===void 0&&(D==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),D==="instanceColor"&&H.instanceColor&&(K=H.instanceColor));const de={};de.attribute=K,K&&K.data&&(de.data=K.data),P[D]=de,k++}u.attributes=P,u.attributesNum=k,u.index=X}function m(){const H=u.newAttributes;for(let G=0,Q=H.length;G<Q;G++)H[G]=0}function y(H){M(H,0)}function M(H,G){const Q=u.newAttributes,X=u.enabledAttributes,P=u.attributeDivisors;Q[H]=1,X[H]===0&&(t.enableVertexAttribArray(H),X[H]=1),P[H]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),P[H]=G)}function C(){const H=u.newAttributes,G=u.enabledAttributes;for(let Q=0,X=G.length;Q<X;Q++)G[Q]!==H[Q]&&(t.disableVertexAttribArray(Q),G[Q]=0)}function R(H,G,Q,X,P,B,k){k===!0?t.vertexAttribIPointer(H,G,Q,P,B):t.vertexAttribPointer(H,G,Q,X,P,B)}function b(H,G,Q,X){if(i.isWebGL2===!1&&(H.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const P=X.attributes,B=Q.getAttributes(),k=G.defaultAttributeValues;for(const ie in B){const D=B[ie];if(D.location>=0){let J=P[ie];if(J===void 0&&(ie==="instanceMatrix"&&H.instanceMatrix&&(J=H.instanceMatrix),ie==="instanceColor"&&H.instanceColor&&(J=H.instanceColor)),J!==void 0){const K=J.normalized,de=J.itemSize,fe=n.get(J);if(fe===void 0)continue;const ve=fe.buffer,Fe=fe.type,Ae=fe.bytesPerElement,yt=i.isWebGL2===!0&&(Fe===t.INT||Fe===t.UNSIGNED_INT||J.gpuType===kg);if(J.isInterleavedBufferAttribute){const Ge=J.data,N=Ge.stride,Tt=J.offset;if(Ge.isInstancedInterleavedBuffer){for(let Te=0;Te<D.locationSize;Te++)M(D.location+Te,Ge.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Te=0;Te<D.locationSize;Te++)y(D.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Te=0;Te<D.locationSize;Te++)R(D.location+Te,de/D.locationSize,Fe,K,N*Ae,(Tt+de/D.locationSize*Te)*Ae,yt)}else{if(J.isInstancedBufferAttribute){for(let Ge=0;Ge<D.locationSize;Ge++)M(D.location+Ge,J.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ge=0;Ge<D.locationSize;Ge++)y(D.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ge=0;Ge<D.locationSize;Ge++)R(D.location+Ge,de/D.locationSize,Fe,K,de*Ae,de/D.locationSize*Ge*Ae,yt)}}else if(k!==void 0){const K=k[ie];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(D.location,K);break;case 3:t.vertexAttrib3fv(D.location,K);break;case 4:t.vertexAttrib4fv(D.location,K);break;default:t.vertexAttrib1fv(D.location,K)}}}}C()}function S(){Z();for(const H in a){const G=a[H];for(const Q in G){const X=G[Q];for(const P in X)x(X[P].object),delete X[P];delete G[Q]}delete a[H]}}function T(H){if(a[H.id]===void 0)return;const G=a[H.id];for(const Q in G){const X=G[Q];for(const P in X)x(X[P].object),delete X[P];delete G[Q]}delete a[H.id]}function q(H){for(const G in a){const Q=a[G];if(Q[H.id]===void 0)continue;const X=Q[H.id];for(const P in X)x(X[P].object),delete X[P];delete Q[H.id]}}function Z(){F(),f=!0,u!==l&&(u=l,g(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:q,initAttributes:m,enableAttribute:y,disableUnusedAttributes:C}}function xS(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(r)h=t,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),n.update(f,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function yS(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,y=o||e.has("OES_texture_float"),M=m&&y,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:C}}function SS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Li,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const x=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,m=_*4;let y=c.clippingState||null;l.value=y,y=f(x,h,m,g);for(let M=0;M!==m;++M)y[M]=n[M];c.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,x){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=g+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let m=0,y=g;m!==v;++m,y+=4)o.copy(d[m]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function ES(t){let e=new WeakMap;function n(o,a){return a===ef?o.mapping=Ts:a===tf&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ef||a===tf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new kx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class MS extends n1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,Fp=[.125,.215,.35,.446,.526,.582],fr=20,Zu=new MS,Op=new ye;let Qu=null;const cr=(1+Math.sqrt(5))/2,$r=1/cr,kp=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,cr,$r),new O(0,cr,-$r),new O($r,0,cr),new O(-$r,0,cr),new O(cr,$r,0),new O(-cr,$r,0)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Po,format:In,colorSpace:Yn,depthBuffer:!1},r=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wS(s)),this._blurMaterial=TS(s,e,n)}return r}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,r){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Op),f.toneMapping=pi,f.autoClear=!1;const g=new Qg({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),x=new di(new Ho,g);let v=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,v=!0):(g.color.copy(Op),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const m=this._cubeSize;Pa(r,_*m,c>2?m:0,m,m),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kp[(r-1)%kp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new di(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*fr-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const c=[];let _=0;for(let R=0;R<fr;++R){const b=R/v,S=Math.exp(-b*b/2);c.push(S),R===0?_+=S:R<p&&(_+=2*S)}for(let R=0;R<c.length;R++)c[R]=c[R]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=x,h.mipInt.value=m-i;const y=this._sizeLods[r],M=3*y*(r>m-ls?r-m+ls:0),C=4*(this._cubeSize-y);Pa(n,M,C,3*y,2*y),l.setRenderTarget(n),l.render(d,Zu)}}function wS(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+Fp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ls?l=Fp[o-t+ls-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,x=6,v=3,p=2,c=1,_=new Float32Array(v*x*g),m=new Float32Array(p*x*g),y=new Float32Array(c*x*g);for(let C=0;C<g;C++){const R=C%3*2/3-1,b=C>2?0:-1,S=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];_.set(S,v*x*C),m.set(h,p*x*C);const T=[C,C,C,C,C,C];y.set(T,c*x*C)}const M=new er;M.setAttribute("position",new qn(_,v)),M.setAttribute("uv",new qn(m,p)),M.setAttribute("faceIndex",new qn(y,c)),e.push(M),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TS(t,e,n){const i=new Float32Array(fr),r=new O(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Hp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Gp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function md(){return`

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
	`}function CS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ef||l===tf,f=l===Ts||l===Cs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new zp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new zp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RS(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const x in g){const v=g[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(d){const h=[],g=d.index,x=d.attributes.position;let v=0;if(g!==null){const _=g.array;v=g.version;for(let m=0,y=_.length;m<y;m+=3){const M=_[m+0],C=_[m+1],R=_[m+2];h.push(M,C,C,R,R,M)}}else{const _=x.array;v=x.version;for(let m=0,y=_.length/3-1;m<y;m+=3){const M=m+0,C=m+1,R=m+2;h.push(M,C,C,R,R,M)}}const p=new(jg(h)?e1:Jg)(h,1);p.version=v;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function LS(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function f(h,g){t.drawElements(s,g,a,h*l),n.update(g,s,1)}function d(h,g,x){if(x===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,g,a,h*l,x),n.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d}function bS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PS(t,e){return t[0]-e[0]}function DS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function US(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let G=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var g=G;p!==void 0&&p.texture.dispose();const m=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let S=0;m===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let T=f.attributes.position.count*S,q=1;T>e.maxTextureSize&&(q=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Z=new Float32Array(T*q*4*v),F=new Yg(Z,T,q,v);F.type=Ii,F.needsUpdate=!0;const H=S*4;for(let Q=0;Q<v;Q++){const X=C[Q],P=R[Q],B=b[Q],k=T*q*4*Q;for(let ie=0;ie<X.count;ie++){const D=ie*H;m===!0&&(o.fromBufferAttribute(X,ie),Z[k+D+0]=o.x,Z[k+D+1]=o.y,Z[k+D+2]=o.z,Z[k+D+3]=0),y===!0&&(o.fromBufferAttribute(P,ie),Z[k+D+4]=o.x,Z[k+D+5]=o.y,Z[k+D+6]=o.z,Z[k+D+7]=0),M===!0&&(o.fromBufferAttribute(B,ie),Z[k+D+8]=o.x,Z[k+D+9]=o.y,Z[k+D+10]=o.z,Z[k+D+11]=B.itemSize===4?o.w:1)}}p={count:v,texture:F,size:new $e(T,q)},s.set(f,p),f.addEventListener("dispose",G)}let c=0;for(let m=0;m<h.length;m++)c+=h[m];const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[f.id]=v}for(let y=0;y<x;y++){const M=v[y];M[0]=y,M[1]=h[y]}v.sort(DS);for(let y=0;y<8;y++)y<x&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(PS);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=a[y],C=M[0],R=M[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&f.getAttribute("morphTarget"+y)!==p[C]&&f.setAttribute("morphTarget"+y,p[C]),c&&f.getAttribute("morphNormal"+y)!==c[C]&&f.setAttribute("morphNormal"+y,c[C]),r[y]=R,_+=R):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),c&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const m=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function NS(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const o1=new ln,a1=new Yg,l1=new Ex,u1=new i1,Vp=[],Wp=[],Xp=new Float32Array(16),jp=new Float32Array(9),qp=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gl(t,e){let n=Wp[e];n===void 0&&(n=new Int32Array(e),Wp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function OS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function kS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function zS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;qp.set(i),t.uniformMatrix2fv(this.addr,!1,qp),xt(n,i)}}function BS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;jp.set(i),t.uniformMatrix3fv(this.addr,!1,jp),xt(n,i)}}function HS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),xt(n,i)}}function GS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function WS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function XS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function jS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function $S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function YS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function KS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||o1,r)}function ZS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l1,r)}function QS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u1,r)}function JS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||a1,r)}function eE(t){switch(t){case 5126:return IS;case 35664:return FS;case 35665:return OS;case 35666:return kS;case 35674:return zS;case 35675:return BS;case 35676:return HS;case 5124:case 35670:return GS;case 35667:case 35671:return VS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return jS;case 36294:return qS;case 36295:return $S;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return JS}}function tE(t,e){t.uniform1fv(this.addr,e)}function nE(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function iE(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function rE(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function sE(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oE(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aE(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lE(t,e){t.uniform1iv(this.addr,e)}function uE(t,e){t.uniform2iv(this.addr,e)}function cE(t,e){t.uniform3iv(this.addr,e)}function fE(t,e){t.uniform4iv(this.addr,e)}function dE(t,e){t.uniform1uiv(this.addr,e)}function hE(t,e){t.uniform2uiv(this.addr,e)}function pE(t,e){t.uniform3uiv(this.addr,e)}function mE(t,e){t.uniform4uiv(this.addr,e)}function gE(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||o1,s[o])}function _E(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||l1,s[o])}function vE(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||u1,s[o])}function xE(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||a1,s[o])}function yE(t){switch(t){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return uE;case 35668:case 35672:return cE;case 35669:case 35673:return fE;case 5125:return dE;case 36294:return hE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}class SE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=eE(n.type)}}class EE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=yE(n.type)}}class ME{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function wE(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){$p(n,u===void 0?new SE(a,t,e):new EE(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new ME(a),$p(n,d)),n=d}}}class ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);wE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Yp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let TE=0;function CE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function AE(t){switch(t){case Yn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CE(t.getShaderSource(e),o)}else return r}function RE(t,e){const n=AE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function LE(t,e){let n;switch(e){case z2:n="Linear";break;case B2:n="Reinhard";break;case H2:n="OptimizedCineon";break;case G2:n="ACESFilmic";break;case V2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function bE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eo).join(`
`)}function PE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function eo(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(t){return t.replace(UE,NE)}function NE(t,e){const n=Ne[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return lf(n)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(t){return t.replace(IE,FE)}function FE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function kE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case Cs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function BE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fg:e="ENVMAP_BLENDING_MULTIPLY";break;case O2:e="ENVMAP_BLENDING_MIX";break;case k2:e="ENVMAP_BLENDING_ADD";break}return e}function HE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OE(n),u=kE(n),f=zE(n),d=BE(n),h=HE(n),g=n.isWebGL2?"":bE(n),x=PE(s),v=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(eo).join(`
`),p.length>0&&(p+=`
`),c=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(eo).join(`
`),c.length>0&&(c+=`
`)):(p=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),c=[g,em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==pi?LE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,RE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),o=lf(o),o=Zp(o,n),o=Qp(o,n),a=lf(a),a=Zp(a,n),a=Qp(a,n),o=Jp(o),a=Jp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const m=_+p+o,y=_+c+a,M=Yp(r,r.VERTEX_SHADER,m),C=Yp(r,r.FRAGMENT_SHADER,y);if(r.attachShader(v,M),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(M).trim(),q=r.getShaderInfoLog(C).trim();let Z=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,C);else{const H=Kp(r,M,"vertex"),G=Kp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+H+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||q==="")&&(F=!1);F&&(this.diagnostics={runnable:Z,programLog:S,vertexShader:{log:T,prefix:p},fragmentShader:{log:q,prefix:c}})}r.deleteShader(M),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new ja(r,v)),R};let b;return this.getAttributes=function(){return b===void 0&&(b=DE(r,v)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=C,this}let VE=0;class WE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XE(e),n.set(e,i)),i}}class XE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function jE(t,e,n,i,r,s,o){const a=new hd,l=new WE,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,T,q,Z,F){const H=Z.fog,G=F.geometry,Q=S.isMeshStandardMaterial?Z.environment:null,X=(S.isMeshStandardMaterial?n:e).get(S.envMap||Q),P=X&&X.mapping===zl?X.image.height:null,B=x[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const k=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=k!==void 0?k.length:0;let D=0;G.morphAttributes.position!==void 0&&(D=1),G.morphAttributes.normal!==void 0&&(D=2),G.morphAttributes.color!==void 0&&(D=3);let J,K,de,fe;if(B){const ft=Gn[B];J=ft.vertexShader,K=ft.fragmentShader}else J=S.vertexShader,K=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),Fe=F.isInstancedMesh===!0,Ae=!!S.map,yt=!!S.matcap,Ge=!!X,N=!!S.aoMap,Tt=!!S.lightMap,Te=!!S.bumpMap,Oe=!!S.normalMap,Re=!!S.displacementMap,Qe=!!S.emissiveMap,Be=!!S.metalnessMap,Pe=!!S.roughnessMap,Ye=S.anisotropy>0,Ct=S.clearcoat>0,Dt=S.iridescence>0,A=S.sheen>0,E=S.transmission>0,W=Ye&&!!S.anisotropyMap,te=Ct&&!!S.clearcoatMap,ne=Ct&&!!S.clearcoatNormalMap,le=Ct&&!!S.clearcoatRoughnessMap,xe=Dt&&!!S.iridescenceMap,ue=Dt&&!!S.iridescenceThicknessMap,$=A&&!!S.sheenColorMap,Se=A&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,we=!!S.specularColorMap,ge=!!S.specularIntensityMap,_e=E&&!!S.transmissionMap,ke=E&&!!S.thicknessMap,Ke=!!S.gradientMap,L=!!S.alphaMap,ae=S.alphaTest>0,z=!!S.extensions,se=!!G.attributes.uv1,ce=!!G.attributes.uv2,je=!!G.attributes.uv3;return{isWebGL2:f,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:K,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Yn,map:Ae,matcap:yt,envMap:Ge,envMapMode:Ge&&X.mapping,envMapCubeUVHeight:P,aoMap:N,lightMap:Tt,bumpMap:Te,normalMap:Oe,displacementMap:h&&Re,emissiveMap:Qe,normalMapObjectSpace:Oe&&S.normalMapType===ix,normalMapTangentSpace:Oe&&S.normalMapType===nx,metalnessMap:Be,roughnessMap:Pe,anisotropy:Ye,anisotropyMap:W,clearcoat:Ct,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,iridescence:Dt,iridescenceMap:xe,iridescenceThicknessMap:ue,sheen:A,sheenColorMap:$,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:we,specularIntensityMap:ge,transmission:E,transmissionMap:_e,thicknessMap:ke,gradientMap:Ke,opaque:S.transparent===!1&&S.blending===gs,alphaMap:L,alphaTest:ae,combine:S.combine,mapUv:Ae&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:Tt&&v(S.lightMap.channel),bumpMapUv:Te&&v(S.bumpMap.channel),normalMapUv:Oe&&v(S.normalMap.channel),displacementMapUv:Re&&v(S.displacementMap.channel),emissiveMapUv:Qe&&v(S.emissiveMap.channel),metalnessMapUv:Be&&v(S.metalnessMap.channel),roughnessMapUv:Pe&&v(S.roughnessMap.channel),anisotropyMapUv:W&&v(S.anisotropyMap.channel),clearcoatMapUv:te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(S.sheenRoughnessMap.channel),specularMapUv:Ee&&v(S.specularMap.channel),specularColorMapUv:we&&v(S.specularColorMap.channel),specularIntensityMapUv:ge&&v(S.specularIntensityMap.channel),transmissionMapUv:_e&&v(S.transmissionMap.channel),thicknessMapUv:ke&&v(S.thicknessMap.channel),alphaMapUv:L&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||Ye),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:ce,vertexUv3s:je,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ae||L),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:D,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:pi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:z&&S.extensions.derivatives===!0,extensionFragDepth:z&&S.extensions.fragDepth===!0,extensionDrawBuffers:z&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)T.push(q),T.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(_(T,S),m(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function _(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),S.push(a.mask)}function y(S){const T=x[S.type];let q;if(T){const Z=Gn[T];q=Nx.clone(Z.uniforms)}else q=S.uniforms;return q}function M(S,T){let q;for(let Z=0,F=u.length;Z<F;Z++){const H=u[Z];if(H.cacheKey===T){q=H,++q.usedTimes;break}}return q===void 0&&(q=new GE(t,T,S,s),u.push(q)),q}function C(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:b}}function qE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function $E(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,x,v,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:g,groupOrder:x,renderOrder:d.renderOrder,z:v,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=g,c.groupOrder=x,c.renderOrder=d.renderOrder,c.z=v,c.group=p),e++,c}function a(d,h,g,x,v,p){const c=o(d,h,g,x,v,p);g.transmission>0?i.push(c):g.transparent===!0?r.push(c):n.push(c)}function l(d,h,g,x,v,p){const c=o(d,h,g,x,v,p);g.transmission>0?i.unshift(c):g.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||$E),i.length>1&&i.sort(h||tm),r.length>1&&r.sort(h||tm)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function YE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nm,t.set(i,[o])):r>=s.length?(o=new nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new ye};break;case"SpotLight":n={position:new O,direction:new O,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function ZE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QE=0;function JE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eM(t,e){const n=new KE,i=ZE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new O);const s=new O,o=new bt,a=new bt;function l(f,d){let h=0,g=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,c=0,_=0,m=0,y=0,M=0,C=0,R=0,b=0;f.sort(JE);const S=d===!0?Math.PI:1;for(let q=0,Z=f.length;q<Z;q++){const F=f[q],H=F.color,G=F.intensity,Q=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=H.r*G*S,g+=H.g*G*S,x+=H.b*G*S;else if(F.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(F.sh.coefficients[P],G);else if(F.isDirectionalLight){const P=n.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity*S),F.castShadow){const B=F.shadow,k=i.get(F);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,r.directionalShadow[v]=k,r.directionalShadowMap[v]=X,r.directionalShadowMatrix[v]=F.shadow.matrix,y++}r.directional[v]=P,v++}else if(F.isSpotLight){const P=n.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(H).multiplyScalar(G*S),P.distance=Q,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,r.spot[c]=P;const B=F.shadow;if(F.map&&(r.spotLightMap[R]=F.map,R++,B.updateMatrices(F),F.castShadow&&b++),r.spotLightMatrix[c]=B.matrix,F.castShadow){const k=i.get(F);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,r.spotShadow[c]=k,r.spotShadowMap[c]=X,C++}c++}else if(F.isRectAreaLight){const P=n.get(F);P.color.copy(H).multiplyScalar(G),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=P,_++}else if(F.isPointLight){const P=n.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity*S),P.distance=F.distance,P.decay=F.decay,F.castShadow){const B=F.shadow,k=i.get(F);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=F.shadow.matrix,M++}r.point[p]=P,p++}else if(F.isHemisphereLight){const P=n.get(F);P.skyColor.copy(F.color).multiplyScalar(G*S),P.groundColor.copy(F.groundColor).multiplyScalar(G*S),r.hemi[m]=P,m++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==v||T.pointLength!==p||T.spotLength!==c||T.rectAreaLength!==_||T.hemiLength!==m||T.numDirectionalShadows!==y||T.numPointShadows!==M||T.numSpotShadows!==C||T.numSpotMaps!==R)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+R-b,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=b,T.directionalLength=v,T.pointLength=p,T.spotLength=c,T.rectAreaLength=_,T.hemiLength=m,T.numDirectionalShadows=y,T.numPointShadows=M,T.numSpotShadows=C,T.numSpotMaps=R,r.version=QE++)}function u(f,d){let h=0,g=0,x=0,v=0,p=0;const c=d.matrixWorldInverse;for(let _=0,m=f.length;_<m;_++){const y=f[_];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(c),h++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(c),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(c),x++}else if(y.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(c),g++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function im(t,e){const n=new eM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function tM(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new im(t,e),n.set(s,[l])):o>=a.length?(l=new im(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class nM extends Hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends Hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
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
}`;function oM(t,e,n){let i=new r1;const r=new $e,s=new $e,o=new Rt,a=new nM({depthPacking:tx}),l=new iM,u={},f=n.maxTextureSize,d={[$i]:Jt,[Jt]:$i,[li]:li},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:rM,fragmentShader:sM}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new er;x.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new di(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let c=this.type;this.render=function(M,C,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Wi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=c!==si&&this.type===si,F=c===si&&this.type!==si;for(let H=0,G=M.length;H<G;H++){const Q=M[H],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const P=X.getFrameExtents();if(r.multiply(P),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/P.x),r.x=s.x*P.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/P.y),r.y=s.y*P.y,X.mapSize.y=s.y)),X.map===null||Z===!0||F===!0){const k=this.type!==si?{minFilter:Vt,magFilter:Vt}:{};X.map!==null&&X.map.dispose(),X.map=new Ar(r.x,r.y,k),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const B=X.getViewportCount();for(let k=0;k<B;k++){const ie=X.getViewport(k);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),q.viewport(o),X.updateMatrices(Q,k),i=X.getFrustum(),y(C,R,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===si&&_(X,R),X.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(b,S,T)};function _(M,C){const R=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ar(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(C,null,R,h,v,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(C,null,R,g,v,null)}function m(M,C,R,b){let S=null;const T=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)S=T;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=S.uuid,Z=C.uuid;let F=u[q];F===void 0&&(F={},u[q]=F);let H=F[Z];H===void 0&&(H=S.clone(),F[Z]=H),S=H}if(S.visible=C.visible,S.wireframe=C.wireframe,b===si?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=t.properties.get(S);q.light=R}return S}function y(M,C,R,b,S){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===si)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),F=M.material;if(Array.isArray(F)){const H=Z.groups;for(let G=0,Q=H.length;G<Q;G++){const X=H[G],P=F[X.materialIndex];if(P&&P.visible){const B=m(M,P,b,S);t.renderBufferDirect(R,null,Z,B,M,X)}}}else if(F.visible){const H=m(M,F,b,S);t.renderBufferDirect(R,null,Z,H,M,null)}}const q=M.children;for(let Z=0,F=q.length;Z<F;Z++)y(q[Z],C,R,b,S)}}function aM(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new Rt;let z=null;const se=new Rt(0,0,0,0);return{setMask:function(ce){z!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){L=ce},setClear:function(ce,je,ot,ft,tr){tr===!0&&(ce*=ft,je*=ft,ot*=ft),ae.set(ce,je,ot,ft),se.equals(ae)===!1&&(t.clearColor(ce,je,ot,ft),se.copy(ae))},reset:function(){L=!1,z=null,se.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,z=null,se=null;return{setTest:function(ce){ce?ve(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!L&&(t.depthMask(ce),ae=ce)},setFunc:function(ce){if(z!==ce){switch(ce){case b2:t.depthFunc(t.NEVER);break;case P2:t.depthFunc(t.ALWAYS);break;case D2:t.depthFunc(t.LESS);break;case Jc:t.depthFunc(t.LEQUAL);break;case U2:t.depthFunc(t.EQUAL);break;case N2:t.depthFunc(t.GEQUAL);break;case I2:t.depthFunc(t.GREATER);break;case F2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=ce}},setLocked:function(ce){L=ce},setClear:function(ce){se!==ce&&(t.clearDepth(ce),se=ce)},reset:function(){L=!1,ae=null,z=null,se=null}}}function o(){let L=!1,ae=null,z=null,se=null,ce=null,je=null,ot=null,ft=null,tr=null;return{setTest:function(at){L||(at?ve(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(at){ae!==at&&!L&&(t.stencilMask(at),ae=at)},setFunc:function(at,zn,zt){(z!==at||se!==zn||ce!==zt)&&(t.stencilFunc(at,zn,zt),z=at,se=zn,ce=zt)},setOp:function(at,zn,zt){(je!==at||ot!==zn||ft!==zt)&&(t.stencilOp(at,zn,zt),je=at,ot=zn,ft=zt)},setLocked:function(at){L=at},setClear:function(at){tr!==at&&(t.clearStencil(at),tr=at)},reset:function(){L=!1,ae=null,z=null,se=null,ce=null,je=null,ot=null,ft=null,tr=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},g={},x=new WeakMap,v=[],p=null,c=!1,_=null,m=null,y=null,M=null,C=null,R=null,b=null,S=!1,T=null,q=null,Z=null,F=null,H=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(P)[1]),Q=X>=1):P.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),Q=X>=2);let B=null,k={};const ie=t.getParameter(t.SCISSOR_BOX),D=t.getParameter(t.VIEWPORT),J=new Rt().fromArray(ie),K=new Rt().fromArray(D);function de(L,ae,z,se){const ce=new Uint8Array(4),je=t.createTexture();t.bindTexture(L,je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<z;ot++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ae+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return je}const fe={};fe[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(fe[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(t.DEPTH_TEST),l.setFunc(Jc),Re(!1),Qe(Gh),ve(t.CULL_FACE),Te(Wi);function ve(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Fe(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ae(L,ae){return g[L]!==ae?(t.bindFramebuffer(L,ae),g[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function yt(L,ae){let z=v,se=!1;if(L)if(z=x.get(ae),z===void 0&&(z=[],x.set(ae,z)),L.isWebGLMultipleRenderTargets){const ce=L.texture;if(z.length!==ce.length||z[0]!==t.COLOR_ATTACHMENT0){for(let je=0,ot=ce.length;je<ot;je++)z[je]=t.COLOR_ATTACHMENT0+je;z.length=ce.length,se=!0}}else z[0]!==t.COLOR_ATTACHMENT0&&(z[0]=t.COLOR_ATTACHMENT0,se=!0);else z[0]!==t.BACK&&(z[0]=t.BACK,se=!0);se&&(n.isWebGL2?t.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function Ge(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const N={[Yr]:t.FUNC_ADD,[x2]:t.FUNC_SUBTRACT,[y2]:t.FUNC_REVERSE_SUBTRACT};if(i)N[jh]=t.MIN,N[qh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(N[jh]=L.MIN_EXT,N[qh]=L.MAX_EXT)}const Tt={[S2]:t.ZERO,[E2]:t.ONE,[M2]:t.SRC_COLOR,[Ng]:t.SRC_ALPHA,[L2]:t.SRC_ALPHA_SATURATE,[A2]:t.DST_COLOR,[T2]:t.DST_ALPHA,[w2]:t.ONE_MINUS_SRC_COLOR,[Ig]:t.ONE_MINUS_SRC_ALPHA,[R2]:t.ONE_MINUS_DST_COLOR,[C2]:t.ONE_MINUS_DST_ALPHA};function Te(L,ae,z,se,ce,je,ot,ft){if(L===Wi){c===!0&&(Fe(t.BLEND),c=!1);return}if(c===!1&&(ve(t.BLEND),c=!0),L!==v2){if(L!==_||ft!==S){if((m!==Yr||C!==Yr)&&(t.blendEquation(t.FUNC_ADD),m=Yr,C=Yr),ft)switch(L){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vh:t.blendFunc(t.ONE,t.ONE);break;case Wh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Wh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,R=null,b=null,_=L,S=ft}return}ce=ce||ae,je=je||z,ot=ot||se,(ae!==m||ce!==C)&&(t.blendEquationSeparate(N[ae],N[ce]),m=ae,C=ce),(z!==y||se!==M||je!==R||ot!==b)&&(t.blendFuncSeparate(Tt[z],Tt[se],Tt[je],Tt[ot]),y=z,M=se,R=je,b=ot),_=L,S=!1}function Oe(L,ae){L.side===li?Fe(t.CULL_FACE):ve(t.CULL_FACE);let z=L.side===Jt;ae&&(z=!z),Re(z),L.blending===gs&&L.transparent===!1?Te(Wi):Te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const se=L.stencilWrite;u.setTest(se),se&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){T!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),T=L)}function Qe(L){L!==m2?(ve(t.CULL_FACE),L!==q&&(L===Gh?t.cullFace(t.BACK):L===g2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),q=L}function Be(L){L!==Z&&(Q&&t.lineWidth(L),Z=L)}function Pe(L,ae,z){L?(ve(t.POLYGON_OFFSET_FILL),(F!==ae||H!==z)&&(t.polygonOffset(ae,z),F=ae,H=z)):Fe(t.POLYGON_OFFSET_FILL)}function Ye(L){L?ve(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=t.TEXTURE0+G-1),B!==L&&(t.activeTexture(L),B=L)}function Dt(L,ae,z){z===void 0&&(B===null?z=t.TEXTURE0+G-1:z=B);let se=k[z];se===void 0&&(se={type:void 0,texture:void 0},k[z]=se),(se.type!==L||se.texture!==ae)&&(B!==z&&(t.activeTexture(z),B=z),t.bindTexture(L,ae||fe[L]),se.type=L,se.texture=ae)}function A(){const L=k[B];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){J.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function ge(L){K.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function _e(L,ae){let z=d.get(ae);z===void 0&&(z=new WeakMap,d.set(ae,z));let se=z.get(L);se===void 0&&(se=t.getUniformBlockIndex(ae,L.name),z.set(L,se))}function ke(L,ae){const se=d.get(ae).get(L);f.get(ae)!==se&&(t.uniformBlockBinding(ae,se,L.__bindingPointIndex),f.set(ae,se))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,k={},g={},x=new WeakMap,v=[],p=null,c=!1,_=null,m=null,y=null,M=null,C=null,R=null,b=null,S=!1,T=null,q=null,Z=null,F=null,H=null,J.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:Fe,bindFramebuffer:Ae,drawBuffers:yt,useProgram:Ge,setBlending:Te,setMaterial:Oe,setFlipSided:Re,setCullFace:Qe,setLineWidth:Be,setPolygonOffset:Pe,setScissorTest:Ye,activeTexture:Ct,bindTexture:Dt,unbindTexture:A,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Se,texImage3D:Ee,updateUBOMapping:_e,uniformBlockBinding:ke,texStorage2D:ue,texStorage3D:$,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:we,viewport:ge,reset:Ke}}function lM(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return c?new OffscreenCanvas(A,E):Sl("canvas")}function m(A,E,W,te){let ne=1;if((A.width>te||A.height>te)&&(ne=te/Math.max(A.width,A.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=E?af:Math.floor,xe=le(ne*A.width),ue=le(ne*A.height);v===void 0&&(v=_(xe,ue));const $=W?_(xe,ue):v;return $.width=xe,$.height=ue,$.getContext("2d").drawImage(A,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+ue+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return yp(A.width)&&yp(A.height)}function M(A){return a?!1:A.wrapS!==Nn||A.wrapT!==Nn||A.minFilter!==Vt&&A.minFilter!==_n}function C(A,E){return A.generateMipmaps&&E&&A.minFilter!==Vt&&A.minFilter!==_n}function R(A){t.generateMipmap(A)}function b(A,E,W,te,ne=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=E;return E===t.RED&&(W===t.FLOAT&&(le=t.R32F),W===t.HALF_FLOAT&&(le=t.R16F),W===t.UNSIGNED_BYTE&&(le=t.R8)),E===t.RG&&(W===t.FLOAT&&(le=t.RG32F),W===t.HALF_FLOAT&&(le=t.RG16F),W===t.UNSIGNED_BYTE&&(le=t.RG8)),E===t.RGBA&&(W===t.FLOAT&&(le=t.RGBA32F),W===t.HALF_FLOAT&&(le=t.RGBA16F),W===t.UNSIGNED_BYTE&&(le=te===Ue&&ne===!1?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)),(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(A,E,W){return C(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){return A===Vt||A===$h||A===Tu?t.NEAREST:t.LINEAR}function q(A){const E=A.target;E.removeEventListener("dispose",q),F(E),E.isVideoTexture&&x.delete(E)}function Z(A){const E=A.target;E.removeEventListener("dispose",Z),G(E)}function F(A){const E=i.get(A);if(E.__webglInit===void 0)return;const W=A.source,te=p.get(W);if(te){const ne=te[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&H(A),Object.keys(te).length===0&&p.delete(W)}i.remove(A)}function H(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const W=A.source,te=p.get(W);delete te[E.__cacheKey],o.memory.textures--}function G(A){const E=A.texture,W=i.get(A),te=i.get(E);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)t.deleteFramebuffer(W.__webglFramebuffer[ne]),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[ne]);else{if(t.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ne=0;ne<W.__webglColorRenderbuffer.length;ne++)W.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[ne]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,le=E.length;ne<le;ne++){const xe=i.get(E[ne]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(E[ne])}i.remove(E),i.remove(A)}let Q=0;function X(){Q=0}function P(){const A=Q;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Q+=1,A}function B(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function k(A,E){const W=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(W,A,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function ie(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Ae(W,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function D(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Ae(W,A,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function J(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){yt(W,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const K={[nf]:t.REPEAT,[Nn]:t.CLAMP_TO_EDGE,[rf]:t.MIRRORED_REPEAT},de={[Vt]:t.NEAREST,[$h]:t.NEAREST_MIPMAP_NEAREST,[Tu]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[W2]:t.LINEAR_MIPMAP_NEAREST,[bo]:t.LINEAR_MIPMAP_LINEAR},fe={[sx]:t.NEVER,[dx]:t.ALWAYS,[ox]:t.LESS,[lx]:t.LEQUAL,[ax]:t.EQUAL,[fx]:t.GEQUAL,[ux]:t.GREATER,[cx]:t.NOTEQUAL};function ve(A,E,W){if(W?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,de[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,de[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Nn||E.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Vt&&E.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Vt||E.minFilter!==Tu&&E.minFilter!==bo||E.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Fe(A,E){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",q));const te=E.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const le=B(E);if(le!==A.__cacheKey){ne[le]===void 0&&(ne[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[le].usedTimes++;const xe=ne[A.__cacheKey];xe!==void 0&&(ne[A.__cacheKey].usedTimes--,xe.usedTimes===0&&H(E)),A.__cacheKey=le,A.__webglTexture=ne[le].texture}return W}function Ae(A,E,W){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const ne=Fe(A,E),le=E.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+W);const xe=i.get(le);if(le.version!==xe.__version||ne===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ue=M(E)&&y(E.image)===!1;let $=m(E.image,ue,!1,f);$=Dt(E,$);const Se=y($)||a,Ee=s.convert(E.format,E.colorSpace);let we=s.convert(E.type),ge=b(E.internalFormat,Ee,we,E.colorSpace);ve(te,E,Se);let _e;const ke=E.mipmaps,Ke=a&&E.isVideoTexture!==!0,L=xe.__version===void 0||ne===!0,ae=S(E,$,Se);if(E.isDepthTexture)ge=t.DEPTH_COMPONENT,a?E.type===Ii?ge=t.DEPTH_COMPONENT32F:E.type===Ni?ge=t.DEPTH_COMPONENT24:E.type===_r?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:E.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===vr&&ge===t.DEPTH_COMPONENT&&E.type!==fd&&E.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ni,we=s.convert(E.type)),E.format===As&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,E.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=_r,we=s.convert(E.type))),L&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,ge,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,ge,$.width,$.height,0,Ee,we,null));else if(E.isDataTexture)if(ke.length>0&&Se){Ke&&L&&n.texStorage2D(t.TEXTURE_2D,ae,ge,ke[0].width,ke[0].height);for(let z=0,se=ke.length;z<se;z++)_e=ke[z],Ke?n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Ee,we,_e.data):n.texImage2D(t.TEXTURE_2D,z,ge,_e.width,_e.height,0,Ee,we,_e.data);E.generateMipmaps=!1}else Ke?(L&&n.texStorage2D(t.TEXTURE_2D,ae,ge,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,Ee,we,$.data)):n.texImage2D(t.TEXTURE_2D,0,ge,$.width,$.height,0,Ee,we,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ge,ke[0].width,ke[0].height,$.depth);for(let z=0,se=ke.length;z<se;z++)_e=ke[z],E.format!==In?Ee!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,$.depth,Ee,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ge,_e.width,_e.height,$.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,$.depth,Ee,we,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,ge,_e.width,_e.height,$.depth,0,Ee,we,_e.data)}else{Ke&&L&&n.texStorage2D(t.TEXTURE_2D,ae,ge,ke[0].width,ke[0].height);for(let z=0,se=ke.length;z<se;z++)_e=ke[z],E.format!==In?Ee!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Ee,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,z,ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Ee,we,_e.data):n.texImage2D(t.TEXTURE_2D,z,ge,_e.width,_e.height,0,Ee,we,_e.data)}else if(E.isDataArrayTexture)Ke?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ge,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ee,we,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,Ee,we,$.data);else if(E.isData3DTexture)Ke?(L&&n.texStorage3D(t.TEXTURE_3D,ae,ge,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ee,we,$.data)):n.texImage3D(t.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,Ee,we,$.data);else if(E.isFramebufferTexture){if(L)if(Ke)n.texStorage2D(t.TEXTURE_2D,ae,ge,$.width,$.height);else{let z=$.width,se=$.height;for(let ce=0;ce<ae;ce++)n.texImage2D(t.TEXTURE_2D,ce,ge,z,se,0,Ee,we,null),z>>=1,se>>=1}}else if(ke.length>0&&Se){Ke&&L&&n.texStorage2D(t.TEXTURE_2D,ae,ge,ke[0].width,ke[0].height);for(let z=0,se=ke.length;z<se;z++)_e=ke[z],Ke?n.texSubImage2D(t.TEXTURE_2D,z,0,0,Ee,we,_e):n.texImage2D(t.TEXTURE_2D,z,ge,Ee,we,_e);E.generateMipmaps=!1}else Ke?(L&&n.texStorage2D(t.TEXTURE_2D,ae,ge,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,we,$)):n.texImage2D(t.TEXTURE_2D,0,ge,Ee,we,$);C(E,Se)&&R(te),xe.__version=le.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function yt(A,E,W){if(E.image.length!==6)return;const te=Fe(A,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const le=i.get(ne);if(ne.version!==le.__version||te===!0){n.activeTexture(t.TEXTURE0+W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,$=[];for(let z=0;z<6;z++)!xe&&!ue?$[z]=m(E.image[z],!1,!0,u):$[z]=ue?E.image[z].image:E.image[z],$[z]=Dt(E,$[z]);const Se=$[0],Ee=y(Se)||a,we=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),_e=b(E.internalFormat,we,ge,E.colorSpace),ke=a&&E.isVideoTexture!==!0,Ke=le.__version===void 0||te===!0;let L=S(E,Se,Ee);ve(t.TEXTURE_CUBE_MAP,E,Ee);let ae;if(xe){ke&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,_e,Se.width,Se.height);for(let z=0;z<6;z++){ae=$[z].mipmaps;for(let se=0;se<ae.length;se++){const ce=ae[se];E.format!==In?we!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,0,0,ce.width,ce.height,we,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,0,0,ce.width,ce.height,we,ge,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,_e,ce.width,ce.height,0,we,ge,ce.data)}}}else{ae=E.mipmaps,ke&&Ke&&(ae.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,_e,$[0].width,$[0].height));for(let z=0;z<6;z++)if(ue){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,$[z].width,$[z].height,we,ge,$[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,_e,$[z].width,$[z].height,0,we,ge,$[z].data);for(let se=0;se<ae.length;se++){const je=ae[se].image[z].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,0,0,je.width,je.height,we,ge,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,_e,je.width,je.height,0,we,ge,je.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,we,ge,$[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,_e,we,ge,$[z]);for(let se=0;se<ae.length;se++){const ce=ae[se];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,0,0,we,ge,ce.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,_e,we,ge,ce.image[z])}}}C(E,Ee)&&R(t.TEXTURE_CUBE_MAP),le.__version=ne.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ge(A,E,W,te,ne){const le=s.convert(W.format,W.colorSpace),xe=s.convert(W.type),ue=b(W.internalFormat,le,xe,W.colorSpace);i.get(E).__hasExternalTextures||(ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,ue,E.width,E.height,E.depth,0,le,xe,null):n.texImage2D(ne,0,ue,E.width,E.height,0,le,xe,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Ye(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ne,i.get(W).__webglTexture,0,Pe(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ne,i.get(W).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(A,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let te=t.DEPTH_COMPONENT16;if(W||Ye(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ii?te=t.DEPTH_COMPONENT32F:ne.type===Ni&&(te=t.DEPTH_COMPONENT24));const le=Pe(E);Ye(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,te,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,te,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const te=Pe(E);W&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):Ye(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<te.length;ne++){const le=te[ne],xe=s.convert(le.format,le.colorSpace),ue=s.convert(le.type),$=b(le.internalFormat,xe,ue,le.colorSpace),Se=Pe(E);W&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,$,E.width,E.height):Ye(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,$,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,$,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Tt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,ne=Pe(E);if(E.depthTexture.format===vr)Ye(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===As)Ye(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(A){const E=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Tt(E.__webglFramebuffer,A)}else if(W){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=t.createRenderbuffer(),N(E.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),N(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(A,E,W){const te=i.get(A);E!==void 0&&Ge(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),W!==void 0&&Te(A)}function Re(A){const E=A.texture,W=i.get(A),te=i.get(E);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,xe=y(A)||a;if(ne){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)W.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(W.__webglFramebuffer=t.createFramebuffer(),le)if(r.drawBuffers){const ue=A.texture;for(let $=0,Se=ue.length;$<Se;$++){const Ee=i.get(ue[$]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ye(A)===!1){const ue=le?E:[E];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<ue.length;$++){const Se=ue[$];W.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[$]);const Ee=s.convert(Se.format,Se.colorSpace),we=s.convert(Se.type),ge=b(Se.internalFormat,Ee,we,Se.colorSpace,A.isXRRenderTarget===!0),_e=Pe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,W.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),N(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ve(t.TEXTURE_CUBE_MAP,E,xe);for(let ue=0;ue<6;ue++)Ge(W.__webglFramebuffer[ue],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue);C(E,xe)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ue=A.texture;for(let $=0,Se=ue.length;$<Se;$++){const Ee=ue[$],we=i.get(Ee);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),ve(t.TEXTURE_2D,Ee,xe),Ge(W.__webglFramebuffer,A,Ee,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D),C(Ee,xe)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,te.__webglTexture),ve(ue,E,xe),Ge(W.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,ue),C(E,xe)&&R(ue),n.unbindTexture()}A.depthBuffer&&Te(A)}function Qe(A){const E=y(A)||a,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ne=W.length;te<ne;te++){const le=W[te];if(C(le,E)){const xe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(le).__webglTexture;n.bindTexture(xe,ue),R(xe),n.unbindTexture()}}}function Be(A){if(a&&A.samples>0&&Ye(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,te=A.height;let ne=t.COLOR_BUFFER_BIT;const le=[],xe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){le.push(t.COLOR_ATTACHMENT0+Se),A.depthBuffer&&le.push(xe);const Ee=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ee===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),$&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]),Ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),$){const we=i.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,W,te,0,0,W,te,ne,t.NEAREST),g&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);const Ee=i.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(A){return Math.min(d,A.samples)}function Ye(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(A){const E=o.render.frame;x.get(A)!==E&&(x.set(A,E),A.update())}function Dt(A,E){const W=A.colorSpace,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.format===sf||W!==Yn&&W!==yr&&(W===Ue?a===!1?e.has("EXT_sRGB")===!0&&te===In?(A.format=sf,A.minFilter=_n,A.generateMipmaps=!1):E=qg.sRGBToLinear(E):(te!==In||ne!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=ie,this.setTexture3D=D,this.setTextureCube=J,this.rebindTextures=Oe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Ye}function uM(t,e,n){const i=n.isWebGL2;function r(s,o=yr){let a;if(s===Xi)return t.UNSIGNED_BYTE;if(s===zg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Bg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===X2)return t.BYTE;if(s===j2)return t.SHORT;if(s===fd)return t.UNSIGNED_SHORT;if(s===kg)return t.INT;if(s===Ni)return t.UNSIGNED_INT;if(s===Ii)return t.FLOAT;if(s===Po)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===q2)return t.ALPHA;if(s===In)return t.RGBA;if(s===$2)return t.LUMINANCE;if(s===Y2)return t.LUMINANCE_ALPHA;if(s===vr)return t.DEPTH_COMPONENT;if(s===As)return t.DEPTH_STENCIL;if(s===sf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===K2)return t.RED;if(s===Hg)return t.RED_INTEGER;if(s===Z2)return t.RG;if(s===Gg)return t.RG_INTEGER;if(s===Vg)return t.RGBA_INTEGER;if(s===Cu||s===Au||s===Ru||s===Lu)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Cu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Cu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Au)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ru)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===Kh||s===Zh||s===Qh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Q2)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jh||s===ep)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jh)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ep)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===up||s===cp||s===fp||s===dp||s===hp||s===pp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===bu)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===J2||s===mp||s===gp||s===_p)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===bu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===mp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_p)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class cM extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Da=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}};const fM={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&h>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dM extends ln{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:vr,f!==vr&&f!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===vr&&(i=Ni),i===void 0&&f===As&&(i=_r),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hM extends Us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,g=null,x=null;const v=n.getContextAttributes();let p=null,c=null;const _=[],m=[];let y=null;const M=new vn;M.layers.enable(1),M.viewport=new Rt;const C=new vn;C.layers.enable(2),C.viewport=new Rt;const R=[M,C],b=new cM;b.layers.enable(1),b.layers.enable(2);let S=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(D){y=D},this.getController=function(D){let J=_[D];return J===void 0&&(J=new ec,_[D]=J),J.getTargetRaySpace()},this.getControllerGrip=function(D){let J=_[D];return J===void 0&&(J=new ec,_[D]=J),J.getGripSpace()},this.getHand=function(D){let J=_[D];return J===void 0&&(J=new ec,_[D]=J),J.getHandSpace()};function q(D){const J=m.indexOf(D.inputSource);if(J===-1)return;const K=_[J];K!==void 0&&(K.update(D.inputSource,D.frame,u||o),K.dispatchEvent({type:D.type,data:D.inputSource}))}function Z(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",F);for(let D=0;D<_.length;D++){const J=m[D];J!==null&&(m[D]=null,_[D].disconnect(J))}S=null,T=null,e.setRenderTarget(p),g=null,h=null,d=null,r=null,c=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:g}),c=new Ar(g.framebufferWidth,g.framebufferHeight,{format:In,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,K=null,de=null;v.depth&&(de=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=v.stencil?As:vr,K=v.stencil?_r:Ni);const fe={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),c=new Ar(h.textureWidth,h.textureHeight,{format:In,type:Xi,depthTexture:new dM(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ve=e.properties.get(c);ve.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(D){for(let J=0;J<D.removed.length;J++){const K=D.removed[J],de=m.indexOf(K);de>=0&&(m[de]=null,_[de].disconnect(K))}for(let J=0;J<D.added.length;J++){const K=D.added[J];let de=m.indexOf(K);if(de===-1){for(let ve=0;ve<_.length;ve++)if(ve>=m.length){m.push(K),de=ve;break}else if(m[ve]===null){m[ve]=K,de=ve;break}if(de===-1)break}const fe=_[de];fe&&fe.connect(K)}}const H=new O,G=new O;function Q(D,J,K){H.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(K.matrixWorld);const de=H.distanceTo(G),fe=J.projectionMatrix.elements,ve=K.projectionMatrix.elements,Fe=fe[14]/(fe[10]-1),Ae=fe[14]/(fe[10]+1),yt=(fe[9]+1)/fe[5],Ge=(fe[9]-1)/fe[5],N=(fe[8]-1)/fe[0],Tt=(ve[8]+1)/ve[0],Te=Fe*N,Oe=Fe*Tt,Re=de/(-N+Tt),Qe=Re*-N;J.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Qe),D.translateZ(Re),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Be=Fe+Re,Pe=Ae+Re,Ye=Te-Qe,Ct=Oe+(de-Qe),Dt=yt*Ae/Pe*Be,A=Ge*Ae/Pe*Be;D.projectionMatrix.makePerspective(Ye,Ct,Dt,A,Be,Pe),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function X(D,J){J===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(J.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCameraXR=function(D){if(r===null)return D;y&&(D=y),b.near=C.near=M.near=D.near,b.far=C.far=M.far=D.far,(S!==b.near||T!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,T=b.far);const J=D.parent,K=b.cameras;X(b,J);for(let de=0;de<K.length;de++)X(K[de],J);return K.length===2?Q(b,M,C):b.projectionMatrix.copy(M.projectionMatrix),y&&P(b,J),b};function P(D,J){const K=y;J===null?K.matrix.copy(D.matrixWorld):(K.matrix.copy(J.matrixWorld),K.matrix.invert(),K.matrix.multiply(D.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const de=K.children;for(let fe=0,ve=de.length;fe<ve;fe++)de[fe].updateMatrixWorld(!0);K.projectionMatrix.copy(D.projectionMatrix),K.projectionMatrixInverse.copy(D.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=of*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(D){l=D,h!==null&&(h.fixedFoveation=D),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=D)};let B=null;function k(D,J){if(f=J.getViewerPose(u||o),x=J,f!==null){const K=f.views;g!==null&&(e.setRenderTargetFramebuffer(c,g.framebuffer),e.setRenderTarget(c));let de=!1;K.length!==b.cameras.length&&(b.cameras.length=0,de=!0);for(let fe=0;fe<K.length;fe++){const ve=K[fe];let Fe=null;if(g!==null)Fe=g.getViewport(ve);else{const yt=d.getViewSubImage(h,ve);Fe=yt.viewport,fe===0&&(e.setRenderTargetTextures(c,yt.colorTexture,h.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(c))}let Ae=R[fe];Ae===void 0&&(Ae=new vn,Ae.layers.enable(fe),Ae.viewport=new Rt,R[fe]=Ae),Ae.matrix.fromArray(ve.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ve.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),fe===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),de===!0&&b.cameras.push(Ae)}}for(let K=0;K<_.length;K++){const de=m[K],fe=_[K];de!==null&&fe!==void 0&&fe.update(de,J,u||o)}B&&B(D,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const ie=new s1;ie.setAnimationLoop(k),this.setAnimationLoop=function(D){B=D},this.dispose=function(){}}}function pM(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,t1(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,m,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&g(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,m):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Jt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Jt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const m=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*m,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,m){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=m*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function g(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Jt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mM(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,m){const y=m.program;i.uniformBlockBinding(_,y)}function u(_,m){let y=r[_.id];y===void 0&&(x(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",p));const M=m.program;i.updateUBOMapping(_,M);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function f(_){const m=d();_.__bindingPointIndex=m;const y=t.createBuffer(),M=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const m=r[_.id],y=_.uniforms,M=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let C=0,R=y.length;C<R;C++){const b=y[C];if(g(b,C,M)===!0){const S=b.__offset,T=Array.isArray(b.value)?b.value:[b.value];let q=0;for(let Z=0;Z<T.length;Z++){const F=T[Z],H=v(F);typeof F=="number"?(b.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,S+q,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=F.elements[0],b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=F.elements[0],b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=F.elements[0]):(F.toArray(b.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,b.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,m,y){const M=_.value;if(y[m]===void 0){if(typeof M=="number")y[m]=M;else{const C=Array.isArray(M)?M:[M],R=[];for(let b=0;b<C.length;b++)R.push(C[b].clone());y[m]=R}return!0}else if(typeof M=="number"){if(y[m]!==M)return y[m]=M,!0}else{const C=Array.isArray(y[m])?y[m]:[y[m]],R=Array.isArray(M)?M:[M];for(let b=0;b<C.length;b++){const S=C[b];if(S.equals(R[b])===!1)return S.copy(R[b]),!0}}return!1}function x(_){const m=_.uniforms;let y=0;const M=16;let C=0;for(let R=0,b=m.length;R<b;R++){const S=m[R],T={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let Z=0,F=q.length;Z<F;Z++){const H=q[Z],G=v(H);T.boundary+=G.boundary,T.storage+=G.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,R>0){C=y%M;const Z=M-C;C!==0&&Z-T.boundary<0&&(y+=M-C,S.__offset=y)}y+=T.storage}return C=y%M,C>0&&(y+=M-C),_.__size=y,_.__cache={},this}function v(_){const m={boundary:0,storage:0};return typeof _=="number"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function p(_){const m=_.target;m.removeEventListener("dispose",p);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function gM(){const t=Sl("canvas");return t.style.display="block",t}class _M{constructor(e={}){const{canvas:n=gM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this.useLegacyLights=!0,this.toneMapping=pi,this.toneMappingExposure=1;const m=this;let y=!1,M=0,C=0,R=null,b=-1,S=null;const T=new Rt,q=new Rt;let Z=null;const F=new ye(0);let H=0,G=n.width,Q=n.height,X=1,P=null,B=null;const k=new Rt(0,0,G,Q),ie=new Rt(0,0,G,Q);let D=!1;const J=new r1;let K=!1,de=!1,fe=null;const ve=new bt,Fe=new $e,Ae=new O,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return R===null?X:1}let N=i;function Tt(w,I){for(let V=0;V<w.length;V++){const U=w[V],j=n.getContext(U,I);if(j!==null)return j}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",se,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),N=Tt(I,w),N===null)throw Tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,Oe,Re,Qe,Be,Pe,Ye,Ct,Dt,A,E,W,te,ne,le,xe,ue,$,Se,Ee,we,ge,_e,ke;function Ke(){Te=new AS(N),Oe=new yS(N,Te,e),Te.init(Oe),ge=new uM(N,Te,Oe),Re=new aM(N,Te,Oe),Qe=new bS(N),Be=new qE,Pe=new lM(N,Te,Re,Be,Oe,ge,Qe),Ye=new ES(m),Ct=new CS(m),Dt=new Hx(N,Oe),_e=new vS(N,Te,Dt,Oe),A=new RS(N,Dt,Qe,_e),E=new NS(N,A,Dt,Qe),Se=new US(N,Oe,Pe),xe=new SS(Be),W=new jE(m,Ye,Ct,Te,Oe,_e,xe),te=new pM(m,Be),ne=new YE,le=new tM(Te,Oe),$=new _S(m,Ye,Ct,Re,E,h,l),ue=new oM(m,E,Oe),ke=new mM(N,Qe,Oe,Re),Ee=new xS(N,Te,Qe,Oe),we=new LS(N,Te,Qe,Oe),Qe.programs=W.programs,m.capabilities=Oe,m.extensions=Te,m.properties=Be,m.renderLists=ne,m.shadowMap=ue,m.state=Re,m.info=Qe}Ke();const L=new hM(m,N);this.xr=L,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(G,Q,!1))},this.getSize=function(w){return w.set(G,Q)},this.setSize=function(w,I,V=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Q=I,n.width=Math.floor(w*X),n.height=Math.floor(I*X),V===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(G*X,Q*X).floor()},this.setDrawingBufferSize=function(w,I,V){G=w,Q=I,X=V,n.width=Math.floor(w*V),n.height=Math.floor(I*V),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,I,V,U){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,I,V,U),Re.viewport(T.copy(k).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,I,V,U){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,I,V,U),Re.scissor(q.copy(ie).multiplyScalar(X).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(w){Re.setScissorTest(D=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(w=!0,I=!0,V=!0){let U=0;if(w){let j=!1;if(R!==null){const pe=R.texture.format;j=pe===Vg||pe===Gg||pe===Hg}if(j){const pe=R.texture.type,Me=pe===Xi||pe===Ni||pe===fd||pe===_r||pe===zg||pe===Bg,Ce=$.getClearColor(),Le=$.getClearAlpha(),ze=Ce.r,be=Ce.g,De=Ce.b,Je=Be.get(R).__webglFramebuffer;Me?(g[0]=ze,g[1]=be,g[2]=De,g[3]=Le,N.clearBufferuiv(N.COLOR,Je,g)):(x[0]=ze,x[1]=be,x[2]=De,x[3]=Le,N.clearBufferiv(N.COLOR,Je,x))}else U|=N.COLOR_BUFFER_BIT}I&&(U|=N.DEPTH_BUFFER_BIT),V&&(U|=N.STENCIL_BUFFER_BIT),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ne.dispose(),le.dispose(),Be.dispose(),Ye.dispose(),Ct.dispose(),E.dispose(),_e.dispose(),ke.dispose(),W.dispose(),L.dispose(),L.removeEventListener("sessionstart",at),L.removeEventListener("sessionend",zn),fe&&(fe.dispose(),fe=null),zt.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Qe.autoReset,I=ue.enabled,V=ue.autoUpdate,U=ue.needsUpdate,j=ue.type;Ke(),Qe.autoReset=w,ue.enabled=I,ue.autoUpdate=V,ue.needsUpdate=U,ue.type=j}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){const I=w.target;I.removeEventListener("dispose",ce),je(I)}function je(w){ot(w),Be.remove(w)}function ot(w){const I=Be.get(w).programs;I!==void 0&&(I.forEach(function(V){W.releaseProgram(V)}),w.isShaderMaterial&&W.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,V,U,j,pe){I===null&&(I=yt);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Ce=B1(w,I,V,U,j);Re.setMaterial(U,Me);let Le=V.index,ze=1;U.wireframe===!0&&(Le=A.getWireframeAttribute(V),ze=2);const be=V.drawRange,De=V.attributes.position;let Je=be.start*ze,ut=(be.start+be.count)*ze;pe!==null&&(Je=Math.max(Je,pe.start*ze),ut=Math.min(ut,(pe.start+pe.count)*ze)),Le!==null?(Je=Math.max(Je,0),ut=Math.min(ut,Le.count)):De!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,De.count));const wn=ut-Je;if(wn<0||wn===1/0)return;_e.setup(j,U,Ce,V,Le);let Qn,dt=Ee;if(Le!==null&&(Qn=Dt.get(Le),dt=we,dt.setIndex(Qn)),j.isMesh)U.wireframe===!0?(Re.setLineWidth(U.wireframeLinewidth*Ge()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(j.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),Re.setLineWidth(Ve*Ge()),j.isLineSegments?dt.setMode(N.LINES):j.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else j.isPoints?dt.setMode(N.POINTS):j.isSprite&&dt.setMode(N.TRIANGLES);if(j.isInstancedMesh)dt.renderInstances(Je,wn,j.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Yl=Math.min(V.instanceCount,Ve);dt.renderInstances(Je,wn,Yl)}else dt.render(Je,wn)},this.compile=function(w,I){function V(U,j,pe){U.transparent===!0&&U.side===li&&U.forceSinglePass===!1?(U.side=Jt,U.needsUpdate=!0,qo(U,j,pe),U.side=$i,U.needsUpdate=!0,qo(U,j,pe),U.side=li):qo(U,j,pe)}p=le.get(w),p.init(),_.push(p),w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(m.useLegacyLights),w.traverse(function(U){const j=U.material;if(j)if(Array.isArray(j))for(let pe=0;pe<j.length;pe++){const Me=j[pe];V(Me,w,U)}else V(j,w,U)}),_.pop(),p=null};let ft=null;function tr(w){ft&&ft(w)}function at(){zt.stop()}function zn(){zt.start()}const zt=new s1;zt.setAnimationLoop(tr),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(w){ft=w,L.setAnimationLoop(w),w===null?zt.stop():zt.start()},L.addEventListener("sessionstart",at),L.addEventListener("sessionend",zn),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(I=L.updateCameraXR(I)),w.isScene===!0&&w.onBeforeRender(m,w,I,R),p=le.get(w,_.length),p.init(),_.push(p),ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),J.setFromProjectionMatrix(ve),de=this.localClippingEnabled,K=xe.init(this.clippingPlanes,de),v=ne.get(w,c.length),v.init(),c.push(v),Ad(w,I,0,m.sortObjects),v.finish(),m.sortObjects===!0&&v.sort(P,B),K===!0&&xe.beginShadows();const V=p.state.shadowsArray;if(ue.render(V,w,I),K===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,$.render(v,w),p.setupLights(m.useLegacyLights),I.isArrayCamera){const U=I.cameras;for(let j=0,pe=U.length;j<pe;j++){const Me=U[j];Rd(v,w,Me,Me.viewport)}}else Rd(v,w,I);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(m,w,I),_e.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Ad(w,I,V,U){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){U&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Me=E.update(w),Ce=w.material;Ce.visible&&v.push(w,Me,Ce,V,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Qe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Qe.render.frame);const Me=E.update(w),Ce=w.material;if(U&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ae.copy(Me.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Ce)){const Le=Me.groups;for(let ze=0,be=Le.length;ze<be;ze++){const De=Le[ze],Je=Ce[De.materialIndex];Je&&Je.visible&&v.push(w,Me,Je,V,Ae.z,De)}}else Ce.visible&&v.push(w,Me,Ce,V,Ae.z,null)}}const pe=w.children;for(let Me=0,Ce=pe.length;Me<Ce;Me++)Ad(pe[Me],I,V,U)}function Rd(w,I,V,U){const j=w.opaque,pe=w.transmissive,Me=w.transparent;p.setupLightsView(V),K===!0&&xe.setGlobalState(m.clippingPlanes,V),pe.length>0&&z1(j,pe,I,V),U&&Re.viewport(T.copy(U)),j.length>0&&jo(j,I,V),pe.length>0&&jo(pe,I,V),Me.length>0&&jo(Me,I,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function z1(w,I,V,U){const j=Oe.isWebGL2;fe===null&&(fe=new Ar(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Po:Xi,minFilter:bo,samples:j&&a===!0?4:0})),m.getDrawingBufferSize(Fe),j?fe.setSize(Fe.x,Fe.y):fe.setSize(af(Fe.x),af(Fe.y));const pe=m.getRenderTarget();m.setRenderTarget(fe),m.getClearColor(F),H=m.getClearAlpha(),H<1&&m.setClearColor(16777215,.5),m.clear();const Me=m.toneMapping;m.toneMapping=pi,jo(w,V,U),Pe.updateMultisampleRenderTarget(fe),Pe.updateRenderTargetMipmap(fe);let Ce=!1;for(let Le=0,ze=I.length;Le<ze;Le++){const be=I[Le],De=be.object,Je=be.geometry,ut=be.material,wn=be.group;if(ut.side===li&&De.layers.test(U.layers)){const Qn=ut.side;ut.side=Jt,ut.needsUpdate=!0,Ld(De,V,U,Je,ut,wn),ut.side=Qn,ut.needsUpdate=!0,Ce=!0}}Ce===!0&&(Pe.updateMultisampleRenderTarget(fe),Pe.updateRenderTargetMipmap(fe)),m.setRenderTarget(pe),m.setClearColor(F,H),m.toneMapping=Me}function jo(w,I,V){const U=I.isScene===!0?I.overrideMaterial:null;for(let j=0,pe=w.length;j<pe;j++){const Me=w[j],Ce=Me.object,Le=Me.geometry,ze=U===null?Me.material:U,be=Me.group;Ce.layers.test(V.layers)&&Ld(Ce,I,V,Le,ze,be)}}function Ld(w,I,V,U,j,pe){w.onBeforeRender(m,I,V,U,j,pe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(m,I,V,U,w,pe),j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=Jt,j.needsUpdate=!0,m.renderBufferDirect(V,I,U,j,w,pe),j.side=$i,j.needsUpdate=!0,m.renderBufferDirect(V,I,U,j,w,pe),j.side=li):m.renderBufferDirect(V,I,U,j,w,pe),w.onAfterRender(m,I,V,U,j,pe)}function qo(w,I,V){I.isScene!==!0&&(I=yt);const U=Be.get(w),j=p.state.lights,pe=p.state.shadowsArray,Me=j.state.version,Ce=W.getParameters(w,j.state,pe,I,V),Le=W.getProgramCacheKey(Ce);let ze=U.programs;U.environment=w.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(w.isMeshStandardMaterial?Ct:Ye).get(w.envMap||U.environment),ze===void 0&&(w.addEventListener("dispose",ce),ze=new Map,U.programs=ze);let be=ze.get(Le);if(be!==void 0){if(U.currentProgram===be&&U.lightsStateVersion===Me)return bd(w,Ce),be}else Ce.uniforms=W.getUniforms(w),w.onBuild(V,Ce,m),w.onBeforeCompile(Ce,m),be=W.acquireProgram(Ce,Le),ze.set(Le,be),U.uniforms=Ce.uniforms;const De=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=xe.uniform),bd(w,Ce),U.needsLights=G1(w),U.lightsStateVersion=Me,U.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix);const Je=be.getUniforms(),ut=ja.seqWithValue(Je.seq,De);return U.currentProgram=be,U.uniformsList=ut,be}function bd(w,I){const V=Be.get(w);V.outputColorSpace=I.outputColorSpace,V.instancing=I.instancing,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function B1(w,I,V,U,j){I.isScene!==!0&&(I=yt),Pe.resetTextureUnits();const pe=I.fog,Me=U.isMeshStandardMaterial?I.environment:null,Ce=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yn,Le=(U.isMeshStandardMaterial?Ct:Ye).get(U.envMap||Me),ze=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,be=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),De=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,wn=U.toneMapped?m.toneMapping:pi,Qn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=Qn!==void 0?Qn.length:0,Ve=Be.get(U),Yl=p.state.lights;if(K===!0&&(de===!0||w!==S)){const en=w===S&&U.id===b;xe.setState(U,w,en)}let St=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Yl.state.version||Ve.outputColorSpace!==Ce||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Le||U.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==xe.numPlanes||Ve.numIntersection!==xe.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==be||Ve.morphTargets!==De||Ve.morphNormals!==Je||Ve.morphColors!==ut||Ve.toneMapping!==wn||Oe.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(St=!0):(St=!0,Ve.__version=U.version);let nr=Ve.currentProgram;St===!0&&(nr=qo(U,I,j));let Pd=!1,Fs=!1,Kl=!1;const Bt=nr.getUniforms(),ir=Ve.uniforms;if(Re.useProgram(nr.program)&&(Pd=!0,Fs=!0,Kl=!0),U.id!==b&&(b=U.id,Fs=!0),Pd||S!==w){if(Bt.setValue(N,"projectionMatrix",w.projectionMatrix),Oe.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Fs=!0,Kl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const en=Bt.map.cameraPosition;en!==void 0&&en.setValue(N,Ae.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||j.isSkinnedMesh)&&Bt.setValue(N,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){Bt.setOptional(N,j,"bindMatrix"),Bt.setOptional(N,j,"bindMatrixInverse");const en=j.skeleton;en&&(Oe.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Bt.setValue(N,"boneTexture",en.boneTexture,Pe),Bt.setValue(N,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zl=V.morphAttributes;if((Zl.position!==void 0||Zl.normal!==void 0||Zl.color!==void 0&&Oe.isWebGL2===!0)&&Se.update(j,V,nr),(Fs||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Bt.setValue(N,"receiveShadow",j.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ir.envMap.value=Le,ir.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Fs&&(Bt.setValue(N,"toneMappingExposure",m.toneMappingExposure),Ve.needsLights&&H1(ir,Kl),pe&&U.fog===!0&&te.refreshFogUniforms(ir,pe),te.refreshMaterialUniforms(ir,U,X,Q,fe),ja.upload(N,Ve.uniformsList,ir,Pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ja.upload(N,Ve.uniformsList,ir,Pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Bt.setValue(N,"center",j.center),Bt.setValue(N,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(N,"normalMatrix",j.normalMatrix),Bt.setValue(N,"modelMatrix",j.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const en=U.uniformsGroups;for(let Ql=0,V1=en.length;Ql<V1;Ql++)if(Oe.isWebGL2){const Dd=en[Ql];ke.update(Dd,nr),ke.bind(Dd,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function H1(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function G1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,I,V){Be.get(w.texture).__webglTexture=I,Be.get(w.depthTexture).__webglTexture=V;const U=Be.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=V===void 0,U.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const V=Be.get(w);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,V=0){R=w,M=I,C=V;let U=!0,j=null,pe=!1,Me=!1;if(w){const Le=Be.get(w);Le.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(N.FRAMEBUFFER,null),U=!1):Le.__webglFramebuffer===void 0?Pe.setupRenderTarget(w):Le.__hasExternalTextures&&Pe.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const be=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=be[I],pe=!0):Oe.isWebGL2&&w.samples>0&&Pe.useMultisampledRTT(w)===!1?j=Be.get(w).__webglMultisampledFramebuffer:j=be,T.copy(w.viewport),q.copy(w.scissor),Z=w.scissorTest}else T.copy(k).multiplyScalar(X).floor(),q.copy(ie).multiplyScalar(X).floor(),Z=D;if(Re.bindFramebuffer(N.FRAMEBUFFER,j)&&Oe.drawBuffers&&U&&Re.drawBuffers(w,j),Re.viewport(T),Re.scissor(q),Re.setScissorTest(Z),pe){const Le=Be.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Le.__webglTexture,V)}else if(Me){const Le=Be.get(w.texture),ze=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,V||0,ze)}b=-1},this.readRenderTargetPixels=function(w,I,V,U,j,pe,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){Re.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const Le=w.texture,ze=Le.format,be=Le.type;if(ze!==In&&ge.convert(ze)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=be===Po&&(Te.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(be!==Xi&&ge.convert(be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Ii&&(Oe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-U&&V>=0&&V<=w.height-j&&N.readPixels(I,V,U,j,ge.convert(ze),ge.convert(be),pe)}finally{const Le=R!==null?Be.get(R).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(w,I,V=0){const U=Math.pow(2,-V),j=Math.floor(I.image.width*U),pe=Math.floor(I.image.height*U);Pe.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,w.x,w.y,j,pe),Re.unbindTexture()},this.copyTextureToTexture=function(w,I,V,U=0){const j=I.image.width,pe=I.image.height,Me=ge.convert(V.format),Ce=ge.convert(V.type);Pe.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,w.x,w.y,j,pe,Me,Ce,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,Me,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,U,w.x,w.y,Me,Ce,I.image),U===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,I,V,U,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=w.max.x-w.min.x+1,Me=w.max.y-w.min.y+1,Ce=w.max.z-w.min.z+1,Le=ge.convert(U.format),ze=ge.convert(U.type);let be;if(U.isData3DTexture)Pe.setTexture3D(U,0),be=N.TEXTURE_3D;else if(U.isDataArrayTexture)Pe.setTexture2DArray(U,0),be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),wn=N.getParameter(N.UNPACK_SKIP_ROWS),Qn=N.getParameter(N.UNPACK_SKIP_IMAGES),dt=V.isCompressedTexture?V.mipmaps[0]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(be,j,I.x,I.y,I.z,pe,Me,Ce,Le,ze,dt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(be,j,I.x,I.y,I.z,pe,Me,Ce,Le,dt.data)):N.texSubImage3D(be,j,I.x,I.y,I.z,pe,Me,Ce,Le,ze,dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,wn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qn),j===0&&U.generateMipmaps&&N.generateMipmap(be),Re.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Pe.setTextureCube(w,0):w.isData3DTexture?Pe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Pe.setTexture2DArray(w,0):Pe.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){M=0,C=0,R=null,Re.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?xr:Wg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?Ue:Yn}}class c1 extends _M{}c1.prototype.isWebGL1Renderer=!0;class vM extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class gd extends er{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new O,h=new O,g=[],x=[],v=[],p=[];for(let c=0;c<=i;c++){const _=[],m=c/i;let y=0;c===0&&o===0?y=.5/n:c===i&&l===Math.PI&&(y=-.5/n);for(let M=0;M<=n;M++){const C=M/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+m*a),d.y=e*Math.cos(o+m*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+m*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(C+y,1-m),_.push(u++)}f.push(_)}for(let c=0;c<i;c++)for(let _=0;_<n;_++){const m=f[c][_+1],y=f[c][_],M=f[c+1][_],C=f[c+1][_+1];(c!==0||o>0)&&g.push(m,y,C),(c!==i-1||l<Math.PI)&&g.push(y,M,C)}this.setIndex(g),this.setAttribute("position",new $n(x,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xM{constructor(e,n,i=0,r=1/0){this.ray=new Kg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return uf(e,this,i,n),i.sort(rm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)uf(e[r],this,i,n);return i.sort(rm),i}}function rm(t,e){return t.distance-e.distance}function uf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)uf(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);class pn{constructor(e,n,i){Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"z",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.x=e,this.y=n,this.z=i}dot2(e,n){return this.x*e+this.y*n}dot3(e,n,i){return this.x*e+this.y*n+this.z*i}}class yM{constructor(e=0){Object.defineProperty(this,"permutationTable",{enumerable:!0,configurable:!0,writable:!0,value:[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180]}),Object.defineProperty(this,"grad3",{enumerable:!0,configurable:!0,writable:!0,value:[new pn(1,1,0),new pn(-1,1,0),new pn(1,-1,0),new pn(-1,-1,0),new pn(1,0,1),new pn(-1,0,1),new pn(1,0,-1),new pn(-1,0,-1),new pn(0,1,1),new pn(0,-1,1),new pn(0,1,-1),new pn(0,-1,-1)]}),Object.defineProperty(this,"perm",{enumerable:!0,configurable:!0,writable:!0,value:new Array(512)}),Object.defineProperty(this,"gradP",{enumerable:!0,configurable:!0,writable:!0,value:new Array(512)}),Object.defineProperty(this,"F2",{enumerable:!0,configurable:!0,writable:!0,value:.5*(Math.sqrt(3)-1)}),Object.defineProperty(this,"G2",{enumerable:!0,configurable:!0,writable:!0,value:(3-Math.sqrt(3))/6}),Object.defineProperty(this,"F3",{enumerable:!0,configurable:!0,writable:!0,value:1/3}),Object.defineProperty(this,"G3",{enumerable:!0,configurable:!0,writable:!0,value:1/6}),e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(let n=0;n<256;n++){let i;n&1?i=this.permutationTable[n]^e&255:i=this.permutationTable[n]^e>>8&255,this.perm[n]=this.perm[n+256]=i,this.gradP[n]=this.gradP[n+256]=this.grad3[i%12]}}simplex2(e,n){let i,r,s,o=(e+n)*this.F2,a=Math.floor(e+o),l=Math.floor(n+o),u=(a+l)*this.G2,f=e-a+u,d=n-l+u,h,g;f>d?(h=1,g=0):(h=0,g=1);let x=f-h+this.G2,v=d-g+this.G2,p=f-1+2*this.G2,c=d-1+2*this.G2;a&=255,l&=255;let _=this.gradP[a+this.perm[l]],m=this.gradP[a+h+this.perm[l+g]],y=this.gradP[a+1+this.perm[l+1]],M=.5-f*f-d*d;M<0?i=0:(M*=M,i=M*M*_.dot2(f,d));let C=.5-x*x-v*v;C<0?r=0:(C*=C,r=C*C*m.dot2(x,v));let R=.5-p*p-c*c;return R<0?s=0:(R*=R,s=R*R*y.dot2(p,c)),70*(i+r+s)}simplex3(e,n,i){let r,s,o,a,l=(e+n+i)*this.F3,u=Math.floor(e+l),f=Math.floor(n+l),d=Math.floor(i+l),h=(u+f+d)*this.G3,g=e-u+h,x=n-f+h,v=i-d+h,p,c,_,m,y,M;g>=x?x>=v?(p=1,c=0,_=0,m=1,y=1,M=0):g>=v?(p=1,c=0,_=0,m=1,y=0,M=1):(p=0,c=0,_=1,m=1,y=0,M=1):x<v?(p=0,c=0,_=1,m=0,y=1,M=1):g<v?(p=0,c=1,_=0,m=0,y=1,M=1):(p=0,c=1,_=0,m=1,y=1,M=0);let C=g-p+this.G3,R=x-c+this.G3,b=v-_+this.G3,S=g-m+2*this.G3,T=x-y+2*this.G3,q=v-M+2*this.G3,Z=g-1+3*this.G3,F=x-1+3*this.G3,H=v-1+3*this.G3;u&=255,f&=255,d&=255;let G=this.gradP[u+this.perm[f+this.perm[d]]],Q=this.gradP[u+p+this.perm[f+c+this.perm[d+_]]],X=this.gradP[u+m+this.perm[f+y+this.perm[d+M]]],P=this.gradP[u+1+this.perm[f+1+this.perm[d+1]]],B=.6-g*g-x*x-v*v;B<0?r=0:(B*=B,r=B*B*G.dot3(g,x,v));let k=.6-C*C-R*R-b*b;k<0?s=0:(k*=k,s=k*k*Q.dot3(C,R,b));let ie=.6-S*S-T*T-q*q;ie<0?o=0:(ie*=ie,o=ie*ie*X.dot3(S,T,q));let D=.6-Z*Z-F*F-H*H;return D<0?a=0:(D*=D,a=D*D*P.dot3(Z,F,H)),32*(r+s+o+a)}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,n,i){return(1-i)*e+i*n}perlin2(e,n){let i=Math.floor(e),r=Math.floor(n);e=e-i,n=n-r,i=i&255,r=r&255;let s=this.gradP[i+this.perm[r]].dot2(e,n),o=this.gradP[i+this.perm[r+1]].dot2(e,n-1),a=this.gradP[i+1+this.perm[r]].dot2(e-1,n),l=this.gradP[i+1+this.perm[r+1]].dot2(e-1,n-1),u=this.fade(e);return this.lerp(this.lerp(s,a,u),this.lerp(o,l,u),this.fade(n))}perlin3(e,n,i){let r=Math.floor(e),s=Math.floor(n),o=Math.floor(i);e=e-r,n=n-s,i=i-o,r=r&255,s=s&255,o=o&255;let a=this.gradP[r+this.perm[s+this.perm[o]]].dot3(e,n,i),l=this.gradP[r+this.perm[s+this.perm[o+1]]].dot3(e,n,i-1),u=this.gradP[r+this.perm[s+1+this.perm[o]]].dot3(e,n-1,i),f=this.gradP[r+this.perm[s+1+this.perm[o+1]]].dot3(e,n-1,i-1),d=this.gradP[r+1+this.perm[s+this.perm[o]]].dot3(e-1,n,i),h=this.gradP[r+1+this.perm[s+this.perm[o+1]]].dot3(e-1,n,i-1),g=this.gradP[r+1+this.perm[s+1+this.perm[o]]].dot3(e-1,n-1,i),x=this.gradP[r+1+this.perm[s+1+this.perm[o+1]]].dot3(e-1,n-1,i-1),v=this.fade(e),p=this.fade(n),c=this.fade(i);return this.lerp(this.lerp(this.lerp(a,d,v),this.lerp(l,h,v),c),this.lerp(this.lerp(u,g,v),this.lerp(f,x,v),c),p)}}var Sr=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Sr.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Sr.Bounce.In(t*2)*.5:Sr.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),to=function(){return performance.now()},SM=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=to()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!n;s&&s.update(e,o)===!1&&!n&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),us={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=us.Utils.Linear;return e<0?s(t[0],t[1],i):e>1?s(t[n],t[n-1],n-i):s(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){for(var n=0,i=t.length-1,r=Math.pow,s=us.Utils.Bernstein,o=0;o<=i;o++)n+=r(1-e,i-o)*r(e,o)*t[o]*s(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=us.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),s(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(s(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):s(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=us.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}}},EM=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),cf=new SM,sm=function(){function t(e,n){n===void 0&&(n=cf),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Sr.Linear.None,this._interpolationFunction=us.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=EM.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=to()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,r,s){for(var o in i){var a=e[o],l=Array.isArray(a),u=l?"array":typeof a,f=!l&&Array.isArray(i[o]);if(!(u==="undefined"||u==="function")){if(f){var d=i[o];if(d.length===0)continue;for(var h=[a],g=0,x=d.length;g<x;g+=1){var v=this._handleRelativeValue(a,d[g]);if(isNaN(v)){f=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}f&&(i[o]=h)}if((u==="object"||l)&&a&&!f){n[o]=l?[]:{};var p=a;for(var c in p)n[o][c]=p[c];r[o]=l?[]:{};var d=i[o];if(!this._isDynamic){var _={};for(var c in d)_[c]=d[c];i[o]=d=_}this._setupProperties(p,n[o],d,r[o],s)}else(typeof n[o]>"u"||s)&&(n[o]=a),l||(n[o]*=1),f?r[o]=i[o].slice().reverse():r[o]=n[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=to()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=to()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=cf),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Sr.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=us.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=to()),n===void 0&&(n=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,r){for(var s in i)if(n[s]!==void 0){var o=n[s]||0,a=i[s],l=Array.isArray(e[s]),u=Array.isArray(a),f=!l&&u;f?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),Kn=cf;Kn.getAll.bind(Kn);Kn.removeAll.bind(Kn);Kn.add.bind(Kn);Kn.remove.bind(Kn);var MM=Kn.update.bind(Kn);const _d=(t,e,n,i,r,s,o,a,l)=>{const u=new Yi({uniforms:{color1:{value:new ye(r)},color2:{value:new ye(s)}},vertexShader:a,fragmentShader:l}),f=new di(new gd(t,128,128),u),d=new $e;d.x=e/window.innerWidth*2-1,d.y=-(n/window.innerHeight)*2+1;const h=new xM,g=new Li,x=new O,v=new O;x.copy(i.position).normalize(),g.setFromNormalAndCoplanarPoint(x,new O(0,0,-30)),h.setFromCamera(d,i),h.ray.intersectPlane(g,v),f.position.copy(v),f.position.z=-30;const p=new yM(Math.random());i.add(f),o.push({object:f,noise:p})},wM=(t,e,n,i,r)=>{const s=t.geometry.attributes.position,o=performance.now()*i,a=new O;for(let l=0;l<s.count;l++){a.fromBufferAttribute(s,l).setLength(n);const u=r.perlin3(a.x+o*.1,a.y+o*.1,a.z+o*.1);a.setLength(e+.3*u),s.setXYZ(l,a.x,a.y,a.z)}s.needsUpdate=!0,t.rotation.x+=1e-4,t.rotation.y+=1e-4,t.position.z=-30},f1=(t,e)=>{for(const n of t){const i=n.object;wM(i,i.geometry.parameters.radius,.8,.002,n.noise)}MM(),e.render(Vl,Ki),requestAnimationFrame(()=>f1(t,e))},om=(t,e)=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio),t.updateMatrixWorld()},TM=(t,e)=>{_d(1.5,t,e,Ki,"Deepskyblue","white",Go,vd,xd)},tc=(t,e)=>{_d(2,t,e,Ki,4573183,"white",Go,vd,xd)},Ua=(t,e)=>{_d(1.6,t,e,Ki,5580799,"white",Go,vd,xd)},Go=[],Vl=new vM;Vl.background=new ye("hsl(215, 100%, 74%)");const Ki=new vn(10,window.innerWidth/window.innerHeight,1,1e4);Ki.position.z=20;Vl.add(Ki);const vd=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`,xd=`
  uniform vec3 color1;
  uniform vec3 color2;

  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
  }
`,d1=()=>/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),CM=d1(),AM=t=>{re.useEffect(()=>{if(CM)return;TM(window.innerWidth/6,window.innerHeight/5),window.innerWidth<800&&Ua(window.innerWidth-100,window.innerHeight-window.innerHeight/10),window.innerWidth>=800&&window.innerWidth<1100&&(tc(window.innerWidth,window.innerHeight/3),Ua(window.innerWidth/2,window.innerHeight-window.innerHeight/10)),window.innerWidth>=1100&&window.innerWidth<1550&&(tc(window.innerWidth-150,window.innerHeight/3),Ua(window.innerWidth/2-150,window.innerHeight-window.innerHeight/10)),window.innerWidth>=1550&&(tc(window.innerWidth-280,window.innerHeight/3),Ua(window.innerWidth/2-150,window.innerHeight-window.innerHeight/10));const e=new c1({canvas:t.current?t.current:void 0,antialias:!0});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",()=>om(Ki,e)),requestAnimationFrame(()=>f1(Go,e)),()=>window.removeEventListener("resize",()=>om(Ki,e))},[])},h1=re.createContext(null),Vo=()=>re.useContext(h1),RM=({children:t})=>{const[e,n]=re.useState(!0);return me.jsx(h1.Provider,{value:{firstRender:e,setFirstRender:n},children:t})};function p1(t,e){return function(){return t.apply(e,arguments)}}const{toString:LM}=Object.prototype,{getPrototypeOf:yd}=Object,Wl=(t=>e=>{const n=LM.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=t=>(t=t.toLowerCase(),e=>Wl(e)===t),Xl=t=>e=>typeof e===t,{isArray:Is}=Array,Do=Xl("undefined");function bM(t){return t!==null&&!Do(t)&&t.constructor!==null&&!Do(t.constructor)&&Sn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const m1=Zn("ArrayBuffer");function PM(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&m1(t.buffer),e}const DM=Xl("string"),Sn=Xl("function"),g1=Xl("number"),jl=t=>t!==null&&typeof t=="object",UM=t=>t===!0||t===!1,qa=t=>{if(Wl(t)!=="object")return!1;const e=yd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},NM=Zn("Date"),IM=Zn("File"),FM=Zn("Blob"),OM=Zn("FileList"),kM=t=>jl(t)&&Sn(t.pipe),zM=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Sn(t.append)&&((e=Wl(t))==="formdata"||e==="object"&&Sn(t.toString)&&t.toString()==="[object FormData]"))},BM=Zn("URLSearchParams"),HM=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Is(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function _1(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const v1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),x1=t=>!Do(t)&&t!==v1;function ff(){const{caseless:t}=x1(this)&&this||{},e={},n=(i,r)=>{const s=t&&_1(e,r)||r;qa(e[s])&&qa(i)?e[s]=ff(e[s],i):qa(i)?e[s]=ff({},i):Is(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Wo(arguments[i],n);return e}const GM=(t,e,n,{allOwnKeys:i}={})=>(Wo(e,(r,s)=>{n&&Sn(r)?t[s]=p1(r,n):t[s]=r},{allOwnKeys:i}),t),VM=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),WM=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},XM=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&yd(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},jM=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},qM=t=>{if(!t)return null;if(Is(t))return t;let e=t.length;if(!g1(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$M=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&yd(Uint8Array)),YM=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},KM=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},ZM=Zn("HTMLFormElement"),QM=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),am=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),JM=Zn("RegExp"),y1=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Wo(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},ew=t=>{y1(t,(e,n)=>{if(Sn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Sn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tw=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Is(t)?i(t):i(String(t).split(e)),n},nw=()=>{},iw=(t,e)=>(t=+t,Number.isFinite(t)?t:e),nc="abcdefghijklmnopqrstuvwxyz",lm="0123456789",S1={DIGIT:lm,ALPHA:nc,ALPHA_DIGIT:nc+nc.toUpperCase()+lm},rw=(t=16,e=S1.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function sw(t){return!!(t&&Sn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ow=t=>{const e=new Array(10),n=(i,r)=>{if(jl(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Is(i)?[]:{};return Wo(i,(o,a)=>{const l=n(o,r+1);!Do(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},aw=Zn("AsyncFunction"),lw=t=>t&&(jl(t)||Sn(t))&&Sn(t.then)&&Sn(t.catch),Y={isArray:Is,isArrayBuffer:m1,isBuffer:bM,isFormData:zM,isArrayBufferView:PM,isString:DM,isNumber:g1,isBoolean:UM,isObject:jl,isPlainObject:qa,isUndefined:Do,isDate:NM,isFile:IM,isBlob:FM,isRegExp:JM,isFunction:Sn,isStream:kM,isURLSearchParams:BM,isTypedArray:$M,isFileList:OM,forEach:Wo,merge:ff,extend:GM,trim:HM,stripBOM:VM,inherits:WM,toFlatObject:XM,kindOf:Wl,kindOfTest:Zn,endsWith:jM,toArray:qM,forEachEntry:YM,matchAll:KM,isHTMLForm:ZM,hasOwnProperty:am,hasOwnProp:am,reduceDescriptors:y1,freezeMethods:ew,toObjectSet:tw,toCamelCase:QM,noop:nw,toFiniteNumber:iw,findKey:_1,global:v1,isContextDefined:x1,ALPHABET:S1,generateString:rw,isSpecCompliantForm:sw,toJSONObject:ow,isAsyncFn:aw,isThenable:lw};function We(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}Y.inherits(We,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const E1=We.prototype,M1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{M1[t]={value:t}});Object.defineProperties(We,M1);Object.defineProperty(E1,"isAxiosError",{value:!0});We.from=(t,e,n,i,r,s)=>{const o=Object.create(E1);return Y.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),We.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const uw=null;function df(t){return Y.isPlainObject(t)||Y.isArray(t)}function w1(t){return Y.endsWith(t,"[]")?t.slice(0,-2):t}function um(t,e,n){return t?t.concat(e).map(function(r,s){return r=w1(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function cw(t){return Y.isArray(t)&&!t.some(df)}const fw=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});function ql(t,e,n){if(!Y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,p){return!Y.isUndefined(p[v])});const i=n.metaTokens,r=n.visitor||f,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(e);if(!Y.isFunction(r))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(Y.isDate(x))return x.toISOString();if(!l&&Y.isBlob(x))throw new We("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(x)||Y.isTypedArray(x)?l&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function f(x,v,p){let c=x;if(x&&!p&&typeof x=="object"){if(Y.endsWith(v,"{}"))v=i?v:v.slice(0,-2),x=JSON.stringify(x);else if(Y.isArray(x)&&cw(x)||(Y.isFileList(x)||Y.endsWith(v,"[]"))&&(c=Y.toArray(x)))return v=w1(v),c.forEach(function(m,y){!(Y.isUndefined(m)||m===null)&&e.append(o===!0?um([v],y,s):o===null?v:v+"[]",u(m))}),!1}return df(x)?!0:(e.append(um(p,v,s),u(x)),!1)}const d=[],h=Object.assign(fw,{defaultVisitor:f,convertValue:u,isVisitable:df});function g(x,v){if(!Y.isUndefined(x)){if(d.indexOf(x)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(x),Y.forEach(x,function(c,_){(!(Y.isUndefined(c)||c===null)&&r.call(e,c,Y.isString(_)?_.trim():_,v,h))===!0&&g(c,v?v.concat(_):[_])}),d.pop()}}if(!Y.isObject(t))throw new TypeError("data must be an object");return g(t),e}function cm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Sd(t,e){this._pairs=[],t&&ql(t,this,e)}const T1=Sd.prototype;T1.append=function(e,n){this._pairs.push([e,n])};T1.toString=function(e){const n=e?function(i){return e.call(this,i,cm)}:cm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function dw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function C1(t,e,n){if(!e)return t;const i=n&&n.encode||dw,r=n&&n.serialize;let s;if(r?s=r(e,n):s=Y.isURLSearchParams(e)?e.toString():new Sd(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class hw{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const fm=hw,A1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pw=typeof URLSearchParams<"u"?URLSearchParams:Sd,mw=typeof FormData<"u"?FormData:null,gw=typeof Blob<"u"?Blob:null,_w={isBrowser:!0,classes:{URLSearchParams:pw,FormData:mw,Blob:gw},protocols:["http","https","file","blob","url","data"]},R1=typeof window<"u"&&typeof document<"u",vw=(t=>R1&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),xw=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),yw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:R1,hasStandardBrowserEnv:vw,hasStandardBrowserWebWorkerEnv:xw},Symbol.toStringTag,{value:"Module"})),Wn={...yw,..._w};function Sw(t,e){return ql(t,new Wn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Wn.isNode&&Y.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Ew(t){return Y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Mw(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function L1(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&Y.isArray(r)?r.length:o,l?(Y.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!Y.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&Y.isArray(r[o])&&(r[o]=Mw(r[o])),!a)}if(Y.isFormData(t)&&Y.isFunction(t.entries)){const n={};return Y.forEachEntry(t,(i,r)=>{e(Ew(i),r,n,0)}),n}return null}function ww(t,e,n){if(Y.isString(t))try{return(e||JSON.parse)(t),Y.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ed={transitional:A1,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=Y.isObject(e);if(s&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return r?JSON.stringify(L1(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Sw(e,this.formSerializer).toString();if((a=Y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ql(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),ww(e)):e}],transformResponse:[function(e){const n=this.transitional||Ed.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&Y.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?We.from(a,We.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wn.classes.FormData,Blob:Wn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],t=>{Ed.headers[t]={}});const Md=Ed,Tw=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cw=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&Tw[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},dm=Symbol("internals");function Ys(t){return t&&String(t).trim().toLowerCase()}function $a(t){return t===!1||t==null?t:Y.isArray(t)?t.map($a):String(t)}function Aw(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Rw=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ic(t,e,n,i,r){if(Y.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Y.isString(e)){if(Y.isString(i))return e.indexOf(i)!==-1;if(Y.isRegExp(i))return i.test(e)}}function Lw(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function bw(t,e){const n=Y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class $l{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,u){const f=Ys(l);if(!f)throw new Error("header name must be a non-empty string");const d=Y.findKey(r,f);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||l]=$a(a))}const o=(a,l)=>Y.forEach(a,(u,f)=>s(u,f,l));return Y.isPlainObject(e)||e instanceof this.constructor?o(e,n):Y.isString(e)&&(e=e.trim())&&!Rw(e)?o(Cw(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=Ys(e),e){const i=Y.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return Aw(r);if(Y.isFunction(n))return n.call(this,r,i);if(Y.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ys(e),e){const i=Y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ic(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Ys(o),o){const a=Y.findKey(i,o);a&&(!n||ic(i,i[a],a,n))&&(delete i[a],r=!0)}}return Y.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||ic(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return Y.forEach(this,(r,s)=>{const o=Y.findKey(i,s);if(o){n[o]=$a(r),delete n[s];return}const a=e?Lw(s):String(s).trim();a!==s&&delete n[s],n[a]=$a(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Y.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Y.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[dm]=this[dm]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Ys(o);i[a]||(bw(r,o),i[a]=!0)}return Y.isArray(e)?e.forEach(s):s(e),this}}$l.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors($l.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Y.freezeMethods($l);const mi=$l;function rc(t,e){const n=this||Md,i=e||n,r=mi.from(i.headers);let s=i.data;return Y.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function b1(t){return!!(t&&t.__CANCEL__)}function Xo(t,e,n){We.call(this,t??"canceled",We.ERR_CANCELED,e,n),this.name="CanceledError"}Y.inherits(Xo,We,{__CANCEL__:!0});function Pw(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new We("Request failed with status code "+n.status,[We.ERR_BAD_REQUEST,We.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Dw=Wn.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];Y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Y.isString(i)&&o.push("path="+i),Y.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Uw(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Nw(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function P1(t,e){return t&&!Uw(e)?Nw(t,e):e}const Iw=Wn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=Y.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Fw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ow(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),f=i[s];o||(o=u),n[r]=l,i[r]=u;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-o<e)return;const g=f&&u-f;return g?Math.round(h*1e3/g):void 0}}function hm(t,e){let n=0;const i=Ow(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a),u=s<=o;n=s;const f={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:r};f[e?"download":"upload"]=!0,t(f)}}const kw=typeof XMLHttpRequest<"u",zw=kw&&function(t){return new Promise(function(n,i){let r=t.data;const s=mi.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let f;if(Y.isFormData(r)){if(Wn.hasStandardBrowserEnv||Wn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((f=s.getContentType())!==!1){const[v,...p]=f?f.split(";").map(c=>c.trim()).filter(Boolean):[];s.setContentType([v||"multipart/form-data",...p].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(v+":"+p))}const h=P1(t.baseURL,t.url);d.open(t.method.toUpperCase(),C1(h,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function g(){if(!d)return;const v=mi.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),c={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:t,request:d};Pw(function(m){n(m),u()},function(m){i(m),u()},c),d=null}if("onloadend"in d?d.onloadend=g:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(g)},d.onabort=function(){d&&(i(new We("Request aborted",We.ECONNABORTED,t,d)),d=null)},d.onerror=function(){i(new We("Network Error",We.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const c=t.transitional||A1;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),i(new We(p,c.clarifyTimeoutError?We.ETIMEDOUT:We.ECONNABORTED,t,d)),d=null},Wn.hasStandardBrowserEnv&&(a&&Y.isFunction(a)&&(a=a(t)),a||a!==!1&&Iw(h))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&Dw.read(t.xsrfCookieName);v&&s.set(t.xsrfHeaderName,v)}r===void 0&&s.setContentType(null),"setRequestHeader"in d&&Y.forEach(s.toJSON(),function(p,c){d.setRequestHeader(c,p)}),Y.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",hm(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",hm(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=v=>{d&&(i(!v||v.type?new Xo(null,t,d):v),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const x=Fw(h);if(x&&Wn.protocols.indexOf(x)===-1){i(new We("Unsupported protocol "+x+":",We.ERR_BAD_REQUEST,t));return}d.send(r||null)})},hf={http:uw,xhr:zw};Y.forEach(hf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const pm=t=>`- ${t}`,Bw=t=>Y.isFunction(t)||t===null||t===!1,D1={getAdapter:t=>{t=Y.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!Bw(n)&&(i=hf[(o=String(n)).toLowerCase()],i===void 0))throw new We(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(pm).join(`
`):" "+pm(s[0]):"as no adapter specified";throw new We("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:hf};function sc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xo(null,t)}function mm(t){return sc(t),t.headers=mi.from(t.headers),t.data=rc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),D1.getAdapter(t.adapter||Md.adapter)(t).then(function(i){return sc(t),i.data=rc.call(t,t.transformResponse,i),i.headers=mi.from(i.headers),i},function(i){return b1(i)||(sc(t),i&&i.response&&(i.response.data=rc.call(t,t.transformResponse,i.response),i.response.headers=mi.from(i.response.headers))),Promise.reject(i)})}const gm=t=>t instanceof mi?{...t}:t;function Ls(t,e){e=e||{};const n={};function i(u,f,d){return Y.isPlainObject(u)&&Y.isPlainObject(f)?Y.merge.call({caseless:d},u,f):Y.isPlainObject(f)?Y.merge({},f):Y.isArray(f)?f.slice():f}function r(u,f,d){if(Y.isUndefined(f)){if(!Y.isUndefined(u))return i(void 0,u,d)}else return i(u,f,d)}function s(u,f){if(!Y.isUndefined(f))return i(void 0,f)}function o(u,f){if(Y.isUndefined(f)){if(!Y.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u,f,d){if(d in e)return i(u,f);if(d in t)return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,f)=>r(gm(u),gm(f),!0)};return Y.forEach(Object.keys(Object.assign({},t,e)),function(f){const d=l[f]||r,h=d(t[f],e[f],f);Y.isUndefined(h)&&d!==a||(n[f]=h)}),n}const U1="1.6.8",wd={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{wd[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const _m={};wd.transitional=function(e,n,i){function r(s,o){return"[Axios v"+U1+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new We(r(o," has been removed"+(n?" in "+n:"")),We.ERR_DEPRECATED);return n&&!_m[o]&&(_m[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Hw(t,e,n){if(typeof t!="object")throw new We("options must be an object",We.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new We("option "+s+" must be "+l,We.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new We("Unknown option "+s,We.ERR_BAD_OPTION)}}const pf={assertOptions:Hw,validators:wd},Ci=pf.validators;class El{constructor(e){this.defaults=e,this.interceptors={request:new fm,response:new fm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ls(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&pf.assertOptions(i,{silentJSONParsing:Ci.transitional(Ci.boolean),forcedJSONParsing:Ci.transitional(Ci.boolean),clarifyTimeoutError:Ci.transitional(Ci.boolean)},!1),r!=null&&(Y.isFunction(r)?n.paramsSerializer={serialize:r}:pf.assertOptions(r,{encode:Ci.function,serialize:Ci.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&Y.merge(s.common,s[n.method]);s&&Y.forEach(["delete","get","head","post","put","patch","common"],x=>{delete s[x]}),n.headers=mi.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let f,d=0,h;if(!l){const x=[mm.bind(this),void 0];for(x.unshift.apply(x,a),x.push.apply(x,u),h=x.length,f=Promise.resolve(n);d<h;)f=f.then(x[d++],x[d++]);return f}h=a.length;let g=n;for(d=0;d<h;){const x=a[d++],v=a[d++];try{g=x(g)}catch(p){v.call(this,p);break}}try{f=mm.call(this,g)}catch(x){return Promise.reject(x)}for(d=0,h=u.length;d<h;)f=f.then(u[d++],u[d++]);return f}getUri(e){e=Ls(this.defaults,e);const n=P1(e.baseURL,e.url);return C1(n,e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],function(e){El.prototype[e]=function(n,i){return this.request(Ls(i||{},{method:e,url:n,data:(i||{}).data}))}});Y.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ls(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}El.prototype[e]=n(),El.prototype[e+"Form"]=n(!0)});const Ya=El;class Td{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Xo(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Td(function(r){e=r}),cancel:e}}}const Gw=Td;function Vw(t){return function(n){return t.apply(null,n)}}function Ww(t){return Y.isObject(t)&&t.isAxiosError===!0}const mf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mf).forEach(([t,e])=>{mf[e]=t});const Xw=mf;function N1(t){const e=new Ya(t),n=p1(Ya.prototype.request,e);return Y.extend(n,Ya.prototype,e,{allOwnKeys:!0}),Y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return N1(Ls(t,r))},n}const mt=N1(Md);mt.Axios=Ya;mt.CanceledError=Xo;mt.CancelToken=Gw;mt.isCancel=b1;mt.VERSION=U1;mt.toFormData=ql;mt.AxiosError=We;mt.Cancel=mt.CanceledError;mt.all=function(e){return Promise.all(e)};mt.spread=Vw;mt.isAxiosError=Ww;mt.mergeConfig=Ls;mt.AxiosHeaders=mi;mt.formToJSON=t=>L1(Y.isHTMLForm(t)?new FormData(t):t);mt.getAdapter=D1.getAdapter;mt.HttpStatusCode=Xw;mt.default=mt;const I1=mt,jw=["Shining as brightly as ever!","It's a perfect day to soak up some sun","Clear skies and abundant sunshine","Enjoy the warmth of the sun today","A perfect day for stargazing!"],qw=["The sky is a canvas of clear blue","Time to bask in the warmth of the sun!","Clear skies and abundant sunshine","Enjoy the crystal-clear sky today!"],$w=["The sky is partly cloudy with patches of sunshine","A dreamy day of both sun and clouds","A day perfect for outdoor activities!"],Yw=["The sky is completely covered in clouds today","The clouds have taken over the sky","A blanket of gray clouds hangs overhead","A great day for indoor activities!"],Kw=["Thick fog has descended, reducing visibility","A dense fog blankets the surroundings","Visibility is low due to the heavy fog","Take it slow and stay safe on the roads"],Zw=["Gentle drizzle falls from the sky","A light drizzle - perfect for indoor activities","The air is filled with a mist as the drizzle continues","Don't let the drizzle dampen your spirits!"],Qw=["Rainy day perfect for staying cozy indoors","Raindrops tapping against the windows","Don't forget your umbrella!"],Jw=["Snowflakes gently falling from the sky","Building snowmen and having snowball fights today!","Enjoy the winter wonderland!","Enjoy the beauty of the snow-covered landscape!"],eT=["Make sure to take an umbrella!","Except moments of rain followed by sunshine","It's a showery day, so keep your umbrella handy!"],tT=["The sky rumbles with thunder as the storm rolls in","Flashes of lightning illuminate the dark sky","Remember to stay safe during the storm!","Stay indoors and seek shelter during the thunderstorm"],nT=t=>{let e;switch(t){case 0:e=jw;break;case 1:e=qw;break;case 2:e=$w;break;case 3:e=Yw;break;case 4:e=Kw;break;case 5:e=Zw;break;case 6:e=Qw;break;case 7:e=Jw;break;case 8:e=eT;break;case 9:e=tT;break;default:e=[""];break}const n=Math.floor(Math.random()*e.length);return e[n]},iT=async(t,e)=>await I1.get(`https://api.open-meteo.com/v1/forecast?latitude=${t}&longitude=${e}&hourly=temperature_2m,weathercode&current_weather=true&timeformat=unixtime&forecast_days=7&timezone=auto&daily=temperature_2m_max,temperature_2m_min,weathercode`),F1=re.createContext(null),br=()=>re.useContext(F1),rT=({children:t})=>{const[e,n]=re.useState(null),i=r=>{let s="",o=String(r.data.current_weather.weathercode)[0];switch(o){case"0":s="Clear Skies";break;case"1":s="Mainly Clear";break;case"2":s="Partly Cloudy";break;case"3":s="Overcast";break;case"4":s="Fog";break;case"5":s="Drizzle";break;case"6":s="Rain";break;case"7":s="Snow";break;case"8":s="Shower";break;case"9":s="Thunderstorm";break;default:s="",o="10"}const a=r.data.hourly.weathercode.map(u=>String(u)[0]),l={currentWeather:{...r.data.current_weather,iconNumber:Number(o),weatherName:s,maxTemperature:r.data.daily.temperature_2m_max[0],minTemperature:r.data.daily.temperature_2m_min[0],randomSentence:nT(Number(o))},hourlyWeather:{time:r.data.hourly.time,weatherCode:r.data.hourly.weathercode,temperature:r.data.hourly.temperature_2m,iconNumber:a},forecast:{maxTemperature:r.data.daily.temperature_2m_max,minTemperature:r.data.daily.temperature_2m_min,weatherCode:r.data.daily.weathercode,time:r.data.daily.time}};n(l)};return me.jsx(F1.Provider,{value:{weatherObject:e,setWeatherObject:i},children:t})},sT=d1(),oT=(t,e,n,i,r)=>{sT?(()=>{if(!r.current)return;let a="hsl(215, 100%, 74%)";switch(n){case 0:a="hsl(215, 100%, 77%)";break;case 1:a="hsl(215, 100%, 77%)";break;case 2:a="hsl(217, 95%, 75%)";break;case 3:a="hsl(214, 50%, 70%)";break;case 4:a="hsl(214, 40%, 70%)";break;case 5:a="hsl(215, 80%, 75%)";break;case 6:a="hsl(220, 50%, 70%)";break;case 7:a="hsl(215, 20%, 85%)";break;case 8:a="hsl(220, 80%, 70%)";break;case 9:a="hsl(220, 20%, 60%)";break;default:a="hsl(215, 100%, 77%)";break}r.current.style.backgroundColor=a})():(()=>{let a=new ye("hsl(215, 100%, 74%)");for(let l=0;l<t.length;l++){let u;switch(n){case 0:u=new ye(`hsl(${190+i/2*l}, 100%, 50%)`),a=new ye("hsl(215, 100%, 77%)");break;case 1:u=new ye(`hsl(${192+i*l}, 100%, 55%)`),a=new ye("hsl(215, 100%, 77%)");break;case 2:u=new ye(`hsl(${196+i*l}, ${100-i*l}%, 70%)`),a=new ye("hsl(217, 95%, 75%)");break;case 3:u=new ye(`hsl(${215+i*l}, ${55-i*l}%, 67%)`),a=new ye("hsl(214, 50%, 70%)");break;case 4:u=new ye(`hsl(${210+i/2*l}, ${40-i*l}%, ${70-i/2*l}%)`),a=new ye("hsl(214, 40%, 70%)");break;case 5:u=new ye(`hsl(${210+i/2*l}, 85%, 70%)`),a=new ye("hsl(215, 80%, 75%)");break;case 6:u=new ye(`hsl(${210+i/2*l}, 60%, 65%)`),a=new ye("hsl(220, 50%, 70%)");break;case 7:u=new ye(`hsl(${180+i*l}, 20%, 87%)`),a=new ye("hsl(215, 20%, 85%)");break;case 8:u=new ye(`hsl(${210+i/2*l}, 80%, 65%)`),a=new ye("hsl(220, 80%, 70%)");break;case 9:u=new ye(`hsl(${220+i*l}, 50%, ${38-l*i/4}%)`),a=new ye("hsl(220, 20%, 60%)");break;default:u=new ye(`hsl(${185+i*l}, 100%, 50%)`),a=new ye("hsl(215, 100%, 77%)");break}new sm(t[l].object.material.uniforms.color1).to({value:u},1e3).easing(Sr.Sinusoidal.InOut).start()}new sm(e).to({background:a}).easing(Sr.Sinusoidal.InOut).start()})()},aT=t=>{const e=Vo(),n=br(),i=re.useRef(null);return AM(i),re.useEffect(()=>{var r;n!=null&&n.weatherObject&&oT(Go,Vl,(r=n==null?void 0:n.weatherObject)==null?void 0:r.currentWeather.iconNumber,10,i)},[n==null?void 0:n.weatherObject]),me.jsxs("div",{className:"  relative flex items-center w-screen h-screen justify-center font-main ",children:[me.jsx("canvas",{className:" bg-[hsl(215,100%,74%)] [transition:background-color_0.5s_cubic-bezier(0.37,0,0.63,1)] absolute left-0 top-0 w-screen h-screen ",ref:i}),me.jsx("div",{className:` h-full max-w-sm ${e!=null&&e.firstRender?"max-h-20 p-6 overflow-hidden":"max-h-[85%] p-6 overflow-auto"} w-[95%]  bg-opacity-25 bg-slate-800 rounded-xl backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-[max-height] ease-in-out delay-500 duration-500 flex flex-col sm:p-6 [scrollbar-width:none]`,children:t.children})]})},O1=re.createContext(null),Pr=()=>re.useContext(O1),lT=({children:t})=>{const[e,n]=re.useState("entry");return me.jsx(O1.Provider,{value:{transition:e,setTransition:n},children:t})},uT=async t=>{try{return await I1.get(`https://geocoding-api.open-meteo.com/v1/search?name=${t}&count=1&language=en&format=json`)}catch(e){return console.log(e),e}},cT=async t=>{const e=await uT(t);if(e instanceof Error||!e.data.results)return null;const n=e.data.results[0];return{name:n.name,country:n.country,lat:n.latitude,log:n.longitude}},k1=re.createContext(null),fT=()=>re.useContext(k1),dT=({children:t})=>{const[e,n]=re.useState(null),i=Pr(),r=br(),s=o=>{if(o!==null){if(e===null){i==null||i.setTransition("exit"),setTimeout(()=>{n(o)},500);return}o.name!==(e==null?void 0:e.name)&&(i==null||i.setTransition("exit"),setTimeout(()=>{n(o)},500))}};return re.useEffect(()=>{e&&(async()=>{const o=await iT(e.lat,e.log);r==null||r.setWeatherObject(o),i==null||i.setTransition("entry")})()},[e]),me.jsx(k1.Provider,{value:{city:e,setCityContextObject:s},children:t})},oc=t=>{let i=30;return t.length>10&&(i=Math.round(30-Math.log(t.length/10*2.5)*(t.length/10)*2.5)),i<18&&(i=18),`${i}px`},vm=700,hT=()=>{var _;const t=fT(),e=Pr(),n=Vo(),[i,r]=re.useState(""),[s,o]=re.useState(null),[a,l]=re.useState(""),[u,f]=re.useState(!1),d=re.useRef(null),h=re.useRef("30px"),g=async m=>{if(r(m.target.value),h.current=oc(m.target.value),m.target.value[m.target.value.length-1]===(s==null?void 0:s.name[m.target.value.length-1])||m.target.value.length<i.length)return;if(m.target.value.length<2){o(null),h.current="30px";return}const y=await cT(m.target.value);m.target.value[m.target.value.length-1]===(y==null?void 0:y.name[m.target.value.length-1])&&y&&o(y)},x=m=>{m.preventDefault()},v=m=>{var y;if(s){if(m.key==="Enter"){if(m.preventDefault(),r(s.name),(y=d.current)==null||y.blur(),h.current=oc(s.name),n!=null&&n.firstRender){n.setFirstRender(!1),setTimeout(()=>{t==null||t.setCityContextObject(s)},vm);return}t==null||t.setCityContextObject(s)}(m.key==="Tab"||m.key==="ArrowUp"||m.key==="ArrowDown")&&(m.preventDefault(),r(s.name),h.current=oc(s.name))}},p=()=>{s!=null&&s.name&&r(s==null?void 0:s.name),n!=null&&n.firstRender&&f(!1)},c=()=>{n!=null&&n.firstRender&&f(!0)};return re.useEffect(()=>{const m=setTimeout(()=>{/^\s*$/.test(i)||l(i)},1500);return()=>clearTimeout(m)},[i]),re.useEffect(()=>{if(s&&(s==null?void 0:s.name.toLowerCase())===a.toLowerCase()){if(n!=null&&n.firstRender){n.setFirstRender(!1),setTimeout(()=>{t==null||t.setCityContextObject(s)},vm);return}t==null||t.setCityContextObject(s)}},[a]),me.jsx("div",{className:"w-full h-20",children:me.jsxs("form",{className:" w-full h-full relative inline-block from-neutral-900",action:"none",placeholder:"Test",onSubmit:m=>{x(m)},children:[me.jsx("input",{ref:d,value:i,onChange:m=>{g(m)},onKeyDown:m=>{v(m)},onBlur:()=>{p()},onFocus:()=>{c()},className:` text-transition overflow-ellipsis bg-transparent text-white w-full outline-none hover:text-gray-300 focus:text-white transition-[opacity] ease-in-out duration-300 ${n!=null&&n.firstRender&&!u&&i===""?"[caret-color:transparent]":"[caret-color:white]"} top-0`,style:{fontSize:h.current,lineHeight:"2.25rem"}}),n!=null&&n.firstRender&&!u&&i===""?me.jsx("span",{className:"absolute top-0 left-0 z-10 select-none h-[45%] w-[1px] bg-white animate-blink"}):"",me.jsxs("div",{className:"absolute top-0 left-0 z-10 select-none pointer-events-none w-full overflow-ellipsis whitespace-nowrap inline-flex",children:[me.jsx("span",{className:"text-transition inline opacity-0 whitespace-pre-wrap ",style:{fontSize:h.current,lineHeight:"2.25rem"},children:`${i}`}),me.jsx("span",{className:" text-transition inline text-gray-300  whitespace-pre w-full truncate flex-1 top-0 relative ",style:{fontSize:h.current,lineHeight:"2.25rem"},children:(s==null?void 0:s.name)==null?"":(s==null?void 0:s.name.slice(0,i.length).toLowerCase())===i.toLowerCase()?s.name.slice(i.length):""})]}),me.jsx("div",{className:`text-gray-200 text-lg ${e==null?void 0:e.transition}-animation`,children:((_=t==null?void 0:t.city)==null?void 0:_.country)??""})]})})},pT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},re.createElement("path",{d:"M23.9922 38.4651C24.6394 38.4651 25.1717 38.957 25.2358 39.5873L25.2422 39.7151V42.7527C25.2422 43.443 24.6826 44.0027 23.9922 44.0027C23.345 44.0027 22.8127 43.5108 22.7487 42.8805L22.7422 42.7527V39.7151C22.7422 39.0248 23.3019 38.4651 23.9922 38.4651ZM35.8947 34.0978L35.9962 34.1889L38.1441 36.3368C38.6322 36.8249 38.6322 37.6164 38.1441 38.1046C37.6884 38.5602 36.9686 38.5905 36.4778 38.1957L36.3763 38.1046L34.2284 35.9567C33.7403 35.4685 33.7403 34.6771 34.2284 34.1889C34.684 33.7333 35.4039 33.7029 35.8947 34.0978ZM13.755 34.1889C14.2106 34.6445 14.241 35.3644 13.8461 35.8552L13.755 35.9567L11.6071 38.1046C11.119 38.5927 10.3275 38.5927 9.83937 38.1046C9.38376 37.6489 9.35339 36.9291 9.74825 36.4383L9.83937 36.3368L11.9872 34.1889C12.4754 33.7008 13.2668 33.7008 13.755 34.1889ZM23.9999 13.0805C30.0306 13.0805 34.9194 17.9693 34.9194 24C34.9194 30.0306 30.0306 34.9194 23.9999 34.9194C17.9693 34.9194 13.0805 30.0306 13.0805 24C13.0805 17.9693 17.9693 13.0805 23.9999 13.0805ZM23.9999 15.5805C19.35 15.5805 15.5805 19.3501 15.5805 24C15.5805 28.6499 19.35 32.4194 23.9999 32.4194C28.6499 32.4194 32.4194 28.6499 32.4194 24C32.4194 19.3501 28.6499 15.5805 23.9999 15.5805ZM42.7308 22.787C43.4212 22.787 43.9808 23.3467 43.9808 24.037C43.9808 24.6842 43.489 25.2166 42.8586 25.2806L42.7308 25.287H39.6933C39.0029 25.287 38.4433 24.7274 38.4433 24.037C38.4433 23.3898 38.9352 22.8575 39.5655 22.7935L39.6933 22.787H42.7308ZM8.30657 22.7287C8.99692 22.7287 9.55657 23.2884 9.55657 23.9787C9.55657 24.6259 9.06469 25.1582 8.43437 25.2223L8.30657 25.2287H5.26904C4.57869 25.2287 4.01904 24.6691 4.01904 23.9787C4.01904 23.3315 4.51092 22.7992 5.14124 22.7352L5.26904 22.7287H8.30657ZM11.5056 9.8043L11.6071 9.89542L13.755 12.0433C14.2432 12.5314 14.2432 13.3229 13.755 13.811C13.2994 14.2667 12.5796 14.297 12.0887 13.9022L11.9872 13.811L9.83937 11.6632C9.35122 11.175 9.35122 10.3836 9.83937 9.89542C10.295 9.43981 11.0148 9.40943 11.5056 9.8043ZM38.1441 9.89542C38.5997 10.351 38.63 11.0709 38.2352 11.5617L38.1441 11.6632L35.9962 13.811C35.508 14.2992 34.7166 14.2992 34.2284 13.811C33.7728 13.3554 33.7425 12.6356 34.1373 12.1448L34.2284 12.0433L36.3763 9.89542C36.8644 9.40727 37.6559 9.40727 38.1441 9.89542ZM24.0004 3.99731C24.6476 3.99731 25.18 4.48919 25.244 5.11951L25.2504 5.24731V8.28484C25.2504 8.97519 24.6908 9.53484 24.0004 9.53484C23.3532 9.53484 22.8209 9.04296 22.7569 8.41264L22.7504 8.28484V5.24731C22.7504 4.55696 23.3101 3.99731 24.0004 3.99731Z",fill:"#212121"})),mT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_partly_cloudy_day_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_partly_cloudy_day_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M25.9946681,15.9979653 C32.3317303,15.9979653 35.9266378,20.192546 36.4494667,25.258218 L36.6093992,25.2582128 C40.6875585,25.2582128 43.9935599,28.5556605 43.9935599,32.6232684 C43.9935599,36.6908763 40.6875585,39.9883241 36.6093992,39.9883241 L15.379937,39.9883241 C11.3017776,39.9883241 7.99577625,36.6908763 7.99577625,32.6232684 C7.99577625,28.5556605 11.3017776,25.2582128 15.379982,25.2582128 L15.5398695,25.258218 C16.0657398,20.1592507 19.6576059,15.9979653 25.9946681,15.9979653 Z M25.9946681,18.4931447 C21.7336129,18.4931447 18.0196328,21.9410973 18.0196328,26.7037158 C18.0196328,27.4583441 17.3635001,28.0504937 16.6121978,28.0504691 L15.1916137,28.0504227 C12.5975432,28.0504227 10.4946336,30.164248 10.4946336,32.7717837 C10.4946336,35.3793193 12.5975432,37.4931447 15.1916137,37.4931447 L36.7977225,37.4931447 C39.391793,37.4931447 41.4947026,35.3793193 41.4947026,32.7717837 C41.4947026,30.164248 39.391793,28.0504227 36.7977683,28.0504227 L35.3771384,28.0504691 C34.625836,28.0504937 33.9697034,27.4583441 33.9697034,26.7037158 C33.9697034,21.8800028 30.2557233,18.4931447 25.9946681,18.4931447 Z M8.70422467,24.2917267 C8.9506205,24.8865788 8.70119556,25.5631004 8.1462357,25.8619008 L8.03122631,25.9164884 L5.71974598,26.8782395 C5.08523704,27.1410617 4.35780641,26.8397501 4.0949842,26.2052411 C3.84858838,25.610389 4.09801332,24.9338674 4.65297318,24.635067 L4.76798257,24.5804794 L7.0794629,23.6187283 C7.71397184,23.3559061 8.44140247,23.6572177 8.70422467,24.2917267 Z M21.704105,14.6503748 L21.6431187,14.6699626 C20.7184262,14.9718972 19.8590163,15.3719694 19.0721845,15.8601147 C17.7639888,15.3066324 16.2427216,15.2576631 14.8261683,15.8444187 C12.0198231,17.0068449 10.6871635,20.2241699 11.8495897,23.030515 C11.9630937,23.3045377 12.0961897,23.5645098 12.2465822,23.8094804 C11.4878406,24.0806062 10.7743364,24.4478596 10.1204215,24.896434 C9.94374308,24.5936272 9.78573195,24.2752892 9.64788279,23.9424919 C7.98178564,19.9201776 9.89187707,15.3088089 13.9141914,13.6427118 C16.5986709,12.530764 19.545526,13.0117164 21.704105,14.6503748 Z M5.57601758,14.8302505 L5.70300306,14.8760225 L8.02181542,15.8648663 C8.65161103,16.1309846 8.95369294,16.8602748 8.69653424,17.4937816 C8.45651945,18.0850546 7.81417343,18.3839134 7.21754687,18.2047693 L7.09056139,18.1589973 L4.77174903,17.1701536 C4.14195341,16.9040353 3.83987151,16.1747451 4.09703021,15.5412383 C4.337045,14.9499652 4.97939102,14.6511064 5.57601758,14.8302505 Z M12.9443806,8.65660546 L12.9992519,8.77221241 L13.9597026,11.0781337 C14.2238904,11.7159395 13.9210132,12.4471497 13.2832075,12.7113374 C12.6852647,12.9590135 12.005228,12.7082926 11.7048751,12.1504493 L11.6500038,12.0348423 L10.6895531,9.72892099 C10.4253653,9.09111527 10.7282425,8.35990507 11.3660482,8.09571729 C11.9639911,7.84804124 12.6440277,8.09876214 12.9443806,8.65660546 Z M21.9927179,8.0965106 C22.5944431,8.34575332 22.901252,9.00622556 22.7223674,9.61735025 L22.6765314,9.74738237 L21.685189,12.023073 C21.4181432,12.6677785 20.6790228,12.9739322 20.0343172,12.7068865 C19.4325921,12.4576437 19.1257831,11.7971715 19.3046677,11.1860468 L19.3505037,11.0560147 L20.3418462,8.78032408 C20.6088919,8.13561855 21.3480124,7.82946483 21.9927179,8.0965106 Z",id:"\\uD83C\\uDFA8-Color"})))),gT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_partly_cloudy_day_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_partly_cloudy_day_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M25.9946681,15.9979653 C32.3317303,15.9979653 35.9266378,20.192546 36.4494667,25.258218 L36.6093992,25.2582128 C40.6875585,25.2582128 43.9935599,28.5556605 43.9935599,32.6232684 C43.9935599,36.6908763 40.6875585,39.9883241 36.6093992,39.9883241 L15.379937,39.9883241 C11.3017776,39.9883241 7.99577625,36.6908763 7.99577625,32.6232684 C7.99577625,28.5556605 11.3017776,25.2582128 15.379982,25.2582128 L15.5398695,25.258218 C16.0657398,20.1592507 19.6576059,15.9979653 25.9946681,15.9979653 Z M25.9946681,18.4931447 C21.7336129,18.4931447 18.0196328,21.9410973 18.0196328,26.7037158 C18.0196328,27.4583441 17.3635001,28.0504937 16.6121978,28.0504691 L15.1916137,28.0504227 C12.5975432,28.0504227 10.4946336,30.164248 10.4946336,32.7717837 C10.4946336,35.3793193 12.5975432,37.4931447 15.1916137,37.4931447 L36.7977225,37.4931447 C39.391793,37.4931447 41.4947026,35.3793193 41.4947026,32.7717837 C41.4947026,30.164248 39.391793,28.0504227 36.7977683,28.0504227 L35.3771384,28.0504691 C34.625836,28.0504937 33.9697034,27.4583441 33.9697034,26.7037158 C33.9697034,21.8800028 30.2557233,18.4931447 25.9946681,18.4931447 Z M8.70422467,24.2917267 C8.9506205,24.8865788 8.70119556,25.5631004 8.1462357,25.8619008 L8.03122631,25.9164884 L5.71974598,26.8782395 C5.08523704,27.1410617 4.35780641,26.8397501 4.0949842,26.2052411 C3.84858838,25.610389 4.09801332,24.9338674 4.65297318,24.635067 L4.76798257,24.5804794 L7.0794629,23.6187283 C7.71397184,23.3559061 8.44140247,23.6572177 8.70422467,24.2917267 Z M21.704105,14.6503748 L21.6431187,14.6699626 C20.7184262,14.9718972 19.8590163,15.3719694 19.0721845,15.8601147 C17.7639888,15.3066324 16.2427216,15.2576631 14.8261683,15.8444187 C12.0198231,17.0068449 10.6871635,20.2241699 11.8495897,23.030515 C11.9630937,23.3045377 12.0961897,23.5645098 12.2465822,23.8094804 C11.4878406,24.0806062 10.7743364,24.4478596 10.1204215,24.896434 C9.94374308,24.5936272 9.78573195,24.2752892 9.64788279,23.9424919 C7.98178564,19.9201776 9.89187707,15.3088089 13.9141914,13.6427118 C16.5986709,12.530764 19.545526,13.0117164 21.704105,14.6503748 Z M5.57601758,14.8302505 L5.70300306,14.8760225 L8.02181542,15.8648663 C8.65161103,16.1309846 8.95369294,16.8602748 8.69653424,17.4937816 C8.45651945,18.0850546 7.81417343,18.3839134 7.21754687,18.2047693 L7.09056139,18.1589973 L4.77174903,17.1701536 C4.14195341,16.9040353 3.83987151,16.1747451 4.09703021,15.5412383 C4.337045,14.9499652 4.97939102,14.6511064 5.57601758,14.8302505 Z M12.9443806,8.65660546 L12.9992519,8.77221241 L13.9597026,11.0781337 C14.2238904,11.7159395 13.9210132,12.4471497 13.2832075,12.7113374 C12.6852647,12.9590135 12.005228,12.7082926 11.7048751,12.1504493 L11.6500038,12.0348423 L10.6895531,9.72892099 C10.4253653,9.09111527 10.7282425,8.35990507 11.3660482,8.09571729 C11.9639911,7.84804124 12.6440277,8.09876214 12.9443806,8.65660546 Z M21.9927179,8.0965106 C22.5944431,8.34575332 22.901252,9.00622556 22.7223674,9.61735025 L22.6765314,9.74738237 L21.685189,12.023073 C21.4181432,12.6677785 20.6790228,12.9739322 20.0343172,12.7068865 C19.4325921,12.4576437 19.1257831,11.7971715 19.3046677,11.1860468 L19.3505037,11.0560147 L20.3418462,8.78032408 C20.6088919,8.13561855 21.3480124,7.82946483 21.9927179,8.0965106 Z",id:"\\uD83C\\uDFA8-Color"})))),_T=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_cloudy_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_cloudy_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M26.0033786,14.0178101 C32.3404408,14.0178101 35.9353483,18.2123909 36.4581772,23.2780629 L36.6181097,23.2780577 C40.6962691,23.2780577 44.0022704,26.5755054 44.0022704,30.6431133 C44.0022704,34.7107212 40.6962691,38.0081689 36.6181097,38.0081689 L15.3886475,38.0081689 C11.3104881,38.0081689 8.00448675,34.7107212 8.00448675,30.6431133 C8.00448675,26.6568576 11.1795705,23.4102636 15.1449472,23.2819944 L15.54858,23.2780629 C16.0744503,18.1790956 19.6663164,14.0178101 26.0033786,14.0178101 Z M26.0033786,16.5129895 C21.7423234,16.5129895 18.0283433,19.9609421 18.0283433,24.7235607 C18.0283433,25.4781889 17.3722106,26.0703385 16.6209083,26.070314 L15.2003242,26.0702676 C12.6062537,26.0702676 10.5033441,28.1840929 10.5033441,30.7916285 C10.5033441,33.3991642 12.6062537,35.5129895 15.2003242,35.5129895 L36.806433,35.5129895 C39.4005035,35.5129895 41.5034131,33.3991642 41.5034131,30.7916285 C41.5034131,28.1840929 39.4005035,26.0702676 36.8064788,26.0702676 L35.3858489,26.070314 C34.6345465,26.0703385 33.9784139,25.4781889 33.9784139,24.7235607 C33.9784139,19.8998476 30.2644338,16.5129895 26.0033786,16.5129895 Z M20,8 C23.2250563,8 26.0834613,9.62184351 27.7868969,12.1043901 C27.2088916,12.0352533 26.612926,12 26,12 C25.4351245,12 24.8847552,12.0297164 24.3498837,12.0877842 C23.168084,11.0693174 21.6449518,10.4615385 20,10.4615385 C16.7157588,10.4615385 13.9171204,12.8842925 13.3565145,16.1575301 L13.0430445,17.9878031 C12.9608062,18.4679717 12.5445231,18.8190077 12.0573629,18.8189915 L10.1104956,18.8189268 C8.04742309,18.8189268 6.375,20.5297801 6.375,22.6402326 C6.375,23.7460711 6.8341757,24.7421984 7.56812221,25.4399716 C7.13740338,26.0840212 6.78496545,26.786208 6.52401286,27.5317987 C4.98778441,26.3317632 4,24.4607235 4,22.3589744 C4,18.7337206 6.93884882,15.7948718 10.5641426,15.7948718 L10.7062735,15.7948764 C11.4846533,11.3522177 15.3634074,8 20,8 Z",id:"\\uD83C\\uDFA8-Color"})))),vT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_fog_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_fog_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M15.2467151,38 L32.7532849,38 C33.4418266,38 34,38.55867 34,39.2478243 C34,39.8939065 33.509418,40.4253051 32.8807543,40.4892062 L32.7532849,40.4956486 L15.2467151,40.4956486 C14.5581734,40.4956486 14,39.9369786 14,39.2478243 C14,38.6017421 14.490582,38.0703435 15.1192457,38.0064424 L15.2467151,38 Z M9.24782429,33 L38.7521757,33 C39.44133,33 40,33.55867 40,34.2478243 C40,34.8939065 39.5089815,35.4253051 38.8797585,35.4892062 L38.7521757,35.4956486 L9.24782429,35.4956486 C8.55866997,35.4956486 8,34.9369786 8,34.2478243 C8,33.6017421 8.49101852,33.0703435 9.12024151,33.0064424 L9.24782429,33 Z M23.9988918,7 C30.335954,7 33.9308615,11.1945808 34.4536905,16.2602528 L34.6136229,16.2602476 C38.6917823,16.2602476 41.9977837,19.5576953 41.9977837,23.6253032 C41.9977837,27.6929111 38.6917823,30.9903588 34.6136229,30.9903588 L13.3841608,30.9903588 C9.30600138,30.9903588 6,27.6929111 6,23.6253032 C6,19.5576953 9.30600138,16.2602476 13.3842058,16.2602476 L13.5440932,16.2602528 C14.0699636,11.1612855 17.6618297,7 23.9988918,7 Z M23.9988918,9.4951794 C19.7378367,9.4951794 16.0238565,12.943132 16.0238565,17.7057506 C16.0238565,18.4603788 15.3677239,19.0525284 14.6164216,19.0525039 L13.1958375,19.0524575 C10.6017669,19.0524575 8.4988573,21.1662828 8.4988573,23.7738184 C8.4988573,26.3813541 10.6017669,28.4951794 13.1958375,28.4951794 L34.8019462,28.4951794 C37.3960167,28.4951794 39.4989264,26.3813541 39.4989264,23.7738184 C39.4989264,21.1662828 37.3960167,19.0524575 34.801992,19.0524575 L33.3813621,19.0525039 C32.6300598,19.0525284 31.9739272,18.4603788 31.9739272,17.7057506 C31.9739272,12.8820375 28.259947,9.4951794 23.9988918,9.4951794 Z",id:"\\uD83C\\uDFA8-Color"})))),xT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},re.createElement("path",{d:"M23.9989 6C30.336 6 33.9309 10.1946 34.4537 15.2603L34.6136 15.2602C38.6918 15.2602 41.9978 18.5577 41.9978 22.6253C41.9978 26.6929 38.6918 29.9904 34.6136 29.9904L32.8907 29.9912L32.8874 30H32.3013L30.3297 33.3798C29.9819 33.9761 29.2165 34.1776 28.6202 33.8297C28.0238 33.4819 27.8224 32.7165 28.1703 32.1201L29.4129 29.99L25.1543 29.9912L25.1506 30H24.3013L22.3297 33.3798C21.9819 33.9761 21.2165 34.1776 20.6202 33.8297C20.0238 33.4819 19.8224 32.7165 20.1703 32.1201L21.4128 29.9901L17.4179 29.9912L17.4145 30H16.3015L14.3299 33.3798C13.9821 33.9761 13.2167 34.1775 12.6204 33.8297C12.024 33.4818 11.8226 32.7164 12.1705 32.1201L13.4128 29.9903L13.3842 29.9904C9.306 29.9904 6 26.6929 6 22.6253C6 18.5577 9.306 15.2602 13.3842 15.2602L13.5441 15.2603C14.07 10.1613 17.6618 6 23.9989 6ZM23.9989 8.49518C19.7378 8.49518 16.0239 11.9431 16.0239 16.7058C16.0239 17.4604 15.3677 18.0525 14.6164 18.0525L13.1958 18.0525C10.6018 18.0525 8.49886 20.1663 8.49886 22.7738C8.49886 25.3814 10.6018 27.4952 13.1958 27.4952H34.8019C37.396 27.4952 39.4989 25.3814 39.4989 22.7738C39.4989 20.1663 37.396 18.0525 34.802 18.0525L33.3814 18.0525C32.6301 18.0525 31.9739 17.4604 31.9739 16.7058C31.9739 11.882 28.2599 8.49518 23.9989 8.49518Z",fill:"#212121"}),re.createElement("path",{d:"M17.6299 34.6703C18.2262 35.0181 18.4276 35.7835 18.0797 36.3798L16.3297 39.3798C15.9819 39.9762 15.2165 40.1776 14.6202 39.8297C14.0239 39.4819 13.8224 38.7165 14.1703 38.1202L15.9203 35.1202C16.2681 34.5238 17.0335 34.3224 17.6299 34.6703Z",fill:"#212121"}),re.createElement("path",{d:"M26.0797 36.3798C26.4276 35.7835 26.2262 35.0181 25.6299 34.6703C25.0335 34.3224 24.2681 34.5238 23.9203 35.1202L22.1703 38.1202C21.8224 38.7165 22.0239 39.4819 22.6202 39.8297C23.2165 40.1776 23.9819 39.9762 24.3297 39.3798L26.0797 36.3798Z",fill:"#212121"})),yT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_rain_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_rain_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M23.9988918,7 C30.335954,7 33.9308615,11.1945808 34.4536905,16.2602528 L34.6136229,16.2602476 C38.6917823,16.2602476 41.9977837,19.5576953 41.9977837,23.6253032 C41.9977837,27.6929111 38.6917823,30.9903588 34.6136229,30.9903588 L32.8907089,30.9912055 C32.8788468,31.022647 32.8658597,31.0538619 32.8517339,31.0847985 L32.7854505,31.2133378 L29.2854505,37.2755156 C28.871237,37.9929546 27.9538514,38.2387673 27.2364124,37.8245537 C26.5611758,37.4347057 26.3037118,36.5991412 26.621091,35.904055 L26.6873743,35.7755156 L29.45,30.99 L25.1542965,30.9912055 L25.1153215,31.0847985 L25.1153215,31.0847985 L25.0490381,31.2133378 L21.5490381,37.2755156 C21.1348245,37.9929546 20.2174389,38.2387673 19.5,37.8245537 C18.8247634,37.4347057 18.5672994,36.5991412 18.8846785,35.904055 L18.9509619,35.7755156 L21.713,30.99 L17.4178841,30.9912055 C17.4060219,31.022647 17.3930348,31.0538619 17.378909,31.0847985 L17.3126257,31.2133378 L13.8126257,37.2755156 C13.3984121,37.9929546 12.4810265,38.2387673 11.7635876,37.8245537 C11.0883509,37.4347057 10.830887,36.5991412 11.1482661,35.904055 L11.2145495,35.7755156 L13.977,30.99 L13.3841608,30.9903588 C9.30600138,30.9903588 6,27.6929111 6,23.6253032 C6,19.5576953 9.30600138,16.2602476 13.3842058,16.2602476 L13.5440932,16.2602528 C14.0699636,11.1612855 17.6618297,7 23.9988918,7 Z M23.9988918,9.4951794 C19.7378367,9.4951794 16.0238565,12.943132 16.0238565,17.7057506 C16.0238565,18.4603788 15.3677239,19.0525284 14.6164216,19.0525039 L13.1958375,19.0524575 C10.6017669,19.0524575 8.4988573,21.1662828 8.4988573,23.7738184 C8.4988573,26.3813541 10.6017669,28.4951794 13.1958375,28.4951794 L34.8019462,28.4951794 C37.3960167,28.4951794 39.4989264,26.3813541 39.4989264,23.7738184 C39.4989264,21.1662828 37.3960167,19.0524575 34.801992,19.0524575 L33.3813621,19.0525039 C32.6300598,19.0525284 31.9739272,18.4603788 31.9739272,17.7057506 C31.9739272,12.8820375 28.259947,9.4951794 23.9988918,9.4951794 Z",id:"\\uD83C\\uDFA8-Color"})))),ST=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_snow_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_snow_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M19.5,36 C20.3284271,36 21,36.6715729 21,37.5 C21,38.3284271 20.3284271,39 19.5,39 C18.6715729,39 18,38.3284271 18,37.5 C18,36.6715729 18.6715729,36 19.5,36 Z M28.5,36 C29.3284271,36 30,36.6715729 30,37.5 C30,38.3284271 29.3284271,39 28.5,39 C27.6715729,39 27,38.3284271 27,37.5 C27,36.6715729 27.6715729,36 28.5,36 Z M15,34 C15.8284271,34 16.5,34.6715729 16.5,35.5 C16.5,36.3284271 15.8284271,37 15,37 C14.1715729,37 13.5,36.3284271 13.5,35.5 C13.5,34.6715729 14.1715729,34 15,34 Z M24,34 C24.8284271,34 25.5,34.6715729 25.5,35.5 C25.5,36.3284271 24.8284271,37 24,37 C23.1715729,37 22.5,36.3284271 22.5,35.5 C22.5,34.6715729 23.1715729,34 24,34 Z M33,34 C33.8284271,34 34.5,34.6715729 34.5,35.5 C34.5,36.3284271 33.8284271,37 33,37 C32.1715729,37 31.5,36.3284271 31.5,35.5 C31.5,34.6715729 32.1715729,34 33,34 Z M24.0011082,8 C30.3381703,8 33.9330779,12.1945808 34.4559068,17.2602528 L34.6158392,17.2602476 C38.6939986,17.2602476 42,20.5576953 42,24.6253032 C42,28.6929111 38.6939986,31.9903588 34.6158392,31.9903588 L13.3863771,31.9903588 C9.3082177,31.9903588 6.00221632,28.6929111 6.00221632,24.6253032 C6.00221632,20.5576953 9.3082177,17.2602476 13.3864221,17.2602476 L13.5463095,17.2602528 C14.0721799,12.1612855 17.664046,8 24.0011082,8 Z M24.0011082,10.4951794 C19.740053,10.4951794 16.0260728,13.943132 16.0260728,18.7057506 C16.0260728,19.4603788 15.3699402,20.0525284 14.6186379,20.0525039 L13.1980538,20.0524575 C10.6039833,20.0524575 8.50107362,22.1662828 8.50107362,24.7738184 C8.50107362,27.3813541 10.6039833,29.4951794 13.1980538,29.4951794 L34.8041625,29.4951794 C37.3982331,29.4951794 39.5011427,27.3813541 39.5011427,24.7738184 C39.5011427,22.1662828 37.3982331,20.0524575 34.8042083,20.0524575 L33.3835784,20.0525039 C32.6322761,20.0525284 31.9761435,19.4603788 31.9761435,18.7057506 C31.9761435,13.8820375 28.2621633,10.4951794 24.0011082,10.4951794 Z",id:"\\uD83C\\uDFA8-Color"})))),ET=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_rain_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_rain_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M23.9988918,7 C30.335954,7 33.9308615,11.1945808 34.4536905,16.2602528 L34.6136229,16.2602476 C38.6917823,16.2602476 41.9977837,19.5576953 41.9977837,23.6253032 C41.9977837,27.6929111 38.6917823,30.9903588 34.6136229,30.9903588 L32.8907089,30.9912055 C32.8788468,31.022647 32.8658597,31.0538619 32.8517339,31.0847985 L32.7854505,31.2133378 L29.2854505,37.2755156 C28.871237,37.9929546 27.9538514,38.2387673 27.2364124,37.8245537 C26.5611758,37.4347057 26.3037118,36.5991412 26.621091,35.904055 L26.6873743,35.7755156 L29.45,30.99 L25.1542965,30.9912055 L25.1153215,31.0847985 L25.1153215,31.0847985 L25.0490381,31.2133378 L21.5490381,37.2755156 C21.1348245,37.9929546 20.2174389,38.2387673 19.5,37.8245537 C18.8247634,37.4347057 18.5672994,36.5991412 18.8846785,35.904055 L18.9509619,35.7755156 L21.713,30.99 L17.4178841,30.9912055 C17.4060219,31.022647 17.3930348,31.0538619 17.378909,31.0847985 L17.3126257,31.2133378 L13.8126257,37.2755156 C13.3984121,37.9929546 12.4810265,38.2387673 11.7635876,37.8245537 C11.0883509,37.4347057 10.830887,36.5991412 11.1482661,35.904055 L11.2145495,35.7755156 L13.977,30.99 L13.3841608,30.9903588 C9.30600138,30.9903588 6,27.6929111 6,23.6253032 C6,19.5576953 9.30600138,16.2602476 13.3842058,16.2602476 L13.5440932,16.2602528 C14.0699636,11.1612855 17.6618297,7 23.9988918,7 Z M23.9988918,9.4951794 C19.7378367,9.4951794 16.0238565,12.943132 16.0238565,17.7057506 C16.0238565,18.4603788 15.3677239,19.0525284 14.6164216,19.0525039 L13.1958375,19.0524575 C10.6017669,19.0524575 8.4988573,21.1662828 8.4988573,23.7738184 C8.4988573,26.3813541 10.6017669,28.4951794 13.1958375,28.4951794 L34.8019462,28.4951794 C37.3960167,28.4951794 39.4989264,26.3813541 39.4989264,23.7738184 C39.4989264,21.1662828 37.3960167,19.0524575 34.801992,19.0524575 L33.3813621,19.0525039 C32.6300598,19.0525284 31.9739272,18.4603788 31.9739272,17.7057506 C31.9739272,12.8820375 28.259947,9.4951794 23.9988918,9.4951794 Z",id:"\\uD83C\\uDFA8-Color"})))),MT=t=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},re.createElement("title",null,"ic_fluent_weather_thunderstorm_48_regular"),re.createElement("desc",null,"Created with Sketch."),re.createElement("g",{id:"\\uD83D\\uDD0D-Product-Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},re.createElement("g",{id:"ic_fluent_weather_thunderstorm_48_regular",fill:"#212121",fillRule:"nonzero"},re.createElement("path",{d:"M21.2820141,31.9498796 L25.7989061,26.4610326 C26.2375773,25.9279671 27.0253256,25.8514454 27.5583911,26.2901167 C28.055919,26.6995432 28.1557464,27.4130546 27.8101895,27.9397718 L27.7293071,28.0496018 L24.8947015,31.4941642 L29.7527854,31.4941642 C30.7624395,31.4941642 31.3388164,32.6182265 30.7975632,33.4311483 L30.724036,33.5310392 L24.2386064,41.5360942 C23.8040274,42.0725011 23.0168878,42.1550489 22.4804808,41.7204699 C21.9798344,41.3148628 21.8745497,40.6021362 22.2160657,40.07279 L22.2961052,39.9623443 L27.1313264,33.9941642 L22.2472146,33.9941642 C21.2332753,33.9941642 20.658057,32.8617583 21.207435,32.0496233 L21.2820141,31.9498796 L25.7989061,26.4610326 L21.2820141,31.9498796 Z M26.0011082,10.0178101 C32.3381703,10.0178101 35.9330779,14.2123909 36.4559068,19.2780629 L36.6158392,19.2780577 C40.6939986,19.2780577 44,22.5755054 44,26.6431133 C44,30.7107212 40.6939986,34.0081689 36.6158392,34.0081689 L32.4933245,34.0090881 C32.8113163,33.5897118 33,33.0668906 33,32.5 C33,32.1493185 32.927796,31.8155011 32.7974434,31.5126035 L36.8041625,31.5129895 C39.3982331,31.5129895 41.5011427,29.3991642 41.5011427,26.7916285 C41.5011427,24.1840929 39.3982331,22.0702676 36.8042083,22.0702676 L35.3835784,22.070314 C34.6322761,22.0703385 33.9761435,21.4781889 33.9761435,20.7235607 C33.9761435,15.8998476 30.2621633,12.5129895 26.0011082,12.5129895 C21.740053,12.5129895 18.0260728,15.9609421 18.0260728,20.7235607 C18.0260728,21.4781889 17.3699402,22.0703385 16.6186379,22.070314 L15.1980538,22.0702676 C12.6039833,22.0702676 10.5010736,24.1840929 10.5010736,26.7916285 C10.5010736,29.3991642 12.6039833,31.5129895 15.1980538,31.5129895 L19.2025566,31.5126035 C19.072204,31.8155011 19,32.1493185 19,32.5 C19,33.0668906 19.1886837,33.5897118 19.5066755,34.0090881 L15.3863771,34.0081689 C11.3082177,34.0081689 8.00221632,30.7107212 8.00221632,26.6431133 C8.00221632,22.6568576 11.1773,19.4102636 15.1426767,19.2819944 L15.5463095,19.2780629 C16.0721799,14.1790956 19.664046,10.0178101 26.0011082,10.0178101 Z M19.9977296,4 C23.2227859,4 26.0811908,5.62184351 27.7846265,8.10439007 C27.2066212,8.03525334 26.6106555,8 25.9977296,8 C25.4328541,8 24.8824848,8.02971641 24.3476133,8.08778424 C23.1658135,7.06931736 21.6426814,6.46153846 19.9977296,6.46153846 C16.7134884,6.46153846 13.91485,8.88429254 13.3542441,12.1575301 L13.0407741,13.9878031 C12.9585358,14.4679717 12.5422527,14.8190077 12.0550925,14.8189915 L10.1082252,14.8189268 C8.04515265,14.8189268 6.37272957,16.5297801 6.37272957,18.6402326 C6.37272957,19.7460711 6.83190527,20.7421984 7.56585178,21.4399716 C7.13513295,22.0840212 6.78269502,22.786208 6.52174243,23.5317987 C4.98551398,22.3317632 3.99772957,20.4607235 3.99772957,18.3589744 C3.99772957,14.7337206 6.93657839,11.7948718 10.5618721,11.7948718 L10.7040031,11.7948764 C11.4823829,7.35221765 15.361137,4 19.9977296,4 Z",id:"\\uD83C\\uDFA8-Color"})))),Cd=t=>[me.jsx(pT,{className:t}),me.jsx(mT,{className:t}),me.jsx(gT,{className:t}),me.jsx(_T,{className:t}),me.jsx(vT,{className:t}),me.jsx(xT,{className:t}),me.jsx(yT,{className:t}),me.jsx(ST,{className:t}),me.jsx(ET,{className:t}),me.jsx(MT,{className:t}),me.jsx("div",{})],wT="w-full h-20 fill-white mt-[-8px] ml-[10px]",TT=Cd(wT),CT=()=>{var r;const t=br(),e=Pr(),n=Vo(),i=TT[((r=t==null?void 0:t.weatherObject)==null?void 0:r.currentWeather.iconNumber)??10];return me.jsx("div",{className:`${n!=null&&n.firstRender?"w-0":"w-36"} h-min ${e==null?void 0:e.transition}-animation`,children:i})},AT=()=>me.jsxs("div",{className:" flex justify-evenly align-middle w-full h-20",children:[me.jsx(hT,{}),me.jsx(CT,{})]}),RT=()=>{var o,a;const t=Pr(),e=br();if(!((o=e==null?void 0:e.weatherObject)!=null&&o.currentWeather))return;const{temperature:n,weatherName:i,maxTemperature:r,minTemperature:s}=(a=e==null?void 0:e.weatherObject)==null?void 0:a.currentWeather;return me.jsxs("div",{className:`${t==null?void 0:t.transition}-animation min-h-[12rem] h-[16rem] flex flex-col justify-center items-center w-full mt-[-26px] minHeight:mt-0 relative  text-white`,children:[me.jsxs("div",{className:"text-8xl font-thin mt-2",children:[n?`${Math.round(n)}`:"",me.jsx("span",{className:"absolute mt-2 text-5xl w-0 inline-block",children:n?"º":""})]}),me.jsx("div",{className:"text-xl text-gray-200",children:i}),me.jsx("div",{className:"text-lg text-gray-200",children:r&&s?`H:${Math.round(r)}º L:${Math.round(s)}º`:""})]})},LT="w-12 h-full my-2 fill-white mt-[-20px] mb-[-20px] p-0 m-0",bT=Cd(LT),PT=({time:t,temperature:e,icon:n})=>{const i=Pr(),r=t===new Date().getHours()?"Now":String(t).length>1?`${String(t)}:00`:`0${String(t)}:00`,s=Math.round(e);return me.jsxs("div",{className:` p-2 h-32 w-full ${i==null?void 0:i.transition}-animation flex flex-col justify-center items-center text-white`,children:[me.jsx("h6",{className:" text-lg",children:s+"º"}),bT[n],me.jsx("h6",{className:" text-lg",children:r})]})},DT=(t,e,n)=>t?e<=0?[]:t+e*n<0?[]:Array.from({length:e},(i,r)=>t+r*n):[],UT=()=>{var o;const t=br(),e=Vo(),n=(o=t==null?void 0:t.weatherObject)==null?void 0:o.hourlyWeather,i=n==null?void 0:n.time.map(a=>new Date(a*1e3).getHours()),r=i==null?void 0:i.findIndex(a=>a===new Date().getHours()),s=DT(r,4,3);return me.jsx("div",{className:`my-3 w-full h-32 min-h-[8rem] bg-slate-800 rounded-xl backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-opacity-20 transition-all  duration-500 ${e!=null&&e.firstRender?"opacity-0":"opacity-100"} flex justify-center items-center`,children:s.map(a=>{if(!(!a||!(n!=null&&n.weatherCode)))return me.jsx(PT,{icon:n==null?void 0:n.iconNumber[a],temperature:n==null?void 0:n.temperature[a],time:new Date((n==null?void 0:n.time[a])*1e3).getHours()},a)})})},NT="w-14 h-10 fill-white p-0 inline-block ",IT=Cd(NT),FT=({day:t,weatherCode:e,minTemperature:n,maxTemperature:i})=>{const r=Pr(),s=new Date(t*1e3),o=s.getDay()===new Date().getDay()?"Today":s.toLocaleDateString("en-US",{weekday:"long"}),a=Number(String(e)[0]),l=Math.round(n),u=Math.round(i),f=u>9?me.jsx(me.Fragment,{}):me.jsx(me.Fragment,{children:" "});return me.jsxs("div",{className:`w-full h-10 flex items-center justify-between text-white ${r==null?void 0:r.transition}-animation text-lg my-2`,children:[me.jsxs("div",{children:[IT[a],me.jsx("h6",{className:" text-left w-12 ml-2 inline-block",children:o})]}),me.jsxs("h6",{className:"mr-4",children:[me.jsx("span",{className:" text-gray-200 ",children:`${l}º`})," |  ",`${u}º`,f]})]})},OT=()=>{var i,r;const t=br(),e=Vo(),n=(i=t==null?void 0:t.weatherObject)==null?void 0:i.forecast;return me.jsx("div",{className:`h-[16rem] min-h-[9.5rem] my-3 w-full px-2 bg-slate-800 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-lg bg-opacity-20 transition-all  duration-500 ${e!=null&&e.firstRender?"opacity-0":"opacity-100"} flex-col justify-center items-center overflow-auto minHeight:hidden [scrollbar-width:none]`,children:(r=t==null?void 0:t.weatherObject)==null?void 0:r.forecast.time.map((s,o)=>{if(!(!n||!s))return me.jsx(FT,{day:n==null?void 0:n.time[o],weatherCode:n==null?void 0:n.weatherCode[o],minTemperature:n.minTemperature[o],maxTemperature:n.maxTemperature[o]},n.time[o])})})},kT=()=>{var n;const t=Pr(),e=br();return me.jsx("div",{className:`text-lg font-normal text-center mt-auto text-white ${t==null?void 0:t.transition}-animation`,children:(n=e==null?void 0:e.weatherObject)==null?void 0:n.currentWeather.randomSentence})};function zT(){return me.jsx(RM,{children:me.jsx(rT,{children:me.jsx(lT,{children:me.jsx(dT,{children:me.jsxs(aT,{children:[me.jsx(AT,{}),me.jsx(RT,{}),me.jsx(kT,{}),me.jsx(UT,{}),me.jsx(OT,{})]})})})})})}Dg(document.getElementById("root")).render(me.jsx(zT,{}));
