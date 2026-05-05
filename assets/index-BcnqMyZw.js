(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerPolicy&&(p.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?p.credentials="include":s.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(s){if(s.ep)return;s.ep=!0;const p=r(s);fetch(s.href,p)}})();function su(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nc={exports:{}},yi={};var Oh;function cx(){if(Oh)return yi;Oh=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,s,p){var f=null;if(p!==void 0&&(f=""+p),s.key!==void 0&&(f=""+s.key),"key"in s){p={};for(var d in s)d!=="key"&&(p[d]=s[d])}else p=s;return s=p.ref,{$$typeof:n,type:u,key:f,ref:s!==void 0?s:null,props:p}}return yi.Fragment=i,yi.jsx=r,yi.jsxs=r,yi}var Lh;function sx(){return Lh||(Lh=1,Nc.exports=cx()),Nc.exports}var y=sx(),_c={exports:{}},xe={};var Rh;function fx(){if(Rh)return xe;Rh=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function k(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,I={};function D(C,q,w){this.props=C,this.context=q,this.refs=I,this.updater=w||j}D.prototype.isReactComponent={},D.prototype.setState=function(C,q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,q,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function F(){}F.prototype=D.prototype;function H(C,q,w){this.props=C,this.context=q,this.refs=I,this.updater=w||j}var ae=H.prototype=new F;ae.constructor=H,Y(ae,D.prototype),ae.isPureReactComponent=!0;var le=Array.isArray;function B(){}var _={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function ie(C,q,w){var $=w.ref;return{$$typeof:n,type:C,key:q,ref:$!==void 0?$:null,props:w}}function L(C,q){return ie(C.type,q,C.props)}function W(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function te(C){var q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(w){return q[w]})}var Se=/\/+/g;function oe(C,q){return typeof C=="object"&&C!==null&&C.key!=null?te(""+C.key):q.toString(36)}function P(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(B,B):(C.status="pending",C.then(function(q){C.status==="pending"&&(C.status="fulfilled",C.value=q)},function(q){C.status==="pending"&&(C.status="rejected",C.reason=q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function A(C,q,w,$,re){var se=typeof C;(se==="undefined"||se==="boolean")&&(C=null);var ke=!1;if(C===null)ke=!0;else switch(se){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(C.$$typeof){case n:case i:ke=!0;break;case b:return ke=C._init,A(ke(C._payload),q,w,$,re)}}if(ke)return re=re(C),ke=$===""?"."+oe(C,0):$,le(re)?(w="",ke!=null&&(w=ke.replace(Se,"$&/")+"/"),A(re,q,w,"",function(Gt){return Gt})):re!=null&&(W(re)&&(re=L(re,w+(re.key==null||C&&C.key===re.key?"":(""+re.key).replace(Se,"$&/")+"/")+ke)),q.push(re)),1;ke=0;var Ye=$===""?".":$+":";if(le(C))for(var Be=0;Be<C.length;Be++)$=C[Be],se=Ye+oe($,Be),ke+=A($,q,w,se,re);else if(Be=k(C),typeof Be=="function")for(C=Be.call(C),Be=0;!($=C.next()).done;)$=$.value,se=Ye+oe($,Be++),ke+=A($,q,w,se,re);else if(se==="object"){if(typeof C.then=="function")return A(P(C),q,w,$,re);throw q=String(C),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ke}function Z(C,q,w){if(C==null)return C;var $=[],re=0;return A(C,$,"","",function(se){return q.call(w,se,re++)}),$}function ne(C){if(C._status===-1){var q=C._result;q=q(),q.then(function(w){(C._status===0||C._status===-1)&&(C._status=1,C._result=w)},function(w){(C._status===0||C._status===-1)&&(C._status=2,C._result=w)}),C._status===-1&&(C._status=0,C._result=q)}if(C._status===1)return C._result.default;throw C._result}var ge=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},E={map:Z,forEach:function(C,q,w){Z(C,function(){q.apply(this,arguments)},w)},count:function(C){var q=0;return Z(C,function(){q++}),q},toArray:function(C){return Z(C,function(q){return q})||[]},only:function(C){if(!W(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return xe.Activity=x,xe.Children=E,xe.Component=D,xe.Fragment=r,xe.Profiler=s,xe.PureComponent=H,xe.StrictMode=u,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,xe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return _.H.useMemoCache(C)}},xe.cache=function(C){return function(){return C.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(C,q,w){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var $=Y({},C.props),re=C.key;if(q!=null)for(se in q.key!==void 0&&(re=""+q.key),q)!K.call(q,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&q.ref===void 0||($[se]=q[se]);var se=arguments.length-2;if(se===1)$.children=w;else if(1<se){for(var ke=Array(se),Ye=0;Ye<se;Ye++)ke[Ye]=arguments[Ye+2];$.children=ke}return ie(C.type,re,$)},xe.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:p,_context:C},C},xe.createElement=function(C,q,w){var $,re={},se=null;if(q!=null)for($ in q.key!==void 0&&(se=""+q.key),q)K.call(q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(re[$]=q[$]);var ke=arguments.length-2;if(ke===1)re.children=w;else if(1<ke){for(var Ye=Array(ke),Be=0;Be<ke;Be++)Ye[Be]=arguments[Be+2];re.children=Ye}if(C&&C.defaultProps)for($ in ke=C.defaultProps,ke)re[$]===void 0&&(re[$]=ke[$]);return ie(C,se,re)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(C){return{$$typeof:d,render:C}},xe.isValidElement=W,xe.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:ne}},xe.memo=function(C,q){return{$$typeof:h,type:C,compare:q===void 0?null:q}},xe.startTransition=function(C){var q=_.T,w={};_.T=w;try{var $=C(),re=_.S;re!==null&&re(w,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(B,ge)}catch(se){ge(se)}finally{q!==null&&w.types!==null&&(q.types=w.types),_.T=q}},xe.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},xe.use=function(C){return _.H.use(C)},xe.useActionState=function(C,q,w){return _.H.useActionState(C,q,w)},xe.useCallback=function(C,q){return _.H.useCallback(C,q)},xe.useContext=function(C){return _.H.useContext(C)},xe.useDebugValue=function(){},xe.useDeferredValue=function(C,q){return _.H.useDeferredValue(C,q)},xe.useEffect=function(C,q){return _.H.useEffect(C,q)},xe.useEffectEvent=function(C){return _.H.useEffectEvent(C)},xe.useId=function(){return _.H.useId()},xe.useImperativeHandle=function(C,q,w){return _.H.useImperativeHandle(C,q,w)},xe.useInsertionEffect=function(C,q){return _.H.useInsertionEffect(C,q)},xe.useLayoutEffect=function(C,q){return _.H.useLayoutEffect(C,q)},xe.useMemo=function(C,q){return _.H.useMemo(C,q)},xe.useOptimistic=function(C,q){return _.H.useOptimistic(C,q)},xe.useReducer=function(C,q,w){return _.H.useReducer(C,q,w)},xe.useRef=function(C){return _.H.useRef(C)},xe.useState=function(C){return _.H.useState(C)},xe.useSyncExternalStore=function(C,q,w){return _.H.useSyncExternalStore(C,q,w)},xe.useTransition=function(){return _.H.useTransition()},xe.version="19.2.3",xe}var Bh;function gs(){return Bh||(Bh=1,_c.exports=fx()),_c.exports}var Xe=gs();const me=su(Xe);var Oc={exports:{}},bi={},Lc={exports:{}},Rc={};var Uh;function px(){return Uh||(Uh=1,(function(n){function i(A,Z){var ne=A.length;A.push(Z);e:for(;0<ne;){var ge=ne-1>>>1,E=A[ge];if(0<s(E,Z))A[ge]=Z,A[ne]=E,ne=ge;else break e}}function r(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var Z=A[0],ne=A.pop();if(ne!==Z){A[0]=ne;e:for(var ge=0,E=A.length,C=E>>>1;ge<C;){var q=2*(ge+1)-1,w=A[q],$=q+1,re=A[$];if(0>s(w,ne))$<E&&0>s(re,w)?(A[ge]=re,A[$]=ne,ge=$):(A[ge]=w,A[q]=ne,ge=q);else if($<E&&0>s(re,ne))A[ge]=re,A[$]=ne,ge=$;else break e}}return Z}function s(A,Z){var ne=A.sortIndex-Z.sortIndex;return ne!==0?ne:A.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var f=Date,d=f.now();n.unstable_now=function(){return f.now()-d}}var m=[],h=[],b=1,x=null,v=3,k=!1,j=!1,Y=!1,I=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function ae(A){for(var Z=r(h);Z!==null;){if(Z.callback===null)u(h);else if(Z.startTime<=A)u(h),Z.sortIndex=Z.expirationTime,i(m,Z);else break;Z=r(h)}}function le(A){if(Y=!1,ae(A),!j)if(r(m)!==null)j=!0,B||(B=!0,te());else{var Z=r(h);Z!==null&&P(le,Z.startTime-A)}}var B=!1,_=-1,K=5,ie=-1;function L(){return I?!0:!(n.unstable_now()-ie<K)}function W(){if(I=!1,B){var A=n.unstable_now();ie=A;var Z=!0;try{e:{j=!1,Y&&(Y=!1,F(_),_=-1),k=!0;var ne=v;try{t:{for(ae(A),x=r(m);x!==null&&!(x.expirationTime>A&&L());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,v=x.priorityLevel;var E=ge(x.expirationTime<=A);if(A=n.unstable_now(),typeof E=="function"){x.callback=E,ae(A),Z=!0;break t}x===r(m)&&u(m),ae(A)}else u(m);x=r(m)}if(x!==null)Z=!0;else{var C=r(h);C!==null&&P(le,C.startTime-A),Z=!1}}break e}finally{x=null,v=ne,k=!1}Z=void 0}}finally{Z?te():B=!1}}}var te;if(typeof H=="function")te=function(){H(W)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,oe=Se.port2;Se.port1.onmessage=W,te=function(){oe.postMessage(null)}}else te=function(){D(W,0)};function P(A,Z){_=D(function(){A(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_next=function(A){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var ne=v;v=Z;try{return A()}finally{v=ne}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(A,Z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var ne=v;v=A;try{return Z()}finally{v=ne}},n.unstable_scheduleCallback=function(A,Z,ne){var ge=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ge+ne:ge):ne=ge,A){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ne+E,A={id:b++,callback:Z,priorityLevel:A,startTime:ne,expirationTime:E,sortIndex:-1},ne>ge?(A.sortIndex=ne,i(h,A),r(m)===null&&A===r(h)&&(Y?(F(_),_=-1):Y=!0,P(le,ne-ge))):(A.sortIndex=E,i(m,A),j||k||(j=!0,B||(B=!0,te()))),A},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(A){var Z=v;return function(){var ne=v;v=Z;try{return A.apply(this,arguments)}finally{v=ne}}}})(Rc)),Rc}var Hh;function dx(){return Hh||(Hh=1,Lc.exports=px()),Lc.exports}var Bc={exports:{}},mt={};var qh;function hx(){if(qh)return mt;qh=1;var n=gs();function i(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function p(m,h,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:m,containerInfo:h,implementation:b}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,mt.createPortal=function(m,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return p(m,h,null,b)},mt.flushSync=function(m){var h=f.T,b=u.p;try{if(f.T=null,u.p=2,m)return m()}finally{f.T=h,u.p=b,u.d.f()}},mt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(m,h))},mt.prefetchDNS=function(m){typeof m=="string"&&u.d.D(m)},mt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var b=h.as,x=d(b,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?u.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:k}):b==="script"&&u.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},mt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=d(h.as,h.crossOrigin);u.d.M(m,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(m)},mt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,x=d(b,h.crossOrigin);u.d.L(m,b,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},mt.preloadModule=function(m,h){if(typeof m=="string")if(h){var b=d(h.as,h.crossOrigin);u.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(m)},mt.requestFormReset=function(m){u.d.r(m)},mt.unstable_batchedUpdates=function(m,h){return m(h)},mt.useFormState=function(m,h,b){return f.H.useFormState(m,h,b)},mt.useFormStatus=function(){return f.H.useHostTransitionStatus()},mt.version="19.2.3",mt}var Yh;function mx(){if(Yh)return Bc.exports;Yh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Bc.exports=hx(),Bc.exports}var Gh;function gx(){if(Gh)return bi;Gh=1;var n=dx(),i=gs(),r=mx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(p(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var l=e,a=t;;){var o=l.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){l=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===l)return m(o),e;if(c===a)return m(o),t;c=c.sibling}throw Error(u(188))}if(l.return!==a.return)l=o,a=c;else{for(var g=!1,S=o.child;S;){if(S===l){g=!0,l=o,a=c;break}if(S===a){g=!0,a=o,l=c;break}S=S.sibling}if(!g){for(S=c.child;S;){if(S===l){g=!0,l=c,a=o;break}if(S===a){g=!0,a=c,l=o;break}S=S.sibling}if(!g)throw Error(u(189))}}if(l.alternate!==a)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case D:return"Profiler";case I:return"StrictMode";case le:return"Suspense";case B:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case H:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var P=Array.isArray,A=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ge=[],E=-1;function C(e){return{current:e}}function q(e){0>E||(e.current=ge[E],ge[E]=null,E--)}function w(e,t){E++,ge[E]=e.current,e.current=t}var $=C(null),re=C(null),se=C(null),ke=C(null);function Ye(e,t){switch(w(se,t),w(re,e),w($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lh(t),e=ah(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q($),w($,e)}function Be(){q($),q(re),q(se)}function Gt(e){e.memoizedState!==null&&w(ke,e);var t=$.current,l=ah(t,e.type);t!==l&&(w(re,e),w($,l))}function pn(e){re.current===e&&(q($),q(re)),ke.current===e&&(q(ke),hi._currentValue=ne)}var Ca,_i;function dn(e){if(Ca===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||"",_i=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ca+e+_i}var jl=!1;function Al(e,t){if(!e||jl)return"";jl=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(U){var R=U}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(U){R=U}e.call(Q.prototype)}}else{try{throw Error()}catch(U){R=U}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(U){if(U&&R&&typeof U.stack=="string")return[U.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),g=c[0],S=c[1];if(g&&S){var T=g.split(`
`),O=S.split(`
`);for(o=a=0;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(a===T.length||o===O.length)for(a=T.length-1,o=O.length-1;1<=a&&0<=o&&T[a]!==O[o];)o--;for(;1<=a&&0<=o;a--,o--)if(T[a]!==O[o]){if(a!==1||o!==1)do if(a--,o--,0>o||T[a]!==O[o]){var G=`
`+T[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=o);break}}}finally{jl=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?dn(l):""}function Oi(e,t){switch(e.tag){case 26:case 27:case 5:return dn(e.type);case 16:return dn("Lazy");case 13:return e.child!==t&&t!==null?dn("Suspense Fallback"):dn("Suspense");case 19:return dn("SuspenseList");case 0:case 15:return Al(e.type,!1);case 11:return Al(e.type.render,!1);case 1:return Al(e.type,!0);case 31:return dn("Activity");default:return""}}function Li(e){try{var t="",l=null;do t+=Oi(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ml=Object.prototype.hasOwnProperty,Dl=n.unstable_scheduleCallback,Ta=n.unstable_cancelCallback,gu=n.unstable_shouldYield,xu=n.unstable_requestPaint,yt=n.unstable_now,yu=n.unstable_getCurrentPriorityLevel,V=n.unstable_ImmediatePriority,ee=n.unstable_UserBlockingPriority,he=n.unstable_NormalPriority,we=n.unstable_LowPriority,Oe=n.unstable_IdlePriority,Nt=n.log,hn=n.unstable_setDisableYieldValue,bt=null,it=null;function kt(e){if(typeof Nt=="function"&&hn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(bt,e)}catch{}}var Ge=Math.clz32?Math.clz32:Kg,On=Math.log,en=Math.LN2;function Kg(e){return e>>>=0,e===0?32:31-(On(e)/en|0)|0}var Ri=256,Bi=262144,Ui=4194304;function ul(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hi(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var S=a&134217727;return S!==0?(a=S&~c,a!==0?o=ul(a):(g&=S,g!==0?o=ul(g):l||(l=S&~e,l!==0&&(o=ul(l))))):(S=a&~c,S!==0?o=ul(S):g!==0?o=ul(g):l||(l=a&~e,l!==0&&(o=ul(l)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,l=t&-t,c>=l||c===32&&(l&4194048)!==0)?t:o}function za(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=Ui;return Ui<<=1,(Ui&62914560)===0&&(Ui=4194304),e}function bu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function ja(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $g(e,t,l,a,o,c){var g=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var S=e.entanglements,T=e.expirationTimes,O=e.hiddenUpdates;for(l=g&~l;0<l;){var G=31-Ge(l),Q=1<<G;S[G]=0,T[G]=-1;var R=O[G];if(R!==null)for(O[G]=null,G=0;G<R.length;G++){var U=R[G];U!==null&&(U.lane&=-536870913)}l&=~Q}a!==0&&Us(e,a,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(g&~t))}function Us(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ge(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Hs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Ge(l),o=1<<a;o&t|e[a]&t&&(e[a]|=t),l&=~o}}function qs(e,t){var l=t&-t;return l=(l&42)!==0?1:vu(l),(l&(e.suspendedLanes|t))!==0?0:l}function vu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ys(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:zh(e.type))}function Gs(e,t){var l=Z.p;try{return Z.p=e,t()}finally{Z.p=l}}var Ln=Math.random().toString(36).slice(2),st="__reactFiber$"+Ln,wt="__reactProps$"+Ln,Nl="__reactContainer$"+Ln,ku="__reactEvents$"+Ln,Wg="__reactListeners$"+Ln,Pg="__reactHandles$"+Ln,Vs="__reactResources$"+Ln,Aa="__reactMarker$"+Ln;function wu(e){delete e[st],delete e[wt],delete e[ku],delete e[Wg],delete e[Pg]}function _l(e){var t=e[st];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Nl]||l[st]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=fh(e);e!==null;){if(l=e[st])return l;e=fh(e)}return t}e=l,l=e.parentNode}return null}function Ol(e){if(e=e[st]||e[Nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ma(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ll(e){var t=e[Vs];return t||(t=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[Aa]=!0}var Xs=new Set,Is={};function ol(e,t){Rl(e,t),Rl(e+"Capture",t)}function Rl(e,t){for(Is[e]=t,e=0;e<t.length;e++)Xs.add(t[e])}var e1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Zs={};function t1(e){return Ml.call(Zs,e)?!0:Ml.call(Qs,e)?!1:e1.test(e)?Zs[e]=!0:(Qs[e]=!0,!1)}function qi(e,t,l){if(t1(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Yi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function mn(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function n1(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){l=""+g,c.call(this,g)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eu(e){if(!e._valueTracker){var t=Fs(e)?"checked":"value";e._valueTracker=n1(e,t,""+e[t])}}function Ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Fs(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var l1=/[\n"\\]/g;function Xt(e){return e.replace(l1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cu(e,t,l,a,o,c,g,S){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Tu(e,g,Vt(t)):l!=null?Tu(e,g,Vt(l)):a!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Vt(S):e.removeAttribute("name")}function Js(e,t,l,a,o,c,g,S){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||l!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Eu(e);return}l=l!=null?""+Vt(l):"",t=t!=null?""+Vt(t):l,S||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=S?e.checked:!!a,e.defaultChecked=!!a,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Eu(e)}function Tu(e,t,l){t==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Bl(e,t,l,a){if(e=e.options,t){t={};for(var o=0;o<l.length;o++)t["$"+l[o]]=!0;for(l=0;l<e.length;l++)o=t.hasOwnProperty("$"+e[l].value),e[l].selected!==o&&(e[l].selected=o),o&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Vt(l),t=null,o=0;o<e.length;o++){if(e[o].value===l){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function $s(e,t,l){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Vt(l):""}function Ws(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(u(92));if(P(a)){if(1<a.length)throw Error(u(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Vt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Eu(e)}function Ul(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var a1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ps(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||a1.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function ef(e,t,l){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&l[o]!==a&&Ps(e,o,a)}else for(var c in t)t.hasOwnProperty(c)&&Ps(e,c,t[c])}function zu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var i1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),r1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return r1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var ju=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,ql=null;function tf(e){var t=Ol(e);if(t&&(e=t.stateNode)){var l=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var o=a[wt]||null;if(!o)throw Error(u(90));Cu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Ks(a)}break e;case"textarea":$s(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Bl(e,!!l.multiple,t,!1)}}}var Mu=!1;function nf(e,t,l){if(Mu)return e(t,l);Mu=!0;try{var a=e(t);return a}finally{if(Mu=!1,(Hl!==null||ql!==null)&&(Mr(),Hl&&(t=Hl,e=ql,ql=Hl=null,tf(t),e)))for(t=0;t<e.length;t++)tf(e[t])}}function Da(e,t){var l=e.stateNode;if(l===null)return null;var a=l[wt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,t,typeof l));return l}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(xn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Du=!1}var Rn=null,Nu=null,Xi=null;function lf(){if(Xi)return Xi;var e,t=Nu,l=t.length,a,o="value"in Rn?Rn.value:Rn.textContent,c=o.length;for(e=0;e<l&&t[e]===o[e];e++);var g=l-e;for(a=1;a<=g&&t[l-a]===o[c-a];a++);return Xi=o.slice(e,1<a?1-a:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function af(){return!1}function Et(e){function t(l,a,o,c,g){this._reactName=l,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(l=e[S],this[S]=l?l(c):c[S]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Qi:af,this.isPropagationStopped=af,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Et(cl),_a=x({},cl,{view:0,detail:0}),u1=Et(_a),_u,Ou,Oa,Fi=x({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oa&&(Oa&&e.type==="mousemove"?(_u=e.screenX-Oa.screenX,Ou=e.screenY-Oa.screenY):Ou=_u=0,Oa=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),rf=Et(Fi),o1=x({},Fi,{dataTransfer:0}),c1=Et(o1),s1=x({},_a,{relatedTarget:0}),Lu=Et(s1),f1=x({},cl,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=Et(f1),d1=x({},cl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h1=Et(d1),m1=x({},cl,{data:0}),uf=Et(m1),g1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y1[e])?!!t[e]:!1}function Ru(){return b1}var v1=x({},_a,{key:function(e){if(e.key){var t=g1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S1=Et(v1),k1=x({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=Et(k1),w1=x({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),E1=Et(w1),C1=x({},cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=Et(C1),z1=x({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j1=Et(z1),A1=x({},cl,{newState:0,oldState:0}),M1=Et(A1),D1=[9,13,27,32],Bu=xn&&"CompositionEvent"in window,La=null;xn&&"documentMode"in document&&(La=document.documentMode);var N1=xn&&"TextEvent"in window&&!La,cf=xn&&(!Bu||La&&8<La&&11>=La),sf=" ",ff=!1;function pf(e,t){switch(e){case"keyup":return D1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yl=!1;function _1(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(ff=!0,sf);case"textInput":return e=t.data,e===sf&&ff?null:e;default:return null}}function O1(e,t){if(Yl)return e==="compositionend"||!Bu&&pf(e,t)?(e=lf(),Xi=Nu=Rn=null,Yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L1[e.type]:t==="textarea"}function mf(e,t,l,a){Hl?ql?ql.push(a):ql=[a]:Hl=a,t=Br(t,"onChange"),0<t.length&&(l=new Zi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ra=null,Ba=null;function R1(e){$d(e,0)}function Ki(e){var t=Ma(e);if(Ks(t))return e}function gf(e,t){if(e==="change")return t}var xf=!1;if(xn){var Uu;if(xn){var Hu="oninput"in document;if(!Hu){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Hu=typeof yf.oninput=="function"}Uu=Hu}else Uu=!1;xf=Uu&&(!document.documentMode||9<document.documentMode)}function bf(){Ra&&(Ra.detachEvent("onpropertychange",vf),Ba=Ra=null)}function vf(e){if(e.propertyName==="value"&&Ki(Ba)){var t=[];mf(t,Ba,e,Au(e)),nf(R1,t)}}function B1(e,t,l){e==="focusin"?(bf(),Ra=t,Ba=l,Ra.attachEvent("onpropertychange",vf)):e==="focusout"&&bf()}function U1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Ba)}function H1(e,t){if(e==="click")return Ki(t)}function q1(e,t){if(e==="input"||e==="change")return Ki(t)}function Y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Y1;function Ua(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var o=l[a];if(!Ml.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,t){var l=Sf(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Sf(l)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Gi(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var G1=xn&&"documentMode"in document&&11>=document.documentMode,Gl=null,Yu=null,Ha=null,Gu=!1;function Cf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Gu||Gl==null||Gl!==Gi(a)||(a=Gl,"selectionStart"in a&&qu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ha&&Ua(Ha,a)||(Ha=a,a=Br(Yu,"onSelect"),0<a.length&&(t=new Zi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Gl)))}function sl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Vl={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionrun:sl("Transition","TransitionRun"),transitionstart:sl("Transition","TransitionStart"),transitioncancel:sl("Transition","TransitionCancel"),transitionend:sl("Transition","TransitionEnd")},Vu={},Tf={};xn&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function fl(e){if(Vu[e])return Vu[e];if(!Vl[e])return e;var t=Vl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Tf)return Vu[e]=t[l];return e}var zf=fl("animationend"),jf=fl("animationiteration"),Af=fl("animationstart"),V1=fl("transitionrun"),X1=fl("transitionstart"),I1=fl("transitioncancel"),Mf=fl("transitionend"),Df=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function tn(e,t){Df.set(e,t),ol(t,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],Xl=0,Iu=0;function $i(){for(var e=Xl,t=Iu=Xl=0;t<e;){var l=It[t];It[t++]=null;var a=It[t];It[t++]=null;var o=It[t];It[t++]=null;var c=It[t];if(It[t++]=null,a!==null&&o!==null){var g=a.pending;g===null?o.next=o:(o.next=g.next,g.next=o),a.pending=o}c!==0&&Nf(l,o,c)}}function Wi(e,t,l,a){It[Xl++]=e,It[Xl++]=t,It[Xl++]=l,It[Xl++]=a,Iu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Qu(e,t,l,a){return Wi(e,t,l,a),Pi(e)}function pl(e,t){return Wi(e,null,null,t),Pi(e)}function Nf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var o=!1,c=e.return;c!==null;)c.childLanes|=l,a=c.alternate,a!==null&&(a.childLanes|=l),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-Ge(l),e=c.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=l|536870912),c):null}function Pi(e){if(50<ui)throw ui=0,nc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Il={};function Q1(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,l,a){return new Q1(e,t,l,a)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yn(e,t){var l=e.alternate;return l===null?(l=Ot(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function _f(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function er(e,t,l,a,o,c){var g=0;if(a=e,typeof e=="function")Zu(e)&&(g=1);else if(typeof e=="string")g=$0(e,l,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Ot(31,l,t,o),e.elementType=ie,e.lanes=c,e;case Y:return dl(l.children,o,c,t);case I:g=8,o|=24;break;case D:return e=Ot(12,l,t,o|2),e.elementType=D,e.lanes=c,e;case le:return e=Ot(13,l,t,o),e.elementType=le,e.lanes=c,e;case B:return e=Ot(19,l,t,o),e.elementType=B,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:g=10;break e;case F:g=9;break e;case ae:g=11;break e;case _:g=14;break e;case K:g=16,a=null;break e}g=29,l=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ot(g,l,t,o),t.elementType=e,t.type=a,t.lanes=c,t}function dl(e,t,l,a){return e=Ot(7,e,a,t),e.lanes=l,e}function Fu(e,t,l){return e=Ot(6,e,null,t),e.lanes=l,e}function Of(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Ku(e,t,l){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Lf=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var l=Lf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Li(t)},Lf.set(e,t),t)}return{value:e,source:t,stack:Li(t)}}var Ql=[],Zl=0,tr=null,qa=0,Zt=[],Ft=0,Bn=null,rn=1,un="";function bn(e,t){Ql[Zl++]=qa,Ql[Zl++]=tr,tr=e,qa=t}function Rf(e,t,l){Zt[Ft++]=rn,Zt[Ft++]=un,Zt[Ft++]=Bn,Bn=e;var a=rn;e=un;var o=32-Ge(a)-1;a&=~(1<<o),l+=1;var c=32-Ge(t)+o;if(30<c){var g=o-o%5;c=(a&(1<<g)-1).toString(32),a>>=g,o-=g,rn=1<<32-Ge(t)+o|l<<o|a,un=c+e}else rn=1<<c|l<<o|a,un=e}function Ju(e){e.return!==null&&(bn(e,1),Rf(e,1,0))}function $u(e){for(;e===tr;)tr=Ql[--Zl],Ql[Zl]=null,qa=Ql[--Zl],Ql[Zl]=null;for(;e===Bn;)Bn=Zt[--Ft],Zt[Ft]=null,un=Zt[--Ft],Zt[Ft]=null,rn=Zt[--Ft],Zt[Ft]=null}function Bf(e,t){Zt[Ft++]=rn,Zt[Ft++]=un,Zt[Ft++]=Bn,rn=t.id,un=t.overflow,Bn=e}var ft=null,Ze=null,Ae=!1,Un=null,Kt=!1,Wu=Error(u(519));function Hn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ya(Qt(t,e)),Wu}function Uf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[st]=e,t[wt]=a,l){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(l=0;l<ci.length;l++)Ce(ci[l],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Js(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Ws(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||th(t.textContent,l)?(a.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),a.onScroll!=null&&Ce("scroll",t),a.onScrollEnd!=null&&Ce("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Hn(e,!0)}function Hf(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ft=ft.return}}function Fl(e){if(e!==ft)return!1;if(!Ae)return Hf(e),Ae=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||xc(e.type,e.memoizedProps)),l=!l),l&&Ze&&Hn(e),Hf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=sh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=sh(e)}else t===27?(t=Ze,Pn(e.type)?(e=kc,kc=null,Ze=e):Ze=t):Ze=ft?$t(e.stateNode.nextSibling):null;return!0}function hl(){Ze=ft=null,Ae=!1}function Pu(){var e=Un;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Un=null),e}function Ya(e){Un===null?Un=[e]:Un.push(e)}var eo=C(null),ml=null,vn=null;function qn(e,t,l){w(eo,t._currentValue),t._currentValue=l}function Sn(e){e._currentValue=eo.current,q(eo)}function to(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function no(e,t,l,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var g=o.child;c=c.firstContext;e:for(;c!==null;){var S=c;c=o;for(var T=0;T<t.length;T++)if(S.context===t[T]){c.lanes|=l,S=c.alternate,S!==null&&(S.lanes|=l),to(c.return,l,e),a||(g=null);break e}c=S.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(u(341));g.lanes|=l,c=g.alternate,c!==null&&(c.lanes|=l),to(g,l,e),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===e){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Kl(e,t,l,a){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(u(387));if(g=g.memoizedProps,g!==null){var S=o.type;_t(o.pendingProps.value,g.value)||(e!==null?e.push(S):e=[S])}}else if(o===ke.current){if(g=o.alternate,g===null)throw Error(u(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}o=o.return}e!==null&&no(t,e,l,a),t.flags|=262144}function nr(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){ml=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return qf(ml,e)}function lr(e,t){return ml===null&&gl(e),qf(e,t)}function qf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},vn===null){if(e===null)throw Error(u(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return l}var Z1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},F1=n.unstable_scheduleCallback,K1=n.unstable_NormalPriority,et={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lo(){return{controller:new Z1,data:new Map,refCount:0}}function Ga(e){e.refCount--,e.refCount===0&&F1(K1,function(){e.controller.abort()})}var Va=null,ao=0,Jl=0,$l=null;function J1(e,t){if(Va===null){var l=Va=[];ao=0,Jl=oc(),$l={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ao++,t.then(Yf,Yf),t}function Yf(){if(--ao===0&&Va!==null){$l!==null&&($l.status="fulfilled");var e=Va;Va=null,Jl=0,$l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $1(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(o){l.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<l.length;o++)(0,l[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<l.length;o++)(0,l[o])(void 0)}),a}var Gf=A.S;A.S=function(e,t){Cd=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&J1(e,t),Gf!==null&&Gf(e,t)};var xl=C(null);function io(){var e=xl.current;return e!==null?e:Ve.pooledCache}function ar(e,t){t===null?w(xl,xl.current):w(xl,t.pool)}function Vf(){var e=io();return e===null?null:{parent:et._currentValue,pool:e}}var Wl=Error(u(460)),ro=Error(u(474)),ir=Error(u(542)),rr={then:function(){}};function Xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function If(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(gn,gn),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zf(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zf(e),e}throw bl=t,Wl}}function yl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(bl=l,Wl):l}}var bl=null;function Qf(){if(bl===null)throw Error(u(459));var e=bl;return bl=null,e}function Zf(e){if(e===Wl||e===ir)throw Error(u(483))}var Pl=null,Xa=0;function ur(e){var t=Xa;return Xa+=1,Pl===null&&(Pl=[]),If(Pl,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===v?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ff(e){function t(M,z){if(e){var N=M.deletions;N===null?(M.deletions=[z],M.flags|=16):N.push(z)}}function l(M,z){if(!e)return null;for(;z!==null;)t(M,z),z=z.sibling;return null}function a(M){for(var z=new Map;M!==null;)M.key!==null?z.set(M.key,M):z.set(M.index,M),M=M.sibling;return z}function o(M,z){return M=yn(M,z),M.index=0,M.sibling=null,M}function c(M,z,N){return M.index=N,e?(N=M.alternate,N!==null?(N=N.index,N<z?(M.flags|=67108866,z):N):(M.flags|=67108866,z)):(M.flags|=1048576,z)}function g(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function S(M,z,N,X){return z===null||z.tag!==6?(z=Fu(N,M.mode,X),z.return=M,z):(z=o(z,N),z.return=M,z)}function T(M,z,N,X){var fe=N.type;return fe===Y?G(M,z,N.props.children,X,N.key):z!==null&&(z.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===K&&yl(fe)===z.type)?(z=o(z,N.props),Ia(z,N),z.return=M,z):(z=er(N.type,N.key,N.props,null,M.mode,X),Ia(z,N),z.return=M,z)}function O(M,z,N,X){return z===null||z.tag!==4||z.stateNode.containerInfo!==N.containerInfo||z.stateNode.implementation!==N.implementation?(z=Ku(N,M.mode,X),z.return=M,z):(z=o(z,N.children||[]),z.return=M,z)}function G(M,z,N,X,fe){return z===null||z.tag!==7?(z=dl(N,M.mode,X,fe),z.return=M,z):(z=o(z,N),z.return=M,z)}function Q(M,z,N){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Fu(""+z,M.mode,N),z.return=M,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case k:return N=er(z.type,z.key,z.props,null,M.mode,N),Ia(N,z),N.return=M,N;case j:return z=Ku(z,M.mode,N),z.return=M,z;case K:return z=yl(z),Q(M,z,N)}if(P(z)||te(z))return z=dl(z,M.mode,N,null),z.return=M,z;if(typeof z.then=="function")return Q(M,ur(z),N);if(z.$$typeof===H)return Q(M,lr(M,z),N);or(M,z)}return null}function R(M,z,N,X){var fe=z!==null?z.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return fe!==null?null:S(M,z,""+N,X);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return N.key===fe?T(M,z,N,X):null;case j:return N.key===fe?O(M,z,N,X):null;case K:return N=yl(N),R(M,z,N,X)}if(P(N)||te(N))return fe!==null?null:G(M,z,N,X,null);if(typeof N.then=="function")return R(M,z,ur(N),X);if(N.$$typeof===H)return R(M,z,lr(M,N),X);or(M,N)}return null}function U(M,z,N,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(N)||null,S(z,M,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case k:return M=M.get(X.key===null?N:X.key)||null,T(z,M,X,fe);case j:return M=M.get(X.key===null?N:X.key)||null,O(z,M,X,fe);case K:return X=yl(X),U(M,z,N,X,fe)}if(P(X)||te(X))return M=M.get(N)||null,G(z,M,X,fe,null);if(typeof X.then=="function")return U(M,z,N,ur(X),fe);if(X.$$typeof===H)return U(M,z,N,lr(z,X),fe);or(z,X)}return null}function ue(M,z,N,X){for(var fe=null,De=null,ce=z,be=z=0,je=null;ce!==null&&be<N.length;be++){ce.index>be?(je=ce,ce=null):je=ce.sibling;var Ne=R(M,ce,N[be],X);if(Ne===null){ce===null&&(ce=je);break}e&&ce&&Ne.alternate===null&&t(M,ce),z=c(Ne,z,be),De===null?fe=Ne:De.sibling=Ne,De=Ne,ce=je}if(be===N.length)return l(M,ce),Ae&&bn(M,be),fe;if(ce===null){for(;be<N.length;be++)ce=Q(M,N[be],X),ce!==null&&(z=c(ce,z,be),De===null?fe=ce:De.sibling=ce,De=ce);return Ae&&bn(M,be),fe}for(ce=a(ce);be<N.length;be++)je=U(ce,M,be,N[be],X),je!==null&&(e&&je.alternate!==null&&ce.delete(je.key===null?be:je.key),z=c(je,z,be),De===null?fe=je:De.sibling=je,De=je);return e&&ce.forEach(function(al){return t(M,al)}),Ae&&bn(M,be),fe}function de(M,z,N,X){if(N==null)throw Error(u(151));for(var fe=null,De=null,ce=z,be=z=0,je=null,Ne=N.next();ce!==null&&!Ne.done;be++,Ne=N.next()){ce.index>be?(je=ce,ce=null):je=ce.sibling;var al=R(M,ce,Ne.value,X);if(al===null){ce===null&&(ce=je);break}e&&ce&&al.alternate===null&&t(M,ce),z=c(al,z,be),De===null?fe=al:De.sibling=al,De=al,ce=je}if(Ne.done)return l(M,ce),Ae&&bn(M,be),fe;if(ce===null){for(;!Ne.done;be++,Ne=N.next())Ne=Q(M,Ne.value,X),Ne!==null&&(z=c(Ne,z,be),De===null?fe=Ne:De.sibling=Ne,De=Ne);return Ae&&bn(M,be),fe}for(ce=a(ce);!Ne.done;be++,Ne=N.next())Ne=U(ce,M,be,Ne.value,X),Ne!==null&&(e&&Ne.alternate!==null&&ce.delete(Ne.key===null?be:Ne.key),z=c(Ne,z,be),De===null?fe=Ne:De.sibling=Ne,De=Ne);return e&&ce.forEach(function(ox){return t(M,ox)}),Ae&&bn(M,be),fe}function qe(M,z,N,X){if(typeof N=="object"&&N!==null&&N.type===Y&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case k:e:{for(var fe=N.key;z!==null;){if(z.key===fe){if(fe=N.type,fe===Y){if(z.tag===7){l(M,z.sibling),X=o(z,N.props.children),X.return=M,M=X;break e}}else if(z.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===K&&yl(fe)===z.type){l(M,z.sibling),X=o(z,N.props),Ia(X,N),X.return=M,M=X;break e}l(M,z);break}else t(M,z);z=z.sibling}N.type===Y?(X=dl(N.props.children,M.mode,X,N.key),X.return=M,M=X):(X=er(N.type,N.key,N.props,null,M.mode,X),Ia(X,N),X.return=M,M=X)}return g(M);case j:e:{for(fe=N.key;z!==null;){if(z.key===fe)if(z.tag===4&&z.stateNode.containerInfo===N.containerInfo&&z.stateNode.implementation===N.implementation){l(M,z.sibling),X=o(z,N.children||[]),X.return=M,M=X;break e}else{l(M,z);break}else t(M,z);z=z.sibling}X=Ku(N,M.mode,X),X.return=M,M=X}return g(M);case K:return N=yl(N),qe(M,z,N,X)}if(P(N))return ue(M,z,N,X);if(te(N)){if(fe=te(N),typeof fe!="function")throw Error(u(150));return N=fe.call(N),de(M,z,N,X)}if(typeof N.then=="function")return qe(M,z,ur(N),X);if(N.$$typeof===H)return qe(M,z,lr(M,N),X);or(M,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,z!==null&&z.tag===6?(l(M,z.sibling),X=o(z,N),X.return=M,M=X):(l(M,z),X=Fu(N,M.mode,X),X.return=M,M=X),g(M)):l(M,z)}return function(M,z,N,X){try{Xa=0;var fe=qe(M,z,N,X);return Pl=null,fe}catch(ce){if(ce===Wl||ce===ir)throw ce;var De=Ot(29,ce,null,M.mode);return De.lanes=X,De.return=M,De}}}var vl=Ff(!0),Kf=Ff(!1),Yn=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Pi(e),Nf(e,null,l),t}return Wi(e,a,t,l),Pi(e)}function Qa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Hs(e,l)}}function co(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var o=null,c=null;if(l=l.firstBaseUpdate,l!==null){do{var g={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};c===null?o=c=g:c=c.next=g,l=l.next}while(l!==null);c===null?o=c=t:c=c.next=t}else o=c=t;l={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var so=!1;function Za(){if(so){var e=$l;if(e!==null)throw e}}function Fa(e,t,l,a){so=!1;var o=e.updateQueue;Yn=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,S=o.shared.pending;if(S!==null){o.shared.pending=null;var T=S,O=T.next;T.next=null,g===null?c=O:g.next=O,g=T;var G=e.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==g&&(S===null?G.firstBaseUpdate=O:S.next=O,G.lastBaseUpdate=T))}if(c!==null){var Q=o.baseState;g=0,G=O=T=null,S=c;do{var R=S.lane&-536870913,U=R!==S.lane;if(U?(ze&R)===R:(a&R)===R){R!==0&&R===Jl&&(so=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ue=e,de=S;R=t;var qe=l;switch(de.tag){case 1:if(ue=de.payload,typeof ue=="function"){Q=ue.call(qe,Q,R);break e}Q=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=de.payload,R=typeof ue=="function"?ue.call(qe,Q,R):ue,R==null)break e;Q=x({},Q,R);break e;case 2:Yn=!0}}R=S.callback,R!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[R]:U.push(R))}else U={lane:R,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(O=G=U,T=Q):G=G.next=U,g|=R;if(S=S.next,S===null){if(S=o.shared.pending,S===null)break;U=S,S=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);G===null&&(T=Q),o.baseState=T,o.firstBaseUpdate=O,o.lastBaseUpdate=G,c===null&&(o.shared.lanes=0),Fn|=g,e.lanes=g,e.memoizedState=Q}}function Jf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function $f(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Jf(l[e],t)}var ea=C(null),cr=C(0);function Wf(e,t){e=Mn,w(cr,e),w(ea,t),Mn=e|t.baseLanes}function fo(){w(cr,Mn),w(ea,ea.current)}function po(){Mn=cr.current,q(ea),q(cr)}var Lt=C(null),Jt=null;function Xn(e){var t=e.alternate;w(We,We.current&1),w(Lt,e),Jt===null&&(t===null||ea.current!==null||t.memoizedState!==null)&&(Jt=e)}function ho(e){w(We,We.current),w(Lt,e),Jt===null&&(Jt=e)}function Pf(e){e.tag===22?(w(We,We.current),w(Lt,e),Jt===null&&(Jt=e)):In()}function In(){w(We,We.current),w(Lt,Lt.current)}function Rt(e){q(Lt),Jt===e&&(Jt=null),q(We)}var We=C(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||vc(l)||Sc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,ye=null,Ue=null,tt=null,fr=!1,ta=!1,Sl=!1,pr=0,Ka=0,na=null,W1=0;function Je(){throw Error(u(321))}function mo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!_t(e[l],t[l]))return!1;return!0}function go(e,t,l,a,o,c){return kn=c,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Rp:Do,Sl=!1,c=l(a,o),Sl=!1,ta&&(c=tp(t,l,a,o)),ep(e),c}function ep(e){A.H=Wa;var t=Ue!==null&&Ue.next!==null;if(kn=0,tt=Ue=ye=null,fr=!1,Ka=0,na=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&nr(e)&&(nt=!0))}function tp(e,t,l,a){ye=e;var o=0;do{if(ta&&(na=null),Ka=0,ta=!1,25<=o)throw Error(u(301));if(o+=1,tt=Ue=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}A.H=Bp,c=t(l,a)}while(ta);return c}function P1(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Ja(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ye.flags|=1024),t}function xo(){var e=pr!==0;return pr=0,e}function yo(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function bo(e){if(fr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fr=!1}kn=0,tt=Ue=ye=null,ta=!1,Ka=pr=0,na=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ye.memoizedState=tt=e:tt=tt.next=e,tt}function Pe(){if(Ue===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=tt===null?ye.memoizedState:tt.next;if(t!==null)tt=t,Ue=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tt===null?ye.memoizedState=tt=e:tt=tt.next=e}return tt}function dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ja(e){var t=Ka;return Ka+=1,na===null&&(na=[]),e=If(na,e,t),t=ye,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Rp:Do),e}function hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ja(e);if(e.$$typeof===H)return pt(e)}throw Error(u(438,String(e)))}function vo(e){var t=null,l=ye.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=dr(),ye.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=L;return t.index++,l}function wn(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=Pe();return So(t,Ue,e)}function So(e,t,l){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=l;var o=e.baseQueue,c=a.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}t.baseQueue=o=c,a.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var S=g=null,T=null,O=t,G=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(ze&Q)===Q:(kn&Q)===Q){var R=O.revertLane;if(R===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===Jl&&(G=!0);else if((kn&R)===R){O=O.next,R===Jl&&(G=!0);continue}else Q={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(S=T=Q,g=c):T=T.next=Q,ye.lanes|=R,Fn|=R;Q=O.action,Sl&&l(c,Q),c=O.hasEagerState?O.eagerState:l(c,Q)}else R={lane:Q,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(S=T=R,g=c):T=T.next=R,ye.lanes|=Q,Fn|=Q;O=O.next}while(O!==null&&O!==t);if(T===null?g=c:T.next=S,!_t(c,e.memoizedState)&&(nt=!0,G&&(l=$l,l!==null)))throw l;e.memoizedState=c,e.baseState=g,e.baseQueue=T,a.lastRenderedState=c}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ko(e){var t=Pe(),l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var a=l.dispatch,o=l.pending,c=t.memoizedState;if(o!==null){l.pending=null;var g=o=o.next;do c=e(c,g.action),g=g.next;while(g!==o);_t(c,t.memoizedState)||(nt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),l.lastRenderedState=c}return[c,a]}function np(e,t,l){var a=ye,o=Pe(),c=Ae;if(c){if(l===void 0)throw Error(u(407));l=l()}else l=t();var g=!_t((Ue||o).memoizedState,l);if(g&&(o.memoizedState=l,nt=!0),o=o.queue,Co(ip.bind(null,a,o,e),[e]),o.getSnapshot!==t||g||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,la(9,{destroy:void 0},ap.bind(null,a,o,l,t),null),Ve===null)throw Error(u(349));c||(kn&127)!==0||lp(a,t,l)}return l}function lp(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ye.updateQueue,t===null?(t=dr(),ye.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function ap(e,t,l,a){t.value=l,t.getSnapshot=a,rp(t)&&up(e)}function ip(e,t,l){return l(function(){rp(t)&&up(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!_t(e,l)}catch{return!0}}function up(e){var t=pl(e,2);t!==null&&At(t,e,2)}function wo(e){var t=vt();if(typeof e=="function"){var l=e;if(e=l(),Sl){kt(!0);try{l()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function op(e,t,l,a){return e.baseState=l,So(e,Ue,typeof a=="function"?a:wn)}function e0(e,t,l,a,o){if(yr(e))throw Error(u(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};A.T!==null?l(!0):c.isTransition=!1,a(c),l=t.pending,l===null?(c.next=t.pending=c,cp(t,c)):(c.next=l.next,t.pending=l.next=c)}}function cp(e,t){var l=t.action,a=t.payload,o=e.state;if(t.isTransition){var c=A.T,g={};A.T=g;try{var S=l(o,a),T=A.S;T!==null&&T(g,S),sp(e,t,S)}catch(O){Eo(e,t,O)}finally{c!==null&&g.types!==null&&(c.types=g.types),A.T=c}}else try{c=l(o,a),sp(e,t,c)}catch(O){Eo(e,t,O)}}function sp(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){fp(e,t,a)},function(a){return Eo(e,t,a)}):fp(e,t,l)}function fp(e,t,l){t.status="fulfilled",t.value=l,pp(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,cp(e,l)))}function Eo(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,pp(t),t=t.next;while(t!==a)}e.action=null}function pp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dp(e,t){return t}function hp(e,t){if(Ae){var l=Ve.formState;if(l!==null){e:{var a=ye;if(Ae){if(Ze){t:{for(var o=Ze,c=Kt;o.nodeType!==8;){if(!c){o=null;break t}if(o=$t(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Ze=$t(o.nextSibling),a=o.data==="F!";break e}}Hn(a)}a=!1}a&&(t=l[0])}}return l=vt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dp,lastRenderedState:t},l.queue=a,l=_p.bind(null,ye,a),a.dispatch=l,a=wo(!1),c=Mo.bind(null,ye,!1,a.queue),a=vt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,l=e0.bind(null,ye,o,c,l),o.dispatch=l,a.memoizedState=e,[t,l,!1]}function mp(e){var t=Pe();return gp(t,Ue,e)}function gp(e,t,l){if(t=So(e,t,dp)[0],e=mr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ja(t)}catch(g){throw g===Wl?ir:g}else a=t;t=Pe();var o=t.queue,c=o.dispatch;return l!==t.memoizedState&&(ye.flags|=2048,la(9,{destroy:void 0},t0.bind(null,o,l),null)),[a,c,e]}function t0(e,t){e.action=t}function xp(e){var t=Pe(),l=Ue;if(l!==null)return gp(t,l,e);Pe(),t=t.memoizedState,l=Pe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function la(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ye.updateQueue,t===null&&(t=dr(),ye.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function yp(){return Pe().memoizedState}function gr(e,t,l,a){var o=vt();ye.flags|=e,o.memoizedState=la(1|t,{destroy:void 0},l,a===void 0?null:a)}function xr(e,t,l,a){var o=Pe();a=a===void 0?null:a;var c=o.memoizedState.inst;Ue!==null&&a!==null&&mo(a,Ue.memoizedState.deps)?o.memoizedState=la(t,c,l,a):(ye.flags|=e,o.memoizedState=la(1|t,c,l,a))}function bp(e,t){gr(8390656,8,e,t)}function Co(e,t){xr(2048,8,e,t)}function n0(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=dr(),ye.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function vp(e){var t=Pe().memoizedState;return n0({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Sp(e,t){return xr(4,2,e,t)}function kp(e,t){return xr(4,4,e,t)}function wp(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ep(e,t,l){l=l!=null?l.concat([e]):null,xr(4,4,wp.bind(null,t,e),l)}function To(){}function Cp(e,t){var l=Pe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&mo(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Tp(e,t){var l=Pe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&mo(t,a[1]))return a[0];if(a=e(),Sl){kt(!0);try{e()}finally{kt(!1)}}return l.memoizedState=[a,t],a}function zo(e,t,l){return l===void 0||(kn&1073741824)!==0&&(ze&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=zd(),ye.lanes|=e,Fn|=e,l)}function zp(e,t,l,a){return _t(l,t)?l:ea.current!==null?(e=zo(e,l,a),_t(e,t)||(nt=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(ze&261930)===0?(nt=!0,e.memoizedState=l):(e=zd(),ye.lanes|=e,Fn|=e,t)}function jp(e,t,l,a,o){var c=Z.p;Z.p=c!==0&&8>c?c:8;var g=A.T,S={};A.T=S,Mo(e,!1,t,l);try{var T=o(),O=A.S;if(O!==null&&O(S,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var G=$1(T,a);$a(e,t,G,Ht(e))}else $a(e,t,a,Ht(e))}catch(Q){$a(e,t,{then:function(){},status:"rejected",reason:Q},Ht())}finally{Z.p=c,g!==null&&S.types!==null&&(g.types=S.types),A.T=g}}function l0(){}function jo(e,t,l,a){if(e.tag!==5)throw Error(u(476));var o=Ap(e).queue;jp(e,o,t,ne,l===null?l0:function(){return Mp(e),l(a)})}function Ap(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:ne},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mp(e){var t=Ap(e);t.next===null&&(t=e.alternate.memoizedState),$a(e,t.next.queue,{},Ht())}function Ao(){return pt(hi)}function Dp(){return Pe().memoizedState}function Np(){return Pe().memoizedState}function a0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Ht();e=Gn(l);var a=Vn(t,e,l);a!==null&&(At(a,t,l),Qa(a,t,l)),t={cache:lo()},e.payload=t;return}t=t.return}}function i0(e,t,l){var a=Ht();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},yr(e)?Op(t,l):(l=Qu(e,t,l,a),l!==null&&(At(l,e,a),Lp(l,t,a)))}function _p(e,t,l){var a=Ht();$a(e,t,l,a)}function $a(e,t,l,a){var o={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(yr(e))Op(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var g=t.lastRenderedState,S=c(g,l);if(o.hasEagerState=!0,o.eagerState=S,_t(S,g))return Wi(e,t,o,0),Ve===null&&$i(),!1}catch{}if(l=Qu(e,t,o,a),l!==null)return At(l,e,a),Lp(l,t,a),!0}return!1}function Mo(e,t,l,a){if(a={lane:2,revertLane:oc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(u(479))}else t=Qu(e,l,a,2),t!==null&&At(t,e,2)}function yr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Op(e,t){ta=fr=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Lp(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Hs(e,l)}}var Wa={readContext:pt,use:hr,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Wa.useEffectEvent=Je;var Rp={readContext:pt,use:hr,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:bp,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,gr(4194308,4,wp.bind(null,t,e),l)},useLayoutEffect:function(e,t){return gr(4194308,4,e,t)},useInsertionEffect:function(e,t){gr(4,2,e,t)},useMemo:function(e,t){var l=vt();t=t===void 0?null:t;var a=e();if(Sl){kt(!0);try{e()}finally{kt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=vt();if(l!==void 0){var o=l(t);if(Sl){kt(!0);try{l(t)}finally{kt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=i0.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=wo(e);var t=e.queue,l=_p.bind(null,ye,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:To,useDeferredValue:function(e,t){var l=vt();return zo(l,e,t)},useTransition:function(){var e=wo(!1);return e=jp.bind(null,ye,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ye,o=vt();if(Ae){if(l===void 0)throw Error(u(407));l=l()}else{if(l=t(),Ve===null)throw Error(u(349));(ze&127)!==0||lp(a,t,l)}o.memoizedState=l;var c={value:l,getSnapshot:t};return o.queue=c,bp(ip.bind(null,a,c,e),[e]),a.flags|=2048,la(9,{destroy:void 0},ap.bind(null,a,c,l,t),null),l},useId:function(){var e=vt(),t=Ve.identifierPrefix;if(Ae){var l=un,a=rn;l=(a&~(1<<32-Ge(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=pr++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=W1++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ao,useFormState:hp,useActionState:hp,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Mo.bind(null,ye,!0,l),l.dispatch=t,[e,t]},useMemoCache:vo,useCacheRefresh:function(){return vt().memoizedState=a0.bind(null,ye)},useEffectEvent:function(e){var t=vt(),l={impl:e};return t.memoizedState=l,function(){if((_e&2)!==0)throw Error(u(440));return l.impl.apply(void 0,arguments)}}},Do={readContext:pt,use:hr,useCallback:Cp,useContext:pt,useEffect:Co,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:Tp,useReducer:mr,useRef:yp,useState:function(){return mr(wn)},useDebugValue:To,useDeferredValue:function(e,t){var l=Pe();return zp(l,Ue.memoizedState,e,t)},useTransition:function(){var e=mr(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ja(e),t]},useSyncExternalStore:np,useId:Dp,useHostTransitionStatus:Ao,useFormState:mp,useActionState:mp,useOptimistic:function(e,t){var l=Pe();return op(l,Ue,e,t)},useMemoCache:vo,useCacheRefresh:Np};Do.useEffectEvent=vp;var Bp={readContext:pt,use:hr,useCallback:Cp,useContext:pt,useEffect:Co,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:Tp,useReducer:ko,useRef:yp,useState:function(){return ko(wn)},useDebugValue:To,useDeferredValue:function(e,t){var l=Pe();return Ue===null?zo(l,e,t):zp(l,Ue.memoizedState,e,t)},useTransition:function(){var e=ko(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ja(e),t]},useSyncExternalStore:np,useId:Dp,useHostTransitionStatus:Ao,useFormState:xp,useActionState:xp,useOptimistic:function(e,t){var l=Pe();return Ue!==null?op(l,Ue,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:vo,useCacheRefresh:Np};Bp.useEffectEvent=vp;function No(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:x({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var _o={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Ht(),o=Gn(a);o.payload=t,l!=null&&(o.callback=l),t=Vn(e,o,a),t!==null&&(At(t,e,a),Qa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Ht(),o=Gn(a);o.tag=1,o.payload=t,l!=null&&(o.callback=l),t=Vn(e,o,a),t!==null&&(At(t,e,a),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ht(),a=Gn(l);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,l),t!==null&&(At(t,e,l),Qa(t,e,l))}};function Up(e,t,l,a,o,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,g):t.prototype&&t.prototype.isPureReactComponent?!Ua(l,a)||!Ua(o,c):!0}function Hp(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function kl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=x({},l));for(var o in e)l[o]===void 0&&(l[o]=e[o])}return l}function qp(e){Ji(e)}function Yp(e){console.error(e)}function Gp(e){Ji(e)}function br(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Vp(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Oo(e,t,l){return l=Gn(l),l.tag=3,l.payload={element:null},l.callback=function(){br(e,t)},l}function Xp(e){return e=Gn(e),e.tag=3,e}function Ip(e,t,l,a){var o=l.type.getDerivedStateFromError;if(typeof o=="function"){var c=a.value;e.payload=function(){return o(c)},e.callback=function(){Vp(t,l,a)}}var g=l.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Vp(t,l,a),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})})}function r0(e,t,l,a,o){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Kl(t,l,o,!0),l=Lt.current,l!==null){switch(l.tag){case 31:case 13:return Jt===null?Dr():l.alternate===null&&$e===0&&($e=3),l.flags&=-257,l.flags|=65536,l.lanes=o,a===rr?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ic(e,a,o)),!1;case 22:return l.flags|=65536,a===rr?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ic(e,a,o)),!1}throw Error(u(435,l.tag))}return ic(e,a,o),Dr(),!1}if(Ae)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Wu&&(e=Error(u(422),{cause:a}),Ya(Qt(e,l)))):(a!==Wu&&(t=Error(u(423),{cause:a}),Ya(Qt(t,l))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Qt(a,l),o=Oo(e.stateNode,a,o),co(e,o),$e!==4&&($e=2)),!1;var c=Error(u(520),{cause:a});if(c=Qt(c,l),ri===null?ri=[c]:ri.push(c),$e!==4&&($e=2),t===null)return!0;a=Qt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=o&-o,l.lanes|=e,e=Oo(l.stateNode,a,e),co(l,e),!1;case 1:if(t=l.type,c=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Kn===null||!Kn.has(c))))return l.flags|=65536,o&=-o,l.lanes|=o,o=Xp(o),Ip(o,e,l,a),co(l,o),!1}l=l.return}while(l!==null);return!1}var Lo=Error(u(461)),nt=!1;function dt(e,t,l,a){t.child=e===null?Kf(t,null,l,a):vl(t,e.child,l,a)}function Qp(e,t,l,a,o){l=l.render;var c=t.ref;if("ref"in a){var g={};for(var S in a)S!=="ref"&&(g[S]=a[S])}else g=a;return gl(t),a=go(e,t,l,g,c,o),S=xo(),e!==null&&!nt?(yo(e,t,o),En(e,t,o)):(Ae&&S&&Ju(t),t.flags|=1,dt(e,t,a,o),t.child)}function Zp(e,t,l,a,o){if(e===null){var c=l.type;return typeof c=="function"&&!Zu(c)&&c.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=c,Fp(e,t,c,a,o)):(e=er(l.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Vo(e,o)){var g=c.memoizedProps;if(l=l.compare,l=l!==null?l:Ua,l(g,a)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=yn(c,a),e.ref=t.ref,e.return=t,t.child=e}function Fp(e,t,l,a,o){if(e!==null){var c=e.memoizedProps;if(Ua(c,a)&&e.ref===t.ref)if(nt=!1,t.pendingProps=a=c,Vo(e,o))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,En(e,t,o)}return Ro(e,t,l,a,o)}function Kp(e,t,l,a){var o=a.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|l:l,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~c}else a=0,t.child=null;return Jp(e,t,c,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ar(t,c!==null?c.cachePool:null),c!==null?Wf(t,c):fo(),Pf(t);else return a=t.lanes=536870912,Jp(e,t,c!==null?c.baseLanes|l:l,l,a)}else c!==null?(ar(t,c.cachePool),Wf(t,c),In(),t.memoizedState=null):(e!==null&&ar(t,null),fo(),In());return dt(e,t,o,l),t.child}function Pa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jp(e,t,l,a,o){var c=io();return c=c===null?null:{parent:et._currentValue,pool:c},t.memoizedState={baseLanes:l,cachePool:c},e!==null&&ar(t,null),fo(),Pf(t),e!==null&&Kl(e,t,a,!0),t.childLanes=o,null}function vr(e,t){return t=kr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function $p(e,t,l){return vl(t,e.child,null,l),e=vr(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function u0(e,t,l){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(a.mode==="hidden")return e=vr(t,a),t.lanes=536870912,Pa(null,e);if(ho(t),(e=Ze)?(e=ch(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},l=Of(e),l.return=t,t.child=l,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return vr(t,a)}var c=e.memoizedState;if(c!==null){var g=c.dehydrated;if(ho(t),o)if(t.flags&256)t.flags&=-257,t=$p(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(nt||Kl(e,t,l,!1),o=(l&e.childLanes)!==0,nt||o){if(a=Ve,a!==null&&(g=qs(a,l),g!==0&&g!==c.retryLane))throw c.retryLane=g,pl(e,g),At(a,e,g),Lo;Dr(),t=$p(e,t,l)}else e=c.treeContext,Ze=$t(g.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&Bf(t,e),t=vr(t,a),t.flags|=4096;return t}return e=yn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sr(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Ro(e,t,l,a,o){return gl(t),l=go(e,t,l,a,void 0,o),a=xo(),e!==null&&!nt?(yo(e,t,o),En(e,t,o)):(Ae&&a&&Ju(t),t.flags|=1,dt(e,t,l,o),t.child)}function Wp(e,t,l,a,o,c){return gl(t),t.updateQueue=null,l=tp(t,a,l,o),ep(e),a=xo(),e!==null&&!nt?(yo(e,t,c),En(e,t,c)):(Ae&&a&&Ju(t),t.flags|=1,dt(e,t,l,c),t.child)}function Pp(e,t,l,a,o){if(gl(t),t.stateNode===null){var c=Il,g=l.contextType;typeof g=="object"&&g!==null&&(c=pt(g)),c=new l(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=_o,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},uo(t),g=l.contextType,c.context=typeof g=="object"&&g!==null?pt(g):Il,c.state=t.memoizedState,g=l.getDerivedStateFromProps,typeof g=="function"&&(No(t,l,g,a),c.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&_o.enqueueReplaceState(c,c.state,null),Fa(t,a,c,o),Za(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var S=t.memoizedProps,T=kl(l,S);c.props=T;var O=c.context,G=l.contextType;g=Il,typeof G=="object"&&G!==null&&(g=pt(G));var Q=l.getDerivedStateFromProps;G=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,G||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(S||O!==g)&&Hp(t,c,a,g),Yn=!1;var R=t.memoizedState;c.state=R,Fa(t,a,c,o),Za(),O=t.memoizedState,S||R!==O||Yn?(typeof Q=="function"&&(No(t,l,Q,a),O=t.memoizedState),(T=Yn||Up(t,l,T,a,R,O,g))?(G||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),c.props=a,c.state=O,c.context=g,a=T):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,oo(e,t),g=t.memoizedProps,G=kl(l,g),c.props=G,Q=t.pendingProps,R=c.context,O=l.contextType,T=Il,typeof O=="object"&&O!==null&&(T=pt(O)),S=l.getDerivedStateFromProps,(O=typeof S=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==Q||R!==T)&&Hp(t,c,a,T),Yn=!1,R=t.memoizedState,c.state=R,Fa(t,a,c,o),Za();var U=t.memoizedState;g!==Q||R!==U||Yn||e!==null&&e.dependencies!==null&&nr(e.dependencies)?(typeof S=="function"&&(No(t,l,S,a),U=t.memoizedState),(G=Yn||Up(t,l,G,a,R,U,T)||e!==null&&e.dependencies!==null&&nr(e.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,U,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,U,T)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=U),c.props=a,c.state=U,c.context=T,a=G):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Sr(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=vl(t,e.child,null,o),t.child=vl(t,null,l,o)):dt(e,t,l,o),t.memoizedState=c.state,e=t.child):e=En(e,t,o),e}function ed(e,t,l,a){return hl(),t.flags|=256,dt(e,t,l,a),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(e){return{baseLanes:e,cachePool:Vf()}}function Ho(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ut),e}function td(e,t,l){var a=t.pendingProps,o=!1,c=(t.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),g&&(o=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(o?Xn(t):In(),(e=Ze)?(e=ch(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},l=Of(e),l.return=t,t.child=l,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return Sc(e)?t.lanes=32:t.lanes=536870912,null}var S=a.children;return a=a.fallback,o?(In(),o=t.mode,S=kr({mode:"hidden",children:S},o),a=dl(a,o,l,null),S.return=t,a.return=t,S.sibling=a,t.child=S,a=t.child,a.memoizedState=Uo(l),a.childLanes=Ho(e,g,l),t.memoizedState=Bo,Pa(null,a)):(Xn(t),qo(t,S))}var T=e.memoizedState;if(T!==null&&(S=T.dehydrated,S!==null)){if(c)t.flags&256?(Xn(t),t.flags&=-257,t=Yo(e,t,l)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),S=a.fallback,o=t.mode,a=kr({mode:"visible",children:a.children},o),S=dl(S,o,l,null),S.flags|=2,a.return=t,S.return=t,a.sibling=S,t.child=a,vl(t,e.child,null,l),a=t.child,a.memoizedState=Uo(l),a.childLanes=Ho(e,g,l),t.memoizedState=Bo,t=Pa(null,a));else if(Xn(t),Sc(S)){if(g=S.nextSibling&&S.nextSibling.dataset,g)var O=g.dgst;g=O,a=Error(u(419)),a.stack="",a.digest=g,Ya({value:a,source:null,stack:null}),t=Yo(e,t,l)}else if(nt||Kl(e,t,l,!1),g=(l&e.childLanes)!==0,nt||g){if(g=Ve,g!==null&&(a=qs(g,l),a!==0&&a!==T.retryLane))throw T.retryLane=a,pl(e,a),At(g,e,a),Lo;vc(S)||Dr(),t=Yo(e,t,l)}else vc(S)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ze=$t(S.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&Bf(t,e),t=qo(t,a.children),t.flags|=4096);return t}return o?(In(),S=a.fallback,o=t.mode,T=e.child,O=T.sibling,a=yn(T,{mode:"hidden",children:a.children}),a.subtreeFlags=T.subtreeFlags&65011712,O!==null?S=yn(O,S):(S=dl(S,o,l,null),S.flags|=2),S.return=t,a.return=t,a.sibling=S,t.child=a,Pa(null,a),a=t.child,S=e.child.memoizedState,S===null?S=Uo(l):(o=S.cachePool,o!==null?(T=et._currentValue,o=o.parent!==T?{parent:T,pool:T}:o):o=Vf(),S={baseLanes:S.baseLanes|l,cachePool:o}),a.memoizedState=S,a.childLanes=Ho(e,g,l),t.memoizedState=Bo,Pa(e.child,a)):(Xn(t),l=e.child,e=l.sibling,l=yn(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=l,t.memoizedState=null,l)}function qo(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Yo(e,t,l){return vl(t,e.child,null,l),e=qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nd(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),to(e.return,t,l)}function Go(e,t,l,a,o,c){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:o,treeForkCount:c}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=a,g.tail=l,g.tailMode=o,g.treeForkCount=c)}function ld(e,t,l){var a=t.pendingProps,o=a.revealOrder,c=a.tail;a=a.children;var g=We.current,S=(g&2)!==0;if(S?(g=g&1|2,t.flags|=128):g&=1,w(We,g),dt(e,t,a,l),a=Ae?qa:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,l,t);else if(e.tag===19)nd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(l=t.child,o=null;l!==null;)e=l.alternate,e!==null&&sr(e)===null&&(o=l),l=l.sibling;l=o,l===null?(o=t.child,t.child=null):(o=l.sibling,l.sibling=null),Go(t,!1,o,l,c,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&sr(e)===null){t.child=o;break}e=o.sibling,o.sibling=l,l=o,o=e}Go(t,!0,l,null,c,a);break;case"together":Go(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function En(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Kl(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,l=yn(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=yn(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Vo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nr(e)))}function o0(e,t,l){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),qn(t,et,e.memoizedState.cache),hl();break;case 27:case 5:Gt(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ho(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Xn(t),t.flags|=128,null):(l&t.child.childLanes)!==0?td(e,t,l):(Xn(t),e=En(e,t,l),e!==null?e.sibling:null);Xn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Kl(e,t,l,!1),a=(l&t.childLanes)!==0),o){if(a)return ld(e,t,l);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),w(We,We.current),a)break;return null;case 22:return t.lanes=0,Kp(e,t,l,t.pendingProps);case 24:qn(t,et,e.memoizedState.cache)}return En(e,t,l)}function ad(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!Vo(e,l)&&(t.flags&128)===0)return nt=!1,o0(e,t,l);nt=(e.flags&131072)!==0}else nt=!1,Ae&&(t.flags&1048576)!==0&&Rf(t,qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=yl(t.elementType),t.type=e,typeof e=="function")Zu(e)?(a=kl(e,a),t.tag=1,t=Pp(null,t,e,a,l)):(t.tag=0,t=Ro(null,t,e,a,l));else{if(e!=null){var o=e.$$typeof;if(o===ae){t.tag=11,t=Qp(null,t,e,a,l);break e}else if(o===_){t.tag=14,t=Zp(null,t,e,a,l);break e}}throw t=oe(e)||e,Error(u(306,t,""))}}return t;case 0:return Ro(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,o=kl(a,t.pendingProps),Pp(e,t,a,o,l);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var c=t.memoizedState;o=c.element,oo(e,t),Fa(t,a,null,l);var g=t.memoizedState;if(a=g.cache,qn(t,et,a),a!==c.cache&&no(t,[et],l,!0),Za(),a=g.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=ed(e,t,a,l);break e}else if(a!==o){o=Qt(Error(u(424)),t),Ya(o),t=ed(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=$t(e.firstChild),ft=t,Ae=!0,Un=null,Kt=!0,l=Kf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(hl(),a===o){t=En(e,t,l);break e}dt(e,t,a,l)}t=t.child}return t;case 26:return Sr(e,t),e===null?(l=mh(t.type,null,t.pendingProps,null))?t.memoizedState=l:Ae||(l=t.type,e=t.pendingProps,a=Ur(se.current).createElement(l),a[st]=t,a[wt]=e,ht(a,l,e),ot(a),t.stateNode=a):t.memoizedState=mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gt(t),e===null&&Ae&&(a=t.stateNode=ph(t.type,t.pendingProps,se.current),ft=t,Kt=!0,o=Ze,Pn(t.type)?(kc=o,Ze=$t(a.firstChild)):Ze=o),dt(e,t,t.pendingProps.children,l),Sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((o=a=Ze)&&(a=U0(a,t.type,t.pendingProps,Kt),a!==null?(t.stateNode=a,ft=t,Ze=$t(a.firstChild),Kt=!1,o=!0):o=!1),o||Hn(t)),Gt(t),o=t.type,c=t.pendingProps,g=e!==null?e.memoizedProps:null,a=c.children,xc(o,c)?a=null:g!==null&&xc(o,g)&&(t.flags|=32),t.memoizedState!==null&&(o=go(e,t,P1,null,null,l),hi._currentValue=o),Sr(e,t),dt(e,t,a,l),t.child;case 6:return e===null&&Ae&&((e=l=Ze)&&(l=H0(l,t.pendingProps,Kt),l!==null?(t.stateNode=l,ft=t,Ze=null,e=!0):e=!1),e||Hn(t)),null;case 13:return td(e,t,l);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vl(t,null,a,l):dt(e,t,a,l),t.child;case 11:return Qp(e,t,t.type,t.pendingProps,l);case 7:return dt(e,t,t.pendingProps,l),t.child;case 8:return dt(e,t,t.pendingProps.children,l),t.child;case 12:return dt(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,qn(t,t.type,a.value),dt(e,t,a.children,l),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,gl(t),o=pt(o),a=a(o),t.flags|=1,dt(e,t,a,l),t.child;case 14:return Zp(e,t,t.type,t.pendingProps,l);case 15:return Fp(e,t,t.type,t.pendingProps,l);case 19:return ld(e,t,l);case 31:return u0(e,t,l);case 22:return Kp(e,t,l,t.pendingProps);case 24:return gl(t),a=pt(et),e===null?(o=io(),o===null&&(o=Ve,c=lo(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=l),o=c),t.memoizedState={parent:a,cache:o},uo(t),qn(t,et,o)):((e.lanes&l)!==0&&(oo(e,t),Fa(t,null,null,l),Za()),o=e.memoizedState,c=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),qn(t,et,a)):(a=c.cache,qn(t,et,a),a!==o.cache&&no(t,[et],l,!0))),dt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Cn(e){e.flags|=4}function Xo(e,t,l,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Dd())e.flags|=8192;else throw bl=rr,ro}else e.flags&=-16777217}function id(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vh(t))if(Dd())e.flags|=8192;else throw bl=rr,ro}function wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bs():536870912,e.lanes|=t,ua|=t)}function ei(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var o=e.child;o!==null;)l|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)l|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function c0(e,t,l){var a=t.pendingProps;switch($u(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(et),Be(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pu())),Fe(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(Cn(t),c!==null?(Fe(t),id(t,c)):(Fe(t),Xo(t,o,null,a,l))):c?c!==e.memoizedState?(Cn(t),Fe(t),id(t,c)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Cn(t),Fe(t),Xo(t,o,e,a,l)),null;case 27:if(pn(t),l=se.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}e=$.current,Fl(t)?Uf(t):(e=ph(o,a,l),t.stateNode=e,Cn(t))}return Fe(t),null;case 5:if(pn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}if(c=$.current,Fl(t))Uf(t);else{var g=Ur(se.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?g.createElement("select",{is:a.is}):g.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?g.createElement(o,{is:a.is}):g.createElement(o)}}c[st]=t,c[wt]=a;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=c;e:switch(ht(c,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Cn(t)}}return Fe(t),Xo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Cn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=se.current,Fl(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,o=ft,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[st]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||th(e.nodeValue,l)),e||Hn(t,!0)}else e=Ur(e).createTextNode(a),e[st]=t,t.stateNode=e}return Fe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Fl(t),l!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[st]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else l=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Fe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Fl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[st]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else o=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),wr(t,t.updateQueue),Fe(t),null);case 4:return Be(),e===null&&pc(t.stateNode.containerInfo),Fe(t),null;case 10:return Sn(t.type),Fe(t),null;case 19:if(q(We),a=t.memoizedState,a===null)return Fe(t),null;if(o=(t.flags&128)!==0,c=a.rendering,c===null)if(o)ei(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=sr(e),c!==null){for(t.flags|=128,ei(a,!1),e=c.updateQueue,t.updateQueue=e,wr(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)_f(l,e),l=l.sibling;return w(We,We.current&1|2),Ae&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&yt()>jr&&(t.flags|=128,o=!0,ei(a,!1),t.lanes=4194304)}else{if(!o)if(e=sr(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,wr(t,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Ae)return Fe(t),null}else 2*yt()-a.renderingStartTime>jr&&l!==536870912&&(t.flags|=128,o=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,l=We.current,w(We,o?l&1|2:l&1),Ae&&bn(t,a.treeForkCount),e):(Fe(t),null);case 22:case 23:return Rt(t),po(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),l=t.updateQueue,l!==null&&wr(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&q(xl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Sn(et),Fe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function s0(e,t){switch($u(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(et),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pn(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(u(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(We),null;case 4:return Be(),null;case 10:return Sn(t.type),null;case 22:case 23:return Rt(t),po(),e!==null&&q(xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(et),null;case 25:return null;default:return null}}function rd(e,t){switch($u(t),t.tag){case 3:Sn(et),Be();break;case 26:case 27:case 5:pn(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:q(We);break;case 10:Sn(t.type);break;case 22:case 23:Rt(t),po(),e!==null&&q(xl);break;case 24:Sn(et)}}function ti(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var o=a.next;l=o;do{if((l.tag&e)===e){a=void 0;var c=l.create,g=l.inst;a=c(),g.destroy=a}l=l.next}while(l!==o)}}catch(S){Re(t,t.return,S)}}function Qn(e,t,l){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){var g=a.inst,S=g.destroy;if(S!==void 0){g.destroy=void 0,o=t;var T=l,O=S;try{O()}catch(G){Re(o,T,G)}}}a=a.next}while(a!==c)}}catch(G){Re(t,t.return,G)}}function ud(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{$f(t,l)}catch(a){Re(e,e.return,a)}}}function od(e,t,l){l.props=kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Re(e,t,a)}}function ni(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(o){Re(e,t,o)}}function on(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(o){Re(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(o){Re(e,t,o)}else l.current=null}function cd(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(o){Re(e,e.return,o)}}function Io(e,t,l){try{var a=e.stateNode;N0(a,e.type,l,t),a[wt]=t}catch(o){Re(e,e.return,o)}}function sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function Qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Pn(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Zo(e,t,l),e=e.sibling;e!==null;)Zo(e,t,l),e=e.sibling}function Er(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Pn(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Er(e,t,l),e=e.sibling;e!==null;)Er(e,t,l),e=e.sibling}function fd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,a,l),t[st]=e,t[wt]=l}catch(c){Re(e,e.return,c)}}var Tn=!1,lt=!1,Fo=!1,pd=typeof WeakSet=="function"?WeakSet:Set,ct=null;function f0(e,t){if(e=e.containerInfo,mc=Ir,e=Ef(e),qu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var g=0,S=-1,T=-1,O=0,G=0,Q=e,R=null;t:for(;;){for(var U;Q!==l||o!==0&&Q.nodeType!==3||(S=g+o),Q!==c||a!==0&&Q.nodeType!==3||(T=g+a),Q.nodeType===3&&(g+=Q.nodeValue.length),(U=Q.firstChild)!==null;)R=Q,Q=U;for(;;){if(Q===e)break t;if(R===l&&++O===o&&(S=g),R===c&&++G===a&&(T=g),(U=Q.nextSibling)!==null)break;Q=R,R=Q.parentNode}Q=U}l=S===-1||T===-1?null:{start:S,end:T}}else l=null}l=l||{start:0,end:0}}else l=null;for(gc={focusedElem:e,selectionRange:l},Ir=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)o=e[l],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,l=t,o=c.memoizedProps,c=c.memoizedState,a=l.stateNode;try{var ue=kl(l.type,o);e=a.getSnapshotBeforeUpdate(ue,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(de){Re(l,l.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)bc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function dd(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:jn(e,l),a&4&&ti(5,l);break;case 1:if(jn(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(g){Re(l,l.return,g)}else{var o=kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Re(l,l.return,g)}}a&64&&ud(l),a&512&&ni(l,l.return);break;case 3:if(jn(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{$f(e,t)}catch(g){Re(l,l.return,g)}}break;case 27:t===null&&a&4&&fd(l);case 26:case 5:jn(e,l),t===null&&a&4&&cd(l),a&512&&ni(l,l.return);break;case 12:jn(e,l);break;case 31:jn(e,l),a&4&&gd(e,l);break;case 13:jn(e,l),a&4&&xd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=v0.bind(null,l),q0(e,l))));break;case 22:if(a=l.memoizedState!==null||Tn,!a){t=t!==null&&t.memoizedState!==null||lt,o=Tn;var c=lt;Tn=a,(lt=t)&&!c?An(e,l,(l.subtreeFlags&8772)!==0):jn(e,l),Tn=o,lt=c}break;case 30:break;default:jn(e,l)}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Ct=!1;function zn(e,t,l){for(l=l.child;l!==null;)md(e,t,l),l=l.sibling}function md(e,t,l){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(bt,l)}catch{}switch(l.tag){case 26:lt||on(l,t),zn(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:lt||on(l,t);var a=Ke,o=Ct;Pn(l.type)&&(Ke=l.stateNode,Ct=!1),zn(e,t,l),fi(l.stateNode),Ke=a,Ct=o;break;case 5:lt||on(l,t);case 6:if(a=Ke,o=Ct,Ke=null,zn(e,t,l),Ke=a,Ct=o,Ke!==null)if(Ct)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(l.stateNode)}catch(c){Re(l,t,c)}else try{Ke.removeChild(l.stateNode)}catch(c){Re(l,t,c)}break;case 18:Ke!==null&&(Ct?(e=Ke,uh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),ma(e)):uh(Ke,l.stateNode));break;case 4:a=Ke,o=Ct,Ke=l.stateNode.containerInfo,Ct=!0,zn(e,t,l),Ke=a,Ct=o;break;case 0:case 11:case 14:case 15:Qn(2,l,t),lt||Qn(4,l,t),zn(e,t,l);break;case 1:lt||(on(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&od(l,t,a)),zn(e,t,l);break;case 21:zn(e,t,l);break;case 22:lt=(a=lt)||l.memoizedState!==null,zn(e,t,l),lt=a;break;default:zn(e,t,l)}}function gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ma(e)}catch(l){Re(t,t.return,l)}}}function xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ma(e)}catch(l){Re(t,t.return,l)}}function p0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pd),t;default:throw Error(u(435,e.tag))}}function Cr(e,t){var l=p0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var o=S0.bind(null,e,a);a.then(o,o)}})}function Tt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var o=l[a],c=e,g=t,S=g;e:for(;S!==null;){switch(S.tag){case 27:if(Pn(S.type)){Ke=S.stateNode,Ct=!1;break e}break;case 5:Ke=S.stateNode,Ct=!1;break e;case 3:case 4:Ke=S.stateNode.containerInfo,Ct=!0;break e}S=S.return}if(Ke===null)throw Error(u(160));md(c,g,o),Ke=null,Ct=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}var nn=null;function yd(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),zt(e),a&4&&(Qn(3,e,e.return),ti(3,e),Qn(5,e,e.return));break;case 1:Tt(t,e),zt(e),a&512&&(lt||l===null||on(l,l.return)),a&64&&Tn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var o=nn;if(Tt(t,e),zt(e),a&512&&(lt||l===null||on(l,l.return)),a&4){var c=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Aa]||c[st]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(a),o.head.insertBefore(c,o.querySelector("head > title"))),ht(c,a,l),c[st]=e,ot(c),a=c;break e;case"link":var g=yh("link","href",o).get(a+(l.href||""));if(g){for(var S=0;S<g.length;S++)if(c=g[S],c.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&c.getAttribute("rel")===(l.rel==null?null:l.rel)&&c.getAttribute("title")===(l.title==null?null:l.title)&&c.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){g.splice(S,1);break t}}c=o.createElement(a),ht(c,a,l),o.head.appendChild(c);break;case"meta":if(g=yh("meta","content",o).get(a+(l.content||""))){for(S=0;S<g.length;S++)if(c=g[S],c.getAttribute("content")===(l.content==null?null:""+l.content)&&c.getAttribute("name")===(l.name==null?null:l.name)&&c.getAttribute("property")===(l.property==null?null:l.property)&&c.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&c.getAttribute("charset")===(l.charSet==null?null:l.charSet)){g.splice(S,1);break t}}c=o.createElement(a),ht(c,a,l),o.head.appendChild(c);break;default:throw Error(u(468,a))}c[st]=e,ot(c),a=c}e.stateNode=a}else bh(o,e.type,e.stateNode);else e.stateNode=xh(o,a,e.memoizedProps);else c!==a?(c===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):c.count--,a===null?bh(o,e.type,e.stateNode):xh(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Io(e,e.memoizedProps,l.memoizedProps)}break;case 27:Tt(t,e),zt(e),a&512&&(lt||l===null||on(l,l.return)),l!==null&&a&4&&Io(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Tt(t,e),zt(e),a&512&&(lt||l===null||on(l,l.return)),e.flags&32){o=e.stateNode;try{Ul(o,"")}catch(ue){Re(e,e.return,ue)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Io(e,o,l!==null?l.memoizedProps:o)),a&1024&&(Fo=!0);break;case 6:if(Tt(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(ue){Re(e,e.return,ue)}}break;case 3:if(Yr=null,o=nn,nn=Hr(t.containerInfo),Tt(t,e),nn=o,zt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{ma(t.containerInfo)}catch(ue){Re(e,e.return,ue)}Fo&&(Fo=!1,bd(e));break;case 4:a=nn,nn=Hr(e.stateNode.containerInfo),Tt(t,e),zt(e),nn=a;break;case 12:Tt(t,e),zt(e);break;case 31:Tt(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 13:Tt(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(zr=yt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 22:o=e.memoizedState!==null;var T=l!==null&&l.memoizedState!==null,O=Tn,G=lt;if(Tn=O||o,lt=G||T,Tt(t,e),lt=G,Tn=O,zt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(l===null||T||Tn||lt||wl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){T=l=t;try{if(c=T.stateNode,o)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{S=T.stateNode;var Q=T.memoizedProps.style,R=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;S.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(ue){Re(T,T.return,ue)}}}else if(t.tag===6){if(l===null){T=t;try{T.stateNode.nodeValue=o?"":T.memoizedProps}catch(ue){Re(T,T.return,ue)}}}else if(t.tag===18){if(l===null){T=t;try{var U=T.stateNode;o?oh(U,!0):oh(T.stateNode,!1)}catch(ue){Re(T,T.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Cr(e,l))));break;case 19:Tt(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Cr(e,a)));break;case 30:break;case 21:break;default:Tt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(sd(a)){l=a;break}a=a.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var o=l.stateNode,c=Qo(e);Er(e,c,o);break;case 5:var g=l.stateNode;l.flags&32&&(Ul(g,""),l.flags&=-33);var S=Qo(e);Er(e,S,g);break;case 3:case 4:var T=l.stateNode.containerInfo,O=Qo(e);Zo(e,O,T);break;default:throw Error(u(161))}}catch(G){Re(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dd(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),wl(t);break;case 1:on(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&od(t,t.return,l),wl(t);break;case 27:fi(t.stateNode);case 26:case 5:on(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function An(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,c=t,g=c.flags;switch(c.tag){case 0:case 11:case 15:An(o,c,l),ti(4,c);break;case 1:if(An(o,c,l),a=c,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Re(a,a.return,O)}if(a=c,o=a.updateQueue,o!==null){var S=a.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Jf(T[o],S)}catch(O){Re(a,a.return,O)}}l&&g&64&&ud(c),ni(c,c.return);break;case 27:fd(c);case 26:case 5:An(o,c,l),l&&a===null&&g&4&&cd(c),ni(c,c.return);break;case 12:An(o,c,l);break;case 31:An(o,c,l),l&&g&4&&gd(o,c);break;case 13:An(o,c,l),l&&g&4&&xd(o,c);break;case 22:c.memoizedState===null&&An(o,c,l),ni(c,c.return);break;case 30:break;default:An(o,c,l)}t=t.sibling}}function Ko(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ga(l))}function Jo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e))}function ln(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vd(e,t,l,a),t=t.sibling}function vd(e,t,l,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,l,a),o&2048&&ti(9,t);break;case 1:ln(e,t,l,a);break;case 3:ln(e,t,l,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e)));break;case 12:if(o&2048){ln(e,t,l,a),e=t.stateNode;try{var c=t.memoizedProps,g=c.id,S=c.onPostCommit;typeof S=="function"&&S(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Re(t,t.return,T)}}else ln(e,t,l,a);break;case 31:ln(e,t,l,a);break;case 13:ln(e,t,l,a);break;case 23:break;case 22:c=t.stateNode,g=t.alternate,t.memoizedState!==null?c._visibility&2?ln(e,t,l,a):li(e,t):c._visibility&2?ln(e,t,l,a):(c._visibility|=2,aa(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Ko(g,t);break;case 24:ln(e,t,l,a),o&2048&&Jo(t.alternate,t);break;default:ln(e,t,l,a)}}function aa(e,t,l,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,g=t,S=l,T=a,O=g.flags;switch(g.tag){case 0:case 11:case 15:aa(c,g,S,T,o),ti(8,g);break;case 23:break;case 22:var G=g.stateNode;g.memoizedState!==null?G._visibility&2?aa(c,g,S,T,o):li(c,g):(G._visibility|=2,aa(c,g,S,T,o)),o&&O&2048&&Ko(g.alternate,g);break;case 24:aa(c,g,S,T,o),o&&O&2048&&Jo(g.alternate,g);break;default:aa(c,g,S,T,o)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,o=a.flags;switch(a.tag){case 22:li(l,a),o&2048&&Ko(a.alternate,a);break;case 24:li(l,a),o&2048&&Jo(a.alternate,a);break;default:li(l,a)}t=t.sibling}}var ai=8192;function ia(e,t,l){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Sd(e,t,l),e=e.sibling}function Sd(e,t,l){switch(e.tag){case 26:ia(e,t,l),e.flags&ai&&e.memoizedState!==null&&W0(l,nn,e.memoizedState,e.memoizedProps);break;case 5:ia(e,t,l);break;case 3:case 4:var a=nn;nn=Hr(e.stateNode.containerInfo),ia(e,t,l),nn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ai,ai=16777216,ia(e,t,l),ai=a):ia(e,t,l));break;default:ia(e,t,l)}}function kd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];ct=a,Ed(a,e)}kd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wd(e),e=e.sibling}function wd(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tr(e)):ii(e);break;default:ii(e)}}function Tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];ct=a,Ed(a,e)}kd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),Tr(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Tr(t));break;default:Tr(t)}e=e.sibling}}function Ed(e,t){for(;ct!==null;){var l=ct;switch(l.tag){case 0:case 11:case 15:Qn(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ct=a;else e:for(l=e;ct!==null;){a=ct;var o=a.sibling,c=a.return;if(hd(a),a===l){ct=null;break e}if(o!==null){o.return=c,ct=o;break e}ct=c}}}var d0={getCacheForType:function(e){var t=pt(et),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return pt(et).controller.signal}},h0=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ve=null,Ee=null,ze=0,Le=0,Bt=null,Zn=!1,ra=!1,$o=!1,Mn=0,$e=0,Fn=0,El=0,Wo=0,Ut=0,ua=0,ri=null,jt=null,Po=!1,zr=0,Cd=0,jr=1/0,Ar=null,Kn=null,rt=0,Jn=null,oa=null,Dn=0,ec=0,tc=null,Td=null,ui=0,nc=null;function Ht(){return(_e&2)!==0&&ze!==0?ze&-ze:A.T!==null?oc():Ys()}function zd(){if(Ut===0)if((ze&536870912)===0||Ae){var e=Bi;Bi<<=1,(Bi&3932160)===0&&(Bi=262144),Ut=e}else Ut=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Ut}function At(e,t,l){(e===Ve&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(ca(e,0),$n(e,ze,Ut,!1)),ja(e,l),((_e&2)===0||e!==Ve)&&(e===Ve&&((_e&2)===0&&(El|=l),$e===4&&$n(e,ze,Ut,!1)),cn(e))}function jd(e,t,l){if((_e&6)!==0)throw Error(u(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||za(e,t),o=a?x0(e,t):ac(e,t,!0),c=a;do{if(o===0){ra&&!a&&$n(e,t,0,!1);break}else{if(l=e.current.alternate,c&&!m0(l)){o=ac(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var S=e;o=ri;var T=S.current.memoizedState.isDehydrated;if(T&&(ca(S,g).flags|=256),g=ac(S,g,!1),g!==2){if($o&&!T){S.errorRecoveryDisabledLanes|=c,El|=c,o=4;break e}c=jt,jt=o,c!==null&&(jt===null?jt=c:jt.push.apply(jt,c))}o=g}if(c=!1,o!==2)continue}}if(o===1){ca(e,0),$n(e,t,0,!0);break}e:{switch(a=e,c=o,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:$n(a,t,Ut,!Zn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=zr+300-yt(),10<o)){if($n(a,t,Ut,!Zn),Hi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=ih(Ad.bind(null,a,l,jt,Ar,Po,t,Ut,El,ua,Zn,c,"Throttled",-0,0),o);break e}Ad(a,l,jt,Ar,Po,t,Ut,El,ua,Zn,c,null,-0,0)}}break}while(!0);cn(e)}function Ad(e,t,l,a,o,c,g,S,T,O,G,Q,R,U){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Sd(t,c,Q);var ue=(c&62914560)===c?zr-yt():(c&4194048)===c?Cd-yt():0;if(ue=P0(Q,ue),ue!==null){Dn=c,e.cancelPendingCommit=ue(Bd.bind(null,e,t,c,l,a,o,g,S,T,G,Q,null,R,U)),$n(e,c,g,!O);return}}Bd(e,t,c,l,a,o,g,S,T)}function m0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var o=l[a],c=o.getSnapshot;o=o.value;try{if(!_t(c(),o))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t,l,a){t&=~Wo,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var c=31-Ge(o),g=1<<c;a[c]=-1,o&=~g}l!==0&&Us(e,l,t)}function Mr(){return(_e&6)===0?(oi(0),!1):!0}function lc(){if(Ee!==null){if(Le===0)var e=Ee.return;else e=Ee,vn=ml=null,bo(e),Pl=null,Xa=0,e=Ee;for(;e!==null;)rd(e.alternate,e),e=e.return;Ee=null}}function ca(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,L0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Dn=0,lc(),Ve=e,Ee=l=yn(e.current,null),ze=t,Le=0,Bt=null,Zn=!1,ra=za(e,t),$o=!1,ua=Ut=Wo=El=Fn=$e=0,jt=ri=null,Po=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-Ge(a),c=1<<o;t|=e[o],a&=~c}return Mn=t,$i(),l}function Md(e,t){ye=null,A.H=Wa,t===Wl||t===ir?(t=Qf(),Le=3):t===ro?(t=Qf(),Le=4):Le=t===Lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Ee===null&&($e=1,br(e,Qt(t,e.current)))}function Dd(){var e=Lt.current;return e===null?!0:(ze&4194048)===ze?Jt===null:(ze&62914560)===ze||(ze&536870912)!==0?e===Jt:!1}function Nd(){var e=A.H;return A.H=Wa,e===null?Wa:e}function _d(){var e=A.A;return A.A=d0,e}function Dr(){$e=4,Zn||(ze&4194048)!==ze&&Lt.current!==null||(ra=!0),(Fn&134217727)===0&&(El&134217727)===0||Ve===null||$n(Ve,ze,Ut,!1)}function ac(e,t,l){var a=_e;_e|=2;var o=Nd(),c=_d();(Ve!==e||ze!==t)&&(Ar=null,ca(e,t)),t=!1;var g=$e;e:do try{if(Le!==0&&Ee!==null){var S=Ee,T=Bt;switch(Le){case 8:lc(),g=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var O=Le;if(Le=0,Bt=null,sa(e,S,T,O),l&&ra){g=0;break e}break;default:O=Le,Le=0,Bt=null,sa(e,S,T,O)}}g0(),g=$e;break}catch(G){Md(e,G)}while(!0);return t&&e.shellSuspendCounter++,vn=ml=null,_e=a,A.H=o,A.A=c,Ee===null&&(Ve=null,ze=0,$i()),g}function g0(){for(;Ee!==null;)Od(Ee)}function x0(e,t){var l=_e;_e|=2;var a=Nd(),o=_d();Ve!==e||ze!==t?(Ar=null,jr=yt()+500,ca(e,t)):ra=za(e,t);e:do try{if(Le!==0&&Ee!==null){t=Ee;var c=Bt;t:switch(Le){case 1:Le=0,Bt=null,sa(e,t,c,1);break;case 2:case 9:if(Xf(c)){Le=0,Bt=null,Ld(t);break}t=function(){Le!==2&&Le!==9||Ve!==e||(Le=7),cn(e)},c.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Xf(c)?(Le=0,Bt=null,Ld(t)):(Le=0,Bt=null,sa(e,t,c,7));break;case 5:var g=null;switch(Ee.tag){case 26:g=Ee.memoizedState;case 5:case 27:var S=Ee;if(g?vh(g):S.stateNode.complete){Le=0,Bt=null;var T=S.sibling;if(T!==null)Ee=T;else{var O=S.return;O!==null?(Ee=O,Nr(O)):Ee=null}break t}}Le=0,Bt=null,sa(e,t,c,5);break;case 6:Le=0,Bt=null,sa(e,t,c,6);break;case 8:lc(),$e=6;break e;default:throw Error(u(462))}}y0();break}catch(G){Md(e,G)}while(!0);return vn=ml=null,A.H=a,A.A=o,_e=l,Ee!==null?0:(Ve=null,ze=0,$i(),$e)}function y0(){for(;Ee!==null&&!gu();)Od(Ee)}function Od(e){var t=ad(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?Nr(e):Ee=t}function Ld(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Wp(l,t,t.pendingProps,t.type,void 0,ze);break;case 11:t=Wp(l,t,t.pendingProps,t.type.render,t.ref,ze);break;case 5:bo(t);default:rd(l,t),t=Ee=_f(t,Mn),t=ad(l,t,Mn)}e.memoizedProps=e.pendingProps,t===null?Nr(e):Ee=t}function sa(e,t,l,a){vn=ml=null,bo(t),Pl=null,Xa=0;var o=t.return;try{if(r0(e,o,t,l,ze)){$e=1,br(e,Qt(l,e.current)),Ee=null;return}}catch(c){if(o!==null)throw Ee=o,c;$e=1,br(e,Qt(l,e.current)),Ee=null;return}t.flags&32768?(Ae||a===1?e=!0:ra||(ze&536870912)!==0?e=!1:(Zn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Rd(t,e)):Nr(t)}function Nr(e){var t=e;do{if((t.flags&32768)!==0){Rd(t,Zn);return}e=t.return;var l=c0(t.alternate,t,Mn);if(l!==null){Ee=l;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function Rd(e,t){do{var l=s0(e.alternate,e);if(l!==null){l.flags&=32767,Ee=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=l}while(e!==null);$e=6,Ee=null}function Bd(e,t,l,a,o,c,g,S,T){e.cancelPendingCommit=null;do _r();while(rt!==0);if((_e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(c=t.lanes|t.childLanes,c|=Iu,$g(e,l,c,g,S,T),e===Ve&&(Ee=Ve=null,ze=0),oa=t,Jn=e,Dn=l,ec=c,tc=o,Td=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,k0(he,function(){return Gd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,o=Z.p,Z.p=2,g=_e,_e|=4;try{f0(e,t,l)}finally{_e=g,Z.p=o,A.T=a}}rt=1,Ud(),Hd(),qd()}}function Ud(){if(rt===1){rt=0;var e=Jn,t=oa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=A.T,A.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{yd(t,e);var c=gc,g=Ef(e.containerInfo),S=c.focusedElem,T=c.selectionRange;if(g!==S&&S&&S.ownerDocument&&wf(S.ownerDocument.documentElement,S)){if(T!==null&&qu(S)){var O=T.start,G=T.end;if(G===void 0&&(G=O),"selectionStart"in S)S.selectionStart=O,S.selectionEnd=Math.min(G,S.value.length);else{var Q=S.ownerDocument||document,R=Q&&Q.defaultView||window;if(R.getSelection){var U=R.getSelection(),ue=S.textContent.length,de=Math.min(T.start,ue),qe=T.end===void 0?de:Math.min(T.end,ue);!U.extend&&de>qe&&(g=qe,qe=de,de=g);var M=kf(S,de),z=kf(S,qe);if(M&&z&&(U.rangeCount!==1||U.anchorNode!==M.node||U.anchorOffset!==M.offset||U.focusNode!==z.node||U.focusOffset!==z.offset)){var N=Q.createRange();N.setStart(M.node,M.offset),U.removeAllRanges(),de>qe?(U.addRange(N),U.extend(z.node,z.offset)):(N.setEnd(z.node,z.offset),U.addRange(N))}}}}for(Q=[],U=S;U=U.parentNode;)U.nodeType===1&&Q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Q.length;S++){var X=Q[S];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ir=!!mc,gc=mc=null}finally{_e=o,Z.p=a,A.T=l}}e.current=t,rt=2}}function Hd(){if(rt===2){rt=0;var e=Jn,t=oa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=A.T,A.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{dd(e,t.alternate,t)}finally{_e=o,Z.p=a,A.T=l}}rt=3}}function qd(){if(rt===4||rt===3){rt=0,xu();var e=Jn,t=oa,l=Dn,a=Td;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,oa=Jn=null,Yd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kn=null),Su(l),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=A.T,o=Z.p,Z.p=2,A.T=null;try{for(var c=e.onRecoverableError,g=0;g<a.length;g++){var S=a[g];c(S.value,{componentStack:S.stack})}}finally{A.T=t,Z.p=o}}(Dn&3)!==0&&_r(),cn(e),o=e.pendingLanes,(l&261930)!==0&&(o&42)!==0?e===nc?ui++:(ui=0,nc=e):ui=0,oi(0)}}function Yd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ga(t)))}function _r(){return Ud(),Hd(),qd(),Gd()}function Gd(){if(rt!==5)return!1;var e=Jn,t=ec;ec=0;var l=Su(Dn),a=A.T,o=Z.p;try{Z.p=32>l?32:l,A.T=null,l=tc,tc=null;var c=Jn,g=Dn;if(rt=0,oa=Jn=null,Dn=0,(_e&6)!==0)throw Error(u(331));var S=_e;if(_e|=4,wd(c.current),vd(c,c.current,g,l),_e=S,oi(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(bt,c)}catch{}return!0}finally{Z.p=o,A.T=a,Yd(e,t)}}function Vd(e,t,l){t=Qt(l,t),t=Oo(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(ja(e,2),cn(e))}function Re(e,t,l){if(e.tag===3)Vd(e,e,l);else for(;t!==null;){if(t.tag===3){Vd(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=Qt(l,e),l=Xp(2),a=Vn(t,l,2),a!==null&&(Ip(l,a,t,e),ja(a,2),cn(a));break}}t=t.return}}function ic(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new h0;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(l)||($o=!0,o.add(l),e=b0.bind(null,e,t,l),t.then(e,e))}function b0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ve===e&&(ze&l)===l&&($e===4||$e===3&&(ze&62914560)===ze&&300>yt()-zr?(_e&2)===0&&ca(e,0):Wo|=l,ua===ze&&(ua=0)),cn(e)}function Xd(e,t){t===0&&(t=Bs()),e=pl(e,t),e!==null&&(ja(e,t),cn(e))}function v0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Xd(e,l)}function S0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(l=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Xd(e,l)}function k0(e,t){return Dl(e,t)}var Or=null,fa=null,rc=!1,Lr=!1,uc=!1,Wn=0;function cn(e){e!==fa&&e.next===null&&(fa===null?Or=fa=e:fa=fa.next=e),Lr=!0,rc||(rc=!0,E0())}function oi(e,t){if(!uc&&Lr){uc=!0;do for(var l=!1,a=Or;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var c=0;else{var g=a.suspendedLanes,S=a.pingedLanes;c=(1<<31-Ge(42|e)+1)-1,c&=o&~(g&~S),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(l=!0,Fd(a,c))}else c=ze,c=Hi(a,a===Ve?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||za(a,c)||(l=!0,Fd(a,c));a=a.next}while(l);uc=!1}}function w0(){Id()}function Id(){Lr=rc=!1;var e=0;Wn!==0&&O0()&&(e=Wn);for(var t=yt(),l=null,a=Or;a!==null;){var o=a.next,c=Qd(a,t);c===0?(a.next=null,l===null?Or=o:l.next=o,o===null&&(fa=l)):(l=a,(e!==0||(c&3)!==0)&&(Lr=!0)),a=o}rt!==0&&rt!==5||oi(e),Wn!==0&&(Wn=0)}function Qd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var g=31-Ge(c),S=1<<g,T=o[g];T===-1?((S&l)===0||(S&a)!==0)&&(o[g]=Jg(S,t)):T<=t&&(e.expiredLanes|=S),c&=~S}if(t=Ve,l=ze,l=Hi(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ta(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||za(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ta(a),Su(l)){case 2:case 8:l=ee;break;case 32:l=he;break;case 268435456:l=Oe;break;default:l=he}return a=Zd.bind(null,e),l=Dl(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ta(a),e.callbackPriority=2,e.callbackNode=null,2}function Zd(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(_r()&&e.callbackNode!==l)return null;var a=ze;return a=Hi(e,e===Ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(jd(e,a,t),Qd(e,yt()),e.callbackNode!=null&&e.callbackNode===l?Zd.bind(null,e):null)}function Fd(e,t){if(_r())return null;jd(e,t,!0)}function E0(){R0(function(){(_e&6)!==0?Dl(V,w0):Id()})}function oc(){if(Wn===0){var e=Jl;e===0&&(e=Ri,Ri<<=1,(Ri&261888)===0&&(Ri=256)),Wn=e}return Wn}function Kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Jd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function C0(e,t,l,a,o){if(t==="submit"&&l&&l.stateNode===o){var c=Kd((o[wt]||null).action),g=a.submitter;g&&(t=(t=g[wt]||null)?Kd(t.formAction):g.getAttribute("formAction"),t!==null&&(c=t,g=null));var S=new Zi("action","action",null,a,o);e.push({event:S,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var T=g?Jd(o,g):new FormData(o);jo(l,{pending:!0,data:T,method:o.method,action:c},null,T)}}else typeof c=="function"&&(S.preventDefault(),T=g?Jd(o,g):new FormData(o),jo(l,{pending:!0,data:T,method:o.method,action:c},c,T))},currentTarget:o}]})}}for(var cc=0;cc<Xu.length;cc++){var sc=Xu[cc],T0=sc.toLowerCase(),z0=sc[0].toUpperCase()+sc.slice(1);tn(T0,"on"+z0)}tn(zf,"onAnimationEnd"),tn(jf,"onAnimationIteration"),tn(Af,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(V1,"onTransitionRun"),tn(X1,"onTransitionStart"),tn(I1,"onTransitionCancel"),tn(Mf,"onTransitionEnd"),Rl("onMouseEnter",["mouseout","mouseover"]),Rl("onMouseLeave",["mouseout","mouseover"]),Rl("onPointerEnter",["pointerout","pointerover"]),Rl("onPointerLeave",["pointerout","pointerover"]),ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ol("onBeforeInput",["compositionend","keypress","textInput","paste"]),ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci));function $d(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],o=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var g=a.length-1;0<=g;g--){var S=a[g],T=S.instance,O=S.currentTarget;if(S=S.listener,T!==c&&o.isPropagationStopped())break e;c=S,o.currentTarget=O;try{c(o)}catch(G){Ji(G)}o.currentTarget=null,c=T}else for(g=0;g<a.length;g++){if(S=a[g],T=S.instance,O=S.currentTarget,S=S.listener,T!==c&&o.isPropagationStopped())break e;c=S,o.currentTarget=O;try{c(o)}catch(G){Ji(G)}o.currentTarget=null,c=T}}}}function Ce(e,t){var l=t[ku];l===void 0&&(l=t[ku]=new Set);var a=e+"__bubble";l.has(a)||(Wd(t,e,2,!1),l.add(a))}function fc(e,t,l){var a=0;t&&(a|=4),Wd(l,e,a,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function pc(e){if(!e[Rr]){e[Rr]=!0,Xs.forEach(function(l){l!=="selectionchange"&&(j0.has(l)||fc(l,!1,e),fc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,fc("selectionchange",!1,t))}}function Wd(e,t,l,a){switch(zh(t)){case 2:var o=nx;break;case 8:o=lx;break;default:o=zc}l=o.bind(null,t,l,e),o=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,l,{capture:!0,passive:o}):e.addEventListener(t,l,!0):o!==void 0?e.addEventListener(t,l,{passive:o}):e.addEventListener(t,l,!1)}function dc(e,t,l,a,o){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var S=a.stateNode.containerInfo;if(S===o)break;if(g===4)for(g=a.return;g!==null;){var T=g.tag;if((T===3||T===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;S!==null;){if(g=_l(S),g===null)return;if(T=g.tag,T===5||T===6||T===26||T===27){a=c=g;continue e}S=S.parentNode}}a=a.return}nf(function(){var O=c,G=Au(l),Q=[];e:{var R=Df.get(e);if(R!==void 0){var U=Zi,ue=e;switch(e){case"keypress":if(Ii(l)===0)break e;case"keydown":case"keyup":U=S1;break;case"focusin":ue="focus",U=Lu;break;case"focusout":ue="blur",U=Lu;break;case"beforeblur":case"afterblur":U=Lu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=E1;break;case zf:case jf:case Af:U=p1;break;case Mf:U=T1;break;case"scroll":case"scrollend":U=u1;break;case"wheel":U=j1;break;case"copy":case"cut":case"paste":U=h1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=of;break;case"toggle":case"beforetoggle":U=M1}var de=(t&4)!==0,qe=!de&&(e==="scroll"||e==="scrollend"),M=de?R!==null?R+"Capture":null:R;de=[];for(var z=O,N;z!==null;){var X=z;if(N=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||N===null||M===null||(X=Da(z,M),X!=null&&de.push(si(z,X,N))),qe)break;z=z.return}0<de.length&&(R=new U(R,ue,null,l,G),Q.push({event:R,listeners:de}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",R&&l!==ju&&(ue=l.relatedTarget||l.fromElement)&&(_l(ue)||ue[Nl]))break e;if((U||R)&&(R=G.window===G?G:(R=G.ownerDocument)?R.defaultView||R.parentWindow:window,U?(ue=l.relatedTarget||l.toElement,U=O,ue=ue?_l(ue):null,ue!==null&&(qe=p(ue),de=ue.tag,ue!==qe||de!==5&&de!==27&&de!==6)&&(ue=null)):(U=null,ue=O),U!==ue)){if(de=rf,X="onMouseLeave",M="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(de=of,X="onPointerLeave",M="onPointerEnter",z="pointer"),qe=U==null?R:Ma(U),N=ue==null?R:Ma(ue),R=new de(X,z+"leave",U,l,G),R.target=qe,R.relatedTarget=N,X=null,_l(G)===O&&(de=new de(M,z+"enter",ue,l,G),de.target=N,de.relatedTarget=qe,X=de),qe=X,U&&ue)t:{for(de=A0,M=U,z=ue,N=0,X=M;X;X=de(X))N++;X=0;for(var fe=z;fe;fe=de(fe))X++;for(;0<N-X;)M=de(M),N--;for(;0<X-N;)z=de(z),X--;for(;N--;){if(M===z||z!==null&&M===z.alternate){de=M;break t}M=de(M),z=de(z)}de=null}else de=null;U!==null&&Pd(Q,R,U,de,!1),ue!==null&&qe!==null&&Pd(Q,qe,ue,de,!0)}}e:{if(R=O?Ma(O):window,U=R.nodeName&&R.nodeName.toLowerCase(),U==="select"||U==="input"&&R.type==="file")var De=gf;else if(hf(R))if(xf)De=q1;else{De=U1;var ce=B1}else U=R.nodeName,!U||U.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&zu(O.elementType)&&(De=gf):De=H1;if(De&&(De=De(e,O))){mf(Q,De,l,G);break e}ce&&ce(e,R,O),e==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&Tu(R,"number",R.value)}switch(ce=O?Ma(O):window,e){case"focusin":(hf(ce)||ce.contentEditable==="true")&&(Gl=ce,Yu=O,Ha=null);break;case"focusout":Ha=Yu=Gl=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Cf(Q,l,G);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Cf(Q,l,G)}var be;if(Bu)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Yl?pf(e,l)&&(je="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(je="onCompositionStart");je&&(cf&&l.locale!=="ko"&&(Yl||je!=="onCompositionStart"?je==="onCompositionEnd"&&Yl&&(be=lf()):(Rn=G,Nu="value"in Rn?Rn.value:Rn.textContent,Yl=!0)),ce=Br(O,je),0<ce.length&&(je=new uf(je,e,null,l,G),Q.push({event:je,listeners:ce}),be?je.data=be:(be=df(l),be!==null&&(je.data=be)))),(be=N1?_1(e,l):O1(e,l))&&(je=Br(O,"onBeforeInput"),0<je.length&&(ce=new uf("onBeforeInput","beforeinput",null,l,G),Q.push({event:ce,listeners:je}),ce.data=be)),C0(Q,e,O,l,G)}$d(Q,t)})}function si(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Br(e,t){for(var l=t+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Da(e,l),o!=null&&a.unshift(si(e,o,c)),o=Da(e,t),o!=null&&a.push(si(e,o,c))),e.tag===3)return a;e=e.return}return[]}function A0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,t,l,a,o){for(var c=t._reactName,g=[];l!==null&&l!==a;){var S=l,T=S.alternate,O=S.stateNode;if(S=S.tag,T!==null&&T===a)break;S!==5&&S!==26&&S!==27||O===null||(T=O,o?(O=Da(l,c),O!=null&&g.unshift(si(l,O,T))):o||(O=Da(l,c),O!=null&&g.push(si(l,O,T)))),l=l.return}g.length!==0&&e.push({event:t,listeners:g})}var M0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(M0,`
`).replace(D0,"")}function th(e,t){return t=eh(t),eh(e)===t}function He(e,t,l,a,o,c){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ul(e,""+a);break;case"className":Yi(e,"class",a);break;case"tabIndex":Yi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,l,a);break;case"style":ef(e,a,c);break;case"data":if(t!=="object"){Yi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Vi(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(l==="formAction"?(t!=="input"&&He(e,t,"name",o.name,o,null),He(e,t,"formEncType",o.formEncType,o,null),He(e,t,"formMethod",o.formMethod,o,null),He(e,t,"formTarget",o.formTarget,o,null)):(He(e,t,"encType",o.encType,o,null),He(e,t,"method",o.method,o,null),He(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Vi(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),qi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=i1.get(l)||l,qi(e,l,a))}}function hc(e,t,l,a,o,c){switch(l){case"style":ef(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&Ul(e,""+a);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(o=l.endsWith("Capture"),t=l.slice(2,o?l.length-7:void 0),c=e[wt]||null,c=c!=null?c[l]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof a=="function")){typeof c!="function"&&c!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,o);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):qi(e,l,a)}}}function ht(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var a=!1,o=!1,c;for(c in l)if(l.hasOwnProperty(c)){var g=l[c];if(g!=null)switch(c){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,c,g,l,null)}}o&&He(e,t,"srcSet",l.srcSet,l,null),a&&He(e,t,"src",l.src,l,null);return;case"input":Ce("invalid",e);var S=c=g=o=null,T=null,O=null;for(a in l)if(l.hasOwnProperty(a)){var G=l[a];if(G!=null)switch(a){case"name":o=G;break;case"type":g=G;break;case"checked":T=G;break;case"defaultChecked":O=G;break;case"value":c=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:He(e,t,a,G,l,null)}}Js(e,c,S,T,O,g,o,!1);return;case"select":Ce("invalid",e),a=g=c=null;for(o in l)if(l.hasOwnProperty(o)&&(S=l[o],S!=null))switch(o){case"value":c=S;break;case"defaultValue":g=S;break;case"multiple":a=S;default:He(e,t,o,S,l,null)}t=c,l=g,e.multiple=!!a,t!=null?Bl(e,!!a,t,!1):l!=null&&Bl(e,!!a,l,!0);return;case"textarea":Ce("invalid",e),c=o=a=null;for(g in l)if(l.hasOwnProperty(g)&&(S=l[g],S!=null))switch(g){case"value":a=S;break;case"defaultValue":o=S;break;case"children":c=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(91));break;default:He(e,t,g,S,l,null)}Ws(e,a,o,c);return;case"option":for(T in l)l.hasOwnProperty(T)&&(a=l[T],a!=null)&&(T==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,t,T,a,l,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(a=0;a<ci.length;a++)Ce(ci[a],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in l)if(l.hasOwnProperty(O)&&(a=l[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,O,a,l,null)}return;default:if(zu(t)){for(G in l)l.hasOwnProperty(G)&&(a=l[G],a!==void 0&&hc(e,t,G,a,l,void 0));return}}for(S in l)l.hasOwnProperty(S)&&(a=l[S],a!=null&&He(e,t,S,a,l,null))}function N0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,g=null,S=null,T=null,O=null,G=null;for(U in l){var Q=l[U];if(l.hasOwnProperty(U)&&Q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":T=Q;default:a.hasOwnProperty(U)||He(e,t,U,null,a,Q)}}for(var R in a){var U=a[R];if(Q=l[R],a.hasOwnProperty(R)&&(U!=null||Q!=null))switch(R){case"type":c=U;break;case"name":o=U;break;case"checked":O=U;break;case"defaultChecked":G=U;break;case"value":g=U;break;case"defaultValue":S=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:U!==Q&&He(e,t,R,U,a,Q)}}Cu(e,g,S,T,O,G,c,o);return;case"select":U=g=S=R=null;for(c in l)if(T=l[c],l.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":U=T;default:a.hasOwnProperty(c)||He(e,t,c,null,a,T)}for(o in a)if(c=a[o],T=l[o],a.hasOwnProperty(o)&&(c!=null||T!=null))switch(o){case"value":R=c;break;case"defaultValue":S=c;break;case"multiple":g=c;default:c!==T&&He(e,t,o,c,a,T)}t=S,l=g,a=U,R!=null?Bl(e,!!l,R,!1):!!a!=!!l&&(t!=null?Bl(e,!!l,t,!0):Bl(e,!!l,l?[]:"",!1));return;case"textarea":U=R=null;for(S in l)if(o=l[S],l.hasOwnProperty(S)&&o!=null&&!a.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:He(e,t,S,null,a,o)}for(g in a)if(o=a[g],c=l[g],a.hasOwnProperty(g)&&(o!=null||c!=null))switch(g){case"value":R=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==c&&He(e,t,g,o,a,c)}$s(e,R,U);return;case"option":for(var ue in l)R=l[ue],l.hasOwnProperty(ue)&&R!=null&&!a.hasOwnProperty(ue)&&(ue==="selected"?e.selected=!1:He(e,t,ue,null,a,R));for(T in a)R=a[T],U=l[T],a.hasOwnProperty(T)&&R!==U&&(R!=null||U!=null)&&(T==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":He(e,t,T,R,a,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in l)R=l[de],l.hasOwnProperty(de)&&R!=null&&!a.hasOwnProperty(de)&&He(e,t,de,null,a,R);for(O in a)if(R=a[O],U=l[O],a.hasOwnProperty(O)&&R!==U&&(R!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:He(e,t,O,R,a,U)}return;default:if(zu(t)){for(var qe in l)R=l[qe],l.hasOwnProperty(qe)&&R!==void 0&&!a.hasOwnProperty(qe)&&hc(e,t,qe,void 0,a,R);for(G in a)R=a[G],U=l[G],!a.hasOwnProperty(G)||R===U||R===void 0&&U===void 0||hc(e,t,G,R,a,U);return}}for(var M in l)R=l[M],l.hasOwnProperty(M)&&R!=null&&!a.hasOwnProperty(M)&&He(e,t,M,null,a,R);for(Q in a)R=a[Q],U=l[Q],!a.hasOwnProperty(Q)||R===U||R==null&&U==null||He(e,t,Q,R,a,U)}function nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var o=l[a],c=o.transferSize,g=o.initiatorType,S=o.duration;if(c&&S&&nh(g)){for(g=0,S=o.responseEnd,a+=1;a<l.length;a++){var T=l[a],O=T.startTime;if(O>S)break;var G=T.transferSize,Q=T.initiatorType;G&&nh(Q)&&(T=T.responseEnd,g+=G*(T<S?1:(S-O)/(T-O)))}if(--a,t+=8*(c+g)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mc=null,gc=null;function Ur(e){return e.nodeType===9?e:e.ownerDocument}function lh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ah(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yc=null;function O0(){var e=window.event;return e&&e.type==="popstate"?e===yc?!1:(yc=e,!0):(yc=null,!1)}var ih=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(e){return rh.resolve(null).then(e).catch(B0)}:ih;function B0(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function uh(e,t){var l=t,a=0;do{var o=l.nextSibling;if(e.removeChild(l),o&&o.nodeType===8)if(l=o.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(o),ma(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")fi(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,fi(l);for(var c=l.firstChild;c;){var g=c.nextSibling,S=c.nodeName;c[Aa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=g}}else l==="body"&&fi(e.ownerDocument.body);l=o}while(l);ma(t)}function oh(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bc(l),wu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function U0(e,t,l,a){for(;e.nodeType===1;){var o=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function H0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=$t(e.nextSibling),e===null))return null;return e}function ch(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$?"||e.data==="$~"}function Sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function q0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var kc=null;function sh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return $t(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function fh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function ph(e,t,l){switch(t=Ur(l),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wu(e)}var Wt=new Map,dh=new Set;function Hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=Z.d;Z.d={f:Y0,r:G0,D:V0,C:X0,L:I0,m:Q0,X:F0,S:Z0,M:K0};function Y0(){var e=Nn.f(),t=Mr();return e||t}function G0(e){var t=Ol(e);t!==null&&t.tag===5&&t.type==="form"?Mp(t):Nn.r(e)}var pa=typeof document>"u"?null:document;function hh(e,t,l){var a=pa;if(a&&typeof t=="string"&&t){var o=Xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof l=="string"&&(o+='[crossorigin="'+l+'"]'),dh.has(o)||(dh.add(o),e={rel:e,crossOrigin:l,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ht(t,"link",e),ot(t),a.head.appendChild(t)))}}function V0(e){Nn.D(e),hh("dns-prefetch",e,null)}function X0(e,t){Nn.C(e,t),hh("preconnect",e,t)}function I0(e,t,l){Nn.L(e,t,l);var a=pa;if(a&&e&&t){var o='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(o+='[imagesrcset="'+Xt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(o+='[imagesizes="'+Xt(l.imageSizes)+'"]')):o+='[href="'+Xt(e)+'"]';var c=o;switch(t){case"style":c=da(e);break;case"script":c=ha(e)}Wt.has(c)||(e=x({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Wt.set(c,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(pi(c))||t==="script"&&a.querySelector(di(c))||(t=a.createElement("link"),ht(t,"link",e),ot(t),a.head.appendChild(t)))}}function Q0(e,t){Nn.m(e,t);var l=pa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Xt(a)+'"][href="'+Xt(e)+'"]',c=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ha(e)}if(!Wt.has(c)&&(e=x({rel:"modulepreload",href:e},t),Wt.set(c,e),l.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(di(c)))return}a=l.createElement("link"),ht(a,"link",e),ot(a),l.head.appendChild(a)}}}function Z0(e,t,l){Nn.S(e,t,l);var a=pa;if(a&&e){var o=Ll(a).hoistableStyles,c=da(e);t=t||"default";var g=o.get(c);if(!g){var S={loading:0,preload:null};if(g=a.querySelector(pi(c)))S.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Wt.get(c))&&wc(e,l);var T=g=a.createElement("link");ot(T),ht(T,"link",e),T._p=new Promise(function(O,G){T.onload=O,T.onerror=G}),T.addEventListener("load",function(){S.loading|=1}),T.addEventListener("error",function(){S.loading|=2}),S.loading|=4,qr(g,t,a)}g={type:"stylesheet",instance:g,count:1,state:S},o.set(c,g)}}}function F0(e,t){Nn.X(e,t);var l=pa;if(l&&e){var a=Ll(l).hoistableScripts,o=ha(e),c=a.get(o);c||(c=l.querySelector(di(o)),c||(e=x({src:e,async:!0},t),(t=Wt.get(o))&&Ec(e,t),c=l.createElement("script"),ot(c),ht(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function K0(e,t){Nn.M(e,t);var l=pa;if(l&&e){var a=Ll(l).hoistableScripts,o=ha(e),c=a.get(o);c||(c=l.querySelector(di(o)),c||(e=x({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&Ec(e,t),c=l.createElement("script"),ot(c),ht(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function mh(e,t,l,a){var o=(o=se.current)?Hr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=da(l.href),l=Ll(o).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=da(l.href);var c=Ll(o).hoistableStyles,g=c.get(e);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,g),(c=o.querySelector(pi(e)))&&!c._p&&(g.instance=c,g.state.loading=5),Wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wt.set(e,l),c||J0(o,e,l,g.state))),t&&a===null)throw Error(u(528,""));return g}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ha(l),l=Ll(o).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function da(e){return'href="'+Xt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function gh(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function J0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ht(t,"link",l),ot(t),e.head.appendChild(t))}function ha(e){return'[src="'+Xt(e)+'"]'}function di(e){return"script[async]"+e}function xh(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Xt(l.href)+'"]');if(a)return t.instance=a,ot(a),a;var o=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ot(a),ht(a,"style",o),qr(a,l.precedence,e),t.instance=a;case"stylesheet":o=da(l.href);var c=e.querySelector(pi(o));if(c)return t.state.loading|=4,t.instance=c,ot(c),c;a=gh(l),(o=Wt.get(o))&&wc(a,o),c=(e.ownerDocument||e).createElement("link"),ot(c);var g=c;return g._p=new Promise(function(S,T){g.onload=S,g.onerror=T}),ht(c,"link",a),t.state.loading|=4,qr(c,l.precedence,e),t.instance=c;case"script":return c=ha(l.src),(o=e.querySelector(di(c)))?(t.instance=o,ot(o),o):(a=l,(o=Wt.get(c))&&(a=x({},l),Ec(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),ot(o),ht(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,qr(a,l.precedence,e));return t.instance}function qr(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,c=o,g=0;g<a.length;g++){var S=a[g];if(S.dataset.precedence===t)c=S;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yr=null;function yh(e,t,l){if(Yr===null){var a=new Map,o=Yr=new Map;o.set(l,a)}else o=Yr,a=o.get(l),a||(a=new Map,o.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),o=0;o<l.length;o++){var c=l[o];if(!(c[Aa]||c[st]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(t)||"";g=e+g;var S=a.get(g);S?S.push(c):a.set(g,[c])}}return a}function bh(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function $0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function W0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var o=da(a.href),c=t.querySelector(pi(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gr.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=c,ot(c);return}c=t.ownerDocument||t,a=gh(a),(o=Wt.get(o))&&wc(a,o),c=c.createElement("link"),ot(c);var g=c;g._p=new Promise(function(S,T){g.onload=S,g.onerror=T}),ht(c,"link",a),l.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Gr.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Cc=0;function P0(e,t){return e.stylesheets&&e.count===0&&Xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Cc===0&&(Cc=62500*_0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Cc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach(ex,e),Vr=null,Gr.call(e))}function ex(e,t){if(!(t.state.loading&4)){var l=Vr.get(e);if(l)var a=l.get(null);else{l=new Map,Vr.set(e,l);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var g=o[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(l.set(g.dataset.precedence,g),a=g)}a&&l.set(null,a)}o=t.instance,g=o.getAttribute("data-precedence"),c=l.get(g)||a,c===a&&l.set(null,o),l.set(g,o),this.count++,a=Gr.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:H,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function tx(e,t,l,a,o,c,g,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Sh(e,t,l,a,o,c,g,S,T,O,G,Q){return e=new tx(e,t,l,g,T,O,G,Q,S),t=1,c===!0&&(t|=24),c=Ot(3,null,null,t),e.current=c,c.stateNode=e,t=lo(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:l,cache:t},uo(c),e}function kh(e){return e?(e=Il,e):Il}function wh(e,t,l,a,o,c){o=kh(o),a.context===null?a.context=o:a.pendingContext=o,a=Gn(t),a.payload={element:l},c=c===void 0?null:c,c!==null&&(a.callback=c),l=Vn(e,a,t),l!==null&&(At(l,e,t),Qa(l,e,t))}function Eh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Tc(e,t){Eh(e,t),(e=e.alternate)&&Eh(e,t)}function Ch(e){if(e.tag===13||e.tag===31){var t=pl(e,67108864);t!==null&&At(t,e,67108864),Tc(e,67108864)}}function Th(e){if(e.tag===13||e.tag===31){var t=Ht();t=vu(t);var l=pl(e,t);l!==null&&At(l,e,t),Tc(e,t)}}var Ir=!0;function nx(e,t,l,a){var o=A.T;A.T=null;var c=Z.p;try{Z.p=2,zc(e,t,l,a)}finally{Z.p=c,A.T=o}}function lx(e,t,l,a){var o=A.T;A.T=null;var c=Z.p;try{Z.p=8,zc(e,t,l,a)}finally{Z.p=c,A.T=o}}function zc(e,t,l,a){if(Ir){var o=jc(a);if(o===null)dc(e,t,a,Qr,l),jh(e,a);else if(ix(o,e,t,l,a))a.stopPropagation();else if(jh(e,a),t&4&&-1<ax.indexOf(e)){for(;o!==null;){var c=Ol(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ul(c.pendingLanes);if(g!==0){var S=c;for(S.pendingLanes|=2,S.entangledLanes|=2;g;){var T=1<<31-Ge(g);S.entanglements[1]|=T,g&=~T}cn(c),(_e&6)===0&&(jr=yt()+500,oi(0))}}break;case 31:case 13:S=pl(c,2),S!==null&&At(S,c,2),Mr(),Tc(c,2)}if(c=jc(a),c===null&&dc(e,t,a,Qr,l),c===o)break;o=c}o!==null&&a.stopPropagation()}else dc(e,t,a,null,l)}}function jc(e){return e=Au(e),Ac(e)}var Qr=null;function Ac(e){if(Qr=null,e=_l(e),e!==null){var t=p(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=f(t),e!==null)return e;e=null}else if(l===31){if(e=d(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qr=e,null}function zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yu()){case V:return 2;case ee:return 8;case he:case we:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Mc=!1,el=null,tl=null,nl=null,mi=new Map,gi=new Map,ll=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jh(e,t){switch(e){case"focusin":case"focusout":el=null;break;case"dragenter":case"dragleave":tl=null;break;case"mouseover":case"mouseout":nl=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function xi(e,t,l,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Ol(t),t!==null&&Ch(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ix(e,t,l,a,o){switch(t){case"focusin":return el=xi(el,e,t,l,a,o),!0;case"dragenter":return tl=xi(tl,e,t,l,a,o),!0;case"mouseover":return nl=xi(nl,e,t,l,a,o),!0;case"pointerover":var c=o.pointerId;return mi.set(c,xi(mi.get(c)||null,e,t,l,a,o)),!0;case"gotpointercapture":return c=o.pointerId,gi.set(c,xi(gi.get(c)||null,e,t,l,a,o)),!0}return!1}function Ah(e){var t=_l(e.target);if(t!==null){var l=p(t);if(l!==null){if(t=l.tag,t===13){if(t=f(l),t!==null){e.blockedOn=t,Gs(e.priority,function(){Th(l)});return}}else if(t===31){if(t=d(l),t!==null){e.blockedOn=t,Gs(e.priority,function(){Th(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=jc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ju=a,l.target.dispatchEvent(a),ju=null}else return t=Ol(l),t!==null&&Ch(t),e.blockedOn=l,!1;t.shift()}return!0}function Mh(e,t,l){Zr(e)&&l.delete(t)}function rx(){Mc=!1,el!==null&&Zr(el)&&(el=null),tl!==null&&Zr(tl)&&(tl=null),nl!==null&&Zr(nl)&&(nl=null),mi.forEach(Mh),gi.forEach(Mh)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,rx)))}var Kr=null;function Dh(e){Kr!==e&&(Kr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Ac(a||l)===null)continue;break}var c=Ol(l);c!==null&&(e.splice(t,3),t-=3,jo(c,{pending:!0,data:o,method:l.method,action:a},a,o))}}))}function ma(e){function t(T){return Fr(T,e)}el!==null&&Fr(el,e),tl!==null&&Fr(tl,e),nl!==null&&Fr(nl,e),mi.forEach(t),gi.forEach(t);for(var l=0;l<ll.length;l++){var a=ll[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ll.length&&(l=ll[0],l.blockedOn===null);)Ah(l),l.blockedOn===null&&ll.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var o=l[a],c=l[a+1],g=o[wt]||null;if(typeof c=="function")g||Dh(l);else if(g){var S=null;if(c&&c.hasAttribute("formAction")){if(o=c,g=c[wt]||null)S=g.formAction;else if(Ac(o)!==null)continue}else S=g.action;typeof S=="function"?l[a+1]=S:(l.splice(a,3),a-=3),Dh(l)}}}function Nh(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return o=g})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Dc(e){this._internalRoot=e}Jr.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var l=t.current,a=Ht();wh(l,a,e,t,null,null)},Jr.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wh(e.current,2,null,e,null,null),Mr(),t[Nl]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ys();e={blockedOn:null,target:e,priority:t};for(var l=0;l<ll.length&&t!==0&&t<ll[l].priority;l++);ll.splice(l,0,e),l===0&&Ah(e)}};var _h=i.version;if(_h!=="19.2.3")throw Error(u(527,_h,"19.2.3"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var ux={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{bt=$r.inject(ux),it=$r}catch{}}return bi.createRoot=function(e,t){if(!s(e))throw Error(u(299));var l=!1,a="",o=qp,c=Yp,g=Gp;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Sh(e,1,!1,null,null,l,a,null,o,c,g,Nh),e[Nl]=t.current,pc(e),new Dc(t)},bi.hydrateRoot=function(e,t,l){if(!s(e))throw Error(u(299));var a=!1,o="",c=qp,g=Yp,S=Gp,T=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(o=l.identifierPrefix),l.onUncaughtError!==void 0&&(c=l.onUncaughtError),l.onCaughtError!==void 0&&(g=l.onCaughtError),l.onRecoverableError!==void 0&&(S=l.onRecoverableError),l.formState!==void 0&&(T=l.formState)),t=Sh(e,1,!0,t,l??null,a,o,T,c,g,S,Nh),t.context=kh(null),l=t.current,a=Ht(),a=vu(a),o=Gn(a),o.callback=null,Vn(l,o,a),l=a,t.current.lanes=l,ja(t,l),cn(t),e[Nl]=t.current,pc(e),new Jr(t)},bi.version="19.2.3",bi}var Vh;function xx(){if(Vh)return Oc.exports;Vh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Oc.exports=gx(),Oc.exports}var yx=xx();const bx=su(yx);function vx(){const[n,i]=me.useState([]),r=me.useRef(0);return me.useEffect(()=>{const u=[],s=p=>{const f=r.current+1;r.current=f,i(m=>[...m,{id:f,x:p.clientX,y:p.clientY}].slice(-10));const d=window.setTimeout(()=>{i(m=>m.filter(h=>h.id!==f))},1300);u.push(d)};return window.addEventListener("pointerdown",s,{passive:!0}),()=>{window.removeEventListener("pointerdown",s),u.forEach(p=>window.clearTimeout(p))}},[]),y.jsx("div",{className:"clickRipples","aria-hidden":"true",children:n.map(u=>y.jsxs(me.Fragment,{children:[y.jsx("span",{className:"rippleDots",style:{left:`${u.x}px`,top:`${u.y}px`}}),y.jsx("span",{className:"ripple rippleA",style:{left:`${u.x}px`,top:`${u.y}px`}}),y.jsx("span",{className:"ripple rippleB",style:{left:`${u.x}px`,top:`${u.y}px`}})]},u.id))})}function Sx(n,i){const r={};return(n[n.length-1]===""?[...n,""]:n).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const kx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ex={};function Xh(n,i){return(Ex.jsx?wx:kx).test(n)}const Cx=/[ \t\n\f\r]/g;function Tx(n){return typeof n=="object"?n.type==="text"?Ih(n.value):!1:Ih(n)}function Ih(n){return n.replace(Cx,"")===""}class Mi{constructor(i,r,u){this.normal=r,this.property=i,u&&(this.space=u)}}Mi.prototype.normal={};Mi.prototype.property={};Mi.prototype.space=void 0;function Um(n,i){const r={},u={};for(const s of n)Object.assign(r,s.property),Object.assign(u,s.normal);return new Mi(r,u,i)}function as(n){return n.toLowerCase()}class Dt{constructor(i,r){this.attribute=r,this.property=i}}Dt.prototype.attribute="";Dt.prototype.booleanish=!1;Dt.prototype.boolean=!1;Dt.prototype.commaOrSpaceSeparated=!1;Dt.prototype.commaSeparated=!1;Dt.prototype.defined=!1;Dt.prototype.mustUseProperty=!1;Dt.prototype.number=!1;Dt.prototype.overloadedBoolean=!1;Dt.prototype.property="";Dt.prototype.spaceSeparated=!1;Dt.prototype.space=void 0;let zx=0;const ve=zl(),at=zl(),is=zl(),J=zl(),Qe=zl(),ba=zl(),qt=zl();function zl(){return 2**++zx}const rs=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:at,commaOrSpaceSeparated:qt,commaSeparated:ba,number:J,overloadedBoolean:is,spaceSeparated:Qe},Symbol.toStringTag,{value:"Module"})),Uc=Object.keys(rs);class xs extends Dt{constructor(i,r,u,s){let p=-1;if(super(i,r),Qh(this,"space",s),typeof u=="number")for(;++p<Uc.length;){const f=Uc[p];Qh(this,Uc[p],(u&rs[f])===rs[f])}}}xs.prototype.defined=!0;function Qh(n,i,r){r&&(n[i]=r)}function wa(n){const i={},r={};for(const[u,s]of Object.entries(n.properties)){const p=new xs(u,n.transform(n.attributes||{},u),s,n.space);n.mustUseProperty&&n.mustUseProperty.includes(u)&&(p.mustUseProperty=!0),i[u]=p,r[as(u)]=u,r[as(p.attribute)]=u}return new Mi(i,r,n.space)}const Hm=wa({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:J,ariaColIndex:J,ariaColSpan:J,ariaControls:Qe,ariaCurrent:null,ariaDescribedBy:Qe,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Qe,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Qe,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qe,ariaLevel:J,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Qe,ariaPlaceholder:null,ariaPosInSet:J,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Qe,ariaRowCount:J,ariaRowIndex:J,ariaRowSpan:J,ariaSelected:at,ariaSetSize:J,ariaSort:null,ariaValueMax:J,ariaValueMin:J,ariaValueNow:J,ariaValueText:null,role:null},transform(n,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function qm(n,i){return i in n?n[i]:i}function Ym(n,i){return qm(n,i.toLowerCase())}const jx=wa({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ba,acceptCharset:Qe,accessKey:Qe,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Qe,autoFocus:ve,autoPlay:ve,blocking:Qe,capture:null,charSet:null,checked:ve,cite:null,className:Qe,cols:J,colSpan:null,content:null,contentEditable:at,controls:ve,controlsList:Qe,coords:J|ba,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:is,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Qe,height:J,hidden:is,high:J,href:null,hrefLang:null,htmlFor:Qe,httpEquiv:Qe,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Qe,itemRef:Qe,itemScope:ve,itemType:Qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:J,manifest:null,max:null,maxLength:J,media:null,method:null,min:null,minLength:J,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:J,pattern:null,ping:Qe,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Qe,required:ve,reversed:ve,rows:J,rowSpan:J,sandbox:Qe,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:J,sizes:null,slot:null,span:J,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:J,step:null,style:null,tabIndex:J,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:at,width:J,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Qe,axis:null,background:null,bgColor:null,border:J,borderColor:null,bottomMargin:J,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:J,leftMargin:J,link:null,longDesc:null,lowSrc:null,marginHeight:J,marginWidth:J,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:J,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:J,valueType:null,version:null,vAlign:null,vLink:null,vSpace:J,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:J,security:null,unselectable:null},space:"html",transform:Ym}),Ax=wa({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qt,accentHeight:J,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:J,amplitude:J,arabicForm:null,ascent:J,attributeName:null,attributeType:null,azimuth:J,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:J,by:null,calcMode:null,capHeight:J,className:Qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:J,diffuseConstant:J,direction:null,display:null,dur:null,divisor:J,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:J,enableBackground:null,end:null,event:null,exponent:J,externalResourcesRequired:null,fill:null,fillOpacity:J,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ba,g2:ba,glyphName:ba,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:J,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:J,horizOriginX:J,horizOriginY:J,id:null,ideographic:J,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:J,k:J,k1:J,k2:J,k3:J,k4:J,kernelMatrix:qt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:J,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:J,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:J,overlineThickness:J,paintOrder:null,panose1:null,path:null,pathLength:J,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:J,pointsAtY:J,pointsAtZ:J,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qt,rev:qt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qt,requiredFeatures:qt,requiredFonts:qt,requiredFormats:qt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:J,specularExponent:J,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:J,strikethroughThickness:J,string:null,stroke:null,strokeDashArray:qt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:J,strokeOpacity:J,strokeWidth:null,style:null,surfaceScale:J,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qt,tabIndex:J,tableValues:null,target:null,targetX:J,targetY:J,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:J,underlineThickness:J,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:J,values:null,vAlphabetic:J,vMathematical:J,vectorEffect:null,vHanging:J,vIdeographic:J,version:null,vertAdvY:J,vertOriginX:J,vertOriginY:J,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:J,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:qm}),Gm=wa({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,i){return"xlink:"+i.slice(5).toLowerCase()}}),Vm=wa({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ym}),Xm=wa({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,i){return"xml:"+i.slice(3).toLowerCase()}}),Mx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Dx=/[A-Z]/g,Zh=/-[a-z]/g,Nx=/^data[-\w.:]+$/i;function _x(n,i){const r=as(i);let u=i,s=Dt;if(r in n.normal)return n.property[n.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&Nx.test(i)){if(i.charAt(4)==="-"){const p=i.slice(5).replace(Zh,Lx);u="data"+p.charAt(0).toUpperCase()+p.slice(1)}else{const p=i.slice(4);if(!Zh.test(p)){let f=p.replace(Dx,Ox);f.charAt(0)!=="-"&&(f="-"+f),i="data"+f}}s=xs}return new s(u,i)}function Ox(n){return"-"+n.toLowerCase()}function Lx(n){return n.charAt(1).toUpperCase()}const Rx=Um([Hm,jx,Gm,Vm,Xm],"html"),ys=Um([Hm,Ax,Gm,Vm,Xm],"svg");function Bx(n){return n.join(" ").trim()}var ga={},Hc,Fh;function Ux(){if(Fh)return Hc;Fh=1;var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,d=/^\s+|\s+$/g,m=`
`,h="/",b="*",x="",v="comment",k="declaration";function j(I,D){if(typeof I!="string")throw new TypeError("First argument must be a string");if(!I)return[];D=D||{};var F=1,H=1;function ae(oe){var P=oe.match(i);P&&(F+=P.length);var A=oe.lastIndexOf(m);H=~A?oe.length-A:H+oe.length}function le(){var oe={line:F,column:H};return function(P){return P.position=new B(oe),ie(),P}}function B(oe){this.start=oe,this.end={line:F,column:H},this.source=D.source}B.prototype.content=I;function _(oe){var P=new Error(D.source+":"+F+":"+H+": "+oe);if(P.reason=oe,P.filename=D.source,P.line=F,P.column=H,P.source=I,!D.silent)throw P}function K(oe){var P=oe.exec(I);if(P){var A=P[0];return ae(A),I=I.slice(A.length),P}}function ie(){K(r)}function L(oe){var P;for(oe=oe||[];P=W();)P!==!1&&oe.push(P);return oe}function W(){var oe=le();if(!(h!=I.charAt(0)||b!=I.charAt(1))){for(var P=2;x!=I.charAt(P)&&(b!=I.charAt(P)||h!=I.charAt(P+1));)++P;if(P+=2,x===I.charAt(P-1))return _("End of comment missing");var A=I.slice(2,P-2);return H+=2,ae(A),I=I.slice(P),H+=2,oe({type:v,comment:A})}}function te(){var oe=le(),P=K(u);if(P){if(W(),!K(s))return _("property missing ':'");var A=K(p),Z=oe({type:k,property:Y(P[0].replace(n,x)),value:A?Y(A[0].replace(n,x)):x});return K(f),Z}}function Se(){var oe=[];L(oe);for(var P;P=te();)P!==!1&&(oe.push(P),L(oe));return oe}return ie(),Se()}function Y(I){return I?I.replace(d,x):x}return Hc=j,Hc}var Kh;function Hx(){if(Kh)return ga;Kh=1;var n=ga&&ga.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=r;const i=n(Ux());function r(u,s){let p=null;if(!u||typeof u!="string")return p;const f=(0,i.default)(u),d=typeof s=="function";return f.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:b}=m;d?s(h,b,m):b&&(p=p||{},p[h]=b)}),p}return ga}var vi={},Jh;function qx(){if(Jh)return vi;Jh=1,Object.defineProperty(vi,"__esModule",{value:!0}),vi.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,p=function(h){return!h||r.test(h)||n.test(h)},f=function(h,b){return b.toUpperCase()},d=function(h,b){return"".concat(b,"-")},m=function(h,b){return b===void 0&&(b={}),p(h)?h:(h=h.toLowerCase(),b.reactCompat?h=h.replace(s,d):h=h.replace(u,d),h.replace(i,f))};return vi.camelCase=m,vi}var Si,$h;function Yx(){if($h)return Si;$h=1;var n=Si&&Si.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},i=n(Hx()),r=qx();function u(s,p){var f={};return!s||typeof s!="string"||(0,i.default)(s,function(d,m){d&&m&&(f[(0,r.camelCase)(d,p)]=m)}),f}return u.default=u,Si=u,Si}var Gx=Yx();const Vx=su(Gx),Im=Qm("end"),bs=Qm("start");function Qm(n){return i;function i(r){const u=r&&r.position&&r.position[n]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Xx(n){const i=bs(n),r=Im(n);if(i&&r)return{start:i,end:r}}function Ci(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Wh(n.position):"start"in n||"end"in n?Wh(n):"line"in n||"column"in n?us(n):""}function us(n){return Ph(n&&n.line)+":"+Ph(n&&n.column)}function Wh(n){return us(n&&n.start)+"-"+us(n&&n.end)}function Ph(n){return n&&typeof n=="number"?n:1}class xt extends Error{constructor(i,r,u){super(),typeof r=="string"&&(u=r,r=void 0);let s="",p={},f=!1;if(r&&("line"in r&&"column"in r?p={place:r}:"start"in r&&"end"in r?p={place:r}:"type"in r?p={ancestors:[r],place:r.position}:p={...r}),typeof i=="string"?s=i:!p.cause&&i&&(f=!0,s=i.message,p.cause=i),!p.ruleId&&!p.source&&typeof u=="string"){const m=u.indexOf(":");m===-1?p.ruleId=u:(p.source=u.slice(0,m),p.ruleId=u.slice(m+1))}if(!p.place&&p.ancestors&&p.ancestors){const m=p.ancestors[p.ancestors.length-1];m&&(p.place=m.position)}const d=p.place&&"start"in p.place?p.place.start:p.place;this.ancestors=p.ancestors||void 0,this.cause=p.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=d?d.line:void 0,this.name=Ci(p.place)||"1:1",this.place=p.place||void 0,this.reason=this.message,this.ruleId=p.ruleId||void 0,this.source=p.source||void 0,this.stack=f&&p.cause&&typeof p.cause.stack=="string"?p.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xt.prototype.file="";xt.prototype.name="";xt.prototype.reason="";xt.prototype.message="";xt.prototype.stack="";xt.prototype.column=void 0;xt.prototype.line=void 0;xt.prototype.ancestors=void 0;xt.prototype.cause=void 0;xt.prototype.fatal=void 0;xt.prototype.place=void 0;xt.prototype.ruleId=void 0;xt.prototype.source=void 0;const vs={}.hasOwnProperty,Ix=new Map,Qx=/[A-Z]/g,Zx=new Set(["table","tbody","thead","tfoot","tr"]),Fx=new Set(["td","th"]),Zm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Kx(n,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let u;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=ly(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=ny(r,i.jsx,i.jsxs)}const s={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:u,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?ys:Rx,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},p=Fm(s,n,void 0);return p&&typeof p!="string"?p:s.create(n,s.Fragment,{children:p||void 0},void 0)}function Fm(n,i,r){if(i.type==="element")return Jx(n,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return $x(n,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return Px(n,i,r);if(i.type==="mdxjsEsm")return Wx(n,i);if(i.type==="root")return ey(n,i,r);if(i.type==="text")return ty(n,i)}function Jx(n,i,r){const u=n.schema;let s=u;i.tagName.toLowerCase()==="svg"&&u.space==="html"&&(s=ys,n.schema=s),n.ancestors.push(i);const p=Jm(n,i.tagName,!1),f=ay(n,i);let d=ks(n,i);return Zx.has(i.tagName)&&(d=d.filter(function(m){return typeof m=="string"?!Tx(m):!0})),Km(n,f,p,i),Ss(f,d),n.ancestors.pop(),n.schema=u,n.create(i,p,f,r)}function $x(n,i){if(i.data&&i.data.estree&&n.evaluater){const u=i.data.estree.body[0];return u.type,n.evaluater.evaluateExpression(u.expression)}ji(n,i.position)}function Wx(n,i){if(i.data&&i.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(i.data.estree);ji(n,i.position)}function Px(n,i,r){const u=n.schema;let s=u;i.name==="svg"&&u.space==="html"&&(s=ys,n.schema=s),n.ancestors.push(i);const p=i.name===null?n.Fragment:Jm(n,i.name,!0),f=iy(n,i),d=ks(n,i);return Km(n,f,p,i),Ss(f,d),n.ancestors.pop(),n.schema=u,n.create(i,p,f,r)}function ey(n,i,r){const u={};return Ss(u,ks(n,i)),n.create(i,n.Fragment,u,r)}function ty(n,i){return i.value}function Km(n,i,r,u){typeof r!="string"&&r!==n.Fragment&&n.passNode&&(i.node=u)}function Ss(n,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(n.children=r)}}function ny(n,i,r){return u;function u(s,p,f,d){const h=Array.isArray(f.children)?r:i;return d?h(p,f,d):h(p,f)}}function ly(n,i){return r;function r(u,s,p,f){const d=Array.isArray(p.children),m=bs(u);return i(s,p,f,d,{columnNumber:m?m.column-1:void 0,fileName:n,lineNumber:m?m.line:void 0},void 0)}}function ay(n,i){const r={};let u,s;for(s in i.properties)if(s!=="children"&&vs.call(i.properties,s)){const p=ry(n,s,i.properties[s]);if(p){const[f,d]=p;n.tableCellAlignToStyle&&f==="align"&&typeof d=="string"&&Fx.has(i.tagName)?u=d:r[f]=d}}if(u){const p=r.style||(r.style={});p[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return r}function iy(n,i){const r={};for(const u of i.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&n.evaluater){const p=u.data.estree.body[0];p.type;const f=p.expression;f.type;const d=f.properties[0];d.type,Object.assign(r,n.evaluater.evaluateExpression(d.argument))}else ji(n,i.position);else{const s=u.name;let p;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&n.evaluater){const d=u.value.data.estree.body[0];d.type,p=n.evaluater.evaluateExpression(d.expression)}else ji(n,i.position);else p=u.value===null?!0:u.value;r[s]=p}return r}function ks(n,i){const r=[];let u=-1;const s=n.passKeys?new Map:Ix;for(;++u<i.children.length;){const p=i.children[u];let f;if(n.passKeys){const m=p.type==="element"?p.tagName:p.type==="mdxJsxFlowElement"||p.type==="mdxJsxTextElement"?p.name:void 0;if(m){const h=s.get(m)||0;f=m+"-"+h,s.set(m,h+1)}}const d=Fm(n,p,f);d!==void 0&&r.push(d)}return r}function ry(n,i,r){const u=_x(n.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=u.commaSeparated?Sx(r):Bx(r)),u.property==="style"){let s=typeof r=="object"?r:uy(n,String(r));return n.stylePropertyNameCase==="css"&&(s=oy(s)),["style",s]}return[n.elementAttributeNameCase==="react"&&u.space?Mx[u.property]||u.property:u.attribute,r]}}function uy(n,i){try{return Vx(i,{reactCompat:!0})}catch(r){if(n.ignoreInvalidStyle)return{};const u=r,s=new xt("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=n.filePath||void 0,s.url=Zm+"#cannot-parse-style-attribute",s}}function Jm(n,i,r){let u;if(!r)u={type:"Literal",value:i};else if(i.includes(".")){const s=i.split(".");let p=-1,f;for(;++p<s.length;){const d=Xh(s[p])?{type:"Identifier",name:s[p]}:{type:"Literal",value:s[p]};f=f?{type:"MemberExpression",object:f,property:d,computed:!!(p&&d.type==="Literal"),optional:!1}:d}u=f}else u=Xh(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(u.type==="Literal"){const s=u.value;return vs.call(n.components,s)?n.components[s]:s}if(n.evaluater)return n.evaluater.evaluateExpression(u);ji(n)}function ji(n,i){const r=new xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=n.filePath||void 0,r.url=Zm+"#cannot-handle-mdx-estrees-without-createevaluater",r}function oy(n){const i={};let r;for(r in n)vs.call(n,r)&&(i[cy(r)]=n[r]);return i}function cy(n){let i=n.replace(Qx,sy);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function sy(n){return"-"+n.toLowerCase()}const qc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},fy={};function ws(n,i){const r=fy,u=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,s=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return $m(n,u,s)}function $m(n,i,r){if(py(n)){if("value"in n)return n.type==="html"&&!r?"":n.value;if(i&&"alt"in n&&n.alt)return n.alt;if("children"in n)return em(n.children,i,r)}return Array.isArray(n)?em(n,i,r):""}function em(n,i,r){const u=[];let s=-1;for(;++s<n.length;)u[s]=$m(n[s],i,r);return u.join("")}function py(n){return!!(n&&typeof n=="object")}const tm=document.createElement("i");function Es(n){const i="&"+n+";";tm.innerHTML=i;const r=tm.textContent;return r.charCodeAt(r.length-1)===59&&n!=="semi"||r===i?!1:r}function Yt(n,i,r,u){const s=n.length;let p=0,f;if(i<0?i=-i>s?0:s+i:i=i>s?s:i,r=r>0?r:0,u.length<1e4)f=Array.from(u),f.unshift(i,r),n.splice(...f);else for(r&&n.splice(i,r);p<u.length;)f=u.slice(p,p+1e4),f.unshift(i,0),n.splice(...f),p+=1e4,i+=1e4}function Pt(n,i){return n.length>0?(Yt(n,n.length,0,i),n):i}const nm={}.hasOwnProperty;function Wm(n){const i={};let r=-1;for(;++r<n.length;)dy(i,n[r]);return i}function dy(n,i){let r;for(r in i){const s=(nm.call(n,r)?n[r]:void 0)||(n[r]={}),p=i[r];let f;if(p)for(f in p){nm.call(s,f)||(s[f]=[]);const d=p[f];hy(s[f],Array.isArray(d)?d:d?[d]:[])}}}function hy(n,i){let r=-1;const u=[];for(;++r<i.length;)(i[r].add==="after"?n:u).push(i[r]);Yt(n,0,0,u)}function Pm(n,i){const r=Number.parseInt(n,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function an(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=rl(/[A-Za-z]/),gt=rl(/[\dA-Za-z]/),my=rl(/[#-'*+\--9=?A-Z^-~]/);function ru(n){return n!==null&&(n<32||n===127)}const os=rl(/\d/),gy=rl(/[\dA-Fa-f]/),xy=rl(/[!-/:-@[-`{-~]/);function pe(n){return n!==null&&n<-2}function Ie(n){return n!==null&&(n<0||n===32)}function Te(n){return n===-2||n===-1||n===32}const fu=rl(new RegExp("\\p{P}|\\p{S}","u")),Tl=rl(/\s/);function rl(n){return i;function i(r){return r!==null&&r>-1&&n.test(String.fromCharCode(r))}}function Ea(n){const i=[];let r=-1,u=0,s=0;for(;++r<n.length;){const p=n.charCodeAt(r);let f="";if(p===37&&gt(n.charCodeAt(r+1))&&gt(n.charCodeAt(r+2)))s=2;else if(p<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(p))||(f=String.fromCharCode(p));else if(p>55295&&p<57344){const d=n.charCodeAt(r+1);p<56320&&d>56319&&d<57344?(f=String.fromCharCode(p,d),s=1):f="�"}else f=String.fromCharCode(p);f&&(i.push(n.slice(u,r),encodeURIComponent(f)),u=r+s+1,f=""),s&&(r+=s,s=0)}return i.join("")+n.slice(u)}function Me(n,i,r,u){const s=u?u-1:Number.POSITIVE_INFINITY;let p=0;return f;function f(m){return Te(m)?(n.enter(r),d(m)):i(m)}function d(m){return Te(m)&&p++<s?(n.consume(m),d):(n.exit(r),i(m))}}const yy={tokenize:by};function by(n){const i=n.attempt(this.parser.constructs.contentInitial,u,s);let r;return i;function u(d){if(d===null){n.consume(d);return}return n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),Me(n,i,"linePrefix")}function s(d){return n.enter("paragraph"),p(d)}function p(d){const m=n.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=m),r=m,f(d)}function f(d){if(d===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(d);return}return pe(d)?(n.consume(d),n.exit("chunkText"),p):(n.consume(d),f)}}const vy={tokenize:Sy},lm={tokenize:ky};function Sy(n){const i=this,r=[];let u=0,s,p,f;return d;function d(H){if(u<r.length){const ae=r[u];return i.containerState=ae[1],n.attempt(ae[0].continuation,m,h)(H)}return h(H)}function m(H){if(u++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,s&&F();const ae=i.events.length;let le=ae,B;for(;le--;)if(i.events[le][0]==="exit"&&i.events[le][1].type==="chunkFlow"){B=i.events[le][1].end;break}D(u);let _=ae;for(;_<i.events.length;)i.events[_][1].end={...B},_++;return Yt(i.events,le+1,0,i.events.slice(ae)),i.events.length=_,h(H)}return d(H)}function h(H){if(u===r.length){if(!s)return v(H);if(s.currentConstruct&&s.currentConstruct.concrete)return j(H);i.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return i.containerState={},n.check(lm,b,x)(H)}function b(H){return s&&F(),D(u),v(H)}function x(H){return i.parser.lazy[i.now().line]=u!==r.length,f=i.now().offset,j(H)}function v(H){return i.containerState={},n.attempt(lm,k,j)(H)}function k(H){return u++,r.push([i.currentConstruct,i.containerState]),v(H)}function j(H){if(H===null){s&&F(),D(0),n.consume(H);return}return s=s||i.parser.flow(i.now()),n.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:p}),Y(H)}function Y(H){if(H===null){I(n.exit("chunkFlow"),!0),D(0),n.consume(H);return}return pe(H)?(n.consume(H),I(n.exit("chunkFlow")),u=0,i.interrupt=void 0,d):(n.consume(H),Y)}function I(H,ae){const le=i.sliceStream(H);if(ae&&le.push(null),H.previous=p,p&&(p.next=H),p=H,s.defineSkip(H.start),s.write(le),i.parser.lazy[H.start.line]){let B=s.events.length;for(;B--;)if(s.events[B][1].start.offset<f&&(!s.events[B][1].end||s.events[B][1].end.offset>f))return;const _=i.events.length;let K=_,ie,L;for(;K--;)if(i.events[K][0]==="exit"&&i.events[K][1].type==="chunkFlow"){if(ie){L=i.events[K][1].end;break}ie=!0}for(D(u),B=_;B<i.events.length;)i.events[B][1].end={...L},B++;Yt(i.events,K+1,0,i.events.slice(_)),i.events.length=B}}function D(H){let ae=r.length;for(;ae-- >H;){const le=r[ae];i.containerState=le[1],le[0].exit.call(i,n)}r.length=H}function F(){s.write([null]),p=void 0,s=void 0,i.containerState._closeFlow=void 0}}function ky(n,i,r){return Me(n,n.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ka(n){if(n===null||Ie(n)||Tl(n))return 1;if(fu(n))return 2}function pu(n,i,r){const u=[];let s=-1;for(;++s<n.length;){const p=n[s].resolveAll;p&&!u.includes(p)&&(i=p(i,r),u.push(p))}return i}const cs={name:"attention",resolveAll:wy,tokenize:Ey};function wy(n,i){let r=-1,u,s,p,f,d,m,h,b;for(;++r<n.length;)if(n[r][0]==="enter"&&n[r][1].type==="attentionSequence"&&n[r][1]._close){for(u=r;u--;)if(n[u][0]==="exit"&&n[u][1].type==="attentionSequence"&&n[u][1]._open&&i.sliceSerialize(n[u][1]).charCodeAt(0)===i.sliceSerialize(n[r][1]).charCodeAt(0)){if((n[u][1]._close||n[r][1]._open)&&(n[r][1].end.offset-n[r][1].start.offset)%3&&!((n[u][1].end.offset-n[u][1].start.offset+n[r][1].end.offset-n[r][1].start.offset)%3))continue;m=n[u][1].end.offset-n[u][1].start.offset>1&&n[r][1].end.offset-n[r][1].start.offset>1?2:1;const x={...n[u][1].end},v={...n[r][1].start};am(x,-m),am(v,m),f={type:m>1?"strongSequence":"emphasisSequence",start:x,end:{...n[u][1].end}},d={type:m>1?"strongSequence":"emphasisSequence",start:{...n[r][1].start},end:v},p={type:m>1?"strongText":"emphasisText",start:{...n[u][1].end},end:{...n[r][1].start}},s={type:m>1?"strong":"emphasis",start:{...f.start},end:{...d.end}},n[u][1].end={...f.start},n[r][1].start={...d.end},h=[],n[u][1].end.offset-n[u][1].start.offset&&(h=Pt(h,[["enter",n[u][1],i],["exit",n[u][1],i]])),h=Pt(h,[["enter",s,i],["enter",f,i],["exit",f,i],["enter",p,i]]),h=Pt(h,pu(i.parser.constructs.insideSpan.null,n.slice(u+1,r),i)),h=Pt(h,[["exit",p,i],["enter",d,i],["exit",d,i],["exit",s,i]]),n[r][1].end.offset-n[r][1].start.offset?(b=2,h=Pt(h,[["enter",n[r][1],i],["exit",n[r][1],i]])):b=0,Yt(n,u-1,r-u+3,h),r=u+h.length-b-2;break}}for(r=-1;++r<n.length;)n[r][1].type==="attentionSequence"&&(n[r][1].type="data");return n}function Ey(n,i){const r=this.parser.constructs.attentionMarkers.null,u=this.previous,s=ka(u);let p;return f;function f(m){return p=m,n.enter("attentionSequence"),d(m)}function d(m){if(m===p)return n.consume(m),d;const h=n.exit("attentionSequence"),b=ka(m),x=!b||b===2&&s||r.includes(m),v=!s||s===2&&b||r.includes(u);return h._open=!!(p===42?x:x&&(s||!v)),h._close=!!(p===42?v:v&&(b||!x)),i(m)}}function am(n,i){n.column+=i,n.offset+=i,n._bufferIndex+=i}const Cy={name:"autolink",tokenize:Ty};function Ty(n,i,r){let u=0;return s;function s(k){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(k),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),p}function p(k){return St(k)?(n.consume(k),f):k===64?r(k):h(k)}function f(k){return k===43||k===45||k===46||gt(k)?(u=1,d(k)):h(k)}function d(k){return k===58?(n.consume(k),u=0,m):(k===43||k===45||k===46||gt(k))&&u++<32?(n.consume(k),d):(u=0,h(k))}function m(k){return k===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(k),n.exit("autolinkMarker"),n.exit("autolink"),i):k===null||k===32||k===60||ru(k)?r(k):(n.consume(k),m)}function h(k){return k===64?(n.consume(k),b):my(k)?(n.consume(k),h):r(k)}function b(k){return gt(k)?x(k):r(k)}function x(k){return k===46?(n.consume(k),u=0,b):k===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(k),n.exit("autolinkMarker"),n.exit("autolink"),i):v(k)}function v(k){if((k===45||gt(k))&&u++<63){const j=k===45?v:x;return n.consume(k),j}return r(k)}}const Di={partial:!0,tokenize:zy};function zy(n,i,r){return u;function u(p){return Te(p)?Me(n,s,"linePrefix")(p):s(p)}function s(p){return p===null||pe(p)?i(p):r(p)}}const eg={continuation:{tokenize:Ay},exit:My,name:"blockQuote",tokenize:jy};function jy(n,i,r){const u=this;return s;function s(f){if(f===62){const d=u.containerState;return d.open||(n.enter("blockQuote",{_container:!0}),d.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(f),n.exit("blockQuoteMarker"),p}return r(f)}function p(f){return Te(f)?(n.enter("blockQuotePrefixWhitespace"),n.consume(f),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),i):(n.exit("blockQuotePrefix"),i(f))}}function Ay(n,i,r){const u=this;return s;function s(f){return Te(f)?Me(n,p,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):p(f)}function p(f){return n.attempt(eg,i,r)(f)}}function My(n){n.exit("blockQuote")}const tg={name:"characterEscape",tokenize:Dy};function Dy(n,i,r){return u;function u(p){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(p),n.exit("escapeMarker"),s}function s(p){return xy(p)?(n.enter("characterEscapeValue"),n.consume(p),n.exit("characterEscapeValue"),n.exit("characterEscape"),i):r(p)}}const ng={name:"characterReference",tokenize:Ny};function Ny(n,i,r){const u=this;let s=0,p,f;return d;function d(x){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(x),n.exit("characterReferenceMarker"),m}function m(x){return x===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(x),n.exit("characterReferenceMarkerNumeric"),h):(n.enter("characterReferenceValue"),p=31,f=gt,b(x))}function h(x){return x===88||x===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(x),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),p=6,f=gy,b):(n.enter("characterReferenceValue"),p=7,f=os,b(x))}function b(x){if(x===59&&s){const v=n.exit("characterReferenceValue");return f===gt&&!Es(u.sliceSerialize(v))?r(x):(n.enter("characterReferenceMarker"),n.consume(x),n.exit("characterReferenceMarker"),n.exit("characterReference"),i)}return f(x)&&s++<p?(n.consume(x),b):r(x)}}const im={partial:!0,tokenize:Oy},rm={concrete:!0,name:"codeFenced",tokenize:_y};function _y(n,i,r){const u=this,s={partial:!0,tokenize:le};let p=0,f=0,d;return m;function m(B){return h(B)}function h(B){const _=u.events[u.events.length-1];return p=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,d=B,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),b(B)}function b(B){return B===d?(f++,n.consume(B),b):f<3?r(B):(n.exit("codeFencedFenceSequence"),Te(B)?Me(n,x,"whitespace")(B):x(B))}function x(B){return B===null||pe(B)?(n.exit("codeFencedFence"),u.interrupt?i(B):n.check(im,Y,ae)(B)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===null||pe(B)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),x(B)):Te(B)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),Me(n,k,"whitespace")(B)):B===96&&B===d?r(B):(n.consume(B),v)}function k(B){return B===null||pe(B)?x(B):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),j(B))}function j(B){return B===null||pe(B)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),x(B)):B===96&&B===d?r(B):(n.consume(B),j)}function Y(B){return n.attempt(s,ae,I)(B)}function I(B){return n.enter("lineEnding"),n.consume(B),n.exit("lineEnding"),D}function D(B){return p>0&&Te(B)?Me(n,F,"linePrefix",p+1)(B):F(B)}function F(B){return B===null||pe(B)?n.check(im,Y,ae)(B):(n.enter("codeFlowValue"),H(B))}function H(B){return B===null||pe(B)?(n.exit("codeFlowValue"),F(B)):(n.consume(B),H)}function ae(B){return n.exit("codeFenced"),i(B)}function le(B,_,K){let ie=0;return L;function L(P){return B.enter("lineEnding"),B.consume(P),B.exit("lineEnding"),W}function W(P){return B.enter("codeFencedFence"),Te(P)?Me(B,te,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):te(P)}function te(P){return P===d?(B.enter("codeFencedFenceSequence"),Se(P)):K(P)}function Se(P){return P===d?(ie++,B.consume(P),Se):ie>=f?(B.exit("codeFencedFenceSequence"),Te(P)?Me(B,oe,"whitespace")(P):oe(P)):K(P)}function oe(P){return P===null||pe(P)?(B.exit("codeFencedFence"),_(P)):K(P)}}}function Oy(n,i,r){const u=this;return s;function s(f){return f===null?r(f):(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),p)}function p(f){return u.parser.lazy[u.now().line]?r(f):i(f)}}const Yc={name:"codeIndented",tokenize:Ry},Ly={partial:!0,tokenize:By};function Ry(n,i,r){const u=this;return s;function s(h){return n.enter("codeIndented"),Me(n,p,"linePrefix",5)(h)}function p(h){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(h):r(h)}function f(h){return h===null?m(h):pe(h)?n.attempt(Ly,f,m)(h):(n.enter("codeFlowValue"),d(h))}function d(h){return h===null||pe(h)?(n.exit("codeFlowValue"),f(h)):(n.consume(h),d)}function m(h){return n.exit("codeIndented"),i(h)}}function By(n,i,r){const u=this;return s;function s(f){return u.parser.lazy[u.now().line]?r(f):pe(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),s):Me(n,p,"linePrefix",5)(f)}function p(f){const d=u.events[u.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(f):pe(f)?s(f):r(f)}}const Uy={name:"codeText",previous:qy,resolve:Hy,tokenize:Yy};function Hy(n){let i=n.length-4,r=3,u,s;if((n[r][1].type==="lineEnding"||n[r][1].type==="space")&&(n[i][1].type==="lineEnding"||n[i][1].type==="space")){for(u=r;++u<i;)if(n[u][1].type==="codeTextData"){n[r][1].type="codeTextPadding",n[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(u=r-1,i++;++u<=i;)s===void 0?u!==i&&n[u][1].type!=="lineEnding"&&(s=u):(u===i||n[u][1].type==="lineEnding")&&(n[s][1].type="codeTextData",u!==s+2&&(n[s][1].end=n[u-1][1].end,n.splice(s+2,u-s-2),i-=u-s-2,u=s+2),s=void 0);return n}function qy(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Yy(n,i,r){let u=0,s,p;return f;function f(x){return n.enter("codeText"),n.enter("codeTextSequence"),d(x)}function d(x){return x===96?(n.consume(x),u++,d):(n.exit("codeTextSequence"),m(x))}function m(x){return x===null?r(x):x===32?(n.enter("space"),n.consume(x),n.exit("space"),m):x===96?(p=n.enter("codeTextSequence"),s=0,b(x)):pe(x)?(n.enter("lineEnding"),n.consume(x),n.exit("lineEnding"),m):(n.enter("codeTextData"),h(x))}function h(x){return x===null||x===32||x===96||pe(x)?(n.exit("codeTextData"),m(x)):(n.consume(x),h)}function b(x){return x===96?(n.consume(x),s++,b):s===u?(n.exit("codeTextSequence"),n.exit("codeText"),i(x)):(p.type="codeTextData",h(x))}}class Gy{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const u=r??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(i,u):i>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(i,r,u){const s=r||0;this.setCursor(Math.trunc(i));const p=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return u&&ki(this.left,u),p.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),ki(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),ki(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);ki(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);ki(this.left,r.reverse())}}}function ki(n,i){let r=0;if(i.length<1e4)n.push(...i);else for(;r<i.length;)n.push(...i.slice(r,r+1e4)),r+=1e4}function lg(n){const i={};let r=-1,u,s,p,f,d,m,h;const b=new Gy(n);for(;++r<b.length;){for(;r in i;)r=i[r];if(u=b.get(r),r&&u[1].type==="chunkFlow"&&b.get(r-1)[1].type==="listItemPrefix"&&(m=u[1]._tokenizer.events,p=0,p<m.length&&m[p][1].type==="lineEndingBlank"&&(p+=2),p<m.length&&m[p][1].type==="content"))for(;++p<m.length&&m[p][1].type!=="content";)m[p][1].type==="chunkText"&&(m[p][1]._isInFirstContentOfListItem=!0,p++);if(u[0]==="enter")u[1].contentType&&(Object.assign(i,Vy(b,r)),r=i[r],h=!0);else if(u[1]._container){for(p=r,s=void 0;p--;)if(f=b.get(p),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(s&&(b.get(s)[1].type="lineEndingBlank"),f[1].type="lineEnding",s=p);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;s&&(u[1].end={...b.get(s)[1].start},d=b.slice(s,r),d.unshift(u),b.splice(s,r-s+1,d))}}return Yt(n,0,Number.POSITIVE_INFINITY,b.slice(0)),!h}function Vy(n,i){const r=n.get(i)[1],u=n.get(i)[2];let s=i-1;const p=[];let f=r._tokenizer;f||(f=u.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const d=f.events,m=[],h={};let b,x,v=-1,k=r,j=0,Y=0;const I=[Y];for(;k;){for(;n.get(++s)[1]!==k;);p.push(s),k._tokenizer||(b=u.sliceStream(k),k.next||b.push(null),x&&f.defineSkip(k.start),k._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),k._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),x=k,k=k.next}for(k=r;++v<d.length;)d[v][0]==="exit"&&d[v-1][0]==="enter"&&d[v][1].type===d[v-1][1].type&&d[v][1].start.line!==d[v][1].end.line&&(Y=v+1,I.push(Y),k._tokenizer=void 0,k.previous=void 0,k=k.next);for(f.events=[],k?(k._tokenizer=void 0,k.previous=void 0):I.pop(),v=I.length;v--;){const D=d.slice(I[v],I[v+1]),F=p.pop();m.push([F,F+D.length-1]),n.splice(F,2,D)}for(m.reverse(),v=-1;++v<m.length;)h[j+m[v][0]]=j+m[v][1],j+=m[v][1]-m[v][0]-1;return h}const Xy={resolve:Qy,tokenize:Zy},Iy={partial:!0,tokenize:Fy};function Qy(n){return lg(n),n}function Zy(n,i){let r;return u;function u(d){return n.enter("content"),r=n.enter("chunkContent",{contentType:"content"}),s(d)}function s(d){return d===null?p(d):pe(d)?n.check(Iy,f,p)(d):(n.consume(d),s)}function p(d){return n.exit("chunkContent"),n.exit("content"),i(d)}function f(d){return n.consume(d),n.exit("chunkContent"),r.next=n.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,s}}function Fy(n,i,r){const u=this;return s;function s(f){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),Me(n,p,"linePrefix")}function p(f){if(f===null||pe(f))return r(f);const d=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(f):n.interrupt(u.parser.constructs.flow,r,i)(f)}}function ag(n,i,r,u,s,p,f,d,m){const h=m||Number.POSITIVE_INFINITY;let b=0;return x;function x(D){return D===60?(n.enter(u),n.enter(s),n.enter(p),n.consume(D),n.exit(p),v):D===null||D===32||D===41||ru(D)?r(D):(n.enter(u),n.enter(f),n.enter(d),n.enter("chunkString",{contentType:"string"}),Y(D))}function v(D){return D===62?(n.enter(p),n.consume(D),n.exit(p),n.exit(s),n.exit(u),i):(n.enter(d),n.enter("chunkString",{contentType:"string"}),k(D))}function k(D){return D===62?(n.exit("chunkString"),n.exit(d),v(D)):D===null||D===60||pe(D)?r(D):(n.consume(D),D===92?j:k)}function j(D){return D===60||D===62||D===92?(n.consume(D),k):k(D)}function Y(D){return!b&&(D===null||D===41||Ie(D))?(n.exit("chunkString"),n.exit(d),n.exit(f),n.exit(u),i(D)):b<h&&D===40?(n.consume(D),b++,Y):D===41?(n.consume(D),b--,Y):D===null||D===32||D===40||ru(D)?r(D):(n.consume(D),D===92?I:Y)}function I(D){return D===40||D===41||D===92?(n.consume(D),Y):Y(D)}}function ig(n,i,r,u,s,p){const f=this;let d=0,m;return h;function h(k){return n.enter(u),n.enter(s),n.consume(k),n.exit(s),n.enter(p),b}function b(k){return d>999||k===null||k===91||k===93&&!m||k===94&&!d&&"_hiddenFootnoteSupport"in f.parser.constructs?r(k):k===93?(n.exit(p),n.enter(s),n.consume(k),n.exit(s),n.exit(u),i):pe(k)?(n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),b):(n.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||k===91||k===93||pe(k)||d++>999?(n.exit("chunkString"),b(k)):(n.consume(k),m||(m=!Te(k)),k===92?v:x)}function v(k){return k===91||k===92||k===93?(n.consume(k),d++,x):x(k)}}function rg(n,i,r,u,s,p){let f;return d;function d(v){return v===34||v===39||v===40?(n.enter(u),n.enter(s),n.consume(v),n.exit(s),f=v===40?41:v,m):r(v)}function m(v){return v===f?(n.enter(s),n.consume(v),n.exit(s),n.exit(u),i):(n.enter(p),h(v))}function h(v){return v===f?(n.exit(p),m(f)):v===null?r(v):pe(v)?(n.enter("lineEnding"),n.consume(v),n.exit("lineEnding"),Me(n,h,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),b(v))}function b(v){return v===f||v===null||pe(v)?(n.exit("chunkString"),h(v)):(n.consume(v),v===92?x:b)}function x(v){return v===f||v===92?(n.consume(v),b):b(v)}}function Ti(n,i){let r;return u;function u(s){return pe(s)?(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),r=!0,u):Te(s)?Me(n,u,r?"linePrefix":"lineSuffix")(s):i(s)}}const Ky={name:"definition",tokenize:$y},Jy={partial:!0,tokenize:Wy};function $y(n,i,r){const u=this;let s;return p;function p(k){return n.enter("definition"),f(k)}function f(k){return ig.call(u,n,d,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(k)}function d(k){return s=an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),k===58?(n.enter("definitionMarker"),n.consume(k),n.exit("definitionMarker"),m):r(k)}function m(k){return Ie(k)?Ti(n,h)(k):h(k)}function h(k){return ag(n,b,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(k)}function b(k){return n.attempt(Jy,x,x)(k)}function x(k){return Te(k)?Me(n,v,"whitespace")(k):v(k)}function v(k){return k===null||pe(k)?(n.exit("definition"),u.parser.defined.push(s),i(k)):r(k)}}function Wy(n,i,r){return u;function u(d){return Ie(d)?Ti(n,s)(d):r(d)}function s(d){return rg(n,p,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function p(d){return Te(d)?Me(n,f,"whitespace")(d):f(d)}function f(d){return d===null||pe(d)?i(d):r(d)}}const Py={name:"hardBreakEscape",tokenize:eb};function eb(n,i,r){return u;function u(p){return n.enter("hardBreakEscape"),n.consume(p),s}function s(p){return pe(p)?(n.exit("hardBreakEscape"),i(p)):r(p)}}const tb={name:"headingAtx",resolve:nb,tokenize:lb};function nb(n,i){let r=n.length-2,u=3,s,p;return n[u][1].type==="whitespace"&&(u+=2),r-2>u&&n[r][1].type==="whitespace"&&(r-=2),n[r][1].type==="atxHeadingSequence"&&(u===r-1||r-4>u&&n[r-2][1].type==="whitespace")&&(r-=u+1===r?2:4),r>u&&(s={type:"atxHeadingText",start:n[u][1].start,end:n[r][1].end},p={type:"chunkText",start:n[u][1].start,end:n[r][1].end,contentType:"text"},Yt(n,u,r-u+1,[["enter",s,i],["enter",p,i],["exit",p,i],["exit",s,i]])),n}function lb(n,i,r){let u=0;return s;function s(b){return n.enter("atxHeading"),p(b)}function p(b){return n.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(n.consume(b),f):b===null||Ie(b)?(n.exit("atxHeadingSequence"),d(b)):r(b)}function d(b){return b===35?(n.enter("atxHeadingSequence"),m(b)):b===null||pe(b)?(n.exit("atxHeading"),i(b)):Te(b)?Me(n,d,"whitespace")(b):(n.enter("atxHeadingText"),h(b))}function m(b){return b===35?(n.consume(b),m):(n.exit("atxHeadingSequence"),d(b))}function h(b){return b===null||b===35||Ie(b)?(n.exit("atxHeadingText"),d(b)):(n.consume(b),h)}}const ab=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],um=["pre","script","style","textarea"],ib={concrete:!0,name:"htmlFlow",resolveTo:ob,tokenize:cb},rb={partial:!0,tokenize:fb},ub={partial:!0,tokenize:sb};function ob(n){let i=n.length;for(;i--&&!(n[i][0]==="enter"&&n[i][1].type==="htmlFlow"););return i>1&&n[i-2][1].type==="linePrefix"&&(n[i][1].start=n[i-2][1].start,n[i+1][1].start=n[i-2][1].start,n.splice(i-2,2)),n}function cb(n,i,r){const u=this;let s,p,f,d,m;return h;function h(w){return b(w)}function b(w){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(w),x}function x(w){return w===33?(n.consume(w),v):w===47?(n.consume(w),p=!0,Y):w===63?(n.consume(w),s=3,u.interrupt?i:E):St(w)?(n.consume(w),f=String.fromCharCode(w),I):r(w)}function v(w){return w===45?(n.consume(w),s=2,k):w===91?(n.consume(w),s=5,d=0,j):St(w)?(n.consume(w),s=4,u.interrupt?i:E):r(w)}function k(w){return w===45?(n.consume(w),u.interrupt?i:E):r(w)}function j(w){const $="CDATA[";return w===$.charCodeAt(d++)?(n.consume(w),d===$.length?u.interrupt?i:te:j):r(w)}function Y(w){return St(w)?(n.consume(w),f=String.fromCharCode(w),I):r(w)}function I(w){if(w===null||w===47||w===62||Ie(w)){const $=w===47,re=f.toLowerCase();return!$&&!p&&um.includes(re)?(s=1,u.interrupt?i(w):te(w)):ab.includes(f.toLowerCase())?(s=6,$?(n.consume(w),D):u.interrupt?i(w):te(w)):(s=7,u.interrupt&&!u.parser.lazy[u.now().line]?r(w):p?F(w):H(w))}return w===45||gt(w)?(n.consume(w),f+=String.fromCharCode(w),I):r(w)}function D(w){return w===62?(n.consume(w),u.interrupt?i:te):r(w)}function F(w){return Te(w)?(n.consume(w),F):L(w)}function H(w){return w===47?(n.consume(w),L):w===58||w===95||St(w)?(n.consume(w),ae):Te(w)?(n.consume(w),H):L(w)}function ae(w){return w===45||w===46||w===58||w===95||gt(w)?(n.consume(w),ae):le(w)}function le(w){return w===61?(n.consume(w),B):Te(w)?(n.consume(w),le):H(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(n.consume(w),m=w,_):Te(w)?(n.consume(w),B):K(w)}function _(w){return w===m?(n.consume(w),m=null,ie):w===null||pe(w)?r(w):(n.consume(w),_)}function K(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Ie(w)?le(w):(n.consume(w),K)}function ie(w){return w===47||w===62||Te(w)?H(w):r(w)}function L(w){return w===62?(n.consume(w),W):r(w)}function W(w){return w===null||pe(w)?te(w):Te(w)?(n.consume(w),W):r(w)}function te(w){return w===45&&s===2?(n.consume(w),A):w===60&&s===1?(n.consume(w),Z):w===62&&s===4?(n.consume(w),C):w===63&&s===3?(n.consume(w),E):w===93&&s===5?(n.consume(w),ge):pe(w)&&(s===6||s===7)?(n.exit("htmlFlowData"),n.check(rb,q,Se)(w)):w===null||pe(w)?(n.exit("htmlFlowData"),Se(w)):(n.consume(w),te)}function Se(w){return n.check(ub,oe,q)(w)}function oe(w){return n.enter("lineEnding"),n.consume(w),n.exit("lineEnding"),P}function P(w){return w===null||pe(w)?Se(w):(n.enter("htmlFlowData"),te(w))}function A(w){return w===45?(n.consume(w),E):te(w)}function Z(w){return w===47?(n.consume(w),f="",ne):te(w)}function ne(w){if(w===62){const $=f.toLowerCase();return um.includes($)?(n.consume(w),C):te(w)}return St(w)&&f.length<8?(n.consume(w),f+=String.fromCharCode(w),ne):te(w)}function ge(w){return w===93?(n.consume(w),E):te(w)}function E(w){return w===62?(n.consume(w),C):w===45&&s===2?(n.consume(w),E):te(w)}function C(w){return w===null||pe(w)?(n.exit("htmlFlowData"),q(w)):(n.consume(w),C)}function q(w){return n.exit("htmlFlow"),i(w)}}function sb(n,i,r){const u=this;return s;function s(f){return pe(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),p):r(f)}function p(f){return u.parser.lazy[u.now().line]?r(f):i(f)}}function fb(n,i,r){return u;function u(s){return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),n.attempt(Di,i,r)}}const pb={name:"htmlText",tokenize:db};function db(n,i,r){const u=this;let s,p,f;return d;function d(E){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(E),m}function m(E){return E===33?(n.consume(E),h):E===47?(n.consume(E),le):E===63?(n.consume(E),H):St(E)?(n.consume(E),K):r(E)}function h(E){return E===45?(n.consume(E),b):E===91?(n.consume(E),p=0,j):St(E)?(n.consume(E),F):r(E)}function b(E){return E===45?(n.consume(E),k):r(E)}function x(E){return E===null?r(E):E===45?(n.consume(E),v):pe(E)?(f=x,Z(E)):(n.consume(E),x)}function v(E){return E===45?(n.consume(E),k):x(E)}function k(E){return E===62?A(E):E===45?v(E):x(E)}function j(E){const C="CDATA[";return E===C.charCodeAt(p++)?(n.consume(E),p===C.length?Y:j):r(E)}function Y(E){return E===null?r(E):E===93?(n.consume(E),I):pe(E)?(f=Y,Z(E)):(n.consume(E),Y)}function I(E){return E===93?(n.consume(E),D):Y(E)}function D(E){return E===62?A(E):E===93?(n.consume(E),D):Y(E)}function F(E){return E===null||E===62?A(E):pe(E)?(f=F,Z(E)):(n.consume(E),F)}function H(E){return E===null?r(E):E===63?(n.consume(E),ae):pe(E)?(f=H,Z(E)):(n.consume(E),H)}function ae(E){return E===62?A(E):H(E)}function le(E){return St(E)?(n.consume(E),B):r(E)}function B(E){return E===45||gt(E)?(n.consume(E),B):_(E)}function _(E){return pe(E)?(f=_,Z(E)):Te(E)?(n.consume(E),_):A(E)}function K(E){return E===45||gt(E)?(n.consume(E),K):E===47||E===62||Ie(E)?ie(E):r(E)}function ie(E){return E===47?(n.consume(E),A):E===58||E===95||St(E)?(n.consume(E),L):pe(E)?(f=ie,Z(E)):Te(E)?(n.consume(E),ie):A(E)}function L(E){return E===45||E===46||E===58||E===95||gt(E)?(n.consume(E),L):W(E)}function W(E){return E===61?(n.consume(E),te):pe(E)?(f=W,Z(E)):Te(E)?(n.consume(E),W):ie(E)}function te(E){return E===null||E===60||E===61||E===62||E===96?r(E):E===34||E===39?(n.consume(E),s=E,Se):pe(E)?(f=te,Z(E)):Te(E)?(n.consume(E),te):(n.consume(E),oe)}function Se(E){return E===s?(n.consume(E),s=void 0,P):E===null?r(E):pe(E)?(f=Se,Z(E)):(n.consume(E),Se)}function oe(E){return E===null||E===34||E===39||E===60||E===61||E===96?r(E):E===47||E===62||Ie(E)?ie(E):(n.consume(E),oe)}function P(E){return E===47||E===62||Ie(E)?ie(E):r(E)}function A(E){return E===62?(n.consume(E),n.exit("htmlTextData"),n.exit("htmlText"),i):r(E)}function Z(E){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(E),n.exit("lineEnding"),ne}function ne(E){return Te(E)?Me(n,ge,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):ge(E)}function ge(E){return n.enter("htmlTextData"),f(E)}}const Cs={name:"labelEnd",resolveAll:xb,resolveTo:yb,tokenize:bb},hb={tokenize:vb},mb={tokenize:Sb},gb={tokenize:kb};function xb(n){let i=-1;const r=[];for(;++i<n.length;){const u=n[i][1];if(r.push(n[i]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const s=u.type==="labelImage"?4:2;u.type="data",i+=s}}return n.length!==r.length&&Yt(n,0,n.length,r),n}function yb(n,i){let r=n.length,u=0,s,p,f,d;for(;r--;)if(s=n[r][1],p){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;n[r][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(f){if(n[r][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(p=r,s.type!=="labelLink")){u=2;break}}else s.type==="labelEnd"&&(f=r);const m={type:n[p][1].type==="labelLink"?"link":"image",start:{...n[p][1].start},end:{...n[n.length-1][1].end}},h={type:"label",start:{...n[p][1].start},end:{...n[f][1].end}},b={type:"labelText",start:{...n[p+u+2][1].end},end:{...n[f-2][1].start}};return d=[["enter",m,i],["enter",h,i]],d=Pt(d,n.slice(p+1,p+u+3)),d=Pt(d,[["enter",b,i]]),d=Pt(d,pu(i.parser.constructs.insideSpan.null,n.slice(p+u+4,f-3),i)),d=Pt(d,[["exit",b,i],n[f-2],n[f-1],["exit",h,i]]),d=Pt(d,n.slice(f+1)),d=Pt(d,[["exit",m,i]]),Yt(n,p,n.length,d),n}function bb(n,i,r){const u=this;let s=u.events.length,p,f;for(;s--;)if((u.events[s][1].type==="labelImage"||u.events[s][1].type==="labelLink")&&!u.events[s][1]._balanced){p=u.events[s][1];break}return d;function d(v){return p?p._inactive?x(v):(f=u.parser.defined.includes(an(u.sliceSerialize({start:p.end,end:u.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(v),n.exit("labelMarker"),n.exit("labelEnd"),m):r(v)}function m(v){return v===40?n.attempt(hb,b,f?b:x)(v):v===91?n.attempt(mb,b,f?h:x)(v):f?b(v):x(v)}function h(v){return n.attempt(gb,b,x)(v)}function b(v){return i(v)}function x(v){return p._balanced=!0,r(v)}}function vb(n,i,r){return u;function u(x){return n.enter("resource"),n.enter("resourceMarker"),n.consume(x),n.exit("resourceMarker"),s}function s(x){return Ie(x)?Ti(n,p)(x):p(x)}function p(x){return x===41?b(x):ag(n,f,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(x)}function f(x){return Ie(x)?Ti(n,m)(x):b(x)}function d(x){return r(x)}function m(x){return x===34||x===39||x===40?rg(n,h,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(x):b(x)}function h(x){return Ie(x)?Ti(n,b)(x):b(x)}function b(x){return x===41?(n.enter("resourceMarker"),n.consume(x),n.exit("resourceMarker"),n.exit("resource"),i):r(x)}}function Sb(n,i,r){const u=this;return s;function s(d){return ig.call(u,n,p,f,"reference","referenceMarker","referenceString")(d)}function p(d){return u.parser.defined.includes(an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?i(d):r(d)}function f(d){return r(d)}}function kb(n,i,r){return u;function u(p){return n.enter("reference"),n.enter("referenceMarker"),n.consume(p),n.exit("referenceMarker"),s}function s(p){return p===93?(n.enter("referenceMarker"),n.consume(p),n.exit("referenceMarker"),n.exit("reference"),i):r(p)}}const wb={name:"labelStartImage",resolveAll:Cs.resolveAll,tokenize:Eb};function Eb(n,i,r){const u=this;return s;function s(d){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(d),n.exit("labelImageMarker"),p}function p(d){return d===91?(n.enter("labelMarker"),n.consume(d),n.exit("labelMarker"),n.exit("labelImage"),f):r(d)}function f(d){return d===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(d):i(d)}}const Cb={name:"labelStartLink",resolveAll:Cs.resolveAll,tokenize:Tb};function Tb(n,i,r){const u=this;return s;function s(f){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(f),n.exit("labelMarker"),n.exit("labelLink"),p}function p(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?r(f):i(f)}}const Gc={name:"lineEnding",tokenize:zb};function zb(n,i){return r;function r(u){return n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),Me(n,i,"linePrefix")}}const au={name:"thematicBreak",tokenize:jb};function jb(n,i,r){let u=0,s;return p;function p(h){return n.enter("thematicBreak"),f(h)}function f(h){return s=h,d(h)}function d(h){return h===s?(n.enter("thematicBreakSequence"),m(h)):u>=3&&(h===null||pe(h))?(n.exit("thematicBreak"),i(h)):r(h)}function m(h){return h===s?(n.consume(h),u++,m):(n.exit("thematicBreakSequence"),Te(h)?Me(n,d,"whitespace")(h):d(h))}}const Mt={continuation:{tokenize:Nb},exit:Ob,name:"list",tokenize:Db},Ab={partial:!0,tokenize:Lb},Mb={partial:!0,tokenize:_b};function Db(n,i,r){const u=this,s=u.events[u.events.length-1];let p=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,f=0;return d;function d(k){const j=u.containerState.type||(k===42||k===43||k===45?"listUnordered":"listOrdered");if(j==="listUnordered"?!u.containerState.marker||k===u.containerState.marker:os(k)){if(u.containerState.type||(u.containerState.type=j,n.enter(j,{_container:!0})),j==="listUnordered")return n.enter("listItemPrefix"),k===42||k===45?n.check(au,r,h)(k):h(k);if(!u.interrupt||k===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),m(k)}return r(k)}function m(k){return os(k)&&++f<10?(n.consume(k),m):(!u.interrupt||f<2)&&(u.containerState.marker?k===u.containerState.marker:k===41||k===46)?(n.exit("listItemValue"),h(k)):r(k)}function h(k){return n.enter("listItemMarker"),n.consume(k),n.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||k,n.check(Di,u.interrupt?r:b,n.attempt(Ab,v,x))}function b(k){return u.containerState.initialBlankLine=!0,p++,v(k)}function x(k){return Te(k)?(n.enter("listItemPrefixWhitespace"),n.consume(k),n.exit("listItemPrefixWhitespace"),v):r(k)}function v(k){return u.containerState.size=p+u.sliceSerialize(n.exit("listItemPrefix"),!0).length,i(k)}}function Nb(n,i,r){const u=this;return u.containerState._closeFlow=void 0,n.check(Di,s,p);function s(d){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Me(n,i,"listItemIndent",u.containerState.size+1)(d)}function p(d){return u.containerState.furtherBlankLines||!Te(d)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(d)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,n.attempt(Mb,i,f)(d))}function f(d){return u.containerState._closeFlow=!0,u.interrupt=void 0,Me(n,n.attempt(Mt,i,r),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function _b(n,i,r){const u=this;return Me(n,s,"listItemIndent",u.containerState.size+1);function s(p){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?i(p):r(p)}}function Ob(n){n.exit(this.containerState.type)}function Lb(n,i,r){const u=this;return Me(n,s,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(p){const f=u.events[u.events.length-1];return!Te(p)&&f&&f[1].type==="listItemPrefixWhitespace"?i(p):r(p)}}const om={name:"setextUnderline",resolveTo:Rb,tokenize:Bb};function Rb(n,i){let r=n.length,u,s,p;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){u=r;break}n[r][1].type==="paragraph"&&(s=r)}else n[r][1].type==="content"&&n.splice(r,1),!p&&n[r][1].type==="definition"&&(p=r);const f={type:"setextHeading",start:{...n[u][1].start},end:{...n[n.length-1][1].end}};return n[s][1].type="setextHeadingText",p?(n.splice(s,0,["enter",f,i]),n.splice(p+1,0,["exit",n[u][1],i]),n[u][1].end={...n[p][1].end}):n[u][1]=f,n.push(["exit",f,i]),n}function Bb(n,i,r){const u=this;let s;return p;function p(h){let b=u.events.length,x;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){x=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||x)?(n.enter("setextHeadingLine"),s=h,f(h)):r(h)}function f(h){return n.enter("setextHeadingLineSequence"),d(h)}function d(h){return h===s?(n.consume(h),d):(n.exit("setextHeadingLineSequence"),Te(h)?Me(n,m,"lineSuffix")(h):m(h))}function m(h){return h===null||pe(h)?(n.exit("setextHeadingLine"),i(h)):r(h)}}const Ub={tokenize:Hb};function Hb(n){const i=this,r=n.attempt(Di,u,n.attempt(this.parser.constructs.flowInitial,s,Me(n,n.attempt(this.parser.constructs.flow,s,n.attempt(Xy,s)),"linePrefix")));return r;function u(p){if(p===null){n.consume(p);return}return n.enter("lineEndingBlank"),n.consume(p),n.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function s(p){if(p===null){n.consume(p);return}return n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),i.currentConstruct=void 0,r}}const qb={resolveAll:og()},Yb=ug("string"),Gb=ug("text");function ug(n){return{resolveAll:og(n==="text"?Vb:void 0),tokenize:i};function i(r){const u=this,s=this.parser.constructs[n],p=r.attempt(s,f,d);return f;function f(b){return h(b)?p(b):d(b)}function d(b){if(b===null){r.consume(b);return}return r.enter("data"),r.consume(b),m}function m(b){return h(b)?(r.exit("data"),p(b)):(r.consume(b),m)}function h(b){if(b===null)return!0;const x=s[b];let v=-1;if(x)for(;++v<x.length;){const k=x[v];if(!k.previous||k.previous.call(u,u.previous))return!0}return!1}}}function og(n){return i;function i(r,u){let s=-1,p;for(;++s<=r.length;)p===void 0?r[s]&&r[s][1].type==="data"&&(p=s,s++):(!r[s]||r[s][1].type!=="data")&&(s!==p+2&&(r[p][1].end=r[s-1][1].end,r.splice(p+2,s-p-2),s=p+2),p=void 0);return n?n(r,u):r}}function Vb(n,i){let r=0;for(;++r<=n.length;)if((r===n.length||n[r][1].type==="lineEnding")&&n[r-1][1].type==="data"){const u=n[r-1][1],s=i.sliceStream(u);let p=s.length,f=-1,d=0,m;for(;p--;){const h=s[p];if(typeof h=="string"){for(f=h.length;h.charCodeAt(f-1)===32;)d++,f--;if(f)break;f=-1}else if(h===-2)m=!0,d++;else if(h!==-1){p++;break}}if(i._contentTypeTextTrailing&&r===n.length&&(d=0),d){const h={type:r===n.length||m||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:p?f:u.start._bufferIndex+f,_index:u.start._index+p,line:u.end.line,column:u.end.column-d,offset:u.end.offset-d},end:{...u.end}};u.end={...h.start},u.start.offset===u.end.offset?Object.assign(u,h):(n.splice(r,0,["enter",h,i],["exit",h,i]),r+=2)}r++}return n}const Xb={42:Mt,43:Mt,45:Mt,48:Mt,49:Mt,50:Mt,51:Mt,52:Mt,53:Mt,54:Mt,55:Mt,56:Mt,57:Mt,62:eg},Ib={91:Ky},Qb={[-2]:Yc,[-1]:Yc,32:Yc},Zb={35:tb,42:au,45:[om,au],60:ib,61:om,95:au,96:rm,126:rm},Fb={38:ng,92:tg},Kb={[-5]:Gc,[-4]:Gc,[-3]:Gc,33:wb,38:ng,42:cs,60:[Cy,pb],91:Cb,92:[Py,tg],93:Cs,95:cs,96:Uy},Jb={null:[cs,qb]},$b={null:[42,95]},Wb={null:[]},Pb=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$b,contentInitial:Ib,disable:Wb,document:Xb,flow:Zb,flowInitial:Qb,insideSpan:Jb,string:Fb,text:Kb},Symbol.toStringTag,{value:"Module"}));function ev(n,i,r){let u={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const s={},p=[];let f=[],d=[];const m={attempt:_(le),check:_(B),consume:F,enter:H,exit:ae,interrupt:_(B,{interrupt:!0})},h={code:null,containerState:{},defineSkip:Y,events:[],now:j,parser:n,previous:null,sliceSerialize:v,sliceStream:k,write:x};let b=i.tokenize.call(h,m);return i.resolveAll&&p.push(i),h;function x(W){return f=Pt(f,W),I(),f[f.length-1]!==null?[]:(K(i,0),h.events=pu(p,h.events,h),h.events)}function v(W,te){return nv(k(W),te)}function k(W){return tv(f,W)}function j(){const{_bufferIndex:W,_index:te,line:Se,column:oe,offset:P}=u;return{_bufferIndex:W,_index:te,line:Se,column:oe,offset:P}}function Y(W){s[W.line]=W.column,L()}function I(){let W;for(;u._index<f.length;){const te=f[u._index];if(typeof te=="string")for(W=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===W&&u._bufferIndex<te.length;)D(te.charCodeAt(u._bufferIndex));else D(te)}}function D(W){b=b(W)}function F(W){pe(W)?(u.line++,u.column=1,u.offset+=W===-3?2:1,L()):W!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),h.previous=W}function H(W,te){const Se=te||{};return Se.type=W,Se.start=j(),h.events.push(["enter",Se,h]),d.push(Se),Se}function ae(W){const te=d.pop();return te.end=j(),h.events.push(["exit",te,h]),te}function le(W,te){K(W,te.from)}function B(W,te){te.restore()}function _(W,te){return Se;function Se(oe,P,A){let Z,ne,ge,E;return Array.isArray(oe)?q(oe):"tokenize"in oe?q([oe]):C(oe);function C(se){return ke;function ke(Ye){const Be=Ye!==null&&se[Ye],Gt=Ye!==null&&se.null,pn=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Gt)?Gt:Gt?[Gt]:[]];return q(pn)(Ye)}}function q(se){return Z=se,ne=0,se.length===0?A:w(se[ne])}function w(se){return ke;function ke(Ye){return E=ie(),ge=se,se.partial||(h.currentConstruct=se),se.name&&h.parser.constructs.disable.null.includes(se.name)?re():se.tokenize.call(te?Object.assign(Object.create(h),te):h,m,$,re)(Ye)}}function $(se){return W(ge,E),P}function re(se){return E.restore(),++ne<Z.length?w(Z[ne]):A}}}function K(W,te){W.resolveAll&&!p.includes(W)&&p.push(W),W.resolve&&Yt(h.events,te,h.events.length-te,W.resolve(h.events.slice(te),h)),W.resolveTo&&(h.events=W.resolveTo(h.events,h))}function ie(){const W=j(),te=h.previous,Se=h.currentConstruct,oe=h.events.length,P=Array.from(d);return{from:oe,restore:A};function A(){u=W,h.previous=te,h.currentConstruct=Se,h.events.length=oe,d=P,L()}}function L(){u.line in s&&u.column<2&&(u.column=s[u.line],u.offset+=s[u.line]-1)}}function tv(n,i){const r=i.start._index,u=i.start._bufferIndex,s=i.end._index,p=i.end._bufferIndex;let f;if(r===s)f=[n[r].slice(u,p)];else{if(f=n.slice(r,s),u>-1){const d=f[0];typeof d=="string"?f[0]=d.slice(u):f.shift()}p>0&&f.push(n[s].slice(0,p))}return f}function nv(n,i){let r=-1;const u=[];let s;for(;++r<n.length;){const p=n[r];let f;if(typeof p=="string")f=p;else switch(p){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=i?" ":"	";break}case-1:{if(!i&&s)continue;f=" ";break}default:f=String.fromCharCode(p)}s=p===-2,u.push(f)}return u.join("")}function lv(n){const u={constructs:Wm([Pb,...(n||{}).extensions||[]]),content:s(yy),defined:[],document:s(vy),flow:s(Ub),lazy:{},string:s(Yb),text:s(Gb)};return u;function s(p){return f;function f(d){return ev(u,p,d)}}}function av(n){for(;!lg(n););return n}const cm=/[\0\t\n\r]/g;function iv(){let n=1,i="",r=!0,u;return s;function s(p,f,d){const m=[];let h,b,x,v,k;for(p=i+(typeof p=="string"?p.toString():new TextDecoder(f||void 0).decode(p)),x=0,i="",r&&(p.charCodeAt(0)===65279&&x++,r=void 0);x<p.length;){if(cm.lastIndex=x,h=cm.exec(p),v=h&&h.index!==void 0?h.index:p.length,k=p.charCodeAt(v),!h){i=p.slice(x);break}if(k===10&&x===v&&u)m.push(-3),u=void 0;else switch(u&&(m.push(-5),u=void 0),x<v&&(m.push(p.slice(x,v)),n+=v-x),k){case 0:{m.push(65533),n++;break}case 9:{for(b=Math.ceil(n/4)*4,m.push(-2);n++<b;)m.push(-1);break}case 10:{m.push(-4),n=1;break}default:u=!0,n=1}x=v+1}return d&&(u&&m.push(-5),i&&m.push(i),m.push(null)),m}}const rv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function uv(n){return n.replace(rv,ov)}function ov(n,i,r){if(i)return i;if(r.charCodeAt(0)===35){const s=r.charCodeAt(1),p=s===120||s===88;return Pm(r.slice(p?2:1),p?16:10)}return Es(r)||n}const cg={}.hasOwnProperty;function cv(n,i,r){return i&&typeof i=="object"&&(r=i,i=void 0),sv(r)(av(lv(r).document().write(iv()(n,i,!0))))}function sv(n){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:p(Ml),autolinkProtocol:ie,autolinkEmail:ie,atxHeading:p(jl),blockQuote:p(Gt),characterEscape:ie,characterReference:ie,codeFenced:p(pn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:p(pn,f),codeText:p(Ca,f),codeTextData:ie,data:ie,codeFlowValue:ie,definition:p(_i),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:p(dn),hardBreakEscape:p(Al),hardBreakTrailing:p(Al),htmlFlow:p(Oi,f),htmlFlowData:ie,htmlText:p(Oi,f),htmlTextData:ie,image:p(Li),label:f,link:p(Ml),listItem:p(Ta),listItemValue:v,listOrdered:p(Dl,x),listUnordered:p(Dl),paragraph:p(gu),reference:w,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:p(jl),strong:p(xu),thematicBreak:p(yu)},exit:{atxHeading:m(),atxHeadingSequence:le,autolink:m(),autolinkEmail:Be,autolinkProtocol:Ye,blockQuote:m(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:re,characterReferenceMarkerNumeric:re,characterReferenceValue:se,characterReference:ke,codeFenced:m(I),codeFencedFence:Y,codeFencedFenceInfo:k,codeFencedFenceMeta:j,codeFlowValue:L,codeIndented:m(D),codeText:m(P),codeTextData:L,data:L,definition:m(),definitionDestinationString:ae,definitionLabelString:F,definitionTitleString:H,emphasis:m(),hardBreakEscape:m(te),hardBreakTrailing:m(te),htmlFlow:m(Se),htmlFlowData:L,htmlText:m(oe),htmlTextData:L,image:m(Z),label:ge,labelText:ne,lineEnding:W,link:m(A),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:$,resourceDestinationString:E,resourceTitleString:C,resource:q,setextHeading:m(K),setextHeadingLineSequence:_,setextHeadingText:B,strong:m(),thematicBreak:m()}};sg(i,(n||{}).mdastExtensions||[]);const r={};return u;function u(V){let ee={type:"root",children:[]};const he={stack:[ee],tokenStack:[],config:i,enter:d,exit:h,buffer:f,resume:b,data:r},we=[];let Oe=-1;for(;++Oe<V.length;)if(V[Oe][1].type==="listOrdered"||V[Oe][1].type==="listUnordered")if(V[Oe][0]==="enter")we.push(Oe);else{const Nt=we.pop();Oe=s(V,Nt,Oe)}for(Oe=-1;++Oe<V.length;){const Nt=i[V[Oe][0]];cg.call(Nt,V[Oe][1].type)&&Nt[V[Oe][1].type].call(Object.assign({sliceSerialize:V[Oe][2].sliceSerialize},he),V[Oe][1])}if(he.tokenStack.length>0){const Nt=he.tokenStack[he.tokenStack.length-1];(Nt[1]||sm).call(he,void 0,Nt[0])}for(ee.position={start:il(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:il(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<i.transforms.length;)ee=i.transforms[Oe](ee)||ee;return ee}function s(V,ee,he){let we=ee-1,Oe=-1,Nt=!1,hn,bt,it,kt;for(;++we<=he;){const Ge=V[we];switch(Ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ge[0]==="enter"?Oe++:Oe--,kt=void 0;break}case"lineEndingBlank":{Ge[0]==="enter"&&(hn&&!kt&&!Oe&&!it&&(it=we),kt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kt=void 0}if(!Oe&&Ge[0]==="enter"&&Ge[1].type==="listItemPrefix"||Oe===-1&&Ge[0]==="exit"&&(Ge[1].type==="listUnordered"||Ge[1].type==="listOrdered")){if(hn){let On=we;for(bt=void 0;On--;){const en=V[On];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;bt&&(V[bt][1].type="lineEndingBlank",Nt=!0),en[1].type="lineEnding",bt=On}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!bt||it<bt)&&(hn._spread=!0),hn.end=Object.assign({},bt?V[bt][1].start:Ge[1].end),V.splice(bt||we,0,["exit",hn,Ge[2]]),we++,he++}if(Ge[1].type==="listItemPrefix"){const On={type:"listItem",_spread:!1,start:Object.assign({},Ge[1].start),end:void 0};hn=On,V.splice(we,0,["enter",On,Ge[2]]),we++,he++,it=void 0,kt=!0}}}return V[ee][1]._spread=Nt,he}function p(V,ee){return he;function he(we){d.call(this,V(we),we),ee&&ee.call(this,we)}}function f(){this.stack.push({type:"fragment",children:[]})}function d(V,ee,he){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([ee,he||void 0]),V.position={start:il(ee.start),end:void 0}}function m(V){return ee;function ee(he){V&&V.call(this,he),h.call(this,he)}}function h(V,ee){const he=this.stack.pop(),we=this.tokenStack.pop();if(we)we[0].type!==V.type&&(ee?ee.call(this,V,we[0]):(we[1]||sm).call(this,V,we[0]));else throw new Error("Cannot close `"+V.type+"` ("+Ci({start:V.start,end:V.end})+"): it’s not open");he.position.end=il(V.end)}function b(){return ws(this.stack.pop())}function x(){this.data.expectingFirstListItemValue=!0}function v(V){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function k(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=V}function j(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=V}function Y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function D(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V.replace(/(\r?\n|\r)$/g,"")}function F(V){const ee=this.resume(),he=this.stack[this.stack.length-1];he.label=ee,he.identifier=an(this.sliceSerialize(V)).toLowerCase()}function H(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.title=V}function ae(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.url=V}function le(V){const ee=this.stack[this.stack.length-1];if(!ee.depth){const he=this.sliceSerialize(V).length;ee.depth=he}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function _(V){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function K(){this.data.setextHeadingSlurpLineEnding=void 0}function ie(V){const he=this.stack[this.stack.length-1].children;let we=he[he.length-1];(!we||we.type!=="text")&&(we=yt(),we.position={start:il(V.start),end:void 0},he.push(we)),this.stack.push(we)}function L(V){const ee=this.stack.pop();ee.value+=this.sliceSerialize(V),ee.position.end=il(V.end)}function W(V){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=ee.children[ee.children.length-1];he.position.end=il(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(ee.type)&&(ie.call(this,V),L.call(this,V))}function te(){this.data.atHardBreak=!0}function Se(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V}function oe(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V}function P(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.value=V}function A(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=ee,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function Z(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=ee,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function ne(V){const ee=this.sliceSerialize(V),he=this.stack[this.stack.length-2];he.label=uv(ee),he.identifier=an(ee).toLowerCase()}function ge(){const V=this.stack[this.stack.length-1],ee=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const we=V.children;he.children=we}else he.alt=ee}function E(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.url=V}function C(){const V=this.resume(),ee=this.stack[this.stack.length-1];ee.title=V}function q(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function $(V){const ee=this.resume(),he=this.stack[this.stack.length-1];he.label=ee,he.identifier=an(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function re(V){this.data.characterReferenceType=V.type}function se(V){const ee=this.sliceSerialize(V),he=this.data.characterReferenceType;let we;he?(we=Pm(ee,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):we=Es(ee);const Oe=this.stack[this.stack.length-1];Oe.value+=we}function ke(V){const ee=this.stack.pop();ee.position.end=il(V.end)}function Ye(V){L.call(this,V);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(V)}function Be(V){L.call(this,V);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(V)}function Gt(){return{type:"blockquote",children:[]}}function pn(){return{type:"code",lang:null,meta:null,value:""}}function Ca(){return{type:"inlineCode",value:""}}function _i(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function dn(){return{type:"emphasis",children:[]}}function jl(){return{type:"heading",depth:0,children:[]}}function Al(){return{type:"break"}}function Oi(){return{type:"html",value:""}}function Li(){return{type:"image",title:null,url:"",alt:null}}function Ml(){return{type:"link",title:null,url:"",children:[]}}function Dl(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Ta(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function gu(){return{type:"paragraph",children:[]}}function xu(){return{type:"strong",children:[]}}function yt(){return{type:"text",value:""}}function yu(){return{type:"thematicBreak"}}}function il(n){return{line:n.line,column:n.column,offset:n.offset}}function sg(n,i){let r=-1;for(;++r<i.length;){const u=i[r];Array.isArray(u)?sg(n,u):fv(n,u)}}function fv(n,i){let r;for(r in i)if(cg.call(i,r))switch(r){case"canContainEols":{const u=i[r];u&&n[r].push(...u);break}case"transforms":{const u=i[r];u&&n[r].push(...u);break}case"enter":case"exit":{const u=i[r];u&&Object.assign(n[r],u);break}}}function sm(n,i){throw n?new Error("Cannot close `"+n.type+"` ("+Ci({start:n.start,end:n.end})+"): a different token (`"+i.type+"`, "+Ci({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Ci({start:i.start,end:i.end})+") is still open")}function pv(n){const i=this;i.parser=r;function r(u){return cv(u,{...i.data("settings"),...n,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function dv(n,i){const r={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(i),!0)};return n.patch(i,r),n.applyData(i,r)}function hv(n,i){const r={type:"element",tagName:"br",properties:{},children:[]};return n.patch(i,r),[n.applyData(i,r),{type:"text",value:`
`}]}function mv(n,i){const r=i.value?i.value+`
`:"",u={},s=i.lang?i.lang.split(/\s+/):[];s.length>0&&(u.className=["language-"+s[0]]);let p={type:"element",tagName:"code",properties:u,children:[{type:"text",value:r}]};return i.meta&&(p.data={meta:i.meta}),n.patch(i,p),p=n.applyData(i,p),p={type:"element",tagName:"pre",properties:{},children:[p]},n.patch(i,p),p}function gv(n,i){const r={type:"element",tagName:"del",properties:{},children:n.all(i)};return n.patch(i,r),n.applyData(i,r)}function xv(n,i){const r={type:"element",tagName:"em",properties:{},children:n.all(i)};return n.patch(i,r),n.applyData(i,r)}function yv(n,i){const r=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",u=String(i.identifier).toUpperCase(),s=Ea(u.toLowerCase()),p=n.footnoteOrder.indexOf(u);let f,d=n.footnoteCounts.get(u);d===void 0?(d=0,n.footnoteOrder.push(u),f=n.footnoteOrder.length):f=p+1,d+=1,n.footnoteCounts.set(u,d);const m={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+s,id:r+"fnref-"+s+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};n.patch(i,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return n.patch(i,h),n.applyData(i,h)}function bv(n,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:n.all(i)};return n.patch(i,r),n.applyData(i,r)}function vv(n,i){if(n.options.allowDangerousHtml){const r={type:"raw",value:i.value};return n.patch(i,r),n.applyData(i,r)}}function fg(n,i){const r=i.referenceType;let u="]";if(r==="collapsed"?u+="[]":r==="full"&&(u+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+u}];const s=n.all(i),p=s[0];p&&p.type==="text"?p.value="["+p.value:s.unshift({type:"text",value:"["});const f=s[s.length-1];return f&&f.type==="text"?f.value+=u:s.push({type:"text",value:u}),s}function Sv(n,i){const r=String(i.identifier).toUpperCase(),u=n.definitionById.get(r);if(!u)return fg(n,i);const s={src:Ea(u.url||""),alt:i.alt};u.title!==null&&u.title!==void 0&&(s.title=u.title);const p={type:"element",tagName:"img",properties:s,children:[]};return n.patch(i,p),n.applyData(i,p)}function kv(n,i){const r={src:Ea(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"img",properties:r,children:[]};return n.patch(i,u),n.applyData(i,u)}function wv(n,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};n.patch(i,r);const u={type:"element",tagName:"code",properties:{},children:[r]};return n.patch(i,u),n.applyData(i,u)}function Ev(n,i){const r=String(i.identifier).toUpperCase(),u=n.definitionById.get(r);if(!u)return fg(n,i);const s={href:Ea(u.url||"")};u.title!==null&&u.title!==void 0&&(s.title=u.title);const p={type:"element",tagName:"a",properties:s,children:n.all(i)};return n.patch(i,p),n.applyData(i,p)}function Cv(n,i){const r={href:Ea(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const u={type:"element",tagName:"a",properties:r,children:n.all(i)};return n.patch(i,u),n.applyData(i,u)}function Tv(n,i,r){const u=n.all(i),s=r?zv(r):pg(i),p={},f=[];if(typeof i.checked=="boolean"){const b=u[0];let x;b&&b.type==="element"&&b.tagName==="p"?x=b:(x={type:"element",tagName:"p",properties:{},children:[]},u.unshift(x)),x.children.length>0&&x.children.unshift({type:"text",value:" "}),x.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),p.className=["task-list-item"]}let d=-1;for(;++d<u.length;){const b=u[d];(s||d!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!s?f.push(...b.children):f.push(b)}const m=u[u.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&f.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:p,children:f};return n.patch(i,h),n.applyData(i,h)}function zv(n){let i=!1;if(n.type==="list"){i=n.spread||!1;const r=n.children;let u=-1;for(;!i&&++u<r.length;)i=pg(r[u])}return i}function pg(n){const i=n.spread;return i??n.children.length>1}function jv(n,i){const r={},u=n.all(i);let s=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++s<u.length;){const f=u[s];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const p={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:n.wrap(u,!0)};return n.patch(i,p),n.applyData(i,p)}function Av(n,i){const r={type:"element",tagName:"p",properties:{},children:n.all(i)};return n.patch(i,r),n.applyData(i,r)}function Mv(n,i){const r={type:"root",children:n.wrap(n.all(i))};return n.patch(i,r),n.applyData(i,r)}function Dv(n,i){const r={type:"element",tagName:"strong",properties:{},children:n.all(i)};return n.patch(i,r),n.applyData(i,r)}function Nv(n,i){const r=n.all(i),u=r.shift(),s=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:n.wrap([u],!0)};n.patch(i.children[0],f),s.push(f)}if(r.length>0){const f={type:"element",tagName:"tbody",properties:{},children:n.wrap(r,!0)},d=bs(i.children[1]),m=Im(i.children[i.children.length-1]);d&&m&&(f.position={start:d,end:m}),s.push(f)}const p={type:"element",tagName:"table",properties:{},children:n.wrap(s,!0)};return n.patch(i,p),n.applyData(i,p)}function _v(n,i,r){const u=r?r.children:void 0,p=(u?u.indexOf(i):1)===0?"th":"td",f=r&&r.type==="table"?r.align:void 0,d=f?f.length:i.children.length;let m=-1;const h=[];for(;++m<d;){const x=i.children[m],v={},k=f?f[m]:void 0;k&&(v.align=k);let j={type:"element",tagName:p,properties:v,children:[]};x&&(j.children=n.all(x),n.patch(x,j),j=n.applyData(x,j)),h.push(j)}const b={type:"element",tagName:"tr",properties:{},children:n.wrap(h,!0)};return n.patch(i,b),n.applyData(i,b)}function Ov(n,i){const r={type:"element",tagName:"td",properties:{},children:n.all(i)};return n.patch(i,r),n.applyData(i,r)}const fm=9,pm=32;function Lv(n){const i=String(n),r=/\r?\n|\r/g;let u=r.exec(i),s=0;const p=[];for(;u;)p.push(dm(i.slice(s,u.index),s>0,!0),u[0]),s=u.index+u[0].length,u=r.exec(i);return p.push(dm(i.slice(s),s>0,!1)),p.join("")}function dm(n,i,r){let u=0,s=n.length;if(i){let p=n.codePointAt(u);for(;p===fm||p===pm;)u++,p=n.codePointAt(u)}if(r){let p=n.codePointAt(s-1);for(;p===fm||p===pm;)s--,p=n.codePointAt(s-1)}return s>u?n.slice(u,s):""}function Rv(n,i){const r={type:"text",value:Lv(String(i.value))};return n.patch(i,r),n.applyData(i,r)}function Bv(n,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(i,r),n.applyData(i,r)}const Uv={blockquote:dv,break:hv,code:mv,delete:gv,emphasis:xv,footnoteReference:yv,heading:bv,html:vv,imageReference:Sv,image:kv,inlineCode:wv,linkReference:Ev,link:Cv,listItem:Tv,list:jv,paragraph:Av,root:Mv,strong:Dv,table:Nv,tableCell:Ov,tableRow:_v,text:Rv,thematicBreak:Bv,toml:Wr,yaml:Wr,definition:Wr,footnoteDefinition:Wr};function Wr(){}const dg=-1,du=0,zi=1,uu=2,Ts=3,zs=4,js=5,As=6,hg=7,mg=8,hm=typeof self=="object"?self:globalThis,Hv=(n,i)=>{const r=(s,p)=>(n.set(p,s),s),u=s=>{if(n.has(s))return n.get(s);const[p,f]=i[s];switch(p){case du:case dg:return r(f,s);case zi:{const d=r([],s);for(const m of f)d.push(u(m));return d}case uu:{const d=r({},s);for(const[m,h]of f)d[u(m)]=u(h);return d}case Ts:return r(new Date(f),s);case zs:{const{source:d,flags:m}=f;return r(new RegExp(d,m),s)}case js:{const d=r(new Map,s);for(const[m,h]of f)d.set(u(m),u(h));return d}case As:{const d=r(new Set,s);for(const m of f)d.add(u(m));return d}case hg:{const{name:d,message:m}=f;return r(new hm[d](m),s)}case mg:return r(BigInt(f),s);case"BigInt":return r(Object(BigInt(f)),s);case"ArrayBuffer":return r(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:d}=new Uint8Array(f);return r(new DataView(d),f)}}return r(new hm[p](f),s)};return u},mm=n=>Hv(new Map,n)(0),xa="",{toString:qv}={},{keys:Yv}=Object,wi=n=>{const i=typeof n;if(i!=="object"||!n)return[du,i];const r=qv.call(n).slice(8,-1);switch(r){case"Array":return[zi,xa];case"Object":return[uu,xa];case"Date":return[Ts,xa];case"RegExp":return[zs,xa];case"Map":return[js,xa];case"Set":return[As,xa];case"DataView":return[zi,r]}return r.includes("Array")?[zi,r]:r.includes("Error")?[hg,r]:[uu,r]},Pr=([n,i])=>n===du&&(i==="function"||i==="symbol"),Gv=(n,i,r,u)=>{const s=(f,d)=>{const m=u.push(f)-1;return r.set(d,m),m},p=f=>{if(r.has(f))return r.get(f);let[d,m]=wi(f);switch(d){case du:{let b=f;switch(m){case"bigint":d=mg,b=f.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+m);b=null;break;case"undefined":return s([dg],f)}return s([d,b],f)}case zi:{if(m){let v=f;return m==="DataView"?v=new Uint8Array(f.buffer):m==="ArrayBuffer"&&(v=new Uint8Array(f)),s([m,[...v]],f)}const b=[],x=s([d,b],f);for(const v of f)b.push(p(v));return x}case uu:{if(m)switch(m){case"BigInt":return s([m,f.toString()],f);case"Boolean":case"Number":case"String":return s([m,f.valueOf()],f)}if(i&&"toJSON"in f)return p(f.toJSON());const b=[],x=s([d,b],f);for(const v of Yv(f))(n||!Pr(wi(f[v])))&&b.push([p(v),p(f[v])]);return x}case Ts:return s([d,f.toISOString()],f);case zs:{const{source:b,flags:x}=f;return s([d,{source:b,flags:x}],f)}case js:{const b=[],x=s([d,b],f);for(const[v,k]of f)(n||!(Pr(wi(v))||Pr(wi(k))))&&b.push([p(v),p(k)]);return x}case As:{const b=[],x=s([d,b],f);for(const v of f)(n||!Pr(wi(v)))&&b.push(p(v));return x}}const{message:h}=f;return s([d,{name:m,message:h}],f)};return p},gm=(n,{json:i,lossy:r}={})=>{const u=[];return Gv(!(i||r),!!i,new Map,u)(n),u},ou=typeof structuredClone=="function"?(n,i)=>i&&("json"in i||"lossy"in i)?mm(gm(n,i)):structuredClone(n):(n,i)=>mm(gm(n,i));function Vv(n,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function Xv(n,i){return"Back to reference "+(n+1)+(i>1?"-"+i:"")}function Iv(n){const i=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=n.options.footnoteBackContent||Vv,u=n.options.footnoteBackLabel||Xv,s=n.options.footnoteLabel||"Footnotes",p=n.options.footnoteLabelTagName||"h2",f=n.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let m=-1;for(;++m<n.footnoteOrder.length;){const h=n.footnoteById.get(n.footnoteOrder[m]);if(!h)continue;const b=n.all(h),x=String(h.identifier).toUpperCase(),v=Ea(x.toLowerCase());let k=0;const j=[],Y=n.footnoteCounts.get(x);for(;Y!==void 0&&++k<=Y;){j.length>0&&j.push({type:"text",value:" "});let F=typeof r=="string"?r:r(m,k);typeof F=="string"&&(F={type:"text",value:F}),j.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+v+(k>1?"-"+k:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(m,k),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}const I=b[b.length-1];if(I&&I.type==="element"&&I.tagName==="p"){const F=I.children[I.children.length-1];F&&F.type==="text"?F.value+=" ":I.children.push({type:"text",value:" "}),I.children.push(...j)}else b.push(...j);const D={type:"element",tagName:"li",properties:{id:i+"fn-"+v},children:n.wrap(b,!0)};n.patch(h,D),d.push(D)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:p,properties:{...ou(f),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(d,!0)},{type:"text",value:`
`}]}}const hu=(function(n){if(n==null)return Kv;if(typeof n=="function")return mu(n);if(typeof n=="object")return Array.isArray(n)?Qv(n):Zv(n);if(typeof n=="string")return Fv(n);throw new Error("Expected function, string, or object as test")});function Qv(n){const i=[];let r=-1;for(;++r<n.length;)i[r]=hu(n[r]);return mu(u);function u(...s){let p=-1;for(;++p<i.length;)if(i[p].apply(this,s))return!0;return!1}}function Zv(n){const i=n;return mu(r);function r(u){const s=u;let p;for(p in n)if(s[p]!==i[p])return!1;return!0}}function Fv(n){return mu(i);function i(r){return r&&r.type===n}}function mu(n){return i;function i(r,u,s){return!!(Jv(r)&&n.call(this,r,typeof u=="number"?u:void 0,s||void 0))}}function Kv(){return!0}function Jv(n){return n!==null&&typeof n=="object"&&"type"in n}const gg=[],$v=!0,ss=!1,Wv="skip";function xg(n,i,r,u){let s;typeof i=="function"&&typeof r!="function"?(u=r,r=i):s=i;const p=hu(s),f=u?-1:1;d(n,void 0,[])();function d(m,h,b){const x=m&&typeof m=="object"?m:{};if(typeof x.type=="string"){const k=typeof x.tagName=="string"?x.tagName:typeof x.name=="string"?x.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(m.type+(k?"<"+k+">":""))+")"})}return v;function v(){let k=gg,j,Y,I;if((!i||p(m,h,b[b.length-1]||void 0))&&(k=Pv(r(m,b)),k[0]===ss))return k;if("children"in m&&m.children){const D=m;if(D.children&&k[0]!==Wv)for(Y=(u?D.children.length:-1)+f,I=b.concat(D);Y>-1&&Y<D.children.length;){const F=D.children[Y];if(j=d(F,Y,I)(),j[0]===ss)return j;Y=typeof j[1]=="number"?j[1]:Y+f}}return k}}}function Pv(n){return Array.isArray(n)?n:typeof n=="number"?[$v,n]:n==null?gg:[n]}function Ms(n,i,r,u){let s,p,f;typeof i=="function"&&typeof r!="function"?(p=void 0,f=i,s=r):(p=i,f=r,s=u),xg(n,p,d,s);function d(m,h){const b=h[h.length-1],x=b?b.children.indexOf(m):void 0;return f(m,x,b)}}const fs={}.hasOwnProperty,e2={};function t2(n,i){const r=i||e2,u=new Map,s=new Map,p=new Map,f={...Uv,...r.handlers},d={all:h,applyData:l2,definitionById:u,footnoteById:s,footnoteCounts:p,footnoteOrder:[],handlers:f,one:m,options:r,patch:n2,wrap:i2};return Ms(n,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const x=b.type==="definition"?u:s,v=String(b.identifier).toUpperCase();x.has(v)||x.set(v,b)}}),d;function m(b,x){const v=b.type,k=d.handlers[v];if(fs.call(d.handlers,v)&&k)return k(d,b,x);if(d.options.passThrough&&d.options.passThrough.includes(v)){if("children"in b){const{children:Y,...I}=b,D=ou(I);return D.children=d.all(b),D}return ou(b)}return(d.options.unknownHandler||a2)(d,b,x)}function h(b){const x=[];if("children"in b){const v=b.children;let k=-1;for(;++k<v.length;){const j=d.one(v[k],b);if(j){if(k&&v[k-1].type==="break"&&(!Array.isArray(j)&&j.type==="text"&&(j.value=xm(j.value)),!Array.isArray(j)&&j.type==="element")){const Y=j.children[0];Y&&Y.type==="text"&&(Y.value=xm(Y.value))}Array.isArray(j)?x.push(...j):x.push(j)}}}return x}}function n2(n,i){n.position&&(i.position=Xx(n))}function l2(n,i){let r=i;if(n&&n.data){const u=n.data.hName,s=n.data.hChildren,p=n.data.hProperties;if(typeof u=="string")if(r.type==="element")r.tagName=u;else{const f="children"in r?r.children:[r];r={type:"element",tagName:u,properties:{},children:f}}r.type==="element"&&p&&Object.assign(r.properties,ou(p)),"children"in r&&r.children&&s!==null&&s!==void 0&&(r.children=s)}return r}function a2(n,i){const r=i.data||{},u="value"in i&&!(fs.call(r,"hProperties")||fs.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:n.all(i)};return n.patch(i,u),n.applyData(i,u)}function i2(n,i){const r=[];let u=-1;for(i&&r.push({type:"text",value:`
`});++u<n.length;)u&&r.push({type:"text",value:`
`}),r.push(n[u]);return i&&n.length>0&&r.push({type:"text",value:`
`}),r}function xm(n){let i=0,r=n.charCodeAt(i);for(;r===9||r===32;)i++,r=n.charCodeAt(i);return n.slice(i)}function ym(n,i){const r=t2(n,i),u=r.one(n,void 0),s=Iv(r),p=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return s&&p.children.push({type:"text",value:`
`},s),p}function r2(n,i){return n&&"run"in n?async function(r,u){const s=ym(r,{file:u,...i});await n.run(s,u)}:function(r,u){return ym(r,{file:u,...n||i})}}function bm(n){if(n)throw n}var Vc,vm;function u2(){if(vm)return Vc;vm=1;var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):i.call(h)==="[object Array]"},p=function(h){if(!h||i.call(h)!=="[object Object]")return!1;var b=n.call(h,"constructor"),x=h.constructor&&h.constructor.prototype&&n.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!b&&!x)return!1;var v;for(v in h);return typeof v>"u"||n.call(h,v)},f=function(h,b){r&&b.name==="__proto__"?r(h,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):h[b.name]=b.newValue},d=function(h,b){if(b==="__proto__")if(n.call(h,b)){if(u)return u(h,b).value}else return;return h[b]};return Vc=function m(){var h,b,x,v,k,j,Y=arguments[0],I=1,D=arguments.length,F=!1;for(typeof Y=="boolean"&&(F=Y,Y=arguments[1]||{},I=2),(Y==null||typeof Y!="object"&&typeof Y!="function")&&(Y={});I<D;++I)if(h=arguments[I],h!=null)for(b in h)x=d(Y,b),v=d(h,b),Y!==v&&(F&&v&&(p(v)||(k=s(v)))?(k?(k=!1,j=x&&s(x)?x:[]):j=x&&p(x)?x:{},f(Y,{name:b,newValue:m(F,j,v)})):typeof v<"u"&&f(Y,{name:b,newValue:v}));return Y},Vc}var o2=u2();const Xc=su(o2);function ps(n){if(typeof n!="object"||n===null)return!1;const i=Object.getPrototypeOf(n);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function c2(){const n=[],i={run:r,use:u};return i;function r(...s){let p=-1;const f=s.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);d(null,...s);function d(m,...h){const b=n[++p];let x=-1;if(m){f(m);return}for(;++x<s.length;)(h[x]===null||h[x]===void 0)&&(h[x]=s[x]);s=h,b?s2(b,d)(...h):f(null,...h)}}function u(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return n.push(s),i}}function s2(n,i){let r;return u;function u(...f){const d=n.length>f.length;let m;d&&f.push(s);try{m=n.apply(this,f)}catch(h){const b=h;if(d&&r)throw b;return s(b)}d||(m&&m.then&&typeof m.then=="function"?m.then(p,s):m instanceof Error?s(m):p(m))}function s(f,...d){r||(r=!0,i(f,...d))}function p(f){s(null,f)}}const sn={basename:f2,dirname:p2,extname:d2,join:h2,sep:"/"};function f2(n,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Ni(n);let r=0,u=-1,s=n.length,p;if(i===void 0||i.length===0||i.length>n.length){for(;s--;)if(n.codePointAt(s)===47){if(p){r=s+1;break}}else u<0&&(p=!0,u=s+1);return u<0?"":n.slice(r,u)}if(i===n)return"";let f=-1,d=i.length-1;for(;s--;)if(n.codePointAt(s)===47){if(p){r=s+1;break}}else f<0&&(p=!0,f=s+1),d>-1&&(n.codePointAt(s)===i.codePointAt(d--)?d<0&&(u=s):(d=-1,u=f));return r===u?u=f:u<0&&(u=n.length),n.slice(r,u)}function p2(n){if(Ni(n),n.length===0)return".";let i=-1,r=n.length,u;for(;--r;)if(n.codePointAt(r)===47){if(u){i=r;break}}else u||(u=!0);return i<0?n.codePointAt(0)===47?"/":".":i===1&&n.codePointAt(0)===47?"//":n.slice(0,i)}function d2(n){Ni(n);let i=n.length,r=-1,u=0,s=-1,p=0,f;for(;i--;){const d=n.codePointAt(i);if(d===47){if(f){u=i+1;break}continue}r<0&&(f=!0,r=i+1),d===46?s<0?s=i:p!==1&&(p=1):s>-1&&(p=-1)}return s<0||r<0||p===0||p===1&&s===r-1&&s===u+1?"":n.slice(s,r)}function h2(...n){let i=-1,r;for(;++i<n.length;)Ni(n[i]),n[i]&&(r=r===void 0?n[i]:r+"/"+n[i]);return r===void 0?".":m2(r)}function m2(n){Ni(n);const i=n.codePointAt(0)===47;let r=g2(n,!i);return r.length===0&&!i&&(r="."),r.length>0&&n.codePointAt(n.length-1)===47&&(r+="/"),i?"/"+r:r}function g2(n,i){let r="",u=0,s=-1,p=0,f=-1,d,m;for(;++f<=n.length;){if(f<n.length)d=n.codePointAt(f);else{if(d===47)break;d=47}if(d===47){if(!(s===f-1||p===1))if(s!==f-1&&p===2){if(r.length<2||u!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(m=r.lastIndexOf("/"),m!==r.length-1){m<0?(r="",u=0):(r=r.slice(0,m),u=r.length-1-r.lastIndexOf("/")),s=f,p=0;continue}}else if(r.length>0){r="",u=0,s=f,p=0;continue}}i&&(r=r.length>0?r+"/..":"..",u=2)}else r.length>0?r+="/"+n.slice(s+1,f):r=n.slice(s+1,f),u=f-s-1;s=f,p=0}else d===46&&p>-1?p++:p=-1}return r}function Ni(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const x2={cwd:y2};function y2(){return"/"}function ds(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function b2(n){if(typeof n=="string")n=new URL(n);else if(!ds(n)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(n.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return v2(n)}function v2(n){if(n.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const i=n.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const u=i.codePointAt(r+2);if(u===70||u===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(i)}const Ic=["history","path","basename","stem","extname","dirname"];class yg{constructor(i){let r;i?ds(i)?r={path:i}:typeof i=="string"||S2(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":x2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Ic.length;){const p=Ic[u];p in r&&r[p]!==void 0&&r[p]!==null&&(this[p]=p==="history"?[...r[p]]:r[p])}let s;for(s in r)Ic.includes(s)||(this[s]=r[s])}get basename(){return typeof this.path=="string"?sn.basename(this.path):void 0}set basename(i){Zc(i,"basename"),Qc(i,"basename"),this.path=sn.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?sn.dirname(this.path):void 0}set dirname(i){Sm(this.basename,"dirname"),this.path=sn.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?sn.extname(this.path):void 0}set extname(i){if(Qc(i,"extname"),Sm(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=sn.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){ds(i)&&(i=b2(i)),Zc(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?sn.basename(this.path,this.extname):void 0}set stem(i){Zc(i,"stem"),Qc(i,"stem"),this.path=sn.join(this.dirname||"",i+(this.extname||""))}fail(i,r,u){const s=this.message(i,r,u);throw s.fatal=!0,s}info(i,r,u){const s=this.message(i,r,u);return s.fatal=void 0,s}message(i,r,u){const s=new xt(i,r,u);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function Qc(n,i){if(n&&n.includes(sn.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+sn.sep+"`")}function Zc(n,i){if(!n)throw new Error("`"+i+"` cannot be empty")}function Sm(n,i){if(!n)throw new Error("Setting `"+i+"` requires `path` to be set too")}function S2(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const k2=(function(n){const u=this.constructor.prototype,s=u[n],p=function(){return s.apply(p,arguments)};return Object.setPrototypeOf(p,u),p}),w2={}.hasOwnProperty;class Ds extends k2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=c2()}copy(){const i=new Ds;let r=-1;for(;++r<this.attachers.length;){const u=this.attachers[r];i.use(...u)}return i.data(Xc(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?(Jc("data",this.frozen),this.namespace[i]=r,this):w2.call(this.namespace,i)&&this.namespace[i]||void 0:i?(Jc("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const s=r.call(i,...u);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=eu(i),u=this.parser||this.Parser;return Fc("parse",u),u(String(r),r)}process(i,r){const u=this;return this.freeze(),Fc("process",this.parser||this.Parser),Kc("process",this.compiler||this.Compiler),r?s(void 0,r):new Promise(s);function s(p,f){const d=eu(i),m=u.parse(d);u.run(m,d,function(b,x,v){if(b||!x||!v)return h(b);const k=x,j=u.stringify(k,v);T2(j)?v.value=j:v.result=j,h(b,v)});function h(b,x){b||!x?f(b):p?p(x):r(void 0,x)}}}processSync(i){let r=!1,u;return this.freeze(),Fc("processSync",this.parser||this.Parser),Kc("processSync",this.compiler||this.Compiler),this.process(i,s),wm("processSync","process",r),u;function s(p,f){r=!0,bm(p),u=f}}run(i,r,u){km(i),this.freeze();const s=this.transformers;return!u&&typeof r=="function"&&(u=r,r=void 0),u?p(void 0,u):new Promise(p);function p(f,d){const m=eu(r);s.run(i,m,h);function h(b,x,v){const k=x||i;b?d(b):f?f(k):u(void 0,k,v)}}}runSync(i,r){let u=!1,s;return this.run(i,r,p),wm("runSync","run",u),s;function p(f,d){bm(f),s=d,u=!0}}stringify(i,r){this.freeze();const u=eu(r),s=this.compiler||this.Compiler;return Kc("stringify",s),km(i),s(i,u)}use(i,...r){const u=this.attachers,s=this.namespace;if(Jc("use",this.frozen),i!=null)if(typeof i=="function")m(i,r);else if(typeof i=="object")Array.isArray(i)?d(i):f(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function p(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[b,...x]=h;m(b,x)}else f(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function f(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(h.plugins),h.settings&&(s.settings=Xc(!0,s.settings,h.settings))}function d(h){let b=-1;if(h!=null)if(Array.isArray(h))for(;++b<h.length;){const x=h[b];p(x)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,b){let x=-1,v=-1;for(;++x<u.length;)if(u[x][0]===h){v=x;break}if(v===-1)u.push([h,...b]);else if(b.length>0){let[k,...j]=b;const Y=u[v][1];ps(Y)&&ps(k)&&(k=Xc(!0,Y,k)),u[v]=[h,k,...j]}}}}const E2=new Ds().freeze();function Fc(n,i){if(typeof i!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Kc(n,i){if(typeof i!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Jc(n,i){if(i)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function km(n){if(!ps(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function wm(n,i,r){if(!r)throw new Error("`"+n+"` finished async. Use `"+i+"` instead")}function eu(n){return C2(n)?n:new yg(n)}function C2(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function T2(n){return typeof n=="string"||z2(n)}function z2(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const j2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Em=[],Cm={allowDangerousHtml:!0},A2=/^(https?|ircs?|mailto|xmpp)$/i,M2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function D2(n){const i=N2(n),r=_2(n);return O2(i.runSync(i.parse(r),r),n)}function N2(n){const i=n.rehypePlugins||Em,r=n.remarkPlugins||Em,u=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...Cm}:Cm;return E2().use(pv).use(r).use(r2,u).use(i)}function _2(n){const i=n.children||"",r=new yg;return typeof i=="string"&&(r.value=i),r}function O2(n,i){const r=i.allowedElements,u=i.allowElement,s=i.components,p=i.disallowedElements,f=i.skipHtml,d=i.unwrapDisallowed,m=i.urlTransform||L2;for(const b of M2)Object.hasOwn(i,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+j2+b.id,void 0);return Ms(n,h),Kx(n,{Fragment:y.Fragment,components:s,ignoreInvalidStyle:!0,jsx:y.jsx,jsxs:y.jsxs,passKeys:!0,passNode:!0});function h(b,x,v){if(b.type==="raw"&&v&&typeof x=="number")return f?v.children.splice(x,1):v.children[x]={type:"text",value:b.value},x;if(b.type==="element"){let k;for(k in qc)if(Object.hasOwn(qc,k)&&Object.hasOwn(b.properties,k)){const j=b.properties[k],Y=qc[k];(Y===null||Y.includes(b.tagName))&&(b.properties[k]=m(String(j||""),k,b))}}if(b.type==="element"){let k=r?!r.includes(b.tagName):p?p.includes(b.tagName):!1;if(!k&&u&&typeof x=="number"&&(k=!u(b,x,v)),k&&v&&typeof x=="number")return d&&b.children?v.children.splice(x,1,...b.children):v.children.splice(x,1),x}}}function L2(n){const i=n.indexOf(":"),r=n.indexOf("?"),u=n.indexOf("#"),s=n.indexOf("/");return i===-1||s!==-1&&i>s||r!==-1&&i>r||u!==-1&&i>u||A2.test(n.slice(0,i))?n:""}function Tm(n,i){const r=String(n);if(typeof i!="string")throw new TypeError("Expected character");let u=0,s=r.indexOf(i);for(;s!==-1;)u++,s=r.indexOf(i,s+i.length);return u}function R2(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function B2(n,i,r){const s=hu((r||{}).ignore||[]),p=U2(i);let f=-1;for(;++f<p.length;)xg(n,"text",d);function d(h,b){let x=-1,v;for(;++x<b.length;){const k=b[x],j=v?v.children:void 0;if(s(k,j?j.indexOf(k):void 0,v))return;v=k}if(v)return m(h,b)}function m(h,b){const x=b[b.length-1],v=p[f][0],k=p[f][1];let j=0;const I=x.children.indexOf(h);let D=!1,F=[];v.lastIndex=0;let H=v.exec(h.value);for(;H;){const ae=H.index,le={index:H.index,input:H.input,stack:[...b,h]};let B=k(...H,le);if(typeof B=="string"&&(B=B.length>0?{type:"text",value:B}:void 0),B===!1?v.lastIndex=ae+1:(j!==ae&&F.push({type:"text",value:h.value.slice(j,ae)}),Array.isArray(B)?F.push(...B):B&&F.push(B),j=ae+H[0].length,D=!0),!v.global)break;H=v.exec(h.value)}return D?(j<h.value.length&&F.push({type:"text",value:h.value.slice(j)}),x.children.splice(I,1,...F)):F=[h],I+F.length}}function U2(n){const i=[];if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!n[0]||Array.isArray(n[0])?n:[n];let u=-1;for(;++u<r.length;){const s=r[u];i.push([H2(s[0]),q2(s[1])])}return i}function H2(n){return typeof n=="string"?new RegExp(R2(n),"g"):n}function q2(n){return typeof n=="function"?n:function(){return n}}const $c="phrasing",Wc=["autolink","link","image","label"];function Y2(){return{transforms:[F2],enter:{literalAutolink:V2,literalAutolinkEmail:Pc,literalAutolinkHttp:Pc,literalAutolinkWww:Pc},exit:{literalAutolink:Z2,literalAutolinkEmail:Q2,literalAutolinkHttp:X2,literalAutolinkWww:I2}}}function G2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:$c,notInConstruct:Wc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:$c,notInConstruct:Wc},{character:":",before:"[ps]",after:"\\/",inConstruct:$c,notInConstruct:Wc}]}}function V2(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function Pc(n){this.config.enter.autolinkProtocol.call(this,n)}function X2(n){this.config.exit.autolinkProtocol.call(this,n)}function I2(n){this.config.exit.data.call(this,n);const i=this.stack[this.stack.length-1];i.type,i.url="http://"+this.sliceSerialize(n)}function Q2(n){this.config.exit.autolinkEmail.call(this,n)}function Z2(n){this.exit(n)}function F2(n){B2(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,K2],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),J2]],{ignore:["link","linkReference"]})}function K2(n,i,r,u,s){let p="";if(!bg(s)||(/^w/i.test(i)&&(r=i+r,i="",p="http://"),!$2(r)))return!1;const f=W2(r+u);if(!f[0])return!1;const d={type:"link",title:null,url:p+i+f[0],children:[{type:"text",value:i+f[0]}]};return f[1]?[d,{type:"text",value:f[1]}]:d}function J2(n,i,r,u){return!bg(u,!0)||/[-\d_]$/.test(r)?!1:{type:"link",title:null,url:"mailto:"+i+"@"+r,children:[{type:"text",value:i+"@"+r}]}}function $2(n){const i=n.split(".");return!(i.length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2])))}function W2(n){const i=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!i)return[n,void 0];n=n.slice(0,i.index);let r=i[0],u=r.indexOf(")");const s=Tm(n,"(");let p=Tm(n,")");for(;u!==-1&&s>p;)n+=r.slice(0,u+1),r=r.slice(u+1),u=r.indexOf(")"),p++;return[n,r]}function bg(n,i){const r=n.input.charCodeAt(n.index-1);return(n.index===0||Tl(r)||fu(r))&&(!i||r!==47)}vg.peek=uS;function P2(){this.buffer()}function eS(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function tS(){this.buffer()}function nS(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function lS(n){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=an(this.sliceSerialize(n)).toLowerCase(),r.label=i}function aS(n){this.exit(n)}function iS(n){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=an(this.sliceSerialize(n)).toLowerCase(),r.label=i}function rS(n){this.exit(n)}function uS(){return"["}function vg(n,i,r,u){const s=r.createTracker(u);let p=s.move("[^");const f=r.enter("footnoteReference"),d=r.enter("reference");return p+=s.move(r.safe(r.associationId(n),{after:"]",before:p})),d(),f(),p+=s.move("]"),p}function oS(){return{enter:{gfmFootnoteCallString:P2,gfmFootnoteCall:eS,gfmFootnoteDefinitionLabelString:tS,gfmFootnoteDefinition:nS},exit:{gfmFootnoteCallString:lS,gfmFootnoteCall:aS,gfmFootnoteDefinitionLabelString:iS,gfmFootnoteDefinition:rS}}}function cS(n){let i=!1;return n&&n.firstLineBlank&&(i=!0),{handlers:{footnoteDefinition:r,footnoteReference:vg},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function r(u,s,p,f){const d=p.createTracker(f);let m=d.move("[^");const h=p.enter("footnoteDefinition"),b=p.enter("label");return m+=d.move(p.safe(p.associationId(u),{before:m,after:"]"})),b(),m+=d.move("]:"),u.children&&u.children.length>0&&(d.shift(4),m+=d.move((i?`
`:" ")+p.indentLines(p.containerFlow(u,d.current()),i?Sg:sS))),h(),m}}function sS(n,i,r){return i===0?n:Sg(n,i,r)}function Sg(n,i,r){return(r?"":"    ")+n}const fS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];kg.peek=gS;function pS(){return{canContainEols:["delete"],enter:{strikethrough:hS},exit:{strikethrough:mS}}}function dS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:fS}],handlers:{delete:kg}}}function hS(n){this.enter({type:"delete",children:[]},n)}function mS(n){this.exit(n)}function kg(n,i,r,u){const s=r.createTracker(u),p=r.enter("strikethrough");let f=s.move("~~");return f+=r.containerPhrasing(n,{...s.current(),before:f,after:"~"}),f+=s.move("~~"),p(),f}function gS(){return"~"}function xS(n){return n.length}function yS(n,i){const r=i||{},u=(r.align||[]).concat(),s=r.stringLength||xS,p=[],f=[],d=[],m=[];let h=0,b=-1;for(;++b<n.length;){const Y=[],I=[];let D=-1;for(n[b].length>h&&(h=n[b].length);++D<n[b].length;){const F=bS(n[b][D]);if(r.alignDelimiters!==!1){const H=s(F);I[D]=H,(m[D]===void 0||H>m[D])&&(m[D]=H)}Y.push(F)}f[b]=Y,d[b]=I}let x=-1;if(typeof u=="object"&&"length"in u)for(;++x<h;)p[x]=zm(u[x]);else{const Y=zm(u);for(;++x<h;)p[x]=Y}x=-1;const v=[],k=[];for(;++x<h;){const Y=p[x];let I="",D="";Y===99?(I=":",D=":"):Y===108?I=":":Y===114&&(D=":");let F=r.alignDelimiters===!1?1:Math.max(1,m[x]-I.length-D.length);const H=I+"-".repeat(F)+D;r.alignDelimiters!==!1&&(F=I.length+F+D.length,F>m[x]&&(m[x]=F),k[x]=F),v[x]=H}f.splice(1,0,v),d.splice(1,0,k),b=-1;const j=[];for(;++b<f.length;){const Y=f[b],I=d[b];x=-1;const D=[];for(;++x<h;){const F=Y[x]||"";let H="",ae="";if(r.alignDelimiters!==!1){const le=m[x]-(I[x]||0),B=p[x];B===114?H=" ".repeat(le):B===99?le%2?(H=" ".repeat(le/2+.5),ae=" ".repeat(le/2-.5)):(H=" ".repeat(le/2),ae=H):ae=" ".repeat(le)}r.delimiterStart!==!1&&!x&&D.push("|"),r.padding!==!1&&!(r.alignDelimiters===!1&&F==="")&&(r.delimiterStart!==!1||x)&&D.push(" "),r.alignDelimiters!==!1&&D.push(H),D.push(F),r.alignDelimiters!==!1&&D.push(ae),r.padding!==!1&&D.push(" "),(r.delimiterEnd!==!1||x!==h-1)&&D.push("|")}j.push(r.delimiterEnd===!1?D.join("").replace(/ +$/,""):D.join(""))}return j.join(`
`)}function bS(n){return n==null?"":String(n)}function zm(n){const i=typeof n=="string"?n.codePointAt(0):0;return i===67||i===99?99:i===76||i===108?108:i===82||i===114?114:0}function vS(n,i,r,u){const s=r.enter("blockquote"),p=r.createTracker(u);p.move("> "),p.shift(2);const f=r.indentLines(r.containerFlow(n,p.current()),SS);return s(),f}function SS(n,i,r){return">"+(r?"":" ")+n}function kS(n,i){return jm(n,i.inConstruct,!0)&&!jm(n,i.notInConstruct,!1)}function jm(n,i,r){if(typeof i=="string"&&(i=[i]),!i||i.length===0)return r;let u=-1;for(;++u<i.length;)if(n.includes(i[u]))return!0;return!1}function Am(n,i,r,u){let s=-1;for(;++s<r.unsafe.length;)if(r.unsafe[s].character===`
`&&kS(r.stack,r.unsafe[s]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function wS(n,i){const r=String(n);let u=r.indexOf(i),s=u,p=0,f=0;if(typeof i!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===s?++p>f&&(f=p):p=1,s=u+i.length,u=r.indexOf(i,s);return f}function ES(n,i){return!!(i.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function CS(n){const i=n.options.fence||"`";if(i!=="`"&&i!=="~")throw new Error("Cannot serialize code with `"+i+"` for `options.fence`, expected `` ` `` or `~`");return i}function TS(n,i,r,u){const s=CS(r),p=n.value||"",f=s==="`"?"GraveAccent":"Tilde";if(ES(n,r)){const x=r.enter("codeIndented"),v=r.indentLines(p,zS);return x(),v}const d=r.createTracker(u),m=s.repeat(Math.max(wS(p,s)+1,3)),h=r.enter("codeFenced");let b=d.move(m);if(n.lang){const x=r.enter(`codeFencedLang${f}`);b+=d.move(r.safe(n.lang,{before:b,after:" ",encode:["`"],...d.current()})),x()}if(n.lang&&n.meta){const x=r.enter(`codeFencedMeta${f}`);b+=d.move(" "),b+=d.move(r.safe(n.meta,{before:b,after:`
`,encode:["`"],...d.current()})),x()}return b+=d.move(`
`),p&&(b+=d.move(p+`
`)),b+=d.move(m),h(),b}function zS(n,i,r){return(r?"":"    ")+n}function Ns(n){const i=n.options.quote||'"';if(i!=='"'&&i!=="'")throw new Error("Cannot serialize title with `"+i+"` for `options.quote`, expected `\"`, or `'`");return i}function jS(n,i,r,u){const s=Ns(r),p=s==='"'?"Quote":"Apostrophe",f=r.enter("definition");let d=r.enter("label");const m=r.createTracker(u);let h=m.move("[");return h+=m.move(r.safe(r.associationId(n),{before:h,after:"]",...m.current()})),h+=m.move("]: "),d(),!n.url||/[\0- \u007F]/.test(n.url)?(d=r.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(r.safe(n.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(d=r.enter("destinationRaw"),h+=m.move(r.safe(n.url,{before:h,after:n.title?" ":`
`,...m.current()}))),d(),n.title&&(d=r.enter(`title${p}`),h+=m.move(" "+s),h+=m.move(r.safe(n.title,{before:h,after:s,...m.current()})),h+=m.move(s),d()),f(),h}function AS(n){const i=n.options.emphasis||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize emphasis with `"+i+"` for `options.emphasis`, expected `*`, or `_`");return i}function Ai(n){return"&#x"+n.toString(16).toUpperCase()+";"}function cu(n,i,r){const u=ka(n),s=ka(i);return u===void 0?s===void 0?r==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}wg.peek=MS;function wg(n,i,r,u){const s=AS(r),p=r.enter("emphasis"),f=r.createTracker(u),d=f.move(s);let m=f.move(r.containerPhrasing(n,{after:s,before:d,...f.current()}));const h=m.charCodeAt(0),b=cu(u.before.charCodeAt(u.before.length-1),h,s);b.inside&&(m=Ai(h)+m.slice(1));const x=m.charCodeAt(m.length-1),v=cu(u.after.charCodeAt(0),x,s);v.inside&&(m=m.slice(0,-1)+Ai(x));const k=f.move(s);return p(),r.attentionEncodeSurroundingInfo={after:v.outside,before:b.outside},d+m+k}function MS(n,i,r){return r.options.emphasis||"*"}function DS(n,i){let r=!1;return Ms(n,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return r=!0,ss}),!!((!n.depth||n.depth<3)&&ws(n)&&(i.options.setext||r))}function NS(n,i,r,u){const s=Math.max(Math.min(6,n.depth||1),1),p=r.createTracker(u);if(DS(n,r)){const b=r.enter("headingSetext"),x=r.enter("phrasing"),v=r.containerPhrasing(n,{...p.current(),before:`
`,after:`
`});return x(),b(),v+`
`+(s===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const f="#".repeat(s),d=r.enter("headingAtx"),m=r.enter("phrasing");p.move(f+" ");let h=r.containerPhrasing(n,{before:"# ",after:`
`,...p.current()});return/^[\t ]/.test(h)&&(h=Ai(h.charCodeAt(0))+h.slice(1)),h=h?f+" "+h:f,r.options.closeAtx&&(h+=" "+f),m(),d(),h}Eg.peek=_S;function Eg(n){return n.value||""}function _S(){return"<"}Cg.peek=OS;function Cg(n,i,r,u){const s=Ns(r),p=s==='"'?"Quote":"Apostrophe",f=r.enter("image");let d=r.enter("label");const m=r.createTracker(u);let h=m.move("![");return h+=m.move(r.safe(n.alt,{before:h,after:"]",...m.current()})),h+=m.move("]("),d(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(d=r.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(r.safe(n.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(d=r.enter("destinationRaw"),h+=m.move(r.safe(n.url,{before:h,after:n.title?" ":")",...m.current()}))),d(),n.title&&(d=r.enter(`title${p}`),h+=m.move(" "+s),h+=m.move(r.safe(n.title,{before:h,after:s,...m.current()})),h+=m.move(s),d()),h+=m.move(")"),f(),h}function OS(){return"!"}Tg.peek=LS;function Tg(n,i,r,u){const s=n.referenceType,p=r.enter("imageReference");let f=r.enter("label");const d=r.createTracker(u);let m=d.move("![");const h=r.safe(n.alt,{before:m,after:"]",...d.current()});m+=d.move(h+"]["),f();const b=r.stack;r.stack=[],f=r.enter("reference");const x=r.safe(r.associationId(n),{before:m,after:"]",...d.current()});return f(),r.stack=b,p(),s==="full"||!h||h!==x?m+=d.move(x+"]"):s==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function LS(){return"!"}zg.peek=RS;function zg(n,i,r){let u=n.value||"",s="`",p=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(u);)s+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++p<r.unsafe.length;){const f=r.unsafe[p],d=r.compilePattern(f);let m;if(f.atBreak)for(;m=d.exec(u);){let h=m.index;u.charCodeAt(h)===10&&u.charCodeAt(h-1)===13&&h--,u=u.slice(0,h)+" "+u.slice(m.index+1)}}return s+u+s}function RS(){return"`"}function jg(n,i){const r=ws(n);return!!(!i.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(r===n.url||"mailto:"+r===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}Ag.peek=BS;function Ag(n,i,r,u){const s=Ns(r),p=s==='"'?"Quote":"Apostrophe",f=r.createTracker(u);let d,m;if(jg(n,r)){const b=r.stack;r.stack=[],d=r.enter("autolink");let x=f.move("<");return x+=f.move(r.containerPhrasing(n,{before:x,after:">",...f.current()})),x+=f.move(">"),d(),r.stack=b,x}d=r.enter("link"),m=r.enter("label");let h=f.move("[");return h+=f.move(r.containerPhrasing(n,{before:h,after:"](",...f.current()})),h+=f.move("]("),m(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(m=r.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(r.safe(n.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(m=r.enter("destinationRaw"),h+=f.move(r.safe(n.url,{before:h,after:n.title?" ":")",...f.current()}))),m(),n.title&&(m=r.enter(`title${p}`),h+=f.move(" "+s),h+=f.move(r.safe(n.title,{before:h,after:s,...f.current()})),h+=f.move(s),m()),h+=f.move(")"),d(),h}function BS(n,i,r){return jg(n,r)?"<":"["}Mg.peek=US;function Mg(n,i,r,u){const s=n.referenceType,p=r.enter("linkReference");let f=r.enter("label");const d=r.createTracker(u);let m=d.move("[");const h=r.containerPhrasing(n,{before:m,after:"]",...d.current()});m+=d.move(h+"]["),f();const b=r.stack;r.stack=[],f=r.enter("reference");const x=r.safe(r.associationId(n),{before:m,after:"]",...d.current()});return f(),r.stack=b,p(),s==="full"||!h||h!==x?m+=d.move(x+"]"):s==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function US(){return"["}function _s(n){const i=n.options.bullet||"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bullet`, expected `*`, `+`, or `-`");return i}function HS(n){const i=_s(n),r=n.options.bulletOther;if(!r)return i==="*"?"-":"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(r===i)throw new Error("Expected `bullet` (`"+i+"`) and `bulletOther` (`"+r+"`) to be different");return r}function qS(n){const i=n.options.bulletOrdered||".";if(i!=="."&&i!==")")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOrdered`, expected `.` or `)`");return i}function Dg(n){const i=n.options.rule||"*";if(i!=="*"&&i!=="-"&&i!=="_")throw new Error("Cannot serialize rules with `"+i+"` for `options.rule`, expected `*`, `-`, or `_`");return i}function YS(n,i,r,u){const s=r.enter("list"),p=r.bulletCurrent;let f=n.ordered?qS(r):_s(r);const d=n.ordered?f==="."?")":".":HS(r);let m=i&&r.bulletLastUsed?f===r.bulletLastUsed:!1;if(!n.ordered){const b=n.children?n.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&r.stack[r.stack.length-1]==="list"&&r.stack[r.stack.length-2]==="listItem"&&r.stack[r.stack.length-3]==="list"&&r.stack[r.stack.length-4]==="listItem"&&r.indexStack[r.indexStack.length-1]===0&&r.indexStack[r.indexStack.length-2]===0&&r.indexStack[r.indexStack.length-3]===0&&(m=!0),Dg(r)===f&&b){let x=-1;for(;++x<n.children.length;){const v=n.children[x];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(f=d),r.bulletCurrent=f;const h=r.containerFlow(n,u);return r.bulletLastUsed=f,r.bulletCurrent=p,s(),h}function GS(n){const i=n.options.listItemIndent||"one";if(i!=="tab"&&i!=="one"&&i!=="mixed")throw new Error("Cannot serialize items with `"+i+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return i}function VS(n,i,r,u){const s=GS(r);let p=r.bulletCurrent||_s(r);i&&i.type==="list"&&i.ordered&&(p=(typeof i.start=="number"&&i.start>-1?i.start:1)+(r.options.incrementListMarker===!1?0:i.children.indexOf(n))+p);let f=p.length+1;(s==="tab"||s==="mixed"&&(i&&i.type==="list"&&i.spread||n.spread))&&(f=Math.ceil(f/4)*4);const d=r.createTracker(u);d.move(p+" ".repeat(f-p.length)),d.shift(f);const m=r.enter("listItem"),h=r.indentLines(r.containerFlow(n,d.current()),b);return m(),h;function b(x,v,k){return v?(k?"":" ".repeat(f))+x:(k?p:p+" ".repeat(f-p.length))+x}}function XS(n,i,r,u){const s=r.enter("paragraph"),p=r.enter("phrasing"),f=r.containerPhrasing(n,u);return p(),s(),f}const IS=hu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function QS(n,i,r,u){return(n.children.some(function(f){return IS(f)})?r.containerPhrasing:r.containerFlow).call(r,n,u)}function ZS(n){const i=n.options.strong||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize strong with `"+i+"` for `options.strong`, expected `*`, or `_`");return i}Ng.peek=FS;function Ng(n,i,r,u){const s=ZS(r),p=r.enter("strong"),f=r.createTracker(u),d=f.move(s+s);let m=f.move(r.containerPhrasing(n,{after:s,before:d,...f.current()}));const h=m.charCodeAt(0),b=cu(u.before.charCodeAt(u.before.length-1),h,s);b.inside&&(m=Ai(h)+m.slice(1));const x=m.charCodeAt(m.length-1),v=cu(u.after.charCodeAt(0),x,s);v.inside&&(m=m.slice(0,-1)+Ai(x));const k=f.move(s+s);return p(),r.attentionEncodeSurroundingInfo={after:v.outside,before:b.outside},d+m+k}function FS(n,i,r){return r.options.strong||"*"}function KS(n,i,r,u){return r.safe(n.value,u)}function JS(n){const i=n.options.ruleRepetition||3;if(i<3)throw new Error("Cannot serialize rules with repetition `"+i+"` for `options.ruleRepetition`, expected `3` or more");return i}function $S(n,i,r){const u=(Dg(r)+(r.options.ruleSpaces?" ":"")).repeat(JS(r));return r.options.ruleSpaces?u.slice(0,-1):u}const _g={blockquote:vS,break:Am,code:TS,definition:jS,emphasis:wg,hardBreak:Am,heading:NS,html:Eg,image:Cg,imageReference:Tg,inlineCode:zg,link:Ag,linkReference:Mg,list:YS,listItem:VS,paragraph:XS,root:QS,strong:Ng,text:KS,thematicBreak:$S};function WS(){return{enter:{table:PS,tableData:Mm,tableHeader:Mm,tableRow:t4},exit:{codeText:n4,table:e4,tableData:es,tableHeader:es,tableRow:es}}}function PS(n){const i=n._align;this.enter({type:"table",align:i.map(function(r){return r==="none"?null:r}),children:[]},n),this.data.inTable=!0}function e4(n){this.exit(n),this.data.inTable=void 0}function t4(n){this.enter({type:"tableRow",children:[]},n)}function es(n){this.exit(n)}function Mm(n){this.enter({type:"tableCell",children:[]},n)}function n4(n){let i=this.resume();this.data.inTable&&(i=i.replace(/\\([\\|])/g,l4));const r=this.stack[this.stack.length-1];r.type,r.value=i,this.exit(n)}function l4(n,i){return i==="|"?i:n}function a4(n){const i=n||{},r=i.tableCellPadding,u=i.tablePipeAlign,s=i.stringLength,p=r?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:f,tableCell:m,tableRow:d}};function f(k,j,Y,I){return h(b(k,Y,I),k.align)}function d(k,j,Y,I){const D=x(k,Y,I),F=h([D]);return F.slice(0,F.indexOf(`
`))}function m(k,j,Y,I){const D=Y.enter("tableCell"),F=Y.enter("phrasing"),H=Y.containerPhrasing(k,{...I,before:p,after:p});return F(),D(),H}function h(k,j){return yS(k,{align:j,alignDelimiters:u,padding:r,stringLength:s})}function b(k,j,Y){const I=k.children;let D=-1;const F=[],H=j.enter("table");for(;++D<I.length;)F[D]=x(I[D],j,Y);return H(),F}function x(k,j,Y){const I=k.children;let D=-1;const F=[],H=j.enter("tableRow");for(;++D<I.length;)F[D]=m(I[D],k,j,Y);return H(),F}function v(k,j,Y){let I=_g.inlineCode(k,j,Y);return Y.stack.includes("tableCell")&&(I=I.replace(/\|/g,"\\$&")),I}}function i4(){return{exit:{taskListCheckValueChecked:Dm,taskListCheckValueUnchecked:Dm,paragraph:u4}}}function r4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:o4}}}function Dm(n){const i=this.stack[this.stack.length-2];i.type,i.checked=n.type==="taskListCheckValueChecked"}function u4(n){const i=this.stack[this.stack.length-2];if(i&&i.type==="listItem"&&typeof i.checked=="boolean"){const r=this.stack[this.stack.length-1];r.type;const u=r.children[0];if(u&&u.type==="text"){const s=i.children;let p=-1,f;for(;++p<s.length;){const d=s[p];if(d.type==="paragraph"){f=d;break}}f===r&&(u.value=u.value.slice(1),u.value.length===0?r.children.shift():r.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,r.position.start=Object.assign({},u.position.start)))}}this.exit(n)}function o4(n,i,r,u){const s=n.children[0],p=typeof n.checked=="boolean"&&s&&s.type==="paragraph",f="["+(n.checked?"x":" ")+"] ",d=r.createTracker(u);p&&d.move(f);let m=_g.listItem(n,i,r,{...u,...d.current()});return p&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),m;function h(b){return b+f}}function c4(){return[Y2(),oS(),pS(),WS(),i4()]}function s4(n){return{extensions:[G2(),cS(n),dS(),a4(n),r4()]}}const f4={tokenize:x4,partial:!0},Og={tokenize:y4,partial:!0},Lg={tokenize:b4,partial:!0},Rg={tokenize:v4,partial:!0},p4={tokenize:S4,partial:!0},Bg={name:"wwwAutolink",tokenize:m4,previous:Hg},Ug={name:"protocolAutolink",tokenize:g4,previous:qg},_n={name:"emailAutolink",tokenize:h4,previous:Yg},fn={};function d4(){return{text:fn}}let Cl=48;for(;Cl<123;)fn[Cl]=_n,Cl++,Cl===58?Cl=65:Cl===91&&(Cl=97);fn[43]=_n;fn[45]=_n;fn[46]=_n;fn[95]=_n;fn[72]=[_n,Ug];fn[104]=[_n,Ug];fn[87]=[_n,Bg];fn[119]=[_n,Bg];function h4(n,i,r){const u=this;let s,p;return f;function f(x){return!hs(x)||!Yg.call(u,u.previous)||Os(u.events)?r(x):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),d(x))}function d(x){return hs(x)?(n.consume(x),d):x===64?(n.consume(x),m):r(x)}function m(x){return x===46?n.check(p4,b,h)(x):x===45||x===95||gt(x)?(p=!0,n.consume(x),m):b(x)}function h(x){return n.consume(x),s=!0,m}function b(x){return p&&s&&St(u.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),i(x)):r(x)}}function m4(n,i,r){const u=this;return s;function s(f){return f!==87&&f!==119||!Hg.call(u,u.previous)||Os(u.events)?r(f):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(f4,n.attempt(Og,n.attempt(Lg,p),r),r)(f))}function p(f){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),i(f)}}function g4(n,i,r){const u=this;let s="",p=!1;return f;function f(x){return(x===72||x===104)&&qg.call(u,u.previous)&&!Os(u.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),s+=String.fromCodePoint(x),n.consume(x),d):r(x)}function d(x){if(St(x)&&s.length<5)return s+=String.fromCodePoint(x),n.consume(x),d;if(x===58){const v=s.toLowerCase();if(v==="http"||v==="https")return n.consume(x),m}return r(x)}function m(x){return x===47?(n.consume(x),p?h:(p=!0,m)):r(x)}function h(x){return x===null||ru(x)||Ie(x)||Tl(x)||fu(x)?r(x):n.attempt(Og,n.attempt(Lg,b),r)(x)}function b(x){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),i(x)}}function x4(n,i,r){let u=0;return s;function s(f){return(f===87||f===119)&&u<3?(u++,n.consume(f),s):f===46&&u===3?(n.consume(f),p):r(f)}function p(f){return f===null?r(f):i(f)}}function y4(n,i,r){let u,s,p;return f;function f(h){return h===46||h===95?n.check(Rg,m,d)(h):h===null||Ie(h)||Tl(h)||h!==45&&fu(h)?m(h):(p=!0,n.consume(h),f)}function d(h){return h===95?u=!0:(s=u,u=void 0),n.consume(h),f}function m(h){return s||u||!p?r(h):i(h)}}function b4(n,i){let r=0,u=0;return s;function s(f){return f===40?(r++,n.consume(f),s):f===41&&u<r?p(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?n.check(Rg,i,p)(f):f===null||Ie(f)||Tl(f)?i(f):(n.consume(f),s)}function p(f){return f===41&&u++,n.consume(f),s}}function v4(n,i,r){return u;function u(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(n.consume(d),u):d===38?(n.consume(d),p):d===93?(n.consume(d),s):d===60||d===null||Ie(d)||Tl(d)?i(d):r(d)}function s(d){return d===null||d===40||d===91||Ie(d)||Tl(d)?i(d):u(d)}function p(d){return St(d)?f(d):r(d)}function f(d){return d===59?(n.consume(d),u):St(d)?(n.consume(d),f):r(d)}}function S4(n,i,r){return u;function u(p){return n.consume(p),s}function s(p){return gt(p)?r(p):i(p)}}function Hg(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||Ie(n)}function qg(n){return!St(n)}function Yg(n){return!(n===47||hs(n))}function hs(n){return n===43||n===45||n===46||n===95||gt(n)}function Os(n){let i=n.length,r=!1;for(;i--;){const u=n[i][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){r=!0;break}if(u._gfmAutolinkLiteralWalkedInto){r=!1;break}}return n.length>0&&!r&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),r}const k4={tokenize:M4,partial:!0};function w4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:z4,continuation:{tokenize:j4},exit:A4}},text:{91:{name:"gfmFootnoteCall",tokenize:T4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:E4,resolveTo:C4}}}}function E4(n,i,r){const u=this;let s=u.events.length;const p=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;s--;){const m=u.events[s][1];if(m.type==="labelImage"){f=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return d;function d(m){if(!f||!f._balanced)return r(m);const h=an(u.sliceSerialize({start:f.end,end:u.now()}));return h.codePointAt(0)!==94||!p.includes(h.slice(1))?r(m):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(m),n.exit("gfmFootnoteCallLabelMarker"),i(m))}}function C4(n,i){let r=n.length;for(;r--;)if(n[r][1].type==="labelImage"&&n[r][0]==="enter"){n[r][1];break}n[r+1][1].type="data",n[r+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},n[r+3][1].start),end:Object.assign({},n[n.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},n[r+3][1].end),end:Object.assign({},n[r+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const p={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},n[n.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},p.start),end:Object.assign({},p.end)},d=[n[r+1],n[r+2],["enter",u,i],n[r+3],n[r+4],["enter",s,i],["exit",s,i],["enter",p,i],["enter",f,i],["exit",f,i],["exit",p,i],n[n.length-2],n[n.length-1],["exit",u,i]];return n.splice(r,n.length-r+1,...d),n}function T4(n,i,r){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let p=0,f;return d;function d(x){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(x),n.exit("gfmFootnoteCallLabelMarker"),m}function m(x){return x!==94?r(x):(n.enter("gfmFootnoteCallMarker"),n.consume(x),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",h)}function h(x){if(p>999||x===93&&!f||x===null||x===91||Ie(x))return r(x);if(x===93){n.exit("chunkString");const v=n.exit("gfmFootnoteCallString");return s.includes(an(u.sliceSerialize(v)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(x),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),i):r(x)}return Ie(x)||(f=!0),p++,n.consume(x),x===92?b:h}function b(x){return x===91||x===92||x===93?(n.consume(x),p++,h):h(x)}}function z4(n,i,r){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let p,f=0,d;return m;function m(j){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(j),n.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(j){return j===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(j),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",b):r(j)}function b(j){if(f>999||j===93&&!d||j===null||j===91||Ie(j))return r(j);if(j===93){n.exit("chunkString");const Y=n.exit("gfmFootnoteDefinitionLabelString");return p=an(u.sliceSerialize(Y)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(j),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),v}return Ie(j)||(d=!0),f++,n.consume(j),j===92?x:b}function x(j){return j===91||j===92||j===93?(n.consume(j),f++,b):b(j)}function v(j){return j===58?(n.enter("definitionMarker"),n.consume(j),n.exit("definitionMarker"),s.includes(p)||s.push(p),Me(n,k,"gfmFootnoteDefinitionWhitespace")):r(j)}function k(j){return i(j)}}function j4(n,i,r){return n.check(Di,i,n.attempt(k4,i,r))}function A4(n){n.exit("gfmFootnoteDefinition")}function M4(n,i,r){const u=this;return Me(n,s,"gfmFootnoteDefinitionIndent",5);function s(p){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?i(p):r(p)}}function D4(n){let r=(n||{}).singleTilde;const u={name:"strikethrough",tokenize:p,resolveAll:s};return r==null&&(r=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function s(f,d){let m=-1;for(;++m<f.length;)if(f[m][0]==="enter"&&f[m][1].type==="strikethroughSequenceTemporary"&&f[m][1]._close){let h=m;for(;h--;)if(f[h][0]==="exit"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._open&&f[m][1].end.offset-f[m][1].start.offset===f[h][1].end.offset-f[h][1].start.offset){f[m][1].type="strikethroughSequence",f[h][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[h][1].start),end:Object.assign({},f[m][1].end)},x={type:"strikethroughText",start:Object.assign({},f[h][1].end),end:Object.assign({},f[m][1].start)},v=[["enter",b,d],["enter",f[h][1],d],["exit",f[h][1],d],["enter",x,d]],k=d.parser.constructs.insideSpan.null;k&&Yt(v,v.length,0,pu(k,f.slice(h+1,m),d)),Yt(v,v.length,0,[["exit",x,d],["enter",f[m][1],d],["exit",f[m][1],d],["exit",b,d]]),Yt(f,h-1,m-h+3,v),m=h+v.length-2;break}}for(m=-1;++m<f.length;)f[m][1].type==="strikethroughSequenceTemporary"&&(f[m][1].type="data");return f}function p(f,d,m){const h=this.previous,b=this.events;let x=0;return v;function v(j){return h===126&&b[b.length-1][1].type!=="characterEscape"?m(j):(f.enter("strikethroughSequenceTemporary"),k(j))}function k(j){const Y=ka(h);if(j===126)return x>1?m(j):(f.consume(j),x++,k);if(x<2&&!r)return m(j);const I=f.exit("strikethroughSequenceTemporary"),D=ka(j);return I._open=!D||D===2&&!!Y,I._close=!Y||Y===2&&!!D,d(j)}}}class N4{constructor(){this.map=[]}add(i,r,u){_4(this,i,r,u)}consume(i){if(this.map.sort(function(p,f){return p[0]-f[0]}),this.map.length===0)return;let r=this.map.length;const u=[];for(;r>0;)r-=1,u.push(i.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),i.length=this.map[r][0];u.push(i.slice()),i.length=0;let s=u.pop();for(;s;){for(const p of s)i.push(p);s=u.pop()}this.map.length=0}}function _4(n,i,r,u){let s=0;if(!(r===0&&u.length===0)){for(;s<n.map.length;){if(n.map[s][0]===i){n.map[s][1]+=r,n.map[s][2].push(...u);return}s+=1}n.map.push([i,r,u])}}function O4(n,i){let r=!1;const u=[];for(;i<n.length;){const s=n[i];if(r){if(s[0]==="enter")s[1].type==="tableContent"&&u.push(n[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(n[i-1][1].type==="tableDelimiterMarker"){const p=u.length-1;u[p]=u[p]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(r=!0);i+=1}return u}function L4(){return{flow:{null:{name:"table",tokenize:R4,resolveAll:B4}}}}function R4(n,i,r){const u=this;let s=0,p=0,f;return d;function d(L){let W=u.events.length-1;for(;W>-1;){const oe=u.events[W][1].type;if(oe==="lineEnding"||oe==="linePrefix")W--;else break}const te=W>-1?u.events[W][1].type:null,Se=te==="tableHead"||te==="tableRow"?B:m;return Se===B&&u.parser.lazy[u.now().line]?r(L):Se(L)}function m(L){return n.enter("tableHead"),n.enter("tableRow"),h(L)}function h(L){return L===124||(f=!0,p+=1),b(L)}function b(L){return L===null?r(L):pe(L)?p>1?(p=0,u.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(L),n.exit("lineEnding"),k):r(L):Te(L)?Me(n,b,"whitespace")(L):(p+=1,f&&(f=!1,s+=1),L===124?(n.enter("tableCellDivider"),n.consume(L),n.exit("tableCellDivider"),f=!0,b):(n.enter("data"),x(L)))}function x(L){return L===null||L===124||Ie(L)?(n.exit("data"),b(L)):(n.consume(L),L===92?v:x)}function v(L){return L===92||L===124?(n.consume(L),x):x(L)}function k(L){return u.interrupt=!1,u.parser.lazy[u.now().line]?r(L):(n.enter("tableDelimiterRow"),f=!1,Te(L)?Me(n,j,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):j(L))}function j(L){return L===45||L===58?I(L):L===124?(f=!0,n.enter("tableCellDivider"),n.consume(L),n.exit("tableCellDivider"),Y):le(L)}function Y(L){return Te(L)?Me(n,I,"whitespace")(L):I(L)}function I(L){return L===58?(p+=1,f=!0,n.enter("tableDelimiterMarker"),n.consume(L),n.exit("tableDelimiterMarker"),D):L===45?(p+=1,D(L)):L===null||pe(L)?ae(L):le(L)}function D(L){return L===45?(n.enter("tableDelimiterFiller"),F(L)):le(L)}function F(L){return L===45?(n.consume(L),F):L===58?(f=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(L),n.exit("tableDelimiterMarker"),H):(n.exit("tableDelimiterFiller"),H(L))}function H(L){return Te(L)?Me(n,ae,"whitespace")(L):ae(L)}function ae(L){return L===124?j(L):L===null||pe(L)?!f||s!==p?le(L):(n.exit("tableDelimiterRow"),n.exit("tableHead"),i(L)):le(L)}function le(L){return r(L)}function B(L){return n.enter("tableRow"),_(L)}function _(L){return L===124?(n.enter("tableCellDivider"),n.consume(L),n.exit("tableCellDivider"),_):L===null||pe(L)?(n.exit("tableRow"),i(L)):Te(L)?Me(n,_,"whitespace")(L):(n.enter("data"),K(L))}function K(L){return L===null||L===124||Ie(L)?(n.exit("data"),_(L)):(n.consume(L),L===92?ie:K)}function ie(L){return L===92||L===124?(n.consume(L),K):K(L)}}function B4(n,i){let r=-1,u=!0,s=0,p=[0,0,0,0],f=[0,0,0,0],d=!1,m=0,h,b,x;const v=new N4;for(;++r<n.length;){const k=n[r],j=k[1];k[0]==="enter"?j.type==="tableHead"?(d=!1,m!==0&&(Nm(v,i,m,h,b),b=void 0,m=0),h={type:"table",start:Object.assign({},j.start),end:Object.assign({},j.end)},v.add(r,0,[["enter",h,i]])):j.type==="tableRow"||j.type==="tableDelimiterRow"?(u=!0,x=void 0,p=[0,0,0,0],f=[0,r+1,0,0],d&&(d=!1,b={type:"tableBody",start:Object.assign({},j.start),end:Object.assign({},j.end)},v.add(r,0,[["enter",b,i]])),s=j.type==="tableDelimiterRow"?2:b?3:1):s&&(j.type==="data"||j.type==="tableDelimiterMarker"||j.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(p[1]!==0&&(f[0]=f[1],x=tu(v,i,p,s,void 0,x),p=[0,0,0,0]),f[2]=r)):j.type==="tableCellDivider"&&(u?u=!1:(p[1]!==0&&(f[0]=f[1],x=tu(v,i,p,s,void 0,x)),p=f,f=[p[1],r,0,0])):j.type==="tableHead"?(d=!0,m=r):j.type==="tableRow"||j.type==="tableDelimiterRow"?(m=r,p[1]!==0?(f[0]=f[1],x=tu(v,i,p,s,r,x)):f[1]!==0&&(x=tu(v,i,f,s,r,x)),s=0):s&&(j.type==="data"||j.type==="tableDelimiterMarker"||j.type==="tableDelimiterFiller")&&(f[3]=r)}for(m!==0&&Nm(v,i,m,h,b),v.consume(i.events),r=-1;++r<i.events.length;){const k=i.events[r];k[0]==="enter"&&k[1].type==="table"&&(k[1]._align=O4(i.events,r))}return n}function tu(n,i,r,u,s,p){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",d="tableContent";r[0]!==0&&(p.end=Object.assign({},ya(i.events,r[0])),n.add(r[0],0,[["exit",p,i]]));const m=ya(i.events,r[1]);if(p={type:f,start:Object.assign({},m),end:Object.assign({},m)},n.add(r[1],0,[["enter",p,i]]),r[2]!==0){const h=ya(i.events,r[2]),b=ya(i.events,r[3]),x={type:d,start:Object.assign({},h),end:Object.assign({},b)};if(n.add(r[2],0,[["enter",x,i]]),u!==2){const v=i.events[r[2]],k=i.events[r[3]];if(v[1].end=Object.assign({},k[1].end),v[1].type="chunkText",v[1].contentType="text",r[3]>r[2]+1){const j=r[2]+1,Y=r[3]-r[2]-1;n.add(j,Y,[])}}n.add(r[3]+1,0,[["exit",x,i]])}return s!==void 0&&(p.end=Object.assign({},ya(i.events,s)),n.add(s,0,[["exit",p,i]]),p=void 0),p}function Nm(n,i,r,u,s){const p=[],f=ya(i.events,r);s&&(s.end=Object.assign({},f),p.push(["exit",s,i])),u.end=Object.assign({},f),p.push(["exit",u,i]),n.add(r+1,0,p)}function ya(n,i){const r=n[i],u=r[0]==="enter"?"start":"end";return r[1][u]}const U4={name:"tasklistCheck",tokenize:q4};function H4(){return{text:{91:U4}}}function q4(n,i,r){const u=this;return s;function s(m){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?r(m):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(m),n.exit("taskListCheckMarker"),p)}function p(m){return Ie(m)?(n.enter("taskListCheckValueUnchecked"),n.consume(m),n.exit("taskListCheckValueUnchecked"),f):m===88||m===120?(n.enter("taskListCheckValueChecked"),n.consume(m),n.exit("taskListCheckValueChecked"),f):r(m)}function f(m){return m===93?(n.enter("taskListCheckMarker"),n.consume(m),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),d):r(m)}function d(m){return pe(m)?i(m):Te(m)?n.check({tokenize:Y4},i,r)(m):r(m)}}function Y4(n,i,r){return Me(n,u,"whitespace");function u(s){return s===null?r(s):i(s)}}function G4(n){return Wm([d4(),w4(),D4(n),L4(),H4()])}const V4={};function X4(n){const i=this,r=n||V4,u=i.data(),s=u.micromarkExtensions||(u.micromarkExtensions=[]),p=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);s.push(G4(r)),p.push(c4()),f.push(s4(r))}const Gg="https://openrouter-backend.huytruong.workers.dev/v1/portfolio/chat",_m="truong-1234567890",I4=/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(Gg);function Q4(n){if(!n||typeof n!="object")return"Sorry, I couldn't get a response right now.";const i=n;return i.reply??i.message??i.answer??i.data?.reply??i.choices?.[0]?.message?.content??"Sorry, I couldn't get a response right now."}function Z4(){const[n,i]=me.useState(!1),[r,u]=me.useState(!1),[s,p]=me.useState(!1),[f,d]=me.useState([]),[m,h]=me.useState(""),[b,x]=me.useState(!1),[v,k]=me.useState(null),[j,Y]=me.useState(""),I=me.useRef(null),D=me.useRef(null);me.useEffect(()=>{if(v===null)return;if(j.length>=v.length){k(null);return}const H=Math.max(1,Math.floor(v.length/120)),ae=setTimeout(()=>{Y(v.slice(0,j.length+H))},16);return()=>clearTimeout(ae)},[v,j]),me.useEffect(()=>{n&&setTimeout(()=>{I.current?.scrollIntoView({behavior:"smooth"}),D.current?.focus()},50)},[f,n]),me.useEffect(()=>{const H=window.setTimeout(()=>{p(!0)},5e3);return()=>{window.clearTimeout(H)}},[]);const F=async()=>{const H=m.trim();if(!H||b)return;const ae=[...f,{role:"user",text:H}];d(ae),h(""),x(!0);try{const le=await fetch(Gg,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":_m},body:JSON.stringify({question:H})}),B=await le.json();if(!le.ok||B?.error){const K=B?.error?.message??`HTTP ${le.status}`;d(ie=>[...ie,{role:"model",text:`API error: ${K}`}]);return}const _=Q4(B);d(K=>[...K,{role:"model",text:_}]),Y(""),k(_)}catch(le){const B=typeof window<"u"&&!["localhost","127.0.0.1"].includes(window.location.hostname),_=I4&&B?"Chat server is set to localhost, so it only works on your machine. Deploy the proxy to a public URL and update VITE_CHAT_PROXY_URL before publishing.":`Connection error: ${le instanceof Error?le.message:String(le)}`;d(K=>[...K,{role:"model",text:_}])}finally{x(!1)}};return y.jsxs(y.Fragment,{children:[n?y.jsxs("div",{className:`chatbotWindow${r?" isFullscreen":""}`,children:[y.jsxs("div",{className:"chatbotHeader",children:[y.jsx("span",{className:"chatbotTitle",children:"Miko • AI assistant"}),y.jsxs("div",{className:"chatbotHeaderActions",children:[y.jsx("button",{className:"chatbotControl",onClick:()=>u(H=>!H),"aria-label":r?"Exit full screen":"Open full screen",title:r?"Exit full screen":"Open full screen",children:r?y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("polyline",{points:"9 3 3 3 3 9"}),y.jsx("line",{x1:"3",y1:"3",x2:"10",y2:"10"}),y.jsx("polyline",{points:"15 21 21 21 21 15"}),y.jsx("line",{x1:"14",y1:"14",x2:"21",y2:"21"})]}):y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("polyline",{points:"15 3 21 3 21 9"}),y.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),y.jsx("polyline",{points:"9 21 3 21 3 15"}),y.jsx("line",{x1:"10",y1:"14",x2:"3",y2:"21"})]})}),y.jsx("button",{className:"chatbotClose",onClick:()=>{i(!1),u(!1)},"aria-label":"Close chat",title:"Close",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),y.jsxs("div",{className:"chatbotMessages",children:[f.length===0?y.jsx("p",{className:"chatbotEmpty",children:"Ask me anything about Truong — projects, skills, career..."}):null,f.map((H,ae)=>{const B=v!==null&&ae===f.length-1&&H.role==="model"?j:H.text;return y.jsx("div",{className:`chatbotMsg chatbotMsg--${H.role}`,children:H.role==="model"?y.jsx(D2,{remarkPlugins:[X4],components:{a:({..._})=>y.jsx("a",{..._,target:"_blank",rel:"noreferrer"})},children:B}):y.jsx("p",{children:H.text})},ae)}),b?y.jsx("div",{className:"chatbotMsg chatbotMsg--model",children:y.jsxs("span",{className:"chatbotTyping",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]})}):null,y.jsx("div",{ref:I})]}),y.jsxs("div",{className:"chatbotInputRow",children:[y.jsx("input",{ref:D,className:"chatbotInput",value:m,onChange:H=>h(H.target.value),onKeyDown:H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),F())},placeholder:"Ask a question...",disabled:b||v!==null,autoComplete:"off"}),y.jsx("button",{className:"chatbotSend",onClick:F,disabled:b||v!==null||!m.trim(),"aria-label":"Send",children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),y.jsx("polyline",{points:"5 12 12 5 19 12"})]})})]})]}):null,!n&&s?y.jsxs("div",{className:"chatbotTooltip",role:"status","aria-live":"polite",children:[y.jsx("div",{className:"chatbotTooltipTitle",children:"Hi, I am Miko"}),y.jsx("p",{children:"AI assistant for Truong, ask me anything..."}),y.jsx("button",{type:"button",className:"chatbotTooltipClose","aria-label":"Dismiss intro",onClick:()=>p(!1),children:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}):null,y.jsx("button",{className:`chatbotFab${n?" chatbotFab--open":""}`,onClick:()=>{p(!1),i(H=>!H),n&&u(!1)},"aria-label":n?"Close chat":"Chat with AI",children:n?y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):y.jsx("span",{className:"chatbotMascot","aria-hidden":"true",children:y.jsxs("svg",{className:"chatbotMascotBody",viewBox:"0 0 72 72",fill:"none",children:[y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"mikoHead",x1:"18",y1:"14",x2:"54",y2:"58",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"0",stopColor:"#7be9ff"}),y.jsx("stop",{offset:"1",stopColor:"#1f90ff"})]}),y.jsxs("linearGradient",{id:"mikoVisor",x1:"22",y1:"28",x2:"50",y2:"40",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{offset:"0",stopColor:"#0f2b5f"}),y.jsx("stop",{offset:"1",stopColor:"#163a7a"})]})]}),y.jsx("line",{x1:"36",y1:"8",x2:"36",y2:"14",stroke:"#9feeff",strokeWidth:"3",strokeLinecap:"round"}),y.jsx("circle",{cx:"36",cy:"7",r:"3",fill:"#b6f4ff"}),y.jsx("rect",{x:"17",y:"14",width:"38",height:"40",rx:"14",fill:"url(#mikoHead)"}),y.jsx("rect",{x:"22",y:"27",width:"28",height:"14",rx:"7",fill:"url(#mikoVisor)"}),y.jsx("circle",{cx:"30",cy:"34",r:"3.2",fill:"#8ef3ff"}),y.jsx("circle",{cx:"42",cy:"34",r:"3.2",fill:"#8ef3ff"}),y.jsx("rect",{x:"30",y:"44",width:"12",height:"3",rx:"1.5",fill:"#e3fbff",fillOpacity:"0.92"}),y.jsx("rect",{x:"11",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"}),y.jsx("rect",{x:"54",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"})]})})})]})}const F4="/my-portfolio/",ut=n=>`${F4}${n.replace(/^\/+/,"")}`,K4=[{id:"p1",title:"FPS Zombie Online",year:2025,role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:ut("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[ut("/screenshots/fps/1.jpg"),ut("/screenshots/fps/2.jpg"),ut("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",year:2024,role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:ut("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[ut("/screenshots/tressette/1.jpg"),ut("/screenshots/tressette/2.jpg"),ut("/screenshots/tressette/3.jpg")]},{id:"p0",title:"Pixel AI",year:2026,role:"",statusLabel:"Under Development",description:"A research-driven pixel game prototype focused on applying AI to generate world elements, shape map-building workflows, and explore zombie-defense gameplay ideas.",tech:["SDL 3","C++","Codex"],previewMp4:ut("/videos/pixelai.mp4"),previewGif:"",youtubeUrl:"",githubUrl:"https://github.com/FCBTruong/love-deaths-ai",downloadUrl:"",screenshots:[ut("/screenshots/pixelai/1.jpg"),ut("/screenshots/pixelai/2.jpg"),ut("/screenshots/pixelai/3.jpg")]},{id:"p3",title:"Thoi Loan Online",year:2021,role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:ut("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[ut("/screenshots/thoiloan/1.jpg"),ut("/screenshots/thoiloan/2.jpg"),ut("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",year:2019,role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:ut("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",year:2019,role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["SDL","C++"],previewMp4:ut("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",year:2020,role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:ut("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}],J4="/my-portfolio/",va=n=>`${J4}${n.replace(/^\/+/,"")}`,$4=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Onesoft - Monster Studio",location:"Ha Noi, Viet Nam",logo:va("/company/onesoft.png"),summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Monkey Junior",location:"Ha Noi, Viet Nam",logo:va("/company/monkeyjunior.png"),summary:"Continued game development experience with Unity, focusing on gameplay systems, performance, and user experience.",highlights:["Developed puzzle game features and gameplay mechanics using Unity.","Optimized game performance, responsiveness, and user experience.","Participated in the full development cycle from feature design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",location:"Ha Noi, Viet Nam",logo:va("/company/vng.png"),summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay, UI, and online systems for large-scale titles.","Developed metagame features, including events, shop flows, and payment-related features.","Collaborated with artists, designers, PMs, and engineers to brainstorm, develop, and deliver game features.","Integrated third-party services such as Firebase, CDN, SDKs, and log tracking tools.","Debugged production issues, fixed bugs, refactored code, and built tools to support live game operations.","Analyzed player behavior to improve gameplay, UI, and overall player experience.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"VIET NAM DIGITAL TECHNOLOGY AND INVESTMENT JOINT STOCK COMPANY",location:"Ha Noi, Viet Nam",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Built scalable backend and data platforms providing shared services for multiple teams.","Designed and operated reliable distributed systems with FastAPI, PostgreSQL, Docker, and Kubernetes.","Developed large-scale ETL workflows and Airflow-based data pipelines.","Improved delivery efficiency through CI/CD, automation, and production workflow optimization.","Mentored engineers and led backend/platform development from design to production."]},{period:"Nov 2025 - Present",title:"Self Development",org:"Independent Learning & Project Building",location:"Ha Noi, Viet Nam",summary:"Focused on personal growth through building projects, deepening Unreal Engine 5 skills, improving English communication, and sharpening system thinking.",highlights:["Built personal game projects to practice end-to-end architecture and execution.","Improved Unreal Engine 5 proficiency through regular prototyping and technical experimentation.","Researched AI tools and applied them to optimize workflows and automate repetitive tasks.","Improved English communication for technical discussions and documentation.","Strengthened system thinking by designing scalable gameplay and backend flows."]}],W4=[{school:"University of Engineering and Technology (VNU)",degree:"Bachelor",area:"Software Engineering",period:"Aug 2018 - Dec 2023",location:"Ha Noi, Viet Nam",logo:va("/uet.png")}],P4=[{title:"IELTS 7.5",issuer:"British Council",date:"2025",logo:va("/britsh-council.png")}],e3=[{title:"Third Prize Chess Province",location:"Nghe An, Viet Nam",date:"2018",logo:va("/chess.png")}];function Vg(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function t3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function ms(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function Om(){return y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"9"}),y.jsx("path",{d:"M3 12h18"}),y.jsx("path",{d:"M12 3a15 15 0 0 1 0 18"}),y.jsx("path",{d:"M12 3a15 15 0 0 0 0 18"})]})}function n3(){return y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"}),y.jsx("circle",{cx:"12",cy:"11",r:"2.3"})]})}function l3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:y.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.8.62 2.66a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.66.62A2 2 0 0 1 22 16.92Z"})})}function a3(){return y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M7 10h10a4 4 0 0 1 3.88 4.97l-.63 2.5A2 2 0 0 1 18.3 19H17a2 2 0 0 1-1.6-.8l-1.1-1.47a3 3 0 0 0-4.8 0L8.4 18.2A2 2 0 0 1 6.8 19H5.7a2 2 0 0 1-1.94-1.53l-.63-2.5A4 4 0 0 1 7 10Z"}),y.jsx("path",{d:"M8 13v4"}),y.jsx("path",{d:"M6 15h4"}),y.jsx("circle",{cx:"16.5",cy:"14.5",r:".8",fill:"currentColor",stroke:"none"}),y.jsx("circle",{cx:"18.5",cy:"16.5",r:".8",fill:"currentColor",stroke:"none"})]})}function i3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function r3(){return y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:y.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function u3(){return y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:[y.jsx("path",{d:"M3 21h18"}),y.jsx("path",{d:"M5 21V7.5A1.5 1.5 0 0 1 6.5 6H10v15"}),y.jsx("path",{d:"M10 21V4.5A1.5 1.5 0 0 1 11.5 3h6A1.5 1.5 0 0 1 19 4.5V21"}),y.jsx("path",{d:"M7.5 9.5h.01M7.5 12.5h.01M7.5 15.5h.01M13.5 6.5h.01M16.5 6.5h.01M13.5 9.5h.01M16.5 9.5h.01M13.5 12.5h.01M16.5 12.5h.01"})]})}function o3(){return y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"}),y.jsx("path",{d:"M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"})]})}function c3(){return y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"m3 8.5 9-4.5 9 4.5-9 4.5-9-4.5Z"}),y.jsx("path",{d:"M6.5 10.8V15c0 1.5 2.4 3 5.5 3s5.5-1.5 5.5-3v-4.2"})]})}function s3(){return y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M8 3h8l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"}),y.jsx("path",{d:"M16 3v5h5"}),y.jsx("path",{d:"M9.5 14h5"}),y.jsx("path",{d:"M9.5 17h4"})]})}function f3(){return y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("path",{d:"M8 4h8v3a4 4 0 0 1-8 0V4Z"}),y.jsx("path",{d:"M10 15h4"}),y.jsx("path",{d:"M12 11v4"}),y.jsx("path",{d:"M8 19h8"}),y.jsx("path",{d:"M16 6h2a2 2 0 0 1 0 4h-2"}),y.jsx("path",{d:"M8 6H6a2 2 0 0 0 0 4h2"})]})}function p3(){return y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"1.6",fill:"currentColor",stroke:"none"}),y.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2"}),y.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(60 12 12)"}),y.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(120 12 12)"})]})}function d3(){return y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[y.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),y.jsx("path",{d:"M9.2 9h6.1v1.8h-2.1V17h-1.9v-6.2H9.2V9Zm9.8.2v1.8c-.7-.4-1.3-.5-1.8-.5-.4 0-.8.1-1 .2-.2.1-.3.3-.3.5 0 .1.1.3.2.4.1.1.4.2.8.3l.6.1c.9.2 1.6.5 2 .9.4.4.6.9.6 1.6 0 .9-.3 1.6-1 2.1-.7.5-1.6.7-2.8.7-.5 0-1 0-1.5-.1-.5-.1-1-.2-1.6-.4v-1.9c.6.3 1.1.5 1.6.7.5.1 1 .2 1.5.2.5 0 .9-.1 1.1-.2.3-.1.4-.3.4-.6 0-.2-.1-.3-.2-.5-.1-.1-.4-.2-.9-.3l-.5-.1c-.8-.2-1.4-.5-1.8-.8-.4-.4-.6-.9-.6-1.6 0-.8.3-1.5.9-1.9.6-.5 1.5-.7 2.6-.7.4 0 .8 0 1.3.1.4.1.9.2 1.4.3Z",fill:"#fff"})]})}function h3(){return y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[y.jsx("path",{d:"M22 5 13.2 20.5a1.4 1.4 0 0 1-2.4 0L2 5.1a.8.8 0 0 1 .9-1.2l8.9 1.6c.1 0 .3 0 .4 0l8.9-1.6A.8.8 0 0 1 22 5Z",fill:"url(#vite-grad-a)"}),y.jsx("path",{d:"m16.6 2.2-4.8.9a.4.4 0 0 0-.3.3l-.3 2.5c0 .2.1.4.3.4l1.3.2c.2 0 .3.2.3.4l-.8 5.6c0 .4.5.6.8.3l.2-.3 4.3-8.7c.2-.3-.1-.7-.5-.6Z",fill:"url(#vite-grad-b)"}),y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"vite-grad-a",x1:"2",y1:"4",x2:"18",y2:"20",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{stopColor:"#41D1FF"}),y.jsx("stop",{offset:"1",stopColor:"#BD34FE"})]}),y.jsxs("linearGradient",{id:"vite-grad-b",x1:"11",y1:"2",x2:"16",y2:"13",gradientUnits:"userSpaceOnUse",children:[y.jsx("stop",{stopColor:"#FFEA83"}),y.jsx("stop",{offset:".5",stopColor:"#FFDD35"}),y.jsx("stop",{offset:"1",stopColor:"#FFA800"})]})]})]})}function m3({src:n,alt:i,onClose:r}){return me.useEffect(()=>{const u=s=>{s.key==="Escape"&&r()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[r]),y.jsxs("div",{className:"lightboxOverlay",onClick:r,role:"dialog","aria-modal":"true",children:[y.jsx("img",{className:"lightboxImg",src:n,alt:i,onClick:u=>u.stopPropagation()}),y.jsx("button",{className:"lightboxClose",onClick:r,"aria-label":"Close",children:"×"})]})}function g3({title:n,previewMp4:i,previewGif:r,youtubeUrl:u}){return y.jsxs("div",{className:"previewCard",children:[i?y.jsx("video",{className:"previewMedia",src:i,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${n} preview video`}):r?y.jsx("img",{src:r,alt:`${n} preview`,className:"previewMedia",loading:"lazy"}):y.jsx("div",{className:"previewPlaceholder",children:"No preview"}),u?y.jsx("a",{className:"previewOverlayBtn",href:u,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${n}`,children:"Watch Full Demo"}):null]})}function x3(){return y.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[y.jsx("span",{className:"sceneSkyTint"}),y.jsx("span",{className:"sceneSun"}),y.jsx("span",{className:"sceneRidge ridgeFar"}),y.jsx("span",{className:"sceneRidge ridgeNear"}),y.jsx("span",{className:"scenePine pine1"}),y.jsx("span",{className:"scenePine pine2"}),y.jsx("span",{className:"scenePine pine3"}),y.jsx("span",{className:"sceneCloud cloudA"}),y.jsx("span",{className:"sceneCloud cloudB"}),y.jsx("span",{className:"sceneDust dust1"}),y.jsx("span",{className:"sceneDust dust2"}),y.jsx("span",{className:"sceneDust dust3"}),y.jsx("span",{className:"sceneDust dust4"}),y.jsx("span",{className:"sceneDust dust5"}),y.jsx("span",{className:"sceneLeaf leaf1"}),y.jsx("span",{className:"sceneLeaf leaf2"}),y.jsx("span",{className:"sceneLeaf leaf3"}),y.jsx("span",{className:"sceneLeaf leaf4"}),y.jsx("span",{className:"sceneLeaf leaf5"}),y.jsx("span",{className:"sceneLeaf leaf6"}),y.jsx("span",{className:"sceneWind wind1"}),y.jsx("span",{className:"sceneWind wind2"}),y.jsx("span",{className:"sceneWind wind3"})]})}function y3({theme:n,onToggle:i}){const r=n==="dark";return y.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:i,"aria-label":r?"Switch to light theme":"Switch to dark theme",title:r?"Light mode":"Dark mode",children:r?y.jsx(i3,{}):y.jsx(r3,{})})}const ts=[{code:"en",label:"English",flag:"🇺🇸"},{code:"ja",label:"日本語",flag:"🇯🇵"},{code:"vi",label:"Tiếng Việt",flag:"🇻🇳"}],b3={en:{nav:{about:"About Me",projects:"Projects",career:"Career",resume:"Résumé"},intro:{greeting:"Hi, I'm",body:"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world."},career:{now:"Now",start:"Start",education:"Education",certificates:"Certificates",awards:"Awards",showDetails:"Show details",hideDetails:"Hide details"},project:{downloadPlay:"Download / Play",github:"GitHub"},cv:{back:"← Back",title:"Résumé",openTab:"Open in new tab",loading:"Loading CV...",loadError:"Unable to load CV data."},footer:{quote:'"Every small step shapes something great"'}},ja:{nav:{about:"自己紹介",projects:"プロジェクト",career:"キャリア",resume:"履歴書"},intro:{greeting:"こんにちは、",body:"オンラインマルチプレイヤーゲームの開発を行いながら、自らもアクティブなプレイヤーとして活動しています。プレイヤーとしての視点が、ゲームプレイや全体的な体験への考え方を形づくっています。素晴らしいゲームは一人では作れないと知っており、情熱あるチームで貢献し、共に成長できる環境を求めています。世界中のプレイヤーに意味ある体験を届けることが目標です。"},career:{now:"現在",start:"始まり",education:"学歴",certificates:"資格・認定",awards:"受賞・実績",showDetails:"詳細を表示",hideDetails:"詳細を閉じる"},project:{downloadPlay:"ダウンロード / プレイ",github:"GitHub"},cv:{back:"← 戻る",title:"履歴書",openTab:"新しいタブで開く",loading:"CVを読み込み中...",loadError:"CVデータを読み込めませんでした。"},footer:{quote:"「一歩一歩が偉大なものを形づくる」"}},vi:{nav:{about:"Giới Thiệu",projects:"Dự Án",career:"Sự Nghiệp",resume:"Hồ Sơ"},intro:{greeting:"Xin chào, tôi là",body:"Tôi phát triển game nhiều người chơi trực tuyến và bản thân cũng là một game thủ tích cực. Góc nhìn người chơi ảnh hưởng đến cách tôi nghĩ về gameplay và trải nghiệm tổng thể. Tôi hiểu rằng những game hay không thể tạo ra một mình, và tôi muốn làm việc với một đội ngũ đam mê để cùng đóng góp và phát triển. Mục tiêu của tôi là tạo ra những trải nghiệm có ý nghĩa cho người chơi trên toàn thế giới."},career:{now:"Hiện Tại",start:"Bắt Đầu",education:"Học Vấn",certificates:"Chứng Chỉ",awards:"Giải Thưởng",showDetails:"Xem chi tiết",hideDetails:"Ẩn chi tiết"},project:{downloadPlay:"Tải Xuống / Chơi",github:"GitHub"},cv:{back:"← Quay Lại",title:"Hồ Sơ",openTab:"Mở Tab Mới",loading:"Đang tải CV...",loadError:"Không thể tải dữ liệu CV."},footer:{quote:'"Mỗi bước nhỏ đều tạo nên điều vĩ đại"'}}};function v3(){const n=localStorage.getItem("language");if(n&&(n==="en"||n==="ja"||n==="vi"))return n;const i=navigator.language.toLowerCase();return i.startsWith("ja")?"ja":i.startsWith("vi")?"vi":"en"}function Xg(n){return b3[n]}const Ig=me.createContext({lang:"en",setLang:()=>{},tr:Xg("en")});function Ls(){return me.useContext(Ig)}function Lm({code:n}){return n==="en"?y.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[y.jsx("defs",{children:y.jsx("clipPath",{id:"flagCircleEn",children:y.jsx("circle",{cx:"10",cy:"10",r:"10"})})}),y.jsxs("g",{clipPath:"url(#flagCircleEn)",children:[y.jsx("rect",{width:"20",height:"20",fill:"#b22234"}),y.jsx("rect",{y:"2",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"6",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"10",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"14",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{y:"18",width:"20",height:"2",fill:"#fff"}),y.jsx("rect",{width:"9",height:"9",fill:"#3c3b6e"})]})]}):n==="ja"?y.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[y.jsx("circle",{cx:"10",cy:"10",r:"9.6",fill:"#fff",stroke:"rgba(16,24,40,0.12)",strokeWidth:"0.8"}),y.jsx("circle",{cx:"10",cy:"10",r:"4.3",fill:"#bc002d"})]}):y.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[y.jsx("defs",{children:y.jsx("clipPath",{id:"flagCircleVi",children:y.jsx("circle",{cx:"10",cy:"10",r:"10"})})}),y.jsxs("g",{clipPath:"url(#flagCircleVi)",children:[y.jsx("rect",{width:"20",height:"20",fill:"#da251d"}),y.jsx("path",{d:"M10 5.1L11.2 8.1H14.4L11.8 10.1L12.8 13.1L10 11.3L7.2 13.1L8.2 10.1L5.6 8.1H8.8L10 5.1Z",fill:"#ffde00"})]})]})}function S3(){return y.jsx("svg",{className:"langChevron",viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M2 3.5L5 6.5L8 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function k3(){return y.jsx("svg",{className:"langOptionCheck",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function w3(){const{lang:n,setLang:i}=Ls(),[r,u]=me.useState(!1),s=me.useRef(null),p=ts.find(f=>f.code===n)??ts[0];return me.useEffect(()=>{if(!r)return;const f=d=>{s.current&&!s.current.contains(d.target)&&u(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[r]),y.jsxs("div",{className:"langSwitcher",ref:s,children:[y.jsxs("button",{type:"button",className:"langSwitcherBtn",onClick:()=>u(f=>!f),"aria-haspopup":"listbox","aria-expanded":r,"aria-label":`Language: ${p.label}`,title:p.label,children:[y.jsx(Lm,{code:p.code}),y.jsx("span",{className:"langCode",children:p.code}),y.jsx(S3,{})]}),r&&y.jsx("div",{className:"langDropdown",role:"listbox","aria-label":"Select language",children:ts.map(f=>y.jsxs("button",{type:"button",role:"option","aria-selected":f.code===n,className:`langOption${f.code===n?" active":""}`,onClick:()=>{i(f.code),u(!1)},children:[y.jsx(Lm,{code:f.code}),y.jsx("span",{className:"langLabel",children:f.label}),f.code===n&&y.jsx(k3,{})]},f.code))})]})}const E3=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],ns=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function C3(n){const i=[...n];for(let r=i.length-1;r>0;r--){const u=Math.floor(Math.random()*(r+1));[i[r],i[u]]=[i[u],i[r]]}return i}function Rm(n){const i=E3.slice(0,n);return C3([...i,...i].map((r,u)=>({id:u,symbol:r,isFlipped:!1,isMatched:!1})))}function T3(){const[n,i]=Xe.useState(0),r=ns[n],u=n===ns.length-1,[s,p]=Xe.useState(()=>Rm(r.cols*r.rows/2)),[f,d]=Xe.useState([]),[m,h]=Xe.useState(0),[b,x]=Xe.useState(0),[v,k]=Xe.useState(!1),[j,Y]=Xe.useState(!1),[I,D]=Xe.useState(!1),F=Xe.useRef(null),H=Xe.useRef(null),ae=Xe.useRef(0),le=Xe.useRef(null),B=Xe.useCallback(()=>{if(typeof window>"u")return null;const A=window.AudioContext||window.webkitAudioContext;return A?(le.current||(le.current=new A),le.current.state==="suspended"&&le.current.resume(),le.current):null},[]),_=Xe.useCallback((A,Z,ne,ge,E=0)=>{const C=B();if(!C)return;const q=C.createOscillator(),w=C.createGain(),$=C.currentTime+E;q.type=ne,q.frequency.setValueAtTime(A,$),w.gain.setValueAtTime(1e-4,$),w.gain.exponentialRampToValueAtTime(ge,$+.02),w.gain.exponentialRampToValueAtTime(1e-4,$+Z),q.connect(w),w.connect(C.destination),q.start($),q.stop($+Z+.02)},[B]),K=Xe.useCallback(()=>{_(660,.12,"triangle",.05,0),_(880,.12,"triangle",.04,.08)},[_]),ie=Xe.useCallback(()=>{_(420,.05,"triangle",.018,0)},[_]),L=Xe.useCallback(()=>{_(523.25,.16,"sine",.06,0),_(659.25,.16,"sine",.06,.12),_(783.99,.22,"sine",.07,.24)},[_]);Xe.useEffect(()=>{v&&!j&&s.every(A=>A.isMatched)&&Y(!0)},[s,v,j]),Xe.useEffect(()=>(v&&!j&&(F.current=setInterval(()=>x(A=>A+1),1e3)),()=>{F.current&&clearInterval(F.current)}),[v,j]),Xe.useEffect(()=>{j&&L()},[j,L]),Xe.useEffect(()=>{if(!j)return;const A=H.current;if(!A)return;const Z=A.getContext("2d");if(!Z)return;A.width=A.offsetWidth,A.height=A.offsetHeight;const ne=[],ge=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],E=($,re)=>{for(let se=0;se<52;se++){const ke=Math.PI*2*se/52,Ye=2+Math.random()*4.5;ne.push({x:$,y:re,vx:Math.cos(ke)*Ye,vy:Math.sin(ke)*Ye,alpha:1,color:ge[Math.floor(Math.random()*ge.length)],r:2+Math.random()*2})}};let C=0;const q=setInterval(()=>{E(A.width*(.15+Math.random()*.7),A.height*(.1+Math.random()*.55)),++C>=7&&clearInterval(q)},320),w=()=>{Z.clearRect(0,0,A.width,A.height);for(let $=ne.length-1;$>=0;$--){const re=ne[$];if(re.x+=re.vx,re.y+=re.vy,re.vy+=.09,re.alpha-=.016,re.alpha<=0){ne.splice($,1);continue}Z.globalAlpha=re.alpha,Z.fillStyle=re.color,Z.beginPath(),Z.arc(re.x,re.y,re.r,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,ae.current=requestAnimationFrame(w)};return w(),()=>{clearInterval(q),cancelAnimationFrame(ae.current)}},[j]);const W=Xe.useCallback(A=>{F.current&&clearInterval(F.current);const Z=ns[A];i(A),p(Rm(Z.cols*Z.rows/2)),d([]),h(0),x(0),k(!1),Y(!1),D(!1)},[]),te=Xe.useCallback(A=>{const Z=s.find(E=>E.id===A);if(!Z||Z.isFlipped||Z.isMatched||I)return;if(v||k(!0),ie(),p(E=>E.map(C=>C.id===A?{...C,isFlipped:!0}:C)),f.length===0){d([A]);return}const ne=f[0],ge=s.find(E=>E.id===ne);d([]),h(E=>E+1),ge.symbol===Z.symbol?(K(),p(E=>E.map(C=>C.id===ne||C.id===A?{...C,isFlipped:!0,isMatched:!0}:C))):(D(!0),setTimeout(()=>{p(E=>E.map(C=>C.id===ne||C.id===A?{...C,isFlipped:!1}:C)),D(!1)},900))},[s,f,I,v,ie,K]),Se=A=>`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`,oe=()=>y.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[y.jsx("path",{d:"M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z",fill:"currentColor"}),y.jsx("circle",{cx:"8",cy:"7",r:"1.6",fill:"currentColor"}),y.jsx("circle",{cx:"11.2",cy:"5.8",r:"1.5",fill:"currentColor"}),y.jsx("circle",{cx:"14.8",cy:"5.8",r:"1.5",fill:"currentColor"}),y.jsx("circle",{cx:"18",cy:"7",r:"1.6",fill:"currentColor"})]}),P=()=>y.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),y.jsx("path",{d:"M12 7.8v4.8l3.2 1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]});return y.jsxs("div",{className:"memoryGame",children:[y.jsxs("div",{className:"memoryGameHeader",children:[y.jsxs("span",{className:"memoryGameLevel",children:["Lv ",n+1," · ",r.n,"×",r.n]}),y.jsxs("span",{className:"memoryGameStat",children:[y.jsx(oe,{})," ",y.jsx("strong",{children:m})]}),y.jsxs("span",{className:"memoryGameStat",children:[y.jsx(P,{})," ",y.jsx("strong",{children:Se(b)})]})]}),y.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${r.cols}, ${r.cell}px)`,gridTemplateRows:`repeat(${r.rows}, ${r.cell}px)`},children:s.map(A=>y.jsx("button",{className:`memoryCard${A.isFlipped||A.isMatched?" flipped":""}${A.isMatched?" matched":""}`,onClick:()=>te(A.id),style:{width:r.cell,height:r.cell},"aria-label":A.isFlipped||A.isMatched?A.symbol:"Hidden card",children:y.jsxs("span",{className:"memoryCardInner",children:[y.jsx("span",{className:"memoryCardBack"}),y.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(r.cell*.44)},children:A.symbol})]})},A.id))}),j&&y.jsxs("div",{className:"memoryGameModal",children:[y.jsx("canvas",{ref:H,className:"memoryGameFireworks"}),y.jsxs("div",{className:"memoryGameModalBox",children:[y.jsx("div",{className:"memoryGameModalEmoji",children:u?"🏆":"🎉"}),y.jsx("div",{className:"memoryGameModalTitle",children:u?"You beat all levels!":`Level ${n+1} clear!`}),y.jsxs("div",{className:"memoryGameModalSub",children:[m," moves · ",Se(b)]}),!u&&y.jsx("button",{className:"memoryGameModalBtn",onClick:()=>W(n+1),children:"Next Level →"}),y.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>W(0),children:u?"Play Again":"Restart from Lv 1"})]})]})]})}let iu=null,nu=null;async function Qg(){return iu||(nu||(nu=fetch("/my-portfolio/cv.json").then(n=>{if(!n.ok)throw new Error(`Failed to load cv.json: ${n.status}`);return n.json()}).then(n=>(iu=n,n)).catch(n=>{throw nu=null,n})),nu)}function z3(){Qg().catch(()=>{})}function Ei(n){return n.filter(i=>!i.hidden)}function lu({value:n}){return n?y.jsx("div",{className:"cvHtml",dangerouslySetInnerHTML:{__html:n}}):null}function Bm({field:n}){return n.id==="email"?y.jsx(Vg,{}):n.id==="phone"?y.jsx(l3,{}):n.id==="location"?y.jsx(n3,{}):n.id==="website"?y.jsx(Om,{}):n.icon==="github-logo"?y.jsx(ms,{}):n.icon==="game-controller"?y.jsx(a3,{}):y.jsx(Om,{})}function j3(){const{tr:n}=Ls(),[i,r]=Xe.useState(()=>iu),[u,s]=Xe.useState(!1);if(Xe.useEffect(()=>{let v=!0;async function k(){try{s(!1);const j=await Qg();v&&r(j)}catch{v&&s(!0)}}return k(),()=>{v=!1}},[]),!i&&!u)return y.jsx("section",{className:"cvLoadCard",children:y.jsx("p",{children:n.cv.loading})});if(!i)return y.jsx("section",{className:"cvLoadCard cvLoadCard--error",children:y.jsx("p",{children:n.cv.loadError})});const p=i.customSections.find(v=>v.title.toLowerCase().includes("tech")&&!v.hidden),f=[i.basics.location?{id:"location",text:i.basics.location,link:"#resume-location"}:null,i.basics.email?{id:"email",text:i.basics.email,link:`mailto:${i.basics.email}`}:null,i.basics.phone?{id:"phone",text:i.basics.phone,link:`tel:${i.basics.phone}`}:null,i.basics.website?.url?{id:"website",text:i.basics.website.label||i.basics.website.url,link:i.basics.website.url}:null,...i.basics.customFields??[]].filter(v=>!!v),d=Ei(i.sections.experience.items),m=Ei(i.sections.projects.items),h=Ei(i.sections.education.items),b=Ei(i.sections.certifications.items),x=p?Ei(p.items):[];return y.jsxs("article",{className:"cvPaper",children:[y.jsx("header",{className:"cvPaperHeader",children:y.jsxs("div",{className:"cvPaperHeaderMain",children:[y.jsx("h1",{className:"cvHeroName",children:i.basics.name}),y.jsx("p",{className:"cvHeroHeadline",children:i.basics.headline})]})}),f.length?y.jsx("div",{className:"cvPaperMeta",children:f.map(v=>v.id==="location"?y.jsxs("div",{className:"cvContactItem cvContactItem--static",children:[y.jsx("span",{className:"cvContactIcon",children:y.jsx(Bm,{field:v})}),y.jsx("span",{children:v.text})]},v.id):y.jsxs("a",{href:v.link,target:"_blank",rel:"noreferrer",className:"cvContactItem",children:[y.jsx("span",{className:"cvContactIcon",children:y.jsx(Bm,{field:v})}),y.jsx("span",{children:v.text})]},v.id))}):null,y.jsxs("div",{className:"cvPaperBody cvPaperBody--stacked",children:[i.summary.hidden?null:y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.summary.title}),y.jsx(lu,{value:i.summary.content})]}),!i.sections.experience.hidden&&d.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.experience.title}),y.jsx("div",{className:"cvList",children:d.map(v=>y.jsxs("article",{className:"cvItemCard",children:[v.company?y.jsx("p",{className:"cvItemCompany",children:v.company}):null,y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.position||v.company}),v.period?y.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),v.location?y.jsx("p",{className:"cvItemSub",children:v.location}):null,y.jsx(lu,{value:v.description})]},v.id))})]}):null,!i.sections.projects.hidden&&m.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.projects.title}),y.jsx("div",{className:"cvList",children:m.map(v=>y.jsxs("article",{className:"cvItemCard",children:[y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.name}),v.period?y.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),v.website?.url?y.jsx("a",{className:"cvItemLink",href:v.website.url,target:"_blank",rel:"noreferrer",children:v.website.label||v.website.url}):null,y.jsx(lu,{value:v.description})]},v.id))})]}):null,x.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:p?.title}),y.jsx("div",{className:"cvList cvTechGrid",children:x.map(v=>y.jsxs("article",{className:"cvItemCard cvTechCard",children:[y.jsx("h3",{children:v.company}),y.jsx(lu,{value:v.description})]},v.id))})]}):null,!i.sections.education.hidden&&h.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.education.title}),y.jsx("div",{className:"cvList",children:h.map(v=>y.jsxs("article",{className:"cvItemCard",children:[y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.school}),v.period?y.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),y.jsxs("p",{className:"cvItemSub",children:[v.degree,v.area?` · ${v.area}`:""]})]},v.id))})]}):null,!i.sections.certifications.hidden&&b.length?y.jsxs("section",{className:"cvMainSection",children:[y.jsx("h2",{className:"cvSectionHeading",children:i.sections.certifications.title}),y.jsx("div",{className:"cvList",children:b.map(v=>y.jsxs("article",{className:"cvItemCard",children:[y.jsxs("div",{className:"cvItemTop",children:[y.jsx("h3",{children:v.title}),v.date?y.jsx("span",{className:"cvItemPeriod",children:v.date}):null]}),y.jsx("p",{className:"cvItemSub",children:v.issuer})]},v.id))})]}):null]})]})}const Sa="/my-portfolio/".replace(/\/$/,"");function Zg(n){return n.startsWith("#/cv")||n.startsWith("#/resume")?"cv":n.startsWith("#/career")?"career":n.startsWith("#/")?"home":null}function Rs(n){return n==="cv"?`${Sa}/resume`:n==="career"?`${Sa}/career`:`${Sa||""}/`}function A3(n){if(!Sa||!n.startsWith(Sa))return n||"/";const i=n.slice(Sa.length);return i?i.startsWith("/")?i:`/${i}`:"/"}function Fg(n){const i=A3(n);return i==="/resume"||i.startsWith("/resume/")?"cv":i==="/career"||i.startsWith("/career/")?"career":"home"}function M3(){return Zg(window.location.hash)??Fg(window.location.pathname)}function D3(){const[n,i]=me.useState(M3());return me.useEffect(()=>{const r=Zg(window.location.hash);if(r){const s=Rs(r);window.history.replaceState({},"",s),i(r)}const u=()=>i(Fg(window.location.pathname));return window.addEventListener("popstate",u),()=>window.removeEventListener("popstate",u)},[]),n}function N3(n){return Rs(n)}function ls(n){const i=Rs(n);window.location.pathname!==i&&(window.history.pushState({},"",i),window.dispatchEvent(new PopStateEvent("popstate")))}function _3(n){return n==="cv"?"resume":n==="career"?"career":"about"}function O3({theme:n,onToggleTheme:i,route:r}){const{tr:u,lang:s}=Ls(),[p,f]=me.useState(null),[d,m]=me.useState(()=>_3(r)),[h,b]=me.useState({}),x=_=>{if(m(_),_==="career"){ls("career");return}if(_==="resume"){ls("cv");return}r!=="home"&&ls("home")},v=me.useMemo(()=>u.intro.body,[u]),[k,j]=me.useState(""),Y=me.useRef(s),[I,D]=me.useState(!1);me.useEffect(()=>{Y.current!==s&&(Y.current=s,j(""))},[s]),me.useEffect(()=>{let K=0,ie;const L=()=>{if(D(!1),K+=1,j(v.slice(0,K)),K>=v.length){D(!1);return}const W=v[K-1],te=W==="."?360:W===","?140:24;D(te>24),ie=window.setTimeout(L,te)};return ie=window.setTimeout(L,24),()=>{D(!1),ie!==void 0&&window.clearTimeout(ie)}},[v]),me.useEffect(()=>{d==="career"&&p&&f(null)},[d,p]),me.useEffect(()=>{z3()},[]),me.useEffect(()=>{if(r==="career"){m("career");return}r==="cv"&&m("resume")},[r]);const F=me.useRef(null);me.useEffect(()=>{if(d!=="career")return;const _=F.current;if(!_)return;const K=_.querySelectorAll(".careerItem"),ie=new IntersectionObserver(L=>{L.forEach(W=>{W.isIntersecting&&(W.target.classList.add("careerItemVisible"),ie.unobserve(W.target))})},{threshold:.12});return K.forEach(L=>ie.observe(L)),()=>ie.disconnect()},[d]);const H=_=>y.jsx("div",{className:`projectList${_?" projectListReveal":""}`,children:K4.map(K=>y.jsxs("div",{className:`projectItem${_?" projectItemReveal":""}`,children:[y.jsx("div",{className:"projectMedia",children:y.jsx(g3,{title:K.title,previewMp4:K.previewMp4,previewGif:K.previewGif,youtubeUrl:K.youtubeUrl})}),y.jsxs("div",{className:"projectInfo",children:[y.jsxs("div",{className:"projectTitleRow",children:[y.jsx("h3",{className:"h3",children:K.title}),K.year?y.jsx("span",{className:"pill year",children:K.year}):null,K.statusLabel?y.jsx("span",{className:"pill progress",children:K.statusLabel}):null,K.role?y.jsx("span",{className:"pill",children:K.role}):null]}),y.jsx("p",{className:"projectDesc",children:K.description}),K.tech?.length?y.jsx("div",{className:"tech",children:K.tech.map(ie=>y.jsx("span",{className:"tag",children:ie},ie))}):null,y.jsxs("div",{className:"projectActions",children:[K.githubUrl?y.jsxs("a",{className:"btn btnIcon",href:K.githubUrl,target:"_blank",rel:"noreferrer",children:[y.jsx(ms,{}),u.project.github]}):null,K.downloadUrl?y.jsx("a",{className:"btn primary",href:K.downloadUrl,target:"_blank",rel:"noreferrer",children:u.project.downloadPlay}):null]})]}),K.screenshots?.length?y.jsx("div",{className:"screenshots fill3",children:K.screenshots.slice(0,3).map((ie,L)=>y.jsx("img",{src:ie,alt:`${K.title} screenshot ${L+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>f({src:ie,alt:`${K.title} screenshot ${L+1}`})},L))}):null]},K.id))},_?"projects-tab-animated":"projects-tab-static"),ae=_=>_.logo?y.jsx("img",{src:_.logo,alt:_.org,className:"careerLogo"}):_.title==="Self Development"?y.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:y.jsx(o3,{})}):y.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:y.jsx(u3,{})}),le=_=>{b(K=>K[_]?{}:{[_]:!0})},B=(_,K)=>{_.key!=="Enter"&&_.key!==" "||(_.preventDefault(),le(K))};return y.jsxs("div",{className:"page",children:[y.jsxs("header",{className:"topbar",children:[y.jsx(x3,{}),y.jsxs("div",{className:"container topbarInner homeTopbarInner",children:[y.jsx("a",{className:"brand",href:N3("home"),children:y.jsx("span",{children:"Portfolio"})}),y.jsxs("nav",{className:"nav",children:[y.jsxs("button",{type:"button",className:`navTabBtn${d==="about"?" active":""}`,onClick:()=>x("about"),children:[u.nav.about,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),y.jsxs("button",{type:"button",className:`navTabBtn${d==="projects"?" active":""}`,onClick:()=>x("projects"),children:[u.nav.projects,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),y.jsxs("button",{type:"button",className:`navTabBtn${d==="career"?" active":""}`,onClick:()=>x("career"),children:[u.nav.career,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),y.jsxs("button",{type:"button",className:`navTabBtn${d==="resume"?" active":""}`,onClick:()=>x("resume"),children:[u.nav.resume,y.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]})]}),y.jsxs("div",{className:"rightActions",children:[y.jsx(w3,{}),y.jsx(y3,{theme:n,onToggle:i})]})]})]}),y.jsxs("main",{className:"container main",children:[d==="about"?y.jsxs("section",{className:"projects",id:"top",children:[y.jsxs("section",{className:"intro",style:{marginBottom:"20px"},children:[y.jsxs("h1",{className:"h3 heroTitle",children:[u.intro.greeting," ",y.jsx("span",{className:"accent",children:"Truong"})]}),y.jsxs("p",{className:"summary",children:[k,k.length<v.length?y.jsx("span",{className:`typingCursor${I?" paused":""}`,"aria-hidden":"true",children:"|"}):null]})]}),y.jsx(T3,{}),H(!1)]}):null,d==="projects"?y.jsx("section",{id:"projects",className:"projects",children:H(!0)}):null,d==="career"?y.jsxs("section",{className:"projects",children:[y.jsxs("div",{className:"careerTimeline",ref:F,"aria-label":"Career timeline",children:[y.jsx("span",{className:"careerFlowLabel top",children:u.career.now}),y.jsx("span",{className:"careerFlowLabel bottom",children:u.career.start}),y.jsx("span",{className:"careerLine","aria-hidden":"true"}),[...$4].reverse().map((_,K)=>{const ie=!!h[_.period],L=`home-career-detail-${K}`;return y.jsxs("div",{className:"careerItem",style:{"--delay":`${K*100}ms`},children:[y.jsxs("div",{className:"careerDateWrap",children:[y.jsx("div",{className:"careerDate",children:_.period}),y.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),y.jsxs("article",{className:`careerCard${ie?" careerCardOpen":""}`,role:"button",tabIndex:0,"aria-expanded":ie,"aria-controls":L,onClick:()=>le(_.period),onKeyDown:W=>B(W,_.period),children:[ae(_),y.jsx("div",{className:"careerCardHeader",children:y.jsxs("div",{className:"careerCardHeading",children:[y.jsx("h3",{className:"h3 careerRole",children:_.title}),y.jsx("p",{className:"careerOrg",children:_.org})]})}),_.location?y.jsx("p",{className:"careerLocation",children:_.location}):null,y.jsx("div",{id:L,className:"careerCardDetailsWrap",children:y.jsxs("div",{className:"careerCardDetails",children:[y.jsx("p",{className:"careerCardSummary",children:_.summary}),y.jsx("ul",{className:"careerHighlights",children:_.highlights.map(W=>y.jsx("li",{children:W},W))})]})})]})]},_.period)})]},"career-tab"),y.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[y.jsxs("article",{className:"careerExtraCard",children:[y.jsxs("h3",{className:"h3 careerExtraTitle",children:[y.jsx(c3,{}),u.career.education]}),y.jsx("ul",{className:"careerExtraList",children:W4.map(_=>y.jsx("li",{className:"careerExtraItem",children:y.jsxs("div",{className:"careerExtraRow",children:[_.logo?y.jsx("img",{src:_.logo,alt:_.school,className:"careerExtraLogo"}):null,y.jsxs("div",{className:"careerExtraBody",children:[y.jsxs("div",{className:"careerExtraHead",children:[y.jsxs("p",{className:"careerExtraMain",children:[_.degree,_.area?` in ${_.area}`:""]}),y.jsx("span",{className:"careerExtraDate",children:_.period})]}),y.jsx("p",{className:"careerExtraSub",children:_.school}),_.location?y.jsx("p",{className:"careerExtraMeta",children:_.location}):null]})]})},`${_.school}-${_.period}`))})]}),y.jsxs("article",{className:"careerExtraCard",children:[y.jsxs("h3",{className:"h3 careerExtraTitle",children:[y.jsx(s3,{}),u.career.certificates]}),y.jsx("ul",{className:"careerExtraList",children:P4.map(_=>y.jsx("li",{className:"careerExtraItem",children:y.jsxs("div",{className:"careerExtraRow",children:[_.logo?y.jsx("img",{src:_.logo,alt:_.issuer,className:"careerExtraLogo"}):null,y.jsxs("div",{className:"careerExtraBody",children:[y.jsxs("div",{className:"careerExtraHead",children:[y.jsx("p",{className:"careerExtraMain",children:_.title}),y.jsx("span",{className:"careerExtraDate",children:_.date})]}),y.jsx("p",{className:"careerExtraSub",children:_.issuer})]})]})},`${_.title}-${_.date}`))})]}),y.jsxs("article",{className:"careerExtraCard",children:[y.jsxs("h3",{className:"h3 careerExtraTitle",children:[y.jsx(f3,{}),u.career.awards]}),y.jsx("ul",{className:"careerExtraList",children:e3.map(_=>y.jsx("li",{className:"careerExtraItem",children:y.jsxs("div",{className:"careerExtraRow",children:[_.logo?y.jsx("img",{src:_.logo,alt:_.title,className:"careerExtraLogo"}):null,y.jsxs("div",{className:"careerExtraBody",children:[y.jsxs("div",{className:"careerExtraHead",children:[y.jsx("p",{className:"careerExtraMain",children:_.title}),y.jsx("span",{className:"careerExtraDate",children:_.date})]}),_.location?y.jsx("p",{className:"careerExtraMeta",children:_.location}):null]})]})},`${_.title}-${_.date}`))})]})]})]}):null,d==="resume"?y.jsx("section",{className:"resumeTabContent noCard",children:y.jsx("div",{className:"resumeSheetLayout",children:y.jsx("div",{className:"resumePreviewWrap noCard",children:y.jsx(j3,{})})})}):null]}),y.jsx("p",{className:`footerQuote${d==="resume"?" footerQuoteResume":""}`,children:u.footer.quote}),y.jsxs("footer",{className:"footer",children:[y.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:y.jsx("span",{className:"footerBaseAccent"})}),y.jsxs("div",{className:"container footerInner",children:[y.jsxs("span",{className:"footerLeft",children:[y.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),y.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:y.jsx(t3,{})}),y.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:y.jsx(Vg,{})}),y.jsx("a",{className:"socialIcon github",href:"https://github.com/FCBTruong",target:"_blank",rel:"noreferrer","aria-label":"GitHub profile",children:y.jsx(ms,{})})]}),y.jsxs("span",{className:"footerStack","aria-label":"Built with React, TypeScript and Vite",children:[y.jsx("span",{className:"stackChip react",title:"React","aria-hidden":"true",children:y.jsx(p3,{})}),y.jsx("span",{className:"stackChip ts",title:"TypeScript","aria-hidden":"true",children:y.jsx(d3,{})}),y.jsx("span",{className:"stackChip vite",title:"Vite","aria-hidden":"true",children:y.jsx(h3,{})})]})]})]}),p&&y.jsx(m3,{src:p.src,alt:p.alt,onClose:()=>f(null)})]})}function L3(){const n=localStorage.getItem("theme");return n==="light"||n==="dark"?n:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const R3=`
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

`;function B3(){const n=D3(),[i,r]=me.useState(()=>L3()),[u,s]=me.useState(()=>v3()),p=me.useCallback(()=>{r(m=>m==="dark"?"light":"dark")},[]),f=me.useCallback(m=>{s(m),localStorage.setItem("language",m)},[]);me.useEffect(()=>{document.documentElement.dataset.theme=i,localStorage.setItem("theme",i)},[i]);const d=me.useMemo(()=>({lang:u,setLang:f,tr:Xg(u)}),[u,f]);return y.jsxs(Ig.Provider,{value:d,children:[y.jsx("style",{children:R3}),y.jsx(vx,{}),y.jsx(Z4,{}),y.jsx(O3,{theme:i,onToggleTheme:p,route:n})]})}bx.createRoot(document.getElementById("root")).render(y.jsx(me.StrictMode,{children:y.jsx(B3,{})}));
