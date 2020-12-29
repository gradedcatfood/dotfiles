(function () {
	'use strict';

	const e=()=>function(){if("undefined"!=typeof window)return window;if("undefined"!=typeof globalThis)return globalThis;throw new Error("unable to locate global object")}().crypto.getRandomValues(new Uint32Array(1))[0].toString(36);class t{constructor(){this.request=e=>new Promise(t=>{chrome.runtime.sendMessage(e,e=>{t(e);});}),this.on=(e,t)=>{function n(n,s,i){return !(!n.name||n.name!==e)&&(Promise.resolve(t(n.data)).then(i),!0)}return chrome.runtime.onMessage.addListener(n),n},this.off=(e,t)=>{chrome.runtime.onMessage.removeListener(t);};}}class n{constructor(){this.uuid=e(),this.callbacks={},this.request=e=>new Promise(t=>{const s=n.generateId();this.callbacks[s]=t,this._sendMessage(Object.assign({callbackId:s},e));}),this.on=(e,t)=>this._register(n=>{n.name&&n.name===e&&Promise.resolve(t(n.data)).then(e=>{this._sendMessage(Object.assign(Object.assign({},n),{data:e}));});}),this.off=(e,t)=>{this._deregister(e,t);},this.listenForResponses=()=>{this._register(e=>{"callbackId"in e&&e.callbackId in this.callbacks&&(this.callbacks[e.callbackId](e.data),delete this.callbacks[e.callbackId]);});},this._sendMessage.bind(this),this._register.bind(this),this._deregister.bind(this),this.listenForResponses();}}n.generateId=()=>window.crypto.getRandomValues(new Uint32Array(1))[0];class s extends n{_sendMessage(e){window.top.postMessage(Object.assign({outgoing:!0},e),"*");}_register(e){function t(t){t.data.outgoing||e(t.data);}return window.top.addEventListener("message",t),t}_deregister(e,t){window.top.removeEventListener("message",t);}}class i extends n{static isSafariAppExtension(){return "undefined"!=typeof safari&&void 0!==safari.extension}_sendMessage(e){const t={callbackId:e.callbackId,uuid:this.uuid,outgoing:!0,frameOrigin:window.location.origin,message:{name:e.name,data:e.data}};safari.extension.dispatchMessage("message",t);}_register(e){const t=this.uuid;function n(n){const s=n.message;!s||s.uuid&&s.uuid!==t||e({callbackId:s.callbackId,name:s.message.name,data:s.message.data});}return safari.self.addEventListener("message",n),n}_deregister(e,t){safari.self.removeEventListener("message",t);}}const o="undefined"!=typeof chrome&&void 0!==chrome.runtime&&void 0!==chrome.runtime.sendMessage&&void 0!==chrome.runtime.onMessage?new t:i.isSafariAppExtension()?new i:new s,a={"auto-sign-in-to-b5":function(e){if(!d())return;document.dispatchEvent(new CustomEvent("B5InitializeSession",{detail:m(e)}));},"initialize-device":function(e){if(!d())return;document.dispatchEvent(new CustomEvent("B5InitializeDevice",{detail:m(e.device)}));},lock:()=>{},"display-mfa-required":function(e){if(!d())return;let t;const n=new MutationObserver(()=>{var s,i,o;if(null===(i=null===(s=document.getElementById("signin-form"))||void 0===s?void 0:s.firstElementChild)||void 0===i?void 0:i.classList.contains("two-factor-entry"))null===(o=t)||void 0===o||o.remove(),n.disconnect();else {const n=document.getElementsByClassName("existing-signin")[0];n&&0===document.getElementsByClassName("lock-message").length&&(t=document.createElement("div"),t.classList.add("lock-message","box","red"),t.textContent=e.content,n.insertBefore(t,n.firstChild));}});n.observe(document.body,{childList:!0,subtree:!0});}};for(const e in a)o.on(e,a[e]);function d(){let e=window.location.hostname;if(!e)return !1;e=e.toLowerCase();const t=["1password.com","1password.eu","1password.ca","b5dev.com","b5dev.ca","b5test.com","b5test.ca","b5staging.com","b5local.com"];for(let n of t)if(e===n||e.endsWith("."+n))return !0;return !1}function r(e){const t=document.querySelector(`iframe[src="${e}"]`);t&&document.body.removeChild(t);}function c(e){!function(e,t){let n=document.createElement("iframe");n.id=e,t&&(n.src=t);document.body.appendChild(n);}("b5x-notification",e);}const l={B5WebReady:function(e){if(!d())return;let t=e.detail;if(!t.capabilities.DeviceInit)return;o.request({name:"b5Ready",data:{deviceInit:t.capabilities.DeviceInit,sessionInit:t.capabilities.SessionInit}});},B5SignInSucceeded:function(e){if(!d())return;let t=e.detail;t.signinAddress=window.location.origin,o.request({name:"sign-in-succeeded",data:{details:t}}),o.on("show-add-account-prompt",c),o.on("close-add-account-prompt",r);}};for(let e in l)document.addEventListener(e,l[e]);function u(){document.dispatchEvent(new CustomEvent("B5OPXReady",{bubbles:!1,cancelable:!1,detail:m({capabilities:{CustomAutosave:!0,SessionInit:1,DeviceInit:1}})}));}function m(e){return "function"==typeof cloneInto?cloneInto(e,window.document):e}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",u):u(),o.request({name:"get-build-number",data:{}}).then(e=>{document.body.dataset.onepasswordExtensionVersion=e;});

}());
