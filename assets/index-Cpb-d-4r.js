(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))d(U);new MutationObserver(U=>{for(const N of U)if(N.type==="childList")for(const k of N.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&d(k)}).observe(document,{childList:!0,subtree:!0});function M(U){const N={};return U.integrity&&(N.integrity=U.integrity),U.referrerPolicy&&(N.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?N.credentials="include":U.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function d(U){if(U.ep)return;U.ep=!0;const N=M(U);fetch(U.href,N)}})();function Ud(j){return j&&j.__esModule&&Object.prototype.hasOwnProperty.call(j,"default")?j.default:j}var ur={exports:{}},En={};var xd;function m1(){if(xd)return En;xd=1;var j=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function M(d,U,N){var k=null;if(N!==void 0&&(k=""+N),U.key!==void 0&&(k=""+U.key),"key"in U){N={};for(var le in U)le!=="key"&&(N[le]=U[le])}else N=U;return U=N.ref,{$$typeof:j,type:d,key:k,ref:U!==void 0?U:null,props:N}}return En.Fragment=B,En.jsx=M,En.jsxs=M,En}var Sd;function h1(){return Sd||(Sd=1,ur.exports=m1()),ur.exports}var r=h1(),cr={exports:{}},X={};var Ed;function p1(){if(Ed)return X;Ed=1;var j=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),k=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),ne=Symbol.iterator;function Ce(s){return s===null||typeof s!="object"?null:(s=ne&&s[ne]||s["@@iterator"],typeof s=="function"?s:null)}var pe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,Z={};function ee(s,x,A){this.props=s,this.context=x,this.refs=Z,this.updater=A||pe}ee.prototype.isReactComponent={},ee.prototype.setState=function(s,x){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,x,"setState")},ee.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function ve(){}ve.prototype=ee.prototype;function ge(s,x,A){this.props=s,this.context=x,this.refs=Z,this.updater=A||pe}var Re=ge.prototype=new ve;Re.constructor=ge,O(Re,ee.prototype),Re.isPureReactComponent=!0;var Ve=Array.isArray;function Ye(){}var w={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function lt(s,x,A){var D=A.ref;return{$$typeof:j,type:s,key:x,ref:D!==void 0?D:null,props:A}}function Bt(s,x){return lt(s.type,x,s.props)}function nt(s){return typeof s=="object"&&s!==null&&s.$$typeof===j}function Ke(s){var x={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(A){return x[A]})}var _t=/\/+/g;function Nt(s,x){return typeof s=="object"&&s!==null&&s.key!=null?Ke(""+s.key):x.toString(36)}function it(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Ye,Ye):(s.status="pending",s.then(function(x){s.status==="pending"&&(s.status="fulfilled",s.value=x)},function(x){s.status==="pending"&&(s.status="rejected",s.reason=x)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function h(s,x,A,D,G){var K=typeof s;(K==="undefined"||K==="boolean")&&(s=null);var ie=!1;if(s===null)ie=!0;else switch(K){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(s.$$typeof){case j:case B:ie=!0;break;case P:return ie=s._init,h(ie(s._payload),x,A,D,G)}}if(ie)return G=G(s),ie=D===""?"."+Nt(s,0):D,Ve(G)?(A="",ie!=null&&(A=ie.replace(_t,"$&/")+"/"),h(G,x,A,"",function(Ml){return Ml})):G!=null&&(nt(G)&&(G=Bt(G,A+(G.key==null||s&&s.key===G.key?"":(""+G.key).replace(_t,"$&/")+"/")+ie)),x.push(G)),1;ie=0;var Be=D===""?".":D+":";if(Ve(s))for(var Te=0;Te<s.length;Te++)D=s[Te],K=Be+Nt(D,Te),ie+=h(D,x,A,K,G);else if(Te=Ce(s),typeof Te=="function")for(s=Te.call(s),Te=0;!(D=s.next()).done;)D=D.value,K=Be+Nt(D,Te++),ie+=h(D,x,A,K,G);else if(K==="object"){if(typeof s.then=="function")return h(it(s),x,A,D,G);throw x=String(s),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return ie}function T(s,x,A){if(s==null)return s;var D=[],G=0;return h(s,D,"","",function(K){return x.call(A,K,G++)}),D}function H(s){if(s._status===-1){var x=s._result;x=x(),x.then(function(A){(s._status===0||s._status===-1)&&(s._status=1,s._result=A)},function(A){(s._status===0||s._status===-1)&&(s._status=2,s._result=A)}),s._status===-1&&(s._status=0,s._result=x)}if(s._status===1)return s._result.default;throw s._result}var te=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},Q={map:T,forEach:function(s,x,A){T(s,function(){x.apply(this,arguments)},A)},count:function(s){var x=0;return T(s,function(){x++}),x},toArray:function(s){return T(s,function(x){return x})||[]},only:function(s){if(!nt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return X.Activity=Y,X.Children=Q,X.Component=ee,X.Fragment=M,X.Profiler=U,X.PureComponent=ge,X.StrictMode=d,X.Suspense=_,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,X.__COMPILER_RUNTIME={__proto__:null,c:function(s){return w.H.useMemoCache(s)}},X.cache=function(s){return function(){return s.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(s,x,A){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=O({},s.props),G=s.key;if(x!=null)for(K in x.key!==void 0&&(G=""+x.key),x)!Le.call(x,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&x.ref===void 0||(D[K]=x[K]);var K=arguments.length-2;if(K===1)D.children=A;else if(1<K){for(var ie=Array(K),Be=0;Be<K;Be++)ie[Be]=arguments[Be+2];D.children=ie}return lt(s.type,G,D)},X.createContext=function(s){return s={$$typeof:k,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:N,_context:s},s},X.createElement=function(s,x,A){var D,G={},K=null;if(x!=null)for(D in x.key!==void 0&&(K=""+x.key),x)Le.call(x,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(G[D]=x[D]);var ie=arguments.length-2;if(ie===1)G.children=A;else if(1<ie){for(var Be=Array(ie),Te=0;Te<ie;Te++)Be[Te]=arguments[Te+2];G.children=Be}if(s&&s.defaultProps)for(D in ie=s.defaultProps,ie)G[D]===void 0&&(G[D]=ie[D]);return lt(s,K,G)},X.createRef=function(){return{current:null}},X.forwardRef=function(s){return{$$typeof:le,render:s}},X.isValidElement=nt,X.lazy=function(s){return{$$typeof:P,_payload:{_status:-1,_result:s},_init:H}},X.memo=function(s,x){return{$$typeof:z,type:s,compare:x===void 0?null:x}},X.startTransition=function(s){var x=w.T,A={};w.T=A;try{var D=s(),G=w.S;G!==null&&G(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ye,te)}catch(K){te(K)}finally{x!==null&&A.types!==null&&(x.types=A.types),w.T=x}},X.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},X.use=function(s){return w.H.use(s)},X.useActionState=function(s,x,A){return w.H.useActionState(s,x,A)},X.useCallback=function(s,x){return w.H.useCallback(s,x)},X.useContext=function(s){return w.H.useContext(s)},X.useDebugValue=function(){},X.useDeferredValue=function(s,x){return w.H.useDeferredValue(s,x)},X.useEffect=function(s,x){return w.H.useEffect(s,x)},X.useEffectEvent=function(s){return w.H.useEffectEvent(s)},X.useId=function(){return w.H.useId()},X.useImperativeHandle=function(s,x,A){return w.H.useImperativeHandle(s,x,A)},X.useInsertionEffect=function(s,x){return w.H.useInsertionEffect(s,x)},X.useLayoutEffect=function(s,x){return w.H.useLayoutEffect(s,x)},X.useMemo=function(s,x){return w.H.useMemo(s,x)},X.useOptimistic=function(s,x){return w.H.useOptimistic(s,x)},X.useReducer=function(s,x,A){return w.H.useReducer(s,x,A)},X.useRef=function(s){return w.H.useRef(s)},X.useState=function(s){return w.H.useState(s)},X.useSyncExternalStore=function(s,x,A){return w.H.useSyncExternalStore(s,x,A)},X.useTransition=function(){return w.H.useTransition()},X.version="19.2.3",X}var zd;function hr(){return zd||(zd=1,cr.exports=p1()),cr.exports}var Se=hr();const je=Ud(Se);var rr={exports:{}},zn={},fr={exports:{}},sr={};var jd;function g1(){return jd||(jd=1,(function(j){function B(h,T){var H=h.length;h.push(T);e:for(;0<H;){var te=H-1>>>1,Q=h[te];if(0<U(Q,T))h[te]=T,h[H]=Q,H=te;else break e}}function M(h){return h.length===0?null:h[0]}function d(h){if(h.length===0)return null;var T=h[0],H=h.pop();if(H!==T){h[0]=H;e:for(var te=0,Q=h.length,s=Q>>>1;te<s;){var x=2*(te+1)-1,A=h[x],D=x+1,G=h[D];if(0>U(A,H))D<Q&&0>U(G,A)?(h[te]=G,h[D]=H,te=D):(h[te]=A,h[x]=H,te=x);else if(D<Q&&0>U(G,H))h[te]=G,h[D]=H,te=D;else break e}}return T}function U(h,T){var H=h.sortIndex-T.sortIndex;return H!==0?H:h.id-T.id}if(j.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;j.unstable_now=function(){return N.now()}}else{var k=Date,le=k.now();j.unstable_now=function(){return k.now()-le}}var _=[],z=[],P=1,Y=null,ne=3,Ce=!1,pe=!1,O=!1,Z=!1,ee=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Re(h){for(var T=M(z);T!==null;){if(T.callback===null)d(z);else if(T.startTime<=h)d(z),T.sortIndex=T.expirationTime,B(_,T);else break;T=M(z)}}function Ve(h){if(O=!1,Re(h),!pe)if(M(_)!==null)pe=!0,Ye||(Ye=!0,Ke());else{var T=M(z);T!==null&&it(Ve,T.startTime-h)}}var Ye=!1,w=-1,Le=5,lt=-1;function Bt(){return Z?!0:!(j.unstable_now()-lt<Le)}function nt(){if(Z=!1,Ye){var h=j.unstable_now();lt=h;var T=!0;try{e:{pe=!1,O&&(O=!1,ve(w),w=-1),Ce=!0;var H=ne;try{t:{for(Re(h),Y=M(_);Y!==null&&!(Y.expirationTime>h&&Bt());){var te=Y.callback;if(typeof te=="function"){Y.callback=null,ne=Y.priorityLevel;var Q=te(Y.expirationTime<=h);if(h=j.unstable_now(),typeof Q=="function"){Y.callback=Q,Re(h),T=!0;break t}Y===M(_)&&d(_),Re(h)}else d(_);Y=M(_)}if(Y!==null)T=!0;else{var s=M(z);s!==null&&it(Ve,s.startTime-h),T=!1}}break e}finally{Y=null,ne=H,Ce=!1}T=void 0}}finally{T?Ke():Ye=!1}}}var Ke;if(typeof ge=="function")Ke=function(){ge(nt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Nt=_t.port2;_t.port1.onmessage=nt,Ke=function(){Nt.postMessage(null)}}else Ke=function(){ee(nt,0)};function it(h,T){w=ee(function(){h(j.unstable_now())},T)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(h){h.callback=null},j.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<h?Math.floor(1e3/h):5},j.unstable_getCurrentPriorityLevel=function(){return ne},j.unstable_next=function(h){switch(ne){case 1:case 2:case 3:var T=3;break;default:T=ne}var H=ne;ne=T;try{return h()}finally{ne=H}},j.unstable_requestPaint=function(){Z=!0},j.unstable_runWithPriority=function(h,T){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var H=ne;ne=h;try{return T()}finally{ne=H}},j.unstable_scheduleCallback=function(h,T,H){var te=j.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,h){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,h={id:P++,callback:T,priorityLevel:h,startTime:H,expirationTime:Q,sortIndex:-1},H>te?(h.sortIndex=H,B(z,h),M(_)===null&&h===M(z)&&(O?(ve(w),w=-1):O=!0,it(Ve,H-te))):(h.sortIndex=Q,B(_,h),pe||Ce||(pe=!0,Ye||(Ye=!0,Ke()))),h},j.unstable_shouldYield=Bt,j.unstable_wrapCallback=function(h){var T=ne;return function(){var H=ne;ne=T;try{return h.apply(this,arguments)}finally{ne=H}}}})(sr)),sr}var Td;function v1(){return Td||(Td=1,fr.exports=g1()),fr.exports}var or={exports:{}},Je={};var Nd;function y1(){if(Nd)return Je;Nd=1;var j=hr();function B(_){var z="https://react.dev/errors/"+_;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)z+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+_+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var d={d:{f:M,r:function(){throw Error(B(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},U=Symbol.for("react.portal");function N(_,z,P){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:Y==null?null:""+Y,children:_,containerInfo:z,implementation:P}}var k=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function le(_,z){if(_==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Je.createPortal=function(_,z){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(B(299));return N(_,z,null,P)},Je.flushSync=function(_){var z=k.T,P=d.p;try{if(k.T=null,d.p=2,_)return _()}finally{k.T=z,d.p=P,d.d.f()}},Je.preconnect=function(_,z){typeof _=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,d.d.C(_,z))},Je.prefetchDNS=function(_){typeof _=="string"&&d.d.D(_)},Je.preinit=function(_,z){if(typeof _=="string"&&z&&typeof z.as=="string"){var P=z.as,Y=le(P,z.crossOrigin),ne=typeof z.integrity=="string"?z.integrity:void 0,Ce=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;P==="style"?d.d.S(_,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:Y,integrity:ne,fetchPriority:Ce}):P==="script"&&d.d.X(_,{crossOrigin:Y,integrity:ne,fetchPriority:Ce,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Je.preinitModule=function(_,z){if(typeof _=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var P=le(z.as,z.crossOrigin);d.d.M(_,{crossOrigin:P,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&d.d.M(_)},Je.preload=function(_,z){if(typeof _=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var P=z.as,Y=le(P,z.crossOrigin);d.d.L(_,P,{crossOrigin:Y,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Je.preloadModule=function(_,z){if(typeof _=="string")if(z){var P=le(z.as,z.crossOrigin);d.d.m(_,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:P,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else d.d.m(_)},Je.requestFormReset=function(_){d.d.r(_)},Je.unstable_batchedUpdates=function(_,z){return _(z)},Je.useFormState=function(_,z,P){return k.H.useFormState(_,z,P)},Je.useFormStatus=function(){return k.H.useHostTransitionStatus()},Je.version="19.2.3",Je}var Ad;function b1(){if(Ad)return or.exports;Ad=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(B){console.error(B)}}return j(),or.exports=y1(),or.exports}var Md;function x1(){if(Md)return zn;Md=1;var j=v1(),B=hr(),M=b1();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function N(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function k(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function le(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(N(e)!==e)throw Error(d(188))}function z(e){var t=e.alternate;if(!t){if(t=N(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return _(n),e;if(i===l)return _(n),t;i=i.sibling}throw Error(d(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var Y=Object.assign,ne=Symbol.for("react.element"),Ce=Symbol.for("react.transitional.element"),pe=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),Bt=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function Nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case ee:return"Profiler";case Z:return"StrictMode";case Ve:return"Suspense";case Ye:return"SuspenseList";case lt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case pe:return"Portal";case ge:return e.displayName||"Context";case ve:return(e._context.displayName||"Context")+".Consumer";case Re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return t=e.displayName||null,t!==null?t:Nt(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return Nt(e(t))}catch{}}return null}var it=Array.isArray,h=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},te=[],Q=-1;function s(e){return{current:e}}function x(e){0>Q||(e.current=te[Q],te[Q]=null,Q--)}function A(e,t){Q++,te[Q]=e.current,e.current=t}var D=s(null),G=s(null),K=s(null),ie=s(null);function Be(e,t){switch(A(K,t),A(G,e),A(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zo(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zo(t),e=Qo(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}x(D),A(D,e)}function Te(){x(D),x(G),x(K)}function Ml(e){e.memoizedState!==null&&A(ie,e);var t=D.current,a=Qo(t,e.type);t!==a&&(A(G,e),A(D,a))}function jn(e){G.current===e&&(x(D),x(G)),ie.current===e&&(x(ie),yn._currentValue=H)}var Xi,vr;function Ta(e){if(Xi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||"",vr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+vr}var Zi=!1;function Qi(e,t){if(!e||Zi)return"";Zi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(y){var v=y}Reflect.construct(e,[],E)}else{try{E.call()}catch(y){v=y}e.call(E.prototype)}}else{try{throw Error()}catch(y){v=y}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(y){if(y&&v&&typeof y.stack=="string")return[y.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),g=c.split(`
`);for(n=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===f.length||n===g.length)for(l=f.length-1,n=g.length-1;1<=l&&0<=n&&f[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(f[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||f[l]!==g[n]){var b=`
`+f[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Qd(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return Ta("Activity");default:return""}}function yr(e){try{var t="",a=null;do t+=Qd(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Vi=Object.prototype.hasOwnProperty,Ki=j.unstable_scheduleCallback,Ji=j.unstable_cancelCallback,Vd=j.unstable_shouldYield,Kd=j.unstable_requestPaint,ut=j.unstable_now,Jd=j.unstable_getCurrentPriorityLevel,br=j.unstable_ImmediatePriority,xr=j.unstable_UserBlockingPriority,Tn=j.unstable_NormalPriority,kd=j.unstable_LowPriority,Sr=j.unstable_IdlePriority,Wd=j.log,$d=j.unstable_setDisableYieldValue,Dl=null,ct=null;function ea(e){if(typeof Wd=="function"&&$d(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Dl,e)}catch{}}var rt=Math.clz32?Math.clz32:Pd,Fd=Math.log,Id=Math.LN2;function Pd(e){return e>>>=0,e===0?32:31-(Fd(e)/Id|0)|0}var Nn=256,An=262144,Mn=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Na(l):(u&=c,u!==0?n=Na(u):a||(a=c&~e,a!==0&&(n=Na(a))))):(c=l&~i,c!==0?n=Na(c):u!==0?n=Na(u):a||(a=l&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function e0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(){var e=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),e}function ki(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,g=e.hiddenUpdates;for(a=u&~a;0<a;){var b=31-rt(a),E=1<<b;c[b]=0,f[b]=-1;var v=g[b];if(v!==null)for(g[b]=null,b=0;b<v.length;b++){var y=v[b];y!==null&&(y.lane&=-536870913)}a&=~E}l!==0&&zr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function zr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function jr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-rt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Tr(e,t){var a=t&-t;return a=(a&42)!==0?1:Wi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $i(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function Ar(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var ta=Math.random().toString(36).slice(2),qe="__reactFiber$"+ta,$e="__reactProps$"+ta,Qa="__reactContainer$"+ta,Fi="__reactEvents$"+ta,a0="__reactListeners$"+ta,l0="__reactHandles$"+ta,Mr="__reactResources$"+ta,Cl="__reactMarker$"+ta;function Ii(e){delete e[qe],delete e[$e],delete e[Fi],delete e[a0],delete e[l0]}function Va(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Fo(e);e!==null;){if(a=e[qe])return a;e=Fo(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[qe]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ja(e){var t=e[Mr];return t||(t=e[Mr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Cl]=!0}var Dr=new Set,_r={};function Aa(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(_r[e]=t,e=0;e<t.length;e++)Dr.add(t[e])}var n0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Or={},Cr={};function i0(e){return Vi.call(Cr,e)?!0:Vi.call(Or,e)?!1:n0.test(e)?Cr[e]=!0:(Or[e]=!0,!1)}function _n(e,t,a){if(i0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function On(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ur(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u0(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){if(!e._valueTracker){var t=Ur(e)?"checked":"value";e._valueTracker=u0(e,t,""+e[t])}}function Rr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ur(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var c0=/[\n"\\]/g;function vt(e){return e.replace(c0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(e,t,a,l,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?tu(e,u,gt(t)):a!=null?tu(e,u,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+gt(c):e.removeAttribute("name")}function Br(e,t,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Pi(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Pi(e)}function tu(e,t,a){t==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Hr(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function Gr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(d(92));if(it(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Pi(e)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var r0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||r0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lr(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Yr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Yr(e,i,t[i])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(e){return s0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var lu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Ia=null;function qr(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(eu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(d(90));eu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Rr(l)}break e;case"textarea":Hr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var iu=!1;function wr(e,t,a){if(iu)return e(t,a);iu=!0;try{var l=e(t);return l}finally{if(iu=!1,(Fa!==null||Ia!==null)&&(xi(),Fa&&(t=Fa,e=Ia,Ia=Fa=null,qr(t),e)))for(t=0;t<e.length;t++)qr(e[t])}}function Rl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Yt)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{uu=!1}var aa=null,cu=null,Rn=null;function Xr(){if(Rn)return Rn;var e,t=cu,a=t.length,l,n="value"in aa?aa.value:aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Rn=n.slice(e,1<l?1-l:void 0)}function Bn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Zr(){return!1}function Fe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:Zr,this.isPropagationStopped=Zr,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gn=Fe(Ma),Hl=Y({},Ma,{view:0,detail:0}),o0=Fe(Hl),ru,fu,Gl,Yn=Y({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(ru=e.screenX-Gl.screenX,fu=e.screenY-Gl.screenY):fu=ru=0,Gl=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),Qr=Fe(Yn),d0=Y({},Yn,{dataTransfer:0}),m0=Fe(d0),h0=Y({},Hl,{relatedTarget:0}),su=Fe(h0),p0=Y({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Fe(p0),v0=Y({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=Fe(v0),b0=Y({},Ma,{data:0}),Vr=Fe(b0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E0[e])?!!t[e]:!1}function ou(){return z0}var j0=Y({},Hl,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Bn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=Fe(j0),N0=Y({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kr=Fe(N0),A0=Y({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),M0=Fe(A0),D0=Y({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Fe(D0),O0=Y({},Yn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=Fe(O0),U0=Y({},Ma,{newState:0,oldState:0}),R0=Fe(U0),B0=[9,13,27,32],du=Yt&&"CompositionEvent"in window,Yl=null;Yt&&"documentMode"in document&&(Yl=document.documentMode);var H0=Yt&&"TextEvent"in window&&!Yl,Jr=Yt&&(!du||Yl&&8<Yl&&11>=Yl),kr=" ",Wr=!1;function $r(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function G0(e,t){switch(e){case"compositionend":return Fr(t);case"keypress":return t.which!==32?null:(Wr=!0,kr);case"textInput":return e=t.data,e===kr&&Wr?null:e;default:return null}}function Y0(e,t){if(Pa)return e==="compositionend"||!du&&$r(e,t)?(e=Xr(),Rn=cu=aa=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jr&&t.locale!=="ko"?null:t.data;default:return null}}var L0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L0[e.type]:t==="textarea"}function Pr(e,t,a,l){Fa?Ia?Ia.push(l):Ia=[l]:Fa=l,t=Ai(t,"onChange"),0<t.length&&(a=new Gn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ll=null,ql=null;function q0(e){Go(e,0)}function Ln(e){var t=Ul(e);if(Rr(t))return e}function ef(e,t){if(e==="change")return t}var tf=!1;if(Yt){var mu;if(Yt){var hu="oninput"in document;if(!hu){var af=document.createElement("div");af.setAttribute("oninput","return;"),hu=typeof af.oninput=="function"}mu=hu}else mu=!1;tf=mu&&(!document.documentMode||9<document.documentMode)}function lf(){Ll&&(Ll.detachEvent("onpropertychange",nf),ql=Ll=null)}function nf(e){if(e.propertyName==="value"&&Ln(ql)){var t=[];Pr(t,ql,e,nu(e)),wr(q0,t)}}function w0(e,t,a){e==="focusin"?(lf(),Ll=t,ql=a,Ll.attachEvent("onpropertychange",nf)):e==="focusout"&&lf()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ln(ql)}function Z0(e,t){if(e==="click")return Ln(t)}function Q0(e,t){if(e==="input"||e==="change")return Ln(t)}function V0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:V0;function wl(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Vi.call(t,n)||!ft(e[n],t[n]))return!1}return!0}function uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cf(e,t){var a=uf(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uf(a)}}function rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ff(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Cn(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var K0=Yt&&"documentMode"in document&&11>=document.documentMode,el=null,gu=null,Xl=null,vu=!1;function sf(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||el==null||el!==Cn(l)||(l=el,"selectionStart"in l&&pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&wl(Xl,l)||(Xl=l,l=Ai(gu,"onSelect"),0<l.length&&(t=new Gn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},yu={},of={};Yt&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function _a(e){if(yu[e])return yu[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in of)return yu[e]=t[a];return e}var df=_a("animationend"),mf=_a("animationiteration"),hf=_a("animationstart"),J0=_a("transitionrun"),k0=_a("transitionstart"),W0=_a("transitioncancel"),pf=_a("transitionend"),gf=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function At(e,t){gf.set(e,t),Aa(t,[e])}var qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],al=0,xu=0;function wn(){for(var e=al,t=xu=al=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&vf(a,n,i)}}function Xn(e,t,a,l){yt[al++]=e,yt[al++]=t,yt[al++]=a,yt[al++]=l,xu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Su(e,t,a,l){return Xn(e,t,a,l),Zn(e)}function Oa(e,t){return Xn(e,null,null,t),Zn(e)}function vf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-rt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Zn(e){if(50<on)throw on=0,_c=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function $0(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,a,l){return new $0(e,t,a,l)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=st(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Eu(e)&&(u=1);else if(typeof e=="string")u=t1(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case lt:return e=st(31,a,t,n),e.elementType=lt,e.lanes=i,e;case O:return Ca(a.children,n,i,t);case Z:u=8,n|=24;break;case ee:return e=st(12,a,t,n|2),e.elementType=ee,e.lanes=i,e;case Ve:return e=st(13,a,t,n),e.elementType=Ve,e.lanes=i,e;case Ye:return e=st(19,a,t,n),e.elementType=Ye,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:u=10;break e;case ve:u=9;break e;case Re:u=11;break e;case w:u=14;break e;case Le:u=16,l=null;break e}u=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=st(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ca(e,t,a,l){return e=st(7,e,l,t),e.lanes=a,e}function zu(e,t,a){return e=st(6,e,null,t),e.lanes=a,e}function bf(e){var t=st(18,null,null,0);return t.stateNode=e,t}function ju(e,t,a){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xf=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=xf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:yr(t)},xf.set(e,t),t)}return{value:e,source:t,stack:yr(t)}}var nl=[],il=0,Vn=null,Zl=0,xt=[],St=0,la=null,Ot=1,Ct="";function qt(e,t){nl[il++]=Zl,nl[il++]=Vn,Vn=e,Zl=t}function Sf(e,t,a){xt[St++]=Ot,xt[St++]=Ct,xt[St++]=la,la=e;var l=Ot;e=Ct;var n=32-rt(l)-1;l&=~(1<<n),a+=1;var i=32-rt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ot=1<<32-rt(t)+n|a<<n|l,Ct=i+e}else Ot=1<<i|a<<n|l,Ct=e}function Tu(e){e.return!==null&&(qt(e,1),Sf(e,1,0))}function Nu(e){for(;e===Vn;)Vn=nl[--il],nl[il]=null,Zl=nl[--il],nl[il]=null;for(;e===la;)la=xt[--St],xt[St]=null,Ct=xt[--St],xt[St]=null,Ot=xt[--St],xt[St]=null}function Ef(e,t){xt[St++]=Ot,xt[St++]=Ct,xt[St++]=la,Ot=t.id,Ct=t.overflow,la=e}var we=null,ye=null,ae=!1,na=null,Et=!1,Au=Error(d(519));function ia(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ql(bt(t,e)),Au}function zf(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[qe]=e,t[$e]=l,a){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)$(mn[a],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Br(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Gr(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||wo(t.textContent,a)?(l.popover!=null&&($("beforetoggle",t),$("toggle",t)),l.onScroll!=null&&$("scroll",t),l.onScrollEnd!=null&&$("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ia(e,!0)}function jf(e){for(we=e.return;we;)switch(we.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:we=we.return}}function ul(e){if(e!==we)return!1;if(!ae)return jf(e),ae=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vc(e.type,e.memoizedProps)),a=!a),a&&ye&&ia(e),jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ye=$o(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ye=$o(e)}else t===27?(t=ye,ba(e.type)?(e=$c,$c=null,ye=e):ye=t):ye=we?jt(e.stateNode.nextSibling):null;return!0}function Ua(){ye=we=null,ae=!1}function Mu(){var e=na;return e!==null&&(tt===null?tt=e:tt.push.apply(tt,e),na=null),e}function Ql(e){na===null?na=[e]:na.push(e)}var Du=s(null),Ra=null,wt=null;function ua(e,t,a){A(Du,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=Du.current,x(Du)}function _u(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ou(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),_u(i.return,a,e),l||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(d(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),_u(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function cl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var c=n.type;ft(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ie.current){if(u=n.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&Ou(t,e,a,l),t.flags|=262144}function Kn(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Ra=e,wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Tf(Ra,e)}function Jn(e,t){return Ra===null&&Ba(e),Tf(e,t)}function Tf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},wt===null){if(e===null)throw Error(d(308));wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wt=wt.next=t;return a}var F0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},I0=j.unstable_scheduleCallback,P0=j.unstable_NormalPriority,Me={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new F0,data:new Map,refCount:0}}function Vl(e){e.refCount--,e.refCount===0&&I0(P0,function(){e.controller.abort()})}var Kl=null,Uu=0,rl=0,fl=null;function em(e,t){if(Kl===null){var a=Kl=[];Uu=0,rl=Hc(),fl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Uu++,t.then(Nf,Nf),t}function Nf(){if(--Uu===0&&Kl!==null){fl!==null&&(fl.status="fulfilled");var e=Kl;Kl=null,rl=0,fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Af=h.S;h.S=function(e,t){so=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&em(e,t),Af!==null&&Af(e,t)};var Ha=s(null);function Ru(){var e=Ha.current;return e!==null?e:he.pooledCache}function kn(e,t){t===null?A(Ha,Ha.current):A(Ha,t.pool)}function Mf(){var e=Ru();return e===null?null:{parent:Me._currentValue,pool:e}}var sl=Error(d(460)),Bu=Error(d(474)),Wn=Error(d(542)),$n={then:function(){}};function Df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _f(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cf(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cf(e),e}throw Ya=t,sl}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ya=a,sl):a}}var Ya=null;function Of(){if(Ya===null)throw Error(d(459));var e=Ya;return Ya=null,e}function Cf(e){if(e===sl||e===Wn)throw Error(d(483))}var ol=null,Jl=0;function Fn(e){var t=Jl;return Jl+=1,ol===null&&(ol=[]),_f(ol,e,t)}function kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===ne?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uf(e){function t(m,o){if(e){var p=m.deletions;p===null?(m.deletions=[o],m.flags|=16):p.push(o)}}function a(m,o){if(!e)return null;for(;o!==null;)t(m,o),o=o.sibling;return null}function l(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=Lt(m,o),m.index=0,m.sibling=null,m}function i(m,o,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<o?(m.flags|=67108866,o):p):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,p,S){return o===null||o.tag!==6?(o=zu(p,m.mode,S),o.return=m,o):(o=n(o,p),o.return=m,o)}function f(m,o,p,S){var L=p.type;return L===O?b(m,o,p.props.children,S,p.key):o!==null&&(o.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Le&&Ga(L)===o.type)?(o=n(o,p.props),kl(o,p),o.return=m,o):(o=Qn(p.type,p.key,p.props,null,m.mode,S),kl(o,p),o.return=m,o)}function g(m,o,p,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=ju(p,m.mode,S),o.return=m,o):(o=n(o,p.children||[]),o.return=m,o)}function b(m,o,p,S,L){return o===null||o.tag!==7?(o=Ca(p,m.mode,S,L),o.return=m,o):(o=n(o,p),o.return=m,o)}function E(m,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=zu(""+o,m.mode,p),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ce:return p=Qn(o.type,o.key,o.props,null,m.mode,p),kl(p,o),p.return=m,p;case pe:return o=ju(o,m.mode,p),o.return=m,o;case Le:return o=Ga(o),E(m,o,p)}if(it(o)||Ke(o))return o=Ca(o,m.mode,p,null),o.return=m,o;if(typeof o.then=="function")return E(m,Fn(o),p);if(o.$$typeof===ge)return E(m,Jn(m,o),p);In(m,o)}return null}function v(m,o,p,S){var L=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return L!==null?null:c(m,o,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ce:return p.key===L?f(m,o,p,S):null;case pe:return p.key===L?g(m,o,p,S):null;case Le:return p=Ga(p),v(m,o,p,S)}if(it(p)||Ke(p))return L!==null?null:b(m,o,p,S,null);if(typeof p.then=="function")return v(m,o,Fn(p),S);if(p.$$typeof===ge)return v(m,o,Jn(m,p),S);In(m,p)}return null}function y(m,o,p,S,L){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return m=m.get(p)||null,c(o,m,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ce:return m=m.get(S.key===null?p:S.key)||null,f(o,m,S,L);case pe:return m=m.get(S.key===null?p:S.key)||null,g(o,m,S,L);case Le:return S=Ga(S),y(m,o,p,S,L)}if(it(S)||Ke(S))return m=m.get(p)||null,b(o,m,S,L,null);if(typeof S.then=="function")return y(m,o,p,Fn(S),L);if(S.$$typeof===ge)return y(m,o,p,Jn(o,S),L);In(o,S)}return null}function C(m,o,p,S){for(var L=null,ue=null,R=o,J=o=0,I=null;R!==null&&J<p.length;J++){R.index>J?(I=R,R=null):I=R.sibling;var ce=v(m,R,p[J],S);if(ce===null){R===null&&(R=I);break}e&&R&&ce.alternate===null&&t(m,R),o=i(ce,o,J),ue===null?L=ce:ue.sibling=ce,ue=ce,R=I}if(J===p.length)return a(m,R),ae&&qt(m,J),L;if(R===null){for(;J<p.length;J++)R=E(m,p[J],S),R!==null&&(o=i(R,o,J),ue===null?L=R:ue.sibling=R,ue=R);return ae&&qt(m,J),L}for(R=l(R);J<p.length;J++)I=y(R,m,J,p[J],S),I!==null&&(e&&I.alternate!==null&&R.delete(I.key===null?J:I.key),o=i(I,o,J),ue===null?L=I:ue.sibling=I,ue=I);return e&&R.forEach(function(ja){return t(m,ja)}),ae&&qt(m,J),L}function q(m,o,p,S){if(p==null)throw Error(d(151));for(var L=null,ue=null,R=o,J=o=0,I=null,ce=p.next();R!==null&&!ce.done;J++,ce=p.next()){R.index>J?(I=R,R=null):I=R.sibling;var ja=v(m,R,ce.value,S);if(ja===null){R===null&&(R=I);break}e&&R&&ja.alternate===null&&t(m,R),o=i(ja,o,J),ue===null?L=ja:ue.sibling=ja,ue=ja,R=I}if(ce.done)return a(m,R),ae&&qt(m,J),L;if(R===null){for(;!ce.done;J++,ce=p.next())ce=E(m,ce.value,S),ce!==null&&(o=i(ce,o,J),ue===null?L=ce:ue.sibling=ce,ue=ce);return ae&&qt(m,J),L}for(R=l(R);!ce.done;J++,ce=p.next())ce=y(R,m,J,ce.value,S),ce!==null&&(e&&ce.alternate!==null&&R.delete(ce.key===null?J:ce.key),o=i(ce,o,J),ue===null?L=ce:ue.sibling=ce,ue=ce);return e&&R.forEach(function(d1){return t(m,d1)}),ae&&qt(m,J),L}function me(m,o,p,S){if(typeof p=="object"&&p!==null&&p.type===O&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ce:e:{for(var L=p.key;o!==null;){if(o.key===L){if(L=p.type,L===O){if(o.tag===7){a(m,o.sibling),S=n(o,p.props.children),S.return=m,m=S;break e}}else if(o.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Le&&Ga(L)===o.type){a(m,o.sibling),S=n(o,p.props),kl(S,p),S.return=m,m=S;break e}a(m,o);break}else t(m,o);o=o.sibling}p.type===O?(S=Ca(p.props.children,m.mode,S,p.key),S.return=m,m=S):(S=Qn(p.type,p.key,p.props,null,m.mode,S),kl(S,p),S.return=m,m=S)}return u(m);case pe:e:{for(L=p.key;o!==null;){if(o.key===L)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){a(m,o.sibling),S=n(o,p.children||[]),S.return=m,m=S;break e}else{a(m,o);break}else t(m,o);o=o.sibling}S=ju(p,m.mode,S),S.return=m,m=S}return u(m);case Le:return p=Ga(p),me(m,o,p,S)}if(it(p))return C(m,o,p,S);if(Ke(p)){if(L=Ke(p),typeof L!="function")throw Error(d(150));return p=L.call(p),q(m,o,p,S)}if(typeof p.then=="function")return me(m,o,Fn(p),S);if(p.$$typeof===ge)return me(m,o,Jn(m,p),S);In(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(a(m,o.sibling),S=n(o,p),S.return=m,m=S):(a(m,o),S=zu(p,m.mode,S),S.return=m,m=S),u(m)):a(m,o)}return function(m,o,p,S){try{Jl=0;var L=me(m,o,p,S);return ol=null,L}catch(R){if(R===sl||R===Wn)throw R;var ue=st(29,R,null,m.mode);return ue.lanes=S,ue.return=m,ue}}}var La=Uf(!0),Rf=Uf(!1),ca=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(re&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Zn(e),vf(e,null,a),t}return Xn(e,l,t,a),Zn(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,jr(e,a)}}function Yu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Lu=!1;function $l(){if(Lu){var e=fl;if(e!==null)throw e}}function Fl(e,t,a,l){Lu=!1;var n=e.updateQueue;ca=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,g=f.next;f.next=null,u===null?i=g:u.next=g,u=f;var b=e.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=g:c.next=g,b.lastBaseUpdate=f))}if(i!==null){var E=n.baseState;u=0,b=g=f=null,c=i;do{var v=c.lane&-536870913,y=v!==c.lane;if(y?(F&v)===v:(l&v)===v){v!==0&&v===rl&&(Lu=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var C=e,q=c;v=t;var me=a;switch(q.tag){case 1:if(C=q.payload,typeof C=="function"){E=C.call(me,E,v);break e}E=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=q.payload,v=typeof C=="function"?C.call(me,E,v):C,v==null)break e;E=Y({},E,v);break e;case 2:ca=!0}}v=c.callback,v!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[v]:y.push(v))}else y={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(g=b=y,f=E):b=b.next=y,u|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(f=E),n.baseState=f,n.firstBaseUpdate=g,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),ha|=u,e.lanes=u,e.memoizedState=E}}function Bf(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Hf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bf(a[e],t)}var dl=s(null),Pn=s(0);function Gf(e,t){e=Ft,A(Pn,e),A(dl,t),Ft=e|t.baseLanes}function qu(){A(Pn,Ft),A(dl,dl.current)}function wu(){Ft=Pn.current,x(dl),x(Pn)}var ot=s(null),zt=null;function sa(e){var t=e.alternate;A(Ne,Ne.current&1),A(ot,e),zt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(zt=e)}function Xu(e){A(Ne,Ne.current),A(ot,e),zt===null&&(zt=e)}function Yf(e){e.tag===22?(A(Ne,Ne.current),A(ot,e),zt===null&&(zt=e)):oa()}function oa(){A(Ne,Ne.current),A(ot,ot.current)}function dt(e){x(ot),zt===e&&(zt=null),x(Ne)}var Ne=s(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kc(a)||Wc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,V=null,oe=null,De=null,ti=!1,ml=!1,qa=!1,ai=0,Il=0,hl=null,am=0;function Ee(){throw Error(d(321))}function Zu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function Qu(e,t,a,l,n,i){return Zt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,h.H=e===null||e.memoizedState===null?Ss:ic,qa=!1,i=a(l,n),qa=!1,ml&&(i=qf(t,a,l,n)),Lf(e),i}function Lf(e){h.H=tn;var t=oe!==null&&oe.next!==null;if(Zt=0,De=oe=V=null,ti=!1,Il=0,hl=null,t)throw Error(d(300));e===null||_e||(e=e.dependencies,e!==null&&Kn(e)&&(_e=!0))}function qf(e,t,a,l){V=e;var n=0;do{if(ml&&(hl=null),Il=0,ml=!1,25<=n)throw Error(d(301));if(n+=1,De=oe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}h.H=Es,i=t(a,l)}while(ml);return i}function lm(){var e=h.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(V.flags|=1024),t}function Vu(){var e=ai!==0;return ai=0,e}function Ku(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ju(e){if(ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ti=!1}Zt=0,De=oe=V=null,ml=!1,Il=ai=0,hl=null}function ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?V.memoizedState=De=e:De=De.next=e,De}function Ae(){if(oe===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=De===null?V.memoizedState:De.next;if(t!==null)De=t,oe=e;else{if(e===null)throw V.alternate===null?Error(d(467)):Error(d(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},De===null?V.memoizedState=De=e:De=De.next=e}return De}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,hl===null&&(hl=[]),e=_f(hl,e,t),t=V,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,h.H=t===null||t.memoizedState===null?Ss:ic),e}function ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===ge)return Xe(e)}throw Error(d(438,String(e)))}function ku(e){var t=null,a=V.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=V.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=li(),V.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Bt;return t.index++,a}function Qt(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=Ae();return Wu(t,oe,e)}function Wu(e,t,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,f=null,g=t,b=!1;do{var E=g.lane&-536870913;if(E!==g.lane?(F&E)===E:(Zt&E)===E){var v=g.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),E===rl&&(b=!0);else if((Zt&v)===v){g=g.next,v===rl&&(b=!0);continue}else E={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},f===null?(c=f=E,u=i):f=f.next=E,V.lanes|=v,ha|=v;E=g.action,qa&&a(i,E),i=g.hasEagerState?g.eagerState:a(i,E)}else v={lane:E,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},f===null?(c=f=v,u=i):f=f.next=v,V.lanes|=E,ha|=E;g=g.next}while(g!==null&&g!==t);if(f===null?u=i:f.next=c,!ft(i,e.memoizedState)&&(_e=!0,b&&(a=fl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=f,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $u(e){var t=Ae(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ft(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function wf(e,t,a){var l=V,n=Ae(),i=ae;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var u=!ft((oe||n).memoizedState,a);if(u&&(n.memoizedState=a,_e=!0),n=n.queue,Pu(Qf.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,pl(9,{destroy:void 0},Zf.bind(null,l,n,a,t),null),he===null)throw Error(d(349));i||(Zt&127)!==0||Xf(l,t,a)}return a}function Xf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=V.updateQueue,t===null?(t=li(),V.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zf(e,t,a,l){t.value=a,t.getSnapshot=l,Vf(t)&&Kf(e)}function Qf(e,t,a){return a(function(){Vf(t)&&Kf(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Kf(e){var t=Oa(e,2);t!==null&&at(t,e,2)}function Fu(e){var t=ke();if(typeof e=="function"){var a=e;if(e=a(),qa){ea(!0);try{a()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function Jf(e,t,a,l){return e.baseState=a,Wu(e,oe,typeof l=="function"?l:Qt)}function nm(e,t,a,l,n){if(ri(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};h.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,kf(t,i)):(i.next=a.next,t.pending=a.next=i)}}function kf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=h.T,u={};h.T=u;try{var c=a(n,l),f=h.S;f!==null&&f(u,c),Wf(e,t,c)}catch(g){Iu(e,t,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),h.T=i}}else try{i=a(n,l),Wf(e,t,i)}catch(g){Iu(e,t,g)}}function Wf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){$f(e,t,l)},function(l){return Iu(e,t,l)}):$f(e,t,a)}function $f(e,t,a){t.status="fulfilled",t.value=a,Ff(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,kf(e,a)))}function Iu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ff(t),t=t.next;while(t!==l)}e.action=null}function Ff(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function Pf(e,t){if(ae){var a=he.formState;if(a!==null){e:{var l=V;if(ae){if(ye){t:{for(var n=ye,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ye=jt(n.nextSibling),l=n.data==="F!";break e}}ia(l)}l=!1}l&&(t=a[0])}}return a=ke(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},a.queue=l,a=ys.bind(null,V,l),l.dispatch=a,l=Fu(!1),i=nc.bind(null,V,!1,l.queue),l=ke(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=nm.bind(null,V,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function es(e){var t=Ae();return ts(t,oe,e)}function ts(e,t,a){if(t=Wu(e,t,If)[0],e=ii(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(u){throw u===sl?Wn:u}else l=t;t=Ae();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(V.flags|=2048,pl(9,{destroy:void 0},im.bind(null,n,a),null)),[l,i,e]}function im(e,t){e.action=t}function as(e){var t=Ae(),a=oe;if(a!==null)return ts(t,a,e);Ae(),t=t.memoizedState,a=Ae();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function pl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=V.updateQueue,t===null&&(t=li(),V.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ls(){return Ae().memoizedState}function ui(e,t,a,l){var n=ke();V.flags|=e,n.memoizedState=pl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ci(e,t,a,l){var n=Ae();l=l===void 0?null:l;var i=n.memoizedState.inst;oe!==null&&l!==null&&Zu(l,oe.memoizedState.deps)?n.memoizedState=pl(t,i,a,l):(V.flags|=e,n.memoizedState=pl(1|t,i,a,l))}function ns(e,t){ui(8390656,8,e,t)}function Pu(e,t){ci(2048,8,e,t)}function um(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=li(),V.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function is(e){var t=Ae().memoizedState;return um({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return ci(4,2,e,t)}function cs(e,t){return ci(4,4,e,t)}function rs(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fs(e,t,a){a=a!=null?a.concat([e]):null,ci(4,4,rs.bind(null,t,e),a)}function ec(){}function ss(e,t){var a=Ae();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Zu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function os(e,t){var a=Ae();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Zu(t,l[1]))return l[0];if(l=e(),qa){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l}function tc(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(F&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=mo(),V.lanes|=e,ha|=e,a)}function ds(e,t,a,l){return ft(a,t)?a:dl.current!==null?(e=tc(e,a,l),ft(e,t)||(_e=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(F&261930)===0?(_e=!0,e.memoizedState=a):(e=mo(),V.lanes|=e,ha|=e,t)}function ms(e,t,a,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=h.T,c={};h.T=c,nc(e,!1,t,a);try{var f=n(),g=h.S;if(g!==null&&g(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=tm(f,l);en(e,t,b,pt(e))}else en(e,t,l,pt(e))}catch(E){en(e,t,{then:function(){},status:"rejected",reason:E},pt())}finally{T.p=i,u!==null&&c.types!==null&&(u.types=c.types),h.T=u}}function cm(){}function ac(e,t,a,l){if(e.tag!==5)throw Error(d(476));var n=hs(e).queue;ms(e,n,t,H,a===null?cm:function(){return ps(e),a(l)})}function hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ps(e){var t=hs(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},pt())}function lc(){return Xe(yn)}function gs(){return Ae().memoizedState}function vs(){return Ae().memoizedState}function rm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=ra(a);var l=fa(t,e,a);l!==null&&(at(l,t,a),Wl(l,t,a)),t={cache:Cu()},e.payload=t;return}t=t.return}}function fm(e,t,a){var l=pt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(e)?bs(t,a):(a=Su(e,t,a,l),a!==null&&(at(a,e,l),xs(a,t,l)))}function ys(e,t,a){var l=pt();en(e,t,a,l)}function en(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ri(e))bs(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,ft(c,u))return Xn(e,t,n,0),he===null&&wn(),!1}catch{}if(a=Su(e,t,n,l),a!==null)return at(a,e,l),xs(a,t,l),!0}return!1}function nc(e,t,a,l){if(l={lane:2,revertLane:Hc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ri(e)){if(t)throw Error(d(479))}else t=Su(e,a,l,2),t!==null&&at(t,e,2)}function ri(e){var t=e.alternate;return e===V||t!==null&&t===V}function bs(e,t){ml=ti=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,jr(e,a)}}var tn={readContext:Xe,use:ni,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};tn.useEffectEvent=Ee;var Ss={readContext:Xe,use:ni,useCallback:function(e,t){return ke().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:ns,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ui(4194308,4,rs.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){ui(4,2,e,t)},useMemo:function(e,t){var a=ke();t=t===void 0?null:t;var l=e();if(qa){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ke();if(a!==void 0){var n=a(t);if(qa){ea(!0);try{a(t)}finally{ea(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=fm.bind(null,V,e),[l.memoizedState,e]},useRef:function(e){var t=ke();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,a=ys.bind(null,V,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ec,useDeferredValue:function(e,t){var a=ke();return tc(a,e,t)},useTransition:function(){var e=Fu(!1);return e=ms.bind(null,V,e.queue,!0,!1),ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=V,n=ke();if(ae){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),he===null)throw Error(d(349));(F&127)!==0||Xf(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,ns(Qf.bind(null,l,i,e),[e]),l.flags|=2048,pl(9,{destroy:void 0},Zf.bind(null,l,i,a,t),null),a},useId:function(){var e=ke(),t=he.identifierPrefix;if(ae){var a=Ct,l=Ot;a=(l&~(1<<32-rt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=am++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lc,useFormState:Pf,useActionState:Pf,useOptimistic:function(e){var t=ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=nc.bind(null,V,!0,a),a.dispatch=t,[e,t]},useMemoCache:ku,useCacheRefresh:function(){return ke().memoizedState=rm.bind(null,V)},useEffectEvent:function(e){var t=ke(),a={impl:e};return t.memoizedState=a,function(){if((re&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},ic={readContext:Xe,use:ni,useCallback:ss,useContext:Xe,useEffect:Pu,useImperativeHandle:fs,useInsertionEffect:us,useLayoutEffect:cs,useMemo:os,useReducer:ii,useRef:ls,useState:function(){return ii(Qt)},useDebugValue:ec,useDeferredValue:function(e,t){var a=Ae();return ds(a,oe.memoizedState,e,t)},useTransition:function(){var e=ii(Qt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:wf,useId:gs,useHostTransitionStatus:lc,useFormState:es,useActionState:es,useOptimistic:function(e,t){var a=Ae();return Jf(a,oe,e,t)},useMemoCache:ku,useCacheRefresh:vs};ic.useEffectEvent=is;var Es={readContext:Xe,use:ni,useCallback:ss,useContext:Xe,useEffect:Pu,useImperativeHandle:fs,useInsertionEffect:us,useLayoutEffect:cs,useMemo:os,useReducer:$u,useRef:ls,useState:function(){return $u(Qt)},useDebugValue:ec,useDeferredValue:function(e,t){var a=Ae();return oe===null?tc(a,e,t):ds(a,oe.memoizedState,e,t)},useTransition:function(){var e=$u(Qt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:wf,useId:gs,useHostTransitionStatus:lc,useFormState:as,useActionState:as,useOptimistic:function(e,t){var a=Ae();return oe!==null?Jf(a,oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:vs};Es.useEffectEvent=is;function uc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:Y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ra(l);n.payload=t,a!=null&&(n.callback=a),t=fa(e,n,l),t!==null&&(at(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ra(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=fa(e,n,l),t!==null&&(at(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=ra(a);l.tag=2,t!=null&&(l.callback=t),t=fa(e,l,a),t!==null&&(at(t,e,a),Wl(t,e,a))}};function zs(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!wl(a,l)||!wl(n,i):!0}function js(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&cc.enqueueReplaceState(t,t.state,null)}function wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=Y({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Ts(e){qn(e)}function Ns(e){console.error(e)}function As(e){qn(e)}function fi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ms(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(e,t,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){fi(e,t)},a}function Ds(e){return e=ra(e),e.tag=3,e}function _s(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ms(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ms(t,a,l),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function sm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&cl(t,a,n,!0),a=ot.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Si():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===$n?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Uc(e,l,n)),!1;case 22:return a.flags|=65536,l===$n?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Uc(e,l,n)),!1}throw Error(d(435,a.tag))}return Uc(e,l,n),Si(),!1}if(ae)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Au&&(e=Error(d(422),{cause:l}),Ql(bt(e,a)))):(l!==Au&&(t=Error(d(423),{cause:l}),Ql(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=rc(e.stateNode,l,n),Yu(e,n),ze!==4&&(ze=2)),!1;var i=Error(d(520),{cause:l});if(i=bt(i,a),sn===null?sn=[i]:sn.push(i),ze!==4&&(ze=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=rc(a.stateNode,l,e),Yu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ds(n),_s(n,e,a,l),Yu(a,n),!1}a=a.return}while(a!==null);return!1}var fc=Error(d(461)),_e=!1;function Ze(e,t,a,l){t.child=e===null?Rf(t,null,a,l):La(t,e.child,a,l)}function Os(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ba(t),l=Qu(e,t,a,u,i,n),c=Vu(),e!==null&&!_e?(Ku(e,t,n),Vt(e,t,n)):(ae&&c&&Tu(t),t.flags|=1,Ze(e,t,l,n),t.child)}function Cs(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Eu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Us(e,t,i,l,n)):(e=Qn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!vc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:wl,a(u,l)&&e.ref===t.ref)return Vt(e,t,n)}return t.flags|=1,e=Lt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(wl(i,l)&&e.ref===t.ref)if(_e=!1,t.pendingProps=l=i,vc(e,n))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Vt(e,t,n)}return sc(e,t,a,l,n)}function Rs(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Bs(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kn(t,i!==null?i.cachePool:null),i!==null?Gf(t,i):qu(),Yf(t);else return l=t.lanes=536870912,Bs(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(kn(t,i.cachePool),Gf(t,i),oa(),t.memoizedState=null):(e!==null&&kn(t,null),qu(),oa());return Ze(e,t,n,a),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bs(e,t,a,l,n){var i=Ru();return i=i===null?null:{parent:Me._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&kn(t,null),qu(),Yf(t),e!==null&&cl(e,t,l,!0),t.childLanes=n,null}function si(e,t){return t=di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hs(e,t,a){return La(t,e.child,null,a),e=si(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function om(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(l.mode==="hidden")return e=si(t,l),t.lanes=536870912,an(null,e);if(Xu(t),(e=ye)?(e=Wo(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Ot,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},a=bf(e),a.return=t,t.child=a,we=t,ye=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return si(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Xu(t),n)if(t.flags&256)t.flags&=-257,t=Hs(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(_e||cl(e,t,a,!1),n=(a&e.childLanes)!==0,_e||n){if(l=he,l!==null&&(u=Tr(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Oa(e,u),at(l,e,u),fc;Si(),t=Hs(e,t,a)}else e=i.treeContext,ye=jt(u.nextSibling),we=t,ae=!0,na=null,Et=!1,e!==null&&Ef(t,e),t=si(t,l),t.flags|=4096;return t}return e=Lt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function sc(e,t,a,l,n){return Ba(t),a=Qu(e,t,a,l,void 0,n),l=Vu(),e!==null&&!_e?(Ku(e,t,n),Vt(e,t,n)):(ae&&l&&Tu(t),t.flags|=1,Ze(e,t,a,n),t.child)}function Gs(e,t,a,l,n,i){return Ba(t),t.updateQueue=null,a=qf(t,l,a,n),Lf(e),l=Vu(),e!==null&&!_e?(Ku(e,t,i),Vt(e,t,i)):(ae&&l&&Tu(t),t.flags|=1,Ze(e,t,a,i),t.child)}function Ys(e,t,a,l,n){if(Ba(t),t.stateNode===null){var i=ll,u=a.contextType;typeof u=="object"&&u!==null&&(i=Xe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Hu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Xe(u):ll,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(uc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&cc.enqueueReplaceState(i,i.state,null),Fl(t,l,i,n),$l(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,f=wa(a,c);i.props=f;var g=i.context,b=a.contextType;u=ll,typeof b=="object"&&b!==null&&(u=Xe(b));var E=a.getDerivedStateFromProps;b=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&js(t,i,l,u),ca=!1;var v=t.memoizedState;i.state=v,Fl(t,l,i,n),$l(),g=t.memoizedState,c||v!==g||ca?(typeof E=="function"&&(uc(t,a,E,l),g=t.memoizedState),(f=ca||zs(t,a,f,l,v,g,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=g),i.props=l,i.state=g,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Gu(e,t),u=t.memoizedProps,b=wa(a,u),i.props=b,E=t.pendingProps,v=i.context,g=a.contextType,f=ll,typeof g=="object"&&g!==null&&(f=Xe(g)),c=a.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==E||v!==f)&&js(t,i,l,f),ca=!1,v=t.memoizedState,i.state=v,Fl(t,l,i,n),$l();var y=t.memoizedState;u!==E||v!==y||ca||e!==null&&e.dependencies!==null&&Kn(e.dependencies)?(typeof c=="function"&&(uc(t,a,c,l),y=t.memoizedState),(b=ca||zs(t,a,b,l,v,y,f)||e!==null&&e.dependencies!==null&&Kn(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=f,l=b):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,oi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=La(t,e.child,null,n),t.child=La(t,null,a,n)):Ze(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Vt(e,t,n),e}function Ls(e,t,a,l){return Ua(),t.flags|=256,Ze(e,t,a,l),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(e){return{baseLanes:e,cachePool:Mf()}}function mc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ht),e}function qs(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(n?sa(t):oa(),(e=ye)?(e=Wo(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:Ot,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},a=bf(e),a.return=t,t.child=a,we=t,ye=null)):e=null,e===null)throw ia(t);return Wc(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(oa(),n=t.mode,c=di({mode:"hidden",children:c},n),l=Ca(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=dc(a),l.childLanes=mc(e,u,a),t.memoizedState=oc,an(null,l)):(sa(t),hc(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)t.flags&256?(sa(t),t.flags&=-257,t=pc(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),c=l.fallback,n=t.mode,l=di({mode:"visible",children:l.children},n),c=Ca(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,La(t,e.child,null,a),l=t.child,l.memoizedState=dc(a),l.childLanes=mc(e,u,a),t.memoizedState=oc,t=an(null,l));else if(sa(t),Wc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(d(419)),l.stack="",l.digest=u,Ql({value:l,source:null,stack:null}),t=pc(e,t,a)}else if(_e||cl(e,t,a,!1),u=(a&e.childLanes)!==0,_e||u){if(u=he,u!==null&&(l=Tr(u,a),l!==0&&l!==f.retryLane))throw f.retryLane=l,Oa(e,l),at(u,e,l),fc;kc(c)||Si(),t=pc(e,t,a)}else kc(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,ye=jt(c.nextSibling),we=t,ae=!0,na=null,Et=!1,e!==null&&Ef(t,e),t=hc(t,l.children),t.flags|=4096);return t}return n?(oa(),c=l.fallback,n=t.mode,f=e.child,g=f.sibling,l=Lt(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,g!==null?c=Lt(g,c):(c=Ca(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,an(null,l),l=t.child,c=e.child.memoizedState,c===null?c=dc(a):(n=c.cachePool,n!==null?(f=Me._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Mf(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=mc(e,u,a),t.memoizedState=oc,an(e.child,l)):(sa(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function hc(e,t){return t=di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function di(e,t){return e=st(22,e,null,t),e.lanes=0,e}function pc(e,t,a){return La(t,e.child,null,a),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ws(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_u(e.return,t,a)}function gc(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Xs(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Ne.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,A(Ne,u),Ze(e,t,l,a),l=ae?Zl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ws(e,a,t);else if(e.tag===19)ws(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),gc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}gc(t,!0,a,null,i,l);break;case"together":gc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kn(e)))}function dm(e,t,a){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),ua(t,Me,e.memoizedState.cache),Ua();break;case 27:case 5:Ml(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qs(e,t,a):(sa(t),e=Vt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(cl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Xs(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(Ne,Ne.current),l)break;return null;case 22:return t.lanes=0,Rs(e,t,a,t.pendingProps);case 24:ua(t,Me,e.memoizedState.cache)}return Vt(e,t,a)}function Zs(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!vc(e,a)&&(t.flags&128)===0)return _e=!1,dm(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,ae&&(t.flags&1048576)!==0&&Sf(t,Zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")Eu(e)?(l=wa(e,l),t.tag=1,t=Ys(null,t,e,l,a)):(t.tag=0,t=sc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Re){t.tag=11,t=Os(null,t,e,l,a);break e}else if(n===w){t.tag=14,t=Cs(null,t,e,l,a);break e}}throw t=Nt(e)||e,Error(d(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=wa(l,t.pendingProps),Ys(e,t,l,n,a);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Gu(e,t),Fl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ua(t,Me,l),l!==i.cache&&Ou(t,[Me],a,!0),$l(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ls(e,t,l,a);break e}else if(l!==n){n=bt(Error(d(424)),t),Ql(n),t=Ls(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ye=jt(e.firstChild),we=t,ae=!0,na=null,Et=!0,a=Rf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ua(),l===n){t=Vt(e,t,a);break e}Ze(e,t,l,a)}t=t.child}return t;case 26:return oi(e,t),e===null?(a=td(t.type,null,t.pendingProps,null))?t.memoizedState=a:ae||(a=t.type,e=t.pendingProps,l=Mi(K.current).createElement(a),l[qe]=t,l[$e]=e,Qe(l,a,e),He(l),t.stateNode=l):t.memoizedState=td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ml(t),e===null&&ae&&(l=t.stateNode=Io(t.type,t.pendingProps,K.current),we=t,Et=!0,n=ye,ba(t.type)?($c=n,ye=jt(l.firstChild)):ye=n),Ze(e,t,t.pendingProps.children,a),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((n=l=ye)&&(l=Xm(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,we=t,ye=jt(l.firstChild),Et=!1,n=!0):n=!1),n||ia(t)),Ml(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Vc(n,i)?l=null:u!==null&&Vc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Qu(e,t,lm,null,null,a),yn._currentValue=n),oi(e,t),Ze(e,t,l,a),t.child;case 6:return e===null&&ae&&((e=a=ye)&&(a=Zm(a,t.pendingProps,Et),a!==null?(t.stateNode=a,we=t,ye=null,e=!0):e=!1),e||ia(t)),null;case 13:return qs(e,t,a);case 4:return Be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=La(t,null,l,a):Ze(e,t,l,a),t.child;case 11:return Os(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ua(t,t.type,l.value),Ze(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ba(t),n=Xe(n),l=l(n),t.flags|=1,Ze(e,t,l,a),t.child;case 14:return Cs(e,t,t.type,t.pendingProps,a);case 15:return Us(e,t,t.type,t.pendingProps,a);case 19:return Xs(e,t,a);case 31:return om(e,t,a);case 22:return Rs(e,t,a,t.pendingProps);case 24:return Ba(t),l=Xe(Me),e===null?(n=Ru(),n===null&&(n=he,i=Cu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Hu(t),ua(t,Me,n)):((e.lanes&a)!==0&&(Gu(e,t),Fl(t,null,null,a),$l()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ua(t,Me,l)):(l=i.cache,ua(t,Me,l),l!==n.cache&&Ou(t,[Me],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Kt(e){e.flags|=4}function yc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(vo())e.flags|=8192;else throw Ya=$n,Bu}else e.flags&=-16777217}function Qs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ud(t))if(vo())e.flags|=8192;else throw Ya=$n,Bu}function mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Er():536870912,e.lanes|=t,bl|=t)}function ln(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function mm(e,t,a){var l=t.pendingProps;switch(Nu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(Me),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ul(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mu())),be(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Kt(t),i!==null?(be(t),Qs(t,i)):(be(t),yc(t,n,null,l,a))):i?i!==e.memoizedState?(Kt(t),be(t),Qs(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Kt(t),be(t),yc(t,n,e,l,a)),null;case 27:if(jn(t),a=K.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Kt(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return be(t),null}e=D.current,ul(t)?zf(t):(e=Io(n,l,a),t.stateNode=e,Kt(t))}return be(t),null;case 5:if(jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Kt(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return be(t),null}if(i=D.current,ul(t))zf(t);else{var u=Mi(K.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[qe]=t,i[$e]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Qe(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Kt(t)}}return be(t),yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=K.current,ul(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=we,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||wo(e.nodeValue,a)),e||ia(t,!0)}else e=Mi(e).createTextNode(l),e[qe]=t,t.stateNode=e}return be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ul(t),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[qe]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ul(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[qe]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),n=!1}else n=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),mi(t,t.updateQueue),be(t),null);case 4:return Te(),e===null&&qc(t.stateNode.containerInfo),be(t),null;case 10:return Xt(t.type),be(t),null;case 19:if(x(Ne),l=t.memoizedState,l===null)return be(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)ln(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ei(e),i!==null){for(t.flags|=128,ln(l,!1),e=i.updateQueue,t.updateQueue=e,mi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)yf(a,e),a=a.sibling;return A(Ne,Ne.current&1|2),ae&&qt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ut()>yi&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304)}else{if(!n)if(e=ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,mi(t,e),ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return be(t),null}else 2*ut()-l.renderingStartTime>yi&&a!==536870912&&(t.flags|=128,n=!0,ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ut(),e.sibling=null,a=Ne.current,A(Ne,n?a&1|2:a&1),ae&&qt(t,l.treeForkCount),e):(be(t),null);case 22:case 23:return dt(t),wu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),a=t.updateQueue,a!==null&&mi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&x(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(Me),be(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function hm(e,t){switch(Nu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(Me),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jn(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(d(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return x(Ne),null;case 4:return Te(),null;case 10:return Xt(t.type),null;case 22:case 23:return dt(t),wu(),e!==null&&x(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(Me),null;case 25:return null;default:return null}}function Vs(e,t){switch(Nu(t),t.tag){case 3:Xt(Me),Te();break;case 26:case 27:case 5:jn(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:x(Ne);break;case 10:Xt(t.type);break;case 22:case 23:dt(t),wu(),e!==null&&x(Ha);break;case 24:Xt(Me)}}function nn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){se(t,t.return,c)}}function da(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var f=a,g=c;try{g()}catch(b){se(n,f,b)}}}l=l.next}while(l!==i)}}catch(b){se(t,t.return,b)}}function Ks(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hf(t,a)}catch(l){se(e,e.return,l)}}}function Js(e,t,a){a.props=wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){se(e,t,l)}}function un(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){se(e,t,n)}}function Ut(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){se(e,t,n)}else a.current=null}function ks(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){se(e,e.return,n)}}function bc(e,t,a){try{var l=e.stateNode;Hm(l,e.type,a,t),l[$e]=t}catch(n){se(e,e.return,n)}}function Ws(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ws(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&ba(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function hi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(hi(e,t,a),e=e.sibling;e!==null;)hi(e,t,a),e=e.sibling}function $s(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qe(t,l,a),t[qe]=e,t[$e]=a}catch(i){se(e,e.return,i)}}var Jt=!1,Oe=!1,Ec=!1,Fs=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function pm(e,t){if(e=e.containerInfo,Zc=Bi,e=ff(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,c=-1,f=-1,g=0,b=0,E=e,v=null;t:for(;;){for(var y;E!==a||n!==0&&E.nodeType!==3||(c=u+n),E!==i||l!==0&&E.nodeType!==3||(f=u+l),E.nodeType===3&&(u+=E.nodeValue.length),(y=E.firstChild)!==null;)v=E,E=y;for(;;){if(E===e)break t;if(v===a&&++g===n&&(c=u),v===i&&++b===l&&(f=u),(y=E.nextSibling)!==null)break;E=v,v=E.parentNode}E=y}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},Bi=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var C=wa(a.type,n);e=l.getSnapshotBeforeUpdate(C,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(q){se(a,a.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Jc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Is(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wt(e,a),l&4&&nn(5,a);break;case 1:if(Wt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){se(a,a.return,u)}else{var n=wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){se(a,a.return,u)}}l&64&&Ks(a),l&512&&un(a,a.return);break;case 3:if(Wt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hf(e,t)}catch(u){se(a,a.return,u)}}break;case 27:t===null&&l&4&&$s(a);case 26:case 5:Wt(e,a),t===null&&l&4&&ks(a),l&512&&un(a,a.return);break;case 12:Wt(e,a);break;case 31:Wt(e,a),l&4&&to(e,a);break;case 13:Wt(e,a),l&4&&ao(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jm.bind(null,a),Qm(e,a))));break;case 22:if(l=a.memoizedState!==null||Jt,!l){t=t!==null&&t.memoizedState!==null||Oe,n=Jt;var i=Oe;Jt=l,(Oe=t)&&!i?$t(e,a,(a.subtreeFlags&8772)!==0):Wt(e,a),Jt=n,Oe=i}break;case 30:break;default:Wt(e,a)}}function Ps(e){var t=e.alternate;t!==null&&(e.alternate=null,Ps(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ii(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,Ie=!1;function kt(e,t,a){for(a=a.child;a!==null;)eo(e,t,a),a=a.sibling}function eo(e,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Oe||Ut(a,t),kt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Oe||Ut(a,t);var l=xe,n=Ie;ba(a.type)&&(xe=a.stateNode,Ie=!1),kt(e,t,a),pn(a.stateNode),xe=l,Ie=n;break;case 5:Oe||Ut(a,t);case 6:if(l=xe,n=Ie,xe=null,kt(e,t,a),xe=l,Ie=n,xe!==null)if(Ie)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(a.stateNode)}catch(i){se(a,t,i)}else try{xe.removeChild(a.stateNode)}catch(i){se(a,t,i)}break;case 18:xe!==null&&(Ie?(e=xe,Jo(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Al(e)):Jo(xe,a.stateNode));break;case 4:l=xe,n=Ie,xe=a.stateNode.containerInfo,Ie=!0,kt(e,t,a),xe=l,Ie=n;break;case 0:case 11:case 14:case 15:da(2,a,t),Oe||da(4,a,t),kt(e,t,a);break;case 1:Oe||(Ut(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Js(a,t,l)),kt(e,t,a);break;case 21:kt(e,t,a);break;case 22:Oe=(l=Oe)||a.memoizedState!==null,kt(e,t,a),Oe=l;break;default:kt(e,t,a)}}function to(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(a){se(t,t.return,a)}}}function ao(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(a){se(t,t.return,a)}}function gm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fs),t;default:throw Error(d(435,e.tag))}}function pi(e,t){var a=gm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Tm.bind(null,e,l);l.then(n,n)}})}function Pe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(ba(c.type)){xe=c.stateNode,Ie=!1;break e}break;case 5:xe=c.stateNode,Ie=!1;break e;case 3:case 4:xe=c.stateNode.containerInfo,Ie=!0;break e}c=c.return}if(xe===null)throw Error(d(160));eo(i,u,n),xe=null,Ie=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lo(t,e),t=t.sibling}var Mt=null;function lo(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pe(t,e),et(e),l&4&&(da(3,e,e.return),nn(3,e),da(5,e,e.return));break;case 1:Pe(t,e),et(e),l&512&&(Oe||a===null||Ut(a,a.return)),l&64&&Jt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Mt;if(Pe(t,e),et(e),l&512&&(Oe||a===null||Ut(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cl]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Qe(i,l,a),i[qe]=e,He(i),l=i;break e;case"link":var u=nd("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(l),Qe(i,l,a),n.head.appendChild(i);break;case"meta":if(u=nd("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break t}}i=n.createElement(l),Qe(i,l,a),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[qe]=e,He(i),l=i}e.stateNode=l}else id(n,e.type,e.stateNode);else e.stateNode=ld(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?id(n,e.type,e.stateNode):ld(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&bc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pe(t,e),et(e),l&512&&(Oe||a===null||Ut(a,a.return)),a!==null&&l&4&&bc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pe(t,e),et(e),l&512&&(Oe||a===null||Ut(a,a.return)),e.flags&32){n=e.stateNode;try{$a(n,"")}catch(C){se(e,e.return,C)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,bc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ec=!0);break;case 6:if(Pe(t,e),et(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(C){se(e,e.return,C)}}break;case 3:if(Oi=null,n=Mt,Mt=Di(t.containerInfo),Pe(t,e),Mt=n,et(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(C){se(e,e.return,C)}Ec&&(Ec=!1,no(e));break;case 4:l=Mt,Mt=Di(e.stateNode.containerInfo),Pe(t,e),et(e),Mt=l;break;case 12:Pe(t,e),et(e);break;case 31:Pe(t,e),et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 13:Pe(t,e),et(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 22:n=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,g=Jt,b=Oe;if(Jt=g||n,Oe=b||f,Pe(t,e),Oe=b,Jt=g,et(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||f||Jt||Oe||Xa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var E=f.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(C){se(f,f.return,C)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(C){se(f,f.return,C)}}}else if(t.tag===18){if(a===null){f=t;try{var y=f.stateNode;n?ko(y,!0):ko(f.stateNode,!1)}catch(C){se(f,f.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,pi(e,a))));break;case 19:Pe(t,e),et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pi(e,l)));break;case 30:break;case 21:break;default:Pe(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ws(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,i=xc(e);hi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&($a(u,""),a.flags&=-33);var c=xc(e);hi(e,c,u);break;case 3:case 4:var f=a.stateNode.containerInfo,g=xc(e);Sc(e,g,f);break;default:throw Error(d(161))}}catch(b){se(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function no(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;no(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Is(e,t.alternate,t),t=t.sibling}function Xa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Xa(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Js(t,t.return,a),Xa(t);break;case 27:pn(t.stateNode);case 26:case 5:Ut(t,t.return),Xa(t);break;case 22:t.memoizedState===null&&Xa(t);break;case 30:Xa(t);break;default:Xa(t)}e=e.sibling}}function $t(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:$t(n,i,a),nn(4,i);break;case 1:if($t(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){se(l,l.return,g)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Bf(f[n],c)}catch(g){se(l,l.return,g)}}a&&u&64&&Ks(i),un(i,i.return);break;case 27:$s(i);case 26:case 5:$t(n,i,a),a&&l===null&&u&4&&ks(i),un(i,i.return);break;case 12:$t(n,i,a);break;case 31:$t(n,i,a),a&&u&4&&to(n,i);break;case 13:$t(n,i,a),a&&u&4&&ao(n,i);break;case 22:i.memoizedState===null&&$t(n,i,a),un(i,i.return);break;case 30:break;default:$t(n,i,a)}t=t.sibling}}function zc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vl(a))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)io(e,t,a,l),t=t.sibling}function io(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&nn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){se(t,t.return,f)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,l):cn(e,t):i._visibility&2?Dt(e,t,a,l):(i._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&zc(u,t);break;case 24:Dt(e,t,a,l),n&2048&&jc(t.alternate,t);break;default:Dt(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=a,f=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,c,f,n),nn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?gl(i,u,c,f,n):cn(i,u):(b._visibility|=2,gl(i,u,c,f,n)),n&&g&2048&&zc(u.alternate,u);break;case 24:gl(i,u,c,f,n),n&&g&2048&&jc(u.alternate,u);break;default:gl(i,u,c,f,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:cn(a,l),n&2048&&zc(l.alternate,l);break;case 24:cn(a,l),n&2048&&jc(l.alternate,l);break;default:cn(a,l)}t=t.sibling}}var rn=8192;function vl(e,t,a){if(e.subtreeFlags&rn)for(e=e.child;e!==null;)uo(e,t,a),e=e.sibling}function uo(e,t,a){switch(e.tag){case 26:vl(e,t,a),e.flags&rn&&e.memoizedState!==null&&a1(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:vl(e,t,a);break;case 3:case 4:var l=Mt;Mt=Di(e.stateNode.containerInfo),vl(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=rn,rn=16777216,vl(e,t,a),rn=l):vl(e,t,a));break;default:vl(e,t,a)}}function co(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,fo(l,e)}co(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ro(e),e=e.sibling}function ro(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&da(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gi(e)):fn(e);break;default:fn(e)}}function gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,fo(l,e)}co(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),gi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,gi(t));break;default:gi(t)}e=e.sibling}}function fo(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var n=l.sibling,i=l.return;if(Ps(l),l===a){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var vm={getCacheForType:function(e){var t=Xe(Me),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(Me).controller.signal}},ym=typeof WeakMap=="function"?WeakMap:Map,re=0,he=null,W=null,F=0,fe=0,mt=null,ma=!1,yl=!1,Tc=!1,Ft=0,ze=0,ha=0,Za=0,Nc=0,ht=0,bl=0,sn=null,tt=null,Ac=!1,vi=0,so=0,yi=1/0,bi=null,pa=null,Ue=0,ga=null,xl=null,It=0,Mc=0,Dc=null,oo=null,on=0,_c=null;function pt(){return(re&2)!==0&&F!==0?F&-F:h.T!==null?Hc():Nr()}function mo(){if(ht===0)if((F&536870912)===0||ae){var e=An;An<<=1,(An&3932160)===0&&(An=262144),ht=e}else ht=536870912;return e=ot.current,e!==null&&(e.flags|=32),ht}function at(e,t,a){(e===he&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),va(e,F,ht,!1)),Ol(e,a),((re&2)===0||e!==he)&&(e===he&&((re&2)===0&&(Za|=a),ze===4&&va(e,F,ht,!1)),Rt(e))}function ho(e,t,a){if((re&6)!==0)throw Error(d(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||_l(e,t),n=l?Sm(e,t):Cc(e,t,!0),i=l;do{if(n===0){yl&&!l&&va(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!bm(a)){n=Cc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=sn;var f=c.current.memoizedState.isDehydrated;if(f&&(Sl(c,u).flags|=256),u=Cc(c,u,!1),u!==2){if(Tc&&!f){c.errorRecoveryDisabledLanes|=i,Za|=i,n=4;break e}i=tt,tt=n,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),va(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:va(l,t,ht,!ma);break e;case 2:tt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=vi+300-ut(),10<n)){if(va(l,t,ht,!ma),Dn(l,0,!0)!==0)break e;It=t,l.timeoutHandle=Vo(po.bind(null,l,a,tt,bi,Ac,t,ht,Za,bl,ma,i,"Throttled",-0,0),n);break e}po(l,a,tt,bi,Ac,t,ht,Za,bl,ma,i,null,-0,0)}}break}while(!0);Rt(e)}function po(e,t,a,l,n,i,u,c,f,g,b,E,v,y){if(e.timeoutHandle=-1,E=t.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},uo(t,i,E);var C=(i&62914560)===i?vi-ut():(i&4194048)===i?so-ut():0;if(C=l1(E,C),C!==null){It=i,e.cancelPendingCommit=C(zo.bind(null,e,t,i,a,l,n,u,c,f,b,E,null,v,y)),va(e,i,u,!g);return}}zo(e,t,i,a,l,n,u,c,f)}function bm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ft(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,l){t&=~Nc,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-rt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&zr(e,a,t)}function xi(){return(re&6)===0?(dn(0),!1):!0}function Oc(){if(W!==null){if(fe===0)var e=W.return;else e=W,wt=Ra=null,Ju(e),ol=null,Jl=0,e=W;for(;e!==null;)Vs(e.alternate,e),e=e.return;W=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Lm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),It=0,Oc(),he=e,W=a=Lt(e.current,null),F=t,fe=0,mt=null,ma=!1,yl=_l(e,t),Tc=!1,bl=ht=Nc=Za=ha=ze=0,tt=sn=null,Ac=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-rt(l),i=1<<n;t|=e[n],l&=~i}return Ft=t,wn(),a}function go(e,t){V=null,h.H=tn,t===sl||t===Wn?(t=Of(),fe=3):t===Bu?(t=Of(),fe=4):fe=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,W===null&&(ze=1,fi(e,bt(t,e.current)))}function vo(){var e=ot.current;return e===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?e===zt:!1}function yo(){var e=h.H;return h.H=tn,e===null?tn:e}function bo(){var e=h.A;return h.A=vm,e}function Si(){ze=4,ma||(F&4194048)!==F&&ot.current!==null||(yl=!0),(ha&134217727)===0&&(Za&134217727)===0||he===null||va(he,F,ht,!1)}function Cc(e,t,a){var l=re;re|=2;var n=yo(),i=bo();(he!==e||F!==t)&&(bi=null,Sl(e,t)),t=!1;var u=ze;e:do try{if(fe!==0&&W!==null){var c=W,f=mt;switch(fe){case 8:Oc(),u=6;break e;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var g=fe;if(fe=0,mt=null,El(e,c,f,g),a&&yl){u=0;break e}break;default:g=fe,fe=0,mt=null,El(e,c,f,g)}}xm(),u=ze;break}catch(b){go(e,b)}while(!0);return t&&e.shellSuspendCounter++,wt=Ra=null,re=l,h.H=n,h.A=i,W===null&&(he=null,F=0,wn()),u}function xm(){for(;W!==null;)xo(W)}function Sm(e,t){var a=re;re|=2;var l=yo(),n=bo();he!==e||F!==t?(bi=null,yi=ut()+500,Sl(e,t)):yl=_l(e,t);e:do try{if(fe!==0&&W!==null){t=W;var i=mt;t:switch(fe){case 1:fe=0,mt=null,El(e,t,i,1);break;case 2:case 9:if(Df(i)){fe=0,mt=null,So(t);break}t=function(){fe!==2&&fe!==9||he!==e||(fe=7),Rt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Df(i)?(fe=0,mt=null,So(t)):(fe=0,mt=null,El(e,t,i,7));break;case 5:var u=null;switch(W.tag){case 26:u=W.memoizedState;case 5:case 27:var c=W;if(u?ud(u):c.stateNode.complete){fe=0,mt=null;var f=c.sibling;if(f!==null)W=f;else{var g=c.return;g!==null?(W=g,Ei(g)):W=null}break t}}fe=0,mt=null,El(e,t,i,5);break;case 6:fe=0,mt=null,El(e,t,i,6);break;case 8:Oc(),ze=6;break e;default:throw Error(d(462))}}Em();break}catch(b){go(e,b)}while(!0);return wt=Ra=null,h.H=l,h.A=n,re=a,W!==null?0:(he=null,F=0,wn(),ze)}function Em(){for(;W!==null&&!Vd();)xo(W)}function xo(e){var t=Zs(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Ei(e):W=t}function So(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gs(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Gs(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Ju(t);default:Vs(a,t),t=W=yf(t,Ft),t=Zs(a,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Ei(e):W=t}function El(e,t,a,l){wt=Ra=null,Ju(t),ol=null,Jl=0;var n=t.return;try{if(sm(e,n,t,a,F)){ze=1,fi(e,bt(a,e.current)),W=null;return}}catch(i){if(n!==null)throw W=n,i;ze=1,fi(e,bt(a,e.current)),W=null;return}t.flags&32768?(ae||l===1?e=!0:yl||(F&536870912)!==0?e=!1:(ma=e=!0,(l===2||l===9||l===3||l===6)&&(l=ot.current,l!==null&&l.tag===13&&(l.flags|=16384))),Eo(t,e)):Ei(t)}function Ei(e){var t=e;do{if((t.flags&32768)!==0){Eo(t,ma);return}e=t.return;var a=mm(t.alternate,t,Ft);if(a!==null){W=a;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);ze===0&&(ze=5)}function Eo(e,t){do{var a=hm(e.alternate,e);if(a!==null){a.flags&=32767,W=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=a}while(e!==null);ze=6,W=null}function zo(e,t,a,l,n,i,u,c,f){e.cancelPendingCommit=null;do zi();while(Ue!==0);if((re&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=xu,t0(e,a,i,u,c,f),e===he&&(W=he=null,F=0),xl=t,ga=e,It=a,Mc=i,Dc=n,oo=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Nm(Tn,function(){return Mo(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=h.T,h.T=null,n=T.p,T.p=2,u=re,re|=4;try{pm(e,t,a)}finally{re=u,T.p=n,h.T=l}}Ue=1,jo(),To(),No()}}function jo(){if(Ue===1){Ue=0;var e=ga,t=xl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=h.T,h.T=null;var l=T.p;T.p=2;var n=re;re|=4;try{lo(t,e);var i=Qc,u=ff(e.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&rf(c.ownerDocument.documentElement,c)){if(f!==null&&pu(c)){var g=f.start,b=f.end;if(b===void 0&&(b=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(b,c.value.length);else{var E=c.ownerDocument||document,v=E&&E.defaultView||window;if(v.getSelection){var y=v.getSelection(),C=c.textContent.length,q=Math.min(f.start,C),me=f.end===void 0?q:Math.min(f.end,C);!y.extend&&q>me&&(u=me,me=q,q=u);var m=cf(c,q),o=cf(c,me);if(m&&o&&(y.rangeCount!==1||y.anchorNode!==m.node||y.anchorOffset!==m.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var p=E.createRange();p.setStart(m.node,m.offset),y.removeAllRanges(),q>me?(y.addRange(p),y.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),y.addRange(p))}}}}for(E=[],y=c;y=y.parentNode;)y.nodeType===1&&E.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var S=E[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Bi=!!Zc,Qc=Zc=null}finally{re=n,T.p=l,h.T=a}}e.current=t,Ue=2}}function To(){if(Ue===2){Ue=0;var e=ga,t=xl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=h.T,h.T=null;var l=T.p;T.p=2;var n=re;re|=4;try{Is(e,t.alternate,t)}finally{re=n,T.p=l,h.T=a}}Ue=3}}function No(){if(Ue===4||Ue===3){Ue=0,Kd();var e=ga,t=xl,a=It,l=oo;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ue=5:(Ue=0,xl=ga=null,Ao(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(pa=null),$i(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=h.T,n=T.p,T.p=2,h.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{h.T=t,T.p=n}}(It&3)!==0&&zi(),Rt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===_c?on++:(on=0,_c=e):on=0,dn(0)}}function Ao(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vl(t)))}function zi(){return jo(),To(),No(),Mo()}function Mo(){if(Ue!==5)return!1;var e=ga,t=Mc;Mc=0;var a=$i(It),l=h.T,n=T.p;try{T.p=32>a?32:a,h.T=null,a=Dc,Dc=null;var i=ga,u=It;if(Ue=0,xl=ga=null,It=0,(re&6)!==0)throw Error(d(331));var c=re;if(re|=4,ro(i.current),io(i,i.current,u,a),re=c,dn(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{T.p=n,h.T=l,Ao(e,t)}}function Do(e,t,a){t=bt(a,t),t=rc(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(Ol(e,2),Rt(e))}function se(e,t,a){if(e.tag===3)Do(e,e,a);else for(;t!==null;){if(t.tag===3){Do(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=bt(a,e),a=Ds(2),l=fa(t,a,2),l!==null&&(_s(a,l,t,e),Ol(l,2),Rt(l));break}}t=t.return}}function Uc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ym;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Tc=!0,n.add(a),e=zm.bind(null,e,t,a),t.then(e,e))}function zm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,he===e&&(F&a)===a&&(ze===4||ze===3&&(F&62914560)===F&&300>ut()-vi?(re&2)===0&&Sl(e,0):Nc|=a,bl===F&&(bl=0)),Rt(e)}function _o(e,t){t===0&&(t=Er()),e=Oa(e,t),e!==null&&(Ol(e,t),Rt(e))}function jm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),_o(e,a)}function Tm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),_o(e,a)}function Nm(e,t){return Ki(e,t)}var ji=null,zl=null,Rc=!1,Ti=!1,Bc=!1,ya=0;function Rt(e){e!==zl&&e.next===null&&(zl===null?ji=zl=e:zl=zl.next=e),Ti=!0,Rc||(Rc=!0,Mm())}function dn(e,t){if(!Bc&&Ti){Bc=!0;do for(var a=!1,l=ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Ro(l,i))}else i=F,i=Dn(l,l===he?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||_l(l,i)||(a=!0,Ro(l,i));l=l.next}while(a);Bc=!1}}function Am(){Oo()}function Oo(){Ti=Rc=!1;var e=0;ya!==0&&Ym()&&(e=ya);for(var t=ut(),a=null,l=ji;l!==null;){var n=l.next,i=Co(l,t);i===0?(l.next=null,a===null?ji=n:a.next=n,n===null&&(zl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ti=!0)),l=n}Ue!==0&&Ue!==5||dn(e),ya!==0&&(ya=0)}function Co(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-rt(i),c=1<<u,f=n[u];f===-1?((c&a)===0||(c&l)!==0)&&(n[u]=e0(c,t)):f<=t&&(e.expiredLanes|=c),i&=~c}if(t=he,a=F,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ji(l),$i(a)){case 2:case 8:a=xr;break;case 32:a=Tn;break;case 268435456:a=Sr;break;default:a=Tn}return l=Uo.bind(null,e),a=Ki(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ji(l),e.callbackPriority=2,e.callbackNode=null,2}function Uo(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zi()&&e.callbackNode!==a)return null;var l=F;return l=Dn(e,e===he?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ho(e,l,t),Co(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Uo.bind(null,e):null)}function Ro(e,t){if(zi())return null;ho(e,t,!0)}function Mm(){qm(function(){(re&6)!==0?Ki(br,Am):Oo()})}function Hc(){if(ya===0){var e=rl;e===0&&(e=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),ya=e}return ya}function Bo(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Un(""+e)}function Ho(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Bo((n[$e]||null).action),u=l.submitter;u&&(t=(t=u[$e]||null)?Bo(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Gn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ya!==0){var f=u?Ho(n,u):new FormData(n);ac(a,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?Ho(n,u):new FormData(n),ac(a,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var Gc=0;Gc<bu.length;Gc++){var Yc=bu[Gc],_m=Yc.toLowerCase(),Om=Yc[0].toUpperCase()+Yc.slice(1);At(_m,"on"+Om)}At(df,"onAnimationEnd"),At(mf,"onAnimationIteration"),At(hf,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(J0,"onTransitionRun"),At(k0,"onTransitionStart"),At(W0,"onTransitionCancel"),At(pf,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Go(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],f=c.instance,g=c.currentTarget;if(c=c.listener,f!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=g;try{i(n)}catch(b){qn(b)}n.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(c=l[u],f=c.instance,g=c.currentTarget,c=c.listener,f!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=g;try{i(n)}catch(b){qn(b)}n.currentTarget=null,i=f}}}}function $(e,t){var a=t[Fi];a===void 0&&(a=t[Fi]=new Set);var l=e+"__bubble";a.has(l)||(Yo(t,e,2,!1),a.add(l))}function Lc(e,t,a){var l=0;t&&(l|=4),Yo(a,e,l,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function qc(e){if(!e[Ni]){e[Ni]=!0,Dr.forEach(function(a){a!=="selectionchange"&&(Cm.has(a)||Lc(a,!1,e),Lc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Lc("selectionchange",!1,t))}}function Yo(e,t,a,l){switch(md(t)){case 2:var n=u1;break;case 8:n=c1;break;default:n=tr}a=n.bind(null,t,a,e),n=void 0,!uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function wc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Va(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue e}c=c.parentNode}}l=l.return}wr(function(){var g=i,b=nu(a),E=[];e:{var v=gf.get(e);if(v!==void 0){var y=Gn,C=e;switch(e){case"keypress":if(Bn(a)===0)break e;case"keydown":case"keyup":y=T0;break;case"focusin":C="focus",y=su;break;case"focusout":C="blur",y=su;break;case"beforeblur":case"afterblur":y=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Qr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=M0;break;case df:case mf:case hf:y=g0;break;case pf:y=_0;break;case"scroll":case"scrollend":y=o0;break;case"wheel":y=C0;break;case"copy":case"cut":case"paste":y=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kr;break;case"toggle":case"beforetoggle":y=R0}var q=(t&4)!==0,me=!q&&(e==="scroll"||e==="scrollend"),m=q?v!==null?v+"Capture":null:v;q=[];for(var o=g,p;o!==null;){var S=o;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||m===null||(S=Rl(o,m),S!=null&&q.push(hn(o,S,p))),me)break;o=o.return}0<q.length&&(v=new y(v,C,null,a,b),E.push({event:v,listeners:q}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&a!==lu&&(C=a.relatedTarget||a.fromElement)&&(Va(C)||C[Qa]))break e;if((y||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,y?(C=a.relatedTarget||a.toElement,y=g,C=C?Va(C):null,C!==null&&(me=N(C),q=C.tag,C!==me||q!==5&&q!==27&&q!==6)&&(C=null)):(y=null,C=g),y!==C)){if(q=Qr,S="onMouseLeave",m="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(q=Kr,S="onPointerLeave",m="onPointerEnter",o="pointer"),me=y==null?v:Ul(y),p=C==null?v:Ul(C),v=new q(S,o+"leave",y,a,b),v.target=me,v.relatedTarget=p,S=null,Va(b)===g&&(q=new q(m,o+"enter",C,a,b),q.target=p,q.relatedTarget=me,S=q),me=S,y&&C)t:{for(q=Um,m=y,o=C,p=0,S=m;S;S=q(S))p++;S=0;for(var L=o;L;L=q(L))S++;for(;0<p-S;)m=q(m),p--;for(;0<S-p;)o=q(o),S--;for(;p--;){if(m===o||o!==null&&m===o.alternate){q=m;break t}m=q(m),o=q(o)}q=null}else q=null;y!==null&&Lo(E,v,y,q,!1),C!==null&&me!==null&&Lo(E,me,C,q,!0)}}e:{if(v=g?Ul(g):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var ue=ef;else if(Ir(v))if(tf)ue=Q0;else{ue=X0;var R=w0}else y=v.nodeName,!y||y.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&au(g.elementType)&&(ue=ef):ue=Z0;if(ue&&(ue=ue(e,g))){Pr(E,ue,a,b);break e}R&&R(e,v,g),e==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&tu(v,"number",v.value)}switch(R=g?Ul(g):window,e){case"focusin":(Ir(R)||R.contentEditable==="true")&&(el=R,gu=g,Xl=null);break;case"focusout":Xl=gu=el=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,sf(E,a,b);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":sf(E,a,b)}var J;if(du)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pa?$r(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Jr&&a.locale!=="ko"&&(Pa||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pa&&(J=Xr()):(aa=b,cu="value"in aa?aa.value:aa.textContent,Pa=!0)),R=Ai(g,I),0<R.length&&(I=new Vr(I,e,null,a,b),E.push({event:I,listeners:R}),J?I.data=J:(J=Fr(a),J!==null&&(I.data=J)))),(J=H0?G0(e,a):Y0(e,a))&&(I=Ai(g,"onBeforeInput"),0<I.length&&(R=new Vr("onBeforeInput","beforeinput",null,a,b),E.push({event:R,listeners:I}),R.data=J)),Dm(E,e,g,a,b)}Go(E,t)})}function hn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ai(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Rl(e,a),n!=null&&l.unshift(hn(e,n,i)),n=Rl(e,t),n!=null&&l.push(hn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Um(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lo(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var c=a,f=c.alternate,g=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||g===null||(f=g,n?(g=Rl(a,i),g!=null&&u.unshift(hn(a,g,f))):n||(g=Rl(a,i),g!=null&&u.push(hn(a,g,f)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Rm=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function qo(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace(Bm,"")}function wo(e,t){return t=qo(t),qo(e)===t}function de(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||$a(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&$a(e,""+l);break;case"className":On(e,"class",l);break;case"tabIndex":On(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":On(e,a,l);break;case"style":Lr(e,l,i);break;case"data":if(t!=="object"){On(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Un(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&de(e,t,"name",n.name,n,null),de(e,t,"formEncType",n.formEncType,n,null),de(e,t,"formMethod",n.formMethod,n,null),de(e,t,"formTarget",n.formTarget,n,null)):(de(e,t,"encType",n.encType,n,null),de(e,t,"method",n.method,n,null),de(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Un(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&$("scroll",e);break;case"onScrollEnd":l!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Un(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":$("beforetoggle",e),$("toggle",e),_n(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_n(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=f0.get(a)||a,_n(e,a,l))}}function Xc(e,t,a,l,n,i){switch(a){case"style":Lr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?$a(e,l):(typeof l=="number"||typeof l=="bigint")&&$a(e,""+l);break;case"onScroll":l!=null&&$("scroll",e);break;case"onScrollEnd":l!=null&&$("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_r.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):_n(e,a,l)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:de(e,t,i,u,a,null)}}n&&de(e,t,"srcSet",a.srcSet,a,null),l&&de(e,t,"src",a.src,a,null);return;case"input":$("invalid",e);var c=i=u=n=null,f=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":u=b;break;case"checked":f=b;break;case"defaultChecked":g=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:de(e,t,l,b,a,null)}}Br(e,i,c,f,g,u,n,!1);return;case"select":$("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:de(e,t,n,c,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Wa(e,!!l,t,!1):a!=null&&Wa(e,!!l,a,!0);return;case"textarea":$("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:de(e,t,u,c,a,null)}Gr(e,l,n,i);return;case"option":for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null)&&(f==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":de(e,t,f,l,a,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)$(mn[l],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:de(e,t,g,l,a,null)}return;default:if(au(t)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Xc(e,t,b,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&de(e,t,c,l,a,null))}function Hm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,f=null,g=null,b=null;for(y in a){var E=a[y];if(a.hasOwnProperty(y)&&E!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=E;default:l.hasOwnProperty(y)||de(e,t,y,null,l,E)}}for(var v in l){var y=l[v];if(E=a[v],l.hasOwnProperty(v)&&(y!=null||E!=null))switch(v){case"type":i=y;break;case"name":n=y;break;case"checked":g=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:y!==E&&de(e,t,v,y,l,E)}}eu(e,u,c,f,g,b,i,n);return;case"select":y=u=c=v=null;for(i in a)if(f=a[i],a.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":y=f;default:l.hasOwnProperty(i)||de(e,t,i,null,l,f)}for(n in l)if(i=l[n],f=a[n],l.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":v=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&de(e,t,n,i,l,f)}t=c,a=u,l=y,v!=null?Wa(e,!!a,v,!1):!!l!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":y=v=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:de(e,t,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":v=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&de(e,t,u,n,l,i)}Hr(e,v,y);return;case"option":for(var C in a)v=a[C],a.hasOwnProperty(C)&&v!=null&&!l.hasOwnProperty(C)&&(C==="selected"?e.selected=!1:de(e,t,C,null,l,v));for(f in l)v=l[f],y=a[f],l.hasOwnProperty(f)&&v!==y&&(v!=null||y!=null)&&(f==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":de(e,t,f,v,l,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in a)v=a[q],a.hasOwnProperty(q)&&v!=null&&!l.hasOwnProperty(q)&&de(e,t,q,null,l,v);for(g in l)if(v=l[g],y=a[g],l.hasOwnProperty(g)&&v!==y&&(v!=null||y!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,t));break;default:de(e,t,g,v,l,y)}return;default:if(au(t)){for(var me in a)v=a[me],a.hasOwnProperty(me)&&v!==void 0&&!l.hasOwnProperty(me)&&Xc(e,t,me,void 0,l,v);for(b in l)v=l[b],y=a[b],!l.hasOwnProperty(b)||v===y||v===void 0&&y===void 0||Xc(e,t,b,v,l,y);return}}for(var m in a)v=a[m],a.hasOwnProperty(m)&&v!=null&&!l.hasOwnProperty(m)&&de(e,t,m,null,l,v);for(E in l)v=l[E],y=a[E],!l.hasOwnProperty(E)||v===y||v==null&&y==null||de(e,t,E,v,l,y)}function Xo(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Xo(u)){for(u=0,c=n.responseEnd,l+=1;l<a.length;l++){var f=a[l],g=f.startTime;if(g>c)break;var b=f.transferSize,E=f.initiatorType;b&&Xo(E)&&(f=f.responseEnd,u+=b*(f<c?1:(c-g)/(f-g)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zc=null,Qc=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function Zo(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qo(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function Ym(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,Ko=typeof Promise=="function"?Promise:void 0,qm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ko<"u"?function(e){return Ko.resolve(null).then(e).catch(wm)}:Vo;function wm(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Jo(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Al(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Cl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&pn(e.ownerDocument.body);a=n}while(a);Al(t)}function ko(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jc(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xm(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Zm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function Wo(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function Wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $c=null;function $o(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return jt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Fo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Io(e,t,a){switch(t=Mi(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ii(e)}var Tt=new Map,Po=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=T.d;T.d={f:Vm,r:Km,D:Jm,C:km,L:Wm,m:$m,X:Im,S:Fm,M:Pm};function Vm(){var e=Pt.f(),t=xi();return e||t}function Km(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?ps(t):Pt.r(e)}var jl=typeof document>"u"?null:document;function ed(e,t,a){var l=jl;if(l&&typeof t=="string"&&t){var n=vt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Po.has(n)||(Po.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Qe(t,"link",e),He(t),l.head.appendChild(t)))}}function Jm(e){Pt.D(e),ed("dns-prefetch",e,null)}function km(e,t){Pt.C(e,t),ed("preconnect",e,t)}function Wm(e,t,a){Pt.L(e,t,a);var l=jl;if(l&&e&&t){var n='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+vt(a.imageSizes)+'"]')):n+='[href="'+vt(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=Nl(e)}Tt.has(i)||(e=Y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(gn(i))||t==="script"&&l.querySelector(vn(i))||(t=l.createElement("link"),Qe(t,"link",e),He(t),l.head.appendChild(t)))}}function $m(e,t){Pt.m(e,t);var a=jl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nl(e)}if(!Tt.has(i)&&(e=Y({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vn(i)))return}l=a.createElement("link"),Qe(l,"link",e),He(l),a.head.appendChild(l)}}}function Fm(e,t,a){Pt.S(e,t,a);var l=jl;if(l&&e){var n=Ja(l).hoistableStyles,i=Tl(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(gn(i)))c.loading=5;else{e=Y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&Fc(e,a);var f=u=l.createElement("link");He(f),Qe(f,"link",e),f._p=new Promise(function(g,b){f.onload=g,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,_i(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function Im(e,t){Pt.X(e,t);var a=jl;if(a&&e){var l=Ja(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(vn(n)),i||(e=Y({src:e,async:!0},t),(t=Tt.get(n))&&Ic(e,t),i=a.createElement("script"),He(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Pm(e,t){Pt.M(e,t);var a=jl;if(a&&e){var l=Ja(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(vn(n)),i||(e=Y({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&Ic(e,t),i=a.createElement("script"),He(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function td(e,t,a,l){var n=(n=K.current)?Di(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Ja(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Ja(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(gn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||e1(n,e,a,u.state))),t&&l===null)throw Error(d(528,""));return u}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(a),a=Ja(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Tl(e){return'href="'+vt(e)+'"'}function gn(e){return'link[rel="stylesheet"]['+e+"]"}function ad(e){return Y({},e,{"data-precedence":e.precedence,precedence:null})}function e1(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Qe(t,"link",a),He(t),e.head.appendChild(t))}function Nl(e){return'[src="'+vt(e)+'"]'}function vn(e){return"script[async]"+e}function ld(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,He(l),l;var n=Y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),He(l),Qe(l,"style",n),_i(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(gn(n));if(i)return t.state.loading|=4,t.instance=i,He(i),i;l=ad(a),(n=Tt.get(n))&&Fc(l,n),i=(e.ownerDocument||e).createElement("link"),He(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Qe(i,"link",l),t.state.loading|=4,_i(i,a.precedence,e),t.instance=i;case"script":return i=Nl(a.src),(n=e.querySelector(vn(i)))?(t.instance=n,He(n),n):(l=a,(n=Tt.get(i))&&(l=Y({},a),Ic(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),He(n),Qe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,_i(l,a.precedence,e));return t.instance}function _i(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Oi=null;function nd(e,t,a){if(Oi===null){var l=new Map,n=Oi=new Map;n.set(a,l)}else n=Oi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Cl]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function id(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function t1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function a1(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),i=t.querySelector(gn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ci.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,He(i);return}i=t.ownerDocument||t,l=ad(l),(n=Tt.get(n))&&Fc(l,n),i=i.createElement("link"),He(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Qe(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ci.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pc=0;function l1(e,t){return e.stylesheets&&e.count===0&&Ri(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ri(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Pc===0&&(Pc=62500*Gm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ri(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Pc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ci(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ri(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ui=null;function Ri(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ui=new Map,t.forEach(n1,e),Ui=null,Ci.call(e))}function n1(e,t){if(!(t.state.loading&4)){var a=Ui.get(e);if(a)var l=a.get(null);else{a=new Map,Ui.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ci.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var yn={$$typeof:ge,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function i1(e,t,a,l,n,i,u,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function cd(e,t,a,l,n,i,u,c,f,g,b,E){return e=new i1(e,t,a,u,f,g,b,E,c),t=1,i===!0&&(t|=24),i=st(3,null,null,t),e.current=i,i.stateNode=e,t=Cu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Hu(i),e}function rd(e){return e?(e=ll,e):ll}function fd(e,t,a,l,n,i){n=rd(n),l.context===null?l.context=n:l.pendingContext=n,l=ra(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=fa(e,l,t),a!==null&&(at(a,e,t),Wl(a,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function er(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function od(e){if(e.tag===13||e.tag===31){var t=Oa(e,67108864);t!==null&&at(t,e,67108864),er(e,67108864)}}function dd(e){if(e.tag===13||e.tag===31){var t=pt();t=Wi(t);var a=Oa(e,t);a!==null&&at(a,e,t),er(e,t)}}var Bi=!0;function u1(e,t,a,l){var n=h.T;h.T=null;var i=T.p;try{T.p=2,tr(e,t,a,l)}finally{T.p=i,h.T=n}}function c1(e,t,a,l){var n=h.T;h.T=null;var i=T.p;try{T.p=8,tr(e,t,a,l)}finally{T.p=i,h.T=n}}function tr(e,t,a,l){if(Bi){var n=ar(l);if(n===null)wc(e,t,l,Hi,a),hd(e,l);else if(f1(n,e,t,a,l))l.stopPropagation();else if(hd(e,l),t&4&&-1<r1.indexOf(e)){for(;n!==null;){var i=Ka(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Na(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-rt(u);c.entanglements[1]|=f,u&=~f}Rt(i),(re&6)===0&&(yi=ut()+500,dn(0))}}break;case 31:case 13:c=Oa(i,2),c!==null&&at(c,i,2),xi(),er(i,2)}if(i=ar(l),i===null&&wc(e,t,l,Hi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else wc(e,t,l,null,a)}}function ar(e){return e=nu(e),lr(e)}var Hi=null;function lr(e){if(Hi=null,e=Va(e),e!==null){var t=N(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=k(t),e!==null)return e;e=null}else if(a===31){if(e=le(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hi=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jd()){case br:return 2;case xr:return 8;case Tn:case kd:return 32;case Sr:return 268435456;default:return 32}default:return 32}}var nr=!1,xa=null,Sa=null,Ea=null,bn=new Map,xn=new Map,za=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hd(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Sn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&od(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function f1(e,t,a,l,n){switch(t){case"focusin":return xa=Sn(xa,e,t,a,l,n),!0;case"dragenter":return Sa=Sn(Sa,e,t,a,l,n),!0;case"mouseover":return Ea=Sn(Ea,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Sn(bn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,e,t,a,l,n)),!0}return!1}function pd(e){var t=Va(e.target);if(t!==null){var a=N(t);if(a!==null){if(t=a.tag,t===13){if(t=k(a),t!==null){e.blockedOn=t,Ar(e.priority,function(){dd(a)});return}}else if(t===31){if(t=le(a),t!==null){e.blockedOn=t,Ar(e.priority,function(){dd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ar(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);lu=l,a.target.dispatchEvent(l),lu=null}else return t=Ka(a),t!==null&&od(t),e.blockedOn=a,!1;t.shift()}return!0}function gd(e,t,a){Gi(e)&&a.delete(t)}function s1(){nr=!1,xa!==null&&Gi(xa)&&(xa=null),Sa!==null&&Gi(Sa)&&(Sa=null),Ea!==null&&Gi(Ea)&&(Ea=null),bn.forEach(gd),xn.forEach(gd)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,nr||(nr=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,s1)))}var Li=null;function vd(e){Li!==e&&(Li=e,j.unstable_scheduleCallback(j.unstable_NormalPriority,function(){Li===e&&(Li=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(lr(l||a)===null)continue;break}var i=Ka(a);i!==null&&(e.splice(t,3),t-=3,ac(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Al(e){function t(f){return Yi(f,e)}xa!==null&&Yi(xa,e),Sa!==null&&Yi(Sa,e),Ea!==null&&Yi(Ea,e),bn.forEach(t),xn.forEach(t);for(var a=0;a<za.length;a++){var l=za[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)pd(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[$e]||null;if(typeof i=="function")u||vd(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[$e]||null)c=u.formAction;else if(lr(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),vd(a)}}}function yd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ir(e){this._internalRoot=e}qi.prototype.render=ir.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,l=pt();fd(a,l,e,t,null,null)},qi.prototype.unmount=ir.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fd(e.current,2,null,e,null,null),xi(),t[Qa]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,e),a===0&&pd(e)}};var bd=B.version;if(bd!=="19.2.3")throw Error(d(527,bd,"19.2.3"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=z(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var o1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{Dl=wi.inject(o1),ct=wi}catch{}}return zn.createRoot=function(e,t){if(!U(e))throw Error(d(299));var a=!1,l="",n=Ts,i=Ns,u=As;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=cd(e,1,!1,null,null,a,l,null,n,i,u,yd),e[Qa]=t.current,qc(e),new ir(t)},zn.hydrateRoot=function(e,t,a){if(!U(e))throw Error(d(299));var l=!1,n="",i=Ts,u=Ns,c=As,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=cd(e,1,!0,t,a??null,l,n,f,i,u,c,yd),t.context=rd(null),a=t.current,l=pt(),l=Wi(l),n=ra(l),n.callback=null,fa(a,n,l),a=l,t.current.lanes=a,Ol(t,a),Rt(t),e[Qa]=t.current,qc(e),new qi(t)},zn.version="19.2.3",zn}var Dd;function S1(){if(Dd)return rr.exports;Dd=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(B){console.error(B)}}return j(),rr.exports=x1(),rr.exports}var E1=S1();const z1=Ud(E1);function j1(){const[j,B]=je.useState([]),M=je.useRef(0);return je.useEffect(()=>{const d=[],U=N=>{const k=M.current+1;M.current=k,B(_=>[..._,{id:k,x:N.clientX,y:N.clientY}].slice(-10));const le=window.setTimeout(()=>{B(_=>_.filter(z=>z.id!==k))},1300);d.push(le)};return window.addEventListener("pointerdown",U,{passive:!0}),()=>{window.removeEventListener("pointerdown",U),d.forEach(N=>window.clearTimeout(N))}},[]),r.jsx("div",{className:"clickRipples","aria-hidden":"true",children:j.map(d=>r.jsxs(je.Fragment,{children:[r.jsx("span",{className:"rippleDots",style:{left:`${d.x}px`,top:`${d.y}px`}}),r.jsx("span",{className:"ripple rippleA",style:{left:`${d.x}px`,top:`${d.y}px`}}),r.jsx("span",{className:"ripple rippleB",style:{left:`${d.x}px`,top:`${d.y}px`}})]},d.id))})}function _d(){const j=window.location.hash||"#/";return j.startsWith("#/cv")?"cv":j.startsWith("#/career")?"career":"home"}function T1(){const[j,B]=je.useState(_d());return je.useEffect(()=>{const M=()=>B(_d());return window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[]),j}function Rd(j){window.location.hash!==j&&(window.location.hash=j)}function N1(){return r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function A1(){return r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}function Od(){return r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z"})})}function M1(){return r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z"})})}function D1(){return r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z"})})}function Bd(){return r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8","aria-hidden":"true",children:[r.jsx("path",{d:"M3 21h18"}),r.jsx("path",{d:"M5 21V7.5A1.5 1.5 0 0 1 6.5 6H10v15"}),r.jsx("path",{d:"M10 21V4.5A1.5 1.5 0 0 1 11.5 3h6A1.5 1.5 0 0 1 19 4.5V21"}),r.jsx("path",{d:"M7.5 9.5h.01M7.5 12.5h.01M7.5 15.5h.01M13.5 6.5h.01M16.5 6.5h.01M13.5 9.5h.01M16.5 9.5h.01M13.5 12.5h.01M16.5 12.5h.01"})]})}function Hd(){return r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("path",{d:"m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"}),r.jsx("path",{d:"M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"})]})}function Gd(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("path",{d:"m3 8.5 9-4.5 9 4.5-9 4.5-9-4.5Z"}),r.jsx("path",{d:"M6.5 10.8V15c0 1.5 2.4 3 5.5 3s5.5-1.5 5.5-3v-4.2"})]})}function Yd(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("path",{d:"M8 3h8l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"}),r.jsx("path",{d:"M16 3v5h5"}),r.jsx("path",{d:"M9.5 14h5"}),r.jsx("path",{d:"M9.5 17h4"})]})}function Ld(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("path",{d:"M8 4h8v3a4 4 0 0 1-8 0V4Z"}),r.jsx("path",{d:"M10 15h4"}),r.jsx("path",{d:"M12 11v4"}),r.jsx("path",{d:"M8 19h8"}),r.jsx("path",{d:"M16 6h2a2 2 0 0 1 0 4h-2"}),r.jsx("path",{d:"M8 6H6a2 2 0 0 0 0 4h2"})]})}function _1(){return r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:[r.jsx("circle",{cx:"12",cy:"12",r:"1.6",fill:"currentColor",stroke:"none"}),r.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2"}),r.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(60 12 12)"}),r.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"4.2",transform:"rotate(120 12 12)"})]})}function O1(){return r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2.5"}),r.jsx("path",{d:"M9.2 9h6.1v1.8h-2.1V17h-1.9v-6.2H9.2V9Zm9.8.2v1.8c-.7-.4-1.3-.5-1.8-.5-.4 0-.8.1-1 .2-.2.1-.3.3-.3.5 0 .1.1.3.2.4.1.1.4.2.8.3l.6.1c.9.2 1.6.5 2 .9.4.4.6.9.6 1.6 0 .9-.3 1.6-1 2.1-.7.5-1.6.7-2.8.7-.5 0-1 0-1.5-.1-.5-.1-1-.2-1.6-.4v-1.9c.6.3 1.1.5 1.6.7.5.1 1 .2 1.5.2.5 0 .9-.1 1.1-.2.3-.1.4-.3.4-.6 0-.2-.1-.3-.2-.5-.1-.1-.4-.2-.9-.3l-.5-.1c-.8-.2-1.4-.5-1.8-.8-.4-.4-.6-.9-.6-1.6 0-.8.3-1.5.9-1.9.6-.5 1.5-.7 2.6-.7.4 0 .8 0 1.3.1.4.1.9.2 1.4.3Z",fill:"#fff"})]})}function C1(){return r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M22 5 13.2 20.5a1.4 1.4 0 0 1-2.4 0L2 5.1a.8.8 0 0 1 .9-1.2l8.9 1.6c.1 0 .3 0 .4 0l8.9-1.6A.8.8 0 0 1 22 5Z",fill:"url(#vite-grad-a)"}),r.jsx("path",{d:"m16.6 2.2-4.8.9a.4.4 0 0 0-.3.3l-.3 2.5c0 .2.1.4.3.4l1.3.2c.2 0 .3.2.3.4l-.8 5.6c0 .4.5.6.8.3l.2-.3 4.3-8.7c.2-.3-.1-.7-.5-.6Z",fill:"url(#vite-grad-b)"}),r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:"vite-grad-a",x1:"2",y1:"4",x2:"18",y2:"20",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#41D1FF"}),r.jsx("stop",{offset:"1",stopColor:"#BD34FE"})]}),r.jsxs("linearGradient",{id:"vite-grad-b",x1:"11",y1:"2",x2:"16",y2:"13",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#FFEA83"}),r.jsx("stop",{offset:".5",stopColor:"#FFDD35"}),r.jsx("stop",{offset:"1",stopColor:"#FFA800"})]})]})]})}function pr(){return r.jsxs("div",{className:"topbarScene","aria-hidden":"true",children:[r.jsx("span",{className:"sceneSkyTint"}),r.jsx("span",{className:"sceneSun"}),r.jsx("span",{className:"sceneRidge ridgeFar"}),r.jsx("span",{className:"sceneRidge ridgeNear"}),r.jsx("span",{className:"scenePine pine1"}),r.jsx("span",{className:"scenePine pine2"}),r.jsx("span",{className:"scenePine pine3"}),r.jsx("span",{className:"sceneCloud cloudA"}),r.jsx("span",{className:"sceneCloud cloudB"}),r.jsx("span",{className:"sceneDust dust1"}),r.jsx("span",{className:"sceneDust dust2"}),r.jsx("span",{className:"sceneDust dust3"}),r.jsx("span",{className:"sceneDust dust4"}),r.jsx("span",{className:"sceneDust dust5"}),r.jsx("span",{className:"sceneLeaf leaf1"}),r.jsx("span",{className:"sceneLeaf leaf2"}),r.jsx("span",{className:"sceneLeaf leaf3"}),r.jsx("span",{className:"sceneLeaf leaf4"}),r.jsx("span",{className:"sceneLeaf leaf5"}),r.jsx("span",{className:"sceneLeaf leaf6"}),r.jsx("span",{className:"sceneWind wind1"}),r.jsx("span",{className:"sceneWind wind2"}),r.jsx("span",{className:"sceneWind wind3"})]})}function gr({theme:j,onToggle:B}){const M=j==="dark";return r.jsx("button",{className:"btn btnIconOnly",type:"button",onClick:B,"aria-label":M?"Switch to light theme":"Switch to dark theme",title:M?"Light mode":"Dark mode",children:M?r.jsx(M1,{}):r.jsx(D1,{})})}const U1="/my-portfolio/",dr=j=>`${U1}${j.replace(/^\/+/,"")}`,qd=[{period:"May 2020 - Aug 2020",title:"Intern",org:"Onesoft - Monster Studio",location:"Ha Noi, Viet Nam",logo:dr("/company/onesoft.png"),summary:"Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",highlights:["Developed puzzle game projects using Unity game engine.","Implemented core game mechanics and gameplay systems.","Collaborated with team on game design and prototyping."]},{period:"Aug 2020 - Nov 2020",title:"Intern",org:"Early Start - Monkey Junior",location:"Ha Noi, Viet Nam",logo:dr("/company/monkeyjunior.png"),summary:"Continued game development experience with Unity, focusing on gameplay systems, performance, and user experience.",highlights:["Developed puzzle game features and gameplay mechanics using Unity.","Optimized game performance, responsiveness, and user experience.","Participated in the full development cycle from feature design to deployment."]},{period:"Nov 2020 - Sep 2024",title:"Software Engineer",org:"VNG - ZingPlay Studios",location:"Ha Noi, Viet Nam",logo:dr("/company/vng.png"),summary:"This was the starting point of my professional game development journey, focused on live online products.",highlights:["Built and maintained core gameplay, UI, and online systems for large-scale titles.","Developed metagame features, including events, shop flows, and payment-related features.","Collaborated with artists, designers, PMs, and engineers to brainstorm, develop, and deliver game features.","Integrated third-party services such as Firebase, CDN, SDKs, and log tracking tools.","Debugged production issues, fixed bugs, refactored code, and built tools to support live game operations.","Analyzed player behavior to improve gameplay, UI, and overall player experience.","Reduced recurring client crashes by 25% through production debugging and root-cause fixes."]},{period:"Oct 2024 - Oct 2025",title:"Backend Developer III",org:"VIET NAM DIGITAL TECHNOLOGY AND INVESTMENT JOINT STOCK COMPANY",location:"Ha Noi, Viet Nam",summary:"Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",highlights:["Built scalable backend and data platforms providing shared services for multiple teams.","Designed and operated reliable distributed systems with FastAPI, PostgreSQL, Docker, and Kubernetes.","Developed large-scale ETL workflows and Airflow-based data pipelines.","Improved delivery efficiency through CI/CD, automation, and production workflow optimization.","Mentored engineers and led backend/platform development from design to production."]},{period:"Nov 2025 - Present",title:"Self Development",org:"Independent Learning & Project Building",location:"Ha Noi, Viet Nam",summary:"Focused on personal growth through building projects, deepening Unreal Engine 5 skills, improving English communication, and sharpening system thinking.",highlights:["Built personal game projects to practice end-to-end architecture and execution.","Improved Unreal Engine 5 proficiency through regular prototyping and technical experimentation.","Researched AI tools and applied them to optimize workflows and automate repetitive tasks.","Improved English communication for technical discussions and documentation.","Strengthened system thinking by designing scalable gameplay and backend flows."]}],wd=[{school:"University of Engineering and Technology (VNU)",degree:"Bachelor",area:"Software Engineering",period:"Aug 2018 - Dec 2023",location:"Ha Noi, Viet Nam"}],Xd=[{title:"IELTS 7.5",issuer:"British Council",date:"2025"}],Zd=[{title:"Third Prize Chess Province",location:"Nghe An, Viet Nam",date:"2018"}];function R1({theme:j,onToggleTheme:B}){const M=[...qd].reverse(),d=je.useRef(null);je.useEffect(()=>{const N=d.current;if(!N)return;const k=N.querySelectorAll(".careerItem"),le=new IntersectionObserver(_=>{_.forEach(z=>{z.isIntersecting&&(z.target.classList.add("careerItemVisible"),le.unobserve(z.target))})},{threshold:.12});return k.forEach(_=>le.observe(_)),()=>le.disconnect()},[]);const U=N=>N.logo?r.jsx("img",{src:N.logo,alt:N.org,className:"careerLogo"}):N.title==="Self Development"?r.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:r.jsx(Hd,{})}):r.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:r.jsx(Bd,{})});return r.jsxs("div",{className:"careerPage",children:[r.jsxs("header",{className:"topbar",children:[r.jsx(pr,{}),r.jsxs("div",{className:"container topbarInner",children:[r.jsx("button",{className:"btn",onClick:()=>Rd("#/"),type:"button",children:"← Back"}),r.jsx("div",{className:"brand",children:r.jsx("span",{children:"Career"})}),r.jsx("div",{className:"rightActions",children:r.jsx(gr,{theme:j,onToggle:B})})]})]}),r.jsxs("main",{className:"container careerMain",children:[r.jsxs("section",{className:"careerIntro",children:[r.jsx("h1",{className:"h3 careerTitle",children:"Career Journey"}),r.jsx("p",{className:"summary careerSummary",children:"A bottom-to-top flow of my path: where I started, how long I worked in each phase, and what I built along the way."})]}),r.jsxs("section",{className:"careerTimeline",ref:d,"aria-label":"Career timeline",children:[r.jsx("span",{className:"careerFlowLabel top",children:"Now"}),r.jsx("span",{className:"careerFlowLabel bottom",children:"Start"}),r.jsx("span",{className:"careerLine","aria-hidden":"true"}),M.map((N,k)=>r.jsxs("div",{className:"careerItem",style:{"--delay":`${k*100}ms`},children:[r.jsxs("div",{className:"careerDateWrap",children:[r.jsx("div",{className:"careerDate",children:N.period}),r.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),r.jsxs("article",{className:"careerCard",children:[U(N),r.jsx("h2",{className:"h3 careerRole",children:N.title}),r.jsx("p",{className:"careerOrg",children:N.org}),N.location?r.jsx("p",{className:"careerLocation",children:N.location}):null,r.jsx("p",{className:"careerCardSummary",children:N.summary}),r.jsx("ul",{className:"careerHighlights",children:N.highlights.map(le=>r.jsx("li",{children:le},le))})]})]},N.period))]}),r.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[r.jsxs("article",{className:"careerExtraCard",children:[r.jsxs("h3",{className:"h3 careerExtraTitle",children:[r.jsx(Gd,{}),"Education"]}),r.jsx("ul",{className:"careerExtraList",children:wd.map(N=>r.jsxs("li",{className:"careerExtraItem",children:[r.jsxs("div",{className:"careerExtraHead",children:[r.jsxs("p",{className:"careerExtraMain",children:[N.degree,N.area?` in ${N.area}`:""]}),r.jsx("span",{className:"careerExtraDate",children:N.period})]}),r.jsx("p",{className:"careerExtraSub",children:N.school}),N.location?r.jsx("p",{className:"careerExtraMeta",children:N.location}):null]},`${N.school}-${N.period}`))})]}),r.jsxs("article",{className:"careerExtraCard",children:[r.jsxs("h3",{className:"h3 careerExtraTitle",children:[r.jsx(Yd,{}),"Certificates"]}),r.jsx("ul",{className:"careerExtraList",children:Xd.map(N=>r.jsxs("li",{className:"careerExtraItem",children:[r.jsxs("div",{className:"careerExtraHead",children:[r.jsx("p",{className:"careerExtraMain",children:N.title}),r.jsx("span",{className:"careerExtraDate",children:N.date})]}),r.jsx("p",{className:"careerExtraSub",children:N.issuer})]},`${N.title}-${N.date}`))})]}),r.jsxs("article",{className:"careerExtraCard",children:[r.jsxs("h3",{className:"h3 careerExtraTitle",children:[r.jsx(Ld,{}),"Awards"]}),r.jsx("ul",{className:"careerExtraList",children:Zd.map(N=>r.jsxs("li",{className:"careerExtraItem",children:[r.jsxs("div",{className:"careerExtraHead",children:[r.jsx("p",{className:"careerExtraMain",children:N.title}),r.jsx("span",{className:"careerExtraDate",children:N.date})]}),N.location?r.jsx("p",{className:"careerExtraMeta",children:N.location}):null]},`${N.title}-${N.date}`))})]})]})]})]})}const B1=["🎮","🕹️","🎯","🎲","🏆","⚡","💎","🔮","🚀","🌟","🔥","🎪","🎭","🎨","🦄","🐉","🌈","🎵","🎸","🎺","🎻","🥁","🎤","🎧","🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍑","🌸","🌺","🌻","🌹","🌷","🌿","🍀","🌙","☀️","⭐","🌊","❄️","🦋","🐝","🦁","🐯","🎃","🎄"],mr=[{n:2,cols:2,rows:2,cell:72},{n:4,cols:4,rows:4,cell:62},{n:6,cols:6,rows:6,cell:50},{n:8,cols:8,rows:8,cell:38},{n:10,cols:10,rows:10,cell:32}];function H1(j){const B=[...j];for(let M=B.length-1;M>0;M--){const d=Math.floor(Math.random()*(M+1));[B[M],B[d]]=[B[d],B[M]]}return B}function Cd(j){const B=B1.slice(0,j);return H1([...B,...B].map((M,d)=>({id:d,symbol:M,isFlipped:!1,isMatched:!1})))}function G1(){const[j,B]=Se.useState(0),M=mr[j],d=j===mr.length-1,[U,N]=Se.useState(()=>Cd(M.cols*M.rows/2)),[k,le]=Se.useState([]),[_,z]=Se.useState(0),[P,Y]=Se.useState(0),[ne,Ce]=Se.useState(!1),[pe,O]=Se.useState(!1),[Z,ee]=Se.useState(!1),ve=Se.useRef(null),ge=Se.useRef(null),Re=Se.useRef(0),Ve=Se.useRef(null),Ye=Se.useCallback(()=>{if(typeof window>"u")return null;const h=window.AudioContext||window.webkitAudioContext;return h?(Ve.current||(Ve.current=new h),Ve.current.state==="suspended"&&Ve.current.resume(),Ve.current):null},[]),w=Se.useCallback((h,T,H,te,Q=0)=>{const s=Ye();if(!s)return;const x=s.createOscillator(),A=s.createGain(),D=s.currentTime+Q;x.type=H,x.frequency.setValueAtTime(h,D),A.gain.setValueAtTime(1e-4,D),A.gain.exponentialRampToValueAtTime(te,D+.02),A.gain.exponentialRampToValueAtTime(1e-4,D+T),x.connect(A),A.connect(s.destination),x.start(D),x.stop(D+T+.02)},[Ye]),Le=Se.useCallback(()=>{w(660,.12,"triangle",.05,0),w(880,.12,"triangle",.04,.08)},[w]),lt=Se.useCallback(()=>{w(420,.05,"triangle",.018,0)},[w]),Bt=Se.useCallback(()=>{w(523.25,.16,"sine",.06,0),w(659.25,.16,"sine",.06,.12),w(783.99,.22,"sine",.07,.24)},[w]);Se.useEffect(()=>{ne&&!pe&&U.every(h=>h.isMatched)&&O(!0)},[U,ne,pe]),Se.useEffect(()=>(ne&&!pe&&(ve.current=setInterval(()=>Y(h=>h+1),1e3)),()=>{ve.current&&clearInterval(ve.current)}),[ne,pe]),Se.useEffect(()=>{pe&&Bt()},[pe,Bt]),Se.useEffect(()=>{if(!pe)return;const h=ge.current;if(!h)return;const T=h.getContext("2d");if(!T)return;h.width=h.offsetWidth,h.height=h.offsetHeight;const H=[],te=["#22d3ee","#7c3aed","#f59e0b","#10b981","#ef4444","#f472b6"],Q=(D,G)=>{for(let K=0;K<52;K++){const ie=Math.PI*2*K/52,Be=2+Math.random()*4.5;H.push({x:D,y:G,vx:Math.cos(ie)*Be,vy:Math.sin(ie)*Be,alpha:1,color:te[Math.floor(Math.random()*te.length)],r:2+Math.random()*2})}};let s=0;const x=setInterval(()=>{Q(h.width*(.15+Math.random()*.7),h.height*(.1+Math.random()*.55)),++s>=7&&clearInterval(x)},320),A=()=>{T.clearRect(0,0,h.width,h.height);for(let D=H.length-1;D>=0;D--){const G=H[D];if(G.x+=G.vx,G.y+=G.vy,G.vy+=.09,G.alpha-=.016,G.alpha<=0){H.splice(D,1);continue}T.globalAlpha=G.alpha,T.fillStyle=G.color,T.beginPath(),T.arc(G.x,G.y,G.r,0,Math.PI*2),T.fill()}T.globalAlpha=1,Re.current=requestAnimationFrame(A)};return A(),()=>{clearInterval(x),cancelAnimationFrame(Re.current)}},[pe]);const nt=Se.useCallback(h=>{ve.current&&clearInterval(ve.current);const T=mr[h];B(h),N(Cd(T.cols*T.rows/2)),le([]),z(0),Y(0),Ce(!1),O(!1),ee(!1)},[]),Ke=Se.useCallback(h=>{const T=U.find(Q=>Q.id===h);if(!T||T.isFlipped||T.isMatched||Z)return;if(ne||Ce(!0),lt(),N(Q=>Q.map(s=>s.id===h?{...s,isFlipped:!0}:s)),k.length===0){le([h]);return}const H=k[0],te=U.find(Q=>Q.id===H);le([]),z(Q=>Q+1),te.symbol===T.symbol?(Le(),N(Q=>Q.map(s=>s.id===H||s.id===h?{...s,isFlipped:!0,isMatched:!0}:s))):(ee(!0),setTimeout(()=>{N(Q=>Q.map(s=>s.id===H||s.id===h?{...s,isFlipped:!1}:s)),ee(!1)},900))},[U,k,Z,ne,lt,Le]),_t=h=>`${String(Math.floor(h/60)).padStart(2,"0")}:${String(h%60).padStart(2,"0")}`,Nt=()=>r.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[r.jsx("path",{d:"M8.2 11.9c-1.7 0-3 1.3-3 2.9 0 2.2 2 3.9 4.5 3.9h4.6c2.5 0 4.5-1.7 4.5-3.9 0-1.6-1.3-2.9-3-2.9-.8 0-1.6.3-2.1.8l-.8.8c-.7.7-1.8.7-2.5 0l-.8-.8c-.6-.5-1.3-.8-2.2-.8Z",fill:"currentColor"}),r.jsx("circle",{cx:"8",cy:"7",r:"1.6",fill:"currentColor"}),r.jsx("circle",{cx:"11.2",cy:"5.8",r:"1.5",fill:"currentColor"}),r.jsx("circle",{cx:"14.8",cy:"5.8",r:"1.5",fill:"currentColor"}),r.jsx("circle",{cx:"18",cy:"7",r:"1.6",fill:"currentColor"})]}),it=()=>r.jsxs("svg",{viewBox:"0 0 24 24",className:"memoryGameStatIcon","aria-hidden":"true",children:[r.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),r.jsx("path",{d:"M12 7.8v4.8l3.2 1.8",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]});return r.jsxs("div",{className:"memoryGame",children:[r.jsxs("div",{className:"memoryGameHeader",children:[r.jsxs("span",{className:"memoryGameLevel",children:["Lv ",j+1," · ",M.n,"×",M.n]}),r.jsxs("span",{className:"memoryGameStat",children:[r.jsx(Nt,{})," ",r.jsx("strong",{children:_})]}),r.jsxs("span",{className:"memoryGameStat",children:[r.jsx(it,{})," ",r.jsx("strong",{children:_t(P)})]})]}),r.jsx("div",{className:"memoryGameGrid",style:{gridTemplateColumns:`repeat(${M.cols}, ${M.cell}px)`,gridTemplateRows:`repeat(${M.rows}, ${M.cell}px)`},children:U.map(h=>r.jsx("button",{className:`memoryCard${h.isFlipped||h.isMatched?" flipped":""}${h.isMatched?" matched":""}`,onClick:()=>Ke(h.id),style:{width:M.cell,height:M.cell},"aria-label":h.isFlipped||h.isMatched?h.symbol:"Hidden card",children:r.jsxs("span",{className:"memoryCardInner",children:[r.jsx("span",{className:"memoryCardBack"}),r.jsx("span",{className:"memoryCardFront",style:{fontSize:Math.round(M.cell*.44)},children:h.symbol})]})},h.id))}),pe&&r.jsxs("div",{className:"memoryGameModal",children:[r.jsx("canvas",{ref:ge,className:"memoryGameFireworks"}),r.jsxs("div",{className:"memoryGameModalBox",children:[r.jsx("div",{className:"memoryGameModalEmoji",children:d?"🏆":"🎉"}),r.jsx("div",{className:"memoryGameModalTitle",children:d?"You beat all levels!":`Level ${j+1} clear!`}),r.jsxs("div",{className:"memoryGameModalSub",children:[_," moves · ",_t(P)]}),!d&&r.jsx("button",{className:"memoryGameModalBtn",onClick:()=>nt(j+1),children:"Next Level →"}),r.jsx("button",{className:"memoryGameModalBtnSecondary",onClick:()=>nt(0),children:d?"Play Again":"Restart from Lv 1"})]})]})]})}function Y1({theme:j,onToggleTheme:B}){return r.jsxs("div",{className:"cvPage",children:[r.jsxs("header",{className:"topbar",children:[r.jsx(pr,{}),r.jsxs("div",{className:"container topbarInner",children:[r.jsx("button",{className:"btn",onClick:()=>Rd("#/"),type:"button",children:"← Back"}),r.jsx("div",{className:"brand",children:r.jsx("span",{children:"Résumé"})}),r.jsxs("div",{className:"rightActions",children:[r.jsx(gr,{theme:j,onToggle:B}),r.jsx("a",{className:"btn primary",href:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf",target:"_blank",rel:"noreferrer",children:"Open in new tab"})]})]})]}),r.jsx("main",{className:"container cvMain",children:r.jsx("iframe",{src:"/NGUYEN_HUY_TRUONG_GE_VNG.pdf#toolbar=0",title:"Resume PDF",className:"cvIframe",loading:"lazy"})})]})}const L1="/my-portfolio/",We=j=>`${L1}${j.replace(/^\/+/,"")}`,q1=[{id:"p1",title:"FPS Zombie Online",year:2025,role:"",description:"Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",tech:["UE 5","C++",".NET"],previewMp4:We("/videos/fps.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/O9IfP6dzKvo",githubUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer",downloadUrl:"https://github.com/FCBTruong/fps-zombie-multiplayer/releases",screenshots:[We("/screenshots/fps/1.jpg"),We("/screenshots/fps/2.jpg"),We("/screenshots/fps/3.jpg")]},{id:"p2",title:"Tressette Royal Online",year:2024,role:"",description:"An online, turn-based multiplayer card game.",tech:["Godot","Python","C++"],previewMp4:We("/videos/tressette.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/zKZ15l_08L4",githubUrl:"https://github.com/FCBTruong/tressette/",downloadUrl:"https://tressette.clareentertainment.com/",screenshots:[We("/screenshots/tressette/1.jpg"),We("/screenshots/tressette/2.jpg"),We("/screenshots/tressette/3.jpg")]},{id:"p3",title:"Thoi Loan Online",year:2021,role:"",description:"Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",tech:["Cocos"],previewMp4:We("/videos/thoiloan.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/kkiejixeQr0",githubUrl:"",downloadUrl:"",screenshots:[We("/screenshots/thoiloan/1.jpg"),We("/screenshots/thoiloan/2.jpg"),We("/screenshots/thoiloan/3.jpg")]},{id:"p4",title:"Tower Defense",year:2019,role:"",description:"A Tower Defense game where players strategically place towers to defend against waves of enemies.",tech:["LibGDX","Java"],previewMp4:We("/videos/defense.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/f_LjY2B8enk",githubUrl:"https://github.com/FCBTruong/tower_defense_game",downloadUrl:"https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link"},{id:"p5",title:"2048 Puzzle",year:2019,role:"",description:"A simple 2048 puzzle game focused on core tile movement and merging logic.",tech:["C++"],previewMp4:We("/videos/2048.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/_1QW8wA5rz0",githubUrl:"https://github.com/FCBTruong/game-2048-cpp",downloadUrl:"https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link"},{id:"p6",title:"Sleepy Bat",year:2020,role:"",description:"A simple endless runner game where players control a bat navigating through obstacles.",tech:["Unity","C#"],previewMp4:We("/videos/bat.mp4"),previewGif:"",youtubeUrl:"https://youtu.be/2woaTfKqtQY",githubUrl:"https://github.com/FCBTruong/FlyBat3D",downloadUrl:""}];function w1({src:j,alt:B,onClose:M}){return je.useEffect(()=>{const d=U=>{U.key==="Escape"&&M()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[M]),r.jsxs("div",{className:"lightboxOverlay",onClick:M,role:"dialog","aria-modal":"true",children:[r.jsx("img",{className:"lightboxImg",src:j,alt:B,onClick:d=>d.stopPropagation()}),r.jsx("button",{className:"lightboxClose",onClick:M,"aria-label":"Close",children:"×"})]})}function X1({title:j,previewMp4:B,previewGif:M,youtubeUrl:d}){return r.jsxs("div",{className:"previewCard",children:[B?r.jsx("video",{className:"previewMedia",src:B,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":`${j} preview video`}):M?r.jsx("img",{src:M,alt:`${j} preview`,className:"previewMedia",loading:"lazy"}):r.jsx("div",{className:"previewPlaceholder",children:"No preview"}),d?r.jsx("a",{className:"previewOverlayBtn",href:d,target:"_blank",rel:"noreferrer","aria-label":`Watch full demo of ${j}`,children:"Watch Full Demo"}):null]})}function Z1({theme:j,onToggleTheme:B}){const[M,d]=je.useState(null),[U,N]=je.useState("about"),k=O=>{N(O)},le=je.useMemo(()=>"I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world.",[]),[_,z]=je.useState(""),[P,Y]=je.useState(!1);je.useEffect(()=>{let Z=0,ee;const ve=()=>{if(Y(!1),Z+=1,z(le.slice(0,Z)),Z>=le.length){Y(!1);return}const ge=le[Z-1],Re=ge==="."?360:ge===","?140:24;Y(Re>24),ee=window.setTimeout(ve,Re)};return ee=window.setTimeout(ve,24),()=>{Y(!1),ee!==void 0&&window.clearTimeout(ee)}},[le]),je.useEffect(()=>{U==="career"&&M&&d(null)},[U,M]);const ne=je.useRef(null);je.useEffect(()=>{if(U!=="career")return;const O=ne.current;if(!O)return;const Z=O.querySelectorAll(".careerItem"),ee=new IntersectionObserver(ve=>{ve.forEach(ge=>{ge.isIntersecting&&(ge.target.classList.add("careerItemVisible"),ee.unobserve(ge.target))})},{threshold:.12});return Z.forEach(ve=>ee.observe(ve)),()=>ee.disconnect()},[U]);const Ce=O=>r.jsx("div",{className:`projectList${O?" projectListReveal":""}`,children:q1.map(Z=>r.jsxs("div",{className:`projectItem${O?" projectItemReveal":""}`,children:[r.jsx("div",{className:"projectMedia",children:r.jsx(X1,{title:Z.title,previewMp4:Z.previewMp4,previewGif:Z.previewGif,youtubeUrl:Z.youtubeUrl})}),r.jsxs("div",{className:"projectInfo",children:[r.jsxs("div",{className:"projectTitleRow",children:[r.jsx("h3",{className:"h3",children:Z.title}),Z.year?r.jsx("span",{className:"pill year",children:Z.year}):null,Z.role?r.jsx("span",{className:"pill",children:Z.role}):null]}),r.jsx("p",{className:"projectDesc",children:Z.description}),Z.tech?.length?r.jsx("div",{className:"tech",children:Z.tech.map(ee=>r.jsx("span",{className:"tag",children:ee},ee))}):null,r.jsxs("div",{className:"projectActions",children:[Z.githubUrl?r.jsxs("a",{className:"btn btnIcon",href:Z.githubUrl,target:"_blank",rel:"noreferrer",children:[r.jsx(Od,{}),"GitHub"]}):null,Z.downloadUrl?r.jsx("a",{className:"btn primary",href:Z.downloadUrl,target:"_blank",rel:"noreferrer",children:"Download / Play"}):null]})]}),Z.screenshots?.length?r.jsx("div",{className:"screenshots fill3",children:Z.screenshots.slice(0,3).map((ee,ve)=>r.jsx("img",{src:ee,alt:`${Z.title} screenshot ${ve+1}`,loading:"lazy",className:"screenshotThumb",onClick:()=>d({src:ee,alt:`${Z.title} screenshot ${ve+1}`})},ve))}):null]},Z.id))},O?"projects-tab-animated":"projects-tab-static"),pe=O=>O.logo?r.jsx("img",{src:O.logo,alt:O.org,className:"careerLogo"}):O.title==="Self Development"?r.jsx("span",{className:"careerLogoBadge selfDevelopment","aria-hidden":"true",children:r.jsx(Hd,{})}):r.jsx("span",{className:"careerLogoBadge companyFallback","aria-hidden":"true",children:r.jsx(Bd,{})});return r.jsxs("div",{className:"page",children:[r.jsxs("header",{className:"topbar",children:[r.jsx(pr,{}),r.jsxs("div",{className:"container topbarInner",children:[r.jsx("a",{className:"brand",href:"#/",children:r.jsx("span",{children:"Portfolio"})}),r.jsxs("nav",{className:"nav",children:[r.jsxs("button",{type:"button",className:`navTabBtn${U==="about"?" active":""}`,onClick:()=>k("about"),children:["About Me",r.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),r.jsxs("button",{type:"button",className:`navTabBtn${U==="projects"?" active":""}`,onClick:()=>k("projects"),children:["Projects",r.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),r.jsxs("button",{type:"button",className:`navTabBtn${U==="career"?" active":""}`,onClick:()=>k("career"),children:["Career",r.jsx("span",{className:"navTabUnderline","aria-hidden":"true"})]}),r.jsx("a",{href:"./NGUYEN_HUY_TRUONG_GE_VNG.pdf",download:!0,className:"navLinkBtn",children:"Résumé"}),r.jsx(gr,{theme:j,onToggle:B})]})]})]}),r.jsxs("main",{className:"container main",children:[U==="about"?r.jsxs("section",{className:"projects",id:"top",children:[r.jsxs("section",{className:"intro",style:{marginBottom:"20px"},children:[r.jsxs("h1",{className:"h3 heroTitle",children:["Hi, I'm ",r.jsx("span",{className:"accent",children:"Truong"})]}),r.jsxs("p",{className:"summary",children:[_,_.length<le.length?r.jsx("span",{className:`typingCursor${P?" paused":""}`,"aria-hidden":"true",children:"|"}):null]})]}),r.jsx(G1,{}),Ce(!1)]}):null,U==="projects"?r.jsx("section",{id:"projects",className:"projects",children:Ce(!0)}):null,U==="career"?r.jsxs("section",{className:"projects",children:[r.jsxs("div",{className:"careerTimeline",ref:ne,"aria-label":"Career timeline",children:[r.jsx("span",{className:"careerFlowLabel top",children:"Now"}),r.jsx("span",{className:"careerFlowLabel bottom",children:"Start"}),r.jsx("span",{className:"careerLine","aria-hidden":"true"}),[...qd].reverse().map((O,Z)=>r.jsxs("div",{className:"careerItem",style:{"--delay":`${Z*100}ms`},children:[r.jsxs("div",{className:"careerDateWrap",children:[r.jsx("div",{className:"careerDate",children:O.period}),r.jsx("span",{className:"careerDot","aria-hidden":"true"})]}),r.jsxs("article",{className:"careerCard",children:[pe(O),r.jsx("h3",{className:"h3 careerRole",children:O.title}),r.jsx("p",{className:"careerOrg",children:O.org}),O.location?r.jsx("p",{className:"careerLocation",children:O.location}):null,r.jsx("p",{className:"careerCardSummary",children:O.summary}),r.jsx("ul",{className:"careerHighlights",children:O.highlights.map(ee=>r.jsx("li",{children:ee},ee))})]})]},O.period))]},"career-tab"),r.jsxs("section",{className:"careerExtras","aria-label":"Education and achievements",children:[r.jsxs("article",{className:"careerExtraCard",children:[r.jsxs("h3",{className:"h3 careerExtraTitle",children:[r.jsx(Gd,{}),"Education"]}),r.jsx("ul",{className:"careerExtraList",children:wd.map(O=>r.jsxs("li",{className:"careerExtraItem",children:[r.jsxs("div",{className:"careerExtraHead",children:[r.jsxs("p",{className:"careerExtraMain",children:[O.degree,O.area?` in ${O.area}`:""]}),r.jsx("span",{className:"careerExtraDate",children:O.period})]}),r.jsx("p",{className:"careerExtraSub",children:O.school}),O.location?r.jsx("p",{className:"careerExtraMeta",children:O.location}):null]},`${O.school}-${O.period}`))})]}),r.jsxs("article",{className:"careerExtraCard",children:[r.jsxs("h3",{className:"h3 careerExtraTitle",children:[r.jsx(Yd,{}),"Certificates"]}),r.jsx("ul",{className:"careerExtraList",children:Xd.map(O=>r.jsxs("li",{className:"careerExtraItem",children:[r.jsxs("div",{className:"careerExtraHead",children:[r.jsx("p",{className:"careerExtraMain",children:O.title}),r.jsx("span",{className:"careerExtraDate",children:O.date})]}),r.jsx("p",{className:"careerExtraSub",children:O.issuer})]},`${O.title}-${O.date}`))})]}),r.jsxs("article",{className:"careerExtraCard",children:[r.jsxs("h3",{className:"h3 careerExtraTitle",children:[r.jsx(Ld,{}),"Awards"]}),r.jsx("ul",{className:"careerExtraList",children:Zd.map(O=>r.jsxs("li",{className:"careerExtraItem",children:[r.jsxs("div",{className:"careerExtraHead",children:[r.jsx("p",{className:"careerExtraMain",children:O.title}),r.jsx("span",{className:"careerExtraDate",children:O.date})]}),O.location?r.jsx("p",{className:"careerExtraMeta",children:O.location}):null]},`${O.title}-${O.date}`))})]})]})]}):null]}),r.jsx("p",{className:"footerQuote",children:'"Every small step shapes something great"'}),r.jsxs("footer",{className:"footer",children:[r.jsx("div",{className:"footerLandscape","aria-hidden":"true",children:r.jsx("span",{className:"footerBaseAccent"})}),r.jsxs("div",{className:"container footerInner",children:[r.jsxs("span",{className:"footerLeft",children:[r.jsxs("span",{className:"muted",children:["© ",new Date().getFullYear()," Nguyen Huy Truong"]}),r.jsx("a",{className:"socialIcon linkedin",href:"https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn profile",children:r.jsx(A1,{})}),r.jsx("a",{className:"socialIcon gmail",href:"mailto:nguyenhuytruong9112k@gmail.com","aria-label":"Send email",children:r.jsx(N1,{})}),r.jsx("a",{className:"socialIcon github",href:"https://github.com/FCBTruong",target:"_blank",rel:"noreferrer","aria-label":"GitHub profile",children:r.jsx(Od,{})})]}),r.jsxs("span",{className:"footerStack","aria-label":"Built with React, TypeScript and Vite",children:[r.jsx("span",{className:"stackChip react",title:"React","aria-hidden":"true",children:r.jsx(_1,{})}),r.jsx("span",{className:"stackChip ts",title:"TypeScript","aria-hidden":"true",children:r.jsx(O1,{})}),r.jsx("span",{className:"stackChip vite",title:"Vite","aria-hidden":"true",children:r.jsx(C1,{})})]})]})]}),M&&r.jsx(w1,{src:M.src,alt:M.alt,onClose:()=>d(null)})]})}function Q1(){const j=localStorage.getItem("theme");return j==="light"||j==="dark"?j:window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light"}const V1=`
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

`;function K1(){const j=T1(),[B,M]=je.useState(()=>Q1()),d=je.useCallback(()=>{M(U=>U==="dark"?"light":"dark")},[]);return je.useEffect(()=>{document.documentElement.dataset.theme=B,localStorage.setItem("theme",B)},[B]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:V1}),r.jsx(j1,{}),j==="cv"?r.jsx(Y1,{theme:B,onToggleTheme:d}):j==="career"?r.jsx(R1,{theme:B,onToggleTheme:d}):r.jsx(Z1,{theme:B,onToggleTheme:d})]})}z1.createRoot(document.getElementById("root")).render(r.jsx(je.StrictMode,{children:r.jsx(K1,{})}));
