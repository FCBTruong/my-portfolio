(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))r(C);new MutationObserver(C=>{for(const L of C)if(L.type==="childList")for(const el of L.addedNodes)el.tagName==="LINK"&&el.rel==="modulepreload"&&r(el)}).observe(document,{childList:!0,subtree:!0});function _(C){const L={};return C.integrity&&(L.integrity=C.integrity),C.referrerPolicy&&(L.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?L.credentials="include":C.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function r(C){if(C.ep)return;C.ep=!0;const L=_(C);fetch(C.href,L)}})();function N0(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var cf={exports:{}},zn={};var p0;function t1(){if(p0)return zn;p0=1;var E=Symbol.for("react.transitional.element"),H=Symbol.for("react.fragment");function _(r,C,L){var el=null;if(L!==void 0&&(el=""+L),C.key!==void 0&&(el=""+C.key),"key"in C){L={};for(var X in C)X!=="key"&&(L[X]=C[X])}else L=C;return C=L.ref,{$$typeof:E,type:r,key:el,ref:C!==void 0?C:null,props:L}}return zn.Fragment=H,zn.jsx=_,zn.jsxs=_,zn}var g0;function a1(){return g0||(g0=1,cf.exports=t1()),cf.exports}var p=a1(),ff={exports:{}},V={};var b0;function e1(){if(b0)return V;b0=1;var E=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),el=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),nl=Symbol.iterator;function Ql(s){return s===null||typeof s!="object"?null:(s=nl&&s[nl]||s["@@iterator"],typeof s=="function"?s:null)}var yl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dl=Object.assign,yt={};function Cl(s,S,A){this.props=s,this.context=S,this.refs=yt,this.updater=A||yl}Cl.prototype.isReactComponent={},Cl.prototype.setState=function(s,S){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,S,"setState")},Cl.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function $l(){}$l.prototype=Cl.prototype;function Ol(s,S,A){this.props=s,this.context=S,this.refs=yt,this.updater=A||yl}var wl=Ol.prototype=new $l;wl.constructor=Ol,Dl(wl,Cl.prototype),wl.isPureReactComponent=!0;var Zl=Array.isArray;function Hl(){}var Q={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function nt(s,S,A){var N=A.ref;return{$$typeof:E,type:s,key:S,ref:N!==void 0?N:null,props:A}}function Rt(s,S){return nt(s.type,S,s.props)}function ut(s){return typeof s=="object"&&s!==null&&s.$$typeof===E}function Ll(s){var S={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(A){return S[A]})}var Dt=/\/+/g;function G(s,S){return typeof s=="object"&&s!==null&&s.key!=null?Ll(""+s.key):S.toString(36)}function ul(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Hl,Hl):(s.status="pending",s.then(function(S){s.status==="pending"&&(s.status="fulfilled",s.value=S)},function(S){s.status==="pending"&&(s.status="rejected",s.reason=S)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function g(s,S,A,N,Z){var J=typeof s;(J==="undefined"||J==="boolean")&&(s=null);var cl=!1;if(s===null)cl=!0;else switch(J){case"bigint":case"string":case"number":cl=!0;break;case"object":switch(s.$$typeof){case E:case H:cl=!0;break;case $:return cl=s._init,g(cl(s._payload),S,A,N,Z)}}if(cl)return Z=Z(s),cl=N===""?"."+G(s,0):N,Zl(Z)?(A="",cl!=null&&(A=cl.replace(Dt,"$&/")+"/"),g(Z,S,A,"",function(Oe){return Oe})):Z!=null&&(ut(Z)&&(Z=Rt(Z,A+(Z.key==null||s&&s.key===Z.key?"":(""+Z.key).replace(Dt,"$&/")+"/")+cl)),S.push(Z)),1;cl=0;var Kl=N===""?".":N+":";if(Zl(s))for(var xl=0;xl<s.length;xl++)N=s[xl],J=Kl+G(N,xl),cl+=g(N,S,A,J,Z);else if(xl=Ql(s),typeof xl=="function")for(s=xl.call(s),xl=0;!(N=s.next()).done;)N=N.value,J=Kl+G(N,xl++),cl+=g(N,S,A,J,Z);else if(J==="object"){if(typeof s.then=="function")return g(ul(s),S,A,N,Z);throw S=String(s),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return cl}function M(s,S,A){if(s==null)return s;var N=[],Z=0;return g(s,N,"","",function(J){return S.call(A,J,Z++)}),N}function j(s){if(s._status===-1){var S=s._result;S=S(),S.then(function(A){(s._status===0||s._status===-1)&&(s._status=1,s._result=A)},function(A){(s._status===0||s._status===-1)&&(s._status=2,s._result=A)}),s._status===-1&&(s._status=0,s._result=S)}if(s._status===1)return s._result.default;throw s._result}var q=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},F={map:M,forEach:function(s,S,A){M(s,function(){S.apply(this,arguments)},A)},count:function(s){var S=0;return M(s,function(){S++}),S},toArray:function(s){return M(s,function(S){return S})||[]},only:function(s){if(!ut(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return V.Activity=B,V.Children=F,V.Component=Cl,V.Fragment=_,V.Profiler=C,V.PureComponent=Ol,V.StrictMode=r,V.Suspense=O,V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,V.__COMPILER_RUNTIME={__proto__:null,c:function(s){return Q.H.useMemoCache(s)}},V.cache=function(s){return function(){return s.apply(null,arguments)}},V.cacheSignal=function(){return null},V.cloneElement=function(s,S,A){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var N=Dl({},s.props),Z=s.key;if(S!=null)for(J in S.key!==void 0&&(Z=""+S.key),S)!Rl.call(S,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&S.ref===void 0||(N[J]=S[J]);var J=arguments.length-2;if(J===1)N.children=A;else if(1<J){for(var cl=Array(J),Kl=0;Kl<J;Kl++)cl[Kl]=arguments[Kl+2];N.children=cl}return nt(s.type,Z,N)},V.createContext=function(s){return s={$$typeof:el,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:L,_context:s},s},V.createElement=function(s,S,A){var N,Z={},J=null;if(S!=null)for(N in S.key!==void 0&&(J=""+S.key),S)Rl.call(S,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(Z[N]=S[N]);var cl=arguments.length-2;if(cl===1)Z.children=A;else if(1<cl){for(var Kl=Array(cl),xl=0;xl<cl;xl++)Kl[xl]=arguments[xl+2];Z.children=Kl}if(s&&s.defaultProps)for(N in cl=s.defaultProps,cl)Z[N]===void 0&&(Z[N]=cl[N]);return nt(s,J,Z)},V.createRef=function(){return{current:null}},V.forwardRef=function(s){return{$$typeof:X,render:s}},V.isValidElement=ut,V.lazy=function(s){return{$$typeof:$,_payload:{_status:-1,_result:s},_init:j}},V.memo=function(s,S){return{$$typeof:T,type:s,compare:S===void 0?null:S}},V.startTransition=function(s){var S=Q.T,A={};Q.T=A;try{var N=s(),Z=Q.S;Z!==null&&Z(A,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Hl,q)}catch(J){q(J)}finally{S!==null&&A.types!==null&&(S.types=A.types),Q.T=S}},V.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},V.use=function(s){return Q.H.use(s)},V.useActionState=function(s,S,A){return Q.H.useActionState(s,S,A)},V.useCallback=function(s,S){return Q.H.useCallback(s,S)},V.useContext=function(s){return Q.H.useContext(s)},V.useDebugValue=function(){},V.useDeferredValue=function(s,S){return Q.H.useDeferredValue(s,S)},V.useEffect=function(s,S){return Q.H.useEffect(s,S)},V.useEffectEvent=function(s){return Q.H.useEffectEvent(s)},V.useId=function(){return Q.H.useId()},V.useImperativeHandle=function(s,S,A){return Q.H.useImperativeHandle(s,S,A)},V.useInsertionEffect=function(s,S){return Q.H.useInsertionEffect(s,S)},V.useLayoutEffect=function(s,S){return Q.H.useLayoutEffect(s,S)},V.useMemo=function(s,S){return Q.H.useMemo(s,S)},V.useOptimistic=function(s,S){return Q.H.useOptimistic(s,S)},V.useReducer=function(s,S,A){return Q.H.useReducer(s,S,A)},V.useRef=function(s){return Q.H.useRef(s)},V.useState=function(s){return Q.H.useState(s)},V.useSyncExternalStore=function(s,S,A){return Q.H.useSyncExternalStore(s,S,A)},V.useTransition=function(){return Q.H.useTransition()},V.version="19.2.3",V}var S0;function hf(){return S0||(S0=1,ff.exports=e1()),ff.exports}var gl=hf();const Wl=N0(gl);var sf={exports:{}},Tn={},of={exports:{}},rf={};var x0;function n1(){return x0||(x0=1,(function(E){function H(g,M){var j=g.length;g.push(M);l:for(;0<j;){var q=j-1>>>1,F=g[q];if(0<C(F,M))g[q]=M,g[j]=F,j=q;else break l}}function _(g){return g.length===0?null:g[0]}function r(g){if(g.length===0)return null;var M=g[0],j=g.pop();if(j!==M){g[0]=j;l:for(var q=0,F=g.length,s=F>>>1;q<s;){var S=2*(q+1)-1,A=g[S],N=S+1,Z=g[N];if(0>C(A,j))N<F&&0>C(Z,A)?(g[q]=Z,g[N]=j,q=N):(g[q]=A,g[S]=j,q=S);else if(N<F&&0>C(Z,j))g[q]=Z,g[N]=j,q=N;else break l}}return M}function C(g,M){var j=g.sortIndex-M.sortIndex;return j!==0?j:g.id-M.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;E.unstable_now=function(){return L.now()}}else{var el=Date,X=el.now();E.unstable_now=function(){return el.now()-X}}var O=[],T=[],$=1,B=null,nl=3,Ql=!1,yl=!1,Dl=!1,yt=!1,Cl=typeof setTimeout=="function"?setTimeout:null,$l=typeof clearTimeout=="function"?clearTimeout:null,Ol=typeof setImmediate<"u"?setImmediate:null;function wl(g){for(var M=_(T);M!==null;){if(M.callback===null)r(T);else if(M.startTime<=g)r(T),M.sortIndex=M.expirationTime,H(O,M);else break;M=_(T)}}function Zl(g){if(Dl=!1,wl(g),!yl)if(_(O)!==null)yl=!0,Hl||(Hl=!0,Ll());else{var M=_(T);M!==null&&ul(Zl,M.startTime-g)}}var Hl=!1,Q=-1,Rl=5,nt=-1;function Rt(){return yt?!0:!(E.unstable_now()-nt<Rl)}function ut(){if(yt=!1,Hl){var g=E.unstable_now();nt=g;var M=!0;try{l:{yl=!1,Dl&&(Dl=!1,$l(Q),Q=-1),Ql=!0;var j=nl;try{t:{for(wl(g),B=_(O);B!==null&&!(B.expirationTime>g&&Rt());){var q=B.callback;if(typeof q=="function"){B.callback=null,nl=B.priorityLevel;var F=q(B.expirationTime<=g);if(g=E.unstable_now(),typeof F=="function"){B.callback=F,wl(g),M=!0;break t}B===_(O)&&r(O),wl(g)}else r(O);B=_(O)}if(B!==null)M=!0;else{var s=_(T);s!==null&&ul(Zl,s.startTime-g),M=!1}}break l}finally{B=null,nl=j,Ql=!1}M=void 0}}finally{M?Ll():Hl=!1}}}var Ll;if(typeof Ol=="function")Ll=function(){Ol(ut)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,G=Dt.port2;Dt.port1.onmessage=ut,Ll=function(){G.postMessage(null)}}else Ll=function(){Cl(ut,0)};function ul(g,M){Q=Cl(function(){g(E.unstable_now())},M)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(g){g.callback=null},E.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<g?Math.floor(1e3/g):5},E.unstable_getCurrentPriorityLevel=function(){return nl},E.unstable_next=function(g){switch(nl){case 1:case 2:case 3:var M=3;break;default:M=nl}var j=nl;nl=M;try{return g()}finally{nl=j}},E.unstable_requestPaint=function(){yt=!0},E.unstable_runWithPriority=function(g,M){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var j=nl;nl=g;try{return M()}finally{nl=j}},E.unstable_scheduleCallback=function(g,M,j){var q=E.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?q+j:q):j=q,g){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=j+F,g={id:$++,callback:M,priorityLevel:g,startTime:j,expirationTime:F,sortIndex:-1},j>q?(g.sortIndex=j,H(T,g),_(O)===null&&g===_(T)&&(Dl?($l(Q),Q=-1):Dl=!0,ul(Zl,j-q))):(g.sortIndex=F,H(O,g),yl||Ql||(yl=!0,Hl||(Hl=!0,Ll()))),g},E.unstable_shouldYield=Rt,E.unstable_wrapCallback=function(g){var M=nl;return function(){var j=nl;nl=M;try{return g.apply(this,arguments)}finally{nl=j}}}})(rf)),rf}var z0;function u1(){return z0||(z0=1,of.exports=n1()),of.exports}var df={exports:{}},Vl={};var T0;function i1(){if(T0)return Vl;T0=1;var E=hf();function H(O){var T="https://react.dev/errors/"+O;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)T+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+O+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var r={d:{f:_,r:function(){throw Error(H(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},C=Symbol.for("react.portal");function L(O,T,$){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:B==null?null:""+B,children:O,containerInfo:T,implementation:$}}var el=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function X(O,T){if(O==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Vl.createPortal=function(O,T){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(H(299));return L(O,T,null,$)},Vl.flushSync=function(O){var T=el.T,$=r.p;try{if(el.T=null,r.p=2,O)return O()}finally{el.T=T,r.p=$,r.d.f()}},Vl.preconnect=function(O,T){typeof O=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,r.d.C(O,T))},Vl.prefetchDNS=function(O){typeof O=="string"&&r.d.D(O)},Vl.preinit=function(O,T){if(typeof O=="string"&&T&&typeof T.as=="string"){var $=T.as,B=X($,T.crossOrigin),nl=typeof T.integrity=="string"?T.integrity:void 0,Ql=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;$==="style"?r.d.S(O,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:B,integrity:nl,fetchPriority:Ql}):$==="script"&&r.d.X(O,{crossOrigin:B,integrity:nl,fetchPriority:Ql,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Vl.preinitModule=function(O,T){if(typeof O=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var $=X(T.as,T.crossOrigin);r.d.M(O,{crossOrigin:$,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&r.d.M(O)},Vl.preload=function(O,T){if(typeof O=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var $=T.as,B=X($,T.crossOrigin);r.d.L(O,$,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Vl.preloadModule=function(O,T){if(typeof O=="string")if(T){var $=X(T.as,T.crossOrigin);r.d.m(O,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:$,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else r.d.m(O)},Vl.requestFormReset=function(O){r.d.r(O)},Vl.unstable_batchedUpdates=function(O,T){return O(T)},Vl.useFormState=function(O,T,$){return el.H.useFormState(O,T,$)},Vl.useFormStatus=function(){return el.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var E0;function c1(){if(E0)return df.exports;E0=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(H){console.error(H)}}return E(),df.exports=i1(),df.exports}var A0;function f1(){if(A0)return Tn;A0=1;var E=u1(),H=hf(),_=c1();function r(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function L(l){var t=l,a=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(a=t.return),l=t.return;while(l)}return t.tag===3?a:null}function el(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function X(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function O(l){if(L(l)!==l)throw Error(r(188))}function T(l){var t=l.alternate;if(!t){if(t=L(l),t===null)throw Error(r(188));return t!==l?null:l}for(var a=l,e=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return O(n),l;if(u===e)return O(n),t;u=u.sibling}throw Error(r(188))}if(a.return!==e.return)a=n,e=u;else{for(var i=!1,c=n.child;c;){if(c===a){i=!0,a=n,e=u;break}if(c===e){i=!0,e=n,a=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===a){i=!0,a=u,e=n;break}if(c===e){i=!0,e=u,a=n;break}c=c.sibling}if(!i)throw Error(r(189))}}if(a.alternate!==e)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?l:t}function $(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=$(l),t!==null)return t;l=l.sibling}return null}var B=Object.assign,nl=Symbol.for("react.element"),Ql=Symbol.for("react.transitional.element"),yl=Symbol.for("react.portal"),Dl=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),$l=Symbol.for("react.consumer"),Ol=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Ll(l){return l===null||typeof l!="object"?null:(l=ut&&l[ut]||l["@@iterator"],typeof l=="function"?l:null)}var Dt=Symbol.for("react.client.reference");function G(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Dt?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Dl:return"Fragment";case Cl:return"Profiler";case yt:return"StrictMode";case Zl:return"Suspense";case Hl:return"SuspenseList";case nt:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case yl:return"Portal";case Ol:return l.displayName||"Context";case $l:return(l._context.displayName||"Context")+".Consumer";case wl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Q:return t=l.displayName||null,t!==null?t:G(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return G(l(t))}catch{}}return null}var ul=Array.isArray,g=H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},q=[],F=-1;function s(l){return{current:l}}function S(l){0>F||(l.current=q[F],q[F]=null,F--)}function A(l,t){F++,q[F]=l.current,l.current=t}var N=s(null),Z=s(null),J=s(null),cl=s(null);function Kl(l,t){switch(A(J,t),A(Z,l),A(N,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Xr(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Xr(t),l=Qr(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}S(N),A(N,l)}function xl(){S(N),S(Z),S(J)}function Oe(l){l.memoizedState!==null&&A(cl,l);var t=N.current,a=Qr(t,l.type);t!==a&&(A(Z,l),A(N,a))}function En(l){Z.current===l&&(S(N),S(Z)),cl.current===l&&(S(cl),gn._currentValue=j)}var Zu,vf;function Aa(l){if(Zu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Zu=t&&t[1]||"",vf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zu+l+vf}var Lu=!1;function Vu(l,t){if(!l||Lu)return"";Lu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(y){var v=y}Reflect.construct(l,[],z)}else{try{z.call()}catch(y){v=y}l.call(z.prototype)}}else{try{throw Error()}catch(y){v=y}(z=l())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(y){if(y&&v&&typeof y.stack=="string")return[y.stack,v.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=e.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),h=c.split(`
`);for(n=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(e===f.length||n===h.length)for(e=f.length-1,n=h.length-1;1<=e&&0<=n&&f[e]!==h[n];)n--;for(;1<=e&&0<=n;e--,n--)if(f[e]!==h[n]){if(e!==1||n!==1)do if(e--,n--,0>n||f[e]!==h[n]){var b=`
`+f[e].replace(" at new "," at ");return l.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",l.displayName)),b}while(1<=e&&0<=n);break}}}finally{Lu=!1,Error.prepareStackTrace=a}return(a=l?l.displayName||l.name:"")?Aa(a):""}function U0(l,t){switch(l.tag){case 26:case 27:case 5:return Aa(l.type);case 16:return Aa("Lazy");case 13:return l.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return Vu(l.type,!1);case 11:return Vu(l.type.render,!1);case 1:return Vu(l.type,!0);case 31:return Aa("Activity");default:return""}}function yf(l){try{var t="",a=null;do t+=U0(l,a),a=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var wu=Object.prototype.hasOwnProperty,Ku=E.unstable_scheduleCallback,Ju=E.unstable_cancelCallback,C0=E.unstable_shouldYield,H0=E.unstable_requestPaint,it=E.unstable_now,R0=E.unstable_getCurrentPriorityLevel,pf=E.unstable_ImmediatePriority,gf=E.unstable_UserBlockingPriority,An=E.unstable_NormalPriority,B0=E.unstable_LowPriority,bf=E.unstable_IdlePriority,G0=E.log,Y0=E.unstable_setDisableYieldValue,Ne=null,ct=null;function la(l){if(typeof G0=="function"&&Y0(l),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Ne,l)}catch{}}var ft=Math.clz32?Math.clz32:Q0,q0=Math.log,X0=Math.LN2;function Q0(l){return l>>>=0,l===0?32:31-(q0(l)/X0|0)|0}var Mn=256,_n=262144,On=4194304;function Ma(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Nn(l,t,a){var e=l.pendingLanes;if(e===0)return 0;var n=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=e&134217727;return c!==0?(e=c&~u,e!==0?n=Ma(e):(i&=c,i!==0?n=Ma(i):a||(a=c&~l,a!==0&&(n=Ma(a))))):(c=e&~u,c!==0?n=Ma(c):i!==0?n=Ma(i):a||(a=e&~l,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function De(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Z0(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(){var l=On;return On<<=1,(On&62914560)===0&&(On=4194304),l}function ku(l){for(var t=[],a=0;31>a;a++)t.push(l);return t}function je(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function L0(l,t,a,e,n,u){var i=l.pendingLanes;l.pendingLanes=a,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=a,l.entangledLanes&=a,l.errorRecoveryDisabledLanes&=a,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,h=l.hiddenUpdates;for(a=i&~a;0<a;){var b=31-ft(a),z=1<<b;c[b]=0,f[b]=-1;var v=h[b];if(v!==null)for(h[b]=null,b=0;b<v.length;b++){var y=v[b];y!==null&&(y.lane&=-536870913)}a&=~z}e!==0&&xf(l,e,0),u!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~t))}function xf(l,t,a){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-ft(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|a&261930}function zf(l,t){var a=l.entangledLanes|=t;for(l=l.entanglements;a;){var e=31-ft(a),n=1<<e;n&t|l[e]&t&&(l[e]|=t),a&=~n}}function Tf(l,t){var a=t&-t;return a=(a&42)!==0?1:Wu(a),(a&(l.suspendedLanes|t))!==0?0:a}function Wu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function $u(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ef(){var l=M.p;return l!==0?l:(l=window.event,l===void 0?32:o0(l.type))}function Af(l,t){var a=M.p;try{return M.p=l,t()}finally{M.p=a}}var ta=Math.random().toString(36).slice(2),Bl="__reactFiber$"+ta,Fl="__reactProps$"+ta,Va="__reactContainer$"+ta,Fu="__reactEvents$"+ta,V0="__reactListeners$"+ta,w0="__reactHandles$"+ta,Mf="__reactResources$"+ta,Ue="__reactMarker$"+ta;function Iu(l){delete l[Bl],delete l[Fl],delete l[Fu],delete l[V0],delete l[w0]}function wa(l){var t=l[Bl];if(t)return t;for(var a=l.parentNode;a;){if(t=a[Va]||a[Bl]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(l=kr(l);l!==null;){if(a=l[Bl])return a;l=kr(l)}return t}l=a,a=l.parentNode}return null}function Ka(l){if(l=l[Bl]||l[Va]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ce(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(r(33))}function Ja(l){var t=l[Mf];return t||(t=l[Mf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jl(l){l[Ue]=!0}var _f=new Set,Of={};function _a(l,t){ka(l,t),ka(l+"Capture",t)}function ka(l,t){for(Of[l]=t,l=0;l<t.length;l++)_f.add(t[l])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nf={},Df={};function J0(l){return wu.call(Df,l)?!0:wu.call(Nf,l)?!1:K0.test(l)?Df[l]=!0:(Nf[l]=!0,!1)}function Dn(l,t,a){if(J0(t))if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+a)}}function jn(l,t,a){if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+a)}}function Bt(l,t,a,e){if(e===null)l.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(a);return}l.setAttributeNS(t,a,""+e)}}function pt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function jf(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k0(l,t,a){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,u=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function Pu(l){if(!l._valueTracker){var t=jf(l)?"checked":"value";l._valueTracker=k0(l,t,""+l[t])}}function Uf(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return l&&(e=jf(l)?l.checked?"true":"false":l.value),l=e,l!==a?(t.setValue(l),!0):!1}function Un(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var W0=/[\n"\\]/g;function gt(l){return l.replace(W0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function li(l,t,a,e,n,u,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+pt(t)):l.value!==""+pt(t)&&(l.value=""+pt(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?ti(l,i,pt(t)):a!=null?ti(l,i,pt(a)):e!=null&&l.removeAttribute("value"),n==null&&u!=null&&(l.defaultChecked=!!u),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+pt(c):l.removeAttribute("name")}function Cf(l,t,a,e,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Pu(l);return}a=a!=null?""+pt(a):"",t=t!=null?""+pt(t):a,c||t===l.value||(l.value=t),l.defaultValue=t}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=c?l.checked:!!e,l.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),Pu(l)}function ti(l,t,a){t==="number"&&Un(l.ownerDocument)===l||l.defaultValue===""+a||(l.defaultValue=""+a)}function Wa(l,t,a,e){if(l=l.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<l.length;a++)n=t.hasOwnProperty("$"+l[a].value),l[a].selected!==n&&(l[a].selected=n),n&&e&&(l[a].defaultSelected=!0)}else{for(a=""+pt(a),t=null,n=0;n<l.length;n++){if(l[n].value===a){l[n].selected=!0,e&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Hf(l,t,a){if(t!=null&&(t=""+pt(t),t!==l.value&&(l.value=t),a==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=a!=null?""+pt(a):""}function Rf(l,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(r(92));if(ul(e)){if(1<e.length)throw Error(r(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=pt(t),l.defaultValue=a,e=l.textContent,e===a&&e!==""&&e!==null&&(l.value=e),Pu(l)}function $a(l,t){if(t){var a=l.firstChild;if(a&&a===l.lastChild&&a.nodeType===3){a.nodeValue=t;return}}l.textContent=t}var $0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(l,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,a):typeof a!="number"||a===0||$0.has(t)?t==="float"?l.cssFloat=a:l[t]=(""+a).trim():l[t]=a+"px"}function Gf(l,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(l=l.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var n in t)e=t[n],t.hasOwnProperty(n)&&a[n]!==e&&Bf(l,n,e)}else for(var u in t)t.hasOwnProperty(u)&&Bf(l,u,t[u])}function ai(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(l){return I0.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Gt(){}var ei=null;function ni(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fa=null,Ia=null;function Yf(l){var t=Ka(l);if(t&&(l=t.stateNode)){var a=l[Fl]||null;l:switch(l=t.stateNode,t.type){case"input":if(li(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=l;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==l&&e.form===l.form){var n=e[Fl]||null;if(!n)throw Error(r(90));li(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===l.form&&Uf(e)}break l;case"textarea":Hf(l,a.value,a.defaultValue);break l;case"select":t=a.value,t!=null&&Wa(l,!!a.multiple,t,!1)}}}var ui=!1;function qf(l,t,a){if(ui)return l(t,a);ui=!0;try{var e=l(t);return e}finally{if(ui=!1,(Fa!==null||Ia!==null)&&(Su(),Fa&&(t=Fa,l=Ia,Ia=Fa=null,Yf(t),l)))for(t=0;t<l.length;t++)Yf(l[t])}}function He(l,t){var a=l.stateNode;if(a===null)return null;var e=a[Fl]||null;if(e===null)return null;a=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(Yt)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch{ii=!1}var aa=null,ci=null,Hn=null;function Xf(){if(Hn)return Hn;var l,t=ci,a=t.length,e,n="value"in aa?aa.value:aa.textContent,u=n.length;for(l=0;l<a&&t[l]===n[l];l++);var i=a-l;for(e=1;e<=i&&t[a-e]===n[u-e];e++);return Hn=n.slice(l,1<e?1-e:void 0)}function Rn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Bn(){return!0}function Qf(){return!1}function Il(l){function t(a,e,n,u,i){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(a=l[c],this[c]=a?a(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bn:Qf,this.isPropagationStopped=Qf,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gn=Il(Oa),Be=B({},Oa,{view:0,detail:0}),P0=Il(Be),fi,si,Ge,Yn=B({},Be,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ge&&(Ge&&l.type==="mousemove"?(fi=l.screenX-Ge.screenX,si=l.screenY-Ge.screenY):si=fi=0,Ge=l),fi)},movementY:function(l){return"movementY"in l?l.movementY:si}}),Zf=Il(Yn),ld=B({},Yn,{dataTransfer:0}),td=Il(ld),ad=B({},Be,{relatedTarget:0}),oi=Il(ad),ed=B({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),nd=Il(ed),ud=B({},Oa,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),id=Il(ud),cd=B({},Oa,{data:0}),Lf=Il(cd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=od[l])?!!t[l]:!1}function ri(){return rd}var dd=B({},Be,{key:function(l){if(l.key){var t=fd[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Rn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?sd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(l){return l.type==="keypress"?Rn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Rn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),md=Il(dd),hd=B({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Il(hd),vd=B({},Be,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),yd=Il(vd),pd=B({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),gd=Il(pd),bd=B({},Yn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Sd=Il(bd),xd=B({},Oa,{newState:0,oldState:0}),zd=Il(xd),Td=[9,13,27,32],di=Yt&&"CompositionEvent"in window,Ye=null;Yt&&"documentMode"in document&&(Ye=document.documentMode);var Ed=Yt&&"TextEvent"in window&&!Ye,wf=Yt&&(!di||Ye&&8<Ye&&11>=Ye),Kf=" ",Jf=!1;function kf(l,t){switch(l){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pa=!1;function Ad(l,t){switch(l){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(Jf=!0,Kf);case"textInput":return l=t.data,l===Kf&&Jf?null:l;default:return null}}function Md(l,t){if(Pa)return l==="compositionend"||!di&&kf(l,t)?(l=Xf(),Hn=ci=aa=null,Pa=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var _d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!_d[l.type]:t==="textarea"}function Ff(l,t,a,e){Fa?Ia?Ia.push(e):Ia=[e]:Fa=e,t=_u(t,"onChange"),0<t.length&&(a=new Gn("onChange","change",null,a,e),l.push({event:a,listeners:t}))}var qe=null,Xe=null;function Od(l){Hr(l,0)}function qn(l){var t=Ce(l);if(Uf(t))return l}function If(l,t){if(l==="change")return t}var Pf=!1;if(Yt){var mi;if(Yt){var hi="oninput"in document;if(!hi){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),hi=typeof ls.oninput=="function"}mi=hi}else mi=!1;Pf=mi&&(!document.documentMode||9<document.documentMode)}function ts(){qe&&(qe.detachEvent("onpropertychange",as),Xe=qe=null)}function as(l){if(l.propertyName==="value"&&qn(Xe)){var t=[];Ff(t,Xe,l,ni(l)),qf(Od,t)}}function Nd(l,t,a){l==="focusin"?(ts(),qe=t,Xe=a,qe.attachEvent("onpropertychange",as)):l==="focusout"&&ts()}function Dd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return qn(Xe)}function jd(l,t){if(l==="click")return qn(t)}function Ud(l,t){if(l==="input"||l==="change")return qn(t)}function Cd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var st=typeof Object.is=="function"?Object.is:Cd;function Qe(l,t){if(st(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var a=Object.keys(l),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!wu.call(t,n)||!st(l[n],t[n]))return!1}return!0}function es(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ns(l,t){var a=es(l);l=0;for(var e;a;){if(a.nodeType===3){if(e=l+a.textContent.length,l<=t&&e>=t)return{node:a,offset:t-l};l=e}l:{for(;a;){if(a.nextSibling){a=a.nextSibling;break l}a=a.parentNode}a=void 0}a=es(a)}}function us(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?us(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function is(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Un(l.document);t instanceof l.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)l=t.contentWindow;else break;t=Un(l.document)}return t}function vi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Hd=Yt&&"documentMode"in document&&11>=document.documentMode,le=null,yi=null,Ze=null,pi=!1;function cs(l,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pi||le==null||le!==Un(e)||(e=le,"selectionStart"in e&&vi(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ze&&Qe(Ze,e)||(Ze=e,e=_u(yi,"onSelect"),0<e.length&&(t=new Gn("onSelect","select",null,t,a),l.push({event:t,listeners:e}),t.target=le)))}function Na(l,t){var a={};return a[l.toLowerCase()]=t.toLowerCase(),a["Webkit"+l]="webkit"+t,a["Moz"+l]="moz"+t,a}var te={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},gi={},fs={};Yt&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function Da(l){if(gi[l])return gi[l];if(!te[l])return l;var t=te[l],a;for(a in t)if(t.hasOwnProperty(a)&&a in fs)return gi[l]=t[a];return l}var ss=Da("animationend"),os=Da("animationiteration"),rs=Da("animationstart"),Rd=Da("transitionrun"),Bd=Da("transitionstart"),Gd=Da("transitioncancel"),ds=Da("transitionend"),ms=new Map,bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bi.push("scrollEnd");function _t(l,t){ms.set(l,t),_a(t,[l])}var Xn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},bt=[],ae=0,Si=0;function Qn(){for(var l=ae,t=Si=ae=0;t<l;){var a=bt[t];bt[t++]=null;var e=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var u=bt[t];if(bt[t++]=null,e!==null&&n!==null){var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}u!==0&&hs(a,n,u)}}function Zn(l,t,a,e){bt[ae++]=l,bt[ae++]=t,bt[ae++]=a,bt[ae++]=e,Si|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function xi(l,t,a,e){return Zn(l,t,a,e),Ln(l)}function ja(l,t){return Zn(l,null,null,t),Ln(l)}function hs(l,t,a){l.lanes|=a;var e=l.alternate;e!==null&&(e.lanes|=a);for(var n=!1,u=l.return;u!==null;)u.childLanes|=a,e=u.alternate,e!==null&&(e.childLanes|=a),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(n=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,n&&t!==null&&(n=31-ft(a),l=u.hiddenUpdates,e=l[n],e===null?l[n]=[t]:e.push(t),t.lane=a|536870912),u):null}function Ln(l){if(50<rn)throw rn=0,Dc=null,Error(r(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ee={};function Yd(l,t,a,e){this.tag=l,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(l,t,a,e){return new Yd(l,t,a,e)}function zi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function qt(l,t){var a=l.alternate;return a===null?(a=ot(l.tag,t,l.key,l.mode),a.elementType=l.elementType,a.type=l.type,a.stateNode=l.stateNode,a.alternate=l,l.alternate=a):(a.pendingProps=t,a.type=l.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=l.flags&65011712,a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=l.sibling,a.index=l.index,a.ref=l.ref,a.refCleanup=l.refCleanup,a}function vs(l,t){l.flags&=65011714;var a=l.alternate;return a===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,t=a.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Vn(l,t,a,e,n,u){var i=0;if(e=l,typeof l=="function")zi(l)&&(i=1);else if(typeof l=="string")i=Lm(l,a,N.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case nt:return l=ot(31,a,t,n),l.elementType=nt,l.lanes=u,l;case Dl:return Ua(a.children,n,u,t);case yt:i=8,n|=24;break;case Cl:return l=ot(12,a,t,n|2),l.elementType=Cl,l.lanes=u,l;case Zl:return l=ot(13,a,t,n),l.elementType=Zl,l.lanes=u,l;case Hl:return l=ot(19,a,t,n),l.elementType=Hl,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Ol:i=10;break l;case $l:i=9;break l;case wl:i=11;break l;case Q:i=14;break l;case Rl:i=16,e=null;break l}i=29,a=Error(r(130,l===null?"null":typeof l,"")),e=null}return t=ot(i,a,t,n),t.elementType=l,t.type=e,t.lanes=u,t}function Ua(l,t,a,e){return l=ot(7,l,e,t),l.lanes=a,l}function Ti(l,t,a){return l=ot(6,l,null,t),l.lanes=a,l}function ys(l){var t=ot(18,null,null,0);return t.stateNode=l,t}function Ei(l,t,a){return t=ot(4,l.children!==null?l.children:[],l.key,t),t.lanes=a,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var ps=new WeakMap;function St(l,t){if(typeof l=="object"&&l!==null){var a=ps.get(l);return a!==void 0?a:(t={value:l,source:t,stack:yf(t)},ps.set(l,t),t)}return{value:l,source:t,stack:yf(t)}}var ne=[],ue=0,wn=null,Le=0,xt=[],zt=0,ea=null,jt=1,Ut="";function Xt(l,t){ne[ue++]=Le,ne[ue++]=wn,wn=l,Le=t}function gs(l,t,a){xt[zt++]=jt,xt[zt++]=Ut,xt[zt++]=ea,ea=l;var e=jt;l=Ut;var n=32-ft(e)-1;e&=~(1<<n),a+=1;var u=32-ft(t)+n;if(30<u){var i=n-n%5;u=(e&(1<<i)-1).toString(32),e>>=i,n-=i,jt=1<<32-ft(t)+n|a<<n|e,Ut=u+l}else jt=1<<u|a<<n|e,Ut=l}function Ai(l){l.return!==null&&(Xt(l,1),gs(l,1,0))}function Mi(l){for(;l===wn;)wn=ne[--ue],ne[ue]=null,Le=ne[--ue],ne[ue]=null;for(;l===ea;)ea=xt[--zt],xt[zt]=null,Ut=xt[--zt],xt[zt]=null,jt=xt[--zt],xt[zt]=null}function bs(l,t){xt[zt++]=jt,xt[zt++]=Ut,xt[zt++]=ea,jt=t.id,Ut=t.overflow,ea=l}var Gl=null,hl=null,ll=!1,na=null,Tt=!1,_i=Error(r(519));function ua(l){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ve(St(t,l)),_i}function Ss(l){var t=l.stateNode,a=l.type,e=l.memoizedProps;switch(t[Bl]=l,t[Fl]=e,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)W(mn[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Cf(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Rf(t,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||Yr(t.textContent,a)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ua(l,!0)}function xs(l){for(Gl=l.return;Gl;)switch(Gl.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Gl=Gl.return}}function ie(l){if(l!==Gl)return!1;if(!ll)return xs(l),ll=!0,!1;var t=l.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=l.type,a=!(a!=="form"&&a!=="button")||wc(l.type,l.memoizedProps)),a=!a),a&&hl&&ua(l),xs(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));hl=Jr(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));hl=Jr(l)}else t===27?(t=hl,ba(l.type)?(l=$c,$c=null,hl=l):hl=t):hl=Gl?At(l.stateNode.nextSibling):null;return!0}function Ca(){hl=Gl=null,ll=!1}function Oi(){var l=na;return l!==null&&(at===null?at=l:at.push.apply(at,l),na=null),l}function Ve(l){na===null?na=[l]:na.push(l)}var Ni=s(null),Ha=null,Qt=null;function ia(l,t,a){A(Ni,t._currentValue),t._currentValue=a}function Zt(l){l._currentValue=Ni.current,S(Ni)}function Di(l,t,a){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===a)break;l=l.return}}function ji(l,t,a,e){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;l:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=a,c=u.alternate,c!==null&&(c.lanes|=a),Di(u.return,a,l),e||(i=null);break l}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(r(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Di(i,a,l),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===l){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ce(l,t,a,e){l=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var c=n.type;st(n.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(n===cl.current){if(i=n.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(gn):l=[gn])}n=n.return}l!==null&&ji(t,l,a,e),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!st(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ra(l){Ha=l,Qt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Yl(l){return zs(Ha,l)}function Jn(l,t){return Ha===null&&Ra(l),zs(l,t)}function zs(l,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(l===null)throw Error(r(308));Qt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Qt=Qt.next=t;return a}var qd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(a,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(a){return a()})}},Xd=E.unstable_scheduleCallback,Qd=E.unstable_NormalPriority,El={$$typeof:Ol,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new qd,data:new Map,refCount:0}}function we(l){l.refCount--,l.refCount===0&&Xd(Qd,function(){l.controller.abort()})}var Ke=null,Ci=0,fe=0,se=null;function Zd(l,t){if(Ke===null){var a=Ke=[];Ci=0,fe=Bc(),se={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Ci++,t.then(Ts,Ts),t}function Ts(){if(--Ci===0&&Ke!==null){se!==null&&(se.status="fulfilled");var l=Ke;Ke=null,fe=0,se=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Ld(l,t){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var Es=g.S;g.S=function(l,t){fr=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zd(l,t),Es!==null&&Es(l,t)};var Ba=s(null);function Hi(){var l=Ba.current;return l!==null?l:ml.pooledCache}function kn(l,t){t===null?A(Ba,Ba.current):A(Ba,t.pool)}function As(){var l=Hi();return l===null?null:{parent:El._currentValue,pool:l}}var oe=Error(r(460)),Ri=Error(r(474)),Wn=Error(r(542)),$n={then:function(){}};function Ms(l){return l=l.status,l==="fulfilled"||l==="rejected"}function _s(l,t,a){switch(a=l[a],a===void 0?l.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ns(l),l;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(l=ml,l!==null&&100<l.shellSuspendCounter)throw Error(r(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=e}},function(e){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ns(l),l}throw Ya=t,oe}}function Ga(l){try{var t=l._init;return t(l._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ya=a,oe):a}}var Ya=null;function Os(){if(Ya===null)throw Error(r(459));var l=Ya;return Ya=null,l}function Ns(l){if(l===oe||l===Wn)throw Error(r(483))}var re=null,Je=0;function Fn(l){var t=Je;return Je+=1,re===null&&(re=[]),_s(re,l,t)}function ke(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===nl?Error(r(525)):(l=Object.prototype.toString.call(t),Error(r(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Ds(l){function t(d,o){if(l){var m=d.deletions;m===null?(d.deletions=[o],d.flags|=16):m.push(o)}}function a(d,o){if(!l)return null;for(;o!==null;)t(d,o),o=o.sibling;return null}function e(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function n(d,o){return d=qt(d,o),d.index=0,d.sibling=null,d}function u(d,o,m){return d.index=m,l?(m=d.alternate,m!==null?(m=m.index,m<o?(d.flags|=67108866,o):m):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function i(d){return l&&d.alternate===null&&(d.flags|=67108866),d}function c(d,o,m,x){return o===null||o.tag!==6?(o=Ti(m,d.mode,x),o.return=d,o):(o=n(o,m),o.return=d,o)}function f(d,o,m,x){var R=m.type;return R===Dl?b(d,o,m.props.children,x,m.key):o!==null&&(o.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Rl&&Ga(R)===o.type)?(o=n(o,m.props),ke(o,m),o.return=d,o):(o=Vn(m.type,m.key,m.props,null,d.mode,x),ke(o,m),o.return=d,o)}function h(d,o,m,x){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=Ei(m,d.mode,x),o.return=d,o):(o=n(o,m.children||[]),o.return=d,o)}function b(d,o,m,x,R){return o===null||o.tag!==7?(o=Ua(m,d.mode,x,R),o.return=d,o):(o=n(o,m),o.return=d,o)}function z(d,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ti(""+o,d.mode,m),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ql:return m=Vn(o.type,o.key,o.props,null,d.mode,m),ke(m,o),m.return=d,m;case yl:return o=Ei(o,d.mode,m),o.return=d,o;case Rl:return o=Ga(o),z(d,o,m)}if(ul(o)||Ll(o))return o=Ua(o,d.mode,m,null),o.return=d,o;if(typeof o.then=="function")return z(d,Fn(o),m);if(o.$$typeof===Ol)return z(d,Jn(d,o),m);In(d,o)}return null}function v(d,o,m,x){var R=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return R!==null?null:c(d,o,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ql:return m.key===R?f(d,o,m,x):null;case yl:return m.key===R?h(d,o,m,x):null;case Rl:return m=Ga(m),v(d,o,m,x)}if(ul(m)||Ll(m))return R!==null?null:b(d,o,m,x,null);if(typeof m.then=="function")return v(d,o,Fn(m),x);if(m.$$typeof===Ol)return v(d,o,Jn(d,m),x);In(d,m)}return null}function y(d,o,m,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(m)||null,c(o,d,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:return d=d.get(x.key===null?m:x.key)||null,f(o,d,x,R);case yl:return d=d.get(x.key===null?m:x.key)||null,h(o,d,x,R);case Rl:return x=Ga(x),y(d,o,m,x,R)}if(ul(x)||Ll(x))return d=d.get(m)||null,b(o,d,x,R,null);if(typeof x.then=="function")return y(d,o,m,Fn(x),R);if(x.$$typeof===Ol)return y(d,o,m,Jn(o,x),R);In(o,x)}return null}function D(d,o,m,x){for(var R=null,tl=null,U=o,K=o=0,P=null;U!==null&&K<m.length;K++){U.index>K?(P=U,U=null):P=U.sibling;var al=v(d,U,m[K],x);if(al===null){U===null&&(U=P);break}l&&U&&al.alternate===null&&t(d,U),o=u(al,o,K),tl===null?R=al:tl.sibling=al,tl=al,U=P}if(K===m.length)return a(d,U),ll&&Xt(d,K),R;if(U===null){for(;K<m.length;K++)U=z(d,m[K],x),U!==null&&(o=u(U,o,K),tl===null?R=U:tl.sibling=U,tl=U);return ll&&Xt(d,K),R}for(U=e(U);K<m.length;K++)P=y(U,d,K,m[K],x),P!==null&&(l&&P.alternate!==null&&U.delete(P.key===null?K:P.key),o=u(P,o,K),tl===null?R=P:tl.sibling=P,tl=P);return l&&U.forEach(function(Ea){return t(d,Ea)}),ll&&Xt(d,K),R}function Y(d,o,m,x){if(m==null)throw Error(r(151));for(var R=null,tl=null,U=o,K=o=0,P=null,al=m.next();U!==null&&!al.done;K++,al=m.next()){U.index>K?(P=U,U=null):P=U.sibling;var Ea=v(d,U,al.value,x);if(Ea===null){U===null&&(U=P);break}l&&U&&Ea.alternate===null&&t(d,U),o=u(Ea,o,K),tl===null?R=Ea:tl.sibling=Ea,tl=Ea,U=P}if(al.done)return a(d,U),ll&&Xt(d,K),R;if(U===null){for(;!al.done;K++,al=m.next())al=z(d,al.value,x),al!==null&&(o=u(al,o,K),tl===null?R=al:tl.sibling=al,tl=al);return ll&&Xt(d,K),R}for(U=e(U);!al.done;K++,al=m.next())al=y(U,d,K,al.value,x),al!==null&&(l&&al.alternate!==null&&U.delete(al.key===null?K:al.key),o=u(al,o,K),tl===null?R=al:tl.sibling=al,tl=al);return l&&U.forEach(function(l1){return t(d,l1)}),ll&&Xt(d,K),R}function dl(d,o,m,x){if(typeof m=="object"&&m!==null&&m.type===Dl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ql:l:{for(var R=m.key;o!==null;){if(o.key===R){if(R=m.type,R===Dl){if(o.tag===7){a(d,o.sibling),x=n(o,m.props.children),x.return=d,d=x;break l}}else if(o.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Rl&&Ga(R)===o.type){a(d,o.sibling),x=n(o,m.props),ke(x,m),x.return=d,d=x;break l}a(d,o);break}else t(d,o);o=o.sibling}m.type===Dl?(x=Ua(m.props.children,d.mode,x,m.key),x.return=d,d=x):(x=Vn(m.type,m.key,m.props,null,d.mode,x),ke(x,m),x.return=d,d=x)}return i(d);case yl:l:{for(R=m.key;o!==null;){if(o.key===R)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){a(d,o.sibling),x=n(o,m.children||[]),x.return=d,d=x;break l}else{a(d,o);break}else t(d,o);o=o.sibling}x=Ei(m,d.mode,x),x.return=d,d=x}return i(d);case Rl:return m=Ga(m),dl(d,o,m,x)}if(ul(m))return D(d,o,m,x);if(Ll(m)){if(R=Ll(m),typeof R!="function")throw Error(r(150));return m=R.call(m),Y(d,o,m,x)}if(typeof m.then=="function")return dl(d,o,Fn(m),x);if(m.$$typeof===Ol)return dl(d,o,Jn(d,m),x);In(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(a(d,o.sibling),x=n(o,m),x.return=d,d=x):(a(d,o),x=Ti(m,d.mode,x),x.return=d,d=x),i(d)):a(d,o)}return function(d,o,m,x){try{Je=0;var R=dl(d,o,m,x);return re=null,R}catch(U){if(U===oe||U===Wn)throw U;var tl=ot(29,U,null,d.mode);return tl.lanes=x,tl.return=d,tl}}}var qa=Ds(!0),js=Ds(!1),ca=!1;function Bi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function fa(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function sa(l,t,a){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(il&2)!==0){var n=e.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t,t=Ln(l),hs(l,null,a),t}return Zn(l,e,t,a),Ln(l)}function We(l,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,zf(l,a)}}function Yi(l,t){var a=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:e.shared,callbacks:e.callbacks},l.updateQueue=a;return}l=a.lastBaseUpdate,l===null?a.firstBaseUpdate=t:l.next=t,a.lastBaseUpdate=t}var qi=!1;function $e(){if(qi){var l=se;if(l!==null)throw l}}function Fe(l,t,a,e){qi=!1;var n=l.updateQueue;ca=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,h=f.next;f.next=null,i===null?u=h:i.next=h,i=f;var b=l.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=h:c.next=h,b.lastBaseUpdate=f))}if(u!==null){var z=n.baseState;i=0,b=h=f=null,c=u;do{var v=c.lane&-536870913,y=v!==c.lane;if(y?(I&v)===v:(e&v)===v){v!==0&&v===fe&&(qi=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var D=l,Y=c;v=t;var dl=a;switch(Y.tag){case 1:if(D=Y.payload,typeof D=="function"){z=D.call(dl,z,v);break l}z=D;break l;case 3:D.flags=D.flags&-65537|128;case 0:if(D=Y.payload,v=typeof D=="function"?D.call(dl,z,v):D,v==null)break l;z=B({},z,v);break l;case 2:ca=!0}}v=c.callback,v!==null&&(l.flags|=64,y&&(l.flags|=8192),y=n.callbacks,y===null?n.callbacks=[v]:y.push(v))}else y={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(h=b=y,f=z):b=b.next=y,i|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(f=z),n.baseState=f,n.firstBaseUpdate=h,n.lastBaseUpdate=b,u===null&&(n.shared.lanes=0),ha|=i,l.lanes=i,l.memoizedState=z}}function Us(l,t){if(typeof l!="function")throw Error(r(191,l));l.call(t)}function Cs(l,t){var a=l.callbacks;if(a!==null)for(l.callbacks=null,l=0;l<a.length;l++)Us(a[l],t)}var de=s(null),Pn=s(0);function Hs(l,t){l=Ft,A(Pn,l),A(de,t),Ft=l|t.baseLanes}function Xi(){A(Pn,Ft),A(de,de.current)}function Qi(){Ft=Pn.current,S(de),S(Pn)}var rt=s(null),Et=null;function oa(l){var t=l.alternate;A(zl,zl.current&1),A(rt,l),Et===null&&(t===null||de.current!==null||t.memoizedState!==null)&&(Et=l)}function Zi(l){A(zl,zl.current),A(rt,l),Et===null&&(Et=l)}function Rs(l){l.tag===22?(A(zl,zl.current),A(rt,l),Et===null&&(Et=l)):ra()}function ra(){A(zl,zl.current),A(rt,rt.current)}function dt(l){S(rt),Et===l&&(Et=null),S(zl)}var zl=s(0);function lu(l){for(var t=l;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kc(a)||Wc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,w=null,ol=null,Al=null,tu=!1,me=!1,Xa=!1,au=0,Ie=0,he=null,Vd=0;function bl(){throw Error(r(321))}function Li(l,t){if(t===null)return!1;for(var a=0;a<t.length&&a<l.length;a++)if(!st(l[a],t[a]))return!1;return!0}function Vi(l,t,a,e,n,u){return Lt=u,w=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=l===null||l.memoizedState===null?bo:uc,Xa=!1,u=a(e,n),Xa=!1,me&&(u=Gs(t,a,e,n)),Bs(l),u}function Bs(l){g.H=tn;var t=ol!==null&&ol.next!==null;if(Lt=0,Al=ol=w=null,tu=!1,Ie=0,he=null,t)throw Error(r(300));l===null||Ml||(l=l.dependencies,l!==null&&Kn(l)&&(Ml=!0))}function Gs(l,t,a,e){w=l;var n=0;do{if(me&&(he=null),Ie=0,me=!1,25<=n)throw Error(r(301));if(n+=1,Al=ol=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}g.H=So,u=t(a,e)}while(me);return u}function wd(){var l=g.H,t=l.useState()[0];return t=typeof t.then=="function"?Pe(t):t,l=l.useState()[0],(ol!==null?ol.memoizedState:null)!==l&&(w.flags|=1024),t}function wi(){var l=au!==0;return au=0,l}function Ki(l,t,a){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~a}function Ji(l){if(tu){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}tu=!1}Lt=0,Al=ol=w=null,me=!1,Ie=au=0,he=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Al===null?w.memoizedState=Al=l:Al=Al.next=l,Al}function Tl(){if(ol===null){var l=w.alternate;l=l!==null?l.memoizedState:null}else l=ol.next;var t=Al===null?w.memoizedState:Al.next;if(t!==null)Al=t,ol=l;else{if(l===null)throw w.alternate===null?Error(r(467)):Error(r(310));ol=l,l={memoizedState:ol.memoizedState,baseState:ol.baseState,baseQueue:ol.baseQueue,queue:ol.queue,next:null},Al===null?w.memoizedState=Al=l:Al=Al.next=l}return Al}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pe(l){var t=Ie;return Ie+=1,he===null&&(he=[]),l=_s(he,l,t),t=w,(Al===null?t.memoizedState:Al.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?bo:uc),l}function nu(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pe(l);if(l.$$typeof===Ol)return Yl(l)}throw Error(r(438,String(l)))}function ki(l){var t=null,a=w.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=w.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=eu(),w.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(l),e=0;e<l;e++)a[e]=Rt;return t.index++,a}function Vt(l,t){return typeof t=="function"?t(l):t}function uu(l){var t=Tl();return Wi(t,ol,l)}function Wi(l,t,a){var e=l.queue;if(e===null)throw Error(r(311));e.lastRenderedReducer=a;var n=l.baseQueue,u=e.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,e.pending=null}if(u=l.baseState,n===null)l.memoizedState=u;else{t=n.next;var c=i=null,f=null,h=t,b=!1;do{var z=h.lane&-536870913;if(z!==h.lane?(I&z)===z:(Lt&z)===z){var v=h.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),z===fe&&(b=!0);else if((Lt&v)===v){h=h.next,v===fe&&(b=!0);continue}else z={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=z,i=u):f=f.next=z,w.lanes|=v,ha|=v;z=h.action,Xa&&a(u,z),u=h.hasEagerState?h.eagerState:a(u,z)}else v={lane:z,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=v,i=u):f=f.next=v,w.lanes|=z,ha|=z;h=h.next}while(h!==null&&h!==t);if(f===null?i=u:f.next=c,!st(u,l.memoizedState)&&(Ml=!0,b&&(a=se,a!==null)))throw a;l.memoizedState=u,l.baseState=i,l.baseQueue=f,e.lastRenderedState=u}return n===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function $i(l){var t=Tl(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var e=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=l(u,i.action),i=i.next;while(i!==n);st(u,t.memoizedState)||(Ml=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,e]}function Ys(l,t,a){var e=w,n=Tl(),u=ll;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var i=!st((ol||n).memoizedState,a);if(i&&(n.memoizedState=a,Ml=!0),n=n.queue,Pi(Qs.bind(null,e,n,l),[l]),n.getSnapshot!==t||i||Al!==null&&Al.memoizedState.tag&1){if(e.flags|=2048,ve(9,{destroy:void 0},Xs.bind(null,e,n,a,t),null),ml===null)throw Error(r(349));u||(Lt&127)!==0||qs(e,t,a)}return a}function qs(l,t,a){l.flags|=16384,l={getSnapshot:t,value:a},t=w.updateQueue,t===null?(t=eu(),w.updateQueue=t,t.stores=[l]):(a=t.stores,a===null?t.stores=[l]:a.push(l))}function Xs(l,t,a,e){t.value=a,t.getSnapshot=e,Zs(t)&&Ls(l)}function Qs(l,t,a){return a(function(){Zs(t)&&Ls(l)})}function Zs(l){var t=l.getSnapshot;l=l.value;try{var a=t();return!st(l,a)}catch{return!0}}function Ls(l){var t=ja(l,2);t!==null&&et(t,l,2)}function Fi(l){var t=Jl();if(typeof l=="function"){var a=l;if(l=a(),Xa){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:l},t}function Vs(l,t,a,e){return l.baseState=a,Wi(l,ol,typeof e=="function"?e:Vt)}function Kd(l,t,a,e,n){if(fu(l))throw Error(r(485));if(l=t.action,l!==null){var u={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};g.T!==null?a(!0):u.isTransition=!1,e(u),a=t.pending,a===null?(u.next=t.pending=u,ws(t,u)):(u.next=a.next,t.pending=a.next=u)}}function ws(l,t){var a=t.action,e=t.payload,n=l.state;if(t.isTransition){var u=g.T,i={};g.T=i;try{var c=a(n,e),f=g.S;f!==null&&f(i,c),Ks(l,t,c)}catch(h){Ii(l,t,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),g.T=u}}else try{u=a(n,e),Ks(l,t,u)}catch(h){Ii(l,t,h)}}function Ks(l,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){Js(l,t,e)},function(e){return Ii(l,t,e)}):Js(l,t,a)}function Js(l,t,a){t.status="fulfilled",t.value=a,ks(t),l.state=a,t=l.pending,t!==null&&(a=t.next,a===t?l.pending=null:(a=a.next,t.next=a,ws(l,a)))}function Ii(l,t,a){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,ks(t),t=t.next;while(t!==e)}l.action=null}function ks(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Ws(l,t){return t}function $s(l,t){if(ll){var a=ml.formState;if(a!==null){l:{var e=w;if(ll){if(hl){t:{for(var n=hl,u=Tt;n.nodeType!==8;){if(!u){n=null;break t}if(n=At(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){hl=At(n.nextSibling),e=n.data==="F!";break l}}ua(e)}e=!1}e&&(t=a[0])}}return a=Jl(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},a.queue=e,a=yo.bind(null,w,e),e.dispatch=a,e=Fi(!1),u=nc.bind(null,w,!1,e.queue),e=Jl(),n={state:t,dispatch:null,action:l,pending:null},e.queue=n,a=Kd.bind(null,w,n,u,a),n.dispatch=a,e.memoizedState=l,[t,a,!1]}function Fs(l){var t=Tl();return Is(t,ol,l)}function Is(l,t,a){if(t=Wi(l,t,Ws)[0],l=uu(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=Pe(t)}catch(i){throw i===oe?Wn:i}else e=t;t=Tl();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(w.flags|=2048,ve(9,{destroy:void 0},Jd.bind(null,n,a),null)),[e,u,l]}function Jd(l,t){l.action=t}function Ps(l){var t=Tl(),a=ol;if(a!==null)return Is(t,a,l);Tl(),t=t.memoizedState,a=Tl();var e=a.queue.dispatch;return a.memoizedState=l,[t,e,!1]}function ve(l,t,a,e){return l={tag:l,create:a,deps:e,inst:t,next:null},t=w.updateQueue,t===null&&(t=eu(),w.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=l.next=l:(e=a.next,a.next=l,l.next=e,t.lastEffect=l),l}function lo(){return Tl().memoizedState}function iu(l,t,a,e){var n=Jl();w.flags|=l,n.memoizedState=ve(1|t,{destroy:void 0},a,e===void 0?null:e)}function cu(l,t,a,e){var n=Tl();e=e===void 0?null:e;var u=n.memoizedState.inst;ol!==null&&e!==null&&Li(e,ol.memoizedState.deps)?n.memoizedState=ve(t,u,a,e):(w.flags|=l,n.memoizedState=ve(1|t,u,a,e))}function to(l,t){iu(8390656,8,l,t)}function Pi(l,t){cu(2048,8,l,t)}function kd(l){w.flags|=4;var t=w.updateQueue;if(t===null)t=eu(),w.updateQueue=t,t.events=[l];else{var a=t.events;a===null?t.events=[l]:a.push(l)}}function ao(l){var t=Tl().memoizedState;return kd({ref:t,nextImpl:l}),function(){if((il&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function eo(l,t){return cu(4,2,l,t)}function no(l,t){return cu(4,4,l,t)}function uo(l,t){if(typeof t=="function"){l=l();var a=t(l);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function io(l,t,a){a=a!=null?a.concat([l]):null,cu(4,4,uo.bind(null,t,l),a)}function lc(){}function co(l,t){var a=Tl();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&Li(t,e[1])?e[0]:(a.memoizedState=[l,t],l)}function fo(l,t){var a=Tl();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&Li(t,e[1]))return e[0];if(e=l(),Xa){la(!0);try{l()}finally{la(!1)}}return a.memoizedState=[e,t],e}function tc(l,t,a){return a===void 0||(Lt&1073741824)!==0&&(I&261930)===0?l.memoizedState=t:(l.memoizedState=a,l=or(),w.lanes|=l,ha|=l,a)}function so(l,t,a,e){return st(a,t)?a:de.current!==null?(l=tc(l,a,e),st(l,t)||(Ml=!0),l):(Lt&42)===0||(Lt&1073741824)!==0&&(I&261930)===0?(Ml=!0,l.memoizedState=a):(l=or(),w.lanes|=l,ha|=l,t)}function oo(l,t,a,e,n){var u=M.p;M.p=u!==0&&8>u?u:8;var i=g.T,c={};g.T=c,nc(l,!1,t,a);try{var f=n(),h=g.S;if(h!==null&&h(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=Ld(f,e);ln(l,t,b,vt(l))}else ln(l,t,e,vt(l))}catch(z){ln(l,t,{then:function(){},status:"rejected",reason:z},vt())}finally{M.p=u,i!==null&&c.types!==null&&(i.types=c.types),g.T=i}}function Wd(){}function ac(l,t,a,e){if(l.tag!==5)throw Error(r(476));var n=ro(l).queue;oo(l,n,t,j,a===null?Wd:function(){return mo(l),a(e)})}function ro(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:j},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:a},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function mo(l){var t=ro(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},vt())}function ec(){return Yl(gn)}function ho(){return Tl().memoizedState}function vo(){return Tl().memoizedState}function $d(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();l=fa(a);var e=sa(t,l,a);e!==null&&(et(e,t,a),We(e,t,a)),t={cache:Ui()},l.payload=t;return}t=t.return}}function Fd(l,t,a){var e=vt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(l)?po(t,a):(a=xi(l,t,a,e),a!==null&&(et(a,l,e),go(a,t,e)))}function yo(l,t,a){var e=vt();ln(l,t,a,e)}function ln(l,t,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fu(l))po(t,n);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,a);if(n.hasEagerState=!0,n.eagerState=c,st(c,i))return Zn(l,t,n,0),ml===null&&Qn(),!1}catch{}if(a=xi(l,t,n,e),a!==null)return et(a,l,e),go(a,t,e),!0}return!1}function nc(l,t,a,e){if(e={lane:2,revertLane:Bc(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},fu(l)){if(t)throw Error(r(479))}else t=xi(l,a,e,2),t!==null&&et(t,l,2)}function fu(l){var t=l.alternate;return l===w||t!==null&&t===w}function po(l,t){me=tu=!0;var a=l.pending;a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t}function go(l,t,a){if((a&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,zf(l,a)}}var tn={readContext:Yl,use:nu,useCallback:bl,useContext:bl,useEffect:bl,useImperativeHandle:bl,useLayoutEffect:bl,useInsertionEffect:bl,useMemo:bl,useReducer:bl,useRef:bl,useState:bl,useDebugValue:bl,useDeferredValue:bl,useTransition:bl,useSyncExternalStore:bl,useId:bl,useHostTransitionStatus:bl,useFormState:bl,useActionState:bl,useOptimistic:bl,useMemoCache:bl,useCacheRefresh:bl};tn.useEffectEvent=bl;var bo={readContext:Yl,use:nu,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Yl,useEffect:to,useImperativeHandle:function(l,t,a){a=a!=null?a.concat([l]):null,iu(4194308,4,uo.bind(null,t,l),a)},useLayoutEffect:function(l,t){return iu(4194308,4,l,t)},useInsertionEffect:function(l,t){iu(4,2,l,t)},useMemo:function(l,t){var a=Jl();t=t===void 0?null:t;var e=l();if(Xa){la(!0);try{l()}finally{la(!1)}}return a.memoizedState=[e,t],e},useReducer:function(l,t,a){var e=Jl();if(a!==void 0){var n=a(t);if(Xa){la(!0);try{a(t)}finally{la(!1)}}}else n=t;return e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},e.queue=l,l=l.dispatch=Fd.bind(null,w,l),[e.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Fi(l);var t=l.queue,a=yo.bind(null,w,t);return t.dispatch=a,[l.memoizedState,a]},useDebugValue:lc,useDeferredValue:function(l,t){var a=Jl();return tc(a,l,t)},useTransition:function(){var l=Fi(!1);return l=oo.bind(null,w,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,a){var e=w,n=Jl();if(ll){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),ml===null)throw Error(r(349));(I&127)!==0||qs(e,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,to(Qs.bind(null,e,u,l),[l]),e.flags|=2048,ve(9,{destroy:void 0},Xs.bind(null,e,u,a,t),null),a},useId:function(){var l=Jl(),t=ml.identifierPrefix;if(ll){var a=Ut,e=jt;a=(e&~(1<<32-ft(e)-1)).toString(32)+a,t="_"+t+"R_"+a,a=au++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Vd++,t="_"+t+"r_"+a.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:ec,useFormState:$s,useActionState:$s,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=nc.bind(null,w,!0,a),a.dispatch=t,[l,t]},useMemoCache:ki,useCacheRefresh:function(){return Jl().memoizedState=$d.bind(null,w)},useEffectEvent:function(l){var t=Jl(),a={impl:l};return t.memoizedState=a,function(){if((il&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},uc={readContext:Yl,use:nu,useCallback:co,useContext:Yl,useEffect:Pi,useImperativeHandle:io,useInsertionEffect:eo,useLayoutEffect:no,useMemo:fo,useReducer:uu,useRef:lo,useState:function(){return uu(Vt)},useDebugValue:lc,useDeferredValue:function(l,t){var a=Tl();return so(a,ol.memoizedState,l,t)},useTransition:function(){var l=uu(Vt)[0],t=Tl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Ys,useId:ho,useHostTransitionStatus:ec,useFormState:Fs,useActionState:Fs,useOptimistic:function(l,t){var a=Tl();return Vs(a,ol,l,t)},useMemoCache:ki,useCacheRefresh:vo};uc.useEffectEvent=ao;var So={readContext:Yl,use:nu,useCallback:co,useContext:Yl,useEffect:Pi,useImperativeHandle:io,useInsertionEffect:eo,useLayoutEffect:no,useMemo:fo,useReducer:$i,useRef:lo,useState:function(){return $i(Vt)},useDebugValue:lc,useDeferredValue:function(l,t){var a=Tl();return ol===null?tc(a,l,t):so(a,ol.memoizedState,l,t)},useTransition:function(){var l=$i(Vt)[0],t=Tl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Ys,useId:ho,useHostTransitionStatus:ec,useFormState:Ps,useActionState:Ps,useOptimistic:function(l,t){var a=Tl();return ol!==null?Vs(a,ol,l,t):(a.baseState=l,[l,a.queue.dispatch])},useMemoCache:ki,useCacheRefresh:vo};So.useEffectEvent=ao;function ic(l,t,a,e){t=l.memoizedState,a=a(e,t),a=a==null?t:B({},t,a),l.memoizedState=a,l.lanes===0&&(l.updateQueue.baseState=a)}var cc={enqueueSetState:function(l,t,a){l=l._reactInternals;var e=vt(),n=fa(e);n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(et(t,l,e),We(t,l,e))},enqueueReplaceState:function(l,t,a){l=l._reactInternals;var e=vt(),n=fa(e);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(et(t,l,e),We(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var a=vt(),e=fa(a);e.tag=2,t!=null&&(e.callback=t),t=sa(l,e,a),t!==null&&(et(t,l,a),We(t,l,a))}};function xo(l,t,a,e,n,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,u,i):t.prototype&&t.prototype.isPureReactComponent?!Qe(a,e)||!Qe(n,u):!0}function zo(l,t,a,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==l&&cc.enqueueReplaceState(t,t.state,null)}function Qa(l,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(l=l.defaultProps){a===t&&(a=B({},a));for(var n in l)a[n]===void 0&&(a[n]=l[n])}return a}function To(l){Xn(l)}function Eo(l){console.error(l)}function Ao(l){Xn(l)}function su(l,t){try{var a=l.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Mo(l,t,a){try{var e=l.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fc(l,t,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){su(l,t)},a}function _o(l){return l=fa(l),l.tag=3,l}function Oo(l,t,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=e.value;l.payload=function(){return n(u)},l.callback=function(){Mo(t,a,e)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Mo(t,a,e),typeof n!="function"&&(va===null?va=new Set([this]):va.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function Id(l,t,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&ce(t,a,n,!0),a=rt.current,a!==null){switch(a.tag){case 31:case 13:return Et===null?xu():a.alternate===null&&Sl===0&&(Sl=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===$n?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),Cc(l,e,n)),!1;case 22:return a.flags|=65536,e===$n?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),Cc(l,e,n)),!1}throw Error(r(435,a.tag))}return Cc(l,e,n),xu(),!1}if(ll)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,e!==_i&&(l=Error(r(422),{cause:e}),Ve(St(l,a)))):(e!==_i&&(t=Error(r(423),{cause:e}),Ve(St(t,a))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,e=St(e,a),n=fc(l.stateNode,e,n),Yi(l,n),Sl!==4&&(Sl=2)),!1;var u=Error(r(520),{cause:e});if(u=St(u,a),on===null?on=[u]:on.push(u),Sl!==4&&(Sl=2),t===null)return!0;e=St(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,l=n&-n,a.lanes|=l,l=fc(a.stateNode,e,l),Yi(a,l),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(va===null||!va.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=_o(n),Oo(n,l,a,e),Yi(a,n),!1}a=a.return}while(a!==null);return!1}var sc=Error(r(461)),Ml=!1;function ql(l,t,a,e){t.child=l===null?js(t,null,a,e):qa(t,l.child,a,e)}function No(l,t,a,e,n){a=a.render;var u=t.ref;if("ref"in e){var i={};for(var c in e)c!=="ref"&&(i[c]=e[c])}else i=e;return Ra(t),e=Vi(l,t,a,i,u,n),c=wi(),l!==null&&!Ml?(Ki(l,t,n),wt(l,t,n)):(ll&&c&&Ai(t),t.flags|=1,ql(l,t,e,n),t.child)}function Do(l,t,a,e,n){if(l===null){var u=a.type;return typeof u=="function"&&!zi(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,jo(l,t,u,e,n)):(l=Vn(a.type,null,e,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(u=l.child,!pc(l,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:Qe,a(i,e)&&l.ref===t.ref)return wt(l,t,n)}return t.flags|=1,l=qt(u,e),l.ref=t.ref,l.return=t,t.child=l}function jo(l,t,a,e,n){if(l!==null){var u=l.memoizedProps;if(Qe(u,e)&&l.ref===t.ref)if(Ml=!1,t.pendingProps=e=u,pc(l,n))(l.flags&131072)!==0&&(Ml=!0);else return t.lanes=l.lanes,wt(l,t,n)}return oc(l,t,a,e,n)}function Uo(l,t,a,e){var n=e.children,u=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,l!==null){for(e=t.child=l.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~u}else e=0,t.child=null;return Co(l,t,u,a,e)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&kn(t,u!==null?u.cachePool:null),u!==null?Hs(t,u):Xi(),Rs(t);else return e=t.lanes=536870912,Co(l,t,u!==null?u.baseLanes|a:a,a,e)}else u!==null?(kn(t,u.cachePool),Hs(t,u),ra(),t.memoizedState=null):(l!==null&&kn(t,null),Xi(),ra());return ql(l,t,n,a),t.child}function an(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Co(l,t,a,e,n){var u=Hi();return u=u===null?null:{parent:El._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},l!==null&&kn(t,null),Xi(),Rs(t),l!==null&&ce(l,t,e,!0),t.childLanes=n,null}function ou(l,t){return t=du({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Ho(l,t,a){return qa(t,l.child,null,a),l=ou(t,t.pendingProps),l.flags|=2,dt(t),t.memoizedState=null,l}function Pd(l,t,a){var e=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=ou(t,e),t.lanes=536870912,an(null,l);if(Zi(t),(l=hl)?(l=Kr(l,Tt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ea!==null?{id:jt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=ys(l),a.return=t,t.child=a,Gl=t,hl=null)):l=null,l===null)throw ua(t);return t.lanes=536870912,null}return ou(t,e)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Zi(t),n)if(t.flags&256)t.flags&=-257,t=Ho(l,t,a);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ml||ce(l,t,a,!1),n=(a&l.childLanes)!==0,Ml||n){if(e=ml,e!==null&&(i=Tf(e,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,ja(l,i),et(e,l,i),sc;xu(),t=Ho(l,t,a)}else l=u.treeContext,hl=At(i.nextSibling),Gl=t,ll=!0,na=null,Tt=!1,l!==null&&bs(t,l),t=ou(t,e),t.flags|=4096;return t}return l=qt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function ru(l,t){var a=t.ref;if(a===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(l===null||l.ref!==a)&&(t.flags|=4194816)}}function oc(l,t,a,e,n){return Ra(t),a=Vi(l,t,a,e,void 0,n),e=wi(),l!==null&&!Ml?(Ki(l,t,n),wt(l,t,n)):(ll&&e&&Ai(t),t.flags|=1,ql(l,t,a,n),t.child)}function Ro(l,t,a,e,n,u){return Ra(t),t.updateQueue=null,a=Gs(t,e,a,n),Bs(l),e=wi(),l!==null&&!Ml?(Ki(l,t,u),wt(l,t,u)):(ll&&e&&Ai(t),t.flags|=1,ql(l,t,a,u),t.child)}function Bo(l,t,a,e,n){if(Ra(t),t.stateNode===null){var u=ee,i=a.contextType;typeof i=="object"&&i!==null&&(u=Yl(i)),u=new a(e,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=cc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=e,u.state=t.memoizedState,u.refs={},Bi(t),i=a.contextType,u.context=typeof i=="object"&&i!==null?Yl(i):ee,u.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ic(t,a,i,e),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&cc.enqueueReplaceState(u,u.state,null),Fe(t,e,u,n),$e(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){u=t.stateNode;var c=t.memoizedProps,f=Qa(a,c);u.props=f;var h=u.context,b=a.contextType;i=ee,typeof b=="object"&&b!==null&&(i=Yl(b));var z=a.getDerivedStateFromProps;b=typeof z=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&zo(t,u,e,i),ca=!1;var v=t.memoizedState;u.state=v,Fe(t,e,u,n),$e(),h=t.memoizedState,c||v!==h||ca?(typeof z=="function"&&(ic(t,a,z,e),h=t.memoizedState),(f=ca||xo(t,a,f,e,v,h,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=h),u.props=e,u.state=h,u.context=i,e=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{u=t.stateNode,Gi(l,t),i=t.memoizedProps,b=Qa(a,i),u.props=b,z=t.pendingProps,v=u.context,h=a.contextType,f=ee,typeof h=="object"&&h!==null&&(f=Yl(h)),c=a.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==z||v!==f)&&zo(t,u,e,f),ca=!1,v=t.memoizedState,u.state=v,Fe(t,e,u,n),$e();var y=t.memoizedState;i!==z||v!==y||ca||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof c=="function"&&(ic(t,a,c,e),y=t.memoizedState),(b=ca||xo(t,a,b,e,v,y,f)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(e,y,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(e,y,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&v===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&v===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=y),u.props=e,u.state=y,u.context=f,e=b):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&v===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&v===l.memoizedState||(t.flags|=1024),e=!1)}return u=e,ru(l,t),e=(t.flags&128)!==0,u||e?(u=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,l!==null&&e?(t.child=qa(t,l.child,null,n),t.child=qa(t,null,a,n)):ql(l,t,a,n),t.memoizedState=u.state,l=t.child):l=wt(l,t,n),l}function Go(l,t,a,e){return Ca(),t.flags|=256,ql(l,t,a,e),t.child}var rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(l){return{baseLanes:l,cachePool:As()}}function mc(l,t,a){return l=l!==null?l.childLanes&~a:0,t&&(l|=ht),l}function Yo(l,t,a){var e=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(zl.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?oa(t):ra(),(l=hl)?(l=Kr(l,Tt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ea!==null?{id:jt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=ys(l),a.return=t,t.child=a,Gl=t,hl=null)):l=null,l===null)throw ua(t);return Wc(l)?t.lanes=32:t.lanes=536870912,null}var c=e.children;return e=e.fallback,n?(ra(),n=t.mode,c=du({mode:"hidden",children:c},n),e=Ua(e,n,a,null),c.return=t,e.return=t,c.sibling=e,t.child=c,e=t.child,e.memoizedState=dc(a),e.childLanes=mc(l,i,a),t.memoizedState=rc,an(null,e)):(oa(t),hc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(oa(t),t.flags&=-257,t=vc(l,t,a)):t.memoizedState!==null?(ra(),t.child=l.child,t.flags|=128,t=null):(ra(),c=e.fallback,n=t.mode,e=du({mode:"visible",children:e.children},n),c=Ua(c,n,a,null),c.flags|=2,e.return=t,c.return=t,e.sibling=c,t.child=e,qa(t,l.child,null,a),e=t.child,e.memoizedState=dc(a),e.childLanes=mc(l,i,a),t.memoizedState=rc,t=an(null,e));else if(oa(t),Wc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var h=i.dgst;i=h,e=Error(r(419)),e.stack="",e.digest=i,Ve({value:e,source:null,stack:null}),t=vc(l,t,a)}else if(Ml||ce(l,t,a,!1),i=(a&l.childLanes)!==0,Ml||i){if(i=ml,i!==null&&(e=Tf(i,a),e!==0&&e!==f.retryLane))throw f.retryLane=e,ja(l,e),et(i,l,e),sc;kc(c)||xu(),t=vc(l,t,a)}else kc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,hl=At(c.nextSibling),Gl=t,ll=!0,na=null,Tt=!1,l!==null&&bs(t,l),t=hc(t,e.children),t.flags|=4096);return t}return n?(ra(),c=e.fallback,n=t.mode,f=l.child,h=f.sibling,e=qt(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,h!==null?c=qt(h,c):(c=Ua(c,n,a,null),c.flags|=2),c.return=t,e.return=t,e.sibling=c,t.child=e,an(null,e),e=t.child,c=l.child.memoizedState,c===null?c=dc(a):(n=c.cachePool,n!==null?(f=El._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=As(),c={baseLanes:c.baseLanes|a,cachePool:n}),e.memoizedState=c,e.childLanes=mc(l,i,a),t.memoizedState=rc,an(l.child,e)):(oa(t),a=l.child,l=a.sibling,a=qt(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=a,t.memoizedState=null,a)}function hc(l,t){return t=du({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function du(l,t){return l=ot(22,l,null,t),l.lanes=0,l}function vc(l,t,a){return qa(t,l.child,null,a),l=hc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function qo(l,t,a){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),Di(l.return,t,a)}function yc(l,t,a,e,n,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=n,i.treeForkCount=u)}function Xo(l,t,a){var e=t.pendingProps,n=e.revealOrder,u=e.tail;e=e.children;var i=zl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,A(zl,i),ql(l,t,e,a),e=ll?Le:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&qo(l,a,t);else if(l.tag===19)qo(l,a,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)l=a.alternate,l!==null&&lu(l)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),yc(t,!1,n,a,u,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&lu(l)===null){t.child=n;break}l=n.sibling,n.sibling=a,a=n,n=l}yc(t,!0,a,null,u,e);break;case"together":yc(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function wt(l,t,a){if(l!==null&&(t.dependencies=l.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(l!==null){if(ce(l,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(r(153));if(t.child!==null){for(l=t.child,a=qt(l,l.pendingProps),t.child=a,a.return=t;l.sibling!==null;)l=l.sibling,a=a.sibling=qt(l,l.pendingProps),a.return=t;a.sibling=null}return t.child}function pc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function lm(l,t,a){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),ia(t,El,l.memoizedState.cache),Ca();break;case 27:case 5:Oe(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zi(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Yo(l,t,a):(oa(t),l=wt(l,t,a),l!==null?l.sibling:null);oa(t);break;case 19:var n=(l.flags&128)!==0;if(e=(a&t.childLanes)!==0,e||(ce(l,t,a,!1),e=(a&t.childLanes)!==0),n){if(e)return Xo(l,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(zl,zl.current),e)break;return null;case 22:return t.lanes=0,Uo(l,t,a,t.pendingProps);case 24:ia(t,El,l.memoizedState.cache)}return wt(l,t,a)}function Qo(l,t,a){if(l!==null)if(l.memoizedProps!==t.pendingProps)Ml=!0;else{if(!pc(l,a)&&(t.flags&128)===0)return Ml=!1,lm(l,t,a);Ml=(l.flags&131072)!==0}else Ml=!1,ll&&(t.flags&1048576)!==0&&gs(t,Le,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=Ga(t.elementType),t.type=l,typeof l=="function")zi(l)?(e=Qa(l,e),t.tag=1,t=Bo(null,t,l,e,a)):(t.tag=0,t=oc(null,t,l,e,a));else{if(l!=null){var n=l.$$typeof;if(n===wl){t.tag=11,t=No(null,t,l,e,a);break l}else if(n===Q){t.tag=14,t=Do(null,t,l,e,a);break l}}throw t=G(l)||l,Error(r(306,t,""))}}return t;case 0:return oc(l,t,t.type,t.pendingProps,a);case 1:return e=t.type,n=Qa(e,t.pendingProps),Bo(l,t,e,n,a);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(r(387));e=t.pendingProps;var u=t.memoizedState;n=u.element,Gi(l,t),Fe(t,e,null,a);var i=t.memoizedState;if(e=i.cache,ia(t,El,e),e!==u.cache&&ji(t,[El],a,!0),$e(),e=i.element,u.isDehydrated)if(u={element:e,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Go(l,t,e,a);break l}else if(e!==n){n=St(Error(r(424)),t),Ve(n),t=Go(l,t,e,a);break l}else for(l=t.stateNode.containerInfo,l.nodeType===9?l=l.body:l=l.nodeName==="HTML"?l.ownerDocument.body:l,hl=At(l.firstChild),Gl=t,ll=!0,na=null,Tt=!0,a=js(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ca(),e===n){t=wt(l,t,a);break l}ql(l,t,e,a)}t=t.child}return t;case 26:return ru(l,t),l===null?(a=Ir(t.type,null,t.pendingProps,null))?t.memoizedState=a:ll||(a=t.type,l=t.pendingProps,e=Ou(J.current).createElement(a),e[Bl]=t,e[Fl]=l,Xl(e,a,l),jl(e),t.stateNode=e):t.memoizedState=Ir(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Oe(t),l===null&&ll&&(e=t.stateNode=Wr(t.type,t.pendingProps,J.current),Gl=t,Tt=!0,n=hl,ba(t.type)?($c=n,hl=At(e.firstChild)):hl=n),ql(l,t,t.pendingProps.children,a),ru(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=e=hl)&&(e=Dm(e,t.type,t.pendingProps,Tt),e!==null?(t.stateNode=e,Gl=t,hl=At(e.firstChild),Tt=!1,n=!0):n=!1),n||ua(t)),Oe(t),n=t.type,u=t.pendingProps,i=l!==null?l.memoizedProps:null,e=u.children,wc(n,u)?e=null:i!==null&&wc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Vi(l,t,wd,null,null,a),gn._currentValue=n),ru(l,t),ql(l,t,e,a),t.child;case 6:return l===null&&ll&&((l=a=hl)&&(a=jm(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Gl=t,hl=null,l=!0):l=!1),l||ua(t)),null;case 13:return Yo(l,t,a);case 4:return Kl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=qa(t,null,e,a):ql(l,t,e,a),t.child;case 11:return No(l,t,t.type,t.pendingProps,a);case 7:return ql(l,t,t.pendingProps,a),t.child;case 8:return ql(l,t,t.pendingProps.children,a),t.child;case 12:return ql(l,t,t.pendingProps.children,a),t.child;case 10:return e=t.pendingProps,ia(t,t.type,e.value),ql(l,t,e.children,a),t.child;case 9:return n=t.type._context,e=t.pendingProps.children,Ra(t),n=Yl(n),e=e(n),t.flags|=1,ql(l,t,e,a),t.child;case 14:return Do(l,t,t.type,t.pendingProps,a);case 15:return jo(l,t,t.type,t.pendingProps,a);case 19:return Xo(l,t,a);case 31:return Pd(l,t,a);case 22:return Uo(l,t,a,t.pendingProps);case 24:return Ra(t),e=Yl(El),l===null?(n=Hi(),n===null&&(n=ml,u=Ui(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:e,cache:n},Bi(t),ia(t,El,n)):((l.lanes&a)!==0&&(Gi(l,t),Fe(t,null,null,a),$e()),n=l.memoizedState,u=t.memoizedState,n.parent!==e?(n={parent:e,cache:e},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ia(t,El,e)):(e=u.cache,ia(t,El,e),e!==n.cache&&ji(t,[El],a,!0))),ql(l,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Kt(l){l.flags|=4}function gc(l,t,a,e,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(hr())l.flags|=8192;else throw Ya=$n,Ri}else l.flags&=-16777217}function Zo(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!e0(t))if(hr())l.flags|=8192;else throw Ya=$n,Ri}function mu(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?Sf():536870912,l.lanes|=t,be|=t)}function en(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l.tail=null:a.sibling=null;break;case"collapsed":a=l.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function vl(l){var t=l.alternate!==null&&l.alternate.child===l.child,a=0,e=0;if(t)for(var n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=e,l.childLanes=a,t}function tm(l,t,a){var e=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vl(t),null;case 1:return vl(t),null;case 3:return a=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Zt(El),xl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(l===null||l.child===null)&&(ie(t)?Kt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oi())),vl(t),null;case 26:var n=t.type,u=t.memoizedState;return l===null?(Kt(t),u!==null?(vl(t),Zo(t,u)):(vl(t),gc(t,n,null,e,a))):u?u!==l.memoizedState?(Kt(t),vl(t),Zo(t,u)):(vl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&Kt(t),vl(t),gc(t,n,l,e,a)),null;case 27:if(En(t),a=J.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Kt(t);else{if(!e){if(t.stateNode===null)throw Error(r(166));return vl(t),null}l=N.current,ie(t)?Ss(t):(l=Wr(n,e,a),t.stateNode=l,Kt(t))}return vl(t),null;case 5:if(En(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Kt(t);else{if(!e){if(t.stateNode===null)throw Error(r(166));return vl(t),null}if(u=N.current,ie(t))Ss(t);else{var i=Ou(J.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?u.multiple=!0:e.size&&(u.size=e.size);break;default:u=typeof e.is=="string"?i.createElement(n,{is:e.is}):i.createElement(n)}}u[Bl]=t,u[Fl]=e;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;l:switch(Xl(u,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&Kt(t)}}return vl(t),gc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,a),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&Kt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(r(166));if(l=J.current,ie(t)){if(l=t.stateNode,a=t.memoizedProps,e=null,n=Gl,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}l[Bl]=t,l=!!(l.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||Yr(l.nodeValue,a)),l||ua(t,!0)}else l=Ou(l).createTextNode(e),l[Bl]=t,t.stateNode=l}return vl(t),null;case 31:if(a=t.memoizedState,l===null||l.memoizedState!==null){if(e=ie(t),a!==null){if(l===null){if(!e)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(557));l[Bl]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;vl(t),l=!1}else a=Oi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),l=!0;if(!l)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return vl(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ie(t),e!==null&&e.dehydrated!==null){if(l===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Bl]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;vl(t),n=!1}else n=Oi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=e!==null,l=l!==null&&l.memoizedState!==null,a&&(e=t.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),u=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(u=e.memoizedState.cachePool.pool),u!==n&&(e.flags|=2048)),a!==l&&a&&(t.child.flags|=8192),mu(t,t.updateQueue),vl(t),null);case 4:return xl(),l===null&&Xc(t.stateNode.containerInfo),vl(t),null;case 10:return Zt(t.type),vl(t),null;case 19:if(S(zl),e=t.memoizedState,e===null)return vl(t),null;if(n=(t.flags&128)!==0,u=e.rendering,u===null)if(n)en(e,!1);else{if(Sl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(u=lu(l),u!==null){for(t.flags|=128,en(e,!1),l=u.updateQueue,t.updateQueue=l,mu(t,l),t.subtreeFlags=0,l=a,a=t.child;a!==null;)vs(a,l),a=a.sibling;return A(zl,zl.current&1|2),ll&&Xt(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&it()>gu&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304)}else{if(!n)if(l=lu(u),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,mu(t,l),en(e,!0),e.tail===null&&e.tailMode==="hidden"&&!u.alternate&&!ll)return vl(t),null}else 2*it()-e.renderingStartTime>gu&&a!==536870912&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304);e.isBackwards?(u.sibling=t.child,t.child=u):(l=e.last,l!==null?l.sibling=u:t.child=u,e.last=u)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=it(),l.sibling=null,a=zl.current,A(zl,n?a&1|2:a&1),ll&&Xt(t,e.treeForkCount),l):(vl(t),null);case 22:case 23:return dt(t),Qi(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(vl(t),t.subtreeFlags&6&&(t.flags|=8192)):vl(t),a=t.updateQueue,a!==null&&mu(t,a.retryQueue),a=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),l!==null&&S(Ba),null;case 24:return a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(El),vl(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function am(l,t){switch(Mi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Zt(El),xl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(r(340));Ca()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(dt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ca()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return S(zl),null;case 4:return xl(),null;case 10:return Zt(t.type),null;case 22:case 23:return dt(t),Qi(),l!==null&&S(Ba),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Zt(El),null;case 25:return null;default:return null}}function Lo(l,t){switch(Mi(t),t.tag){case 3:Zt(El),xl();break;case 26:case 27:case 5:En(t);break;case 4:xl();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:S(zl);break;case 10:Zt(t.type);break;case 22:case 23:dt(t),Qi(),l!==null&&S(Ba);break;case 24:Zt(El)}}function nn(l,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&l)===l){e=void 0;var u=a.create,i=a.inst;e=u(),i.destroy=e}a=a.next}while(a!==n)}}catch(c){sl(t,t.return,c)}}function da(l,t,a){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var u=n.next;e=u;do{if((e.tag&l)===l){var i=e.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=a,h=c;try{h()}catch(b){sl(n,f,b)}}}e=e.next}while(e!==u)}}catch(b){sl(t,t.return,b)}}function Vo(l){var t=l.updateQueue;if(t!==null){var a=l.stateNode;try{Cs(t,a)}catch(e){sl(l,l.return,e)}}}function wo(l,t,a){a.props=Qa(l.type,l.memoizedProps),a.state=l.memoizedState;try{a.componentWillUnmount()}catch(e){sl(l,t,e)}}function un(l,t){try{var a=l.ref;if(a!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof a=="function"?l.refCleanup=a(e):a.current=e}}catch(n){sl(l,t,n)}}function Ct(l,t){var a=l.ref,e=l.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){sl(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){sl(l,t,n)}else a.current=null}function Ko(l){var t=l.type,a=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break l;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){sl(l,l.return,n)}}function bc(l,t,a){try{var e=l.stateNode;Em(e,l.type,a,t),e[Fl]=t}catch(n){sl(l,l.return,n)}}function Jo(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ba(l.type)||l.tag===4}function Sc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Jo(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ba(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function xc(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(e!==4&&(e===27&&ba(l.type)&&(a=l.stateNode,t=null),l=l.child,l!==null))for(xc(l,t,a),l=l.sibling;l!==null;)xc(l,t,a),l=l.sibling}function hu(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?a.insertBefore(l,t):a.appendChild(l);else if(e!==4&&(e===27&&ba(l.type)&&(a=l.stateNode),l=l.child,l!==null))for(hu(l,t,a),l=l.sibling;l!==null;)hu(l,t,a),l=l.sibling}function ko(l){var t=l.stateNode,a=l.memoizedProps;try{for(var e=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xl(t,e,a),t[Bl]=l,t[Fl]=a}catch(u){sl(l,l.return,u)}}var Jt=!1,_l=!1,zc=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,Ul=null;function em(l,t){if(l=l.containerInfo,Lc=Ru,l=is(l),vi(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,u=e.focusNode;e=e.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break l}var i=0,c=-1,f=-1,h=0,b=0,z=l,v=null;t:for(;;){for(var y;z!==a||n!==0&&z.nodeType!==3||(c=i+n),z!==u||e!==0&&z.nodeType!==3||(f=i+e),z.nodeType===3&&(i+=z.nodeValue.length),(y=z.firstChild)!==null;)v=z,z=y;for(;;){if(z===l)break t;if(v===a&&++h===n&&(c=i),v===u&&++b===e&&(f=i),(y=z.nextSibling)!==null)break;z=v,v=z.parentNode}z=y}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:l,selectionRange:a},Ru=!1,Ul=t;Ul!==null;)if(t=Ul,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Ul=l;else for(;Ul!==null;){switch(t=Ul,u=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(a=0;a<l.length;a++)n=l[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&u!==null){l=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,e=a.stateNode;try{var D=Qa(a.type,n);l=e.getSnapshotBeforeUpdate(D,u),e.__reactInternalSnapshotBeforeUpdate=l}catch(Y){sl(a,a.return,Y)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,a=l.nodeType,a===9)Jc(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Jc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(r(163))}if(l=t.sibling,l!==null){l.return=t.return,Ul=l;break}Ul=t.return}}function $o(l,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Wt(l,a),e&4&&nn(5,a);break;case 1:if(Wt(l,a),e&4)if(l=a.stateNode,t===null)try{l.componentDidMount()}catch(i){sl(a,a.return,i)}else{var n=Qa(a.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){sl(a,a.return,i)}}e&64&&Vo(a),e&512&&un(a,a.return);break;case 3:if(Wt(l,a),e&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Cs(l,t)}catch(i){sl(a,a.return,i)}}break;case 27:t===null&&e&4&&ko(a);case 26:case 5:Wt(l,a),t===null&&e&4&&Ko(a),e&512&&un(a,a.return);break;case 12:Wt(l,a);break;case 31:Wt(l,a),e&4&&Po(l,a);break;case 13:Wt(l,a),e&4&&lr(l,a),e&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=dm.bind(null,a),Um(l,a))));break;case 22:if(e=a.memoizedState!==null||Jt,!e){t=t!==null&&t.memoizedState!==null||_l,n=Jt;var u=_l;Jt=e,(_l=t)&&!u?$t(l,a,(a.subtreeFlags&8772)!==0):Wt(l,a),Jt=n,_l=u}break;case 30:break;default:Wt(l,a)}}function Fo(l){var t=l.alternate;t!==null&&(l.alternate=null,Fo(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Iu(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var pl=null,Pl=!1;function kt(l,t,a){for(a=a.child;a!==null;)Io(l,t,a),a=a.sibling}function Io(l,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:_l||Ct(a,t),kt(l,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_l||Ct(a,t);var e=pl,n=Pl;ba(a.type)&&(pl=a.stateNode,Pl=!1),kt(l,t,a),vn(a.stateNode),pl=e,Pl=n;break;case 5:_l||Ct(a,t);case 6:if(e=pl,n=Pl,pl=null,kt(l,t,a),pl=e,Pl=n,pl!==null)if(Pl)try{(pl.nodeType===9?pl.body:pl.nodeName==="HTML"?pl.ownerDocument.body:pl).removeChild(a.stateNode)}catch(u){sl(a,t,u)}else try{pl.removeChild(a.stateNode)}catch(u){sl(a,t,u)}break;case 18:pl!==null&&(Pl?(l=pl,Vr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.stateNode),_e(l)):Vr(pl,a.stateNode));break;case 4:e=pl,n=Pl,pl=a.stateNode.containerInfo,Pl=!0,kt(l,t,a),pl=e,Pl=n;break;case 0:case 11:case 14:case 15:da(2,a,t),_l||da(4,a,t),kt(l,t,a);break;case 1:_l||(Ct(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&wo(a,t,e)),kt(l,t,a);break;case 21:kt(l,t,a);break;case 22:_l=(e=_l)||a.memoizedState!==null,kt(l,t,a),_l=e;break;default:kt(l,t,a)}}function Po(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{_e(l)}catch(a){sl(t,t.return,a)}}}function lr(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{_e(l)}catch(a){sl(t,t.return,a)}}function nm(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wo),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wo),t;default:throw Error(r(435,l.tag))}}function vu(l,t){var a=nm(l);t.forEach(function(e){if(!a.has(e)){a.add(e);var n=mm.bind(null,l,e);e.then(n,n)}})}function lt(l,t){var a=t.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],u=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(ba(c.type)){pl=c.stateNode,Pl=!1;break l}break;case 5:pl=c.stateNode,Pl=!1;break l;case 3:case 4:pl=c.stateNode.containerInfo,Pl=!0;break l}c=c.return}if(pl===null)throw Error(r(160));Io(u,i,n),pl=null,Pl=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tr(t,l),t=t.sibling}var Ot=null;function tr(l,t){var a=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:lt(t,l),tt(l),e&4&&(da(3,l,l.return),nn(3,l),da(5,l,l.return));break;case 1:lt(t,l),tt(l),e&512&&(_l||a===null||Ct(a,a.return)),e&64&&Jt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(a=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=Ot;if(lt(t,l),tt(l),e&512&&(_l||a===null||Ct(a,a.return)),e&4){var u=a!==null?a.memoizedState:null;if(e=l.memoizedState,a===null)if(e===null)if(l.stateNode===null){l:{e=l.type,a=l.memoizedProps,n=n.ownerDocument||n;t:switch(e){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ue]||u[Bl]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(e),n.head.insertBefore(u,n.querySelector("head > title"))),Xl(u,e,a),u[Bl]=l,jl(u),e=u;break l;case"link":var i=t0("link","href",n).get(e+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(e),Xl(u,e,a),n.head.appendChild(u);break;case"meta":if(i=t0("meta","content",n).get(e+(a.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}u=n.createElement(e),Xl(u,e,a),n.head.appendChild(u);break;default:throw Error(r(468,e))}u[Bl]=l,jl(u),e=u}l.stateNode=e}else a0(n,l.type,l.stateNode);else l.stateNode=l0(n,e,l.memoizedProps);else u!==e?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,e===null?a0(n,l.type,l.stateNode):l0(n,e,l.memoizedProps)):e===null&&l.stateNode!==null&&bc(l,l.memoizedProps,a.memoizedProps)}break;case 27:lt(t,l),tt(l),e&512&&(_l||a===null||Ct(a,a.return)),a!==null&&e&4&&bc(l,l.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,l),tt(l),e&512&&(_l||a===null||Ct(a,a.return)),l.flags&32){n=l.stateNode;try{$a(n,"")}catch(D){sl(l,l.return,D)}}e&4&&l.stateNode!=null&&(n=l.memoizedProps,bc(l,n,a!==null?a.memoizedProps:n)),e&1024&&(zc=!0);break;case 6:if(lt(t,l),tt(l),e&4){if(l.stateNode===null)throw Error(r(162));e=l.memoizedProps,a=l.stateNode;try{a.nodeValue=e}catch(D){sl(l,l.return,D)}}break;case 3:if(ju=null,n=Ot,Ot=Nu(t.containerInfo),lt(t,l),Ot=n,tt(l),e&4&&a!==null&&a.memoizedState.isDehydrated)try{_e(t.containerInfo)}catch(D){sl(l,l.return,D)}zc&&(zc=!1,ar(l));break;case 4:e=Ot,Ot=Nu(l.stateNode.containerInfo),lt(t,l),tt(l),Ot=e;break;case 12:lt(t,l),tt(l);break;case 31:lt(t,l),tt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,vu(l,e)));break;case 13:lt(t,l),tt(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pu=it()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,vu(l,e)));break;case 22:n=l.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,h=Jt,b=_l;if(Jt=h||n,_l=b||f,lt(t,l),_l=b,Jt=h,tt(l),e&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||f||Jt||_l||Za(l)),a=null,t=l;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var z=f.memoizedProps.style,v=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(D){sl(f,f.return,D)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(D){sl(f,f.return,D)}}}else if(t.tag===18){if(a===null){f=t;try{var y=f.stateNode;n?wr(y,!0):wr(f.stateNode,!1)}catch(D){sl(f,f.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,vu(l,a))));break;case 19:lt(t,l),tt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,vu(l,e)));break;case 30:break;case 21:break;default:lt(t,l),tt(l)}}function tt(l){var t=l.flags;if(t&2){try{for(var a,e=l.return;e!==null;){if(Jo(e)){a=e;break}e=e.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,u=Sc(l);hu(l,u,n);break;case 5:var i=a.stateNode;a.flags&32&&($a(i,""),a.flags&=-33);var c=Sc(l);hu(l,c,i);break;case 3:case 4:var f=a.stateNode.containerInfo,h=Sc(l);xc(l,h,f);break;default:throw Error(r(161))}}catch(b){sl(l,l.return,b)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function ar(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;ar(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Wt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$o(l,t.alternate,t),t=t.sibling}function Za(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Za(t);break;case 1:Ct(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wo(t,t.return,a),Za(t);break;case 27:vn(t.stateNode);case 26:case 5:Ct(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}l=l.sibling}}function $t(l,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,n=l,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:$t(n,u,a),nn(4,u);break;case 1:if($t(n,u,a),e=u,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){sl(e,e.return,h)}if(e=u,n=e.updateQueue,n!==null){var c=e.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Us(f[n],c)}catch(h){sl(e,e.return,h)}}a&&i&64&&Vo(u),un(u,u.return);break;case 27:ko(u);case 26:case 5:$t(n,u,a),a&&e===null&&i&4&&Ko(u),un(u,u.return);break;case 12:$t(n,u,a);break;case 31:$t(n,u,a),a&&i&4&&Po(n,u);break;case 13:$t(n,u,a),a&&i&4&&lr(n,u);break;case 22:u.memoizedState===null&&$t(n,u,a),un(u,u.return);break;case 30:break;default:$t(n,u,a)}t=t.sibling}}function Tc(l,t){var a=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(l!=null&&l.refCount++,a!=null&&we(a))}function Ec(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&we(l))}function Nt(l,t,a,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)er(l,t,a,e),t=t.sibling}function er(l,t,a,e){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(l,t,a,e),n&2048&&nn(9,t);break;case 1:Nt(l,t,a,e);break;case 3:Nt(l,t,a,e),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&we(l)));break;case 12:if(n&2048){Nt(l,t,a,e),l=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){sl(t,t.return,f)}}else Nt(l,t,a,e);break;case 31:Nt(l,t,a,e);break;case 13:Nt(l,t,a,e);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Nt(l,t,a,e):cn(l,t):u._visibility&2?Nt(l,t,a,e):(u._visibility|=2,ye(l,t,a,e,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Tc(i,t);break;case 24:Nt(l,t,a,e),n&2048&&Ec(t.alternate,t);break;default:Nt(l,t,a,e)}}function ye(l,t,a,e,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=l,i=t,c=a,f=e,h=i.flags;switch(i.tag){case 0:case 11:case 15:ye(u,i,c,f,n),nn(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?ye(u,i,c,f,n):cn(u,i):(b._visibility|=2,ye(u,i,c,f,n)),n&&h&2048&&Tc(i.alternate,i);break;case 24:ye(u,i,c,f,n),n&&h&2048&&Ec(i.alternate,i);break;default:ye(u,i,c,f,n)}t=t.sibling}}function cn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=l,e=t,n=e.flags;switch(e.tag){case 22:cn(a,e),n&2048&&Tc(e.alternate,e);break;case 24:cn(a,e),n&2048&&Ec(e.alternate,e);break;default:cn(a,e)}t=t.sibling}}var fn=8192;function pe(l,t,a){if(l.subtreeFlags&fn)for(l=l.child;l!==null;)nr(l,t,a),l=l.sibling}function nr(l,t,a){switch(l.tag){case 26:pe(l,t,a),l.flags&fn&&l.memoizedState!==null&&Vm(a,Ot,l.memoizedState,l.memoizedProps);break;case 5:pe(l,t,a);break;case 3:case 4:var e=Ot;Ot=Nu(l.stateNode.containerInfo),pe(l,t,a),Ot=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=fn,fn=16777216,pe(l,t,a),fn=e):pe(l,t,a));break;default:pe(l,t,a)}}function ur(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function sn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Ul=e,cr(e,l)}ur(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ir(l),l=l.sibling}function ir(l){switch(l.tag){case 0:case 11:case 15:sn(l),l.flags&2048&&da(9,l,l.return);break;case 3:sn(l);break;case 12:sn(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,yu(l)):sn(l);break;default:sn(l)}}function yu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Ul=e,cr(e,l)}ur(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:da(8,t,t.return),yu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,yu(t));break;default:yu(t)}l=l.sibling}}function cr(l,t){for(;Ul!==null;){var a=Ul;switch(a.tag){case 0:case 11:case 15:da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:we(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Ul=e;else l:for(a=l;Ul!==null;){e=Ul;var n=e.sibling,u=e.return;if(Fo(e),e===a){Ul=null;break l}if(n!==null){n.return=u,Ul=n;break l}Ul=u}}}var um={getCacheForType:function(l){var t=Yl(El),a=t.data.get(l);return a===void 0&&(a=l(),t.data.set(l,a)),a},cacheSignal:function(){return Yl(El).controller.signal}},im=typeof WeakMap=="function"?WeakMap:Map,il=0,ml=null,k=null,I=0,fl=0,mt=null,ma=!1,ge=!1,Ac=!1,Ft=0,Sl=0,ha=0,La=0,Mc=0,ht=0,be=0,on=null,at=null,_c=!1,pu=0,fr=0,gu=1/0,bu=null,va=null,Nl=0,ya=null,Se=null,It=0,Oc=0,Nc=null,sr=null,rn=0,Dc=null;function vt(){return(il&2)!==0&&I!==0?I&-I:g.T!==null?Bc():Ef()}function or(){if(ht===0)if((I&536870912)===0||ll){var l=_n;_n<<=1,(_n&3932160)===0&&(_n=262144),ht=l}else ht=536870912;return l=rt.current,l!==null&&(l.flags|=32),ht}function et(l,t,a){(l===ml&&(fl===2||fl===9)||l.cancelPendingCommit!==null)&&(xe(l,0),pa(l,I,ht,!1)),je(l,a),((il&2)===0||l!==ml)&&(l===ml&&((il&2)===0&&(La|=a),Sl===4&&pa(l,I,ht,!1)),Ht(l))}function rr(l,t,a){if((il&6)!==0)throw Error(r(327));var e=!a&&(t&127)===0&&(t&l.expiredLanes)===0||De(l,t),n=e?sm(l,t):Uc(l,t,!0),u=e;do{if(n===0){ge&&!e&&pa(l,t,0,!1);break}else{if(a=l.current.alternate,u&&!cm(a)){n=Uc(l,t,!1),u=!1;continue}if(n===2){if(u=t,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;n=on;var f=c.current.memoizedState.isDehydrated;if(f&&(xe(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(Ac&&!f){c.errorRecoveryDisabledLanes|=u,La|=u,n=4;break l}u=at,at=n,u!==null&&(at===null?at=u:at.push.apply(at,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){xe(l,0),pa(l,t,0,!0);break}l:{switch(e=l,u=n,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:pa(e,t,ht,!ma);break l;case 2:at=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=pu+300-it(),10<n)){if(pa(e,t,ht,!ma),Nn(e,0,!0)!==0)break l;It=t,e.timeoutHandle=Zr(dr.bind(null,e,a,at,bu,_c,t,ht,La,be,ma,u,"Throttled",-0,0),n);break l}dr(e,a,at,bu,_c,t,ht,La,be,ma,u,null,-0,0)}}break}while(!0);Ht(l)}function dr(l,t,a,e,n,u,i,c,f,h,b,z,v,y){if(l.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},nr(t,u,z);var D=(u&62914560)===u?pu-it():(u&4194048)===u?fr-it():0;if(D=wm(z,D),D!==null){It=u,l.cancelPendingCommit=D(Sr.bind(null,l,t,u,a,e,n,i,c,f,b,z,null,v,y)),pa(l,u,i,!h);return}}Sr(l,t,u,a,e,n,i,c,f)}function cm(l){for(var t=l;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],u=n.getSnapshot;n=n.value;try{if(!st(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(l,t,a,e){t&=~Mc,t&=~La,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var n=t;0<n;){var u=31-ft(n),i=1<<u;e[u]=-1,n&=~i}a!==0&&xf(l,a,t)}function Su(){return(il&6)===0?(dn(0),!1):!0}function jc(){if(k!==null){if(fl===0)var l=k.return;else l=k,Qt=Ha=null,Ji(l),re=null,Je=0,l=k;for(;l!==null;)Lo(l.alternate,l),l=l.return;k=null}}function xe(l,t){var a=l.timeoutHandle;a!==-1&&(l.timeoutHandle=-1,_m(a)),a=l.cancelPendingCommit,a!==null&&(l.cancelPendingCommit=null,a()),It=0,jc(),ml=l,k=a=qt(l.current,null),I=t,fl=0,mt=null,ma=!1,ge=De(l,t),Ac=!1,be=ht=Mc=La=ha=Sl=0,at=on=null,_c=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var n=31-ft(e),u=1<<n;t|=l[n],e&=~u}return Ft=t,Qn(),a}function mr(l,t){w=null,g.H=tn,t===oe||t===Wn?(t=Os(),fl=3):t===Ri?(t=Os(),fl=4):fl=t===sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,k===null&&(Sl=1,su(l,St(t,l.current)))}function hr(){var l=rt.current;return l===null?!0:(I&4194048)===I?Et===null:(I&62914560)===I||(I&536870912)!==0?l===Et:!1}function vr(){var l=g.H;return g.H=tn,l===null?tn:l}function yr(){var l=g.A;return g.A=um,l}function xu(){Sl=4,ma||(I&4194048)!==I&&rt.current!==null||(ge=!0),(ha&134217727)===0&&(La&134217727)===0||ml===null||pa(ml,I,ht,!1)}function Uc(l,t,a){var e=il;il|=2;var n=vr(),u=yr();(ml!==l||I!==t)&&(bu=null,xe(l,t)),t=!1;var i=Sl;l:do try{if(fl!==0&&k!==null){var c=k,f=mt;switch(fl){case 8:jc(),i=6;break l;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var h=fl;if(fl=0,mt=null,ze(l,c,f,h),a&&ge){i=0;break l}break;default:h=fl,fl=0,mt=null,ze(l,c,f,h)}}fm(),i=Sl;break}catch(b){mr(l,b)}while(!0);return t&&l.shellSuspendCounter++,Qt=Ha=null,il=e,g.H=n,g.A=u,k===null&&(ml=null,I=0,Qn()),i}function fm(){for(;k!==null;)pr(k)}function sm(l,t){var a=il;il|=2;var e=vr(),n=yr();ml!==l||I!==t?(bu=null,gu=it()+500,xe(l,t)):ge=De(l,t);l:do try{if(fl!==0&&k!==null){t=k;var u=mt;t:switch(fl){case 1:fl=0,mt=null,ze(l,t,u,1);break;case 2:case 9:if(Ms(u)){fl=0,mt=null,gr(t);break}t=function(){fl!==2&&fl!==9||ml!==l||(fl=7),Ht(l)},u.then(t,t);break l;case 3:fl=7;break l;case 4:fl=5;break l;case 7:Ms(u)?(fl=0,mt=null,gr(t)):(fl=0,mt=null,ze(l,t,u,7));break;case 5:var i=null;switch(k.tag){case 26:i=k.memoizedState;case 5:case 27:var c=k;if(i?e0(i):c.stateNode.complete){fl=0,mt=null;var f=c.sibling;if(f!==null)k=f;else{var h=c.return;h!==null?(k=h,zu(h)):k=null}break t}}fl=0,mt=null,ze(l,t,u,5);break;case 6:fl=0,mt=null,ze(l,t,u,6);break;case 8:jc(),Sl=6;break l;default:throw Error(r(462))}}om();break}catch(b){mr(l,b)}while(!0);return Qt=Ha=null,g.H=e,g.A=n,il=a,k!==null?0:(ml=null,I=0,Qn(),Sl)}function om(){for(;k!==null&&!C0();)pr(k)}function pr(l){var t=Qo(l.alternate,l,Ft);l.memoizedProps=l.pendingProps,t===null?zu(l):k=t}function gr(l){var t=l,a=t.alternate;switch(t.tag){case 15:case 0:t=Ro(a,t,t.pendingProps,t.type,void 0,I);break;case 11:t=Ro(a,t,t.pendingProps,t.type.render,t.ref,I);break;case 5:Ji(t);default:Lo(a,t),t=k=vs(t,Ft),t=Qo(a,t,Ft)}l.memoizedProps=l.pendingProps,t===null?zu(l):k=t}function ze(l,t,a,e){Qt=Ha=null,Ji(t),re=null,Je=0;var n=t.return;try{if(Id(l,n,t,a,I)){Sl=1,su(l,St(a,l.current)),k=null;return}}catch(u){if(n!==null)throw k=n,u;Sl=1,su(l,St(a,l.current)),k=null;return}t.flags&32768?(ll||e===1?l=!0:ge||(I&536870912)!==0?l=!1:(ma=l=!0,(e===2||e===9||e===3||e===6)&&(e=rt.current,e!==null&&e.tag===13&&(e.flags|=16384))),br(t,l)):zu(t)}function zu(l){var t=l;do{if((t.flags&32768)!==0){br(t,ma);return}l=t.return;var a=tm(t.alternate,t,Ft);if(a!==null){k=a;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);Sl===0&&(Sl=5)}function br(l,t){do{var a=am(l.alternate,l);if(a!==null){a.flags&=32767,k=a;return}if(a=l.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=a}while(l!==null);Sl=6,k=null}function Sr(l,t,a,e,n,u,i,c,f){l.cancelPendingCommit=null;do Tu();while(Nl!==0);if((il&6)!==0)throw Error(r(327));if(t!==null){if(t===l.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=Si,L0(l,a,u,i,c,f),l===ml&&(k=ml=null,I=0),Se=t,ya=l,It=a,Oc=u,Nc=n,sr=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,hm(An,function(){return Ar(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=g.T,g.T=null,n=M.p,M.p=2,i=il,il|=4;try{em(l,t,a)}finally{il=i,M.p=n,g.T=e}}Nl=1,xr(),zr(),Tr()}}function xr(){if(Nl===1){Nl=0;var l=ya,t=Se,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null;var e=M.p;M.p=2;var n=il;il|=4;try{tr(t,l);var u=Vc,i=is(l.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&us(c.ownerDocument.documentElement,c)){if(f!==null&&vi(c)){var h=f.start,b=f.end;if(b===void 0&&(b=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(b,c.value.length);else{var z=c.ownerDocument||document,v=z&&z.defaultView||window;if(v.getSelection){var y=v.getSelection(),D=c.textContent.length,Y=Math.min(f.start,D),dl=f.end===void 0?Y:Math.min(f.end,D);!y.extend&&Y>dl&&(i=dl,dl=Y,Y=i);var d=ns(c,Y),o=ns(c,dl);if(d&&o&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var m=z.createRange();m.setStart(d.node,d.offset),y.removeAllRanges(),Y>dl?(y.addRange(m),y.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),y.addRange(m))}}}}for(z=[],y=c;y=y.parentNode;)y.nodeType===1&&z.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var x=z[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ru=!!Lc,Vc=Lc=null}finally{il=n,M.p=e,g.T=a}}l.current=t,Nl=2}}function zr(){if(Nl===2){Nl=0;var l=ya,t=Se,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=g.T,g.T=null;var e=M.p;M.p=2;var n=il;il|=4;try{$o(l,t.alternate,t)}finally{il=n,M.p=e,g.T=a}}Nl=3}}function Tr(){if(Nl===4||Nl===3){Nl=0,H0();var l=ya,t=Se,a=It,e=sr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Nl=5:(Nl=0,Se=ya=null,Er(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(va=null),$u(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Ne,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=g.T,n=M.p,M.p=2,g.T=null;try{for(var u=l.onRecoverableError,i=0;i<e.length;i++){var c=e[i];u(c.value,{componentStack:c.stack})}}finally{g.T=t,M.p=n}}(It&3)!==0&&Tu(),Ht(l),n=l.pendingLanes,(a&261930)!==0&&(n&42)!==0?l===Dc?rn++:(rn=0,Dc=l):rn=0,dn(0)}}function Er(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,we(t)))}function Tu(){return xr(),zr(),Tr(),Ar()}function Ar(){if(Nl!==5)return!1;var l=ya,t=Oc;Oc=0;var a=$u(It),e=g.T,n=M.p;try{M.p=32>a?32:a,g.T=null,a=Nc,Nc=null;var u=ya,i=It;if(Nl=0,Se=ya=null,It=0,(il&6)!==0)throw Error(r(331));var c=il;if(il|=4,ir(u.current),er(u,u.current,i,a),il=c,dn(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Ne,u)}catch{}return!0}finally{M.p=n,g.T=e,Er(l,t)}}function Mr(l,t,a){t=St(a,t),t=fc(l.stateNode,t,2),l=sa(l,t,2),l!==null&&(je(l,2),Ht(l))}function sl(l,t,a){if(l.tag===3)Mr(l,l,a);else for(;t!==null;){if(t.tag===3){Mr(t,l,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(va===null||!va.has(e))){l=St(a,l),a=_o(2),e=sa(t,a,2),e!==null&&(Oo(a,e,t,l),je(e,2),Ht(e));break}}t=t.return}}function Cc(l,t,a){var e=l.pingCache;if(e===null){e=l.pingCache=new im;var n=new Set;e.set(t,n)}else n=e.get(t),n===void 0&&(n=new Set,e.set(t,n));n.has(a)||(Ac=!0,n.add(a),l=rm.bind(null,l,t,a),t.then(l,l))}function rm(l,t,a){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&a,l.warmLanes&=~a,ml===l&&(I&a)===a&&(Sl===4||Sl===3&&(I&62914560)===I&&300>it()-pu?(il&2)===0&&xe(l,0):Mc|=a,be===I&&(be=0)),Ht(l)}function _r(l,t){t===0&&(t=Sf()),l=ja(l,t),l!==null&&(je(l,t),Ht(l))}function dm(l){var t=l.memoizedState,a=0;t!==null&&(a=t.retryLane),_r(l,a)}function mm(l,t){var a=0;switch(l.tag){case 31:case 13:var e=l.stateNode,n=l.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(r(314))}e!==null&&e.delete(t),_r(l,a)}function hm(l,t){return Ku(l,t)}var Eu=null,Te=null,Hc=!1,Au=!1,Rc=!1,ga=0;function Ht(l){l!==Te&&l.next===null&&(Te===null?Eu=Te=l:Te=Te.next=l),Au=!0,Hc||(Hc=!0,ym())}function dn(l,t){if(!Rc&&Au){Rc=!0;do for(var a=!1,e=Eu;e!==null;){if(l!==0){var n=e.pendingLanes;if(n===0)var u=0;else{var i=e.suspendedLanes,c=e.pingedLanes;u=(1<<31-ft(42|l)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,jr(e,u))}else u=I,u=Nn(e,e===ml?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(u&3)===0||De(e,u)||(a=!0,jr(e,u));e=e.next}while(a);Rc=!1}}function vm(){Or()}function Or(){Au=Hc=!1;var l=0;ga!==0&&Mm()&&(l=ga);for(var t=it(),a=null,e=Eu;e!==null;){var n=e.next,u=Nr(e,t);u===0?(e.next=null,a===null?Eu=n:a.next=n,n===null&&(Te=a)):(a=e,(l!==0||(u&3)!==0)&&(Au=!0)),e=n}Nl!==0&&Nl!==5||dn(l),ga!==0&&(ga=0)}function Nr(l,t){for(var a=l.suspendedLanes,e=l.pingedLanes,n=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-ft(u),c=1<<i,f=n[i];f===-1?((c&a)===0||(c&e)!==0)&&(n[i]=Z0(c,t)):f<=t&&(l.expiredLanes|=c),u&=~c}if(t=ml,a=I,a=Nn(l,l===t?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,a===0||l===t&&(fl===2||fl===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&Ju(e),l.callbackNode=null,l.callbackPriority=0;if((a&3)===0||De(l,a)){if(t=a&-a,t===l.callbackPriority)return t;switch(e!==null&&Ju(e),$u(a)){case 2:case 8:a=gf;break;case 32:a=An;break;case 268435456:a=bf;break;default:a=An}return e=Dr.bind(null,l),a=Ku(a,e),l.callbackPriority=t,l.callbackNode=a,t}return e!==null&&e!==null&&Ju(e),l.callbackPriority=2,l.callbackNode=null,2}function Dr(l,t){if(Nl!==0&&Nl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var a=l.callbackNode;if(Tu()&&l.callbackNode!==a)return null;var e=I;return e=Nn(l,l===ml?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(rr(l,e,t),Nr(l,it()),l.callbackNode!=null&&l.callbackNode===a?Dr.bind(null,l):null)}function jr(l,t){if(Tu())return null;rr(l,t,!0)}function ym(){Om(function(){(il&6)!==0?Ku(pf,vm):Or()})}function Bc(){if(ga===0){var l=fe;l===0&&(l=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),ga=l}return ga}function Ur(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Cn(""+l)}function Cr(l,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,l.id&&a.setAttribute("form",l.id),t.parentNode.insertBefore(a,t),l=new FormData(l),a.parentNode.removeChild(a),l}function pm(l,t,a,e,n){if(t==="submit"&&a&&a.stateNode===n){var u=Ur((n[Fl]||null).action),i=e.submitter;i&&(t=(t=i[Fl]||null)?Ur(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Gn("action","action",null,e,n);l.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(ga!==0){var f=i?Cr(n,i):new FormData(n);ac(a,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Cr(n,i):new FormData(n),ac(a,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Gc=0;Gc<bi.length;Gc++){var Yc=bi[Gc],gm=Yc.toLowerCase(),bm=Yc[0].toUpperCase()+Yc.slice(1);_t(gm,"on"+bm)}_t(ss,"onAnimationEnd"),_t(os,"onAnimationIteration"),_t(rs,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Rd,"onTransitionRun"),_t(Bd,"onTransitionStart"),_t(Gd,"onTransitionCancel"),_t(ds,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_a("onBeforeInput",["compositionend","keypress","textInput","paste"]),_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Hr(l,t){t=(t&4)!==0;for(var a=0;a<l.length;a++){var e=l[a],n=e.event;e=e.listeners;l:{var u=void 0;if(t)for(var i=e.length-1;0<=i;i--){var c=e[i],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break l;u=c,n.currentTarget=h;try{u(n)}catch(b){Xn(b)}n.currentTarget=null,u=f}else for(i=0;i<e.length;i++){if(c=e[i],f=c.instance,h=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break l;u=c,n.currentTarget=h;try{u(n)}catch(b){Xn(b)}n.currentTarget=null,u=f}}}}function W(l,t){var a=t[Fu];a===void 0&&(a=t[Fu]=new Set);var e=l+"__bubble";a.has(e)||(Rr(t,l,2,!1),a.add(e))}function qc(l,t,a){var e=0;t&&(e|=4),Rr(a,l,e,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Xc(l){if(!l[Mu]){l[Mu]=!0,_f.forEach(function(a){a!=="selectionchange"&&(Sm.has(a)||qc(a,!1,l),qc(a,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Mu]||(t[Mu]=!0,qc("selectionchange",!1,t))}}function Rr(l,t,a,e){switch(o0(t)){case 2:var n=km;break;case 8:n=Wm;break;default:n=tf}a=n.bind(null,t,a,l),n=void 0,!ii||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),e?n!==void 0?l.addEventListener(t,a,{capture:!0,passive:n}):l.addEventListener(t,a,!0):n!==void 0?l.addEventListener(t,a,{passive:n}):l.addEventListener(t,a,!1)}function Qc(l,t,a,e,n){var u=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var c=e.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=e.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=wa(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){e=u=i;continue l}c=c.parentNode}}e=e.return}qf(function(){var h=u,b=ni(a),z=[];l:{var v=ms.get(l);if(v!==void 0){var y=Gn,D=l;switch(l){case"keypress":if(Rn(a)===0)break l;case"keydown":case"keyup":y=md;break;case"focusin":D="focus",y=oi;break;case"focusout":D="blur",y=oi;break;case"beforeblur":case"afterblur":y=oi;break;case"click":if(a.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yd;break;case ss:case os:case rs:y=nd;break;case ds:y=gd;break;case"scroll":case"scrollend":y=P0;break;case"wheel":y=Sd;break;case"copy":case"cut":case"paste":y=id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Vf;break;case"toggle":case"beforetoggle":y=zd}var Y=(t&4)!==0,dl=!Y&&(l==="scroll"||l==="scrollend"),d=Y?v!==null?v+"Capture":null:v;Y=[];for(var o=h,m;o!==null;){var x=o;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||d===null||(x=He(o,d),x!=null&&Y.push(hn(o,x,m))),dl)break;o=o.return}0<Y.length&&(v=new y(v,D,null,a,b),z.push({event:v,listeners:Y}))}}if((t&7)===0){l:{if(v=l==="mouseover"||l==="pointerover",y=l==="mouseout"||l==="pointerout",v&&a!==ei&&(D=a.relatedTarget||a.fromElement)&&(wa(D)||D[Va]))break l;if((y||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,y?(D=a.relatedTarget||a.toElement,y=h,D=D?wa(D):null,D!==null&&(dl=L(D),Y=D.tag,D!==dl||Y!==5&&Y!==27&&Y!==6)&&(D=null)):(y=null,D=h),y!==D)){if(Y=Zf,x="onMouseLeave",d="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(Y=Vf,x="onPointerLeave",d="onPointerEnter",o="pointer"),dl=y==null?v:Ce(y),m=D==null?v:Ce(D),v=new Y(x,o+"leave",y,a,b),v.target=dl,v.relatedTarget=m,x=null,wa(b)===h&&(Y=new Y(d,o+"enter",D,a,b),Y.target=m,Y.relatedTarget=dl,x=Y),dl=x,y&&D)t:{for(Y=xm,d=y,o=D,m=0,x=d;x;x=Y(x))m++;x=0;for(var R=o;R;R=Y(R))x++;for(;0<m-x;)d=Y(d),m--;for(;0<x-m;)o=Y(o),x--;for(;m--;){if(d===o||o!==null&&d===o.alternate){Y=d;break t}d=Y(d),o=Y(o)}Y=null}else Y=null;y!==null&&Br(z,v,y,Y,!1),D!==null&&dl!==null&&Br(z,dl,D,Y,!0)}}l:{if(v=h?Ce(h):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var tl=If;else if($f(v))if(Pf)tl=Ud;else{tl=Dd;var U=Nd}else y=v.nodeName,!y||y.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?h&&ai(h.elementType)&&(tl=If):tl=jd;if(tl&&(tl=tl(l,h))){Ff(z,tl,a,b);break l}U&&U(l,v,h),l==="focusout"&&h&&v.type==="number"&&h.memoizedProps.value!=null&&ti(v,"number",v.value)}switch(U=h?Ce(h):window,l){case"focusin":($f(U)||U.contentEditable==="true")&&(le=U,yi=h,Ze=null);break;case"focusout":Ze=yi=le=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,cs(z,a,b);break;case"selectionchange":if(Hd)break;case"keydown":case"keyup":cs(z,a,b)}var K;if(di)l:{switch(l){case"compositionstart":var P="onCompositionStart";break l;case"compositionend":P="onCompositionEnd";break l;case"compositionupdate":P="onCompositionUpdate";break l}P=void 0}else Pa?kf(l,a)&&(P="onCompositionEnd"):l==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(wf&&a.locale!=="ko"&&(Pa||P!=="onCompositionStart"?P==="onCompositionEnd"&&Pa&&(K=Xf()):(aa=b,ci="value"in aa?aa.value:aa.textContent,Pa=!0)),U=_u(h,P),0<U.length&&(P=new Lf(P,l,null,a,b),z.push({event:P,listeners:U}),K?P.data=K:(K=Wf(a),K!==null&&(P.data=K)))),(K=Ed?Ad(l,a):Md(l,a))&&(P=_u(h,"onBeforeInput"),0<P.length&&(U=new Lf("onBeforeInput","beforeinput",null,a,b),z.push({event:U,listeners:P}),U.data=K)),pm(z,l,h,a,b)}Hr(z,t)})}function hn(l,t,a){return{instance:l,listener:t,currentTarget:a}}function _u(l,t){for(var a=t+"Capture",e=[];l!==null;){var n=l,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=He(l,a),n!=null&&e.unshift(hn(l,n,u)),n=He(l,t),n!=null&&e.push(hn(l,n,u))),l.tag===3)return e;l=l.return}return[]}function xm(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Br(l,t,a,e,n){for(var u=t._reactName,i=[];a!==null&&a!==e;){var c=a,f=c.alternate,h=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||h===null||(f=h,n?(h=He(a,u),h!=null&&i.unshift(hn(a,h,f))):n||(h=He(a,u),h!=null&&i.push(hn(a,h,f)))),a=a.return}i.length!==0&&l.push({event:t,listeners:i})}var zm=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function Gr(l){return(typeof l=="string"?l:""+l).replace(zm,`
`).replace(Tm,"")}function Yr(l,t){return t=Gr(t),Gr(l)===t}function rl(l,t,a,e,n,u){switch(a){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||$a(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&$a(l,""+e);break;case"className":jn(l,"class",e);break;case"tabIndex":jn(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":jn(l,a,e);break;case"style":Gf(l,e,u);break;case"data":if(t!=="object"){jn(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){l.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=Cn(""+e),l.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&rl(l,t,"name",n.name,n,null),rl(l,t,"formEncType",n.formEncType,n,null),rl(l,t,"formMethod",n.formMethod,n,null),rl(l,t,"formTarget",n.formTarget,n,null)):(rl(l,t,"encType",n.encType,n,null),rl(l,t,"method",n.method,n,null),rl(l,t,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=Cn(""+e),l.setAttribute(a,e);break;case"onClick":e!=null&&(l.onclick=Gt);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(r(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(r(60));l.innerHTML=a}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}a=Cn(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""+e):l.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""):l.removeAttribute(a);break;case"capture":case"download":e===!0?l.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,e):l.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(a,e):l.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(a):l.setAttribute(a,e);break;case"popover":W("beforetoggle",l),W("toggle",l),Dn(l,"popover",e);break;case"xlinkActuate":Bt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Bt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Bt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Bt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Bt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Bt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Bt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Bt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Bt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Dn(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=F0.get(a)||a,Dn(l,a,e))}}function Zc(l,t,a,e,n,u){switch(a){case"style":Gf(l,e,u);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(r(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(r(60));l.innerHTML=a}}break;case"children":typeof e=="string"?$a(l,e):(typeof e=="number"||typeof e=="bigint")&&$a(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Of.hasOwnProperty(a))l:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=l[Fl]||null,u=u!=null?u[a]:null,typeof u=="function"&&l.removeEventListener(t,u,n),typeof e=="function")){typeof u!="function"&&u!==null&&(a in l?l[a]=null:l.hasAttribute(a)&&l.removeAttribute(a)),l.addEventListener(t,e,n);break l}a in l?l[a]=e:e===!0?l.setAttribute(a,""):Dn(l,a,e)}}}function Xl(l,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:rl(l,t,u,i,a,null)}}n&&rl(l,t,"srcSet",a.srcSet,a,null),e&&rl(l,t,"src",a.src,a,null);return;case"input":W("invalid",l);var c=u=i=n=null,f=null,h=null;for(e in a)if(a.hasOwnProperty(e)){var b=a[e];if(b!=null)switch(e){case"name":n=b;break;case"type":i=b;break;case"checked":f=b;break;case"defaultChecked":h=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(137,t));break;default:rl(l,t,e,b,a,null)}}Cf(l,u,c,f,h,i,n,!1);return;case"select":W("invalid",l),e=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":e=c;default:rl(l,t,n,c,a,null)}t=u,a=i,l.multiple=!!e,t!=null?Wa(l,!!e,t,!1):a!=null&&Wa(l,!!e,a,!0);return;case"textarea":W("invalid",l),u=n=e=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":e=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:rl(l,t,i,c,a,null)}Rf(l,e,n,u);return;case"option":for(f in a)a.hasOwnProperty(f)&&(e=a[f],e!=null)&&(f==="selected"?l.selected=e&&typeof e!="function"&&typeof e!="symbol":rl(l,t,f,e,a,null));return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<mn.length;e++)W(mn[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(e=a[h],e!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:rl(l,t,h,e,a,null)}return;default:if(ai(t)){for(b in a)a.hasOwnProperty(b)&&(e=a[b],e!==void 0&&Zc(l,t,b,e,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(e=a[c],e!=null&&rl(l,t,c,e,a,null))}function Em(l,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,h=null,b=null;for(y in a){var z=a[y];if(a.hasOwnProperty(y)&&z!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=z;default:e.hasOwnProperty(y)||rl(l,t,y,null,e,z)}}for(var v in e){var y=e[v];if(z=a[v],e.hasOwnProperty(v)&&(y!=null||z!=null))switch(v){case"type":u=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":b=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(r(137,t));break;default:y!==z&&rl(l,t,v,y,e,z)}}li(l,i,c,f,h,b,u,n);return;case"select":y=i=c=v=null;for(u in a)if(f=a[u],a.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":y=f;default:e.hasOwnProperty(u)||rl(l,t,u,null,e,f)}for(n in e)if(u=e[n],f=a[n],e.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":v=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&rl(l,t,n,u,e,f)}t=c,a=i,e=y,v!=null?Wa(l,!!a,v,!1):!!e!=!!a&&(t!=null?Wa(l,!!a,t,!0):Wa(l,!!a,a?[]:"",!1));return;case"textarea":y=v=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:rl(l,t,c,null,e,n)}for(i in e)if(n=e[i],u=a[i],e.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":v=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==u&&rl(l,t,i,n,e,u)}Hf(l,v,y);return;case"option":for(var D in a)v=a[D],a.hasOwnProperty(D)&&v!=null&&!e.hasOwnProperty(D)&&(D==="selected"?l.selected=!1:rl(l,t,D,null,e,v));for(f in e)v=e[f],y=a[f],e.hasOwnProperty(f)&&v!==y&&(v!=null||y!=null)&&(f==="selected"?l.selected=v&&typeof v!="function"&&typeof v!="symbol":rl(l,t,f,v,e,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in a)v=a[Y],a.hasOwnProperty(Y)&&v!=null&&!e.hasOwnProperty(Y)&&rl(l,t,Y,null,e,v);for(h in e)if(v=e[h],y=a[h],e.hasOwnProperty(h)&&v!==y&&(v!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(137,t));break;default:rl(l,t,h,v,e,y)}return;default:if(ai(t)){for(var dl in a)v=a[dl],a.hasOwnProperty(dl)&&v!==void 0&&!e.hasOwnProperty(dl)&&Zc(l,t,dl,void 0,e,v);for(b in e)v=e[b],y=a[b],!e.hasOwnProperty(b)||v===y||v===void 0&&y===void 0||Zc(l,t,b,v,e,y);return}}for(var d in a)v=a[d],a.hasOwnProperty(d)&&v!=null&&!e.hasOwnProperty(d)&&rl(l,t,d,null,e,v);for(z in e)v=e[z],y=a[z],!e.hasOwnProperty(z)||v===y||v==null&&y==null||rl(l,t,z,v,e,y)}function qr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Am(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&qr(i)){for(i=0,c=n.responseEnd,e+=1;e<a.length;e++){var f=a[e],h=f.startTime;if(h>c)break;var b=f.transferSize,z=f.initiatorType;b&&qr(z)&&(f=f.responseEnd,i+=b*(f<c?1:(c-h)/(f-h)))}if(--e,t+=8*(u+i)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Lc=null,Vc=null;function Ou(l){return l.nodeType===9?l:l.ownerDocument}function Xr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qr(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function wc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function Mm(){var l=window.event;return l&&l.type==="popstate"?l===Kc?!1:(Kc=l,!0):(Kc=null,!1)}var Zr=typeof setTimeout=="function"?setTimeout:void 0,_m=typeof clearTimeout=="function"?clearTimeout:void 0,Lr=typeof Promise=="function"?Promise:void 0,Om=typeof queueMicrotask=="function"?queueMicrotask:typeof Lr<"u"?function(l){return Lr.resolve(null).then(l).catch(Nm)}:Zr;function Nm(l){setTimeout(function(){throw l})}function ba(l){return l==="head"}function Vr(l,t){var a=t,e=0;do{var n=a.nextSibling;if(l.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){l.removeChild(n),_e(t);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")vn(l.ownerDocument.documentElement);else if(a==="head"){a=l.ownerDocument.head,vn(a);for(var u=a.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ue]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&vn(l.ownerDocument.body);a=n}while(a);_e(t)}function wr(l,t){var a=l;l=0;do{var e=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(l===0)break;l--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||l++;a=e}while(a)}function Jc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jc(a),Iu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}l.removeChild(a)}}function Dm(l,t,a,e){for(;l.nodeType===1;){var n=a;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[Ue])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=At(l.nextSibling),l===null)break}return null}function jm(l,t,a){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!a||(l=At(l.nextSibling),l===null))return null;return l}function Kr(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=At(l.nextSibling),l===null))return null;return l}function kc(l){return l.data==="$?"||l.data==="$~"}function Wc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Um(l,t){var a=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||a.readyState!=="loading")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function At(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var $c=null;function Jr(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="/$"||a==="/&"){if(t===0)return At(l.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}l=l.nextSibling}return null}function kr(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return l;t--}else a!=="/$"&&a!=="/&"||t++}l=l.previousSibling}return null}function Wr(l,t,a){switch(t=Ou(a),l){case"html":if(l=t.documentElement,!l)throw Error(r(452));return l;case"head":if(l=t.head,!l)throw Error(r(453));return l;case"body":if(l=t.body,!l)throw Error(r(454));return l;default:throw Error(r(451))}}function vn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Iu(l)}var Mt=new Map,$r=new Set;function Nu(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Pt=M.d;M.d={f:Cm,r:Hm,D:Rm,C:Bm,L:Gm,m:Ym,X:Xm,S:qm,M:Qm};function Cm(){var l=Pt.f(),t=Su();return l||t}function Hm(l){var t=Ka(l);t!==null&&t.tag===5&&t.type==="form"?mo(t):Pt.r(l)}var Ee=typeof document>"u"?null:document;function Fr(l,t,a){var e=Ee;if(e&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$r.has(n)||($r.add(n),l={rel:l,crossOrigin:a,href:t},e.querySelector(n)===null&&(t=e.createElement("link"),Xl(t,"link",l),jl(t),e.head.appendChild(t)))}}function Rm(l){Pt.D(l),Fr("dns-prefetch",l,null)}function Bm(l,t){Pt.C(l,t),Fr("preconnect",l,t)}function Gm(l,t,a){Pt.L(l,t,a);var e=Ee;if(e&&l&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+gt(a.imageSizes)+'"]')):n+='[href="'+gt(l)+'"]';var u=n;switch(t){case"style":u=Ae(l);break;case"script":u=Me(l)}Mt.has(u)||(l=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:l,as:t},a),Mt.set(u,l),e.querySelector(n)!==null||t==="style"&&e.querySelector(yn(u))||t==="script"&&e.querySelector(pn(u))||(t=e.createElement("link"),Xl(t,"link",l),jl(t),e.head.appendChild(t)))}}function Ym(l,t){Pt.m(l,t);var a=Ee;if(a&&l){var e=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(e)+'"][href="'+gt(l)+'"]',u=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Me(l)}if(!Mt.has(u)&&(l=B({rel:"modulepreload",href:l},t),Mt.set(u,l),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pn(u)))return}e=a.createElement("link"),Xl(e,"link",l),jl(e),a.head.appendChild(e)}}}function qm(l,t,a){Pt.S(l,t,a);var e=Ee;if(e&&l){var n=Ja(e).hoistableStyles,u=Ae(l);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=e.querySelector(yn(u)))c.loading=5;else{l=B({rel:"stylesheet",href:l,"data-precedence":t},a),(a=Mt.get(u))&&Fc(l,a);var f=i=e.createElement("link");jl(f),Xl(f,"link",l),f._p=new Promise(function(h,b){f.onload=h,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Du(i,t,e)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Xm(l,t){Pt.X(l,t);var a=Ee;if(a&&l){var e=Ja(a).hoistableScripts,n=Me(l),u=e.get(n);u||(u=a.querySelector(pn(n)),u||(l=B({src:l,async:!0},t),(t=Mt.get(n))&&Ic(l,t),u=a.createElement("script"),jl(u),Xl(u,"link",l),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function Qm(l,t){Pt.M(l,t);var a=Ee;if(a&&l){var e=Ja(a).hoistableScripts,n=Me(l),u=e.get(n);u||(u=a.querySelector(pn(n)),u||(l=B({src:l,async:!0,type:"module"},t),(t=Mt.get(n))&&Ic(l,t),u=a.createElement("script"),jl(u),Xl(u,"link",l),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function Ir(l,t,a,e){var n=(n=J.current)?Nu(n):null;if(!n)throw Error(r(446));switch(l){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ae(a.href),a=Ja(n).hoistableStyles,e=a.get(t),e||(e={type:"style",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){l=Ae(a.href);var u=Ja(n).hoistableStyles,i=u.get(l);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=n.querySelector(yn(l)))&&!u._p&&(i.instance=u,i.state.loading=5),Mt.has(l)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(l,a),u||Zm(n,l,a,i.state))),t&&e===null)throw Error(r(528,""));return i}if(t&&e!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Me(a),a=Ja(n).hoistableScripts,e=a.get(t),e||(e={type:"script",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,l))}}function Ae(l){return'href="'+gt(l)+'"'}function yn(l){return'link[rel="stylesheet"]['+l+"]"}function Pr(l){return B({},l,{"data-precedence":l.precedence,precedence:null})}function Zm(l,t,a,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Xl(t,"link",a),jl(t),l.head.appendChild(t))}function Me(l){return'[src="'+gt(l)+'"]'}function pn(l){return"script[async]"+l}function l0(l,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+gt(a.href)+'"]');if(e)return t.instance=e,jl(e),e;var n=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),jl(e),Xl(e,"style",n),Du(e,a.precedence,l),t.instance=e;case"stylesheet":n=Ae(a.href);var u=l.querySelector(yn(n));if(u)return t.state.loading|=4,t.instance=u,jl(u),u;e=Pr(a),(n=Mt.get(n))&&Fc(e,n),u=(l.ownerDocument||l).createElement("link"),jl(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Xl(u,"link",e),t.state.loading|=4,Du(u,a.precedence,l),t.instance=u;case"script":return u=Me(a.src),(n=l.querySelector(pn(u)))?(t.instance=n,jl(n),n):(e=a,(n=Mt.get(u))&&(e=B({},a),Ic(e,n)),l=l.ownerDocument||l,n=l.createElement("script"),jl(n),Xl(n,"link",e),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Du(e,a.precedence,l));return t.instance}function Du(l,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,u=n,i=0;i<e.length;i++){var c=e[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(l,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(l,t.firstChild))}function Fc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Ic(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var ju=null;function t0(l,t,a){if(ju===null){var e=new Map,n=ju=new Map;n.set(a,e)}else n=ju,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(l))return e;for(e.set(l,null),a=a.getElementsByTagName(l),n=0;n<a.length;n++){var u=a[n];if(!(u[Ue]||u[Bl]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=l+i;var c=e.get(i);c?c.push(u):e.set(i,[u])}}return e}function a0(l,t,a){l=l.ownerDocument||l,l.head.insertBefore(a,t==="title"?l.querySelector("head > title"):null)}function Lm(l,t,a){if(a===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(l=t.disabled,typeof t.precedence=="string"&&l==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function e0(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Vm(l,t,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ae(e.href),u=t.querySelector(yn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uu.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=u,jl(u);return}u=t.ownerDocument||t,e=Pr(e),(n=Mt.get(n))&&Fc(e,n),u=u.createElement("link"),jl(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Xl(u,"link",e),a.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Uu.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pc=0;function wm(l,t){return l.stylesheets&&l.count===0&&Hu(l,l.stylesheets),0<l.count||0<l.imgCount?function(a){var e=setTimeout(function(){if(l.stylesheets&&Hu(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+t);0<l.imgBytes&&Pc===0&&(Pc=62500*Am());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Hu(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>Pc?50:800)+t);return l.unsuspend=a,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Cu=null;function Hu(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Cu=new Map,t.forEach(Km,l),Cu=null,Uu.call(l))}function Km(l,t){if(!(t.state.loading&4)){var a=Cu.get(l);if(a)var e=a.get(null);else{a=new Map,Cu.set(l,a);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),e=i)}e&&a.set(null,e)}n=t.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||e,u===e&&a.set(null,n),a.set(i,n),this.count++,e=Uu.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),u?u.parentNode.insertBefore(n,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var gn={$$typeof:Ol,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Jm(l,t,a,e,n,u,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ku(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.hiddenUpdates=ku(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function n0(l,t,a,e,n,u,i,c,f,h,b,z){return l=new Jm(l,t,a,i,f,h,b,z,c),t=1,u===!0&&(t|=24),u=ot(3,null,null,t),l.current=u,u.stateNode=l,t=Ui(),t.refCount++,l.pooledCache=t,t.refCount++,u.memoizedState={element:e,isDehydrated:a,cache:t},Bi(u),l}function u0(l){return l?(l=ee,l):ee}function i0(l,t,a,e,n,u){n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=fa(t),e.payload={element:a},u=u===void 0?null:u,u!==null&&(e.callback=u),a=sa(l,e,t),a!==null&&(et(a,l,t),We(a,l,t))}function c0(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var a=l.retryLane;l.retryLane=a!==0&&a<t?a:t}}function lf(l,t){c0(l,t),(l=l.alternate)&&c0(l,t)}function f0(l){if(l.tag===13||l.tag===31){var t=ja(l,67108864);t!==null&&et(t,l,67108864),lf(l,67108864)}}function s0(l){if(l.tag===13||l.tag===31){var t=vt();t=Wu(t);var a=ja(l,t);a!==null&&et(a,l,t),lf(l,t)}}var Ru=!0;function km(l,t,a,e){var n=g.T;g.T=null;var u=M.p;try{M.p=2,tf(l,t,a,e)}finally{M.p=u,g.T=n}}function Wm(l,t,a,e){var n=g.T;g.T=null;var u=M.p;try{M.p=8,tf(l,t,a,e)}finally{M.p=u,g.T=n}}function tf(l,t,a,e){if(Ru){var n=af(e);if(n===null)Qc(l,t,e,Bu,a),r0(l,e);else if(Fm(n,l,t,a,e))e.stopPropagation();else if(r0(l,e),t&4&&-1<$m.indexOf(l)){for(;n!==null;){var u=Ka(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ma(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-ft(i);c.entanglements[1]|=f,i&=~f}Ht(u),(il&6)===0&&(gu=it()+500,dn(0))}}break;case 31:case 13:c=ja(u,2),c!==null&&et(c,u,2),Su(),lf(u,2)}if(u=af(e),u===null&&Qc(l,t,e,Bu,a),u===n)break;n=u}n!==null&&e.stopPropagation()}else Qc(l,t,e,null,a)}}function af(l){return l=ni(l),ef(l)}var Bu=null;function ef(l){if(Bu=null,l=wa(l),l!==null){var t=L(l);if(t===null)l=null;else{var a=t.tag;if(a===13){if(l=el(t),l!==null)return l;l=null}else if(a===31){if(l=X(t),l!==null)return l;l=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Bu=l,null}function o0(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R0()){case pf:return 2;case gf:return 8;case An:case B0:return 32;case bf:return 268435456;default:return 32}default:return 32}}var nf=!1,Sa=null,xa=null,za=null,bn=new Map,Sn=new Map,Ta=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(l,t){switch(l){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function xn(l,t,a,e,n,u){return l===null||l.nativeEvent!==u?(l={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&f0(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function Fm(l,t,a,e,n){switch(t){case"focusin":return Sa=xn(Sa,l,t,a,e,n),!0;case"dragenter":return xa=xn(xa,l,t,a,e,n),!0;case"mouseover":return za=xn(za,l,t,a,e,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,xn(bn.get(u)||null,l,t,a,e,n)),!0;case"gotpointercapture":return u=n.pointerId,Sn.set(u,xn(Sn.get(u)||null,l,t,a,e,n)),!0}return!1}function d0(l){var t=wa(l.target);if(t!==null){var a=L(t);if(a!==null){if(t=a.tag,t===13){if(t=el(a),t!==null){l.blockedOn=t,Af(l.priority,function(){s0(a)});return}}else if(t===31){if(t=X(a),t!==null){l.blockedOn=t,Af(l.priority,function(){s0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){l.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Gu(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var a=af(l.nativeEvent);if(a===null){a=l.nativeEvent;var e=new a.constructor(a.type,a);ei=e,a.target.dispatchEvent(e),ei=null}else return t=Ka(a),t!==null&&f0(t),l.blockedOn=a,!1;t.shift()}return!0}function m0(l,t,a){Gu(l)&&a.delete(t)}function Im(){nf=!1,Sa!==null&&Gu(Sa)&&(Sa=null),xa!==null&&Gu(xa)&&(xa=null),za!==null&&Gu(za)&&(za=null),bn.forEach(m0),Sn.forEach(m0)}function Yu(l,t){l.blockedOn===t&&(l.blockedOn=null,nf||(nf=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,Im)))}var qu=null;function h0(l){qu!==l&&(qu=l,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){qu===l&&(qu=null);for(var t=0;t<l.length;t+=3){var a=l[t],e=l[t+1],n=l[t+2];if(typeof e!="function"){if(ef(e||a)===null)continue;break}var u=Ka(a);u!==null&&(l.splice(t,3),t-=3,ac(u,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function _e(l){function t(f){return Yu(f,l)}Sa!==null&&Yu(Sa,l),xa!==null&&Yu(xa,l),za!==null&&Yu(za,l),bn.forEach(t),Sn.forEach(t);for(var a=0;a<Ta.length;a++){var e=Ta[a];e.blockedOn===l&&(e.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)d0(a),a.blockedOn===null&&Ta.shift();if(a=(l.ownerDocument||l).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],u=a[e+1],i=n[Fl]||null;if(typeof u=="function")i||h0(a);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Fl]||null)c=i.formAction;else if(ef(n)!==null)continue}else c=i.action;typeof c=="function"?a[e+1]=c:(a.splice(e,3),e-=3),h0(a)}}}function v0(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function uf(l){this._internalRoot=l}Xu.prototype.render=uf.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,e=vt();i0(a,e,l,t,null,null)},Xu.prototype.unmount=uf.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;i0(l.current,2,null,l,null,null),Su(),t[Va]=null}};function Xu(l){this._internalRoot=l}Xu.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ef();l={blockedOn:null,target:l,priority:t};for(var a=0;a<Ta.length&&t!==0&&t<Ta[a].priority;a++);Ta.splice(a,0,l),a===0&&d0(l)}};var y0=H.version;if(y0!=="19.2.3")throw Error(r(527,y0,"19.2.3"));M.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(r(188)):(l=Object.keys(l).join(","),Error(r(268,l)));return l=T(t),l=l!==null?$(l):null,l=l===null?null:l.stateNode,l};var Pm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Ne=Qu.inject(Pm),ct=Qu}catch{}}return Tn.createRoot=function(l,t){if(!C(l))throw Error(r(299));var a=!1,e="",n=To,u=Eo,i=Ao;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=n0(l,1,!1,null,null,a,e,null,n,u,i,v0),l[Va]=t.current,Xc(l),new uf(t)},Tn.hydrateRoot=function(l,t,a){if(!C(l))throw Error(r(299));var e=!1,n="",u=To,i=Eo,c=Ao,f=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=n0(l,1,!0,t,a??null,e,n,f,u,i,c,v0),t.context=u0(null),a=t.current,e=vt(),e=Wu(e),n=fa(e),n.callback=null,sa(a,n,e),a=e,t.current.lanes=a,je(t,a),Ht(t),l[Va]=t.current,Xc(l),new Xu(t)},Tn.version="19.2.3",Tn}var M0;function s1(){if(M0)return sf.exports;M0=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(H){console.error(H)}}return E(),sf.exports=f1(),sf.exports}var o1=s1();const r1=N0(o1);function d1(){const[E,H]=Wl.useState([]),_=Wl.useRef(0);return Wl.useEffect(()=>{const r=[],C=L=>{const el=_.current+1;_.current=el,H(O=>[...O,{id:el,x:L.clientX,y:L.clientY}].slice(-10));const X=window.setTimeout(()=>{H(O=>O.filter(T=>T.id!==el))},1300);r.push(X)};return window.addEventListener("pointerdown",C,{passive:!0}),()=>{window.removeEventListener("pointerdown",C),r.forEach(L=>window.clearTimeout(L))}},[]),p.jsx("div",{className:"clickRipples","aria-hidden":"true",children:E.map(r=>p.jsxs(Wl.Fragment,{children:[p.jsx("span",{className:"rippleDots",style:{left:`${r.x}px`,top:`${r.y}px`}}),p.jsx("span",{className:"ripple rippleA",style:{left:`${r.x}px`,top:`${r.y}px`}}),p.jsx("span",{className:"ripple rippleB",style:{left:`${r.x}px`,top:`${r.y}px`}})]},r.id))})}function _0(){return(window.location.hash||"#/").startsWith("#/cv")?"cv":"home"}function m1(){const[E,H]=Wl.useState(_0());return Wl.useEffect(()=>{const _=()=>H(_0());return window.addEventListener("hashchange",_),()=>window.removeEventListener("hashchange",_)},[]),E}function h1(E){window.location.hash!==E&&(window.location.hash=E)}function D0(){return p.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[p.jsx("span",{className:"sceneSkyTint"}),p.jsx("span",{className:"sceneSun"}),p.jsx("span",{className:"sceneRidge ridgeFar"}),p.jsx("span",{className:"sceneRidge ridgeNear"}),p.jsx("span",{className:"scenePine pine1"}),p.jsx("span",{className:"scenePine pine2"}),p.jsx("span",{className:"scenePine pine3"}),p.jsx("span",{className:"sceneCloud cloudA"}),p.jsx("span",{className:"sceneCloud cloudB"}),p.jsx("span",{className:"sceneDust dust1"}),p.jsx("span",{className:"sceneDust dust2"}),p.jsx("span",{className:"sceneDust dust3"}),p.jsx("span",{className:"sceneDust dust4"}),p.jsx("span",{className:"sceneDust dust5"}),p.jsx("span",{className:"sceneLeaf leaf1"}),p.jsx("span",{className:"sceneLeaf leaf2"}),p.jsx("span",{className:"sceneLeaf leaf3"}),p.jsx("span",{className:"sceneLeaf leaf4"}),p.jsx("span",{className:"sceneLeaf leaf5"}),p.jsx("span",{className:"sceneLeaf leaf6"}),p.jsx("span",{className:"sceneWind wind1"}),p.jsx("span",{className:"sceneWind wind2"}),p.jsx("span",{className:"sceneWind wind3"})]})}function v1(){return p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function y1(){return p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function p1(){return p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function g1(){return p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function b1(){return p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function j0({theme:E,onToggle:H}){const _=E==="dark";return p.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:H,"aria-label":_?"Switch to light theme":"Switch to dark theme",title:_?"Light mode":"Dark mode",children:_?p.jsx(g1,{}):p.jsx(b1,{})})}const S1=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],mf=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function x1(E){const H=[...E];for(let _=H.length-1;_>0;_--){const r=Math.floor(Math.random()*(_+1));[H[_],H[r]]=[H[r],H[_]]}return H}function O0(E){const H=S1.slice(0,E);return x1([...H,...H].map((_,r)=>({id:r,symbol:_,isFlipped:!1,isMatched:!1})))}function z1(){const[E,H]=gl.useState(0),_=mf[E],r=E===mf.length-1,[C,L]=gl.useState(()=>O0(_.cols*_.rows/2)),[el,X]=gl.useState([]),[O,T]=gl.useState(0),[$,B]=gl.useState(0),[nl,Ql]=gl.useState(!1),[yl,Dl]=gl.useState(!1),[yt,Cl]=gl.useState(!1),$l=gl.useRef(null),Ol=gl.useRef(null),wl=gl.useRef(0),Zl=gl.useRef(null),Hl=gl.useCallback(()=>{if(typeof window>"u")return null;const G=window.AudioContext||window.webkitAudioContext;return G?(Zl.current||(Zl.current=new G),Zl.current.state==="suspended"&&Zl.current.resume(),Zl.current):null},[]),Q=gl.useCallback((G,ul,g,M,j=0)=>{const q=Hl();if(!q)return;const F=q.createOscillator(),s=q.createGain(),S=q.currentTime+j;F.type=g,F.frequency.setValueAtTime(G,S),s.gain.setValueAtTime(1e-4,S),s.gain.exponentialRampToValueAtTime(M,S+.02),s.gain.exponentialRampToValueAtTime(1e-4,S+ul),F.connect(s),s.connect(q.destination),F.start(S),F.stop(S+ul+.02)},[Hl]),Rl=gl.useCallback(()=>{Q(660,.12,"triangle",.05,0),Q(880,.12,"triangle",.04,.08)},[Q]),nt=gl.useCallback(()=>{Q(420,.05,"triangle",.018,0)},[Q]),Rt=gl.useCallback(()=>{Q(523.25,.16,"sine",.06,0),Q(659.25,.16,"sine",.06,.12),Q(783.99,.22,"sine",.07,.24)},[Q]);gl.useEffect(()=>{nl&&!yl&&C.every(G=>G.isMatched)&&Dl(!0)},[C,nl,yl]),gl.useEffect(()=>(nl&&!yl&&($l.current=setInterval(()=>B(G=>G+1),1e3)),()=>{$l.current&&clearInterval($l.current)}),[nl,yl]),gl.useEffect(()=>{yl&&Rt()},[yl,Rt]),gl.useEffect(()=>{if(!yl)return;const G=Ol.current;if(!G)return;const ul=G.getContext("2d");if(!ul)return;G.width=G.offsetWidth,G.height=G.offsetHeight;const g=[],M=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],j=(S,A)=>{for(let N=0;N<52;N++){const Z=Math.PI*2*N/52,J=2+Math.random()*4.5;g.push({x:S,y:A,vx:Math.cos(Z)*J,vy:Math.sin(Z)*J,alpha:1,color:M[Math.floor(Math.random()*M.length)],r:2+Math.random()*2})}};let q=0;const F=setInterval(()=>{j(G.width*(.15+Math.random()*.7),G.height*(.1+Math.random()*.55)),++q>=7&&clearInterval(F)},320),s=()=>{ul.clearRect(0,0,G.width,G.height);for(let S=g.length-1;S>=0;S--){const A=g[S];if(A.x+=A.vx,A.y+=A.vy,A.vy+=.09,A.alpha-=.016,A.alpha<=0){g.splice(S,1);continue}ul.globalAlpha=A.alpha,ul.fillStyle=A.color,ul.beginPath(),ul.arc(A.x,A.y,A.r,0,Math.PI*2),ul.fill()}ul.globalAlpha=1,wl.current=requestAnimationFrame(s)};return s(),()=>{clearInterval(F),cancelAnimationFrame(wl.current)}},[yl]);const ut=gl.useCallback(G=>{$l.current&&clearInterval($l.current);const ul=mf[G];H(G),L(O0(ul.cols*ul.rows/2)),X([]),T(0),B(0),Ql(!1),Dl(!1),Cl(!1)},[]),Ll=gl.useCallback(G=>{const ul=C.find(j=>j.id===G);if(!ul||ul.isFlipped||ul.isMatched||yt)return;if(nl||Ql(!0),nt(),L(j=>j.map(q=>q.id===G?{...q,isFlipped:!0}:q)),el.length===0){X([G]);return}const g=el[0],M=C.find(j=>j.id===g);X([]),T(j=>j+1),M.symbol===ul.symbol?(Rl(),L(j=>j.map(q=>q.id===g||q.id===G?{...q,isFlipped:!0,isMatched:!0}:q))):(Cl(!0),setTimeout(()=>{L(j=>j.map(q=>q.id===g||q.id===G?{...q,isFlipped:!1}:q)),Cl(!1)},900))},[C,el,yt,nl,nt,Rl]),Dt=G=>`${String(Math.floor(G/60)).padStart(2,"0")}:${String(G%60).padStart(2,"0")}`;return p.jsxs("div",{className:"memoryGame",children:[p.jsxs("div",{className:"memoryGameHeader",children:[p.jsxs("span",{className:"memoryGameLevel",children:["Lv ",E+1," · ",_.n,"×",_.n]}),p.jsxs("span",{className:"memoryGameStat",children:["🐾 ",p.jsx("strong",{children:O})]}),p.jsxs("span",{className:"memoryGameStat",children:["🕒 ",p.jsx("strong",{children:Dt($)})]})]}),p.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${_.cols}, ${_.cell}px)`,gridTemplateRows:`repeat(${_.rows}, ${_.cell}px)`},children:C.map(G=>p.jsx("button",{className:`memoryCard${G.isFlipped||G.isMatched?" flipped":""}${G.isMatched?" matched":""}`,onClick:()=>Ll(G.id),style:{width:_.cell,height:_.cell},"aria-label":G.isFlipped||G.isMatched?G.symbol:"Hidden card",children:p.jsxs("span",{className:"memoryCardInner",children:[p.jsx("span",{className:"memoryCardBack"}),p.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(_.cell*.44)},children:G.symbol})]})},G.id))}),yl&&p.jsxs("div",{className:"memoryGameModal",children:[p.jsx("canvas",{ref:Ol,className:"memoryGameFireworks"}),p.jsxs("div",{className:"memoryGameModalBox",children:[p.jsx("div",{className:"memoryGameModalEmoji",children:r?"🏆":"🎉"}),p.jsx("div",{className:"memoryGameModalTitle",children:r?"You beat all levels!":`Level ${E+1} clear!`}),p.jsxs("div",{className:"memoryGameModalSub",children:[O," moves · ",Dt($)]}),!r&&p.jsx("button",{className:"memoryGameModalBtn",onClick:()=>ut(E+1),children:"Next Level →"}),p.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>ut(0),children:r?"Play Again":"Restart from Lv 1"})]})]})]})}function T1({theme:E,onToggleTheme:H}){return p.jsxs("div",{className:"cvPage",children:[p.jsxs("header",{className:"topbar",children:[p.jsx(D0,{}),p.jsxs("div",{className:"container topbarInner",children:[p.jsx("button",{className:"btn",onClick:()=>h1("#/"),type:"button",children:"← Back"}),p.jsx("div",{className:"brand",children:p.jsx("span",{children:"Résumé"})}),p.jsxs("div",{className:"rightActions",children:[p.jsx(j0,{theme:E,onToggle:H}),p.jsx("a",{className:"btn primary",href:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf",target:"_blank",rel:"noreferrer",children:"Open in new tab"})]})]})]}),p.jsx("main",{className:"container cvMain",children:p.jsx("iframe",{src:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf#toolbar=0",title:"Resume PDF",className:"cvIframe",loading:"lazy"})})]})}const E1="/my-portfolio/",kl=E=>`${E1}${E.replace(/^\/+/,"")}`,A1=[{id:"p1",title:"FPS Zombie Online",role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:kl("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[kl("/screenshots/fps/1.jpg"),kl("/screenshots/fps/2.jpg"),kl("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:kl("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[kl("/screenshots/tressette/1.jpg"),kl("/screenshots/tressette/2.jpg"),kl("/screenshots/tressette/3.jpg")]},{id:"p3",title:"Thoi Loan Online",role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:kl("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[kl("/screenshots/thoiloan/1.jpg"),kl("/screenshots/thoiloan/2.jpg"),kl("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:kl("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["C++"],previewMp4:kl("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:kl("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}];function M1({src:E,alt:H,onClose:_}){return Wl.useEffect(()=>{const r=C=>{C.key==="Escape"&&_()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[_]),p.jsxs("div",{className:"lightboxOverlay",onClick:_,role:"dialog","aria-modal":"true",children:[p.jsx("img",{className:"lightboxImg",src:E,alt:H,onClick:r=>r.stopPropagation()}),p.jsx("button",{className:"lightboxClose",onClick:_,"aria-label":"Close",children:"×"})]})}function _1({title:E,previewMp4:H,previewGif:_,youtubeUrl:r}){return p.jsxs("div",{className:"previewCard",children:[H?p.jsx("video",{className:"previewMedia",src:H,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${E} preview video`}):_?p.jsx("img",{src:_,alt:`${E} preview`,className:"previewMedia",loading:"lazy"}):p.jsx("div",{className:"previewPlaceholder",children:"No preview"}),r?p.jsx("a",{className:"previewOverlayBtn",href:r,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${E}`,children:"Watch Full Demo"}):null]})}function O1({theme:E,onToggleTheme:H}){const[_,r]=Wl.useState(null),C=Wl.useMemo(()=>"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world.",[]),[L,el]=Wl.useState("");return Wl.useEffect(()=>{let X=0,O;const T=()=>{if(X+=1,el(C.slice(0,X)),X>=C.length)return;const $=C[X-1],B=$==="."?360:$===","?140:24;O=window.setTimeout(T,B)};return O=window.setTimeout(T,24),()=>{O!==void 0&&window.clearTimeout(O)}},[C]),p.jsxs("div",{className:"page",children:[p.jsxs("header",{className:"topbar",children:[p.jsx(D0,{}),p.jsxs("div",{className:"container topbarInner",children:[p.jsx("a",{className:"brand",href:"#/",children:p.jsx("span",{children:"Portfolio"})}),p.jsxs("nav",{className:"nav",children:[p.jsx("a",{className:"navLink",href:"#projects",children:"Projects"}),p.jsx("a",{href:"./NGUYEN_HUY_TRUONG_GE_VNG.pdf",download:!0,className:"navLinkBtn",children:"Résumé"}),p.jsx(j0,{theme:E,onToggle:H})]})]})]}),p.jsxs("main",{className:"container main",children:[p.jsxs("section",{className:"intro",id:"top",style:{marginBottom:"20px"},children:[p.jsxs("h1",{className:"h3 heroTitle",children:["Hi, I'm ",p.jsx("span",{className:"accent",children:"Truong"})]}),p.jsxs("p",{className:"summary",children:[L,L.length<C.length?p.jsx("span",{className:"typingCursor","aria-hidden":"true",children:"|"}):null]})]}),p.jsx(z1,{}),p.jsxs("section",{id:"projects",className:"projects",children:[p.jsx("div",{className:"sectionHead",children:p.jsx("h2",{className:"h3",children:"Projects"})}),p.jsx("div",{className:"projectList",children:A1.map(X=>p.jsxs("div",{className:"projectItem",children:[p.jsx("div",{className:"projectMedia",children:p.jsx(_1,{title:X.title,previewMp4:X.previewMp4,previewGif:X.previewGif,youtubeUrl:X.youtubeUrl})}),p.jsxs("div",{className:"projectInfo",children:[p.jsxs("div",{className:"projectTitleRow",children:[p.jsx("h3",{className:"h3",children:X.title}),X.role?p.jsx("span",{className:"pill",children:X.role}):null]}),p.jsx("p",{className:"projectDesc",children:X.description}),X.tech?.length?p.jsx("div",{className:"tech",children:X.tech.map(O=>p.jsx("span",{className:"tag",children:O},O))}):null,p.jsxs("div",{className:"projectActions",children:[X.githubUrl?p.jsxs("a",{className:"btn btnIcon",href:X.githubUrl,target:"_blank",rel:"noreferrer",children:[p.jsx(p1,{}),"GitHub"]}):null,X.downloadUrl?p.jsx("a",{className:"btn primary",href:X.downloadUrl,target:"_blank",rel:"noreferrer",children:"Download / Play"}):null]})]}),X.screenshots?.length?p.jsx("div",{className:"screenshots fill3",children:X.screenshots.slice(0,3).map((O,T)=>p.jsx("img",{src:O,alt:`${X.title} screenshot ${T+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>r({src:O,alt:`${X.title} screenshot ${T+1}`})},T))}):null]},X.id))})]})]}),p.jsxs("footer",{className:"footer",children:[p.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:p.jsx("span",{className:"footerBaseAccent"})}),p.jsxs("div",{className:"container footerInner",children:[p.jsxs("span",{className:"footerLeft",children:[p.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),p.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:p.jsx(y1,{})}),p.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:p.jsx(v1,{})})]}),p.jsx("span",{className:"muted",children:"React + TypeScript (Vite)"})]})]}),_&&p.jsx(M1,{src:_.src,alt:_.alt,onClose:()=>r(null)})]})}function N1(){const E=localStorage.getItem("theme");return E==="light"||E==="dark"?E:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const D1=`
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');

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

  --shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  --focus: 0 0 0 3px rgba(34, 211, 238, 0.20);

  color-scheme: dark;
}

*{ box-sizing: border-box; }

html, body, #root{
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
  background-image:
    radial-gradient(circle at 1px 1px,
      color-mix(in srgb, var(--text) 6%, transparent) 1px,
      transparent 0),
    radial-gradient(1600px 900px at 50% -20%,
      color-mix(in srgb, var(--accent) 14%, transparent),
      transparent 72%),
    linear-gradient(165deg,
      color-mix(in srgb, var(--bg) 90%, var(--accent) 10%) 0%,
      var(--bg) 45%,
      color-mix(in srgb, var(--bg) 88%, var(--accent-2) 12%) 100%);
  background-size: 18px 18px, 100% 100%, 100% 100%;
  background-position: 0 0, center top, center;
  background-repeat: repeat, no-repeat, no-repeat;
  background-attachment: fixed, fixed, fixed;
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
  min-height: 100%;
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

.topbar{
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.topbarInner{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 10px;
  animation: revealRight 600ms cubic-bezier(.2,.8,.2,1) 60ms both;
}

.topbarScene{
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.62;
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

.accent{
  color: var(--accent-2);
  text-shadow: 0 0 18px color-mix(in srgb, var(--accent-2) 24%, transparent);
}

.summary{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 18px;
  max-width: 88ch;
}

.typingCursor{
  display: inline-block;
  margin-left: 2px;
  color: var(--accent-2);
  animation: typingCursorBlink 920ms steps(1, end) infinite;
}

@keyframes typingCursorBlink{
  0%, 45%{ opacity: 1; }
  46%, 100%{ opacity: 0; }
}

.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
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

.cvPage{
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.cvMain{
  padding: 18px 0 28px;
  flex: 1;
  opacity: 0;
  animation: revealUp 700ms cubic-bezier(.2,.8,.25,1) 160ms forwards;
}

.cvIframe{
  width: 100%;
  height: calc(100vh - 72px - 28px);
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface-solid);
  box-shadow: var(--shadow);
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
  .projectItem{
    grid-template-columns: 1fr;
  }

  .cvIframe{
    height: calc(100vh - 72px - 28px);
  }
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

  .summary{
    font-size: 16px;
  }

  .projectItem{
    padding: 12px;
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
  .intro,
  .memoryGame,
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
  color: var(--accent-2);
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

`;function j1(){const E=m1(),[H,_]=Wl.useState(()=>N1()),r=Wl.useCallback(()=>{_(C=>C==="dark"?"light":"dark")},[]);return Wl.useEffect(()=>{document.documentElement.dataset.theme=H,localStorage.setItem("theme",H)},[H]),p.jsxs(p.Fragment,{children:[p.jsx("style",{children:D1}),p.jsx(d1,{}),E==="cv"?p.jsx(T1,{theme:H,onToggleTheme:r}):p.jsx(O1,{theme:H,onToggleTheme:r})]})}r1.createRoot(document.getElementById("root")).render(p.jsx(Wl.StrictMode,{children:p.jsx(j1,{})}));
