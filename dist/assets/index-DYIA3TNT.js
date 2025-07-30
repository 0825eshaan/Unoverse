function SI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F_={exports:{}},rc={},U_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),II=Symbol.for("react.portal"),PI=Symbol.for("react.fragment"),CI=Symbol.for("react.strict_mode"),AI=Symbol.for("react.profiler"),RI=Symbol.for("react.provider"),kI=Symbol.for("react.context"),bI=Symbol.for("react.forward_ref"),NI=Symbol.for("react.suspense"),DI=Symbol.for("react.memo"),VI=Symbol.for("react.lazy"),iy=Symbol.iterator;function LI(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z_=Object.assign,W_={};function bs(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||B_}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $_(){}$_.prototype=bs.prototype;function qf(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||B_}var Kf=qf.prototype=new $_;Kf.constructor=qf;z_(Kf,bs.prototype);Kf.isPureReactComponent=!0;var sy=Array.isArray,H_=Object.prototype.hasOwnProperty,Qf={current:null},G_={key:!0,ref:!0,__self:!0,__source:!0};function q_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H_.call(e,r)&&!G_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sa,type:t,key:s,ref:o,props:i,_owner:Qf.current}}function MI(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function OI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var oy=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OI(""+t.key):e.toString(36)}function Ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case II:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hd(o,0):r,sy(i)?(n="",t!=null&&(n=t.replace(oy,"$&/")+"/"),Ll(i,e,n,"",function(c){return c})):i!=null&&(Xf(i)&&(i=MI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+hd(s,a);o+=Ll(s,e,n,u,i)}else if(u=LI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+hd(s,a++),o+=Ll(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Ml={transition:null},FI={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:Qf};function K_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=bs;te.Fragment=PI;te.Profiler=AI;te.PureComponent=qf;te.StrictMode=CI;te.Suspense=NI;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FI;te.act=K_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=z_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)H_.call(e,u)&&!G_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sa,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:kI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RI,_context:t},t.Consumer=t};te.createElement=q_;te.createFactory=function(t){var e=q_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:bI,render:t}};te.isValidElement=Xf;te.lazy=function(t){return{$$typeof:VI,_payload:{_status:-1,_result:t},_init:jI}};te.memo=function(t,e){return{$$typeof:DI,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};te.unstable_act=K_;te.useCallback=function(t,e){return _t.current.useCallback(t,e)};te.useContext=function(t){return _t.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};te.useEffect=function(t,e){return _t.current.useEffect(t,e)};te.useId=function(){return _t.current.useId()};te.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return _t.current.useMemo(t,e)};te.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};te.useRef=function(t){return _t.current.useRef(t)};te.useState=function(t){return _t.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return _t.current.useTransition()};te.version="18.3.1";U_.exports=te;var N=U_.exports;const xa=xI(N),UI=SI({__proto__:null,default:xa},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=N,zI=Symbol.for("react.element"),WI=Symbol.for("react.fragment"),$I=Object.prototype.hasOwnProperty,HI=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GI={key:!0,ref:!0,__self:!0,__source:!0};function Q_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$I.call(e,r)&&!GI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zI,type:t,key:s,ref:o,props:i,_owner:HI.current}}rc.Fragment=WI;rc.jsx=Q_;rc.jsxs=Q_;F_.exports=rc;var y=F_.exports,hh={},X_={exports:{}},Vt={},Y_={exports:{}},J_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,H){var J=z.length;z.push(H);e:for(;0<J;){var Q=J-1>>>1,se=z[Q];if(0<i(se,H))z[Q]=H,z[J]=se,J=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],J=z.pop();if(J!==H){z[0]=J;e:for(var Q=0,se=z.length,_e=se>>>1;Q<_e;){var Mt=2*(Q+1)-1,Ot=z[Mt],ht=Mt+1,jt=z[ht];if(0>i(Ot,J))ht<se&&0>i(jt,Ot)?(z[Q]=jt,z[ht]=J,Q=ht):(z[Q]=Ot,z[Mt]=J,Q=Mt);else if(ht<se&&0>i(jt,J))z[Q]=jt,z[ht]=J,Q=ht;else break e}}return H}function i(z,H){var J=z.sortIndex-H.sortIndex;return J!==0?J:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,g=!1,E=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=z)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function b(z){if(P=!1,T(z),!E)if(n(u)!==null)E=!0,Te(O);else{var H=n(c);H!==null&&ze(b,H.startTime-z)}}function O(z,H){E=!1,P&&(P=!1,S(v),v=-1),g=!0;var J=p;try{for(T(H),f=n(u);f!==null&&(!(f.expirationTime>H)||z&&!k());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,p=f.priorityLevel;var se=Q(f.expirationTime<=H);H=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(u)&&r(u),T(H)}else r(u);f=n(u)}if(f!==null)var _e=!0;else{var Mt=n(c);Mt!==null&&ze(b,Mt.startTime-H),_e=!1}return _e}finally{f=null,p=J,g=!1}}var M=!1,x=null,v=-1,I=5,C=-1;function k(){return!(t.unstable_now()-C<I)}function D(){if(x!==null){var z=t.unstable_now();C=z;var H=!0;try{H=x(!0,z)}finally{H?A():(M=!1,x=null)}}else M=!1}var A;if(typeof _=="function")A=function(){_(D)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Tt=he.port2;he.port1.onmessage=D,A=function(){Tt.postMessage(null)}}else A=function(){R(D,0)};function Te(z){x=z,M||(M=!0,A())}function ze(z,H){v=R(function(){z(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){E||g||(E=!0,Te(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var J=p;p=H;try{return z()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=p;p=z;try{return H()}finally{p=J}},t.unstable_scheduleCallback=function(z,H,J){var Q=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Q+J:Q):J=Q,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,z={id:d++,callback:H,priorityLevel:z,startTime:J,expirationTime:se,sortIndex:-1},J>Q?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(P?(S(v),v=-1):P=!0,ze(b,J-Q))):(z.sortIndex=se,e(u,z),E||g||(E=!0,Te(O))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var H=p;return function(){var J=p;p=H;try{return z.apply(this,arguments)}finally{p=J}}}})(J_);Y_.exports=J_;var qI=Y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KI=N,Nt=qI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,$o={};function Si(t,e){ds(t,e),ds(t+"Capture",e)}function ds(t,e){for($o[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,QI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ay={},ly={};function XI(t){return fh.call(ly,t)?!0:fh.call(ay,t)?!1:QI.test(t)?ly[t]=!0:(ay[t]=!0,!1)}function YI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JI(t,e,n,r){if(e===null||typeof e>"u"||YI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,Jf);Je[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,Jf);Je[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,Jf);Je[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zf(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JI(e,n,i,r)&&(n=null),r||i===null?XI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=KI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),ew=Symbol.for("react.provider"),tw=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),gh=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),nw=Symbol.for("react.offscreen"),uy=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=uy&&t[uy]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,fd;function mo(t){if(fd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fd=e&&e[1]||""}return`
`+fd+t}var pd=!1;function md(t,e){if(!t||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function ZI(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=md(t.type,!1),t;case 11:return t=md(t.type.render,!1),t;case 1:return t=md(t.type,!0),t;default:return""}}function yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Fi:return"Portal";case ph:return"Profiler";case ep:return"StrictMode";case mh:return"Suspense";case gh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tw:return(t.displayName||"Context")+".Consumer";case ew:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:yh(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return yh(t(e))}catch{}}return null}function eP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tP(t){var e=rw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=tP(t))}function iw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function su(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sw(t,e){e=e.checked,e!=null&&Zf(t,"checked",e,!1)}function _h(t,e){sw(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||su(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(go(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function ow(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nP=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){nP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function uw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function cw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rP=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(rP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=null;function rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,ns=null,rs=null;function py(t){if(t=Ca(t)){if(typeof Ph!="function")throw Error(U(280));var e=t.stateNode;e&&(e=lc(e),Ph(t.stateNode,t.type,e))}}function dw(t){ns?rs?rs.push(t):rs=[t]:ns=t}function hw(){if(ns){var t=ns,e=rs;if(rs=ns=null,py(t),e)for(t=0;t<e.length;t++)py(e[t])}}function fw(t,e){return t(e)}function pw(){}var gd=!1;function mw(t,e,n){if(gd)return t(e,n);gd=!0;try{return fw(t,e,n)}finally{gd=!1,(ns!==null||rs!==null)&&(pw(),hw())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var r=lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ch=!1;if(Fn)try{var io={};Object.defineProperty(io,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Ch=!1}function iP(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Po=!1,ou=null,au=!1,Ah=null,sP={onError:function(t){Po=!0,ou=t}};function oP(t,e,n,r,i,s,o,a,u){Po=!1,ou=null,iP.apply(sP,arguments)}function aP(t,e,n,r,i,s,o,a,u){if(oP.apply(this,arguments),Po){if(Po){var c=ou;Po=!1,ou=null}else throw Error(U(198));au||(au=!0,Ah=c)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function my(t){if(xi(t)!==t)throw Error(U(188))}function lP(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return my(i),t;if(s===r)return my(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function yw(t){return t=lP(t),t!==null?vw(t):null}function vw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vw(t);if(e!==null)return e;t=t.sibling}return null}var _w=Nt.unstable_scheduleCallback,gy=Nt.unstable_cancelCallback,uP=Nt.unstable_shouldYield,cP=Nt.unstable_requestPaint,Ne=Nt.unstable_now,dP=Nt.unstable_getCurrentPriorityLevel,ip=Nt.unstable_ImmediatePriority,ww=Nt.unstable_UserBlockingPriority,lu=Nt.unstable_NormalPriority,hP=Nt.unstable_LowPriority,Tw=Nt.unstable_IdlePriority,ic=null,hn=null;function fP(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:gP,pP=Math.log,mP=Math.LN2;function gP(t){return t>>>=0,t===0?32:31-(pP(t)/mP|0)|0}var hl=64,fl=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=yo(a):(s&=o,s!==0&&(r=yo(s)))}else o=n&~i,o!==0?r=yo(o):s!==0&&(r=yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function yP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=yP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ew(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function _P(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xw,op,Iw,Pw,Cw,kh=!1,pl=[],yr=null,vr=null,_r=null,qo=new Map,Ko=new Map,ar=[],wP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yy(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&op(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TP(t,e,n,r,i){switch(e){case"focusin":return yr=so(yr,t,e,n,r,i),!0;case"dragenter":return vr=so(vr,t,e,n,r,i),!0;case"mouseover":return _r=so(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qo.set(s,so(qo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,so(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function Aw(t){var e=ti(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=gw(n),e!==null){t.blockedOn=e,Cw(t.priority,function(){Iw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ih=r,n.target.dispatchEvent(r),Ih=null}else return e=Ca(n),e!==null&&op(e),t.blockedOn=n,!1;e.shift()}return!0}function vy(t,e,n){Ol(t)&&n.delete(e)}function EP(){kh=!1,yr!==null&&Ol(yr)&&(yr=null),vr!==null&&Ol(vr)&&(vr=null),_r!==null&&Ol(_r)&&(_r=null),qo.forEach(vy),Ko.forEach(vy)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,EP)))}function Qo(t){function e(i){return oo(i,t)}if(0<pl.length){oo(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&oo(yr,t),vr!==null&&oo(vr,t),_r!==null&&oo(_r,t),qo.forEach(e),Ko.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Aw(n),n.blockedOn===null&&ar.shift()}var is=Qn.ReactCurrentBatchConfig,cu=!0;function SP(t,e,n,r){var i=ce,s=is.transition;is.transition=null;try{ce=1,ap(t,e,n,r)}finally{ce=i,is.transition=s}}function xP(t,e,n,r){var i=ce,s=is.transition;is.transition=null;try{ce=4,ap(t,e,n,r)}finally{ce=i,is.transition=s}}function ap(t,e,n,r){if(cu){var i=bh(t,e,n,r);if(i===null)Cd(t,e,r,du,n),yy(t,r);else if(TP(i,t,e,n,r))r.stopPropagation();else if(yy(t,r),e&4&&-1<wP.indexOf(t)){for(;i!==null;){var s=Ca(i);if(s!==null&&xw(s),s=bh(t,e,n,r),s===null&&Cd(t,e,r,du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cd(t,e,r,null,n)}}var du=null;function bh(t,e,n,r){if(du=null,t=rp(r),t=ti(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return du=t,null}function Rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dP()){case ip:return 1;case ww:return 4;case lu:case hP:return 16;case Tw:return 536870912;default:return 16}default:return 16}}var fr=null,lp=null,jl=null;function kw(){if(jl)return jl;var t,e=lp,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return jl=i.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function _y(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:_y,this.isPropagationStopped=_y,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},up=Lt(Ns),Pa=Ie({},Ns,{view:0,detail:0}),IP=Lt(Pa),vd,_d,ao,sc=Ie({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(vd=t.screenX-ao.screenX,_d=t.screenY-ao.screenY):_d=vd=0,ao=t),vd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),wy=Lt(sc),PP=Ie({},sc,{dataTransfer:0}),CP=Lt(PP),AP=Ie({},Pa,{relatedTarget:0}),wd=Lt(AP),RP=Ie({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),kP=Lt(RP),bP=Ie({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NP=Lt(bP),DP=Ie({},Ns,{data:0}),Ty=Lt(DP),VP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MP[t])?!!e[t]:!1}function cp(){return OP}var jP=Ie({},Pa,{key:function(t){if(t.key){var e=VP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cp,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FP=Lt(jP),UP=Ie({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ey=Lt(UP),BP=Ie({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cp}),zP=Lt(BP),WP=Ie({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),$P=Lt(WP),HP=Ie({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GP=Lt(HP),qP=[9,13,27,32],dp=Fn&&"CompositionEvent"in window,Co=null;Fn&&"documentMode"in document&&(Co=document.documentMode);var KP=Fn&&"TextEvent"in window&&!Co,bw=Fn&&(!dp||Co&&8<Co&&11>=Co),Sy=" ",xy=!1;function Nw(t,e){switch(t){case"keyup":return qP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function QP(t,e){switch(t){case"compositionend":return Dw(e);case"keypress":return e.which!==32?null:(xy=!0,Sy);case"textInput":return t=e.data,t===Sy&&xy?null:t;default:return null}}function XP(t,e){if(Bi)return t==="compositionend"||!dp&&Nw(t,e)?(t=kw(),jl=lp=fr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bw&&e.locale!=="ko"?null:e.data;default:return null}}var YP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YP[t.type]:e==="textarea"}function Vw(t,e,n,r){dw(r),e=hu(e,"onChange"),0<e.length&&(n=new up("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,Xo=null;function JP(t){Hw(t,0)}function oc(t){var e=$i(t);if(iw(e))return t}function ZP(t,e){if(t==="change")return e}var Lw=!1;if(Fn){var Td;if(Fn){var Ed="oninput"in document;if(!Ed){var Py=document.createElement("div");Py.setAttribute("oninput","return;"),Ed=typeof Py.oninput=="function"}Td=Ed}else Td=!1;Lw=Td&&(!document.documentMode||9<document.documentMode)}function Cy(){Ao&&(Ao.detachEvent("onpropertychange",Mw),Xo=Ao=null)}function Mw(t){if(t.propertyName==="value"&&oc(Xo)){var e=[];Vw(e,Xo,t,rp(t)),mw(JP,e)}}function eC(t,e,n){t==="focusin"?(Cy(),Ao=e,Xo=n,Ao.attachEvent("onpropertychange",Mw)):t==="focusout"&&Cy()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Xo)}function nC(t,e){if(t==="click")return oc(e)}function rC(t,e){if(t==="input"||t==="change")return oc(e)}function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:iC;function Yo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fh.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Ay(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ry(t,e){var n=Ay(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ay(n)}}function Ow(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ow(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jw(){for(var t=window,e=su();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=su(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sC(t){var e=jw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ow(n.ownerDocument.documentElement,n)){if(r!==null&&hp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ry(n,s);var o=Ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oC=Fn&&"documentMode"in document&&11>=document.documentMode,zi=null,Nh=null,Ro=null,Dh=!1;function ky(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dh||zi==null||zi!==su(r)||(r=zi,"selectionStart"in r&&hp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Yo(Ro,r)||(Ro=r,r=hu(Nh,"onSelect"),0<r.length&&(e=new up("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Sd={},Fw={};Fn&&(Fw=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function ac(t){if(Sd[t])return Sd[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fw)return Sd[t]=e[n];return t}var Uw=ac("animationend"),Bw=ac("animationiteration"),zw=ac("animationstart"),Ww=ac("transitionend"),$w=new Map,by="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){$w.set(t,e),Si(e,[t])}for(var xd=0;xd<by.length;xd++){var Id=by[xd],aC=Id.toLowerCase(),lC=Id[0].toUpperCase()+Id.slice(1);jr(aC,"on"+lC)}jr(Uw,"onAnimationEnd");jr(Bw,"onAnimationIteration");jr(zw,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Ww,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uC=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Ny(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aP(r,e,void 0,t),t.currentTarget=null}function Hw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ny(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ny(i,a,c),s=u}}}if(au)throw t=Ah,au=!1,Ah=null,t}function ye(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var r=t+"__bubble";n.has(r)||(Gw(e,t,2,!1),n.add(r))}function Pd(t,e,n){var r=0;e&&(r|=4),Gw(n,t,r,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[yl]){t[yl]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(uC.has(n)||Pd(n,!1,t),Pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,Pd("selectionchange",!1,e))}}function Gw(t,e,n,r){switch(Rw(e)){case 1:var i=SP;break;case 4:i=xP;break;default:i=ap}n=i.bind(null,e,n,t),i=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mw(function(){var c=s,d=rp(n),f=[];e:{var p=$w.get(t);if(p!==void 0){var g=up,E=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":g=FP;break;case"focusin":E="focus",g=wd;break;case"focusout":E="blur",g=wd;break;case"beforeblur":case"afterblur":g=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=CP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zP;break;case Uw:case Bw:case zw:g=kP;break;case Ww:g=$P;break;case"scroll":g=IP;break;case"wheel":g=GP;break;case"copy":case"cut":case"paste":g=NP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ey}var P=(e&4)!==0,R=!P&&t==="scroll",S=P?p!==null?p+"Capture":null:p;P=[];for(var _=c,T;_!==null;){T=_;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,S!==null&&(b=Go(_,S),b!=null&&P.push(Zo(_,b,T)))),R)break;_=_.return}0<P.length&&(p=new g(p,E,null,n,d),f.push({event:p,listeners:P}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Ih&&(E=n.relatedTarget||n.fromElement)&&(ti(E)||E[Un]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=c,E=E?ti(E):null,E!==null&&(R=xi(E),E!==R||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=c),g!==E)){if(P=wy,b="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Ey,b="onPointerLeave",S="onPointerEnter",_="pointer"),R=g==null?p:$i(g),T=E==null?p:$i(E),p=new P(b,_+"leave",g,n,d),p.target=R,p.relatedTarget=T,b=null,ti(d)===c&&(P=new P(S,_+"enter",E,n,d),P.target=T,P.relatedTarget=R,b=P),R=b,g&&E)t:{for(P=g,S=E,_=0,T=P;T;T=Li(T))_++;for(T=0,b=S;b;b=Li(b))T++;for(;0<_-T;)P=Li(P),_--;for(;0<T-_;)S=Li(S),T--;for(;_--;){if(P===S||S!==null&&P===S.alternate)break t;P=Li(P),S=Li(S)}P=null}else P=null;g!==null&&Dy(f,p,g,P,!1),E!==null&&R!==null&&Dy(f,R,E,P,!0)}}e:{if(p=c?$i(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var O=ZP;else if(Iy(p))if(Lw)O=rC;else{O=tC;var M=eC}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=nC);if(O&&(O=O(t,c))){Vw(f,O,n,d);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&wh(p,"number",p.value)}switch(M=c?$i(c):window,t){case"focusin":(Iy(M)||M.contentEditable==="true")&&(zi=M,Nh=c,Ro=null);break;case"focusout":Ro=Nh=zi=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,ky(f,n,d);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":ky(f,n,d)}var x;if(dp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Bi?Nw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(bw&&n.locale!=="ko"&&(Bi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Bi&&(x=kw()):(fr=d,lp="value"in fr?fr.value:fr.textContent,Bi=!0)),M=hu(c,v),0<M.length&&(v=new Ty(v,t,null,n,d),f.push({event:v,listeners:M}),x?v.data=x:(x=Dw(n),x!==null&&(v.data=x)))),(x=KP?QP(t,n):XP(t,n))&&(c=hu(c,"onBeforeInput"),0<c.length&&(d=new Ty("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=x))}Hw(f,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Go(t,n),s!=null&&r.unshift(Zo(t,s,i)),s=Go(t,e),s!=null&&r.push(Zo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Go(n,s),u!=null&&o.unshift(Zo(n,u,a))):i||(u=Go(n,s),u!=null&&o.push(Zo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function Vy(t){return(typeof t=="string"?t:""+t).replace(cC,`
`).replace(dC,"")}function vl(t,e,n){if(e=Vy(e),Vy(t)!==e&&n)throw Error(U(425))}function fu(){}var Vh=null,Lh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,hC=typeof clearTimeout=="function"?clearTimeout:void 0,Ly=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ly<"u"?function(t){return Ly.resolve(null).then(t).catch(pC)}:Oh;function pC(t){setTimeout(function(){throw t})}function Ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function My(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),dn="__reactFiber$"+Ds,ea="__reactProps$"+Ds,Un="__reactContainer$"+Ds,jh="__reactEvents$"+Ds,mC="__reactListeners$"+Ds,gC="__reactHandles$"+Ds;function ti(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=My(t);t!==null;){if(n=t[dn])return n;t=My(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[dn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function lc(t){return t[ea]||null}var Fh=[],Hi=-1;function Fr(t){return{current:t}}function ve(t){0>Hi||(t.current=Fh[Hi],Fh[Hi]=null,Hi--)}function pe(t,e){Hi++,Fh[Hi]=t.current,t.current=e}var Nr={},ct=Fr(Nr),xt=Fr(!1),fi=Nr;function hs(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function pu(){ve(xt),ve(ct)}function Oy(t,e,n){if(ct.current!==Nr)throw Error(U(168));pe(ct,e),pe(xt,n)}function qw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,eP(t)||"Unknown",i));return Ie({},n,r)}function mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,fi=ct.current,pe(ct,t),pe(xt,xt.current),!0}function jy(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=qw(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,ve(xt),ve(ct),pe(ct,t)):ve(xt),pe(xt,n)}var Pn=null,uc=!1,Rd=!1;function Kw(t){Pn===null?Pn=[t]:Pn.push(t)}function yC(t){uc=!0,Kw(t)}function Ur(){if(!Rd&&Pn!==null){Rd=!0;var t=0,e=ce;try{var n=Pn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,uc=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),_w(ip,Ur),i}finally{ce=e,Rd=!1}}return null}var Gi=[],qi=0,gu=null,yu=0,zt=[],Wt=0,pi=null,An=1,Rn="";function Qr(t,e){Gi[qi++]=yu,Gi[qi++]=gu,gu=t,yu=e}function Qw(t,e,n){zt[Wt++]=An,zt[Wt++]=Rn,zt[Wt++]=pi,pi=t;var r=An;t=Rn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-sn(e)+i|n<<i|r,Rn=s+t}else An=1<<s|n<<i|r,Rn=t}function fp(t){t.return!==null&&(Qr(t,1),Qw(t,1,0))}function pp(t){for(;t===gu;)gu=Gi[--qi],Gi[qi]=null,yu=Gi[--qi],Gi[qi]=null;for(;t===pi;)pi=zt[--Wt],zt[Wt]=null,Rn=zt[--Wt],zt[Wt]=null,An=zt[--Wt],zt[Wt]=null}var bt=null,kt=null,we=!1,tn=null;function Xw(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,kt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:An,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,kt=null,!0):!1;default:return!1}}function Uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(we){var e=kt;if(e){var n=e;if(!Fy(t,e)){if(Uh(t))throw Error(U(418));e=wr(n.nextSibling);var r=bt;e&&Fy(t,e)?Xw(r,n):(t.flags=t.flags&-4097|2,we=!1,bt=t)}}else{if(Uh(t))throw Error(U(418));t.flags=t.flags&-4097|2,we=!1,bt=t}}}function Uy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function _l(t){if(t!==bt)return!1;if(!we)return Uy(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=kt)){if(Uh(t))throw Yw(),Error(U(418));for(;e;)Xw(t,e),e=wr(e.nextSibling)}if(Uy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=bt?wr(t.stateNode.nextSibling):null;return!0}function Yw(){for(var t=kt;t;)t=wr(t.nextSibling)}function fs(){kt=bt=null,we=!1}function mp(t){tn===null?tn=[t]:tn.push(t)}var vC=Qn.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function By(t){var e=t._init;return e(t._payload)}function Jw(t){function e(S,_){if(t){var T=S.deletions;T===null?(S.deletions=[_],S.flags|=16):T.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=xr(S,_),S.index=0,S.sibling=null,S}function s(S,_,T){return S.index=T,t?(T=S.alternate,T!==null?(T=T.index,T<_?(S.flags|=2,_):T):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,_,T,b){return _===null||_.tag!==6?(_=Md(T,S.mode,b),_.return=S,_):(_=i(_,T),_.return=S,_)}function u(S,_,T,b){var O=T.type;return O===Ui?d(S,_,T.props.children,b,T.key):_!==null&&(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ir&&By(O)===_.type)?(b=i(_,T.props),b.ref=lo(S,_,T),b.return=S,b):(b=Gl(T.type,T.key,T.props,null,S.mode,b),b.ref=lo(S,_,T),b.return=S,b)}function c(S,_,T,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Od(T,S.mode,b),_.return=S,_):(_=i(_,T.children||[]),_.return=S,_)}function d(S,_,T,b,O){return _===null||_.tag!==7?(_=ui(T,S.mode,b,O),_.return=S,_):(_=i(_,T),_.return=S,_)}function f(S,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Md(""+_,S.mode,T),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ul:return T=Gl(_.type,_.key,_.props,null,S.mode,T),T.ref=lo(S,null,_),T.return=S,T;case Fi:return _=Od(_,S.mode,T),_.return=S,_;case ir:var b=_._init;return f(S,b(_._payload),T)}if(go(_)||ro(_))return _=ui(_,S.mode,T,null),_.return=S,_;wl(S,_)}return null}function p(S,_,T,b){var O=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return O!==null?null:a(S,_,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ul:return T.key===O?u(S,_,T,b):null;case Fi:return T.key===O?c(S,_,T,b):null;case ir:return O=T._init,p(S,_,O(T._payload),b)}if(go(T)||ro(T))return O!==null?null:d(S,_,T,b,null);wl(S,T)}return null}function g(S,_,T,b,O){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(T)||null,a(_,S,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ul:return S=S.get(b.key===null?T:b.key)||null,u(_,S,b,O);case Fi:return S=S.get(b.key===null?T:b.key)||null,c(_,S,b,O);case ir:var M=b._init;return g(S,_,T,M(b._payload),O)}if(go(b)||ro(b))return S=S.get(T)||null,d(_,S,b,O,null);wl(_,b)}return null}function E(S,_,T,b){for(var O=null,M=null,x=_,v=_=0,I=null;x!==null&&v<T.length;v++){x.index>v?(I=x,x=null):I=x.sibling;var C=p(S,x,T[v],b);if(C===null){x===null&&(x=I);break}t&&x&&C.alternate===null&&e(S,x),_=s(C,_,v),M===null?O=C:M.sibling=C,M=C,x=I}if(v===T.length)return n(S,x),we&&Qr(S,v),O;if(x===null){for(;v<T.length;v++)x=f(S,T[v],b),x!==null&&(_=s(x,_,v),M===null?O=x:M.sibling=x,M=x);return we&&Qr(S,v),O}for(x=r(S,x);v<T.length;v++)I=g(x,S,v,T[v],b),I!==null&&(t&&I.alternate!==null&&x.delete(I.key===null?v:I.key),_=s(I,_,v),M===null?O=I:M.sibling=I,M=I);return t&&x.forEach(function(k){return e(S,k)}),we&&Qr(S,v),O}function P(S,_,T,b){var O=ro(T);if(typeof O!="function")throw Error(U(150));if(T=O.call(T),T==null)throw Error(U(151));for(var M=O=null,x=_,v=_=0,I=null,C=T.next();x!==null&&!C.done;v++,C=T.next()){x.index>v?(I=x,x=null):I=x.sibling;var k=p(S,x,C.value,b);if(k===null){x===null&&(x=I);break}t&&x&&k.alternate===null&&e(S,x),_=s(k,_,v),M===null?O=k:M.sibling=k,M=k,x=I}if(C.done)return n(S,x),we&&Qr(S,v),O;if(x===null){for(;!C.done;v++,C=T.next())C=f(S,C.value,b),C!==null&&(_=s(C,_,v),M===null?O=C:M.sibling=C,M=C);return we&&Qr(S,v),O}for(x=r(S,x);!C.done;v++,C=T.next())C=g(x,S,v,C.value,b),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?v:C.key),_=s(C,_,v),M===null?O=C:M.sibling=C,M=C);return t&&x.forEach(function(D){return e(S,D)}),we&&Qr(S,v),O}function R(S,_,T,b){if(typeof T=="object"&&T!==null&&T.type===Ui&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ul:e:{for(var O=T.key,M=_;M!==null;){if(M.key===O){if(O=T.type,O===Ui){if(M.tag===7){n(S,M.sibling),_=i(M,T.props.children),_.return=S,S=_;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ir&&By(O)===M.type){n(S,M.sibling),_=i(M,T.props),_.ref=lo(S,M,T),_.return=S,S=_;break e}n(S,M);break}else e(S,M);M=M.sibling}T.type===Ui?(_=ui(T.props.children,S.mode,b,T.key),_.return=S,S=_):(b=Gl(T.type,T.key,T.props,null,S.mode,b),b.ref=lo(S,_,T),b.return=S,S=b)}return o(S);case Fi:e:{for(M=T.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(S,_.sibling),_=i(_,T.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=Od(T,S.mode,b),_.return=S,S=_}return o(S);case ir:return M=T._init,R(S,_,M(T._payload),b)}if(go(T))return E(S,_,T,b);if(ro(T))return P(S,_,T,b);wl(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,T),_.return=S,S=_):(n(S,_),_=Md(T,S.mode,b),_.return=S,S=_),o(S)):n(S,_)}return R}var ps=Jw(!0),Zw=Jw(!1),vu=Fr(null),_u=null,Ki=null,gp=null;function yp(){gp=Ki=_u=null}function vp(t){var e=vu.current;ve(vu),t._currentValue=e}function zh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){_u=t,gp=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(_u===null)throw Error(U(308));Ki=t,_u.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var ni=null;function _p(t){ni===null?ni=[t]:ni.push(t)}function eT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_p(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,_p(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}function zy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,P=a;switch(p=e,g=n,P.tag){case 1:if(E=P.payload,typeof E=="function"){f=E.call(g,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=P.payload,p=typeof E=="function"?E.call(g,f,p):E,p==null)break e;f=Ie({},f,p);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=f}}function Wy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Aa={},fn=Fr(Aa),ta=Fr(Aa),na=Fr(Aa);function ri(t){if(t===Aa)throw Error(U(174));return t}function Tp(t,e){switch(pe(na,e),pe(ta,t),pe(fn,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eh(e,t)}ve(fn),pe(fn,e)}function ms(){ve(fn),ve(ta),ve(na)}function nT(t){ri(na.current);var e=ri(fn.current),n=Eh(e,t.type);e!==n&&(pe(ta,t),pe(fn,n))}function Ep(t){ta.current===t&&(ve(fn),ve(ta))}var Ee=Fr(0);function Tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Sp(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var Bl=Qn.ReactCurrentDispatcher,bd=Qn.ReactCurrentBatchConfig,mi=0,xe=null,je=null,$e=null,Eu=!1,ko=!1,ra=0,_C=0;function rt(){throw Error(U(321))}function xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Ip(t,e,n,r,i,s){if(mi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?SC:xC,t=n(r,i),ko){s=0;do{if(ko=!1,ra=0,25<=s)throw Error(U(301));s+=1,$e=je=null,e.updateQueue=null,Bl.current=IC,t=n(r,i)}while(ko)}if(Bl.current=Su,e=je!==null&&je.next!==null,mi=0,$e=je=xe=null,Eu=!1,e)throw Error(U(300));return t}function Pp(){var t=ra!==0;return ra=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?xe.memoizedState=$e=t:$e=$e.next=t,$e}function Qt(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=$e===null?xe.memoizedState:$e.next;if(e!==null)$e=e,je=t;else{if(t===null)throw Error(U(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},$e===null?xe.memoizedState=$e=t:$e=$e.next=t}return $e}function ia(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=d,gi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,ln(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rT(){}function iT(t,e){var n=xe,r=Qt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,Cp(aT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,sa(9,oT.bind(null,n,r,i,e),void 0,null),He===null)throw Error(U(349));mi&30||sT(n,e,i)}return i}function sT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function oT(t,e,n,r){e.value=n,e.getSnapshot=r,lT(e)&&uT(t)}function aT(t,e,n){return n(function(){lT(e)&&uT(t)})}function lT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function uT(t){var e=Bn(t,1);e!==null&&on(e,t,1,-1)}function $y(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=EC.bind(null,xe,t),[e.memoizedState,t]}function sa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cT(){return Qt().memoizedState}function zl(t,e,n,r){var i=cn();xe.flags|=t,i.memoizedState=sa(1|e,n,void 0,r===void 0?null:r)}function cc(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&xp(r,o.deps)){i.memoizedState=sa(e,n,s,r);return}}xe.flags|=t,i.memoizedState=sa(1|e,n,s,r)}function Hy(t,e){return zl(8390656,8,t,e)}function Cp(t,e){return cc(2048,8,t,e)}function dT(t,e){return cc(4,2,t,e)}function hT(t,e){return cc(4,4,t,e)}function fT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pT(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,fT.bind(null,e,t),n)}function Ap(){}function mT(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gT(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yT(t,e,n){return mi&21?(ln(n,e)||(n=Ew(),xe.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function wC(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=bd.transition;bd.transition={};try{t(!1),e()}finally{ce=n,bd.transition=r}}function vT(){return Qt().memoizedState}function TC(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_T(t))wT(e,n);else if(n=eT(t,e,n,r),n!==null){var i=vt();on(n,t,r,i),TT(n,e,r)}}function EC(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_T(t))wT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var u=e.interleaved;u===null?(i.next=i,_p(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=eT(t,e,i,r),n!==null&&(i=vt(),on(n,t,r,i),TT(n,e,r))}}function _T(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function wT(t,e){ko=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}var Su={readContext:Kt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},SC={readContext:Kt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,fT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TC.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:$y,useDebugValue:Ap,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=$y(!1),e=t[0];return t=wC.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=cn();if(we){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),He===null)throw Error(U(349));mi&30||sT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hy(aT.bind(null,r,s,t),[t]),r.flags|=2048,sa(9,oT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=He.identifierPrefix;if(we){var n=Rn,r=An;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_C++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xC={readContext:Kt,useCallback:mT,useContext:Kt,useEffect:Cp,useImperativeHandle:pT,useInsertionEffect:dT,useLayoutEffect:hT,useMemo:gT,useReducer:Nd,useRef:cT,useState:function(){return Nd(ia)},useDebugValue:Ap,useDeferredValue:function(t){var e=Qt();return yT(e,je.memoizedState,t)},useTransition:function(){var t=Nd(ia)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:rT,useSyncExternalStore:iT,useId:vT,unstable_isNewReconciler:!1},IC={readContext:Kt,useCallback:mT,useContext:Kt,useEffect:Cp,useImperativeHandle:pT,useInsertionEffect:dT,useLayoutEffect:hT,useMemo:gT,useReducer:Dd,useRef:cT,useState:function(){return Dd(ia)},useDebugValue:Ap,useDeferredValue:function(t){var e=Qt();return je===null?e.memoizedState=t:yT(e,je.memoizedState,t)},useTransition:function(){var t=Dd(ia)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:rT,useSyncExternalStore:iT,useId:vT,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dc={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Sr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(on(e,t,i,r),Ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Sr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(on(e,t,i,r),Ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Sr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(on(e,t,r,n),Ul(e,t,r))}};function Gy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function ET(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=It(e)?fi:ct.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dc.enqueueReplaceState(e,e.state,null)}function $h(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=It(e)?fi:ct.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dc.enqueueReplaceState(i,i.state,null),wu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",r=e;do n+=ZI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PC=typeof WeakMap=="function"?WeakMap:Map;function ST(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Iu||(Iu=!0,tf=r),Hh(t,e)},n}function xT(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hh(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UC.bind(null,t,e,n),e.then(t,t))}function Qy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var CC=Qn.ReactCurrentOwner,St=!1;function gt(t,e,n,r){e.child=t===null?Zw(e,null,n,r):ps(e,t.child,n,r)}function Yy(t,e,n,r,i){n=n.render;var s=e.ref;return ss(e,i),r=Ip(t,e,n,r,s,i),n=Pp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(we&&n&&fp(e),e.flags|=1,gt(t,e,r,i),e.child)}function Jy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,IT(t,e,s,r,i)):(t=Gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function IT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yo(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Gh(t,e,n,r,i)}function PT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Xi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Xi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Xi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Xi,Rt),Rt|=r;return gt(t,e,i,n),e.child}function CT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gh(t,e,n,r,i){var s=It(n)?fi:ct.current;return s=hs(e,s),ss(e,i),n=Ip(t,e,n,r,s,i),r=Pp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(we&&r&&fp(e),e.flags|=1,gt(t,e,n,i),e.child)}function Zy(t,e,n,r,i){if(It(n)){var s=!0;mu(e)}else s=!1;if(ss(e,i),e.stateNode===null)Wl(t,e),ET(e,n,r),$h(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=It(n)?fi:ct.current,c=hs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&qy(e,o,r,c),sr=!1;var p=e.memoizedState;o.state=p,wu(e,r,o,i),u=e.memoizedState,a!==r||p!==u||xt.current||sr?(typeof d=="function"&&(Wh(e,n,d,r),u=e.memoizedState),(a=sr||Gy(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zt(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Kt(u):(u=It(n)?fi:ct.current,u=hs(e,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&qy(e,o,r,u),sr=!1,p=e.memoizedState,o.state=p,wu(e,r,o,i);var E=e.memoizedState;a!==f||p!==E||xt.current||sr?(typeof g=="function"&&(Wh(e,n,g,r),E=e.memoizedState),(c=sr||Gy(e,n,c,r,p,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return qh(t,e,n,r,s,i)}function qh(t,e,n,r,i,s){CT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jy(e,n,!1),zn(t,e,s);r=e.stateNode,CC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&jy(e,n,!0),e.child}function AT(t){var e=t.stateNode;e.pendingContext?Oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Oy(t,e.context,!1),Tp(t,e.containerInfo)}function ev(t,e,n,r,i){return fs(),mp(i),e.flags|=256,gt(t,e,n,r),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function RT(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ee,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qh(n),e.memoizedState=Kh,t):Rp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return AC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=xr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kh,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rp(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,r){return r!==null&&mp(r),ps(e,t.child,null,n),t=Rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vd(Error(U(422))),Tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pc({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Qh(o),e.memoizedState=Kh,s);if(!(e.mode&1))return Tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Vd(s,r,void 0),Tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),on(r,t,i,-1))}return Lp(),r=Vd(Error(U(421))),Tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=wr(i.nextSibling),bt=e,we=!0,tn=null,t!==null&&(zt[Wt++]=An,zt[Wt++]=Rn,zt[Wt++]=pi,An=t.id,Rn=t.overflow,pi=e),e=Rp(e,r.children),e.flags|=4096,e)}function tv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zh(t.return,e,n)}function Ld(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tv(t,n,e);else if(t.tag===19)tv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ld(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ld(e,!0,n,null,s);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RC(t,e,n){switch(e.tag){case 3:AT(e),fs();break;case 5:nT(e);break;case 1:It(e.type)&&mu(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(vu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?RT(t,e,n):(pe(Ee,Ee.current&1),t=zn(t,e,n),t!==null?t.sibling:null);pe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,PT(t,e,n)}return zn(t,e,n)}var bT,Xh,NT,DT;bT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};NT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(fn.current);var s=null;switch(n){case"input":i=vh(t,i),r=vh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fu)}Sh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};DT=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kC(t,e,n){var r=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return It(e.type)&&pu(),it(e),null;case 3:return r=e.stateNode,ms(),ve(xt),ve(ct),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(sf(tn),tn=null))),Xh(t,e),it(e),null;case 5:Ep(e);var i=ri(na.current);if(n=e.type,t!==null&&e.stateNode!=null)NT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return it(e),null}if(t=ri(fn.current),_l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[ea]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<vo.length;i++)ye(vo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":cy(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":hy(r,s),ye("invalid",r)}Sh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vl(r.textContent,a,t),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":cl(r),dy(r,s,!0);break;case"textarea":cl(r),fy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[ea]=r,bT(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<vo.length;i++)ye(vo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":cy(t,r),i=vh(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ye("invalid",t);break;case"textarea":hy(t,r),i=Th(t,r),ye("invalid",t);break;default:i=r}Sh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?cw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ho(t,u):typeof u=="number"&&Ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Zf(t,s,u,o))}switch(n){case"input":cl(t),dy(t,r,!1);break;case"textarea":cl(t),fy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)DT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ri(na.current),ri(fn.current),_l(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:vl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return it(e),null;case 13:if(ve(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&kt!==null&&e.mode&1&&!(e.flags&128))Yw(),fs(),e.flags|=98560,s=!1;else if(s=_l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[dn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else tn!==null&&(sf(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ue===0&&(Ue=3):Lp())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return ms(),Xh(t,e),t===null&&Jo(e.stateNode.containerInfo),it(e),null;case 10:return vp(e.type._context),it(e),null;case 17:return It(e.type)&&pu(),it(e),null;case 19:if(ve(Ee),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tu(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>ys&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return it(e),null}else 2*Ne()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ee.current,pe(Ee,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function bC(t,e){switch(pp(e),e.tag){case 1:return It(e.type)&&pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),ve(xt),ve(ct),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(ve(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ee),null;case 4:return ms(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var El=!1,lt=!1,NC=typeof WeakSet=="function"?WeakSet:Set,W=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Yh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var nv=!1;function DC(t,e){if(Vh=cu,t=jw(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},cu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var P=E.memoizedProps,R=E.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Zt(e.type,P),R);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return E=nv,nv=!1,E}function bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yh(e,n,s)}i=i.next}while(i!==r)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VT(t){var e=t.alternate;e!==null&&(t.alternate=null,VT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[ea],delete e[jh],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function LT(t){return t.tag===5||t.tag===3||t.tag===4}function rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||LT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(r!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var qe=null,en=!1;function tr(t,e,n){for(n=n.child;n!==null;)MT(t,e,n),n=n.sibling}function MT(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:lt||Qi(n,e);case 6:var r=qe,i=en;qe=null,tr(t,e,n),qe=r,en=i,qe!==null&&(en?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(en?(t=qe,n=n.stateNode,t.nodeType===8?Ad(t.parentNode,n):t.nodeType===1&&Ad(t,n),Qo(t)):Ad(qe,n.stateNode));break;case 4:r=qe,i=en,qe=n.stateNode.containerInfo,en=!0,tr(t,e,n),qe=r,en=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yh(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!lt&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,tr(t,e,n),lt=r):tr(t,e,n);break;default:tr(t,e,n)}}function iv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NC),e.forEach(function(r){var i=zC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,en=!1;break e;case 3:qe=a.stateNode.containerInfo,en=!0;break e;case 4:qe=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(qe===null)throw Error(U(160));MT(s,o,i),qe=null,en=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OT(e,t),e=e.sibling}function OT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),un(t),r&4){try{bo(3,t,t.return),hc(3,t)}catch(P){Ae(t,t.return,P)}try{bo(5,t,t.return)}catch(P){Ae(t,t.return,P)}}break;case 1:Jt(e,t),un(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Jt(e,t),un(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Ho(i,"")}catch(P){Ae(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sw(i,s),xh(a,o);var c=xh(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?cw(i,f):d==="dangerouslySetInnerHTML"?lw(i,f):d==="children"?Ho(i,f):Zf(i,d,f,c)}switch(a){case"input":_h(i,s);break;case"textarea":ow(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ts(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ts(i,!!s.multiple,s.defaultValue,!0):ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[ea]=s}catch(P){Ae(t,t.return,P)}}break;case 6:if(Jt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ae(t,t.return,P)}}break;case 3:if(Jt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(P){Ae(t,t.return,P)}break;case 4:Jt(e,t),un(t);break;case 13:Jt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Np=Ne())),r&4&&iv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(c=lt)||d,Jt(e,t),lt=c):Jt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,g=p.child,p.tag){case 0:case 11:case 14:case 15:bo(4,p,p.return);break;case 1:Qi(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(P){Ae(r,n,P)}}break;case 5:Qi(p,p.return);break;case 22:if(p.memoizedState!==null){ov(f);continue}}g!==null?(g.return=p,W=g):ov(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=uw("display",o))}catch(P){Ae(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Ae(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jt(e,t),un(t),r&4&&iv(t);break;case 21:break;default:Jt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(LT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var s=rv(t);ef(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=rv(t);Zh(t,a,o);break;default:throw Error(U(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VC(t,e,n){W=t,jT(t)}function jT(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||El;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||lt;a=El;var c=lt;if(El=o,(lt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?av(i):u!==null?(u.return=o,W=u):av(i);for(;s!==null;)W=s,jT(s),s=s.sibling;W=i,El=a,lt=c}sv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):sv(t)}}function sv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}lt||e.flags&512&&Jh(e)}catch(p){Ae(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function ov(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function av(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{Jh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{Jh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var LC=Math.ceil,xu=Qn.ReactCurrentDispatcher,kp=Qn.ReactCurrentOwner,Gt=Qn.ReactCurrentBatchConfig,oe=0,He=null,Oe=null,Xe=0,Rt=0,Xi=Fr(0),Ue=0,oa=null,gi=0,fc=0,bp=0,No=null,Et=null,Np=0,ys=1/0,In=null,Iu=!1,tf=null,Er=null,Sl=!1,pr=null,Pu=0,Do=0,nf=null,$l=-1,Hl=0;function vt(){return oe&6?Ne():$l!==-1?$l:$l=Ne()}function Sr(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:vC.transition!==null?(Hl===0&&(Hl=Ew()),Hl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Rw(t.type)),t):1}function on(t,e,n,r){if(50<Do)throw Do=0,nf=null,Error(U(185));Ia(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(fc|=n),Ue===4&&lr(t,Xe)),Pt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ys=Ne()+500,uc&&Ur()))}function Pt(t,e){var n=t.callbackNode;vP(t,e);var r=uu(t,t===He?Xe:0);if(r===0)n!==null&&gy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gy(n),e===1)t.tag===0?yC(lv.bind(null,t)):Kw(lv.bind(null,t)),fC(function(){!(oe&6)&&Ur()}),n=null;else{switch(Sw(r)){case 1:n=ip;break;case 4:n=ww;break;case 16:n=lu;break;case 536870912:n=Tw;break;default:n=lu}n=GT(n,FT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function FT(t,e){if($l=-1,Hl=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var r=uu(t,t===He?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cu(t,r);else{e=r;var i=oe;oe|=2;var s=BT();(He!==t||Xe!==e)&&(In=null,ys=Ne()+500,li(t,e));do try{jC();break}catch(a){UT(t,a)}while(!0);yp(),xu.current=s,oe=i,Oe!==null?e=0:(He=null,Xe=0,e=Ue)}if(e!==0){if(e===2&&(i=Rh(t),i!==0&&(r=i,e=rf(t,i))),e===1)throw n=oa,li(t,0),lr(t,r),Pt(t,Ne()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!MC(i)&&(e=Cu(t,r),e===2&&(s=Rh(t),s!==0&&(r=s,e=rf(t,s))),e===1))throw n=oa,li(t,0),lr(t,r),Pt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Xr(t,Et,In);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Np+500-Ne(),10<e)){if(uu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oh(Xr.bind(null,t,Et,In),e);break}Xr(t,Et,In);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LC(r/1960))-r,10<r){t.timeoutHandle=Oh(Xr.bind(null,t,Et,In),r);break}Xr(t,Et,In);break;case 5:Xr(t,Et,In);break;default:throw Error(U(329))}}}return Pt(t,Ne()),t.callbackNode===n?FT.bind(null,t):null}function rf(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Cu(t,e),t!==2&&(e=Et,Et=n,e!==null&&sf(e)),t}function sf(t){Et===null?Et=t:Et.push.apply(Et,t)}function MC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~bp,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function lv(t){if(oe&6)throw Error(U(327));os();var e=uu(t,0);if(!(e&1))return Pt(t,Ne()),null;var n=Cu(t,e);if(t.tag!==0&&n===2){var r=Rh(t);r!==0&&(e=r,n=rf(t,r))}if(n===1)throw n=oa,li(t,0),lr(t,e),Pt(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Et,In),Pt(t,Ne()),null}function Dp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ys=Ne()+500,uc&&Ur())}}function yi(t){pr!==null&&pr.tag===0&&!(oe&6)&&os();var e=oe;oe|=1;var n=Gt.transition,r=ce;try{if(Gt.transition=null,ce=1,t)return t()}finally{ce=r,Gt.transition=n,oe=e,!(oe&6)&&Ur()}}function Vp(){Rt=Xi.current,ve(Xi)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hC(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:ms(),ve(xt),ve(ct),Sp();break;case 5:Ep(r);break;case 4:ms();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:vp(r.type._context);break;case 22:case 23:Vp()}n=n.return}if(He=t,Oe=t=xr(t.current,null),Xe=Rt=e,Ue=0,oa=null,bp=fc=gi=0,Et=No=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function UT(t,e){do{var n=Oe;try{if(yp(),Bl.current=Su,Eu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(mi=0,$e=je=xe=null,ko=!1,ra=0,kp.current=null,n===null||n.return===null){Ue=1,oa=e,Oe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Xe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Qy(o);if(g!==null){g.flags&=-257,Xy(g,o,a,s,e),g.mode&1&&Ky(s,c,e),e=g,u=c;var E=e.updateQueue;if(E===null){var P=new Set;P.add(u),e.updateQueue=P}else E.add(u);break e}else{if(!(e&1)){Ky(s,c,e),Lp();break e}u=Error(U(426))}}else if(we&&a.mode&1){var R=Qy(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Xy(R,o,a,s,e),mp(gs(u,a));break e}}s=u=gs(u,a),Ue!==4&&(Ue=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=ST(s,u,e);zy(s,S);break e;case 1:a=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Er===null||!Er.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=xT(s,a,e);zy(s,b);break e}}s=s.return}while(s!==null)}WT(n)}catch(O){e=O,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function BT(){var t=xu.current;return xu.current=Su,t===null?Su:t}function Lp(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(gi&268435455)&&!(fc&268435455)||lr(He,Xe)}function Cu(t,e){var n=oe;oe|=2;var r=BT();(He!==t||Xe!==e)&&(In=null,li(t,e));do try{OC();break}catch(i){UT(t,i)}while(!0);if(yp(),oe=n,xu.current=r,Oe!==null)throw Error(U(261));return He=null,Xe=0,Ue}function OC(){for(;Oe!==null;)zT(Oe)}function jC(){for(;Oe!==null&&!uP();)zT(Oe)}function zT(t){var e=HT(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?WT(t):Oe=e,kp.current=null}function WT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bC(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Oe=null;return}}else if(n=kC(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Ue===0&&(Ue=5)}function Xr(t,e,n){var r=ce,i=Gt.transition;try{Gt.transition=null,ce=1,FC(t,e,n,r)}finally{Gt.transition=i,ce=r}return null}function FC(t,e,n,r){do os();while(pr!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_P(t,s),t===He&&(Oe=He=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,GT(lu,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=ce;ce=1;var a=oe;oe|=4,kp.current=null,DC(t,n),OT(n,t),sC(Lh),cu=!!Vh,Lh=Vh=null,t.current=n,VC(n),cP(),oe=a,ce=o,Gt.transition=s}else t.current=n;if(Sl&&(Sl=!1,pr=t,Pu=i),s=t.pendingLanes,s===0&&(Er=null),fP(n.stateNode),Pt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Iu)throw Iu=!1,t=tf,tf=null,t;return Pu&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===nf?Do++:(Do=0,nf=t):Do=0,Ur(),null}function os(){if(pr!==null){var t=Sw(Pu),e=Gt.transition,n=ce;try{if(Gt.transition=null,ce=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,Pu=0,oe&6)throw Error(U(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,g=d.return;if(VT(d),d===c){W=null;break}if(p!==null){p.return=g,W=p;break}W=g}}}var E=s.alternate;if(E!==null){var P=E.child;if(P!==null){E.child=null;do{var R=P.sibling;P.sibling=null,P=R}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,W=S;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,W=T;else e:for(o=_;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hc(9,a)}}catch(O){Ae(a,a.return,O)}if(a===o){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(oe=i,Ur(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ic,t)}catch{}r=!0}return r}finally{ce=n,Gt.transition=e}}return!1}function uv(t,e,n){e=gs(n,e),e=ST(t,e,1),t=Tr(t,e,1),e=vt(),t!==null&&(Ia(t,1,e),Pt(t,e))}function Ae(t,e,n){if(t.tag===3)uv(t,t,n);else for(;e!==null;){if(e.tag===3){uv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=gs(n,t),t=xT(e,t,1),e=Tr(e,t,1),t=vt(),e!==null&&(Ia(e,1,t),Pt(e,t));break}}e=e.return}}function UC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Xe&n)===n&&(Ue===4||Ue===3&&(Xe&130023424)===Xe&&500>Ne()-Np?li(t,0):bp|=n),Pt(t,e)}function $T(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=vt();t=Bn(t,e),t!==null&&(Ia(t,e,n),Pt(t,n))}function BC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$T(t,n)}function zC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),$T(t,n)}var HT;HT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,RC(t,e,n);St=!!(t.flags&131072)}else St=!1,we&&e.flags&1048576&&Qw(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wl(t,e),t=e.pendingProps;var i=hs(e,ct.current);ss(e,n),i=Ip(null,e,r,t,i,n);var s=Pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,mu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wp(e),i.updater=dc,e.stateNode=i,i._reactInternals=e,$h(e,r,t,n),e=qh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&fp(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$C(r),t=Zt(r,t),i){case 0:e=Gh(null,e,r,t,n);break e;case 1:e=Zy(null,e,r,t,n);break e;case 11:e=Yy(null,e,r,t,n);break e;case 14:e=Jy(null,e,r,Zt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Zy(t,e,r,i,n);case 3:e:{if(AT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tT(t,e),wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gs(Error(U(423)),e),e=ev(t,e,r,n,i);break e}else if(r!==i){i=gs(Error(U(424)),e),e=ev(t,e,r,n,i);break e}else for(kt=wr(e.stateNode.containerInfo.firstChild),bt=e,we=!0,tn=null,n=Zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),r===i){e=zn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return nT(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mh(r,i)?o=null:s!==null&&Mh(r,s)&&(e.flags|=32),CT(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return RT(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ps(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Yy(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(vu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!xt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ss(e,n),i=Kt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),Jy(t,e,r,i,n);case 15:return IT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Wl(t,e),e.tag=1,It(r)?(t=!0,mu(e)):t=!1,ss(e,n),ET(e,r,i),$h(e,r,i,n),qh(null,e,r,!0,t,n);case 19:return kT(t,e,n);case 22:return PT(t,e,n)}throw Error(U(156,e.tag))};function GT(t,e){return _w(t,e)}function WC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new WC(t,e,n,r)}function Mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $C(t){if(typeof t=="function")return Mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ui:return ui(n.children,i,s,e);case ep:o=8,i|=8;break;case ph:return t=Ht(12,n,e,i|2),t.elementType=ph,t.lanes=s,t;case mh:return t=Ht(13,n,e,i),t.elementType=mh,t.lanes=s,t;case gh:return t=Ht(19,n,e,i),t.elementType=gh,t.lanes=s,t;case nw:return pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ew:o=10;break e;case tw:o=9;break e;case tp:o=11;break e;case np:o=14;break e;case ir:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function pc(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=nw,t.lanes=n,t.stateNode={isHidden:!1},t}function Md(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yd(0),this.expirationTimes=yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Op(t,e,n,r,i,s,o,a,u){return t=new HC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(s),t}function GC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qT(t){if(!t)return Nr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(It(n))return qw(t,n,e)}return e}function KT(t,e,n,r,i,s,o,a,u){return t=Op(n,r,!0,t,i,s,o,a,u),t.context=qT(null),n=t.current,r=vt(),i=Sr(n),s=Ln(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Ia(t,i,r),Pt(t,r),t}function mc(t,e,n,r){var i=e.current,s=vt(),o=Sr(i);return n=qT(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(on(t,i,o,s),Ul(t,i,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jp(t,e){cv(t,e),(t=t.alternate)&&cv(t,e)}function qC(){return null}var QT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fp(t){this._internalRoot=t}gc.prototype.render=Fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));mc(t,e,null,null)};gc.prototype.unmount=Fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){mc(null,t,null,null)}),e[Un]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Aw(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function KC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Au(o);s.call(c)}}var o=KT(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[Un]=o.current,Jo(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Au(u);a.call(c)}}var u=Op(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=u,t[Un]=u.current,Jo(t.nodeType===8?t.parentNode:t),yi(function(){mc(e,u,n,r)}),u}function vc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Au(o);a.call(u)}}mc(e,o,t,i)}else o=KC(n,e,t,i,r);return Au(o)}xw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(sp(e,n|1),Pt(e,Ne()),!(oe&6)&&(ys=Ne()+500,Ur()))}break;case 13:yi(function(){var r=Bn(t,1);if(r!==null){var i=vt();on(r,t,1,i)}}),jp(t,1)}};op=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=vt();on(e,t,134217728,n)}jp(t,134217728)}};Iw=function(t){if(t.tag===13){var e=Sr(t),n=Bn(t,e);if(n!==null){var r=vt();on(n,t,e,r)}jp(t,e)}};Pw=function(){return ce};Cw=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Ph=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lc(r);if(!i)throw Error(U(90));iw(r),_h(r,i)}}}break;case"textarea":ow(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};fw=Dp;pw=yi;var QC={usingClientEntryPoint:!1,Events:[Ca,$i,lc,dw,hw,Dp]},co={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XC={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yw(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||qC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{ic=xl.inject(XC),hn=xl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QC;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(U(200));return GC(t,e,null,n)};Vt.createRoot=function(t,e){if(!Up(t))throw Error(U(299));var n=!1,r="",i=QT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Op(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Jo(t.nodeType===8?t.parentNode:t),new Fp(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=yw(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return yi(t)};Vt.hydrate=function(t,e,n){if(!yc(e))throw Error(U(200));return vc(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=QT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=KT(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gc(e)};Vt.render=function(t,e,n){if(!yc(e))throw Error(U(200));return vc(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!yc(t))throw Error(U(40));return t._reactRootContainer?(yi(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Vt.unstable_batchedUpdates=Dp;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return vc(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function XT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XT)}catch(t){console.error(t)}}XT(),X_.exports=Vt;var YC=X_.exports,hv=YC;hh.createRoot=hv.createRoot,hh.hydrateRoot=hv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const fv="popstate";function JC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return of("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ru(i)}return eA(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function YT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZC(){return Math.random().toString(36).substr(2,8)}function pv(t,e){return{usr:t.state,key:t.key,idx:e}}function of(t,e,n,r){return n===void 0&&(n=null),aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vs(e):e,{state:n,key:e&&e.key||r||ZC()})}function Ru(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function eA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(aa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=mr.Pop;let R=d(),S=R==null?null:R-c;c=R,u&&u({action:a,location:P.location,delta:S})}function p(R,S){a=mr.Push;let _=of(P.location,R,S);c=d()+1;let T=pv(_,c),b=P.createHref(_);try{o.pushState(T,"",b)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(b)}s&&u&&u({action:a,location:P.location,delta:1})}function g(R,S){a=mr.Replace;let _=of(P.location,R,S);c=d();let T=pv(_,c),b=P.createHref(_);o.replaceState(T,"",b),s&&u&&u({action:a,location:P.location,delta:0})}function E(R){let S=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof R=="string"?R:Ru(R);return _=_.replace(/ $/,"%20"),Ve(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let P={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(fv,f),u=R,()=>{i.removeEventListener(fv,f),u=null}},createHref(R){return e(i,R)},createURL:E,encodeLocation(R){let S=E(R);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:p,replace:g,go(R){return o.go(R)}};return P}var mv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mv||(mv={}));function tA(t,e,n){return n===void 0&&(n="/"),nA(t,e,n)}function nA(t,e,n,r){let i=typeof e=="string"?Vs(e):e,s=Bp(i.pathname||"/",n);if(s==null)return null;let o=JT(t);rA(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=mA(s);a=hA(o[u],c)}return a}function JT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ir([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),JT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:cA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of ZT(s.path))i(s,o,u)}),e}function ZT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ZT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function rA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iA=/^:[\w-]+$/,sA=3,oA=2,aA=1,lA=10,uA=-2,gv=t=>t==="*";function cA(t,e){let n=t.split("/"),r=n.length;return n.some(gv)&&(r+=uA),e&&(r+=oA),n.filter(i=>!gv(i)).reduce((i,s)=>i+(iA.test(s)?sA:s===""?aA:lA),r)}function dA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=fA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ir([s,f.pathname]),pathnameBase:_A(Ir([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ir([s,f.pathnameBase]))}return o}function fA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=pA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const E=a[f];return g&&!E?c[p]=void 0:c[p]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function pA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),YT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return YT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Bp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function gA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vs(t):t;return{pathname:n?n.startsWith("/")?n:yA(n,e):e,search:wA(r),hash:TA(i)}}function yA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zp(t,e){let n=vA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vs(t):(i=aa({},t),Ve(!i.pathname||!i.pathname.includes("?"),jd("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),jd("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),jd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=gA(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),_A=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,TA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function EA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eE=["post","put","patch","delete"];new Set(eE);const SA=["get",...eE];new Set(SA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},la.apply(this,arguments)}const $p=N.createContext(null),xA=N.createContext(null),Br=N.createContext(null),_c=N.createContext(null),Xn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),tE=N.createContext(null);function IA(t,e){let{relative:n}=e===void 0?{}:e;Ls()||Ve(!1);let{basename:r,navigator:i}=N.useContext(Br),{hash:s,pathname:o,search:a}=iE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ir([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ls(){return N.useContext(_c)!=null}function Ms(){return Ls()||Ve(!1),N.useContext(_c).location}function nE(t){N.useContext(Br).static||N.useLayoutEffect(t)}function rE(){let{isDataRoute:t}=N.useContext(Xn);return t?FA():PA()}function PA(){Ls()||Ve(!1);let t=N.useContext($p),{basename:e,future:n,navigator:r}=N.useContext(Br),{matches:i}=N.useContext(Xn),{pathname:s}=Ms(),o=JSON.stringify(zp(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return nE(()=>{a.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Wp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ir([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function CA(){let{matches:t}=N.useContext(Xn),e=t[t.length-1];return e?e.params:{}}function iE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Br),{matches:i}=N.useContext(Xn),{pathname:s}=Ms(),o=JSON.stringify(zp(i,r.v7_relativeSplatPath));return N.useMemo(()=>Wp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function AA(t,e){return RA(t,e)}function RA(t,e,n,r){Ls()||Ve(!1);let{navigator:i}=N.useContext(Br),{matches:s}=N.useContext(Xn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ms(),d;if(e){var f;let R=typeof e=="string"?Vs(e):e;u==="/"||(f=R.pathname)!=null&&f.startsWith(u)||Ve(!1),d=R}else d=c;let p=d.pathname||"/",g=p;if(u!=="/"){let R=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let E=tA(t,{pathname:g}),P=VA(E&&E.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Ir([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Ir([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&P?N.createElement(_c.Provider,{value:{location:la({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mr.Pop}},P):P}function kA(){let t=jA(),e=EA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const bA=N.createElement(kA,null);class NA extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Xn.Provider,{value:this.props.routeContext},N.createElement(tE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DA(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext($p);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Xn.Provider,{value:e},r)}function VA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,E=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,E=!1,P=null,R=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||bA,u&&(c<0&&p===0?(UA("route-fallback"),E=!0,R=null):c===p&&(E=!0,R=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,p+1)),_=()=>{let T;return g?T=P:E?T=R:f.route.Component?T=N.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=d,N.createElement(DA,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?N.createElement(NA,{location:n.location,revalidation:n.revalidation,component:P,error:g,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):_()},null)}var sE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sE||{}),oE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(oE||{});function LA(t){let e=N.useContext($p);return e||Ve(!1),e}function MA(t){let e=N.useContext(xA);return e||Ve(!1),e}function OA(t){let e=N.useContext(Xn);return e||Ve(!1),e}function aE(t){let e=OA(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function jA(){var t;let e=N.useContext(tE),n=MA(),r=aE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function FA(){let{router:t}=LA(sE.UseNavigateStable),e=aE(oE.UseNavigateStable),n=N.useRef(!1);return nE(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,la({fromRouteId:e},s)))},[t,e])}const yv={};function UA(t,e,n){yv[t]||(yv[t]=!0)}function BA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Hp(t){let{to:e,replace:n,state:r,relative:i}=t;Ls()||Ve(!1);let{future:s,static:o}=N.useContext(Br),{matches:a}=N.useContext(Xn),{pathname:u}=Ms(),c=rE(),d=Wp(e,zp(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return N.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function _o(t){Ve(!1)}function zA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:a}=t;Ls()&&Ve(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:s,static:o,future:la({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Vs(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:E="default"}=r,P=N.useMemo(()=>{let R=Bp(d,u);return R==null?null:{location:{pathname:R,search:f,hash:p,state:g,key:E},navigationType:i}},[u,d,f,p,g,E,i]);return P==null?null:N.createElement(Br.Provider,{value:c},N.createElement(_c.Provider,{children:n,value:P}))}function WA(t){let{children:e,location:n}=t;return AA(af(e),n)}new Promise(()=>{});function af(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,af(r.props.children,s));return}r.type!==_o&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=af(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lf(){return lf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lf.apply(this,arguments)}function $A(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function HA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GA(t,e){return t.button===0&&(!e||e==="_self")&&!HA(t)}const qA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],KA="6";try{window.__reactRouterVersion=KA}catch{}const QA="startTransition",vv=UI[QA];function XA(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=JC({window:i,v5Compat:!0}));let o=s.current,[a,u]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=N.useCallback(f=>{c&&vv?vv(()=>u(f)):u(f)},[u,c]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.useEffect(()=>BA(r),[r]),N.createElement(zA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const YA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wo=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,p=$A(e,qA),{basename:g}=N.useContext(Br),E,P=!1;if(typeof c=="string"&&JA.test(c)&&(E=c,YA))try{let T=new URL(window.location.href),b=c.startsWith("//")?new URL(T.protocol+c):new URL(c),O=Bp(b.pathname,g);b.origin===T.origin&&O!=null?c=O+b.search+b.hash:P=!0}catch{}let R=IA(c,{relative:i}),S=ZA(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function _(T){r&&r(T),T.defaultPrevented||S(T)}return N.createElement("a",lf({},p,{href:E||R,onClick:P||s?r:_,ref:n,target:u}))});var _v;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_v||(_v={}));var wv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wv||(wv={}));function ZA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=rE(),c=Ms(),d=iE(t,{relative:o});return N.useCallback(f=>{if(GA(f,n)){f.preventDefault();let p=r!==void 0?r:Ru(c)===Ru(d);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}let eR={data:""},tR=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||eR,nR=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rR=/\/\*[^]*?\*\/|  +/g,Tv=/\n+/g,ur=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?ur(o,s):s+"{"+ur(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=ur(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ur.p?ur.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xn={},lE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+lE(t[n]);return e}return t},iR=(t,e,n,r,i)=>{let s=lE(t),o=xn[s]||(xn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!xn[o]){let u=s!==t?t:(c=>{let d,f,p=[{}];for(;d=nR.exec(c.replace(rR,""));)d[4]?p.shift():d[3]?(f=d[3].replace(Tv," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][d[1]]=d[2].replace(Tv," ").trim();return p[0]})(t);xn[o]=ur(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&xn.g?xn.g:null;return n&&(xn.g=xn[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(xn[o],e,r,a),o},sR=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":ur(a,""):a===!1?"":a}return r+i+(o??"")},"");function wc(t){let e=this||{},n=t.call?t(e.p):t;return iR(n.unshift?n.raw?sR(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,tR(e.target),e.g,e.o,e.k)}let uE,uf,cf;wc.bind({g:1});let Wn=wc.bind({k:1});function oR(t,e,n,r){ur.p=e,uE=t,uf=n,cf=r}function zr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:uf&&uf()},a),n.o=/ *go\d+/.test(u),a.className=wc.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),cf&&c[0]&&cf(a),uE(c,a)}return i}}var aR=t=>typeof t=="function",ku=(t,e)=>aR(t)?t(e):t,lR=(()=>{let t=0;return()=>(++t).toString()})(),cE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),uR=20,dE=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,uR)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return dE(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},ql=[],ii={toasts:[],pausedAt:void 0},Ii=t=>{ii=dE(ii,t),ql.forEach(e=>{e(ii)})},cR={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},dR=(t={})=>{let[e,n]=N.useState(ii),r=N.useRef(ii);N.useEffect(()=>(r.current!==ii&&n(ii),ql.push(n),()=>{let s=ql.indexOf(n);s>-1&&ql.splice(s,1)}),[]);let i=e.toasts.map(s=>{var o,a,u;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((o=t[s.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((a=t[s.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||cR[s.type],style:{...t.style,...(u=t[s.type])==null?void 0:u.style,...s.style}}});return{...e,toasts:i}},hR=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||lR()}),Ra=t=>(e,n)=>{let r=hR(e,t,n);return Ii({type:2,toast:r}),r.id},yt=(t,e)=>Ra("blank")(t,e);yt.error=Ra("error");yt.success=Ra("success");yt.loading=Ra("loading");yt.custom=Ra("custom");yt.dismiss=t=>{Ii({type:3,toastId:t})};yt.remove=t=>Ii({type:4,toastId:t});yt.promise=(t,e,n)=>{let r=yt.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?ku(e.success,i):void 0;return s?yt.success(s,{id:r,...n,...n==null?void 0:n.success}):yt.dismiss(r),i}).catch(i=>{let s=e.error?ku(e.error,i):void 0;s?yt.error(s,{id:r,...n,...n==null?void 0:n.error}):yt.dismiss(r)}),t};var fR=(t,e)=>{Ii({type:1,toast:{id:t,height:e}})},pR=()=>{Ii({type:5,time:Date.now()})},Vo=new Map,mR=1e3,gR=(t,e=mR)=>{if(Vo.has(t))return;let n=setTimeout(()=>{Vo.delete(t),Ii({type:4,toastId:t})},e);Vo.set(t,n)},yR=t=>{let{toasts:e,pausedAt:n}=dR(t);N.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(u<0){a.visible&&yt.dismiss(a.id);return}return setTimeout(()=>yt.dismiss(a.id),u)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=N.useCallback(()=>{n&&Ii({type:6,time:Date.now()})},[n]),i=N.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:c}=o||{},d=e.filter(g=>(g.position||c)===(s.position||c)&&g.height),f=d.findIndex(g=>g.id===s.id),p=d.filter((g,E)=>E<f&&g.visible).length;return d.filter(g=>g.visible).slice(...a?[p+1]:[0,p]).reduce((g,E)=>g+(E.height||0)+u,0)},[e]);return N.useEffect(()=>{e.forEach(s=>{if(s.dismissed)gR(s.id,s.removeDelay);else{let o=Vo.get(s.id);o&&(clearTimeout(o),Vo.delete(s.id))}})},[e]),{toasts:e,handlers:{updateHeight:fR,startPause:pR,endPause:r,calculateOffset:i}}},vR=Wn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_R=Wn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wR=Wn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,TR=zr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${wR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ER=Wn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,SR=zr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ER} 1s linear infinite;
`,xR=Wn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,IR=Wn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,PR=zr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${IR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,CR=zr("div")`
  position: absolute;
`,AR=zr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,RR=Wn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kR=zr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${RR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,bR=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?N.createElement(kR,null,e):e:n==="blank"?null:N.createElement(AR,null,N.createElement(SR,{...r}),n!=="loading"&&N.createElement(CR,null,n==="error"?N.createElement(TR,{...r}):N.createElement(PR,{...r})))},NR=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,DR=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,VR="0%{opacity:0;} 100%{opacity:1;}",LR="0%{opacity:1;} 100%{opacity:0;}",MR=zr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,OR=zr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,jR=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=cE()?[VR,LR]:[NR(n),DR(n)];return{animation:e?`${Wn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Wn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},FR=N.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?jR(t.position||e||"top-center",t.visible):{opacity:0},s=N.createElement(bR,{toast:t}),o=N.createElement(OR,{...t.ariaProps},ku(t.message,t));return N.createElement(MR,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):N.createElement(N.Fragment,null,s,o))});oR(N.createElement);var UR=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=N.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return N.createElement("div",{ref:s,className:e,style:n},i)},BR=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:cE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},zR=wc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Il=16,WR=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:u}=yR(n);return N.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Il,left:Il,right:Il,bottom:Il,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(c=>{let d=c.position||e,f=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),p=BR(d,f);return N.createElement(UR,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?zR:"",style:p},c.type==="custom"?ku(c.message,c):i?i(c):N.createElement(FR,{toast:c,position:d}))}))},nn=yt,Ev={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$R=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(n[d],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$R(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new HR;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GR=function(t){const e=hE(t);return fE.encodeByteArray(e,!0)},bu=function(t){return GR(t).replace(/\./g,"")},pE=function(t){try{return fE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=()=>qR().__FIREBASE_DEFAULTS__,QR=()=>{if(typeof process>"u"||typeof Ev>"u")return;const t=Ev.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pE(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return KR()||QR()||XR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mE=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YR=t=>{const e=mE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gE=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},yE=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bu(JSON.stringify(n)),bu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ek(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function tk(){var t;const e=(t=Tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ik(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sk(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ok(){return!tk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ak(){try{return typeof indexedDB=="object"}catch{return!1}}function lk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uk,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ck(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,a,r)}}function ck(t,e){return t.replace(dk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dk=/\{\$([^}]+)}/g;function hk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sv(s)&&Sv(o)){if(!Nu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fk(t,e){const n=new pk(t,e);return n.subscribe.bind(n)}class pk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fd),i.error===void 0&&(i.error=Fd),i.complete===void 0&&(i.complete=Fd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){return t&&t._delegate?t._delegate:t}class vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vk(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yk(t){return t===Yr?void 0:t}function vk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const wk={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Tk=re.INFO,Ek={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Sk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ek[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gp{constructor(e){this.name=e,this._logLevel=Tk,this._logHandler=Sk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const xk=(t,e)=>e.some(n=>t instanceof n);let xv,Iv;function Ik(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pk(){return Iv||(Iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,df=new WeakMap,_E=new WeakMap,Ud=new WeakMap,qp=new WeakMap;function Ck(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),qp.set(e,t),e}function Ak(t){if(df.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});df.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rk(t){hf=t(hf)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bd(this),e,...n);return _E.set(r,e.sort?e.sort():[e]),Pr(r)}:Pk().includes(t)?function(...e){return t.apply(Bd(this),e),Pr(vE.get(this))}:function(...e){return Pr(t.apply(Bd(this),e))}}function bk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&Ak(t),xk(t,Ik())?new Proxy(t,hf):t)}function Pr(t){if(t instanceof IDBRequest)return Ck(t);if(Ud.has(t))return Ud.get(t);const e=bk(t);return e!==t&&(Ud.set(t,e),qp.set(e,t)),e}const Bd=t=>qp.get(t);function Nk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dk=["get","getKey","getAll","getAllKeys","count"],Vk=["put","add","delete","clear"],zd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dk.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return zd.set(e,s),s}Rk(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",Cv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Gp("@firebase/app"),Ok="@firebase/app-compat",jk="@firebase/analytics-compat",Fk="@firebase/analytics",Uk="@firebase/app-check-compat",Bk="@firebase/app-check",zk="@firebase/auth",Wk="@firebase/auth-compat",$k="@firebase/database",Hk="@firebase/data-connect",Gk="@firebase/database-compat",qk="@firebase/functions",Kk="@firebase/functions-compat",Qk="@firebase/installations",Xk="@firebase/installations-compat",Yk="@firebase/messaging",Jk="@firebase/messaging-compat",Zk="@firebase/performance",eb="@firebase/performance-compat",tb="@firebase/remote-config",nb="@firebase/remote-config-compat",rb="@firebase/storage",ib="@firebase/storage-compat",sb="@firebase/firestore",ob="@firebase/vertexai-preview",ab="@firebase/firestore-compat",lb="firebase",ub="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="[DEFAULT]",cb={[ff]:"fire-core",[Ok]:"fire-core-compat",[Fk]:"fire-analytics",[jk]:"fire-analytics-compat",[Bk]:"fire-app-check",[Uk]:"fire-app-check-compat",[zk]:"fire-auth",[Wk]:"fire-auth-compat",[$k]:"fire-rtdb",[Hk]:"fire-data-connect",[Gk]:"fire-rtdb-compat",[qk]:"fire-fn",[Kk]:"fire-fn-compat",[Qk]:"fire-iid",[Xk]:"fire-iid-compat",[Yk]:"fire-fcm",[Jk]:"fire-fcm-compat",[Zk]:"fire-perf",[eb]:"fire-perf-compat",[tb]:"fire-rc",[nb]:"fire-rc-compat",[rb]:"fire-gcs",[ib]:"fire-gcs-compat",[sb]:"fire-fst",[ab]:"fire-fst-compat",[ob]:"fire-vertex","fire-js":"fire-js",[lb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map,db=new Map,mf=new Map;function Av(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(mf.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,t);for(const n of Du.values())Av(n,t);for(const n of db.values())Av(n,t);return!0}function Kp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new ka("app","Firebase",hb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=ub;function wE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=gE()),!n)throw Cr.create("no-options");const s=Du.get(i);if(s){if(Nu(n,s.options)&&Nu(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new _k(i);for(const u of mf.values())o.addComponent(u);const a=new fb(n,r,o);return Du.set(i,a),a}function TE(t=pf){const e=Du.get(t);if(!e&&t===pf&&gE())return wE();if(!e)throw Cr.create("no-app",{appName:t});return e}function Ar(t,e,n){var r;let i=(r=cb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}vs(new vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="firebase-heartbeat-database",mb=1,ua="firebase-heartbeat-store";let Wd=null;function EE(){return Wd||(Wd=Nk(pb,mb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Wd}async function gb(t){try{const n=(await EE()).transaction(ua),r=await n.objectStore(ua).get(SE(t));return await n.done,r}catch(e){if(e instanceof Yn)$n.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Rv(t,e){try{const r=(await EE()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,SE(t)),await r.done}catch(n){if(n instanceof Yn)$n.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function SE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=1024,vb=30*24*60*60*1e3;class _b{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kv(),{heartbeatsToSend:r,unsentEntries:i}=wb(this._heartbeatsCache.heartbeats),s=bu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function kv(){return new Date().toISOString().substring(0,10)}function wb(t,e=yb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ak()?lk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bv(t){return bu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){vs(new vi("platform-logger",e=>new Lk(e),"PRIVATE")),vs(new vi("heartbeat",e=>new _b(e),"PRIVATE")),Ar(ff,Cv,t),Ar(ff,Cv,"esm2017"),Ar("fire-js","")}Eb("");function Qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sb=xE,IE=new ka("auth","Firebase",xE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Gp("@firebase/auth");function xb(t,...e){Vu.logLevel<=re.WARN&&Vu.warn(`Auth (${Os}): ${t}`,...e)}function Kl(t,...e){Vu.logLevel<=re.ERROR&&Vu.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...e){throw Yp(t,...e)}function an(t,...e){return Yp(t,...e)}function Xp(t,e,n){const r=Object.assign(Object.assign({},Sb()),{[e]:n});return new ka("auth","Firebase",r).create(e,{appName:t.name})}function ci(t){return Xp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ib(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),Xp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IE.create(t,...e)}function X(t,e,...n){if(!t)throw Yp(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function Hn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pb(){return Nv()==="http:"||Nv()==="https:"}function Nv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pb()||rk()||"connection"in navigator)?navigator.onLine:!0}function Ab(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=ek()||ik()}get(){return Cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Na(3e4,6e4);function Zp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function js(t,e,n,r,i={}){return CE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ba(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return nk()||(c.referrerPolicy="no-referrer"),PE.fetch()(AE(t,t.config.apiHost,n,a),c)})}async function CE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rb),e);try{const i=new Nb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Pl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xp(t,d,c);vn(t,d)}}catch(i){if(i instanceof Yn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function bb(t,e,n,r,i={}){const s=await js(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jp(t.config,i):`${t.config.apiScheme}://${i}`}class Nb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),kb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){return js(t,"POST","/v1/accounts:delete",e)}async function RE(t,e){return js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vb(t,e=!1){const n=Xt(t),r=await n.getIdToken(e),i=em(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lo($d(i.auth_time)),issuedAtTime:Lo($d(i.iat)),expirationTime:Lo($d(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $d(t){return Number(t)*1e3}function em(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=pE(n);return i?JSON.parse(i):(Kl("Failed to decode base64 JWT payload"),null)}catch(i){return Kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dv(t){const e=em(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&Lb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,RE(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kE(s.providerUserInfo):[],a=jb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Ob(t){const e=Xt(t);await Lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kE(t){return t.map(e=>{var{providerId:n}=e,r=Qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){const n=await CE(t,{},async()=>{const r=ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ub(t,e){return js(t,"POST","/v2/accounts:revokeToken",Zp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Dv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Fb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new as;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vb(this,e)}reload(){return Ob(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(ci(this.auth));const e=await this.getIdToken();return await ca(this,Db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:b,isAnonymous:O,providerData:M,stsTokenManager:x}=n;X(T&&x,e,"internal-error");const v=as.fromJSON(this.name,x);X(typeof T=="string",e,"internal-error"),nr(f,e.name),nr(p,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),nr(g,e.name),nr(E,e.name),nr(P,e.name),nr(R,e.name),nr(S,e.name),nr(_,e.name);const I=new Nn({uid:T,auth:e,email:p,emailVerified:b,displayName:f,isAnonymous:O,photoURL:E,phoneNumber:g,tenantId:P,stsTokenManager:v,createdAt:S,lastLoginAt:_});return M&&Array.isArray(M)&&(I.providerData=M.map(C=>Object.assign({},C))),R&&(I._redirectEventId=R),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new as;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new as;a.updateFromIdToken(r);const u=new Nn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new Map;function Dn(t){Hn(t instanceof Function,"Expected a class definition");let e=Vv.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bE.type="NONE";const Lv=bE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Dn(Lv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Dn(Lv);const o=Ql(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Nn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ls(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OE(e))return"Blackberry";if(jE(e))return"Webos";if(DE(e))return"Safari";if((e.includes("chrome/")||VE(e))&&!e.includes("edge/"))return"Chrome";if(ME(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NE(t=dt()){return/firefox\//i.test(t)}function DE(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VE(t=dt()){return/crios\//i.test(t)}function LE(t=dt()){return/iemobile/i.test(t)}function ME(t=dt()){return/android/i.test(t)}function OE(t=dt()){return/blackberry/i.test(t)}function jE(t=dt()){return/webos/i.test(t)}function tm(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bb(t=dt()){var e;return tm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zb(){return sk()&&document.documentMode===10}function FE(t=dt()){return tm(t)||ME(t)||jE(t)||OE(t)||/windows phone/i.test(t)||LE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e=[]){let n;switch(t){case"Browser":n=Mv(dt());break;case"Worker":n=`${Mv(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e={}){return js(t,"GET","/v2/passwordPolicy",Zp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=6;class Gb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Hb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ov(this),this.idTokenSubscription=new Ov(this),this.beforeStateQueue=new Wb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await RE(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(ci(this));const n=e?Xt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $b(this),n=new Gb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ka("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ub(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ec(t){return Xt(t)}class Ov{constructor(e){this.auth=e,this.observer=null,this.addObserver=fk(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kb(t){nm=t}function Qb(t){return nm.loadJS(t)}function Xb(){return nm.gapiScript}function Yb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e){const n=Kp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nu(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function Zb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function e2(t,e,n){const r=Ec(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=BE(e),{host:o,port:a}=t2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),n2()}function BE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function t2(t){const e=BE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jv(o)}}}function jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function n2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return bb(t,"POST","/v1/accounts:signInWithIdp",Zp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="http://localhost";class _i extends zE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:r2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ba(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Da{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Da{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Da{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Fv(r);return new _s({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fv(r);return new _s({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mu(e,n,r,i)}}function WE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(t,s,e,r):s})}async function i2(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(t,e,n=!1){const{auth:r}=t;if(kn(r.app))return Promise.reject(ci(r));const i="reauthenticate";try{const s=await ca(t,WE(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=em(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),_s._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(t,e,n=!1){if(kn(t.app))return Promise.reject(ci(t));const r="signIn",i=await WE(t,r,e),s=await _s._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function a2(t,e,n,r){return Xt(t).onIdTokenChanged(e,n,r)}function l2(t,e,n){return Xt(t).beforeAuthStateChanged(e,n)}function u2(t,e,n,r){return Xt(t).onAuthStateChanged(e,n,r)}function c2(t){return Xt(t).signOut()}const Ou="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=1e3,h2=10;class HE extends $E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,h2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const f2=HE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends $E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GE.type="SESSION";const qE=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await p2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=im("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function g2(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function y2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _2(){return KE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebaseLocalStorageDb",w2=1,ju="firebaseLocalStorage",XE="fbase_key";class Va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function T2(){const t=indexedDB.deleteDatabase(QE);return new Va(t).toPromise()}function vf(){const t=indexedDB.open(QE,w2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ju,{keyPath:XE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ju)?e(r):(r.close(),await T2(),e(await vf()))})})}async function Uv(t,e,n){const r=xc(t,!0).put({[XE]:e,value:n});return new Va(r).toPromise()}async function E2(t,e){const n=xc(t,!1).get(e),r=await new Va(n).toPromise();return r===void 0?null:r.value}function Bv(t,e){const n=xc(t,!0).delete(e);return new Va(n).toPromise()}const S2=800,x2=3;class YE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>x2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(_2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y2(),!this.activeServiceWorker)return;this.sender=new m2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vf();return await Uv(e,Ou,"1"),await Bv(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>E2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xc(i,!1).getAll();return new Va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YE.type="LOCAL";const I2=YE;new Na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e){return e?Dn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends zE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function P2(t){return o2(t.auth,new sm(t),t.bypassAuthState)}function C2(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),s2(n,new sm(t),t.bypassAuthState)}async function A2(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),i2(n,new sm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P2;case"linkViaPopup":case"linkViaRedirect":return A2;case"reauthViaPopup":case"reauthViaRedirect":return C2;default:vn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=new Na(2e3,1e4);async function k2(t,e,n){if(kn(t.app))return Promise.reject(an(t,"operation-not-supported-in-this-environment"));const r=Ec(t);Ib(t,e,rm);const i=JE(r,n);return new si(r,"signInViaPopup",e,i).executeNotNull()}class si extends ZE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,R2.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="pendingRedirect",Xl=new Map;class N2 extends ZE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await D2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D2(t,e){const n=M2(e),r=L2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function V2(t,e){Xl.set(t._key(),e)}function L2(t){return Dn(t._redirectPersistence)}function M2(t){return Ql(b2,t.config.apiKey,t.name)}async function O2(t,e,n=!1){if(kn(t.app))return Promise.reject(ci(t));const r=Ec(t),i=JE(r,e),o=await new N2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=10*60*1e3;class F2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j2&&this.cachedEventUids.clear(),this.cachedEventUids.has(zv(e))}saveEventToCache(e){this.cachedEventUids.add(zv(e)),this.lastProcessedEventTime=Date.now()}}function zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e={}){return js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W2=/^https?/;async function $2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B2(t);for(const n of e)try{if(H2(n))return}catch{}vn(t,"unauthorized-domain")}function H2(t){const e=gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W2.test(n))return!1;if(z2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=new Na(3e4,6e4);function Wv(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q2(t){return new Promise((e,n)=>{var r,i,s;function o(){Wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wv(),n(an(t,"network-request-failed"))},timeout:G2.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=Yb("iframefcb");return pn()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},Qb(`${Xb()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function K2(t){return Yl=Yl||q2(t),Yl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=new Na(5e3,15e3),X2="__/auth/iframe",Y2="emulator/auth/iframe",J2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jp(e,Y2):`https://${t.config.authDomain}/${X2}`,r={apiKey:e.apiKey,appName:t.name,v:Os},i=Z2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ba(r).slice(1)}`}async function tN(t){const e=await K2(t),n=pn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:eN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:J2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},Q2.get());function u(){pn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rN=500,iN=600,sN="_blank",oN="http://localhost";class $v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aN(t,e,n,r=rN,i=iN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},nN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(a=VE(c)?sN:n),NE(c)&&(e=e||oN,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(Bb(c)&&a!=="_self")return lN(e||"",a),new $v(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new $v(f)}function lN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="__/auth/handler",cN="emulator/auth/handler",dN=encodeURIComponent("fac");async function Hv(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:i};if(e instanceof rm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Da){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${dN}=${encodeURIComponent(u)}`:"";return`${hN(t)}?${ba(a).slice(1)}${c}`}function hN({config:t}){return t.emulator?Jp(t,cN):`https://${t.authDomain}/${uN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="webStorageSupport";class fN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qE,this._completeRedirectFn=O2,this._overrideRedirectResult=V2}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hv(e,n,r,gf(),i);return aN(e,o,im())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hv(e,n,r,gf(),i);return g2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tN(e),r=new F2(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hd];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FE()||DE()||tm()}}const pN=fN;var Gv="@firebase/auth",qv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yN(t){vs(new vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UE(t)},c=new qb(r,i,s,u);return Zb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vs(new vi("auth-internal",e=>{const n=Ec(e.getProvider("auth").getImmediate());return(r=>new mN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ar(Gv,qv,gN(t)),Ar(Gv,qv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=5*60,_N=yE("authIdTokenMaxAge")||vN;let Kv=null;const wN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_N)return;const i=n==null?void 0:n.token;Kv!==i&&(Kv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TN(t=TE()){const e=Kp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jb(t,{popupRedirectResolver:pN,persistence:[I2,f2,qE]}),r=yE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wN(s.toString());l2(n,o,()=>o(n.currentUser)),a2(n,a=>o(a))}}const i=mE("auth");return i&&e2(n,`http://${i}`),n}function EN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Kb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yN("Browser");var Qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,tS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,v){function I(){}I.prototype=v.prototype,x.D=v.prototype,x.prototype=new I,x.prototype.constructor=x,x.C=function(C,k,D){for(var A=Array(arguments.length-2),he=2;he<arguments.length;he++)A[he-2]=arguments[he];return v.prototype[k].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,v,I){I||(I=0);var C=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)C[k]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(k=0;16>k;++k)C[k]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=x.g[0],I=x.g[1],k=x.g[2];var D=x.g[3],A=v+(D^I&(k^D))+C[0]+3614090360&4294967295;v=I+(A<<7&4294967295|A>>>25),A=D+(k^v&(I^k))+C[1]+3905402710&4294967295,D=v+(A<<12&4294967295|A>>>20),A=k+(I^D&(v^I))+C[2]+606105819&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(v^k&(D^v))+C[3]+3250441966&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(D^I&(k^D))+C[4]+4118548399&4294967295,v=I+(A<<7&4294967295|A>>>25),A=D+(k^v&(I^k))+C[5]+1200080426&4294967295,D=v+(A<<12&4294967295|A>>>20),A=k+(I^D&(v^I))+C[6]+2821735955&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(v^k&(D^v))+C[7]+4249261313&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(D^I&(k^D))+C[8]+1770035416&4294967295,v=I+(A<<7&4294967295|A>>>25),A=D+(k^v&(I^k))+C[9]+2336552879&4294967295,D=v+(A<<12&4294967295|A>>>20),A=k+(I^D&(v^I))+C[10]+4294925233&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(v^k&(D^v))+C[11]+2304563134&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(D^I&(k^D))+C[12]+1804603682&4294967295,v=I+(A<<7&4294967295|A>>>25),A=D+(k^v&(I^k))+C[13]+4254626195&4294967295,D=v+(A<<12&4294967295|A>>>20),A=k+(I^D&(v^I))+C[14]+2792965006&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(v^k&(D^v))+C[15]+1236535329&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(k^D&(I^k))+C[1]+4129170786&4294967295,v=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(v^I))+C[6]+3225465664&4294967295,D=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(D^v))+C[11]+643717713&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^v&(k^D))+C[0]+3921069994&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(k^D&(I^k))+C[5]+3593408605&4294967295,v=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(v^I))+C[10]+38016083&4294967295,D=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(D^v))+C[15]+3634488961&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^v&(k^D))+C[4]+3889429448&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(k^D&(I^k))+C[9]+568446438&4294967295,v=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(v^I))+C[14]+3275163606&4294967295,D=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(D^v))+C[3]+4107603335&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^v&(k^D))+C[8]+1163531501&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(k^D&(I^k))+C[13]+2850285829&4294967295,v=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(v^I))+C[2]+4243563512&4294967295,D=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(D^v))+C[7]+1735328473&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^v&(k^D))+C[12]+2368359562&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(I^k^D)+C[5]+4294588738&4294967295,v=I+(A<<4&4294967295|A>>>28),A=D+(v^I^k)+C[8]+2272392833&4294967295,D=v+(A<<11&4294967295|A>>>21),A=k+(D^v^I)+C[11]+1839030562&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^v)+C[14]+4259657740&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(I^k^D)+C[1]+2763975236&4294967295,v=I+(A<<4&4294967295|A>>>28),A=D+(v^I^k)+C[4]+1272893353&4294967295,D=v+(A<<11&4294967295|A>>>21),A=k+(D^v^I)+C[7]+4139469664&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^v)+C[10]+3200236656&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(I^k^D)+C[13]+681279174&4294967295,v=I+(A<<4&4294967295|A>>>28),A=D+(v^I^k)+C[0]+3936430074&4294967295,D=v+(A<<11&4294967295|A>>>21),A=k+(D^v^I)+C[3]+3572445317&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^v)+C[6]+76029189&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(I^k^D)+C[9]+3654602809&4294967295,v=I+(A<<4&4294967295|A>>>28),A=D+(v^I^k)+C[12]+3873151461&4294967295,D=v+(A<<11&4294967295|A>>>21),A=k+(D^v^I)+C[15]+530742520&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^v)+C[2]+3299628645&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(k^(I|~D))+C[0]+4096336452&4294967295,v=I+(A<<6&4294967295|A>>>26),A=D+(I^(v|~k))+C[7]+1126891415&4294967295,D=v+(A<<10&4294967295|A>>>22),A=k+(v^(D|~I))+C[14]+2878612391&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~v))+C[5]+4237533241&4294967295,I=k+(A<<21&4294967295|A>>>11),A=v+(k^(I|~D))+C[12]+1700485571&4294967295,v=I+(A<<6&4294967295|A>>>26),A=D+(I^(v|~k))+C[3]+2399980690&4294967295,D=v+(A<<10&4294967295|A>>>22),A=k+(v^(D|~I))+C[10]+4293915773&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~v))+C[1]+2240044497&4294967295,I=k+(A<<21&4294967295|A>>>11),A=v+(k^(I|~D))+C[8]+1873313359&4294967295,v=I+(A<<6&4294967295|A>>>26),A=D+(I^(v|~k))+C[15]+4264355552&4294967295,D=v+(A<<10&4294967295|A>>>22),A=k+(v^(D|~I))+C[6]+2734768916&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~v))+C[13]+1309151649&4294967295,I=k+(A<<21&4294967295|A>>>11),A=v+(k^(I|~D))+C[4]+4149444226&4294967295,v=I+(A<<6&4294967295|A>>>26),A=D+(I^(v|~k))+C[11]+3174756917&4294967295,D=v+(A<<10&4294967295|A>>>22),A=k+(v^(D|~I))+C[2]+718787259&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~v))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+D&4294967295}r.prototype.u=function(x,v){v===void 0&&(v=x.length);for(var I=v-this.blockSize,C=this.B,k=this.h,D=0;D<v;){if(k==0)for(;D<=I;)i(this,x,D),D+=this.blockSize;if(typeof x=="string"){for(;D<v;)if(C[k++]=x.charCodeAt(D++),k==this.blockSize){i(this,C),k=0;break}}else for(;D<v;)if(C[k++]=x[D++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;var I=8*this.o;for(v=x.length-8;v<x.length;++v)x[v]=I&255,I/=256;for(this.u(x),x=Array(16),v=I=0;4>v;++v)for(var C=0;32>C;C+=8)x[I++]=this.g[v]>>>C&255;return x};function s(x,v){var I=a;return Object.prototype.hasOwnProperty.call(I,x)?I[x]:I[x]=v(x)}function o(x,v){this.h=v;for(var I=[],C=!0,k=x.length-1;0<=k;k--){var D=x[k]|0;C&&D==v||(I[k]=D,C=!1)}this.g=I}var a={};function u(x){return-128<=x&&128>x?s(x,function(v){return new o([v|0],0>v?-1:0)}):new o([x|0],0>x?-1:0)}function c(x){if(isNaN(x)||!isFinite(x))return f;if(0>x)return R(c(-x));for(var v=[],I=1,C=0;x>=I;C++)v[C]=x/I|0,I*=4294967296;return new o(v,0)}function d(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return R(d(x.substring(1),v));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),C=f,k=0;k<x.length;k+=8){var D=Math.min(8,x.length-k),A=parseInt(x.substring(k,k+D),v);8>D?(D=c(Math.pow(v,D)),C=C.j(D).add(c(A))):(C=C.j(I),C=C.add(c(A)))}return C}var f=u(0),p=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-R(this).m();for(var x=0,v=1,I=0;I<this.g.length;I++){var C=this.i(I);x+=(0<=C?C:4294967296+C)*v,v*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(E(this))return"0";if(P(this))return"-"+R(this).toString(x);for(var v=c(Math.pow(x,6)),I=this,C="";;){var k=b(I,v).g;I=S(I,k.j(v));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(x);if(I=k,E(I))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function E(x){if(x.h!=0)return!1;for(var v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function P(x){return x.h==-1}t.l=function(x){return x=S(this,x),P(x)?-1:E(x)?0:1};function R(x){for(var v=x.g.length,I=[],C=0;C<v;C++)I[C]=~x.g[C];return new o(I,~x.h).add(p)}t.abs=function(){return P(this)?R(this):this},t.add=function(x){for(var v=Math.max(this.g.length,x.g.length),I=[],C=0,k=0;k<=v;k++){var D=C+(this.i(k)&65535)+(x.i(k)&65535),A=(D>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);C=A>>>16,D&=65535,A&=65535,I[k]=A<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(x,v){return x.add(R(v))}t.j=function(x){if(E(this)||E(x))return f;if(P(this))return P(x)?R(this).j(R(x)):R(R(this).j(x));if(P(x))return R(this.j(R(x)));if(0>this.l(g)&&0>x.l(g))return c(this.m()*x.m());for(var v=this.g.length+x.g.length,I=[],C=0;C<2*v;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<x.g.length;k++){var D=this.i(C)>>>16,A=this.i(C)&65535,he=x.i(k)>>>16,Tt=x.i(k)&65535;I[2*C+2*k]+=A*Tt,_(I,2*C+2*k),I[2*C+2*k+1]+=D*Tt,_(I,2*C+2*k+1),I[2*C+2*k+1]+=A*he,_(I,2*C+2*k+1),I[2*C+2*k+2]+=D*he,_(I,2*C+2*k+2)}for(C=0;C<v;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=v;C<2*v;C++)I[C]=0;return new o(I,0)};function _(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function T(x,v){this.g=x,this.h=v}function b(x,v){if(E(v))throw Error("division by zero");if(E(x))return new T(f,f);if(P(x))return v=b(R(x),v),new T(R(v.g),R(v.h));if(P(v))return v=b(x,R(v)),new T(R(v.g),v.h);if(30<x.g.length){if(P(x)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var I=p,C=v;0>=C.l(x);)I=O(I),C=O(C);var k=M(I,1),D=M(C,1);for(C=M(C,2),I=M(I,2);!E(C);){var A=D.add(C);0>=A.l(x)&&(k=k.add(I),D=A),C=M(C,1),I=M(I,1)}return v=S(x,k.j(v)),new T(k,v)}for(k=f;0<=x.l(v);){for(I=Math.max(1,Math.floor(x.m()/v.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=c(I),A=D.j(v);P(A)||0<A.l(x);)I-=C,D=c(I),A=D.j(v);E(D)&&(D=p),k=k.add(D),x=S(x,A)}return new T(k,x)}t.A=function(x){return b(this,x).h},t.and=function(x){for(var v=Math.max(this.g.length,x.g.length),I=[],C=0;C<v;C++)I[C]=this.i(C)&x.i(C);return new o(I,this.h&x.h)},t.or=function(x){for(var v=Math.max(this.g.length,x.g.length),I=[],C=0;C<v;C++)I[C]=this.i(C)|x.i(C);return new o(I,this.h|x.h)},t.xor=function(x){for(var v=Math.max(this.g.length,x.g.length),I=[],C=0;C<v;C++)I[C]=this.i(C)^x.i(C);return new o(I,this.h^x.h)};function O(x){for(var v=x.g.length+1,I=[],C=0;C<v;C++)I[C]=x.i(C)<<1|x.i(C-1)>>>31;return new o(I,x.h)}function M(x,v){var I=v>>5;v%=32;for(var C=x.g.length-I,k=[],D=0;D<C;D++)k[D]=0<v?x.i(D+I)>>>v|x.i(D+I+1)<<32-v:x.i(D+I);return new o(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,di=o}).apply(typeof Qv<"u"?Qv:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nS,To,rS,Jl,_f,iS,sS,oS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var V=l[w];if(!(V in m))break e;m=m[V]}l=l[l.length-1],w=m[l],h=h(w),h!=w&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,w=!1,V={next:function(){if(!w&&m<l.length){var L=m++;return{value:h(L,l[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),l.apply(h,V)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function g(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function E(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(w,V,L){for(var B=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)B[fe-2]=arguments[fe];return h.prototype[V].apply(w,B)}}function P(l){const h=l.length;if(0<h){const m=Array(h);for(let w=0;w<h;w++)m[w]=l[w];return m}return[]}function R(l,h){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(u(w)){const V=l.length||0,L=w.length||0;l.length=V+L;for(let B=0;B<L;B++)l[V+B]=w[B]}else l.push(w)}}class S{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var O=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function M(l,h,m){for(const w in l)h.call(m,l[w],w,l)}function x(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function v(l){const h={};for(const m in l)h[m]=l[m];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let m,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(m in w)l[m]=w[m];for(let L=0;L<I.length;L++)m=I[L],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function k(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function D(l){a.setTimeout(()=>{throw l},0)}function A(){var l=H;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class he{constructor(){this.h=this.g=null}add(h,m){const w=Tt.get();w.set(h,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Tt=new S(()=>new Te,l=>l.reset());class Te{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,z=!1,H=new he,J=()=>{const l=a.Promise.resolve(void 0);ze=()=>{l.then(Q)}};var Q=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){D(m)}var h=Tt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Ot(l,h){if(_e.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(O){e:{try{b(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ht[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ot.aa.h.call(this)}}E(Ot,_e);var ht={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),Wc=0;function Ws(l,h,m,w,V){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!w,this.ha=V,this.key=++Wc,this.da=this.fa=!1}function Tn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ft(l){this.src=l,this.g={},this.h=0}Ft.prototype.add=function(l,h,m,w,V){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var B=$c(l,h,w,V);return-1<B?(h=l[B],m||(h.fa=!1)):(h=new Ws(h,this.src,L,!!w,V),h.fa=m,l.push(h)),h};function Ha(l,h){var m=h.type;if(m in l.g){var w=l.g[m],V=Array.prototype.indexOf.call(w,h,void 0),L;(L=0<=V)&&Array.prototype.splice.call(w,V,1),L&&(Tn(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function $c(l,h,m,w){for(var V=0;V<l.length;++V){var L=l[V];if(!L.da&&L.listener==h&&L.capture==!!m&&L.ha==w)return V}return-1}var Hc="closure_lm_"+(1e6*Math.random()|0),Gc={};function sg(l,h,m,w,V){if(Array.isArray(h)){for(var L=0;L<h.length;L++)sg(l,h[L],m,w,V);return null}return m=lg(m),l&&l[jt]?l.K(h,m,c(w)?!!w.capture:!1,V):Kx(l,h,m,!1,w,V)}function Kx(l,h,m,w,V,L){if(!h)throw Error("Invalid event type");var B=c(V)?!!V.capture:!!V,fe=Kc(l);if(fe||(l[Hc]=fe=new Ft(l)),m=fe.add(h,m,w,B,L),m.proxy)return m;if(w=Qx(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)Mt||(V=B),V===void 0&&(V=!1),l.addEventListener(h.toString(),w,V);else if(l.attachEvent)l.attachEvent(ag(h.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Qx(){function l(m){return h.call(l.src,l.listener,m)}const h=Xx;return l}function og(l,h,m,w,V){if(Array.isArray(h))for(var L=0;L<h.length;L++)og(l,h[L],m,w,V);else w=c(w)?!!w.capture:!!w,m=lg(m),l&&l[jt]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],m=$c(L,m,w,V),-1<m&&(Tn(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=Kc(l))&&(h=l.g[h.toString()],l=-1,h&&(l=$c(h,m,w,V)),(m=-1<l?h[l]:null)&&qc(m))}function qc(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[jt])Ha(h.i,l);else{var m=l.type,w=l.proxy;h.removeEventListener?h.removeEventListener(m,w,l.capture):h.detachEvent?h.detachEvent(ag(m),w):h.addListener&&h.removeListener&&h.removeListener(w),(m=Kc(h))?(Ha(m,l),m.h==0&&(m.src=null,h[Hc]=null)):Tn(l)}}}function ag(l){return l in Gc?Gc[l]:Gc[l]="on"+l}function Xx(l,h){if(l.da)l=!0;else{h=new Ot(h,this);var m=l.listener,w=l.ha||l.src;l.fa&&qc(l),l=m.call(w,h)}return l}function Kc(l){return l=l[Hc],l instanceof Ft?l:null}var Qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function lg(l){return typeof l=="function"?l:(l[Qc]||(l[Qc]=function(h){return l.handleEvent(h)}),l[Qc])}function et(){se.call(this),this.i=new Ft(this),this.M=this,this.F=null}E(et,se),et.prototype[jt]=!0,et.prototype.removeEventListener=function(l,h,m,w){og(this,l,h,m,w)};function ft(l,h){var m,w=l.F;if(w)for(m=[];w;w=w.F)m.push(w);if(l=l.M,w=h.type||h,typeof h=="string")h=new _e(h,l);else if(h instanceof _e)h.target=h.target||l;else{var V=h;h=new _e(w,l),C(h,V)}if(V=!0,m)for(var L=m.length-1;0<=L;L--){var B=h.g=m[L];V=Ga(B,w,!0,h)&&V}if(B=h.g=l,V=Ga(B,w,!0,h)&&V,V=Ga(B,w,!1,h)&&V,m)for(L=0;L<m.length;L++)B=h.g=m[L],V=Ga(B,w,!1,h)&&V}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],w=0;w<m.length;w++)Tn(m[w]);delete l.g[h],l.h--}}this.F=null},et.prototype.K=function(l,h,m,w){return this.i.add(String(l),h,!1,m,w)},et.prototype.L=function(l,h,m,w){return this.i.add(String(l),h,!0,m,w)};function Ga(l,h,m,w){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,L=0;L<h.length;++L){var B=h[L];if(B&&!B.da&&B.capture==m){var fe=B.listener,Ge=B.ha||B.src;B.fa&&Ha(l.i,B),V=fe.call(Ge,w)!==!1&&V}}return V&&!w.defaultPrevented}function ug(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function cg(l){l.g=ug(()=>{l.g=null,l.i&&(l.i=!1,cg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Yx extends se{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(l){se.call(this),this.h=l,this.g={}}E($s,se);var dg=[];function hg(l){M(l.g,function(h,m){this.g.hasOwnProperty(m)&&qc(h)},l),l.g={}}$s.prototype.N=function(){$s.aa.N.call(this),hg(this)},$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xc=a.JSON.stringify,Jx=a.JSON.parse,Zx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Yc(){}Yc.prototype.h=null;function fg(l){return l.h||(l.h=l.i())}function pg(){}var Hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jc(){_e.call(this,"d")}E(Jc,_e);function Zc(){_e.call(this,"c")}E(Zc,_e);var $r={},mg=null;function qa(){return mg=mg||new et}$r.La="serverreachability";function gg(l){_e.call(this,$r.La,l)}E(gg,_e);function Gs(l){const h=qa();ft(h,new gg(h))}$r.STAT_EVENT="statevent";function yg(l,h){_e.call(this,$r.STAT_EVENT,l),this.stat=h}E(yg,_e);function pt(l){const h=qa();ft(h,new yg(h,l))}$r.Ma="timingevent";function vg(l,h){_e.call(this,$r.Ma,l),this.size=h}E(vg,_e);function qs(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function eI(l,h,m,w,V,L){l.info(function(){if(l.g)if(L)for(var B="",fe=L.split("&"),Ge=0;Ge<fe.length;Ge++){var ae=fe[Ge].split("=");if(1<ae.length){var tt=ae[0];ae=ae[1];var nt=tt.split("_");B=2<=nt.length&&nt[1]=="type"?B+(tt+"="+ae+"&"):B+(tt+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+h+`
`+m+`
`+B})}function tI(l,h,m,w,V,L,B){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+h+`
`+m+`
`+L+" "+B})}function bi(l,h,m,w){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+rI(l,m)+(w?" "+w:"")})}function nI(l,h){l.info(function(){return"TIMEOUT: "+h})}Ks.prototype.info=function(){};function rI(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var w=m[l];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<V.length;B++)V[B]=""}}}}return Xc(m)}catch{return h}}var Ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_g={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ed;function Qa(){}E(Qa,Yc),Qa.prototype.g=function(){return new XMLHttpRequest},Qa.prototype.i=function(){return{}},ed=new Qa;function Jn(l,h,m,w){this.j=l,this.i=h,this.l=m,this.R=w||1,this.U=new $s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wg}function wg(){this.i=null,this.g="",this.h=!1}var Tg={},td={};function nd(l,h,m){l.L=1,l.v=Za(En(h)),l.m=m,l.P=!0,Eg(l,null)}function Eg(l,h){l.F=Date.now(),Xa(l),l.A=En(l.v);var m=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Mg(m.i,"t",w),l.C=0,m=l.j.J,l.h=new wg,l.g=ey(l.j,m?h:null,!l.m),0<l.O&&(l.M=new Yx(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,w=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(dg[0]=V.toString()),V=dg);for(var L=0;L<V.length;L++){var B=sg(m,V[L],w||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Gs(),eI(l.i,l.u,l.A,l.l,l.R,l.m)}Jn.prototype.ca=function(l){l=l.target;const h=this.M;h&&Sn(l)==3?h.j():this.Y(l)},Jn.prototype.Y=function(l){try{if(l==this.g)e:{const nt=Sn(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Wg(this.g)))){this.J||nt!=4||h==7||(h==8||0>=Vi?Gs(3):Gs(2)),rd(this);var m=this.g.Z();this.X=m;t:if(Sg(this)){var w=Wg(this.g);l="";var V=w.length,L=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),Qs(this);var B="";break t}this.h.i=new a.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,l+=this.h.i.decode(w[h],{stream:!(L&&h==V-1)});w.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,tI(this.i,this.u,this.A,this.l,this.R,nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ge=this.g;if((fe=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(fe)){var ae=fe;break t}}ae=null}if(m=ae)bi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,id(this,m);else{this.o=!1,this.s=3,pt(12),Hr(this),Qs(this);break e}}if(this.P){m=!0;let Yt;for(;!this.J&&this.C<B.length;)if(Yt=iI(this,B),Yt==td){nt==4&&(this.s=4,pt(14),m=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Tg){this.s=4,pt(15),bi(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else bi(this.i,this.l,Yt,null),id(this,Yt);if(Sg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||B.length!=0||this.h.h||(this.s=1,pt(16),m=!1),this.o=this.o&&m,!m)bi(this.i,this.l,B,"[Invalid Chunked Response]"),Hr(this),Qs(this);else if(0<B.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),cd(tt),tt.M=!0,pt(11))}}else bi(this.i,this.l,B,null),id(this,B);nt==4&&Hr(this),this.o&&!this.J&&(nt==4?Xg(this.j,this):(this.o=!1,Xa(this)))}else TI(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Hr(this),Qs(this)}}}catch{}finally{}};function Sg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function iI(l,h){var m=l.C,w=h.indexOf(`
`,m);return w==-1?td:(m=Number(h.substring(m,w)),isNaN(m)?Tg:(w+=1,w+m>h.length?td:(h=h.slice(w,w+m),l.C=w+m,h)))}Jn.prototype.cancel=function(){this.J=!0,Hr(this)};function Xa(l){l.S=Date.now()+l.I,xg(l,l.I)}function xg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=qs(p(l.ba,l),h)}function rd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Jn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(nI(this.i,this.A),this.L!=2&&(Gs(),pt(17)),Hr(this),this.s=2,Qs(this)):xg(this,this.S-l)};function Qs(l){l.j.G==0||l.J||Xg(l.j,l)}function Hr(l){rd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,hg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function id(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||sd(m.h,l))){if(!l.K&&sd(m.h,l)&&m.G==3){try{var w=m.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)sl(m),rl(m);else break e;ud(m),pt(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=qs(p(m.Za,m),6e3));if(1>=Cg(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else qr(m,11)}else if((l.K||m.g==l)&&sl(m),!_(h))for(V=m.Da.g.parse(h),h=0;h<V.length;h++){let ae=V[h];if(m.T=ae[0],ae=ae[1],m.G==2)if(ae[0]=="c"){m.K=ae[1],m.ia=ae[2];const tt=ae[3];tt!=null&&(m.la=tt,m.j.info("VER="+m.la));const nt=ae[4];nt!=null&&(m.Aa=nt,m.j.info("SVER="+m.Aa));const Vi=ae[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(w=1.5*Vi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Yt=l.g;if(Yt){const al=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var L=w.h;L.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(od(L,L.h),L.h=null))}if(w.D){const dd=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;dd&&(w.ya=dd,ge(w.I,w.D,dd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var B=l;if(w.qa=Zg(w,w.J?w.ia:null,w.W),B.K){Ag(w.h,B);var fe=B,Ge=w.L;Ge&&(fe.I=Ge),fe.B&&(rd(fe),Xa(fe)),w.g=B}else Kg(w);0<m.i.length&&il(m)}else ae[0]!="stop"&&ae[0]!="close"||qr(m,7);else m.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?qr(m,7):ld(m):ae[0]!="noop"&&m.l&&m.l.ta(ae),m.v=0)}}Gs(4)}catch{}}var sI=class{constructor(l,h){this.g=l,this.map=h}};function Ig(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Cg(l){return l.h?1:l.g?l.g.size:0}function sd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function od(l,h){l.g?l.g.add(h):l.h=h}function Ag(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Ig.prototype.cancel=function(){if(this.i=Rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Rg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return P(l.i)}function oI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,w=0;w<m;w++)h.push(l[w]);return h}h=[],m=0;for(w in l)h[m++]=l[w];return h}function aI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const w in l)h[m++]=w;return h}}}function kg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=aI(l),w=oI(l),V=w.length,L=0;L<V;L++)h.call(void 0,w[L],m&&m[L],l)}var bg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var w=l[m].indexOf("="),V=null;if(0<=w){var L=l[m].substring(0,w);V=l[m].substring(w+1)}else L=l[m];h(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Gr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Gr){this.h=l.h,Ya(this,l.j),this.o=l.o,this.g=l.g,Ja(this,l.s),this.l=l.l;var h=l.i,m=new Js;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Ng(this,m),this.m=l.m}else l&&(h=String(l).match(bg))?(this.h=!1,Ya(this,h[1]||"",!0),this.o=Xs(h[2]||""),this.g=Xs(h[3]||"",!0),Ja(this,h[4]),this.l=Xs(h[5]||"",!0),Ng(this,h[6]||"",!0),this.m=Xs(h[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}Gr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Ys(h,Dg,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Ys(h,Dg,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Ys(m,m.charAt(0)=="/"?dI:cI,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Ys(m,fI)),l.join("")};function En(l){return new Gr(l)}function Ya(l,h,m){l.j=m?Xs(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ja(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Ng(l,h,m){h instanceof Js?(l.i=h,pI(l.i,l.h)):(m||(h=Ys(h,hI)),l.i=new Js(h,l.h))}function ge(l,h,m){l.i.set(h,m)}function Za(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Xs(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ys(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,uI),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function uI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Dg=/[#\/\?@]/g,cI=/[#\?:]/g,dI=/[#\?]/g,hI=/[#\?@]/g,fI=/#/g;function Js(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Zn(l){l.g||(l.g=new Map,l.h=0,l.i&&lI(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Js.prototype,t.add=function(l,h){Zn(this),this.i=null,l=Ni(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function Vg(l,h){Zn(l),h=Ni(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Lg(l,h){return Zn(l),h=Ni(l,h),l.g.has(h)}t.forEach=function(l,h){Zn(this),this.g.forEach(function(m,w){m.forEach(function(V){l.call(h,V,w,this)},this)},this)},t.na=function(){Zn(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let w=0;w<h.length;w++){const V=l[w];for(let L=0;L<V.length;L++)m.push(h[w])}return m},t.V=function(l){Zn(this);let h=[];if(typeof l=="string")Lg(this,l)&&(h=h.concat(this.g.get(Ni(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return Zn(this),this.i=null,l=Ni(this,l),Lg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Mg(l,h,m){Vg(l,h),0<m.length&&(l.i=null,l.g.set(Ni(l,h),P(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var w=h[m];const L=encodeURIComponent(String(w)),B=this.V(w);for(w=0;w<B.length;w++){var V=L;B[w]!==""&&(V+="="+encodeURIComponent(String(B[w]))),l.push(V)}}return this.i=l.join("&")};function Ni(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function pI(l,h){h&&!l.j&&(Zn(l),l.i=null,l.g.forEach(function(m,w){var V=w.toLowerCase();w!=V&&(Vg(this,w),Mg(this,V,m))},l)),l.j=h}function mI(l,h){const m=new Ks;if(a.Image){const w=new Image;w.onload=g(er,m,"TestLoadImage: loaded",!0,h,w),w.onerror=g(er,m,"TestLoadImage: error",!1,h,w),w.onabort=g(er,m,"TestLoadImage: abort",!1,h,w),w.ontimeout=g(er,m,"TestLoadImage: timeout",!1,h,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else h(!1)}function gI(l,h){const m=new Ks,w=new AbortController,V=setTimeout(()=>{w.abort(),er(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:w.signal}).then(L=>{clearTimeout(V),L.ok?er(m,"TestPingServer: ok",!0,h):er(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),er(m,"TestPingServer: error",!1,h)})}function er(l,h,m,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(m)}catch{}}function yI(){this.g=new Zx}function vI(l,h,m){const w=m||"";try{kg(l,function(V,L){let B=V;c(V)&&(B=Xc(V)),h.push(w+L+"="+encodeURIComponent(B))})}catch(V){throw h.push(w+"type="+encodeURIComponent("_badmap")),V}}function el(l){this.l=l.Ub||null,this.j=l.eb||!1}E(el,Yc),el.prototype.g=function(){return new tl(this.l,this.j)},el.prototype.i=function(l){return function(){return l}}({});function tl(l,h){et.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(tl,et),t=tl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,eo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Og(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Og(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Zs(this):eo(this),this.readyState==3&&Og(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zs(this))},t.Qa=function(l){this.g&&(this.response=l,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,eo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function eo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jg(l){let h="";return M(l,function(m,w){h+=w,h+=":",h+=m,h+=`\r
`}),h}function ad(l,h,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=jg(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):ge(l,h,m))}function Ce(l){et.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ce,et);var _I=/^https?$/i,wI=["POST","PUT"];t=Ce.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ed.g(),this.v=this.o?fg(this.o):fg(ed),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){Fg(this,L);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)m.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())m.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(wI,h,void 0))||w||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of m)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zg(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Fg(this,L)}};function Fg(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ug(l),nl(l)}function Ug(l){l.A||(l.A=!0,ft(l,"complete"),ft(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ft(this,"complete"),ft(this,"abort"),nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nl(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bg(this):this.bb())},t.bb=function(){Bg(this)};function Bg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Sn(l)!=4||l.Z()!=2)){if(l.u&&Sn(l)==4)ug(l.Ea,0,l);else if(ft(l,"readystatechange"),Sn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var w;if(w=B===0){var V=String(l.D).match(bg)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),w=!_I.test(V?V.toLowerCase():"")}m=w}if(m)ft(l,"complete"),ft(l,"success");else{l.m=6;try{var L=2<Sn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Ug(l)}}finally{nl(l)}}}}function nl(l,h){if(l.g){zg(l);const m=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||ft(l,"ready");try{m.onreadystatechange=w}catch{}}}function zg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Sn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Jx(h)}};function Wg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function TI(l){const h={};l=(l.g&&2<=Sn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(_(l[w]))continue;var m=k(l[w]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=h[V]||[];h[V]=L,L.push(m)}x(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function $g(l){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,l),this.cb=to("retryDelaySeedMs",1e4,l),this.Wa=to("forwardChannelMaxRetries",2,l),this.wa=to("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ig(l&&l.concurrentRequestLimit),this.Da=new yI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$g.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,w){pt(0),this.W=l,this.H=h||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Zg(this,null,this.W),il(this)};function ld(l){if(Hg(l),l.G==3){var h=l.U++,m=En(l.I);if(ge(m,"SID",l.K),ge(m,"RID",h),ge(m,"TYPE","terminate"),no(l,m),h=new Jn(l,l.j,h),h.L=2,h.v=Za(En(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=ey(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Xa(h)}Jg(l)}function rl(l){l.g&&(cd(l),l.g.cancel(),l.g=null)}function Hg(l){rl(l),l.u&&(a.clearTimeout(l.u),l.u=null),sl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function il(l){if(!Pg(l.h)&&!l.s){l.s=!0;var h=l.Ga;ze||J(),z||(ze(),z=!0),H.add(h,l),l.B=0}}function EI(l,h){return Cg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=qs(p(l.Ga,l,h),Yg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Jn(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=qg(this,V,h),m=En(this.I),ge(m,"RID",l),ge(m,"CVER",22),this.D&&ge(m,"X-HTTP-Session-Id",this.D),no(this,m),L&&(this.O?h="headers="+encodeURIComponent(String(jg(L)))+"&"+h:this.m&&ad(m,this.m,L)),od(this.h,V),this.Ua&&ge(m,"TYPE","init"),this.P?(ge(m,"$req",h),ge(m,"SID","null"),V.T=!0,nd(V,m,null)):nd(V,m,h),this.G=2}}else this.G==3&&(l?Gg(this,l):this.i.length==0||Pg(this.h)||Gg(this))};function Gg(l,h){var m;h?m=h.l:m=l.U++;const w=En(l.I);ge(w,"SID",l.K),ge(w,"RID",m),ge(w,"AID",l.T),no(l,w),l.m&&l.o&&ad(w,l.m,l.o),m=new Jn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=qg(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),od(l.h,m),nd(m,w,h)}function no(l,h){l.H&&M(l.H,function(m,w){ge(h,w,m)}),l.l&&kg({},function(m,w){ge(h,w,m)})}function qg(l,h,m){m=Math.min(l.i.length,m);var w=l.l?p(l.l.Na,l.l,l):null;e:{var V=l.i;let L=-1;for(;;){const B=["count="+m];L==-1?0<m?(L=V[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let fe=!0;for(let Ge=0;Ge<m;Ge++){let ae=V[Ge].g;const tt=V[Ge].map;if(ae-=L,0>ae)L=Math.max(0,V[Ge].g-100),fe=!1;else try{vI(tt,B,"req"+ae+"_")}catch{w&&w(tt)}}if(fe){w=B.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,w}function Kg(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ze||J(),z||(ze(),z=!0),H.add(h,l),l.v=0}}function ud(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=qs(p(l.Fa,l),Yg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Qg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=qs(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),rl(this),Qg(this))};function cd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Qg(l){l.g=new Jn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=En(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),no(l,h),l.m&&l.o&&ad(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Za(En(h)),m.m=null,m.P=!0,Eg(m,l)}t.Za=function(){this.C!=null&&(this.C=null,rl(this),ud(this),pt(19))};function sl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Xg(l,h){var m=null;if(l.g==h){sl(l),cd(l),l.g=null;var w=2}else if(sd(l.h,h))m=h.D,Ag(l.h,h),w=1;else return;if(l.G!=0){if(h.o)if(w==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var V=l.B;w=qa(),ft(w,new vg(w,m)),il(l)}else Kg(l);else if(V=h.s,V==3||V==0&&0<h.X||!(w==1&&EI(l,h)||w==2&&ud(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),V){case 1:qr(l,5);break;case 4:qr(l,10);break;case 3:qr(l,6);break;default:qr(l,2)}}}function Yg(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function qr(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),w=l.Xa;const V=!w;w=new Gr(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ya(w,"https"),Za(w),V?mI(w.toString(),m):gI(w.toString(),m)}else pt(2);l.G=0,l.l&&l.l.sa(h),Jg(l),Hg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Jg(l){if(l.G=0,l.ka=[],l.l){const h=Rg(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ka,h),R(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function Zg(l,h,m){var w=m instanceof Gr?En(m):new Gr(m);if(w.g!="")h&&(w.g=h+"."+w.g),Ja(w,w.s);else{var V=a.location;w=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var L=new Gr(null);w&&Ya(L,w),h&&(L.g=h),V&&Ja(L,V),m&&(L.l=m),w=L}return m=l.D,h=l.ya,m&&h&&ge(w,m,h),ge(w,"VER",l.la),no(l,w),w}function ey(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ce(new el({eb:m})):new Ce(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ty(){}t=ty.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ol(){}ol.prototype.g=function(l,h){return new At(l,h)};function At(l,h){et.call(this),this.g=new $g(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Di(this)}E(At,et),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ld(this.g)},At.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Xc(l),l=m);h.i.push(new sI(h.Ya++,l)),h.G==3&&il(h)},At.prototype.N=function(){this.g.l=null,delete this.j,ld(this.g),delete this.g,At.aa.N.call(this)};function ny(l){Jc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(ny,Jc);function ry(){Zc.call(this),this.status=1}E(ry,Zc);function Di(l){this.g=l}E(Di,ty),Di.prototype.ua=function(){ft(this.g,"a")},Di.prototype.ta=function(l){ft(this.g,new ny(l))},Di.prototype.sa=function(l){ft(this.g,new ry)},Di.prototype.ra=function(){ft(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,oS=function(){return new ol},sS=function(){return qa()},iS=$r,_f={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ka.NO_ERROR=0,Ka.TIMEOUT=8,Ka.HTTP_ERROR=6,Jl=Ka,_g.COMPLETE="complete",rS=_g,pg.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",et.prototype.listen=et.prototype.K,To=pg,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,nS=Ce}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const Xv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Gp("@firebase/firestore");function ho(){return wi.logLevel}function $(t,...e){if(wi.logLevel<=re.DEBUG){const n=e.map(om);wi.debug(`Firestore (${Fs}): ${t}`,...n)}}function Gn(t,...e){if(wi.logLevel<=re.ERROR){const n=e.map(om);wi.error(`Firestore (${Fs}): ${t}`,...n)}}function ws(t,...e){if(wi.logLevel<=re.WARN){const n=e.map(om);wi.warn(`Firestore (${Fs}): ${t}`,...n)}}function om(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function de(t,e){t||Y()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class xN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IN{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new aS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new at(e)}}class PN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new PN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new AN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Be(0,0))}static max(){return new Z(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return da.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof da?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends da{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const bN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends da{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return bN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Re.fromString(e))}static fromName(e){return new q(Re.fromString(e).popFirst(5))}static empty(){return new q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Re(e.slice()))}}function NN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Dr(i,q.empty(),e)}function DN(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(Z.min(),q.empty(),-1)}static max(){return new Dr(Z.max(),q.empty(),-1)}}function VN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==LN)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ON(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ma(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}am.oe=-1;function Ic(t){return t==null}function Fu(t){return t===0&&1/t==-1/0}function jN(t){return typeof t=="number"&&Number.isInteger(t)&&!Fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Al(this.root,e,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Al(this.root,e,this.comparator,!0)}}class Al{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jv(this.data.getIterator())}getIteratorFrom(e){return new Jv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Jv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new rn([])}unionWith(e){let n=new Ye(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cS("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const FN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(de(!!t),typeof t=="string"){let e=0;const n=FN.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ti(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function um(t){const e=t.mapValue.fields.__previous_value__;return lm(e)?um(e):e}function ha(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class fa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl={mapValue:{}};function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lm(t)?4:zN(t)?9007199254740991:BN(t)?10:11:Y()}function _n(t,e){if(t===e)return!0;const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),a=be(s.doubleValue);return o===a?Fu(o)===Fu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Yv(o)!==Yv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!_n(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function pa(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=Ei(t),r=Ei(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Zv(t.timestampValue,e.timestampValue);case 4:return Zv(ha(t),ha(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ti(s),u=Ti(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ue(a[c],u[c]);if(d!==0)return d}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(be(s.latitude),be(o.latitude));return a!==0?a:ue(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return e0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(u=p.value)===null||u===void 0?void 0:u.arrayValue,P=ue(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:e0(g,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Rl.mapValue&&o===Rl.mapValue)return 0;if(s===Rl.mapValue)return 1;if(o===Rl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=ue(u[f],d[f]);if(p!==0)return p;const g=Es(a[u[f]],c[d[f]]);if(g!==0)return g}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Zv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Vr(t),r=Vr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function e0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Es(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Ss(t){return wf(t)}function wf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wf(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Tf(t){return!!t&&"integerValue"in t}function cm(t){return!!t&&"arrayValue"in t}function t0(t){return!!t&&"nullValue"in t}function n0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zl(t){return!!t&&"mapValue"in t}function BN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Mo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Us(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(Mo(this.value))}}function dS(t){const e=[];return Us(t.fields,(n,r)=>{const i=new Qe([n]);if(Zl(r)){const s=dS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Z.min(),Z.min(),Z.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Z.min(),Z.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Z.min(),Z.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.position=e,this.inclusive=n}}function r0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n="asc"){this.field=e,this.dir=n}}function WN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{}class Fe extends hS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HN(e,n,r):n==="array-contains"?new KN(e,r):n==="in"?new QN(e,r):n==="not-in"?new XN(e,r):n==="array-contains-any"?new YN(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GN(e,r):new qN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends hS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return fS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fS(t){return t.op==="and"}function pS(t){return $N(t)&&fS(t)}function $N(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function Ef(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(pS(t))return t.filters.map(e=>Ef(e)).join(",");{const e=t.filters.map(n=>Ef(n)).join(",");return`${t.op}(${e})`}}function mS(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&mS(o,i.filters[a]),!0):!1}(t,e):void Y()}function gS(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(gS).join(" ,")+"}"}(t):"Filter"}class HN extends Fe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class GN extends Fe{constructor(e,n){super(e,"in",n),this.keys=yS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qN extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=yS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class KN extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cm(n)&&pa(n.arrayValue,this.value)}}class QN extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pa(this.value.arrayValue,n)}}class XN extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pa(this.value.arrayValue,n)}}class YN extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function s0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JN(t,e,n,r,i,s,o)}function dm(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ef(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ue=n}return e.ue}function hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i0(t.startAt,e.startAt)&&i0(t.endAt,e.endAt)}function Sf(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZN(t,e,n,r,i,s,o,a){return new Pc(t,e,n,r,i,s,o,a)}function fm(t){return new Pc(t)}function o0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eD(t){return t.collectionGroup!==null}function Oo(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Bu(s,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new Bu(Qe.keyField(),r))}return e.ce}function mn(t){const e=ee(t);return e.le||(e.le=tD(e,Oo(t))),e.le}function tD(t,e){if(t.limitType==="F")return s0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bu(i.field,s)});const n=t.endAt?new Uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uu(t.startAt.position,t.startAt.inclusive):null;return s0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xf(t,e,n){return new Pc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return hm(mn(t),mn(e))&&t.limitType===e.limitType}function vS(t){return`${dm(mn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gS(i)).join(", ")}]`),Ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ss(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=r0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Oo(r),i)||r.endAt&&!function(o,a,u){const c=r0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Oo(r),i))}(t,e)}function nD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _S(t){return(e,n)=>{let r=!1;for(const i of Oo(t)){const s=rD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rD(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Es(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Us(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new Pe(q.comparator);function qn(){return iD}const wS=new Pe(q.comparator);function Eo(...t){let e=wS;for(const n of t)e=e.insert(n.key,n);return e}function TS(t){let e=wS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return jo()}function ES(){return jo()}function jo(){return new Bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const sD=new Pe(q.comparator),oD=new Ye(q.comparator);function ne(...t){let e=oD;for(const n of t)e=e.add(n);return e}const aD=new Ye(ue);function lD(){return aD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fu(e)?"-0":e}}function SS(t){return{integerValue:""+t}}function uD(t,e){return jN(e)?SS(e):pm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this._=void 0}}function cD(t,e,n){return t instanceof zu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lm(s)&&(s=um(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ma?IS(t,e):t instanceof ga?PS(t,e):function(i,s){const o=xS(i,s),a=a0(o)+a0(i.Pe);return Tf(o)&&Tf(i.Pe)?SS(a):pm(i.serializer,a)}(t,e)}function dD(t,e,n){return t instanceof ma?IS(t,e):t instanceof ga?PS(t,e):n}function xS(t,e){return t instanceof Wu?function(r){return Tf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zu extends Rc{}class ma extends Rc{constructor(e){super(),this.elements=e}}function IS(t,e){const n=CS(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class ga extends Rc{constructor(e){super(),this.elements=e}}function PS(t,e){let n=CS(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Wu extends Rc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a0(t){return be(t.integerValue||t.doubleValue)}function CS(t){return cm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ma&&i instanceof ma||r instanceof ga&&i instanceof ga?Ts(r.elements,i.elements,_n):r instanceof Wu&&i instanceof Wu?_n(r.Pe,i.Pe):r instanceof zu&&i instanceof zu}(t.transform,e.transform)}class fD{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kc{}function AS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kS(t.key,Mn.none()):new Oa(t.key,t.data,Mn.none());{const n=t.data,r=$t.empty();let i=new Ye(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pi(t.key,r,new rn(i.toArray()),Mn.none())}}function pD(t,e,n){t instanceof Oa?function(i,s,o){const a=i.value.clone(),u=u0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(i,s,o){if(!eu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=u0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(RS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof Oa?function(s,o,a,u){if(!eu(s.precondition,o))return a;const c=s.value.clone(),d=c0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pi?function(s,o,a,u){if(!eu(s.precondition,o))return a;const c=c0(s.fieldTransforms,u,o),d=o.data;return d.setAll(RS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return eu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xS(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function l0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ts(r,i,(s,o)=>hD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends kc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends kc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u0(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,dD(o,a,n[i]))}return r}function c0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cD(s,o,e))}return r}class kS extends kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gD extends kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ES();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=AS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>l0(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>l0(n,r))}}class mm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return sD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ie;function wD(t){switch(t){default:return Y();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function bS(t){if(t===void 0)return Gn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Le.OK:return F.OK;case Le.CANCELLED:return F.CANCELLED;case Le.UNKNOWN:return F.UNKNOWN;case Le.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Le.INTERNAL:return F.INTERNAL;case Le.UNAVAILABLE:return F.UNAVAILABLE;case Le.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Le.NOT_FOUND:return F.NOT_FOUND;case Le.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Le.ABORTED:return F.ABORTED;case Le.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Le.DATA_LOSS:return F.DATA_LOSS;default:return Y()}}(ie=Le||(Le={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=new di([4294967295,4294967295],0);function d0(t){const e=TD().encode(t),n=new tS;return n.update(e),new Uint8Array(n.digest())}function h0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new di([n,r],0),new di([i,s],0)]}class gm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=di.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(di.fromNumber(r)));return i.compare(ED)===1&&(i=new di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=d0(e),[r,i]=h0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=d0(e),[r,i]=h0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bc(Z.min(),i,new Pe(ue),qn(),ne())}}class ja{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ja(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class NS{constructor(e,n){this.targetId=e,this.me=n}}class DS{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f0{constructor(){this.fe=0,this.ge=m0(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new ja(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=m0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SD{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=p0(),this.Qe=new Pe(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sf(s))if(r===0){const o=new q(s.path);this.Ue(n,o,ut.newNoDocument(o,Z.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ti(r).toUint8Array()}catch(u){if(u instanceof cS)return ws("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new gm(o,i,s)}catch(u){return ws(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Sf(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bc(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=p0(),this.Qe=new Pe(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p0(){return new Pe(q.comparator)}function m0(){return new Pe(q.comparator)}const xD={asc:"ASCENDING",desc:"DESCENDING"},ID={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PD={and:"AND",or:"OR"};class CD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function If(t,e){return t.useProto3Json||Ic(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AD(t,e){return $u(t,e.toTimestamp())}function gn(t){return de(!!t),Z.fromTimestamp(function(n){const r=Vr(n);return new Be(r.seconds,r.nanos)}(t))}function ym(t,e){return Pf(t,e).canonicalString()}function Pf(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function LS(t){const e=Re.fromString(t);return de(US(e)),e}function Cf(t,e){return ym(t.databaseId,e.path)}function Gd(t,e){const n=LS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(OS(n))}function MS(t,e){return ym(t.databaseId,e)}function RD(t){const e=LS(t);return e.length===4?Re.emptyPath():OS(e)}function Af(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OS(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g0(t,e,n){return{name:Cf(t,e),fields:n.value.mapValue.fields}}function kD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string"),Ze.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ze.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?F.UNKNOWN:bS(c.code);return new G(d,c.message||"")}(o);n=new DS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gd(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):Z.min(),a=new $t({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new tu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gd(t,r.document),s=r.readTime?gn(r.readTime):Z.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gd(t,r.document),s=r.removedTargetIds||[];n=new tu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _D(i,s),a=r.targetId;n=new NS(a,o)}}return n}function bD(t,e){let n;if(e instanceof Oa)n={update:g0(t,e.key,e.value)};else if(e instanceof kS)n={delete:Cf(t,e.key)};else if(e instanceof Pi)n={update:g0(t,e.key,e.data),updateMask:UD(e.fieldMask)};else{if(!(e instanceof gD))return Y();n={verify:Cf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof zu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function ND(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(Z.min())&&(o=gn(s)),new fD(o,i.transformResults||[])}(n,e))):[]}function DD(t,e){return{documents:[MS(t,e.path)]}}function VD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=MS(t,i);const s=function(c){if(c.length!==0)return FS(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:Oi(p.field),direction:OD(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=If(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function LD(t){let e=RD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=jS(f);return p instanceof wn&&pS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new Bu(ji(E.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Ic(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new Uu(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new Uu(g,p)}(n.endAt)),ZN(e,i,o,s,a,"F",u,c)}function MD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ji(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ji(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ji(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ji(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>jS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function OD(t){return xD[t]}function jD(t){return ID[t]}function FD(t){return PD[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function ji(t){return Qe.fromServerFormat(t.fieldPath)}function FS(t){return t instanceof Fe?function(n){if(n.op==="=="){if(n0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(t0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(t0(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:jD(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>FS(i));return r.length===1?r[0]:{compositeFilter:{op:FD(n.op),filters:r}}}(t):Y()}function UD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function US(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.ct=e}}function zD(t){const e=LD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.un=new $D}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Dr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class $D{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xs(0)}static kn(){return new xs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,rn.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Eo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qn();const o=jo(),a=function(){return jo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Pi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Fo(d.mutation,c,d.mutation.getFieldMask(),Be.now())):o.set(c.key,rn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new GD(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=jo();let i=new Pe((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||rn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||ne()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=ES();d.forEach(p=>{if(!s.has(p)){const g=AS(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(oi());let a=-1,u=s;return o.next(c=>j.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:a,changes:TS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Eo();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,p){return new Pc(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ut.newInvalidDocument(d)))});let a=Eo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Fo(d.mutation,c,rn.empty(),Be.now()),Ac(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:zD(i.bundledQuery),readTime:gn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.overlays=new Pe(q.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=oi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vD(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.Tr=new Ye(We.Er),this.dr=new Ye(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Re([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Re([])),r=new We(n,e),i=new We(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(We.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new We(new q(s),0);let a=new Ye(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.Mr=e,this.docs=function(){return new Pe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VN(DN(d),r)<=0||(i.has(d.key)||Ac(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZD(this)}getSize(e){return j.resolve(this.size)}}class ZD extends HD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e){this.persistence=e,this.Nr=new Bs(n=>dm(n),hm),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vm,this.targetCount=0,this.kr=xs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n){this.qr={},this.overlays={},this.Qr=new am(0),this.Kr=!1,this.Kr=!0,this.$r=new XD,this.referenceDelegate=e(this),this.Ur=new eV(this),this.indexManager=new WD,this.remoteDocumentCache=function(i){return new JD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new BD(n),this.Gr=new KD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new YD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new nV(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nV extends MN{constructor(e){super(),this.currentSequenceNumber=e}}class _m{constructor(e){this.persistence=e,this.Jr=new vm,this.Yr=null}static Zr(e){return new _m(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ok()?8:ON(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rV;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ho()<=re.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(ho()<=re.DEBUG&&$("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ho()<=re.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):j.resolve())}Yi(e,n){if(o0(n))return j.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xf(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,xf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return o0(n)||i.isEqual(Z.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(ho()<=re.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,o,n,NN(i,-1)).next(a=>a))})}ts(e,n){let r=new Ye(_S(e));return n.forEach((i,s)=>{Ac(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ho()<=re.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Dr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Pe(ue),this._s=new Bs(s=>dm(s),hm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oV(t,e,n,r){return new sV(t,e,n,r)}async function BS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function aV(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let g=j.resolve();return p.forEach(E=>{g=g.next(()=>d.getEntry(u,E)).next(P=>{const R=c.docVersions.get(E);de(R!==null),P.version.compareTo(R)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lV(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Ze.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(f,g),function(P,R,S){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,g,d)&&a.push(n.Ur.updateTargetData(s,g))});let u=qn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(uV(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Z.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function uV(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function cV(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dV(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Rf(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ma(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function y0(t,e,n){const r=ee(t);let i=Z.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ee(u),p=f._s.get(d);return p!==void 0?j.resolve(f.os.get(p)):f.Ur.getTargetData(c,d)}(r,o,mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ne())).next(a=>(hV(r,nD(e),a),{documents:a,Ts:s})))}function hV(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class v0{constructor(){this.activeTargetIds=lD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fV{constructor(){this.so=new v0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new v0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl=null;function qd(){return kl===null?kl=function(){return 268435456+Math.round(2147483648*Math.random())}():kl++,"0x"+kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class yV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=qd(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>($("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ws("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=mV[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qd();return new Promise((o,a)=>{const u=new nS;u.setWithCredentials(!0),u.listenOnce(rS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Jl.NO_ERROR:const d=u.getResponseJson();$(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Jl.TIMEOUT:$(st,`RPC '${e}' ${s} timed out`),a(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const f=u.getStatus();if($(st,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const E=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(S)>=0?S:F.UNKNOWN}(g.status);a(new G(E,g.message))}else a(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(F.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(st,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);$(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=qd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oS(),a=sS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");$(st,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,g=!1;const E=new gV({Io:R=>{g?$(st,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||($(st,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),$(st,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),P=(R,S,_)=>{R.listen(S,T=>{try{_(T)}catch(b){setTimeout(()=>{throw b},0)}})};return P(f,To.EventType.OPEN,()=>{g||($(st,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),P(f,To.EventType.CLOSE,()=>{g||(g=!0,$(st,`RPC '${e}' stream ${i} transport closed`),E.So())}),P(f,To.EventType.ERROR,R=>{g||(g=!0,ws(st,`RPC '${e}' stream ${i} transport errored:`,R),E.So(new G(F.UNAVAILABLE,"The operation could not be completed")))}),P(f,To.EventType.MESSAGE,R=>{var S;if(!g){const _=R.data[0];de(!!_);const T=_,b=T.error||((S=T[0])===null||S===void 0?void 0:S.error);if(b){$(st,`RPC '${e}' stream ${i} received error:`,b);const O=b.status;let M=function(I){const C=Le[I];if(C!==void 0)return bS(C)}(O),x=b.message;M===void 0&&(M=F.INTERNAL,x="Unknown error status: "+O+" with message "+b.message),g=!0,E.So(new G(M,x)),f.close()}else $(st,`RPC '${e}' stream ${i} received:`,_),E.bo(_)}}),P(a,iS.STAT_EVENT,R=>{R.stat===_f.PROXY?$(st,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===_f.NOPROXY&&$(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){return new CD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new WS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vV extends $S{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=kD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?gn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Af(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Sf(u)?{documents:DD(s,u)}:{query:VD(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=VS(s,o.resumeToken);const c=If(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=$u(s,o.snapshotVersion.toTimestamp());const c=If(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=MD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Af(this.serializer),n.removeTarget=e,this.a_(n)}}class _V extends $S{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ND(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Af(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Pf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Pf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ci(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await Fa(c),c.q_.set("Unknown"),c.L_.delete(4),await Dc(c)}(this))})}),this.q_=new TV(r,i)}}async function Dc(t){if(Ci(t))for(const e of t.B_)await e(!0)}async function Fa(t){for(const e of t.B_)await e(!1)}function HS(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xm(n)?Sm(n):zs(n).r_()&&Em(n,e))}function Tm(t,e){const n=ee(t),r=zs(n);n.N_.delete(e),r.r_()&&GS(n,e),n.N_.size===0&&(r.r_()?r.o_():Ci(n)&&n.q_.set("Unknown"))}function Em(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zs(t).A_(e)}function GS(t,e){t.Q_.xe(e),zs(t).R_(e)}function Sm(t){t.Q_=new SD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),zs(t).start(),t.q_.v_()}function xm(t){return Ci(t)&&!zs(t).n_()&&t.N_.size>0}function Ci(t){return ee(t).L_.size===0}function qS(t){t.Q_=void 0}async function SV(t){t.q_.set("Online")}async function xV(t){t.N_.forEach((e,n)=>{Em(t,e)})}async function IV(t,e){qS(t),xm(t)?(t.q_.M_(e),Sm(t)):t.q_.set("Unknown")}async function PV(t,e,n){if(t.q_.set("Online"),e instanceof DS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hu(t,r)}else if(e instanceof tu?t.Q_.Ke(e):e instanceof NS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await zS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),GS(s,u);const f=new gr(d.target,u,c,d.sequenceNumber);Em(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Hu(t,r)}}async function Hu(t,e,n){if(!Ma(e))throw e;t.L_.add(1),await Fa(t),t.q_.set("Offline"),n||(n=()=>zS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Dc(t)})}function KS(t,e){return e().catch(n=>Hu(t,n,e))}async function Vc(t){const e=ee(t),n=Lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;CV(e);)try{const i=await cV(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,AV(e,i)}catch(i){await Hu(e,i)}QS(e)&&XS(e)}function CV(t){return Ci(t)&&t.O_.length<10}function AV(t,e){t.O_.push(e);const n=Lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function QS(t){return Ci(t)&&!Lr(t).n_()&&t.O_.length>0}function XS(t){Lr(t).start()}async function RV(t){Lr(t).p_()}async function kV(t){const e=Lr(t);for(const n of t.O_)e.m_(n.mutations)}async function bV(t,e,n){const r=t.O_.shift(),i=mm.from(r,e,n);await KS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vc(t)}async function NV(t,e){e&&Lr(t).V_&&await async function(r,i){if(function(o){return wD(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Lr(r).s_(),await KS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vc(r)}}(t,e),QS(t)&&XS(t)}async function w0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Ci(n);n.L_.add(3),await Fa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Dc(n)}async function DV(t,e){const n=ee(t);e?(n.L_.delete(2),await Dc(n)):e||(n.L_.add(2),await Fa(n),n.q_.set("Unknown"))}function zs(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new vV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:SV.bind(null,t),Ro:xV.bind(null,t),mo:IV.bind(null,t),d_:PV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xm(t)?Sm(t):t.q_.set("Unknown")):(await t.K_.stop(),qS(t))})),t.K_}function Lr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new _V(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:RV.bind(null,t),mo:NV.bind(null,t),f_:kV.bind(null,t),g_:bV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Vc(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Im(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pm(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Ma(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Eo(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(){this.W_=new Pe(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LV{constructor(){this.queries=E0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=E0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function E0(){return new Bs(t=>vS(t),Cc)}async function MV(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Pm(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Cm(n)}async function OV(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jV(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Cm(n)}function FV(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Cm(t){t.Y_.forEach(e=>{e.next()})}var kf,S0;(S0=kf||(kf={})).ea="default",S0.Cache="cache";class UV{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==kf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.key=e}}class JS{constructor(e){this.key=e}}class BV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=_S(e),this.Ra=new cs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new T0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),g=Ac(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;p&&g?p.data.isEqual(g.data)?E!==P&&(r.track({type:3,doc:g}),R=!0):this.ga(p,g)||(r.track({type:2,doc:g}),R=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),R=!0):p&&!g&&(r.track({type:1,doc:p}),R=!0,(u||c)&&(a=!0)),R&&(g?(o=o.add(g),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(g,E){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return P(g)-P(E)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Is(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new T0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new JS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new YS(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WV{constructor(e){this.key=e,this.va=!1}}class $V{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Bs(a=>vS(a),Cc),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(q.comparator),this.Na=new Map,this.La=new vm,this.Ba={},this.ka=new Map,this.qa=xs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HV(t,e,n=!0){const r=i1(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ZS(r,e,n,!0),i}async function GV(t,e){const n=i1(t);await ZS(n,e,!0,!1)}async function ZS(t,e,n,r){const i=await dV(t.localStore,mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await qV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&HS(t.remoteStore,i),a}async function qV(t,e,n,r,i){t.Ka=(f,p,g)=>async function(P,R,S,_){let T=R.view.ma(S);T.ns&&(T=await y0(P.localStore,R.query,!1).then(({documents:x})=>R.view.ma(x,T)));const b=_&&_.targetChanges.get(R.targetId),O=_&&_.targetMismatches.get(R.targetId)!=null,M=R.view.applyChanges(T,P.isPrimaryClient,b,O);return I0(P,R.targetId,M.wa),M.snapshot}(t,f,p,g);const s=await y0(t.localStore,e,!0),o=new BV(e,s.Ts),a=o.ma(s.documents),u=ja.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);I0(t,n,c.wa);const d=new zV(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function KV(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Cc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tm(r.remoteStore,i.targetId),bf(r,i.targetId)}).catch(La)):(bf(r,i.targetId),await Rf(r.localStore,i.targetId,!0))}async function QV(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tm(n.remoteStore,r.targetId))}async function XV(t,e,n){const r=rL(t);try{const i=await function(o,a){const u=ee(o),c=Be.now(),d=a.reduce((g,E)=>g.add(E.key),ne());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=qn(),P=ne();return u.cs.getEntries(g,d).next(R=>{E=R,E.forEach((S,_)=>{_.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,E)).next(R=>{f=R;const S=[];for(const _ of a){const T=mD(_,f.get(_.key).overlayedDocument);T!=null&&S.push(new Pi(_.key,T,dS(T.value.mapValue),Mn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,S,a)}).next(R=>{p=R;const S=R.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(g,R.batchId,S)})}).then(()=>({batchId:p.batchId,changes:TS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Pe(ue)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ua(r,i.changes),await Vc(r.remoteStore)}catch(i){const s=Pm(i,"Failed to persist write");n.reject(s)}}async function e1(t,e){const n=ee(t);try{const r=await lV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await Ua(n,r,e)}catch(r){await La(r)}}function x0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&Cm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YV(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Pe(q.comparator);o=o.insert(s,ut.newNoDocument(s,Z.min()));const a=ne().add(s),u=new bc(Z.min(),new Map,new Pe(ue),o,a);await e1(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Am(r)}else await Rf(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(La)}async function JV(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await aV(n.localStore,e);n1(n,r,null),t1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ua(n,i)}catch(i){await La(i)}}async function ZV(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(de(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);n1(r,e,n),t1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ua(r,i)}catch(i){await La(i)}}function t1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function n1(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||r1(t,r)})}function r1(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Am(t))}function I0(t,e,n){for(const r of n)r instanceof YS?(t.La.addReference(r.key,e),eL(t,r)):r instanceof JS?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||r1(t,r.key)):Y()}function eL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),Am(t))}function Am(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new WV(n)),t.Oa=t.Oa.insert(n,r),HS(t.remoteStore,new gr(mn(fm(n.path)),r,"TargetPurposeLimboResolution",am.oe))}}async function Ua(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=wm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.$i,g=>d.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>j.forEach(p.Ui,g=>d.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ma(f))throw f;$("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=d.os.get(p),E=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(E);d.os=d.os.insert(p,P)}}}(r.localStore,s))}async function tL(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await BS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ua(n,r.hs)}}function nL(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function i1(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=e1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YV.bind(null,e),e.Ca.d_=jV.bind(null,e.eventManager),e.Ca.$a=FV.bind(null,e.eventManager),e}function rL(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZV.bind(null,e),e}class Gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oV(this.persistence,new iV,e.initialUser,this.serializer)}Ga(e){return new tV(_m.Zr,this.serializer)}Wa(e){return new fV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gu.provider={build:()=>new Gu};class Nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tL.bind(null,this.syncEngine),await DV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LV}()}createDatastore(e){const n=Nc(e.databaseInfo.databaseId),r=function(s){return new yV(s)}(e.databaseInfo);return function(s,o,a,u){return new wV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new EV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>x0(this.syncEngine,n,0),function(){return _0.D()?new _0:new pV}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new $V(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Fa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nf.provider={build:()=>new Nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=lS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qd(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await BS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oL(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>w0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>w0(e.remoteStore,i)),t._onlineComponents=e}async function oL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Qd(t,new Gu)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Qd(t,new Gu);return t._offlineComponents}async function s1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await P0(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await P0(t,new Nf))),t._onlineComponents}function aL(t){return s1(t).then(e=>e.syncEngine)}async function lL(t){const e=await s1(t),n=e.eventManager;return n.onListen=HV.bind(null,e.syncEngine),n.onUnlisten=KV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QV.bind(null,e.syncEngine),n}function uL(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new iL({next:p=>{d.Za(),o.enqueueAndForget(()=>OV(s,f));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new UV(fm(a.path),d,{includeMetadataChanges:!0,_a:!0});return MV(s,f)}(await lL(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dL(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A0(t){if(!q.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ya(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rm(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class km{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SN;switch(r.type){case"firstParty":return new CN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=C0.get(n);r&&($("ComponentProvider","Removing Datastore"),C0.delete(n),r.terminate())}(this),Promise.resolve()}}function hL(t,e,n,r={}){var i;const s=(t=ya(t,km))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=at.MOCK_USER;else{a=ZR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(c)}t._authCredentials=new xN(new aS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bm(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new va(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class va extends bm{constructor(e,n,r){super(e,n,fm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new q(e))}withConverter(e){return new va(this.firestore,e,this._path)}}function k0(t,e,...n){if(t=Xt(t),arguments.length===1&&(e=lS.newId()),cL("doc","path",e),t instanceof km){const r=Re.fromString(e,...n);return A0(r),new qt(t,null,new q(r))}{if(!(t instanceof qt||t instanceof va))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return A0(r),new qt(t.firestore,t instanceof va?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new WS(this,"async_queue_retry"),this.Vu=()=>{const r=Kd();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ma(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Im.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Nm extends km{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new b0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b0(e),this._firestoreClient=void 0,await e}}}function fL(t,e){const n=typeof t=="object"?t:TE(),r=typeof t=="string"?t:"(default)",i=Kp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YR("firestore");s&&hL(i,...s)}return i}function a1(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pL(t),t._firestoreClient}function pL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new UN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,o1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(Ze.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=/^__.*__$/;class gL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}function u1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Mm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return qu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(u1(this.Cu)&&mL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class yL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nc(e)}Qu(e,n,r,i=!1){return new Mm({Cu:e,methodName:n,qu:r,path:Qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vL(t){const e=t._freezeSettings(),n=Nc(t._databaseId);return new yL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _L(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);f1("Data must be an object, but it was:",o,r);const a=d1(r,o);let u,c;if(s.merge)u=new rn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=wL(e,f,n);if(!o.contains(p))throw new G(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);EL(d,p)||d.push(p)}u=new rn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new gL(new $t(a),u,c)}function c1(t,e){if(h1(t=Xt(t)))return f1("Unsupported field value:",e,t),d1(t,e);if(t instanceof l1)return function(r,i){if(!u1(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=c1(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:$u(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$u(i.serializer,s)}}if(r instanceof Vm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ps)return{bytesValue:VS(i.serializer,r._byteString)};if(r instanceof qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ym(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return pm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Rm(r)}`)}(t,e)}function d1(t,e){const n={};return uS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Us(t,(r,i)=>{const s=c1(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function h1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Vm||t instanceof Ps||t instanceof qt||t instanceof l1||t instanceof Lm)}function f1(t,e,n){if(!h1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function wL(t,e,n){if((e=Xt(e))instanceof Dm)return e._internalPath;if(typeof e=="string")return p1(t,e);throw qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const TL=new RegExp("[~\\*/\\[\\]]");function p1(t,e,n){if(e.search(TL)>=0)throw qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dm(...e.split("."))._internalPath}catch{throw qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(F.INVALID_ARGUMENT,a+t+u)}function EL(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(g1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SL extends m1{data(){return super.data()}}function g1(t,e){return typeof e=="string"?p1(t,e):e instanceof Dm?e._internalPath:e._delegate._internalPath}class xL{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Us(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new Lm(s)}convertGeoPoint(e){return new Vm(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=um(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);de(US(r));const i=new fa(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class y1 extends m1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new CL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(g1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class CL extends y1{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){t=ya(t,qt);const e=ya(t.firestore,Nm);return uL(a1(e),t._key).then(n=>bL(e,t,n))}class RL extends xL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function N0(t,e,n){t=ya(t,qt);const r=ya(t.firestore,Nm),i=IL(t.converter,e,n);return kL(r,[_L(vL(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Mn.none())])}function kL(t,e){return function(r,i){const s=new Rr;return r.asyncQueue.enqueueAndForget(async()=>XV(await aL(r),i,s)),s.promise}(a1(t),e)}function bL(t,e,n){const r=n.docs.get(e._key),i=new RL(t);return new y1(t,i,e._key,r,new PL(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Fs=i})(Os),vs(new vi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Nm(new IN(r.getProvider("auth-internal")),new RN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ar(Xv,"4.7.3",e),Ar(Xv,"4.7.3","esm2017")})();var NL="firebase",DL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar(NL,DL,"app");const VL={apiKey:"AIzaSyBMOXkhqV4RXo2-Klro3lbmdKIRX4Ql6xo",authDomain:"unoverse-14e94.firebaseapp.com",projectId:"unoverse-14e94",storageBucket:"unoverse-14e94.firebasestorage.app",messagingSenderId:"261290875169",appId:"1:261290875169:web:4212294ccb1d52feaf4660",measurementId:"G-LSVQ9SYWHD"},v1=wE(VL),Xd=TN(v1),LL=new Cn,D0=fL(v1),_1=N.createContext(void 0),Ai=()=>{const t=N.useContext(_1);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},ML=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!0),s=f=>Math.floor(f/1e3)+1,o=async f=>{const p=k0(D0,"users",f.uid),g=await AL(p);if(g.exists())return g.data();{const E={uid:f.uid,email:f.email,displayName:f.displayName,photoURL:f.photoURL||void 0,level:1,xp:0,totalXP:0,completedCourses:[],badges:[],joinedAt:new Date};return await N0(p,E),E}},a=async()=>{try{const f=await k2(Xd,LL),p=await o(f.user);n(p),nn.success("Welcome to Unoverse!")}catch(f){console.error("Error signing in with Google:",f),nn.error("Failed to sign in. Please try again.")}},u=async()=>{try{await c2(Xd),n(null),nn.success("Signed out successfully")}catch(f){console.error("Error signing out:",f),nn.error("Failed to sign out")}},c=async f=>{if(!e)return;const p=e.totalXP+f,g=s(p),E=p%1e3,P={...e,xp:E,totalXP:p,level:g};try{const R=k0(D0,"users",e.uid);await N0(R,P,{merge:!0}),n(P),g>e.level?nn.success(`🎉 Level up! You're now level ${g}!`):nn.success(`+${f} XP earned!`)}catch(R){console.error("Error updating user progress:",R)}};N.useEffect(()=>u2(Xd,async p=>{if(p){const g=await o(p);n(g)}else n(null);i(!1)}),[]);const d={currentUser:e,loading:r,signInWithGoogle:a,logout:u,updateUserProgress:c};return y.jsx(_1.Provider,{value:d,children:!r&&t})},w1=N.createContext(void 0),T1=()=>{const t=N.useContext(w1);if(t===void 0)throw new Error("useProgress must be used within a ProgressProvider");return t},OL=({children:t})=>{const{currentUser:e}=Ai(),[n,r]=N.useState({});N.useEffect(()=>{if(e){const a=localStorage.getItem(`progress_${e.uid}`);a&&r(JSON.parse(a))}},[e]);const o={userProgress:n,updateProgress:(a,u,c=0)=>{e&&r(d=>{const f=d[a]||{courseId:a,completedLessons:[],currentLesson:0,score:0,timeSpent:0,lastAccessed:new Date},p={...d,[a]:{...f,completedLessons:f.completedLessons.includes(u)?f.completedLessons:[...f.completedLessons,u],score:f.score+c,lastAccessed:new Date}};return localStorage.setItem(`progress_${e.uid}`,JSON.stringify(p)),p})},getCourseProgress:a=>n[a]};return y.jsx(w1.Provider,{value:o,children:t})},Yd=({children:t})=>{const{currentUser:e,loading:n}=Ai();return n?y.jsx("div",{className:"min-h-screen flex items-center justify-center",children:y.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?y.jsx(y.Fragment,{children:t}):y.jsx(Hp,{to:"/"})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ke=(t,e)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...c},d)=>N.createElement("svg",{ref:d,...jL,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${FL(t)}`,a].join(" "),...c},[...e.map(([f,p])=>N.createElement(f,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ke("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=ke("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=ke("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=ke("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ke("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=ke("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=ke("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BL=ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=ke("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=ke("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=ke("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=ke("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=ke("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=ke("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=ke("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=ke("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=ke("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=ke("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=ke("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=ke("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=ke("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),P1=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Lc=N.createContext({}),Mc=N.createContext(null),Oc=typeof document<"u",Om=Oc?N.useLayoutEffect:N.useEffect,C1=N.createContext({strict:!1}),jm=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),YL="framerAppearId",A1="data-"+jm(YL);function JL(t,e,n,r){const{visualElement:i}=N.useContext(Lc),s=N.useContext(C1),o=N.useContext(Mc),a=N.useContext(P1).reducedMotion,u=N.useRef();r=r||s.renderer,!u.current&&r&&(u.current=r(t,{visualState:e,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=u.current;N.useInsertionEffect(()=>{c&&c.update(n,o)});const d=N.useRef(!!(n[A1]&&!window.HandoffComplete));return Om(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),N.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function Yi(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ZL(t,e,n){return N.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Yi(n)&&(n.current=r))},[e])}function wa(t){return typeof t=="string"||Array.isArray(t)}function jc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Fm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Um=["initial",...Fm];function Fc(t){return jc(t.animate)||Um.some(e=>wa(t[e]))}function R1(t){return!!(Fc(t)||t.variants)}function eM(t,e){if(Fc(t)){const{initial:n,animate:r}=t;return{initial:n===!1||wa(n)?n:void 0,animate:wa(r)?r:void 0}}return t.inherit!==!1?e:{}}function tM(t){const{initial:e,animate:n}=eM(t,N.useContext(Lc));return N.useMemo(()=>({initial:e,animate:n}),[M0(e),M0(n)])}function M0(t){return Array.isArray(t)?t.join(" "):t}const O0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ta={};for(const t in O0)Ta[t]={isEnabled:e=>O0[t].some(n=>!!e[n])};function nM(t){for(const e in t)Ta[e]={...Ta[e],...t[e]}}const Bm=N.createContext({}),k1=N.createContext({}),rM=Symbol.for("motionComponentSymbol");function iM({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&nM(t);function s(a,u){let c;const d={...N.useContext(P1),...a,layoutId:sM(a)},{isStatic:f}=d,p=tM(a),g=r(a,f);if(!f&&Oc){p.visualElement=JL(i,g,d,e);const E=N.useContext(k1),P=N.useContext(C1).strict;p.visualElement&&(c=p.visualElement.loadFeatures(d,P,t,E))}return N.createElement(Lc.Provider,{value:p},c&&p.visualElement?N.createElement(c,{visualElement:p.visualElement,...d}):null,n(i,a,ZL(g,p.visualElement,u),g,f,p.visualElement))}const o=N.forwardRef(s);return o[rM]=i,o}function sM({layoutId:t}){const e=N.useContext(Bm).id;return e&&t!==void 0?e+"-"+t:t}function oM(t){function e(r,i={}){return iM(t(r,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const aM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zm(t){return typeof t!="string"||t.includes("-")?!1:!!(aM.indexOf(t)>-1||/[A-Z]/.test(t))}const Qu={};function lM(t){Object.assign(Qu,t)}const Ba=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ri=new Set(Ba);function b1(t,{layout:e,layoutId:n}){return Ri.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Qu[t]||t==="opacity")}const Ct=t=>!!(t&&t.getVelocity),uM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cM=Ba.length;function dM(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<cM;o++){const a=Ba[o];if(t[a]!==void 0){const u=uM[a]||a;s+=`${u}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(t,r?"":s):n&&r&&(s="none"),s}const N1=t=>e=>typeof e=="string"&&e.startsWith(t),D1=N1("--"),Df=N1("var(--"),hM=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,fM=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Mr=(t,e,n)=>Math.min(Math.max(n,t),e),ki={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Uo={...ki,transform:t=>Mr(0,1,t)},bl={...ki,default:1},Bo=t=>Math.round(t*1e5)/1e5,Uc=/(-)?([\d]*\.?[\d])+/g,V1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,pM=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function za(t){return typeof t=="string"}const Wa=t=>({test:e=>za(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),rr=Wa("deg"),yn=Wa("%"),K=Wa("px"),mM=Wa("vh"),gM=Wa("vw"),j0={...yn,parse:t=>yn.parse(t)/100,transform:t=>yn.transform(t*100)},F0={...ki,transform:Math.round},L1={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scale:bl,scaleX:bl,scaleY:bl,scaleZ:bl,skew:rr,skewX:rr,skewY:rr,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:Uo,originX:j0,originY:j0,originZ:K,zIndex:F0,fillOpacity:Uo,strokeOpacity:Uo,numOctaves:F0};function Wm(t,e,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=t;let u=!1,c=!1,d=!0;for(const f in e){const p=e[f];if(D1(f)){s[f]=p;continue}const g=L1[f],E=fM(p,g);if(Ri.has(f)){if(u=!0,o[f]=E,!d)continue;p!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,a[f]=E):i[f]=E}if(e.transform||(u||r?i.transform=dM(t.transform,n,d,r):i.transform&&(i.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:g=0}=a;i.transformOrigin=`${f} ${p} ${g}`}}const $m=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function M1(t,e,n){for(const r in e)!Ct(e[r])&&!b1(r,n)&&(t[r]=e[r])}function yM({transformTemplate:t},e,n){return N.useMemo(()=>{const r=$m();return Wm(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function vM(t,e,n){const r=t.style||{},i={};return M1(i,r,t),Object.assign(i,yM(t,e,n)),t.transformValues?t.transformValues(i):i}function _M(t,e,n){const r={},i=vM(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r}const wM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Xu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||wM.has(t)}let O1=t=>!Xu(t);function TM(t){t&&(O1=e=>e.startsWith("on")?!Xu(e):t(e))}try{TM(require("@emotion/is-prop-valid").default)}catch{}function EM(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(O1(i)||n===!0&&Xu(i)||!e&&!Xu(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function U0(t,e,n){return typeof t=="string"?t:K.transform(e+n*t)}function SM(t,e,n){const r=U0(e,t.x,t.width),i=U0(n,t.y,t.height);return`${r} ${i}`}const xM={offset:"stroke-dashoffset",array:"stroke-dasharray"},IM={offset:"strokeDashoffset",array:"strokeDasharray"};function PM(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?xM:IM;t[s.offset]=K.transform(-r);const o=K.transform(e),a=K.transform(n);t[s.array]=`${o} ${a}`}function Hm(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:u=0,...c},d,f,p){if(Wm(t,c,d,p),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:E,dimensions:P}=t;g.transform&&(P&&(E.transform=g.transform),delete g.transform),P&&(i!==void 0||s!==void 0||E.transform)&&(E.transformOrigin=SM(P,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(g.x=e),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&PM(g,o,a,u,!1)}const j1=()=>({...$m(),attrs:{}}),Gm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function CM(t,e,n,r){const i=N.useMemo(()=>{const s=j1();return Hm(s,e,{enableHardwareAcceleration:!1},Gm(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};M1(s,t.style,t),i.style={...s,...i.style}}return i}function AM(t=!1){return(n,r,i,{latestValues:s},o)=>{const u=(zm(n)?CM:_M)(r,s,o,n),d={...EM(r,typeof n=="string",t),...u,ref:i},{children:f}=r,p=N.useMemo(()=>Ct(f)?f.get():f,[f]);return N.createElement(n,{...d,children:p})}}function F1(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const U1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function B1(t,e,n,r){F1(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(U1.has(i)?i:jm(i),e.attrs[i])}function qm(t,e){const{style:n}=t,r={};for(const i in n)(Ct(n[i])||e.style&&Ct(e.style[i])||b1(i,t))&&(r[i]=n[i]);return r}function z1(t,e){const n=qm(t,e);for(const r in t)if(Ct(t[r])||Ct(e[r])){const i=Ba.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=t[r]}return n}function Km(t,e,n,r={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),e}function W1(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const Yu=t=>Array.isArray(t),RM=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),kM=t=>Yu(t)?t[t.length-1]||0:t;function nu(t){const e=Ct(t)?t.get():t;return RM(e)?e.toValue():e}function bM({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:NM(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const $1=t=>(e,n)=>{const r=N.useContext(Lc),i=N.useContext(Mc),s=()=>bM(t,e,r,i);return n?s():W1(s)};function NM(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=nu(s[p]);let{initial:o,animate:a}=t;const u=Fc(t),c=R1(t);e&&c&&!u&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;return f&&typeof f!="boolean"&&!jc(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const E=Km(t,g);if(!E)return;const{transitionEnd:P,transition:R,...S}=E;for(const _ in S){let T=S[_];if(Array.isArray(T)){const b=d?T.length-1:0;T=T[b]}T!==null&&(i[_]=T)}for(const _ in P)i[_]=P[_]}),i}const De=t=>t;class B0{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function DM(t){let e=new B0,n=new B0,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(u,c=!1,d=!1)=>{const f=d&&i,p=f?e:n;return c&&o.add(u),p.add(u)&&f&&i&&(r=e.order.length),u},cancel:u=>{n.remove(u),o.delete(u)},process:u=>{if(i){s=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let c=0;c<r;c++){const d=e.order[c];d(u),o.has(d)&&(a.schedule(d),t())}i=!1,s&&(s=!1,a.process(u))}};return a}const Nl=["prepare","read","update","preRender","render","postRender"],VM=40;function LM(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=Nl.reduce((f,p)=>(f[p]=DM(()=>n=!0),f),{}),o=f=>s[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,VM),1),i.timestamp=f,i.isProcessing=!0,Nl.forEach(o),i.isProcessing=!1,n&&e&&(r=!1,t(a))},u=()=>{n=!0,r=!0,i.isProcessing||t(a)};return{schedule:Nl.reduce((f,p)=>{const g=s[p];return f[p]=(E,P=!1,R=!1)=>(n||u(),g.schedule(E,P,R)),f},{}),cancel:f=>Nl.forEach(p=>s[p].cancel(f)),state:i,steps:s}}const{schedule:me,cancel:Kn,state:ot,steps:Zd}=LM(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0),MM={useVisualState:$1({scrapeMotionValuesFromProps:z1,createRenderState:j1,onMount:(t,e,{renderState:n,latestValues:r})=>{me.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),me.render(()=>{Hm(n,r,{enableHardwareAcceleration:!1},Gm(e.tagName),t.transformTemplate),B1(e,n)})}})},OM={useVisualState:$1({scrapeMotionValuesFromProps:qm,createRenderState:$m})};function jM(t,{forwardMotionProps:e=!1},n,r){return{...zm(t)?MM:OM,preloadedFeatures:n,useRender:AM(e),createVisualElement:r,Component:t}}function Vn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const H1=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Bc(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const FM=t=>e=>H1(e)&&t(e,Bc(e));function On(t,e,n,r){return Vn(t,e,FM(n),r)}const UM=(t,e)=>n=>e(t(n)),kr=(...t)=>t.reduce(UM);function G1(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const z0=G1("dragHorizontal"),W0=G1("dragVertical");function q1(t){let e=!1;if(t==="y")e=W0();else if(t==="x")e=z0();else{const n=z0(),r=W0();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function K1(){const t=q1(!0);return t?(t(),!1):!0}class Wr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function $0(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||K1())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&me.update(()=>a[r](s,o))};return On(t.current,n,i,{passive:!t.getProps()[r]})}class BM extends Wr{mount(){this.unmount=kr($0(this.node,!0),$0(this.node,!1))}unmount(){}}class zM extends Wr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=kr(Vn(this.node.current,"focus",()=>this.onFocus()),Vn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Q1=(t,e)=>e?t===e?!0:Q1(t,e.parentElement):!1;function eh(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Bc(n))}class WM extends Wr{constructor(){super(...arguments),this.removeStartListeners=De,this.removeEndListeners=De,this.removeAccessibleListeners=De,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=On(window,"pointerup",(a,u)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:f}=this.node.getProps();me.update(()=>{!f&&!Q1(this.node.current,a.target)?d&&d(a,u):c&&c(a,u)})},{passive:!(r.onTap||r.onPointerUp)}),o=On(window,"pointercancel",(a,u)=>this.cancelPress(a,u),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=kr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||eh("up",(u,c)=>{const{onTap:d}=this.node.getProps();d&&me.update(()=>d(u,c))})};this.removeEndListeners(),this.removeEndListeners=Vn(this.node.current,"keyup",o),eh("down",(a,u)=>{this.startPress(a,u)})},n=Vn(this.node.current,"keydown",e),r=()=>{this.isPressing&&eh("cancel",(s,o)=>this.cancelPress(s,o))},i=Vn(this.node.current,"blur",r);this.removeAccessibleListeners=kr(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&me.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!K1()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&me.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=On(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Vn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=kr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Vf=new WeakMap,th=new WeakMap,$M=t=>{const e=Vf.get(t.target);e&&e(t)},HM=t=>{t.forEach($M)};function GM({root:t,...e}){const n=t||document;th.has(n)||th.set(n,{});const r=th.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(HM,{root:t,...e})),r[i]}function qM(t,e,n){const r=GM(e);return Vf.set(t,n),r.observe(t),()=>{Vf.delete(t),r.unobserve(t)}}const KM={some:0,all:1};class QM extends Wr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:KM[i]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};return qM(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(XM(e,n))&&this.startObserver()}unmount(){}}function XM({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const YM={inView:{Feature:QM},tap:{Feature:WM},focus:{Feature:zM},hover:{Feature:BM}};function X1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function JM(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function ZM(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function zc(t,e,n){const r=t.getProps();return Km(r,e,n!==void 0?n:r.custom,JM(t),ZM(t))}let Qm=De;const hi=t=>t*1e3,jn=t=>t/1e3,eO={current:!1},Y1=t=>Array.isArray(t)&&typeof t[0]=="number";function J1(t){return!!(!t||typeof t=="string"&&Z1[t]||Y1(t)||Array.isArray(t)&&t.every(J1))}const xo=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Z1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xo([0,.65,.55,1]),circOut:xo([.55,0,1,.45]),backIn:xo([.31,.01,.66,-.59]),backOut:xo([.33,1.53,.69,.99])};function ex(t){if(t)return Y1(t)?xo(t):Array.isArray(t)?t.map(ex):Z1[t]}function tO(t,e,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:u}={}){const c={[e]:n};u&&(c.offset=u);const d=ex(a);return Array.isArray(d)&&(c.easing=d),t.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function nO(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const tx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,rO=1e-7,iO=12;function sO(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=tx(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>rO&&++a<iO);return o}function $a(t,e,n,r){if(t===e&&n===r)return De;const i=s=>sO(s,0,1,t,n);return s=>s===0||s===1?s:tx(i(s),e,r)}const oO=$a(.42,0,1,1),aO=$a(0,0,.58,1),nx=$a(.42,0,.58,1),lO=t=>Array.isArray(t)&&typeof t[0]!="number",rx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ix=t=>e=>1-t(1-e),Xm=t=>1-Math.sin(Math.acos(t)),sx=ix(Xm),uO=rx(Xm),ox=$a(.33,1.53,.69,.99),Ym=ix(ox),cO=rx(Ym),dO=t=>(t*=2)<1?.5*Ym(t):.5*(2-Math.pow(2,-10*(t-1))),hO={linear:De,easeIn:oO,easeInOut:nx,easeOut:aO,circIn:Xm,circInOut:uO,circOut:sx,backIn:Ym,backInOut:cO,backOut:ox,anticipate:dO},H0=t=>{if(Array.isArray(t)){Qm(t.length===4);const[e,n,r,i]=t;return $a(e,n,r,i)}else if(typeof t=="string")return hO[t];return t},Jm=(t,e)=>n=>!!(za(n)&&pM.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),ax=(t,e,n)=>r=>{if(!za(r))return r;const[i,s,o,a]=r.match(Uc);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},fO=t=>Mr(0,255,t),nh={...ki,transform:t=>Math.round(fO(t))},ai={test:Jm("rgb","red"),parse:ax("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+nh.transform(t)+", "+nh.transform(e)+", "+nh.transform(n)+", "+Bo(Uo.transform(r))+")"};function pO(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Lf={test:Jm("#"),parse:pO,transform:ai.transform},Ji={test:Jm("hsl","hue"),parse:ax("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+yn.transform(Bo(e))+", "+yn.transform(Bo(n))+", "+Bo(Uo.transform(r))+")"},mt={test:t=>ai.test(t)||Lf.test(t)||Ji.test(t),parse:t=>ai.test(t)?ai.parse(t):Ji.test(t)?Ji.parse(t):Lf.parse(t),transform:t=>za(t)?t:t.hasOwnProperty("red")?ai.transform(t):Ji.transform(t)},Se=(t,e,n)=>-n*t+n*e+t;function rh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function mO({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,u=2*n-a;i=rh(u,a,t+1/3),s=rh(u,a,t),o=rh(u,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const ih=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},gO=[Lf,ai,Ji],yO=t=>gO.find(e=>e.test(t));function G0(t){const e=yO(t);let n=e.parse(t);return e===Ji&&(n=mO(n)),n}const lx=(t,e)=>{const n=G0(t),r=G0(e),i={...n};return s=>(i.red=ih(n.red,r.red,s),i.green=ih(n.green,r.green,s),i.blue=ih(n.blue,r.blue,s),i.alpha=Se(n.alpha,r.alpha,s),ai.transform(i))};function vO(t){var e,n;return isNaN(t)&&za(t)&&(((e=t.match(Uc))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(V1))===null||n===void 0?void 0:n.length)||0)>0}const ux={regex:hM,countKey:"Vars",token:"${v}",parse:De},cx={regex:V1,countKey:"Colors",token:"${c}",parse:mt.parse},dx={regex:Uc,countKey:"Numbers",token:"${n}",parse:ki.parse};function sh(t,{regex:e,countKey:n,token:r,parse:i}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...s.map(i)))}function Ju(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&sh(n,ux),sh(n,cx),sh(n,dx),n}function hx(t){return Ju(t).values}function fx(t){const{values:e,numColors:n,numVars:r,tokenised:i}=Ju(t),s=e.length;return o=>{let a=i;for(let u=0;u<s;u++)u<r?a=a.replace(ux.token,o[u]):u<r+n?a=a.replace(cx.token,mt.transform(o[u])):a=a.replace(dx.token,Bo(o[u]));return a}}const _O=t=>typeof t=="number"?0:t;function wO(t){const e=hx(t);return fx(t)(e.map(_O))}const Or={test:vO,parse:hx,createTransformer:fx,getAnimatableNone:wO},px=(t,e)=>n=>`${n>0?e:t}`;function mx(t,e){return typeof t=="number"?n=>Se(t,e,n):mt.test(t)?lx(t,e):t.startsWith("var(")?px(t,e):yx(t,e)}const gx=(t,e)=>{const n=[...t],r=n.length,i=t.map((s,o)=>mx(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},TO=(t,e)=>{const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=mx(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},yx=(t,e)=>{const n=Or.createTransformer(e),r=Ju(t),i=Ju(e);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?kr(gx(r.values,i.values),n):px(t,e)},Ea=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},q0=(t,e)=>n=>Se(t,e,n);function EO(t){return typeof t=="number"?q0:typeof t=="string"?mt.test(t)?lx:yx:Array.isArray(t)?gx:typeof t=="object"?TO:q0}function SO(t,e,n){const r=[],i=n||EO(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const u=Array.isArray(e)?e[o]||De:e;a=kr(u,a)}r.push(a)}return r}function vx(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(Qm(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=SO(e,r,i),a=o.length,u=c=>{let d=0;if(a>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const f=Ea(t[d],t[d+1],c);return o[d](f)};return n?c=>u(Mr(t[0],t[s-1],c)):u}function xO(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Ea(0,e,r);t.push(Se(n,1,i))}}function IO(t){const e=[0];return xO(e,t.length-1),e}function PO(t,e){return t.map(n=>n*e)}function CO(t,e){return t.map(()=>e||nx).splice(0,t.length-1)}function Zu({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=lO(r)?r.map(H0):H0(r),s={done:!1,value:e[0]},o=PO(n&&n.length===e.length?n:IO(e),t),a=vx(o,e,{ease:Array.isArray(i)?i:CO(e,i)});return{calculatedDuration:t,next:u=>(s.value=a(u),s.done=u>=t,s)}}function _x(t,e){return e?t*(1e3/e):0}const AO=5;function wx(t,e,n){const r=Math.max(e-AO,0);return _x(n-t(r),e-r)}const oh=.001,RO=.01,kO=10,bO=.05,NO=1;function DO({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s,o=1-e;o=Mr(bO,NO,o),t=Mr(RO,kO,jn(t)),o<1?(i=c=>{const d=c*o,f=d*t,p=d-n,g=Mf(c,o),E=Math.exp(-f);return oh-p/g*E},s=c=>{const f=c*o*t,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,E=Math.exp(-f),P=Mf(Math.pow(c,2),o);return(-i(c)+oh>0?-1:1)*((p-g)*E)/P}):(i=c=>{const d=Math.exp(-c*t),f=(c-n)*t+1;return-oh+d*f},s=c=>{const d=Math.exp(-c*t),f=(n-c)*(t*t);return d*f});const a=5/t,u=LO(i,s,a);if(t=hi(t),isNaN(u))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const VO=12;function LO(t,e,n){let r=n;for(let i=1;i<VO;i++)r=r-t(r)/e(r);return r}function Mf(t,e){return t*Math.sqrt(1-e*e)}const MO=["duration","bounce"],OO=["stiffness","damping","mass"];function K0(t,e){return e.some(n=>t[n]!==void 0)}function jO(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!K0(t,OO)&&K0(t,MO)){const n=DO(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Tx({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=jO({...r,velocity:-jn(r.velocity||0)}),g=f||0,E=u/(2*Math.sqrt(a*c)),P=s-i,R=jn(Math.sqrt(a/c)),S=Math.abs(P)<5;n||(n=S?.01:2),e||(e=S?.005:.5);let _;if(E<1){const T=Mf(R,E);_=b=>{const O=Math.exp(-E*R*b);return s-O*((g+E*R*P)/T*Math.sin(T*b)+P*Math.cos(T*b))}}else if(E===1)_=T=>s-Math.exp(-R*T)*(P+(g+R*P)*T);else{const T=R*Math.sqrt(E*E-1);_=b=>{const O=Math.exp(-E*R*b),M=Math.min(T*b,300);return s-O*((g+E*R*P)*Math.sinh(M)+T*P*Math.cosh(M))/T}}return{calculatedDuration:p&&d||null,next:T=>{const b=_(T);if(p)o.done=T>=d;else{let O=g;T!==0&&(E<1?O=wx(_,T,b):O=0);const M=Math.abs(O)<=n,x=Math.abs(s-b)<=e;o.done=M&&x}return o.value=o.done?s:b,o}}}function Q0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:d}){const f=t[0],p={done:!1,value:f},g=v=>a!==void 0&&v<a||u!==void 0&&v>u,E=v=>a===void 0?u:u===void 0||Math.abs(a-v)<Math.abs(u-v)?a:u;let P=n*e;const R=f+P,S=o===void 0?R:o(R);S!==R&&(P=S-f);const _=v=>-P*Math.exp(-v/r),T=v=>S+_(v),b=v=>{const I=_(v),C=T(v);p.done=Math.abs(I)<=c,p.value=p.done?S:C};let O,M;const x=v=>{g(p.value)&&(O=v,M=Tx({keyframes:[p.value,E(p.value)],velocity:wx(T,v,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return x(0),{calculatedDuration:null,next:v=>{let I=!1;return!M&&O===void 0&&(I=!0,b(v),x(v)),O!==void 0&&v>O?M.next(v-O):(!I&&b(v),p)}}}const FO=t=>{const e=({timestamp:n})=>t(n);return{start:()=>me.update(e,!0),stop:()=>Kn(e),now:()=>ot.isProcessing?ot.timestamp:performance.now()}},X0=2e4;function Y0(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<X0;)e+=n,r=t.next(e);return e>=X0?1/0:e}const UO={decay:Q0,inertia:Q0,tween:Zu,keyframes:Zu,spring:Tx};function ec({autoplay:t=!0,delay:e=0,driver:n=FO,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:u,onStop:c,onComplete:d,onUpdate:f,...p}){let g=1,E=!1,P,R;const S=()=>{R=new Promise(Q=>{P=Q})};S();let _;const T=UO[i]||Zu;let b;T!==Zu&&typeof r[0]!="number"&&(b=vx([0,100],r,{clamp:!1}),r=[0,100]);const O=T({...p,keyframes:r});let M;a==="mirror"&&(M=T({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let x="idle",v=null,I=null,C=null;O.calculatedDuration===null&&s&&(O.calculatedDuration=Y0(O));const{calculatedDuration:k}=O;let D=1/0,A=1/0;k!==null&&(D=k+o,A=D*(s+1)-o);let he=0;const Tt=Q=>{if(I===null)return;g>0&&(I=Math.min(I,Q)),g<0&&(I=Math.min(Q-A/g,I)),v!==null?he=v:he=Math.round(Q-I)*g;const se=he-e*(g>=0?1:-1),_e=g>=0?se<0:se>A;he=Math.max(se,0),x==="finished"&&v===null&&(he=A);let Mt=he,Ot=O;if(s){const Ws=Math.min(he,A)/D;let Tn=Math.floor(Ws),Ft=Ws%1;!Ft&&Ws>=1&&(Ft=1),Ft===1&&Tn--,Tn=Math.min(Tn,s+1),!!(Tn%2)&&(a==="reverse"?(Ft=1-Ft,o&&(Ft-=o/D)):a==="mirror"&&(Ot=M)),Mt=Mr(0,1,Ft)*D}const ht=_e?{done:!1,value:r[0]}:Ot.next(Mt);b&&(ht.value=b(ht.value));let{done:jt}=ht;!_e&&k!==null&&(jt=g>=0?he>=A:he<=0);const Wc=v===null&&(x==="finished"||x==="running"&&jt);return f&&f(ht.value),Wc&&z(),ht},Te=()=>{_&&_.stop(),_=void 0},ze=()=>{x="idle",Te(),P(),S(),I=C=null},z=()=>{x="finished",d&&d(),Te(),P()},H=()=>{if(E)return;_||(_=n(Tt));const Q=_.now();u&&u(),v!==null?I=Q-v:(!I||x==="finished")&&(I=Q),x==="finished"&&S(),C=I,v=null,x="running",_.start()};t&&H();const J={then(Q,se){return R.then(Q,se)},get time(){return jn(he)},set time(Q){Q=hi(Q),he=Q,v!==null||!_||g===0?v=Q:I=_.now()-Q/g},get duration(){const Q=O.calculatedDuration===null?Y0(O):O.calculatedDuration;return jn(Q)},get speed(){return g},set speed(Q){Q===g||!_||(g=Q,J.time=jn(he))},get state(){return x},play:H,pause:()=>{x="paused",v=he},stop:()=>{E=!0,x!=="idle"&&(x="idle",c&&c(),ze())},cancel:()=>{C!==null&&Tt(C),ze()},complete:()=>{x="finished"},sample:Q=>(I=0,Tt(Q))};return J}function BO(t){let e;return()=>(e===void 0&&(e=t()),e)}const zO=BO(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),WO=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Dl=10,$O=2e4,HO=(t,e)=>e.type==="spring"||t==="backgroundColor"||!J1(e.ease);function GO(t,e,{onUpdate:n,onComplete:r,...i}){if(!(zO()&&WO.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,u,c=!1;const d=()=>{u=new Promise(T=>{a=T})};d();let{keyframes:f,duration:p=300,ease:g,times:E}=i;if(HO(e,i)){const T=ec({...i,repeat:0,delay:0});let b={done:!1,value:f[0]};const O=[];let M=0;for(;!b.done&&M<$O;)b=T.sample(M),O.push(b.value),M+=Dl;E=void 0,f=O,p=M-Dl,g="linear"}const P=tO(t.owner.current,e,f,{...i,duration:p,ease:g,times:E}),R=()=>{c=!1,P.cancel()},S=()=>{c=!0,me.update(R),a(),d()};return P.onfinish=()=>{c||(t.set(nO(f,i)),r&&r(),S())},{then(T,b){return u.then(T,b)},attachTimeline(T){return P.timeline=T,P.onfinish=null,De},get time(){return jn(P.currentTime||0)},set time(T){P.currentTime=hi(T)},get speed(){return P.playbackRate},set speed(T){P.playbackRate=T},get duration(){return jn(p)},play:()=>{o||(P.play(),Kn(R))},pause:()=>P.pause(),stop:()=>{if(o=!0,P.playState==="idle")return;const{currentTime:T}=P;if(T){const b=ec({...i,autoplay:!1});t.setWithVelocity(b.sample(T-Dl).value,b.sample(T).value,Dl)}S()},complete:()=>{c||P.finish()},cancel:S}}function qO({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const i=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:De,pause:De,stop:De,then:s=>(s(),Promise.resolve()),cancel:De,complete:De});return e?ec({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const KO={type:"spring",stiffness:500,damping:25,restSpeed:10},QO=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),XO={type:"keyframes",duration:.8},YO={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},JO=(t,{keyframes:e})=>e.length>2?XO:Ri.has(t)?t.startsWith("scale")?QO(e[1]):KO:YO,Of=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Or.test(e)||e==="0")&&!e.startsWith("url(")),ZO=new Set(["brightness","contrast","saturate","opacity"]);function e4(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Uc)||[];if(!r)return t;const i=n.replace(r,"");let s=ZO.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const t4=/([a-z-]*)\(.*?\)/g,jf={...Or,getAnimatableNone:t=>{const e=t.match(t4);return e?e.map(e4).join(" "):t}},n4={...L1,color:mt,backgroundColor:mt,outlineColor:mt,fill:mt,stroke:mt,borderColor:mt,borderTopColor:mt,borderRightColor:mt,borderBottomColor:mt,borderLeftColor:mt,filter:jf,WebkitFilter:jf},Zm=t=>n4[t];function Ex(t,e){let n=Zm(t);return n!==jf&&(n=Or),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Sx=t=>/^0[^.\s]+$/.test(t);function r4(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Sx(t)}function i4(t,e,n,r){const i=Of(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const u=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),r4(s[c])&&u.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(i&&u.length&&a)for(let c=0;c<u.length;c++){const d=u[c];s[d]=Ex(e,a)}return s}function s4({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:u,elapsed:c,...d}){return!!Object.keys(d).length}function eg(t,e){return t[e]||t.default||t}const o4={skipAnimations:!1},tg=(t,e,n,r={})=>i=>{const s=eg(r,t)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-hi(o);const u=i4(e,t,n,s),c=u[0],d=u[u.length-1],f=Of(t,c),p=Of(t,d);let g={keyframes:u,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:E=>{e.set(E),s.onUpdate&&s.onUpdate(E)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(s4(s)||(g={...g,...JO(t,g)}),g.duration&&(g.duration=hi(g.duration)),g.repeatDelay&&(g.repeatDelay=hi(g.repeatDelay)),!f||!p||eO.current||s.type===!1||o4.skipAnimations)return qO(g);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const E=GO(e,t,g);if(E)return E}return ec(g)};function tc(t){return!!(Ct(t)&&t.add)}const xx=t=>/^\-?\d*\.?\d+$/.test(t);function ng(t,e){t.indexOf(e)===-1&&t.push(e)}function rg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class ig{constructor(){this.subscriptions=[]}add(e){return ng(this.subscriptions,e),()=>rg(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const a4=t=>!isNaN(parseFloat(t));class l4{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=ot;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,me.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>me.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=a4(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new ig);const r=this.events[e].add(n);return e==="change"?()=>{r(),me.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?_x(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Rs(t,e){return new l4(t,e)}const Ix=t=>e=>e.test(t),u4={test:t=>t==="auto",parse:t=>t},Px=[ki,K,yn,rr,gM,mM,u4],fo=t=>Px.find(Ix(t)),c4=[...Px,mt,Or],d4=t=>c4.find(Ix(t));function h4(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Rs(n))}function f4(t,e){const n=zc(t,e);let{transitionEnd:r={},transition:i={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=kM(s[o]);h4(t,o,a)}}function p4(t,e,n){var r,i;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const u=s[a],c=e[u];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(i=(r=n[u])!==null&&r!==void 0?r:t.readValue(u))!==null&&i!==void 0?i:e[u]),d!=null&&(typeof d=="string"&&(xx(d)||Sx(d))?d=parseFloat(d):!d4(d)&&Or.test(c)&&(d=Ex(u,c)),t.addValue(u,Rs(d,{owner:t})),n[u]===void 0&&(n[u]=d),d!==null&&t.setBaseTarget(u,d))}}function m4(t,e){return e?(e[t]||e.default||e).from:void 0}function g4(t,e,n){const r={};for(const i in t){const s=m4(i,e);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function y4({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function v4(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function Cx(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const u=t.getValue("willChange");r&&(s=r);const c=[],d=i&&t.animationState&&t.animationState.getState()[i];for(const f in a){const p=t.getValue(f),g=a[f];if(!p||g===void 0||d&&y4(d,f))continue;const E={delay:n,elapsed:0,...eg(s||{},f)};if(window.HandoffAppearAnimations){const S=t.getProps()[A1];if(S){const _=window.HandoffAppearAnimations(S,f,p,me);_!==null&&(E.elapsed=_,E.isHandoff=!0)}}let P=!E.isHandoff&&!v4(p,g);if(E.type==="spring"&&(p.getVelocity()||E.velocity)&&(P=!1),p.animation&&(P=!1),P)continue;p.start(tg(f,p,g,t.shouldReduceMotion&&Ri.has(f)?{type:!1}:E));const R=p.animation;tc(u)&&(u.add(f),R.then(()=>u.remove(f))),c.push(R)}return o&&Promise.all(c).then(()=>{o&&f4(t,o)}),c}function Ff(t,e,n={}){const r=zc(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Cx(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=i;return _4(t,e,c+u,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,c]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function _4(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,u=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(w4).forEach((c,d)=>{c.notify("AnimationStart",e),o.push(Ff(c,e,{...s,delay:n+u(d)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function w4(t,e){return t.sortNodePosition(e)}function T4(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Ff(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Ff(t,e,n);else{const i=typeof e=="function"?zc(t,e,n.custom):e;r=Promise.all(Cx(t,i,n))}return r.then(()=>t.notify("AnimationComplete",e))}const E4=[...Fm].reverse(),S4=Fm.length;function x4(t){return e=>Promise.all(e.map(({animation:n,options:r})=>T4(t,n,r)))}function I4(t){let e=x4(t);const n=C4();let r=!0;const i=(u,c)=>{const d=zc(t,c);if(d){const{transition:f,transitionEnd:p,...g}=d;u={...u,...g,...p}}return u};function s(u){e=u(t)}function o(u,c){const d=t.getProps(),f=t.getVariantContext(!0)||{},p=[],g=new Set;let E={},P=1/0;for(let S=0;S<S4;S++){const _=E4[S],T=n[_],b=d[_]!==void 0?d[_]:f[_],O=wa(b),M=_===c?T.isActive:null;M===!1&&(P=S);let x=b===f[_]&&b!==d[_]&&O;if(x&&r&&t.manuallyAnimateOnMount&&(x=!1),T.protectedKeys={...E},!T.isActive&&M===null||!b&&!T.prevProp||jc(b)||typeof b=="boolean")continue;let I=P4(T.prevProp,b)||_===c&&T.isActive&&!x&&O||S>P&&O,C=!1;const k=Array.isArray(b)?b:[b];let D=k.reduce(i,{});M===!1&&(D={});const{prevResolvedValues:A={}}=T,he={...A,...D},Tt=Te=>{I=!0,g.has(Te)&&(C=!0,g.delete(Te)),T.needsAnimating[Te]=!0};for(const Te in he){const ze=D[Te],z=A[Te];if(E.hasOwnProperty(Te))continue;let H=!1;Yu(ze)&&Yu(z)?H=!X1(ze,z):H=ze!==z,H?ze!==void 0?Tt(Te):g.add(Te):ze!==void 0&&g.has(Te)?Tt(Te):T.protectedKeys[Te]=!0}T.prevProp=b,T.prevResolvedValues=D,T.isActive&&(E={...E,...D}),r&&t.blockInitialAnimation&&(I=!1),I&&(!x||C)&&p.push(...k.map(Te=>({animation:Te,options:{type:_,...u}})))}if(g.size){const S={};g.forEach(_=>{const T=t.getBaseTarget(_);T!==void 0&&(S[_]=T)}),p.push({animation:S})}let R=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(R=!1),r=!1,R?e(p):Promise.resolve()}function a(u,c,d){var f;if(n[u].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(g=>{var E;return(E=g.animationState)===null||E===void 0?void 0:E.setActive(u,c)}),n[u].isActive=c;const p=o(d,u);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function P4(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!X1(e,t):!1}function Kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function C4(){return{animate:Kr(!0),whileInView:Kr(),whileHover:Kr(),whileTap:Kr(),whileDrag:Kr(),whileFocus:Kr(),exit:Kr()}}class A4 extends Wr{constructor(e){super(e),e.animationState||(e.animationState=I4(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),jc(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let R4=0;class k4 extends Wr{constructor(){super(...arguments),this.id=R4++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const b4={animation:{Feature:A4},exit:{Feature:k4}},J0=(t,e)=>Math.abs(t-e);function N4(t,e){const n=J0(t.x,e.x),r=J0(t.y,e.y);return Math.sqrt(n**2+r**2)}class Ax{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=lh(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=N4(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:E}=f,{timestamp:P}=ot;this.history.push({...E,timestamp:P});const{onStart:R,onMove:S}=this.handlers;p||(R&&R(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ah(p,this.transformPagePoint),me.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:E,resumeAnimation:P}=this.handlers;if(this.dragSnapToOrigin&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=lh(f.type==="pointercancel"?this.lastMoveEventInfo:ah(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,R),E&&E(f,R)},!H1(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Bc(e),a=ah(o,this.transformPagePoint),{point:u}=a,{timestamp:c}=ot;this.history=[{...u,timestamp:c}];const{onSessionStart:d}=n;d&&d(e,lh(a,this.history)),this.removeListeners=kr(On(this.contextWindow,"pointermove",this.handlePointerMove),On(this.contextWindow,"pointerup",this.handlePointerUp),On(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Kn(this.updatePoint)}}function ah(t,e){return e?{point:e(t.point)}:t}function Z0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function lh({point:t},e){return{point:t,delta:Z0(t,Rx(e)),offset:Z0(t,D4(e)),velocity:V4(e,.1)}}function D4(t){return t[0]}function Rx(t){return t[t.length-1]}function V4(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Rx(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>hi(e)));)n--;if(!r)return{x:0,y:0};const s=jn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Dt(t){return t.max-t.min}function Uf(t,e=0,n=.01){return Math.abs(t-e)<=n}function e_(t,e,n,r=.5){t.origin=r,t.originPoint=Se(e.min,e.max,t.origin),t.scale=Dt(n)/Dt(e),(Uf(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Se(n.min,n.max,t.origin)-t.originPoint,(Uf(t.translate)||isNaN(t.translate))&&(t.translate=0)}function zo(t,e,n,r){e_(t.x,e.x,n.x,r?r.originX:void 0),e_(t.y,e.y,n.y,r?r.originY:void 0)}function t_(t,e,n){t.min=n.min+e.min,t.max=t.min+Dt(e)}function L4(t,e,n){t_(t.x,e.x,n.x),t_(t.y,e.y,n.y)}function n_(t,e,n){t.min=e.min-n.min,t.max=t.min+Dt(e)}function Wo(t,e,n){n_(t.x,e.x,n.x),n_(t.y,e.y,n.y)}function M4(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Se(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Se(n,t,r.max):Math.min(t,n)),t}function r_(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function O4(t,{top:e,left:n,bottom:r,right:i}){return{x:r_(t.x,n,i),y:r_(t.y,e,r)}}function i_(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function j4(t,e){return{x:i_(t.x,e.x),y:i_(t.y,e.y)}}function F4(t,e){let n=.5;const r=Dt(t),i=Dt(e);return i>r?n=Ea(e.min,e.max-r,t.min):r>i&&(n=Ea(t.min,t.max-i,e.min)),Mr(0,1,n)}function U4(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Bf=.35;function B4(t=Bf){return t===!1?t=0:t===!0&&(t=Bf),{x:s_(t,"left","right"),y:s_(t,"top","bottom")}}function s_(t,e,n){return{min:o_(t,e),max:o_(t,n)}}function o_(t,e){return typeof t=="number"?t:t[e]||0}const a_=()=>({translate:0,scale:1,origin:0,originPoint:0}),Zi=()=>({x:a_(),y:a_()}),l_=()=>({min:0,max:0}),Me=()=>({x:l_(),y:l_()});function Bt(t){return[t("x"),t("y")]}function kx({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function z4({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function W4(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function uh(t){return t===void 0||t===1}function zf({scale:t,scaleX:e,scaleY:n}){return!uh(t)||!uh(e)||!uh(n)}function Jr(t){return zf(t)||bx(t)||t.z||t.rotate||t.rotateX||t.rotateY}function bx(t){return u_(t.x)||u_(t.y)}function u_(t){return t&&t!=="0%"}function nc(t,e,n){const r=t-n,i=e*r;return n+i}function c_(t,e,n,r,i){return i!==void 0&&(t=nc(t,i,r)),nc(t,n,r)+e}function Wf(t,e=0,n=1,r,i){t.min=c_(t.min,e,n,r,i),t.max=c_(t.max,e,n,r,i)}function Nx(t,{x:e,y:n}){Wf(t.x,e.translate,e.scale,e.originPoint),Wf(t.y,n.translate,n.scale,n.originPoint)}function $4(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const u=s.instance;u&&u.style&&u.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&es(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Nx(t,o)),r&&Jr(s.latestValues)&&es(t,s.latestValues))}e.x=d_(e.x),e.y=d_(e.y)}function d_(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function or(t,e){t.min=t.min+e,t.max=t.max+e}function h_(t,e,[n,r,i]){const s=e[i]!==void 0?e[i]:.5,o=Se(t.min,t.max,s);Wf(t,e[n],e[r],o,e.scale)}const H4=["x","scaleX","originX"],G4=["y","scaleY","originY"];function es(t,e){h_(t.x,e,H4),h_(t.y,e,G4)}function Dx(t,e){return kx(W4(t.getBoundingClientRect(),e))}function q4(t,e,n){const r=Dx(t,n),{scroll:i}=e;return i&&(or(r.x,i.offset.x),or(r.y,i.offset.y)),r}const Vx=({current:t})=>t?t.ownerDocument.defaultView:null,K4=new WeakMap;class Q4{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Bc(d,"page").point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:E}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=q1(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bt(R=>{let S=this.getAxisMotionValue(R).get()||0;if(yn.test(S)){const{projection:_}=this.visualElement;if(_&&_.layout){const T=_.layout.layoutBox[R];T&&(S=Dt(T)*(parseFloat(S)/100))}}this.originPoint[R]=S}),E&&me.update(()=>E(d,f),!1,!0);const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:E,onDrag:P}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:R}=f;if(g&&this.currentDirection===null){this.currentDirection=X4(R),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",f.point,R),this.updateAxis("y",f.point,R),this.visualElement.render(),P&&P(d,f)},a=(d,f)=>this.stop(d,f),u=()=>Bt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ax(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Vx(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&me.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Vl(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=M4(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Yi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=O4(i.layoutBox,n):this.constraints=!1,this.elastic=B4(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Bt(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=U4(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Yi(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=q4(r,i.root,this.visualElement.getTransformPagePoint());let o=j4(i.layout.layoutBox,s);if(n){const a=n(z4(o));this.hasMutatedConstraints=!!a,a&&(o=kx(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=Bt(d=>{if(!Vl(d,n,this.currentDirection))return;let f=u&&u[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,E={type:"inertia",velocity:r?e[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,E)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(tg(e,r,0,n))}stopAnimation(){Bt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Bt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Bt(n=>{const{drag:r}=this.getProps();if(!Vl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Se(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Yi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Bt(o=>{const a=this.getAxisMotionValue(o);if(a){const u=a.get();i[o]=F4({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Bt(o=>{if(!Vl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set(Se(u,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;K4.set(this.visualElement,this);const e=this.visualElement.current,n=On(e,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();Yi(u)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=Vn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Bt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Bf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Vl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function X4(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Y4 extends Wr{constructor(e){super(e),this.removeGroupControls=De,this.removeListeners=De,this.controls=new Q4(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const f_=t=>(e,n)=>{t&&me.update(()=>t(e,n))};class J4 extends Wr{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(e){this.session=new Ax(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Vx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:f_(e),onStart:f_(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&me.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=On(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Z4(){const t=N.useContext(Mc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=N.useId();return N.useEffect(()=>r(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const ru={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function p_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const po={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const n=p_(t,e.target.x),r=p_(t,e.target.y);return`${n}% ${r}%`}},ej={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Or.parse(t);if(i.length>5)return r;const s=Or.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,u=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=u;const c=Se(a,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class tj extends xa.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;lM(nj),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ru.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||me.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Lx(t){const[e,n]=Z4(),r=N.useContext(Bm);return xa.createElement(tj,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(k1),isPresent:e,safeToRemove:n})}const nj={borderRadius:{...po,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:po,borderTopRightRadius:po,borderBottomLeftRadius:po,borderBottomRightRadius:po,boxShadow:ej},Mx=["TopLeft","TopRight","BottomLeft","BottomRight"],rj=Mx.length,m_=t=>typeof t=="string"?parseFloat(t):t,g_=t=>typeof t=="number"||K.test(t);function ij(t,e,n,r,i,s){i?(t.opacity=Se(0,n.opacity!==void 0?n.opacity:1,sj(r)),t.opacityExit=Se(e.opacity!==void 0?e.opacity:1,0,oj(r))):s&&(t.opacity=Se(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<rj;o++){const a=`border${Mx[o]}Radius`;let u=y_(e,a),c=y_(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||g_(u)===g_(c)?(t[a]=Math.max(Se(m_(u),m_(c),r),0),(yn.test(c)||yn.test(u))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Se(e.rotate||0,n.rotate||0,r))}function y_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const sj=Ox(0,.5,sx),oj=Ox(.5,.95,De);function Ox(t,e,n){return r=>r<t?0:r>e?1:n(Ea(t,e,r))}function v_(t,e){t.min=e.min,t.max=e.max}function Ut(t,e){v_(t.x,e.x),v_(t.y,e.y)}function __(t,e,n,r,i){return t-=e,t=nc(t,1/n,r),i!==void 0&&(t=nc(t,1/i,r)),t}function aj(t,e=0,n=1,r=.5,i,s=t,o=t){if(yn.test(e)&&(e=parseFloat(e),e=Se(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Se(s.min,s.max,r);t===s&&(a-=e),t.min=__(t.min,e,n,a,i),t.max=__(t.max,e,n,a,i)}function w_(t,e,[n,r,i],s,o){aj(t,e[n],e[r],e[i],e.scale,s,o)}const lj=["x","scaleX","originX"],uj=["y","scaleY","originY"];function T_(t,e,n,r){w_(t.x,e,lj,n?n.x:void 0,r?r.x:void 0),w_(t.y,e,uj,n?n.y:void 0,r?r.y:void 0)}function E_(t){return t.translate===0&&t.scale===1}function jx(t){return E_(t.x)&&E_(t.y)}function cj(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Fx(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function S_(t){return Dt(t.x)/Dt(t.y)}class dj{constructor(){this.members=[]}add(e){ng(this.members,e),e.scheduleRender()}remove(e){if(rg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function x_(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:u,rotateX:c,rotateY:d}=n;u&&(r+=`rotate(${u}deg) `),c&&(r+=`rotateX(${c}deg) `),d&&(r+=`rotateY(${d}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const hj=(t,e)=>t.depth-e.depth;class fj{constructor(){this.children=[],this.isDirty=!1}add(e){ng(this.children,e),this.isDirty=!0}remove(e){rg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hj),this.isDirty=!1,this.children.forEach(e)}}function pj(t,e){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Kn(r),t(s-e))};return me.read(r,!0),()=>Kn(r)}function mj(t){window.MotionDebug&&window.MotionDebug.record(t)}function gj(t){return t instanceof SVGElement&&t.tagName!=="svg"}function yj(t,e,n){const r=Ct(t)?t:Rs(t);return r.start(tg("",r,e,n)),r.animation}const I_=["","X","Y","Z"],vj={visibility:"hidden"},P_=1e3;let _j=0;const Zr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ux({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=_j++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zr.totalNodes=Zr.resolvedTargetDeltas=Zr.recalculatedProjection=0,this.nodes.forEach(Ej),this.nodes.forEach(Cj),this.nodes.forEach(Aj),this.nodes.forEach(Sj),mj(Zr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new fj)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new ig),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=gj(o),this.instance=o;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||u)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=pj(p,250),ru.hasAnimatedSinceResize&&(ru.hasAnimatedSinceResize=!1,this.nodes.forEach(A_))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const P=this.options.transition||d.getDefaultTransition()||Dj,{onLayoutAnimationStart:R,onLayoutAnimationComplete:S}=d.getProps(),_=!this.targetLayout||!Fx(this.targetLayout,E)||g,T=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||T||p&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,T);const b={...eg(P,"layout"),onPlay:R,onComplete:S};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||A_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Kn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Rj),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(C_);return}this.isUpdating||this.nodes.forEach(Ij),this.isUpdating=!1,this.nodes.forEach(Pj),this.nodes.forEach(wj),this.nodes.forEach(Tj),this.clearAllSnapshots();const a=performance.now();ot.delta=Mr(0,1e3/60,a-ot.timestamp),ot.timestamp=a,ot.isProcessing=!0,Zd.update.process(ot),Zd.preRender.process(ot),Zd.render.process(ot),ot.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(xj),this.sharedNodes.forEach(kj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!jx(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||Jr(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),Vj(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Me();const a=o.measureViewportBox(),{scroll:u}=this.root;return u&&(or(a.x,u.offset.x),or(a.y,u.offset.y)),a}removeElementScroll(o){const a=Me();Ut(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;if(c!==this.root&&d&&f.layoutScroll){if(d.isRoot){Ut(a,o);const{scroll:p}=this.root;p&&(or(a.x,-p.offset.x),or(a.y,-p.offset.y))}or(a.x,d.offset.x),or(a.y,d.offset.y)}}return a}applyTransform(o,a=!1){const u=Me();Ut(u,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&es(u,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Jr(d.latestValues)&&es(u,d.latestValues)}return Jr(this.latestValues)&&es(u,this.latestValues),u}removeTransform(o){const a=Me();Ut(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!Jr(c.latestValues))continue;zf(c.latestValues)&&c.updateSnapshot();const d=Me(),f=c.measurePageBox();Ut(d,f),T_(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Jr(this.latestValues)&&T_(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ot.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=ot.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Wo(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Ut(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),L4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ut(this.target,this.layout.layoutBox),Nx(this.target,this.targetDelta)):Ut(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Wo(this.relativeTargetOrigin,this.target,g.target),Ut(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||zf(this.parent.latestValues)||bx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),u=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ot.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ut(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;$4(this.layoutCorrected,this.treeScale,this.path,u),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:E}=a;if(!E){this.projectionTransform&&(this.projectionDelta=Zi(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Zi(),this.projectionDeltaWithTransform=Zi());const P=this.projectionTransform;zo(this.projectionDelta,this.layoutCorrected,E,this.latestValues),this.projectionTransform=x_(this.projectionDelta,this.treeScale),(this.projectionTransform!==P||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),Zr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=Zi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Me(),g=u?u.source:void 0,E=this.layout?this.layout.source:void 0,P=g!==E,R=this.getStack(),S=!R||R.members.length<=1,_=!!(P&&!S&&this.options.crossfade===!0&&!this.path.some(Nj));this.animationProgress=0;let T;this.mixTargetDelta=b=>{const O=b/1e3;R_(f.x,o.x,O),R_(f.y,o.y,O),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bj(this.relativeTarget,this.relativeTargetOrigin,p,O),T&&cj(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=Me()),Ut(T,this.relativeTarget)),P&&(this.animationValues=d,ij(d,c,this.latestValues,O,_,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Kn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=me.update(()=>{ru.hasAnimatedSinceResize=!0,this.currentAnimation=yj(0,P_,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(P_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:d}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&Bx(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||Me();const f=Dt(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=Dt(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}Ut(a,u),es(a,d),zo(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new dj),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.rotate||u.rotateX||u.rotateY||u.rotateZ)&&(a=!0),!a)return;const c={};for(let d=0;d<I_.length;d++){const f="rotate"+I_[d];u[f]&&(c[f]=u[f],o.setStaticValue(f,0))}o.render();for(const d in c)o.setStaticValue(d,c[d]);o.scheduleRender()}getProjectionStyles(o){var a,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return vj;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=nu(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const P={};return this.options.layoutId&&(P.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,P.pointerEvents=nu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(P.transform=d?d({},""):"none",this.hasProjected=!1),P}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=x_(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:E}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${E.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const P in Qu){if(p[P]===void 0)continue;const{correct:R,applyTo:S}=Qu[P],_=c.transform==="none"?p[P]:R(p[P],f);if(S){const T=S.length;for(let b=0;b<T;b++)c[S[b]]=_}else c[P]=_}return this.options.layoutId&&(c.pointerEvents=f===this?nu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(C_),this.root.sharedNodes.clear()}}}function wj(t){t.updateLayout()}function Tj(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Bt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=Dt(p);p.min=r[f].min,p.max=p.min+g}):Bx(s,n.layoutBox,r)&&Bt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=Dt(r[f]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+g)});const a=Zi();zo(a,r,n.layoutBox);const u=Zi();o?zo(u,t.applyTransform(i,!0),n.measuredBox):zo(u,r,n.layoutBox);const c=!jx(a);let d=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const E=Me();Wo(E,n.layoutBox,p.layoutBox);const P=Me();Wo(P,r,g.layoutBox),Fx(E,P)||(d=!0),f.options.layoutRoot&&(t.relativeTarget=P,t.relativeTargetOrigin=E,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function Ej(t){Zr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Sj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function xj(t){t.clearSnapshot()}function C_(t){t.clearMeasurements()}function Ij(t){t.isLayoutDirty=!1}function Pj(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function A_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Cj(t){t.resolveTargetDelta()}function Aj(t){t.calcProjection()}function Rj(t){t.resetRotation()}function kj(t){t.removeLeadSnapshot()}function R_(t,e,n){t.translate=Se(e.translate,0,n),t.scale=Se(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function k_(t,e,n,r){t.min=Se(e.min,n.min,r),t.max=Se(e.max,n.max,r)}function bj(t,e,n,r){k_(t.x,e.x,n.x,r),k_(t.y,e.y,n.y,r)}function Nj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Dj={duration:.45,ease:[.4,0,.1,1]},b_=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),N_=b_("applewebkit/")&&!b_("chrome/")?Math.round:De;function D_(t){t.min=N_(t.min),t.max=N_(t.max)}function Vj(t){D_(t.x),D_(t.y)}function Bx(t,e,n){return t==="position"||t==="preserve-aspect"&&!Uf(S_(e),S_(n),.2)}const Lj=Ux({attachResizeListener:(t,e)=>Vn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ch={current:void 0},zx=Ux({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ch.current){const t=new Lj({});t.mount(window),t.setOptions({layoutScroll:!0}),ch.current=t}return ch.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Mj={pan:{Feature:J4},drag:{Feature:Y4,ProjectionNode:zx,MeasureLayout:Lx}},Oj=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function jj(t){const e=Oj.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function $f(t,e,n=1){const[r,i]=jj(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return xx(o)?parseFloat(o):o}else return Df(i)?$f(i,e,n+1):i}function Fj(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const s=i.get();if(!Df(s))return;const o=$f(s,r);o&&i.set(o)});for(const i in e){const s=e[i];if(!Df(s))continue;const o=$f(s,r);o&&(e[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:e,transitionEnd:n}}const Uj=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Wx=t=>Uj.has(t),Bj=t=>Object.keys(t).some(Wx),V_=t=>t===ki||t===K,L_=(t,e)=>parseFloat(t.split(", ")[e]),M_=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return L_(i[1],e);{const s=r.match(/^matrix\((.+)\)$/);return s?L_(s[1],t):0}},zj=new Set(["x","y","z"]),Wj=Ba.filter(t=>!zj.has(t));function $j(t){const e=[];return Wj.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const ks={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:M_(4,13),y:M_(5,14)};ks.translateX=ks.x;ks.translateY=ks.y;const Hj=(t,e,n)=>{const r=e.measureViewportBox(),i=e.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=ks[c](r,s)}),e.render();const u=e.measureViewportBox();return n.forEach(c=>{const d=e.getValue(c);d&&d.jump(a[c]),t[c]=ks[c](u,s)}),t},Gj=(t,e,n={},r={})=>{e={...e},r={...r};const i=Object.keys(e).filter(Wx);let s=[],o=!1;const a=[];if(i.forEach(u=>{const c=t.getValue(u);if(!t.hasValue(u))return;let d=n[u],f=fo(d);const p=e[u];let g;if(Yu(p)){const E=p.length,P=p[0]===null?1:0;d=p[P],f=fo(d);for(let R=P;R<E&&p[R]!==null;R++)g?Qm(fo(p[R])===g):g=fo(p[R])}else g=fo(p);if(f!==g)if(V_(f)&&V_(g)){const E=c.get();typeof E=="string"&&c.set(parseFloat(E)),typeof p=="string"?e[u]=parseFloat(p):Array.isArray(p)&&g===K&&(e[u]=p.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||p===0)?d===0?c.set(g.transform(d)):e[u]=f.transform(p):(o||(s=$j(t),o=!0),a.push(u),r[u]=r[u]!==void 0?r[u]:e[u],c.jump(p))}),a.length){const u=a.indexOf("height")>=0?window.pageYOffset:null,c=Hj(e,t,a);return s.length&&s.forEach(([d,f])=>{t.getValue(d).set(f)}),t.render(),Oc&&u!==null&&window.scrollTo({top:u}),{target:c,transitionEnd:r}}else return{target:e,transitionEnd:r}};function qj(t,e,n,r){return Bj(e)?Gj(t,e,n,r):{target:e,transitionEnd:r}}const Kj=(t,e,n,r)=>{const i=Fj(t,e,r);return e=i.target,r=i.transitionEnd,qj(t,e,n,r)},Hf={current:null},$x={current:!1};function Qj(){if($x.current=!0,!!Oc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Hf.current=t.matches;t.addListener(e),e()}else Hf.current=!1}function Xj(t,e,n){const{willChange:r}=e;for(const i in e){const s=e[i],o=n[i];if(Ct(s))t.addValue(i,s),tc(r)&&r.add(i);else if(Ct(o))t.addValue(i,Rs(s,{owner:t})),tc(r)&&r.remove(i);else if(o!==s)if(t.hasValue(i)){const a=t.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(i);t.addValue(i,Rs(a!==void 0?a:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const O_=new WeakMap,Hx=Object.keys(Ta),Yj=Hx.length,j_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Jj=Um.length;class Zj{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>me.render(this.render,!1,!0);const{latestValues:a,renderState:u}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Fc(n),this.isVariantNode=R1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];a[f]!==void 0&&Ct(p)&&(p.set(a[f],!1),tc(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,O_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),$x.current||Qj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){O_.delete(this.current),this.projection&&this.projection.unmount(),Kn(this.notifyUpdate),Kn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=Ri.has(e),i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&me.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,i,s){let o,a;for(let u=0;u<Yj;u++){const c=Hx[u],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:g}=Ta[c];p&&(o=p),d(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!d||f&&Yi(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<j_.length;r++){const i=j_[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=e["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Xj(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Jj;r++){const i=Um[r],s=this.props[i];(wa(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Rs(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Km(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Ct(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new ig),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Gx extends Zj{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:i},s){let o=g4(r,e||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){p4(this,r,o);const a=Kj(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function eF(t){return window.getComputedStyle(t)}class tF extends Gx{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Ri.has(n)){const r=Zm(n);return r&&r.default||0}else{const r=eF(e),i=(D1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Dx(e,n)}build(e,n,r,i){Wm(e,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return qm(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ct(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,i){F1(e,n,r,i)}}class nF extends Gx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ri.has(n)){const r=Zm(n);return r&&r.default||0}return n=U1.has(n)?n:jm(n),e.getAttribute(n)}measureInstanceViewportBox(){return Me()}scrapeMotionValuesFromProps(e,n){return z1(e,n)}build(e,n,r,i){Hm(e,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,r,i){B1(e,n,r,i)}mount(e){this.isSVGTag=Gm(e.tagName),super.mount(e)}}const rF=(t,e)=>zm(t)?new nF(e,{enableHardwareAcceleration:!1}):new tF(e,{enableHardwareAcceleration:!0}),iF={layout:{ProjectionNode:zx,MeasureLayout:Lx}},sF={...b4,...YM,...Mj,...iF},le=oM((t,e)=>jM(t,e,sF,rF));function qx(){const t=N.useRef(!1);return Om(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function oF(){const t=qx(),[e,n]=N.useState(0),r=N.useCallback(()=>{t.current&&n(e+1)},[e]);return[N.useCallback(()=>me.postRender(r),[r]),e]}class aF extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function lF({children:t,isPresent:e}){const n=N.useId(),r=N.useRef(null),i=N.useRef({width:0,height:0,top:0,left:0});return N.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:u}=i.current;if(e||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),N.createElement(aF,{isPresent:e,childRef:r,sizeRef:i},N.cloneElement(t,{ref:r}))}const dh=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=W1(uF),u=N.useId(),c=N.useMemo(()=>({id:u,initial:e,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),s?void 0:[n]);return N.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),N.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=N.createElement(lF,{isPresent:n},t)),N.createElement(Mc.Provider,{value:c},t)};function uF(){return new Map}function cF(t){return N.useEffect(()=>()=>t(),[])}const ei=t=>t.key||"";function dF(t,e){t.forEach(n=>{const r=ei(n);e.set(r,n)})}function hF(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const Gf=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=N.useContext(Bm).forceRender||oF()[0],u=qx(),c=hF(t);let d=c;const f=N.useRef(new Map).current,p=N.useRef(d),g=N.useRef(new Map).current,E=N.useRef(!0);if(Om(()=>{E.current=!1,dF(c,g),p.current=d}),cF(()=>{E.current=!0,g.clear(),f.clear()}),E.current)return N.createElement(N.Fragment,null,d.map(_=>N.createElement(dh,{key:ei(_),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},_)));d=[...d];const P=p.current.map(ei),R=c.map(ei),S=P.length;for(let _=0;_<S;_++){const T=P[_];R.indexOf(T)===-1&&!f.has(T)&&f.set(T,void 0)}return o==="wait"&&f.size&&(d=[]),f.forEach((_,T)=>{if(R.indexOf(T)!==-1)return;const b=g.get(T);if(!b)return;const O=P.indexOf(T);let M=_;if(!M){const x=()=>{f.delete(T);const v=Array.from(g.keys()).filter(I=>!R.includes(I));if(v.forEach(I=>g.delete(I)),p.current=c.filter(I=>{const C=ei(I);return C===T||v.includes(C)}),!f.size){if(u.current===!1)return;a(),r&&r()}};M=N.createElement(dh,{key:ei(b),isPresent:!1,onExitComplete:x,custom:e,presenceAffectsLayout:s,mode:o},b),f.set(T,M)}d.splice(O,0,M)}),d=d.map(_=>{const T=_.key;return f.has(T)?_:N.createElement(dh,{key:ei(_),isPresent:!0,presenceAffectsLayout:s,mode:o},_)}),N.createElement(N.Fragment,null,f.size?d:d.map(_=>N.cloneElement(_)))},fF=()=>{const{currentUser:t,logout:e}=Ai(),n=Ms(),[r,i]=xa.useState(!1),s=a=>n.pathname===a;if(!t)return null;const o=[{path:"/dashboard",label:"Courses",icon:_a},{path:"/leaderboard",label:"Leaderboard",icon:Cs}];return y.jsx(le.nav,{initial:{y:-100},animate:{y:0},className:"glass-card sticky top-0 z-50 border-b border-orange-500/20",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[y.jsxs("div",{className:"flex justify-between items-center h-16",children:[y.jsxs(wo,{to:"/dashboard",className:"flex items-center space-x-3 group",children:[y.jsx("div",{className:"relative",children:y.jsx(As,{className:"h-8 w-8 text-orange-500 group-hover:text-yellow-400 transition-colors pulse-glow"})}),y.jsx("span",{className:"text-2xl font-bold gradient-text",children:"Unoverse"})]}),y.jsx("div",{className:"hidden md:flex items-center space-x-8",children:o.map(a=>y.jsxs(wo,{to:a.path,className:`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${s(a.path)?"bg-orange-500/20 text-orange-400 border border-orange-500/30":"text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"}`,children:[y.jsx(a.icon,{className:"h-4 w-4"}),y.jsx("span",{className:"font-medium",children:a.label})]},a.path))}),y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsxs("div",{className:"hidden sm:flex items-center space-x-3 glass-card px-4 py-2 border border-orange-500/20",children:[y.jsxs("span",{className:"text-sm font-medium text-orange-400",children:["Level ",t.level]}),y.jsx("div",{className:"w-20 h-2 bg-gray-700 rounded-full overflow-hidden",children:y.jsx(le.div,{initial:{width:0},animate:{width:`${t.xp/1e3*100}%`},transition:{duration:1,ease:"easeOut"},className:"h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"})}),y.jsxs("span",{className:"text-xs text-gray-400",children:[t.xp,"/1000 XP"]})]}),y.jsxs("div",{className:"relative group",children:[y.jsx("button",{className:"flex items-center space-x-2 p-2 rounded-xl hover:bg-orange-500/10 transition-colors",children:y.jsx("img",{src:t.photoURL||`https://ui-avatars.com/api/?name=${t.displayName}&background=ff6b35&color=fff`,alt:t.displayName,className:"h-8 w-8 rounded-full border-2 border-orange-500/30"})}),y.jsx(Gf,{children:y.jsxs(le.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},className:"absolute right-0 mt-2 w-56 glass-card border border-orange-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",children:[y.jsxs("div",{className:"p-4 border-b border-orange-500/20",children:[y.jsx("p",{className:"font-semibold text-white",children:t.displayName}),y.jsx("p",{className:"text-sm text-gray-400",children:t.email}),y.jsxs("div",{className:"mt-2 flex items-center space-x-2",children:[y.jsx(Cs,{className:"h-4 w-4 text-orange-400"}),y.jsxs("span",{className:"text-sm text-orange-400",children:["Level ",t.level]})]})]}),y.jsxs(wo,{to:"/profile",className:"flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-colors",children:[y.jsx(KL,{className:"h-4 w-4"}),y.jsx("span",{children:"Profile"})]}),y.jsxs("button",{onClick:e,className:"flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-colors w-full text-left",children:[y.jsx(WL,{className:"h-4 w-4"}),y.jsx("span",{children:"Sign Out"})]})]})})]}),y.jsx("button",{onClick:()=>i(!r),className:"md:hidden p-2 rounded-xl hover:bg-orange-500/10 transition-colors",children:r?y.jsx(XL,{className:"h-6 w-6 text-gray-300"}):y.jsx($L,{className:"h-6 w-6 text-gray-300"})})]})]}),y.jsx(Gf,{children:r&&y.jsx(le.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden border-t border-orange-500/20 py-4",children:y.jsxs("div",{className:"space-y-2",children:[o.map(a=>y.jsxs(wo,{to:a.path,onClick:()=>i(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${s(a.path)?"bg-orange-500/20 text-orange-400":"text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"}`,children:[y.jsx(a.icon,{className:"h-5 w-5"}),y.jsx("span",{children:a.label})]},a.path)),y.jsx("div",{className:"px-4 py-3",children:y.jsxs("div",{className:"glass-card p-3 border border-orange-500/20",children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("span",{className:"text-sm font-medium text-orange-400",children:["Level ",t.level]}),y.jsxs("span",{className:"text-xs text-gray-400",children:[t.xp,"/1000 XP"]})]}),y.jsx("div",{className:"w-full h-2 bg-gray-700 rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-500",style:{width:`${t.xp/1e3*100}%`}})})]})})]})})})]})})},pF=()=>{const{currentUser:t,signInWithGoogle:e}=Ai();if(t)return y.jsx(Hp,{to:"/dashboard"});const n=[{icon:_a,title:"Interactive Learning",description:"Master Arduino through hands-on lessons, real-world projects, and step-by-step tutorials",color:"from-orange-500 to-red-500"},{icon:Ku,title:"Live Code Practice",description:"Write and test Arduino code directly in your browser with instant feedback and validation",color:"from-yellow-500 to-orange-500"},{icon:Cs,title:"Gamified Progress",description:"Earn XP, unlock achievements, level up, and compete with makers worldwide",color:"from-amber-500 to-yellow-500"},{icon:QL,title:"Maker Community",description:"Connect with fellow electronics enthusiasts, share projects, and learn together",color:"from-orange-600 to-amber-500"}],r=[{number:"10,000+",label:"Active Learners"},{number:"50+",label:"Interactive Lessons"},{number:"25+",label:"Real Projects"},{number:"95%",label:"Success Rate"}],i=[{name:"Sarah Chen",role:"Robotics Student",content:"Unoverse made Arduino programming finally click for me. The interactive lessons are amazing!",avatar:"https://ui-avatars.com/api/?name=Sarah+Chen&background=ff6b35&color=fff"},{name:"Mike Rodriguez",role:"IoT Developer",content:"Best Arduino learning platform I've used. The projects are practical and well-explained.",avatar:"https://ui-avatars.com/api/?name=Mike+Rodriguez&background=f7931e&color=fff"},{name:"Emma Wilson",role:"Maker Enthusiast",content:"The gamification keeps me motivated. I've learned more in 2 months than in years of trying alone.",avatar:"https://ui-avatars.com/api/?name=Emma+Wilson&background=ffd700&color=000"}];return y.jsxs("div",{className:"min-h-screen relative overflow-hidden",children:[y.jsx("div",{className:"particles",children:[...Array(20)].map((s,o)=>y.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*10}s`,animationDuration:`${10+Math.random()*10}s`}},o))}),y.jsxs("section",{className:"relative min-h-screen flex items-center justify-center",children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[y.jsxs(le.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1},className:"mb-8",children:[y.jsx("div",{className:"flex justify-center mb-6",children:y.jsxs("div",{className:"glass-card flex items-center space-x-3 px-6 py-3",children:[y.jsx(As,{className:"h-10 w-10 text-yellow-400 pulse-glow"}),y.jsx("span",{className:"text-3xl font-bold gradient-text",children:"Unoverse"})]})}),y.jsxs("h1",{className:"text-6xl md:text-8xl font-bold text-white mb-6 leading-tight",children:["Master",y.jsx("br",{}),y.jsx("span",{className:"gradient-text typewriter",children:"Arduino Programming"})]}),y.jsx("p",{className:"text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",children:"Transform your ideas into reality with interactive Arduino courses, hands-on projects, and a thriving maker community."}),y.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[y.jsxs(le.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,className:"btn-primary text-lg px-8 py-4 group",children:[y.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",children:[y.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),y.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),y.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),y.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),y.jsx("span",{children:"Start Learning Free"}),y.jsx(V0,{className:"h-5 w-5 group-hover:translate-x-1 transition-transform"})]}),y.jsxs(le.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"btn-secondary text-lg px-8 py-4 group",children:[y.jsx(I1,{className:"h-5 w-5"}),y.jsx("span",{children:"Watch Demo"})]})]})]}),y.jsx(le.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.3},className:"grid grid-cols-2 md:grid-cols-4 gap-8 mt-16",children:r.map(s=>y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"text-3xl md:text-4xl font-bold gradient-text mb-2",children:s.number}),y.jsx("div",{className:"text-gray-400 text-sm md:text-base",children:s.label})]},s.label))})]}),y.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[y.jsx(le.div,{animate:{y:[0,-20,0],rotate:[0,5,0]},transition:{duration:6,repeat:1/0},className:"absolute top-1/4 left-1/4 text-orange-500/20",children:y.jsx(zL,{className:"h-16 w-16"})}),y.jsx(le.div,{animate:{y:[0,20,0],rotate:[0,-5,0]},transition:{duration:4,repeat:1/0,delay:1},className:"absolute top-1/3 right-1/4 text-yellow-500/20",children:y.jsx(Ku,{className:"h-12 w-12"})}),y.jsx(le.div,{animate:{y:[0,-15,0],rotate:[0,3,0]},transition:{duration:5,repeat:1/0,delay:2},className:"absolute bottom-1/4 left-1/3 text-amber-500/20",children:y.jsx(As,{className:"h-14 w-14"})})]})]}),y.jsx("section",{className:"py-20 relative",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[y.jsxs(le.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Why Choose ",y.jsx("span",{className:"gradient-text",children:"Unoverse"}),"?"]}),y.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"The most comprehensive and engaging platform for learning Arduino programming and electronics"})]}),y.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((s,o)=>y.jsxs(le.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:o*.1},viewport:{once:!0},whileHover:{y:-5},className:"card hover-lift text-center group",children:[y.jsx("div",{className:`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,children:y.jsx(s.icon,{className:"h-8 w-8 text-white"})}),y.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:s.title}),y.jsx("p",{className:"text-gray-300 leading-relaxed",children:s.description})]},s.title))})]})}),y.jsx("section",{className:"py-20 relative",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[y.jsxs(le.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Loved by ",y.jsx("span",{className:"gradient-text",children:"Makers"})," Worldwide"]}),y.jsx("p",{className:"text-xl text-gray-300",children:"See what our community has to say about their learning journey"})]}),y.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:i.map((s,o)=>y.jsxs(le.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:o*.1},viewport:{once:!0},className:"glass-card hover-lift",children:[y.jsx("div",{className:"flex items-center mb-4",children:[...Array(5)].map((a,u)=>y.jsx(HL,{className:"h-5 w-5 text-yellow-400 fill-current"},u))}),y.jsxs("p",{className:"text-gray-300 mb-6 italic leading-relaxed",children:['"',s.content,'"']}),y.jsxs("div",{className:"flex items-center",children:[y.jsx("img",{src:s.avatar,alt:s.name,className:"w-12 h-12 rounded-full mr-4"}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-white font-semibold",children:s.name}),y.jsx("p",{className:"text-gray-400 text-sm",children:s.role})]})]})]},s.name))})]})}),y.jsx("section",{className:"py-20 relative",children:y.jsx("div",{className:"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",children:y.jsxs(le.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:"glass-card",children:[y.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Ready to Start Your",y.jsx("br",{}),y.jsx("span",{className:"gradient-text",children:"Arduino Journey"}),"?"]}),y.jsx("p",{className:"text-xl text-gray-300 mb-8 leading-relaxed",children:"Join thousands of makers who are already building amazing projects with Arduino. Start learning today with our interactive courses and hands-on projects."}),y.jsxs(le.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e,className:"btn-primary text-lg px-8 py-4 group",children:[y.jsx("span",{children:"Begin Your Adventure"}),y.jsx(V0,{className:"h-5 w-5 group-hover:translate-x-1 transition-transform"})]}),y.jsx("p",{className:"text-gray-400 text-sm mt-4",children:"Free forever • No credit card required • Start immediately"})]})})})]})},iu=[{id:"arduino-basics",title:"Arduino Fundamentals",description:"Master the core concepts of Arduino programming, from basic syntax to digital I/O operations",difficulty:"beginner",estimatedTime:"3 hours",xpReward:500,category:"Programming",thumbnail:"https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",lessons:[{id:"arduino-intro",title:"Introduction to Arduino",content:`
# Welcome to Arduino Programming! 🚀

Arduino is an open-source electronics platform that makes it easy to create interactive projects. Whether you're building robots, home automation systems, or IoT devices, Arduino provides the perfect foundation.

## What is Arduino?
Arduino consists of both **hardware** (microcontroller boards) and **software** (IDE for programming). The most popular board is the Arduino Uno, featuring:

- **Microcontroller**: ATmega328P
- **Digital I/O Pins**: 14 (6 with PWM)
- **Analog Input Pins**: 6
- **Flash Memory**: 32KB
- **Operating Voltage**: 5V

## Why Choose Arduino?
- **Beginner-Friendly**: Simple programming language based on C/C++
- **Open Source**: Free software and open hardware designs
- **Large Community**: Extensive tutorials, libraries, and support
- **Versatile**: Suitable for prototypes to production projects
- **Cost-Effective**: Affordable boards and components

## Arduino vs Other Platforms
| Feature | Arduino | Raspberry Pi | ESP32 |
|---------|---------|--------------|-------|
| **Complexity** | Simple | Complex | Moderate |
| **Real-time** | Excellent | Limited | Good |
| **Power Usage** | Low | High | Very Low |
| **Price** | $25 | $35+ | $5-15 |
| **WiFi Built-in** | No | Yes | Yes |

## Getting Started Checklist
✅ Arduino Uno board  
✅ USB cable  
✅ Breadboard  
✅ Jumper wires  
✅ LEDs and resistors  
✅ Arduino IDE installed  

Ready to start your journey into the exciting world of embedded programming!
        `,type:"theory",xpReward:75},{id:"setup-loop",title:"Program Structure: setup() and loop()",content:`
# Arduino Program Structure 🏗️

Every Arduino program (called a "sketch") follows a specific structure with two essential functions that form the backbone of your code.

## The Two Core Functions

### setup() Function
- **Runs ONCE** when the Arduino starts or resets
- Used for **initialization tasks**
- Configure pin modes, start serial communication, initialize variables
- Think of it as the "preparation phase"

### loop() Function  
- **Runs CONTINUOUSLY** after setup() completes
- Contains your **main program logic**
- Executes repeatedly until power is removed
- This is where the "action" happens

## Basic Template Structure
\`\`\`cpp
// Global variables and includes go here
#include <SomeLibrary.h>
int myVariable = 0;

void setup() {
  // Initialization code here
  // This runs ONCE
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // Main program code here  
  // This runs FOREVER
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
\`\`\`

## Execution Flow
1. **Power On/Reset** → Arduino starts
2. **Global Variables** → Initialized first
3. **setup()** → Runs once for configuration
4. **loop()** → Runs repeatedly forever
5. **Reset Button** → Returns to step 1

## Common setup() Tasks
- **Pin Configuration**: \`pinMode(pin, mode)\`
- **Serial Communication**: \`Serial.begin(baudRate)\`
- **Library Initialization**: \`library.begin()\`
- **Variable Setup**: Set initial values
- **Sensor Calibration**: Read baseline values

## Common loop() Tasks
- **Read Sensors**: Get current values
- **Process Data**: Make decisions based on inputs
- **Control Outputs**: Turn things on/off
- **Communication**: Send/receive data
- **Timing Control**: Manage delays and intervals

## Pro Tips 💡
- Keep setup() **fast** - avoid long delays
- Use **non-blocking code** in loop() when possible
- **Comment your code** for future reference
- Group related functionality together
- Consider using **state machines** for complex logic

The beauty of Arduino is this simple yet powerful structure that handles everything from blinking LEDs to controlling complex robotics systems!
        `,type:"theory",xpReward:100},{id:"digital-io",title:"Digital Input/Output Mastery",content:`
# Digital I/O: The Foundation of Arduino Control 🔌

Digital pins are the primary way Arduino interacts with the physical world. They can only be in two states: HIGH (5V) or LOW (0V), making them perfect for on/off control and digital sensing.

## Pin Configuration with pinMode()
Before using any pin, you must configure its mode:

\`\`\`cpp
pinMode(pin, mode);
\`\`\`

### Pin Modes Explained
- **OUTPUT**: Pin can drive current (source or sink)
- **INPUT**: Pin reads external voltage (high impedance)
- **INPUT_PULLUP**: Pin reads with internal pullup resistor enabled

## Digital Output Control

### digitalWrite() Function
\`\`\`cpp
digitalWrite(pin, value);
\`\`\`
- **pin**: Pin number (2-13 for digital pins)
- **value**: HIGH (5V) or LOW (0V)

### Practical Output Examples
\`\`\`cpp
// Control an LED
pinMode(13, OUTPUT);
digitalWrite(13, HIGH);  // LED ON
digitalWrite(13, LOW);   // LED OFF

// Control a relay
pinMode(7, OUTPUT);
digitalWrite(7, HIGH);   // Relay activated
\`\`\`

## Digital Input Reading

### digitalRead() Function
\`\`\`cpp
int state = digitalRead(pin);
\`\`\`
- Returns: HIGH or LOW
- Use with buttons, switches, sensors

### Button Reading Example
\`\`\`cpp
void setup() {
  pinMode(2, INPUT_PULLUP);  // Button pin
  pinMode(13, OUTPUT);       // LED pin
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(2);
  
  if (buttonState == LOW) {  // Button pressed (pullup inverts logic)
    digitalWrite(13, HIGH);   // Turn on LED
    Serial.println("Button pressed!");
  } else {
    digitalWrite(13, LOW);    // Turn off LED
  }
  
  delay(50);  // Debounce delay
}
\`\`\`

## Understanding Pull-up Resistors
When reading digital inputs, you need to ensure the pin has a defined state:

### External Pull-up Circuit
\`\`\`
5V ----[10kΩ]---- Pin ---- Button ---- GND
\`\`\`

### Internal Pull-up (Easier!)
\`\`\`cpp
pinMode(2, INPUT_PULLUP);  // Enables internal 20kΩ pullup
\`\`\`

## Advanced Digital I/O Concepts

### Pin Current Limitations
- **Maximum per pin**: 40mA
- **Total for all pins**: 200mA
- **Use transistors/relays** for high-current loads

### Digital Pin Capabilities
| Pin Range | Special Features |
|-----------|------------------|
| 0-1 | Serial communication (avoid if using Serial) |
| 2-3 | External interrupt capable |
| 3,5,6,9,10,11 | PWM output capable (~) |
| 13 | Built-in LED connected |

### Bit Manipulation (Advanced)
For faster pin control:
\`\`\`cpp
// Fast digital write using port manipulation
PORTB |= (1 << 5);   // Set pin 13 HIGH
PORTB &= ~(1 << 5);  // Set pin 13 LOW
\`\`\`

## Common Digital I/O Projects
1. **LED Blinker**: Basic output control
2. **Button Counter**: Input reading with debouncing
3. **Traffic Light**: Multiple output coordination
4. **Burglar Alarm**: Input monitoring with output response
5. **Digital Dice**: Random number display

## Troubleshooting Tips 🔧
- **Floating inputs**: Always use pullup/pulldown resistors
- **Current limits**: Don't exceed pin current ratings
- **Voltage levels**: Ensure 5V logic compatibility
- **Debouncing**: Add delays for mechanical switches
- **Serial conflicts**: Avoid pins 0-1 when using Serial

Master digital I/O and you'll have the foundation for controlling almost any electronic device!
        `,type:"theory",xpReward:125},{id:"blink-practice",title:"Hands-On: Advanced LED Blink Patterns",content:"Create a sophisticated LED blink pattern that demonstrates your understanding of timing and digital output control. Your code should make the built-in LED blink in a specific pattern: 3 fast blinks, pause, 2 slow blinks, long pause, repeat.",type:"code",xpReward:150,codeTemplate:`void setup() {
  // Configure the built-in LED pin
  pinMode(13, OUTPUT);
}

void loop() {
  // Create pattern: 3 fast blinks, pause, 2 slow blinks, long pause
  
  // Fast blinks (3x)
  for(int i = 0; i < 3; i++) {
    digitalWrite(13, HIGH);
    delay(200);  // Fast on
    digitalWrite(13, LOW);
    delay(200);  // Fast off
  }
  
  delay(500);  // Short pause
  
  // Slow blinks (2x)
  for(int i = 0; i < 2; i++) {
    digitalWrite(13, HIGH);
    delay(800);  // Slow on
    digitalWrite(13, LOW);
    delay(800);  // Slow off
  }
  
  delay(2000);  // Long pause before repeat
}`,expectedOutput:"LED blinks in pattern: 3 fast, pause, 2 slow, long pause, repeat"},{id:"variables-datatypes",title:"Variables and Data Types",content:`
# Arduino Variables and Data Types 📊

Variables are containers that store data values. Understanding data types is crucial for efficient memory usage and preventing bugs in your Arduino projects.

## Basic Data Types

### Integer Types
\`\`\`cpp
int temperature = 25;        // 16-bit signed (-32,768 to 32,767)
unsigned int distance = 150; // 16-bit unsigned (0 to 65,535)
long timestamp = 1234567890; // 32-bit signed
unsigned long uptime = 0;    // 32-bit unsigned (0 to 4,294,967,295)
byte sensorValue = 255;      // 8-bit unsigned (0 to 255)
\`\`\`

### Floating Point Types
\`\`\`cpp
float voltage = 3.14;        // 32-bit floating point
double precision = 3.14159; // Same as float on Arduino
\`\`\`

### Boolean and Character Types
\`\`\`cpp
bool isRunning = true;       // true or false
char letter = 'A';           // Single character
\`\`\`

## Memory Usage Comparison
| Type | Size | Range | Use Case |
|------|------|-------|----------|
| **bool** | 1 byte | true/false | Flags, states |
| **byte** | 1 byte | 0-255 | Small positive numbers |
| **int** | 2 bytes | -32,768 to 32,767 | General purpose |
| **long** | 4 bytes | ±2.1 billion | Large numbers, time |
| **float** | 4 bytes | ±3.4×10³⁸ | Decimal numbers |

## Variable Scope and Storage

### Global Variables
\`\`\`cpp
int globalCounter = 0;  // Accessible everywhere

void setup() {
  // Can use globalCounter here
}

void loop() {
  globalCounter++;  // Modify global variable
}
\`\`\`

### Local Variables
\`\`\`cpp
void loop() {
  int localValue = 100;  // Only exists in this function
  // localValue destroyed when function ends
}
\`\`\`

### Static Variables
\`\`\`cpp
void countCalls() {
  static int callCount = 0;  // Retains value between calls
  callCount++;
  Serial.println(callCount);
}
\`\`\`

## Constants and #define

### const Keyword
\`\`\`cpp
const int LED_PIN = 13;        // Cannot be changed
const float PI = 3.14159;      // Mathematical constant
\`\`\`

### #define Preprocessor
\`\`\`cpp
#define MAX_SENSORS 5          // Text replacement
#define BAUD_RATE 9600         // Configuration values
\`\`\`

## Arrays and Strings

### Arrays
\`\`\`cpp
int sensorReadings[10];        // Array of 10 integers
int pins[] = {2, 3, 4, 5};     // Initialize with values
byte data[256] = {0};          // Initialize all to 0
\`\`\`

### Strings
\`\`\`cpp
char message[] = "Hello";      // Character array
String text = "Arduino";       // String object (uses more memory)
\`\`\`

## Advanced Variable Concepts

### Volatile Variables
\`\`\`cpp
volatile bool interruptFlag = false;  // Can change unexpectedly
\`\`\`
Use with interrupt service routines and hardware registers.

### PROGMEM (Flash Storage)
\`\`\`cpp
const char welcomeMsg[] PROGMEM = "Welcome to Arduino!";
\`\`\`
Stores data in flash memory instead of RAM.

## Best Practices 💡

### Choose Appropriate Data Types
\`\`\`cpp
// Good: Efficient memory usage
byte ledBrightness = 128;     // 0-255 range
unsigned int sensorValue;     // Always positive

// Avoid: Wasteful
long ledBrightness = 128;     // Overkill for 0-255 range
\`\`\`

### Initialize Variables
\`\`\`cpp
int counter = 0;              // Good: Explicit initialization
int undefined;                // Bad: Random initial value
\`\`\`

### Use Meaningful Names
\`\`\`cpp
int temperatureCelsius = 25;  // Clear and descriptive
int t = 25;                   // Unclear abbreviation
\`\`\`

### Memory Management Tips
- **Use smallest appropriate data type**
- **Prefer local variables when possible**
- **Use PROGMEM for constant strings**
- **Monitor RAM usage** (Arduino Uno has only 2KB!)

## Common Pitfalls ⚠️
1. **Integer Overflow**: Values exceeding type limits wrap around
2. **Floating Point Precision**: Limited accuracy in calculations
3. **Uninitialized Variables**: Contain random values
4. **Global Variable Overuse**: Can cause unexpected behavior

Understanding variables and data types is fundamental to writing efficient, reliable Arduino code!
        `,type:"theory",xpReward:100},{id:"digital-quiz",title:"Arduino Fundamentals Quiz",content:"Test your understanding of Arduino basics, program structure, and digital I/O concepts.",type:"quiz",xpReward:125,quiz:[{id:"q1",question:"Which function runs only once when Arduino starts or resets?",options:["loop()","setup()","begin()","init()"],correctAnswer:1,explanation:"setup() runs once at the beginning for initialization, while loop() runs continuously."},{id:"q2",question:"What does digitalWrite(13, HIGH) do?",options:["Reads pin 13","Sets pin 13 to 5V","Sets pin 13 to 0V","Configures pin mode"],correctAnswer:1,explanation:"digitalWrite(pin, HIGH) sets the specified pin to 5V (logic high)."},{id:"q3",question:"Which pin mode enables internal pullup resistor for button input?",options:["INPUT","OUTPUT","INPUT_PULLUP","PULLUP_INPUT"],correctAnswer:2,explanation:"INPUT_PULLUP enables the internal pullup resistor, eliminating the need for external resistors."},{id:"q4",question:"What is the maximum current per digital pin on Arduino Uno?",options:["20mA","40mA","100mA","500mA"],correctAnswer:1,explanation:"Each digital pin can safely source or sink up to 40mA of current."},{id:"q5",question:"Which data type is most memory-efficient for storing values 0-255?",options:["int","long","byte","float"],correctAnswer:2,explanation:"byte uses only 1 byte of memory and can store values from 0 to 255, perfect for this range."}]}]},{id:"sensors-actuators",title:"Sensors & Actuators",description:"Explore the world of sensors and actuators - learn to read environmental data and control motors, servos, and other devices",difficulty:"intermediate",estimatedTime:"4 hours",xpReward:750,category:"Hardware",thumbnail:"https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",lessons:[{id:"analog-input",title:"Analog Input and ADC",content:`
# Analog Input: Reading the Real World 📡

Unlike digital signals that are either ON or OFF, analog signals can have any value within a range. Arduino's Analog-to-Digital Converter (ADC) transforms continuous analog voltages into discrete digital values.

## Understanding the ADC

### Key Specifications
- **Resolution**: 10-bit (1024 discrete levels)
- **Input Range**: 0V to 5V (or 3.3V on 3.3V boards)
- **Reference Voltage**: Determines maximum input voltage
- **Conversion Time**: ~100 microseconds per reading

### The analogRead() Function
\`\`\`cpp
int value = analogRead(pin);
\`\`\`
- **pin**: A0, A1, A2, A3, A4, A5 (analog pins)
- **Returns**: 0 to 1023 (10-bit resolution)

## Voltage Conversion Mathematics

### Basic Conversion Formula
\`\`\`cpp
float voltage = (analogValue * referenceVoltage) / 1023.0;

// For 5V reference:
float voltage = (analogValue * 5.0) / 1023.0;

// For 3.3V reference:
float voltage = (analogValue * 3.3) / 1023.0;
\`\`\`

### Practical Example: Battery Monitor
\`\`\`cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int rawValue = analogRead(A0);
  float voltage = (rawValue * 5.0) / 1023.0;
  float batteryPercent = (voltage - 3.0) / (4.2 - 3.0) * 100;
  
  Serial.print("Raw: ");
  Serial.print(rawValue);
  Serial.print(" | Voltage: ");
  Serial.print(voltage, 2);
  Serial.print("V | Battery: ");
  Serial.print(batteryPercent, 1);
  Serial.println("%");
  
  delay(1000);
}
\`\`\`

## Common Analog Sensors

### Potentiometer (Variable Resistor)
\`\`\`cpp
int potValue = analogRead(A0);
int brightness = map(potValue, 0, 1023, 0, 255);
analogWrite(9, brightness);  // Control LED brightness
\`\`\`

### Light Dependent Resistor (LDR)
\`\`\`cpp
int lightLevel = analogRead(A1);
if (lightLevel < 300) {
  digitalWrite(13, HIGH);  // Turn on LED in darkness
} else {
  digitalWrite(13, LOW);   // Turn off LED in light
}
\`\`\`

### Temperature Sensor (TMP36)
\`\`\`cpp
int sensorValue = analogRead(A2);
float voltage = (sensorValue * 5.0) / 1023.0;
float temperatureC = (voltage - 0.5) * 100;  // TMP36 formula
float temperatureF = (temperatureC * 9.0/5.0) + 32;

Serial.print("Temperature: ");
Serial.print(temperatureC);
Serial.print("°C (");
Serial.print(temperatureF);
Serial.println("°F)");
\`\`\`

## Advanced ADC Concepts

### Analog Reference Voltage
\`\`\`cpp
analogReference(type);
\`\`\`
- **DEFAULT**: 5V (or 3.3V)
- **INTERNAL**: 1.1V (more precise for small signals)
- **EXTERNAL**: External reference on AREF pin

### Improving ADC Accuracy
\`\`\`cpp
// Multiple readings for noise reduction
float getAverageReading(int pin, int samples) {
  long sum = 0;
  for(int i = 0; i < samples; i++) {
    sum += analogRead(pin);
    delay(10);  // Allow ADC to settle
  }
  return (float)sum / samples;
}
\`\`\`

### Voltage Divider Circuits
For measuring voltages > 5V:
\`\`\`
Input Voltage ----[R1]---- Analog Pin ----[R2]---- GND

Measured Voltage = Input × (R2 / (R1 + R2))
\`\`\`

## Sensor Interfacing Best Practices

### Signal Conditioning
1. **Filtering**: Remove noise with capacitors
2. **Amplification**: Boost weak signals
3. **Level Shifting**: Match voltage ranges
4. **Isolation**: Protect Arduino from high voltages

### Code Optimization
\`\`\`cpp
// Efficient sensor reading with timing
unsigned long lastReading = 0;
const unsigned long READING_INTERVAL = 100;  // 100ms

void loop() {
  if (millis() - lastReading >= READING_INTERVAL) {
    int sensorValue = analogRead(A0);
    processSensorData(sensorValue);
    lastReading = millis();
  }
  
  // Other non-blocking code here
}
\`\`\`

## Troubleshooting Analog Inputs 🔧

### Common Issues
- **Floating inputs**: Always connect something to analog pins
- **Noise**: Use averaging and proper grounding
- **Reference voltage**: Ensure stable power supply
- **Impedance matching**: High impedance sources may need buffering

### Debugging Tips
\`\`\`cpp
void debugAnalogPin(int pin) {
  Serial.print("A");
  Serial.print(pin);
  Serial.print(": Raw=");
  Serial.print(analogRead(pin));
  Serial.print(" Voltage=");
  Serial.println((analogRead(pin) * 5.0) / 1023.0, 3);
}
\`\`\`

Mastering analog input opens up a world of sensors and real-world interfacing possibilities!
        `,type:"theory",xpReward:125},{id:"pwm-output",title:"PWM Output and Motor Control",content:`
# PWM: Creating Analog-like Output from Digital Pins ⚡

Pulse Width Modulation (PWM) is a technique that simulates analog output by rapidly switching a digital pin between HIGH and LOW states. By varying the duty cycle, we can control the average voltage and power delivered to loads.

## Understanding PWM

### Key Concepts
- **Frequency**: How fast the signal switches (Arduino: ~490Hz or ~980Hz)
- **Duty Cycle**: Percentage of time signal is HIGH
- **Resolution**: Arduino uses 8-bit (0-255 levels)

### PWM Waveforms
\`\`\`
Duty Cycle 25%:  ▁▁▁█▁▁▁█▁▁▁█  (Average: 1.25V)
Duty Cycle 50%:  ▁▁██▁▁██▁▁██  (Average: 2.5V)
Duty Cycle 75%:  ▁███▁███▁███  (Average: 3.75V)
\`\`\`

## The analogWrite() Function

### Basic Syntax
\`\`\`cpp
analogWrite(pin, value);
\`\`\`
- **pin**: PWM-capable pins (3, 5, 6, 9, 10, 11) marked with ~
- **value**: 0-255 (0 = 0% duty cycle, 255 = 100% duty cycle)

### LED Brightness Control
\`\`\`cpp
void setup() {
  pinMode(9, OUTPUT);  // PWM pin
}

void loop() {
  // Fade in
  for(int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(9, brightness);
    delay(10);
  }
  
  // Fade out
  for(int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(9, brightness);
    delay(10);
  }
}
\`\`\`

## Motor Control with PWM

### DC Motor Speed Control
\`\`\`cpp
const int motorPin = 6;
const int potPin = A0;

void setup() {
  pinMode(motorPin, OUTPUT);
}

void loop() {
  int potValue = analogRead(potPin);
  int motorSpeed = map(potValue, 0, 1023, 0, 255);
  
  analogWrite(motorPin, motorSpeed);
  delay(10);
}
\`\`\`

### H-Bridge Motor Control (Bidirectional)
\`\`\`cpp
const int motor1Pin = 5;
const int motor2Pin = 6;
const int enablePin = 9;

void setup() {
  pinMode(motor1Pin, OUTPUT);
  pinMode(motor2Pin, OUTPUT);
  pinMode(enablePin, OUTPUT);
}

void motorControl(int speed) {
  if (speed > 0) {
    // Forward direction
    digitalWrite(motor1Pin, HIGH);
    digitalWrite(motor2Pin, LOW);
    analogWrite(enablePin, speed);
  } else if (speed < 0) {
    // Reverse direction
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    analogWrite(enablePin, -speed);
  } else {
    // Stop motor
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    analogWrite(enablePin, 0);
  }
}
\`\`\`

## Servo Motor Control

### Using the Servo Library
\`\`\`cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);  // Attach servo to pin 9
}

void loop() {
  // Sweep from 0 to 180 degrees
  for(int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);
    delay(15);
  }
  
  // Sweep back from 180 to 0 degrees
  for(int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}
\`\`\`

### Manual PWM Servo Control
\`\`\`cpp
const int servoPin = 9;

void setup() {
  pinMode(servoPin, OUTPUT);
}

void setServoAngle(int angle) {
  // Convert angle (0-180) to pulse width (1000-2000 microseconds)
  int pulseWidth = map(angle, 0, 180, 1000, 2000);
  
  digitalWrite(servoPin, HIGH);
  delayMicroseconds(pulseWidth);
  digitalWrite(servoPin, LOW);
  delay(20);  // 50Hz refresh rate
}

void loop() {
  setServoAngle(0);    // 0 degrees
  delay(1000);
  setServoAngle(90);   // 90 degrees
  delay(1000);
  setServoAngle(180);  // 180 degrees
  delay(1000);
}
\`\`\`

## Advanced PWM Techniques

### Custom PWM Frequency
\`\`\`cpp
void setPWMFrequency(int pin, int divisor) {
  byte mode;
  if(pin == 5 || pin == 6 || pin == 9 || pin == 10) {
    switch(divisor) {
      case 1: mode = 0x01; break;    // 31372.55 Hz
      case 8: mode = 0x02; break;    // 3921.16 Hz
      case 64: mode = 0x03; break;   // 490.20 Hz (default)
      case 256: mode = 0x04; break;  // 122.55 Hz
      case 1024: mode = 0x05; break; // 30.64 Hz
      default: return;
    }
    
    if(pin == 5 || pin == 6) {
      TCCR0B = TCCR0B & 0b11111000 | mode;
    } else {
      TCCR1B = TCCR1B & 0b11111000 | mode;
    }
  }
}
\`\`\`

### Soft PWM for Non-PWM Pins
\`\`\`cpp
void softPWM(int pin, int dutyCycle, int period) {
  int onTime = (period * dutyCycle) / 255;
  int offTime = period - onTime;
  
  if (onTime > 0) {
    digitalWrite(pin, HIGH);
    delayMicroseconds(onTime);
  }
  
  if (offTime > 0) {
    digitalWrite(pin, LOW);
    delayMicroseconds(offTime);
  }
}
\`\`\`

## PWM Applications and Projects

### RGB LED Color Mixing
\`\`\`cpp
const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  setColor(255, 0, 0);    // Red
  delay(1000);
  setColor(0, 255, 0);    // Green
  delay(1000);
  setColor(0, 0, 255);    // Blue
  delay(1000);
  setColor(255, 255, 0);  // Yellow
  delay(1000);
}
\`\`\`

### Fan Speed Controller
\`\`\`cpp
const int fanPin = 6;
const int tempPin = A0;

void loop() {
  int tempReading = analogRead(tempPin);
  float voltage = (tempReading * 5.0) / 1023.0;
  float temperature = (voltage - 0.5) * 100;  // TMP36 sensor
  
  int fanSpeed = 0;
  if (temperature > 25) {
    fanSpeed = map(temperature, 25, 50, 100, 255);
    fanSpeed = constrain(fanSpeed, 0, 255);
  }
  
  analogWrite(fanPin, fanSpeed);
  delay(1000);
}
\`\`\`

## PWM Limitations and Considerations ⚠️

### Hardware Limitations
- **Limited pins**: Only 6 PWM pins on Arduino Uno
- **Shared timers**: Some pins share timers (affects frequency)
- **Current limits**: Still limited by pin current capacity (40mA)

### When PWM Isn't Suitable
- **True analog output**: Use DAC chips for precise voltages
- **High-frequency signals**: PWM frequency may be too low
- **Audio applications**: May cause audible noise

### Best Practices
- **Use appropriate drivers**: MOSFETs, motor drivers for high current
- **Filter output**: Add capacitors for smoother analog-like signals
- **Consider load characteristics**: Inductive loads need flyback diodes
- **Monitor heat**: High PWM duty cycles can cause heating

PWM is a powerful technique that bridges the gap between digital control and analog-like output!
        `,type:"theory",xpReward:150},{id:"sensor-project",title:"Project: Environmental Monitor",content:"Build a comprehensive environmental monitoring system that reads temperature, light level, and controls a fan based on temperature. Use analog inputs for sensors and PWM output for fan control.",type:"code",xpReward:200,codeTemplate:`// Environmental Monitor Project
const int tempPin = A0;      // Temperature sensor (TMP36)
const int lightPin = A1;     // Light sensor (LDR)
const int fanPin = 6;        // PWM fan control
const int ledPin = 13;       // Status LED

void setup() {
  Serial.begin(9600);
  pinMode(fanPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  
  Serial.println("Environmental Monitor Started");
  Serial.println("Temp(C) | Light | Fan Speed | Status");
  Serial.println("--------|-------|----------|-------");
}

void loop() {
  // Read temperature sensor (TMP36)
  int tempReading = analogRead(tempPin);
  float voltage = (tempReading * 5.0) / 1023.0;
  float temperature = (voltage - 0.5) * 100.0;
  
  // Read light sensor (LDR)
  int lightLevel = analogRead(lightPin);
  int lightPercent = map(lightLevel, 0, 1023, 0, 100);
  
  // Control fan based on temperature
  int fanSpeed = 0;
  String status = "Cool";
  
  if (temperature > 25) {
    fanSpeed = map(temperature, 25, 40, 100, 255);
    fanSpeed = constrain(fanSpeed, 0, 255);
    status = "Warm - Fan On";
  }
  
  if (temperature > 35) {
    status = "Hot - Max Fan";
    digitalWrite(ledPin, HIGH);  // Warning LED
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  // Set fan speed
  analogWrite(fanPin, fanSpeed);
  
  // Display readings
  Serial.print(temperature, 1);
  Serial.print("°C   | ");
  Serial.print(lightPercent);
  Serial.print("%    | ");
  Serial.print(map(fanSpeed, 0, 255, 0, 100));
  Serial.print("%       | ");
  Serial.println(status);
  
  delay(2000);  // Update every 2 seconds
}`,expectedOutput:"Environmental data displayed with automatic fan control based on temperature"}]},{id:"communication",title:"Communication Protocols",description:"Master Serial, I2C, and SPI communication protocols for connecting Arduino to computers, sensors, and other devices",difficulty:"advanced",estimatedTime:"5 hours",xpReward:1e3,category:"Communication",thumbnail:"https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",lessons:[{id:"serial-communication",title:"Serial Communication Mastery",content:`
# Serial Communication: Arduino's Gateway to the World 🌐

Serial communication is one of the most fundamental and versatile communication methods in Arduino. It enables your Arduino to talk to computers, other Arduinos, sensors, and countless other devices.

## Understanding Serial Communication

### What is Serial Communication?
Serial communication transmits data **one bit at a time** over a single wire (plus ground). While slower than parallel communication, it's simpler, uses fewer wires, and is less susceptible to interference.

### UART (Universal Asynchronous Receiver-Transmitter)
Arduino uses UART for serial communication:
- **Asynchronous**: No shared clock signal
- **Full-duplex**: Can send and receive simultaneously
- **Configurable**: Various baud rates and data formats

## Arduino Serial Hardware

### Hardware Serial (Serial)
- **Pins**: 0 (RX) and 1 (TX) on Arduino Uno
- **Built-in**: Uses dedicated UART hardware
- **USB Connection**: Automatically connected to USB port

### SoftwareSerial Library
\`\`\`cpp
#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3);  // RX, TX pins
\`\`\`
- **Any digital pins**: Create serial on any pins
- **Multiple instances**: Have several serial connections
- **Limitations**: Lower baud rates, not full-duplex

## Basic Serial Functions

### Initialization
\`\`\`cpp
void setup() {
  Serial.begin(baudRate);  // Start serial communication
}
\`\`\`

### Common Baud Rates
| Baud Rate | Use Case |
|-----------|----------|
| **9600** | Default, debugging, simple sensors |
| **19200** | Faster debugging |
| **38400** | GPS modules, some sensors |
| **57600** | High-speed sensors |
| **115200** | Maximum for most applications |

### Sending Data
\`\`\`cpp
Serial.print("Hello");           // Send text without newline
Serial.println("World");         // Send text with newline
Serial.print(123);               // Send number
Serial.print(3.14159, 2);        // Send float with 2 decimal places
Serial.write(65);                // Send raw byte (ASCII 'A')
\`\`\`

### Receiving Data
\`\`\`cpp
if (Serial.available()) {        // Check if data available
  char incomingByte = Serial.read();     // Read single byte
  String message = Serial.readString(); // Read entire string
  int number = Serial.parseInt();        // Parse integer
  float value = Serial.parseFloat();     // Parse floating point
}
\`\`\`

## Advanced Serial Techniques

### Non-blocking Serial Reading
\`\`\`cpp
String inputString = "";
boolean stringComplete = false;

void setup() {
  Serial.begin(9600);
  inputString.reserve(200);  // Reserve memory for string
}

void loop() {
  // Non-blocking serial processing
  if (stringComplete) {
    processCommand(inputString);
    inputString = "";
    stringComplete = false;
  }
  
  // Other code continues to run
  doOtherTasks();
}

void serialEvent() {
  while (Serial.available()) {
    char inChar = (char)Serial.read();
    inputString += inChar;
    
    if (inChar == '\\n') {
      stringComplete = true;
    }
  }
}
\`\`\`

### Command Parser
\`\`\`cpp
void processCommand(String command) {
  command.trim();  // Remove whitespace
  
  if (command.startsWith("LED")) {
    String state = command.substring(4);
    if (state == "ON") {
      digitalWrite(13, HIGH);
      Serial.println("LED turned ON");
    } else if (state == "OFF") {
      digitalWrite(13, LOW);
      Serial.println("LED turned OFF");
    }
  }
  else if (command.startsWith("READ")) {
    String pin = command.substring(5);
    int pinNum = pin.toInt();
    int value = digitalRead(pinNum);
    Serial.print("Pin ");
    Serial.print(pinNum);
    Serial.print(" = ");
    Serial.println(value);
  }
  else {
    Serial.println("Unknown command");
  }
}
\`\`\`

## Serial Communication Protocols

### Custom Protocol Design
\`\`\`cpp
// Protocol: <COMMAND>:<VALUE>\\n
// Examples: TEMP:25.6, LED:1, MOTOR:150

void sendSensorData(float temperature, int humidity) {
  Serial.print("TEMP:");
  Serial.println(temperature, 1);
  Serial.print("HUMID:");
  Serial.println(humidity);
}

void parseIncomingData() {
  if (Serial.available()) {
    String data = Serial.readStringUntil('\\n');
    int colonIndex = data.indexOf(':');
    
    if (colonIndex > 0) {
      String command = data.substring(0, colonIndex);
      String value = data.substring(colonIndex + 1);
      
      executeCommand(command, value);
    }
  }
}
\`\`\`

### JSON Communication
\`\`\`cpp
void sendJSONData(float temp, int light, bool motion) {
  Serial.print("{");
  Serial.print("\\"temperature\\":");
  Serial.print(temp, 1);
  Serial.print(",\\"light\\":");
  Serial.print(light);
  Serial.print(",\\"motion\\":");
  Serial.print(motion ? "true" : "false");
  Serial.println("}");
}
\`\`\`

## Arduino-to-Arduino Communication

### Master-Slave Setup
\`\`\`cpp
// Master Arduino
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("GET_TEMP");  // Request temperature
  
  if (Serial.available()) {
    float temperature = Serial.parseFloat();
    Serial.print("Received temperature: ");
    Serial.println(temperature);
  }
  
  delay(1000);
}

// Slave Arduino
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    String command = Serial.readString();
    command.trim();
    
    if (command == "GET_TEMP") {
      float temp = readTemperature();  // Your sensor reading function
      Serial.println(temp);
    }
  }
}
\`\`\`

## Serial Debugging Techniques

### Debug Macros
\`\`\`cpp
#define DEBUG 1

#if DEBUG
  #define DEBUG_PRINT(x) Serial.print(x)
  #define DEBUG_PRINTLN(x) Serial.println(x)
#else
  #define DEBUG_PRINT(x)
  #define DEBUG_PRINTLN(x)
#endif

void loop() {
  int sensorValue = analogRead(A0);
  DEBUG_PRINT("Sensor reading: ");
  DEBUG_PRINTLN(sensorValue);
  
  // Debug output only appears when DEBUG is 1
}
\`\`\`

### Performance Monitoring
\`\`\`cpp
void benchmarkFunction() {
  unsigned long startTime = micros();
  
  // Your code to benchmark
  complexCalculation();
  
  unsigned long endTime = micros();
  Serial.print("Execution time: ");
  Serial.print(endTime - startTime);
  Serial.println(" microseconds");
}
\`\`\`

## Troubleshooting Serial Communication 🔧

### Common Issues
1. **Wrong baud rate**: Ensure both ends use same rate
2. **Missing newlines**: Use println() or add \\n
3. **Buffer overflow**: Process data quickly or increase buffer
4. **Electrical noise**: Use proper grounding and shielding

### Serial Monitor Tips
- **Line ending settings**: Match your code expectations
- **Baud rate selection**: Must match your Serial.begin()
- **Autoscroll**: Keep latest data visible
- **Timestamp**: Enable for timing analysis

### Hardware Debugging
\`\`\`cpp
void serialDiagnostics() {
  Serial.println("=== Serial Diagnostics ===");
  Serial.print("Available bytes: ");
  Serial.println(Serial.available());
  Serial.print("Baud rate: ");
  Serial.println(9600);  // Your configured rate
  Serial.println("========================");
}
\`\`\`

## Real-World Applications

### Data Logging
\`\`\`cpp
void logSensorData() {
  unsigned long timestamp = millis();
  float temperature = readTemperature();
  int humidity = readHumidity();
  
  Serial.print(timestamp);
  Serial.print(",");
  Serial.print(temperature, 2);
  Serial.print(",");
  Serial.println(humidity);
}
\`\`\`

### Remote Control Interface
\`\`\`cpp
void handleRemoteCommands() {
  if (Serial.available()) {
    String command = Serial.readStringUntil('\\n');
    
    if (command == "STATUS") {
      reportSystemStatus();
    } else if (command.startsWith("MOVE")) {
      int distance = command.substring(5).toInt();
      moveRobot(distance);
    } else if (command == "STOP") {
      emergencyStop();
    }
  }
}
\`\`\`

Serial communication is your Arduino's voice - master it to create sophisticated, connected projects!
        `,type:"theory",xpReward:150},{id:"i2c-communication",title:"I2C Protocol Deep Dive",content:`
# I2C: The Multi-Device Communication Highway 🛣️

Inter-Integrated Circuit (I2C) is a synchronous, multi-master, multi-slave communication protocol that allows multiple devices to communicate over just two wires. It's perfect for connecting sensors, displays, and other peripherals to your Arduino.

## I2C Fundamentals

### Key Characteristics
- **Two-wire interface**: SDA (data) and SCL (clock)
- **Multi-device**: Up to 127 devices on one bus
- **Addressable**: Each device has a unique 7-bit address
- **Synchronous**: Clock signal coordinates data transfer
- **Bidirectional**: Same wires for sending and receiving

### Arduino I2C Pins
| Board | SDA Pin | SCL Pin |
|-------|---------|---------|
| **Uno/Nano** | A4 | A5 |
| **Mega** | 20 | 21 |
| **Leonardo** | 2 | 3 |
| **ESP32** | 21 | 22 (configurable) |

## I2C Protocol Basics

### Communication Flow
1. **Start Condition**: Master pulls SDA low while SCL is high
2. **Address Frame**: 7-bit device address + R/W bit
3. **Acknowledge**: Slave pulls SDA low to confirm
4. **Data Frames**: 8-bit data packets with ACK/NACK
5. **Stop Condition**: Master releases SDA while SCL is high

### Wire Library Functions
\`\`\`cpp
#include <Wire.h>

// Master functions
Wire.begin();                    // Initialize as master
Wire.beginTransmission(address); // Start communication
Wire.write(data);                // Send data
Wire.endTransmission();          // End communication
Wire.requestFrom(address, bytes); // Request data
Wire.available();                // Check received data
Wire.read();                     // Read received data

// Slave functions
Wire.begin(address);             // Initialize as slave
Wire.onReceive(handler);         // Set receive handler
Wire.onRequest(handler);         // Set request handler
\`\`\`

## I2C Master Examples

### Basic Master Write
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();        // Initialize I2C as master
  Serial.begin(9600);
}

void loop() {
  Wire.beginTransmission(8);  // Address slave device 8
  Wire.write("Hello");        // Send message
  Wire.endTransmission();     // Complete transmission
  
  Serial.println("Message sent to slave");
  delay(1000);
}
\`\`\`

### Master Read Example
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void loop() {
  Wire.requestFrom(8, 6);    // Request 6 bytes from slave 8
  
  String received = "";
  while (Wire.available()) {
    char c = Wire.read();
    received += c;
  }
  
  Serial.print("Received: ");
  Serial.println(received);
  delay(1000);
}
\`\`\`

### Advanced Master Communication
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void sendCommand(int address, byte command, int value) {
  Wire.beginTransmission(address);
  Wire.write(command);           // Command byte
  Wire.write(value >> 8);        // High byte
  Wire.write(value & 0xFF);      // Low byte
  byte error = Wire.endTransmission();
  
  if (error == 0) {
    Serial.println("Command sent successfully");
  } else {
    Serial.print("Error: ");
    Serial.println(error);
  }
}

int readSensor(int address, byte register_addr) {
  Wire.beginTransmission(address);
  Wire.write(register_addr);
  Wire.endTransmission(false);   // Repeated start
  
  Wire.requestFrom(address, 2);
  if (Wire.available() >= 2) {
    int highByte = Wire.read();
    int lowByte = Wire.read();
    return (highByte << 8) | lowByte;
  }
  return -1;  // Error
}
\`\`\`

## I2C Slave Examples

### Basic Slave Receiver
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin(8);              // Initialize as slave with address 8
  Wire.onReceive(receiveEvent); // Register receive handler
  Serial.begin(9600);
}

void loop() {
  delay(100);  // Main loop can do other tasks
}

void receiveEvent(int bytes) {
  String message = "";
  while (Wire.available()) {
    char c = Wire.read();
    message += c;
  }
  
  Serial.print("Received: ");
  Serial.println(message);
}
\`\`\`

### Slave Transmitter
\`\`\`cpp
#include <Wire.h>

int sensorValue = 0;

void setup() {
  Wire.begin(8);              // Slave address 8
  Wire.onRequest(requestEvent); // Register request handler
  Serial.begin(9600);
}

void loop() {
  sensorValue = analogRead(A0);  // Update sensor reading
  delay(100);
}

void requestEvent() {
  // Send sensor data when master requests
  Wire.write(sensorValue >> 8);    // High byte
  Wire.write(sensorValue & 0xFF);  // Low byte
}
\`\`\`

## Common I2C Devices and Libraries

### LCD Display (PCF8574 I2C Backpack)
\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // Address, columns, rows

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello, I2C!");
}
\`\`\`

### Real-Time Clock (DS3231)
\`\`\`cpp
#include <Wire.h>
#include <RTClib.h>

RTC_DS3231 rtc;

void setup() {
  Serial.begin(9600);
  
  if (!rtc.begin()) {
    Serial.println("RTC not found!");
    while (1);
  }
  
  // Set time if needed
  // rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
}

void loop() {
  DateTime now = rtc.now();
  
  Serial.print(now.year());
  Serial.print('/');
  Serial.print(now.month());
  Serial.print('/');
  Serial.print(now.day());
  Serial.print(' ');
  Serial.print(now.hour());
  Serial.print(':');
  Serial.print(now.minute());
  Serial.print(':');
  Serial.println(now.second());
  
  delay(1000);
}
\`\`\`

### EEPROM Memory (24LC256)
\`\`\`cpp
#include <Wire.h>

const int EEPROM_ADDR = 0x50;

void writeEEPROM(int address, byte data) {
  Wire.beginTransmission(EEPROM_ADDR);
  Wire.write(address >> 8);    // High address byte
  Wire.write(address & 0xFF);  // Low address byte
  Wire.write(data);
  Wire.endTransmission();
  delay(5);  // Write cycle time
}

byte readEEPROM(int address) {
  Wire.beginTransmission(EEPROM_ADDR);
  Wire.write(address >> 8);
  Wire.write(address & 0xFF);
  Wire.endTransmission();
  
  Wire.requestFrom(EEPROM_ADDR, 1);
  if (Wire.available()) {
    return Wire.read();
  }
  return 0;
}
\`\`\`

## I2C Scanner and Debugging

### Device Scanner
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println("I2C Scanner");
  Serial.println("Scanning...");
  
  int deviceCount = 0;
  for (byte address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    byte error = Wire.endTransmission();
    
    if (error == 0) {
      Serial.print("Device found at address 0x");
      if (address < 16) Serial.print("0");
      Serial.println(address, HEX);
      deviceCount++;
    }
  }
  
  if (deviceCount == 0) {
    Serial.println("No I2C devices found");
  } else {
    Serial.print("Found ");
    Serial.print(deviceCount);
    Serial.println(" devices");
  }
}

void loop() {}
\`\`\`

### Error Handling
\`\`\`cpp
void checkI2CError(byte error) {
  switch (error) {
    case 0:
      Serial.println("Success");
      break;
    case 1:
      Serial.println("Data too long for buffer");
      break;
    case 2:
      Serial.println("NACK on address");
      break;
    case 3:
      Serial.println("NACK on data");
      break;
    case 4:
      Serial.println("Other error");
      break;
    default:
      Serial.println("Unknown error");
  }
}
\`\`\`

## Advanced I2C Concepts

### Pull-up Resistors
- **Required**: SDA and SCL lines need pull-up resistors
- **Typical values**: 4.7kΩ for 5V, 2.2kΩ for 3.3V
- **Built-in**: Some boards have internal pull-ups

### Clock Speed Configuration
\`\`\`cpp
void setup() {
  Wire.begin();
  Wire.setClock(400000);  // Set to 400kHz (Fast Mode)
  // Standard: 100kHz, Fast: 400kHz, Fast+: 1MHz
}
\`\`\`

### Multi-Master Considerations
\`\`\`cpp
// Handle bus arbitration
void safeMasterWrite(int address, byte data) {
  Wire.beginTransmission(address);
  Wire.write(data);
  byte error = Wire.endTransmission();
  
  if (error == 2) {
    // Address NACK - device not responding
    Serial.println("Device not found");
  } else if (error == 4) {
    // Other error - possibly bus collision
    delay(random(10, 50));  // Random backoff
    // Retry transmission
  }
}
\`\`\`

## Troubleshooting I2C Issues 🔧

### Common Problems
1. **Missing pull-up resistors**: SDA/SCL float
2. **Wrong address**: Device not responding
3. **Bus lockup**: One device holds line low
4. **Timing issues**: Clock too fast for device
5. **Power supply**: Insufficient or noisy power

### Debugging Techniques
\`\`\`cpp
void i2cDiagnostics() {
  Serial.println("=== I2C Diagnostics ===");
  
  // Check if pins are pulled high
  pinMode(A4, INPUT);  // SDA
  pinMode(A5, INPUT);  // SCL
  
  Serial.print("SDA level: ");
  Serial.println(digitalRead(A4) ? "HIGH" : "LOW");
  Serial.print("SCL level: ");
  Serial.println(digitalRead(A5) ? "HIGH" : "LOW");
  
  Wire.begin();  // Reinitialize
}
\`\`\`

I2C opens up a world of sensors and peripherals with minimal wiring complexity!
        `,type:"theory",xpReward:175}]},{id:"advanced-projects",title:"Advanced Arduino Projects",description:"Build complex, real-world projects combining multiple sensors, actuators, and communication protocols",difficulty:"advanced",estimatedTime:"6 hours",xpReward:1250,category:"Projects",thumbnail:"https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",lessons:[{id:"iot-weather-station",title:"IoT Weather Station",content:`
# Building an IoT Weather Station 🌤️

Create a comprehensive weather monitoring system that collects environmental data, displays it locally, and can transmit data to the cloud for remote monitoring.

## Project Overview

### Features
- **Multi-sensor data collection**: Temperature, humidity, pressure, light
- **Local display**: LCD screen with real-time readings
- **Data logging**: Store readings to SD card
- **Wireless connectivity**: WiFi for IoT integration
- **Web interface**: Access data remotely
- **Alert system**: Notifications for extreme conditions

### Components Required
- Arduino Uno or ESP32
- DHT22 (Temperature & Humidity)
- BMP280 (Pressure & Altitude)
- LDR (Light sensor)
- 16x2 LCD with I2C backpack
- SD card module
- Real-time clock (DS3231)
- Buzzer for alerts
- LEDs for status indication

## Hardware Connections

### Sensor Wiring
\`\`\`
DHT22:
- VCC → 5V
- GND → GND
- DATA → Pin 2

BMP280 (I2C):
- VCC → 3.3V
- GND → GND
- SDA → A4
- SCL → A5

LCD (I2C):
- VCC → 5V
- GND → GND
- SDA → A4
- SCL → A5

SD Card Module:
- VCC → 5V
- GND → GND
- MISO → Pin 12
- MOSI → Pin 11
- SCK → Pin 13
- CS → Pin 10
\`\`\`

## Complete Weather Station Code

\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>
#include <Adafruit_BMP280.h>
#include <RTClib.h>
#include <SD.h>
#include <SPI.h>

// Pin definitions
#define DHT_PIN 2
#define DHT_TYPE DHT22
#define LDR_PIN A0
#define BUZZER_PIN 8
#define LED_STATUS 7
#define LED_ALERT 6
#define SD_CS_PIN 10

// Sensor objects
DHT dht(DHT_PIN, DHT_TYPE);
Adafruit_BMP280 bmp;
RTC_DS3231 rtc;
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Data structure
struct WeatherData {
  float temperature;
  float humidity;
  float pressure;
  float altitude;
  int lightLevel;
  DateTime timestamp;
};

// Global variables
WeatherData currentReading;
unsigned long lastReading = 0;
unsigned long lastDisplay = 0;
unsigned long lastLog = 0;
const unsigned long READING_INTERVAL = 5000;   // 5 seconds
const unsigned long DISPLAY_INTERVAL = 2000;   // 2 seconds
const unsigned long LOG_INTERVAL = 60000;      // 1 minute

// Alert thresholds
const float TEMP_HIGH = 35.0;
const float TEMP_LOW = 0.0;
const float HUMIDITY_HIGH = 80.0;
const float PRESSURE_LOW = 1000.0;

void setup() {
  Serial.begin(9600);
  
  // Initialize pins
  pinMode(LED_STATUS, OUTPUT);
  pinMode(LED_ALERT, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  
  // Initialize I2C devices
  Wire.begin();
  lcd.init();
  lcd.backlight();
  
  // Initialize sensors
  dht.begin();
  
  if (!bmp.begin()) {
    Serial.println("BMP280 sensor not found!");
    lcd.setCursor(0, 0);
    lcd.print("BMP280 Error!");
    while (1);
  }
  
  if (!rtc.begin()) {
    Serial.println("RTC not found!");
    lcd.setCursor(0, 0);
    lcd.print("RTC Error!");
    while (1);
  }
  
  // Initialize SD card
  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("SD card initialization failed!");
    lcd.setCursor(0, 0);
    lcd.print("SD Card Error!");
    delay(2000);
  }
  
  // Create header in log file
  File logFile = SD.open("weather.csv", FILE_WRITE);
  if (logFile) {
    logFile.println("Timestamp,Temperature,Humidity,Pressure,Altitude,Light");
    logFile.close();
  }
  
  // Startup message
  lcd.setCursor(0, 0);
  lcd.print("Weather Station");
  lcd.setCursor(0, 1);
  lcd.print("Initializing...");
  delay(2000);
  
  digitalWrite(LED_STATUS, HIGH);
  Serial.println("Weather Station Ready!");
}

void loop() {
  unsigned long currentTime = millis();
  
  // Read sensors
  if (currentTime - lastReading >= READING_INTERVAL) {
    readSensors();
    checkAlerts();
    lastReading = currentTime;
  }
  
  // Update display
  if (currentTime - lastDisplay >= DISPLAY_INTERVAL) {
    updateDisplay();
    lastDisplay = currentTime;
  }
  
  // Log data
  if (currentTime - lastLog >= LOG_INTERVAL) {
    logData();
    lastLog = currentTime;
  }
  
  // Handle serial commands
  handleSerialCommands();
}

void readSensors() {
  // Read DHT22
  currentReading.temperature = dht.readTemperature();
  currentReading.humidity = dht.readHumidity();
  
  // Read BMP280
  currentReading.pressure = bmp.readPressure() / 100.0F; // Convert to hPa
  currentReading.altitude = bmp.readAltitude(1013.25);   // Sea level pressure
  
  // Read light sensor
  int rawLight = analogRead(LDR_PIN);
  currentReading.lightLevel = map(rawLight, 0, 1023, 0, 100);
  
  // Get timestamp
  currentReading.timestamp = rtc.now();
  
  // Print to serial
  printSensorData();
}

void printSensorData() {
  Serial.println("=== Weather Reading ===");
  Serial.print("Time: ");
  Serial.println(currentReading.timestamp.timestamp());
  Serial.print("Temperature: ");
  Serial.print(currentReading.temperature, 1);
  Serial.println("°C");
  Serial.print("Humidity: ");
  Serial.print(currentReading.humidity, 1);
  Serial.println("%");
  Serial.print("Pressure: ");
  Serial.print(currentReading.pressure, 1);
  Serial.println(" hPa");
  Serial.print("Altitude: ");
  Serial.print(currentReading.altitude, 1);
  Serial.println(" m");
  Serial.print("Light: ");
  Serial.print(currentReading.lightLevel);
  Serial.println("%");
  Serial.println();
}

void updateDisplay() {
  static int displayMode = 0;
  
  lcd.clear();
  
  switch (displayMode) {
    case 0: // Temperature and Humidity
      lcd.setCursor(0, 0);
      lcd.print("Temp: ");
      lcd.print(currentReading.temperature, 1);
      lcd.print("C");
      lcd.setCursor(0, 1);
      lcd.print("Humid: ");
      lcd.print(currentReading.humidity, 1);
      lcd.print("%");
      break;
      
    case 1: // Pressure and Altitude
      lcd.setCursor(0, 0);
      lcd.print("Press: ");
      lcd.print(currentReading.pressure, 0);
      lcd.print("hPa");
      lcd.setCursor(0, 1);
      lcd.print("Alt: ");
      lcd.print(currentReading.altitude, 0);
      lcd.print("m");
      break;
      
    case 2: // Light and Time
      lcd.setCursor(0, 0);
      lcd.print("Light: ");
      lcd.print(currentReading.lightLevel);
      lcd.print("%");
      lcd.setCursor(0, 1);
      lcd.print(currentReading.timestamp.hour());
      lcd.print(":");
      if (currentReading.timestamp.minute() < 10) lcd.print("0");
      lcd.print(currentReading.timestamp.minute());
      lcd.print(":");
      if (currentReading.timestamp.second() < 10) lcd.print("0");
      lcd.print(currentReading.timestamp.second());
      break;
  }
  
  displayMode = (displayMode + 1) % 3;
}

void checkAlerts() {
  bool alertActive = false;
  
  // Temperature alerts
  if (currentReading.temperature > TEMP_HIGH || currentReading.temperature < TEMP_LOW) {
    alertActive = true;
    Serial.println("ALERT: Temperature out of range!");
  }
  
  // Humidity alert
  if (currentReading.humidity > HUMIDITY_HIGH) {
    alertActive = true;
    Serial.println("ALERT: High humidity!");
  }
  
  // Pressure alert
  if (currentReading.pressure < PRESSURE_LOW) {
    alertActive = true;
    Serial.println("ALERT: Low pressure - storm approaching!");
  }
  
  // Control alert LED and buzzer
  if (alertActive) {
    digitalWrite(LED_ALERT, HIGH);
    tone(BUZZER_PIN, 1000, 200);
  } else {
    digitalWrite(LED_ALERT, LOW);
  }
}

void logData() {
  File logFile = SD.open("weather.csv", FILE_WRITE);
  if (logFile) {
    // Write timestamp
    logFile.print(currentReading.timestamp.timestamp());
    logFile.print(",");
    
    // Write sensor data
    logFile.print(currentReading.temperature, 2);
    logFile.print(",");
    logFile.print(currentReading.humidity, 2);
    logFile.print(",");
    logFile.print(currentReading.pressure, 2);
    logFile.print(",");
    logFile.print(currentReading.altitude, 2);
    logFile.print(",");
    logFile.println(currentReading.lightLevel);
    
    logFile.close();
    Serial.println("Data logged to SD card");
  } else {
    Serial.println("Error opening log file");
  }
}

void handleSerialCommands() {
  if (Serial.available()) {
    String command = Serial.readStringUntil('\\n');
    command.trim();
    
    if (command == "STATUS") {
      printSensorData();
    } else if (command == "RESET") {
      // Reset min/max values or clear logs
      Serial.println("System reset");
    } else if (command == "CALIBRATE") {
      // Calibration routine
      Serial.println("Starting calibration...");
    } else if (command.startsWith("SET_TIME")) {
      // Set RTC time
      Serial.println("Time setting not implemented");
    } else {
      Serial.println("Unknown command. Available: STATUS, RESET, CALIBRATE, SET_TIME");
    }
  }
}
\`\`\`

## Advanced Features

### Data Analysis
\`\`\`cpp
struct Statistics {
  float minTemp, maxTemp, avgTemp;
  float minHumidity, maxHumidity, avgHumidity;
  float minPressure, maxPressure, avgPressure;
  int sampleCount;
};

Statistics dailyStats;

void updateStatistics() {
  if (dailyStats.sampleCount == 0) {
    // First reading of the day
    dailyStats.minTemp = dailyStats.maxTemp = dailyStats.avgTemp = currentReading.temperature;
    dailyStats.minHumidity = dailyStats.maxHumidity = dailyStats.avgHumidity = currentReading.humidity;
    dailyStats.minPressure = dailyStats.maxPressure = dailyStats.avgPressure = currentReading.pressure;
    dailyStats.sampleCount = 1;
  } else {
    // Update min/max
    dailyStats.minTemp = min(dailyStats.minTemp, currentReading.temperature);
    dailyStats.maxTemp = max(dailyStats.maxTemp, currentReading.temperature);
    
    // Update running averages
    dailyStats.avgTemp = (dailyStats.avgTemp * dailyStats.sampleCount + currentReading.temperature) / (dailyStats.sampleCount + 1);
    dailyStats.avgHumidity = (dailyStats.avgHumidity * dailyStats.sampleCount + currentReading.humidity) / (dailyStats.sampleCount + 1);
    dailyStats.avgPressure = (dailyStats.avgPressure * dailyStats.sampleCount + currentReading.pressure) / (dailyStats.sampleCount + 1);
    
    dailyStats.sampleCount++;
  }
}
\`\`\`

### Weather Prediction
\`\`\`cpp
enum WeatherTrend {
  STABLE,
  IMPROVING,
  DETERIORATING
};

WeatherTrend predictWeather() {
  static float pressureHistory[5];
  static int historyIndex = 0;
  static bool historyFull = false;
  
  // Store current pressure
  pressureHistory[historyIndex] = currentReading.pressure;
  historyIndex = (historyIndex + 1) % 5;
  
  if (historyIndex == 0) historyFull = true;
  
  if (!historyFull) return STABLE;
  
  // Calculate pressure trend
  float trend = 0;
  for (int i = 0; i < 4; i++) {
    int current = (historyIndex + i) % 5;
    int next = (historyIndex + i + 1) % 5;
    trend += pressureHistory[next] - pressureHistory[current];
  }
  
  if (trend > 2.0) return IMPROVING;
  else if (trend < -2.0) return DETERIORATING;
  else return STABLE;
}
\`\`\`

This weather station project demonstrates integration of multiple sensors, data logging, real-time display, and alert systems - essential skills for IoT development!
        `,type:"theory",xpReward:200}]}],mF=()=>{var s;const{currentUser:t}=Ai(),{getCourseProgress:e}=T1(),n=o=>{const a=e(o),u=iu.find(c=>c.id===o);return!a||!u?0:Math.round(a.completedLessons.length/u.lessons.length*100)},r=[{label:"Current Level",value:(t==null?void 0:t.level)||1,icon:Cs,color:"from-yellow-500 to-amber-500",bgColor:"bg-yellow-500/10",textColor:"text-yellow-400"},{label:"Total XP",value:((t==null?void 0:t.totalXP)||0).toLocaleString(),icon:As,color:"from-orange-500 to-red-500",bgColor:"bg-orange-500/10",textColor:"text-orange-400"},{label:"Courses Completed",value:(t==null?void 0:t.completedCourses.length)||0,icon:_a,color:"from-green-500 to-emerald-500",bgColor:"bg-green-500/10",textColor:"text-green-400"},{label:"Study Streak",value:"7 days",icon:S1,color:"from-purple-500 to-pink-500",bgColor:"bg-purple-500/10",textColor:"text-purple-400"}],i=[{name:"First Steps",icon:"🎯",unlocked:!0},{name:"Code Warrior",icon:"⚔️",unlocked:!0},{name:"Quick Learner",icon:"⚡",unlocked:!1},{name:"Perfectionist",icon:"💎",unlocked:!1}];return y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[y.jsx(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"mb-8",children:y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsxs("h1",{className:"text-4xl font-bold text-white mb-2",children:["Welcome back, ",y.jsx("span",{className:"gradient-text",children:(s=t==null?void 0:t.displayName)==null?void 0:s.split(" ")[0]}),"! 👋"]}),y.jsx("p",{className:"text-gray-300 text-lg",children:"Ready to continue your Arduino mastery journey?"})]}),y.jsx("div",{className:"hidden md:block",children:y.jsx("div",{className:"glass-card p-4 border border-orange-500/20",children:y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(qL,{className:"h-8 w-8 text-green-400"}),y.jsxs("div",{children:[y.jsx("p",{className:"text-sm text-gray-400",children:"Learning Streak"}),y.jsx("p",{className:"text-2xl font-bold text-green-400",children:"7 days"})]})]})})})]})}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:r.map((o,a)=>y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:a*.1},className:"stat-card group",children:[y.jsxs("div",{className:"flex items-center justify-between mb-4",children:[y.jsx("div",{className:`w-12 h-12 rounded-xl ${o.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,children:y.jsx(o.icon,{className:`h-6 w-6 ${o.textColor}`})}),y.jsx("div",{className:`w-2 h-2 rounded-full bg-gradient-to-r ${o.color} pulse-glow`})]}),y.jsx("p",{className:"text-sm text-gray-400 mb-1",children:o.label}),y.jsx("p",{className:"text-3xl font-bold text-white",children:o.value})]},o.label))}),y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"card mb-8 relative overflow-hidden",children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(GL,{className:"h-6 w-6 text-orange-400"}),y.jsx("h3",{className:"text-xl font-semibold text-white",children:"Level Progress"})]}),y.jsxs("span",{className:"text-sm text-gray-400",children:[(t==null?void 0:t.xp)||0,"/1000 XP to Level ",((t==null?void 0:t.level)||1)+1]})]}),y.jsx("div",{className:"progress-bar mb-4",children:y.jsx(le.div,{initial:{width:0},animate:{width:`${((t==null?void 0:t.xp)||0)/1e3*100}%`},transition:{duration:1.5,ease:"easeOut"},className:"progress-fill"})}),y.jsxs("div",{className:"flex justify-between text-sm text-gray-400",children:[y.jsxs("span",{children:["Level ",(t==null?void 0:t.level)||1]}),y.jsxs("span",{children:["Level ",((t==null?void 0:t.level)||1)+1]})]})]}),y.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[y.jsx("div",{className:"lg:col-span-2",children:y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-white",children:"Available Courses"}),y.jsxs("div",{className:"text-sm text-gray-400",children:[iu.length," courses available"]})]}),y.jsx("div",{className:"space-y-6",children:iu.map((o,a)=>{const u=n(o.id);return y.jsx(le.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*a},whileHover:{x:5},className:"card hover-lift group",children:y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsxs("div",{className:"relative overflow-hidden rounded-xl w-24 h-24 flex-shrink-0",children:[y.jsx("img",{src:o.thumbnail,alt:o.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"}),y.jsx("div",{className:"absolute top-2 left-2",children:y.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o.difficulty==="beginner"?"bg-green-500/20 text-green-400 border border-green-500/30":o.difficulty==="intermediate"?"bg-yellow-500/20 text-yellow-400 border border-yellow-500/30":"bg-red-500/20 text-red-400 border border-red-500/30"}`,children:o.difficulty})})]}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("h3",{className:"text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors",children:o.title}),y.jsx("p",{className:"text-gray-300 mb-3 line-clamp-2",children:o.description}),y.jsx("div",{className:"flex items-center justify-between text-sm text-gray-400 mb-3",children:y.jsxs("div",{className:"flex items-center space-x-4",children:[y.jsxs("span",{className:"flex items-center",children:[y.jsx(BL,{className:"h-4 w-4 mr-1"}),o.estimatedTime]}),y.jsxs("span",{className:"flex items-center",children:[y.jsx(As,{className:"h-4 w-4 mr-1"}),o.xpReward," XP"]}),y.jsxs("span",{className:"flex items-center",children:[y.jsx(_a,{className:"h-4 w-4 mr-1"}),o.lessons.length," lessons"]})]})}),u>0&&y.jsxs("div",{className:"mb-3",children:[y.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[y.jsx("span",{className:"text-gray-400",children:"Progress"}),y.jsxs("span",{className:"text-orange-400 font-medium",children:[u,"%"]})]}),y.jsx("div",{className:"progress-bar h-2",children:y.jsx("div",{className:"progress-fill h-2",style:{width:`${u}%`}})})]})]}),y.jsxs(wo,{to:`/course/${o.id}`,className:"btn-primary group-hover:scale-105 transition-transform",children:[u>0?"Continue":"Start",y.jsx(x1,{className:"h-4 w-4"})]})]})},o.id)})})]})}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"card",children:[y.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[y.jsx(E1,{className:"h-5 w-5 text-yellow-400"}),y.jsx("h3",{className:"text-lg font-semibold text-white",children:"Achievements"})]}),y.jsx("div",{className:"space-y-3",children:i.map(o=>y.jsxs("div",{className:`flex items-center space-x-3 p-3 rounded-lg transition-all ${o.unlocked?"bg-orange-500/10 border border-orange-500/20":"bg-gray-800/50 border border-gray-700/50 opacity-60"}`,children:[y.jsx("span",{className:"text-2xl",children:o.icon}),y.jsxs("div",{children:[y.jsx("p",{className:`font-medium ${o.unlocked?"text-orange-400":"text-gray-500"}`,children:o.name}),o.unlocked&&y.jsx("p",{className:"text-xs text-green-400",children:"Unlocked!"})]})]},o.name))})]}),y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1},className:"card",children:[y.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Quick Stats"}),y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-gray-400",children:"Lessons Completed"}),y.jsx("span",{className:"text-white font-medium",children:"12"})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-gray-400",children:"Code Challenges"}),y.jsx("span",{className:"text-white font-medium",children:"8"})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-gray-400",children:"Quiz Score"}),y.jsx("span",{className:"text-green-400 font-medium",children:"92%"})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-gray-400",children:"Time Spent"}),y.jsx("span",{className:"text-white font-medium",children:"24h 30m"})]})]})]})]})]})]})},gF=()=>{const{courseId:t}=CA(),{updateUserProgress:e}=Ai(),{updateProgress:n,getCourseProgress:r}=T1(),[i,s]=N.useState(0),[o,a]=N.useState(""),[u,c]=N.useState({}),[d,f]=N.useState(!1),p=iu.find(M=>M.id===t),g=r(t);if(N.useEffect(()=>{if(p&&g){const M=p.lessons.findIndex(x=>!g.completedLessons.includes(x.id));M!==-1&&s(M)}},[p,g]),!p)return y.jsx(Hp,{to:"/dashboard"});const E=p.lessons[i],P=(g==null?void 0:g.completedLessons.includes(E.id))||!1,R=()=>{i<p.lessons.length-1&&(s(i+1),a(""),c({}),f(!1))},S=()=>{i>0&&(s(i-1),a(""),c({}),f(!1))},_=async()=>{P||(n(t,E.id),await e(E.xpReward),nn.success(`Lesson completed! +${E.xpReward} XP`))},T=()=>{const M=["pinMode","digitalWrite","delay"];if(M.every(v=>o.toLowerCase().includes(v.toLowerCase())))_(),nn.success("Code looks great! Well done!");else{const v=M.filter(I=>!o.toLowerCase().includes(I.toLowerCase()));nn.error(`Missing: ${v.join(", ")}`)}},b=()=>{if(!E.quiz)return;let M=0;E.quiz.forEach(v=>{u[v.id]===v.correctAnswer&&M++});const x=M/E.quiz.length*100;f(!0),x>=70?(_(),nn.success(`Quiz completed! Score: ${x.toFixed(0)}%`)):nn.error(`Score too low: ${x.toFixed(0)}%. Try again!`)},O=()=>{var M,x;switch(E.type){case"theory":return y.jsx("div",{className:"prose max-w-none",children:y.jsx("div",{className:"text-gray-700 leading-relaxed",dangerouslySetInnerHTML:{__html:E.content.replace(/```cpp\n([\s\S]*?)\n```/g,'<pre class="code-block"><code>$1</code></pre>').replace(/`([^`]+)`/g,'<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/## (.*)/g,'<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-900">$1</h3>').replace(/# (.*)/g,'<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>').replace(/\n/g,"<br>")}})});case"code":return y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"text-gray-700",children:[y.jsx("p",{className:"text-lg mb-4",children:E.content}),E.expectedOutput&&y.jsxs("p",{className:"text-sm text-gray-600 bg-blue-50 p-3 rounded-lg",children:[y.jsx("strong",{children:"Expected Result:"})," ",E.expectedOutput]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Code:"}),y.jsx("textarea",{value:o,onChange:v=>a(v.target.value),placeholder:E.codeTemplate||"Write your Arduino code here...",className:"w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"})]}),y.jsxs("button",{onClick:T,className:"btn-primary",children:[y.jsx(Ku,{className:"h-4 w-4"}),"Check Code"]})]});case"quiz":return y.jsxs("div",{className:"space-y-6",children:[y.jsx("p",{className:"text-lg text-gray-700 mb-6",children:E.content}),(M=E.quiz)==null?void 0:M.map((v,I)=>y.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[y.jsxs("h4",{className:"text-lg font-medium text-gray-900 mb-4",children:["Question ",I+1,": ",v.question]}),y.jsx("div",{className:"space-y-2",children:v.options.map((C,k)=>y.jsxs("label",{className:`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${u[v.id]===k?"bg-primary-100 border-primary-300":"bg-white border-gray-200 hover:bg-gray-50"} border`,children:[y.jsx("input",{type:"radio",name:v.id,value:k,checked:u[v.id]===k,onChange:()=>c(D=>({...D,[v.id]:k})),className:"mr-3"}),C]},k))}),d&&y.jsx("div",{className:"mt-4 p-3 rounded-lg bg-blue-50",children:y.jsxs("p",{className:"text-sm text-blue-800",children:[y.jsx("strong",{children:"Explanation:"})," ",v.explanation]})})]},v.id)),!d&&y.jsxs("button",{onClick:b,disabled:Object.keys(u).length!==((x=E.quiz)==null?void 0:x.length),className:"btn-primary disabled:opacity-50 disabled:cursor-not-allowed",children:[y.jsx(L0,{className:"h-4 w-4"}),"Submit Quiz"]})]});default:return y.jsx("div",{children:"Unknown lesson type"})}};return y.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"mb-8",children:[y.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:p.title}),y.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-600",children:[y.jsxs("span",{children:["Lesson ",i+1," of ",p.lessons.length]}),y.jsx("span",{children:"•"}),y.jsxs("span",{children:[E.xpReward," XP"]})]})]}),y.jsxs("div",{className:"mb-8",children:[y.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[y.jsx("span",{children:"Course Progress"}),y.jsxs("span",{children:[Math.round(((g==null?void 0:g.completedLessons.length)||0)/p.lessons.length*100),"%"]})]}),y.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:y.jsx("div",{className:"bg-primary-600 h-2 rounded-full transition-all duration-300",style:{width:`${((g==null?void 0:g.completedLessons.length)||0)/p.lessons.length*100}%`}})})]}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[y.jsx("div",{className:"lg:col-span-1",children:y.jsxs("div",{className:"card sticky top-24",children:[y.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Lessons"}),y.jsx("div",{className:"space-y-2",children:p.lessons.map((M,x)=>{const v=g==null?void 0:g.completedLessons.includes(M.id),I=x===i;return y.jsxs("button",{onClick:()=>s(x),className:`w-full text-left p-3 rounded-lg transition-colors ${I?"bg-primary-100 text-primary-700 border border-primary-200":v?"bg-green-50 text-green-700 hover:bg-green-100":"text-gray-600 hover:bg-gray-50"}`,children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-sm font-medium",children:M.title}),v&&y.jsx(Jd,{className:"h-4 w-4 text-green-600"})]}),y.jsxs("div",{className:"flex items-center mt-1 text-xs",children:[M.type==="theory"&&y.jsx(I1,{className:"h-3 w-3 mr-1"}),M.type==="code"&&y.jsx(Ku,{className:"h-3 w-3 mr-1"}),M.type==="quiz"&&y.jsx(L0,{className:"h-3 w-3 mr-1"}),y.jsxs("span",{children:[M.xpReward," XP"]})]})]},M.id)})})]})}),y.jsx("div",{className:"lg:col-span-3",children:y.jsx(Gf,{mode:"wait",children:y.jsxs(le.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:"card",children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:E.title}),P&&y.jsxs("div",{className:"flex items-center text-green-600",children:[y.jsx(Jd,{className:"h-5 w-5 mr-1"}),y.jsx("span",{className:"text-sm font-medium",children:"Completed"})]})]}),O(),y.jsxs("div",{className:"flex justify-between items-center mt-8 pt-6 border-t border-gray-200",children:[y.jsxs("button",{onClick:S,disabled:i===0,className:"btn-secondary disabled:opacity-50 disabled:cursor-not-allowed",children:[y.jsx(UL,{className:"h-4 w-4"}),"Previous"]}),y.jsxs("div",{className:"flex space-x-3",children:[E.type==="theory"&&!P&&y.jsxs("button",{onClick:_,className:"btn-primary",children:[y.jsx(Jd,{className:"h-4 w-4"}),"Mark Complete"]}),y.jsxs("button",{onClick:R,disabled:i===p.lessons.length-1,className:"btn-primary disabled:opacity-50 disabled:cursor-not-allowed",children:["Next",y.jsx(x1,{className:"h-4 w-4"})]})]})]})]},E.id)})})]})]})},yF=()=>{const{currentUser:t}=Ai();if(!t)return null;const e=[{name:"First Steps",description:"Completed your first lesson",icon:"🎯",unlocked:!0},{name:"Code Warrior",description:"Wrote your first Arduino program",icon:"⚔️",unlocked:!0},{name:"Quiz Master",description:"Scored 100% on a quiz",icon:"🧠",unlocked:!1},{name:"Speed Learner",description:"Completed a course in one day",icon:"⚡",unlocked:!1},{name:"Dedicated Student",description:"7-day learning streak",icon:"🔥",unlocked:!1},{name:"Arduino Expert",description:"Completed all courses",icon:"🏆",unlocked:!1}],n=[{label:"Current Level",value:t.level,icon:Cs,color:"text-yellow-500"},{label:"Total XP",value:t.totalXP,icon:As,color:"text-blue-500"},{label:"Courses Completed",value:t.completedCourses.length,icon:_a,color:"text-green-500"},{label:"Days Active",value:Math.floor((Date.now()-t.joinedAt.getTime())/(1e3*60*60*24)),icon:S1,color:"text-purple-500"}];return y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-8",children:[y.jsx("img",{src:t.photoURL||`https://ui-avatars.com/api/?name=${t.displayName}&background=3b82f6&color=fff&size=128`,alt:t.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"}),y.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:t.displayName}),y.jsx("p",{className:"text-gray-600",children:t.email}),y.jsxs("div",{className:"mt-4 inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full",children:[y.jsx(Cs,{className:"h-5 w-5 mr-2"}),"Level ",t.level," Arduino Developer"]})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:n.map((r,i)=>y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:i*.1},className:"card text-center",children:[y.jsx(r.icon,{className:`h-8 w-8 ${r.color} mx-auto mb-2`}),y.jsx("p",{className:"text-2xl font-bold text-gray-900",children:r.value}),y.jsx("p",{className:"text-sm text-gray-600",children:r.label})]},r.label))}),y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"card mb-8",children:[y.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-4",children:"Level Progress"}),y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("span",{className:"text-sm text-gray-600",children:["Level ",t.level]}),y.jsxs("span",{className:"text-sm text-gray-600",children:["Level ",t.level+1]})]}),y.jsx("div",{className:"w-full bg-gray-200 rounded-full h-4 mb-2",children:y.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500",style:{width:`${t.xp/1e3*100}%`}})}),y.jsxs("p",{className:"text-center text-sm text-gray-600",children:[t.xp,"/1000 XP (",1e3-t.xp," XP to next level)"]})]}),y.jsxs(le.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"card",children:[y.jsxs("h2",{className:"text-xl font-bold text-gray-900 mb-6 flex items-center",children:[y.jsx(E1,{className:"h-6 w-6 mr-2"}),"Achievements"]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.map((r,i)=>y.jsxs(le.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.1*i},className:`p-4 rounded-lg border-2 transition-all ${r.unlocked?"border-green-200 bg-green-50":"border-gray-200 bg-gray-50 opacity-60"}`,children:[y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("span",{className:"text-2xl",children:r.icon}),y.jsxs("div",{children:[y.jsx("h3",{className:`font-semibold ${r.unlocked?"text-green-800":"text-gray-600"}`,children:r.name}),y.jsx("p",{className:`text-sm ${r.unlocked?"text-green-600":"text-gray-500"}`,children:r.description})]})]}),r.unlocked&&y.jsx("div",{className:"mt-2 text-right",children:y.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",children:"Unlocked"})})]},r.name))})]})]})};function vF(){return y.jsx(ML,{children:y.jsx(OL,{children:y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:[y.jsx(fF,{}),y.jsxs(WA,{children:[y.jsx(_o,{path:"/",element:y.jsx(pF,{})}),y.jsx(_o,{path:"/dashboard",element:y.jsx(Yd,{children:y.jsx(mF,{})})}),y.jsx(_o,{path:"/course/:courseId",element:y.jsx(Yd,{children:y.jsx(gF,{})})}),y.jsx(_o,{path:"/profile",element:y.jsx(Yd,{children:y.jsx(yF,{})})})]})]})})})}hh.createRoot(document.getElementById("root")).render(y.jsx(xa.StrictMode,{children:y.jsxs(XA,{children:[y.jsx(vF,{}),y.jsx(WR,{position:"top-right",toastOptions:{duration:3e3,style:{background:"#363636",color:"#fff"}}})]})}));
