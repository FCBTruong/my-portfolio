(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))d(D);new MutationObserver(D=>{for(const q of D)if(q.type==="childList")for(const tt of q.addedNodes)tt.tagName==="LINK"&&tt.rel==="modulepreload"&&d(tt)}).observe(document,{childList:!0,subtree:!0});function M(D){const q={};return D.integrity&&(q.integrity=D.integrity),D.referrerPolicy&&(q.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?q.credentials="include":D.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function d(D){if(D.ep)return;D.ep=!0;const q=M(D);fetch(D.href,q)}})();function Od(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var cf={exports:{}},zn={};var bd;function l1(){if(bd)return zn;bd=1;var T=Symbol.for("react.transitional.element"),C=Symbol.for("react.fragment");function M(d,D,q){var tt=null;if(q!==void 0&&(tt=""+q),D.key!==void 0&&(tt=""+D.key),"key"in D){q={};for(var vt in D)vt!=="key"&&(q[vt]=D[vt])}else q=D;return D=q.ref,{$$typeof:T,type:d,key:tt,ref:D!==void 0?D:null,props:q}}return zn.Fragment=C,zn.jsx=M,zn.jsxs=M,zn}var xd;function a1(){return xd||(xd=1,cf.exports=l1()),cf.exports}var o=a1(),ff={exports:{}},w={};var Sd;function n1(){if(Sd)return w;Sd=1;var T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),X=Symbol.iterator;function Q(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mt=Object.assign,Vt={};function Et(r,x,j){this.props=r,this.context=x,this.refs=Vt,this.updater=j||W}Et.prototype.isReactComponent={},Et.prototype.setState=function(r,x){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,x,"setState")},Et.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Wt(){}Wt.prototype=Et.prototype;function _t(r,x,j){this.props=r,this.context=x,this.refs=Vt,this.updater=j||W}var Kt=_t.prototype=new Wt;Kt.constructor=_t,mt(Kt,Et.prototype),Kt.isPureReactComponent=!0;var wt=Array.isArray;function Bt(){}var L={H:null,A:null,T:null,S:null},Ht=Object.prototype.hasOwnProperty;function ae(r,x,j){var N=j.ref;return{$$typeof:T,type:r,key:x,ref:N!==void 0?N:null,props:j}}function Be(r,x){return ae(r.type,x,r.props)}function ne(r){return typeof r=="object"&&r!==null&&r.$$typeof===T}function Qt(r){var x={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(j){return x[j]})}var De=/\/+/g;function je(r,x){return typeof r=="object"&&r!==null&&r.key!=null?Qt(""+r.key):x.toString(36)}function ue(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Bt,Bt):(r.status="pending",r.then(function(x){r.status==="pending"&&(r.status="fulfilled",r.value=x)},function(x){r.status==="pending"&&(r.status="rejected",r.reason=x)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function p(r,x,j,N,B){var K=typeof r;(K==="undefined"||K==="boolean")&&(r=null);var at=!1;if(r===null)at=!0;else switch(K){case"bigint":case"string":case"number":at=!0;break;case"object":switch(r.$$typeof){case T:case C:at=!0;break;case k:return at=r._init,p(at(r._payload),x,j,N,B)}}if(at)return B=B(r),at=N===""?"."+je(r,0):N,wt(B)?(j="",at!=null&&(j=at.replace(De,"$&/")+"/"),p(B,x,j,"",function(Na){return Na})):B!=null&&(ne(B)&&(B=Be(B,j+(B.key==null||r&&r.key===B.key?"":(""+B.key).replace(De,"$&/")+"/")+at)),x.push(B)),1;at=0;var Ot=N===""?".":N+":";if(wt(r))for(var St=0;St<r.length;St++)N=r[St],K=Ot+je(N,St),at+=p(N,x,j,K,B);else if(St=Q(r),typeof St=="function")for(r=St.call(r),St=0;!(N=r.next()).done;)N=N.value,K=Ot+je(N,St++),at+=p(N,x,j,K,B);else if(K==="object"){if(typeof r.then=="function")return p(ue(r),x,j,N,B);throw x=String(r),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return at}function A(r,x,j){if(r==null)return r;var N=[],B=0;return p(r,N,"","",function(K){return x.call(j,K,B++)}),N}function R(r){if(r._status===-1){var x=r._result;x=x(),x.then(function(j){(r._status===0||r._status===-1)&&(r._status=1,r._result=j)},function(j){(r._status===0||r._status===-1)&&(r._status=2,r._result=j)}),r._status===-1&&(r._status=0,r._result=x)}if(r._status===1)return r._result.default;throw r._result}var et=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},Z={map:A,forEach:function(r,x,j){A(r,function(){x.apply(this,arguments)},j)},count:function(r){var x=0;return A(r,function(){x++}),x},toArray:function(r){return A(r,function(x){return x})||[]},only:function(r){if(!ne(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return w.Activity=G,w.Children=Z,w.Component=Et,w.Fragment=M,w.Profiler=D,w.PureComponent=_t,w.StrictMode=d,w.Suspense=O,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,w.__COMPILER_RUNTIME={__proto__:null,c:function(r){return L.H.useMemoCache(r)}},w.cache=function(r){return function(){return r.apply(null,arguments)}},w.cacheSignal=function(){return null},w.cloneElement=function(r,x,j){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var N=mt({},r.props),B=r.key;if(x!=null)for(K in x.key!==void 0&&(B=""+x.key),x)!Ht.call(x,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&x.ref===void 0||(N[K]=x[K]);var K=arguments.length-2;if(K===1)N.children=j;else if(1<K){for(var at=Array(K),Ot=0;Ot<K;Ot++)at[Ot]=arguments[Ot+2];N.children=at}return ae(r.type,B,N)},w.createContext=function(r){return r={$$typeof:tt,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:q,_context:r},r},w.createElement=function(r,x,j){var N,B={},K=null;if(x!=null)for(N in x.key!==void 0&&(K=""+x.key),x)Ht.call(x,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(B[N]=x[N]);var at=arguments.length-2;if(at===1)B.children=j;else if(1<at){for(var Ot=Array(at),St=0;St<at;St++)Ot[St]=arguments[St+2];B.children=Ot}if(r&&r.defaultProps)for(N in at=r.defaultProps,at)B[N]===void 0&&(B[N]=at[N]);return ae(r,K,B)},w.createRef=function(){return{current:null}},w.forwardRef=function(r){return{$$typeof:vt,render:r}},w.isValidElement=ne,w.lazy=function(r){return{$$typeof:k,_payload:{_status:-1,_result:r},_init:R}},w.memo=function(r,x){return{$$typeof:E,type:r,compare:x===void 0?null:x}},w.startTransition=function(r){var x=L.T,j={};L.T=j;try{var N=r(),B=L.S;B!==null&&B(j,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Bt,et)}catch(K){et(K)}finally{x!==null&&j.types!==null&&(x.types=j.types),L.T=x}},w.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},w.use=function(r){return L.H.use(r)},w.useActionState=function(r,x,j){return L.H.useActionState(r,x,j)},w.useCallback=function(r,x){return L.H.useCallback(r,x)},w.useContext=function(r){return L.H.useContext(r)},w.useDebugValue=function(){},w.useDeferredValue=function(r,x){return L.H.useDeferredValue(r,x)},w.useEffect=function(r,x){return L.H.useEffect(r,x)},w.useEffectEvent=function(r){return L.H.useEffectEvent(r)},w.useId=function(){return L.H.useId()},w.useImperativeHandle=function(r,x,j){return L.H.useImperativeHandle(r,x,j)},w.useInsertionEffect=function(r,x){return L.H.useInsertionEffect(r,x)},w.useLayoutEffect=function(r,x){return L.H.useLayoutEffect(r,x)},w.useMemo=function(r,x){return L.H.useMemo(r,x)},w.useOptimistic=function(r,x){return L.H.useOptimistic(r,x)},w.useReducer=function(r,x,j){return L.H.useReducer(r,x,j)},w.useRef=function(r){return L.H.useRef(r)},w.useState=function(r){return L.H.useState(r)},w.useSyncExternalStore=function(r,x,j){return L.H.useSyncExternalStore(r,x,j)},w.useTransition=function(){return L.H.useTransition()},w.version="19.2.3",w}var zd;function pf(){return zd||(zd=1,ff.exports=n1()),ff.exports}var gt=pf();const Rt=Od(gt);var rf={exports:{}},Tn={},sf={exports:{}},of={};var Td;function u1(){return Td||(Td=1,(function(T){function C(p,A){var R=p.length;p.push(A);t:for(;0<R;){var et=R-1>>>1,Z=p[et];if(0<D(Z,A))p[et]=A,p[R]=Z,R=et;else break t}}function M(p){return p.length===0?null:p[0]}function d(p){if(p.length===0)return null;var A=p[0],R=p.pop();if(R!==A){p[0]=R;t:for(var et=0,Z=p.length,r=Z>>>1;et<r;){var x=2*(et+1)-1,j=p[x],N=x+1,B=p[N];if(0>D(j,R))N<Z&&0>D(B,j)?(p[et]=B,p[N]=R,et=N):(p[et]=j,p[x]=R,et=x);else if(N<Z&&0>D(B,R))p[et]=B,p[N]=R,et=N;else break t}}return A}function D(p,A){var R=p.sortIndex-A.sortIndex;return R!==0?R:p.id-A.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;T.unstable_now=function(){return q.now()}}else{var tt=Date,vt=tt.now();T.unstable_now=function(){return tt.now()-vt}}var O=[],E=[],k=1,G=null,X=3,Q=!1,W=!1,mt=!1,Vt=!1,Et=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,_t=typeof setImmediate<"u"?setImmediate:null;function Kt(p){for(var A=M(E);A!==null;){if(A.callback===null)d(E);else if(A.startTime<=p)d(E),A.sortIndex=A.expirationTime,C(O,A);else break;A=M(E)}}function wt(p){if(mt=!1,Kt(p),!W)if(M(O)!==null)W=!0,Bt||(Bt=!0,Qt());else{var A=M(E);A!==null&&ue(wt,A.startTime-p)}}var Bt=!1,L=-1,Ht=5,ae=-1;function Be(){return Vt?!0:!(T.unstable_now()-ae<Ht)}function ne(){if(Vt=!1,Bt){var p=T.unstable_now();ae=p;var A=!0;try{t:{W=!1,mt&&(mt=!1,Wt(L),L=-1),Q=!0;var R=X;try{e:{for(Kt(p),G=M(O);G!==null&&!(G.expirationTime>p&&Be());){var et=G.callback;if(typeof et=="function"){G.callback=null,X=G.priorityLevel;var Z=et(G.expirationTime<=p);if(p=T.unstable_now(),typeof Z=="function"){G.callback=Z,Kt(p),A=!0;break e}G===M(O)&&d(O),Kt(p)}else d(O);G=M(O)}if(G!==null)A=!0;else{var r=M(E);r!==null&&ue(wt,r.startTime-p),A=!1}}break t}finally{G=null,X=R,Q=!1}A=void 0}}finally{A?Qt():Bt=!1}}}var Qt;if(typeof _t=="function")Qt=function(){_t(ne)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,je=De.port2;De.port1.onmessage=ne,Qt=function(){je.postMessage(null)}}else Qt=function(){Et(ne,0)};function ue(p,A){L=Et(function(){p(T.unstable_now())},A)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(p){p.callback=null},T.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ht=0<p?Math.floor(1e3/p):5},T.unstable_getCurrentPriorityLevel=function(){return X},T.unstable_next=function(p){switch(X){case 1:case 2:case 3:var A=3;break;default:A=X}var R=X;X=A;try{return p()}finally{X=R}},T.unstable_requestPaint=function(){Vt=!0},T.unstable_runWithPriority=function(p,A){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var R=X;X=p;try{return A()}finally{X=R}},T.unstable_scheduleCallback=function(p,A,R){var et=T.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?et+R:et):R=et,p){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,p={id:k++,callback:A,priorityLevel:p,startTime:R,expirationTime:Z,sortIndex:-1},R>et?(p.sortIndex=R,C(E,p),M(O)===null&&p===M(E)&&(mt?(Wt(L),L=-1):mt=!0,ue(wt,R-et))):(p.sortIndex=Z,C(O,p),W||Q||(W=!0,Bt||(Bt=!0,Qt()))),p},T.unstable_shouldYield=Be,T.unstable_wrapCallback=function(p){var A=X;return function(){var R=X;X=A;try{return p.apply(this,arguments)}finally{X=R}}}})(of)),of}var Ed;function i1(){return Ed||(Ed=1,sf.exports=u1()),sf.exports}var df={exports:{}},Zt={};var Ad;function c1(){if(Ad)return Zt;Ad=1;var T=pf();function C(O){var E="https://react.dev/errors/"+O;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)E+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+O+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var d={d:{f:M,r:function(){throw Error(C(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},D=Symbol.for("react.portal");function q(O,E,k){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:G==null?null:""+G,children:O,containerInfo:E,implementation:k}}var tt=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function vt(O,E){if(O==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Zt.createPortal=function(O,E){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(C(299));return q(O,E,null,k)},Zt.flushSync=function(O){var E=tt.T,k=d.p;try{if(tt.T=null,d.p=2,O)return O()}finally{tt.T=E,d.p=k,d.d.f()}},Zt.preconnect=function(O,E){typeof O=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,d.d.C(O,E))},Zt.prefetchDNS=function(O){typeof O=="string"&&d.d.D(O)},Zt.preinit=function(O,E){if(typeof O=="string"&&E&&typeof E.as=="string"){var k=E.as,G=vt(k,E.crossOrigin),X=typeof E.integrity=="string"?E.integrity:void 0,Q=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;k==="style"?d.d.S(O,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:G,integrity:X,fetchPriority:Q}):k==="script"&&d.d.X(O,{crossOrigin:G,integrity:X,fetchPriority:Q,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Zt.preinitModule=function(O,E){if(typeof O=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var k=vt(E.as,E.crossOrigin);d.d.M(O,{crossOrigin:k,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&d.d.M(O)},Zt.preload=function(O,E){if(typeof O=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var k=E.as,G=vt(k,E.crossOrigin);d.d.L(O,k,{crossOrigin:G,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Zt.preloadModule=function(O,E){if(typeof O=="string")if(E){var k=vt(E.as,E.crossOrigin);d.d.m(O,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:k,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else d.d.m(O)},Zt.requestFormReset=function(O){d.d.r(O)},Zt.unstable_batchedUpdates=function(O,E){return O(E)},Zt.useFormState=function(O,E,k){return tt.H.useFormState(O,E,k)},Zt.useFormStatus=function(){return tt.H.useHostTransitionStatus()},Zt.version="19.2.3",Zt}var jd;function f1(){if(jd)return df.exports;jd=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(C){console.error(C)}}return T(),df.exports=c1(),df.exports}var Md;function r1(){if(Md)return Tn;Md=1;var T=i1(),C=pf(),M=f1();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function q(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function tt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(q(t)!==t)throw Error(d(188))}function E(t){var e=t.alternate;if(!e){if(e=q(t),e===null)throw Error(d(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return O(n),t;if(u===a)return O(n),e;u=u.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?t:e}function k(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=k(t),e!==null)return e;t=t.sibling}return null}var G=Object.assign,X=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),mt=Symbol.for("react.fragment"),Vt=Symbol.for("react.strict_mode"),Et=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),_t=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),Bt=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=ne&&t[ne]||t["@@iterator"],typeof t=="function"?t:null)}var De=Symbol.for("react.client.reference");function je(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===De?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mt:return"Fragment";case Et:return"Profiler";case Vt:return"StrictMode";case wt:return"Suspense";case Bt:return"SuspenseList";case ae:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case _t:return t.displayName||"Context";case Wt:return(t._context.displayName||"Context")+".Consumer";case Kt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return e=t.displayName||null,e!==null?e:je(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return je(t(e))}catch{}}return null}var ue=Array.isArray,p=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},et=[],Z=-1;function r(t){return{current:t}}function x(t){0>Z||(t.current=et[Z],et[Z]=null,Z--)}function j(t,e){Z++,et[Z]=t.current,t.current=e}var N=r(null),B=r(null),K=r(null),at=r(null);function Ot(t,e){switch(j(K,e),j(B,t),j(N,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?wo(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=wo(e),t=Qo(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}x(N),j(N,t)}function St(){x(N),x(B),x(K)}function Na(t){t.memoizedState!==null&&j(at,t);var e=N.current,l=Qo(e,t.type);e!==l&&(j(B,t),j(N,l))}function En(t){B.current===t&&(x(N),x(B)),at.current===t&&(x(at),gn._currentValue=R)}var wu,yf;function Al(t){if(wu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||"",yf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+t+yf}var Qu=!1;function Zu(t,e){if(!t||Qu)return"";Qu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(g){var y=g}Reflect.construct(t,[],z)}else{try{z.call()}catch(g){y=g}t.call(z.prototype)}}else{try{throw Error()}catch(g){y=g}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),v=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===v.length)for(a=f.length-1,n=v.length-1;1<=a&&0<=n&&f[a]!==v[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==v[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==v[n]){var b=`
`+f[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{Qu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Al(l):""}function Cd(t,e){switch(t.tag){case 26:case 27:case 5:return Al(t.type);case 16:return Al("Lazy");case 13:return t.child!==e&&e!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return Zu(t.type,!1);case 11:return Zu(t.type.render,!1);case 1:return Zu(t.type,!0);case 31:return Al("Activity");default:return""}}function gf(t){try{var e="",l=null;do e+=Cd(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Vu=Object.prototype.hasOwnProperty,Ku=T.unstable_scheduleCallback,Ju=T.unstable_cancelCallback,Rd=T.unstable_shouldYield,Bd=T.unstable_requestPaint,ie=T.unstable_now,Hd=T.unstable_getCurrentPriorityLevel,bf=T.unstable_ImmediatePriority,xf=T.unstable_UserBlockingPriority,An=T.unstable_NormalPriority,Gd=T.unstable_LowPriority,Sf=T.unstable_IdlePriority,Yd=T.log,qd=T.unstable_setDisableYieldValue,_a=null,ce=null;function tl(t){if(typeof Yd=="function"&&qd(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(_a,t)}catch{}}var fe=Math.clz32?Math.clz32:wd,Xd=Math.log,Ld=Math.LN2;function wd(t){return t>>>=0,t===0?32:31-(Xd(t)/Ld|0)|0}var jn=256,Mn=262144,Nn=4194304;function jl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _n(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=jl(a):(i&=c,i!==0?n=jl(i):l||(l=c&~t,l!==0&&(n=jl(l))))):(c=a&~u,c!==0?n=jl(c):i!==0?n=jl(i):l||(l=a&~t,l!==0&&(n=jl(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function Da(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Qd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(){var t=Nn;return Nn<<=1,(Nn&62914560)===0&&(Nn=4194304),t}function ku(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Oa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zd(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,v=t.hiddenUpdates;for(l=i&~l;0<l;){var b=31-fe(l),z=1<<b;c[b]=0,f[b]=-1;var y=v[b];if(y!==null)for(v[b]=null,b=0;b<y.length;b++){var g=y[b];g!==null&&(g.lane&=-536870913)}l&=~z}a!==0&&Tf(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Tf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-fe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Ef(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-fe(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Af(t,e){var l=e&-e;return l=(l&42)!==0?1:Wu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Wu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $u(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function jf(){var t=A.p;return t!==0?t:(t=window.event,t===void 0?32:dd(t.type))}function Mf(t,e){var l=A.p;try{return A.p=t,e()}finally{A.p=l}}var el=Math.random().toString(36).slice(2),Gt="__reactFiber$"+el,$t="__reactProps$"+el,Zl="__reactContainer$"+el,Fu="__reactEvents$"+el,Vd="__reactListeners$"+el,Kd="__reactHandles$"+el,Nf="__reactResources$"+el,Ua="__reactMarker$"+el;function Iu(t){delete t[Gt],delete t[$t],delete t[Fu],delete t[Vd],delete t[Kd]}function Vl(t){var e=t[Gt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Zl]||l[Gt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=$o(t);t!==null;){if(l=t[Gt])return l;t=$o(t)}return e}t=l,l=t.parentNode}return null}function Kl(t){if(t=t[Gt]||t[Zl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ca(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Jl(t){var e=t[Nf];return e||(e=t[Nf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ut(t){t[Ua]=!0}var _f=new Set,Df={};function Ml(t,e){kl(t,e),kl(t+"Capture",e)}function kl(t,e){for(Df[t]=e,t=0;t<e.length;t++)_f.add(e[t])}var Jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Uf={};function kd(t){return Vu.call(Uf,t)?!0:Vu.call(Of,t)?!1:Jd.test(t)?Uf[t]=!0:(Of[t]=!0,!1)}function Dn(t,e,l){if(kd(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function On(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function He(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wd(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pu(t){if(!t._valueTracker){var e=Cf(t)?"checked":"value";t._valueTracker=Wd(t,e,""+t[e])}}function Rf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Cf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $d=/[\n"\\]/g;function ye(t){return t.replace($d,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ti(t,e,l,a,n,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ve(e)):t.value!==""+ve(e)&&(t.value=""+ve(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?ei(t,i,ve(e)):l!=null?ei(t,i,ve(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ve(c):t.removeAttribute("name")}function Bf(t,e,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Pu(t);return}l=l!=null?""+ve(l):"",e=e!=null?""+ve(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Pu(t)}function ei(t,e,l){e==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Wl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ve(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Hf(t,e,l){if(e!=null&&(e=""+ve(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ve(l):""}function Gf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(d(92));if(ue(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ve(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Pu(t)}function $l(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Fd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Fd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function qf(t,e,l){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Yf(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&Yf(t,u,e[u])}function li(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(t){return Pd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var ai=null;function ni(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fl=null,Il=null;function Xf(t){var e=Kl(t);if(e&&(t=e.stateNode)){var l=t[$t]||null;t:switch(t=e.stateNode,e.type){case"input":if(ti(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ye(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[$t]||null;if(!n)throw Error(d(90));ti(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Rf(a)}break t;case"textarea":Hf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Wl(t,!!l.multiple,e,!1)}}}var ui=!1;function Lf(t,e,l){if(ui)return t(e,l);ui=!0;try{var a=t(e);return a}finally{if(ui=!1,(Fl!==null||Il!==null)&&(xu(),Fl&&(e=Fl,t=Il,Il=Fl=null,Xf(e),t)))for(e=0;e<t.length;e++)Xf(t[e])}}function Ra(t,e){var l=t.stateNode;if(l===null)return null;var a=l[$t]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(d(231,e,typeof l));return l}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(Ye)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{ii=!1}var ll=null,ci=null,Rn=null;function wf(){if(Rn)return Rn;var t,e=ci,l=e.length,a,n="value"in ll?ll.value:ll.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===n[u-a];a++);return Rn=n.slice(t,1<a?1-a:void 0)}function Bn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hn(){return!0}function Qf(){return!1}function Ft(t){function e(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hn:Qf,this.isPropagationStopped=Qf,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),e}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gn=Ft(Nl),Ha=G({},Nl,{view:0,detail:0}),t0=Ft(Ha),fi,ri,Ga,Yn=G({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ga&&(Ga&&t.type==="mousemove"?(fi=t.screenX-Ga.screenX,ri=t.screenY-Ga.screenY):ri=fi=0,Ga=t),fi)},movementY:function(t){return"movementY"in t?t.movementY:ri}}),Zf=Ft(Yn),e0=G({},Yn,{dataTransfer:0}),l0=Ft(e0),a0=G({},Ha,{relatedTarget:0}),si=Ft(a0),n0=G({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=Ft(n0),i0=G({},Nl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=Ft(i0),f0=G({},Nl,{data:0}),Vf=Ft(f0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o0[t])?!!e[t]:!1}function oi(){return d0}var m0=G({},Ha,{key:function(t){if(t.key){var e=r0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(t){return t.type==="keypress"?Bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=Ft(m0),h0=G({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Ft(h0),v0=G({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),y0=Ft(v0),g0=G({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=Ft(g0),x0=G({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=Ft(x0),z0=G({},Nl,{newState:0,oldState:0}),T0=Ft(z0),E0=[9,13,27,32],di=Ye&&"CompositionEvent"in window,Ya=null;Ye&&"documentMode"in document&&(Ya=document.documentMode);var A0=Ye&&"TextEvent"in window&&!Ya,Jf=Ye&&(!di||Ya&&8<Ya&&11>=Ya),kf=" ",Wf=!1;function $f(t,e){switch(t){case"keyup":return E0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function j0(t,e){switch(t){case"compositionend":return Ff(e);case"keypress":return e.which!==32?null:(Wf=!0,kf);case"textInput":return t=e.data,t===kf&&Wf?null:t;default:return null}}function M0(t,e){if(Pl)return t==="compositionend"||!di&&$f(t,e)?(t=wf(),Rn=ci=ll=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jf&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Pf(t,e,l,a){Fl?Il?Il.push(a):Il=[a]:Fl=a,e=Mu(e,"onChange"),0<e.length&&(l=new Gn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var qa=null,Xa=null;function _0(t){Ho(t,0)}function qn(t){var e=Ca(t);if(Rf(e))return t}function tr(t,e){if(t==="change")return e}var er=!1;if(Ye){var mi;if(Ye){var pi="oninput"in document;if(!pi){var lr=document.createElement("div");lr.setAttribute("oninput","return;"),pi=typeof lr.oninput=="function"}mi=pi}else mi=!1;er=mi&&(!document.documentMode||9<document.documentMode)}function ar(){qa&&(qa.detachEvent("onpropertychange",nr),Xa=qa=null)}function nr(t){if(t.propertyName==="value"&&qn(Xa)){var e=[];Pf(e,Xa,t,ni(t)),Lf(_0,e)}}function D0(t,e,l){t==="focusin"?(ar(),qa=e,Xa=l,qa.attachEvent("onpropertychange",nr)):t==="focusout"&&ar()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qn(Xa)}function U0(t,e){if(t==="click")return qn(e)}function C0(t,e){if(t==="input"||t==="change")return qn(e)}function R0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:R0;function La(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Vu.call(e,n)||!re(t[n],e[n]))return!1}return!0}function ur(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ir(t,e){var l=ur(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ur(l)}}function cr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Un(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Un(t.document)}return e}function hi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var B0=Ye&&"documentMode"in document&&11>=document.documentMode,ta=null,vi=null,wa=null,yi=!1;function rr(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;yi||ta==null||ta!==Un(a)||(a=ta,"selectionStart"in a&&hi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wa&&La(wa,a)||(wa=a,a=Mu(vi,"onSelect"),0<a.length&&(e=new Gn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ta)))}function _l(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ea={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},gi={},sr={};Ye&&(sr=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Dl(t){if(gi[t])return gi[t];if(!ea[t])return t;var e=ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in sr)return gi[t]=e[l];return t}var or=Dl("animationend"),dr=Dl("animationiteration"),mr=Dl("animationstart"),H0=Dl("transitionrun"),G0=Dl("transitionstart"),Y0=Dl("transitioncancel"),pr=Dl("transitionend"),hr=new Map,bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bi.push("scrollEnd");function Me(t,e){hr.set(t,e),Ml(e,[t])}var Xn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ge=[],la=0,xi=0;function Ln(){for(var t=la,e=xi=la=0;e<t;){var l=ge[e];ge[e++]=null;var a=ge[e];ge[e++]=null;var n=ge[e];ge[e++]=null;var u=ge[e];if(ge[e++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&vr(l,n,u)}}function wn(t,e,l,a){ge[la++]=t,ge[la++]=e,ge[la++]=l,ge[la++]=a,xi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Si(t,e,l,a){return wn(t,e,l,a),Qn(t)}function Ol(t,e){return wn(t,null,null,e),Qn(t)}function vr(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-fe(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function Qn(t){if(50<on)throw on=0,Dc=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var aa={};function q0(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function se(t,e,l,a){return new q0(t,e,l,a)}function zi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qe(t,e){var l=t.alternate;return l===null?(l=se(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zn(t,e,l,a,n,u){var i=0;if(a=t,typeof t=="function")zi(t)&&(i=1);else if(typeof t=="string")i=Zm(t,l,N.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ae:return t=se(31,l,e,n),t.elementType=ae,t.lanes=u,t;case mt:return Ul(l.children,n,u,e);case Vt:i=8,n|=24;break;case Et:return t=se(12,l,e,n|2),t.elementType=Et,t.lanes=u,t;case wt:return t=se(13,l,e,n),t.elementType=wt,t.lanes=u,t;case Bt:return t=se(19,l,e,n),t.elementType=Bt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _t:i=10;break t;case Wt:i=9;break t;case Kt:i=11;break t;case L:i=14;break t;case Ht:i=16,a=null;break t}i=29,l=Error(d(130,t===null?"null":typeof t,"")),a=null}return e=se(i,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function Ul(t,e,l,a){return t=se(7,t,a,e),t.lanes=l,t}function Ti(t,e,l){return t=se(6,t,null,e),t.lanes=l,t}function gr(t){var e=se(18,null,null,0);return e.stateNode=t,e}function Ei(t,e,l){return e=se(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var br=new WeakMap;function be(t,e){if(typeof t=="object"&&t!==null){var l=br.get(t);return l!==void 0?l:(e={value:t,source:e,stack:gf(e)},br.set(t,e),e)}return{value:t,source:e,stack:gf(e)}}var na=[],ua=0,Vn=null,Qa=0,xe=[],Se=0,al=null,Oe=1,Ue="";function Xe(t,e){na[ua++]=Qa,na[ua++]=Vn,Vn=t,Qa=e}function xr(t,e,l){xe[Se++]=Oe,xe[Se++]=Ue,xe[Se++]=al,al=t;var a=Oe;t=Ue;var n=32-fe(a)-1;a&=~(1<<n),l+=1;var u=32-fe(e)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Oe=1<<32-fe(e)+n|l<<n|a,Ue=u+t}else Oe=1<<u|l<<n|a,Ue=t}function Ai(t){t.return!==null&&(Xe(t,1),xr(t,1,0))}function ji(t){for(;t===Vn;)Vn=na[--ua],na[ua]=null,Qa=na[--ua],na[ua]=null;for(;t===al;)al=xe[--Se],xe[Se]=null,Ue=xe[--Se],xe[Se]=null,Oe=xe[--Se],xe[Se]=null}function Sr(t,e){xe[Se++]=Oe,xe[Se++]=Ue,xe[Se++]=al,Oe=e.id,Ue=e.overflow,al=t}var Yt=null,pt=null,lt=!1,nl=null,ze=!1,Mi=Error(d(519));function ul(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(be(e,t)),Mi}function zr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Gt]=t,e[$t]=a,l){case"dialog":F("cancel",e),F("close",e);break;case"iframe":case"object":case"embed":F("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)F(mn[l],e);break;case"source":F("error",e);break;case"img":case"image":case"link":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"input":F("invalid",e),Bf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":F("invalid",e);break;case"textarea":F("invalid",e),Gf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Xo(e.textContent,l)?(a.popover!=null&&(F("beforetoggle",e),F("toggle",e)),a.onScroll!=null&&F("scroll",e),a.onScrollEnd!=null&&F("scrollend",e),a.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||ul(t,!0)}function Tr(t){for(Yt=t.return;Yt;)switch(Yt.tag){case 5:case 31:case 13:ze=!1;return;case 27:case 3:ze=!0;return;default:Yt=Yt.return}}function ia(t){if(t!==Yt)return!1;if(!lt)return Tr(t),lt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Vc(t.type,t.memoizedProps)),l=!l),l&&pt&&ul(t),Tr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));pt=Wo(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));pt=Wo(t)}else e===27?(e=pt,bl(t.type)?(t=$c,$c=null,pt=t):pt=e):pt=Yt?Ee(t.stateNode.nextSibling):null;return!0}function Cl(){pt=Yt=null,lt=!1}function Ni(){var t=nl;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),nl=null),t}function Za(t){nl===null?nl=[t]:nl.push(t)}var _i=r(null),Rl=null,Le=null;function il(t,e,l){j(_i,e._currentValue),e._currentValue=l}function we(t){t._currentValue=_i.current,x(_i)}function Di(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Oi(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=n;for(var f=0;f<e.length;f++)if(c.context===e[f]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Di(u.return,l,t),a||(i=null);break t}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(d(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Di(i,l,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ca(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(d(387));if(i=i.memoizedProps,i!==null){var c=n.type;re(n.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(n===at.current){if(i=n.alternate,i===null)throw Error(d(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(gn):t=[gn])}n=n.return}t!==null&&Oi(e,t,l,a),e.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bl(t){Rl=t,Le=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Er(Rl,t)}function Jn(t,e){return Rl===null&&Bl(t),Er(t,e)}function Er(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Le===null){if(t===null)throw Error(d(308));Le=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Le=Le.next=e;return l}var X0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},L0=T.unstable_scheduleCallback,w0=T.unstable_NormalPriority,At={$$typeof:_t,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new X0,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&L0(w0,function(){t.controller.abort()})}var Ka=null,Ci=0,fa=0,ra=null;function Q0(t,e){if(Ka===null){var l=Ka=[];Ci=0,fa=Hc(),ra={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ci++,e.then(Ar,Ar),e}function Ar(){if(--Ci===0&&Ka!==null){ra!==null&&(ra.status="fulfilled");var t=Ka;Ka=null,fa=0,ra=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Z0(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var jr=p.S;p.S=function(t,e){ro=ie(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Q0(t,e),jr!==null&&jr(t,e)};var Hl=r(null);function Ri(){var t=Hl.current;return t!==null?t:dt.pooledCache}function kn(t,e){e===null?j(Hl,Hl.current):j(Hl,e.pool)}function Mr(){var t=Ri();return t===null?null:{parent:At._currentValue,pool:t}}var sa=Error(d(460)),Bi=Error(d(474)),Wn=Error(d(542)),$n={then:function(){}};function Nr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _r(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ge,Ge),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Or(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=dt,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Or(t),t}throw Yl=e,sa}}function Gl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Yl=l,sa):l}}var Yl=null;function Dr(){if(Yl===null)throw Error(d(459));var t=Yl;return Yl=null,t}function Or(t){if(t===sa||t===Wn)throw Error(d(483))}var oa=null,Ja=0;function Fn(t){var e=Ja;return Ja+=1,oa===null&&(oa=[]),_r(oa,t,e)}function ka(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function In(t,e){throw e.$$typeof===X?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ur(t){function e(m,s){if(t){var h=m.deletions;h===null?(m.deletions=[s],m.flags|=16):h.push(s)}}function l(m,s){if(!t)return null;for(;s!==null;)e(m,s),s=s.sibling;return null}function a(m){for(var s=new Map;m!==null;)m.key!==null?s.set(m.key,m):s.set(m.index,m),m=m.sibling;return s}function n(m,s){return m=qe(m,s),m.index=0,m.sibling=null,m}function u(m,s,h){return m.index=h,t?(h=m.alternate,h!==null?(h=h.index,h<s?(m.flags|=67108866,s):h):(m.flags|=67108866,s)):(m.flags|=1048576,s)}function i(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,s,h,S){return s===null||s.tag!==6?(s=Ti(h,m.mode,S),s.return=m,s):(s=n(s,h),s.return=m,s)}function f(m,s,h,S){var H=h.type;return H===mt?b(m,s,h.props.children,S,h.key):s!==null&&(s.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ht&&Gl(H)===s.type)?(s=n(s,h.props),ka(s,h),s.return=m,s):(s=Zn(h.type,h.key,h.props,null,m.mode,S),ka(s,h),s.return=m,s)}function v(m,s,h,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==h.containerInfo||s.stateNode.implementation!==h.implementation?(s=Ei(h,m.mode,S),s.return=m,s):(s=n(s,h.children||[]),s.return=m,s)}function b(m,s,h,S,H){return s===null||s.tag!==7?(s=Ul(h,m.mode,S,H),s.return=m,s):(s=n(s,h),s.return=m,s)}function z(m,s,h){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Ti(""+s,m.mode,h),s.return=m,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Q:return h=Zn(s.type,s.key,s.props,null,m.mode,h),ka(h,s),h.return=m,h;case W:return s=Ei(s,m.mode,h),s.return=m,s;case Ht:return s=Gl(s),z(m,s,h)}if(ue(s)||Qt(s))return s=Ul(s,m.mode,h,null),s.return=m,s;if(typeof s.then=="function")return z(m,Fn(s),h);if(s.$$typeof===_t)return z(m,Jn(m,s),h);In(m,s)}return null}function y(m,s,h,S){var H=s!==null?s.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:c(m,s,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Q:return h.key===H?f(m,s,h,S):null;case W:return h.key===H?v(m,s,h,S):null;case Ht:return h=Gl(h),y(m,s,h,S)}if(ue(h)||Qt(h))return H!==null?null:b(m,s,h,S,null);if(typeof h.then=="function")return y(m,s,Fn(h),S);if(h.$$typeof===_t)return y(m,s,Jn(m,h),S);In(m,h)}return null}function g(m,s,h,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return m=m.get(h)||null,c(s,m,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return m=m.get(S.key===null?h:S.key)||null,f(s,m,S,H);case W:return m=m.get(S.key===null?h:S.key)||null,v(s,m,S,H);case Ht:return S=Gl(S),g(m,s,h,S,H)}if(ue(S)||Qt(S))return m=m.get(h)||null,b(s,m,S,H,null);if(typeof S.then=="function")return g(m,s,h,Fn(S),H);if(S.$$typeof===_t)return g(m,s,h,Jn(s,S),H);In(s,S)}return null}function _(m,s,h,S){for(var H=null,nt=null,U=s,J=s=0,P=null;U!==null&&J<h.length;J++){U.index>J?(P=U,U=null):P=U.sibling;var ut=y(m,U,h[J],S);if(ut===null){U===null&&(U=P);break}t&&U&&ut.alternate===null&&e(m,U),s=u(ut,s,J),nt===null?H=ut:nt.sibling=ut,nt=ut,U=P}if(J===h.length)return l(m,U),lt&&Xe(m,J),H;if(U===null){for(;J<h.length;J++)U=z(m,h[J],S),U!==null&&(s=u(U,s,J),nt===null?H=U:nt.sibling=U,nt=U);return lt&&Xe(m,J),H}for(U=a(U);J<h.length;J++)P=g(U,m,J,h[J],S),P!==null&&(t&&P.alternate!==null&&U.delete(P.key===null?J:P.key),s=u(P,s,J),nt===null?H=P:nt.sibling=P,nt=P);return t&&U.forEach(function(El){return e(m,El)}),lt&&Xe(m,J),H}function Y(m,s,h,S){if(h==null)throw Error(d(151));for(var H=null,nt=null,U=s,J=s=0,P=null,ut=h.next();U!==null&&!ut.done;J++,ut=h.next()){U.index>J?(P=U,U=null):P=U.sibling;var El=y(m,U,ut.value,S);if(El===null){U===null&&(U=P);break}t&&U&&El.alternate===null&&e(m,U),s=u(El,s,J),nt===null?H=El:nt.sibling=El,nt=El,U=P}if(ut.done)return l(m,U),lt&&Xe(m,J),H;if(U===null){for(;!ut.done;J++,ut=h.next())ut=z(m,ut.value,S),ut!==null&&(s=u(ut,s,J),nt===null?H=ut:nt.sibling=ut,nt=ut);return lt&&Xe(m,J),H}for(U=a(U);!ut.done;J++,ut=h.next())ut=g(U,m,J,ut.value,S),ut!==null&&(t&&ut.alternate!==null&&U.delete(ut.key===null?J:ut.key),s=u(ut,s,J),nt===null?H=ut:nt.sibling=ut,nt=ut);return t&&U.forEach(function(e1){return e(m,e1)}),lt&&Xe(m,J),H}function ot(m,s,h,S){if(typeof h=="object"&&h!==null&&h.type===mt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Q:t:{for(var H=h.key;s!==null;){if(s.key===H){if(H=h.type,H===mt){if(s.tag===7){l(m,s.sibling),S=n(s,h.props.children),S.return=m,m=S;break t}}else if(s.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ht&&Gl(H)===s.type){l(m,s.sibling),S=n(s,h.props),ka(S,h),S.return=m,m=S;break t}l(m,s);break}else e(m,s);s=s.sibling}h.type===mt?(S=Ul(h.props.children,m.mode,S,h.key),S.return=m,m=S):(S=Zn(h.type,h.key,h.props,null,m.mode,S),ka(S,h),S.return=m,m=S)}return i(m);case W:t:{for(H=h.key;s!==null;){if(s.key===H)if(s.tag===4&&s.stateNode.containerInfo===h.containerInfo&&s.stateNode.implementation===h.implementation){l(m,s.sibling),S=n(s,h.children||[]),S.return=m,m=S;break t}else{l(m,s);break}else e(m,s);s=s.sibling}S=Ei(h,m.mode,S),S.return=m,m=S}return i(m);case Ht:return h=Gl(h),ot(m,s,h,S)}if(ue(h))return _(m,s,h,S);if(Qt(h)){if(H=Qt(h),typeof H!="function")throw Error(d(150));return h=H.call(h),Y(m,s,h,S)}if(typeof h.then=="function")return ot(m,s,Fn(h),S);if(h.$$typeof===_t)return ot(m,s,Jn(m,h),S);In(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,s!==null&&s.tag===6?(l(m,s.sibling),S=n(s,h),S.return=m,m=S):(l(m,s),S=Ti(h,m.mode,S),S.return=m,m=S),i(m)):l(m,s)}return function(m,s,h,S){try{Ja=0;var H=ot(m,s,h,S);return oa=null,H}catch(U){if(U===sa||U===Wn)throw U;var nt=se(29,U,null,m.mode);return nt.lanes=S,nt.return=m,nt}}}var ql=Ur(!0),Cr=Ur(!1),cl=!1;function Hi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gi(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(it&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Qn(t),vr(t,null,l),e}return wn(t,a,e,l),Qn(t)}function Wa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ef(t,l)}}function Yi(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var qi=!1;function $a(){if(qi){var t=ra;if(t!==null)throw t}}function Fa(t,e,l,a){qi=!1;var n=t.updateQueue;cl=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,v=f.next;f.next=null,i===null?u=v:i.next=v,i=f;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=v:c.next=v,b.lastBaseUpdate=f))}if(u!==null){var z=n.baseState;i=0,b=v=f=null,c=u;do{var y=c.lane&-536870913,g=y!==c.lane;if(g?(I&y)===y:(a&y)===y){y!==0&&y===fa&&(qi=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var _=t,Y=c;y=e;var ot=l;switch(Y.tag){case 1:if(_=Y.payload,typeof _=="function"){z=_.call(ot,z,y);break t}z=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=Y.payload,y=typeof _=="function"?_.call(ot,z,y):_,y==null)break t;z=G({},z,y);break t;case 2:cl=!0}}y=c.callback,y!==null&&(t.flags|=64,g&&(t.flags|=8192),g=n.callbacks,g===null?n.callbacks=[y]:g.push(y))}else g={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(v=b=g,f=z):b=b.next=g,i|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);b===null&&(f=z),n.baseState=f,n.firstBaseUpdate=v,n.lastBaseUpdate=b,u===null&&(n.shared.lanes=0),pl|=i,t.lanes=i,t.memoizedState=z}}function Rr(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function Br(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Rr(l[t],e)}var da=r(null),Pn=r(0);function Hr(t,e){t=Fe,j(Pn,t),j(da,e),Fe=t|e.baseLanes}function Xi(){j(Pn,Fe),j(da,da.current)}function Li(){Fe=Pn.current,x(da),x(Pn)}var oe=r(null),Te=null;function sl(t){var e=t.alternate;j(zt,zt.current&1),j(oe,t),Te===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(Te=t)}function wi(t){j(zt,zt.current),j(oe,t),Te===null&&(Te=t)}function Gr(t){t.tag===22?(j(zt,zt.current),j(oe,t),Te===null&&(Te=t)):ol()}function ol(){j(zt,zt.current),j(oe,oe.current)}function de(t){x(oe),Te===t&&(Te=null),x(zt)}var zt=r(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||kc(l)||Wc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qe=0,V=null,rt=null,jt=null,eu=!1,ma=!1,Xl=!1,lu=0,Ia=0,pa=null,V0=0;function bt(){throw Error(d(321))}function Qi(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!re(t[l],e[l]))return!1;return!0}function Zi(t,e,l,a,n,u){return Qe=u,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,p.H=t===null||t.memoizedState===null?xs:uc,Xl=!1,u=l(a,n),Xl=!1,ma&&(u=qr(e,l,a,n)),Yr(t),u}function Yr(t){p.H=en;var e=rt!==null&&rt.next!==null;if(Qe=0,jt=rt=V=null,eu=!1,Ia=0,pa=null,e)throw Error(d(300));t===null||Mt||(t=t.dependencies,t!==null&&Kn(t)&&(Mt=!0))}function qr(t,e,l,a){V=t;var n=0;do{if(ma&&(pa=null),Ia=0,ma=!1,25<=n)throw Error(d(301));if(n+=1,jt=rt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}p.H=Ss,u=e(l,a)}while(ma);return u}function K0(){var t=p.H,e=t.useState()[0];return e=typeof e.then=="function"?Pa(e):e,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(V.flags|=1024),e}function Vi(){var t=lu!==0;return lu=0,t}function Ki(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Ji(t){if(eu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}eu=!1}Qe=0,jt=rt=V=null,ma=!1,Ia=lu=0,pa=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?V.memoizedState=jt=t:jt=jt.next=t,jt}function Tt(){if(rt===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=jt===null?V.memoizedState:jt.next;if(e!==null)jt=e,rt=t;else{if(t===null)throw V.alternate===null?Error(d(467)):Error(d(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},jt===null?V.memoizedState=jt=t:jt=jt.next=t}return jt}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var e=Ia;return Ia+=1,pa===null&&(pa=[]),t=_r(pa,t,e),e=V,(jt===null?e.memoizedState:jt.next)===null&&(e=e.alternate,p.H=e===null||e.memoizedState===null?xs:uc),t}function nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===_t)return qt(t)}throw Error(d(438,String(t)))}function ki(t){var e=null,l=V.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=au(),V.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Be;return e.index++,l}function Ze(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Tt();return Wi(e,rt,t)}function Wi(t,e,l){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var c=i=null,f=null,v=e,b=!1;do{var z=v.lane&-536870913;if(z!==v.lane?(I&z)===z:(Qe&z)===z){var y=v.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),z===fa&&(b=!0);else if((Qe&y)===y){v=v.next,y===fa&&(b=!0);continue}else z={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},f===null?(c=f=z,i=u):f=f.next=z,V.lanes|=y,pl|=y;z=v.action,Xl&&l(u,z),u=v.hasEagerState?v.eagerState:l(u,z)}else y={lane:z,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},f===null?(c=f=y,i=u):f=f.next=y,V.lanes|=z,pl|=z;v=v.next}while(v!==null&&v!==e);if(f===null?i=u:f.next=c,!re(u,t.memoizedState)&&(Mt=!0,b&&(l=ra,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function $i(t){var e=Tt(),l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);re(u,e.memoizedState)||(Mt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Xr(t,e,l){var a=V,n=Tt(),u=lt;if(u){if(l===void 0)throw Error(d(407));l=l()}else l=e();var i=!re((rt||n).memoizedState,l);if(i&&(n.memoizedState=l,Mt=!0),n=n.queue,Pi(Qr.bind(null,a,n,t),[t]),n.getSnapshot!==e||i||jt!==null&&jt.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},wr.bind(null,a,n,l,e),null),dt===null)throw Error(d(349));u||(Qe&127)!==0||Lr(a,e,l)}return l}function Lr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=V.updateQueue,e===null?(e=au(),V.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function wr(t,e,l,a){e.value=l,e.getSnapshot=a,Zr(e)&&Vr(t)}function Qr(t,e,l){return l(function(){Zr(e)&&Vr(t)})}function Zr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!re(t,l)}catch{return!0}}function Vr(t){var e=Ol(t,2);e!==null&&le(e,t,2)}function Fi(t){var e=Jt();if(typeof t=="function"){var l=t;if(t=l(),Xl){tl(!0);try{l()}finally{tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},e}function Kr(t,e,l,a){return t.baseState=l,Wi(t,rt,typeof a=="function"?a:Ze)}function J0(t,e,l,a,n){if(fu(t))throw Error(d(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};p.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Jr(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Jr(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=p.T,i={};p.T=i;try{var c=l(n,a),f=p.S;f!==null&&f(i,c),kr(t,e,c)}catch(v){Ii(t,e,v)}finally{u!==null&&i.types!==null&&(u.types=i.types),p.T=u}}else try{u=l(n,a),kr(t,e,u)}catch(v){Ii(t,e,v)}}function kr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Wr(t,e,a)},function(a){return Ii(t,e,a)}):Wr(t,e,l)}function Wr(t,e,l){e.status="fulfilled",e.value=l,$r(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Jr(t,l)))}function Ii(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,$r(e),e=e.next;while(e!==a)}t.action=null}function $r(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Fr(t,e){return e}function Ir(t,e){if(lt){var l=dt.formState;if(l!==null){t:{var a=V;if(lt){if(pt){e:{for(var n=pt,u=ze;n.nodeType!==8;){if(!u){n=null;break e}if(n=Ee(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){pt=Ee(n.nextSibling),a=n.data==="F!";break t}}ul(a)}a=!1}a&&(e=l[0])}}return l=Jt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},l.queue=a,l=ys.bind(null,V,a),a.dispatch=l,a=Fi(!1),u=nc.bind(null,V,!1,a.queue),a=Jt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=J0.bind(null,V,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Pr(t){var e=Tt();return ts(e,rt,t)}function ts(t,e,l){if(e=Wi(t,e,Fr)[0],t=uu(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Pa(e)}catch(i){throw i===sa?Wn:i}else a=e;e=Tt();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(V.flags|=2048,ha(9,{destroy:void 0},k0.bind(null,n,l),null)),[a,u,t]}function k0(t,e){t.action=e}function es(t){var e=Tt(),l=rt;if(l!==null)return ts(e,l,t);Tt(),e=e.memoizedState,l=Tt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ha(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=V.updateQueue,e===null&&(e=au(),V.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ls(){return Tt().memoizedState}function iu(t,e,l,a){var n=Jt();V.flags|=t,n.memoizedState=ha(1|e,{destroy:void 0},l,a===void 0?null:a)}function cu(t,e,l,a){var n=Tt();a=a===void 0?null:a;var u=n.memoizedState.inst;rt!==null&&a!==null&&Qi(a,rt.memoizedState.deps)?n.memoizedState=ha(e,u,l,a):(V.flags|=t,n.memoizedState=ha(1|e,u,l,a))}function as(t,e){iu(8390656,8,t,e)}function Pi(t,e){cu(2048,8,t,e)}function W0(t){V.flags|=4;var e=V.updateQueue;if(e===null)e=au(),V.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function ns(t){var e=Tt().memoizedState;return W0({ref:e,nextImpl:t}),function(){if((it&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function us(t,e){return cu(4,2,t,e)}function is(t,e){return cu(4,4,t,e)}function cs(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fs(t,e,l){l=l!=null?l.concat([t]):null,cu(4,4,cs.bind(null,e,t),l)}function tc(){}function rs(t,e){var l=Tt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Qi(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ss(t,e){var l=Tt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Qi(e,a[1]))return a[0];if(a=t(),Xl){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a}function ec(t,e,l){return l===void 0||(Qe&1073741824)!==0&&(I&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=oo(),V.lanes|=t,pl|=t,l)}function os(t,e,l,a){return re(l,e)?l:da.current!==null?(t=ec(t,l,a),re(t,e)||(Mt=!0),t):(Qe&42)===0||(Qe&1073741824)!==0&&(I&261930)===0?(Mt=!0,t.memoizedState=l):(t=oo(),V.lanes|=t,pl|=t,e)}function ds(t,e,l,a,n){var u=A.p;A.p=u!==0&&8>u?u:8;var i=p.T,c={};p.T=c,nc(t,!1,e,l);try{var f=n(),v=p.S;if(v!==null&&v(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=Z0(f,a);tn(t,e,b,he(t))}else tn(t,e,a,he(t))}catch(z){tn(t,e,{then:function(){},status:"rejected",reason:z},he())}finally{A.p=u,i!==null&&c.types!==null&&(i.types=c.types),p.T=i}}function $0(){}function lc(t,e,l,a){if(t.tag!==5)throw Error(d(476));var n=ms(t).queue;ds(t,n,e,R,l===null?$0:function(){return ps(t),l(a)})}function ms(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:R},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ps(t){var e=ms(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},he())}function ac(){return qt(gn)}function hs(){return Tt().memoizedState}function vs(){return Tt().memoizedState}function F0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=he();t=fl(l);var a=rl(e,t,l);a!==null&&(le(a,e,l),Wa(a,e,l)),e={cache:Ui()},t.payload=e;return}e=e.return}}function I0(t,e,l){var a=he();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(t)?gs(e,l):(l=Si(t,e,l,a),l!==null&&(le(l,t,a),bs(l,e,a)))}function ys(t,e,l){var a=he();tn(t,e,l,a)}function tn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(t))gs(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,re(c,i))return wn(t,e,n,0),dt===null&&Ln(),!1}catch{}if(l=Si(t,e,n,a),l!==null)return le(l,t,a),bs(l,e,a),!0}return!1}function nc(t,e,l,a){if(a={lane:2,revertLane:Hc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(e)throw Error(d(479))}else e=Si(t,l,a,2),e!==null&&le(e,t,2)}function fu(t){var e=t.alternate;return t===V||e!==null&&e===V}function gs(t,e){ma=eu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function bs(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ef(t,l)}}var en={readContext:qt,use:nu,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};en.useEffectEvent=bt;var xs={readContext:qt,use:nu,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:as,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,iu(4194308,4,cs.bind(null,e,t),l)},useLayoutEffect:function(t,e){return iu(4194308,4,t,e)},useInsertionEffect:function(t,e){iu(4,2,t,e)},useMemo:function(t,e){var l=Jt();e=e===void 0?null:e;var a=t();if(Xl){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Jt();if(l!==void 0){var n=l(e);if(Xl){tl(!0);try{l(e)}finally{tl(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=I0.bind(null,V,t),[a.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:function(t){t=Fi(t);var e=t.queue,l=ys.bind(null,V,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:tc,useDeferredValue:function(t,e){var l=Jt();return ec(l,t,e)},useTransition:function(){var t=Fi(!1);return t=ds.bind(null,V,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=V,n=Jt();if(lt){if(l===void 0)throw Error(d(407));l=l()}else{if(l=e(),dt===null)throw Error(d(349));(I&127)!==0||Lr(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,as(Qr.bind(null,a,u,t),[t]),a.flags|=2048,ha(9,{destroy:void 0},wr.bind(null,a,u,l,e),null),l},useId:function(){var t=Jt(),e=dt.identifierPrefix;if(lt){var l=Ue,a=Oe;l=(a&~(1<<32-fe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=lu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=V0++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ac,useFormState:Ir,useActionState:Ir,useOptimistic:function(t){var e=Jt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=nc.bind(null,V,!0,l),l.dispatch=e,[t,e]},useMemoCache:ki,useCacheRefresh:function(){return Jt().memoizedState=F0.bind(null,V)},useEffectEvent:function(t){var e=Jt(),l={impl:t};return e.memoizedState=l,function(){if((it&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},uc={readContext:qt,use:nu,useCallback:rs,useContext:qt,useEffect:Pi,useImperativeHandle:fs,useInsertionEffect:us,useLayoutEffect:is,useMemo:ss,useReducer:uu,useRef:ls,useState:function(){return uu(Ze)},useDebugValue:tc,useDeferredValue:function(t,e){var l=Tt();return os(l,rt.memoizedState,t,e)},useTransition:function(){var t=uu(Ze)[0],e=Tt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Xr,useId:hs,useHostTransitionStatus:ac,useFormState:Pr,useActionState:Pr,useOptimistic:function(t,e){var l=Tt();return Kr(l,rt,t,e)},useMemoCache:ki,useCacheRefresh:vs};uc.useEffectEvent=ns;var Ss={readContext:qt,use:nu,useCallback:rs,useContext:qt,useEffect:Pi,useImperativeHandle:fs,useInsertionEffect:us,useLayoutEffect:is,useMemo:ss,useReducer:$i,useRef:ls,useState:function(){return $i(Ze)},useDebugValue:tc,useDeferredValue:function(t,e){var l=Tt();return rt===null?ec(l,t,e):os(l,rt.memoizedState,t,e)},useTransition:function(){var t=$i(Ze)[0],e=Tt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Xr,useId:hs,useHostTransitionStatus:ac,useFormState:es,useActionState:es,useOptimistic:function(t,e){var l=Tt();return rt!==null?Kr(l,rt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:ki,useCacheRefresh:vs};Ss.useEffectEvent=ns;function ic(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:G({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var cc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=he(),n=fl(a);n.payload=e,l!=null&&(n.callback=l),e=rl(t,n,a),e!==null&&(le(e,t,a),Wa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=he(),n=fl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=rl(t,n,a),e!==null&&(le(e,t,a),Wa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=he(),a=fl(l);a.tag=2,e!=null&&(a.callback=e),e=rl(t,a,l),e!==null&&(le(e,t,l),Wa(e,t,l))}};function zs(t,e,l,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):e.prototype&&e.prototype.isPureReactComponent?!La(l,a)||!La(n,u):!0}function Ts(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function Ll(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=G({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Es(t){Xn(t)}function As(t){console.error(t)}function js(t){Xn(t)}function ru(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Ms(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fc(t,e,l){return l=fl(l),l.tag=3,l.payload={element:null},l.callback=function(){ru(t,e)},l}function Ns(t){return t=fl(t),t.tag=3,t}function _s(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){Ms(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ms(e,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function P0(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ca(e,l,n,!0),l=oe.current,l!==null){switch(l.tag){case 31:case 13:return Te===null?Su():l.alternate===null&&xt===0&&(xt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===$n?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Cc(t,a,n)),!1;case 22:return l.flags|=65536,a===$n?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Cc(t,a,n)),!1}throw Error(d(435,l.tag))}return Cc(t,a,n),Su(),!1}if(lt)return e=oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Mi&&(t=Error(d(422),{cause:a}),Za(be(t,l)))):(a!==Mi&&(e=Error(d(423),{cause:a}),Za(be(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=be(a,l),n=fc(t.stateNode,a,n),Yi(t,n),xt!==4&&(xt=2)),!1;var u=Error(d(520),{cause:a});if(u=be(u,l),sn===null?sn=[u]:sn.push(u),xt!==4&&(xt=2),e===null)return!0;a=be(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=fc(l.stateNode,a,t),Yi(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(hl===null||!hl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ns(n),_s(n,t,l,a),Yi(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(d(461)),Mt=!1;function Xt(t,e,l,a){e.child=t===null?Cr(e,null,l,a):ql(e,t.child,l,a)}function Ds(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Bl(e),a=Zi(t,e,l,i,u,n),c=Vi(),t!==null&&!Mt?(Ki(t,e,n),Ve(t,e,n)):(lt&&c&&Ai(e),e.flags|=1,Xt(t,e,a,n),e.child)}function Os(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!zi(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Us(t,e,u,a,n)):(t=Zn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!yc(t,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(i,a)&&t.ref===e.ref)return Ve(t,e,n)}return e.flags|=1,t=qe(u,a),t.ref=e.ref,t.return=e,e.child=t}function Us(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(La(u,a)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=a=u,yc(t,n))(t.flags&131072)!==0&&(Mt=!0);else return e.lanes=t.lanes,Ve(t,e,n)}return sc(t,e,l,a,n)}function Cs(t,e,l,a){var n=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,e.child=null;return Rs(t,e,u,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kn(e,u!==null?u.cachePool:null),u!==null?Hr(e,u):Xi(),Gr(e);else return a=e.lanes=536870912,Rs(t,e,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(kn(e,u.cachePool),Hr(e,u),ol(),e.memoizedState=null):(t!==null&&kn(e,null),Xi(),ol());return Xt(t,e,n,l),e.child}function ln(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Rs(t,e,l,a,n){var u=Ri();return u=u===null?null:{parent:At._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&kn(e,null),Xi(),Gr(e),t!==null&&ca(t,e,a,!0),e.childLanes=n,null}function su(t,e){return e=du({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Bs(t,e,l){return ql(e,t.child,null,l),t=su(e,e.pendingProps),t.flags|=2,de(e),e.memoizedState=null,t}function tm(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(lt){if(a.mode==="hidden")return t=su(e,a),e.lanes=536870912,ln(null,t);if(wi(e),(t=pt)?(t=ko(t,ze),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:al!==null?{id:Oe,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},l=gr(t),l.return=e,e.child=l,Yt=e,pt=null)):t=null,t===null)throw ul(e);return e.lanes=536870912,null}return su(e,a)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(wi(e),n)if(e.flags&256)e.flags&=-257,e=Bs(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Mt||ca(t,e,l,!1),n=(l&t.childLanes)!==0,Mt||n){if(a=dt,a!==null&&(i=Af(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ol(t,i),le(a,t,i),rc;Su(),e=Bs(t,e,l)}else t=u.treeContext,pt=Ee(i.nextSibling),Yt=e,lt=!0,nl=null,ze=!1,t!==null&&Sr(e,t),e=su(e,a),e.flags|=4096;return e}return t=qe(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ou(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function sc(t,e,l,a,n){return Bl(e),l=Zi(t,e,l,a,void 0,n),a=Vi(),t!==null&&!Mt?(Ki(t,e,n),Ve(t,e,n)):(lt&&a&&Ai(e),e.flags|=1,Xt(t,e,l,n),e.child)}function Hs(t,e,l,a,n,u){return Bl(e),e.updateQueue=null,l=qr(e,a,l,n),Yr(t),a=Vi(),t!==null&&!Mt?(Ki(t,e,u),Ve(t,e,u)):(lt&&a&&Ai(e),e.flags|=1,Xt(t,e,l,u),e.child)}function Gs(t,e,l,a,n){if(Bl(e),e.stateNode===null){var u=aa,i=l.contextType;typeof i=="object"&&i!==null&&(u=qt(i)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=cc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Hi(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?qt(i):aa,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ic(e,l,i,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&cc.enqueueReplaceState(u,u.state,null),Fa(e,a,u,n),$a(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,f=Ll(l,c);u.props=f;var v=u.context,b=l.contextType;i=aa,typeof b=="object"&&b!==null&&(i=qt(b));var z=l.getDerivedStateFromProps;b=typeof z=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||v!==i)&&Ts(e,u,a,i),cl=!1;var y=e.memoizedState;u.state=y,Fa(e,a,u,n),$a(),v=e.memoizedState,c||y!==v||cl?(typeof z=="function"&&(ic(e,l,z,a),v=e.memoizedState),(f=cl||zs(e,l,f,a,y,v,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=v),u.props=a,u.state=v,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Gi(t,e),i=e.memoizedProps,b=Ll(l,i),u.props=b,z=e.pendingProps,y=u.context,v=l.contextType,f=aa,typeof v=="object"&&v!==null&&(f=qt(v)),c=l.getDerivedStateFromProps,(v=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==z||y!==f)&&Ts(e,u,a,f),cl=!1,y=e.memoizedState,u.state=y,Fa(e,a,u,n),$a();var g=e.memoizedState;i!==z||y!==g||cl||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof c=="function"&&(ic(e,l,c,a),g=e.memoizedState),(b=cl||zs(e,l,b,a,y,g,f)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,g,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,g,f)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=g),u.props=a,u.state=g,u.context=f,a=b):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,ou(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=ql(e,t.child,null,n),e.child=ql(e,null,l,n)):Xt(t,e,l,n),e.memoizedState=u.state,t=e.child):t=Ve(t,e,n),t}function Ys(t,e,l,a){return Cl(),e.flags|=256,Xt(t,e,l,a),e.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(t){return{baseLanes:t,cachePool:Mr()}}function mc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=pe),t}function qs(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),i&&(n=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(n?sl(e):ol(),(t=pt)?(t=ko(t,ze),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:al!==null?{id:Oe,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},l=gr(t),l.return=e,e.child=l,Yt=e,pt=null)):t=null,t===null)throw ul(e);return Wc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ol(),n=e.mode,c=du({mode:"hidden",children:c},n),a=Ul(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=dc(l),a.childLanes=mc(t,i,l),e.memoizedState=oc,ln(null,a)):(sl(e),pc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)e.flags&256?(sl(e),e.flags&=-257,e=hc(t,e,l)):e.memoizedState!==null?(ol(),e.child=t.child,e.flags|=128,e=null):(ol(),c=a.fallback,n=e.mode,a=du({mode:"visible",children:a.children},n),c=Ul(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,ql(e,t.child,null,l),a=e.child,a.memoizedState=dc(l),a.childLanes=mc(t,i,l),e.memoizedState=oc,e=ln(null,a));else if(sl(e),Wc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var v=i.dgst;i=v,a=Error(d(419)),a.stack="",a.digest=i,Za({value:a,source:null,stack:null}),e=hc(t,e,l)}else if(Mt||ca(t,e,l,!1),i=(l&t.childLanes)!==0,Mt||i){if(i=dt,i!==null&&(a=Af(i,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Ol(t,a),le(i,t,a),rc;kc(c)||Su(),e=hc(t,e,l)}else kc(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,pt=Ee(c.nextSibling),Yt=e,lt=!0,nl=null,ze=!1,t!==null&&Sr(e,t),e=pc(e,a.children),e.flags|=4096);return e}return n?(ol(),c=a.fallback,n=e.mode,f=t.child,v=f.sibling,a=qe(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,v!==null?c=qe(v,c):(c=Ul(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,ln(null,a),a=e.child,c=t.child.memoizedState,c===null?c=dc(l):(n=c.cachePool,n!==null?(f=At._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Mr(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=mc(t,i,l),e.memoizedState=oc,ln(t.child,a)):(sl(e),l=t.child,t=l.sibling,l=qe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function pc(t,e){return e=du({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function du(t,e){return t=se(22,t,null,e),t.lanes=0,t}function hc(t,e,l){return ql(e,t.child,null,l),t=pc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xs(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Di(t.return,e,l)}function vc(t,e,l,a,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function Ls(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=zt.current,c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,j(zt,i),Xt(t,e,a,l),a=lt?Qa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xs(t,l,e);else if(t.tag===19)Xs(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&tu(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),vc(e,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&tu(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}vc(e,!0,l,null,u,a);break;case"together":vc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ve(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),pl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,l=qe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=qe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function yc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function em(t,e,l){switch(e.tag){case 3:Ot(e,e.stateNode.containerInfo),il(e,At,t.memoizedState.cache),Cl();break;case 27:case 5:Na(e);break;case 4:Ot(e,e.stateNode.containerInfo);break;case 10:il(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,wi(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(sl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?qs(t,e,l):(sl(e),t=Ve(t,e,l),t!==null?t.sibling:null);sl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Ls(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),j(zt,zt.current),a)break;return null;case 22:return e.lanes=0,Cs(t,e,l,e.pendingProps);case 24:il(e,At,t.memoizedState.cache)}return Ve(t,e,l)}function ws(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Mt=!0;else{if(!yc(t,l)&&(e.flags&128)===0)return Mt=!1,em(t,e,l);Mt=(t.flags&131072)!==0}else Mt=!1,lt&&(e.flags&1048576)!==0&&xr(e,Qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Gl(e.elementType),e.type=t,typeof t=="function")zi(t)?(a=Ll(t,a),e.tag=1,e=Gs(null,e,t,a,l)):(e.tag=0,e=sc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===Kt){e.tag=11,e=Ds(null,e,t,a,l);break t}else if(n===L){e.tag=14,e=Os(null,e,t,a,l);break t}}throw e=je(t)||t,Error(d(306,e,""))}}return e;case 0:return sc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Ll(a,e.pendingProps),Gs(t,e,a,n,l);case 3:t:{if(Ot(e,e.stateNode.containerInfo),t===null)throw Error(d(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,Gi(t,e),Fa(e,a,null,l);var i=e.memoizedState;if(a=i.cache,il(e,At,a),a!==u.cache&&Oi(e,[At],l,!0),$a(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ys(t,e,a,l);break t}else if(a!==n){n=be(Error(d(424)),e),Za(n),e=Ys(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,pt=Ee(t.firstChild),Yt=e,lt=!0,nl=null,ze=!0,l=Cr(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Cl(),a===n){e=Ve(t,e,l);break t}Xt(t,e,a,l)}e=e.child}return e;case 26:return ou(t,e),t===null?(l=td(e.type,null,e.pendingProps,null))?e.memoizedState=l:lt||(l=e.type,t=e.pendingProps,a=Nu(K.current).createElement(l),a[Gt]=e,a[$t]=t,Lt(a,l,t),Ut(a),e.stateNode=a):e.memoizedState=td(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Na(e),t===null&&lt&&(a=e.stateNode=Fo(e.type,e.pendingProps,K.current),Yt=e,ze=!0,n=pt,bl(e.type)?($c=n,pt=Ee(a.firstChild)):pt=n),Xt(t,e,e.pendingProps.children,l),ou(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((n=a=pt)&&(a=Om(a,e.type,e.pendingProps,ze),a!==null?(e.stateNode=a,Yt=e,pt=Ee(a.firstChild),ze=!1,n=!0):n=!1),n||ul(e)),Na(e),n=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,Vc(n,u)?a=null:i!==null&&Vc(n,i)&&(e.flags|=32),e.memoizedState!==null&&(n=Zi(t,e,K0,null,null,l),gn._currentValue=n),ou(t,e),Xt(t,e,a,l),e.child;case 6:return t===null&&lt&&((t=l=pt)&&(l=Um(l,e.pendingProps,ze),l!==null?(e.stateNode=l,Yt=e,pt=null,t=!0):t=!1),t||ul(e)),null;case 13:return qs(t,e,l);case 4:return Ot(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ql(e,null,a,l):Xt(t,e,a,l),e.child;case 11:return Ds(t,e,e.type,e.pendingProps,l);case 7:return Xt(t,e,e.pendingProps,l),e.child;case 8:return Xt(t,e,e.pendingProps.children,l),e.child;case 12:return Xt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,il(e,e.type,a.value),Xt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Bl(e),n=qt(n),a=a(n),e.flags|=1,Xt(t,e,a,l),e.child;case 14:return Os(t,e,e.type,e.pendingProps,l);case 15:return Us(t,e,e.type,e.pendingProps,l);case 19:return Ls(t,e,l);case 31:return tm(t,e,l);case 22:return Cs(t,e,l,e.pendingProps);case 24:return Bl(e),a=qt(At),t===null?(n=Ri(),n===null&&(n=dt,u=Ui(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},Hi(e),il(e,At,n)):((t.lanes&l)!==0&&(Gi(t,e),Fa(e,null,null,l),$a()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),il(e,At,a)):(a=u.cache,il(e,At,a),a!==n.cache&&Oi(e,[At],l,!0))),Xt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Ke(t){t.flags|=4}function gc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(vo())t.flags|=8192;else throw Yl=$n,Bi}else t.flags&=-16777217}function Qs(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ud(e))if(vo())t.flags|=8192;else throw Yl=$n,Bi}function mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zf():536870912,t.lanes|=e,ba|=e)}function an(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function lm(t,e,l){var a=e.pendingProps;switch(ji(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return ht(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),we(At),St(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ia(e)?Ke(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ni())),ht(e),null;case 26:var n=e.type,u=e.memoizedState;return t===null?(Ke(e),u!==null?(ht(e),Qs(e,u)):(ht(e),gc(e,n,null,a,l))):u?u!==t.memoizedState?(Ke(e),ht(e),Qs(e,u)):(ht(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ke(e),ht(e),gc(e,n,t,a,l)),null;case 27:if(En(e),l=K.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ke(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ht(e),null}t=N.current,ia(e)?zr(e):(t=Fo(n,a,l),e.stateNode=t,Ke(e))}return ht(e),null;case 5:if(En(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ke(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ht(e),null}if(u=N.current,ia(e))zr(e);else{var i=Nu(K.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Gt]=e,u[$t]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(Lt(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ke(e)}}return ht(e),gc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ke(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(t=K.current,ia(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Yt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Gt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Xo(t.nodeValue,l)),t||ul(e,!0)}else t=Nu(t).createTextNode(a),t[Gt]=e,e.stateNode=t}return ht(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ia(e),l!==null){if(t===null){if(!a)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Gt]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),t=!1}else l=Ni(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(de(e),e):(de(e),null);if((e.flags&128)!==0)throw Error(d(558))}return ht(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ia(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Gt]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ht(e),n=!1}else n=Ni(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(de(e),e):(de(e),null)}return de(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),mu(e,e.updateQueue),ht(e),null);case 4:return St(),t===null&&Xc(e.stateNode.containerInfo),ht(e),null;case 10:return we(e.type),ht(e),null;case 19:if(x(zt),a=e.memoizedState,a===null)return ht(e),null;if(n=(e.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=tu(t),u!==null){for(e.flags|=128,an(a,!1),t=u.updateQueue,e.updateQueue=t,mu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)yr(l,t),l=l.sibling;return j(zt,zt.current&1|2),lt&&Xe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ie()>gu&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304)}else{if(!n)if(t=tu(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,mu(e,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!lt)return ht(e),null}else 2*ie()-a.renderingStartTime>gu&&l!==536870912&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ie(),t.sibling=null,l=zt.current,j(zt,n?l&1|2:l&1),lt&&Xe(e,a.treeForkCount),t):(ht(e),null);case 22:case 23:return de(e),Li(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),l=e.updateQueue,l!==null&&mu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&x(Hl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),we(At),ht(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function am(t,e){switch(ji(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return we(At),St(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return En(e),null;case 31:if(e.memoizedState!==null){if(de(e),e.alternate===null)throw Error(d(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(de(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return x(zt),null;case 4:return St(),null;case 10:return we(e.type),null;case 22:case 23:return de(e),Li(),t!==null&&x(Hl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return we(At),null;case 25:return null;default:return null}}function Zs(t,e){switch(ji(e),e.tag){case 3:we(At),St();break;case 26:case 27:case 5:En(e);break;case 4:St();break;case 31:e.memoizedState!==null&&de(e);break;case 13:de(e);break;case 19:x(zt);break;case 10:we(e.type);break;case 22:case 23:de(e),Li(),t!==null&&x(Hl);break;case 24:we(At)}}function nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){ft(e,e.return,c)}}function dl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=e;var f=l,v=c;try{v()}catch(b){ft(n,f,b)}}}a=a.next}while(a!==u)}}catch(b){ft(e,e.return,b)}}function Vs(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Br(e,l)}catch(a){ft(t,t.return,a)}}}function Ks(t,e,l){l.props=Ll(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ft(t,e,a)}}function un(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ft(t,e,n)}}function Ce(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ft(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ft(t,e,n)}else l.current=null}function Js(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ft(t,t.return,n)}}function bc(t,e,l){try{var a=t.stateNode;Am(a,t.type,l,e),a[$t]=e}catch(n){ft(t,t.return,n)}}function ks(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bl(t.type)||t.tag===4}function xc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ks(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ge));else if(a!==4&&(a===27&&bl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Sc(t,e,l),t=t.sibling;t!==null;)Sc(t,e,l),t=t.sibling}function pu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&bl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(pu(t,e,l),t=t.sibling;t!==null;)pu(t,e,l),t=t.sibling}function Ws(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lt(e,a,l),e[Gt]=t,e[$t]=l}catch(u){ft(t,t.return,u)}}var Je=!1,Nt=!1,zc=!1,$s=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function nm(t,e){if(t=t.containerInfo,Qc=Bu,t=fr(t),hi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,c=-1,f=-1,v=0,b=0,z=t,y=null;e:for(;;){for(var g;z!==l||n!==0&&z.nodeType!==3||(c=i+n),z!==u||a!==0&&z.nodeType!==3||(f=i+a),z.nodeType===3&&(i+=z.nodeValue.length),(g=z.firstChild)!==null;)y=z,z=g;for(;;){if(z===t)break e;if(y===l&&++v===n&&(c=i),y===u&&++b===a&&(f=i),(g=z.nextSibling)!==null)break;z=y,y=z.parentNode}z=g}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:t,selectionRange:l},Bu=!1,Ct=e;Ct!==null;)if(e=Ct,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ct=t;else for(;Ct!==null;){switch(e=Ct,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var _=Ll(l.type,n);t=a.getSnapshotBeforeUpdate(_,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(Y){ft(l,l.return,Y)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Jc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,Ct=t;break}Ct=e.return}}function Fs(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:We(t,l),a&4&&nn(5,l);break;case 1:if(We(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){ft(l,l.return,i)}else{var n=Ll(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){ft(l,l.return,i)}}a&64&&Vs(l),a&512&&un(l,l.return);break;case 3:if(We(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Br(t,e)}catch(i){ft(l,l.return,i)}}break;case 27:e===null&&a&4&&Ws(l);case 26:case 5:We(t,l),e===null&&a&4&&Js(l),a&512&&un(l,l.return);break;case 12:We(t,l);break;case 31:We(t,l),a&4&&to(t,l);break;case 13:We(t,l),a&4&&eo(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=mm.bind(null,l),Cm(t,l))));break;case 22:if(a=l.memoizedState!==null||Je,!a){e=e!==null&&e.memoizedState!==null||Nt,n=Je;var u=Nt;Je=a,(Nt=e)&&!u?$e(t,l,(l.subtreeFlags&8772)!==0):We(t,l),Je=n,Nt=u}break;case 30:break;default:We(t,l)}}function Is(t){var e=t.alternate;e!==null&&(t.alternate=null,Is(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Iu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,It=!1;function ke(t,e,l){for(l=l.child;l!==null;)Ps(t,e,l),l=l.sibling}function Ps(t,e,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(_a,l)}catch{}switch(l.tag){case 26:Nt||Ce(l,e),ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Nt||Ce(l,e);var a=yt,n=It;bl(l.type)&&(yt=l.stateNode,It=!1),ke(t,e,l),hn(l.stateNode),yt=a,It=n;break;case 5:Nt||Ce(l,e);case 6:if(a=yt,n=It,yt=null,ke(t,e,l),yt=a,It=n,yt!==null)if(It)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(l.stateNode)}catch(u){ft(l,e,u)}else try{yt.removeChild(l.stateNode)}catch(u){ft(l,e,u)}break;case 18:yt!==null&&(It?(t=yt,Ko(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ma(t)):Ko(yt,l.stateNode));break;case 4:a=yt,n=It,yt=l.stateNode.containerInfo,It=!0,ke(t,e,l),yt=a,It=n;break;case 0:case 11:case 14:case 15:dl(2,l,e),Nt||dl(4,l,e),ke(t,e,l);break;case 1:Nt||(Ce(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ks(l,e,a)),ke(t,e,l);break;case 21:ke(t,e,l);break;case 22:Nt=(a=Nt)||l.memoizedState!==null,ke(t,e,l),Nt=a;break;default:ke(t,e,l)}}function to(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ma(t)}catch(l){ft(e,e.return,l)}}}function eo(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ma(t)}catch(l){ft(e,e.return,l)}}function um(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new $s),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new $s),e;default:throw Error(d(435,t.tag))}}function hu(t,e){var l=um(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=pm.bind(null,t,a);a.then(n,n)}})}function Pt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(bl(c.type)){yt=c.stateNode,It=!1;break t}break;case 5:yt=c.stateNode,It=!1;break t;case 3:case 4:yt=c.stateNode.containerInfo,It=!0;break t}c=c.return}if(yt===null)throw Error(d(160));Ps(u,i,n),yt=null,It=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)lo(e,t),e=e.sibling}var Ne=null;function lo(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(e,t),te(t),a&4&&(dl(3,t,t.return),nn(3,t),dl(5,t,t.return));break;case 1:Pt(e,t),te(t),a&512&&(Nt||l===null||Ce(l,l.return)),a&64&&Je&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ne;if(Pt(e,t),te(t),a&512&&(Nt||l===null||Ce(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ua]||u[Gt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Lt(u,a,l),u[Gt]=t,Ut(u),a=u;break t;case"link":var i=ad("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break e}}u=n.createElement(a),Lt(u,a,l),n.head.appendChild(u);break;case"meta":if(i=ad("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break e}}u=n.createElement(a),Lt(u,a,l),n.head.appendChild(u);break;default:throw Error(d(468,a))}u[Gt]=t,Ut(u),a=u}t.stateNode=a}else nd(n,t.type,t.stateNode);else t.stateNode=ld(n,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?nd(n,t.type,t.stateNode):ld(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&bc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Pt(e,t),te(t),a&512&&(Nt||l===null||Ce(l,l.return)),l!==null&&a&4&&bc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Pt(e,t),te(t),a&512&&(Nt||l===null||Ce(l,l.return)),t.flags&32){n=t.stateNode;try{$l(n,"")}catch(_){ft(t,t.return,_)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,bc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(zc=!0);break;case 6:if(Pt(e,t),te(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(_){ft(t,t.return,_)}}break;case 3:if(Ou=null,n=Ne,Ne=_u(e.containerInfo),Pt(e,t),Ne=n,te(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(_){ft(t,t.return,_)}zc&&(zc=!1,ao(t));break;case 4:a=Ne,Ne=_u(t.stateNode.containerInfo),Pt(e,t),te(t),Ne=a;break;case 12:Pt(e,t),te(t);break;case 31:Pt(e,t),te(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,hu(t,a)));break;case 13:Pt(e,t),te(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yu=ie()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,hu(t,a)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,v=Je,b=Nt;if(Je=v||n,Nt=b||f,Pt(e,t),Nt=b,Je=v,te(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||f||Je||Nt||wl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var z=f.memoizedProps.style,y=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(_){ft(f,f.return,_)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(_){ft(f,f.return,_)}}}else if(e.tag===18){if(l===null){f=e;try{var g=f.stateNode;n?Jo(g,!0):Jo(f.stateNode,!1)}catch(_){ft(f,f.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,hu(t,l))));break;case 19:Pt(e,t),te(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,hu(t,a)));break;case 30:break;case 21:break;default:Pt(e,t),te(t)}}function te(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(ks(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,u=xc(t);pu(t,u,n);break;case 5:var i=l.stateNode;l.flags&32&&($l(i,""),l.flags&=-33);var c=xc(t);pu(t,c,i);break;case 3:case 4:var f=l.stateNode.containerInfo,v=xc(t);Sc(t,v,f);break;default:throw Error(d(161))}}catch(b){ft(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ao(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ao(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function We(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Fs(t,e.alternate,e),e=e.sibling}function wl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:dl(4,e,e.return),wl(e);break;case 1:Ce(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Ks(e,e.return,l),wl(e);break;case 27:hn(e.stateNode);case 26:case 5:Ce(e,e.return),wl(e);break;case 22:e.memoizedState===null&&wl(e);break;case 30:wl(e);break;default:wl(e)}t=t.sibling}}function $e(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:$e(n,u,l),nn(4,u);break;case 1:if($e(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(v){ft(a,a.return,v)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Rr(f[n],c)}catch(v){ft(a,a.return,v)}}l&&i&64&&Vs(u),un(u,u.return);break;case 27:Ws(u);case 26:case 5:$e(n,u,l),l&&a===null&&i&4&&Js(u),un(u,u.return);break;case 12:$e(n,u,l);break;case 31:$e(n,u,l),l&&i&4&&to(n,u);break;case 13:$e(n,u,l),l&&i&4&&eo(n,u);break;case 22:u.memoizedState===null&&$e(n,u,l),un(u,u.return);break;case 30:break;default:$e(n,u,l)}e=e.sibling}}function Tc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Va(l))}function Ec(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t))}function _e(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)no(t,e,l,a),e=e.sibling}function no(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:_e(t,e,l,a),n&2048&&nn(9,e);break;case 1:_e(t,e,l,a);break;case 3:_e(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t)));break;case 12:if(n&2048){_e(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ft(e,e.return,f)}}else _e(t,e,l,a);break;case 31:_e(t,e,l,a);break;case 13:_e(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?_e(t,e,l,a):cn(t,e):u._visibility&2?_e(t,e,l,a):(u._visibility|=2,va(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Tc(i,e);break;case 24:_e(t,e,l,a),n&2048&&Ec(e.alternate,e);break;default:_e(t,e,l,a)}}function va(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,c=l,f=a,v=i.flags;switch(i.tag){case 0:case 11:case 15:va(u,i,c,f,n),nn(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?va(u,i,c,f,n):cn(u,i):(b._visibility|=2,va(u,i,c,f,n)),n&&v&2048&&Tc(i.alternate,i);break;case 24:va(u,i,c,f,n),n&&v&2048&&Ec(i.alternate,i);break;default:va(u,i,c,f,n)}e=e.sibling}}function cn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Tc(a.alternate,a);break;case 24:cn(l,a),n&2048&&Ec(a.alternate,a);break;default:cn(l,a)}e=e.sibling}}var fn=8192;function ya(t,e,l){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)uo(t,e,l),t=t.sibling}function uo(t,e,l){switch(t.tag){case 26:ya(t,e,l),t.flags&fn&&t.memoizedState!==null&&Vm(l,Ne,t.memoizedState,t.memoizedProps);break;case 5:ya(t,e,l);break;case 3:case 4:var a=Ne;Ne=_u(t.stateNode.containerInfo),ya(t,e,l),Ne=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,ya(t,e,l),fn=a):ya(t,e,l));break;default:ya(t,e,l)}}function io(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ct=a,fo(a,t)}io(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)co(t),t=t.sibling}function co(t){switch(t.tag){case 0:case 11:case 15:rn(t),t.flags&2048&&dl(9,t,t.return);break;case 3:rn(t);break;case 12:rn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,vu(t)):rn(t);break;default:rn(t)}}function vu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ct=a,fo(a,t)}io(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:dl(8,e,e.return),vu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,vu(e));break;default:vu(e)}t=t.sibling}}function fo(t,e){for(;Ct!==null;){var l=Ct;switch(l.tag){case 0:case 11:case 15:dl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ct=a;else t:for(l=t;Ct!==null;){a=Ct;var n=a.sibling,u=a.return;if(Is(a),a===l){Ct=null;break t}if(n!==null){n.return=u,Ct=n;break t}Ct=u}}}var im={getCacheForType:function(t){var e=qt(At),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return qt(At).controller.signal}},cm=typeof WeakMap=="function"?WeakMap:Map,it=0,dt=null,$=null,I=0,ct=0,me=null,ml=!1,ga=!1,Ac=!1,Fe=0,xt=0,pl=0,Ql=0,jc=0,pe=0,ba=0,sn=null,ee=null,Mc=!1,yu=0,ro=0,gu=1/0,bu=null,hl=null,Dt=0,vl=null,xa=null,Ie=0,Nc=0,_c=null,so=null,on=0,Dc=null;function he(){return(it&2)!==0&&I!==0?I&-I:p.T!==null?Hc():jf()}function oo(){if(pe===0)if((I&536870912)===0||lt){var t=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),pe=t}else pe=536870912;return t=oe.current,t!==null&&(t.flags|=32),pe}function le(t,e,l){(t===dt&&(ct===2||ct===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),yl(t,I,pe,!1)),Oa(t,l),((it&2)===0||t!==dt)&&(t===dt&&((it&2)===0&&(Ql|=l),xt===4&&yl(t,I,pe,!1)),Re(t))}function mo(t,e,l){if((it&6)!==0)throw Error(d(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Da(t,e),n=a?sm(t,e):Uc(t,e,!0),u=a;do{if(n===0){ga&&!a&&yl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!fm(l)){n=Uc(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;n=sn;var f=c.current.memoizedState.isDehydrated;if(f&&(Sa(c,i).flags|=256),i=Uc(c,i,!1),i!==2){if(Ac&&!f){c.errorRecoveryDisabledLanes|=u,Ql|=u,n=4;break t}u=ee,ee=n,u!==null&&(ee===null?ee=u:ee.push.apply(ee,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sa(t,0),yl(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:yl(a,e,pe,!ml);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=yu+300-ie(),10<n)){if(yl(a,e,pe,!ml),_n(a,0,!0)!==0)break t;Ie=e,a.timeoutHandle=Zo(po.bind(null,a,l,ee,bu,Mc,e,pe,Ql,ba,ml,u,"Throttled",-0,0),n);break t}po(a,l,ee,bu,Mc,e,pe,Ql,ba,ml,u,null,-0,0)}}break}while(!0);Re(t)}function po(t,e,l,a,n,u,i,c,f,v,b,z,y,g){if(t.timeoutHandle=-1,z=e.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},uo(e,u,z);var _=(u&62914560)===u?yu-ie():(u&4194048)===u?ro-ie():0;if(_=Km(z,_),_!==null){Ie=u,t.cancelPendingCommit=_(zo.bind(null,t,e,u,l,a,n,i,c,f,b,z,null,y,g)),yl(t,u,i,!v);return}}zo(t,e,u,l,a,n,i,c,f)}function fm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!re(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yl(t,e,l,a){e&=~jc,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-fe(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Tf(t,l,e)}function xu(){return(it&6)===0?(dn(0),!1):!0}function Oc(){if($!==null){if(ct===0)var t=$.return;else t=$,Le=Rl=null,Ji(t),oa=null,Ja=0,t=$;for(;t!==null;)Zs(t.alternate,t),t=t.return;$=null}}function Sa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Nm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ie=0,Oc(),dt=t,$=l=qe(t.current,null),I=e,ct=0,me=null,ml=!1,ga=Da(t,e),Ac=!1,ba=pe=jc=Ql=pl=xt=0,ee=sn=null,Mc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-fe(a),u=1<<n;e|=t[n],a&=~u}return Fe=e,Ln(),l}function ho(t,e){V=null,p.H=en,e===sa||e===Wn?(e=Dr(),ct=3):e===Bi?(e=Dr(),ct=4):ct=e===rc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,me=e,$===null&&(xt=1,ru(t,be(e,t.current)))}function vo(){var t=oe.current;return t===null?!0:(I&4194048)===I?Te===null:(I&62914560)===I||(I&536870912)!==0?t===Te:!1}function yo(){var t=p.H;return p.H=en,t===null?en:t}function go(){var t=p.A;return p.A=im,t}function Su(){xt=4,ml||(I&4194048)!==I&&oe.current!==null||(ga=!0),(pl&134217727)===0&&(Ql&134217727)===0||dt===null||yl(dt,I,pe,!1)}function Uc(t,e,l){var a=it;it|=2;var n=yo(),u=go();(dt!==t||I!==e)&&(bu=null,Sa(t,e)),e=!1;var i=xt;t:do try{if(ct!==0&&$!==null){var c=$,f=me;switch(ct){case 8:Oc(),i=6;break t;case 3:case 2:case 9:case 6:oe.current===null&&(e=!0);var v=ct;if(ct=0,me=null,za(t,c,f,v),l&&ga){i=0;break t}break;default:v=ct,ct=0,me=null,za(t,c,f,v)}}rm(),i=xt;break}catch(b){ho(t,b)}while(!0);return e&&t.shellSuspendCounter++,Le=Rl=null,it=a,p.H=n,p.A=u,$===null&&(dt=null,I=0,Ln()),i}function rm(){for(;$!==null;)bo($)}function sm(t,e){var l=it;it|=2;var a=yo(),n=go();dt!==t||I!==e?(bu=null,gu=ie()+500,Sa(t,e)):ga=Da(t,e);t:do try{if(ct!==0&&$!==null){e=$;var u=me;e:switch(ct){case 1:ct=0,me=null,za(t,e,u,1);break;case 2:case 9:if(Nr(u)){ct=0,me=null,xo(e);break}e=function(){ct!==2&&ct!==9||dt!==t||(ct=7),Re(t)},u.then(e,e);break t;case 3:ct=7;break t;case 4:ct=5;break t;case 7:Nr(u)?(ct=0,me=null,xo(e)):(ct=0,me=null,za(t,e,u,7));break;case 5:var i=null;switch($.tag){case 26:i=$.memoizedState;case 5:case 27:var c=$;if(i?ud(i):c.stateNode.complete){ct=0,me=null;var f=c.sibling;if(f!==null)$=f;else{var v=c.return;v!==null?($=v,zu(v)):$=null}break e}}ct=0,me=null,za(t,e,u,5);break;case 6:ct=0,me=null,za(t,e,u,6);break;case 8:Oc(),xt=6;break t;default:throw Error(d(462))}}om();break}catch(b){ho(t,b)}while(!0);return Le=Rl=null,p.H=a,p.A=n,it=l,$!==null?0:(dt=null,I=0,Ln(),xt)}function om(){for(;$!==null&&!Rd();)bo($)}function bo(t){var e=ws(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?zu(t):$=e}function xo(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Hs(l,e,e.pendingProps,e.type,void 0,I);break;case 11:e=Hs(l,e,e.pendingProps,e.type.render,e.ref,I);break;case 5:Ji(e);default:Zs(l,e),e=$=yr(e,Fe),e=ws(l,e,Fe)}t.memoizedProps=t.pendingProps,e===null?zu(t):$=e}function za(t,e,l,a){Le=Rl=null,Ji(e),oa=null,Ja=0;var n=e.return;try{if(P0(t,n,e,l,I)){xt=1,ru(t,be(l,t.current)),$=null;return}}catch(u){if(n!==null)throw $=n,u;xt=1,ru(t,be(l,t.current)),$=null;return}e.flags&32768?(lt||a===1?t=!0:ga||(I&536870912)!==0?t=!1:(ml=t=!0,(a===2||a===9||a===3||a===6)&&(a=oe.current,a!==null&&a.tag===13&&(a.flags|=16384))),So(e,t)):zu(e)}function zu(t){var e=t;do{if((e.flags&32768)!==0){So(e,ml);return}t=e.return;var l=lm(e.alternate,e,Fe);if(l!==null){$=l;return}if(e=e.sibling,e!==null){$=e;return}$=e=t}while(e!==null);xt===0&&(xt=5)}function So(t,e){do{var l=am(t.alternate,t);if(l!==null){l.flags&=32767,$=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){$=t;return}$=t=l}while(t!==null);xt=6,$=null}function zo(t,e,l,a,n,u,i,c,f){t.cancelPendingCommit=null;do Tu();while(Dt!==0);if((it&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(u=e.lanes|e.childLanes,u|=xi,Zd(t,l,u,i,c,f),t===dt&&($=dt=null,I=0),xa=e,vl=t,Ie=l,Nc=u,_c=n,so=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hm(An,function(){return Mo(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=p.T,p.T=null,n=A.p,A.p=2,i=it,it|=4;try{nm(t,e,l)}finally{it=i,A.p=n,p.T=a}}Dt=1,To(),Eo(),Ao()}}function To(){if(Dt===1){Dt=0;var t=vl,e=xa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=p.T,p.T=null;var a=A.p;A.p=2;var n=it;it|=4;try{lo(e,t);var u=Zc,i=fr(t.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&cr(c.ownerDocument.documentElement,c)){if(f!==null&&hi(c)){var v=f.start,b=f.end;if(b===void 0&&(b=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(b,c.value.length);else{var z=c.ownerDocument||document,y=z&&z.defaultView||window;if(y.getSelection){var g=y.getSelection(),_=c.textContent.length,Y=Math.min(f.start,_),ot=f.end===void 0?Y:Math.min(f.end,_);!g.extend&&Y>ot&&(i=ot,ot=Y,Y=i);var m=ir(c,Y),s=ir(c,ot);if(m&&s&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==s.node||g.focusOffset!==s.offset)){var h=z.createRange();h.setStart(m.node,m.offset),g.removeAllRanges(),Y>ot?(g.addRange(h),g.extend(s.node,s.offset)):(h.setEnd(s.node,s.offset),g.addRange(h))}}}}for(z=[],g=c;g=g.parentNode;)g.nodeType===1&&z.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var S=z[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Bu=!!Qc,Zc=Qc=null}finally{it=n,A.p=a,p.T=l}}t.current=e,Dt=2}}function Eo(){if(Dt===2){Dt=0;var t=vl,e=xa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=p.T,p.T=null;var a=A.p;A.p=2;var n=it;it|=4;try{Fs(t,e.alternate,e)}finally{it=n,A.p=a,p.T=l}}Dt=3}}function Ao(){if(Dt===4||Dt===3){Dt=0,Bd();var t=vl,e=xa,l=Ie,a=so;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Dt=5:(Dt=0,xa=vl=null,jo(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(hl=null),$u(l),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=p.T,n=A.p,A.p=2,p.T=null;try{for(var u=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{p.T=e,A.p=n}}(Ie&3)!==0&&Tu(),Re(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Dc?on++:(on=0,Dc=t):on=0,dn(0)}}function jo(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Va(e)))}function Tu(){return To(),Eo(),Ao(),Mo()}function Mo(){if(Dt!==5)return!1;var t=vl,e=Nc;Nc=0;var l=$u(Ie),a=p.T,n=A.p;try{A.p=32>l?32:l,p.T=null,l=_c,_c=null;var u=vl,i=Ie;if(Dt=0,xa=vl=null,Ie=0,(it&6)!==0)throw Error(d(331));var c=it;if(it|=4,co(u.current),no(u,u.current,i,l),it=c,dn(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(_a,u)}catch{}return!0}finally{A.p=n,p.T=a,jo(t,e)}}function No(t,e,l){e=be(l,e),e=fc(t.stateNode,e,2),t=rl(t,e,2),t!==null&&(Oa(t,2),Re(t))}function ft(t,e,l){if(t.tag===3)No(t,t,l);else for(;e!==null;){if(e.tag===3){No(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){t=be(l,t),l=Ns(2),a=rl(e,l,2),a!==null&&(_s(l,a,e,t),Oa(a,2),Re(a));break}}e=e.return}}function Cc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new cm;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Ac=!0,n.add(l),t=dm.bind(null,t,e,l),e.then(t,t))}function dm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,dt===t&&(I&l)===l&&(xt===4||xt===3&&(I&62914560)===I&&300>ie()-yu?(it&2)===0&&Sa(t,0):jc|=l,ba===I&&(ba=0)),Re(t)}function _o(t,e){e===0&&(e=zf()),t=Ol(t,e),t!==null&&(Oa(t,e),Re(t))}function mm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),_o(t,l)}function pm(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),_o(t,l)}function hm(t,e){return Ku(t,e)}var Eu=null,Ta=null,Rc=!1,Au=!1,Bc=!1,gl=0;function Re(t){t!==Ta&&t.next===null&&(Ta===null?Eu=Ta=t:Ta=Ta.next=t),Au=!0,Rc||(Rc=!0,ym())}function dn(t,e){if(!Bc&&Au){Bc=!0;do for(var l=!1,a=Eu;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-fe(42|t)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Co(a,u))}else u=I,u=_n(a,a===dt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Da(a,u)||(l=!0,Co(a,u));a=a.next}while(l);Bc=!1}}function vm(){Do()}function Do(){Au=Rc=!1;var t=0;gl!==0&&Mm()&&(t=gl);for(var e=ie(),l=null,a=Eu;a!==null;){var n=a.next,u=Oo(a,e);u===0?(a.next=null,l===null?Eu=n:l.next=n,n===null&&(Ta=l)):(l=a,(t!==0||(u&3)!==0)&&(Au=!0)),a=n}Dt!==0&&Dt!==5||dn(t),gl!==0&&(gl=0)}function Oo(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-fe(u),c=1<<i,f=n[i];f===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Qd(c,e)):f<=e&&(t.expiredLanes|=c),u&=~c}if(e=dt,l=I,l=_n(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(ct===2||ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ju(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Da(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Ju(a),$u(l)){case 2:case 8:l=xf;break;case 32:l=An;break;case 268435456:l=Sf;break;default:l=An}return a=Uo.bind(null,t),l=Ku(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Ju(a),t.callbackPriority=2,t.callbackNode=null,2}function Uo(t,e){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Tu()&&t.callbackNode!==l)return null;var a=I;return a=_n(t,t===dt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(mo(t,a,e),Oo(t,ie()),t.callbackNode!=null&&t.callbackNode===l?Uo.bind(null,t):null)}function Co(t,e){if(Tu())return null;mo(t,e,!0)}function ym(){_m(function(){(it&6)!==0?Ku(bf,vm):Do()})}function Hc(){if(gl===0){var t=fa;t===0&&(t=jn,jn<<=1,(jn&261888)===0&&(jn=256)),gl=t}return gl}function Ro(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cn(""+t)}function Bo(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function gm(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=Ro((n[$t]||null).action),i=a.submitter;i&&(e=(e=i[$t]||null)?Ro(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new Gn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gl!==0){var f=i?Bo(n,i):new FormData(n);lc(l,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Bo(n,i):new FormData(n),lc(l,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Gc=0;Gc<bi.length;Gc++){var Yc=bi[Gc],bm=Yc.toLowerCase(),xm=Yc[0].toUpperCase()+Yc.slice(1);Me(bm,"on"+xm)}Me(or,"onAnimationEnd"),Me(dr,"onAnimationIteration"),Me(mr,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(H0,"onTransitionRun"),Me(G0,"onTransitionStart"),Me(Y0,"onTransitionCancel"),Me(pr,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Ho(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,v=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=v;try{u(n)}catch(b){Xn(b)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,v=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=v;try{u(n)}catch(b){Xn(b)}n.currentTarget=null,u=f}}}}function F(t,e){var l=e[Fu];l===void 0&&(l=e[Fu]=new Set);var a=t+"__bubble";l.has(a)||(Go(e,t,2,!1),l.add(a))}function qc(t,e,l){var a=0;e&&(a|=4),Go(l,t,a,e)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Xc(t){if(!t[ju]){t[ju]=!0,_f.forEach(function(l){l!=="selectionchange"&&(Sm.has(l)||qc(l,!1,t),qc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ju]||(e[ju]=!0,qc("selectionchange",!1,e))}}function Go(t,e,l,a){switch(dd(e)){case 2:var n=Wm;break;case 8:n=$m;break;default:n=ef}l=n.bind(null,e,l,t),n=void 0,!ii||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Lc(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Vl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue t}c=c.parentNode}}a=a.return}Lf(function(){var v=u,b=ni(l),z=[];t:{var y=hr.get(t);if(y!==void 0){var g=Gn,_=t;switch(t){case"keypress":if(Bn(l)===0)break t;case"keydown":case"keyup":g=p0;break;case"focusin":_="focus",g=si;break;case"focusout":_="blur",g=si;break;case"beforeblur":case"afterblur":g=si;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=l0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=y0;break;case or:case dr:case mr:g=u0;break;case pr:g=b0;break;case"scroll":case"scrollend":g=t0;break;case"wheel":g=S0;break;case"copy":case"cut":case"paste":g=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kf;break;case"toggle":case"beforetoggle":g=T0}var Y=(e&4)!==0,ot=!Y&&(t==="scroll"||t==="scrollend"),m=Y?y!==null?y+"Capture":null:y;Y=[];for(var s=v,h;s!==null;){var S=s;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||m===null||(S=Ra(s,m),S!=null&&Y.push(pn(s,S,h))),ot)break;s=s.return}0<Y.length&&(y=new g(y,_,null,l,b),z.push({event:y,listeners:Y}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",y&&l!==ai&&(_=l.relatedTarget||l.fromElement)&&(Vl(_)||_[Zl]))break t;if((g||y)&&(y=b.window===b?b:(y=b.ownerDocument)?y.defaultView||y.parentWindow:window,g?(_=l.relatedTarget||l.toElement,g=v,_=_?Vl(_):null,_!==null&&(ot=q(_),Y=_.tag,_!==ot||Y!==5&&Y!==27&&Y!==6)&&(_=null)):(g=null,_=v),g!==_)){if(Y=Zf,S="onMouseLeave",m="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(Y=Kf,S="onPointerLeave",m="onPointerEnter",s="pointer"),ot=g==null?y:Ca(g),h=_==null?y:Ca(_),y=new Y(S,s+"leave",g,l,b),y.target=ot,y.relatedTarget=h,S=null,Vl(b)===v&&(Y=new Y(m,s+"enter",_,l,b),Y.target=h,Y.relatedTarget=ot,S=Y),ot=S,g&&_)e:{for(Y=zm,m=g,s=_,h=0,S=m;S;S=Y(S))h++;S=0;for(var H=s;H;H=Y(H))S++;for(;0<h-S;)m=Y(m),h--;for(;0<S-h;)s=Y(s),S--;for(;h--;){if(m===s||s!==null&&m===s.alternate){Y=m;break e}m=Y(m),s=Y(s)}Y=null}else Y=null;g!==null&&Yo(z,y,g,Y,!1),_!==null&&ot!==null&&Yo(z,ot,_,Y,!0)}}t:{if(y=v?Ca(v):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var nt=tr;else if(If(y))if(er)nt=C0;else{nt=O0;var U=D0}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?v&&li(v.elementType)&&(nt=tr):nt=U0;if(nt&&(nt=nt(t,v))){Pf(z,nt,l,b);break t}U&&U(t,y,v),t==="focusout"&&v&&y.type==="number"&&v.memoizedProps.value!=null&&ei(y,"number",y.value)}switch(U=v?Ca(v):window,t){case"focusin":(If(U)||U.contentEditable==="true")&&(ta=U,vi=v,wa=null);break;case"focusout":wa=vi=ta=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,rr(z,l,b);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":rr(z,l,b)}var J;if(di)t:{switch(t){case"compositionstart":var P="onCompositionStart";break t;case"compositionend":P="onCompositionEnd";break t;case"compositionupdate":P="onCompositionUpdate";break t}P=void 0}else Pl?$f(t,l)&&(P="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(P="onCompositionStart");P&&(Jf&&l.locale!=="ko"&&(Pl||P!=="onCompositionStart"?P==="onCompositionEnd"&&Pl&&(J=wf()):(ll=b,ci="value"in ll?ll.value:ll.textContent,Pl=!0)),U=Mu(v,P),0<U.length&&(P=new Vf(P,t,null,l,b),z.push({event:P,listeners:U}),J?P.data=J:(J=Ff(l),J!==null&&(P.data=J)))),(J=A0?j0(t,l):M0(t,l))&&(P=Mu(v,"onBeforeInput"),0<P.length&&(U=new Vf("onBeforeInput","beforeinput",null,l,b),z.push({event:U,listeners:P}),U.data=J)),gm(z,t,v,l,b)}Ho(z,e)})}function pn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Mu(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ra(t,l),n!=null&&a.unshift(pn(t,n,u)),n=Ra(t,e),n!=null&&a.push(pn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function zm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yo(t,e,l,a,n){for(var u=e._reactName,i=[];l!==null&&l!==a;){var c=l,f=c.alternate,v=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||v===null||(f=v,n?(v=Ra(l,u),v!=null&&i.unshift(pn(l,v,f))):n||(v=Ra(l,u),v!=null&&i.push(pn(l,v,f)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var Tm=/\r\n?/g,Em=/\u0000|\uFFFD/g;function qo(t){return(typeof t=="string"?t:""+t).replace(Tm,`
`).replace(Em,"")}function Xo(t,e){return e=qo(e),qo(t)===e}function st(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||$l(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&$l(t,""+a);break;case"className":On(t,"class",a);break;case"tabIndex":On(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":On(t,l,a);break;case"style":qf(t,a,u);break;case"data":if(e!=="object"){On(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Cn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&st(t,e,"name",n.name,n,null),st(t,e,"formEncType",n.formEncType,n,null),st(t,e,"formMethod",n.formMethod,n,null),st(t,e,"formTarget",n.formTarget,n,null)):(st(t,e,"encType",n.encType,n,null),st(t,e,"method",n.method,n,null),st(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Cn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ge);break;case"onScroll":a!=null&&F("scroll",t);break;case"onScrollEnd":a!=null&&F("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Cn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":F("beforetoggle",t),F("toggle",t),Dn(t,"popover",a);break;case"xlinkActuate":He(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":He(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":He(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":He(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":He(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":He(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":He(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":He(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":He(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Id.get(l)||l,Dn(t,l,a))}}function wc(t,e,l,a,n,u){switch(l){case"style":qf(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"children":typeof a=="string"?$l(t,a):(typeof a=="number"||typeof a=="bigint")&&$l(t,""+a);break;case"onScroll":a!=null&&F("scroll",t);break;case"onScrollEnd":a!=null&&F("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Df.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[$t]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Dn(t,l,a)}}}function Lt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",t),F("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:st(t,e,u,i,l,null)}}n&&st(t,e,"srcSet",l.srcSet,l,null),a&&st(t,e,"src",l.src,l,null);return;case"input":F("invalid",t);var c=u=i=n=null,f=null,v=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":i=b;break;case"checked":f=b;break;case"defaultChecked":v=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:st(t,e,a,b,l,null)}}Bf(t,u,c,f,v,i,n,!1);return;case"select":F("invalid",t),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:st(t,e,n,c,l,null)}e=u,l=i,t.multiple=!!a,e!=null?Wl(t,!!a,e,!1):l!=null&&Wl(t,!!a,l,!0);return;case"textarea":F("invalid",t),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:st(t,e,i,c,l,null)}Gf(t,a,n,u);return;case"option":for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null)&&(f==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":st(t,e,f,a,l,null));return;case"dialog":F("beforetoggle",t),F("toggle",t),F("cancel",t),F("close",t);break;case"iframe":case"object":F("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)F(mn[a],t);break;case"image":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"embed":case"source":case"link":F("error",t),F("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in l)if(l.hasOwnProperty(v)&&(a=l[v],a!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:st(t,e,v,a,l,null)}return;default:if(li(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&wc(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&st(t,e,c,a,l,null))}function Am(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,v=null,b=null;for(g in l){var z=l[g];if(l.hasOwnProperty(g)&&z!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":f=z;default:a.hasOwnProperty(g)||st(t,e,g,null,a,z)}}for(var y in a){var g=a[y];if(z=l[y],a.hasOwnProperty(y)&&(g!=null||z!=null))switch(y){case"type":u=g;break;case"name":n=g;break;case"checked":v=g;break;case"defaultChecked":b=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,e));break;default:g!==z&&st(t,e,y,g,a,z)}}ti(t,i,c,f,v,b,u,n);return;case"select":g=i=c=y=null;for(u in l)if(f=l[u],l.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":g=f;default:a.hasOwnProperty(u)||st(t,e,u,null,a,f)}for(n in a)if(u=a[n],f=l[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":y=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&st(t,e,n,u,a,f)}e=c,l=i,a=g,y!=null?Wl(t,!!l,y,!1):!!a!=!!l&&(e!=null?Wl(t,!!l,e,!0):Wl(t,!!l,l?[]:"",!1));return;case"textarea":g=y=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:st(t,e,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":y=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==u&&st(t,e,i,n,a,u)}Hf(t,y,g);return;case"option":for(var _ in l)y=l[_],l.hasOwnProperty(_)&&y!=null&&!a.hasOwnProperty(_)&&(_==="selected"?t.selected=!1:st(t,e,_,null,a,y));for(f in a)y=a[f],g=l[f],a.hasOwnProperty(f)&&y!==g&&(y!=null||g!=null)&&(f==="selected"?t.selected=y&&typeof y!="function"&&typeof y!="symbol":st(t,e,f,y,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in l)y=l[Y],l.hasOwnProperty(Y)&&y!=null&&!a.hasOwnProperty(Y)&&st(t,e,Y,null,a,y);for(v in a)if(y=a[v],g=l[v],a.hasOwnProperty(v)&&y!==g&&(y!=null||g!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,e));break;default:st(t,e,v,y,a,g)}return;default:if(li(e)){for(var ot in l)y=l[ot],l.hasOwnProperty(ot)&&y!==void 0&&!a.hasOwnProperty(ot)&&wc(t,e,ot,void 0,a,y);for(b in a)y=a[b],g=l[b],!a.hasOwnProperty(b)||y===g||y===void 0&&g===void 0||wc(t,e,b,y,a,g);return}}for(var m in l)y=l[m],l.hasOwnProperty(m)&&y!=null&&!a.hasOwnProperty(m)&&st(t,e,m,null,a,y);for(z in a)y=a[z],g=l[z],!a.hasOwnProperty(z)||y===g||y==null&&g==null||st(t,e,z,y,a,g)}function Lo(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Lo(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],v=f.startTime;if(v>c)break;var b=f.transferSize,z=f.initiatorType;b&&Lo(z)&&(f=f.responseEnd,i+=b*(f<c?1:(c-v)/(f-v)))}if(--a,e+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qc=null,Zc=null;function Nu(t){return t.nodeType===9?t:t.ownerDocument}function wo(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qo(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kc=null;function Mm(){var t=window.event;return t&&t.type==="popstate"?t===Kc?!1:(Kc=t,!0):(Kc=null,!1)}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Vo=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof Vo<"u"?function(t){return Vo.resolve(null).then(t).catch(Dm)}:Zo;function Dm(t){setTimeout(function(){throw t})}function bl(t){return t==="head"}function Ko(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Ma(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")hn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,hn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&hn(t.ownerDocument.body);l=n}while(l);Ma(e)}function Jo(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Jc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Jc(l),Iu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Om(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ee(t.nextSibling),t===null)break}return null}function Um(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ee(t.nextSibling),t===null))return null;return t}function ko(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ee(t.nextSibling),t===null))return null;return t}function kc(t){return t.data==="$?"||t.data==="$~"}function Wc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var $c=null;function Wo(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ee(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function $o(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Fo(t,e,l){switch(e=Nu(l),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function hn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Iu(t)}var Ae=new Map,Io=new Set;function _u(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pe=A.d;A.d={f:Rm,r:Bm,D:Hm,C:Gm,L:Ym,m:qm,X:Lm,S:Xm,M:wm};function Rm(){var t=Pe.f(),e=xu();return t||e}function Bm(t){var e=Kl(t);e!==null&&e.tag===5&&e.type==="form"?ps(e):Pe.r(t)}var Ea=typeof document>"u"?null:document;function Po(t,e,l){var a=Ea;if(a&&typeof e=="string"&&e){var n=ye(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Io.has(n)||(Io.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Lt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function Hm(t){Pe.D(t),Po("dns-prefetch",t,null)}function Gm(t,e){Pe.C(t,e),Po("preconnect",t,e)}function Ym(t,e,l){Pe.L(t,e,l);var a=Ea;if(a&&t&&e){var n='link[rel="preload"][as="'+ye(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ye(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ye(l.imageSizes)+'"]')):n+='[href="'+ye(t)+'"]';var u=n;switch(e){case"style":u=Aa(t);break;case"script":u=ja(t)}Ae.has(u)||(t=G({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ae.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(vn(u))||e==="script"&&a.querySelector(yn(u))||(e=a.createElement("link"),Lt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function qm(t,e){Pe.m(t,e);var l=Ea;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ye(a)+'"][href="'+ye(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ja(t)}if(!Ae.has(u)&&(t=G({rel:"modulepreload",href:t},e),Ae.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(u)))return}a=l.createElement("link"),Lt(a,"link",t),Ut(a),l.head.appendChild(a)}}}function Xm(t,e,l){Pe.S(t,e,l);var a=Ea;if(a&&t){var n=Jl(a).hoistableStyles,u=Aa(t);e=e||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(vn(u)))c.loading=5;else{t=G({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ae.get(u))&&Fc(t,l);var f=i=a.createElement("link");Ut(f),Lt(f,"link",t),f._p=new Promise(function(v,b){f.onload=v,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Du(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Lm(t,e){Pe.X(t,e);var l=Ea;if(l&&t){var a=Jl(l).hoistableScripts,n=ja(t),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(t=G({src:t,async:!0},e),(e=Ae.get(n))&&Ic(t,e),u=l.createElement("script"),Ut(u),Lt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function wm(t,e){Pe.M(t,e);var l=Ea;if(l&&t){var a=Jl(l).hoistableScripts,n=ja(t),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(t=G({src:t,async:!0,type:"module"},e),(e=Ae.get(n))&&Ic(t,e),u=l.createElement("script"),Ut(u),Lt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function td(t,e,l,a){var n=(n=K.current)?_u(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Aa(l.href),l=Jl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Aa(l.href);var u=Jl(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(vn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),Ae.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ae.set(t,l),u||Qm(n,t,l,i.state))),e&&a===null)throw Error(d(528,""));return i}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ja(l),l=Jl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Aa(t){return'href="'+ye(t)+'"'}function vn(t){return'link[rel="stylesheet"]['+t+"]"}function ed(t){return G({},t,{"data-precedence":t.precedence,precedence:null})}function Qm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Lt(e,"link",l),Ut(e),t.head.appendChild(e))}function ja(t){return'[src="'+ye(t)+'"]'}function yn(t){return"script[async]"+t}function ld(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ye(l.href)+'"]');if(a)return e.instance=a,Ut(a),a;var n=G({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ut(a),Lt(a,"style",n),Du(a,l.precedence,t),e.instance=a;case"stylesheet":n=Aa(l.href);var u=t.querySelector(vn(n));if(u)return e.state.loading|=4,e.instance=u,Ut(u),u;a=ed(l),(n=Ae.get(n))&&Fc(a,n),u=(t.ownerDocument||t).createElement("link"),Ut(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Lt(u,"link",a),e.state.loading|=4,Du(u,l.precedence,t),e.instance=u;case"script":return u=ja(l.src),(n=t.querySelector(yn(u)))?(e.instance=n,Ut(n),n):(a=l,(n=Ae.get(u))&&(a=G({},l),Ic(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ut(n),Lt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Du(a,l.precedence,t));return e.instance}function Du(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Fc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ic(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ou=null;function ad(t,e,l){if(Ou===null){var a=new Map,n=Ou=new Map;n.set(l,a)}else n=Ou,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[Ua]||u[Gt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function nd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Zm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ud(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Vm(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Aa(a.href),u=e.querySelector(vn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Uu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Ut(u);return}u=e.ownerDocument||e,a=ed(a),(n=Ae.get(n))&&Fc(a,n),u=u.createElement("link"),Ut(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Lt(u,"link",a),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Uu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Pc=0;function Km(t,e){return t.stylesheets&&t.count===0&&Ru(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Ru(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Pc===0&&(Pc=62500*jm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ru(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Pc?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cu=null;function Ru(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cu=new Map,e.forEach(Jm,t),Cu=null,Uu.call(t))}function Jm(t,e){if(!(e.state.loading&4)){var l=Cu.get(t);if(l)var a=l.get(null);else{l=new Map,Cu.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=e.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Uu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var gn={$$typeof:_t,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function km(t,e,l,a,n,u,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ku(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.hiddenUpdates=ku(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function id(t,e,l,a,n,u,i,c,f,v,b,z){return t=new km(t,e,l,i,f,v,b,z,c),e=1,u===!0&&(e|=24),u=se(3,null,null,e),t.current=u,u.stateNode=t,e=Ui(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},Hi(u),t}function cd(t){return t?(t=aa,t):aa}function fd(t,e,l,a,n,u){n=cd(n),a.context===null?a.context=n:a.pendingContext=n,a=fl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=rl(t,a,e),l!==null&&(le(l,t,e),Wa(l,t,e))}function rd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function tf(t,e){rd(t,e),(t=t.alternate)&&rd(t,e)}function sd(t){if(t.tag===13||t.tag===31){var e=Ol(t,67108864);e!==null&&le(e,t,67108864),tf(t,67108864)}}function od(t){if(t.tag===13||t.tag===31){var e=he();e=Wu(e);var l=Ol(t,e);l!==null&&le(l,t,e),tf(t,e)}}var Bu=!0;function Wm(t,e,l,a){var n=p.T;p.T=null;var u=A.p;try{A.p=2,ef(t,e,l,a)}finally{A.p=u,p.T=n}}function $m(t,e,l,a){var n=p.T;p.T=null;var u=A.p;try{A.p=8,ef(t,e,l,a)}finally{A.p=u,p.T=n}}function ef(t,e,l,a){if(Bu){var n=lf(a);if(n===null)Lc(t,e,a,Hu,l),md(t,a);else if(Im(n,t,e,l,a))a.stopPropagation();else if(md(t,a),e&4&&-1<Fm.indexOf(t)){for(;n!==null;){var u=Kl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=jl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-fe(i);c.entanglements[1]|=f,i&=~f}Re(u),(it&6)===0&&(gu=ie()+500,dn(0))}}break;case 31:case 13:c=Ol(u,2),c!==null&&le(c,u,2),xu(),tf(u,2)}if(u=lf(a),u===null&&Lc(t,e,a,Hu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Lc(t,e,a,null,l)}}function lf(t){return t=ni(t),af(t)}var Hu=null;function af(t){if(Hu=null,t=Vl(t),t!==null){var e=q(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=tt(e),t!==null)return t;t=null}else if(l===31){if(t=vt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Hu=t,null}function dd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case bf:return 2;case xf:return 8;case An:case Gd:return 32;case Sf:return 268435456;default:return 32}default:return 32}}var nf=!1,xl=null,Sl=null,zl=null,bn=new Map,xn=new Map,Tl=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function md(t,e){switch(t){case"focusin":case"focusout":xl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":zl=null;break;case"pointerover":case"pointerout":bn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(e.pointerId)}}function Sn(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=Kl(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Im(t,e,l,a,n){switch(e){case"focusin":return xl=Sn(xl,t,e,l,a,n),!0;case"dragenter":return Sl=Sn(Sl,t,e,l,a,n),!0;case"mouseover":return zl=Sn(zl,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,Sn(bn.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,xn.set(u,Sn(xn.get(u)||null,t,e,l,a,n)),!0}return!1}function pd(t){var e=Vl(t.target);if(e!==null){var l=q(e);if(l!==null){if(e=l.tag,e===13){if(e=tt(l),e!==null){t.blockedOn=e,Mf(t.priority,function(){od(l)});return}}else if(e===31){if(e=vt(l),e!==null){t.blockedOn=e,Mf(t.priority,function(){od(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=lf(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ai=a,l.target.dispatchEvent(a),ai=null}else return e=Kl(l),e!==null&&sd(e),t.blockedOn=l,!1;e.shift()}return!0}function hd(t,e,l){Gu(t)&&l.delete(e)}function Pm(){nf=!1,xl!==null&&Gu(xl)&&(xl=null),Sl!==null&&Gu(Sl)&&(Sl=null),zl!==null&&Gu(zl)&&(zl=null),bn.forEach(hd),xn.forEach(hd)}function Yu(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Pm)))}var qu=null;function vd(t){qu!==t&&(qu=t,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(af(a||l)===null)continue;break}var u=Kl(l);u!==null&&(t.splice(e,3),e-=3,lc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ma(t){function e(f){return Yu(f,t)}xl!==null&&Yu(xl,t),Sl!==null&&Yu(Sl,t),zl!==null&&Yu(zl,t),bn.forEach(e),xn.forEach(e);for(var l=0;l<Tl.length;l++){var a=Tl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Tl.length&&(l=Tl[0],l.blockedOn===null);)pd(l),l.blockedOn===null&&Tl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[$t]||null;if(typeof u=="function")i||vd(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[$t]||null)c=i.formAction;else if(af(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),vd(l)}}}function yd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function uf(t){this._internalRoot=t}Xu.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var l=e.current,a=he();fd(l,a,t,e,null,null)},Xu.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fd(t.current,2,null,t,null,null),xu(),e[Zl]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=jf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Tl.length&&e!==0&&e<Tl[l].priority;l++);Tl.splice(l,0,t),l===0&&pd(t)}};var gd=C.version;if(gd!=="19.2.3")throw Error(d(527,gd,"19.2.3"));A.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=E(e),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var t1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{_a=Lu.inject(t1),ce=Lu}catch{}}return Tn.createRoot=function(t,e){if(!D(t))throw Error(d(299));var l=!1,a="",n=Es,u=As,i=js;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=id(t,1,!1,null,null,l,a,null,n,u,i,yd),t[Zl]=e.current,Xc(t),new uf(e)},Tn.hydrateRoot=function(t,e,l){if(!D(t))throw Error(d(299));var a=!1,n="",u=Es,i=As,c=js,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=id(t,1,!0,e,l??null,a,n,f,u,i,c,yd),e.context=cd(null),l=e.current,a=he(),a=Wu(a),n=fl(a),n.callback=null,rl(l,n,a),l=a,e.current.lanes=l,Oa(e,l),Re(e),t[Zl]=e.current,Xc(t),new Xu(e)},Tn.version="19.2.3",Tn}var Nd;function s1(){if(Nd)return rf.exports;Nd=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(C){console.error(C)}}return T(),rf.exports=r1(),rf.exports}var o1=s1();const d1=Od(o1);function m1(){const[T,C]=Rt.useState([]),M=Rt.useRef(0);return Rt.useEffect(()=>{const d=[],D=q=>{const tt=M.current+1;M.current=tt,C(O=>[...O,{id:tt,x:q.clientX,y:q.clientY}].slice(-10));const vt=window.setTimeout(()=>{C(O=>O.filter(E=>E.id!==tt))},1300);d.push(vt)};return window.addEventListener("pointerdown",D,{passive:!0}),()=>{window.removeEventListener("pointerdown",D),d.forEach(q=>window.clearTimeout(q))}},[]),o.jsx("div",{className:"clickRipples","aria-hidden":"true",children:T.map(d=>o.jsxs(Rt.Fragment,{children:[o.jsx("span",{className:"rippleDots",style:{left:`${d.x}px`,top:`${d.y}px`}}),o.jsx("span",{className:"ripple rippleA",style:{left:`${d.x}px`,top:`${d.y}px`}}),o.jsx("span",{className:"ripple rippleB",style:{left:`${d.x}px`,top:`${d.y}px`}})]},d.id))})}function _d(){const T=window.location.hash||"#/";return T.startsWith("#/cv")?"cv":T.startsWith("#/career")?"career":"home"}function p1(){const[T,C]=Rt.useState(_d());return Rt.useEffect(()=>{const M=()=>C(_d());return window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[]),T}function Ud(T){window.location.hash!==T&&(window.location.hash=T)}function hf(){return o.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[o.jsx("span",{className:"sceneSkyTint"}),o.jsx("span",{className:"sceneSun"}),o.jsx("span",{className:"sceneRidge ridgeFar"}),o.jsx("span",{className:"sceneRidge ridgeNear"}),o.jsx("span",{className:"scenePine pine1"}),o.jsx("span",{className:"scenePine pine2"}),o.jsx("span",{className:"scenePine pine3"}),o.jsx("span",{className:"sceneCloud cloudA"}),o.jsx("span",{className:"sceneCloud cloudB"}),o.jsx("span",{className:"sceneDust dust1"}),o.jsx("span",{className:"sceneDust dust2"}),o.jsx("span",{className:"sceneDust dust3"}),o.jsx("span",{className:"sceneDust dust4"}),o.jsx("span",{className:"sceneDust dust5"}),o.jsx("span",{className:"sceneLeaf leaf1"}),o.jsx("span",{className:"sceneLeaf leaf2"}),o.jsx("span",{className:"sceneLeaf leaf3"}),o.jsx("span",{className:"sceneLeaf leaf4"}),o.jsx("span",{className:"sceneLeaf leaf5"}),o.jsx("span",{className:"sceneLeaf leaf6"}),o.jsx("span",{className:"sceneWind wind1"}),o.jsx("span",{className:"sceneWind wind2"}),o.jsx("span",{className:"sceneWind wind3"})]})}function h1(){return o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function v1(){return o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function y1(){return o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function g1(){return o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function b1(){return o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:o.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function vf({theme:T,onToggle:C}){const M=T==="dark";return o.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:C,"aria-label":M?"Switch to light theme":"Switch to dark theme",title:M?"Light mode":"Dark mode",children:M?o.jsx(g1,{}):o.jsx(b1,{})})}const x1=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Monster Studio - Onesoft",logo:"/my-portfolio/company/onesoft.png",summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Monkey Junior",logo:"/my-portfolio/company/monkeyjunior.png",summary:"Continued game development experience, deepening expertise in game architecture and optimization.",highlights:["Extended puzzle game development with advanced mechanics.","Optimized game performance and user experience.","Participated in full development cycle from design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",logo:"/my-portfolio/company/vng.png",summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay and online systems for large-scale titles.","Developed metagame features: events, shop flow, and payment-related features.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"Digital Data Center",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Developed FastAPI + PostgreSQL services for scalable online applications.","Operated production systems with Docker and Kubernetes.","Improved delivery efficiency with CI/CD and workflow automation (Airflow)."]},{period:"2025 - Present",title:"Building Multiplayer Side Projects",org:"Independent Development",summary:"Focused on multiplayer game architecture and end-to-end online flow outside of office projects.",highlights:["Built an FPS multiplayer prototype with dedicated-server architecture (Unreal Engine 5).","Built a turn-based online card game with C++ networking and Protocol Buffers.","Explored backend match services, session orchestration, and deployment patterns."]}];function S1({theme:T,onToggleTheme:C}){const M=[...x1].reverse();return o.jsxs("div",{className:"careerPage",children:[o.jsxs("header",{className:"topbar",children:[o.jsx(hf,{}),o.jsxs("div",{className:"container topbarInner",children:[o.jsx("button",{className:"btn",onClick:()=>Ud("#/"),type:"button",children:"← Back"}),o.jsx("div",{className:"brand",children:o.jsx("span",{children:"Career"})}),o.jsx("div",{className:"rightActions",children:o.jsx(vf,{theme:T,onToggle:C})})]})]}),o.jsxs("main",{className:"container careerMain",children:[o.jsxs("section",{className:"careerIntro",children:[o.jsx("h1",{className:"h3 careerTitle",children:"Career Journey"}),o.jsx("p",{className:"summary careerSummary",children:"A bottom-to-top flow of my path: where I started, how long I worked in each phase, and what I built along the way."})]}),o.jsxs("section",{className:"careerTimeline","aria-label":"Career timeline",children:[o.jsx("span",{className:"careerFlowLabel top",children:"Now"}),o.jsx("span",{className:"careerFlowLabel bottom",children:"Start"}),o.jsx("span",{className:"careerLine","aria-hidden":"true"}),M.map((d,D)=>o.jsxs("article",{className:"careerCard",style:{animationDelay:`${140+D*120}ms`},children:[d.logo&&o.jsx("img",{src:d.logo,alt:d.org,className:"careerLogo"}),o.jsx("div",{className:"careerPeriod",children:d.period}),o.jsx("h2",{className:"h3 careerRole",children:d.title}),o.jsx("p",{className:"careerOrg",children:d.org}),o.jsx("p",{className:"careerCardSummary",children:d.summary}),o.jsx("ul",{className:"careerHighlights",children:d.highlights.map(q=>o.jsx("li",{children:q},q))})]},d.period))]})]})]})}const z1=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],mf=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function T1(T){const C=[...T];for(let M=C.length-1;M>0;M--){const d=Math.floor(Math.random()*(M+1));[C[M],C[d]]=[C[d],C[M]]}return C}function Dd(T){const C=z1.slice(0,T);return T1([...C,...C].map((M,d)=>({id:d,symbol:M,isFlipped:!1,isMatched:!1})))}function E1(){const[T,C]=gt.useState(0),M=mf[T],d=T===mf.length-1,[D,q]=gt.useState(()=>Dd(M.cols*M.rows/2)),[tt,vt]=gt.useState([]),[O,E]=gt.useState(0),[k,G]=gt.useState(0),[X,Q]=gt.useState(!1),[W,mt]=gt.useState(!1),[Vt,Et]=gt.useState(!1),Wt=gt.useRef(null),_t=gt.useRef(null),Kt=gt.useRef(0),wt=gt.useRef(null),Bt=gt.useCallback(()=>{if(typeof window>"u")return null;const p=window.AudioContext||window.webkitAudioContext;return p?(wt.current||(wt.current=new p),wt.current.state==="suspended"&&wt.current.resume(),wt.current):null},[]),L=gt.useCallback((p,A,R,et,Z=0)=>{const r=Bt();if(!r)return;const x=r.createOscillator(),j=r.createGain(),N=r.currentTime+Z;x.type=R,x.frequency.setValueAtTime(p,N),j.gain.setValueAtTime(1e-4,N),j.gain.exponentialRampToValueAtTime(et,N+.02),j.gain.exponentialRampToValueAtTime(1e-4,N+A),x.connect(j),j.connect(r.destination),x.start(N),x.stop(N+A+.02)},[Bt]),Ht=gt.useCallback(()=>{L(660,.12,"triangle",.05,0),L(880,.12,"triangle",.04,.08)},[L]),ae=gt.useCallback(()=>{L(420,.05,"triangle",.018,0)},[L]),Be=gt.useCallback(()=>{L(523.25,.16,"sine",.06,0),L(659.25,.16,"sine",.06,.12),L(783.99,.22,"sine",.07,.24)},[L]);gt.useEffect(()=>{X&&!W&&D.every(p=>p.isMatched)&&mt(!0)},[D,X,W]),gt.useEffect(()=>(X&&!W&&(Wt.current=setInterval(()=>G(p=>p+1),1e3)),()=>{Wt.current&&clearInterval(Wt.current)}),[X,W]),gt.useEffect(()=>{W&&Be()},[W,Be]),gt.useEffect(()=>{if(!W)return;const p=_t.current;if(!p)return;const A=p.getContext("2d");if(!A)return;p.width=p.offsetWidth,p.height=p.offsetHeight;const R=[],et=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],Z=(N,B)=>{for(let K=0;K<52;K++){const at=Math.PI*2*K/52,Ot=2+Math.random()*4.5;R.push({x:N,y:B,vx:Math.cos(at)*Ot,vy:Math.sin(at)*Ot,alpha:1,color:et[Math.floor(Math.random()*et.length)],r:2+Math.random()*2})}};let r=0;const x=setInterval(()=>{Z(p.width*(.15+Math.random()*.7),p.height*(.1+Math.random()*.55)),++r>=7&&clearInterval(x)},320),j=()=>{A.clearRect(0,0,p.width,p.height);for(let N=R.length-1;N>=0;N--){const B=R[N];if(B.x+=B.vx,B.y+=B.vy,B.vy+=.09,B.alpha-=.016,B.alpha<=0){R.splice(N,1);continue}A.globalAlpha=B.alpha,A.fillStyle=B.color,A.beginPath(),A.arc(B.x,B.y,B.r,0,Math.PI*2),A.fill()}A.globalAlpha=1,Kt.current=requestAnimationFrame(j)};return j(),()=>{clearInterval(x),cancelAnimationFrame(Kt.current)}},[W]);const ne=gt.useCallback(p=>{Wt.current&&clearInterval(Wt.current);const A=mf[p];C(p),q(Dd(A.cols*A.rows/2)),vt([]),E(0),G(0),Q(!1),mt(!1),Et(!1)},[]),Qt=gt.useCallback(p=>{const A=D.find(Z=>Z.id===p);if(!A||A.isFlipped||A.isMatched||Vt)return;if(X||Q(!0),ae(),q(Z=>Z.map(r=>r.id===p?{...r,isFlipped:!0}:r)),tt.length===0){vt([p]);return}const R=tt[0],et=D.find(Z=>Z.id===R);vt([]),E(Z=>Z+1),et.symbol===A.symbol?(Ht(),q(Z=>Z.map(r=>r.id===R||r.id===p?{...r,isFlipped:!0,isMatched:!0}:r))):(Et(!0),setTimeout(()=>{q(Z=>Z.map(r=>r.id===R||r.id===p?{...r,isFlipped:!1}:r)),Et(!1)},900))},[D,tt,Vt,X,ae,Ht]),De=p=>`${String(Math.floor(p/60)).padStart(2,"0")}:${String(p%60).padStart(2,"0")}`,je=()=>o.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[o.jsx("path",{d:"M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z",fill:"currentColor"}),o.jsx("circle",{cx:"8",cy:"7",r:"1.6",fill:"currentColor"}),o.jsx("circle",{cx:"11.2",cy:"5.8",r:"1.5",fill:"currentColor"}),o.jsx("circle",{cx:"14.8",cy:"5.8",r:"1.5",fill:"currentColor"}),o.jsx("circle",{cx:"18",cy:"7",r:"1.6",fill:"currentColor"})]}),ue=()=>o.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),o.jsx("path",{d:"M12 7.8v4.8l3.2 1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]});return o.jsxs("div",{className:"memoryGame",children:[o.jsxs("div",{className:"memoryGameHeader",children:[o.jsxs("span",{className:"memoryGameLevel",children:["Lv ",T+1," · ",M.n,"×",M.n]}),o.jsxs("span",{className:"memoryGameStat",children:[o.jsx(je,{})," ",o.jsx("strong",{children:O})]}),o.jsxs("span",{className:"memoryGameStat",children:[o.jsx(ue,{})," ",o.jsx("strong",{children:De(k)})]})]}),o.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${M.cols}, ${M.cell}px)`,gridTemplateRows:`repeat(${M.rows}, ${M.cell}px)`},children:D.map(p=>o.jsx("button",{className:`memoryCard${p.isFlipped||p.isMatched?" flipped":""}${p.isMatched?" matched":""}`,onClick:()=>Qt(p.id),style:{width:M.cell,height:M.cell},"aria-label":p.isFlipped||p.isMatched?p.symbol:"Hidden card",children:o.jsxs("span",{className:"memoryCardInner",children:[o.jsx("span",{className:"memoryCardBack"}),o.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(M.cell*.44)},children:p.symbol})]})},p.id))}),W&&o.jsxs("div",{className:"memoryGameModal",children:[o.jsx("canvas",{ref:_t,className:"memoryGameFireworks"}),o.jsxs("div",{className:"memoryGameModalBox",children:[o.jsx("div",{className:"memoryGameModalEmoji",children:d?"🏆":"🎉"}),o.jsx("div",{className:"memoryGameModalTitle",children:d?"You beat all levels!":`Level ${T+1} clear!`}),o.jsxs("div",{className:"memoryGameModalSub",children:[O," moves · ",De(k)]}),!d&&o.jsx("button",{className:"memoryGameModalBtn",onClick:()=>ne(T+1),children:"Next Level →"}),o.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>ne(0),children:d?"Play Again":"Restart from Lv 1"})]})]})]})}function A1({theme:T,onToggleTheme:C}){return o.jsxs("div",{className:"cvPage",children:[o.jsxs("header",{className:"topbar",children:[o.jsx(hf,{}),o.jsxs("div",{className:"container topbarInner",children:[o.jsx("button",{className:"btn",onClick:()=>Ud("#/"),type:"button",children:"← Back"}),o.jsx("div",{className:"brand",children:o.jsx("span",{children:"Résumé"})}),o.jsxs("div",{className:"rightActions",children:[o.jsx(vf,{theme:T,onToggle:C}),o.jsx("a",{className:"btn primary",href:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf",target:"_blank",rel:"noreferrer",children:"Open in new tab"})]})]})]}),o.jsx("main",{className:"container cvMain",children:o.jsx("iframe",{src:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf#toolbar=0",title:"Resume PDF",className:"cvIframe",loading:"lazy"})})]})}const j1="/my-portfolio/",kt=T=>`${j1}${T.replace(/^\/+/,"")}`,M1=[{id:"p1",title:"FPS Zombie Online",role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:kt("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[kt("/screenshots/fps/1.jpg"),kt("/screenshots/fps/2.jpg"),kt("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:kt("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[kt("/screenshots/tressette/1.jpg"),kt("/screenshots/tressette/2.jpg"),kt("/screenshots/tressette/3.jpg")]},{id:"p3",title:"Thoi Loan Online",role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:kt("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[kt("/screenshots/thoiloan/1.jpg"),kt("/screenshots/thoiloan/2.jpg"),kt("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:kt("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["C++"],previewMp4:kt("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:kt("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}];function N1({src:T,alt:C,onClose:M}){return Rt.useEffect(()=>{const d=D=>{D.key==="Escape"&&M()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[M]),o.jsxs("div",{className:"lightboxOverlay",onClick:M,role:"dialog","aria-modal":"true",children:[o.jsx("img",{className:"lightboxImg",src:T,alt:C,onClick:d=>d.stopPropagation()}),o.jsx("button",{className:"lightboxClose",onClick:M,"aria-label":"Close",children:"×"})]})}function _1({title:T,previewMp4:C,previewGif:M,youtubeUrl:d}){return o.jsxs("div",{className:"previewCard",children:[C?o.jsx("video",{className:"previewMedia",src:C,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${T} preview video`}):M?o.jsx("img",{src:M,alt:`${T} preview`,className:"previewMedia",loading:"lazy"}):o.jsx("div",{className:"previewPlaceholder",children:"No preview"}),d?o.jsx("a",{className:"previewOverlayBtn",href:d,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${T}`,children:"Watch Full Demo"}):null]})}const D1=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Monster Studio - Onesoft",logo:"/my-portfolio/company/onesoft.png",summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Onesoft",logo:"/my-portfolio/company/monkeyjunior.png",summary:"Continued game development experience, deepening expertise in game architecture and optimization.",highlights:["Extended puzzle game development with advanced mechanics.","Optimized game performance and user experience.","Participated in full development cycle from design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",logo:"/my-portfolio/company/vng.png",summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay and online systems for large-scale titles.","Developed metagame features: events, shop flow, and payment-related features.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"Digital Data Center",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Developed FastAPI + PostgreSQL services for scalable online applications.","Operated production systems with Docker and Kubernetes.","Improved delivery efficiency with CI/CD and workflow automation (Airflow)."]},{period:"2025 - Present",title:"Building Multiplayer Side Projects",org:"Independent Development",summary:"Focused on multiplayer game architecture and end-to-end online flow outside of office projects.",highlights:["Built an FPS multiplayer prototype with dedicated-server architecture (Unreal Engine 5).","Built a turn-based online card game with C++ networking and Protocol Buffers.","Explored backend match services, session orchestration, and deployment patterns."]}];function O1({theme:T,onToggleTheme:C}){const[M,d]=Rt.useState(null),[D,q]=Rt.useState("about"),tt=Rt.useMemo(()=>"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world.",[]),[vt,O]=Rt.useState(""),[E,k]=Rt.useState(!1);Rt.useEffect(()=>{let Q=0,W;const mt=()=>{if(k(!1),Q+=1,O(tt.slice(0,Q)),Q>=tt.length){k(!1);return}const Vt=tt[Q-1],Et=Vt==="."?360:Vt===","?140:24;k(Et>24),W=window.setTimeout(mt,Et)};return W=window.setTimeout(mt,24),()=>{k(!1),W!==void 0&&window.clearTimeout(W)}},[tt]),Rt.useEffect(()=>{D!=="projects"&&M&&d(null)},[D,M]);const G=X=>o.jsx("div",{className:`projectList${X?" projectListReveal":""}`,children:M1.map(Q=>o.jsxs("div",{className:`projectItem${X?" projectItemReveal":""}`,children:[o.jsx("div",{className:"projectMedia",children:o.jsx(_1,{title:Q.title,previewMp4:Q.previewMp4,previewGif:Q.previewGif,youtubeUrl:Q.youtubeUrl})}),o.jsxs("div",{className:"projectInfo",children:[o.jsxs("div",{className:"projectTitleRow",children:[o.jsx("h3",{className:"h3",children:Q.title}),Q.role?o.jsx("span",{className:"pill",children:Q.role}):null]}),o.jsx("p",{className:"projectDesc",children:Q.description}),Q.tech?.length?o.jsx("div",{className:"tech",children:Q.tech.map(W=>o.jsx("span",{className:"tag",children:W},W))}):null,o.jsxs("div",{className:"projectActions",children:[Q.githubUrl?o.jsxs("a",{className:"btn btnIcon",href:Q.githubUrl,target:"_blank",rel:"noreferrer",children:[o.jsx(y1,{}),"GitHub"]}):null,Q.downloadUrl?o.jsx("a",{className:"btn primary",href:Q.downloadUrl,target:"_blank",rel:"noreferrer",children:"Download / Play"}):null]})]}),Q.screenshots?.length?o.jsx("div",{className:"screenshots fill3",children:Q.screenshots.slice(0,3).map((W,mt)=>o.jsx("img",{src:W,alt:`${Q.title} screenshot ${mt+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>d({src:W,alt:`${Q.title} screenshot ${mt+1}`})},mt))}):null]},Q.id))},X?"projects-tab-animated":"projects-tab-static");return o.jsxs("div",{className:"page",children:[o.jsxs("header",{className:"topbar",children:[o.jsx(hf,{}),o.jsxs("div",{className:"container topbarInner",children:[o.jsx("a",{className:"brand",href:"#/",children:o.jsx("span",{children:"Portfolio"})}),o.jsxs("nav",{className:"nav",children:[o.jsxs("button",{type:"button",className:`navTabBtn${D==="about"?" active":""}`,onClick:()=>q("about"),children:["About Me",o.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),o.jsxs("button",{type:"button",className:`navTabBtn${D==="projects"?" active":""}`,onClick:()=>q("projects"),children:["Projects",o.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),o.jsxs("button",{type:"button",className:`navTabBtn${D==="career"?" active":""}`,onClick:()=>q("career"),children:["Career",o.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),o.jsx("a",{href:"./NGUYEN_HUY_TRUONG_GE_VNG.pdf",download:!0,className:"navLinkBtn",children:"Résumé"}),o.jsx(vf,{theme:T,onToggle:C})]})]})]}),o.jsxs("main",{className:"container main",children:[D==="about"?o.jsxs("section",{className:"projects",id:"top",children:[o.jsxs("section",{className:"intro",style:{marginBottom:"20px"},children:[o.jsxs("h1",{className:"h3 heroTitle",children:["Hi, I'm ",o.jsx("span",{className:"accent",children:"Truong"})]}),o.jsxs("p",{className:"summary",children:[vt,vt.length<tt.length?o.jsx("span",{className:`typingCursor${E?" paused":""}`,"aria-hidden":"true",children:"|"}):null]})]}),o.jsx(E1,{}),G(!1)]}):null,D==="projects"?o.jsx("section",{id:"projects",className:"projects",children:G(!0)}):null,D==="career"?o.jsx("section",{className:"projects",children:o.jsxs("div",{className:"careerTimeline","aria-label":"Career timeline",children:[o.jsx("span",{className:"careerFlowLabel top",children:"Now"}),o.jsx("span",{className:"careerFlowLabel bottom",children:"Start"}),o.jsx("span",{className:"careerLine","aria-hidden":"true"}),[...D1].reverse().map((X,Q)=>o.jsxs("div",{className:"careerItem",children:[o.jsxs("div",{className:"careerDateWrap",children:[o.jsx("div",{className:"careerDate",children:X.period}),o.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),o.jsxs("article",{className:"careerCard",style:{animationDelay:`${100+Q*110}ms`},children:[X.logo&&o.jsx("img",{src:X.logo,alt:X.org,className:"careerLogo"}),o.jsx("h3",{className:"h3 careerRole",children:X.title}),o.jsx("p",{className:"careerOrg",children:X.org}),o.jsx("p",{className:"careerCardSummary",children:X.summary}),o.jsx("ul",{className:"careerHighlights",children:X.highlights.map(W=>o.jsx("li",{children:W},W))})]})]},X.period))]},"career-tab")}):null]}),o.jsxs("footer",{className:"footer",children:[o.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:o.jsx("span",{className:"footerBaseAccent"})}),o.jsxs("div",{className:"container footerInner",children:[o.jsxs("span",{className:"footerLeft",children:[o.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),o.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:o.jsx(v1,{})}),o.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:o.jsx(h1,{})})]}),o.jsx("span",{className:"muted",children:"React + TypeScript (Vite)"})]})]}),M&&o.jsx(N1,{src:M.src,alt:M.alt,onClose:()=>d(null)})]})}function U1(){const T=localStorage.getItem("theme");return T==="light"||T==="dark"?T:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const C1=`
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

.topbar{
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--surface-solid) 88%, transparent);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid color-mix(in srgb, var(--accent) 28%, var(--border));
  box-shadow: 0 2px 16px color-mix(in srgb, var(--accent) 6%, transparent);
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

.accent{
  color: #c2440a;
  text-shadow: 0 0 18px rgba(194, 68, 10, 0.20);
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
  opacity: 1;
}

.typingCursor.paused{
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
  gap: 28px;
  padding: 40px 0 28px;
}

.careerLine{
  position: absolute;
  left: 158px;
  top: 20px;
  bottom: 24px;
  width: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--text) 18%, transparent);
  z-index: 0;
}

.careerFlowLabel{
  position: absolute;
  left: 158px;
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
  grid-template-columns: 130px 1fr;
  column-gap: 46px;
  align-items: start;
}

.careerDateWrap{
  position: relative;
  min-height: 22px;
}

.careerDate{
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c2440a;
  text-align: right;
  padding-top: 3px;
}

.careerDot{
  position: absolute;
  top: 5px;
  right: -35px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 2px solid #c2440a;
  background: var(--surface-solid);
  z-index: 2;
}

.careerCard{
  position: relative;
  z-index: 1;
  border: 1px solid var(--border);
  border-left: 3px solid #c2440a;
  border-radius: 12px;
  padding: 18px 20px 18px 20px;
  background: var(--surface-solid);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(18px);
  animation: revealUp 680ms cubic-bezier(.19,.82,.28,1) forwards;
}

.careerRole{
  font-size: 18px;
  margin-bottom: 2px;
}

.careerOrg{
  margin: 0;
  color: var(--muted);
  font-weight: 600;
}

.careerCardSummary{
  margin: 10px 0 8px;
  color: var(--muted);
  line-height: 1.7;
}

.careerLogo{
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 12px;
  opacity: 0.9;
}

.careerHighlights{
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  color: var(--text);
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

  .careerTimeline{ padding: 36px 0 24px; }
  .careerLine{ left: 128px; }
  .careerFlowLabel{ left: 128px; }
  .careerItem{
    grid-template-columns: 102px 1fr;
    column-gap: 26px;
  }
  .careerDot{ right: -33px; }
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

  .careerTimeline{ padding-top: 20px; }
  .careerLine,
  .careerFlowLabel{ display: none; }
  .careerItem{
    grid-template-columns: 1fr;
    row-gap: 8px;
  }
  .careerDate{
    text-align: left;
    padding-top: 0;
  }
  .careerDateWrap{ min-height: auto; }
  .careerDot{ display: none; }
  .careerCard{ padding: 12px; }

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
  .careerIntro,
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

`;function R1(){const T=p1(),[C,M]=Rt.useState(()=>U1()),d=Rt.useCallback(()=>{M(D=>D==="dark"?"light":"dark")},[]);return Rt.useEffect(()=>{document.documentElement.dataset.theme=C,localStorage.setItem("theme",C)},[C]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:C1}),o.jsx(m1,{}),T==="cv"?o.jsx(A1,{theme:C,onToggleTheme:d}):T==="career"?o.jsx(S1,{theme:C,onToggleTheme:d}):o.jsx(O1,{theme:C,onToggleTheme:d})]})}d1.createRoot(document.getElementById("root")).render(o.jsx(Rt.StrictMode,{children:o.jsx(R1,{})}));
