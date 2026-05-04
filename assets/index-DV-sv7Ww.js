(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(f){if(f.ep)return;f.ep=!0;const d=i(f);fetch(f.href,d)}})();function ou(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ns={exports:{}},xi={};var Dh;function gx(){if(Dh)return xi;Dh=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(u,f,d){var c=null;if(d!==void 0&&(c=""+d),f.key!==void 0&&(c=""+f.key),"key"in f){d={};for(var h in f)h!=="key"&&(d[h]=f[h])}else d=f;return f=d.ref,{$$typeof:l,type:u,key:c,ref:f!==void 0?f:null,props:d}}return xi.Fragment=r,xi.jsx=i,xi.jsxs=i,xi}var _h;function xx(){return _h||(_h=1,Ns.exports=gx()),Ns.exports}var g=xx(),Ms={exports:{}},xe={};var Oh;function yx(){if(Oh)return xe;Oh=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,X={};function D(T,Y,w){this.props=T,this.context=Y,this.refs=X,this.updater=w||j}D.prototype.isReactComponent={},D.prototype.setState=function(T,Y){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Y,"setState")},D.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function L(){}L.prototype=D.prototype;function M(T,Y,w){this.props=T,this.context=Y,this.refs=X,this.updater=w||j}var W=M.prototype=new L;W.constructor=M,q(W,D.prototype),W.isPureReactComponent=!0;var ee=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function pe(T,Y,w){var J=w.ref;return{$$typeof:l,type:T,key:Y,ref:J!==void 0?J:null,props:w}}function U(T,Y){return pe(T.type,Y,T.props)}function ne(T){return typeof T=="object"&&T!==null&&T.$$typeof===l}function te(T){var Y={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(w){return Y[w]})}var Se=/\/+/g;function re(T,Y){return typeof T=="object"&&T!==null&&T.key!=null?te(""+T.key):Y.toString(36)}function $(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(B,B):(T.status="pending",T.then(function(Y){T.status==="pending"&&(T.status="fulfilled",T.value=Y)},function(Y){T.status==="pending"&&(T.status="rejected",T.reason=Y)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function A(T,Y,w,J,ae){var oe=typeof T;(oe==="undefined"||oe==="boolean")&&(T=null);var ke=!1;if(T===null)ke=!0;else switch(oe){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(T.$$typeof){case l:case r:ke=!0;break;case b:return ke=T._init,A(ke(T._payload),Y,w,J,ae)}}if(ke)return ae=ae(T),ke=J===""?"."+re(T,0):J,ee(ae)?(w="",ke!=null&&(w=ke.replace(Se,"$&/")+"/"),A(ae,Y,w,"",function(Gt){return Gt})):ae!=null&&(ne(ae)&&(ae=U(ae,w+(ae.key==null||T&&T.key===ae.key?"":(""+ae.key).replace(Se,"$&/")+"/")+ke)),Y.push(ae)),1;ke=0;var Ye=J===""?".":J+":";if(ee(T))for(var Be=0;Be<T.length;Be++)J=T[Be],oe=Ye+re(J,Be),ke+=A(J,Y,w,oe,ae);else if(Be=k(T),typeof Be=="function")for(T=Be.call(T),Be=0;!(J=T.next()).done;)J=J.value,oe=Ye+re(J,Be++),ke+=A(J,Y,w,oe,ae);else if(oe==="object"){if(typeof T.then=="function")return A($(T),Y,w,J,ae);throw Y=String(T),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ke}function Z(T,Y,w){if(T==null)return T;var J=[],ae=0;return A(T,J,"","",function(oe){return Y.call(w,oe,ae++)}),J}function le(T){if(T._status===-1){var Y=T._result;Y=Y(),Y.then(function(w){(T._status===0||T._status===-1)&&(T._status=1,T._result=w)},function(w){(T._status===0||T._status===-1)&&(T._status=2,T._result=w)}),T._status===-1&&(T._status=0,T._result=Y)}if(T._status===1)return T._result.default;throw T._result}var me=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},E={map:Z,forEach:function(T,Y,w){Z(T,function(){Y.apply(this,arguments)},w)},count:function(T){var Y=0;return Z(T,function(){Y++}),Y},toArray:function(T){return Z(T,function(Y){return Y})||[]},only:function(T){if(!ne(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return xe.Activity=y,xe.Children=E,xe.Component=D,xe.Fragment=i,xe.Profiler=f,xe.PureComponent=M,xe.StrictMode=u,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,xe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return F.H.useMemoCache(T)}},xe.cache=function(T){return function(){return T.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(T,Y,w){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var J=q({},T.props),ae=T.key;if(Y!=null)for(oe in Y.key!==void 0&&(ae=""+Y.key),Y)!se.call(Y,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Y.ref===void 0||(J[oe]=Y[oe]);var oe=arguments.length-2;if(oe===1)J.children=w;else if(1<oe){for(var ke=Array(oe),Ye=0;Ye<oe;Ye++)ke[Ye]=arguments[Ye+2];J.children=ke}return pe(T.type,ae,J)},xe.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},xe.createElement=function(T,Y,w){var J,ae={},oe=null;if(Y!=null)for(J in Y.key!==void 0&&(oe=""+Y.key),Y)se.call(Y,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ae[J]=Y[J]);var ke=arguments.length-2;if(ke===1)ae.children=w;else if(1<ke){for(var Ye=Array(ke),Be=0;Be<ke;Be++)Ye[Be]=arguments[Be+2];ae.children=Ye}if(T&&T.defaultProps)for(J in ke=T.defaultProps,ke)ae[J]===void 0&&(ae[J]=ke[J]);return pe(T,oe,ae)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(T){return{$$typeof:h,render:T}},xe.isValidElement=ne,xe.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:le}},xe.memo=function(T,Y){return{$$typeof:p,type:T,compare:Y===void 0?null:Y}},xe.startTransition=function(T){var Y=F.T,w={};F.T=w;try{var J=T(),ae=F.S;ae!==null&&ae(w,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,me)}catch(oe){me(oe)}finally{Y!==null&&w.types!==null&&(Y.types=w.types),F.T=Y}},xe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},xe.use=function(T){return F.H.use(T)},xe.useActionState=function(T,Y,w){return F.H.useActionState(T,Y,w)},xe.useCallback=function(T,Y){return F.H.useCallback(T,Y)},xe.useContext=function(T){return F.H.useContext(T)},xe.useDebugValue=function(){},xe.useDeferredValue=function(T,Y){return F.H.useDeferredValue(T,Y)},xe.useEffect=function(T,Y){return F.H.useEffect(T,Y)},xe.useEffectEvent=function(T){return F.H.useEffectEvent(T)},xe.useId=function(){return F.H.useId()},xe.useImperativeHandle=function(T,Y,w){return F.H.useImperativeHandle(T,Y,w)},xe.useInsertionEffect=function(T,Y){return F.H.useInsertionEffect(T,Y)},xe.useLayoutEffect=function(T,Y){return F.H.useLayoutEffect(T,Y)},xe.useMemo=function(T,Y){return F.H.useMemo(T,Y)},xe.useOptimistic=function(T,Y){return F.H.useOptimistic(T,Y)},xe.useReducer=function(T,Y,w){return F.H.useReducer(T,Y,w)},xe.useRef=function(T){return F.H.useRef(T)},xe.useState=function(T){return F.H.useState(T)},xe.useSyncExternalStore=function(T,Y,w){return F.H.useSyncExternalStore(T,Y,w)},xe.useTransition=function(){return F.H.useTransition()},xe.version="19.2.3",xe}var Lh;function pc(){return Lh||(Lh=1,Ms.exports=yx()),Ms.exports}var Ie=pc();const ge=ou(Ie);var Ds={exports:{}},yi={},_s={exports:{}},Os={};var Rh;function bx(){return Rh||(Rh=1,(function(l){function r(A,Z){var le=A.length;A.push(Z);e:for(;0<le;){var me=le-1>>>1,E=A[me];if(0<f(E,Z))A[me]=Z,A[le]=E,le=me;else break e}}function i(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var Z=A[0],le=A.pop();if(le!==Z){A[0]=le;e:for(var me=0,E=A.length,T=E>>>1;me<T;){var Y=2*(me+1)-1,w=A[Y],J=Y+1,ae=A[J];if(0>f(w,le))J<E&&0>f(ae,w)?(A[me]=ae,A[J]=le,me=J):(A[me]=w,A[Y]=le,me=Y);else if(J<E&&0>f(ae,le))A[me]=ae,A[J]=le,me=J;else break e}}return Z}function f(A,Z){var le=A.sortIndex-Z.sortIndex;return le!==0?le:A.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var c=Date,h=c.now();l.unstable_now=function(){return c.now()-h}}var m=[],p=[],b=1,y=null,v=3,k=!1,j=!1,q=!1,X=!1,D=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function W(A){for(var Z=i(p);Z!==null;){if(Z.callback===null)u(p);else if(Z.startTime<=A)u(p),Z.sortIndex=Z.expirationTime,r(m,Z);else break;Z=i(p)}}function ee(A){if(q=!1,W(A),!j)if(i(m)!==null)j=!0,B||(B=!0,te());else{var Z=i(p);Z!==null&&$(ee,Z.startTime-A)}}var B=!1,F=-1,se=5,pe=-1;function U(){return X?!0:!(l.unstable_now()-pe<se)}function ne(){if(X=!1,B){var A=l.unstable_now();pe=A;var Z=!0;try{e:{j=!1,q&&(q=!1,L(F),F=-1),k=!0;var le=v;try{t:{for(W(A),y=i(m);y!==null&&!(y.expirationTime>A&&U());){var me=y.callback;if(typeof me=="function"){y.callback=null,v=y.priorityLevel;var E=me(y.expirationTime<=A);if(A=l.unstable_now(),typeof E=="function"){y.callback=E,W(A),Z=!0;break t}y===i(m)&&u(m),W(A)}else u(m);y=i(m)}if(y!==null)Z=!0;else{var T=i(p);T!==null&&$(ee,T.startTime-A),Z=!1}}break e}finally{y=null,v=le,k=!1}Z=void 0}}finally{Z?te():B=!1}}}var te;if(typeof M=="function")te=function(){M(ne)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,re=Se.port2;Se.port1.onmessage=ne,te=function(){re.postMessage(null)}}else te=function(){D(ne,0)};function $(A,Z){F=D(function(){A(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(A){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var le=v;v=Z;try{return A()}finally{v=le}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(A,Z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var le=v;v=A;try{return Z()}finally{v=le}},l.unstable_scheduleCallback=function(A,Z,le){var me=l.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?me+le:me):le=me,A){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=le+E,A={id:b++,callback:Z,priorityLevel:A,startTime:le,expirationTime:E,sortIndex:-1},le>me?(A.sortIndex=le,r(p,A),i(m)===null&&A===i(p)&&(q?(L(F),F=-1):q=!0,$(ee,le-me))):(A.sortIndex=E,r(m,A),j||k||(j=!0,B||(B=!0,te()))),A},l.unstable_shouldYield=U,l.unstable_wrapCallback=function(A){var Z=v;return function(){var le=v;v=Z;try{return A.apply(this,arguments)}finally{v=le}}}})(Os)),Os}var Bh;function vx(){return Bh||(Bh=1,_s.exports=bx()),_s.exports}var Ls={exports:{}},mt={};var Uh;function Sx(){if(Uh)return mt;Uh=1;var l=pc();function r(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(m,p,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:y==null?null:""+y,children:m,containerInfo:p,implementation:b}}var c=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,mt.createPortal=function(m,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return d(m,p,null,b)},mt.flushSync=function(m){var p=c.T,b=u.p;try{if(c.T=null,u.p=2,m)return m()}finally{c.T=p,u.p=b,u.d.f()}},mt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(m,p))},mt.prefetchDNS=function(m){typeof m=="string"&&u.d.D(m)},mt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var b=p.as,y=h(b,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?u.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:k}):b==="script"&&u.d.X(m,{crossOrigin:y,integrity:v,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},mt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=h(p.as,p.crossOrigin);u.d.M(m,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(m)},mt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,y=h(b,p.crossOrigin);u.d.L(m,b,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},mt.preloadModule=function(m,p){if(typeof m=="string")if(p){var b=h(p.as,p.crossOrigin);u.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(m)},mt.requestFormReset=function(m){u.d.r(m)},mt.unstable_batchedUpdates=function(m,p){return m(p)},mt.useFormState=function(m,p,b){return c.H.useFormState(m,p,b)},mt.useFormStatus=function(){return c.H.useHostTransitionStatus()},mt.version="19.2.3",mt}var Hh;function kx(){if(Hh)return Ls.exports;Hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ls.exports=Sx(),Ls.exports}var qh;function wx(){if(qh)return yi;qh=1;var l=vx(),r=pc(),i=kx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(u(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return m(o),e;if(s===a)return m(o),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=s;else{for(var x=!1,S=o.child;S;){if(S===n){x=!0,n=o,a=s;break}if(S===a){x=!0,a=o,n=s;break}S=S.sibling}if(!x){for(S=s.child;S;){if(S===n){x=!0,n=s,a=o;break}if(S===a){x=!0,a=s,n=o;break}S=S.sibling}if(!x)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),M=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case D:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case B:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case M:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var $=Array.isArray,A=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},me=[],E=-1;function T(e){return{current:e}}function Y(e){0>E||(e.current=me[E],me[E]=null,E--)}function w(e,t){E++,me[E]=e.current,e.current=t}var J=T(null),ae=T(null),oe=T(null),ke=T(null);function Ye(e,t){switch(w(oe,t),w(ae,e),w(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=th(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(J),w(J,e)}function Be(){Y(J),Y(ae),Y(oe)}function Gt(e){e.memoizedState!==null&&w(ke,e);var t=J.current,n=nh(t,e.type);t!==n&&(w(ae,e),w(J,n))}function dn(e){ae.current===e&&(Y(J),Y(ae)),ke.current===e&&(Y(ke),pi._currentValue=le)}var Ea,_i;function pn(e){if(Ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ea=t&&t[1]||"",_i=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ea+e+_i}var zl=!1;function Al(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var R=H}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(H){R=H}e.call(Q.prototype)}}else{try{throw Error()}catch(H){R=H}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&R&&typeof H.stack=="string")return[H.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),x=s[0],S=s[1];if(x&&S){var C=x.split(`
`),O=S.split(`
`);for(o=a=0;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(a===C.length||o===O.length)for(a=C.length-1,o=O.length-1;1<=a&&0<=o&&C[a]!==O[o];)o--;for(;1<=a&&0<=o;a--,o--)if(C[a]!==O[o]){if(a!==1||o!==1)do if(a--,o--,0>o||C[a]!==O[o]){var G=`
`+C[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=o);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pn(n):""}function Oi(e,t){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==t&&t!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Al(e.type,!1);case 11:return Al(e.type.render,!1);case 1:return Al(e.type,!0);case 31:return pn("Activity");default:return""}}function Li(e){try{var t="",n=null;do t+=Oi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Nl=Object.prototype.hasOwnProperty,Ml=l.unstable_scheduleCallback,Ta=l.unstable_cancelCallback,hu=l.unstable_shouldYield,mu=l.unstable_requestPaint,yt=l.unstable_now,gu=l.unstable_getCurrentPriorityLevel,V=l.unstable_ImmediatePriority,P=l.unstable_UserBlockingPriority,he=l.unstable_NormalPriority,we=l.unstable_LowPriority,Oe=l.unstable_IdlePriority,Dt=l.log,hn=l.unstable_setDisableYieldValue,bt=null,it=null;function kt(e){if(typeof Dt=="function"&&hn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(bt,e)}catch{}}var Ge=Math.clz32?Math.clz32:n1,On=Math.log,en=Math.LN2;function n1(e){return e>>>=0,e===0?32:31-(On(e)/en|0)|0}var Ri=256,Bi=262144,Ui=4194304;function ul(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,s=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var S=a&134217727;return S!==0?(a=S&~s,a!==0?o=ul(a):(x&=S,x!==0?o=ul(x):n||(n=S&~e,n!==0&&(o=ul(n))))):(S=a&~s,S!==0?o=ul(S):x!==0?o=ul(x):n||(n=a&~e,n!==0&&(o=ul(n)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:o}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function l1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lc(){var e=Ui;return Ui<<=1,(Ui&62914560)===0&&(Ui=4194304),e}function xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ja(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function a1(e,t,n,a,o,s){var x=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var S=e.entanglements,C=e.expirationTimes,O=e.hiddenUpdates;for(n=x&~n;0<n;){var G=31-Ge(n),Q=1<<G;S[G]=0,C[G]=-1;var R=O[G];if(R!==null)for(O[G]=null,G=0;G<R.length;G++){var H=R[G];H!==null&&(H.lane&=-536870913)}n&=~Q}a!==0&&Rc(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(x&~t))}function Rc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ge(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ge(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Uc(e,t){var n=t&-t;return n=(n&42)!==0?1:yu(n),(n&(e.suspendedLanes|t))!==0?0:n}function yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hc(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Th(e.type))}function qc(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Ln=Math.random().toString(36).slice(2),ct="__reactFiber$"+Ln,wt="__reactProps$"+Ln,Dl="__reactContainer$"+Ln,vu="__reactEvents$"+Ln,i1="__reactListeners$"+Ln,r1="__reactHandles$"+Ln,Yc="__reactResources$"+Ln,za="__reactMarker$"+Ln;function Su(e){delete e[ct],delete e[wt],delete e[vu],delete e[i1],delete e[r1]}function _l(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dl]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sh(e);e!==null;){if(n=e[ct])return n;e=sh(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){if(e=e[ct]||e[Dl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Aa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ll(e){var t=e[Yc];return t||(t=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[za]=!0}var Gc=new Set,Vc={};function ol(e,t){Rl(e,t),Rl(e+"Capture",t)}function Rl(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var u1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ic={},Xc={};function o1(e){return Nl.call(Xc,e)?!0:Nl.call(Ic,e)?!1:u1.test(e)?Xc[e]=!0:(Ic[e]=!0,!1)}function qi(e,t,n){if(o1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s1(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(x){n=""+x,s.call(this,x)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(x){n=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ku(e){if(!e._valueTracker){var t=Qc(e)?"checked":"value";e._valueTracker=s1(e,t,""+e[t])}}function Zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Qc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var c1=/[\n"\\]/g;function It(e){return e.replace(c1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wu(e,t,n,a,o,s,x,S){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?Eu(e,x,Vt(t)):n!=null?Eu(e,x,Vt(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Vt(S):e.removeAttribute("name")}function Fc(e,t,n,a,o,s,x,S){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ku(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,S||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=S?e.checked:!!a,e.defaultChecked=!!a,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ku(e)}function Eu(e,t,n){t==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bl(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Kc(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Jc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if($(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ku(e)}function Ul(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var f1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $c(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||f1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Wc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&$c(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&$c(e,s,t[s])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return p1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var Cu=null;function ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,ql=null;function Pc(e){var t=Ol(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(wu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[wt]||null;if(!o)throw Error(u(90));wu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Zc(a)}break e;case"textarea":Kc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bl(e,!!n.multiple,t,!1)}}}var zu=!1;function ef(e,t,n){if(zu)return e(t,n);zu=!0;try{var a=e(t);return a}finally{if(zu=!1,(Hl!==null||ql!==null)&&(Nr(),Hl&&(t=Hl,e=ql,ql=Hl=null,Pc(t),e)))for(t=0;t<e.length;t++)Pc(e[t])}}function Na(e,t){var n=e.stateNode;if(n===null)return null;var a=n[wt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(xn)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Au=!1}var Rn=null,Nu=null,Ii=null;function tf(){if(Ii)return Ii;var e,t=Nu,n=t.length,a,o="value"in Rn?Rn.value:Rn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var x=n-e;for(a=1;a<=x&&t[n-a]===o[s-a];a++);return Ii=o.slice(e,1<a?1-a:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function nf(){return!1}function Et(e){function t(n,a,o,s,x){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=x,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(n=e[S],this[S]=n?n(s):s[S]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qi:nf,this.isPropagationStopped=nf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Et(sl),Da=y({},sl,{view:0,detail:0}),h1=Et(Da),Mu,Du,_a,Fi=y({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_a&&(_a&&e.type==="mousemove"?(Mu=e.screenX-_a.screenX,Du=e.screenY-_a.screenY):Du=Mu=0,_a=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),lf=Et(Fi),m1=y({},Fi,{dataTransfer:0}),g1=Et(m1),x1=y({},Da,{relatedTarget:0}),_u=Et(x1),y1=y({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=Et(y1),v1=y({},sl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S1=Et(v1),k1=y({},sl,{data:0}),af=Et(k1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T1[e])?!!t[e]:!1}function Ou(){return C1}var j1=y({},Da,{key:function(e){if(e.key){var t=w1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z1=Et(j1),A1=y({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=Et(A1),N1=y({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),M1=Et(N1),D1=y({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=Et(D1),O1=y({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L1=Et(O1),R1=y({},sl,{newState:0,oldState:0}),B1=Et(R1),U1=[9,13,27,32],Lu=xn&&"CompositionEvent"in window,Oa=null;xn&&"documentMode"in document&&(Oa=document.documentMode);var H1=xn&&"TextEvent"in window&&!Oa,uf=xn&&(!Lu||Oa&&8<Oa&&11>=Oa),of=" ",sf=!1;function cf(e,t){switch(e){case"keyup":return U1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yl=!1;function q1(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(sf=!0,of);case"textInput":return e=t.data,e===of&&sf?null:e;default:return null}}function Y1(e,t){if(Yl)return e==="compositionend"||!Lu&&cf(e,t)?(e=tf(),Ii=Nu=Rn=null,Yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var G1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G1[e.type]:t==="textarea"}function pf(e,t,n,a){Hl?ql?ql.push(a):ql=[a]:Hl=a,t=Br(t,"onChange"),0<t.length&&(n=new Zi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var La=null,Ra=null;function V1(e){Kp(e,0)}function Ki(e){var t=Aa(e);if(Zc(t))return e}function hf(e,t){if(e==="change")return t}var mf=!1;if(xn){var Ru;if(xn){var Bu="oninput"in document;if(!Bu){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),Bu=typeof gf.oninput=="function"}Ru=Bu}else Ru=!1;mf=Ru&&(!document.documentMode||9<document.documentMode)}function xf(){La&&(La.detachEvent("onpropertychange",yf),Ra=La=null)}function yf(e){if(e.propertyName==="value"&&Ki(Ra)){var t=[];pf(t,Ra,e,ju(e)),ef(V1,t)}}function I1(e,t,n){e==="focusin"?(xf(),La=t,Ra=n,La.attachEvent("onpropertychange",yf)):e==="focusout"&&xf()}function X1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Ra)}function Q1(e,t){if(e==="click")return Ki(t)}function Z1(e,t){if(e==="input"||e==="change")return Ki(t)}function F1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:F1;function Ba(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Nl.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vf(e,t){var n=bf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bf(n)}}function Sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var K1=xn&&"documentMode"in document&&11>=document.documentMode,Gl=null,Hu=null,Ua=null,qu=!1;function wf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||Gl==null||Gl!==Gi(a)||(a=Gl,"selectionStart"in a&&Uu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&Ba(Ua,a)||(Ua=a,a=Br(Hu,"onSelect"),0<a.length&&(t=new Zi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Gl)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vl={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionrun:cl("Transition","TransitionRun"),transitionstart:cl("Transition","TransitionStart"),transitioncancel:cl("Transition","TransitionCancel"),transitionend:cl("Transition","TransitionEnd")},Yu={},Ef={};xn&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function fl(e){if(Yu[e])return Yu[e];if(!Vl[e])return e;var t=Vl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ef)return Yu[e]=t[n];return e}var Tf=fl("animationend"),Cf=fl("animationiteration"),jf=fl("animationstart"),J1=fl("transitionrun"),$1=fl("transitionstart"),W1=fl("transitioncancel"),zf=fl("transitionend"),Af=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function tn(e,t){Af.set(e,t),ol(t,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xt=[],Il=0,Vu=0;function $i(){for(var e=Il,t=Vu=Il=0;t<e;){var n=Xt[t];Xt[t++]=null;var a=Xt[t];Xt[t++]=null;var o=Xt[t];Xt[t++]=null;var s=Xt[t];if(Xt[t++]=null,a!==null&&o!==null){var x=a.pending;x===null?o.next=o:(o.next=x.next,x.next=o),a.pending=o}s!==0&&Nf(n,o,s)}}function Wi(e,t,n,a){Xt[Il++]=e,Xt[Il++]=t,Xt[Il++]=n,Xt[Il++]=a,Vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Iu(e,t,n,a){return Wi(e,t,n,a),Pi(e)}function dl(e,t){return Wi(e,null,null,t),Pi(e)}function Nf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-Ge(n),e=s.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),s):null}function Pi(e){if(50<ri)throw ri=0,es=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xl={};function P1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new P1(e,t,n,a)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function er(e,t,n,a,o,s){var x=0;if(a=e,typeof e=="function")Xu(e)&&(x=1);else if(typeof e=="string")x=ax(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=Ot(31,n,t,o),e.elementType=pe,e.lanes=s,e;case q:return pl(n.children,o,s,t);case X:x=8,o|=24;break;case D:return e=Ot(12,n,t,o|2),e.elementType=D,e.lanes=s,e;case ee:return e=Ot(13,n,t,o),e.elementType=ee,e.lanes=s,e;case B:return e=Ot(19,n,t,o),e.elementType=B,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:x=10;break e;case L:x=9;break e;case W:x=11;break e;case F:x=14;break e;case se:x=16,a=null;break e}x=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ot(x,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function pl(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function Qu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Df(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Zu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _f=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=_f.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Li(t)},_f.set(e,t),t)}return{value:e,source:t,stack:Li(t)}}var Ql=[],Zl=0,tr=null,Ha=0,Zt=[],Ft=0,Bn=null,rn=1,un="";function bn(e,t){Ql[Zl++]=Ha,Ql[Zl++]=tr,tr=e,Ha=t}function Of(e,t,n){Zt[Ft++]=rn,Zt[Ft++]=un,Zt[Ft++]=Bn,Bn=e;var a=rn;e=un;var o=32-Ge(a)-1;a&=~(1<<o),n+=1;var s=32-Ge(t)+o;if(30<s){var x=o-o%5;s=(a&(1<<x)-1).toString(32),a>>=x,o-=x,rn=1<<32-Ge(t)+o|n<<o|a,un=s+e}else rn=1<<s|n<<o|a,un=e}function Fu(e){e.return!==null&&(bn(e,1),Of(e,1,0))}function Ku(e){for(;e===tr;)tr=Ql[--Zl],Ql[Zl]=null,Ha=Ql[--Zl],Ql[Zl]=null;for(;e===Bn;)Bn=Zt[--Ft],Zt[Ft]=null,un=Zt[--Ft],Zt[Ft]=null,rn=Zt[--Ft],Zt[Ft]=null}function Lf(e,t){Zt[Ft++]=rn,Zt[Ft++]=un,Zt[Ft++]=Bn,rn=t.id,un=t.overflow,Bn=e}var ft=null,Ze=null,Ae=!1,Un=null,Kt=!1,Ju=Error(u(519));function Hn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qa(Qt(t,e)),Ju}function Rf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ct]=e,t[wt]=a,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<oi.length;n++)Te(oi[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),Fc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),Jc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Pp(t.textContent,n)?(a.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),a.onScroll!=null&&Te("scroll",t),a.onScrollEnd!=null&&Te("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Hn(e,!0)}function Bf(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ft=ft.return}}function Fl(e){if(e!==ft)return!1;if(!Ae)return Bf(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ms(e.type,e.memoizedProps)),n=!n),n&&Ze&&Hn(e),Bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=oh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=oh(e)}else t===27?(t=Ze,Pn(e.type)?(e=vs,vs=null,Ze=e):Ze=t):Ze=ft?$t(e.stateNode.nextSibling):null;return!0}function hl(){Ze=ft=null,Ae=!1}function $u(){var e=Un;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),Un=null),e}function qa(e){Un===null?Un=[e]:Un.push(e)}var Wu=T(null),ml=null,vn=null;function qn(e,t,n){w(Wu,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=Wu.current,Y(Wu)}function Pu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function eo(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var x=o.child;s=s.firstContext;e:for(;s!==null;){var S=s;s=o;for(var C=0;C<t.length;C++)if(S.context===t[C]){s.lanes|=n,S=s.alternate,S!==null&&(S.lanes|=n),Pu(s.return,n,e),a||(x=null);break e}s=S.next}}else if(o.tag===18){if(x=o.return,x===null)throw Error(u(341));x.lanes|=n,s=x.alternate,s!==null&&(s.lanes|=n),Pu(x,n,e),x=null}else x=o.child;if(x!==null)x.return=o;else for(x=o;x!==null;){if(x===e){x=null;break}if(o=x.sibling,o!==null){o.return=x.return,x=o;break}x=x.return}o=x}}function Kl(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var x=o.alternate;if(x===null)throw Error(u(387));if(x=x.memoizedProps,x!==null){var S=o.type;_t(o.pendingProps.value,x.value)||(e!==null?e.push(S):e=[S])}}else if(o===ke.current){if(x=o.alternate,x===null)throw Error(u(387));x.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(pi):e=[pi])}o=o.return}e!==null&&eo(t,e,n,a),t.flags|=262144}function nr(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){ml=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return Uf(ml,e)}function lr(e,t){return ml===null&&gl(e),Uf(e,t)}function Uf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vn===null){if(e===null)throw Error(u(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return n}var e0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},t0=l.unstable_scheduleCallback,n0=l.unstable_NormalPriority,et={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new e0,data:new Map,refCount:0}}function Ya(e){e.refCount--,e.refCount===0&&t0(n0,function(){e.controller.abort()})}var Ga=null,no=0,Jl=0,$l=null;function l0(e,t){if(Ga===null){var n=Ga=[];no=0,Jl=rs(),$l={status:"pending",value:void 0,then:function(a){n.push(a)}}}return no++,t.then(Hf,Hf),t}function Hf(){if(--no===0&&Ga!==null){$l!==null&&($l.status="fulfilled");var e=Ga;Ga=null,Jl=0,$l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function a0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var qf=A.S;A.S=function(e,t){wp=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&l0(e,t),qf!==null&&qf(e,t)};var xl=T(null);function lo(){var e=xl.current;return e!==null?e:Ve.pooledCache}function ar(e,t){t===null?w(xl,xl.current):w(xl,t.pool)}function Yf(){var e=lo();return e===null?null:{parent:et._currentValue,pool:e}}var Wl=Error(u(460)),ao=Error(u(474)),ir=Error(u(542)),rr={then:function(){}};function Gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xf(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xf(e),e}throw bl=t,Wl}}function yl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(bl=n,Wl):n}}var bl=null;function If(){if(bl===null)throw Error(u(459));var e=bl;return bl=null,e}function Xf(e){if(e===Wl||e===ir)throw Error(u(483))}var Pl=null,Va=0;function ur(e){var t=Va;return Va+=1,Pl===null&&(Pl=[]),Vf(Pl,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===v?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qf(e){function t(N,z){if(e){var _=N.deletions;_===null?(N.deletions=[z],N.flags|=16):_.push(z)}}function n(N,z){if(!e)return null;for(;z!==null;)t(N,z),z=z.sibling;return null}function a(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function o(N,z){return N=yn(N,z),N.index=0,N.sibling=null,N}function s(N,z,_){return N.index=_,e?(_=N.alternate,_!==null?(_=_.index,_<z?(N.flags|=67108866,z):_):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function x(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function S(N,z,_,I){return z===null||z.tag!==6?(z=Qu(_,N.mode,I),z.return=N,z):(z=o(z,_),z.return=N,z)}function C(N,z,_,I){var ce=_.type;return ce===q?G(N,z,_.props.children,I,_.key):z!==null&&(z.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===se&&yl(ce)===z.type)?(z=o(z,_.props),Ia(z,_),z.return=N,z):(z=er(_.type,_.key,_.props,null,N.mode,I),Ia(z,_),z.return=N,z)}function O(N,z,_,I){return z===null||z.tag!==4||z.stateNode.containerInfo!==_.containerInfo||z.stateNode.implementation!==_.implementation?(z=Zu(_,N.mode,I),z.return=N,z):(z=o(z,_.children||[]),z.return=N,z)}function G(N,z,_,I,ce){return z===null||z.tag!==7?(z=pl(_,N.mode,I,ce),z.return=N,z):(z=o(z,_),z.return=N,z)}function Q(N,z,_){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Qu(""+z,N.mode,_),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case k:return _=er(z.type,z.key,z.props,null,N.mode,_),Ia(_,z),_.return=N,_;case j:return z=Zu(z,N.mode,_),z.return=N,z;case se:return z=yl(z),Q(N,z,_)}if($(z)||te(z))return z=pl(z,N.mode,_,null),z.return=N,z;if(typeof z.then=="function")return Q(N,ur(z),_);if(z.$$typeof===M)return Q(N,lr(N,z),_);or(N,z)}return null}function R(N,z,_,I){var ce=z!==null?z.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return ce!==null?null:S(N,z,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case k:return _.key===ce?C(N,z,_,I):null;case j:return _.key===ce?O(N,z,_,I):null;case se:return _=yl(_),R(N,z,_,I)}if($(_)||te(_))return ce!==null?null:G(N,z,_,I,null);if(typeof _.then=="function")return R(N,z,ur(_),I);if(_.$$typeof===M)return R(N,z,lr(N,_),I);or(N,_)}return null}function H(N,z,_,I,ce){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return N=N.get(_)||null,S(z,N,""+I,ce);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case k:return N=N.get(I.key===null?_:I.key)||null,C(z,N,I,ce);case j:return N=N.get(I.key===null?_:I.key)||null,O(z,N,I,ce);case se:return I=yl(I),H(N,z,_,I,ce)}if($(I)||te(I))return N=N.get(_)||null,G(z,N,I,ce,null);if(typeof I.then=="function")return H(N,z,_,ur(I),ce);if(I.$$typeof===M)return H(N,z,_,lr(z,I),ce);or(z,I)}return null}function ie(N,z,_,I){for(var ce=null,Me=null,ue=z,be=z=0,ze=null;ue!==null&&be<_.length;be++){ue.index>be?(ze=ue,ue=null):ze=ue.sibling;var De=R(N,ue,_[be],I);if(De===null){ue===null&&(ue=ze);break}e&&ue&&De.alternate===null&&t(N,ue),z=s(De,z,be),Me===null?ce=De:Me.sibling=De,Me=De,ue=ze}if(be===_.length)return n(N,ue),Ae&&bn(N,be),ce;if(ue===null){for(;be<_.length;be++)ue=Q(N,_[be],I),ue!==null&&(z=s(ue,z,be),Me===null?ce=ue:Me.sibling=ue,Me=ue);return Ae&&bn(N,be),ce}for(ue=a(ue);be<_.length;be++)ze=H(ue,N,be,_[be],I),ze!==null&&(e&&ze.alternate!==null&&ue.delete(ze.key===null?be:ze.key),z=s(ze,z,be),Me===null?ce=ze:Me.sibling=ze,Me=ze);return e&&ue.forEach(function(al){return t(N,al)}),Ae&&bn(N,be),ce}function de(N,z,_,I){if(_==null)throw Error(u(151));for(var ce=null,Me=null,ue=z,be=z=0,ze=null,De=_.next();ue!==null&&!De.done;be++,De=_.next()){ue.index>be?(ze=ue,ue=null):ze=ue.sibling;var al=R(N,ue,De.value,I);if(al===null){ue===null&&(ue=ze);break}e&&ue&&al.alternate===null&&t(N,ue),z=s(al,z,be),Me===null?ce=al:Me.sibling=al,Me=al,ue=ze}if(De.done)return n(N,ue),Ae&&bn(N,be),ce;if(ue===null){for(;!De.done;be++,De=_.next())De=Q(N,De.value,I),De!==null&&(z=s(De,z,be),Me===null?ce=De:Me.sibling=De,Me=De);return Ae&&bn(N,be),ce}for(ue=a(ue);!De.done;be++,De=_.next())De=H(ue,N,be,De.value,I),De!==null&&(e&&De.alternate!==null&&ue.delete(De.key===null?be:De.key),z=s(De,z,be),Me===null?ce=De:Me.sibling=De,Me=De);return e&&ue.forEach(function(mx){return t(N,mx)}),Ae&&bn(N,be),ce}function qe(N,z,_,I){if(typeof _=="object"&&_!==null&&_.type===q&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case k:e:{for(var ce=_.key;z!==null;){if(z.key===ce){if(ce=_.type,ce===q){if(z.tag===7){n(N,z.sibling),I=o(z,_.props.children),I.return=N,N=I;break e}}else if(z.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===se&&yl(ce)===z.type){n(N,z.sibling),I=o(z,_.props),Ia(I,_),I.return=N,N=I;break e}n(N,z);break}else t(N,z);z=z.sibling}_.type===q?(I=pl(_.props.children,N.mode,I,_.key),I.return=N,N=I):(I=er(_.type,_.key,_.props,null,N.mode,I),Ia(I,_),I.return=N,N=I)}return x(N);case j:e:{for(ce=_.key;z!==null;){if(z.key===ce)if(z.tag===4&&z.stateNode.containerInfo===_.containerInfo&&z.stateNode.implementation===_.implementation){n(N,z.sibling),I=o(z,_.children||[]),I.return=N,N=I;break e}else{n(N,z);break}else t(N,z);z=z.sibling}I=Zu(_,N.mode,I),I.return=N,N=I}return x(N);case se:return _=yl(_),qe(N,z,_,I)}if($(_))return ie(N,z,_,I);if(te(_)){if(ce=te(_),typeof ce!="function")throw Error(u(150));return _=ce.call(_),de(N,z,_,I)}if(typeof _.then=="function")return qe(N,z,ur(_),I);if(_.$$typeof===M)return qe(N,z,lr(N,_),I);or(N,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,z!==null&&z.tag===6?(n(N,z.sibling),I=o(z,_),I.return=N,N=I):(n(N,z),I=Qu(_,N.mode,I),I.return=N,N=I),x(N)):n(N,z)}return function(N,z,_,I){try{Va=0;var ce=qe(N,z,_,I);return Pl=null,ce}catch(ue){if(ue===Wl||ue===ir)throw ue;var Me=Ot(29,ue,null,N.mode);return Me.lanes=I,Me.return=N,Me}}}var vl=Qf(!0),Zf=Qf(!1),Yn=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Pi(e),Nf(e,null,n),t}return Wi(e,a,t,n),Pi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bc(e,n)}}function uo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var x={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=x:s=s.next=x,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var oo=!1;function Qa(){if(oo){var e=$l;if(e!==null)throw e}}function Za(e,t,n,a){oo=!1;var o=e.updateQueue;Yn=!1;var s=o.firstBaseUpdate,x=o.lastBaseUpdate,S=o.shared.pending;if(S!==null){o.shared.pending=null;var C=S,O=C.next;C.next=null,x===null?s=O:x.next=O,x=C;var G=e.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==x&&(S===null?G.firstBaseUpdate=O:S.next=O,G.lastBaseUpdate=C))}if(s!==null){var Q=o.baseState;x=0,G=O=C=null,S=s;do{var R=S.lane&-536870913,H=R!==S.lane;if(H?(je&R)===R:(a&R)===R){R!==0&&R===Jl&&(oo=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ie=e,de=S;R=t;var qe=n;switch(de.tag){case 1:if(ie=de.payload,typeof ie=="function"){Q=ie.call(qe,Q,R);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=de.payload,R=typeof ie=="function"?ie.call(qe,Q,R):ie,R==null)break e;Q=y({},Q,R);break e;case 2:Yn=!0}}R=S.callback,R!==null&&(e.flags|=64,H&&(e.flags|=8192),H=o.callbacks,H===null?o.callbacks=[R]:H.push(R))}else H={lane:R,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(O=G=H,C=Q):G=G.next=H,x|=R;if(S=S.next,S===null){if(S=o.shared.pending,S===null)break;H=S,S=H.next,H.next=null,o.lastBaseUpdate=H,o.shared.pending=null}}while(!0);G===null&&(C=Q),o.baseState=C,o.firstBaseUpdate=O,o.lastBaseUpdate=G,s===null&&(o.shared.lanes=0),Fn|=x,e.lanes=x,e.memoizedState=Q}}function Ff(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Kf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ff(n[e],t)}var ea=T(null),sr=T(0);function Jf(e,t){e=Nn,w(sr,e),w(ea,t),Nn=e|t.baseLanes}function so(){w(sr,Nn),w(ea,ea.current)}function co(){Nn=sr.current,Y(ea),Y(sr)}var Lt=T(null),Jt=null;function In(e){var t=e.alternate;w(We,We.current&1),w(Lt,e),Jt===null&&(t===null||ea.current!==null||t.memoizedState!==null)&&(Jt=e)}function fo(e){w(We,We.current),w(Lt,e),Jt===null&&(Jt=e)}function $f(e){e.tag===22?(w(We,We.current),w(Lt,e),Jt===null&&(Jt=e)):Xn()}function Xn(){w(We,We.current),w(Lt,Lt.current)}function Rt(e){Y(Lt),Jt===e&&(Jt=null),Y(We)}var We=T(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ys(n)||bs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,ye=null,Ue=null,tt=null,fr=!1,ta=!1,Sl=!1,dr=0,Fa=0,na=null,i0=0;function Je(){throw Error(u(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function ho(e,t,n,a,o,s){return kn=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Od:Ao,Sl=!1,s=n(a,o),Sl=!1,ta&&(s=Pf(t,n,a,o)),Wf(e),s}function Wf(e){A.H=$a;var t=Ue!==null&&Ue.next!==null;if(kn=0,tt=Ue=ye=null,fr=!1,Fa=0,na=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&nr(e)&&(nt=!0))}function Pf(e,t,n,a){ye=e;var o=0;do{if(ta&&(na=null),Fa=0,ta=!1,25<=o)throw Error(u(301));if(o+=1,tt=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}A.H=Ld,s=t(n,a)}while(ta);return s}function r0(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Ka(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ye.flags|=1024),t}function mo(){var e=dr!==0;return dr=0,e}function go(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(fr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fr=!1}kn=0,tt=Ue=ye=null,ta=!1,Fa=dr=0,na=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ye.memoizedState=tt=e:tt=tt.next=e,tt}function Pe(){if(Ue===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=tt===null?ye.memoizedState:tt.next;if(t!==null)tt=t,Ue=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tt===null?ye.memoizedState=tt=e:tt=tt.next=e}return tt}function pr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ka(e){var t=Fa;return Fa+=1,na===null&&(na=[]),e=Vf(na,e,t),t=ye,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Od:Ao),e}function hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ka(e);if(e.$$typeof===M)return dt(e)}throw Error(u(438,String(e)))}function yo(e){var t=null,n=ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=pr(),ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=U;return t.index++,n}function wn(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=Pe();return bo(t,Ue,e)}function bo(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var x=o.next;o.next=s.next,s.next=x}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var S=x=null,C=null,O=t,G=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(je&Q)===Q:(kn&Q)===Q){var R=O.revertLane;if(R===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===Jl&&(G=!0);else if((kn&R)===R){O=O.next,R===Jl&&(G=!0);continue}else Q={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},C===null?(S=C=Q,x=s):C=C.next=Q,ye.lanes|=R,Fn|=R;Q=O.action,Sl&&n(s,Q),s=O.hasEagerState?O.eagerState:n(s,Q)}else R={lane:Q,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},C===null?(S=C=R,x=s):C=C.next=R,ye.lanes|=Q,Fn|=Q;O=O.next}while(O!==null&&O!==t);if(C===null?x=s:C.next=S,!_t(s,e.memoizedState)&&(nt=!0,G&&(n=$l,n!==null)))throw n;e.memoizedState=s,e.baseState=x,e.baseQueue=C,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function vo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var x=o=o.next;do s=e(s,x.action),x=x.next;while(x!==o);_t(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function ed(e,t,n){var a=ye,o=Pe(),s=Ae;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var x=!_t((Ue||o).memoizedState,n);if(x&&(o.memoizedState=n,nt=!0),o=o.queue,wo(ld.bind(null,a,o,e),[e]),o.getSnapshot!==t||x||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,la(9,{destroy:void 0},nd.bind(null,a,o,n,t),null),Ve===null)throw Error(u(349));s||(kn&127)!==0||td(a,t,n)}return n}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t=pr(),ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,a){t.value=n,t.getSnapshot=a,ad(t)&&id(e)}function ld(e,t,n){return n(function(){ad(t)&&id(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function id(e){var t=dl(e,2);t!==null&&At(t,e,2)}function So(e){var t=vt();if(typeof e=="function"){var n=e;if(e=n(),Sl){kt(!0);try{n()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function rd(e,t,n,a){return e.baseState=n,bo(e,Ue,typeof a=="function"?a:wn)}function u0(e,t,n,a,o){if(yr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){s.listeners.push(x)}};A.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,ud(t,s)):(s.next=n.next,t.pending=n.next=s)}}function ud(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=A.T,x={};A.T=x;try{var S=n(o,a),C=A.S;C!==null&&C(x,S),od(e,t,S)}catch(O){ko(e,t,O)}finally{s!==null&&x.types!==null&&(s.types=x.types),A.T=s}}else try{s=n(o,a),od(e,t,s)}catch(O){ko(e,t,O)}}function od(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){sd(e,t,a)},function(a){return ko(e,t,a)}):sd(e,t,n)}function sd(e,t,n){t.status="fulfilled",t.value=n,cd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ud(e,n)))}function ko(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,cd(t),t=t.next;while(t!==a)}e.action=null}function cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fd(e,t){return t}function dd(e,t){if(Ae){var n=Ve.formState;if(n!==null){e:{var a=ye;if(Ae){if(Ze){t:{for(var o=Ze,s=Kt;o.nodeType!==8;){if(!s){o=null;break t}if(o=$t(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ze=$t(o.nextSibling),a=o.data==="F!";break e}}Hn(a)}a=!1}a&&(t=n[0])}}return n=vt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fd,lastRenderedState:t},n.queue=a,n=Md.bind(null,ye,a),a.dispatch=n,a=So(!1),s=zo.bind(null,ye,!1,a.queue),a=vt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=u0.bind(null,ye,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function pd(e){var t=Pe();return hd(t,Ue,e)}function hd(e,t,n){if(t=bo(e,t,fd)[0],e=mr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ka(t)}catch(x){throw x===Wl?ir:x}else a=t;t=Pe();var o=t.queue,s=o.dispatch;return n!==t.memoizedState&&(ye.flags|=2048,la(9,{destroy:void 0},o0.bind(null,o,n),null)),[a,s,e]}function o0(e,t){e.action=t}function md(e){var t=Pe(),n=Ue;if(n!==null)return hd(t,n,e);Pe(),t=t.memoizedState,n=Pe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function la(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ye.updateQueue,t===null&&(t=pr(),ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gd(){return Pe().memoizedState}function gr(e,t,n,a){var o=vt();ye.flags|=e,o.memoizedState=la(1|t,{destroy:void 0},n,a===void 0?null:a)}function xr(e,t,n,a){var o=Pe();a=a===void 0?null:a;var s=o.memoizedState.inst;Ue!==null&&a!==null&&po(a,Ue.memoizedState.deps)?o.memoizedState=la(t,s,n,a):(ye.flags|=e,o.memoizedState=la(1|t,s,n,a))}function xd(e,t){gr(8390656,8,e,t)}function wo(e,t){xr(2048,8,e,t)}function s0(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=pr(),ye.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function yd(e){var t=Pe().memoizedState;return s0({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function bd(e,t){return xr(4,2,e,t)}function vd(e,t){return xr(4,4,e,t)}function Sd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kd(e,t,n){n=n!=null?n.concat([e]):null,xr(4,4,Sd.bind(null,t,e),n)}function Eo(){}function wd(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&po(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&po(t,a[1]))return a[0];if(a=e(),Sl){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[a,t],a}function To(e,t,n){return n===void 0||(kn&1073741824)!==0&&(je&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Tp(),ye.lanes|=e,Fn|=e,n)}function Td(e,t,n,a){return _t(n,t)?n:ea.current!==null?(e=To(e,n,a),_t(e,t)||(nt=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(je&261930)===0?(nt=!0,e.memoizedState=n):(e=Tp(),ye.lanes|=e,Fn|=e,t)}function Cd(e,t,n,a,o){var s=Z.p;Z.p=s!==0&&8>s?s:8;var x=A.T,S={};A.T=S,zo(e,!1,t,n);try{var C=o(),O=A.S;if(O!==null&&O(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=a0(C,a);Ja(e,t,G,Ht(e))}else Ja(e,t,a,Ht(e))}catch(Q){Ja(e,t,{then:function(){},status:"rejected",reason:Q},Ht())}finally{Z.p=s,x!==null&&S.types!==null&&(x.types=S.types),A.T=x}}function c0(){}function Co(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=jd(e).queue;Cd(e,o,t,le,n===null?c0:function(){return zd(e),n(a)})}function jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zd(e){var t=jd(e);t.next===null&&(t=e.alternate.memoizedState),Ja(e,t.next.queue,{},Ht())}function jo(){return dt(pi)}function Ad(){return Pe().memoizedState}function Nd(){return Pe().memoizedState}function f0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Gn(n);var a=Vn(t,e,n);a!==null&&(At(a,t,n),Xa(a,t,n)),t={cache:to()},e.payload=t;return}t=t.return}}function d0(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yr(e)?Dd(t,n):(n=Iu(e,t,n,a),n!==null&&(At(n,e,a),_d(n,t,a)))}function Md(e,t,n){var a=Ht();Ja(e,t,n,a)}function Ja(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yr(e))Dd(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var x=t.lastRenderedState,S=s(x,n);if(o.hasEagerState=!0,o.eagerState=S,_t(S,x))return Wi(e,t,o,0),Ve===null&&$i(),!1}catch{}if(n=Iu(e,t,o,a),n!==null)return At(n,e,a),_d(n,t,a),!0}return!1}function zo(e,t,n,a){if(a={lane:2,revertLane:rs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(u(479))}else t=Iu(e,n,a,2),t!==null&&At(t,e,2)}function yr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Dd(e,t){ta=fr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _d(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bc(e,n)}}var $a={readContext:dt,use:hr,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};$a.useEffectEvent=Je;var Od={readContext:dt,use:hr,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:xd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gr(4194308,4,Sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gr(4194308,4,e,t)},useInsertionEffect:function(e,t){gr(4,2,e,t)},useMemo:function(e,t){var n=vt();t=t===void 0?null:t;var a=e();if(Sl){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=vt();if(n!==void 0){var o=n(t);if(Sl){kt(!0);try{n(t)}finally{kt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=d0.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=So(e);var t=e.queue,n=Md.bind(null,ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eo,useDeferredValue:function(e,t){var n=vt();return To(n,e,t)},useTransition:function(){var e=So(!1);return e=Cd.bind(null,ye,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ye,o=vt();if(Ae){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ve===null)throw Error(u(349));(je&127)!==0||td(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,xd(ld.bind(null,a,s,e),[e]),a.flags|=2048,la(9,{destroy:void 0},nd.bind(null,a,s,n,t),null),n},useId:function(){var e=vt(),t=Ve.identifierPrefix;if(Ae){var n=un,a=rn;n=(a&~(1<<32-Ge(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=i0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jo,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zo.bind(null,ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:yo,useCacheRefresh:function(){return vt().memoizedState=f0.bind(null,ye)},useEffectEvent:function(e){var t=vt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Ao={readContext:dt,use:hr,useCallback:wd,useContext:dt,useEffect:wo,useImperativeHandle:kd,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Ed,useReducer:mr,useRef:gd,useState:function(){return mr(wn)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Pe();return Td(n,Ue.memoizedState,e,t)},useTransition:function(){var e=mr(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ka(e),t]},useSyncExternalStore:ed,useId:Ad,useHostTransitionStatus:jo,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=Pe();return rd(n,Ue,e,t)},useMemoCache:yo,useCacheRefresh:Nd};Ao.useEffectEvent=yd;var Ld={readContext:dt,use:hr,useCallback:wd,useContext:dt,useEffect:wo,useImperativeHandle:kd,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Ed,useReducer:vo,useRef:gd,useState:function(){return vo(wn)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Pe();return Ue===null?To(n,e,t):Td(n,Ue.memoizedState,e,t)},useTransition:function(){var e=vo(wn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ka(e),t]},useSyncExternalStore:ed,useId:Ad,useHostTransitionStatus:jo,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=Pe();return Ue!==null?rd(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:yo,useCacheRefresh:Nd};Ld.useEffectEvent=yd;function No(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Gn(a);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(At(t,e,a),Xa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Gn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(At(t,e,a),Xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Gn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(At(t,e,n),Xa(t,e,n))}};function Rd(e,t,n,a,o,s,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,x):t.prototype&&t.prototype.isPureReactComponent?!Ba(n,a)||!Ba(o,s):!0}function Bd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function kl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Ud(e){Ji(e)}function Hd(e){console.error(e)}function qd(e){Ji(e)}function br(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Yd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Do(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){br(e,t)},n}function Gd(e){return e=Gn(e),e.tag=3,e}function Vd(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Yd(t,n,a)}}var x=n.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Yd(t,n,a),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})})}function p0(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Kl(t,n,o,!0),n=Lt.current,n!==null){switch(n.tag){case 31:case 13:return Jt===null?Mr():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ls(e,a,o)),!1;case 22:return n.flags|=65536,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ls(e,a,o)),!1}throw Error(u(435,n.tag))}return ls(e,a,o),Mr(),!1}if(Ae)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Ju&&(e=Error(u(422),{cause:a}),qa(Qt(e,n)))):(a!==Ju&&(t=Error(u(423),{cause:a}),qa(Qt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Qt(a,n),o=Do(e.stateNode,a,o),uo(e,o),$e!==4&&($e=2)),!1;var s=Error(u(520),{cause:a});if(s=Qt(s,n),ii===null?ii=[s]:ii.push(s),$e!==4&&($e=2),t===null)return!0;a=Qt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Do(n.stateNode,a,e),uo(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Kn===null||!Kn.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Gd(o),Vd(o,e,n,a),uo(n,o),!1}n=n.return}while(n!==null);return!1}var _o=Error(u(461)),nt=!1;function pt(e,t,n,a){t.child=e===null?Zf(t,null,n,a):vl(t,e.child,n,a)}function Id(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var x={};for(var S in a)S!=="ref"&&(x[S]=a[S])}else x=a;return gl(t),a=ho(e,t,n,x,s,o),S=mo(),e!==null&&!nt?(go(e,t,o),En(e,t,o)):(Ae&&S&&Fu(t),t.flags|=1,pt(e,t,a,o),t.child)}function Xd(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Xu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Qd(e,t,s,a,o)):(e=er(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Yo(e,o)){var x=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(x,a)&&e.ref===t.ref)return En(e,t,o)}return t.flags|=1,e=yn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(Ba(s,a)&&e.ref===t.ref)if(nt=!1,t.pendingProps=a=s,Yo(e,o))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,En(e,t,o)}return Oo(e,t,n,a,o)}function Zd(e,t,n,a){var o=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~s}else a=0,t.child=null;return Fd(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ar(t,s!==null?s.cachePool:null),s!==null?Jf(t,s):so(),$f(t);else return a=t.lanes=536870912,Fd(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(ar(t,s.cachePool),Jf(t,s),Xn(),t.memoizedState=null):(e!==null&&ar(t,null),so(),Xn());return pt(e,t,o,n),t.child}function Wa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fd(e,t,n,a,o){var s=lo();return s=s===null?null:{parent:et._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ar(t,null),so(),$f(t),e!==null&&Kl(e,t,a,!0),t.childLanes=o,null}function vr(e,t){return t=kr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kd(e,t,n){return vl(t,e.child,null,n),e=vr(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function h0(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(a.mode==="hidden")return e=vr(t,a),t.lanes=536870912,Wa(null,e);if(fo(t),(e=Ze)?(e=uh(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Df(e),n.return=t,t.child=n,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return vr(t,a)}var s=e.memoizedState;if(s!==null){var x=s.dehydrated;if(fo(t),o)if(t.flags&256)t.flags&=-257,t=Kd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(nt||Kl(e,t,n,!1),o=(n&e.childLanes)!==0,nt||o){if(a=Ve,a!==null&&(x=Uc(a,n),x!==0&&x!==s.retryLane))throw s.retryLane=x,dl(e,x),At(a,e,x),_o;Mr(),t=Kd(e,t,n)}else e=s.treeContext,Ze=$t(x.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&Lf(t,e),t=vr(t,a),t.flags|=4096;return t}return e=yn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Oo(e,t,n,a,o){return gl(t),n=ho(e,t,n,a,void 0,o),a=mo(),e!==null&&!nt?(go(e,t,o),En(e,t,o)):(Ae&&a&&Fu(t),t.flags|=1,pt(e,t,n,o),t.child)}function Jd(e,t,n,a,o,s){return gl(t),t.updateQueue=null,n=Pf(t,a,n,o),Wf(e),a=mo(),e!==null&&!nt?(go(e,t,s),En(e,t,s)):(Ae&&a&&Fu(t),t.flags|=1,pt(e,t,n,s),t.child)}function $d(e,t,n,a,o){if(gl(t),t.stateNode===null){var s=Xl,x=n.contextType;typeof x=="object"&&x!==null&&(s=dt(x)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Mo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},io(t),x=n.contextType,s.context=typeof x=="object"&&x!==null?dt(x):Xl,s.state=t.memoizedState,x=n.getDerivedStateFromProps,typeof x=="function"&&(No(t,n,x,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(x=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),x!==s.state&&Mo.enqueueReplaceState(s,s.state,null),Za(t,a,s,o),Qa(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var S=t.memoizedProps,C=kl(n,S);s.props=C;var O=s.context,G=n.contextType;x=Xl,typeof G=="object"&&G!==null&&(x=dt(G));var Q=n.getDerivedStateFromProps;G=typeof Q=="function"||typeof s.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,G||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(S||O!==x)&&Bd(t,s,a,x),Yn=!1;var R=t.memoizedState;s.state=R,Za(t,a,s,o),Qa(),O=t.memoizedState,S||R!==O||Yn?(typeof Q=="function"&&(No(t,n,Q,a),O=t.memoizedState),(C=Yn||Rd(t,n,C,a,R,O,x))?(G||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),s.props=a,s.state=O,s.context=x,a=C):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,ro(e,t),x=t.memoizedProps,G=kl(n,x),s.props=G,Q=t.pendingProps,R=s.context,O=n.contextType,C=Xl,typeof O=="object"&&O!==null&&(C=dt(O)),S=n.getDerivedStateFromProps,(O=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(x!==Q||R!==C)&&Bd(t,s,a,C),Yn=!1,R=t.memoizedState,s.state=R,Za(t,a,s,o),Qa();var H=t.memoizedState;x!==Q||R!==H||Yn||e!==null&&e.dependencies!==null&&nr(e.dependencies)?(typeof S=="function"&&(No(t,n,S,a),H=t.memoizedState),(G=Yn||Rd(t,n,G,a,R,H,C)||e!==null&&e.dependencies!==null&&nr(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,H,C),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,H,C)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||x===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=H),s.props=a,s.state=H,s.context=C,a=G):(typeof s.componentDidUpdate!="function"||x===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Sr(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=vl(t,e.child,null,o),t.child=vl(t,null,n,o)):pt(e,t,n,o),t.memoizedState=s.state,e=t.child):e=En(e,t,o),e}function Wd(e,t,n,a){return hl(),t.flags|=256,pt(e,t,n,a),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ro(e){return{baseLanes:e,cachePool:Yf()}}function Bo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function Pd(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,x;if((x=s)||(x=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),x&&(o=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(o?In(t):Xn(),(e=Ze)?(e=uh(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Df(e),n.return=t,t.child=n,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return bs(e)?t.lanes=32:t.lanes=536870912,null}var S=a.children;return a=a.fallback,o?(Xn(),o=t.mode,S=kr({mode:"hidden",children:S},o),a=pl(a,o,n,null),S.return=t,a.return=t,S.sibling=a,t.child=S,a=t.child,a.memoizedState=Ro(n),a.childLanes=Bo(e,x,n),t.memoizedState=Lo,Wa(null,a)):(In(t),Uo(t,S))}var C=e.memoizedState;if(C!==null&&(S=C.dehydrated,S!==null)){if(s)t.flags&256?(In(t),t.flags&=-257,t=Ho(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),S=a.fallback,o=t.mode,a=kr({mode:"visible",children:a.children},o),S=pl(S,o,n,null),S.flags|=2,a.return=t,S.return=t,a.sibling=S,t.child=a,vl(t,e.child,null,n),a=t.child,a.memoizedState=Ro(n),a.childLanes=Bo(e,x,n),t.memoizedState=Lo,t=Wa(null,a));else if(In(t),bs(S)){if(x=S.nextSibling&&S.nextSibling.dataset,x)var O=x.dgst;x=O,a=Error(u(419)),a.stack="",a.digest=x,qa({value:a,source:null,stack:null}),t=Ho(e,t,n)}else if(nt||Kl(e,t,n,!1),x=(n&e.childLanes)!==0,nt||x){if(x=Ve,x!==null&&(a=Uc(x,n),a!==0&&a!==C.retryLane))throw C.retryLane=a,dl(e,a),At(x,e,a),_o;ys(S)||Mr(),t=Ho(e,t,n)}else ys(S)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ze=$t(S.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&Lf(t,e),t=Uo(t,a.children),t.flags|=4096);return t}return o?(Xn(),S=a.fallback,o=t.mode,C=e.child,O=C.sibling,a=yn(C,{mode:"hidden",children:a.children}),a.subtreeFlags=C.subtreeFlags&65011712,O!==null?S=yn(O,S):(S=pl(S,o,n,null),S.flags|=2),S.return=t,a.return=t,a.sibling=S,t.child=a,Wa(null,a),a=t.child,S=e.child.memoizedState,S===null?S=Ro(n):(o=S.cachePool,o!==null?(C=et._currentValue,o=o.parent!==C?{parent:C,pool:C}:o):o=Yf(),S={baseLanes:S.baseLanes|n,cachePool:o}),a.memoizedState=S,a.childLanes=Bo(e,x,n),t.memoizedState=Lo,Wa(e.child,a)):(In(t),n=e.child,e=n.sibling,n=yn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=n,t.memoizedState=null,n)}function Uo(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Ho(e,t,n){return vl(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ep(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Pu(e.return,t,n)}function qo(e,t,n,a,o,s){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:s}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=a,x.tail=n,x.tailMode=o,x.treeForkCount=s)}function tp(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;a=a.children;var x=We.current,S=(x&2)!==0;if(S?(x=x&1|2,t.flags|=128):x&=1,w(We,x),pt(e,t,a,n),a=Ae?Ha:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,n,t);else if(e.tag===19)ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&cr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qo(t,!1,o,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&cr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qo(t,!0,n,null,s,a);break;case"together":qo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Kl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nr(e)))}function m0(e,t,n){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),qn(t,et,e.memoizedState.cache),hl();break;case 27:case 5:Gt(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(In(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Pd(e,t,n):(In(t),e=En(e,t,n),e!==null?e.sibling:null);In(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Kl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return tp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),w(We,We.current),a)break;return null;case 22:return t.lanes=0,Zd(e,t,n,t.pendingProps);case 24:qn(t,et,e.memoizedState.cache)}return En(e,t,n)}function np(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!Yo(e,n)&&(t.flags&128)===0)return nt=!1,m0(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ae&&(t.flags&1048576)!==0&&Of(t,Ha,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=yl(t.elementType),t.type=e,typeof e=="function")Xu(e)?(a=kl(e,a),t.tag=1,t=$d(null,t,e,a,n)):(t.tag=0,t=Oo(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===W){t.tag=11,t=Id(null,t,e,a,n);break e}else if(o===F){t.tag=14,t=Xd(null,t,e,a,n);break e}}throw t=re(e)||e,Error(u(306,t,""))}}return t;case 0:return Oo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=kl(a,t.pendingProps),$d(e,t,a,o,n);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;o=s.element,ro(e,t),Za(t,a,null,n);var x=t.memoizedState;if(a=x.cache,qn(t,et,a),a!==s.cache&&eo(t,[et],n,!0),Qa(),a=x.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Wd(e,t,a,n);break e}else if(a!==o){o=Qt(Error(u(424)),t),qa(o),t=Wd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=$t(e.firstChild),ft=t,Ae=!0,Un=null,Kt=!0,n=Zf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hl(),a===o){t=En(e,t,n);break e}pt(e,t,a,n)}t=t.child}return t;case 26:return Sr(e,t),e===null?(n=ph(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,a=Ur(oe.current).createElement(n),a[ct]=t,a[wt]=e,ht(a,n,e),ot(a),t.stateNode=a):t.memoizedState=ph(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gt(t),e===null&&Ae&&(a=t.stateNode=ch(t.type,t.pendingProps,oe.current),ft=t,Kt=!0,o=Ze,Pn(t.type)?(vs=o,Ze=$t(a.firstChild)):Ze=o),pt(e,t,t.pendingProps.children,n),Sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((o=a=Ze)&&(a=X0(a,t.type,t.pendingProps,Kt),a!==null?(t.stateNode=a,ft=t,Ze=$t(a.firstChild),Kt=!1,o=!0):o=!1),o||Hn(t)),Gt(t),o=t.type,s=t.pendingProps,x=e!==null?e.memoizedProps:null,a=s.children,ms(o,s)?a=null:x!==null&&ms(o,x)&&(t.flags|=32),t.memoizedState!==null&&(o=ho(e,t,r0,null,null,n),pi._currentValue=o),Sr(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Ae&&((e=n=Ze)&&(n=Q0(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,ft=t,Ze=null,e=!0):e=!1),e||Hn(t)),null;case 13:return Pd(e,t,n);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vl(t,null,a,n):pt(e,t,a,n),t.child;case 11:return Id(e,t,t.type,t.pendingProps,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,qn(t,t.type,a.value),pt(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,gl(t),o=dt(o),a=a(o),t.flags|=1,pt(e,t,a,n),t.child;case 14:return Xd(e,t,t.type,t.pendingProps,n);case 15:return Qd(e,t,t.type,t.pendingProps,n);case 19:return tp(e,t,n);case 31:return h0(e,t,n);case 22:return Zd(e,t,n,t.pendingProps);case 24:return gl(t),a=dt(et),e===null?(o=lo(),o===null&&(o=Ve,s=to(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},io(t),qn(t,et,o)):((e.lanes&n)!==0&&(ro(e,t),Za(t,null,null,n),Qa()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),qn(t,et,a)):(a=s.cache,qn(t,et,a),a!==o.cache&&eo(t,[et],n,!0))),pt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Tn(e){e.flags|=4}function Go(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Ap())e.flags|=8192;else throw bl=rr,ao}else e.flags&=-16777217}function lp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yh(t))if(Ap())e.flags|=8192;else throw bl=rr,ao}function wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lc():536870912,e.lanes|=t,ua|=t)}function Pa(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function g0(e,t,n){var a=t.pendingProps;switch(Ku(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(et),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),Fe(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(Tn(t),s!==null?(Fe(t),lp(t,s)):(Fe(t),Go(t,o,null,a,n))):s?s!==e.memoizedState?(Tn(t),Fe(t),lp(t,s)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Tn(t),Fe(t),Go(t,o,e,a,n)),null;case 27:if(dn(t),n=oe.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}e=J.current,Fl(t)?Rf(t):(e=ch(o,a,n),t.stateNode=e,Tn(t))}return Fe(t),null;case 5:if(dn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Fe(t),null}if(s=J.current,Fl(t))Rf(t);else{var x=Ur(oe.current);switch(s){case 1:s=x.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=x.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=x.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=x.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=x.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?x.createElement("select",{is:a.is}):x.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?x.createElement(o,{is:a.is}):x.createElement(o)}}s[ct]=t,s[wt]=a;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)s.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=s;e:switch(ht(s,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Tn(t)}}return Fe(t),Go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=oe.current,Fl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=ft,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Pp(e.nodeValue,n)),e||Hn(t,!0)}else e=Ur(e).createTextNode(a),e[ct]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Fl(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ct]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Fe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Fl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[ct]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else o=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),wr(t,t.updateQueue),Fe(t),null);case 4:return Be(),e===null&&cs(t.stateNode.containerInfo),Fe(t),null;case 10:return Sn(t.type),Fe(t),null;case 19:if(Y(We),a=t.memoizedState,a===null)return Fe(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)Pa(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=cr(e),s!==null){for(t.flags|=128,Pa(a,!1),e=s.updateQueue,t.updateQueue=e,wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mf(n,e),n=n.sibling;return w(We,We.current&1|2),Ae&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&yt()>zr&&(t.flags|=128,o=!0,Pa(a,!1),t.lanes=4194304)}else{if(!o)if(e=cr(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,wr(t,e),Pa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ae)return Fe(t),null}else 2*yt()-a.renderingStartTime>zr&&n!==536870912&&(t.flags|=128,o=!0,Pa(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,n=We.current,w(We,o?n&1|2:n&1),Ae&&bn(t,a.treeForkCount),e):(Fe(t),null);case 22:case 23:return Rt(t),co(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(xl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(et),Fe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function x0(e,t){switch(Ku(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(et),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dn(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(u(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(We),null;case 4:return Be(),null;case 10:return Sn(t.type),null;case 22:case 23:return Rt(t),co(),e!==null&&Y(xl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(et),null;case 25:return null;default:return null}}function ap(e,t){switch(Ku(t),t.tag){case 3:Sn(et),Be();break;case 26:case 27:case 5:dn(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:Y(We);break;case 10:Sn(t.type);break;case 22:case 23:Rt(t),co(),e!==null&&Y(xl);break;case 24:Sn(et)}}function ei(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,x=n.inst;a=s(),x.destroy=a}n=n.next}while(n!==o)}}catch(S){Re(t,t.return,S)}}function Qn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var x=a.inst,S=x.destroy;if(S!==void 0){x.destroy=void 0,o=t;var C=n,O=S;try{O()}catch(G){Re(o,C,G)}}}a=a.next}while(a!==s)}}catch(G){Re(t,t.return,G)}}function ip(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Kf(t,n)}catch(a){Re(e,e.return,a)}}}function rp(e,t,n){n.props=kl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Re(e,t,a)}}function ti(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Re(e,t,o)}}function on(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Re(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Re(e,t,o)}else n.current=null}function up(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Re(e,e.return,o)}}function Vo(e,t,n){try{var a=e.stateNode;H0(a,e.type,n,t),a[wt]=t}catch(o){Re(e,e.return,o)}}function op(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function Io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}function Er(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Er(e,t,n),e=e.sibling;e!==null;)Er(e,t,n),e=e.sibling}function sp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,a,n),t[ct]=e,t[wt]=n}catch(s){Re(e,e.return,s)}}var Cn=!1,lt=!1,Qo=!1,cp=typeof WeakSet=="function"?WeakSet:Set,st=null;function y0(e,t){if(e=e.containerInfo,ps=Xr,e=kf(e),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var x=0,S=-1,C=-1,O=0,G=0,Q=e,R=null;t:for(;;){for(var H;Q!==n||o!==0&&Q.nodeType!==3||(S=x+o),Q!==s||a!==0&&Q.nodeType!==3||(C=x+a),Q.nodeType===3&&(x+=Q.nodeValue.length),(H=Q.firstChild)!==null;)R=Q,Q=H;for(;;){if(Q===e)break t;if(R===n&&++O===o&&(S=x),R===s&&++G===a&&(C=x),(H=Q.nextSibling)!==null)break;Q=R,R=Q.parentNode}Q=H}n=S===-1||C===-1?null:{start:S,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(hs={focusedElem:e,selectionRange:n},Xr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var ie=kl(n.type,o);e=a.getSnapshotBeforeUpdate(ie,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(de){Re(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function fp(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),a&4&&ei(5,n);break;case 1:if(zn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(x){Re(n,n.return,x)}else{var o=kl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Re(n,n.return,x)}}a&64&&ip(n),a&512&&ti(n,n.return);break;case 3:if(zn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Kf(e,t)}catch(x){Re(n,n.return,x)}}break;case 27:t===null&&a&4&&sp(n);case 26:case 5:zn(e,n),t===null&&a&4&&up(n),a&512&&ti(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),a&4&&hp(e,n);break;case 13:zn(e,n),a&4&&mp(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=j0.bind(null,n),Z0(e,n))));break;case 22:if(a=n.memoizedState!==null||Cn,!a){t=t!==null&&t.memoizedState!==null||lt,o=Cn;var s=lt;Cn=a,(lt=t)&&!s?An(e,n,(n.subtreeFlags&8772)!==0):zn(e,n),Cn=o,lt=s}break;case 30:break;default:zn(e,n)}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Tt=!1;function jn(e,t,n){for(n=n.child;n!==null;)pp(e,t,n),n=n.sibling}function pp(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(bt,n)}catch{}switch(n.tag){case 26:lt||on(n,t),jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||on(n,t);var a=Ke,o=Tt;Pn(n.type)&&(Ke=n.stateNode,Tt=!1),jn(e,t,n),ci(n.stateNode),Ke=a,Tt=o;break;case 5:lt||on(n,t);case 6:if(a=Ke,o=Tt,Ke=null,jn(e,t,n),Ke=a,Tt=o,Ke!==null)if(Tt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(s){Re(n,t,s)}else try{Ke.removeChild(n.stateNode)}catch(s){Re(n,t,s)}break;case 18:Ke!==null&&(Tt?(e=Ke,ih(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ma(e)):ih(Ke,n.stateNode));break;case 4:a=Ke,o=Tt,Ke=n.stateNode.containerInfo,Tt=!0,jn(e,t,n),Ke=a,Tt=o;break;case 0:case 11:case 14:case 15:Qn(2,n,t),lt||Qn(4,n,t),jn(e,t,n);break;case 1:lt||(on(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&rp(n,t,a)),jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:lt=(a=lt)||n.memoizedState!==null,jn(e,t,n),lt=a;break;default:jn(e,t,n)}}function hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ma(e)}catch(n){Re(t,t.return,n)}}}function mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ma(e)}catch(n){Re(t,t.return,n)}}function b0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cp),t;default:throw Error(u(435,e.tag))}}function Tr(e,t){var n=b0(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=z0.bind(null,e,a);a.then(o,o)}})}function Ct(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,x=t,S=x;e:for(;S!==null;){switch(S.tag){case 27:if(Pn(S.type)){Ke=S.stateNode,Tt=!1;break e}break;case 5:Ke=S.stateNode,Tt=!1;break e;case 3:case 4:Ke=S.stateNode.containerInfo,Tt=!0;break e}S=S.return}if(Ke===null)throw Error(u(160));pp(s,x,o),Ke=null,Tt=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gp(t,e),t=t.sibling}var nn=null;function gp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),jt(e),a&4&&(Qn(3,e,e.return),ei(3,e),Qn(5,e,e.return));break;case 1:Ct(t,e),jt(e),a&512&&(lt||n===null||on(n,n.return)),a&64&&Cn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=nn;if(Ct(t,e),jt(e),a&512&&(lt||n===null||on(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[za]||s[ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),ht(s,a,n),s[ct]=e,ot(s),a=s;break e;case"link":var x=gh("link","href",o).get(a+(n.href||""));if(x){for(var S=0;S<x.length;S++)if(s=x[S],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){x.splice(S,1);break t}}s=o.createElement(a),ht(s,a,n),o.head.appendChild(s);break;case"meta":if(x=gh("meta","content",o).get(a+(n.content||""))){for(S=0;S<x.length;S++)if(s=x[S],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){x.splice(S,1);break t}}s=o.createElement(a),ht(s,a,n),o.head.appendChild(s);break;default:throw Error(u(468,a))}s[ct]=e,ot(s),a=s}e.stateNode=a}else xh(o,e.type,e.stateNode);else e.stateNode=mh(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?xh(o,e.type,e.stateNode):mh(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ct(t,e),jt(e),a&512&&(lt||n===null||on(n,n.return)),n!==null&&a&4&&Vo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ct(t,e),jt(e),a&512&&(lt||n===null||on(n,n.return)),e.flags&32){o=e.stateNode;try{Ul(o,"")}catch(ie){Re(e,e.return,ie)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Vo(e,o,n!==null?n.memoizedProps:o)),a&1024&&(Qo=!0);break;case 6:if(Ct(t,e),jt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ie){Re(e,e.return,ie)}}break;case 3:if(Yr=null,o=nn,nn=Hr(t.containerInfo),Ct(t,e),nn=o,jt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(t.containerInfo)}catch(ie){Re(e,e.return,ie)}Qo&&(Qo=!1,xp(e));break;case 4:a=nn,nn=Hr(e.stateNode.containerInfo),Ct(t,e),jt(e),nn=a;break;case 12:Ct(t,e),jt(e);break;case 31:Ct(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 13:Ct(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jr=yt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 22:o=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,O=Cn,G=lt;if(Cn=O||o,lt=G||C,Ct(t,e),lt=G,Cn=O,jt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||C||Cn||lt||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(s=C.stateNode,o)x=s.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{S=C.stateNode;var Q=C.memoizedProps.style,R=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;S.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(ie){Re(C,C.return,ie)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=o?"":C.memoizedProps}catch(ie){Re(C,C.return,ie)}}}else if(t.tag===18){if(n===null){C=t;try{var H=C.stateNode;o?rh(H,!0):rh(C.stateNode,!1)}catch(ie){Re(C,C.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Tr(e,n))));break;case 19:Ct(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 30:break;case 21:break;default:Ct(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(op(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,s=Io(e);Er(e,s,o);break;case 5:var x=n.stateNode;n.flags&32&&(Ul(x,""),n.flags&=-33);var S=Io(e);Er(e,S,x);break;case 3:case 4:var C=n.stateNode.containerInfo,O=Io(e);Xo(e,O,C);break;default:throw Error(u(161))}}catch(G){Re(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fp(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),wl(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rp(t,t.return,n),wl(t);break;case 27:ci(t.stateNode);case 26:case 5:on(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function An(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,x=s.flags;switch(s.tag){case 0:case 11:case 15:An(o,s,n),ei(4,s);break;case 1:if(An(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Re(a,a.return,O)}if(a=s,o=a.updateQueue,o!==null){var S=a.stateNode;try{var C=o.shared.hiddenCallbacks;if(C!==null)for(o.shared.hiddenCallbacks=null,o=0;o<C.length;o++)Ff(C[o],S)}catch(O){Re(a,a.return,O)}}n&&x&64&&ip(s),ti(s,s.return);break;case 27:sp(s);case 26:case 5:An(o,s,n),n&&a===null&&x&4&&up(s),ti(s,s.return);break;case 12:An(o,s,n);break;case 31:An(o,s,n),n&&x&4&&hp(o,s);break;case 13:An(o,s,n),n&&x&4&&mp(o,s);break;case 22:s.memoizedState===null&&An(o,s,n),ti(s,s.return);break;case 30:break;default:An(o,s,n)}t=t.sibling}}function Zo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ya(n))}function Fo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ya(e))}function ln(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yp(e,t,n,a),t=t.sibling}function yp(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,a),o&2048&&ei(9,t);break;case 1:ln(e,t,n,a);break;case 3:ln(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ya(e)));break;case 12:if(o&2048){ln(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,x=s.id,S=s.onPostCommit;typeof S=="function"&&S(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Re(t,t.return,C)}}else ln(e,t,n,a);break;case 31:ln(e,t,n,a);break;case 13:ln(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,x=t.alternate,t.memoizedState!==null?s._visibility&2?ln(e,t,n,a):ni(e,t):s._visibility&2?ln(e,t,n,a):(s._visibility|=2,aa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Zo(x,t);break;case 24:ln(e,t,n,a),o&2048&&Fo(t.alternate,t);break;default:ln(e,t,n,a)}}function aa(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,x=t,S=n,C=a,O=x.flags;switch(x.tag){case 0:case 11:case 15:aa(s,x,S,C,o),ei(8,x);break;case 23:break;case 22:var G=x.stateNode;x.memoizedState!==null?G._visibility&2?aa(s,x,S,C,o):ni(s,x):(G._visibility|=2,aa(s,x,S,C,o)),o&&O&2048&&Zo(x.alternate,x);break;case 24:aa(s,x,S,C,o),o&&O&2048&&Fo(x.alternate,x);break;default:aa(s,x,S,C,o)}t=t.sibling}}function ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:ni(n,a),o&2048&&Zo(a.alternate,a);break;case 24:ni(n,a),o&2048&&Fo(a.alternate,a);break;default:ni(n,a)}t=t.sibling}}var li=8192;function ia(e,t,n){if(e.subtreeFlags&li)for(e=e.child;e!==null;)bp(e,t,n),e=e.sibling}function bp(e,t,n){switch(e.tag){case 26:ia(e,t,n),e.flags&li&&e.memoizedState!==null&&ix(n,nn,e.memoizedState,e.memoizedProps);break;case 5:ia(e,t,n);break;case 3:case 4:var a=nn;nn=Hr(e.stateNode.containerInfo),ia(e,t,n),nn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=li,li=16777216,ia(e,t,n),li=a):ia(e,t,n));break;default:ia(e,t,n)}}function vp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,kp(a,e)}vp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sp(e),e=e.sibling}function Sp(e){switch(e.tag){case 0:case 11:case 15:ai(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:ai(e);break;case 12:ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cr(e)):ai(e);break;default:ai(e)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,kp(a,e)}vp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),Cr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cr(t));break;default:Cr(t)}e=e.sibling}}function kp(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ya(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,st=a;else e:for(n=e;st!==null;){a=st;var o=a.sibling,s=a.return;if(dp(a),a===n){st=null;break e}if(o!==null){o.return=s,st=o;break e}st=s}}}var v0={getCacheForType:function(e){var t=dt(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dt(et).controller.signal}},S0=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ve=null,Ee=null,je=0,Le=0,Bt=null,Zn=!1,ra=!1,Ko=!1,Nn=0,$e=0,Fn=0,El=0,Jo=0,Ut=0,ua=0,ii=null,zt=null,$o=!1,jr=0,wp=0,zr=1/0,Ar=null,Kn=null,rt=0,Jn=null,oa=null,Mn=0,Wo=0,Po=null,Ep=null,ri=0,es=null;function Ht(){return(_e&2)!==0&&je!==0?je&-je:A.T!==null?rs():Hc()}function Tp(){if(Ut===0)if((je&536870912)===0||Ae){var e=Bi;Bi<<=1,(Bi&3932160)===0&&(Bi=262144),Ut=e}else Ut=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Ut}function At(e,t,n){(e===Ve&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(sa(e,0),$n(e,je,Ut,!1)),ja(e,n),((_e&2)===0||e!==Ve)&&(e===Ve&&((_e&2)===0&&(El|=n),$e===4&&$n(e,je,Ut,!1)),sn(e))}function Cp(e,t,n){if((_e&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ca(e,t),o=a?E0(e,t):ns(e,t,!0),s=a;do{if(o===0){ra&&!a&&$n(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!k0(n)){o=ns(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var S=e;o=ii;var C=S.current.memoizedState.isDehydrated;if(C&&(sa(S,x).flags|=256),x=ns(S,x,!1),x!==2){if(Ko&&!C){S.errorRecoveryDisabledLanes|=s,El|=s,o=4;break e}s=zt,zt=o,s!==null&&(zt===null?zt=s:zt.push.apply(zt,s))}o=x}if(s=!1,o!==2)continue}}if(o===1){sa(e,0),$n(e,t,0,!0);break}e:{switch(a=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:$n(a,t,Ut,!Zn);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=jr+300-yt(),10<o)){if($n(a,t,Ut,!Zn),Hi(a,0,!0)!==0)break e;Mn=t,a.timeoutHandle=lh(jp.bind(null,a,n,zt,Ar,$o,t,Ut,El,ua,Zn,s,"Throttled",-0,0),o);break e}jp(a,n,zt,Ar,$o,t,Ut,El,ua,Zn,s,null,-0,0)}}break}while(!0);sn(e)}function jp(e,t,n,a,o,s,x,S,C,O,G,Q,R,H){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},bp(t,s,Q);var ie=(s&62914560)===s?jr-yt():(s&4194048)===s?wp-yt():0;if(ie=rx(Q,ie),ie!==null){Mn=s,e.cancelPendingCommit=ie(Lp.bind(null,e,t,s,n,a,o,x,S,C,G,Q,null,R,H)),$n(e,s,x,!O);return}}Lp(e,t,s,n,a,o,x,S,C)}function k0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!_t(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t,n,a){t&=~Jo,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-Ge(o),x=1<<s;a[s]=-1,o&=~x}n!==0&&Rc(e,n,t)}function Nr(){return(_e&6)===0?(ui(0),!1):!0}function ts(){if(Ee!==null){if(Le===0)var e=Ee.return;else e=Ee,vn=ml=null,xo(e),Pl=null,Va=0,e=Ee;for(;e!==null;)ap(e.alternate,e),e=e.return;Ee=null}}function sa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,G0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Mn=0,ts(),Ve=e,Ee=n=yn(e.current,null),je=t,Le=0,Bt=null,Zn=!1,ra=Ca(e,t),Ko=!1,ua=Ut=Jo=El=Fn=$e=0,zt=ii=null,$o=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-Ge(a),s=1<<o;t|=e[o],a&=~s}return Nn=t,$i(),n}function zp(e,t){ye=null,A.H=$a,t===Wl||t===ir?(t=If(),Le=3):t===ao?(t=If(),Le=4):Le=t===_o?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Ee===null&&($e=1,br(e,Qt(t,e.current)))}function Ap(){var e=Lt.current;return e===null?!0:(je&4194048)===je?Jt===null:(je&62914560)===je||(je&536870912)!==0?e===Jt:!1}function Np(){var e=A.H;return A.H=$a,e===null?$a:e}function Mp(){var e=A.A;return A.A=v0,e}function Mr(){$e=4,Zn||(je&4194048)!==je&&Lt.current!==null||(ra=!0),(Fn&134217727)===0&&(El&134217727)===0||Ve===null||$n(Ve,je,Ut,!1)}function ns(e,t,n){var a=_e;_e|=2;var o=Np(),s=Mp();(Ve!==e||je!==t)&&(Ar=null,sa(e,t)),t=!1;var x=$e;e:do try{if(Le!==0&&Ee!==null){var S=Ee,C=Bt;switch(Le){case 8:ts(),x=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var O=Le;if(Le=0,Bt=null,ca(e,S,C,O),n&&ra){x=0;break e}break;default:O=Le,Le=0,Bt=null,ca(e,S,C,O)}}w0(),x=$e;break}catch(G){zp(e,G)}while(!0);return t&&e.shellSuspendCounter++,vn=ml=null,_e=a,A.H=o,A.A=s,Ee===null&&(Ve=null,je=0,$i()),x}function w0(){for(;Ee!==null;)Dp(Ee)}function E0(e,t){var n=_e;_e|=2;var a=Np(),o=Mp();Ve!==e||je!==t?(Ar=null,zr=yt()+500,sa(e,t)):ra=Ca(e,t);e:do try{if(Le!==0&&Ee!==null){t=Ee;var s=Bt;t:switch(Le){case 1:Le=0,Bt=null,ca(e,t,s,1);break;case 2:case 9:if(Gf(s)){Le=0,Bt=null,_p(t);break}t=function(){Le!==2&&Le!==9||Ve!==e||(Le=7),sn(e)},s.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Gf(s)?(Le=0,Bt=null,_p(t)):(Le=0,Bt=null,ca(e,t,s,7));break;case 5:var x=null;switch(Ee.tag){case 26:x=Ee.memoizedState;case 5:case 27:var S=Ee;if(x?yh(x):S.stateNode.complete){Le=0,Bt=null;var C=S.sibling;if(C!==null)Ee=C;else{var O=S.return;O!==null?(Ee=O,Dr(O)):Ee=null}break t}}Le=0,Bt=null,ca(e,t,s,5);break;case 6:Le=0,Bt=null,ca(e,t,s,6);break;case 8:ts(),$e=6;break e;default:throw Error(u(462))}}T0();break}catch(G){zp(e,G)}while(!0);return vn=ml=null,A.H=a,A.A=o,_e=n,Ee!==null?0:(Ve=null,je=0,$i(),$e)}function T0(){for(;Ee!==null&&!hu();)Dp(Ee)}function Dp(e){var t=np(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,t===null?Dr(e):Ee=t}function _p(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jd(n,t,t.pendingProps,t.type,void 0,je);break;case 11:t=Jd(n,t,t.pendingProps,t.type.render,t.ref,je);break;case 5:xo(t);default:ap(n,t),t=Ee=Mf(t,Nn),t=np(n,t,Nn)}e.memoizedProps=e.pendingProps,t===null?Dr(e):Ee=t}function ca(e,t,n,a){vn=ml=null,xo(t),Pl=null,Va=0;var o=t.return;try{if(p0(e,o,t,n,je)){$e=1,br(e,Qt(n,e.current)),Ee=null;return}}catch(s){if(o!==null)throw Ee=o,s;$e=1,br(e,Qt(n,e.current)),Ee=null;return}t.flags&32768?(Ae||a===1?e=!0:ra||(je&536870912)!==0?e=!1:(Zn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Op(t,e)):Dr(t)}function Dr(e){var t=e;do{if((t.flags&32768)!==0){Op(t,Zn);return}e=t.return;var n=g0(t.alternate,t,Nn);if(n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function Op(e,t){do{var n=x0(e.alternate,e);if(n!==null){n.flags&=32767,Ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=n}while(e!==null);$e=6,Ee=null}function Lp(e,t,n,a,o,s,x,S,C){e.cancelPendingCommit=null;do _r();while(rt!==0);if((_e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Vu,a1(e,n,s,x,S,C),e===Ve&&(Ee=Ve=null,je=0),oa=t,Jn=e,Mn=n,Wo=s,Po=o,Ep=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,A0(he,function(){return qp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,o=Z.p,Z.p=2,x=_e,_e|=4;try{y0(e,t,n)}finally{_e=x,Z.p=o,A.T=a}}rt=1,Rp(),Bp(),Up()}}function Rp(){if(rt===1){rt=0;var e=Jn,t=oa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{gp(t,e);var s=hs,x=kf(e.containerInfo),S=s.focusedElem,C=s.selectionRange;if(x!==S&&S&&S.ownerDocument&&Sf(S.ownerDocument.documentElement,S)){if(C!==null&&Uu(S)){var O=C.start,G=C.end;if(G===void 0&&(G=O),"selectionStart"in S)S.selectionStart=O,S.selectionEnd=Math.min(G,S.value.length);else{var Q=S.ownerDocument||document,R=Q&&Q.defaultView||window;if(R.getSelection){var H=R.getSelection(),ie=S.textContent.length,de=Math.min(C.start,ie),qe=C.end===void 0?de:Math.min(C.end,ie);!H.extend&&de>qe&&(x=qe,qe=de,de=x);var N=vf(S,de),z=vf(S,qe);if(N&&z&&(H.rangeCount!==1||H.anchorNode!==N.node||H.anchorOffset!==N.offset||H.focusNode!==z.node||H.focusOffset!==z.offset)){var _=Q.createRange();_.setStart(N.node,N.offset),H.removeAllRanges(),de>qe?(H.addRange(_),H.extend(z.node,z.offset)):(_.setEnd(z.node,z.offset),H.addRange(_))}}}}for(Q=[],H=S;H=H.parentNode;)H.nodeType===1&&Q.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Q.length;S++){var I=Q[S];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Xr=!!ps,hs=ps=null}finally{_e=o,Z.p=a,A.T=n}}e.current=t,rt=2}}function Bp(){if(rt===2){rt=0;var e=Jn,t=oa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=A.T,A.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{fp(e,t.alternate,t)}finally{_e=o,Z.p=a,A.T=n}}rt=3}}function Up(){if(rt===4||rt===3){rt=0,mu();var e=Jn,t=oa,n=Mn,a=Ep;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,oa=Jn=null,Hp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kn=null),bu(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=A.T,o=Z.p,Z.p=2,A.T=null;try{for(var s=e.onRecoverableError,x=0;x<a.length;x++){var S=a[x];s(S.value,{componentStack:S.stack})}}finally{A.T=t,Z.p=o}}(Mn&3)!==0&&_r(),sn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===es?ri++:(ri=0,es=e):ri=0,ui(0)}}function Hp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ya(t)))}function _r(){return Rp(),Bp(),Up(),qp()}function qp(){if(rt!==5)return!1;var e=Jn,t=Wo;Wo=0;var n=bu(Mn),a=A.T,o=Z.p;try{Z.p=32>n?32:n,A.T=null,n=Po,Po=null;var s=Jn,x=Mn;if(rt=0,oa=Jn=null,Mn=0,(_e&6)!==0)throw Error(u(331));var S=_e;if(_e|=4,Sp(s.current),yp(s,s.current,x,n),_e=S,ui(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(bt,s)}catch{}return!0}finally{Z.p=o,A.T=a,Hp(e,t)}}function Yp(e,t,n){t=Qt(n,t),t=Do(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(ja(e,2),sn(e))}function Re(e,t,n){if(e.tag===3)Yp(e,e,n);else for(;t!==null;){if(t.tag===3){Yp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=Qt(n,e),n=Gd(2),a=Vn(t,n,2),a!==null&&(Vd(n,a,t,e),ja(a,2),sn(a));break}}t=t.return}}function ls(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new S0;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Ko=!0,o.add(n),e=C0.bind(null,e,t,n),t.then(e,e))}function C0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(je&n)===n&&($e===4||$e===3&&(je&62914560)===je&&300>yt()-jr?(_e&2)===0&&sa(e,0):Jo|=n,ua===je&&(ua=0)),sn(e)}function Gp(e,t){t===0&&(t=Lc()),e=dl(e,t),e!==null&&(ja(e,t),sn(e))}function j0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gp(e,n)}function z0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Gp(e,n)}function A0(e,t){return Ml(e,t)}var Or=null,fa=null,as=!1,Lr=!1,is=!1,Wn=0;function sn(e){e!==fa&&e.next===null&&(fa===null?Or=fa=e:fa=fa.next=e),Lr=!0,as||(as=!0,M0())}function ui(e,t){if(!is&&Lr){is=!0;do for(var n=!1,a=Or;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var x=a.suspendedLanes,S=a.pingedLanes;s=(1<<31-Ge(42|e)+1)-1,s&=o&~(x&~S),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Qp(a,s))}else s=je,s=Hi(a,a===Ve?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Ca(a,s)||(n=!0,Qp(a,s));a=a.next}while(n);is=!1}}function N0(){Vp()}function Vp(){Lr=as=!1;var e=0;Wn!==0&&Y0()&&(e=Wn);for(var t=yt(),n=null,a=Or;a!==null;){var o=a.next,s=Ip(a,t);s===0?(a.next=null,n===null?Or=o:n.next=o,o===null&&(fa=n)):(n=a,(e!==0||(s&3)!==0)&&(Lr=!0)),a=o}rt!==0&&rt!==5||ui(e),Wn!==0&&(Wn=0)}function Ip(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var x=31-Ge(s),S=1<<x,C=o[x];C===-1?((S&n)===0||(S&a)!==0)&&(o[x]=l1(S,t)):C<=t&&(e.expiredLanes|=S),s&=~S}if(t=Ve,n=je,n=Hi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ta(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ca(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ta(a),bu(n)){case 2:case 8:n=P;break;case 32:n=he;break;case 268435456:n=Oe;break;default:n=he}return a=Xp.bind(null,e),n=Ml(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ta(a),e.callbackPriority=2,e.callbackNode=null,2}function Xp(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var a=je;return a=Hi(e,e===Ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Cp(e,a,t),Ip(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Xp.bind(null,e):null)}function Qp(e,t){if(_r())return null;Cp(e,t,!0)}function M0(){V0(function(){(_e&6)!==0?Ml(V,N0):Vp()})}function rs(){if(Wn===0){var e=Jl;e===0&&(e=Ri,Ri<<=1,(Ri&261888)===0&&(Ri=256)),Wn=e}return Wn}function Zp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Fp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function D0(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Zp((o[wt]||null).action),x=a.submitter;x&&(t=(t=x[wt]||null)?Zp(t.formAction):x.getAttribute("formAction"),t!==null&&(s=t,x=null));var S=new Zi("action","action",null,a,o);e.push({event:S,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var C=x?Fp(o,x):new FormData(o);Co(n,{pending:!0,data:C,method:o.method,action:s},null,C)}}else typeof s=="function"&&(S.preventDefault(),C=x?Fp(o,x):new FormData(o),Co(n,{pending:!0,data:C,method:o.method,action:s},s,C))},currentTarget:o}]})}}for(var us=0;us<Gu.length;us++){var os=Gu[us],_0=os.toLowerCase(),O0=os[0].toUpperCase()+os.slice(1);tn(_0,"on"+O0)}tn(Tf,"onAnimationEnd"),tn(Cf,"onAnimationIteration"),tn(jf,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(J1,"onTransitionRun"),tn($1,"onTransitionStart"),tn(W1,"onTransitionCancel"),tn(zf,"onTransitionEnd"),Rl("onMouseEnter",["mouseout","mouseover"]),Rl("onMouseLeave",["mouseout","mouseover"]),Rl("onPointerEnter",["pointerout","pointerover"]),Rl("onPointerLeave",["pointerout","pointerover"]),ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ol("onBeforeInput",["compositionend","keypress","textInput","paste"]),ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function Kp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var x=a.length-1;0<=x;x--){var S=a[x],C=S.instance,O=S.currentTarget;if(S=S.listener,C!==s&&o.isPropagationStopped())break e;s=S,o.currentTarget=O;try{s(o)}catch(G){Ji(G)}o.currentTarget=null,s=C}else for(x=0;x<a.length;x++){if(S=a[x],C=S.instance,O=S.currentTarget,S=S.listener,C!==s&&o.isPropagationStopped())break e;s=S,o.currentTarget=O;try{s(o)}catch(G){Ji(G)}o.currentTarget=null,s=C}}}}function Te(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var a=e+"__bubble";n.has(a)||(Jp(t,e,2,!1),n.add(a))}function ss(e,t,n){var a=0;t&&(a|=4),Jp(n,e,a,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[Rr]){e[Rr]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,ss("selectionchange",!1,t))}}function Jp(e,t,n,a){switch(Th(t)){case 2:var o=sx;break;case 8:o=cx;break;default:o=Ts}n=o.bind(null,t,n,e),o=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fs(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var S=a.stateNode.containerInfo;if(S===o)break;if(x===4)for(x=a.return;x!==null;){var C=x.tag;if((C===3||C===4)&&x.stateNode.containerInfo===o)return;x=x.return}for(;S!==null;){if(x=_l(S),x===null)return;if(C=x.tag,C===5||C===6||C===26||C===27){a=s=x;continue e}S=S.parentNode}}a=a.return}ef(function(){var O=s,G=ju(n),Q=[];e:{var R=Af.get(e);if(R!==void 0){var H=Zi,ie=e;switch(e){case"keypress":if(Xi(n)===0)break e;case"keydown":case"keyup":H=z1;break;case"focusin":ie="focus",H=_u;break;case"focusout":ie="blur",H=_u;break;case"beforeblur":case"afterblur":H=_u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=M1;break;case Tf:case Cf:case jf:H=b1;break;case zf:H=_1;break;case"scroll":case"scrollend":H=h1;break;case"wheel":H=L1;break;case"copy":case"cut":case"paste":H=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=rf;break;case"toggle":case"beforetoggle":H=B1}var de=(t&4)!==0,qe=!de&&(e==="scroll"||e==="scrollend"),N=de?R!==null?R+"Capture":null:R;de=[];for(var z=O,_;z!==null;){var I=z;if(_=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||_===null||N===null||(I=Na(z,N),I!=null&&de.push(si(z,I,_))),qe)break;z=z.return}0<de.length&&(R=new H(R,ie,null,n,G),Q.push({event:R,listeners:de}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",R&&n!==Cu&&(ie=n.relatedTarget||n.fromElement)&&(_l(ie)||ie[Dl]))break e;if((H||R)&&(R=G.window===G?G:(R=G.ownerDocument)?R.defaultView||R.parentWindow:window,H?(ie=n.relatedTarget||n.toElement,H=O,ie=ie?_l(ie):null,ie!==null&&(qe=d(ie),de=ie.tag,ie!==qe||de!==5&&de!==27&&de!==6)&&(ie=null)):(H=null,ie=O),H!==ie)){if(de=lf,I="onMouseLeave",N="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(de=rf,I="onPointerLeave",N="onPointerEnter",z="pointer"),qe=H==null?R:Aa(H),_=ie==null?R:Aa(ie),R=new de(I,z+"leave",H,n,G),R.target=qe,R.relatedTarget=_,I=null,_l(G)===O&&(de=new de(N,z+"enter",ie,n,G),de.target=_,de.relatedTarget=qe,I=de),qe=I,H&&ie)t:{for(de=R0,N=H,z=ie,_=0,I=N;I;I=de(I))_++;I=0;for(var ce=z;ce;ce=de(ce))I++;for(;0<_-I;)N=de(N),_--;for(;0<I-_;)z=de(z),I--;for(;_--;){if(N===z||z!==null&&N===z.alternate){de=N;break t}N=de(N),z=de(z)}de=null}else de=null;H!==null&&$p(Q,R,H,de,!1),ie!==null&&qe!==null&&$p(Q,qe,ie,de,!0)}}e:{if(R=O?Aa(O):window,H=R.nodeName&&R.nodeName.toLowerCase(),H==="select"||H==="input"&&R.type==="file")var Me=hf;else if(df(R))if(mf)Me=Z1;else{Me=X1;var ue=I1}else H=R.nodeName,!H||H.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&Tu(O.elementType)&&(Me=hf):Me=Q1;if(Me&&(Me=Me(e,O))){pf(Q,Me,n,G);break e}ue&&ue(e,R,O),e==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&Eu(R,"number",R.value)}switch(ue=O?Aa(O):window,e){case"focusin":(df(ue)||ue.contentEditable==="true")&&(Gl=ue,Hu=O,Ua=null);break;case"focusout":Ua=Hu=Gl=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,wf(Q,n,G);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":wf(Q,n,G)}var be;if(Lu)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Yl?cf(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(uf&&n.locale!=="ko"&&(Yl||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Yl&&(be=tf()):(Rn=G,Nu="value"in Rn?Rn.value:Rn.textContent,Yl=!0)),ue=Br(O,ze),0<ue.length&&(ze=new af(ze,e,null,n,G),Q.push({event:ze,listeners:ue}),be?ze.data=be:(be=ff(n),be!==null&&(ze.data=be)))),(be=H1?q1(e,n):Y1(e,n))&&(ze=Br(O,"onBeforeInput"),0<ze.length&&(ue=new af("onBeforeInput","beforeinput",null,n,G),Q.push({event:ue,listeners:ze}),ue.data=be)),D0(Q,e,O,n,G)}Kp(Q,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Na(e,n),o!=null&&a.unshift(si(e,o,s)),o=Na(e,t),o!=null&&a.push(si(e,o,s))),e.tag===3)return a;e=e.return}return[]}function R0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $p(e,t,n,a,o){for(var s=t._reactName,x=[];n!==null&&n!==a;){var S=n,C=S.alternate,O=S.stateNode;if(S=S.tag,C!==null&&C===a)break;S!==5&&S!==26&&S!==27||O===null||(C=O,o?(O=Na(n,s),O!=null&&x.unshift(si(n,O,C))):o||(O=Na(n,s),O!=null&&x.push(si(n,O,C)))),n=n.return}x.length!==0&&e.push({event:t,listeners:x})}var B0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function Wp(e){return(typeof e=="string"?e:""+e).replace(B0,`
`).replace(U0,"")}function Pp(e,t){return t=Wp(t),Wp(e)===t}function He(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ul(e,""+a);break;case"className":Yi(e,"class",a);break;case"tabIndex":Yi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,n,a);break;case"style":Wc(e,a,s);break;case"data":if(t!=="object"){Yi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",o.name,o,null),He(e,t,"formEncType",o.formEncType,o,null),He(e,t,"formMethod",o.formMethod,o,null),He(e,t,"formTarget",o.formTarget,o,null)):(He(e,t,"encType",o.encType,o,null),He(e,t,"method",o.method,o,null),He(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Te("scroll",e);break;case"onScrollEnd":a!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Te("beforetoggle",e),Te("toggle",e),qi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=d1.get(n)||n,qi(e,n,a))}}function ds(e,t,n,a,o,s){switch(n){case"style":Wc(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&Ul(e,""+a);break;case"onScroll":a!=null&&Te("scroll",e);break;case"onScrollEnd":a!=null&&Te("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[wt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):qi(e,n,a)}}}function ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var x=n[s];if(x!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,s,x,n,null)}}o&&He(e,t,"srcSet",n.srcSet,n,null),a&&He(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var S=s=x=o=null,C=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var G=n[a];if(G!=null)switch(a){case"name":o=G;break;case"type":x=G;break;case"checked":C=G;break;case"defaultChecked":O=G;break;case"value":s=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:He(e,t,a,G,n,null)}}Fc(e,s,S,C,O,x,o,!1);return;case"select":Te("invalid",e),a=x=s=null;for(o in n)if(n.hasOwnProperty(o)&&(S=n[o],S!=null))switch(o){case"value":s=S;break;case"defaultValue":x=S;break;case"multiple":a=S;default:He(e,t,o,S,n,null)}t=s,n=x,e.multiple=!!a,t!=null?Bl(e,!!a,t,!1):n!=null&&Bl(e,!!a,n,!0);return;case"textarea":Te("invalid",e),s=o=a=null;for(x in n)if(n.hasOwnProperty(x)&&(S=n[x],S!=null))switch(x){case"value":a=S;break;case"defaultValue":o=S;break;case"children":s=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(91));break;default:He(e,t,x,S,n,null)}Jc(e,a,o,s);return;case"option":for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!=null)&&(C==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,t,C,a,n,null));return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(a=0;a<oi.length;a++)Te(oi[a],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,O,a,n,null)}return;default:if(Tu(t)){for(G in n)n.hasOwnProperty(G)&&(a=n[G],a!==void 0&&ds(e,t,G,a,n,void 0));return}}for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!=null&&He(e,t,S,a,n,null))}function H0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,x=null,S=null,C=null,O=null,G=null;for(H in n){var Q=n[H];if(n.hasOwnProperty(H)&&Q!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=Q;default:a.hasOwnProperty(H)||He(e,t,H,null,a,Q)}}for(var R in a){var H=a[R];if(Q=n[R],a.hasOwnProperty(R)&&(H!=null||Q!=null))switch(R){case"type":s=H;break;case"name":o=H;break;case"checked":O=H;break;case"defaultChecked":G=H;break;case"value":x=H;break;case"defaultValue":S=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(u(137,t));break;default:H!==Q&&He(e,t,R,H,a,Q)}}wu(e,x,S,C,O,G,s,o);return;case"select":H=x=S=R=null;for(s in n)if(C=n[s],n.hasOwnProperty(s)&&C!=null)switch(s){case"value":break;case"multiple":H=C;default:a.hasOwnProperty(s)||He(e,t,s,null,a,C)}for(o in a)if(s=a[o],C=n[o],a.hasOwnProperty(o)&&(s!=null||C!=null))switch(o){case"value":R=s;break;case"defaultValue":S=s;break;case"multiple":x=s;default:s!==C&&He(e,t,o,s,a,C)}t=S,n=x,a=H,R!=null?Bl(e,!!n,R,!1):!!a!=!!n&&(t!=null?Bl(e,!!n,t,!0):Bl(e,!!n,n?[]:"",!1));return;case"textarea":H=R=null;for(S in n)if(o=n[S],n.hasOwnProperty(S)&&o!=null&&!a.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:He(e,t,S,null,a,o)}for(x in a)if(o=a[x],s=n[x],a.hasOwnProperty(x)&&(o!=null||s!=null))switch(x){case"value":R=o;break;case"defaultValue":H=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&He(e,t,x,o,a,s)}Kc(e,R,H);return;case"option":for(var ie in n)R=n[ie],n.hasOwnProperty(ie)&&R!=null&&!a.hasOwnProperty(ie)&&(ie==="selected"?e.selected=!1:He(e,t,ie,null,a,R));for(C in a)R=a[C],H=n[C],a.hasOwnProperty(C)&&R!==H&&(R!=null||H!=null)&&(C==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":He(e,t,C,R,a,H));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)R=n[de],n.hasOwnProperty(de)&&R!=null&&!a.hasOwnProperty(de)&&He(e,t,de,null,a,R);for(O in a)if(R=a[O],H=n[O],a.hasOwnProperty(O)&&R!==H&&(R!=null||H!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:He(e,t,O,R,a,H)}return;default:if(Tu(t)){for(var qe in n)R=n[qe],n.hasOwnProperty(qe)&&R!==void 0&&!a.hasOwnProperty(qe)&&ds(e,t,qe,void 0,a,R);for(G in a)R=a[G],H=n[G],!a.hasOwnProperty(G)||R===H||R===void 0&&H===void 0||ds(e,t,G,R,a,H);return}}for(var N in n)R=n[N],n.hasOwnProperty(N)&&R!=null&&!a.hasOwnProperty(N)&&He(e,t,N,null,a,R);for(Q in a)R=a[Q],H=n[Q],!a.hasOwnProperty(Q)||R===H||R==null&&H==null||He(e,t,Q,R,a,H)}function eh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function q0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],s=o.transferSize,x=o.initiatorType,S=o.duration;if(s&&S&&eh(x)){for(x=0,S=o.responseEnd,a+=1;a<n.length;a++){var C=n[a],O=C.startTime;if(O>S)break;var G=C.transferSize,Q=C.initiatorType;G&&eh(Q)&&(C=C.responseEnd,x+=G*(C<S?1:(S-O)/(C-O)))}if(--a,t+=8*(s+x)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ps=null,hs=null;function Ur(e){return e.nodeType===9?e:e.ownerDocument}function th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=null;function Y0(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(I0)}:lh;function I0(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function ih(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),ma(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ci(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ci(n);for(var s=n.firstChild;s;){var x=s.nextSibling,S=s.nodeName;s[za]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=x}}else n==="body"&&ci(e.ownerDocument.body);n=o}while(n);ma(t)}function rh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xs(n),Su(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function X0(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[za])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function Q0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$t(e.nextSibling),e===null))return null;return e}function uh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function ys(e){return e.data==="$?"||e.data==="$~"}function bs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Z0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vs=null;function oh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return $t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ch(e,t,n){switch(t=Ur(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ci(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Su(e)}var Wt=new Map,fh=new Set;function Hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=Z.d;Z.d={f:F0,r:K0,D:J0,C:$0,L:W0,m:P0,X:tx,S:ex,M:nx};function F0(){var e=Dn.f(),t=Nr();return e||t}function K0(e){var t=Ol(e);t!==null&&t.tag===5&&t.type==="form"?zd(t):Dn.r(e)}var da=typeof document>"u"?null:document;function dh(e,t,n){var a=da;if(a&&typeof t=="string"&&t){var o=It(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),fh.has(o)||(fh.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ht(t,"link",e),ot(t),a.head.appendChild(t)))}}function J0(e){Dn.D(e),dh("dns-prefetch",e,null)}function $0(e,t){Dn.C(e,t),dh("preconnect",e,t)}function W0(e,t,n){Dn.L(e,t,n);var a=da;if(a&&e&&t){var o='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+It(n.imageSizes)+'"]')):o+='[href="'+It(e)+'"]';var s=o;switch(t){case"style":s=pa(e);break;case"script":s=ha(e)}Wt.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(fi(s))||t==="script"&&a.querySelector(di(s))||(t=a.createElement("link"),ht(t,"link",e),ot(t),a.head.appendChild(t)))}}function P0(e,t){Dn.m(e,t);var n=da;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+It(a)+'"][href="'+It(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ha(e)}if(!Wt.has(s)&&(e=y({rel:"modulepreload",href:e},t),Wt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(s)))return}a=n.createElement("link"),ht(a,"link",e),ot(a),n.head.appendChild(a)}}}function ex(e,t,n){Dn.S(e,t,n);var a=da;if(a&&e){var o=Ll(a).hoistableStyles,s=pa(e);t=t||"default";var x=o.get(s);if(!x){var S={loading:0,preload:null};if(x=a.querySelector(fi(s)))S.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(s))&&Ss(e,n);var C=x=a.createElement("link");ot(C),ht(C,"link",e),C._p=new Promise(function(O,G){C.onload=O,C.onerror=G}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,qr(x,t,a)}x={type:"stylesheet",instance:x,count:1,state:S},o.set(s,x)}}}function tx(e,t){Dn.X(e,t);var n=da;if(n&&e){var a=Ll(n).hoistableScripts,o=ha(e),s=a.get(o);s||(s=n.querySelector(di(o)),s||(e=y({src:e,async:!0},t),(t=Wt.get(o))&&ks(e,t),s=n.createElement("script"),ot(s),ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function nx(e,t){Dn.M(e,t);var n=da;if(n&&e){var a=Ll(n).hoistableScripts,o=ha(e),s=a.get(o);s||(s=n.querySelector(di(o)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&ks(e,t),s=n.createElement("script"),ot(s),ht(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function ph(e,t,n,a){var o=(o=oe.current)?Hr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pa(n.href),n=Ll(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pa(n.href);var s=Ll(o).hoistableStyles,x=s.get(e);if(x||(o=o.ownerDocument||o,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,x),(s=o.querySelector(fi(e)))&&!s._p&&(x.instance=s,x.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),s||lx(o,e,n,x.state))),t&&a===null)throw Error(u(528,""));return x}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ha(n),n=Ll(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function pa(e){return'href="'+It(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function lx(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ht(t,"link",n),ot(t),e.head.appendChild(t))}function ha(e){return'[src="'+It(e)+'"]'}function di(e){return"script[async]"+e}function mh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(a)return t.instance=a,ot(a),a;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ot(a),ht(a,"style",o),qr(a,n.precedence,e),t.instance=a;case"stylesheet":o=pa(n.href);var s=e.querySelector(fi(o));if(s)return t.state.loading|=4,t.instance=s,ot(s),s;a=hh(n),(o=Wt.get(o))&&Ss(a,o),s=(e.ownerDocument||e).createElement("link"),ot(s);var x=s;return x._p=new Promise(function(S,C){x.onload=S,x.onerror=C}),ht(s,"link",a),t.state.loading|=4,qr(s,n.precedence,e),t.instance=s;case"script":return s=ha(n.src),(o=e.querySelector(di(s)))?(t.instance=o,ot(o),o):(a=n,(o=Wt.get(s))&&(a=y({},n),ks(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),ot(o),ht(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,qr(a,n.precedence,e));return t.instance}function qr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,x=0;x<a.length;x++){var S=a[x];if(S.dataset.precedence===t)s=S;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yr=null;function gh(e,t,n){if(Yr===null){var a=new Map,o=Yr=new Map;o.set(n,a)}else o=Yr,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[za]||s[ct]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var x=s.getAttribute(t)||"";x=e+x;var S=a.get(x);S?S.push(s):a.set(x,[s])}}return a}function xh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ax(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ix(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=pa(a.href),s=t.querySelector(fi(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,ot(s);return}s=t.ownerDocument||t,a=hh(a),(o=Wt.get(o))&&Ss(a,o),s=s.createElement("link"),ot(s);var x=s;x._p=new Promise(function(S,C){x.onload=S,x.onerror=C}),ht(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ws=0;function rx(e,t){return e.stylesheets&&e.count===0&&Ir(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ir(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&ws===0&&(ws=62500*q0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ir(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>ws?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ir(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Ir(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach(ux,e),Vr=null,Gr.call(e))}function ux(e,t){if(!(t.state.loading&4)){var n=Vr.get(e);if(n)var a=n.get(null);else{n=new Map,Vr.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var x=o[s];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(n.set(x.dataset.precedence,x),a=x)}a&&n.set(null,a)}o=t.instance,x=o.getAttribute("data-precedence"),s=n.get(x)||a,s===a&&n.set(null,o),n.set(x,o),this.count++,a=Gr.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var pi={$$typeof:M,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function ox(e,t,n,a,o,s,x,S,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.hiddenUpdates=xu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function bh(e,t,n,a,o,s,x,S,C,O,G,Q){return e=new ox(e,t,n,x,C,O,G,Q,S),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},io(s),e}function vh(e){return e?(e=Xl,e):Xl}function Sh(e,t,n,a,o,s){o=vh(o),a.context===null?a.context=o:a.pendingContext=o,a=Gn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Vn(e,a,t),n!==null&&(At(n,e,t),Xa(n,e,t))}function kh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){kh(e,t),(e=e.alternate)&&kh(e,t)}function wh(e){if(e.tag===13||e.tag===31){var t=dl(e,67108864);t!==null&&At(t,e,67108864),Es(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var t=Ht();t=yu(t);var n=dl(e,t);n!==null&&At(n,e,t),Es(e,t)}}var Xr=!0;function sx(e,t,n,a){var o=A.T;A.T=null;var s=Z.p;try{Z.p=2,Ts(e,t,n,a)}finally{Z.p=s,A.T=o}}function cx(e,t,n,a){var o=A.T;A.T=null;var s=Z.p;try{Z.p=8,Ts(e,t,n,a)}finally{Z.p=s,A.T=o}}function Ts(e,t,n,a){if(Xr){var o=Cs(a);if(o===null)fs(e,t,a,Qr,n),Ch(e,a);else if(dx(o,e,t,n,a))a.stopPropagation();else if(Ch(e,a),t&4&&-1<fx.indexOf(e)){for(;o!==null;){var s=Ol(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var x=ul(s.pendingLanes);if(x!==0){var S=s;for(S.pendingLanes|=2,S.entangledLanes|=2;x;){var C=1<<31-Ge(x);S.entanglements[1]|=C,x&=~C}sn(s),(_e&6)===0&&(zr=yt()+500,ui(0))}}break;case 31:case 13:S=dl(s,2),S!==null&&At(S,s,2),Nr(),Es(s,2)}if(s=Cs(a),s===null&&fs(e,t,a,Qr,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else fs(e,t,a,null,n)}}function Cs(e){return e=ju(e),js(e)}var Qr=null;function js(e){if(Qr=null,e=_l(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qr=e,null}function Th(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gu()){case V:return 2;case P:return 8;case he:case we:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var zs=!1,el=null,tl=null,nl=null,hi=new Map,mi=new Map,ll=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ch(e,t){switch(e){case"focusin":case"focusout":el=null;break;case"dragenter":case"dragleave":tl=null;break;case"mouseover":case"mouseout":nl=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function gi(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Ol(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dx(e,t,n,a,o){switch(t){case"focusin":return el=gi(el,e,t,n,a,o),!0;case"dragenter":return tl=gi(tl,e,t,n,a,o),!0;case"mouseover":return nl=gi(nl,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return hi.set(s,gi(hi.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,mi.set(s,gi(mi.get(s)||null,e,t,n,a,o)),!0}return!1}function jh(e){var t=_l(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,qc(e.priority,function(){Eh(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,qc(e.priority,function(){Eh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Cu=a,n.target.dispatchEvent(a),Cu=null}else return t=Ol(n),t!==null&&wh(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){Zr(e)&&n.delete(t)}function px(){zs=!1,el!==null&&Zr(el)&&(el=null),tl!==null&&Zr(tl)&&(tl=null),nl!==null&&Zr(nl)&&(nl=null),hi.forEach(zh),mi.forEach(zh)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,zs||(zs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,px)))}var Kr=null;function Ah(e){Kr!==e&&(Kr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Kr===e&&(Kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(js(a||n)===null)continue;break}var s=Ol(n);s!==null&&(e.splice(t,3),t-=3,Co(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function ma(e){function t(C){return Fr(C,e)}el!==null&&Fr(el,e),tl!==null&&Fr(tl,e),nl!==null&&Fr(nl,e),hi.forEach(t),mi.forEach(t);for(var n=0;n<ll.length;n++){var a=ll[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ll.length&&(n=ll[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&ll.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],x=o[wt]||null;if(typeof s=="function")x||Ah(n);else if(x){var S=null;if(s&&s.hasAttribute("formAction")){if(o=s,x=s[wt]||null)S=x.formAction;else if(js(o)!==null)continue}else S=x.action;typeof S=="function"?n[a+1]=S:(n.splice(a,3),a-=3),Ah(n)}}}function Nh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(x){return o=x})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function As(e){this._internalRoot=e}Jr.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ht();Sh(n,a,e,t,null,null)},Jr.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sh(e.current,2,null,e,null,null),Nr(),t[Dl]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ll.length&&t!==0&&t<ll[n].priority;n++);ll.splice(n,0,e),n===0&&jh(e)}};var Mh=r.version;if(Mh!=="19.2.3")throw Error(u(527,Mh,"19.2.3"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=p(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var hx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{bt=$r.inject(hx),it=$r}catch{}}return yi.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,a="",o=Ud,s=Hd,x=qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=bh(e,1,!1,null,null,n,a,null,o,s,x,Nh),e[Dl]=t.current,cs(e),new As(t)},yi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var a=!1,o="",s=Ud,x=Hd,S=qd,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(x=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=bh(e,1,!0,t,n??null,a,o,C,s,x,S,Nh),t.context=vh(null),n=t.current,a=Ht(),a=yu(a),o=Gn(a),o.callback=null,Vn(n,o,a),n=a,t.current.lanes=n,ja(t,n),sn(t),e[Dl]=t.current,cs(e),new Jr(t)},yi.version="19.2.3",yi}var Yh;function Ex(){if(Yh)return Ds.exports;Yh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ds.exports=wx(),Ds.exports}var Tx=Ex();const Cx=ou(Tx);function jx(){const[l,r]=ge.useState([]),i=ge.useRef(0);return ge.useEffect(()=>{const u=[],f=d=>{const c=i.current+1;i.current=c,r(m=>[...m,{id:c,x:d.clientX,y:d.clientY}].slice(-10));const h=window.setTimeout(()=>{r(m=>m.filter(p=>p.id!==c))},1300);u.push(h)};return window.addEventListener("pointerdown",f,{passive:!0}),()=>{window.removeEventListener("pointerdown",f),u.forEach(d=>window.clearTimeout(d))}},[]),g.jsx("div",{className:"clickRipples","aria-hidden":"true",children:l.map(u=>g.jsxs(ge.Fragment,{children:[g.jsx("span",{className:"rippleDots",style:{left:`${u.x}px`,top:`${u.y}px`}}),g.jsx("span",{className:"ripple rippleA",style:{left:`${u.x}px`,top:`${u.y}px`}}),g.jsx("span",{className:"ripple rippleB",style:{left:`${u.x}px`,top:`${u.y}px`}})]},u.id))})}function zx(l,r){const i={};return(l[l.length-1]===""?[...l,""]:l).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const Ax=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Nx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Mx={};function Gh(l,r){return(Mx.jsx?Nx:Ax).test(l)}const Dx=/[ \t\n\f\r]/g;function _x(l){return typeof l=="object"?l.type==="text"?Vh(l.value):!1:Vh(l)}function Vh(l){return l.replace(Dx,"")===""}class Ai{constructor(r,i,u){this.normal=i,this.property=r,u&&(this.space=u)}}Ai.prototype.normal={};Ai.prototype.property={};Ai.prototype.space=void 0;function Bm(l,r){const i={},u={};for(const f of l)Object.assign(i,f.property),Object.assign(u,f.normal);return new Ai(i,u,r)}function tc(l){return l.toLowerCase()}class Mt{constructor(r,i){this.attribute=i,this.property=r}}Mt.prototype.attribute="";Mt.prototype.booleanish=!1;Mt.prototype.boolean=!1;Mt.prototype.commaOrSpaceSeparated=!1;Mt.prototype.commaSeparated=!1;Mt.prototype.defined=!1;Mt.prototype.mustUseProperty=!1;Mt.prototype.number=!1;Mt.prototype.overloadedBoolean=!1;Mt.prototype.property="";Mt.prototype.spaceSeparated=!1;Mt.prototype.space=void 0;let Ox=0;const ve=jl(),at=jl(),nc=jl(),K=jl(),Qe=jl(),ba=jl(),qt=jl();function jl(){return 2**++Ox}const lc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ve,booleanish:at,commaOrSpaceSeparated:qt,commaSeparated:ba,number:K,overloadedBoolean:nc,spaceSeparated:Qe},Symbol.toStringTag,{value:"Module"})),Rs=Object.keys(lc);class hc extends Mt{constructor(r,i,u,f){let d=-1;if(super(r,i),Ih(this,"space",f),typeof u=="number")for(;++d<Rs.length;){const c=Rs[d];Ih(this,Rs[d],(u&lc[c])===lc[c])}}}hc.prototype.defined=!0;function Ih(l,r,i){i&&(l[r]=i)}function ka(l){const r={},i={};for(const[u,f]of Object.entries(l.properties)){const d=new hc(u,l.transform(l.attributes||{},u),f,l.space);l.mustUseProperty&&l.mustUseProperty.includes(u)&&(d.mustUseProperty=!0),r[u]=d,i[tc(u)]=u,i[tc(d.attribute)]=u}return new Ai(r,i,l.space)}const Um=ka({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:K,ariaColIndex:K,ariaColSpan:K,ariaControls:Qe,ariaCurrent:null,ariaDescribedBy:Qe,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Qe,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Qe,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qe,ariaLevel:K,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Qe,ariaPlaceholder:null,ariaPosInSet:K,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Qe,ariaRowCount:K,ariaRowIndex:K,ariaRowSpan:K,ariaSelected:at,ariaSetSize:K,ariaSort:null,ariaValueMax:K,ariaValueMin:K,ariaValueNow:K,ariaValueText:null,role:null},transform(l,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function Hm(l,r){return r in l?l[r]:r}function qm(l,r){return Hm(l,r.toLowerCase())}const Lx=ka({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ba,acceptCharset:Qe,accessKey:Qe,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Qe,autoFocus:ve,autoPlay:ve,blocking:Qe,capture:null,charSet:null,checked:ve,cite:null,className:Qe,cols:K,colSpan:null,content:null,contentEditable:at,controls:ve,controlsList:Qe,coords:K|ba,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:nc,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Qe,height:K,hidden:nc,high:K,href:null,hrefLang:null,htmlFor:Qe,httpEquiv:Qe,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Qe,itemRef:Qe,itemScope:ve,itemType:Qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:K,manifest:null,max:null,maxLength:K,media:null,method:null,min:null,minLength:K,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:K,pattern:null,ping:Qe,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Qe,required:ve,reversed:ve,rows:K,rowSpan:K,sandbox:Qe,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:K,sizes:null,slot:null,span:K,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:K,step:null,style:null,tabIndex:K,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:at,width:K,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Qe,axis:null,background:null,bgColor:null,border:K,borderColor:null,bottomMargin:K,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:K,leftMargin:K,link:null,longDesc:null,lowSrc:null,marginHeight:K,marginWidth:K,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:K,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:K,valueType:null,version:null,vAlign:null,vLink:null,vSpace:K,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:K,security:null,unselectable:null},space:"html",transform:qm}),Rx=ka({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qt,accentHeight:K,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:K,amplitude:K,arabicForm:null,ascent:K,attributeName:null,attributeType:null,azimuth:K,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:K,by:null,calcMode:null,capHeight:K,className:Qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:K,diffuseConstant:K,direction:null,display:null,dur:null,divisor:K,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:K,enableBackground:null,end:null,event:null,exponent:K,externalResourcesRequired:null,fill:null,fillOpacity:K,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ba,g2:ba,glyphName:ba,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:K,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:K,horizOriginX:K,horizOriginY:K,id:null,ideographic:K,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:K,k:K,k1:K,k2:K,k3:K,k4:K,kernelMatrix:qt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:K,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:K,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:K,overlineThickness:K,paintOrder:null,panose1:null,path:null,pathLength:K,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:K,pointsAtY:K,pointsAtZ:K,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qt,rev:qt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qt,requiredFeatures:qt,requiredFonts:qt,requiredFormats:qt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:K,specularExponent:K,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:K,strikethroughThickness:K,string:null,stroke:null,strokeDashArray:qt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:K,strokeOpacity:K,strokeWidth:null,style:null,surfaceScale:K,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qt,tabIndex:K,tableValues:null,target:null,targetX:K,targetY:K,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:K,underlineThickness:K,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:K,values:null,vAlphabetic:K,vMathematical:K,vectorEffect:null,vHanging:K,vIdeographic:K,version:null,vertAdvY:K,vertOriginX:K,vertOriginY:K,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:K,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Hm}),Ym=ka({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(l,r){return"xlink:"+r.slice(5).toLowerCase()}}),Gm=ka({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:qm}),Vm=ka({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(l,r){return"xml:"+r.slice(3).toLowerCase()}}),Bx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ux=/[A-Z]/g,Xh=/-[a-z]/g,Hx=/^data[-\w.:]+$/i;function qx(l,r){const i=tc(r);let u=r,f=Mt;if(i in l.normal)return l.property[l.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&Hx.test(r)){if(r.charAt(4)==="-"){const d=r.slice(5).replace(Xh,Gx);u="data"+d.charAt(0).toUpperCase()+d.slice(1)}else{const d=r.slice(4);if(!Xh.test(d)){let c=d.replace(Ux,Yx);c.charAt(0)!=="-"&&(c="-"+c),r="data"+c}}f=hc}return new f(u,r)}function Yx(l){return"-"+l.toLowerCase()}function Gx(l){return l.charAt(1).toUpperCase()}const Vx=Bm([Um,Lx,Ym,Gm,Vm],"html"),mc=Bm([Um,Rx,Ym,Gm,Vm],"svg");function Ix(l){return l.join(" ").trim()}var ga={},Bs,Qh;function Xx(){if(Qh)return Bs;Qh=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,f=/^:\s*/,d=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,h=/^\s+|\s+$/g,m=`
`,p="/",b="*",y="",v="comment",k="declaration";function j(X,D){if(typeof X!="string")throw new TypeError("First argument must be a string");if(!X)return[];D=D||{};var L=1,M=1;function W(re){var $=re.match(r);$&&(L+=$.length);var A=re.lastIndexOf(m);M=~A?re.length-A:M+re.length}function ee(){var re={line:L,column:M};return function($){return $.position=new B(re),pe(),$}}function B(re){this.start=re,this.end={line:L,column:M},this.source=D.source}B.prototype.content=X;function F(re){var $=new Error(D.source+":"+L+":"+M+": "+re);if($.reason=re,$.filename=D.source,$.line=L,$.column=M,$.source=X,!D.silent)throw $}function se(re){var $=re.exec(X);if($){var A=$[0];return W(A),X=X.slice(A.length),$}}function pe(){se(i)}function U(re){var $;for(re=re||[];$=ne();)$!==!1&&re.push($);return re}function ne(){var re=ee();if(!(p!=X.charAt(0)||b!=X.charAt(1))){for(var $=2;y!=X.charAt($)&&(b!=X.charAt($)||p!=X.charAt($+1));)++$;if($+=2,y===X.charAt($-1))return F("End of comment missing");var A=X.slice(2,$-2);return M+=2,W(A),X=X.slice($),M+=2,re({type:v,comment:A})}}function te(){var re=ee(),$=se(u);if($){if(ne(),!se(f))return F("property missing ':'");var A=se(d),Z=re({type:k,property:q($[0].replace(l,y)),value:A?q(A[0].replace(l,y)):y});return se(c),Z}}function Se(){var re=[];U(re);for(var $;$=te();)$!==!1&&(re.push($),U(re));return re}return pe(),Se()}function q(X){return X?X.replace(h,y):y}return Bs=j,Bs}var Zh;function Qx(){if(Zh)return ga;Zh=1;var l=ga&&ga.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=i;const r=l(Xx());function i(u,f){let d=null;if(!u||typeof u!="string")return d;const c=(0,r.default)(u),h=typeof f=="function";return c.forEach(m=>{if(m.type!=="declaration")return;const{property:p,value:b}=m;h?f(p,b,m):b&&(d=d||{},d[p]=b)}),d}return ga}var bi={},Fh;function Zx(){if(Fh)return bi;Fh=1,Object.defineProperty(bi,"__esModule",{value:!0}),bi.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,f=/^-(ms)-/,d=function(p){return!p||i.test(p)||l.test(p)},c=function(p,b){return b.toUpperCase()},h=function(p,b){return"".concat(b,"-")},m=function(p,b){return b===void 0&&(b={}),d(p)?p:(p=p.toLowerCase(),b.reactCompat?p=p.replace(f,h):p=p.replace(u,h),p.replace(r,c))};return bi.camelCase=m,bi}var vi,Kh;function Fx(){if(Kh)return vi;Kh=1;var l=vi&&vi.__importDefault||function(f){return f&&f.__esModule?f:{default:f}},r=l(Qx()),i=Zx();function u(f,d){var c={};return!f||typeof f!="string"||(0,r.default)(f,function(h,m){h&&m&&(c[(0,i.camelCase)(h,d)]=m)}),c}return u.default=u,vi=u,vi}var Kx=Fx();const Jx=ou(Kx),Im=Xm("end"),gc=Xm("start");function Xm(l){return r;function r(i){const u=i&&i.position&&i.position[l]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function $x(l){const r=gc(l),i=Im(l);if(r&&i)return{start:r,end:i}}function Ei(l){return!l||typeof l!="object"?"":"position"in l||"type"in l?Jh(l.position):"start"in l||"end"in l?Jh(l):"line"in l||"column"in l?ac(l):""}function ac(l){return $h(l&&l.line)+":"+$h(l&&l.column)}function Jh(l){return ac(l&&l.start)+"-"+ac(l&&l.end)}function $h(l){return l&&typeof l=="number"?l:1}class xt extends Error{constructor(r,i,u){super(),typeof i=="string"&&(u=i,i=void 0);let f="",d={},c=!1;if(i&&("line"in i&&"column"in i?d={place:i}:"start"in i&&"end"in i?d={place:i}:"type"in i?d={ancestors:[i],place:i.position}:d={...i}),typeof r=="string"?f=r:!d.cause&&r&&(c=!0,f=r.message,d.cause=r),!d.ruleId&&!d.source&&typeof u=="string"){const m=u.indexOf(":");m===-1?d.ruleId=u:(d.source=u.slice(0,m),d.ruleId=u.slice(m+1))}if(!d.place&&d.ancestors&&d.ancestors){const m=d.ancestors[d.ancestors.length-1];m&&(d.place=m.position)}const h=d.place&&"start"in d.place?d.place.start:d.place;this.ancestors=d.ancestors||void 0,this.cause=d.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=f,this.line=h?h.line:void 0,this.name=Ei(d.place)||"1:1",this.place=d.place||void 0,this.reason=this.message,this.ruleId=d.ruleId||void 0,this.source=d.source||void 0,this.stack=c&&d.cause&&typeof d.cause.stack=="string"?d.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xt.prototype.file="";xt.prototype.name="";xt.prototype.reason="";xt.prototype.message="";xt.prototype.stack="";xt.prototype.column=void 0;xt.prototype.line=void 0;xt.prototype.ancestors=void 0;xt.prototype.cause=void 0;xt.prototype.fatal=void 0;xt.prototype.place=void 0;xt.prototype.ruleId=void 0;xt.prototype.source=void 0;const xc={}.hasOwnProperty,Wx=new Map,Px=/[A-Z]/g,ey=new Set(["table","tbody","thead","tfoot","tr"]),ty=new Set(["td","th"]),Qm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ny(l,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=r.filePath||void 0;let u;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=cy(i,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=sy(i,r.jsx,r.jsxs)}const f={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:u,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?mc:Vx,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},d=Zm(f,l,void 0);return d&&typeof d!="string"?d:f.create(l,f.Fragment,{children:d||void 0},void 0)}function Zm(l,r,i){if(r.type==="element")return ly(l,r,i);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return ay(l,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return ry(l,r,i);if(r.type==="mdxjsEsm")return iy(l,r);if(r.type==="root")return uy(l,r,i);if(r.type==="text")return oy(l,r)}function ly(l,r,i){const u=l.schema;let f=u;r.tagName.toLowerCase()==="svg"&&u.space==="html"&&(f=mc,l.schema=f),l.ancestors.push(r);const d=Km(l,r.tagName,!1),c=fy(l,r);let h=bc(l,r);return ey.has(r.tagName)&&(h=h.filter(function(m){return typeof m=="string"?!_x(m):!0})),Fm(l,c,d,r),yc(c,h),l.ancestors.pop(),l.schema=u,l.create(r,d,c,i)}function ay(l,r){if(r.data&&r.data.estree&&l.evaluater){const u=r.data.estree.body[0];return u.type,l.evaluater.evaluateExpression(u.expression)}ji(l,r.position)}function iy(l,r){if(r.data&&r.data.estree&&l.evaluater)return l.evaluater.evaluateProgram(r.data.estree);ji(l,r.position)}function ry(l,r,i){const u=l.schema;let f=u;r.name==="svg"&&u.space==="html"&&(f=mc,l.schema=f),l.ancestors.push(r);const d=r.name===null?l.Fragment:Km(l,r.name,!0),c=dy(l,r),h=bc(l,r);return Fm(l,c,d,r),yc(c,h),l.ancestors.pop(),l.schema=u,l.create(r,d,c,i)}function uy(l,r,i){const u={};return yc(u,bc(l,r)),l.create(r,l.Fragment,u,i)}function oy(l,r){return r.value}function Fm(l,r,i,u){typeof i!="string"&&i!==l.Fragment&&l.passNode&&(r.node=u)}function yc(l,r){if(r.length>0){const i=r.length>1?r:r[0];i&&(l.children=i)}}function sy(l,r,i){return u;function u(f,d,c,h){const p=Array.isArray(c.children)?i:r;return h?p(d,c,h):p(d,c)}}function cy(l,r){return i;function i(u,f,d,c){const h=Array.isArray(d.children),m=gc(u);return r(f,d,c,h,{columnNumber:m?m.column-1:void 0,fileName:l,lineNumber:m?m.line:void 0},void 0)}}function fy(l,r){const i={};let u,f;for(f in r.properties)if(f!=="children"&&xc.call(r.properties,f)){const d=py(l,f,r.properties[f]);if(d){const[c,h]=d;l.tableCellAlignToStyle&&c==="align"&&typeof h=="string"&&ty.has(r.tagName)?u=h:i[c]=h}}if(u){const d=i.style||(i.style={});d[l.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return i}function dy(l,r){const i={};for(const u of r.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&l.evaluater){const d=u.data.estree.body[0];d.type;const c=d.expression;c.type;const h=c.properties[0];h.type,Object.assign(i,l.evaluater.evaluateExpression(h.argument))}else ji(l,r.position);else{const f=u.name;let d;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&l.evaluater){const h=u.value.data.estree.body[0];h.type,d=l.evaluater.evaluateExpression(h.expression)}else ji(l,r.position);else d=u.value===null?!0:u.value;i[f]=d}return i}function bc(l,r){const i=[];let u=-1;const f=l.passKeys?new Map:Wx;for(;++u<r.children.length;){const d=r.children[u];let c;if(l.passKeys){const m=d.type==="element"?d.tagName:d.type==="mdxJsxFlowElement"||d.type==="mdxJsxTextElement"?d.name:void 0;if(m){const p=f.get(m)||0;c=m+"-"+p,f.set(m,p+1)}}const h=Zm(l,d,c);h!==void 0&&i.push(h)}return i}function py(l,r,i){const u=qx(l.schema,r);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=u.commaSeparated?zx(i):Ix(i)),u.property==="style"){let f=typeof i=="object"?i:hy(l,String(i));return l.stylePropertyNameCase==="css"&&(f=my(f)),["style",f]}return[l.elementAttributeNameCase==="react"&&u.space?Bx[u.property]||u.property:u.attribute,i]}}function hy(l,r){try{return Jx(r,{reactCompat:!0})}catch(i){if(l.ignoreInvalidStyle)return{};const u=i,f=new xt("Cannot parse `style` attribute",{ancestors:l.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw f.file=l.filePath||void 0,f.url=Qm+"#cannot-parse-style-attribute",f}}function Km(l,r,i){let u;if(!i)u={type:"Literal",value:r};else if(r.includes(".")){const f=r.split(".");let d=-1,c;for(;++d<f.length;){const h=Gh(f[d])?{type:"Identifier",name:f[d]}:{type:"Literal",value:f[d]};c=c?{type:"MemberExpression",object:c,property:h,computed:!!(d&&h.type==="Literal"),optional:!1}:h}u=c}else u=Gh(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(u.type==="Literal"){const f=u.value;return xc.call(l.components,f)?l.components[f]:f}if(l.evaluater)return l.evaluater.evaluateExpression(u);ji(l)}function ji(l,r){const i=new xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:l.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=l.filePath||void 0,i.url=Qm+"#cannot-handle-mdx-estrees-without-createevaluater",i}function my(l){const r={};let i;for(i in l)xc.call(l,i)&&(r[gy(i)]=l[i]);return r}function gy(l){let r=l.replace(Px,xy);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function xy(l){return"-"+l.toLowerCase()}const Us={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},yy={};function vc(l,r){const i=yy,u=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,f=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return Jm(l,u,f)}function Jm(l,r,i){if(by(l)){if("value"in l)return l.type==="html"&&!i?"":l.value;if(r&&"alt"in l&&l.alt)return l.alt;if("children"in l)return Wh(l.children,r,i)}return Array.isArray(l)?Wh(l,r,i):""}function Wh(l,r,i){const u=[];let f=-1;for(;++f<l.length;)u[f]=Jm(l[f],r,i);return u.join("")}function by(l){return!!(l&&typeof l=="object")}const Ph=document.createElement("i");function Sc(l){const r="&"+l+";";Ph.innerHTML=r;const i=Ph.textContent;return i.charCodeAt(i.length-1)===59&&l!=="semi"||i===r?!1:i}function Yt(l,r,i,u){const f=l.length;let d=0,c;if(r<0?r=-r>f?0:f+r:r=r>f?f:r,i=i>0?i:0,u.length<1e4)c=Array.from(u),c.unshift(r,i),l.splice(...c);else for(i&&l.splice(r,i);d<u.length;)c=u.slice(d,d+1e4),c.unshift(r,0),l.splice(...c),d+=1e4,r+=1e4}function Pt(l,r){return l.length>0?(Yt(l,l.length,0,r),l):r}const em={}.hasOwnProperty;function $m(l){const r={};let i=-1;for(;++i<l.length;)vy(r,l[i]);return r}function vy(l,r){let i;for(i in r){const f=(em.call(l,i)?l[i]:void 0)||(l[i]={}),d=r[i];let c;if(d)for(c in d){em.call(f,c)||(f[c]=[]);const h=d[c];Sy(f[c],Array.isArray(h)?h:h?[h]:[])}}}function Sy(l,r){let i=-1;const u=[];for(;++i<r.length;)(r[i].add==="after"?l:u).push(r[i]);Yt(l,0,0,u)}function Wm(l,r){const i=Number.parseInt(l,r);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function an(l){return l.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=rl(/[A-Za-z]/),gt=rl(/[\dA-Za-z]/),ky=rl(/[#-'*+\--9=?A-Z^-~]/);function au(l){return l!==null&&(l<32||l===127)}const ic=rl(/\d/),wy=rl(/[\dA-Fa-f]/),Ey=rl(/[!-/:-@[-`{-~]/);function fe(l){return l!==null&&l<-2}function Xe(l){return l!==null&&(l<0||l===32)}function Ce(l){return l===-2||l===-1||l===32}const su=rl(new RegExp("\\p{P}|\\p{S}","u")),Cl=rl(/\s/);function rl(l){return r;function r(i){return i!==null&&i>-1&&l.test(String.fromCharCode(i))}}function wa(l){const r=[];let i=-1,u=0,f=0;for(;++i<l.length;){const d=l.charCodeAt(i);let c="";if(d===37&&gt(l.charCodeAt(i+1))&&gt(l.charCodeAt(i+2)))f=2;else if(d<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(d))||(c=String.fromCharCode(d));else if(d>55295&&d<57344){const h=l.charCodeAt(i+1);d<56320&&h>56319&&h<57344?(c=String.fromCharCode(d,h),f=1):c="�"}else c=String.fromCharCode(d);c&&(r.push(l.slice(u,i),encodeURIComponent(c)),u=i+f+1,c=""),f&&(i+=f,f=0)}return r.join("")+l.slice(u)}function Ne(l,r,i,u){const f=u?u-1:Number.POSITIVE_INFINITY;let d=0;return c;function c(m){return Ce(m)?(l.enter(i),h(m)):r(m)}function h(m){return Ce(m)&&d++<f?(l.consume(m),h):(l.exit(i),r(m))}}const Ty={tokenize:Cy};function Cy(l){const r=l.attempt(this.parser.constructs.contentInitial,u,f);let i;return r;function u(h){if(h===null){l.consume(h);return}return l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),Ne(l,r,"linePrefix")}function f(h){return l.enter("paragraph"),d(h)}function d(h){const m=l.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,c(h)}function c(h){if(h===null){l.exit("chunkText"),l.exit("paragraph"),l.consume(h);return}return fe(h)?(l.consume(h),l.exit("chunkText"),d):(l.consume(h),c)}}const jy={tokenize:zy},tm={tokenize:Ay};function zy(l){const r=this,i=[];let u=0,f,d,c;return h;function h(M){if(u<i.length){const W=i[u];return r.containerState=W[1],l.attempt(W[0].continuation,m,p)(M)}return p(M)}function m(M){if(u++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,f&&L();const W=r.events.length;let ee=W,B;for(;ee--;)if(r.events[ee][0]==="exit"&&r.events[ee][1].type==="chunkFlow"){B=r.events[ee][1].end;break}D(u);let F=W;for(;F<r.events.length;)r.events[F][1].end={...B},F++;return Yt(r.events,ee+1,0,r.events.slice(W)),r.events.length=F,p(M)}return h(M)}function p(M){if(u===i.length){if(!f)return v(M);if(f.currentConstruct&&f.currentConstruct.concrete)return j(M);r.interrupt=!!(f.currentConstruct&&!f._gfmTableDynamicInterruptHack)}return r.containerState={},l.check(tm,b,y)(M)}function b(M){return f&&L(),D(u),v(M)}function y(M){return r.parser.lazy[r.now().line]=u!==i.length,c=r.now().offset,j(M)}function v(M){return r.containerState={},l.attempt(tm,k,j)(M)}function k(M){return u++,i.push([r.currentConstruct,r.containerState]),v(M)}function j(M){if(M===null){f&&L(),D(0),l.consume(M);return}return f=f||r.parser.flow(r.now()),l.enter("chunkFlow",{_tokenizer:f,contentType:"flow",previous:d}),q(M)}function q(M){if(M===null){X(l.exit("chunkFlow"),!0),D(0),l.consume(M);return}return fe(M)?(l.consume(M),X(l.exit("chunkFlow")),u=0,r.interrupt=void 0,h):(l.consume(M),q)}function X(M,W){const ee=r.sliceStream(M);if(W&&ee.push(null),M.previous=d,d&&(d.next=M),d=M,f.defineSkip(M.start),f.write(ee),r.parser.lazy[M.start.line]){let B=f.events.length;for(;B--;)if(f.events[B][1].start.offset<c&&(!f.events[B][1].end||f.events[B][1].end.offset>c))return;const F=r.events.length;let se=F,pe,U;for(;se--;)if(r.events[se][0]==="exit"&&r.events[se][1].type==="chunkFlow"){if(pe){U=r.events[se][1].end;break}pe=!0}for(D(u),B=F;B<r.events.length;)r.events[B][1].end={...U},B++;Yt(r.events,se+1,0,r.events.slice(F)),r.events.length=B}}function D(M){let W=i.length;for(;W-- >M;){const ee=i[W];r.containerState=ee[1],ee[0].exit.call(r,l)}i.length=M}function L(){f.write([null]),d=void 0,f=void 0,r.containerState._closeFlow=void 0}}function Ay(l,r,i){return Ne(l,l.attempt(this.parser.constructs.document,r,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Sa(l){if(l===null||Xe(l)||Cl(l))return 1;if(su(l))return 2}function cu(l,r,i){const u=[];let f=-1;for(;++f<l.length;){const d=l[f].resolveAll;d&&!u.includes(d)&&(r=d(r,i),u.push(d))}return r}const rc={name:"attention",resolveAll:Ny,tokenize:My};function Ny(l,r){let i=-1,u,f,d,c,h,m,p,b;for(;++i<l.length;)if(l[i][0]==="enter"&&l[i][1].type==="attentionSequence"&&l[i][1]._close){for(u=i;u--;)if(l[u][0]==="exit"&&l[u][1].type==="attentionSequence"&&l[u][1]._open&&r.sliceSerialize(l[u][1]).charCodeAt(0)===r.sliceSerialize(l[i][1]).charCodeAt(0)){if((l[u][1]._close||l[i][1]._open)&&(l[i][1].end.offset-l[i][1].start.offset)%3&&!((l[u][1].end.offset-l[u][1].start.offset+l[i][1].end.offset-l[i][1].start.offset)%3))continue;m=l[u][1].end.offset-l[u][1].start.offset>1&&l[i][1].end.offset-l[i][1].start.offset>1?2:1;const y={...l[u][1].end},v={...l[i][1].start};nm(y,-m),nm(v,m),c={type:m>1?"strongSequence":"emphasisSequence",start:y,end:{...l[u][1].end}},h={type:m>1?"strongSequence":"emphasisSequence",start:{...l[i][1].start},end:v},d={type:m>1?"strongText":"emphasisText",start:{...l[u][1].end},end:{...l[i][1].start}},f={type:m>1?"strong":"emphasis",start:{...c.start},end:{...h.end}},l[u][1].end={...c.start},l[i][1].start={...h.end},p=[],l[u][1].end.offset-l[u][1].start.offset&&(p=Pt(p,[["enter",l[u][1],r],["exit",l[u][1],r]])),p=Pt(p,[["enter",f,r],["enter",c,r],["exit",c,r],["enter",d,r]]),p=Pt(p,cu(r.parser.constructs.insideSpan.null,l.slice(u+1,i),r)),p=Pt(p,[["exit",d,r],["enter",h,r],["exit",h,r],["exit",f,r]]),l[i][1].end.offset-l[i][1].start.offset?(b=2,p=Pt(p,[["enter",l[i][1],r],["exit",l[i][1],r]])):b=0,Yt(l,u-1,i-u+3,p),i=u+p.length-b-2;break}}for(i=-1;++i<l.length;)l[i][1].type==="attentionSequence"&&(l[i][1].type="data");return l}function My(l,r){const i=this.parser.constructs.attentionMarkers.null,u=this.previous,f=Sa(u);let d;return c;function c(m){return d=m,l.enter("attentionSequence"),h(m)}function h(m){if(m===d)return l.consume(m),h;const p=l.exit("attentionSequence"),b=Sa(m),y=!b||b===2&&f||i.includes(m),v=!f||f===2&&b||i.includes(u);return p._open=!!(d===42?y:y&&(f||!v)),p._close=!!(d===42?v:v&&(b||!y)),r(m)}}function nm(l,r){l.column+=r,l.offset+=r,l._bufferIndex+=r}const Dy={name:"autolink",tokenize:_y};function _y(l,r,i){let u=0;return f;function f(k){return l.enter("autolink"),l.enter("autolinkMarker"),l.consume(k),l.exit("autolinkMarker"),l.enter("autolinkProtocol"),d}function d(k){return St(k)?(l.consume(k),c):k===64?i(k):p(k)}function c(k){return k===43||k===45||k===46||gt(k)?(u=1,h(k)):p(k)}function h(k){return k===58?(l.consume(k),u=0,m):(k===43||k===45||k===46||gt(k))&&u++<32?(l.consume(k),h):(u=0,p(k))}function m(k){return k===62?(l.exit("autolinkProtocol"),l.enter("autolinkMarker"),l.consume(k),l.exit("autolinkMarker"),l.exit("autolink"),r):k===null||k===32||k===60||au(k)?i(k):(l.consume(k),m)}function p(k){return k===64?(l.consume(k),b):ky(k)?(l.consume(k),p):i(k)}function b(k){return gt(k)?y(k):i(k)}function y(k){return k===46?(l.consume(k),u=0,b):k===62?(l.exit("autolinkProtocol").type="autolinkEmail",l.enter("autolinkMarker"),l.consume(k),l.exit("autolinkMarker"),l.exit("autolink"),r):v(k)}function v(k){if((k===45||gt(k))&&u++<63){const j=k===45?v:y;return l.consume(k),j}return i(k)}}const Ni={partial:!0,tokenize:Oy};function Oy(l,r,i){return u;function u(d){return Ce(d)?Ne(l,f,"linePrefix")(d):f(d)}function f(d){return d===null||fe(d)?r(d):i(d)}}const Pm={continuation:{tokenize:Ry},exit:By,name:"blockQuote",tokenize:Ly};function Ly(l,r,i){const u=this;return f;function f(c){if(c===62){const h=u.containerState;return h.open||(l.enter("blockQuote",{_container:!0}),h.open=!0),l.enter("blockQuotePrefix"),l.enter("blockQuoteMarker"),l.consume(c),l.exit("blockQuoteMarker"),d}return i(c)}function d(c){return Ce(c)?(l.enter("blockQuotePrefixWhitespace"),l.consume(c),l.exit("blockQuotePrefixWhitespace"),l.exit("blockQuotePrefix"),r):(l.exit("blockQuotePrefix"),r(c))}}function Ry(l,r,i){const u=this;return f;function f(c){return Ce(c)?Ne(l,d,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):d(c)}function d(c){return l.attempt(Pm,r,i)(c)}}function By(l){l.exit("blockQuote")}const eg={name:"characterEscape",tokenize:Uy};function Uy(l,r,i){return u;function u(d){return l.enter("characterEscape"),l.enter("escapeMarker"),l.consume(d),l.exit("escapeMarker"),f}function f(d){return Ey(d)?(l.enter("characterEscapeValue"),l.consume(d),l.exit("characterEscapeValue"),l.exit("characterEscape"),r):i(d)}}const tg={name:"characterReference",tokenize:Hy};function Hy(l,r,i){const u=this;let f=0,d,c;return h;function h(y){return l.enter("characterReference"),l.enter("characterReferenceMarker"),l.consume(y),l.exit("characterReferenceMarker"),m}function m(y){return y===35?(l.enter("characterReferenceMarkerNumeric"),l.consume(y),l.exit("characterReferenceMarkerNumeric"),p):(l.enter("characterReferenceValue"),d=31,c=gt,b(y))}function p(y){return y===88||y===120?(l.enter("characterReferenceMarkerHexadecimal"),l.consume(y),l.exit("characterReferenceMarkerHexadecimal"),l.enter("characterReferenceValue"),d=6,c=wy,b):(l.enter("characterReferenceValue"),d=7,c=ic,b(y))}function b(y){if(y===59&&f){const v=l.exit("characterReferenceValue");return c===gt&&!Sc(u.sliceSerialize(v))?i(y):(l.enter("characterReferenceMarker"),l.consume(y),l.exit("characterReferenceMarker"),l.exit("characterReference"),r)}return c(y)&&f++<d?(l.consume(y),b):i(y)}}const lm={partial:!0,tokenize:Yy},am={concrete:!0,name:"codeFenced",tokenize:qy};function qy(l,r,i){const u=this,f={partial:!0,tokenize:ee};let d=0,c=0,h;return m;function m(B){return p(B)}function p(B){const F=u.events[u.events.length-1];return d=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,h=B,l.enter("codeFenced"),l.enter("codeFencedFence"),l.enter("codeFencedFenceSequence"),b(B)}function b(B){return B===h?(c++,l.consume(B),b):c<3?i(B):(l.exit("codeFencedFenceSequence"),Ce(B)?Ne(l,y,"whitespace")(B):y(B))}function y(B){return B===null||fe(B)?(l.exit("codeFencedFence"),u.interrupt?r(B):l.check(lm,q,W)(B)):(l.enter("codeFencedFenceInfo"),l.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===null||fe(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),y(B)):Ce(B)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),Ne(l,k,"whitespace")(B)):B===96&&B===h?i(B):(l.consume(B),v)}function k(B){return B===null||fe(B)?y(B):(l.enter("codeFencedFenceMeta"),l.enter("chunkString",{contentType:"string"}),j(B))}function j(B){return B===null||fe(B)?(l.exit("chunkString"),l.exit("codeFencedFenceMeta"),y(B)):B===96&&B===h?i(B):(l.consume(B),j)}function q(B){return l.attempt(f,W,X)(B)}function X(B){return l.enter("lineEnding"),l.consume(B),l.exit("lineEnding"),D}function D(B){return d>0&&Ce(B)?Ne(l,L,"linePrefix",d+1)(B):L(B)}function L(B){return B===null||fe(B)?l.check(lm,q,W)(B):(l.enter("codeFlowValue"),M(B))}function M(B){return B===null||fe(B)?(l.exit("codeFlowValue"),L(B)):(l.consume(B),M)}function W(B){return l.exit("codeFenced"),r(B)}function ee(B,F,se){let pe=0;return U;function U($){return B.enter("lineEnding"),B.consume($),B.exit("lineEnding"),ne}function ne($){return B.enter("codeFencedFence"),Ce($)?Ne(B,te,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):te($)}function te($){return $===h?(B.enter("codeFencedFenceSequence"),Se($)):se($)}function Se($){return $===h?(pe++,B.consume($),Se):pe>=c?(B.exit("codeFencedFenceSequence"),Ce($)?Ne(B,re,"whitespace")($):re($)):se($)}function re($){return $===null||fe($)?(B.exit("codeFencedFence"),F($)):se($)}}}function Yy(l,r,i){const u=this;return f;function f(c){return c===null?i(c):(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),d)}function d(c){return u.parser.lazy[u.now().line]?i(c):r(c)}}const Hs={name:"codeIndented",tokenize:Vy},Gy={partial:!0,tokenize:Iy};function Vy(l,r,i){const u=this;return f;function f(p){return l.enter("codeIndented"),Ne(l,d,"linePrefix",5)(p)}function d(p){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?c(p):i(p)}function c(p){return p===null?m(p):fe(p)?l.attempt(Gy,c,m)(p):(l.enter("codeFlowValue"),h(p))}function h(p){return p===null||fe(p)?(l.exit("codeFlowValue"),c(p)):(l.consume(p),h)}function m(p){return l.exit("codeIndented"),r(p)}}function Iy(l,r,i){const u=this;return f;function f(c){return u.parser.lazy[u.now().line]?i(c):fe(c)?(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),f):Ne(l,d,"linePrefix",5)(c)}function d(c){const h=u.events[u.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(c):fe(c)?f(c):i(c)}}const Xy={name:"codeText",previous:Zy,resolve:Qy,tokenize:Fy};function Qy(l){let r=l.length-4,i=3,u,f;if((l[i][1].type==="lineEnding"||l[i][1].type==="space")&&(l[r][1].type==="lineEnding"||l[r][1].type==="space")){for(u=i;++u<r;)if(l[u][1].type==="codeTextData"){l[i][1].type="codeTextPadding",l[r][1].type="codeTextPadding",i+=2,r-=2;break}}for(u=i-1,r++;++u<=r;)f===void 0?u!==r&&l[u][1].type!=="lineEnding"&&(f=u):(u===r||l[u][1].type==="lineEnding")&&(l[f][1].type="codeTextData",u!==f+2&&(l[f][1].end=l[u-1][1].end,l.splice(f+2,u-f-2),r-=u-f-2,u=f+2),f=void 0);return l}function Zy(l){return l!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Fy(l,r,i){let u=0,f,d;return c;function c(y){return l.enter("codeText"),l.enter("codeTextSequence"),h(y)}function h(y){return y===96?(l.consume(y),u++,h):(l.exit("codeTextSequence"),m(y))}function m(y){return y===null?i(y):y===32?(l.enter("space"),l.consume(y),l.exit("space"),m):y===96?(d=l.enter("codeTextSequence"),f=0,b(y)):fe(y)?(l.enter("lineEnding"),l.consume(y),l.exit("lineEnding"),m):(l.enter("codeTextData"),p(y))}function p(y){return y===null||y===32||y===96||fe(y)?(l.exit("codeTextData"),m(y)):(l.consume(y),p)}function b(y){return y===96?(l.consume(y),f++,b):f===u?(l.exit("codeTextSequence"),l.exit("codeText"),r(y)):(d.type="codeTextData",p(y))}}class Ky{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,i){const u=i??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(r,u):r>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(r,i,u){const f=i||0;this.setCursor(Math.trunc(r));const d=this.right.splice(this.right.length-f,Number.POSITIVE_INFINITY);return u&&Si(this.left,u),d.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),Si(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),Si(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const i=this.left.splice(r,Number.POSITIVE_INFINITY);Si(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);Si(this.left,i.reverse())}}}function Si(l,r){let i=0;if(r.length<1e4)l.push(...r);else for(;i<r.length;)l.push(...r.slice(i,i+1e4)),i+=1e4}function ng(l){const r={};let i=-1,u,f,d,c,h,m,p;const b=new Ky(l);for(;++i<b.length;){for(;i in r;)i=r[i];if(u=b.get(i),i&&u[1].type==="chunkFlow"&&b.get(i-1)[1].type==="listItemPrefix"&&(m=u[1]._tokenizer.events,d=0,d<m.length&&m[d][1].type==="lineEndingBlank"&&(d+=2),d<m.length&&m[d][1].type==="content"))for(;++d<m.length&&m[d][1].type!=="content";)m[d][1].type==="chunkText"&&(m[d][1]._isInFirstContentOfListItem=!0,d++);if(u[0]==="enter")u[1].contentType&&(Object.assign(r,Jy(b,i)),i=r[i],p=!0);else if(u[1]._container){for(d=i,f=void 0;d--;)if(c=b.get(d),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(f&&(b.get(f)[1].type="lineEndingBlank"),c[1].type="lineEnding",f=d);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;f&&(u[1].end={...b.get(f)[1].start},h=b.slice(f,i),h.unshift(u),b.splice(f,i-f+1,h))}}return Yt(l,0,Number.POSITIVE_INFINITY,b.slice(0)),!p}function Jy(l,r){const i=l.get(r)[1],u=l.get(r)[2];let f=r-1;const d=[];let c=i._tokenizer;c||(c=u.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const h=c.events,m=[],p={};let b,y,v=-1,k=i,j=0,q=0;const X=[q];for(;k;){for(;l.get(++f)[1]!==k;);d.push(f),k._tokenizer||(b=u.sliceStream(k),k.next||b.push(null),y&&c.defineSkip(k.start),k._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(b),k._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),y=k,k=k.next}for(k=i;++v<h.length;)h[v][0]==="exit"&&h[v-1][0]==="enter"&&h[v][1].type===h[v-1][1].type&&h[v][1].start.line!==h[v][1].end.line&&(q=v+1,X.push(q),k._tokenizer=void 0,k.previous=void 0,k=k.next);for(c.events=[],k?(k._tokenizer=void 0,k.previous=void 0):X.pop(),v=X.length;v--;){const D=h.slice(X[v],X[v+1]),L=d.pop();m.push([L,L+D.length-1]),l.splice(L,2,D)}for(m.reverse(),v=-1;++v<m.length;)p[j+m[v][0]]=j+m[v][1],j+=m[v][1]-m[v][0]-1;return p}const $y={resolve:Py,tokenize:eb},Wy={partial:!0,tokenize:tb};function Py(l){return ng(l),l}function eb(l,r){let i;return u;function u(h){return l.enter("content"),i=l.enter("chunkContent",{contentType:"content"}),f(h)}function f(h){return h===null?d(h):fe(h)?l.check(Wy,c,d)(h):(l.consume(h),f)}function d(h){return l.exit("chunkContent"),l.exit("content"),r(h)}function c(h){return l.consume(h),l.exit("chunkContent"),i.next=l.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,f}}function tb(l,r,i){const u=this;return f;function f(c){return l.exit("chunkContent"),l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),Ne(l,d,"linePrefix")}function d(c){if(c===null||fe(c))return i(c);const h=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(c):l.interrupt(u.parser.constructs.flow,i,r)(c)}}function lg(l,r,i,u,f,d,c,h,m){const p=m||Number.POSITIVE_INFINITY;let b=0;return y;function y(D){return D===60?(l.enter(u),l.enter(f),l.enter(d),l.consume(D),l.exit(d),v):D===null||D===32||D===41||au(D)?i(D):(l.enter(u),l.enter(c),l.enter(h),l.enter("chunkString",{contentType:"string"}),q(D))}function v(D){return D===62?(l.enter(d),l.consume(D),l.exit(d),l.exit(f),l.exit(u),r):(l.enter(h),l.enter("chunkString",{contentType:"string"}),k(D))}function k(D){return D===62?(l.exit("chunkString"),l.exit(h),v(D)):D===null||D===60||fe(D)?i(D):(l.consume(D),D===92?j:k)}function j(D){return D===60||D===62||D===92?(l.consume(D),k):k(D)}function q(D){return!b&&(D===null||D===41||Xe(D))?(l.exit("chunkString"),l.exit(h),l.exit(c),l.exit(u),r(D)):b<p&&D===40?(l.consume(D),b++,q):D===41?(l.consume(D),b--,q):D===null||D===32||D===40||au(D)?i(D):(l.consume(D),D===92?X:q)}function X(D){return D===40||D===41||D===92?(l.consume(D),q):q(D)}}function ag(l,r,i,u,f,d){const c=this;let h=0,m;return p;function p(k){return l.enter(u),l.enter(f),l.consume(k),l.exit(f),l.enter(d),b}function b(k){return h>999||k===null||k===91||k===93&&!m||k===94&&!h&&"_hiddenFootnoteSupport"in c.parser.constructs?i(k):k===93?(l.exit(d),l.enter(f),l.consume(k),l.exit(f),l.exit(u),r):fe(k)?(l.enter("lineEnding"),l.consume(k),l.exit("lineEnding"),b):(l.enter("chunkString",{contentType:"string"}),y(k))}function y(k){return k===null||k===91||k===93||fe(k)||h++>999?(l.exit("chunkString"),b(k)):(l.consume(k),m||(m=!Ce(k)),k===92?v:y)}function v(k){return k===91||k===92||k===93?(l.consume(k),h++,y):y(k)}}function ig(l,r,i,u,f,d){let c;return h;function h(v){return v===34||v===39||v===40?(l.enter(u),l.enter(f),l.consume(v),l.exit(f),c=v===40?41:v,m):i(v)}function m(v){return v===c?(l.enter(f),l.consume(v),l.exit(f),l.exit(u),r):(l.enter(d),p(v))}function p(v){return v===c?(l.exit(d),m(c)):v===null?i(v):fe(v)?(l.enter("lineEnding"),l.consume(v),l.exit("lineEnding"),Ne(l,p,"linePrefix")):(l.enter("chunkString",{contentType:"string"}),b(v))}function b(v){return v===c||v===null||fe(v)?(l.exit("chunkString"),p(v)):(l.consume(v),v===92?y:b)}function y(v){return v===c||v===92?(l.consume(v),b):b(v)}}function Ti(l,r){let i;return u;function u(f){return fe(f)?(l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),i=!0,u):Ce(f)?Ne(l,u,i?"linePrefix":"lineSuffix")(f):r(f)}}const nb={name:"definition",tokenize:ab},lb={partial:!0,tokenize:ib};function ab(l,r,i){const u=this;let f;return d;function d(k){return l.enter("definition"),c(k)}function c(k){return ag.call(u,l,h,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(k)}function h(k){return f=an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),k===58?(l.enter("definitionMarker"),l.consume(k),l.exit("definitionMarker"),m):i(k)}function m(k){return Xe(k)?Ti(l,p)(k):p(k)}function p(k){return lg(l,b,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(k)}function b(k){return l.attempt(lb,y,y)(k)}function y(k){return Ce(k)?Ne(l,v,"whitespace")(k):v(k)}function v(k){return k===null||fe(k)?(l.exit("definition"),u.parser.defined.push(f),r(k)):i(k)}}function ib(l,r,i){return u;function u(h){return Xe(h)?Ti(l,f)(h):i(h)}function f(h){return ig(l,d,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function d(h){return Ce(h)?Ne(l,c,"whitespace")(h):c(h)}function c(h){return h===null||fe(h)?r(h):i(h)}}const rb={name:"hardBreakEscape",tokenize:ub};function ub(l,r,i){return u;function u(d){return l.enter("hardBreakEscape"),l.consume(d),f}function f(d){return fe(d)?(l.exit("hardBreakEscape"),r(d)):i(d)}}const ob={name:"headingAtx",resolve:sb,tokenize:cb};function sb(l,r){let i=l.length-2,u=3,f,d;return l[u][1].type==="whitespace"&&(u+=2),i-2>u&&l[i][1].type==="whitespace"&&(i-=2),l[i][1].type==="atxHeadingSequence"&&(u===i-1||i-4>u&&l[i-2][1].type==="whitespace")&&(i-=u+1===i?2:4),i>u&&(f={type:"atxHeadingText",start:l[u][1].start,end:l[i][1].end},d={type:"chunkText",start:l[u][1].start,end:l[i][1].end,contentType:"text"},Yt(l,u,i-u+1,[["enter",f,r],["enter",d,r],["exit",d,r],["exit",f,r]])),l}function cb(l,r,i){let u=0;return f;function f(b){return l.enter("atxHeading"),d(b)}function d(b){return l.enter("atxHeadingSequence"),c(b)}function c(b){return b===35&&u++<6?(l.consume(b),c):b===null||Xe(b)?(l.exit("atxHeadingSequence"),h(b)):i(b)}function h(b){return b===35?(l.enter("atxHeadingSequence"),m(b)):b===null||fe(b)?(l.exit("atxHeading"),r(b)):Ce(b)?Ne(l,h,"whitespace")(b):(l.enter("atxHeadingText"),p(b))}function m(b){return b===35?(l.consume(b),m):(l.exit("atxHeadingSequence"),h(b))}function p(b){return b===null||b===35||Xe(b)?(l.exit("atxHeadingText"),h(b)):(l.consume(b),p)}}const fb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],im=["pre","script","style","textarea"],db={concrete:!0,name:"htmlFlow",resolveTo:mb,tokenize:gb},pb={partial:!0,tokenize:yb},hb={partial:!0,tokenize:xb};function mb(l){let r=l.length;for(;r--&&!(l[r][0]==="enter"&&l[r][1].type==="htmlFlow"););return r>1&&l[r-2][1].type==="linePrefix"&&(l[r][1].start=l[r-2][1].start,l[r+1][1].start=l[r-2][1].start,l.splice(r-2,2)),l}function gb(l,r,i){const u=this;let f,d,c,h,m;return p;function p(w){return b(w)}function b(w){return l.enter("htmlFlow"),l.enter("htmlFlowData"),l.consume(w),y}function y(w){return w===33?(l.consume(w),v):w===47?(l.consume(w),d=!0,q):w===63?(l.consume(w),f=3,u.interrupt?r:E):St(w)?(l.consume(w),c=String.fromCharCode(w),X):i(w)}function v(w){return w===45?(l.consume(w),f=2,k):w===91?(l.consume(w),f=5,h=0,j):St(w)?(l.consume(w),f=4,u.interrupt?r:E):i(w)}function k(w){return w===45?(l.consume(w),u.interrupt?r:E):i(w)}function j(w){const J="CDATA[";return w===J.charCodeAt(h++)?(l.consume(w),h===J.length?u.interrupt?r:te:j):i(w)}function q(w){return St(w)?(l.consume(w),c=String.fromCharCode(w),X):i(w)}function X(w){if(w===null||w===47||w===62||Xe(w)){const J=w===47,ae=c.toLowerCase();return!J&&!d&&im.includes(ae)?(f=1,u.interrupt?r(w):te(w)):fb.includes(c.toLowerCase())?(f=6,J?(l.consume(w),D):u.interrupt?r(w):te(w)):(f=7,u.interrupt&&!u.parser.lazy[u.now().line]?i(w):d?L(w):M(w))}return w===45||gt(w)?(l.consume(w),c+=String.fromCharCode(w),X):i(w)}function D(w){return w===62?(l.consume(w),u.interrupt?r:te):i(w)}function L(w){return Ce(w)?(l.consume(w),L):U(w)}function M(w){return w===47?(l.consume(w),U):w===58||w===95||St(w)?(l.consume(w),W):Ce(w)?(l.consume(w),M):U(w)}function W(w){return w===45||w===46||w===58||w===95||gt(w)?(l.consume(w),W):ee(w)}function ee(w){return w===61?(l.consume(w),B):Ce(w)?(l.consume(w),ee):M(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?i(w):w===34||w===39?(l.consume(w),m=w,F):Ce(w)?(l.consume(w),B):se(w)}function F(w){return w===m?(l.consume(w),m=null,pe):w===null||fe(w)?i(w):(l.consume(w),F)}function se(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Xe(w)?ee(w):(l.consume(w),se)}function pe(w){return w===47||w===62||Ce(w)?M(w):i(w)}function U(w){return w===62?(l.consume(w),ne):i(w)}function ne(w){return w===null||fe(w)?te(w):Ce(w)?(l.consume(w),ne):i(w)}function te(w){return w===45&&f===2?(l.consume(w),A):w===60&&f===1?(l.consume(w),Z):w===62&&f===4?(l.consume(w),T):w===63&&f===3?(l.consume(w),E):w===93&&f===5?(l.consume(w),me):fe(w)&&(f===6||f===7)?(l.exit("htmlFlowData"),l.check(pb,Y,Se)(w)):w===null||fe(w)?(l.exit("htmlFlowData"),Se(w)):(l.consume(w),te)}function Se(w){return l.check(hb,re,Y)(w)}function re(w){return l.enter("lineEnding"),l.consume(w),l.exit("lineEnding"),$}function $(w){return w===null||fe(w)?Se(w):(l.enter("htmlFlowData"),te(w))}function A(w){return w===45?(l.consume(w),E):te(w)}function Z(w){return w===47?(l.consume(w),c="",le):te(w)}function le(w){if(w===62){const J=c.toLowerCase();return im.includes(J)?(l.consume(w),T):te(w)}return St(w)&&c.length<8?(l.consume(w),c+=String.fromCharCode(w),le):te(w)}function me(w){return w===93?(l.consume(w),E):te(w)}function E(w){return w===62?(l.consume(w),T):w===45&&f===2?(l.consume(w),E):te(w)}function T(w){return w===null||fe(w)?(l.exit("htmlFlowData"),Y(w)):(l.consume(w),T)}function Y(w){return l.exit("htmlFlow"),r(w)}}function xb(l,r,i){const u=this;return f;function f(c){return fe(c)?(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),d):i(c)}function d(c){return u.parser.lazy[u.now().line]?i(c):r(c)}}function yb(l,r,i){return u;function u(f){return l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),l.attempt(Ni,r,i)}}const bb={name:"htmlText",tokenize:vb};function vb(l,r,i){const u=this;let f,d,c;return h;function h(E){return l.enter("htmlText"),l.enter("htmlTextData"),l.consume(E),m}function m(E){return E===33?(l.consume(E),p):E===47?(l.consume(E),ee):E===63?(l.consume(E),M):St(E)?(l.consume(E),se):i(E)}function p(E){return E===45?(l.consume(E),b):E===91?(l.consume(E),d=0,j):St(E)?(l.consume(E),L):i(E)}function b(E){return E===45?(l.consume(E),k):i(E)}function y(E){return E===null?i(E):E===45?(l.consume(E),v):fe(E)?(c=y,Z(E)):(l.consume(E),y)}function v(E){return E===45?(l.consume(E),k):y(E)}function k(E){return E===62?A(E):E===45?v(E):y(E)}function j(E){const T="CDATA[";return E===T.charCodeAt(d++)?(l.consume(E),d===T.length?q:j):i(E)}function q(E){return E===null?i(E):E===93?(l.consume(E),X):fe(E)?(c=q,Z(E)):(l.consume(E),q)}function X(E){return E===93?(l.consume(E),D):q(E)}function D(E){return E===62?A(E):E===93?(l.consume(E),D):q(E)}function L(E){return E===null||E===62?A(E):fe(E)?(c=L,Z(E)):(l.consume(E),L)}function M(E){return E===null?i(E):E===63?(l.consume(E),W):fe(E)?(c=M,Z(E)):(l.consume(E),M)}function W(E){return E===62?A(E):M(E)}function ee(E){return St(E)?(l.consume(E),B):i(E)}function B(E){return E===45||gt(E)?(l.consume(E),B):F(E)}function F(E){return fe(E)?(c=F,Z(E)):Ce(E)?(l.consume(E),F):A(E)}function se(E){return E===45||gt(E)?(l.consume(E),se):E===47||E===62||Xe(E)?pe(E):i(E)}function pe(E){return E===47?(l.consume(E),A):E===58||E===95||St(E)?(l.consume(E),U):fe(E)?(c=pe,Z(E)):Ce(E)?(l.consume(E),pe):A(E)}function U(E){return E===45||E===46||E===58||E===95||gt(E)?(l.consume(E),U):ne(E)}function ne(E){return E===61?(l.consume(E),te):fe(E)?(c=ne,Z(E)):Ce(E)?(l.consume(E),ne):pe(E)}function te(E){return E===null||E===60||E===61||E===62||E===96?i(E):E===34||E===39?(l.consume(E),f=E,Se):fe(E)?(c=te,Z(E)):Ce(E)?(l.consume(E),te):(l.consume(E),re)}function Se(E){return E===f?(l.consume(E),f=void 0,$):E===null?i(E):fe(E)?(c=Se,Z(E)):(l.consume(E),Se)}function re(E){return E===null||E===34||E===39||E===60||E===61||E===96?i(E):E===47||E===62||Xe(E)?pe(E):(l.consume(E),re)}function $(E){return E===47||E===62||Xe(E)?pe(E):i(E)}function A(E){return E===62?(l.consume(E),l.exit("htmlTextData"),l.exit("htmlText"),r):i(E)}function Z(E){return l.exit("htmlTextData"),l.enter("lineEnding"),l.consume(E),l.exit("lineEnding"),le}function le(E){return Ce(E)?Ne(l,me,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):me(E)}function me(E){return l.enter("htmlTextData"),c(E)}}const kc={name:"labelEnd",resolveAll:Eb,resolveTo:Tb,tokenize:Cb},Sb={tokenize:jb},kb={tokenize:zb},wb={tokenize:Ab};function Eb(l){let r=-1;const i=[];for(;++r<l.length;){const u=l[r][1];if(i.push(l[r]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const f=u.type==="labelImage"?4:2;u.type="data",r+=f}}return l.length!==i.length&&Yt(l,0,l.length,i),l}function Tb(l,r){let i=l.length,u=0,f,d,c,h;for(;i--;)if(f=l[i][1],d){if(f.type==="link"||f.type==="labelLink"&&f._inactive)break;l[i][0]==="enter"&&f.type==="labelLink"&&(f._inactive=!0)}else if(c){if(l[i][0]==="enter"&&(f.type==="labelImage"||f.type==="labelLink")&&!f._balanced&&(d=i,f.type!=="labelLink")){u=2;break}}else f.type==="labelEnd"&&(c=i);const m={type:l[d][1].type==="labelLink"?"link":"image",start:{...l[d][1].start},end:{...l[l.length-1][1].end}},p={type:"label",start:{...l[d][1].start},end:{...l[c][1].end}},b={type:"labelText",start:{...l[d+u+2][1].end},end:{...l[c-2][1].start}};return h=[["enter",m,r],["enter",p,r]],h=Pt(h,l.slice(d+1,d+u+3)),h=Pt(h,[["enter",b,r]]),h=Pt(h,cu(r.parser.constructs.insideSpan.null,l.slice(d+u+4,c-3),r)),h=Pt(h,[["exit",b,r],l[c-2],l[c-1],["exit",p,r]]),h=Pt(h,l.slice(c+1)),h=Pt(h,[["exit",m,r]]),Yt(l,d,l.length,h),l}function Cb(l,r,i){const u=this;let f=u.events.length,d,c;for(;f--;)if((u.events[f][1].type==="labelImage"||u.events[f][1].type==="labelLink")&&!u.events[f][1]._balanced){d=u.events[f][1];break}return h;function h(v){return d?d._inactive?y(v):(c=u.parser.defined.includes(an(u.sliceSerialize({start:d.end,end:u.now()}))),l.enter("labelEnd"),l.enter("labelMarker"),l.consume(v),l.exit("labelMarker"),l.exit("labelEnd"),m):i(v)}function m(v){return v===40?l.attempt(Sb,b,c?b:y)(v):v===91?l.attempt(kb,b,c?p:y)(v):c?b(v):y(v)}function p(v){return l.attempt(wb,b,y)(v)}function b(v){return r(v)}function y(v){return d._balanced=!0,i(v)}}function jb(l,r,i){return u;function u(y){return l.enter("resource"),l.enter("resourceMarker"),l.consume(y),l.exit("resourceMarker"),f}function f(y){return Xe(y)?Ti(l,d)(y):d(y)}function d(y){return y===41?b(y):lg(l,c,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function c(y){return Xe(y)?Ti(l,m)(y):b(y)}function h(y){return i(y)}function m(y){return y===34||y===39||y===40?ig(l,p,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):b(y)}function p(y){return Xe(y)?Ti(l,b)(y):b(y)}function b(y){return y===41?(l.enter("resourceMarker"),l.consume(y),l.exit("resourceMarker"),l.exit("resource"),r):i(y)}}function zb(l,r,i){const u=this;return f;function f(h){return ag.call(u,l,d,c,"reference","referenceMarker","referenceString")(h)}function d(h){return u.parser.defined.includes(an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?r(h):i(h)}function c(h){return i(h)}}function Ab(l,r,i){return u;function u(d){return l.enter("reference"),l.enter("referenceMarker"),l.consume(d),l.exit("referenceMarker"),f}function f(d){return d===93?(l.enter("referenceMarker"),l.consume(d),l.exit("referenceMarker"),l.exit("reference"),r):i(d)}}const Nb={name:"labelStartImage",resolveAll:kc.resolveAll,tokenize:Mb};function Mb(l,r,i){const u=this;return f;function f(h){return l.enter("labelImage"),l.enter("labelImageMarker"),l.consume(h),l.exit("labelImageMarker"),d}function d(h){return h===91?(l.enter("labelMarker"),l.consume(h),l.exit("labelMarker"),l.exit("labelImage"),c):i(h)}function c(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(h):r(h)}}const Db={name:"labelStartLink",resolveAll:kc.resolveAll,tokenize:_b};function _b(l,r,i){const u=this;return f;function f(c){return l.enter("labelLink"),l.enter("labelMarker"),l.consume(c),l.exit("labelMarker"),l.exit("labelLink"),d}function d(c){return c===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(c):r(c)}}const qs={name:"lineEnding",tokenize:Ob};function Ob(l,r){return i;function i(u){return l.enter("lineEnding"),l.consume(u),l.exit("lineEnding"),Ne(l,r,"linePrefix")}}const lu={name:"thematicBreak",tokenize:Lb};function Lb(l,r,i){let u=0,f;return d;function d(p){return l.enter("thematicBreak"),c(p)}function c(p){return f=p,h(p)}function h(p){return p===f?(l.enter("thematicBreakSequence"),m(p)):u>=3&&(p===null||fe(p))?(l.exit("thematicBreak"),r(p)):i(p)}function m(p){return p===f?(l.consume(p),u++,m):(l.exit("thematicBreakSequence"),Ce(p)?Ne(l,h,"whitespace")(p):h(p))}}const Nt={continuation:{tokenize:Hb},exit:Yb,name:"list",tokenize:Ub},Rb={partial:!0,tokenize:Gb},Bb={partial:!0,tokenize:qb};function Ub(l,r,i){const u=this,f=u.events[u.events.length-1];let d=f&&f[1].type==="linePrefix"?f[2].sliceSerialize(f[1],!0).length:0,c=0;return h;function h(k){const j=u.containerState.type||(k===42||k===43||k===45?"listUnordered":"listOrdered");if(j==="listUnordered"?!u.containerState.marker||k===u.containerState.marker:ic(k)){if(u.containerState.type||(u.containerState.type=j,l.enter(j,{_container:!0})),j==="listUnordered")return l.enter("listItemPrefix"),k===42||k===45?l.check(lu,i,p)(k):p(k);if(!u.interrupt||k===49)return l.enter("listItemPrefix"),l.enter("listItemValue"),m(k)}return i(k)}function m(k){return ic(k)&&++c<10?(l.consume(k),m):(!u.interrupt||c<2)&&(u.containerState.marker?k===u.containerState.marker:k===41||k===46)?(l.exit("listItemValue"),p(k)):i(k)}function p(k){return l.enter("listItemMarker"),l.consume(k),l.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||k,l.check(Ni,u.interrupt?i:b,l.attempt(Rb,v,y))}function b(k){return u.containerState.initialBlankLine=!0,d++,v(k)}function y(k){return Ce(k)?(l.enter("listItemPrefixWhitespace"),l.consume(k),l.exit("listItemPrefixWhitespace"),v):i(k)}function v(k){return u.containerState.size=d+u.sliceSerialize(l.exit("listItemPrefix"),!0).length,r(k)}}function Hb(l,r,i){const u=this;return u.containerState._closeFlow=void 0,l.check(Ni,f,d);function f(h){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ne(l,r,"listItemIndent",u.containerState.size+1)(h)}function d(h){return u.containerState.furtherBlankLines||!Ce(h)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,c(h)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,l.attempt(Bb,r,c)(h))}function c(h){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ne(l,l.attempt(Nt,r,i),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function qb(l,r,i){const u=this;return Ne(l,f,"listItemIndent",u.containerState.size+1);function f(d){const c=u.events[u.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===u.containerState.size?r(d):i(d)}}function Yb(l){l.exit(this.containerState.type)}function Gb(l,r,i){const u=this;return Ne(l,f,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function f(d){const c=u.events[u.events.length-1];return!Ce(d)&&c&&c[1].type==="listItemPrefixWhitespace"?r(d):i(d)}}const rm={name:"setextUnderline",resolveTo:Vb,tokenize:Ib};function Vb(l,r){let i=l.length,u,f,d;for(;i--;)if(l[i][0]==="enter"){if(l[i][1].type==="content"){u=i;break}l[i][1].type==="paragraph"&&(f=i)}else l[i][1].type==="content"&&l.splice(i,1),!d&&l[i][1].type==="definition"&&(d=i);const c={type:"setextHeading",start:{...l[u][1].start},end:{...l[l.length-1][1].end}};return l[f][1].type="setextHeadingText",d?(l.splice(f,0,["enter",c,r]),l.splice(d+1,0,["exit",l[u][1],r]),l[u][1].end={...l[d][1].end}):l[u][1]=c,l.push(["exit",c,r]),l}function Ib(l,r,i){const u=this;let f;return d;function d(p){let b=u.events.length,y;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){y=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||y)?(l.enter("setextHeadingLine"),f=p,c(p)):i(p)}function c(p){return l.enter("setextHeadingLineSequence"),h(p)}function h(p){return p===f?(l.consume(p),h):(l.exit("setextHeadingLineSequence"),Ce(p)?Ne(l,m,"lineSuffix")(p):m(p))}function m(p){return p===null||fe(p)?(l.exit("setextHeadingLine"),r(p)):i(p)}}const Xb={tokenize:Qb};function Qb(l){const r=this,i=l.attempt(Ni,u,l.attempt(this.parser.constructs.flowInitial,f,Ne(l,l.attempt(this.parser.constructs.flow,f,l.attempt($y,f)),"linePrefix")));return i;function u(d){if(d===null){l.consume(d);return}return l.enter("lineEndingBlank"),l.consume(d),l.exit("lineEndingBlank"),r.currentConstruct=void 0,i}function f(d){if(d===null){l.consume(d);return}return l.enter("lineEnding"),l.consume(d),l.exit("lineEnding"),r.currentConstruct=void 0,i}}const Zb={resolveAll:ug()},Fb=rg("string"),Kb=rg("text");function rg(l){return{resolveAll:ug(l==="text"?Jb:void 0),tokenize:r};function r(i){const u=this,f=this.parser.constructs[l],d=i.attempt(f,c,h);return c;function c(b){return p(b)?d(b):h(b)}function h(b){if(b===null){i.consume(b);return}return i.enter("data"),i.consume(b),m}function m(b){return p(b)?(i.exit("data"),d(b)):(i.consume(b),m)}function p(b){if(b===null)return!0;const y=f[b];let v=-1;if(y)for(;++v<y.length;){const k=y[v];if(!k.previous||k.previous.call(u,u.previous))return!0}return!1}}}function ug(l){return r;function r(i,u){let f=-1,d;for(;++f<=i.length;)d===void 0?i[f]&&i[f][1].type==="data"&&(d=f,f++):(!i[f]||i[f][1].type!=="data")&&(f!==d+2&&(i[d][1].end=i[f-1][1].end,i.splice(d+2,f-d-2),f=d+2),d=void 0);return l?l(i,u):i}}function Jb(l,r){let i=0;for(;++i<=l.length;)if((i===l.length||l[i][1].type==="lineEnding")&&l[i-1][1].type==="data"){const u=l[i-1][1],f=r.sliceStream(u);let d=f.length,c=-1,h=0,m;for(;d--;){const p=f[d];if(typeof p=="string"){for(c=p.length;p.charCodeAt(c-1)===32;)h++,c--;if(c)break;c=-1}else if(p===-2)m=!0,h++;else if(p!==-1){d++;break}}if(r._contentTypeTextTrailing&&i===l.length&&(h=0),h){const p={type:i===l.length||m||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:d?c:u.start._bufferIndex+c,_index:u.start._index+d,line:u.end.line,column:u.end.column-h,offset:u.end.offset-h},end:{...u.end}};u.end={...p.start},u.start.offset===u.end.offset?Object.assign(u,p):(l.splice(i,0,["enter",p,r],["exit",p,r]),i+=2)}i++}return l}const $b={42:Nt,43:Nt,45:Nt,48:Nt,49:Nt,50:Nt,51:Nt,52:Nt,53:Nt,54:Nt,55:Nt,56:Nt,57:Nt,62:Pm},Wb={91:nb},Pb={[-2]:Hs,[-1]:Hs,32:Hs},ev={35:ob,42:lu,45:[rm,lu],60:db,61:rm,95:lu,96:am,126:am},tv={38:tg,92:eg},nv={[-5]:qs,[-4]:qs,[-3]:qs,33:Nb,38:tg,42:rc,60:[Dy,bb],91:Db,92:[rb,eg],93:kc,95:rc,96:Xy},lv={null:[rc,Zb]},av={null:[42,95]},iv={null:[]},rv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:av,contentInitial:Wb,disable:iv,document:$b,flow:ev,flowInitial:Pb,insideSpan:lv,string:tv,text:nv},Symbol.toStringTag,{value:"Module"}));function uv(l,r,i){let u={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const f={},d=[];let c=[],h=[];const m={attempt:F(ee),check:F(B),consume:L,enter:M,exit:W,interrupt:F(B,{interrupt:!0})},p={code:null,containerState:{},defineSkip:q,events:[],now:j,parser:l,previous:null,sliceSerialize:v,sliceStream:k,write:y};let b=r.tokenize.call(p,m);return r.resolveAll&&d.push(r),p;function y(ne){return c=Pt(c,ne),X(),c[c.length-1]!==null?[]:(se(r,0),p.events=cu(d,p.events,p),p.events)}function v(ne,te){return sv(k(ne),te)}function k(ne){return ov(c,ne)}function j(){const{_bufferIndex:ne,_index:te,line:Se,column:re,offset:$}=u;return{_bufferIndex:ne,_index:te,line:Se,column:re,offset:$}}function q(ne){f[ne.line]=ne.column,U()}function X(){let ne;for(;u._index<c.length;){const te=c[u._index];if(typeof te=="string")for(ne=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ne&&u._bufferIndex<te.length;)D(te.charCodeAt(u._bufferIndex));else D(te)}}function D(ne){b=b(ne)}function L(ne){fe(ne)?(u.line++,u.column=1,u.offset+=ne===-3?2:1,U()):ne!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===c[u._index].length&&(u._bufferIndex=-1,u._index++)),p.previous=ne}function M(ne,te){const Se=te||{};return Se.type=ne,Se.start=j(),p.events.push(["enter",Se,p]),h.push(Se),Se}function W(ne){const te=h.pop();return te.end=j(),p.events.push(["exit",te,p]),te}function ee(ne,te){se(ne,te.from)}function B(ne,te){te.restore()}function F(ne,te){return Se;function Se(re,$,A){let Z,le,me,E;return Array.isArray(re)?Y(re):"tokenize"in re?Y([re]):T(re);function T(oe){return ke;function ke(Ye){const Be=Ye!==null&&oe[Ye],Gt=Ye!==null&&oe.null,dn=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Gt)?Gt:Gt?[Gt]:[]];return Y(dn)(Ye)}}function Y(oe){return Z=oe,le=0,oe.length===0?A:w(oe[le])}function w(oe){return ke;function ke(Ye){return E=pe(),me=oe,oe.partial||(p.currentConstruct=oe),oe.name&&p.parser.constructs.disable.null.includes(oe.name)?ae():oe.tokenize.call(te?Object.assign(Object.create(p),te):p,m,J,ae)(Ye)}}function J(oe){return ne(me,E),$}function ae(oe){return E.restore(),++le<Z.length?w(Z[le]):A}}}function se(ne,te){ne.resolveAll&&!d.includes(ne)&&d.push(ne),ne.resolve&&Yt(p.events,te,p.events.length-te,ne.resolve(p.events.slice(te),p)),ne.resolveTo&&(p.events=ne.resolveTo(p.events,p))}function pe(){const ne=j(),te=p.previous,Se=p.currentConstruct,re=p.events.length,$=Array.from(h);return{from:re,restore:A};function A(){u=ne,p.previous=te,p.currentConstruct=Se,p.events.length=re,h=$,U()}}function U(){u.line in f&&u.column<2&&(u.column=f[u.line],u.offset+=f[u.line]-1)}}function ov(l,r){const i=r.start._index,u=r.start._bufferIndex,f=r.end._index,d=r.end._bufferIndex;let c;if(i===f)c=[l[i].slice(u,d)];else{if(c=l.slice(i,f),u>-1){const h=c[0];typeof h=="string"?c[0]=h.slice(u):c.shift()}d>0&&c.push(l[f].slice(0,d))}return c}function sv(l,r){let i=-1;const u=[];let f;for(;++i<l.length;){const d=l[i];let c;if(typeof d=="string")c=d;else switch(d){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=r?" ":"	";break}case-1:{if(!r&&f)continue;c=" ";break}default:c=String.fromCharCode(d)}f=d===-2,u.push(c)}return u.join("")}function cv(l){const u={constructs:$m([rv,...(l||{}).extensions||[]]),content:f(Ty),defined:[],document:f(jy),flow:f(Xb),lazy:{},string:f(Fb),text:f(Kb)};return u;function f(d){return c;function c(h){return uv(u,d,h)}}}function fv(l){for(;!ng(l););return l}const um=/[\0\t\n\r]/g;function dv(){let l=1,r="",i=!0,u;return f;function f(d,c,h){const m=[];let p,b,y,v,k;for(d=r+(typeof d=="string"?d.toString():new TextDecoder(c||void 0).decode(d)),y=0,r="",i&&(d.charCodeAt(0)===65279&&y++,i=void 0);y<d.length;){if(um.lastIndex=y,p=um.exec(d),v=p&&p.index!==void 0?p.index:d.length,k=d.charCodeAt(v),!p){r=d.slice(y);break}if(k===10&&y===v&&u)m.push(-3),u=void 0;else switch(u&&(m.push(-5),u=void 0),y<v&&(m.push(d.slice(y,v)),l+=v-y),k){case 0:{m.push(65533),l++;break}case 9:{for(b=Math.ceil(l/4)*4,m.push(-2);l++<b;)m.push(-1);break}case 10:{m.push(-4),l=1;break}default:u=!0,l=1}y=v+1}return h&&(u&&m.push(-5),r&&m.push(r),m.push(null)),m}}const pv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hv(l){return l.replace(pv,mv)}function mv(l,r,i){if(r)return r;if(i.charCodeAt(0)===35){const f=i.charCodeAt(1),d=f===120||f===88;return Wm(i.slice(d?2:1),d?16:10)}return Sc(i)||l}const og={}.hasOwnProperty;function gv(l,r,i){return r&&typeof r=="object"&&(i=r,r=void 0),xv(i)(fv(cv(i).document().write(dv()(l,r,!0))))}function xv(l){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:d(Nl),autolinkProtocol:pe,autolinkEmail:pe,atxHeading:d(zl),blockQuote:d(Gt),characterEscape:pe,characterReference:pe,codeFenced:d(dn),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:d(dn,c),codeText:d(Ea,c),codeTextData:pe,data:pe,codeFlowValue:pe,definition:d(_i),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:d(pn),hardBreakEscape:d(Al),hardBreakTrailing:d(Al),htmlFlow:d(Oi,c),htmlFlowData:pe,htmlText:d(Oi,c),htmlTextData:pe,image:d(Li),label:c,link:d(Nl),listItem:d(Ta),listItemValue:v,listOrdered:d(Ml,y),listUnordered:d(Ml),paragraph:d(hu),reference:w,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:d(zl),strong:d(mu),thematicBreak:d(gu)},exit:{atxHeading:m(),atxHeadingSequence:ee,autolink:m(),autolinkEmail:Be,autolinkProtocol:Ye,blockQuote:m(),characterEscapeValue:U,characterReferenceMarkerHexadecimal:ae,characterReferenceMarkerNumeric:ae,characterReferenceValue:oe,characterReference:ke,codeFenced:m(X),codeFencedFence:q,codeFencedFenceInfo:k,codeFencedFenceMeta:j,codeFlowValue:U,codeIndented:m(D),codeText:m($),codeTextData:U,data:U,definition:m(),definitionDestinationString:W,definitionLabelString:L,definitionTitleString:M,emphasis:m(),hardBreakEscape:m(te),hardBreakTrailing:m(te),htmlFlow:m(Se),htmlFlowData:U,htmlText:m(re),htmlTextData:U,image:m(Z),label:me,labelText:le,lineEnding:ne,link:m(A),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:J,resourceDestinationString:E,resourceTitleString:T,resource:Y,setextHeading:m(se),setextHeadingLineSequence:F,setextHeadingText:B,strong:m(),thematicBreak:m()}};sg(r,(l||{}).mdastExtensions||[]);const i={};return u;function u(V){let P={type:"root",children:[]};const he={stack:[P],tokenStack:[],config:r,enter:h,exit:p,buffer:c,resume:b,data:i},we=[];let Oe=-1;for(;++Oe<V.length;)if(V[Oe][1].type==="listOrdered"||V[Oe][1].type==="listUnordered")if(V[Oe][0]==="enter")we.push(Oe);else{const Dt=we.pop();Oe=f(V,Dt,Oe)}for(Oe=-1;++Oe<V.length;){const Dt=r[V[Oe][0]];og.call(Dt,V[Oe][1].type)&&Dt[V[Oe][1].type].call(Object.assign({sliceSerialize:V[Oe][2].sliceSerialize},he),V[Oe][1])}if(he.tokenStack.length>0){const Dt=he.tokenStack[he.tokenStack.length-1];(Dt[1]||om).call(he,void 0,Dt[0])}for(P.position={start:il(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:il(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<r.transforms.length;)P=r.transforms[Oe](P)||P;return P}function f(V,P,he){let we=P-1,Oe=-1,Dt=!1,hn,bt,it,kt;for(;++we<=he;){const Ge=V[we];switch(Ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ge[0]==="enter"?Oe++:Oe--,kt=void 0;break}case"lineEndingBlank":{Ge[0]==="enter"&&(hn&&!kt&&!Oe&&!it&&(it=we),kt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kt=void 0}if(!Oe&&Ge[0]==="enter"&&Ge[1].type==="listItemPrefix"||Oe===-1&&Ge[0]==="exit"&&(Ge[1].type==="listUnordered"||Ge[1].type==="listOrdered")){if(hn){let On=we;for(bt=void 0;On--;){const en=V[On];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;bt&&(V[bt][1].type="lineEndingBlank",Dt=!0),en[1].type="lineEnding",bt=On}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!bt||it<bt)&&(hn._spread=!0),hn.end=Object.assign({},bt?V[bt][1].start:Ge[1].end),V.splice(bt||we,0,["exit",hn,Ge[2]]),we++,he++}if(Ge[1].type==="listItemPrefix"){const On={type:"listItem",_spread:!1,start:Object.assign({},Ge[1].start),end:void 0};hn=On,V.splice(we,0,["enter",On,Ge[2]]),we++,he++,it=void 0,kt=!0}}}return V[P][1]._spread=Dt,he}function d(V,P){return he;function he(we){h.call(this,V(we),we),P&&P.call(this,we)}}function c(){this.stack.push({type:"fragment",children:[]})}function h(V,P,he){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([P,he||void 0]),V.position={start:il(P.start),end:void 0}}function m(V){return P;function P(he){V&&V.call(this,he),p.call(this,he)}}function p(V,P){const he=this.stack.pop(),we=this.tokenStack.pop();if(we)we[0].type!==V.type&&(P?P.call(this,V,we[0]):(we[1]||om).call(this,V,we[0]));else throw new Error("Cannot close `"+V.type+"` ("+Ei({start:V.start,end:V.end})+"): it’s not open");he.position.end=il(V.end)}function b(){return vc(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function v(V){if(this.data.expectingFirstListItemValue){const P=this.stack[this.stack.length-2];P.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function k(){const V=this.resume(),P=this.stack[this.stack.length-1];P.lang=V}function j(){const V=this.resume(),P=this.stack[this.stack.length-1];P.meta=V}function q(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function X(){const V=this.resume(),P=this.stack[this.stack.length-1];P.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function D(){const V=this.resume(),P=this.stack[this.stack.length-1];P.value=V.replace(/(\r?\n|\r)$/g,"")}function L(V){const P=this.resume(),he=this.stack[this.stack.length-1];he.label=P,he.identifier=an(this.sliceSerialize(V)).toLowerCase()}function M(){const V=this.resume(),P=this.stack[this.stack.length-1];P.title=V}function W(){const V=this.resume(),P=this.stack[this.stack.length-1];P.url=V}function ee(V){const P=this.stack[this.stack.length-1];if(!P.depth){const he=this.sliceSerialize(V).length;P.depth=he}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function F(V){const P=this.stack[this.stack.length-1];P.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function se(){this.data.setextHeadingSlurpLineEnding=void 0}function pe(V){const he=this.stack[this.stack.length-1].children;let we=he[he.length-1];(!we||we.type!=="text")&&(we=yt(),we.position={start:il(V.start),end:void 0},he.push(we)),this.stack.push(we)}function U(V){const P=this.stack.pop();P.value+=this.sliceSerialize(V),P.position.end=il(V.end)}function ne(V){const P=this.stack[this.stack.length-1];if(this.data.atHardBreak){const he=P.children[P.children.length-1];he.position.end=il(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(P.type)&&(pe.call(this,V),U.call(this,V))}function te(){this.data.atHardBreak=!0}function Se(){const V=this.resume(),P=this.stack[this.stack.length-1];P.value=V}function re(){const V=this.resume(),P=this.stack[this.stack.length-1];P.value=V}function $(){const V=this.resume(),P=this.stack[this.stack.length-1];P.value=V}function A(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=P,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function Z(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=P,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function le(V){const P=this.sliceSerialize(V),he=this.stack[this.stack.length-2];he.label=hv(P),he.identifier=an(P).toLowerCase()}function me(){const V=this.stack[this.stack.length-1],P=this.resume(),he=this.stack[this.stack.length-1];if(this.data.inReference=!0,he.type==="link"){const we=V.children;he.children=we}else he.alt=P}function E(){const V=this.resume(),P=this.stack[this.stack.length-1];P.url=V}function T(){const V=this.resume(),P=this.stack[this.stack.length-1];P.title=V}function Y(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function J(V){const P=this.resume(),he=this.stack[this.stack.length-1];he.label=P,he.identifier=an(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function ae(V){this.data.characterReferenceType=V.type}function oe(V){const P=this.sliceSerialize(V),he=this.data.characterReferenceType;let we;he?(we=Wm(P,he==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):we=Sc(P);const Oe=this.stack[this.stack.length-1];Oe.value+=we}function ke(V){const P=this.stack.pop();P.position.end=il(V.end)}function Ye(V){U.call(this,V);const P=this.stack[this.stack.length-1];P.url=this.sliceSerialize(V)}function Be(V){U.call(this,V);const P=this.stack[this.stack.length-1];P.url="mailto:"+this.sliceSerialize(V)}function Gt(){return{type:"blockquote",children:[]}}function dn(){return{type:"code",lang:null,meta:null,value:""}}function Ea(){return{type:"inlineCode",value:""}}function _i(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function zl(){return{type:"heading",depth:0,children:[]}}function Al(){return{type:"break"}}function Oi(){return{type:"html",value:""}}function Li(){return{type:"image",title:null,url:"",alt:null}}function Nl(){return{type:"link",title:null,url:"",children:[]}}function Ml(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Ta(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function hu(){return{type:"paragraph",children:[]}}function mu(){return{type:"strong",children:[]}}function yt(){return{type:"text",value:""}}function gu(){return{type:"thematicBreak"}}}function il(l){return{line:l.line,column:l.column,offset:l.offset}}function sg(l,r){let i=-1;for(;++i<r.length;){const u=r[i];Array.isArray(u)?sg(l,u):yv(l,u)}}function yv(l,r){let i;for(i in r)if(og.call(r,i))switch(i){case"canContainEols":{const u=r[i];u&&l[i].push(...u);break}case"transforms":{const u=r[i];u&&l[i].push(...u);break}case"enter":case"exit":{const u=r[i];u&&Object.assign(l[i],u);break}}}function om(l,r){throw l?new Error("Cannot close `"+l.type+"` ("+Ei({start:l.start,end:l.end})+"): a different token (`"+r.type+"`, "+Ei({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Ei({start:r.start,end:r.end})+") is still open")}function bv(l){const r=this;r.parser=i;function i(u){return gv(u,{...r.data("settings"),...l,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function vv(l,r){const i={type:"element",tagName:"blockquote",properties:{},children:l.wrap(l.all(r),!0)};return l.patch(r,i),l.applyData(r,i)}function Sv(l,r){const i={type:"element",tagName:"br",properties:{},children:[]};return l.patch(r,i),[l.applyData(r,i),{type:"text",value:`
`}]}function kv(l,r){const i=r.value?r.value+`
`:"",u={},f=r.lang?r.lang.split(/\s+/):[];f.length>0&&(u.className=["language-"+f[0]]);let d={type:"element",tagName:"code",properties:u,children:[{type:"text",value:i}]};return r.meta&&(d.data={meta:r.meta}),l.patch(r,d),d=l.applyData(r,d),d={type:"element",tagName:"pre",properties:{},children:[d]},l.patch(r,d),d}function wv(l,r){const i={type:"element",tagName:"del",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function Ev(l,r){const i={type:"element",tagName:"em",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function Tv(l,r){const i=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",u=String(r.identifier).toUpperCase(),f=wa(u.toLowerCase()),d=l.footnoteOrder.indexOf(u);let c,h=l.footnoteCounts.get(u);h===void 0?(h=0,l.footnoteOrder.push(u),c=l.footnoteOrder.length):c=d+1,h+=1,l.footnoteCounts.set(u,h);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+f,id:i+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};l.patch(r,m);const p={type:"element",tagName:"sup",properties:{},children:[m]};return l.patch(r,p),l.applyData(r,p)}function Cv(l,r){const i={type:"element",tagName:"h"+r.depth,properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function jv(l,r){if(l.options.allowDangerousHtml){const i={type:"raw",value:r.value};return l.patch(r,i),l.applyData(r,i)}}function cg(l,r){const i=r.referenceType;let u="]";if(i==="collapsed"?u+="[]":i==="full"&&(u+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+u}];const f=l.all(r),d=f[0];d&&d.type==="text"?d.value="["+d.value:f.unshift({type:"text",value:"["});const c=f[f.length-1];return c&&c.type==="text"?c.value+=u:f.push({type:"text",value:u}),f}function zv(l,r){const i=String(r.identifier).toUpperCase(),u=l.definitionById.get(i);if(!u)return cg(l,r);const f={src:wa(u.url||""),alt:r.alt};u.title!==null&&u.title!==void 0&&(f.title=u.title);const d={type:"element",tagName:"img",properties:f,children:[]};return l.patch(r,d),l.applyData(r,d)}function Av(l,r){const i={src:wa(r.url)};r.alt!==null&&r.alt!==void 0&&(i.alt=r.alt),r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"img",properties:i,children:[]};return l.patch(r,u),l.applyData(r,u)}function Nv(l,r){const i={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};l.patch(r,i);const u={type:"element",tagName:"code",properties:{},children:[i]};return l.patch(r,u),l.applyData(r,u)}function Mv(l,r){const i=String(r.identifier).toUpperCase(),u=l.definitionById.get(i);if(!u)return cg(l,r);const f={href:wa(u.url||"")};u.title!==null&&u.title!==void 0&&(f.title=u.title);const d={type:"element",tagName:"a",properties:f,children:l.all(r)};return l.patch(r,d),l.applyData(r,d)}function Dv(l,r){const i={href:wa(r.url)};r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"a",properties:i,children:l.all(r)};return l.patch(r,u),l.applyData(r,u)}function _v(l,r,i){const u=l.all(r),f=i?Ov(i):fg(r),d={},c=[];if(typeof r.checked=="boolean"){const b=u[0];let y;b&&b.type==="element"&&b.tagName==="p"?y=b:(y={type:"element",tagName:"p",properties:{},children:[]},u.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),d.className=["task-list-item"]}let h=-1;for(;++h<u.length;){const b=u[h];(f||h!==0||b.type!=="element"||b.tagName!=="p")&&c.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!f?c.push(...b.children):c.push(b)}const m=u[u.length-1];m&&(f||m.type!=="element"||m.tagName!=="p")&&c.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:d,children:c};return l.patch(r,p),l.applyData(r,p)}function Ov(l){let r=!1;if(l.type==="list"){r=l.spread||!1;const i=l.children;let u=-1;for(;!r&&++u<i.length;)r=fg(i[u])}return r}function fg(l){const r=l.spread;return r??l.children.length>1}function Lv(l,r){const i={},u=l.all(r);let f=-1;for(typeof r.start=="number"&&r.start!==1&&(i.start=r.start);++f<u.length;){const c=u[f];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const d={type:"element",tagName:r.ordered?"ol":"ul",properties:i,children:l.wrap(u,!0)};return l.patch(r,d),l.applyData(r,d)}function Rv(l,r){const i={type:"element",tagName:"p",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function Bv(l,r){const i={type:"root",children:l.wrap(l.all(r))};return l.patch(r,i),l.applyData(r,i)}function Uv(l,r){const i={type:"element",tagName:"strong",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function Hv(l,r){const i=l.all(r),u=i.shift(),f=[];if(u){const c={type:"element",tagName:"thead",properties:{},children:l.wrap([u],!0)};l.patch(r.children[0],c),f.push(c)}if(i.length>0){const c={type:"element",tagName:"tbody",properties:{},children:l.wrap(i,!0)},h=gc(r.children[1]),m=Im(r.children[r.children.length-1]);h&&m&&(c.position={start:h,end:m}),f.push(c)}const d={type:"element",tagName:"table",properties:{},children:l.wrap(f,!0)};return l.patch(r,d),l.applyData(r,d)}function qv(l,r,i){const u=i?i.children:void 0,d=(u?u.indexOf(r):1)===0?"th":"td",c=i&&i.type==="table"?i.align:void 0,h=c?c.length:r.children.length;let m=-1;const p=[];for(;++m<h;){const y=r.children[m],v={},k=c?c[m]:void 0;k&&(v.align=k);let j={type:"element",tagName:d,properties:v,children:[]};y&&(j.children=l.all(y),l.patch(y,j),j=l.applyData(y,j)),p.push(j)}const b={type:"element",tagName:"tr",properties:{},children:l.wrap(p,!0)};return l.patch(r,b),l.applyData(r,b)}function Yv(l,r){const i={type:"element",tagName:"td",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}const sm=9,cm=32;function Gv(l){const r=String(l),i=/\r?\n|\r/g;let u=i.exec(r),f=0;const d=[];for(;u;)d.push(fm(r.slice(f,u.index),f>0,!0),u[0]),f=u.index+u[0].length,u=i.exec(r);return d.push(fm(r.slice(f),f>0,!1)),d.join("")}function fm(l,r,i){let u=0,f=l.length;if(r){let d=l.codePointAt(u);for(;d===sm||d===cm;)u++,d=l.codePointAt(u)}if(i){let d=l.codePointAt(f-1);for(;d===sm||d===cm;)f--,d=l.codePointAt(f-1)}return f>u?l.slice(u,f):""}function Vv(l,r){const i={type:"text",value:Gv(String(r.value))};return l.patch(r,i),l.applyData(r,i)}function Iv(l,r){const i={type:"element",tagName:"hr",properties:{},children:[]};return l.patch(r,i),l.applyData(r,i)}const Xv={blockquote:vv,break:Sv,code:kv,delete:wv,emphasis:Ev,footnoteReference:Tv,heading:Cv,html:jv,imageReference:zv,image:Av,inlineCode:Nv,linkReference:Mv,link:Dv,listItem:_v,list:Lv,paragraph:Rv,root:Bv,strong:Uv,table:Hv,tableCell:Yv,tableRow:qv,text:Vv,thematicBreak:Iv,toml:Wr,yaml:Wr,definition:Wr,footnoteDefinition:Wr};function Wr(){}const dg=-1,fu=0,Ci=1,iu=2,wc=3,Ec=4,Tc=5,Cc=6,pg=7,hg=8,dm=typeof self=="object"?self:globalThis,Qv=(l,r)=>{const i=(f,d)=>(l.set(d,f),f),u=f=>{if(l.has(f))return l.get(f);const[d,c]=r[f];switch(d){case fu:case dg:return i(c,f);case Ci:{const h=i([],f);for(const m of c)h.push(u(m));return h}case iu:{const h=i({},f);for(const[m,p]of c)h[u(m)]=u(p);return h}case wc:return i(new Date(c),f);case Ec:{const{source:h,flags:m}=c;return i(new RegExp(h,m),f)}case Tc:{const h=i(new Map,f);for(const[m,p]of c)h.set(u(m),u(p));return h}case Cc:{const h=i(new Set,f);for(const m of c)h.add(u(m));return h}case pg:{const{name:h,message:m}=c;return i(new dm[h](m),f)}case hg:return i(BigInt(c),f);case"BigInt":return i(Object(BigInt(c)),f);case"ArrayBuffer":return i(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:h}=new Uint8Array(c);return i(new DataView(h),c)}}return i(new dm[d](c),f)};return u},pm=l=>Qv(new Map,l)(0),xa="",{toString:Zv}={},{keys:Fv}=Object,ki=l=>{const r=typeof l;if(r!=="object"||!l)return[fu,r];const i=Zv.call(l).slice(8,-1);switch(i){case"Array":return[Ci,xa];case"Object":return[iu,xa];case"Date":return[wc,xa];case"RegExp":return[Ec,xa];case"Map":return[Tc,xa];case"Set":return[Cc,xa];case"DataView":return[Ci,i]}return i.includes("Array")?[Ci,i]:i.includes("Error")?[pg,i]:[iu,i]},Pr=([l,r])=>l===fu&&(r==="function"||r==="symbol"),Kv=(l,r,i,u)=>{const f=(c,h)=>{const m=u.push(c)-1;return i.set(h,m),m},d=c=>{if(i.has(c))return i.get(c);let[h,m]=ki(c);switch(h){case fu:{let b=c;switch(m){case"bigint":h=hg,b=c.toString();break;case"function":case"symbol":if(l)throw new TypeError("unable to serialize "+m);b=null;break;case"undefined":return f([dg],c)}return f([h,b],c)}case Ci:{if(m){let v=c;return m==="DataView"?v=new Uint8Array(c.buffer):m==="ArrayBuffer"&&(v=new Uint8Array(c)),f([m,[...v]],c)}const b=[],y=f([h,b],c);for(const v of c)b.push(d(v));return y}case iu:{if(m)switch(m){case"BigInt":return f([m,c.toString()],c);case"Boolean":case"Number":case"String":return f([m,c.valueOf()],c)}if(r&&"toJSON"in c)return d(c.toJSON());const b=[],y=f([h,b],c);for(const v of Fv(c))(l||!Pr(ki(c[v])))&&b.push([d(v),d(c[v])]);return y}case wc:return f([h,c.toISOString()],c);case Ec:{const{source:b,flags:y}=c;return f([h,{source:b,flags:y}],c)}case Tc:{const b=[],y=f([h,b],c);for(const[v,k]of c)(l||!(Pr(ki(v))||Pr(ki(k))))&&b.push([d(v),d(k)]);return y}case Cc:{const b=[],y=f([h,b],c);for(const v of c)(l||!Pr(ki(v)))&&b.push(d(v));return y}}const{message:p}=c;return f([h,{name:m,message:p}],c)};return d},hm=(l,{json:r,lossy:i}={})=>{const u=[];return Kv(!(r||i),!!r,new Map,u)(l),u},ru=typeof structuredClone=="function"?(l,r)=>r&&("json"in r||"lossy"in r)?pm(hm(l,r)):structuredClone(l):(l,r)=>pm(hm(l,r));function Jv(l,r){const i=[{type:"text",value:"↩"}];return r>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),i}function $v(l,r){return"Back to reference "+(l+1)+(r>1?"-"+r:"")}function Wv(l){const r=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",i=l.options.footnoteBackContent||Jv,u=l.options.footnoteBackLabel||$v,f=l.options.footnoteLabel||"Footnotes",d=l.options.footnoteLabelTagName||"h2",c=l.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let m=-1;for(;++m<l.footnoteOrder.length;){const p=l.footnoteById.get(l.footnoteOrder[m]);if(!p)continue;const b=l.all(p),y=String(p.identifier).toUpperCase(),v=wa(y.toLowerCase());let k=0;const j=[],q=l.footnoteCounts.get(y);for(;q!==void 0&&++k<=q;){j.length>0&&j.push({type:"text",value:" "});let L=typeof i=="string"?i:i(m,k);typeof L=="string"&&(L={type:"text",value:L}),j.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+v+(k>1?"-"+k:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(m,k),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const X=b[b.length-1];if(X&&X.type==="element"&&X.tagName==="p"){const L=X.children[X.children.length-1];L&&L.type==="text"?L.value+=" ":X.children.push({type:"text",value:" "}),X.children.push(...j)}else b.push(...j);const D={type:"element",tagName:"li",properties:{id:r+"fn-"+v},children:l.wrap(b,!0)};l.patch(p,D),h.push(D)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:d,properties:{...ru(c),id:"footnote-label"},children:[{type:"text",value:f}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:l.wrap(h,!0)},{type:"text",value:`
`}]}}const du=(function(l){if(l==null)return n2;if(typeof l=="function")return pu(l);if(typeof l=="object")return Array.isArray(l)?Pv(l):e2(l);if(typeof l=="string")return t2(l);throw new Error("Expected function, string, or object as test")});function Pv(l){const r=[];let i=-1;for(;++i<l.length;)r[i]=du(l[i]);return pu(u);function u(...f){let d=-1;for(;++d<r.length;)if(r[d].apply(this,f))return!0;return!1}}function e2(l){const r=l;return pu(i);function i(u){const f=u;let d;for(d in l)if(f[d]!==r[d])return!1;return!0}}function t2(l){return pu(r);function r(i){return i&&i.type===l}}function pu(l){return r;function r(i,u,f){return!!(l2(i)&&l.call(this,i,typeof u=="number"?u:void 0,f||void 0))}}function n2(){return!0}function l2(l){return l!==null&&typeof l=="object"&&"type"in l}const mg=[],a2=!0,uc=!1,i2="skip";function gg(l,r,i,u){let f;typeof r=="function"&&typeof i!="function"?(u=i,i=r):f=r;const d=du(f),c=u?-1:1;h(l,void 0,[])();function h(m,p,b){const y=m&&typeof m=="object"?m:{};if(typeof y.type=="string"){const k=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(m.type+(k?"<"+k+">":""))+")"})}return v;function v(){let k=mg,j,q,X;if((!r||d(m,p,b[b.length-1]||void 0))&&(k=r2(i(m,b)),k[0]===uc))return k;if("children"in m&&m.children){const D=m;if(D.children&&k[0]!==i2)for(q=(u?D.children.length:-1)+c,X=b.concat(D);q>-1&&q<D.children.length;){const L=D.children[q];if(j=h(L,q,X)(),j[0]===uc)return j;q=typeof j[1]=="number"?j[1]:q+c}}return k}}}function r2(l){return Array.isArray(l)?l:typeof l=="number"?[a2,l]:l==null?mg:[l]}function jc(l,r,i,u){let f,d,c;typeof r=="function"&&typeof i!="function"?(d=void 0,c=r,f=i):(d=r,c=i,f=u),gg(l,d,h,f);function h(m,p){const b=p[p.length-1],y=b?b.children.indexOf(m):void 0;return c(m,y,b)}}const oc={}.hasOwnProperty,u2={};function o2(l,r){const i=r||u2,u=new Map,f=new Map,d=new Map,c={...Xv,...i.handlers},h={all:p,applyData:c2,definitionById:u,footnoteById:f,footnoteCounts:d,footnoteOrder:[],handlers:c,one:m,options:i,patch:s2,wrap:d2};return jc(l,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const y=b.type==="definition"?u:f,v=String(b.identifier).toUpperCase();y.has(v)||y.set(v,b)}}),h;function m(b,y){const v=b.type,k=h.handlers[v];if(oc.call(h.handlers,v)&&k)return k(h,b,y);if(h.options.passThrough&&h.options.passThrough.includes(v)){if("children"in b){const{children:q,...X}=b,D=ru(X);return D.children=h.all(b),D}return ru(b)}return(h.options.unknownHandler||f2)(h,b,y)}function p(b){const y=[];if("children"in b){const v=b.children;let k=-1;for(;++k<v.length;){const j=h.one(v[k],b);if(j){if(k&&v[k-1].type==="break"&&(!Array.isArray(j)&&j.type==="text"&&(j.value=mm(j.value)),!Array.isArray(j)&&j.type==="element")){const q=j.children[0];q&&q.type==="text"&&(q.value=mm(q.value))}Array.isArray(j)?y.push(...j):y.push(j)}}}return y}}function s2(l,r){l.position&&(r.position=$x(l))}function c2(l,r){let i=r;if(l&&l.data){const u=l.data.hName,f=l.data.hChildren,d=l.data.hProperties;if(typeof u=="string")if(i.type==="element")i.tagName=u;else{const c="children"in i?i.children:[i];i={type:"element",tagName:u,properties:{},children:c}}i.type==="element"&&d&&Object.assign(i.properties,ru(d)),"children"in i&&i.children&&f!==null&&f!==void 0&&(i.children=f)}return i}function f2(l,r){const i=r.data||{},u="value"in r&&!(oc.call(i,"hProperties")||oc.call(i,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:l.all(r)};return l.patch(r,u),l.applyData(r,u)}function d2(l,r){const i=[];let u=-1;for(r&&i.push({type:"text",value:`
`});++u<l.length;)u&&i.push({type:"text",value:`
`}),i.push(l[u]);return r&&l.length>0&&i.push({type:"text",value:`
`}),i}function mm(l){let r=0,i=l.charCodeAt(r);for(;i===9||i===32;)r++,i=l.charCodeAt(r);return l.slice(r)}function gm(l,r){const i=o2(l,r),u=i.one(l,void 0),f=Wv(i),d=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return f&&d.children.push({type:"text",value:`
`},f),d}function p2(l,r){return l&&"run"in l?async function(i,u){const f=gm(i,{file:u,...r});await l.run(f,u)}:function(i,u){return gm(i,{file:u,...l||r})}}function xm(l){if(l)throw l}var Ys,ym;function h2(){if(ym)return Ys;ym=1;var l=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f=function(p){return typeof Array.isArray=="function"?Array.isArray(p):r.call(p)==="[object Array]"},d=function(p){if(!p||r.call(p)!=="[object Object]")return!1;var b=l.call(p,"constructor"),y=p.constructor&&p.constructor.prototype&&l.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!b&&!y)return!1;var v;for(v in p);return typeof v>"u"||l.call(p,v)},c=function(p,b){i&&b.name==="__proto__"?i(p,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):p[b.name]=b.newValue},h=function(p,b){if(b==="__proto__")if(l.call(p,b)){if(u)return u(p,b).value}else return;return p[b]};return Ys=function m(){var p,b,y,v,k,j,q=arguments[0],X=1,D=arguments.length,L=!1;for(typeof q=="boolean"&&(L=q,q=arguments[1]||{},X=2),(q==null||typeof q!="object"&&typeof q!="function")&&(q={});X<D;++X)if(p=arguments[X],p!=null)for(b in p)y=h(q,b),v=h(p,b),q!==v&&(L&&v&&(d(v)||(k=f(v)))?(k?(k=!1,j=y&&f(y)?y:[]):j=y&&d(y)?y:{},c(q,{name:b,newValue:m(L,j,v)})):typeof v<"u"&&c(q,{name:b,newValue:v}));return q},Ys}var m2=h2();const Gs=ou(m2);function sc(l){if(typeof l!="object"||l===null)return!1;const r=Object.getPrototypeOf(l);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in l)&&!(Symbol.iterator in l)}function g2(){const l=[],r={run:i,use:u};return r;function i(...f){let d=-1;const c=f.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);h(null,...f);function h(m,...p){const b=l[++d];let y=-1;if(m){c(m);return}for(;++y<f.length;)(p[y]===null||p[y]===void 0)&&(p[y]=f[y]);f=p,b?x2(b,h)(...p):c(null,...p)}}function u(f){if(typeof f!="function")throw new TypeError("Expected `middelware` to be a function, not "+f);return l.push(f),r}}function x2(l,r){let i;return u;function u(...c){const h=l.length>c.length;let m;h&&c.push(f);try{m=l.apply(this,c)}catch(p){const b=p;if(h&&i)throw b;return f(b)}h||(m&&m.then&&typeof m.then=="function"?m.then(d,f):m instanceof Error?f(m):d(m))}function f(c,...h){i||(i=!0,r(c,...h))}function d(c){f(null,c)}}const cn={basename:y2,dirname:b2,extname:v2,join:S2,sep:"/"};function y2(l,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Mi(l);let i=0,u=-1,f=l.length,d;if(r===void 0||r.length===0||r.length>l.length){for(;f--;)if(l.codePointAt(f)===47){if(d){i=f+1;break}}else u<0&&(d=!0,u=f+1);return u<0?"":l.slice(i,u)}if(r===l)return"";let c=-1,h=r.length-1;for(;f--;)if(l.codePointAt(f)===47){if(d){i=f+1;break}}else c<0&&(d=!0,c=f+1),h>-1&&(l.codePointAt(f)===r.codePointAt(h--)?h<0&&(u=f):(h=-1,u=c));return i===u?u=c:u<0&&(u=l.length),l.slice(i,u)}function b2(l){if(Mi(l),l.length===0)return".";let r=-1,i=l.length,u;for(;--i;)if(l.codePointAt(i)===47){if(u){r=i;break}}else u||(u=!0);return r<0?l.codePointAt(0)===47?"/":".":r===1&&l.codePointAt(0)===47?"//":l.slice(0,r)}function v2(l){Mi(l);let r=l.length,i=-1,u=0,f=-1,d=0,c;for(;r--;){const h=l.codePointAt(r);if(h===47){if(c){u=r+1;break}continue}i<0&&(c=!0,i=r+1),h===46?f<0?f=r:d!==1&&(d=1):f>-1&&(d=-1)}return f<0||i<0||d===0||d===1&&f===i-1&&f===u+1?"":l.slice(f,i)}function S2(...l){let r=-1,i;for(;++r<l.length;)Mi(l[r]),l[r]&&(i=i===void 0?l[r]:i+"/"+l[r]);return i===void 0?".":k2(i)}function k2(l){Mi(l);const r=l.codePointAt(0)===47;let i=w2(l,!r);return i.length===0&&!r&&(i="."),i.length>0&&l.codePointAt(l.length-1)===47&&(i+="/"),r?"/"+i:i}function w2(l,r){let i="",u=0,f=-1,d=0,c=-1,h,m;for(;++c<=l.length;){if(c<l.length)h=l.codePointAt(c);else{if(h===47)break;h=47}if(h===47){if(!(f===c-1||d===1))if(f!==c-1&&d===2){if(i.length<2||u!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",u=0):(i=i.slice(0,m),u=i.length-1-i.lastIndexOf("/")),f=c,d=0;continue}}else if(i.length>0){i="",u=0,f=c,d=0;continue}}r&&(i=i.length>0?i+"/..":"..",u=2)}else i.length>0?i+="/"+l.slice(f+1,c):i=l.slice(f+1,c),u=c-f-1;f=c,d=0}else h===46&&d>-1?d++:d=-1}return i}function Mi(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}const E2={cwd:T2};function T2(){return"/"}function cc(l){return!!(l!==null&&typeof l=="object"&&"href"in l&&l.href&&"protocol"in l&&l.protocol&&l.auth===void 0)}function C2(l){if(typeof l=="string")l=new URL(l);else if(!cc(l)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+l+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(l.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return j2(l)}function j2(l){if(l.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const r=l.pathname;let i=-1;for(;++i<r.length;)if(r.codePointAt(i)===37&&r.codePointAt(i+1)===50){const u=r.codePointAt(i+2);if(u===70||u===102){const f=new TypeError("File URL path must not include encoded / characters");throw f.code="ERR_INVALID_FILE_URL_PATH",f}}return decodeURIComponent(r)}const Vs=["history","path","basename","stem","extname","dirname"];class xg{constructor(r){let i;r?cc(r)?i={path:r}:typeof r=="string"||z2(r)?i={value:r}:i=r:i={},this.cwd="cwd"in i?"":E2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Vs.length;){const d=Vs[u];d in i&&i[d]!==void 0&&i[d]!==null&&(this[d]=d==="history"?[...i[d]]:i[d])}let f;for(f in i)Vs.includes(f)||(this[f]=i[f])}get basename(){return typeof this.path=="string"?cn.basename(this.path):void 0}set basename(r){Xs(r,"basename"),Is(r,"basename"),this.path=cn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?cn.dirname(this.path):void 0}set dirname(r){bm(this.basename,"dirname"),this.path=cn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?cn.extname(this.path):void 0}set extname(r){if(Is(r,"extname"),bm(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=cn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){cc(r)&&(r=C2(r)),Xs(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?cn.basename(this.path,this.extname):void 0}set stem(r){Xs(r,"stem"),Is(r,"stem"),this.path=cn.join(this.dirname||"",r+(this.extname||""))}fail(r,i,u){const f=this.message(r,i,u);throw f.fatal=!0,f}info(r,i,u){const f=this.message(r,i,u);return f.fatal=void 0,f}message(r,i,u){const f=new xt(r,i,u);return this.path&&(f.name=this.path+":"+f.name,f.file=this.path),f.fatal=!1,this.messages.push(f),f}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Is(l,r){if(l&&l.includes(cn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+cn.sep+"`")}function Xs(l,r){if(!l)throw new Error("`"+r+"` cannot be empty")}function bm(l,r){if(!l)throw new Error("Setting `"+r+"` requires `path` to be set too")}function z2(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const A2=(function(l){const u=this.constructor.prototype,f=u[l],d=function(){return f.apply(d,arguments)};return Object.setPrototypeOf(d,u),d}),N2={}.hasOwnProperty;class zc extends A2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=g2()}copy(){const r=new zc;let i=-1;for(;++i<this.attachers.length;){const u=this.attachers[i];r.use(...u)}return r.data(Gs(!0,{},this.namespace)),r}data(r,i){return typeof r=="string"?arguments.length===2?(Fs("data",this.frozen),this.namespace[r]=i,this):N2.call(this.namespace,r)&&this.namespace[r]||void 0:r?(Fs("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const f=i.call(r,...u);typeof f=="function"&&this.transformers.use(f)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const i=eu(r),u=this.parser||this.Parser;return Qs("parse",u),u(String(i),i)}process(r,i){const u=this;return this.freeze(),Qs("process",this.parser||this.Parser),Zs("process",this.compiler||this.Compiler),i?f(void 0,i):new Promise(f);function f(d,c){const h=eu(r),m=u.parse(h);u.run(m,h,function(b,y,v){if(b||!y||!v)return p(b);const k=y,j=u.stringify(k,v);_2(j)?v.value=j:v.result=j,p(b,v)});function p(b,y){b||!y?c(b):d?d(y):i(void 0,y)}}}processSync(r){let i=!1,u;return this.freeze(),Qs("processSync",this.parser||this.Parser),Zs("processSync",this.compiler||this.Compiler),this.process(r,f),Sm("processSync","process",i),u;function f(d,c){i=!0,xm(d),u=c}}run(r,i,u){vm(r),this.freeze();const f=this.transformers;return!u&&typeof i=="function"&&(u=i,i=void 0),u?d(void 0,u):new Promise(d);function d(c,h){const m=eu(i);f.run(r,m,p);function p(b,y,v){const k=y||r;b?h(b):c?c(k):u(void 0,k,v)}}}runSync(r,i){let u=!1,f;return this.run(r,i,d),Sm("runSync","run",u),f;function d(c,h){xm(c),f=h,u=!0}}stringify(r,i){this.freeze();const u=eu(i),f=this.compiler||this.Compiler;return Zs("stringify",f),vm(r),f(r,u)}use(r,...i){const u=this.attachers,f=this.namespace;if(Fs("use",this.frozen),r!=null)if(typeof r=="function")m(r,i);else if(typeof r=="object")Array.isArray(r)?h(r):c(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function d(p){if(typeof p=="function")m(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[b,...y]=p;m(b,y)}else c(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function c(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(p.plugins),p.settings&&(f.settings=Gs(!0,f.settings,p.settings))}function h(p){let b=-1;if(p!=null)if(Array.isArray(p))for(;++b<p.length;){const y=p[b];d(y)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function m(p,b){let y=-1,v=-1;for(;++y<u.length;)if(u[y][0]===p){v=y;break}if(v===-1)u.push([p,...b]);else if(b.length>0){let[k,...j]=b;const q=u[v][1];sc(q)&&sc(k)&&(k=Gs(!0,q,k)),u[v]=[p,k,...j]}}}}const M2=new zc().freeze();function Qs(l,r){if(typeof r!="function")throw new TypeError("Cannot `"+l+"` without `parser`")}function Zs(l,r){if(typeof r!="function")throw new TypeError("Cannot `"+l+"` without `compiler`")}function Fs(l,r){if(r)throw new Error("Cannot call `"+l+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function vm(l){if(!sc(l)||typeof l.type!="string")throw new TypeError("Expected node, got `"+l+"`")}function Sm(l,r,i){if(!i)throw new Error("`"+l+"` finished async. Use `"+r+"` instead")}function eu(l){return D2(l)?l:new xg(l)}function D2(l){return!!(l&&typeof l=="object"&&"message"in l&&"messages"in l)}function _2(l){return typeof l=="string"||O2(l)}function O2(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const L2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",km=[],wm={allowDangerousHtml:!0},R2=/^(https?|ircs?|mailto|xmpp)$/i,B2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function U2(l){const r=H2(l),i=q2(l);return Y2(r.runSync(r.parse(i),i),l)}function H2(l){const r=l.rehypePlugins||km,i=l.remarkPlugins||km,u=l.remarkRehypeOptions?{...l.remarkRehypeOptions,...wm}:wm;return M2().use(bv).use(i).use(p2,u).use(r)}function q2(l){const r=l.children||"",i=new xg;return typeof r=="string"&&(i.value=r),i}function Y2(l,r){const i=r.allowedElements,u=r.allowElement,f=r.components,d=r.disallowedElements,c=r.skipHtml,h=r.unwrapDisallowed,m=r.urlTransform||G2;for(const b of B2)Object.hasOwn(r,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+L2+b.id,void 0);return jc(l,p),ny(l,{Fragment:g.Fragment,components:f,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0});function p(b,y,v){if(b.type==="raw"&&v&&typeof y=="number")return c?v.children.splice(y,1):v.children[y]={type:"text",value:b.value},y;if(b.type==="element"){let k;for(k in Us)if(Object.hasOwn(Us,k)&&Object.hasOwn(b.properties,k)){const j=b.properties[k],q=Us[k];(q===null||q.includes(b.tagName))&&(b.properties[k]=m(String(j||""),k,b))}}if(b.type==="element"){let k=i?!i.includes(b.tagName):d?d.includes(b.tagName):!1;if(!k&&u&&typeof y=="number"&&(k=!u(b,y,v)),k&&v&&typeof y=="number")return h&&b.children?v.children.splice(y,1,...b.children):v.children.splice(y,1),y}}}function G2(l){const r=l.indexOf(":"),i=l.indexOf("?"),u=l.indexOf("#"),f=l.indexOf("/");return r===-1||f!==-1&&r>f||i!==-1&&r>i||u!==-1&&r>u||R2.test(l.slice(0,r))?l:""}function Em(l,r){const i=String(l);if(typeof r!="string")throw new TypeError("Expected character");let u=0,f=i.indexOf(r);for(;f!==-1;)u++,f=i.indexOf(r,f+r.length);return u}function V2(l){if(typeof l!="string")throw new TypeError("Expected a string");return l.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function I2(l,r,i){const f=du((i||{}).ignore||[]),d=X2(r);let c=-1;for(;++c<d.length;)gg(l,"text",h);function h(p,b){let y=-1,v;for(;++y<b.length;){const k=b[y],j=v?v.children:void 0;if(f(k,j?j.indexOf(k):void 0,v))return;v=k}if(v)return m(p,b)}function m(p,b){const y=b[b.length-1],v=d[c][0],k=d[c][1];let j=0;const X=y.children.indexOf(p);let D=!1,L=[];v.lastIndex=0;let M=v.exec(p.value);for(;M;){const W=M.index,ee={index:M.index,input:M.input,stack:[...b,p]};let B=k(...M,ee);if(typeof B=="string"&&(B=B.length>0?{type:"text",value:B}:void 0),B===!1?v.lastIndex=W+1:(j!==W&&L.push({type:"text",value:p.value.slice(j,W)}),Array.isArray(B)?L.push(...B):B&&L.push(B),j=W+M[0].length,D=!0),!v.global)break;M=v.exec(p.value)}return D?(j<p.value.length&&L.push({type:"text",value:p.value.slice(j)}),y.children.splice(X,1,...L)):L=[p],X+L.length}}function X2(l){const r=[];if(!Array.isArray(l))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!l[0]||Array.isArray(l[0])?l:[l];let u=-1;for(;++u<i.length;){const f=i[u];r.push([Q2(f[0]),Z2(f[1])])}return r}function Q2(l){return typeof l=="string"?new RegExp(V2(l),"g"):l}function Z2(l){return typeof l=="function"?l:function(){return l}}const Ks="phrasing",Js=["autolink","link","image","label"];function F2(){return{transforms:[tS],enter:{literalAutolink:J2,literalAutolinkEmail:$s,literalAutolinkHttp:$s,literalAutolinkWww:$s},exit:{literalAutolink:eS,literalAutolinkEmail:P2,literalAutolinkHttp:$2,literalAutolinkWww:W2}}}function K2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ks,notInConstruct:Js},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ks,notInConstruct:Js},{character:":",before:"[ps]",after:"\\/",inConstruct:Ks,notInConstruct:Js}]}}function J2(l){this.enter({type:"link",title:null,url:"",children:[]},l)}function $s(l){this.config.enter.autolinkProtocol.call(this,l)}function $2(l){this.config.exit.autolinkProtocol.call(this,l)}function W2(l){this.config.exit.data.call(this,l);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(l)}function P2(l){this.config.exit.autolinkEmail.call(this,l)}function eS(l){this.exit(l)}function tS(l){I2(l,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,nS],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),lS]],{ignore:["link","linkReference"]})}function nS(l,r,i,u,f){let d="";if(!yg(f)||(/^w/i.test(r)&&(i=r+i,r="",d="http://"),!aS(i)))return!1;const c=iS(i+u);if(!c[0])return!1;const h={type:"link",title:null,url:d+r+c[0],children:[{type:"text",value:r+c[0]}]};return c[1]?[h,{type:"text",value:c[1]}]:h}function lS(l,r,i,u){return!yg(u,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+i,children:[{type:"text",value:r+"@"+i}]}}function aS(l){const r=l.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function iS(l){const r=/[!"&'),.:;<>?\]}]+$/.exec(l);if(!r)return[l,void 0];l=l.slice(0,r.index);let i=r[0],u=i.indexOf(")");const f=Em(l,"(");let d=Em(l,")");for(;u!==-1&&f>d;)l+=i.slice(0,u+1),i=i.slice(u+1),u=i.indexOf(")"),d++;return[l,i]}function yg(l,r){const i=l.input.charCodeAt(l.index-1);return(l.index===0||Cl(i)||su(i))&&(!r||i!==47)}bg.peek=hS;function rS(){this.buffer()}function uS(l){this.enter({type:"footnoteReference",identifier:"",label:""},l)}function oS(){this.buffer()}function sS(l){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},l)}function cS(l){const r=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=an(this.sliceSerialize(l)).toLowerCase(),i.label=r}function fS(l){this.exit(l)}function dS(l){const r=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=an(this.sliceSerialize(l)).toLowerCase(),i.label=r}function pS(l){this.exit(l)}function hS(){return"["}function bg(l,r,i,u){const f=i.createTracker(u);let d=f.move("[^");const c=i.enter("footnoteReference"),h=i.enter("reference");return d+=f.move(i.safe(i.associationId(l),{after:"]",before:d})),h(),c(),d+=f.move("]"),d}function mS(){return{enter:{gfmFootnoteCallString:rS,gfmFootnoteCall:uS,gfmFootnoteDefinitionLabelString:oS,gfmFootnoteDefinition:sS},exit:{gfmFootnoteCallString:cS,gfmFootnoteCall:fS,gfmFootnoteDefinitionLabelString:dS,gfmFootnoteDefinition:pS}}}function gS(l){let r=!1;return l&&l.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:i,footnoteReference:bg},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(u,f,d,c){const h=d.createTracker(c);let m=h.move("[^");const p=d.enter("footnoteDefinition"),b=d.enter("label");return m+=h.move(d.safe(d.associationId(u),{before:m,after:"]"})),b(),m+=h.move("]:"),u.children&&u.children.length>0&&(h.shift(4),m+=h.move((r?`
`:" ")+d.indentLines(d.containerFlow(u,h.current()),r?vg:xS))),p(),m}}function xS(l,r,i){return r===0?l:vg(l,r,i)}function vg(l,r,i){return(i?"":"    ")+l}const yS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Sg.peek=wS;function bS(){return{canContainEols:["delete"],enter:{strikethrough:SS},exit:{strikethrough:kS}}}function vS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:yS}],handlers:{delete:Sg}}}function SS(l){this.enter({type:"delete",children:[]},l)}function kS(l){this.exit(l)}function Sg(l,r,i,u){const f=i.createTracker(u),d=i.enter("strikethrough");let c=f.move("~~");return c+=i.containerPhrasing(l,{...f.current(),before:c,after:"~"}),c+=f.move("~~"),d(),c}function wS(){return"~"}function ES(l){return l.length}function TS(l,r){const i=r||{},u=(i.align||[]).concat(),f=i.stringLength||ES,d=[],c=[],h=[],m=[];let p=0,b=-1;for(;++b<l.length;){const q=[],X=[];let D=-1;for(l[b].length>p&&(p=l[b].length);++D<l[b].length;){const L=CS(l[b][D]);if(i.alignDelimiters!==!1){const M=f(L);X[D]=M,(m[D]===void 0||M>m[D])&&(m[D]=M)}q.push(L)}c[b]=q,h[b]=X}let y=-1;if(typeof u=="object"&&"length"in u)for(;++y<p;)d[y]=Tm(u[y]);else{const q=Tm(u);for(;++y<p;)d[y]=q}y=-1;const v=[],k=[];for(;++y<p;){const q=d[y];let X="",D="";q===99?(X=":",D=":"):q===108?X=":":q===114&&(D=":");let L=i.alignDelimiters===!1?1:Math.max(1,m[y]-X.length-D.length);const M=X+"-".repeat(L)+D;i.alignDelimiters!==!1&&(L=X.length+L+D.length,L>m[y]&&(m[y]=L),k[y]=L),v[y]=M}c.splice(1,0,v),h.splice(1,0,k),b=-1;const j=[];for(;++b<c.length;){const q=c[b],X=h[b];y=-1;const D=[];for(;++y<p;){const L=q[y]||"";let M="",W="";if(i.alignDelimiters!==!1){const ee=m[y]-(X[y]||0),B=d[y];B===114?M=" ".repeat(ee):B===99?ee%2?(M=" ".repeat(ee/2+.5),W=" ".repeat(ee/2-.5)):(M=" ".repeat(ee/2),W=M):W=" ".repeat(ee)}i.delimiterStart!==!1&&!y&&D.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&L==="")&&(i.delimiterStart!==!1||y)&&D.push(" "),i.alignDelimiters!==!1&&D.push(M),D.push(L),i.alignDelimiters!==!1&&D.push(W),i.padding!==!1&&D.push(" "),(i.delimiterEnd!==!1||y!==p-1)&&D.push("|")}j.push(i.delimiterEnd===!1?D.join("").replace(/ +$/,""):D.join(""))}return j.join(`
`)}function CS(l){return l==null?"":String(l)}function Tm(l){const r=typeof l=="string"?l.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function jS(l,r,i,u){const f=i.enter("blockquote"),d=i.createTracker(u);d.move("> "),d.shift(2);const c=i.indentLines(i.containerFlow(l,d.current()),zS);return f(),c}function zS(l,r,i){return">"+(i?"":" ")+l}function AS(l,r){return Cm(l,r.inConstruct,!0)&&!Cm(l,r.notInConstruct,!1)}function Cm(l,r,i){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return i;let u=-1;for(;++u<r.length;)if(l.includes(r[u]))return!0;return!1}function jm(l,r,i,u){let f=-1;for(;++f<i.unsafe.length;)if(i.unsafe[f].character===`
`&&AS(i.stack,i.unsafe[f]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function NS(l,r){const i=String(l);let u=i.indexOf(r),f=u,d=0,c=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===f?++d>c&&(c=d):d=1,f=u+r.length,u=i.indexOf(r,f);return c}function MS(l,r){return!!(r.options.fences===!1&&l.value&&!l.lang&&/[^ \r\n]/.test(l.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(l.value))}function DS(l){const r=l.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function _S(l,r,i,u){const f=DS(i),d=l.value||"",c=f==="`"?"GraveAccent":"Tilde";if(MS(l,i)){const y=i.enter("codeIndented"),v=i.indentLines(d,OS);return y(),v}const h=i.createTracker(u),m=f.repeat(Math.max(NS(d,f)+1,3)),p=i.enter("codeFenced");let b=h.move(m);if(l.lang){const y=i.enter(`codeFencedLang${c}`);b+=h.move(i.safe(l.lang,{before:b,after:" ",encode:["`"],...h.current()})),y()}if(l.lang&&l.meta){const y=i.enter(`codeFencedMeta${c}`);b+=h.move(" "),b+=h.move(i.safe(l.meta,{before:b,after:`
`,encode:["`"],...h.current()})),y()}return b+=h.move(`
`),d&&(b+=h.move(d+`
`)),b+=h.move(m),p(),b}function OS(l,r,i){return(i?"":"    ")+l}function Ac(l){const r=l.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function LS(l,r,i,u){const f=Ac(i),d=f==='"'?"Quote":"Apostrophe",c=i.enter("definition");let h=i.enter("label");const m=i.createTracker(u);let p=m.move("[");return p+=m.move(i.safe(i.associationId(l),{before:p,after:"]",...m.current()})),p+=m.move("]: "),h(),!l.url||/[\0- \u007F]/.test(l.url)?(h=i.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(i.safe(l.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(h=i.enter("destinationRaw"),p+=m.move(i.safe(l.url,{before:p,after:l.title?" ":`
`,...m.current()}))),h(),l.title&&(h=i.enter(`title${d}`),p+=m.move(" "+f),p+=m.move(i.safe(l.title,{before:p,after:f,...m.current()})),p+=m.move(f),h()),c(),p}function RS(l){const r=l.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function zi(l){return"&#x"+l.toString(16).toUpperCase()+";"}function uu(l,r,i){const u=Sa(l),f=Sa(r);return u===void 0?f===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:f===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?f===void 0?{inside:!1,outside:!1}:f===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:f===void 0?{inside:!1,outside:!1}:f===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}kg.peek=BS;function kg(l,r,i,u){const f=RS(i),d=i.enter("emphasis"),c=i.createTracker(u),h=c.move(f);let m=c.move(i.containerPhrasing(l,{after:f,before:h,...c.current()}));const p=m.charCodeAt(0),b=uu(u.before.charCodeAt(u.before.length-1),p,f);b.inside&&(m=zi(p)+m.slice(1));const y=m.charCodeAt(m.length-1),v=uu(u.after.charCodeAt(0),y,f);v.inside&&(m=m.slice(0,-1)+zi(y));const k=c.move(f);return d(),i.attentionEncodeSurroundingInfo={after:v.outside,before:b.outside},h+m+k}function BS(l,r,i){return i.options.emphasis||"*"}function US(l,r){let i=!1;return jc(l,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return i=!0,uc}),!!((!l.depth||l.depth<3)&&vc(l)&&(r.options.setext||i))}function HS(l,r,i,u){const f=Math.max(Math.min(6,l.depth||1),1),d=i.createTracker(u);if(US(l,i)){const b=i.enter("headingSetext"),y=i.enter("phrasing"),v=i.containerPhrasing(l,{...d.current(),before:`
`,after:`
`});return y(),b(),v+`
`+(f===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const c="#".repeat(f),h=i.enter("headingAtx"),m=i.enter("phrasing");d.move(c+" ");let p=i.containerPhrasing(l,{before:"# ",after:`
`,...d.current()});return/^[\t ]/.test(p)&&(p=zi(p.charCodeAt(0))+p.slice(1)),p=p?c+" "+p:c,i.options.closeAtx&&(p+=" "+c),m(),h(),p}wg.peek=qS;function wg(l){return l.value||""}function qS(){return"<"}Eg.peek=YS;function Eg(l,r,i,u){const f=Ac(i),d=f==='"'?"Quote":"Apostrophe",c=i.enter("image");let h=i.enter("label");const m=i.createTracker(u);let p=m.move("![");return p+=m.move(i.safe(l.alt,{before:p,after:"]",...m.current()})),p+=m.move("]("),h(),!l.url&&l.title||/[\0- \u007F]/.test(l.url)?(h=i.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(i.safe(l.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(h=i.enter("destinationRaw"),p+=m.move(i.safe(l.url,{before:p,after:l.title?" ":")",...m.current()}))),h(),l.title&&(h=i.enter(`title${d}`),p+=m.move(" "+f),p+=m.move(i.safe(l.title,{before:p,after:f,...m.current()})),p+=m.move(f),h()),p+=m.move(")"),c(),p}function YS(){return"!"}Tg.peek=GS;function Tg(l,r,i,u){const f=l.referenceType,d=i.enter("imageReference");let c=i.enter("label");const h=i.createTracker(u);let m=h.move("![");const p=i.safe(l.alt,{before:m,after:"]",...h.current()});m+=h.move(p+"]["),c();const b=i.stack;i.stack=[],c=i.enter("reference");const y=i.safe(i.associationId(l),{before:m,after:"]",...h.current()});return c(),i.stack=b,d(),f==="full"||!p||p!==y?m+=h.move(y+"]"):f==="shortcut"?m=m.slice(0,-1):m+=h.move("]"),m}function GS(){return"!"}Cg.peek=VS;function Cg(l,r,i){let u=l.value||"",f="`",d=-1;for(;new RegExp("(^|[^`])"+f+"([^`]|$)").test(u);)f+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++d<i.unsafe.length;){const c=i.unsafe[d],h=i.compilePattern(c);let m;if(c.atBreak)for(;m=h.exec(u);){let p=m.index;u.charCodeAt(p)===10&&u.charCodeAt(p-1)===13&&p--,u=u.slice(0,p)+" "+u.slice(m.index+1)}}return f+u+f}function VS(){return"`"}function jg(l,r){const i=vc(l);return!!(!r.options.resourceLink&&l.url&&!l.title&&l.children&&l.children.length===1&&l.children[0].type==="text"&&(i===l.url||"mailto:"+i===l.url)&&/^[a-z][a-z+.-]+:/i.test(l.url)&&!/[\0- <>\u007F]/.test(l.url))}zg.peek=IS;function zg(l,r,i,u){const f=Ac(i),d=f==='"'?"Quote":"Apostrophe",c=i.createTracker(u);let h,m;if(jg(l,i)){const b=i.stack;i.stack=[],h=i.enter("autolink");let y=c.move("<");return y+=c.move(i.containerPhrasing(l,{before:y,after:">",...c.current()})),y+=c.move(">"),h(),i.stack=b,y}h=i.enter("link"),m=i.enter("label");let p=c.move("[");return p+=c.move(i.containerPhrasing(l,{before:p,after:"](",...c.current()})),p+=c.move("]("),m(),!l.url&&l.title||/[\0- \u007F]/.test(l.url)?(m=i.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(i.safe(l.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(m=i.enter("destinationRaw"),p+=c.move(i.safe(l.url,{before:p,after:l.title?" ":")",...c.current()}))),m(),l.title&&(m=i.enter(`title${d}`),p+=c.move(" "+f),p+=c.move(i.safe(l.title,{before:p,after:f,...c.current()})),p+=c.move(f),m()),p+=c.move(")"),h(),p}function IS(l,r,i){return jg(l,i)?"<":"["}Ag.peek=XS;function Ag(l,r,i,u){const f=l.referenceType,d=i.enter("linkReference");let c=i.enter("label");const h=i.createTracker(u);let m=h.move("[");const p=i.containerPhrasing(l,{before:m,after:"]",...h.current()});m+=h.move(p+"]["),c();const b=i.stack;i.stack=[],c=i.enter("reference");const y=i.safe(i.associationId(l),{before:m,after:"]",...h.current()});return c(),i.stack=b,d(),f==="full"||!p||p!==y?m+=h.move(y+"]"):f==="shortcut"?m=m.slice(0,-1):m+=h.move("]"),m}function XS(){return"["}function Nc(l){const r=l.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function QS(l){const r=Nc(l),i=l.options.bulletOther;if(!i)return r==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+i+"`) to be different");return i}function ZS(l){const r=l.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function Ng(l){const r=l.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function FS(l,r,i,u){const f=i.enter("list"),d=i.bulletCurrent;let c=l.ordered?ZS(i):Nc(i);const h=l.ordered?c==="."?")":".":QS(i);let m=r&&i.bulletLastUsed?c===i.bulletLastUsed:!1;if(!l.ordered){const b=l.children?l.children[0]:void 0;if((c==="*"||c==="-")&&b&&(!b.children||!b.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(m=!0),Ng(i)===c&&b){let y=-1;for(;++y<l.children.length;){const v=l.children[y];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(c=h),i.bulletCurrent=c;const p=i.containerFlow(l,u);return i.bulletLastUsed=c,i.bulletCurrent=d,f(),p}function KS(l){const r=l.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function JS(l,r,i,u){const f=KS(i);let d=i.bulletCurrent||Nc(i);r&&r.type==="list"&&r.ordered&&(d=(typeof r.start=="number"&&r.start>-1?r.start:1)+(i.options.incrementListMarker===!1?0:r.children.indexOf(l))+d);let c=d.length+1;(f==="tab"||f==="mixed"&&(r&&r.type==="list"&&r.spread||l.spread))&&(c=Math.ceil(c/4)*4);const h=i.createTracker(u);h.move(d+" ".repeat(c-d.length)),h.shift(c);const m=i.enter("listItem"),p=i.indentLines(i.containerFlow(l,h.current()),b);return m(),p;function b(y,v,k){return v?(k?"":" ".repeat(c))+y:(k?d:d+" ".repeat(c-d.length))+y}}function $S(l,r,i,u){const f=i.enter("paragraph"),d=i.enter("phrasing"),c=i.containerPhrasing(l,u);return d(),f(),c}const WS=du(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function PS(l,r,i,u){return(l.children.some(function(c){return WS(c)})?i.containerPhrasing:i.containerFlow).call(i,l,u)}function e4(l){const r=l.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}Mg.peek=t4;function Mg(l,r,i,u){const f=e4(i),d=i.enter("strong"),c=i.createTracker(u),h=c.move(f+f);let m=c.move(i.containerPhrasing(l,{after:f,before:h,...c.current()}));const p=m.charCodeAt(0),b=uu(u.before.charCodeAt(u.before.length-1),p,f);b.inside&&(m=zi(p)+m.slice(1));const y=m.charCodeAt(m.length-1),v=uu(u.after.charCodeAt(0),y,f);v.inside&&(m=m.slice(0,-1)+zi(y));const k=c.move(f+f);return d(),i.attentionEncodeSurroundingInfo={after:v.outside,before:b.outside},h+m+k}function t4(l,r,i){return i.options.strong||"*"}function n4(l,r,i,u){return i.safe(l.value,u)}function l4(l){const r=l.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function a4(l,r,i){const u=(Ng(i)+(i.options.ruleSpaces?" ":"")).repeat(l4(i));return i.options.ruleSpaces?u.slice(0,-1):u}const Dg={blockquote:jS,break:jm,code:_S,definition:LS,emphasis:kg,hardBreak:jm,heading:HS,html:wg,image:Eg,imageReference:Tg,inlineCode:Cg,link:zg,linkReference:Ag,list:FS,listItem:JS,paragraph:$S,root:PS,strong:Mg,text:n4,thematicBreak:a4};function i4(){return{enter:{table:r4,tableData:zm,tableHeader:zm,tableRow:o4},exit:{codeText:s4,table:u4,tableData:Ws,tableHeader:Ws,tableRow:Ws}}}function r4(l){const r=l._align;this.enter({type:"table",align:r.map(function(i){return i==="none"?null:i}),children:[]},l),this.data.inTable=!0}function u4(l){this.exit(l),this.data.inTable=void 0}function o4(l){this.enter({type:"tableRow",children:[]},l)}function Ws(l){this.exit(l)}function zm(l){this.enter({type:"tableCell",children:[]},l)}function s4(l){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,c4));const i=this.stack[this.stack.length-1];i.type,i.value=r,this.exit(l)}function c4(l,r){return r==="|"?r:l}function f4(l){const r=l||{},i=r.tableCellPadding,u=r.tablePipeAlign,f=r.stringLength,d=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:c,tableCell:m,tableRow:h}};function c(k,j,q,X){return p(b(k,q,X),k.align)}function h(k,j,q,X){const D=y(k,q,X),L=p([D]);return L.slice(0,L.indexOf(`
`))}function m(k,j,q,X){const D=q.enter("tableCell"),L=q.enter("phrasing"),M=q.containerPhrasing(k,{...X,before:d,after:d});return L(),D(),M}function p(k,j){return TS(k,{align:j,alignDelimiters:u,padding:i,stringLength:f})}function b(k,j,q){const X=k.children;let D=-1;const L=[],M=j.enter("table");for(;++D<X.length;)L[D]=y(X[D],j,q);return M(),L}function y(k,j,q){const X=k.children;let D=-1;const L=[],M=j.enter("tableRow");for(;++D<X.length;)L[D]=m(X[D],k,j,q);return M(),L}function v(k,j,q){let X=Dg.inlineCode(k,j,q);return q.stack.includes("tableCell")&&(X=X.replace(/\|/g,"\\$&")),X}}function d4(){return{exit:{taskListCheckValueChecked:Am,taskListCheckValueUnchecked:Am,paragraph:h4}}}function p4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:m4}}}function Am(l){const r=this.stack[this.stack.length-2];r.type,r.checked=l.type==="taskListCheckValueChecked"}function h4(l){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const u=i.children[0];if(u&&u.type==="text"){const f=r.children;let d=-1,c;for(;++d<f.length;){const h=f[d];if(h.type==="paragraph"){c=h;break}}c===i&&(u.value=u.value.slice(1),u.value.length===0?i.children.shift():i.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,i.position.start=Object.assign({},u.position.start)))}}this.exit(l)}function m4(l,r,i,u){const f=l.children[0],d=typeof l.checked=="boolean"&&f&&f.type==="paragraph",c="["+(l.checked?"x":" ")+"] ",h=i.createTracker(u);d&&h.move(c);let m=Dg.listItem(l,r,i,{...u,...h.current()});return d&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),m;function p(b){return b+c}}function g4(){return[F2(),mS(),bS(),i4(),d4()]}function x4(l){return{extensions:[K2(),gS(l),vS(),f4(l),p4()]}}const y4={tokenize:E4,partial:!0},_g={tokenize:T4,partial:!0},Og={tokenize:C4,partial:!0},Lg={tokenize:j4,partial:!0},b4={tokenize:z4,partial:!0},Rg={name:"wwwAutolink",tokenize:k4,previous:Ug},Bg={name:"protocolAutolink",tokenize:w4,previous:Hg},_n={name:"emailAutolink",tokenize:S4,previous:qg},fn={};function v4(){return{text:fn}}let Tl=48;for(;Tl<123;)fn[Tl]=_n,Tl++,Tl===58?Tl=65:Tl===91&&(Tl=97);fn[43]=_n;fn[45]=_n;fn[46]=_n;fn[95]=_n;fn[72]=[_n,Bg];fn[104]=[_n,Bg];fn[87]=[_n,Rg];fn[119]=[_n,Rg];function S4(l,r,i){const u=this;let f,d;return c;function c(y){return!fc(y)||!qg.call(u,u.previous)||Mc(u.events)?i(y):(l.enter("literalAutolink"),l.enter("literalAutolinkEmail"),h(y))}function h(y){return fc(y)?(l.consume(y),h):y===64?(l.consume(y),m):i(y)}function m(y){return y===46?l.check(b4,b,p)(y):y===45||y===95||gt(y)?(d=!0,l.consume(y),m):b(y)}function p(y){return l.consume(y),f=!0,m}function b(y){return d&&f&&St(u.previous)?(l.exit("literalAutolinkEmail"),l.exit("literalAutolink"),r(y)):i(y)}}function k4(l,r,i){const u=this;return f;function f(c){return c!==87&&c!==119||!Ug.call(u,u.previous)||Mc(u.events)?i(c):(l.enter("literalAutolink"),l.enter("literalAutolinkWww"),l.check(y4,l.attempt(_g,l.attempt(Og,d),i),i)(c))}function d(c){return l.exit("literalAutolinkWww"),l.exit("literalAutolink"),r(c)}}function w4(l,r,i){const u=this;let f="",d=!1;return c;function c(y){return(y===72||y===104)&&Hg.call(u,u.previous)&&!Mc(u.events)?(l.enter("literalAutolink"),l.enter("literalAutolinkHttp"),f+=String.fromCodePoint(y),l.consume(y),h):i(y)}function h(y){if(St(y)&&f.length<5)return f+=String.fromCodePoint(y),l.consume(y),h;if(y===58){const v=f.toLowerCase();if(v==="http"||v==="https")return l.consume(y),m}return i(y)}function m(y){return y===47?(l.consume(y),d?p:(d=!0,m)):i(y)}function p(y){return y===null||au(y)||Xe(y)||Cl(y)||su(y)?i(y):l.attempt(_g,l.attempt(Og,b),i)(y)}function b(y){return l.exit("literalAutolinkHttp"),l.exit("literalAutolink"),r(y)}}function E4(l,r,i){let u=0;return f;function f(c){return(c===87||c===119)&&u<3?(u++,l.consume(c),f):c===46&&u===3?(l.consume(c),d):i(c)}function d(c){return c===null?i(c):r(c)}}function T4(l,r,i){let u,f,d;return c;function c(p){return p===46||p===95?l.check(Lg,m,h)(p):p===null||Xe(p)||Cl(p)||p!==45&&su(p)?m(p):(d=!0,l.consume(p),c)}function h(p){return p===95?u=!0:(f=u,u=void 0),l.consume(p),c}function m(p){return f||u||!d?i(p):r(p)}}function C4(l,r){let i=0,u=0;return f;function f(c){return c===40?(i++,l.consume(c),f):c===41&&u<i?d(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?l.check(Lg,r,d)(c):c===null||Xe(c)||Cl(c)?r(c):(l.consume(c),f)}function d(c){return c===41&&u++,l.consume(c),f}}function j4(l,r,i){return u;function u(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(l.consume(h),u):h===38?(l.consume(h),d):h===93?(l.consume(h),f):h===60||h===null||Xe(h)||Cl(h)?r(h):i(h)}function f(h){return h===null||h===40||h===91||Xe(h)||Cl(h)?r(h):u(h)}function d(h){return St(h)?c(h):i(h)}function c(h){return h===59?(l.consume(h),u):St(h)?(l.consume(h),c):i(h)}}function z4(l,r,i){return u;function u(d){return l.consume(d),f}function f(d){return gt(d)?i(d):r(d)}}function Ug(l){return l===null||l===40||l===42||l===95||l===91||l===93||l===126||Xe(l)}function Hg(l){return!St(l)}function qg(l){return!(l===47||fc(l))}function fc(l){return l===43||l===45||l===46||l===95||gt(l)}function Mc(l){let r=l.length,i=!1;for(;r--;){const u=l[r][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){i=!0;break}if(u._gfmAutolinkLiteralWalkedInto){i=!1;break}}return l.length>0&&!i&&(l[l.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const A4={tokenize:B4,partial:!0};function N4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:O4,continuation:{tokenize:L4},exit:R4}},text:{91:{name:"gfmFootnoteCall",tokenize:_4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:M4,resolveTo:D4}}}}function M4(l,r,i){const u=this;let f=u.events.length;const d=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c;for(;f--;){const m=u.events[f][1];if(m.type==="labelImage"){c=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return h;function h(m){if(!c||!c._balanced)return i(m);const p=an(u.sliceSerialize({start:c.end,end:u.now()}));return p.codePointAt(0)!==94||!d.includes(p.slice(1))?i(m):(l.enter("gfmFootnoteCallLabelMarker"),l.consume(m),l.exit("gfmFootnoteCallLabelMarker"),r(m))}}function D4(l,r){let i=l.length;for(;i--;)if(l[i][1].type==="labelImage"&&l[i][0]==="enter"){l[i][1];break}l[i+1][1].type="data",l[i+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},l[i+3][1].start),end:Object.assign({},l[l.length-1][1].end)},f={type:"gfmFootnoteCallMarker",start:Object.assign({},l[i+3][1].end),end:Object.assign({},l[i+3][1].end)};f.end.column++,f.end.offset++,f.end._bufferIndex++;const d={type:"gfmFootnoteCallString",start:Object.assign({},f.end),end:Object.assign({},l[l.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},d.start),end:Object.assign({},d.end)},h=[l[i+1],l[i+2],["enter",u,r],l[i+3],l[i+4],["enter",f,r],["exit",f,r],["enter",d,r],["enter",c,r],["exit",c,r],["exit",d,r],l[l.length-2],l[l.length-1],["exit",u,r]];return l.splice(i,l.length-i+1,...h),l}function _4(l,r,i){const u=this,f=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let d=0,c;return h;function h(y){return l.enter("gfmFootnoteCall"),l.enter("gfmFootnoteCallLabelMarker"),l.consume(y),l.exit("gfmFootnoteCallLabelMarker"),m}function m(y){return y!==94?i(y):(l.enter("gfmFootnoteCallMarker"),l.consume(y),l.exit("gfmFootnoteCallMarker"),l.enter("gfmFootnoteCallString"),l.enter("chunkString").contentType="string",p)}function p(y){if(d>999||y===93&&!c||y===null||y===91||Xe(y))return i(y);if(y===93){l.exit("chunkString");const v=l.exit("gfmFootnoteCallString");return f.includes(an(u.sliceSerialize(v)))?(l.enter("gfmFootnoteCallLabelMarker"),l.consume(y),l.exit("gfmFootnoteCallLabelMarker"),l.exit("gfmFootnoteCall"),r):i(y)}return Xe(y)||(c=!0),d++,l.consume(y),y===92?b:p}function b(y){return y===91||y===92||y===93?(l.consume(y),d++,p):p(y)}}function O4(l,r,i){const u=this,f=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let d,c=0,h;return m;function m(j){return l.enter("gfmFootnoteDefinition")._container=!0,l.enter("gfmFootnoteDefinitionLabel"),l.enter("gfmFootnoteDefinitionLabelMarker"),l.consume(j),l.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(j){return j===94?(l.enter("gfmFootnoteDefinitionMarker"),l.consume(j),l.exit("gfmFootnoteDefinitionMarker"),l.enter("gfmFootnoteDefinitionLabelString"),l.enter("chunkString").contentType="string",b):i(j)}function b(j){if(c>999||j===93&&!h||j===null||j===91||Xe(j))return i(j);if(j===93){l.exit("chunkString");const q=l.exit("gfmFootnoteDefinitionLabelString");return d=an(u.sliceSerialize(q)),l.enter("gfmFootnoteDefinitionLabelMarker"),l.consume(j),l.exit("gfmFootnoteDefinitionLabelMarker"),l.exit("gfmFootnoteDefinitionLabel"),v}return Xe(j)||(h=!0),c++,l.consume(j),j===92?y:b}function y(j){return j===91||j===92||j===93?(l.consume(j),c++,b):b(j)}function v(j){return j===58?(l.enter("definitionMarker"),l.consume(j),l.exit("definitionMarker"),f.includes(d)||f.push(d),Ne(l,k,"gfmFootnoteDefinitionWhitespace")):i(j)}function k(j){return r(j)}}function L4(l,r,i){return l.check(Ni,r,l.attempt(A4,r,i))}function R4(l){l.exit("gfmFootnoteDefinition")}function B4(l,r,i){const u=this;return Ne(l,f,"gfmFootnoteDefinitionIndent",5);function f(d){const c=u.events[u.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?r(d):i(d)}}function U4(l){let i=(l||{}).singleTilde;const u={name:"strikethrough",tokenize:d,resolveAll:f};return i==null&&(i=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function f(c,h){let m=-1;for(;++m<c.length;)if(c[m][0]==="enter"&&c[m][1].type==="strikethroughSequenceTemporary"&&c[m][1]._close){let p=m;for(;p--;)if(c[p][0]==="exit"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._open&&c[m][1].end.offset-c[m][1].start.offset===c[p][1].end.offset-c[p][1].start.offset){c[m][1].type="strikethroughSequence",c[p][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},c[p][1].start),end:Object.assign({},c[m][1].end)},y={type:"strikethroughText",start:Object.assign({},c[p][1].end),end:Object.assign({},c[m][1].start)},v=[["enter",b,h],["enter",c[p][1],h],["exit",c[p][1],h],["enter",y,h]],k=h.parser.constructs.insideSpan.null;k&&Yt(v,v.length,0,cu(k,c.slice(p+1,m),h)),Yt(v,v.length,0,[["exit",y,h],["enter",c[m][1],h],["exit",c[m][1],h],["exit",b,h]]),Yt(c,p-1,m-p+3,v),m=p+v.length-2;break}}for(m=-1;++m<c.length;)c[m][1].type==="strikethroughSequenceTemporary"&&(c[m][1].type="data");return c}function d(c,h,m){const p=this.previous,b=this.events;let y=0;return v;function v(j){return p===126&&b[b.length-1][1].type!=="characterEscape"?m(j):(c.enter("strikethroughSequenceTemporary"),k(j))}function k(j){const q=Sa(p);if(j===126)return y>1?m(j):(c.consume(j),y++,k);if(y<2&&!i)return m(j);const X=c.exit("strikethroughSequenceTemporary"),D=Sa(j);return X._open=!D||D===2&&!!q,X._close=!q||q===2&&!!D,h(j)}}}class H4{constructor(){this.map=[]}add(r,i,u){q4(this,r,i,u)}consume(r){if(this.map.sort(function(d,c){return d[0]-c[0]}),this.map.length===0)return;let i=this.map.length;const u=[];for(;i>0;)i-=1,u.push(r.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),r.length=this.map[i][0];u.push(r.slice()),r.length=0;let f=u.pop();for(;f;){for(const d of f)r.push(d);f=u.pop()}this.map.length=0}}function q4(l,r,i,u){let f=0;if(!(i===0&&u.length===0)){for(;f<l.map.length;){if(l.map[f][0]===r){l.map[f][1]+=i,l.map[f][2].push(...u);return}f+=1}l.map.push([r,i,u])}}function Y4(l,r){let i=!1;const u=[];for(;r<l.length;){const f=l[r];if(i){if(f[0]==="enter")f[1].type==="tableContent"&&u.push(l[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(f[1].type==="tableContent"){if(l[r-1][1].type==="tableDelimiterMarker"){const d=u.length-1;u[d]=u[d]==="left"?"center":"right"}}else if(f[1].type==="tableDelimiterRow")break}else f[0]==="enter"&&f[1].type==="tableDelimiterRow"&&(i=!0);r+=1}return u}function G4(){return{flow:{null:{name:"table",tokenize:V4,resolveAll:I4}}}}function V4(l,r,i){const u=this;let f=0,d=0,c;return h;function h(U){let ne=u.events.length-1;for(;ne>-1;){const re=u.events[ne][1].type;if(re==="lineEnding"||re==="linePrefix")ne--;else break}const te=ne>-1?u.events[ne][1].type:null,Se=te==="tableHead"||te==="tableRow"?B:m;return Se===B&&u.parser.lazy[u.now().line]?i(U):Se(U)}function m(U){return l.enter("tableHead"),l.enter("tableRow"),p(U)}function p(U){return U===124||(c=!0,d+=1),b(U)}function b(U){return U===null?i(U):fe(U)?d>1?(d=0,u.interrupt=!0,l.exit("tableRow"),l.enter("lineEnding"),l.consume(U),l.exit("lineEnding"),k):i(U):Ce(U)?Ne(l,b,"whitespace")(U):(d+=1,c&&(c=!1,f+=1),U===124?(l.enter("tableCellDivider"),l.consume(U),l.exit("tableCellDivider"),c=!0,b):(l.enter("data"),y(U)))}function y(U){return U===null||U===124||Xe(U)?(l.exit("data"),b(U)):(l.consume(U),U===92?v:y)}function v(U){return U===92||U===124?(l.consume(U),y):y(U)}function k(U){return u.interrupt=!1,u.parser.lazy[u.now().line]?i(U):(l.enter("tableDelimiterRow"),c=!1,Ce(U)?Ne(l,j,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):j(U))}function j(U){return U===45||U===58?X(U):U===124?(c=!0,l.enter("tableCellDivider"),l.consume(U),l.exit("tableCellDivider"),q):ee(U)}function q(U){return Ce(U)?Ne(l,X,"whitespace")(U):X(U)}function X(U){return U===58?(d+=1,c=!0,l.enter("tableDelimiterMarker"),l.consume(U),l.exit("tableDelimiterMarker"),D):U===45?(d+=1,D(U)):U===null||fe(U)?W(U):ee(U)}function D(U){return U===45?(l.enter("tableDelimiterFiller"),L(U)):ee(U)}function L(U){return U===45?(l.consume(U),L):U===58?(c=!0,l.exit("tableDelimiterFiller"),l.enter("tableDelimiterMarker"),l.consume(U),l.exit("tableDelimiterMarker"),M):(l.exit("tableDelimiterFiller"),M(U))}function M(U){return Ce(U)?Ne(l,W,"whitespace")(U):W(U)}function W(U){return U===124?j(U):U===null||fe(U)?!c||f!==d?ee(U):(l.exit("tableDelimiterRow"),l.exit("tableHead"),r(U)):ee(U)}function ee(U){return i(U)}function B(U){return l.enter("tableRow"),F(U)}function F(U){return U===124?(l.enter("tableCellDivider"),l.consume(U),l.exit("tableCellDivider"),F):U===null||fe(U)?(l.exit("tableRow"),r(U)):Ce(U)?Ne(l,F,"whitespace")(U):(l.enter("data"),se(U))}function se(U){return U===null||U===124||Xe(U)?(l.exit("data"),F(U)):(l.consume(U),U===92?pe:se)}function pe(U){return U===92||U===124?(l.consume(U),se):se(U)}}function I4(l,r){let i=-1,u=!0,f=0,d=[0,0,0,0],c=[0,0,0,0],h=!1,m=0,p,b,y;const v=new H4;for(;++i<l.length;){const k=l[i],j=k[1];k[0]==="enter"?j.type==="tableHead"?(h=!1,m!==0&&(Nm(v,r,m,p,b),b=void 0,m=0),p={type:"table",start:Object.assign({},j.start),end:Object.assign({},j.end)},v.add(i,0,[["enter",p,r]])):j.type==="tableRow"||j.type==="tableDelimiterRow"?(u=!0,y=void 0,d=[0,0,0,0],c=[0,i+1,0,0],h&&(h=!1,b={type:"tableBody",start:Object.assign({},j.start),end:Object.assign({},j.end)},v.add(i,0,[["enter",b,r]])),f=j.type==="tableDelimiterRow"?2:b?3:1):f&&(j.type==="data"||j.type==="tableDelimiterMarker"||j.type==="tableDelimiterFiller")?(u=!1,c[2]===0&&(d[1]!==0&&(c[0]=c[1],y=tu(v,r,d,f,void 0,y),d=[0,0,0,0]),c[2]=i)):j.type==="tableCellDivider"&&(u?u=!1:(d[1]!==0&&(c[0]=c[1],y=tu(v,r,d,f,void 0,y)),d=c,c=[d[1],i,0,0])):j.type==="tableHead"?(h=!0,m=i):j.type==="tableRow"||j.type==="tableDelimiterRow"?(m=i,d[1]!==0?(c[0]=c[1],y=tu(v,r,d,f,i,y)):c[1]!==0&&(y=tu(v,r,c,f,i,y)),f=0):f&&(j.type==="data"||j.type==="tableDelimiterMarker"||j.type==="tableDelimiterFiller")&&(c[3]=i)}for(m!==0&&Nm(v,r,m,p,b),v.consume(r.events),i=-1;++i<r.events.length;){const k=r.events[i];k[0]==="enter"&&k[1].type==="table"&&(k[1]._align=Y4(r.events,i))}return l}function tu(l,r,i,u,f,d){const c=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",h="tableContent";i[0]!==0&&(d.end=Object.assign({},ya(r.events,i[0])),l.add(i[0],0,[["exit",d,r]]));const m=ya(r.events,i[1]);if(d={type:c,start:Object.assign({},m),end:Object.assign({},m)},l.add(i[1],0,[["enter",d,r]]),i[2]!==0){const p=ya(r.events,i[2]),b=ya(r.events,i[3]),y={type:h,start:Object.assign({},p),end:Object.assign({},b)};if(l.add(i[2],0,[["enter",y,r]]),u!==2){const v=r.events[i[2]],k=r.events[i[3]];if(v[1].end=Object.assign({},k[1].end),v[1].type="chunkText",v[1].contentType="text",i[3]>i[2]+1){const j=i[2]+1,q=i[3]-i[2]-1;l.add(j,q,[])}}l.add(i[3]+1,0,[["exit",y,r]])}return f!==void 0&&(d.end=Object.assign({},ya(r.events,f)),l.add(f,0,[["exit",d,r]]),d=void 0),d}function Nm(l,r,i,u,f){const d=[],c=ya(r.events,i);f&&(f.end=Object.assign({},c),d.push(["exit",f,r])),u.end=Object.assign({},c),d.push(["exit",u,r]),l.add(i+1,0,d)}function ya(l,r){const i=l[r],u=i[0]==="enter"?"start":"end";return i[1][u]}const X4={name:"tasklistCheck",tokenize:Z4};function Q4(){return{text:{91:X4}}}function Z4(l,r,i){const u=this;return f;function f(m){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?i(m):(l.enter("taskListCheck"),l.enter("taskListCheckMarker"),l.consume(m),l.exit("taskListCheckMarker"),d)}function d(m){return Xe(m)?(l.enter("taskListCheckValueUnchecked"),l.consume(m),l.exit("taskListCheckValueUnchecked"),c):m===88||m===120?(l.enter("taskListCheckValueChecked"),l.consume(m),l.exit("taskListCheckValueChecked"),c):i(m)}function c(m){return m===93?(l.enter("taskListCheckMarker"),l.consume(m),l.exit("taskListCheckMarker"),l.exit("taskListCheck"),h):i(m)}function h(m){return fe(m)?r(m):Ce(m)?l.check({tokenize:F4},r,i)(m):i(m)}}function F4(l,r,i){return Ne(l,u,"whitespace");function u(f){return f===null?i(f):r(f)}}function K4(l){return $m([v4(),N4(),U4(l),G4(),Q4()])}const J4={};function $4(l){const r=this,i=l||J4,u=r.data(),f=u.micromarkExtensions||(u.micromarkExtensions=[]),d=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),c=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);f.push(K4(i)),d.push(g4()),c.push(x4(i))}const Yg="https://openrouter-backend.huytruong.workers.dev/v1/portfolio/chat",Mm="truong-1234567890",W4=/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(Yg);function P4(l){if(!l||typeof l!="object")return"Sorry, I couldn't get a response right now.";const r=l;return r.reply??r.message??r.answer??r.data?.reply??r.choices?.[0]?.message?.content??"Sorry, I couldn't get a response right now."}function e3(){const[l,r]=ge.useState(!1),[i,u]=ge.useState(!1),[f,d]=ge.useState(!1),[c,h]=ge.useState([]),[m,p]=ge.useState(""),[b,y]=ge.useState(!1),[v,k]=ge.useState(null),[j,q]=ge.useState(""),X=ge.useRef(null),D=ge.useRef(null);ge.useEffect(()=>{if(v===null)return;if(j.length>=v.length){k(null);return}const M=Math.max(1,Math.floor(v.length/120)),W=setTimeout(()=>{q(v.slice(0,j.length+M))},16);return()=>clearTimeout(W)},[v,j]),ge.useEffect(()=>{l&&setTimeout(()=>{X.current?.scrollIntoView({behavior:"smooth"}),D.current?.focus()},50)},[c,l]),ge.useEffect(()=>{const M=window.setTimeout(()=>{d(!0)},5e3);return()=>{window.clearTimeout(M)}},[]);const L=async()=>{const M=m.trim();if(!M||b)return;const W=[...c,{role:"user",text:M}];h(W),p(""),y(!0);try{const ee=await fetch(Yg,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Mm},body:JSON.stringify({question:M})}),B=await ee.json();if(!ee.ok||B?.error){const se=B?.error?.message??`HTTP ${ee.status}`;h(pe=>[...pe,{role:"model",text:`API error: ${se}`}]);return}const F=P4(B);h(se=>[...se,{role:"model",text:F}]),q(""),k(F)}catch(ee){const B=typeof window<"u"&&!["localhost","127.0.0.1"].includes(window.location.hostname),F=W4&&B?"Chat server is set to localhost, so it only works on your machine. Deploy the proxy to a public URL and update VITE_CHAT_PROXY_URL before publishing.":`Connection error: ${ee instanceof Error?ee.message:String(ee)}`;h(se=>[...se,{role:"model",text:F}])}finally{y(!1)}};return g.jsxs(g.Fragment,{children:[l?g.jsxs("div",{className:`chatbotWindow${i?" isFullscreen":""}`,children:[g.jsxs("div",{className:"chatbotHeader",children:[g.jsx("span",{className:"chatbotTitle",children:"Miko • AI assistant"}),g.jsxs("div",{className:"chatbotHeaderActions",children:[g.jsx("button",{className:"chatbotControl",onClick:()=>u(M=>!M),"aria-label":i?"Exit full screen":"Open full screen",title:i?"Exit full screen":"Open full screen",children:i?g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("polyline",{points:"9 3 3 3 3 9"}),g.jsx("line",{x1:"3",y1:"3",x2:"10",y2:"10"}),g.jsx("polyline",{points:"15 21 21 21 21 15"}),g.jsx("line",{x1:"14",y1:"14",x2:"21",y2:"21"})]}):g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("polyline",{points:"15 3 21 3 21 9"}),g.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),g.jsx("polyline",{points:"9 21 3 21 3 15"}),g.jsx("line",{x1:"10",y1:"14",x2:"3",y2:"21"})]})}),g.jsx("button",{className:"chatbotClose",onClick:()=>{r(!1),u(!1)},"aria-label":"Close chat",title:"Close",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),g.jsxs("div",{className:"chatbotMessages",children:[c.length===0?g.jsx("p",{className:"chatbotEmpty",children:"Ask me anything about Truong — projects, skills, career..."}):null,c.map((M,W)=>{const B=v!==null&&W===c.length-1&&M.role==="model"?j:M.text;return g.jsx("div",{className:`chatbotMsg chatbotMsg--${M.role}`,children:M.role==="model"?g.jsx(U2,{remarkPlugins:[$4],components:{a:({...F})=>g.jsx("a",{...F,target:"_blank",rel:"noreferrer"})},children:B}):g.jsx("p",{children:M.text})},W)}),b?g.jsx("div",{className:"chatbotMsg chatbotMsg--model",children:g.jsxs("span",{className:"chatbotTyping",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})}):null,g.jsx("div",{ref:X})]}),g.jsxs("div",{className:"chatbotInputRow",children:[g.jsx("input",{ref:D,className:"chatbotInput",value:m,onChange:M=>p(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),L())},placeholder:"Ask a question...",disabled:b||v!==null,autoComplete:"off"}),g.jsx("button",{className:"chatbotSend",onClick:L,disabled:b||v!==null||!m.trim(),"aria-label":"Send",children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),g.jsx("polyline",{points:"5 12 12 5 19 12"})]})})]})]}):null,!l&&f?g.jsxs("div",{className:"chatbotTooltip",role:"status","aria-live":"polite",children:[g.jsx("div",{className:"chatbotTooltipTitle",children:"Hi, I am Miko"}),g.jsx("p",{children:"AI assistant for Truong, ask me anything..."}),g.jsx("button",{type:"button",className:"chatbotTooltipClose","aria-label":"Dismiss intro",onClick:()=>d(!1),children:g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}):null,g.jsx("button",{className:`chatbotFab${l?" chatbotFab--open":""}`,onClick:()=>{d(!1),r(M=>!M),l&&u(!1)},"aria-label":l?"Close chat":"Chat with AI",children:l?g.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):g.jsx("span",{className:"chatbotMascot","aria-hidden":"true",children:g.jsxs("svg",{className:"chatbotMascotBody",viewBox:"0 0 72 72",fill:"none",children:[g.jsxs("defs",{children:[g.jsxs("linearGradient",{id:"mikoHead",x1:"18",y1:"14",x2:"54",y2:"58",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{offset:"0",stopColor:"#7be9ff"}),g.jsx("stop",{offset:"1",stopColor:"#1f90ff"})]}),g.jsxs("linearGradient",{id:"mikoVisor",x1:"22",y1:"28",x2:"50",y2:"40",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{offset:"0",stopColor:"#0f2b5f"}),g.jsx("stop",{offset:"1",stopColor:"#163a7a"})]})]}),g.jsx("line",{x1:"36",y1:"8",x2:"36",y2:"14",stroke:"#9feeff",strokeWidth:"3",strokeLinecap:"round"}),g.jsx("circle",{cx:"36",cy:"7",r:"3",fill:"#b6f4ff"}),g.jsx("rect",{x:"17",y:"14",width:"38",height:"40",rx:"14",fill:"url(#mikoHead)"}),g.jsx("rect",{x:"22",y:"27",width:"28",height:"14",rx:"7",fill:"url(#mikoVisor)"}),g.jsx("circle",{cx:"30",cy:"34",r:"3.2",fill:"#8ef3ff"}),g.jsx("circle",{cx:"42",cy:"34",r:"3.2",fill:"#8ef3ff"}),g.jsx("rect",{x:"30",y:"44",width:"12",height:"3",rx:"1.5",fill:"#e3fbff",fillOpacity:"0.92"}),g.jsx("rect",{x:"11",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"}),g.jsx("rect",{x:"54",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"})]})})})]})}function Dm(){const l=window.location.hash||"#/";return l.startsWith("#/cv")?"cv":l.startsWith("#/career")?"career":"home"}function t3(){const[l,r]=ge.useState(Dm());return ge.useEffect(()=>{const i=()=>r(Dm());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),l}function Gg(l){window.location.hash!==l&&(window.location.hash=l)}function Vg(){return g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function n3(){return g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function dc(){return g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function _m(){return g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("circle",{cx:"12",cy:"12",r:"9"}),g.jsx("path",{d:"M3 12h18"}),g.jsx("path",{d:"M12 3a15 15 0 0 1 0 18"}),g.jsx("path",{d:"M12 3a15 15 0 0 0 0 18"})]})}function l3(){return g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("path",{d:"M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"}),g.jsx("circle",{cx:"12",cy:"11",r:"2.3"})]})}function a3(){return g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:g.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.8.62 2.66a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.66.62A2 2 0 0 1 22 16.92Z"})})}function i3(){return g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("path",{d:"M7 10h10a4 4 0 0 1 3.88 4.97l-.63 2.5A2 2 0 0 1 18.3 19H17a2 2 0 0 1-1.6-.8l-1.1-1.47a3 3 0 0 0-4.8 0L8.4 18.2A2 2 0 0 1 6.8 19H5.7a2 2 0 0 1-1.94-1.53l-.63-2.5A4 4 0 0 1 7 10Z"}),g.jsx("path",{d:"M8 13v4"}),g.jsx("path",{d:"M6 15h4"}),g.jsx("circle",{cx:"16.5",cy:"14.5",r:".8",fill:"currentColor",stroke:"none"}),g.jsx("circle",{cx:"18.5",cy:"16.5",r:".8",fill:"currentColor",stroke:"none"})]})}function r3(){return g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function u3(){return g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:g.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function Ig(){return g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:[g.jsx("path",{d:"M3 21h18"}),g.jsx("path",{d:"M5 21V7.5A1.5 1.5 0 0 1 6.5 6H10v15"}),g.jsx("path",{d:"M10 21V4.5A1.5 1.5 0 0 1 11.5 3h6A1.5 1.5 0 0 1 19 4.5V21"}),g.jsx("path",{d:"M7.5 9.5h.01M7.5 12.5h.01M7.5 15.5h.01M13.5 6.5h.01M16.5 6.5h.01M13.5 9.5h.01M16.5 9.5h.01M13.5 12.5h.01M16.5 12.5h.01"})]})}function Xg(){return g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("path",{d:"m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"}),g.jsx("path",{d:"M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"})]})}function Qg(){return g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("path",{d:"m3 8.5 9-4.5 9 4.5-9 4.5-9-4.5Z"}),g.jsx("path",{d:"M6.5 10.8V15c0 1.5 2.4 3 5.5 3s5.5-1.5 5.5-3v-4.2"})]})}function Zg(){return g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("path",{d:"M8 3h8l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"}),g.jsx("path",{d:"M16 3v5h5"}),g.jsx("path",{d:"M9.5 14h5"}),g.jsx("path",{d:"M9.5 17h4"})]})}function Fg(){return g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[g.jsx("path",{d:"M8 4h8v3a4 4 0 0 1-8 0V4Z"}),g.jsx("path",{d:"M10 15h4"}),g.jsx("path",{d:"M12 11v4"}),g.jsx("path",{d:"M8 19h8"}),g.jsx("path",{d:"M16 6h2a2 2 0 0 1 0 4h-2"}),g.jsx("path",{d:"M8 6H6a2 2 0 0 0 0 4h2"})]})}function o3(){return g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:[g.jsx("circle",{cx:"12",cy:"12",r:"1.6",fill:"currentColor",stroke:"none"}),g.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2"}),g.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(60 12 12)"}),g.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(120 12 12)"})]})}function s3(){return g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),g.jsx("path",{d:"M9.2 9h6.1v1.8h-2.1V17h-1.9v-6.2H9.2V9Zm9.8.2v1.8c-.7-.4-1.3-.5-1.8-.5-.4 0-.8.1-1 .2-.2.1-.3.3-.3.5 0 .1.1.3.2.4.1.1.4.2.8.3l.6.1c.9.2 1.6.5 2 .9.4.4.6.9.6 1.6 0 .9-.3 1.6-1 2.1-.7.5-1.6.7-2.8.7-.5 0-1 0-1.5-.1-.5-.1-1-.2-1.6-.4v-1.9c.6.3 1.1.5 1.6.7.5.1 1 .2 1.5.2.5 0 .9-.1 1.1-.2.3-.1.4-.3.4-.6 0-.2-.1-.3-.2-.5-.1-.1-.4-.2-.9-.3l-.5-.1c-.8-.2-1.4-.5-1.8-.8-.4-.4-.6-.9-.6-1.6 0-.8.3-1.5.9-1.9.6-.5 1.5-.7 2.6-.7.4 0 .8 0 1.3.1.4.1.9.2 1.4.3Z",fill:"#fff"})]})}function c3(){return g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("path",{d:"M22 5 13.2 20.5a1.4 1.4 0 0 1-2.4 0L2 5.1a.8.8 0 0 1 .9-1.2l8.9 1.6c.1 0 .3 0 .4 0l8.9-1.6A.8.8 0 0 1 22 5Z",fill:"url(#vite-grad-a)"}),g.jsx("path",{d:"m16.6 2.2-4.8.9a.4.4 0 0 0-.3.3l-.3 2.5c0 .2.1.4.3.4l1.3.2c.2 0 .3.2.3.4l-.8 5.6c0 .4.5.6.8.3l.2-.3 4.3-8.7c.2-.3-.1-.7-.5-.6Z",fill:"url(#vite-grad-b)"}),g.jsxs("defs",{children:[g.jsxs("linearGradient",{id:"vite-grad-a",x1:"2",y1:"4",x2:"18",y2:"20",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#41D1FF"}),g.jsx("stop",{offset:"1",stopColor:"#BD34FE"})]}),g.jsxs("linearGradient",{id:"vite-grad-b",x1:"11",y1:"2",x2:"16",y2:"13",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#FFEA83"}),g.jsx("stop",{offset:".5",stopColor:"#FFDD35"}),g.jsx("stop",{offset:"1",stopColor:"#FFA800"})]})]})]})}function Dc(){return g.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[g.jsx("span",{className:"sceneSkyTint"}),g.jsx("span",{className:"sceneSun"}),g.jsx("span",{className:"sceneRidge ridgeFar"}),g.jsx("span",{className:"sceneRidge ridgeNear"}),g.jsx("span",{className:"scenePine pine1"}),g.jsx("span",{className:"scenePine pine2"}),g.jsx("span",{className:"scenePine pine3"}),g.jsx("span",{className:"sceneCloud cloudA"}),g.jsx("span",{className:"sceneCloud cloudB"}),g.jsx("span",{className:"sceneDust dust1"}),g.jsx("span",{className:"sceneDust dust2"}),g.jsx("span",{className:"sceneDust dust3"}),g.jsx("span",{className:"sceneDust dust4"}),g.jsx("span",{className:"sceneDust dust5"}),g.jsx("span",{className:"sceneLeaf leaf1"}),g.jsx("span",{className:"sceneLeaf leaf2"}),g.jsx("span",{className:"sceneLeaf leaf3"}),g.jsx("span",{className:"sceneLeaf leaf4"}),g.jsx("span",{className:"sceneLeaf leaf5"}),g.jsx("span",{className:"sceneLeaf leaf6"}),g.jsx("span",{className:"sceneWind wind1"}),g.jsx("span",{className:"sceneWind wind2"}),g.jsx("span",{className:"sceneWind wind3"})]})}function _c({theme:l,onToggle:r}){const i=l==="dark";return g.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:r,"aria-label":i?"Switch to light theme":"Switch to dark theme",title:i?"Light mode":"Dark mode",children:i?g.jsx(r3,{}):g.jsx(u3,{})})}const Ps=[{code:"en",label:"English",flag:"🇺🇸"},{code:"ja",label:"日本語",flag:"🇯🇵"},{code:"vi",label:"Tiếng Việt",flag:"🇻🇳"}],f3={en:{nav:{about:"About Me",projects:"Projects",career:"Career",resume:"Résumé"},intro:{greeting:"Hi, I'm",body:"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world."},career:{now:"Now",start:"Start",education:"Education",certificates:"Certificates",awards:"Awards"},project:{downloadPlay:"Download / Play",github:"GitHub"},cv:{back:"← Back",title:"Résumé",openTab:"Open in new tab",loading:"Loading CV...",loadError:"Unable to load CV data."},footer:{quote:'"Every small step shapes something great"'}},ja:{nav:{about:"自己紹介",projects:"プロジェクト",career:"キャリア",resume:"履歴書"},intro:{greeting:"こんにちは、",body:"オンラインマルチプレイヤーゲームの開発を行いながら、自らもアクティブなプレイヤーとして活動しています。プレイヤーとしての視点が、ゲームプレイや全体的な体験への考え方を形づくっています。素晴らしいゲームは一人では作れないと知っており、情熱あるチームで貢献し、共に成長できる環境を求めています。世界中のプレイヤーに意味ある体験を届けることが目標です。"},career:{now:"現在",start:"始まり",education:"学歴",certificates:"資格・認定",awards:"受賞・実績"},project:{downloadPlay:"ダウンロード / プレイ",github:"GitHub"},cv:{back:"← 戻る",title:"履歴書",openTab:"新しいタブで開く",loading:"CVを読み込み中...",loadError:"CVデータを読み込めませんでした。"},footer:{quote:"「一歩一歩が偉大なものを形づくる」"}},vi:{nav:{about:"Giới Thiệu",projects:"Dự Án",career:"Sự Nghiệp",resume:"Hồ Sơ"},intro:{greeting:"Xin chào, tôi là",body:"Tôi phát triển game nhiều người chơi trực tuyến và bản thân cũng là một game thủ tích cực. Góc nhìn người chơi ảnh hưởng đến cách tôi nghĩ về gameplay và trải nghiệm tổng thể. Tôi hiểu rằng những game hay không thể tạo ra một mình, và tôi muốn làm việc với một đội ngũ đam mê để cùng đóng góp và phát triển. Mục tiêu của tôi là tạo ra những trải nghiệm có ý nghĩa cho người chơi trên toàn thế giới."},career:{now:"Hiện Tại",start:"Bắt Đầu",education:"Học Vấn",certificates:"Chứng Chỉ",awards:"Giải Thưởng"},project:{downloadPlay:"Tải Xuống / Chơi",github:"GitHub"},cv:{back:"← Quay Lại",title:"Hồ Sơ",openTab:"Mở Tab Mới",loading:"Đang tải CV...",loadError:"Không thể tải dữ liệu CV."},footer:{quote:'"Mỗi bước nhỏ đều tạo nên điều vĩ đại"'}}};function d3(){const l=localStorage.getItem("language");if(l&&(l==="en"||l==="ja"||l==="vi"))return l;const r=navigator.language.toLowerCase();return r.startsWith("ja")?"ja":r.startsWith("vi")?"vi":"en"}function Kg(l){return f3[l]}const Jg=ge.createContext({lang:"en",setLang:()=>{},tr:Kg("en")});function Di(){return ge.useContext(Jg)}function Om({code:l}){return l==="en"?g.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[g.jsx("defs",{children:g.jsx("clipPath",{id:"flagCircleEn",children:g.jsx("circle",{cx:"10",cy:"10",r:"10"})})}),g.jsxs("g",{clipPath:"url(#flagCircleEn)",children:[g.jsx("rect",{width:"20",height:"20",fill:"#b22234"}),g.jsx("rect",{y:"2",width:"20",height:"2",fill:"#fff"}),g.jsx("rect",{y:"6",width:"20",height:"2",fill:"#fff"}),g.jsx("rect",{y:"10",width:"20",height:"2",fill:"#fff"}),g.jsx("rect",{y:"14",width:"20",height:"2",fill:"#fff"}),g.jsx("rect",{y:"18",width:"20",height:"2",fill:"#fff"}),g.jsx("rect",{width:"9",height:"9",fill:"#3c3b6e"})]})]}):l==="ja"?g.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[g.jsx("circle",{cx:"10",cy:"10",r:"9.6",fill:"#fff",stroke:"rgba(16,24,40,0.12)",strokeWidth:"0.8"}),g.jsx("circle",{cx:"10",cy:"10",r:"4.3",fill:"#bc002d"})]}):g.jsxs("svg",{className:"langFlag",viewBox:"0 0 20 20","aria-hidden":"true",children:[g.jsx("defs",{children:g.jsx("clipPath",{id:"flagCircleVi",children:g.jsx("circle",{cx:"10",cy:"10",r:"10"})})}),g.jsxs("g",{clipPath:"url(#flagCircleVi)",children:[g.jsx("rect",{width:"20",height:"20",fill:"#da251d"}),g.jsx("path",{d:"M10 5.1L11.2 8.1H14.4L11.8 10.1L12.8 13.1L10 11.3L7.2 13.1L8.2 10.1L5.6 8.1H8.8L10 5.1Z",fill:"#ffde00"})]})]})}function p3(){return g.jsx("svg",{className:"langChevron",viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M2 3.5L5 6.5L8 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function h3(){return g.jsx("svg",{className:"langOptionCheck",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function Oc(){const{lang:l,setLang:r}=Di(),[i,u]=ge.useState(!1),f=ge.useRef(null),d=Ps.find(c=>c.code===l)??Ps[0];return ge.useEffect(()=>{if(!i)return;const c=h=>{f.current&&!f.current.contains(h.target)&&u(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[i]),g.jsxs("div",{className:"langSwitcher",ref:f,children:[g.jsxs("button",{type:"button",className:"langSwitcherBtn",onClick:()=>u(c=>!c),"aria-haspopup":"listbox","aria-expanded":i,"aria-label":`Language: ${d.label}`,title:d.label,children:[g.jsx(Om,{code:d.code}),g.jsx("span",{className:"langCode",children:d.code}),g.jsx(p3,{})]}),i&&g.jsx("div",{className:"langDropdown",role:"listbox","aria-label":"Select language",children:Ps.map(c=>g.jsxs("button",{type:"button",role:"option","aria-selected":c.code===l,className:`langOption${c.code===l?" active":""}`,onClick:()=>{r(c.code),u(!1)},children:[g.jsx(Om,{code:c.code}),g.jsx("span",{className:"langLabel",children:c.label}),c.code===l&&g.jsx(h3,{})]},c.code))})]})}const m3="/my-portfolio/",va=l=>`${m3}${l.replace(/^\/+/,"")}`,$g=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Onesoft - Monster Studio",location:"Ha Noi, Viet Nam",logo:va("/company/onesoft.png"),summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Monkey Junior",location:"Ha Noi, Viet Nam",logo:va("/company/monkeyjunior.png"),summary:"Continued game development experience with Unity, focusing on gameplay systems, performance, and user experience.",highlights:["Developed puzzle game features and gameplay mechanics using Unity.","Optimized game performance, responsiveness, and user experience.","Participated in the full development cycle from feature design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",location:"Ha Noi, Viet Nam",logo:va("/company/vng.png"),summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay, UI, and online systems for large-scale titles.","Developed metagame features, including events, shop flows, and payment-related features.","Collaborated with artists, designers, PMs, and engineers to brainstorm, develop, and deliver game features.","Integrated third-party services such as Firebase, CDN, SDKs, and log tracking tools.","Debugged production issues, fixed bugs, refactored code, and built tools to support live game operations.","Analyzed player behavior to improve gameplay, UI, and overall player experience.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"VIET NAM DIGITAL TECHNOLOGY AND INVESTMENT JOINT STOCK COMPANY",location:"Ha Noi, Viet Nam",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Built scalable backend and data platforms providing shared services for multiple teams.","Designed and operated reliable distributed systems with FastAPI, PostgreSQL, Docker, and Kubernetes.","Developed large-scale ETL workflows and Airflow-based data pipelines.","Improved delivery efficiency through CI/CD, automation, and production workflow optimization.","Mentored engineers and led backend/platform development from design to production."]},{period:"Nov 2025 - Present",title:"Self Development",org:"Independent Learning & Project Building",location:"Ha Noi, Viet Nam",summary:"Focused on personal growth through building projects, deepening Unreal Engine 5 skills, improving English communication, and sharpening system thinking.",highlights:["Built personal game projects to practice end-to-end architecture and execution.","Improved Unreal Engine 5 proficiency through regular prototyping and technical experimentation.","Researched AI tools and applied them to optimize workflows and automate repetitive tasks.","Improved English communication for technical discussions and documentation.","Strengthened system thinking by designing scalable gameplay and backend flows."]}],Wg=[{school:"University of Engineering and Technology (VNU)",degree:"Bachelor",area:"Software Engineering",period:"Aug 2018 - Dec 2023",location:"Ha Noi, Viet Nam",logo:va("/uet.png")}],Pg=[{title:"IELTS 7.5",issuer:"British Council",date:"2025",logo:va("/britsh-council.png")}],e1=[{title:"Third Prize Chess Province",location:"Nghe An, Viet Nam",date:"2018",logo:va("/chess.png")}];function g3({theme:l,onToggleTheme:r}){const{tr:i}=Di(),u=[...$g].reverse(),f=ge.useRef(null);ge.useEffect(()=>{const c=f.current;if(!c)return;const h=c.querySelectorAll(".careerItem"),m=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&(b.target.classList.add("careerItemVisible"),m.unobserve(b.target))})},{threshold:.12});return h.forEach(p=>m.observe(p)),()=>m.disconnect()},[]);const d=c=>c.logo?g.jsx("img",{src:c.logo,alt:c.org,className:"careerLogo"}):c.title==="Self Development"?g.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:g.jsx(Xg,{})}):g.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:g.jsx(Ig,{})});return g.jsxs("div",{className:"careerPage",children:[g.jsxs("header",{className:"topbar",children:[g.jsx(Dc,{}),g.jsxs("div",{className:"container topbarInner",children:[g.jsx("button",{className:"btn",onClick:()=>Gg("#/"),type:"button",children:i.cv.back}),g.jsx("div",{className:"brand",children:g.jsx("span",{children:i.nav.career})}),g.jsxs("div",{className:"rightActions",children:[g.jsx(Oc,{}),g.jsx(_c,{theme:l,onToggle:r})]})]})]}),g.jsxs("main",{className:"container careerMain",children:[g.jsxs("section",{className:"careerIntro",children:[g.jsx("h1",{className:"h3 careerTitle",children:"Career Journey"}),g.jsx("p",{className:"summary careerSummary",children:"A bottom-to-top flow of my path: where I started, how long I worked in each phase, and what I built along the way."})]}),g.jsxs("section",{className:"careerTimeline",ref:f,"aria-label":"Career timeline",children:[g.jsx("span",{className:"careerFlowLabel top",children:i.career.now}),g.jsx("span",{className:"careerFlowLabel bottom",children:i.career.start}),g.jsx("span",{className:"careerLine","aria-hidden":"true"}),u.map((c,h)=>g.jsxs("div",{className:"careerItem",style:{"--delay":`${h*100}ms`},children:[g.jsxs("div",{className:"careerDateWrap",children:[g.jsx("div",{className:"careerDate",children:c.period}),g.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),g.jsxs("article",{className:"careerCard",children:[d(c),g.jsx("h2",{className:"h3 careerRole",children:c.title}),g.jsx("p",{className:"careerOrg",children:c.org}),c.location?g.jsx("p",{className:"careerLocation",children:c.location}):null,g.jsx("p",{className:"careerCardSummary",children:c.summary}),g.jsx("ul",{className:"careerHighlights",children:c.highlights.map(m=>g.jsx("li",{children:m},m))})]})]},c.period))]}),g.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[g.jsxs("article",{className:"careerExtraCard",children:[g.jsxs("h3",{className:"h3 careerExtraTitle",children:[g.jsx(Qg,{}),i.career.education]}),g.jsx("ul",{className:"careerExtraList",children:Wg.map(c=>g.jsx("li",{className:"careerExtraItem",children:g.jsxs("div",{className:"careerExtraRow",children:[c.logo?g.jsx("img",{src:c.logo,alt:c.school,className:"careerExtraLogo"}):null,g.jsxs("div",{className:"careerExtraBody",children:[g.jsxs("div",{className:"careerExtraHead",children:[g.jsxs("p",{className:"careerExtraMain",children:[c.degree,c.area?` in ${c.area}`:""]}),g.jsx("span",{className:"careerExtraDate",children:c.period})]}),g.jsx("p",{className:"careerExtraSub",children:c.school}),c.location?g.jsx("p",{className:"careerExtraMeta",children:c.location}):null]})]})},`${c.school}-${c.period}`))})]}),g.jsxs("article",{className:"careerExtraCard",children:[g.jsxs("h3",{className:"h3 careerExtraTitle",children:[g.jsx(Zg,{}),i.career.certificates]}),g.jsx("ul",{className:"careerExtraList",children:Pg.map(c=>g.jsx("li",{className:"careerExtraItem",children:g.jsxs("div",{className:"careerExtraRow",children:[c.logo?g.jsx("img",{src:c.logo,alt:c.issuer,className:"careerExtraLogo"}):null,g.jsxs("div",{className:"careerExtraBody",children:[g.jsxs("div",{className:"careerExtraHead",children:[g.jsx("p",{className:"careerExtraMain",children:c.title}),g.jsx("span",{className:"careerExtraDate",children:c.date})]}),g.jsx("p",{className:"careerExtraSub",children:c.issuer})]})]})},`${c.title}-${c.date}`))})]}),g.jsxs("article",{className:"careerExtraCard",children:[g.jsxs("h3",{className:"h3 careerExtraTitle",children:[g.jsx(Fg,{}),i.career.awards]}),g.jsx("ul",{className:"careerExtraList",children:e1.map(c=>g.jsx("li",{className:"careerExtraItem",children:g.jsxs("div",{className:"careerExtraRow",children:[c.logo?g.jsx("img",{src:c.logo,alt:c.title,className:"careerExtraLogo"}):null,g.jsxs("div",{className:"careerExtraBody",children:[g.jsxs("div",{className:"careerExtraHead",children:[g.jsx("p",{className:"careerExtraMain",children:c.title}),g.jsx("span",{className:"careerExtraDate",children:c.date})]}),c.location?g.jsx("p",{className:"careerExtraMeta",children:c.location}):null]})]})},`${c.title}-${c.date}`))})]})]})]})]})}function wi(l){return l.filter(r=>!r.hidden)}function nu({value:l}){return l?g.jsx("div",{className:"cvHtml",dangerouslySetInnerHTML:{__html:l}}):null}function Lm({field:l}){return l.id==="email"?g.jsx(Vg,{}):l.id==="phone"?g.jsx(a3,{}):l.id==="location"?g.jsx(l3,{}):l.id==="website"?g.jsx(_m,{}):l.icon==="github-logo"?g.jsx(dc,{}):l.icon==="game-controller"?g.jsx(i3,{}):g.jsx(_m,{})}function t1(){const{tr:l}=Di(),[r,i]=Ie.useState(null),[u,f]=Ie.useState(!1);if(Ie.useEffect(()=>{let v=!0;async function k(){try{f(!1);const j=await fetch("/my-portfolio/cv.json",{cache:"no-store"});if(!j.ok)throw new Error(`Failed to load cv.json: ${j.status}`);const q=await j.json();v&&i(q)}catch{v&&f(!0)}}return k(),()=>{v=!1}},[]),!r&&!u)return g.jsx("section",{className:"cvLoadCard",children:g.jsx("p",{children:l.cv.loading})});if(!r)return g.jsx("section",{className:"cvLoadCard cvLoadCard--error",children:g.jsx("p",{children:l.cv.loadError})});const d=r.customSections.find(v=>v.title.toLowerCase().includes("tech")&&!v.hidden),c=[r.basics.location?{id:"location",text:r.basics.location,link:"#resume-location"}:null,r.basics.email?{id:"email",text:r.basics.email,link:`mailto:${r.basics.email}`}:null,r.basics.phone?{id:"phone",text:r.basics.phone,link:`tel:${r.basics.phone}`}:null,r.basics.website?.url?{id:"website",text:r.basics.website.label||r.basics.website.url,link:r.basics.website.url}:null,...r.basics.customFields??[]].filter(v=>!!v),h=wi(r.sections.experience.items),m=wi(r.sections.projects.items),p=wi(r.sections.education.items),b=wi(r.sections.certifications.items),y=d?wi(d.items):[];return g.jsxs("article",{className:"cvPaper",children:[g.jsx("header",{className:"cvPaperHeader",children:g.jsxs("div",{className:"cvPaperHeaderMain",children:[g.jsx("h1",{className:"cvHeroName",children:r.basics.name}),g.jsx("p",{className:"cvHeroHeadline",children:r.basics.headline})]})}),c.length?g.jsx("div",{className:"cvPaperMeta",children:c.map(v=>v.id==="location"?g.jsxs("div",{className:"cvContactItem cvContactItem--static",children:[g.jsx("span",{className:"cvContactIcon",children:g.jsx(Lm,{field:v})}),g.jsx("span",{children:v.text})]},v.id):g.jsxs("a",{href:v.link,target:"_blank",rel:"noreferrer",className:"cvContactItem",children:[g.jsx("span",{className:"cvContactIcon",children:g.jsx(Lm,{field:v})}),g.jsx("span",{children:v.text})]},v.id))}):null,g.jsxs("div",{className:"cvPaperBody cvPaperBody--stacked",children:[r.summary.hidden?null:g.jsxs("section",{className:"cvMainSection",children:[g.jsx("h2",{className:"cvSectionHeading",children:r.summary.title}),g.jsx(nu,{value:r.summary.content})]}),!r.sections.experience.hidden&&h.length?g.jsxs("section",{className:"cvMainSection",children:[g.jsx("h2",{className:"cvSectionHeading",children:r.sections.experience.title}),g.jsx("div",{className:"cvList",children:h.map(v=>g.jsxs("article",{className:"cvItemCard",children:[v.company?g.jsx("p",{className:"cvItemCompany",children:v.company}):null,g.jsxs("div",{className:"cvItemTop",children:[g.jsx("h3",{children:v.position||v.company}),v.period?g.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),v.location?g.jsx("p",{className:"cvItemSub",children:v.location}):null,g.jsx(nu,{value:v.description})]},v.id))})]}):null,!r.sections.projects.hidden&&m.length?g.jsxs("section",{className:"cvMainSection",children:[g.jsx("h2",{className:"cvSectionHeading",children:r.sections.projects.title}),g.jsx("div",{className:"cvList",children:m.map(v=>g.jsxs("article",{className:"cvItemCard",children:[g.jsxs("div",{className:"cvItemTop",children:[g.jsx("h3",{children:v.name}),v.period?g.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),v.website?.url?g.jsx("a",{className:"cvItemLink",href:v.website.url,target:"_blank",rel:"noreferrer",children:v.website.label||v.website.url}):null,g.jsx(nu,{value:v.description})]},v.id))})]}):null,y.length?g.jsxs("section",{className:"cvMainSection",children:[g.jsx("h2",{className:"cvSectionHeading",children:d?.title}),g.jsx("div",{className:"cvList cvTechGrid",children:y.map(v=>g.jsxs("article",{className:"cvItemCard cvTechCard",children:[g.jsx("h3",{children:v.company}),g.jsx(nu,{value:v.description})]},v.id))})]}):null,!r.sections.education.hidden&&p.length?g.jsxs("section",{className:"cvMainSection",children:[g.jsx("h2",{className:"cvSectionHeading",children:r.sections.education.title}),g.jsx("div",{className:"cvList",children:p.map(v=>g.jsxs("article",{className:"cvItemCard",children:[g.jsxs("div",{className:"cvItemTop",children:[g.jsx("h3",{children:v.school}),v.period?g.jsx("span",{className:"cvItemPeriod",children:v.period}):null]}),g.jsxs("p",{className:"cvItemSub",children:[v.degree,v.area?` · ${v.area}`:""]})]},v.id))})]}):null,!r.sections.certifications.hidden&&b.length?g.jsxs("section",{className:"cvMainSection",children:[g.jsx("h2",{className:"cvSectionHeading",children:r.sections.certifications.title}),g.jsx("div",{className:"cvList",children:b.map(v=>g.jsxs("article",{className:"cvItemCard",children:[g.jsxs("div",{className:"cvItemTop",children:[g.jsx("h3",{children:v.title}),v.date?g.jsx("span",{className:"cvItemPeriod",children:v.date}):null]}),g.jsx("p",{className:"cvItemSub",children:v.issuer})]},v.id))})]}):null]})]})}function x3({theme:l,onToggleTheme:r}){const{tr:i}=Di();return g.jsxs("div",{className:"cvPage",children:[g.jsxs("header",{className:"topbar",children:[g.jsx(Dc,{}),g.jsxs("div",{className:"container topbarInner",children:[g.jsx("button",{className:"btn",onClick:()=>Gg("#/"),type:"button",children:i.cv.back}),g.jsx("div",{className:"brand",children:g.jsx("span",{children:i.cv.title})}),g.jsxs("div",{className:"rightActions",children:[g.jsx(Oc,{}),g.jsx(_c,{theme:l,onToggle:r})]})]})]}),g.jsx("main",{className:"container cvMain",children:g.jsx(t1,{})})]})}const y3="/my-portfolio/",ut=l=>`${y3}${l.replace(/^\/+/,"")}`,b3=[{id:"p1",title:"FPS Zombie Online",year:2025,role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:ut("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[ut("/screenshots/fps/1.jpg"),ut("/screenshots/fps/2.jpg"),ut("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",year:2024,role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:ut("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[ut("/screenshots/tressette/1.jpg"),ut("/screenshots/tressette/2.jpg"),ut("/screenshots/tressette/3.jpg")]},{id:"p0",title:"Pixel AI",year:2026,role:"",statusLabel:"Under Development",description:"A research-driven pixel game prototype focused on applying AI to generate world elements, shape map-building workflows, and explore zombie-defense gameplay ideas.",tech:["SDL 3","C++","Codex"],previewMp4:ut("/videos/pixelai.mp4"),previewGif:"",youtubeUrl:"",githubUrl:"https://github.com/FCBTruong/love-deaths-ai",downloadUrl:"",screenshots:[ut("/screenshots/pixelai/1.jpg"),ut("/screenshots/pixelai/2.jpg"),ut("/screenshots/pixelai/3.jpg")]},{id:"p3",title:"Thoi Loan Online",year:2021,role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:ut("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[ut("/screenshots/thoiloan/1.jpg"),ut("/screenshots/thoiloan/2.jpg"),ut("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",year:2019,role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:ut("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",year:2019,role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["SDL","C++"],previewMp4:ut("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",year:2020,role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:ut("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}];function v3({src:l,alt:r,onClose:i}){return ge.useEffect(()=>{const u=f=>{f.key==="Escape"&&i()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[i]),g.jsxs("div",{className:"lightboxOverlay",onClick:i,role:"dialog","aria-modal":"true",children:[g.jsx("img",{className:"lightboxImg",src:l,alt:r,onClick:u=>u.stopPropagation()}),g.jsx("button",{className:"lightboxClose",onClick:i,"aria-label":"Close",children:"×"})]})}function S3({title:l,previewMp4:r,previewGif:i,youtubeUrl:u}){return g.jsxs("div",{className:"previewCard",children:[r?g.jsx("video",{className:"previewMedia",src:r,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${l} preview video`}):i?g.jsx("img",{src:i,alt:`${l} preview`,className:"previewMedia",loading:"lazy"}):g.jsx("div",{className:"previewPlaceholder",children:"No preview"}),u?g.jsx("a",{className:"previewOverlayBtn",href:u,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${l}`,children:"Watch Full Demo"}):null]})}const k3=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],ec=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function w3(l){const r=[...l];for(let i=r.length-1;i>0;i--){const u=Math.floor(Math.random()*(i+1));[r[i],r[u]]=[r[u],r[i]]}return r}function Rm(l){const r=k3.slice(0,l);return w3([...r,...r].map((i,u)=>({id:u,symbol:i,isFlipped:!1,isMatched:!1})))}function E3(){const[l,r]=Ie.useState(0),i=ec[l],u=l===ec.length-1,[f,d]=Ie.useState(()=>Rm(i.cols*i.rows/2)),[c,h]=Ie.useState([]),[m,p]=Ie.useState(0),[b,y]=Ie.useState(0),[v,k]=Ie.useState(!1),[j,q]=Ie.useState(!1),[X,D]=Ie.useState(!1),L=Ie.useRef(null),M=Ie.useRef(null),W=Ie.useRef(0),ee=Ie.useRef(null),B=Ie.useCallback(()=>{if(typeof window>"u")return null;const A=window.AudioContext||window.webkitAudioContext;return A?(ee.current||(ee.current=new A),ee.current.state==="suspended"&&ee.current.resume(),ee.current):null},[]),F=Ie.useCallback((A,Z,le,me,E=0)=>{const T=B();if(!T)return;const Y=T.createOscillator(),w=T.createGain(),J=T.currentTime+E;Y.type=le,Y.frequency.setValueAtTime(A,J),w.gain.setValueAtTime(1e-4,J),w.gain.exponentialRampToValueAtTime(me,J+.02),w.gain.exponentialRampToValueAtTime(1e-4,J+Z),Y.connect(w),w.connect(T.destination),Y.start(J),Y.stop(J+Z+.02)},[B]),se=Ie.useCallback(()=>{F(660,.12,"triangle",.05,0),F(880,.12,"triangle",.04,.08)},[F]),pe=Ie.useCallback(()=>{F(420,.05,"triangle",.018,0)},[F]),U=Ie.useCallback(()=>{F(523.25,.16,"sine",.06,0),F(659.25,.16,"sine",.06,.12),F(783.99,.22,"sine",.07,.24)},[F]);Ie.useEffect(()=>{v&&!j&&f.every(A=>A.isMatched)&&q(!0)},[f,v,j]),Ie.useEffect(()=>(v&&!j&&(L.current=setInterval(()=>y(A=>A+1),1e3)),()=>{L.current&&clearInterval(L.current)}),[v,j]),Ie.useEffect(()=>{j&&U()},[j,U]),Ie.useEffect(()=>{if(!j)return;const A=M.current;if(!A)return;const Z=A.getContext("2d");if(!Z)return;A.width=A.offsetWidth,A.height=A.offsetHeight;const le=[],me=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],E=(J,ae)=>{for(let oe=0;oe<52;oe++){const ke=Math.PI*2*oe/52,Ye=2+Math.random()*4.5;le.push({x:J,y:ae,vx:Math.cos(ke)*Ye,vy:Math.sin(ke)*Ye,alpha:1,color:me[Math.floor(Math.random()*me.length)],r:2+Math.random()*2})}};let T=0;const Y=setInterval(()=>{E(A.width*(.15+Math.random()*.7),A.height*(.1+Math.random()*.55)),++T>=7&&clearInterval(Y)},320),w=()=>{Z.clearRect(0,0,A.width,A.height);for(let J=le.length-1;J>=0;J--){const ae=le[J];if(ae.x+=ae.vx,ae.y+=ae.vy,ae.vy+=.09,ae.alpha-=.016,ae.alpha<=0){le.splice(J,1);continue}Z.globalAlpha=ae.alpha,Z.fillStyle=ae.color,Z.beginPath(),Z.arc(ae.x,ae.y,ae.r,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,W.current=requestAnimationFrame(w)};return w(),()=>{clearInterval(Y),cancelAnimationFrame(W.current)}},[j]);const ne=Ie.useCallback(A=>{L.current&&clearInterval(L.current);const Z=ec[A];r(A),d(Rm(Z.cols*Z.rows/2)),h([]),p(0),y(0),k(!1),q(!1),D(!1)},[]),te=Ie.useCallback(A=>{const Z=f.find(E=>E.id===A);if(!Z||Z.isFlipped||Z.isMatched||X)return;if(v||k(!0),pe(),d(E=>E.map(T=>T.id===A?{...T,isFlipped:!0}:T)),c.length===0){h([A]);return}const le=c[0],me=f.find(E=>E.id===le);h([]),p(E=>E+1),me.symbol===Z.symbol?(se(),d(E=>E.map(T=>T.id===le||T.id===A?{...T,isFlipped:!0,isMatched:!0}:T))):(D(!0),setTimeout(()=>{d(E=>E.map(T=>T.id===le||T.id===A?{...T,isFlipped:!1}:T)),D(!1)},900))},[f,c,X,v,pe,se]),Se=A=>`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`,re=()=>g.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[g.jsx("path",{d:"M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z",fill:"currentColor"}),g.jsx("circle",{cx:"8",cy:"7",r:"1.6",fill:"currentColor"}),g.jsx("circle",{cx:"11.2",cy:"5.8",r:"1.5",fill:"currentColor"}),g.jsx("circle",{cx:"14.8",cy:"5.8",r:"1.5",fill:"currentColor"}),g.jsx("circle",{cx:"18",cy:"7",r:"1.6",fill:"currentColor"})]}),$=()=>g.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[g.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),g.jsx("path",{d:"M12 7.8v4.8l3.2 1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]});return g.jsxs("div",{className:"memoryGame",children:[g.jsxs("div",{className:"memoryGameHeader",children:[g.jsxs("span",{className:"memoryGameLevel",children:["Lv ",l+1," · ",i.n,"×",i.n]}),g.jsxs("span",{className:"memoryGameStat",children:[g.jsx(re,{})," ",g.jsx("strong",{children:m})]}),g.jsxs("span",{className:"memoryGameStat",children:[g.jsx($,{})," ",g.jsx("strong",{children:Se(b)})]})]}),g.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${i.cols}, ${i.cell}px)`,gridTemplateRows:`repeat(${i.rows}, ${i.cell}px)`},children:f.map(A=>g.jsx("button",{className:`memoryCard${A.isFlipped||A.isMatched?" flipped":""}${A.isMatched?" matched":""}`,onClick:()=>te(A.id),style:{width:i.cell,height:i.cell},"aria-label":A.isFlipped||A.isMatched?A.symbol:"Hidden card",children:g.jsxs("span",{className:"memoryCardInner",children:[g.jsx("span",{className:"memoryCardBack"}),g.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(i.cell*.44)},children:A.symbol})]})},A.id))}),j&&g.jsxs("div",{className:"memoryGameModal",children:[g.jsx("canvas",{ref:M,className:"memoryGameFireworks"}),g.jsxs("div",{className:"memoryGameModalBox",children:[g.jsx("div",{className:"memoryGameModalEmoji",children:u?"🏆":"🎉"}),g.jsx("div",{className:"memoryGameModalTitle",children:u?"You beat all levels!":`Level ${l+1} clear!`}),g.jsxs("div",{className:"memoryGameModalSub",children:[m," moves · ",Se(b)]}),!u&&g.jsx("button",{className:"memoryGameModalBtn",onClick:()=>ne(l+1),children:"Next Level →"}),g.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>ne(0),children:u?"Play Again":"Restart from Lv 1"})]})]})]})}function T3({theme:l,onToggleTheme:r}){const{tr:i,lang:u}=Di(),[f,d]=ge.useState(null),[c,h]=ge.useState("about"),m=L=>{h(L)},p=ge.useMemo(()=>i.intro.body,[i]),[b,y]=ge.useState(""),v=ge.useRef(u),[k,j]=ge.useState(!1);ge.useEffect(()=>{v.current!==u&&(v.current=u,y(""))},[u]),ge.useEffect(()=>{let M=0,W;const ee=()=>{if(j(!1),M+=1,y(p.slice(0,M)),M>=p.length){j(!1);return}const B=p[M-1],F=B==="."?360:B===","?140:24;j(F>24),W=window.setTimeout(ee,F)};return W=window.setTimeout(ee,24),()=>{j(!1),W!==void 0&&window.clearTimeout(W)}},[p]),ge.useEffect(()=>{c==="career"&&f&&d(null)},[c,f]);const q=ge.useRef(null);ge.useEffect(()=>{if(c!=="career")return;const L=q.current;if(!L)return;const M=L.querySelectorAll(".careerItem"),W=new IntersectionObserver(ee=>{ee.forEach(B=>{B.isIntersecting&&(B.target.classList.add("careerItemVisible"),W.unobserve(B.target))})},{threshold:.12});return M.forEach(ee=>W.observe(ee)),()=>W.disconnect()},[c]);const X=L=>g.jsx("div",{className:`projectList${L?" projectListReveal":""}`,children:b3.map(M=>g.jsxs("div",{className:`projectItem${L?" projectItemReveal":""}`,children:[g.jsx("div",{className:"projectMedia",children:g.jsx(S3,{title:M.title,previewMp4:M.previewMp4,previewGif:M.previewGif,youtubeUrl:M.youtubeUrl})}),g.jsxs("div",{className:"projectInfo",children:[g.jsxs("div",{className:"projectTitleRow",children:[g.jsx("h3",{className:"h3",children:M.title}),M.year?g.jsx("span",{className:"pill year",children:M.year}):null,M.statusLabel?g.jsx("span",{className:"pill progress",children:M.statusLabel}):null,M.role?g.jsx("span",{className:"pill",children:M.role}):null]}),g.jsx("p",{className:"projectDesc",children:M.description}),M.tech?.length?g.jsx("div",{className:"tech",children:M.tech.map(W=>g.jsx("span",{className:"tag",children:W},W))}):null,g.jsxs("div",{className:"projectActions",children:[M.githubUrl?g.jsxs("a",{className:"btn btnIcon",href:M.githubUrl,target:"_blank",rel:"noreferrer",children:[g.jsx(dc,{}),i.project.github]}):null,M.downloadUrl?g.jsx("a",{className:"btn primary",href:M.downloadUrl,target:"_blank",rel:"noreferrer",children:i.project.downloadPlay}):null]})]}),M.screenshots?.length?g.jsx("div",{className:"screenshots fill3",children:M.screenshots.slice(0,3).map((W,ee)=>g.jsx("img",{src:W,alt:`${M.title} screenshot ${ee+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>d({src:W,alt:`${M.title} screenshot ${ee+1}`})},ee))}):null]},M.id))},L?"projects-tab-animated":"projects-tab-static"),D=L=>L.logo?g.jsx("img",{src:L.logo,alt:L.org,className:"careerLogo"}):L.title==="Self Development"?g.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:g.jsx(Xg,{})}):g.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:g.jsx(Ig,{})});return g.jsxs("div",{className:"page",children:[g.jsxs("header",{className:"topbar",children:[g.jsx(Dc,{}),g.jsxs("div",{className:"container topbarInner homeTopbarInner",children:[g.jsx("a",{className:"brand",href:"#/",children:g.jsx("span",{children:"Portfolio"})}),g.jsxs("nav",{className:"nav",children:[g.jsxs("button",{type:"button",className:`navTabBtn${c==="about"?" active":""}`,onClick:()=>m("about"),children:[i.nav.about,g.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),g.jsxs("button",{type:"button",className:`navTabBtn${c==="projects"?" active":""}`,onClick:()=>m("projects"),children:[i.nav.projects,g.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),g.jsxs("button",{type:"button",className:`navTabBtn${c==="career"?" active":""}`,onClick:()=>m("career"),children:[i.nav.career,g.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),g.jsxs("button",{type:"button",className:`navTabBtn${c==="resume"?" active":""}`,onClick:()=>m("resume"),children:[i.nav.resume,g.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]})]}),g.jsxs("div",{className:"rightActions",children:[g.jsx(Oc,{}),g.jsx(_c,{theme:l,onToggle:r})]})]})]}),g.jsxs("main",{className:"container main",children:[c==="about"?g.jsxs("section",{className:"projects",id:"top",children:[g.jsxs("section",{className:"intro",style:{marginBottom:"20px"},children:[g.jsxs("h1",{className:"h3 heroTitle",children:[i.intro.greeting," ",g.jsx("span",{className:"accent",children:"Truong"})]}),g.jsxs("p",{className:"summary",children:[b,b.length<p.length?g.jsx("span",{className:`typingCursor${k?" paused":""}`,"aria-hidden":"true",children:"|"}):null]})]}),g.jsx(E3,{}),X(!1)]}):null,c==="projects"?g.jsx("section",{id:"projects",className:"projects",children:X(!0)}):null,c==="career"?g.jsxs("section",{className:"projects",children:[g.jsxs("div",{className:"careerTimeline",ref:q,"aria-label":"Career timeline",children:[g.jsx("span",{className:"careerFlowLabel top",children:i.career.now}),g.jsx("span",{className:"careerFlowLabel bottom",children:i.career.start}),g.jsx("span",{className:"careerLine","aria-hidden":"true"}),[...$g].reverse().map((L,M)=>g.jsxs("div",{className:"careerItem",style:{"--delay":`${M*100}ms`},children:[g.jsxs("div",{className:"careerDateWrap",children:[g.jsx("div",{className:"careerDate",children:L.period}),g.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),g.jsxs("article",{className:"careerCard",children:[D(L),g.jsx("h3",{className:"h3 careerRole",children:L.title}),g.jsx("p",{className:"careerOrg",children:L.org}),L.location?g.jsx("p",{className:"careerLocation",children:L.location}):null,g.jsx("p",{className:"careerCardSummary",children:L.summary}),g.jsx("ul",{className:"careerHighlights",children:L.highlights.map(W=>g.jsx("li",{children:W},W))})]})]},L.period))]},"career-tab"),g.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[g.jsxs("article",{className:"careerExtraCard",children:[g.jsxs("h3",{className:"h3 careerExtraTitle",children:[g.jsx(Qg,{}),i.career.education]}),g.jsx("ul",{className:"careerExtraList",children:Wg.map(L=>g.jsx("li",{className:"careerExtraItem",children:g.jsxs("div",{className:"careerExtraRow",children:[L.logo?g.jsx("img",{src:L.logo,alt:L.school,className:"careerExtraLogo"}):null,g.jsxs("div",{className:"careerExtraBody",children:[g.jsxs("div",{className:"careerExtraHead",children:[g.jsxs("p",{className:"careerExtraMain",children:[L.degree,L.area?` in ${L.area}`:""]}),g.jsx("span",{className:"careerExtraDate",children:L.period})]}),g.jsx("p",{className:"careerExtraSub",children:L.school}),L.location?g.jsx("p",{className:"careerExtraMeta",children:L.location}):null]})]})},`${L.school}-${L.period}`))})]}),g.jsxs("article",{className:"careerExtraCard",children:[g.jsxs("h3",{className:"h3 careerExtraTitle",children:[g.jsx(Zg,{}),i.career.certificates]}),g.jsx("ul",{className:"careerExtraList",children:Pg.map(L=>g.jsx("li",{className:"careerExtraItem",children:g.jsxs("div",{className:"careerExtraRow",children:[L.logo?g.jsx("img",{src:L.logo,alt:L.issuer,className:"careerExtraLogo"}):null,g.jsxs("div",{className:"careerExtraBody",children:[g.jsxs("div",{className:"careerExtraHead",children:[g.jsx("p",{className:"careerExtraMain",children:L.title}),g.jsx("span",{className:"careerExtraDate",children:L.date})]}),g.jsx("p",{className:"careerExtraSub",children:L.issuer})]})]})},`${L.title}-${L.date}`))})]}),g.jsxs("article",{className:"careerExtraCard",children:[g.jsxs("h3",{className:"h3 careerExtraTitle",children:[g.jsx(Fg,{}),i.career.awards]}),g.jsx("ul",{className:"careerExtraList",children:e1.map(L=>g.jsx("li",{className:"careerExtraItem",children:g.jsxs("div",{className:"careerExtraRow",children:[L.logo?g.jsx("img",{src:L.logo,alt:L.title,className:"careerExtraLogo"}):null,g.jsxs("div",{className:"careerExtraBody",children:[g.jsxs("div",{className:"careerExtraHead",children:[g.jsx("p",{className:"careerExtraMain",children:L.title}),g.jsx("span",{className:"careerExtraDate",children:L.date})]}),L.location?g.jsx("p",{className:"careerExtraMeta",children:L.location}):null]})]})},`${L.title}-${L.date}`))})]})]})]}):null,c==="resume"?g.jsx("section",{className:"resumeTabContent noCard",children:g.jsx("div",{className:"resumeSheetLayout",children:g.jsx("div",{className:"resumePreviewWrap noCard",children:g.jsx(t1,{})})})}):null]}),g.jsx("p",{className:`footerQuote${c==="resume"?" footerQuoteResume":""}`,children:i.footer.quote}),g.jsxs("footer",{className:"footer",children:[g.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:g.jsx("span",{className:"footerBaseAccent"})}),g.jsxs("div",{className:"container footerInner",children:[g.jsxs("span",{className:"footerLeft",children:[g.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),g.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:g.jsx(n3,{})}),g.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:g.jsx(Vg,{})}),g.jsx("a",{className:"socialIcon github",href:"https://github.com/FCBTruong",target:"_blank",rel:"noreferrer","aria-label":"GitHub profile",children:g.jsx(dc,{})})]}),g.jsxs("span",{className:"footerStack","aria-label":"Built with React, TypeScript and Vite",children:[g.jsx("span",{className:"stackChip react",title:"React","aria-hidden":"true",children:g.jsx(o3,{})}),g.jsx("span",{className:"stackChip ts",title:"TypeScript","aria-hidden":"true",children:g.jsx(s3,{})}),g.jsx("span",{className:"stackChip vite",title:"Vite","aria-hidden":"true",children:g.jsx(c3,{})})]})]})]}),f&&g.jsx(v3,{src:f.src,alt:f.alt,onClose:()=>d(null)})]})}function C3(){const l=localStorage.getItem("theme");return l==="light"||l==="dark"?l:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const j3=`
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

.careerCardSummary{
  margin: 10px 0 8px;
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

`;function z3(){const l=t3(),[r,i]=ge.useState(()=>C3()),[u,f]=ge.useState(()=>d3()),d=ge.useCallback(()=>{i(m=>m==="dark"?"light":"dark")},[]),c=ge.useCallback(m=>{f(m),localStorage.setItem("language",m)},[]);ge.useEffect(()=>{document.documentElement.dataset.theme=r,localStorage.setItem("theme",r)},[r]);const h=ge.useMemo(()=>({lang:u,setLang:c,tr:Kg(u)}),[u,c]);return g.jsxs(Jg.Provider,{value:h,children:[g.jsx("style",{children:j3}),g.jsx(jx,{}),g.jsx(e3,{}),l==="cv"?g.jsx(x3,{theme:r,onToggleTheme:d}):l==="career"?g.jsx(g3,{theme:r,onToggleTheme:d}):g.jsx(T3,{theme:r,onToggleTheme:d})]})}Cx.createRoot(document.getElementById("root")).render(g.jsx(ge.StrictMode,{children:g.jsx(z3,{})}));
