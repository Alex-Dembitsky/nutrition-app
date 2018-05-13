/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(8);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(28);

	__webpack_require__(29);

		__webpack_require__(30);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(window).on('load', function () {
	    $('html').removeClass('loading').addClass('loading-complete');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
	!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"=="function"&&__webpack_require__(3)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return w}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	var mobileDetermine = function mobileDetermine() {
	    return (/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
	    );
	};

	window.isMobile = mobileDetermine();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	(function () {

	    var ie11 = !!navigator.userAgent.match(/Trident\/7\./);

	    if (ie11) {
	        document.documentElement.classList.add('ie11');
	        console.log('ie11');
	    }
		})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _skrollr = __webpack_require__(7);

	var _skrollr2 = _interopRequireDefault(_skrollr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var desktop = window.isMobile == false; // source https://www.npmjs.com/package/skrollr


	function initializeSkrollr() {
	    if (desktop) {
	        window.myScrollr = _skrollr2.default.init({
	            constants: {
	                hhh: -43 // header half height
	            },
	            smoothScrolling: false
	        });
	    } else {
	        document.getElementsByTagName('html')[0].setAttribute('class', 'mobile-device');
	    }
	}

	window.addEventListener('load', initializeSkrollr);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
	(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[]; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return i}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	__webpack_require__(9);

	jQuery('.gallery-section .gallery').slick({
	    // infinite: true,
	    dots: true,
	    slidesToShow: 1
	    // slidesToScroll: 1
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(i){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (i), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	(function () {

	    var parallaxBackgroundElements = document.querySelectorAll('.parallaxBackground');
	    var desktop = window.isMobile == false;

	    function mouseMoveParallax(event) {
	        var positionMouseVertical = event.clientY;
	        var positionMouseHorisontal = event.clientX;

	        for (var i = 0; i < parallaxBackgroundElements.length; i++) {
	            var item = parallaxBackgroundElements[i];
	            item.style.top = positionMouseVertical / 35 + 'px';
	            item.style.left = positionMouseHorisontal / 35 + 'px';
	            item.style.right = -positionMouseHorisontal / 35 + 'px';
	            item.style.bottom = -positionMouseVertical / 35 + 'px';
	        }
	    }

	    if (desktop) {
	        document.addEventListener('mousemove', mouseMoveParallax);
	    }
		})();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    var desktop = window.isMobile == false;

	    if (desktop) {
	        var onScroll = function onScroll() {
	            var scrollPos = $(document).scrollTop();

	            $('header li a').each(function () {
	                var currLink = $(this);
	                var refElement = $(currLink.attr('href'));

	                if (refElement.offset().top - 86 <= scrollPos && refElement.offset().top + refElement.height() > scrollPos - 86) {
	                    // "- 86" height of navigation in header
	                    $('header li').removeClass('active');
	                    currLink.closest('li').addClass('active');
	                } else {
	                    currLink.closest('li').removeClass('active');
	                }
	            });
	        };

	        $(document).on('click', 'header li a[href^="#"]', function () {
	            $(document).on('scroll', onScroll);

	            $('header li a[href^="#"]').each(function () {
	                $(this).closest('li').removeClass('active');
	            });
	            $(this).closest('li').addClass('active');
	        });

	        $(document).on('scroll', onScroll);
	    }
		})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _jcf = __webpack_require__(13);

	var _jcf2 = _interopRequireDefault(_jcf);

	__webpack_require__(22);

	__webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function ($) {
	    _jcf2.default.setOptions('Select', {
	        wrapNative: false,
	        maxVisibleItems: 4,
	        useCustomScroll: true
	    });
	    _jcf2.default.replace('select');

	    $(document).on('DOMNodeInserted', function (event) {
	        if ($(event.target).is('.jcf-select-drop.jcf-select-jcf-hidden.jcf-unselectable')) {
	            if ($(event.target).find('.jcf-option-default-value').length == 1) {
	                var elemPosition = $(event.target).find('.jcf-option-default-value').position().top;
	                $('.jcf-select-drop .jcf-list-content').animate({ scrollTop: elemPosition }, 10);
	            }
	        }
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	window.jcf = __webpack_require__(14);

	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);

	module.exports = window.jcf;

	delete window.jcf;



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Custom Forms
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */
	;(function(root, factory) {
		'use strict';
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory(require('jquery'));
		} else {
			root.jcf = factory(jQuery);
		}
	}(this, function($) {
		'use strict';

		// define version
		var version = '1.2.3';

		// private variables
		var customInstances = [];

		// default global options
		var commonOptions = {
			optionsKey: 'jcf',
			dataKey: 'jcf-instance',
			rtlClass: 'jcf-rtl',
			focusClass: 'jcf-focus',
			pressedClass: 'jcf-pressed',
			disabledClass: 'jcf-disabled',
			hiddenClass: 'jcf-hidden',
			resetAppearanceClass: 'jcf-reset-appearance',
			unselectableClass: 'jcf-unselectable'
		};

		// detect device type
		var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
			isWinPhoneDevice = /Windows Phone/.test(navigator.userAgent);
		commonOptions.isMobileDevice = !!(isTouchDevice || isWinPhoneDevice);

		// create global stylesheet if custom forms are used
		var createStyleSheet = function() {
			var styleTag = $('<style>').appendTo('head'),
				styleSheet = styleTag.prop('sheet') || styleTag.prop('styleSheet');

			// crossbrowser style handling
			var addCSSRule = function(selector, rules, index) {
				index = index || 0;
				if (styleSheet.insertRule) {
					styleSheet.insertRule(selector + '{' + rules + '}', index);
				} else {
					styleSheet.addRule(selector, rules, index);
				}
			};

			// add special rules
			addCSSRule('.' + commonOptions.hiddenClass, 'position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none');
			addCSSRule('.' + commonOptions.rtlClass + ' .' + commonOptions.hiddenClass, 'right:-9999px !important; left: auto !important');
			addCSSRule('.' + commonOptions.unselectableClass, '-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);');
			addCSSRule('.' + commonOptions.resetAppearanceClass, 'background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);');

			// detect rtl pages
			var html = $('html'), body = $('body');
			if (html.css('direction') === 'rtl' || body.css('direction') === 'rtl') {
				html.addClass(commonOptions.rtlClass);
			}

			// handle form reset event
			html.on('reset', function() {
				setTimeout(function() {
					api.refreshAll();
				}, 0);
			});

			// mark stylesheet as created
			commonOptions.styleSheetCreated = true;
		};

		// simplified pointer events handler
		(function() {
			var pointerEventsSupported = navigator.pointerEnabled || navigator.msPointerEnabled,
				touchEventsSupported = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
				eventList, eventMap = {}, eventPrefix = 'jcf-';

			// detect events to attach
			if (pointerEventsSupported) {
				eventList = {
					pointerover: navigator.pointerEnabled ? 'pointerover' : 'MSPointerOver',
					pointerdown: navigator.pointerEnabled ? 'pointerdown' : 'MSPointerDown',
					pointermove: navigator.pointerEnabled ? 'pointermove' : 'MSPointerMove',
					pointerup: navigator.pointerEnabled ? 'pointerup' : 'MSPointerUp'
				};
			} else {
				eventList = {
					pointerover: 'mouseover',
					pointerdown: 'mousedown' + (touchEventsSupported ? ' touchstart' : ''),
					pointermove: 'mousemove' + (touchEventsSupported ? ' touchmove' : ''),
					pointerup: 'mouseup' + (touchEventsSupported ? ' touchend' : '')
				};
			}

			// create event map
			$.each(eventList, function(targetEventName, fakeEventList) {
				$.each(fakeEventList.split(' '), function(index, fakeEventName) {
					eventMap[fakeEventName] = targetEventName;
				});
			});

			// jQuery event hooks
			$.each(eventList, function(eventName, eventHandlers) {
				eventHandlers = eventHandlers.split(' ');
				$.event.special[eventPrefix + eventName] = {
					setup: function() {
						var self = this;
						$.each(eventHandlers, function(index, fallbackEvent) {
							if (self.addEventListener) self.addEventListener(fallbackEvent, fixEvent, false);
							else self['on' + fallbackEvent] = fixEvent;
						});
					},
					teardown: function() {
						var self = this;
						$.each(eventHandlers, function(index, fallbackEvent) {
							if (self.addEventListener) self.removeEventListener(fallbackEvent, fixEvent, false);
							else self['on' + fallbackEvent] = null;
						});
					}
				};
			});

			// check that mouse event are not simulated by mobile browsers
			var lastTouch = null;
			var mouseEventSimulated = function(e) {
				var dx = Math.abs(e.pageX - lastTouch.x),
					dy = Math.abs(e.pageY - lastTouch.y),
					rangeDistance = 25;

				if (dx <= rangeDistance && dy <= rangeDistance) {
					return true;
				}
			};

			// normalize event
			var fixEvent = function(e) {
				var origEvent = e || window.event,
					touchEventData = null,
					targetEventName = eventMap[origEvent.type];

				e = $.event.fix(origEvent);
				e.type = eventPrefix + targetEventName;

				if (origEvent.pointerType) {
					switch (origEvent.pointerType) {
						case 2: e.pointerType = 'touch'; break;
						case 3: e.pointerType = 'pen'; break;
						case 4: e.pointerType = 'mouse'; break;
						default: e.pointerType = origEvent.pointerType;
					}
				} else {
					e.pointerType = origEvent.type.substr(0, 5); // "mouse" or "touch" word length
				}

				if (!e.pageX && !e.pageY) {
					touchEventData = origEvent.changedTouches ? origEvent.changedTouches[0] : origEvent;
					e.pageX = touchEventData.pageX;
					e.pageY = touchEventData.pageY;
				}

				if (origEvent.type === 'touchend') {
					lastTouch = { x: e.pageX, y: e.pageY };
				}
				if (e.pointerType === 'mouse' && lastTouch && mouseEventSimulated(e)) {
					return;
				} else {
					return ($.event.dispatch || $.event.handle).call(this, e);
				}
			};
		}());

		// custom mousewheel/trackpad handler
		(function() {
			var wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll').split(' '),
				shimEventName = 'jcf-mousewheel';

			$.event.special[shimEventName] = {
				setup: function() {
					var self = this;
					$.each(wheelEvents, function(index, fallbackEvent) {
						if (self.addEventListener) self.addEventListener(fallbackEvent, fixEvent, false);
						else self['on' + fallbackEvent] = fixEvent;
					});
				},
				teardown: function() {
					var self = this;
					$.each(wheelEvents, function(index, fallbackEvent) {
						if (self.addEventListener) self.removeEventListener(fallbackEvent, fixEvent, false);
						else self['on' + fallbackEvent] = null;
					});
				}
			};

			var fixEvent = function(e) {
				var origEvent = e || window.event;
				e = $.event.fix(origEvent);
				e.type = shimEventName;

				// old wheel events handler
				if ('detail'      in origEvent) { e.deltaY = -origEvent.detail;      }
				if ('wheelDelta'  in origEvent) { e.deltaY = -origEvent.wheelDelta;  }
				if ('wheelDeltaY' in origEvent) { e.deltaY = -origEvent.wheelDeltaY; }
				if ('wheelDeltaX' in origEvent) { e.deltaX = -origEvent.wheelDeltaX; }

				// modern wheel event handler
				if ('deltaY' in origEvent) {
					e.deltaY = origEvent.deltaY;
				}
				if ('deltaX' in origEvent) {
					e.deltaX = origEvent.deltaX;
				}

				// handle deltaMode for mouse wheel
				e.delta = e.deltaY || e.deltaX;
				if (origEvent.deltaMode === 1) {
					var lineHeight = 16;
					e.delta *= lineHeight;
					e.deltaY *= lineHeight;
					e.deltaX *= lineHeight;
				}

				return ($.event.dispatch || $.event.handle).call(this, e);
			};
		}());

		// extra module methods
		var moduleMixin = {
			// provide function for firing native events
			fireNativeEvent: function(elements, eventName) {
				$(elements).each(function() {
					var element = this, eventObject;
					if (element.dispatchEvent) {
						eventObject = document.createEvent('HTMLEvents');
						eventObject.initEvent(eventName, true, true);
						element.dispatchEvent(eventObject);
					} else if (document.createEventObject) {
						eventObject = document.createEventObject();
						eventObject.target = element;
						element.fireEvent('on' + eventName, eventObject);
					}
				});
			},
			// bind event handlers for module instance (functions beggining with "on")
			bindHandlers: function() {
				var self = this;
				$.each(self, function(propName, propValue) {
					if (propName.indexOf('on') === 0 && $.isFunction(propValue)) {
						// dont use $.proxy here because it doesn't create unique handler
						self[propName] = function() {
							return propValue.apply(self, arguments);
						};
					}
				});
			}
		};

		// public API
		var api = {
			version: version,
			modules: {},
			getOptions: function() {
				return $.extend({}, commonOptions);
			},
			setOptions: function(moduleName, moduleOptions) {
				if (arguments.length > 1) {
					// set module options
					if (this.modules[moduleName]) {
						$.extend(this.modules[moduleName].prototype.options, moduleOptions);
					}
				} else {
					// set common options
					$.extend(commonOptions, moduleName);
				}
			},
			addModule: function(proto) {
				// proto is factory function
				if ($.isFunction(proto)) {
					proto = proto($, window);
				}

				// add module to list
				var Module = function(options) {
					// save instance to collection
					if (!options.element.data(commonOptions.dataKey)) {
						options.element.data(commonOptions.dataKey, this);
					}
					customInstances.push(this);

					// save options
					this.options = $.extend({}, commonOptions, this.options, getInlineOptions(options.element), options);

					// bind event handlers to instance
					this.bindHandlers();

					// call constructor
					this.init.apply(this, arguments);
				};

				// parse options from HTML attribute
				var getInlineOptions = function(element) {
					var dataOptions = element.data(commonOptions.optionsKey),
						attrOptions = element.attr(commonOptions.optionsKey);

					if (dataOptions) {
						return dataOptions;
					} else if (attrOptions) {
						try {
							return $.parseJSON(attrOptions);
						} catch (e) {
							// ignore invalid attributes
						}
					}
				};

				// set proto as prototype for new module
				Module.prototype = proto;

				// add mixin methods to module proto
				$.extend(proto, moduleMixin);
				if (proto.plugins) {
					$.each(proto.plugins, function(pluginName, plugin) {
						$.extend(plugin.prototype, moduleMixin);
					});
				}

				// override destroy method
				var originalDestroy = Module.prototype.destroy;
				Module.prototype.destroy = function() {
					this.options.element.removeData(this.options.dataKey);

					for (var i = customInstances.length - 1; i >= 0; i--) {
						if (customInstances[i] === this) {
							customInstances.splice(i, 1);
							break;
						}
					}

					if (originalDestroy) {
						originalDestroy.apply(this, arguments);
					}
				};

				// save module to list
				this.modules[proto.name] = Module;
			},
			getInstance: function(element) {
				return $(element).data(commonOptions.dataKey);
			},
			replace: function(elements, moduleName, customOptions) {
				var self = this,
					instance;

				if (!commonOptions.styleSheetCreated) {
					createStyleSheet();
				}

				$(elements).each(function() {
					var moduleOptions,
						element = $(this);

					instance = element.data(commonOptions.dataKey);
					if (instance) {
						instance.refresh();
					} else {
						if (!moduleName) {
							$.each(self.modules, function(currentModuleName, module) {
								if (module.prototype.matchElement.call(module.prototype, element)) {
									moduleName = currentModuleName;
									return false;
								}
							});
						}
						if (moduleName) {
							moduleOptions = $.extend({ element: element }, customOptions);
							instance = new self.modules[moduleName](moduleOptions);
						}
					}
				});
				return instance;
			},
			refresh: function(elements) {
				$(elements).each(function() {
					var instance = $(this).data(commonOptions.dataKey);
					if (instance) {
						instance.refresh();
					}
				});
			},
			destroy: function(elements) {
				$(elements).each(function() {
					var instance = $(this).data(commonOptions.dataKey);
					if (instance) {
						instance.destroy();
					}
				});
			},
			replaceAll: function(context) {
				var self = this;
				$.each(this.modules, function(moduleName, module) {
					$(module.prototype.selector, context).each(function() {
						if (this.className.indexOf('jcf-ignore') < 0) {
							self.replace(this, moduleName);
						}
					});
				});
			},
			refreshAll: function(context) {
				if (context) {
					$.each(this.modules, function(moduleName, module) {
						$(module.prototype.selector, context).each(function() {
							var instance = $(this).data(commonOptions.dataKey);
							if (instance) {
								instance.refresh();
							}
						});
					});
				} else {
					for (var i = customInstances.length - 1; i >= 0; i--) {
						customInstances[i].refresh();
					}
				}
			},
			destroyAll: function(context) {
				if (context) {
					$.each(this.modules, function(moduleName, module) {
						$(module.prototype.selector, context).each(function(index, element) {
							var instance = $(element).data(commonOptions.dataKey);
							if (instance) {
								instance.destroy();
							}
						});
					});
				} else {
					while (customInstances.length) {
						customInstances[0].destroy();
					}
				}
			}
		};

		// we need to make JCF available globally if we're in AMD environment
		if (true) {
			window.jcf = api;
		}

		return api;
	}));


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Button Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'Button',
			selector: 'button, input[type="button"], input[type="submit"], input[type="reset"]',
			options: {
				realElementClass: 'jcf-real-element',
				fakeStructure: '<span class="jcf-button"><span class="jcf-button-content"></span></span>',
				buttonContent: '.jcf-button-content'
			},
			matchElement: function(element) {
				return element.is(this.selector);
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				this.page = $('html');
				this.realElement = $(this.options.element).addClass(this.options.realElementClass);
				this.fakeElement = $(this.options.fakeStructure).insertBefore(this.realElement);
				this.buttonContent = this.fakeElement.find(this.options.buttonContent);

				this.fakeElement.css({
					position: 'relative'
				});
				this.realElement.prependTo(this.fakeElement).css({
					position: 'absolute',
					opacity: 0
				});
			},
			attachEvents: function() {
				this.realElement.on({
					focus: this.onFocus,
					'jcf-pointerdown': this.onPress
				});
			},
			onPress: function() {
				this.fakeElement.addClass(this.options.pressedClass);
				this.page.on('jcf-pointerup', this.onRelease);
			},
			onRelease: function() {
				this.fakeElement.removeClass(this.options.pressedClass);
				this.page.off('jcf-pointerup', this.onRelease);
			},
			onFocus: function() {
				this.fakeElement.addClass(this.options.focusClass);
				this.realElement.on('blur', this.onBlur);
			},
			onBlur: function() {
				this.fakeElement.removeClass(this.options.focusClass);
				this.realElement.off('blur', this.onBlur);
			},
			refresh: function() {
				this.buttonContent.html(this.realElement.html() || this.realElement.val());
				this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
			},
			destroy: function() {
				this.realElement.removeClass(this.options.realElementClass).insertBefore(this.fakeElement);
				this.fakeElement.remove();

				this.realElement.off({
					focus: this.onFocus,
					blur: this.onBlur,
					'jcf-pointerdown': this.onPress
				});

				this.realElement.css({
					position: '',
					opacity: ''
				});
			}
		};
	});

	}(jcf));


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Checkbox Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'Checkbox',
			selector: 'input[type="checkbox"]',
			options: {
				wrapNative: true,
				checkedClass: 'jcf-checked',
				uncheckedClass: 'jcf-unchecked',
				labelActiveClass: 'jcf-label-active',
				fakeStructure: '<span class="jcf-checkbox"><span></span></span>'
			},
			matchElement: function(element) {
				return element.is(':checkbox');
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				// prepare structure
				this.doc = $(document);
				this.realElement = $(this.options.element);
				this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
				this.labelElement = this.getLabelFor();

				if (this.options.wrapNative) {
					// wrap native checkbox inside fake block
					this.realElement.appendTo(this.fakeElement).css({
						position: 'absolute',
						height: '100%',
						width: '100%',
						opacity: 0,
						margin: 0
					});
				} else {
					// just hide native checkbox
					this.realElement.addClass(this.options.hiddenClass);
				}
			},
			attachEvents: function() {
				// add event handlers
				this.realElement.on({
					focus: this.onFocus,
					click: this.onRealClick
				});
				this.fakeElement.on('click', this.onFakeClick);
				this.fakeElement.on('jcf-pointerdown', this.onPress);
			},
			onRealClick: function(e) {
				// just redraw fake element (setTimeout handles click that might be prevented)
				var self = this;
				this.savedEventObject = e;
				setTimeout(function() {
					self.refresh();
				}, 0);
			},
			onFakeClick: function(e) {
				// skip event if clicked on real element inside wrapper
				if (this.options.wrapNative && this.realElement.is(e.target)) {
					return;
				}

				// toggle checked class
				if (!this.realElement.is(':disabled')) {
					delete this.savedEventObject;
					this.stateChecked = this.realElement.prop('checked');
					this.realElement.prop('checked', !this.stateChecked);
					this.fireNativeEvent(this.realElement, 'click');
					if (this.savedEventObject && this.savedEventObject.isDefaultPrevented()) {
						this.realElement.prop('checked', this.stateChecked);
					} else {
						this.fireNativeEvent(this.realElement, 'change');
					}
					delete this.savedEventObject;
				}
			},
			onFocus: function() {
				if (!this.pressedFlag || !this.focusedFlag) {
					this.focusedFlag = true;
					this.fakeElement.addClass(this.options.focusClass);
					this.realElement.on('blur', this.onBlur);
				}
			},
			onBlur: function() {
				if (!this.pressedFlag) {
					this.focusedFlag = false;
					this.fakeElement.removeClass(this.options.focusClass);
					this.realElement.off('blur', this.onBlur);
				}
			},
			onPress: function(e) {
				if (!this.focusedFlag && e.pointerType === 'mouse') {
					this.realElement.focus();
				}
				this.pressedFlag = true;
				this.fakeElement.addClass(this.options.pressedClass);
				this.doc.on('jcf-pointerup', this.onRelease);
			},
			onRelease: function(e) {
				if (this.focusedFlag && e.pointerType === 'mouse') {
					this.realElement.focus();
				}
				this.pressedFlag = false;
				this.fakeElement.removeClass(this.options.pressedClass);
				this.doc.off('jcf-pointerup', this.onRelease);
			},
			getLabelFor: function() {
				var parentLabel = this.realElement.closest('label'),
					elementId = this.realElement.prop('id');

				if (!parentLabel.length && elementId) {
					parentLabel = $('label[for="' + elementId + '"]');
				}
				return parentLabel.length ? parentLabel : null;
			},
			refresh: function() {
				// redraw custom checkbox
				var isChecked = this.realElement.is(':checked'),
					isDisabled = this.realElement.is(':disabled');

				this.fakeElement.toggleClass(this.options.checkedClass, isChecked)
								.toggleClass(this.options.uncheckedClass, !isChecked)
								.toggleClass(this.options.disabledClass, isDisabled);

				if (this.labelElement) {
					this.labelElement.toggleClass(this.options.labelActiveClass, isChecked);
				}
			},
			destroy: function() {
				// restore structure
				if (this.options.wrapNative) {
					this.realElement.insertBefore(this.fakeElement).css({
						position: '',
						width: '',
						height: '',
						opacity: '',
						margin: ''
					});
				} else {
					this.realElement.removeClass(this.options.hiddenClass);
				}

				// removing element will also remove its event handlers
				this.fakeElement.off('jcf-pointerdown', this.onPress);
				this.fakeElement.remove();

				// remove other event handlers
				this.doc.off('jcf-pointerup', this.onRelease);
				this.realElement.off({
					focus: this.onFocus,
					click: this.onRealClick
				});
			}
		};
	});

	}(jcf));


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : File Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'File',
			selector: 'input[type="file"]',
			options: {
				fakeStructure: '<span class="jcf-file"><span class="jcf-fake-input"></span><span class="jcf-upload-button"><span class="jcf-button-content"></span></span></span>',
				buttonText: 'Choose file',
				placeholderText: 'No file chosen',
				realElementClass: 'jcf-real-element',
				extensionPrefixClass: 'jcf-extension-',
				selectedFileBlock: '.jcf-fake-input',
				buttonTextBlock: '.jcf-button-content'
			},
			matchElement: function(element) {
				return element.is('input[type="file"]');
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				this.doc = $(document);
				this.realElement = $(this.options.element).addClass(this.options.realElementClass);
				this.fakeElement = $(this.options.fakeStructure).insertBefore(this.realElement);
				this.fileNameBlock = this.fakeElement.find(this.options.selectedFileBlock);
				this.buttonTextBlock = this.fakeElement.find(this.options.buttonTextBlock).text(this.options.buttonText);

				this.realElement.appendTo(this.fakeElement).css({
					position: 'absolute',
					opacity: 0
				});
			},
			attachEvents: function() {
				this.realElement.on({
					'jcf-pointerdown': this.onPress,
					change: this.onChange,
					focus: this.onFocus
				});
			},
			onChange: function() {
				this.refresh();
			},
			onFocus: function() {
				this.fakeElement.addClass(this.options.focusClass);
				this.realElement.on('blur', this.onBlur);
			},
			onBlur: function() {
				this.fakeElement.removeClass(this.options.focusClass);
				this.realElement.off('blur', this.onBlur);
			},
			onPress: function() {
				this.fakeElement.addClass(this.options.pressedClass);
				this.doc.on('jcf-pointerup', this.onRelease);
			},
			onRelease: function() {
				this.fakeElement.removeClass(this.options.pressedClass);
				this.doc.off('jcf-pointerup', this.onRelease);
			},
			getFileName: function() {
				var resultFileName = '',
					files = this.realElement.prop('files');

				if (files && files.length) {
					$.each(files, function(index, file) {
						resultFileName += (index > 0 ? ', ' : '') + file.name;
					});
				} else {
					resultFileName = this.realElement.val().replace(/^[\s\S]*(?:\\|\/)([\s\S^\\\/]*)$/g, '$1');
				}

				return resultFileName;
			},
			getFileExtension: function() {
				var fileName = this.realElement.val();
				return fileName.lastIndexOf('.') < 0 ? '' : fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
			},
			updateExtensionClass: function() {
				var currentExtension = this.getFileExtension(),
					currentClassList = this.fakeElement.prop('className'),
					cleanedClassList = currentClassList.replace(new RegExp('(\\s|^)' + this.options.extensionPrefixClass + '[^ ]+','gi'), '');

				this.fakeElement.prop('className', cleanedClassList);
				if (currentExtension) {
					this.fakeElement.addClass(this.options.extensionPrefixClass + currentExtension);
				}
			},
			refresh: function() {
				var selectedFileName = this.getFileName() || this.options.placeholderText;
				this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
				this.fileNameBlock.text(selectedFileName);
				this.updateExtensionClass();
			},
			destroy: function() {
				// reset styles and restore element position
				this.realElement.insertBefore(this.fakeElement).removeClass(this.options.realElementClass).css({
					position: '',
					opacity: ''
				});
				this.fakeElement.remove();

				// remove event handlers
				this.realElement.off({
					'jcf-pointerdown': this.onPress,
					change: this.onChange,
					focus: this.onFocus,
					blur: this.onBlur
				});
				this.doc.off('jcf-pointerup', this.onRelease);
			}
		};
	});

	}(jcf));


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Number Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'Number',
			selector: 'input[type="number"]',
			options: {
				realElementClass: 'jcf-real-element',
				fakeStructure: '<span class="jcf-number"><span class="jcf-btn-inc"></span><span class="jcf-btn-dec"></span></span>',
				btnIncSelector: '.jcf-btn-inc',
				btnDecSelector: '.jcf-btn-dec',
				pressInterval: 150
			},
			matchElement: function(element) {
				return element.is(this.selector);
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				this.page = $('html');
				this.realElement = $(this.options.element).addClass(this.options.realElementClass);
				this.fakeElement = $(this.options.fakeStructure).insertBefore(this.realElement).prepend(this.realElement);
				this.btnDec = this.fakeElement.find(this.options.btnDecSelector);
				this.btnInc = this.fakeElement.find(this.options.btnIncSelector);

				// set initial values
				this.initialValue = parseFloat(this.realElement.val()) || 0;
				this.minValue = parseFloat(this.realElement.attr('min'));
				this.maxValue = parseFloat(this.realElement.attr('max'));
				this.stepValue = parseFloat(this.realElement.attr('step')) || 1;

				// check attribute values
				this.minValue = isNaN(this.minValue) ? -Infinity : this.minValue;
				this.maxValue = isNaN(this.maxValue) ? Infinity : this.maxValue;

				// handle range
				if (isFinite(this.maxValue)) {
					this.maxValue -= (this.maxValue - this.minValue) % this.stepValue;
				}
			},
			attachEvents: function() {
				this.realElement.on({
					focus: this.onFocus
				});
				this.btnDec.add(this.btnInc).on('jcf-pointerdown', this.onBtnPress);
			},
			onBtnPress: function(e) {
				var self = this,
					increment;

				if (!this.realElement.is(':disabled')) {
					increment = this.btnInc.is(e.currentTarget);

					self.step(increment);
					clearInterval(this.stepTimer);
					this.stepTimer = setInterval(function() {
						self.step(increment);
					}, this.options.pressInterval);

					this.page.on('jcf-pointerup', this.onBtnRelease);
				}
			},
			onBtnRelease: function() {
				clearInterval(this.stepTimer);
				this.page.off('jcf-pointerup', this.onBtnRelease);
			},
			onFocus: function() {
				this.fakeElement.addClass(this.options.focusClass);
				this.realElement.on({
					blur: this.onBlur,
					keydown: this.onKeyPress
				});
			},
			onBlur: function() {
				this.fakeElement.removeClass(this.options.focusClass);
				this.realElement.off({
					blur: this.onBlur,
					keydown: this.onKeyPress
				});
			},
			onKeyPress: function(e) {
				if (e.which === 38 || e.which === 40) {
					e.preventDefault();
					this.step(e.which === 38);
				}
			},
			step: function(increment) {
				var originalValue = parseFloat(this.realElement.val()),
					newValue = originalValue || 0,
					addValue = this.stepValue * (increment ? 1 : -1),
					edgeNumber = isFinite(this.minValue) ? this.minValue : this.initialValue - Math.abs(newValue * this.stepValue),
					diff = Math.abs(edgeNumber - newValue) % this.stepValue;

				// handle step diff
				if (diff) {
					if (increment) {
						newValue += addValue - diff;
					} else {
						newValue -= diff;
					}
				} else {
					newValue += addValue;
				}

				// handle min/max limits
				if (newValue < this.minValue) {
					newValue = this.minValue;
				} else if (newValue > this.maxValue) {
					newValue = this.maxValue;
				}

				// update value in real input if its changed
				if (newValue !== originalValue) {
					this.realElement.val(newValue).trigger('change');
					this.refresh();
				}
			},
			refresh: function() {
				var isDisabled = this.realElement.is(':disabled'),
					currentValue = parseFloat(this.realElement.val());

				// handle disabled state
				this.fakeElement.toggleClass(this.options.disabledClass, isDisabled);

				// refresh button classes
				this.btnDec.toggleClass(this.options.disabledClass, currentValue === this.minValue);
				this.btnInc.toggleClass(this.options.disabledClass, currentValue === this.maxValue);
			},
			destroy: function() {
				// restore original structure
				this.realElement.removeClass(this.options.realElementClass).insertBefore(this.fakeElement);
				this.fakeElement.remove();
				clearInterval(this.stepTimer);

				// remove event handlers
				this.page.off('jcf-pointerup', this.onBtnRelease);
				this.realElement.off({
					keydown: this.onKeyPress,
					focus: this.onFocus,
					blur: this.onBlur
				});
			}
		};
	});

	}(jcf));


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Radio Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'Radio',
			selector: 'input[type="radio"]',
			options: {
				wrapNative: true,
				checkedClass: 'jcf-checked',
				uncheckedClass: 'jcf-unchecked',
				labelActiveClass: 'jcf-label-active',
				fakeStructure: '<span class="jcf-radio"><span></span></span>'
			},
			matchElement: function(element) {
				return element.is(':radio');
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				// prepare structure
				this.doc = $(document);
				this.realElement = $(this.options.element);
				this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
				this.labelElement = this.getLabelFor();

				if (this.options.wrapNative) {
					// wrap native radio inside fake block
					this.realElement.prependTo(this.fakeElement).css({
						position: 'absolute',
						opacity: 0
					});
				} else {
					// just hide native radio
					this.realElement.addClass(this.options.hiddenClass);
				}
			},
			attachEvents: function() {
				// add event handlers
				this.realElement.on({
					focus: this.onFocus,
					click: this.onRealClick
				});
				this.fakeElement.on('click', this.onFakeClick);
				this.fakeElement.on('jcf-pointerdown', this.onPress);
			},
			onRealClick: function(e) {
				// redraw current radio and its group (setTimeout handles click that might be prevented)
				var self = this;
				this.savedEventObject = e;
				setTimeout(function() {
					self.refreshRadioGroup();
				}, 0);
			},
			onFakeClick: function(e) {
				// skip event if clicked on real element inside wrapper
				if (this.options.wrapNative && this.realElement.is(e.target)) {
					return;
				}

				// toggle checked class
				if (!this.realElement.is(':disabled')) {
					delete this.savedEventObject;
					this.currentActiveRadio = this.getCurrentActiveRadio();
					this.stateChecked = this.realElement.prop('checked');
					this.realElement.prop('checked', true);
					this.fireNativeEvent(this.realElement, 'click');
					if (this.savedEventObject && this.savedEventObject.isDefaultPrevented()) {
						this.realElement.prop('checked', this.stateChecked);
						this.currentActiveRadio.prop('checked', true);
					} else {
						this.fireNativeEvent(this.realElement, 'change');
					}
					delete this.savedEventObject;
				}
			},
			onFocus: function() {
				if (!this.pressedFlag || !this.focusedFlag) {
					this.focusedFlag = true;
					this.fakeElement.addClass(this.options.focusClass);
					this.realElement.on('blur', this.onBlur);
				}
			},
			onBlur: function() {
				if (!this.pressedFlag) {
					this.focusedFlag = false;
					this.fakeElement.removeClass(this.options.focusClass);
					this.realElement.off('blur', this.onBlur);
				}
			},
			onPress: function(e) {
				if (!this.focusedFlag && e.pointerType === 'mouse') {
					this.realElement.focus();
				}
				this.pressedFlag = true;
				this.fakeElement.addClass(this.options.pressedClass);
				this.doc.on('jcf-pointerup', this.onRelease);
			},
			onRelease: function(e) {
				if (this.focusedFlag && e.pointerType === 'mouse') {
					this.realElement.focus();
				}
				this.pressedFlag = false;
				this.fakeElement.removeClass(this.options.pressedClass);
				this.doc.off('jcf-pointerup', this.onRelease);
			},
			getCurrentActiveRadio: function() {
				return this.getRadioGroup(this.realElement).filter(':checked');
			},
			getRadioGroup: function(radio) {
				// find radio group for specified radio button
				var name = radio.attr('name'),
					parentForm = radio.parents('form');

				if (name) {
					if (parentForm.length) {
						return parentForm.find('input[name="' + name + '"]');
					} else {
						return $('input[name="' + name + '"]:not(form input)');
					}
				} else {
					return radio;
				}
			},
			getLabelFor: function() {
				var parentLabel = this.realElement.closest('label'),
					elementId = this.realElement.prop('id');

				if (!parentLabel.length && elementId) {
					parentLabel = $('label[for="' + elementId + '"]');
				}
				return parentLabel.length ? parentLabel : null;
			},
			refreshRadioGroup: function() {
				// redraw current radio and its group
				this.getRadioGroup(this.realElement).each(function() {
					jcf.refresh(this);
				});
			},
			refresh: function() {
				// redraw current radio button
				var isChecked = this.realElement.is(':checked'),
					isDisabled = this.realElement.is(':disabled');

				this.fakeElement.toggleClass(this.options.checkedClass, isChecked)
								.toggleClass(this.options.uncheckedClass, !isChecked)
								.toggleClass(this.options.disabledClass, isDisabled);

				if (this.labelElement) {
					this.labelElement.toggleClass(this.options.labelActiveClass, isChecked);
				}
			},
			destroy: function() {
				// restore structure
				if (this.options.wrapNative) {
					this.realElement.insertBefore(this.fakeElement).css({
						position: '',
						width: '',
						height: '',
						opacity: '',
						margin: ''
					});
				} else {
					this.realElement.removeClass(this.options.hiddenClass);
				}

				// removing element will also remove its event handlers
				this.fakeElement.off('jcf-pointerdown', this.onPress);
				this.fakeElement.remove();

				// remove other event handlers
				this.doc.off('jcf-pointerup', this.onRelease);
				this.realElement.off({
					blur: this.onBlur,
					focus: this.onFocus,
					click: this.onRealClick
				});
			}
		};
	});

	}(jcf));


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Range Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'Range',
			selector: 'input[type="range"]',
			options: {
				realElementClass: 'jcf-real-element',
				fakeStructure: '<span class="jcf-range"><span class="jcf-range-wrapper"><span class="jcf-range-track"><span class="jcf-range-handle"></span></span></span></span>',
				dataListMark: '<span class="jcf-range-mark"></span>',
				rangeDisplayWrapper: '<span class="jcf-range-display-wrapper"></span>',
				rangeDisplay: '<span class="jcf-range-display"></span>',
				handleSelector: '.jcf-range-handle',
				trackSelector: '.jcf-range-track',
				activeHandleClass: 'jcf-active-handle',
				verticalClass: 'jcf-vertical',
				orientation: 'horizontal',
				range: false, // or "min", "max", "all"
				dragHandleCenter: true,
				snapToMarks: true,
				snapRadius: 5,
				minRange: 0
			},
			matchElement: function(element) {
				return element.is(this.selector);
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				this.page = $('html');
				this.realElement = $(this.options.element).addClass(this.options.hiddenClass);
				this.fakeElement = $(this.options.fakeStructure).insertBefore(this.realElement).prepend(this.realElement);
				this.track = this.fakeElement.find(this.options.trackSelector);
				this.trackHolder = this.track.parent();
				this.handle = this.fakeElement.find(this.options.handleSelector);
				this.createdHandleCount = 0;
				this.activeDragHandleIndex = 0;
				this.isMultiple = this.realElement.prop('multiple') || typeof this.realElement.attr('multiple') === 'string';
				this.values = this.isMultiple ? this.realElement.attr('value').split(',') : [this.realElement.val()];
				this.handleCount = this.isMultiple ? this.values.length : 1;

				// create range display
				this.rangeDisplayWrapper = $(this.options.rangeDisplayWrapper).insertBefore(this.track);
				if (this.options.range === 'min' || this.options.range === 'all') {
					this.rangeMin = $(this.options.rangeDisplay).addClass('jcf-range-min').prependTo(this.rangeDisplayWrapper);
				}
				if (this.options.range === 'max' || this.options.range === 'all') {
					this.rangeMax = $(this.options.rangeDisplay).addClass('jcf-range-max').prependTo(this.rangeDisplayWrapper);
				}

				// clone handles if needed
				while (this.createdHandleCount < this.handleCount) {
					this.createdHandleCount++;
					this.handle.clone().addClass('jcf-index-' + this.createdHandleCount).insertBefore(this.handle);

					// create mid ranges
					if (this.createdHandleCount > 1) {
						if (!this.rangeMid) {
							this.rangeMid = $();
						}
						this.rangeMid = this.rangeMid.add($(this.options.rangeDisplay).addClass('jcf-range-mid').prependTo(this.rangeDisplayWrapper));
					}
				}

				// grab all handles
				this.handle.detach();
				this.handle = null;
				this.handles = this.fakeElement.find(this.options.handleSelector);
				this.handles.eq(0).addClass(this.options.activeHandleClass);

				// handle orientation
				this.isVertical = (this.options.orientation === 'vertical');
				this.directionProperty = this.isVertical ? 'top' : 'left';
				this.offsetProperty = this.isVertical ? 'bottom' : 'left';
				this.eventProperty = this.isVertical ? 'pageY' : 'pageX';
				this.sizeProperty = this.isVertical ? 'height' : 'width';
				this.sizeMethod = this.isVertical ? 'innerHeight' : 'innerWidth';
				this.fakeElement.css('touchAction', this.isVertical ? 'pan-x' : 'pan-y');
				if (this.isVertical) {
					this.fakeElement.addClass(this.options.verticalClass);
				}

				// set initial values
				this.minValue = parseFloat(this.realElement.attr('min'));
				this.maxValue = parseFloat(this.realElement.attr('max'));
				this.stepValue = parseFloat(this.realElement.attr('step')) || 1;

				// check attribute values
				this.minValue = isNaN(this.minValue) ? 0 : this.minValue;
				this.maxValue = isNaN(this.maxValue) ? 100 : this.maxValue;

				// handle range
				if (this.stepValue !== 1) {
					this.maxValue -= (this.maxValue - this.minValue) % this.stepValue;
				}
				this.stepsCount = (this.maxValue - this.minValue) / this.stepValue;
				this.createDataList();
			},
			attachEvents: function() {
				this.realElement.on({
					focus: this.onFocus
				});
				this.trackHolder.on('jcf-pointerdown', this.onTrackPress);
				this.handles.on('jcf-pointerdown', this.onHandlePress);
			},
			createDataList: function() {
				var self = this,
					dataValues = [],
					dataListId = this.realElement.attr('list');

				if (dataListId) {
					$('#' + dataListId).find('option').each(function() {
						var itemValue = parseFloat(this.value || this.innerHTML),
							mark, markOffset;

						if (!isNaN(itemValue)) {
							markOffset = self.valueToOffset(itemValue);
							dataValues.push({
								value: itemValue,
								offset: markOffset
							});
							mark = $(self.options.dataListMark).text(itemValue).attr({
								'data-mark-value': itemValue
							}).css(self.offsetProperty, markOffset + '%').appendTo(self.track);
						}
					});
					if (dataValues.length) {
						self.dataValues = dataValues;
					}
				}
			},
			getDragHandleRange: function(handleIndex) {
				// calculate range for slider with multiple handles
				var minStep = -Infinity,
					maxStep = Infinity;

				if (handleIndex > 0) {
					minStep = this.valueToStepIndex(parseFloat(this.values[handleIndex - 1]) + this.options.minRange);
				}
				if (handleIndex < this.handleCount - 1) {
					maxStep = this.valueToStepIndex(parseFloat(this.values[handleIndex + 1]) - this.options.minRange);
				}

				return {
					minStepIndex: minStep,
					maxStepIndex: maxStep
				};
			},
			getNearestHandle: function(percent) {
				// handle vertical sliders
				if (this.isVertical) {
					percent = 1 - percent;
				}

				// detect closest handle when track is pressed
				var closestHandle = this.handles.eq(0),
					closestDistance = Infinity,
					self = this;

				if (this.handleCount > 1) {
					this.handles.each(function() {
						var handleOffset = parseFloat(this.style[self.offsetProperty]) / 100,
							handleDistance = Math.abs(handleOffset - percent);

						if (handleDistance < closestDistance) {
							closestDistance = handleDistance;
							closestHandle = $(this);
						}
					});
				}
				return closestHandle;
			},
			onTrackPress: function(e) {
				var trackSize, trackOffset, innerOffset;

				e.preventDefault();
				if (!this.realElement.is(':disabled') && !this.activeDragHandle) {
					trackSize = this.track[this.sizeMethod]();
					trackOffset = this.track.offset()[this.directionProperty];
					this.activeDragHandle = this.getNearestHandle((e[this.eventProperty] - trackOffset) / this.trackHolder[this.sizeMethod]());
					this.activeDragHandleIndex = this.handles.index(this.activeDragHandle);
					this.handles.removeClass(this.options.activeHandleClass).eq(this.activeDragHandleIndex).addClass(this.options.activeHandleClass);
					innerOffset = this.activeDragHandle[this.sizeMethod]() / 2;

					this.dragData = {
						trackSize: trackSize,
						innerOffset: innerOffset,
						trackOffset: trackOffset,
						min: trackOffset,
						max: trackOffset + trackSize
					};
					this.page.on({
						'jcf-pointermove': this.onHandleMove,
						'jcf-pointerup': this.onHandleRelease
					});

					if (e.pointerType === 'mouse') {
						this.realElement.focus();
					}

					this.onHandleMove(e);
				}
			},
			onHandlePress: function(e) {
				var trackSize, trackOffset, innerOffset;

				e.preventDefault();
				if (!this.realElement.is(':disabled') && !this.activeDragHandle) {
					this.activeDragHandle = $(e.currentTarget);
					this.activeDragHandleIndex = this.handles.index(this.activeDragHandle);
					this.handles.removeClass(this.options.activeHandleClass).eq(this.activeDragHandleIndex).addClass(this.options.activeHandleClass);
					trackSize = this.track[this.sizeMethod]();
					trackOffset = this.track.offset()[this.directionProperty];
					innerOffset = this.options.dragHandleCenter ? this.activeDragHandle[this.sizeMethod]() / 2 : e[this.eventProperty] - this.handle.offset()[this.directionProperty];

					this.dragData = {
						trackSize: trackSize,
						innerOffset: innerOffset,
						trackOffset: trackOffset,
						min: trackOffset,
						max: trackOffset + trackSize
					};
					this.page.on({
						'jcf-pointermove': this.onHandleMove,
						'jcf-pointerup': this.onHandleRelease
					});

					if (e.pointerType === 'mouse') {
						this.realElement.focus();
					}
				}
			},
			onHandleMove: function(e) {
				var self = this,
					newOffset, dragPercent, stepIndex, valuePercent, handleDragRange;

				// calculate offset
				if (this.isVertical) {
					newOffset = this.dragData.max + (this.dragData.min - e[this.eventProperty]) - this.dragData.innerOffset;
				} else {
					newOffset = e[this.eventProperty] - this.dragData.innerOffset;
				}

				// fit in range
				if (newOffset < this.dragData.min) {
					newOffset = this.dragData.min;
				} else if (newOffset > this.dragData.max) {
					newOffset = this.dragData.max;
				}

				e.preventDefault();
				if (this.options.snapToMarks && this.dataValues) {
					// snap handle to marks
					var dragOffset = newOffset - this.dragData.trackOffset;
					dragPercent = (newOffset - this.dragData.trackOffset) / this.dragData.trackSize * 100;

					$.each(this.dataValues, function(index, item) {
						var markOffset = item.offset / 100 * self.dragData.trackSize,
							markMin = markOffset - self.options.snapRadius,
							markMax = markOffset + self.options.snapRadius;

						if (dragOffset >= markMin && dragOffset <= markMax) {
							dragPercent = item.offset;
							return false;
						}
					});
				} else {
					// snap handle to steps
					dragPercent = (newOffset - this.dragData.trackOffset) / this.dragData.trackSize * 100;
				}

				// move handle only in range
				stepIndex = Math.round(dragPercent * this.stepsCount / 100);
				if (this.handleCount > 1) {
					handleDragRange = this.getDragHandleRange(this.activeDragHandleIndex);
					if (stepIndex < handleDragRange.minStepIndex) {
						stepIndex = Math.max(handleDragRange.minStepIndex, stepIndex);
					} else if (stepIndex > handleDragRange.maxStepIndex) {
						stepIndex = Math.min(handleDragRange.maxStepIndex, stepIndex);
					}
				}
				valuePercent = stepIndex * (100 / this.stepsCount);

				if (this.dragData.stepIndex !== stepIndex) {
					this.dragData.stepIndex = stepIndex;
					this.dragData.offset = valuePercent;
					this.activeDragHandle.css(this.offsetProperty, this.dragData.offset + '%');

					// update value(s) and trigger "input" event
					this.values[this.activeDragHandleIndex] = '' + this.stepIndexToValue(stepIndex);
					this.updateValues();
					this.realElement.trigger('input');
				}
			},
			onHandleRelease: function() {
				var newValue;
				if (typeof this.dragData.offset === 'number') {
					newValue = this.stepIndexToValue(this.dragData.stepIndex);
					this.realElement.val(newValue).trigger('change');
				}

				this.page.off({
					'jcf-pointermove': this.onHandleMove,
					'jcf-pointerup': this.onHandleRelease
				});
				delete this.activeDragHandle;
				delete this.dragData;
			},
			onFocus: function() {
				if (!this.fakeElement.hasClass(this.options.focusClass)) {
					this.fakeElement.addClass(this.options.focusClass);
					this.realElement.on({
						blur: this.onBlur,
						keydown: this.onKeyPress
					});
				}
			},
			onBlur: function() {
				this.fakeElement.removeClass(this.options.focusClass);
				this.realElement.off({
					blur: this.onBlur,
					keydown: this.onKeyPress
				});
			},
			onKeyPress: function(e) {
				var incValue = (e.which === 38 || e.which === 39),
					decValue = (e.which === 37 || e.which === 40);

				// handle TAB key in slider with multiple handles
				if (e.which === 9 && this.handleCount > 1) {
					if (e.shiftKey && this.activeDragHandleIndex > 0) {
						this.activeDragHandleIndex--;
					} else if (!e.shiftKey && this.activeDragHandleIndex < this.handleCount - 1) {
						this.activeDragHandleIndex++;
					} else {
						return;
					}
					e.preventDefault();
					this.handles.removeClass(this.options.activeHandleClass).eq(this.activeDragHandleIndex).addClass(this.options.activeHandleClass);
				}

				// handle cursor keys
				if (decValue || incValue) {
					e.preventDefault();
					this.step(incValue ? this.stepValue : -this.stepValue);
				}
			},
			updateValues: function() {
				var value = this.values.join(',');
				if (this.values.length > 1) {
					this.realElement.prop('valueLow', this.values[0]);
					this.realElement.prop('valueHigh', this.values[this.values.length - 1]);
					this.realElement.val(value);

					// if browser does not accept multiple values set only one
					if (this.realElement.val() !== value) {
						this.realElement.val(this.values[this.values.length - 1]);
					}
				} else {
					this.realElement.val(value);
				}

				this.updateRanges();
			},
			updateRanges: function() {
				// update display ranges
				var self = this,
					handle;

				if (this.rangeMin) {
					handle = this.handles[0];
					this.rangeMin.css(this.offsetProperty, 0).css(this.sizeProperty, handle.style[this.offsetProperty]);
				}
				if (this.rangeMax) {
					handle = this.handles[this.handles.length - 1];
					this.rangeMax.css(this.offsetProperty, handle.style[this.offsetProperty]).css(this.sizeProperty, 100 - parseFloat(handle.style[this.offsetProperty]) + '%');
				}
				if (this.rangeMid) {
					this.handles.each(function(index, curHandle) {
						var prevHandle, midBox;
						if (index > 0) {
							prevHandle = self.handles[index - 1];
							midBox = self.rangeMid[index - 1];
							midBox.style[self.offsetProperty] = prevHandle.style[self.offsetProperty];
							midBox.style[self.sizeProperty] = parseFloat(curHandle.style[self.offsetProperty]) - parseFloat(prevHandle.style[self.offsetProperty]) + '%';
						}
					});
				}
			},
			step: function(changeValue) {
				var originalValue = parseFloat(this.values[this.activeDragHandleIndex || 0]),
					newValue = originalValue,
					minValue = this.minValue,
					maxValue = this.maxValue;

				if (isNaN(originalValue)) {
					newValue = 0;
				}

				newValue += changeValue;

				if (this.handleCount > 1) {
					if (this.activeDragHandleIndex > 0) {
						minValue = parseFloat(this.values[this.activeDragHandleIndex - 1]) + this.options.minRange;
					}
					if (this.activeDragHandleIndex < this.handleCount - 1) {
						maxValue = parseFloat(this.values[this.activeDragHandleIndex + 1]) - this.options.minRange;
					}
				}

				if (newValue > maxValue) {
					newValue = maxValue;
				} else if (newValue < minValue) {
					newValue = minValue;
				}

				if (newValue !== originalValue) {
					this.values[this.activeDragHandleIndex || 0] = '' + newValue;
					this.updateValues();
					this.realElement.trigger('input').trigger('change');
					this.setSliderValue(this.values);
				}
			},
			valueToStepIndex: function(value) {
				return (value - this.minValue) / this.stepValue;
			},
			stepIndexToValue: function(stepIndex) {
				return this.minValue + this.stepValue * stepIndex;
			},
			valueToOffset: function(value) {
				var range = this.maxValue - this.minValue,
					percent = (value - this.minValue) / range;

				return percent * 100;
			},
			getSliderValue: function() {
				return $.map(this.values, function(value) {
					return parseFloat(value) || 0;
				});
			},
			setSliderValue: function(values) {
				// set handle position accordion according to value
				var self = this;
				this.handles.each(function(index, handle) {
					handle.style[self.offsetProperty] = self.valueToOffset(values[index]) + '%';
				});
			},
			refresh: function() {
				// handle disabled state
				var isDisabled = this.realElement.is(':disabled');
				this.fakeElement.toggleClass(this.options.disabledClass, isDisabled);

				// refresh handle position according to current value
				this.setSliderValue(this.getSliderValue());
				this.updateRanges();
			},
			destroy: function() {
				this.realElement.removeClass(this.options.hiddenClass).insertBefore(this.fakeElement);
				this.fakeElement.remove();

				this.realElement.off({
					keydown: this.onKeyPress,
					focus: this.onFocus,
					blur: this.onBlur
				});
			}
		};
	});

	}(jcf));


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Scrollbar Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($, window) {
		'use strict';

		var module = {
			name: 'Scrollable',
			selector: '.jcf-scrollable',
			plugins: {
				ScrollBar: ScrollBar
			},
			options: {
				mouseWheelStep: 150,
				handleResize: true,
				alwaysShowScrollbars: false,
				alwaysPreventMouseWheel: false,
				scrollAreaStructure: '<div class="jcf-scrollable-wrapper"></div>'
			},
			matchElement: function(element) {
				return element.is('.jcf-scrollable');
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.rebuildScrollbars();
			},
			initStructure: function() {
				// prepare structure
				this.doc = $(document);
				this.win = $(window);
				this.realElement = $(this.options.element);
				this.scrollWrapper = $(this.options.scrollAreaStructure).insertAfter(this.realElement);

				// set initial styles
				this.scrollWrapper.css('position', 'relative');
				this.realElement.css('overflow', 'hidden');
				this.vBarEdge = 0;
			},
			attachEvents: function() {
				// create scrollbars
				var self = this;
				this.vBar = new ScrollBar({
					holder: this.scrollWrapper,
					vertical: true,
					onScroll: function(scrollTop) {
						self.realElement.scrollTop(scrollTop);
					}
				});
				this.hBar = new ScrollBar({
					holder: this.scrollWrapper,
					vertical: false,
					onScroll: function(scrollLeft) {
						self.realElement.scrollLeft(scrollLeft);
					}
				});

				// add event handlers
				this.realElement.on('scroll', this.onScroll);
				if (this.options.handleResize) {
					this.win.on('resize orientationchange load', this.onResize);
				}

				// add pointer/wheel event handlers
				this.realElement.on('jcf-mousewheel', this.onMouseWheel);
				this.realElement.on('jcf-pointerdown', this.onTouchBody);
			},
			onScroll: function() {
				this.redrawScrollbars();
			},
			onResize: function() {
				// do not rebuild scrollbars if form field is in focus
				if (!$(document.activeElement).is(':input')) {
					this.rebuildScrollbars();
				}
			},
			onTouchBody: function(e) {
				if (e.pointerType === 'touch') {
					this.touchData = {
						scrollTop: this.realElement.scrollTop(),
						scrollLeft: this.realElement.scrollLeft(),
						left: e.pageX,
						top: e.pageY
					};
					this.doc.on({
						'jcf-pointermove': this.onMoveBody,
						'jcf-pointerup': this.onReleaseBody
					});
				}
			},
			onMoveBody: function(e) {
				var targetScrollTop,
					targetScrollLeft,
					verticalScrollAllowed = this.verticalScrollActive,
					horizontalScrollAllowed = this.horizontalScrollActive;

				if (e.pointerType === 'touch') {
					targetScrollTop = this.touchData.scrollTop - e.pageY + this.touchData.top;
					targetScrollLeft = this.touchData.scrollLeft - e.pageX + this.touchData.left;

					// check that scrolling is ended and release outer scrolling
					if (this.verticalScrollActive && (targetScrollTop < 0 || targetScrollTop > this.vBar.maxValue)) {
						verticalScrollAllowed = false;
					}
					if (this.horizontalScrollActive && (targetScrollLeft < 0 || targetScrollLeft > this.hBar.maxValue)) {
						horizontalScrollAllowed = false;
					}

					this.realElement.scrollTop(targetScrollTop);
					this.realElement.scrollLeft(targetScrollLeft);

					if (verticalScrollAllowed || horizontalScrollAllowed) {
						e.preventDefault();
					} else {
						this.onReleaseBody(e);
					}
				}
			},
			onReleaseBody: function(e) {
				if (e.pointerType === 'touch') {
					delete this.touchData;
					this.doc.off({
						'jcf-pointermove': this.onMoveBody,
						'jcf-pointerup': this.onReleaseBody
					});
				}
			},
			onMouseWheel: function(e) {
				var currentScrollTop = this.realElement.scrollTop(),
					currentScrollLeft = this.realElement.scrollLeft(),
					maxScrollTop = this.realElement.prop('scrollHeight') - this.embeddedDimensions.innerHeight,
					maxScrollLeft = this.realElement.prop('scrollWidth') - this.embeddedDimensions.innerWidth,
					extraLeft, extraTop, preventFlag;

				// check edge cases
				if (!this.options.alwaysPreventMouseWheel) {
					if (this.verticalScrollActive && e.deltaY) {
						if (!(currentScrollTop <= 0 && e.deltaY < 0) && !(currentScrollTop >= maxScrollTop && e.deltaY > 0)) {
							preventFlag = true;
						}
					}
					if (this.horizontalScrollActive && e.deltaX) {
						if (!(currentScrollLeft <= 0 && e.deltaX < 0) && !(currentScrollLeft >= maxScrollLeft && e.deltaX > 0)) {
							preventFlag = true;
						}
					}
					if (!this.verticalScrollActive && !this.horizontalScrollActive) {
						return;
					}
				}

				// prevent default action and scroll item
				if (preventFlag || this.options.alwaysPreventMouseWheel) {
					e.preventDefault();
				} else {
					return;
				}

				extraLeft = e.deltaX / 100 * this.options.mouseWheelStep;
				extraTop = e.deltaY / 100 * this.options.mouseWheelStep;

				this.realElement.scrollTop(currentScrollTop + extraTop);
				this.realElement.scrollLeft(currentScrollLeft + extraLeft);
			},
			setScrollBarEdge: function(edgeSize) {
				this.vBarEdge = edgeSize || 0;
				this.redrawScrollbars();
			},
			saveElementDimensions: function() {
				this.savedDimensions = {
					top: this.realElement.width(),
					left: this.realElement.height()
				};
				return this;
			},
			restoreElementDimensions: function() {
				if (this.savedDimensions) {
					this.realElement.css({
						width: this.savedDimensions.width,
						height: this.savedDimensions.height
					});
				}
				return this;
			},
			saveScrollOffsets: function() {
				this.savedOffsets = {
					top: this.realElement.scrollTop(),
					left: this.realElement.scrollLeft()
				};
				return this;
			},
			restoreScrollOffsets: function() {
				if (this.savedOffsets) {
					this.realElement.scrollTop(this.savedOffsets.top);
					this.realElement.scrollLeft(this.savedOffsets.left);
				}
				return this;
			},
			getContainerDimensions: function() {
				// save current styles
				var desiredDimensions,
					currentStyles,
					currentHeight,
					currentWidth;

				if (this.isModifiedStyles) {
					desiredDimensions = {
						width: this.realElement.innerWidth() + this.vBar.getThickness(),
						height: this.realElement.innerHeight() + this.hBar.getThickness()
					};
				} else {
					// unwrap real element and measure it according to CSS
					this.saveElementDimensions().saveScrollOffsets();
					this.realElement.insertAfter(this.scrollWrapper);
					this.scrollWrapper.detach();

					// measure element
					currentStyles = this.realElement.prop('style');
					currentWidth = parseFloat(currentStyles.width);
					currentHeight = parseFloat(currentStyles.height);

					// reset styles if needed
					if (this.embeddedDimensions && currentWidth && currentHeight) {
						this.isModifiedStyles |= (currentWidth !== this.embeddedDimensions.width || currentHeight !== this.embeddedDimensions.height);
						this.realElement.css({
							overflow: '',
							width: '',
							height: ''
						});
					}

					// calculate desired dimensions for real element
					desiredDimensions = {
						width: this.realElement.outerWidth(),
						height: this.realElement.outerHeight()
					};

					// restore structure and original scroll offsets
					this.scrollWrapper.insertAfter(this.realElement);
					this.realElement.css('overflow', 'hidden').prependTo(this.scrollWrapper);
					this.restoreElementDimensions().restoreScrollOffsets();
				}

				return desiredDimensions;
			},
			getEmbeddedDimensions: function(dimensions) {
				// handle scrollbars cropping
				var fakeBarWidth = this.vBar.getThickness(),
					fakeBarHeight = this.hBar.getThickness(),
					paddingWidth = this.realElement.outerWidth() - this.realElement.width(),
					paddingHeight = this.realElement.outerHeight() - this.realElement.height(),
					resultDimensions;

				if (this.options.alwaysShowScrollbars) {
					// simply return dimensions without custom scrollbars
					this.verticalScrollActive = true;
					this.horizontalScrollActive = true;
					resultDimensions = {
						innerWidth: dimensions.width - fakeBarWidth,
						innerHeight: dimensions.height - fakeBarHeight
					};
				} else {
					// detect when to display each scrollbar
					this.saveElementDimensions();
					this.verticalScrollActive = false;
					this.horizontalScrollActive = false;

					// fill container with full size
					this.realElement.css({
						width: dimensions.width - paddingWidth,
						height: dimensions.height - paddingHeight
					});

					this.horizontalScrollActive = this.realElement.prop('scrollWidth') > this.containerDimensions.width;
					this.verticalScrollActive = this.realElement.prop('scrollHeight') > this.containerDimensions.height;

					this.restoreElementDimensions();
					resultDimensions = {
						innerWidth: dimensions.width - (this.verticalScrollActive ? fakeBarWidth : 0),
						innerHeight: dimensions.height - (this.horizontalScrollActive ? fakeBarHeight : 0)
					};
				}
				$.extend(resultDimensions, {
					width: resultDimensions.innerWidth - paddingWidth,
					height: resultDimensions.innerHeight - paddingHeight
				});
				return resultDimensions;
			},
			rebuildScrollbars: function() {
				// resize wrapper according to real element styles
				this.containerDimensions = this.getContainerDimensions();
				this.embeddedDimensions = this.getEmbeddedDimensions(this.containerDimensions);

				// resize wrapper to desired dimensions
				this.scrollWrapper.css({
					width: this.containerDimensions.width,
					height: this.containerDimensions.height
				});

				// resize element inside wrapper excluding scrollbar size
				this.realElement.css({
					overflow: 'hidden',
					width: this.embeddedDimensions.width,
					height: this.embeddedDimensions.height
				});

				// redraw scrollbar offset
				this.redrawScrollbars();
			},
			redrawScrollbars: function() {
				var viewSize, maxScrollValue;

				// redraw vertical scrollbar
				if (this.verticalScrollActive) {
					viewSize = this.vBarEdge ? this.containerDimensions.height - this.vBarEdge : this.embeddedDimensions.innerHeight;
					maxScrollValue = Math.max(this.realElement.prop('offsetHeight'), this.realElement.prop('scrollHeight')) - this.vBarEdge;

					this.vBar.show().setMaxValue(maxScrollValue - viewSize).setRatio(viewSize / maxScrollValue).setSize(viewSize);
					this.vBar.setValue(this.realElement.scrollTop());
				} else {
					this.vBar.hide();
				}

				// redraw horizontal scrollbar
				if (this.horizontalScrollActive) {
					viewSize = this.embeddedDimensions.innerWidth;
					maxScrollValue = this.realElement.prop('scrollWidth');

					if (maxScrollValue === viewSize) {
						this.horizontalScrollActive = false;
					}
					this.hBar.show().setMaxValue(maxScrollValue - viewSize).setRatio(viewSize / maxScrollValue).setSize(viewSize);
					this.hBar.setValue(this.realElement.scrollLeft());
				} else {
					this.hBar.hide();
				}

				// set "touch-action" style rule
				var touchAction = '';
				if (this.verticalScrollActive && this.horizontalScrollActive) {
					touchAction = 'none';
				} else if (this.verticalScrollActive) {
					touchAction = 'pan-x';
				} else if (this.horizontalScrollActive) {
					touchAction = 'pan-y';
				}
				this.realElement.css('touchAction', touchAction);
			},
			refresh: function() {
				this.rebuildScrollbars();
			},
			destroy: function() {
				// remove event listeners
				this.win.off('resize orientationchange load', this.onResize);
				this.realElement.off({
					'jcf-mousewheel': this.onMouseWheel,
					'jcf-pointerdown': this.onTouchBody
				});
				this.doc.off({
					'jcf-pointermove': this.onMoveBody,
					'jcf-pointerup': this.onReleaseBody
				});

				// restore structure
				this.saveScrollOffsets();
				this.vBar.destroy();
				this.hBar.destroy();
				this.realElement.insertAfter(this.scrollWrapper).css({
					touchAction: '',
					overflow: '',
					width: '',
					height: ''
				});
				this.scrollWrapper.remove();
				this.restoreScrollOffsets();
			}
		};

		// custom scrollbar
		function ScrollBar(options) {
			this.options = $.extend({
				holder: null,
				vertical: true,
				inactiveClass: 'jcf-inactive',
				verticalClass: 'jcf-scrollbar-vertical',
				horizontalClass: 'jcf-scrollbar-horizontal',
				scrollbarStructure: '<div class="jcf-scrollbar"><div class="jcf-scrollbar-dec"></div><div class="jcf-scrollbar-slider"><div class="jcf-scrollbar-handle"></div></div><div class="jcf-scrollbar-inc"></div></div>',
				btnDecSelector: '.jcf-scrollbar-dec',
				btnIncSelector: '.jcf-scrollbar-inc',
				sliderSelector: '.jcf-scrollbar-slider',
				handleSelector: '.jcf-scrollbar-handle',
				scrollInterval: 300,
				scrollStep: 400 // px/sec
			}, options);
			this.init();
		}
		$.extend(ScrollBar.prototype, {
			init: function() {
				this.initStructure();
				this.attachEvents();
			},
			initStructure: function() {
				// define proporties
				this.doc = $(document);
				this.isVertical = !!this.options.vertical;
				this.sizeProperty = this.isVertical ? 'height' : 'width';
				this.fullSizeProperty = this.isVertical ? 'outerHeight' : 'outerWidth';
				this.invertedSizeProperty = this.isVertical ? 'width' : 'height';
				this.thicknessMeasureMethod = 'outer' + this.invertedSizeProperty.charAt(0).toUpperCase() + this.invertedSizeProperty.substr(1);
				this.offsetProperty = this.isVertical ? 'top' : 'left';
				this.offsetEventProperty = this.isVertical ? 'pageY' : 'pageX';

				// initialize variables
				this.value = this.options.value || 0;
				this.maxValue = this.options.maxValue || 0;
				this.currentSliderSize = 0;
				this.handleSize = 0;

				// find elements
				this.holder = $(this.options.holder);
				this.scrollbar = $(this.options.scrollbarStructure).appendTo(this.holder);
				this.btnDec = this.scrollbar.find(this.options.btnDecSelector);
				this.btnInc = this.scrollbar.find(this.options.btnIncSelector);
				this.slider = this.scrollbar.find(this.options.sliderSelector);
				this.handle = this.slider.find(this.options.handleSelector);

				// set initial styles
				this.scrollbar.addClass(this.isVertical ? this.options.verticalClass : this.options.horizontalClass).css({
					touchAction: this.isVertical ? 'pan-x' : 'pan-y',
					position: 'absolute'
				});
				this.slider.css({
					position: 'relative'
				});
				this.handle.css({
					touchAction: 'none',
					position: 'absolute'
				});
			},
			attachEvents: function() {
				this.bindHandlers();
				this.handle.on('jcf-pointerdown', this.onHandlePress);
				this.slider.add(this.btnDec).add(this.btnInc).on('jcf-pointerdown', this.onButtonPress);
			},
			onHandlePress: function(e) {
				if (e.pointerType === 'mouse' && e.button > 1) {
					return;
				} else {
					e.preventDefault();
					this.handleDragActive = true;
					this.sliderOffset = this.slider.offset()[this.offsetProperty];
					this.innerHandleOffset = e[this.offsetEventProperty] - this.handle.offset()[this.offsetProperty];

					this.doc.on('jcf-pointermove', this.onHandleDrag);
					this.doc.on('jcf-pointerup', this.onHandleRelease);
				}
			},
			onHandleDrag: function(e) {
				e.preventDefault();
				this.calcOffset = e[this.offsetEventProperty] - this.sliderOffset - this.innerHandleOffset;
				this.setValue(this.calcOffset / (this.currentSliderSize - this.handleSize) * this.maxValue);
				this.triggerScrollEvent(this.value);
			},
			onHandleRelease: function() {
				this.handleDragActive = false;
				this.doc.off('jcf-pointermove', this.onHandleDrag);
				this.doc.off('jcf-pointerup', this.onHandleRelease);
			},
			onButtonPress: function(e) {
				var direction, clickOffset;
				if (e.pointerType === 'mouse' && e.button > 1) {
					return;
				} else {
					e.preventDefault();
					if (!this.handleDragActive) {
						if (this.slider.is(e.currentTarget)) {
							// slider pressed
							direction = this.handle.offset()[this.offsetProperty] > e[this.offsetEventProperty] ? -1 : 1;
							clickOffset = e[this.offsetEventProperty] - this.slider.offset()[this.offsetProperty];
							this.startPageScrolling(direction, clickOffset);
						} else {
							// scrollbar buttons pressed
							direction = this.btnDec.is(e.currentTarget) ? -1 : 1;
							this.startSmoothScrolling(direction);
						}
						this.doc.on('jcf-pointerup', this.onButtonRelease);
					}
				}
			},
			onButtonRelease: function() {
				this.stopPageScrolling();
				this.stopSmoothScrolling();
				this.doc.off('jcf-pointerup', this.onButtonRelease);
			},
			startPageScrolling: function(direction, clickOffset) {
				var self = this,
					stepValue = direction * self.currentSize;

				// limit checker
				var isFinishedScrolling = function() {
					var handleTop = (self.value / self.maxValue) * (self.currentSliderSize - self.handleSize);

					if (direction > 0) {
						return handleTop + self.handleSize >= clickOffset;
					} else {
						return handleTop <= clickOffset;
					}
				};

				// scroll by page when track is pressed
				var doPageScroll = function() {
					self.value += stepValue;
					self.setValue(self.value);
					self.triggerScrollEvent(self.value);

					if (isFinishedScrolling()) {
						clearInterval(self.pageScrollTimer);
					}
				};

				// start scrolling
				this.pageScrollTimer = setInterval(doPageScroll, this.options.scrollInterval);
				doPageScroll();
			},
			stopPageScrolling: function() {
				clearInterval(this.pageScrollTimer);
			},
			startSmoothScrolling: function(direction) {
				var self = this, dt;
				this.stopSmoothScrolling();

				// simple animation functions
				var raf = window.requestAnimationFrame || function(func) {
					setTimeout(func, 16);
				};
				var getTimestamp = function() {
					return Date.now ? Date.now() : new Date().getTime();
				};

				// set animation limit
				var isFinishedScrolling = function() {
					if (direction > 0) {
						return self.value >= self.maxValue;
					} else {
						return self.value <= 0;
					}
				};

				// animation step
				var doScrollAnimation = function() {
					var stepValue = (getTimestamp() - dt) / 1000 * self.options.scrollStep;

					if (self.smoothScrollActive) {
						self.value += stepValue * direction;
						self.setValue(self.value);
						self.triggerScrollEvent(self.value);

						if (!isFinishedScrolling()) {
							dt = getTimestamp();
							raf(doScrollAnimation);
						}
					}
				};

				// start animation
				self.smoothScrollActive = true;
				dt = getTimestamp();
				raf(doScrollAnimation);
			},
			stopSmoothScrolling: function() {
				this.smoothScrollActive = false;
			},
			triggerScrollEvent: function(scrollValue) {
				if (this.options.onScroll) {
					this.options.onScroll(scrollValue);
				}
			},
			getThickness: function() {
				return this.scrollbar[this.thicknessMeasureMethod]();
			},
			setSize: function(size) {
				// resize scrollbar
				var btnDecSize = this.btnDec[this.fullSizeProperty](),
					btnIncSize = this.btnInc[this.fullSizeProperty]();

				// resize slider
				this.currentSize = size;
				this.currentSliderSize = size - btnDecSize - btnIncSize;
				this.scrollbar.css(this.sizeProperty, size);
				this.slider.css(this.sizeProperty, this.currentSliderSize);
				this.currentSliderSize = this.slider[this.sizeProperty]();

				// resize handle
				this.handleSize = Math.round(this.currentSliderSize * this.ratio);
				this.handle.css(this.sizeProperty, this.handleSize);
				this.handleSize = this.handle[this.fullSizeProperty]();

				return this;
			},
			setRatio: function(ratio) {
				this.ratio = ratio;
				return this;
			},
			setMaxValue: function(maxValue) {
				this.maxValue = maxValue;
				this.setValue(Math.min(this.value, this.maxValue));
				return this;
			},
			setValue: function(value) {
				this.value = value;
				if (this.value < 0) {
					this.value = 0;
				} else if (this.value > this.maxValue) {
					this.value = this.maxValue;
				}
				this.refresh();
			},
			setPosition: function(styles) {
				this.scrollbar.css(styles);
				return this;
			},
			hide: function() {
				this.scrollbar.detach();
				return this;
			},
			show: function() {
				this.scrollbar.appendTo(this.holder);
				return this;
			},
			refresh: function() {
				// recalculate handle position
				if (this.value === 0 || this.maxValue === 0) {
					this.calcOffset = 0;
				} else {
					this.calcOffset = (this.value / this.maxValue) * (this.currentSliderSize - this.handleSize);
				}
				this.handle.css(this.offsetProperty, this.calcOffset);

				// toggle inactive classes
				this.btnDec.toggleClass(this.options.inactiveClass, this.value === 0);
				this.btnInc.toggleClass(this.options.inactiveClass, this.value === this.maxValue);
				this.scrollbar.toggleClass(this.options.inactiveClass, this.maxValue === 0);
			},
			destroy: function() {
				// remove event handlers and scrollbar block itself
				this.btnDec.add(this.btnInc).off('jcf-pointerdown', this.onButtonPress);
				this.handle.off('jcf-pointerdown', this.onHandlePress);
				this.doc.off('jcf-pointermove', this.onHandleDrag);
				this.doc.off('jcf-pointerup', this.onHandleRelease);
				this.doc.off('jcf-pointerup', this.onButtonRelease);
				this.stopSmoothScrolling();
				this.stopPageScrolling();
				this.scrollbar.remove();
			}
		});

		return module;
	});

	}(jcf));


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Select Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($, window) {
		'use strict';

		var module = {
			name: 'Select',
			selector: 'select',
			options: {
				element: null,
				multipleCompactStyle: false
			},
			plugins: {
				ListBox: ListBox,
				ComboBox: ComboBox,
				SelectList: SelectList
			},
			matchElement: function(element) {
				return element.is('select');
			},
			init: function() {
				this.element = $(this.options.element);
				this.createInstance();
			},
			isListBox: function() {
				return this.element.is('[size]:not([jcf-size]), [multiple]');
			},
			createInstance: function() {
				if (this.instance) {
					this.instance.destroy();
				}
				if (this.isListBox() && !this.options.multipleCompactStyle) {
					this.instance = new ListBox(this.options);
				} else {
					this.instance = new ComboBox(this.options);
				}
			},
			refresh: function() {
				var typeMismatch = (this.isListBox() && this.instance instanceof ComboBox) ||
									(!this.isListBox() && this.instance instanceof ListBox);

				if (typeMismatch) {
					this.createInstance();
				} else {
					this.instance.refresh();
				}
			},
			destroy: function() {
				this.instance.destroy();
			}
		};

		// combobox module
		function ComboBox(options) {
			this.options = $.extend({
				wrapNative: true,
				wrapNativeOnMobile: true,
				fakeDropInBody: true,
				useCustomScroll: true,
				flipDropToFit: true,
				maxVisibleItems: 10,
				fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
				fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
				optionClassPrefix: 'jcf-option-',
				selectClassPrefix: 'jcf-select-',
				dropContentSelector: '.jcf-select-drop-content',
				selectTextSelector: '.jcf-select-text',
				dropActiveClass: 'jcf-drop-active',
				flipDropClass: 'jcf-drop-flipped'
			}, options);
			this.init();
		}
		$.extend(ComboBox.prototype, {
			init: function() {
				this.initStructure();
				this.bindHandlers();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				// prepare structure
				this.win = $(window);
				this.doc = $(document);
				this.realElement = $(this.options.element);
				this.fakeElement = $(this.options.fakeAreaStructure).insertAfter(this.realElement);
				this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector);
				this.selectText = $('<span></span>').appendTo(this.selectTextContainer);
				makeUnselectable(this.fakeElement);

				// copy classes from original select
				this.fakeElement.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));

				// handle compact multiple style
				if (this.realElement.prop('multiple')) {
					this.fakeElement.addClass('jcf-compact-multiple');
				}

				// detect device type and dropdown behavior
				if (this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative) {
					this.options.wrapNative = true;
				}

				if (this.options.wrapNative) {
					// wrap native select inside fake block
					this.realElement.prependTo(this.fakeElement).css({
						position: 'absolute',
						height: '100%',
						width: '100%'
					}).addClass(this.options.resetAppearanceClass);
				} else {
					// just hide native select
					this.realElement.addClass(this.options.hiddenClass);
					this.fakeElement.attr('title', this.realElement.attr('title'));
					this.fakeDropTarget = this.options.fakeDropInBody ? $('body') : this.fakeElement;
				}
			},
			attachEvents: function() {
				// delayed refresh handler
				var self = this;
				this.delayedRefresh = function() {
					setTimeout(function() {
						self.refresh();
						if (self.list) {
							self.list.refresh();
							self.list.scrollToActiveOption();
						}
					}, 1);
				};

				// native dropdown event handlers
				if (this.options.wrapNative) {
					this.realElement.on({
						focus: this.onFocus,
						change: this.onChange,
						click: this.onChange,
						keydown: this.delayedRefresh
					});
				} else {
					// custom dropdown event handlers
					this.realElement.on({
						focus: this.onFocus,
						change: this.onChange,
						keydown: this.onKeyDown
					});
					this.fakeElement.on({
						'jcf-pointerdown': this.onSelectAreaPress
					});
				}
			},
			onKeyDown: function(e) {
				if (e.which === 13) {
					this.toggleDropdown();
				} else if (this.dropActive) {
					this.delayedRefresh();
				}
			},
			onChange: function() {
				this.refresh();
			},
			onFocus: function() {
				if (!this.pressedFlag || !this.focusedFlag) {
					this.fakeElement.addClass(this.options.focusClass);
					this.realElement.on('blur', this.onBlur);
					this.toggleListMode(true);
					this.focusedFlag = true;
				}
			},
			onBlur: function() {
				if (!this.pressedFlag) {
					this.fakeElement.removeClass(this.options.focusClass);
					this.realElement.off('blur', this.onBlur);
					this.toggleListMode(false);
					this.focusedFlag = false;
				}
			},
			onResize: function() {
				if (this.dropActive) {
					this.hideDropdown();
				}
			},
			onSelectDropPress: function() {
				this.pressedFlag = true;
			},
			onSelectDropRelease: function(e, pointerEvent) {
				this.pressedFlag = false;
				if (pointerEvent.pointerType === 'mouse') {
					this.realElement.focus();
				}
			},
			onSelectAreaPress: function(e) {
				// skip click if drop inside fake element or real select is disabled
				var dropClickedInsideFakeElement = !this.options.fakeDropInBody && $(e.target).closest(this.dropdown).length;
				if (dropClickedInsideFakeElement || e.button > 1 || this.realElement.is(':disabled')) {
					return;
				}

				// toggle dropdown visibility
				this.selectOpenedByEvent = e.pointerType;
				this.toggleDropdown();

				// misc handlers
				if (!this.focusedFlag) {
					if (e.pointerType === 'mouse') {
						this.realElement.focus();
					} else {
						this.onFocus(e);
					}
				}
				this.pressedFlag = true;
				this.fakeElement.addClass(this.options.pressedClass);
				this.doc.on('jcf-pointerup', this.onSelectAreaRelease);
			},
			onSelectAreaRelease: function(e) {
				if (this.focusedFlag && e.pointerType === 'mouse') {
					this.realElement.focus();
				}
				this.pressedFlag = false;
				this.fakeElement.removeClass(this.options.pressedClass);
				this.doc.off('jcf-pointerup', this.onSelectAreaRelease);
			},
			onOutsideClick: function(e) {
				var target = $(e.target),
					clickedInsideSelect = target.closest(this.fakeElement).length || target.closest(this.dropdown).length;

				if (!clickedInsideSelect) {
					this.hideDropdown();
				}
			},
			onSelect: function() {
				this.refresh();

				if (this.realElement.prop('multiple')) {
					this.repositionDropdown();
				} else {
					this.hideDropdown();
				}

				this.fireNativeEvent(this.realElement, 'change');
			},
			toggleListMode: function(state) {
				if (!this.options.wrapNative) {
					if (state) {
						// temporary change select to list to avoid appearing of native dropdown
						this.realElement.attr({
							size: 4,
							'jcf-size': ''
						});
					} else {
						// restore select from list mode to dropdown select
						if (!this.options.wrapNative) {
							this.realElement.removeAttr('size jcf-size');
						}
					}
				}
			},
			createDropdown: function() {
				// destroy previous dropdown if needed
				if (this.dropdown) {
					this.list.destroy();
					this.dropdown.remove();
				}

				// create new drop container
				this.dropdown = $(this.options.fakeDropStructure).appendTo(this.fakeDropTarget);
				this.dropdown.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));
				makeUnselectable(this.dropdown);

				// handle compact multiple style
				if (this.realElement.prop('multiple')) {
					this.dropdown.addClass('jcf-compact-multiple');
				}

				// set initial styles for dropdown in body
				if (this.options.fakeDropInBody) {
					this.dropdown.css({
						position: 'absolute',
						top: -9999
					});
				}

				// create new select list instance
				this.list = new SelectList({
					useHoverClass: true,
					handleResize: false,
					alwaysPreventMouseWheel: true,
					maxVisibleItems: this.options.maxVisibleItems,
					useCustomScroll: this.options.useCustomScroll,
					holder: this.dropdown.find(this.options.dropContentSelector),
					multipleSelectWithoutKey: this.realElement.prop('multiple'),
					element: this.realElement
				});
				$(this.list).on({
					select: this.onSelect,
					press: this.onSelectDropPress,
					release: this.onSelectDropRelease
				});
			},
			repositionDropdown: function() {
				var selectOffset = this.fakeElement.offset(),
					fakeElementBounds = this.fakeElement[0].getBoundingClientRect(),
					selectWidth = fakeElementBounds.width || fakeElementBounds.right - fakeElementBounds.left,
					selectHeight = this.fakeElement.outerHeight(),
					dropHeight = this.dropdown.css('width', selectWidth).outerHeight(),
					winScrollTop = this.win.scrollTop(),
					winHeight = this.win.height(),
					calcTop, calcLeft, bodyOffset, needFlipDrop = false;

				// check flip drop position
				if (selectOffset.top + selectHeight + dropHeight > winScrollTop + winHeight && selectOffset.top - dropHeight > winScrollTop) {
					needFlipDrop = true;
				}

				if (this.options.fakeDropInBody) {
					bodyOffset = this.fakeDropTarget.css('position') !== 'static' ? this.fakeDropTarget.offset().top : 0;
					if (this.options.flipDropToFit && needFlipDrop) {
						// calculate flipped dropdown position
						calcLeft = selectOffset.left;
						calcTop = selectOffset.top - dropHeight - bodyOffset;
					} else {
						// calculate default drop position
						calcLeft = selectOffset.left;
						calcTop = selectOffset.top + selectHeight - bodyOffset;
					}

					// update drop styles
					this.dropdown.css({
						width: selectWidth,
						left: calcLeft,
						top: calcTop
					});
				}

				// refresh flipped class
				this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && needFlipDrop);
			},
			showDropdown: function() {
				// do not show empty custom dropdown
				if (!this.realElement.prop('options').length) {
					return;
				}

				// create options list if not created
				if (!this.dropdown) {
					this.createDropdown();
				}

				// show dropdown
				this.dropActive = true;
				this.dropdown.appendTo(this.fakeDropTarget);
				this.fakeElement.addClass(this.options.dropActiveClass);
				this.refreshSelectedText();
				this.repositionDropdown();
				this.list.setScrollTop(this.savedScrollTop);
				this.list.refresh();

				// add temporary event handlers
				this.win.on('resize', this.onResize);
				this.doc.on('jcf-pointerdown', this.onOutsideClick);
			},
			hideDropdown: function() {
				if (this.dropdown) {
					this.savedScrollTop = this.list.getScrollTop();
					this.fakeElement.removeClass(this.options.dropActiveClass + ' ' + this.options.flipDropClass);
					this.dropdown.removeClass(this.options.flipDropClass).detach();
					this.doc.off('jcf-pointerdown', this.onOutsideClick);
					this.win.off('resize', this.onResize);
					this.dropActive = false;
					if (this.selectOpenedByEvent === 'touch') {
						this.onBlur();
					}
				}
			},
			toggleDropdown: function() {
				if (this.dropActive) {
					this.hideDropdown();
				} else {
					this.showDropdown();
				}
			},
			refreshSelectedText: function() {
				// redraw selected area
				var selectedIndex = this.realElement.prop('selectedIndex'),
					selectedOption = this.realElement.prop('options')[selectedIndex],
					selectedOptionImage = selectedOption ? selectedOption.getAttribute('data-image') : null,
					selectedOptionText = '',
					selectedOptionClasses,
					self = this;

				if (this.realElement.prop('multiple')) {
					$.each(this.realElement.prop('options'), function(index, option) {
						if (option.selected) {
							selectedOptionText += (selectedOptionText ? ', ' : '') + option.innerHTML;
						}
					});
					if (!selectedOptionText) {
						selectedOptionText = self.realElement.attr('placeholder') || '';
					}
					this.selectText.removeAttr('class').html(selectedOptionText);
				} else if (!selectedOption) {
					if (this.selectImage) {
						this.selectImage.hide();
					}
					this.selectText.removeAttr('class').empty();
				} else if (this.currentSelectedText !== selectedOption.innerHTML || this.currentSelectedImage !== selectedOptionImage) {
					selectedOptionClasses = getPrefixedClasses(selectedOption.className, this.options.optionClassPrefix);
					this.selectText.attr('class', selectedOptionClasses).html(selectedOption.innerHTML);

					if (selectedOptionImage) {
						if (!this.selectImage) {
							this.selectImage = $('<img>').prependTo(this.selectTextContainer).hide();
						}
						this.selectImage.attr('src', selectedOptionImage).show();
					} else if (this.selectImage) {
						this.selectImage.hide();
					}

					this.currentSelectedText = selectedOption.innerHTML;
					this.currentSelectedImage = selectedOptionImage;
				}
			},
			refresh: function() {
				// refresh fake select visibility
				if (this.realElement.prop('style').display === 'none') {
					this.fakeElement.hide();
				} else {
					this.fakeElement.show();
				}

				// refresh selected text
				this.refreshSelectedText();

				// handle disabled state
				this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
			},
			destroy: function() {
				// restore structure
				if (this.options.wrapNative) {
					this.realElement.insertBefore(this.fakeElement).css({
						position: '',
						height: '',
						width: ''
					}).removeClass(this.options.resetAppearanceClass);
				} else {
					this.realElement.removeClass(this.options.hiddenClass);
					if (this.realElement.is('[jcf-size]')) {
						this.realElement.removeAttr('size jcf-size');
					}
				}

				// removing element will also remove its event handlers
				this.fakeElement.remove();

				// remove other event handlers
				this.doc.off('jcf-pointerup', this.onSelectAreaRelease);
				this.realElement.off({
					focus: this.onFocus
				});
			}
		});

		// listbox module
		function ListBox(options) {
			this.options = $.extend({
				wrapNative: true,
				useCustomScroll: true,
				fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
				selectClassPrefix: 'jcf-select-',
				listHolder: '.jcf-list-wrapper'
			}, options);
			this.init();
		}
		$.extend(ListBox.prototype, {
			init: function() {
				this.bindHandlers();
				this.initStructure();
				this.attachEvents();
			},
			initStructure: function() {
				this.realElement = $(this.options.element);
				this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
				this.listHolder = this.fakeElement.find(this.options.listHolder);
				makeUnselectable(this.fakeElement);

				// copy classes from original select
				this.fakeElement.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));
				this.realElement.addClass(this.options.hiddenClass);

				this.list = new SelectList({
					useCustomScroll: this.options.useCustomScroll,
					holder: this.listHolder,
					selectOnClick: false,
					element: this.realElement
				});
			},
			attachEvents: function() {
				// delayed refresh handler
				var self = this;
				this.delayedRefresh = function(e) {
					if (e && (e.which === 16 || e.ctrlKey || e.metaKey || e.altKey)) {
						// ignore modifier keys
						return;
					} else {
						clearTimeout(self.refreshTimer);
						self.refreshTimer = setTimeout(function() {
							self.refresh();
							self.list.scrollToActiveOption();
						}, 1);
					}
				};

				// other event handlers
				this.realElement.on({
					focus: this.onFocus,
					click: this.delayedRefresh,
					keydown: this.delayedRefresh
				});

				// select list event handlers
				$(this.list).on({
					select: this.onSelect,
					press: this.onFakeOptionsPress,
					release: this.onFakeOptionsRelease
				});
			},
			onFakeOptionsPress: function(e, pointerEvent) {
				this.pressedFlag = true;
				if (pointerEvent.pointerType === 'mouse') {
					this.realElement.focus();
				}
			},
			onFakeOptionsRelease: function(e, pointerEvent) {
				this.pressedFlag = false;
				if (pointerEvent.pointerType === 'mouse') {
					this.realElement.focus();
				}
			},
			onSelect: function() {
				this.fireNativeEvent(this.realElement, 'change');
				this.fireNativeEvent(this.realElement, 'click');
			},
			onFocus: function() {
				if (!this.pressedFlag || !this.focusedFlag) {
					this.fakeElement.addClass(this.options.focusClass);
					this.realElement.on('blur', this.onBlur);
					this.focusedFlag = true;
				}
			},
			onBlur: function() {
				if (!this.pressedFlag) {
					this.fakeElement.removeClass(this.options.focusClass);
					this.realElement.off('blur', this.onBlur);
					this.focusedFlag = false;
				}
			},
			refresh: function() {
				this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
				this.list.refresh();
			},
			destroy: function() {
				this.list.destroy();
				this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass);
				this.fakeElement.remove();
			}
		});

		// options list module
		function SelectList(options) {
			this.options = $.extend({
				holder: null,
				maxVisibleItems: 10,
				selectOnClick: true,
				useHoverClass: false,
				useCustomScroll: false,
				handleResize: true,
				multipleSelectWithoutKey: false,
				alwaysPreventMouseWheel: false,
				indexAttribute: 'data-index',
				cloneClassPrefix: 'jcf-option-',
				containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
				containerSelector: '.jcf-list-content',
				captionClass: 'jcf-optgroup-caption',
				disabledClass: 'jcf-disabled',
				optionClass: 'jcf-option',
				groupClass: 'jcf-optgroup',
				hoverClass: 'jcf-hover',
				selectedClass: 'jcf-selected',
				scrollClass: 'jcf-scroll-active'
			}, options);
			this.init();
		}
		$.extend(SelectList.prototype, {
			init: function() {
				this.initStructure();
				this.refreshSelectedClass();
				this.attachEvents();
			},
			initStructure: function() {
				this.element = $(this.options.element);
				this.indexSelector = '[' + this.options.indexAttribute + ']';
				this.container = $(this.options.containerStructure).appendTo(this.options.holder);
				this.listHolder = this.container.find(this.options.containerSelector);
				this.lastClickedIndex = this.element.prop('selectedIndex');
				this.rebuildList();

				// save current selection in multiple select
				if (this.element.prop('multiple')) {
					this.previousSelection = this.getSelectedOptionsIndexes();
				}
			},
			attachEvents: function() {
				this.bindHandlers();
				this.listHolder.on('jcf-pointerdown', this.indexSelector, this.onItemPress);
				this.listHolder.on('jcf-pointerdown', this.onPress);

				if (this.options.useHoverClass) {
					this.listHolder.on('jcf-pointerover', this.indexSelector, this.onHoverItem);
				}
			},
			onPress: function(e) {
				$(this).trigger('press', e);
				this.listHolder.on('jcf-pointerup', this.onRelease);
			},
			onRelease: function(e) {
				$(this).trigger('release', e);
				this.listHolder.off('jcf-pointerup', this.onRelease);
			},
			onHoverItem: function(e) {
				var hoverIndex = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute));
				this.fakeOptions.removeClass(this.options.hoverClass).eq(hoverIndex).addClass(this.options.hoverClass);
			},
			onItemPress: function(e) {
				if (e.pointerType === 'touch' || this.options.selectOnClick) {
					// select option after "click"
					this.tmpListOffsetTop = this.list.offset().top;
					this.listHolder.on('jcf-pointerup', this.indexSelector, this.onItemRelease);
				} else {
					// select option immediately
					this.onSelectItem(e);
				}
			},
			onItemRelease: function(e) {
				// remove event handlers and temporary data
				this.listHolder.off('jcf-pointerup', this.indexSelector, this.onItemRelease);

				// simulate item selection
				if (this.tmpListOffsetTop === this.list.offset().top) {
					this.listHolder.on('click', this.indexSelector, { savedPointerType: e.pointerType }, this.onSelectItem);
				}
				delete this.tmpListOffsetTop;
			},
			onSelectItem: function(e) {
				var clickedIndex = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),
					pointerType = e.data && e.data.savedPointerType || e.pointerType || 'mouse',
					range;

				// remove click event handler
				this.listHolder.off('click', this.indexSelector, this.onSelectItem);

				// ignore clicks on disabled options
				if (e.button > 1 || this.realOptions[clickedIndex].disabled) {
					return;
				}

				if (this.element.prop('multiple')) {
					if (e.metaKey || e.ctrlKey || pointerType === 'touch' || this.options.multipleSelectWithoutKey) {
						// if CTRL/CMD pressed or touch devices - toggle selected option
						this.realOptions[clickedIndex].selected = !this.realOptions[clickedIndex].selected;
					} else if (e.shiftKey) {
						// if SHIFT pressed - update selection
						range = [this.lastClickedIndex, clickedIndex].sort(function(a, b) {
							return a - b;
						});
						this.realOptions.each(function(index, option) {
							option.selected = (index >= range[0] && index <= range[1]);
						});
					} else {
						// set single selected index
						this.element.prop('selectedIndex', clickedIndex);
					}
				} else {
					this.element.prop('selectedIndex', clickedIndex);
				}

				// save last clicked option
				if (!e.shiftKey) {
					this.lastClickedIndex = clickedIndex;
				}

				// refresh classes
				this.refreshSelectedClass();

				// scroll to active item in desktop browsers
				if (pointerType === 'mouse') {
					this.scrollToActiveOption();
				}

				// make callback when item selected
				$(this).trigger('select');
			},
			rebuildList: function() {
				// rebuild options
				var self = this,
					rootElement = this.element[0];

				// recursively create fake options
				this.storedSelectHTML = rootElement.innerHTML;
				this.optionIndex = 0;
				this.list = $(this.createOptionsList(rootElement));
				this.listHolder.empty().append(this.list);
				this.realOptions = this.element.find('option');
				this.fakeOptions = this.list.find(this.indexSelector);
				this.fakeListItems = this.list.find('.' + this.options.captionClass + ',' + this.indexSelector);
				delete this.optionIndex;

				// detect max visible items
				var maxCount = this.options.maxVisibleItems,
					sizeValue = this.element.prop('size');
				if (sizeValue > 1 && !this.element.is('[jcf-size]')) {
					maxCount = sizeValue;
				}

				// handle scrollbar
				var needScrollBar = this.fakeOptions.length > maxCount;
				this.container.toggleClass(this.options.scrollClass, needScrollBar);
				if (needScrollBar) {
					// change max-height
					this.listHolder.css({
						maxHeight: this.getOverflowHeight(maxCount),
						overflow: 'auto'
					});

					if (this.options.useCustomScroll && jcf.modules.Scrollable) {
						// add custom scrollbar if specified in options
						jcf.replace(this.listHolder, 'Scrollable', {
							handleResize: this.options.handleResize,
							alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
						});
						return;
					}
				}

				// disable edge wheel scrolling
				if (this.options.alwaysPreventMouseWheel) {
					this.preventWheelHandler = function(e) {
						var currentScrollTop = self.listHolder.scrollTop(),
							maxScrollTop = self.listHolder.prop('scrollHeight') - self.listHolder.innerHeight();

						// check edge cases
						if ((currentScrollTop <= 0 && e.deltaY < 0) || (currentScrollTop >= maxScrollTop && e.deltaY > 0)) {
							e.preventDefault();
						}
					};
					this.listHolder.on('jcf-mousewheel', this.preventWheelHandler);
				}
			},
			refreshSelectedClass: function() {
				var self = this,
					selectedItem,
					isMultiple = this.element.prop('multiple'),
					selectedIndex = this.element.prop('selectedIndex');

				if (isMultiple) {
					this.realOptions.each(function(index, option) {
						self.fakeOptions.eq(index).toggleClass(self.options.selectedClass, !!option.selected);
					});
				} else {
					this.fakeOptions.removeClass(this.options.selectedClass + ' ' + this.options.hoverClass);
					selectedItem = this.fakeOptions.eq(selectedIndex).addClass(this.options.selectedClass);
					if (this.options.useHoverClass) {
						selectedItem.addClass(this.options.hoverClass);
					}
				}
			},
			scrollToActiveOption: function() {
				// scroll to target option
				var targetOffset = this.getActiveOptionOffset();
				if (typeof targetOffset === 'number') {
					this.listHolder.prop('scrollTop', targetOffset);
				}
			},
			getSelectedOptionsIndexes: function() {
				var selection = [];
				this.realOptions.each(function(index, option) {
					if (option.selected) {
						selection.push(index);
					}
				});
				return selection;
			},
			getChangedSelectedIndex: function() {
				var selectedIndex = this.element.prop('selectedIndex'),
					self = this,
					found = false,
					targetIndex = null;

				if (this.element.prop('multiple')) {
					// multiple selects handling
					this.currentSelection = this.getSelectedOptionsIndexes();
					$.each(this.currentSelection, function(index, optionIndex) {
						if (!found && self.previousSelection.indexOf(optionIndex) < 0) {
							if (index === 0) {
								found = true;
							}
							targetIndex = optionIndex;
						}
					});
					this.previousSelection = this.currentSelection;
					return targetIndex;
				} else {
					// single choice selects handling
					return selectedIndex;
				}
			},
			getActiveOptionOffset: function() {
				// calc values
				var currentIndex = this.getChangedSelectedIndex();

				// selection was not changed
				if (currentIndex === null) {
					return;
				}

				// find option and scroll to it if needed
				var dropHeight = this.listHolder.height(),
					dropScrollTop = this.listHolder.prop('scrollTop'),
					fakeOption = this.fakeOptions.eq(currentIndex),
					fakeOptionOffset = fakeOption.offset().top - this.list.offset().top,
					fakeOptionHeight = fakeOption.innerHeight();

				// scroll list
				if (fakeOptionOffset + fakeOptionHeight >= dropScrollTop + dropHeight) {
					// scroll down (always scroll to option)
					return fakeOptionOffset - dropHeight + fakeOptionHeight;
				} else if (fakeOptionOffset < dropScrollTop) {
					// scroll up to option
					return fakeOptionOffset;
				}
			},
			getOverflowHeight: function(sizeValue) {
				var item = this.fakeListItems.eq(sizeValue - 1),
					listOffset = this.list.offset().top,
					itemOffset = item.offset().top,
					itemHeight = item.innerHeight();

				return itemOffset + itemHeight - listOffset;
			},
			getScrollTop: function() {
				return this.listHolder.scrollTop();
			},
			setScrollTop: function(value) {
				this.listHolder.scrollTop(value);
			},
			createOption: function(option) {
				var newOption = document.createElement('span');
				newOption.className = this.options.optionClass;
				newOption.innerHTML = option.innerHTML;
				newOption.setAttribute(this.options.indexAttribute, this.optionIndex++);

				var optionImage, optionImageSrc = option.getAttribute('data-image');
				if (optionImageSrc) {
					optionImage = document.createElement('img');
					optionImage.src = optionImageSrc;
					newOption.insertBefore(optionImage, newOption.childNodes[0]);
				}
				if (option.disabled) {
					newOption.className += ' ' + this.options.disabledClass;
				}
				if (option.className) {
					newOption.className += ' ' + getPrefixedClasses(option.className, this.options.cloneClassPrefix);
				}
				return newOption;
			},
			createOptGroup: function(optgroup) {
				var optGroupContainer = document.createElement('span'),
					optGroupName = optgroup.getAttribute('label'),
					optGroupCaption, optGroupList;

				// create caption
				optGroupCaption = document.createElement('span');
				optGroupCaption.className = this.options.captionClass;
				optGroupCaption.innerHTML = optGroupName;
				optGroupContainer.appendChild(optGroupCaption);

				// create list of options
				if (optgroup.children.length) {
					optGroupList = this.createOptionsList(optgroup);
					optGroupContainer.appendChild(optGroupList);
				}

				optGroupContainer.className = this.options.groupClass;
				return optGroupContainer;
			},
			createOptionContainer: function() {
				var optionContainer = document.createElement('li');
				return optionContainer;
			},
			createOptionsList: function(container) {
				var self = this,
					list = document.createElement('ul');

				$.each(container.children, function(index, currentNode) {
					var item = self.createOptionContainer(currentNode),
						newNode;

					switch (currentNode.tagName.toLowerCase()) {
						case 'option': newNode = self.createOption(currentNode); break;
						case 'optgroup': newNode = self.createOptGroup(currentNode); break;
					}
					list.appendChild(item).appendChild(newNode);
				});
				return list;
			},
			refresh: function() {
				// check for select innerHTML changes
				if (this.storedSelectHTML !== this.element.prop('innerHTML')) {
					this.rebuildList();
				}

				// refresh custom scrollbar
				var scrollInstance = jcf.getInstance(this.listHolder);
				if (scrollInstance) {
					scrollInstance.refresh();
				}

				// refresh selectes classes
				this.refreshSelectedClass();
			},
			destroy: function() {
				this.listHolder.off('jcf-mousewheel', this.preventWheelHandler);
				this.listHolder.off('jcf-pointerdown', this.indexSelector, this.onSelectItem);
				this.listHolder.off('jcf-pointerover', this.indexSelector, this.onHoverItem);
				this.listHolder.off('jcf-pointerdown', this.onPress);
			}
		});

		// helper functions
		var getPrefixedClasses = function(className, prefixToAdd) {
			return className ? className.replace(/[\s]*([\S]+)+[\s]*/gi, prefixToAdd + '$1 ') : '';
		};
		var makeUnselectable = (function() {
			var unselectableClass = jcf.getOptions().unselectableClass;
			function preventHandler(e) {
				e.preventDefault();
			}
			return function(node) {
				node.addClass(unselectableClass).on('selectstart', preventHandler);
			};
		}());

		return module;
	});

	}(jcf));


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*!
	 * JavaScript Custom Forms : Textarea Module
	 *
	 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
	 * Released under the MIT license (LICENSE.txt)
	 *
	 * Version: 1.2.3
	 */

	(function(jcf) {

	jcf.addModule(function($) {
		'use strict';

		return {
			name: 'Textarea',
			selector: 'textarea',
			options: {
				resize: true,
				resizerStructure: '<span class="jcf-resize"></span>',
				fakeStructure: '<span class="jcf-textarea"></span>'
			},
			matchElement: function(element) {
				return element.is('textarea');
			},
			init: function() {
				this.initStructure();
				this.attachEvents();
				this.refresh();
			},
			initStructure: function() {
				// prepare structure
				this.doc = $(document);
				this.realElement = $(this.options.element);
				this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
				this.resizer = $(this.options.resizerStructure).appendTo(this.fakeElement);

				// add custom scrollbar
				if (jcf.modules.Scrollable) {
					this.realElement.prependTo(this.fakeElement).addClass().css({
						overflow: 'hidden',
						resize: 'none'
					});

					this.scrollable = new jcf.modules.Scrollable({
						element: this.realElement,
						alwaysShowScrollbars: true
					});
					this.scrollable.setScrollBarEdge(this.resizer.outerHeight());
				}
			},
			attachEvents: function() {
				// add event handlers
				this.realElement.on({
					focus: this.onFocus,
					keyup: this.onChange,
					change: this.onChange
				});

				this.resizer.on('jcf-pointerdown', this.onResizePress);
			},
			onResizePress: function(e) {
				var resizerOffset = this.resizer.offset(),
					areaOffset = this.fakeElement.offset();

				e.preventDefault();
				this.dragData = {
					areaOffset: areaOffset,
					innerOffsetLeft: e.pageX - resizerOffset.left,
					innerOffsetTop: e.pageY - resizerOffset.top
				};
				this.doc.on({
					'jcf-pointermove': this.onResizeMove,
					'jcf-pointerup': this.onResizeRelease
				});

				// restore focus
				if (this.isFocused) {
					this.focusedDrag = true;
					this.realElement.focus();
				}
			},
			onResizeMove: function(e) {
				var newWidth = e.pageX + this.dragData.innerOffsetLeft - this.dragData.areaOffset.left,
					newHeight = e.pageY + this.dragData.innerOffsetTop - this.dragData.areaOffset.top,
					widthDiff = this.fakeElement.innerWidth() - this.realElement.innerWidth();

				// prevent text selection or page scroll on touch devices
				e.preventDefault();

				// resize textarea and refresh scrollbars
				this.realElement.innerWidth(newWidth - widthDiff).innerHeight(newHeight);

				if (this.scrollable) {
					this.scrollable.rebuildScrollbars();
				}

				// restore focus
				if (this.focusedDrag) {
					this.realElement.focus();
				}
			},
			onResizeRelease: function() {
				this.doc.off({
					'jcf-pointermove': this.onResizeMove,
					'jcf-pointerup': this.onResizeRelease
				});

				delete this.focusedDrag;
			},
			onFocus: function() {
				this.isFocused = true;
				this.fakeElement.addClass(this.options.focusClass);
				this.realElement.on('blur', this.onBlur);
			},
			onBlur: function() {
				this.isFocused = false;
				this.fakeElement.removeClass(this.options.focusClass);
				this.realElement.off('blur', this.onBlur);
			},
			onChange: function() {
				this.refreshCustomScrollbars();
			},
			refreshCustomScrollbars: function() {
				if (this.scrollable) {
					if (this.isFocused) {
						this.scrollable.redrawScrollbars();
					} else {
						this.scrollable.rebuildScrollbars();
					}
				}
			},
			refresh: function() {
				// refresh custom scroll position
				var isDisabled = this.realElement.is(':disabled');
				this.fakeElement.toggleClass(this.options.disabledClass, isDisabled);
				this.refreshCustomScrollbars();
			},
			destroy: function() {
				// destroy custom scrollbar
				this.scrollable.destroy();

				// restore styles and remove event listeners
				this.realElement.css({
					overflow: '',
					resize: ''
				}).insertBefore(this.fakeElement).off({
					focus: this.onFocus,
					blur: this.onBlur
				});

				// remove scrollbar and fake wrapper
				this.fakeElement.remove();
			}
		};
	});

	}(jcf));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    var desktop = window.isMobile == false;

	    if (desktop) {
	        var onScroll = function onScroll(event) {
	            var scrollPos = $(document).scrollTop();

	            $('.section-pagination li a').each(function () {
	                var currLink = $(this);
	                var refElement = $(currLink.attr('href'));

	                if (refElement.offset().top <= scrollPos && refElement.offset().top) {
	                    $('.section-pagination li').removeClass('active');
	                    currLink.closest('li').addClass('active');
	                } else {
	                    currLink.closest('li').removeClass('active');
	                }
	            });
	        };

	        $(document).ready(function () {
	            $(document).on('scroll', onScroll);

	            $(document).on('click', '.section-pagination a[href^="#"]', function (event) {
	                event.preventDefault();

	                $('.section-pagination li a').each(function () {
	                    $(this).closest('li').removeClass('active');
	                });
	                $(this).closest('li').addClass('active');

	                var target = this.hash;
	                var $target = $(target);

	                $('html, body').stop().animate({
	                    'scrollTop': $target.offset().top
	                }, 500, 'swing', function () {
	                    window.location.hash = target;
	                    $(document).on('scroll', onScroll);
	                });
	            });
	        });
	    }
		})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {

	    $(document).on('click', '.accordion > li > .opener', function (event) {
	        event.preventDefault();

	        $('.accordion li').removeClass('active');

	        if ($(this).siblings('.slide').is(':hidden')) {
	            $('.accordion li .slide').slideUp(300);
	            $(this).closest('li').addClass('active');
	        }
	        $(this).siblings('.slide').slideToggle(300);

	        window.myScrollr && window.myScrollr.refresh();
	    });
		})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    $(document).on('touchstart click', '.facts-tabs .tabset a[href^="#"]', function (event) {
	        event.preventDefault();

	        if (event.type == 'thouchstrat') return false;

	        var target = this.hash,
	            $target = $(target),
	            targetElementID = $target.attr('id');
	        $('.facts-tabs .tabset li').removeClass('active');
	        $(this).parent('li').addClass('active');

	        $target.show().siblings().hide();
	        $('.facts-tabs').attr('data-tab-active', targetElementID);

	        window.myScrollr && window.myScrollr.refresh();
	    });

	    $(document).on('click', '.nutriotion-facts-block .filters a[href^="#"]', function (event) {
	        event.preventDefault();
	        var target = this.hash,
	            $target = $(target);
	        $('.nutriotion-facts-block .filters li').removeClass('active');
	        $(this).parent('li').addClass('active');

	        $target.show().siblings().hide();

	        window.myScrollr && window.myScrollr.refresh();
	    });

	    $('.nutriotion-facts-block .tab-container .tab').hide();
	    $('.nutriotion-facts-block .tab-container .tab:first-child').show();
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    $(document).on('click', '.facts-section.personal-cal .slide-opener', function (event) {
	        event.preventDefault();

	        $(this).toggleClass('open');
	        $('.facts-section.personal-cal .slider').toggleClass('open');
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	(function () {

	    var user = {
	        gender: null,
	        weight: null,
	        height: null,
	        age: null,
	        activityLevel: null
	    };
	    var selectTags = document.getElementsByTagName('select');
	    var conclusionOutputTags = document.querySelectorAll('.personal-cal .conclusion .cal, .personal-daily-section .conclusion .cal');
	    var errorMessageTags = document.querySelectorAll('.personal-cal .message, .personal-daily-section .message');

	    // assuming user object with weight (in lbs), height (in inches), age, activityLevel (sedentary, light, moderate, very, extreme), gender
	    function calculateCalories(user) {

	        // Formula
	        // See Mifflin - St Jeor Formula at http://www.freedieting.com/calorie_needs.html
	        // Female: ((10 x weight (kg)) + (6.25 x height (cm)) - (5 x age (y)) - 161) X activityFactor;
	        // Male: ((10 x weight (kg)) + (6.25 x height (cm)) - (5 x age (y)) + 5) X activityFactor;

	        if (!user || !user.gender) return 2000; // return default cals if no gender info

	        // set defaults
	        var weight = 70.760352; // 156 pounds in kg
	        var height = 167.64; // 5 6' in centimeters
	        var age = 37;
	        var activityFactor = 1.55; // Moderate activity

	        //set params
	        weight = user.weight;
	        height = user.height;
	        age = user.age;
	        activityFactor = user.activityLevel;

	        // set specific to the user
	        // if (user.weight) weight = parseInt(user.weight) * 0.453592; // converts lbs to kgs for formula
	        // if (user.height) height = parseInt(user.height) * 2.54; // converts inches to cm for formula
	        if (user.age) age = user.age;

	        if (user.activityLevel) {
	            // sedentary, light, moderate, very, extreme
	            switch (user.activityLevel) {
	                case "sedentary":
	                    activityFactor = 1.2;
	                    break;
	                case "light":
	                    activityFactor = 1.375;
	                    break;
	                case "moderate":
	                    activityFactor = 1.55;
	                    break;
	                case "very":
	                    activityFactor = 1.725;
	                    break;
	                case "extreme":
	                    activityFactor = 1.9;
	                    break;
	                default:
	                    activityFactor = 1.55;
	            }
	        }

	        if (user.gender == 'female') return parseInt((10 * weight + 6.25 * height - 5 * age - 161) * activityFactor);else if (user.gender == 'male') return parseInt((10 * weight + 6.25 * height - 5 * age + 5) * activityFactor);

	        // else, return default
	        else return 2000;
	    }

	    var _loop = function _loop(i) {
	        var selectTag = selectTags[i];

	        function formulaValues(event) {
	            if (selectTag.getAttribute('name') == 'selectAge') {
	                user.age = selectTag.value;
	                this.parentNode.querySelector('.jcf-select-text span').innerHTML = event.target.value + ' yrs';
	            }
	            if (selectTag.getAttribute('name') == 'selectWeight') user.weight = selectTag.value;
	            if (selectTag.getAttribute('name') == 'selectHeight') user.height = selectTag.value;
	            if (selectTag.getAttribute('name') == 'selectGender') user.gender = selectTag.value;
	            if (selectTag.getAttribute('name') == 'selectActivity') user.activityLevel = selectTag.value;
	            conclusion();
	        }
	        selectTag.addEventListener('change', formulaValues);
	    };

	    for (var i = 0; i < selectTags.length; i++) {
	        _loop(i);
	    }

	    function errorMessagesShow() {
	        for (var i = 0; i < errorMessageTags.length; i++) {
	            errorMessageTags[i].style.display = 'block';
	        }
	    }

	    function errorMessagesHide() {
	        for (var i = 0; i < errorMessageTags.length; i++) {
	            errorMessageTags[i].style.display = 'none';
	        }
	    }

	    function conclusion() {
	        for (var i = 0; i < conclusionOutputTags.length; i++) {
	            var element = conclusionOutputTags[i];
	            if (user.age == null || user.age == '' || user.weight == null || user.weight == '' || user.height == null || user.height == '' || user.gender == null || user.gender == '' || user.activityLevel == null || user.activityLevel == '') {
	                element.innerHTML = 2000 + 'cal';
	                errorMessagesShow();
	            } else {
	                element.innerHTML = calculateCalories(user) + 'cal';
	                errorMessagesHide();
	            }
	        }
	    }
		})();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    //----- OPEN
	    $(document).on('click', '[data-popup-open]', function (event) {
	        event.preventDefault();

	        var targeted_popup_class = $(this).attr('data-popup-open');
	        var popup = $('[data-popup="' + targeted_popup_class + '"]');
	        popup.fadeIn(200);

	        $('body').addClass('opened-popup');
	    });

	    //----- CLOSE
	    $(document).on('click', '[data-popup-close]', function (event) {
	        event.preventDefault();

	        var targeted_popup_class = $(this).attr('data-popup-close');
	        var popup = $('[data-popup="' + targeted_popup_class + '"]');
	        popup.fadeOut(200);

	        $('body').removeClass('opened-popup');
	    });

	    $(document).on('click', '[data-popup]', function (event) {
	        if (!$('[data-popup] .popup-inner').is(event.target) && $('[data-popup] .popup-inner').has(event.target).length === 0) {
	            $('[data-popup]').fadeOut(200);
	            $('body').removeClass('opened-popup');
	        }
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    var desktop = window.isMobile == false;

	    if (desktop) {
	        $(document).ready(function () {
	            var fnExecutionFlag = true;
	            var containerElement = $('#order-matters .order-list');
	            var positionContainerElems = containerElement.offset().top - 500; // 500 - about half of desktop screen

	            containerElement.css({ position: 'relative', height: '400px' });

	            $(document).on('scroll', onScroll);

	            function onScroll() {
	                var scrollPos = $(document).scrollTop();

	                if ($('#Ingredients').offset().top - 86 <= scrollPos && $('#Ingredients').offset().top + $('#Ingredients').height() > scrollPos - 86) {
	                    // "- 86" height of navigation in header
	                    if (positionContainerElems <= scrollPos && positionContainerElems) {
	                        if (fnExecutionFlag == true) {
	                            containerElement.addClass('animation-activated');
	                            catchPositionElements();
	                            addAnimationToElements();
	                            fnExecutionFlag = false;
	                        }
	                    }
	                }
	            }

	            function catchPositionElements() {

	                $('#order-matters .order-list li').each(function () {

	                    var positionTop = $(this).offset().top - $('#order-matters .order-list').offset().top;
	                    var positionLeft = $(this).offset().left - $('#order-matters .order-list').offset().left;

	                    $(this).css({ top: positionTop - 20, left: positionLeft });
	                });
	            }

	            function addAnimationToElements() {

	                $('#order-matters .order-list li').css({ position: 'absolute' });

	                $('#order-matters .order-list li:nth-child(1)').animate({
	                    fontSize: '80px',
	                    top: '10px',
	                    left: '50%'
	                }, 2000);

	                $('#order-matters .order-list li:nth-child(2)').animate({
	                    fontSize: '60px',
	                    top: '100px',
	                    left: '50%'
	                }, 2000);

	                $('#order-matters .order-list li:nth-child(3)').animate({
	                    fontSize: '45px',
	                    top: '170px',
	                    left: '50%'
	                }, 2000);

	                $('#order-matters .order-list li:nth-child(4)').animate({
	                    fontSize: '30px',
	                    top: '230px',
	                    left: '50%'
	                }, 2000);

	                $('#order-matters .order-list li:nth-child(5)').animate({
	                    fontSize: '23px',
	                    top: '275px',
	                    left: '50%'
	                }, 2000);

	                $('#order-matters .order-list li:nth-child(6)').animate({
	                    fontSize: '19px',
	                    top: '310px',
	                    left: '50%'
	                }, 2000);

	                $('#order-matters .order-list li:nth-child(7)').animate({
	                    fontSize: '17px',
	                    top: '345px',
	                    left: '50%'
	                }, 2000);
	            }
	        });
	    }
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNDQ3Mzc5NmUzN2MxYjI5NDdmNCIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy9zcmMvYXNzZXRzL2pzL21vZHVsZXMvbG9hZGVyLmpzIiwid2VicGFjazovLy9EOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9pc01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2llMTFkZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9za3JvbGxyLmpzIiwid2VicGFjazovLy9EOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vc2tyb2xsci9kaXN0L3Nrcm9sbHIubWluLmpzIiwid2VicGFjazovLy9zcmMvYXNzZXRzL2pzL21vZHVsZXMvc2xpY2suanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5taW4uanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L2pjZi9qcy9qY2YuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLmJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L2pjZi9qcy9qY2YuY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLmZpbGUuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLm51bWJlci5qcyIsIndlYnBhY2s6Ly8vRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L2pjZi9qcy9qY2YucmFkaW8uanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLnJhbmdlLmpzIiwid2VicGFjazovLy9EOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vamNmL2pzL2pjZi5zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy9EOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vamNmL2pzL2pjZi5zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLnRleHRhcmVhLmpzIiwid2VicGFjazovLy9zcmMvYXNzZXRzL2pzL21vZHVsZXMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9kcm9wZG93bnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9mb3JtdWxhLWNhbG9yaWVzLmpzIiwid2VicGFjazovLy9zcmMvYXNzZXRzL2pzL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanMvbW9kdWxlcy9hbmltYXRpb24tb3JkZXItbWF0dGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNDQ3Mzc5NmUzN2MxYjI5NDdmNCIsImltcG9ydCAnLi9tb2R1bGVzL2xvYWRlcic7XHJcbmltcG9ydCAnLi9tb2R1bGVzL2lzTW9iaWxlJztcclxuaW1wb3J0ICcuL21vZHVsZXMvaWUxMWRldGVjdGlvbic7XHJcbmltcG9ydCAnLi9tb2R1bGVzL3Nrcm9sbHInO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9zbGljayc7XHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhcmFsbGF4JztcclxuaW1wb3J0ICcuL21vZHVsZXMvbmF2aWdhdGlvbidcclxuaW1wb3J0ICcuL21vZHVsZXMvc2VsZWN0JztcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnaW5hdGlvbic7XHJcbmltcG9ydCAnLi9tb2R1bGVzL2FjY29yZGlvbic7XHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhYnMnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9kcm9wZG93bnMnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9mb3JtdWxhLWNhbG9yaWVzJztcclxuaW1wb3J0ICcuL21vZHVsZXMvcG9wdXAnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9hbmltYXRpb24tb3JkZXItbWF0dGVycyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hc3NldHMvanMvbWFpbi5qcyIsIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5hZGRDbGFzcygnbG9hZGluZy1jb21wbGV0ZScpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2xvYWRlci5qcyIsIi8qISBqUXVlcnkgdjMuMy4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49W10scj1lLmRvY3VtZW50LGk9T2JqZWN0LmdldFByb3RvdHlwZU9mLG89bi5zbGljZSxhPW4uY29uY2F0LHM9bi5wdXNoLHU9bi5pbmRleE9mLGw9e30sYz1sLnRvU3RyaW5nLGY9bC5oYXNPd25Qcm9wZXJ0eSxwPWYudG9TdHJpbmcsZD1wLmNhbGwoT2JqZWN0KSxoPXt9LGc9ZnVuY3Rpb24gZSh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZcIm51bWJlclwiIT10eXBlb2YgdC5ub2RlVHlwZX0seT1mdW5jdGlvbiBlKHQpe3JldHVybiBudWxsIT10JiZ0PT09dC53aW5kb3d9LHY9e3R5cGU6ITAsc3JjOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBtKGUsdCxuKXt2YXIgaSxvPSh0PXR8fHIpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsbilmb3IoaSBpbiB2KW5baV0mJihvW2ldPW5baV0pO3QuaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHgoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2xbYy5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgYj1cIjMuMy4xXCIsdz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgdy5mbi5pbml0KGUsdCl9LFQ9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO3cuZm49dy5wcm90b3R5cGU9e2pxdWVyeTpcIjMuMy4xXCIsY29uc3RydWN0b3I6dyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIG8uY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP28uY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9dy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIHcuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHcubWFwKHRoaXMsZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5jYWxsKHQsbix0KX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soby5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobj49MCYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpzLHNvcnQ6bi5zb3J0LHNwbGljZTpuLnNwbGljZX0sdy5leHRlbmQ9dy5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxnKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSluPWFbdF0sYSE9PShyPWVbdF0pJiYobCYmciYmKHcuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhpPyhpPSExLG89biYmQXJyYXkuaXNBcnJheShuKT9uOltdKTpvPW4mJncuaXNQbGFpbk9iamVjdChuKT9uOnt9LGFbdF09dy5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LHcuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKFwiMy4zLjFcIitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1jLmNhbGwoZSkpJiYoISh0PWkoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPWYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZwLmNhbGwobik9PT1kKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUpe20oZSl9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYoQyhlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoVCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihDKE9iamVjdChlKSk/dy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpzLmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6dS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLGk9W10sbz0wLGE9ZS5sZW5ndGgscz0hbjtvPGE7bysrKShyPSF0KGVbb10sbykpIT09cyYmaS5wdXNoKGVbb10pO3JldHVybiBpfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLHM9W107aWYoQyhlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmcy5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJnMucHVzaChpKTtyZXR1cm4gYS5hcHBseShbXSxzKX0sZ3VpZDoxLHN1cHBvcnQ6aH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHcuZm5bU3ltYm9sLml0ZXJhdG9yXT1uW1N5bWJvbC5pdGVyYXRvcl0pLHcuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bFtcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gQyhlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXgoZSk7cmV0dXJuIWcoZSkmJiF5KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX12YXIgRT1mdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscyx1LGwsYyxmLHAsZCxoLGcseSx2LG0seCxiPVwic2l6emxlXCIrMSpuZXcgRGF0ZSx3PWUuZG9jdW1lbnQsVD0wLEM9MCxFPWFlKCksaz1hZSgpLFM9YWUoKSxEPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYoZj0hMCksMH0sTj17fS5oYXNPd25Qcm9wZXJ0eSxBPVtdLGo9QS5wb3AscT1BLnB1c2gsTD1BLnB1c2gsSD1BLnNsaWNlLE89ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFA9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFI9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLEk9XCJcXFxcW1wiK00rXCIqKFwiK1IrXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrUitcIikpfClcIitNK1wiKlxcXFxdXCIsVz1cIjooXCIrUitcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrSStcIikqKXwuKilcXFxcKXwpXCIsJD1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLEI9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksRj1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIj1cIitNK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTStcIipcXFxcXVwiLFwiZ1wiKSxYPW5ldyBSZWdFeHAoVyksVT1uZXcgUmVnRXhwKFwiXlwiK1IrXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitSK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK1IrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitSK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK0kpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1cpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitQK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sRz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFE9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxKPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLEs9L1srfl0vLFo9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK00rXCI/fChcIitNK1wiKXwuKVwiLFwiaWdcIiksZWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVwiMHhcIit0LTY1NTM2O3JldHVybiByIT09cnx8bj90OnI8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKHIrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTB8NTUyOTYsMTAyMyZyfDU2MzIwKX0sdGU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csbmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0scmU9ZnVuY3Rpb24oKXtwKCl9LGllPW1lKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmKFwiZm9ybVwiaW4gZXx8XCJsYWJlbFwiaW4gZSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0wuYXBwbHkoQT1ILmNhbGwody5jaGlsZE5vZGVzKSx3LmNoaWxkTm9kZXMpLEFbdy5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7TD17YXBwbHk6QS5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtxLmFwcGx5KGUsSC5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gb2UoZSx0LHIsaSl7dmFyIG8scyxsLGMsZixoLHYsbT10JiZ0Lm93bmVyRG9jdW1lbnQsVD10P3Qubm9kZVR5cGU6OTtpZihyPXJ8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhZXx8MSE9PVQmJjkhPT1UJiYxMSE9PVQpcmV0dXJuIHI7aWYoIWkmJigodD90Lm93bmVyRG9jdW1lbnR8fHQ6dykhPT1kJiZwKHQpLHQ9dHx8ZCxnKSl7aWYoMTEhPT1UJiYoZj1KLmV4ZWMoZSkpKWlmKG89ZlsxXSl7aWYoOT09PVQpe2lmKCEobD10LmdldEVsZW1lbnRCeUlkKG8pKSlyZXR1cm4gcjtpZihsLmlkPT09bylyZXR1cm4gci5wdXNoKGwpLHJ9ZWxzZSBpZihtJiYobD1tLmdldEVsZW1lbnRCeUlkKG8pKSYmeCh0LGwpJiZsLmlkPT09bylyZXR1cm4gci5wdXNoKGwpLHJ9ZWxzZXtpZihmWzJdKXJldHVybiBMLmFwcGx5KHIsdC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSkscjtpZigobz1mWzNdKSYmbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZ0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEwuYXBwbHkocix0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobykpLHJ9aWYobi5xc2EmJiFTW2UrXCIgXCJdJiYoIXl8fCF5LnRlc3QoZSkpKXtpZigxIT09VCltPXQsdj1lO2Vsc2UgaWYoXCJvYmplY3RcIiE9PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGM9dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/Yz1jLnJlcGxhY2UodGUsbmUpOnQuc2V0QXR0cmlidXRlKFwiaWRcIixjPWIpLHM9KGg9YShlKSkubGVuZ3RoO3doaWxlKHMtLSloW3NdPVwiI1wiK2MrXCIgXCIrdmUoaFtzXSk7dj1oLmpvaW4oXCIsXCIpLG09Sy50ZXN0KGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0fWlmKHYpdHJ5e3JldHVybiBMLmFwcGx5KHIsbS5xdWVyeVNlbGVjdG9yQWxsKHYpKSxyfWNhdGNoKGUpe31maW5hbGx5e2M9PT1iJiZ0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIHUoZS5yZXBsYWNlKEIsXCIkMVwiKSx0LHIsaSl9ZnVuY3Rpb24gYWUoKXt2YXIgZT1bXTtmdW5jdGlvbiB0KG4saSl7cmV0dXJuIGUucHVzaChuK1wiIFwiKT5yLmNhY2hlTGVuZ3RoJiZkZWxldGUgdFtlLnNoaWZ0KCldLHRbbitcIiBcIl09aX1yZXR1cm4gdH1mdW5jdGlvbiBzZShlKXtyZXR1cm4gZVtiXT0hMCxlfWZ1bmN0aW9uIHVlKGUpe3ZhciB0PWQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGxlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIiksaT1uLmxlbmd0aDt3aGlsZShpLS0pci5hdHRySGFuZGxlW25baV1dPXR9ZnVuY3Rpb24gY2UoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGZlKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cImlucHV0XCI9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJnQudHlwZT09PWV9fWZ1bmN0aW9uIHBlKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PW58fFwiYnV0dG9uXCI9PT1uKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gZGUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZm9ybVwiaW4gdD90LnBhcmVudE5vZGUmJiExPT09dC5kaXNhYmxlZD9cImxhYmVsXCJpbiB0P1wibGFiZWxcImluIHQucGFyZW50Tm9kZT90LnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1lOnQuZGlzYWJsZWQ9PT1lOnQuaXNEaXNhYmxlZD09PWV8fHQuaXNEaXNhYmxlZCE9PSFlJiZpZSh0KT09PWU6dC5kaXNhYmxlZD09PWU6XCJsYWJlbFwiaW4gdCYmdC5kaXNhYmxlZD09PWV9fWZ1bmN0aW9uIGhlKGUpe3JldHVybiBzZShmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCxzZShmdW5jdGlvbihuLHIpe3ZhciBpLG89ZShbXSxuLmxlbmd0aCx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSluW2k9b1thXV0mJihuW2ldPSEocltpXT1uW2ldKSl9KX0pfWZ1bmN0aW9uIGdlKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1uPW9lLnN1cHBvcnQ9e30sbz1vZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISF0JiZcIkhUTUxcIiE9PXQubm9kZU5hbWV9LHA9b2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsaSxhPWU/ZS5vd25lckRvY3VtZW50fHxlOnc7cmV0dXJuIGEhPT1kJiY5PT09YS5ub2RlVHlwZSYmYS5kb2N1bWVudEVsZW1lbnQ/KGQ9YSxoPWQuZG9jdW1lbnRFbGVtZW50LGc9IW8oZCksdyE9PWQmJihpPWQuZGVmYXVsdFZpZXcpJiZpLnRvcCE9PWkmJihpLmFkZEV2ZW50TGlzdGVuZXI/aS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIscmUsITEpOmkuYXR0YWNoRXZlbnQmJmkuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLHJlKSksbi5hdHRyaWJ1dGVzPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxuLmdldEVsZW1lbnRzQnlUYWdOYW1lPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKGQuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1RLnRlc3QoZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxuLmdldEJ5SWQ9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGguYXBwZW5kQ2hpbGQoZSkuaWQ9YiwhZC5nZXRFbGVtZW50c0J5TmFtZXx8IWQuZ2V0RWxlbWVudHNCeU5hbWUoYikubGVuZ3RofSksbi5nZXRCeUlkPyhyLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LHIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZnKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooci5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKFosZWUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gbiYmbi52YWx1ZT09PXR9fSxyLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmZyl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLHIuZmluZC5UQUc9bi5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6bi5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxyLmZpbmQuQ0xBU1M9bi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmcpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0sdj1bXSx5PVtdLChuLnFzYT1RLnRlc3QoZC5xdWVyeVNlbGVjdG9yQWxsKSkmJih1ZShmdW5jdGlvbihlKXtoLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitiK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrYitcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmeS5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHkucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitQK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK2IrXCItXVwiKS5sZW5ndGh8fHkucHVzaChcIn49XCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8eS5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitiK1wiKypcIikubGVuZ3RofHx5LnB1c2goXCIuIy4rWyt+XVwiKX0pLHVlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmeS5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGguYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx5LnB1c2goXCIsLio6XCIpfSkpLChuLm1hdGNoZXNTZWxlY3Rvcj1RLnRlc3QobT1oLm1hdGNoZXN8fGgud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxoLm1vek1hdGNoZXNTZWxlY3Rvcnx8aC5vTWF0Y2hlc1NlbGVjdG9yfHxoLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJnVlKGZ1bmN0aW9uKGUpe24uZGlzY29ubmVjdGVkTWF0Y2g9bS5jYWxsKGUsXCIqXCIpLG0uY2FsbChlLFwiW3MhPScnXTp4XCIpLHYucHVzaChcIiE9XCIsVyl9KSx5PXkubGVuZ3RoJiZuZXcgUmVnRXhwKHkuam9pbihcInxcIikpLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSksdD1RLnRlc3QoaC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikseD10fHxRLnRlc3QoaC5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxEPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gZj0hMCwwO3ZhciByPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiByfHwoMSYocj0oZS5vd25lckRvY3VtZW50fHxlKT09PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFuLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PXI/ZT09PWR8fGUub3duZXJEb2N1bWVudD09PXcmJngodyxlKT8tMTp0PT09ZHx8dC5vd25lckRvY3VtZW50PT09dyYmeCh3LHQpPzE6Yz9PKGMsZSktTyhjLHQpOjA6NCZyPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBmPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09PWQ/LTE6dD09PWQ/MTppPy0xOm8/MTpjP08oYyxlKS1PKGMsdCk6MDtpZihpPT09bylyZXR1cm4gY2UoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP2NlKGFbcl0sc1tyXSk6YVtyXT09PXc/LTE6c1tyXT09PXc/MTowfSxkKTpkfSxvZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG9lKGUsbnVsbCxudWxsLHQpfSxvZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZigoZS5vd25lckRvY3VtZW50fHxlKSE9PWQmJnAoZSksdD10LnJlcGxhY2UoeixcIj0nJDEnXVwiKSxuLm1hdGNoZXNTZWxlY3RvciYmZyYmIVNbdCtcIiBcIl0mJighdnx8IXYudGVzdCh0KSkmJigheXx8IXkudGVzdCh0KSkpdHJ5e3ZhciByPW0uY2FsbChlLHQpO2lmKHJ8fG4uZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gcn1jYXRjaChlKXt9cmV0dXJuIG9lKHQsZCxudWxsLFtlXSkubGVuZ3RoPjB9LG9lLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1kJiZwKGUpLHgoZSx0KX0sb2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT09ZCYmcChlKTt2YXIgaT1yLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxvPWkmJk4uY2FsbChyLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9pKGUsdCwhZyk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1vP286bi5hdHRyaWJ1dGVzfHwhZz9lLmdldEF0dHJpYnV0ZSh0KToobz1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZvLnNwZWNpZmllZD9vLnZhbHVlOm51bGx9LG9lLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHRlLG5lKX0sb2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LG9lLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQscj1bXSxpPTAsbz0wO2lmKGY9IW4uZGV0ZWN0RHVwbGljYXRlcyxjPSFuLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEQpLGYpe3doaWxlKHQ9ZVtvKytdKXQ9PT1lW29dJiYoaT1yLnB1c2gobykpO3doaWxlKGktLSllLnNwbGljZShyW2ldLDEpfXJldHVybiBjPW51bGwsZX0saT1vZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsbz1lLm5vZGVUeXBlO2lmKG8pe2lmKDE9PT1vfHw5PT09b3x8MTE9PT1vKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9aShlKX1lbHNlIGlmKDM9PT1vfHw0PT09bylyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1pKHQpO3JldHVybiBufSwocj1vZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpzZSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKFosZWUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UoWixlZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8b2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmb2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWEobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1FW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZFKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaT1vZS5hdHRyKHIsZSk7cmV0dXJuIG51bGw9PWk/XCIhPVwiPT09dDohdHx8KGkrPVwiXCIsXCI9XCI9PT10P2k9PT1uOlwiIT1cIj09PXQ/aSE9PW46XCJePVwiPT09dD9uJiYwPT09aS5pbmRleE9mKG4pOlwiKj1cIj09PXQ/biYmaS5pbmRleE9mKG4pPi0xOlwiJD1cIj09PXQ/biYmaS5zbGljZSgtbi5sZW5ndGgpPT09bjpcIn49XCI9PT10PyhcIiBcIitpLnJlcGxhY2UoJCxcIiBcIikrXCIgXCIpLmluZGV4T2Yobik+LTE6XCJ8PVwiPT09dCYmKGk9PT1ufHxpLnNsaWNlKDAsbi5sZW5ndGgrMSk9PT1uK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvPVwibnRoXCIhPT1lLnNsaWNlKDAsMyksYT1cImxhc3RcIiE9PWUuc2xpY2UoLTQpLHM9XCJvZi10eXBlXCI9PT10O3JldHVybiAxPT09ciYmMD09PWk/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKHQsbix1KXt2YXIgbCxjLGYscCxkLGgsZz1vIT09YT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIix5PXQucGFyZW50Tm9kZSx2PXMmJnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxtPSF1JiYhcyx4PSExO2lmKHkpe2lmKG8pe3doaWxlKGcpe3A9dDt3aGlsZShwPXBbZ10paWYocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT12OjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2g9Zz1cIm9ubHlcIj09PWUmJiFoJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoaD1bYT95LmZpcnN0Q2hpbGQ6eS5sYXN0Q2hpbGRdLGEmJm0pe3g9KGQ9KGw9KGM9KGY9KHA9eSlbYl18fChwW2JdPXt9KSlbcC51bmlxdWVJRF18fChmW3AudW5pcXVlSURdPXt9KSlbZV18fFtdKVswXT09PVQmJmxbMV0pJiZsWzJdLHA9ZCYmeS5jaGlsZE5vZGVzW2RdO3doaWxlKHA9KytkJiZwJiZwW2ddfHwoeD1kPTApfHxoLnBvcCgpKWlmKDE9PT1wLm5vZGVUeXBlJiYrK3gmJnA9PT10KXtjW2VdPVtULGQseF07YnJlYWt9fWVsc2UgaWYobSYmKHg9ZD0obD0oYz0oZj0ocD10KVtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXXx8W10pWzBdPT09VCYmbFsxXSksITE9PT14KXdoaWxlKHA9KytkJiZwJiZwW2ddfHwoeD1kPTApfHxoLnBvcCgpKWlmKChzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXY6MT09PXAubm9kZVR5cGUpJiYrK3gmJihtJiYoKGM9KGY9cFtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXT1bVCx4XSkscD09PXQpKWJyZWFrO3JldHVybih4LT1pKT09PXJ8fHglcj09MCYmeC9yPj0wfX19LFBTRVVETzpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ci5wc2V1ZG9zW2VdfHxyLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8b2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBpW2JdP2kodCk6aS5sZW5ndGg+MT8obj1bZSxlLFwiXCIsdF0sci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/c2UoZnVuY3Rpb24oZSxuKXt2YXIgcixvPWkoZSx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSllW3I9TyhlLG9bYV0pXT0hKG5bcl09b1thXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gaShlLDAsbil9KTppfX0scHNldWRvczp7bm90OnNlKGZ1bmN0aW9uKGUpe3ZhciB0PVtdLG49W10scj1zKGUucmVwbGFjZShCLFwiJDFcIikpO3JldHVybiByW2JdP3NlKGZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvLGE9cihlLG51bGwsaSxbXSkscz1lLmxlbmd0aDt3aGlsZShzLS0pKG89YVtzXSkmJihlW3NdPSEodFtzXT1vKSl9KTpmdW5jdGlvbihlLGksbyl7cmV0dXJuIHRbMF09ZSxyKHQsbnVsbCxvLG4pLHRbMF09bnVsbCwhbi5wb3AoKX19KSxoYXM6c2UoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBvZShlLHQpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOnNlKGZ1bmN0aW9uKGUpe3JldHVybiBlPWUucmVwbGFjZShaLGVlKSxmdW5jdGlvbih0KXtyZXR1cm4odC50ZXh0Q29udGVudHx8dC5pbm5lclRleHR8fGkodCkpLmluZGV4T2YoZSk+LTF9fSksbGFuZzpzZShmdW5jdGlvbihlKXtyZXR1cm4gVS50ZXN0KGV8fFwiXCIpfHxvZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2UpLGU9ZS5yZXBsYWNlKFosZWUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7dmFyIG47ZG97aWYobj1nP3QubGFuZzp0LmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHx0LmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKG49bi50b0xvd2VyQ2FzZSgpKT09PWV8fDA9PT1uLmluZGV4T2YoZStcIi1cIil9d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmMT09PXQubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbih0KXt2YXIgbj1lLmxvY2F0aW9uJiZlLmxvY2F0aW9uLmhhc2g7cmV0dXJuIG4mJm4uc2xpY2UoMSk9PT10LmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09aH0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1kLmFjdGl2ZUVsZW1lbnQmJighZC5oYXNGb2N1c3x8ZC5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpkZSghMSksZGlzYWJsZWQ6ZGUoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4hci5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIFkudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEcudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpoZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6aGUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOmhlKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46aGUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6aGUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDpoZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjstLXI+PTA7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OmhlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOysrcjx0OyllLnB1c2gocik7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1yLnBzZXVkb3MuZXE7Zm9yKHQgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pci5wc2V1ZG9zW3RdPWZlKHQpO2Zvcih0IGlue3N1Ym1pdDohMCxyZXNldDohMH0pci5wc2V1ZG9zW3RdPXBlKHQpO2Z1bmN0aW9uIHllKCl7fXllLnByb3RvdHlwZT1yLmZpbHRlcnM9ci5wc2V1ZG9zLHIuc2V0RmlsdGVycz1uZXcgeWUsYT1vZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLGksbyxhLHMsdSxsLGM9a1tlK1wiIFwiXTtpZihjKXJldHVybiB0PzA6Yy5zbGljZSgwKTtzPWUsdT1bXSxsPXIucHJlRmlsdGVyO3doaWxlKHMpe24mJiEoaT1GLmV4ZWMocykpfHwoaSYmKHM9cy5zbGljZShpWzBdLmxlbmd0aCl8fHMpLHUucHVzaChvPVtdKSksbj0hMSwoaT1fLmV4ZWMocykpJiYobj1pLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6aVswXS5yZXBsYWNlKEIsXCIgXCIpfSkscz1zLnNsaWNlKG4ubGVuZ3RoKSk7Zm9yKGEgaW4gci5maWx0ZXIpIShpPVZbYV0uZXhlYyhzKSl8fGxbYV0mJiEoaT1sW2FdKGkpKXx8KG49aS5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOmEsbWF0Y2hlczppfSkscz1zLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/cy5sZW5ndGg6cz9vZS5lcnJvcihlKTprKGUsdSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHZlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBtZShlLHQsbil7dmFyIHI9dC5kaXIsaT10Lm5leHQsbz1pfHxyLGE9biYmXCJwYXJlbnROb2RlXCI9PT1vLHM9QysrO3JldHVybiB0LmZpcnN0P2Z1bmN0aW9uKHQsbixpKXt3aGlsZSh0PXRbcl0paWYoMT09PXQubm9kZVR5cGV8fGEpcmV0dXJuIGUodCxuLGkpO3JldHVybiExfTpmdW5jdGlvbih0LG4sdSl7dmFyIGwsYyxmLHA9W1Qsc107aWYodSl7d2hpbGUodD10W3JdKWlmKCgxPT09dC5ub2RlVHlwZXx8YSkmJmUodCxuLHUpKXJldHVybiEwfWVsc2Ugd2hpbGUodD10W3JdKWlmKDE9PT10Lm5vZGVUeXBlfHxhKWlmKGY9dFtiXXx8KHRbYl09e30pLGM9Zlt0LnVuaXF1ZUlEXXx8KGZbdC51bmlxdWVJRF09e30pLGkmJmk9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpdD10W3JdfHx0O2Vsc2V7aWYoKGw9Y1tvXSkmJmxbMF09PT1UJiZsWzFdPT09cylyZXR1cm4gcFsyXT1sWzJdO2lmKGNbb109cCxwWzJdPWUodCxuLHUpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB4ZShlKXtyZXR1cm4gZS5sZW5ndGg+MT9mdW5jdGlvbih0LG4scil7dmFyIGk9ZS5sZW5ndGg7d2hpbGUoaS0tKWlmKCFlW2ldKHQsbixyKSlyZXR1cm4hMTtyZXR1cm4hMH06ZVswXX1mdW5jdGlvbiBiZShlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKW9lKGUsdFtyXSxuKTtyZXR1cm4gbn1mdW5jdGlvbiB3ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSxvKXtyZXR1cm4gciYmIXJbYl0mJihyPVRlKHIpKSxpJiYhaVtiXSYmKGk9VGUoaSxvKSksc2UoZnVuY3Rpb24obyxhLHMsdSl7dmFyIGwsYyxmLHA9W10sZD1bXSxoPWEubGVuZ3RoLGc9b3x8YmUodHx8XCIqXCIscy5ub2RlVHlwZT9bc106cyxbXSkseT0hZXx8IW8mJnQ/Zzp3ZShnLHAsZSxzLHUpLHY9bj9pfHwobz9lOmh8fHIpP1tdOmE6eTtpZihuJiZuKHksdixzLHUpLHIpe2w9d2UodixkKSxyKGwsW10scyx1KSxjPWwubGVuZ3RoO3doaWxlKGMtLSkoZj1sW2NdKSYmKHZbZFtjXV09ISh5W2RbY11dPWYpKX1pZihvKXtpZihpfHxlKXtpZihpKXtsPVtdLGM9di5sZW5ndGg7d2hpbGUoYy0tKShmPXZbY10pJiZsLnB1c2goeVtjXT1mKTtpKG51bGwsdj1bXSxsLHUpfWM9di5sZW5ndGg7d2hpbGUoYy0tKShmPXZbY10pJiYobD1pP08obyxmKTpwW2NdKT4tMSYmKG9bbF09IShhW2xdPWYpKX19ZWxzZSB2PXdlKHY9PT1hP3Yuc3BsaWNlKGgsdi5sZW5ndGgpOnYpLGk/aShudWxsLGEsdix1KTpMLmFwcGx5KGEsdil9KX1mdW5jdGlvbiBDZShlKXtmb3IodmFyIHQsbixpLG89ZS5sZW5ndGgsYT1yLnJlbGF0aXZlW2VbMF0udHlwZV0scz1hfHxyLnJlbGF0aXZlW1wiIFwiXSx1PWE/MTowLGM9bWUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSxzLCEwKSxmPW1lKGZ1bmN0aW9uKGUpe3JldHVybiBPKHQsZSk+LTF9LHMsITApLHA9W2Z1bmN0aW9uKGUsbixyKXt2YXIgaT0hYSYmKHJ8fG4hPT1sKXx8KCh0PW4pLm5vZGVUeXBlP2MoZSxuLHIpOmYoZSxuLHIpKTtyZXR1cm4gdD1udWxsLGl9XTt1PG87dSsrKWlmKG49ci5yZWxhdGl2ZVtlW3VdLnR5cGVdKXA9W21lKHhlKHApLG4pXTtlbHNle2lmKChuPXIuZmlsdGVyW2VbdV0udHlwZV0uYXBwbHkobnVsbCxlW3VdLm1hdGNoZXMpKVtiXSl7Zm9yKGk9Kyt1O2k8bztpKyspaWYoci5yZWxhdGl2ZVtlW2ldLnR5cGVdKWJyZWFrO3JldHVybiBUZSh1PjEmJnhlKHApLHU+MSYmdmUoZS5zbGljZSgwLHUtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbdS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksbix1PGkmJkNlKGUuc2xpY2UodSxpKSksaTxvJiZDZShlPWUuc2xpY2UoaSkpLGk8byYmdmUoZSkpfXAucHVzaChuKX1yZXR1cm4geGUocCl9ZnVuY3Rpb24gRWUoZSx0KXt2YXIgbj10Lmxlbmd0aD4wLGk9ZS5sZW5ndGg+MCxvPWZ1bmN0aW9uKG8sYSxzLHUsYyl7dmFyIGYsaCx5LHY9MCxtPVwiMFwiLHg9byYmW10sYj1bXSx3PWwsQz1vfHxpJiZyLmZpbmQuVEFHKFwiKlwiLGMpLEU9VCs9bnVsbD09dz8xOk1hdGgucmFuZG9tKCl8fC4xLGs9Qy5sZW5ndGg7Zm9yKGMmJihsPWE9PT1kfHxhfHxjKTttIT09ayYmbnVsbCE9KGY9Q1ttXSk7bSsrKXtpZihpJiZmKXtoPTAsYXx8Zi5vd25lckRvY3VtZW50PT09ZHx8KHAoZikscz0hZyk7d2hpbGUoeT1lW2grK10paWYoeShmLGF8fGQscykpe3UucHVzaChmKTticmVha31jJiYoVD1FKX1uJiYoKGY9IXkmJmYpJiZ2LS0sbyYmeC5wdXNoKGYpKX1pZih2Kz1tLG4mJm0hPT12KXtoPTA7d2hpbGUoeT10W2grK10peSh4LGIsYSxzKTtpZihvKXtpZih2PjApd2hpbGUobS0tKXhbbV18fGJbbV18fChiW21dPWouY2FsbCh1KSk7Yj13ZShiKX1MLmFwcGx5KHUsYiksYyYmIW8mJmIubGVuZ3RoPjAmJnYrdC5sZW5ndGg+MSYmb2UudW5pcXVlU29ydCh1KX1yZXR1cm4gYyYmKFQ9RSxsPXcpLHh9O3JldHVybiBuP3NlKG8pOm99cmV0dXJuIHM9b2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1bXSxvPVNbZStcIiBcIl07aWYoIW8pe3R8fCh0PWEoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShvPUNlKHRbbl0pKVtiXT9yLnB1c2gobyk6aS5wdXNoKG8pOyhvPVMoZSxFZShpLHIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gb30sdT1vZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4saSl7dmFyIG8sdSxsLGMsZixwPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsZD0haSYmYShlPXAuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWQubGVuZ3RoKXtpZigodT1kWzBdPWRbMF0uc2xpY2UoMCkpLmxlbmd0aD4yJiZcIklEXCI9PT0obD11WzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmZyYmci5yZWxhdGl2ZVt1WzFdLnR5cGVdKXtpZighKHQ9KHIuZmluZC5JRChsLm1hdGNoZXNbMF0ucmVwbGFjZShaLGVlKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtwJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZSh1LnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1vPVYubmVlZHNDb250ZXh0LnRlc3QoZSk/MDp1Lmxlbmd0aDt3aGlsZShvLS0pe2lmKGw9dVtvXSxyLnJlbGF0aXZlW2M9bC50eXBlXSlicmVhaztpZigoZj1yLmZpbmRbY10pJiYoaT1mKGwubWF0Y2hlc1swXS5yZXBsYWNlKFosZWUpLEsudGVzdCh1WzBdLnR5cGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKHUuc3BsaWNlKG8sMSksIShlPWkubGVuZ3RoJiZ2ZSh1KSkpcmV0dXJuIEwuYXBwbHkobixpKSxuO2JyZWFrfX19cmV0dXJuKHB8fHMoZSxkKSkoaSx0LCFnLG4sIXR8fEsudGVzdChlKSYmZ2UodC5wYXJlbnROb2RlKXx8dCksbn0sbi5zb3J0U3RhYmxlPWIuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09YixuLmRldGVjdER1cGxpY2F0ZXM9ISFmLHAoKSxuLnNvcnREZXRhY2hlZD11ZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLHVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGxlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksbi5hdHRyaWJ1dGVzJiZ1ZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8bGUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLHVlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGxlKFAsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksb2V9KGUpO3cuZmluZD1FLHcuZXhwcj1FLnNlbGVjdG9ycyx3LmV4cHJbXCI6XCJdPXcuZXhwci5wc2V1ZG9zLHcudW5pcXVlU29ydD13LnVuaXF1ZT1FLnVuaXF1ZVNvcnQsdy50ZXh0PUUuZ2V0VGV4dCx3LmlzWE1MRG9jPUUuaXNYTUwsdy5jb250YWlucz1FLmNvbnRhaW5zLHcuZXNjYXBlU2VsZWN0b3I9RS5lc2NhcGU7dmFyIGs9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJncoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxTPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxEPXcuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gTihlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIEE9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gaihlLHQsbil7cmV0dXJuIGcodCk/dy5ncmVwKGUsZnVuY3Rpb24oZSxyKXtyZXR1cm4hIXQuY2FsbChlLHIsZSkhPT1ufSk6dC5ub2RlVHlwZT93LmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQhPT1ufSk6XCJzdHJpbmdcIiE9dHlwZW9mIHQ/dy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHUuY2FsbCh0LGUpPi0xIT09bn0pOncuZmlsdGVyKHQsZSxuKX13LmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/dy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTp3LmZpbmQubWF0Y2hlcyhlLHcuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sdy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sodyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYody5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKyl3LmZpbmQoZSxpW3RdLG4pO3JldHVybiByPjE/dy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZELnRlc3QoZSk/dyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBxLEw9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KHcuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIGksbztpZighZSlyZXR1cm4gdGhpcztpZihuPW58fHEsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEoaT1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmZS5sZW5ndGg+PTM/W251bGwsZSxudWxsXTpMLmV4ZWMoZSkpfHwhaVsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKGlbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIHc/dFswXTp0LHcubWVyZ2UodGhpcyx3LnBhcnNlSFRNTChpWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OnIsITApKSxBLnRlc3QoaVsxXSkmJncuaXNQbGFpbk9iamVjdCh0KSlmb3IoaSBpbiB0KWcodGhpc1tpXSk/dGhpc1tpXSh0W2ldKTp0aGlzLmF0dHIoaSx0W2ldKTtyZXR1cm4gdGhpc31yZXR1cm4obz1yLmdldEVsZW1lbnRCeUlkKGlbMl0pKSYmKHRoaXNbMF09byx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTpnKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKHcpOncubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9dy5mbixxPXcocik7dmFyIEg9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sTz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTt3LmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PXcoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYody5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJncoZSk7aWYoIUQudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT9hLmluZGV4KG4pPi0xOjE9PT1uLm5vZGVUeXBlJiZ3LmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoPjE/dy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT91LmNhbGwodyhlKSx0aGlzWzBdKTp1LmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHcudW5pcXVlU29ydCh3Lm1lcmdlKHRoaXMuZ2V0KCksdyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KTtmdW5jdGlvbiBQKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX13LmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGsoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIFAoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gayhlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gayhlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gayhlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBTKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gUyhlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gTihlLFwiaWZyYW1lXCIpP2UuY29udGVudERvY3VtZW50OihOKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSx3Lm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24oZSx0KXt3LmZuW2VdPWZ1bmN0aW9uKG4scil7dmFyIGk9dy5tYXAodGhpcyx0LG4pO3JldHVyblwiVW50aWxcIiE9PWUuc2xpY2UoLTUpJiYocj1uKSxyJiZcInN0cmluZ1wiPT10eXBlb2YgciYmKGk9dy5maWx0ZXIocixpKSksdGhpcy5sZW5ndGg+MSYmKE9bZV18fHcudW5pcXVlU29ydChpKSxILnRlc3QoZSkmJmkucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhpKX19KTt2YXIgTT0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXt2YXIgdD17fTtyZXR1cm4gdy5lYWNoKGUubWF0Y2goTSl8fFtdLGZ1bmN0aW9uKGUsbil7dFtuXT0hMH0pLHR9dy5DYWxsYmFja3M9ZnVuY3Rpb24oZSl7ZT1cInN0cmluZ1wiPT10eXBlb2YgZT9SKGUpOncuZXh0ZW5kKHt9LGUpO3ZhciB0LG4scixpLG89W10sYT1bXSxzPS0xLHU9ZnVuY3Rpb24oKXtmb3IoaT1pfHxlLm9uY2Uscj10PSEwO2EubGVuZ3RoO3M9LTEpe249YS5zaGlmdCgpO3doaWxlKCsrczxvLmxlbmd0aCkhMT09PW9bc10uYXBwbHkoblswXSxuWzFdKSYmZS5zdG9wT25GYWxzZSYmKHM9by5sZW5ndGgsbj0hMSl9ZS5tZW1vcnl8fChuPSExKSx0PSExLGkmJihvPW4/W106XCJcIil9LGw9e2FkZDpmdW5jdGlvbigpe3JldHVybiBvJiYobiYmIXQmJihzPW8ubGVuZ3RoLTEsYS5wdXNoKG4pKSxmdW5jdGlvbiB0KG4pe3cuZWFjaChuLGZ1bmN0aW9uKG4scil7ZyhyKT9lLnVuaXF1ZSYmbC5oYXMocil8fG8ucHVzaChyKTpyJiZyLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXgocikmJnQocil9KX0oYXJndW1lbnRzKSxuJiYhdCYmdSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gdy5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKChuPXcuaW5BcnJheSh0LG8sbikpPi0xKW8uc3BsaWNlKG4sMSksbjw9cyYmcy0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlP3cuaW5BcnJheShlLG8pPi0xOm8ubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIG8mJihvPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGk9YT1bXSxvPW49XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFvfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9YT1bXSxufHx0fHwobz1uPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhaX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gaXx8KG49W2UsKG49bnx8W10pLnNsaWNlP24uc2xpY2UoKTpuXSxhLnB1c2gobiksdHx8dSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGwuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFyfX07cmV0dXJuIGx9O2Z1bmN0aW9uIEkoZSl7cmV0dXJuIGV9ZnVuY3Rpb24gVyhlKXt0aHJvdyBlfWZ1bmN0aW9uICQoZSx0LG4scil7dmFyIGk7dHJ5e2UmJmcoaT1lLnByb21pc2UpP2kuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmZyhpPWUudGhlbik/aS5jYWxsKGUsdCxuKTp0LmFwcGx5KHZvaWQgMCxbZV0uc2xpY2UocikpfWNhdGNoKGUpe24uYXBwbHkodm9pZCAwLFtlXSl9fXcuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbih0KXt2YXIgbj1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHcuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHcuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIix3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLHI9XCJwZW5kaW5nXCIsaT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gcn0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG8uZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGkudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzO3JldHVybiB3LkRlZmVycmVkKGZ1bmN0aW9uKHQpe3cuZWFjaChuLGZ1bmN0aW9uKG4scil7dmFyIGk9ZyhlW3JbNF1dKSYmZVtyWzRdXTtvW3JbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9aSYmaS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmZyhlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHQubm90aWZ5KS5kb25lKHQucmVzb2x2ZSkuZmFpbCh0LnJlamVjdCk6dFtyWzBdK1wiV2l0aFwiXSh0aGlzLGk/W2VdOmFyZ3VtZW50cyl9KX0pLGU9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LHIsaSl7dmFyIG89MDtmdW5jdGlvbiBhKHQsbixyLGkpe3JldHVybiBmdW5jdGlvbigpe3ZhciBzPXRoaXMsdT1hcmd1bWVudHMsbD1mdW5jdGlvbigpe3ZhciBlLGw7aWYoISh0PG8pKXtpZigoZT1yLmFwcGx5KHMsdSkpPT09bi5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtsPWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixnKGwpP2k/bC5jYWxsKGUsYShvLG4sSSxpKSxhKG8sbixXLGkpKToobysrLGwuY2FsbChlLGEobyxuLEksaSksYShvLG4sVyxpKSxhKG8sbixJLG4ubm90aWZ5V2l0aCkpKToociE9PUkmJihzPXZvaWQgMCx1PVtlXSksKGl8fG4ucmVzb2x2ZVdpdGgpKHMsdSkpfX0sYz1pP2w6ZnVuY3Rpb24oKXt0cnl7bCgpfWNhdGNoKGUpe3cuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmdy5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsYy5zdGFja1RyYWNlKSx0KzE+PW8mJihyIT09VyYmKHM9dm9pZCAwLHU9W2VdKSxuLnJlamVjdFdpdGgocyx1KSl9fTt0P2MoKToody5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihjLnN0YWNrVHJhY2U9dy5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksZS5zZXRUaW1lb3V0KGMpKX19cmV0dXJuIHcuRGVmZXJyZWQoZnVuY3Rpb24oZSl7blswXVszXS5hZGQoYSgwLGUsZyhpKT9pOkksZS5ub3RpZnlXaXRoKSksblsxXVszXS5hZGQoYSgwLGUsZyh0KT90OkkpKSxuWzJdWzNdLmFkZChhKDAsZSxnKHIpP3I6VykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP3cuZXh0ZW5kKGUsaSk6aX19LG89e307cmV0dXJuIHcuZWFjaChuLGZ1bmN0aW9uKGUsdCl7dmFyIGE9dFsyXSxzPXRbNV07aVt0WzFdXT1hLmFkZCxzJiZhLmFkZChmdW5jdGlvbigpe3I9c30sblszLWVdWzJdLmRpc2FibGUsblszLWVdWzNdLmRpc2FibGUsblswXVsyXS5sb2NrLG5bMF1bM10ubG9jayksYS5hZGQodFszXS5maXJlKSxvW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIG9bdFswXStcIldpdGhcIl0odGhpcz09PW8/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxvW3RbMF0rXCJXaXRoXCJdPWEuZmlyZVdpdGh9KSxpLnByb21pc2UobyksdCYmdC5jYWxsKG8sbyksb30sd2hlbjpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49dCxyPUFycmF5KG4pLGk9by5jYWxsKGFyZ3VtZW50cyksYT13LkRlZmVycmVkKCkscz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obil7cltlXT10aGlzLGlbZV09YXJndW1lbnRzLmxlbmd0aD4xP28uY2FsbChhcmd1bWVudHMpOm4sLS10fHxhLnJlc29sdmVXaXRoKHIsaSl9fTtpZih0PD0xJiYoJChlLGEuZG9uZShzKG4pKS5yZXNvbHZlLGEucmVqZWN0LCF0KSxcInBlbmRpbmdcIj09PWEuc3RhdGUoKXx8ZyhpW25dJiZpW25dLnRoZW4pKSlyZXR1cm4gYS50aGVuKCk7d2hpbGUobi0tKSQoaVtuXSxzKG4pLGEucmVqZWN0KTtyZXR1cm4gYS5wcm9taXNlKCl9fSk7dmFyIEI9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87dy5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKHQsbil7ZS5jb25zb2xlJiZlLmNvbnNvbGUud2FybiYmdCYmQi50ZXN0KHQubmFtZSkmJmUuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrdC5tZXNzYWdlLHQuc3RhY2ssbil9LHcucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24odCl7ZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgdH0pfTt2YXIgRj13LkRlZmVycmVkKCk7dy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7dy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LHcuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS13LnJlYWR5V2FpdDp3LmlzUmVhZHkpfHwody5pc1JlYWR5PSEwLCEwIT09ZSYmLS13LnJlYWR5V2FpdD4wfHxGLnJlc29sdmVXaXRoKHIsW3ddKSl9fSksdy5yZWFkeS50aGVuPUYudGhlbjtmdW5jdGlvbiBfKCl7ci5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLF8pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixfKSx3LnJlYWR5KCl9XCJjb21wbGV0ZVwiPT09ci5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PXIucmVhZHlTdGF0ZSYmIXIuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Uuc2V0VGltZW91dCh3LnJlYWR5KTooci5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLF8pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixfKSk7dmFyIHo9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSl7dmFyIHM9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09eChuKSl7aT0hMDtmb3IocyBpbiBuKXooZSx0LHMsbltzXSwhMCxvLGEpfWVsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsZyhyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbCh3KGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LFg9L14tbXMtLyxVPS8tKFthLXpdKS9nO2Z1bmN0aW9uIFYoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGUucmVwbGFjZShYLFwibXMtXCIpLnJlcGxhY2UoVSxWKX12YXIgWT1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIFEoKXt0aGlzLmV4cGFuZG89dy5leHBhbmRvK1EudWlkKyt9US51aWQ9MSxRLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxZKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW0codCldPW47ZWxzZSBmb3IociBpbiB0KWlbRyhyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtHKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKEcpOih0PUcodCkpaW4gcj9bdF06dC5tYXRjaChNKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fHcuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIXcuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBKPW5ldyBRLEs9bmV3IFEsWj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sZWU9L1tBLVpdL2c7ZnVuY3Rpb24gdGUoZSl7cmV0dXJuXCJ0cnVlXCI9PT1lfHxcImZhbHNlXCIhPT1lJiYoXCJudWxsXCI9PT1lP251bGw6ZT09PStlK1wiXCI/K2U6Wi50ZXN0KGUpP0pTT04ucGFyc2UoZSk6ZSl9ZnVuY3Rpb24gbmUoZSx0LG4pe3ZhciByO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShlZSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249dGUobil9Y2F0Y2goZSl7fUsuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufXcuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBLLmhhc0RhdGEoZSl8fEouaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEsuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe0sucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gSi5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe0oucmVtb3ZlKGUsdCl9fSksdy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWUpe2lmKHRoaXMubGVuZ3RoJiYoaT1LLmdldChvKSwxPT09by5ub2RlVHlwZSYmIUouZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXtuPWEubGVuZ3RoO3doaWxlKG4tLSlhW25dJiYwPT09KHI9YVtuXS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPUcoci5zbGljZSg1KSksbmUobyxyLGlbcl0pKTtKLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe0suc2V0KHRoaXMsZSl9KTp6KHRoaXMsZnVuY3Rpb24odCl7dmFyIG47aWYobyYmdm9pZCAwPT09dCl7aWYodm9pZCAwIT09KG49Sy5nZXQobyxlKSkpcmV0dXJuIG47aWYodm9pZCAwIT09KG49bmUobyxlKSkpcmV0dXJuIG59ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXtLLnNldCh0aGlzLGUsdCl9KX0sbnVsbCx0LGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Sy5yZW1vdmUodGhpcyxlKX0pfX0pLHcuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1KLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPUouYWNjZXNzKGUsdCx3Lm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPXcucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89dy5fcXVldWVIb29rcyhlLHQpLGE9ZnVuY3Rpb24oKXt3LmRlcXVldWUoZSx0KX07XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGEsbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBKLmdldChlLG4pfHxKLmFjY2VzcyhlLG4se2VtcHR5OncuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Si5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSx3LmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCJmeFwiLG4tLSksYXJndW1lbnRzLmxlbmd0aDxuP3cucXVldWUodGhpc1swXSxlKTp2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49dy5xdWV1ZSh0aGlzLGUsdCk7dy5fcXVldWVIb29rcyh0aGlzLGUpLFwiZnhcIj09PWUmJlwiaW5wcm9ncmVzc1wiIT09blswXSYmdy5kZXF1ZXVlKHRoaXMsZSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9dy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPUouZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgcmU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLGllPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK3JlK1wiKShbYS16JV0qKSRcIixcImlcIiksb2U9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZ3LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSYmXCJub25lXCI9PT13LmNzcyhlLFwiZGlzcGxheVwiKX0sc2U9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhPXt9O2ZvcihvIGluIHQpYVtvXT1lLnN0eWxlW29dLGUuc3R5bGVbb109dFtvXTtpPW4uYXBwbHkoZSxyfHxbXSk7Zm9yKG8gaW4gdCllLnN0eWxlW29dPWFbb107cmV0dXJuIGl9O2Z1bmN0aW9uIHVlKGUsdCxuLHIpe3ZhciBpLG8sYT0yMCxzPXI/ZnVuY3Rpb24oKXtyZXR1cm4gci5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gdy5jc3MoZSx0LFwiXCIpfSx1PXMoKSxsPW4mJm5bM118fCh3LmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz0ody5jc3NOdW1iZXJbdF18fFwicHhcIiE9PWwmJit1KSYmaWUuZXhlYyh3LmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pdy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLHcuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgbGU9e307ZnVuY3Rpb24gY2UoZSl7dmFyIHQsbj1lLm93bmVyRG9jdW1lbnQscj1lLm5vZGVOYW1lLGk9bGVbcl07cmV0dXJuIGl8fCh0PW4uYm9keS5hcHBlbmRDaGlsZChuLmNyZWF0ZUVsZW1lbnQocikpLGk9dy5jc3ModCxcImRpc3BsYXlcIiksdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLFwibm9uZVwiPT09aSYmKGk9XCJibG9ja1wiKSxsZVtyXT1pLGkpfWZ1bmN0aW9uIGZlKGUsdCl7Zm9yKHZhciBuLHIsaT1bXSxvPTAsYT1lLmxlbmd0aDtvPGE7bysrKShyPWVbb10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYoaVtvXT1KLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxpW29dfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZhZShyKSYmKGlbb109Y2UocikpKTpcIm5vbmVcIiE9PW4mJihpW29dPVwibm9uZVwiLEouc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3Iobz0wO288YTtvKyspbnVsbCE9aVtvXSYmKGVbb10uc3R5bGUuZGlzcGxheT1pW29dKTtyZXR1cm4gZX13LmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBmZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBmZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP3codGhpcykuc2hvdygpOncodGhpcykuaGlkZSgpfSl9fSk7dmFyIHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGdlPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07Z2Uub3B0Z3JvdXA9Z2Uub3B0aW9uLGdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQ7ZnVuY3Rpb24geWUoZSx0KXt2YXIgbjtyZXR1cm4gbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmTihlLHQpP3cubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24gdmUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspSi5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8Si5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfXZhciBtZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09eChvKSl3Lm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihtZS50ZXN0KG8pKXthPWF8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxzPShkZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PWdlW3NdfHxnZS5fZGVmYXVsdCxhLmlubmVySFRNTD11WzFdK3cuaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pYT1hLmxhc3RDaGlsZDt3Lm1lcmdlKHAsYS5jaGlsZE5vZGVzKSwoYT1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiZ3LmluQXJyYXkobyxyKT4tMSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPXcuY29udGFpbnMoby5vd25lckRvY3VtZW50LG8pLGE9eWUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZ2ZShhKSxuKXtjPTA7d2hpbGUobz1hW2MrK10paGUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9IWZ1bmN0aW9uKCl7dmFyIGU9ci5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSx0PXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksdC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxlLmFwcGVuZENoaWxkKHQpLGguY2hlY2tDbG9uZT1lLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixoLm5vQ2xvbmVDaGVja2VkPSEhZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIGJlPXIuZG9jdW1lbnRFbGVtZW50LHdlPS9ea2V5LyxUZT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sQ2U9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBFZSgpe3JldHVybiEwfWZ1bmN0aW9uIGtlKCl7cmV0dXJuITF9ZnVuY3Rpb24gU2UoKXt0cnl7cmV0dXJuIHIuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fWZ1bmN0aW9uIERlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtcInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCk7Zm9yKHMgaW4gdClEZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPWtlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiB3KCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9dy5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXt3LmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9dy5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1KLmdldChlKTtpZih5KXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZ3LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD13Lmd1aWQrKyksKHU9eS5ldmVudHMpfHwodT15LmV2ZW50cz17fSksKGE9eS5oYW5kbGUpfHwoYT15LmhhbmRsZT1mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdyYmdy5ldmVudC50cmlnZ2VyZWQhPT10LnR5cGU/dy5ldmVudC5kaXNwYXRjaC5hcHBseShlLGFyZ3VtZW50cyk6dm9pZCAwfSksbD0odD0odHx8XCJcIikubWF0Y2goTSl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9Q2UuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9dy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9dy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPXcuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJncuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwoZSxyLGgsYSl8fGUuYWRkRXZlbnRMaXN0ZW5lciYmZS5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbChlLGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSx3LmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9Si5oYXNEYXRhKGUpJiZKLmdldChlKTtpZih5JiYodT15LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKE0pfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYocz1DZS5leGVjKHRbbF0pfHxbXSxkPWc9c1sxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9dy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx5LmhhbmRsZSl8fHcucmVtb3ZlRXZlbnQoZSxkLHkuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KXcuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7dy5pc0VtcHR5T2JqZWN0KHUpJiZKLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0PXcuZXZlbnQuZml4KGUpLG4scixpLG8sYSxzLHU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGw9KEouZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVt0LnR5cGVdfHxbXSxjPXcuZXZlbnQuc3BlY2lhbFt0LnR5cGVdfHx7fTtmb3IodVswXT10LG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXVbbl09YXJndW1lbnRzW25dO2lmKHQuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx0KSl7cz13LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx0LGwpLG49MDt3aGlsZSgobz1zW24rK10pJiYhdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt0LmN1cnJlbnRUYXJnZXQ9by5lbGVtLHI9MDt3aGlsZSgoYT1vLmhhbmRsZXJzW3IrK10pJiYhdC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXQucm5hbWVzcGFjZSYmIXQucm5hbWVzcGFjZS50ZXN0KGEubmFtZXNwYWNlKXx8KHQuaGFuZGxlT2JqPWEsdC5kYXRhPWEuZGF0YSx2b2lkIDAhPT0oaT0oKHcuZXZlbnQuc3BlY2lhbFthLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8YS5oYW5kbGVyKS5hcHBseShvLmVsZW0sdSkpJiYhMT09PSh0LnJlc3VsdD1pKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdCksdC5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiZlLmJ1dHRvbj49MSkpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD93KGksdGhpcykuaW5kZXgobCk+LTE6dy5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHcuRXZlbnQucHJvdG90eXBlLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpnKHQpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0KHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbZV19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVt3LmV4cGFuZG9dP2U6bmV3IHcuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1TZSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT1TZSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmTih0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE4oZS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LHcucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LHcuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiB3LkV2ZW50KSlyZXR1cm4gbmV3IHcuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT9FZTprZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZ3LmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbdy5leHBhbmRvXT0hMH0sdy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOncuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOmtlLGlzUHJvcGFnYXRpb25TdG9wcGVkOmtlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOmtlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPUVlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPUVlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1FZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sdy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZ3ZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmVGUudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LHcuZXZlbnQuYWRkUHJvcCksdy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7dy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6dCxiaW5kVHlwZTp0LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgbixyPXRoaXMsaT1lLnJlbGF0ZWRUYXJnZXQsbz1lLmhhbmRsZU9iajtyZXR1cm4gaSYmKGk9PT1yfHx3LmNvbnRhaW5zKHIsaSkpfHwoZS50eXBlPW8ub3JpZ1R5cGUsbj1vLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT10KSxufX19KSx3LmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIERlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRGUodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosdyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49a2UpLHRoaXMuZWFjaChmdW5jdGlvbigpe3cuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIE5lPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLEFlPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLGplPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2kscWU9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIExlKGUsdCl7cmV0dXJuIE4oZSxcInRhYmxlXCIpJiZOKDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpP3coZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZTplfWZ1bmN0aW9uIEhlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIE9lKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBQZShlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw7aWYoMT09PXQubm9kZVR5cGUpe2lmKEouaGFzRGF0YShlKSYmKG89Si5hY2Nlc3MoZSksYT1KLnNldCh0LG8pLGw9by5ldmVudHMpKXtkZWxldGUgYS5oYW5kbGUsYS5ldmVudHM9e307Zm9yKGkgaW4gbClmb3Iobj0wLHI9bFtpXS5sZW5ndGg7bjxyO24rKyl3LmV2ZW50LmFkZCh0LGksbFtpXVtuXSl9Sy5oYXNEYXRhKGUpJiYocz1LLmFjY2VzcyhlKSx1PXcuZXh0ZW5kKHt9LHMpLEsuc2V0KHQsdSkpfX1mdW5jdGlvbiBNZShlLHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1uJiZwZS50ZXN0KGUudHlwZSk/dC5jaGVja2VkPWUuY2hlY2tlZDpcImlucHV0XCIhPT1uJiZcInRleHRhcmVhXCIhPT1ufHwodC5kZWZhdWx0VmFsdWU9ZS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIFJlKGUsdCxuLHIpe3Q9YS5hcHBseShbXSx0KTt2YXIgaSxvLHMsdSxsLGMsZj0wLHA9ZS5sZW5ndGgsZD1wLTEseT10WzBdLHY9Zyh5KTtpZih2fHxwPjEmJlwic3RyaW5nXCI9PXR5cGVvZiB5JiYhaC5jaGVja0Nsb25lJiZqZS50ZXN0KHkpKXJldHVybiBlLmVhY2goZnVuY3Rpb24oaSl7dmFyIG89ZS5lcShpKTt2JiYodFswXT15LmNhbGwodGhpcyxpLG8uaHRtbCgpKSksUmUobyx0LG4scil9KTtpZihwJiYoaT14ZSh0LGVbMF0ub3duZXJEb2N1bWVudCwhMSxlLHIpLG89aS5maXJzdENoaWxkLDE9PT1pLmNoaWxkTm9kZXMubGVuZ3RoJiYoaT1vKSxvfHxyKSl7Zm9yKHU9KHM9dy5tYXAoeWUoaSxcInNjcmlwdFwiKSxIZSkpLmxlbmd0aDtmPHA7ZisrKWw9aSxmIT09ZCYmKGw9dy5jbG9uZShsLCEwLCEwKSx1JiZ3Lm1lcmdlKHMseWUobCxcInNjcmlwdFwiKSkpLG4uY2FsbChlW2ZdLGwsZik7aWYodSlmb3IoYz1zW3MubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsdy5tYXAocyxPZSksZj0wO2Y8dTtmKyspbD1zW2ZdLGhlLnRlc3QobC50eXBlfHxcIlwiKSYmIUouYWNjZXNzKGwsXCJnbG9iYWxFdmFsXCIpJiZ3LmNvbnRhaW5zKGMsbCkmJihsLnNyYyYmXCJtb2R1bGVcIiE9PShsLnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/dy5fZXZhbFVybCYmdy5fZXZhbFVybChsLnNyYyk6bShsLnRleHRDb250ZW50LnJlcGxhY2UocWUsXCJcIiksYyxsKSl9cmV0dXJuIGV9ZnVuY3Rpb24gSWUoZSx0LG4pe2Zvcih2YXIgcixpPXQ/dy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fHcuY2xlYW5EYXRhKHllKHIpKSxyLnBhcmVudE5vZGUmJihuJiZ3LmNvbnRhaW5zKHIub3duZXJEb2N1bWVudCxyKSYmdmUoeWUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX13LmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKE5lLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNsb25lTm9kZSghMCksdT13LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKTtpZighKGgubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fHcuaXNYTUxEb2MoZSkpKWZvcihhPXllKHMpLHI9MCxpPShvPXllKGUpKS5sZW5ndGg7cjxpO3IrKylNZShvW3JdLGFbcl0pO2lmKHQpaWYobilmb3Iobz1vfHx5ZShlKSxhPWF8fHllKHMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspUGUob1tyXSxhW3JdKTtlbHNlIFBlKGUscyk7cmV0dXJuKGE9eWUocyxcInNjcmlwdFwiKSkubGVuZ3RoPjAmJnZlKGEsIXUmJnllKGUsXCJzY3JpcHRcIikpLHN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9dy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoWShuKSl7aWYodD1uW0ouZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/dy5ldmVudC5yZW1vdmUobixyKTp3LnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltKLmV4cGFuZG9dPXZvaWQgMH1uW0suZXhwYW5kb10mJihuW0suZXhwYW5kb109dm9pZCAwKX19fSksdy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gSWUodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBJZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiB6KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/dy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxMZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PUxlKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKHcuY2xlYW5EYXRhKHllKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiB3LmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiB6KHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhQWUudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9dy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKHcuY2xlYW5EYXRhKHllKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMucGFyZW50Tm9kZTt3LmluQXJyYXkodGhpcyxlKTwwJiYody5jbGVhbkRhdGEoeWUodGhpcykpLG4mJm4ucmVwbGFjZUNoaWxkKHQsdGhpcykpfSxlKX19KSx3LmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSx0KXt3LmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbixyPVtdLGk9dyhlKSxvPWkubGVuZ3RoLTEsYT0wO2E8PW87YSsrKW49YT09PW8/dGhpczp0aGlzLmNsb25lKCEwKSx3KGlbYV0pW3RdKG4pLHMuYXBwbHkocixuLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2socil9fSk7dmFyIFdlPW5ldyBSZWdFeHAoXCJeKFwiK3JlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLCRlPWZ1bmN0aW9uKHQpe3ZhciBuPXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gbiYmbi5vcGVuZXJ8fChuPWUpLG4uZ2V0Q29tcHV0ZWRTdHlsZSh0KX0sQmU9bmV3IFJlZ0V4cChvZS5qb2luKFwifFwiKSxcImlcIik7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2lmKGMpe2wuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIixjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIsYmUuYXBwZW5kQ2hpbGQobCkuYXBwZW5kQ2hpbGQoYyk7dmFyIHQ9ZS5nZXRDb21wdXRlZFN0eWxlKGMpO2k9XCIxJVwiIT09dC50b3AsdT0xMj09PW4odC5tYXJnaW5MZWZ0KSxjLnN0eWxlLnJpZ2h0PVwiNjAlXCIscz0zNj09PW4odC5yaWdodCksbz0zNj09PW4odC53aWR0aCksYy5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsYT0zNj09PWMub2Zmc2V0V2lkdGh8fFwiYWJzb2x1dGVcIixiZS5yZW1vdmVDaGlsZChsKSxjPW51bGx9fWZ1bmN0aW9uIG4oZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIGksbyxhLHMsdSxsPXIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjPXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlJiYoYy5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsYy5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsaC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09Yy5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCx3LmV4dGVuZChoLHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiB0KCksb30scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLHN9LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLGl9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiB0KCksdX0sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiB0KCksYX19KSl9KCk7ZnVuY3Rpb24gRmUoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5zdHlsZTtyZXR1cm4obj1ufHwkZShlKSkmJihcIlwiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8dy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fChhPXcuc3R5bGUoZSx0KSksIWgucGl4ZWxCb3hTdHlsZXMoKSYmV2UudGVzdChhKSYmQmUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiBfZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19dmFyIHplPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxYZT0vXi0tLyxVZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVmU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxHZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sWWU9ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFFlKGUpe2lmKGUgaW4gWWUpcmV0dXJuIGU7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1HZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPUdlW25dK3QpaW4gWWUpcmV0dXJuIGV9ZnVuY3Rpb24gSmUoZSl7dmFyIHQ9dy5jc3NQcm9wc1tlXTtyZXR1cm4gdHx8KHQ9dy5jc3NQcm9wc1tlXT1RZShlKXx8ZSksdH1mdW5jdGlvbiBLZShlLHQsbil7dmFyIHI9aWUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIFplKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9dy5jc3MoZSxuK29lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT13LmNzcyhlLFwicGFkZGluZ1wiK29lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPXcuY3NzKGUsXCJib3JkZXJcIitvZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9dy5jc3MoZSxcInBhZGRpbmdcIitvZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9dy5jc3MoZSxcImJvcmRlclwiK29lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz13LmNzcyhlLFwiYm9yZGVyXCIrb2VbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmbz49MCYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKSksdX1mdW5jdGlvbiBldChlLHQsbil7dmFyIHI9JGUoZSksaT1GZShlLHQsciksbz1cImJvcmRlci1ib3hcIj09PXcuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxhPW87aWYoV2UudGVzdChpKSl7aWYoIW4pcmV0dXJuIGk7aT1cImF1dG9cIn1yZXR1cm4gYT1hJiYoaC5ib3hTaXppbmdSZWxpYWJsZSgpfHxpPT09ZS5zdHlsZVt0XSksKFwiYXV0b1wiPT09aXx8IXBhcnNlRmxvYXQoaSkmJlwiaW5saW5lXCI9PT13LmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmKGk9ZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXSxhPSEwKSwoaT1wYXJzZUZsb2F0KGkpfHwwKStaZShlLHQsbnx8KG8/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksYSxyLGkpK1wicHhcIn13LmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPUZlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1HKHQpLHU9WGUudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9SmUocykpLGE9dy5jc3NIb29rc1t0XXx8dy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PShvPXR5cGVvZiBuKSYmKGk9aWUuZXhlYyhuKSkmJmlbMV0mJihuPXVlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PT1uJiYoXCJudW1iZXJcIj09PW8mJihuKz1pJiZpWzNdfHwody5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSxoLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1HKHQpO3JldHVybiBYZS50ZXN0KHQpfHwodD1KZShzKSksKGE9dy5jc3NIb29rc1t0XXx8dy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1GZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIFZlJiYoaT1WZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSx3LmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHQpe3cuY3NzSG9va3NbdF09e2dldDpmdW5jdGlvbihlLG4scil7aWYobilyZXR1cm4hemUudGVzdCh3LmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/ZXQoZSx0LHIpOnNlKGUsVWUsZnVuY3Rpb24oKXtyZXR1cm4gZXQoZSx0LHIpfSl9LHNldDpmdW5jdGlvbihlLG4scil7dmFyIGksbz0kZShlKSxhPVwiYm9yZGVyLWJveFwiPT09dy5jc3MoZSxcImJveFNpemluZ1wiLCExLG8pLHM9ciYmWmUoZSx0LHIsYSxvKTtyZXR1cm4gYSYmaC5zY3JvbGxib3hTaXplKCk9PT1vLnBvc2l0aW9uJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tcGFyc2VGbG9hdChvW3RdKS1aZShlLHQsXCJib3JkZXJcIiwhMSxvKS0uNSkpLHMmJihpPWllLmV4ZWMobikpJiZcInB4XCIhPT0oaVszXXx8XCJweFwiKSYmKGUuc3R5bGVbdF09bixuPXcuY3NzKGUsdCkpLEtlKGUsbixzKX19fSksdy5jc3NIb29rcy5tYXJnaW5MZWZ0PV9lKGgucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChGZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1zZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSx3LmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihlLHQpe3cuY3NzSG9va3NbZSt0XT17ZXhwYW5kOmZ1bmN0aW9uKG4pe2Zvcih2YXIgcj0wLGk9e30sbz1cInN0cmluZ1wiPT10eXBlb2Ygbj9uLnNwbGl0KFwiIFwiKTpbbl07cjw0O3IrKylpW2Urb2Vbcl0rdF09b1tyXXx8b1tyLTJdfHxvWzBdO3JldHVybiBpfX0sXCJtYXJnaW5cIiE9PWUmJih3LmNzc0hvb2tzW2UrdF0uc2V0PUtlKX0pLHcuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4geih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPSRlKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPXcuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj93LnN0eWxlKGUsdCxuKTp3LmNzcyhlLHQpfSxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX19KTtmdW5jdGlvbiB0dChlLHQsbixyLGkpe3JldHVybiBuZXcgdHQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX13LlR3ZWVuPXR0LHR0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dHQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8dy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fCh3LmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPXR0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTp0dC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj10dC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9dy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOnR0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LHR0LnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT10dC5wcm90b3R5cGUsdHQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9dy5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXt3LmZ4LnN0ZXBbZS5wcm9wXT93LmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsPT1lLmVsZW0uc3R5bGVbdy5jc3NQcm9wc1tlLnByb3BdXSYmIXcuY3NzSG9va3NbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzp3LnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSx0dC5wcm9wSG9va3Muc2Nyb2xsVG9wPXR0LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LHcuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSx3LmZ4PXR0LnByb3RvdHlwZS5pbml0LHcuZnguc3RlcD17fTt2YXIgbnQscnQsaXQ9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLG90PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gYXQoKXtydCYmKCExPT09ci5oaWRkZW4mJmUucmVxdWVzdEFuaW1hdGlvbkZyYW1lP2UucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF0KTplLnNldFRpbWVvdXQoYXQsdy5meC5pbnRlcnZhbCksdy5meC50aWNrKCkpfWZ1bmN0aW9uIHN0KCl7cmV0dXJuIGUuc2V0VGltZW91dChmdW5jdGlvbigpe250PXZvaWQgMH0pLG50PURhdGUubm93KCl9ZnVuY3Rpb24gdXQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW9lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBsdChlLHQsbil7Zm9yKHZhciByLGk9KHB0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KHB0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gY3QoZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx5PUouZ2V0KGUsXCJmeHNob3dcIik7bi5xdWV1ZXx8KG51bGw9PShhPXcuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSx3LnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKHIgaW4gdClpZihpPXRbcl0saXQudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF5fHx2b2lkIDA9PT15W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT15JiZ5W3JdfHx3LnN0eWxlKGUscil9aWYoKHU9IXcuaXNFbXB0eU9iamVjdCh0KSl8fCF3LmlzRW1wdHlPYmplY3QoZCkpe2YmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9eSYmeS5kaXNwbGF5KSYmKGw9Si5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9dy5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGZlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz13LmNzcyhlLFwiZGlzcGxheVwiKSxmZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09dy5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMTtmb3IociBpbiBkKXV8fCh5P1wiaGlkZGVuXCJpbiB5JiYoZz15LmhpZGRlbik6eT1KLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih5LmhpZGRlbj0hZyksZyYmZmUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtnfHxmZShbZV0pLEoucmVtb3ZlKGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gZCl3LnN0eWxlKGUscixkW3JdKX0pKSx1PWx0KGc/eVtyXTowLHIscCksciBpbiB5fHwoeVtyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfX1mdW5jdGlvbiBmdChlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihyPUcobiksaT10W3JdLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9dy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKXtvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdO2ZvcihuIGluIG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSl9ZWxzZSB0W3JdPWl9ZnVuY3Rpb24gcHQoZSx0LG4pe3ZhciByLGksbz0wLGE9cHQucHJlZmlsdGVycy5sZW5ndGgscz13LkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihpKXJldHVybiExO2Zvcih2YXIgdD1udHx8c3QoKSxuPU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi10KSxyPTEtKG4vbC5kdXJhdGlvbnx8MCksbz0wLGE9bC50d2VlbnMubGVuZ3RoO288YTtvKyspbC50d2VlbnNbb10ucnVuKHIpO3JldHVybiBzLm5vdGlmeVdpdGgoZSxbbCxyLG5dKSxyPDEmJmE/bjooYXx8cy5ub3RpZnlXaXRoKGUsW2wsMSwwXSkscy5yZXNvbHZlV2l0aChlLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTplLHByb3BzOncuZXh0ZW5kKHt9LHQpLG9wdHM6dy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOncuZWFzaW5nLl9kZWZhdWx0fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6bnR8fHN0KCksZHVyYXRpb246bi5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24odCxuKXt2YXIgcj13LlR3ZWVuKGUsbC5vcHRzLHQsbixsLm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gocikscn0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLHI9dD9sLnR3ZWVucy5sZW5ndGg6MDtpZihpKXJldHVybiB0aGlzO2ZvcihpPSEwO248cjtuKyspbC50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0PyhzLm5vdGlmeVdpdGgoZSxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKGUsW2wsdF0pKTpzLnJlamVjdFdpdGgoZSxbbCx0XSksdGhpc319KSxjPWwucHJvcHM7Zm9yKGZ0KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO288YTtvKyspaWYocj1wdC5wcmVmaWx0ZXJzW29dLmNhbGwobCxlLGMsbC5vcHRzKSlyZXR1cm4gZyhyLnN0b3ApJiYody5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPXIuc3RvcC5iaW5kKHIpKSxyO3JldHVybiB3Lm1hcChjLGx0LGwpLGcobC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwoZSxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSx3LmZ4LnRpbWVyKHcuZXh0ZW5kKHUse2VsZW06ZSxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9dy5BbmltYXRpb249dy5leHRlbmQocHQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHVlKG4uZWxlbSxlLGllLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7ZyhlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKE0pO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxwdC50d2VlbmVyc1tuXT1wdC50d2VlbmVyc1tuXXx8W10scHQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbY3RdLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/cHQucHJlZmlsdGVycy51bnNoaWZ0KGUpOnB0LnByZWZpbHRlcnMucHVzaChlKX19KSx3LnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT93LmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fGcoZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIWcodCkmJnR9O3JldHVybiB3LmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIHcuZnguc3BlZWRzP3IuZHVyYXRpb249dy5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj13LmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe2coci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJncuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSx3LmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgaT13LmlzRW1wdHlPYmplY3QoZSksbz13LnNwZWVkKHQsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIHQ9cHQodGhpcyx3LmV4dGVuZCh7fSxlKSxvKTsoaXx8Si5nZXQodGhpcyxcImZpbmlzaFwiKSkmJnQuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG4pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKG49dCx0PWUsZT12b2lkIDApLHQmJiExIT09ZSYmdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSEwLGk9bnVsbCE9ZSYmZStcInF1ZXVlSG9va3NcIixvPXcudGltZXJzLGE9Si5nZXQodGhpcyk7aWYoaSlhW2ldJiZhW2ldLnN0b3AmJnIoYVtpXSk7ZWxzZSBmb3IoaSBpbiBhKWFbaV0mJmFbaV0uc3RvcCYmb3QudGVzdChpKSYmcihhW2ldKTtmb3IoaT1vLmxlbmd0aDtpLS07KW9baV0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9baV0ucXVldWUhPT1lfHwob1tpXS5hbmltLnN0b3AobiksdD0hMSxvLnNwbGljZShpLDEpKTshdCYmbnx8dy5kZXF1ZXVlKHRoaXMsZSl9KX0sZmluaXNoOmZ1bmN0aW9uKGUpe3JldHVybiExIT09ZSYmKGU9ZXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxuPUouZ2V0KHRoaXMpLHI9bltlK1wicXVldWVcIl0saT1uW2UrXCJxdWV1ZUhvb2tzXCJdLG89dy50aW1lcnMsYT1yP3IubGVuZ3RoOjA7Zm9yKG4uZmluaXNoPSEwLHcucXVldWUodGhpcyxlLFtdKSxpJiZpLnN0b3AmJmkuc3RvcC5jYWxsKHRoaXMsITApLHQ9by5sZW5ndGg7dC0tOylvW3RdLmVsZW09PT10aGlzJiZvW3RdLnF1ZXVlPT09ZSYmKG9bdF0uYW5pbS5zdG9wKCEwKSxvLnNwbGljZSh0LDEpKTtmb3IodD0wO3Q8YTt0Kyspclt0XSYmclt0XS5maW5pc2gmJnJbdF0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIG4uZmluaXNofSl9fSksdy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPXcuZm5bdF07dy5mblt0XT1mdW5jdGlvbihlLHIsaSl7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUodXQodCwhMCksZSxyLGkpfX0pLHcuZWFjaCh7c2xpZGVEb3duOnV0KFwic2hvd1wiKSxzbGlkZVVwOnV0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTp1dChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUsdCl7dy5mbltlXT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMuYW5pbWF0ZSh0LGUsbixyKX19KSx3LnRpbWVycz1bXSx3LmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj13LnRpbWVycztmb3IobnQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHx3LmZ4LnN0b3AoKSxudD12b2lkIDB9LHcuZngudGltZXI9ZnVuY3Rpb24oZSl7dy50aW1lcnMucHVzaChlKSx3LmZ4LnN0YXJ0KCl9LHcuZnguaW50ZXJ2YWw9MTMsdy5meC5zdGFydD1mdW5jdGlvbigpe3J0fHwocnQ9ITAsYXQoKSl9LHcuZnguc3RvcD1mdW5jdGlvbigpe3J0PW51bGx9LHcuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHcuZm4uZGVsYXk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD13LmZ4P3cuZnguc3BlZWRzW3RdfHx0OnQsbj1ufHxcImZ4XCIsdGhpcy5xdWV1ZShuLGZ1bmN0aW9uKG4scil7dmFyIGk9ZS5zZXRUaW1lb3V0KG4sdCk7ci5zdG9wPWZ1bmN0aW9uKCl7ZS5jbGVhclRpbWVvdXQoaSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGU9ci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdD1yLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtlLnR5cGU9XCJjaGVja2JveFwiLGguY2hlY2tPbj1cIlwiIT09ZS52YWx1ZSxoLm9wdFNlbGVjdGVkPXQuc2VsZWN0ZWQsKGU9ci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLGUudHlwZT1cInJhZGlvXCIsaC5yYWRpb1ZhbHVlPVwidFwiPT09ZS52YWx1ZX0oKTt2YXIgZHQsaHQ9dy5leHByLmF0dHJIYW5kbGU7dy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4geih0aGlzLHcuYXR0cixlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSx3LmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/dy5wcm9wKGUsdCxuKTooMT09PW8mJncuaXNYTUxEb2MoZSl8fChpPXcuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fCh3LmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP2R0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCB3LnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPXcuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZighaC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZOKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goTSk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSksZHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P3cucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LHcuZWFjaCh3LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgbj1odFt0XXx8dy5maW5kLmF0dHI7aHRbdF09ZnVuY3Rpb24oZSx0LHIpe3ZhciBpLG8sYT10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIHJ8fChvPWh0W2FdLGh0W2FdPWksaT1udWxsIT1uKGUsdCxyKT9hOm51bGwsaHRbYV09byksaX19KTt2YXIgZ3Q9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSx5dD0vXig/OmF8YXJlYSkkL2k7dy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4geih0aGlzLHcucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbdy5wcm9wRml4W2VdfHxlXX0pfX0pLHcuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmdy5pc1hNTERvYyhlKXx8KHQ9dy5wcm9wRml4W3RdfHx0LGk9dy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD13LmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6Z3QudGVzdChlLm5vZGVOYW1lKXx8eXQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxoLm9wdFNlbGVjdGVkfHwody5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHcuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXt3LnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gdnQoZSl7cmV0dXJuKGUubWF0Y2goTSl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiBtdChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24geHQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZT9lLm1hdGNoKE0pfHxbXTpbXX13LmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHMsdT0wO2lmKGcoZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXt3KHRoaXMpLmFkZENsYXNzKGUuY2FsbCh0aGlzLHQsbXQodGhpcykpKX0pO2lmKCh0PXh0KGUpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT1tdChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89dFthKytdKXIuaW5kZXhPZihcIiBcIitvK1wiIFwiKTwwJiYocis9bytcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscyx1PTA7aWYoZyhlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3codGhpcykucmVtb3ZlQ2xhc3MoZS5jYWxsKHRoaXMsdCxtdCh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoKHQ9eHQoZSkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPW10KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz10W2ErK10pd2hpbGUoci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPi0xKXI9ci5yZXBsYWNlKFwiIFwiK28rXCIgXCIsXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10eXBlb2YgZSxyPVwic3RyaW5nXCI9PT1ufHxBcnJheS5pc0FycmF5KGUpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdCYmcj90P3RoaXMuYWRkQ2xhc3MoZSk6dGhpcy5yZW1vdmVDbGFzcyhlKTpnKGUpP3RoaXMuZWFjaChmdW5jdGlvbihuKXt3KHRoaXMpLnRvZ2dsZUNsYXNzKGUuY2FsbCh0aGlzLG4sbXQodGhpcyksdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxpLG8sYTtpZihyKXtpPTAsbz13KHRoaXMpLGE9eHQoZSk7d2hpbGUodD1hW2krK10pby5oYXNDbGFzcyh0KT9vLnJlbW92ZUNsYXNzKHQpOm8uYWRkQ2xhc3ModCl9ZWxzZSB2b2lkIDAhPT1lJiZcImJvb2xlYW5cIiE9PW58fCgodD1tdCh0aGlzKSkmJkouc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdCksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0fHwhMT09PWU/XCJcIjpKLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmKFwiIFwiK3Z0KG10KG4pKStcIiBcIikuaW5kZXhPZih0KT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYnQ9L1xcci9nO3cuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gcj1nKGUpLHRoaXMuZWFjaChmdW5jdGlvbihuKXt2YXIgaTsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PShpPXI/ZS5jYWxsKHRoaXMsbix3KHRoaXMpLnZhbCgpKTplKT9pPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGk/aSs9XCJcIjpBcnJheS5pc0FycmF5KGkpJiYoaT13Lm1hcChpLGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLCh0PXcudmFsSG9va3NbdGhpcy50eXBlXXx8dy52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHQmJnZvaWQgMCE9PXQuc2V0KHRoaXMsaSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1pKSl9KTtpZihpKXJldHVybih0PXcudmFsSG9va3NbaS50eXBlXXx8dy52YWxIb29rc1tpLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHQmJnZvaWQgMCE9PShuPXQuZ2V0KGksXCJ2YWx1ZVwiKSk/bjpcInN0cmluZ1wiPT10eXBlb2Yobj1pLnZhbHVlKT9uLnJlcGxhY2UoYnQsXCJcIik6bnVsbD09bj9cIlwiOm59fX0pLHcuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dy5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6dnQody50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhTihuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9dyhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPXcubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD13LmluQXJyYXkody52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pPi0xKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksdy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe3cudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD13LmluQXJyYXkodyhlKS52YWwoKSx0KT4tMX19LGguY2hlY2tPbnx8KHcudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSksaC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBlO3ZhciB3dD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sVHQ9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07dy5leHRlbmQody5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbih0LG4saSxvKXt2YXIgYSxzLHUsbCxjLHAsZCxoLHY9W2l8fHJdLG09Zi5jYWxsKHQsXCJ0eXBlXCIpP3QudHlwZTp0LHg9Zi5jYWxsKHQsXCJuYW1lc3BhY2VcIik/dC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKHM9aD11PWk9aXx8ciwzIT09aS5ub2RlVHlwZSYmOCE9PWkubm9kZVR5cGUmJiF3dC50ZXN0KG0rdy5ldmVudC50cmlnZ2VyZWQpJiYobS5pbmRleE9mKFwiLlwiKT4tMSYmKG09KHg9bS5zcGxpdChcIi5cIikpLnNoaWZ0KCkseC5zb3J0KCkpLGM9bS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrbSx0PXRbdy5leHBhbmRvXT90Om5ldyB3LkV2ZW50KG0sXCJvYmplY3RcIj09dHlwZW9mIHQmJnQpLHQuaXNUcmlnZ2VyPW8/MjozLHQubmFtZXNwYWNlPXguam9pbihcIi5cIiksdC5ybmFtZXNwYWNlPXQubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIit4LmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLHQucmVzdWx0PXZvaWQgMCx0LnRhcmdldHx8KHQudGFyZ2V0PWkpLG49bnVsbD09bj9bdF06dy5tYWtlQXJyYXkobixbdF0pLGQ9dy5ldmVudC5zcGVjaWFsW21dfHx7fSxvfHwhZC50cmlnZ2VyfHwhMSE9PWQudHJpZ2dlci5hcHBseShpLG4pKSl7aWYoIW8mJiFkLm5vQnViYmxlJiYheShpKSl7Zm9yKGw9ZC5kZWxlZ2F0ZVR5cGV8fG0sd3QudGVzdChsK20pfHwocz1zLnBhcmVudE5vZGUpO3M7cz1zLnBhcmVudE5vZGUpdi5wdXNoKHMpLHU9czt1PT09KGkub3duZXJEb2N1bWVudHx8cikmJnYucHVzaCh1LmRlZmF1bHRWaWV3fHx1LnBhcmVudFdpbmRvd3x8ZSl9YT0wO3doaWxlKChzPXZbYSsrXSkmJiF0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpaD1zLHQudHlwZT1hPjE/bDpkLmJpbmRUeXBlfHxtLChwPShKLmdldChzLFwiZXZlbnRzXCIpfHx7fSlbdC50eXBlXSYmSi5nZXQocyxcImhhbmRsZVwiKSkmJnAuYXBwbHkocyxuKSwocD1jJiZzW2NdKSYmcC5hcHBseSYmWShzKSYmKHQucmVzdWx0PXAuYXBwbHkocyxuKSwhMT09PXQucmVzdWx0JiZ0LnByZXZlbnREZWZhdWx0KCkpO3JldHVybiB0LnR5cGU9bSxvfHx0LmlzRGVmYXVsdFByZXZlbnRlZCgpfHxkLl9kZWZhdWx0JiYhMSE9PWQuX2RlZmF1bHQuYXBwbHkodi5wb3AoKSxuKXx8IVkoaSl8fGMmJmcoaVttXSkmJiF5KGkpJiYoKHU9aVtjXSkmJihpW2NdPW51bGwpLHcuZXZlbnQudHJpZ2dlcmVkPW0sdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZoLmFkZEV2ZW50TGlzdGVuZXIobSxUdCksaVttXSgpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaC5yZW1vdmVFdmVudExpc3RlbmVyKG0sVHQpLHcuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCx1JiYoaVtjXT11KSksdC5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9dy5leHRlbmQobmV3IHcuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7dy5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSx3LmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt3LmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiB3LmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLGguZm9jdXNpbnx8dy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXt3LmV2ZW50LnNpbXVsYXRlKHQsZS50YXJnZXQsdy5ldmVudC5maXgoZSkpfTt3LmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIHI9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGk9Si5hY2Nlc3Mocix0KTtpfHxyLmFkZEV2ZW50TGlzdGVuZXIoZSxuLCEwKSxKLmFjY2VzcyhyLHQsKGl8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciByPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxpPUouYWNjZXNzKHIsdCktMTtpP0ouYWNjZXNzKHIsdCxpKTooci5yZW1vdmVFdmVudExpc3RlbmVyKGUsbiwhMCksSi5yZW1vdmUocix0KSl9fX0pO3ZhciBDdD1lLmxvY2F0aW9uLEV0PURhdGUubm93KCksa3Q9L1xcPy87dy5wYXJzZVhNTD1mdW5jdGlvbih0KXt2YXIgbjtpZighdHx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIG51bGw7dHJ5e249KG5ldyBlLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXtuPXZvaWQgMH1yZXR1cm4gbiYmIW4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHcuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrdCksbn07dmFyIFN0PS9cXFtcXF0kLyxEdD0vXFxyP1xcbi9nLE50PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxBdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24ganQoZSx0LG4scil7dmFyIGk7aWYoQXJyYXkuaXNBcnJheSh0KSl3LmVhY2godCxmdW5jdGlvbih0LGkpe258fFN0LnRlc3QoZSk/cihlLGkpOmp0KGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBpJiZudWxsIT1pP3Q6XCJcIikrXCJdXCIsaSxuLHIpfSk7ZWxzZSBpZihufHxcIm9iamVjdFwiIT09eCh0KSlyKGUsdCk7ZWxzZSBmb3IoaSBpbiB0KWp0KGUrXCJbXCIraStcIl1cIix0W2ldLG4scil9dy5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPWcodCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhdy5pc1BsYWluT2JqZWN0KGUpKXcuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpanQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LHcuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXcucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/dy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhdyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmQXQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIU50LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPXcodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP3cubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShEdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKER0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBxdD0vJTIwL2csTHQ9LyMuKiQvLEh0PS8oWz8mXSlfPVteJl0qLyxPdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLFB0PS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLE10PS9eKD86R0VUfEhFQUQpJC8sUnQ9L15cXC9cXC8vLEl0PXt9LFd0PXt9LCR0PVwiKi9cIi5jb25jYXQoXCIqXCIpLEJ0PXIuY3JlYXRlRWxlbWVudChcImFcIik7QnQuaHJlZj1DdC5ocmVmO2Z1bmN0aW9uIEZ0KGUpe3JldHVybiBmdW5jdGlvbih0LG4pe1wic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCIqXCIpO3ZhciByLGk9MCxvPXQudG9Mb3dlckNhc2UoKS5tYXRjaChNKXx8W107aWYoZyhuKSl3aGlsZShyPW9baSsrXSlcIitcIj09PXJbMF0/KHI9ci5zbGljZSgxKXx8XCIqXCIsKGVbcl09ZVtyXXx8W10pLnVuc2hpZnQobikpOihlW3JdPWVbcl18fFtdKS5wdXNoKG4pfX1mdW5jdGlvbiBfdChlLHQsbixyKXt2YXIgaT17fSxvPWU9PT1XdDtmdW5jdGlvbiBhKHMpe3ZhciB1O3JldHVybiBpW3NdPSEwLHcuZWFjaChlW3NdfHxbXSxmdW5jdGlvbihlLHMpe3ZhciBsPXModCxuLHIpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBsfHxvfHxpW2xdP28/ISh1PWwpOnZvaWQgMDoodC5kYXRhVHlwZXMudW5zaGlmdChsKSxhKGwpLCExKX0pLHV9cmV0dXJuIGEodC5kYXRhVHlwZXNbMF0pfHwhaVtcIipcIl0mJmEoXCIqXCIpfWZ1bmN0aW9uIHp0KGUsdCl7dmFyIG4scixpPXcuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJncuZXh0ZW5kKCEwLGUsciksZX1mdW5jdGlvbiBYdChlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX1mdW5jdGlvbiBVdChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fXcuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpDdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOlB0LnRlc3QoQ3QucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOiR0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjp3LnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD96dCh6dChlLHcuYWpheFNldHRpbmdzKSx0KTp6dCh3LmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChJdCksYWpheFRyYW5zcG9ydDpGdChXdCksYWpheDpmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiB0JiYobj10LHQ9dm9pZCAwKSxuPW58fHt9O3ZhciBpLG8sYSxzLHUsbCxjLGYscCxkLGg9dy5hamF4U2V0dXAoe30sbiksZz1oLmNvbnRleHR8fGgseT1oLmNvbnRleHQmJihnLm5vZGVUeXBlfHxnLmpxdWVyeSk/dyhnKTp3LmV2ZW50LHY9dy5EZWZlcnJlZCgpLG09dy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx4PWguc3RhdHVzQ29kZXx8e30sYj17fSxUPXt9LEM9XCJjYW5jZWxlZFwiLEU9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihjKXtpZighcyl7cz17fTt3aGlsZSh0PU90LmV4ZWMoYSkpc1t0WzFdLnRvTG93ZXJDYXNlKCldPXRbMl19dD1zW2UudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PXQ/bnVsbDp0fSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gYz9hOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09YyYmKGU9VFtlLnRvTG93ZXJDYXNlKCldPVRbZS50b0xvd2VyQ2FzZSgpXXx8ZSxiW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWMmJihoLm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihjKUUuYWx3YXlzKGVbRS5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpeFt0XT1beFt0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8QztyZXR1cm4gaSYmaS5hYm9ydCh0KSxrKDAsdCksdGhpc319O2lmKHYucHJvbWlzZShFKSxoLnVybD0oKHR8fGgudXJsfHxDdC5ocmVmKStcIlwiKS5yZXBsYWNlKFJ0LEN0LnByb3RvY29sK1wiLy9cIiksaC50eXBlPW4ubWV0aG9kfHxuLnR5cGV8fGgubWV0aG9kfHxoLnR5cGUsaC5kYXRhVHlwZXM9KGguZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKE0pfHxbXCJcIl0sbnVsbD09aC5jcm9zc0RvbWFpbil7bD1yLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtsLmhyZWY9aC51cmwsbC5ocmVmPWwuaHJlZixoLmNyb3NzRG9tYWluPUJ0LnByb3RvY29sK1wiLy9cIitCdC5ob3N0IT1sLnByb3RvY29sK1wiLy9cIitsLmhvc3R9Y2F0Y2goZSl7aC5jcm9zc0RvbWFpbj0hMH19aWYoaC5kYXRhJiZoLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgaC5kYXRhJiYoaC5kYXRhPXcucGFyYW0oaC5kYXRhLGgudHJhZGl0aW9uYWwpKSxfdChJdCxoLG4sRSksYylyZXR1cm4gRTsoZj13LmV2ZW50JiZoLmdsb2JhbCkmJjA9PXcuYWN0aXZlKysmJncuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxoLnR5cGU9aC50eXBlLnRvVXBwZXJDYXNlKCksaC5oYXNDb250ZW50PSFNdC50ZXN0KGgudHlwZSksbz1oLnVybC5yZXBsYWNlKEx0LFwiXCIpLGguaGFzQ29udGVudD9oLmRhdGEmJmgucHJvY2Vzc0RhdGEmJjA9PT0oaC5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKGguZGF0YT1oLmRhdGEucmVwbGFjZShxdCxcIitcIikpOihkPWgudXJsLnNsaWNlKG8ubGVuZ3RoKSxoLmRhdGEmJihoLnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2YgaC5kYXRhKSYmKG8rPShrdC50ZXN0KG8pP1wiJlwiOlwiP1wiKStoLmRhdGEsZGVsZXRlIGguZGF0YSksITE9PT1oLmNhY2hlJiYobz1vLnJlcGxhY2UoSHQsXCIkMVwiKSxkPShrdC50ZXN0KG8pP1wiJlwiOlwiP1wiKStcIl89XCIrRXQrKytkKSxoLnVybD1vK2QpLGguaWZNb2RpZmllZCYmKHcubGFzdE1vZGlmaWVkW29dJiZFLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHcubGFzdE1vZGlmaWVkW29dKSx3LmV0YWdbb10mJkUuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIix3LmV0YWdbb10pKSwoaC5kYXRhJiZoLmhhc0NvbnRlbnQmJiExIT09aC5jb250ZW50VHlwZXx8bi5jb250ZW50VHlwZSkmJkUuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGguY29udGVudFR5cGUpLEUuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGguZGF0YVR5cGVzWzBdJiZoLmFjY2VwdHNbaC5kYXRhVHlwZXNbMF1dP2guYWNjZXB0c1toLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09aC5kYXRhVHlwZXNbMF0/XCIsIFwiKyR0K1wiOyBxPTAuMDFcIjpcIlwiKTpoLmFjY2VwdHNbXCIqXCJdKTtmb3IocCBpbiBoLmhlYWRlcnMpRS5zZXRSZXF1ZXN0SGVhZGVyKHAsaC5oZWFkZXJzW3BdKTtpZihoLmJlZm9yZVNlbmQmJighMT09PWguYmVmb3JlU2VuZC5jYWxsKGcsRSxoKXx8YykpcmV0dXJuIEUuYWJvcnQoKTtpZihDPVwiYWJvcnRcIixtLmFkZChoLmNvbXBsZXRlKSxFLmRvbmUoaC5zdWNjZXNzKSxFLmZhaWwoaC5lcnJvciksaT1fdChXdCxoLG4sRSkpe2lmKEUucmVhZHlTdGF0ZT0xLGYmJnkudHJpZ2dlcihcImFqYXhTZW5kXCIsW0UsaF0pLGMpcmV0dXJuIEU7aC5hc3luYyYmaC50aW1lb3V0PjAmJih1PWUuc2V0VGltZW91dChmdW5jdGlvbigpe0UuYWJvcnQoXCJ0aW1lb3V0XCIpfSxoLnRpbWVvdXQpKTt0cnl7Yz0hMSxpLnNlbmQoYixrKX1jYXRjaChlKXtpZihjKXRocm93IGU7aygtMSxlKX19ZWxzZSBrKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGsodCxuLHIscyl7dmFyIGwscCxkLGIsVCxDPW47Y3x8KGM9ITAsdSYmZS5jbGVhclRpbWVvdXQodSksaT12b2lkIDAsYT1zfHxcIlwiLEUucmVhZHlTdGF0ZT10PjA/NDowLGw9dD49MjAwJiZ0PDMwMHx8MzA0PT09dCxyJiYoYj1YdChoLEUscikpLGI9VXQoaCxiLEUsbCksbD8oaC5pZk1vZGlmaWVkJiYoKFQ9RS5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYody5sYXN0TW9kaWZpZWRbb109VCksKFQ9RS5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYody5ldGFnW29dPVQpKSwyMDQ9PT10fHxcIkhFQURcIj09PWgudHlwZT9DPVwibm9jb250ZW50XCI6MzA0PT09dD9DPVwibm90bW9kaWZpZWRcIjooQz1iLnN0YXRlLHA9Yi5kYXRhLGw9IShkPWIuZXJyb3IpKSk6KGQ9QywhdCYmQ3x8KEM9XCJlcnJvclwiLHQ8MCYmKHQ9MCkpKSxFLnN0YXR1cz10LEUuc3RhdHVzVGV4dD0obnx8QykrXCJcIixsP3YucmVzb2x2ZVdpdGgoZyxbcCxDLEVdKTp2LnJlamVjdFdpdGgoZyxbRSxDLGRdKSxFLnN0YXR1c0NvZGUoeCkseD12b2lkIDAsZiYmeS50cmlnZ2VyKGw/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW0UsaCxsP3A6ZF0pLG0uZmlyZVdpdGgoZyxbRSxDXSksZiYmKHkudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtFLGhdKSwtLXcuYWN0aXZlfHx3LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBFfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSx3LmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsdCl7d1t0XT1mdW5jdGlvbihlLG4scixpKXtyZXR1cm4gZyhuKSYmKGk9aXx8cixyPW4sbj12b2lkIDApLHcuYWpheCh3LmV4dGVuZCh7dXJsOmUsdHlwZTp0LGRhdGFUeXBlOmksZGF0YTpuLHN1Y2Nlc3M6cn0sdy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksdy5fZXZhbFVybD1mdW5jdGlvbihlKXtyZXR1cm4gdy5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSx3LmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKGcoZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD13KGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihlKXtyZXR1cm4gZyhlKT90aGlzLmVhY2goZnVuY3Rpb24odCl7dyh0aGlzKS53cmFwSW5uZXIoZS5jYWxsKHRoaXMsdCkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9dyh0aGlzKSxuPXQuY29udGVudHMoKTtuLmxlbmd0aD9uLndyYXBBbGwoZSk6dC5hcHBlbmQoZSl9KX0sd3JhcDpmdW5jdGlvbihlKXt2YXIgdD1nKGUpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7dyh0aGlzKS53cmFwQWxsKHQ/ZS5jYWxsKHRoaXMsbik6ZSl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXt3KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLHcuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hdy5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sdy5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LHcuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGUuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIFZ0PXswOjIwMCwxMjIzOjIwNH0sR3Q9dy5hamF4U2V0dGluZ3MueGhyKCk7aC5jb3JzPSEhR3QmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBHdCxoLmFqYXg9R3Q9ISFHdCx3LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24odCl7dmFyIG4scjtpZihoLmNvcnN8fEd0JiYhdC5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihpLG8pe3ZhciBhLHM9dC54aHIoKTtpZihzLm9wZW4odC50eXBlLHQudXJsLHQuYXN5bmMsdC51c2VybmFtZSx0LnBhc3N3b3JkKSx0LnhockZpZWxkcylmb3IoYSBpbiB0LnhockZpZWxkcylzW2FdPXQueGhyRmllbGRzW2FdO3QubWltZVR5cGUmJnMub3ZlcnJpZGVNaW1lVHlwZSYmcy5vdmVycmlkZU1pbWVUeXBlKHQubWltZVR5cGUpLHQuY3Jvc3NEb21haW58fGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoaVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoYSBpbiBpKXMuc2V0UmVxdWVzdEhlYWRlcihhLGlbYV0pO249ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7biYmKG49cj1zLm9ubG9hZD1zLm9uZXJyb3I9cy5vbmFib3J0PXMub250aW1lb3V0PXMub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9zLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygcy5zdGF0dXM/bygwLFwiZXJyb3JcIik6byhzLnN0YXR1cyxzLnN0YXR1c1RleHQpOm8oVnRbcy5zdGF0dXNdfHxzLnN0YXR1cyxzLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0ocy5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHMucmVzcG9uc2VUZXh0P3tiaW5hcnk6cy5yZXNwb25zZX06e3RleHQ6cy5yZXNwb25zZVRleHR9LHMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHMub25sb2FkPW4oKSxyPXMub25lcnJvcj1zLm9udGltZW91dD1uKFwiZXJyb3JcIiksdm9pZCAwIT09cy5vbmFib3J0P3Mub25hYm9ydD1yOnMub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXMucmVhZHlTdGF0ZSYmZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7biYmcigpfSl9LG49bihcImFib3J0XCIpO3RyeXtzLnNlbmQodC5oYXNDb250ZW50JiZ0LmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG4pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7biYmbigpfX19KSx3LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLHcuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiB3Lmdsb2JhbEV2YWwoZSksZX19fSksdy5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSx3LmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihlKXtpZihlLmNyb3NzRG9tYWluKXt2YXIgdCxuO3JldHVybntzZW5kOmZ1bmN0aW9uKGksbyl7dD13KFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDplLnNjcmlwdENoYXJzZXQsc3JjOmUudXJsfSkub24oXCJsb2FkIGVycm9yXCIsbj1mdW5jdGlvbihlKXt0LnJlbW92ZSgpLG49bnVsbCxlJiZvKFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxyLmhlYWQuYXBwZW5kQ2hpbGQodFswXSl9LGFib3J0OmZ1bmN0aW9uKCl7biYmbigpfX19fSk7dmFyIFl0PVtdLFF0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87dy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WXQucG9wKCl8fHcuZXhwYW5kbytcIl9cIitFdCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksdy5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKHQsbixyKXt2YXIgaSxvLGEscz0hMSE9PXQuanNvbnAmJihRdC50ZXN0KHQudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiB0LmRhdGEmJjA9PT0odC5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmUXQudGVzdCh0LmRhdGEpJiZcImRhdGFcIik7aWYoc3x8XCJqc29ucFwiPT09dC5kYXRhVHlwZXNbMF0pcmV0dXJuIGk9dC5qc29ucENhbGxiYWNrPWcodC5qc29ucENhbGxiYWNrKT90Lmpzb25wQ2FsbGJhY2soKTp0Lmpzb25wQ2FsbGJhY2sscz90W3NdPXRbc10ucmVwbGFjZShRdCxcIiQxXCIraSk6ITEhPT10Lmpzb25wJiYodC51cmwrPShrdC50ZXN0KHQudXJsKT9cIiZcIjpcIj9cIikrdC5qc29ucCtcIj1cIitpKSx0LmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBhfHx3LmVycm9yKGkrXCIgd2FzIG5vdCBjYWxsZWRcIiksYVswXX0sdC5kYXRhVHlwZXNbMF09XCJqc29uXCIsbz1lW2ldLGVbaV09ZnVuY3Rpb24oKXthPWFyZ3VtZW50c30sci5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1vP3coZSkucmVtb3ZlUHJvcChpKTplW2ldPW8sdFtpXSYmKHQuanNvbnBDYWxsYmFjaz1uLmpzb25wQ2FsbGJhY2ssWXQucHVzaChpKSksYSYmZyhvKSYmbyhhWzBdKSxhPW89dm9pZCAwfSksXCJzY3JpcHRcIn0pLGguY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ci5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1lLmNoaWxkTm9kZXMubGVuZ3RofSgpLHcucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSk7dmFyIGksbyxhO3JldHVybiB0fHwoaC5jcmVhdGVIVE1MRG9jdW1lbnQ/KChpPSh0PXIuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1yLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKGkpKTp0PXIpLG89QS5leGVjKGUpLGE9IW4mJltdLG8/W3QuY3JlYXRlRWxlbWVudChvWzFdKV06KG89eGUoW2VdLHQsYSksYSYmYS5sZW5ndGgmJncoYSkucmVtb3ZlKCksdy5tZXJnZShbXSxvLmNoaWxkTm9kZXMpKX0sdy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gcz4tMSYmKHI9dnQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLGcodCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSxhLmxlbmd0aD4wJiZ3LmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP3coXCI8ZGl2PlwiKS5hcHBlbmQody5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSx3LmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe3cuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSx3LmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbihlKXtyZXR1cm4gdy5ncmVwKHcudGltZXJzLGZ1bmN0aW9uKHQpe3JldHVybiBlPT09dC5lbGVtfSkubGVuZ3RofSx3Lm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPXcuY3NzKGUsXCJwb3NpdGlvblwiKSxmPXcoZSkscD17fTtcInN0YXRpY1wiPT09YyYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWYub2Zmc2V0KCksbz13LmNzcyhlLFwidG9wXCIpLHU9dy5jc3MoZSxcImxlZnRcIiksKGw9KFwiYWJzb2x1dGVcIj09PWN8fFwiZml4ZWRcIj09PWMpJiYobyt1KS5pbmRleE9mKFwiYXV0b1wiKT4tMSk/KGE9KHI9Zi5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxnKHQpJiYodD10LmNhbGwoZSxuLHcuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihwLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihwLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLHApOmYuY3NzKHApfX0sdy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihlKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1lP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3cub2Zmc2V0LnNldE9mZnNldCh0aGlzLGUsdCl9KTt2YXIgdCxuLHI9dGhpc1swXTtpZihyKXJldHVybiByLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyh0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDp0LnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6dC5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09dy5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PXcuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT13KGUpLm9mZnNldCgpKS50b3ArPXcuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPXcuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3Atdy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtdy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PXcuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxiZX0pfX0pLHcuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1cInBhZ2VZT2Zmc2V0XCI9PT10O3cuZm5bZV09ZnVuY3Rpb24ocil7cmV0dXJuIHoodGhpcyxmdW5jdGlvbihlLHIsaSl7dmFyIG87aWYoeShlKT9vPWU6OT09PWUubm9kZVR5cGUmJihvPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PWkpcmV0dXJuIG8/b1t0XTplW3JdO28/by5zY3JvbGxUbyhuP28ucGFnZVhPZmZzZXQ6aSxuP2k6by5wYWdlWU9mZnNldCk6ZVtyXT1pfSxlLHIsYXJndW1lbnRzLmxlbmd0aCl9fSksdy5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLHQpe3cuY3NzSG9va3NbdF09X2UoaC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsbil7aWYobilyZXR1cm4gbj1GZShlLHQpLFdlLnRlc3Qobik/dyhlKS5wb3NpdGlvbigpW3RdK1wicHhcIjpufSl9KSx3LmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oZSx0KXt3LmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2UsY29udGVudDp0LFwiXCI6XCJvdXRlclwiK2V9LGZ1bmN0aW9uKG4scil7dy5mbltyXT1mdW5jdGlvbihpLG8pe3ZhciBhPWFyZ3VtZW50cy5sZW5ndGgmJihufHxcImJvb2xlYW5cIiE9dHlwZW9mIGkpLHM9bnx8KCEwPT09aXx8ITA9PT1vP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIHoodGhpcyxmdW5jdGlvbih0LG4saSl7dmFyIG87cmV0dXJuIHkodCk/MD09PXIuaW5kZXhPZihcIm91dGVyXCIpP3RbXCJpbm5lclwiK2VdOnQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrZV06OT09PXQubm9kZVR5cGU/KG89dC5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgodC5ib2R5W1wic2Nyb2xsXCIrZV0sb1tcInNjcm9sbFwiK2VdLHQuYm9keVtcIm9mZnNldFwiK2VdLG9bXCJvZmZzZXRcIitlXSxvW1wiY2xpZW50XCIrZV0pKTp2b2lkIDA9PT1pP3cuY3NzKHQsbixzKTp3LnN0eWxlKHQsbixpLHMpfSx0LGE/aTp2b2lkIDAsYSl9fSl9KSx3LmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7dy5mblt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbih0LG51bGwsZSxuKTp0aGlzLnRyaWdnZXIodCl9fSksdy5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLHcuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9fSksdy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxnKGUpKXJldHVybiByPW8uY2FsbChhcmd1bWVudHMsMiksaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQoby5jYWxsKGFyZ3VtZW50cykpKX0saS5ndWlkPWUuZ3VpZD1lLmd1aWR8fHcuZ3VpZCsrLGl9LHcuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/dy5yZWFkeVdhaXQrKzp3LnJlYWR5KCEwKX0sdy5pc0FycmF5PUFycmF5LmlzQXJyYXksdy5wYXJzZUpTT049SlNPTi5wYXJzZSx3Lm5vZGVOYW1lPU4sdy5pc0Z1bmN0aW9uPWcsdy5pc1dpbmRvdz15LHcuY2FtZWxDYXNlPUcsdy50eXBlPXgsdy5ub3c9RGF0ZS5ub3csdy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9dy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiB3fSk7dmFyIEp0PWUualF1ZXJ5LEt0PWUuJDtyZXR1cm4gdy5ub0NvbmZsaWN0PWZ1bmN0aW9uKHQpe3JldHVybiBlLiQ9PT13JiYoZS4kPUt0KSx0JiZlLmpRdWVyeT09PXcmJihlLmpRdWVyeT1KdCksd30sdHx8KGUualF1ZXJ5PWUuJD13KSx3fSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBEOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJsZXQgbW9iaWxlRGV0ZXJtaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaSkudGVzdChuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcclxufTtcclxuXHJcbndpbmRvdy5pc01vYmlsZSA9IG1vYmlsZURldGVybWluZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXNzZXRzL2pzL21vZHVsZXMvaXNNb2JpbGUuanMiLCIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgaWUxMSA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKTtcclxuXHJcbiAgICBpZihpZTExKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2llMTEnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWUxMScpO1xyXG4gICAgfVxyXG5cclxufSgpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2llMTFkZXRlY3Rpb24uanMiLCIvLyBzb3VyY2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc2tyb2xsclxyXG5pbXBvcnQgc2tyb2xsciBmcm9tICdza3JvbGxyJztcclxuXHJcbmxldCBkZXNrdG9wID0gd2luZG93LmlzTW9iaWxlID09IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNrcm9sbHIoKSB7XHJcbiAgICBpZiAoZGVza3RvcCkge1xyXG4gICAgICAgIHdpbmRvdy5teVNjcm9sbHIgPSBza3JvbGxyLmluaXQoe1xyXG4gICAgICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgICAgIGhoaDogLTQzIC8vIGhlYWRlciBoYWxmIGhlaWdodFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbW9vdGhTY3JvbGxpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2JpbGUtZGV2aWNlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdGlhbGl6ZVNrcm9sbHIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXNzZXRzL2pzL21vZHVsZXMvc2tyb2xsci5qcyIsIi8qISBza3JvbGxyIDAuNi4yNiAoMjAxNC0wNi0wOCkgfCBBbGV4YW5kZXIgUHJpbnpob3JuIC0gaHR0cHM6Ly9naXRodWIuY29tL1ByaW56aG9ybi9za3JvbGxyIHwgRnJlZSB0byB1c2UgdW5kZXIgdGVybXMgb2YgTUlUIGxpY2Vuc2UgKi9cbihmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihyKXtpZihvPXQuZG9jdW1lbnRFbGVtZW50LGE9dC5ib2R5LEsoKSxpdD10aGlzLHI9cnx8e30sdXQ9ci5jb25zdGFudHN8fHt9LHIuZWFzaW5nKWZvcih2YXIgbiBpbiByLmVhc2luZylVW25dPXIuZWFzaW5nW25dO3l0PXIuZWRnZVN0cmF0ZWd5fHxcInNldFwiLGN0PXtiZWZvcmVyZW5kZXI6ci5iZWZvcmVyZW5kZXIscmVuZGVyOnIucmVuZGVyLGtleWZyYW1lOnIua2V5ZnJhbWV9LGZ0PXIuZm9yY2VIZWlnaHQhPT0hMSxmdCYmKFZ0PXIuc2NhbGV8fDEpLG10PXIubW9iaWxlRGVjZWxlcmF0aW9ufHx4LGR0PXIuc21vb3RoU2Nyb2xsaW5nIT09ITEsZ3Q9ci5zbW9vdGhTY3JvbGxpbmdEdXJhdGlvbnx8RSx2dD17dGFyZ2V0VG9wOml0LmdldFNjcm9sbFRvcCgpfSxHdD0oci5tb2JpbGVDaGVja3x8ZnVuY3Rpb24oKXtyZXR1cm4vQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fGUub3BlcmEpfSkoKSxHdD8oc3Q9dC5nZXRFbGVtZW50QnlJZChcInNrcm9sbHItYm9keVwiKSxzdCYmYXQoKSxYKCksRHQobyxbeSxTXSxbVF0pKTpEdChvLFt5LGJdLFtUXSksaXQucmVmcmVzaCgpLFN0KGUsXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPW8uY2xpZW50V2lkdGgsdD1vLmNsaWVudEhlaWdodDsodCE9PSR0fHxlIT09TXQpJiYoJHQ9dCxNdD1lLF90PSEwKX0pO3ZhciBpPVkoKTtyZXR1cm4gZnVuY3Rpb24gbCgpe1ooKSxidD1pKGwpfSgpLGl0fXZhciBvLGEsaT17Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGl0fSxpbml0OmZ1bmN0aW9uKGUpe3JldHVybiBpdHx8bmV3IG4oZSl9LFZFUlNJT046XCIwLjYuMjZcIn0sbD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHM9ZS5NYXRoLGM9ZS5nZXRDb21wdXRlZFN0eWxlLGY9XCJ0b3VjaHN0YXJ0XCIsdT1cInRvdWNobW92ZVwiLG09XCJ0b3VjaGNhbmNlbFwiLHA9XCJ0b3VjaGVuZFwiLGQ9XCJza3JvbGxhYmxlXCIsZz1kK1wiLWJlZm9yZVwiLHY9ZCtcIi1iZXR3ZWVuXCIsaD1kK1wiLWFmdGVyXCIseT1cInNrcm9sbHJcIixUPVwibm8tXCIreSxiPXkrXCItZGVza3RvcFwiLFM9eStcIi1tb2JpbGVcIixrPVwibGluZWFyXCIsdz0xZTMseD0uMDA0LEU9MjAwLEE9XCJzdGFydFwiLEY9XCJlbmRcIixDPVwiY2VudGVyXCIsRD1cImJvdHRvbVwiLEg9XCJfX19za3JvbGxhYmxlX2lkXCIsST0vXig/OmlucHV0fHRleHRhcmVhfGJ1dHRvbnxzZWxlY3QpJC9pLFA9L15cXHMrfFxccyskL2csTj0vXmRhdGEoPzotKF9cXHcrKSk/KD86LT8oLT9cXGQqXFwuP1xcZCtwPykpPyg/Oi0/KHN0YXJ0fGVuZHx0b3B8Y2VudGVyfGJvdHRvbSkpPyg/Oi0/KHRvcHxjZW50ZXJ8Ym90dG9tKSk/JC8sTz0vXFxzKihAP1tcXHdcXC1cXFtcXF1dKylcXHMqOlxccyooLis/KVxccyooPzo7fCQpL2dpLFY9L14oQD9bYS16XFwtXSspXFxbKFxcdyspXFxdJC8sej0vLShbYS16MC05X10pL2cscT1mdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9LEw9L1tcXC0rXT9bXFxkXSpcXC4/W1xcZF0rL2csTT0vXFx7XFw/XFx9L2csJD0vcmdiYT9cXChcXHMqLT9cXGQrXFxzKixcXHMqLT9cXGQrXFxzKixcXHMqLT9cXGQrL2csXz0vW2EtelxcLV0rLWdyYWRpZW50L2csQj1cIlwiLEc9XCJcIixLPWZ1bmN0aW9uKCl7dmFyIGU9L14oPzpPfE1venx3ZWJraXR8bXMpfCg/Oi0oPzpvfG1venx3ZWJraXR8bXMpLSkvO2lmKGMpe3ZhciB0PWMoYSxudWxsKTtmb3IodmFyIG4gaW4gdClpZihCPW4ubWF0Y2goZSl8fCtuPT1uJiZ0W25dLm1hdGNoKGUpKWJyZWFrO2lmKCFCKXJldHVybiBCPUc9XCJcIixyO0I9QlswXSxcIi1cIj09PUIuc2xpY2UoMCwxKT8oRz1CLEI9e1wiLXdlYmtpdC1cIjpcIndlYmtpdFwiLFwiLW1vei1cIjpcIk1velwiLFwiLW1zLVwiOlwibXNcIixcIi1vLVwiOlwiT1wifVtCXSk6Rz1cIi1cIitCLnRvTG93ZXJDYXNlKCkrXCItXCJ9fSxZPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGVbQi50b0xvd2VyQ2FzZSgpK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHI9UHQoKTtyZXR1cm4oR3R8fCF0KSYmKHQ9ZnVuY3Rpb24odCl7dmFyIG49UHQoKS1yLG89cy5tYXgoMCwxZTMvNjAtbik7cmV0dXJuIGUuc2V0VGltZW91dChmdW5jdGlvbigpe3I9UHQoKSx0KCl9LG8pfSksdH0sUj1mdW5jdGlvbigpe3ZhciB0PWUuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGVbQi50b0xvd2VyQ2FzZSgpK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl07cmV0dXJuKEd0fHwhdCkmJih0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmNsZWFyVGltZW91dCh0KX0pLHR9LFU9e2JlZ2luOmZ1bmN0aW9uKCl7cmV0dXJuIDB9LGVuZDpmdW5jdGlvbigpe3JldHVybiAxfSxsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHF1YWRyYXRpYzpmdW5jdGlvbihlKXtyZXR1cm4gZSplfSxjdWJpYzpmdW5jdGlvbihlKXtyZXR1cm4gZSplKmV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi1zLmNvcyhlKnMuUEkpLzIrLjV9LHNxcnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHMuc3FydChlKX0sb3V0Q3ViaWM6ZnVuY3Rpb24oZSl7cmV0dXJuIHMucG93KGUtMSwzKSsxfSxib3VuY2U6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoLjUwODM+PWUpdD0zO2Vsc2UgaWYoLjg0ODk+PWUpdD05O2Vsc2UgaWYoLjk2MjA4Pj1lKXQ9Mjc7ZWxzZXtpZighKC45OTk4MT49ZSkpcmV0dXJuIDE7dD05MX1yZXR1cm4gMS1zLmFicygzKnMuY29zKDEuMDI4KmUqdCkvdCl9fTtuLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKGUpe3ZhciBuLG8sYT0hMTtmb3IoZT09PXI/KGE9ITAsbHQ9W10sQnQ9MCxlPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTplLmxlbmd0aD09PXImJihlPVtlXSksbj0wLG89ZS5sZW5ndGg7bz5uO24rKyl7dmFyIGk9ZVtuXSxsPWkscz1bXSxjPWR0LGY9eXQsdT0hMTtpZihhJiZIIGluIGkmJmRlbGV0ZSBpW0hdLGkuYXR0cmlidXRlcyl7Zm9yKHZhciBtPTAscD1pLmF0dHJpYnV0ZXMubGVuZ3RoO3A+bTttKyspe3ZhciBnPWkuYXR0cmlidXRlc1ttXTtpZihcImRhdGEtYW5jaG9yLXRhcmdldFwiIT09Zy5uYW1lKWlmKFwiZGF0YS1zbW9vdGgtc2Nyb2xsaW5nXCIhPT1nLm5hbWUpaWYoXCJkYXRhLWVkZ2Utc3RyYXRlZ3lcIiE9PWcubmFtZSlpZihcImRhdGEtZW1pdC1ldmVudHNcIiE9PWcubmFtZSl7dmFyIHY9Zy5uYW1lLm1hdGNoKE4pO2lmKG51bGwhPT12KXt2YXIgaD17cHJvcHM6Zy52YWx1ZSxlbGVtZW50OmksZXZlbnRUeXBlOmcubmFtZS5yZXBsYWNlKHoscSl9O3MucHVzaChoKTt2YXIgeT12WzFdO3kmJihoLmNvbnN0YW50PXkuc3Vic3RyKDEpKTt2YXIgVD12WzJdOy9wJC8udGVzdChUKT8oaC5pc1BlcmNlbnRhZ2U9ITAsaC5vZmZzZXQ9KDB8VC5zbGljZSgwLC0xKSkvMTAwKTpoLm9mZnNldD0wfFQ7dmFyIGI9dlszXSxTPXZbNF18fGI7YiYmYiE9PUEmJmIhPT1GPyhoLm1vZGU9XCJyZWxhdGl2ZVwiLGguYW5jaG9ycz1bYixTXSk6KGgubW9kZT1cImFic29sdXRlXCIsYj09PUY/aC5pc0VuZD0hMDpoLmlzUGVyY2VudGFnZXx8KGgub2Zmc2V0PWgub2Zmc2V0KlZ0KSl9fWVsc2UgdT0hMDtlbHNlIGY9Zy52YWx1ZTtlbHNlIGM9XCJvZmZcIiE9PWcudmFsdWU7ZWxzZSBpZihsPXQucXVlcnlTZWxlY3RvcihnLnZhbHVlKSxudWxsPT09bCl0aHJvdydVbmFibGUgdG8gZmluZCBhbmNob3IgdGFyZ2V0IFwiJytnLnZhbHVlKydcIid9aWYocy5sZW5ndGgpe3ZhciBrLHcseDshYSYmSCBpbiBpPyh4PWlbSF0saz1sdFt4XS5zdHlsZUF0dHIsdz1sdFt4XS5jbGFzc0F0dHIpOih4PWlbSF09QnQrKyxrPWkuc3R5bGUuY3NzVGV4dCx3PUN0KGkpKSxsdFt4XT17ZWxlbWVudDppLHN0eWxlQXR0cjprLGNsYXNzQXR0cjp3LGFuY2hvclRhcmdldDpsLGtleUZyYW1lczpzLHNtb290aFNjcm9sbGluZzpjLGVkZ2VTdHJhdGVneTpmLGVtaXRFdmVudHM6dSxsYXN0RnJhbWVJbmRleDotMX0sRHQoaSxbZF0sW10pfX19Zm9yKEV0KCksbj0wLG89ZS5sZW5ndGg7bz5uO24rKyl7dmFyIEU9bHRbZVtuXVtIXV07RSE9PXImJihKKEUpLGV0KEUpKX1yZXR1cm4gaXR9LG4ucHJvdG90eXBlLnJlbGF0aXZlVG9BYnNvbHV0ZT1mdW5jdGlvbihlLHQscil7dmFyIG49by5jbGllbnRIZWlnaHQsYT1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9YS50b3AsbD1hLmJvdHRvbS1hLnRvcDtyZXR1cm4gdD09PUQ/aS09bjp0PT09QyYmKGktPW4vMikscj09PUQ/aSs9bDpyPT09QyYmKGkrPWwvMiksaSs9aXQuZ2V0U2Nyb2xsVG9wKCksMHxpKy41fSxuLnByb3RvdHlwZS5hbmltYXRlVG89ZnVuY3Rpb24oZSx0KXt0PXR8fHt9O3ZhciBuPVB0KCksbz1pdC5nZXRTY3JvbGxUb3AoKTtyZXR1cm4gcHQ9e3N0YXJ0VG9wOm8sdG9wRGlmZjplLW8sdGFyZ2V0VG9wOmUsZHVyYXRpb246dC5kdXJhdGlvbnx8dyxzdGFydFRpbWU6bixlbmRUaW1lOm4rKHQuZHVyYXRpb258fHcpLGVhc2luZzpVW3QuZWFzaW5nfHxrXSxkb25lOnQuZG9uZX0scHQudG9wRGlmZnx8KHB0LmRvbmUmJnB0LmRvbmUuY2FsbChpdCwhMSkscHQ9ciksaXR9LG4ucHJvdG90eXBlLnN0b3BBbmltYXRlVG89ZnVuY3Rpb24oKXtwdCYmcHQuZG9uZSYmcHQuZG9uZS5jYWxsKGl0LCEwKSxwdD1yfSxuLnByb3RvdHlwZS5pc0FuaW1hdGluZ1RvPWZ1bmN0aW9uKCl7cmV0dXJuISFwdH0sbi5wcm90b3R5cGUuaXNNb2JpbGU9ZnVuY3Rpb24oKXtyZXR1cm4gR3R9LG4ucHJvdG90eXBlLnNldFNjcm9sbFRvcD1mdW5jdGlvbih0LHIpe3JldHVybiBodD1yPT09ITAsR3Q/S3Q9cy5taW4ocy5tYXgodCwwKSxPdCk6ZS5zY3JvbGxUbygwLHQpLGl0fSxuLnByb3RvdHlwZS5nZXRTY3JvbGxUb3A9ZnVuY3Rpb24oKXtyZXR1cm4gR3Q/S3Q6ZS5wYWdlWU9mZnNldHx8by5zY3JvbGxUb3B8fGEuc2Nyb2xsVG9wfHwwfSxuLnByb3RvdHlwZS5nZXRNYXhTY3JvbGxUb3A9ZnVuY3Rpb24oKXtyZXR1cm4gT3R9LG4ucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGN0W2VdPXQsaXR9LG4ucHJvdG90eXBlLm9mZj1mdW5jdGlvbihlKXtyZXR1cm4gZGVsZXRlIGN0W2VdLGl0fSxuLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGU9UigpO2UoYnQpLHd0KCksRHQobyxbVF0sW3ksYixTXSk7Zm9yKHZhciB0PTAsbj1sdC5sZW5ndGg7bj50O3QrKylvdChsdFt0XS5lbGVtZW50KTtvLnN0eWxlLm92ZXJmbG93PWEuc3R5bGUub3ZlcmZsb3c9XCJcIixvLnN0eWxlLmhlaWdodD1hLnN0eWxlLmhlaWdodD1cIlwiLHN0JiZpLnNldFN0eWxlKHN0LFwidHJhbnNmb3JtXCIsXCJub25lXCIpLGl0PXIsc3Q9cixjdD1yLGZ0PXIsT3Q9MCxWdD0xLHV0PXIsbXQ9cix6dD1cImRvd25cIixxdD0tMSxNdD0wLCR0PTAsX3Q9ITEscHQ9cixkdD1yLGd0PXIsdnQ9cixodD1yLEJ0PTAseXQ9cixHdD0hMSxLdD0wLFR0PXJ9O3ZhciBYPWZ1bmN0aW9uKCl7dmFyIG4saSxsLGMsZCxnLHYsaCx5LFQsYixTO1N0KG8sW2YsdSxtLHBdLmpvaW4oXCIgXCIpLGZ1bmN0aW9uKGUpe3ZhciBvPWUuY2hhbmdlZFRvdWNoZXNbMF07Zm9yKGM9ZS50YXJnZXQ7Mz09PWMubm9kZVR5cGU7KWM9Yy5wYXJlbnROb2RlO3N3aXRjaChkPW8uY2xpZW50WSxnPW8uY2xpZW50WCxUPWUudGltZVN0YW1wLEkudGVzdChjLnRhZ05hbWUpfHxlLnByZXZlbnREZWZhdWx0KCksZS50eXBlKXtjYXNlIGY6biYmbi5ibHVyKCksaXQuc3RvcEFuaW1hdGVUbygpLG49YyxpPXY9ZCxsPWcseT1UO2JyZWFrO2Nhc2UgdTpJLnRlc3QoYy50YWdOYW1lKSYmdC5hY3RpdmVFbGVtZW50IT09YyYmZS5wcmV2ZW50RGVmYXVsdCgpLGg9ZC12LFM9VC1iLGl0LnNldFNjcm9sbFRvcChLdC1oLCEwKSx2PWQsYj1UO2JyZWFrO2RlZmF1bHQ6Y2FzZSBtOmNhc2UgcDp2YXIgYT1pLWQsaz1sLWcsdz1rKmsrYSphO2lmKDQ5Pncpe2lmKCFJLnRlc3Qobi50YWdOYW1lKSl7bi5mb2N1cygpO3ZhciB4PXQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTt4LmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCxlLnZpZXcsMSxvLnNjcmVlblgsby5zY3JlZW5ZLG8uY2xpZW50WCxvLmNsaWVudFksZS5jdHJsS2V5LGUuYWx0S2V5LGUuc2hpZnRLZXksZS5tZXRhS2V5LDAsbnVsbCksbi5kaXNwYXRjaEV2ZW50KHgpfXJldHVybn1uPXI7dmFyIEU9aC9TO0U9cy5tYXgocy5taW4oRSwzKSwtMyk7dmFyIEE9cy5hYnMoRS9tdCksRj1FKkErLjUqbXQqQSpBLEM9aXQuZ2V0U2Nyb2xsVG9wKCktRixEPTA7Qz5PdD8oRD0oT3QtQykvRixDPU90KTowPkMmJihEPS1DL0YsQz0wKSxBKj0xLUQsaXQuYW5pbWF0ZVRvKDB8QysuNSx7ZWFzaW5nOlwib3V0Q3ViaWNcIixkdXJhdGlvbjpBfSl9fSksZS5zY3JvbGxUbygwLDApLG8uc3R5bGUub3ZlcmZsb3c9YS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifSxqPWZ1bmN0aW9uKCl7dmFyIGUsdCxyLG4sYSxpLGwsYyxmLHUsbSxwPW8uY2xpZW50SGVpZ2h0LGQ9QXQoKTtmb3IoYz0wLGY9bHQubGVuZ3RoO2Y+YztjKyspZm9yKGU9bHRbY10sdD1lLmVsZW1lbnQscj1lLmFuY2hvclRhcmdldCxuPWUua2V5RnJhbWVzLGE9MCxpPW4ubGVuZ3RoO2k+YTthKyspbD1uW2FdLHU9bC5vZmZzZXQsbT1kW2wuY29uc3RhbnRdfHwwLGwuZnJhbWU9dSxsLmlzUGVyY2VudGFnZSYmKHUqPXAsbC5mcmFtZT11KSxcInJlbGF0aXZlXCI9PT1sLm1vZGUmJihvdCh0KSxsLmZyYW1lPWl0LnJlbGF0aXZlVG9BYnNvbHV0ZShyLGwuYW5jaG9yc1swXSxsLmFuY2hvcnNbMV0pLXUsb3QodCwhMCkpLGwuZnJhbWUrPW0sZnQmJiFsLmlzRW5kJiZsLmZyYW1lPk90JiYoT3Q9bC5mcmFtZSk7Zm9yKE90PXMubWF4KE90LEZ0KCkpLGM9MCxmPWx0Lmxlbmd0aDtmPmM7YysrKXtmb3IoZT1sdFtjXSxuPWUua2V5RnJhbWVzLGE9MCxpPW4ubGVuZ3RoO2k+YTthKyspbD1uW2FdLG09ZFtsLmNvbnN0YW50XXx8MCxsLmlzRW5kJiYobC5mcmFtZT1PdC1sLm9mZnNldCttKTtlLmtleUZyYW1lcy5zb3J0KE50KX19LFc9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9MCxuPWx0Lmxlbmd0aDtuPnI7cisrKXt2YXIgbyxhLHM9bHRbcl0sYz1zLmVsZW1lbnQsZj1zLnNtb290aFNjcm9sbGluZz9lOnQsdT1zLmtleUZyYW1lcyxtPXUubGVuZ3RoLHA9dVswXSx5PXVbdS5sZW5ndGgtMV0sVD1wLmZyYW1lPmYsYj1mPnkuZnJhbWUsUz1UP3A6eSxrPXMuZW1pdEV2ZW50cyx3PXMubGFzdEZyYW1lSW5kZXg7aWYoVHx8Yil7aWYoVCYmLTE9PT1zLmVkZ2V8fGImJjE9PT1zLmVkZ2UpY29udGludWU7c3dpdGNoKFQ/KER0KGMsW2ddLFtoLHZdKSxrJiZ3Pi0xJiYoeHQoYyxwLmV2ZW50VHlwZSx6dCkscy5sYXN0RnJhbWVJbmRleD0tMSkpOihEdChjLFtoXSxbZyx2XSksayYmbT53JiYoeHQoYyx5LmV2ZW50VHlwZSx6dCkscy5sYXN0RnJhbWVJbmRleD1tKSkscy5lZGdlPVQ/LTE6MSxzLmVkZ2VTdHJhdGVneSl7Y2FzZVwicmVzZXRcIjpvdChjKTtjb250aW51ZTtjYXNlXCJlYXNlXCI6Zj1TLmZyYW1lO2JyZWFrO2RlZmF1bHQ6Y2FzZVwic2V0XCI6dmFyIHg9Uy5wcm9wcztmb3IobyBpbiB4KWwuY2FsbCh4LG8pJiYoYT1udCh4W29dLnZhbHVlKSwwPT09by5pbmRleE9mKFwiQFwiKT9jLnNldEF0dHJpYnV0ZShvLnN1YnN0cigxKSxhKTppLnNldFN0eWxlKGMsbyxhKSk7Y29udGludWV9fWVsc2UgMCE9PXMuZWRnZSYmKER0KGMsW2Qsdl0sW2csaF0pLHMuZWRnZT0wKTtmb3IodmFyIEU9MDttLTE+RTtFKyspaWYoZj49dVtFXS5mcmFtZSYmdVtFKzFdLmZyYW1lPj1mKXt2YXIgQT11W0VdLEY9dVtFKzFdO2ZvcihvIGluIEEucHJvcHMpaWYobC5jYWxsKEEucHJvcHMsbykpe3ZhciBDPShmLUEuZnJhbWUpLyhGLmZyYW1lLUEuZnJhbWUpO0M9QS5wcm9wc1tvXS5lYXNpbmcoQyksYT1ydChBLnByb3BzW29dLnZhbHVlLEYucHJvcHNbb10udmFsdWUsQyksYT1udChhKSwwPT09by5pbmRleE9mKFwiQFwiKT9jLnNldEF0dHJpYnV0ZShvLnN1YnN0cigxKSxhKTppLnNldFN0eWxlKGMsbyxhKX1rJiZ3IT09RSYmKFwiZG93blwiPT09enQ/eHQoYyxBLmV2ZW50VHlwZSx6dCk6eHQoYyxGLmV2ZW50VHlwZSx6dCkscy5sYXN0RnJhbWVJbmRleD1FKTticmVha319fSxaPWZ1bmN0aW9uKCl7X3QmJihfdD0hMSxFdCgpKTt2YXIgZSx0LG49aXQuZ2V0U2Nyb2xsVG9wKCksbz1QdCgpO2lmKHB0KW8+PXB0LmVuZFRpbWU/KG49cHQudGFyZ2V0VG9wLGU9cHQuZG9uZSxwdD1yKToodD1wdC5lYXNpbmcoKG8tcHQuc3RhcnRUaW1lKS9wdC5kdXJhdGlvbiksbj0wfHB0LnN0YXJ0VG9wK3QqcHQudG9wRGlmZiksaXQuc2V0U2Nyb2xsVG9wKG4sITApO2Vsc2UgaWYoIWh0KXt2YXIgYT12dC50YXJnZXRUb3AtbjthJiYodnQ9e3N0YXJ0VG9wOnF0LHRvcERpZmY6bi1xdCx0YXJnZXRUb3A6bixzdGFydFRpbWU6THQsZW5kVGltZTpMdCtndH0pLHZ0LmVuZFRpbWU+PW8mJih0PVUuc3FydCgoby12dC5zdGFydFRpbWUpL2d0KSxuPTB8dnQuc3RhcnRUb3ArdCp2dC50b3BEaWZmKX1pZihHdCYmc3QmJmkuc2V0U3R5bGUoc3QsXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZSgwLCBcIistS3QrXCJweCkgXCIrVHQpLGh0fHxxdCE9PW4pe3p0PW4+cXQ/XCJkb3duXCI6cXQ+bj9cInVwXCI6enQsaHQ9ITE7dmFyIGw9e2N1clRvcDpuLGxhc3RUb3A6cXQsbWF4VG9wOk90LGRpcmVjdGlvbjp6dH0scz1jdC5iZWZvcmVyZW5kZXImJmN0LmJlZm9yZXJlbmRlci5jYWxsKGl0LGwpO3MhPT0hMSYmKFcobixpdC5nZXRTY3JvbGxUb3AoKSkscXQ9bixjdC5yZW5kZXImJmN0LnJlbmRlci5jYWxsKGl0LGwpKSxlJiZlLmNhbGwoaXQsITEpfUx0PW99LEo9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAscj1lLmtleUZyYW1lcy5sZW5ndGg7cj50O3QrKyl7Zm9yKHZhciBuLG8sYSxpLGw9ZS5rZXlGcmFtZXNbdF0scz17fTtudWxsIT09KGk9Ty5leGVjKGwucHJvcHMpKTspYT1pWzFdLG89aVsyXSxuPWEubWF0Y2goViksbnVsbCE9PW4/KGE9blsxXSxuPW5bMl0pOm49ayxvPW8uaW5kZXhPZihcIiFcIik/UShvKTpbby5zbGljZSgxKV0sc1thXT17dmFsdWU6byxlYXNpbmc6VVtuXX07bC5wcm9wcz1zfX0sUT1mdW5jdGlvbihlKXt2YXIgdD1bXTtyZXR1cm4gJC5sYXN0SW5kZXg9MCxlPWUucmVwbGFjZSgkLGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoTCxmdW5jdGlvbihlKXtyZXR1cm4gMTAwKihlLzI1NSkrXCIlXCJ9KX0pLEcmJihfLmxhc3RJbmRleD0wLGU9ZS5yZXBsYWNlKF8sZnVuY3Rpb24oZSl7cmV0dXJuIEcrZX0pKSxlPWUucmVwbGFjZShMLGZ1bmN0aW9uKGUpe3JldHVybiB0LnB1c2goK2UpLFwiez99XCJ9KSx0LnVuc2hpZnQoZSksdH0sZXQ9ZnVuY3Rpb24oZSl7dmFyIHQscixuPXt9O2Zvcih0PTAscj1lLmtleUZyYW1lcy5sZW5ndGg7cj50O3QrKyl0dChlLmtleUZyYW1lc1t0XSxuKTtmb3Iobj17fSx0PWUua2V5RnJhbWVzLmxlbmd0aC0xO3Q+PTA7dC0tKXR0KGUua2V5RnJhbWVzW3RdLG4pfSx0dD1mdW5jdGlvbihlLHQpe3ZhciByO2ZvcihyIGluIHQpbC5jYWxsKGUucHJvcHMscil8fChlLnByb3BzW3JdPXRbcl0pO2ZvcihyIGluIGUucHJvcHMpdFtyXT1lLnByb3BzW3JdfSxydD1mdW5jdGlvbihlLHQscil7dmFyIG4sbz1lLmxlbmd0aDtpZihvIT09dC5sZW5ndGgpdGhyb3dcIkNhbid0IGludGVycG9sYXRlIGJldHdlZW4gXFxcIlwiK2VbMF0rJ1wiIGFuZCBcIicrdFswXSsnXCInO3ZhciBhPVtlWzBdXTtmb3Iobj0xO28+bjtuKyspYVtuXT1lW25dKyh0W25dLWVbbl0pKnI7cmV0dXJuIGF9LG50PWZ1bmN0aW9uKGUpe3ZhciB0PTE7cmV0dXJuIE0ubGFzdEluZGV4PTAsZVswXS5yZXBsYWNlKE0sZnVuY3Rpb24oKXtyZXR1cm4gZVt0KytdfSl9LG90PWZ1bmN0aW9uKGUsdCl7ZT1bXS5jb25jYXQoZSk7Zm9yKHZhciByLG4sbz0wLGE9ZS5sZW5ndGg7YT5vO28rKyluPWVbb10scj1sdFtuW0hdXSxyJiYodD8obi5zdHlsZS5jc3NUZXh0PXIuZGlydHlTdHlsZUF0dHIsRHQobixyLmRpcnR5Q2xhc3NBdHRyKSk6KHIuZGlydHlTdHlsZUF0dHI9bi5zdHlsZS5jc3NUZXh0LHIuZGlydHlDbGFzc0F0dHI9Q3Qobiksbi5zdHlsZS5jc3NUZXh0PXIuc3R5bGVBdHRyLER0KG4sci5jbGFzc0F0dHIpKSl9LGF0PWZ1bmN0aW9uKCl7VHQ9XCJ0cmFuc2xhdGVaKDApXCIsaS5zZXRTdHlsZShzdCxcInRyYW5zZm9ybVwiLFR0KTt2YXIgZT1jKHN0KSx0PWUuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKSxyPWUuZ2V0UHJvcGVydHlWYWx1ZShHK1widHJhbnNmb3JtXCIpLG49dCYmXCJub25lXCIhPT10fHxyJiZcIm5vbmVcIiE9PXI7bnx8KFR0PVwiXCIpfTtpLnNldFN0eWxlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1lLnN0eWxlO2lmKHQ9dC5yZXBsYWNlKHoscSkucmVwbGFjZShcIi1cIixcIlwiKSxcInpJbmRleFwiPT09dCluW3RdPWlzTmFOKHIpP3I6XCJcIisoMHxyKTtlbHNlIGlmKFwiZmxvYXRcIj09PXQpbi5zdHlsZUZsb2F0PW4uY3NzRmxvYXQ9cjtlbHNlIHRyeXtCJiYobltCK3Quc2xpY2UoMCwxKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldPXIpLG5bdF09cn1jYXRjaChvKXt9fTt2YXIgaXQsbHQsc3QsY3QsZnQsdXQsbXQscHQsZHQsZ3QsdnQsaHQseXQsVHQsYnQsU3Q9aS5hZGRFdmVudD1mdW5jdGlvbih0LHIsbil7dmFyIG89ZnVuY3Rpb24odCl7cmV0dXJuIHQ9dHx8ZS5ldmVudCx0LnRhcmdldHx8KHQudGFyZ2V0PXQuc3JjRWxlbWVudCksdC5wcmV2ZW50RGVmYXVsdHx8KHQucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt0LnJldHVyblZhbHVlPSExLHQuZGVmYXVsdFByZXZlbnRlZD0hMH0pLG4uY2FsbCh0aGlzLHQpfTtyPXIuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYSxpPTAsbD1yLmxlbmd0aDtsPmk7aSsrKWE9cltpXSx0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKGEsbiwhMSk6dC5hdHRhY2hFdmVudChcIm9uXCIrYSxvKSxZdC5wdXNoKHtlbGVtZW50OnQsbmFtZTphLGxpc3RlbmVyOm59KX0sa3Q9aS5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQscil7dD10LnNwbGl0KFwiIFwiKTtmb3IodmFyIG49MCxvPXQubGVuZ3RoO28+bjtuKyspZS5yZW1vdmVFdmVudExpc3RlbmVyP2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0W25dLHIsITEpOmUuZGV0YWNoRXZlbnQoXCJvblwiK3Rbbl0scil9LHd0PWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MCxyPVl0Lmxlbmd0aDtyPnQ7dCsrKWU9WXRbdF0sa3QoZS5lbGVtZW50LGUubmFtZSxlLmxpc3RlbmVyKTtZdD1bXX0seHQ9ZnVuY3Rpb24oZSx0LHIpe2N0LmtleWZyYW1lJiZjdC5rZXlmcmFtZS5jYWxsKGl0LGUsdCxyKX0sRXQ9ZnVuY3Rpb24oKXt2YXIgZT1pdC5nZXRTY3JvbGxUb3AoKTtPdD0wLGZ0JiYhR3QmJihhLnN0eWxlLmhlaWdodD1cIlwiKSxqKCksZnQmJiFHdCYmKGEuc3R5bGUuaGVpZ2h0PU90K28uY2xpZW50SGVpZ2h0K1wicHhcIiksR3Q/aXQuc2V0U2Nyb2xsVG9wKHMubWluKGl0LmdldFNjcm9sbFRvcCgpLE90KSk6aXQuc2V0U2Nyb2xsVG9wKGUsITApLGh0PSEwfSxBdD1mdW5jdGlvbigpe3ZhciBlLHQscj1vLmNsaWVudEhlaWdodCxuPXt9O2ZvcihlIGluIHV0KXQ9dXRbZV0sXCJmdW5jdGlvblwiPT10eXBlb2YgdD90PXQuY2FsbChpdCk6L3AkLy50ZXN0KHQpJiYodD10LnNsaWNlKDAsLTEpLzEwMCpyKSxuW2VdPXQ7cmV0dXJuIG59LEZ0PWZ1bmN0aW9uKCl7dmFyIGU9c3QmJnN0Lm9mZnNldEhlaWdodHx8MCx0PXMubWF4KGUsYS5zY3JvbGxIZWlnaHQsYS5vZmZzZXRIZWlnaHQsby5zY3JvbGxIZWlnaHQsby5vZmZzZXRIZWlnaHQsby5jbGllbnRIZWlnaHQpO3JldHVybiB0LW8uY2xpZW50SGVpZ2h0fSxDdD1mdW5jdGlvbih0KXt2YXIgcj1cImNsYXNzTmFtZVwiO3JldHVybiBlLlNWR0VsZW1lbnQmJnQgaW5zdGFuY2VvZiBlLlNWR0VsZW1lbnQmJih0PXRbcl0scj1cImJhc2VWYWxcIiksdFtyXX0sRHQ9ZnVuY3Rpb24odCxuLG8pe3ZhciBhPVwiY2xhc3NOYW1lXCI7aWYoZS5TVkdFbGVtZW50JiZ0IGluc3RhbmNlb2YgZS5TVkdFbGVtZW50JiYodD10W2FdLGE9XCJiYXNlVmFsXCIpLG89PT1yKXJldHVybiB0W2FdPW4scjtmb3IodmFyIGk9dFthXSxsPTAscz1vLmxlbmd0aDtzPmw7bCsrKWk9SXQoaSkucmVwbGFjZShJdChvW2xdKSxcIiBcIik7aT1IdChpKTtmb3IodmFyIGM9MCxmPW4ubGVuZ3RoO2Y+YztjKyspLTE9PT1JdChpKS5pbmRleE9mKEl0KG5bY10pKSYmKGkrPVwiIFwiK25bY10pO3RbYV09SHQoaSl9LEh0PWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoUCxcIlwiKX0sSXQ9ZnVuY3Rpb24oZSl7cmV0dXJuXCIgXCIrZStcIiBcIn0sUHQ9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfSxOdD1mdW5jdGlvbihlLHQpe3JldHVybiBlLmZyYW1lLXQuZnJhbWV9LE90PTAsVnQ9MSx6dD1cImRvd25cIixxdD0tMSxMdD1QdCgpLE10PTAsJHQ9MCxfdD0hMSxCdD0wLEd0PSExLEt0PTAsWXQ9W107XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcInNrcm9sbHJcIixmdW5jdGlvbigpe3JldHVybiBpfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9aTplLnNrcm9sbHI9aX0pKHdpbmRvdyxkb2N1bWVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L3Nrcm9sbHIvZGlzdC9za3JvbGxyLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbic7XHJcblxyXG5qUXVlcnkoJy5nYWxsZXJ5LXNlY3Rpb24gLmdhbGxlcnknKS5zbGljayh7XHJcbiAgICAvLyBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAvLyBzbGlkZXNUb1Njcm9sbDogMVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hc3NldHMvanMvbW9kdWxlcy9zbGljay5qcyIsIiFmdW5jdGlvbihpKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1pKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkoalF1ZXJ5KX0oZnVuY3Rpb24oaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9d2luZG93LlNsaWNrfHx7fTsoZT1mdW5jdGlvbigpe3ZhciBlPTA7cmV0dXJuIGZ1bmN0aW9uKHQsbyl7dmFyIHMsbj10aGlzO24uZGVmYXVsdHM9e2FjY2Vzc2liaWxpdHk6ITAsYWRhcHRpdmVIZWlnaHQ6ITEsYXBwZW5kQXJyb3dzOmkodCksYXBwZW5kRG90czppKHQpLGFycm93czohMCxhc05hdkZvcjpudWxsLHByZXZBcnJvdzonPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLG5leHRBcnJvdzonPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxhdXRvcGxheTohMSxhdXRvcGxheVNwZWVkOjNlMyxjZW50ZXJNb2RlOiExLGNlbnRlclBhZGRpbmc6XCI1MHB4XCIsY3NzRWFzZTpcImVhc2VcIixjdXN0b21QYWdpbmc6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gaSgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KHQrMSl9LGRvdHM6ITEsZG90c0NsYXNzOlwic2xpY2stZG90c1wiLGRyYWdnYWJsZTohMCxlYXNpbmc6XCJsaW5lYXJcIixlZGdlRnJpY3Rpb246LjM1LGZhZGU6ITEsZm9jdXNPblNlbGVjdDohMSxmb2N1c09uQ2hhbmdlOiExLGluZmluaXRlOiEwLGluaXRpYWxTbGlkZTowLGxhenlMb2FkOlwib25kZW1hbmRcIixtb2JpbGVGaXJzdDohMSxwYXVzZU9uSG92ZXI6ITAscGF1c2VPbkZvY3VzOiEwLHBhdXNlT25Eb3RzSG92ZXI6ITEscmVzcG9uZFRvOlwid2luZG93XCIscmVzcG9uc2l2ZTpudWxsLHJvd3M6MSxydGw6ITEsc2xpZGU6XCJcIixzbGlkZXNQZXJSb3c6MSxzbGlkZXNUb1Nob3c6MSxzbGlkZXNUb1Njcm9sbDoxLHNwZWVkOjUwMCxzd2lwZTohMCxzd2lwZVRvU2xpZGU6ITEsdG91Y2hNb3ZlOiEwLHRvdWNoVGhyZXNob2xkOjUsdXNlQ1NTOiEwLHVzZVRyYW5zZm9ybTohMCx2YXJpYWJsZVdpZHRoOiExLHZlcnRpY2FsOiExLHZlcnRpY2FsU3dpcGluZzohMSx3YWl0Rm9yQW5pbWF0ZTohMCx6SW5kZXg6MWUzfSxuLmluaXRpYWxzPXthbmltYXRpbmc6ITEsZHJhZ2dpbmc6ITEsYXV0b1BsYXlUaW1lcjpudWxsLGN1cnJlbnREaXJlY3Rpb246MCxjdXJyZW50TGVmdDpudWxsLGN1cnJlbnRTbGlkZTowLGRpcmVjdGlvbjoxLCRkb3RzOm51bGwsbGlzdFdpZHRoOm51bGwsbGlzdEhlaWdodDpudWxsLGxvYWRJbmRleDowLCRuZXh0QXJyb3c6bnVsbCwkcHJldkFycm93Om51bGwsc2Nyb2xsaW5nOiExLHNsaWRlQ291bnQ6bnVsbCxzbGlkZVdpZHRoOm51bGwsJHNsaWRlVHJhY2s6bnVsbCwkc2xpZGVzOm51bGwsc2xpZGluZzohMSxzbGlkZU9mZnNldDowLHN3aXBlTGVmdDpudWxsLHN3aXBpbmc6ITEsJGxpc3Q6bnVsbCx0b3VjaE9iamVjdDp7fSx0cmFuc2Zvcm1zRW5hYmxlZDohMSx1bnNsaWNrZWQ6ITF9LGkuZXh0ZW5kKG4sbi5pbml0aWFscyksbi5hY3RpdmVCcmVha3BvaW50PW51bGwsbi5hbmltVHlwZT1udWxsLG4uYW5pbVByb3A9bnVsbCxuLmJyZWFrcG9pbnRzPVtdLG4uYnJlYWtwb2ludFNldHRpbmdzPVtdLG4uY3NzVHJhbnNpdGlvbnM9ITEsbi5mb2N1c3NlZD0hMSxuLmludGVycnVwdGVkPSExLG4uaGlkZGVuPVwiaGlkZGVuXCIsbi5wYXVzZWQ9ITAsbi5wb3NpdGlvblByb3A9bnVsbCxuLnJlc3BvbmRUbz1udWxsLG4ucm93Q291bnQ9MSxuLnNob3VsZENsaWNrPSEwLG4uJHNsaWRlcj1pKHQpLG4uJHNsaWRlc0NhY2hlPW51bGwsbi50cmFuc2Zvcm1UeXBlPW51bGwsbi50cmFuc2l0aW9uVHlwZT1udWxsLG4udmlzaWJpbGl0eUNoYW5nZT1cInZpc2liaWxpdHljaGFuZ2VcIixuLndpbmRvd1dpZHRoPTAsbi53aW5kb3dUaW1lcj1udWxsLHM9aSh0KS5kYXRhKFwic2xpY2tcIil8fHt9LG4ub3B0aW9ucz1pLmV4dGVuZCh7fSxuLmRlZmF1bHRzLG8scyksbi5jdXJyZW50U2xpZGU9bi5vcHRpb25zLmluaXRpYWxTbGlkZSxuLm9yaWdpbmFsU2V0dGluZ3M9bi5vcHRpb25zLHZvaWQgMCE9PWRvY3VtZW50Lm1vekhpZGRlbj8obi5oaWRkZW49XCJtb3pIaWRkZW5cIixuLnZpc2liaWxpdHlDaGFuZ2U9XCJtb3p2aXNpYmlsaXR5Y2hhbmdlXCIpOnZvaWQgMCE9PWRvY3VtZW50LndlYmtpdEhpZGRlbiYmKG4uaGlkZGVuPVwid2Via2l0SGlkZGVuXCIsbi52aXNpYmlsaXR5Q2hhbmdlPVwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiKSxuLmF1dG9QbGF5PWkucHJveHkobi5hdXRvUGxheSxuKSxuLmF1dG9QbGF5Q2xlYXI9aS5wcm94eShuLmF1dG9QbGF5Q2xlYXIsbiksbi5hdXRvUGxheUl0ZXJhdG9yPWkucHJveHkobi5hdXRvUGxheUl0ZXJhdG9yLG4pLG4uY2hhbmdlU2xpZGU9aS5wcm94eShuLmNoYW5nZVNsaWRlLG4pLG4uY2xpY2tIYW5kbGVyPWkucHJveHkobi5jbGlja0hhbmRsZXIsbiksbi5zZWxlY3RIYW5kbGVyPWkucHJveHkobi5zZWxlY3RIYW5kbGVyLG4pLG4uc2V0UG9zaXRpb249aS5wcm94eShuLnNldFBvc2l0aW9uLG4pLG4uc3dpcGVIYW5kbGVyPWkucHJveHkobi5zd2lwZUhhbmRsZXIsbiksbi5kcmFnSGFuZGxlcj1pLnByb3h5KG4uZHJhZ0hhbmRsZXIsbiksbi5rZXlIYW5kbGVyPWkucHJveHkobi5rZXlIYW5kbGVyLG4pLG4uaW5zdGFuY2VVaWQ9ZSsrLG4uaHRtbEV4cHI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvLG4ucmVnaXN0ZXJCcmVha3BvaW50cygpLG4uaW5pdCghMCl9fSgpKS5wcm90b3R5cGUuYWN0aXZhdGVBREE9ZnVuY3Rpb24oKXt0aGlzLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stYWN0aXZlXCIpLmF0dHIoe1wiYXJpYS1oaWRkZW5cIjpcImZhbHNlXCJ9KS5maW5kKFwiYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoe3RhYmluZGV4OlwiMFwifSl9LGUucHJvdG90eXBlLmFkZFNsaWRlPWUucHJvdG90eXBlLnNsaWNrQWRkPWZ1bmN0aW9uKGUsdCxvKXt2YXIgcz10aGlzO2lmKFwiYm9vbGVhblwiPT10eXBlb2YgdClvPXQsdD1udWxsO2Vsc2UgaWYodDwwfHx0Pj1zLnNsaWRlQ291bnQpcmV0dXJuITE7cy51bmxvYWQoKSxcIm51bWJlclwiPT10eXBlb2YgdD8wPT09dCYmMD09PXMuJHNsaWRlcy5sZW5ndGg/aShlKS5hcHBlbmRUbyhzLiRzbGlkZVRyYWNrKTpvP2koZSkuaW5zZXJ0QmVmb3JlKHMuJHNsaWRlcy5lcSh0KSk6aShlKS5pbnNlcnRBZnRlcihzLiRzbGlkZXMuZXEodCkpOiEwPT09bz9pKGUpLnByZXBlbmRUbyhzLiRzbGlkZVRyYWNrKTppKGUpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spLHMuJHNsaWRlcz1zLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkscy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLHMuJHNsaWRlVHJhY2suYXBwZW5kKHMuJHNsaWRlcykscy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oZSx0KXtpKHQpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsZSl9KSxzLiRzbGlkZXNDYWNoZT1zLiRzbGlkZXMscy5yZWluaXQoKX0sZS5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodD1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aWYoMT09PWkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJiEwPT09aS5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0JiYhMT09PWkub3B0aW9ucy52ZXJ0aWNhbCl7dmFyIGU9aS4kc2xpZGVzLmVxKGkuY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCghMCk7aS4kbGlzdC5hbmltYXRlKHtoZWlnaHQ6ZX0saS5vcHRpb25zLnNwZWVkKX19LGUucHJvdG90eXBlLmFuaW1hdGVTbGlkZT1mdW5jdGlvbihlLHQpe3ZhciBvPXt9LHM9dGhpcztzLmFuaW1hdGVIZWlnaHQoKSwhMD09PXMub3B0aW9ucy5ydGwmJiExPT09cy5vcHRpb25zLnZlcnRpY2FsJiYoZT0tZSksITE9PT1zLnRyYW5zZm9ybXNFbmFibGVkPyExPT09cy5vcHRpb25zLnZlcnRpY2FsP3MuJHNsaWRlVHJhY2suYW5pbWF0ZSh7bGVmdDplfSxzLm9wdGlvbnMuc3BlZWQscy5vcHRpb25zLmVhc2luZyx0KTpzLiRzbGlkZVRyYWNrLmFuaW1hdGUoe3RvcDplfSxzLm9wdGlvbnMuc3BlZWQscy5vcHRpb25zLmVhc2luZyx0KTohMT09PXMuY3NzVHJhbnNpdGlvbnM/KCEwPT09cy5vcHRpb25zLnJ0bCYmKHMuY3VycmVudExlZnQ9LXMuY3VycmVudExlZnQpLGkoe2FuaW1TdGFydDpzLmN1cnJlbnRMZWZ0fSkuYW5pbWF0ZSh7YW5pbVN0YXJ0OmV9LHtkdXJhdGlvbjpzLm9wdGlvbnMuc3BlZWQsZWFzaW5nOnMub3B0aW9ucy5lYXNpbmcsc3RlcDpmdW5jdGlvbihpKXtpPU1hdGguY2VpbChpKSwhMT09PXMub3B0aW9ucy52ZXJ0aWNhbD8ob1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZShcIitpK1wicHgsIDBweClcIixzLiRzbGlkZVRyYWNrLmNzcyhvKSk6KG9bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUoMHB4LFwiK2krXCJweClcIixzLiRzbGlkZVRyYWNrLmNzcyhvKSl9LGNvbXBsZXRlOmZ1bmN0aW9uKCl7dCYmdC5jYWxsKCl9fSkpOihzLmFwcGx5VHJhbnNpdGlvbigpLGU9TWF0aC5jZWlsKGUpLCExPT09cy5vcHRpb25zLnZlcnRpY2FsP29bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZChcIitlK1wicHgsIDBweCwgMHB4KVwiOm9bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZCgwcHgsXCIrZStcInB4LCAwcHgpXCIscy4kc2xpZGVUcmFjay5jc3MobyksdCYmc2V0VGltZW91dChmdW5jdGlvbigpe3MuZGlzYWJsZVRyYW5zaXRpb24oKSx0LmNhbGwoKX0scy5vcHRpb25zLnNwZWVkKSl9LGUucHJvdG90eXBlLmdldE5hdlRhcmdldD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLm9wdGlvbnMuYXNOYXZGb3I7cmV0dXJuIHQmJm51bGwhPT10JiYodD1pKHQpLm5vdChlLiRzbGlkZXIpKSx0fSxlLnByb3RvdHlwZS5hc05hdkZvcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldE5hdlRhcmdldCgpO251bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9aSh0aGlzKS5zbGljayhcImdldFNsaWNrXCIpO3QudW5zbGlja2VkfHx0LnNsaWRlSGFuZGxlcihlLCEwKX0pfSxlLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb249ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcyx0PXt9OyExPT09ZS5vcHRpb25zLmZhZGU/dFtlLnRyYW5zaXRpb25UeXBlXT1lLnRyYW5zZm9ybVR5cGUrXCIgXCIrZS5vcHRpb25zLnNwZWVkK1wibXMgXCIrZS5vcHRpb25zLmNzc0Vhc2U6dFtlLnRyYW5zaXRpb25UeXBlXT1cIm9wYWNpdHkgXCIrZS5vcHRpb25zLnNwZWVkK1wibXMgXCIrZS5vcHRpb25zLmNzc0Vhc2UsITE9PT1lLm9wdGlvbnMuZmFkZT9lLiRzbGlkZVRyYWNrLmNzcyh0KTplLiRzbGlkZXMuZXEoaSkuY3NzKHQpfSxlLnByb3RvdHlwZS5hdXRvUGxheT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheUNsZWFyKCksaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLmF1dG9QbGF5VGltZXI9c2V0SW50ZXJ2YWwoaS5hdXRvUGxheUl0ZXJhdG9yLGkub3B0aW9ucy5hdXRvcGxheVNwZWVkKSl9LGUucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXI9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuYXV0b1BsYXlUaW1lciYmY2xlYXJJbnRlcnZhbChpLmF1dG9QbGF5VGltZXIpfSxlLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxlPWkuY3VycmVudFNsaWRlK2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtpLnBhdXNlZHx8aS5pbnRlcnJ1cHRlZHx8aS5mb2N1c3NlZHx8KCExPT09aS5vcHRpb25zLmluZmluaXRlJiYoMT09PWkuZGlyZWN0aW9uJiZpLmN1cnJlbnRTbGlkZSsxPT09aS5zbGlkZUNvdW50LTE/aS5kaXJlY3Rpb249MDowPT09aS5kaXJlY3Rpb24mJihlPWkuY3VycmVudFNsaWRlLWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxpLmN1cnJlbnRTbGlkZS0xPT0wJiYoaS5kaXJlY3Rpb249MSkpKSxpLnNsaWRlSGFuZGxlcihlKSl9LGUucHJvdG90eXBlLmJ1aWxkQXJyb3dzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczshMD09PWUub3B0aW9ucy5hcnJvd3MmJihlLiRwcmV2QXJyb3c9aShlLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcyhcInNsaWNrLWFycm93XCIpLGUuJG5leHRBcnJvdz1pKGUub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKFwic2xpY2stYXJyb3dcIiksZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3c/KGUuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gdGFiaW5kZXhcIiksZS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKSxlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLnByZXZBcnJvdykmJmUuJHByZXZBcnJvdy5wcmVwZW5kVG8oZS5vcHRpb25zLmFwcGVuZEFycm93cyksZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5uZXh0QXJyb3cpJiZlLiRuZXh0QXJyb3cuYXBwZW5kVG8oZS5vcHRpb25zLmFwcGVuZEFycm93cyksITAhPT1lLm9wdGlvbnMuaW5maW5pdGUmJmUuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpKTplLiRwcmV2QXJyb3cuYWRkKGUuJG5leHRBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1oaWRkZW5cIikuYXR0cih7XCJhcmlhLWRpc2FibGVkXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCItMVwifSkpfSxlLnByb3RvdHlwZS5idWlsZERvdHM9ZnVuY3Rpb24oKXt2YXIgZSx0LG89dGhpcztpZighMD09PW8ub3B0aW9ucy5kb3RzKXtmb3Ioby4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stZG90dGVkXCIpLHQ9aShcIjx1bCAvPlwiKS5hZGRDbGFzcyhvLm9wdGlvbnMuZG90c0NsYXNzKSxlPTA7ZTw9by5nZXREb3RDb3VudCgpO2UrPTEpdC5hcHBlbmQoaShcIjxsaSAvPlwiKS5hcHBlbmQoby5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsbyxlKSkpO28uJGRvdHM9dC5hcHBlbmRUbyhvLm9wdGlvbnMuYXBwZW5kRG90cyksby4kZG90cy5maW5kKFwibGlcIikuZmlyc3QoKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKX19LGUucHJvdG90eXBlLmJ1aWxkT3V0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXM9ZS4kc2xpZGVyLmNoaWxkcmVuKGUub3B0aW9ucy5zbGlkZStcIjpub3QoLnNsaWNrLWNsb25lZClcIikuYWRkQ2xhc3MoXCJzbGljay1zbGlkZVwiKSxlLnNsaWRlQ291bnQ9ZS4kc2xpZGVzLmxlbmd0aCxlLiRzbGlkZXMuZWFjaChmdW5jdGlvbihlLHQpe2kodCkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIixlKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIsaSh0KS5hdHRyKFwic3R5bGVcIil8fFwiXCIpfSksZS4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stc2xpZGVyXCIpLGUuJHNsaWRlVHJhY2s9MD09PWUuc2xpZGVDb3VudD9pKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oZS4kc2xpZGVyKTplLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpLGUuJGxpc3Q9ZS4kc2xpZGVUcmFjay53cmFwKCc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKSxlLiRzbGlkZVRyYWNrLmNzcyhcIm9wYWNpdHlcIiwwKSwhMCE9PWUub3B0aW9ucy5jZW50ZXJNb2RlJiYhMCE9PWUub3B0aW9ucy5zd2lwZVRvU2xpZGV8fChlLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw9MSksaShcImltZ1tkYXRhLWxhenldXCIsZS4kc2xpZGVyKS5ub3QoXCJbc3JjXVwiKS5hZGRDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksZS5zZXR1cEluZmluaXRlKCksZS5idWlsZEFycm93cygpLGUuYnVpbGREb3RzKCksZS51cGRhdGVEb3RzKCksZS5zZXRTbGlkZUNsYXNzZXMoXCJudW1iZXJcIj09dHlwZW9mIGUuY3VycmVudFNsaWRlP2UuY3VycmVudFNsaWRlOjApLCEwPT09ZS5vcHRpb25zLmRyYWdnYWJsZSYmZS4kbGlzdC5hZGRDbGFzcyhcImRyYWdnYWJsZVwiKX0sZS5wcm90b3R5cGUuYnVpbGRSb3dzPWZ1bmN0aW9uKCl7dmFyIGksZSx0LG8scyxuLHIsbD10aGlzO2lmKG89ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG49bC4kc2xpZGVyLmNoaWxkcmVuKCksbC5vcHRpb25zLnJvd3M+MSl7Zm9yKHI9bC5vcHRpb25zLnNsaWRlc1BlclJvdypsLm9wdGlvbnMucm93cyxzPU1hdGguY2VpbChuLmxlbmd0aC9yKSxpPTA7aTxzO2krKyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoZT0wO2U8bC5vcHRpb25zLnJvd3M7ZSsrKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Zvcih0PTA7dDxsLm9wdGlvbnMuc2xpZGVzUGVyUm93O3QrKyl7dmFyIGM9aSpyKyhlKmwub3B0aW9ucy5zbGlkZXNQZXJSb3crdCk7bi5nZXQoYykmJmEuYXBwZW5kQ2hpbGQobi5nZXQoYykpfWQuYXBwZW5kQ2hpbGQoYSl9by5hcHBlbmRDaGlsZChkKX1sLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobyksbC4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNzcyh7d2lkdGg6MTAwL2wub3B0aW9ucy5zbGlkZXNQZXJSb3crXCIlXCIsZGlzcGxheTpcImlubGluZS1ibG9ja1wifSl9fSxlLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmU9ZnVuY3Rpb24oZSx0KXt2YXIgbyxzLG4scj10aGlzLGw9ITEsZD1yLiRzbGlkZXIud2lkdGgoKSxhPXdpbmRvdy5pbm5lcldpZHRofHxpKHdpbmRvdykud2lkdGgoKTtpZihcIndpbmRvd1wiPT09ci5yZXNwb25kVG8/bj1hOlwic2xpZGVyXCI9PT1yLnJlc3BvbmRUbz9uPWQ6XCJtaW5cIj09PXIucmVzcG9uZFRvJiYobj1NYXRoLm1pbihhLGQpKSxyLm9wdGlvbnMucmVzcG9uc2l2ZSYmci5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoJiZudWxsIT09ci5vcHRpb25zLnJlc3BvbnNpdmUpe3M9bnVsbDtmb3IobyBpbiByLmJyZWFrcG9pbnRzKXIuYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkobykmJighMT09PXIub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdD9uPHIuYnJlYWtwb2ludHNbb10mJihzPXIuYnJlYWtwb2ludHNbb10pOm4+ci5icmVha3BvaW50c1tvXSYmKHM9ci5icmVha3BvaW50c1tvXSkpO251bGwhPT1zP251bGwhPT1yLmFjdGl2ZUJyZWFrcG9pbnQ/KHMhPT1yLmFjdGl2ZUJyZWFrcG9pbnR8fHQpJiYoci5hY3RpdmVCcmVha3BvaW50PXMsXCJ1bnNsaWNrXCI9PT1yLmJyZWFrcG9pbnRTZXR0aW5nc1tzXT9yLnVuc2xpY2socyk6KHIub3B0aW9ucz1pLmV4dGVuZCh7fSxyLm9yaWdpbmFsU2V0dGluZ3Msci5icmVha3BvaW50U2V0dGluZ3Nbc10pLCEwPT09ZSYmKHIuY3VycmVudFNsaWRlPXIub3B0aW9ucy5pbml0aWFsU2xpZGUpLHIucmVmcmVzaChlKSksbD1zKTooci5hY3RpdmVCcmVha3BvaW50PXMsXCJ1bnNsaWNrXCI9PT1yLmJyZWFrcG9pbnRTZXR0aW5nc1tzXT9yLnVuc2xpY2socyk6KHIub3B0aW9ucz1pLmV4dGVuZCh7fSxyLm9yaWdpbmFsU2V0dGluZ3Msci5icmVha3BvaW50U2V0dGluZ3Nbc10pLCEwPT09ZSYmKHIuY3VycmVudFNsaWRlPXIub3B0aW9ucy5pbml0aWFsU2xpZGUpLHIucmVmcmVzaChlKSksbD1zKTpudWxsIT09ci5hY3RpdmVCcmVha3BvaW50JiYoci5hY3RpdmVCcmVha3BvaW50PW51bGwsci5vcHRpb25zPXIub3JpZ2luYWxTZXR0aW5ncywhMD09PWUmJihyLmN1cnJlbnRTbGlkZT1yLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxyLnJlZnJlc2goZSksbD1zKSxlfHwhMT09PWx8fHIuJHNsaWRlci50cmlnZ2VyKFwiYnJlYWtwb2ludFwiLFtyLGxdKX19LGUucHJvdG90eXBlLmNoYW5nZVNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIG8scyxuLHI9dGhpcyxsPWkoZS5jdXJyZW50VGFyZ2V0KTtzd2l0Y2gobC5pcyhcImFcIikmJmUucHJldmVudERlZmF1bHQoKSxsLmlzKFwibGlcIil8fChsPWwuY2xvc2VzdChcImxpXCIpKSxuPXIuc2xpZGVDb3VudCVyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPTAsbz1uPzA6KHIuc2xpZGVDb3VudC1yLmN1cnJlbnRTbGlkZSklci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGUuZGF0YS5tZXNzYWdlKXtjYXNlXCJwcmV2aW91c1wiOnM9MD09PW8/ci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOnIub3B0aW9ucy5zbGlkZXNUb1Nob3ctbyxyLnNsaWRlQ291bnQ+ci5vcHRpb25zLnNsaWRlc1RvU2hvdyYmci5zbGlkZUhhbmRsZXIoci5jdXJyZW50U2xpZGUtcywhMSx0KTticmVhaztjYXNlXCJuZXh0XCI6cz0wPT09bz9yLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6byxyLnNsaWRlQ291bnQ+ci5vcHRpb25zLnNsaWRlc1RvU2hvdyYmci5zbGlkZUhhbmRsZXIoci5jdXJyZW50U2xpZGUrcywhMSx0KTticmVhaztjYXNlXCJpbmRleFwiOnZhciBkPTA9PT1lLmRhdGEuaW5kZXg/MDplLmRhdGEuaW5kZXh8fGwuaW5kZXgoKSpyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7ci5zbGlkZUhhbmRsZXIoci5jaGVja05hdmlnYWJsZShkKSwhMSx0KSxsLmNoaWxkcmVuKCkudHJpZ2dlcihcImZvY3VzXCIpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufX0sZS5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGU9ZnVuY3Rpb24oaSl7dmFyIGUsdDtpZihlPXRoaXMuZ2V0TmF2aWdhYmxlSW5kZXhlcygpLHQ9MCxpPmVbZS5sZW5ndGgtMV0paT1lW2UubGVuZ3RoLTFdO2Vsc2UgZm9yKHZhciBvIGluIGUpe2lmKGk8ZVtvXSl7aT10O2JyZWFrfXQ9ZVtvXX1yZXR1cm4gaX0sZS5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5vcHRpb25zLmRvdHMmJm51bGwhPT1lLiRkb3RzJiYoaShcImxpXCIsZS4kZG90cykub2ZmKFwiY2xpY2suc2xpY2tcIixlLmNoYW5nZVNsaWRlKS5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSkub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpLCEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJmUuJGRvdHMub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlcikpLGUuJHNsaWRlci5vZmYoXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIpLCEwPT09ZS5vcHRpb25zLmFycm93cyYmZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihlLiRwcmV2QXJyb3cmJmUuJHByZXZBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiLGUuY2hhbmdlU2xpZGUpLGUuJG5leHRBcnJvdyYmZS4kbmV4dEFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jaGFuZ2VTbGlkZSksITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmKGUuJHByZXZBcnJvdyYmZS4kcHJldkFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLGUuJG5leHRBcnJvdyYmZS4kbmV4dEFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpKSksZS4kbGlzdC5vZmYoXCJ0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcInRvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2tcIixlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vZmYoXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIsZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub2ZmKFwidG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGkoZG9jdW1lbnQpLm9mZihlLnZpc2liaWxpdHlDaGFuZ2UsZS52aXNpYmlsaXR5KSxlLmNsZWFuVXBTbGlkZUV2ZW50cygpLCEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJmUuJGxpc3Qub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlciksITA9PT1lLm9wdGlvbnMuZm9jdXNPblNlbGVjdCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxpKHdpbmRvdykub2ZmKFwib3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLm9yaWVudGF0aW9uQ2hhbmdlKSxpKHdpbmRvdykub2ZmKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5yZXNpemUpLGkoXCJbZHJhZ2dhYmxlIT10cnVlXVwiLGUuJHNsaWRlVHJhY2spLm9mZihcImRyYWdzdGFydFwiLGUucHJldmVudERlZmF1bHQpLGkod2luZG93KS5vZmYoXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5zZXRQb3NpdGlvbil9LGUucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS4kbGlzdC5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSksZS4kbGlzdC5vZmYoXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSl9LGUucHJvdG90eXBlLmNsZWFuVXBSb3dzPWZ1bmN0aW9uKCl7dmFyIGksZT10aGlzO2Uub3B0aW9ucy5yb3dzPjEmJigoaT1lLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksZS4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKGkpKX0sZS5wcm90b3R5cGUuY2xpY2tIYW5kbGVyPWZ1bmN0aW9uKGkpeyExPT09dGhpcy5zaG91bGRDbGljayYmKGkuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksaS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCkpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5hdXRvUGxheUNsZWFyKCksdC50b3VjaE9iamVjdD17fSx0LmNsZWFuVXBFdmVudHMoKSxpKFwiLnNsaWNrLWNsb25lZFwiLHQuJHNsaWRlcikuZGV0YWNoKCksdC4kZG90cyYmdC4kZG90cy5yZW1vdmUoKSx0LiRwcmV2QXJyb3cmJnQuJHByZXZBcnJvdy5sZW5ndGgmJih0LiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLHQuaHRtbEV4cHIudGVzdCh0Lm9wdGlvbnMucHJldkFycm93KSYmdC4kcHJldkFycm93LnJlbW92ZSgpKSx0LiRuZXh0QXJyb3cmJnQuJG5leHRBcnJvdy5sZW5ndGgmJih0LiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLHQuaHRtbEV4cHIudGVzdCh0Lm9wdGlvbnMubmV4dEFycm93KSYmdC4kbmV4dEFycm93LnJlbW92ZSgpKSx0LiRzbGlkZXMmJih0LiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW5cIikucmVtb3ZlQXR0cihcImRhdGEtc2xpY2staW5kZXhcIikuZWFjaChmdW5jdGlvbigpe2kodGhpcykuYXR0cihcInN0eWxlXCIsaSh0aGlzKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIpKX0pLHQuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSx0LiRzbGlkZVRyYWNrLmRldGFjaCgpLHQuJGxpc3QuZGV0YWNoKCksdC4kc2xpZGVyLmFwcGVuZCh0LiRzbGlkZXMpKSx0LmNsZWFuVXBSb3dzKCksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGVyXCIpLHQuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpLHQuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWRvdHRlZFwiKSx0LnVuc2xpY2tlZD0hMCxlfHx0LiRzbGlkZXIudHJpZ2dlcihcImRlc3Ryb3lcIixbdF0pfSxlLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbj1mdW5jdGlvbihpKXt2YXIgZT10aGlzLHQ9e307dFtlLnRyYW5zaXRpb25UeXBlXT1cIlwiLCExPT09ZS5vcHRpb25zLmZhZGU/ZS4kc2xpZGVUcmFjay5jc3ModCk6ZS4kc2xpZGVzLmVxKGkpLmNzcyh0KX0sZS5wcm90b3R5cGUuZmFkZVNsaWRlPWZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpczshMT09PXQuY3NzVHJhbnNpdGlvbnM/KHQuJHNsaWRlcy5lcShpKS5jc3Moe3pJbmRleDp0Lm9wdGlvbnMuekluZGV4fSksdC4kc2xpZGVzLmVxKGkpLmFuaW1hdGUoe29wYWNpdHk6MX0sdC5vcHRpb25zLnNwZWVkLHQub3B0aW9ucy5lYXNpbmcsZSkpOih0LmFwcGx5VHJhbnNpdGlvbihpKSx0LiRzbGlkZXMuZXEoaSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OnQub3B0aW9ucy56SW5kZXh9KSxlJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5kaXNhYmxlVHJhbnNpdGlvbihpKSxlLmNhbGwoKX0sdC5vcHRpb25zLnNwZWVkKSl9LGUucHJvdG90eXBlLmZhZGVTbGlkZU91dD1mdW5jdGlvbihpKXt2YXIgZT10aGlzOyExPT09ZS5jc3NUcmFuc2l0aW9ucz9lLiRzbGlkZXMuZXEoaSkuYW5pbWF0ZSh7b3BhY2l0eTowLHpJbmRleDplLm9wdGlvbnMuekluZGV4LTJ9LGUub3B0aW9ucy5zcGVlZCxlLm9wdGlvbnMuZWFzaW5nKTooZS5hcHBseVRyYW5zaXRpb24oaSksZS4kc2xpZGVzLmVxKGkpLmNzcyh7b3BhY2l0eTowLHpJbmRleDplLm9wdGlvbnMuekluZGV4LTJ9KSl9LGUucHJvdG90eXBlLmZpbHRlclNsaWRlcz1lLnByb3RvdHlwZS5zbGlja0ZpbHRlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO251bGwhPT1pJiYoZS4kc2xpZGVzQ2FjaGU9ZS4kc2xpZGVzLGUudW5sb2FkKCksZS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGUuJHNsaWRlc0NhY2hlLmZpbHRlcihpKS5hcHBlbmRUbyhlLiRzbGlkZVRyYWNrKSxlLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUuZm9jdXNIYW5kbGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXIub2ZmKFwiZm9jdXMuc2xpY2sgYmx1ci5zbGlja1wiKS5vbihcImZvY3VzLnNsaWNrIGJsdXIuc2xpY2tcIixcIipcIixmdW5jdGlvbih0KXt0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO3ZhciBvPWkodGhpcyk7c2V0VGltZW91dChmdW5jdGlvbigpe2Uub3B0aW9ucy5wYXVzZU9uRm9jdXMmJihlLmZvY3Vzc2VkPW8uaXMoXCI6Zm9jdXNcIiksZS5hdXRvUGxheSgpKX0sMCl9KX0sZS5wcm90b3R5cGUuZ2V0Q3VycmVudD1lLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRTbGlkZX0sZS5wcm90b3R5cGUuZ2V0RG90Q291bnQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9MCx0PTAsbz0wO2lmKCEwPT09aS5vcHRpb25zLmluZmluaXRlKWlmKGkuc2xpZGVDb3VudDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdykrK287ZWxzZSBmb3IoO2U8aS5zbGlkZUNvdW50OykrK28sZT10K2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCx0Kz1pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWkub3B0aW9ucy5zbGlkZXNUb1Nob3c/aS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmkub3B0aW9ucy5zbGlkZXNUb1Nob3c7ZWxzZSBpZighMD09PWkub3B0aW9ucy5jZW50ZXJNb2RlKW89aS5zbGlkZUNvdW50O2Vsc2UgaWYoaS5vcHRpb25zLmFzTmF2Rm9yKWZvcig7ZTxpLnNsaWRlQ291bnQ7KSsrbyxlPXQraS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLHQrPWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdz9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6aS5vcHRpb25zLnNsaWRlc1RvU2hvdztlbHNlIG89MStNYXRoLmNlaWwoKGkuc2xpZGVDb3VudC1pLm9wdGlvbnMuc2xpZGVzVG9TaG93KS9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO3JldHVybiBvLTF9LGUucHJvdG90eXBlLmdldExlZnQ9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvLHMsbj10aGlzLHI9MDtyZXR1cm4gbi5zbGlkZU9mZnNldD0wLHQ9bi4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApLCEwPT09bi5vcHRpb25zLmluZmluaXRlPyhuLnNsaWRlQ291bnQ+bi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKG4uc2xpZGVPZmZzZXQ9bi5zbGlkZVdpZHRoKm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cqLTEscz0tMSwhMD09PW4ub3B0aW9ucy52ZXJ0aWNhbCYmITA9PT1uLm9wdGlvbnMuY2VudGVyTW9kZSYmKDI9PT1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P3M9LTEuNToxPT09bi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKHM9LTIpKSxyPXQqbi5vcHRpb25zLnNsaWRlc1RvU2hvdypzKSxuLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT0wJiZpK24ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD5uLnNsaWRlQ291bnQmJm4uc2xpZGVDb3VudD5uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaT5uLnNsaWRlQ291bnQ/KG4uc2xpZGVPZmZzZXQ9KG4ub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGktbi5zbGlkZUNvdW50KSkqbi5zbGlkZVdpZHRoKi0xLHI9KG4ub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGktbi5zbGlkZUNvdW50KSkqdCotMSk6KG4uc2xpZGVPZmZzZXQ9bi5zbGlkZUNvdW50JW4ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCpuLnNsaWRlV2lkdGgqLTEscj1uLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKnQqLTEpKSk6aStuLm9wdGlvbnMuc2xpZGVzVG9TaG93Pm4uc2xpZGVDb3VudCYmKG4uc2xpZGVPZmZzZXQ9KGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdy1uLnNsaWRlQ291bnQpKm4uc2xpZGVXaWR0aCxyPShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3ctbi5zbGlkZUNvdW50KSp0KSxuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihuLnNsaWRlT2Zmc2V0PTAscj0wKSwhMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiZuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/bi5zbGlkZU9mZnNldD1uLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihuLm9wdGlvbnMuc2xpZGVzVG9TaG93KS8yLW4uc2xpZGVXaWR0aCpuLnNsaWRlQ291bnQvMjohMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiYhMD09PW4ub3B0aW9ucy5pbmZpbml0ZT9uLnNsaWRlT2Zmc2V0Kz1uLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihuLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpLW4uc2xpZGVXaWR0aDohMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiYobi5zbGlkZU9mZnNldD0wLG4uc2xpZGVPZmZzZXQrPW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMikpLGU9ITE9PT1uLm9wdGlvbnMudmVydGljYWw/aSpuLnNsaWRlV2lkdGgqLTErbi5zbGlkZU9mZnNldDppKnQqLTErciwhMD09PW4ub3B0aW9ucy52YXJpYWJsZVdpZHRoJiYobz1uLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3d8fCExPT09bi5vcHRpb25zLmluZmluaXRlP24uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaSk6bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGU9ITA9PT1uLm9wdGlvbnMucnRsP29bMF0/LTEqKG4uJHNsaWRlVHJhY2sud2lkdGgoKS1vWzBdLm9mZnNldExlZnQtby53aWR0aCgpKTowOm9bMF0/LTEqb1swXS5vZmZzZXRMZWZ0OjAsITA9PT1uLm9wdGlvbnMuY2VudGVyTW9kZSYmKG89bi5zbGlkZUNvdW50PD1uLm9wdGlvbnMuc2xpZGVzVG9TaG93fHwhMT09PW4ub3B0aW9ucy5pbmZpbml0ZT9uLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGkpOm4uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaStuLm9wdGlvbnMuc2xpZGVzVG9TaG93KzEpLGU9ITA9PT1uLm9wdGlvbnMucnRsP29bMF0/LTEqKG4uJHNsaWRlVHJhY2sud2lkdGgoKS1vWzBdLm9mZnNldExlZnQtby53aWR0aCgpKTowOm9bMF0/LTEqb1swXS5vZmZzZXRMZWZ0OjAsZSs9KG4uJGxpc3Qud2lkdGgoKS1vLm91dGVyV2lkdGgoKSkvMikpLGV9LGUucHJvdG90eXBlLmdldE9wdGlvbj1lLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbj1mdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5vcHRpb25zW2ldfSxlLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzPWZ1bmN0aW9uKCl7dmFyIGksZT10aGlzLHQ9MCxvPTAscz1bXTtmb3IoITE9PT1lLm9wdGlvbnMuaW5maW5pdGU/aT1lLnNsaWRlQ291bnQ6KHQ9LTEqZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLG89LTEqZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGk9MiplLnNsaWRlQ291bnQpO3Q8aTspcy5wdXNoKHQpLHQ9bytlLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsbys9ZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1lLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Uub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDplLm9wdGlvbnMuc2xpZGVzVG9TaG93O3JldHVybiBzfSxlLnByb3RvdHlwZS5nZXRTbGljaz1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50PWZ1bmN0aW9uKCl7dmFyIGUsdCxvPXRoaXM7cmV0dXJuIHQ9ITA9PT1vLm9wdGlvbnMuY2VudGVyTW9kZT9vLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihvLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpOjAsITA9PT1vLm9wdGlvbnMuc3dpcGVUb1NsaWRlPyhvLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuZWFjaChmdW5jdGlvbihzLG4pe2lmKG4ub2Zmc2V0TGVmdC10K2kobikub3V0ZXJXaWR0aCgpLzI+LTEqby5zd2lwZUxlZnQpcmV0dXJuIGU9biwhMX0pLE1hdGguYWJzKGkoZSkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIiktby5jdXJyZW50U2xpZGUpfHwxKTpvLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGx9LGUucHJvdG90eXBlLmdvVG89ZS5wcm90b3R5cGUuc2xpY2tHb1RvPWZ1bmN0aW9uKGksZSl7dGhpcy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6cGFyc2VJbnQoaSl9fSxlKX0sZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2kodC4kc2xpZGVyKS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpfHwoaSh0LiRzbGlkZXIpLmFkZENsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIiksdC5idWlsZFJvd3MoKSx0LmJ1aWxkT3V0KCksdC5zZXRQcm9wcygpLHQuc3RhcnRMb2FkKCksdC5sb2FkU2xpZGVyKCksdC5pbml0aWFsaXplRXZlbnRzKCksdC51cGRhdGVBcnJvd3MoKSx0LnVwZGF0ZURvdHMoKSx0LmNoZWNrUmVzcG9uc2l2ZSghMCksdC5mb2N1c0hhbmRsZXIoKSksZSYmdC4kc2xpZGVyLnRyaWdnZXIoXCJpbml0XCIsW3RdKSwhMD09PXQub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZ0LmluaXRBREEoKSx0Lm9wdGlvbnMuYXV0b3BsYXkmJih0LnBhdXNlZD0hMSx0LmF1dG9QbGF5KCkpfSxlLnByb3RvdHlwZS5pbml0QURBPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PU1hdGguY2VpbChlLnNsaWRlQ291bnQvZS5vcHRpb25zLnNsaWRlc1RvU2hvdyksbz1lLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24oaSl7cmV0dXJuIGk+PTAmJmk8ZS5zbGlkZUNvdW50fSk7ZS4kc2xpZGVzLmFkZChlLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpKS5hdHRyKHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCItMVwifSkuZmluZChcImEsIGlucHV0LCBidXR0b24sIHNlbGVjdFwiKS5hdHRyKHt0YWJpbmRleDpcIi0xXCJ9KSxudWxsIT09ZS4kZG90cyYmKGUuJHNsaWRlcy5ub3QoZS4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKSkuZWFjaChmdW5jdGlvbih0KXt2YXIgcz1vLmluZGV4T2YodCk7aSh0aGlzKS5hdHRyKHtyb2xlOlwidGFicGFuZWxcIixpZDpcInNsaWNrLXNsaWRlXCIrZS5pbnN0YW5jZVVpZCt0LHRhYmluZGV4Oi0xfSksLTEhPT1zJiZpKHRoaXMpLmF0dHIoe1wiYXJpYS1kZXNjcmliZWRieVwiOlwic2xpY2stc2xpZGUtY29udHJvbFwiK2UuaW5zdGFuY2VVaWQrc30pfSksZS4kZG90cy5hdHRyKFwicm9sZVwiLFwidGFibGlzdFwiKS5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbihzKXt2YXIgbj1vW3NdO2kodGhpcykuYXR0cih7cm9sZTpcInByZXNlbnRhdGlvblwifSksaSh0aGlzKS5maW5kKFwiYnV0dG9uXCIpLmZpcnN0KCkuYXR0cih7cm9sZTpcInRhYlwiLGlkOlwic2xpY2stc2xpZGUtY29udHJvbFwiK2UuaW5zdGFuY2VVaWQrcyxcImFyaWEtY29udHJvbHNcIjpcInNsaWNrLXNsaWRlXCIrZS5pbnN0YW5jZVVpZCtuLFwiYXJpYS1sYWJlbFwiOnMrMStcIiBvZiBcIit0LFwiYXJpYS1zZWxlY3RlZFwiOm51bGwsdGFiaW5kZXg6XCItMVwifSl9KS5lcShlLmN1cnJlbnRTbGlkZSkuZmluZChcImJ1dHRvblwiKS5hdHRyKHtcImFyaWEtc2VsZWN0ZWRcIjpcInRydWVcIix0YWJpbmRleDpcIjBcIn0pLmVuZCgpKTtmb3IodmFyIHM9ZS5jdXJyZW50U2xpZGUsbj1zK2Uub3B0aW9ucy5zbGlkZXNUb1Nob3c7czxuO3MrKyllLiRzbGlkZXMuZXEocykuYXR0cihcInRhYmluZGV4XCIsMCk7ZS5hY3RpdmF0ZUFEQSgpfSxlLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzOyEwPT09aS5vcHRpb25zLmFycm93cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIikub24oXCJjbGljay5zbGlja1wiLHttZXNzYWdlOlwicHJldmlvdXNcIn0saS5jaGFuZ2VTbGlkZSksaS4kbmV4dEFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcIm5leHRcIn0saS5jaGFuZ2VTbGlkZSksITA9PT1pLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmKGkuJHByZXZBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIixpLmtleUhhbmRsZXIpLGkuJG5leHRBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIixpLmtleUhhbmRsZXIpKSl9LGUucHJvdG90eXBlLmluaXREb3RFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzOyEwPT09ZS5vcHRpb25zLmRvdHMmJihpKFwibGlcIixlLiRkb3RzKS5vbihcImNsaWNrLnNsaWNrXCIse21lc3NhZ2U6XCJpbmRleFwifSxlLmNoYW5nZVNsaWRlKSwhMD09PWUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZlLiRkb3RzLm9uKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlcikpLCEwPT09ZS5vcHRpb25zLmRvdHMmJiEwPT09ZS5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXImJmkoXCJsaVwiLGUuJGRvdHMpLm9uKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLm9uKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpfSxlLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Uub3B0aW9ucy5wYXVzZU9uSG92ZXImJihlLiRsaXN0Lm9uKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLGUuJGxpc3Qub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSkpfSxlLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLmluaXRBcnJvd0V2ZW50cygpLGUuaW5pdERvdEV2ZW50cygpLGUuaW5pdFNsaWRlRXZlbnRzKCksZS4kbGlzdC5vbihcInRvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrXCIse2FjdGlvbjpcInN0YXJ0XCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwidG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGlja1wiLHthY3Rpb246XCJtb3ZlXCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwidG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGlja1wiLHthY3Rpb246XCJlbmRcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vbihcImNsaWNrLnNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGkoZG9jdW1lbnQpLm9uKGUudmlzaWJpbGl0eUNoYW5nZSxpLnByb3h5KGUudmlzaWJpbGl0eSxlKSksITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmZS4kbGlzdC5vbihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLCEwPT09ZS5vcHRpb25zLmZvY3VzT25TZWxlY3QmJmkoZS4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxpKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay1cIitlLmluc3RhbmNlVWlkLGkucHJveHkoZS5vcmllbnRhdGlvbkNoYW5nZSxlKSksaSh3aW5kb3cpLm9uKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsaS5wcm94eShlLnJlc2l6ZSxlKSksaShcIltkcmFnZ2FibGUhPXRydWVdXCIsZS4kc2xpZGVUcmFjaykub24oXCJkcmFnc3RhcnRcIixlLnByZXZlbnREZWZhdWx0KSxpKHdpbmRvdykub24oXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5zZXRQb3NpdGlvbiksaShlLnNldFBvc2l0aW9uKX0sZS5wcm90b3R5cGUuaW5pdFVJPWZ1bmN0aW9uKCl7dmFyIGk9dGhpczshMD09PWkub3B0aW9ucy5hcnJvd3MmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaS4kcHJldkFycm93LnNob3coKSxpLiRuZXh0QXJyb3cuc2hvdygpKSwhMD09PWkub3B0aW9ucy5kb3RzJiZpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmaS4kZG90cy5zaG93KCl9LGUucHJvdG90eXBlLmtleUhhbmRsZXI9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztpLnRhcmdldC50YWdOYW1lLm1hdGNoKFwiVEVYVEFSRUF8SU5QVVR8U0VMRUNUXCIpfHwoMzc9PT1pLmtleUNvZGUmJiEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHk/ZS5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTohMD09PWUub3B0aW9ucy5ydGw/XCJuZXh0XCI6XCJwcmV2aW91c1wifX0pOjM5PT09aS5rZXlDb2RlJiYhMD09PWUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZlLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOiEwPT09ZS5vcHRpb25zLnJ0bD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9fSkpfSxlLnByb3RvdHlwZS5sYXp5TG9hZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7aShcImltZ1tkYXRhLWxhenldXCIsZSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPWkodGhpcyksdD1pKHRoaXMpLmF0dHIoXCJkYXRhLWxhenlcIiksbz1pKHRoaXMpLmF0dHIoXCJkYXRhLXNyY3NldFwiKSxzPWkodGhpcykuYXR0cihcImRhdGEtc2l6ZXNcIil8fG4uJHNsaWRlci5hdHRyKFwiZGF0YS1zaXplc1wiKSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7ci5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmFuaW1hdGUoe29wYWNpdHk6MH0sMTAwLGZ1bmN0aW9uKCl7byYmKGUuYXR0cihcInNyY3NldFwiLG8pLHMmJmUuYXR0cihcInNpemVzXCIscykpLGUuYXR0cihcInNyY1wiLHQpLmFuaW1hdGUoe29wYWNpdHk6MX0sMjAwLGZ1bmN0aW9uKCl7ZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXNcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSksbi4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZGVkXCIsW24sZSx0XSl9KX0sci5vbmVycm9yPWZ1bmN0aW9uKCl7ZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLG4uJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtuLGUsdF0pfSxyLnNyYz10fSl9dmFyIHQsbyxzLG49dGhpcztpZighMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlPyEwPT09bi5vcHRpb25zLmluZmluaXRlP3M9KG89bi5jdXJyZW50U2xpZGUrKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdysyOihvPU1hdGgubWF4KDAsbi5jdXJyZW50U2xpZGUtKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSkscz1uLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIrMSsyK24uY3VycmVudFNsaWRlKToobz1uLm9wdGlvbnMuaW5maW5pdGU/bi5vcHRpb25zLnNsaWRlc1RvU2hvdytuLmN1cnJlbnRTbGlkZTpuLmN1cnJlbnRTbGlkZSxzPU1hdGguY2VpbChvK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLCEwPT09bi5vcHRpb25zLmZhZGUmJihvPjAmJm8tLSxzPD1uLnNsaWRlQ291bnQmJnMrKykpLHQ9bi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuc2xpY2UobyxzKSxcImFudGljaXBhdGVkXCI9PT1uLm9wdGlvbnMubGF6eUxvYWQpZm9yKHZhciByPW8tMSxsPXMsZD1uLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKSxhPTA7YTxuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7YSsrKXI8MCYmKHI9bi5zbGlkZUNvdW50LTEpLHQ9KHQ9dC5hZGQoZC5lcShyKSkpLmFkZChkLmVxKGwpKSxyLS0sbCsrO2UodCksbi5zbGlkZUNvdW50PD1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Uobi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikpOm4uY3VycmVudFNsaWRlPj1uLnNsaWRlQ291bnQtbi5vcHRpb25zLnNsaWRlc1RvU2hvdz9lKG4uJHNsaWRlci5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5zbGljZSgwLG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKTowPT09bi5jdXJyZW50U2xpZGUmJmUobi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLnNsaWNlKC0xKm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKX0sZS5wcm90b3R5cGUubG9hZFNsaWRlcj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5zZXRQb3NpdGlvbigpLGkuJHNsaWRlVHJhY2suY3NzKHtvcGFjaXR5OjF9KSxpLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLGkuaW5pdFVJKCksXCJwcm9ncmVzc2l2ZVwiPT09aS5vcHRpb25zLmxhenlMb2FkJiZpLnByb2dyZXNzaXZlTGF6eUxvYWQoKX0sZS5wcm90b3R5cGUubmV4dD1lLnByb3RvdHlwZS5zbGlja05leHQ9ZnVuY3Rpb24oKXt0aGlzLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwibmV4dFwifX0pfSxlLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5jaGVja1Jlc3BvbnNpdmUoKSxpLnNldFBvc2l0aW9uKCl9LGUucHJvdG90eXBlLnBhdXNlPWUucHJvdG90eXBlLnNsaWNrUGF1c2U9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuYXV0b1BsYXlDbGVhcigpLGkucGF1c2VkPSEwfSxlLnByb3RvdHlwZS5wbGF5PWUucHJvdG90eXBlLnNsaWNrUGxheT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheSgpLGkub3B0aW9ucy5hdXRvcGxheT0hMCxpLnBhdXNlZD0hMSxpLmZvY3Vzc2VkPSExLGkuaW50ZXJydXB0ZWQ9ITF9LGUucHJvdG90eXBlLnBvc3RTbGlkZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QudW5zbGlja2VkfHwodC4kc2xpZGVyLnRyaWdnZXIoXCJhZnRlckNoYW5nZVwiLFt0LGVdKSx0LmFuaW1hdGluZz0hMSx0LnNsaWRlQ291bnQ+dC5vcHRpb25zLnNsaWRlc1RvU2hvdyYmdC5zZXRQb3NpdGlvbigpLHQuc3dpcGVMZWZ0PW51bGwsdC5vcHRpb25zLmF1dG9wbGF5JiZ0LmF1dG9QbGF5KCksITA9PT10Lm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmKHQuaW5pdEFEQSgpLHQub3B0aW9ucy5mb2N1c09uQ2hhbmdlJiZpKHQuJHNsaWRlcy5nZXQodC5jdXJyZW50U2xpZGUpKS5hdHRyKFwidGFiaW5kZXhcIiwwKS5mb2N1cygpKSl9LGUucHJvdG90eXBlLnByZXY9ZS5wcm90b3R5cGUuc2xpY2tQcmV2PWZ1bmN0aW9uKCl7dGhpcy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcInByZXZpb3VzXCJ9fSl9LGUucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0sZS5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZD1mdW5jdGlvbihlKXtlPWV8fDE7dmFyIHQsbyxzLG4scixsPXRoaXMsZD1pKFwiaW1nW2RhdGEtbGF6eV1cIixsLiRzbGlkZXIpO2QubGVuZ3RoPyh0PWQuZmlyc3QoKSxvPXQuYXR0cihcImRhdGEtbGF6eVwiKSxzPXQuYXR0cihcImRhdGEtc3Jjc2V0XCIpLG49dC5hdHRyKFwiZGF0YS1zaXplc1wiKXx8bC4kc2xpZGVyLmF0dHIoXCJkYXRhLXNpemVzXCIpLChyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpLm9ubG9hZD1mdW5jdGlvbigpe3MmJih0LmF0dHIoXCJzcmNzZXRcIixzKSxuJiZ0LmF0dHIoXCJzaXplc1wiLG4pKSx0LmF0dHIoXCJzcmNcIixvKS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXNcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLCEwPT09bC5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0JiZsLnNldFBvc2l0aW9uKCksbC4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZGVkXCIsW2wsdCxvXSksbC5wcm9ncmVzc2l2ZUxhenlMb2FkKCl9LHIub25lcnJvcj1mdW5jdGlvbigpe2U8Mz9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5wcm9ncmVzc2l2ZUxhenlMb2FkKGUrMSl9LDUwMCk6KHQucmVtb3ZlQXR0cihcImRhdGEtbGF6eVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIikuYWRkQ2xhc3MoXCJzbGljay1sYXp5bG9hZC1lcnJvclwiKSxsLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkRXJyb3JcIixbbCx0LG9dKSxsLnByb2dyZXNzaXZlTGF6eUxvYWQoKSl9LHIuc3JjPW8pOmwuJHNsaWRlci50cmlnZ2VyKFwiYWxsSW1hZ2VzTG9hZGVkXCIsW2xdKX0sZS5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbihlKXt2YXIgdCxvLHM9dGhpcztvPXMuc2xpZGVDb3VudC1zLm9wdGlvbnMuc2xpZGVzVG9TaG93LCFzLm9wdGlvbnMuaW5maW5pdGUmJnMuY3VycmVudFNsaWRlPm8mJihzLmN1cnJlbnRTbGlkZT1vKSxzLnNsaWRlQ291bnQ8PXMub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihzLmN1cnJlbnRTbGlkZT0wKSx0PXMuY3VycmVudFNsaWRlLHMuZGVzdHJveSghMCksaS5leHRlbmQocyxzLmluaXRpYWxzLHtjdXJyZW50U2xpZGU6dH0pLHMuaW5pdCgpLGV8fHMuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJpbmRleFwiLGluZGV4OnR9fSwhMSl9LGUucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHM9ZnVuY3Rpb24oKXt2YXIgZSx0LG8scz10aGlzLG49cy5vcHRpb25zLnJlc3BvbnNpdmV8fG51bGw7aWYoXCJhcnJheVwiPT09aS50eXBlKG4pJiZuLmxlbmd0aCl7cy5yZXNwb25kVG89cy5vcHRpb25zLnJlc3BvbmRUb3x8XCJ3aW5kb3dcIjtmb3IoZSBpbiBuKWlmKG89cy5icmVha3BvaW50cy5sZW5ndGgtMSxuLmhhc093blByb3BlcnR5KGUpKXtmb3IodD1uW2VdLmJyZWFrcG9pbnQ7bz49MDspcy5icmVha3BvaW50c1tvXSYmcy5icmVha3BvaW50c1tvXT09PXQmJnMuYnJlYWtwb2ludHMuc3BsaWNlKG8sMSksby0tO3MuYnJlYWtwb2ludHMucHVzaCh0KSxzLmJyZWFrcG9pbnRTZXR0aW5nc1t0XT1uW2VdLnNldHRpbmdzfXMuYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihpLGUpe3JldHVybiBzLm9wdGlvbnMubW9iaWxlRmlyc3Q/aS1lOmUtaX0pfX0sZS5wcm90b3R5cGUucmVpbml0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXM9ZS4kc2xpZGVUcmFjay5jaGlsZHJlbihlLm9wdGlvbnMuc2xpZGUpLmFkZENsYXNzKFwic2xpY2stc2xpZGVcIiksZS5zbGlkZUNvdW50PWUuJHNsaWRlcy5sZW5ndGgsZS5jdXJyZW50U2xpZGU+PWUuc2xpZGVDb3VudCYmMCE9PWUuY3VycmVudFNsaWRlJiYoZS5jdXJyZW50U2xpZGU9ZS5jdXJyZW50U2xpZGUtZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSxlLnNsaWRlQ291bnQ8PWUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihlLmN1cnJlbnRTbGlkZT0wKSxlLnJlZ2lzdGVyQnJlYWtwb2ludHMoKSxlLnNldFByb3BzKCksZS5zZXR1cEluZmluaXRlKCksZS5idWlsZEFycm93cygpLGUudXBkYXRlQXJyb3dzKCksZS5pbml0QXJyb3dFdmVudHMoKSxlLmJ1aWxkRG90cygpLGUudXBkYXRlRG90cygpLGUuaW5pdERvdEV2ZW50cygpLGUuY2xlYW5VcFNsaWRlRXZlbnRzKCksZS5pbml0U2xpZGVFdmVudHMoKSxlLmNoZWNrUmVzcG9uc2l2ZSghMSwhMCksITA9PT1lLm9wdGlvbnMuZm9jdXNPblNlbGVjdCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIixlLnNlbGVjdEhhbmRsZXIpLGUuc2V0U2xpZGVDbGFzc2VzKFwibnVtYmVyXCI9PXR5cGVvZiBlLmN1cnJlbnRTbGlkZT9lLmN1cnJlbnRTbGlkZTowKSxlLnNldFBvc2l0aW9uKCksZS5mb2N1c0hhbmRsZXIoKSxlLnBhdXNlZD0hZS5vcHRpb25zLmF1dG9wbGF5LGUuYXV0b1BsYXkoKSxlLiRzbGlkZXIudHJpZ2dlcihcInJlSW5pdFwiLFtlXSl9LGUucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aSh3aW5kb3cpLndpZHRoKCkhPT1lLndpbmRvd1dpZHRoJiYoY2xlYXJUaW1lb3V0KGUud2luZG93RGVsYXkpLGUud2luZG93RGVsYXk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLndpbmRvd1dpZHRoPWkod2luZG93KS53aWR0aCgpLGUuY2hlY2tSZXNwb25zaXZlKCksZS51bnNsaWNrZWR8fGUuc2V0UG9zaXRpb24oKX0sNTApKX0sZS5wcm90b3R5cGUucmVtb3ZlU2xpZGU9ZS5wcm90b3R5cGUuc2xpY2tSZW1vdmU9ZnVuY3Rpb24oaSxlLHQpe3ZhciBvPXRoaXM7aWYoaT1cImJvb2xlYW5cIj09dHlwZW9mIGk/ITA9PT0oZT1pKT8wOm8uc2xpZGVDb3VudC0xOiEwPT09ZT8tLWk6aSxvLnNsaWRlQ291bnQ8MXx8aTwwfHxpPm8uc2xpZGVDb3VudC0xKXJldHVybiExO28udW5sb2FkKCksITA9PT10P28uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTpvLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaSkucmVtb3ZlKCksby4kc2xpZGVzPW8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKSxvLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksby4kc2xpZGVUcmFjay5hcHBlbmQoby4kc2xpZGVzKSxvLiRzbGlkZXNDYWNoZT1vLiRzbGlkZXMsby5yZWluaXQoKX0sZS5wcm90b3R5cGUuc2V0Q1NTPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbz10aGlzLHM9e307ITA9PT1vLm9wdGlvbnMucnRsJiYoaT0taSksZT1cImxlZnRcIj09by5wb3NpdGlvblByb3A/TWF0aC5jZWlsKGkpK1wicHhcIjpcIjBweFwiLHQ9XCJ0b3BcIj09by5wb3NpdGlvblByb3A/TWF0aC5jZWlsKGkpK1wicHhcIjpcIjBweFwiLHNbby5wb3NpdGlvblByb3BdPWksITE9PT1vLnRyYW5zZm9ybXNFbmFibGVkP28uJHNsaWRlVHJhY2suY3NzKHMpOihzPXt9LCExPT09by5jc3NUcmFuc2l0aW9ucz8oc1tvLmFuaW1UeXBlXT1cInRyYW5zbGF0ZShcIitlK1wiLCBcIit0K1wiKVwiLG8uJHNsaWRlVHJhY2suY3NzKHMpKTooc1tvLmFuaW1UeXBlXT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsIFwiK3QrXCIsIDBweClcIixvLiRzbGlkZVRyYWNrLmNzcyhzKSkpfSxlLnByb3RvdHlwZS5zZXREaW1lbnNpb25zPWZ1bmN0aW9uKCl7dmFyIGk9dGhpczshMT09PWkub3B0aW9ucy52ZXJ0aWNhbD8hMD09PWkub3B0aW9ucy5jZW50ZXJNb2RlJiZpLiRsaXN0LmNzcyh7cGFkZGluZzpcIjBweCBcIitpLm9wdGlvbnMuY2VudGVyUGFkZGluZ30pOihpLiRsaXN0LmhlaWdodChpLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCghMCkqaS5vcHRpb25zLnNsaWRlc1RvU2hvdyksITA9PT1pLm9wdGlvbnMuY2VudGVyTW9kZSYmaS4kbGlzdC5jc3Moe3BhZGRpbmc6aS5vcHRpb25zLmNlbnRlclBhZGRpbmcrXCIgMHB4XCJ9KSksaS5saXN0V2lkdGg9aS4kbGlzdC53aWR0aCgpLGkubGlzdEhlaWdodD1pLiRsaXN0LmhlaWdodCgpLCExPT09aS5vcHRpb25zLnZlcnRpY2FsJiYhMT09PWkub3B0aW9ucy52YXJpYWJsZVdpZHRoPyhpLnNsaWRlV2lkdGg9TWF0aC5jZWlsKGkubGlzdFdpZHRoL2kub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGkuJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKGkuc2xpZGVXaWR0aCppLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmxlbmd0aCkpKTohMD09PWkub3B0aW9ucy52YXJpYWJsZVdpZHRoP2kuJHNsaWRlVHJhY2sud2lkdGgoNWUzKmkuc2xpZGVDb3VudCk6KGkuc2xpZGVXaWR0aD1NYXRoLmNlaWwoaS5saXN0V2lkdGgpLGkuJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbChpLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCghMCkqaS4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5sZW5ndGgpKSk7dmFyIGU9aS4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCghMCktaS4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTshMT09PWkub3B0aW9ucy52YXJpYWJsZVdpZHRoJiZpLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLndpZHRoKGkuc2xpZGVXaWR0aC1lKX0sZS5wcm90b3R5cGUuc2V0RmFkZT1mdW5jdGlvbigpe3ZhciBlLHQ9dGhpczt0LiRzbGlkZXMuZWFjaChmdW5jdGlvbihvLHMpe2U9dC5zbGlkZVdpZHRoKm8qLTEsITA9PT10Lm9wdGlvbnMucnRsP2kocykuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCIscmlnaHQ6ZSx0b3A6MCx6SW5kZXg6dC5vcHRpb25zLnpJbmRleC0yLG9wYWNpdHk6MH0pOmkocykuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCIsbGVmdDplLHRvcDowLHpJbmRleDp0Lm9wdGlvbnMuekluZGV4LTIsb3BhY2l0eTowfSl9KSx0LiRzbGlkZXMuZXEodC5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OnQub3B0aW9ucy56SW5kZXgtMSxvcGFjaXR5OjF9KX0sZS5wcm90b3R5cGUuc2V0SGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpZigxPT09aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmITA9PT1pLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQmJiExPT09aS5vcHRpb25zLnZlcnRpY2FsKXt2YXIgZT1pLiRzbGlkZXMuZXEoaS5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KCEwKTtpLiRsaXN0LmNzcyhcImhlaWdodFwiLGUpfX0sZS5wcm90b3R5cGUuc2V0T3B0aW9uPWUucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uPWZ1bmN0aW9uKCl7dmFyIGUsdCxvLHMsbixyPXRoaXMsbD0hMTtpZihcIm9iamVjdFwiPT09aS50eXBlKGFyZ3VtZW50c1swXSk/KG89YXJndW1lbnRzWzBdLGw9YXJndW1lbnRzWzFdLG49XCJtdWx0aXBsZVwiKTpcInN0cmluZ1wiPT09aS50eXBlKGFyZ3VtZW50c1swXSkmJihvPWFyZ3VtZW50c1swXSxzPWFyZ3VtZW50c1sxXSxsPWFyZ3VtZW50c1syXSxcInJlc3BvbnNpdmVcIj09PWFyZ3VtZW50c1swXSYmXCJhcnJheVwiPT09aS50eXBlKGFyZ3VtZW50c1sxXSk/bj1cInJlc3BvbnNpdmVcIjp2b2lkIDAhPT1hcmd1bWVudHNbMV0mJihuPVwic2luZ2xlXCIpKSxcInNpbmdsZVwiPT09bilyLm9wdGlvbnNbb109cztlbHNlIGlmKFwibXVsdGlwbGVcIj09PW4paS5lYWNoKG8sZnVuY3Rpb24oaSxlKXtyLm9wdGlvbnNbaV09ZX0pO2Vsc2UgaWYoXCJyZXNwb25zaXZlXCI9PT1uKWZvcih0IGluIHMpaWYoXCJhcnJheVwiIT09aS50eXBlKHIub3B0aW9ucy5yZXNwb25zaXZlKSlyLm9wdGlvbnMucmVzcG9uc2l2ZT1bc1t0XV07ZWxzZXtmb3IoZT1yLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtlPj0wOylyLm9wdGlvbnMucmVzcG9uc2l2ZVtlXS5icmVha3BvaW50PT09c1t0XS5icmVha3BvaW50JiZyLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UoZSwxKSxlLS07ci5vcHRpb25zLnJlc3BvbnNpdmUucHVzaChzW3RdKX1sJiYoci51bmxvYWQoKSxyLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuc2V0RGltZW5zaW9ucygpLGkuc2V0SGVpZ2h0KCksITE9PT1pLm9wdGlvbnMuZmFkZT9pLnNldENTUyhpLmdldExlZnQoaS5jdXJyZW50U2xpZGUpKTppLnNldEZhZGUoKSxpLiRzbGlkZXIudHJpZ2dlcihcInNldFBvc2l0aW9uXCIsW2ldKX0sZS5wcm90b3R5cGUuc2V0UHJvcHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9ZG9jdW1lbnQuYm9keS5zdHlsZTtpLnBvc2l0aW9uUHJvcD0hMD09PWkub3B0aW9ucy52ZXJ0aWNhbD9cInRvcFwiOlwibGVmdFwiLFwidG9wXCI9PT1pLnBvc2l0aW9uUHJvcD9pLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKTppLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKSx2b2lkIDA9PT1lLldlYmtpdFRyYW5zaXRpb24mJnZvaWQgMD09PWUuTW96VHJhbnNpdGlvbiYmdm9pZCAwPT09ZS5tc1RyYW5zaXRpb258fCEwPT09aS5vcHRpb25zLnVzZUNTUyYmKGkuY3NzVHJhbnNpdGlvbnM9ITApLGkub3B0aW9ucy5mYWRlJiYoXCJudW1iZXJcIj09dHlwZW9mIGkub3B0aW9ucy56SW5kZXg/aS5vcHRpb25zLnpJbmRleDwzJiYoaS5vcHRpb25zLnpJbmRleD0zKTppLm9wdGlvbnMuekluZGV4PWkuZGVmYXVsdHMuekluZGV4KSx2b2lkIDAhPT1lLk9UcmFuc2Zvcm0mJihpLmFuaW1UeXBlPVwiT1RyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi1vLXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJPVHJhbnNpdGlvblwiLHZvaWQgMD09PWUucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09ZS53ZWJraXRQZXJzcGVjdGl2ZSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLk1velRyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJNb3pUcmFuc2Zvcm1cIixpLnRyYW5zZm9ybVR5cGU9XCItbW96LXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJNb3pUcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1lLk1velBlcnNwZWN0aXZlJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUud2Via2l0VHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIndlYmtpdFRyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi13ZWJraXQtdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIndlYmtpdFRyYW5zaXRpb25cIix2b2lkIDA9PT1lLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWUud2Via2l0UGVyc3BlY3RpdmUmJihpLmFuaW1UeXBlPSExKSksdm9pZCAwIT09ZS5tc1RyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJtc1RyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi1tcy10cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwibXNUcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5tc1RyYW5zZm9ybSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLnRyYW5zZm9ybSYmITEhPT1pLmFuaW1UeXBlJiYoaS5hbmltVHlwZT1cInRyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cInRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJ0cmFuc2l0aW9uXCIpLGkudHJhbnNmb3Jtc0VuYWJsZWQ9aS5vcHRpb25zLnVzZVRyYW5zZm9ybSYmbnVsbCE9PWkuYW5pbVR5cGUmJiExIT09aS5hbmltVHlwZX0sZS5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbyxzLG49dGhpcztpZih0PW4uJHNsaWRlci5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50XCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxuLiRzbGlkZXMuZXEoaSkuYWRkQ2xhc3MoXCJzbGljay1jdXJyZW50XCIpLCEwPT09bi5vcHRpb25zLmNlbnRlck1vZGUpe3ZhciByPW4ub3B0aW9ucy5zbGlkZXNUb1Nob3clMj09MD8xOjA7ZT1NYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiksITA9PT1uLm9wdGlvbnMuaW5maW5pdGUmJihpPj1lJiZpPD1uLnNsaWRlQ291bnQtMS1lP24uJHNsaWRlcy5zbGljZShpLWUrcixpK2UrMSkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKToobz1uLm9wdGlvbnMuc2xpZGVzVG9TaG93K2ksdC5zbGljZShvLWUrMStyLG8rZSsyKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpKSwwPT09aT90LmVxKHQubGVuZ3RoLTEtbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIik6aT09PW4uc2xpZGVDb3VudC0xJiZ0LmVxKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpKSxuLiRzbGlkZXMuZXEoaSkuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIil9ZWxzZSBpPj0wJiZpPD1uLnNsaWRlQ291bnQtbi5vcHRpb25zLnNsaWRlc1RvU2hvdz9uLiRzbGlkZXMuc2xpY2UoaSxpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6dC5sZW5ndGg8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOihzPW4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TaG93LG89ITA9PT1uLm9wdGlvbnMuaW5maW5pdGU/bi5vcHRpb25zLnNsaWRlc1RvU2hvdytpOmksbi5vcHRpb25zLnNsaWRlc1RvU2hvdz09bi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsJiZuLnNsaWRlQ291bnQtaTxuLm9wdGlvbnMuc2xpZGVzVG9TaG93P3Quc2xpY2Uoby0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy1zKSxvK3MpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6dC5zbGljZShvLG8rbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSk7XCJvbmRlbWFuZFwiIT09bi5vcHRpb25zLmxhenlMb2FkJiZcImFudGljaXBhdGVkXCIhPT1uLm9wdGlvbnMubGF6eUxvYWR8fG4ubGF6eUxvYWQoKX0sZS5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZT1mdW5jdGlvbigpe3ZhciBlLHQsbyxzPXRoaXM7aWYoITA9PT1zLm9wdGlvbnMuZmFkZSYmKHMub3B0aW9ucy5jZW50ZXJNb2RlPSExKSwhMD09PXMub3B0aW9ucy5pbmZpbml0ZSYmITE9PT1zLm9wdGlvbnMuZmFkZSYmKHQ9bnVsbCxzLnNsaWRlQ291bnQ+cy5vcHRpb25zLnNsaWRlc1RvU2hvdykpe2ZvcihvPSEwPT09cy5vcHRpb25zLmNlbnRlck1vZGU/cy5vcHRpb25zLnNsaWRlc1RvU2hvdysxOnMub3B0aW9ucy5zbGlkZXNUb1Nob3csZT1zLnNsaWRlQ291bnQ7ZT5zLnNsaWRlQ291bnQtbztlLT0xKXQ9ZS0xLGkocy4kc2xpZGVzW3RdKS5jbG9uZSghMCkuYXR0cihcImlkXCIsXCJcIikuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIix0LXMuc2xpZGVDb3VudCkucHJlcGVuZFRvKHMuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO2ZvcihlPTA7ZTxvK3Muc2xpZGVDb3VudDtlKz0xKXQ9ZSxpKHMuJHNsaWRlc1t0XSkuY2xvbmUoITApLmF0dHIoXCJpZFwiLFwiXCIpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsdCtzLnNsaWRlQ291bnQpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO3MuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikuZmluZChcIltpZF1cIikuZWFjaChmdW5jdGlvbigpe2kodGhpcykuYXR0cihcImlkXCIsXCJcIil9KX19LGUucHJvdG90eXBlLmludGVycnVwdD1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2l8fGUuYXV0b1BsYXkoKSxlLmludGVycnVwdGVkPWl9LGUucHJvdG90eXBlLnNlbGVjdEhhbmRsZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxvPWkoZS50YXJnZXQpLmlzKFwiLnNsaWNrLXNsaWRlXCIpP2koZS50YXJnZXQpOmkoZS50YXJnZXQpLnBhcmVudHMoXCIuc2xpY2stc2xpZGVcIikscz1wYXJzZUludChvLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpKTtzfHwocz0wKSx0LnNsaWRlQ291bnQ8PXQub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5zbGlkZUhhbmRsZXIocywhMSwhMCk6dC5zbGlkZUhhbmRsZXIocyl9LGUucHJvdG90eXBlLnNsaWRlSGFuZGxlcj1mdW5jdGlvbihpLGUsdCl7dmFyIG8scyxuLHIsbCxkPW51bGwsYT10aGlzO2lmKGU9ZXx8ITEsISghMD09PWEuYW5pbWF0aW5nJiYhMD09PWEub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZXx8ITA9PT1hLm9wdGlvbnMuZmFkZSYmYS5jdXJyZW50U2xpZGU9PT1pKSlpZighMT09PWUmJmEuYXNOYXZGb3IoaSksbz1pLGQ9YS5nZXRMZWZ0KG8pLHI9YS5nZXRMZWZ0KGEuY3VycmVudFNsaWRlKSxhLmN1cnJlbnRMZWZ0PW51bGw9PT1hLnN3aXBlTGVmdD9yOmEuc3dpcGVMZWZ0LCExPT09YS5vcHRpb25zLmluZmluaXRlJiYhMT09PWEub3B0aW9ucy5jZW50ZXJNb2RlJiYoaTwwfHxpPmEuZ2V0RG90Q291bnQoKSphLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSExPT09YS5vcHRpb25zLmZhZGUmJihvPWEuY3VycmVudFNsaWRlLCEwIT09dD9hLmFuaW1hdGVTbGlkZShyLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUobyl9KTphLnBvc3RTbGlkZShvKSk7ZWxzZSBpZighMT09PWEub3B0aW9ucy5pbmZpbml0ZSYmITA9PT1hLm9wdGlvbnMuY2VudGVyTW9kZSYmKGk8MHx8aT5hLnNsaWRlQ291bnQtYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkhMT09PWEub3B0aW9ucy5mYWRlJiYobz1hLmN1cnJlbnRTbGlkZSwhMCE9PXQ/YS5hbmltYXRlU2xpZGUocixmdW5jdGlvbigpe2EucG9zdFNsaWRlKG8pfSk6YS5wb3N0U2xpZGUobykpO2Vsc2V7aWYoYS5vcHRpb25zLmF1dG9wbGF5JiZjbGVhckludGVydmFsKGEuYXV0b1BsYXlUaW1lcikscz1vPDA/YS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9MD9hLnNsaWRlQ291bnQtYS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDphLnNsaWRlQ291bnQrbzpvPj1hLnNsaWRlQ291bnQ/YS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9MD8wOm8tYS5zbGlkZUNvdW50Om8sYS5hbmltYXRpbmc9ITAsYS4kc2xpZGVyLnRyaWdnZXIoXCJiZWZvcmVDaGFuZ2VcIixbYSxhLmN1cnJlbnRTbGlkZSxzXSksbj1hLmN1cnJlbnRTbGlkZSxhLmN1cnJlbnRTbGlkZT1zLGEuc2V0U2xpZGVDbGFzc2VzKGEuY3VycmVudFNsaWRlKSxhLm9wdGlvbnMuYXNOYXZGb3ImJihsPShsPWEuZ2V0TmF2VGFyZ2V0KCkpLnNsaWNrKFwiZ2V0U2xpY2tcIikpLnNsaWRlQ291bnQ8PWwub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmwuc2V0U2xpZGVDbGFzc2VzKGEuY3VycmVudFNsaWRlKSxhLnVwZGF0ZURvdHMoKSxhLnVwZGF0ZUFycm93cygpLCEwPT09YS5vcHRpb25zLmZhZGUpcmV0dXJuITAhPT10PyhhLmZhZGVTbGlkZU91dChuKSxhLmZhZGVTbGlkZShzLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUocyl9KSk6YS5wb3N0U2xpZGUocyksdm9pZCBhLmFuaW1hdGVIZWlnaHQoKTshMCE9PXQ/YS5hbmltYXRlU2xpZGUoZCxmdW5jdGlvbigpe2EucG9zdFNsaWRlKHMpfSk6YS5wb3N0U2xpZGUocyl9fSxlLnByb3RvdHlwZS5zdGFydExvYWQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzOyEwPT09aS5vcHRpb25zLmFycm93cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cuaGlkZSgpLGkuJG5leHRBcnJvdy5oaWRlKCkpLCEwPT09aS5vcHRpb25zLmRvdHMmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLiRkb3RzLmhpZGUoKSxpLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSxlLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbj1mdW5jdGlvbigpe3ZhciBpLGUsdCxvLHM9dGhpcztyZXR1cm4gaT1zLnRvdWNoT2JqZWN0LnN0YXJ0WC1zLnRvdWNoT2JqZWN0LmN1clgsZT1zLnRvdWNoT2JqZWN0LnN0YXJ0WS1zLnRvdWNoT2JqZWN0LmN1clksdD1NYXRoLmF0YW4yKGUsaSksKG89TWF0aC5yb3VuZCgxODAqdC9NYXRoLlBJKSk8MCYmKG89MzYwLU1hdGguYWJzKG8pKSxvPD00NSYmbz49MD8hMT09PXMub3B0aW9ucy5ydGw/XCJsZWZ0XCI6XCJyaWdodFwiOm88PTM2MCYmbz49MzE1PyExPT09cy5vcHRpb25zLnJ0bD9cImxlZnRcIjpcInJpZ2h0XCI6bz49MTM1JiZvPD0yMjU/ITE9PT1zLm9wdGlvbnMucnRsP1wicmlnaHRcIjpcImxlZnRcIjohMD09PXMub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc/bz49MzUmJm88PTEzNT9cImRvd25cIjpcInVwXCI6XCJ2ZXJ0aWNhbFwifSxlLnByb3RvdHlwZS5zd2lwZUVuZD1mdW5jdGlvbihpKXt2YXIgZSx0LG89dGhpcztpZihvLmRyYWdnaW5nPSExLG8uc3dpcGluZz0hMSxvLnNjcm9sbGluZylyZXR1cm4gby5zY3JvbGxpbmc9ITEsITE7aWYoby5pbnRlcnJ1cHRlZD0hMSxvLnNob3VsZENsaWNrPSEoby50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD4xMCksdm9pZCAwPT09by50b3VjaE9iamVjdC5jdXJYKXJldHVybiExO2lmKCEwPT09by50b3VjaE9iamVjdC5lZGdlSGl0JiZvLiRzbGlkZXIudHJpZ2dlcihcImVkZ2VcIixbbyxvLnN3aXBlRGlyZWN0aW9uKCldKSxvLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPj1vLnRvdWNoT2JqZWN0Lm1pblN3aXBlKXtzd2l0Y2godD1vLnN3aXBlRGlyZWN0aW9uKCkpe2Nhc2VcImxlZnRcIjpjYXNlXCJkb3duXCI6ZT1vLm9wdGlvbnMuc3dpcGVUb1NsaWRlP28uY2hlY2tOYXZpZ2FibGUoby5jdXJyZW50U2xpZGUrby5nZXRTbGlkZUNvdW50KCkpOm8uY3VycmVudFNsaWRlK28uZ2V0U2xpZGVDb3VudCgpLG8uY3VycmVudERpcmVjdGlvbj0wO2JyZWFrO2Nhc2VcInJpZ2h0XCI6Y2FzZVwidXBcIjplPW8ub3B0aW9ucy5zd2lwZVRvU2xpZGU/by5jaGVja05hdmlnYWJsZShvLmN1cnJlbnRTbGlkZS1vLmdldFNsaWRlQ291bnQoKSk6by5jdXJyZW50U2xpZGUtby5nZXRTbGlkZUNvdW50KCksby5jdXJyZW50RGlyZWN0aW9uPTF9XCJ2ZXJ0aWNhbFwiIT10JiYoby5zbGlkZUhhbmRsZXIoZSksby50b3VjaE9iamVjdD17fSxvLiRzbGlkZXIudHJpZ2dlcihcInN3aXBlXCIsW28sdF0pKX1lbHNlIG8udG91Y2hPYmplY3Quc3RhcnRYIT09by50b3VjaE9iamVjdC5jdXJYJiYoby5zbGlkZUhhbmRsZXIoby5jdXJyZW50U2xpZGUpLG8udG91Y2hPYmplY3Q9e30pfSxlLnByb3RvdHlwZS5zd2lwZUhhbmRsZXI9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztpZighKCExPT09ZS5vcHRpb25zLnN3aXBlfHxcIm9udG91Y2hlbmRcImluIGRvY3VtZW50JiYhMT09PWUub3B0aW9ucy5zd2lwZXx8ITE9PT1lLm9wdGlvbnMuZHJhZ2dhYmxlJiYtMSE9PWkudHlwZS5pbmRleE9mKFwibW91c2VcIikpKXN3aXRjaChlLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50PWkub3JpZ2luYWxFdmVudCYmdm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM/aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoOjEsZS50b3VjaE9iamVjdC5taW5Td2lwZT1lLmxpc3RXaWR0aC9lLm9wdGlvbnMudG91Y2hUaHJlc2hvbGQsITA9PT1lLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYoZS50b3VjaE9iamVjdC5taW5Td2lwZT1lLmxpc3RIZWlnaHQvZS5vcHRpb25zLnRvdWNoVGhyZXNob2xkKSxpLmRhdGEuYWN0aW9uKXtjYXNlXCJzdGFydFwiOmUuc3dpcGVTdGFydChpKTticmVhaztjYXNlXCJtb3ZlXCI6ZS5zd2lwZU1vdmUoaSk7YnJlYWs7Y2FzZVwiZW5kXCI6ZS5zd2lwZUVuZChpKX19LGUucHJvdG90eXBlLnN3aXBlTW92ZT1mdW5jdGlvbihpKXt2YXIgZSx0LG8scyxuLHIsbD10aGlzO3JldHVybiBuPXZvaWQgMCE9PWkub3JpZ2luYWxFdmVudD9pLm9yaWdpbmFsRXZlbnQudG91Y2hlczpudWxsLCEoIWwuZHJhZ2dpbmd8fGwuc2Nyb2xsaW5nfHxuJiYxIT09bi5sZW5ndGgpJiYoZT1sLmdldExlZnQobC5jdXJyZW50U2xpZGUpLGwudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1uP25bMF0ucGFnZVg6aS5jbGllbnRYLGwudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1uP25bMF0ucGFnZVk6aS5jbGllbnRZLGwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9TWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3cobC50b3VjaE9iamVjdC5jdXJYLWwudG91Y2hPYmplY3Quc3RhcnRYLDIpKSkscj1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhsLnRvdWNoT2JqZWN0LmN1clktbC50b3VjaE9iamVjdC5zdGFydFksMikpKSwhbC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyYmIWwuc3dpcGluZyYmcj40PyhsLnNjcm9sbGluZz0hMCwhMSk6KCEwPT09bC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyYmKGwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9ciksdD1sLnN3aXBlRGlyZWN0aW9uKCksdm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50JiZsLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjQmJihsLnN3aXBpbmc9ITAsaS5wcmV2ZW50RGVmYXVsdCgpKSxzPSghMT09PWwub3B0aW9ucy5ydGw/MTotMSkqKGwudG91Y2hPYmplY3QuY3VyWD5sLnRvdWNoT2JqZWN0LnN0YXJ0WD8xOi0xKSwhMD09PWwub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcmJihzPWwudG91Y2hPYmplY3QuY3VyWT5sLnRvdWNoT2JqZWN0LnN0YXJ0WT8xOi0xKSxvPWwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgsbC50b3VjaE9iamVjdC5lZGdlSGl0PSExLCExPT09bC5vcHRpb25zLmluZmluaXRlJiYoMD09PWwuY3VycmVudFNsaWRlJiZcInJpZ2h0XCI9PT10fHxsLmN1cnJlbnRTbGlkZT49bC5nZXREb3RDb3VudCgpJiZcImxlZnRcIj09PXQpJiYobz1sLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoKmwub3B0aW9ucy5lZGdlRnJpY3Rpb24sbC50b3VjaE9iamVjdC5lZGdlSGl0PSEwKSwhMT09PWwub3B0aW9ucy52ZXJ0aWNhbD9sLnN3aXBlTGVmdD1lK28qczpsLnN3aXBlTGVmdD1lK28qKGwuJGxpc3QuaGVpZ2h0KCkvbC5saXN0V2lkdGgpKnMsITA9PT1sLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYobC5zd2lwZUxlZnQ9ZStvKnMpLCEwIT09bC5vcHRpb25zLmZhZGUmJiExIT09bC5vcHRpb25zLnRvdWNoTW92ZSYmKCEwPT09bC5hbmltYXRpbmc/KGwuc3dpcGVMZWZ0PW51bGwsITEpOnZvaWQgbC5zZXRDU1MobC5zd2lwZUxlZnQpKSkpfSxlLnByb3RvdHlwZS5zd2lwZVN0YXJ0PWZ1bmN0aW9uKGkpe3ZhciBlLHQ9dGhpcztpZih0LmludGVycnVwdGVkPSEwLDEhPT10LnRvdWNoT2JqZWN0LmZpbmdlckNvdW50fHx0LnNsaWRlQ291bnQ8PXQub3B0aW9ucy5zbGlkZXNUb1Nob3cpcmV0dXJuIHQudG91Y2hPYmplY3Q9e30sITE7dm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50JiZ2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlcyYmKGU9aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0pLHQudG91Y2hPYmplY3Quc3RhcnRYPXQudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1lP2UucGFnZVg6aS5jbGllbnRYLHQudG91Y2hPYmplY3Quc3RhcnRZPXQudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1lP2UucGFnZVk6aS5jbGllbnRZLHQuZHJhZ2dpbmc9ITB9LGUucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzPWUucHJvdG90eXBlLnNsaWNrVW5maWx0ZXI9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO251bGwhPT1pLiRzbGlkZXNDYWNoZSYmKGkudW5sb2FkKCksaS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGkuJHNsaWRlc0NhY2hlLmFwcGVuZFRvKGkuJHNsaWRlVHJhY2spLGkucmVpbml0KCkpfSxlLnByb3RvdHlwZS51bmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2koXCIuc2xpY2stY2xvbmVkXCIsZS4kc2xpZGVyKS5yZW1vdmUoKSxlLiRkb3RzJiZlLiRkb3RzLnJlbW92ZSgpLGUuJHByZXZBcnJvdyYmZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5wcmV2QXJyb3cpJiZlLiRwcmV2QXJyb3cucmVtb3ZlKCksZS4kbmV4dEFycm93JiZlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLm5leHRBcnJvdykmJmUuJG5leHRBcnJvdy5yZW1vdmUoKSxlLiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50XCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKS5jc3MoXCJ3aWR0aFwiLFwiXCIpfSxlLnByb3RvdHlwZS51bnNsaWNrPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7ZS4kc2xpZGVyLnRyaWdnZXIoXCJ1bnNsaWNrXCIsW2UsaV0pLGUuZGVzdHJveSgpfSxlLnByb3RvdHlwZS51cGRhdGVBcnJvd3M9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO01hdGguZmxvb3IoaS5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSwhMD09PWkub3B0aW9ucy5hcnJvd3MmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhaS5vcHRpb25zLmluZmluaXRlJiYoaS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLGkuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSwwPT09aS5jdXJyZW50U2xpZGU/KGkuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGkuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSk6aS5jdXJyZW50U2xpZGU+PWkuc2xpZGVDb3VudC1pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhMT09PWkub3B0aW9ucy5jZW50ZXJNb2RlPyhpLiRuZXh0QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxpLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpOmkuY3VycmVudFNsaWRlPj1pLnNsaWRlQ291bnQtMSYmITA9PT1pLm9wdGlvbnMuY2VudGVyTW9kZSYmKGkuJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGkuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSkpfSxlLnByb3RvdHlwZS51cGRhdGVEb3RzPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztudWxsIT09aS4kZG90cyYmKGkuJGRvdHMuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stYWN0aXZlXCIpLmVuZCgpLGkuJGRvdHMuZmluZChcImxpXCIpLmVxKE1hdGguZmxvb3IoaS5jdXJyZW50U2xpZGUvaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikpfSxlLnByb3RvdHlwZS52aXNpYmlsaXR5PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLm9wdGlvbnMuYXV0b3BsYXkmJihkb2N1bWVudFtpLmhpZGRlbl0/aS5pbnRlcnJ1cHRlZD0hMDppLmludGVycnVwdGVkPSExKX0saS5mbi5zbGljaz1mdW5jdGlvbigpe3ZhciBpLHQsbz10aGlzLHM9YXJndW1lbnRzWzBdLG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLHI9by5sZW5ndGg7Zm9yKGk9MDtpPHI7aSsrKWlmKFwib2JqZWN0XCI9PXR5cGVvZiBzfHx2b2lkIDA9PT1zP29baV0uc2xpY2s9bmV3IGUob1tpXSxzKTp0PW9baV0uc2xpY2tbc10uYXBwbHkob1tpXS5zbGljayxuKSx2b2lkIDAhPT10KXJldHVybiB0O3JldHVybiBvfX0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgcGFyYWxsYXhCYWNrZ3JvdW5kRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFyYWxsYXhCYWNrZ3JvdW5kJyk7XHJcbiAgICBsZXQgZGVza3RvcCA9IHdpbmRvdy5pc01vYmlsZSA9PSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVQYXJhbGxheChldmVudCkge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbk1vdXNlVmVydGljYWwgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbk1vdXNlSG9yaXNvbnRhbCA9IGV2ZW50LmNsaWVudFg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYWxsYXhCYWNrZ3JvdW5kRWxlbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHBhcmFsbGF4QmFja2dyb3VuZEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRvcCA9IHBvc2l0aW9uTW91c2VWZXJ0aWNhbCAvIDM1ICsgJ3B4JztcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gcG9zaXRpb25Nb3VzZUhvcmlzb250YWwgLyAzNSArICdweCc7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUucmlnaHQgPSAtIHBvc2l0aW9uTW91c2VIb3Jpc29udGFsIC8gMzUgKyAncHgnO1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmJvdHRvbSA9IC0gcG9zaXRpb25Nb3VzZVZlcnRpY2FsIC8gMzUgKyAncHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGVza3RvcCl7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlUGFyYWxsYXgpO1xyXG4gICAgfVxyXG5cclxufSgpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hc3NldHMvanMvbW9kdWxlcy9wYXJhbGxheC5qcyIsIihmdW5jdGlvbiAoJCkge1xyXG4gICAgbGV0IGRlc2t0b3AgPSB3aW5kb3cuaXNNb2JpbGUgPT0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGRlc2t0b3ApIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnaGVhZGVyIGxpIGFbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgICAgICAgICAgJCgnaGVhZGVyIGxpIGFbaHJlZl49XCIjXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsICgpIHtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnaGVhZGVyIGxpIGEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyTGluayA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVmRWxlbWVudCA9ICQoY3VyckxpbmsuYXR0cignaHJlZicpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVmRWxlbWVudC5vZmZzZXQoKS50b3AgLSA4NiA8PSBzY3JvbGxQb3MgJiYgcmVmRWxlbWVudC5vZmZzZXQoKS50b3AgKyByZWZFbGVtZW50LmhlaWdodCgpID4gc2Nyb2xsUG9zIC0gODYpIHsgLy8gXCItIDg2XCIgaGVpZ2h0IG9mIG5hdmlnYXRpb24gaW4gaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaGVhZGVyIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJMaW5rLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyTGluay5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufShqUXVlcnkpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL25hdmlnYXRpb24uanMiLCJpbXBvcnQgamNmIGZyb20gJ2pjZic7XHJcbmltcG9ydCAnamNmL2pzL2pjZi5zZWxlY3QnO1xyXG5pbXBvcnQgJ2pjZi9qcy9qY2Yuc2Nyb2xsYWJsZSc7XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgamNmLnNldE9wdGlvbnMoJ1NlbGVjdCcsIHtcclxuICAgICAgICB3cmFwTmF0aXZlOiBmYWxzZSxcclxuICAgICAgICBtYXhWaXNpYmxlSXRlbXM6IDQsXHJcbiAgICAgICAgdXNlQ3VzdG9tU2Nyb2xsOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGpjZi5yZXBsYWNlKCdzZWxlY3QnKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoJCggZXZlbnQudGFyZ2V0ICkuaXMoJy5qY2Ytc2VsZWN0LWRyb3AuamNmLXNlbGVjdC1qY2YtaGlkZGVuLmpjZi11bnNlbGVjdGFibGUnKSkge1xyXG4gICAgICAgICAgICBpZigkKCBldmVudC50YXJnZXQgKS5maW5kKCcuamNmLW9wdGlvbi1kZWZhdWx0LXZhbHVlJykubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtUG9zaXRpb24gPSAkKCBldmVudC50YXJnZXQgKS5maW5kKCcuamNmLW9wdGlvbi1kZWZhdWx0LXZhbHVlJykucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgICAgICAkKCcuamNmLXNlbGVjdC1kcm9wIC5qY2YtbGlzdC1jb250ZW50JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOmVsZW1Qb3NpdGlvbn0sIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KGpRdWVyeSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXNzZXRzL2pzL21vZHVsZXMvc2VsZWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxud2luZG93LmpjZiA9IHJlcXVpcmUoJy4vamNmJyk7XHJcblxyXG5yZXF1aXJlKCcuL2pjZi5idXR0b24nKTtcclxucmVxdWlyZSgnLi9qY2YuY2hlY2tib3gnKTtcclxucmVxdWlyZSgnLi9qY2YuZmlsZScpO1xyXG5yZXF1aXJlKCcuL2pjZi5udW1iZXInKTtcclxucmVxdWlyZSgnLi9qY2YucmFkaW8nKTtcclxucmVxdWlyZSgnLi9qY2YucmFuZ2UnKTtcclxucmVxdWlyZSgnLi9qY2Yuc2Nyb2xsYWJsZScpO1xyXG5yZXF1aXJlKCcuL2pjZi5zZWxlY3QnKTtcclxucmVxdWlyZSgnLi9qY2YudGV4dGFyZWEnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gd2luZG93LmpjZjtcclxuXHJcbmRlbGV0ZSB3aW5kb3cuamNmO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L2pjZi9qcy9qY2YuY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcclxuICogSmF2YVNjcmlwdCBDdXN0b20gRm9ybXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBQU0QySFRNTCAtIGh0dHA6Ly9wc2QyaHRtbC5jb20vamNmXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoTElDRU5TRS50eHQpXHJcbiAqXHJcbiAqIFZlcnNpb246IDEuMi4zXHJcbiAqL1xyXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyb290LmpjZiA9IGZhY3RvcnkoalF1ZXJ5KTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24oJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gZGVmaW5lIHZlcnNpb25cclxuXHR2YXIgdmVyc2lvbiA9ICcxLjIuMyc7XHJcblxyXG5cdC8vIHByaXZhdGUgdmFyaWFibGVzXHJcblx0dmFyIGN1c3RvbUluc3RhbmNlcyA9IFtdO1xyXG5cclxuXHQvLyBkZWZhdWx0IGdsb2JhbCBvcHRpb25zXHJcblx0dmFyIGNvbW1vbk9wdGlvbnMgPSB7XHJcblx0XHRvcHRpb25zS2V5OiAnamNmJyxcclxuXHRcdGRhdGFLZXk6ICdqY2YtaW5zdGFuY2UnLFxyXG5cdFx0cnRsQ2xhc3M6ICdqY2YtcnRsJyxcclxuXHRcdGZvY3VzQ2xhc3M6ICdqY2YtZm9jdXMnLFxyXG5cdFx0cHJlc3NlZENsYXNzOiAnamNmLXByZXNzZWQnLFxyXG5cdFx0ZGlzYWJsZWRDbGFzczogJ2pjZi1kaXNhYmxlZCcsXHJcblx0XHRoaWRkZW5DbGFzczogJ2pjZi1oaWRkZW4nLFxyXG5cdFx0cmVzZXRBcHBlYXJhbmNlQ2xhc3M6ICdqY2YtcmVzZXQtYXBwZWFyYW5jZScsXHJcblx0XHR1bnNlbGVjdGFibGVDbGFzczogJ2pjZi11bnNlbGVjdGFibGUnXHJcblx0fTtcclxuXHJcblx0Ly8gZGV0ZWN0IGRldmljZSB0eXBlXHJcblx0dmFyIGlzVG91Y2hEZXZpY2UgPSAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoLFxyXG5cdFx0aXNXaW5QaG9uZURldmljZSA9IC9XaW5kb3dzIFBob25lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cdGNvbW1vbk9wdGlvbnMuaXNNb2JpbGVEZXZpY2UgPSAhIShpc1RvdWNoRGV2aWNlIHx8IGlzV2luUGhvbmVEZXZpY2UpO1xyXG5cclxuXHQvLyBjcmVhdGUgZ2xvYmFsIHN0eWxlc2hlZXQgaWYgY3VzdG9tIGZvcm1zIGFyZSB1c2VkXHJcblx0dmFyIGNyZWF0ZVN0eWxlU2hlZXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBzdHlsZVRhZyA9ICQoJzxzdHlsZT4nKS5hcHBlbmRUbygnaGVhZCcpLFxyXG5cdFx0XHRzdHlsZVNoZWV0ID0gc3R5bGVUYWcucHJvcCgnc2hlZXQnKSB8fCBzdHlsZVRhZy5wcm9wKCdzdHlsZVNoZWV0Jyk7XHJcblxyXG5cdFx0Ly8gY3Jvc3Nicm93c2VyIHN0eWxlIGhhbmRsaW5nXHJcblx0XHR2YXIgYWRkQ1NTUnVsZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBydWxlcywgaW5kZXgpIHtcclxuXHRcdFx0aW5kZXggPSBpbmRleCB8fCAwO1xyXG5cdFx0XHRpZiAoc3R5bGVTaGVldC5pbnNlcnRSdWxlKSB7XHJcblx0XHRcdFx0c3R5bGVTaGVldC5pbnNlcnRSdWxlKHNlbGVjdG9yICsgJ3snICsgcnVsZXMgKyAnfScsIGluZGV4KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzdHlsZVNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHJ1bGVzLCBpbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gYWRkIHNwZWNpYWwgcnVsZXNcclxuXHRcdGFkZENTU1J1bGUoJy4nICsgY29tbW9uT3B0aW9ucy5oaWRkZW5DbGFzcywgJ3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7bGVmdDotOTk5OXB4ICFpbXBvcnRhbnQ7aGVpZ2h0OjFweCAhaW1wb3J0YW50O3dpZHRoOjFweCAhaW1wb3J0YW50O21hcmdpbjowICFpbXBvcnRhbnQ7Ym9yZGVyLXdpZHRoOjAgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmUnKTtcclxuXHRcdGFkZENTU1J1bGUoJy4nICsgY29tbW9uT3B0aW9ucy5ydGxDbGFzcyArICcgLicgKyBjb21tb25PcHRpb25zLmhpZGRlbkNsYXNzLCAncmlnaHQ6LTk5OTlweCAhaW1wb3J0YW50OyBsZWZ0OiBhdXRvICFpbXBvcnRhbnQnKTtcclxuXHRcdGFkZENTU1J1bGUoJy4nICsgY29tbW9uT3B0aW9ucy51bnNlbGVjdGFibGVDbGFzcywgJy13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC1tcy11c2VyLXNlbGVjdDogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7IC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTsnKTtcclxuXHRcdGFkZENTU1J1bGUoJy4nICsgY29tbW9uT3B0aW9ucy5yZXNldEFwcGVhcmFuY2VDbGFzcywgJ2JhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyBvcGFjaXR5OiAwOyBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7Jyk7XHJcblxyXG5cdFx0Ly8gZGV0ZWN0IHJ0bCBwYWdlc1xyXG5cdFx0dmFyIGh0bWwgPSAkKCdodG1sJyksIGJvZHkgPSAkKCdib2R5Jyk7XHJcblx0XHRpZiAoaHRtbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyB8fCBib2R5LmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKSB7XHJcblx0XHRcdGh0bWwuYWRkQ2xhc3MoY29tbW9uT3B0aW9ucy5ydGxDbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaGFuZGxlIGZvcm0gcmVzZXQgZXZlbnRcclxuXHRcdGh0bWwub24oJ3Jlc2V0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0YXBpLnJlZnJlc2hBbGwoKTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBtYXJrIHN0eWxlc2hlZXQgYXMgY3JlYXRlZFxyXG5cdFx0Y29tbW9uT3B0aW9ucy5zdHlsZVNoZWV0Q3JlYXRlZCA9IHRydWU7XHJcblx0fTtcclxuXHJcblx0Ly8gc2ltcGxpZmllZCBwb2ludGVyIGV2ZW50cyBoYW5kbGVyXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBvaW50ZXJFdmVudHNTdXBwb3J0ZWQgPSBuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgbmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXHJcblx0XHRcdHRvdWNoRXZlbnRzU3VwcG9ydGVkID0gKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCxcclxuXHRcdFx0ZXZlbnRMaXN0LCBldmVudE1hcCA9IHt9LCBldmVudFByZWZpeCA9ICdqY2YtJztcclxuXHJcblx0XHQvLyBkZXRlY3QgZXZlbnRzIHRvIGF0dGFjaFxyXG5cdFx0aWYgKHBvaW50ZXJFdmVudHNTdXBwb3J0ZWQpIHtcclxuXHRcdFx0ZXZlbnRMaXN0ID0ge1xyXG5cdFx0XHRcdHBvaW50ZXJvdmVyOiBuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgPyAncG9pbnRlcm92ZXInIDogJ01TUG9pbnRlck92ZXInLFxyXG5cdFx0XHRcdHBvaW50ZXJkb3duOiBuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgPyAncG9pbnRlcmRvd24nIDogJ01TUG9pbnRlckRvd24nLFxyXG5cdFx0XHRcdHBvaW50ZXJtb3ZlOiBuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgPyAncG9pbnRlcm1vdmUnIDogJ01TUG9pbnRlck1vdmUnLFxyXG5cdFx0XHRcdHBvaW50ZXJ1cDogbmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkID8gJ3BvaW50ZXJ1cCcgOiAnTVNQb2ludGVyVXAnXHJcblx0XHRcdH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRldmVudExpc3QgPSB7XHJcblx0XHRcdFx0cG9pbnRlcm92ZXI6ICdtb3VzZW92ZXInLFxyXG5cdFx0XHRcdHBvaW50ZXJkb3duOiAnbW91c2Vkb3duJyArICh0b3VjaEV2ZW50c1N1cHBvcnRlZCA/ICcgdG91Y2hzdGFydCcgOiAnJyksXHJcblx0XHRcdFx0cG9pbnRlcm1vdmU6ICdtb3VzZW1vdmUnICsgKHRvdWNoRXZlbnRzU3VwcG9ydGVkID8gJyB0b3VjaG1vdmUnIDogJycpLFxyXG5cdFx0XHRcdHBvaW50ZXJ1cDogJ21vdXNldXAnICsgKHRvdWNoRXZlbnRzU3VwcG9ydGVkID8gJyB0b3VjaGVuZCcgOiAnJylcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjcmVhdGUgZXZlbnQgbWFwXHJcblx0XHQkLmVhY2goZXZlbnRMaXN0LCBmdW5jdGlvbih0YXJnZXRFdmVudE5hbWUsIGZha2VFdmVudExpc3QpIHtcclxuXHRcdFx0JC5lYWNoKGZha2VFdmVudExpc3Quc3BsaXQoJyAnKSwgZnVuY3Rpb24oaW5kZXgsIGZha2VFdmVudE5hbWUpIHtcclxuXHRcdFx0XHRldmVudE1hcFtmYWtlRXZlbnROYW1lXSA9IHRhcmdldEV2ZW50TmFtZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBqUXVlcnkgZXZlbnQgaG9va3NcclxuXHRcdCQuZWFjaChldmVudExpc3QsIGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVycykge1xyXG5cdFx0XHRldmVudEhhbmRsZXJzID0gZXZlbnRIYW5kbGVycy5zcGxpdCgnICcpO1xyXG5cdFx0XHQkLmV2ZW50LnNwZWNpYWxbZXZlbnRQcmVmaXggKyBldmVudE5hbWVdID0ge1xyXG5cdFx0XHRcdHNldHVwOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHRcdCQuZWFjaChldmVudEhhbmRsZXJzLCBmdW5jdGlvbihpbmRleCwgZmFsbGJhY2tFdmVudCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5hZGRFdmVudExpc3RlbmVyKSBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoZmFsbGJhY2tFdmVudCwgZml4RXZlbnQsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0ZWxzZSBzZWxmWydvbicgKyBmYWxsYmFja0V2ZW50XSA9IGZpeEV2ZW50O1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFx0XHQkLmVhY2goZXZlbnRIYW5kbGVycywgZnVuY3Rpb24oaW5kZXgsIGZhbGxiYWNrRXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNlbGYuYWRkRXZlbnRMaXN0ZW5lcikgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKGZhbGxiYWNrRXZlbnQsIGZpeEV2ZW50LCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdGVsc2Ugc2VsZlsnb24nICsgZmFsbGJhY2tFdmVudF0gPSBudWxsO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gY2hlY2sgdGhhdCBtb3VzZSBldmVudCBhcmUgbm90IHNpbXVsYXRlZCBieSBtb2JpbGUgYnJvd3NlcnNcclxuXHRcdHZhciBsYXN0VG91Y2ggPSBudWxsO1xyXG5cdFx0dmFyIG1vdXNlRXZlbnRTaW11bGF0ZWQgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciBkeCA9IE1hdGguYWJzKGUucGFnZVggLSBsYXN0VG91Y2gueCksXHJcblx0XHRcdFx0ZHkgPSBNYXRoLmFicyhlLnBhZ2VZIC0gbGFzdFRvdWNoLnkpLFxyXG5cdFx0XHRcdHJhbmdlRGlzdGFuY2UgPSAyNTtcclxuXHJcblx0XHRcdGlmIChkeCA8PSByYW5nZURpc3RhbmNlICYmIGR5IDw9IHJhbmdlRGlzdGFuY2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBub3JtYWxpemUgZXZlbnRcclxuXHRcdHZhciBmaXhFdmVudCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIG9yaWdFdmVudCA9IGUgfHwgd2luZG93LmV2ZW50LFxyXG5cdFx0XHRcdHRvdWNoRXZlbnREYXRhID0gbnVsbCxcclxuXHRcdFx0XHR0YXJnZXRFdmVudE5hbWUgPSBldmVudE1hcFtvcmlnRXZlbnQudHlwZV07XHJcblxyXG5cdFx0XHRlID0gJC5ldmVudC5maXgob3JpZ0V2ZW50KTtcclxuXHRcdFx0ZS50eXBlID0gZXZlbnRQcmVmaXggKyB0YXJnZXRFdmVudE5hbWU7XHJcblxyXG5cdFx0XHRpZiAob3JpZ0V2ZW50LnBvaW50ZXJUeXBlKSB7XHJcblx0XHRcdFx0c3dpdGNoIChvcmlnRXZlbnQucG9pbnRlclR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgMjogZS5wb2ludGVyVHlwZSA9ICd0b3VjaCc7IGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiBlLnBvaW50ZXJUeXBlID0gJ3Blbic7IGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA0OiBlLnBvaW50ZXJUeXBlID0gJ21vdXNlJzsgYnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OiBlLnBvaW50ZXJUeXBlID0gb3JpZ0V2ZW50LnBvaW50ZXJUeXBlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlLnBvaW50ZXJUeXBlID0gb3JpZ0V2ZW50LnR5cGUuc3Vic3RyKDAsIDUpOyAvLyBcIm1vdXNlXCIgb3IgXCJ0b3VjaFwiIHdvcmQgbGVuZ3RoXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghZS5wYWdlWCAmJiAhZS5wYWdlWSkge1xyXG5cdFx0XHRcdHRvdWNoRXZlbnREYXRhID0gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzID8gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogb3JpZ0V2ZW50O1xyXG5cdFx0XHRcdGUucGFnZVggPSB0b3VjaEV2ZW50RGF0YS5wYWdlWDtcclxuXHRcdFx0XHRlLnBhZ2VZID0gdG91Y2hFdmVudERhdGEucGFnZVk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcmlnRXZlbnQudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG5cdFx0XHRcdGxhc3RUb3VjaCA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnICYmIGxhc3RUb3VjaCAmJiBtb3VzZUV2ZW50U2ltdWxhdGVkKGUpKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAoJC5ldmVudC5kaXNwYXRjaCB8fCAkLmV2ZW50LmhhbmRsZSkuY2FsbCh0aGlzLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KCkpO1xyXG5cclxuXHQvLyBjdXN0b20gbW91c2V3aGVlbC90cmFja3BhZCBoYW5kbGVyXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHdoZWVsRXZlbnRzID0gKCdvbndoZWVsJyBpbiBkb2N1bWVudCB8fCBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gOSA/ICd3aGVlbCcgOiAnbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCcpLnNwbGl0KCcgJyksXHJcblx0XHRcdHNoaW1FdmVudE5hbWUgPSAnamNmLW1vdXNld2hlZWwnO1xyXG5cclxuXHRcdCQuZXZlbnQuc3BlY2lhbFtzaGltRXZlbnROYW1lXSA9IHtcclxuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHQkLmVhY2god2hlZWxFdmVudHMsIGZ1bmN0aW9uKGluZGV4LCBmYWxsYmFja0V2ZW50KSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5hZGRFdmVudExpc3RlbmVyKSBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoZmFsbGJhY2tFdmVudCwgZml4RXZlbnQsIGZhbHNlKTtcclxuXHRcdFx0XHRcdGVsc2Ugc2VsZlsnb24nICsgZmFsbGJhY2tFdmVudF0gPSBmaXhFdmVudDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHQkLmVhY2god2hlZWxFdmVudHMsIGZ1bmN0aW9uKGluZGV4LCBmYWxsYmFja0V2ZW50KSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5hZGRFdmVudExpc3RlbmVyKSBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZmFsbGJhY2tFdmVudCwgZml4RXZlbnQsIGZhbHNlKTtcclxuXHRcdFx0XHRcdGVsc2Ugc2VsZlsnb24nICsgZmFsbGJhY2tFdmVudF0gPSBudWxsO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBmaXhFdmVudCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIG9yaWdFdmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdFx0XHRlID0gJC5ldmVudC5maXgob3JpZ0V2ZW50KTtcclxuXHRcdFx0ZS50eXBlID0gc2hpbUV2ZW50TmFtZTtcclxuXHJcblx0XHRcdC8vIG9sZCB3aGVlbCBldmVudHMgaGFuZGxlclxyXG5cdFx0XHRpZiAoJ2RldGFpbCcgICAgICBpbiBvcmlnRXZlbnQpIHsgZS5kZWx0YVkgPSAtb3JpZ0V2ZW50LmRldGFpbDsgICAgICB9XHJcblx0XHRcdGlmICgnd2hlZWxEZWx0YScgIGluIG9yaWdFdmVudCkgeyBlLmRlbHRhWSA9IC1vcmlnRXZlbnQud2hlZWxEZWx0YTsgIH1cclxuXHRcdFx0aWYgKCd3aGVlbERlbHRhWScgaW4gb3JpZ0V2ZW50KSB7IGUuZGVsdGFZID0gLW9yaWdFdmVudC53aGVlbERlbHRhWTsgfVxyXG5cdFx0XHRpZiAoJ3doZWVsRGVsdGFYJyBpbiBvcmlnRXZlbnQpIHsgZS5kZWx0YVggPSAtb3JpZ0V2ZW50LndoZWVsRGVsdGFYOyB9XHJcblxyXG5cdFx0XHQvLyBtb2Rlcm4gd2hlZWwgZXZlbnQgaGFuZGxlclxyXG5cdFx0XHRpZiAoJ2RlbHRhWScgaW4gb3JpZ0V2ZW50KSB7XHJcblx0XHRcdFx0ZS5kZWx0YVkgPSBvcmlnRXZlbnQuZGVsdGFZO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgnZGVsdGFYJyBpbiBvcmlnRXZlbnQpIHtcclxuXHRcdFx0XHRlLmRlbHRhWCA9IG9yaWdFdmVudC5kZWx0YVg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGhhbmRsZSBkZWx0YU1vZGUgZm9yIG1vdXNlIHdoZWVsXHJcblx0XHRcdGUuZGVsdGEgPSBlLmRlbHRhWSB8fCBlLmRlbHRhWDtcclxuXHRcdFx0aWYgKG9yaWdFdmVudC5kZWx0YU1vZGUgPT09IDEpIHtcclxuXHRcdFx0XHR2YXIgbGluZUhlaWdodCA9IDE2O1xyXG5cdFx0XHRcdGUuZGVsdGEgKj0gbGluZUhlaWdodDtcclxuXHRcdFx0XHRlLmRlbHRhWSAqPSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRcdGUuZGVsdGFYICo9IGxpbmVIZWlnaHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiAoJC5ldmVudC5kaXNwYXRjaCB8fCAkLmV2ZW50LmhhbmRsZSkuY2FsbCh0aGlzLCBlKTtcclxuXHRcdH07XHJcblx0fSgpKTtcclxuXHJcblx0Ly8gZXh0cmEgbW9kdWxlIG1ldGhvZHNcclxuXHR2YXIgbW9kdWxlTWl4aW4gPSB7XHJcblx0XHQvLyBwcm92aWRlIGZ1bmN0aW9uIGZvciBmaXJpbmcgbmF0aXZlIGV2ZW50c1xyXG5cdFx0ZmlyZU5hdGl2ZUV2ZW50OiBmdW5jdGlvbihlbGVtZW50cywgZXZlbnROYW1lKSB7XHJcblx0XHRcdCQoZWxlbWVudHMpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSB0aGlzLCBldmVudE9iamVjdDtcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5kaXNwYXRjaEV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcblx0XHRcdFx0XHRldmVudE9iamVjdC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudE9iamVjdCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCkge1xyXG5cdFx0XHRcdFx0ZXZlbnRPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xyXG5cdFx0XHRcdFx0ZXZlbnRPYmplY3QudGFyZ2V0ID0gZWxlbWVudDtcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyBldmVudE5hbWUsIGV2ZW50T2JqZWN0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vIGJpbmQgZXZlbnQgaGFuZGxlcnMgZm9yIG1vZHVsZSBpbnN0YW5jZSAoZnVuY3Rpb25zIGJlZ2dpbmluZyB3aXRoIFwib25cIilcclxuXHRcdGJpbmRIYW5kbGVyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0JC5lYWNoKHNlbGYsIGZ1bmN0aW9uKHByb3BOYW1lLCBwcm9wVmFsdWUpIHtcclxuXHRcdFx0XHRpZiAocHJvcE5hbWUuaW5kZXhPZignb24nKSA9PT0gMCAmJiAkLmlzRnVuY3Rpb24ocHJvcFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0Ly8gZG9udCB1c2UgJC5wcm94eSBoZXJlIGJlY2F1c2UgaXQgZG9lc24ndCBjcmVhdGUgdW5pcXVlIGhhbmRsZXJcclxuXHRcdFx0XHRcdHNlbGZbcHJvcE5hbWVdID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBwcm9wVmFsdWUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBwdWJsaWMgQVBJXHJcblx0dmFyIGFwaSA9IHtcclxuXHRcdHZlcnNpb246IHZlcnNpb24sXHJcblx0XHRtb2R1bGVzOiB7fSxcclxuXHRcdGdldE9wdGlvbnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJC5leHRlbmQoe30sIGNvbW1vbk9wdGlvbnMpO1xyXG5cdFx0fSxcclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG1vZHVsZU5hbWUsIG1vZHVsZU9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Ly8gc2V0IG1vZHVsZSBvcHRpb25zXHJcblx0XHRcdFx0aWYgKHRoaXMubW9kdWxlc1ttb2R1bGVOYW1lXSkge1xyXG5cdFx0XHRcdFx0JC5leHRlbmQodGhpcy5tb2R1bGVzW21vZHVsZU5hbWVdLnByb3RvdHlwZS5vcHRpb25zLCBtb2R1bGVPcHRpb25zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gc2V0IGNvbW1vbiBvcHRpb25zXHJcblx0XHRcdFx0JC5leHRlbmQoY29tbW9uT3B0aW9ucywgbW9kdWxlTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhZGRNb2R1bGU6IGZ1bmN0aW9uKHByb3RvKSB7XHJcblx0XHRcdC8vIHByb3RvIGlzIGZhY3RvcnkgZnVuY3Rpb25cclxuXHRcdFx0aWYgKCQuaXNGdW5jdGlvbihwcm90bykpIHtcclxuXHRcdFx0XHRwcm90byA9IHByb3RvKCQsIHdpbmRvdyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFkZCBtb2R1bGUgdG8gbGlzdFxyXG5cdFx0XHR2YXIgTW9kdWxlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0XHRcdC8vIHNhdmUgaW5zdGFuY2UgdG8gY29sbGVjdGlvblxyXG5cdFx0XHRcdGlmICghb3B0aW9ucy5lbGVtZW50LmRhdGEoY29tbW9uT3B0aW9ucy5kYXRhS2V5KSkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5lbGVtZW50LmRhdGEoY29tbW9uT3B0aW9ucy5kYXRhS2V5LCB0aGlzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3VzdG9tSW5zdGFuY2VzLnB1c2godGhpcyk7XHJcblxyXG5cdFx0XHRcdC8vIHNhdmUgb3B0aW9uc1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBjb21tb25PcHRpb25zLCB0aGlzLm9wdGlvbnMsIGdldElubGluZU9wdGlvbnMob3B0aW9ucy5lbGVtZW50KSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRcdC8vIGJpbmQgZXZlbnQgaGFuZGxlcnMgdG8gaW5zdGFuY2VcclxuXHRcdFx0XHR0aGlzLmJpbmRIYW5kbGVycygpO1xyXG5cclxuXHRcdFx0XHQvLyBjYWxsIGNvbnN0cnVjdG9yXHJcblx0XHRcdFx0dGhpcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvLyBwYXJzZSBvcHRpb25zIGZyb20gSFRNTCBhdHRyaWJ1dGVcclxuXHRcdFx0dmFyIGdldElubGluZU9wdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0dmFyIGRhdGFPcHRpb25zID0gZWxlbWVudC5kYXRhKGNvbW1vbk9wdGlvbnMub3B0aW9uc0tleSksXHJcblx0XHRcdFx0XHRhdHRyT3B0aW9ucyA9IGVsZW1lbnQuYXR0cihjb21tb25PcHRpb25zLm9wdGlvbnNLZXkpO1xyXG5cclxuXHRcdFx0XHRpZiAoZGF0YU9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdHJldHVybiBkYXRhT3B0aW9ucztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGF0dHJPcHRpb25zKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJC5wYXJzZUpTT04oYXR0ck9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHQvLyBpZ25vcmUgaW52YWxpZCBhdHRyaWJ1dGVzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gc2V0IHByb3RvIGFzIHByb3RvdHlwZSBmb3IgbmV3IG1vZHVsZVxyXG5cdFx0XHRNb2R1bGUucHJvdG90eXBlID0gcHJvdG87XHJcblxyXG5cdFx0XHQvLyBhZGQgbWl4aW4gbWV0aG9kcyB0byBtb2R1bGUgcHJvdG9cclxuXHRcdFx0JC5leHRlbmQocHJvdG8sIG1vZHVsZU1peGluKTtcclxuXHRcdFx0aWYgKHByb3RvLnBsdWdpbnMpIHtcclxuXHRcdFx0XHQkLmVhY2gocHJvdG8ucGx1Z2lucywgZnVuY3Rpb24ocGx1Z2luTmFtZSwgcGx1Z2luKSB7XHJcblx0XHRcdFx0XHQkLmV4dGVuZChwbHVnaW4ucHJvdG90eXBlLCBtb2R1bGVNaXhpbik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG92ZXJyaWRlIGRlc3Ryb3kgbWV0aG9kXHJcblx0XHRcdHZhciBvcmlnaW5hbERlc3Ryb3kgPSBNb2R1bGUucHJvdG90eXBlLmRlc3Ryb3k7XHJcblx0XHRcdE1vZHVsZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5lbGVtZW50LnJlbW92ZURhdGEodGhpcy5vcHRpb25zLmRhdGFLZXkpO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gY3VzdG9tSW5zdGFuY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdFx0XHRpZiAoY3VzdG9tSW5zdGFuY2VzW2ldID09PSB0aGlzKSB7XHJcblx0XHRcdFx0XHRcdGN1c3RvbUluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG9yaWdpbmFsRGVzdHJveSkge1xyXG5cdFx0XHRcdFx0b3JpZ2luYWxEZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gc2F2ZSBtb2R1bGUgdG8gbGlzdFxyXG5cdFx0XHR0aGlzLm1vZHVsZXNbcHJvdG8ubmFtZV0gPSBNb2R1bGU7XHJcblx0XHR9LFxyXG5cdFx0Z2V0SW5zdGFuY2U6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuICQoZWxlbWVudCkuZGF0YShjb21tb25PcHRpb25zLmRhdGFLZXkpO1xyXG5cdFx0fSxcclxuXHRcdHJlcGxhY2U6IGZ1bmN0aW9uKGVsZW1lbnRzLCBtb2R1bGVOYW1lLCBjdXN0b21PcHRpb25zKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRpbnN0YW5jZTtcclxuXHJcblx0XHRcdGlmICghY29tbW9uT3B0aW9ucy5zdHlsZVNoZWV0Q3JlYXRlZCkge1xyXG5cdFx0XHRcdGNyZWF0ZVN0eWxlU2hlZXQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JChlbGVtZW50cykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgbW9kdWxlT3B0aW9ucyxcclxuXHRcdFx0XHRcdGVsZW1lbnQgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRpbnN0YW5jZSA9IGVsZW1lbnQuZGF0YShjb21tb25PcHRpb25zLmRhdGFLZXkpO1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdFx0aW5zdGFuY2UucmVmcmVzaCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoIW1vZHVsZU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0JC5lYWNoKHNlbGYubW9kdWxlcywgZnVuY3Rpb24oY3VycmVudE1vZHVsZU5hbWUsIG1vZHVsZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtb2R1bGUucHJvdG90eXBlLm1hdGNoRWxlbWVudC5jYWxsKG1vZHVsZS5wcm90b3R5cGUsIGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVOYW1lID0gY3VycmVudE1vZHVsZU5hbWU7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2R1bGVOYW1lKSB7XHJcblx0XHRcdFx0XHRcdG1vZHVsZU9wdGlvbnMgPSAkLmV4dGVuZCh7IGVsZW1lbnQ6IGVsZW1lbnQgfSwgY3VzdG9tT3B0aW9ucyk7XHJcblx0XHRcdFx0XHRcdGluc3RhbmNlID0gbmV3IHNlbGYubW9kdWxlc1ttb2R1bGVOYW1lXShtb2R1bGVPcHRpb25zKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0XHR9LFxyXG5cdFx0cmVmcmVzaDogZnVuY3Rpb24oZWxlbWVudHMpIHtcclxuXHRcdFx0JChlbGVtZW50cykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoY29tbW9uT3B0aW9ucy5kYXRhS2V5KTtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRcdGluc3RhbmNlLnJlZnJlc2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XHJcblx0XHRcdCQoZWxlbWVudHMpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGluc3RhbmNlID0gJCh0aGlzKS5kYXRhKGNvbW1vbk9wdGlvbnMuZGF0YUtleSk7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0XHRpbnN0YW5jZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZXBsYWNlQWxsOiBmdW5jdGlvbihjb250ZXh0KSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0JC5lYWNoKHRoaXMubW9kdWxlcywgZnVuY3Rpb24obW9kdWxlTmFtZSwgbW9kdWxlKSB7XHJcblx0XHRcdFx0JChtb2R1bGUucHJvdG90eXBlLnNlbGVjdG9yLCBjb250ZXh0KS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY2xhc3NOYW1lLmluZGV4T2YoJ2pjZi1pZ25vcmUnKSA8IDApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5yZXBsYWNlKHRoaXMsIG1vZHVsZU5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoQWxsOiBmdW5jdGlvbihjb250ZXh0KSB7XHJcblx0XHRcdGlmIChjb250ZXh0KSB7XHJcblx0XHRcdFx0JC5lYWNoKHRoaXMubW9kdWxlcywgZnVuY3Rpb24obW9kdWxlTmFtZSwgbW9kdWxlKSB7XHJcblx0XHRcdFx0XHQkKG1vZHVsZS5wcm90b3R5cGUuc2VsZWN0b3IsIGNvbnRleHQpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQodGhpcykuZGF0YShjb21tb25PcHRpb25zLmRhdGFLZXkpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZS5yZWZyZXNoKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSBjdXN0b21JbnN0YW5jZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0XHRcdGN1c3RvbUluc3RhbmNlc1tpXS5yZWZyZXNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveUFsbDogZnVuY3Rpb24oY29udGV4dCkge1xyXG5cdFx0XHRpZiAoY29udGV4dCkge1xyXG5cdFx0XHRcdCQuZWFjaCh0aGlzLm1vZHVsZXMsIGZ1bmN0aW9uKG1vZHVsZU5hbWUsIG1vZHVsZSkge1xyXG5cdFx0XHRcdFx0JChtb2R1bGUucHJvdG90eXBlLnNlbGVjdG9yLCBjb250ZXh0KS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQoZWxlbWVudCkuZGF0YShjb21tb25PcHRpb25zLmRhdGFLZXkpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHdoaWxlIChjdXN0b21JbnN0YW5jZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjdXN0b21JbnN0YW5jZXNbMF0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIHdlIG5lZWQgdG8gbWFrZSBKQ0YgYXZhaWxhYmxlIGdsb2JhbGx5IGlmIHdlJ3JlIGluIEFNRCBlbnZpcm9ubWVudFxyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdHdpbmRvdy5qY2YgPSBhcGk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYXBpO1xyXG59KSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEQ6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcclxuICogSmF2YVNjcmlwdCBDdXN0b20gRm9ybXMgOiBCdXR0b24gTW9kdWxlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgUFNEMkhUTUwgLSBodHRwOi8vcHNkMmh0bWwuY29tL2pjZlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKExJQ0VOU0UudHh0KVxyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjIuM1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbihqY2YpIHtcclxuXHJcbmpjZi5hZGRNb2R1bGUoZnVuY3Rpb24oJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6ICdCdXR0b24nLFxyXG5cdFx0c2VsZWN0b3I6ICdidXR0b24sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXScsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHJlYWxFbGVtZW50Q2xhc3M6ICdqY2YtcmVhbC1lbGVtZW50JyxcclxuXHRcdFx0ZmFrZVN0cnVjdHVyZTogJzxzcGFuIGNsYXNzPVwiamNmLWJ1dHRvblwiPjxzcGFuIGNsYXNzPVwiamNmLWJ1dHRvbi1jb250ZW50XCI+PC9zcGFuPjwvc3Bhbj4nLFxyXG5cdFx0XHRidXR0b25Db250ZW50OiAnLmpjZi1idXR0b24tY29udGVudCdcclxuXHRcdH0sXHJcblx0XHRtYXRjaEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXModGhpcy5zZWxlY3Rvcik7XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaW5pdFN0cnVjdHVyZSgpO1xyXG5cdFx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdH0sXHJcblx0XHRpbml0U3RydWN0dXJlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5wYWdlID0gJCgnaHRtbCcpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZWxlbWVudCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlYWxFbGVtZW50Q2xhc3MpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZmFrZVN0cnVjdHVyZSkuaW5zZXJ0QmVmb3JlKHRoaXMucmVhbEVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLmJ1dHRvbkNvbnRlbnQgPSB0aGlzLmZha2VFbGVtZW50LmZpbmQodGhpcy5vcHRpb25zLmJ1dHRvbkNvbnRlbnQpO1xyXG5cclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5jc3Moe1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50LnByZXBlbmRUbyh0aGlzLmZha2VFbGVtZW50KS5jc3Moe1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0XHRcdG9wYWNpdHk6IDBcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0YXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vbih7XHJcblx0XHRcdFx0Zm9jdXM6IHRoaXMub25Gb2N1cyxcclxuXHRcdFx0XHQnamNmLXBvaW50ZXJkb3duJzogdGhpcy5vblByZXNzXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdG9uUHJlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5wcmVzc2VkQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLnBhZ2Uub24oJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uUmVsZWFzZSk7XHJcblx0XHR9LFxyXG5cdFx0b25SZWxlYXNlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucHJlc3NlZENsYXNzKTtcclxuXHRcdFx0dGhpcy5wYWdlLm9mZignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRvbkZvY3VzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHR9LFxyXG5cdFx0b25CbHVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub2ZmKCdibHVyJywgdGhpcy5vbkJsdXIpO1xyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmJ1dHRvbkNvbnRlbnQuaHRtbCh0aGlzLnJlYWxFbGVtZW50Lmh0bWwoKSB8fCB0aGlzLnJlYWxFbGVtZW50LnZhbCgpKTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcywgdGhpcy5yZWFsRWxlbWVudC5pcygnOmRpc2FibGVkJykpO1xyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWFsRWxlbWVudENsYXNzKS5pbnNlcnRCZWZvcmUodGhpcy5mYWtlRWxlbWVudCk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9mZih7XHJcblx0XHRcdFx0Zm9jdXM6IHRoaXMub25Gb2N1cyxcclxuXHRcdFx0XHRibHVyOiB0aGlzLm9uQmx1cixcclxuXHRcdFx0XHQnamNmLXBvaW50ZXJkb3duJzogdGhpcy5vblByZXNzXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5jc3Moe1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAnJyxcclxuXHRcdFx0XHRvcGFjaXR5OiAnJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG59KTtcclxuXHJcbn0oamNmKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEQ6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLmJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXHJcbiAqIEphdmFTY3JpcHQgQ3VzdG9tIEZvcm1zIDogQ2hlY2tib3ggTW9kdWxlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgUFNEMkhUTUwgLSBodHRwOi8vcHNkMmh0bWwuY29tL2pjZlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKExJQ0VOU0UudHh0KVxyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjIuM1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbihqY2YpIHtcclxuXHJcbmpjZi5hZGRNb2R1bGUoZnVuY3Rpb24oJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6ICdDaGVja2JveCcsXHJcblx0XHRzZWxlY3RvcjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHdyYXBOYXRpdmU6IHRydWUsXHJcblx0XHRcdGNoZWNrZWRDbGFzczogJ2pjZi1jaGVja2VkJyxcclxuXHRcdFx0dW5jaGVja2VkQ2xhc3M6ICdqY2YtdW5jaGVja2VkJyxcclxuXHRcdFx0bGFiZWxBY3RpdmVDbGFzczogJ2pjZi1sYWJlbC1hY3RpdmUnLFxyXG5cdFx0XHRmYWtlU3RydWN0dXJlOiAnPHNwYW4gY2xhc3M9XCJqY2YtY2hlY2tib3hcIj48c3Bhbj48L3NwYW4+PC9zcGFuPidcclxuXHRcdH0sXHJcblx0XHRtYXRjaEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXMoJzpjaGVja2JveCcpO1xyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmluaXRTdHJ1Y3R1cmUoKTtcclxuXHRcdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdFN0cnVjdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHByZXBhcmUgc3RydWN0dXJlXHJcblx0XHRcdHRoaXMuZG9jID0gJChkb2N1bWVudCk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5lbGVtZW50KTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudCA9ICQodGhpcy5vcHRpb25zLmZha2VTdHJ1Y3R1cmUpLmluc2VydEFmdGVyKHRoaXMucmVhbEVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuZ2V0TGFiZWxGb3IoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSkge1xyXG5cdFx0XHRcdC8vIHdyYXAgbmF0aXZlIGNoZWNrYm94IGluc2lkZSBmYWtlIGJsb2NrXHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5hcHBlbmRUbyh0aGlzLmZha2VFbGVtZW50KS5jc3Moe1xyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8ganVzdCBoaWRlIG5hdGl2ZSBjaGVja2JveFxyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmhpZGRlbkNsYXNzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGF0dGFjaEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGFkZCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKHtcclxuXHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzLFxyXG5cdFx0XHRcdGNsaWNrOiB0aGlzLm9uUmVhbENsaWNrXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25GYWtlQ2xpY2spO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50Lm9uKCdqY2YtcG9pbnRlcmRvd24nLCB0aGlzLm9uUHJlc3MpO1xyXG5cdFx0fSxcclxuXHRcdG9uUmVhbENsaWNrOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdC8vIGp1c3QgcmVkcmF3IGZha2UgZWxlbWVudCAoc2V0VGltZW91dCBoYW5kbGVzIGNsaWNrIHRoYXQgbWlnaHQgYmUgcHJldmVudGVkKVxyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHRoaXMuc2F2ZWRFdmVudE9iamVjdCA9IGU7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2VsZi5yZWZyZXNoKCk7XHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fSxcclxuXHRcdG9uRmFrZUNsaWNrOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdC8vIHNraXAgZXZlbnQgaWYgY2xpY2tlZCBvbiByZWFsIGVsZW1lbnQgaW5zaWRlIHdyYXBwZXJcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy53cmFwTmF0aXZlICYmIHRoaXMucmVhbEVsZW1lbnQuaXMoZS50YXJnZXQpKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0b2dnbGUgY2hlY2tlZCBjbGFzc1xyXG5cdFx0XHRpZiAoIXRoaXMucmVhbEVsZW1lbnQuaXMoJzpkaXNhYmxlZCcpKSB7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc2F2ZWRFdmVudE9iamVjdDtcclxuXHRcdFx0XHR0aGlzLnN0YXRlQ2hlY2tlZCA9IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnY2hlY2tlZCcpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucHJvcCgnY2hlY2tlZCcsICF0aGlzLnN0YXRlQ2hlY2tlZCk7XHJcblx0XHRcdFx0dGhpcy5maXJlTmF0aXZlRXZlbnQodGhpcy5yZWFsRWxlbWVudCwgJ2NsaWNrJyk7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2F2ZWRFdmVudE9iamVjdCAmJiB0aGlzLnNhdmVkRXZlbnRPYmplY3QuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucHJvcCgnY2hlY2tlZCcsIHRoaXMuc3RhdGVDaGVja2VkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5maXJlTmF0aXZlRXZlbnQodGhpcy5yZWFsRWxlbWVudCwgJ2NoYW5nZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkZWxldGUgdGhpcy5zYXZlZEV2ZW50T2JqZWN0O1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Gb2N1czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghdGhpcy5wcmVzc2VkRmxhZyB8fCAhdGhpcy5mb2N1c2VkRmxhZykge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNlZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZvY3VzQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkJsdXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIXRoaXMucHJlc3NlZEZsYWcpIHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzZWRGbGFnID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblByZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmICghdGhpcy5mb2N1c2VkRmxhZyAmJiBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucHJlc3NlZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5wcmVzc2VkQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLmRvYy5vbignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRvblJlbGVhc2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKHRoaXMuZm9jdXNlZEZsYWcgJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnByZXNzZWRGbGFnID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnByZXNzZWRDbGFzcyk7XHJcblx0XHRcdHRoaXMuZG9jLm9mZignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRnZXRMYWJlbEZvcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBwYXJlbnRMYWJlbCA9IHRoaXMucmVhbEVsZW1lbnQuY2xvc2VzdCgnbGFiZWwnKSxcclxuXHRcdFx0XHRlbGVtZW50SWQgPSB0aGlzLnJlYWxFbGVtZW50LnByb3AoJ2lkJyk7XHJcblxyXG5cdFx0XHRpZiAoIXBhcmVudExhYmVsLmxlbmd0aCAmJiBlbGVtZW50SWQpIHtcclxuXHRcdFx0XHRwYXJlbnRMYWJlbCA9ICQoJ2xhYmVsW2Zvcj1cIicgKyBlbGVtZW50SWQgKyAnXCJdJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBhcmVudExhYmVsLmxlbmd0aCA/IHBhcmVudExhYmVsIDogbnVsbDtcclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVkcmF3IGN1c3RvbSBjaGVja2JveFxyXG5cdFx0XHR2YXIgaXNDaGVja2VkID0gdGhpcy5yZWFsRWxlbWVudC5pcygnOmNoZWNrZWQnKSxcclxuXHRcdFx0XHRpc0Rpc2FibGVkID0gdGhpcy5yZWFsRWxlbWVudC5pcygnOmRpc2FibGVkJyk7XHJcblxyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5jaGVja2VkQ2xhc3MsIGlzQ2hlY2tlZClcclxuXHRcdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnVuY2hlY2tlZENsYXNzLCAhaXNDaGVja2VkKVxyXG5cdFx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcywgaXNEaXNhYmxlZCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5sYWJlbEVsZW1lbnQpIHtcclxuXHRcdFx0XHR0aGlzLmxhYmVsRWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMubGFiZWxBY3RpdmVDbGFzcywgaXNDaGVja2VkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZXN0b3JlIHN0cnVjdHVyZVxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLndyYXBOYXRpdmUpIHtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmZha2VFbGVtZW50KS5jc3Moe1xyXG5cdFx0XHRcdFx0cG9zaXRpb246ICcnLFxyXG5cdFx0XHRcdFx0d2lkdGg6ICcnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAnJyxcclxuXHRcdFx0XHRcdG9wYWNpdHk6ICcnLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiAnJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmhpZGRlbkNsYXNzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVtb3ZpbmcgZWxlbWVudCB3aWxsIGFsc28gcmVtb3ZlIGl0cyBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50Lm9mZignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vblByZXNzKTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdC8vIHJlbW92ZSBvdGhlciBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLmRvYy5vZmYoJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uUmVsZWFzZSk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub2ZmKHtcclxuXHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzLFxyXG5cdFx0XHRcdGNsaWNrOiB0aGlzLm9uUmVhbENsaWNrXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0pO1xyXG5cclxufShqY2YpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L2pjZi9qcy9qY2YuY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IEN1c3RvbSBGb3JtcyA6IEZpbGUgTW9kdWxlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgUFNEMkhUTUwgLSBodHRwOi8vcHNkMmh0bWwuY29tL2pjZlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKExJQ0VOU0UudHh0KVxyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjIuM1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbihqY2YpIHtcclxuXHJcbmpjZi5hZGRNb2R1bGUoZnVuY3Rpb24oJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6ICdGaWxlJyxcclxuXHRcdHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1cImZpbGVcIl0nLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRmYWtlU3RydWN0dXJlOiAnPHNwYW4gY2xhc3M9XCJqY2YtZmlsZVwiPjxzcGFuIGNsYXNzPVwiamNmLWZha2UtaW5wdXRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJqY2YtdXBsb2FkLWJ1dHRvblwiPjxzcGFuIGNsYXNzPVwiamNmLWJ1dHRvbi1jb250ZW50XCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+JyxcclxuXHRcdFx0YnV0dG9uVGV4dDogJ0Nob29zZSBmaWxlJyxcclxuXHRcdFx0cGxhY2Vob2xkZXJUZXh0OiAnTm8gZmlsZSBjaG9zZW4nLFxyXG5cdFx0XHRyZWFsRWxlbWVudENsYXNzOiAnamNmLXJlYWwtZWxlbWVudCcsXHJcblx0XHRcdGV4dGVuc2lvblByZWZpeENsYXNzOiAnamNmLWV4dGVuc2lvbi0nLFxyXG5cdFx0XHRzZWxlY3RlZEZpbGVCbG9jazogJy5qY2YtZmFrZS1pbnB1dCcsXHJcblx0XHRcdGJ1dHRvblRleHRCbG9jazogJy5qY2YtYnV0dG9uLWNvbnRlbnQnXHJcblx0XHR9LFxyXG5cdFx0bWF0Y2hFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlzKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO1xyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmluaXRTdHJ1Y3R1cmUoKTtcclxuXHRcdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdFN0cnVjdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuZG9jID0gJChkb2N1bWVudCk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5lbGVtZW50KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMucmVhbEVsZW1lbnRDbGFzcyk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5mYWtlU3RydWN0dXJlKS5pbnNlcnRCZWZvcmUodGhpcy5yZWFsRWxlbWVudCk7XHJcblx0XHRcdHRoaXMuZmlsZU5hbWVCbG9jayA9IHRoaXMuZmFrZUVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRGaWxlQmxvY2spO1xyXG5cdFx0XHR0aGlzLmJ1dHRvblRleHRCbG9jayA9IHRoaXMuZmFrZUVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dEJsb2NrKS50ZXh0KHRoaXMub3B0aW9ucy5idXR0b25UZXh0KTtcclxuXHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQuYXBwZW5kVG8odGhpcy5mYWtlRWxlbWVudCkuY3NzKHtcclxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdFx0XHRvcGFjaXR5OiAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGF0dGFjaEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oe1xyXG5cdFx0XHRcdCdqY2YtcG9pbnRlcmRvd24nOiB0aGlzLm9uUHJlc3MsXHJcblx0XHRcdFx0Y2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdGZvY3VzOiB0aGlzLm9uRm9jdXNcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdH0sXHJcblx0XHRvbkZvY3VzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHR9LFxyXG5cdFx0b25CbHVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub2ZmKCdibHVyJywgdGhpcy5vbkJsdXIpO1xyXG5cdFx0fSxcclxuXHRcdG9uUHJlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5wcmVzc2VkQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLmRvYy5vbignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRvblJlbGVhc2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5wcmVzc2VkQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLmRvYy5vZmYoJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uUmVsZWFzZSk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0RmlsZU5hbWU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0RmlsZU5hbWUgPSAnJyxcclxuXHRcdFx0XHRmaWxlcyA9IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnZmlsZXMnKTtcclxuXHJcblx0XHRcdGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHQkLmVhY2goZmlsZXMsIGZ1bmN0aW9uKGluZGV4LCBmaWxlKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRGaWxlTmFtZSArPSAoaW5kZXggPiAwID8gJywgJyA6ICcnKSArIGZpbGUubmFtZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHRGaWxlTmFtZSA9IHRoaXMucmVhbEVsZW1lbnQudmFsKCkucmVwbGFjZSgvXltcXHNcXFNdKig/OlxcXFx8XFwvKShbXFxzXFxTXlxcXFxcXC9dKikkL2csICckMScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0RmlsZU5hbWU7XHJcblx0XHR9LFxyXG5cdFx0Z2V0RmlsZUV4dGVuc2lvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBmaWxlTmFtZSA9IHRoaXMucmVhbEVsZW1lbnQudmFsKCk7XHJcblx0XHRcdHJldHVybiBmaWxlTmFtZS5sYXN0SW5kZXhPZignLicpIDwgMCA/ICcnIDogZmlsZU5hbWUuc3Vic3RyaW5nKGZpbGVOYW1lLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZUV4dGVuc2lvbkNsYXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGN1cnJlbnRFeHRlbnNpb24gPSB0aGlzLmdldEZpbGVFeHRlbnNpb24oKSxcclxuXHRcdFx0XHRjdXJyZW50Q2xhc3NMaXN0ID0gdGhpcy5mYWtlRWxlbWVudC5wcm9wKCdjbGFzc05hbWUnKSxcclxuXHRcdFx0XHRjbGVhbmVkQ2xhc3NMaXN0ID0gY3VycmVudENsYXNzTGlzdC5yZXBsYWNlKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9uUHJlZml4Q2xhc3MgKyAnW14gXSsnLCdnaScpLCAnJyk7XHJcblxyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnByb3AoJ2NsYXNzTmFtZScsIGNsZWFuZWRDbGFzc0xpc3QpO1xyXG5cdFx0XHRpZiAoY3VycmVudEV4dGVuc2lvbikge1xyXG5cdFx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmV4dGVuc2lvblByZWZpeENsYXNzICsgY3VycmVudEV4dGVuc2lvbik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGVjdGVkRmlsZU5hbWUgPSB0aGlzLmdldEZpbGVOYW1lKCkgfHwgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyVGV4dDtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcywgdGhpcy5yZWFsRWxlbWVudC5pcygnOmRpc2FibGVkJykpO1xyXG5cdFx0XHR0aGlzLmZpbGVOYW1lQmxvY2sudGV4dChzZWxlY3RlZEZpbGVOYW1lKTtcclxuXHRcdFx0dGhpcy51cGRhdGVFeHRlbnNpb25DbGFzcygpO1xyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZXNldCBzdHlsZXMgYW5kIHJlc3RvcmUgZWxlbWVudCBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmZha2VFbGVtZW50KS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVhbEVsZW1lbnRDbGFzcykuY3NzKHtcclxuXHRcdFx0XHRwb3NpdGlvbjogJycsXHJcblx0XHRcdFx0b3BhY2l0eTogJydcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHQvLyByZW1vdmUgZXZlbnQgaGFuZGxlcnNcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoe1xyXG5cdFx0XHRcdCdqY2YtcG9pbnRlcmRvd24nOiB0aGlzLm9uUHJlc3MsXHJcblx0XHRcdFx0Y2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdGZvY3VzOiB0aGlzLm9uRm9jdXMsXHJcblx0XHRcdFx0Ymx1cjogdGhpcy5vbkJsdXJcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZG9jLm9mZignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KTtcclxuXHJcbn0oamNmKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEQ6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLmZpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IEN1c3RvbSBGb3JtcyA6IE51bWJlciBNb2R1bGVcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBQU0QySFRNTCAtIGh0dHA6Ly9wc2QyaHRtbC5jb20vamNmXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoTElDRU5TRS50eHQpXHJcbiAqXHJcbiAqIFZlcnNpb246IDEuMi4zXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKGpjZikge1xyXG5cclxuamNmLmFkZE1vZHVsZShmdW5jdGlvbigkKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0bmFtZTogJ051bWJlcicsXHJcblx0XHRzZWxlY3RvcjogJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRyZWFsRWxlbWVudENsYXNzOiAnamNmLXJlYWwtZWxlbWVudCcsXHJcblx0XHRcdGZha2VTdHJ1Y3R1cmU6ICc8c3BhbiBjbGFzcz1cImpjZi1udW1iZXJcIj48c3BhbiBjbGFzcz1cImpjZi1idG4taW5jXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiamNmLWJ0bi1kZWNcIj48L3NwYW4+PC9zcGFuPicsXHJcblx0XHRcdGJ0bkluY1NlbGVjdG9yOiAnLmpjZi1idG4taW5jJyxcclxuXHRcdFx0YnRuRGVjU2VsZWN0b3I6ICcuamNmLWJ0bi1kZWMnLFxyXG5cdFx0XHRwcmVzc0ludGVydmFsOiAxNTBcclxuXHRcdH0sXHJcblx0XHRtYXRjaEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXModGhpcy5zZWxlY3Rvcik7XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaW5pdFN0cnVjdHVyZSgpO1xyXG5cdFx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdH0sXHJcblx0XHRpbml0U3RydWN0dXJlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5wYWdlID0gJCgnaHRtbCcpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZWxlbWVudCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlYWxFbGVtZW50Q2xhc3MpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZmFrZVN0cnVjdHVyZSkuaW5zZXJ0QmVmb3JlKHRoaXMucmVhbEVsZW1lbnQpLnByZXBlbmQodGhpcy5yZWFsRWxlbWVudCk7XHJcblx0XHRcdHRoaXMuYnRuRGVjID0gdGhpcy5mYWtlRWxlbWVudC5maW5kKHRoaXMub3B0aW9ucy5idG5EZWNTZWxlY3Rvcik7XHJcblx0XHRcdHRoaXMuYnRuSW5jID0gdGhpcy5mYWtlRWxlbWVudC5maW5kKHRoaXMub3B0aW9ucy5idG5JbmNTZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQvLyBzZXQgaW5pdGlhbCB2YWx1ZXNcclxuXHRcdFx0dGhpcy5pbml0aWFsVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucmVhbEVsZW1lbnQudmFsKCkpIHx8IDA7XHJcblx0XHRcdHRoaXMubWluVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucmVhbEVsZW1lbnQuYXR0cignbWluJykpO1xyXG5cdFx0XHR0aGlzLm1heFZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnJlYWxFbGVtZW50LmF0dHIoJ21heCcpKTtcclxuXHRcdFx0dGhpcy5zdGVwVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucmVhbEVsZW1lbnQuYXR0cignc3RlcCcpKSB8fCAxO1xyXG5cclxuXHRcdFx0Ly8gY2hlY2sgYXR0cmlidXRlIHZhbHVlc1xyXG5cdFx0XHR0aGlzLm1pblZhbHVlID0gaXNOYU4odGhpcy5taW5WYWx1ZSkgPyAtSW5maW5pdHkgOiB0aGlzLm1pblZhbHVlO1xyXG5cdFx0XHR0aGlzLm1heFZhbHVlID0gaXNOYU4odGhpcy5tYXhWYWx1ZSkgPyBJbmZpbml0eSA6IHRoaXMubWF4VmFsdWU7XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgcmFuZ2VcclxuXHRcdFx0aWYgKGlzRmluaXRlKHRoaXMubWF4VmFsdWUpKSB7XHJcblx0XHRcdFx0dGhpcy5tYXhWYWx1ZSAtPSAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICUgdGhpcy5zdGVwVmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhdHRhY2hFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKHtcclxuXHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmJ0bkRlYy5hZGQodGhpcy5idG5JbmMpLm9uKCdqY2YtcG9pbnRlcmRvd24nLCB0aGlzLm9uQnRuUHJlc3MpO1xyXG5cdFx0fSxcclxuXHRcdG9uQnRuUHJlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdGluY3JlbWVudDtcclxuXHJcblx0XHRcdGlmICghdGhpcy5yZWFsRWxlbWVudC5pcygnOmRpc2FibGVkJykpIHtcclxuXHRcdFx0XHRpbmNyZW1lbnQgPSB0aGlzLmJ0bkluYy5pcyhlLmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuXHRcdFx0XHRzZWxmLnN0ZXAoaW5jcmVtZW50KTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc3RlcFRpbWVyKTtcclxuXHRcdFx0XHR0aGlzLnN0ZXBUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2VsZi5zdGVwKGluY3JlbWVudCk7XHJcblx0XHRcdFx0fSwgdGhpcy5vcHRpb25zLnByZXNzSW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnBhZ2Uub24oJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uQnRuUmVsZWFzZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkJ0blJlbGVhc2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuc3RlcFRpbWVyKTtcclxuXHRcdFx0dGhpcy5wYWdlLm9mZignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25CdG5SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRvbkZvY3VzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oe1xyXG5cdFx0XHRcdGJsdXI6IHRoaXMub25CbHVyLFxyXG5cdFx0XHRcdGtleWRvd246IHRoaXMub25LZXlQcmVzc1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvbkJsdXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mb2N1c0NsYXNzKTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoe1xyXG5cdFx0XHRcdGJsdXI6IHRoaXMub25CbHVyLFxyXG5cdFx0XHRcdGtleWRvd246IHRoaXMub25LZXlQcmVzc1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvbktleVByZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLndoaWNoID09PSAzOCB8fCBlLndoaWNoID09PSA0MCkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLnN0ZXAoZS53aGljaCA9PT0gMzgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c3RlcDogZnVuY3Rpb24oaW5jcmVtZW50KSB7XHJcblx0XHRcdHZhciBvcmlnaW5hbFZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnJlYWxFbGVtZW50LnZhbCgpKSxcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IG9yaWdpbmFsVmFsdWUgfHwgMCxcclxuXHRcdFx0XHRhZGRWYWx1ZSA9IHRoaXMuc3RlcFZhbHVlICogKGluY3JlbWVudCA/IDEgOiAtMSksXHJcblx0XHRcdFx0ZWRnZU51bWJlciA9IGlzRmluaXRlKHRoaXMubWluVmFsdWUpID8gdGhpcy5taW5WYWx1ZSA6IHRoaXMuaW5pdGlhbFZhbHVlIC0gTWF0aC5hYnMobmV3VmFsdWUgKiB0aGlzLnN0ZXBWYWx1ZSksXHJcblx0XHRcdFx0ZGlmZiA9IE1hdGguYWJzKGVkZ2VOdW1iZXIgLSBuZXdWYWx1ZSkgJSB0aGlzLnN0ZXBWYWx1ZTtcclxuXHJcblx0XHRcdC8vIGhhbmRsZSBzdGVwIGRpZmZcclxuXHRcdFx0aWYgKGRpZmYpIHtcclxuXHRcdFx0XHRpZiAoaW5jcmVtZW50KSB7XHJcblx0XHRcdFx0XHRuZXdWYWx1ZSArPSBhZGRWYWx1ZSAtIGRpZmY7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG5ld1ZhbHVlIC09IGRpZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5ld1ZhbHVlICs9IGFkZFZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgbWluL21heCBsaW1pdHNcclxuXHRcdFx0aWYgKG5ld1ZhbHVlIDwgdGhpcy5taW5WYWx1ZSkge1xyXG5cdFx0XHRcdG5ld1ZhbHVlID0gdGhpcy5taW5WYWx1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdWYWx1ZSA+IHRoaXMubWF4VmFsdWUpIHtcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IHRoaXMubWF4VmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHVwZGF0ZSB2YWx1ZSBpbiByZWFsIGlucHV0IGlmIGl0cyBjaGFuZ2VkXHJcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gb3JpZ2luYWxWYWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQudmFsKG5ld1ZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaXNEaXNhYmxlZCA9IHRoaXMucmVhbEVsZW1lbnQuaXMoJzpkaXNhYmxlZCcpLFxyXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5yZWFsRWxlbWVudC52YWwoKSk7XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgZGlzYWJsZWQgc3RhdGVcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcywgaXNEaXNhYmxlZCk7XHJcblxyXG5cdFx0XHQvLyByZWZyZXNoIGJ1dHRvbiBjbGFzc2VzXHJcblx0XHRcdHRoaXMuYnRuRGVjLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzLCBjdXJyZW50VmFsdWUgPT09IHRoaXMubWluVmFsdWUpO1xyXG5cdFx0XHR0aGlzLmJ0bkluYy50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcywgY3VycmVudFZhbHVlID09PSB0aGlzLm1heFZhbHVlKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVzdG9yZSBvcmlnaW5hbCBzdHJ1Y3R1cmVcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVhbEVsZW1lbnRDbGFzcykuaW5zZXJ0QmVmb3JlKHRoaXMuZmFrZUVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuc3RlcFRpbWVyKTtcclxuXHJcblx0XHRcdC8vIHJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLnBhZ2Uub2ZmKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5vbkJ0blJlbGVhc2UpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9mZih7XHJcblx0XHRcdFx0a2V5ZG93bjogdGhpcy5vbktleVByZXNzLFxyXG5cdFx0XHRcdGZvY3VzOiB0aGlzLm9uRm9jdXMsXHJcblx0XHRcdFx0Ymx1cjogdGhpcy5vbkJsdXJcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxufSk7XHJcblxyXG59KGpjZikpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBEOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vamNmL2pzL2pjZi5udW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IEN1c3RvbSBGb3JtcyA6IFJhZGlvIE1vZHVsZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1IFBTRDJIVE1MIC0gaHR0cDovL3BzZDJodG1sLmNvbS9qY2ZcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChMSUNFTlNFLnR4dClcclxuICpcclxuICogVmVyc2lvbjogMS4yLjNcclxuICovXHJcblxyXG4oZnVuY3Rpb24oamNmKSB7XHJcblxyXG5qY2YuYWRkTW9kdWxlKGZ1bmN0aW9uKCQpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiAnUmFkaW8nLFxyXG5cdFx0c2VsZWN0b3I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl0nLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHR3cmFwTmF0aXZlOiB0cnVlLFxyXG5cdFx0XHRjaGVja2VkQ2xhc3M6ICdqY2YtY2hlY2tlZCcsXHJcblx0XHRcdHVuY2hlY2tlZENsYXNzOiAnamNmLXVuY2hlY2tlZCcsXHJcblx0XHRcdGxhYmVsQWN0aXZlQ2xhc3M6ICdqY2YtbGFiZWwtYWN0aXZlJyxcclxuXHRcdFx0ZmFrZVN0cnVjdHVyZTogJzxzcGFuIGNsYXNzPVwiamNmLXJhZGlvXCI+PHNwYW4+PC9zcGFuPjwvc3Bhbj4nXHJcblx0XHR9LFxyXG5cdFx0bWF0Y2hFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlzKCc6cmFkaW8nKTtcclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pbml0U3RydWN0dXJlKCk7XHJcblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdFx0fSxcclxuXHRcdGluaXRTdHJ1Y3R1cmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBwcmVwYXJlIHN0cnVjdHVyZVxyXG5cdFx0XHR0aGlzLmRvYyA9ICQoZG9jdW1lbnQpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZWxlbWVudCk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5mYWtlU3RydWN0dXJlKS5pbnNlcnRBZnRlcih0aGlzLnJlYWxFbGVtZW50KTtcclxuXHRcdFx0dGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmdldExhYmVsRm9yKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLndyYXBOYXRpdmUpIHtcclxuXHRcdFx0XHQvLyB3cmFwIG5hdGl2ZSByYWRpbyBpbnNpZGUgZmFrZSBibG9ja1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucHJlcGVuZFRvKHRoaXMuZmFrZUVsZW1lbnQpLmNzcyh7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDBcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBqdXN0IGhpZGUgbmF0aXZlIHJhZGlvXHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaGlkZGVuQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gYWRkIGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oe1xyXG5cdFx0XHRcdGZvY3VzOiB0aGlzLm9uRm9jdXMsXHJcblx0XHRcdFx0Y2xpY2s6IHRoaXMub25SZWFsQ2xpY2tcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkZha2VDbGljayk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQub24oJ2pjZi1wb2ludGVyZG93bicsIHRoaXMub25QcmVzcyk7XHJcblx0XHR9LFxyXG5cdFx0b25SZWFsQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Ly8gcmVkcmF3IGN1cnJlbnQgcmFkaW8gYW5kIGl0cyBncm91cCAoc2V0VGltZW91dCBoYW5kbGVzIGNsaWNrIHRoYXQgbWlnaHQgYmUgcHJldmVudGVkKVxyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHRoaXMuc2F2ZWRFdmVudE9iamVjdCA9IGU7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2VsZi5yZWZyZXNoUmFkaW9Hcm91cCgpO1xyXG5cdFx0XHR9LCAwKTtcclxuXHRcdH0sXHJcblx0XHRvbkZha2VDbGljazogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvLyBza2lwIGV2ZW50IGlmIGNsaWNrZWQgb24gcmVhbCBlbGVtZW50IGluc2lkZSB3cmFwcGVyXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSAmJiB0aGlzLnJlYWxFbGVtZW50LmlzKGUudGFyZ2V0KSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdG9nZ2xlIGNoZWNrZWQgY2xhc3NcclxuXHRcdFx0aWYgKCF0aGlzLnJlYWxFbGVtZW50LmlzKCc6ZGlzYWJsZWQnKSkge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnNhdmVkRXZlbnRPYmplY3Q7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50QWN0aXZlUmFkaW8gPSB0aGlzLmdldEN1cnJlbnRBY3RpdmVSYWRpbygpO1xyXG5cdFx0XHRcdHRoaXMuc3RhdGVDaGVja2VkID0gdGhpcy5yZWFsRWxlbWVudC5wcm9wKCdjaGVja2VkJyk7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5maXJlTmF0aXZlRXZlbnQodGhpcy5yZWFsRWxlbWVudCwgJ2NsaWNrJyk7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2F2ZWRFdmVudE9iamVjdCAmJiB0aGlzLnNhdmVkRXZlbnRPYmplY3QuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucHJvcCgnY2hlY2tlZCcsIHRoaXMuc3RhdGVDaGVja2VkKTtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEFjdGl2ZVJhZGlvLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5maXJlTmF0aXZlRXZlbnQodGhpcy5yZWFsRWxlbWVudCwgJ2NoYW5nZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkZWxldGUgdGhpcy5zYXZlZEV2ZW50T2JqZWN0O1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Gb2N1czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghdGhpcy5wcmVzc2VkRmxhZyB8fCAhdGhpcy5mb2N1c2VkRmxhZykge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNlZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZvY3VzQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkJsdXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIXRoaXMucHJlc3NlZEZsYWcpIHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzZWRGbGFnID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblByZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmICghdGhpcy5mb2N1c2VkRmxhZyAmJiBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucHJlc3NlZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5wcmVzc2VkQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLmRvYy5vbignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRvblJlbGVhc2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKHRoaXMuZm9jdXNlZEZsYWcgJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnByZXNzZWRGbGFnID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnByZXNzZWRDbGFzcyk7XHJcblx0XHRcdHRoaXMuZG9jLm9mZignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRnZXRDdXJyZW50QWN0aXZlUmFkaW86IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSYWRpb0dyb3VwKHRoaXMucmVhbEVsZW1lbnQpLmZpbHRlcignOmNoZWNrZWQnKTtcclxuXHRcdH0sXHJcblx0XHRnZXRSYWRpb0dyb3VwOiBmdW5jdGlvbihyYWRpbykge1xyXG5cdFx0XHQvLyBmaW5kIHJhZGlvIGdyb3VwIGZvciBzcGVjaWZpZWQgcmFkaW8gYnV0dG9uXHJcblx0XHRcdHZhciBuYW1lID0gcmFkaW8uYXR0cignbmFtZScpLFxyXG5cdFx0XHRcdHBhcmVudEZvcm0gPSByYWRpby5wYXJlbnRzKCdmb3JtJyk7XHJcblxyXG5cdFx0XHRpZiAobmFtZSkge1xyXG5cdFx0XHRcdGlmIChwYXJlbnRGb3JtLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHBhcmVudEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJCgnaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXTpub3QoZm9ybSBpbnB1dCknKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJhZGlvO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Z2V0TGFiZWxGb3I6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcGFyZW50TGFiZWwgPSB0aGlzLnJlYWxFbGVtZW50LmNsb3Nlc3QoJ2xhYmVsJyksXHJcblx0XHRcdFx0ZWxlbWVudElkID0gdGhpcy5yZWFsRWxlbWVudC5wcm9wKCdpZCcpO1xyXG5cclxuXHRcdFx0aWYgKCFwYXJlbnRMYWJlbC5sZW5ndGggJiYgZWxlbWVudElkKSB7XHJcblx0XHRcdFx0cGFyZW50TGFiZWwgPSAkKCdsYWJlbFtmb3I9XCInICsgZWxlbWVudElkICsgJ1wiXScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnRMYWJlbC5sZW5ndGggPyBwYXJlbnRMYWJlbCA6IG51bGw7XHJcblx0XHR9LFxyXG5cdFx0cmVmcmVzaFJhZGlvR3JvdXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZWRyYXcgY3VycmVudCByYWRpbyBhbmQgaXRzIGdyb3VwXHJcblx0XHRcdHRoaXMuZ2V0UmFkaW9Hcm91cCh0aGlzLnJlYWxFbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGpjZi5yZWZyZXNoKHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVkcmF3IGN1cnJlbnQgcmFkaW8gYnV0dG9uXHJcblx0XHRcdHZhciBpc0NoZWNrZWQgPSB0aGlzLnJlYWxFbGVtZW50LmlzKCc6Y2hlY2tlZCcpLFxyXG5cdFx0XHRcdGlzRGlzYWJsZWQgPSB0aGlzLnJlYWxFbGVtZW50LmlzKCc6ZGlzYWJsZWQnKTtcclxuXHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmNoZWNrZWRDbGFzcywgaXNDaGVja2VkKVxyXG5cdFx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMudW5jaGVja2VkQ2xhc3MsICFpc0NoZWNrZWQpXHJcblx0XHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzLCBpc0Rpc2FibGVkKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmxhYmVsRWxlbWVudCkge1xyXG5cdFx0XHRcdHRoaXMubGFiZWxFbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5sYWJlbEFjdGl2ZUNsYXNzLCBpc0NoZWNrZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlc3RvcmUgc3RydWN0dXJlXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZmFrZUVsZW1lbnQpLmNzcyh7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJycsXHJcblx0XHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0XHRoZWlnaHQ6ICcnLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogJycsXHJcblx0XHRcdFx0XHRtYXJnaW46ICcnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuaGlkZGVuQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZW1vdmluZyBlbGVtZW50IHdpbGwgYWxzbyByZW1vdmUgaXRzIGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQub2ZmKCdqY2YtcG9pbnRlcmRvd24nLCB0aGlzLm9uUHJlc3MpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0Ly8gcmVtb3ZlIG90aGVyIGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdHRoaXMuZG9jLm9mZignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25SZWxlYXNlKTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoe1xyXG5cdFx0XHRcdGJsdXI6IHRoaXMub25CbHVyLFxyXG5cdFx0XHRcdGZvY3VzOiB0aGlzLm9uRm9jdXMsXHJcblx0XHRcdFx0Y2xpY2s6IHRoaXMub25SZWFsQ2xpY2tcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxufSk7XHJcblxyXG59KGpjZikpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBEOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vamNmL2pzL2pjZi5yYWRpby5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXHJcbiAqIEphdmFTY3JpcHQgQ3VzdG9tIEZvcm1zIDogUmFuZ2UgTW9kdWxlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgUFNEMkhUTUwgLSBodHRwOi8vcHNkMmh0bWwuY29tL2pjZlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKExJQ0VOU0UudHh0KVxyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjIuM1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbihqY2YpIHtcclxuXHJcbmpjZi5hZGRNb2R1bGUoZnVuY3Rpb24oJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6ICdSYW5nZScsXHJcblx0XHRzZWxlY3RvcjogJ2lucHV0W3R5cGU9XCJyYW5nZVwiXScsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHJlYWxFbGVtZW50Q2xhc3M6ICdqY2YtcmVhbC1lbGVtZW50JyxcclxuXHRcdFx0ZmFrZVN0cnVjdHVyZTogJzxzcGFuIGNsYXNzPVwiamNmLXJhbmdlXCI+PHNwYW4gY2xhc3M9XCJqY2YtcmFuZ2Utd3JhcHBlclwiPjxzcGFuIGNsYXNzPVwiamNmLXJhbmdlLXRyYWNrXCI+PHNwYW4gY2xhc3M9XCJqY2YtcmFuZ2UtaGFuZGxlXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPicsXHJcblx0XHRcdGRhdGFMaXN0TWFyazogJzxzcGFuIGNsYXNzPVwiamNmLXJhbmdlLW1hcmtcIj48L3NwYW4+JyxcclxuXHRcdFx0cmFuZ2VEaXNwbGF5V3JhcHBlcjogJzxzcGFuIGNsYXNzPVwiamNmLXJhbmdlLWRpc3BsYXktd3JhcHBlclwiPjwvc3Bhbj4nLFxyXG5cdFx0XHRyYW5nZURpc3BsYXk6ICc8c3BhbiBjbGFzcz1cImpjZi1yYW5nZS1kaXNwbGF5XCI+PC9zcGFuPicsXHJcblx0XHRcdGhhbmRsZVNlbGVjdG9yOiAnLmpjZi1yYW5nZS1oYW5kbGUnLFxyXG5cdFx0XHR0cmFja1NlbGVjdG9yOiAnLmpjZi1yYW5nZS10cmFjaycsXHJcblx0XHRcdGFjdGl2ZUhhbmRsZUNsYXNzOiAnamNmLWFjdGl2ZS1oYW5kbGUnLFxyXG5cdFx0XHR2ZXJ0aWNhbENsYXNzOiAnamNmLXZlcnRpY2FsJyxcclxuXHRcdFx0b3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcclxuXHRcdFx0cmFuZ2U6IGZhbHNlLCAvLyBvciBcIm1pblwiLCBcIm1heFwiLCBcImFsbFwiXHJcblx0XHRcdGRyYWdIYW5kbGVDZW50ZXI6IHRydWUsXHJcblx0XHRcdHNuYXBUb01hcmtzOiB0cnVlLFxyXG5cdFx0XHRzbmFwUmFkaXVzOiA1LFxyXG5cdFx0XHRtaW5SYW5nZTogMFxyXG5cdFx0fSxcclxuXHRcdG1hdGNoRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudC5pcyh0aGlzLnNlbGVjdG9yKTtcclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pbml0U3RydWN0dXJlKCk7XHJcblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdFx0fSxcclxuXHRcdGluaXRTdHJ1Y3R1cmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UgPSAkKCdodG1sJyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5lbGVtZW50KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaGlkZGVuQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZmFrZVN0cnVjdHVyZSkuaW5zZXJ0QmVmb3JlKHRoaXMucmVhbEVsZW1lbnQpLnByZXBlbmQodGhpcy5yZWFsRWxlbWVudCk7XHJcblx0XHRcdHRoaXMudHJhY2sgPSB0aGlzLmZha2VFbGVtZW50LmZpbmQodGhpcy5vcHRpb25zLnRyYWNrU2VsZWN0b3IpO1xyXG5cdFx0XHR0aGlzLnRyYWNrSG9sZGVyID0gdGhpcy50cmFjay5wYXJlbnQoKTtcclxuXHRcdFx0dGhpcy5oYW5kbGUgPSB0aGlzLmZha2VFbGVtZW50LmZpbmQodGhpcy5vcHRpb25zLmhhbmRsZVNlbGVjdG9yKTtcclxuXHRcdFx0dGhpcy5jcmVhdGVkSGFuZGxlQ291bnQgPSAwO1xyXG5cdFx0XHR0aGlzLmFjdGl2ZURyYWdIYW5kbGVJbmRleCA9IDA7XHJcblx0XHRcdHRoaXMuaXNNdWx0aXBsZSA9IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSB8fCB0eXBlb2YgdGhpcy5yZWFsRWxlbWVudC5hdHRyKCdtdWx0aXBsZScpID09PSAnc3RyaW5nJztcclxuXHRcdFx0dGhpcy52YWx1ZXMgPSB0aGlzLmlzTXVsdGlwbGUgPyB0aGlzLnJlYWxFbGVtZW50LmF0dHIoJ3ZhbHVlJykuc3BsaXQoJywnKSA6IFt0aGlzLnJlYWxFbGVtZW50LnZhbCgpXTtcclxuXHRcdFx0dGhpcy5oYW5kbGVDb3VudCA9IHRoaXMuaXNNdWx0aXBsZSA/IHRoaXMudmFsdWVzLmxlbmd0aCA6IDE7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgcmFuZ2UgZGlzcGxheVxyXG5cdFx0XHR0aGlzLnJhbmdlRGlzcGxheVdyYXBwZXIgPSAkKHRoaXMub3B0aW9ucy5yYW5nZURpc3BsYXlXcmFwcGVyKS5pbnNlcnRCZWZvcmUodGhpcy50cmFjayk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UgPT09ICdtaW4nIHx8IHRoaXMub3B0aW9ucy5yYW5nZSA9PT0gJ2FsbCcpIHtcclxuXHRcdFx0XHR0aGlzLnJhbmdlTWluID0gJCh0aGlzLm9wdGlvbnMucmFuZ2VEaXNwbGF5KS5hZGRDbGFzcygnamNmLXJhbmdlLW1pbicpLnByZXBlbmRUbyh0aGlzLnJhbmdlRGlzcGxheVdyYXBwZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UgPT09ICdtYXgnIHx8IHRoaXMub3B0aW9ucy5yYW5nZSA9PT0gJ2FsbCcpIHtcclxuXHRcdFx0XHR0aGlzLnJhbmdlTWF4ID0gJCh0aGlzLm9wdGlvbnMucmFuZ2VEaXNwbGF5KS5hZGRDbGFzcygnamNmLXJhbmdlLW1heCcpLnByZXBlbmRUbyh0aGlzLnJhbmdlRGlzcGxheVdyYXBwZXIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBjbG9uZSBoYW5kbGVzIGlmIG5lZWRlZFxyXG5cdFx0XHR3aGlsZSAodGhpcy5jcmVhdGVkSGFuZGxlQ291bnQgPCB0aGlzLmhhbmRsZUNvdW50KSB7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVkSGFuZGxlQ291bnQrKztcclxuXHRcdFx0XHR0aGlzLmhhbmRsZS5jbG9uZSgpLmFkZENsYXNzKCdqY2YtaW5kZXgtJyArIHRoaXMuY3JlYXRlZEhhbmRsZUNvdW50KS5pbnNlcnRCZWZvcmUodGhpcy5oYW5kbGUpO1xyXG5cclxuXHRcdFx0XHQvLyBjcmVhdGUgbWlkIHJhbmdlc1xyXG5cdFx0XHRcdGlmICh0aGlzLmNyZWF0ZWRIYW5kbGVDb3VudCA+IDEpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5yYW5nZU1pZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJhbmdlTWlkID0gJCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5yYW5nZU1pZCA9IHRoaXMucmFuZ2VNaWQuYWRkKCQodGhpcy5vcHRpb25zLnJhbmdlRGlzcGxheSkuYWRkQ2xhc3MoJ2pjZi1yYW5nZS1taWQnKS5wcmVwZW5kVG8odGhpcy5yYW5nZURpc3BsYXlXcmFwcGVyKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBncmFiIGFsbCBoYW5kbGVzXHJcblx0XHRcdHRoaXMuaGFuZGxlLmRldGFjaCgpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuaGFuZGxlcyA9IHRoaXMuZmFrZUVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMuaGFuZGxlU2VsZWN0b3IpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZXMuZXEoMCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUhhbmRsZUNsYXNzKTtcclxuXHJcblx0XHRcdC8vIGhhbmRsZSBvcmllbnRhdGlvblxyXG5cdFx0XHR0aGlzLmlzVmVydGljYWwgPSAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKTtcclxuXHRcdFx0dGhpcy5kaXJlY3Rpb25Qcm9wZXJ0eSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnO1xyXG5cdFx0XHR0aGlzLm9mZnNldFByb3BlcnR5ID0gdGhpcy5pc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XHJcblx0XHRcdHRoaXMuZXZlbnRQcm9wZXJ0eSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xyXG5cdFx0XHR0aGlzLnNpemVQcm9wZXJ0eSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcclxuXHRcdFx0dGhpcy5zaXplTWV0aG9kID0gdGhpcy5pc1ZlcnRpY2FsID8gJ2lubmVySGVpZ2h0JyA6ICdpbm5lcldpZHRoJztcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5jc3MoJ3RvdWNoQWN0aW9uJywgdGhpcy5pc1ZlcnRpY2FsID8gJ3Bhbi14JyA6ICdwYW4teScpO1xyXG5cdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMudmVydGljYWxDbGFzcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHNldCBpbml0aWFsIHZhbHVlc1xyXG5cdFx0XHR0aGlzLm1pblZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnJlYWxFbGVtZW50LmF0dHIoJ21pbicpKTtcclxuXHRcdFx0dGhpcy5tYXhWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5yZWFsRWxlbWVudC5hdHRyKCdtYXgnKSk7XHJcblx0XHRcdHRoaXMuc3RlcFZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnJlYWxFbGVtZW50LmF0dHIoJ3N0ZXAnKSkgfHwgMTtcclxuXHJcblx0XHRcdC8vIGNoZWNrIGF0dHJpYnV0ZSB2YWx1ZXNcclxuXHRcdFx0dGhpcy5taW5WYWx1ZSA9IGlzTmFOKHRoaXMubWluVmFsdWUpID8gMCA6IHRoaXMubWluVmFsdWU7XHJcblx0XHRcdHRoaXMubWF4VmFsdWUgPSBpc05hTih0aGlzLm1heFZhbHVlKSA/IDEwMCA6IHRoaXMubWF4VmFsdWU7XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgcmFuZ2VcclxuXHRcdFx0aWYgKHRoaXMuc3RlcFZhbHVlICE9PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5tYXhWYWx1ZSAtPSAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICUgdGhpcy5zdGVwVmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zdGVwc0NvdW50ID0gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvIHRoaXMuc3RlcFZhbHVlO1xyXG5cdFx0XHR0aGlzLmNyZWF0ZURhdGFMaXN0KCk7XHJcblx0XHR9LFxyXG5cdFx0YXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vbih7XHJcblx0XHRcdFx0Zm9jdXM6IHRoaXMub25Gb2N1c1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy50cmFja0hvbGRlci5vbignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vblRyYWNrUHJlc3MpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZXMub24oJ2pjZi1wb2ludGVyZG93bicsIHRoaXMub25IYW5kbGVQcmVzcyk7XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlRGF0YUxpc3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0ZGF0YVZhbHVlcyA9IFtdLFxyXG5cdFx0XHRcdGRhdGFMaXN0SWQgPSB0aGlzLnJlYWxFbGVtZW50LmF0dHIoJ2xpc3QnKTtcclxuXHJcblx0XHRcdGlmIChkYXRhTGlzdElkKSB7XHJcblx0XHRcdFx0JCgnIycgKyBkYXRhTGlzdElkKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIGl0ZW1WYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZSB8fCB0aGlzLmlubmVySFRNTCksXHJcblx0XHRcdFx0XHRcdG1hcmssIG1hcmtPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFpc05hTihpdGVtVmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdG1hcmtPZmZzZXQgPSBzZWxmLnZhbHVlVG9PZmZzZXQoaXRlbVZhbHVlKTtcclxuXHRcdFx0XHRcdFx0ZGF0YVZhbHVlcy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogaXRlbVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdG9mZnNldDogbWFya09mZnNldFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0bWFyayA9ICQoc2VsZi5vcHRpb25zLmRhdGFMaXN0TWFyaykudGV4dChpdGVtVmFsdWUpLmF0dHIoe1xyXG5cdFx0XHRcdFx0XHRcdCdkYXRhLW1hcmstdmFsdWUnOiBpdGVtVmFsdWVcclxuXHRcdFx0XHRcdFx0fSkuY3NzKHNlbGYub2Zmc2V0UHJvcGVydHksIG1hcmtPZmZzZXQgKyAnJScpLmFwcGVuZFRvKHNlbGYudHJhY2spO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChkYXRhVmFsdWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0c2VsZi5kYXRhVmFsdWVzID0gZGF0YVZhbHVlcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRnZXREcmFnSGFuZGxlUmFuZ2U6IGZ1bmN0aW9uKGhhbmRsZUluZGV4KSB7XHJcblx0XHRcdC8vIGNhbGN1bGF0ZSByYW5nZSBmb3Igc2xpZGVyIHdpdGggbXVsdGlwbGUgaGFuZGxlc1xyXG5cdFx0XHR2YXIgbWluU3RlcCA9IC1JbmZpbml0eSxcclxuXHRcdFx0XHRtYXhTdGVwID0gSW5maW5pdHk7XHJcblxyXG5cdFx0XHRpZiAoaGFuZGxlSW5kZXggPiAwKSB7XHJcblx0XHRcdFx0bWluU3RlcCA9IHRoaXMudmFsdWVUb1N0ZXBJbmRleChwYXJzZUZsb2F0KHRoaXMudmFsdWVzW2hhbmRsZUluZGV4IC0gMV0pICsgdGhpcy5vcHRpb25zLm1pblJhbmdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaGFuZGxlSW5kZXggPCB0aGlzLmhhbmRsZUNvdW50IC0gMSkge1xyXG5cdFx0XHRcdG1heFN0ZXAgPSB0aGlzLnZhbHVlVG9TdGVwSW5kZXgocGFyc2VGbG9hdCh0aGlzLnZhbHVlc1toYW5kbGVJbmRleCArIDFdKSAtIHRoaXMub3B0aW9ucy5taW5SYW5nZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWluU3RlcEluZGV4OiBtaW5TdGVwLFxyXG5cdFx0XHRcdG1heFN0ZXBJbmRleDogbWF4U3RlcFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGdldE5lYXJlc3RIYW5kbGU6IGZ1bmN0aW9uKHBlcmNlbnQpIHtcclxuXHRcdFx0Ly8gaGFuZGxlIHZlcnRpY2FsIHNsaWRlcnNcclxuXHRcdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gcGVyY2VudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZWN0IGNsb3Nlc3QgaGFuZGxlIHdoZW4gdHJhY2sgaXMgcHJlc3NlZFxyXG5cdFx0XHR2YXIgY2xvc2VzdEhhbmRsZSA9IHRoaXMuaGFuZGxlcy5lcSgwKSxcclxuXHRcdFx0XHRjbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eSxcclxuXHRcdFx0XHRzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICh0aGlzLmhhbmRsZUNvdW50ID4gMSkge1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIGhhbmRsZU9mZnNldCA9IHBhcnNlRmxvYXQodGhpcy5zdHlsZVtzZWxmLm9mZnNldFByb3BlcnR5XSkgLyAxMDAsXHJcblx0XHRcdFx0XHRcdGhhbmRsZURpc3RhbmNlID0gTWF0aC5hYnMoaGFuZGxlT2Zmc2V0IC0gcGVyY2VudCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhhbmRsZURpc3RhbmNlIDwgY2xvc2VzdERpc3RhbmNlKSB7XHJcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0YW5jZSA9IGhhbmRsZURpc3RhbmNlO1xyXG5cdFx0XHRcdFx0XHRjbG9zZXN0SGFuZGxlID0gJCh0aGlzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY2xvc2VzdEhhbmRsZTtcclxuXHRcdH0sXHJcblx0XHRvblRyYWNrUHJlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIHRyYWNrU2l6ZSwgdHJhY2tPZmZzZXQsIGlubmVyT2Zmc2V0O1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRpZiAoIXRoaXMucmVhbEVsZW1lbnQuaXMoJzpkaXNhYmxlZCcpICYmICF0aGlzLmFjdGl2ZURyYWdIYW5kbGUpIHtcclxuXHRcdFx0XHR0cmFja1NpemUgPSB0aGlzLnRyYWNrW3RoaXMuc2l6ZU1ldGhvZF0oKTtcclxuXHRcdFx0XHR0cmFja09mZnNldCA9IHRoaXMudHJhY2sub2Zmc2V0KClbdGhpcy5kaXJlY3Rpb25Qcm9wZXJ0eV07XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVEcmFnSGFuZGxlID0gdGhpcy5nZXROZWFyZXN0SGFuZGxlKChlW3RoaXMuZXZlbnRQcm9wZXJ0eV0gLSB0cmFja09mZnNldCkgLyB0aGlzLnRyYWNrSG9sZGVyW3RoaXMuc2l6ZU1ldGhvZF0oKSk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXggPSB0aGlzLmhhbmRsZXMuaW5kZXgodGhpcy5hY3RpdmVEcmFnSGFuZGxlKTtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZXMucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUhhbmRsZUNsYXNzKS5lcSh0aGlzLmFjdGl2ZURyYWdIYW5kbGVJbmRleCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUhhbmRsZUNsYXNzKTtcclxuXHRcdFx0XHRpbm5lck9mZnNldCA9IHRoaXMuYWN0aXZlRHJhZ0hhbmRsZVt0aGlzLnNpemVNZXRob2RdKCkgLyAyO1xyXG5cclxuXHRcdFx0XHR0aGlzLmRyYWdEYXRhID0ge1xyXG5cdFx0XHRcdFx0dHJhY2tTaXplOiB0cmFja1NpemUsXHJcblx0XHRcdFx0XHRpbm5lck9mZnNldDogaW5uZXJPZmZzZXQsXHJcblx0XHRcdFx0XHR0cmFja09mZnNldDogdHJhY2tPZmZzZXQsXHJcblx0XHRcdFx0XHRtaW46IHRyYWNrT2Zmc2V0LFxyXG5cdFx0XHRcdFx0bWF4OiB0cmFja09mZnNldCArIHRyYWNrU2l6ZVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5wYWdlLm9uKHtcclxuXHRcdFx0XHRcdCdqY2YtcG9pbnRlcm1vdmUnOiB0aGlzLm9uSGFuZGxlTW92ZSxcclxuXHRcdFx0XHRcdCdqY2YtcG9pbnRlcnVwJzogdGhpcy5vbkhhbmRsZVJlbGVhc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcclxuXHRcdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMub25IYW5kbGVNb3ZlKGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25IYW5kbGVQcmVzczogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgdHJhY2tTaXplLCB0cmFja09mZnNldCwgaW5uZXJPZmZzZXQ7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGlmICghdGhpcy5yZWFsRWxlbWVudC5pcygnOmRpc2FibGVkJykgJiYgIXRoaXMuYWN0aXZlRHJhZ0hhbmRsZSkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlRHJhZ0hhbmRsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZURyYWdIYW5kbGVJbmRleCA9IHRoaXMuaGFuZGxlcy5pbmRleCh0aGlzLmFjdGl2ZURyYWdIYW5kbGUpO1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlcy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlSGFuZGxlQ2xhc3MpLmVxKHRoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlSGFuZGxlQ2xhc3MpO1xyXG5cdFx0XHRcdHRyYWNrU2l6ZSA9IHRoaXMudHJhY2tbdGhpcy5zaXplTWV0aG9kXSgpO1xyXG5cdFx0XHRcdHRyYWNrT2Zmc2V0ID0gdGhpcy50cmFjay5vZmZzZXQoKVt0aGlzLmRpcmVjdGlvblByb3BlcnR5XTtcclxuXHRcdFx0XHRpbm5lck9mZnNldCA9IHRoaXMub3B0aW9ucy5kcmFnSGFuZGxlQ2VudGVyID8gdGhpcy5hY3RpdmVEcmFnSGFuZGxlW3RoaXMuc2l6ZU1ldGhvZF0oKSAvIDIgOiBlW3RoaXMuZXZlbnRQcm9wZXJ0eV0gLSB0aGlzLmhhbmRsZS5vZmZzZXQoKVt0aGlzLmRpcmVjdGlvblByb3BlcnR5XTtcclxuXHJcblx0XHRcdFx0dGhpcy5kcmFnRGF0YSA9IHtcclxuXHRcdFx0XHRcdHRyYWNrU2l6ZTogdHJhY2tTaXplLFxyXG5cdFx0XHRcdFx0aW5uZXJPZmZzZXQ6IGlubmVyT2Zmc2V0LFxyXG5cdFx0XHRcdFx0dHJhY2tPZmZzZXQ6IHRyYWNrT2Zmc2V0LFxyXG5cdFx0XHRcdFx0bWluOiB0cmFja09mZnNldCxcclxuXHRcdFx0XHRcdG1heDogdHJhY2tPZmZzZXQgKyB0cmFja1NpemVcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMucGFnZS5vbih7XHJcblx0XHRcdFx0XHQnamNmLXBvaW50ZXJtb3ZlJzogdGhpcy5vbkhhbmRsZU1vdmUsXHJcblx0XHRcdFx0XHQnamNmLXBvaW50ZXJ1cCc6IHRoaXMub25IYW5kbGVSZWxlYXNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25IYW5kbGVNb3ZlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRuZXdPZmZzZXQsIGRyYWdQZXJjZW50LCBzdGVwSW5kZXgsIHZhbHVlUGVyY2VudCwgaGFuZGxlRHJhZ1JhbmdlO1xyXG5cclxuXHRcdFx0Ly8gY2FsY3VsYXRlIG9mZnNldFxyXG5cdFx0XHRpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcblx0XHRcdFx0bmV3T2Zmc2V0ID0gdGhpcy5kcmFnRGF0YS5tYXggKyAodGhpcy5kcmFnRGF0YS5taW4gLSBlW3RoaXMuZXZlbnRQcm9wZXJ0eV0pIC0gdGhpcy5kcmFnRGF0YS5pbm5lck9mZnNldDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXdPZmZzZXQgPSBlW3RoaXMuZXZlbnRQcm9wZXJ0eV0gLSB0aGlzLmRyYWdEYXRhLmlubmVyT2Zmc2V0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBmaXQgaW4gcmFuZ2VcclxuXHRcdFx0aWYgKG5ld09mZnNldCA8IHRoaXMuZHJhZ0RhdGEubWluKSB7XHJcblx0XHRcdFx0bmV3T2Zmc2V0ID0gdGhpcy5kcmFnRGF0YS5taW47XHJcblx0XHRcdH0gZWxzZSBpZiAobmV3T2Zmc2V0ID4gdGhpcy5kcmFnRGF0YS5tYXgpIHtcclxuXHRcdFx0XHRuZXdPZmZzZXQgPSB0aGlzLmRyYWdEYXRhLm1heDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNuYXBUb01hcmtzICYmIHRoaXMuZGF0YVZhbHVlcykge1xyXG5cdFx0XHRcdC8vIHNuYXAgaGFuZGxlIHRvIG1hcmtzXHJcblx0XHRcdFx0dmFyIGRyYWdPZmZzZXQgPSBuZXdPZmZzZXQgLSB0aGlzLmRyYWdEYXRhLnRyYWNrT2Zmc2V0O1xyXG5cdFx0XHRcdGRyYWdQZXJjZW50ID0gKG5ld09mZnNldCAtIHRoaXMuZHJhZ0RhdGEudHJhY2tPZmZzZXQpIC8gdGhpcy5kcmFnRGF0YS50cmFja1NpemUgKiAxMDA7XHJcblxyXG5cdFx0XHRcdCQuZWFjaCh0aGlzLmRhdGFWYWx1ZXMsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcblx0XHRcdFx0XHR2YXIgbWFya09mZnNldCA9IGl0ZW0ub2Zmc2V0IC8gMTAwICogc2VsZi5kcmFnRGF0YS50cmFja1NpemUsXHJcblx0XHRcdFx0XHRcdG1hcmtNaW4gPSBtYXJrT2Zmc2V0IC0gc2VsZi5vcHRpb25zLnNuYXBSYWRpdXMsXHJcblx0XHRcdFx0XHRcdG1hcmtNYXggPSBtYXJrT2Zmc2V0ICsgc2VsZi5vcHRpb25zLnNuYXBSYWRpdXM7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRyYWdPZmZzZXQgPj0gbWFya01pbiAmJiBkcmFnT2Zmc2V0IDw9IG1hcmtNYXgpIHtcclxuXHRcdFx0XHRcdFx0ZHJhZ1BlcmNlbnQgPSBpdGVtLm9mZnNldDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNuYXAgaGFuZGxlIHRvIHN0ZXBzXHJcblx0XHRcdFx0ZHJhZ1BlcmNlbnQgPSAobmV3T2Zmc2V0IC0gdGhpcy5kcmFnRGF0YS50cmFja09mZnNldCkgLyB0aGlzLmRyYWdEYXRhLnRyYWNrU2l6ZSAqIDEwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gbW92ZSBoYW5kbGUgb25seSBpbiByYW5nZVxyXG5cdFx0XHRzdGVwSW5kZXggPSBNYXRoLnJvdW5kKGRyYWdQZXJjZW50ICogdGhpcy5zdGVwc0NvdW50IC8gMTAwKTtcclxuXHRcdFx0aWYgKHRoaXMuaGFuZGxlQ291bnQgPiAxKSB7XHJcblx0XHRcdFx0aGFuZGxlRHJhZ1JhbmdlID0gdGhpcy5nZXREcmFnSGFuZGxlUmFuZ2UodGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXgpO1xyXG5cdFx0XHRcdGlmIChzdGVwSW5kZXggPCBoYW5kbGVEcmFnUmFuZ2UubWluU3RlcEluZGV4KSB7XHJcblx0XHRcdFx0XHRzdGVwSW5kZXggPSBNYXRoLm1heChoYW5kbGVEcmFnUmFuZ2UubWluU3RlcEluZGV4LCBzdGVwSW5kZXgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RlcEluZGV4ID4gaGFuZGxlRHJhZ1JhbmdlLm1heFN0ZXBJbmRleCkge1xyXG5cdFx0XHRcdFx0c3RlcEluZGV4ID0gTWF0aC5taW4oaGFuZGxlRHJhZ1JhbmdlLm1heFN0ZXBJbmRleCwgc3RlcEluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsdWVQZXJjZW50ID0gc3RlcEluZGV4ICogKDEwMCAvIHRoaXMuc3RlcHNDb3VudCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5kcmFnRGF0YS5zdGVwSW5kZXggIT09IHN0ZXBJbmRleCkge1xyXG5cdFx0XHRcdHRoaXMuZHJhZ0RhdGEuc3RlcEluZGV4ID0gc3RlcEluZGV4O1xyXG5cdFx0XHRcdHRoaXMuZHJhZ0RhdGEub2Zmc2V0ID0gdmFsdWVQZXJjZW50O1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlRHJhZ0hhbmRsZS5jc3ModGhpcy5vZmZzZXRQcm9wZXJ0eSwgdGhpcy5kcmFnRGF0YS5vZmZzZXQgKyAnJScpO1xyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdmFsdWUocykgYW5kIHRyaWdnZXIgXCJpbnB1dFwiIGV2ZW50XHJcblx0XHRcdFx0dGhpcy52YWx1ZXNbdGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXhdID0gJycgKyB0aGlzLnN0ZXBJbmRleFRvVmFsdWUoc3RlcEluZGV4KTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVZhbHVlcygpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQudHJpZ2dlcignaW5wdXQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uSGFuZGxlUmVsZWFzZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuZXdWYWx1ZTtcclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmRyYWdEYXRhLm9mZnNldCA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IHRoaXMuc3RlcEluZGV4VG9WYWx1ZSh0aGlzLmRyYWdEYXRhLnN0ZXBJbmRleCk7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnBhZ2Uub2ZmKHtcclxuXHRcdFx0XHQnamNmLXBvaW50ZXJtb3ZlJzogdGhpcy5vbkhhbmRsZU1vdmUsXHJcblx0XHRcdFx0J2pjZi1wb2ludGVydXAnOiB0aGlzLm9uSGFuZGxlUmVsZWFzZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuYWN0aXZlRHJhZ0hhbmRsZTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZHJhZ0RhdGE7XHJcblx0XHR9LFxyXG5cdFx0b25Gb2N1czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghdGhpcy5mYWtlRWxlbWVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcykpIHtcclxuXHRcdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5mb2N1c0NsYXNzKTtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKHtcclxuXHRcdFx0XHRcdGJsdXI6IHRoaXMub25CbHVyLFxyXG5cdFx0XHRcdFx0a2V5ZG93bjogdGhpcy5vbktleVByZXNzXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkJsdXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mb2N1c0NsYXNzKTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoe1xyXG5cdFx0XHRcdGJsdXI6IHRoaXMub25CbHVyLFxyXG5cdFx0XHRcdGtleWRvd246IHRoaXMub25LZXlQcmVzc1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvbktleVByZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciBpbmNWYWx1ZSA9IChlLndoaWNoID09PSAzOCB8fCBlLndoaWNoID09PSAzOSksXHJcblx0XHRcdFx0ZGVjVmFsdWUgPSAoZS53aGljaCA9PT0gMzcgfHwgZS53aGljaCA9PT0gNDApO1xyXG5cclxuXHRcdFx0Ly8gaGFuZGxlIFRBQiBrZXkgaW4gc2xpZGVyIHdpdGggbXVsdGlwbGUgaGFuZGxlc1xyXG5cdFx0XHRpZiAoZS53aGljaCA9PT0gOSAmJiB0aGlzLmhhbmRsZUNvdW50ID4gMSkge1xyXG5cdFx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIHRoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4ID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXgtLTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIHRoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4IDwgdGhpcy5oYW5kbGVDb3VudCAtIDEpIHtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4Kys7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuaGFuZGxlcy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlSGFuZGxlQ2xhc3MpLmVxKHRoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlSGFuZGxlQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgY3Vyc29yIGtleXNcclxuXHRcdFx0aWYgKGRlY1ZhbHVlIHx8IGluY1ZhbHVlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuc3RlcChpbmNWYWx1ZSA/IHRoaXMuc3RlcFZhbHVlIDogLXRoaXMuc3RlcFZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZVZhbHVlczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzLmpvaW4oJywnKTtcclxuXHRcdFx0aWYgKHRoaXMudmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LnByb3AoJ3ZhbHVlTG93JywgdGhpcy52YWx1ZXNbMF0pO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucHJvcCgndmFsdWVIaWdoJywgdGhpcy52YWx1ZXNbdGhpcy52YWx1ZXMubGVuZ3RoIC0gMV0pO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQudmFsKHZhbHVlKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgYnJvd3NlciBkb2VzIG5vdCBhY2NlcHQgbXVsdGlwbGUgdmFsdWVzIHNldCBvbmx5IG9uZVxyXG5cdFx0XHRcdGlmICh0aGlzLnJlYWxFbGVtZW50LnZhbCgpICE9PSB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC52YWwodGhpcy52YWx1ZXNbdGhpcy52YWx1ZXMubGVuZ3RoIC0gMV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LnZhbCh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMudXBkYXRlUmFuZ2VzKCk7XHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlUmFuZ2VzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gdXBkYXRlIGRpc3BsYXkgcmFuZ2VzXHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRoYW5kbGU7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5yYW5nZU1pbikge1xyXG5cdFx0XHRcdGhhbmRsZSA9IHRoaXMuaGFuZGxlc1swXTtcclxuXHRcdFx0XHR0aGlzLnJhbmdlTWluLmNzcyh0aGlzLm9mZnNldFByb3BlcnR5LCAwKS5jc3ModGhpcy5zaXplUHJvcGVydHksIGhhbmRsZS5zdHlsZVt0aGlzLm9mZnNldFByb3BlcnR5XSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMucmFuZ2VNYXgpIHtcclxuXHRcdFx0XHRoYW5kbGUgPSB0aGlzLmhhbmRsZXNbdGhpcy5oYW5kbGVzLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHRcdHRoaXMucmFuZ2VNYXguY3NzKHRoaXMub2Zmc2V0UHJvcGVydHksIGhhbmRsZS5zdHlsZVt0aGlzLm9mZnNldFByb3BlcnR5XSkuY3NzKHRoaXMuc2l6ZVByb3BlcnR5LCAxMDAgLSBwYXJzZUZsb2F0KGhhbmRsZS5zdHlsZVt0aGlzLm9mZnNldFByb3BlcnR5XSkgKyAnJScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnJhbmdlTWlkKSB7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGN1ckhhbmRsZSkge1xyXG5cdFx0XHRcdFx0dmFyIHByZXZIYW5kbGUsIG1pZEJveDtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHtcclxuXHRcdFx0XHRcdFx0cHJldkhhbmRsZSA9IHNlbGYuaGFuZGxlc1tpbmRleCAtIDFdO1xyXG5cdFx0XHRcdFx0XHRtaWRCb3ggPSBzZWxmLnJhbmdlTWlkW2luZGV4IC0gMV07XHJcblx0XHRcdFx0XHRcdG1pZEJveC5zdHlsZVtzZWxmLm9mZnNldFByb3BlcnR5XSA9IHByZXZIYW5kbGUuc3R5bGVbc2VsZi5vZmZzZXRQcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdG1pZEJveC5zdHlsZVtzZWxmLnNpemVQcm9wZXJ0eV0gPSBwYXJzZUZsb2F0KGN1ckhhbmRsZS5zdHlsZVtzZWxmLm9mZnNldFByb3BlcnR5XSkgLSBwYXJzZUZsb2F0KHByZXZIYW5kbGUuc3R5bGVbc2VsZi5vZmZzZXRQcm9wZXJ0eV0pICsgJyUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c3RlcDogZnVuY3Rpb24oY2hhbmdlVmFsdWUpIHtcclxuXHRcdFx0dmFyIG9yaWdpbmFsVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMudmFsdWVzW3RoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4IHx8IDBdKSxcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IG9yaWdpbmFsVmFsdWUsXHJcblx0XHRcdFx0bWluVmFsdWUgPSB0aGlzLm1pblZhbHVlLFxyXG5cdFx0XHRcdG1heFZhbHVlID0gdGhpcy5tYXhWYWx1ZTtcclxuXHJcblx0XHRcdGlmIChpc05hTihvcmlnaW5hbFZhbHVlKSkge1xyXG5cdFx0XHRcdG5ld1ZhbHVlID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV3VmFsdWUgKz0gY2hhbmdlVmFsdWU7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5oYW5kbGVDb3VudCA+IDEpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXggPiAwKSB7XHJcblx0XHRcdFx0XHRtaW5WYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZXNbdGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXggLSAxXSkgKyB0aGlzLm9wdGlvbnMubWluUmFuZ2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmFjdGl2ZURyYWdIYW5kbGVJbmRleCA8IHRoaXMuaGFuZGxlQ291bnQgLSAxKSB7XHJcblx0XHRcdFx0XHRtYXhWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZXNbdGhpcy5hY3RpdmVEcmFnSGFuZGxlSW5kZXggKyAxXSkgLSB0aGlzLm9wdGlvbnMubWluUmFuZ2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV3VmFsdWUgPiBtYXhWYWx1ZSkge1xyXG5cdFx0XHRcdG5ld1ZhbHVlID0gbWF4VmFsdWU7XHJcblx0XHRcdH0gZWxzZSBpZiAobmV3VmFsdWUgPCBtaW5WYWx1ZSkge1xyXG5cdFx0XHRcdG5ld1ZhbHVlID0gbWluVmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gb3JpZ2luYWxWYWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMudmFsdWVzW3RoaXMuYWN0aXZlRHJhZ0hhbmRsZUluZGV4IHx8IDBdID0gJycgKyBuZXdWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVZhbHVlcygpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR0aGlzLnNldFNsaWRlclZhbHVlKHRoaXMudmFsdWVzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHZhbHVlVG9TdGVwSW5kZXg6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdHJldHVybiAodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvIHRoaXMuc3RlcFZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHN0ZXBJbmRleFRvVmFsdWU6IGZ1bmN0aW9uKHN0ZXBJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5taW5WYWx1ZSArIHRoaXMuc3RlcFZhbHVlICogc3RlcEluZGV4O1xyXG5cdFx0fSxcclxuXHRcdHZhbHVlVG9PZmZzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdHZhciByYW5nZSA9IHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlLFxyXG5cdFx0XHRcdHBlcmNlbnQgPSAodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvIHJhbmdlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHBlcmNlbnQgKiAxMDA7XHJcblx0XHR9LFxyXG5cdFx0Z2V0U2xpZGVyVmFsdWU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy52YWx1ZXMsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHNldFNsaWRlclZhbHVlOiBmdW5jdGlvbih2YWx1ZXMpIHtcclxuXHRcdFx0Ly8gc2V0IGhhbmRsZSBwb3NpdGlvbiBhY2NvcmRpb24gYWNjb3JkaW5nIHRvIHZhbHVlXHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dGhpcy5oYW5kbGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGhhbmRsZSkge1xyXG5cdFx0XHRcdGhhbmRsZS5zdHlsZVtzZWxmLm9mZnNldFByb3BlcnR5XSA9IHNlbGYudmFsdWVUb09mZnNldCh2YWx1ZXNbaW5kZXhdKSArICclJztcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0cmVmcmVzaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGhhbmRsZSBkaXNhYmxlZCBzdGF0ZVxyXG5cdFx0XHR2YXIgaXNEaXNhYmxlZCA9IHRoaXMucmVhbEVsZW1lbnQuaXMoJzpkaXNhYmxlZCcpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzLCBpc0Rpc2FibGVkKTtcclxuXHJcblx0XHRcdC8vIHJlZnJlc2ggaGFuZGxlIHBvc2l0aW9uIGFjY29yZGluZyB0byBjdXJyZW50IHZhbHVlXHJcblx0XHRcdHRoaXMuc2V0U2xpZGVyVmFsdWUodGhpcy5nZXRTbGlkZXJWYWx1ZSgpKTtcclxuXHRcdFx0dGhpcy51cGRhdGVSYW5nZXMoKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuaGlkZGVuQ2xhc3MpLmluc2VydEJlZm9yZSh0aGlzLmZha2VFbGVtZW50KTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub2ZmKHtcclxuXHRcdFx0XHRrZXlkb3duOiB0aGlzLm9uS2V5UHJlc3MsXHJcblx0XHRcdFx0Zm9jdXM6IHRoaXMub25Gb2N1cyxcclxuXHRcdFx0XHRibHVyOiB0aGlzLm9uQmx1clxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG59KTtcclxuXHJcbn0oamNmKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEQ6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLnJhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcclxuICogSmF2YVNjcmlwdCBDdXN0b20gRm9ybXMgOiBTY3JvbGxiYXIgTW9kdWxlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgUFNEMkhUTUwgLSBodHRwOi8vcHNkMmh0bWwuY29tL2pjZlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKExJQ0VOU0UudHh0KVxyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjIuM1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbihqY2YpIHtcclxuXHJcbmpjZi5hZGRNb2R1bGUoZnVuY3Rpb24oJCwgd2luZG93KSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgbW9kdWxlID0ge1xyXG5cdFx0bmFtZTogJ1Njcm9sbGFibGUnLFxyXG5cdFx0c2VsZWN0b3I6ICcuamNmLXNjcm9sbGFibGUnLFxyXG5cdFx0cGx1Z2luczoge1xyXG5cdFx0XHRTY3JvbGxCYXI6IFNjcm9sbEJhclxyXG5cdFx0fSxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0bW91c2VXaGVlbFN0ZXA6IDE1MCxcclxuXHRcdFx0aGFuZGxlUmVzaXplOiB0cnVlLFxyXG5cdFx0XHRhbHdheXNTaG93U2Nyb2xsYmFyczogZmFsc2UsXHJcblx0XHRcdGFsd2F5c1ByZXZlbnRNb3VzZVdoZWVsOiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsQXJlYVN0cnVjdHVyZTogJzxkaXYgY2xhc3M9XCJqY2Ytc2Nyb2xsYWJsZS13cmFwcGVyXCI+PC9kaXY+J1xyXG5cdFx0fSxcclxuXHRcdG1hdGNoRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudC5pcygnLmpjZi1zY3JvbGxhYmxlJyk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaW5pdFN0cnVjdHVyZSgpO1xyXG5cdFx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLnJlYnVpbGRTY3JvbGxiYXJzKCk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdFN0cnVjdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHByZXBhcmUgc3RydWN0dXJlXHJcblx0XHRcdHRoaXMuZG9jID0gJChkb2N1bWVudCk7XHJcblx0XHRcdHRoaXMud2luID0gJCh3aW5kb3cpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZWxlbWVudCk7XHJcblx0XHRcdHRoaXMuc2Nyb2xsV3JhcHBlciA9ICQodGhpcy5vcHRpb25zLnNjcm9sbEFyZWFTdHJ1Y3R1cmUpLmluc2VydEFmdGVyKHRoaXMucmVhbEVsZW1lbnQpO1xyXG5cclxuXHRcdFx0Ly8gc2V0IGluaXRpYWwgc3R5bGVzXHJcblx0XHRcdHRoaXMuc2Nyb2xsV3JhcHBlci5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHRcdFx0dGhpcy52QmFyRWRnZSA9IDA7XHJcblx0XHR9LFxyXG5cdFx0YXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gY3JlYXRlIHNjcm9sbGJhcnNcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLnZCYXIgPSBuZXcgU2Nyb2xsQmFyKHtcclxuXHRcdFx0XHRob2xkZXI6IHRoaXMuc2Nyb2xsV3JhcHBlcixcclxuXHRcdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdFx0XHRvblNjcm9sbDogZnVuY3Rpb24oc2Nyb2xsVG9wKSB7XHJcblx0XHRcdFx0XHRzZWxmLnJlYWxFbGVtZW50LnNjcm9sbFRvcChzY3JvbGxUb3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuaEJhciA9IG5ldyBTY3JvbGxCYXIoe1xyXG5cdFx0XHRcdGhvbGRlcjogdGhpcy5zY3JvbGxXcmFwcGVyLFxyXG5cdFx0XHRcdHZlcnRpY2FsOiBmYWxzZSxcclxuXHRcdFx0XHRvblNjcm9sbDogZnVuY3Rpb24oc2Nyb2xsTGVmdCkge1xyXG5cdFx0XHRcdFx0c2VsZi5yZWFsRWxlbWVudC5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgZXZlbnQgaGFuZGxlcnNcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vbignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlUmVzaXplKSB7XHJcblx0XHRcdFx0dGhpcy53aW4ub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBsb2FkJywgdGhpcy5vblJlc2l6ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFkZCBwb2ludGVyL3doZWVsIGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oJ2pjZi1tb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKCdqY2YtcG9pbnRlcmRvd24nLCB0aGlzLm9uVG91Y2hCb2R5KTtcclxuXHRcdH0sXHJcblx0XHRvblNjcm9sbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMucmVkcmF3U2Nyb2xsYmFycygpO1xyXG5cdFx0fSxcclxuXHRcdG9uUmVzaXplOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZG8gbm90IHJlYnVpbGQgc2Nyb2xsYmFycyBpZiBmb3JtIGZpZWxkIGlzIGluIGZvY3VzXHJcblx0XHRcdGlmICghJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcygnOmlucHV0JykpIHtcclxuXHRcdFx0XHR0aGlzLnJlYnVpbGRTY3JvbGxiYXJzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblRvdWNoQm9keTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJykge1xyXG5cdFx0XHRcdHRoaXMudG91Y2hEYXRhID0ge1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiB0aGlzLnJlYWxFbGVtZW50LnNjcm9sbFRvcCgpLFxyXG5cdFx0XHRcdFx0c2Nyb2xsTGVmdDogdGhpcy5yZWFsRWxlbWVudC5zY3JvbGxMZWZ0KCksXHJcblx0XHRcdFx0XHRsZWZ0OiBlLnBhZ2VYLFxyXG5cdFx0XHRcdFx0dG9wOiBlLnBhZ2VZXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLmRvYy5vbih7XHJcblx0XHRcdFx0XHQnamNmLXBvaW50ZXJtb3ZlJzogdGhpcy5vbk1vdmVCb2R5LFxyXG5cdFx0XHRcdFx0J2pjZi1wb2ludGVydXAnOiB0aGlzLm9uUmVsZWFzZUJvZHlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTW92ZUJvZHk6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIHRhcmdldFNjcm9sbFRvcCxcclxuXHRcdFx0XHR0YXJnZXRTY3JvbGxMZWZ0LFxyXG5cdFx0XHRcdHZlcnRpY2FsU2Nyb2xsQWxsb3dlZCA9IHRoaXMudmVydGljYWxTY3JvbGxBY3RpdmUsXHJcblx0XHRcdFx0aG9yaXpvbnRhbFNjcm9sbEFsbG93ZWQgPSB0aGlzLmhvcml6b250YWxTY3JvbGxBY3RpdmU7XHJcblxyXG5cdFx0XHRpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJykge1xyXG5cdFx0XHRcdHRhcmdldFNjcm9sbFRvcCA9IHRoaXMudG91Y2hEYXRhLnNjcm9sbFRvcCAtIGUucGFnZVkgKyB0aGlzLnRvdWNoRGF0YS50b3A7XHJcblx0XHRcdFx0dGFyZ2V0U2Nyb2xsTGVmdCA9IHRoaXMudG91Y2hEYXRhLnNjcm9sbExlZnQgLSBlLnBhZ2VYICsgdGhpcy50b3VjaERhdGEubGVmdDtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgdGhhdCBzY3JvbGxpbmcgaXMgZW5kZWQgYW5kIHJlbGVhc2Ugb3V0ZXIgc2Nyb2xsaW5nXHJcblx0XHRcdFx0aWYgKHRoaXMudmVydGljYWxTY3JvbGxBY3RpdmUgJiYgKHRhcmdldFNjcm9sbFRvcCA8IDAgfHwgdGFyZ2V0U2Nyb2xsVG9wID4gdGhpcy52QmFyLm1heFZhbHVlKSkge1xyXG5cdFx0XHRcdFx0dmVydGljYWxTY3JvbGxBbGxvd2VkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmhvcml6b250YWxTY3JvbGxBY3RpdmUgJiYgKHRhcmdldFNjcm9sbExlZnQgPCAwIHx8IHRhcmdldFNjcm9sbExlZnQgPiB0aGlzLmhCYXIubWF4VmFsdWUpKSB7XHJcblx0XHRcdFx0XHRob3Jpem9udGFsU2Nyb2xsQWxsb3dlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5zY3JvbGxUb3AodGFyZ2V0U2Nyb2xsVG9wKTtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LnNjcm9sbExlZnQodGFyZ2V0U2Nyb2xsTGVmdCk7XHJcblxyXG5cdFx0XHRcdGlmICh2ZXJ0aWNhbFNjcm9sbEFsbG93ZWQgfHwgaG9yaXpvbnRhbFNjcm9sbEFsbG93ZWQpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5vblJlbGVhc2VCb2R5KGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVsZWFzZUJvZHk6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUucG9pbnRlclR5cGUgPT09ICd0b3VjaCcpIHtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy50b3VjaERhdGE7XHJcblx0XHRcdFx0dGhpcy5kb2Mub2ZmKHtcclxuXHRcdFx0XHRcdCdqY2YtcG9pbnRlcm1vdmUnOiB0aGlzLm9uTW92ZUJvZHksXHJcblx0XHRcdFx0XHQnamNmLXBvaW50ZXJ1cCc6IHRoaXMub25SZWxlYXNlQm9keVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Nb3VzZVdoZWVsOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciBjdXJyZW50U2Nyb2xsVG9wID0gdGhpcy5yZWFsRWxlbWVudC5zY3JvbGxUb3AoKSxcclxuXHRcdFx0XHRjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMucmVhbEVsZW1lbnQuc2Nyb2xsTGVmdCgpLFxyXG5cdFx0XHRcdG1heFNjcm9sbFRvcCA9IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnc2Nyb2xsSGVpZ2h0JykgLSB0aGlzLmVtYmVkZGVkRGltZW5zaW9ucy5pbm5lckhlaWdodCxcclxuXHRcdFx0XHRtYXhTY3JvbGxMZWZ0ID0gdGhpcy5yZWFsRWxlbWVudC5wcm9wKCdzY3JvbGxXaWR0aCcpIC0gdGhpcy5lbWJlZGRlZERpbWVuc2lvbnMuaW5uZXJXaWR0aCxcclxuXHRcdFx0XHRleHRyYUxlZnQsIGV4dHJhVG9wLCBwcmV2ZW50RmxhZztcclxuXHJcblx0XHRcdC8vIGNoZWNrIGVkZ2UgY2FzZXNcclxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuYWx3YXlzUHJldmVudE1vdXNlV2hlZWwpIHtcclxuXHRcdFx0XHRpZiAodGhpcy52ZXJ0aWNhbFNjcm9sbEFjdGl2ZSAmJiBlLmRlbHRhWSkge1xyXG5cdFx0XHRcdFx0aWYgKCEoY3VycmVudFNjcm9sbFRvcCA8PSAwICYmIGUuZGVsdGFZIDwgMCkgJiYgIShjdXJyZW50U2Nyb2xsVG9wID49IG1heFNjcm9sbFRvcCAmJiBlLmRlbHRhWSA+IDApKSB7XHJcblx0XHRcdFx0XHRcdHByZXZlbnRGbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuaG9yaXpvbnRhbFNjcm9sbEFjdGl2ZSAmJiBlLmRlbHRhWCkge1xyXG5cdFx0XHRcdFx0aWYgKCEoY3VycmVudFNjcm9sbExlZnQgPD0gMCAmJiBlLmRlbHRhWCA8IDApICYmICEoY3VycmVudFNjcm9sbExlZnQgPj0gbWF4U2Nyb2xsTGVmdCAmJiBlLmRlbHRhWCA+IDApKSB7XHJcblx0XHRcdFx0XHRcdHByZXZlbnRGbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLnZlcnRpY2FsU2Nyb2xsQWN0aXZlICYmICF0aGlzLmhvcml6b250YWxTY3JvbGxBY3RpdmUpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gYW5kIHNjcm9sbCBpdGVtXHJcblx0XHRcdGlmIChwcmV2ZW50RmxhZyB8fCB0aGlzLm9wdGlvbnMuYWx3YXlzUHJldmVudE1vdXNlV2hlZWwpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRleHRyYUxlZnQgPSBlLmRlbHRhWCAvIDEwMCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3RlcDtcclxuXHRcdFx0ZXh0cmFUb3AgPSBlLmRlbHRhWSAvIDEwMCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3RlcDtcclxuXHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQuc2Nyb2xsVG9wKGN1cnJlbnRTY3JvbGxUb3AgKyBleHRyYVRvcCk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQuc2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsTGVmdCArIGV4dHJhTGVmdCk7XHJcblx0XHR9LFxyXG5cdFx0c2V0U2Nyb2xsQmFyRWRnZTogZnVuY3Rpb24oZWRnZVNpemUpIHtcclxuXHRcdFx0dGhpcy52QmFyRWRnZSA9IGVkZ2VTaXplIHx8IDA7XHJcblx0XHRcdHRoaXMucmVkcmF3U2Nyb2xsYmFycygpO1xyXG5cdFx0fSxcclxuXHRcdHNhdmVFbGVtZW50RGltZW5zaW9uczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuc2F2ZWREaW1lbnNpb25zID0ge1xyXG5cdFx0XHRcdHRvcDogdGhpcy5yZWFsRWxlbWVudC53aWR0aCgpLFxyXG5cdFx0XHRcdGxlZnQ6IHRoaXMucmVhbEVsZW1lbnQuaGVpZ2h0KClcclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0cmVzdG9yZUVsZW1lbnREaW1lbnNpb25zOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHRoaXMuc2F2ZWREaW1lbnNpb25zKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5jc3Moe1xyXG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMuc2F2ZWREaW1lbnNpb25zLndpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLnNhdmVkRGltZW5zaW9ucy5oZWlnaHRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRzYXZlU2Nyb2xsT2Zmc2V0czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuc2F2ZWRPZmZzZXRzID0ge1xyXG5cdFx0XHRcdHRvcDogdGhpcy5yZWFsRWxlbWVudC5zY3JvbGxUb3AoKSxcclxuXHRcdFx0XHRsZWZ0OiB0aGlzLnJlYWxFbGVtZW50LnNjcm9sbExlZnQoKVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRyZXN0b3JlU2Nyb2xsT2Zmc2V0czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICh0aGlzLnNhdmVkT2Zmc2V0cykge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuc2Nyb2xsVG9wKHRoaXMuc2F2ZWRPZmZzZXRzLnRvcCk7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5zY3JvbGxMZWZ0KHRoaXMuc2F2ZWRPZmZzZXRzLmxlZnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdGdldENvbnRhaW5lckRpbWVuc2lvbnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBzYXZlIGN1cnJlbnQgc3R5bGVzXHJcblx0XHRcdHZhciBkZXNpcmVkRGltZW5zaW9ucyxcclxuXHRcdFx0XHRjdXJyZW50U3R5bGVzLFxyXG5cdFx0XHRcdGN1cnJlbnRIZWlnaHQsXHJcblx0XHRcdFx0Y3VycmVudFdpZHRoO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuaXNNb2RpZmllZFN0eWxlcykge1xyXG5cdFx0XHRcdGRlc2lyZWREaW1lbnNpb25zID0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMucmVhbEVsZW1lbnQuaW5uZXJXaWR0aCgpICsgdGhpcy52QmFyLmdldFRoaWNrbmVzcygpLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLnJlYWxFbGVtZW50LmlubmVySGVpZ2h0KCkgKyB0aGlzLmhCYXIuZ2V0VGhpY2tuZXNzKClcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHVud3JhcCByZWFsIGVsZW1lbnQgYW5kIG1lYXN1cmUgaXQgYWNjb3JkaW5nIHRvIENTU1xyXG5cdFx0XHRcdHRoaXMuc2F2ZUVsZW1lbnREaW1lbnNpb25zKCkuc2F2ZVNjcm9sbE9mZnNldHMoKTtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50Lmluc2VydEFmdGVyKHRoaXMuc2Nyb2xsV3JhcHBlcik7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxXcmFwcGVyLmRldGFjaCgpO1xyXG5cclxuXHRcdFx0XHQvLyBtZWFzdXJlIGVsZW1lbnRcclxuXHRcdFx0XHRjdXJyZW50U3R5bGVzID0gdGhpcy5yZWFsRWxlbWVudC5wcm9wKCdzdHlsZScpO1xyXG5cdFx0XHRcdGN1cnJlbnRXaWR0aCA9IHBhcnNlRmxvYXQoY3VycmVudFN0eWxlcy53aWR0aCk7XHJcblx0XHRcdFx0Y3VycmVudEhlaWdodCA9IHBhcnNlRmxvYXQoY3VycmVudFN0eWxlcy5oZWlnaHQpO1xyXG5cclxuXHRcdFx0XHQvLyByZXNldCBzdHlsZXMgaWYgbmVlZGVkXHJcblx0XHRcdFx0aWYgKHRoaXMuZW1iZWRkZWREaW1lbnNpb25zICYmIGN1cnJlbnRXaWR0aCAmJiBjdXJyZW50SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzTW9kaWZpZWRTdHlsZXMgfD0gKGN1cnJlbnRXaWR0aCAhPT0gdGhpcy5lbWJlZGRlZERpbWVuc2lvbnMud2lkdGggfHwgY3VycmVudEhlaWdodCAhPT0gdGhpcy5lbWJlZGRlZERpbWVuc2lvbnMuaGVpZ2h0KTtcclxuXHRcdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuY3NzKHtcclxuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICcnLFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJydcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRlIGRlc2lyZWQgZGltZW5zaW9ucyBmb3IgcmVhbCBlbGVtZW50XHJcblx0XHRcdFx0ZGVzaXJlZERpbWVuc2lvbnMgPSB7XHJcblx0XHRcdFx0XHR3aWR0aDogdGhpcy5yZWFsRWxlbWVudC5vdXRlcldpZHRoKCksXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMucmVhbEVsZW1lbnQub3V0ZXJIZWlnaHQoKVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdC8vIHJlc3RvcmUgc3RydWN0dXJlIGFuZCBvcmlnaW5hbCBzY3JvbGwgb2Zmc2V0c1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsV3JhcHBlci5pbnNlcnRBZnRlcih0aGlzLnJlYWxFbGVtZW50KTtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJykucHJlcGVuZFRvKHRoaXMuc2Nyb2xsV3JhcHBlcik7XHJcblx0XHRcdFx0dGhpcy5yZXN0b3JlRWxlbWVudERpbWVuc2lvbnMoKS5yZXN0b3JlU2Nyb2xsT2Zmc2V0cygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVzaXJlZERpbWVuc2lvbnM7XHJcblx0XHR9LFxyXG5cdFx0Z2V0RW1iZWRkZWREaW1lbnNpb25zOiBmdW5jdGlvbihkaW1lbnNpb25zKSB7XHJcblx0XHRcdC8vIGhhbmRsZSBzY3JvbGxiYXJzIGNyb3BwaW5nXHJcblx0XHRcdHZhciBmYWtlQmFyV2lkdGggPSB0aGlzLnZCYXIuZ2V0VGhpY2tuZXNzKCksXHJcblx0XHRcdFx0ZmFrZUJhckhlaWdodCA9IHRoaXMuaEJhci5nZXRUaGlja25lc3MoKSxcclxuXHRcdFx0XHRwYWRkaW5nV2lkdGggPSB0aGlzLnJlYWxFbGVtZW50Lm91dGVyV2lkdGgoKSAtIHRoaXMucmVhbEVsZW1lbnQud2lkdGgoKSxcclxuXHRcdFx0XHRwYWRkaW5nSGVpZ2h0ID0gdGhpcy5yZWFsRWxlbWVudC5vdXRlckhlaWdodCgpIC0gdGhpcy5yZWFsRWxlbWVudC5oZWlnaHQoKSxcclxuXHRcdFx0XHRyZXN1bHREaW1lbnNpb25zO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5hbHdheXNTaG93U2Nyb2xsYmFycykge1xyXG5cdFx0XHRcdC8vIHNpbXBseSByZXR1cm4gZGltZW5zaW9ucyB3aXRob3V0IGN1c3RvbSBzY3JvbGxiYXJzXHJcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbFNjcm9sbEFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsU2Nyb2xsQWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXN1bHREaW1lbnNpb25zID0ge1xyXG5cdFx0XHRcdFx0aW5uZXJXaWR0aDogZGltZW5zaW9ucy53aWR0aCAtIGZha2VCYXJXaWR0aCxcclxuXHRcdFx0XHRcdGlubmVySGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIGZha2VCYXJIZWlnaHRcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGRldGVjdCB3aGVuIHRvIGRpc3BsYXkgZWFjaCBzY3JvbGxiYXJcclxuXHRcdFx0XHR0aGlzLnNhdmVFbGVtZW50RGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdHRoaXMudmVydGljYWxTY3JvbGxBY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmhvcml6b250YWxTY3JvbGxBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gZmlsbCBjb250YWluZXIgd2l0aCBmdWxsIHNpemVcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LmNzcyh7XHJcblx0XHRcdFx0XHR3aWR0aDogZGltZW5zaW9ucy53aWR0aCAtIHBhZGRpbmdXaWR0aCxcclxuXHRcdFx0XHRcdGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQgLSBwYWRkaW5nSGVpZ2h0XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFNjcm9sbEFjdGl2ZSA9IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnc2Nyb2xsV2lkdGgnKSA+IHRoaXMuY29udGFpbmVyRGltZW5zaW9ucy53aWR0aDtcclxuXHRcdFx0XHR0aGlzLnZlcnRpY2FsU2Nyb2xsQWN0aXZlID0gdGhpcy5yZWFsRWxlbWVudC5wcm9wKCdzY3JvbGxIZWlnaHQnKSA+IHRoaXMuY29udGFpbmVyRGltZW5zaW9ucy5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdHRoaXMucmVzdG9yZUVsZW1lbnREaW1lbnNpb25zKCk7XHJcblx0XHRcdFx0cmVzdWx0RGltZW5zaW9ucyA9IHtcclxuXHRcdFx0XHRcdGlubmVyV2lkdGg6IGRpbWVuc2lvbnMud2lkdGggLSAodGhpcy52ZXJ0aWNhbFNjcm9sbEFjdGl2ZSA/IGZha2VCYXJXaWR0aCA6IDApLFxyXG5cdFx0XHRcdFx0aW5uZXJIZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0IC0gKHRoaXMuaG9yaXpvbnRhbFNjcm9sbEFjdGl2ZSA/IGZha2VCYXJIZWlnaHQgOiAwKVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0JC5leHRlbmQocmVzdWx0RGltZW5zaW9ucywge1xyXG5cdFx0XHRcdHdpZHRoOiByZXN1bHREaW1lbnNpb25zLmlubmVyV2lkdGggLSBwYWRkaW5nV2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiByZXN1bHREaW1lbnNpb25zLmlubmVySGVpZ2h0IC0gcGFkZGluZ0hlaWdodFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdERpbWVuc2lvbnM7XHJcblx0XHR9LFxyXG5cdFx0cmVidWlsZFNjcm9sbGJhcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZXNpemUgd3JhcHBlciBhY2NvcmRpbmcgdG8gcmVhbCBlbGVtZW50IHN0eWxlc1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lckRpbWVuc2lvbnMgPSB0aGlzLmdldENvbnRhaW5lckRpbWVuc2lvbnMoKTtcclxuXHRcdFx0dGhpcy5lbWJlZGRlZERpbWVuc2lvbnMgPSB0aGlzLmdldEVtYmVkZGVkRGltZW5zaW9ucyh0aGlzLmNvbnRhaW5lckRpbWVuc2lvbnMpO1xyXG5cclxuXHRcdFx0Ly8gcmVzaXplIHdyYXBwZXIgdG8gZGVzaXJlZCBkaW1lbnNpb25zXHJcblx0XHRcdHRoaXMuc2Nyb2xsV3JhcHBlci5jc3Moe1xyXG5cdFx0XHRcdHdpZHRoOiB0aGlzLmNvbnRhaW5lckRpbWVuc2lvbnMud2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmNvbnRhaW5lckRpbWVuc2lvbnMuaGVpZ2h0XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gcmVzaXplIGVsZW1lbnQgaW5zaWRlIHdyYXBwZXIgZXhjbHVkaW5nIHNjcm9sbGJhciBzaXplXHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQuY3NzKHtcclxuXHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXHJcblx0XHRcdFx0d2lkdGg6IHRoaXMuZW1iZWRkZWREaW1lbnNpb25zLndpZHRoLFxyXG5cdFx0XHRcdGhlaWdodDogdGhpcy5lbWJlZGRlZERpbWVuc2lvbnMuaGVpZ2h0XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gcmVkcmF3IHNjcm9sbGJhciBvZmZzZXRcclxuXHRcdFx0dGhpcy5yZWRyYXdTY3JvbGxiYXJzKCk7XHJcblx0XHR9LFxyXG5cdFx0cmVkcmF3U2Nyb2xsYmFyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB2aWV3U2l6ZSwgbWF4U2Nyb2xsVmFsdWU7XHJcblxyXG5cdFx0XHQvLyByZWRyYXcgdmVydGljYWwgc2Nyb2xsYmFyXHJcblx0XHRcdGlmICh0aGlzLnZlcnRpY2FsU2Nyb2xsQWN0aXZlKSB7XHJcblx0XHRcdFx0dmlld1NpemUgPSB0aGlzLnZCYXJFZGdlID8gdGhpcy5jb250YWluZXJEaW1lbnNpb25zLmhlaWdodCAtIHRoaXMudkJhckVkZ2UgOiB0aGlzLmVtYmVkZGVkRGltZW5zaW9ucy5pbm5lckhlaWdodDtcclxuXHRcdFx0XHRtYXhTY3JvbGxWYWx1ZSA9IE1hdGgubWF4KHRoaXMucmVhbEVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0JyksIHRoaXMucmVhbEVsZW1lbnQucHJvcCgnc2Nyb2xsSGVpZ2h0JykpIC0gdGhpcy52QmFyRWRnZTtcclxuXHJcblx0XHRcdFx0dGhpcy52QmFyLnNob3coKS5zZXRNYXhWYWx1ZShtYXhTY3JvbGxWYWx1ZSAtIHZpZXdTaXplKS5zZXRSYXRpbyh2aWV3U2l6ZSAvIG1heFNjcm9sbFZhbHVlKS5zZXRTaXplKHZpZXdTaXplKTtcclxuXHRcdFx0XHR0aGlzLnZCYXIuc2V0VmFsdWUodGhpcy5yZWFsRWxlbWVudC5zY3JvbGxUb3AoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52QmFyLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVkcmF3IGhvcml6b250YWwgc2Nyb2xsYmFyXHJcblx0XHRcdGlmICh0aGlzLmhvcml6b250YWxTY3JvbGxBY3RpdmUpIHtcclxuXHRcdFx0XHR2aWV3U2l6ZSA9IHRoaXMuZW1iZWRkZWREaW1lbnNpb25zLmlubmVyV2lkdGg7XHJcblx0XHRcdFx0bWF4U2Nyb2xsVmFsdWUgPSB0aGlzLnJlYWxFbGVtZW50LnByb3AoJ3Njcm9sbFdpZHRoJyk7XHJcblxyXG5cdFx0XHRcdGlmIChtYXhTY3JvbGxWYWx1ZSA9PT0gdmlld1NpemUpIHtcclxuXHRcdFx0XHRcdHRoaXMuaG9yaXpvbnRhbFNjcm9sbEFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmhCYXIuc2hvdygpLnNldE1heFZhbHVlKG1heFNjcm9sbFZhbHVlIC0gdmlld1NpemUpLnNldFJhdGlvKHZpZXdTaXplIC8gbWF4U2Nyb2xsVmFsdWUpLnNldFNpemUodmlld1NpemUpO1xyXG5cdFx0XHRcdHRoaXMuaEJhci5zZXRWYWx1ZSh0aGlzLnJlYWxFbGVtZW50LnNjcm9sbExlZnQoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5oQmFyLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc2V0IFwidG91Y2gtYWN0aW9uXCIgc3R5bGUgcnVsZVxyXG5cdFx0XHR2YXIgdG91Y2hBY3Rpb24gPSAnJztcclxuXHRcdFx0aWYgKHRoaXMudmVydGljYWxTY3JvbGxBY3RpdmUgJiYgdGhpcy5ob3Jpem9udGFsU2Nyb2xsQWN0aXZlKSB7XHJcblx0XHRcdFx0dG91Y2hBY3Rpb24gPSAnbm9uZSc7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy52ZXJ0aWNhbFNjcm9sbEFjdGl2ZSkge1xyXG5cdFx0XHRcdHRvdWNoQWN0aW9uID0gJ3Bhbi14JztcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmhvcml6b250YWxTY3JvbGxBY3RpdmUpIHtcclxuXHRcdFx0XHR0b3VjaEFjdGlvbiA9ICdwYW4teSc7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5jc3MoJ3RvdWNoQWN0aW9uJywgdG91Y2hBY3Rpb24pO1xyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlYnVpbGRTY3JvbGxiYXJzKCk7XHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuXHRcdFx0dGhpcy53aW4ub2ZmKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgbG9hZCcsIHRoaXMub25SZXNpemUpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9mZih7XHJcblx0XHRcdFx0J2pjZi1tb3VzZXdoZWVsJzogdGhpcy5vbk1vdXNlV2hlZWwsXHJcblx0XHRcdFx0J2pjZi1wb2ludGVyZG93bic6IHRoaXMub25Ub3VjaEJvZHlcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZG9jLm9mZih7XHJcblx0XHRcdFx0J2pjZi1wb2ludGVybW92ZSc6IHRoaXMub25Nb3ZlQm9keSxcclxuXHRcdFx0XHQnamNmLXBvaW50ZXJ1cCc6IHRoaXMub25SZWxlYXNlQm9keVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHJlc3RvcmUgc3RydWN0dXJlXHJcblx0XHRcdHRoaXMuc2F2ZVNjcm9sbE9mZnNldHMoKTtcclxuXHRcdFx0dGhpcy52QmFyLmRlc3Ryb3koKTtcclxuXHRcdFx0dGhpcy5oQmFyLmRlc3Ryb3koKTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5pbnNlcnRBZnRlcih0aGlzLnNjcm9sbFdyYXBwZXIpLmNzcyh7XHJcblx0XHRcdFx0dG91Y2hBY3Rpb246ICcnLFxyXG5cdFx0XHRcdG92ZXJmbG93OiAnJyxcclxuXHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0aGVpZ2h0OiAnJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5zY3JvbGxXcmFwcGVyLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLnJlc3RvcmVTY3JvbGxPZmZzZXRzKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gY3VzdG9tIHNjcm9sbGJhclxyXG5cdGZ1bmN0aW9uIFNjcm9sbEJhcihvcHRpb25zKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdGhvbGRlcjogbnVsbCxcclxuXHRcdFx0dmVydGljYWw6IHRydWUsXHJcblx0XHRcdGluYWN0aXZlQ2xhc3M6ICdqY2YtaW5hY3RpdmUnLFxyXG5cdFx0XHR2ZXJ0aWNhbENsYXNzOiAnamNmLXNjcm9sbGJhci12ZXJ0aWNhbCcsXHJcblx0XHRcdGhvcml6b250YWxDbGFzczogJ2pjZi1zY3JvbGxiYXItaG9yaXpvbnRhbCcsXHJcblx0XHRcdHNjcm9sbGJhclN0cnVjdHVyZTogJzxkaXYgY2xhc3M9XCJqY2Ytc2Nyb2xsYmFyXCI+PGRpdiBjbGFzcz1cImpjZi1zY3JvbGxiYXItZGVjXCI+PC9kaXY+PGRpdiBjbGFzcz1cImpjZi1zY3JvbGxiYXItc2xpZGVyXCI+PGRpdiBjbGFzcz1cImpjZi1zY3JvbGxiYXItaGFuZGxlXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImpjZi1zY3JvbGxiYXItaW5jXCI+PC9kaXY+PC9kaXY+JyxcclxuXHRcdFx0YnRuRGVjU2VsZWN0b3I6ICcuamNmLXNjcm9sbGJhci1kZWMnLFxyXG5cdFx0XHRidG5JbmNTZWxlY3RvcjogJy5qY2Ytc2Nyb2xsYmFyLWluYycsXHJcblx0XHRcdHNsaWRlclNlbGVjdG9yOiAnLmpjZi1zY3JvbGxiYXItc2xpZGVyJyxcclxuXHRcdFx0aGFuZGxlU2VsZWN0b3I6ICcuamNmLXNjcm9sbGJhci1oYW5kbGUnLFxyXG5cdFx0XHRzY3JvbGxJbnRlcnZhbDogMzAwLFxyXG5cdFx0XHRzY3JvbGxTdGVwOiA0MDAgLy8gcHgvc2VjXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHQkLmV4dGVuZChTY3JvbGxCYXIucHJvdG90eXBlLCB7XHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pbml0U3RydWN0dXJlKCk7XHJcblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdFN0cnVjdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGRlZmluZSBwcm9wb3J0aWVzXHJcblx0XHRcdHRoaXMuZG9jID0gJChkb2N1bWVudCk7XHJcblx0XHRcdHRoaXMuaXNWZXJ0aWNhbCA9ICEhdGhpcy5vcHRpb25zLnZlcnRpY2FsO1xyXG5cdFx0XHR0aGlzLnNpemVQcm9wZXJ0eSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcclxuXHRcdFx0dGhpcy5mdWxsU2l6ZVByb3BlcnR5ID0gdGhpcy5pc1ZlcnRpY2FsID8gJ291dGVySGVpZ2h0JyA6ICdvdXRlcldpZHRoJztcclxuXHRcdFx0dGhpcy5pbnZlcnRlZFNpemVQcm9wZXJ0eSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcclxuXHRcdFx0dGhpcy50aGlja25lc3NNZWFzdXJlTWV0aG9kID0gJ291dGVyJyArIHRoaXMuaW52ZXJ0ZWRTaXplUHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLmludmVydGVkU2l6ZVByb3BlcnR5LnN1YnN0cigxKTtcclxuXHRcdFx0dGhpcy5vZmZzZXRQcm9wZXJ0eSA9IHRoaXMuaXNWZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnO1xyXG5cdFx0XHR0aGlzLm9mZnNldEV2ZW50UHJvcGVydHkgPSB0aGlzLmlzVmVydGljYWwgPyAncGFnZVknIDogJ3BhZ2VYJztcclxuXHJcblx0XHRcdC8vIGluaXRpYWxpemUgdmFyaWFibGVzXHJcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLm9wdGlvbnMudmFsdWUgfHwgMDtcclxuXHRcdFx0dGhpcy5tYXhWYWx1ZSA9IHRoaXMub3B0aW9ucy5tYXhWYWx1ZSB8fCAwO1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRTbGlkZXJTaXplID0gMDtcclxuXHRcdFx0dGhpcy5oYW5kbGVTaXplID0gMDtcclxuXHJcblx0XHRcdC8vIGZpbmQgZWxlbWVudHNcclxuXHRcdFx0dGhpcy5ob2xkZXIgPSAkKHRoaXMub3B0aW9ucy5ob2xkZXIpO1xyXG5cdFx0XHR0aGlzLnNjcm9sbGJhciA9ICQodGhpcy5vcHRpb25zLnNjcm9sbGJhclN0cnVjdHVyZSkuYXBwZW5kVG8odGhpcy5ob2xkZXIpO1xyXG5cdFx0XHR0aGlzLmJ0bkRlYyA9IHRoaXMuc2Nyb2xsYmFyLmZpbmQodGhpcy5vcHRpb25zLmJ0bkRlY1NlbGVjdG9yKTtcclxuXHRcdFx0dGhpcy5idG5JbmMgPSB0aGlzLnNjcm9sbGJhci5maW5kKHRoaXMub3B0aW9ucy5idG5JbmNTZWxlY3Rvcik7XHJcblx0XHRcdHRoaXMuc2xpZGVyID0gdGhpcy5zY3JvbGxiYXIuZmluZCh0aGlzLm9wdGlvbnMuc2xpZGVyU2VsZWN0b3IpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZSA9IHRoaXMuc2xpZGVyLmZpbmQodGhpcy5vcHRpb25zLmhhbmRsZVNlbGVjdG9yKTtcclxuXHJcblx0XHRcdC8vIHNldCBpbml0aWFsIHN0eWxlc1xyXG5cdFx0XHR0aGlzLnNjcm9sbGJhci5hZGRDbGFzcyh0aGlzLmlzVmVydGljYWwgPyB0aGlzLm9wdGlvbnMudmVydGljYWxDbGFzcyA6IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsQ2xhc3MpLmNzcyh7XHJcblx0XHRcdFx0dG91Y2hBY3Rpb246IHRoaXMuaXNWZXJ0aWNhbCA/ICdwYW4teCcgOiAncGFuLXknLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnNsaWRlci5jc3Moe1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmhhbmRsZS5jc3Moe1xyXG5cdFx0XHRcdHRvdWNoQWN0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZSdcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0YXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuXHRcdFx0dGhpcy5oYW5kbGUub24oJ2pjZi1wb2ludGVyZG93bicsIHRoaXMub25IYW5kbGVQcmVzcyk7XHJcblx0XHRcdHRoaXMuc2xpZGVyLmFkZCh0aGlzLmJ0bkRlYykuYWRkKHRoaXMuYnRuSW5jKS5vbignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vbkJ1dHRvblByZXNzKTtcclxuXHRcdH0sXHJcblx0XHRvbkhhbmRsZVByZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnICYmIGUuYnV0dG9uID4gMSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVEcmFnQWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnNsaWRlck9mZnNldCA9IHRoaXMuc2xpZGVyLm9mZnNldCgpW3RoaXMub2Zmc2V0UHJvcGVydHldO1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIYW5kbGVPZmZzZXQgPSBlW3RoaXMub2Zmc2V0RXZlbnRQcm9wZXJ0eV0gLSB0aGlzLmhhbmRsZS5vZmZzZXQoKVt0aGlzLm9mZnNldFByb3BlcnR5XTtcclxuXHJcblx0XHRcdFx0dGhpcy5kb2Mub24oJ2pjZi1wb2ludGVybW92ZScsIHRoaXMub25IYW5kbGVEcmFnKTtcclxuXHRcdFx0XHR0aGlzLmRvYy5vbignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25IYW5kbGVSZWxlYXNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uSGFuZGxlRHJhZzogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMuY2FsY09mZnNldCA9IGVbdGhpcy5vZmZzZXRFdmVudFByb3BlcnR5XSAtIHRoaXMuc2xpZGVyT2Zmc2V0IC0gdGhpcy5pbm5lckhhbmRsZU9mZnNldDtcclxuXHRcdFx0dGhpcy5zZXRWYWx1ZSh0aGlzLmNhbGNPZmZzZXQgLyAodGhpcy5jdXJyZW50U2xpZGVyU2l6ZSAtIHRoaXMuaGFuZGxlU2l6ZSkgKiB0aGlzLm1heFZhbHVlKTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyU2Nyb2xsRXZlbnQodGhpcy52YWx1ZSk7XHJcblx0XHR9LFxyXG5cdFx0b25IYW5kbGVSZWxlYXNlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVEcmFnQWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZG9jLm9mZignamNmLXBvaW50ZXJtb3ZlJywgdGhpcy5vbkhhbmRsZURyYWcpO1xyXG5cdFx0XHR0aGlzLmRvYy5vZmYoJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uSGFuZGxlUmVsZWFzZSk7XHJcblx0XHR9LFxyXG5cdFx0b25CdXR0b25QcmVzczogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgZGlyZWN0aW9uLCBjbGlja09mZnNldDtcclxuXHRcdFx0aWYgKGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScgJiYgZS5idXR0b24gPiAxKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaGFuZGxlRHJhZ0FjdGl2ZSkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2xpZGVyLmlzKGUuY3VycmVudFRhcmdldCkpIHtcclxuXHRcdFx0XHRcdFx0Ly8gc2xpZGVyIHByZXNzZWRcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy5oYW5kbGUub2Zmc2V0KClbdGhpcy5vZmZzZXRQcm9wZXJ0eV0gPiBlW3RoaXMub2Zmc2V0RXZlbnRQcm9wZXJ0eV0gPyAtMSA6IDE7XHJcblx0XHRcdFx0XHRcdGNsaWNrT2Zmc2V0ID0gZVt0aGlzLm9mZnNldEV2ZW50UHJvcGVydHldIC0gdGhpcy5zbGlkZXIub2Zmc2V0KClbdGhpcy5vZmZzZXRQcm9wZXJ0eV07XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhcnRQYWdlU2Nyb2xsaW5nKGRpcmVjdGlvbiwgY2xpY2tPZmZzZXQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gc2Nyb2xsYmFyIGJ1dHRvbnMgcHJlc3NlZFxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLmJ0bkRlYy5pcyhlLmN1cnJlbnRUYXJnZXQpID8gLTEgOiAxO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXJ0U21vb3RoU2Nyb2xsaW5nKGRpcmVjdGlvbik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmRvYy5vbignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25CdXR0b25SZWxlYXNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkJ1dHRvblJlbGVhc2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnN0b3BQYWdlU2Nyb2xsaW5nKCk7XHJcblx0XHRcdHRoaXMuc3RvcFNtb290aFNjcm9sbGluZygpO1xyXG5cdFx0XHR0aGlzLmRvYy5vZmYoJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uQnV0dG9uUmVsZWFzZSk7XHJcblx0XHR9LFxyXG5cdFx0c3RhcnRQYWdlU2Nyb2xsaW5nOiBmdW5jdGlvbihkaXJlY3Rpb24sIGNsaWNrT2Zmc2V0KSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRzdGVwVmFsdWUgPSBkaXJlY3Rpb24gKiBzZWxmLmN1cnJlbnRTaXplO1xyXG5cclxuXHRcdFx0Ly8gbGltaXQgY2hlY2tlclxyXG5cdFx0XHR2YXIgaXNGaW5pc2hlZFNjcm9sbGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBoYW5kbGVUb3AgPSAoc2VsZi52YWx1ZSAvIHNlbGYubWF4VmFsdWUpICogKHNlbGYuY3VycmVudFNsaWRlclNpemUgLSBzZWxmLmhhbmRsZVNpemUpO1xyXG5cclxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZVRvcCArIHNlbGYuaGFuZGxlU2l6ZSA+PSBjbGlja09mZnNldDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZVRvcCA8PSBjbGlja09mZnNldDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvLyBzY3JvbGwgYnkgcGFnZSB3aGVuIHRyYWNrIGlzIHByZXNzZWRcclxuXHRcdFx0dmFyIGRvUGFnZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNlbGYudmFsdWUgKz0gc3RlcFZhbHVlO1xyXG5cdFx0XHRcdHNlbGYuc2V0VmFsdWUoc2VsZi52YWx1ZSk7XHJcblx0XHRcdFx0c2VsZi50cmlnZ2VyU2Nyb2xsRXZlbnQoc2VsZi52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdGlmIChpc0ZpbmlzaGVkU2Nyb2xsaW5nKCkpIHtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2VsZi5wYWdlU2Nyb2xsVGltZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8vIHN0YXJ0IHNjcm9sbGluZ1xyXG5cdFx0XHR0aGlzLnBhZ2VTY3JvbGxUaW1lciA9IHNldEludGVydmFsKGRvUGFnZVNjcm9sbCwgdGhpcy5vcHRpb25zLnNjcm9sbEludGVydmFsKTtcclxuXHRcdFx0ZG9QYWdlU2Nyb2xsKCk7XHJcblx0XHR9LFxyXG5cdFx0c3RvcFBhZ2VTY3JvbGxpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMucGFnZVNjcm9sbFRpbWVyKTtcclxuXHRcdH0sXHJcblx0XHRzdGFydFNtb290aFNjcm9sbGluZzogZnVuY3Rpb24oZGlyZWN0aW9uKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcywgZHQ7XHJcblx0XHRcdHRoaXMuc3RvcFNtb290aFNjcm9sbGluZygpO1xyXG5cclxuXHRcdFx0Ly8gc2ltcGxlIGFuaW1hdGlvbiBmdW5jdGlvbnNcclxuXHRcdFx0dmFyIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oZnVuYykge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuYywgMTYpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YXIgZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gc2V0IGFuaW1hdGlvbiBsaW1pdFxyXG5cdFx0XHR2YXIgaXNGaW5pc2hlZFNjcm9sbGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi52YWx1ZSA+PSBzZWxmLm1heFZhbHVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi52YWx1ZSA8PSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8vIGFuaW1hdGlvbiBzdGVwXHJcblx0XHRcdHZhciBkb1Njcm9sbEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBzdGVwVmFsdWUgPSAoZ2V0VGltZXN0YW1wKCkgLSBkdCkgLyAxMDAwICogc2VsZi5vcHRpb25zLnNjcm9sbFN0ZXA7XHJcblxyXG5cdFx0XHRcdGlmIChzZWxmLnNtb290aFNjcm9sbEFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0c2VsZi52YWx1ZSArPSBzdGVwVmFsdWUgKiBkaXJlY3Rpb247XHJcblx0XHRcdFx0XHRzZWxmLnNldFZhbHVlKHNlbGYudmFsdWUpO1xyXG5cdFx0XHRcdFx0c2VsZi50cmlnZ2VyU2Nyb2xsRXZlbnQoc2VsZi52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFpc0ZpbmlzaGVkU2Nyb2xsaW5nKCkpIHtcclxuXHRcdFx0XHRcdFx0ZHQgPSBnZXRUaW1lc3RhbXAoKTtcclxuXHRcdFx0XHRcdFx0cmFmKGRvU2Nyb2xsQW5pbWF0aW9uKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvLyBzdGFydCBhbmltYXRpb25cclxuXHRcdFx0c2VsZi5zbW9vdGhTY3JvbGxBY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRkdCA9IGdldFRpbWVzdGFtcCgpO1xyXG5cdFx0XHRyYWYoZG9TY3JvbGxBbmltYXRpb24pO1xyXG5cdFx0fSxcclxuXHRcdHN0b3BTbW9vdGhTY3JvbGxpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnNtb290aFNjcm9sbEFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fSxcclxuXHRcdHRyaWdnZXJTY3JvbGxFdmVudDogZnVuY3Rpb24oc2Nyb2xsVmFsdWUpIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vblNjcm9sbCkge1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vblNjcm9sbChzY3JvbGxWYWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRnZXRUaGlja25lc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zY3JvbGxiYXJbdGhpcy50aGlja25lc3NNZWFzdXJlTWV0aG9kXSgpO1xyXG5cdFx0fSxcclxuXHRcdHNldFNpemU6IGZ1bmN0aW9uKHNpemUpIHtcclxuXHRcdFx0Ly8gcmVzaXplIHNjcm9sbGJhclxyXG5cdFx0XHR2YXIgYnRuRGVjU2l6ZSA9IHRoaXMuYnRuRGVjW3RoaXMuZnVsbFNpemVQcm9wZXJ0eV0oKSxcclxuXHRcdFx0XHRidG5JbmNTaXplID0gdGhpcy5idG5JbmNbdGhpcy5mdWxsU2l6ZVByb3BlcnR5XSgpO1xyXG5cclxuXHRcdFx0Ly8gcmVzaXplIHNsaWRlclxyXG5cdFx0XHR0aGlzLmN1cnJlbnRTaXplID0gc2l6ZTtcclxuXHRcdFx0dGhpcy5jdXJyZW50U2xpZGVyU2l6ZSA9IHNpemUgLSBidG5EZWNTaXplIC0gYnRuSW5jU2l6ZTtcclxuXHRcdFx0dGhpcy5zY3JvbGxiYXIuY3NzKHRoaXMuc2l6ZVByb3BlcnR5LCBzaXplKTtcclxuXHRcdFx0dGhpcy5zbGlkZXIuY3NzKHRoaXMuc2l6ZVByb3BlcnR5LCB0aGlzLmN1cnJlbnRTbGlkZXJTaXplKTtcclxuXHRcdFx0dGhpcy5jdXJyZW50U2xpZGVyU2l6ZSA9IHRoaXMuc2xpZGVyW3RoaXMuc2l6ZVByb3BlcnR5XSgpO1xyXG5cclxuXHRcdFx0Ly8gcmVzaXplIGhhbmRsZVxyXG5cdFx0XHR0aGlzLmhhbmRsZVNpemUgPSBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFNsaWRlclNpemUgKiB0aGlzLnJhdGlvKTtcclxuXHRcdFx0dGhpcy5oYW5kbGUuY3NzKHRoaXMuc2l6ZVByb3BlcnR5LCB0aGlzLmhhbmRsZVNpemUpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZVNpemUgPSB0aGlzLmhhbmRsZVt0aGlzLmZ1bGxTaXplUHJvcGVydHldKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRzZXRSYXRpbzogZnVuY3Rpb24ocmF0aW8pIHtcclxuXHRcdFx0dGhpcy5yYXRpbyA9IHJhdGlvO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRzZXRNYXhWYWx1ZTogZnVuY3Rpb24obWF4VmFsdWUpIHtcclxuXHRcdFx0dGhpcy5tYXhWYWx1ZSA9IG1heFZhbHVlO1xyXG5cdFx0XHR0aGlzLnNldFZhbHVlKE1hdGgubWluKHRoaXMudmFsdWUsIHRoaXMubWF4VmFsdWUpKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0c2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsdWUgPCAwKSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IDA7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWF4VmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5tYXhWYWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHRcdH0sXHJcblx0XHRzZXRQb3NpdGlvbjogZnVuY3Rpb24oc3R5bGVzKSB7XHJcblx0XHRcdHRoaXMuc2Nyb2xsYmFyLmNzcyhzdHlsZXMpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRoaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5zY3JvbGxiYXIuZGV0YWNoKCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnNjcm9sbGJhci5hcHBlbmRUbyh0aGlzLmhvbGRlcik7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZWNhbGN1bGF0ZSBoYW5kbGUgcG9zaXRpb25cclxuXHRcdFx0aWYgKHRoaXMudmFsdWUgPT09IDAgfHwgdGhpcy5tYXhWYWx1ZSA9PT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuY2FsY09mZnNldCA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jYWxjT2Zmc2V0ID0gKHRoaXMudmFsdWUgLyB0aGlzLm1heFZhbHVlKSAqICh0aGlzLmN1cnJlbnRTbGlkZXJTaXplIC0gdGhpcy5oYW5kbGVTaXplKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmhhbmRsZS5jc3ModGhpcy5vZmZzZXRQcm9wZXJ0eSwgdGhpcy5jYWxjT2Zmc2V0KTtcclxuXHJcblx0XHRcdC8vIHRvZ2dsZSBpbmFjdGl2ZSBjbGFzc2VzXHJcblx0XHRcdHRoaXMuYnRuRGVjLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5pbmFjdGl2ZUNsYXNzLCB0aGlzLnZhbHVlID09PSAwKTtcclxuXHRcdFx0dGhpcy5idG5JbmMudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmluYWN0aXZlQ2xhc3MsIHRoaXMudmFsdWUgPT09IHRoaXMubWF4VmFsdWUpO1xyXG5cdFx0XHR0aGlzLnNjcm9sbGJhci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuaW5hY3RpdmVDbGFzcywgdGhpcy5tYXhWYWx1ZSA9PT0gMCk7XHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlbW92ZSBldmVudCBoYW5kbGVycyBhbmQgc2Nyb2xsYmFyIGJsb2NrIGl0c2VsZlxyXG5cdFx0XHR0aGlzLmJ0bkRlYy5hZGQodGhpcy5idG5JbmMpLm9mZignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vbkJ1dHRvblByZXNzKTtcclxuXHRcdFx0dGhpcy5oYW5kbGUub2ZmKCdqY2YtcG9pbnRlcmRvd24nLCB0aGlzLm9uSGFuZGxlUHJlc3MpO1xyXG5cdFx0XHR0aGlzLmRvYy5vZmYoJ2pjZi1wb2ludGVybW92ZScsIHRoaXMub25IYW5kbGVEcmFnKTtcclxuXHRcdFx0dGhpcy5kb2Mub2ZmKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5vbkhhbmRsZVJlbGVhc2UpO1xyXG5cdFx0XHR0aGlzLmRvYy5vZmYoJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uQnV0dG9uUmVsZWFzZSk7XHJcblx0XHRcdHRoaXMuc3RvcFNtb290aFNjcm9sbGluZygpO1xyXG5cdFx0XHR0aGlzLnN0b3BQYWdlU2Nyb2xsaW5nKCk7XHJcblx0XHRcdHRoaXMuc2Nyb2xsYmFyLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59KTtcclxuXHJcbn0oamNmKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEQ6L3Byb2plY3RzL251dHJpdGlvbjEwMS9hcHAvfi9qY2YvanMvamNmLnNjcm9sbGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IEN1c3RvbSBGb3JtcyA6IFNlbGVjdCBNb2R1bGVcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBQU0QySFRNTCAtIGh0dHA6Ly9wc2QyaHRtbC5jb20vamNmXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoTElDRU5TRS50eHQpXHJcbiAqXHJcbiAqIFZlcnNpb246IDEuMi4zXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKGpjZikge1xyXG5cclxuamNmLmFkZE1vZHVsZShmdW5jdGlvbigkLCB3aW5kb3cpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBtb2R1bGUgPSB7XHJcblx0XHRuYW1lOiAnU2VsZWN0JyxcclxuXHRcdHNlbGVjdG9yOiAnc2VsZWN0JyxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0ZWxlbWVudDogbnVsbCxcclxuXHRcdFx0bXVsdGlwbGVDb21wYWN0U3R5bGU6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0cGx1Z2luczoge1xyXG5cdFx0XHRMaXN0Qm94OiBMaXN0Qm94LFxyXG5cdFx0XHRDb21ib0JveDogQ29tYm9Cb3gsXHJcblx0XHRcdFNlbGVjdExpc3Q6IFNlbGVjdExpc3RcclxuXHRcdH0sXHJcblx0XHRtYXRjaEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXMoJ3NlbGVjdCcpO1xyXG5cdFx0fSxcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5lbGVtZW50KTtcclxuXHRcdFx0dGhpcy5jcmVhdGVJbnN0YW5jZSgpO1xyXG5cdFx0fSxcclxuXHRcdGlzTGlzdEJveDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaXMoJ1tzaXplXTpub3QoW2pjZi1zaXplXSksIFttdWx0aXBsZV0nKTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVJbnN0YW5jZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICh0aGlzLmluc3RhbmNlKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaXNMaXN0Qm94KCkgJiYgIXRoaXMub3B0aW9ucy5tdWx0aXBsZUNvbXBhY3RTdHlsZSkge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgTGlzdEJveCh0aGlzLm9wdGlvbnMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgQ29tYm9Cb3godGhpcy5vcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdHlwZU1pc21hdGNoID0gKHRoaXMuaXNMaXN0Qm94KCkgJiYgdGhpcy5pbnN0YW5jZSBpbnN0YW5jZW9mIENvbWJvQm94KSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0KCF0aGlzLmlzTGlzdEJveCgpICYmIHRoaXMuaW5zdGFuY2UgaW5zdGFuY2VvZiBMaXN0Qm94KTtcclxuXHJcblx0XHRcdGlmICh0eXBlTWlzbWF0Y2gpIHtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUluc3RhbmNlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZS5yZWZyZXNoKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gY29tYm9ib3ggbW9kdWxlXHJcblx0ZnVuY3Rpb24gQ29tYm9Cb3gob3B0aW9ucykge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHR3cmFwTmF0aXZlOiB0cnVlLFxyXG5cdFx0XHR3cmFwTmF0aXZlT25Nb2JpbGU6IHRydWUsXHJcblx0XHRcdGZha2VEcm9wSW5Cb2R5OiB0cnVlLFxyXG5cdFx0XHR1c2VDdXN0b21TY3JvbGw6IHRydWUsXHJcblx0XHRcdGZsaXBEcm9wVG9GaXQ6IHRydWUsXHJcblx0XHRcdG1heFZpc2libGVJdGVtczogMTAsXHJcblx0XHRcdGZha2VBcmVhU3RydWN0dXJlOiAnPHNwYW4gY2xhc3M9XCJqY2Ytc2VsZWN0XCI+PHNwYW4gY2xhc3M9XCJqY2Ytc2VsZWN0LXRleHRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJqY2Ytc2VsZWN0LW9wZW5lclwiPjwvc3Bhbj48L3NwYW4+JyxcclxuXHRcdFx0ZmFrZURyb3BTdHJ1Y3R1cmU6ICc8ZGl2IGNsYXNzPVwiamNmLXNlbGVjdC1kcm9wXCI+PGRpdiBjbGFzcz1cImpjZi1zZWxlY3QtZHJvcC1jb250ZW50XCI+PC9kaXY+PC9kaXY+JyxcclxuXHRcdFx0b3B0aW9uQ2xhc3NQcmVmaXg6ICdqY2Ytb3B0aW9uLScsXHJcblx0XHRcdHNlbGVjdENsYXNzUHJlZml4OiAnamNmLXNlbGVjdC0nLFxyXG5cdFx0XHRkcm9wQ29udGVudFNlbGVjdG9yOiAnLmpjZi1zZWxlY3QtZHJvcC1jb250ZW50JyxcclxuXHRcdFx0c2VsZWN0VGV4dFNlbGVjdG9yOiAnLmpjZi1zZWxlY3QtdGV4dCcsXHJcblx0XHRcdGRyb3BBY3RpdmVDbGFzczogJ2pjZi1kcm9wLWFjdGl2ZScsXHJcblx0XHRcdGZsaXBEcm9wQ2xhc3M6ICdqY2YtZHJvcC1mbGlwcGVkJ1xyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblx0JC5leHRlbmQoQ29tYm9Cb3gucHJvdG90eXBlLCB7XHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pbml0U3RydWN0dXJlKCk7XHJcblx0XHRcdHRoaXMuYmluZEhhbmRsZXJzKCk7XHJcblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdFx0fSxcclxuXHRcdGluaXRTdHJ1Y3R1cmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBwcmVwYXJlIHN0cnVjdHVyZVxyXG5cdFx0XHR0aGlzLndpbiA9ICQod2luZG93KTtcclxuXHRcdFx0dGhpcy5kb2MgPSAkKGRvY3VtZW50KTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudCA9ICQodGhpcy5vcHRpb25zLmVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZmFrZUFyZWFTdHJ1Y3R1cmUpLmluc2VydEFmdGVyKHRoaXMucmVhbEVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdFRleHRDb250YWluZXIgPSB0aGlzLmZha2VFbGVtZW50LmZpbmQodGhpcy5vcHRpb25zLnNlbGVjdFRleHRTZWxlY3Rvcik7XHJcblx0XHRcdHRoaXMuc2VsZWN0VGV4dCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS5hcHBlbmRUbyh0aGlzLnNlbGVjdFRleHRDb250YWluZXIpO1xyXG5cdFx0XHRtYWtlVW5zZWxlY3RhYmxlKHRoaXMuZmFrZUVsZW1lbnQpO1xyXG5cclxuXHRcdFx0Ly8gY29weSBjbGFzc2VzIGZyb20gb3JpZ2luYWwgc2VsZWN0XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3MoZ2V0UHJlZml4ZWRDbGFzc2VzKHRoaXMucmVhbEVsZW1lbnQucHJvcCgnY2xhc3NOYW1lJyksIHRoaXMub3B0aW9ucy5zZWxlY3RDbGFzc1ByZWZpeCkpO1xyXG5cclxuXHRcdFx0Ly8gaGFuZGxlIGNvbXBhY3QgbXVsdGlwbGUgc3R5bGVcclxuXHRcdFx0aWYgKHRoaXMucmVhbEVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSkge1xyXG5cdFx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3MoJ2pjZi1jb21wYWN0LW11bHRpcGxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGRldGVjdCBkZXZpY2UgdHlwZSBhbmQgZHJvcGRvd24gYmVoYXZpb3JcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc01vYmlsZURldmljZSAmJiB0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZU9uTW9iaWxlICYmICF0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy53cmFwTmF0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy53cmFwTmF0aXZlKSB7XHJcblx0XHRcdFx0Ly8gd3JhcCBuYXRpdmUgc2VsZWN0IGluc2lkZSBmYWtlIGJsb2NrXHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5wcmVwZW5kVG8odGhpcy5mYWtlRWxlbWVudCkuY3NzKHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRcdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHRcdFx0fSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlc2V0QXBwZWFyYW5jZUNsYXNzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBqdXN0IGhpZGUgbmF0aXZlIHNlbGVjdFxyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmhpZGRlbkNsYXNzKTtcclxuXHRcdFx0XHR0aGlzLmZha2VFbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5yZWFsRWxlbWVudC5hdHRyKCd0aXRsZScpKTtcclxuXHRcdFx0XHR0aGlzLmZha2VEcm9wVGFyZ2V0ID0gdGhpcy5vcHRpb25zLmZha2VEcm9wSW5Cb2R5ID8gJCgnYm9keScpIDogdGhpcy5mYWtlRWxlbWVudDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGF0dGFjaEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGRlbGF5ZWQgcmVmcmVzaCBoYW5kbGVyXHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dGhpcy5kZWxheWVkUmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRzZWxmLnJlZnJlc2goKTtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmxpc3QpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5saXN0LnJlZnJlc2goKTtcclxuXHRcdFx0XHRcdFx0c2VsZi5saXN0LnNjcm9sbFRvQWN0aXZlT3B0aW9uKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvLyBuYXRpdmUgZHJvcGRvd24gZXZlbnQgaGFuZGxlcnNcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy53cmFwTmF0aXZlKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vbih7XHJcblx0XHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzLFxyXG5cdFx0XHRcdFx0Y2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdFx0Y2xpY2s6IHRoaXMub25DaGFuZ2UsXHJcblx0XHRcdFx0XHRrZXlkb3duOiB0aGlzLmRlbGF5ZWRSZWZyZXNoXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY3VzdG9tIGRyb3Bkb3duIGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vbih7XHJcblx0XHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzLFxyXG5cdFx0XHRcdFx0Y2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdFx0a2V5ZG93bjogdGhpcy5vbktleURvd25cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmZha2VFbGVtZW50Lm9uKHtcclxuXHRcdFx0XHRcdCdqY2YtcG9pbnRlcmRvd24nOiB0aGlzLm9uU2VsZWN0QXJlYVByZXNzXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbktleURvd246IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUud2hpY2ggPT09IDEzKSB7XHJcblx0XHRcdFx0dGhpcy50b2dnbGVEcm9wZG93bigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZHJvcEFjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuZGVsYXllZFJlZnJlc2goKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0XHR9LFxyXG5cdFx0b25Gb2N1czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghdGhpcy5wcmVzc2VkRmxhZyB8fCAhdGhpcy5mb2N1c2VkRmxhZykge1xyXG5cdFx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZvY3VzQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQub24oJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHRcdFx0dGhpcy50b2dnbGVMaXN0TW9kZSh0cnVlKTtcclxuXHRcdFx0XHR0aGlzLmZvY3VzZWRGbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQmx1cjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghdGhpcy5wcmVzc2VkRmxhZykge1xyXG5cdFx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZvY3VzQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQub2ZmKCdibHVyJywgdGhpcy5vbkJsdXIpO1xyXG5cdFx0XHRcdHRoaXMudG9nZ2xlTGlzdE1vZGUoZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNlZEZsYWcgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVzaXplOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHRoaXMuZHJvcEFjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuaGlkZURyb3Bkb3duKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNlbGVjdERyb3BQcmVzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMucHJlc3NlZEZsYWcgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdG9uU2VsZWN0RHJvcFJlbGVhc2U6IGZ1bmN0aW9uKGUsIHBvaW50ZXJFdmVudCkge1xyXG5cdFx0XHR0aGlzLnByZXNzZWRGbGFnID0gZmFsc2U7XHJcblx0XHRcdGlmIChwb2ludGVyRXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNlbGVjdEFyZWFQcmVzczogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvLyBza2lwIGNsaWNrIGlmIGRyb3AgaW5zaWRlIGZha2UgZWxlbWVudCBvciByZWFsIHNlbGVjdCBpcyBkaXNhYmxlZFxyXG5cdFx0XHR2YXIgZHJvcENsaWNrZWRJbnNpZGVGYWtlRWxlbWVudCA9ICF0aGlzLm9wdGlvbnMuZmFrZURyb3BJbkJvZHkgJiYgJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmRyb3Bkb3duKS5sZW5ndGg7XHJcblx0XHRcdGlmIChkcm9wQ2xpY2tlZEluc2lkZUZha2VFbGVtZW50IHx8IGUuYnV0dG9uID4gMSB8fCB0aGlzLnJlYWxFbGVtZW50LmlzKCc6ZGlzYWJsZWQnKSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdG9nZ2xlIGRyb3Bkb3duIHZpc2liaWxpdHlcclxuXHRcdFx0dGhpcy5zZWxlY3RPcGVuZWRCeUV2ZW50ID0gZS5wb2ludGVyVHlwZTtcclxuXHRcdFx0dGhpcy50b2dnbGVEcm9wZG93bigpO1xyXG5cclxuXHRcdFx0Ly8gbWlzYyBoYW5kbGVyc1xyXG5cdFx0XHRpZiAoIXRoaXMuZm9jdXNlZEZsYWcpIHtcclxuXHRcdFx0XHRpZiAoZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm9uRm9jdXMoZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucHJlc3NlZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5wcmVzc2VkQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLmRvYy5vbignamNmLXBvaW50ZXJ1cCcsIHRoaXMub25TZWxlY3RBcmVhUmVsZWFzZSk7XHJcblx0XHR9LFxyXG5cdFx0b25TZWxlY3RBcmVhUmVsZWFzZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRpZiAodGhpcy5mb2N1c2VkRmxhZyAmJiBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucHJlc3NlZEZsYWcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucHJlc3NlZENsYXNzKTtcclxuXHRcdFx0dGhpcy5kb2Mub2ZmKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5vblNlbGVjdEFyZWFSZWxlYXNlKTtcclxuXHRcdH0sXHJcblx0XHRvbk91dHNpZGVDbGljazogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXHJcblx0XHRcdFx0Y2xpY2tlZEluc2lkZVNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZmFrZUVsZW1lbnQpLmxlbmd0aCB8fCB0YXJnZXQuY2xvc2VzdCh0aGlzLmRyb3Bkb3duKS5sZW5ndGg7XHJcblxyXG5cdFx0XHRpZiAoIWNsaWNrZWRJbnNpZGVTZWxlY3QpIHtcclxuXHRcdFx0XHR0aGlzLmhpZGVEcm9wZG93bigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJlYWxFbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHR0aGlzLnJlcG9zaXRpb25Ecm9wZG93bigpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaGlkZURyb3Bkb3duKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZmlyZU5hdGl2ZUV2ZW50KHRoaXMucmVhbEVsZW1lbnQsICdjaGFuZ2UnKTtcclxuXHRcdH0sXHJcblx0XHR0b2dnbGVMaXN0TW9kZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSkge1xyXG5cdFx0XHRcdGlmIChzdGF0ZSkge1xyXG5cdFx0XHRcdFx0Ly8gdGVtcG9yYXJ5IGNoYW5nZSBzZWxlY3QgdG8gbGlzdCB0byBhdm9pZCBhcHBlYXJpbmcgb2YgbmF0aXZlIGRyb3Bkb3duXHJcblx0XHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LmF0dHIoe1xyXG5cdFx0XHRcdFx0XHRzaXplOiA0LFxyXG5cdFx0XHRcdFx0XHQnamNmLXNpemUnOiAnJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHJlc3RvcmUgc2VsZWN0IGZyb20gbGlzdCBtb2RlIHRvIGRyb3Bkb3duIHNlbGVjdFxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LnJlbW92ZUF0dHIoJ3NpemUgamNmLXNpemUnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVEcm9wZG93bjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGRlc3Ryb3kgcHJldmlvdXMgZHJvcGRvd24gaWYgbmVlZGVkXHJcblx0XHRcdGlmICh0aGlzLmRyb3Bkb3duKSB7XHJcblx0XHRcdFx0dGhpcy5saXN0LmRlc3Ryb3koKTtcclxuXHRcdFx0XHR0aGlzLmRyb3Bkb3duLnJlbW92ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgbmV3IGRyb3AgY29udGFpbmVyXHJcblx0XHRcdHRoaXMuZHJvcGRvd24gPSAkKHRoaXMub3B0aW9ucy5mYWtlRHJvcFN0cnVjdHVyZSkuYXBwZW5kVG8odGhpcy5mYWtlRHJvcFRhcmdldCk7XHJcblx0XHRcdHRoaXMuZHJvcGRvd24uYWRkQ2xhc3MoZ2V0UHJlZml4ZWRDbGFzc2VzKHRoaXMucmVhbEVsZW1lbnQucHJvcCgnY2xhc3NOYW1lJyksIHRoaXMub3B0aW9ucy5zZWxlY3RDbGFzc1ByZWZpeCkpO1xyXG5cdFx0XHRtYWtlVW5zZWxlY3RhYmxlKHRoaXMuZHJvcGRvd24pO1xyXG5cclxuXHRcdFx0Ly8gaGFuZGxlIGNvbXBhY3QgbXVsdGlwbGUgc3R5bGVcclxuXHRcdFx0aWYgKHRoaXMucmVhbEVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSkge1xyXG5cdFx0XHRcdHRoaXMuZHJvcGRvd24uYWRkQ2xhc3MoJ2pjZi1jb21wYWN0LW11bHRpcGxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHNldCBpbml0aWFsIHN0eWxlcyBmb3IgZHJvcGRvd24gaW4gYm9keVxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZha2VEcm9wSW5Cb2R5KSB7XHJcblx0XHRcdFx0dGhpcy5kcm9wZG93bi5jc3Moe1xyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHRcdFx0XHR0b3A6IC05OTk5XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBuZXcgc2VsZWN0IGxpc3QgaW5zdGFuY2VcclxuXHRcdFx0dGhpcy5saXN0ID0gbmV3IFNlbGVjdExpc3Qoe1xyXG5cdFx0XHRcdHVzZUhvdmVyQ2xhc3M6IHRydWUsXHJcblx0XHRcdFx0aGFuZGxlUmVzaXplOiBmYWxzZSxcclxuXHRcdFx0XHRhbHdheXNQcmV2ZW50TW91c2VXaGVlbDogdHJ1ZSxcclxuXHRcdFx0XHRtYXhWaXNpYmxlSXRlbXM6IHRoaXMub3B0aW9ucy5tYXhWaXNpYmxlSXRlbXMsXHJcblx0XHRcdFx0dXNlQ3VzdG9tU2Nyb2xsOiB0aGlzLm9wdGlvbnMudXNlQ3VzdG9tU2Nyb2xsLFxyXG5cdFx0XHRcdGhvbGRlcjogdGhpcy5kcm9wZG93bi5maW5kKHRoaXMub3B0aW9ucy5kcm9wQ29udGVudFNlbGVjdG9yKSxcclxuXHRcdFx0XHRtdWx0aXBsZVNlbGVjdFdpdGhvdXRLZXk6IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSxcclxuXHRcdFx0XHRlbGVtZW50OiB0aGlzLnJlYWxFbGVtZW50XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKHRoaXMubGlzdCkub24oe1xyXG5cdFx0XHRcdHNlbGVjdDogdGhpcy5vblNlbGVjdCxcclxuXHRcdFx0XHRwcmVzczogdGhpcy5vblNlbGVjdERyb3BQcmVzcyxcclxuXHRcdFx0XHRyZWxlYXNlOiB0aGlzLm9uU2VsZWN0RHJvcFJlbGVhc2VcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0cmVwb3NpdGlvbkRyb3Bkb3duOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGVjdE9mZnNldCA9IHRoaXMuZmFrZUVsZW1lbnQub2Zmc2V0KCksXHJcblx0XHRcdFx0ZmFrZUVsZW1lbnRCb3VuZHMgPSB0aGlzLmZha2VFbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdHNlbGVjdFdpZHRoID0gZmFrZUVsZW1lbnRCb3VuZHMud2lkdGggfHwgZmFrZUVsZW1lbnRCb3VuZHMucmlnaHQgLSBmYWtlRWxlbWVudEJvdW5kcy5sZWZ0LFxyXG5cdFx0XHRcdHNlbGVjdEhlaWdodCA9IHRoaXMuZmFrZUVsZW1lbnQub3V0ZXJIZWlnaHQoKSxcclxuXHRcdFx0XHRkcm9wSGVpZ2h0ID0gdGhpcy5kcm9wZG93bi5jc3MoJ3dpZHRoJywgc2VsZWN0V2lkdGgpLm91dGVySGVpZ2h0KCksXHJcblx0XHRcdFx0d2luU2Nyb2xsVG9wID0gdGhpcy53aW4uc2Nyb2xsVG9wKCksXHJcblx0XHRcdFx0d2luSGVpZ2h0ID0gdGhpcy53aW4uaGVpZ2h0KCksXHJcblx0XHRcdFx0Y2FsY1RvcCwgY2FsY0xlZnQsIGJvZHlPZmZzZXQsIG5lZWRGbGlwRHJvcCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly8gY2hlY2sgZmxpcCBkcm9wIHBvc2l0aW9uXHJcblx0XHRcdGlmIChzZWxlY3RPZmZzZXQudG9wICsgc2VsZWN0SGVpZ2h0ICsgZHJvcEhlaWdodCA+IHdpblNjcm9sbFRvcCArIHdpbkhlaWdodCAmJiBzZWxlY3RPZmZzZXQudG9wIC0gZHJvcEhlaWdodCA+IHdpblNjcm9sbFRvcCkge1xyXG5cdFx0XHRcdG5lZWRGbGlwRHJvcCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZmFrZURyb3BJbkJvZHkpIHtcclxuXHRcdFx0XHRib2R5T2Zmc2V0ID0gdGhpcy5mYWtlRHJvcFRhcmdldC5jc3MoJ3Bvc2l0aW9uJykgIT09ICdzdGF0aWMnID8gdGhpcy5mYWtlRHJvcFRhcmdldC5vZmZzZXQoKS50b3AgOiAwO1xyXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZmxpcERyb3BUb0ZpdCAmJiBuZWVkRmxpcERyb3ApIHtcclxuXHRcdFx0XHRcdC8vIGNhbGN1bGF0ZSBmbGlwcGVkIGRyb3Bkb3duIHBvc2l0aW9uXHJcblx0XHRcdFx0XHRjYWxjTGVmdCA9IHNlbGVjdE9mZnNldC5sZWZ0O1xyXG5cdFx0XHRcdFx0Y2FsY1RvcCA9IHNlbGVjdE9mZnNldC50b3AgLSBkcm9wSGVpZ2h0IC0gYm9keU9mZnNldDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gY2FsY3VsYXRlIGRlZmF1bHQgZHJvcCBwb3NpdGlvblxyXG5cdFx0XHRcdFx0Y2FsY0xlZnQgPSBzZWxlY3RPZmZzZXQubGVmdDtcclxuXHRcdFx0XHRcdGNhbGNUb3AgPSBzZWxlY3RPZmZzZXQudG9wICsgc2VsZWN0SGVpZ2h0IC0gYm9keU9mZnNldDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHVwZGF0ZSBkcm9wIHN0eWxlc1xyXG5cdFx0XHRcdHRoaXMuZHJvcGRvd24uY3NzKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBzZWxlY3RXaWR0aCxcclxuXHRcdFx0XHRcdGxlZnQ6IGNhbGNMZWZ0LFxyXG5cdFx0XHRcdFx0dG9wOiBjYWxjVG9wXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlZnJlc2ggZmxpcHBlZCBjbGFzc1xyXG5cdFx0XHR0aGlzLmRyb3Bkb3duLmFkZCh0aGlzLmZha2VFbGVtZW50KS50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZmxpcERyb3BDbGFzcywgdGhpcy5vcHRpb25zLmZsaXBEcm9wVG9GaXQgJiYgbmVlZEZsaXBEcm9wKTtcclxuXHRcdH0sXHJcblx0XHRzaG93RHJvcGRvd246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBkbyBub3Qgc2hvdyBlbXB0eSBjdXN0b20gZHJvcGRvd25cclxuXHRcdFx0aWYgKCF0aGlzLnJlYWxFbGVtZW50LnByb3AoJ29wdGlvbnMnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBvcHRpb25zIGxpc3QgaWYgbm90IGNyZWF0ZWRcclxuXHRcdFx0aWYgKCF0aGlzLmRyb3Bkb3duKSB7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVEcm9wZG93bigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBzaG93IGRyb3Bkb3duXHJcblx0XHRcdHRoaXMuZHJvcEFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZHJvcGRvd24uYXBwZW5kVG8odGhpcy5mYWtlRHJvcFRhcmdldCk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmRyb3BBY3RpdmVDbGFzcyk7XHJcblx0XHRcdHRoaXMucmVmcmVzaFNlbGVjdGVkVGV4dCgpO1xyXG5cdFx0XHR0aGlzLnJlcG9zaXRpb25Ecm9wZG93bigpO1xyXG5cdFx0XHR0aGlzLmxpc3Quc2V0U2Nyb2xsVG9wKHRoaXMuc2F2ZWRTY3JvbGxUb3ApO1xyXG5cdFx0XHR0aGlzLmxpc3QucmVmcmVzaCgpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHRlbXBvcmFyeSBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLndpbi5vbigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XHJcblx0XHRcdHRoaXMuZG9jLm9uKCdqY2YtcG9pbnRlcmRvd24nLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcclxuXHRcdH0sXHJcblx0XHRoaWRlRHJvcGRvd246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAodGhpcy5kcm9wZG93bikge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZWRTY3JvbGxUb3AgPSB0aGlzLmxpc3QuZ2V0U2Nyb2xsVG9wKCk7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZHJvcEFjdGl2ZUNsYXNzICsgJyAnICsgdGhpcy5vcHRpb25zLmZsaXBEcm9wQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMuZHJvcGRvd24ucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZsaXBEcm9wQ2xhc3MpLmRldGFjaCgpO1xyXG5cdFx0XHRcdHRoaXMuZG9jLm9mZignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vbk91dHNpZGVDbGljayk7XHJcblx0XHRcdFx0dGhpcy53aW4ub2ZmKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcclxuXHRcdFx0XHR0aGlzLmRyb3BBY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RPcGVuZWRCeUV2ZW50ID09PSAndG91Y2gnKSB7XHJcblx0XHRcdFx0XHR0aGlzLm9uQmx1cigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRvZ2dsZURyb3Bkb3duOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHRoaXMuZHJvcEFjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuaGlkZURyb3Bkb3duKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zaG93RHJvcGRvd24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2hTZWxlY3RlZFRleHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZWRyYXcgc2VsZWN0ZWQgYXJlYVxyXG5cdFx0XHR2YXIgc2VsZWN0ZWRJbmRleCA9IHRoaXMucmVhbEVsZW1lbnQucHJvcCgnc2VsZWN0ZWRJbmRleCcpLFxyXG5cdFx0XHRcdHNlbGVjdGVkT3B0aW9uID0gdGhpcy5yZWFsRWxlbWVudC5wcm9wKCdvcHRpb25zJylbc2VsZWN0ZWRJbmRleF0sXHJcblx0XHRcdFx0c2VsZWN0ZWRPcHRpb25JbWFnZSA9IHNlbGVjdGVkT3B0aW9uID8gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJykgOiBudWxsLFxyXG5cdFx0XHRcdHNlbGVjdGVkT3B0aW9uVGV4dCA9ICcnLFxyXG5cdFx0XHRcdHNlbGVjdGVkT3B0aW9uQ2xhc3NlcyxcclxuXHRcdFx0XHRzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICh0aGlzLnJlYWxFbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHQkLmVhY2godGhpcy5yZWFsRWxlbWVudC5wcm9wKCdvcHRpb25zJyksIGZ1bmN0aW9uKGluZGV4LCBvcHRpb24pIHtcclxuXHRcdFx0XHRcdGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRPcHRpb25UZXh0ICs9IChzZWxlY3RlZE9wdGlvblRleHQgPyAnLCAnIDogJycpICsgb3B0aW9uLmlubmVySFRNTDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoIXNlbGVjdGVkT3B0aW9uVGV4dCkge1xyXG5cdFx0XHRcdFx0c2VsZWN0ZWRPcHRpb25UZXh0ID0gc2VsZi5yZWFsRWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpIHx8ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdFRleHQucmVtb3ZlQXR0cignY2xhc3MnKS5odG1sKHNlbGVjdGVkT3B0aW9uVGV4dCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0SW1hZ2UpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0SW1hZ2UuaGlkZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdFRleHQucmVtb3ZlQXR0cignY2xhc3MnKS5lbXB0eSgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkVGV4dCAhPT0gc2VsZWN0ZWRPcHRpb24uaW5uZXJIVE1MIHx8IHRoaXMuY3VycmVudFNlbGVjdGVkSW1hZ2UgIT09IHNlbGVjdGVkT3B0aW9uSW1hZ2UpIHtcclxuXHRcdFx0XHRzZWxlY3RlZE9wdGlvbkNsYXNzZXMgPSBnZXRQcmVmaXhlZENsYXNzZXMoc2VsZWN0ZWRPcHRpb24uY2xhc3NOYW1lLCB0aGlzLm9wdGlvbnMub3B0aW9uQ2xhc3NQcmVmaXgpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0VGV4dC5hdHRyKCdjbGFzcycsIHNlbGVjdGVkT3B0aW9uQ2xhc3NlcykuaHRtbChzZWxlY3RlZE9wdGlvbi5pbm5lckhUTUwpO1xyXG5cclxuXHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25JbWFnZSkge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNlbGVjdEltYWdlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0SW1hZ2UgPSAkKCc8aW1nPicpLnByZXBlbmRUbyh0aGlzLnNlbGVjdFRleHRDb250YWluZXIpLmhpZGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0SW1hZ2UuYXR0cignc3JjJywgc2VsZWN0ZWRPcHRpb25JbWFnZSkuc2hvdygpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RJbWFnZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RJbWFnZS5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRTZWxlY3RlZFRleHQgPSBzZWxlY3RlZE9wdGlvbi5pbm5lckhUTUw7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50U2VsZWN0ZWRJbWFnZSA9IHNlbGVjdGVkT3B0aW9uSW1hZ2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVmcmVzaCBmYWtlIHNlbGVjdCB2aXNpYmlsaXR5XHJcblx0XHRcdGlmICh0aGlzLnJlYWxFbGVtZW50LnByb3AoJ3N0eWxlJykuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5oaWRlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5zaG93KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlZnJlc2ggc2VsZWN0ZWQgdGV4dFxyXG5cdFx0XHR0aGlzLnJlZnJlc2hTZWxlY3RlZFRleHQoKTtcclxuXHJcblx0XHRcdC8vIGhhbmRsZSBkaXNhYmxlZCBzdGF0ZVxyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzLCB0aGlzLnJlYWxFbGVtZW50LmlzKCc6ZGlzYWJsZWQnKSk7XHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlc3RvcmUgc3RydWN0dXJlXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMud3JhcE5hdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZmFrZUVsZW1lbnQpLmNzcyh7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJycsXHJcblx0XHRcdFx0XHRoZWlnaHQ6ICcnLFxyXG5cdFx0XHRcdFx0d2lkdGg6ICcnXHJcblx0XHRcdFx0fSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlc2V0QXBwZWFyYW5jZUNsYXNzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5oaWRkZW5DbGFzcyk7XHJcblx0XHRcdFx0aWYgKHRoaXMucmVhbEVsZW1lbnQuaXMoJ1tqY2Ytc2l6ZV0nKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5yZW1vdmVBdHRyKCdzaXplIGpjZi1zaXplJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZW1vdmluZyBlbGVtZW50IHdpbGwgYWxzbyByZW1vdmUgaXRzIGV2ZW50IGhhbmRsZXJzXHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHQvLyByZW1vdmUgb3RoZXIgZXZlbnQgaGFuZGxlcnNcclxuXHRcdFx0dGhpcy5kb2Mub2ZmKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5vblNlbGVjdEFyZWFSZWxlYXNlKTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoe1xyXG5cdFx0XHRcdGZvY3VzOiB0aGlzLm9uRm9jdXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIGxpc3Rib3ggbW9kdWxlXHJcblx0ZnVuY3Rpb24gTGlzdEJveChvcHRpb25zKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdHdyYXBOYXRpdmU6IHRydWUsXHJcblx0XHRcdHVzZUN1c3RvbVNjcm9sbDogdHJ1ZSxcclxuXHRcdFx0ZmFrZVN0cnVjdHVyZTogJzxzcGFuIGNsYXNzPVwiamNmLWxpc3QtYm94XCI+PHNwYW4gY2xhc3M9XCJqY2YtbGlzdC13cmFwcGVyXCI+PC9zcGFuPjwvc3Bhbj4nLFxyXG5cdFx0XHRzZWxlY3RDbGFzc1ByZWZpeDogJ2pjZi1zZWxlY3QtJyxcclxuXHRcdFx0bGlzdEhvbGRlcjogJy5qY2YtbGlzdC13cmFwcGVyJ1xyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblx0JC5leHRlbmQoTGlzdEJveC5wcm90b3R5cGUsIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmJpbmRIYW5kbGVycygpO1xyXG5cdFx0XHR0aGlzLmluaXRTdHJ1Y3R1cmUoKTtcclxuXHRcdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHRcdH0sXHJcblx0XHRpbml0U3RydWN0dXJlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudCA9ICQodGhpcy5vcHRpb25zLmVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZmFrZVN0cnVjdHVyZSkuaW5zZXJ0QWZ0ZXIodGhpcy5yZWFsRWxlbWVudCk7XHJcblx0XHRcdHRoaXMubGlzdEhvbGRlciA9IHRoaXMuZmFrZUVsZW1lbnQuZmluZCh0aGlzLm9wdGlvbnMubGlzdEhvbGRlcik7XHJcblx0XHRcdG1ha2VVbnNlbGVjdGFibGUodGhpcy5mYWtlRWxlbWVudCk7XHJcblxyXG5cdFx0XHQvLyBjb3B5IGNsYXNzZXMgZnJvbSBvcmlnaW5hbCBzZWxlY3RcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5hZGRDbGFzcyhnZXRQcmVmaXhlZENsYXNzZXModGhpcy5yZWFsRWxlbWVudC5wcm9wKCdjbGFzc05hbWUnKSwgdGhpcy5vcHRpb25zLnNlbGVjdENsYXNzUHJlZml4KSk7XHJcblx0XHRcdHRoaXMucmVhbEVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmhpZGRlbkNsYXNzKTtcclxuXHJcblx0XHRcdHRoaXMubGlzdCA9IG5ldyBTZWxlY3RMaXN0KHtcclxuXHRcdFx0XHR1c2VDdXN0b21TY3JvbGw6IHRoaXMub3B0aW9ucy51c2VDdXN0b21TY3JvbGwsXHJcblx0XHRcdFx0aG9sZGVyOiB0aGlzLmxpc3RIb2xkZXIsXHJcblx0XHRcdFx0c2VsZWN0T25DbGljazogZmFsc2UsXHJcblx0XHRcdFx0ZWxlbWVudDogdGhpcy5yZWFsRWxlbWVudFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRhdHRhY2hFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBkZWxheWVkIHJlZnJlc2ggaGFuZGxlclxyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHRoaXMuZGVsYXllZFJlZnJlc2ggPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKGUgJiYgKGUud2hpY2ggPT09IDE2IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5hbHRLZXkpKSB7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgbW9kaWZpZXIga2V5c1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoc2VsZi5yZWZyZXNoVGltZXIpO1xyXG5cdFx0XHRcdFx0c2VsZi5yZWZyZXNoVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLnJlZnJlc2goKTtcclxuXHRcdFx0XHRcdFx0c2VsZi5saXN0LnNjcm9sbFRvQWN0aXZlT3B0aW9uKCk7XHJcblx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvLyBvdGhlciBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKHtcclxuXHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzLFxyXG5cdFx0XHRcdGNsaWNrOiB0aGlzLmRlbGF5ZWRSZWZyZXNoLFxyXG5cdFx0XHRcdGtleWRvd246IHRoaXMuZGVsYXllZFJlZnJlc2hcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBzZWxlY3QgbGlzdCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHQkKHRoaXMubGlzdCkub24oe1xyXG5cdFx0XHRcdHNlbGVjdDogdGhpcy5vblNlbGVjdCxcclxuXHRcdFx0XHRwcmVzczogdGhpcy5vbkZha2VPcHRpb25zUHJlc3MsXHJcblx0XHRcdFx0cmVsZWFzZTogdGhpcy5vbkZha2VPcHRpb25zUmVsZWFzZVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvbkZha2VPcHRpb25zUHJlc3M6IGZ1bmN0aW9uKGUsIHBvaW50ZXJFdmVudCkge1xyXG5cdFx0XHR0aGlzLnByZXNzZWRGbGFnID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHBvaW50ZXJFdmVudC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQuZm9jdXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uRmFrZU9wdGlvbnNSZWxlYXNlOiBmdW5jdGlvbihlLCBwb2ludGVyRXZlbnQpIHtcclxuXHRcdFx0dGhpcy5wcmVzc2VkRmxhZyA9IGZhbHNlO1xyXG5cdFx0XHRpZiAocG9pbnRlckV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmZpcmVOYXRpdmVFdmVudCh0aGlzLnJlYWxFbGVtZW50LCAnY2hhbmdlJyk7XHJcblx0XHRcdHRoaXMuZmlyZU5hdGl2ZUV2ZW50KHRoaXMucmVhbEVsZW1lbnQsICdjbGljaycpO1xyXG5cdFx0fSxcclxuXHRcdG9uRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIXRoaXMucHJlc3NlZEZsYWcgfHwgIXRoaXMuZm9jdXNlZEZsYWcpIHtcclxuXHRcdFx0XHR0aGlzLmZha2VFbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5mb2N1c0NsYXNzKTtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKCdibHVyJywgdGhpcy5vbkJsdXIpO1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNlZEZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25CbHVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnByZXNzZWRGbGFnKSB7XHJcblx0XHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9jdXNDbGFzcyk7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5vZmYoJ2JsdXInLCB0aGlzLm9uQmx1cik7XHJcblx0XHRcdFx0dGhpcy5mb2N1c2VkRmxhZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cmVmcmVzaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmRpc2FibGVkQ2xhc3MsIHRoaXMucmVhbEVsZW1lbnQuaXMoJzpkaXNhYmxlZCcpKTtcclxuXHRcdFx0dGhpcy5saXN0LnJlZnJlc2goKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5saXN0LmRlc3Ryb3koKTtcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5mYWtlRWxlbWVudCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmhpZGRlbkNsYXNzKTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gb3B0aW9ucyBsaXN0IG1vZHVsZVxyXG5cdGZ1bmN0aW9uIFNlbGVjdExpc3Qob3B0aW9ucykge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRob2xkZXI6IG51bGwsXHJcblx0XHRcdG1heFZpc2libGVJdGVtczogMTAsXHJcblx0XHRcdHNlbGVjdE9uQ2xpY2s6IHRydWUsXHJcblx0XHRcdHVzZUhvdmVyQ2xhc3M6IGZhbHNlLFxyXG5cdFx0XHR1c2VDdXN0b21TY3JvbGw6IGZhbHNlLFxyXG5cdFx0XHRoYW5kbGVSZXNpemU6IHRydWUsXHJcblx0XHRcdG11bHRpcGxlU2VsZWN0V2l0aG91dEtleTogZmFsc2UsXHJcblx0XHRcdGFsd2F5c1ByZXZlbnRNb3VzZVdoZWVsOiBmYWxzZSxcclxuXHRcdFx0aW5kZXhBdHRyaWJ1dGU6ICdkYXRhLWluZGV4JyxcclxuXHRcdFx0Y2xvbmVDbGFzc1ByZWZpeDogJ2pjZi1vcHRpb24tJyxcclxuXHRcdFx0Y29udGFpbmVyU3RydWN0dXJlOiAnPHNwYW4gY2xhc3M9XCJqY2YtbGlzdFwiPjxzcGFuIGNsYXNzPVwiamNmLWxpc3QtY29udGVudFwiPjwvc3Bhbj48L3NwYW4+JyxcclxuXHRcdFx0Y29udGFpbmVyU2VsZWN0b3I6ICcuamNmLWxpc3QtY29udGVudCcsXHJcblx0XHRcdGNhcHRpb25DbGFzczogJ2pjZi1vcHRncm91cC1jYXB0aW9uJyxcclxuXHRcdFx0ZGlzYWJsZWRDbGFzczogJ2pjZi1kaXNhYmxlZCcsXHJcblx0XHRcdG9wdGlvbkNsYXNzOiAnamNmLW9wdGlvbicsXHJcblx0XHRcdGdyb3VwQ2xhc3M6ICdqY2Ytb3B0Z3JvdXAnLFxyXG5cdFx0XHRob3ZlckNsYXNzOiAnamNmLWhvdmVyJyxcclxuXHRcdFx0c2VsZWN0ZWRDbGFzczogJ2pjZi1zZWxlY3RlZCcsXHJcblx0XHRcdHNjcm9sbENsYXNzOiAnamNmLXNjcm9sbC1hY3RpdmUnXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHQkLmV4dGVuZChTZWxlY3RMaXN0LnByb3RvdHlwZSwge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaW5pdFN0cnVjdHVyZSgpO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2hTZWxlY3RlZENsYXNzKCk7XHJcblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHR9LFxyXG5cdFx0aW5pdFN0cnVjdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudCA9ICQodGhpcy5vcHRpb25zLmVsZW1lbnQpO1xyXG5cdFx0XHR0aGlzLmluZGV4U2VsZWN0b3IgPSAnWycgKyB0aGlzLm9wdGlvbnMuaW5kZXhBdHRyaWJ1dGUgKyAnXSc7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyID0gJCh0aGlzLm9wdGlvbnMuY29udGFpbmVyU3RydWN0dXJlKS5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuaG9sZGVyKTtcclxuXHRcdFx0dGhpcy5saXN0SG9sZGVyID0gdGhpcy5jb250YWluZXIuZmluZCh0aGlzLm9wdGlvbnMuY29udGFpbmVyU2VsZWN0b3IpO1xyXG5cdFx0XHR0aGlzLmxhc3RDbGlja2VkSW5kZXggPSB0aGlzLmVsZW1lbnQucHJvcCgnc2VsZWN0ZWRJbmRleCcpO1xyXG5cdFx0XHR0aGlzLnJlYnVpbGRMaXN0KCk7XHJcblxyXG5cdFx0XHQvLyBzYXZlIGN1cnJlbnQgc2VsZWN0aW9uIGluIG11bHRpcGxlIHNlbGVjdFxyXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHR0aGlzLnByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnNJbmRleGVzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhdHRhY2hFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmJpbmRIYW5kbGVycygpO1xyXG5cdFx0XHR0aGlzLmxpc3RIb2xkZXIub24oJ2pjZi1wb2ludGVyZG93bicsIHRoaXMuaW5kZXhTZWxlY3RvciwgdGhpcy5vbkl0ZW1QcmVzcyk7XHJcblx0XHRcdHRoaXMubGlzdEhvbGRlci5vbignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vblByZXNzKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMudXNlSG92ZXJDbGFzcykge1xyXG5cdFx0XHRcdHRoaXMubGlzdEhvbGRlci5vbignamNmLXBvaW50ZXJvdmVyJywgdGhpcy5pbmRleFNlbGVjdG9yLCB0aGlzLm9uSG92ZXJJdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUHJlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdwcmVzcycsIGUpO1xyXG5cdFx0XHR0aGlzLmxpc3RIb2xkZXIub24oJ2pjZi1wb2ludGVydXAnLCB0aGlzLm9uUmVsZWFzZSk7XHJcblx0XHR9LFxyXG5cdFx0b25SZWxlYXNlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCQodGhpcykudHJpZ2dlcigncmVsZWFzZScsIGUpO1xyXG5cdFx0XHR0aGlzLmxpc3RIb2xkZXIub2ZmKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5vblJlbGVhc2UpO1xyXG5cdFx0fSxcclxuXHRcdG9uSG92ZXJJdGVtOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciBob3ZlckluZGV4ID0gcGFyc2VGbG9hdChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5pbmRleEF0dHJpYnV0ZSkpO1xyXG5cdFx0XHR0aGlzLmZha2VPcHRpb25zLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKS5lcShob3ZlckluZGV4KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyk7XHJcblx0XHR9LFxyXG5cdFx0b25JdGVtUHJlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgfHwgdGhpcy5vcHRpb25zLnNlbGVjdE9uQ2xpY2spIHtcclxuXHRcdFx0XHQvLyBzZWxlY3Qgb3B0aW9uIGFmdGVyIFwiY2xpY2tcIlxyXG5cdFx0XHRcdHRoaXMudG1wTGlzdE9mZnNldFRvcCA9IHRoaXMubGlzdC5vZmZzZXQoKS50b3A7XHJcblx0XHRcdFx0dGhpcy5saXN0SG9sZGVyLm9uKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5pbmRleFNlbGVjdG9yLCB0aGlzLm9uSXRlbVJlbGVhc2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNlbGVjdCBvcHRpb24gaW1tZWRpYXRlbHlcclxuXHRcdFx0XHR0aGlzLm9uU2VsZWN0SXRlbShlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uSXRlbVJlbGVhc2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Ly8gcmVtb3ZlIGV2ZW50IGhhbmRsZXJzIGFuZCB0ZW1wb3JhcnkgZGF0YVxyXG5cdFx0XHR0aGlzLmxpc3RIb2xkZXIub2ZmKCdqY2YtcG9pbnRlcnVwJywgdGhpcy5pbmRleFNlbGVjdG9yLCB0aGlzLm9uSXRlbVJlbGVhc2UpO1xyXG5cclxuXHRcdFx0Ly8gc2ltdWxhdGUgaXRlbSBzZWxlY3Rpb25cclxuXHRcdFx0aWYgKHRoaXMudG1wTGlzdE9mZnNldFRvcCA9PT0gdGhpcy5saXN0Lm9mZnNldCgpLnRvcCkge1xyXG5cdFx0XHRcdHRoaXMubGlzdEhvbGRlci5vbignY2xpY2snLCB0aGlzLmluZGV4U2VsZWN0b3IsIHsgc2F2ZWRQb2ludGVyVHlwZTogZS5wb2ludGVyVHlwZSB9LCB0aGlzLm9uU2VsZWN0SXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsZXRlIHRoaXMudG1wTGlzdE9mZnNldFRvcDtcclxuXHRcdH0sXHJcblx0XHRvblNlbGVjdEl0ZW06IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIGNsaWNrZWRJbmRleCA9IHBhcnNlRmxvYXQoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuaW5kZXhBdHRyaWJ1dGUpKSxcclxuXHRcdFx0XHRwb2ludGVyVHlwZSA9IGUuZGF0YSAmJiBlLmRhdGEuc2F2ZWRQb2ludGVyVHlwZSB8fCBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZScsXHJcblx0XHRcdFx0cmFuZ2U7XHJcblxyXG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnQgaGFuZGxlclxyXG5cdFx0XHR0aGlzLmxpc3RIb2xkZXIub2ZmKCdjbGljaycsIHRoaXMuaW5kZXhTZWxlY3RvciwgdGhpcy5vblNlbGVjdEl0ZW0pO1xyXG5cclxuXHRcdFx0Ly8gaWdub3JlIGNsaWNrcyBvbiBkaXNhYmxlZCBvcHRpb25zXHJcblx0XHRcdGlmIChlLmJ1dHRvbiA+IDEgfHwgdGhpcy5yZWFsT3B0aW9uc1tjbGlja2VkSW5kZXhdLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHRpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBwb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyB8fCB0aGlzLm9wdGlvbnMubXVsdGlwbGVTZWxlY3RXaXRob3V0S2V5KSB7XHJcblx0XHRcdFx0XHQvLyBpZiBDVFJML0NNRCBwcmVzc2VkIG9yIHRvdWNoIGRldmljZXMgLSB0b2dnbGUgc2VsZWN0ZWQgb3B0aW9uXHJcblx0XHRcdFx0XHR0aGlzLnJlYWxPcHRpb25zW2NsaWNrZWRJbmRleF0uc2VsZWN0ZWQgPSAhdGhpcy5yZWFsT3B0aW9uc1tjbGlja2VkSW5kZXhdLnNlbGVjdGVkO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgU0hJRlQgcHJlc3NlZCAtIHVwZGF0ZSBzZWxlY3Rpb25cclxuXHRcdFx0XHRcdHJhbmdlID0gW3RoaXMubGFzdENsaWNrZWRJbmRleCwgY2xpY2tlZEluZGV4XS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGEgLSBiO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLnJlYWxPcHRpb25zLmVhY2goZnVuY3Rpb24oaW5kZXgsIG9wdGlvbikge1xyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSAoaW5kZXggPj0gcmFuZ2VbMF0gJiYgaW5kZXggPD0gcmFuZ2VbMV0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHNldCBzaW5nbGUgc2VsZWN0ZWQgaW5kZXhcclxuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5wcm9wKCdzZWxlY3RlZEluZGV4JywgY2xpY2tlZEluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnByb3AoJ3NlbGVjdGVkSW5kZXgnLCBjbGlja2VkSW5kZXgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBzYXZlIGxhc3QgY2xpY2tlZCBvcHRpb25cclxuXHRcdFx0aWYgKCFlLnNoaWZ0S2V5KSB7XHJcblx0XHRcdFx0dGhpcy5sYXN0Q2xpY2tlZEluZGV4ID0gY2xpY2tlZEluZGV4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWZyZXNoIGNsYXNzZXNcclxuXHRcdFx0dGhpcy5yZWZyZXNoU2VsZWN0ZWRDbGFzcygpO1xyXG5cclxuXHRcdFx0Ly8gc2Nyb2xsIHRvIGFjdGl2ZSBpdGVtIGluIGRlc2t0b3AgYnJvd3NlcnNcclxuXHRcdFx0aWYgKHBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxUb0FjdGl2ZU9wdGlvbigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBtYWtlIGNhbGxiYWNrIHdoZW4gaXRlbSBzZWxlY3RlZFxyXG5cdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ3NlbGVjdCcpO1xyXG5cdFx0fSxcclxuXHRcdHJlYnVpbGRMaXN0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVidWlsZCBvcHRpb25zXHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRyb290RWxlbWVudCA9IHRoaXMuZWxlbWVudFswXTtcclxuXHJcblx0XHRcdC8vIHJlY3Vyc2l2ZWx5IGNyZWF0ZSBmYWtlIG9wdGlvbnNcclxuXHRcdFx0dGhpcy5zdG9yZWRTZWxlY3RIVE1MID0gcm9vdEVsZW1lbnQuaW5uZXJIVE1MO1xyXG5cdFx0XHR0aGlzLm9wdGlvbkluZGV4ID0gMDtcclxuXHRcdFx0dGhpcy5saXN0ID0gJCh0aGlzLmNyZWF0ZU9wdGlvbnNMaXN0KHJvb3RFbGVtZW50KSk7XHJcblx0XHRcdHRoaXMubGlzdEhvbGRlci5lbXB0eSgpLmFwcGVuZCh0aGlzLmxpc3QpO1xyXG5cdFx0XHR0aGlzLnJlYWxPcHRpb25zID0gdGhpcy5lbGVtZW50LmZpbmQoJ29wdGlvbicpO1xyXG5cdFx0XHR0aGlzLmZha2VPcHRpb25zID0gdGhpcy5saXN0LmZpbmQodGhpcy5pbmRleFNlbGVjdG9yKTtcclxuXHRcdFx0dGhpcy5mYWtlTGlzdEl0ZW1zID0gdGhpcy5saXN0LmZpbmQoJy4nICsgdGhpcy5vcHRpb25zLmNhcHRpb25DbGFzcyArICcsJyArIHRoaXMuaW5kZXhTZWxlY3Rvcik7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLm9wdGlvbkluZGV4O1xyXG5cclxuXHRcdFx0Ly8gZGV0ZWN0IG1heCB2aXNpYmxlIGl0ZW1zXHJcblx0XHRcdHZhciBtYXhDb3VudCA9IHRoaXMub3B0aW9ucy5tYXhWaXNpYmxlSXRlbXMsXHJcblx0XHRcdFx0c2l6ZVZhbHVlID0gdGhpcy5lbGVtZW50LnByb3AoJ3NpemUnKTtcclxuXHRcdFx0aWYgKHNpemVWYWx1ZSA+IDEgJiYgIXRoaXMuZWxlbWVudC5pcygnW2pjZi1zaXplXScpKSB7XHJcblx0XHRcdFx0bWF4Q291bnQgPSBzaXplVmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGhhbmRsZSBzY3JvbGxiYXJcclxuXHRcdFx0dmFyIG5lZWRTY3JvbGxCYXIgPSB0aGlzLmZha2VPcHRpb25zLmxlbmd0aCA+IG1heENvdW50O1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc2Nyb2xsQ2xhc3MsIG5lZWRTY3JvbGxCYXIpO1xyXG5cdFx0XHRpZiAobmVlZFNjcm9sbEJhcikge1xyXG5cdFx0XHRcdC8vIGNoYW5nZSBtYXgtaGVpZ2h0XHJcblx0XHRcdFx0dGhpcy5saXN0SG9sZGVyLmNzcyh7XHJcblx0XHRcdFx0XHRtYXhIZWlnaHQ6IHRoaXMuZ2V0T3ZlcmZsb3dIZWlnaHQobWF4Q291bnQpLFxyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6ICdhdXRvJ1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZUN1c3RvbVNjcm9sbCAmJiBqY2YubW9kdWxlcy5TY3JvbGxhYmxlKSB7XHJcblx0XHRcdFx0XHQvLyBhZGQgY3VzdG9tIHNjcm9sbGJhciBpZiBzcGVjaWZpZWQgaW4gb3B0aW9uc1xyXG5cdFx0XHRcdFx0amNmLnJlcGxhY2UodGhpcy5saXN0SG9sZGVyLCAnU2Nyb2xsYWJsZScsIHtcclxuXHRcdFx0XHRcdFx0aGFuZGxlUmVzaXplOiB0aGlzLm9wdGlvbnMuaGFuZGxlUmVzaXplLFxyXG5cdFx0XHRcdFx0XHRhbHdheXNQcmV2ZW50TW91c2VXaGVlbDogdGhpcy5vcHRpb25zLmFsd2F5c1ByZXZlbnRNb3VzZVdoZWVsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGRpc2FibGUgZWRnZSB3aGVlbCBzY3JvbGxpbmdcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5hbHdheXNQcmV2ZW50TW91c2VXaGVlbCkge1xyXG5cdFx0XHRcdHRoaXMucHJldmVudFdoZWVsSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50U2Nyb2xsVG9wID0gc2VsZi5saXN0SG9sZGVyLnNjcm9sbFRvcCgpLFxyXG5cdFx0XHRcdFx0XHRtYXhTY3JvbGxUb3AgPSBzZWxmLmxpc3RIb2xkZXIucHJvcCgnc2Nyb2xsSGVpZ2h0JykgLSBzZWxmLmxpc3RIb2xkZXIuaW5uZXJIZWlnaHQoKTtcclxuXHJcblx0XHRcdFx0XHQvLyBjaGVjayBlZGdlIGNhc2VzXHJcblx0XHRcdFx0XHRpZiAoKGN1cnJlbnRTY3JvbGxUb3AgPD0gMCAmJiBlLmRlbHRhWSA8IDApIHx8IChjdXJyZW50U2Nyb2xsVG9wID49IG1heFNjcm9sbFRvcCAmJiBlLmRlbHRhWSA+IDApKSB7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMubGlzdEhvbGRlci5vbignamNmLW1vdXNld2hlZWwnLCB0aGlzLnByZXZlbnRXaGVlbEhhbmRsZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cmVmcmVzaFNlbGVjdGVkQ2xhc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0c2VsZWN0ZWRJdGVtLFxyXG5cdFx0XHRcdGlzTXVsdGlwbGUgPSB0aGlzLmVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSxcclxuXHRcdFx0XHRzZWxlY3RlZEluZGV4ID0gdGhpcy5lbGVtZW50LnByb3AoJ3NlbGVjdGVkSW5kZXgnKTtcclxuXHJcblx0XHRcdGlmIChpc011bHRpcGxlKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsT3B0aW9ucy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBvcHRpb24pIHtcclxuXHRcdFx0XHRcdHNlbGYuZmFrZU9wdGlvbnMuZXEoaW5kZXgpLnRvZ2dsZUNsYXNzKHNlbGYub3B0aW9ucy5zZWxlY3RlZENsYXNzLCAhIW9wdGlvbi5zZWxlY3RlZCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mYWtlT3B0aW9ucy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyArICcgJyArIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKTtcclxuXHRcdFx0XHRzZWxlY3RlZEl0ZW0gPSB0aGlzLmZha2VPcHRpb25zLmVxKHNlbGVjdGVkSW5kZXgpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcclxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZUhvdmVyQ2xhc3MpIHtcclxuXHRcdFx0XHRcdHNlbGVjdGVkSXRlbS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2Nyb2xsVG9BY3RpdmVPcHRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBzY3JvbGwgdG8gdGFyZ2V0IG9wdGlvblxyXG5cdFx0XHR2YXIgdGFyZ2V0T2Zmc2V0ID0gdGhpcy5nZXRBY3RpdmVPcHRpb25PZmZzZXQoKTtcclxuXHRcdFx0aWYgKHR5cGVvZiB0YXJnZXRPZmZzZXQgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0dGhpcy5saXN0SG9sZGVyLnByb3AoJ3Njcm9sbFRvcCcsIHRhcmdldE9mZnNldCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRnZXRTZWxlY3RlZE9wdGlvbnNJbmRleGVzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGVjdGlvbiA9IFtdO1xyXG5cdFx0XHR0aGlzLnJlYWxPcHRpb25zLmVhY2goZnVuY3Rpb24oaW5kZXgsIG9wdGlvbikge1xyXG5cdFx0XHRcdGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdHNlbGVjdGlvbi5wdXNoKGluZGV4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gc2VsZWN0aW9uO1xyXG5cdFx0fSxcclxuXHRcdGdldENoYW5nZWRTZWxlY3RlZEluZGV4OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGVjdGVkSW5kZXggPSB0aGlzLmVsZW1lbnQucHJvcCgnc2VsZWN0ZWRJbmRleCcpLFxyXG5cdFx0XHRcdHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdGZvdW5kID0gZmFsc2UsXHJcblx0XHRcdFx0dGFyZ2V0SW5kZXggPSBudWxsO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XHJcblx0XHRcdFx0Ly8gbXVsdGlwbGUgc2VsZWN0cyBoYW5kbGluZ1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zSW5kZXhlcygpO1xyXG5cdFx0XHRcdCQuZWFjaCh0aGlzLmN1cnJlbnRTZWxlY3Rpb24sIGZ1bmN0aW9uKGluZGV4LCBvcHRpb25JbmRleCkge1xyXG5cdFx0XHRcdFx0aWYgKCFmb3VuZCAmJiBzZWxmLnByZXZpb3VzU2VsZWN0aW9uLmluZGV4T2Yob3B0aW9uSW5kZXgpIDwgMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRmb3VuZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGFyZ2V0SW5kZXggPSBvcHRpb25JbmRleDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5jdXJyZW50U2VsZWN0aW9uO1xyXG5cdFx0XHRcdHJldHVybiB0YXJnZXRJbmRleDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBzaW5nbGUgY2hvaWNlIHNlbGVjdHMgaGFuZGxpbmdcclxuXHRcdFx0XHRyZXR1cm4gc2VsZWN0ZWRJbmRleDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGdldEFjdGl2ZU9wdGlvbk9mZnNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGNhbGMgdmFsdWVzXHJcblx0XHRcdHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmdldENoYW5nZWRTZWxlY3RlZEluZGV4KCk7XHJcblxyXG5cdFx0XHQvLyBzZWxlY3Rpb24gd2FzIG5vdCBjaGFuZ2VkXHJcblx0XHRcdGlmIChjdXJyZW50SW5kZXggPT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGZpbmQgb3B0aW9uIGFuZCBzY3JvbGwgdG8gaXQgaWYgbmVlZGVkXHJcblx0XHRcdHZhciBkcm9wSGVpZ2h0ID0gdGhpcy5saXN0SG9sZGVyLmhlaWdodCgpLFxyXG5cdFx0XHRcdGRyb3BTY3JvbGxUb3AgPSB0aGlzLmxpc3RIb2xkZXIucHJvcCgnc2Nyb2xsVG9wJyksXHJcblx0XHRcdFx0ZmFrZU9wdGlvbiA9IHRoaXMuZmFrZU9wdGlvbnMuZXEoY3VycmVudEluZGV4KSxcclxuXHRcdFx0XHRmYWtlT3B0aW9uT2Zmc2V0ID0gZmFrZU9wdGlvbi5vZmZzZXQoKS50b3AgLSB0aGlzLmxpc3Qub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdGZha2VPcHRpb25IZWlnaHQgPSBmYWtlT3B0aW9uLmlubmVySGVpZ2h0KCk7XHJcblxyXG5cdFx0XHQvLyBzY3JvbGwgbGlzdFxyXG5cdFx0XHRpZiAoZmFrZU9wdGlvbk9mZnNldCArIGZha2VPcHRpb25IZWlnaHQgPj0gZHJvcFNjcm9sbFRvcCArIGRyb3BIZWlnaHQpIHtcclxuXHRcdFx0XHQvLyBzY3JvbGwgZG93biAoYWx3YXlzIHNjcm9sbCB0byBvcHRpb24pXHJcblx0XHRcdFx0cmV0dXJuIGZha2VPcHRpb25PZmZzZXQgLSBkcm9wSGVpZ2h0ICsgZmFrZU9wdGlvbkhlaWdodDtcclxuXHRcdFx0fSBlbHNlIGlmIChmYWtlT3B0aW9uT2Zmc2V0IDwgZHJvcFNjcm9sbFRvcCkge1xyXG5cdFx0XHRcdC8vIHNjcm9sbCB1cCB0byBvcHRpb25cclxuXHRcdFx0XHRyZXR1cm4gZmFrZU9wdGlvbk9mZnNldDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGdldE92ZXJmbG93SGVpZ2h0OiBmdW5jdGlvbihzaXplVmFsdWUpIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLmZha2VMaXN0SXRlbXMuZXEoc2l6ZVZhbHVlIC0gMSksXHJcblx0XHRcdFx0bGlzdE9mZnNldCA9IHRoaXMubGlzdC5vZmZzZXQoKS50b3AsXHJcblx0XHRcdFx0aXRlbU9mZnNldCA9IGl0ZW0ub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdGl0ZW1IZWlnaHQgPSBpdGVtLmlubmVySGVpZ2h0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gaXRlbU9mZnNldCArIGl0ZW1IZWlnaHQgLSBsaXN0T2Zmc2V0O1xyXG5cdFx0fSxcclxuXHRcdGdldFNjcm9sbFRvcDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmxpc3RIb2xkZXIuc2Nyb2xsVG9wKCk7XHJcblx0XHR9LFxyXG5cdFx0c2V0U2Nyb2xsVG9wOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLmxpc3RIb2xkZXIuc2Nyb2xsVG9wKHZhbHVlKTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVPcHRpb246IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cdFx0XHR2YXIgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHRuZXdPcHRpb24uY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLm9wdGlvbkNsYXNzO1xyXG5cdFx0XHRuZXdPcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uLmlubmVySFRNTDtcclxuXHRcdFx0bmV3T3B0aW9uLnNldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuaW5kZXhBdHRyaWJ1dGUsIHRoaXMub3B0aW9uSW5kZXgrKyk7XHJcblxyXG5cdFx0XHR2YXIgb3B0aW9uSW1hZ2UsIG9wdGlvbkltYWdlU3JjID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScpO1xyXG5cdFx0XHRpZiAob3B0aW9uSW1hZ2VTcmMpIHtcclxuXHRcdFx0XHRvcHRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdFx0XHRcdG9wdGlvbkltYWdlLnNyYyA9IG9wdGlvbkltYWdlU3JjO1xyXG5cdFx0XHRcdG5ld09wdGlvbi5pbnNlcnRCZWZvcmUob3B0aW9uSW1hZ2UsIG5ld09wdGlvbi5jaGlsZE5vZGVzWzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob3B0aW9uLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0bmV3T3B0aW9uLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob3B0aW9uLmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdG5ld09wdGlvbi5jbGFzc05hbWUgKz0gJyAnICsgZ2V0UHJlZml4ZWRDbGFzc2VzKG9wdGlvbi5jbGFzc05hbWUsIHRoaXMub3B0aW9ucy5jbG9uZUNsYXNzUHJlZml4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbmV3T3B0aW9uO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZU9wdEdyb3VwOiBmdW5jdGlvbihvcHRncm91cCkge1xyXG5cdFx0XHR2YXIgb3B0R3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdFx0b3B0R3JvdXBOYW1lID0gb3B0Z3JvdXAuZ2V0QXR0cmlidXRlKCdsYWJlbCcpLFxyXG5cdFx0XHRcdG9wdEdyb3VwQ2FwdGlvbiwgb3B0R3JvdXBMaXN0O1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGNhcHRpb25cclxuXHRcdFx0b3B0R3JvdXBDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHRvcHRHcm91cENhcHRpb24uY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmNhcHRpb25DbGFzcztcclxuXHRcdFx0b3B0R3JvdXBDYXB0aW9uLmlubmVySFRNTCA9IG9wdEdyb3VwTmFtZTtcclxuXHRcdFx0b3B0R3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0R3JvdXBDYXB0aW9uKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBsaXN0IG9mIG9wdGlvbnNcclxuXHRcdFx0aWYgKG9wdGdyb3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdG9wdEdyb3VwTGlzdCA9IHRoaXMuY3JlYXRlT3B0aW9uc0xpc3Qob3B0Z3JvdXApO1xyXG5cdFx0XHRcdG9wdEdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdEdyb3VwTGlzdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG9wdEdyb3VwQ29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5ncm91cENsYXNzO1xyXG5cdFx0XHRyZXR1cm4gb3B0R3JvdXBDb250YWluZXI7XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlT3B0aW9uQ29udGFpbmVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRcdHJldHVybiBvcHRpb25Db250YWluZXI7XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlT3B0aW9uc0xpc3Q6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cdFx0XHQkLmVhY2goY29udGFpbmVyLmNoaWxkcmVuLCBmdW5jdGlvbihpbmRleCwgY3VycmVudE5vZGUpIHtcclxuXHRcdFx0XHR2YXIgaXRlbSA9IHNlbGYuY3JlYXRlT3B0aW9uQ29udGFpbmVyKGN1cnJlbnROb2RlKSxcclxuXHRcdFx0XHRcdG5ld05vZGU7XHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRjYXNlICdvcHRpb24nOiBuZXdOb2RlID0gc2VsZi5jcmVhdGVPcHRpb24oY3VycmVudE5vZGUpOyBicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ29wdGdyb3VwJzogbmV3Tm9kZSA9IHNlbGYuY3JlYXRlT3B0R3JvdXAoY3VycmVudE5vZGUpOyBicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5hcHBlbmRDaGlsZChpdGVtKS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBsaXN0O1xyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBjaGVjayBmb3Igc2VsZWN0IGlubmVySFRNTCBjaGFuZ2VzXHJcblx0XHRcdGlmICh0aGlzLnN0b3JlZFNlbGVjdEhUTUwgIT09IHRoaXMuZWxlbWVudC5wcm9wKCdpbm5lckhUTUwnKSkge1xyXG5cdFx0XHRcdHRoaXMucmVidWlsZExpc3QoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVmcmVzaCBjdXN0b20gc2Nyb2xsYmFyXHJcblx0XHRcdHZhciBzY3JvbGxJbnN0YW5jZSA9IGpjZi5nZXRJbnN0YW5jZSh0aGlzLmxpc3RIb2xkZXIpO1xyXG5cdFx0XHRpZiAoc2Nyb2xsSW5zdGFuY2UpIHtcclxuXHRcdFx0XHRzY3JvbGxJbnN0YW5jZS5yZWZyZXNoKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlZnJlc2ggc2VsZWN0ZXMgY2xhc3Nlc1xyXG5cdFx0XHR0aGlzLnJlZnJlc2hTZWxlY3RlZENsYXNzKCk7XHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMubGlzdEhvbGRlci5vZmYoJ2pjZi1tb3VzZXdoZWVsJywgdGhpcy5wcmV2ZW50V2hlZWxIYW5kbGVyKTtcclxuXHRcdFx0dGhpcy5saXN0SG9sZGVyLm9mZignamNmLXBvaW50ZXJkb3duJywgdGhpcy5pbmRleFNlbGVjdG9yLCB0aGlzLm9uU2VsZWN0SXRlbSk7XHJcblx0XHRcdHRoaXMubGlzdEhvbGRlci5vZmYoJ2pjZi1wb2ludGVyb3ZlcicsIHRoaXMuaW5kZXhTZWxlY3RvciwgdGhpcy5vbkhvdmVySXRlbSk7XHJcblx0XHRcdHRoaXMubGlzdEhvbGRlci5vZmYoJ2pjZi1wb2ludGVyZG93bicsIHRoaXMub25QcmVzcyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIGhlbHBlciBmdW5jdGlvbnNcclxuXHR2YXIgZ2V0UHJlZml4ZWRDbGFzc2VzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBwcmVmaXhUb0FkZCkge1xyXG5cdFx0cmV0dXJuIGNsYXNzTmFtZSA/IGNsYXNzTmFtZS5yZXBsYWNlKC9bXFxzXSooW1xcU10rKStbXFxzXSovZ2ksIHByZWZpeFRvQWRkICsgJyQxICcpIDogJyc7XHJcblx0fTtcclxuXHR2YXIgbWFrZVVuc2VsZWN0YWJsZSA9IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciB1bnNlbGVjdGFibGVDbGFzcyA9IGpjZi5nZXRPcHRpb25zKCkudW5zZWxlY3RhYmxlQ2xhc3M7XHJcblx0XHRmdW5jdGlvbiBwcmV2ZW50SGFuZGxlcihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmdW5jdGlvbihub2RlKSB7XHJcblx0XHRcdG5vZGUuYWRkQ2xhc3ModW5zZWxlY3RhYmxlQ2xhc3MpLm9uKCdzZWxlY3RzdGFydCcsIHByZXZlbnRIYW5kbGVyKTtcclxuXHRcdH07XHJcblx0fSgpKTtcclxuXHJcblx0cmV0dXJuIG1vZHVsZTtcclxufSk7XHJcblxyXG59KGpjZikpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBEOi9wcm9qZWN0cy9udXRyaXRpb24xMDEvYXBwL34vamNmL2pzL2pjZi5zZWxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IEN1c3RvbSBGb3JtcyA6IFRleHRhcmVhIE1vZHVsZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1IFBTRDJIVE1MIC0gaHR0cDovL3BzZDJodG1sLmNvbS9qY2ZcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChMSUNFTlNFLnR4dClcclxuICpcclxuICogVmVyc2lvbjogMS4yLjNcclxuICovXHJcblxyXG4oZnVuY3Rpb24oamNmKSB7XHJcblxyXG5qY2YuYWRkTW9kdWxlKGZ1bmN0aW9uKCQpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRuYW1lOiAnVGV4dGFyZWEnLFxyXG5cdFx0c2VsZWN0b3I6ICd0ZXh0YXJlYScsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHJlc2l6ZTogdHJ1ZSxcclxuXHRcdFx0cmVzaXplclN0cnVjdHVyZTogJzxzcGFuIGNsYXNzPVwiamNmLXJlc2l6ZVwiPjwvc3Bhbj4nLFxyXG5cdFx0XHRmYWtlU3RydWN0dXJlOiAnPHNwYW4gY2xhc3M9XCJqY2YtdGV4dGFyZWFcIj48L3NwYW4+J1xyXG5cdFx0fSxcclxuXHRcdG1hdGNoRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudC5pcygndGV4dGFyZWEnKTtcclxuXHRcdH0sXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pbml0U3RydWN0dXJlKCk7XHJcblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdFx0fSxcclxuXHRcdGluaXRTdHJ1Y3R1cmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBwcmVwYXJlIHN0cnVjdHVyZVxyXG5cdFx0XHR0aGlzLmRvYyA9ICQoZG9jdW1lbnQpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50ID0gJCh0aGlzLm9wdGlvbnMuZWxlbWVudCk7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQgPSAkKHRoaXMub3B0aW9ucy5mYWtlU3RydWN0dXJlKS5pbnNlcnRBZnRlcih0aGlzLnJlYWxFbGVtZW50KTtcclxuXHRcdFx0dGhpcy5yZXNpemVyID0gJCh0aGlzLm9wdGlvbnMucmVzaXplclN0cnVjdHVyZSkuYXBwZW5kVG8odGhpcy5mYWtlRWxlbWVudCk7XHJcblxyXG5cdFx0XHQvLyBhZGQgY3VzdG9tIHNjcm9sbGJhclxyXG5cdFx0XHRpZiAoamNmLm1vZHVsZXMuU2Nyb2xsYWJsZSkge1xyXG5cdFx0XHRcdHRoaXMucmVhbEVsZW1lbnQucHJlcGVuZFRvKHRoaXMuZmFrZUVsZW1lbnQpLmFkZENsYXNzKCkuY3NzKHtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcclxuXHRcdFx0XHRcdHJlc2l6ZTogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsYWJsZSA9IG5ldyBqY2YubW9kdWxlcy5TY3JvbGxhYmxlKHtcclxuXHRcdFx0XHRcdGVsZW1lbnQ6IHRoaXMucmVhbEVsZW1lbnQsXHJcblx0XHRcdFx0XHRhbHdheXNTaG93U2Nyb2xsYmFyczogdHJ1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsYWJsZS5zZXRTY3JvbGxCYXJFZGdlKHRoaXMucmVzaXplci5vdXRlckhlaWdodCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGF0dGFjaEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGFkZCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKHtcclxuXHRcdFx0XHRmb2N1czogdGhpcy5vbkZvY3VzLFxyXG5cdFx0XHRcdGtleXVwOiB0aGlzLm9uQ2hhbmdlLFxyXG5cdFx0XHRcdGNoYW5nZTogdGhpcy5vbkNoYW5nZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMucmVzaXplci5vbignamNmLXBvaW50ZXJkb3duJywgdGhpcy5vblJlc2l6ZVByZXNzKTtcclxuXHRcdH0sXHJcblx0XHRvblJlc2l6ZVByZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciByZXNpemVyT2Zmc2V0ID0gdGhpcy5yZXNpemVyLm9mZnNldCgpLFxyXG5cdFx0XHRcdGFyZWFPZmZzZXQgPSB0aGlzLmZha2VFbGVtZW50Lm9mZnNldCgpO1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR0aGlzLmRyYWdEYXRhID0ge1xyXG5cdFx0XHRcdGFyZWFPZmZzZXQ6IGFyZWFPZmZzZXQsXHJcblx0XHRcdFx0aW5uZXJPZmZzZXRMZWZ0OiBlLnBhZ2VYIC0gcmVzaXplck9mZnNldC5sZWZ0LFxyXG5cdFx0XHRcdGlubmVyT2Zmc2V0VG9wOiBlLnBhZ2VZIC0gcmVzaXplck9mZnNldC50b3BcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5kb2Mub24oe1xyXG5cdFx0XHRcdCdqY2YtcG9pbnRlcm1vdmUnOiB0aGlzLm9uUmVzaXplTW92ZSxcclxuXHRcdFx0XHQnamNmLXBvaW50ZXJ1cCc6IHRoaXMub25SZXNpemVSZWxlYXNlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gcmVzdG9yZSBmb2N1c1xyXG5cdFx0XHRpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzZWREcmFnID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnJlYWxFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlc2l6ZU1vdmU6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIG5ld1dpZHRoID0gZS5wYWdlWCArIHRoaXMuZHJhZ0RhdGEuaW5uZXJPZmZzZXRMZWZ0IC0gdGhpcy5kcmFnRGF0YS5hcmVhT2Zmc2V0LmxlZnQsXHJcblx0XHRcdFx0bmV3SGVpZ2h0ID0gZS5wYWdlWSArIHRoaXMuZHJhZ0RhdGEuaW5uZXJPZmZzZXRUb3AgLSB0aGlzLmRyYWdEYXRhLmFyZWFPZmZzZXQudG9wLFxyXG5cdFx0XHRcdHdpZHRoRGlmZiA9IHRoaXMuZmFrZUVsZW1lbnQuaW5uZXJXaWR0aCgpIC0gdGhpcy5yZWFsRWxlbWVudC5pbm5lcldpZHRoKCk7XHJcblxyXG5cdFx0XHQvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uIG9yIHBhZ2Ugc2Nyb2xsIG9uIHRvdWNoIGRldmljZXNcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Ly8gcmVzaXplIHRleHRhcmVhIGFuZCByZWZyZXNoIHNjcm9sbGJhcnNcclxuXHRcdFx0dGhpcy5yZWFsRWxlbWVudC5pbm5lcldpZHRoKG5ld1dpZHRoIC0gd2lkdGhEaWZmKS5pbm5lckhlaWdodChuZXdIZWlnaHQpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsYWJsZS5yZWJ1aWxkU2Nyb2xsYmFycygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZXN0b3JlIGZvY3VzXHJcblx0XHRcdGlmICh0aGlzLmZvY3VzZWREcmFnKSB7XHJcblx0XHRcdFx0dGhpcy5yZWFsRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZXNpemVSZWxlYXNlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5kb2Mub2ZmKHtcclxuXHRcdFx0XHQnamNmLXBvaW50ZXJtb3ZlJzogdGhpcy5vblJlc2l6ZU1vdmUsXHJcblx0XHRcdFx0J2pjZi1wb2ludGVydXAnOiB0aGlzLm9uUmVzaXplUmVsZWFzZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGRlbGV0ZSB0aGlzLmZvY3VzZWREcmFnO1xyXG5cdFx0fSxcclxuXHRcdG9uRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZvY3VzQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9uKCdibHVyJywgdGhpcy5vbkJsdXIpO1xyXG5cdFx0fSxcclxuXHRcdG9uQmx1cjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZmFrZUVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZvY3VzQ2xhc3MpO1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50Lm9mZignYmx1cicsIHRoaXMub25CbHVyKTtcclxuXHRcdH0sXHJcblx0XHRvbkNoYW5nZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMucmVmcmVzaEN1c3RvbVNjcm9sbGJhcnMoKTtcclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoQ3VzdG9tU2Nyb2xsYmFyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcm9sbGFibGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYWJsZS5yZWRyYXdTY3JvbGxiYXJzKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYWJsZS5yZWJ1aWxkU2Nyb2xsYmFycygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZWZyZXNoIGN1c3RvbSBzY3JvbGwgcG9zaXRpb25cclxuXHRcdFx0dmFyIGlzRGlzYWJsZWQgPSB0aGlzLnJlYWxFbGVtZW50LmlzKCc6ZGlzYWJsZWQnKTtcclxuXHRcdFx0dGhpcy5mYWtlRWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcywgaXNEaXNhYmxlZCk7XHJcblx0XHRcdHRoaXMucmVmcmVzaEN1c3RvbVNjcm9sbGJhcnMoKTtcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZGVzdHJveSBjdXN0b20gc2Nyb2xsYmFyXHJcblx0XHRcdHRoaXMuc2Nyb2xsYWJsZS5kZXN0cm95KCk7XHJcblxyXG5cdFx0XHQvLyByZXN0b3JlIHN0eWxlcyBhbmQgcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0XHR0aGlzLnJlYWxFbGVtZW50LmNzcyh7XHJcblx0XHRcdFx0b3ZlcmZsb3c6ICcnLFxyXG5cdFx0XHRcdHJlc2l6ZTogJydcclxuXHRcdFx0fSkuaW5zZXJ0QmVmb3JlKHRoaXMuZmFrZUVsZW1lbnQpLm9mZih7XHJcblx0XHRcdFx0Zm9jdXM6IHRoaXMub25Gb2N1cyxcclxuXHRcdFx0XHRibHVyOiB0aGlzLm9uQmx1clxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHJlbW92ZSBzY3JvbGxiYXIgYW5kIGZha2Ugd3JhcHBlclxyXG5cdFx0XHR0aGlzLmZha2VFbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0pO1xyXG5cclxufShqY2YpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gRDovcHJvamVjdHMvbnV0cml0aW9uMTAxL2FwcC9+L2pjZi9qcy9qY2YudGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoJCkge1xyXG4gICAgbGV0IGRlc2t0b3AgPSB3aW5kb3cuaXNNb2JpbGUgPT0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGRlc2t0b3ApIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlY3Rpb24tcGFnaW5hdGlvbiBhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuc2VjdGlvbi1wYWdpbmF0aW9uIGxpIGEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmhhc2g7XHJcbiAgICAgICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICdzY3JvbGxUb3AnOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgfSwgNTAwLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLnNlY3Rpb24tcGFnaW5hdGlvbiBsaSBhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyckxpbmsgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZkVsZW1lbnQgPSAkKGN1cnJMaW5rLmF0dHIoJ2hyZWYnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlZkVsZW1lbnQub2Zmc2V0KCkudG9wIDw9IHNjcm9sbFBvcyAmJiByZWZFbGVtZW50Lm9mZnNldCgpLnRvcCApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2VjdGlvbi1wYWdpbmF0aW9uIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJMaW5rLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyTGluay5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufShqUXVlcnkpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL3BhZ2luYXRpb24uanMiLCIoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFjY29yZGlvbiA+IGxpID4gLm9wZW5lcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5hY2NvcmRpb24gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLnNpYmxpbmdzKCcuc2xpZGUnKS5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICQoJy5hY2NvcmRpb24gbGkgLnNsaWRlJykuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc2xpZGUnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG5cclxuICAgICAgICB3aW5kb3cubXlTY3JvbGxyICYmIHdpbmRvdy5teVNjcm9sbHIucmVmcmVzaCgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufShqUXVlcnkpKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXNzZXRzL2pzL21vZHVsZXMvYWNjb3JkaW9uLmpzIiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoZG9jdW1lbnQpLm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgJy5mYWN0cy10YWJzIC50YWJzZXQgYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZihldmVudC50eXBlID09ICd0aG91Y2hzdHJhdCcpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuaGFzaCxcclxuICAgICAgICAgICAgJHRhcmdldCA9ICQodGFyZ2V0KSxcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudElEID0gJHRhcmdldC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICQoJy5mYWN0cy10YWJzIC50YWJzZXQgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkdGFyZ2V0LnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcclxuICAgICAgICAkKCcuZmFjdHMtdGFicycpLmF0dHIoJ2RhdGEtdGFiLWFjdGl2ZScsIHRhcmdldEVsZW1lbnRJRCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5teVNjcm9sbHIgJiYgd2luZG93Lm15U2Nyb2xsci5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm51dHJpb3Rpb24tZmFjdHMtYmxvY2sgLmZpbHRlcnMgYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmhhc2gsXHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKHRhcmdldCk7XHJcbiAgICAgICAgJCgnLm51dHJpb3Rpb24tZmFjdHMtYmxvY2sgLmZpbHRlcnMgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkdGFyZ2V0LnNob3coKVxyXG4gICAgICAgICAgICAuc2libGluZ3MoKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5teVNjcm9sbHIgJiYgd2luZG93Lm15U2Nyb2xsci5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubnV0cmlvdGlvbi1mYWN0cy1ibG9jayAudGFiLWNvbnRhaW5lciAudGFiJykuaGlkZSgpO1xyXG4gICAgJCgnLm51dHJpb3Rpb24tZmFjdHMtYmxvY2sgLnRhYi1jb250YWluZXIgLnRhYjpmaXJzdC1jaGlsZCcpLnNob3coKTtcclxufShqUXVlcnkpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL3RhYnMuanMiLCIoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmFjdHMtc2VjdGlvbi5wZXJzb25hbC1jYWwgLnNsaWRlLW9wZW5lcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKCcuZmFjdHMtc2VjdGlvbi5wZXJzb25hbC1jYWwgLnNsaWRlcicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9KTtcclxufShqUXVlcnkpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2Ryb3Bkb3ducy5qcyIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IHVzZXIgPSB7XHJcbiAgICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgICBoZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgYWdlOiBudWxsLFxyXG4gICAgICAgIGFjdGl2aXR5TGV2ZWw6IG51bGxcclxuICAgIH07XHJcbiAgICBsZXQgc2VsZWN0VGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKTtcclxuICAgIGxldCBjb25jbHVzaW9uT3V0cHV0VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJzb25hbC1jYWwgLmNvbmNsdXNpb24gLmNhbCwgLnBlcnNvbmFsLWRhaWx5LXNlY3Rpb24gLmNvbmNsdXNpb24gLmNhbCcpO1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVyc29uYWwtY2FsIC5tZXNzYWdlLCAucGVyc29uYWwtZGFpbHktc2VjdGlvbiAubWVzc2FnZScpO1xyXG5cclxuICAgIC8vIGFzc3VtaW5nIHVzZXIgb2JqZWN0IHdpdGggd2VpZ2h0IChpbiBsYnMpLCBoZWlnaHQgKGluIGluY2hlcyksIGFnZSwgYWN0aXZpdHlMZXZlbCAoc2VkZW50YXJ5LCBsaWdodCwgbW9kZXJhdGUsIHZlcnksIGV4dHJlbWUpLCBnZW5kZXJcclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUNhbG9yaWVzKHVzZXIpIHtcclxuXHJcbiAgICAgICAgLy8gRm9ybXVsYVxyXG4gICAgICAgIC8vIFNlZSBNaWZmbGluIC0gU3QgSmVvciBGb3JtdWxhIGF0IGh0dHA6Ly93d3cuZnJlZWRpZXRpbmcuY29tL2NhbG9yaWVfbmVlZHMuaHRtbFxyXG4gICAgICAgIC8vIEZlbWFsZTogKCgxMCB4IHdlaWdodCAoa2cpKSArICg2LjI1IHggaGVpZ2h0IChjbSkpIC0gKDUgeCBhZ2UgKHkpKSAtIDE2MSkgWCBhY3Rpdml0eUZhY3RvcjtcclxuICAgICAgICAvLyBNYWxlOiAoKDEwIHggd2VpZ2h0IChrZykpICsgKDYuMjUgeCBoZWlnaHQgKGNtKSkgLSAoNSB4IGFnZSAoeSkpICsgNSkgWCBhY3Rpdml0eUZhY3RvcjtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmdlbmRlcikgcmV0dXJuIDIwMDA7IC8vIHJldHVybiBkZWZhdWx0IGNhbHMgaWYgbm8gZ2VuZGVyIGluZm9cclxuXHJcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXHJcbiAgICAgICAgbGV0IHdlaWdodCA9IDcwLjc2MDM1MjsgLy8gMTU2IHBvdW5kcyBpbiBrZ1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAxNjcuNjQ7IC8vIDUgNicgaW4gY2VudGltZXRlcnNcclxuICAgICAgICBsZXQgYWdlID0gMzc7XHJcbiAgICAgICAgbGV0IGFjdGl2aXR5RmFjdG9yID0gMS41NTsgLy8gTW9kZXJhdGUgYWN0aXZpdHlcclxuXHJcbiAgICAgICAgLy9zZXQgcGFyYW1zXHJcbiAgICAgICAgd2VpZ2h0ID0gdXNlci53ZWlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gdXNlci5oZWlnaHQ7XHJcbiAgICAgICAgYWdlID0gdXNlci5hZ2U7XHJcbiAgICAgICAgYWN0aXZpdHlGYWN0b3IgPSB1c2VyLmFjdGl2aXR5TGV2ZWw7XHJcblxyXG4gICAgICAgIC8vIHNldCBzcGVjaWZpYyB0byB0aGUgdXNlclxyXG4gICAgICAgIC8vIGlmICh1c2VyLndlaWdodCkgd2VpZ2h0ID0gcGFyc2VJbnQodXNlci53ZWlnaHQpICogMC40NTM1OTI7IC8vIGNvbnZlcnRzIGxicyB0byBrZ3MgZm9yIGZvcm11bGFcclxuICAgICAgICAvLyBpZiAodXNlci5oZWlnaHQpIGhlaWdodCA9IHBhcnNlSW50KHVzZXIuaGVpZ2h0KSAqIDIuNTQ7IC8vIGNvbnZlcnRzIGluY2hlcyB0byBjbSBmb3IgZm9ybXVsYVxyXG4gICAgICAgIGlmICh1c2VyLmFnZSkgYWdlID0gdXNlci5hZ2U7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLmFjdGl2aXR5TGV2ZWwpIHtcclxuICAgICAgICAgICAgLy8gc2VkZW50YXJ5LCBsaWdodCwgbW9kZXJhdGUsIHZlcnksIGV4dHJlbWVcclxuICAgICAgICAgICAgc3dpdGNoICh1c2VyLmFjdGl2aXR5TGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWRlbnRhcnlcIjpcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUZhY3RvciA9IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5RmFjdG9yID0gMS4zNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibW9kZXJhdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUZhY3RvciA9IDEuNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVyeVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5RmFjdG9yID0gMS43MjU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXh0cmVtZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5RmFjdG9yID0gMS45O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUZhY3RvciA9IDEuNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VyLmdlbmRlciA9PSAnZmVtYWxlJykgcmV0dXJuIHBhcnNlSW50KCgoMTAgKiB3ZWlnaHQpICsgKDYuMjUgKiBoZWlnaHQpIC0gKDUgKiBhZ2UpIC0gMTYxKSAqIGFjdGl2aXR5RmFjdG9yKTtcclxuICAgICAgICBlbHNlIGlmICh1c2VyLmdlbmRlciA9PSAnbWFsZScpIHJldHVybiBwYXJzZUludCgoKDEwICogd2VpZ2h0KSArICg2LjI1ICogaGVpZ2h0KSAtICg1ICogYWdlKSArIDUpICogYWN0aXZpdHlGYWN0b3IpO1xyXG5cclxuICAgICAgICAvLyBlbHNlLCByZXR1cm4gZGVmYXVsdFxyXG4gICAgICAgIGVsc2UgcmV0dXJuIDIwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RUYWdzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgc2VsZWN0VGFnID0gc2VsZWN0VGFnc1tpXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybXVsYVZhbHVlcyAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYoc2VsZWN0VGFnLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICdzZWxlY3RBZ2UnKXtcclxuICAgICAgICAgICAgICAgIHVzZXIuYWdlID0gc2VsZWN0VGFnLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qY2Ytc2VsZWN0LXRleHQgc3BhbicpLmlubmVySFRNTCA9IGV2ZW50LnRhcmdldC52YWx1ZSArICcgeXJzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzZWxlY3RUYWcuZ2V0QXR0cmlidXRlKCduYW1lJykgPT0gJ3NlbGVjdFdlaWdodCcpIHVzZXIud2VpZ2h0ID0gc2VsZWN0VGFnLnZhbHVlO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RUYWcuZ2V0QXR0cmlidXRlKCduYW1lJykgPT0gJ3NlbGVjdEhlaWdodCcpIHVzZXIuaGVpZ2h0ID0gc2VsZWN0VGFnLnZhbHVlO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RUYWcuZ2V0QXR0cmlidXRlKCduYW1lJykgPT0gJ3NlbGVjdEdlbmRlcicpIHVzZXIuZ2VuZGVyID0gc2VsZWN0VGFnLnZhbHVlO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RUYWcuZ2V0QXR0cmlidXRlKCduYW1lJykgPT0gJ3NlbGVjdEFjdGl2aXR5JykgdXNlci5hY3Rpdml0eUxldmVsID0gc2VsZWN0VGFnLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25jbHVzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdFRhZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmb3JtdWxhVmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvck1lc3NhZ2VzU2hvdygpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXJyb3JNZXNzYWdlVGFncy5sZW5ndGg7IGkrKyApe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VUYWdzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvck1lc3NhZ2VzSGlkZSgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXJyb3JNZXNzYWdlVGFncy5sZW5ndGg7IGkrKyApe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VUYWdzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmNsdXNpb24oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25jbHVzaW9uT3V0cHV0VGFncy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gY29uY2x1c2lvbk91dHB1dFRhZ3NbaV07XHJcbiAgICAgICAgICAgIGlmKHVzZXIuYWdlID09IG51bGwgfHwgdXNlci5hZ2UgPT0gJycgfHwgdXNlci53ZWlnaHQgPT0gbnVsbCB8fCB1c2VyLndlaWdodCA9PSAnJyB8fCB1c2VyLmhlaWdodCA9PSBudWxsIHx8IHVzZXIuaGVpZ2h0ID09ICcnIHx8IHVzZXIuZ2VuZGVyID09IG51bGwgfHwgdXNlci5nZW5kZXIgPT0gJycgfHwgdXNlci5hY3Rpdml0eUxldmVsID09IG51bGwgfHwgdXNlci5hY3Rpdml0eUxldmVsID09ICcnKXtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gMjAwMCArICdjYWwnO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlc1Nob3coKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjYWxjdWxhdGVDYWxvcmllcyh1c2VyKSArICdjYWwnO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlc0hpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0oKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hc3NldHMvanMvbW9kdWxlcy9mb3JtdWxhLWNhbG9yaWVzLmpzIiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIC8vLS0tLS0gT1BFTlxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXBvcHVwLW9wZW5dJywgZnVuY3Rpb24oZXZlbnQpICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldGVkX3BvcHVwX2NsYXNzID0gJCh0aGlzKS5hdHRyKCdkYXRhLXBvcHVwLW9wZW4nKTtcclxuICAgICAgICBsZXQgcG9wdXAgPSAkKCdbZGF0YS1wb3B1cD1cIicgKyB0YXJnZXRlZF9wb3B1cF9jbGFzcyArICdcIl0nKTtcclxuICAgICAgICBwb3B1cC5mYWRlSW4oMjAwKTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvcGVuZWQtcG9wdXAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vLS0tLS0gQ0xPU0VcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1wb3B1cC1jbG9zZV0nLCBmdW5jdGlvbihldmVudCkgIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ZWRfcG9wdXBfY2xhc3MgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtcG9wdXAtY2xvc2UnKTtcclxuICAgICAgICBsZXQgcG9wdXAgPSAkKCdbZGF0YS1wb3B1cD1cIicgKyB0YXJnZXRlZF9wb3B1cF9jbGFzcyArICdcIl0nKTtcclxuICAgICAgICBwb3B1cC5mYWRlT3V0KDIwMCk7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3BlbmVkLXBvcHVwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcG9wdXBdJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1wb3B1cF0gLnBvcHVwLWlubmVyJykuaXMoZXZlbnQudGFyZ2V0KSAmJiAkKCdbZGF0YS1wb3B1cF0gLnBvcHVwLWlubmVyJykuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXBvcHVwXScpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuZWQtcG9wdXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufShqUXVlcnkpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hc3NldHMvanMvbW9kdWxlcy9wb3B1cC5qcyIsIihmdW5jdGlvbiAoJCkge1xyXG4gICAgbGV0IGRlc2t0b3AgPSB3aW5kb3cuaXNNb2JpbGUgPT0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGRlc2t0b3ApIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBmbkV4ZWN1dGlvbkZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyRWxlbWVudCA9ICQoJyNvcmRlci1tYXR0ZXJzIC5vcmRlci1saXN0Jyk7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbkNvbnRhaW5lckVsZW1zID0gY29udGFpbmVyRWxlbWVudC5vZmZzZXQoKS50b3AgLSA1MDA7IC8vIDUwMCAtIGFib3V0IGhhbGYgb2YgZGVza3RvcCBzY3JlZW5cclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuY3NzKHtwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiAnNDAwcHgnfSk7XHJcblxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsUG9zID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNJbmdyZWRpZW50cycpLm9mZnNldCgpLnRvcCAtIDg2IDw9IHNjcm9sbFBvcyAmJiAkKCcjSW5ncmVkaWVudHMnKS5vZmZzZXQoKS50b3AgKyAkKCcjSW5ncmVkaWVudHMnKS5oZWlnaHQoKSA+IHNjcm9sbFBvcyAtIDg2KSB7IC8vIFwiLSA4NlwiIGhlaWdodCBvZiBuYXZpZ2F0aW9uIGluIGhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkNvbnRhaW5lckVsZW1zIDw9IHNjcm9sbFBvcyAmJiBwb3NpdGlvbkNvbnRhaW5lckVsZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbkV4ZWN1dGlvbkZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRDbGFzcygnYW5pbWF0aW9uLWFjdGl2YXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hQb3NpdGlvbkVsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRBbmltYXRpb25Ub0VsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbkV4ZWN1dGlvbkZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2F0Y2hQb3NpdGlvbkVsZW1lbnRzKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNvcmRlci1tYXR0ZXJzIC5vcmRlci1saXN0IGxpJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvblRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gJCgnI29yZGVyLW1hdHRlcnMgLm9yZGVyLWxpc3QnKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uTGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtICQoJyNvcmRlci1tYXR0ZXJzIC5vcmRlci1saXN0Jykub2Zmc2V0KCkubGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe3RvcDogcG9zaXRpb25Ub3AgLSAyMCwgbGVmdDogcG9zaXRpb25MZWZ0fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEFuaW1hdGlvblRvRWxlbWVudHMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI29yZGVyLW1hdHRlcnMgLm9yZGVyLWxpc3QgbGknKS5jc3Moe3Bvc2l0aW9uOiAnYWJzb2x1dGUnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI29yZGVyLW1hdHRlcnMgLm9yZGVyLWxpc3QgbGk6bnRoLWNoaWxkKDEpJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICc4MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJ1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI29yZGVyLW1hdHRlcnMgLm9yZGVyLWxpc3QgbGk6bnRoLWNoaWxkKDIpJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICc2MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJSdcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNvcmRlci1tYXR0ZXJzIC5vcmRlci1saXN0IGxpOm50aC1jaGlsZCgzKScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnMTcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnXHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjb3JkZXItbWF0dGVycyAub3JkZXItbGlzdCBsaTpudGgtY2hpbGQoNCknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogJzIzMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJ1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI29yZGVyLW1hdHRlcnMgLm9yZGVyLWxpc3QgbGk6bnRoLWNoaWxkKDUpJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6ICcyNzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJSdcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNvcmRlci1tYXR0ZXJzIC5vcmRlci1saXN0IGxpOm50aC1jaGlsZCg2KScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTlweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnMzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnXHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjb3JkZXItbWF0dGVycyAub3JkZXItbGlzdCBsaTpudGgtY2hpbGQoNyknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogJzM0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJ1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufShqUXVlcnkpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2FuaW1hdGlvbi1vcmRlci1tYXR0ZXJzLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUNkQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQ1JBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7O0FDRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFpQkE7QUFFQTs7Ozs7Ozs7O0FDakNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbmVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQTtBQUVBOzs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFyRUE7QUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBGQTtBQUNBO0FBcUVBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==