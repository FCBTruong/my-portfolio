(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function au(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Cs={exports:{}},gi={};var Cd;function ly(){if(Cd)return gi;Cd=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var d in c)d!=="key"&&(f[d]=c[d])}else f=c;return c=f.ref,{$$typeof:l,type:u,key:h,ref:c!==void 0?c:null,props:f}}return gi.Fragment=r,gi.jsx=i,gi.jsxs=i,gi}var zd;function ay(){return zd||(zd=1,Cs.exports=ly()),Cs.exports}var b=ay(),zs={exports:{}},ge={};var Ad;function iy(){if(Ad)return ge;Ad=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),k=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=k&&T[k]||T["@@iterator"],typeof T=="function"?T:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,L={};function D(T,q,E){this.props=T,this.context=q,this.refs=L,this.updater=E||A}D.prototype.isReactComponent={},D.prototype.setState=function(T,q){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,q,"setState")},D.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function I(){}I.prototype=D.prototype;function Y(T,q,E){this.props=T,this.context=q,this.refs=L,this.updater=E||A}var re=Y.prototype=new I;re.constructor=Y,M(re,D.prototype),re.isPureReactComponent=!0;var ne=Array.isArray;function H(){}var J={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function pe(T,q,E){var K=E.ref;return{$$typeof:l,type:T,key:q,ref:K!==void 0?K:null,props:E}}function B(T,q){return pe(T.type,q,T.props)}function ee(T){return typeof T=="object"&&T!==null&&T.$$typeof===l}function P(T){var q={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(E){return q[E]})}var ve=/\/+/g;function ie(T,q){return typeof T=="object"&&T!==null&&T.key!=null?P(""+T.key):q.toString(36)}function $(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(H,H):(T.status="pending",T.then(function(q){T.status==="pending"&&(T.status="fulfilled",T.value=q)},function(q){T.status==="pending"&&(T.status="rejected",T.reason=q)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function j(T,q,E,K,le){var oe=typeof T;(oe==="undefined"||oe==="boolean")&&(T=null);var Se=!1;if(T===null)Se=!0;else switch(oe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(T.$$typeof){case l:case r:Se=!0;break;case x:return Se=T._init,j(Se(T._payload),q,E,K,le)}}if(Se)return le=le(T),Se=K===""?"."+ie(T,0):K,ne(le)?(E="",Se!=null&&(E=Se.replace(ve,"$&/")+"/"),j(le,q,E,"",function(Gt){return Gt})):le!=null&&(ee(le)&&(le=B(le,E+(le.key==null||T&&T.key===le.key?"":(""+le.key).replace(ve,"$&/")+"/")+Se)),q.push(le)),1;Se=0;var Ye=K===""?".":K+":";if(ne(T))for(var Be=0;Be<T.length;Be++)K=T[Be],oe=Ye+ie(K,Be),Se+=j(K,q,E,oe,le);else if(Be=S(T),typeof Be=="function")for(T=Be.call(T),Be=0;!(K=T.next()).done;)K=K.value,oe=Ye+ie(K,Be++),Se+=j(K,q,E,oe,le);else if(oe==="object"){if(typeof T.then=="function")return j($(T),q,E,K,le);throw q=String(T),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Z(T,q,E){if(T==null)return T;var K=[],le=0;return j(T,K,"","",function(oe){return q.call(E,oe,le++)}),K}function te(T){if(T._status===-1){var q=T._result;q=q(),q.then(function(E){(T._status===0||T._status===-1)&&(T._status=1,T._result=E)},function(E){(T._status===0||T._status===-1)&&(T._status=2,T._result=E)}),T._status===-1&&(T._status=0,T._result=q)}if(T._status===1)return T._result.default;throw T._result}var me=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},w={map:Z,forEach:function(T,q,E){Z(T,function(){q.apply(this,arguments)},E)},count:function(T){var q=0;return Z(T,function(){q++}),q},toArray:function(T){return Z(T,function(q){return q})||[]},only:function(T){if(!ee(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ge.Activity=y,ge.Children=w,ge.Component=D,ge.Fragment=i,ge.Profiler=c,ge.PureComponent=Y,ge.StrictMode=u,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ge.__COMPILER_RUNTIME={__proto__:null,c:function(T){return J.H.useMemoCache(T)}},ge.cache=function(T){return function(){return T.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(T,q,E){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var K=M({},T.props),le=T.key;if(q!=null)for(oe in q.key!==void 0&&(le=""+q.key),q)!fe.call(q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&q.ref===void 0||(K[oe]=q[oe]);var oe=arguments.length-2;if(oe===1)K.children=E;else if(1<oe){for(var Se=Array(oe),Ye=0;Ye<oe;Ye++)Se[Ye]=arguments[Ye+2];K.children=Se}return pe(T.type,le,K)},ge.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},ge.createElement=function(T,q,E){var K,le={},oe=null;if(q!=null)for(K in q.key!==void 0&&(oe=""+q.key),q)fe.call(q,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(le[K]=q[K]);var Se=arguments.length-2;if(Se===1)le.children=E;else if(1<Se){for(var Ye=Array(Se),Be=0;Be<Se;Be++)Ye[Be]=arguments[Be+2];le.children=Ye}if(T&&T.defaultProps)for(K in Se=T.defaultProps,Se)le[K]===void 0&&(le[K]=Se[K]);return pe(T,oe,le)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(T){return{$$typeof:d,render:T}},ge.isValidElement=ee,ge.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:te}},ge.memo=function(T,q){return{$$typeof:p,type:T,compare:q===void 0?null:q}},ge.startTransition=function(T){var q=J.T,E={};J.T=E;try{var K=T(),le=J.S;le!==null&&le(E,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(H,me)}catch(oe){me(oe)}finally{q!==null&&E.types!==null&&(q.types=E.types),J.T=q}},ge.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ge.use=function(T){return J.H.use(T)},ge.useActionState=function(T,q,E){return J.H.useActionState(T,q,E)},ge.useCallback=function(T,q){return J.H.useCallback(T,q)},ge.useContext=function(T){return J.H.useContext(T)},ge.useDebugValue=function(){},ge.useDeferredValue=function(T,q){return J.H.useDeferredValue(T,q)},ge.useEffect=function(T,q){return J.H.useEffect(T,q)},ge.useEffectEvent=function(T){return J.H.useEffectEvent(T)},ge.useId=function(){return J.H.useId()},ge.useImperativeHandle=function(T,q,E){return J.H.useImperativeHandle(T,q,E)},ge.useInsertionEffect=function(T,q){return J.H.useInsertionEffect(T,q)},ge.useLayoutEffect=function(T,q){return J.H.useLayoutEffect(T,q)},ge.useMemo=function(T,q){return J.H.useMemo(T,q)},ge.useOptimistic=function(T,q){return J.H.useOptimistic(T,q)},ge.useReducer=function(T,q,E){return J.H.useReducer(T,q,E)},ge.useRef=function(T){return J.H.useRef(T)},ge.useState=function(T){return J.H.useState(T)},ge.useSyncExternalStore=function(T,q,E){return J.H.useSyncExternalStore(T,q,E)},ge.useTransition=function(){return J.H.useTransition()},ge.version="19.2.3",ge}var jd;function oc(){return jd||(jd=1,zs.exports=iy()),zs.exports}var Ke=oc();const Ne=au(Ke);var As={exports:{}},yi={},js={exports:{}},Ms={};var Md;function ry(){return Md||(Md=1,(function(l){function r(j,Z){var te=j.length;j.push(Z);e:for(;0<te;){var me=te-1>>>1,w=j[me];if(0<c(w,Z))j[me]=Z,j[te]=w,te=me;else break e}}function i(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var Z=j[0],te=j.pop();if(te!==Z){j[0]=te;e:for(var me=0,w=j.length,T=w>>>1;me<T;){var q=2*(me+1)-1,E=j[q],K=q+1,le=j[K];if(0>c(E,te))K<w&&0>c(le,E)?(j[me]=le,j[K]=te,me=K):(j[me]=E,j[q]=te,me=q);else if(K<w&&0>c(le,te))j[me]=le,j[K]=te,me=K;else break e}}return Z}function c(j,Z){var te=j.sortIndex-Z.sortIndex;return te!==0?te:j.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();l.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,y=null,k=3,S=!1,A=!1,M=!1,L=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function re(j){for(var Z=i(p);Z!==null;){if(Z.callback===null)u(p);else if(Z.startTime<=j)u(p),Z.sortIndex=Z.expirationTime,r(m,Z);else break;Z=i(p)}}function ne(j){if(M=!1,re(j),!A)if(i(m)!==null)A=!0,H||(H=!0,P());else{var Z=i(p);Z!==null&&$(ne,Z.startTime-j)}}var H=!1,J=-1,fe=5,pe=-1;function B(){return L?!0:!(l.unstable_now()-pe<fe)}function ee(){if(L=!1,H){var j=l.unstable_now();pe=j;var Z=!0;try{e:{A=!1,M&&(M=!1,I(J),J=-1),S=!0;var te=k;try{t:{for(re(j),y=i(m);y!==null&&!(y.expirationTime>j&&B());){var me=y.callback;if(typeof me=="function"){y.callback=null,k=y.priorityLevel;var w=me(y.expirationTime<=j);if(j=l.unstable_now(),typeof w=="function"){y.callback=w,re(j),Z=!0;break t}y===i(m)&&u(m),re(j)}else u(m);y=i(m)}if(y!==null)Z=!0;else{var T=i(p);T!==null&&$(ne,T.startTime-j),Z=!1}}break e}finally{y=null,k=te,S=!1}Z=void 0}}finally{Z?P():H=!1}}}var P;if(typeof Y=="function")P=function(){Y(ee)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ie=ve.port2;ve.port1.onmessage=ee,P=function(){ie.postMessage(null)}}else P=function(){D(ee,0)};function $(j,Z){J=D(function(){j(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(j){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var te=k;k=Z;try{return j()}finally{k=te}},l.unstable_requestPaint=function(){L=!0},l.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var te=k;k=j;try{return Z()}finally{k=te}},l.unstable_scheduleCallback=function(j,Z,te){var me=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?me+te:me):te=me,j){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=te+w,j={id:x++,callback:Z,priorityLevel:j,startTime:te,expirationTime:w,sortIndex:-1},te>me?(j.sortIndex=te,r(p,j),i(m)===null&&j===i(p)&&(M?(I(J),J=-1):M=!0,$(ne,te-me))):(j.sortIndex=w,r(m,j),A||S||(A=!0,H||(H=!0,P()))),j},l.unstable_shouldYield=B,l.unstable_wrapCallback=function(j){var Z=k;return function(){var te=k;k=Z;try{return j.apply(this,arguments)}finally{k=te}}}})(Ms)),Ms}var Dd;function uy(){return Dd||(Dd=1,js.exports=ry()),js.exports}var Ds={exports:{}},mt={};var Nd;function oy(){if(Nd)return mt;Nd=1;var l=oc();function r(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(m,p,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:m,containerInfo:p,implementation:x}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,mt.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return f(m,p,null,x)},mt.flushSync=function(m){var p=h.T,x=u.p;try{if(h.T=null,u.p=2,m)return m()}finally{h.T=p,u.p=x,u.d.f()}},mt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(m,p))},mt.prefetchDNS=function(m){typeof m=="string"&&u.d.D(m)},mt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,y=d(x,p.crossOrigin),k=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?u.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:k,fetchPriority:S}):x==="script"&&u.d.X(m,{crossOrigin:y,integrity:k,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},mt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);u.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(m)},mt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,y=d(x,p.crossOrigin);u.d.L(m,x,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},mt.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);u.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(m)},mt.requestFormReset=function(m){u.d.r(m)},mt.unstable_batchedUpdates=function(m,p){return m(p)},mt.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},mt.useFormStatus=function(){return h.H.useHostTransitionStatus()},mt.version="19.2.3",mt}var _d;function sy(){if(_d)return Ds.exports;_d=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ds.exports=oy(),Ds.exports}var Od;function cy(){if(Od)return yi;Od=1;var l=uy(),r=oc(),i=sy();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(u(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return m(o),e;if(s===a)return m(o),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=s;else{for(var g=!1,v=o.child;v;){if(v===n){g=!0,n=o,a=s;break}if(v===a){g=!0,a=o,n=s;break}v=v.sibling}if(!g){for(v=s.child;v;){if(v===n){g=!0,n=s,a=o;break}if(v===a){g=!0,a=s,n=o;break}v=v.sibling}if(!g)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,k=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case D:return"Profiler";case L:return"StrictMode";case ne:return"Suspense";case H:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case Y:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var $=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},me=[],w=-1;function T(e){return{current:e}}function q(e){0>w||(e.current=me[w],me[w]=null,w--)}function E(e,t){w++,me[w]=e.current,e.current=t}var K=T(null),le=T(null),oe=T(null),Se=T(null);function Ye(e,t){switch(E(oe,t),E(le,e),E(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kp(t),e=Jp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(K),E(K,e)}function Be(){q(K),q(le),q(oe)}function Gt(e){e.memoizedState!==null&&E(Se,e);var t=K.current,n=Jp(t,e.type);t!==n&&(E(le,e),E(K,n))}function hn(e){le.current===e&&(q(K),q(le)),Se.current===e&&(q(Se),hi._currentValue=te)}var Ea,Mi;function pn(e){if(Ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ea=t&&t[1]||"",Mi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ea+e+Mi}var Al=!1;function jl(e,t){if(!e||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(U){var R=U}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(U){R=U}e.call(Q.prototype)}}else{try{throw Error()}catch(U){R=U}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(U){if(U&&R&&typeof U.stack=="string")return[U.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),g=s[0],v=s[1];if(g&&v){var C=g.split(`
`),O=v.split(`
`);for(o=a=0;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(a===C.length||o===O.length)for(a=C.length-1,o=O.length-1;1<=a&&0<=o&&C[a]!==O[o];)o--;for(;1<=a&&0<=o;a--,o--)if(C[a]!==O[o]){if(a!==1||o!==1)do if(a--,o--,0>o||C[a]!==O[o]){var G=`
`+C[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=o);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pn(n):""}function Di(e,t){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==t&&t!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return jl(e.type,!1);case 11:return jl(e.type.render,!1);case 1:return jl(e.type,!0);case 31:return pn("Activity");default:return""}}function Ni(e){try{var t="",n=null;do t+=Di(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ml=Object.prototype.hasOwnProperty,Dl=l.unstable_scheduleCallback,wa=l.unstable_cancelCallback,cu=l.unstable_shouldYield,fu=l.unstable_requestPaint,xt=l.unstable_now,hu=l.unstable_getCurrentPriorityLevel,V=l.unstable_ImmediatePriority,W=l.unstable_UserBlockingPriority,de=l.unstable_NormalPriority,ke=l.unstable_LowPriority,Oe=l.unstable_IdlePriority,Nt=l.log,dn=l.unstable_setDisableYieldValue,bt=null,it=null;function kt(e){if(typeof Nt=="function"&&dn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(bt,e)}catch{}}var Ge=Math.clz32?Math.clz32:Vg,On=Math.log,en=Math.LN2;function Vg(e){return e>>>=0,e===0?32:31-(On(e)/en|0)|0}var _i=256,Oi=262144,Ri=4194304;function ul(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Li(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,s=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var v=a&134217727;return v!==0?(a=v&~s,a!==0?o=ul(a):(g&=v,g!==0?o=ul(g):n||(n=v&~e,n!==0&&(o=ul(n))))):(v=a&~s,v!==0?o=ul(v):g!==0?o=ul(g):n||(n=a&~e,n!==0&&(o=ul(n)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:o}function Ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jc(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function pu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qg(e,t,n,a,o,s){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,C=e.expirationTimes,O=e.hiddenUpdates;for(n=g&~n;0<n;){var G=31-Ge(n),Q=1<<G;v[G]=0,C[G]=-1;var R=O[G];if(R!==null)for(O[G]=null,G=0;G<R.length;G++){var U=R[G];U!==null&&(U.lane&=-536870913)}n&=~Q}a!==0&&Mc(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(g&~t))}function Mc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ge(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Dc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ge(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Nc(e,t){var n=t&-t;return n=(n&42)!==0?1:du(n),(n&(e.suspendedLanes|t))!==0?0:n}function du(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _c(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:bd(e.type))}function Oc(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Rn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Rn,Et="__reactProps$"+Rn,Nl="__reactContainer$"+Rn,gu="__reactEvents$"+Rn,Zg="__reactListeners$"+Rn,Ig="__reactHandles$"+Rn,Rc="__reactResources$"+Rn,za="__reactMarker$"+Rn;function yu(e){delete e[ct],delete e[Et],delete e[gu],delete e[Zg],delete e[Ig]}function _l(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nl]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[ct])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){if(e=e[ct]||e[Nl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Aa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Rl(e){var t=e[Rc];return t||(t=e[Rc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[za]=!0}var Lc=new Set,Bc={};function ol(e,t){Ll(e,t),Ll(e+"Capture",t)}function Ll(e,t){for(Bc[e]=t,e=0;e<t.length;e++)Lc.add(t[e])}var Fg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uc={},Hc={};function Kg(e){return Ml.call(Hc,e)?!0:Ml.call(Uc,e)?!1:Fg.test(e)?Hc[e]=!0:(Uc[e]=!0,!1)}function Bi(e,t,n){if(Kg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ui(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){n=""+g,s.call(this,g)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xu(e){if(!e._valueTracker){var t=qc(e)?"checked":"value";e._valueTracker=Jg(e,t,""+e[t])}}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=qc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $g=/[\n"\\]/g;function Xt(e){return e.replace($g,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(e,t,n,a,o,s,g,v){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?vu(e,g,Vt(t)):n!=null?vu(e,g,Vt(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Vt(v):e.removeAttribute("name")}function Gc(e,t,n,a,o,s,g,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){xu(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),xu(e)}function vu(e,t,n){t==="number"&&Hi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bl(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vc(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Xc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if($(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),xu(e)}function Ul(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Wg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Zc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Qc(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&Qc(e,s,t[s])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return e1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var ku=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,ql=null;function Ic(e){var t=Ol(e);if(t&&(e=t.stateNode)){var n=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(bu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[Et]||null;if(!o)throw Error(u(90));bu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Yc(a)}break e;case"textarea":Vc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bl(e,!!n.multiple,t,!1)}}}var wu=!1;function Fc(e,t,n){if(wu)return e(t,n);wu=!0;try{var a=e(t);return a}finally{if(wu=!1,(Hl!==null||ql!==null)&&(zr(),Hl&&(t=Hl,e=ql,ql=Hl=null,Ic(t),e)))for(t=0;t<e.length;t++)Ic(e[t])}}function ja(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Et]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(yn)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Tu=!1}var Ln=null,Cu=null,Yi=null;function Kc(){if(Yi)return Yi;var e,t=Cu,n=t.length,a,o="value"in Ln?Ln.value:Ln.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var g=n-e;for(a=1;a<=g&&t[n-a]===o[s-a];a++);return Yi=o.slice(e,1<a?1-a:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Jc(){return!1}function wt(e){function t(n,a,o,s,g){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vi:Jc,this.isPropagationStopped=Jc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=wt(sl),Da=y({},sl,{view:0,detail:0}),t1=wt(Da),zu,Au,Na,Qi=y({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(zu=e.screenX-Na.screenX,Au=e.screenY-Na.screenY):Au=zu=0,Na=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),$c=wt(Qi),n1=y({},Qi,{dataTransfer:0}),l1=wt(n1),a1=y({},Da,{relatedTarget:0}),ju=wt(a1),i1=y({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=wt(i1),u1=y({},sl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o1=wt(u1),s1=y({},sl,{data:0}),Wc=wt(s1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h1[e])?!!t[e]:!1}function Mu(){return p1}var d1=y({},Da,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=wt(d1),g1=y({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=wt(g1),y1=y({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),x1=wt(y1),b1=y({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),v1=wt(b1),S1=y({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k1=wt(S1),E1=y({},sl,{newState:0,oldState:0}),w1=wt(E1),T1=[9,13,27,32],Du=yn&&"CompositionEvent"in window,_a=null;yn&&"documentMode"in document&&(_a=document.documentMode);var C1=yn&&"TextEvent"in window&&!_a,ef=yn&&(!Du||_a&&8<_a&&11>=_a),tf=" ",nf=!1;function lf(e,t){switch(e){case"keyup":return T1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yl=!1;function z1(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(nf=!0,tf);case"textInput":return e=t.data,e===tf&&nf?null:e;default:return null}}function A1(e,t){if(Yl)return e==="compositionend"||!Du&&lf(e,t)?(e=Kc(),Yi=Cu=Ln=null,Yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ef&&t.locale!=="ko"?null:t.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j1[e.type]:t==="textarea"}function uf(e,t,n,a){Hl?ql?ql.push(a):ql=[a]:Hl=a,t=Or(t,"onChange"),0<t.length&&(n=new Xi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Oa=null,Ra=null;function M1(e){Vp(e,0)}function Zi(e){var t=Aa(e);if(Yc(t))return e}function of(e,t){if(e==="change")return t}var sf=!1;if(yn){var Nu;if(yn){var _u="oninput"in document;if(!_u){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),_u=typeof cf.oninput=="function"}Nu=_u}else Nu=!1;sf=Nu&&(!document.documentMode||9<document.documentMode)}function ff(){Oa&&(Oa.detachEvent("onpropertychange",hf),Ra=Oa=null)}function hf(e){if(e.propertyName==="value"&&Zi(Ra)){var t=[];uf(t,Ra,e,Eu(e)),Fc(M1,t)}}function D1(e,t,n){e==="focusin"?(ff(),Oa=t,Ra=n,Oa.attachEvent("onpropertychange",hf)):e==="focusout"&&ff()}function N1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(Ra)}function _1(e,t){if(e==="click")return Zi(t)}function O1(e,t){if(e==="input"||e==="change")return Zi(t)}function R1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:R1;function La(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ml.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function df(e,t){var n=pf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pf(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var L1=yn&&"documentMode"in document&&11>=document.documentMode,Gl=null,Ru=null,Ba=null,Lu=!1;function yf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||Gl==null||Gl!==Hi(a)||(a=Gl,"selectionStart"in a&&Ou(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ba&&La(Ba,a)||(Ba=a,a=Or(Ru,"onSelect"),0<a.length&&(t=new Xi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Gl)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vl={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionrun:cl("Transition","TransitionRun"),transitionstart:cl("Transition","TransitionStart"),transitioncancel:cl("Transition","TransitionCancel"),transitionend:cl("Transition","TransitionEnd")},Bu={},xf={};yn&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete Vl.animationend.animation,delete Vl.animationiteration.animation,delete Vl.animationstart.animation),"TransitionEvent"in window||delete Vl.transitionend.transition);function fl(e){if(Bu[e])return Bu[e];if(!Vl[e])return e;var t=Vl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xf)return Bu[e]=t[n];return e}var bf=fl("animationend"),vf=fl("animationiteration"),Sf=fl("animationstart"),B1=fl("transitionrun"),U1=fl("transitionstart"),H1=fl("transitioncancel"),kf=fl("transitionend"),Ef=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function tn(e,t){Ef.set(e,t),ol(t,[e])}var Ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],Xl=0,Hu=0;function Fi(){for(var e=Xl,t=Hu=Xl=0;t<e;){var n=Qt[t];Qt[t++]=null;var a=Qt[t];Qt[t++]=null;var o=Qt[t];Qt[t++]=null;var s=Qt[t];if(Qt[t++]=null,a!==null&&o!==null){var g=a.pending;g===null?o.next=o:(o.next=g.next,g.next=o),a.pending=o}s!==0&&wf(n,o,s)}}function Ki(e,t,n,a){Qt[Xl++]=e,Qt[Xl++]=t,Qt[Xl++]=n,Qt[Xl++]=a,Hu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function qu(e,t,n,a){return Ki(e,t,n,a),Ji(e)}function hl(e,t){return Ki(e,null,null,t),Ji(e)}function wf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-Ge(n),e=s.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),s):null}function Ji(e){if(50<ii)throw ii=0,Jo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ql={};function q1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new q1(e,t,n,a)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Tf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $i(e,t,n,a,o,s){var g=0;if(a=e,typeof e=="function")Yu(e)&&(g=1);else if(typeof e=="string")g=Q0(e,n,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=Ot(31,n,t,o),e.elementType=pe,e.lanes=s,e;case M:return pl(n.children,o,s,t);case L:g=8,o|=24;break;case D:return e=Ot(12,n,t,o|2),e.elementType=D,e.lanes=s,e;case ne:return e=Ot(13,n,t,o),e.elementType=ne,e.lanes=s,e;case H:return e=Ot(19,n,t,o),e.elementType=H,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:g=10;break e;case I:g=9;break e;case re:g=11;break e;case J:g=14;break e;case fe:g=16,a=null;break e}g=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ot(g,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function pl(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function Gu(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Cf(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function Vu(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zf=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=zf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ni(t)},zf.set(e,t),t)}return{value:e,source:t,stack:Ni(t)}}var Zl=[],Il=0,Wi=null,Ua=0,It=[],Ft=0,Bn=null,rn=1,un="";function bn(e,t){Zl[Il++]=Ua,Zl[Il++]=Wi,Wi=e,Ua=t}function Af(e,t,n){It[Ft++]=rn,It[Ft++]=un,It[Ft++]=Bn,Bn=e;var a=rn;e=un;var o=32-Ge(a)-1;a&=~(1<<o),n+=1;var s=32-Ge(t)+o;if(30<s){var g=o-o%5;s=(a&(1<<g)-1).toString(32),a>>=g,o-=g,rn=1<<32-Ge(t)+o|n<<o|a,un=s+e}else rn=1<<s|n<<o|a,un=e}function Xu(e){e.return!==null&&(bn(e,1),Af(e,1,0))}function Qu(e){for(;e===Wi;)Wi=Zl[--Il],Zl[Il]=null,Ua=Zl[--Il],Zl[Il]=null;for(;e===Bn;)Bn=It[--Ft],It[Ft]=null,un=It[--Ft],It[Ft]=null,rn=It[--Ft],It[Ft]=null}function jf(e,t){It[Ft++]=rn,It[Ft++]=un,It[Ft++]=Bn,rn=t.id,un=t.overflow,Bn=e}var ft=null,Ze=null,Ae=!1,Un=null,Kt=!1,Zu=Error(u(519));function Hn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ha(Zt(t,e)),Zu}function Mf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ct]=e,t[Et]=a,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<ui.length;n++)we(ui[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),Gc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),Xc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ip(t.textContent,n)?(a.popover!=null&&(we("beforetoggle",t),we("toggle",t)),a.onScroll!=null&&we("scroll",t),a.onScrollEnd!=null&&we("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Hn(e,!0)}function Df(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ft=ft.return}}function Fl(e){if(e!==ft)return!1;if(!Ae)return Df(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fs(e.type,e.memoizedProps)),n=!n),n&&Ze&&Hn(e),Df(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=nd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ze=nd(e)}else t===27?(t=Ze,Pn(e.type)?(e=gs,gs=null,Ze=e):Ze=t):Ze=ft?$t(e.stateNode.nextSibling):null;return!0}function dl(){Ze=ft=null,Ae=!1}function Iu(){var e=Un;return e!==null&&(At===null?At=e:At.push.apply(At,e),Un=null),e}function Ha(e){Un===null?Un=[e]:Un.push(e)}var Fu=T(null),ml=null,vn=null;function qn(e,t,n){E(Fu,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=Fu.current,q(Fu)}function Ku(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ju(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var g=o.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=o;for(var C=0;C<t.length;C++)if(v.context===t[C]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),Ku(s.return,n,e),a||(g=null);break e}s=v.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(u(341));g.lanes|=n,s=g.alternate,s!==null&&(s.lanes|=n),Ku(g,n,e),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===e){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Kl(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(u(387));if(g=g.memoizedProps,g!==null){var v=o.type;_t(o.pendingProps.value,g.value)||(e!==null?e.push(v):e=[v])}}else if(o===Se.current){if(g=o.alternate,g===null)throw Error(u(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}o=o.return}e!==null&&Ju(t,e,n,a),t.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){ml=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Nf(ml,e)}function er(e,t){return ml===null&&gl(e),Nf(e,t)}function Nf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vn===null){if(e===null)throw Error(u(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return n}var Y1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G1=l.unstable_scheduleCallback,V1=l.unstable_NormalPriority,et={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new Y1,data:new Map,refCount:0}}function qa(e){e.refCount--,e.refCount===0&&G1(V1,function(){e.controller.abort()})}var Ya=null,Wu=0,Jl=0,$l=null;function X1(e,t){if(Ya===null){var n=Ya=[];Wu=0,Jl=ns(),$l={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Wu++,t.then(_f,_f),t}function _f(){if(--Wu===0&&Ya!==null){$l!==null&&($l.status="fulfilled");var e=Ya;Ya=null,Jl=0,$l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Q1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Of=j.S;j.S=function(e,t){yp=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&X1(e,t),Of!==null&&Of(e,t)};var yl=T(null);function Pu(){var e=yl.current;return e!==null?e:Ve.pooledCache}function tr(e,t){t===null?E(yl,yl.current):E(yl,t.pool)}function Rf(){var e=Pu();return e===null?null:{parent:et._currentValue,pool:e}}var Wl=Error(u(460)),eo=Error(u(474)),nr=Error(u(542)),lr={then:function(){}};function Lf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hf(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hf(e),e}throw bl=t,Wl}}function xl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(bl=n,Wl):n}}var bl=null;function Uf(){if(bl===null)throw Error(u(459));var e=bl;return bl=null,e}function Hf(e){if(e===Wl||e===nr)throw Error(u(483))}var Pl=null,Ga=0;function ar(e){var t=Ga;return Ga+=1,Pl===null&&(Pl=[]),Bf(Pl,e,t)}function Va(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===k?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qf(e){function t(N,z){if(e){var _=N.deletions;_===null?(N.deletions=[z],N.flags|=16):_.push(z)}}function n(N,z){if(!e)return null;for(;z!==null;)t(N,z),z=z.sibling;return null}function a(N){for(var z=new Map;N!==null;)N.key!==null?z.set(N.key,N):z.set(N.index,N),N=N.sibling;return z}function o(N,z){return N=xn(N,z),N.index=0,N.sibling=null,N}function s(N,z,_){return N.index=_,e?(_=N.alternate,_!==null?(_=_.index,_<z?(N.flags|=67108866,z):_):(N.flags|=67108866,z)):(N.flags|=1048576,z)}function g(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function v(N,z,_,X){return z===null||z.tag!==6?(z=Gu(_,N.mode,X),z.return=N,z):(z=o(z,_),z.return=N,z)}function C(N,z,_,X){var se=_.type;return se===M?G(N,z,_.props.children,X,_.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===fe&&xl(se)===z.type)?(z=o(z,_.props),Va(z,_),z.return=N,z):(z=$i(_.type,_.key,_.props,null,N.mode,X),Va(z,_),z.return=N,z)}function O(N,z,_,X){return z===null||z.tag!==4||z.stateNode.containerInfo!==_.containerInfo||z.stateNode.implementation!==_.implementation?(z=Vu(_,N.mode,X),z.return=N,z):(z=o(z,_.children||[]),z.return=N,z)}function G(N,z,_,X,se){return z===null||z.tag!==7?(z=pl(_,N.mode,X,se),z.return=N,z):(z=o(z,_),z.return=N,z)}function Q(N,z,_){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Gu(""+z,N.mode,_),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return _=$i(z.type,z.key,z.props,null,N.mode,_),Va(_,z),_.return=N,_;case A:return z=Vu(z,N.mode,_),z.return=N,z;case fe:return z=xl(z),Q(N,z,_)}if($(z)||P(z))return z=pl(z,N.mode,_,null),z.return=N,z;if(typeof z.then=="function")return Q(N,ar(z),_);if(z.$$typeof===Y)return Q(N,er(N,z),_);ir(N,z)}return null}function R(N,z,_,X){var se=z!==null?z.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return se!==null?null:v(N,z,""+_,X);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case S:return _.key===se?C(N,z,_,X):null;case A:return _.key===se?O(N,z,_,X):null;case fe:return _=xl(_),R(N,z,_,X)}if($(_)||P(_))return se!==null?null:G(N,z,_,X,null);if(typeof _.then=="function")return R(N,z,ar(_),X);if(_.$$typeof===Y)return R(N,z,er(N,_),X);ir(N,_)}return null}function U(N,z,_,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return N=N.get(_)||null,v(z,N,""+X,se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return N=N.get(X.key===null?_:X.key)||null,C(z,N,X,se);case A:return N=N.get(X.key===null?_:X.key)||null,O(z,N,X,se);case fe:return X=xl(X),U(N,z,_,X,se)}if($(X)||P(X))return N=N.get(_)||null,G(z,N,X,se,null);if(typeof X.then=="function")return U(N,z,_,ar(X),se);if(X.$$typeof===Y)return U(N,z,_,er(z,X),se);ir(z,X)}return null}function ae(N,z,_,X){for(var se=null,Me=null,ue=z,xe=z=0,ze=null;ue!==null&&xe<_.length;xe++){ue.index>xe?(ze=ue,ue=null):ze=ue.sibling;var De=R(N,ue,_[xe],X);if(De===null){ue===null&&(ue=ze);break}e&&ue&&De.alternate===null&&t(N,ue),z=s(De,z,xe),Me===null?se=De:Me.sibling=De,Me=De,ue=ze}if(xe===_.length)return n(N,ue),Ae&&bn(N,xe),se;if(ue===null){for(;xe<_.length;xe++)ue=Q(N,_[xe],X),ue!==null&&(z=s(ue,z,xe),Me===null?se=ue:Me.sibling=ue,Me=ue);return Ae&&bn(N,xe),se}for(ue=a(ue);xe<_.length;xe++)ze=U(ue,N,xe,_[xe],X),ze!==null&&(e&&ze.alternate!==null&&ue.delete(ze.key===null?xe:ze.key),z=s(ze,z,xe),Me===null?se=ze:Me.sibling=ze,Me=ze);return e&&ue.forEach(function(al){return t(N,al)}),Ae&&bn(N,xe),se}function he(N,z,_,X){if(_==null)throw Error(u(151));for(var se=null,Me=null,ue=z,xe=z=0,ze=null,De=_.next();ue!==null&&!De.done;xe++,De=_.next()){ue.index>xe?(ze=ue,ue=null):ze=ue.sibling;var al=R(N,ue,De.value,X);if(al===null){ue===null&&(ue=ze);break}e&&ue&&al.alternate===null&&t(N,ue),z=s(al,z,xe),Me===null?se=al:Me.sibling=al,Me=al,ue=ze}if(De.done)return n(N,ue),Ae&&bn(N,xe),se;if(ue===null){for(;!De.done;xe++,De=_.next())De=Q(N,De.value,X),De!==null&&(z=s(De,z,xe),Me===null?se=De:Me.sibling=De,Me=De);return Ae&&bn(N,xe),se}for(ue=a(ue);!De.done;xe++,De=_.next())De=U(ue,N,xe,De.value,X),De!==null&&(e&&De.alternate!==null&&ue.delete(De.key===null?xe:De.key),z=s(De,z,xe),Me===null?se=De:Me.sibling=De,Me=De);return e&&ue.forEach(function(ny){return t(N,ny)}),Ae&&bn(N,xe),se}function qe(N,z,_,X){if(typeof _=="object"&&_!==null&&_.type===M&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case S:e:{for(var se=_.key;z!==null;){if(z.key===se){if(se=_.type,se===M){if(z.tag===7){n(N,z.sibling),X=o(z,_.props.children),X.return=N,N=X;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===fe&&xl(se)===z.type){n(N,z.sibling),X=o(z,_.props),Va(X,_),X.return=N,N=X;break e}n(N,z);break}else t(N,z);z=z.sibling}_.type===M?(X=pl(_.props.children,N.mode,X,_.key),X.return=N,N=X):(X=$i(_.type,_.key,_.props,null,N.mode,X),Va(X,_),X.return=N,N=X)}return g(N);case A:e:{for(se=_.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===_.containerInfo&&z.stateNode.implementation===_.implementation){n(N,z.sibling),X=o(z,_.children||[]),X.return=N,N=X;break e}else{n(N,z);break}else t(N,z);z=z.sibling}X=Vu(_,N.mode,X),X.return=N,N=X}return g(N);case fe:return _=xl(_),qe(N,z,_,X)}if($(_))return ae(N,z,_,X);if(P(_)){if(se=P(_),typeof se!="function")throw Error(u(150));return _=se.call(_),he(N,z,_,X)}if(typeof _.then=="function")return qe(N,z,ar(_),X);if(_.$$typeof===Y)return qe(N,z,er(N,_),X);ir(N,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,z!==null&&z.tag===6?(n(N,z.sibling),X=o(z,_),X.return=N,N=X):(n(N,z),X=Gu(_,N.mode,X),X.return=N,N=X),g(N)):n(N,z)}return function(N,z,_,X){try{Ga=0;var se=qe(N,z,_,X);return Pl=null,se}catch(ue){if(ue===Wl||ue===nr)throw ue;var Me=Ot(29,ue,null,N.mode);return Me.lanes=X,Me.return=N,Me}}}var vl=qf(!0),Yf=qf(!1),Yn=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function no(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Ji(e),wf(e,null,n),t}return Ki(e,a,t,n),Ji(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Dc(e,n)}}function lo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=g:s=s.next=g,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ao=!1;function Qa(){if(ao){var e=$l;if(e!==null)throw e}}function Za(e,t,n,a){ao=!1;var o=e.updateQueue;Yn=!1;var s=o.firstBaseUpdate,g=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var C=v,O=C.next;C.next=null,g===null?s=O:g.next=O,g=C;var G=e.alternate;G!==null&&(G=G.updateQueue,v=G.lastBaseUpdate,v!==g&&(v===null?G.firstBaseUpdate=O:v.next=O,G.lastBaseUpdate=C))}if(s!==null){var Q=o.baseState;g=0,G=O=C=null,v=s;do{var R=v.lane&-536870913,U=R!==v.lane;if(U?(Ce&R)===R:(a&R)===R){R!==0&&R===Jl&&(ao=!0),G!==null&&(G=G.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ae=e,he=v;R=t;var qe=n;switch(he.tag){case 1:if(ae=he.payload,typeof ae=="function"){Q=ae.call(qe,Q,R);break e}Q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=he.payload,R=typeof ae=="function"?ae.call(qe,Q,R):ae,R==null)break e;Q=y({},Q,R);break e;case 2:Yn=!0}}R=v.callback,R!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[R]:U.push(R))}else U={lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},G===null?(O=G=U,C=Q):G=G.next=U,g|=R;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;U=v,v=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);G===null&&(C=Q),o.baseState=C,o.firstBaseUpdate=O,o.lastBaseUpdate=G,s===null&&(o.shared.lanes=0),Fn|=g,e.lanes=g,e.memoizedState=Q}}function Gf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Vf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Gf(n[e],t)}var ea=T(null),rr=T(0);function Xf(e,t){e=Mn,E(rr,e),E(ea,t),Mn=e|t.baseLanes}function io(){E(rr,Mn),E(ea,ea.current)}function ro(){Mn=rr.current,q(ea),q(rr)}var Rt=T(null),Jt=null;function Xn(e){var t=e.alternate;E(We,We.current&1),E(Rt,e),Jt===null&&(t===null||ea.current!==null||t.memoizedState!==null)&&(Jt=e)}function uo(e){E(We,We.current),E(Rt,e),Jt===null&&(Jt=e)}function Qf(e){e.tag===22?(E(We,We.current),E(Rt,e),Jt===null&&(Jt=e)):Qn()}function Qn(){E(We,We.current),E(Rt,Rt.current)}function Lt(e){q(Rt),Jt===e&&(Jt=null),q(We)}var We=T(0);function ur(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ds(n)||ms(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,ye=null,Ue=null,tt=null,or=!1,ta=!1,Sl=!1,sr=0,Ia=0,na=null,Z1=0;function Je(){throw Error(u(321))}function oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function so(e,t,n,a,o,s){return kn=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Ah:To,Sl=!1,s=n(a,o),Sl=!1,ta&&(s=If(t,n,a,o)),Zf(e),s}function Zf(e){j.H=Ja;var t=Ue!==null&&Ue.next!==null;if(kn=0,tt=Ue=ye=null,or=!1,Ia=0,na=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&Pi(e)&&(nt=!0))}function If(e,t,n,a){ye=e;var o=0;do{if(ta&&(na=null),Ia=0,ta=!1,25<=o)throw Error(u(301));if(o+=1,tt=Ue=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}j.H=jh,s=t(n,a)}while(ta);return s}function I1(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?Fa(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ye.flags|=1024),t}function co(){var e=sr!==0;return sr=0,e}function fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ho(e){if(or){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}or=!1}kn=0,tt=Ue=ye=null,ta=!1,Ia=sr=0,na=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ye.memoizedState=tt=e:tt=tt.next=e,tt}function Pe(){if(Ue===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=tt===null?ye.memoizedState:tt.next;if(t!==null)tt=t,Ue=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tt===null?ye.memoizedState=tt=e:tt=tt.next=e}return tt}function cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(e){var t=Ia;return Ia+=1,na===null&&(na=[]),e=Bf(na,e,t),t=ye,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Ah:To),e}function fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fa(e);if(e.$$typeof===Y)return ht(e)}throw Error(u(438,String(e)))}function po(e){var t=null,n=ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=cr(),ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=B;return t.index++,n}function En(e,t){return typeof t=="function"?t(e):t}function hr(e){var t=Pe();return mo(t,Ue,e)}function mo(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var g=o.next;o.next=s.next,s.next=g}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var v=g=null,C=null,O=t,G=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(Ce&Q)===Q:(kn&Q)===Q){var R=O.revertLane;if(R===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===Jl&&(G=!0);else if((kn&R)===R){O=O.next,R===Jl&&(G=!0);continue}else Q={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},C===null?(v=C=Q,g=s):C=C.next=Q,ye.lanes|=R,Fn|=R;Q=O.action,Sl&&n(s,Q),s=O.hasEagerState?O.eagerState:n(s,Q)}else R={lane:Q,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},C===null?(v=C=R,g=s):C=C.next=R,ye.lanes|=Q,Fn|=Q;O=O.next}while(O!==null&&O!==t);if(C===null?g=s:C.next=v,!_t(s,e.memoizedState)&&(nt=!0,G&&(n=$l,n!==null)))throw n;e.memoizedState=s,e.baseState=g,e.baseQueue=C,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function go(e){var t=Pe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var g=o=o.next;do s=e(s,g.action),g=g.next;while(g!==o);_t(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Ff(e,t,n){var a=ye,o=Pe(),s=Ae;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var g=!_t((Ue||o).memoizedState,n);if(g&&(o.memoizedState=n,nt=!0),o=o.queue,bo($f.bind(null,a,o,e),[e]),o.getSnapshot!==t||g||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,la(9,{destroy:void 0},Jf.bind(null,a,o,n,t),null),Ve===null)throw Error(u(349));s||(kn&127)!==0||Kf(a,t,n)}return n}function Kf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t=cr(),ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jf(e,t,n,a){t.value=n,t.getSnapshot=a,Wf(t)&&Pf(e)}function $f(e,t,n){return n(function(){Wf(t)&&Pf(e)})}function Wf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Pf(e){var t=hl(e,2);t!==null&&jt(t,e,2)}function yo(e){var t=vt();if(typeof e=="function"){var n=e;if(e=n(),Sl){kt(!0);try{n()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t}function eh(e,t,n,a){return e.baseState=n,mo(e,Ue,typeof a=="function"?a:En)}function F1(e,t,n,a,o){if(mr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){s.listeners.push(g)}};j.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,th(t,s)):(s.next=n.next,t.pending=n.next=s)}}function th(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=j.T,g={};j.T=g;try{var v=n(o,a),C=j.S;C!==null&&C(g,v),nh(e,t,v)}catch(O){xo(e,t,O)}finally{s!==null&&g.types!==null&&(s.types=g.types),j.T=s}}else try{s=n(o,a),nh(e,t,s)}catch(O){xo(e,t,O)}}function nh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){lh(e,t,a)},function(a){return xo(e,t,a)}):lh(e,t,n)}function lh(e,t,n){t.status="fulfilled",t.value=n,ah(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,th(e,n)))}function xo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,ah(t),t=t.next;while(t!==a)}e.action=null}function ah(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ih(e,t){return t}function rh(e,t){if(Ae){var n=Ve.formState;if(n!==null){e:{var a=ye;if(Ae){if(Ze){t:{for(var o=Ze,s=Kt;o.nodeType!==8;){if(!s){o=null;break t}if(o=$t(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ze=$t(o.nextSibling),a=o.data==="F!";break e}}Hn(a)}a=!1}a&&(t=n[0])}}return n=vt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ih,lastRenderedState:t},n.queue=a,n=Th.bind(null,ye,a),a.dispatch=n,a=yo(!1),s=wo.bind(null,ye,!1,a.queue),a=vt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=F1.bind(null,ye,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function uh(e){var t=Pe();return oh(t,Ue,e)}function oh(e,t,n){if(t=mo(e,t,ih)[0],e=hr(En)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fa(t)}catch(g){throw g===Wl?nr:g}else a=t;t=Pe();var o=t.queue,s=o.dispatch;return n!==t.memoizedState&&(ye.flags|=2048,la(9,{destroy:void 0},K1.bind(null,o,n),null)),[a,s,e]}function K1(e,t){e.action=t}function sh(e){var t=Pe(),n=Ue;if(n!==null)return oh(t,n,e);Pe(),t=t.memoizedState,n=Pe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function la(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ye.updateQueue,t===null&&(t=cr(),ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ch(){return Pe().memoizedState}function pr(e,t,n,a){var o=vt();ye.flags|=e,o.memoizedState=la(1|t,{destroy:void 0},n,a===void 0?null:a)}function dr(e,t,n,a){var o=Pe();a=a===void 0?null:a;var s=o.memoizedState.inst;Ue!==null&&a!==null&&oo(a,Ue.memoizedState.deps)?o.memoizedState=la(t,s,n,a):(ye.flags|=e,o.memoizedState=la(1|t,s,n,a))}function fh(e,t){pr(8390656,8,e,t)}function bo(e,t){dr(2048,8,e,t)}function J1(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=cr(),ye.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hh(e){var t=Pe().memoizedState;return J1({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function ph(e,t){return dr(4,2,e,t)}function dh(e,t){return dr(4,4,e,t)}function mh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gh(e,t,n){n=n!=null?n.concat([e]):null,dr(4,4,mh.bind(null,t,e),n)}function vo(){}function yh(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&oo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function xh(e,t){var n=Pe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&oo(t,a[1]))return a[0];if(a=e(),Sl){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[a,t],a}function So(e,t,n){return n===void 0||(kn&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=bp(),ye.lanes|=e,Fn|=e,n)}function bh(e,t,n,a){return _t(n,t)?n:ea.current!==null?(e=So(e,n,a),_t(e,t)||(nt=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(Ce&261930)===0?(nt=!0,e.memoizedState=n):(e=bp(),ye.lanes|=e,Fn|=e,t)}function vh(e,t,n,a,o){var s=Z.p;Z.p=s!==0&&8>s?s:8;var g=j.T,v={};j.T=v,wo(e,!1,t,n);try{var C=o(),O=j.S;if(O!==null&&O(v,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=Q1(C,a);Ka(e,t,G,Ht(e))}else Ka(e,t,a,Ht(e))}catch(Q){Ka(e,t,{then:function(){},status:"rejected",reason:Q},Ht())}finally{Z.p=s,g!==null&&v.types!==null&&(g.types=v.types),j.T=g}}function $1(){}function ko(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=Sh(e).queue;vh(e,o,t,te,n===null?$1:function(){return kh(e),n(a)})}function Sh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kh(e){var t=Sh(e);t.next===null&&(t=e.alternate.memoizedState),Ka(e,t.next.queue,{},Ht())}function Eo(){return ht(hi)}function Eh(){return Pe().memoizedState}function wh(){return Pe().memoizedState}function W1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Gn(n);var a=Vn(t,e,n);a!==null&&(jt(a,t,n),Xa(a,t,n)),t={cache:$u()},e.payload=t;return}t=t.return}}function P1(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mr(e)?Ch(t,n):(n=qu(e,t,n,a),n!==null&&(jt(n,e,a),zh(n,t,a)))}function Th(e,t,n){var a=Ht();Ka(e,t,n,a)}function Ka(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mr(e))Ch(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var g=t.lastRenderedState,v=s(g,n);if(o.hasEagerState=!0,o.eagerState=v,_t(v,g))return Ki(e,t,o,0),Ve===null&&Fi(),!1}catch{}if(n=qu(e,t,o,a),n!==null)return jt(n,e,a),zh(n,t,a),!0}return!1}function wo(e,t,n,a){if(a={lane:2,revertLane:ns(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mr(e)){if(t)throw Error(u(479))}else t=qu(e,n,a,2),t!==null&&jt(t,e,2)}function mr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Ch(e,t){ta=or=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Dc(e,n)}}var Ja={readContext:ht,use:fr,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Ja.useEffectEvent=Je;var Ah={readContext:ht,use:fr,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:fh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,pr(4194308,4,mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pr(4194308,4,e,t)},useInsertionEffect:function(e,t){pr(4,2,e,t)},useMemo:function(e,t){var n=vt();t=t===void 0?null:t;var a=e();if(Sl){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=vt();if(n!==void 0){var o=n(t);if(Sl){kt(!0);try{n(t)}finally{kt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=P1.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,n=Th.bind(null,ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vo,useDeferredValue:function(e,t){var n=vt();return So(n,e,t)},useTransition:function(){var e=yo(!1);return e=vh.bind(null,ye,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ye,o=vt();if(Ae){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ve===null)throw Error(u(349));(Ce&127)!==0||Kf(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,fh($f.bind(null,a,s,e),[e]),a.flags|=2048,la(9,{destroy:void 0},Jf.bind(null,a,s,n,t),null),n},useId:function(){var e=vt(),t=Ve.identifierPrefix;if(Ae){var n=un,a=rn;n=(a&~(1<<32-Ge(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Z1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Eo,useFormState:rh,useActionState:rh,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wo.bind(null,ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:po,useCacheRefresh:function(){return vt().memoizedState=W1.bind(null,ye)},useEffectEvent:function(e){var t=vt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},To={readContext:ht,use:fr,useCallback:yh,useContext:ht,useEffect:bo,useImperativeHandle:gh,useInsertionEffect:ph,useLayoutEffect:dh,useMemo:xh,useReducer:hr,useRef:ch,useState:function(){return hr(En)},useDebugValue:vo,useDeferredValue:function(e,t){var n=Pe();return bh(n,Ue.memoizedState,e,t)},useTransition:function(){var e=hr(En)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Ff,useId:Eh,useHostTransitionStatus:Eo,useFormState:uh,useActionState:uh,useOptimistic:function(e,t){var n=Pe();return eh(n,Ue,e,t)},useMemoCache:po,useCacheRefresh:wh};To.useEffectEvent=hh;var jh={readContext:ht,use:fr,useCallback:yh,useContext:ht,useEffect:bo,useImperativeHandle:gh,useInsertionEffect:ph,useLayoutEffect:dh,useMemo:xh,useReducer:go,useRef:ch,useState:function(){return go(En)},useDebugValue:vo,useDeferredValue:function(e,t){var n=Pe();return Ue===null?So(n,e,t):bh(n,Ue.memoizedState,e,t)},useTransition:function(){var e=go(En)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Ff,useId:Eh,useHostTransitionStatus:Eo,useFormState:sh,useActionState:sh,useOptimistic:function(e,t){var n=Pe();return Ue!==null?eh(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:po,useCacheRefresh:wh};jh.useEffectEvent=hh;function Co(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Gn(a);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(jt(t,e,a),Xa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Gn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,a),t!==null&&(jt(t,e,a),Xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Gn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(jt(t,e,n),Xa(t,e,n))}};function Mh(e,t,n,a,o,s,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,g):t.prototype&&t.prototype.isPureReactComponent?!La(n,a)||!La(o,s):!0}function Dh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function kl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Nh(e){Ii(e)}function _h(e){console.error(e)}function Oh(e){Ii(e)}function gr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Rh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Ao(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){gr(e,t)},n}function Lh(e){return e=Gn(e),e.tag=3,e}function Bh(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Rh(t,n,a)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Rh(t,n,a),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function e0(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Kl(t,n,o,!0),n=Rt.current,n!==null){switch(n.tag){case 31:case 13:return Jt===null?Ar():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===lr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Po(e,a,o)),!1;case 22:return n.flags|=65536,a===lr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Po(e,a,o)),!1}throw Error(u(435,n.tag))}return Po(e,a,o),Ar(),!1}if(Ae)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Zu&&(e=Error(u(422),{cause:a}),Ha(Zt(e,n)))):(a!==Zu&&(t=Error(u(423),{cause:a}),Ha(Zt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Zt(a,n),o=Ao(e.stateNode,a,o),lo(e,o),$e!==4&&($e=2)),!1;var s=Error(u(520),{cause:a});if(s=Zt(s,n),ai===null?ai=[s]:ai.push(s),$e!==4&&($e=2),t===null)return!0;a=Zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Ao(n.stateNode,a,e),lo(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Kn===null||!Kn.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Lh(o),Bh(o,e,n,a),lo(n,o),!1}n=n.return}while(n!==null);return!1}var jo=Error(u(461)),nt=!1;function pt(e,t,n,a){t.child=e===null?Yf(t,null,n,a):vl(t,e.child,n,a)}function Uh(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var g={};for(var v in a)v!=="ref"&&(g[v]=a[v])}else g=a;return gl(t),a=so(e,t,n,g,s,o),v=co(),e!==null&&!nt?(fo(e,t,o),wn(e,t,o)):(Ae&&v&&Xu(t),t.flags|=1,pt(e,t,a,o),t.child)}function Hh(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Yu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,qh(e,t,s,a,o)):(e=$i(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Bo(e,o)){var g=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(g,a)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=xn(s,a),e.ref=t.ref,e.return=t,t.child=e}function qh(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(La(s,a)&&e.ref===t.ref)if(nt=!1,t.pendingProps=a=s,Bo(e,o))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,wn(e,t,o)}return Mo(e,t,n,a,o)}function Yh(e,t,n,a){var o=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~s}else a=0,t.child=null;return Gh(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&tr(t,s!==null?s.cachePool:null),s!==null?Xf(t,s):io(),Qf(t);else return a=t.lanes=536870912,Gh(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(tr(t,s.cachePool),Xf(t,s),Qn(),t.memoizedState=null):(e!==null&&tr(t,null),io(),Qn());return pt(e,t,o,n),t.child}function $a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gh(e,t,n,a,o){var s=Pu();return s=s===null?null:{parent:et._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&tr(t,null),io(),Qf(t),e!==null&&Kl(e,t,a,!0),t.childLanes=o,null}function yr(e,t){return t=br({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Vh(e,t,n){return vl(t,e.child,null,n),e=yr(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function t0(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(a.mode==="hidden")return e=yr(t,a),t.lanes=536870912,$a(null,e);if(uo(t),(e=Ze)?(e=td(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Cf(e),n.return=t,t.child=n,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return yr(t,a)}var s=e.memoizedState;if(s!==null){var g=s.dehydrated;if(uo(t),o)if(t.flags&256)t.flags&=-257,t=Vh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(nt||Kl(e,t,n,!1),o=(n&e.childLanes)!==0,nt||o){if(a=Ve,a!==null&&(g=Nc(a,n),g!==0&&g!==s.retryLane))throw s.retryLane=g,hl(e,g),jt(a,e,g),jo;Ar(),t=Vh(e,t,n)}else e=s.treeContext,Ze=$t(g.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&jf(t,e),t=yr(t,a),t.flags|=4096;return t}return e=xn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Mo(e,t,n,a,o){return gl(t),n=so(e,t,n,a,void 0,o),a=co(),e!==null&&!nt?(fo(e,t,o),wn(e,t,o)):(Ae&&a&&Xu(t),t.flags|=1,pt(e,t,n,o),t.child)}function Xh(e,t,n,a,o,s){return gl(t),t.updateQueue=null,n=If(t,a,n,o),Zf(e),a=co(),e!==null&&!nt?(fo(e,t,s),wn(e,t,s)):(Ae&&a&&Xu(t),t.flags|=1,pt(e,t,n,s),t.child)}function Qh(e,t,n,a,o){if(gl(t),t.stateNode===null){var s=Ql,g=n.contextType;typeof g=="object"&&g!==null&&(s=ht(g)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},to(t),g=n.contextType,s.context=typeof g=="object"&&g!==null?ht(g):Ql,s.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Co(t,n,g,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(g=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),g!==s.state&&zo.enqueueReplaceState(s,s.state,null),Za(t,a,s,o),Qa(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,C=kl(n,v);s.props=C;var O=s.context,G=n.contextType;g=Ql,typeof G=="object"&&G!==null&&(g=ht(G));var Q=n.getDerivedStateFromProps;G=typeof Q=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,G||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||O!==g)&&Dh(t,s,a,g),Yn=!1;var R=t.memoizedState;s.state=R,Za(t,a,s,o),Qa(),O=t.memoizedState,v||R!==O||Yn?(typeof Q=="function"&&(Co(t,n,Q,a),O=t.memoizedState),(C=Yn||Mh(t,n,C,a,R,O,g))?(G||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),s.props=a,s.state=O,s.context=g,a=C):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,no(e,t),g=t.memoizedProps,G=kl(n,g),s.props=G,Q=t.pendingProps,R=s.context,O=n.contextType,C=Ql,typeof O=="object"&&O!==null&&(C=ht(O)),v=n.getDerivedStateFromProps,(O=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g!==Q||R!==C)&&Dh(t,s,a,C),Yn=!1,R=t.memoizedState,s.state=R,Za(t,a,s,o),Qa();var U=t.memoizedState;g!==Q||R!==U||Yn||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof v=="function"&&(Co(t,n,v,a),U=t.memoizedState),(G=Yn||Mh(t,n,G,a,R,U,C)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,U,C),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,U,C)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=U),s.props=a,s.state=U,s.context=C,a=G):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,xr(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=vl(t,e.child,null,o),t.child=vl(t,null,n,o)):pt(e,t,n,o),t.memoizedState=s.state,e=t.child):e=wn(e,t,o),e}function Zh(e,t,n,a){return dl(),t.flags|=256,pt(e,t,n,a),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(e){return{baseLanes:e,cachePool:Rf()}}function _o(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function Ih(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,g;if((g=s)||(g=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),g&&(o=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(o?Xn(t):Qn(),(e=Ze)?(e=td(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Cf(e),n.return=t,t.child=n,ft=t,Ze=null)):e=null,e===null)throw Hn(t);return ms(e)?t.lanes=32:t.lanes=536870912,null}var v=a.children;return a=a.fallback,o?(Qn(),o=t.mode,v=br({mode:"hidden",children:v},o),a=pl(a,o,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,a=t.child,a.memoizedState=No(n),a.childLanes=_o(e,g,n),t.memoizedState=Do,$a(null,a)):(Xn(t),Oo(t,v))}var C=e.memoizedState;if(C!==null&&(v=C.dehydrated,v!==null)){if(s)t.flags&256?(Xn(t),t.flags&=-257,t=Ro(e,t,n)):t.memoizedState!==null?(Qn(),t.child=e.child,t.flags|=128,t=null):(Qn(),v=a.fallback,o=t.mode,a=br({mode:"visible",children:a.children},o),v=pl(v,o,n,null),v.flags|=2,a.return=t,v.return=t,a.sibling=v,t.child=a,vl(t,e.child,null,n),a=t.child,a.memoizedState=No(n),a.childLanes=_o(e,g,n),t.memoizedState=Do,t=$a(null,a));else if(Xn(t),ms(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var O=g.dgst;g=O,a=Error(u(419)),a.stack="",a.digest=g,Ha({value:a,source:null,stack:null}),t=Ro(e,t,n)}else if(nt||Kl(e,t,n,!1),g=(n&e.childLanes)!==0,nt||g){if(g=Ve,g!==null&&(a=Nc(g,n),a!==0&&a!==C.retryLane))throw C.retryLane=a,hl(e,a),jt(g,e,a),jo;ds(v)||Ar(),t=Ro(e,t,n)}else ds(v)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ze=$t(v.nextSibling),ft=t,Ae=!0,Un=null,Kt=!1,e!==null&&jf(t,e),t=Oo(t,a.children),t.flags|=4096);return t}return o?(Qn(),v=a.fallback,o=t.mode,C=e.child,O=C.sibling,a=xn(C,{mode:"hidden",children:a.children}),a.subtreeFlags=C.subtreeFlags&65011712,O!==null?v=xn(O,v):(v=pl(v,o,n,null),v.flags|=2),v.return=t,a.return=t,a.sibling=v,t.child=a,$a(null,a),a=t.child,v=e.child.memoizedState,v===null?v=No(n):(o=v.cachePool,o!==null?(C=et._currentValue,o=o.parent!==C?{parent:C,pool:C}:o):o=Rf(),v={baseLanes:v.baseLanes|n,cachePool:o}),a.memoizedState=v,a.childLanes=_o(e,g,n),t.memoizedState=Do,$a(e.child,a)):(Xn(t),n=e.child,e=n.sibling,n=xn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Oo(e,t){return t=br({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function br(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Ro(e,t,n){return vl(t,e.child,null,n),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ku(e.return,t,n)}function Lo(e,t,n,a,o,s){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:s}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=a,g.tail=n,g.tailMode=o,g.treeForkCount=s)}function Kh(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;a=a.children;var g=We.current,v=(g&2)!==0;if(v?(g=g&1|2,t.flags|=128):g&=1,E(We,g),pt(e,t,a,n),a=Ae?Ua:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fh(e,n,t);else if(e.tag===19)Fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ur(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Lo(t,!1,o,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ur(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Lo(t,!0,n,null,s,a);break;case"together":Lo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Kl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function n0(e,t,n){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),qn(t,et,e.memoizedState.cache),dl();break;case 27:case 5:Gt(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Xn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ih(e,t,n):(Xn(t),e=wn(e,t,n),e!==null?e.sibling:null);Xn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Kl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Kh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),E(We,We.current),a)break;return null;case 22:return t.lanes=0,Yh(e,t,n,t.pendingProps);case 24:qn(t,et,e.memoizedState.cache)}return wn(e,t,n)}function Jh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!Bo(e,n)&&(t.flags&128)===0)return nt=!1,n0(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ae&&(t.flags&1048576)!==0&&Af(t,Ua,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=xl(t.elementType),t.type=e,typeof e=="function")Yu(e)?(a=kl(e,a),t.tag=1,t=Qh(null,t,e,a,n)):(t.tag=0,t=Mo(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===re){t.tag=11,t=Uh(null,t,e,a,n);break e}else if(o===J){t.tag=14,t=Hh(null,t,e,a,n);break e}}throw t=ie(e)||e,Error(u(306,t,""))}}return t;case 0:return Mo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=kl(a,t.pendingProps),Qh(e,t,a,o,n);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;o=s.element,no(e,t),Za(t,a,null,n);var g=t.memoizedState;if(a=g.cache,qn(t,et,a),a!==s.cache&&Ju(t,[et],n,!0),Qa(),a=g.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Zh(e,t,a,n);break e}else if(a!==o){o=Zt(Error(u(424)),t),Ha(o),t=Zh(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=$t(e.firstChild),ft=t,Ae=!0,Un=null,Kt=!0,n=Yf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dl(),a===o){t=wn(e,t,n);break e}pt(e,t,a,n)}t=t.child}return t;case 26:return xr(e,t),e===null?(n=ud(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,a=Rr(oe.current).createElement(n),a[ct]=t,a[Et]=e,dt(a,n,e),ot(a),t.stateNode=a):t.memoizedState=ud(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gt(t),e===null&&Ae&&(a=t.stateNode=ad(t.type,t.pendingProps,oe.current),ft=t,Kt=!0,o=Ze,Pn(t.type)?(gs=o,Ze=$t(a.firstChild)):Ze=o),pt(e,t,t.pendingProps.children,n),xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((o=a=Ze)&&(a=N0(a,t.type,t.pendingProps,Kt),a!==null?(t.stateNode=a,ft=t,Ze=$t(a.firstChild),Kt=!1,o=!0):o=!1),o||Hn(t)),Gt(t),o=t.type,s=t.pendingProps,g=e!==null?e.memoizedProps:null,a=s.children,fs(o,s)?a=null:g!==null&&fs(o,g)&&(t.flags|=32),t.memoizedState!==null&&(o=so(e,t,I1,null,null,n),hi._currentValue=o),xr(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Ae&&((e=n=Ze)&&(n=_0(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,ft=t,Ze=null,e=!0):e=!1),e||Hn(t)),null;case 13:return Ih(e,t,n);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vl(t,null,a,n):pt(e,t,a,n),t.child;case 11:return Uh(e,t,t.type,t.pendingProps,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,qn(t,t.type,a.value),pt(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,gl(t),o=ht(o),a=a(o),t.flags|=1,pt(e,t,a,n),t.child;case 14:return Hh(e,t,t.type,t.pendingProps,n);case 15:return qh(e,t,t.type,t.pendingProps,n);case 19:return Kh(e,t,n);case 31:return t0(e,t,n);case 22:return Yh(e,t,n,t.pendingProps);case 24:return gl(t),a=ht(et),e===null?(o=Pu(),o===null&&(o=Ve,s=$u(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},to(t),qn(t,et,o)):((e.lanes&n)!==0&&(no(e,t),Za(t,null,null,n),Qa()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),qn(t,et,a)):(a=s.cache,qn(t,et,a),a!==o.cache&&Ju(t,[et],n,!0))),pt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Tn(e){e.flags|=4}function Uo(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Ep())e.flags|=8192;else throw bl=lr,eo}else e.flags&=-16777217}function $h(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hd(t))if(Ep())e.flags|=8192;else throw bl=lr,eo}function vr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jc():536870912,e.lanes|=t,ua|=t)}function Wa(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function l0(e,t,n){var a=t.pendingProps;switch(Qu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(et),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Iu())),Ie(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(Tn(t),s!==null?(Ie(t),$h(t,s)):(Ie(t),Uo(t,o,null,a,n))):s?s!==e.memoizedState?(Tn(t),Ie(t),$h(t,s)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Tn(t),Ie(t),Uo(t,o,e,a,n)),null;case 27:if(hn(t),n=oe.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ie(t),null}e=K.current,Fl(t)?Mf(t):(e=ad(o,a,n),t.stateNode=e,Tn(t))}return Ie(t),null;case 5:if(hn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ie(t),null}if(s=K.current,Fl(t))Mf(t);else{var g=Rr(oe.current);switch(s){case 1:s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=g.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?g.createElement("select",{is:a.is}):g.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?g.createElement(o,{is:a.is}):g.createElement(o)}}s[ct]=t,s[Et]=a;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)s.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=s;e:switch(dt(s,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Tn(t)}}return Ie(t),Uo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=oe.current,Fl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=ft,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ip(e.nodeValue,n)),e||Hn(t,!0)}else e=Rr(e).createTextNode(a),e[ct]=t,t.stateNode=e}return Ie(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Fl(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ct]=t}else dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else n=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ie(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Fl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[ct]=t}else dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else o=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vr(t,t.updateQueue),Ie(t),null);case 4:return Be(),e===null&&rs(t.stateNode.containerInfo),Ie(t),null;case 10:return Sn(t.type),Ie(t),null;case 19:if(q(We),a=t.memoizedState,a===null)return Ie(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)Wa(a,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ur(e),s!==null){for(t.flags|=128,Wa(a,!1),e=s.updateQueue,t.updateQueue=e,vr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Tf(n,e),n=n.sibling;return E(We,We.current&1|2),Ae&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xt()>Tr&&(t.flags|=128,o=!0,Wa(a,!1),t.lanes=4194304)}else{if(!o)if(e=ur(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,vr(t,e),Wa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ae)return Ie(t),null}else 2*xt()-a.renderingStartTime>Tr&&n!==536870912&&(t.flags|=128,o=!0,Wa(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xt(),e.sibling=null,n=We.current,E(We,o?n&1|2:n&1),Ae&&bn(t,a.treeForkCount),e):(Ie(t),null);case 22:case 23:return Lt(t),ro(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),n=t.updateQueue,n!==null&&vr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&q(yl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(et),Ie(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function a0(e,t){switch(Qu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(et),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hn(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(u(340));dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(We),null;case 4:return Be(),null;case 10:return Sn(t.type),null;case 22:case 23:return Lt(t),ro(),e!==null&&q(yl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(et),null;case 25:return null;default:return null}}function Wh(e,t){switch(Qu(t),t.tag){case 3:Sn(et),Be();break;case 26:case 27:case 5:hn(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:q(We);break;case 10:Sn(t.type);break;case 22:case 23:Lt(t),ro(),e!==null&&q(yl);break;case 24:Sn(et)}}function Pa(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,g=n.inst;a=s(),g.destroy=a}n=n.next}while(n!==o)}}catch(v){Le(t,t.return,v)}}function Zn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var g=a.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,o=t;var C=n,O=v;try{O()}catch(G){Le(o,C,G)}}}a=a.next}while(a!==s)}}catch(G){Le(t,t.return,G)}}function Ph(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Vf(t,n)}catch(a){Le(e,e.return,a)}}}function ep(e,t,n){n.props=kl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Le(e,t,a)}}function ei(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Le(e,t,o)}}function on(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Le(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Le(e,t,o)}else n.current=null}function tp(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Le(e,e.return,o)}}function Ho(e,t,n){try{var a=e.stateNode;C0(a,e.type,n,t),a[Et]=t}catch(o){Le(e,e.return,o)}}function np(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Sr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Sr(e,t,n),e=e.sibling;e!==null;)Sr(e,t,n),e=e.sibling}function lp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);dt(t,a,n),t[ct]=e,t[Et]=n}catch(s){Le(e,e.return,s)}}var Cn=!1,lt=!1,Go=!1,ap=typeof WeakSet=="function"?WeakSet:Set,st=null;function i0(e,t){if(e=e.containerInfo,ss=Gr,e=gf(e),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var g=0,v=-1,C=-1,O=0,G=0,Q=e,R=null;t:for(;;){for(var U;Q!==n||o!==0&&Q.nodeType!==3||(v=g+o),Q!==s||a!==0&&Q.nodeType!==3||(C=g+a),Q.nodeType===3&&(g+=Q.nodeValue.length),(U=Q.firstChild)!==null;)R=Q,Q=U;for(;;){if(Q===e)break t;if(R===n&&++O===o&&(v=g),R===s&&++G===a&&(C=g),(U=Q.nextSibling)!==null)break;Q=R,R=Q.parentNode}Q=U}n=v===-1||C===-1?null:{start:v,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(cs={focusedElem:e,selectionRange:n},Gr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var ae=kl(n.type,o);e=a.getSnapshotBeforeUpdate(ae,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(he){Le(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ps(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ps(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function ip(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:An(e,n),a&4&&Pa(5,n);break;case 1:if(An(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Le(n,n.return,g)}else{var o=kl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Le(n,n.return,g)}}a&64&&Ph(n),a&512&&ei(n,n.return);break;case 3:if(An(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Vf(e,t)}catch(g){Le(n,n.return,g)}}break;case 27:t===null&&a&4&&lp(n);case 26:case 5:An(e,n),t===null&&a&4&&tp(n),a&512&&ei(n,n.return);break;case 12:An(e,n);break;case 31:An(e,n),a&4&&op(e,n);break;case 13:An(e,n),a&4&&sp(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=d0.bind(null,n),O0(e,n))));break;case 22:if(a=n.memoizedState!==null||Cn,!a){t=t!==null&&t.memoizedState!==null||lt,o=Cn;var s=lt;Cn=a,(lt=t)&&!s?jn(e,n,(n.subtreeFlags&8772)!==0):An(e,n),Cn=o,lt=s}break;case 30:break;default:An(e,n)}}function rp(e){var t=e.alternate;t!==null&&(e.alternate=null,rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,Tt=!1;function zn(e,t,n){for(n=n.child;n!==null;)up(e,t,n),n=n.sibling}function up(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(bt,n)}catch{}switch(n.tag){case 26:lt||on(n,t),zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:lt||on(n,t);var a=Fe,o=Tt;Pn(n.type)&&(Fe=n.stateNode,Tt=!1),zn(e,t,n),si(n.stateNode),Fe=a,Tt=o;break;case 5:lt||on(n,t);case 6:if(a=Fe,o=Tt,Fe=null,zn(e,t,n),Fe=a,Tt=o,Fe!==null)if(Tt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(s){Le(n,t,s)}else try{Fe.removeChild(n.stateNode)}catch(s){Le(n,t,s)}break;case 18:Fe!==null&&(Tt?(e=Fe,Pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ma(e)):Pp(Fe,n.stateNode));break;case 4:a=Fe,o=Tt,Fe=n.stateNode.containerInfo,Tt=!0,zn(e,t,n),Fe=a,Tt=o;break;case 0:case 11:case 14:case 15:Zn(2,n,t),lt||Zn(4,n,t),zn(e,t,n);break;case 1:lt||(on(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ep(n,t,a)),zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:lt=(a=lt)||n.memoizedState!==null,zn(e,t,n),lt=a;break;default:zn(e,t,n)}}function op(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ma(e)}catch(n){Le(t,t.return,n)}}}function sp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ma(e)}catch(n){Le(t,t.return,n)}}function r0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ap),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ap),t;default:throw Error(u(435,e.tag))}}function kr(e,t){var n=r0(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=m0.bind(null,e,a);a.then(o,o)}})}function Ct(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,g=t,v=g;e:for(;v!==null;){switch(v.tag){case 27:if(Pn(v.type)){Fe=v.stateNode,Tt=!1;break e}break;case 5:Fe=v.stateNode,Tt=!1;break e;case 3:case 4:Fe=v.stateNode.containerInfo,Tt=!0;break e}v=v.return}if(Fe===null)throw Error(u(160));up(s,g,o),Fe=null,Tt=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cp(t,e),t=t.sibling}var nn=null;function cp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),zt(e),a&4&&(Zn(3,e,e.return),Pa(3,e),Zn(5,e,e.return));break;case 1:Ct(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),a&64&&Cn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=nn;if(Ct(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[za]||s[ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),dt(s,a,n),s[ct]=e,ot(s),a=s;break e;case"link":var g=cd("link","href",o).get(a+(n.href||""));if(g){for(var v=0;v<g.length;v++)if(s=g[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(v,1);break t}}s=o.createElement(a),dt(s,a,n),o.head.appendChild(s);break;case"meta":if(g=cd("meta","content",o).get(a+(n.content||""))){for(v=0;v<g.length;v++)if(s=g[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(v,1);break t}}s=o.createElement(a),dt(s,a,n),o.head.appendChild(s);break;default:throw Error(u(468,a))}s[ct]=e,ot(s),a=s}e.stateNode=a}else fd(o,e.type,e.stateNode);else e.stateNode=sd(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?fd(o,e.type,e.stateNode):sd(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ho(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ct(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),n!==null&&a&4&&Ho(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ct(t,e),zt(e),a&512&&(lt||n===null||on(n,n.return)),e.flags&32){o=e.stateNode;try{Ul(o,"")}catch(ae){Le(e,e.return,ae)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Ho(e,o,n!==null?n.memoizedProps:o)),a&1024&&(Go=!0);break;case 6:if(Ct(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ae){Le(e,e.return,ae)}}break;case 3:if(Ur=null,o=nn,nn=Lr(t.containerInfo),Ct(t,e),nn=o,zt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(t.containerInfo)}catch(ae){Le(e,e.return,ae)}Go&&(Go=!1,fp(e));break;case 4:a=nn,nn=Lr(e.stateNode.containerInfo),Ct(t,e),zt(e),nn=a;break;case 12:Ct(t,e),zt(e);break;case 31:Ct(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,kr(e,a)));break;case 13:Ct(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wr=xt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,kr(e,a)));break;case 22:o=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,O=Cn,G=lt;if(Cn=O||o,lt=G||C,Ct(t,e),lt=G,Cn=O,zt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||C||Cn||lt||El(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(s=C.stateNode,o)g=s.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=C.stateNode;var Q=C.memoizedProps.style,R=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;v.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(ae){Le(C,C.return,ae)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=o?"":C.memoizedProps}catch(ae){Le(C,C.return,ae)}}}else if(t.tag===18){if(n===null){C=t;try{var U=C.stateNode;o?ed(U,!0):ed(C.stateNode,!1)}catch(ae){Le(C,C.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,kr(e,n))));break;case 19:Ct(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,kr(e,a)));break;case 30:break;case 21:break;default:Ct(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(np(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,s=qo(e);Sr(e,s,o);break;case 5:var g=n.stateNode;n.flags&32&&(Ul(g,""),n.flags&=-33);var v=qo(e);Sr(e,v,g);break;case 3:case 4:var C=n.stateNode.containerInfo,O=qo(e);Yo(e,O,C);break;default:throw Error(u(161))}}catch(G){Le(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function An(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ip(e,t.alternate,t),t=t.sibling}function El(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),El(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ep(t,t.return,n),El(t);break;case 27:si(t.stateNode);case 26:case 5:on(t,t.return),El(t);break;case 22:t.memoizedState===null&&El(t);break;case 30:El(t);break;default:El(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,g=s.flags;switch(s.tag){case 0:case 11:case 15:jn(o,s,n),Pa(4,s);break;case 1:if(jn(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Le(a,a.return,O)}if(a=s,o=a.updateQueue,o!==null){var v=a.stateNode;try{var C=o.shared.hiddenCallbacks;if(C!==null)for(o.shared.hiddenCallbacks=null,o=0;o<C.length;o++)Gf(C[o],v)}catch(O){Le(a,a.return,O)}}n&&g&64&&Ph(s),ei(s,s.return);break;case 27:lp(s);case 26:case 5:jn(o,s,n),n&&a===null&&g&4&&tp(s),ei(s,s.return);break;case 12:jn(o,s,n);break;case 31:jn(o,s,n),n&&g&4&&op(o,s);break;case 13:jn(o,s,n),n&&g&4&&sp(o,s);break;case 22:s.memoizedState===null&&jn(o,s,n),ei(s,s.return);break;case 30:break;default:jn(o,s,n)}t=t.sibling}}function Vo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qa(n))}function Xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qa(e))}function ln(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hp(e,t,n,a),t=t.sibling}function hp(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,a),o&2048&&Pa(9,t);break;case 1:ln(e,t,n,a);break;case 3:ln(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qa(e)));break;case 12:if(o&2048){ln(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,g=s.id,v=s.onPostCommit;typeof v=="function"&&v(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Le(t,t.return,C)}}else ln(e,t,n,a);break;case 31:ln(e,t,n,a);break;case 13:ln(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,g=t.alternate,t.memoizedState!==null?s._visibility&2?ln(e,t,n,a):ti(e,t):s._visibility&2?ln(e,t,n,a):(s._visibility|=2,aa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Vo(g,t);break;case 24:ln(e,t,n,a),o&2048&&Xo(t.alternate,t);break;default:ln(e,t,n,a)}}function aa(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,g=t,v=n,C=a,O=g.flags;switch(g.tag){case 0:case 11:case 15:aa(s,g,v,C,o),Pa(8,g);break;case 23:break;case 22:var G=g.stateNode;g.memoizedState!==null?G._visibility&2?aa(s,g,v,C,o):ti(s,g):(G._visibility|=2,aa(s,g,v,C,o)),o&&O&2048&&Vo(g.alternate,g);break;case 24:aa(s,g,v,C,o),o&&O&2048&&Xo(g.alternate,g);break;default:aa(s,g,v,C,o)}t=t.sibling}}function ti(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:ti(n,a),o&2048&&Vo(a.alternate,a);break;case 24:ti(n,a),o&2048&&Xo(a.alternate,a);break;default:ti(n,a)}t=t.sibling}}var ni=8192;function ia(e,t,n){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)pp(e,t,n),e=e.sibling}function pp(e,t,n){switch(e.tag){case 26:ia(e,t,n),e.flags&ni&&e.memoizedState!==null&&Z0(n,nn,e.memoizedState,e.memoizedProps);break;case 5:ia(e,t,n);break;case 3:case 4:var a=nn;nn=Lr(e.stateNode.containerInfo),ia(e,t,n),nn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ni,ni=16777216,ia(e,t,n),ni=a):ia(e,t,n));break;default:ia(e,t,n)}}function dp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,gp(a,e)}dp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mp(e),e=e.sibling}function mp(e){switch(e.tag){case 0:case 11:case 15:li(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:li(e);break;case 12:li(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Er(e)):li(e);break;default:li(e)}}function Er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,gp(a,e)}dp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),Er(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Er(t));break;default:Er(t)}e=e.sibling}}function gp(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,st=a;else e:for(n=e;st!==null;){a=st;var o=a.sibling,s=a.return;if(rp(a),a===n){st=null;break e}if(o!==null){o.return=s,st=o;break e}st=s}}}var u0={getCacheForType:function(e){var t=ht(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(et).controller.signal}},o0=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ve=null,Ee=null,Ce=0,Re=0,Bt=null,In=!1,ra=!1,Qo=!1,Mn=0,$e=0,Fn=0,wl=0,Zo=0,Ut=0,ua=0,ai=null,At=null,Io=!1,wr=0,yp=0,Tr=1/0,Cr=null,Kn=null,rt=0,Jn=null,oa=null,Dn=0,Fo=0,Ko=null,xp=null,ii=0,Jo=null;function Ht(){return(_e&2)!==0&&Ce!==0?Ce&-Ce:j.T!==null?ns():_c()}function bp(){if(Ut===0)if((Ce&536870912)===0||Ae){var e=Oi;Oi<<=1,(Oi&3932160)===0&&(Oi=262144),Ut=e}else Ut=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Ut}function jt(e,t,n){(e===Ve&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(sa(e,0),$n(e,Ce,Ut,!1)),Ca(e,n),((_e&2)===0||e!==Ve)&&(e===Ve&&((_e&2)===0&&(wl|=n),$e===4&&$n(e,Ce,Ut,!1)),sn(e))}function vp(e,t,n){if((_e&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ta(e,t),o=a?f0(e,t):Wo(e,t,!0),s=a;do{if(o===0){ra&&!a&&$n(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!s0(n)){o=Wo(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var v=e;o=ai;var C=v.current.memoizedState.isDehydrated;if(C&&(sa(v,g).flags|=256),g=Wo(v,g,!1),g!==2){if(Qo&&!C){v.errorRecoveryDisabledLanes|=s,wl|=s,o=4;break e}s=At,At=o,s!==null&&(At===null?At=s:At.push.apply(At,s))}o=g}if(s=!1,o!==2)continue}}if(o===1){sa(e,0),$n(e,t,0,!0);break}e:{switch(a=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:$n(a,t,Ut,!In);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=wr+300-xt(),10<o)){if($n(a,t,Ut,!In),Li(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=$p(Sp.bind(null,a,n,At,Cr,Io,t,Ut,wl,ua,In,s,"Throttled",-0,0),o);break e}Sp(a,n,At,Cr,Io,t,Ut,wl,ua,In,s,null,-0,0)}}break}while(!0);sn(e)}function Sp(e,t,n,a,o,s,g,v,C,O,G,Q,R,U){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},pp(t,s,Q);var ae=(s&62914560)===s?wr-xt():(s&4194048)===s?yp-xt():0;if(ae=I0(Q,ae),ae!==null){Dn=s,e.cancelPendingCommit=ae(jp.bind(null,e,t,s,n,a,o,g,v,C,G,Q,null,R,U)),$n(e,s,g,!O);return}}jp(e,t,s,n,a,o,g,v,C)}function s0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!_t(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t,n,a){t&=~Zo,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-Ge(o),g=1<<s;a[s]=-1,o&=~g}n!==0&&Mc(e,n,t)}function zr(){return(_e&6)===0?(ri(0),!1):!0}function $o(){if(Ee!==null){if(Re===0)var e=Ee.return;else e=Ee,vn=ml=null,ho(e),Pl=null,Ga=0,e=Ee;for(;e!==null;)Wh(e.alternate,e),e=e.return;Ee=null}}function sa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,j0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,$o(),Ve=e,Ee=n=xn(e.current,null),Ce=t,Re=0,Bt=null,In=!1,ra=Ta(e,t),Qo=!1,ua=Ut=Zo=wl=Fn=$e=0,At=ai=null,Io=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-Ge(a),s=1<<o;t|=e[o],a&=~s}return Mn=t,Fi(),n}function kp(e,t){ye=null,j.H=Ja,t===Wl||t===nr?(t=Uf(),Re=3):t===eo?(t=Uf(),Re=4):Re=t===jo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Ee===null&&($e=1,gr(e,Zt(t,e.current)))}function Ep(){var e=Rt.current;return e===null?!0:(Ce&4194048)===Ce?Jt===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Jt:!1}function wp(){var e=j.H;return j.H=Ja,e===null?Ja:e}function Tp(){var e=j.A;return j.A=u0,e}function Ar(){$e=4,In||(Ce&4194048)!==Ce&&Rt.current!==null||(ra=!0),(Fn&134217727)===0&&(wl&134217727)===0||Ve===null||$n(Ve,Ce,Ut,!1)}function Wo(e,t,n){var a=_e;_e|=2;var o=wp(),s=Tp();(Ve!==e||Ce!==t)&&(Cr=null,sa(e,t)),t=!1;var g=$e;e:do try{if(Re!==0&&Ee!==null){var v=Ee,C=Bt;switch(Re){case 8:$o(),g=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var O=Re;if(Re=0,Bt=null,ca(e,v,C,O),n&&ra){g=0;break e}break;default:O=Re,Re=0,Bt=null,ca(e,v,C,O)}}c0(),g=$e;break}catch(G){kp(e,G)}while(!0);return t&&e.shellSuspendCounter++,vn=ml=null,_e=a,j.H=o,j.A=s,Ee===null&&(Ve=null,Ce=0,Fi()),g}function c0(){for(;Ee!==null;)Cp(Ee)}function f0(e,t){var n=_e;_e|=2;var a=wp(),o=Tp();Ve!==e||Ce!==t?(Cr=null,Tr=xt()+500,sa(e,t)):ra=Ta(e,t);e:do try{if(Re!==0&&Ee!==null){t=Ee;var s=Bt;t:switch(Re){case 1:Re=0,Bt=null,ca(e,t,s,1);break;case 2:case 9:if(Lf(s)){Re=0,Bt=null,zp(t);break}t=function(){Re!==2&&Re!==9||Ve!==e||(Re=7),sn(e)},s.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Lf(s)?(Re=0,Bt=null,zp(t)):(Re=0,Bt=null,ca(e,t,s,7));break;case 5:var g=null;switch(Ee.tag){case 26:g=Ee.memoizedState;case 5:case 27:var v=Ee;if(g?hd(g):v.stateNode.complete){Re=0,Bt=null;var C=v.sibling;if(C!==null)Ee=C;else{var O=v.return;O!==null?(Ee=O,jr(O)):Ee=null}break t}}Re=0,Bt=null,ca(e,t,s,5);break;case 6:Re=0,Bt=null,ca(e,t,s,6);break;case 8:$o(),$e=6;break e;default:throw Error(u(462))}}h0();break}catch(G){kp(e,G)}while(!0);return vn=ml=null,j.H=a,j.A=o,_e=n,Ee!==null?0:(Ve=null,Ce=0,Fi(),$e)}function h0(){for(;Ee!==null&&!cu();)Cp(Ee)}function Cp(e){var t=Jh(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?jr(e):Ee=t}function zp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Xh(n,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=Xh(n,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:ho(t);default:Wh(n,t),t=Ee=Tf(t,Mn),t=Jh(n,t,Mn)}e.memoizedProps=e.pendingProps,t===null?jr(e):Ee=t}function ca(e,t,n,a){vn=ml=null,ho(t),Pl=null,Ga=0;var o=t.return;try{if(e0(e,o,t,n,Ce)){$e=1,gr(e,Zt(n,e.current)),Ee=null;return}}catch(s){if(o!==null)throw Ee=o,s;$e=1,gr(e,Zt(n,e.current)),Ee=null;return}t.flags&32768?(Ae||a===1?e=!0:ra||(Ce&536870912)!==0?e=!1:(In=e=!0,(a===2||a===9||a===3||a===6)&&(a=Rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ap(t,e)):jr(t)}function jr(e){var t=e;do{if((t.flags&32768)!==0){Ap(t,In);return}e=t.return;var n=l0(t.alternate,t,Mn);if(n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function Ap(e,t){do{var n=a0(e.alternate,e);if(n!==null){n.flags&=32767,Ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=n}while(e!==null);$e=6,Ee=null}function jp(e,t,n,a,o,s,g,v,C){e.cancelPendingCommit=null;do Mr();while(rt!==0);if((_e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Hu,Qg(e,n,s,g,v,C),e===Ve&&(Ee=Ve=null,Ce=0),oa=t,Jn=e,Dn=n,Fo=s,Ko=o,xp=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g0(de,function(){return Op(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,o=Z.p,Z.p=2,g=_e,_e|=4;try{i0(e,t,n)}finally{_e=g,Z.p=o,j.T=a}}rt=1,Mp(),Dp(),Np()}}function Mp(){if(rt===1){rt=0;var e=Jn,t=oa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{cp(t,e);var s=cs,g=gf(e.containerInfo),v=s.focusedElem,C=s.selectionRange;if(g!==v&&v&&v.ownerDocument&&mf(v.ownerDocument.documentElement,v)){if(C!==null&&Ou(v)){var O=C.start,G=C.end;if(G===void 0&&(G=O),"selectionStart"in v)v.selectionStart=O,v.selectionEnd=Math.min(G,v.value.length);else{var Q=v.ownerDocument||document,R=Q&&Q.defaultView||window;if(R.getSelection){var U=R.getSelection(),ae=v.textContent.length,he=Math.min(C.start,ae),qe=C.end===void 0?he:Math.min(C.end,ae);!U.extend&&he>qe&&(g=qe,qe=he,he=g);var N=df(v,he),z=df(v,qe);if(N&&z&&(U.rangeCount!==1||U.anchorNode!==N.node||U.anchorOffset!==N.offset||U.focusNode!==z.node||U.focusOffset!==z.offset)){var _=Q.createRange();_.setStart(N.node,N.offset),U.removeAllRanges(),he>qe?(U.addRange(_),U.extend(z.node,z.offset)):(_.setEnd(z.node,z.offset),U.addRange(_))}}}}for(Q=[],U=v;U=U.parentNode;)U.nodeType===1&&Q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Q.length;v++){var X=Q[v];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Gr=!!ss,cs=ss=null}finally{_e=o,Z.p=a,j.T=n}}e.current=t,rt=2}}function Dp(){if(rt===2){rt=0;var e=Jn,t=oa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var a=Z.p;Z.p=2;var o=_e;_e|=4;try{ip(e,t.alternate,t)}finally{_e=o,Z.p=a,j.T=n}}rt=3}}function Np(){if(rt===4||rt===3){rt=0,fu();var e=Jn,t=oa,n=Dn,a=xp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,oa=Jn=null,_p(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Kn=null),mu(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=j.T,o=Z.p,Z.p=2,j.T=null;try{for(var s=e.onRecoverableError,g=0;g<a.length;g++){var v=a[g];s(v.value,{componentStack:v.stack})}}finally{j.T=t,Z.p=o}}(Dn&3)!==0&&Mr(),sn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===Jo?ii++:(ii=0,Jo=e):ii=0,ri(0)}}function _p(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qa(t)))}function Mr(){return Mp(),Dp(),Np(),Op()}function Op(){if(rt!==5)return!1;var e=Jn,t=Fo;Fo=0;var n=mu(Dn),a=j.T,o=Z.p;try{Z.p=32>n?32:n,j.T=null,n=Ko,Ko=null;var s=Jn,g=Dn;if(rt=0,oa=Jn=null,Dn=0,(_e&6)!==0)throw Error(u(331));var v=_e;if(_e|=4,mp(s.current),hp(s,s.current,g,n),_e=v,ri(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(bt,s)}catch{}return!0}finally{Z.p=o,j.T=a,_p(e,t)}}function Rp(e,t,n){t=Zt(n,t),t=Ao(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(Ca(e,2),sn(e))}function Le(e,t,n){if(e.tag===3)Rp(e,e,n);else for(;t!==null;){if(t.tag===3){Rp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=Zt(n,e),n=Lh(2),a=Vn(t,n,2),a!==null&&(Bh(n,a,t,e),Ca(a,2),sn(a));break}}t=t.return}}function Po(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new o0;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Qo=!0,o.add(n),e=p0.bind(null,e,t,n),t.then(e,e))}function p0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(Ce&n)===n&&($e===4||$e===3&&(Ce&62914560)===Ce&&300>xt()-wr?(_e&2)===0&&sa(e,0):Zo|=n,ua===Ce&&(ua=0)),sn(e)}function Lp(e,t){t===0&&(t=jc()),e=hl(e,t),e!==null&&(Ca(e,t),sn(e))}function d0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lp(e,n)}function m0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Lp(e,n)}function g0(e,t){return Dl(e,t)}var Dr=null,fa=null,es=!1,Nr=!1,ts=!1,Wn=0;function sn(e){e!==fa&&e.next===null&&(fa===null?Dr=fa=e:fa=fa.next=e),Nr=!0,es||(es=!0,x0())}function ri(e,t){if(!ts&&Nr){ts=!0;do for(var n=!1,a=Dr;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var g=a.suspendedLanes,v=a.pingedLanes;s=(1<<31-Ge(42|e)+1)-1,s&=o&~(g&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,qp(a,s))}else s=Ce,s=Li(a,a===Ve?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Ta(a,s)||(n=!0,qp(a,s));a=a.next}while(n);ts=!1}}function y0(){Bp()}function Bp(){Nr=es=!1;var e=0;Wn!==0&&A0()&&(e=Wn);for(var t=xt(),n=null,a=Dr;a!==null;){var o=a.next,s=Up(a,t);s===0?(a.next=null,n===null?Dr=o:n.next=o,o===null&&(fa=n)):(n=a,(e!==0||(s&3)!==0)&&(Nr=!0)),a=o}rt!==0&&rt!==5||ri(e),Wn!==0&&(Wn=0)}function Up(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var g=31-Ge(s),v=1<<g,C=o[g];C===-1?((v&n)===0||(v&a)!==0)&&(o[g]=Xg(v,t)):C<=t&&(e.expiredLanes|=v),s&=~v}if(t=Ve,n=Ce,n=Li(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&wa(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ta(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&wa(a),mu(n)){case 2:case 8:n=W;break;case 32:n=de;break;case 268435456:n=Oe;break;default:n=de}return a=Hp.bind(null,e),n=Dl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&wa(a),e.callbackPriority=2,e.callbackNode=null,2}function Hp(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var a=Ce;return a=Li(e,e===Ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(vp(e,a,t),Up(e,xt()),e.callbackNode!=null&&e.callbackNode===n?Hp.bind(null,e):null)}function qp(e,t){if(Mr())return null;vp(e,t,!0)}function x0(){M0(function(){(_e&6)!==0?Dl(V,y0):Bp()})}function ns(){if(Wn===0){var e=Jl;e===0&&(e=_i,_i<<=1,(_i&261888)===0&&(_i=256)),Wn=e}return Wn}function Yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(""+e)}function Gp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function b0(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Yp((o[Et]||null).action),g=a.submitter;g&&(t=(t=g[Et]||null)?Yp(t.formAction):g.getAttribute("formAction"),t!==null&&(s=t,g=null));var v=new Xi("action","action",null,a,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var C=g?Gp(o,g):new FormData(o);ko(n,{pending:!0,data:C,method:o.method,action:s},null,C)}}else typeof s=="function"&&(v.preventDefault(),C=g?Gp(o,g):new FormData(o),ko(n,{pending:!0,data:C,method:o.method,action:s},s,C))},currentTarget:o}]})}}for(var ls=0;ls<Uu.length;ls++){var as=Uu[ls],v0=as.toLowerCase(),S0=as[0].toUpperCase()+as.slice(1);tn(v0,"on"+S0)}tn(bf,"onAnimationEnd"),tn(vf,"onAnimationIteration"),tn(Sf,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(B1,"onTransitionRun"),tn(U1,"onTransitionStart"),tn(H1,"onTransitionCancel"),tn(kf,"onTransitionEnd"),Ll("onMouseEnter",["mouseout","mouseover"]),Ll("onMouseLeave",["mouseout","mouseover"]),Ll("onPointerEnter",["pointerout","pointerover"]),Ll("onPointerLeave",["pointerout","pointerover"]),ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ol("onBeforeInput",["compositionend","keypress","textInput","paste"]),ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function Vp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var g=a.length-1;0<=g;g--){var v=a[g],C=v.instance,O=v.currentTarget;if(v=v.listener,C!==s&&o.isPropagationStopped())break e;s=v,o.currentTarget=O;try{s(o)}catch(G){Ii(G)}o.currentTarget=null,s=C}else for(g=0;g<a.length;g++){if(v=a[g],C=v.instance,O=v.currentTarget,v=v.listener,C!==s&&o.isPropagationStopped())break e;s=v,o.currentTarget=O;try{s(o)}catch(G){Ii(G)}o.currentTarget=null,s=C}}}}function we(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var a=e+"__bubble";n.has(a)||(Xp(t,e,2,!1),n.add(a))}function is(e,t,n){var a=0;t&&(a|=4),Xp(n,e,a,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[_r]){e[_r]=!0,Lc.forEach(function(n){n!=="selectionchange"&&(k0.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,is("selectionchange",!1,t))}}function Xp(e,t,n,a){switch(bd(t)){case 2:var o=J0;break;case 8:o=$0;break;default:o=Ss}n=o.bind(null,t,n,e),o=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function us(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var v=a.stateNode.containerInfo;if(v===o)break;if(g===4)for(g=a.return;g!==null;){var C=g.tag;if((C===3||C===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;v!==null;){if(g=_l(v),g===null)return;if(C=g.tag,C===5||C===6||C===26||C===27){a=s=g;continue e}v=v.parentNode}}a=a.return}Fc(function(){var O=s,G=Eu(n),Q=[];e:{var R=Ef.get(e);if(R!==void 0){var U=Xi,ae=e;switch(e){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":U=m1;break;case"focusin":ae="focus",U=ju;break;case"focusout":ae="blur",U=ju;break;case"beforeblur":case"afterblur":U=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=x1;break;case bf:case vf:case Sf:U=r1;break;case kf:U=v1;break;case"scroll":case"scrollend":U=t1;break;case"wheel":U=k1;break;case"copy":case"cut":case"paste":U=o1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Pc;break;case"toggle":case"beforetoggle":U=w1}var he=(t&4)!==0,qe=!he&&(e==="scroll"||e==="scrollend"),N=he?R!==null?R+"Capture":null:R;he=[];for(var z=O,_;z!==null;){var X=z;if(_=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||_===null||N===null||(X=ja(z,N),X!=null&&he.push(oi(z,X,_))),qe)break;z=z.return}0<he.length&&(R=new U(R,ae,null,n,G),Q.push({event:R,listeners:he}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",R&&n!==ku&&(ae=n.relatedTarget||n.fromElement)&&(_l(ae)||ae[Nl]))break e;if((U||R)&&(R=G.window===G?G:(R=G.ownerDocument)?R.defaultView||R.parentWindow:window,U?(ae=n.relatedTarget||n.toElement,U=O,ae=ae?_l(ae):null,ae!==null&&(qe=f(ae),he=ae.tag,ae!==qe||he!==5&&he!==27&&he!==6)&&(ae=null)):(U=null,ae=O),U!==ae)){if(he=$c,X="onMouseLeave",N="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(he=Pc,X="onPointerLeave",N="onPointerEnter",z="pointer"),qe=U==null?R:Aa(U),_=ae==null?R:Aa(ae),R=new he(X,z+"leave",U,n,G),R.target=qe,R.relatedTarget=_,X=null,_l(G)===O&&(he=new he(N,z+"enter",ae,n,G),he.target=_,he.relatedTarget=qe,X=he),qe=X,U&&ae)t:{for(he=E0,N=U,z=ae,_=0,X=N;X;X=he(X))_++;X=0;for(var se=z;se;se=he(se))X++;for(;0<_-X;)N=he(N),_--;for(;0<X-_;)z=he(z),X--;for(;_--;){if(N===z||z!==null&&N===z.alternate){he=N;break t}N=he(N),z=he(z)}he=null}else he=null;U!==null&&Qp(Q,R,U,he,!1),ae!==null&&qe!==null&&Qp(Q,qe,ae,he,!0)}}e:{if(R=O?Aa(O):window,U=R.nodeName&&R.nodeName.toLowerCase(),U==="select"||U==="input"&&R.type==="file")var Me=of;else if(rf(R))if(sf)Me=O1;else{Me=N1;var ue=D1}else U=R.nodeName,!U||U.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&Su(O.elementType)&&(Me=of):Me=_1;if(Me&&(Me=Me(e,O))){uf(Q,Me,n,G);break e}ue&&ue(e,R,O),e==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&vu(R,"number",R.value)}switch(ue=O?Aa(O):window,e){case"focusin":(rf(ue)||ue.contentEditable==="true")&&(Gl=ue,Ru=O,Ba=null);break;case"focusout":Ba=Ru=Gl=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,yf(Q,n,G);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":yf(Q,n,G)}var xe;if(Du)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Yl?lf(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(ef&&n.locale!=="ko"&&(Yl||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Yl&&(xe=Kc()):(Ln=G,Cu="value"in Ln?Ln.value:Ln.textContent,Yl=!0)),ue=Or(O,ze),0<ue.length&&(ze=new Wc(ze,e,null,n,G),Q.push({event:ze,listeners:ue}),xe?ze.data=xe:(xe=af(n),xe!==null&&(ze.data=xe)))),(xe=C1?z1(e,n):A1(e,n))&&(ze=Or(O,"onBeforeInput"),0<ze.length&&(ue=new Wc("onBeforeInput","beforeinput",null,n,G),Q.push({event:ue,listeners:ze}),ue.data=xe)),b0(Q,e,O,n,G)}Vp(Q,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=ja(e,n),o!=null&&a.unshift(oi(e,o,s)),o=ja(e,t),o!=null&&a.push(oi(e,o,s))),e.tag===3)return a;e=e.return}return[]}function E0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qp(e,t,n,a,o){for(var s=t._reactName,g=[];n!==null&&n!==a;){var v=n,C=v.alternate,O=v.stateNode;if(v=v.tag,C!==null&&C===a)break;v!==5&&v!==26&&v!==27||O===null||(C=O,o?(O=ja(n,s),O!=null&&g.unshift(oi(n,O,C))):o||(O=ja(n,s),O!=null&&g.push(oi(n,O,C)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var w0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function Zp(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(T0,"")}function Ip(e,t){return t=Zp(t),Zp(e)===t}function He(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ul(e,""+a);break;case"className":Ui(e,"class",a);break;case"tabIndex":Ui(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,n,a);break;case"style":Zc(e,a,s);break;case"data":if(t!=="object"){Ui(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=qi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",o.name,o,null),He(e,t,"formEncType",o.formEncType,o,null),He(e,t,"formMethod",o.formMethod,o,null),He(e,t,"formTarget",o.formTarget,o,null)):(He(e,t,"encType",o.encType,o,null),He(e,t,"method",o.method,o,null),He(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=qi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=qi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":we("beforetoggle",e),we("toggle",e),Bi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Bi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Pg.get(n)||n,Bi(e,n,a))}}function os(e,t,n,a,o,s){switch(n){case"style":Zc(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ul(e,a):(typeof a=="number"||typeof a=="bigint")&&Ul(e,""+a);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[Et]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Bi(e,n,a)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var g=n[s];if(g!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,s,g,n,null)}}o&&He(e,t,"srcSet",n.srcSet,n,null),a&&He(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var v=s=g=o=null,C=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var G=n[a];if(G!=null)switch(a){case"name":o=G;break;case"type":g=G;break;case"checked":C=G;break;case"defaultChecked":O=G;break;case"value":s=G;break;case"defaultValue":v=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:He(e,t,a,G,n,null)}}Gc(e,s,v,C,O,g,o,!1);return;case"select":we("invalid",e),a=g=s=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":s=v;break;case"defaultValue":g=v;break;case"multiple":a=v;default:He(e,t,o,v,n,null)}t=s,n=g,e.multiple=!!a,t!=null?Bl(e,!!a,t,!1):n!=null&&Bl(e,!!a,n,!0);return;case"textarea":we("invalid",e),s=o=a=null;for(g in n)if(n.hasOwnProperty(g)&&(v=n[g],v!=null))switch(g){case"value":a=v;break;case"defaultValue":o=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:He(e,t,g,v,n,null)}Xc(e,a,o,s);return;case"option":for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!=null)&&(C==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,t,C,a,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(a=0;a<ui.length;a++)we(ui[a],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,O,a,n,null)}return;default:if(Su(t)){for(G in n)n.hasOwnProperty(G)&&(a=n[G],a!==void 0&&os(e,t,G,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&He(e,t,v,a,n,null))}function C0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,g=null,v=null,C=null,O=null,G=null;for(U in n){var Q=n[U];if(n.hasOwnProperty(U)&&Q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":C=Q;default:a.hasOwnProperty(U)||He(e,t,U,null,a,Q)}}for(var R in a){var U=a[R];if(Q=n[R],a.hasOwnProperty(R)&&(U!=null||Q!=null))switch(R){case"type":s=U;break;case"name":o=U;break;case"checked":O=U;break;case"defaultChecked":G=U;break;case"value":g=U;break;case"defaultValue":v=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:U!==Q&&He(e,t,R,U,a,Q)}}bu(e,g,v,C,O,G,s,o);return;case"select":U=g=v=R=null;for(s in n)if(C=n[s],n.hasOwnProperty(s)&&C!=null)switch(s){case"value":break;case"multiple":U=C;default:a.hasOwnProperty(s)||He(e,t,s,null,a,C)}for(o in a)if(s=a[o],C=n[o],a.hasOwnProperty(o)&&(s!=null||C!=null))switch(o){case"value":R=s;break;case"defaultValue":v=s;break;case"multiple":g=s;default:s!==C&&He(e,t,o,s,a,C)}t=v,n=g,a=U,R!=null?Bl(e,!!n,R,!1):!!a!=!!n&&(t!=null?Bl(e,!!n,t,!0):Bl(e,!!n,n?[]:"",!1));return;case"textarea":U=R=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:He(e,t,v,null,a,o)}for(g in a)if(o=a[g],s=n[g],a.hasOwnProperty(g)&&(o!=null||s!=null))switch(g){case"value":R=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&He(e,t,g,o,a,s)}Vc(e,R,U);return;case"option":for(var ae in n)R=n[ae],n.hasOwnProperty(ae)&&R!=null&&!a.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:He(e,t,ae,null,a,R));for(C in a)R=a[C],U=n[C],a.hasOwnProperty(C)&&R!==U&&(R!=null||U!=null)&&(C==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":He(e,t,C,R,a,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)R=n[he],n.hasOwnProperty(he)&&R!=null&&!a.hasOwnProperty(he)&&He(e,t,he,null,a,R);for(O in a)if(R=a[O],U=n[O],a.hasOwnProperty(O)&&R!==U&&(R!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:He(e,t,O,R,a,U)}return;default:if(Su(t)){for(var qe in n)R=n[qe],n.hasOwnProperty(qe)&&R!==void 0&&!a.hasOwnProperty(qe)&&os(e,t,qe,void 0,a,R);for(G in a)R=a[G],U=n[G],!a.hasOwnProperty(G)||R===U||R===void 0&&U===void 0||os(e,t,G,R,a,U);return}}for(var N in n)R=n[N],n.hasOwnProperty(N)&&R!=null&&!a.hasOwnProperty(N)&&He(e,t,N,null,a,R);for(Q in a)R=a[Q],U=n[Q],!a.hasOwnProperty(Q)||R===U||R==null&&U==null||He(e,t,Q,R,a,U)}function Fp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function z0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],s=o.transferSize,g=o.initiatorType,v=o.duration;if(s&&v&&Fp(g)){for(g=0,v=o.responseEnd,a+=1;a<n.length;a++){var C=n[a],O=C.startTime;if(O>v)break;var G=C.transferSize,Q=C.initiatorType;G&&Fp(Q)&&(C=C.responseEnd,g+=G*(C<v?1:(v-O)/(C-O)))}if(--a,t+=8*(s+g)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ss=null,cs=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function Kp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hs=null;function A0(){var e=window.event;return e&&e.type==="popstate"?e===hs?!1:(hs=e,!0):(hs=null,!1)}var $p=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(e){return Wp.resolve(null).then(e).catch(D0)}:$p;function D0(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function Pp(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),ma(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")si(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,si(n);for(var s=n.firstChild;s;){var g=s.nextSibling,v=s.nodeName;s[za]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=g}}else n==="body"&&si(e.ownerDocument.body);n=o}while(n);ma(t)}function ed(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function ps(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ps(n),yu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function N0(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[za])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function _0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$t(e.nextSibling),e===null))return null;return e}function td(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function ds(e){return e.data==="$?"||e.data==="$~"}function ms(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function O0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gs=null;function nd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return $t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ad(e,t,n){switch(t=Rr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function si(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yu(e)}var Wt=new Map,id=new Set;function Lr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=Z.d;Z.d={f:R0,r:L0,D:B0,C:U0,L:H0,m:q0,X:G0,S:Y0,M:V0};function R0(){var e=Nn.f(),t=zr();return e||t}function L0(e){var t=Ol(e);t!==null&&t.tag===5&&t.type==="form"?kh(t):Nn.r(e)}var ha=typeof document>"u"?null:document;function rd(e,t,n){var a=ha;if(a&&typeof t=="string"&&t){var o=Xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),id.has(o)||(id.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),dt(t,"link",e),ot(t),a.head.appendChild(t)))}}function B0(e){Nn.D(e),rd("dns-prefetch",e,null)}function U0(e,t){Nn.C(e,t),rd("preconnect",e,t)}function H0(e,t,n){Nn.L(e,t,n);var a=ha;if(a&&e&&t){var o='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Xt(n.imageSizes)+'"]')):o+='[href="'+Xt(e)+'"]';var s=o;switch(t){case"style":s=pa(e);break;case"script":s=da(e)}Wt.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(ci(s))||t==="script"&&a.querySelector(fi(s))||(t=a.createElement("link"),dt(t,"link",e),ot(t),a.head.appendChild(t)))}}function q0(e,t){Nn.m(e,t);var n=ha;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Xt(a)+'"][href="'+Xt(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=da(e)}if(!Wt.has(s)&&(e=y({rel:"modulepreload",href:e},t),Wt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fi(s)))return}a=n.createElement("link"),dt(a,"link",e),ot(a),n.head.appendChild(a)}}}function Y0(e,t,n){Nn.S(e,t,n);var a=ha;if(a&&e){var o=Rl(a).hoistableStyles,s=pa(e);t=t||"default";var g=o.get(s);if(!g){var v={loading:0,preload:null};if(g=a.querySelector(ci(s)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(s))&&ys(e,n);var C=g=a.createElement("link");ot(C),dt(C,"link",e),C._p=new Promise(function(O,G){C.onload=O,C.onerror=G}),C.addEventListener("load",function(){v.loading|=1}),C.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Br(g,t,a)}g={type:"stylesheet",instance:g,count:1,state:v},o.set(s,g)}}}function G0(e,t){Nn.X(e,t);var n=ha;if(n&&e){var a=Rl(n).hoistableScripts,o=da(e),s=a.get(o);s||(s=n.querySelector(fi(o)),s||(e=y({src:e,async:!0},t),(t=Wt.get(o))&&xs(e,t),s=n.createElement("script"),ot(s),dt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function V0(e,t){Nn.M(e,t);var n=ha;if(n&&e){var a=Rl(n).hoistableScripts,o=da(e),s=a.get(o);s||(s=n.querySelector(fi(o)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&xs(e,t),s=n.createElement("script"),ot(s),dt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function ud(e,t,n,a){var o=(o=oe.current)?Lr(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pa(n.href),n=Rl(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pa(n.href);var s=Rl(o).hoistableStyles,g=s.get(e);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,g),(s=o.querySelector(ci(e)))&&!s._p&&(g.instance=s,g.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),s||X0(o,e,n,g.state))),t&&a===null)throw Error(u(528,""));return g}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=da(n),n=Rl(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function pa(e){return'href="'+Xt(e)+'"'}function ci(e){return'link[rel="stylesheet"]['+e+"]"}function od(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function X0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),dt(t,"link",n),ot(t),e.head.appendChild(t))}function da(e){return'[src="'+Xt(e)+'"]'}function fi(e){return"script[async]"+e}function sd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(a)return t.instance=a,ot(a),a;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ot(a),dt(a,"style",o),Br(a,n.precedence,e),t.instance=a;case"stylesheet":o=pa(n.href);var s=e.querySelector(ci(o));if(s)return t.state.loading|=4,t.instance=s,ot(s),s;a=od(n),(o=Wt.get(o))&&ys(a,o),s=(e.ownerDocument||e).createElement("link"),ot(s);var g=s;return g._p=new Promise(function(v,C){g.onload=v,g.onerror=C}),dt(s,"link",a),t.state.loading|=4,Br(s,n.precedence,e),t.instance=s;case"script":return s=da(n.src),(o=e.querySelector(fi(s)))?(t.instance=o,ot(o),o):(a=n,(o=Wt.get(s))&&(a=y({},n),xs(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),ot(o),dt(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Br(a,n.precedence,e));return t.instance}function Br(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,g=0;g<a.length;g++){var v=a[g];if(v.dataset.precedence===t)s=v;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ys(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ur=null;function cd(e,t,n){if(Ur===null){var a=new Map,o=Ur=new Map;o.set(n,a)}else o=Ur,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[za]||s[ct]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var g=s.getAttribute(t)||"";g=e+g;var v=a.get(g);v?v.push(s):a.set(g,[s])}}return a}function fd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Q0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Z0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=pa(a.href),s=t.querySelector(ci(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Hr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,ot(s);return}s=t.ownerDocument||t,a=od(a),(o=Wt.get(o))&&ys(a,o),s=s.createElement("link"),ot(s);var g=s;g._p=new Promise(function(v,C){g.onload=v,g.onerror=C}),dt(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Hr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var bs=0;function I0(e,t){return e.stylesheets&&e.count===0&&Yr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Yr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&bs===0&&(bs=62500*z0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>bs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Hr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qr=null;function Yr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qr=new Map,t.forEach(F0,e),qr=null,Hr.call(e))}function F0(e,t){if(!(t.state.loading&4)){var n=qr.get(e);if(n)var a=n.get(null);else{n=new Map,qr.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var g=o[s];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),a=g)}a&&n.set(null,a)}o=t.instance,g=o.getAttribute("data-precedence"),s=n.get(g)||a,s===a&&n.set(null,o),n.set(g,o),this.count++,a=Hr.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:Y,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function K0(e,t,n,a,o,s,g,v,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function pd(e,t,n,a,o,s,g,v,C,O,G,Q){return e=new K0(e,t,n,g,C,O,G,Q,v),t=1,s===!0&&(t|=24),s=Ot(3,null,null,t),e.current=s,s.stateNode=e,t=$u(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},to(s),e}function dd(e){return e?(e=Ql,e):Ql}function md(e,t,n,a,o,s){o=dd(o),a.context===null?a.context=o:a.pendingContext=o,a=Gn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Vn(e,a,t),n!==null&&(jt(n,e,t),Xa(n,e,t))}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function yd(e){if(e.tag===13||e.tag===31){var t=hl(e,67108864);t!==null&&jt(t,e,67108864),vs(e,67108864)}}function xd(e){if(e.tag===13||e.tag===31){var t=Ht();t=du(t);var n=hl(e,t);n!==null&&jt(n,e,t),vs(e,t)}}var Gr=!0;function J0(e,t,n,a){var o=j.T;j.T=null;var s=Z.p;try{Z.p=2,Ss(e,t,n,a)}finally{Z.p=s,j.T=o}}function $0(e,t,n,a){var o=j.T;j.T=null;var s=Z.p;try{Z.p=8,Ss(e,t,n,a)}finally{Z.p=s,j.T=o}}function Ss(e,t,n,a){if(Gr){var o=ks(a);if(o===null)us(e,t,a,Vr,n),vd(e,a);else if(P0(o,e,t,n,a))a.stopPropagation();else if(vd(e,a),t&4&&-1<W0.indexOf(e)){for(;o!==null;){var s=Ol(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var g=ul(s.pendingLanes);if(g!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var C=1<<31-Ge(g);v.entanglements[1]|=C,g&=~C}sn(s),(_e&6)===0&&(Tr=xt()+500,ri(0))}}break;case 31:case 13:v=hl(s,2),v!==null&&jt(v,s,2),zr(),vs(s,2)}if(s=ks(a),s===null&&us(e,t,a,Vr,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else us(e,t,a,null,n)}}function ks(e){return e=Eu(e),Es(e)}var Vr=null;function Es(e){if(Vr=null,e=_l(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vr=e,null}function bd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hu()){case V:return 2;case W:return 8;case de:case ke:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var ws=!1,el=null,tl=null,nl=null,pi=new Map,di=new Map,ll=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(e,t){switch(e){case"focusin":case"focusout":el=null;break;case"dragenter":case"dragleave":tl=null;break;case"mouseover":case"mouseout":nl=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function mi(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Ol(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function P0(e,t,n,a,o){switch(t){case"focusin":return el=mi(el,e,t,n,a,o),!0;case"dragenter":return tl=mi(tl,e,t,n,a,o),!0;case"mouseover":return nl=mi(nl,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return pi.set(s,mi(pi.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,di.set(s,mi(di.get(s)||null,e,t,n,a,o)),!0}return!1}function Sd(e){var t=_l(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Oc(e.priority,function(){xd(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Oc(e.priority,function(){xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ku=a,n.target.dispatchEvent(a),ku=null}else return t=Ol(n),t!==null&&yd(t),e.blockedOn=n,!1;t.shift()}return!0}function kd(e,t,n){Xr(e)&&n.delete(t)}function ey(){ws=!1,el!==null&&Xr(el)&&(el=null),tl!==null&&Xr(tl)&&(tl=null),nl!==null&&Xr(nl)&&(nl=null),pi.forEach(kd),di.forEach(kd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ey)))}var Zr=null;function Ed(e){Zr!==e&&(Zr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Zr===e&&(Zr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Es(a||n)===null)continue;break}var s=Ol(n);s!==null&&(e.splice(t,3),t-=3,ko(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function ma(e){function t(C){return Qr(C,e)}el!==null&&Qr(el,e),tl!==null&&Qr(tl,e),nl!==null&&Qr(nl,e),pi.forEach(t),di.forEach(t);for(var n=0;n<ll.length;n++){var a=ll[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ll.length&&(n=ll[0],n.blockedOn===null);)Sd(n),n.blockedOn===null&&ll.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],g=o[Et]||null;if(typeof s=="function")g||Ed(n);else if(g){var v=null;if(s&&s.hasAttribute("formAction")){if(o=s,g=s[Et]||null)v=g.formAction;else if(Es(o)!==null)continue}else v=g.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),Ed(n)}}}function wd(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(g){return o=g})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Ts(e){this._internalRoot=e}Ir.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ht();md(n,a,e,t,null,null)},Ir.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;md(e.current,2,null,e,null,null),zr(),t[Nl]=null}};function Ir(e){this._internalRoot=e}Ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ll.length&&t!==0&&t<ll[n].priority;n++);ll.splice(n,0,e),n===0&&Sd(e)}};var Td=r.version;if(Td!=="19.2.3")throw Error(u(527,Td,"19.2.3"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=p(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var ty={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{bt=Fr.inject(ty),it=Fr}catch{}}return yi.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,a="",o=Nh,s=_h,g=Oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=pd(e,1,!1,null,null,n,a,null,o,s,g,wd),e[Nl]=t.current,rs(e),new Ts(t)},yi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var a=!1,o="",s=Nh,g=_h,v=Oh,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=pd(e,1,!0,t,n??null,a,o,C,s,g,v,wd),t.context=dd(null),n=t.current,a=Ht(),a=du(a),o=Gn(a),o.callback=null,Vn(n,o,a),n=a,t.current.lanes=n,Ca(t,n),sn(t),e[Nl]=t.current,rs(e),new Ir(t)},yi.version="19.2.3",yi}var Rd;function fy(){if(Rd)return As.exports;Rd=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),As.exports=cy(),As.exports}var hy=fy();const py=au(hy);function dy(){const[l,r]=Ne.useState([]),i=Ne.useRef(0);return Ne.useEffect(()=>{const u=[],c=f=>{const h=i.current+1;i.current=h,r(m=>[...m,{id:h,x:f.clientX,y:f.clientY}].slice(-10));const d=window.setTimeout(()=>{r(m=>m.filter(p=>p.id!==h))},1300);u.push(d)};return window.addEventListener("pointerdown",c,{passive:!0}),()=>{window.removeEventListener("pointerdown",c),u.forEach(f=>window.clearTimeout(f))}},[]),b.jsx("div",{className:"clickRipples","aria-hidden":"true",children:l.map(u=>b.jsxs(Ne.Fragment,{children:[b.jsx("span",{className:"rippleDots",style:{left:`${u.x}px`,top:`${u.y}px`}}),b.jsx("span",{className:"ripple rippleA",style:{left:`${u.x}px`,top:`${u.y}px`}}),b.jsx("span",{className:"ripple rippleB",style:{left:`${u.x}px`,top:`${u.y}px`}})]},u.id))})}function my(l,r){const i={};return(l[l.length-1]===""?[...l,""]:l).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const gy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xy={};function Ld(l,r){return(xy.jsx?yy:gy).test(l)}const by=/[ \t\n\f\r]/g;function vy(l){return typeof l=="object"?l.type==="text"?Bd(l.value):!1:Bd(l)}function Bd(l){return l.replace(by,"")===""}class zi{constructor(r,i,u){this.normal=i,this.property=r,u&&(this.space=u)}}zi.prototype.normal={};zi.prototype.property={};zi.prototype.space=void 0;function jm(l,r){const i={},u={};for(const c of l)Object.assign(i,c.property),Object.assign(u,c.normal);return new zi(i,u,r)}function $s(l){return l.toLowerCase()}class Dt{constructor(r,i){this.attribute=i,this.property=r}}Dt.prototype.attribute="";Dt.prototype.booleanish=!1;Dt.prototype.boolean=!1;Dt.prototype.commaOrSpaceSeparated=!1;Dt.prototype.commaSeparated=!1;Dt.prototype.defined=!1;Dt.prototype.mustUseProperty=!1;Dt.prototype.number=!1;Dt.prototype.overloadedBoolean=!1;Dt.prototype.property="";Dt.prototype.spaceSeparated=!1;Dt.prototype.space=void 0;let Sy=0;const be=zl(),at=zl(),Ws=zl(),F=zl(),Qe=zl(),ba=zl(),qt=zl();function zl(){return 2**++Sy}const Ps=Object.freeze(Object.defineProperty({__proto__:null,boolean:be,booleanish:at,commaOrSpaceSeparated:qt,commaSeparated:ba,number:F,overloadedBoolean:Ws,spaceSeparated:Qe},Symbol.toStringTag,{value:"Module"})),Ns=Object.keys(Ps);class sc extends Dt{constructor(r,i,u,c){let f=-1;if(super(r,i),Ud(this,"space",c),typeof u=="number")for(;++f<Ns.length;){const h=Ns[f];Ud(this,Ns[f],(u&Ps[h])===Ps[h])}}}sc.prototype.defined=!0;function Ud(l,r,i){i&&(l[r]=i)}function Sa(l){const r={},i={};for(const[u,c]of Object.entries(l.properties)){const f=new sc(u,l.transform(l.attributes||{},u),c,l.space);l.mustUseProperty&&l.mustUseProperty.includes(u)&&(f.mustUseProperty=!0),r[u]=f,i[$s(u)]=u,i[$s(f.attribute)]=u}return new zi(r,i,l.space)}const Mm=Sa({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:F,ariaColIndex:F,ariaColSpan:F,ariaControls:Qe,ariaCurrent:null,ariaDescribedBy:Qe,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Qe,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Qe,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qe,ariaLevel:F,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Qe,ariaPlaceholder:null,ariaPosInSet:F,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Qe,ariaRowCount:F,ariaRowIndex:F,ariaRowSpan:F,ariaSelected:at,ariaSetSize:F,ariaSort:null,ariaValueMax:F,ariaValueMin:F,ariaValueNow:F,ariaValueText:null,role:null},transform(l,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function Dm(l,r){return r in l?l[r]:r}function Nm(l,r){return Dm(l,r.toLowerCase())}const ky=Sa({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ba,acceptCharset:Qe,accessKey:Qe,action:null,allow:null,allowFullScreen:be,allowPaymentRequest:be,allowUserMedia:be,alt:null,as:null,async:be,autoCapitalize:null,autoComplete:Qe,autoFocus:be,autoPlay:be,blocking:Qe,capture:null,charSet:null,checked:be,cite:null,className:Qe,cols:F,colSpan:null,content:null,contentEditable:at,controls:be,controlsList:Qe,coords:F|ba,crossOrigin:null,data:null,dateTime:null,decoding:null,default:be,defer:be,dir:null,dirName:null,disabled:be,download:Ws,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:be,formTarget:null,headers:Qe,height:F,hidden:Ws,high:F,href:null,hrefLang:null,htmlFor:Qe,httpEquiv:Qe,id:null,imageSizes:null,imageSrcSet:null,inert:be,inputMode:null,integrity:null,is:null,isMap:be,itemId:null,itemProp:Qe,itemRef:Qe,itemScope:be,itemType:Qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:be,low:F,manifest:null,max:null,maxLength:F,media:null,method:null,min:null,minLength:F,multiple:be,muted:be,name:null,nonce:null,noModule:be,noValidate:be,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:be,optimum:F,pattern:null,ping:Qe,placeholder:null,playsInline:be,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:be,referrerPolicy:null,rel:Qe,required:be,reversed:be,rows:F,rowSpan:F,sandbox:Qe,scope:null,scoped:be,seamless:be,selected:be,shadowRootClonable:be,shadowRootDelegatesFocus:be,shadowRootMode:null,shape:null,size:F,sizes:null,slot:null,span:F,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:F,step:null,style:null,tabIndex:F,target:null,title:null,translate:null,type:null,typeMustMatch:be,useMap:null,value:at,width:F,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Qe,axis:null,background:null,bgColor:null,border:F,borderColor:null,bottomMargin:F,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:be,declare:be,event:null,face:null,frame:null,frameBorder:null,hSpace:F,leftMargin:F,link:null,longDesc:null,lowSrc:null,marginHeight:F,marginWidth:F,noResize:be,noHref:be,noShade:be,noWrap:be,object:null,profile:null,prompt:null,rev:null,rightMargin:F,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:F,valueType:null,version:null,vAlign:null,vLink:null,vSpace:F,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:be,disableRemotePlayback:be,prefix:null,property:null,results:F,security:null,unselectable:null},space:"html",transform:Nm}),Ey=Sa({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qt,accentHeight:F,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:F,amplitude:F,arabicForm:null,ascent:F,attributeName:null,attributeType:null,azimuth:F,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:F,by:null,calcMode:null,capHeight:F,className:Qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:F,diffuseConstant:F,direction:null,display:null,dur:null,divisor:F,dominantBaseline:null,download:be,dx:null,dy:null,edgeMode:null,editable:null,elevation:F,enableBackground:null,end:null,event:null,exponent:F,externalResourcesRequired:null,fill:null,fillOpacity:F,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ba,g2:ba,glyphName:ba,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:F,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:F,horizOriginX:F,horizOriginY:F,id:null,ideographic:F,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:F,k:F,k1:F,k2:F,k3:F,k4:F,kernelMatrix:qt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:F,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:F,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:F,overlineThickness:F,paintOrder:null,panose1:null,path:null,pathLength:F,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:F,pointsAtY:F,pointsAtZ:F,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qt,rev:qt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qt,requiredFeatures:qt,requiredFonts:qt,requiredFormats:qt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:F,specularExponent:F,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:F,strikethroughThickness:F,string:null,stroke:null,strokeDashArray:qt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:F,strokeOpacity:F,strokeWidth:null,style:null,surfaceScale:F,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qt,tabIndex:F,tableValues:null,target:null,targetX:F,targetY:F,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:F,underlineThickness:F,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:F,values:null,vAlphabetic:F,vMathematical:F,vectorEffect:null,vHanging:F,vIdeographic:F,version:null,vertAdvY:F,vertOriginX:F,vertOriginY:F,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:F,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Dm}),_m=Sa({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(l,r){return"xlink:"+r.slice(5).toLowerCase()}}),Om=Sa({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Nm}),Rm=Sa({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(l,r){return"xml:"+r.slice(3).toLowerCase()}}),wy={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ty=/[A-Z]/g,Hd=/-[a-z]/g,Cy=/^data[-\w.:]+$/i;function zy(l,r){const i=$s(r);let u=r,c=Dt;if(i in l.normal)return l.property[l.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&Cy.test(r)){if(r.charAt(4)==="-"){const f=r.slice(5).replace(Hd,jy);u="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=r.slice(4);if(!Hd.test(f)){let h=f.replace(Ty,Ay);h.charAt(0)!=="-"&&(h="-"+h),r="data"+h}}c=sc}return new c(u,r)}function Ay(l){return"-"+l.toLowerCase()}function jy(l){return l.charAt(1).toUpperCase()}const My=jm([Mm,ky,_m,Om,Rm],"html"),cc=jm([Mm,Ey,_m,Om,Rm],"svg");function Dy(l){return l.join(" ").trim()}var ga={},_s,qd;function Ny(){if(qd)return _s;qd=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,h=/^[;\s]*/,d=/^\s+|\s+$/g,m=`
`,p="/",x="*",y="",k="comment",S="declaration";function A(L,D){if(typeof L!="string")throw new TypeError("First argument must be a string");if(!L)return[];D=D||{};var I=1,Y=1;function re(ie){var $=ie.match(r);$&&(I+=$.length);var j=ie.lastIndexOf(m);Y=~j?ie.length-j:Y+ie.length}function ne(){var ie={line:I,column:Y};return function($){return $.position=new H(ie),pe(),$}}function H(ie){this.start=ie,this.end={line:I,column:Y},this.source=D.source}H.prototype.content=L;function J(ie){var $=new Error(D.source+":"+I+":"+Y+": "+ie);if($.reason=ie,$.filename=D.source,$.line=I,$.column=Y,$.source=L,!D.silent)throw $}function fe(ie){var $=ie.exec(L);if($){var j=$[0];return re(j),L=L.slice(j.length),$}}function pe(){fe(i)}function B(ie){var $;for(ie=ie||[];$=ee();)$!==!1&&ie.push($);return ie}function ee(){var ie=ne();if(!(p!=L.charAt(0)||x!=L.charAt(1))){for(var $=2;y!=L.charAt($)&&(x!=L.charAt($)||p!=L.charAt($+1));)++$;if($+=2,y===L.charAt($-1))return J("End of comment missing");var j=L.slice(2,$-2);return Y+=2,re(j),L=L.slice($),Y+=2,ie({type:k,comment:j})}}function P(){var ie=ne(),$=fe(u);if($){if(ee(),!fe(c))return J("property missing ':'");var j=fe(f),Z=ie({type:S,property:M($[0].replace(l,y)),value:j?M(j[0].replace(l,y)):y});return fe(h),Z}}function ve(){var ie=[];B(ie);for(var $;$=P();)$!==!1&&(ie.push($),B(ie));return ie}return pe(),ve()}function M(L){return L?L.replace(d,y):y}return _s=A,_s}var Yd;function _y(){if(Yd)return ga;Yd=1;var l=ga&&ga.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=i;const r=l(Ny());function i(u,c){let f=null;if(!u||typeof u!="string")return f;const h=(0,r.default)(u),d=typeof c=="function";return h.forEach(m=>{if(m.type!=="declaration")return;const{property:p,value:x}=m;d?c(p,x,m):x&&(f=f||{},f[p]=x)}),f}return ga}var xi={},Gd;function Oy(){if(Gd)return xi;Gd=1,Object.defineProperty(xi,"__esModule",{value:!0}),xi.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,f=function(p){return!p||i.test(p)||l.test(p)},h=function(p,x){return x.toUpperCase()},d=function(p,x){return"".concat(x,"-")},m=function(p,x){return x===void 0&&(x={}),f(p)?p:(p=p.toLowerCase(),x.reactCompat?p=p.replace(c,d):p=p.replace(u,d),p.replace(r,h))};return xi.camelCase=m,xi}var bi,Vd;function Ry(){if(Vd)return bi;Vd=1;var l=bi&&bi.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},r=l(_y()),i=Oy();function u(c,f){var h={};return!c||typeof c!="string"||(0,r.default)(c,function(d,m){d&&m&&(h[(0,i.camelCase)(d,f)]=m)}),h}return u.default=u,bi=u,bi}var Ly=Ry();const By=au(Ly),Lm=Bm("end"),fc=Bm("start");function Bm(l){return r;function r(i){const u=i&&i.position&&i.position[l]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Uy(l){const r=fc(l),i=Lm(l);if(r&&i)return{start:r,end:i}}function ki(l){return!l||typeof l!="object"?"":"position"in l||"type"in l?Xd(l.position):"start"in l||"end"in l?Xd(l):"line"in l||"column"in l?ec(l):""}function ec(l){return Qd(l&&l.line)+":"+Qd(l&&l.column)}function Xd(l){return ec(l&&l.start)+"-"+ec(l&&l.end)}function Qd(l){return l&&typeof l=="number"?l:1}class yt extends Error{constructor(r,i,u){super(),typeof i=="string"&&(u=i,i=void 0);let c="",f={},h=!1;if(i&&("line"in i&&"column"in i?f={place:i}:"start"in i&&"end"in i?f={place:i}:"type"in i?f={ancestors:[i],place:i.position}:f={...i}),typeof r=="string"?c=r:!f.cause&&r&&(h=!0,c=r.message,f.cause=r),!f.ruleId&&!f.source&&typeof u=="string"){const m=u.indexOf(":");m===-1?f.ruleId=u:(f.source=u.slice(0,m),f.ruleId=u.slice(m+1))}if(!f.place&&f.ancestors&&f.ancestors){const m=f.ancestors[f.ancestors.length-1];m&&(f.place=m.position)}const d=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=d?d.line:void 0,this.name=ki(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=h&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}yt.prototype.file="";yt.prototype.name="";yt.prototype.reason="";yt.prototype.message="";yt.prototype.stack="";yt.prototype.column=void 0;yt.prototype.line=void 0;yt.prototype.ancestors=void 0;yt.prototype.cause=void 0;yt.prototype.fatal=void 0;yt.prototype.place=void 0;yt.prototype.ruleId=void 0;yt.prototype.source=void 0;const hc={}.hasOwnProperty,Hy=new Map,qy=/[A-Z]/g,Yy=new Set(["table","tbody","thead","tfoot","tr"]),Gy=new Set(["td","th"]),Um="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Vy(l,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=r.filePath||void 0;let u;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=$y(i,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=Jy(i,r.jsx,r.jsxs)}const c={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:u,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?cc:My,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},f=Hm(c,l,void 0);return f&&typeof f!="string"?f:c.create(l,c.Fragment,{children:f||void 0},void 0)}function Hm(l,r,i){if(r.type==="element")return Xy(l,r,i);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return Qy(l,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return Iy(l,r,i);if(r.type==="mdxjsEsm")return Zy(l,r);if(r.type==="root")return Fy(l,r,i);if(r.type==="text")return Ky(l,r)}function Xy(l,r,i){const u=l.schema;let c=u;r.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=cc,l.schema=c),l.ancestors.push(r);const f=Ym(l,r.tagName,!1),h=Wy(l,r);let d=dc(l,r);return Yy.has(r.tagName)&&(d=d.filter(function(m){return typeof m=="string"?!vy(m):!0})),qm(l,h,f,r),pc(h,d),l.ancestors.pop(),l.schema=u,l.create(r,f,h,i)}function Qy(l,r){if(r.data&&r.data.estree&&l.evaluater){const u=r.data.estree.body[0];return u.type,l.evaluater.evaluateExpression(u.expression)}Ti(l,r.position)}function Zy(l,r){if(r.data&&r.data.estree&&l.evaluater)return l.evaluater.evaluateProgram(r.data.estree);Ti(l,r.position)}function Iy(l,r,i){const u=l.schema;let c=u;r.name==="svg"&&u.space==="html"&&(c=cc,l.schema=c),l.ancestors.push(r);const f=r.name===null?l.Fragment:Ym(l,r.name,!0),h=Py(l,r),d=dc(l,r);return qm(l,h,f,r),pc(h,d),l.ancestors.pop(),l.schema=u,l.create(r,f,h,i)}function Fy(l,r,i){const u={};return pc(u,dc(l,r)),l.create(r,l.Fragment,u,i)}function Ky(l,r){return r.value}function qm(l,r,i,u){typeof i!="string"&&i!==l.Fragment&&l.passNode&&(r.node=u)}function pc(l,r){if(r.length>0){const i=r.length>1?r:r[0];i&&(l.children=i)}}function Jy(l,r,i){return u;function u(c,f,h,d){const p=Array.isArray(h.children)?i:r;return d?p(f,h,d):p(f,h)}}function $y(l,r){return i;function i(u,c,f,h){const d=Array.isArray(f.children),m=fc(u);return r(c,f,h,d,{columnNumber:m?m.column-1:void 0,fileName:l,lineNumber:m?m.line:void 0},void 0)}}function Wy(l,r){const i={};let u,c;for(c in r.properties)if(c!=="children"&&hc.call(r.properties,c)){const f=ex(l,c,r.properties[c]);if(f){const[h,d]=f;l.tableCellAlignToStyle&&h==="align"&&typeof d=="string"&&Gy.has(r.tagName)?u=d:i[h]=d}}if(u){const f=i.style||(i.style={});f[l.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return i}function Py(l,r){const i={};for(const u of r.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&l.evaluater){const f=u.data.estree.body[0];f.type;const h=f.expression;h.type;const d=h.properties[0];d.type,Object.assign(i,l.evaluater.evaluateExpression(d.argument))}else Ti(l,r.position);else{const c=u.name;let f;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&l.evaluater){const d=u.value.data.estree.body[0];d.type,f=l.evaluater.evaluateExpression(d.expression)}else Ti(l,r.position);else f=u.value===null?!0:u.value;i[c]=f}return i}function dc(l,r){const i=[];let u=-1;const c=l.passKeys?new Map:Hy;for(;++u<r.children.length;){const f=r.children[u];let h;if(l.passKeys){const m=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(m){const p=c.get(m)||0;h=m+"-"+p,c.set(m,p+1)}}const d=Hm(l,f,h);d!==void 0&&i.push(d)}return i}function ex(l,r,i){const u=zy(l.schema,r);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=u.commaSeparated?my(i):Dy(i)),u.property==="style"){let c=typeof i=="object"?i:tx(l,String(i));return l.stylePropertyNameCase==="css"&&(c=nx(c)),["style",c]}return[l.elementAttributeNameCase==="react"&&u.space?wy[u.property]||u.property:u.attribute,i]}}function tx(l,r){try{return By(r,{reactCompat:!0})}catch(i){if(l.ignoreInvalidStyle)return{};const u=i,c=new yt("Cannot parse `style` attribute",{ancestors:l.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=l.filePath||void 0,c.url=Um+"#cannot-parse-style-attribute",c}}function Ym(l,r,i){let u;if(!i)u={type:"Literal",value:r};else if(r.includes(".")){const c=r.split(".");let f=-1,h;for(;++f<c.length;){const d=Ld(c[f])?{type:"Identifier",name:c[f]}:{type:"Literal",value:c[f]};h=h?{type:"MemberExpression",object:h,property:d,computed:!!(f&&d.type==="Literal"),optional:!1}:d}u=h}else u=Ld(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(u.type==="Literal"){const c=u.value;return hc.call(l.components,c)?l.components[c]:c}if(l.evaluater)return l.evaluater.evaluateExpression(u);Ti(l)}function Ti(l,r){const i=new yt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:l.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=l.filePath||void 0,i.url=Um+"#cannot-handle-mdx-estrees-without-createevaluater",i}function nx(l){const r={};let i;for(i in l)hc.call(l,i)&&(r[lx(i)]=l[i]);return r}function lx(l){let r=l.replace(qy,ax);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function ax(l){return"-"+l.toLowerCase()}const Os={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ix={};function mc(l,r){const i=ix,u=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,c=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return Gm(l,u,c)}function Gm(l,r,i){if(rx(l)){if("value"in l)return l.type==="html"&&!i?"":l.value;if(r&&"alt"in l&&l.alt)return l.alt;if("children"in l)return Zd(l.children,r,i)}return Array.isArray(l)?Zd(l,r,i):""}function Zd(l,r,i){const u=[];let c=-1;for(;++c<l.length;)u[c]=Gm(l[c],r,i);return u.join("")}function rx(l){return!!(l&&typeof l=="object")}const Id=document.createElement("i");function gc(l){const r="&"+l+";";Id.innerHTML=r;const i=Id.textContent;return i.charCodeAt(i.length-1)===59&&l!=="semi"||i===r?!1:i}function Yt(l,r,i,u){const c=l.length;let f=0,h;if(r<0?r=-r>c?0:c+r:r=r>c?c:r,i=i>0?i:0,u.length<1e4)h=Array.from(u),h.unshift(r,i),l.splice(...h);else for(i&&l.splice(r,i);f<u.length;)h=u.slice(f,f+1e4),h.unshift(r,0),l.splice(...h),f+=1e4,r+=1e4}function Pt(l,r){return l.length>0?(Yt(l,l.length,0,r),l):r}const Fd={}.hasOwnProperty;function Vm(l){const r={};let i=-1;for(;++i<l.length;)ux(r,l[i]);return r}function ux(l,r){let i;for(i in r){const c=(Fd.call(l,i)?l[i]:void 0)||(l[i]={}),f=r[i];let h;if(f)for(h in f){Fd.call(c,h)||(c[h]=[]);const d=f[h];ox(c[h],Array.isArray(d)?d:d?[d]:[])}}}function ox(l,r){let i=-1;const u=[];for(;++i<r.length;)(r[i].add==="after"?l:u).push(r[i]);Yt(l,0,0,u)}function Xm(l,r){const i=Number.parseInt(l,r);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function an(l){return l.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=rl(/[A-Za-z]/),gt=rl(/[\dA-Za-z]/),sx=rl(/[#-'*+\--9=?A-Z^-~]/);function eu(l){return l!==null&&(l<32||l===127)}const tc=rl(/\d/),cx=rl(/[\dA-Fa-f]/),fx=rl(/[!-/:-@[-`{-~]/);function ce(l){return l!==null&&l<-2}function Xe(l){return l!==null&&(l<0||l===32)}function Te(l){return l===-2||l===-1||l===32}const iu=rl(new RegExp("\\p{P}|\\p{S}","u")),Cl=rl(/\s/);function rl(l){return r;function r(i){return i!==null&&i>-1&&l.test(String.fromCharCode(i))}}function ka(l){const r=[];let i=-1,u=0,c=0;for(;++i<l.length;){const f=l.charCodeAt(i);let h="";if(f===37&&gt(l.charCodeAt(i+1))&&gt(l.charCodeAt(i+2)))c=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(h=String.fromCharCode(f));else if(f>55295&&f<57344){const d=l.charCodeAt(i+1);f<56320&&d>56319&&d<57344?(h=String.fromCharCode(f,d),c=1):h="�"}else h=String.fromCharCode(f);h&&(r.push(l.slice(u,i),encodeURIComponent(h)),u=i+c+1,h=""),c&&(i+=c,c=0)}return r.join("")+l.slice(u)}function je(l,r,i,u){const c=u?u-1:Number.POSITIVE_INFINITY;let f=0;return h;function h(m){return Te(m)?(l.enter(i),d(m)):r(m)}function d(m){return Te(m)&&f++<c?(l.consume(m),d):(l.exit(i),r(m))}}const hx={tokenize:px};function px(l){const r=l.attempt(this.parser.constructs.contentInitial,u,c);let i;return r;function u(d){if(d===null){l.consume(d);return}return l.enter("lineEnding"),l.consume(d),l.exit("lineEnding"),je(l,r,"linePrefix")}function c(d){return l.enter("paragraph"),f(d)}function f(d){const m=l.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,h(d)}function h(d){if(d===null){l.exit("chunkText"),l.exit("paragraph"),l.consume(d);return}return ce(d)?(l.consume(d),l.exit("chunkText"),f):(l.consume(d),h)}}const dx={tokenize:mx},Kd={tokenize:gx};function mx(l){const r=this,i=[];let u=0,c,f,h;return d;function d(Y){if(u<i.length){const re=i[u];return r.containerState=re[1],l.attempt(re[0].continuation,m,p)(Y)}return p(Y)}function m(Y){if(u++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,c&&I();const re=r.events.length;let ne=re,H;for(;ne--;)if(r.events[ne][0]==="exit"&&r.events[ne][1].type==="chunkFlow"){H=r.events[ne][1].end;break}D(u);let J=re;for(;J<r.events.length;)r.events[J][1].end={...H},J++;return Yt(r.events,ne+1,0,r.events.slice(re)),r.events.length=J,p(Y)}return d(Y)}function p(Y){if(u===i.length){if(!c)return k(Y);if(c.currentConstruct&&c.currentConstruct.concrete)return A(Y);r.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return r.containerState={},l.check(Kd,x,y)(Y)}function x(Y){return c&&I(),D(u),k(Y)}function y(Y){return r.parser.lazy[r.now().line]=u!==i.length,h=r.now().offset,A(Y)}function k(Y){return r.containerState={},l.attempt(Kd,S,A)(Y)}function S(Y){return u++,i.push([r.currentConstruct,r.containerState]),k(Y)}function A(Y){if(Y===null){c&&I(),D(0),l.consume(Y);return}return c=c||r.parser.flow(r.now()),l.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:f}),M(Y)}function M(Y){if(Y===null){L(l.exit("chunkFlow"),!0),D(0),l.consume(Y);return}return ce(Y)?(l.consume(Y),L(l.exit("chunkFlow")),u=0,r.interrupt=void 0,d):(l.consume(Y),M)}function L(Y,re){const ne=r.sliceStream(Y);if(re&&ne.push(null),Y.previous=f,f&&(f.next=Y),f=Y,c.defineSkip(Y.start),c.write(ne),r.parser.lazy[Y.start.line]){let H=c.events.length;for(;H--;)if(c.events[H][1].start.offset<h&&(!c.events[H][1].end||c.events[H][1].end.offset>h))return;const J=r.events.length;let fe=J,pe,B;for(;fe--;)if(r.events[fe][0]==="exit"&&r.events[fe][1].type==="chunkFlow"){if(pe){B=r.events[fe][1].end;break}pe=!0}for(D(u),H=J;H<r.events.length;)r.events[H][1].end={...B},H++;Yt(r.events,fe+1,0,r.events.slice(J)),r.events.length=H}}function D(Y){let re=i.length;for(;re-- >Y;){const ne=i[re];r.containerState=ne[1],ne[0].exit.call(r,l)}i.length=Y}function I(){c.write([null]),f=void 0,c=void 0,r.containerState._closeFlow=void 0}}function gx(l,r,i){return je(l,l.attempt(this.parser.constructs.document,r,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function va(l){if(l===null||Xe(l)||Cl(l))return 1;if(iu(l))return 2}function ru(l,r,i){const u=[];let c=-1;for(;++c<l.length;){const f=l[c].resolveAll;f&&!u.includes(f)&&(r=f(r,i),u.push(f))}return r}const nc={name:"attention",resolveAll:yx,tokenize:xx};function yx(l,r){let i=-1,u,c,f,h,d,m,p,x;for(;++i<l.length;)if(l[i][0]==="enter"&&l[i][1].type==="attentionSequence"&&l[i][1]._close){for(u=i;u--;)if(l[u][0]==="exit"&&l[u][1].type==="attentionSequence"&&l[u][1]._open&&r.sliceSerialize(l[u][1]).charCodeAt(0)===r.sliceSerialize(l[i][1]).charCodeAt(0)){if((l[u][1]._close||l[i][1]._open)&&(l[i][1].end.offset-l[i][1].start.offset)%3&&!((l[u][1].end.offset-l[u][1].start.offset+l[i][1].end.offset-l[i][1].start.offset)%3))continue;m=l[u][1].end.offset-l[u][1].start.offset>1&&l[i][1].end.offset-l[i][1].start.offset>1?2:1;const y={...l[u][1].end},k={...l[i][1].start};Jd(y,-m),Jd(k,m),h={type:m>1?"strongSequence":"emphasisSequence",start:y,end:{...l[u][1].end}},d={type:m>1?"strongSequence":"emphasisSequence",start:{...l[i][1].start},end:k},f={type:m>1?"strongText":"emphasisText",start:{...l[u][1].end},end:{...l[i][1].start}},c={type:m>1?"strong":"emphasis",start:{...h.start},end:{...d.end}},l[u][1].end={...h.start},l[i][1].start={...d.end},p=[],l[u][1].end.offset-l[u][1].start.offset&&(p=Pt(p,[["enter",l[u][1],r],["exit",l[u][1],r]])),p=Pt(p,[["enter",c,r],["enter",h,r],["exit",h,r],["enter",f,r]]),p=Pt(p,ru(r.parser.constructs.insideSpan.null,l.slice(u+1,i),r)),p=Pt(p,[["exit",f,r],["enter",d,r],["exit",d,r],["exit",c,r]]),l[i][1].end.offset-l[i][1].start.offset?(x=2,p=Pt(p,[["enter",l[i][1],r],["exit",l[i][1],r]])):x=0,Yt(l,u-1,i-u+3,p),i=u+p.length-x-2;break}}for(i=-1;++i<l.length;)l[i][1].type==="attentionSequence"&&(l[i][1].type="data");return l}function xx(l,r){const i=this.parser.constructs.attentionMarkers.null,u=this.previous,c=va(u);let f;return h;function h(m){return f=m,l.enter("attentionSequence"),d(m)}function d(m){if(m===f)return l.consume(m),d;const p=l.exit("attentionSequence"),x=va(m),y=!x||x===2&&c||i.includes(m),k=!c||c===2&&x||i.includes(u);return p._open=!!(f===42?y:y&&(c||!k)),p._close=!!(f===42?k:k&&(x||!y)),r(m)}}function Jd(l,r){l.column+=r,l.offset+=r,l._bufferIndex+=r}const bx={name:"autolink",tokenize:vx};function vx(l,r,i){let u=0;return c;function c(S){return l.enter("autolink"),l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.enter("autolinkProtocol"),f}function f(S){return St(S)?(l.consume(S),h):S===64?i(S):p(S)}function h(S){return S===43||S===45||S===46||gt(S)?(u=1,d(S)):p(S)}function d(S){return S===58?(l.consume(S),u=0,m):(S===43||S===45||S===46||gt(S))&&u++<32?(l.consume(S),d):(u=0,p(S))}function m(S){return S===62?(l.exit("autolinkProtocol"),l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.exit("autolink"),r):S===null||S===32||S===60||eu(S)?i(S):(l.consume(S),m)}function p(S){return S===64?(l.consume(S),x):sx(S)?(l.consume(S),p):i(S)}function x(S){return gt(S)?y(S):i(S)}function y(S){return S===46?(l.consume(S),u=0,x):S===62?(l.exit("autolinkProtocol").type="autolinkEmail",l.enter("autolinkMarker"),l.consume(S),l.exit("autolinkMarker"),l.exit("autolink"),r):k(S)}function k(S){if((S===45||gt(S))&&u++<63){const A=S===45?k:y;return l.consume(S),A}return i(S)}}const Ai={partial:!0,tokenize:Sx};function Sx(l,r,i){return u;function u(f){return Te(f)?je(l,c,"linePrefix")(f):c(f)}function c(f){return f===null||ce(f)?r(f):i(f)}}const Qm={continuation:{tokenize:Ex},exit:wx,name:"blockQuote",tokenize:kx};function kx(l,r,i){const u=this;return c;function c(h){if(h===62){const d=u.containerState;return d.open||(l.enter("blockQuote",{_container:!0}),d.open=!0),l.enter("blockQuotePrefix"),l.enter("blockQuoteMarker"),l.consume(h),l.exit("blockQuoteMarker"),f}return i(h)}function f(h){return Te(h)?(l.enter("blockQuotePrefixWhitespace"),l.consume(h),l.exit("blockQuotePrefixWhitespace"),l.exit("blockQuotePrefix"),r):(l.exit("blockQuotePrefix"),r(h))}}function Ex(l,r,i){const u=this;return c;function c(h){return Te(h)?je(l,f,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):f(h)}function f(h){return l.attempt(Qm,r,i)(h)}}function wx(l){l.exit("blockQuote")}const Zm={name:"characterEscape",tokenize:Tx};function Tx(l,r,i){return u;function u(f){return l.enter("characterEscape"),l.enter("escapeMarker"),l.consume(f),l.exit("escapeMarker"),c}function c(f){return fx(f)?(l.enter("characterEscapeValue"),l.consume(f),l.exit("characterEscapeValue"),l.exit("characterEscape"),r):i(f)}}const Im={name:"characterReference",tokenize:Cx};function Cx(l,r,i){const u=this;let c=0,f,h;return d;function d(y){return l.enter("characterReference"),l.enter("characterReferenceMarker"),l.consume(y),l.exit("characterReferenceMarker"),m}function m(y){return y===35?(l.enter("characterReferenceMarkerNumeric"),l.consume(y),l.exit("characterReferenceMarkerNumeric"),p):(l.enter("characterReferenceValue"),f=31,h=gt,x(y))}function p(y){return y===88||y===120?(l.enter("characterReferenceMarkerHexadecimal"),l.consume(y),l.exit("characterReferenceMarkerHexadecimal"),l.enter("characterReferenceValue"),f=6,h=cx,x):(l.enter("characterReferenceValue"),f=7,h=tc,x(y))}function x(y){if(y===59&&c){const k=l.exit("characterReferenceValue");return h===gt&&!gc(u.sliceSerialize(k))?i(y):(l.enter("characterReferenceMarker"),l.consume(y),l.exit("characterReferenceMarker"),l.exit("characterReference"),r)}return h(y)&&c++<f?(l.consume(y),x):i(y)}}const $d={partial:!0,tokenize:Ax},Wd={concrete:!0,name:"codeFenced",tokenize:zx};function zx(l,r,i){const u=this,c={partial:!0,tokenize:ne};let f=0,h=0,d;return m;function m(H){return p(H)}function p(H){const J=u.events[u.events.length-1];return f=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,d=H,l.enter("codeFenced"),l.enter("codeFencedFence"),l.enter("codeFencedFenceSequence"),x(H)}function x(H){return H===d?(h++,l.consume(H),x):h<3?i(H):(l.exit("codeFencedFenceSequence"),Te(H)?je(l,y,"whitespace")(H):y(H))}function y(H){return H===null||ce(H)?(l.exit("codeFencedFence"),u.interrupt?r(H):l.check($d,M,re)(H)):(l.enter("codeFencedFenceInfo"),l.enter("chunkString",{contentType:"string"}),k(H))}function k(H){return H===null||ce(H)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),y(H)):Te(H)?(l.exit("chunkString"),l.exit("codeFencedFenceInfo"),je(l,S,"whitespace")(H)):H===96&&H===d?i(H):(l.consume(H),k)}function S(H){return H===null||ce(H)?y(H):(l.enter("codeFencedFenceMeta"),l.enter("chunkString",{contentType:"string"}),A(H))}function A(H){return H===null||ce(H)?(l.exit("chunkString"),l.exit("codeFencedFenceMeta"),y(H)):H===96&&H===d?i(H):(l.consume(H),A)}function M(H){return l.attempt(c,re,L)(H)}function L(H){return l.enter("lineEnding"),l.consume(H),l.exit("lineEnding"),D}function D(H){return f>0&&Te(H)?je(l,I,"linePrefix",f+1)(H):I(H)}function I(H){return H===null||ce(H)?l.check($d,M,re)(H):(l.enter("codeFlowValue"),Y(H))}function Y(H){return H===null||ce(H)?(l.exit("codeFlowValue"),I(H)):(l.consume(H),Y)}function re(H){return l.exit("codeFenced"),r(H)}function ne(H,J,fe){let pe=0;return B;function B($){return H.enter("lineEnding"),H.consume($),H.exit("lineEnding"),ee}function ee($){return H.enter("codeFencedFence"),Te($)?je(H,P,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):P($)}function P($){return $===d?(H.enter("codeFencedFenceSequence"),ve($)):fe($)}function ve($){return $===d?(pe++,H.consume($),ve):pe>=h?(H.exit("codeFencedFenceSequence"),Te($)?je(H,ie,"whitespace")($):ie($)):fe($)}function ie($){return $===null||ce($)?(H.exit("codeFencedFence"),J($)):fe($)}}}function Ax(l,r,i){const u=this;return c;function c(h){return h===null?i(h):(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),f)}function f(h){return u.parser.lazy[u.now().line]?i(h):r(h)}}const Rs={name:"codeIndented",tokenize:Mx},jx={partial:!0,tokenize:Dx};function Mx(l,r,i){const u=this;return c;function c(p){return l.enter("codeIndented"),je(l,f,"linePrefix",5)(p)}function f(p){const x=u.events[u.events.length-1];return x&&x[1].type==="linePrefix"&&x[2].sliceSerialize(x[1],!0).length>=4?h(p):i(p)}function h(p){return p===null?m(p):ce(p)?l.attempt(jx,h,m)(p):(l.enter("codeFlowValue"),d(p))}function d(p){return p===null||ce(p)?(l.exit("codeFlowValue"),h(p)):(l.consume(p),d)}function m(p){return l.exit("codeIndented"),r(p)}}function Dx(l,r,i){const u=this;return c;function c(h){return u.parser.lazy[u.now().line]?i(h):ce(h)?(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),c):je(l,f,"linePrefix",5)(h)}function f(h){const d=u.events[u.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(h):ce(h)?c(h):i(h)}}const Nx={name:"codeText",previous:Ox,resolve:_x,tokenize:Rx};function _x(l){let r=l.length-4,i=3,u,c;if((l[i][1].type==="lineEnding"||l[i][1].type==="space")&&(l[r][1].type==="lineEnding"||l[r][1].type==="space")){for(u=i;++u<r;)if(l[u][1].type==="codeTextData"){l[i][1].type="codeTextPadding",l[r][1].type="codeTextPadding",i+=2,r-=2;break}}for(u=i-1,r++;++u<=r;)c===void 0?u!==r&&l[u][1].type!=="lineEnding"&&(c=u):(u===r||l[u][1].type==="lineEnding")&&(l[c][1].type="codeTextData",u!==c+2&&(l[c][1].end=l[u-1][1].end,l.splice(c+2,u-c-2),r-=u-c-2,u=c+2),c=void 0);return l}function Ox(l){return l!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Rx(l,r,i){let u=0,c,f;return h;function h(y){return l.enter("codeText"),l.enter("codeTextSequence"),d(y)}function d(y){return y===96?(l.consume(y),u++,d):(l.exit("codeTextSequence"),m(y))}function m(y){return y===null?i(y):y===32?(l.enter("space"),l.consume(y),l.exit("space"),m):y===96?(f=l.enter("codeTextSequence"),c=0,x(y)):ce(y)?(l.enter("lineEnding"),l.consume(y),l.exit("lineEnding"),m):(l.enter("codeTextData"),p(y))}function p(y){return y===null||y===32||y===96||ce(y)?(l.exit("codeTextData"),m(y)):(l.consume(y),p)}function x(y){return y===96?(l.consume(y),c++,x):c===u?(l.exit("codeTextSequence"),l.exit("codeText"),r(y)):(f.type="codeTextData",p(y))}}class Lx{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,i){const u=i??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(r,u):r>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(r,i,u){const c=i||0;this.setCursor(Math.trunc(r));const f=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&vi(this.left,u),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),vi(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),vi(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const i=this.left.splice(r,Number.POSITIVE_INFINITY);vi(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);vi(this.left,i.reverse())}}}function vi(l,r){let i=0;if(r.length<1e4)l.push(...r);else for(;i<r.length;)l.push(...r.slice(i,i+1e4)),i+=1e4}function Fm(l){const r={};let i=-1,u,c,f,h,d,m,p;const x=new Lx(l);for(;++i<x.length;){for(;i in r;)i=r[i];if(u=x.get(i),i&&u[1].type==="chunkFlow"&&x.get(i-1)[1].type==="listItemPrefix"&&(m=u[1]._tokenizer.events,f=0,f<m.length&&m[f][1].type==="lineEndingBlank"&&(f+=2),f<m.length&&m[f][1].type==="content"))for(;++f<m.length&&m[f][1].type!=="content";)m[f][1].type==="chunkText"&&(m[f][1]._isInFirstContentOfListItem=!0,f++);if(u[0]==="enter")u[1].contentType&&(Object.assign(r,Bx(x,i)),i=r[i],p=!0);else if(u[1]._container){for(f=i,c=void 0;f--;)if(h=x.get(f),h[1].type==="lineEnding"||h[1].type==="lineEndingBlank")h[0]==="enter"&&(c&&(x.get(c)[1].type="lineEndingBlank"),h[1].type="lineEnding",c=f);else if(!(h[1].type==="linePrefix"||h[1].type==="listItemIndent"))break;c&&(u[1].end={...x.get(c)[1].start},d=x.slice(c,i),d.unshift(u),x.splice(c,i-c+1,d))}}return Yt(l,0,Number.POSITIVE_INFINITY,x.slice(0)),!p}function Bx(l,r){const i=l.get(r)[1],u=l.get(r)[2];let c=r-1;const f=[];let h=i._tokenizer;h||(h=u.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(h._contentTypeTextTrailing=!0));const d=h.events,m=[],p={};let x,y,k=-1,S=i,A=0,M=0;const L=[M];for(;S;){for(;l.get(++c)[1]!==S;);f.push(c),S._tokenizer||(x=u.sliceStream(S),S.next||x.push(null),y&&h.defineSkip(S.start),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=!0),h.write(x),S._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=void 0)),y=S,S=S.next}for(S=i;++k<d.length;)d[k][0]==="exit"&&d[k-1][0]==="enter"&&d[k][1].type===d[k-1][1].type&&d[k][1].start.line!==d[k][1].end.line&&(M=k+1,L.push(M),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(h.events=[],S?(S._tokenizer=void 0,S.previous=void 0):L.pop(),k=L.length;k--;){const D=d.slice(L[k],L[k+1]),I=f.pop();m.push([I,I+D.length-1]),l.splice(I,2,D)}for(m.reverse(),k=-1;++k<m.length;)p[A+m[k][0]]=A+m[k][1],A+=m[k][1]-m[k][0]-1;return p}const Ux={resolve:qx,tokenize:Yx},Hx={partial:!0,tokenize:Gx};function qx(l){return Fm(l),l}function Yx(l,r){let i;return u;function u(d){return l.enter("content"),i=l.enter("chunkContent",{contentType:"content"}),c(d)}function c(d){return d===null?f(d):ce(d)?l.check(Hx,h,f)(d):(l.consume(d),c)}function f(d){return l.exit("chunkContent"),l.exit("content"),r(d)}function h(d){return l.consume(d),l.exit("chunkContent"),i.next=l.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,c}}function Gx(l,r,i){const u=this;return c;function c(h){return l.exit("chunkContent"),l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),je(l,f,"linePrefix")}function f(h){if(h===null||ce(h))return i(h);const d=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(h):l.interrupt(u.parser.constructs.flow,i,r)(h)}}function Km(l,r,i,u,c,f,h,d,m){const p=m||Number.POSITIVE_INFINITY;let x=0;return y;function y(D){return D===60?(l.enter(u),l.enter(c),l.enter(f),l.consume(D),l.exit(f),k):D===null||D===32||D===41||eu(D)?i(D):(l.enter(u),l.enter(h),l.enter(d),l.enter("chunkString",{contentType:"string"}),M(D))}function k(D){return D===62?(l.enter(f),l.consume(D),l.exit(f),l.exit(c),l.exit(u),r):(l.enter(d),l.enter("chunkString",{contentType:"string"}),S(D))}function S(D){return D===62?(l.exit("chunkString"),l.exit(d),k(D)):D===null||D===60||ce(D)?i(D):(l.consume(D),D===92?A:S)}function A(D){return D===60||D===62||D===92?(l.consume(D),S):S(D)}function M(D){return!x&&(D===null||D===41||Xe(D))?(l.exit("chunkString"),l.exit(d),l.exit(h),l.exit(u),r(D)):x<p&&D===40?(l.consume(D),x++,M):D===41?(l.consume(D),x--,M):D===null||D===32||D===40||eu(D)?i(D):(l.consume(D),D===92?L:M)}function L(D){return D===40||D===41||D===92?(l.consume(D),M):M(D)}}function Jm(l,r,i,u,c,f){const h=this;let d=0,m;return p;function p(S){return l.enter(u),l.enter(c),l.consume(S),l.exit(c),l.enter(f),x}function x(S){return d>999||S===null||S===91||S===93&&!m||S===94&&!d&&"_hiddenFootnoteSupport"in h.parser.constructs?i(S):S===93?(l.exit(f),l.enter(c),l.consume(S),l.exit(c),l.exit(u),r):ce(S)?(l.enter("lineEnding"),l.consume(S),l.exit("lineEnding"),x):(l.enter("chunkString",{contentType:"string"}),y(S))}function y(S){return S===null||S===91||S===93||ce(S)||d++>999?(l.exit("chunkString"),x(S)):(l.consume(S),m||(m=!Te(S)),S===92?k:y)}function k(S){return S===91||S===92||S===93?(l.consume(S),d++,y):y(S)}}function $m(l,r,i,u,c,f){let h;return d;function d(k){return k===34||k===39||k===40?(l.enter(u),l.enter(c),l.consume(k),l.exit(c),h=k===40?41:k,m):i(k)}function m(k){return k===h?(l.enter(c),l.consume(k),l.exit(c),l.exit(u),r):(l.enter(f),p(k))}function p(k){return k===h?(l.exit(f),m(h)):k===null?i(k):ce(k)?(l.enter("lineEnding"),l.consume(k),l.exit("lineEnding"),je(l,p,"linePrefix")):(l.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===h||k===null||ce(k)?(l.exit("chunkString"),p(k)):(l.consume(k),k===92?y:x)}function y(k){return k===h||k===92?(l.consume(k),x):x(k)}}function Ei(l,r){let i;return u;function u(c){return ce(c)?(l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),i=!0,u):Te(c)?je(l,u,i?"linePrefix":"lineSuffix")(c):r(c)}}const Vx={name:"definition",tokenize:Qx},Xx={partial:!0,tokenize:Zx};function Qx(l,r,i){const u=this;let c;return f;function f(S){return l.enter("definition"),h(S)}function h(S){return Jm.call(u,l,d,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function d(S){return c=an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),S===58?(l.enter("definitionMarker"),l.consume(S),l.exit("definitionMarker"),m):i(S)}function m(S){return Xe(S)?Ei(l,p)(S):p(S)}function p(S){return Km(l,x,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function x(S){return l.attempt(Xx,y,y)(S)}function y(S){return Te(S)?je(l,k,"whitespace")(S):k(S)}function k(S){return S===null||ce(S)?(l.exit("definition"),u.parser.defined.push(c),r(S)):i(S)}}function Zx(l,r,i){return u;function u(d){return Xe(d)?Ei(l,c)(d):i(d)}function c(d){return $m(l,f,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function f(d){return Te(d)?je(l,h,"whitespace")(d):h(d)}function h(d){return d===null||ce(d)?r(d):i(d)}}const Ix={name:"hardBreakEscape",tokenize:Fx};function Fx(l,r,i){return u;function u(f){return l.enter("hardBreakEscape"),l.consume(f),c}function c(f){return ce(f)?(l.exit("hardBreakEscape"),r(f)):i(f)}}const Kx={name:"headingAtx",resolve:Jx,tokenize:$x};function Jx(l,r){let i=l.length-2,u=3,c,f;return l[u][1].type==="whitespace"&&(u+=2),i-2>u&&l[i][1].type==="whitespace"&&(i-=2),l[i][1].type==="atxHeadingSequence"&&(u===i-1||i-4>u&&l[i-2][1].type==="whitespace")&&(i-=u+1===i?2:4),i>u&&(c={type:"atxHeadingText",start:l[u][1].start,end:l[i][1].end},f={type:"chunkText",start:l[u][1].start,end:l[i][1].end,contentType:"text"},Yt(l,u,i-u+1,[["enter",c,r],["enter",f,r],["exit",f,r],["exit",c,r]])),l}function $x(l,r,i){let u=0;return c;function c(x){return l.enter("atxHeading"),f(x)}function f(x){return l.enter("atxHeadingSequence"),h(x)}function h(x){return x===35&&u++<6?(l.consume(x),h):x===null||Xe(x)?(l.exit("atxHeadingSequence"),d(x)):i(x)}function d(x){return x===35?(l.enter("atxHeadingSequence"),m(x)):x===null||ce(x)?(l.exit("atxHeading"),r(x)):Te(x)?je(l,d,"whitespace")(x):(l.enter("atxHeadingText"),p(x))}function m(x){return x===35?(l.consume(x),m):(l.exit("atxHeadingSequence"),d(x))}function p(x){return x===null||x===35||Xe(x)?(l.exit("atxHeadingText"),d(x)):(l.consume(x),p)}}const Wx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Pd=["pre","script","style","textarea"],Px={concrete:!0,name:"htmlFlow",resolveTo:nb,tokenize:lb},eb={partial:!0,tokenize:ib},tb={partial:!0,tokenize:ab};function nb(l){let r=l.length;for(;r--&&!(l[r][0]==="enter"&&l[r][1].type==="htmlFlow"););return r>1&&l[r-2][1].type==="linePrefix"&&(l[r][1].start=l[r-2][1].start,l[r+1][1].start=l[r-2][1].start,l.splice(r-2,2)),l}function lb(l,r,i){const u=this;let c,f,h,d,m;return p;function p(E){return x(E)}function x(E){return l.enter("htmlFlow"),l.enter("htmlFlowData"),l.consume(E),y}function y(E){return E===33?(l.consume(E),k):E===47?(l.consume(E),f=!0,M):E===63?(l.consume(E),c=3,u.interrupt?r:w):St(E)?(l.consume(E),h=String.fromCharCode(E),L):i(E)}function k(E){return E===45?(l.consume(E),c=2,S):E===91?(l.consume(E),c=5,d=0,A):St(E)?(l.consume(E),c=4,u.interrupt?r:w):i(E)}function S(E){return E===45?(l.consume(E),u.interrupt?r:w):i(E)}function A(E){const K="CDATA[";return E===K.charCodeAt(d++)?(l.consume(E),d===K.length?u.interrupt?r:P:A):i(E)}function M(E){return St(E)?(l.consume(E),h=String.fromCharCode(E),L):i(E)}function L(E){if(E===null||E===47||E===62||Xe(E)){const K=E===47,le=h.toLowerCase();return!K&&!f&&Pd.includes(le)?(c=1,u.interrupt?r(E):P(E)):Wx.includes(h.toLowerCase())?(c=6,K?(l.consume(E),D):u.interrupt?r(E):P(E)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?i(E):f?I(E):Y(E))}return E===45||gt(E)?(l.consume(E),h+=String.fromCharCode(E),L):i(E)}function D(E){return E===62?(l.consume(E),u.interrupt?r:P):i(E)}function I(E){return Te(E)?(l.consume(E),I):B(E)}function Y(E){return E===47?(l.consume(E),B):E===58||E===95||St(E)?(l.consume(E),re):Te(E)?(l.consume(E),Y):B(E)}function re(E){return E===45||E===46||E===58||E===95||gt(E)?(l.consume(E),re):ne(E)}function ne(E){return E===61?(l.consume(E),H):Te(E)?(l.consume(E),ne):Y(E)}function H(E){return E===null||E===60||E===61||E===62||E===96?i(E):E===34||E===39?(l.consume(E),m=E,J):Te(E)?(l.consume(E),H):fe(E)}function J(E){return E===m?(l.consume(E),m=null,pe):E===null||ce(E)?i(E):(l.consume(E),J)}function fe(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||Xe(E)?ne(E):(l.consume(E),fe)}function pe(E){return E===47||E===62||Te(E)?Y(E):i(E)}function B(E){return E===62?(l.consume(E),ee):i(E)}function ee(E){return E===null||ce(E)?P(E):Te(E)?(l.consume(E),ee):i(E)}function P(E){return E===45&&c===2?(l.consume(E),j):E===60&&c===1?(l.consume(E),Z):E===62&&c===4?(l.consume(E),T):E===63&&c===3?(l.consume(E),w):E===93&&c===5?(l.consume(E),me):ce(E)&&(c===6||c===7)?(l.exit("htmlFlowData"),l.check(eb,q,ve)(E)):E===null||ce(E)?(l.exit("htmlFlowData"),ve(E)):(l.consume(E),P)}function ve(E){return l.check(tb,ie,q)(E)}function ie(E){return l.enter("lineEnding"),l.consume(E),l.exit("lineEnding"),$}function $(E){return E===null||ce(E)?ve(E):(l.enter("htmlFlowData"),P(E))}function j(E){return E===45?(l.consume(E),w):P(E)}function Z(E){return E===47?(l.consume(E),h="",te):P(E)}function te(E){if(E===62){const K=h.toLowerCase();return Pd.includes(K)?(l.consume(E),T):P(E)}return St(E)&&h.length<8?(l.consume(E),h+=String.fromCharCode(E),te):P(E)}function me(E){return E===93?(l.consume(E),w):P(E)}function w(E){return E===62?(l.consume(E),T):E===45&&c===2?(l.consume(E),w):P(E)}function T(E){return E===null||ce(E)?(l.exit("htmlFlowData"),q(E)):(l.consume(E),T)}function q(E){return l.exit("htmlFlow"),r(E)}}function ab(l,r,i){const u=this;return c;function c(h){return ce(h)?(l.enter("lineEnding"),l.consume(h),l.exit("lineEnding"),f):i(h)}function f(h){return u.parser.lazy[u.now().line]?i(h):r(h)}}function ib(l,r,i){return u;function u(c){return l.enter("lineEnding"),l.consume(c),l.exit("lineEnding"),l.attempt(Ai,r,i)}}const rb={name:"htmlText",tokenize:ub};function ub(l,r,i){const u=this;let c,f,h;return d;function d(w){return l.enter("htmlText"),l.enter("htmlTextData"),l.consume(w),m}function m(w){return w===33?(l.consume(w),p):w===47?(l.consume(w),ne):w===63?(l.consume(w),Y):St(w)?(l.consume(w),fe):i(w)}function p(w){return w===45?(l.consume(w),x):w===91?(l.consume(w),f=0,A):St(w)?(l.consume(w),I):i(w)}function x(w){return w===45?(l.consume(w),S):i(w)}function y(w){return w===null?i(w):w===45?(l.consume(w),k):ce(w)?(h=y,Z(w)):(l.consume(w),y)}function k(w){return w===45?(l.consume(w),S):y(w)}function S(w){return w===62?j(w):w===45?k(w):y(w)}function A(w){const T="CDATA[";return w===T.charCodeAt(f++)?(l.consume(w),f===T.length?M:A):i(w)}function M(w){return w===null?i(w):w===93?(l.consume(w),L):ce(w)?(h=M,Z(w)):(l.consume(w),M)}function L(w){return w===93?(l.consume(w),D):M(w)}function D(w){return w===62?j(w):w===93?(l.consume(w),D):M(w)}function I(w){return w===null||w===62?j(w):ce(w)?(h=I,Z(w)):(l.consume(w),I)}function Y(w){return w===null?i(w):w===63?(l.consume(w),re):ce(w)?(h=Y,Z(w)):(l.consume(w),Y)}function re(w){return w===62?j(w):Y(w)}function ne(w){return St(w)?(l.consume(w),H):i(w)}function H(w){return w===45||gt(w)?(l.consume(w),H):J(w)}function J(w){return ce(w)?(h=J,Z(w)):Te(w)?(l.consume(w),J):j(w)}function fe(w){return w===45||gt(w)?(l.consume(w),fe):w===47||w===62||Xe(w)?pe(w):i(w)}function pe(w){return w===47?(l.consume(w),j):w===58||w===95||St(w)?(l.consume(w),B):ce(w)?(h=pe,Z(w)):Te(w)?(l.consume(w),pe):j(w)}function B(w){return w===45||w===46||w===58||w===95||gt(w)?(l.consume(w),B):ee(w)}function ee(w){return w===61?(l.consume(w),P):ce(w)?(h=ee,Z(w)):Te(w)?(l.consume(w),ee):pe(w)}function P(w){return w===null||w===60||w===61||w===62||w===96?i(w):w===34||w===39?(l.consume(w),c=w,ve):ce(w)?(h=P,Z(w)):Te(w)?(l.consume(w),P):(l.consume(w),ie)}function ve(w){return w===c?(l.consume(w),c=void 0,$):w===null?i(w):ce(w)?(h=ve,Z(w)):(l.consume(w),ve)}function ie(w){return w===null||w===34||w===39||w===60||w===61||w===96?i(w):w===47||w===62||Xe(w)?pe(w):(l.consume(w),ie)}function $(w){return w===47||w===62||Xe(w)?pe(w):i(w)}function j(w){return w===62?(l.consume(w),l.exit("htmlTextData"),l.exit("htmlText"),r):i(w)}function Z(w){return l.exit("htmlTextData"),l.enter("lineEnding"),l.consume(w),l.exit("lineEnding"),te}function te(w){return Te(w)?je(l,me,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):me(w)}function me(w){return l.enter("htmlTextData"),h(w)}}const yc={name:"labelEnd",resolveAll:fb,resolveTo:hb,tokenize:pb},ob={tokenize:db},sb={tokenize:mb},cb={tokenize:gb};function fb(l){let r=-1;const i=[];for(;++r<l.length;){const u=l[r][1];if(i.push(l[r]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",r+=c}}return l.length!==i.length&&Yt(l,0,l.length,i),l}function hb(l,r){let i=l.length,u=0,c,f,h,d;for(;i--;)if(c=l[i][1],f){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;l[i][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(h){if(l[i][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(f=i,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(h=i);const m={type:l[f][1].type==="labelLink"?"link":"image",start:{...l[f][1].start},end:{...l[l.length-1][1].end}},p={type:"label",start:{...l[f][1].start},end:{...l[h][1].end}},x={type:"labelText",start:{...l[f+u+2][1].end},end:{...l[h-2][1].start}};return d=[["enter",m,r],["enter",p,r]],d=Pt(d,l.slice(f+1,f+u+3)),d=Pt(d,[["enter",x,r]]),d=Pt(d,ru(r.parser.constructs.insideSpan.null,l.slice(f+u+4,h-3),r)),d=Pt(d,[["exit",x,r],l[h-2],l[h-1],["exit",p,r]]),d=Pt(d,l.slice(h+1)),d=Pt(d,[["exit",m,r]]),Yt(l,f,l.length,d),l}function pb(l,r,i){const u=this;let c=u.events.length,f,h;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){f=u.events[c][1];break}return d;function d(k){return f?f._inactive?y(k):(h=u.parser.defined.includes(an(u.sliceSerialize({start:f.end,end:u.now()}))),l.enter("labelEnd"),l.enter("labelMarker"),l.consume(k),l.exit("labelMarker"),l.exit("labelEnd"),m):i(k)}function m(k){return k===40?l.attempt(ob,x,h?x:y)(k):k===91?l.attempt(sb,x,h?p:y)(k):h?x(k):y(k)}function p(k){return l.attempt(cb,x,y)(k)}function x(k){return r(k)}function y(k){return f._balanced=!0,i(k)}}function db(l,r,i){return u;function u(y){return l.enter("resource"),l.enter("resourceMarker"),l.consume(y),l.exit("resourceMarker"),c}function c(y){return Xe(y)?Ei(l,f)(y):f(y)}function f(y){return y===41?x(y):Km(l,h,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function h(y){return Xe(y)?Ei(l,m)(y):x(y)}function d(y){return i(y)}function m(y){return y===34||y===39||y===40?$m(l,p,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):x(y)}function p(y){return Xe(y)?Ei(l,x)(y):x(y)}function x(y){return y===41?(l.enter("resourceMarker"),l.consume(y),l.exit("resourceMarker"),l.exit("resource"),r):i(y)}}function mb(l,r,i){const u=this;return c;function c(d){return Jm.call(u,l,f,h,"reference","referenceMarker","referenceString")(d)}function f(d){return u.parser.defined.includes(an(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?r(d):i(d)}function h(d){return i(d)}}function gb(l,r,i){return u;function u(f){return l.enter("reference"),l.enter("referenceMarker"),l.consume(f),l.exit("referenceMarker"),c}function c(f){return f===93?(l.enter("referenceMarker"),l.consume(f),l.exit("referenceMarker"),l.exit("reference"),r):i(f)}}const yb={name:"labelStartImage",resolveAll:yc.resolveAll,tokenize:xb};function xb(l,r,i){const u=this;return c;function c(d){return l.enter("labelImage"),l.enter("labelImageMarker"),l.consume(d),l.exit("labelImageMarker"),f}function f(d){return d===91?(l.enter("labelMarker"),l.consume(d),l.exit("labelMarker"),l.exit("labelImage"),h):i(d)}function h(d){return d===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(d):r(d)}}const bb={name:"labelStartLink",resolveAll:yc.resolveAll,tokenize:vb};function vb(l,r,i){const u=this;return c;function c(h){return l.enter("labelLink"),l.enter("labelMarker"),l.consume(h),l.exit("labelMarker"),l.exit("labelLink"),f}function f(h){return h===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(h):r(h)}}const Ls={name:"lineEnding",tokenize:Sb};function Sb(l,r){return i;function i(u){return l.enter("lineEnding"),l.consume(u),l.exit("lineEnding"),je(l,r,"linePrefix")}}const Pr={name:"thematicBreak",tokenize:kb};function kb(l,r,i){let u=0,c;return f;function f(p){return l.enter("thematicBreak"),h(p)}function h(p){return c=p,d(p)}function d(p){return p===c?(l.enter("thematicBreakSequence"),m(p)):u>=3&&(p===null||ce(p))?(l.exit("thematicBreak"),r(p)):i(p)}function m(p){return p===c?(l.consume(p),u++,m):(l.exit("thematicBreakSequence"),Te(p)?je(l,d,"whitespace")(p):d(p))}}const Mt={continuation:{tokenize:Cb},exit:Ab,name:"list",tokenize:Tb},Eb={partial:!0,tokenize:jb},wb={partial:!0,tokenize:zb};function Tb(l,r,i){const u=this,c=u.events[u.events.length-1];let f=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,h=0;return d;function d(S){const A=u.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(A==="listUnordered"?!u.containerState.marker||S===u.containerState.marker:tc(S)){if(u.containerState.type||(u.containerState.type=A,l.enter(A,{_container:!0})),A==="listUnordered")return l.enter("listItemPrefix"),S===42||S===45?l.check(Pr,i,p)(S):p(S);if(!u.interrupt||S===49)return l.enter("listItemPrefix"),l.enter("listItemValue"),m(S)}return i(S)}function m(S){return tc(S)&&++h<10?(l.consume(S),m):(!u.interrupt||h<2)&&(u.containerState.marker?S===u.containerState.marker:S===41||S===46)?(l.exit("listItemValue"),p(S)):i(S)}function p(S){return l.enter("listItemMarker"),l.consume(S),l.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||S,l.check(Ai,u.interrupt?i:x,l.attempt(Eb,k,y))}function x(S){return u.containerState.initialBlankLine=!0,f++,k(S)}function y(S){return Te(S)?(l.enter("listItemPrefixWhitespace"),l.consume(S),l.exit("listItemPrefixWhitespace"),k):i(S)}function k(S){return u.containerState.size=f+u.sliceSerialize(l.exit("listItemPrefix"),!0).length,r(S)}}function Cb(l,r,i){const u=this;return u.containerState._closeFlow=void 0,l.check(Ai,c,f);function c(d){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,je(l,r,"listItemIndent",u.containerState.size+1)(d)}function f(d){return u.containerState.furtherBlankLines||!Te(d)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,h(d)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,l.attempt(wb,r,h)(d))}function h(d){return u.containerState._closeFlow=!0,u.interrupt=void 0,je(l,l.attempt(Mt,r,i),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function zb(l,r,i){const u=this;return je(l,c,"listItemIndent",u.containerState.size+1);function c(f){const h=u.events[u.events.length-1];return h&&h[1].type==="listItemIndent"&&h[2].sliceSerialize(h[1],!0).length===u.containerState.size?r(f):i(f)}}function Ab(l){l.exit(this.containerState.type)}function jb(l,r,i){const u=this;return je(l,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(f){const h=u.events[u.events.length-1];return!Te(f)&&h&&h[1].type==="listItemPrefixWhitespace"?r(f):i(f)}}const em={name:"setextUnderline",resolveTo:Mb,tokenize:Db};function Mb(l,r){let i=l.length,u,c,f;for(;i--;)if(l[i][0]==="enter"){if(l[i][1].type==="content"){u=i;break}l[i][1].type==="paragraph"&&(c=i)}else l[i][1].type==="content"&&l.splice(i,1),!f&&l[i][1].type==="definition"&&(f=i);const h={type:"setextHeading",start:{...l[u][1].start},end:{...l[l.length-1][1].end}};return l[c][1].type="setextHeadingText",f?(l.splice(c,0,["enter",h,r]),l.splice(f+1,0,["exit",l[u][1],r]),l[u][1].end={...l[f][1].end}):l[u][1]=h,l.push(["exit",h,r]),l}function Db(l,r,i){const u=this;let c;return f;function f(p){let x=u.events.length,y;for(;x--;)if(u.events[x][1].type!=="lineEnding"&&u.events[x][1].type!=="linePrefix"&&u.events[x][1].type!=="content"){y=u.events[x][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||y)?(l.enter("setextHeadingLine"),c=p,h(p)):i(p)}function h(p){return l.enter("setextHeadingLineSequence"),d(p)}function d(p){return p===c?(l.consume(p),d):(l.exit("setextHeadingLineSequence"),Te(p)?je(l,m,"lineSuffix")(p):m(p))}function m(p){return p===null||ce(p)?(l.exit("setextHeadingLine"),r(p)):i(p)}}const Nb={tokenize:_b};function _b(l){const r=this,i=l.attempt(Ai,u,l.attempt(this.parser.constructs.flowInitial,c,je(l,l.attempt(this.parser.constructs.flow,c,l.attempt(Ux,c)),"linePrefix")));return i;function u(f){if(f===null){l.consume(f);return}return l.enter("lineEndingBlank"),l.consume(f),l.exit("lineEndingBlank"),r.currentConstruct=void 0,i}function c(f){if(f===null){l.consume(f);return}return l.enter("lineEnding"),l.consume(f),l.exit("lineEnding"),r.currentConstruct=void 0,i}}const Ob={resolveAll:Pm()},Rb=Wm("string"),Lb=Wm("text");function Wm(l){return{resolveAll:Pm(l==="text"?Bb:void 0),tokenize:r};function r(i){const u=this,c=this.parser.constructs[l],f=i.attempt(c,h,d);return h;function h(x){return p(x)?f(x):d(x)}function d(x){if(x===null){i.consume(x);return}return i.enter("data"),i.consume(x),m}function m(x){return p(x)?(i.exit("data"),f(x)):(i.consume(x),m)}function p(x){if(x===null)return!0;const y=c[x];let k=-1;if(y)for(;++k<y.length;){const S=y[k];if(!S.previous||S.previous.call(u,u.previous))return!0}return!1}}}function Pm(l){return r;function r(i,u){let c=-1,f;for(;++c<=i.length;)f===void 0?i[c]&&i[c][1].type==="data"&&(f=c,c++):(!i[c]||i[c][1].type!=="data")&&(c!==f+2&&(i[f][1].end=i[c-1][1].end,i.splice(f+2,c-f-2),c=f+2),f=void 0);return l?l(i,u):i}}function Bb(l,r){let i=0;for(;++i<=l.length;)if((i===l.length||l[i][1].type==="lineEnding")&&l[i-1][1].type==="data"){const u=l[i-1][1],c=r.sliceStream(u);let f=c.length,h=-1,d=0,m;for(;f--;){const p=c[f];if(typeof p=="string"){for(h=p.length;p.charCodeAt(h-1)===32;)d++,h--;if(h)break;h=-1}else if(p===-2)m=!0,d++;else if(p!==-1){f++;break}}if(r._contentTypeTextTrailing&&i===l.length&&(d=0),d){const p={type:i===l.length||m||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?h:u.start._bufferIndex+h,_index:u.start._index+f,line:u.end.line,column:u.end.column-d,offset:u.end.offset-d},end:{...u.end}};u.end={...p.start},u.start.offset===u.end.offset?Object.assign(u,p):(l.splice(i,0,["enter",p,r],["exit",p,r]),i+=2)}i++}return l}const Ub={42:Mt,43:Mt,45:Mt,48:Mt,49:Mt,50:Mt,51:Mt,52:Mt,53:Mt,54:Mt,55:Mt,56:Mt,57:Mt,62:Qm},Hb={91:Vx},qb={[-2]:Rs,[-1]:Rs,32:Rs},Yb={35:Kx,42:Pr,45:[em,Pr],60:Px,61:em,95:Pr,96:Wd,126:Wd},Gb={38:Im,92:Zm},Vb={[-5]:Ls,[-4]:Ls,[-3]:Ls,33:yb,38:Im,42:nc,60:[bx,rb],91:bb,92:[Ix,Zm],93:yc,95:nc,96:Nx},Xb={null:[nc,Ob]},Qb={null:[42,95]},Zb={null:[]},Ib=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Qb,contentInitial:Hb,disable:Zb,document:Ub,flow:Yb,flowInitial:qb,insideSpan:Xb,string:Gb,text:Vb},Symbol.toStringTag,{value:"Module"}));function Fb(l,r,i){let u={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const c={},f=[];let h=[],d=[];const m={attempt:J(ne),check:J(H),consume:I,enter:Y,exit:re,interrupt:J(H,{interrupt:!0})},p={code:null,containerState:{},defineSkip:M,events:[],now:A,parser:l,previous:null,sliceSerialize:k,sliceStream:S,write:y};let x=r.tokenize.call(p,m);return r.resolveAll&&f.push(r),p;function y(ee){return h=Pt(h,ee),L(),h[h.length-1]!==null?[]:(fe(r,0),p.events=ru(f,p.events,p),p.events)}function k(ee,P){return Jb(S(ee),P)}function S(ee){return Kb(h,ee)}function A(){const{_bufferIndex:ee,_index:P,line:ve,column:ie,offset:$}=u;return{_bufferIndex:ee,_index:P,line:ve,column:ie,offset:$}}function M(ee){c[ee.line]=ee.column,B()}function L(){let ee;for(;u._index<h.length;){const P=h[u._index];if(typeof P=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<P.length;)D(P.charCodeAt(u._bufferIndex));else D(P)}}function D(ee){x=x(ee)}function I(ee){ce(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,B()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===h[u._index].length&&(u._bufferIndex=-1,u._index++)),p.previous=ee}function Y(ee,P){const ve=P||{};return ve.type=ee,ve.start=A(),p.events.push(["enter",ve,p]),d.push(ve),ve}function re(ee){const P=d.pop();return P.end=A(),p.events.push(["exit",P,p]),P}function ne(ee,P){fe(ee,P.from)}function H(ee,P){P.restore()}function J(ee,P){return ve;function ve(ie,$,j){let Z,te,me,w;return Array.isArray(ie)?q(ie):"tokenize"in ie?q([ie]):T(ie);function T(oe){return Se;function Se(Ye){const Be=Ye!==null&&oe[Ye],Gt=Ye!==null&&oe.null,hn=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Gt)?Gt:Gt?[Gt]:[]];return q(hn)(Ye)}}function q(oe){return Z=oe,te=0,oe.length===0?j:E(oe[te])}function E(oe){return Se;function Se(Ye){return w=pe(),me=oe,oe.partial||(p.currentConstruct=oe),oe.name&&p.parser.constructs.disable.null.includes(oe.name)?le():oe.tokenize.call(P?Object.assign(Object.create(p),P):p,m,K,le)(Ye)}}function K(oe){return ee(me,w),$}function le(oe){return w.restore(),++te<Z.length?E(Z[te]):j}}}function fe(ee,P){ee.resolveAll&&!f.includes(ee)&&f.push(ee),ee.resolve&&Yt(p.events,P,p.events.length-P,ee.resolve(p.events.slice(P),p)),ee.resolveTo&&(p.events=ee.resolveTo(p.events,p))}function pe(){const ee=A(),P=p.previous,ve=p.currentConstruct,ie=p.events.length,$=Array.from(d);return{from:ie,restore:j};function j(){u=ee,p.previous=P,p.currentConstruct=ve,p.events.length=ie,d=$,B()}}function B(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function Kb(l,r){const i=r.start._index,u=r.start._bufferIndex,c=r.end._index,f=r.end._bufferIndex;let h;if(i===c)h=[l[i].slice(u,f)];else{if(h=l.slice(i,c),u>-1){const d=h[0];typeof d=="string"?h[0]=d.slice(u):h.shift()}f>0&&h.push(l[c].slice(0,f))}return h}function Jb(l,r){let i=-1;const u=[];let c;for(;++i<l.length;){const f=l[i];let h;if(typeof f=="string")h=f;else switch(f){case-5:{h="\r";break}case-4:{h=`
`;break}case-3:{h=`\r
`;break}case-2:{h=r?" ":"	";break}case-1:{if(!r&&c)continue;h=" ";break}default:h=String.fromCharCode(f)}c=f===-2,u.push(h)}return u.join("")}function $b(l){const u={constructs:Vm([Ib,...(l||{}).extensions||[]]),content:c(hx),defined:[],document:c(dx),flow:c(Nb),lazy:{},string:c(Rb),text:c(Lb)};return u;function c(f){return h;function h(d){return Fb(u,f,d)}}}function Wb(l){for(;!Fm(l););return l}const tm=/[\0\t\n\r]/g;function Pb(){let l=1,r="",i=!0,u;return c;function c(f,h,d){const m=[];let p,x,y,k,S;for(f=r+(typeof f=="string"?f.toString():new TextDecoder(h||void 0).decode(f)),y=0,r="",i&&(f.charCodeAt(0)===65279&&y++,i=void 0);y<f.length;){if(tm.lastIndex=y,p=tm.exec(f),k=p&&p.index!==void 0?p.index:f.length,S=f.charCodeAt(k),!p){r=f.slice(y);break}if(S===10&&y===k&&u)m.push(-3),u=void 0;else switch(u&&(m.push(-5),u=void 0),y<k&&(m.push(f.slice(y,k)),l+=k-y),S){case 0:{m.push(65533),l++;break}case 9:{for(x=Math.ceil(l/4)*4,m.push(-2);l++<x;)m.push(-1);break}case 10:{m.push(-4),l=1;break}default:u=!0,l=1}y=k+1}return d&&(u&&m.push(-5),r&&m.push(r),m.push(null)),m}}const ev=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tv(l){return l.replace(ev,nv)}function nv(l,r,i){if(r)return r;if(i.charCodeAt(0)===35){const c=i.charCodeAt(1),f=c===120||c===88;return Xm(i.slice(f?2:1),f?16:10)}return gc(i)||l}const eg={}.hasOwnProperty;function lv(l,r,i){return r&&typeof r=="object"&&(i=r,r=void 0),av(i)(Wb($b(i).document().write(Pb()(l,r,!0))))}function av(l){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Ml),autolinkProtocol:pe,autolinkEmail:pe,atxHeading:f(Al),blockQuote:f(Gt),characterEscape:pe,characterReference:pe,codeFenced:f(hn),codeFencedFenceInfo:h,codeFencedFenceMeta:h,codeIndented:f(hn,h),codeText:f(Ea,h),codeTextData:pe,data:pe,codeFlowValue:pe,definition:f(Mi),definitionDestinationString:h,definitionLabelString:h,definitionTitleString:h,emphasis:f(pn),hardBreakEscape:f(jl),hardBreakTrailing:f(jl),htmlFlow:f(Di,h),htmlFlowData:pe,htmlText:f(Di,h),htmlTextData:pe,image:f(Ni),label:h,link:f(Ml),listItem:f(wa),listItemValue:k,listOrdered:f(Dl,y),listUnordered:f(Dl),paragraph:f(cu),reference:E,referenceString:h,resourceDestinationString:h,resourceTitleString:h,setextHeading:f(Al),strong:f(fu),thematicBreak:f(hu)},exit:{atxHeading:m(),atxHeadingSequence:ne,autolink:m(),autolinkEmail:Be,autolinkProtocol:Ye,blockQuote:m(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:le,characterReferenceMarkerNumeric:le,characterReferenceValue:oe,characterReference:Se,codeFenced:m(L),codeFencedFence:M,codeFencedFenceInfo:S,codeFencedFenceMeta:A,codeFlowValue:B,codeIndented:m(D),codeText:m($),codeTextData:B,data:B,definition:m(),definitionDestinationString:re,definitionLabelString:I,definitionTitleString:Y,emphasis:m(),hardBreakEscape:m(P),hardBreakTrailing:m(P),htmlFlow:m(ve),htmlFlowData:B,htmlText:m(ie),htmlTextData:B,image:m(Z),label:me,labelText:te,lineEnding:ee,link:m(j),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:K,resourceDestinationString:w,resourceTitleString:T,resource:q,setextHeading:m(fe),setextHeadingLineSequence:J,setextHeadingText:H,strong:m(),thematicBreak:m()}};tg(r,(l||{}).mdastExtensions||[]);const i={};return u;function u(V){let W={type:"root",children:[]};const de={stack:[W],tokenStack:[],config:r,enter:d,exit:p,buffer:h,resume:x,data:i},ke=[];let Oe=-1;for(;++Oe<V.length;)if(V[Oe][1].type==="listOrdered"||V[Oe][1].type==="listUnordered")if(V[Oe][0]==="enter")ke.push(Oe);else{const Nt=ke.pop();Oe=c(V,Nt,Oe)}for(Oe=-1;++Oe<V.length;){const Nt=r[V[Oe][0]];eg.call(Nt,V[Oe][1].type)&&Nt[V[Oe][1].type].call(Object.assign({sliceSerialize:V[Oe][2].sliceSerialize},de),V[Oe][1])}if(de.tokenStack.length>0){const Nt=de.tokenStack[de.tokenStack.length-1];(Nt[1]||nm).call(de,void 0,Nt[0])}for(W.position={start:il(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:il(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<r.transforms.length;)W=r.transforms[Oe](W)||W;return W}function c(V,W,de){let ke=W-1,Oe=-1,Nt=!1,dn,bt,it,kt;for(;++ke<=de;){const Ge=V[ke];switch(Ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ge[0]==="enter"?Oe++:Oe--,kt=void 0;break}case"lineEndingBlank":{Ge[0]==="enter"&&(dn&&!kt&&!Oe&&!it&&(it=ke),kt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kt=void 0}if(!Oe&&Ge[0]==="enter"&&Ge[1].type==="listItemPrefix"||Oe===-1&&Ge[0]==="exit"&&(Ge[1].type==="listUnordered"||Ge[1].type==="listOrdered")){if(dn){let On=ke;for(bt=void 0;On--;){const en=V[On];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;bt&&(V[bt][1].type="lineEndingBlank",Nt=!0),en[1].type="lineEnding",bt=On}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!bt||it<bt)&&(dn._spread=!0),dn.end=Object.assign({},bt?V[bt][1].start:Ge[1].end),V.splice(bt||ke,0,["exit",dn,Ge[2]]),ke++,de++}if(Ge[1].type==="listItemPrefix"){const On={type:"listItem",_spread:!1,start:Object.assign({},Ge[1].start),end:void 0};dn=On,V.splice(ke,0,["enter",On,Ge[2]]),ke++,de++,it=void 0,kt=!0}}}return V[W][1]._spread=Nt,de}function f(V,W){return de;function de(ke){d.call(this,V(ke),ke),W&&W.call(this,ke)}}function h(){this.stack.push({type:"fragment",children:[]})}function d(V,W,de){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([W,de||void 0]),V.position={start:il(W.start),end:void 0}}function m(V){return W;function W(de){V&&V.call(this,de),p.call(this,de)}}function p(V,W){const de=this.stack.pop(),ke=this.tokenStack.pop();if(ke)ke[0].type!==V.type&&(W?W.call(this,V,ke[0]):(ke[1]||nm).call(this,V,ke[0]));else throw new Error("Cannot close `"+V.type+"` ("+ki({start:V.start,end:V.end})+"): it’s not open");de.position.end=il(V.end)}function x(){return mc(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function k(V){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function S(){const V=this.resume(),W=this.stack[this.stack.length-1];W.lang=V}function A(){const V=this.resume(),W=this.stack[this.stack.length-1];W.meta=V}function M(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function L(){const V=this.resume(),W=this.stack[this.stack.length-1];W.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function D(){const V=this.resume(),W=this.stack[this.stack.length-1];W.value=V.replace(/(\r?\n|\r)$/g,"")}function I(V){const W=this.resume(),de=this.stack[this.stack.length-1];de.label=W,de.identifier=an(this.sliceSerialize(V)).toLowerCase()}function Y(){const V=this.resume(),W=this.stack[this.stack.length-1];W.title=V}function re(){const V=this.resume(),W=this.stack[this.stack.length-1];W.url=V}function ne(V){const W=this.stack[this.stack.length-1];if(!W.depth){const de=this.sliceSerialize(V).length;W.depth=de}}function H(){this.data.setextHeadingSlurpLineEnding=!0}function J(V){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function fe(){this.data.setextHeadingSlurpLineEnding=void 0}function pe(V){const de=this.stack[this.stack.length-1].children;let ke=de[de.length-1];(!ke||ke.type!=="text")&&(ke=xt(),ke.position={start:il(V.start),end:void 0},de.push(ke)),this.stack.push(ke)}function B(V){const W=this.stack.pop();W.value+=this.sliceSerialize(V),W.position.end=il(V.end)}function ee(V){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=W.children[W.children.length-1];de.position.end=il(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(W.type)&&(pe.call(this,V),B.call(this,V))}function P(){this.data.atHardBreak=!0}function ve(){const V=this.resume(),W=this.stack[this.stack.length-1];W.value=V}function ie(){const V=this.resume(),W=this.stack[this.stack.length-1];W.value=V}function $(){const V=this.resume(),W=this.stack[this.stack.length-1];W.value=V}function j(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=W,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function Z(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=W,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function te(V){const W=this.sliceSerialize(V),de=this.stack[this.stack.length-2];de.label=tv(W),de.identifier=an(W).toLowerCase()}function me(){const V=this.stack[this.stack.length-1],W=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const ke=V.children;de.children=ke}else de.alt=W}function w(){const V=this.resume(),W=this.stack[this.stack.length-1];W.url=V}function T(){const V=this.resume(),W=this.stack[this.stack.length-1];W.title=V}function q(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function K(V){const W=this.resume(),de=this.stack[this.stack.length-1];de.label=W,de.identifier=an(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function le(V){this.data.characterReferenceType=V.type}function oe(V){const W=this.sliceSerialize(V),de=this.data.characterReferenceType;let ke;de?(ke=Xm(W,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ke=gc(W);const Oe=this.stack[this.stack.length-1];Oe.value+=ke}function Se(V){const W=this.stack.pop();W.position.end=il(V.end)}function Ye(V){B.call(this,V);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(V)}function Be(V){B.call(this,V);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(V)}function Gt(){return{type:"blockquote",children:[]}}function hn(){return{type:"code",lang:null,meta:null,value:""}}function Ea(){return{type:"inlineCode",value:""}}function Mi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function Al(){return{type:"heading",depth:0,children:[]}}function jl(){return{type:"break"}}function Di(){return{type:"html",value:""}}function Ni(){return{type:"image",title:null,url:"",alt:null}}function Ml(){return{type:"link",title:null,url:"",children:[]}}function Dl(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function wa(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function cu(){return{type:"paragraph",children:[]}}function fu(){return{type:"strong",children:[]}}function xt(){return{type:"text",value:""}}function hu(){return{type:"thematicBreak"}}}function il(l){return{line:l.line,column:l.column,offset:l.offset}}function tg(l,r){let i=-1;for(;++i<r.length;){const u=r[i];Array.isArray(u)?tg(l,u):iv(l,u)}}function iv(l,r){let i;for(i in r)if(eg.call(r,i))switch(i){case"canContainEols":{const u=r[i];u&&l[i].push(...u);break}case"transforms":{const u=r[i];u&&l[i].push(...u);break}case"enter":case"exit":{const u=r[i];u&&Object.assign(l[i],u);break}}}function nm(l,r){throw l?new Error("Cannot close `"+l.type+"` ("+ki({start:l.start,end:l.end})+"): a different token (`"+r.type+"`, "+ki({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+ki({start:r.start,end:r.end})+") is still open")}function rv(l){const r=this;r.parser=i;function i(u){return lv(u,{...r.data("settings"),...l,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function uv(l,r){const i={type:"element",tagName:"blockquote",properties:{},children:l.wrap(l.all(r),!0)};return l.patch(r,i),l.applyData(r,i)}function ov(l,r){const i={type:"element",tagName:"br",properties:{},children:[]};return l.patch(r,i),[l.applyData(r,i),{type:"text",value:`
`}]}function sv(l,r){const i=r.value?r.value+`
`:"",u={},c=r.lang?r.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let f={type:"element",tagName:"code",properties:u,children:[{type:"text",value:i}]};return r.meta&&(f.data={meta:r.meta}),l.patch(r,f),f=l.applyData(r,f),f={type:"element",tagName:"pre",properties:{},children:[f]},l.patch(r,f),f}function cv(l,r){const i={type:"element",tagName:"del",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function fv(l,r){const i={type:"element",tagName:"em",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function hv(l,r){const i=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",u=String(r.identifier).toUpperCase(),c=ka(u.toLowerCase()),f=l.footnoteOrder.indexOf(u);let h,d=l.footnoteCounts.get(u);d===void 0?(d=0,l.footnoteOrder.push(u),h=l.footnoteOrder.length):h=f+1,d+=1,l.footnoteCounts.set(u,d);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+c,id:i+"fnref-"+c+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(h)}]};l.patch(r,m);const p={type:"element",tagName:"sup",properties:{},children:[m]};return l.patch(r,p),l.applyData(r,p)}function pv(l,r){const i={type:"element",tagName:"h"+r.depth,properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function dv(l,r){if(l.options.allowDangerousHtml){const i={type:"raw",value:r.value};return l.patch(r,i),l.applyData(r,i)}}function ng(l,r){const i=r.referenceType;let u="]";if(i==="collapsed"?u+="[]":i==="full"&&(u+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+u}];const c=l.all(r),f=c[0];f&&f.type==="text"?f.value="["+f.value:c.unshift({type:"text",value:"["});const h=c[c.length-1];return h&&h.type==="text"?h.value+=u:c.push({type:"text",value:u}),c}function mv(l,r){const i=String(r.identifier).toUpperCase(),u=l.definitionById.get(i);if(!u)return ng(l,r);const c={src:ka(u.url||""),alt:r.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"img",properties:c,children:[]};return l.patch(r,f),l.applyData(r,f)}function gv(l,r){const i={src:ka(r.url)};r.alt!==null&&r.alt!==void 0&&(i.alt=r.alt),r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"img",properties:i,children:[]};return l.patch(r,u),l.applyData(r,u)}function yv(l,r){const i={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};l.patch(r,i);const u={type:"element",tagName:"code",properties:{},children:[i]};return l.patch(r,u),l.applyData(r,u)}function xv(l,r){const i=String(r.identifier).toUpperCase(),u=l.definitionById.get(i);if(!u)return ng(l,r);const c={href:ka(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const f={type:"element",tagName:"a",properties:c,children:l.all(r)};return l.patch(r,f),l.applyData(r,f)}function bv(l,r){const i={href:ka(r.url)};r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"a",properties:i,children:l.all(r)};return l.patch(r,u),l.applyData(r,u)}function vv(l,r,i){const u=l.all(r),c=i?Sv(i):lg(r),f={},h=[];if(typeof r.checked=="boolean"){const x=u[0];let y;x&&x.type==="element"&&x.tagName==="p"?y=x:(y={type:"element",tagName:"p",properties:{},children:[]},u.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let d=-1;for(;++d<u.length;){const x=u[d];(c||d!==0||x.type!=="element"||x.tagName!=="p")&&h.push({type:"text",value:`
`}),x.type==="element"&&x.tagName==="p"&&!c?h.push(...x.children):h.push(x)}const m=u[u.length-1];m&&(c||m.type!=="element"||m.tagName!=="p")&&h.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:f,children:h};return l.patch(r,p),l.applyData(r,p)}function Sv(l){let r=!1;if(l.type==="list"){r=l.spread||!1;const i=l.children;let u=-1;for(;!r&&++u<i.length;)r=lg(i[u])}return r}function lg(l){const r=l.spread;return r??l.children.length>1}function kv(l,r){const i={},u=l.all(r);let c=-1;for(typeof r.start=="number"&&r.start!==1&&(i.start=r.start);++c<u.length;){const h=u[c];if(h.type==="element"&&h.tagName==="li"&&h.properties&&Array.isArray(h.properties.className)&&h.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const f={type:"element",tagName:r.ordered?"ol":"ul",properties:i,children:l.wrap(u,!0)};return l.patch(r,f),l.applyData(r,f)}function Ev(l,r){const i={type:"element",tagName:"p",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function wv(l,r){const i={type:"root",children:l.wrap(l.all(r))};return l.patch(r,i),l.applyData(r,i)}function Tv(l,r){const i={type:"element",tagName:"strong",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}function Cv(l,r){const i=l.all(r),u=i.shift(),c=[];if(u){const h={type:"element",tagName:"thead",properties:{},children:l.wrap([u],!0)};l.patch(r.children[0],h),c.push(h)}if(i.length>0){const h={type:"element",tagName:"tbody",properties:{},children:l.wrap(i,!0)},d=fc(r.children[1]),m=Lm(r.children[r.children.length-1]);d&&m&&(h.position={start:d,end:m}),c.push(h)}const f={type:"element",tagName:"table",properties:{},children:l.wrap(c,!0)};return l.patch(r,f),l.applyData(r,f)}function zv(l,r,i){const u=i?i.children:void 0,f=(u?u.indexOf(r):1)===0?"th":"td",h=i&&i.type==="table"?i.align:void 0,d=h?h.length:r.children.length;let m=-1;const p=[];for(;++m<d;){const y=r.children[m],k={},S=h?h[m]:void 0;S&&(k.align=S);let A={type:"element",tagName:f,properties:k,children:[]};y&&(A.children=l.all(y),l.patch(y,A),A=l.applyData(y,A)),p.push(A)}const x={type:"element",tagName:"tr",properties:{},children:l.wrap(p,!0)};return l.patch(r,x),l.applyData(r,x)}function Av(l,r){const i={type:"element",tagName:"td",properties:{},children:l.all(r)};return l.patch(r,i),l.applyData(r,i)}const lm=9,am=32;function jv(l){const r=String(l),i=/\r?\n|\r/g;let u=i.exec(r),c=0;const f=[];for(;u;)f.push(im(r.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=i.exec(r);return f.push(im(r.slice(c),c>0,!1)),f.join("")}function im(l,r,i){let u=0,c=l.length;if(r){let f=l.codePointAt(u);for(;f===lm||f===am;)u++,f=l.codePointAt(u)}if(i){let f=l.codePointAt(c-1);for(;f===lm||f===am;)c--,f=l.codePointAt(c-1)}return c>u?l.slice(u,c):""}function Mv(l,r){const i={type:"text",value:jv(String(r.value))};return l.patch(r,i),l.applyData(r,i)}function Dv(l,r){const i={type:"element",tagName:"hr",properties:{},children:[]};return l.patch(r,i),l.applyData(r,i)}const Nv={blockquote:uv,break:ov,code:sv,delete:cv,emphasis:fv,footnoteReference:hv,heading:pv,html:dv,imageReference:mv,image:gv,inlineCode:yv,linkReference:xv,link:bv,listItem:vv,list:kv,paragraph:Ev,root:wv,strong:Tv,table:Cv,tableCell:Av,tableRow:zv,text:Mv,thematicBreak:Dv,toml:Kr,yaml:Kr,definition:Kr,footnoteDefinition:Kr};function Kr(){}const ag=-1,uu=0,wi=1,tu=2,xc=3,bc=4,vc=5,Sc=6,ig=7,rg=8,rm=typeof self=="object"?self:globalThis,_v=(l,r)=>{const i=(c,f)=>(l.set(f,c),c),u=c=>{if(l.has(c))return l.get(c);const[f,h]=r[c];switch(f){case uu:case ag:return i(h,c);case wi:{const d=i([],c);for(const m of h)d.push(u(m));return d}case tu:{const d=i({},c);for(const[m,p]of h)d[u(m)]=u(p);return d}case xc:return i(new Date(h),c);case bc:{const{source:d,flags:m}=h;return i(new RegExp(d,m),c)}case vc:{const d=i(new Map,c);for(const[m,p]of h)d.set(u(m),u(p));return d}case Sc:{const d=i(new Set,c);for(const m of h)d.add(u(m));return d}case ig:{const{name:d,message:m}=h;return i(new rm[d](m),c)}case rg:return i(BigInt(h),c);case"BigInt":return i(Object(BigInt(h)),c);case"ArrayBuffer":return i(new Uint8Array(h).buffer,h);case"DataView":{const{buffer:d}=new Uint8Array(h);return i(new DataView(d),h)}}return i(new rm[f](h),c)};return u},um=l=>_v(new Map,l)(0),ya="",{toString:Ov}={},{keys:Rv}=Object,Si=l=>{const r=typeof l;if(r!=="object"||!l)return[uu,r];const i=Ov.call(l).slice(8,-1);switch(i){case"Array":return[wi,ya];case"Object":return[tu,ya];case"Date":return[xc,ya];case"RegExp":return[bc,ya];case"Map":return[vc,ya];case"Set":return[Sc,ya];case"DataView":return[wi,i]}return i.includes("Array")?[wi,i]:i.includes("Error")?[ig,i]:[tu,i]},Jr=([l,r])=>l===uu&&(r==="function"||r==="symbol"),Lv=(l,r,i,u)=>{const c=(h,d)=>{const m=u.push(h)-1;return i.set(d,m),m},f=h=>{if(i.has(h))return i.get(h);let[d,m]=Si(h);switch(d){case uu:{let x=h;switch(m){case"bigint":d=rg,x=h.toString();break;case"function":case"symbol":if(l)throw new TypeError("unable to serialize "+m);x=null;break;case"undefined":return c([ag],h)}return c([d,x],h)}case wi:{if(m){let k=h;return m==="DataView"?k=new Uint8Array(h.buffer):m==="ArrayBuffer"&&(k=new Uint8Array(h)),c([m,[...k]],h)}const x=[],y=c([d,x],h);for(const k of h)x.push(f(k));return y}case tu:{if(m)switch(m){case"BigInt":return c([m,h.toString()],h);case"Boolean":case"Number":case"String":return c([m,h.valueOf()],h)}if(r&&"toJSON"in h)return f(h.toJSON());const x=[],y=c([d,x],h);for(const k of Rv(h))(l||!Jr(Si(h[k])))&&x.push([f(k),f(h[k])]);return y}case xc:return c([d,h.toISOString()],h);case bc:{const{source:x,flags:y}=h;return c([d,{source:x,flags:y}],h)}case vc:{const x=[],y=c([d,x],h);for(const[k,S]of h)(l||!(Jr(Si(k))||Jr(Si(S))))&&x.push([f(k),f(S)]);return y}case Sc:{const x=[],y=c([d,x],h);for(const k of h)(l||!Jr(Si(k)))&&x.push(f(k));return y}}const{message:p}=h;return c([d,{name:m,message:p}],h)};return f},om=(l,{json:r,lossy:i}={})=>{const u=[];return Lv(!(r||i),!!r,new Map,u)(l),u},nu=typeof structuredClone=="function"?(l,r)=>r&&("json"in r||"lossy"in r)?um(om(l,r)):structuredClone(l):(l,r)=>um(om(l,r));function Bv(l,r){const i=[{type:"text",value:"↩"}];return r>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),i}function Uv(l,r){return"Back to reference "+(l+1)+(r>1?"-"+r:"")}function Hv(l){const r=typeof l.options.clobberPrefix=="string"?l.options.clobberPrefix:"user-content-",i=l.options.footnoteBackContent||Bv,u=l.options.footnoteBackLabel||Uv,c=l.options.footnoteLabel||"Footnotes",f=l.options.footnoteLabelTagName||"h2",h=l.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let m=-1;for(;++m<l.footnoteOrder.length;){const p=l.footnoteById.get(l.footnoteOrder[m]);if(!p)continue;const x=l.all(p),y=String(p.identifier).toUpperCase(),k=ka(y.toLowerCase());let S=0;const A=[],M=l.footnoteCounts.get(y);for(;M!==void 0&&++S<=M;){A.length>0&&A.push({type:"text",value:" "});let I=typeof i=="string"?i:i(m,S);typeof I=="string"&&(I={type:"text",value:I}),A.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+k+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(m,S),className:["data-footnote-backref"]},children:Array.isArray(I)?I:[I]})}const L=x[x.length-1];if(L&&L.type==="element"&&L.tagName==="p"){const I=L.children[L.children.length-1];I&&I.type==="text"?I.value+=" ":L.children.push({type:"text",value:" "}),L.children.push(...A)}else x.push(...A);const D={type:"element",tagName:"li",properties:{id:r+"fn-"+k},children:l.wrap(x,!0)};l.patch(p,D),d.push(D)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...nu(h),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:l.wrap(d,!0)},{type:"text",value:`
`}]}}const ou=(function(l){if(l==null)return Vv;if(typeof l=="function")return su(l);if(typeof l=="object")return Array.isArray(l)?qv(l):Yv(l);if(typeof l=="string")return Gv(l);throw new Error("Expected function, string, or object as test")});function qv(l){const r=[];let i=-1;for(;++i<l.length;)r[i]=ou(l[i]);return su(u);function u(...c){let f=-1;for(;++f<r.length;)if(r[f].apply(this,c))return!0;return!1}}function Yv(l){const r=l;return su(i);function i(u){const c=u;let f;for(f in l)if(c[f]!==r[f])return!1;return!0}}function Gv(l){return su(r);function r(i){return i&&i.type===l}}function su(l){return r;function r(i,u,c){return!!(Xv(i)&&l.call(this,i,typeof u=="number"?u:void 0,c||void 0))}}function Vv(){return!0}function Xv(l){return l!==null&&typeof l=="object"&&"type"in l}const ug=[],Qv=!0,lc=!1,Zv="skip";function og(l,r,i,u){let c;typeof r=="function"&&typeof i!="function"?(u=i,i=r):c=r;const f=ou(c),h=u?-1:1;d(l,void 0,[])();function d(m,p,x){const y=m&&typeof m=="object"?m:{};if(typeof y.type=="string"){const S=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(k,"name",{value:"node ("+(m.type+(S?"<"+S+">":""))+")"})}return k;function k(){let S=ug,A,M,L;if((!r||f(m,p,x[x.length-1]||void 0))&&(S=Iv(i(m,x)),S[0]===lc))return S;if("children"in m&&m.children){const D=m;if(D.children&&S[0]!==Zv)for(M=(u?D.children.length:-1)+h,L=x.concat(D);M>-1&&M<D.children.length;){const I=D.children[M];if(A=d(I,M,L)(),A[0]===lc)return A;M=typeof A[1]=="number"?A[1]:M+h}}return S}}}function Iv(l){return Array.isArray(l)?l:typeof l=="number"?[Qv,l]:l==null?ug:[l]}function kc(l,r,i,u){let c,f,h;typeof r=="function"&&typeof i!="function"?(f=void 0,h=r,c=i):(f=r,h=i,c=u),og(l,f,d,c);function d(m,p){const x=p[p.length-1],y=x?x.children.indexOf(m):void 0;return h(m,y,x)}}const ac={}.hasOwnProperty,Fv={};function Kv(l,r){const i=r||Fv,u=new Map,c=new Map,f=new Map,h={...Nv,...i.handlers},d={all:p,applyData:$v,definitionById:u,footnoteById:c,footnoteCounts:f,footnoteOrder:[],handlers:h,one:m,options:i,patch:Jv,wrap:Pv};return kc(l,function(x){if(x.type==="definition"||x.type==="footnoteDefinition"){const y=x.type==="definition"?u:c,k=String(x.identifier).toUpperCase();y.has(k)||y.set(k,x)}}),d;function m(x,y){const k=x.type,S=d.handlers[k];if(ac.call(d.handlers,k)&&S)return S(d,x,y);if(d.options.passThrough&&d.options.passThrough.includes(k)){if("children"in x){const{children:M,...L}=x,D=nu(L);return D.children=d.all(x),D}return nu(x)}return(d.options.unknownHandler||Wv)(d,x,y)}function p(x){const y=[];if("children"in x){const k=x.children;let S=-1;for(;++S<k.length;){const A=d.one(k[S],x);if(A){if(S&&k[S-1].type==="break"&&(!Array.isArray(A)&&A.type==="text"&&(A.value=sm(A.value)),!Array.isArray(A)&&A.type==="element")){const M=A.children[0];M&&M.type==="text"&&(M.value=sm(M.value))}Array.isArray(A)?y.push(...A):y.push(A)}}}return y}}function Jv(l,r){l.position&&(r.position=Uy(l))}function $v(l,r){let i=r;if(l&&l.data){const u=l.data.hName,c=l.data.hChildren,f=l.data.hProperties;if(typeof u=="string")if(i.type==="element")i.tagName=u;else{const h="children"in i?i.children:[i];i={type:"element",tagName:u,properties:{},children:h}}i.type==="element"&&f&&Object.assign(i.properties,nu(f)),"children"in i&&i.children&&c!==null&&c!==void 0&&(i.children=c)}return i}function Wv(l,r){const i=r.data||{},u="value"in r&&!(ac.call(i,"hProperties")||ac.call(i,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:l.all(r)};return l.patch(r,u),l.applyData(r,u)}function Pv(l,r){const i=[];let u=-1;for(r&&i.push({type:"text",value:`
`});++u<l.length;)u&&i.push({type:"text",value:`
`}),i.push(l[u]);return r&&l.length>0&&i.push({type:"text",value:`
`}),i}function sm(l){let r=0,i=l.charCodeAt(r);for(;i===9||i===32;)r++,i=l.charCodeAt(r);return l.slice(r)}function cm(l,r){const i=Kv(l,r),u=i.one(l,void 0),c=Hv(i),f=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&f.children.push({type:"text",value:`
`},c),f}function e2(l,r){return l&&"run"in l?async function(i,u){const c=cm(i,{file:u,...r});await l.run(c,u)}:function(i,u){return cm(i,{file:u,...l||r})}}function fm(l){if(l)throw l}var Bs,hm;function t2(){if(hm)return Bs;hm=1;var l=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(p){return typeof Array.isArray=="function"?Array.isArray(p):r.call(p)==="[object Array]"},f=function(p){if(!p||r.call(p)!=="[object Object]")return!1;var x=l.call(p,"constructor"),y=p.constructor&&p.constructor.prototype&&l.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!x&&!y)return!1;var k;for(k in p);return typeof k>"u"||l.call(p,k)},h=function(p,x){i&&x.name==="__proto__"?i(p,x.name,{enumerable:!0,configurable:!0,value:x.newValue,writable:!0}):p[x.name]=x.newValue},d=function(p,x){if(x==="__proto__")if(l.call(p,x)){if(u)return u(p,x).value}else return;return p[x]};return Bs=function m(){var p,x,y,k,S,A,M=arguments[0],L=1,D=arguments.length,I=!1;for(typeof M=="boolean"&&(I=M,M=arguments[1]||{},L=2),(M==null||typeof M!="object"&&typeof M!="function")&&(M={});L<D;++L)if(p=arguments[L],p!=null)for(x in p)y=d(M,x),k=d(p,x),M!==k&&(I&&k&&(f(k)||(S=c(k)))?(S?(S=!1,A=y&&c(y)?y:[]):A=y&&f(y)?y:{},h(M,{name:x,newValue:m(I,A,k)})):typeof k<"u"&&h(M,{name:x,newValue:k}));return M},Bs}var n2=t2();const Us=au(n2);function ic(l){if(typeof l!="object"||l===null)return!1;const r=Object.getPrototypeOf(l);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in l)&&!(Symbol.iterator in l)}function l2(){const l=[],r={run:i,use:u};return r;function i(...c){let f=-1;const h=c.pop();if(typeof h!="function")throw new TypeError("Expected function as last argument, not "+h);d(null,...c);function d(m,...p){const x=l[++f];let y=-1;if(m){h(m);return}for(;++y<c.length;)(p[y]===null||p[y]===void 0)&&(p[y]=c[y]);c=p,x?a2(x,d)(...p):h(null,...p)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return l.push(c),r}}function a2(l,r){let i;return u;function u(...h){const d=l.length>h.length;let m;d&&h.push(c);try{m=l.apply(this,h)}catch(p){const x=p;if(d&&i)throw x;return c(x)}d||(m&&m.then&&typeof m.then=="function"?m.then(f,c):m instanceof Error?c(m):f(m))}function c(h,...d){i||(i=!0,r(h,...d))}function f(h){c(null,h)}}const cn={basename:i2,dirname:r2,extname:u2,join:o2,sep:"/"};function i2(l,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');ji(l);let i=0,u=-1,c=l.length,f;if(r===void 0||r.length===0||r.length>l.length){for(;c--;)if(l.codePointAt(c)===47){if(f){i=c+1;break}}else u<0&&(f=!0,u=c+1);return u<0?"":l.slice(i,u)}if(r===l)return"";let h=-1,d=r.length-1;for(;c--;)if(l.codePointAt(c)===47){if(f){i=c+1;break}}else h<0&&(f=!0,h=c+1),d>-1&&(l.codePointAt(c)===r.codePointAt(d--)?d<0&&(u=c):(d=-1,u=h));return i===u?u=h:u<0&&(u=l.length),l.slice(i,u)}function r2(l){if(ji(l),l.length===0)return".";let r=-1,i=l.length,u;for(;--i;)if(l.codePointAt(i)===47){if(u){r=i;break}}else u||(u=!0);return r<0?l.codePointAt(0)===47?"/":".":r===1&&l.codePointAt(0)===47?"//":l.slice(0,r)}function u2(l){ji(l);let r=l.length,i=-1,u=0,c=-1,f=0,h;for(;r--;){const d=l.codePointAt(r);if(d===47){if(h){u=r+1;break}continue}i<0&&(h=!0,i=r+1),d===46?c<0?c=r:f!==1&&(f=1):c>-1&&(f=-1)}return c<0||i<0||f===0||f===1&&c===i-1&&c===u+1?"":l.slice(c,i)}function o2(...l){let r=-1,i;for(;++r<l.length;)ji(l[r]),l[r]&&(i=i===void 0?l[r]:i+"/"+l[r]);return i===void 0?".":s2(i)}function s2(l){ji(l);const r=l.codePointAt(0)===47;let i=c2(l,!r);return i.length===0&&!r&&(i="."),i.length>0&&l.codePointAt(l.length-1)===47&&(i+="/"),r?"/"+i:i}function c2(l,r){let i="",u=0,c=-1,f=0,h=-1,d,m;for(;++h<=l.length;){if(h<l.length)d=l.codePointAt(h);else{if(d===47)break;d=47}if(d===47){if(!(c===h-1||f===1))if(c!==h-1&&f===2){if(i.length<2||u!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",u=0):(i=i.slice(0,m),u=i.length-1-i.lastIndexOf("/")),c=h,f=0;continue}}else if(i.length>0){i="",u=0,c=h,f=0;continue}}r&&(i=i.length>0?i+"/..":"..",u=2)}else i.length>0?i+="/"+l.slice(c+1,h):i=l.slice(c+1,h),u=h-c-1;c=h,f=0}else d===46&&f>-1?f++:f=-1}return i}function ji(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}const f2={cwd:h2};function h2(){return"/"}function rc(l){return!!(l!==null&&typeof l=="object"&&"href"in l&&l.href&&"protocol"in l&&l.protocol&&l.auth===void 0)}function p2(l){if(typeof l=="string")l=new URL(l);else if(!rc(l)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+l+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(l.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return d2(l)}function d2(l){if(l.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const r=l.pathname;let i=-1;for(;++i<r.length;)if(r.codePointAt(i)===37&&r.codePointAt(i+1)===50){const u=r.codePointAt(i+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(r)}const Hs=["history","path","basename","stem","extname","dirname"];class sg{constructor(r){let i;r?rc(r)?i={path:r}:typeof r=="string"||m2(r)?i={value:r}:i=r:i={},this.cwd="cwd"in i?"":f2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Hs.length;){const f=Hs[u];f in i&&i[f]!==void 0&&i[f]!==null&&(this[f]=f==="history"?[...i[f]]:i[f])}let c;for(c in i)Hs.includes(c)||(this[c]=i[c])}get basename(){return typeof this.path=="string"?cn.basename(this.path):void 0}set basename(r){Ys(r,"basename"),qs(r,"basename"),this.path=cn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?cn.dirname(this.path):void 0}set dirname(r){pm(this.basename,"dirname"),this.path=cn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?cn.extname(this.path):void 0}set extname(r){if(qs(r,"extname"),pm(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=cn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){rc(r)&&(r=p2(r)),Ys(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?cn.basename(this.path,this.extname):void 0}set stem(r){Ys(r,"stem"),qs(r,"stem"),this.path=cn.join(this.dirname||"",r+(this.extname||""))}fail(r,i,u){const c=this.message(r,i,u);throw c.fatal=!0,c}info(r,i,u){const c=this.message(r,i,u);return c.fatal=void 0,c}message(r,i,u){const c=new yt(r,i,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function qs(l,r){if(l&&l.includes(cn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+cn.sep+"`")}function Ys(l,r){if(!l)throw new Error("`"+r+"` cannot be empty")}function pm(l,r){if(!l)throw new Error("Setting `"+r+"` requires `path` to be set too")}function m2(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const g2=(function(l){const u=this.constructor.prototype,c=u[l],f=function(){return c.apply(f,arguments)};return Object.setPrototypeOf(f,u),f}),y2={}.hasOwnProperty;class Ec extends g2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=l2()}copy(){const r=new Ec;let i=-1;for(;++i<this.attachers.length;){const u=this.attachers[i];r.use(...u)}return r.data(Us(!0,{},this.namespace)),r}data(r,i){return typeof r=="string"?arguments.length===2?(Xs("data",this.frozen),this.namespace[r]=i,this):y2.call(this.namespace,r)&&this.namespace[r]||void 0:r?(Xs("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=i.call(r,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const i=$r(r),u=this.parser||this.Parser;return Gs("parse",u),u(String(i),i)}process(r,i){const u=this;return this.freeze(),Gs("process",this.parser||this.Parser),Vs("process",this.compiler||this.Compiler),i?c(void 0,i):new Promise(c);function c(f,h){const d=$r(r),m=u.parse(d);u.run(m,d,function(x,y,k){if(x||!y||!k)return p(x);const S=y,A=u.stringify(S,k);v2(A)?k.value=A:k.result=A,p(x,k)});function p(x,y){x||!y?h(x):f?f(y):i(void 0,y)}}}processSync(r){let i=!1,u;return this.freeze(),Gs("processSync",this.parser||this.Parser),Vs("processSync",this.compiler||this.Compiler),this.process(r,c),mm("processSync","process",i),u;function c(f,h){i=!0,fm(f),u=h}}run(r,i,u){dm(r),this.freeze();const c=this.transformers;return!u&&typeof i=="function"&&(u=i,i=void 0),u?f(void 0,u):new Promise(f);function f(h,d){const m=$r(i);c.run(r,m,p);function p(x,y,k){const S=y||r;x?d(x):h?h(S):u(void 0,S,k)}}}runSync(r,i){let u=!1,c;return this.run(r,i,f),mm("runSync","run",u),c;function f(h,d){fm(h),c=d,u=!0}}stringify(r,i){this.freeze();const u=$r(i),c=this.compiler||this.Compiler;return Vs("stringify",c),dm(r),c(r,u)}use(r,...i){const u=this.attachers,c=this.namespace;if(Xs("use",this.frozen),r!=null)if(typeof r=="function")m(r,i);else if(typeof r=="object")Array.isArray(r)?d(r):h(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function f(p){if(typeof p=="function")m(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[x,...y]=p;m(x,y)}else h(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function h(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(p.plugins),p.settings&&(c.settings=Us(!0,c.settings,p.settings))}function d(p){let x=-1;if(p!=null)if(Array.isArray(p))for(;++x<p.length;){const y=p[x];f(y)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function m(p,x){let y=-1,k=-1;for(;++y<u.length;)if(u[y][0]===p){k=y;break}if(k===-1)u.push([p,...x]);else if(x.length>0){let[S,...A]=x;const M=u[k][1];ic(M)&&ic(S)&&(S=Us(!0,M,S)),u[k]=[p,S,...A]}}}}const x2=new Ec().freeze();function Gs(l,r){if(typeof r!="function")throw new TypeError("Cannot `"+l+"` without `parser`")}function Vs(l,r){if(typeof r!="function")throw new TypeError("Cannot `"+l+"` without `compiler`")}function Xs(l,r){if(r)throw new Error("Cannot call `"+l+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function dm(l){if(!ic(l)||typeof l.type!="string")throw new TypeError("Expected node, got `"+l+"`")}function mm(l,r,i){if(!i)throw new Error("`"+l+"` finished async. Use `"+r+"` instead")}function $r(l){return b2(l)?l:new sg(l)}function b2(l){return!!(l&&typeof l=="object"&&"message"in l&&"messages"in l)}function v2(l){return typeof l=="string"||S2(l)}function S2(l){return!!(l&&typeof l=="object"&&"byteLength"in l&&"byteOffset"in l)}const k2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",gm=[],ym={allowDangerousHtml:!0},E2=/^(https?|ircs?|mailto|xmpp)$/i,w2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function T2(l){const r=C2(l),i=z2(l);return A2(r.runSync(r.parse(i),i),l)}function C2(l){const r=l.rehypePlugins||gm,i=l.remarkPlugins||gm,u=l.remarkRehypeOptions?{...l.remarkRehypeOptions,...ym}:ym;return x2().use(rv).use(i).use(e2,u).use(r)}function z2(l){const r=l.children||"",i=new sg;return typeof r=="string"&&(i.value=r),i}function A2(l,r){const i=r.allowedElements,u=r.allowElement,c=r.components,f=r.disallowedElements,h=r.skipHtml,d=r.unwrapDisallowed,m=r.urlTransform||j2;for(const x of w2)Object.hasOwn(r,x.from)&&(""+x.from+(x.to?"use `"+x.to+"` instead":"remove it")+k2+x.id,void 0);return kc(l,p),Vy(l,{Fragment:b.Fragment,components:c,ignoreInvalidStyle:!0,jsx:b.jsx,jsxs:b.jsxs,passKeys:!0,passNode:!0});function p(x,y,k){if(x.type==="raw"&&k&&typeof y=="number")return h?k.children.splice(y,1):k.children[y]={type:"text",value:x.value},y;if(x.type==="element"){let S;for(S in Os)if(Object.hasOwn(Os,S)&&Object.hasOwn(x.properties,S)){const A=x.properties[S],M=Os[S];(M===null||M.includes(x.tagName))&&(x.properties[S]=m(String(A||""),S,x))}}if(x.type==="element"){let S=i?!i.includes(x.tagName):f?f.includes(x.tagName):!1;if(!S&&u&&typeof y=="number"&&(S=!u(x,y,k)),S&&k&&typeof y=="number")return d&&x.children?k.children.splice(y,1,...x.children):k.children.splice(y,1),y}}}function j2(l){const r=l.indexOf(":"),i=l.indexOf("?"),u=l.indexOf("#"),c=l.indexOf("/");return r===-1||c!==-1&&r>c||i!==-1&&r>i||u!==-1&&r>u||E2.test(l.slice(0,r))?l:""}function xm(l,r){const i=String(l);if(typeof r!="string")throw new TypeError("Expected character");let u=0,c=i.indexOf(r);for(;c!==-1;)u++,c=i.indexOf(r,c+r.length);return u}function M2(l){if(typeof l!="string")throw new TypeError("Expected a string");return l.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function D2(l,r,i){const c=ou((i||{}).ignore||[]),f=N2(r);let h=-1;for(;++h<f.length;)og(l,"text",d);function d(p,x){let y=-1,k;for(;++y<x.length;){const S=x[y],A=k?k.children:void 0;if(c(S,A?A.indexOf(S):void 0,k))return;k=S}if(k)return m(p,x)}function m(p,x){const y=x[x.length-1],k=f[h][0],S=f[h][1];let A=0;const L=y.children.indexOf(p);let D=!1,I=[];k.lastIndex=0;let Y=k.exec(p.value);for(;Y;){const re=Y.index,ne={index:Y.index,input:Y.input,stack:[...x,p]};let H=S(...Y,ne);if(typeof H=="string"&&(H=H.length>0?{type:"text",value:H}:void 0),H===!1?k.lastIndex=re+1:(A!==re&&I.push({type:"text",value:p.value.slice(A,re)}),Array.isArray(H)?I.push(...H):H&&I.push(H),A=re+Y[0].length,D=!0),!k.global)break;Y=k.exec(p.value)}return D?(A<p.value.length&&I.push({type:"text",value:p.value.slice(A)}),y.children.splice(L,1,...I)):I=[p],L+I.length}}function N2(l){const r=[];if(!Array.isArray(l))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!l[0]||Array.isArray(l[0])?l:[l];let u=-1;for(;++u<i.length;){const c=i[u];r.push([_2(c[0]),O2(c[1])])}return r}function _2(l){return typeof l=="string"?new RegExp(M2(l),"g"):l}function O2(l){return typeof l=="function"?l:function(){return l}}const Qs="phrasing",Zs=["autolink","link","image","label"];function R2(){return{transforms:[G2],enter:{literalAutolink:B2,literalAutolinkEmail:Is,literalAutolinkHttp:Is,literalAutolinkWww:Is},exit:{literalAutolink:Y2,literalAutolinkEmail:q2,literalAutolinkHttp:U2,literalAutolinkWww:H2}}}function L2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Qs,notInConstruct:Zs},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Qs,notInConstruct:Zs},{character:":",before:"[ps]",after:"\\/",inConstruct:Qs,notInConstruct:Zs}]}}function B2(l){this.enter({type:"link",title:null,url:"",children:[]},l)}function Is(l){this.config.enter.autolinkProtocol.call(this,l)}function U2(l){this.config.exit.autolinkProtocol.call(this,l)}function H2(l){this.config.exit.data.call(this,l);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(l)}function q2(l){this.config.exit.autolinkEmail.call(this,l)}function Y2(l){this.exit(l)}function G2(l){D2(l,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,V2],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),X2]],{ignore:["link","linkReference"]})}function V2(l,r,i,u,c){let f="";if(!cg(c)||(/^w/i.test(r)&&(i=r+i,r="",f="http://"),!Q2(i)))return!1;const h=Z2(i+u);if(!h[0])return!1;const d={type:"link",title:null,url:f+r+h[0],children:[{type:"text",value:r+h[0]}]};return h[1]?[d,{type:"text",value:h[1]}]:d}function X2(l,r,i,u){return!cg(u,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+i,children:[{type:"text",value:r+"@"+i}]}}function Q2(l){const r=l.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function Z2(l){const r=/[!"&'),.:;<>?\]}]+$/.exec(l);if(!r)return[l,void 0];l=l.slice(0,r.index);let i=r[0],u=i.indexOf(")");const c=xm(l,"(");let f=xm(l,")");for(;u!==-1&&c>f;)l+=i.slice(0,u+1),i=i.slice(u+1),u=i.indexOf(")"),f++;return[l,i]}function cg(l,r){const i=l.input.charCodeAt(l.index-1);return(l.index===0||Cl(i)||iu(i))&&(!r||i!==47)}fg.peek=tS;function I2(){this.buffer()}function F2(l){this.enter({type:"footnoteReference",identifier:"",label:""},l)}function K2(){this.buffer()}function J2(l){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},l)}function $2(l){const r=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=an(this.sliceSerialize(l)).toLowerCase(),i.label=r}function W2(l){this.exit(l)}function P2(l){const r=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=an(this.sliceSerialize(l)).toLowerCase(),i.label=r}function eS(l){this.exit(l)}function tS(){return"["}function fg(l,r,i,u){const c=i.createTracker(u);let f=c.move("[^");const h=i.enter("footnoteReference"),d=i.enter("reference");return f+=c.move(i.safe(i.associationId(l),{after:"]",before:f})),d(),h(),f+=c.move("]"),f}function nS(){return{enter:{gfmFootnoteCallString:I2,gfmFootnoteCall:F2,gfmFootnoteDefinitionLabelString:K2,gfmFootnoteDefinition:J2},exit:{gfmFootnoteCallString:$2,gfmFootnoteCall:W2,gfmFootnoteDefinitionLabelString:P2,gfmFootnoteDefinition:eS}}}function lS(l){let r=!1;return l&&l.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:i,footnoteReference:fg},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(u,c,f,h){const d=f.createTracker(h);let m=d.move("[^");const p=f.enter("footnoteDefinition"),x=f.enter("label");return m+=d.move(f.safe(f.associationId(u),{before:m,after:"]"})),x(),m+=d.move("]:"),u.children&&u.children.length>0&&(d.shift(4),m+=d.move((r?`
`:" ")+f.indentLines(f.containerFlow(u,d.current()),r?hg:aS))),p(),m}}function aS(l,r,i){return r===0?l:hg(l,r,i)}function hg(l,r,i){return(i?"":"    ")+l}const iS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];pg.peek=cS;function rS(){return{canContainEols:["delete"],enter:{strikethrough:oS},exit:{strikethrough:sS}}}function uS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:iS}],handlers:{delete:pg}}}function oS(l){this.enter({type:"delete",children:[]},l)}function sS(l){this.exit(l)}function pg(l,r,i,u){const c=i.createTracker(u),f=i.enter("strikethrough");let h=c.move("~~");return h+=i.containerPhrasing(l,{...c.current(),before:h,after:"~"}),h+=c.move("~~"),f(),h}function cS(){return"~"}function fS(l){return l.length}function hS(l,r){const i=r||{},u=(i.align||[]).concat(),c=i.stringLength||fS,f=[],h=[],d=[],m=[];let p=0,x=-1;for(;++x<l.length;){const M=[],L=[];let D=-1;for(l[x].length>p&&(p=l[x].length);++D<l[x].length;){const I=pS(l[x][D]);if(i.alignDelimiters!==!1){const Y=c(I);L[D]=Y,(m[D]===void 0||Y>m[D])&&(m[D]=Y)}M.push(I)}h[x]=M,d[x]=L}let y=-1;if(typeof u=="object"&&"length"in u)for(;++y<p;)f[y]=bm(u[y]);else{const M=bm(u);for(;++y<p;)f[y]=M}y=-1;const k=[],S=[];for(;++y<p;){const M=f[y];let L="",D="";M===99?(L=":",D=":"):M===108?L=":":M===114&&(D=":");let I=i.alignDelimiters===!1?1:Math.max(1,m[y]-L.length-D.length);const Y=L+"-".repeat(I)+D;i.alignDelimiters!==!1&&(I=L.length+I+D.length,I>m[y]&&(m[y]=I),S[y]=I),k[y]=Y}h.splice(1,0,k),d.splice(1,0,S),x=-1;const A=[];for(;++x<h.length;){const M=h[x],L=d[x];y=-1;const D=[];for(;++y<p;){const I=M[y]||"";let Y="",re="";if(i.alignDelimiters!==!1){const ne=m[y]-(L[y]||0),H=f[y];H===114?Y=" ".repeat(ne):H===99?ne%2?(Y=" ".repeat(ne/2+.5),re=" ".repeat(ne/2-.5)):(Y=" ".repeat(ne/2),re=Y):re=" ".repeat(ne)}i.delimiterStart!==!1&&!y&&D.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&I==="")&&(i.delimiterStart!==!1||y)&&D.push(" "),i.alignDelimiters!==!1&&D.push(Y),D.push(I),i.alignDelimiters!==!1&&D.push(re),i.padding!==!1&&D.push(" "),(i.delimiterEnd!==!1||y!==p-1)&&D.push("|")}A.push(i.delimiterEnd===!1?D.join("").replace(/ +$/,""):D.join(""))}return A.join(`
`)}function pS(l){return l==null?"":String(l)}function bm(l){const r=typeof l=="string"?l.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function dS(l,r,i,u){const c=i.enter("blockquote"),f=i.createTracker(u);f.move("> "),f.shift(2);const h=i.indentLines(i.containerFlow(l,f.current()),mS);return c(),h}function mS(l,r,i){return">"+(i?"":" ")+l}function gS(l,r){return vm(l,r.inConstruct,!0)&&!vm(l,r.notInConstruct,!1)}function vm(l,r,i){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return i;let u=-1;for(;++u<r.length;)if(l.includes(r[u]))return!0;return!1}function Sm(l,r,i,u){let c=-1;for(;++c<i.unsafe.length;)if(i.unsafe[c].character===`
`&&gS(i.stack,i.unsafe[c]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function yS(l,r){const i=String(l);let u=i.indexOf(r),c=u,f=0,h=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===c?++f>h&&(h=f):f=1,c=u+r.length,u=i.indexOf(r,c);return h}function xS(l,r){return!!(r.options.fences===!1&&l.value&&!l.lang&&/[^ \r\n]/.test(l.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(l.value))}function bS(l){const r=l.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function vS(l,r,i,u){const c=bS(i),f=l.value||"",h=c==="`"?"GraveAccent":"Tilde";if(xS(l,i)){const y=i.enter("codeIndented"),k=i.indentLines(f,SS);return y(),k}const d=i.createTracker(u),m=c.repeat(Math.max(yS(f,c)+1,3)),p=i.enter("codeFenced");let x=d.move(m);if(l.lang){const y=i.enter(`codeFencedLang${h}`);x+=d.move(i.safe(l.lang,{before:x,after:" ",encode:["`"],...d.current()})),y()}if(l.lang&&l.meta){const y=i.enter(`codeFencedMeta${h}`);x+=d.move(" "),x+=d.move(i.safe(l.meta,{before:x,after:`
`,encode:["`"],...d.current()})),y()}return x+=d.move(`
`),f&&(x+=d.move(f+`
`)),x+=d.move(m),p(),x}function SS(l,r,i){return(i?"":"    ")+l}function wc(l){const r=l.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function kS(l,r,i,u){const c=wc(i),f=c==='"'?"Quote":"Apostrophe",h=i.enter("definition");let d=i.enter("label");const m=i.createTracker(u);let p=m.move("[");return p+=m.move(i.safe(i.associationId(l),{before:p,after:"]",...m.current()})),p+=m.move("]: "),d(),!l.url||/[\0- \u007F]/.test(l.url)?(d=i.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(i.safe(l.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(d=i.enter("destinationRaw"),p+=m.move(i.safe(l.url,{before:p,after:l.title?" ":`
`,...m.current()}))),d(),l.title&&(d=i.enter(`title${f}`),p+=m.move(" "+c),p+=m.move(i.safe(l.title,{before:p,after:c,...m.current()})),p+=m.move(c),d()),h(),p}function ES(l){const r=l.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Ci(l){return"&#x"+l.toString(16).toUpperCase()+";"}function lu(l,r,i){const u=va(l),c=va(r);return u===void 0?c===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}dg.peek=wS;function dg(l,r,i,u){const c=ES(i),f=i.enter("emphasis"),h=i.createTracker(u),d=h.move(c);let m=h.move(i.containerPhrasing(l,{after:c,before:d,...h.current()}));const p=m.charCodeAt(0),x=lu(u.before.charCodeAt(u.before.length-1),p,c);x.inside&&(m=Ci(p)+m.slice(1));const y=m.charCodeAt(m.length-1),k=lu(u.after.charCodeAt(0),y,c);k.inside&&(m=m.slice(0,-1)+Ci(y));const S=h.move(c);return f(),i.attentionEncodeSurroundingInfo={after:k.outside,before:x.outside},d+m+S}function wS(l,r,i){return i.options.emphasis||"*"}function TS(l,r){let i=!1;return kc(l,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return i=!0,lc}),!!((!l.depth||l.depth<3)&&mc(l)&&(r.options.setext||i))}function CS(l,r,i,u){const c=Math.max(Math.min(6,l.depth||1),1),f=i.createTracker(u);if(TS(l,i)){const x=i.enter("headingSetext"),y=i.enter("phrasing"),k=i.containerPhrasing(l,{...f.current(),before:`
`,after:`
`});return y(),x(),k+`
`+(c===1?"=":"-").repeat(k.length-(Math.max(k.lastIndexOf("\r"),k.lastIndexOf(`
`))+1))}const h="#".repeat(c),d=i.enter("headingAtx"),m=i.enter("phrasing");f.move(h+" ");let p=i.containerPhrasing(l,{before:"# ",after:`
`,...f.current()});return/^[\t ]/.test(p)&&(p=Ci(p.charCodeAt(0))+p.slice(1)),p=p?h+" "+p:h,i.options.closeAtx&&(p+=" "+h),m(),d(),p}mg.peek=zS;function mg(l){return l.value||""}function zS(){return"<"}gg.peek=AS;function gg(l,r,i,u){const c=wc(i),f=c==='"'?"Quote":"Apostrophe",h=i.enter("image");let d=i.enter("label");const m=i.createTracker(u);let p=m.move("![");return p+=m.move(i.safe(l.alt,{before:p,after:"]",...m.current()})),p+=m.move("]("),d(),!l.url&&l.title||/[\0- \u007F]/.test(l.url)?(d=i.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(i.safe(l.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(d=i.enter("destinationRaw"),p+=m.move(i.safe(l.url,{before:p,after:l.title?" ":")",...m.current()}))),d(),l.title&&(d=i.enter(`title${f}`),p+=m.move(" "+c),p+=m.move(i.safe(l.title,{before:p,after:c,...m.current()})),p+=m.move(c),d()),p+=m.move(")"),h(),p}function AS(){return"!"}yg.peek=jS;function yg(l,r,i,u){const c=l.referenceType,f=i.enter("imageReference");let h=i.enter("label");const d=i.createTracker(u);let m=d.move("![");const p=i.safe(l.alt,{before:m,after:"]",...d.current()});m+=d.move(p+"]["),h();const x=i.stack;i.stack=[],h=i.enter("reference");const y=i.safe(i.associationId(l),{before:m,after:"]",...d.current()});return h(),i.stack=x,f(),c==="full"||!p||p!==y?m+=d.move(y+"]"):c==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function jS(){return"!"}xg.peek=MS;function xg(l,r,i){let u=l.value||"",c="`",f=-1;for(;new RegExp("(^|[^`])"+c+"([^`]|$)").test(u);)c+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++f<i.unsafe.length;){const h=i.unsafe[f],d=i.compilePattern(h);let m;if(h.atBreak)for(;m=d.exec(u);){let p=m.index;u.charCodeAt(p)===10&&u.charCodeAt(p-1)===13&&p--,u=u.slice(0,p)+" "+u.slice(m.index+1)}}return c+u+c}function MS(){return"`"}function bg(l,r){const i=mc(l);return!!(!r.options.resourceLink&&l.url&&!l.title&&l.children&&l.children.length===1&&l.children[0].type==="text"&&(i===l.url||"mailto:"+i===l.url)&&/^[a-z][a-z+.-]+:/i.test(l.url)&&!/[\0- <>\u007F]/.test(l.url))}vg.peek=DS;function vg(l,r,i,u){const c=wc(i),f=c==='"'?"Quote":"Apostrophe",h=i.createTracker(u);let d,m;if(bg(l,i)){const x=i.stack;i.stack=[],d=i.enter("autolink");let y=h.move("<");return y+=h.move(i.containerPhrasing(l,{before:y,after:">",...h.current()})),y+=h.move(">"),d(),i.stack=x,y}d=i.enter("link"),m=i.enter("label");let p=h.move("[");return p+=h.move(i.containerPhrasing(l,{before:p,after:"](",...h.current()})),p+=h.move("]("),m(),!l.url&&l.title||/[\0- \u007F]/.test(l.url)?(m=i.enter("destinationLiteral"),p+=h.move("<"),p+=h.move(i.safe(l.url,{before:p,after:">",...h.current()})),p+=h.move(">")):(m=i.enter("destinationRaw"),p+=h.move(i.safe(l.url,{before:p,after:l.title?" ":")",...h.current()}))),m(),l.title&&(m=i.enter(`title${f}`),p+=h.move(" "+c),p+=h.move(i.safe(l.title,{before:p,after:c,...h.current()})),p+=h.move(c),m()),p+=h.move(")"),d(),p}function DS(l,r,i){return bg(l,i)?"<":"["}Sg.peek=NS;function Sg(l,r,i,u){const c=l.referenceType,f=i.enter("linkReference");let h=i.enter("label");const d=i.createTracker(u);let m=d.move("[");const p=i.containerPhrasing(l,{before:m,after:"]",...d.current()});m+=d.move(p+"]["),h();const x=i.stack;i.stack=[],h=i.enter("reference");const y=i.safe(i.associationId(l),{before:m,after:"]",...d.current()});return h(),i.stack=x,f(),c==="full"||!p||p!==y?m+=d.move(y+"]"):c==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function NS(){return"["}function Tc(l){const r=l.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function _S(l){const r=Tc(l),i=l.options.bulletOther;if(!i)return r==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+i+"`) to be different");return i}function OS(l){const r=l.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function kg(l){const r=l.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function RS(l,r,i,u){const c=i.enter("list"),f=i.bulletCurrent;let h=l.ordered?OS(i):Tc(i);const d=l.ordered?h==="."?")":".":_S(i);let m=r&&i.bulletLastUsed?h===i.bulletLastUsed:!1;if(!l.ordered){const x=l.children?l.children[0]:void 0;if((h==="*"||h==="-")&&x&&(!x.children||!x.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(m=!0),kg(i)===h&&x){let y=-1;for(;++y<l.children.length;){const k=l.children[y];if(k&&k.type==="listItem"&&k.children&&k.children[0]&&k.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(h=d),i.bulletCurrent=h;const p=i.containerFlow(l,u);return i.bulletLastUsed=h,i.bulletCurrent=f,c(),p}function LS(l){const r=l.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function BS(l,r,i,u){const c=LS(i);let f=i.bulletCurrent||Tc(i);r&&r.type==="list"&&r.ordered&&(f=(typeof r.start=="number"&&r.start>-1?r.start:1)+(i.options.incrementListMarker===!1?0:r.children.indexOf(l))+f);let h=f.length+1;(c==="tab"||c==="mixed"&&(r&&r.type==="list"&&r.spread||l.spread))&&(h=Math.ceil(h/4)*4);const d=i.createTracker(u);d.move(f+" ".repeat(h-f.length)),d.shift(h);const m=i.enter("listItem"),p=i.indentLines(i.containerFlow(l,d.current()),x);return m(),p;function x(y,k,S){return k?(S?"":" ".repeat(h))+y:(S?f:f+" ".repeat(h-f.length))+y}}function US(l,r,i,u){const c=i.enter("paragraph"),f=i.enter("phrasing"),h=i.containerPhrasing(l,u);return f(),c(),h}const HS=ou(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function qS(l,r,i,u){return(l.children.some(function(h){return HS(h)})?i.containerPhrasing:i.containerFlow).call(i,l,u)}function YS(l){const r=l.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}Eg.peek=GS;function Eg(l,r,i,u){const c=YS(i),f=i.enter("strong"),h=i.createTracker(u),d=h.move(c+c);let m=h.move(i.containerPhrasing(l,{after:c,before:d,...h.current()}));const p=m.charCodeAt(0),x=lu(u.before.charCodeAt(u.before.length-1),p,c);x.inside&&(m=Ci(p)+m.slice(1));const y=m.charCodeAt(m.length-1),k=lu(u.after.charCodeAt(0),y,c);k.inside&&(m=m.slice(0,-1)+Ci(y));const S=h.move(c+c);return f(),i.attentionEncodeSurroundingInfo={after:k.outside,before:x.outside},d+m+S}function GS(l,r,i){return i.options.strong||"*"}function VS(l,r,i,u){return i.safe(l.value,u)}function XS(l){const r=l.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function QS(l,r,i){const u=(kg(i)+(i.options.ruleSpaces?" ":"")).repeat(XS(i));return i.options.ruleSpaces?u.slice(0,-1):u}const wg={blockquote:dS,break:Sm,code:vS,definition:kS,emphasis:dg,hardBreak:Sm,heading:CS,html:mg,image:gg,imageReference:yg,inlineCode:xg,link:vg,linkReference:Sg,list:RS,listItem:BS,paragraph:US,root:qS,strong:Eg,text:VS,thematicBreak:QS};function ZS(){return{enter:{table:IS,tableData:km,tableHeader:km,tableRow:KS},exit:{codeText:JS,table:FS,tableData:Fs,tableHeader:Fs,tableRow:Fs}}}function IS(l){const r=l._align;this.enter({type:"table",align:r.map(function(i){return i==="none"?null:i}),children:[]},l),this.data.inTable=!0}function FS(l){this.exit(l),this.data.inTable=void 0}function KS(l){this.enter({type:"tableRow",children:[]},l)}function Fs(l){this.exit(l)}function km(l){this.enter({type:"tableCell",children:[]},l)}function JS(l){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,$S));const i=this.stack[this.stack.length-1];i.type,i.value=r,this.exit(l)}function $S(l,r){return r==="|"?r:l}function WS(l){const r=l||{},i=r.tableCellPadding,u=r.tablePipeAlign,c=r.stringLength,f=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:k,table:h,tableCell:m,tableRow:d}};function h(S,A,M,L){return p(x(S,M,L),S.align)}function d(S,A,M,L){const D=y(S,M,L),I=p([D]);return I.slice(0,I.indexOf(`
`))}function m(S,A,M,L){const D=M.enter("tableCell"),I=M.enter("phrasing"),Y=M.containerPhrasing(S,{...L,before:f,after:f});return I(),D(),Y}function p(S,A){return hS(S,{align:A,alignDelimiters:u,padding:i,stringLength:c})}function x(S,A,M){const L=S.children;let D=-1;const I=[],Y=A.enter("table");for(;++D<L.length;)I[D]=y(L[D],A,M);return Y(),I}function y(S,A,M){const L=S.children;let D=-1;const I=[],Y=A.enter("tableRow");for(;++D<L.length;)I[D]=m(L[D],S,A,M);return Y(),I}function k(S,A,M){let L=wg.inlineCode(S,A,M);return M.stack.includes("tableCell")&&(L=L.replace(/\|/g,"\\$&")),L}}function PS(){return{exit:{taskListCheckValueChecked:Em,taskListCheckValueUnchecked:Em,paragraph:t4}}}function e4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:n4}}}function Em(l){const r=this.stack[this.stack.length-2];r.type,r.checked=l.type==="taskListCheckValueChecked"}function t4(l){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const u=i.children[0];if(u&&u.type==="text"){const c=r.children;let f=-1,h;for(;++f<c.length;){const d=c[f];if(d.type==="paragraph"){h=d;break}}h===i&&(u.value=u.value.slice(1),u.value.length===0?i.children.shift():i.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,i.position.start=Object.assign({},u.position.start)))}}this.exit(l)}function n4(l,r,i,u){const c=l.children[0],f=typeof l.checked=="boolean"&&c&&c.type==="paragraph",h="["+(l.checked?"x":" ")+"] ",d=i.createTracker(u);f&&d.move(h);let m=wg.listItem(l,r,i,{...u,...d.current()});return f&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),m;function p(x){return x+h}}function l4(){return[R2(),nS(),rS(),ZS(),PS()]}function a4(l){return{extensions:[L2(),lS(l),uS(),WS(l),e4()]}}const i4={tokenize:f4,partial:!0},Tg={tokenize:h4,partial:!0},Cg={tokenize:p4,partial:!0},zg={tokenize:d4,partial:!0},r4={tokenize:m4,partial:!0},Ag={name:"wwwAutolink",tokenize:s4,previous:Mg},jg={name:"protocolAutolink",tokenize:c4,previous:Dg},_n={name:"emailAutolink",tokenize:o4,previous:Ng},fn={};function u4(){return{text:fn}}let Tl=48;for(;Tl<123;)fn[Tl]=_n,Tl++,Tl===58?Tl=65:Tl===91&&(Tl=97);fn[43]=_n;fn[45]=_n;fn[46]=_n;fn[95]=_n;fn[72]=[_n,jg];fn[104]=[_n,jg];fn[87]=[_n,Ag];fn[119]=[_n,Ag];function o4(l,r,i){const u=this;let c,f;return h;function h(y){return!uc(y)||!Ng.call(u,u.previous)||Cc(u.events)?i(y):(l.enter("literalAutolink"),l.enter("literalAutolinkEmail"),d(y))}function d(y){return uc(y)?(l.consume(y),d):y===64?(l.consume(y),m):i(y)}function m(y){return y===46?l.check(r4,x,p)(y):y===45||y===95||gt(y)?(f=!0,l.consume(y),m):x(y)}function p(y){return l.consume(y),c=!0,m}function x(y){return f&&c&&St(u.previous)?(l.exit("literalAutolinkEmail"),l.exit("literalAutolink"),r(y)):i(y)}}function s4(l,r,i){const u=this;return c;function c(h){return h!==87&&h!==119||!Mg.call(u,u.previous)||Cc(u.events)?i(h):(l.enter("literalAutolink"),l.enter("literalAutolinkWww"),l.check(i4,l.attempt(Tg,l.attempt(Cg,f),i),i)(h))}function f(h){return l.exit("literalAutolinkWww"),l.exit("literalAutolink"),r(h)}}function c4(l,r,i){const u=this;let c="",f=!1;return h;function h(y){return(y===72||y===104)&&Dg.call(u,u.previous)&&!Cc(u.events)?(l.enter("literalAutolink"),l.enter("literalAutolinkHttp"),c+=String.fromCodePoint(y),l.consume(y),d):i(y)}function d(y){if(St(y)&&c.length<5)return c+=String.fromCodePoint(y),l.consume(y),d;if(y===58){const k=c.toLowerCase();if(k==="http"||k==="https")return l.consume(y),m}return i(y)}function m(y){return y===47?(l.consume(y),f?p:(f=!0,m)):i(y)}function p(y){return y===null||eu(y)||Xe(y)||Cl(y)||iu(y)?i(y):l.attempt(Tg,l.attempt(Cg,x),i)(y)}function x(y){return l.exit("literalAutolinkHttp"),l.exit("literalAutolink"),r(y)}}function f4(l,r,i){let u=0;return c;function c(h){return(h===87||h===119)&&u<3?(u++,l.consume(h),c):h===46&&u===3?(l.consume(h),f):i(h)}function f(h){return h===null?i(h):r(h)}}function h4(l,r,i){let u,c,f;return h;function h(p){return p===46||p===95?l.check(zg,m,d)(p):p===null||Xe(p)||Cl(p)||p!==45&&iu(p)?m(p):(f=!0,l.consume(p),h)}function d(p){return p===95?u=!0:(c=u,u=void 0),l.consume(p),h}function m(p){return c||u||!f?i(p):r(p)}}function p4(l,r){let i=0,u=0;return c;function c(h){return h===40?(i++,l.consume(h),c):h===41&&u<i?f(h):h===33||h===34||h===38||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===60||h===63||h===93||h===95||h===126?l.check(zg,r,f)(h):h===null||Xe(h)||Cl(h)?r(h):(l.consume(h),c)}function f(h){return h===41&&u++,l.consume(h),c}}function d4(l,r,i){return u;function u(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(l.consume(d),u):d===38?(l.consume(d),f):d===93?(l.consume(d),c):d===60||d===null||Xe(d)||Cl(d)?r(d):i(d)}function c(d){return d===null||d===40||d===91||Xe(d)||Cl(d)?r(d):u(d)}function f(d){return St(d)?h(d):i(d)}function h(d){return d===59?(l.consume(d),u):St(d)?(l.consume(d),h):i(d)}}function m4(l,r,i){return u;function u(f){return l.consume(f),c}function c(f){return gt(f)?i(f):r(f)}}function Mg(l){return l===null||l===40||l===42||l===95||l===91||l===93||l===126||Xe(l)}function Dg(l){return!St(l)}function Ng(l){return!(l===47||uc(l))}function uc(l){return l===43||l===45||l===46||l===95||gt(l)}function Cc(l){let r=l.length,i=!1;for(;r--;){const u=l[r][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){i=!0;break}if(u._gfmAutolinkLiteralWalkedInto){i=!1;break}}return l.length>0&&!i&&(l[l.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const g4={tokenize:w4,partial:!0};function y4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:S4,continuation:{tokenize:k4},exit:E4}},text:{91:{name:"gfmFootnoteCall",tokenize:v4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:x4,resolveTo:b4}}}}function x4(l,r,i){const u=this;let c=u.events.length;const f=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let h;for(;c--;){const m=u.events[c][1];if(m.type==="labelImage"){h=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return d;function d(m){if(!h||!h._balanced)return i(m);const p=an(u.sliceSerialize({start:h.end,end:u.now()}));return p.codePointAt(0)!==94||!f.includes(p.slice(1))?i(m):(l.enter("gfmFootnoteCallLabelMarker"),l.consume(m),l.exit("gfmFootnoteCallLabelMarker"),r(m))}}function b4(l,r){let i=l.length;for(;i--;)if(l[i][1].type==="labelImage"&&l[i][0]==="enter"){l[i][1];break}l[i+1][1].type="data",l[i+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},l[i+3][1].start),end:Object.assign({},l[l.length-1][1].end)},c={type:"gfmFootnoteCallMarker",start:Object.assign({},l[i+3][1].end),end:Object.assign({},l[i+3][1].end)};c.end.column++,c.end.offset++,c.end._bufferIndex++;const f={type:"gfmFootnoteCallString",start:Object.assign({},c.end),end:Object.assign({},l[l.length-1][1].start)},h={type:"chunkString",contentType:"string",start:Object.assign({},f.start),end:Object.assign({},f.end)},d=[l[i+1],l[i+2],["enter",u,r],l[i+3],l[i+4],["enter",c,r],["exit",c,r],["enter",f,r],["enter",h,r],["exit",h,r],["exit",f,r],l[l.length-2],l[l.length-1],["exit",u,r]];return l.splice(i,l.length-i+1,...d),l}function v4(l,r,i){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f=0,h;return d;function d(y){return l.enter("gfmFootnoteCall"),l.enter("gfmFootnoteCallLabelMarker"),l.consume(y),l.exit("gfmFootnoteCallLabelMarker"),m}function m(y){return y!==94?i(y):(l.enter("gfmFootnoteCallMarker"),l.consume(y),l.exit("gfmFootnoteCallMarker"),l.enter("gfmFootnoteCallString"),l.enter("chunkString").contentType="string",p)}function p(y){if(f>999||y===93&&!h||y===null||y===91||Xe(y))return i(y);if(y===93){l.exit("chunkString");const k=l.exit("gfmFootnoteCallString");return c.includes(an(u.sliceSerialize(k)))?(l.enter("gfmFootnoteCallLabelMarker"),l.consume(y),l.exit("gfmFootnoteCallLabelMarker"),l.exit("gfmFootnoteCall"),r):i(y)}return Xe(y)||(h=!0),f++,l.consume(y),y===92?x:p}function x(y){return y===91||y===92||y===93?(l.consume(y),f++,p):p(y)}}function S4(l,r,i){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f,h=0,d;return m;function m(A){return l.enter("gfmFootnoteDefinition")._container=!0,l.enter("gfmFootnoteDefinitionLabel"),l.enter("gfmFootnoteDefinitionLabelMarker"),l.consume(A),l.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(A){return A===94?(l.enter("gfmFootnoteDefinitionMarker"),l.consume(A),l.exit("gfmFootnoteDefinitionMarker"),l.enter("gfmFootnoteDefinitionLabelString"),l.enter("chunkString").contentType="string",x):i(A)}function x(A){if(h>999||A===93&&!d||A===null||A===91||Xe(A))return i(A);if(A===93){l.exit("chunkString");const M=l.exit("gfmFootnoteDefinitionLabelString");return f=an(u.sliceSerialize(M)),l.enter("gfmFootnoteDefinitionLabelMarker"),l.consume(A),l.exit("gfmFootnoteDefinitionLabelMarker"),l.exit("gfmFootnoteDefinitionLabel"),k}return Xe(A)||(d=!0),h++,l.consume(A),A===92?y:x}function y(A){return A===91||A===92||A===93?(l.consume(A),h++,x):x(A)}function k(A){return A===58?(l.enter("definitionMarker"),l.consume(A),l.exit("definitionMarker"),c.includes(f)||c.push(f),je(l,S,"gfmFootnoteDefinitionWhitespace")):i(A)}function S(A){return r(A)}}function k4(l,r,i){return l.check(Ai,r,l.attempt(g4,r,i))}function E4(l){l.exit("gfmFootnoteDefinition")}function w4(l,r,i){const u=this;return je(l,c,"gfmFootnoteDefinitionIndent",5);function c(f){const h=u.events[u.events.length-1];return h&&h[1].type==="gfmFootnoteDefinitionIndent"&&h[2].sliceSerialize(h[1],!0).length===4?r(f):i(f)}}function T4(l){let i=(l||{}).singleTilde;const u={name:"strikethrough",tokenize:f,resolveAll:c};return i==null&&(i=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function c(h,d){let m=-1;for(;++m<h.length;)if(h[m][0]==="enter"&&h[m][1].type==="strikethroughSequenceTemporary"&&h[m][1]._close){let p=m;for(;p--;)if(h[p][0]==="exit"&&h[p][1].type==="strikethroughSequenceTemporary"&&h[p][1]._open&&h[m][1].end.offset-h[m][1].start.offset===h[p][1].end.offset-h[p][1].start.offset){h[m][1].type="strikethroughSequence",h[p][1].type="strikethroughSequence";const x={type:"strikethrough",start:Object.assign({},h[p][1].start),end:Object.assign({},h[m][1].end)},y={type:"strikethroughText",start:Object.assign({},h[p][1].end),end:Object.assign({},h[m][1].start)},k=[["enter",x,d],["enter",h[p][1],d],["exit",h[p][1],d],["enter",y,d]],S=d.parser.constructs.insideSpan.null;S&&Yt(k,k.length,0,ru(S,h.slice(p+1,m),d)),Yt(k,k.length,0,[["exit",y,d],["enter",h[m][1],d],["exit",h[m][1],d],["exit",x,d]]),Yt(h,p-1,m-p+3,k),m=p+k.length-2;break}}for(m=-1;++m<h.length;)h[m][1].type==="strikethroughSequenceTemporary"&&(h[m][1].type="data");return h}function f(h,d,m){const p=this.previous,x=this.events;let y=0;return k;function k(A){return p===126&&x[x.length-1][1].type!=="characterEscape"?m(A):(h.enter("strikethroughSequenceTemporary"),S(A))}function S(A){const M=va(p);if(A===126)return y>1?m(A):(h.consume(A),y++,S);if(y<2&&!i)return m(A);const L=h.exit("strikethroughSequenceTemporary"),D=va(A);return L._open=!D||D===2&&!!M,L._close=!M||M===2&&!!D,d(A)}}}class C4{constructor(){this.map=[]}add(r,i,u){z4(this,r,i,u)}consume(r){if(this.map.sort(function(f,h){return f[0]-h[0]}),this.map.length===0)return;let i=this.map.length;const u=[];for(;i>0;)i-=1,u.push(r.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),r.length=this.map[i][0];u.push(r.slice()),r.length=0;let c=u.pop();for(;c;){for(const f of c)r.push(f);c=u.pop()}this.map.length=0}}function z4(l,r,i,u){let c=0;if(!(i===0&&u.length===0)){for(;c<l.map.length;){if(l.map[c][0]===r){l.map[c][1]+=i,l.map[c][2].push(...u);return}c+=1}l.map.push([r,i,u])}}function A4(l,r){let i=!1;const u=[];for(;r<l.length;){const c=l[r];if(i){if(c[0]==="enter")c[1].type==="tableContent"&&u.push(l[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(c[1].type==="tableContent"){if(l[r-1][1].type==="tableDelimiterMarker"){const f=u.length-1;u[f]=u[f]==="left"?"center":"right"}}else if(c[1].type==="tableDelimiterRow")break}else c[0]==="enter"&&c[1].type==="tableDelimiterRow"&&(i=!0);r+=1}return u}function j4(){return{flow:{null:{name:"table",tokenize:M4,resolveAll:D4}}}}function M4(l,r,i){const u=this;let c=0,f=0,h;return d;function d(B){let ee=u.events.length-1;for(;ee>-1;){const ie=u.events[ee][1].type;if(ie==="lineEnding"||ie==="linePrefix")ee--;else break}const P=ee>-1?u.events[ee][1].type:null,ve=P==="tableHead"||P==="tableRow"?H:m;return ve===H&&u.parser.lazy[u.now().line]?i(B):ve(B)}function m(B){return l.enter("tableHead"),l.enter("tableRow"),p(B)}function p(B){return B===124||(h=!0,f+=1),x(B)}function x(B){return B===null?i(B):ce(B)?f>1?(f=0,u.interrupt=!0,l.exit("tableRow"),l.enter("lineEnding"),l.consume(B),l.exit("lineEnding"),S):i(B):Te(B)?je(l,x,"whitespace")(B):(f+=1,h&&(h=!1,c+=1),B===124?(l.enter("tableCellDivider"),l.consume(B),l.exit("tableCellDivider"),h=!0,x):(l.enter("data"),y(B)))}function y(B){return B===null||B===124||Xe(B)?(l.exit("data"),x(B)):(l.consume(B),B===92?k:y)}function k(B){return B===92||B===124?(l.consume(B),y):y(B)}function S(B){return u.interrupt=!1,u.parser.lazy[u.now().line]?i(B):(l.enter("tableDelimiterRow"),h=!1,Te(B)?je(l,A,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):A(B))}function A(B){return B===45||B===58?L(B):B===124?(h=!0,l.enter("tableCellDivider"),l.consume(B),l.exit("tableCellDivider"),M):ne(B)}function M(B){return Te(B)?je(l,L,"whitespace")(B):L(B)}function L(B){return B===58?(f+=1,h=!0,l.enter("tableDelimiterMarker"),l.consume(B),l.exit("tableDelimiterMarker"),D):B===45?(f+=1,D(B)):B===null||ce(B)?re(B):ne(B)}function D(B){return B===45?(l.enter("tableDelimiterFiller"),I(B)):ne(B)}function I(B){return B===45?(l.consume(B),I):B===58?(h=!0,l.exit("tableDelimiterFiller"),l.enter("tableDelimiterMarker"),l.consume(B),l.exit("tableDelimiterMarker"),Y):(l.exit("tableDelimiterFiller"),Y(B))}function Y(B){return Te(B)?je(l,re,"whitespace")(B):re(B)}function re(B){return B===124?A(B):B===null||ce(B)?!h||c!==f?ne(B):(l.exit("tableDelimiterRow"),l.exit("tableHead"),r(B)):ne(B)}function ne(B){return i(B)}function H(B){return l.enter("tableRow"),J(B)}function J(B){return B===124?(l.enter("tableCellDivider"),l.consume(B),l.exit("tableCellDivider"),J):B===null||ce(B)?(l.exit("tableRow"),r(B)):Te(B)?je(l,J,"whitespace")(B):(l.enter("data"),fe(B))}function fe(B){return B===null||B===124||Xe(B)?(l.exit("data"),J(B)):(l.consume(B),B===92?pe:fe)}function pe(B){return B===92||B===124?(l.consume(B),fe):fe(B)}}function D4(l,r){let i=-1,u=!0,c=0,f=[0,0,0,0],h=[0,0,0,0],d=!1,m=0,p,x,y;const k=new C4;for(;++i<l.length;){const S=l[i],A=S[1];S[0]==="enter"?A.type==="tableHead"?(d=!1,m!==0&&(wm(k,r,m,p,x),x=void 0,m=0),p={type:"table",start:Object.assign({},A.start),end:Object.assign({},A.end)},k.add(i,0,[["enter",p,r]])):A.type==="tableRow"||A.type==="tableDelimiterRow"?(u=!0,y=void 0,f=[0,0,0,0],h=[0,i+1,0,0],d&&(d=!1,x={type:"tableBody",start:Object.assign({},A.start),end:Object.assign({},A.end)},k.add(i,0,[["enter",x,r]])),c=A.type==="tableDelimiterRow"?2:x?3:1):c&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")?(u=!1,h[2]===0&&(f[1]!==0&&(h[0]=h[1],y=Wr(k,r,f,c,void 0,y),f=[0,0,0,0]),h[2]=i)):A.type==="tableCellDivider"&&(u?u=!1:(f[1]!==0&&(h[0]=h[1],y=Wr(k,r,f,c,void 0,y)),f=h,h=[f[1],i,0,0])):A.type==="tableHead"?(d=!0,m=i):A.type==="tableRow"||A.type==="tableDelimiterRow"?(m=i,f[1]!==0?(h[0]=h[1],y=Wr(k,r,f,c,i,y)):h[1]!==0&&(y=Wr(k,r,h,c,i,y)),c=0):c&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")&&(h[3]=i)}for(m!==0&&wm(k,r,m,p,x),k.consume(r.events),i=-1;++i<r.events.length;){const S=r.events[i];S[0]==="enter"&&S[1].type==="table"&&(S[1]._align=A4(r.events,i))}return l}function Wr(l,r,i,u,c,f){const h=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",d="tableContent";i[0]!==0&&(f.end=Object.assign({},xa(r.events,i[0])),l.add(i[0],0,[["exit",f,r]]));const m=xa(r.events,i[1]);if(f={type:h,start:Object.assign({},m),end:Object.assign({},m)},l.add(i[1],0,[["enter",f,r]]),i[2]!==0){const p=xa(r.events,i[2]),x=xa(r.events,i[3]),y={type:d,start:Object.assign({},p),end:Object.assign({},x)};if(l.add(i[2],0,[["enter",y,r]]),u!==2){const k=r.events[i[2]],S=r.events[i[3]];if(k[1].end=Object.assign({},S[1].end),k[1].type="chunkText",k[1].contentType="text",i[3]>i[2]+1){const A=i[2]+1,M=i[3]-i[2]-1;l.add(A,M,[])}}l.add(i[3]+1,0,[["exit",y,r]])}return c!==void 0&&(f.end=Object.assign({},xa(r.events,c)),l.add(c,0,[["exit",f,r]]),f=void 0),f}function wm(l,r,i,u,c){const f=[],h=xa(r.events,i);c&&(c.end=Object.assign({},h),f.push(["exit",c,r])),u.end=Object.assign({},h),f.push(["exit",u,r]),l.add(i+1,0,f)}function xa(l,r){const i=l[r],u=i[0]==="enter"?"start":"end";return i[1][u]}const N4={name:"tasklistCheck",tokenize:O4};function _4(){return{text:{91:N4}}}function O4(l,r,i){const u=this;return c;function c(m){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?i(m):(l.enter("taskListCheck"),l.enter("taskListCheckMarker"),l.consume(m),l.exit("taskListCheckMarker"),f)}function f(m){return Xe(m)?(l.enter("taskListCheckValueUnchecked"),l.consume(m),l.exit("taskListCheckValueUnchecked"),h):m===88||m===120?(l.enter("taskListCheckValueChecked"),l.consume(m),l.exit("taskListCheckValueChecked"),h):i(m)}function h(m){return m===93?(l.enter("taskListCheckMarker"),l.consume(m),l.exit("taskListCheckMarker"),l.exit("taskListCheck"),d):i(m)}function d(m){return ce(m)?r(m):Te(m)?l.check({tokenize:R4},r,i)(m):i(m)}}function R4(l,r,i){return je(l,u,"whitespace");function u(c){return c===null?i(c):r(c)}}function L4(l){return Vm([u4(),y4(),T4(l),j4(),_4()])}const B4={};function U4(l){const r=this,i=l||B4,u=r.data(),c=u.micromarkExtensions||(u.micromarkExtensions=[]),f=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),h=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);c.push(L4(i)),f.push(l4()),h.push(a4(i))}const Tm="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",H4="https://openrouter.ai/api/v1/chat/completions",q4="meta-llama/llama-3.3-8b-instruct:free",Y4="openrouter/auto",G4=`You are a helpful assistant on Nguyen Huy Truong's portfolio website.
Answer questions about Truong clearly and concisely. Be friendly and professional.
If asked something you don't know about Truong, politely say you don't have that information.
Do not invent facts. Only answer based on the information below.

--- ABOUT ---
Full name: Nguyen Huy Truong
GitHub: FCBTruong
Location: Ha Noi, Viet Nam
Role: Game Developer / Software Engineer
Bio: Works on online multiplayer games and is also an active player.
     That player perspective shapes how he thinks about gameplay and overall experience.
     Looking to work with a passionate team to create meaningful experiences for players worldwide.

--- EDUCATION ---
- Bachelor in Software Engineering
  University of Engineering and Technology (VNU), Ha Noi, Viet Nam
  Aug 2018 – Dec 2023

--- CERTIFICATES ---
- IELTS 7.5 (British Council, 2025)

--- AWARDS ---
- Third Prize Chess Province, Nghe An, Viet Nam (2018)

--- CAREER ---
1. Intern — Onesoft - Monster Studio (May 2020 – Aug 2020), Ha Noi
   - Puzzle game development with Unity
2. Intern — Early Start - Monkey Junior (Aug 2020 – Nov 2020), Ha Noi
   - Unity game development, performance optimization, full cycle delivery
3. Software Engineer — VNG - ZingPlay Studios (Nov 2020 – Sep 2024), Ha Noi
   - Online multiplayer games (large-scale live titles)
   - Metagame features: events, shop, payment flows
   - Integrated Firebase, CDN, SDKs, log tracking
   - Reduced recurring client crashes by 25%
4. Backend Developer III — Vietnam Digital Technology (Oct 2024 – Oct 2025), Ha Noi
   - Scalable backend and data platforms (FastAPI, PostgreSQL, Docker, Kubernetes)
   - Large-scale ETL workflows and Airflow-based data pipelines
   - CI/CD, automation, production workflow optimization
   - Mentored engineers, led backend/platform development
5. Self Development (Nov 2025 – Present)
   - Personal game projects (end-to-end architecture)
   - UE5 proficiency improvement
   - AI tools research and workflow automation
   - English communication improvement

--- PROJECTS ---
- Pixel AI (2026, Under Development)
  Research pixel game prototype: AI world generation, zombie-defense gameplay
  Tech: C++, SDL 3, Codex
  GitHub: https://github.com/FCBTruong/love-deaths-ai

- FPS Zombie Online (2025)
  Multiplayer FPS with Spike, Zombie, and Deathmatch modes
  Tech: Unreal Engine 5, C++, .NET
  GitHub: https://github.com/FCBTruong/fps-zombie-multiplayer
  Download: https://github.com/FCBTruong/fps-zombie-multiplayer/releases
  YouTube: https://youtu.be/O9IfP6dzKvo

- Tressette Royal Online (2024)
  Online turn-based multiplayer card game
  Tech: Godot, Python, C++
  Play online: https://tressette.clareentertainment.com/
  GitHub: https://github.com/FCBTruong/tressette/
  YouTube: https://youtu.be/zKZ15l_08L4

- Thoi Loan Online (2021)
  Clash of Clans-style game remake (fresher training project at VNG)
  Tech: Cocos
  YouTube: https://youtu.be/kkiejixeQr0

- Tower Defense (2019)
  Strategic tower defense game
  Tech: Java, LibGDX
  GitHub: https://github.com/FCBTruong/tower_defense_game

- 2048 Puzzle (2019)
  Classic 2048 tile merging game
  Tech: C++, SDL
  GitHub: https://github.com/FCBTruong/game-2048-cpp

- Sleepy Bat (2020)
  3D bat flying game
  GitHub: https://github.com/FCBTruong/FlyBat3D

--- SKILLS ---
Game: Unreal Engine 5, Godot, Unity, Cocos, SDL, C++, Java/LibGDX
Backend: Python, FastAPI, PostgreSQL, Docker, Kubernetes, Airflow
Web: React, TypeScript, Vite
Other: CI/CD, Git, Firebase, Distributed systems`;function V4(){const[l,r]=Ne.useState(!1),[i,u]=Ne.useState(!1),[c,f]=Ne.useState(!1),[h,d]=Ne.useState([]),[m,p]=Ne.useState(""),[x,y]=Ne.useState(!1),k=Ne.useRef(null),S=Ne.useRef(null);Ne.useEffect(()=>{l&&setTimeout(()=>{k.current?.scrollIntoView({behavior:"smooth"}),S.current?.focus()},50)},[h,l]),Ne.useEffect(()=>{const M=window.setTimeout(()=>{f(!0)},5e3);return()=>{window.clearTimeout(M)}},[]);const A=async()=>{const M=m.trim();if(!M||x)return;const L=[...h,{role:"user",text:M}];d(L),p(""),y(!0);try{const D=[{role:"system",content:G4},...L.map(ne=>({role:ne.role==="model"?"assistant":"user",content:ne.text}))],I=async ne=>{const H=await fetch(H4,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Tm}`},body:JSON.stringify({model:ne,messages:D})}),J=await H.json(),fe=H.ok&&!J?.error,pe=J?.error?.message??`HTTP ${H.status}`;return{ok:fe,data:J,errorMessage:pe}};let Y=await I(q4);if(!Y.ok&&/No endpoints found/i.test(Y.errorMessage)&&(Y=await I(Y4)),!Y.ok){d(ne=>[...ne,{role:"model",text:`API error: ${Y.errorMessage}`}]);return}const re=Y.data?.choices?.[0]?.message?.content??"Sorry, I couldn't get a response right now.";d(ne=>[...ne,{role:"model",text:re}])}catch(D){d(I=>[...I,{role:"model",text:`Connection error: ${D instanceof Error?D.message:String(D)}`}])}finally{y(!1)}};return b.jsxs(b.Fragment,{children:[l?b.jsxs("div",{className:`chatbotWindow${i?" isFullscreen":""}`,children:[b.jsxs("div",{className:"chatbotHeader",children:[b.jsx("span",{className:"chatbotTitle",children:"Miko • AI assistant"}),b.jsxs("div",{className:"chatbotHeaderActions",children:[b.jsx("button",{className:"chatbotControl",onClick:()=>u(M=>!M),"aria-label":i?"Exit full screen":"Open full screen",title:i?"Exit full screen":"Open full screen",children:i?b.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("polyline",{points:"9 3 3 3 3 9"}),b.jsx("line",{x1:"3",y1:"3",x2:"10",y2:"10"}),b.jsx("polyline",{points:"15 21 21 21 21 15"}),b.jsx("line",{x1:"14",y1:"14",x2:"21",y2:"21"})]}):b.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("polyline",{points:"15 3 21 3 21 9"}),b.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),b.jsx("polyline",{points:"9 21 3 21 3 15"}),b.jsx("line",{x1:"10",y1:"14",x2:"3",y2:"21"})]})}),b.jsx("button",{className:"chatbotClose",onClick:()=>{r(!1),u(!1)},"aria-label":"Close chat",title:"Close",children:b.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[b.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),b.jsxs("div",{className:"chatbotMessages",children:[h.length===0?b.jsx("p",{className:"chatbotEmpty",children:"Ask me anything about Truong — projects, skills, career..."}):null,h.map((M,L)=>b.jsx("div",{className:`chatbotMsg chatbotMsg--${M.role}`,children:M.role==="model"?b.jsx(T2,{remarkPlugins:[U4],components:{a:({...D})=>b.jsx("a",{...D,target:"_blank",rel:"noreferrer"})},children:M.text}):b.jsx("p",{children:M.text})},L)),x?b.jsx("div",{className:"chatbotMsg chatbotMsg--model",children:b.jsxs("span",{className:"chatbotTyping",children:[b.jsx("span",{}),b.jsx("span",{}),b.jsx("span",{})]})}):null,b.jsx("div",{ref:k})]}),b.jsxs("div",{className:"chatbotInputRow",children:[b.jsx("input",{ref:S,className:"chatbotInput",value:m,onChange:M=>p(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),A())},placeholder:"Ask a question...",disabled:x,autoComplete:"off"}),b.jsx("button",{className:"chatbotSend",onClick:A,disabled:x||!m.trim(),"aria-label":"Send",children:b.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[b.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),b.jsx("polyline",{points:"5 12 12 5 19 12"})]})})]})]}):null,!l&&c?b.jsxs("div",{className:"chatbotTooltip",role:"status","aria-live":"polite",children:[b.jsx("div",{className:"chatbotTooltipTitle",children:"Hi, I am Miko"}),b.jsx("p",{children:"AI assistant for Truong, ask me anything..."}),b.jsx("button",{type:"button",className:"chatbotTooltipClose","aria-label":"Dismiss intro",onClick:()=>f(!1),children:b.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[b.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}):null,b.jsx("button",{className:`chatbotFab${l?" chatbotFab--open":""}`,onClick:()=>{f(!1),r(M=>!M),l&&u(!1)},"aria-label":l?"Close chat":"Chat with AI",children:l?b.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[b.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):b.jsx("span",{className:"chatbotMascot","aria-hidden":"true",children:b.jsxs("svg",{className:"chatbotMascotBody",viewBox:"0 0 72 72",fill:"none",children:[b.jsxs("defs",{children:[b.jsxs("linearGradient",{id:"mikoHead",x1:"18",y1:"14",x2:"54",y2:"58",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{offset:"0",stopColor:"#7be9ff"}),b.jsx("stop",{offset:"1",stopColor:"#1f90ff"})]}),b.jsxs("linearGradient",{id:"mikoVisor",x1:"22",y1:"28",x2:"50",y2:"40",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{offset:"0",stopColor:"#0f2b5f"}),b.jsx("stop",{offset:"1",stopColor:"#163a7a"})]})]}),b.jsx("line",{x1:"36",y1:"8",x2:"36",y2:"14",stroke:"#9feeff",strokeWidth:"3",strokeLinecap:"round"}),b.jsx("circle",{cx:"36",cy:"7",r:"3",fill:"#b6f4ff"}),b.jsx("rect",{x:"17",y:"14",width:"38",height:"40",rx:"14",fill:"url(#mikoHead)"}),b.jsx("rect",{x:"22",y:"27",width:"28",height:"14",rx:"7",fill:"url(#mikoVisor)"}),b.jsx("circle",{cx:"30",cy:"34",r:"3.2",fill:"#8ef3ff"}),b.jsx("circle",{cx:"42",cy:"34",r:"3.2",fill:"#8ef3ff"}),b.jsx("rect",{x:"30",y:"44",width:"12",height:"3",rx:"1.5",fill:"#e3fbff",fillOpacity:"0.92"}),b.jsx("rect",{x:"11",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"}),b.jsx("rect",{x:"54",y:"28",width:"7",height:"12",rx:"3.5",fill:"#62d7ff"})]})})})]})}function Cm(){const l=window.location.hash||"#/";return l.startsWith("#/cv")?"cv":l.startsWith("#/career")?"career":"home"}function X4(){const[l,r]=Ne.useState(Cm());return Ne.useEffect(()=>{const i=()=>r(Cm());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),l}function _g(l){window.location.hash!==l&&(window.location.hash=l)}function Q4(){return b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:b.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function Z4(){return b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:b.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function zm(){return b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:b.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function I4(){return b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:b.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function F4(){return b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:b.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function Og(){return b.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:[b.jsx("path",{d:"M3 21h18"}),b.jsx("path",{d:"M5 21V7.5A1.5 1.5 0 0 1 6.5 6H10v15"}),b.jsx("path",{d:"M10 21V4.5A1.5 1.5 0 0 1 11.5 3h6A1.5 1.5 0 0 1 19 4.5V21"}),b.jsx("path",{d:"M7.5 9.5h.01M7.5 12.5h.01M7.5 15.5h.01M13.5 6.5h.01M16.5 6.5h.01M13.5 9.5h.01M16.5 9.5h.01M13.5 12.5h.01M16.5 12.5h.01"})]})}function Rg(){return b.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[b.jsx("path",{d:"m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"}),b.jsx("path",{d:"M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"})]})}function Lg(){return b.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[b.jsx("path",{d:"m3 8.5 9-4.5 9 4.5-9 4.5-9-4.5Z"}),b.jsx("path",{d:"M6.5 10.8V15c0 1.5 2.4 3 5.5 3s5.5-1.5 5.5-3v-4.2"})]})}function Bg(){return b.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[b.jsx("path",{d:"M8 3h8l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"}),b.jsx("path",{d:"M16 3v5h5"}),b.jsx("path",{d:"M9.5 14h5"}),b.jsx("path",{d:"M9.5 17h4"})]})}function Ug(){return b.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[b.jsx("path",{d:"M8 4h8v3a4 4 0 0 1-8 0V4Z"}),b.jsx("path",{d:"M10 15h4"}),b.jsx("path",{d:"M12 11v4"}),b.jsx("path",{d:"M8 19h8"}),b.jsx("path",{d:"M16 6h2a2 2 0 0 1 0 4h-2"}),b.jsx("path",{d:"M8 6H6a2 2 0 0 0 0 4h2"})]})}function K4(){return b.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:[b.jsx("circle",{cx:"12",cy:"12",r:"1.6",fill:"currentColor",stroke:"none"}),b.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2"}),b.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(60 12 12)"}),b.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(120 12 12)"})]})}function J4(){return b.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[b.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),b.jsx("path",{d:"M9.2 9h6.1v1.8h-2.1V17h-1.9v-6.2H9.2V9Zm9.8.2v1.8c-.7-.4-1.3-.5-1.8-.5-.4 0-.8.1-1 .2-.2.1-.3.3-.3.5 0 .1.1.3.2.4.1.1.4.2.8.3l.6.1c.9.2 1.6.5 2 .9.4.4.6.9.6 1.6 0 .9-.3 1.6-1 2.1-.7.5-1.6.7-2.8.7-.5 0-1 0-1.5-.1-.5-.1-1-.2-1.6-.4v-1.9c.6.3 1.1.5 1.6.7.5.1 1 .2 1.5.2.5 0 .9-.1 1.1-.2.3-.1.4-.3.4-.6 0-.2-.1-.3-.2-.5-.1-.1-.4-.2-.9-.3l-.5-.1c-.8-.2-1.4-.5-1.8-.8-.4-.4-.6-.9-.6-1.6 0-.8.3-1.5.9-1.9.6-.5 1.5-.7 2.6-.7.4 0 .8 0 1.3.1.4.1.9.2 1.4.3Z",fill:"#fff"})]})}function $4(){return b.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[b.jsx("path",{d:"M22 5 13.2 20.5a1.4 1.4 0 0 1-2.4 0L2 5.1a.8.8 0 0 1 .9-1.2l8.9 1.6c.1 0 .3 0 .4 0l8.9-1.6A.8.8 0 0 1 22 5Z",fill:"url(#vite-grad-a)"}),b.jsx("path",{d:"m16.6 2.2-4.8.9a.4.4 0 0 0-.3.3l-.3 2.5c0 .2.1.4.3.4l1.3.2c.2 0 .3.2.3.4l-.8 5.6c0 .4.5.6.8.3l.2-.3 4.3-8.7c.2-.3-.1-.7-.5-.6Z",fill:"url(#vite-grad-b)"}),b.jsxs("defs",{children:[b.jsxs("linearGradient",{id:"vite-grad-a",x1:"2",y1:"4",x2:"18",y2:"20",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{stopColor:"#41D1FF"}),b.jsx("stop",{offset:"1",stopColor:"#BD34FE"})]}),b.jsxs("linearGradient",{id:"vite-grad-b",x1:"11",y1:"2",x2:"16",y2:"13",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{stopColor:"#FFEA83"}),b.jsx("stop",{offset:".5",stopColor:"#FFDD35"}),b.jsx("stop",{offset:"1",stopColor:"#FFA800"})]})]})]})}function zc(){return b.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[b.jsx("span",{className:"sceneSkyTint"}),b.jsx("span",{className:"sceneSun"}),b.jsx("span",{className:"sceneRidge ridgeFar"}),b.jsx("span",{className:"sceneRidge ridgeNear"}),b.jsx("span",{className:"scenePine pine1"}),b.jsx("span",{className:"scenePine pine2"}),b.jsx("span",{className:"scenePine pine3"}),b.jsx("span",{className:"sceneCloud cloudA"}),b.jsx("span",{className:"sceneCloud cloudB"}),b.jsx("span",{className:"sceneDust dust1"}),b.jsx("span",{className:"sceneDust dust2"}),b.jsx("span",{className:"sceneDust dust3"}),b.jsx("span",{className:"sceneDust dust4"}),b.jsx("span",{className:"sceneDust dust5"}),b.jsx("span",{className:"sceneLeaf leaf1"}),b.jsx("span",{className:"sceneLeaf leaf2"}),b.jsx("span",{className:"sceneLeaf leaf3"}),b.jsx("span",{className:"sceneLeaf leaf4"}),b.jsx("span",{className:"sceneLeaf leaf5"}),b.jsx("span",{className:"sceneLeaf leaf6"}),b.jsx("span",{className:"sceneWind wind1"}),b.jsx("span",{className:"sceneWind wind2"}),b.jsx("span",{className:"sceneWind wind3"})]})}function Ac({theme:l,onToggle:r}){const i=l==="dark";return b.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:r,"aria-label":i?"Switch to light theme":"Switch to dark theme",title:i?"Light mode":"Dark mode",children:i?b.jsx(I4,{}):b.jsx(F4,{})})}const W4="/my-portfolio/",Ks=l=>`${W4}${l.replace(/^\/+/,"")}`,Hg=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Onesoft - Monster Studio",location:"Ha Noi, Viet Nam",logo:Ks("/company/onesoft.png"),summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Monkey Junior",location:"Ha Noi, Viet Nam",logo:Ks("/company/monkeyjunior.png"),summary:"Continued game development experience with Unity, focusing on gameplay systems, performance, and user experience.",highlights:["Developed puzzle game features and gameplay mechanics using Unity.","Optimized game performance, responsiveness, and user experience.","Participated in the full development cycle from feature design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",location:"Ha Noi, Viet Nam",logo:Ks("/company/vng.png"),summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay, UI, and online systems for large-scale titles.","Developed metagame features, including events, shop flows, and payment-related features.","Collaborated with artists, designers, PMs, and engineers to brainstorm, develop, and deliver game features.","Integrated third-party services such as Firebase, CDN, SDKs, and log tracking tools.","Debugged production issues, fixed bugs, refactored code, and built tools to support live game operations.","Analyzed player behavior to improve gameplay, UI, and overall player experience.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"VIET NAM DIGITAL TECHNOLOGY AND INVESTMENT JOINT STOCK COMPANY",location:"Ha Noi, Viet Nam",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Built scalable backend and data platforms providing shared services for multiple teams.","Designed and operated reliable distributed systems with FastAPI, PostgreSQL, Docker, and Kubernetes.","Developed large-scale ETL workflows and Airflow-based data pipelines.","Improved delivery efficiency through CI/CD, automation, and production workflow optimization.","Mentored engineers and led backend/platform development from design to production."]},{period:"Nov 2025 - Present",title:"Self Development",org:"Independent Learning & Project Building",location:"Ha Noi, Viet Nam",summary:"Focused on personal growth through building projects, deepening Unreal Engine 5 skills, improving English communication, and sharpening system thinking.",highlights:["Built personal game projects to practice end-to-end architecture and execution.","Improved Unreal Engine 5 proficiency through regular prototyping and technical experimentation.","Researched AI tools and applied them to optimize workflows and automate repetitive tasks.","Improved English communication for technical discussions and documentation.","Strengthened system thinking by designing scalable gameplay and backend flows."]}],qg=[{school:"University of Engineering and Technology (VNU)",degree:"Bachelor",area:"Software Engineering",period:"Aug 2018 - Dec 2023",location:"Ha Noi, Viet Nam"}],Yg=[{title:"IELTS 7.5",issuer:"British Council",date:"2025"}],Gg=[{title:"Third Prize Chess Province",location:"Nghe An, Viet Nam",date:"2018"}];function P4({theme:l,onToggleTheme:r}){const i=[...Hg].reverse(),u=Ne.useRef(null);Ne.useEffect(()=>{const f=u.current;if(!f)return;const h=f.querySelectorAll(".careerItem"),d=new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting&&(p.target.classList.add("careerItemVisible"),d.unobserve(p.target))})},{threshold:.12});return h.forEach(m=>d.observe(m)),()=>d.disconnect()},[]);const c=f=>f.logo?b.jsx("img",{src:f.logo,alt:f.org,className:"careerLogo"}):f.title==="Self Development"?b.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:b.jsx(Rg,{})}):b.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:b.jsx(Og,{})});return b.jsxs("div",{className:"careerPage",children:[b.jsxs("header",{className:"topbar",children:[b.jsx(zc,{}),b.jsxs("div",{className:"container topbarInner",children:[b.jsx("button",{className:"btn",onClick:()=>_g("#/"),type:"button",children:"← Back"}),b.jsx("div",{className:"brand",children:b.jsx("span",{children:"Career"})}),b.jsx("div",{className:"rightActions",children:b.jsx(Ac,{theme:l,onToggle:r})})]})]}),b.jsxs("main",{className:"container careerMain",children:[b.jsxs("section",{className:"careerIntro",children:[b.jsx("h1",{className:"h3 careerTitle",children:"Career Journey"}),b.jsx("p",{className:"summary careerSummary",children:"A bottom-to-top flow of my path: where I started, how long I worked in each phase, and what I built along the way."})]}),b.jsxs("section",{className:"careerTimeline",ref:u,"aria-label":"Career timeline",children:[b.jsx("span",{className:"careerFlowLabel top",children:"Now"}),b.jsx("span",{className:"careerFlowLabel bottom",children:"Start"}),b.jsx("span",{className:"careerLine","aria-hidden":"true"}),i.map((f,h)=>b.jsxs("div",{className:"careerItem",style:{"--delay":`${h*100}ms`},children:[b.jsxs("div",{className:"careerDateWrap",children:[b.jsx("div",{className:"careerDate",children:f.period}),b.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),b.jsxs("article",{className:"careerCard",children:[c(f),b.jsx("h2",{className:"h3 careerRole",children:f.title}),b.jsx("p",{className:"careerOrg",children:f.org}),f.location?b.jsx("p",{className:"careerLocation",children:f.location}):null,b.jsx("p",{className:"careerCardSummary",children:f.summary}),b.jsx("ul",{className:"careerHighlights",children:f.highlights.map(d=>b.jsx("li",{children:d},d))})]})]},f.period))]}),b.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[b.jsxs("article",{className:"careerExtraCard",children:[b.jsxs("h3",{className:"h3 careerExtraTitle",children:[b.jsx(Lg,{}),"Education"]}),b.jsx("ul",{className:"careerExtraList",children:qg.map(f=>b.jsxs("li",{className:"careerExtraItem",children:[b.jsxs("div",{className:"careerExtraHead",children:[b.jsxs("p",{className:"careerExtraMain",children:[f.degree,f.area?` in ${f.area}`:""]}),b.jsx("span",{className:"careerExtraDate",children:f.period})]}),b.jsx("p",{className:"careerExtraSub",children:f.school}),f.location?b.jsx("p",{className:"careerExtraMeta",children:f.location}):null]},`${f.school}-${f.period}`))})]}),b.jsxs("article",{className:"careerExtraCard",children:[b.jsxs("h3",{className:"h3 careerExtraTitle",children:[b.jsx(Bg,{}),"Certificates"]}),b.jsx("ul",{className:"careerExtraList",children:Yg.map(f=>b.jsxs("li",{className:"careerExtraItem",children:[b.jsxs("div",{className:"careerExtraHead",children:[b.jsx("p",{className:"careerExtraMain",children:f.title}),b.jsx("span",{className:"careerExtraDate",children:f.date})]}),b.jsx("p",{className:"careerExtraSub",children:f.issuer})]},`${f.title}-${f.date}`))})]}),b.jsxs("article",{className:"careerExtraCard",children:[b.jsxs("h3",{className:"h3 careerExtraTitle",children:[b.jsx(Ug,{}),"Awards"]}),b.jsx("ul",{className:"careerExtraList",children:Gg.map(f=>b.jsxs("li",{className:"careerExtraItem",children:[b.jsxs("div",{className:"careerExtraHead",children:[b.jsx("p",{className:"careerExtraMain",children:f.title}),b.jsx("span",{className:"careerExtraDate",children:f.date})]}),f.location?b.jsx("p",{className:"careerExtraMeta",children:f.location}):null]},`${f.title}-${f.date}`))})]})]})]})]})}const e3=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],Js=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function t3(l){const r=[...l];for(let i=r.length-1;i>0;i--){const u=Math.floor(Math.random()*(i+1));[r[i],r[u]]=[r[u],r[i]]}return r}function Am(l){const r=e3.slice(0,l);return t3([...r,...r].map((i,u)=>({id:u,symbol:i,isFlipped:!1,isMatched:!1})))}function n3(){const[l,r]=Ke.useState(0),i=Js[l],u=l===Js.length-1,[c,f]=Ke.useState(()=>Am(i.cols*i.rows/2)),[h,d]=Ke.useState([]),[m,p]=Ke.useState(0),[x,y]=Ke.useState(0),[k,S]=Ke.useState(!1),[A,M]=Ke.useState(!1),[L,D]=Ke.useState(!1),I=Ke.useRef(null),Y=Ke.useRef(null),re=Ke.useRef(0),ne=Ke.useRef(null),H=Ke.useCallback(()=>{if(typeof window>"u")return null;const j=window.AudioContext||window.webkitAudioContext;return j?(ne.current||(ne.current=new j),ne.current.state==="suspended"&&ne.current.resume(),ne.current):null},[]),J=Ke.useCallback((j,Z,te,me,w=0)=>{const T=H();if(!T)return;const q=T.createOscillator(),E=T.createGain(),K=T.currentTime+w;q.type=te,q.frequency.setValueAtTime(j,K),E.gain.setValueAtTime(1e-4,K),E.gain.exponentialRampToValueAtTime(me,K+.02),E.gain.exponentialRampToValueAtTime(1e-4,K+Z),q.connect(E),E.connect(T.destination),q.start(K),q.stop(K+Z+.02)},[H]),fe=Ke.useCallback(()=>{J(660,.12,"triangle",.05,0),J(880,.12,"triangle",.04,.08)},[J]),pe=Ke.useCallback(()=>{J(420,.05,"triangle",.018,0)},[J]),B=Ke.useCallback(()=>{J(523.25,.16,"sine",.06,0),J(659.25,.16,"sine",.06,.12),J(783.99,.22,"sine",.07,.24)},[J]);Ke.useEffect(()=>{k&&!A&&c.every(j=>j.isMatched)&&M(!0)},[c,k,A]),Ke.useEffect(()=>(k&&!A&&(I.current=setInterval(()=>y(j=>j+1),1e3)),()=>{I.current&&clearInterval(I.current)}),[k,A]),Ke.useEffect(()=>{A&&B()},[A,B]),Ke.useEffect(()=>{if(!A)return;const j=Y.current;if(!j)return;const Z=j.getContext("2d");if(!Z)return;j.width=j.offsetWidth,j.height=j.offsetHeight;const te=[],me=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],w=(K,le)=>{for(let oe=0;oe<52;oe++){const Se=Math.PI*2*oe/52,Ye=2+Math.random()*4.5;te.push({x:K,y:le,vx:Math.cos(Se)*Ye,vy:Math.sin(Se)*Ye,alpha:1,color:me[Math.floor(Math.random()*me.length)],r:2+Math.random()*2})}};let T=0;const q=setInterval(()=>{w(j.width*(.15+Math.random()*.7),j.height*(.1+Math.random()*.55)),++T>=7&&clearInterval(q)},320),E=()=>{Z.clearRect(0,0,j.width,j.height);for(let K=te.length-1;K>=0;K--){const le=te[K];if(le.x+=le.vx,le.y+=le.vy,le.vy+=.09,le.alpha-=.016,le.alpha<=0){te.splice(K,1);continue}Z.globalAlpha=le.alpha,Z.fillStyle=le.color,Z.beginPath(),Z.arc(le.x,le.y,le.r,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,re.current=requestAnimationFrame(E)};return E(),()=>{clearInterval(q),cancelAnimationFrame(re.current)}},[A]);const ee=Ke.useCallback(j=>{I.current&&clearInterval(I.current);const Z=Js[j];r(j),f(Am(Z.cols*Z.rows/2)),d([]),p(0),y(0),S(!1),M(!1),D(!1)},[]),P=Ke.useCallback(j=>{const Z=c.find(w=>w.id===j);if(!Z||Z.isFlipped||Z.isMatched||L)return;if(k||S(!0),pe(),f(w=>w.map(T=>T.id===j?{...T,isFlipped:!0}:T)),h.length===0){d([j]);return}const te=h[0],me=c.find(w=>w.id===te);d([]),p(w=>w+1),me.symbol===Z.symbol?(fe(),f(w=>w.map(T=>T.id===te||T.id===j?{...T,isFlipped:!0,isMatched:!0}:T))):(D(!0),setTimeout(()=>{f(w=>w.map(T=>T.id===te||T.id===j?{...T,isFlipped:!1}:T)),D(!1)},900))},[c,h,L,k,pe,fe]),ve=j=>`${String(Math.floor(j/60)).padStart(2,"0")}:${String(j%60).padStart(2,"0")}`,ie=()=>b.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[b.jsx("path",{d:"M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z",fill:"currentColor"}),b.jsx("circle",{cx:"8",cy:"7",r:"1.6",fill:"currentColor"}),b.jsx("circle",{cx:"11.2",cy:"5.8",r:"1.5",fill:"currentColor"}),b.jsx("circle",{cx:"14.8",cy:"5.8",r:"1.5",fill:"currentColor"}),b.jsx("circle",{cx:"18",cy:"7",r:"1.6",fill:"currentColor"})]}),$=()=>b.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[b.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),b.jsx("path",{d:"M12 7.8v4.8l3.2 1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]});return b.jsxs("div",{className:"memoryGame",children:[b.jsxs("div",{className:"memoryGameHeader",children:[b.jsxs("span",{className:"memoryGameLevel",children:["Lv ",l+1," · ",i.n,"×",i.n]}),b.jsxs("span",{className:"memoryGameStat",children:[b.jsx(ie,{})," ",b.jsx("strong",{children:m})]}),b.jsxs("span",{className:"memoryGameStat",children:[b.jsx($,{})," ",b.jsx("strong",{children:ve(x)})]})]}),b.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${i.cols}, ${i.cell}px)`,gridTemplateRows:`repeat(${i.rows}, ${i.cell}px)`},children:c.map(j=>b.jsx("button",{className:`memoryCard${j.isFlipped||j.isMatched?" flipped":""}${j.isMatched?" matched":""}`,onClick:()=>P(j.id),style:{width:i.cell,height:i.cell},"aria-label":j.isFlipped||j.isMatched?j.symbol:"Hidden card",children:b.jsxs("span",{className:"memoryCardInner",children:[b.jsx("span",{className:"memoryCardBack"}),b.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(i.cell*.44)},children:j.symbol})]})},j.id))}),A&&b.jsxs("div",{className:"memoryGameModal",children:[b.jsx("canvas",{ref:Y,className:"memoryGameFireworks"}),b.jsxs("div",{className:"memoryGameModalBox",children:[b.jsx("div",{className:"memoryGameModalEmoji",children:u?"🏆":"🎉"}),b.jsx("div",{className:"memoryGameModalTitle",children:u?"You beat all levels!":`Level ${l+1} clear!`}),b.jsxs("div",{className:"memoryGameModalSub",children:[m," moves · ",ve(x)]}),!u&&b.jsx("button",{className:"memoryGameModalBtn",onClick:()=>ee(l+1),children:"Next Level →"}),b.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>ee(0),children:u?"Play Again":"Restart from Lv 1"})]})]})]})}function l3({theme:l,onToggleTheme:r}){return b.jsxs("div",{className:"cvPage",children:[b.jsxs("header",{className:"topbar",children:[b.jsx(zc,{}),b.jsxs("div",{className:"container topbarInner",children:[b.jsx("button",{className:"btn",onClick:()=>_g("#/"),type:"button",children:"← Back"}),b.jsx("div",{className:"brand",children:b.jsx("span",{children:"Résumé"})}),b.jsxs("div",{className:"rightActions",children:[b.jsx(Ac,{theme:l,onToggle:r}),b.jsx("a",{className:"btn primary",href:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf",target:"_blank",rel:"noreferrer",children:"Open in new tab"})]})]})]}),b.jsx("main",{className:"container cvMain",children:b.jsx("iframe",{src:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf#toolbar=0",title:"Resume PDF",className:"cvIframe",loading:"lazy"})})]})}const a3="/my-portfolio/",ut=l=>`${a3}${l.replace(/^\/+/,"")}`,i3=[{id:"p0",title:"Pixel AI",year:2026,role:"",statusLabel:"Under Development",description:"A research-driven pixel game prototype focused on applying AI to generate world elements, shape map-building workflows, and explore zombie-defense gameplay ideas.",tech:["SDL 3","C++","Codex"],previewMp4:ut("/videos/pixelai.mp4"),previewGif:"",youtubeUrl:"",githubUrl:"https://github.com/FCBTruong/love-deaths-ai",downloadUrl:"",screenshots:[ut("/screenshots/pixelai/1.jpg"),ut("/screenshots/pixelai/2.jpg"),ut("/screenshots/pixelai/3.jpg")]},{id:"p1",title:"FPS Zombie Online",year:2025,role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:ut("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[ut("/screenshots/fps/1.jpg"),ut("/screenshots/fps/2.jpg"),ut("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",year:2024,role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:ut("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[ut("/screenshots/tressette/1.jpg"),ut("/screenshots/tressette/2.jpg"),ut("/screenshots/tressette/3.jpg")]},{id:"p3",title:"Thoi Loan Online",year:2021,role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:ut("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[ut("/screenshots/thoiloan/1.jpg"),ut("/screenshots/thoiloan/2.jpg"),ut("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",year:2019,role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:ut("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",year:2019,role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["SDL","C++"],previewMp4:ut("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",year:2020,role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:ut("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}];function r3({src:l,alt:r,onClose:i}){return Ne.useEffect(()=>{const u=c=>{c.key==="Escape"&&i()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[i]),b.jsxs("div",{className:"lightboxOverlay",onClick:i,role:"dialog","aria-modal":"true",children:[b.jsx("img",{className:"lightboxImg",src:l,alt:r,onClick:u=>u.stopPropagation()}),b.jsx("button",{className:"lightboxClose",onClick:i,"aria-label":"Close",children:"×"})]})}function u3({title:l,previewMp4:r,previewGif:i,youtubeUrl:u}){return b.jsxs("div",{className:"previewCard",children:[r?b.jsx("video",{className:"previewMedia",src:r,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${l} preview video`}):i?b.jsx("img",{src:i,alt:`${l} preview`,className:"previewMedia",loading:"lazy"}):b.jsx("div",{className:"previewPlaceholder",children:"No preview"}),u?b.jsx("a",{className:"previewOverlayBtn",href:u,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${l}`,children:"Watch Full Demo"}):null]})}function o3({theme:l,onToggleTheme:r}){const[i,u]=Ne.useState(null),[c,f]=Ne.useState("about"),h=M=>{f(M)},d=Ne.useMemo(()=>"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world.",[]),[m,p]=Ne.useState(""),[x,y]=Ne.useState(!1);Ne.useEffect(()=>{let L=0,D;const I=()=>{if(y(!1),L+=1,p(d.slice(0,L)),L>=d.length){y(!1);return}const Y=d[L-1],re=Y==="."?360:Y===","?140:24;y(re>24),D=window.setTimeout(I,re)};return D=window.setTimeout(I,24),()=>{y(!1),D!==void 0&&window.clearTimeout(D)}},[d]),Ne.useEffect(()=>{c==="career"&&i&&u(null)},[c,i]);const k=Ne.useRef(null);Ne.useEffect(()=>{if(c!=="career")return;const M=k.current;if(!M)return;const L=M.querySelectorAll(".careerItem"),D=new IntersectionObserver(I=>{I.forEach(Y=>{Y.isIntersecting&&(Y.target.classList.add("careerItemVisible"),D.unobserve(Y.target))})},{threshold:.12});return L.forEach(I=>D.observe(I)),()=>D.disconnect()},[c]);const S=M=>b.jsx("div",{className:`projectList${M?" projectListReveal":""}`,children:i3.map(L=>b.jsxs("div",{className:`projectItem${M?" projectItemReveal":""}`,children:[b.jsx("div",{className:"projectMedia",children:b.jsx(u3,{title:L.title,previewMp4:L.previewMp4,previewGif:L.previewGif,youtubeUrl:L.youtubeUrl})}),b.jsxs("div",{className:"projectInfo",children:[b.jsxs("div",{className:"projectTitleRow",children:[b.jsx("h3",{className:"h3",children:L.title}),L.year?b.jsx("span",{className:"pill year",children:L.year}):null,L.statusLabel?b.jsx("span",{className:"pill progress",children:L.statusLabel}):null,L.role?b.jsx("span",{className:"pill",children:L.role}):null]}),b.jsx("p",{className:"projectDesc",children:L.description}),L.tech?.length?b.jsx("div",{className:"tech",children:L.tech.map(D=>b.jsx("span",{className:"tag",children:D},D))}):null,b.jsxs("div",{className:"projectActions",children:[L.githubUrl?b.jsxs("a",{className:"btn btnIcon",href:L.githubUrl,target:"_blank",rel:"noreferrer",children:[b.jsx(zm,{}),"GitHub"]}):null,L.downloadUrl?b.jsx("a",{className:"btn primary",href:L.downloadUrl,target:"_blank",rel:"noreferrer",children:"Download / Play"}):null]})]}),L.screenshots?.length?b.jsx("div",{className:"screenshots fill3",children:L.screenshots.slice(0,3).map((D,I)=>b.jsx("img",{src:D,alt:`${L.title} screenshot ${I+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>u({src:D,alt:`${L.title} screenshot ${I+1}`})},I))}):null]},L.id))},M?"projects-tab-animated":"projects-tab-static"),A=M=>M.logo?b.jsx("img",{src:M.logo,alt:M.org,className:"careerLogo"}):M.title==="Self Development"?b.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:b.jsx(Rg,{})}):b.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:b.jsx(Og,{})});return b.jsxs("div",{className:"page",children:[b.jsxs("header",{className:"topbar",children:[b.jsx(zc,{}),b.jsxs("div",{className:"container topbarInner",children:[b.jsx("a",{className:"brand",href:"#/",children:b.jsx("span",{children:"Portfolio"})}),b.jsxs("nav",{className:"nav",children:[b.jsxs("button",{type:"button",className:`navTabBtn${c==="about"?" active":""}`,onClick:()=>h("about"),children:["About Me",b.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),b.jsxs("button",{type:"button",className:`navTabBtn${c==="projects"?" active":""}`,onClick:()=>h("projects"),children:["Projects",b.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),b.jsxs("button",{type:"button",className:`navTabBtn${c==="career"?" active":""}`,onClick:()=>h("career"),children:["Career",b.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),b.jsx("a",{href:"./NGUYEN_HUY_TRUONG_GE_VNG.pdf",download:!0,className:"navLinkBtn",children:"Résumé"}),b.jsx(Ac,{theme:l,onToggle:r})]})]})]}),b.jsxs("main",{className:"container main",children:[c==="about"?b.jsxs("section",{className:"projects",id:"top",children:[b.jsxs("section",{className:"intro",style:{marginBottom:"20px"},children:[b.jsxs("h1",{className:"h3 heroTitle",children:["Hi, I'm ",b.jsx("span",{className:"accent",children:"Truong"})]}),b.jsxs("p",{className:"summary",children:[m,m.length<d.length?b.jsx("span",{className:`typingCursor${x?" paused":""}`,"aria-hidden":"true",children:"|"}):null]})]}),b.jsx(n3,{}),S(!1)]}):null,c==="projects"?b.jsx("section",{id:"projects",className:"projects",children:S(!0)}):null,c==="career"?b.jsxs("section",{className:"projects",children:[b.jsxs("div",{className:"careerTimeline",ref:k,"aria-label":"Career timeline",children:[b.jsx("span",{className:"careerFlowLabel top",children:"Now"}),b.jsx("span",{className:"careerFlowLabel bottom",children:"Start"}),b.jsx("span",{className:"careerLine","aria-hidden":"true"}),[...Hg].reverse().map((M,L)=>b.jsxs("div",{className:"careerItem",style:{"--delay":`${L*100}ms`},children:[b.jsxs("div",{className:"careerDateWrap",children:[b.jsx("div",{className:"careerDate",children:M.period}),b.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),b.jsxs("article",{className:"careerCard",children:[A(M),b.jsx("h3",{className:"h3 careerRole",children:M.title}),b.jsx("p",{className:"careerOrg",children:M.org}),M.location?b.jsx("p",{className:"careerLocation",children:M.location}):null,b.jsx("p",{className:"careerCardSummary",children:M.summary}),b.jsx("ul",{className:"careerHighlights",children:M.highlights.map(D=>b.jsx("li",{children:D},D))})]})]},M.period))]},"career-tab"),b.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[b.jsxs("article",{className:"careerExtraCard",children:[b.jsxs("h3",{className:"h3 careerExtraTitle",children:[b.jsx(Lg,{}),"Education"]}),b.jsx("ul",{className:"careerExtraList",children:qg.map(M=>b.jsxs("li",{className:"careerExtraItem",children:[b.jsxs("div",{className:"careerExtraHead",children:[b.jsxs("p",{className:"careerExtraMain",children:[M.degree,M.area?` in ${M.area}`:""]}),b.jsx("span",{className:"careerExtraDate",children:M.period})]}),b.jsx("p",{className:"careerExtraSub",children:M.school}),M.location?b.jsx("p",{className:"careerExtraMeta",children:M.location}):null]},`${M.school}-${M.period}`))})]}),b.jsxs("article",{className:"careerExtraCard",children:[b.jsxs("h3",{className:"h3 careerExtraTitle",children:[b.jsx(Bg,{}),"Certificates"]}),b.jsx("ul",{className:"careerExtraList",children:Yg.map(M=>b.jsxs("li",{className:"careerExtraItem",children:[b.jsxs("div",{className:"careerExtraHead",children:[b.jsx("p",{className:"careerExtraMain",children:M.title}),b.jsx("span",{className:"careerExtraDate",children:M.date})]}),b.jsx("p",{className:"careerExtraSub",children:M.issuer})]},`${M.title}-${M.date}`))})]}),b.jsxs("article",{className:"careerExtraCard",children:[b.jsxs("h3",{className:"h3 careerExtraTitle",children:[b.jsx(Ug,{}),"Awards"]}),b.jsx("ul",{className:"careerExtraList",children:Gg.map(M=>b.jsxs("li",{className:"careerExtraItem",children:[b.jsxs("div",{className:"careerExtraHead",children:[b.jsx("p",{className:"careerExtraMain",children:M.title}),b.jsx("span",{className:"careerExtraDate",children:M.date})]}),M.location?b.jsx("p",{className:"careerExtraMeta",children:M.location}):null]},`${M.title}-${M.date}`))})]})]})]}):null]}),b.jsx("p",{className:"footerQuote",children:'"Every small step shapes something great"'}),b.jsxs("footer",{className:"footer",children:[b.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:b.jsx("span",{className:"footerBaseAccent"})}),b.jsxs("div",{className:"container footerInner",children:[b.jsxs("span",{className:"footerLeft",children:[b.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),b.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:b.jsx(Z4,{})}),b.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:b.jsx(Q4,{})}),b.jsx("a",{className:"socialIcon github",href:"https://github.com/FCBTruong",target:"_blank",rel:"noreferrer","aria-label":"GitHub profile",children:b.jsx(zm,{})})]}),b.jsxs("span",{className:"footerStack","aria-label":"Built with React, TypeScript and Vite",children:[b.jsx("span",{className:"stackChip react",title:"React","aria-hidden":"true",children:b.jsx(K4,{})}),b.jsx("span",{className:"stackChip ts",title:"TypeScript","aria-hidden":"true",children:b.jsx(J4,{})}),b.jsx("span",{className:"stackChip vite",title:"Vite","aria-hidden":"true",children:b.jsx($4,{})})]})]})]}),i&&b.jsx(r3,{src:i.src,alt:i.alt,onClose:()=>u(null)})]})}function s3(){const l=localStorage.getItem("theme");return l==="light"||l==="dark"?l:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const c3=`
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

`;function f3(){const l=X4(),[r,i]=Ne.useState(()=>s3()),u=Ne.useCallback(()=>{i(c=>c==="dark"?"light":"dark")},[]);return Ne.useEffect(()=>{document.documentElement.dataset.theme=r,localStorage.setItem("theme",r)},[r]),b.jsxs(b.Fragment,{children:[b.jsx("style",{children:c3}),b.jsx(dy,{}),b.jsx(V4,{}),l==="cv"?b.jsx(l3,{theme:r,onToggleTheme:u}):l==="career"?b.jsx(P4,{theme:r,onToggleTheme:u}):b.jsx(o3,{theme:r,onToggleTheme:u})]})}py.createRoot(document.getElementById("root")).render(b.jsx(Ne.StrictMode,{children:b.jsx(f3,{})}));
