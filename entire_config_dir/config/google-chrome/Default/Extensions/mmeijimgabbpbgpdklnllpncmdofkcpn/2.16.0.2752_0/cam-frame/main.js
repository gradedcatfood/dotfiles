(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,r){e.exports=r("5cOK")},"5cOK":function(e,t,r){"use strict";r.r(t);var s={};r.r(s),r.d(s,"AsyncSender",(function(){return fe})),r.d(s,"createRespond",(function(){return pe})),window.navigator.userAgent.includes("Macintosh");var n=window.chrome&&!(!chrome.runtime||!chrome.runtime.id);function i(e){return e instanceof Error?Promise.reject(e.toString()):Promise.reject(e)}window,window;var o=r("dpI+");function c(e){return"function"==typeof e}let u=!1;const h={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else u&&console.log("RxJS: Back to a better error behavior. Thank you. <3");u=e},get useDeprecatedSynchronousErrorHandling(){return u}};function a(e){setTimeout(()=>{throw e},0)}const d={closed:!0,next(e){},error(e){if(h.useDeprecatedSynchronousErrorHandling)throw e;a(e)},complete(){}},l=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))();function f(e){return null!==e&&"object"==typeof e}const p=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})();let b=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:r,_unsubscribe:s,_subscriptions:n}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(let e=0;e<r.length;++e)r[e].remove(this);if(c(s))try{s.call(this)}catch(i){t=i instanceof p?y(i.errors):[i]}if(l(n)){let e=-1,r=n.length;for(;++e<r;){const r=n[e];if(f(r))try{r.unsubscribe()}catch(i){t=t||[],i instanceof p?t=t.concat(y(i.errors)):t.push(i)}}}if(t)throw new p(t)}add(t){let r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){const t=r;r=new e,r._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:s}=r;if(null===s)r._parentOrParents=this;else if(s instanceof e){if(s===this)return r;r._parentOrParents=[s,this]}else{if(-1!==s.indexOf(this))return r;s.push(this)}const n=this._subscriptions;return null===n?this._subscriptions=[r]:n.push(r),r}remove(e){const t=this._subscriptions;if(t){const r=t.indexOf(e);-1!==r&&t.splice(r,1)}}}return e.EMPTY=function(e){return e.closed=!0,e}(new e),e})();function y(e){return e.reduce((e,t)=>e.concat(t instanceof p?t.errors:t),[])}const w=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class m extends b{constructor(e,t,r){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=d;break;case 1:if(!e){this.destination=d;break}if("object"==typeof e){e instanceof m?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new v(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new v(this,e,t,r)}}[w](){return this}static create(e,t,r){const s=new m(e,t,r);return s.syncErrorThrowable=!1,s}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class v extends m{constructor(e,t,r,s){let n;super(),this._parentSubscriber=e;let i=this;c(t)?n=t:t&&(n=t.next,r=t.error,s=t.complete,t!==d&&(i=Object.create(t),c(i.unsubscribe)&&this.add(i.unsubscribe.bind(i)),i.unsubscribe=this.unsubscribe.bind(this))),this._context=i,this._next=n,this._error=r,this._complete=s}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;h.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:r}=h;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):a(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;a(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);h.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(r){if(this.unsubscribe(),h.useDeprecatedSynchronousErrorHandling)throw r;a(r)}}__tryOrSetError(e,t,r){if(!h.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(s){return h.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=s,e.syncErrorThrown=!0,!0):(a(s),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}const g=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function _(){}let E=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const r=new e;return r.source=this,r.operator=t,r}subscribe(e,t,r){const{operator:s}=this,n=function(e,t,r){if(e){if(e instanceof m)return e;if(e[w])return e[w]()}return e||t||r?new m(e,t,r):new m(d)}(e,t,r);if(n.add(s?s.call(n,this.source):this.source||h.useDeprecatedSynchronousErrorHandling&&!n.syncErrorThrowable?this._subscribe(n):this._trySubscribe(n)),h.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable&&(n.syncErrorThrowable=!1,n.syncErrorThrown))throw n.syncErrorValue;return n}_trySubscribe(e){try{return this._subscribe(e)}catch(t){h.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){const{closed:t,destination:r,isStopped:s}=e;if(t||s)return!1;e=r&&r instanceof m?r:null}return!0}(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=x(t))((t,r)=>{let s;s=this.subscribe(t=>{try{e(t)}catch(n){r(n),s&&s.unsubscribe()}},r,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[g](){return this}pipe(...e){return 0===e.length?this:((t=e)?1===t.length?t[0]:function(e){return t.reduce((e,t)=>t(e),e)}:_)(this);var t}toPromise(e){return new(e=x(e))((e,t)=>{let r;this.subscribe(e=>r=e,e=>t(e),()=>e(r))})}}return e.create=t=>new e(t),e})();function x(e){if(e||(e=h.Promise||Promise),!e)throw new Error("no Promise impl found");return e}const S=e=>t=>{for(let r=0,s=e.length;r<s&&!t.closed;r++)t.next(e[r]);t.complete()};function T(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const P=T(),O=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function I(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}const k=e=>{if(e&&"function"==typeof e[g])return s=e,e=>{const t=s[g]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(O(e))return S(e);if(I(e))return r=e,e=>(r.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,a),e);if(e&&"function"==typeof e[P])return t=e,e=>{const r=t[P]();for(;;){const t=r.next();if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof r.return&&e.add(()=>{r.return&&r.return()}),e};{const t=f(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var t,r,s};function j(e,t){return new E(r=>{const s=new b;let n=0;return s.add(t.schedule((function(){n!==e.length?(r.next(e[n++]),r.closed||s.add(this.schedule())):r.complete()}))),s})}function D(e,t){return t?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[g]}(e))return function(e,t){return new E(r=>{const s=new b;return s.add(t.schedule(()=>{const n=e[g]();s.add(n.subscribe({next(e){s.add(t.schedule(()=>r.next(e)))},error(e){s.add(t.schedule(()=>r.error(e)))},complete(){s.add(t.schedule(()=>r.complete()))}}))})),s})}(e,t);if(I(e))return function(e,t){return new E(r=>{const s=new b;return s.add(t.schedule(()=>e.then(e=>{s.add(t.schedule(()=>{r.next(e),s.add(t.schedule(()=>r.complete()))}))},e=>{s.add(t.schedule(()=>r.error(e)))}))),s})}(e,t);if(O(e))return j(e,t);if(function(e){return e&&"function"==typeof e[P]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new E(r=>{const s=new b;let n;return s.add(()=>{n&&"function"==typeof n.return&&n.return()}),s.add(t.schedule(()=>{n=e[P](),s.add(t.schedule((function(){if(r.closed)return;let e,t;try{const r=n.next();e=r.value,t=r.done}catch(s){return void r.error(s)}t?r.complete():(r.next(e),this.schedule())})))})),s})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof E?e:new E(k(e))}function M(e,t){return function(r){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new A(e,t))}}class A{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new N(e,this.project,this.thisArg))}}class N extends m{constructor(e,t,r){super(e),this.project=t,this.count=0,this.thisArg=r||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)}}class C extends m{notifyNext(e,t,r,s,n){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}class V extends m{constructor(e,t,r){super(),this.parent=e,this.outerValue=t,this.outerIndex=r,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}function R(e,t,r,s,n=new V(e,r,s)){if(!n.closed)return t instanceof E?t.subscribe(n):k(t)(n)}function W(e,t){return"function"==typeof t?r=>r.pipe(W((r,s)=>D(e(r,s)).pipe(M((e,n)=>t(r,e,s,n))))):t=>t.lift(new L(e))}class L{constructor(e){this.project=e}call(e,t){return t.subscribe(new H(e,this.project))}}class H extends C{constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const r=this.index++;try{t=this.project(e,r)}catch(s){return void this.destination.error(s)}this._innerSub(t,e,r)}_innerSub(e,t,r){const s=this.innerSubscription;s&&s.unsubscribe();const n=new V(this,void 0,void 0);this.destination.add(n),this.innerSubscription=R(this,e,t,r,n)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(e,t,r,s,n){this.destination.next(t)}}const U=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})();class F extends b{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const r=t.indexOf(this.subscriber);-1!==r&&t.splice(r,1)}}class Y extends m{constructor(e){super(e),this.destination=e}}let B=(()=>{class e extends E{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[w](){return new Y(this)}lift(e){const t=new q(this,this);return t.operator=e,t}next(e){if(this.closed)throw new U;if(!this.isStopped){const{observers:t}=this,r=t.length,s=t.slice();for(let n=0;n<r;n++)s[n].next(e)}}error(e){if(this.closed)throw new U;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,r=t.length,s=t.slice();for(let n=0;n<r;n++)s[n].error(e);this.observers.length=0}complete(){if(this.closed)throw new U;this.isStopped=!0;const{observers:e}=this,t=e.length,r=e.slice();for(let s=0;s<t;s++)r[s].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new U;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new U;return this.hasError?(e.error(this.thrownError),b.EMPTY):this.isStopped?(e.complete(),b.EMPTY):(this.observers.push(e),new F(this,e))}asObservable(){const e=new E;return e.source=this,e}}return e.create=(e,t)=>new q(e,t),e})();class q extends B{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):b.EMPTY}}"undefined"!=typeof globalThis&&globalThis,"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;const z=window.navigator;class $ extends Error{}let G=(()=>{class e{constructor(){this._hasDisplayMedia=z.mediaDevices&&"getDisplayMedia"in z.mediaDevices}get hasDisplayMedia(){return this._hasDisplayMedia}_throwWrappedPermissionError(e){if(this.isPermissionError(e))throw new $;throw e}getUserMedia(e){return Object(o.a)(this,void 0,void 0,(function*(){try{return yield navigator.mediaDevices.getUserMedia(e)}catch(t){this._throwWrappedPermissionError(t)}}))}getDisplayMedia(e){return Object(o.a)(this,void 0,void 0,(function*(){if(!this._hasDisplayMedia)throw new Error("getDisplayMedia() not supported, make sure chrome://flags/#enable-experimental-web-platform-features is enabled");try{return yield navigator.mediaDevices.getDisplayMedia(e)}catch(t){this._throwWrappedPermissionError(t)}}))}getSources(){return Object(o.a)(this,void 0,void 0,(function*(){return z.mediaDevices?(yield z.mediaDevices.enumerateDevices()).filter((function(e){return e.kind.endsWith("input")})).map((function(e){return{id:e.deviceId,label:e.label,kind:e.kind.substring(0,e.kind.length-5)}})):[]}))}getSourcesByKind(e){return Object(o.a)(this,void 0,void 0,(function*(){return(yield this.getSources()).filter((function(t){return t.kind===e}))}))}getVideoSources(){return this.getSourcesByKind("video")}getAudioSources(){return this.getSourcesByKind("audio")}hasCamera(){return Object(o.a)(this,void 0,void 0,(function*(){return(yield this.getVideoSources()).length>0}))}hasMicrophone(){return Object(o.a)(this,void 0,void 0,(function*(){return(yield this.getAudioSources()).length>0}))}hasLabel(e){return e.some((function(e){return!!e.label}))}hasVideoAccess(){return Object(o.a)(this,void 0,void 0,(function*(){return this.hasLabel(yield this.getVideoSources())}))}hasAudioAccess(){return Object(o.a)(this,void 0,void 0,(function*(){return this.hasLabel(yield this.getAudioSources())}))}getCameraAndMicPermission(){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.hasCamera();let t=!1,r=!1;try{const s=yield navigator.mediaDevices.getUserMedia({audio:!0,video:e});r=!!s.getVideoTracks().length,t=!!s.getAudioTracks().length,s.getTracks().forEach((function(e){e.stop()}))}catch(s){}return{video:r,audio:t}}))}checkPermission(e){return Object(o.a)(this,void 0,void 0,(function*(){return(yield navigator.permissions.query({name:e})).state}))}onPermission(e){return D(navigator.permissions.query({name:e})).pipe(W(e=>function e(t,r,s,n){return c(s)&&(n=s,s=void 0),n?e(t,r,s).pipe(M(e=>l(e)?n(...e):n(e))):new E(e=>{!function e(t,r,s,n,i){let o;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){const e=t;t.addEventListener(r,s,i),o=()=>e.removeEventListener(r,s,i)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){const e=t;t.on(r,s),o=()=>e.off(r,s)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){const e=t;t.addListener(r,s),o=()=>e.removeListener(r,s)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let o=0,c=t.length;o<c;o++)e(t[o],r,s,n,i)}n.add(o)}(t,r,(function(t){e.next(arguments.length>1?Array.prototype.slice.call(arguments):t)}),e,s)})}(e,"change")),M(e=>e.currentTarget))}isPermissionError(e){return e&&("PermissionDeniedError"===e.name||"MediaDeviceFailedDueToShutdown"===e.name||"NotAllowedError"===e.name||"InvalidStateError"===e.name)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov={token:(t={token:e,factory:e.\u0275fac,providedIn:"root"}).token,providedIn:t.providedIn||null,factory:t.factory,value:void 0},e;var t})();class K extends b{constructor(e,t){super()}schedule(e,t=0){return this}}class J extends K{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(s,this.id,t),this}requestAsyncId(e,t,r=0){return setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,t,r=0){if(null!==r&&this.delay===r&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let r=!1,s=void 0;try{this.work(e)}catch(n){r=!0,s=!!n&&n||new Error(n)}if(r)return this.unsubscribe(),s}_unsubscribe(){const e=this.id,t=this.scheduler,r=t.actions,s=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==s&&r.splice(s,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class Q extends J{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,r=0){return null!==r&&r>0||null===r&&this.delay>0?super.requestAsyncId(e,t,r):e.flush(this)}}let X=(()=>{class e{constructor(t,r=e.now){this.SchedulerAction=t,this.now=r}schedule(e,t=0,r){return new this.SchedulerAction(this,e).schedule(r,t)}}return e.now=()=>Date.now(),e})();class Z extends X{constructor(e,t=X.now){super(e,()=>Z.delegate&&Z.delegate!==this?Z.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,r){return Z.delegate&&Z.delegate!==this?Z.delegate.schedule(e,t,r):super.schedule(e,t,r)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let r;this.active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}}class ee extends Z{}const te=new ee(Q),re=new E(e=>e.complete());function se(e){return e?function(e){return new E(t=>e.schedule(()=>t.complete()))}(e):re}function ne(e,t){return new E(t?r=>t.schedule(ie,0,{error:e,subscriber:r}):t=>t.error(e))}function ie({error:e,subscriber:t}){t.error(e)}let oe=(()=>{class e{constructor(e,t,r){this.kind=e,this.value=t,this.error=r,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,r){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return r&&r()}}accept(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,r)}toObservable(){switch(this.kind){case"N":return function(...e){let t=e[e.length-1];return(r=t)&&"function"==typeof r.schedule?(e.pop(),j(e,t)):new E(S(e));var r}(this.value);case"E":return ne(this.error);case"C":return se()}throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class ce extends m{constructor(e,t,r=0){super(e),this.scheduler=t,this.delay=r}static dispatch(e){const{notification:t,destination:r}=e;t.observe(r),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(ce.dispatch,this.delay,new ue(e,this.destination)))}_next(e){this.scheduleMessage(oe.createNext(e))}_error(e){this.scheduleMessage(oe.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(oe.createComplete()),this.unsubscribe()}}class ue{constructor(e,t){this.notification=e,this.destination=t}}class he extends B{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,r){super(),this.scheduler=r,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new ae(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,r=t?this._events:this._trimBufferThenGetEvents(),s=this.scheduler,n=r.length;let i;if(this.closed)throw new U;if(this.isStopped||this.hasError?i=b.EMPTY:(this.observers.push(e),i=new F(this,e)),s&&e.add(e=new ce(e,s)),t)for(let o=0;o<n&&!e.closed;o++)e.next(r[o]);else for(let o=0;o<n&&!e.closed;o++)e.next(r[o].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),i}_getNow(){return(this.scheduler||te).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,r=this._windowTime,s=this._events,n=s.length;let i=0;for(;i<n&&!(e-s[i].time<r);)i++;return n>t&&(i=Math.max(i,n-t)),i>0&&s.splice(0,i),s}}class ae{constructor(e,t){this.time=e,this.value=t}}class de{constructor(e){this.selector=e}call(e,t){return t.subscribe(new le(e,this.selector,this.caught))}}class le extends C{constructor(e,t,r){super(e),this.selector=t,this.caught=r}error(e){if(!this.isStopped){let r;try{r=this.selector(e,this.caught)}catch(t){return void super.error(t)}this._unsubscribeAndRecycle();const s=new V(this,void 0,void 0);this.add(s),R(this,r,void 0,void 0,s)}}}class fe{constructor(e){this._sendFn=e,this._msgCnt=0,this._msgResolvers=new Map}sendWithResponse(e,t){return this.sendWithProgress(e,t).toPromise()}sendWithProgress(e,t){const r=++this._msgCnt,s=new he(1);return this._msgResolvers.set(r,s),(o=()=>{return s=this,void 0,i=function*(){return yield this._sendFn({type:e,data:t,msgId:r})},new((n=void 0)||(n=Promise))((function(e,t){function r(e){try{c(i.next(e))}catch(r){t(r)}}function o(e){try{c(i.throw(e))}catch(r){t(r)}}function c(t){t.done?e(t.value):new n((function(e){e(t.value)})).then(r,o)}c((i=i.apply(s,[])).next())}));var s,n,i},new E(e=>{let t;try{t=o()}catch(r){return void e.error(r)}return(t?D(t):se()).subscribe(e)})).pipe((i=e=>(delete this._msgResolvers[r],ne(e)),function(e){const t=new de(i),r=e.lift(t);return t.caught=r}),(n=s.asObservable(),W(()=>n)));var n,i,o}send(e,t){this._sendFn("object"==typeof e?e:{type:e,data:t})}handleResult(e){if(e&&"result"===e.type){const t=this._msgResolvers.get(e.msgId);if(!t)throw new Error("asyncResponse: no resolver");return e.hasOwnProperty("error")||e.isError?(t.error(e.data),this._msgResolvers.delete(e.msgId)):(e.isNext&&t.next(e.data),e.isComplete&&(t.complete(),this._msgResolvers.delete(e.msgId))),!0}return!1}}function pe(e){return function(t,r){let s=!0;const n=t=>{e({type:"result",msgId:r.msgId,data:t,isComplete:!0,isNext:s})},i=t=>{e({type:"result",msgId:r.msgId,data:t,isError:!0})};Promise.resolve(t).then(t=>{var o;(o=t)&&(o instanceof E||"function"==typeof o.lift&&"function"==typeof o.subscribe)?(s=!1,t.subscribe((function(t){e({type:"result",msgId:r.msgId,data:t,isNext:!0})}),i,()=>n(void 0))):n(t)},i)}}!function(e=new G){let t,r;const o={};function c(){t.pause(),r.getTracks().forEach((function(e){e.stop()})),r=null}o.start=function(s){return r&&c(),(n=s,e.getUserMedia({video:n})).then((function(e){r=e;const s=new Promise((function(e){t||(t=document.createElement("video"),t.volume=0,document.body.appendChild(t)),t.addEventListener("canplay",(function r(){t.removeEventListener("canplay",r),e({width:t.videoWidth,height:t.videoHeight})}))}));return t.srcObject=r,t.play(),s}));var n},o.stop=function(){c()},o.getVideoDevices=function(){return e.getVideoSources()};const u=s.createRespond((function(e){window.parent.postMessage(e,"http://localhost:4200")}));function h(e){return e instanceof Error?Promise.reject(e.toString()):Promise.reject(e)}n?chrome.runtime.onMessage.addListener((function(e,t,r){return!!(e&&"camFrameMsgWithResult"===e.type&&(e=e.data)&&o.hasOwnProperty(e.type))&&(function(e,t){Promise.resolve(t).catch(i).then((function(t){e({type:"result",data:t})}),(function(t){e({type:"error",data:t})}))}(r,o[e.type](e.data)),!0)})):(console.debug("camFrame: using dev-only messaging"),window.addEventListener("message",(function(e){const t=e.data;if(o.hasOwnProperty(t.type)){const e=Promise.resolve(o[t.type](t.data)).catch(h);u(e,t)}}))),window.parent.postMessage("castifyDrawCamFrameReady","*")}()},"dpI+":function(e,t,r){"use strict";function s(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{u(s.next(e))}catch(t){i(t)}}function c(e){try{u(s.throw(e))}catch(t){i(t)}}function u(e){e.done?n(e.value):new r((function(t){t(e.value)})).then(o,c)}u((s=s.apply(e,t||[])).next())}))}r.d(t,"a",(function(){return s}))},zn8P:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="zn8P"}},[[0,0]]]);