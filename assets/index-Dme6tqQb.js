(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(c){if(c.ep)return;c.ep=!0;const p=r(c);fetch(c.href,p)}})();function ou(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ms={exports:{}},yi={};var Nh;function rx(){if(Nh)return yi;Nh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,c,p){var f=null;if(p!==void 0&&(f=""+p),c.key!==void 0&&(f=""+c.key),"key"in c){p={};for(var d in c)d!=="key"&&(p[d]=c[d])}else p=c;return c=p.ref,{$$typeof:l,type:u,key:f,ref:c!==void 0?c:null,props:p}}return yi.Fragment=i,yi.jsx=r,yi.jsxs=r,yi}var _h;function ux(){return _h||(_h=1,Ms.exports=rx()),Ms.exports}var y=ux(),Ds={exports:{}},xe={};var Oh;function ox(){if(Oh)return xe;Oh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function k(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,I={};function D(C,Y,w){this.props=C,this.context=Y,this.refs=I,this.updater=w||z}D.prototype.isReactComponent={},D.prototype.setState=function(C,Y){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Y,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function F(){}F.prototype=D.prototype;function H(C,Y,w){this.props=C,this.context=Y,this.refs=I,this.updater=w||z}var ae=H.prototype=new F;ae.constructor=H,q(ae,D.prototype),ae.isPureReactComponent=!0;var le=Array.isArray;function B(){}var _={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function ie(C,Y,w){var $=w.ref;return{$$typeof:l,type:C,key:Y,ref:$!==void 0?$:null,props:w}}function L(C,Y){return ie(C.type,Y,C.props)}function W(C){return typeof C=="object"&&C!==null&&C.$$typeof===l}function te(C){var Y={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(w){return Y[w]})}var Se=/\/+/g;function oe(C,Y){return typeof C=="object"&&C!==null&&C.key!=null?te(""+C.key):Y.toString(36)}function P(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(B,B):(C.status="pending",C.then(function(Y){C.status==="pending"&&(C.status="fulfilled",C.value=Y)},function(Y){C.status==="pending"&&(C.status="rejected",C.reason=Y)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function A(C,Y,w,$,re){var ce=typeof C;(ce==="undefined"||ce==="boolean")&&(C=null);var ke=!1;if(C===null)ke=!0;else switch(ce){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(C.$$typeof){case l:case i:ke=!0;break;case b:return ke=C._init,A(ke(C._payload),Y,w,$,re)}}if(ke)return re=re(C),ke=$===""?"."+oe(C,0):$,le(re)?(w="",ke!=null&&(w=ke.replace(Se,"$&/")+"/"),A(re,Y,w,"",function(Gt){return Gt})):re!=null&&(W(re)&&(re=L(re,w+(re.key==null||C&&C.key===re.key?"":(""+re.key).replace(Se,"$&/")+"/")+ke)),Y.push(re)),1;ke=0;var Ye=$===""?".":$+":";if(le(C))for(var Be=0;Be<C.length;Be++)$=C[Be],ce=Ye+oe($,Be),ke+=A($,Y,w,ce,re);else if(Be=k(C),typeof Be=="function")for(C=Be.call(C),Be=0;!($=C.next()).done;)$=$.value,ce=Ye+oe($,Be++),ke+=A($,Y,w,ce,re);else if(ce==="object"){if(typeof C.then=="function")return A(P(C),Y,w,$,re);throw Y=String(C),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ke}function Z(C,Y,w){if(C==null)return C;var $=[],re=0;return A(C,$,"","",function(ce){return Y.call(w,ce,re++)}),$}function ne(C){if(C._status===-1){var Y=C._result;Y=Y(),Y.then(function(w){(C._status===0||C._status===-1)&&(C._status=1,C._result=w)},function(w){(C._status===0||C._status===-1)&&(C._status=2,C._result=w)}),C._status===-1&&(C._status=0,C._result=Y)}if(C._status===1)return C._result.default;throw C._result}var me=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},E={map:Z,forEach:function(C,Y,w){Z(C,function(){Y.apply(this,arguments)},w)},count:function(C){var Y=0;return Z(C,function(){Y++}),Y},toArray:function(C){return Z(C,function(Y){return Y})||[]},only:function(C){if(!W(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return xe.Activity=x,xe.Children=E,xe.Component=D,xe.Fragment=r,xe.Profiler=c,xe.PureComponent=H,xe.StrictMode=u,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,xe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return _.H.useMemoCache(C)}},xe.cache=function(C){return function(){return C.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(C,Y,w){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var $=q({},C.props),re=C.key;if(Y!=null)for(ce in Y.key!==void 0&&(re=""+Y.key),Y)!K.call(Y,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&Y.ref===void 0||($[ce]=Y[ce]);var ce=arguments.length-2;if(ce===1)$.children=w;else if(1<ce){for(var ke=Array(ce),Ye=0;Ye<ce;Ye++)ke[Ye]=arguments[Ye+2];$.children=ke}return ie(C.type,re,$)},xe.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:p,_context:C},C},xe.createElement=function(C,Y,w){var $,re={},ce=null;if(Y!=null)for($ in Y.key!==void 0&&(ce=""+Y.key),Y)K.call(Y,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(re[$]=Y[$]);var ke=arguments.length-2;if(ke===1)re.children=w;else if(1<ke){for(var Ye=Array(ke),Be=0;Be<ke;Be++)Ye[Be]=arguments[Be+2];re.children=Ye}if(C&&C.defaultProps)for($ in ke=C.defaultProps,ke)re[$]===void 0&&(re[$]=ke[$]);return ie(C,ce,re)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(C){return{$$typeof:d,render:C}},xe.isValidElement=W,xe.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:ne}},xe.memo=function(C,Y){return{$$typeof:h,type:C,compare:Y===void 0?null:Y}},xe.startTransition=function(C){var Y=_.T,w={};_.T=w;try{var $=C(),re=_.S;re!==null&&re(w,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(B,me)}catch(ce){me(ce)}finally{Y!==null&&w.types!==null&&(Y.types=w.types),_.T=Y}},xe.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},xe.use=function(C){return _.H.use(C)},xe.useActionState=function(C,Y,w){return _.H.useActionState(C,Y,w)},xe.useCallback=function(C,Y){return _.H.useCallback(C,Y)},xe.useContext=function(C){return _.H.useContext(C)},xe.useDebugValue=function(){},xe.useDeferredValue=function(C,Y){return _.H.useDeferredValue(C,Y)},xe.useEffect=function(C,Y){return _.H.useEffect(C,Y)},xe.useEffectEvent=function(C){return _.H.useEffectEvent(C)},xe.useId=function(){return _.H.useId()},xe.useImperativeHandle=function(C,Y,w){return _.H.useImperativeHandle(C,Y,w)},xe.useInsertionEffect=function(C,Y){return _.H.useInsertionEffect(C,Y)},xe.useLayoutEffect=function(C,Y){return _.H.useLayoutEffect(C,Y)},xe.useMemo=function(C,Y){return _.H.useMemo(C,Y)},xe.useOptimistic=function(C,Y){return _.H.useOptimistic(C,Y)},xe.useReducer=function(C,Y,w){return _.H.useReducer(C,Y,w)},xe.useRef=function(C){return _.H.useRef(C)},xe.useState=function(C){return _.H.useState(C)},xe.useSyncExternalStore=function(C,Y,w){return _.H.useSyncExternalStore(C,Y,w)},xe.useTransition=function(){return _.H.useTransition()},xe.version="19.2.3",xe}var Lh;function hc(){return Lh||(Lh=1,Ds.exports=ox()),Ds.exports}var Xe=hc();const ge=ou(Xe);var Ns={exports:{}},bi={},_s={exports:{}},Os={};var Rh;function sx(){return Rh||(Rh=1,(function(l){function i(A,Z){var ne=A.length;A.push(Z);e:for(;0<ne;){var me=ne-1>>>1,E=A[me];if(0<c(E,Z))A[me]=Z,A[ne]=E,ne=me;else break e}}function r(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var Z=A[0],ne=A.pop();if(ne!==Z){A[0]=ne;e:for(var me=0,E=A.length,C=E>>>1;me<C;){var Y=2*(me+1)-1,w=A[Y],$=Y+1,re=A[$];if(0>c(w,ne))$<E&&0>c(re,w)?(A[me]=re,A[$]=ne,me=$):(A[me]=w,A[Y]=ne,me=Y);else if($<E&&0>c(re,ne))A[me]=re,A[$]=ne,me=$;else break e}}return Z}function c(A,Z){var ne=A.sortIndex-Z.sortIndex;return ne!==0?ne:A.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var f=Date,d=f.now();l.unstable_now=function(){return f.now()-d}}var m=[],h=[],b=1,x=null,v=3,k=!1,z=!1,q=!1,I=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function ae(A){for(var Z=r(h);Z!==null;){if(Z.callback===null)u(h);else if(Z.startTime<=A)u(h),Z.sortIndex=Z.expirationTime,i(m,Z);else break;Z=r(h)}}function le(A){if(q=!1,ae(A),!z)if(r(m)!==null)z=!0,B||(B=!0,te());else{var Z=r(h);Z!==null&&P(le,Z.startTime-A)}}var B=!1,_=-1,K=5,ie=-1;function L(){return I?!0:!(l.unstable_now()-ie<K)}function W(){if(I=!1,B){var A=l.unstable_now();ie=A;var Z=!0;try{e:{z=!1,q&&(q=!1,F(_),_=-1),k=!0;var ne=v;try{t:{for(ae(A),x=r(m);x!==null&&!(x.expirationTime>A&&L());){var me=x.callback;if(typeof me=="function"){x.callback=null,v=x.priorityLevel;var E=me(x.expirationTime<=A);if(A=l.unstable_now(),typeof E=="function"){x.callback=E,ae(A),Z=!0;break t}x===r(m)&&u(m),ae(A)}else u(m);x=r(m)}if(x!==null)Z=!0;else{var C=r(h);C!==null&&P(le,C.startTime-A),Z=!1}}break e}finally{x=null,v=ne,k=!1}Z=void 0}}finally{Z?te():B=!1}}}var te;if(typeof H=="function")te=function(){H(W)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,oe=Se.port2;Se.port1.onmessage=W,te=function(){oe.postMessage(null)}}else te=function(){D(W,0)};function P(A,Z){_=D(function(){A(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(A){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var ne=v;v=Z;try{return A()}finally{v=ne}},l.unstable_requestPaint=function(){I=!0},l.unstable_runWithPriority=function(A,Z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var ne=v;v=A;try{return Z()}finally{v=ne}},l.unstable_scheduleCallback=function(A,Z,ne){var me=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?me+ne:me):ne=me,A){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ne+E,A={id:b++,callback:Z,priorityLevel:A,startTime:ne,expirationTime:E,sortIndex:-1},ne>me?(A.sortIndex=ne,i(h,A),r(m)===null&&A===r(h)&&(q?(F(_),_=-1):q=!0,P(le,ne-me))):(A.sortIndex=E,i(m,A),z||k||(z=!0,B||(B=!0,te()))),A},l.unstable_shouldYield=L,l.unstable_wrapCallback=function(A){var Z=v;return function(){var ne=v;v=Z;try{return A.apply(this,arguments)}finally{v=ne}}}})(Os)),Os}var Bh;function cx(){return Bh||(Bh=1,_s.exports=sx()),_s.exports}var Ls={exports:{}},mt={};var Uh;function fx(){if(Uh)return mt;Uh=1;var l=hc();function i(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function p(m,h,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:m,containerInfo:h,implementation:b}}var f=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,mt.createPortal=function(m,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return p(m,h,null,b)},mt.flushSync=function(m){var h=f.T,b=u.p;try{if(f.T=null,u.p=2,m)return m()}finally{f.T=h,u.p=b,u.d.f()}},mt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(m,h))},mt.prefetchDNS=function(m){typeof m=="string"&&u.d.D(m)},mt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var b=h.as,x=d(b,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?u.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:k}):b==="script"&&u.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},mt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=d(h.as,h.crossOrigin);u.d.M(m,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(m)},mt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,x=d(b,h.crossOrigin);u.d.L(m,b,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},mt.preloadModule=function(m,h){if(typeof m=="string")if(h){var b=d(h.as,h.crossOrigin);u.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(m)},mt.requestFormReset=function(m){u.d.r(m)},mt.unstable_batchedUpdates=function(m,h){return m(h)},mt.useFormState=function(m,h,b){return f.H.useFormState(m,h,b)},mt.useFormStatus=function(){return f.H.useHostTransitionStatus()},mt.version="19.2.3",mt}var Hh;function px(){if(Hh)return Ls.exports;Hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Ls.exports=fx(),Ls.exports}var qh;function dx(){if(qh)return bi;qh=1;var l=cx(),i=hc(),r=px();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(p(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return m(o),e;if(s===a)return m(o),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=s;else{for(var g=!1,S=o.child;S;){if(S===n){g=!0,n=o,a=s;break}if(S===a){g=!0,a=o,n=s;break}S=S.sibling}if(!g){for(S=s.child;S;){if(S===n){g=!0,n=s,a=o;break}if(S===a){g=!0,a=s,n=o;break}S=S.sibling}if(!g)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case D:return"Profiler";case I:return"StrictMode";case le:return"Suspense";case B:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case H:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var P=Array.isArray,A=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},me=[],E=-1;function C(e){return{current:e}}function Y(e){0>E||(e.current=me[E],me[E]=null,E--)}function w(e,t){E++,me[E]=e.current,e.current=t}var $=C(null),re=C(null),ce=C(null),ke=C(null);function Ye(e,t){switch(w(ce,t),w(re,e),w($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=th(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y($),w($,e)}function Be(){Y($),Y(re),Y(ce)}function Gt(e){e.memoizedState!==null&&w(ke,e);var t=$.current,n=nh(t,e.type);t!==n&&(w(re,e),w($,n))}function pn(e){re.current===e&&(Y($),Y(re)),ke.current===e&&(Y(ke),hi._currentValue=ne)}var Ca,_i;function dn(e){if(Ca===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||"",_i=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ca+e+_i}var jl=!1;function Al(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(U){var R=U}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(U){R=U}e.call(Q.prototype)}}else{try{throw Error()}catch(U){R=U}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(U){if(U&&R&&typeof U.stack=="string")return[U.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),g=s[0],S=s[1];if(g&&S){var T=g.split(`
`),O=S.split(`
`);for(o=a=0;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(a===T.length||o===O.length)for(a=T.length-1,o=O.length-1;1<=a&&0<=o&&T[a]!==O[o];)o--;for(;1<=a&&0<=o;a--,o--)if(T[a]!==O[o]){if(a!==1||o!==1)do if(a--,o--,0>o||T[a]!==O[o]){var G=`
`+T[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=o);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?dn(n):""}function Oi(e,t){switch(e.tag){case 26:case 27:case 5:return dn(e.type);case 16:return dn("Lazy");case 13:return e.child!==t&&t!==null?dn("Suspense Fallback"):dn("Suspense");case 19:return dn("SuspenseList");case 0:case 15:return Al(e.type,!1);case 11:return Al(e.type.render,!1);case 1:return Al(e.type,!0);case 31:return dn("Activity");default:return""}}function Li(e){try{var t="",n=null;do t+=Oi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ml=Object.prototype.hasOwnProperty,Dl=l.unstable_scheduleCallback,Ta=l.unstable_cancelCallback,hu=l.unstable_shouldYield,mu=l.unstable_requestPaint,yt=l.unstable_now,gu=l.unstable_getCurrentPriorityLevel,V=l.unstable_ImmediatePriority,ee=l.unstable_UserBlockingPriority,he=l.unstable_NormalPriority,we=l.unstable_LowPriority,Oe=l.unstable_IdlePriority,Nt=l.log,hn=l.unstable_setDisableYieldValue,bt=null,it=null;function kt(e){if(typeof Nt=="function"&&hn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(bt,e)}catch{}}var Ge=Math.clz32?Math.clz32:Qg,On=Math.log,en=Math.LN2;function Qg(e){return e>>>=0,e===0?32:31-(On(e)/en|0)|0}var Ri=256,Bi=262144,Ui=4194304;function ul(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,s=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var S=a&134217727;return S!==0?(a=S&~s,a!==0?o=ul(a):(g&=S,g!==0?o=ul(g):n||(n=S&~e,n!==0&&(o=ul(n))))):(S=a&~s,S!==0?o=ul(S):g!==0?o=ul(g):n||(n=a&~e,n!==0&&(o=ul(n)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:o}function za(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lc(){var e=Ui;return Ui<<=1,(Ui&62914560)===0&&(Ui=4194304),e}function xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ja(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fg(e,t,n,a,o,s){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var S=e.entanglements,T=e.expirationTimes,O=e.hiddenUpdates;for(n=g&~n;0<n;){var G=31-Ge(n),Q=1<<G;S[G]=0,T[G]=-1;var R=O[G];if(R!==null)for(O[G]=null,G=0;G<R.length;G++){var U=R[G];U!==null&&(U.lane&=-536870913)}n&=~Q}a!==0&&Rc(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(g&~t))}function Rc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ge(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ge(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Uc(e,t){var n=t&-t;return n=(n&42)!==0?1:yu(n),(n&(e.suspendedLanes|t))!==0?0:n}function yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hc(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Ch(e.type))}function qc(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Ln=Math.random().toString(36).slice(2),ct="__reactFiber$"+Ln,wt="__reactProps$"+Ln,Nl="__reactContainer$"+Ln,vu="__reactEvents$"+Ln,Kg="__reactListeners$"+Ln,Jg="__reactHandles$"+Ln,Yc="__reactResources$"+Ln,Aa="__reactMarker$"+Ln;function Su(e){delete e[ct],delete e[wt],delete e[vu],delete e[Kg],delete e[Jg]}function _l(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nl]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sh(e);e!==null;){if(n=e[ct])return n;e=sh(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){if(e=e[ct]||e[Nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ma(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ll(e){var t=e[Yc];return t||(t=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[Aa]=!0}var Gc=new Set,Vc={};function ol(e,t){Rl(e,t),Rl(e+"Capture",t)}function Rl(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var $g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Ic={};function Wg(e){return Ml.call(Ic,e)?!0:Ml.call(Xc,e)?!1:$g.test(e)?Ic[e]=!0:(Xc[e]=!0,!1)}function qi(e,t,n){if(Wg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){n=""+g,s.call(this,g)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ku(e){if(!e._valueTracker){var t=Qc(e)?"checked":"value";e._valueTracker=Pg(e,t,""+e[t])}}function Zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Qc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var e1=/[\n"\\]/g;function Xt(e){return e.replace(e1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,n,a,o,s,g,S){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Eu(e,g,Vt(t)):n!=null?Eu(e,g,Vt(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Vt(S):e.removeAttribute("name")}function Fc(e,t,n,a,o,s,g,S){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ku(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,S||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=S?e.checked:!!a,e.defaultChecked=!!a,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),ku(e)}function Eu(e,t,n){t==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bl(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Kc(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Jc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(P(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ku(e)}function Ul(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var t1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $c(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||t1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Wc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&$c(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&$c(e,s,t[s])}function Cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),l1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return l1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var Tu=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,ql=null;function Pc(e){var t=Ol(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[wt]||null;if(!o)throw Error(u(90));wu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Zc(a)}break e;case"textarea":Kc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bl(e,!!n.multiple,t,!1)}}}var ju=!1;function ef(e,t,n){if(ju)return e(t,n);ju=!0;try{var a=e(t);return a}finally{if(ju=!1,(Hl!==null||ql!==null)&&(Mr(),Hl&&(t=Hl,e=ql,ql=Hl=null,Pc(t),e)))for(t=0;t<e.length;t++)Pc(e[t])}}function Da(e,t){var n=e.stateNode;if(n===null)return null;var a=n[wt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(xn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Au=!1}var Rn=null,Mu=null,Xi=null;function tf(){if(Xi)return Xi;var e,t=Mu,n=t.length,a,o="value"in Rn?Rn.value:Rn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var g=n-e;for(a=1;a<=g&&t[n-a]===o[s-a];a++);return Xi=o.slice(e,1<a?1-a:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function nf(){return!1}function Et(e){function t(n,a,o,s,g){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(n=e[S],this[S]=n?n(s):s[S]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qi:nf,this.isPropagationStopped=nf,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Et(sl),_a=x({},sl,{view:0,detail:0}),a1=Et(_a),Du,Nu,Oa,Fi=x({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oa&&(Oa&&e.type==="mousemove"?(Du=e.screenX-Oa.screenX,Nu=e.screenY-Oa.screenY):Nu=Du=0,Oa=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),lf=Et(Fi),i1=x({},Fi,{dataTransfer:0}),r1=Et(i1),u1=x({},_a,{relatedTarget:0}),_u=Et(u1),o1=x({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),s1=Et(o1),c1=x({},sl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),f1=Et(c1),p1=x({},sl,{data:0}),af=Et(p1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m1[e])?!!t[e]:!1}function Ou(){return g1}var x1=x({},_a,{key:function(e){if(e.key){var t=d1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y1=Et(x1),b1=x({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=Et(b1),v1=x({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),S1=Et(v1),k1=x({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),w1=Et(k1),E1=x({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=Et(E1),T1=x({},sl,{newState:0,oldState:0}),z1=Et(T1),j1=[9,13,27,32],Lu=xn&&"CompositionEvent"in window,La=null;xn&&"documentMode"in document&&(La=document.documentMode);var A1=xn&&"TextEvent"in window&&!La,uf=xn&&(!Lu||La&&8<La&&11>=La),of=" ",sf=!1;function cf(e,t){switch(e){case"keyup":return j1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yl=!1;function M1(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(sf=!0,of);case"textInput":return e=t.data,e===of&&sf?null:e;default:return null}}function D1(e,t){if(Yl)return e==="compositionend"||!Lu&&cf(e,t)?(e=tf(),Xi=Mu=Rn=null,Yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var N1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!N1[e.type]:t==="textarea"}function df(e,t,n,a){Hl?ql?ql.push(a):ql=[a]:Hl=a,t=Br(t,"onChange"),0<t.length&&(n=new Zi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ra=null,Ba=null;function _1(e){Kd(e,0)}function Ki(e){var t=Ma(e);if(Zc(t))return e}function hf(e,t){if(e==="change")return t}var mf=!1;if(xn){var Ru;if(xn){var Bu="oninput"in document;if(!Bu){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Bu=typeof gf.oninput=="function"}Ru=Bu}else Ru=!1;mf=Ru&&(!document.documentMode||9<document.documentMode)}function xf(){Ra&&(Ra.detachEvent("onpropertychange",yf),Ba=Ra=null)}function yf(e){if(e.propertyName==="value"&&Ki(Ba)){var t=[];df(t,Ba,e,zu(e)),ef(_1,t)}}function O1(e,t,n){e==="focusin"?(xf(),Ra=t,Ba=n,Ra.attachEvent("onpropertychange",yf)):e==="focusout"&&xf()}function L1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Ba)}function R1(e,t){if(e==="click")return Ki(t)}function B1(e,t){if(e==="input"||e==="change")return Ki(t)}function U1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:U1;function Ua(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ml.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vf(e,t){var n=bf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bf(n)}}function Sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var H1=xn&&"documentMode"in document&&11>=document.documentMode,Gl=null,Hu=null,Ha=null,qu=!1;function wf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||Gl==null||Gl!==Gi(a)||(a=Gl,"selectionStart"in a&&Uu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ha&&Ua(Ha,a)||(Ha=a,a=Br(Hu,"onSelect"),0<a.length&&(t=new Zi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Gl)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vl={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionrun:cl("Transition","TransitionRun"),transitionstart:cl("Transition","TransitionStart"),transitioncancel:cl("Transition","TransitionCancel"),transitionend:cl("Transition","TransitionEnd")},Yu={},Ef={};xn&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function fl(e){if(Yu[e])return Yu[e];if(!Vl[e])return e;var t=Vl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ef)return Yu[e]=t[n];return e}var Cf=fl("animationend"),Tf=fl("animationiteration"),zf=fl("animationstart"),q1=fl("transitionrun"),Y1=fl("transitionstart"),G1=fl("transitioncancel"),jf=fl("transitionend"),Af=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function tn(e,t){Af.set(e,t),ol(t,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],Xl=0,Vu=0;function $i(){for(var e=Xl,t=Vu=Xl=0;t<e;){var n=It[t];It[t++]=null;var a=It[t];It[t++]=null;var o=It[t];It[t++]=null;var s=It[t];if(It[t++]=null,a!==null&&o!==null){var g=a.pending;g===null?o.next=o:(o.next=g.next,g.next=o),a.pending=o}s!==0&&Mf(n,o,s)}}function Wi(e,t,n,a){It[Xl++]=e,It[Xl++]=t,It[Xl++]=n,It[Xl++]=a,Vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Xu(e,t,n,a){return Wi(e,t,n,a),Pi(e)}function pl(e,t){return Wi(e,null,null,t),Pi(e)}function Mf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-Ge(n),e=s.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),s):null}function Pi(e){if(50<ui)throw ui=0,es=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Il={};function V1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new V1(e,t,n,a)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Df(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function er(e,t,n,a,o,s){var g=0;if(a=e,typeof e=="function")Iu(e)&&(g=1);else if(typeof e=="string")g=F0(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Ot(31,n,t,o),e.elementType=ie,e.lanes=s,e;case q:return dl(n.children,o,s,t);case I:g=8,o|=24;break;case D:return e=Ot(12,n,t,o|2),e.elementType=D,e.lanes=s,e;case le:return e=Ot(13,n,t,o),e.elementType=le,e.lanes=s,e;case B:return e=Ot(19,n,t,o),e.elementType=B,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:g=10;break e;case F:g=9;break e;case ae:g=11;break e;case _:g=14;break e;case K:g=16,a=null;break e}g=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ot(g,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function dl(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function Qu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Nf(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Zu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _f=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=_f.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Li(t)},_f.set(e,t),t)}return{value:e,source:t,stack:Li(t)}}var Ql=[],Zl=0,tr=null,qa=0,Zt=[],Ft=0,Bn=null,rn=1,un="";function bn(e,t){Ql[Zl++]=qa,Ql[Zl++]=tr,tr=e,qa=t}function Of(e,t,n){Zt[Ft++]=rn,Zt[Ft++]=un,Zt[Ft++]=Bn,Bn=e;var a=rn;e=un;var o=32-Ge(a)-1;a&=~(1<<o),n+=1;var s=32-Ge(t)+o;if(30<s){var g=o-o%5;s=(a&(1<<g)-1).toString(32),a>>=g,o-=g,rn=1<<32-Ge(t)+o|n<<o|a,un=s+e}else rn=1<<s|n<<o|a,un=e}function Fu(e){e.return!==null&&(bn(e,1),Of(e,1,0))}function Ku(e){for(;e===tr;)tr=Ql[--Zl],Ql[Zl]=null,qa=Ql[--Zl],Ql[Zl]=null;for(;e===Bn;)Bn=Zt[--Ft],Zt[Ft]=null,un=Zt[--Ft],Zt[Ft]=null,rn=Zt[--Ft],Zt[Ft]=null}function Lf(e,t){Zt[Ft++]=rn,Zt[Ft++]=un,Zt[Ft++]=Bn,rn=t.id,un=t.overflow,Bn=e}var ft=null,Ze=null,Ae=!1,Un=null,Kt=!1,Ju=Error(u(519));function Hn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ya(Qt(t,e)),Ju}function Rf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ct]=e,t[wt]=a,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<si.length;n++)Ce(si[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Fc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Jc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Pd(t.textContent,n)?(a.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),a.onScroll!=null&&Ce("scroll",t),a.onScrollEnd!=null&&Ce("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Hn(e,!0)}function Bf(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ft=ft.return}}function Fl(e){if(e!==ft)return!1;if(!Ae)return Bf(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ms(e.type,e.memoizedProps)),n=!n),n&&Ze&&Hn(e),Bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=oh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=oh(e)}else t===27?(t=Ze,Pn(e.type)?(e=vs,vs=null,Ze=e):Ze=t):Ze=ft?$t(e.stateNode.nextSibling):null;return!0}function hl(){Ze=ft=null,Ae=!1}function $u(){var e=Un;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Un=null),e}function Ya(e){Un===null?Un=[e]:Un.push(e)}var Wu=C(null),ml=null,vn=null;function qn(e,t,n){w(Wu,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=Wu.current,Y(Wu)}function Pu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function eo(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var g=o.child;s=s.firstContext;e:for(;s!==null;){var S=s;s=o;for(var T=0;T<t.length;T++)if(S.context===t[T]){s.lanes|=n,S=s.alternate,S!==null&&(S.lanes|=n),Pu(s.return,n,e),a||(g=null);break e}s=S.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(u(341));g.lanes|=n,s=g.alternate,s!==null&&(s.lanes|=n),Pu(g,n,e),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===e){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Kl(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(u(387));if(g=g.memoizedProps,g!==null){var S=o.type;_t(o.pendingProps.value,g.value)||(e!==null?e.push(S):e=[S])}}else if(o===ke.current){if(g=o.alternate,g===null)throw Error(u(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}o=o.return}e!==null&&eo(t,e,n,a),t.flags|=262144}function nr(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){ml=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return Uf(ml,e)}function lr(e,t){return ml===null&&gl(e),Uf(e,t)}function Uf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vn===null){if(e===null)throw Error(u(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return n}var X1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},I1=l.unstable_scheduleCallback,Q1=l.unstable_NormalPriority,et={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new X1,data:new Map,refCount:0}}function Ga(e){e.refCount--,e.refCount===0&&I1(Q1,function(){e.controller.abort()})}var Va=null,no=0,Jl=0,$l=null;function Z1(e,t){if(Va===null){var n=Va=[];no=0,Jl=rs(),$l={status:"pending",value:void 0,then:function(a){n.push(a)}}}return no++,t.then(Hf,Hf),t}function Hf(){if(--no===0&&Va!==null){$l!==null&&($l.status="fulfilled");var e=Va;Va=null,Jl=0,$l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function F1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var qf=A.S;A.S=function(e,t){wd=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Z1(e,t),qf!==null&&qf(e,t)};var xl=C(null);function lo(){var e=xl.current;return e!==null?e:Ve.pooledCache}function ar(e,t){t===null?w(xl,xl.current):w(xl,t.pool)}function Yf(){var e=lo();return e===null?null:{parent:et._currentValue,pool:e}}var Wl=Error(u(460)),ao=Error(u(474)),ir=Error(u(542)),rr={then:function(){}};function Gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e}throw bl=t,Wl}}function yl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(bl=n,Wl):n}}var bl=null;function Xf(){if(bl===null)throw Error(u(459));var e=bl;return bl=null,e}function If(e){if(e===Wl||e===ir)throw Error(u(483))}var Pl=null,Xa=0;function ur(e){var t=Xa;return Xa+=1,Pl===null&&(Pl=[]),Vf(Pl,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===v?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qf(e){function t(M,j){if(e){var N=M.deletions;N===null?(M.deletions=[j],M.flags|=16):N.push(j)}}function n(M,j){if(!e)return null;for(;j!==null;)t(M,j),j=j.sibling;return null}function a(M){for(var j=new Map;M!==null;)M.key!==null?j.set(M.key,M):j.set(M.index,M),M=M.sibling;return j}function o(M,j){return M=yn(M,j),M.index=0,M.sibling=null,M}function s(M,j,N){return M.index=N,e?(N=M.alternate,N!==null?(N=N.index,N<j?(M.flags|=67108866,j):N):(M.flags|=67108866,j)):(M.flags|=1048576,j)}function g(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function S(M,j,N,X){return j===null||j.tag!==6?(j=Qu(N,M.mode,X),j.return=M,j):(j=o(j,N),j.return=M,j)}function T(M,j,N,X){var fe=N.type;return fe===q?G(M,j,N.props.children,X,N.key):j!==null&&(j.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===K&&yl(fe)===j.type)?(j=o(j,N.props),Ia(j,N),j.return=M,j):(j=er(N.type,N.key,N.props,null,M.mode,X),Ia(j,N),j.return=M,j)}function O(M,j,N,X){return j===null||j.tag!==4||j.stateNode.containerInfo!==N.containerInfo||j.stateNode.implementation!==N.implementation?(j=Zu(N,M.mode,X),j.return=M,j):(j=o(j,N.children||[]),j.return=M,j)}function G(M,j,N,X,fe){return j===null||j.tag!==7?(j=dl(N,M.mode,X,fe),j.return=M,j):(j=o(j,N),j.return=M,j)}function Q(M,j,N){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Qu(""+j,M.mode,N),j.return=M,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case k:return N=er(j.type,j.key,j.props,null,M.mode,N),Ia(N,j),N.return=M,N;case z:return j=Zu(j,M.mode,N),j.return=M,j;case K:return j=yl(j),Q(M,j,N)}if(P(j)||te(j))return j=dl(j,M.mode,N,null),j.return=M,j;if(typeof j.then=="function")return Q(M,ur(j),N);if(j.$$typeof===H)return Q(M,lr(M,j),N);or(M,j)}return null}function R(M,j,N,X){var fe=j!==null?j.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return fe!==null?null:S(M,j,""+N,X);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return N.key===fe?T(M,j,N,X):null;case z:return N.key===fe?O(M,j,N,X):null;case K:return N=yl(N),R(M,j,N,X)}if(P(N)||te(N))return fe!==null?null:G(M,j,N,X,null);if(typeof N.then=="function")return R(M,j,ur(N),X);if(N.$$typeof===H)return R(M,j,lr(M,N),X);or(M,N)}return null}function U(M,j,N,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(N)||null,S(j,M,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case k:return M=M.get(X.key===null?N:X.key)||null,T(j,M,X,fe);case z:return M=M.get(X.key===null?N:X.key)||null,O(j,M,X,fe);case K:return X=yl(X),U(M,j,N,X,fe)}if(P(X)||te(X))return M=M.get(N)||null,G(j,M,X,fe,null);if(typeof X.then=="function")return U(M,j,N,ur(X),fe);if(X.$$typeof===H)return U(M,j,N,lr(j,X),fe);or(j,X)}return null}function ue(M,j,N,X){for(var fe=null,De=null,se=j,be=j=0,je=null;se!==null&&be<N.length;be++){se.index>be?(je=se,se=null):je=se.sibling;var Ne=R(M,se,N[be],X);if(Ne===null){se===null&&(se=je);break}e&&se&&Ne.alternate===null&&t(M,se),j=s(Ne,j,be),De===null?fe=Ne:De.sibling=Ne,De=Ne,se=je}if(be===N.length)return n(M,se),Ae&&bn(M,be),fe;if(se===null){for(;be<N.length;be++)se=Q(M,N[be],X),se!==null&&(j=s(se,j,be),De===null?fe=se:De.sibling=se,De=se);return Ae&&bn(M,be),fe}for(se=a(se);be<N.length;be++)je=U(se,M,be,N[be],X),je!==null&&(e&&je.alternate!==null&&se.delete(je.key===null?be:je.key),j=s(je,j,be),De===null?fe=je:De.sibling=je,De=je);return e&&se.forEach(function(al){return t(M,al)}),Ae&&bn(M,be),fe}function de(M,j,N,X){if(N==null)throw Error(u(151));for(var fe=null,De=null,se=j,be=j=0,je=null,Ne=N.next();se!==null&&!Ne.done;be++,Ne=N.next()){se.index>be?(je=se,se=null):je=se.sibling;var al=R(M,se,Ne.value,X);if(al===null){se===null&&(se=je);break}e&&se&&al.alternate===null&&t(M,se),j=s(al,j,be),De===null?fe=al:De.sibling=al,De=al,se=je}if(Ne.done)return n(M,se),Ae&&bn(M,be),fe;if(se===null){for(;!Ne.done;be++,Ne=N.next())Ne=Q(M,Ne.value,X),Ne!==null&&(j=s(Ne,j,be),De===null?fe=Ne:De.sibling=Ne,De=Ne);return Ae&&bn(M,be),fe}for(se=a(se);!Ne.done;be++,Ne=N.next())Ne=U(se,M,be,Ne.value,X),Ne!==null&&(e&&Ne.alternate!==null&&se.delete(Ne.key===null?be:Ne.key),j=s(Ne,j,be),De===null?fe=Ne:De.sibling=Ne,De=Ne);return e&&se.forEach(function(ix){return t(M,ix)}),Ae&&bn(M,be),fe}function qe(M,j,N,X){if(typeof N=="object"&&N!==null&&N.type===q&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case k:e:{for(var fe=N.key;j!==null;){if(j.key===fe){if(fe=N.type,fe===q){if(j.tag===7){n(M,j.sibling),X=o(j,N.props.children),X.return=M,M=X;break e}}else if(j.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===K&&yl(fe)===j.type){n(M,j.sibling),X=o(j,N.props),Ia(X,N),X.return=M,M=X;break e}n(M,j);break}else t(M,j);j=j.sibling}N.type===q?(X=dl(N.props.children,M.mode,X,N.key),X.return=M,M=X):(X=er(N.type,N.key,N.props,null,M.mode,X),Ia(X,N),X.return=M,M=X)}return g(M);case z:e:{for(fe=N.key;j!==null;){if(j.key===fe)if(j.tag===4&&j.stateNode.containerInfo===N.containerInfo&&j.stateNode.implementation===N.implementation){n(M,j.sibling),X=o(j,N.children||[]),X.return=M,M=X;break e}else{n(M,j);break}else t(M,j);j=j.sibling}X=Zu(N,M.mode,X),X.return=M,M=X}return g(M);case K:return N=yl(N),qe(M,j,N,X)}if(P(N))return ue(M,j,N,X);if(te(N)){if(fe=te(N),typeof fe!="function")throw Error(u(150));return N=fe.call(N),de(M,j,N,X)}if(typeof N.then=="function")return qe(M,j,ur(N),X);if(N.$$typeof===H)return qe(M,j,lr(M,N),X);or(M,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,j!==null&&j.tag===6?(n(M,j.sibling),X=o(j,N),X.return=M,M=X):(n(M,j),X=Qu(N,M.mode,X),X.return=M,M=X),g(M)):n(M,j)}return function(M,j,N,X){try{Xa=0;var fe=qe(M,j,N,X);return Pl=null,fe}catch(se){if(se===Wl||se===ir)throw se;var De=Ot(29,se,null,M.mode);return De.lanes=X,De.return=M,De}}}var vl=Qf(!0),Zf=Qf(!1),Yn=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Pi(e),Mf(e,null,n),t}return Wi(e,a,t,n),Pi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bc(e,n)}}function uo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=g:s=s.next=g,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var oo=!1;function Za(){if(oo){var e=$l;if(e!==null)throw e}}function Fa(e,t,n,a){oo=!1;var o=e.updateQueue;Yn=!1;var s=o.firstBaseUpdate,g=o.lastBaseUpdate,S=o.shared.pending;if(S!==null){o.shared.pending=null;var T=S,O=T.next;T.next=null,g===null?s=O:g.next=O,g=T;var G=e.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==g&&(S===null?G.firstBaseUpdate=O:S.next=O,G.lastBaseUpdate=T))}if(s!==null){var Q=o.baseState;g=0,G=O=T=null,S=s;do{var R=S.lane&-536870913,U=R!==S.lane;if(U?(ze&R)===R:(a&R)===R){R!==0&&R===Jl&&(oo=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ue=e,de=S;R=t;var qe=n;switch(de.tag){case 1:if(ue=de.payload,typeof ue=="function"){Q=ue.call(qe,Q,R);break e}Q=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=de.payload,R=typeof ue=="function"?ue.call(qe,Q,R):ue,R==null)break e;Q=x({},Q,R);break e;case 2:Yn=!0}}R=S.callback,R!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[R]:U.push(R))}else U={lane:R,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(O=G=U,T=Q):G=G.next=U,g|=R;if(S=S.next,S===null){if(S=o.shared.pending,S===null)break;U=S,S=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);G===null&&(T=Q),o.baseState=T,o.firstBaseUpdate=O,o.lastBaseUpdate=G,s===null&&(o.shared.lanes=0),Fn|=g,e.lanes=g,e.memoizedState=Q}}function Ff(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Kf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ff(n[e],t)}var ea=C(null),sr=C(0);function Jf(e,t){e=Mn,w(sr,e),w(ea,t),Mn=e|t.baseLanes}function so(){w(sr,Mn),w(ea,ea.current)}function co(){Mn=sr.current,Y(ea),Y(sr)}var Lt=C(null),Jt=null;function Xn(e){var t=e.alternate;w(We,We.current&1),w(Lt,e),Jt===null&&(t===null||ea.current!==null||t.memoizedState!==null)&&(Jt=e)}function fo(e){w(We,We.current),w(Lt,e),Jt===null&&(Jt=e)}function $f(e){e.tag===22?(w(We,We.current),w(Lt,e),Jt===null&&(Jt=e)):In()}function In(){w(We,We.current),w(Lt,Lt.current)}function Rt(e){Y(Lt),Jt===e&&(Jt=null),Y(We)}var We=C(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ys(n)||bs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,ye=null,Ue=null,tt=null,fr=!1,ta=!1,Sl=!1,pr=0,Ka=0,na=null,K1=0;function Je(){throw Error(u(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function ho(e,t,n,a,o,s){return kn=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Op:Ao,Sl=!1,s=n(a,o),Sl=!1,ta&&(s=Pf(t,n,a,o)),Wf(e),s}function Wf(e){A.H=Wa;var t=Ue!==null&&Ue.next!==null;if(kn=0,tt=Ue=ye=null,fr=!1,Ka=0,na=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&nr(e)&&(nt=!0))}function Pf(e,t,n,a){ye=e;var o=0;do{if(ta&&(na=null),Ka=0,ta=!1,25<=o)throw Error(u(301));if(o+=1,tt=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}A.H=Lp,s=t(n,a)}while(ta);return s}function J1(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Ja(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ye.flags|=1024),t}function mo(){var e=pr!==0;return pr=0,e}function go(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(fr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fr=!1}kn=0,tt=Ue=ye=null,ta=!1,Ka=pr=0,na=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ye.memoizedState=tt=e:tt=tt.next=e,tt}function Pe(){if(Ue===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=tt===null?ye.memoizedState:tt.next;if(t!==null)tt=t,Ue=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tt===null?ye.memoizedState=tt=e:tt=tt.next=e}return tt}function dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ja(e){var t=Ka;return Ka+=1,na===null&&(na=[]),e=Vf(na,e,t),t=ye,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Op:Ao),e}function hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ja(e);if(e.$$typeof===H)return pt(e)}throw Error(u(438,String(e)))}function yo(e){var t=null,n=ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=dr(),ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=L;return t.index++,n}function wn(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=Pe();return bo(t,Ue,e)}function bo(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var g=o.next;o.next=s.next,s.next=g}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var S=g=null,T=null,O=t,G=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(ze&Q)===Q:(kn&Q)===Q){var R=O.revertLane;if(R===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===Jl&&(G=!0);else if((kn&R)===R){O=O.next,R===Jl&&(G=!0);continue}else Q={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(S=T=Q,g=s):T=T.next=Q,ye.lanes|=R,Fn|=R;Q=O.action,Sl&&n(s,Q),s=O.hasEagerState?O.eagerState:n(s,Q)}else R={lane:Q,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(S=T=R,g=s):T=T.next=R,ye.lanes|=Q,Fn|=Q;O=O.next}while(O!==null&&O!==t);if(T===null?g=s:T.next=S,!_t(s,e.memoizedState)&&(nt=!0,G&&(n=$l,n!==null)))throw n;e.memoizedState=s,e.baseState=g,e.baseQueue=T,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function vo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var g=o=o.next;do s=e(s,g.action),g=g.next;while(g!==o);_t(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function ep(e,t,n){var a=ye,o=Pe(),s=Ae;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var g=!_t((Ue||o).memoizedState,n);if(g&&(o.memoizedState=n,nt=!0),o=o.queue,wo(lp.bind(null,a,o,e),[e]),o.getSnapshot!==t||g||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,la(9,{destroy:void 0},np.bind(null,a,o,n,t),null),Ve===null)throw Error(u(349));s||(kn&127)!==0||tp(a,t,n)}return n}function tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t=dr(),ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function np(e,t,n,a){t.value=n,t.getSnapshot=a,ap(t)&&ip(e)}function lp(e,t,n){return n(function(){ap(t)&&ip(e)})}function ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function ip(e){var t=pl(e,2);t!==null&&At(t,e,2)}function So(e){var t=vt();if(typeof e=="function"){var n=e;if(e=n(),Sl){kt(!0);try{n()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function rp(e,t,n,a){return e.baseState=n,bo(e,Ue,typeof a=="function"?a:wn)}function $1(e,t,n,a,o){if(yr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){s.listeners.push(g)}};A.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,up(t,s)):(s.next=n.next,t.pending=n.next=s)}}function up(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=A.T,g={};A.T=g;try{var S=n(o,a),T=A.S;T!==null&&T(g,S),op(e,t,S)}catch(O){ko(e,t,O)}finally{s!==null&&g.types!==null&&(s.types=g.types),A.T=s}}else try{s=n(o,a),op(e,t,s)}catch(O){ko(e,t,O)}}function op(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){sp(e,t,a)},function(a){return ko(e,t,a)}):sp(e,t,n)}function sp(e,t,n){t.status="fulfilled",t.value=n,cp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,up(e,n)))}function ko(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,cp(t),t=t.next;while(t!==a)}e.action=null}function cp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fp(e,t){return t}function pp(e,t){if(Ae){var n=Ve.formState;if(n!==null){e:{var a=ye;if(Ae){if(Ze){t:{for(var o=Ze,s=Kt;o.nodeType!==8;){if(!s){o=null;break t}if(o=$t(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ze=$t(o.nextSibling),a=o.data==="F!";break e}}Hn(a)}a=!1}a&&(t=n[0])}}return n=vt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fp,lastRenderedState:t},n.queue=a,n=Dp.bind(null,ye,a),a.dispatch=n,a=So(!1),s=jo.bind(null,ye,!1,a.queue),a=vt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=$1.bind(null,ye,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function dp(e){var t=Pe();return hp(t,Ue,e)}function hp(e,t,n){if(t=bo(e,t,fp)[0],e=mr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ja(t)}catch(g){throw g===Wl?ir:g}else a=t;t=Pe();var o=t.queue,s=o.dispatch;return n!==t.memoizedState&&(ye.flags|=2048,la(9,{destroy:void 0},W1.bind(null,o,n),null)),[a,s,e]}function W1(e,t){e.action=t}function mp(e){var t=Pe(),n=Ue;if(n!==null)return hp(t,n,e);Pe(),t=t.memoizedState,n=Pe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function la(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ye.updateQueue,t===null&&(t=dr(),ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gp(){return Pe().memoizedState}function gr(e,t,n,a){var o=vt();ye.flags|=e,o.memoizedState=la(1|t,{destroy:void 0},n,a===void 0?null:a)}function xr(e,t,n,a){var o=Pe();a=a===void 0?null:a;var s=o.memoizedState.inst;Ue!==null&&a!==null&&po(a,Ue.memoizedState.deps)?o.memoizedState=la(t,s,n,a):(ye.flags|=e,o.memoizedState=la(1|t,s,n,a))}function xp(e,t){gr(8390656,8,e,t)}function wo(e,t){xr(2048,8,e,t)}function P1(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=dr(),ye.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function yp(e){var t=Pe().memoizedState;return P1({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function bp(e,t){return xr(4,2,e,t)}function vp(e,t){return xr(4,4,e,t)}function Sp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){n=n!=null?n.concat([e]):null,xr(4,4,Sp.bind(null,t,e),n)}function Eo(){}function wp(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&po(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&po(t,a[1]))return a[0];if(a=e(),Sl){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[a,t],a}function Co(e,t,n){return n===void 0||(kn&1073741824)!==0&&(ze&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Cd(),ye.lanes|=e,Fn|=e,n)}function Cp(e,t,n,a){return _t(n,t)?n:ea.current!==null?(e=Co(e,n,a),_t(e,t)||(nt=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(ze&261930)===0?(nt=!0,e.memoizedState=n):(e=Cd(),ye.lanes|=e,Fn|=e,t)}function Tp(e,t,n,a,o){var s=Z.p;Z.p=s!==0&&8>s?s:8;var g=A.T,S={};A.T=S,jo(e,!1,t,n);try{var T=o(),O=A.S;if(O!==null&&O(S,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var G=F1(T,a);$a(e,t,G,Ht(e))}else $a(e,t,a,Ht(e))}catch(Q){$a(e,t,{then:function(){},status:"rejected",reason:Q},Ht())}finally{Z.p=s,g!==null&&S.types!==null&&(g.types=S.types),A.T=g}}function e0(){}function To(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=zp(e).queue;Tp(e,o,t,ne,n===null?e0:function(){return jp(e),n(a)})}function zp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jp(e){var t=zp(e);t.next===null&&(t=e.alternate.memoizedState),$a(e,t.next.queue,{},Ht())}function zo(){return pt(hi)}function Ap(){return Pe().memoizedState}function Mp(){return Pe().memoizedState}function t0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Gn(n);var a=Vn(t,e,n);a!==null&&(At(a,t,n),Qa(a,t,n)),t={cache:to()},e.payload=t;return}t=t.return}}function n0(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yr(e)?Np(t,n):(n=Xu(e,t,n,a),n!==null&&(At(n,e,a),_p(n,t,a)))}function Dp(e,t,n){var a=Ht();$a(e,t,n,a)}function $a(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yr(e))Np(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var g=t.lastRenderedState,S=s(g,n);if(o.hasEagerState=!0,o.eagerState=S,_t(S,g))return Wi(e,t,o,0),Ve===null&&$i(),!1}catch{}if(n=Xu(e,t,o,a),n!==null)return At(n,e,a),_p(n,t,a),!0}return!1}function jo(e,t,n,a){if(a={lane:2,revertLane:rs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(u(479))}else t=Xu(e,n,a,2),t!==null&&At(t,e,2)}function yr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Np(e,t){ta=fr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _p(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bc(e,n)}}var Wa={readContext:pt,use:hr,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Wa.useEffectEvent=Je;var Op={readContext:pt,use:hr,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:xp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gr(4194308,4,Sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gr(4194308,4,e,t)},useInsertionEffect:function(e,t){gr(4,2,e,t)},useMemo:function(e,t){var n=vt();t=t===void 0?null:t;var a=e();if(Sl){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=vt();if(n!==void 0){var o=n(t);if(Sl){kt(!0);try{n(t)}finally{kt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=n0.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=So(e);var t=e.queue,n=Dp.bind(null,ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eo,useDeferredValue:function(e,t){var n=vt();return Co(n,e,t)},useTransition:function(){var e=So(!1);return e=Tp.bind(null,ye,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ye,o=vt();if(Ae){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ve===null)throw Error(u(349));(ze&127)!==0||tp(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,xp(lp.bind(null,a,s,e),[e]),a.flags|=2048,la(9,{destroy:void 0},np.bind(null,a,s,n,t),null),n},useId:function(){var e=vt(),t=Ve.identifierPrefix;if(Ae){var n=un,a=rn;n=(a&~(1<<32-Ge(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=K1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:pp,useActionState:pp,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=jo.bind(null,ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:yo,useCacheRefresh:function(){return vt().memoizedState=t0.bind(null,ye)},useEffectEvent:function(e){var t=vt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Ao={readContext:pt,use:hr,useCallback:wp,useContext:pt,useEffect:wo,useImperativeHandle:kp,useInsertionEffect:bp,useLayoutEffect:vp,useMemo:Ep,useReducer:mr,useRef:gp,useState:function(){return mr(wn)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Pe();return Cp(n,Ue.memoizedState,e,t)},useTransition:function(){var e=mr(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ja(e),t]},useSyncExternalStore:ep,useId:Ap,useHostTransitionStatus:zo,useFormState:dp,useActionState:dp,useOptimistic:function(e,t){var n=Pe();return rp(n,Ue,e,t)},useMemoCache:yo,useCacheRefresh:Mp};Ao.useEffectEvent=yp;var Lp={readContext:pt,use:hr,useCallback:wp,useContext:pt,useEffect:wo,useImperativeHandle:kp,useInsertionEffect:bp,useLayoutEffect:vp,useMemo:Ep,useReducer:vo,useRef:gp,useState:function(){return vo(wn)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Pe();return Ue===null?Co(n,e,t):Cp(n,Ue.memoizedState,e,t)},useTransition:function(){var e=vo(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ja(e),t]},useSyncExternalStore:ep,useId:Ap,useHostTransitionStatus:zo,useFormState:mp,useActionState:mp,useOptimistic:function(e,t){var n=Pe();return Ue!==null?rp(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:yo,useCacheRefresh:Mp};Lp.useEffectEvent=yp;function Mo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Do={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Gn(a);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(At(t,e,a),Qa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Gn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(At(t,e,a),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Gn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(At(t,e,n),Qa(t,e,n))}};function Rp(e,t,n,a,o,s,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,g):t.prototype&&t.prototype.isPureReactComponent?!Ua(n,a)||!Ua(o,s):!0}function Bp(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function kl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Up(e){Ji(e)}function Hp(e){console.error(e)}function qp(e){Ji(e)}function br(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Yp(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function No(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){br(e,t)},n}function Gp(e){return e=Gn(e),e.tag=3,e}function Vp(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Yp(t,n,a)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Yp(t,n,a),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})})}function l0(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Kl(t,n,o,!0),n=Lt.current,n!==null){switch(n.tag){case 31:case 13:return Jt===null?Dr():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ls(e,a,o)),!1;case 22:return n.flags|=65536,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ls(e,a,o)),!1}throw Error(u(435,n.tag))}return ls(e,a,o),Dr(),!1}if(Ae)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Ju&&(e=Error(u(422),{cause:a}),Ya(Qt(e,n)))):(a!==Ju&&(t=Error(u(423),{cause:a}),Ya(Qt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Qt(a,n),o=No(e.stateNode,a,o),uo(e,o),$e!==4&&($e=2)),!1;var s=Error(u(520),{cause:a});if(s=Qt(s,n),ri===null?ri=[s]:ri.push(s),$e!==4&&($e=2),t===null)return!0;a=Qt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=No(n.stateNode,a,e),uo(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Kn===null||!Kn.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Gp(o),Vp(o,e,n,a),uo(n,o),!1}n=n.return}while(n!==null);return!1}var _o=Error(u(461)),nt=!1;function dt(e,t,n,a){t.child=e===null?Zf(t,null,n,a):vl(t,e.child,n,a)}function Xp(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var g={};for(var S in a)S!=="ref"&&(g[S]=a[S])}else g=a;return gl(t),a=ho(e,t,n,g,s,o),S=mo(),e!==null&&!nt?(go(e,t,o),En(e,t,o)):(Ae&&S&&Fu(t),t.flags|=1,dt(e,t,a,o),t.child)}function Ip(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Iu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Qp(e,t,s,a,o)):(e=er(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Yo(e,o)){var g=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(g,a)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=yn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Qp(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(Ua(s,a)&&e.ref===t.ref)if(nt=!1,t.pendingProps=a=s,Yo(e,o))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,En(e,t,o)}return Oo(e,t,n,a,o)}function Zp(e,t,n,a){var o=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~s}else a=0,t.child=null;return Fp(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ar(t,s!==null?s.cachePool:null),s!==null?Jf(t,s):so(),$f(t);else return a=t.lanes=536870912,Fp(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(ar(t,s.cachePool),Jf(t,s),In(),t.memoizedState=null):(e!==null&&ar(t,null),so(),In());return dt(e,t,o,n),t.child}function Pa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fp(e,t,n,a,o){var s=lo();return s=s===null?null:{parent:et._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ar(t,null),so(),$f(t),e!==null&&Kl(e,t,a,!0),t.childLanes=o,null}function vr(e,t){return t=kr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kp(e,t,n){return vl(t,e.child,null,n),e=vr(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function a0(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(a.mode==="hidden")return e=vr(t,a),t.lanes=536870912,Pa(null,e);if(fo(t),(e=Ze)?(e=uh(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Nf(e),n.return=t,t.child=n,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return vr(t,a)}var s=e.memoizedState;if(s!==null){var g=s.dehydrated;if(fo(t),o)if(t.flags&256)t.flags&=-257,t=Kp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(nt||Kl(e,t,n,!1),o=(n&e.childLanes)!==0,nt||o){if(a=Ve,a!==null&&(g=Uc(a,n),g!==0&&g!==s.retryLane))throw s.retryLane=g,pl(e,g),At(a,e,g),_o;Dr(),t=Kp(e,t,n)}else e=s.treeContext,Ze=$t(g.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&Lf(t,e),t=vr(t,a),t.flags|=4096;return t}return e=yn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Oo(e,t,n,a,o){return gl(t),n=ho(e,t,n,a,void 0,o),a=mo(),e!==null&&!nt?(go(e,t,o),En(e,t,o)):(Ae&&a&&Fu(t),t.flags|=1,dt(e,t,n,o),t.child)}function Jp(e,t,n,a,o,s){return gl(t),t.updateQueue=null,n=Pf(t,a,n,o),Wf(e),a=mo(),e!==null&&!nt?(go(e,t,s),En(e,t,s)):(Ae&&a&&Fu(t),t.flags|=1,dt(e,t,n,s),t.child)}function $p(e,t,n,a,o){if(gl(t),t.stateNode===null){var s=Il,g=n.contextType;typeof g=="object"&&g!==null&&(s=pt(g)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Do,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},io(t),g=n.contextType,s.context=typeof g=="object"&&g!==null?pt(g):Il,s.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Mo(t,n,g,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(g=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),g!==s.state&&Do.enqueueReplaceState(s,s.state,null),Fa(t,a,s,o),Za(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var S=t.memoizedProps,T=kl(n,S);s.props=T;var O=s.context,G=n.contextType;g=Il,typeof G=="object"&&G!==null&&(g=pt(G));var Q=n.getDerivedStateFromProps;G=typeof Q=="function"||typeof s.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,G||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(S||O!==g)&&Bp(t,s,a,g),Yn=!1;var R=t.memoizedState;s.state=R,Fa(t,a,s,o),Za(),O=t.memoizedState,S||R!==O||Yn?(typeof Q=="function"&&(Mo(t,n,Q,a),O=t.memoizedState),(T=Yn||Rp(t,n,T,a,R,O,g))?(G||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),s.props=a,s.state=O,s.context=g,a=T):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,ro(e,t),g=t.memoizedProps,G=kl(n,g),s.props=G,Q=t.pendingProps,R=s.context,O=n.contextType,T=Il,typeof O=="object"&&O!==null&&(T=pt(O)),S=n.getDerivedStateFromProps,(O=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g!==Q||R!==T)&&Bp(t,s,a,T),Yn=!1,R=t.memoizedState,s.state=R,Fa(t,a,s,o),Za();var U=t.memoizedState;g!==Q||R!==U||Yn||e!==null&&e.dependencies!==null&&nr(e.dependencies)?(typeof S=="function"&&(Mo(t,n,S,a),U=t.memoizedState),(G=Yn||Rp(t,n,G,a,R,U,T)||e!==null&&e.dependencies!==null&&nr(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,U,T),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,U,T)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=U),s.props=a,s.state=U,s.context=T,a=G):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Sr(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=vl(t,e.child,null,o),t.child=vl(t,null,n,o)):dt(e,t,n,o),t.memoizedState=s.state,e=t.child):e=En(e,t,o),e}function Wp(e,t,n,a){return hl(),t.flags|=256,dt(e,t,n,a),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ro(e){return{baseLanes:e,cachePool:Yf()}}function Bo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function Pp(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,g;if((g=s)||(g=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),g&&(o=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(o?Xn(t):In(),(e=Ze)?(e=uh(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Nf(e),n.return=t,t.child=n,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return bs(e)?t.lanes=32:t.lanes=536870912,null}var S=a.children;return a=a.fallback,o?(In(),o=t.mode,S=kr({mode:"hidden",children:S},o),a=dl(a,o,n,null),S.return=t,a.return=t,S.sibling=a,t.child=S,a=t.child,a.memoizedState=Ro(n),a.childLanes=Bo(e,g,n),t.memoizedState=Lo,Pa(null,a)):(Xn(t),Uo(t,S))}var T=e.memoizedState;if(T!==null&&(S=T.dehydrated,S!==null)){if(s)t.flags&256?(Xn(t),t.flags&=-257,t=Ho(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),S=a.fallback,o=t.mode,a=kr({mode:"visible",children:a.children},o),S=dl(S,o,n,null),S.flags|=2,a.return=t,S.return=t,a.sibling=S,t.child=a,vl(t,e.child,null,n),a=t.child,a.memoizedState=Ro(n),a.childLanes=Bo(e,g,n),t.memoizedState=Lo,t=Pa(null,a));else if(Xn(t),bs(S)){if(g=S.nextSibling&&S.nextSibling.dataset,g)var O=g.dgst;g=O,a=Error(u(419)),a.stack="",a.digest=g,Ya({value:a,source:null,stack:null}),t=Ho(e,t,n)}else if(nt||Kl(e,t,n,!1),g=(n&e.childLanes)!==0,nt||g){if(g=Ve,g!==null&&(a=Uc(g,n),a!==0&&a!==T.retryLane))throw T.retryLane=a,pl(e,a),At(g,e,a),_o;ys(S)||Dr(),t=Ho(e,t,n)}else ys(S)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ze=$t(S.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&Lf(t,e),t=Uo(t,a.children),t.flags|=4096);return t}return o?(In(),S=a.fallback,o=t.mode,T=e.child,O=T.sibling,a=yn(T,{mode:"hidden",children:a.children}),a.subtreeFlags=T.subtreeFlags&65011712,O!==null?S=yn(O,S):(S=dl(S,o,n,null),S.flags|=2),S.return=t,a.return=t,a.sibling=S,t.child=a,Pa(null,a),a=t.child,S=e.child.memoizedState,S===null?S=Ro(n):(o=S.cachePool,o!==null?(T=et._currentValue,o=o.parent!==T?{parent:T,pool:T}:o):o=Yf(),S={baseLanes:S.baseLanes|n,cachePool:o}),a.memoizedState=S,a.childLanes=Bo(e,g,n),t.memoizedState=Lo,Pa(e.child,a)):(Xn(t),n=e.child,e=n.sibling,n=yn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Uo(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Ho(e,t,n){return vl(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ed(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Pu(e.return,t,n)}function qo(e,t,n,a,o,s){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:s}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=a,g.tail=n,g.tailMode=o,g.treeForkCount=s)}function td(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;a=a.children;var g=We.current,S=(g&2)!==0;if(S?(g=g&1|2,t.flags|=128):g&=1,w(We,g),dt(e,t,a,n),a=Ae?qa:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,n,t);else if(e.tag===19)ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&cr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qo(t,!1,o,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&cr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qo(t,!0,n,null,s,a);break;case"together":qo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Kl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nr(e)))}function i0(e,t,n){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),qn(t,et,e.memoizedState.cache),hl();break;case 27:case 5:Gt(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Xn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Pp(e,t,n):(Xn(t),e=En(e,t,n),e!==null?e.sibling:null);Xn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Kl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return td(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),w(We,We.current),a)break;return null;case 22:return t.lanes=0,Zp(e,t,n,t.pendingProps);case 24:qn(t,et,e.memoizedState.cache)}return En(e,t,n)}function nd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!Yo(e,n)&&(t.flags&128)===0)return nt=!1,i0(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ae&&(t.flags&1048576)!==0&&Of(t,qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=yl(t.elementType),t.type=e,typeof e=="function")Iu(e)?(a=kl(e,a),t.tag=1,t=$p(null,t,e,a,n)):(t.tag=0,t=Oo(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===ae){t.tag=11,t=Xp(null,t,e,a,n);break e}else if(o===_){t.tag=14,t=Ip(null,t,e,a,n);break e}}throw t=oe(e)||e,Error(u(306,t,""))}}return t;case 0:return Oo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=kl(a,t.pendingProps),$p(e,t,a,o,n);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;o=s.element,ro(e,t),Fa(t,a,null,n);var g=t.memoizedState;if(a=g.cache,qn(t,et,a),a!==s.cache&&eo(t,[et],n,!0),Za(),a=g.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Wp(e,t,a,n);break e}else if(a!==o){o=Qt(Error(u(424)),t),Ya(o),t=Wp(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=$t(e.firstChild),ft=t,Ae=!0,Un=null,Kt=!0,n=Zf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hl(),a===o){t=En(e,t,n);break e}dt(e,t,a,n)}t=t.child}return t;case 26:return Sr(e,t),e===null?(n=dh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,a=Ur(ce.current).createElement(n),a[ct]=t,a[wt]=e,ht(a,n,e),ot(a),t.stateNode=a):t.memoizedState=dh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gt(t),e===null&&Ae&&(a=t.stateNode=ch(t.type,t.pendingProps,ce.current),ft=t,Kt=!0,o=Ze,Pn(t.type)?(vs=o,Ze=$t(a.firstChild)):Ze=o),dt(e,t,t.pendingProps.children,n),Sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((o=a=Ze)&&(a=L0(a,t.type,t.pendingProps,Kt),a!==null?(t.stateNode=a,ft=t,Ze=$t(a.firstChild),Kt=!1,o=!0):o=!1),o||Hn(t)),Gt(t),o=t.type,s=t.pendingProps,g=e!==null?e.memoizedProps:null,a=s.children,ms(o,s)?a=null:g!==null&&ms(o,g)&&(t.flags|=32),t.memoizedState!==null&&(o=ho(e,t,J1,null,null,n),hi._currentValue=o),Sr(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&Ae&&((e=n=Ze)&&(n=R0(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,ft=t,Ze=null,e=!0):e=!1),e||Hn(t)),null;case 13:return Pp(e,t,n);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vl(t,null,a,n):dt(e,t,a,n),t.child;case 11:return Xp(e,t,t.type,t.pendingProps,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,qn(t,t.type,a.value),dt(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,gl(t),o=pt(o),a=a(o),t.flags|=1,dt(e,t,a,n),t.child;case 14:return Ip(e,t,t.type,t.pendingProps,n);case 15:return Qp(e,t,t.type,t.pendingProps,n);case 19:return td(e,t,n);case 31:return a0(e,t,n);case 22:return Zp(e,t,n,t.pendingProps);case 24:return gl(t),a=pt(et),e===null?(o=lo(),o===null&&(o=Ve,s=to(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},io(t),qn(t,et,o)):((e.lanes&n)!==0&&(ro(e,t),Fa(t,null,null,n),Za()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),qn(t,et,a)):(a=s.cache,qn(t,et,a),a!==o.cache&&eo(t,[et],n,!0))),dt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Cn(e){e.flags|=4}function Go(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Ad())e.flags|=8192;else throw bl=rr,ao}else e.flags&=-16777217}function ld(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yh(t))if(Ad())e.flags|=8192;else throw bl=rr,ao}function wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lc():536870912,e.lanes|=t,ua|=t)}function ei(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function r0(e,t,n){var a=t.pendingProps;switch(Ku(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(et),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),Fe(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(Cn(t),s!==null?(Fe(t),ld(t,s)):(Fe(t),Go(t,o,null,a,n))):s?s!==e.memoizedState?(Cn(t),Fe(t),ld(t,s)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Cn(t),Fe(t),Go(t,o,e,a,n)),null;case 27:if(pn(t),n=ce.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}e=$.current,Fl(t)?Rf(t):(e=ch(o,a,n),t.stateNode=e,Cn(t))}return Fe(t),null;case 5:if(pn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}if(s=$.current,Fl(t))Rf(t);else{var g=Ur(ce.current);switch(s){case 1:s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=g.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?g.createElement("select",{is:a.is}):g.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?g.createElement(o,{is:a.is}):g.createElement(o)}}s[ct]=t,s[wt]=a;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)s.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=s;e:switch(ht(s,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Cn(t)}}return Fe(t),Go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ce.current,Fl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=ft,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Pd(e.nodeValue,n)),e||Hn(t,!0)}else e=Ur(e).createTextNode(a),e[ct]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Fl(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ct]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Fe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Fl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[ct]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else o=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),wr(t,t.updateQueue),Fe(t),null);case 4:return Be(),e===null&&cs(t.stateNode.containerInfo),Fe(t),null;case 10:return Sn(t.type),Fe(t),null;case 19:if(Y(We),a=t.memoizedState,a===null)return Fe(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)ei(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=cr(e),s!==null){for(t.flags|=128,ei(a,!1),e=s.updateQueue,t.updateQueue=e,wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Df(n,e),n=n.sibling;return w(We,We.current&1|2),Ae&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&yt()>jr&&(t.flags|=128,o=!0,ei(a,!1),t.lanes=4194304)}else{if(!o)if(e=cr(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,wr(t,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ae)return Fe(t),null}else 2*yt()-a.renderingStartTime>jr&&n!==536870912&&(t.flags|=128,o=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,n=We.current,w(We,o?n&1|2:n&1),Ae&&bn(t,a.treeForkCount),e):(Fe(t),null);case 22:case 23:return Rt(t),co(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(xl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(et),Fe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function u0(e,t){switch(Ku(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(et),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pn(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(u(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(We),null;case 4:return Be(),null;case 10:return Sn(t.type),null;case 22:case 23:return Rt(t),co(),e!==null&&Y(xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(et),null;case 25:return null;default:return null}}function ad(e,t){switch(Ku(t),t.tag){case 3:Sn(et),Be();break;case 26:case 27:case 5:pn(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:Y(We);break;case 10:Sn(t.type);break;case 22:case 23:Rt(t),co(),e!==null&&Y(xl);break;case 24:Sn(et)}}function ti(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,g=n.inst;a=s(),g.destroy=a}n=n.next}while(n!==o)}}catch(S){Re(t,t.return,S)}}function Qn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var g=a.inst,S=g.destroy;if(S!==void 0){g.destroy=void 0,o=t;var T=n,O=S;try{O()}catch(G){Re(o,T,G)}}}a=a.next}while(a!==s)}}catch(G){Re(t,t.return,G)}}function id(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Kf(t,n)}catch(a){Re(e,e.return,a)}}}function rd(e,t,n){n.props=kl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Re(e,t,a)}}function ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Re(e,t,o)}}function on(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Re(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Re(e,t,o)}else n.current=null}function ud(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Re(e,e.return,o)}}function Vo(e,t,n){try{var a=e.stateNode;A0(a,e.type,n,t),a[wt]=t}catch(o){Re(e,e.return,o)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function Xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Er(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Er(e,t,n),e=e.sibling;e!==null;)Er(e,t,n),e=e.sibling}function sd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,a,n),t[ct]=e,t[wt]=n}catch(s){Re(e,e.return,s)}}var Tn=!1,lt=!1,Qo=!1,cd=typeof WeakSet=="function"?WeakSet:Set,st=null;function o0(e,t){if(e=e.containerInfo,ds=Ir,e=kf(e),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var g=0,S=-1,T=-1,O=0,G=0,Q=e,R=null;t:for(;;){for(var U;Q!==n||o!==0&&Q.nodeType!==3||(S=g+o),Q!==s||a!==0&&Q.nodeType!==3||(T=g+a),Q.nodeType===3&&(g+=Q.nodeValue.length),(U=Q.firstChild)!==null;)R=Q,Q=U;for(;;){if(Q===e)break t;if(R===n&&++O===o&&(S=g),R===s&&++G===a&&(T=g),(U=Q.nextSibling)!==null)break;Q=R,R=Q.parentNode}Q=U}n=S===-1||T===-1?null:{start:S,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(hs={focusedElem:e,selectionRange:n},Ir=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var ue=kl(n.type,o);e=a.getSnapshotBeforeUpdate(ue,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(de){Re(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function fd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),a&4&&ti(5,n);break;case 1:if(jn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Re(n,n.return,g)}else{var o=kl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Re(n,n.return,g)}}a&64&&id(n),a&512&&ni(n,n.return);break;case 3:if(jn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Kf(e,t)}catch(g){Re(n,n.return,g)}}break;case 27:t===null&&a&4&&sd(n);case 26:case 5:jn(e,n),t===null&&a&4&&ud(n),a&512&&ni(n,n.return);break;case 12:jn(e,n);break;case 31:jn(e,n),a&4&&hd(e,n);break;case 13:jn(e,n),a&4&&md(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=x0.bind(null,n),B0(e,n))));break;case 22:if(a=n.memoizedState!==null||Tn,!a){t=t!==null&&t.memoizedState!==null||lt,o=Tn;var s=lt;Tn=a,(lt=t)&&!s?An(e,n,(n.subtreeFlags&8772)!==0):jn(e,n),Tn=o,lt=s}break;case 30:break;default:jn(e,n)}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Ct=!1;function zn(e,t,n){for(n=n.child;n!==null;)dd(e,t,n),n=n.sibling}function dd(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(bt,n)}catch{}switch(n.tag){case 26:lt||on(n,t),zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||on(n,t);var a=Ke,o=Ct;Pn(n.type)&&(Ke=n.stateNode,Ct=!1),zn(e,t,n),fi(n.stateNode),Ke=a,Ct=o;break;case 5:lt||on(n,t);case 6:if(a=Ke,o=Ct,Ke=null,zn(e,t,n),Ke=a,Ct=o,Ke!==null)if(Ct)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(s){Re(n,t,s)}else try{Ke.removeChild(n.stateNode)}catch(s){Re(n,t,s)}break;case 18:Ke!==null&&(Ct?(e=Ke,ih(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ma(e)):ih(Ke,n.stateNode));break;case 4:a=Ke,o=Ct,Ke=n.stateNode.containerInfo,Ct=!0,zn(e,t,n),Ke=a,Ct=o;break;case 0:case 11:case 14:case 15:Qn(2,n,t),lt||Qn(4,n,t),zn(e,t,n);break;case 1:lt||(on(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&rd(n,t,a)),zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:lt=(a=lt)||n.memoizedState!==null,zn(e,t,n),lt=a;break;default:zn(e,t,n)}}function hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ma(e)}catch(n){Re(t,t.return,n)}}}function md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ma(e)}catch(n){Re(t,t.return,n)}}function s0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cd),t;default:throw Error(u(435,e.tag))}}function Cr(e,t){var n=s0(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=y0.bind(null,e,a);a.then(o,o)}})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,g=t,S=g;e:for(;S!==null;){switch(S.tag){case 27:if(Pn(S.type)){Ke=S.stateNode,Ct=!1;break e}break;case 5:Ke=S.stateNode,Ct=!1;break e;case 3:case 4:Ke=S.stateNode.containerInfo,Ct=!0;break e}S=S.return}if(Ke===null)throw Error(u(160));dd(s,g,o),Ke=null,Ct=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}var nn=null;function gd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),zt(e),a&4&&(Qn(3,e,e.return),ti(3,e),Qn(5,e,e.return));break;case 1:Tt(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),a&64&&Tn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=nn;if(Tt(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Aa]||s[ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),ht(s,a,n),s[ct]=e,ot(s),a=s;break e;case"link":var g=gh("link","href",o).get(a+(n.href||""));if(g){for(var S=0;S<g.length;S++)if(s=g[S],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(S,1);break t}}s=o.createElement(a),ht(s,a,n),o.head.appendChild(s);break;case"meta":if(g=gh("meta","content",o).get(a+(n.content||""))){for(S=0;S<g.length;S++)if(s=g[S],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(S,1);break t}}s=o.createElement(a),ht(s,a,n),o.head.appendChild(s);break;default:throw Error(u(468,a))}s[ct]=e,ot(s),a=s}e.stateNode=a}else xh(o,e.type,e.stateNode);else e.stateNode=mh(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?xh(o,e.type,e.stateNode):mh(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),n!==null&&a&4&&Vo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),e.flags&32){o=e.stateNode;try{Ul(o,"")}catch(ue){Re(e,e.return,ue)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Vo(e,o,n!==null?n.memoizedProps:o)),a&1024&&(Qo=!0);break;case 6:if(Tt(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ue){Re(e,e.return,ue)}}break;case 3:if(Yr=null,o=nn,nn=Hr(t.containerInfo),Tt(t,e),nn=o,zt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(t.containerInfo)}catch(ue){Re(e,e.return,ue)}Qo&&(Qo=!1,xd(e));break;case 4:a=nn,nn=Hr(e.stateNode.containerInfo),Tt(t,e),zt(e),nn=a;break;case 12:Tt(t,e),zt(e);break;case 31:Tt(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 13:Tt(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zr=yt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 22:o=e.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,O=Tn,G=lt;if(Tn=O||o,lt=G||T,Tt(t,e),lt=G,Tn=O,zt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||T||Tn||lt||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){T=n=t;try{if(s=T.stateNode,o)g=s.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{S=T.stateNode;var Q=T.memoizedProps.style,R=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;S.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(ue){Re(T,T.return,ue)}}}else if(t.tag===6){if(n===null){T=t;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch(ue){Re(T,T.return,ue)}}}else if(t.tag===18){if(n===null){T=t;try{var U=T.stateNode;o?rh(U,!0):rh(T.stateNode,!1)}catch(ue){Re(T,T.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Cr(e,n))));break;case 19:Tt(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 30:break;case 21:break;default:Tt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(od(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,s=Xo(e);Er(e,s,o);break;case 5:var g=n.stateNode;n.flags&32&&(Ul(g,""),n.flags&=-33);var S=Xo(e);Er(e,S,g);break;case 3:case 4:var T=n.stateNode.containerInfo,O=Xo(e);Io(e,O,T);break;default:throw Error(u(161))}}catch(G){Re(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fd(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),wl(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rd(t,t.return,n),wl(t);break;case 27:fi(t.stateNode);case 26:case 5:on(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function An(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,g=s.flags;switch(s.tag){case 0:case 11:case 15:An(o,s,n),ti(4,s);break;case 1:if(An(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Re(a,a.return,O)}if(a=s,o=a.updateQueue,o!==null){var S=a.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Ff(T[o],S)}catch(O){Re(a,a.return,O)}}n&&g&64&&id(s),ni(s,s.return);break;case 27:sd(s);case 26:case 5:An(o,s,n),n&&a===null&&g&4&&ud(s),ni(s,s.return);break;case 12:An(o,s,n);break;case 31:An(o,s,n),n&&g&4&&hd(o,s);break;case 13:An(o,s,n),n&&g&4&&md(o,s);break;case 22:s.memoizedState===null&&An(o,s,n),ni(s,s.return);break;case 30:break;default:An(o,s,n)}t=t.sibling}}function Zo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ga(n))}function Fo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e))}function ln(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yd(e,t,n,a),t=t.sibling}function yd(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,a),o&2048&&ti(9,t);break;case 1:ln(e,t,n,a);break;case 3:ln(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e)));break;case 12:if(o&2048){ln(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,g=s.id,S=s.onPostCommit;typeof S=="function"&&S(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Re(t,t.return,T)}}else ln(e,t,n,a);break;case 31:ln(e,t,n,a);break;case 13:ln(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,g=t.alternate,t.memoizedState!==null?s._visibility&2?ln(e,t,n,a):li(e,t):s._visibility&2?ln(e,t,n,a):(s._visibility|=2,aa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Zo(g,t);break;case 24:ln(e,t,n,a),o&2048&&Fo(t.alternate,t);break;default:ln(e,t,n,a)}}function aa(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,g=t,S=n,T=a,O=g.flags;switch(g.tag){case 0:case 11:case 15:aa(s,g,S,T,o),ti(8,g);break;case 23:break;case 22:var G=g.stateNode;g.memoizedState!==null?G._visibility&2?aa(s,g,S,T,o):li(s,g):(G._visibility|=2,aa(s,g,S,T,o)),o&&O&2048&&Zo(g.alternate,g);break;case 24:aa(s,g,S,T,o),o&&O&2048&&Fo(g.alternate,g);break;default:aa(s,g,S,T,o)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:li(n,a),o&2048&&Zo(a.alternate,a);break;case 24:li(n,a),o&2048&&Fo(a.alternate,a);break;default:li(n,a)}t=t.sibling}}var ai=8192;function ia(e,t,n){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)bd(e,t,n),e=e.sibling}function bd(e,t,n){switch(e.tag){case 26:ia(e,t,n),e.flags&ai&&e.memoizedState!==null&&K0(n,nn,e.memoizedState,e.memoizedProps);break;case 5:ia(e,t,n);break;case 3:case 4:var a=nn;nn=Hr(e.stateNode.containerInfo),ia(e,t,n),nn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ai,ai=16777216,ia(e,t,n),ai=a):ia(e,t,n));break;default:ia(e,t,n)}}function vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,kd(a,e)}vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sd(e),e=e.sibling}function Sd(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tr(e)):ii(e);break;default:ii(e)}}function Tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,kd(a,e)}vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),Tr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Tr(t));break;default:Tr(t)}e=e.sibling}}function kd(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,st=a;else e:for(n=e;st!==null;){a=st;var o=a.sibling,s=a.return;if(pd(a),a===n){st=null;break e}if(o!==null){o.return=s,st=o;break e}st=s}}}var c0={getCacheForType:function(e){var t=pt(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pt(et).controller.signal}},f0=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ve=null,Ee=null,ze=0,Le=0,Bt=null,Zn=!1,ra=!1,Ko=!1,Mn=0,$e=0,Fn=0,El=0,Jo=0,Ut=0,ua=0,ri=null,jt=null,$o=!1,zr=0,wd=0,jr=1/0,Ar=null,Kn=null,rt=0,Jn=null,oa=null,Dn=0,Wo=0,Po=null,Ed=null,ui=0,es=null;function Ht(){return(_e&2)!==0&&ze!==0?ze&-ze:A.T!==null?rs():Hc()}function Cd(){if(Ut===0)if((ze&536870912)===0||Ae){var e=Bi;Bi<<=1,(Bi&3932160)===0&&(Bi=262144),Ut=e}else Ut=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Ut}function At(e,t,n){(e===Ve&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(sa(e,0),$n(e,ze,Ut,!1)),ja(e,n),((_e&2)===0||e!==Ve)&&(e===Ve&&((_e&2)===0&&(El|=n),$e===4&&$n(e,ze,Ut,!1)),sn(e))}function Td(e,t,n){if((_e&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||za(e,t),o=a?h0(e,t):ns(e,t,!0),s=a;do{if(o===0){ra&&!a&&$n(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!p0(n)){o=ns(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var S=e;o=ri;var T=S.current.memoizedState.isDehydrated;if(T&&(sa(S,g).flags|=256),g=ns(S,g,!1),g!==2){if(Ko&&!T){S.errorRecoveryDisabledLanes|=s,El|=s,o=4;break e}s=jt,jt=o,s!==null&&(jt===null?jt=s:jt.push.apply(jt,s))}o=g}if(s=!1,o!==2)continue}}if(o===1){sa(e,0),$n(e,t,0,!0);break}e:{switch(a=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:$n(a,t,Ut,!Zn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=zr+300-yt(),10<o)){if($n(a,t,Ut,!Zn),Hi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=lh(zd.bind(null,a,n,jt,Ar,$o,t,Ut,El,ua,Zn,s,"Throttled",-0,0),o);break e}zd(a,n,jt,Ar,$o,t,Ut,El,ua,Zn,s,null,-0,0)}}break}while(!0);sn(e)}function zd(e,t,n,a,o,s,g,S,T,O,G,Q,R,U){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},bd(t,s,Q);var ue=(s&62914560)===s?zr-yt():(s&4194048)===s?wd-yt():0;if(ue=J0(Q,ue),ue!==null){Dn=s,e.cancelPendingCommit=ue(Ld.bind(null,e,t,s,n,a,o,g,S,T,G,Q,null,R,U)),$n(e,s,g,!O);return}}Ld(e,t,s,n,a,o,g,S,T)}function p0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!_t(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t,n,a){t&=~Jo,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-Ge(o),g=1<<s;a[s]=-1,o&=~g}n!==0&&Rc(e,n,t)}function Mr(){return(_e&6)===0?(oi(0),!1):!0}function ts(){if(Ee!==null){if(Le===0)var e=Ee.return;else e=Ee,vn=ml=null,xo(e),Pl=null,Xa=0,e=Ee;for(;e!==null;)ad(e.alternate,e),e=e.return;Ee=null}}function sa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,N0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,ts(),Ve=e,Ee=n=yn(e.current,null),ze=t,Le=0,Bt=null,Zn=!1,ra=za(e,t),Ko=!1,ua=Ut=Jo=El=Fn=$e=0,jt=ri=null,$o=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-Ge(a),s=1<<o;t|=e[o],a&=~s}return Mn=t,$i(),n}function jd(e,t){ye=null,A.H=Wa,t===Wl||t===ir?(t=Xf(),Le=3):t===ao?(t=Xf(),Le=4):Le=t===_o?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Ee===null&&($e=1,br(e,Qt(t,e.current)))}function Ad(){var e=Lt.current;return e===null?!0:(ze&4194048)===ze?Jt===null:(ze&62914560)===ze||(ze&536870912)!==0?e===Jt:!1}function Md(){var e=A.H;return A.H=Wa,e===null?Wa:e}function Dd(){var e=A.A;return A.A=c0,e}function Dr(){$e=4,Zn||(ze&4194048)!==ze&&Lt.current!==null||(ra=!0),(Fn&134217727)===0&&(El&134217727)===0||Ve===null||$n(Ve,ze,Ut,!1)}function ns(e,t,n){var a=_e;_e|=2;var o=Md(),s=Dd();(Ve!==e||ze!==t)&&(Ar=null,sa(e,t)),t=!1;var g=$e;e:do try{if(Le!==0&&Ee!==null){var S=Ee,T=Bt;switch(Le){case 8:ts(),g=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var O=Le;if(Le=0,Bt=null,ca(e,S,T,O),n&&ra){g=0;break e}break;default:O=Le,Le=0,Bt=null,ca(e,S,T,O)}}d0(),g=$e;break}catch(G){jd(e,G)}while(!0);return t&&e.shellSuspendCounter++,vn=ml=null,_e=a,A.H=o,A.A=s,Ee===null&&(Ve=null,ze=0,$i()),g}function d0(){for(;Ee!==null;)Nd(Ee)}function h0(e,t){var n=_e;_e|=2;var a=Md(),o=Dd();Ve!==e||ze!==t?(Ar=null,jr=yt()+500,sa(e,t)):ra=za(e,t);e:do try{if(Le!==0&&Ee!==null){t=Ee;var s=Bt;t:switch(Le){case 1:Le=0,Bt=null,ca(e,t,s,1);break;case 2:case 9:if(Gf(s)){Le=0,Bt=null,_d(t);break}t=function(){Le!==2&&Le!==9||Ve!==e||(Le=7),sn(e)},s.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Gf(s)?(Le=0,Bt=null,_d(t)):(Le=0,Bt=null,ca(e,t,s,7));break;case 5:var g=null;switch(Ee.tag){case 26:g=Ee.memoizedState;case 5:case 27:var S=Ee;if(g?yh(g):S.stateNode.complete){Le=0,Bt=null;var T=S.sibling;if(T!==null)Ee=T;else{var O=S.return;O!==null?(Ee=O,Nr(O)):Ee=null}break t}}Le=0,Bt=null,ca(e,t,s,5);break;case 6:Le=0,Bt=null,ca(e,t,s,6);break;case 8:ts(),$e=6;break e;default:throw Error(u(462))}}m0();break}catch(G){jd(e,G)}while(!0);return vn=ml=null,A.H=a,A.A=o,_e=n,Ee!==null?0:(Ve=null,ze=0,$i(),$e)}function m0(){for(;Ee!==null&&!hu();)Nd(Ee)}function Nd(e){var t=nd(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?Nr(e):Ee=t}function _d(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jp(n,t,t.pendingProps,t.type,void 0,ze);break;case 11:t=Jp(n,t,t.pendingProps,t.type.render,t.ref,ze);break;case 5:xo(t);default:ad(n,t),t=Ee=Df(t,Mn),t=nd(n,t,Mn)}e.memoizedProps=e.pendingProps,t===null?Nr(e):Ee=t}function ca(e,t,n,a){vn=ml=null,xo(t),Pl=null,Xa=0;var o=t.return;try{if(l0(e,o,t,n,ze)){$e=1,br(e,Qt(n,e.current)),Ee=null;return}}catch(s){if(o!==null)throw Ee=o,s;$e=1,br(e,Qt(n,e.current)),Ee=null;return}t.flags&32768?(Ae||a===1?e=!0:ra||(ze&536870912)!==0?e=!1:(Zn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Od(t,e)):Nr(t)}function Nr(e){var t=e;do{if((t.flags&32768)!==0){Od(t,Zn);return}e=t.return;var n=r0(t.alternate,t,Mn);if(n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function Od(e,t){do{var n=u0(e.alternate,e);if(n!==null){n.flags&=32767,Ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=n}while(e!==null);$e=6,Ee=null}function Ld(e,t,n,a,o,s,g,S,T){e.cancelPendingCommit=null;do _r();while(rt!==0);if((_e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Vu,Fg(e,n,s,g,S,T),e===Ve&&(Ee=Ve=null,ze=0),oa=t,Jn=e,Dn=n,Wo=s,Po=o,Ed=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,b0(he,function(){return qd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,o=Z.p,Z.p=2,g=_e,_e|=4;try{o0(e,t,n)}finally{_e=g,Z.p=o,A.T=a}}rt=1,Rd(),Bd(),Ud()}}function Rd(){if(rt===1){rt=0;var e=Jn,t=oa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{gd(t,e);var s=hs,g=kf(e.containerInfo),S=s.focusedElem,T=s.selectionRange;if(g!==S&&S&&S.ownerDocument&&Sf(S.ownerDocument.documentElement,S)){if(T!==null&&Uu(S)){var O=T.start,G=T.end;if(G===void 0&&(G=O),"selectionStart"in S)S.selectionStart=O,S.selectionEnd=Math.min(G,S.value.length);else{var Q=S.ownerDocument||document,R=Q&&Q.defaultView||window;if(R.getSelection){var U=R.getSelection(),ue=S.textContent.length,de=Math.min(T.start,ue),qe=T.end===void 0?de:Math.min(T.end,ue);!U.extend&&de>qe&&(g=qe,qe=de,de=g);var M=vf(S,de),j=vf(S,qe);if(M&&j&&(U.rangeCount!==1||U.anchorNode!==M.node||U.anchorOffset!==M.offset||U.focusNode!==j.node||U.focusOffset!==j.offset)){var N=Q.createRange();N.setStart(M.node,M.offset),U.removeAllRanges(),de>qe?(U.addRange(N),U.extend(j.node,j.offset)):(N.setEnd(j.node,j.offset),U.addRange(N))}}}}for(Q=[],U=S;U=U.parentNode;)U.nodeType===1&&Q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Q.length;S++){var X=Q[S];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ir=!!ds,hs=ds=null}finally{_e=o,Z.p=a,A.T=n}}e.current=t,rt=2}}function Bd(){if(rt===2){rt=0;var e=Jn,t=oa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=A.T,A.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{fd(e,t.alternate,t)}finally{_e=o,Z.p=a,A.T=n}}rt=3}}function Ud(){if(rt===4||rt===3){rt=0,mu();var e=Jn,t=oa,n=Dn,a=Ed;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,oa=Jn=null,Hd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kn=null),bu(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=A.T,o=Z.p,Z.p=2,A.T=null;try{for(var s=e.onRecoverableError,g=0;g<a.length;g++){var S=a[g];s(S.value,{componentStack:S.stack})}}finally{A.T=t,Z.p=o}}(Dn&3)!==0&&_r(),sn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===es?ui++:(ui=0,es=e):ui=0,oi(0)}}function Hd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ga(t)))}function _r(){return Rd(),Bd(),Ud(),qd()}function qd(){if(rt!==5)return!1;var e=Jn,t=Wo;Wo=0;var n=bu(Dn),a=A.T,o=Z.p;try{Z.p=32>n?32:n,A.T=null,n=Po,Po=null;var s=Jn,g=Dn;if(rt=0,oa=Jn=null,Dn=0,(_e&6)!==0)throw Error(u(331));var S=_e;if(_e|=4,Sd(s.current),yd(s,s.current,g,n),_e=S,oi(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(bt,s)}catch{}return!0}finally{Z.p=o,A.T=a,Hd(e,t)}}function Yd(e,t,n){t=Qt(n,t),t=No(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(ja(e,2),sn(e))}function Re(e,t,n){if(e.tag===3)Yd(e,e,n);else for(;t!==null;){if(t.tag===3){Yd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=Qt(n,e),n=Gp(2),a=Vn(t,n,2),a!==null&&(Vp(n,a,t,e),ja(a,2),sn(a));break}}t=t.return}}function ls(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new f0;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Ko=!0,o.add(n),e=g0.bind(null,e,t,n),t.then(e,e))}function g0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(ze&n)===n&&($e===4||$e===3&&(ze&62914560)===ze&&300>yt()-zr?(_e&2)===0&&sa(e,0):Jo|=n,ua===ze&&(ua=0)),sn(e)}function Gd(e,t){t===0&&(t=Lc()),e=pl(e,t),e!==null&&(ja(e,t),sn(e))}function x0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gd(e,n)}function y0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Gd(e,n)}function b0(e,t){return Dl(e,t)}var Or=null,fa=null,as=!1,Lr=!1,is=!1,Wn=0;function sn(e){e!==fa&&e.next===null&&(fa===null?Or=fa=e:fa=fa.next=e),Lr=!0,as||(as=!0,S0())}function oi(e,t){if(!is&&Lr){is=!0;do for(var n=!1,a=Or;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var g=a.suspendedLanes,S=a.pingedLanes;s=(1<<31-Ge(42|e)+1)-1,s&=o&~(g&~S),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Qd(a,s))}else s=ze,s=Hi(a,a===Ve?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||za(a,s)||(n=!0,Qd(a,s));a=a.next}while(n);is=!1}}function v0(){Vd()}function Vd(){Lr=as=!1;var e=0;Wn!==0&&D0()&&(e=Wn);for(var t=yt(),n=null,a=Or;a!==null;){var o=a.next,s=Xd(a,t);s===0?(a.next=null,n===null?Or=o:n.next=o,o===null&&(fa=n)):(n=a,(e!==0||(s&3)!==0)&&(Lr=!0)),a=o}rt!==0&&rt!==5||oi(e),Wn!==0&&(Wn=0)}function Xd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var g=31-Ge(s),S=1<<g,T=o[g];T===-1?((S&n)===0||(S&a)!==0)&&(o[g]=Zg(S,t)):T<=t&&(e.expiredLanes|=S),s&=~S}if(t=Ve,n=ze,n=Hi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ta(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||za(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ta(a),bu(n)){case 2:case 8:n=ee;break;case 32:n=he;break;case 268435456:n=Oe;break;default:n=he}return a=Id.bind(null,e),n=Dl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ta(a),e.callbackPriority=2,e.callbackNode=null,2}function Id(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var a=ze;return a=Hi(e,e===Ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Td(e,a,t),Xd(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Id.bind(null,e):null)}function Qd(e,t){if(_r())return null;Td(e,t,!0)}function S0(){_0(function(){(_e&6)!==0?Dl(V,v0):Vd()})}function rs(){if(Wn===0){var e=Jl;e===0&&(e=Ri,Ri<<=1,(Ri&261888)===0&&(Ri=256)),Wn=e}return Wn}function Zd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Fd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function k0(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Zd((o[wt]||null).action),g=a.submitter;g&&(t=(t=g[wt]||null)?Zd(t.formAction):g.getAttribute("formAction"),t!==null&&(s=t,g=null));var S=new Zi("action","action",null,a,o);e.push({event:S,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var T=g?Fd(o,g):new FormData(o);To(n,{pending:!0,data:T,method:o.method,action:s},null,T)}}else typeof s=="function"&&(S.preventDefault(),T=g?Fd(o,g):new FormData(o),To(n,{pending:!0,data:T,method:o.method,action:s},s,T))},currentTarget:o}]})}}for(var us=0;us<Gu.length;us++){var os=Gu[us],w0=os.toLowerCase(),E0=os[0].toUpperCase()+os.slice(1);tn(w0,"on"+E0)}tn(Cf,"onAnimationEnd"),tn(Tf,"onAnimationIteration"),tn(zf,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(q1,"onTransitionRun"),tn(Y1,"onTransitionStart"),tn(G1,"onTransitionCancel"),tn(jf,"onTransitionEnd"),Rl("onMouseEnter",["mouseout","mouseover"]),Rl("onMouseLeave",["mouseout","mouseover"]),Rl("onPointerEnter",["pointerout","pointerover"]),Rl("onPointerLeave",["pointerout","pointerover"]),ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ol("onBeforeInput",["compositionend","keypress","textInput","paste"]),ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Kd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var g=a.length-1;0<=g;g--){var S=a[g],T=S.instance,O=S.currentTarget;if(S=S.listener,T!==s&&o.isPropagationStopped())break e;s=S,o.currentTarget=O;try{s(o)}catch(G){Ji(G)}o.currentTarget=null,s=T}else for(g=0;g<a.length;g++){if(S=a[g],T=S.instance,O=S.currentTarget,S=S.listener,T!==s&&o.isPropagationStopped())break e;s=S,o.currentTarget=O;try{s(o)}catch(G){Ji(G)}o.currentTarget=null,s=T}}}}function Ce(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var a=e+"__bubble";n.has(a)||(Jd(t,e,2,!1),n.add(a))}function ss(e,t,n){var a=0;t&&(a|=4),Jd(n,e,a,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[Rr]){e[Rr]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(C0.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,ss("selectionchange",!1,t))}}function Jd(e,t,n,a){switch(Ch(t)){case 2:var o=P0;break;case 8:o=ex;break;default:o=Cs}n=o.bind(null,t,n,e),o=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fs(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var S=a.stateNode.containerInfo;if(S===o)break;if(g===4)for(g=a.return;g!==null;){var T=g.tag;if((T===3||T===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;S!==null;){if(g=_l(S),g===null)return;if(T=g.tag,T===5||T===6||T===26||T===27){a=s=g;continue e}S=S.parentNode}}a=a.return}ef(function(){var O=s,G=zu(n),Q=[];e:{var R=Af.get(e);if(R!==void 0){var U=Zi,ue=e;switch(e){case"keypress":if(Ii(n)===0)break e;case"keydown":case"keyup":U=y1;break;case"focusin":ue="focus",U=_u;break;case"focusout":ue="blur",U=_u;break;case"beforeblur":case"afterblur":U=_u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=S1;break;case Cf:case Tf:case zf:U=s1;break;case jf:U=w1;break;case"scroll":case"scrollend":U=a1;break;case"wheel":U=C1;break;case"copy":case"cut":case"paste":U=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=rf;break;case"toggle":case"beforetoggle":U=z1}var de=(t&4)!==0,qe=!de&&(e==="scroll"||e==="scrollend"),M=de?R!==null?R+"Capture":null:R;de=[];for(var j=O,N;j!==null;){var X=j;if(N=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||N===null||M===null||(X=Da(j,M),X!=null&&de.push(ci(j,X,N))),qe)break;j=j.return}0<de.length&&(R=new U(R,ue,null,n,G),Q.push({event:R,listeners:de}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",R&&n!==Tu&&(ue=n.relatedTarget||n.fromElement)&&(_l(ue)||ue[Nl]))break e;if((U||R)&&(R=G.window===G?G:(R=G.ownerDocument)?R.defaultView||R.parentWindow:window,U?(ue=n.relatedTarget||n.toElement,U=O,ue=ue?_l(ue):null,ue!==null&&(qe=p(ue),de=ue.tag,ue!==qe||de!==5&&de!==27&&de!==6)&&(ue=null)):(U=null,ue=O),U!==ue)){if(de=lf,X="onMouseLeave",M="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(de=rf,X="onPointerLeave",M="onPointerEnter",j="pointer"),qe=U==null?R:Ma(U),N=ue==null?R:Ma(ue),R=new de(X,j+"leave",U,n,G),R.target=qe,R.relatedTarget=N,X=null,_l(G)===O&&(de=new de(M,j+"enter",ue,n,G),de.target=N,de.relatedTarget=qe,X=de),qe=X,U&&ue)t:{for(de=T0,M=U,j=ue,N=0,X=M;X;X=de(X))N++;X=0;for(var fe=j;fe;fe=de(fe))X++;for(;0<N-X;)M=de(M),N--;for(;0<X-N;)j=de(j),X--;for(;N--;){if(M===j||j!==null&&M===j.alternate){de=M;break t}M=de(M),j=de(j)}de=null}else de=null;U!==null&&$d(Q,R,U,de,!1),ue!==null&&qe!==null&&$d(Q,qe,ue,de,!0)}}e:{if(R=O?Ma(O):window,U=R.nodeName&&R.nodeName.toLowerCase(),U==="select"||U==="input"&&R.type==="file")var De=hf;else if(pf(R))if(mf)De=B1;else{De=L1;var se=O1}else U=R.nodeName,!U||U.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&Cu(O.elementType)&&(De=hf):De=R1;if(De&&(De=De(e,O))){df(Q,De,n,G);break e}se&&se(e,R,O),e==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&Eu(R,"number",R.value)}switch(se=O?Ma(O):window,e){case"focusin":(pf(se)||se.contentEditable==="true")&&(Gl=se,Hu=O,Ha=null);break;case"focusout":Ha=Hu=Gl=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,wf(Q,n,G);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":wf(Q,n,G)}var be;if(Lu)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Yl?cf(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(uf&&n.locale!=="ko"&&(Yl||je!=="onCompositionStart"?je==="onCompositionEnd"&&Yl&&(be=tf()):(Rn=G,Mu="value"in Rn?Rn.value:Rn.textContent,Yl=!0)),se=Br(O,je),0<se.length&&(je=new af(je,e,null,n,G),Q.push({event:je,listeners:se}),be?je.data=be:(be=ff(n),be!==null&&(je.data=be)))),(be=A1?M1(e,n):D1(e,n))&&(je=Br(O,"onBeforeInput"),0<je.length&&(se=new af("onBeforeInput","beforeinput",null,n,G),Q.push({event:se,listeners:je}),se.data=be)),k0(Q,e,O,n,G)}Kd(Q,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Da(e,n),o!=null&&a.unshift(ci(e,o,s)),o=Da(e,t),o!=null&&a.push(ci(e,o,s))),e.tag===3)return a;e=e.return}return[]}function T0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $d(e,t,n,a,o){for(var s=t._reactName,g=[];n!==null&&n!==a;){var S=n,T=S.alternate,O=S.stateNode;if(S=S.tag,T!==null&&T===a)break;S!==5&&S!==26&&S!==27||O===null||(T=O,o?(O=Da(n,s),O!=null&&g.unshift(ci(n,O,T))):o||(O=Da(n,s),O!=null&&g.push(ci(n,O,T)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var z0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Wd(e){return(typeof e=="string"?e:""+e).replace(z0,`
`).replace(j0,"")}function Pd(e,t){return t=Wd(t),Wd(e)===t}function He(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ul(e,""+a);break;case"className":Yi(e,"class",a);break;case"tabIndex":Yi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,n,a);break;case"style":Wc(e,a,s);break;case"data":if(t!=="object"){Yi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",o.name,o,null),He(e,t,"formEncType",o.formEncType,o,null),He(e,t,"formMethod",o.formMethod,o,null),He(e,t,"formTarget",o.formTarget,o,null)):(He(e,t,"encType",o.encType,o,null),He(e,t,"method",o.method,o,null),He(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),qi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=n1.get(n)||n,qi(e,n,a))}}function ps(e,t,n,a,o,s){switch(n){case"style":Wc(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&Ul(e,""+a);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[wt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):qi(e,n,a)}}}function ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var g=n[s];if(g!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,s,g,n,null)}}o&&He(e,t,"srcSet",n.srcSet,n,null),a&&He(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var S=s=g=o=null,T=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var G=n[a];if(G!=null)switch(a){case"name":o=G;break;case"type":g=G;break;case"checked":T=G;break;case"defaultChecked":O=G;break;case"value":s=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:He(e,t,a,G,n,null)}}Fc(e,s,S,T,O,g,o,!1);return;case"select":Ce("invalid",e),a=g=s=null;for(o in n)if(n.hasOwnProperty(o)&&(S=n[o],S!=null))switch(o){case"value":s=S;break;case"defaultValue":g=S;break;case"multiple":a=S;default:He(e,t,o,S,n,null)}t=s,n=g,e.multiple=!!a,t!=null?Bl(e,!!a,t,!1):n!=null&&Bl(e,!!a,n,!0);return;case"textarea":Ce("invalid",e),s=o=a=null;for(g in n)if(n.hasOwnProperty(g)&&(S=n[g],S!=null))switch(g){case"value":a=S;break;case"defaultValue":o=S;break;case"children":s=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(91));break;default:He(e,t,g,S,n,null)}Jc(e,a,o,s);return;case"option":for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!=null)&&(T==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,t,T,a,n,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)Ce(si[a],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,O,a,n,null)}return;default:if(Cu(t)){for(G in n)n.hasOwnProperty(G)&&(a=n[G],a!==void 0&&ps(e,t,G,a,n,void 0));return}}for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!=null&&He(e,t,S,a,n,null))}function A0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,g=null,S=null,T=null,O=null,G=null;for(U in n){var Q=n[U];if(n.hasOwnProperty(U)&&Q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":T=Q;default:a.hasOwnProperty(U)||He(e,t,U,null,a,Q)}}for(var R in a){var U=a[R];if(Q=n[R],a.hasOwnProperty(R)&&(U!=null||Q!=null))switch(R){case"type":s=U;break;case"name":o=U;break;case"checked":O=U;break;case"defaultChecked":G=U;break;case"value":g=U;break;case"defaultValue":S=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:U!==Q&&He(e,t,R,U,a,Q)}}wu(e,g,S,T,O,G,s,o);return;case"select":U=g=S=R=null;for(s in n)if(T=n[s],n.hasOwnProperty(s)&&T!=null)switch(s){case"value":break;case"multiple":U=T;default:a.hasOwnProperty(s)||He(e,t,s,null,a,T)}for(o in a)if(s=a[o],T=n[o],a.hasOwnProperty(o)&&(s!=null||T!=null))switch(o){case"value":R=s;break;case"defaultValue":S=s;break;case"multiple":g=s;default:s!==T&&He(e,t,o,s,a,T)}t=S,n=g,a=U,R!=null?Bl(e,!!n,R,!1):!!a!=!!n&&(t!=null?Bl(e,!!n,t,!0):Bl(e,!!n,n?[]:"",!1));return;case"textarea":U=R=null;for(S in n)if(o=n[S],n.hasOwnProperty(S)&&o!=null&&!a.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:He(e,t,S,null,a,o)}for(g in a)if(o=a[g],s=n[g],a.hasOwnProperty(g)&&(o!=null||s!=null))switch(g){case"value":R=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&He(e,t,g,o,a,s)}Kc(e,R,U);return;case"option":for(var ue in n)R=n[ue],n.hasOwnProperty(ue)&&R!=null&&!a.hasOwnProperty(ue)&&(ue==="selected"?e.selected=!1:He(e,t,ue,null,a,R));for(T in a)R=a[T],U=n[T],a.hasOwnProperty(T)&&R!==U&&(R!=null||U!=null)&&(T==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":He(e,t,T,R,a,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)R=n[de],n.hasOwnProperty(de)&&R!=null&&!a.hasOwnProperty(de)&&He(e,t,de,null,a,R);for(O in a)if(R=a[O],U=n[O],a.hasOwnProperty(O)&&R!==U&&(R!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:He(e,t,O,R,a,U)}return;default:if(Cu(t)){for(var qe in n)R=n[qe],n.hasOwnProperty(qe)&&R!==void 0&&!a.hasOwnProperty(qe)&&ps(e,t,qe,void 0,a,R);for(G in a)R=a[G],U=n[G],!a.hasOwnProperty(G)||R===U||R===void 0&&U===void 0||ps(e,t,G,R,a,U);return}}for(var M in n)R=n[M],n.hasOwnProperty(M)&&R!=null&&!a.hasOwnProperty(M)&&He(e,t,M,null,a,R);for(Q in a)R=a[Q],U=n[Q],!a.hasOwnProperty(Q)||R===U||R==null&&U==null||He(e,t,Q,R,a,U)}function eh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],s=o.transferSize,g=o.initiatorType,S=o.duration;if(s&&S&&eh(g)){for(g=0,S=o.responseEnd,a+=1;a<n.length;a++){var T=n[a],O=T.startTime;if(O>S)break;var G=T.transferSize,Q=T.initiatorType;G&&eh(Q)&&(T=T.responseEnd,g+=G*(T<S?1:(S-O)/(T-O)))}if(--a,t+=8*(s+g)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ds=null,hs=null;function Ur(e){return e.nodeType===9?e:e.ownerDocument}function th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=null;function D0(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,_0=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(O0)}:lh;function O0(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function ih(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),ma(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")fi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fi(n);for(var s=n.firstChild;s;){var g=s.nextSibling,S=s.nodeName;s[Aa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=g}}else n==="body"&&fi(e.ownerDocument.body);n=o}while(n);ma(t)}function rh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xs(n),Su(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function L0(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function R0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$t(e.nextSibling),e===null))return null;return e}function uh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function ys(e){return e.data==="$?"||e.data==="$~"}function bs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function B0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vs=null;function oh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return $t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ch(e,t,n){switch(t=Ur(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Su(e)}var Wt=new Map,fh=new Set;function Hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=Z.d;Z.d={f:U0,r:H0,D:q0,C:Y0,L:G0,m:V0,X:I0,S:X0,M:Q0};function U0(){var e=Nn.f(),t=Mr();return e||t}function H0(e){var t=Ol(e);t!==null&&t.tag===5&&t.type==="form"?jp(t):Nn.r(e)}var pa=typeof document>"u"?null:document;function ph(e,t,n){var a=pa;if(a&&typeof t=="string"&&t){var o=Xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),fh.has(o)||(fh.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ht(t,"link",e),ot(t),a.head.appendChild(t)))}}function q0(e){Nn.D(e),ph("dns-prefetch",e,null)}function Y0(e,t){Nn.C(e,t),ph("preconnect",e,t)}function G0(e,t,n){Nn.L(e,t,n);var a=pa;if(a&&e&&t){var o='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Xt(n.imageSizes)+'"]')):o+='[href="'+Xt(e)+'"]';var s=o;switch(t){case"style":s=da(e);break;case"script":s=ha(e)}Wt.has(s)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(pi(s))||t==="script"&&a.querySelector(di(s))||(t=a.createElement("link"),ht(t,"link",e),ot(t),a.head.appendChild(t)))}}function V0(e,t){Nn.m(e,t);var n=pa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Xt(a)+'"][href="'+Xt(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ha(e)}if(!Wt.has(s)&&(e=x({rel:"modulepreload",href:e},t),Wt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(s)))return}a=n.createElement("link"),ht(a,"link",e),ot(a),n.head.appendChild(a)}}}function X0(e,t,n){Nn.S(e,t,n);var a=pa;if(a&&e){var o=Ll(a).hoistableStyles,s=da(e);t=t||"default";var g=o.get(s);if(!g){var S={loading:0,preload:null};if(g=a.querySelector(pi(s)))S.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(s))&&Ss(e,n);var T=g=a.createElement("link");ot(T),ht(T,"link",e),T._p=new Promise(function(O,G){T.onload=O,T.onerror=G}),T.addEventListener("load",function(){S.loading|=1}),T.addEventListener("error",function(){S.loading|=2}),S.loading|=4,qr(g,t,a)}g={type:"stylesheet",instance:g,count:1,state:S},o.set(s,g)}}}function I0(e,t){Nn.X(e,t);var n=pa;if(n&&e){var a=Ll(n).hoistableScripts,o=ha(e),s=a.get(o);s||(s=n.querySelector(di(o)),s||(e=x({src:e,async:!0},t),(t=Wt.get(o))&&ks(e,t),s=n.createElement("script"),ot(s),ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function Q0(e,t){Nn.M(e,t);var n=pa;if(n&&e){var a=Ll(n).hoistableScripts,o=ha(e),s=a.get(o);s||(s=n.querySelector(di(o)),s||(e=x({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&ks(e,t),s=n.createElement("script"),ot(s),ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function dh(e,t,n,a){var o=(o=ce.current)?Hr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=da(n.href),n=Ll(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=da(n.href);var s=Ll(o).hoistableStyles,g=s.get(e);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,g),(s=o.querySelector(pi(e)))&&!s._p&&(g.instance=s,g.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),s||Z0(o,e,n,g.state))),t&&a===null)throw Error(u(528,""));return g}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ha(n),n=Ll(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function da(e){return'href="'+Xt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Z0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ht(t,"link",n),ot(t),e.head.appendChild(t))}function ha(e){return'[src="'+Xt(e)+'"]'}function di(e){return"script[async]"+e}function mh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(a)return t.instance=a,ot(a),a;var o=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ot(a),ht(a,"style",o),qr(a,n.precedence,e),t.instance=a;case"stylesheet":o=da(n.href);var s=e.querySelector(pi(o));if(s)return t.state.loading|=4,t.instance=s,ot(s),s;a=hh(n),(o=Wt.get(o))&&Ss(a,o),s=(e.ownerDocument||e).createElement("link"),ot(s);var g=s;return g._p=new Promise(function(S,T){g.onload=S,g.onerror=T}),ht(s,"link",a),t.state.loading|=4,qr(s,n.precedence,e),t.instance=s;case"script":return s=ha(n.src),(o=e.querySelector(di(s)))?(t.instance=o,ot(o),o):(a=n,(o=Wt.get(s))&&(a=x({},n),ks(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),ot(o),ht(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,qr(a,n.precedence,e));return t.instance}function qr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,g=0;g<a.length;g++){var S=a[g];if(S.dataset.precedence===t)s=S;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yr=null;function gh(e,t,n){if(Yr===null){var a=new Map,o=Yr=new Map;o.set(n,a)}else o=Yr,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[Aa]||s[ct]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var g=s.getAttribute(t)||"";g=e+g;var S=a.get(g);S?S.push(s):a.set(g,[s])}}return a}function xh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function F0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function K0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=da(a.href),s=t.querySelector(pi(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,ot(s);return}s=t.ownerDocument||t,a=hh(a),(o=Wt.get(o))&&Ss(a,o),s=s.createElement("link"),ot(s);var g=s;g._p=new Promise(function(S,T){g.onload=S,g.onerror=T}),ht(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ws=0;function J0(e,t){return e.stylesheets&&e.count===0&&Xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&ws===0&&(ws=62500*M0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>ws?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach($0,e),Vr=null,Gr.call(e))}function $0(e,t){if(!(t.state.loading&4)){var n=Vr.get(e);if(n)var a=n.get(null);else{n=new Map,Vr.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var g=o[s];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),a=g)}a&&n.set(null,a)}o=t.instance,g=o.getAttribute("data-precedence"),s=n.get(g)||a,s===a&&n.set(null,o),n.set(g,o),this.count++,a=Gr.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:H,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function W0(e,t,n,a,o,s,g,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.hiddenUpdates=xu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function bh(e,t,n,a,o,s,g,S,T,O,G,Q){return e=new W0(e,t,n,g,T,O,G,Q,S),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},io(s),e}function vh(e){return e?(e=Il,e):Il}function Sh(e,t,n,a,o,s){o=vh(o),a.context===null?a.context=o:a.pendingContext=o,a=Gn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Vn(e,a,t),n!==null&&(At(n,e,t),Qa(n,e,t))}function kh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){kh(e,t),(e=e.alternate)&&kh(e,t)}function wh(e){if(e.tag===13||e.tag===31){var t=pl(e,67108864);t!==null&&At(t,e,67108864),Es(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var t=Ht();t=yu(t);var n=pl(e,t);n!==null&&At(n,e,t),Es(e,t)}}var Ir=!0;function P0(e,t,n,a){var o=A.T;A.T=null;var s=Z.p;try{Z.p=2,Cs(e,t,n,a)}finally{Z.p=s,A.T=o}}function ex(e,t,n,a){var o=A.T;A.T=null;var s=Z.p;try{Z.p=8,Cs(e,t,n,a)}finally{Z.p=s,A.T=o}}function Cs(e,t,n,a){if(Ir){var o=Ts(a);if(o===null)fs(e,t,a,Qr,n),Th(e,a);else if(nx(o,e,t,n,a))a.stopPropagation();else if(Th(e,a),t&4&&-1<tx.indexOf(e)){for(;o!==null;){var s=Ol(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var g=ul(s.pendingLanes);if(g!==0){var S=s;for(S.pendingLanes|=2,S.entangledLanes|=2;g;){var T=1<<31-Ge(g);S.entanglements[1]|=T,g&=~T}sn(s),(_e&6)===0&&(jr=yt()+500,oi(0))}}break;case 31:case 13:S=pl(s,2),S!==null&&At(S,s,2),Mr(),Es(s,2)}if(s=Ts(a),s===null&&fs(e,t,a,Qr,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else fs(e,t,a,null,n)}}function Ts(e){return e=zu(e),zs(e)}var Qr=null;function zs(e){if(Qr=null,e=_l(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qr=e,null}function Ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gu()){case V:return 2;case ee:return 8;case he:case we:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var js=!1,el=null,tl=null,nl=null,mi=new Map,gi=new Map,ll=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Th(e,t){switch(e){case"focusin":case"focusout":el=null;break;case"dragenter":case"dragleave":tl=null;break;case"mouseover":case"mouseout":nl=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function xi(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Ol(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nx(e,t,n,a,o){switch(t){case"focusin":return el=xi(el,e,t,n,a,o),!0;case"dragenter":return tl=xi(tl,e,t,n,a,o),!0;case"mouseover":return nl=xi(nl,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return mi.set(s,xi(mi.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,gi.set(s,xi(gi.get(s)||null,e,t,n,a,o)),!0}return!1}function zh(e){var t=_l(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,qc(e.priority,function(){Eh(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,qc(e.priority,function(){Eh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ts(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Tu=a,n.target.dispatchEvent(a),Tu=null}else return t=Ol(n),t!==null&&wh(t),e.blockedOn=n,!1;t.shift()}return!0}function jh(e,t,n){Zr(e)&&n.delete(t)}function lx(){js=!1,el!==null&&Zr(el)&&(el=null),tl!==null&&Zr(tl)&&(tl=null),nl!==null&&Zr(nl)&&(nl=null),mi.forEach(jh),gi.forEach(jh)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,lx)))}var Kr=null;function Ah(e){Kr!==e&&(Kr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(zs(a||n)===null)continue;break}var s=Ol(n);s!==null&&(e.splice(t,3),t-=3,To(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function ma(e){function t(T){return Fr(T,e)}el!==null&&Fr(el,e),tl!==null&&Fr(tl,e),nl!==null&&Fr(nl,e),mi.forEach(t),gi.forEach(t);for(var n=0;n<ll.length;n++){var a=ll[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ll.length&&(n=ll[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&ll.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],g=o[wt]||null;if(typeof s=="function")g||Ah(n);else if(g){var S=null;if(s&&s.hasAttribute("formAction")){if(o=s,g=s[wt]||null)S=g.formAction;else if(zs(o)!==null)continue}else S=g.action;typeof S=="function"?n[a+1]=S:(n.splice(a,3),a-=3),Ah(n)}}}function Mh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(g){return o=g})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function As(e){this._internalRoot=e}Jr.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ht();Sh(n,a,e,t,null,null)},Jr.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sh(e.current,2,null,e,null,null),Mr(),t[Nl]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ll.length&&t!==0&&t<ll[n].priority;n++);ll.splice(n,0,e),n===0&&zh(e)}};var Dh=i.version;if(Dh!=="19.2.3")throw Error(u(527,Dh,"19.2.3"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var ax={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{bt=$r.inject(ax),it=$r}catch{}}return bi.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,a="",o=Up,s=Hp,g=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=bh(e,1,!1,null,null,n,a,null,o,s,g,Mh),e[Nl]=t.current,cs(e),new As(t)},bi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var a=!1,o="",s=Up,g=Hp,S=qp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),t=bh(e,1,!0,t,n??null,a,o,T,s,g,S,Mh),t.context=vh(null),n=t.current,a=Ht(),a=yu(a),o=Gn(a),o.callback=null,Vn(n,o,a),n=a,t.current.lanes=n,ja(t,n),sn(t),e[Nl]=t.current,cs(e),new Jr(t)},bi.version="19.2.3",bi}var Yh;function hx(){if(Yh)return Ns.exports;Yh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Ns.exports=dx(),Ns.exports}var mx=hx();const gx=ou(mx);function xx(){const[l,i]=ge.useState([]),r=ge.useRef(0);return ge.useEffect(()=>{const u=[],c=p=>{const f=r.current+1;r.current=f,i(m=>[...m,{id:f,x:p.clientX,y:p.clientY}].slice(-10));const d=window.setTimeout(()=>{i(m=>m.filter(h=>h.id!==f))},1300);u.push(d)};return window.addEventListener("pointerdown",c,{passive:!0}),()=>{window.removeEventListener("pointerdown",c),u.forEach(p=>window.clearTimeout(p))}},[]),y.jsx("div",{className:"clickRipples","aria-hidden":"true",children:l.map(u=>y.jsxs(ge.Fragment,{children:[y.jsx("span",{className:"rippleDots",style:{left:`${u.x}px`,top:`${u.y}px`}}),y.jsx("span",{className:"ripple rippleA",style:{left:`${u.x}px`,top:`${u.y}px`}}),y.jsx("span",{className:"ripple rippleB",style:{left:`${u.x}px`,top:`${u.y}px`}})]},u.id))})}function yx(l,i){const r={};return(l[l.length-1]===""?[...l,""]:l).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const bx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,vx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Sx={};function Gh(l,i){return(Sx.jsx?vx:bx).test(l)}const kx=/[ \t\n\f\r]/g;function wx(l){return typeof l=="object"?l.type==="text"?Vh(l.value):!1:Vh(l)}function Vh(l){return l.replace(kx,"")===""}class Mi{constructor(i,r,u){this.normal=r,this.property=i,u&&(this.space=u)}}Mi.prototype.normal={};Mi.prototype.property={};Mi.prototype.space=void 0;function Rm(l,i){const r={},u={};for(const c of l)Object.assign(r,c.property),Object.assign(u,c.normal);return new Mi(r,u,i)}function nc(l){return l.toLowerCase()}class Dt{constructor(i,r){this.attribute=r,this.property=i}}Dt.prototype.attribute="";Dt.prototype.booleanish=!1;Dt.prototype.boolean=!1;Dt.prototype.commaOrSpaceSeparated=!1;Dt.prototype.commaSeparated=!1;Dt.prototype.defined=!1;Dt.prototype.mustUseProperty=!1;Dt.prototype.number=!1;Dt.prototype.overloadedBoolean=!1;Dt.prototype.property="";Dt.prototype.spaceSeparated=!1;Dt.prototype.space=void 0;let Ex=0;const ve=zl(),at=zl(),lc=zl(),J=zl(),Qe=zl(),ba=zl(),qt=zl();function zl(){return 2**++Ex}const ac=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:at,commaOrSpaceSeparated:qt,commaSeparated:ba,number:J,overloadedBoolean:lc,spaceSeparated:Qe},Symbol.toStringTag,{value:"Module"})),Rs=Object.keys(ac);class mc extends Dt{constructor(i,r,u,c){let p=-1;if(super(i,r),Xh(this,"space",c),typeof u=="number")for(;++p<Rs.length;){const f=Rs[p];Xh(this,Rs[p],(u&ac[f])===ac[f])}}}mc.prototype.defined=!0;function Xh(l,i,r){r&&(l[i]=r)}function wa(l){const i={},r={};for(const[u,c]of Object.entries(l.properties)){const p=new mc(u,l.transform(l.attributes||{},u),c,l.space);l.mustUseProperty&&l.mustUseProperty.includes(u)&&(p.mustUseProperty=!0),i[u]=p,r[nc(u)]=u,r[nc(p.attribute)]=u}return new Mi(i,r,l.space)}const Bm=wa({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:J,ariaColIndex:J,ariaColSpan:J,ariaControls:Qe,ariaCurrent:null,ariaDescribedBy:Qe,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Qe,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Qe,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qe,ariaLevel:J,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Qe,ariaPlaceholder:null,ariaPosInSet:J,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Qe,ariaRowCount:J,ariaRowIndex:J,ariaRowSpan:J,ariaSelected:at,ariaSetSize:J,ariaSort:null,ariaValueMax:J,ariaValueMin:J,ariaValueNow:J,ariaValueText:null,role:null},transform(l,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function Um(l,i){return i in l?l[i]:i}function Hm(l,i){return Um(l,i.toLowerCase())}const Cx=wa({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ba,acceptCharset:Qe,accessKey:Qe,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Qe,autoFocus:ve,autoPlay:ve,blocking:Qe,capture:null,charSet:null,checked:ve,cite:null,className:Qe,cols:J,colSpan:null,content:null,contentEditable:at,controls:ve,controlsList:Qe,coords:J|ba,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:lc,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Qe,height:J,hidden:lc,high:J,href:null,hrefLang:null,htmlFor:Qe,httpEquiv:Qe,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Qe,itemRef:Qe,itemScope:ve,itemType:Qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:J,manifest:null,max:null,maxLength:J,media:null,method:null,min:null,minLength:J,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:J,pattern:null,ping:Qe,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Qe,required:ve,reversed:ve,rows:J,rowSpan:J,sandbox:Qe,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:J,sizes:null,slot:null,span:J,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:J,step:null,style:null,tabIndex:J,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:at,width:J,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Qe,axis:null,background:null,bgColor:null,border:J,borderColor:null,bottomMargin:J,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:J,leftMargin:J,link:null,longDesc:null,lowSrc:null,marginHeight:J,marginWidth:J,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:J,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:J,valueType:null,version:null,vAlign:null,vLink:null,vSpace:J,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:J,security:null,unselectable:null},space:"html",transform:Hm}),Tx=wa({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qt,accentHeight:J,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:J,amplitude:J,arabicForm:null,ascent:J,attributeName:null,attributeType:null,azimuth:J,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:J,by:null,calcMode:null,capHeight:J,className:Qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:J,diffuseConstant:J,direction:null,display:null,dur:null,divisor:J,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:J,enableBackground:null,end:null,event:null,exponent:J,externalResourcesRequired:null,fill:null,fillOpacity:J,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ba,g2:ba,glyphName:ba,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:J,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:J,horizOriginX:J,horizOriginY:J,id:null,ideographic:J,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:J,k:J,k1:J,k2:J,k3:J,k4:J,kernelMatrix:qt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:J,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:J,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:J,overlineThickness:J,paintOrder:null,panose1:null,path:null,pathLength:J,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:J,pointsAtY:J,pointsAtZ:J,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qt,rev:qt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qt,requiredFeatures:qt,requiredFonts:qt,requiredFormats:qt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:J,specularExponent:J,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:J,strikethroughThickness:J,string:null,stroke:null,strokeDashArray:qt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:J,strokeOpacity:J,strokeWidth:null,style:null,surfaceScale:J,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qt,tabIndex:J,tableValues:null,target:null,targetX:J,targetY:J,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:J,underlineThickness:J,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:J,values:null,vAlphabetic:J,vMathematical:J,vectorEffect:null,vHanging:J,vIdeographic:J,version:null,vertAdvY:J,vertOriginX:J,vertOriginY:J,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:J,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Um}),qm=wa({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(l,i){return"xlink:"+i.slice(5).toLowerCase()}}),Ym=wa({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Hm}),Gm=wa({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(l,i){return"xml:"+i.slice(3).toLowerCase()}}),zx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},jx=/[A-Z]/g,Ih=/-[a-z]/g,Ax=/^data[-\w.:]+$/i;function Mx(l,i){const r=nc(i);let u=i,c=Dt;if(r in l.normal)return l.property[l.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Ax.test(i)){if(i.charAt(4)==="-"){const p=i.slice(5).replace(Ih,Nx);u="data"+p.charAt(0).toUpperCase()+p.slice(1)}else{const p=i.slice(4);if(!Ih.test(p)){let f=p.replace(jx,Dx);f.charAt(0)!=="-"&&(f="-"+f),i="data"+f}}c=mc}return new c(u,i)}function Dx(l){return"-"+l.toLowerCase()}function Nx(l){return l.charAt(1).toUpperCase()}const _x=Rm([Bm,Cx,qm,Ym,Gm],"html"),gc=Rm([Bm,Tx,qm,Ym,Gm],"svg");function Ox(l){return l.join(" ").trim()}var ga={},Bs,Qh;function Lx(){if(Qh)return Bs;Qh=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,d=/^\s+|\s+$/g,m=`
`,h="/",b="*",x="",v="comment",k="declaration";function z(I,D){if(typeof I!="string")throw new TypeError("First argument must be a string");if(!I)return[];D=D||{};var F=1,H=1;function ae(oe){var P=oe.match(i);P&&(F+=P.length);var A=oe.lastIndexOf(m);H=~A?oe.length-A:H+oe.length}function le(){var oe={line:F,column:H};return function(P){return P.position=new B(oe),ie(),P}}function B(oe){this.start=oe,this.end={line:F,column:H},this.source=D.source}B.prototype.content=I;function _(oe){var P=new Error(D.source+":"+F+":"+H+": "+oe);if(P.reason=oe,P.filename=D.source,P.line=F,P.column=H,P.source=I,!D.silent)throw P}function K(oe){var P=oe.exec(I);if(P){var A=P[0];return ae(A),I=I.slice(A.length),P}}function ie(){K(r)}function L(oe){var P;for(oe=oe||[];P=W();)P!==!1&&oe.push(P);return oe}function W(){var oe=le();if(!(h!=I.charAt(0)||b!=I.charAt(1))){for(var P=2;x!=I.charAt(P)&&(b!=I.charAt(P)||h!=I.charAt(P+1));)++P;if(P+=2,x===I.charAt(P-1))return _("End of comment missing");var A=I.slice(2,P-2);return H+=2,ae(A),I=I.slice(P),H+=2,oe({type:v,comment:A})}}function te(){var oe=le(),P=K(u);if(P){if(W(),!K(c))return _("property missing ':'");var A=K(p),Z=oe({type:k,property:q(P[0].replace(l,x)),value:A?q(A[0].replace(l,x)):x});return K(f),Z}}function Se(){var oe=[];L(oe);for(var P;P=te();)P!==!1&&(oe.push(P),L(oe));return oe}return ie(),Se()}function q(I){return I?I.replace(d,x):x}return Bs=z,Bs}var Zh;function Rx(){if(Zh)return ga;Zh=1;var l=ga&&ga.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=r;const i=l(Lx());function r(u,c){let p=null;if(!u||typeof u!="string")return p;const f=(0,i.default)(u),d=typeof c=="function";return f.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:b}=m;d?c(h,b,m):b&&(p=p||{},p[h]=b)}),p}return ga}var vi={},Fh;function Bx(){if(Fh)return vi;Fh=1,Object.defineProperty(vi,"__esModule",{value:!0}),vi.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,p=function(h){return!h||r.test(h)||l.test(h)},f=function(h,b){return b.toUpperCase()},d=function(h,b){return"".concat(b,"-")},m=function(h,b){return b===void 0&&(b={}),p(h)?h:(h=h.toLowerCase(),b.reactCompat?h=h.replace(c,d):h=h.replace(u,d),h.replace(i,f))};return vi.camelCase=m,vi}var Si,Kh;function Ux(){if(Kh)return Si;Kh=1;var l=Si&&Si.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},i=l(Rx()),r=Bx();function u(c,p){var f={};return!c||typeof c!="string"||(0,i.default)(c,function(d,m){d&&m&&(f[(0,r.camelCase)(d,p)]=m)}),f}return u.default=u,Si=u,Si}var Hx=Ux();const qx=ou(Hx),Vm=Xm("end"),xc=Xm("start");function Xm(l){return i;function i(r){const u=r&&r.position&&r.position[l]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Yx(l){const i=xc(l),r=Vm(l);if(i&&r)return{start:i,end:r}}function Ci(l){return!l||typeof l!="object"?"":"position"in l||"type"in l?Jh(l.position):"start"in l||"end"in l?Jh(l):"line"in l||"column"in l?ic(l):""}function ic(l){return $h(l&&l.line)+":"+$h(l&&l.column)}function Jh(l){return ic(l&&l.start)+"-"+ic(l&&l.end)}function $h(l){return l&&typeof l=="number"?l:1}class xt extends Error{constructor(i,r,u){super(),typeof r=="string"&&(u=r,r=void 0);let c="",p={},f=!1;if(r&&("line"in r&&"column"in r?p={place:r}:"start"in r&&"end"in r?p={place:r}:"type"in r?p={ancestors:[r],place:r.position}:p={...r}),typeof i=="string"?c=i:!p.cause&&i&&(f=!0,c=i.message,p.cause=i),!p.ruleId&&!p.source&&typeof u=="string"){const m=u.indexOf(":");m===-1?p.ruleId=u:(p.source=u.slice(0,m),p.ruleId=u.slice(m+1))}if(!p.place&&p.ancestors&&p.ancestors){const m=p.ancestors[p.ancestors.length-1];m&&(p.place=m.position)}const d=p.place&&"start"in p.place?p.place.start:p.place;this.ancestors=p.ancestors||void 0,this.cause=p.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=d?d.line:void 0,this.name=Ci(p.place)||"1:1",this.place=p.place||void 0,this.reason=this.message,this.ruleId=p.ruleId||void 0,this.source=p.source||void 0,this.stack=f&&p.cause&&typeof p.cause.stack=="string"?p.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xt.prototype.file="";xt.prototype.name="";xt.prototype.reason="";xt.prototype.message="";xt.prototype.stack="";xt.prototype.column=void 0;xt.prototype.line=void 0;xt.prototype.ancestors=void 0;xt.prototype.cause=void 0;xt.prototype.fatal=void 0;xt.prototype.place=void 0;xt.prototype.ruleId=void 0;xt.prototype.source=void 0;const yc={}.hasOwnProperty,Gx=new Map,Vx=/[A-Z]/g,Xx=new Set(["table","tbody","thead","tfoot","tr"]),Ix=new Set(["td","th"]),Im="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Qx(l,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let u;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=ey(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=Px(r,i.jsx,i.jsxs)}const c={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:u,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?gc:_x,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},p=Qm(c,l,void 0);return p&&typeof p!="string"?p:c.create(l,c.Fragment,{children:p||void 0},void 0)}function Qm(l,i,r){if(i.type==="element")return Zx(l,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return Fx(l,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return Jx(l,i,r);if(i.type==="mdxjsEsm")return Kx(l,i);if(i.type==="root")return $x(l,i,r);if(i.type==="text")return Wx(l,i)}function Zx(l,i,r){const u=l.schema;let c=u;i.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=gc,l.schema=c),l.ancestors.push(i);const p=Fm(l,i.tagName,!1),f=ty(l,i);let d=vc(l,i);return Xx.has(i.tagName)&&(d=d.filter(function(m){return typeof m=="string"?!wx(m):!0})),Zm(l,f,p,i),bc(f,d),l.ancestors.pop(),l.schema=u,l.create(i,p,f,r)}function Fx(l,i){if(i.data&&i.data.estree&&l.evaluater){const u=i.data.estree.body[0];return u.type,l.evaluater.evaluateExpression(u.expression)}ji(l,i.position)}function Kx(l,i){if(i.data&&i.data.estree&&l.evaluater)return l.evaluater.evaluateProgram(i.data.estree);ji(l,i.position)}function Jx(l,i,r){const u=l.schema;let c=u;i.name==="svg"&&u.space==="html"&&(c=gc,l.schema=c),l.ancestors.push(i);const p=i.name===null?l.Fragment:Fm(l,i.name,!0),f=ny(l,i),d=vc(l,i);return Zm(l,f,p,i),bc(f,d),l.ancestors.pop(),l.schema=u,l.create(i,p,f,r)}function $x(l,i,r){const u={};return bc(u,vc(l,i)),l.create(i,l.Fragment,u,r)}function Wx(l,i){return i.value}function Zm(l,i,r,u){typeof r!="string"&&r!==l.Fragment&&l.passNode&&(i.node=u)}function bc(l,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(l.children=r)}}function Px(l,i,r){return u;function u(c,p,f,d){const h=Array.isArray(f.children)?r:i;return d?h(p,f,d):h(p,f)}}function ey(l,i){return r;function r(u,c,p,f){const d=Array.isArray(p.children),m=xc(u);return i(c,p,f,d,{columnNumber:m?m.column-1:void 0,fileName:l,lineNumber:m?m.line:void 0},void 0)}}function ty(l,i){const r={};let u,c;for(c in i.properties)if(c!=="children"&&yc.call(i.properties,c)){const p=ly(l,c,i.properties[c]);if(p){const[f,d]=p;l.tableCellAlignToStyle&&f==="align"&&typeof d=="string"&&Ix.has(i.tagName)?u=d:r[f]=d}}if(u){const p=r.style||(r.style={});p[l.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return r}function ny(l,i){const r={};for(const u of i.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&l.evaluater){const p=u.data.estree.body[0];p.type;const f=p.expression;f.type;const d=f.properties[0];d.type,Object.assign(r,l.evaluater.evaluateExpression(d.argument))}else ji(l,i.position);else{const c=u.name;let p;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&l.evaluater){const d=u.value.data.estree.body[0];d.type,p=l.evaluater.evaluateExpression(d.expression)}else ji(l,i.position);else p=u.value===null?!0:u.value;r[c]=p}return r}function vc(l,i){const r=[];let u=-1;const c=l.passKeys?new Map:Gx;for(;++u<i.children.length;){const p=i.children[u];let f;if(l.passKeys){const m=p.type==="element"?p.tagName:p.type==="mdxJsxFlowElement"||p.type==="mdxJsxTextElement"?p.name:void 0;if(m){const h=c.get(m)||0;f=m+"-"+h,c.set(m,h+1)}}const d=Qm(l,p,f);d!==void 0&&r.push(d)}return r}function ly(l,i,r){const u=Mx(l.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=u.commaSeparated?yx(r):Ox(r)),u.property==="style"){let c=typeof r=="object"?r:ay(l,String(r));return l.stylePropertyNameCase==="css"&&(c=iy(c)),["style",c]}return[l.elementAttributeNameCase==="react"&&u.space?zx[u.property]||u.property:u.attribute,r]}}function ay(l,i){try{return qx(i,{reactCompat:!0})}catch(r){if(l.ignoreInvalidStyle)return{};const u=r,c=new xt("Cannot parse `style` attribute",{ancestors:l.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=l.filePath||void 0,c.url=Im+"#cannot-parse-style-attribute",c}}function Fm(l,i,r){let u;if(!r)u={type:"Literal",value:i};else if(i.includes(".")){const c=i.split(".");let p=-1,f;for(;++p<c.length;){const d=Gh(c[p])?{type:"Identifier",name:c[p]}:{type:"Literal",value:c[p]};f=f?{type:"MemberExpression",object:f,property:d,computed:!!(p&&d.type==="Literal"),optional:!1}:d}u=f}else u=Gh(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(u.type==="Literal"){const c=u.value;return yc.call(l.components,c)?l.components[c]:c}if(l.evaluater)return l.evaluater.evaluateExpression(u);ji(l)}function ji(l,i){const r=new xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:l.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=l.filePath||void 0,r.url=Im+"#cannot-handle-mdx-estrees-without-createevaluater",r}function iy(l){const i={};let r;for(r in l)yc.call(l,r)&&(i[ry(r)]=l[r]);return i}function ry(l){let i=l.replace(Vx,uy);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function uy(l){return"-"+l.toLowerCase()}const Us={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},oy={};function Sc(l,i){const r=oy,u=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,c=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Km(l,u,c)}function Km(l,i,r){if(sy(l)){if("value"in l)return l.type==="html"&&!r?"":l.value;if(i&&"alt"in l&&l.alt)return l.alt;if("children"in l)return Wh(l.children,i,r)}return Array.isArray(l)?Wh(l,i,r):""}function Wh(l,i,r){const u=[];let c=-1;for(;++c<l.length;)u[c]=Km(l[c],i,r);return u.join("")}function sy(l){return!!(l&&typeof l=="object")}const Ph=document.createElement("i");function kc(l){const i="&"+l+";";Ph.innerHTML=i;const r=Ph.textContent;return r.charCodeAt(r.length-1)===59&&l!=="semi"||r===i?!1:r}function Yt(l,i,r,u){const c=l.length;let p=0,f;if(i<0?i=-i>c?0:c+i:i=i>c?c:i,r=r>0?r:0,u.length<1e4)f=Array.from(u),f.unshift(i,r),l.splice(...f);else for(r&&l.splice(i,r);p<u.length;)f=u.slice(p,p+1e4),f.unshift(i,0),l.splice(...f),p+=1e4,i+=1e4}function Pt(l,i){return l.length>0?(Yt(l,l.length,0,i),l):i}const em={}.hasOwnProperty;function Jm(l){const i={};let r=-1;for(;++r<l.length;)cy(i,l[r]);return i}function cy(l,i){let r;for(r in i){const c=(em.call(l,r)?l[r]:void 0)||(l[r]={}),p=i[r];let f;if(p)for(f in p){em.call(c,f)||(c[f]=[]);const d=p[f];fy(c[f],Array.isArray(d)?d:d?[d]:[])}}}function fy(l,i){let r=-1;const u=[];for(;++r<i.length;)(i[r].add==="after"?l:u).push(i[r]);Yt(l,0,0,u)}function $m(l,i){const r=Number.parseInt(l,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function an(l){return l.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=rl(/[A-Za-z]/),gt=rl(/[\dA-Za-z]/),py=rl(/[#-'*+\--9=?A-Z^-~]/);function au(l){return l!==null&&(l<32||l===127)}const rc=rl(/\d/),dy=rl(/[\dA-Fa-f]/),hy=rl(/[!-/:-@[-`{-~]/);function pe(l){return l!==null&&l<-2}function Ie(l){return l!==null&&(l<0||l===32)}function Te(l){return l===-2||l===-1||l===32}const su=rl(new RegExp("\\p{P}|\\p{S}","u")),Tl=rl(/\s/);function rl(l){return i;function i(r){return r!==null&&r>-1&&l.test(String.fromCharCode(r))}}function Ea(l){const i=[];let r=-1,u=0,c=0;for(;++r<l.length;){const p=l.charCodeAt(r);let f="";if(p===37&&gt(l.charCodeAt(r+1))&&gt(l.charCodeAt(r+2)))c=2;else if(p<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(p))||(f=String.fromCharCode(p));else if(p>55295&&p<57344){const d=l.charCodeAt(r+1);p<56320&&d>56319&&d<57344?(f=String.fromCharCode(p,d),c=1):f="�"}else f=String.fromCharCode(p);f&&(i.push(l.slice(u,r),encodeURIComponent(f)),u=r+c+1,f=""),c&&(r+=c,c=0)}return i.join("")+l.slice(u)}function Me(l,i,r,u){const c=u?u-1:Number.POSITIVE_INFINITY;let p=0;return f;function f(m){return Te(m)?(l.enter(r),d(m)):i(m)}function d(m){return Te(m)&&p++<c?(l.consume(m),d):(l.exit(r),i(m))}}const my={tokenize:gy};function gy(l){const i=l.attempt(this.parser.constructs.contentInitial,u,c);let r;return i;function u(d){if(d===null){l.consume(d);return}return l.enter("lineEnding"),l.consume(d),l.exit("lineEnding"),Me(l,i,"linePrefix")}function c(d){return l.enter("paragraph"),p(d)}function p(d){const m=l.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=m),r=m,f(d)}function f(d){if(d===null){l.exit("chunkText"),l.exit("paragraph"),l.consume(d);return}return pe(d)?(l.consume(d),l.exit("chunkText"),p):(l.consume(d),f)}}const xy={tokenize:yy},tm={tokenize:by};function yy(l){const i=this,r=[];let u=0,c,p,f;return d;function d(H){if(u<r.length){const ae=r[u];return i.containerState=ae[1],l.attempt(ae[0].continuation,m,h)(H)}return h(H)}function m(H){if(u++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,c&&F();const ae=i.events.length;let le=ae,B;for(;le--;)if(i.events[le][0]==="exit"&&i.events[le][1].type==="chunkFlow"){B=i.events[le][1].end;break}D(u);let _=ae;for(;_<i.events.length;)i.events[_][1].end={...B},_++;return Yt(i.events,le+1,0,i.events.slice(ae)),i.events.length=_,h(H)}return d(H)}function h(H){if(u===r.length){if(!c)return v(H);if(c.currentConstruct&&c.currentConstruct.concrete)return z(H);i.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return i.containerState={},l.check(tm,b,x)(H)}function b(H){return c&&F(),D(u),v(H)}function x(H){return i.parser.lazy[i.now().line]=u!==r.length,f=i.now().offset,z(H)}function v(H){return i.containerState={},l.attempt(tm,k,z)(H)}function k(H){return u++,r.push([i.currentConstruct,i.containerState]),v(H)}function z(H){if(H===null){c&&F(),D(0),l.consume(H);return}return c=c||i.parser.flow(i.now()),l.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:p}),q(H)}function q(H){if(H===null){I(l.exit("chunkFlow"),!0),D(0),l.consume(H);return}return pe(H)?(l.consume(H),I(l.exit("chunkFlow")),u=0,i.interrupt=void 0,d):(l.consume(H),q)}function I(H,ae){const le=i.sliceStream(H);if(ae&&le.push(null),H.previous=p,p&&(p.next=H),p=H,c.defineSkip(H.start),c.write(le),i.parser.lazy[H.start.line]){let B=c.events.length;for(;B--;)if(c.events[B][1].start.offset<f&&(!c.events[B][1].end||c.events[B][1].end.offset>f))return;const _=i.events.length;let K=_,ie,L;for(;K--;)if(i.events[K][0]==="exit"&&i.events[K][1].type==="chunkFlow"){if(ie){L=i.events[K][1].end;break}ie=!0}for(D(u),B=_;B<i.events.length;)i.events[B][1].end={...L},B++;Yt(i.events,K+1,0,i.events.slice(_)),i.events.length=B}}function D(H){let ae=r.length;for(;ae-- >H;){const le=r[ae];i.containerState=le[1],le[0].exit.call(i,l)}r.length=H}function F(){c.write([null]),p=void 0,c=void 0,i.containerState._closeFlow=void 0}}function by(l,i,r){return Me(l,l.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ka(l){if(l===null||Ie(l)||Tl(l))return 1;if(su(l))return 2}function cu(l,i,r){const u=[];let c=-1;for(;++c<l.length;){const p=l[c].resolveAll;p&&!u.includes(p)&&(i=p(i,r),u.push(p))}return i}const uc={name:"attention",resolveAll:vy,tokenize:Sy};function vy(l,i){let r=-1,u,c,p,f,d,m,h,b;for(;++r<l.length;)if(l[r][0]==="enter"&&l[r][1].type==="attentionSequence"&&l[r][1]._close){for(u=r;u--;)if(l[u][0]==="exit"&&l[u][1].type==="attentionSequence"&&l[u][1]._open&&i.sliceSerialize(l[u][1]).charCodeAt(0)===i.sliceSerialize(l[r][1]).charCodeAt(0)){if((l[u][1]._close||l[r][1]._open)&&(l[r][1].end.offset-l[r][1].start.offset)%3&&!((l[u][1].end.offset-l[u][1].start.offset+l[r][1].end.offset-l[r][1].start.offset)%3))continue;m=l[u][1].end.offset-l[u][1].start.offset>1&&l[r][1].end.offset-l[r][1].start.offset>1?2:1;const x={...l[u][1].end},v={...l[r][1].start};nm(x,-m),nm(v,m),f={type:m>1?"strongSequence":"emphasisSequence",start:x,end:{...l[u][1].end}},d={type:m>1?"strongSequence":"emphasisSequence",start:{...l[r][1].start},end:v},p={type:m>1?"strongText":"emphasisText",start:{...l[u][1].end},end:{...l[r][1].start}},c={type:m>1?"strong":"emphasis",start:{...f.start},end:{...d.end}},l[u][1].end={...f.start},l[r][1].start={...d.end},h=[],l[u][1].end.offset-l[u][1].start.offset&&(h=Pt(h,[["enter",l[u][1],i],["exit",l[u][1],i]])),h=Pt(h,[["enter",c,i],["enter",f,i],["exit",f,i],["enter",p,i]]),h=Pt(h,cu(i.parser.constructs.insideSpan.null,l.slice(u+1,r),i)),h=Pt(h,[["exit",p,i],["enter",d,i],["exit",d,i],["exit",c,i]]),l[r][1].end.offset-l[r][1].start.offset?(b=2,h=Pt(h,[["enter",l[r][1],i],["exit",l[r][1],i]])):b=0,Yt(l,u-1,r-u+3,h),r=u+h.length-b-2;break}}for(r=-1;++r<l.length;)l[r][1].type==="attentionSequence"&&(l[r][1].type="data");return l}function Sy(l,i){const r=this.parser.constructs.attentionMarkers.null,u=this.previous,c=ka(u);let p;return f;function f(m){return p=m,l.enter("attentionSequence"),d(m)}function d(m){if(m===p)return l.consume(m),d;const h=l.exit("attentionSequence"),b=ka(m),x=!b||b===2&&c||r.includes(m),v=!c||c===2&&b||r.includes(u);return h._open=!!(p===42?x:x&&(c||!v)),h._close=!!(p===42?v:v&&(b||!x)),i(m)}}function nm(l,i){l.column+=i,l.offset+=i,l._bufferIndex+=i}const ky={name:"autolink",tokenize:wy};function wy(l,i,r){let u=0;return c;function c(k){return l.enter("autolink"),l.enter("autolinkMarker"),l.consume(k),l.exit("autolinkMarker"),l.enter("autolinkProtocol"),p}function p(k){return St(k)?(l.consume(k),f):k===64?r(k):h(k)}function f(k){return k===43||k===45||k===46||gt(k)?(u=1,d(k)):h(k)}function d(k){return k===58?(l.consume(k),u=0,m):(k===43||k===45||k===46||gt(k))&&u++<32?(l.consume(k),d):(u=0,h(k))}function m(k){return k===62?(l.exit("autolinkProtocol"),l.enter("autolinkMarker"),l.consume(k),l.exit("autolinkMarker"),l.exit("autolink"),i):k===null||k===32||k===60||au(k)?r(k):(l.consume(k),m)}function h(k){return k===64?(l.consume(k),b):py(k)?(l.consume(k),h):r(k)}function b(k){return gt(k)?x(k):r(k)}function x(k){return k===46?(l.consume(k),u=0,b):k===62?(l.exit("autolinkProtocol").type="autolinkEmail",l.enter("autolinkMarker"),l.consume(k),l.exit("autolinkMarker"),l.exit("autolink"),i):v(k)}function v(k){if((k===45||gt(k))&&u++<63){const z=k===45?v:x;return l.consume(k),z}return r(k)}}const Di={partial:!0,tokenize:Ey};function Ey(l,i,r){return u;function u(p){return Te(p)?Me(l,c,"linePrefix")(p):c(p)}function c(p){return p===null||pe(p)?i(p):r(p)}}const Wm={continuation:{tokenize:Ty},exit:zy,name:"blockQuote",tokenize:Cy};function Cy(l,i,r){const u=this;return c;function c(f){if(f===62){const d=u.containerState;return d.open||(l.enter("blockQuote",{_container:!0}),d.open=!0),l.enter("blockQuotePrefix"),l.enter("blockQuoteMarker"),l.consume(f),l.exit("blockQuoteMarker"),p}return r(f)}function p(f){return Te(f)?(l.enter("blockQuotePrefixWhitespace"),l.consume(f),l.exit("blockQuotePrefixWhitespace"),l.exit("blockQuotePrefix"),i):(l.exit("blockQuotePrefix"),i(f))}}function Ty(l,i,r){const u=this;return c;function c(f){return Te(f)?Me(l,p,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):p(f)}function p(f){return l.attempt(Wm,i,r)(f)}}function zy(l){l.exit("blockQuote")}const Pm={name:"characterEscape",tokenize:jy};function jy(l,i,r){return u;function u(p){return l.enter("characterEscape"),l.enter("escapeMarker"),l.consume(p),l.exit("escapeMarker"),c}function c(p){return hy(p)?(l.enter("characterEscapeValue"),l.consume(p),l.exit("characterEscapeValue"),l.exit("characterEscape"),i):r(p)}}const eg={name:"characterReference",tokenize:Ay};function Ay(l,i,r){const u=this;let c=0,p,f;return d;function d(x){return l.enter("characterReference"),l.enter("characterReferenceMarker"),l.consume(x),l.exit("characterReferenceMarker"),m}function m(x){return x===35?(l.enter("characterReferenceMarkerNumeric"),l.consume(x),l.exit("characterReferenceMarkerNumeric"),h):(l.enter("characterReferenceValue"),p=31,f=gt,b(x))}function h(x){return x===88||x===120?(l.enter("characterReferenceMarkerHexadecimal"),l.consume(x),l.exit("characterReferenceMarkerHexadecimal"),l.enter("characterReferenceValue"),p=6,f=dy,b):(l.enter("characterReferenceValue"),p=7,f=rc,b(x))}function b(x){if(x===59&&c){const v=l.exit("characterReferenceValue");return f===gt&&!kc(u.sliceSerialize(v))?r(x):(l.enter("characterReferenceMarker"),l.consume(x),l.exit("characterReferenceMarker"),l.exit("characterReference"),i)}return f(x)&&c++<p?(l.consume(x),b):r(x)}}const lm={partial:!0,tokenize:Dy},am={concrete:!0,name:"codeFenced",tokenize:My};function My(l,i,r){const u=this,c={partial:!0,tokenize:le};let p=0,f=0,d;return m;function m(B){return h(B)}function h(B){const _=u.events[u.events.length-1];return p=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,d=B,l.enter("codeFenced"),l.enter("codeFencedFence"),l.enter("codeFencedFenceSequence"),b(B)}function b(B){return B===d?(f++,l.consume(B),b):f<3?r(B):(l.exit("codeFencedFenceSequence"),Te(B)?Me(l,x,"whitespace")(B):x(B))}function x(B){return B===null||pe(B)?(l.exit("codeFencedFence"),u.interrupt?i(B):l.check(lm,q,ae)(B)):(l.enter("codeFencedFenceInfo"),l.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===null||pe(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),x(B)):Te(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),Me(l,k,"whitespace")(B)):B===96&&B===d?r(B):(l.consume(B),v)}function k(B){return B===null||pe(B)?x(B):(l.enter("codeFencedFenceMeta"),l.enter("chunkString",{contentType:"string"}),z(B))}function z(B){return B===null||pe(B)?(l.exit("chunkString"),l.exit("codeFencedFenceMeta"),x(B)):B===96&&B===d?r(B):(l.consume(B),z)}function q(B){return l.attempt(c,ae,I)(B)}function I(B){return l.enter("lineEnding"),l.consume(B),l.exit("lineEnding"),D}function D(B){return p>0&&Te(B)?Me(l,F,"linePrefix",p+1)(B):F(B)}function F(B){return B===null||pe(B)?l.check(lm,q,ae)(B):(l.enter("codeFlowValue"),H(B))}function H(B){return B===null||pe(B)?(l.exit("codeFlowValue"),F(B)):(l.consume(B),H)}function ae(B){return l.exit("codeFenced"),i(B)}function le(B,_,K){let ie=0;return L;function L(P){return B.enter("lineEnding"),B.consume(P),B.exit("lineEnding"),W}function W(P){return B.enter("codeFencedFence"),Te(P)?Me(B,te,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):te(P)}function te(P){return P===d?(B.enter("codeFencedFenceSequence"),Se(P)):K(P)}function Se(P){return P===d?(ie++,B.consume(P),Se):ie>=f?(B.exit("codeFencedFenceSequence"),Te(P)?Me(B,oe,"whitespace")(P):oe(P)):K(P)}function oe(P){return P===null||pe(P)?(B.exit("codeFencedFence"),_(P)):K(P)}}}function Dy(l,i,r){const u=this;return c;function c(f){return f===null?r(f):(l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),p)}function p(f){return u.parser.lazy[u.now().line]?r(f):i(f)}}const Hs={name:"codeIndented",tokenize:_y},Ny={partial:!0,tokenize:Oy};function _y(l,i,r){const u=this;return c;function c(h){return l.enter("codeIndented"),Me(l,p,"linePrefix",5)(h)}function p(h){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(h):r(h)}function f(h){return h===null?m(h):pe(h)?l.attempt(Ny,f,m)(h):(l.enter("codeFlowValue"),d(h))}function d(h){return h===null||pe(h)?(l.exit("codeFlowValue"),f(h)):(l.consume(h),d)}function m(h){return l.exit("codeIndented"),i(h)}}function Oy(l,i,r){const u=this;return c;function c(f){return u.parser.lazy[u.now().line]?r(f):pe(f)?(l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),c):Me(l,p,"linePrefix",5)(f)}function p(f){const d=u.events[u.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(f):pe(f)?c(f):r(f)}}const Ly={name:"codeText",previous:By,resolve:Ry,tokenize:Uy};function Ry(l){let i=l.length-4,r=3,u,c;if((l[r][1].type==="lineEnding"||l[r][1].type==="space")&&(l[i][1].type==="lineEnding"||l[i][1].type==="space")){for(u=r;++u<i;)if(l[u][1].type==="codeTextData"){l[r][1].type="codeTextPadding",l[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(u=r-1,i++;++u<=i;)c===void 0?u!==i&&l[u][1].type!=="lineEnding"&&(c=u):(u===i||l[u][1].type==="lineEnding")&&(l[c][1].type="codeTextData",u!==c+2&&(l[c][1].end=l[u-1][1].end,l.splice(c+2,u-c-2),i-=u-c-2,u=c+2),c=void 0);return l}function By(l){return l!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Uy(l,i,r){let u=0,c,p;return f;function f(x){return l.enter("codeText"),l.enter("codeTextSequence"),d(x)}function d(x){return x===96?(l.consume(x),u++,d):(l.exit("codeTextSequence"),m(x))}function m(x){return x===null?r(x):x===32?(l.enter("space"),l.consume(x),l.exit("space"),m):x===96?(p=l.enter("codeTextSequence"),c=0,b(x)):pe(x)?(l.enter("lineEnding"),l.consume(x),l.exit("lineEnding"),m):(l.enter("codeTextData"),h(x))}function h(x){return x===null||x===32||x===96||pe(x)?(l.exit("codeTextData"),m(x)):(l.consume(x),h)}function b(x){return x===96?(l.consume(x),c++,b):c===u?(l.exit("codeTextSequence"),l.exit("codeText"),i(x)):(p.type="codeTextData",h(x))}}class Hy{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const u=r??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(i,u):i>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(i,r,u){const c=r||0;this.setCursor(Math.trunc(i));const p=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&ki(this.left,u),p.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),ki(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),ki(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);ki(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);ki(this.left,r.reverse())}}}function ki(l,i){let r=0;if(i.length<1e4)l.push(...i);else for(;r<i.length;)l.push(...i.slice(r,r+1e4)),r+=1e4}function tg(l){const i={};let r=-1,u,c,p,f,d,m,h;const b=new Hy(l);for(;++r<b.length;){for(;r in i;)r=i[r];if(u=b.get(r),r&&u[1].type==="chunkFlow"&&b.get(r-1)[1].type==="listItemPrefix"&&(m=u[1]._tokenizer.events,p=0,p<m.length&&m[p][1].type==="lineEndingBlank"&&(p+=2),p<m.length&&m[p][1].type==="content"))for(;++p<m.length&&m[p][1].type!=="content";)m[p][1].type==="chunkText"&&(m[p][1]._isInFirstContentOfListItem=!0,p++);if(u[0]==="enter")u[1].contentType&&(Object.assign(i,qy(b,r)),r=i[r],h=!0);else if(u[1]._container){for(p=r,c=void 0;p--;)if(f=b.get(p),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(c&&(b.get(c)[1].type="lineEndingBlank"),f[1].type="lineEnding",c=p);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;c&&(u[1].end={...b.get(c)[1].start},d=b.slice(c,r),d.unshift(u),b.splice(c,r-c+1,d))}}return Yt(l,0,Number.POSITIVE_INFINITY,b.slice(0)),!h}function qy(l,i){const r=l.get(i)[1],u=l.get(i)[2];let c=i-1;const p=[];let f=r._tokenizer;f||(f=u.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const d=f.events,m=[],h={};let b,x,v=-1,k=r,z=0,q=0;const I=[q];for(;k;){for(;l.get(++c)[1]!==k;);p.push(c),k._tokenizer||(b=u.sliceStream(k),k.next||b.push(null),x&&f.defineSkip(k.start),k._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),k._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),x=k,k=k.next}for(k=r;++v<d.length;)d[v][0]==="exit"&&d[v-1][0]==="enter"&&d[v][1].type===d[v-1][1].type&&d[v][1].start.line!==d[v][1].end.line&&(q=v+1,I.push(q),k._tokenizer=void 0,k.previous=void 0,k=k.next);for(f.events=[],k?(k._tokenizer=void 0,k.previous=void 0):I.pop(),v=I.length;v--;){const D=d.slice(I[v],I[v+1]),F=p.pop();m.push([F,F+D.length-1]),l.splice(F,2,D)}for(m.reverse(),v=-1;++v<m.length;)h[z+m[v][0]]=z+m[v][1],z+=m[v][1]-m[v][0]-1;return h}const Yy={resolve:Vy,tokenize:Xy},Gy={partial:!0,tokenize:Iy};function Vy(l){return tg(l),l}function Xy(l,i){let r;return u;function u(d){return l.enter("content"),r=l.enter("chunkContent",{contentType:"content"}),c(d)}function c(d){return d===null?p(d):pe(d)?l.check(Gy,f,p)(d):(l.consume(d),c)}function p(d){return l.exit("chunkContent"),l.exit("content"),i(d)}function f(d){return l.consume(d),l.exit("chunkContent"),r.next=l.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,c}}function Iy(l,i,r){const u=this;return c;function c(f){return l.exit("chunkContent"),l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),Me(l,p,"linePrefix")}function p(f){if(f===null||pe(f))return r(f);const d=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(f):l.interrupt(u.parser.constructs.flow,r,i)(f)}}function ng(l,i,r,u,c,p,f,d,m){const h=m||Number.POSITIVE_INFINITY;let b=0;return x;function x(D){return D===60?(l.enter(u),l.enter(c),l.enter(p),l.consume(D),l.exit(p),v):D===null||D===32||D===41||au(D)?r(D):(l.enter(u),l.enter(f),l.enter(d),l.enter("chunkString",{contentType:"string"}),q(D))}function v(D){return D===62?(l.enter(p),l.consume(D),l.exit(p),l.exit(c),l.exit(u),i):(l.enter(d),l.enter("chunkString",{contentType:"string"}),k(D))}function k(D){return D===62?(l.exit("chunkString"),l.exit(d),v(D)):D===null||D===60||pe(D)?r(D):(l.consume(D),D===92?z:k)}function z(D){return D===60||D===62||D===92?(l.consume(D),k):k(D)}function q(D){return!b&&(D===null||D===41||Ie(D))?(l.exit("chunkString"),l.exit(d),l.exit(f),l.exit(u),i(D)):b<h&&D===40?(l.consume(D),b++,q):D===41?(l.consume(D),b--,q):D===null||D===32||D===40||au(D)?r(D):(l.consume(D),D===92?I:q)}function I(D){return D===40||D===41||D===92?(l.consume(D),q):q(D)}}function lg(l,i,r,u,c,p){const f=this;let d=0,m;return h;function h(k){return l.enter(u),l.enter(c),l.consume(k),l.exit(c),l.enter(p),b}function b(k){return d>999||k===null||k===91||k===93&&!m||k===94&&!d&&"_hiddenFootnoteSupport"in f.parser.constructs?r(k):k===93?(l.exit(p),l.enter(c),l.consume(k),l.exit(c),l.exit(u),i):pe(k)?(l.enter("lineEnding"),l.consume(k),l.exit("lineEnding"),b):(l.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||k===91||k===93||pe(k)||d++>999?(l.exit("chunkString"),b(k)):(l.consume(k),m||(m=!Te(k)),k===92?v:x)}function v(k){return k===91||k===92||k===93?(l.consume(k),d++,x):x(k)}}function ag(l,i,r,u,c,p){let f;return d;function d(v){return v===34||v===39||v===40?(l.enter(u),l.enter(c),l.consume(v),l.exit(c),f=v===40?41:v,m):r(v)}function m(v){return v===f?(l.enter(c),l.consume(v),l.exit(c),l.exit(u),i):(l.enter(p),h(v))}function h(v){return v===f?(l.exit(p),m(f)):v===null?r(v):pe(v)?(l.enter("lineEnding"),l.consume(v),l.exit("lineEnding"),Me(l,h,"linePrefix")):(l.enter("chunkString",{contentType:"string"}),b(v))}function b(v){return v===f||v===null||pe(v)?(l.exit("chunkString"),h(v)):(l.consume(v),v===92?x:b)}function x(v){return v===f||v===92?(l.consume(v),b):b(v)}}function Ti(l,i){let r;return u;function u(c){return pe(c)?(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),r=!0,u):Te(c)?Me(l,u,r?"linePrefix":"lineSuffix")(c):i(c)}}const Qy={name:"definition",tokenize:Fy},Zy={partial:!0,tokenize:Ky};function Fy(l,i,r){const u=this;let c;return p;function p(k){return l.enter("definition"),f(k)}function f(k){return lg.call(u,l,d,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(k)}function d(k){return c=an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),k===58?(l.enter("definitionMarker"),l.consume(k),l.exit("definitionMarker"),m):r(k)}function m(k){return Ie(k)?Ti(l,h)(k):h(k)}function h(k){return ng(l,b,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(k)}function b(k){return l.attempt(Zy,x,x)(k)}function x(k){return Te(k)?Me(l,v,"whitespace")(k):v(k)}function v(k){return k===null||pe(k)?(l.exit("definition"),u.parser.defined.push(c),i(k)):r(k)}}function Ky(l,i,r){return u;function u(d){return Ie(d)?Ti(l,c)(d):r(d)}function c(d){return ag(l,p,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function p(d){return Te(d)?Me(l,f,"whitespace")(d):f(d)}function f(d){return d===null||pe(d)?i(d):r(d)}}const Jy={name:"hardBreakEscape",tokenize:$y};function $y(l,i,r){return u;function u(p){return l.enter("hardBreakEscape"),l.consume(p),c}function c(p){return pe(p)?(l.exit("hardBreakEscape"),i(p)):r(p)}}const Wy={name:"headingAtx",resolve:Py,tokenize:eb};function Py(l,i){let r=l.length-2,u=3,c,p;return l[u][1].type==="whitespace"&&(u+=2),r-2>u&&l[r][1].type==="whitespace"&&(r-=2),l[r][1].type==="atxHeadingSequence"&&(u===r-1||r-4>u&&l[r-2][1].type==="whitespace")&&(r-=u+1===r?2:4),r>u&&(c={type:"atxHeadingText",start:l[u][1].start,end:l[r][1].end},p={type:"chunkText",start:l[u][1].start,end:l[r][1].end,contentType:"text"},Yt(l,u,r-u+1,[["enter",c,i],["enter",p,i],["exit",p,i],["exit",c,i]])),l}function eb(l,i,r){let u=0;return c;function c(b){return l.enter("atxHeading"),p(b)}function p(b){return l.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(l.consume(b),f):b===null||Ie(b)?(l.exit("atxHeadingSequence"),d(b)):r(b)}function d(b){return b===35?(l.enter("atxHeadingSequence"),m(b)):b===null||pe(b)?(l.exit("atxHeading"),i(b)):Te(b)?Me(l,d,"whitespace")(b):(l.enter("atxHeadingText"),h(b))}function m(b){return b===35?(l.consume(b),m):(l.exit("atxHeadingSequence"),d(b))}function h(b){return b===null||b===35||Ie(b)?(l.exit("atxHeadingText"),d(b)):(l.consume(b),h)}}const tb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],im=["pre","script","style","textarea"],nb={concrete:!0,name:"htmlFlow",resolveTo:ib,tokenize:rb},lb={partial:!0,tokenize:ob},ab={partial:!0,tokenize:ub};function ib(l){let i=l.length;for(;i--&&!(l[i][0]==="enter"&&l[i][1].type==="htmlFlow"););return i>1&&l[i-2][1].type==="linePrefix"&&(l[i][1].start=l[i-2][1].start,l[i+1][1].start=l[i-2][1].start,l.splice(i-2,2)),l}function rb(l,i,r){const u=this;let c,p,f,d,m;return h;function h(w){return b(w)}function b(w){return l.enter("htmlFlow"),l.enter("htmlFlowData"),l.consume(w),x}function x(w){return w===33?(l.consume(w),v):w===47?(l.consume(w),p=!0,q):w===63?(l.consume(w),c=3,u.interrupt?i:E):St(w)?(l.consume(w),f=String.fromCharCode(w),I):r(w)}function v(w){return w===45?(l.consume(w),c=2,k):w===91?(l.consume(w),c=5,d=0,z):St(w)?(l.consume(w),c=4,u.interrupt?i:E):r(w)}function k(w){return w===45?(l.consume(w),u.interrupt?i:E):r(w)}function z(w){const $="CDATA[";return w===$.charCodeAt(d++)?(l.consume(w),d===$.length?u.interrupt?i:te:z):r(w)}function q(w){return St(w)?(l.consume(w),f=String.fromCharCode(w),I):r(w)}function I(w){if(w===null||w===47||w===62||Ie(w)){const $=w===47,re=f.toLowerCase();return!$&&!p&&im.includes(re)?(c=1,u.interrupt?i(w):te(w)):tb.includes(f.toLowerCase())?(c=6,$?(l.consume(w),D):u.interrupt?i(w):te(w)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?r(w):p?F(w):H(w))}return w===45||gt(w)?(l.consume(w),f+=String.fromCharCode(w),I):r(w)}function D(w){return w===62?(l.consume(w),u.interrupt?i:te):r(w)}function F(w){return Te(w)?(l.consume(w),F):L(w)}function H(w){return w===47?(l.consume(w),L):w===58||w===95||St(w)?(l.consume(w),ae):Te(w)?(l.consume(w),H):L(w)}function ae(w){return w===45||w===46||w===58||w===95||gt(w)?(l.consume(w),ae):le(w)}function le(w){return w===61?(l.consume(w),B):Te(w)?(l.consume(w),le):H(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(l.consume(w),m=w,_):Te(w)?(l.consume(w),B):K(w)}function _(w){return w===m?(l.consume(w),m=null,ie):w===null||pe(w)?r(w):(l.consume(w),_)}function K(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Ie(w)?le(w):(l.consume(w),K)}function ie(w){return w===47||w===62||Te(w)?H(w):r(w)}function L(w){return w===62?(l.consume(w),W):r(w)}function W(w){return w===null||pe(w)?te(w):Te(w)?(l.consume(w),W):r(w)}function te(w){return w===45&&c===2?(l.consume(w),A):w===60&&c===1?(l.consume(w),Z):w===62&&c===4?(l.consume(w),C):w===63&&c===3?(l.consume(w),E):w===93&&c===5?(l.consume(w),me):pe(w)&&(c===6||c===7)?(l.exit("htmlFlowData"),l.check(lb,Y,Se)(w)):w===null||pe(w)?(l.exit("htmlFlowData"),Se(w)):(l.consume(w),te)}function Se(w){return l.check(ab,oe,Y)(w)}function oe(w){return l.enter("lineEnding"),l.consume(w),l.exit("lineEnding"),P}function P(w){return w===null||pe(w)?Se(w):(l.enter("htmlFlowData"),te(w))}function A(w){return w===45?(l.consume(w),E):te(w)}function Z(w){return w===47?(l.consume(w),f="",ne):te(w)}function ne(w){if(w===62){const $=f.toLowerCase();return im.includes($)?(l.consume(w),C):te(w)}return St(w)&&f.length<8?(l.consume(w),f+=String.fromCharCode(w),ne):te(w)}function me(w){return w===93?(l.consume(w),E):te(w)}function E(w){return w===62?(l.consume(w),C):w===45&&c===2?(l.consume(w),E):te(w)}function C(w){return w===null||pe(w)?(l.exit("htmlFlowData"),Y(w)):(l.consume(w),C)}function Y(w){return l.exit("htmlFlow"),i(w)}}function ub(l,i,r){const u=this;return c;function c(f){return pe(f)?(l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),p):r(f)}function p(f){return u.parser.lazy[u.now().line]?r(f):i(f)}}function ob(l,i,r){return u;function u(c){return l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),l.attempt(Di,i,r)}}const sb={name:"htmlText",tokenize:cb};function cb(l,i,r){const u=this;let c,p,f;return d;function d(E){return l.enter("htmlText"),l.enter("htmlTextData"),l.consume(E),m}function m(E){return E===33?(l.consume(E),h):E===47?(l.consume(E),le):E===63?(l.consume(E),H):St(E)?(l.consume(E),K):r(E)}function h(E){return E===45?(l.consume(E),b):E===91?(l.consume(E),p=0,z):St(E)?(l.consume(E),F):r(E)}function b(E){return E===45?(l.consume(E),k):r(E)}function x(E){return E===null?r(E):E===45?(l.consume(E),v):pe(E)?(f=x,Z(E)):(l.consume(E),x)}function v(E){return E===45?(l.consume(E),k):x(E)}function k(E){return E===62?A(E):E===45?v(E):x(E)}function z(E){const C="CDATA[";return E===C.charCodeAt(p++)?(l.consume(E),p===C.length?q:z):r(E)}function q(E){return E===null?r(E):E===93?(l.consume(E),I):pe(E)?(f=q,Z(E)):(l.consume(E),q)}function I(E){return E===93?(l.consume(E),D):q(E)}function D(E){return E===62?A(E):E===93?(l.consume(E),D):q(E)}function F(E){return E===null||E===62?A(E):pe(E)?(f=F,Z(E)):(l.consume(E),F)}function H(E){return E===null?r(E):E===63?(l.consume(E),ae):pe(E)?(f=H,Z(E)):(l.consume(E),H)}function ae(E){return E===62?A(E):H(E)}function le(E){return St(E)?(l.consume(E),B):r(E)}function B(E){return E===45||gt(E)?(l.consume(E),B):_(E)}function _(E){return pe(E)?(f=_,Z(E)):Te(E)?(l.consume(E),_):A(E)}function K(E){return E===45||gt(E)?(l.consume(E),K):E===47||E===62||Ie(E)?ie(E):r(E)}function ie(E){return E===47?(l.consume(E),A):E===58||E===95||St(E)?(l.consume(E),L):pe(E)?(f=ie,Z(E)):Te(E)?(l.consume(E),ie):A(E)}function L(E){return E===45||E===46||E===58||E===95||gt(E)?(l.consume(E),L):W(E)}function W(E){return E===61?(l.consume(E),te):pe(E)?(f=W,Z(E)):Te(E)?(l.consume(E),W):ie(E)}function te(E){return E===null||E===60||E===61||E===62||E===96?r(E):E===34||E===39?(l.consume(E),c=E,Se):pe(E)?(f=te,Z(E)):Te(E)?(l.consume(E),te):(l.consume(E),oe)}function Se(E){return E===c?(l.consume(E),c=void 0,P):E===null?r(E):pe(E)?(f=Se,Z(E)):(l.consume(E),Se)}function oe(E){return E===null||E===34||E===39||E===60||E===61||E===96?r(E):E===47||E===62||Ie(E)?ie(E):(l.consume(E),oe)}function P(E){return E===47||E===62||Ie(E)?ie(E):r(E)}function A(E){return E===62?(l.consume(E),l.exit("htmlTextData"),l.exit("htmlText"),i):r(E)}function Z(E){return l.exit("htmlTextData"),l.enter("lineEnding"),l.consume(E),l.exit("lineEnding"),ne}function ne(E){return Te(E)?Me(l,me,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):me(E)}function me(E){return l.enter("htmlTextData"),f(E)}}const wc={name:"labelEnd",resolveAll:hb,resolveTo:mb,tokenize:gb},fb={tokenize:xb},pb={tokenize:yb},db={tokenize:bb};function hb(l){let i=-1;const r=[];for(;++i<l.length;){const u=l[i][1];if(r.push(l[i]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",i+=c}}return l.length!==r.length&&Yt(l,0,l.length,r),l}function mb(l,i){let r=l.length,u=0,c,p,f,d;for(;r--;)if(c=l[r][1],p){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;l[r][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(f){if(l[r][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(p=r,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(f=r);const m={type:l[p][1].type==="labelLink"?"link":"image",start:{...l[p][1].start},end:{...l[l.length-1][1].end}},h={type:"label",start:{...l[p][1].start},end:{...l[f][1].end}},b={type:"labelText",start:{...l[p+u+2][1].end},end:{...l[f-2][1].start}};return d=[["enter",m,i],["enter",h,i]],d=Pt(d,l.slice(p+1,p+u+3)),d=Pt(d,[["enter",b,i]]),d=Pt(d,cu(i.parser.constructs.insideSpan.null,l.slice(p+u+4,f-3),i)),d=Pt(d,[["exit",b,i],l[f-2],l[f-1],["exit",h,i]]),d=Pt(d,l.slice(f+1)),d=Pt(d,[["exit",m,i]]),Yt(l,p,l.length,d),l}function gb(l,i,r){const u=this;let c=u.events.length,p,f;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){p=u.events[c][1];break}return d;function d(v){return p?p._inactive?x(v):(f=u.parser.defined.includes(an(u.sliceSerialize({start:p.end,end:u.now()}))),l.enter("labelEnd"),l.enter("labelMarker"),l.consume(v),l.exit("labelMarker"),l.exit("labelEnd"),m):r(v)}function m(v){return v===40?l.attempt(fb,b,f?b:x)(v):v===91?l.attempt(pb,b,f?h:x)(v):f?b(v):x(v)}function h(v){return l.attempt(db,b,x)(v)}function b(v){return i(v)}function x(v){return p._balanced=!0,r(v)}}function xb(l,i,r){return u;function u(x){return l.enter("resource"),l.enter("resourceMarker"),l.consume(x),l.exit("resourceMarker"),c}function c(x){return Ie(x)?Ti(l,p)(x):p(x)}function p(x){return x===41?b(x):ng(l,f,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(x)}function f(x){return Ie(x)?Ti(l,m)(x):b(x)}function d(x){return r(x)}function m(x){return x===34||x===39||x===40?ag(l,h,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(x):b(x)}function h(x){return Ie(x)?Ti(l,b)(x):b(x)}function b(x){return x===41?(l.enter("resourceMarker"),l.consume(x),l.exit("resourceMarker"),l.exit("resource"),i):r(x)}}function yb(l,i,r){const u=this;return c;function c(d){return lg.call(u,l,p,f,"reference","referenceMarker","referenceString")(d)}function p(d){return u.parser.defined.includes(an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?i(d):r(d)}function f(d){return r(d)}}function bb(l,i,r){return u;function u(p){return l.enter("reference"),l.enter("referenceMarker"),l.consume(p),l.exit("referenceMarker"),c}function c(p){return p===93?(l.enter("referenceMarker"),l.consume(p),l.exit("referenceMarker"),l.exit("reference"),i):r(p)}}const vb={name:"labelStartImage",resolveAll:wc.resolveAll,tokenize:Sb};function Sb(l,i,r){const u=this;return c;function c(d){return l.enter("labelImage"),l.enter("labelImageMarker"),l.consume(d),l.exit("labelImageMarker"),p}function p(d){return d===91?(l.enter("labelMarker"),l.consume(d),l.exit("labelMarker"),l.exit("labelImage"),f):r(d)}function f(d){return d===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(d):i(d)}}const kb={name:"labelStartLink",resolveAll:wc.resolveAll,tokenize:wb};function wb(l,i,r){const u=this;return c;function c(f){return l.enter("labelLink"),l.enter("labelMarker"),l.consume(f),l.exit("labelMarker"),l.exit("labelLink"),p}function p(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(f):i(f)}}const qs={name:"lineEnding",tokenize:Eb};function Eb(l,i){return r;function r(u){return l.enter("lineEnding"),l.consume(u),l.exit("lineEnding"),Me(l,i,"linePrefix")}}const lu={name:"thematicBreak",tokenize:Cb};function Cb(l,i,r){let u=0,c;return p;function p(h){return l.enter("thematicBreak"),f(h)}function f(h){return c=h,d(h)}function d(h){return h===c?(l.enter("thematicBreakSequence"),m(h)):u>=3&&(h===null||pe(h))?(l.exit("thematicBreak"),i(h)):r(h)}function m(h){return h===c?(l.consume(h),u++,m):(l.exit("thematicBreakSequence"),Te(h)?Me(l,d,"whitespace")(h):d(h))}}const Mt={continuation:{tokenize:Ab},exit:Db,name:"list",tokenize:jb},Tb={partial:!0,tokenize:Nb},zb={partial:!0,tokenize:Mb};function jb(l,i,r){const u=this,c=u.events[u.events.length-1];let p=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,f=0;return d;function d(k){const z=u.containerState.type||(k===42||k===43||k===45?"listUnordered":"listOrdered");if(z==="listUnordered"?!u.containerState.marker||k===u.containerState.marker:rc(k)){if(u.containerState.type||(u.containerState.type=z,l.enter(z,{_container:!0})),z==="listUnordered")return l.enter("listItemPrefix"),k===42||k===45?l.check(lu,r,h)(k):h(k);if(!u.interrupt||k===49)return l.enter("listItemPrefix"),l.enter("listItemValue"),m(k)}return r(k)}function m(k){return rc(k)&&++f<10?(l.consume(k),m):(!u.interrupt||f<2)&&(u.containerState.marker?k===u.containerState.marker:k===41||k===46)?(l.exit("listItemValue"),h(k)):r(k)}function h(k){return l.enter("listItemMarker"),l.consume(k),l.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||k,l.check(Di,u.interrupt?r:b,l.attempt(Tb,v,x))}function b(k){return u.containerState.initialBlankLine=!0,p++,v(k)}function x(k){return Te(k)?(l.enter("listItemPrefixWhitespace"),l.consume(k),l.exit("listItemPrefixWhitespace"),v):r(k)}function v(k){return u.containerState.size=p+u.sliceSerialize(l.exit("listItemPrefix"),!0).length,i(k)}}function Ab(l,i,r){const u=this;return u.containerState._closeFlow=void 0,l.check(Di,c,p);function c(d){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Me(l,i,"listItemIndent",u.containerState.size+1)(d)}function p(d){return u.containerState.furtherBlankLines||!Te(d)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(d)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,l.attempt(zb,i,f)(d))}function f(d){return u.containerState._closeFlow=!0,u.interrupt=void 0,Me(l,l.attempt(Mt,i,r),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function Mb(l,i,r){const u=this;return Me(l,c,"listItemIndent",u.containerState.size+1);function c(p){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?i(p):r(p)}}function Db(l){l.exit(this.containerState.type)}function Nb(l,i,r){const u=this;return Me(l,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(p){const f=u.events[u.events.length-1];return!Te(p)&&f&&f[1].type==="listItemPrefixWhitespace"?i(p):r(p)}}const rm={name:"setextUnderline",resolveTo:_b,tokenize:Ob};function _b(l,i){let r=l.length,u,c,p;for(;r--;)if(l[r][0]==="enter"){if(l[r][1].type==="content"){u=r;break}l[r][1].type==="paragraph"&&(c=r)}else l[r][1].type==="content"&&l.splice(r,1),!p&&l[r][1].type==="definition"&&(p=r);const f={type:"setextHeading",start:{...l[u][1].start},end:{...l[l.length-1][1].end}};return l[c][1].type="setextHeadingText",p?(l.splice(c,0,["enter",f,i]),l.splice(p+1,0,["exit",l[u][1],i]),l[u][1].end={...l[p][1].end}):l[u][1]=f,l.push(["exit",f,i]),l}function Ob(l,i,r){const u=this;let c;return p;function p(h){let b=u.events.length,x;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){x=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||x)?(l.enter("setextHeadingLine"),c=h,f(h)):r(h)}function f(h){return l.enter("setextHeadingLineSequence"),d(h)}function d(h){return h===c?(l.consume(h),d):(l.exit("setextHeadingLineSequence"),Te(h)?Me(l,m,"lineSuffix")(h):m(h))}function m(h){return h===null||pe(h)?(l.exit("setextHeadingLine"),i(h)):r(h)}}const Lb={tokenize:Rb};function Rb(l){const i=this,r=l.attempt(Di,u,l.attempt(this.parser.constructs.flowInitial,c,Me(l,l.attempt(this.parser.constructs.flow,c,l.attempt(Yy,c)),"linePrefix")));return r;function u(p){if(p===null){l.consume(p);return}return l.enter("lineEndingBlank"),l.consume(p),l.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function c(p){if(p===null){l.consume(p);return}return l.enter("lineEnding"),l.consume(p),l.exit("lineEnding"),i.currentConstruct=void 0,r}}const Bb={resolveAll:rg()},Ub=ig("string"),Hb=ig("text");function ig(l){return{resolveAll:rg(l==="text"?qb:void 0),tokenize:i};function i(r){const u=this,c=this.parser.constructs[l],p=r.attempt(c,f,d);return f;function f(b){return h(b)?p(b):d(b)}function d(b){if(b===null){r.consume(b);return}return r.enter("data"),r.consume(b),m}function m(b){return h(b)?(r.exit("data"),p(b)):(r.consume(b),m)}function h(b){if(b===null)return!0;const x=c[b];let v=-1;if(x)for(;++v<x.length;){const k=x[v];if(!k.previous||k.previous.call(u,u.previous))return!0}return!1}}}function rg(l){return i;function i(r,u){let c=-1,p;for(;++c<=r.length;)p===void 0?r[c]&&r[c][1].type==="data"&&(p=c,c++):(!r[c]||r[c][1].type!=="data")&&(c!==p+2&&(r[p][1].end=r[c-1][1].end,r.splice(p+2,c-p-2),c=p+2),p=void 0);return l?l(r,u):r}}function qb(l,i){let r=0;for(;++r<=l.length;)if((r===l.length||l[r][1].type==="lineEnding")&&l[r-1][1].type==="data"){const u=l[r-1][1],c=i.sliceStream(u);let p=c.length,f=-1,d=0,m;for(;p--;){const h=c[p];if(typeof h=="string"){for(f=h.length;h.charCodeAt(f-1)===32;)d++,f--;if(f)break;f=-1}else if(h===-2)m=!0,d++;else if(h!==-1){p++;break}}if(i._contentTypeTextTrailing&&r===l.length&&(d=0),d){const h={type:r===l.length||m||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:p?f:u.start._bufferIndex+f,_index:u.start._index+p,line:u.end.line,column:u.end.column-d,offset:u.end.offset-d},end:{...u.end}};u.end={...h.start},u.start.offset===u.end.offset?Object.assign(u,h):(l.splice(r,0,["enter",h,i],["exit",h,i]),r+=2)}r++}return l}const Yb={42:Mt,43:Mt,45:Mt,48:Mt,49:Mt,50:Mt,51:Mt,52:Mt,53:Mt,54:Mt,55:Mt,56:Mt,57:Mt,62:Wm},Gb={91:Qy},Vb={[-2]:Hs,[-1]:Hs,32:Hs},Xb={35:Wy,42:lu,45:[rm,lu],60:nb,61:rm,95:lu,96:am,126:am},Ib={38:eg,92:Pm},Qb={[-5]:qs,[-4]:qs,[-3]:qs,33:vb,38:eg,42:uc,60:[ky,sb],91:kb,92:[Jy,Pm],93:wc,95:uc,96:Ly},Zb={null:[uc,Bb]},Fb={null:[42,95]},Kb={null:[]},Jb=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Fb,contentInitial:Gb,disable:Kb,document:Yb,flow:Xb,flowInitial:Vb,insideSpan:Zb,string:Ib,text:Qb},Symbol.toStringTag,{value:"Module"}));function $b(l,i,r){let u={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const c={},p=[];let f=[],d=[];const m={attempt:_(le),check:_(B),consume:F,enter:H,exit:ae,interrupt:_(B,{interrupt:!0})},h={code:null,containerState:{},defineSkip:q,events:[],now:z,parser:l,previous:null,sliceSerialize:v,sliceStream:k,write:x};let b=i.tokenize.call(h,m);return i.resolveAll&&p.push(i),h;function x(W){return f=Pt(f,W),I(),f[f.length-1]!==null?[]:(K(i,0),h.events=cu(p,h.events,h),h.events)}function v(W,te){return Pb(k(W),te)}function k(W){return Wb(f,W)}function z(){const{_bufferIndex:W,_index:te,line:Se,column:oe,offset:P}=u;return{_bufferIndex:W,_index:te,line:Se,column:oe,offset:P}}function q(W){c[W.line]=W.column,L()}function I(){let W;for(;u._index<f.length;){const te=f[u._index];if(typeof te=="string")for(W=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===W&&u._bufferIndex<te.length;)D(te.charCodeAt(u._bufferIndex));else D(te)}}function D(W){b=b(W)}function F(W){pe(W)?(u.line++,u.column=1,u.offset+=W===-3?2:1,L()):W!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),h.previous=W}function H(W,te){const Se=te||{};return Se.type=W,Se.start=z(),h.events.push(["enter",Se,h]),d.push(Se),Se}function ae(W){const te=d.pop();return te.end=z(),h.events.push(["exit",te,h]),te}function le(W,te){K(W,te.from)}function B(W,te){te.restore()}function _(W,te){return Se;function Se(oe,P,A){let Z,ne,me,E;return Array.isArray(oe)?Y(oe):"tokenize"in oe?Y([oe]):C(oe);function C(ce){return ke;function ke(Ye){const Be=Ye!==null&&ce[Ye],Gt=Ye!==null&&ce.null,pn=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Gt)?Gt:Gt?[Gt]:[]];return Y(pn)(Ye)}}function Y(ce){return Z=ce,ne=0,ce.length===0?A:w(ce[ne])}function w(ce){return ke;function ke(Ye){return E=ie(),me=ce,ce.partial||(h.currentConstruct=ce),ce.name&&h.parser.constructs.disable.null.includes(ce.name)?re():ce.tokenize.call(te?Object.assign(Object.create(h),te):h,m,$,re)(Ye)}}function $(ce){return W(me,E),P}function re(ce){return E.restore(),++ne<Z.length?w(Z[ne]):A}}}function K(W,te){W.resolveAll&&!p.includes(W)&&p.push(W),W.resolve&&Yt(h.events,te,h.events.length-te,W.resolve(h.events.slice(te),h)),W.resolveTo&&(h.events=W.resolveTo(h.events,h))}function ie(){const W=z(),te=h.previous,Se=h.currentConstruct,oe=h.events.length,P=Array.from(d);return{from:oe,restore:A};function A(){u=W,h.previous=te,h.currentConstruct=Se,h.events.length=oe,d=P,L()}}function L(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function Wb(l,i){const r=i.start._index,u=i.start._bufferIndex,c=i.end._index,p=i.end._bufferIndex;let f;if(r===c)f=[l[r].slice(u,p)];else{if(f=l.slice(r,c),u>-1){const d=f[0];typeof d=="string"?f[0]=d.slice(u):f.shift()}p>0&&f.push(l[c].slice(0,p))}return f}function Pb(l,i){let r=-1;const u=[];let c;for(;++r<l.length;){const p=l[r];let f;if(typeof p=="string")f=p;else switch(p){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=i?" ":"	";break}case-1:{if(!i&&c)continue;f=" ";break}default:f=String.fromCharCode(p)}c=p===-2,u.push(f)}return u.join("")}function ev(l){const u={constructs:Jm([Jb,...(l||{}).extensions||[]]),content:c(my),defined:[],document:c(xy),flow:c(Lb),lazy:{},string:c(Ub),text:c(Hb)};return u;function c(p){return f;function f(d){return $b(u,p,d)}}}function tv(l){for(;!tg(l););return l}const um=/[\0\t\n\r]/g;function nv(){let l=1,i="",r=!0,u;return c;function c(p,f,d){const m=[];let h,b,x,v,k;for(p=i+(typeof p=="string"?p.toString():new TextDecoder(f||void 0).decode(p)),x=0,i="",r&&(p.charCodeAt(0)===65279&&x++,r=void 0);x<p.length;){if(um.lastIndex=x,h=um.exec(p),v=h&&h.index!==void 0?h.index:p.length,k=p.charCodeAt(v),!h){i=p.slice(x);break}if(k===10&&x===v&&u)m.push(-3),u=void 0;else switch(u&&(m.push(-5),u=void 0),x<v&&(m.push(p.slice(x,v)),l+=v-x),k){case 0:{m.push(65533),l++;break}case 9:{for(b=Math.ceil(l/4)*4,m.push(-2);l++<b;)m.push(-1);break}case 10:{m.push(-4),l=1;break}default:u=!0,l=1}x=v+1}return d&&(u&&m.push(-5),i&&m.push(i),m.push(null)),m}}const lv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function av(l){return l.replace(lv,iv)}function iv(l,i,r){if(i)return i;if(r.charCodeAt(0)===35){const c=r.charCodeAt(1),p=c===120||c===88;return $m(r.slice(p?2:1),p?16:10)}return kc(r)||l}const ug={}.hasOwnProperty;function rv(l,i,r){return i&&typeof i=="object"&&(r=i,i=void 0),uv(r)(tv(ev(r).document().write(nv()(l,i,!0))))}function uv(l){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:p(Ml),autolinkProtocol:ie,autolinkEmail:ie,atxHeading:p(jl),blockQuote:p(Gt),characterEscape:ie,characterReference:ie,codeFenced:p(pn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:p(pn,f),codeText:p(Ca,f),codeTextData:ie,data:ie,codeFlowValue:ie,definition:p(_i),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:p(dn),hardBreakEscape:p(Al),hardBreakTrailing:p(Al),htmlFlow:p(Oi,f),htmlFlowData:ie,htmlText:p(Oi,f),htmlTextData:ie,image:p(Li),label:f,link:p(Ml),listItem:p(Ta),listItemValue:v,listOrdered:p(Dl,x),listUnordered:p(Dl),paragraph:p(hu),reference:w,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:p(jl),strong:p(mu),thematicBreak:p(gu)},exit:{atxHeading:m(),atxHeadingSequence:le,autolink:m(),autolinkEmail:Be,autolinkProtocol:Ye,blockQuote:m(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:re,characterReferenceMarkerNumeric:re,characterReferenceValue:ce,characterReference:ke,codeFenced:m(I),codeFencedFence:q,codeFencedFenceInfo:k,codeFencedFenceMeta:z,codeFlowValue:L,codeIndented:m(D),codeText:m(P),codeTextData:L,data:L,definition:m(),definitionDestinationString:ae,definitionLabelString:F,definitionTitleString:H,emphasis:m(),hardBreakEscape:m(te),hardBreakTrailing:m(te),htmlFlow:m(Se),htmlFlowData:L,htmlText:m(oe),htmlTextData:L,image:m(Z),label:me,labelText:ne,lineEnding:W,link:m(A),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:$,resourceDestinationString:E,resourceTitleString:C,resource:Y,setextHeading:m(K),setextHeadingLineSequence:_,setextHeadingText:B,strong:m(),thematicBreak:m()}};og(i,(l||{}).mdastExtensions||[]);const r={};return u;function u(V){let ee={type:"root",children:[]};const he={stack:[ee],tokenStack:[],config:i,enter:d,exit:h,buffer:f,resume:b,data:r},we=[];let Oe=-1;for(;++Oe<V.length;)if(V[Oe][1].type==="listOrdered"||V[Oe][1].type==="listUnordered")if(V[Oe][0]==="enter")we.push(Oe);else{const Nt=we.pop();Oe=c(V,Nt,Oe)}for(Oe=-1;++Oe<V.length;){const Nt=i[V[Oe][0]];ug.call(Nt,V[Oe][1].type)&&Nt[V[Oe][1].type].call(Object.assign({sliceSerialize:V[Oe][2].sliceSerialize},he),V[Oe][1])}if(he.tokenStack.length>0){const Nt=he.tokenStack[he.tokenStack.length-1];(Nt[1]||om).call(he,void 0,Nt[0])}for(ee.position={start:il(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:il(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<i.transforms.length;)ee=i.transforms[Oe](ee)||ee;return ee}function c(V,ee,he){let we=ee-1,Oe=-1,Nt=!1,hn,bt,it,kt;for(;++we<=he;){const Ge=V[we];switch(Ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ge[0]==="enter"?Oe++:Oe--,kt=void 0;break}case"lineEndingBlank":{Ge[0]==="enter"&&(hn&&!kt&&!Oe&&!it&&(it=we),kt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kt=void 0}if(!Oe&&Ge[0]==="enter"&&Ge[1].type==="listItemPrefix"||Oe===-1&&Ge[0]==="exit"&&(Ge[1].type==="listUnordered"||Ge[1].type==="listOrdered")){if(hn){let On=we;for(bt=void 0;On--;){const en=V[On];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;bt&&(V[bt][1].type="lineEndingBlank",Nt=!0),en[1].type="lineEnding",bt=On}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!bt||it<bt)&&(hn._spread=!0),hn.end=Object.assign({},bt?V[bt][1].start:Ge[1].end),V.splice(bt||we,0,["exit",hn,Ge[2]]),we++,he++}if(Ge[1].type==="listItemPrefix"){const On={type:"listItem",_spread:!1,start:Object.assign({},Ge[1].start),end:void 0};hn=On,V.splice(we,0,["enter",On,Ge[2]]),we++,he++,it=void 0,kt=!0}}}return V[ee][1]._spread=Nt,he}function p(V,ee){return he;function he(we){d.call(this,V(we),we),ee&&ee.call(this,we)}}function f(){this.stack.push({type:"fragment",children:[]})}function d(V,ee,he){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([ee,he||void 0]),V.position={start:il(ee.start),end:void 0}}function m(V){return ee;function ee(he){V&&V.call(this,he),h.call(this,he)}}function h(V,ee){const he=this.stack.pop(),we=this.tokenStack.pop();if(we)we[0].type!==V.type&&(ee?ee.call(this,V,we[0]):(we[1]||om).call(this,V,we[0]));else throw new Error("Cannot close `"+V.type+"` ("+Ci({start:V.start,end:V.end})+"): it’s not open");he.position.end=il(V.end)}function b(){return Sc(this.stack.pop())}function x(){this.data.expectingFirstListItemValue=!0}function v(V){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function k(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=V}function z(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=V}function q(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function D(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V.replace(/(\r?\n|\r)$/g,"")}function F(V){const ee=this.resume(),he=this.stack[this.stack.length-1];he.label=ee,he.identifier=an(this.sliceSerialize(V)).toLowerCase()}function H(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.title=V}function ae(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.url=V}function le(V){const ee=this.stack[this.stack.length-1];if(!ee.depth){const he=this.sliceSerialize(V).length;ee.depth=he}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function _(V){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function K(){this.data.setextHeadingSlurpLineEnding=void 0}function ie(V){const he=this.stack[this.stack.length-1].children;let we=he[he.length-1];(!we||we.type!=="text")&&(we=yt(),we.position={start:il(V.start),end:void 0},he.push(we)),this.stack.push(we)}function L(V){const ee=this.stack.pop();ee.value+=this.sliceSerialize(V),ee.position.end=il(V.end)}function W(V){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=ee.children[ee.children.length-1];he.position.end=il(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(ee.type)&&(ie.call(this,V),L.call(this,V))}function te(){this.data.atHardBreak=!0}function Se(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V}function oe(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V}function P(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V}function A(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=ee,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function Z(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=ee,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function ne(V){const ee=this.sliceSerialize(V),he=this.stack[this.stack.length-2];he.label=av(ee),he.identifier=an(ee).toLowerCase()}function me(){const V=this.stack[this.stack.length-1],ee=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const we=V.children;he.children=we}else he.alt=ee}function E(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.url=V}function C(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.title=V}function Y(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function $(V){const ee=this.resume(),he=this.stack[this.stack.length-1];he.label=ee,he.identifier=an(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function re(V){this.data.characterReferenceType=V.type}function ce(V){const ee=this.sliceSerialize(V),he=this.data.characterReferenceType;let we;he?(we=$m(ee,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):we=kc(ee);const Oe=this.stack[this.stack.length-1];Oe.value+=we}function ke(V){const ee=this.stack.pop();ee.position.end=il(V.end)}function Ye(V){L.call(this,V);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(V)}function Be(V){L.call(this,V);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(V)}function Gt(){return{type:"blockquote",children:[]}}function pn(){return{type:"code",lang:null,meta:null,value:""}}function Ca(){return{type:"inlineCode",value:""}}function _i(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function dn(){return{type:"emphasis",children:[]}}function jl(){return{type:"heading",depth:0,children:[]}}function Al(){return{type:"break"}}function Oi(){return{type:"html",value:""}}function Li(){return{type:"image",title:null,url:"",alt:null}}function Ml(){return{type:"link",title:null,url:"",children:[]}}function Dl(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Ta(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function hu(){return{type:"paragraph",children:[]}}function mu(){return{type:"strong",children:[]}}function yt(){return{type:"text",value:""}}function gu(){return{type:"thematicBreak"}}}function il(l){return{line:l.line,column:l.column,offset:l.offset}}function og(l,i){let r=-1;for(;++r<i.length;){const u=i[r];Array.isArray(u)?og(l,u):ov(l,u)}}function ov(l,i){let r;for(r in i)if(ug.call(i,r))switch(r){case"canContainEols":{const u=i[r];u&&l[r].push(...u);break}case"transforms":{const u=i[r];u&&l[r].push(...u);break}case"enter":case"exit":{const u=i[r];u&&Object.assign(l[r],u);break}}}function om(l,i){throw l?new Error("Cannot close `"+l.type+"` ("+Ci({start:l.start,end:l.end})+"): a different token (`"+i.type+"`, "+Ci({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Ci({start:i.start,end:i.end})+") is still open")}function sv(l){const i=this;i.parser=r;function r(u){return rv(u,{...i.data("settings"),...l,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function cv(l,i){const r={type:"element",tagName:"blockquote",properties:{},children:l.wrap(l.all(i),!0)};return l.patch(i,r),l.applyData(i,r)}function fv(l,i){const r={type:"element",tagName:"br",properties:{},children:[]};return l.patch(i,r),[l.applyData(i,r),{type:"text",value:`
`}]}function pv(l,i){const r=i.value?i.value+`
`:"",u={},c=i.lang?i.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let p={type:"element",tagName:"code",properties:u,children:[{type:"text",value:r}]};return i.meta&&(p.data={meta:i.meta}),l.patch(i,p),p=l.applyData(i,p),p={type:"element",tagName:"pre",properties:{},children:[p]},l.patch(i,p),p}function dv(l,i){const r={type:"element",tagName:"del",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function hv(l,i){const r={type:"element",tagName:"em",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function mv(l,i){const r=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",u=String(i.identifier).toUpperCase(),c=Ea(u.toLowerCase()),p=l.footnoteOrder.indexOf(u);let f,d=l.footnoteCounts.get(u);d===void 0?(d=0,l.footnoteOrder.push(u),f=l.footnoteOrder.length):f=p+1,d+=1,l.footnoteCounts.set(u,d);const m={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+c,id:r+"fnref-"+c+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};l.patch(i,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return l.patch(i,h),l.applyData(i,h)}function gv(l,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function xv(l,i){if(l.options.allowDangerousHtml){const r={type:"raw",value:i.value};return l.patch(i,r),l.applyData(i,r)}}function sg(l,i){const r=i.referenceType;let u="]";if(r==="collapsed"?u+="[]":r==="full"&&(u+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+u}];const c=l.all(i),p=c[0];p&&p.type==="text"?p.value="["+p.value:c.unshift({type:"text",value:"["});const f=c[c.length-1];return f&&f.type==="text"?f.value+=u:c.push({type:"text",value:u}),c}function yv(l,i){const r=String(i.identifier).toUpperCase(),u=l.definitionById.get(r);if(!u)return sg(l,i);const c={src:Ea(u.url||""),alt:i.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const p={type:"element",tagName:"img",properties:c,children:[]};return l.patch(i,p),l.applyData(i,p)}function bv(l,i){const r={src:Ea(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"img",properties:r,children:[]};return l.patch(i,u),l.applyData(i,u)}function vv(l,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};l.patch(i,r);const u={type:"element",tagName:"code",properties:{},children:[r]};return l.patch(i,u),l.applyData(i,u)}function Sv(l,i){const r=String(i.identifier).toUpperCase(),u=l.definitionById.get(r);if(!u)return sg(l,i);const c={href:Ea(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const p={type:"element",tagName:"a",properties:c,children:l.all(i)};return l.patch(i,p),l.applyData(i,p)}function kv(l,i){const r={href:Ea(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"a",properties:r,children:l.all(i)};return l.patch(i,u),l.applyData(i,u)}function wv(l,i,r){const u=l.all(i),c=r?Ev(r):cg(i),p={},f=[];if(typeof i.checked=="boolean"){const b=u[0];let x;b&&b.type==="element"&&b.tagName==="p"?x=b:(x={type:"element",tagName:"p",properties:{},children:[]},u.unshift(x)),x.children.length>0&&x.children.unshift({type:"text",value:" "}),x.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),p.className=["task-list-item"]}let d=-1;for(;++d<u.length;){const b=u[d];(c||d!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!c?f.push(...b.children):f.push(b)}const m=u[u.length-1];m&&(c||m.type!=="element"||m.tagName!=="p")&&f.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:p,children:f};return l.patch(i,h),l.applyData(i,h)}function Ev(l){let i=!1;if(l.type==="list"){i=l.spread||!1;const r=l.children;let u=-1;for(;!i&&++u<r.length;)i=cg(r[u])}return i}function cg(l){const i=l.spread;return i??l.children.length>1}function Cv(l,i){const r={},u=l.all(i);let c=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++c<u.length;){const f=u[c];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const p={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:l.wrap(u,!0)};return l.patch(i,p),l.applyData(i,p)}function Tv(l,i){const r={type:"element",tagName:"p",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function zv(l,i){const r={type:"root",children:l.wrap(l.all(i))};return l.patch(i,r),l.applyData(i,r)}function jv(l,i){const r={type:"element",tagName:"strong",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}function Av(l,i){const r=l.all(i),u=r.shift(),c=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:l.wrap([u],!0)};l.patch(i.children[0],f),c.push(f)}if(r.length>0){const f={type:"element",tagName:"tbody",properties:{},children:l.wrap(r,!0)},d=xc(i.children[1]),m=Vm(i.children[i.children.length-1]);d&&m&&(f.position={start:d,end:m}),c.push(f)}const p={type:"element",tagName:"table",properties:{},children:l.wrap(c,!0)};return l.patch(i,p),l.applyData(i,p)}function Mv(l,i,r){const u=r?r.children:void 0,p=(u?u.indexOf(i):1)===0?"th":"td",f=r&&r.type==="table"?r.align:void 0,d=f?f.length:i.children.length;let m=-1;const h=[];for(;++m<d;){const x=i.children[m],v={},k=f?f[m]:void 0;k&&(v.align=k);let z={type:"element",tagName:p,properties:v,children:[]};x&&(z.children=l.all(x),l.patch(x,z),z=l.applyData(x,z)),h.push(z)}const b={type:"element",tagName:"tr",properties:{},children:l.wrap(h,!0)};return l.patch(i,b),l.applyData(i,b)}function Dv(l,i){const r={type:"element",tagName:"td",properties:{},children:l.all(i)};return l.patch(i,r),l.applyData(i,r)}const sm=9,cm=32;function Nv(l){const i=String(l),r=/\r?\n|\r/g;let u=r.exec(i),c=0;const p=[];for(;u;)p.push(fm(i.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=r.exec(i);return p.push(fm(i.slice(c),c>0,!1)),p.join("")}function fm(l,i,r){let u=0,c=l.length;if(i){let p=l.codePointAt(u);for(;p===sm||p===cm;)u++,p=l.codePointAt(u)}if(r){let p=l.codePointAt(c-1);for(;p===sm||p===cm;)c--,p=l.codePointAt(c-1)}return c>u?l.slice(u,c):""}function _v(l,i){const r={type:"text",value:Nv(String(i.value))};return l.patch(i,r),l.applyData(i,r)}function Ov(l,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return l.patch(i,r),l.applyData(i,r)}const Lv={blockquote:cv,break:fv,code:pv,delete:dv,emphasis:hv,footnoteReference:mv,heading:gv,html:xv,imageReference:yv,image:bv,inlineCode:vv,linkReference:Sv,link:kv,listItem:wv,list:Cv,paragraph:Tv,root:zv,strong:jv,table:Av,tableCell:Dv,tableRow:Mv,text:_v,thematicBreak:Ov,toml:Wr,yaml:Wr,definition:Wr,footnoteDefinition:Wr};function Wr(){}const fg=-1,fu=0,zi=1,iu=2,Ec=3,Cc=4,Tc=5,zc=6,pg=7,dg=8,pm=typeof self=="object"?self:globalThis,Rv=(l,i)=>{const r=(c,p)=>(l.set(p,c),c),u=c=>{if(l.has(c))return l.get(c);const[p,f]=i[c];switch(p){case fu:case fg:return r(f,c);case zi:{const d=r([],c);for(const m of f)d.push(u(m));return d}case iu:{const d=r({},c);for(const[m,h]of f)d[u(m)]=u(h);return d}case Ec:return r(new Date(f),c);case Cc:{const{source:d,flags:m}=f;return r(new RegExp(d,m),c)}case Tc:{const d=r(new Map,c);for(const[m,h]of f)d.set(u(m),u(h));return d}case zc:{const d=r(new Set,c);for(const m of f)d.add(u(m));return d}case pg:{const{name:d,message:m}=f;return r(new pm[d](m),c)}case dg:return r(BigInt(f),c);case"BigInt":return r(Object(BigInt(f)),c);case"ArrayBuffer":return r(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:d}=new Uint8Array(f);return r(new DataView(d),f)}}return r(new pm[p](f),c)};return u},dm=l=>Rv(new Map,l)(0),xa="",{toString:Bv}={},{keys:Uv}=Object,wi=l=>{const i=typeof l;if(i!=="object"||!l)return[fu,i];const r=Bv.call(l).slice(8,-1);switch(r){case"Array":return[zi,xa];case"Object":return[iu,xa];case"Date":return[Ec,xa];case"RegExp":return[Cc,xa];case"Map":return[Tc,xa];case"Set":return[zc,xa];case"DataView":return[zi,r]}return r.includes("Array")?[zi,r]:r.includes("Error")?[pg,r]:[iu,r]},Pr=([l,i])=>l===fu&&(i==="function"||i==="symbol"),Hv=(l,i,r,u)=>{const c=(f,d)=>{const m=u.push(f)-1;return r.set(d,m),m},p=f=>{if(r.has(f))return r.get(f);let[d,m]=wi(f);switch(d){case fu:{let b=f;switch(m){case"bigint":d=dg,b=f.toString();break;case"function":case"symbol":if(l)throw new TypeError("unable to serialize "+m);b=null;break;case"undefined":return c([fg],f)}return c([d,b],f)}case zi:{if(m){let v=f;return m==="DataView"?v=new Uint8Array(f.buffer):m==="ArrayBuffer"&&(v=new Uint8Array(f)),c([m,[...v]],f)}const b=[],x=c([d,b],f);for(const v of f)b.push(p(v));return x}case iu:{if(m)switch(m){case"BigInt":return c([m,f.toString()],f);case"Boolean":case"Number":case"String":return c([m,f.valueOf()],f)}if(i&&"toJSON"in f)return p(f.toJSON());const b=[],x=c([d,b],f);for(const v of Uv(f))(l||!Pr(wi(f[v])))&&b.push([p(v),p(f[v])]);return x}case Ec:return c([d,f.toISOString()],f);case Cc:{const{source:b,flags:x}=f;return c([d,{source:b,flags:x}],f)}case Tc:{const b=[],x=c([d,b],f);for(const[v,k]of f)(l||!(Pr(wi(v))||Pr(wi(k))))&&b.push([p(v),p(k)]);return x}case zc:{const b=[],x=c([d,b],f);for(const v of f)(l||!Pr(wi(v)))&&b.push(p(v));return x}}const{message:h}=f;return c([d,{name:m,message:h}],f)};return p},hm=(l,{json:i,lossy:r}={})=>{const u=[];return Hv(!(i||r),!!i,new Map,u)(l),u},ru=typeof structuredClone=="function"?(l,i)=>i&&("json"in i||"lossy"in i)?dm(hm(l,i)):structuredClone(l):(l,i)=>dm(hm(l,i));function qv(l,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function Yv(l,i){return"Back to reference "+(l+1)+(i>1?"-"+i:"")}function Gv(l){const i=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",r=l.options.footnoteBackContent||qv,u=l.options.footnoteBackLabel||Yv,c=l.options.footnoteLabel||"Footnotes",p=l.options.footnoteLabelTagName||"h2",f=l.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let m=-1;for(;++m<l.footnoteOrder.length;){const h=l.footnoteById.get(l.footnoteOrder[m]);if(!h)continue;const b=l.all(h),x=String(h.identifier).toUpperCase(),v=Ea(x.toLowerCase());let k=0;const z=[],q=l.footnoteCounts.get(x);for(;q!==void 0&&++k<=q;){z.length>0&&z.push({type:"text",value:" "});let F=typeof r=="string"?r:r(m,k);typeof F=="string"&&(F={type:"text",value:F}),z.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+v+(k>1?"-"+k:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(m,k),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}const I=b[b.length-1];if(I&&I.type==="element"&&I.tagName==="p"){const F=I.children[I.children.length-1];F&&F.type==="text"?F.value+=" ":I.children.push({type:"text",value:" "}),I.children.push(...z)}else b.push(...z);const D={type:"element",tagName:"li",properties:{id:i+"fn-"+v},children:l.wrap(b,!0)};l.patch(h,D),d.push(D)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:p,properties:{...ru(f),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:l.wrap(d,!0)},{type:"text",value:`
`}]}}const pu=(function(l){if(l==null)return Qv;if(typeof l=="function")return du(l);if(typeof l=="object")return Array.isArray(l)?Vv(l):Xv(l);if(typeof l=="string")return Iv(l);throw new Error("Expected function, string, or object as test")});function Vv(l){const i=[];let r=-1;for(;++r<l.length;)i[r]=pu(l[r]);return du(u);function u(...c){let p=-1;for(;++p<i.length;)if(i[p].apply(this,c))return!0;return!1}}function Xv(l){const i=l;return du(r);function r(u){const c=u;let p;for(p in l)if(c[p]!==i[p])return!1;return!0}}function Iv(l){return du(i);function i(r){return r&&r.type===l}}function du(l){return i;function i(r,u,c){return!!(Zv(r)&&l.call(this,r,typeof u=="number"?u:void 0,c||void 0))}}function Qv(){return!0}function Zv(l){return l!==null&&typeof l=="object"&&"type"in l}const hg=[],Fv=!0,oc=!1,Kv="skip";function mg(l,i,r,u){let c;typeof i=="function"&&typeof r!="function"?(u=r,r=i):c=i;const p=pu(c),f=u?-1:1;d(l,void 0,[])();function d(m,h,b){const x=m&&typeof m=="object"?m:{};if(typeof x.type=="string"){const k=typeof x.tagName=="string"?x.tagName:typeof x.name=="string"?x.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(m.type+(k?"<"+k+">":""))+")"})}return v;function v(){let k=hg,z,q,I;if((!i||p(m,h,b[b.length-1]||void 0))&&(k=Jv(r(m,b)),k[0]===oc))return k;if("children"in m&&m.children){const D=m;if(D.children&&k[0]!==Kv)for(q=(u?D.children.length:-1)+f,I=b.concat(D);q>-1&&q<D.children.length;){const F=D.children[q];if(z=d(F,q,I)(),z[0]===oc)return z;q=typeof z[1]=="number"?z[1]:q+f}}return k}}}function Jv(l){return Array.isArray(l)?l:typeof l=="number"?[Fv,l]:l==null?hg:[l]}function jc(l,i,r,u){let c,p,f;typeof i=="function"&&typeof r!="function"?(p=void 0,f=i,c=r):(p=i,f=r,c=u),mg(l,p,d,c);function d(m,h){const b=h[h.length-1],x=b?b.children.indexOf(m):void 0;return f(m,x,b)}}const sc={}.hasOwnProperty,$v={};function Wv(l,i){const r=i||$v,u=new Map,c=new Map,p=new Map,f={...Lv,...r.handlers},d={all:h,applyData:e2,definitionById:u,footnoteById:c,footnoteCounts:p,footnoteOrder:[],handlers:f,one:m,options:r,patch:Pv,wrap:n2};return jc(l,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const x=b.type==="definition"?u:c,v=String(b.identifier).toUpperCase();x.has(v)||x.set(v,b)}}),d;function m(b,x){const v=b.type,k=d.handlers[v];if(sc.call(d.handlers,v)&&k)return k(d,b,x);if(d.options.passThrough&&d.options.passThrough.includes(v)){if("children"in b){const{children:q,...I}=b,D=ru(I);return D.children=d.all(b),D}return ru(b)}return(d.options.unknownHandler||t2)(d,b,x)}function h(b){const x=[];if("children"in b){const v=b.children;let k=-1;for(;++k<v.length;){const z=d.one(v[k],b);if(z){if(k&&v[k-1].type==="break"&&(!Array.isArray(z)&&z.type==="text"&&(z.value=mm(z.value)),!Array.isArray(z)&&z.type==="element")){const q=z.children[0];q&&q.type==="text"&&(q.value=mm(q.value))}Array.isArray(z)?x.push(...z):x.push(z)}}}return x}}function Pv(l,i){l.position&&(i.position=Yx(l))}function e2(l,i){let r=i;if(l&&l.data){const u=l.data.hName,c=l.data.hChildren,p=l.data.hProperties;if(typeof u=="string")if(r.type==="element")r.tagName=u;else{const f="children"in r?r.children:[r];r={type:"element",tagName:u,properties:{},children:f}}r.type==="element"&&p&&Object.assign(r.properties,ru(p)),"children"in r&&r.children&&c!==null&&c!==void 0&&(r.children=c)}return r}function t2(l,i){const r=i.data||{},u="value"in i&&!(sc.call(r,"hProperties")||sc.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:l.all(i)};return l.patch(i,u),l.applyData(i,u)}function n2(l,i){const r=[];let u=-1;for(i&&r.push({type:"text",value:`
`});++u<l.length;)u&&r.push({type:"text",value:`
`}),r.push(l[u]);return i&&l.length>0&&r.push({type:"text",value:`
`}),r}function mm(l){let i=0,r=l.charCodeAt(i);for(;r===9||r===32;)i++,r=l.charCodeAt(i);return l.slice(i)}function gm(l,i){const r=Wv(l,i),u=r.one(l,void 0),c=Gv(r),p=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&p.children.push({type:"text",value:`
`},c),p}function l2(l,i){return l&&"run"in l?async function(r,u){const c=gm(r,{file:u,...i});await l.run(c,u)}:function(r,u){return gm(r,{file:u,...l||i})}}function xm(l){if(l)throw l}var Ys,ym;function a2(){if(ym)return Ys;ym=1;var l=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(h){return typeof Array.isArray=="function"?Array.isArray(h):i.call(h)==="[object Array]"},p=function(h){if(!h||i.call(h)!=="[object Object]")return!1;var b=l.call(h,"constructor"),x=h.constructor&&h.constructor.prototype&&l.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!b&&!x)return!1;var v;for(v in h);return typeof v>"u"||l.call(h,v)},f=function(h,b){r&&b.name==="__proto__"?r(h,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):h[b.name]=b.newValue},d=function(h,b){if(b==="__proto__")if(l.call(h,b)){if(u)return u(h,b).value}else return;return h[b]};return Ys=function m(){var h,b,x,v,k,z,q=arguments[0],I=1,D=arguments.length,F=!1;for(typeof q=="boolean"&&(F=q,q=arguments[1]||{},I=2),(q==null||typeof q!="object"&&typeof q!="function")&&(q={});I<D;++I)if(h=arguments[I],h!=null)for(b in h)x=d(q,b),v=d(h,b),q!==v&&(F&&v&&(p(v)||(k=c(v)))?(k?(k=!1,z=x&&c(x)?x:[]):z=x&&p(x)?x:{},f(q,{name:b,newValue:m(F,z,v)})):typeof v<"u"&&f(q,{name:b,newValue:v}));return q},Ys}var i2=a2();const Gs=ou(i2);function cc(l){if(typeof l!="object"||l===null)return!1;const i=Object.getPrototypeOf(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in l)&&!(Symbol.iterator in l)}function r2(){const l=[],i={run:r,use:u};return i;function r(...c){let p=-1;const f=c.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);d(null,...c);function d(m,...h){const b=l[++p];let x=-1;if(m){f(m);return}for(;++x<c.length;)(h[x]===null||h[x]===void 0)&&(h[x]=c[x]);c=h,b?u2(b,d)(...h):f(null,...h)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return l.push(c),i}}function u2(l,i){let r;return u;function u(...f){const d=l.length>f.length;let m;d&&f.push(c);try{m=l.apply(this,f)}catch(h){const b=h;if(d&&r)throw b;return c(b)}d||(m&&m.then&&typeof m.then=="function"?m.then(p,c):m instanceof Error?c(m):p(m))}function c(f,...d){r||(r=!0,i(f,...d))}function p(f){c(null,f)}}const cn={basename:o2,dirname:s2,extname:c2,join:f2,sep:"/"};function o2(l,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Ni(l);let r=0,u=-1,c=l.length,p;if(i===void 0||i.length===0||i.length>l.length){for(;c--;)if(l.codePointAt(c)===47){if(p){r=c+1;break}}else u<0&&(p=!0,u=c+1);return u<0?"":l.slice(r,u)}if(i===l)return"";let f=-1,d=i.length-1;for(;c--;)if(l.codePointAt(c)===47){if(p){r=c+1;break}}else f<0&&(p=!0,f=c+1),d>-1&&(l.codePointAt(c)===i.codePointAt(d--)?d<0&&(u=c):(d=-1,u=f));return r===u?u=f:u<0&&(u=l.length),l.slice(r,u)}function s2(l){if(Ni(l),l.length===0)return".";let i=-1,r=l.length,u;for(;--r;)if(l.codePointAt(r)===47){if(u){i=r;break}}else u||(u=!0);return i<0?l.codePointAt(0)===47?"/":".":i===1&&l.codePointAt(0)===47?"//":l.slice(0,i)}function c2(l){Ni(l);let i=l.length,r=-1,u=0,c=-1,p=0,f;for(;i--;){const d=l.codePointAt(i);if(d===47){if(f){u=i+1;break}continue}r<0&&(f=!0,r=i+1),d===46?c<0?c=i:p!==1&&(p=1):c>-1&&(p=-1)}return c<0||r<0||p===0||p===1&&c===r-1&&c===u+1?"":l.slice(c,r)}function f2(...l){let i=-1,r;for(;++i<l.length;)Ni(l[i]),l[i]&&(r=r===void 0?l[i]:r+"/"+l[i]);return r===void 0?".":p2(r)}function p2(l){Ni(l);const i=l.codePointAt(0)===47;let r=d2(l,!i);return r.length===0&&!i&&(r="."),r.length>0&&l.codePointAt(l.length-1)===47&&(r+="/"),i?"/"+r:r}function d2(l,i){let r="",u=0,c=-1,p=0,f=-1,d,m;for(;++f<=l.length;){if(f<l.length)d=l.codePointAt(f);else{if(d===47)break;d=47}if(d===47){if(!(c===f-1||p===1))if(c!==f-1&&p===2){if(r.length<2||u!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(m=r.lastIndexOf("/"),m!==r.length-1){m<0?(r="",u=0):(r=r.slice(0,m),u=r.length-1-r.lastIndexOf("/")),c=f,p=0;continue}}else if(r.length>0){r="",u=0,c=f,p=0;continue}}i&&(r=r.length>0?r+"/..":"..",u=2)}else r.length>0?r+="/"+l.slice(c+1,f):r=l.slice(c+1,f),u=f-c-1;c=f,p=0}else d===46&&p>-1?p++:p=-1}return r}function Ni(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}const h2={cwd:m2};function m2(){return"/"}function fc(l){return!!(l!==null&&typeof l=="object"&&"href"in l&&l.href&&"protocol"in l&&l.protocol&&l.auth===void 0)}function g2(l){if(typeof l=="string")l=new URL(l);else if(!fc(l)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+l+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(l.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return x2(l)}function x2(l){if(l.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const i=l.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const u=i.codePointAt(r+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(i)}const Vs=["history","path","basename","stem","extname","dirname"];class gg{constructor(i){let r;i?fc(i)?r={path:i}:typeof i=="string"||y2(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":h2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Vs.length;){const p=Vs[u];p in r&&r[p]!==void 0&&r[p]!==null&&(this[p]=p==="history"?[...r[p]]:r[p])}let c;for(c in r)Vs.includes(c)||(this[c]=r[c])}get basename(){return typeof this.path=="string"?cn.basename(this.path):void 0}set basename(i){Is(i,"basename"),Xs(i,"basename"),this.path=cn.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?cn.dirname(this.path):void 0}set dirname(i){bm(this.basename,"dirname"),this.path=cn.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?cn.extname(this.path):void 0}set extname(i){if(Xs(i,"extname"),bm(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=cn.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){fc(i)&&(i=g2(i)),Is(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?cn.basename(this.path,this.extname):void 0}set stem(i){Is(i,"stem"),Xs(i,"stem"),this.path=cn.join(this.dirname||"",i+(this.extname||""))}fail(i,r,u){const c=this.message(i,r,u);throw c.fatal=!0,c}info(i,r,u){const c=this.message(i,r,u);return c.fatal=void 0,c}message(i,r,u){const c=new xt(i,r,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function Xs(l,i){if(l&&l.includes(cn.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+cn.sep+"`")}function Is(l,i){if(!l)throw new Error("`"+i+"` cannot be empty")}function bm(l,i){if(!l)throw new Error("Setting `"+i+"` requires `path` to be set too")}function y2(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const b2=(function(l){const u=this.constructor.prototype,c=u[l],p=function(){return c.apply(p,arguments)};return Object.setPrototypeOf(p,u),p}),v2={}.hasOwnProperty;class Ac extends b2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=r2()}copy(){const i=new Ac;let r=-1;for(;++r<this.attachers.length;){const u=this.attachers[r];i.use(...u)}return i.data(Gs(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?(Fs("data",this.frozen),this.namespace[i]=r,this):v2.call(this.namespace,i)&&this.namespace[i]||void 0:i?(Fs("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=r.call(i,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=eu(i),u=this.parser||this.Parser;return Qs("parse",u),u(String(r),r)}process(i,r){const u=this;return this.freeze(),Qs("process",this.parser||this.Parser),Zs("process",this.compiler||this.Compiler),r?c(void 0,r):new Promise(c);function c(p,f){const d=eu(i),m=u.parse(d);u.run(m,d,function(b,x,v){if(b||!x||!v)return h(b);const k=x,z=u.stringify(k,v);w2(z)?v.value=z:v.result=z,h(b,v)});function h(b,x){b||!x?f(b):p?p(x):r(void 0,x)}}}processSync(i){let r=!1,u;return this.freeze(),Qs("processSync",this.parser||this.Parser),Zs("processSync",this.compiler||this.Compiler),this.process(i,c),Sm("processSync","process",r),u;function c(p,f){r=!0,xm(p),u=f}}run(i,r,u){vm(i),this.freeze();const c=this.transformers;return!u&&typeof r=="function"&&(u=r,r=void 0),u?p(void 0,u):new Promise(p);function p(f,d){const m=eu(r);c.run(i,m,h);function h(b,x,v){const k=x||i;b?d(b):f?f(k):u(void 0,k,v)}}}runSync(i,r){let u=!1,c;return this.run(i,r,p),Sm("runSync","run",u),c;function p(f,d){xm(f),c=d,u=!0}}stringify(i,r){this.freeze();const u=eu(r),c=this.compiler||this.Compiler;return Zs("stringify",c),vm(i),c(i,u)}use(i,...r){const u=this.attachers,c=this.namespace;if(Fs("use",this.frozen),i!=null)if(typeof i=="function")m(i,r);else if(typeof i=="object")Array.isArray(i)?d(i):f(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function p(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[b,...x]=h;m(b,x)}else f(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function f(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(h.plugins),h.settings&&(c.settings=Gs(!0,c.settings,h.settings))}function d(h){let b=-1;if(h!=null)if(Array.isArray(h))for(;++b<h.length;){const x=h[b];p(x)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,b){let x=-1,v=-1;for(;++x<u.length;)if(u[x][0]===h){v=x;break}if(v===-1)u.push([h,...b]);else if(b.length>0){let[k,...z]=b;const q=u[v][1];cc(q)&&cc(k)&&(k=Gs(!0,q,k)),u[v]=[h,k,...z]}}}}const S2=new Ac().freeze();function Qs(l,i){if(typeof i!="function")throw new TypeError("Cannot `"+l+"` without `parser`")}function Zs(l,i){if(typeof i!="function")throw new TypeError("Cannot `"+l+"` without `compiler`")}function Fs(l,i){if(i)throw new Error("Cannot call `"+l+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function vm(l){if(!cc(l)||typeof l.type!="string")throw new TypeError("Expected node, got `"+l+"`")}function Sm(l,i,r){if(!r)throw new Error("`"+l+"` finished async. Use `"+i+"` instead")}function eu(l){return k2(l)?l:new gg(l)}function k2(l){return!!(l&&typeof l=="object"&&"message"in l&&"messages"in l)}function w2(l){return typeof l=="string"||E2(l)}function E2(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const C2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",km=[],wm={allowDangerousHtml:!0},T2=/^(https?|ircs?|mailto|xmpp)$/i,z2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function j2(l){const i=A2(l),r=M2(l);return D2(i.runSync(i.parse(r),r),l)}function A2(l){const i=l.rehypePlugins||km,r=l.remarkPlugins||km,u=l.remarkRehypeOptions?{...l.remarkRehypeOptions,...wm}:wm;return S2().use(sv).use(r).use(l2,u).use(i)}function M2(l){const i=l.children||"",r=new gg;return typeof i=="string"&&(r.value=i),r}function D2(l,i){const r=i.allowedElements,u=i.allowElement,c=i.components,p=i.disallowedElements,f=i.skipHtml,d=i.unwrapDisallowed,m=i.urlTransform||N2;for(const b of z2)Object.hasOwn(i,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+C2+b.id,void 0);return jc(l,h),Qx(l,{Fragment:y.Fragment,components:c,ignoreInvalidStyle:!0,jsx:y.jsx,jsxs:y.jsxs,passKeys:!0,passNode:!0});function h(b,x,v){if(b.type==="raw"&&v&&typeof x=="number")return f?v.children.splice(x,1):v.children[x]={type:"text",value:b.value},x;if(b.type==="element"){let k;for(k in Us)if(Object.hasOwn(Us,k)&&Object.hasOwn(b.properties,k)){const z=b.properties[k],q=Us[k];(q===null||q.includes(b.tagName))&&(b.properties[k]=m(String(z||""),k,b))}}if(b.type==="element"){let k=r?!r.includes(b.tagName):p?p.includes(b.tagName):!1;if(!k&&u&&typeof x=="number"&&(k=!u(b,x,v)),k&&v&&typeof x=="number")return d&&b.children?v.children.splice(x,1,...b.children):v.children.splice(x,1),x}}}function N2(l){const i=l.indexOf(":"),r=l.indexOf("?"),u=l.indexOf("#"),c=l.indexOf("/");return i===-1||c!==-1&&i>c||r!==-1&&i>r||u!==-1&&i>u||T2.test(l.slice(0,i))?l:""}function Em(l,i){const r=String(l);if(typeof i!="string")throw new TypeError("Expected character");let u=0,c=r.indexOf(i);for(;c!==-1;)u++,c=r.indexOf(i,c+i.length);return u}function _2(l){if(typeof l!="string")throw new TypeError("Expected a string");return l.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function O2(l,i,r){const c=pu((r||{}).ignore||[]),p=L2(i);let f=-1;for(;++f<p.length;)mg(l,"text",d);function d(h,b){let x=-1,v;for(;++x<b.length;){const k=b[x],z=v?v.children:void 0;if(c(k,z?z.indexOf(k):void 0,v))return;v=k}if(v)return m(h,b)}function m(h,b){const x=b[b.length-1],v=p[f][0],k=p[f][1];let z=0;const I=x.children.indexOf(h);let D=!1,F=[];v.lastIndex=0;let H=v.exec(h.value);for(;H;){const ae=H.index,le={index:H.index,input:H.input,stack:[...b,h]};let B=k(...H,le);if(typeof B=="string"&&(B=B.length>0?{type:"text",value:B}:void 0),B===!1?v.lastIndex=ae+1:(z!==ae&&F.push({type:"text",value:h.value.slice(z,ae)}),Array.isArray(B)?F.push(...B):B&&F.push(B),z=ae+H[0].length,D=!0),!v.global)break;H=v.exec(h.value)}return D?(z<h.value.length&&F.push({type:"text",value:h.value.slice(z)}),x.children.splice(I,1,...F)):F=[h],I+F.length}}function L2(l){const i=[];if(!Array.isArray(l))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!l[0]||Array.isArray(l[0])?l:[l];let u=-1;for(;++u<r.length;){const c=r[u];i.push([R2(c[0]),B2(c[1])])}return i}function R2(l){return typeof l=="string"?new RegExp(_2(l),"g"):l}function B2(l){return typeof l=="function"?l:function(){return l}}const Ks="phrasing",Js=["autolink","link","image","label"];function U2(){return{transforms:[I2],enter:{literalAutolink:q2,literalAutolinkEmail:$s,literalAutolinkHttp:$s,literalAutolinkWww:$s},exit:{literalAutolink:X2,literalAutolinkEmail:V2,literalAutolinkHttp:Y2,literalAutolinkWww:G2}}}function H2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ks,notInConstruct:Js},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ks,notInConstruct:Js},{character:":",before:"[ps]",after:"\\/",inConstruct:Ks,notInConstruct:Js}]}}function q2(l){this.enter({type:"link",title:null,url:"",children:[]},l)}function $s(l){this.config.enter.autolinkProtocol.call(this,l)}function Y2(l){this.config.exit.autolinkProtocol.call(this,l)}function G2(l){this.config.exit.data.call(this,l);const i=this.stack[this.stack.length-1];i.type,i.url="http://"+this.sliceSerialize(l)}function V2(l){this.config.exit.autolinkEmail.call(this,l)}function X2(l){this.exit(l)}function I2(l){O2(l,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Q2],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Z2]],{ignore:["link","linkReference"]})}function Q2(l,i,r,u,c){let p="";if(!xg(c)||(/^w/i.test(i)&&(r=i+r,i="",p="http://"),!F2(r)))return!1;const f=K2(r+u);if(!f[0])return!1;const d={type:"link",title:null,url:p+i+f[0],children:[{type:"text",value:i+f[0]}]};return f[1]?[d,{type:"text",value:f[1]}]:d}function Z2(l,i,r,u){return!xg(u,!0)||/[-\d_]$/.test(r)?!1:{type:"link",title:null,url:"mailto:"+i+"@"+r,children:[{type:"text",value:i+"@"+r}]}}function F2(l){const i=l.split(".");return!(i.length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2])))}function K2(l){const i=/[!"&'),.:;<>?\]}]+$/.exec(l);if(!i)return[l,void 0];l=l.slice(0,i.index);let r=i[0],u=r.indexOf(")");const c=Em(l,"(");let p=Em(l,")");for(;u!==-1&&c>p;)l+=r.slice(0,u+1),r=r.slice(u+1),u=r.indexOf(")"),p++;return[l,r]}function xg(l,i){const r=l.input.charCodeAt(l.index-1);return(l.index===0||Tl(r)||su(r))&&(!i||r!==47)}yg.peek=aS;function J2(){this.buffer()}function $2(l){this.enter({type:"footnoteReference",identifier:"",label:""},l)}function W2(){this.buffer()}function P2(l){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},l)}function eS(l){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=an(this.sliceSerialize(l)).toLowerCase(),r.label=i}function tS(l){this.exit(l)}function nS(l){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=an(this.sliceSerialize(l)).toLowerCase(),r.label=i}function lS(l){this.exit(l)}function aS(){return"["}function yg(l,i,r,u){const c=r.createTracker(u);let p=c.move("[^");const f=r.enter("footnoteReference"),d=r.enter("reference");return p+=c.move(r.safe(r.associationId(l),{after:"]",before:p})),d(),f(),p+=c.move("]"),p}function iS(){return{enter:{gfmFootnoteCallString:J2,gfmFootnoteCall:$2,gfmFootnoteDefinitionLabelString:W2,gfmFootnoteDefinition:P2},exit:{gfmFootnoteCallString:eS,gfmFootnoteCall:tS,gfmFootnoteDefinitionLabelString:nS,gfmFootnoteDefinition:lS}}}function rS(l){let i=!1;return l&&l.firstLineBlank&&(i=!0),{handlers:{footnoteDefinition:r,footnoteReference:yg},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function r(u,c,p,f){const d=p.createTracker(f);let m=d.move("[^");const h=p.enter("footnoteDefinition"),b=p.enter("label");return m+=d.move(p.safe(p.associationId(u),{before:m,after:"]"})),b(),m+=d.move("]:"),u.children&&u.children.length>0&&(d.shift(4),m+=d.move((i?`
`:" ")+p.indentLines(p.containerFlow(u,d.current()),i?bg:uS))),h(),m}}function uS(l,i,r){return i===0?l:bg(l,i,r)}function bg(l,i,r){return(r?"":"    ")+l}const oS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];vg.peek=dS;function sS(){return{canContainEols:["delete"],enter:{strikethrough:fS},exit:{strikethrough:pS}}}function cS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:oS}],handlers:{delete:vg}}}function fS(l){this.enter({type:"delete",children:[]},l)}function pS(l){this.exit(l)}function vg(l,i,r,u){const c=r.createTracker(u),p=r.enter("strikethrough");let f=c.move("~~");return f+=r.containerPhrasing(l,{...c.current(),before:f,after:"~"}),f+=c.move("~~"),p(),f}function dS(){return"~"}function hS(l){return l.length}function mS(l,i){const r=i||{},u=(r.align||[]).concat(),c=r.stringLength||hS,p=[],f=[],d=[],m=[];let h=0,b=-1;for(;++b<l.length;){const q=[],I=[];let D=-1;for(l[b].length>h&&(h=l[b].length);++D<l[b].length;){const F=gS(l[b][D]);if(r.alignDelimiters!==!1){const H=c(F);I[D]=H,(m[D]===void 0||H>m[D])&&(m[D]=H)}q.push(F)}f[b]=q,d[b]=I}let x=-1;if(typeof u=="object"&&"length"in u)for(;++x<h;)p[x]=Cm(u[x]);else{const q=Cm(u);for(;++x<h;)p[x]=q}x=-1;const v=[],k=[];for(;++x<h;){const q=p[x];let I="",D="";q===99?(I=":",D=":"):q===108?I=":":q===114&&(D=":");let F=r.alignDelimiters===!1?1:Math.max(1,m[x]-I.length-D.length);const H=I+"-".repeat(F)+D;r.alignDelimiters!==!1&&(F=I.length+F+D.length,F>m[x]&&(m[x]=F),k[x]=F),v[x]=H}f.splice(1,0,v),d.splice(1,0,k),b=-1;const z=[];for(;++b<f.length;){const q=f[b],I=d[b];x=-1;const D=[];for(;++x<h;){const F=q[x]||"";let H="",ae="";if(r.alignDelimiters!==!1){const le=m[x]-(I[x]||0),B=p[x];B===114?H=" ".repeat(le):B===99?le%2?(H=" ".repeat(le/2+.5),ae=" ".repeat(le/2-.5)):(H=" ".repeat(le/2),ae=H):ae=" ".repeat(le)}r.delimiterStart!==!1&&!x&&D.push("|"),r.padding!==!1&&!(r.alignDelimiters===!1&&F==="")&&(r.delimiterStart!==!1||x)&&D.push(" "),r.alignDelimiters!==!1&&D.push(H),D.push(F),r.alignDelimiters!==!1&&D.push(ae),r.padding!==!1&&D.push(" "),(r.delimiterEnd!==!1||x!==h-1)&&D.push("|")}z.push(r.delimiterEnd===!1?D.join("").replace(/ +$/,""):D.join(""))}return z.join(`
`)}function gS(l){return l==null?"":String(l)}function Cm(l){const i=typeof l=="string"?l.codePointAt(0):0;return i===67||i===99?99:i===76||i===108?108:i===82||i===114?114:0}function xS(l,i,r,u){const c=r.enter("blockquote"),p=r.createTracker(u);p.move("> "),p.shift(2);const f=r.indentLines(r.containerFlow(l,p.current()),yS);return c(),f}function yS(l,i,r){return">"+(r?"":" ")+l}function bS(l,i){return Tm(l,i.inConstruct,!0)&&!Tm(l,i.notInConstruct,!1)}function Tm(l,i,r){if(typeof i=="string"&&(i=[i]),!i||i.length===0)return r;let u=-1;for(;++u<i.length;)if(l.includes(i[u]))return!0;return!1}function zm(l,i,r,u){let c=-1;for(;++c<r.unsafe.length;)if(r.unsafe[c].character===`
`&&bS(r.stack,r.unsafe[c]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function vS(l,i){const r=String(l);let u=r.indexOf(i),c=u,p=0,f=0;if(typeof i!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===c?++p>f&&(f=p):p=1,c=u+i.length,u=r.indexOf(i,c);return f}function SS(l,i){return!!(i.options.fences===!1&&l.value&&!l.lang&&/[^ \r\n]/.test(l.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(l.value))}function kS(l){const i=l.options.fence||"`";if(i!=="`"&&i!=="~")throw new Error("Cannot serialize code with `"+i+"` for `options.fence`, expected `` ` `` or `~`");return i}function wS(l,i,r,u){const c=kS(r),p=l.value||"",f=c==="`"?"GraveAccent":"Tilde";if(SS(l,r)){const x=r.enter("codeIndented"),v=r.indentLines(p,ES);return x(),v}const d=r.createTracker(u),m=c.repeat(Math.max(vS(p,c)+1,3)),h=r.enter("codeFenced");let b=d.move(m);if(l.lang){const x=r.enter(`codeFencedLang${f}`);b+=d.move(r.safe(l.lang,{before:b,after:" ",encode:["`"],...d.current()})),x()}if(l.lang&&l.meta){const x=r.enter(`codeFencedMeta${f}`);b+=d.move(" "),b+=d.move(r.safe(l.meta,{before:b,after:`
`,encode:["`"],...d.current()})),x()}return b+=d.move(`
`),p&&(b+=d.move(p+`
`)),b+=d.move(m),h(),b}function ES(l,i,r){return(r?"":"    ")+l}function Mc(l){const i=l.options.quote||'"';if(i!=='"'&&i!=="'")throw new Error("Cannot serialize title with `"+i+"` for `options.quote`, expected `\"`, or `'`");return i}function CS(l,i,r,u){const c=Mc(r),p=c==='"'?"Quote":"Apostrophe",f=r.enter("definition");let d=r.enter("label");const m=r.createTracker(u);let h=m.move("[");return h+=m.move(r.safe(r.associationId(l),{before:h,after:"]",...m.current()})),h+=m.move("]: "),d(),!l.url||/[\0- \u007F]/.test(l.url)?(d=r.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(r.safe(l.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(d=r.enter("destinationRaw"),h+=m.move(r.safe(l.url,{before:h,after:l.title?" ":`
`,...m.current()}))),d(),l.title&&(d=r.enter(`title${p}`),h+=m.move(" "+c),h+=m.move(r.safe(l.title,{before:h,after:c,...m.current()})),h+=m.move(c),d()),f(),h}function TS(l){const i=l.options.emphasis||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize emphasis with `"+i+"` for `options.emphasis`, expected `*`, or `_`");return i}function Ai(l){return"&#x"+l.toString(16).toUpperCase()+";"}function uu(l,i,r){const u=ka(l),c=ka(i);return u===void 0?c===void 0?r==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Sg.peek=zS;function Sg(l,i,r,u){const c=TS(r),p=r.enter("emphasis"),f=r.createTracker(u),d=f.move(c);let m=f.move(r.containerPhrasing(l,{after:c,before:d,...f.current()}));const h=m.charCodeAt(0),b=uu(u.before.charCodeAt(u.before.length-1),h,c);b.inside&&(m=Ai(h)+m.slice(1));const x=m.charCodeAt(m.length-1),v=uu(u.after.charCodeAt(0),x,c);v.inside&&(m=m.slice(0,-1)+Ai(x));const k=f.move(c);return p(),r.attentionEncodeSurroundingInfo={after:v.outside,before:b.outside},d+m+k}function zS(l,i,r){return r.options.emphasis||"*"}function jS(l,i){let r=!1;return jc(l,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return r=!0,oc}),!!((!l.depth||l.depth<3)&&Sc(l)&&(i.options.setext||r))}function AS(l,i,r,u){const c=Math.max(Math.min(6,l.depth||1),1),p=r.createTracker(u);if(jS(l,r)){const b=r.enter("headingSetext"),x=r.enter("phrasing"),v=r.containerPhrasing(l,{...p.current(),before:`
`,after:`
`});return x(),b(),v+`
`+(c===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const f="#".repeat(c),d=r.enter("headingAtx"),m=r.enter("phrasing");p.move(f+" ");let h=r.containerPhrasing(l,{before:"# ",after:`
`,...p.current()});return/^[\t ]/.test(h)&&(h=Ai(h.charCodeAt(0))+h.slice(1)),h=h?f+" "+h:f,r.options.closeAtx&&(h+=" "+f),m(),d(),h}kg.peek=MS;function kg(l){return l.value||""}function MS(){return"<"}wg.peek=DS;function wg(l,i,r,u){const c=Mc(r),p=c==='"'?"Quote":"Apostrophe",f=r.enter("image");let d=r.enter("label");const m=r.createTracker(u);let h=m.move("![");return h+=m.move(r.safe(l.alt,{before:h,after:"]",...m.current()})),h+=m.move("]("),d(),!l.url&&l.title||/[\0- \u007F]/.test(l.url)?(d=r.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(r.safe(l.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(d=r.enter("destinationRaw"),h+=m.move(r.safe(l.url,{before:h,after:l.title?" ":")",...m.current()}))),d(),l.title&&(d=r.enter(`title${p}`),h+=m.move(" "+c),h+=m.move(r.safe(l.title,{before:h,after:c,...m.current()})),h+=m.move(c),d()),h+=m.move(")"),f(),h}function DS(){return"!"}Eg.peek=NS;function Eg(l,i,r,u){const c=l.referenceType,p=r.enter("imageReference");let f=r.enter("label");const d=r.createTracker(u);let m=d.move("![");const h=r.safe(l.alt,{before:m,after:"]",...d.current()});m+=d.move(h+"]["),f();const b=r.stack;r.stack=[],f=r.enter("reference");const x=r.safe(r.associationId(l),{before:m,after:"]",...d.current()});return f(),r.stack=b,p(),c==="full"||!h||h!==x?m+=d.move(x+"]"):c==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function NS(){return"!"}Cg.peek=_S;function Cg(l,i,r){let u=l.value||"",c="`",p=-1;for(;new RegExp("(^|[^`])"+c+"([^`]|$)").test(u);)c+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++p<r.unsafe.length;){const f=r.unsafe[p],d=r.compilePattern(f);let m;if(f.atBreak)for(;m=d.exec(u);){let h=m.index;u.charCodeAt(h)===10&&u.charCodeAt(h-1)===13&&h--,u=u.slice(0,h)+" "+u.slice(m.index+1)}}return c+u+c}function _S(){return"`"}function Tg(l,i){const r=Sc(l);return!!(!i.options.resourceLink&&l.url&&!l.title&&l.children&&l.children.length===1&&l.children[0].type==="text"&&(r===l.url||"mailto:"+r===l.url)&&/^[a-z][a-z+.-]+:/i.test(l.url)&&!/[\0- <>\u007F]/.test(l.url))}zg.peek=OS;function zg(l,i,r,u){const c=Mc(r),p=c==='"'?"Quote":"Apostrophe",f=r.createTracker(u);let d,m;if(Tg(l,r)){const b=r.stack;r.stack=[],d=r.enter("autolink");let x=f.move("<");return x+=f.move(r.containerPhrasing(l,{before:x,after:">",...f.current()})),x+=f.move(">"),d(),r.stack=b,x}d=r.enter("link"),m=r.enter("label");let h=f.move("[");return h+=f.move(r.containerPhrasing(l,{before:h,after:"](",...f.current()})),h+=f.move("]("),m(),!l.url&&l.title||/[\0- \u007F]/.test(l.url)?(m=r.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(r.safe(l.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(m=r.enter("destinationRaw"),h+=f.move(r.safe(l.url,{before:h,after:l.title?" ":")",...f.current()}))),m(),l.title&&(m=r.enter(`title${p}`),h+=f.move(" "+c),h+=f.move(r.safe(l.title,{before:h,after:c,...f.current()})),h+=f.move(c),m()),h+=f.move(")"),d(),h}function OS(l,i,r){return Tg(l,r)?"<":"["}jg.peek=LS;function jg(l,i,r,u){const c=l.referenceType,p=r.enter("linkReference");let f=r.enter("label");const d=r.createTracker(u);let m=d.move("[");const h=r.containerPhrasing(l,{before:m,after:"]",...d.current()});m+=d.move(h+"]["),f();const b=r.stack;r.stack=[],f=r.enter("reference");const x=r.safe(r.associationId(l),{before:m,after:"]",...d.current()});return f(),r.stack=b,p(),c==="full"||!h||h!==x?m+=d.move(x+"]"):c==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function LS(){return"["}function Dc(l){const i=l.options.bullet||"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bullet`, expected `*`, `+`, or `-`");return i}function RS(l){const i=Dc(l),r=l.options.bulletOther;if(!r)return i==="*"?"-":"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(r===i)throw new Error("Expected `bullet` (`"+i+"`) and `bulletOther` (`"+r+"`) to be different");return r}function BS(l){const i=l.options.bulletOrdered||".";if(i!=="."&&i!==")")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOrdered`, expected `.` or `)`");return i}function Ag(l){const i=l.options.rule||"*";if(i!=="*"&&i!=="-"&&i!=="_")throw new Error("Cannot serialize rules with `"+i+"` for `options.rule`, expected `*`, `-`, or `_`");return i}function US(l,i,r,u){const c=r.enter("list"),p=r.bulletCurrent;let f=l.ordered?BS(r):Dc(r);const d=l.ordered?f==="."?")":".":RS(r);let m=i&&r.bulletLastUsed?f===r.bulletLastUsed:!1;if(!l.ordered){const b=l.children?l.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&r.stack[r.stack.length-1]==="list"&&r.stack[r.stack.length-2]==="listItem"&&r.stack[r.stack.length-3]==="list"&&r.stack[r.stack.length-4]==="listItem"&&r.indexStack[r.indexStack.length-1]===0&&r.indexStack[r.indexStack.length-2]===0&&r.indexStack[r.indexStack.length-3]===0&&(m=!0),Ag(r)===f&&b){let x=-1;for(;++x<l.children.length;){const v=l.children[x];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(f=d),r.bulletCurrent=f;const h=r.containerFlow(l,u);return r.bulletLastUsed=f,r.bulletCurrent=p,c(),h}function HS(l){const i=l.options.listItemIndent||"one";if(i!=="tab"&&i!=="one"&&i!=="mixed")throw new Error("Cannot serialize items with `"+i+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return i}function qS(l,i,r,u){const c=HS(r);let p=r.bulletCurrent||Dc(r);i&&i.type==="list"&&i.ordered&&(p=(typeof i.start=="number"&&i.start>-1?i.start:1)+(r.options.incrementListMarker===!1?0:i.children.indexOf(l))+p);let f=p.length+1;(c==="tab"||c==="mixed"&&(i&&i.type==="list"&&i.spread||l.spread))&&(f=Math.ceil(f/4)*4);const d=r.createTracker(u);d.move(p+" ".repeat(f-p.length)),d.shift(f);const m=r.enter("listItem"),h=r.indentLines(r.containerFlow(l,d.current()),b);return m(),h;function b(x,v,k){return v?(k?"":" ".repeat(f))+x:(k?p:p+" ".repeat(f-p.length))+x}}function YS(l,i,r,u){const c=r.enter("paragraph"),p=r.enter("phrasing"),f=r.containerPhrasing(l,u);return p(),c(),f}const GS=pu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function VS(l,i,r,u){return(l.children.some(function(f){return GS(f)})?r.containerPhrasing:r.containerFlow).call(r,l,u)}function XS(l){const i=l.options.strong||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize strong with `"+i+"` for `options.strong`, expected `*`, or `_`");return i}Mg.peek=IS;function Mg(l,i,r,u){const c=XS(r),p=r.enter("strong"),f=r.createTracker(u),d=f.move(c+c);let m=f.move(r.containerPhrasing(l,{after:c,before:d,...f.current()}));const h=m.charCodeAt(0),b=uu(u.before.charCodeAt(u.before.length-1),h,c);b.inside&&(m=Ai(h)+m.slice(1));const x=m.charCodeAt(m.length-1),v=uu(u.after.charCodeAt(0),x,c);v.inside&&(m=m.slice(0,-1)+Ai(x));const k=f.move(c+c);return p(),r.attentionEncodeSurroundingInfo={after:v.outside,before:b.outside},d+m+k}function IS(l,i,r){return r.options.strong||"*"}function QS(l,i,r,u){return r.safe(l.value,u)}function ZS(l){const i=l.options.ruleRepetition||3;if(i<3)throw new Error("Cannot serialize rules with repetition `"+i+"` for `options.ruleRepetition`, expected `3` or more");return i}function FS(l,i,r){const u=(Ag(r)+(r.options.ruleSpaces?" ":"")).repeat(ZS(r));return r.options.ruleSpaces?u.slice(0,-1):u}const Dg={blockquote:xS,break:zm,code:wS,definition:CS,emphasis:Sg,hardBreak:zm,heading:AS,html:kg,image:wg,imageReference:Eg,inlineCode:Cg,link:zg,linkReference:jg,list:US,listItem:qS,paragraph:YS,root:VS,strong:Mg,text:QS,thematicBreak:FS};function KS(){return{enter:{table:JS,tableData:jm,tableHeader:jm,tableRow:WS},exit:{codeText:PS,table:$S,tableData:Ws,tableHeader:Ws,tableRow:Ws}}}function JS(l){const i=l._align;this.enter({type:"table",align:i.map(function(r){return r==="none"?null:r}),children:[]},l),this.data.inTable=!0}function $S(l){this.exit(l),this.data.inTable=void 0}function WS(l){this.enter({type:"tableRow",children:[]},l)}function Ws(l){this.exit(l)}function jm(l){this.enter({type:"tableCell",children:[]},l)}function PS(l){let i=this.resume();this.data.inTable&&(i=i.replace(/\\([\\|])/g,e4));const r=this.stack[this.stack.length-1];r.type,r.value=i,this.exit(l)}function e4(l,i){return i==="|"?i:l}function t4(l){const i=l||{},r=i.tableCellPadding,u=i.tablePipeAlign,c=i.stringLength,p=r?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:f,tableCell:m,tableRow:d}};function f(k,z,q,I){return h(b(k,q,I),k.align)}function d(k,z,q,I){const D=x(k,q,I),F=h([D]);return F.slice(0,F.indexOf(`
`))}function m(k,z,q,I){const D=q.enter("tableCell"),F=q.enter("phrasing"),H=q.containerPhrasing(k,{...I,before:p,after:p});return F(),D(),H}function h(k,z){return mS(k,{align:z,alignDelimiters:u,padding:r,stringLength:c})}function b(k,z,q){const I=k.children;let D=-1;const F=[],H=z.enter("table");for(;++D<I.length;)F[D]=x(I[D],z,q);return H(),F}function x(k,z,q){const I=k.children;let D=-1;const F=[],H=z.enter("tableRow");for(;++D<I.length;)F[D]=m(I[D],k,z,q);return H(),F}function v(k,z,q){let I=Dg.inlineCode(k,z,q);return q.stack.includes("tableCell")&&(I=I.replace(/\|/g,"\\$&")),I}}function n4(){return{exit:{taskListCheckValueChecked:Am,taskListCheckValueUnchecked:Am,paragraph:a4}}}function l4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:i4}}}function Am(l){const i=this.stack[this.stack.length-2];i.type,i.checked=l.type==="taskListCheckValueChecked"}function a4(l){const i=this.stack[this.stack.length-2];if(i&&i.type==="listItem"&&typeof i.checked=="boolean"){const r=this.stack[this.stack.length-1];r.type;const u=r.children[0];if(u&&u.type==="text"){const c=i.children;let p=-1,f;for(;++p<c.length;){const d=c[p];if(d.type==="paragraph"){f=d;break}}f===r&&(u.value=u.value.slice(1),u.value.length===0?r.children.shift():r.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,r.position.start=Object.assign({},u.position.start)))}}this.exit(l)}function i4(l,i,r,u){const c=l.children[0],p=typeof l.checked=="boolean"&&c&&c.type==="paragraph",f="["+(l.checked?"x":" ")+"] ",d=r.createTracker(u);p&&d.move(f);let m=Dg.listItem(l,i,r,{...u,...d.current()});return p&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),m;function h(b){return b+f}}function r4(){return[U2(),iS(),sS(),KS(),n4()]}function u4(l){return{extensions:[H2(),rS(l),cS(),t4(l),l4()]}}const o4={tokenize:h4,partial:!0},Ng={tokenize:m4,partial:!0},_g={tokenize:g4,partial:!0},Og={tokenize:x4,partial:!0},s4={tokenize:y4,partial:!0},Lg={name:"wwwAutolink",tokenize:p4,previous:Bg},Rg={name:"protocolAutolink",tokenize:d4,previous:Ug},_n={name:"emailAutolink",tokenize:f4,previous:Hg},fn={};function c4(){return{text:fn}}let Cl=48;for(;Cl<123;)fn[Cl]=_n,Cl++,Cl===58?Cl=65:Cl===91&&(Cl=97);fn[43]=_n;fn[45]=_n;fn[46]=_n;fn[95]=_n;fn[72]=[_n,Rg];fn[104]=[_n,Rg];fn[87]=[_n,Lg];fn[119]=[_n,Lg];function f4(l,i,r){const u=this;let c,p;return f;function f(x){return!pc(x)||!Hg.call(u,u.previous)||Nc(u.events)?r(x):(l.enter("literalAutolink"),l.enter("literalAutolinkEmail"),d(x))}function d(x){return pc(x)?(l.consume(x),d):x===64?(l.consume(x),m):r(x)}function m(x){return x===46?l.check(s4,b,h)(x):x===45||x===95||gt(x)?(p=!0,l.consume(x),m):b(x)}function h(x){return l.consume(x),c=!0,m}function b(x){return p&&c&&St(u.previous)?(l.exit("literalAutolinkEmail"),l.exit("literalAutolink"),i(x)):r(x)}}function p4(l,i,r){const u=this;return c;function c(f){return f!==87&&f!==119||!Bg.call(u,u.previous)||Nc(u.events)?r(f):(l.enter("literalAutolink"),l.enter("literalAutolinkWww"),l.check(o4,l.attempt(Ng,l.attempt(_g,p),r),r)(f))}function p(f){return l.exit("literalAutolinkWww"),l.exit("literalAutolink"),i(f)}}function d4(l,i,r){const u=this;let c="",p=!1;return f;function f(x){return(x===72||x===104)&&Ug.call(u,u.previous)&&!Nc(u.events)?(l.enter("literalAutolink"),l.enter("literalAutolinkHttp"),c+=String.fromCodePoint(x),l.consume(x),d):r(x)}function d(x){if(St(x)&&c.length<5)return c+=String.fromCodePoint(x),l.consume(x),d;if(x===58){const v=c.toLowerCase();if(v==="http"||v==="https")return l.consume(x),m}return r(x)}function m(x){return x===47?(l.consume(x),p?h:(p=!0,m)):r(x)}function h(x){return x===null||au(x)||Ie(x)||Tl(x)||su(x)?r(x):l.attempt(Ng,l.attempt(_g,b),r)(x)}function b(x){return l.exit("literalAutolinkHttp"),l.exit("literalAutolink"),i(x)}}function h4(l,i,r){let u=0;return c;function c(f){return(f===87||f===119)&&u<3?(u++,l.consume(f),c):f===46&&u===3?(l.consume(f),p):r(f)}function p(f){return f===null?r(f):i(f)}}function m4(l,i,r){let u,c,p;return f;function f(h){return h===46||h===95?l.check(Og,m,d)(h):h===null||Ie(h)||Tl(h)||h!==45&&su(h)?m(h):(p=!0,l.consume(h),f)}function d(h){return h===95?u=!0:(c=u,u=void 0),l.consume(h),f}function m(h){return c||u||!p?r(h):i(h)}}function g4(l,i){let r=0,u=0;return c;function c(f){return f===40?(r++,l.consume(f),c):f===41&&u<r?p(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?l.check(Og,i,p)(f):f===null||Ie(f)||Tl(f)?i(f):(l.consume(f),c)}function p(f){return f===41&&u++,l.consume(f),c}}function x4(l,i,r){return u;function u(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(l.consume(d),u):d===38?(l.consume(d),p):d===93?(l.consume(d),c):d===60||d===null||Ie(d)||Tl(d)?i(d):r(d)}function c(d){return d===null||d===40||d===91||Ie(d)||Tl(d)?i(d):u(d)}function p(d){return St(d)?f(d):r(d)}function f(d){return d===59?(l.consume(d),u):St(d)?(l.consume(d),f):r(d)}}function y4(l,i,r){return u;function u(p){return l.consume(p),c}function c(p){return gt(p)?r(p):i(p)}}function Bg(l){return l===null||l===40||l===42||l===95||l===91||l===93||l===126||Ie(l)}function Ug(l){return!St(l)}function Hg(l){return!(l===47||pc(l))}function pc(l){return l===43||l===45||l===46||l===95||gt(l)}function Nc(l){let i=l.length,r=!1;for(;i--;){const u=l[i][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){r=!0;break}if(u._gfmAutolinkLiteralWalkedInto){r=!1;break}}return l.length>0&&!r&&(l[l.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),r}const b4={tokenize:z4,partial:!0};function v4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:E4,continuation:{tokenize:C4},exit:T4}},text:{91:{name:"gfmFootnoteCall",tokenize:w4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:S4,resolveTo:k4}}}}function S4(l,i,r){const u=this;let c=u.events.length;const p=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;c--;){const m=u.events[c][1];if(m.type==="labelImage"){f=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return d;function d(m){if(!f||!f._balanced)return r(m);const h=an(u.sliceSerialize({start:f.end,end:u.now()}));return h.codePointAt(0)!==94||!p.includes(h.slice(1))?r(m):(l.enter("gfmFootnoteCallLabelMarker"),l.consume(m),l.exit("gfmFootnoteCallLabelMarker"),i(m))}}function k4(l,i){let r=l.length;for(;r--;)if(l[r][1].type==="labelImage"&&l[r][0]==="enter"){l[r][1];break}l[r+1][1].type="data",l[r+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},l[r+3][1].start),end:Object.assign({},l[l.length-1][1].end)},c={type:"gfmFootnoteCallMarker",start:Object.assign({},l[r+3][1].end),end:Object.assign({},l[r+3][1].end)};c.end.column++,c.end.offset++,c.end._bufferIndex++;const p={type:"gfmFootnoteCallString",start:Object.assign({},c.end),end:Object.assign({},l[l.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},p.start),end:Object.assign({},p.end)},d=[l[r+1],l[r+2],["enter",u,i],l[r+3],l[r+4],["enter",c,i],["exit",c,i],["enter",p,i],["enter",f,i],["exit",f,i],["exit",p,i],l[l.length-2],l[l.length-1],["exit",u,i]];return l.splice(r,l.length-r+1,...d),l}function w4(l,i,r){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let p=0,f;return d;function d(x){return l.enter("gfmFootnoteCall"),l.enter("gfmFootnoteCallLabelMarker"),l.consume(x),l.exit("gfmFootnoteCallLabelMarker"),m}function m(x){return x!==94?r(x):(l.enter("gfmFootnoteCallMarker"),l.consume(x),l.exit("gfmFootnoteCallMarker"),l.enter("gfmFootnoteCallString"),l.enter("chunkString").contentType="string",h)}function h(x){if(p>999||x===93&&!f||x===null||x===91||Ie(x))return r(x);if(x===93){l.exit("chunkString");const v=l.exit("gfmFootnoteCallString");return c.includes(an(u.sliceSerialize(v)))?(l.enter("gfmFootnoteCallLabelMarker"),l.consume(x),l.exit("gfmFootnoteCallLabelMarker"),l.exit("gfmFootnoteCall"),i):r(x)}return Ie(x)||(f=!0),p++,l.consume(x),x===92?b:h}function b(x){return x===91||x===92||x===93?(l.consume(x),p++,h):h(x)}}function E4(l,i,r){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let p,f=0,d;return m;function m(z){return l.enter("gfmFootnoteDefinition")._container=!0,l.enter("gfmFootnoteDefinitionLabel"),l.enter("gfmFootnoteDefinitionLabelMarker"),l.consume(z),l.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(z){return z===94?(l.enter("gfmFootnoteDefinitionMarker"),l.consume(z),l.exit("gfmFootnoteDefinitionMarker"),l.enter("gfmFootnoteDefinitionLabelString"),l.enter("chunkString").contentType="string",b):r(z)}function b(z){if(f>999||z===93&&!d||z===null||z===91||Ie(z))return r(z);if(z===93){l.exit("chunkString");const q=l.exit("gfmFootnoteDefinitionLabelString");return p=an(u.sliceSerialize(q)),l.enter("gfmFootnoteDefinitionLabelMarker"),l.consume(z),l.exit("gfmFootnoteDefinitionLabelMarker"),l.exit("gfmFootnoteDefinitionLabel"),v}return Ie(z)||(d=!0),f++,l.consume(z),z===92?x:b}function x(z){return z===91||z===92||z===93?(l.consume(z),f++,b):b(z)}function v(z){return z===58?(l.enter("definitionMarker"),l.consume(z),l.exit("definitionMarker"),c.includes(p)||c.push(p),Me(l,k,"gfmFootnoteDefinitionWhitespace")):r(z)}function k(z){return i(z)}}function C4(l,i,r){return l.check(Di,i,l.attempt(b4,i,r))}function T4(l){l.exit("gfmFootnoteDefinition")}function z4(l,i,r){const u=this;return Me(l,c,"gfmFootnoteDefinitionIndent",5);function c(p){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?i(p):r(p)}}function j4(l){let r=(l||{}).singleTilde;const u={name:"strikethrough",tokenize:p,resolveAll:c};return r==null&&(r=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function c(f,d){let m=-1;for(;++m<f.length;)if(f[m][0]==="enter"&&f[m][1].type==="strikethroughSequenceTemporary"&&f[m][1]._close){let h=m;for(;h--;)if(f[h][0]==="exit"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._open&&f[m][1].end.offset-f[m][1].start.offset===f[h][1].end.offset-f[h][1].start.offset){f[m][1].type="strikethroughSequence",f[h][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[h][1].start),end:Object.assign({},f[m][1].end)},x={type:"strikethroughText",start:Object.assign({},f[h][1].end),end:Object.assign({},f[m][1].start)},v=[["enter",b,d],["enter",f[h][1],d],["exit",f[h][1],d],["enter",x,d]],k=d.parser.constructs.insideSpan.null;k&&Yt(v,v.length,0,cu(k,f.slice(h+1,m),d)),Yt(v,v.length,0,[["exit",x,d],["enter",f[m][1],d],["exit",f[m][1],d],["exit",b,d]]),Yt(f,h-1,m-h+3,v),m=h+v.length-2;break}}for(m=-1;++m<f.length;)f[m][1].type==="strikethroughSequenceTemporary"&&(f[m][1].type="data");return f}function p(f,d,m){const h=this.previous,b=this.events;let x=0;return v;function v(z){return h===126&&b[b.length-1][1].type!=="characterEscape"?m(z):(f.enter("strikethroughSequenceTemporary"),k(z))}function k(z){const q=ka(h);if(z===126)return x>1?m(z):(f.consume(z),x++,k);if(x<2&&!r)return m(z);const I=f.exit("strikethroughSequenceTemporary"),D=ka(z);return I._open=!D||D===2&&!!q,I._close=!q||q===2&&!!D,d(z)}}}class A4{constructor(){this.map=[]}add(i,r,u){M4(this,i,r,u)}consume(i){if(this.map.sort(function(p,f){return p[0]-f[0]}),this.map.length===0)return;let r=this.map.length;const u=[];for(;r>0;)r-=1,u.push(i.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),i.length=this.map[r][0];u.push(i.slice()),i.length=0;let c=u.pop();for(;c;){for(const p of c)i.push(p);c=u.pop()}this.map.length=0}}function M4(l,i,r,u){let c=0;if(!(r===0&&u.length===0)){for(;c<l.map.length;){if(l.map[c][0]===i){l.map[c][1]+=r,l.map[c][2].push(...u);return}c+=1}l.map.push([i,r,u])}}function D4(l,i){let r=!1;const u=[];for(;i<l.length;){const c=l[i];if(r){if(c[0]==="enter")c[1].type==="tableContent"&&u.push(l[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(c[1].type==="tableContent"){if(l[i-1][1].type==="tableDelimiterMarker"){const p=u.length-1;u[p]=u[p]==="left"?"center":"right"}}else if(c[1].type==="tableDelimiterRow")break}else c[0]==="enter"&&c[1].type==="tableDelimiterRow"&&(r=!0);i+=1}return u}function N4(){return{flow:{null:{name:"table",tokenize:_4,resolveAll:O4}}}}function _4(l,i,r){const u=this;let c=0,p=0,f;return d;function d(L){let W=u.events.length-1;for(;W>-1;){const oe=u.events[W][1].type;if(oe==="lineEnding"||oe==="linePrefix")W--;else break}const te=W>-1?u.events[W][1].type:null,Se=te==="tableHead"||te==="tableRow"?B:m;return Se===B&&u.parser.lazy[u.now().line]?r(L):Se(L)}function m(L){return l.enter("tableHead"),l.enter("tableRow"),h(L)}function h(L){return L===124||(f=!0,p+=1),b(L)}function b(L){return L===null?r(L):pe(L)?p>1?(p=0,u.interrupt=!0,l.exit("tableRow"),l.enter("lineEnding"),l.consume(L),l.exit("lineEnding"),k):r(L):Te(L)?Me(l,b,"whitespace")(L):(p+=1,f&&(f=!1,c+=1),L===124?(l.enter("tableCellDivider"),l.consume(L),l.exit("tableCellDivider"),f=!0,b):(l.enter("data"),x(L)))}function x(L){return L===null||L===124||Ie(L)?(l.exit("data"),b(L)):(l.consume(L),L===92?v:x)}function v(L){return L===92||L===124?(l.consume(L),x):x(L)}function k(L){return u.interrupt=!1,u.parser.lazy[u.now().line]?r(L):(l.enter("tableDelimiterRow"),f=!1,Te(L)?Me(l,z,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):z(L))}function z(L){return L===45||L===58?I(L):L===124?(f=!0,l.enter("tableCellDivider"),l.consume(L),l.exit("tableCellDivider"),q):le(L)}function q(L){return Te(L)?Me(l,I,"whitespace")(L):I(L)}function I(L){return L===58?(p+=1,f=!0,l.enter("tableDelimiterMarker"),l.consume(L),l.exit("tableDelimiterMarker"),D):L===45?(p+=1,D(L)):L===null||pe(L)?ae(L):le(L)}function D(L){return L===45?(l.enter("tableDelimiterFiller"),F(L)):le(L)}function F(L){return L===45?(l.consume(L),F):L===58?(f=!0,l.exit("tableDelimiterFiller"),l.enter("tableDelimiterMarker"),l.consume(L),l.exit("tableDelimiterMarker"),H):(l.exit("tableDelimiterFiller"),H(L))}function H(L){return Te(L)?Me(l,ae,"whitespace")(L):ae(L)}function ae(L){return L===124?z(L):L===null||pe(L)?!f||c!==p?le(L):(l.exit("tableDelimiterRow"),l.exit("tableHead"),i(L)):le(L)}function le(L){return r(L)}function B(L){return l.enter("tableRow"),_(L)}function _(L){return L===124?(l.enter("tableCellDivider"),l.consume(L),l.exit("tableCellDivider"),_):L===null||pe(L)?(l.exit("tableRow"),i(L)):Te(L)?Me(l,_,"whitespace")(L):(l.enter("data"),K(L))}function K(L){return L===null||L===124||Ie(L)?(l.exit("data"),_(L)):(l.consume(L),L===92?ie:K)}function ie(L){return L===92||L===124?(l.consume(L),K):K(L)}}function O4(l,i){let r=-1,u=!0,c=0,p=[0,0,0,0],f=[0,0,0,0],d=!1,m=0,h,b,x;const v=new A4;for(;++r<l.length;){const k=l[r],z=k[1];k[0]==="enter"?z.type==="tableHead"?(d=!1,m!==0&&(Mm(v,i,m,h,b),b=void 0,m=0),h={type:"table",start:Object.assign({},z.start),end:Object.assign({},z.end)},v.add(r,0,[["enter",h,i]])):z.type==="tableRow"||z.type==="tableDelimiterRow"?(u=!0,x=void 0,p=[0,0,0,0],f=[0,r+1,0,0],d&&(d=!1,b={type:"tableBody",start:Object.assign({},z.start),end:Object.assign({},z.end)},v.add(r,0,[["enter",b,i]])),c=z.type==="tableDelimiterRow"?2:b?3:1):c&&(z.type==="data"||z.type==="tableDelimiterMarker"||z.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(p[1]!==0&&(f[0]=f[1],x=tu(v,i,p,c,void 0,x),p=[0,0,0,0]),f[2]=r)):z.type==="tableCellDivider"&&(u?u=!1:(p[1]!==0&&(f[0]=f[1],x=tu(v,i,p,c,void 0,x)),p=f,f=[p[1],r,0,0])):z.type==="tableHead"?(d=!0,m=r):z.type==="tableRow"||z.type==="tableDelimiterRow"?(m=r,p[1]!==0?(f[0]=f[1],x=tu(v,i,p,c,r,x)):f[1]!==0&&(x=tu(v,i,f,c,r,x)),c=0):c&&(z.type==="data"||z.type==="tableDelimiterMarker"||z.type==="tableDelimiterFiller")&&(f[3]=r)}for(m!==0&&Mm(v,i,m,h,b),v.consume(i.events),r=-1;++r<i.events.length;){const k=i.events[r];k[0]==="enter"&&k[1].type==="table"&&(k[1]._align=D4(i.events,r))}return l}function tu(l,i,r,u,c,p){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",d="tableContent";r[0]!==0&&(p.end=Object.assign({},ya(i.events,r[0])),l.add(r[0],0,[["exit",p,i]]));const m=ya(i.events,r[1]);if(p={type:f,start:Object.assign({},m),end:Object.assign({},m)},l.add(r[1],0,[["enter",p,i]]),r[2]!==0){const h=ya(i.events,r[2]),b=ya(i.events,r[3]),x={type:d,start:Object.assign({},h),end:Object.assign({},b)};if(l.add(r[2],0,[["enter",x,i]]),u!==2){const v=i.events[r[2]],k=i.events[r[3]];if(v[1].end=Object.assign({},k[1].end),v[1].type="chunkText",v[1].contentType="text",r[3]>r[2]+1){const z=r[2]+1,q=r[3]-r[2]-1;l.add(z,q,[])}}l.add(r[3]+1,0,[["exit",x,i]])}return c!==void 0&&(p.end=Object.assign({},ya(i.events,c)),l.add(c,0,[["exit",p,i]]),p=void 0),p}function Mm(l,i,r,u,c){const p=[],f=ya(i.events,r);c&&(c.end=Object.assign({},f),p.push(["exit",c,i])),u.end=Object.assign({},f),p.push(["exit",u,i]),l.add(r+1,0,p)}function ya(l,i){const r=l[i],u=r[0]==="enter"?"start":"end";return r[1][u]}const L4={name:"tasklistCheck",tokenize:B4};function R4(){return{text:{91:L4}}}function B4(l,i,r){const u=this;return c;function c(m){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?r(m):(l.enter("taskListCheck"),l.enter("taskListCheckMarker"),l.consume(m),l.exit("taskListCheckMarker"),p)}function p(m){return Ie(m)?(l.enter("taskListCheckValueUnchecked"),l.consume(m),l.exit("taskListCheckValueUnchecked"),f):m===88||m===120?(l.enter("taskListCheckValueChecked"),l.consume(m),l.exit("taskListCheckValueChecked"),f):r(m)}function f(m){return m===93?(l.enter("taskListCheckMarker"),l.consume(m),l.exit("taskListCheckMarker"),l.exit("taskListCheck"),d):r(m)}function d(m){return pe(m)?i(m):Te(m)?l.check({tokenize:U4},i,r)(m):r(m)}}function U4(l,i,r){return Me(l,u,"whitespace");function u(c){return c===null?r(c):i(c)}}function H4(l){return Jm([c4(),v4(),j4(l),N4(),R4()])}const q4={};function Y4(l){const i=this,r=l||q4,u=i.data(),c=u.micromarkExtensions||(u.micromarkExtensions=[]),p=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);c.push(H4(r)),p.push(r4()),f.push(u4(r))}const qg="https://openrouter-backend.huytruong.workers.dev/v1/portfolio/chat",Dm="truong-1234567890",G4=/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(qg);function V4(l){if(!l||typeof l!="object")return"Sorry, I couldn't get a response right now.";const i=l;return i.reply??i.message??i.answer??i.data?.reply??i.choices?.[0]?.message?.content??"Sorry, I couldn't get a response right now."}function X4(){const[l,i]=ge.useState(!1),[r,u]=ge.useState(!1),[c,p]=ge.useState(!1),[f,d]=ge.useState([]),[m,h]=ge.useState(""),[b,x]=ge.useState(!1),[v,k]=ge.useState(null),[z,q]=ge.useState(""),I=ge.useRef(null),D=ge.useRef(null);ge.useEffect(()=>{if(v===null)return;if(z.length>=v.length){k(null);return}const H=Math.max(1,Math.floor(v.length/120)),ae=setTimeout(()=>{q(v.slice(0,z.length+H))},16);return()=>clearTimeout(ae)},[v,z]),ge.useEffect(()=>{l&&setTimeout(()=>{I.current?.scrollIntoView({behavior:"smooth"}),D.current?.focus()},50)},[f,l]),ge.useEffect(()=>{const H=window.setTimeout(()=>{p(!0)},5e3);return()=>{window.clearTimeout(H)}},[]);const F=async()=>{const H=m.trim();if(!H||b)return;const ae=[...f,{role:"user",text:H}];d(ae),h(""),x(!0);try{const le=await fetch(qg,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Dm},body:JSON.stringify({question:H})}),B=await le.json();if(!le.ok||B?.error){const K=B?.error?.message??`HTTP ${le.status}`;d(ie=>[...ie,{role:"model",text:`API error: ${K}`}]);return}const _=V4(B);d(K=>[...K,{role:"model",text:_}]),q(""),k(_)}catch(le){const B=typeof window<"u"&&!["localhost","127.0.0.1"].includes(window.location.hostname),_=G4&&B?"Chat server is set to localhost, so it only works on your machine. Deploy the proxy to a public URL and update VITE_CHAT_PROXY_URL before publishing.":`Connection error: ${le instanceof Error?le.message:String(le)}`;d(K=>[...K,{role:"model",text:_}])}finally{x(!1)}};return y.jsxs(y.Fragment,{children:[l?y.jsxs("div",{className:`chatbotWindow${r?" isFullscreen":""}`,children:[y.jsxs("div",{className:"chatbotHeader",children:[y.jsx("span",{className:"chatbotTitle",children:"Miko • AI assistant"}),y.jsxs("div",{className:"chatbotHeaderActions",children:[y.jsx("button",{className:"chatbotControl",onClick:()=>u(H=>!H),"aria-label":r?"Exit full screen":"Open full screen",title:r?"Exit full screen":"Open full screen",children:r?y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("polyline",{points:"9 3 3 3 3 9"}),y.jsx("line",{x1:"3",y1:"3",x2:"10",y2:"10"}),y.jsx("polyline",{points:"15 21 21 21 21 15"}),y.jsx("line",{x1:"14",y1:"14",x2:"21",y2:"21"})]}):y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("polyline",{points:"15 3 21 3 21 9"}),y.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),y.jsx("polyline",{points:"9 21 3 21 3 15"}),y.jsx("line",{x1:"10",y1:"14",x2:"3",y2:"21"})]})}),y.jsx("button",{className:"chatbotClose",onClick:()=>{i(!1),u(!1)},"aria-label":"Close chat",title:"Close",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),y.jsxs("div",{className:"chatbotMessages",children:[f.length===0?y.jsx("p",{className:"chatbotEmpty",children:"Ask me anything about Truong — projects, skills, career..."}):null,f.map((H,ae)=>{const B=v!==null&&ae===f.length-1&&H.role==="model"?z:H.text;return y.jsx("div",{className:`chatbotMsg chatbotMsg--${H.role}`,children:H.role==="model"?y.jsx(j2,{remarkPlugins:[Y4],components:{a:({..._})=>y.jsx("a",{..._,target:"_blank",rel:"noreferrer"})},children:B}):y.jsx("p",{children:H.text})},ae)}),b?y.jsx("div",{className:"chatbotMsg chatbotMsg--model",children:y.jsxs("span",{className:"chatbotTyping",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]})}):null,y.jsx("div",{ref:I})]}),y.jsxs("div",{className:"chatbotInputRow",children:[y.jsx("input",{ref:D,className:"chatbotInput",value:m,onChange:H=>h(H.target.value),onKeyDown:H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),F())},placeholder:"Ask a question...",disabled:b||v!==null,autoComplete:"off"}),y.jsx("button",{className:"chatbotSend",onClick:F,disabled:b||v!==null||!m.trim(),"aria-label":"Send",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),y.jsx("polyline",{points:"5 12 12 5 19 12"})]})})]})]}):null,!l&&c?y.jsxs("div",{className:"chatbotTooltip",role:"status","aria-live":"polite",children:[y.jsx("div",{className:"chatbotTooltipTitle",children:"Hi, I am Miko"}),y.jsx("p",{children:"AI assistant for Truong, ask me anything..."}),y.jsx("button",{type:"button",className:"chatbotTooltipClose","aria-label":"Dismiss intro",onClick:()=>p(!1),children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}):null,y.jsx("button",{className:`chatbotFab${l?" chatbotFab--open":""}`,onClick:()=>{p(!1),i(H=>!H),l&&u(!1)},"aria-label":l?"Close chat":"Chat with AI",children:l?y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):y.jsx("span",{className:"chatbotMascot","aria-hidden":"true",children:y.jsxs("svg",{className:"chatbotMascotBody",viewBox:"0 0 72 72",fill:"none",children:[y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"mikoHead",x1:"18",y1:"14",x2:"54",y2:"58",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"0",stopColor:"#7be9ff"}),y.jsx("stop",{offset:"1",stopColor:"#1f90ff"})]}),y.jsxs("linearGradient",{id:"mikoVisor",x1:"22",y1:"28",x2:"50",y2:"40",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"0",stopColor:"#0f2b5f"}),y.jsx("stop",{offset:"1",stopColor:"#163a7a"})]})]}),y.jsx("line",{x1:"36",y1:"8",x2:"36",y2:"14",stroke:"#9feeff",strokeWidth:"3",strokeLinecap:"round"}),y.jsx("circle",{cx:"36",cy:"7",r:"3",fill:"#b6f4ff"}),y.jsx("rect",{x:"17",y:"14",width:"38",height:"40",rx:"14",fill:"url(#mikoHead)"}),y.jsx("rect",{x:"22",y:"27",width:"28",height:"14",rx:"7",fill:"url(#mikoVisor)"}),y.jsx("circle",{cx:"30",cy:"34",r:"3.2",fill:"#8ef3ff"}),y.jsx("circle",{cx:"42",cy:"34",r:"3.2",fill:"#8ef3ff"}),y.jsx("rect",{x:"30",y:"44",width:"12",height:"3",rx:"1.5",fill:"#e3fbff",fillOpacity:"0.92"}),y.jsx("rect",{x:"11",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"}),y.jsx("rect",{x:"54",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"})]})})})]})}const I4="/my-portfolio/",ut=l=>`${I4}${l.replace(/^\/+/,"")}`,Q4=[{id:"p1",title:"FPS Zombie Online",year:2025,role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:ut("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[ut("/screenshots/fps/1.jpg"),ut("/screenshots/fps/2.jpg"),ut("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",year:2024,role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:ut("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[ut("/screenshots/tressette/1.jpg"),ut("/screenshots/tressette/2.jpg"),ut("/screenshots/tressette/3.jpg")]},{id:"p0",title:"Pixel AI",year:2026,role:"",statusLabel:"Under Development",description:"A research-driven pixel game prototype focused on applying AI to generate world elements, shape map-building workflows, and explore zombie-defense gameplay ideas.",tech:["SDL 3","C++","Codex"],previewMp4:ut("/videos/pixelai.mp4"),previewGif:"",youtubeUrl:"",githubUrl:"https://github.com/FCBTruong/love-deaths-ai",downloadUrl:"",screenshots:[ut("/screenshots/pixelai/1.jpg"),ut("/screenshots/pixelai/2.jpg"),ut("/screenshots/pixelai/3.jpg")]},{id:"p3",title:"Thoi Loan Online",year:2021,role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:ut("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[ut("/screenshots/thoiloan/1.jpg"),ut("/screenshots/thoiloan/2.jpg"),ut("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",year:2019,role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:ut("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",year:2019,role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["SDL","C++"],previewMp4:ut("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",year:2020,role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:ut("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}],Z4="/my-portfolio/",va=l=>`${Z4}${l.replace(/^\/+/,"")}`,F4=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Onesoft - Monster Studio",location:"Ha Noi, Viet Nam",logo:va("/company/onesoft.png"),summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Monkey Junior",location:"Ha Noi, Viet Nam",logo:va("/company/monkeyjunior.png"),summary:"Continued game development experience with Unity, focusing on gameplay systems, performance, and user experience.",highlights:["Developed puzzle game features and gameplay mechanics using Unity.","Optimized game performance, responsiveness, and user experience.","Participated in the full development cycle from feature design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",location:"Ha Noi, Viet Nam",logo:va("/company/vng.png"),summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay, UI, and online systems for large-scale titles.","Developed metagame features, including events, shop flows, and payment-related features.","Collaborated with artists, designers, PMs, and engineers to brainstorm, develop, and deliver game features.","Integrated third-party services such as Firebase, CDN, SDKs, and log tracking tools.","Debugged production issues, fixed bugs, refactored code, and built tools to support live game operations.","Analyzed player behavior to improve gameplay, UI, and overall player experience.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"VIET NAM DIGITAL TECHNOLOGY AND INVESTMENT JOINT STOCK COMPANY",location:"Ha Noi, Viet Nam",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Built scalable backend and data platforms providing shared services for multiple teams.","Designed and operated reliable distributed systems with FastAPI, PostgreSQL, Docker, and Kubernetes.","Developed large-scale ETL workflows and Airflow-based data pipelines.","Improved delivery efficiency through CI/CD, automation, and production workflow optimization.","Mentored engineers and led backend/platform development from design to production."]},{period:"Nov 2025 - Present",title:"Self Development",org:"Independent Learning & Project Building",location:"Ha Noi, Viet Nam",summary:"Focused on personal growth through building projects, deepening Unreal Engine 5 skills, improving English communication, and sharpening system thinking.",highlights:["Built personal game projects to practice end-to-end architecture and execution.","Improved Unreal Engine 5 proficiency through regular prototyping and technical experimentation.","Researched AI tools and applied them to optimize workflows and automate repetitive tasks.","Improved English communication for technical discussions and documentation.","Strengthened system thinking by designing scalable gameplay and backend flows."]}],K4=[{school:"University of Engineering and Technology (VNU)",degree:"Bachelor",area:"Software Engineering",period:"Aug 2018 - Dec 2023",location:"Ha Noi, Viet Nam",logo:va("/uet.png")}],J4=[{title:"IELTS 7.5",issuer:"British Council",date:"2025",logo:va("/britsh-council.png")}],$4=[{title:"Third Prize Chess Province",location:"Nghe An, Viet Nam",date:"2018",logo:va("/chess.png")}];function Yg(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function W4(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function dc(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function Nm(){return y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"9"}),y.jsx("path",{d:"M3 12h18"}),y.jsx("path",{d:"M12 3a15 15 0 0 1 0 18"}),y.jsx("path",{d:"M12 3a15 15 0 0 0 0 18"})]})}function P4(){return y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"}),y.jsx("circle",{cx:"12",cy:"11",r:"2.3"})]})}function e3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:y.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.8.62 2.66a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.66.62A2 2 0 0 1 22 16.92Z"})})}function t3(){return y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M7 10h10a4 4 0 0 1 3.88 4.97l-.63 2.5A2 2 0 0 1 18.3 19H17a2 2 0 0 1-1.6-.8l-1.1-1.47a3 3 0 0 0-4.8 0L8.4 18.2A2 2 0 0 1 6.8 19H5.7a2 2 0 0 1-1.94-1.53l-.63-2.5A4 4 0 0 1 7 10Z"}),y.jsx("path",{d:"M8 13v4"}),y.jsx("path",{d:"M6 15h4"}),y.jsx("circle",{cx:"16.5",cy:"14.5",r:".8",fill:"currentColor",stroke:"none"}),y.jsx("circle",{cx:"18.5",cy:"16.5",r:".8",fill:"currentColor",stroke:"none"})]})}function n3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function l3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function a3(){return y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:[y.jsx("path",{d:"M3 21h18"}),y.jsx("path",{d:"M5 21V7.5A1.5 1.5 0 0 1 6.5 6H10v15"}),y.jsx("path",{d:"M10 21V4.5A1.5 1.5 0 0 1 11.5 3h6A1.5 1.5 0 0 1 19 4.5V21"}),y.jsx("path",{d:"M7.5 9.5h.01M7.5 12.5h.01M7.5 15.5h.01M13.5 6.5h.01M16.5 6.5h.01M13.5 9.5h.01M16.5 9.5h.01M13.5 12.5h.01M16.5 12.5h.01"})]})}function i3(){return y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"}),y.jsx("path",{d:"M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"})]})}function r3(){return y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"m3 8.5 9-4.5 9 4.5-9 4.5-9-4.5Z"}),y.jsx("path",{d:"M6.5 10.8V15c0 1.5 2.4 3 5.5 3s5.5-1.5 5.5-3v-4.2"})]})}function u3(){return y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M8 3h8l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"}),y.jsx("path",{d:"M16 3v5h5"}),y.jsx("path",{d:"M9.5 14h5"}),y.jsx("path",{d:"M9.5 17h4"})]})}function o3(){return y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M8 4h8v3a4 4 0 0 1-8 0V4Z"}),y.jsx("path",{d:"M10 15h4"}),y.jsx("path",{d:"M12 11v4"}),y.jsx("path",{d:"M8 19h8"}),y.jsx("path",{d:"M16 6h2a2 2 0 0 1 0 4h-2"}),y.jsx("path",{d:"M8 6H6a2 2 0 0 0 0 4h2"})]})}function s3(){return y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"1.6",fill:"currentColor",stroke:"none"}),y.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2"}),y.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(60 12 12)"}),y.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(120 12 12)"})]})}function c3(){return y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[y.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),y.jsx("path",{d:"M9.2 9h6.1v1.8h-2.1V17h-1.9v-6.2H9.2V9Zm9.8.2v1.8c-.7-.4-1.3-.5-1.8-.5-.4 0-.8.1-1 .2-.2.1-.3.3-.3.5 0 .1.1.3.2.4.1.1.4.2.8.3l.6.1c.9.2 1.6.5 2 .9.4.4.6.9.6 1.6 0 .9-.3 1.6-1 2.1-.7.5-1.6.7-2.8.7-.5 0-1 0-1.5-.1-.5-.1-1-.2-1.6-.4v-1.9c.6.3 1.1.5 1.6.7.5.1 1 .2 1.5.2.5 0 .9-.1 1.1-.2.3-.1.4-.3.4-.6 0-.2-.1-.3-.2-.5-.1-.1-.4-.2-.9-.3l-.5-.1c-.8-.2-1.4-.5-1.8-.8-.4-.4-.6-.9-.6-1.6 0-.8.3-1.5.9-1.9.6-.5 1.5-.7 2.6-.7.4 0 .8 0 1.3.1.4.1.9.2 1.4.3Z",fill:"#fff"})]})}function f3(){return y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[y.jsx("path",{d:"M22 5 13.2 20.5a1.4 1.4 0 0 1-2.4 0L2 5.1a.8.8 0 0 1 .9-1.2l8.9 1.6c.1 0 .3 0 .4 0l8.9-1.6A.8.8 0 0 1 22 5Z",fill:"url(#vite-grad-a)"}),y.jsx("path",{d:"m16.6 2.2-4.8.9a.4.4 0 0 0-.3.3l-.3 2.5c0 .2.1.4.3.4l1.3.2c.2 0 .3.2.3.4l-.8 5.6c0 .4.5.6.8.3l.2-.3 4.3-8.7c.2-.3-.1-.7-.5-.6Z",fill:"url(#vite-grad-b)"}),y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"vite-grad-a",x1:"2",y1:"4",x2:"18",y2:"20",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{stopColor:"#41D1FF"}),y.jsx("stop",{offset:"1",stopColor:"#BD34FE"})]}),y.jsxs("linearGradient",{id:"vite-grad-b",x1:"11",y1:"2",x2:"16",y2:"13",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{stopColor:"#FFEA83"}),y.jsx("stop",{offset:".5",stopColor:"#FFDD35"}),y.jsx("stop",{offset:"1",stopColor:"#FFA800"})]})]})]})}function p3({src:l,alt:i,onClose:r}){return ge.useEffect(()=>{const u=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[r]),y.jsxs("div",{className:"lightboxOverlay",onClick:r,role:"dialog","aria-modal":"true",children:[y.jsx("img",{className:"lightboxImg",src:l,alt:i,onClick:u=>u.stopPropagation()}),y.jsx("button",{className:"lightboxClose",onClick:r,"aria-label":"Close",children:"×"})]})}function d3({title:l,previewMp4:i,previewGif:r,youtubeUrl:u}){return y.jsxs("div",{className:"previewCard",children:[i?y.jsx("video",{className:"previewMedia",src:i,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${l} preview video`}):r?y.jsx("img",{src:r,alt:`${l} preview`,className:"previewMedia",loading:"lazy"}):y.jsx("div",{className:"previewPlaceholder",children:"No preview"}),u?y.jsx("a",{className:"previewOverlayBtn",href:u,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${l}`,children:"Watch Full Demo"}):null]})}function h3(){return y.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[y.jsx("span",{className:"sceneSkyTint"}),y.jsx("span",{className:"sceneSun"}),y.jsx("span",{className:"sceneRidge ridgeFar"}),y.jsx("span",{className:"sceneRidge ridgeNear"}),y.jsx("span",{className:"scenePine pine1"}),y.jsx("span",{className:"scenePine pine2"}),y.jsx("span",{className:"scenePine pine3"}),y.jsx("span",{className:"sceneCloud cloudA"}),y.jsx("span",{className:"sceneCloud cloudB"}),y.jsx("span",{className:"sceneDust dust1"}),y.jsx("span",{className:"sceneDust dust2"}),y.jsx("span",{className:"sceneDust dust3"}),y.jsx("span",{className:"sceneDust dust4"}),y.jsx("span",{className:"sceneDust dust5"}),y.jsx("span",{className:"sceneLeaf leaf1"}),y.jsx("span",{className:"sceneLeaf leaf2"}),y.jsx("span",{className:"sceneLeaf leaf3"}),y.jsx("span",{className:"sceneLeaf leaf4"}),y.jsx("span",{className:"sceneLeaf leaf5"}),y.jsx("span",{className:"sceneLeaf leaf6"}),y.jsx("span",{className:"sceneWind wind1"}),y.jsx("span",{className:"sceneWind wind2"}),y.jsx("span",{className:"sceneWind wind3"})]})}function m3({theme:l,onToggle:i}){const r=l==="dark";return y.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:i,"aria-label":r?"Switch to light theme":"Switch to dark theme",title:r?"Light mode":"Dark mode",children:r?y.jsx(n3,{}):y.jsx(l3,{})})}const Ps=[{code:"en",label:"English",flag:"🇺🇸"},{code:"ja",label:"日本語",flag:"🇯🇵"},{code:"vi",label:"Tiếng Việt",flag:"🇻🇳"}],g3={en:{nav:{about:"About Me",projects:"Projects",career:"Career",resume:"Résumé"},intro:{greeting:"Hi, I'm",body:"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world."},career:{now:"Now",start:"Start",education:"Education",certificates:"Certificates",awards:"Awards",showDetails:"Show details",hideDetails:"Hide details"},project:{downloadPlay:"Download / Play",github:"GitHub"},cv:{back:"← Back",title:"Résumé",openTab:"Open in new tab",loading:"Loading CV...",loadError:"Unable to load CV data."},footer:{quote:'"Every small step shapes something great"'}},ja:{nav:{about:"自己紹介",projects:"プロジェクト",career:"キャリア",resume:"履歴書"},intro:{greeting:"こんにちは、",body:"オンラインマルチプレイヤーゲームの開発を行いながら、自らもアクティブなプレイヤーとして活動しています。プレイヤーとしての視点が、ゲームプレイや全体的な体験への考え方を形づくっています。素晴らしいゲームは一人では作れないと知っており、情熱あるチームで貢献し、共に成長できる環境を求めています。世界中のプレイヤーに意味ある体験を届けることが目標です。"},career:{now:"現在",start:"始まり",education:"学歴",certificates:"資格・認定",awards:"受賞・実績",showDetails:"詳細を表示",hideDetails:"詳細を閉じる"},project:{downloadPlay:"ダウンロード / プレイ",github:"GitHub"},cv:{back:"← 戻る",title:"履歴書",openTab:"新しいタブで開く",loading:"CVを読み込み中...",loadError:"CVデータを読み込めませんでした。"},footer:{quote:"「一歩一歩が偉大なものを形づくる」"}},vi:{nav:{about:"Giới Thiệu",projects:"Dự Án",career:"Sự Nghiệp",resume:"Hồ Sơ"},intro:{greeting:"Xin chào, tôi là",body:"Tôi phát triển game nhiều người chơi trực tuyến và bản thân cũng là một game thủ tích cực. Góc nhìn người chơi ảnh hưởng đến cách tôi nghĩ về gameplay và trải nghiệm tổng thể. Tôi hiểu rằng những game hay không thể tạo ra một mình, và tôi muốn làm việc với một đội ngũ đam mê để cùng đóng góp và phát triển. Mục tiêu của tôi là tạo ra những trải nghiệm có ý nghĩa cho người chơi trên toàn thế giới."},career:{now:"Hiện Tại",start:"Bắt Đầu",education:"Học Vấn",certificates:"Chứng Chỉ",awards:"Giải Thưởng",showDetails:"Xem chi tiết",hideDetails:"Ẩn chi tiết"},project:{downloadPlay:"Tải Xuống / Chơi",github:"GitHub"},cv:{back:"← Quay Lại",title:"Hồ Sơ",openTab:"Mở Tab Mới",loading:"Đang tải CV...",loadError:"Không thể tải dữ liệu CV."},footer:{quote:'"Mỗi bước nhỏ đều tạo nên điều vĩ đại"'}}};function x3(){const l=localStorage.getItem("language");if(l&&(l==="en"||l==="ja"||l==="vi"))return l;const i=navigator.language.toLowerCase();return i.startsWith("ja")?"ja":i.startsWith("vi")?"vi":"en"}function Gg(l){return g3[l]}const Vg=ge.createContext({lang:"en",setLang:()=>{},tr:Gg("en")});function _c(){return ge.useContext(Vg)}function _m({code:l}){return l==="en"?y.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[y.jsx("defs",{children:y.jsx("clipPath",{id:"flagCircleEn",children:y.jsx("circle",{cx:"10",cy:"10",r:"10"})})}),y.jsxs("g",{clipPath:"url(#flagCircleEn)",children:[y.jsx("rect",{width:"20",height:"20",fill:"#b22234"}),y.jsx("rect",{y:"2",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"6",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"10",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"14",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"18",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{width:"9",height:"9",fill:"#3c3b6e"})]})]}):l==="ja"?y.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[y.jsx("circle",{cx:"10",cy:"10",r:"9.6",fill:"#fff",stroke:"rgba(16,24,40,0.12)",strokeWidth:"0.8"}),y.jsx("circle",{cx:"10",cy:"10",r:"4.3",fill:"#bc002d"})]}):y.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[y.jsx("defs",{children:y.jsx("clipPath",{id:"flagCircleVi",children:y.jsx("circle",{cx:"10",cy:"10",r:"10"})})}),y.jsxs("g",{clipPath:"url(#flagCircleVi)",children:[y.jsx("rect",{width:"20",height:"20",fill:"#da251d"}),y.jsx("path",{d:"M10 5.1L11.2 8.1H14.4L11.8 10.1L12.8 13.1L10 11.3L7.2 13.1L8.2 10.1L5.6 8.1H8.8L10 5.1Z",fill:"#ffde00"})]})]})}function y3(){return y.jsx("svg",{className:"langChevron",viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M2 3.5L5 6.5L8 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function b3(){return y.jsx("svg",{className:"langOptionCheck",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function v3(){const{lang:l,setLang:i}=_c(),[r,u]=ge.useState(!1),c=ge.useRef(null),p=Ps.find(f=>f.code===l)??Ps[0];return ge.useEffect(()=>{if(!r)return;const f=d=>{c.current&&!c.current.contains(d.target)&&u(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[r]),y.jsxs("div",{className:"langSwitcher",ref:c,children:[y.jsxs("button",{type:"button",className:"langSwitcherBtn",onClick:()=>u(f=>!f),"aria-haspopup":"listbox","aria-expanded":r,"aria-label":`Language: ${p.label}`,title:p.label,children:[y.jsx(_m,{code:p.code}),y.jsx("span",{className:"langCode",children:p.code}),y.jsx(y3,{})]}),r&&y.jsx("div",{className:"langDropdown",role:"listbox","aria-label":"Select language",children:Ps.map(f=>y.jsxs("button",{type:"button",role:"option","aria-selected":f.code===l,className:`langOption${f.code===l?" active":""}`,onClick:()=>{i(f.code),u(!1)},children:[y.jsx(_m,{code:f.code}),y.jsx("span",{className:"langLabel",children:f.label}),f.code===l&&y.jsx(b3,{})]},f.code))})]})}const S3=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],ec=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function k3(l){const i=[...l];for(let r=i.length-1;r>0;r--){const u=Math.floor(Math.random()*(r+1));[i[r],i[u]]=[i[u],i[r]]}return i}function Om(l){const i=S3.slice(0,l);return k3([...i,...i].map((r,u)=>({id:u,symbol:r,isFlipped:!1,isMatched:!1})))}function w3(){const[l,i]=Xe.useState(0),r=ec[l],u=l===ec.length-1,[c,p]=Xe.useState(()=>Om(r.cols*r.rows/2)),[f,d]=Xe.useState([]),[m,h]=Xe.useState(0),[b,x]=Xe.useState(0),[v,k]=Xe.useState(!1),[z,q]=Xe.useState(!1),[I,D]=Xe.useState(!1),F=Xe.useRef(null),H=Xe.useRef(null),ae=Xe.useRef(0),le=Xe.useRef(null),B=Xe.useCallback(()=>{if(typeof window>"u")return null;const A=window.AudioContext||window.webkitAudioContext;return A?(le.current||(le.current=new A),le.current.state==="suspended"&&le.current.resume(),le.current):null},[]),_=Xe.useCallback((A,Z,ne,me,E=0)=>{const C=B();if(!C)return;const Y=C.createOscillator(),w=C.createGain(),$=C.currentTime+E;Y.type=ne,Y.frequency.setValueAtTime(A,$),w.gain.setValueAtTime(1e-4,$),w.gain.exponentialRampToValueAtTime(me,$+.02),w.gain.exponentialRampToValueAtTime(1e-4,$+Z),Y.connect(w),w.connect(C.destination),Y.start($),Y.stop($+Z+.02)},[B]),K=Xe.useCallback(()=>{_(660,.12,"triangle",.05,0),_(880,.12,"triangle",.04,.08)},[_]),ie=Xe.useCallback(()=>{_(420,.05,"triangle",.018,0)},[_]),L=Xe.useCallback(()=>{_(523.25,.16,"sine",.06,0),_(659.25,.16,"sine",.06,.12),_(783.99,.22,"sine",.07,.24)},[_]);Xe.useEffect(()=>{v&&!z&&c.every(A=>A.isMatched)&&q(!0)},[c,v,z]),Xe.useEffect(()=>(v&&!z&&(F.current=setInterval(()=>x(A=>A+1),1e3)),()=>{F.current&&clearInterval(F.current)}),[v,z]),Xe.useEffect(()=>{z&&L()},[z,L]),Xe.useEffect(()=>{if(!z)return;const A=H.current;if(!A)return;const Z=A.getContext("2d");if(!Z)return;A.width=A.offsetWidth,A.height=A.offsetHeight;const ne=[],me=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],E=($,re)=>{for(let ce=0;ce<52;ce++){const ke=Math.PI*2*ce/52,Ye=2+Math.random()*4.5;ne.push({x:$,y:re,vx:Math.cos(ke)*Ye,vy:Math.sin(ke)*Ye,alpha:1,color:me[Math.floor(Math.random()*me.length)],r:2+Math.random()*2})}};let C=0;const Y=setInterval(()=>{E(A.width*(.15+Math.random()*.7),A.height*(.1+Math.random()*.55)),++C>=7&&clearInterval(Y)},320),w=()=>{Z.clearRect(0,0,A.width,A.height);for(let $=ne.length-1;$>=0;$--){const re=ne[$];if(re.x+=re.vx,re.y+=re.vy,re.vy+=.09,re.alpha-=.016,re.alpha<=0){ne.splice($,1);continue}Z.globalAlpha=re.alpha,Z.fillStyle=re.color,Z.beginPath(),Z.arc(re.x,re.y,re.r,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,ae.current=requestAnimationFrame(w)};return w(),()=>{clearInterval(Y),cancelAnimationFrame(ae.current)}},[z]);const W=Xe.useCallback(A=>{F.current&&clearInterval(F.current);const Z=ec[A];i(A),p(Om(Z.cols*Z.rows/2)),d([]),h(0),x(0),k(!1),q(!1),D(!1)},[]),te=Xe.useCallback(A=>{const Z=c.find(E=>E.id===A);if(!Z||Z.isFlipped||Z.isMatched||I)return;if(v||k(!0),ie(),p(E=>E.map(C=>C.id===A?{...C,isFlipped:!0}:C)),f.length===0){d([A]);return}const ne=f[0],me=c.find(E=>E.id===ne);d([]),h(E=>E+1),me.symbol===Z.symbol?(K(),p(E=>E.map(C=>C.id===ne||C.id===A?{...C,isFlipped:!0,isMatched:!0}:C))):(D(!0),setTimeout(()=>{p(E=>E.map(C=>C.id===ne||C.id===A?{...C,isFlipped:!1}:C)),D(!1)},900))},[c,f,I,v,ie,K]),Se=A=>`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`,oe=()=>y.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[y.jsx("path",{d:"M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z",fill:"currentColor"}),y.jsx("circle",{cx:"8",cy:"7",r:"1.6",fill:"currentColor"}),y.jsx("circle",{cx:"11.2",cy:"5.8",r:"1.5",fill:"currentColor"}),y.jsx("circle",{cx:"14.8",cy:"5.8",r:"1.5",fill:"currentColor"}),y.jsx("circle",{cx:"18",cy:"7",r:"1.6",fill:"currentColor"})]}),P=()=>y.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),y.jsx("path",{d:"M12 7.8v4.8l3.2 1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]});return y.jsxs("div",{className:"memoryGame",children:[y.jsxs("div",{className:"memoryGameHeader",children:[y.jsxs("span",{className:"memoryGameLevel",children:["Lv ",l+1," · ",r.n,"×",r.n]}),y.jsxs("span",{className:"memoryGameStat",children:[y.jsx(oe,{})," ",y.jsx("strong",{children:m})]}),y.jsxs("span",{className:"memoryGameStat",children:[y.jsx(P,{})," ",y.jsx("strong",{children:Se(b)})]})]}),y.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${r.cols}, ${r.cell}px)`,gridTemplateRows:`repeat(${r.rows}, ${r.cell}px)`},children:c.map(A=>y.jsx("button",{className:`memoryCard${A.isFlipped||A.isMatched?" flipped":""}${A.isMatched?" matched":""}`,onClick:()=>te(A.id),style:{width:r.cell,height:r.cell},"aria-label":A.isFlipped||A.isMatched?A.symbol:"Hidden card",children:y.jsxs("span",{className:"memoryCardInner",children:[y.jsx("span",{className:"memoryCardBack"}),y.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(r.cell*.44)},children:A.symbol})]})},A.id))}),z&&y.jsxs("div",{className:"memoryGameModal",children:[y.jsx("canvas",{ref:H,className:"memoryGameFireworks"}),y.jsxs("div",{className:"memoryGameModalBox",children:[y.jsx("div",{className:"memoryGameModalEmoji",children:u?"🏆":"🎉"}),y.jsx("div",{className:"memoryGameModalTitle",children:u?"You beat all levels!":`Level ${l+1} clear!`}),y.jsxs("div",{className:"memoryGameModalSub",children:[m," moves · ",Se(b)]}),!u&&y.jsx("button",{className:"memoryGameModalBtn",onClick:()=>W(l+1),children:"Next Level →"}),y.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>W(0),children:u?"Play Again":"Restart from Lv 1"})]})]})]})}function Ei(l){return l.filter(i=>!i.hidden)}function nu({value:l}){return l?y.jsx("div",{className:"cvHtml",dangerouslySetInnerHTML:{__html:l}}):null}function Lm({field:l}){return l.id==="email"?y.jsx(Yg,{}):l.id==="phone"?y.jsx(e3,{}):l.id==="location"?y.jsx(P4,{}):l.id==="website"?y.jsx(Nm,{}):l.icon==="github-logo"?y.jsx(dc,{}):l.icon==="game-controller"?y.jsx(t3,{}):y.jsx(Nm,{})}function E3(){const{tr:l}=_c(),[i,r]=Xe.useState(null),[u,c]=Xe.useState(!1);if(Xe.useEffect(()=>{let v=!0;async function k(){try{c(!1);const z=await fetch("/my-portfolio/cv.json",{cache:"no-store"});if(!z.ok)throw new Error(`Failed to load cv.json: ${z.status}`);const q=await z.json();v&&r(q)}catch{v&&c(!0)}}return k(),()=>{v=!1}},[]),!i&&!u)return y.jsx("section",{className:"cvLoadCard",children:y.jsx("p",{children:l.cv.loading})});if(!i)return y.jsx("section",{className:"cvLoadCard cvLoadCard--error",children:y.jsx("p",{children:l.cv.loadError})});const p=i.customSections.find(v=>v.title.toLowerCase().includes("tech")&&!v.hidden),f=[i.basics.location?{id:"location",text:i.basics.location,link:"#resume-location"}:null,i.basics.email?{id:"email",text:i.basics.email,link:`mailto:${i.basics.email}`}:null,i.basics.phone?{id:"phone",text:i.basics.phone,link:`tel:${i.basics.phone}`}:null,i.basics.website?.url?{id:"website",text:i.basics.website.label||i.basics.website.url,link:i.basics.website.url}:null,...i.basics.customFields??[]].filter(v=>!!v),d=Ei(i.sections.experience.items),m=Ei(i.sections.projects.items),h=Ei(i.sections.education.items),b=Ei(i.sections.certifications.items),x=p?Ei(p.items):[];return y.jsxs("article",{className:"cvPaper",children:[y.jsx("header",{className:"cvPaperHeader",children:y.jsxs("div",{className:"cvPaperHeaderMain",children:[y.jsx("h1",{className:"cvHeroName",children:i.basics.name}),y.jsx("p",{className:"cvHeroHeadline",children:i.basics.headline})]})}),f.length?y.jsx("div",{className:"cvPaperMeta",children:f.map(v=>v.id==="location"?y.jsxs("div",{className:"cvContactItem cvContactItem--static",children:[y.jsx("span",{className:"cvContactIcon",children:y.jsx(Lm,{field:v})}),y.jsx("span",{children:v.text})]},v.id):y.jsxs("a",{href:v.link,target:"_blank",rel:"noreferrer",className:"cvContactItem",children:[y.jsx("span",{className:"cvContactIcon",children:y.jsx(Lm,{field:v})}),y.jsx("span",{children:v.text})]},v.id))}):null,y.jsxs("div",{className:"cvPaperBody cvPaperBody--stacked",children:[i.summary.hidden?null:y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.summary.title}),y.jsx(nu,{value:i.summary.content})]}),!i.sections.experience.hidden&&d.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.experience.title}),y.jsx("div",{className:"cvList",children:d.map(v=>y.jsxs("article",{className:"cvItemCard",children:[v.company?y.jsx("p",{className:"cvItemCompany",children:v.company}):null,y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.position||v.company}),v.period?y.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),v.location?y.jsx("p",{className:"cvItemSub",children:v.location}):null,y.jsx(nu,{value:v.description})]},v.id))})]}):null,!i.sections.projects.hidden&&m.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.projects.title}),y.jsx("div",{className:"cvList",children:m.map(v=>y.jsxs("article",{className:"cvItemCard",children:[y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.name}),v.period?y.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),v.website?.url?y.jsx("a",{className:"cvItemLink",href:v.website.url,target:"_blank",rel:"noreferrer",children:v.website.label||v.website.url}):null,y.jsx(nu,{value:v.description})]},v.id))})]}):null,x.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:p?.title}),y.jsx("div",{className:"cvList cvTechGrid",children:x.map(v=>y.jsxs("article",{className:"cvItemCard cvTechCard",children:[y.jsx("h3",{children:v.company}),y.jsx(nu,{value:v.description})]},v.id))})]}):null,!i.sections.education.hidden&&h.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.education.title}),y.jsx("div",{className:"cvList",children:h.map(v=>y.jsxs("article",{className:"cvItemCard",children:[y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.school}),v.period?y.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),y.jsxs("p",{className:"cvItemSub",children:[v.degree,v.area?` · ${v.area}`:""]})]},v.id))})]}):null,!i.sections.certifications.hidden&&b.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.certifications.title}),y.jsx("div",{className:"cvList",children:b.map(v=>y.jsxs("article",{className:"cvItemCard",children:[y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.title}),v.date?y.jsx("span",{className:"cvItemPeriod",children:v.date}):null]}),y.jsx("p",{className:"cvItemSub",children:v.issuer})]},v.id))})]}):null]})]})}const Sa="/my-portfolio/".replace(/\/$/,"");function Xg(l){return l.startsWith("#/cv")||l.startsWith("#/resume")?"cv":l.startsWith("#/career")?"career":l.startsWith("#/")?"home":null}function Oc(l){return l==="cv"?`${Sa}/resume`:l==="career"?`${Sa}/career`:`${Sa||""}/`}function C3(l){if(!Sa||!l.startsWith(Sa))return l||"/";const i=l.slice(Sa.length);return i?i.startsWith("/")?i:`/${i}`:"/"}function Ig(l){const i=C3(l);return i==="/resume"||i.startsWith("/resume/")?"cv":i==="/career"||i.startsWith("/career/")?"career":"home"}function T3(){return Xg(window.location.hash)??Ig(window.location.pathname)}function z3(){const[l,i]=ge.useState(T3());return ge.useEffect(()=>{const r=Xg(window.location.hash);if(r){const c=Oc(r);window.history.replaceState({},"",c),i(r)}const u=()=>i(Ig(window.location.pathname));return window.addEventListener("popstate",u),()=>window.removeEventListener("popstate",u)},[]),l}function j3(l){return Oc(l)}function tc(l){const i=Oc(l);window.location.pathname!==i&&(window.history.pushState({},"",i),window.dispatchEvent(new PopStateEvent("popstate")))}function A3(l){return l==="cv"?"resume":l==="career"?"career":"about"}function M3({theme:l,onToggleTheme:i,route:r}){const{tr:u,lang:c}=_c(),[p,f]=ge.useState(null),[d,m]=ge.useState(()=>A3(r)),[h,b]=ge.useState({}),x=_=>{if(_==="career"){tc("career");return}if(_==="resume"){tc("cv");return}m(_),r!=="home"&&tc("home")},v=ge.useMemo(()=>u.intro.body,[u]),[k,z]=ge.useState(""),q=ge.useRef(c),[I,D]=ge.useState(!1);ge.useEffect(()=>{q.current!==c&&(q.current=c,z(""))},[c]),ge.useEffect(()=>{let K=0,ie;const L=()=>{if(D(!1),K+=1,z(v.slice(0,K)),K>=v.length){D(!1);return}const W=v[K-1],te=W==="."?360:W===","?140:24;D(te>24),ie=window.setTimeout(L,te)};return ie=window.setTimeout(L,24),()=>{D(!1),ie!==void 0&&window.clearTimeout(ie)}},[v]),ge.useEffect(()=>{d==="career"&&p&&f(null)},[d,p]),ge.useEffect(()=>{if(r==="career"){m("career");return}r==="cv"&&m("resume")},[r]);const F=ge.useRef(null);ge.useEffect(()=>{if(d!=="career")return;const _=F.current;if(!_)return;const K=_.querySelectorAll(".careerItem"),ie=new IntersectionObserver(L=>{L.forEach(W=>{W.isIntersecting&&(W.target.classList.add("careerItemVisible"),ie.unobserve(W.target))})},{threshold:.12});return K.forEach(L=>ie.observe(L)),()=>ie.disconnect()},[d]);const H=_=>y.jsx("div",{className:`projectList${_?" projectListReveal":""}`,children:Q4.map(K=>y.jsxs("div",{className:`projectItem${_?" projectItemReveal":""}`,children:[y.jsx("div",{className:"projectMedia",children:y.jsx(d3,{title:K.title,previewMp4:K.previewMp4,previewGif:K.previewGif,youtubeUrl:K.youtubeUrl})}),y.jsxs("div",{className:"projectInfo",children:[y.jsxs("div",{className:"projectTitleRow",children:[y.jsx("h3",{className:"h3",children:K.title}),K.year?y.jsx("span",{className:"pill year",children:K.year}):null,K.statusLabel?y.jsx("span",{className:"pill progress",children:K.statusLabel}):null,K.role?y.jsx("span",{className:"pill",children:K.role}):null]}),y.jsx("p",{className:"projectDesc",children:K.description}),K.tech?.length?y.jsx("div",{className:"tech",children:K.tech.map(ie=>y.jsx("span",{className:"tag",children:ie},ie))}):null,y.jsxs("div",{className:"projectActions",children:[K.githubUrl?y.jsxs("a",{className:"btn btnIcon",href:K.githubUrl,target:"_blank",rel:"noreferrer",children:[y.jsx(dc,{}),u.project.github]}):null,K.downloadUrl?y.jsx("a",{className:"btn primary",href:K.downloadUrl,target:"_blank",rel:"noreferrer",children:u.project.downloadPlay}):null]})]}),K.screenshots?.length?y.jsx("div",{className:"screenshots fill3",children:K.screenshots.slice(0,3).map((ie,L)=>y.jsx("img",{src:ie,alt:`${K.title} screenshot ${L+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>f({src:ie,alt:`${K.title} screenshot ${L+1}`})},L))}):null]},K.id))},_?"projects-tab-animated":"projects-tab-static"),ae=_=>_.logo?y.jsx("img",{src:_.logo,alt:_.org,className:"careerLogo"}):_.title==="Self Development"?y.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:y.jsx(i3,{})}):y.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:y.jsx(a3,{})}),le=_=>{b(K=>K[_]?{}:{[_]:!0})},B=(_,K)=>{_.key!=="Enter"&&_.key!==" "||(_.preventDefault(),le(K))};return y.jsxs("div",{className:"page",children:[y.jsxs("header",{className:"topbar",children:[y.jsx(h3,{}),y.jsxs("div",{className:"container topbarInner homeTopbarInner",children:[y.jsx("a",{className:"brand",href:j3("home"),children:y.jsx("span",{children:"Portfolio"})}),y.jsxs("nav",{className:"nav",children:[y.jsxs("button",{type:"button",className:`navTabBtn${d==="about"?" active":""}`,onClick:()=>x("about"),children:[u.nav.about,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),y.jsxs("button",{type:"button",className:`navTabBtn${d==="projects"?" active":""}`,onClick:()=>x("projects"),children:[u.nav.projects,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),y.jsxs("button",{type:"button",className:`navTabBtn${d==="career"?" active":""}`,onClick:()=>x("career"),children:[u.nav.career,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),y.jsxs("button",{type:"button",className:`navTabBtn${d==="resume"?" active":""}`,onClick:()=>x("resume"),children:[u.nav.resume,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]})]}),y.jsxs("div",{className:"rightActions",children:[y.jsx(v3,{}),y.jsx(m3,{theme:l,onToggle:i})]})]})]}),y.jsxs("main",{className:"container main",children:[d==="about"?y.jsxs("section",{className:"projects",id:"top",children:[y.jsxs("section",{className:"intro",style:{marginBottom:"20px"},children:[y.jsxs("h1",{className:"h3 heroTitle",children:[u.intro.greeting," ",y.jsx("span",{className:"accent",children:"Truong"})]}),y.jsxs("p",{className:"summary",children:[k,k.length<v.length?y.jsx("span",{className:`typingCursor${I?" paused":""}`,"aria-hidden":"true",children:"|"}):null]})]}),y.jsx(w3,{}),H(!1)]}):null,d==="projects"?y.jsx("section",{id:"projects",className:"projects",children:H(!0)}):null,d==="career"?y.jsxs("section",{className:"projects",children:[y.jsxs("div",{className:"careerTimeline",ref:F,"aria-label":"Career timeline",children:[y.jsx("span",{className:"careerFlowLabel top",children:u.career.now}),y.jsx("span",{className:"careerFlowLabel bottom",children:u.career.start}),y.jsx("span",{className:"careerLine","aria-hidden":"true"}),[...F4].reverse().map((_,K)=>{const ie=!!h[_.period],L=`home-career-detail-${K}`;return y.jsxs("div",{className:"careerItem",style:{"--delay":`${K*100}ms`},children:[y.jsxs("div",{className:"careerDateWrap",children:[y.jsx("div",{className:"careerDate",children:_.period}),y.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),y.jsxs("article",{className:`careerCard${ie?" careerCardOpen":""}`,role:"button",tabIndex:0,"aria-expanded":ie,"aria-controls":L,onClick:()=>le(_.period),onKeyDown:W=>B(W,_.period),children:[ae(_),y.jsx("div",{className:"careerCardHeader",children:y.jsxs("div",{className:"careerCardHeading",children:[y.jsx("h3",{className:"h3 careerRole",children:_.title}),y.jsx("p",{className:"careerOrg",children:_.org})]})}),_.location?y.jsx("p",{className:"careerLocation",children:_.location}):null,y.jsx("div",{id:L,className:"careerCardDetailsWrap",children:y.jsxs("div",{className:"careerCardDetails",children:[y.jsx("p",{className:"careerCardSummary",children:_.summary}),y.jsx("ul",{className:"careerHighlights",children:_.highlights.map(W=>y.jsx("li",{children:W},W))})]})})]})]},_.period)})]},"career-tab"),y.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[y.jsxs("article",{className:"careerExtraCard",children:[y.jsxs("h3",{className:"h3 careerExtraTitle",children:[y.jsx(r3,{}),u.career.education]}),y.jsx("ul",{className:"careerExtraList",children:K4.map(_=>y.jsx("li",{className:"careerExtraItem",children:y.jsxs("div",{className:"careerExtraRow",children:[_.logo?y.jsx("img",{src:_.logo,alt:_.school,className:"careerExtraLogo"}):null,y.jsxs("div",{className:"careerExtraBody",children:[y.jsxs("div",{className:"careerExtraHead",children:[y.jsxs("p",{className:"careerExtraMain",children:[_.degree,_.area?` in ${_.area}`:""]}),y.jsx("span",{className:"careerExtraDate",children:_.period})]}),y.jsx("p",{className:"careerExtraSub",children:_.school}),_.location?y.jsx("p",{className:"careerExtraMeta",children:_.location}):null]})]})},`${_.school}-${_.period}`))})]}),y.jsxs("article",{className:"careerExtraCard",children:[y.jsxs("h3",{className:"h3 careerExtraTitle",children:[y.jsx(u3,{}),u.career.certificates]}),y.jsx("ul",{className:"careerExtraList",children:J4.map(_=>y.jsx("li",{className:"careerExtraItem",children:y.jsxs("div",{className:"careerExtraRow",children:[_.logo?y.jsx("img",{src:_.logo,alt:_.issuer,className:"careerExtraLogo"}):null,y.jsxs("div",{className:"careerExtraBody",children:[y.jsxs("div",{className:"careerExtraHead",children:[y.jsx("p",{className:"careerExtraMain",children:_.title}),y.jsx("span",{className:"careerExtraDate",children:_.date})]}),y.jsx("p",{className:"careerExtraSub",children:_.issuer})]})]})},`${_.title}-${_.date}`))})]}),y.jsxs("article",{className:"careerExtraCard",children:[y.jsxs("h3",{className:"h3 careerExtraTitle",children:[y.jsx(o3,{}),u.career.awards]}),y.jsx("ul",{className:"careerExtraList",children:$4.map(_=>y.jsx("li",{className:"careerExtraItem",children:y.jsxs("div",{className:"careerExtraRow",children:[_.logo?y.jsx("img",{src:_.logo,alt:_.title,className:"careerExtraLogo"}):null,y.jsxs("div",{className:"careerExtraBody",children:[y.jsxs("div",{className:"careerExtraHead",children:[y.jsx("p",{className:"careerExtraMain",children:_.title}),y.jsx("span",{className:"careerExtraDate",children:_.date})]}),_.location?y.jsx("p",{className:"careerExtraMeta",children:_.location}):null]})]})},`${_.title}-${_.date}`))})]})]})]}):null,d==="resume"?y.jsx("section",{className:"resumeTabContent noCard",children:y.jsx("div",{className:"resumeSheetLayout",children:y.jsx("div",{className:"resumePreviewWrap noCard",children:y.jsx(E3,{})})})}):null]}),y.jsx("p",{className:`footerQuote${d==="resume"?" footerQuoteResume":""}`,children:u.footer.quote}),y.jsxs("footer",{className:"footer",children:[y.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:y.jsx("span",{className:"footerBaseAccent"})}),y.jsxs("div",{className:"container footerInner",children:[y.jsxs("span",{className:"footerLeft",children:[y.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),y.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:y.jsx(W4,{})}),y.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:y.jsx(Yg,{})}),y.jsx("a",{className:"socialIcon github",href:"https://github.com/FCBTruong",target:"_blank",rel:"noreferrer","aria-label":"GitHub profile",children:y.jsx(dc,{})})]}),y.jsxs("span",{className:"footerStack","aria-label":"Built with React, TypeScript and Vite",children:[y.jsx("span",{className:"stackChip react",title:"React","aria-hidden":"true",children:y.jsx(s3,{})}),y.jsx("span",{className:"stackChip ts",title:"TypeScript","aria-hidden":"true",children:y.jsx(c3,{})}),y.jsx("span",{className:"stackChip vite",title:"Vite","aria-hidden":"true",children:y.jsx(f3,{})})]})]})]}),p&&y.jsx(p3,{src:p.src,alt:p.alt,onClose:()=>f(null)})]})}function D3(){const l=localStorage.getItem("theme");return l==="light"||l==="dark"?l:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const N3=`
.footerQuoteResume {
  margin-top: 180px;
}

:root{
  --font-body: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  --font-display: Oxanium, Inter, ui-sans-serif, system-ui, sans-serif;

  --bg: #f6f8fc;
  --surface: rgba(255, 255, 255, 0.88);
  --surface-solid: #ffffff;
  --surface-2: #f3f6fb;
  --text: #101828;
  --muted: #667085;
  --border: rgba(16, 24, 40, 0.08);

  --accent: #4f46e5;
  --accent-2: #0ea5e9;

  --pattern-line: rgba(16, 24, 40, 0.05);
  --pattern-dot: rgba(16, 24, 40, 0.06);
  --project-card-bg: rgba(241, 245, 253, 0.9);
  --project-card-pattern: rgba(79, 70, 229, 0.04);
  --career-card-bg: rgba(248, 250, 254, 0.95);
  --career-card-pattern: rgba(79, 70, 229, 0.03);
  --career-accent: #2563eb;

  --shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
  --focus: 0 0 0 3px rgba(79, 70, 229, 0.20);

  color-scheme: light;
}

:root[data-theme="dark"]{
  --bg: #070b14;
  --surface: rgba(15, 23, 42, 0.80);
  --surface-solid: #0f172a;
  --surface-2: #111827;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --border: rgba(148, 163, 184, 0.14);

  --accent: #7c3aed;
  --accent-2: #22d3ee;

  --pattern-line: rgba(148, 163, 184, 0.08);
  --pattern-dot: rgba(148, 163, 184, 0.10);
  --project-card-bg: rgba(17, 26, 43, 0.82);
  --project-card-pattern: rgba(34, 211, 238, 0.035);
  --career-card-bg: rgba(16, 24, 39, 0.86);
  --career-card-pattern: rgba(34, 211, 238, 0.045);
  --career-accent: #38bdf8;

  --shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  --focus: 0 0 0 3px rgba(34, 211, 238, 0.20);

  color-scheme: dark;
}

*{ box-sizing: border-box; }

html, body, #root{
  height: 100%;
  min-height: 100%;
}

html{
  scroll-behavior: smooth;
}

body{
  margin: 0;
  font-family: var(--font-body);
  color: var(--text);
  background-color: var(--bg);
  background-image: radial-gradient(circle at 1px 1px,
    color-mix(in srgb, var(--text) 6%, transparent) 1px,
    transparent 0);
  background-size: 18px 18px;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.clickRipples{
  pointer-events: none;
  position: fixed;
  z-index: 0;
  inset: 0;
}

.ripple{
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  transform: translate(-50%, -50%) scale(0.25);
  opacity: 0;
}

.rippleDots{
  position: absolute;
  width: 230px;
  height: 230px;
  border-radius: 999px;
  transform: translate(-50%, -50%) scale(0.68);
  opacity: 0;
  background-image: radial-gradient(circle at 1px 1px,
    color-mix(in srgb, var(--text) 9%, transparent) 1px,
    transparent 0);
  background-size: 18px 18px;
  background-position: 0 0;
  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.62) 56%, rgba(0, 0, 0, 0) 100%);
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.62) 56%, rgba(0, 0, 0, 0) 100%);
  animation: rippleDotsPop 960ms cubic-bezier(.2,.8,.35,1) forwards;
}

.rippleA{
  border: 1.25px solid color-mix(in srgb, var(--accent) 42%, transparent);
  background: radial-gradient(circle, color-mix(in srgb, var(--accent-2) 12%, transparent) 0%, transparent 68%);
  animation: rippleSoftA 1180ms cubic-bezier(.16,.84,.32,1) forwards;
}

.rippleB{
  border: 1px solid color-mix(in srgb, var(--accent-2) 28%, transparent);
  animation: rippleSoftB 1180ms cubic-bezier(.16,.84,.32,1) 90ms forwards;
}

@keyframes rippleSoftA{
  0%{
    opacity: 0.28;
    transform: translate(-50%, -50%) scale(0.25);
  }
  100%{
    opacity: 0;
    transform: translate(-50%, -50%) scale(9.2);
  }
}

@keyframes rippleSoftB{
  0%{
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(0.4);
  }
  100%{
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.4);
  }
}

@keyframes rippleDotsPop{
  0%{
    opacity: 0.20;
    transform: translate(-50%, -50%) scale(0.68);
    background-position: 0 0;
  }
  55%{
    opacity: 0.11;
    background-position: 0 0;
  }
  100%{
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.04);
    background-position: 0 0;
  }
}

a{
  color: inherit;
  text-decoration: none;
}

img{
  display: block;
}

button{
  font: inherit;
}

.container{
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
}

.page{
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main{
  padding: 28px 0 56px;
  display: grid;
  gap: 28px;
}

@keyframes revealUp{
  from{
    opacity: 0;
    transform: translateY(22px) scale(0.985);
    filter: blur(3px);
  }
  to{
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes revealRight{
  from{
    opacity: 0;
    transform: translateX(-18px);
    filter: blur(2px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

@keyframes headerEnterLeft{
  from{
    opacity: 0;
    transform: translateX(-14px);
    filter: blur(2px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

@keyframes headerEnterCenter{
  from{
    opacity: 0;
    transform: translateY(-8px) scale(0.985);
    filter: blur(1.5px);
  }
  to{
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes headerEnterRight{
  from{
    opacity: 0;
    transform: translateX(14px);
    filter: blur(2px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

.topbar{
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--surface-solid) 88%, transparent);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid color-mix(in srgb, var(--accent) 28%, var(--border));
  box-shadow: 0 2px 16px color-mix(in srgb, var(--accent) 6%, transparent);
  overflow: visible;
}

.topbarInner{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 10px;
}

.topbarInner > .btn,
.topbarInner > .brand,
.topbarInner > .nav,
.topbarInner > .rightActions{
  opacity: 0;
  will-change: transform, opacity, filter;
}

.topbarInner > .btn,
.topbarInner > .brand{
  animation: headerEnterLeft 460ms cubic-bezier(.2,.8,.2,1) 40ms both;
}

.topbarInner > .nav{
  animation: headerEnterCenter 500ms cubic-bezier(.2,.8,.2,1) 110ms both;
}

.topbarInner > .rightActions{
  animation: headerEnterRight 460ms cubic-bezier(.2,.8,.2,1) 170ms both;
}

.topbarScene{
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.62;
  overflow: hidden;
}

.sceneSkyTint{
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      color-mix(in srgb, var(--accent) 10%, transparent) 0%,
      transparent 58%
    ),
    radial-gradient(280px 80px at 86% 14%, color-mix(in srgb, var(--accent-2) 18%, transparent), transparent 74%);
}

.sceneSun{
  position: absolute;
  width: 34px;
  height: 34px;
  right: 9%;
  top: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--accent-2) 34%, transparent) 0%, transparent 70%);
  filter: blur(0.4px);
  animation: sunBreath 8s ease-in-out infinite;
}

.sceneRidge{
  position: absolute;
  left: -2%;
  width: 104%;
  bottom: 0;
  background: color-mix(in srgb, var(--text) 9%, transparent);
}

.ridgeFar{
  height: 26px;
  opacity: 0.62;
  clip-path: polygon(0 100%, 10% 62%, 20% 78%, 32% 48%, 46% 76%, 62% 44%, 76% 74%, 90% 56%, 100% 100%);
}

.ridgeNear{
  height: 18px;
  opacity: 0.78;
  clip-path: polygon(0 100%, 14% 74%, 30% 86%, 44% 68%, 58% 90%, 72% 72%, 88% 84%, 100% 100%);
}

.scenePine{
  position: absolute;
  bottom: 6px;
  width: 14px;
  height: 20px;
  background: color-mix(in srgb, var(--accent-2) 24%, transparent);
  clip-path: polygon(50% 0%, 90% 72%, 66% 72%, 66% 100%, 34% 100%, 34% 72%, 10% 72%);
}

.pine1{ left: 26%; opacity: 0.9; }
.pine2{ left: 51%; opacity: 0.72; }
.pine3{ right: 20%; opacity: 0.84; }

.sceneCloud{
  position: absolute;
  top: 10px;
  width: 64px;
  height: 14px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--text) 12%, transparent);
}

.cloudA{ left: 35%; animation: cloudDriftA 24s linear infinite; }
.cloudB{ left: 62%; opacity: 0.74; animation: cloudDriftB 29s linear infinite; }

@keyframes sunBreath{
  0%, 100%{ opacity: 0.56; transform: scale(0.95); }
  50%{ opacity: 0.8; transform: scale(1.06); }
}

@keyframes cloudDriftA{
  0%, 100%{ transform: translateX(0); }
  50%{ transform: translateX(22px); }
}

@keyframes cloudDriftB{
  0%, 100%{ transform: translateX(0); }
  50%{ transform: translateX(-20px); }
}

/* Dust particles - soft, realistic puffs */
.sceneDust{
  position: absolute;
  bottom: 22px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--text) 45%, transparent);
  opacity: 0;
  filter: blur(0.5px);
}

.dust1{ left: 20%; animation: dustRise 3.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
.dust2{ left: 22%; animation: dustRise 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s infinite; }
.dust3{ left: 19%; animation: dustRise 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s infinite; }
.dust4{ left: 23%; width: 2px; height: 2px; animation: dustRise 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s infinite; }
.dust5{ left: 21%; width: 2.5px; height: 2.5px; animation: dustRise 3.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s infinite; }

@keyframes dustRise{
  0%{
    bottom: 22px;
    opacity: 0;
    transform: translateY(0) translateX(0) scale(1);
  }
  5%{
    opacity: 0.7;
  }
  50%{
    opacity: 0.5;
    transform: translateY(-12px) translateX(4px) scale(0.85);
  }
  95%{
    opacity: 0.1;
  }
  100%{
    bottom: 22px;
    opacity: 0;
    transform: translateY(-24px) translateX(8px) scale(0.6);
  }
}

/* Leaves falling with wind drift - more realistic */
.sceneLeaf{
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent-2) 52%, transparent);
  top: -8px;
  opacity: 0;
  filter: blur(0.3px);
}

.leaf1{ left: 12%; animation: leafDrift 7.2s cubic-bezier(0.25, 0.25, 0.25, 1) infinite; }
.leaf2{ left: 32%; animation: leafDrift 8.1s cubic-bezier(0.25, 0.25, 0.25, 1) 0.8s infinite; }
.leaf3{ left: 52%; animation: leafDrift 7.8s cubic-bezier(0.25, 0.25, 0.25, 1) 1.6s infinite; }
.leaf4{ left: 68%; animation: leafDrift 8.4s cubic-bezier(0.25, 0.25, 0.25, 1) 0.4s infinite; }
.leaf5{ left: 28%; width: 4px; height: 4px; animation: leafDrift 7.5s cubic-bezier(0.25, 0.25, 0.25, 1) 2s infinite; }
.leaf6{ left: 75%; width: 5.5px; height: 5.5px; animation: leafDrift 8.8s cubic-bezier(0.25, 0.25, 0.25, 1) 1.2s infinite; }

@keyframes leafDrift{
  0%{
    top: -8px;
    opacity: 0;
    transform: translateX(0) rotateZ(0deg);
  }
  8%{
    opacity: 0.75;
  }
  50%{
    opacity: 0.65;
    transform: translateX(16px) rotateZ(180deg);
  }
  92%{
    opacity: 0.2;
  }
  100%{
    top: 68px;
    opacity: 0;
    transform: translateX(28px) rotateZ(360deg);
  }
}

/* Wind effect - smooth flowing lines */
.sceneWind{
  position: absolute;
  height: 1.2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent-2) 35%, transparent), transparent);
  opacity: 0;
  filter: blur(0.6px);
}

.wind1{ top: 12px; left: 5%; width: 35px; animation: windStream 2.8s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
.wind2{ top: 32px; left: 10%; width: 40px; animation: windStream 3.2s cubic-bezier(0.42, 0, 0.58, 1) 0.5s infinite; }
.wind3{ top: 50px; left: 8%; width: 38px; animation: windStream 3s cubic-bezier(0.42, 0, 0.58, 1) 1s infinite; }

@keyframes windStream{
  0%{
    left: 5%;
    opacity: 0;
    transform: translateX(0) scaleX(1);
  }
  25%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.5;
  }
  100%{
    left: 65%;
    opacity: 0;
    transform: translateX(0) scaleX(0.8);
  }
}

.brand{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav{
  display: inline-flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.navLink{
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--muted);
  transition: background 180ms ease, color 180ms ease;
}

.navLink:hover{
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.navLinkBtn{
  padding: 8px 10px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease;
}

.navLinkBtn:hover{
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.navLinkBtn:focus-visible{
  outline: none;
  box-shadow: var(--focus);
}

.navTabBtn{
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease;
}

.navTabBtn:hover{
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.navTabBtn.active{
  color: var(--text);
}

.navTabUnderline{
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 2px;
  display: block;
  height: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--text) 86%, transparent);
  transform: scaleX(0);
  transform-origin: center;
  opacity: 0;
  will-change: transform, opacity;
  transition: transform 520ms cubic-bezier(.2,.85,.25,1), opacity 220ms ease;
}

.navTabBtn.active .navTabUnderline{
  transform: scaleX(1);
  opacity: 1;
}

.navTabBtn:focus-visible{
  outline: none;
  box-shadow: var(--focus);
}

.h3{
  margin: 0;
  font-size: 20px;
  font-family: var(--font-display);
  letter-spacing: 0.03em;
}

.heroTitle{
  font-size: clamp(28px, 4vw, 30px);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.tagline{
  margin: 8px 0 6px 0;
  font-size: 14px;
  font-weight: 500;
  color: color-mix(in srgb, var(--text) 68%, var(--muted) 32%);
  font-style: italic;
  letter-spacing: 0.02em;
}

.footerQuote{
  margin: 0 auto;
  padding: 22px 14px 16px;
  width: fit-content;
  max-width: min(92vw, 720px);
  font-size: 12.5px;
  font-weight: 600;
  color: color-mix(in srgb, var(--muted) 64%, var(--text) 36%);
  font-style: italic;
  letter-spacing: 0.02em;
  line-height: 1.5;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.footerQuote::before,
.footerQuote::after{
  content: "";
  display: block;
  width: clamp(24px, 5vw, 48px);
  height: 1px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--career-accent) 34%, var(--border) 66%), transparent);
}

.accent{
  color: #c2440a;
  text-shadow: 0 0 18px rgba(194, 68, 10, 0.20);
}

.summary{
  margin: 4px 0 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 18px;
  max-width: 88ch;
}

.typingCursor{
  display: inline-block;
  margin-left: 2px;
  color: var(--accent-2);
  opacity: 1;
}

.typingCursor.paused{
  animation: typingCursorBlink 920ms steps(1, end) infinite;
}

@keyframes typingCursorBlink{
  0%, 45%{ opacity: 1; }
  46%, 100%{ opacity: 0; }
}

body{
  margin: 0;
  font-family: var(--font-body);
  color: var(--text);
  background-color: var(--bg);
  background-image: radial-gradient(circle at 1px 1px,
    color-mix(in srgb, var(--text) 6%, transparent) 1px,
    transparent 0);
  background-size: 18px 18px;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
  box-shadow: var(--shadow);
  transition: transform 150ms ease, background 180ms ease, border-color 180ms ease, opacity 180ms ease;
  backdrop-filter: blur(10px);
}

.btn:hover{
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--accent) 24%, var(--border));
}

.btn:focus-visible{
  outline: none;
  box-shadow: var(--focus);
}

.btnIcon{
  background: color-mix(in srgb, var(--surface-solid) 84%, transparent);
}

.btnIcon:hover{
  background: color-mix(in srgb, var(--surface-solid) 94%, transparent);
}

.btnIcon svg{
  flex-shrink: 0;
}

.btnIconOnly{
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 999px;
}

.btnIconOnly svg{
  width: 18px;
  height: 18px;
}

.primary{
  border: 1px solid color-mix(in srgb, var(--accent) 18%, var(--border));
  background: color-mix(in srgb, var(--accent) 8%, var(--surface-solid));
  color: var(--text);
  box-shadow: none;
}

.primary:hover{
  background: color-mix(in srgb, var(--accent) 12%, var(--surface-solid));
  filter: none;
}

.rightActions{
  display: flex;
  gap: 10px;
  align-items: center;
}

.homeTopbarInner{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.homeTopbarInner .brand{
  justify-self: start;
}

.homeTopbarInner .nav{
  justify-self: center;
}

.homeTopbarInner .rightActions{
  justify-self: end;
}

@media (max-width: 980px){
  .homeTopbarInner{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .homeTopbarInner .brand{
    order: 1;
  }

  .homeTopbarInner .rightActions{
    order: 2;
    margin-left: auto;
  }

  .homeTopbarInner .nav{
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
}

.projects{
  display: grid;
  gap: 12px;
}

.sectionHead{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.muted{
  color: var(--muted);
}

.projectList{
  display: grid;
  gap: 48px;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.projectListReveal .projectItemReveal{
  opacity: 0;
  animation: revealUp 600ms cubic-bezier(.18,.84,.28,1) forwards;
}

.projectListReveal .projectItemReveal:nth-child(1){ animation-delay: 60ms; }
.projectListReveal .projectItemReveal:nth-child(2){ animation-delay: 150ms; }
.projectListReveal .projectItemReveal:nth-child(3){ animation-delay: 240ms; }
.projectListReveal .projectItemReveal:nth-child(4){ animation-delay: 330ms; }
.projectListReveal .projectItemReveal:nth-child(5){ animation-delay: 420ms; }
.projectListReveal .projectItemReveal:nth-child(6){ animation-delay: 510ms; }

.projectItem{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 16px;
  border: 1px solid color-mix(in srgb, var(--border) 92%, var(--text) 8%);
  border-radius: 18px;
  background: var(--project-card-bg);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.projectItem::before{
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 14%, color-mix(in srgb, white 10%, transparent) 0%, transparent 24%),
    repeating-linear-gradient(
      45deg,
      var(--project-card-pattern) 0px,
      var(--project-card-pattern) 1px,
      transparent 1px,
      transparent 16px
    );
  opacity: 0.65;
  pointer-events: none;
}

.projectItem > *{
  position: relative;
  z-index: 1;
}

.projectMedia{
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface-2);
}

.previewCard{
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface-2);
}

.previewMedia{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.previewPlaceholder{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 14px;
  background: var(--surface-2);
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.previewOverlayBtn{
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(15, 23, 42, 0.68);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  backdrop-filter: blur(8px);
  transition: background 180ms ease, transform 150ms ease;
}

.previewOverlayBtn:hover{
  background: rgba(15, 23, 42, 0.82);
  transform: translateY(-1px);
}

.projectTitleRow{
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.pill{
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 80%, transparent);
  padding: 4px 8px;
  border-radius: 999px;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.pill.year{
  color: var(--muted);
  border-color: color-mix(in srgb, var(--border) 60%, transparent);
  background: color-mix(in srgb, var(--surface-solid) 65%, transparent);
}

.pill.progress{
  color: color-mix(in srgb, var(--muted) 88%, var(--text) 12%);
  border-color: color-mix(in srgb, #14b8a6 18%, var(--border));
  background: color-mix(in srgb, #14b8a6 5%, var(--surface-solid) 95%);
}

.projectDesc{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 16px;
}

.tech{
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag{
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 82%, transparent);
  padding: 5px 9px;
  border-radius: 999px;
  font-family: var(--font-display);
  letter-spacing: 0.03em;
}

.projectActions{
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.footer{
  position: relative;
  margin-top: auto;
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 32%, transparent);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.footerLandscape{
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.footerBaseAccent{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    color-mix(in srgb, var(--accent) 38%, transparent) 30%,
    color-mix(in srgb, var(--accent-2) 40%, transparent) 70%,
    transparent 100%
  );
  opacity: 0.6;
}

.footerInner{
  position: relative;
  z-index: 1;
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  opacity: 0;
  animation: revealUp 700ms cubic-bezier(.2,.8,.25,1) 980ms forwards;
}

.footerLeft{
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.footerStack{
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.stackChip{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 24px;
  padding: 0;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  background: color-mix(in srgb, var(--surface-solid) 82%, transparent);
  transition: transform 180ms ease, color 180ms ease, border-color 180ms ease;
}

.stackChip svg{
  width: 14px;
  height: 14px;
}

.stackChip.react:hover{
  color: #61dafb;
  border-color: color-mix(in srgb, #61dafb 44%, var(--border));
  transform: translateY(-1px);
}

.stackChip.ts:hover{
  color: #3178c6;
  border-color: color-mix(in srgb, #3178c6 44%, var(--border));
  transform: translateY(-1px);
}

.stackChip.vite:hover{
  color: #f4b400;
  border-color: color-mix(in srgb, #f4b400 44%, var(--border));
  transform: translateY(-1px);
}

.socialIcon{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  color: var(--muted);
  transition: color 180ms ease, background 180ms ease;
}

.socialIcon:hover{
  color: var(--text);
  background: color-mix(in srgb, var(--text) 8%, transparent);
}

.socialIcon.linkedin:hover{
  color: #0a66c2;
  background: color-mix(in srgb, #0a66c2 12%, transparent);
}

.socialIcon.gmail:hover{
  color: #ea4335;
  background: color-mix(in srgb, #ea4335 12%, transparent);
}

.socialIcon.github:hover{
  color: #1f6feb;
  background: color-mix(in srgb, #1f6feb 12%, transparent);
}

.cvPage{
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.careerPage{
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.careerMain{
  padding: 24px 0 48px;
  display: grid;
  gap: 22px;
}

.careerIntro{
  opacity: 0;
  animation: revealUp 680ms cubic-bezier(.2,.8,.25,1) 110ms forwards;
}

.careerTitle{
  font-size: clamp(24px, 4vw, 30px);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.careerSummary{
  max-width: 72ch;
}

.careerTimeline{
  position: relative;
  display: grid;
  gap: 22px;
  padding: 40px 0 44px;
}

.careerLine{
  position: absolute;
  left: 143px;
  top: 20px;
  bottom: 38px;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--career-accent) 36%, transparent) 10%, color-mix(in srgb, var(--career-accent) 30%, transparent) 90%, transparent 100%);
  z-index: 0;
}

.careerFlowLabel{
  position: absolute;
  left: 143px;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  color: var(--muted);
  text-transform: uppercase;
}

.careerFlowLabel.top{ top: 0; }
.careerFlowLabel.bottom{ bottom: 0; }

.careerItem{
  position: relative;
  display: grid;
  grid-template-columns: 126px 1fr;
  column-gap: 34px;
  align-items: start;
  opacity: 0;
  transform: translateY(28px);
}

.careerItem.careerItemVisible{
  opacity: 1;
  transform: none;
  transition:
    opacity 560ms cubic-bezier(.19,.82,.28,1) var(--delay, 0ms),
    transform 560ms cubic-bezier(.19,.82,.28,1) var(--delay, 0ms);
}

.careerDateWrap{
  position: relative;
  min-height: 26px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.careerDate{
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--career-accent) 68%, var(--text) 32%);
  text-align: right;
  padding: 0;
  line-height: 1;
}

.careerDot{
  position: absolute;
  top: 8px;
  right: -23px;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, var(--career-accent) 72%, white 28%);
  background: var(--career-card-bg);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--career-accent) 12%, transparent);
  z-index: 2;
  opacity: 0;
  transform: scale(0.3);
  transition:
    opacity 300ms ease calc(var(--delay, 0ms) + 280ms),
    transform 420ms cubic-bezier(.34,1.56,.64,1) calc(var(--delay, 0ms) + 280ms);
}

.careerItem.careerItemVisible .careerDot{
  opacity: 1;
  transform: scale(1);
}

.careerCard{
  position: relative;
  z-index: 1;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 20px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--surface-solid) 94%, var(--career-accent) 6%) 0%, var(--career-card-bg) 100%);
  box-shadow: var(--shadow);
  cursor: pointer;
  transition:
    border-color 220ms ease,
    transform 220ms ease,
    box-shadow 220ms ease,
    background 220ms ease;
}

.careerCard:hover{
  border-color: color-mix(in srgb, var(--career-accent) 18%, var(--border));
  transform: translateY(-1px);
  box-shadow: 0 16px 34px color-mix(in srgb, var(--career-accent) 9%, transparent);
}

.careerCard:focus-visible{
  outline: none;
  box-shadow: var(--focus), 0 16px 34px color-mix(in srgb, var(--career-accent) 10%, transparent);
}

.careerCardOpen{
  border-color: color-mix(in srgb, var(--career-accent) 24%, var(--border));
  background: linear-gradient(180deg, color-mix(in srgb, var(--surface-solid) 92%, var(--career-accent) 8%) 0%, var(--career-card-bg) 100%);
}

.careerCardHeader{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.careerCardHeading{
  min-width: 0;
}

.careerRole{
  font-size: 18px;
  margin-bottom: 4px;
}

.careerOrg{
  margin: 0;
  color: color-mix(in srgb, var(--text) 82%, var(--muted) 18%);
  font-weight: 600;
}

.careerLocation{
  margin: 2px 0 0;
  color: color-mix(in oklab, var(--muted) 78%, var(--text) 22%);
  font-size: 13px;
}

.careerCardDetailsWrap{
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 260ms cubic-bezier(.2,.8,.2,1),
    opacity 220ms ease,
    margin-top 260ms cubic-bezier(.2,.8,.2,1);
}

.careerCardOpen .careerCardDetailsWrap{
  grid-template-rows: 1fr;
  opacity: 1;
  margin-top: 10px;
}

.careerCardDetails{
  overflow: hidden;
}

.careerCardSummary{
  margin: 0 0 8px;
  color: var(--muted);
  line-height: 1.7;
}

.careerLogo{
  width: 42px;
  height: 42px;
  object-fit: contain;
  margin-bottom: 14px;
  opacity: 0.96;
}

.careerLogoBadge{
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  color: color-mix(in srgb, var(--career-accent) 78%, white 22%);
  filter: drop-shadow(0 6px 14px color-mix(in srgb, var(--career-accent) 18%, transparent));
}

.careerLogoBadge.selfDevelopment{
  color: #f59e0b;
  filter: drop-shadow(0 6px 16px rgba(245, 158, 11, 0.24));
}

.careerLogoBadge.companyFallback{
  color: color-mix(in srgb, var(--career-accent) 84%, white 16%);
}

.careerHighlights{
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  color: var(--text);
}

.careerExtras{
  margin-top: 26px;
  padding-top: 16px;
  border-top: 1px solid color-mix(in srgb, var(--border) 86%, transparent);
  display: grid;
  gap: 0;
}

.careerExtraCard{
  padding: 14px 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.careerExtraCard + .careerExtraCard{
  border-top: 1px solid color-mix(in srgb, var(--border) 88%, transparent);
}

.careerExtraTitle{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--career-accent) 68%, var(--text) 32%);
  margin-bottom: 9px;
}

.careerExtraTitle svg{
  width: 17px;
  height: 17px;
  opacity: 0.9;
}

.careerExtraList{
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0;
}

.careerExtraItem{
  padding: 10px 0;
}

.careerExtraRow{
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.careerExtraLogo{
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.careerExtraBody{
  min-width: 0;
}

.careerExtraItem + .careerExtraItem{
  border-top: 1px dashed color-mix(in srgb, var(--border) 70%, transparent);
}

.careerExtraHead{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.careerExtraItem p,
.careerExtraItem span{
  margin: 0;
}

.careerExtraMain{
  font-weight: 700;
  color: var(--text);
  line-height: 1.45;
}

.careerExtraDate{
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--career-accent) 66%, var(--text) 34%);
  font-family: var(--font-display);
}

.careerExtraSub{
  margin-top: 3px;
  color: color-mix(in srgb, var(--text) 84%, var(--muted) 16%);
  font-size: 14px;
}

.careerExtraMeta{
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
}

.cvMain{
  padding: 20px 0 32px;
  flex: 1;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: revealUp 700ms cubic-bezier(.2,.8,.25,1) 160ms forwards;
}

.cvLoadCard,
.cvPaper,
.cvHeroCard,
.cvSectionCard{
  border: 1px solid var(--border);
  border-radius: 16px;
  background: color-mix(in srgb, var(--surface-solid) 94%, transparent);
  box-shadow: var(--shadow);
}

.cvLoadCard{
  width: min(210mm, 100%);
  min-height: 160px;
  display: grid;
  place-items: center;
  padding: 24px;
}

.cvLoadCard p{
  margin: 0;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cvLoadCard--error p{
  color: #ffb4b4;
}

.cvPaper{
  width: min(210mm, 100%);
  min-height: 297mm;
  padding: clamp(22px, 4vw, 30px);
  background: #ffffff;
  color: #1f2330;
  border-color: transparent;
  box-shadow: none;
}

.cvPaperHeader{
  display: block;
  padding-bottom: 8px;
}

.cvPaperHeaderMain{
  min-width: 0;
}

.cvPaperEyebrow{
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(138, 59, 18, 0.88);
}

.cvPaperMeta{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 16px;
  padding: 8px 0 10px;
  overflow-x: auto;
}

.cvPaperMeta a{
  color: #1f2330;
  font-size: 13px;
  font-weight: 600;
}

.cvContactItem{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: max-content;
  white-space: nowrap;
}

.cvContactItem--static{
  color: #1f2330;
  font-size: 13px;
  font-weight: 600;
}

.cvContactIcon{
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(138, 59, 18, 0.09);
  color: #8a3b12;
  flex: 0 0 auto;
}

.cvPaperMeta a:hover,
.cvItemLink:hover{
  color: #8a3b12;
}

.cvPaperBody{
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.6fr);
  gap: 24px;
  padding-top: 10px;
}

.cvPaperBody--stacked{
  grid-template-columns: 1fr;
  gap: 14px;
}

.cvSidebarColumn,
.cvContentColumn{
  display: grid;
  align-content: start;
  gap: 18px;
}

.cvSidebarSection,
.cvMainSection{
  display: grid;
  gap: 6px;
}

.cvSidebarSection{
  padding-right: 10px;
}

.cvSidebarItem{
  padding-bottom: 10px;
}

.cvSidebarItem:last-child{
  padding-bottom: 0;
}

.cvHeroCard{
  padding: 18px;
}

.cvHeroName{
  margin: 0;
  font-size: clamp(24px, 4vw, 31px);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: var(--font-display);
  color: inherit;
}

.cvHeroHeadline{
  margin: 4px 0 0;
  color: rgba(31, 35, 48, 0.72);
}

.cvHeroMeta{
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cvHeroMeta a,
.cvHeroMeta span{
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 13px;
}

.cvHeroMeta a:hover{
  color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 35%, var(--border));
}

.cvSectionCard{
  padding: 14px;
}

.cvSectionHeading{
  margin: 0 0 4px;
  font-size: 15px;
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #8a3b12;
  line-height: 1.15;
}

.cvList{
  display: grid;
  gap: 10px;
}

.cvGrid2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.cvTechGrid{
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.cvItemCard{
  border: 1px solid rgba(31, 35, 48, 0.08);
  border-radius: 12px;
  padding: 11px 12px;
  background: rgba(255, 255, 255, 0.68);
}

.cvItemCompany{
  margin: 0 0 3px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8a3b12;
}

.cvTechCard{
  padding: 14px 15px;
  border-color: rgba(138, 59, 18, 0.14);
  background:
    linear-gradient(180deg, rgba(138, 59, 18, 0.05), rgba(255, 255, 255, 0.94));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.cvTechCard h3{
  margin: 0;
  font-size: 12px;
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8a3b12;
}

.cvTechCard .cvHtml{
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: rgba(31, 35, 48, 0.86);
}

.cvTechCard .cvHtml p{
  margin: 0;
}

.cvItemTop{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.cvItemTop h3{
  margin: 0;
  font-size: 15px;
}

.cvItemPeriod{
  font-size: 11px;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(138, 59, 18, 0.9);
}

.cvItemSub{
  margin: 2px 0 0;
  color: rgba(31, 35, 48, 0.64);
  font-size: 13px;
}

.cvItemLink{
  display: inline-flex;
  margin-top: 6px;
  color: #8a3b12;
  font-size: 13px;
  font-weight: 600;
}

.cvHtml{
  margin-top: 2px;
  line-height: 1.6;
  color: rgba(31, 35, 48, 0.88);
}

.cvHtml p{
  margin: 6px 0;
}

.cvHtml ul{
  margin: 6px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 5px;
}

.cvHtml li::marker{
  color: rgba(138, 59, 18, 0.9);
}

.cvHtml p:empty,
.cvHtml li p:empty{
  display: none;
}

.cvHtml li p{
  margin: 0;
  display: inline;
}

@media (max-width: 900px){
  .cvPaper{
    min-height: auto;
  }

  .cvPaperMeta{
    flex-wrap: wrap;
  }

  .cvPaperBody{
    grid-template-columns: 1fr;
  }

  .cvTechGrid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cvSidebarSection{
    padding-right: 0;
  }
}

@media print{
  .topbar,
  .chatbot,
  .click-ripples{
    display: none !important;
  }

  .cvMain{
    padding: 0;
  }

  .cvPaper{
    width: 210mm;
    min-height: 297mm;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }
}

.resumeTabContent{
  display: block;
  padding: 0;
  background: none;
  box-shadow: none;
}
.resumeTabContent.noCard {
  padding: 0;
  background: none;
  box-shadow: none;
}

.resumeSheetLayout{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.resumePreviewWrap{
  position: relative;
  width: min(210mm, 100%);
  background: none;
  box-shadow: none;
  padding: 0;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
}
.resumePreviewWrap.noCard {
  background: none;
  box-shadow: none;
  padding: 0;
}

.screenshots.fill3{
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.screenshots.fill3 img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface-2);
}

.screenshotThumb{
  cursor: zoom-in;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.screenshotThumb:hover{
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}

.lightboxOverlay{
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: zoom-out;
  animation: lbFadeIn 160ms ease;
}

@keyframes lbFadeIn{
  from{ opacity: 0; }
  to{ opacity: 1; }
}

.lightboxImg{
  max-width: min(1100px, 100%);
  max-height: 90vh;
  border-radius: 14px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  cursor: default;
  animation: lbZoomIn 180ms ease;
}

@keyframes lbZoomIn{
  from{ transform: scale(0.94); opacity: 0; }
  to{ transform: scale(1); opacity: 1; }
}

.lightboxClose{
  position: fixed;
  top: 16px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 160ms ease;
}

.lightboxClose:hover{
  background: rgba(255,255,255,0.2);
}

@media (max-width: 920px){
  .resumeSheetLayout{
    grid-template-columns: 1fr;
  }

  .resumeSheetAside{
    position: static;
    display: flex;
    justify-content: flex-end;
  }

  .projectItem{
    grid-template-columns: 1fr;
  }

  .resumePdfFrame{
    min-height: 68vh;
  }

  .cvGrid2{
    grid-template-columns: 1fr;
  }

  .careerTimeline{ padding: 36px 0 40px; }
  .careerLine{
    left: 115px;
    bottom: 34px;
  }
  .careerFlowLabel{ left: 115px; }
  .careerItem{
    grid-template-columns: 102px 1fr;
    column-gap: 26px;
  }
  .careerDot{ right: -19px; }

}

@media (max-width: 640px){
  .container{
    width: min(1100px, calc(100% - 24px));
  }

  .topbarInner{
    align-items: flex-start;
  }

  .nav{
    justify-content: flex-end;
  }

  .homeTopbarInner{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .homeTopbarInner .brand{
    order: 1;
  }

  .homeTopbarInner .rightActions{
    order: 2;
    margin-left: auto;
  }

  .homeTopbarInner .nav{
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }

  .summary{
    font-size: 16px;
  }

  .projectItem{
    padding: 12px;
  }

  .cvHeroCard,
  .cvSectionCard{
    border-radius: 12px;
  }

  .cvHeroCard{
    padding: 14px;
  }

  .cvSectionCard,
  .cvItemCard{
    padding: 10px;
  }

  .cvHeroMeta a,
  .cvHeroMeta span{
    font-size: 12px;
  }

  .cvTechGrid{
    grid-template-columns: 1fr;
  }

  .resumeDownloadBtn{
    top: 10px;
    right: 10px;
    height: 28px;
    min-width: 40px;
    padding: 0 9px;
    font-size: 11px;
  }

  .careerTimeline{ padding-top: 20px; }
  .careerLine,
  .careerFlowLabel{ display: none; }
  .careerItem{
    grid-template-columns: 1fr;
    row-gap: 8px;
  }
  .careerDate{
    text-align: left;
  }
  .careerDateWrap{
    min-height: auto;
    justify-content: flex-start;
  }
  .careerDot{ display: none; }
  .careerCard{ padding: 12px; }
  .careerCardHeader{
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .footerInner{
    flex-direction: column;
  }
}

/* Memory Game */
.memoryGame{
  margin-bottom: 32px;
  position: relative;
  opacity: 0;
  animation: revealUp 760ms cubic-bezier(.18,.84,.28,1) 180ms forwards;
}

.intro{
  opacity: 0;
  animation: revealUp 780ms cubic-bezier(.18,.84,.28,1) 90ms forwards;
}

@media (prefers-reduced-motion: reduce){
  .topbarInner,
  .topbarInner > .btn,
  .topbarInner > .brand,
  .topbarInner > .nav,
  .topbarInner > .rightActions,
  .intro,
  .memoryGame,
  .careerIntro,
  .careerItem,
  .careerDot,
  .careerCard,
  .projects,
  .projectItem,
  .footerInner,
  .cvMain{
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }

  .typingCursor{
    animation: none !important;
  }

  .projectListReveal .projectItemReveal{
    animation: none !important;
    opacity: 1 !important;
  }
}

.memoryGameHeader{
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 13px;
  color: var(--muted);
  font-family: var(--font-body);
}

.memoryGameLevel{
  font-weight: 700;
  font-family: var(--font-display);
  color: #c2440a;
  font-size: 13px;
  margin-right: auto;
}

.memoryGameGrid{
  display: grid;
  gap: 6px;
  justify-content: center;
}

.memoryCard{
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  perspective: 600px;
  flex-shrink: 0;
}

.memoryCardInner{
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 360ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
}

.memoryCard.flipped .memoryCardInner{
  transform: rotateY(180deg);
}

.memoryCardBack,
.memoryCardFront{
  position: absolute;
  inset: 0;
  border-radius: 8px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.memoryCardBack{
  background: color-mix(in srgb, var(--surface-2) 82%, var(--bg) 18%);
  border: 1px solid color-mix(in srgb, var(--border) 84%, var(--accent-2) 16%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.035),
    inset 0 -4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.memoryCardBack::before{
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 6px;
  background:
    repeating-linear-gradient(
      45deg,
      rgba(148, 163, 184, 0.09) 0px,
      rgba(148, 163, 184, 0.09) 1px,
      transparent 1px,
      transparent 13px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(15, 23, 42, 0.07) 0px,
      rgba(15, 23, 42, 0.07) 1px,
      transparent 1px,
      transparent 13px
    );
  opacity: 0.52;
}

.memoryCardBack::after{
  content: none;
}

.memoryCardFront{
  transform: rotateY(180deg);
  background:
    radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
    repeating-linear-gradient(
      0deg,
      rgba(148, 163, 184, 0.06) 0px,
      rgba(148, 163, 184, 0.06) 1px,
      transparent 1px,
      transparent 4px
    ),
    color-mix(in srgb, var(--surface) 88%, var(--bg) 12%);
  border: 1px solid color-mix(in srgb, var(--accent-2) 22%, transparent);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  font-size: 22px;
  user-select: none;
}

.memoryCard.matched .memoryCardFront{
  background:
    radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
    repeating-linear-gradient(
      0deg,
      rgba(16, 185, 129, 0.06) 0px,
      rgba(16, 185, 129, 0.06) 1px,
      transparent 1px,
      transparent 4px
    ),
    color-mix(in srgb, #10b981 10%, var(--surface) 90%);
  border-color: color-mix(in srgb, #10b981 46%, transparent);
}

.memoryGameStat strong{
  color: var(--text);
  font-weight: 600;
}

.memoryGameStat{
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.memoryGameStatIcon{
  width: 14px;
  height: 14px;
  color: var(--muted);
  flex-shrink: 0;
}

.memoryGameModalBtnSecondary{
  margin-top: 2px;
  padding: 6px 20px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font-body);
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
}

.memoryGameModalBtnSecondary:hover{
  color: var(--text);
  border-color: var(--accent-2);
}

.memoryGameModal{
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: color-mix(in srgb, var(--bg) 60%, transparent);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  animation: fadeIn 250ms ease;
  z-index: 10;
}

.memoryGameFireworks{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 10px;
}

@keyframes fadeIn{
  from{ opacity: 0; transform: scale(0.95); }
  to{ opacity: 1; transform: scale(1); }
}

.memoryGameModalBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 32px;
  background: var(--surface);
  border: 1px solid color-mix(in srgb, var(--accent-2) 35%, transparent);
  border-radius: 14px;
  box-shadow: var(--shadow);
  text-align: center;
}

.memoryGameModalEmoji{
  font-size: 36px;
  line-height: 1;
}

.memoryGameModalTitle{
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-display);
  color: var(--text);
}

.memoryGameModalSub{
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 4px;
}

.memoryGameModalBtn{
  margin-top: 4px;
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  background: var(--accent-2);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  transition: opacity 150ms ease;
}

.memoryGameModalBtn:hover{
  opacity: 0.85;
}

/* ── Chatbot ── */
.chatbotFab{
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 0;
  border: none;
  background: transparent;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
}
.chatbotFab > svg{ width: 24px; height: 24px; }
.chatbotFab:hover{
  transform: translateY(-2px);
  box-shadow: none;
}
.chatbotFab--open{
  background: var(--surface-solid);
  color: var(--muted);
  border-color: var(--border);
  border: 1px solid var(--border);
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(13, 36, 67, 0.16);
}

.chatbotMascot{
  position: relative;
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: chatbotFloat 2.3s ease-in-out infinite;
}

.chatbotMascotBody{
  width: 54px;
  height: 54px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.18));
}

@keyframes chatbotFloat{
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes chatbotWave{
  0%, 58%, 100% { transform: rotate(0deg); }
  8% { transform: rotate(18deg); }
  16% { transform: rotate(-10deg); }
  24% { transform: rotate(15deg); }
  32% { transform: rotate(-7deg); }
  40% { transform: rotate(10deg); }
}

.chatbotTooltip{
  position: fixed;
  right: 24px;
  bottom: 94px;
  z-index: 9999;
  width: min(320px, calc(100vw - 30px));
  padding: 12px 34px 12px 14px;
  border-radius: 13px;
  border: 1.5px solid color-mix(in srgb, #20c6ff 30%, var(--border));
  background: color-mix(in srgb, var(--surface-solid) 95%, #daf4ff 5%);
  box-shadow: 0 10px 28px rgba(13, 36, 67, 0.2);
  animation: chatbotTooltipIn 260ms ease;
}

.chatbotTooltip::after{
  content: "";
  position: absolute;
  right: 22px;
  bottom: -8px;
  width: 14px;
  height: 14px;
  background: color-mix(in srgb, var(--surface-solid) 95%, #daf4ff 5%);
  border-right: 1.5px solid color-mix(in srgb, #20c6ff 30%, var(--border));
  border-bottom: 1.5px solid color-mix(in srgb, #20c6ff 30%, var(--border));
  transform: rotate(45deg);
}

.chatbotTooltipTitle{
  margin: 0 0 4px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}

.chatbotTooltip p{
  margin: 0;
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--muted);
}

.chatbotTooltipClose{
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  border-radius: 5px;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.chatbotTooltipClose:hover{
  color: var(--text);
  background: color-mix(in srgb, var(--surface-2) 80%, transparent);
}

.chatbotTooltipClose svg{
  width: 14px;
  height: 14px;
}

@keyframes chatbotTooltipIn{
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.chatbotWindow{
  position: fixed;
  bottom: 84px;
  right: 24px;
  z-index: 9998;
  width: 340px;
  max-height: 480px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1.5px solid var(--border);
  background: var(--surface-solid);
  box-shadow: 0 12px 40px rgba(0,0,0,0.16);
  overflow: hidden;
  animation: chatSlideIn 180ms ease;
}

.chatbotWindow.isFullscreen{
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: auto;
  max-height: none;
  border-radius: 0;
  border: none;
}
@keyframes chatSlideIn{
  from{ opacity: 0; transform: translateY(12px) scale(0.97); }
  to  { opacity: 1; transform: translateY(0)   scale(1);     }
}

.chatbotHeader{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
  flex-shrink: 0;
}
.chatbotTitle{
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  font-family: var(--font-display);
  letter-spacing: 0.02em;
}

.chatbotHeaderActions{
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.chatbotControl,
.chatbotClose{
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  padding: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: color 150ms, background 150ms;
}
.chatbotControl:hover,
.chatbotClose:hover{
  color: var(--text);
  background: color-mix(in srgb, var(--surface-2) 85%, transparent);
}
.chatbotControl svg{ width: 16px; height: 16px; }
.chatbotClose svg{ width: 16px; height: 16px; }

.chatbotMessages{
  flex: 1;
  overflow-y: auto;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.chatbotEmpty{
  font-size: 13px;
  color: var(--muted);
  text-align: center;
  margin: auto;
  line-height: 1.5;
}

.chatbotMsg{
  max-width: 88%;
  padding: 8px 11px;
  border-radius: 12px;
  font-size: 13.5px;
  line-height: 1.5;
}
.chatbotMsg p{ margin: 0; white-space: pre-wrap; }
.chatbotMsg h1,
.chatbotMsg h2,
.chatbotMsg h3,
.chatbotMsg h4,
.chatbotMsg h5,
.chatbotMsg h6{
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 1.35;
  font-family: var(--font-display);
}

.chatbotMsg p + p{ margin-top: 8px; }

.chatbotMsg ul,
.chatbotMsg ol{
  margin: 6px 0 0;
  padding-left: 18px;
}

.chatbotMsg li + li{ margin-top: 4px; }

.chatbotMsg code{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--surface-2) 85%, #000 15%);
}

.chatbotMsg pre{
  margin: 8px 0 0;
  padding: 8px 10px;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-2) 82%, #000 18%);
}

.chatbotMsg pre code{
  background: transparent;
  padding: 0;
}

.chatbotMsg blockquote{
  margin: 8px 0 0;
  padding: 6px 0 6px 10px;
  border-left: 2px solid color-mix(in srgb, var(--accent) 35%, var(--border));
  color: color-mix(in srgb, var(--muted) 80%, var(--text) 20%);
}

.chatbotMsg a{
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.chatbotMsg--user a{ color: #fff; }
.chatbotMsg--model a{
  color: color-mix(in srgb, var(--accent) 74%, var(--text));
}
.chatbotMsg--user{
  align-self: flex-end;
  background: var(--accent);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.chatbotMsg--model{
  align-self: flex-start;
  background: var(--surface-2);
  color: var(--text);
  border: 1px solid var(--border);
  border-bottom-left-radius: 4px;
}

.chatbotTyping{
  display: inline-flex;
  gap: 4px;
  align-items: center;
  height: 16px;
}
.chatbotTyping span{
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--muted);
  animation: chatTypingDot 1.2s infinite;
}
.chatbotTyping span:nth-child(2){ animation-delay: 0.2s; }
.chatbotTyping span:nth-child(3){ animation-delay: 0.4s; }
@keyframes chatTypingDot{
  0%, 60%, 100%{ transform: translateY(0);   opacity: 0.4; }
  30%           { transform: translateY(-4px); opacity: 1;   }
}

.chatbotInputRow{
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
  background: var(--surface-solid);
  flex-shrink: 0;
}
.chatbotInput{
  flex: 1;
  padding: 7px 10px;
  border-radius: 8px;
  border: 1.5px solid var(--border);
  background: var(--surface-2);
  color: var(--text);
  font-size: 13px;
  font-family: var(--font-body);
  outline: none;
  transition: border-color 150ms;
}
.chatbotInput:focus{ border-color: var(--accent); }
.chatbotInput::placeholder{ color: var(--muted); }
.chatbotInput:disabled{ opacity: 0.6; }

.chatbotSend{
  width: 34px; height: 34px;
  border-radius: 8px;
  border: none;
  background: var(--accent);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: opacity 150ms, transform 150ms;
}
.chatbotSend:hover:not(:disabled){ opacity: 0.88; transform: translateY(-1px); }
.chatbotSend:disabled{ opacity: 0.38; cursor: not-allowed; }
.chatbotSend svg{ width: 16px; height: 16px; }

@media(max-width: 400px){
  .chatbotWindow{ width: calc(100vw - 24px); right: 12px; }
  .chatbotWindow.isFullscreen{
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0;
  }
  .chatbotTooltip{
    right: 12px;
    bottom: 90px;
  }
  .chatbotFab{ right: 16px; bottom: 16px; }
}

/* ── Language Switcher ── */
.langSwitcher{
  position: relative;
  display: inline-flex;
  align-items: center;
}

.langSwitcherBtn{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 10px 0 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 80%, transparent);
  color: var(--text);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
  width: auto;
}

.langSwitcherBtn:hover{
  background: color-mix(in srgb, var(--accent) 8%, var(--surface-solid));
  border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
  box-shadow: 0 2px 8px color-mix(in srgb, var(--accent) 10%, transparent);
}

.langSwitcherBtn:focus-visible{
  outline: none;
  box-shadow: var(--focus);
}

.langFlag{
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(16, 24, 40, 0.12);
}

.langCode{
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  line-height: 1;
}

.langChevron{
  width: 10px;
  height: 10px;
  color: var(--muted);
  transition: transform 160ms ease;
  flex-shrink: 0;
}

.langSwitcherBtn[aria-expanded="true"] .langChevron{
  transform: rotate(180deg);
}

.langDropdown{
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 9999;
  min-width: 162px;
  background: var(--surface-solid);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08);
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: langDropdownIn 160ms cubic-bezier(.2,.8,.2,1) both;
}

@keyframes langDropdownIn{
  from{ opacity: 0; transform: translateY(-6px) scale(0.97); }
  to{ opacity: 1; transform: translateY(0) scale(1); }
}

.langOption{
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  font-weight: 500;
  transition: background 120ms ease;
  position: relative;
}

.langOption:hover{
  background: color-mix(in srgb, var(--accent) 7%, var(--surface));
}

.langOption.active{
  background: color-mix(in srgb, var(--accent) 10%, var(--surface));
  color: var(--accent);
  font-weight: 600;
}

.langOptionCheck{
  margin-left: auto;
  width: 14px;
  height: 14px;
  color: var(--accent);
  flex-shrink: 0;
}

.langLabel{
  flex: 1;
}

`;function _3(){const l=z3(),[i,r]=ge.useState(()=>D3()),[u,c]=ge.useState(()=>x3()),p=ge.useCallback(()=>{r(m=>m==="dark"?"light":"dark")},[]),f=ge.useCallback(m=>{c(m),localStorage.setItem("language",m)},[]);ge.useEffect(()=>{document.documentElement.dataset.theme=i,localStorage.setItem("theme",i)},[i]);const d=ge.useMemo(()=>({lang:u,setLang:f,tr:Gg(u)}),[u,f]);return y.jsxs(Vg.Provider,{value:d,children:[y.jsx("style",{children:N3}),y.jsx(xx,{}),y.jsx(X4,{}),y.jsx(M3,{theme:i,onToggleTheme:p,route:l})]})}gx.createRoot(document.getElementById("root")).render(y.jsx(ge.StrictMode,{children:y.jsx(_3,{})}));
